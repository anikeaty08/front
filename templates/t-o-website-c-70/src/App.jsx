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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_20%_10%,rgba(253,224,71,0.18),transparent_55%),radial-gradient(70%_60%_at_85%_20%,rgba(34,197,94,0.15),transparent_60%),radial-gradient(80%_70%_at_50%_90%,rgba(239,68,68,0.14),transparent_55%)]"></div>
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)', backgroundSize: '22px 22px'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/70 to-slate-950"></div>
</div>

<div className="border-b border-white/10 bg-white/5 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/10">
<span className="text-sm font-semibold tracking-tight text-white">N</span>
</span>
<span className="text-sm font-medium tracking-tight">Noeluxe</span>
<span className="hidden sm:inline text-xs text-slate-300">• xứ sở mùa đông ấm cúng</span>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 ring-1 ring-emerald-400/20">
<iconify-icon className="text-emerald-200" height="16" icon="lucide:truck" width="16"></iconify-icon>
<span className="text-xs text-emerald-100">Miễn phí vận chuyển từ 799k</span>
</div>
<button className="relative inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 hover:bg-white/15" id="openCartBtnTop">
<iconify-icon className="text-white/90" height="16" icon="lucide:shopping-bag" width="16"></iconify-icon>
<span>Giỏ hàng</span>
<span className="ml-1 inline-flex min-w-5 items-center justify-center rounded-full bg-red-500/90 px-1.5 py-0.5 text-[0.625rem] font-semibold text-white" id="cartCountBadgeTop">0</span>
</button>
</div>
</div>
</div>

<header className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
<div className="grid gap-4 lg:grid-cols-[1.25fr,0.75fr] lg:items-stretch">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Quà tặng Giáng sinh cao cấp</h1>
<p className="mt-1 text-sm text-slate-300">Chọn quà tinh tế — đóng gói sang trọng — giao nhanh an tâm.</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-full bg-amber-400/10 px-3 py-2 ring-1 ring-amber-300/20">
<iconify-icon className="text-amber-200" height="16" icon="lucide:sparkles" width="16"></iconify-icon>
<span className="text-xs text-amber-100">Gói quà miễn phí</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-950 px-4 py-2 text-xs font-semibold hover:bg-slate-100" id="goGuideBtn">
<iconify-icon className="text-slate-900" height="16" icon="lucide:compass" width="16"></iconify-icon>
<span>Hướng dẫn chọn quà</span>
</button>
</div>
</div>

<div className="mt-4 grid gap-3 lg:grid-cols-[1fr,auto]">
<div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 ring-1 ring-white/5">
<iconify-icon className="text-slate-300" height="18" icon="lucide:search" width="18"></iconify-icon>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-400 outline-none" id="searchInput" placeholder="Tìm nhanh: nến, gấu bông, rượu vang, vòng nguyệt quế..."/>
<button className="hidden rounded-lg px-2 py-1 text-xs text-slate-200 hover:bg-white/10" id="clearSearchBtn">Xóa</button>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="catBtn rounded-full bg-white/10 px-3 py-2 text-xs font-medium ring-1 ring-white/10 hover:bg-white/15" data-category="all">Tất cả</button>
<button className="catBtn rounded-full bg-white/5 px-3 py-2 text-xs font-medium ring-1 ring-white/10 hover:bg-white/15" data-category="home">Trang trí nhà cửa</button>
<button className="catBtn rounded-full bg-white/5 px-3 py-2 text-xs font-medium ring-1 ring-white/10 hover:bg-white/15" data-category="women">Quà tặng cho Nữ</button>
<button className="catBtn rounded-full bg-white/5 px-3 py-2 text-xs font-medium ring-1 ring-white/10 hover:bg-white/15" data-category="men">Quà tặng cho Nam</button>
<button className="catBtn rounded-full bg-white/5 px-3 py-2 text-xs font-medium ring-1 ring-white/10 hover:bg-white/15" data-category="kids">Đồ chơi trẻ em</button>
</div>
</div>

<div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 via-white/5 to-red-500/10">
<div className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-3">
<div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="text-white" height="18" icon="lucide:gift" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Miễn phí vận chuyển • Giao trong 2–24 giờ</p>
<p className="text-xs text-slate-300">Áp dụng đơn từ <span className="font-semibold text-amber-200">799.000đ</span> • Hỗ trợ đổi trả 7 ngày.</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/40 px-3 py-2 ring-1 ring-white/10">
<iconify-icon className="text-white/90" height="16" icon="lucide:snowflake" width="16"></iconify-icon>
<span className="text-xs text-slate-200">Chủ đề</span>
<span className="text-xs font-semibold text-white">Winter Cozy</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-amber-400 text-slate-950 px-4 py-2 text-xs font-semibold hover:bg-amber-300" id="viewCartBtnHero">
<iconify-icon className="text-slate-900" height="16" icon="lucide:shopping-cart" width="16"></iconify-icon>
<span>Xem giỏ</span>
</button>
</div>
</div>
</div>
</div>

