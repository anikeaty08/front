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



      window.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="border-b border-slate-800/80 backdrop-blur-sm sticky top-0 z-30">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-amber-300">TC</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight">ThờiGianCũ</span>
<span className="text-xs text-slate-400">Đồng hồ đã qua sử dụng tuyển chọn</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-amber-200 transition-colors" href="#collection">Bộ sưu tập</a>
<a className="text-slate-300 hover:text-amber-200 transition-colors" href="#why-us">Cam kết</a>
<a className="text-slate-300 hover:text-amber-200 transition-colors" href="#process">Quy trình</a>
<a className="text-slate-300 hover:text-amber-200 transition-colors" href="#contact">Liên hệ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 hover:bg-slate-800/80 text-xs sm:text-sm text-slate-100 py-2 px-3 transition-colors">
<span className="lucide lucide-clock-3 h-4 w-4 stroke-amber-300"></span>
<span>Bán đồng hồ của bạn</span>
</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 text-xs sm:text-sm font-medium py-2 px-3 transition-colors">
<span className="lucide lucide-phone-call h-4 w-4"></span>
<span>Tư vấn nhanh</span>
</button>
</div>
</div>
</header>
<main className="flex-1">

<section className="border-b border-slate-800/80">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-10 sm:py-14 px-4 sm:px-6 lg:px-8">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-100/90 text-xs px-3 py-1">
<span className="lucide lucide-shield-check h-3.5 w-3.5"></span>
<span>Bảo hành 12 tháng cho mọi đồng hồ</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                  Đồng hồ cũ tuyển chọn,<br className="hidden sm:block"/>
                  giá hợp lý, lịch sử rõ ràng.
                </h1>
<p className="text-base sm:text-lg text-slate-300">
                  Chúng tôi chỉ nhận những chiếc đồng hồ có nguồn gốc minh bạch, kiểm định kỹ lưỡng
                  và bảo dưỡng toàn diện trước khi đến tay bạn.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 text-sm font-medium py-2.5 px-4 transition-colors">
<span className="lucide lucide-shopping-bag h-4 w-4"></span>
<span>Xem ngay bộ sưu tập</span>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800/80 text-sm text-slate-100 py-2.5 px-4 transition-colors">
<span className="lucide lucide-play-circle h-4 w-4"></span>
<span>Giới thiệu về cửa hàng</span>
</button>
</div>
<div className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">250+</div>
<div>Chiếc đồng hồ đã tìm được chủ mới</div>
</div>
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">7 ngày</div>
<div>Đổi trả nếu không đúng mô tả</div>
</div>
<div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">100%</div>
<div>Hàng chính hãng, có chứng từ</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-6 bg-amber-500/10 rounded-3xl blur-3xl opacity-60"></div>
<div className="relative rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl shadow-black/40 overflow-hidden">

<div className="aspect-[4/3] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
<div className="relative h-full w-full flex items-center justify-center">
<div className="h-40 w-40 sm:h-52 sm:w-52 rounded-full border border-amber-300/40 bg-slate-900/80 shadow-inner shadow-black/60 flex items-center justify-center">
<div className="relative h-28 w-28 sm:h-36 sm:w-36 rounded-full border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
<div className="absolute inset-4 rounded-full border border-slate-600/80"></div>
<span className="text-xs sm:text-sm tracking-tight text-slate-200">Ảnh đồng hồ<br/>hot nhất hôm nay</span>
</div>
</div>
</div>
</div>

<div className="p-4 sm:p-5 space-y-4">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                        Rolex Datejust 36
                      </h2>
<p className="text-xs sm:text-sm text-slate-300">
                        Thép không gỉ • Mặt xanh navy • Fullbox 2019
                      </p>
</div>
<div className="text-right">
<div className="text-sm text-slate-400 line-through">162.000.000đ</div>
<div className="text-base sm:text-lg font-semibold tracking-tight text-amber-300">
                        139.000.000đ
                      </div>
</div>
</div>
<div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
<div className="flex items-center gap-2 text-slate-300">
<span className="lucide lucide-badge-check h-3.5 w-3.5 text-amber-300"></span>
<span>Kiểm định bởi chuyên gia</span>
</div>
<div className="flex items-center gap-2 text-slate-300">
<span className="lucide lucide-history h-3.5 w-3.5 text-amber-300"></span>
<span>Lịch sử bảo dưỡng rõ ràng</span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-950 hover:bg-slate-200 text-sm font-medium py-2.5 transition-colors">
<span className="lucide lucide-message-circle h-4 w-4"></span>
<span>Nhắn tin nhận hình ảnh &amp; video chi tiết</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/80" id="collection">
<div className="max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Bộ sưu tập hôm nay
                </h2>
