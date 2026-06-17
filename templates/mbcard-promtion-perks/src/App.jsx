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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
navy: '#060B19',
green: '#CCFF00',
purple: '#8B5CF6',
cyan: '#06B6D4',
pink: '#EC4899',
blue: '#3B82F6'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 opacity-80" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c21dde-7288-4566-880b-805ca89ecc89_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="flex z-50 w-full border-white/5 border-b pt-4 pr-6 pb-4 pl-6 relative backdrop-blur-md items-center justify-between">
<div className="flex items-center">
<img alt="Logo MB Bank" className="h-10 w-auto object-contain" src="https://image2url.com/r2/default/images/1772098310455-b4d96461-708f-408b-8de6-063e193aacd5.png"/>
</div>
<div className="flex items-center gap-6">
</div>
</nav>
<main className="flex-grow sm:px-6 flex flex-col w-full max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 gap-x-24 gap-y-24">

<section className="w-full">
<div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[minmax(180px,auto)] md:h-[600px] gap-x-6 gap-y-6">

<div className="md:col-span-6 lg:col-span-7 glass-card md:p-12 overflow-hidden flex flex-col group rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="-top-32 -left-32 blur-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110 w-96 h-96 rounded-full absolute">
</div>
<div className="blur-[80px] pointer-events-none w-64 h-64 rounded-full absolute right-0 bottom-0">
</div>
<div className="z-10 flex flex-col gap-6 relative gap-x-3 gap-y-3">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit">
<span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
<span className="text-sm font-medium text-slate-300">Dịch vụ thẻ MBBank</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">
        ƯU ĐÃI <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-cyan to-brand-blue glow-text">365 NGÀY</span>
<br/>
                            VỚI THẺ MB
      </h1>
<p className="md:text-xl text-lg text-slate-400 max-w-md mt-2">Dành riêng cho chủ thẻ MB: Cập nhật top
        deal hời, kết hợp cùng mạng lưới 10,000++ đối tác tại lĩnh vực: Mua sắm, Giải trí, Du lịch,...
      </p>
</div>
<div className="z-10 md:mt-0 mt-10 relative">
<a className="no-underline" href="#uu-dai-hot">
</a><a className="inline-block no-underline" href="#uu-dai-hot">
</a><a className="inline-block no-underline" href="#uu-dai-hot">
<button className="hover:bg-[#b5e600] transition-all duration-300 transform hover:scale-[1.05] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(204,255,0,0.5)] flex cursor-pointer text-lg font-semibold text-black bg-lime-400 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(204,255,0,0.3)] gap-x-3 gap-y-3 items-center" onclick="window.location.href='/uu-dai-hot'" role="button">
        KHÁM PHÁ NGAY
    </button>
</a>
</div>
</div>


<div className="md:col-span-3 lg:col-span-3 glass-card rounded-[32px] p-6 relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-0 bg-gradient-to-b from-white/[0.05] to-transparent">

<div className="opacity-25 mt-0 mr-0 mb-0 ml-0 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
</div>
<div className="flex overflow-hidden w-full h-[500px] relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[60px] bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/20 w-3/4 h-3/4 rounded-full">
</div>
<div className="relative z-10 animate-float">
<div className="relative z-10 animate-ultra-float flex justify-center w-full">
<img alt="MB Card Floating" className="transition-all duration-500 w-auto h-72 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.5)]" src="https://image2url.com/r2/default/images/1772185482331-95b2f811-1cd1-4ef7-94b6-215c98fda93e.png"/>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="w-full" id="uu-dai-hot">
<div className="flex flex-col md:flex-row md:items-end mb-10 gap-x-4 gap-y-4 justify-between">
<div className="">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">Ưu đãi hot tuần này🔥</h2>
<p className="text-lg text-slate-400 max-w-xl">Top 4 ưu đãi mới hot nhất tuần này bạn không nên bỏ lỡ!</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card glass-card-hover overflow-hidden group cursor-pointer bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eff77b7c-6923-4343-86c7-1636b892c63f_3840w.jpg)] bg-cover bg-center rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative" onclick="window.location.href='https://www.mbbank.com.vn/26/213/2608/Chi-tiet/the-tin-dung-quoc-te-mb-visa-priority-signature-2026-1-29-13-53-43'" role="button">
<div className="backdrop-blur-[2px] z-0 transition-opacity duration-300 group-hover:bg-black/60 cursor-pointer bg-black/50 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.mbbank.com.vn/26/213/2608/Chi-tiet/the-tin-dung-quoc-te-mb-visa-priority-signature-2026-1-29-13-53-43?fbclid=IwY2xjawQOPvRleHRuA2FlbQIxMABicmlkETEzSWZUVzlzZ1ZrT051ZzdCc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHkMOMAXpRc64qvIrSZkMnHWfSKDRVcFJWlwh6bXWpL6Ty_5yYfGF-f3XBgk9_aem_heJ_rHDRhguMUgH4-rKq-g'" role="button">
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green/40 to-brand-green/10 border border-brand-green/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-7 h-7 text-brand-green stroke-[1.5]" data-lucide="badge-percent"></i>
</div>
<h3 className="leading-tight text-3xl font-bold text-white tracking-tight mb-3 drop-shadow-md">12.9 triệu Hoàn tiền</h3>
<p className="leading-relaxed text-base text-slate-200 opacity-90 drop-shadow-sm">
            khi chi tiêu với thẻ MB Visa Signature.
          </p>
