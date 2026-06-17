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
      

<div className="h-1 w-full bg-gradient-to-r from-[#00f2fe] via-[#ff0050] to-[#ff8a00]"></div>

<header className="relative overflow-hidden mb-12">
<div className="absolute inset-0 pointer-events-none z-0">
<div className="glow-pink absolute -top-32 right-0 w-[40rem] h-[40rem] rounded-full blur-3xl"></div>
<div className="glow-blue absolute -bottom-32 left-0 w-[36rem] h-[36rem] rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12 pb-8 relative z-10">
<div className="bg-white/80 backdrop-blur-md border border-zinc-200/80 shadow-sm rounded-3xl px-8 md:px-12 py-10 md:py-14">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
<div className="space-y-6 flex-1">
<div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-4 py-1.5 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#ff0050]"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500">TikTok Live Policy</span>
</div>
<div className="space-y-4 max-w-2xl">
<div className="flex items-center gap-2">
<span className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 uppercase">TikTok</span>
<span className="text-3xl md:text-4xl font-medium tracking-tight text-[#00f2fe] uppercase">Live</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-zinc-900 tracking-tight leading-tight">
                                Quy tắc cộng đồng <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900">Phát sóng trực tiếp</span>
</h1>
<p className="text-base md:text-lg leading-relaxed text-zinc-500">
                                Tài liệu tổng hợp 16 mục quy định dành cho hoạt động LIVE, trình bày theo bố cục rõ ràng, khoa học nhằm xây dựng môi trường an toàn.
                            </p>
</div>
</div>
<div className="flex gap-4 min-w-max">
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5 w-32 flex flex-col justify-center items-center text-center">
<div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Danh mục</div>
<div className="text-4xl font-medium tracking-tight text-zinc-900">16</div>
<div className="text-xs text-zinc-500 mt-1">Mục chính</div>
</div>
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-5 w-32 flex flex-col justify-center items-center text-center">
<div className="text-xs uppercase tracking-widest text-zinc-400 mb-1">Hiệu lực</div>
<div className="text-2xl font-medium tracking-tight text-zinc-900">02.24</div>
<div className="text-xs text-zinc-500 mt-1">Năm phát hành</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-6 pb-32">
<div className="flex flex-col xl:flex-row gap-10">

<aside className="w-full xl:w-[320px] shrink-0 xl:sticky xl:top-8 self-start order-2 xl:order-1 hidden md:block">
<div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
<iconify-icon icon="solar:list-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-zinc-400">Mục lục</div>
<div className="text-base font-medium tracking-tight text-zinc-900">16 nội dung chính</div>
</div>
</div>
<nav className="space-y-1.5 text-sm">
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m1">1/ Thông tin cá nhân</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m2">2/ Tóm tắt nguyên tắc cấm</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m3">3/ Ngôn từ thù ghét</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m4">4/ Chơi cờ bạc</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m5">5/ Quấy rối &amp; bắt nạt</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m6">6/ Ảnh khỏa thân</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m7">7/ Nội dung gợi dục</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m8">8/ Tình dục &amp; tình cảm</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m9">9/ Bóc lột tình dục</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m10">10/ Bóc lột thanh thiếu niên</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m11">11/ Trẻ vị thành niên</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m12">12/ Bạo lực giới</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m13">13/ Hoạt động bất hợp pháp</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m14">14/ Bản quyền</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m15">15/ Ngôn từ trên LIVE</a>
<a className="block py-1.5 text-zinc-500 hover:text-zinc-900 hover:translate-x-1 transition-all" href="#m16">16/ Thông tin khác</a>
</nav>
</div>
</aside>