<p className="text-base text-slate-300">
                  Lọc kỹ, cập nhật liên tục. Mỗi chiếc đồng hồ là một câu chuyện.
                </p>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 text-slate-100 hover:bg-slate-800/80 py-1.5 px-3 transition-colors">
<span className="lucide lucide-filter h-3.5 w-3.5"></span>
<span>Bộ lọc</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-100 hover:bg-amber-400/20 py-1.5 px-3 transition-colors">
<span className="lucide lucide-star h-3.5 w-3.5"></span>
<span>Đề xuất cho bạn</span>
</button>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 hover:border-amber-400/40 hover:bg-slate-900/80 transition-colors flex flex-col overflow-hidden">
<div className="aspect-[4/3] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
<div className="h-24 w-24 rounded-full border border-slate-600 bg-slate-900/80"></div>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50 group-hover:text-amber-200">
                        Omega Seamaster Aqua Terra
                      </h3>
<p className="text-xs sm:text-sm text-slate-400">
                        Máy automatic • 41mm • Kèm hộp
                      </p>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-2 py-0.5">
                      Like new 98%
                    </span>
</div>
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
<div className="flex flex-col">
<span className="text-slate-400 line-through">75.000.000đ</span>
<span className="text-sm sm:text-base font-semibold tracking-tight text-amber-300">
                        68.500.000đ
                      </span>
</div>
<div className="flex flex-col items-end">
<span>Còn 1 chiếc</span>
<span className="flex items-center gap-1 text-amber-300">
<span className="lucide lucide-badge-check h-3 w-3"></span>
<span>Đã kiểm định</span>
</span>
</div>
</div>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 text-xs sm:text-sm text-slate-100 hover:bg-slate-800/90 py-2 px-3 transition-colors">
<span className="lucide lucide-eye h-3.5 w-3.5"></span>
<span>Xem chi tiết &amp; lịch sử bảo dưỡng</span>
</button>
</div>
</article>

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 hover:border-amber-400/40 hover:bg-slate-900/80 transition-colors flex flex-col overflow-hidden">
<div className="aspect-[4/3] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
<div className="h-24 w-24 rounded-full border border-slate-600 bg-slate-900/80"></div>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50 group-hover:text-amber-200">
                        Tissot Gentleman Powermatic 80
                      </h3>
<p className="text-xs sm:text-sm text-slate-400">
                        Máy Thụy Sĩ • Dây thép • Fullbox 2022
                      </p>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/30 px-2 py-0.5">
                      Bán chạy
                    </span>
</div>
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
<div className="flex flex-col">
<span className="text-slate-400 line-through">18.500.000đ</span>
<span className="text-sm sm:text-base font-semibold tracking-tight text-amber-300">
                        15.900.000đ
                      </span>
</div>
<div className="flex flex-col items-end">
<span>Còn 3 chiếc</span>
<span className="flex items-center gap-1 text-emerald-300">
<span className="lucide lucide-shield-check h-3 w-3"></span>
<span>Bảo hành 12 tháng</span>
</span>
</div>
</div>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 text-xs sm:text-sm text-slate-100 hover:bg-slate-800/90 py-2 px-3 transition-colors">
<span className="lucide lucide-shopping-cart h-3.5 w-3.5"></span>
<span>Giữ hàng trong 24 giờ</span>
</button>
</div>
</article>

<article className="group rounded-2xl border border-slate-800/80 bg-slate-950/60 hover:border-amber-400/40 hover:bg-slate-900/80 transition-colors flex flex-col overflow-hidden">
<div className="aspect-[4/3] bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
<div className="h-24 w-24 rounded-full border border-slate-600 bg-slate-900/80"></div>
</div>
<div className="p-4 sm:p-5 flex-1 flex flex-col gap-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50 group-hover:text-amber-200">
                        Seiko Presage Cocktail Time
                      </h3>
<p className="text-xs sm:text-sm text-slate-400">
                        Máy Automatic • Mặt xanh • Dây da
                      </p>
</div>
<span className="text-[0.65rem] sm:text-xs rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/30 px-2 py-0.5">
                      Giá tốt
                    </span>
</div>
<div className="flex items-center justify-between text-xs sm:text-sm text-slate-300">
<div className="flex flex-col">
<span className="text-slate-400 line-through">9.000.000đ</span>
<span className="text-sm sm:text-base font-semibold tracking-tight text-amber-300">
                        7.200.000đ
                      </span>