</div>
</div>

<div className="glass-card glass-card-hover overflow-hidden group bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917fcb7e-4a67-4e01-9a4e-3471a1cfec87_800w.jpg)] bg-cover bg-center rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative border border-white/10">
<div className="absolute inset-0 overflow-hidden rounded-[32px]">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1488085061387-422e29b40080?w=3840&amp;q=80)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
</div>
<div className="backdrop-blur-[1.5px] transition-all duration-300 group-hover:bg-black/60 cursor-pointer bg-black/50 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/mien-phi-chuyen-doi-ngoai-te-khi-chi-tieu-nuoc-ngoai-cung-the-mb-2026-2-27-10-36-26/7020'" role="button">
</div>
</div>
<div className="z-10 flex flex-col h-full relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-cyan/40 to-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-7 h-7 text-brand-cyan stroke-[1.5]" data-lucide="globe-2"></i>
</div>
<h3 className="text-3xl font-bold text-white tracking-tight mb-3 drop-shadow-md leading-tight">
            0Đ Phí <br/>chuyển đổi ngoại tệ
          </h3>
<p className="leading-relaxed text-base text-slate-200/90 drop-shadow-sm">
            Hoàn 100% phí chuyển đổi ngoại tệ khi thanh toán tại nước ngoài.
          </p>
</div>
</div>

<div className="glass-card glass-card-hover overflow-hidden group cursor-pointer rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative min-h-[320px]" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/giam-50-tai-chuoi-nha-hang-michelin-voi-mb-mastercard-2025-12-16-17-52-2/6901'" role="button">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1622115837997-90c89ae689f9?w=800&amp;q=80)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
</div>
<div className="backdrop-blur-[1px] transition-opacity duration-300 group-hover:bg-black/60 cursor-pointer bg-black/50 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/giam-50-tai-chuoi-nha-hang-michelin-voi-mb-mastercard-2025-12-16-17-52-2/6901'" role="button">
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="border-brand-purple/20 flex group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-brand-purple/40 to-brand-purple/10 w-14 h-14 border rounded-2xl mb-8 items-center justify-center shadow-lg">
<i className="w-7 h-7 text-brand-purple stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-3xl font-bold text-white tracking-tight mb-3 drop-shadow-md">Giảm 50% Michelin</h3>
<p className="leading-relaxed text-base font-normal text-slate-200 opacity-90 drop-shadow-sm">
            Ưu đãi độc quyền giảm 50% (tối đa 500K) tại hệ thống nhà hàng Michelin dành cho chủ thẻ MB Mastercard.
          </p>
</div>
</div>

<div className="glass-card glass-card-hover overflow-hidden group cursor-pointer rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative min-h-[320px]" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/hoan-tien-50-khi-thanh-toan-hoa-don-dien-nuoc-tren-app-mbbank-2026-2-25-9-15-4/7015'" role="button">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1634733988138-bf2c3a2a13fa?w=800&amp;q=80)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105">
</div>
<div className="backdrop-blur-[1px] transition-opacity duration-300 group-hover:bg-black/60 cursor-pointer bg-black/50 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/hoan-tien-50-khi-thanh-toan-hoa-don-dien-nuoc-tren-app-mbbank-2026-2-25-9-15-4/7015'" role="button">
</div>
</div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-pink/40 to-brand-pink/10 border border-brand-pink/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
<i className="w-7 h-7 text-brand-pink stroke-[1.5]" data-lucide="gift"></i>
</div>
<h3 className="leading-tight text-3xl font-bold text-white tracking-tight mb-3 drop-shadow-md">
            Hoàn 50% <br/>hóa đơn Điện/Nước
          </h3>