<main className="flex-1 space-y-8 order-1 xl:order-2">

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m1">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff0050]/10 text-[#ff0050] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 01</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Thông tin nhận dạng cá nhân</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5">
<p className="text-base leading-relaxed text-zinc-600">Chúng tôi không cho phép nội dung chứa dữ liệu cá nhân hoặc thông tin nhận dạng cá nhân (PII), bao gồm thông tin bí mật cho các tổ chức công hoặc tư. Khi phát sóng trực tiếp, không cho phép:</p>
<div className="space-y-3">
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Bản thân hoặc người xung quanh không được đọc số điện thoại dưới mọi hình thức.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Các thông tin số liệu riêng tư, giá tiền từ video quảng cáo.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Cung cấp CCCD/CMND/Hộ chiếu/Bằng lái xe bằng hình ảnh hoặc lời nói.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Đọc số tài khoản ngân hàng liên quan tới cá nhân hoặc tổ chức.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Cung cấp thông tin các nền tảng khác (Zalo, Telegram, Facebook, IG...).</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Địa chỉ cụ thể đang ở, hoạt động hoặc quán ăn.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Nội dung liên quan đến Chính trị, Tôn giáo.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Công cụ thứ 3 (Giọng AI, âm thanh quảng cáo Youtube/Zing).</p></div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m2">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#00f2fe]/10 text-[#00b9c3] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 02</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Tóm tắt nguyên tắc cấm trên LIVE</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5">
<p className="text-base leading-relaxed text-zinc-600">Chúng tôi không cho phép các từ ngữ này xuất hiện trên Live, ngay cả từ lóng:</p>
<div className="space-y-3">
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Chỉ hành động:</span> Tụt, cởi, bỏ quần áo…</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Trả kèo:</span> Rên, vuốt ve vùng nhạy cảm, lướt sóng.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Trẻ em:</span> Xuất hiện một mình hoặc không trang phục phù hợp.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Lời nói liên tưởng:</span> Kêu gọi tăng view để làm hành động bất hợp pháp, mô tả nhạy cảm nhằm lách luật.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Lăng mạ &amp; Vu khống:</span> Dùng từ ngữ thóa mạ, bịa chuyện drama hoặc chia sẻ thông tin sai lệch.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Hành hạ bản thân:</span> Tác động vật lý, leo trèo nguy hiểm, uống đồ gây hại.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Hùa theo đối thủ:</span> Yêu cầu hoặc cổ xúy trả kèo PK mang tính 18+, hùa theo bình luận thô tục.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Từ lóng &amp; Giới tính:</span> Các từ lóng thiên hướng thô tục; miệt thị giới tính người xem.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Video &amp; Công cụ thứ 3:</span> Phát video nhạy cảm, sử dụng giọng AI đọc bình luận chứa ngôn từ cấm.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00b9c3] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600"><span className="font-medium text-zinc-900">Tác động vật lý ảo:</span> Giả vờ đánh, đấm qua màn hình, đe dọa bạo lực.</p></div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m3">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff0050]/10 text-[#ff0050] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 03</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Ngôn từ và hành vi gây thù ghét</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 flex items-center">
<p className="text-base leading-relaxed text-zinc-600">
                            TikTok là cộng đồng đa dạng. Chúng tôi không cho phép bất cứ hành vi thù ghét, ngôn từ gây thù ghét hay hành động cổ xúy tư tưởng thù ghét, bao gồm nội dung tấn công cá nhân hoặc nhóm người do đặc điểm được bảo vệ (trong đó có trẻ em).
                        </p>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m4">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff8a00]/10 text-[#ff8a00] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:ticket-sale-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 04</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Chơi cờ bạc</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5 flex flex-col justify-center">
<p className="text-base leading-relaxed text-zinc-600">
                            Tuy là nền tảng giải trí, chúng tôi không cho phép quảng bá dịch vụ đánh bạc, cá cược, vé số, lô đề, mạt chược hay các hình thức gọi mời, khuyến mãi có thể dẫn đến mất mát tài chính.
                        </p>
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4">
<p className="text-sm leading-relaxed text-zinc-500 italic">
                                Ví dụ cấm: “Chiều nay đánh lô con 90 đi”, “Mua ủng hộ em tờ vé số”, hoặc gắn tương tác số với quy đổi tiền tệ…
                            </p>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m5">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-user-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 05</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Quấy rối và bắt nạt</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5">
<p className="text-base leading-relaxed text-zinc-600">Chúng tôi không cho phép sử dụng ngôn ngữ/hành vi quấy rối, làm nhục, đe dọa hay đánh cắp thông tin:</p>
<div className="space-y-3">
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Mục đích nhạo báng, làm nhục, hăm dọa hoặc làm tổn thương.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Tán tụng, bình thường hóa hoặc cổ xúy quấy rối tình dục.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Đe dọa tấn công mạng, đánh cắp/tiết lộ thông tin cá nhân tống tiền.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Hạ thấp nhân phẩm nạn nhân của thảm kịch bạo lực.</p></div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m6">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff0050]/10 text-[#ff0050] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:eye-closed-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 06</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Ảnh khỏa thân</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5 flex flex-col justify-center">
<p className="text-base leading-relaxed text-zinc-600">
                            Không cho phép nội dung mô tả bộ phận nhạy cảm (rốn, mông trần, vùng mu, nhũ hoa...). Đặc biệt cấm trẻ em, sơ sinh không trang phục hoặc dưới 18t xuất hiện 1 mình trong Phiên live.
                        </p>
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4">
<p className="text-sm leading-relaxed text-zinc-500 italic">
                                Lưu ý: Khi cúi cần sử dụng bàn tay che vùng ngực mà tay không chạm vào áo/da thịt.
                            </p>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m7">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#00f2fe]/10 text-[#00b9c3] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:hearts-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 07</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Nội dung gợi dục</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 flex items-center">
<p className="text-base leading-relaxed text-zinc-600">
                            Chúng tôi hoan nghênh vũ đạo sáng tạo, nhưng nghiêm cấm hành vi kích dục, gợi dục hoặc ám chỉ hoạt động tình dục, đặc biệt với người trẻ tuổi để tránh rủi ro bóc lột. Lời kể trần trụi về tình dục cũng bị cấm.
                        </p>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m8">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff8a00]/10 text-[#ff8a00] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:heart-broken-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 08</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Hoạt động tình dục &amp; tình cảm</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-5">
<div className="bg-white border border-zinc-100 shadow-sm rounded-2xl p-5 space-y-2">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Đối với Nền tảng</span>
<p className="text-sm leading-relaxed text-zinc-600">Cấm mô tả tình dục (xâm nhập và không xâm nhập), ái vật, hành vi khêu gợi, kích dục hoặc ngôn ngữ khiêu dâm nhằm thỏa mãn tình dục.</p>
</div>
<div className="bg-white border border-zinc-100 shadow-sm rounded-2xl p-5 space-y-2">
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">Đối với Công ty</span>
<p className="text-sm leading-relaxed text-zinc-600">NST, Quản lý &amp; Nhân sự nội bộ cấm nảy sinh tình cảm, sinh hoạt chung. Cấm tụ tập, gặp gỡ môi giới mại dâm, chất kích thích.</p>
<p className="text-sm leading-relaxed text-zinc-600">Không khuyến khích gặp gỡ User bên ngoài tránh rủi ro: uy tín, an toàn sức khỏe và không bị lợi dụng danh tiếng sai mục đích.</p>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-8">

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m9">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#ff0050]/10 text-[#ff0050] flex items-center justify-center">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 09</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Bóc lột tình dục</h2>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-600">
                            Không cho phép gạ gẫm, cổ xúy hành vi tình dục không đồng thuận, chia sẻ hình ảnh thân mật trái phép, bạo lực tình dục hay tống tiền.
                        </p>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#00f2fe]/10 text-[#00b9c3] flex items-center justify-center">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 10</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Bóc lột thanh thiếu niên</h2>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-600">
                            Bảo vệ không gian an toàn cho người trẻ. Cấm lạm dụng tình dục thanh thiếu niên (CSAM), dụ dỗ, tống tiền, gạ gẫm, ấu dâm, lạm dụng thể chất/tâm lý dưới mọi hình thức (thật/ảo).
                        </p>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m11">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#ff8a00]/10 text-[#ff8a00] flex items-center justify-center">
<iconify-icon icon="solar:baby-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 11</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Hình ảnh trẻ vị thành niên</h2>
</div>
</div>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600"><div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0 mt-1.5"></div>Nội dung kỹ thuật số bắt chước hoạt động tình dục trẻ em.</li>
<li className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600"><div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0 mt-1.5"></div>Lời bài hát, vũ đạo khiêu dâm liên quan.</li>
<li className="flex items-start gap-2 text-sm leading-relaxed text-zinc-600"><div className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0 mt-1.5"></div>Trẻ mặc trang phục kiệm vải không phù hợp.</li>
</ul>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m12">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 12</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Bạo lực giới</h2>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-600">
                            Không gian bình đẳng giới. Cấm hành vi bạo lực giới, tình dục không đồng thuận, lạm dụng/tống tiền bằng hình ảnh và quấy rối tình dục dưới mọi hình thức.
                        </p>
</section>
</div>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m13">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-[#ff0050]/10 text-[#ff0050] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:danger-square-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 13</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">HĐ bất hợp pháp &amp; Hàng hóa</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-4">
<p className="text-base leading-relaxed text-zinc-600">Chúng tôi không cho phép nội dung:</p>
<div className="space-y-3">
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Mô tả, quảng bá/buôn bán súng, đạn dược, vũ khí gây nổ.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Hướng dẫn chế tạo vũ khí hoặc hoạt động tội phạm.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Mô tả, quảng bá/buôn bán ma túy, chất bị kiểm soát.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ff0050] shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Hành vi phạm pháp: trộm cắp, hành hung, bóc lột, làm giả.</p></div>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-8">

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m14">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#00f2fe]/10 text-[#00b9c3] flex items-center justify-center">
<iconify-icon icon="solar:copyright-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 14</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Bản quyền</h2>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-600 mb-3">
                            Không xâm phạm quyền sở hữu trí tuệ của người khác (âm thanh, hình ảnh có bản quyền).
                        </p>
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4">
<p className="text-xs leading-relaxed text-zinc-500 italic">
                                Biện pháp: Không mở bài hát/video đã bị báo cáo bản quyền để tránh rủi ro sập Live.
                            </p>