</div>
<div className="flex flex-col items-end">
<span>Hộp + thẻ bảo hành hãng</span>
<span className="flex items-center gap-1 text-sky-300">
<span className="lucide lucide-history h-3 w-3"></span>
<span>Đã bảo dưỡng định kỳ</span>
</span>
</div>
</div>
<button className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 text-xs sm:text-sm text-slate-100 hover:bg-slate-800/90 py-2 px-3 transition-colors">
<span className="lucide lucide-message-circle h-3.5 w-3.5"></span>
<span>Hỏi thêm về tình trạng thực tế</span>
</button>
</div>
</article>
</div>
<div className="flex items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
<span>Danh sách chỉ hiển thị một phần. Liên hệ để nhận full catalogue hôm nay.</span>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800/80 text-slate-100 py-1.5 px-3 transition-colors">
<span className="lucide lucide-send h-3.5 w-3.5"></span>
<span>Nhận danh sách qua Zalo</span>
</button>
</div>
</div>
</section>

<section className="border-b border-slate-800/80" id="why-us">
<div className="max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Vì sao nên mua đồng hồ cũ tại đây?
                </h2>
<p className="text-base text-slate-300">
                  Minh bạch, trung thực, ưu tiên trải nghiệm lâu dài hơn là một giao dịch nhanh.
                </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5 lg:gap-6">

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<span className="lucide lucide-shield-check h-4 w-4 text-emerald-300"></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      Kiểm định &amp; bảo hành
                    </h3>
</div>
<span className="text-[0.65rem] sm:text-xs text-emerald-300">Không thay máy</span>
</div>
<p className="text-sm text-slate-300">
                  Mỗi chiếc đồng hồ đều được mở máy kiểm tra, test độ chính xác, chống nước, độ trữ cót
                  và được bảo hành lỗi máy trong 12 tháng tại cửa hàng.
                </p>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<span className="lucide lucide-history h-4 w-4 text-amber-300"></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      Lịch sử rõ ràng
                    </h3>
</div>
<span className="text-[0.65rem] sm:text-xs text-amber-300">Nói rõ thay thế</span>
</div>
<p className="text-sm text-slate-300">
                  Cung cấp thông tin chi tiết: năm sản xuất, lịch sử bảo dưỡng, linh kiện đã thay,
                  mức độ đánh bóng… để bạn hiểu đúng giá trị chiếc đồng hồ.
                </p>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-3">
<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<span className="lucide lucide-repeat-2 h-4 w-4 text-sky-300"></span>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      Đổi trả &amp; nâng cấp
                    </h3>
</div>
<span className="text-[0.65rem] sm:text-xs text-sky-300">Thu lại công bằng</span>
</div>
<p className="text-sm text-slate-300">
                  Đổi trả trong 7 ngày nếu không đúng mô tả. Hỗ trợ thu lại/nâng cấp với mức giá rõ ràng,
                  minh bạch theo thị trường tại thời điểm giao dịch.
                </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-800/80" id="process">
<div className="max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Quy trình mua hàng
                </h2>
<p className="text-base text-slate-300">
                  Đơn giản, nhanh chóng, ưu tiên trao đổi trực tiếp để bạn yên tâm tuyệt đối.
                </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="space-y-4">

<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-semibold tracking-tight">
                      1
                    </div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                      Chọn mẫu &amp; nhận tư vấn chi tiết
                    </h3>
<p className="text-sm text-slate-300">
                      Inbox/Zalo cho chúng tôi mẫu bạn thích. Bạn sẽ nhận hình ảnh macro, video,
                      thông số chi tiết và tư vấn giá so với thị trường.
                    </p>
</div>
</div>

<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-semibold tracking-tight">
                      2
                    </div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                      Đặt cọc &amp; giữ hàng
                    </h3>
<p className="text-sm text-slate-300">
                      Bạn chuyển cọc một phần giá trị đồng hồ để giữ hàng trong 24–48 giờ,
                      kèm hóa đơn điện tử rõ ràng.
                    </p>
</div>
</div>

<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-semibold tracking-tight">
                      3
                    </div>
<div className="flex-1 w-px bg-slate-700/70 mt-1"></div>
</div>
<div className="pb-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                      Giao nhận &amp; kiểm tra trực tiếp
                    </h3>