<aside className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur" id="guideSection">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Hướng dẫn chọn quà</h2>
<p className="mt-1 text-xs text-slate-300">Chọn theo người nhận, ngân sách và “vibe” mùa lễ.</p>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-amber-200" height="16" icon="lucide:star" width="16"></iconify-icon>
<span className="text-xs text-slate-200">Gợi ý thông minh</span>
</div>
</div>
<div className="mt-4 grid gap-3">
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-200">Người nhận</label>
<div className="grid grid-cols-2 gap-2">
<button className="recipientBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-recipient="women">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-200" height="16" icon="lucide:flower-2" width="16"></iconify-icon>
<span className="font-semibold text-white">Nữ</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Tinh tế, ấm áp</p>
</button>
<button className="recipientBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-recipient="men">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-200" height="16" icon="lucide:watch" width="16"></iconify-icon>
<span className="font-semibold text-white">Nam</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Đẳng cấp, thực dụng</p>
</button>
<button className="recipientBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-recipient="kids">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-200" height="16" icon="lucide:toy-brick" width="16"></iconify-icon>
<span className="font-semibold text-white">Trẻ em</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Vui nhộn, an toàn</p>
</button>
<button className="recipientBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-recipient="home">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/90" height="16" icon="lucide:home" width="16"></iconify-icon>
<span className="font-semibold text-white">Nhà cửa</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Trang trí mùa lễ</p>
</button>
</div>
</div>
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-200">Ngân sách</label>
<div className="grid grid-cols-3 gap-2">
<button className="budgetBtn rounded-xl bg-slate-950/35 px-3 py-2 text-xs ring-1 ring-white/10 hover:bg-white/10" data-budget="under500">
<span className="font-semibold text-white">&lt; 500k</span>
</button>
<button className="budgetBtn rounded-xl bg-slate-950/35 px-3 py-2 text-xs ring-1 ring-white/10 hover:bg-white/10" data-budget="500to1000">
<span className="font-semibold text-white">500k–1tr</span>
</button>
<button className="budgetBtn rounded-xl bg-slate-950/35 px-3 py-2 text-xs ring-1 ring-white/10 hover:bg-white/10" data-budget="over1000">
<span className="font-semibold text-white">&gt; 1tr</span>
</button>
</div>
</div>
<div className="grid gap-2">
<label className="text-xs font-medium text-slate-200">Phong cách</label>
<div className="grid grid-cols-2 gap-2">
<button className="vibeBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-vibe="cozy">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-200" height="16" icon="lucide:flame" width="16"></iconify-icon>
<span className="font-semibold text-white">Cozy</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Nến, len, hương thơm</p>
</button>
<button className="vibeBtn rounded-xl bg-slate-950/35 px-3 py-2 text-left text-xs ring-1 ring-white/10 hover:bg-white/10" data-vibe="lux">
<div className="flex items-center gap-2">
<iconify-icon className="text-amber-200" height="16" icon="lucide:gem" width="16"></iconify-icon>
<span className="font-semibold text-white">Sang trọng</span>
</div>
<p className="mt-1 text-[0.6875rem] text-slate-300">Hộp quà, phụ kiện, rượu</p>
</button>
</div>
</div>
<div className="flex items-center justify-between gap-3 pt-1">
<button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" id="resetGuideBtn">
              Đặt lại
            </button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-slate-950 px-4 py-2 text-xs font-semibold hover:bg-emerald-400" id="applyGuideBtn">
<iconify-icon className="text-slate-900" height="16" icon="lucide:wand-2" width="16"></iconify-icon>
<span>Gợi ý ngay</span>
</button>
</div>
<div className="rounded-xl border border-white/10 bg-slate-950/35 p-3">
<div className="flex items-center justify-between gap-3">
<p className="text-xs font-semibold tracking-tight text-white">Gợi ý cho bạn</p>
<button className="hidden rounded-lg px-2 py-1 text-xs text-slate-200 hover:bg-white/10" id="clearRecommendationsBtn">Xóa</button>
</div>
<div className="mt-2 grid gap-2" id="recommendations"></div>
<p className="text-[0.6875rem] text-slate-400" id="recommendationHint">Chọn tiêu chí rồi bấm “Gợi ý ngay”.</p>
</div>
</div>
</aside>
</div>
</header>

<main className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6">
<div className="flex items-end justify-between gap-3">
<div>
<h2 className="text-lg font-semibold tracking-tight text-white">Sản phẩm nổi bật</h2>
<p className="mt-1 text-xs text-slate-300">Tông màu lễ hội: đỏ • xanh lá • vàng • trắng — tối giản, ấm cúng.</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 rounded-full bg-white/5 px-3 py-2 ring-1 ring-white/10">
<iconify-icon className="text-emerald-200" height="16" icon="lucide:shield-check" width="16"></iconify-icon>
<span className="text-xs text-slate-200">Thanh toán an toàn</span>
</div>
</div>
</div>
<div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" id="productGrid"></div>

<section className="mt-10 grid gap-4 lg:grid-cols-[1.2fr,0.8fr]" id="cartSection">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
<div className="flex items-center justify-between gap-3">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white">Giỏ hàng</h3>
<p className="mt-1 text-xs text-slate-300">Chỉnh số lượng, áp mã ưu đãi, xem phí vận chuyển.</p>
</div>
<button className="rounded-full bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10" id="clearCartBtn">
            Xóa giỏ
          </button>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-slate-950/35 p-4" id="cartEmptyState">
<div className="flex items-start gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10">
<iconify-icon className="text-white/90" height="18" icon="lucide:shopping-basket" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">Giỏ hàng đang trống</p>
<p className="mt-1 text-xs text-slate-300">Thêm vài món để cảm nhận “cozy winter” ngay nhé.</p>
</div>
</div>
</div>
<div className="mt-4 grid gap-3" id="cartList"></div>
<div className="mt-4 grid gap-3 sm:grid-cols-2">
<div className="rounded-xl border border-white/10 bg-slate-950/35 p-3"></div></div></div></section></main>
    </>
  );
}