</div>
</section>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm p-6 md:p-8" id="m15">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-[#ff8a00]/10 text-[#ff8a00] flex items-center justify-center">
<iconify-icon icon="solar:chat-round-like-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Mục 15</div>
<h2 className="text-lg font-medium tracking-tight text-zinc-900 uppercase">Ngôn từ trên LIVE</h2>
</div>
</div>
<p className="text-sm leading-relaxed text-zinc-600">
                            Không phát ngôn gây mâu thuẫn, xúc phạm cá nhân, tổ chức hay Nhà Nước. Tuyệt đối không lộng ngôn thiếu suy nghĩ gây ảnh hưởng đến kênh, Công ty và nền tảng.
                        </p>
</section>
</div>

<section className="scroll-mt-24 bg-white border border-zinc-200 rounded-3xl shadow-sm overflow-hidden flex flex-col md:flex-row" id="m16">
<div className="md:w-2/5 p-6 md:p-8 bg-zinc-50/50 border-b md:border-b-0 md:border-r border-zinc-100 flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:share-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-1.5">Mục 16</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-zinc-900 uppercase">Lôi kéo, chia sẻ thông tin (Nội bộ CTy)</h2>
</div>
</div>
<div className="md:w-3/5 p-6 md:p-8 space-y-6">
<div className="space-y-3">
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Không lôi kéo người dùng tặng quà từ các nhóm khác cùng Công ty.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Không dùng clone ẩn danh treo Live ở nhóm cùng Công ty.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Không tặng quà nhóm khác tạo sự chú ý hay kết nghĩa nhằm tiếp cận người tặng quà qua tin nhắn.</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Tránh chia sẻ FB, IG, Zalo cá nhân cho User để tránh bị quấy rối (Công ty chỉ hỗ trợ chặn trên LIVE).</p></div>
<div className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0 mt-2"></div><p className="text-sm leading-relaxed text-zinc-600">Nghiêm cấm chia sẻ thông tin tiêu cực, bịa chuyện nội bộ chưa công bố nhằm chia rẽ, lôi kéo.</p></div>
</div>
<div className="bg-zinc-50 border border-zinc-100 shadow-sm rounded-2xl p-5 space-y-3">
<p className="text-sm leading-relaxed text-zinc-700">Việc CẤM các hành động trên nhằm bảo vệ quyền lợi từng nhóm. Sau 01 lần bị nhắc nhở mà tái phạm sẽ bị coi là vi phạm Nghiêm trọng.</p>
<div className="pt-2">
<span className="inline-flex items-center rounded-md bg-zinc-900 text-white px-3 py-1.5 text-xs font-medium tracking-widest uppercase">
                                    Có hiệu lực: 02.2024
                                </span>
</div>
</div>
</div>
</section>
</main>
</div>
</div>

    </>
  );
}