<p className="leading-relaxed text-base font-normal text-slate-200 opacity-90 drop-shadow-sm">Ưu đãi đặc quyền khi thanh toán trên App MBBank. </p>
</div>
</div>
</div>
</section>

<section className="w-full mb-20">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight text-center mb-2">Thiết kế riêng cho bạn
    </h2>
<p className="md:text text-base text-slate-400 text-center mb-10">Bạn đang sở hữu thẻ MB Mastercard, Visa hay JCB?
      Khám phá các gói ưu đãi dành riêng cho bạn</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] border-white/10 border rounded-[32px] relative shadow-lg">
<div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-blue-900/90 to-brand-navy z-10 transition-opacity duration-300 group-hover:opacity-90">
</div>

<img alt="Gen Z Lifestyle" className="z-0 group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="z-20 flex flex-col cursor-pointer h-full pt-8 pr-8 pb-8 pl-8 relative justify-between" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/xai-the-mb-mastercard-365-ngay-uu-dai-2024-5-23-16-6-57/4291'" role="button">
<div className="">
<div className="inline-flex text-sm font-medium text-blue-200 bg-white/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center justify-center">Gen Z / Phong cách sống</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">MB Mastercard: Thẻ sành điệu, chiều ý bạn yêu</h3>
<p className="text-lg text-blue-100/80">Hoàn tiền đến 7,2 triệu đồng lĩnh vực giải trí, mua sắm online, ăn uống, du lịch,... Linh hoạt chọn gói hoàn tiền theo lĩnh vực.</p>
</div>
<div className="flex group-hover:bg-brand-blue group-hover:border-transparent transition-colors cursor-pointer bg-blue-600/90 w-12 h-12 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative rounded-[32px] overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-gradient-to-b from-brand-pink/80 via-rose-900/90 to-brand-navy z-10 transition-opacity duration-300 group-hover:opacity-90">
</div>

<img alt="Family Health" className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="z-20 flex flex-col cursor-pointer h-full pt-8 pr-8 pb-8 pl-8 relative justify-between" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/xai-the-mb-jcb-uu-dai-365-ngay-2025-7-9-10-22-46/5481'" role="button">
<div className="">
<div className="inline-flex text-sm font-medium text-pink-200 bg-white/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center justify-center">Gia đình / Giáo dục / Y tế</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">MB JCB: Thẻ gia đình, nâng niu mái ấm của bạn</h3>
<p className="text-lg text-pink-100/80">Hoàn tiền đến 10% tại lĩnh vực giáo dục, y tế. Ưu đãi khi đi du lịch Nhật Bản.</p>
</div>
<div className="flex group-hover:bg-brand-pink group-hover:border-transparent transition-colors cursor-pointer bg-pink-500/90 w-12 h-12 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative rounded-[32px] overflow-hidden aspect-[3/4] md:aspect-auto md:h-[500px] border border-white/10 shadow-lg">
<div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/80 via-teal-900/90 to-brand-navy z-10 transition-opacity duration-300 group-hover:opacity-90">
</div>

<img alt="Business Travel" className="absolute inset-0 w-full h-full object-cover z-0 mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col cursor-pointer h-full z-20 pt-8 pr-8 pb-8 pl-8 relative justify-between" onclick="window.location.href='https://www.mbbank.com.vn/chi-tiet/tin-khuyen-mai-khcn/xai-the-mb-visa-nhan-uu-dai-365-ngay-2025-6-10-10-41-26/5412'" role="button">
<div className="">
<div className="inline-flex text-sm font-medium text-cyan-200 bg-white/10 border-white/20 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center justify-center">Business / Travel</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">MB Visa: Thẻ quốc dân, cân mọi điều thiết yếu</h3>
<p className="text-lg text-cyan-100/80">Đặc quyền phòng chờ sân bay cùng người thân. Hoàn 10% đa lĩnh vực, x2 tỷ lệ hoàn vào tháng sinh nhật.</p>
</div>
<div className="flex group-hover:bg-brand-cyan group-hover:border-transparent transition-colors cursor-pointer bg-teal-500/90 w-12 h-12 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<i className="w-6 h-6 text-white stroke-[1.5]" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full border-t border-white/10 py-12 text-center text-slate-500 text-lg">
<p className="">Chi tiết liên hệ MB247: 1900545426 hoặc chi nhánh/PGD gần nhất để được hỗ trợ!</p>
</footer>




    </>
  );
}