<p className="text-sm text-slate-300">
                      Nhận hàng tại cửa hàng hoặc giao ship COD toàn quốc. Bạn được mở hộp,
                      kiểm tra kỹ rồi mới thanh toán phần còn lại.
                    </p>
</div>
</div>

<div className="flex gap-3">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-semibold tracking-tight">
                      4
                    </div>
</div>
<div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                      Hậu mãi dài hạn
                    </h3>
<p className="text-sm text-slate-300">
                      Nhắc lịch bảo dưỡng, hỗ trợ nâng cấp/thu lại sau này với mức giá ưu đãi
                      dành riêng cho khách cũ.
                    </p>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-5 space-y-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<span className="lucide lucide-clock-3 h-4 w-4 text-amber-300"></span>
</div>
<div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      Muốn bán chiếc đồng hồ hiện tại của bạn?
                    </h3>
<p className="text-sm text-slate-300">
                      Gửi cho chúng tôi vài tấm hình &amp; mô tả, bạn sẽ nhận được báo giá trong ngày.
                    </p>
</div>
</div>
<div className="space-y-3">
<div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="space-y-1.5">
<label className="block text-slate-300">Tên &amp; thương hiệu</label>
<input className="w-full rounded-lg border border-slate-700 bg-slate-900/80 focus:outline-none focus:ring-1 focus:ring-amber-400/70 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 py-2 px-3" placeholder="Ví dụ: Seiko Presage SRPB43" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-slate-300">Tình trạng ước lượng</label>
<select className="w-full rounded-lg border border-slate-700 bg-slate-900/80 focus:outline-none focus:ring-1 focus:ring-amber-400/70 text-xs sm:text-sm text-slate-100 py-2 px-3">
<option>Like new 98%</option>
<option>Còn đẹp 95%</option>
<option>Đã sử dụng nhiều</option>
</select>
</div>
</div>
<div className="space-y-1.5 text-xs sm:text-sm">
<label className="block text-slate-300">Link album hình ảnh</label>
<input className="w-full rounded-lg border border-slate-700 bg-slate-900/80 focus:outline-none focus:ring-1 focus:ring-amber-400/70 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 py-2 px-3" placeholder="Google Drive / Zalo / Facebook..." type="text"/>
</div>
<div className="space-y-1.5 text-xs sm:text-sm">
<label className="block text-slate-300">Ghi chú thêm</label>
<textarea className="w-full rounded-lg border border-slate-700 bg-slate-900/80 focus:outline-none focus:ring-1 focus:ring-amber-400/70 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 py-2 px-3" placeholder="Năm mua, đã bảo dưỡng lần nào, còn hộp + giấy tờ không..." rows="3"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 text-sm font-medium py-2.5 px-4 transition-colors">
<span className="lucide lucide-send h-4 w-4"></span>
<span>Gửi yêu cầu báo giá</span>
</button>
<p className="text-slate-400">
                    Hoặc nhắn trực tiếp qua Zalo: 
                    <span className="text-amber-200 font-medium tracking-tight">09xx xxx xxx</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section id="contact">
<div className="max-w-6xl mx-auto py-10 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 lg:p-7 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
<div className="space-y-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                  Đặt câu hỏi, xin tư vấn miễn phí
                </h2>
<p className="text-base text-slate-300">
                  Gửi cho chúng tôi mẫu bạn quan tâm, ngân sách mong muốn. Chúng tôi sẽ gợi ý
                  2–3 lựa chọn phù hợp nhất.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-3 text-xs sm:text-sm">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 py-2.5 px-4 transition-colors">
<span className="lucide lucide-message-circle h-4 w-4"></span>
<span>Chat qua Zalo</span>
</button>
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 hover:bg-slate-900 text-slate-100 py-2.5 px-4 transition-colors">
<span className="lucide lucide-phone h-4 w-4"></span>
<span>Gọi điện trực tiếp</span>
</button>
</div>
</div>
<footer className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs sm:text-sm text-slate-400">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-amber-300">TC</span>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-200">ThờiGianCũ</span>
<span>Đồng hồ đã qua sử dụng tuyển chọn tại TP.HCM</span>
</div>
</div>
<div className="flex flex-wrap gap-3 sm:items-center sm:justify-end">
<span>© 2025 ThờiGianCũ. All rights reserved.</span>
<span className="hidden sm:inline text-slate-600">•</span>
<a className="hover:text-amber-200" href="#">Điều khoản</a>
<a className="hover:text-amber-200" href="#">Chính sách bảo mật</a>
</div>
</footer>
</div>
</section>
</main>
</div>


    </>
  );
}
