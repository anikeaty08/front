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



    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    // Counter animation
    function animateCounter(el) {
      const target = Number(el.getAttribute('data-target') || 0);
      const duration = 1600;
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(eased * target);
        el.textContent = value.toLocaleString('vi-VN');
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const el = entry.target;
              if (!el.dataset.animated) {
                el.dataset.animated = 'true';
                animateCounter(el);
              }
              obs.unobserve(el);
            }
          });
        },
        { threshold: 0.4 }
      );

      counters.forEach(counter => observer.observe(counter));
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
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white backdrop-blur sticky top-0 z-[99]">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-2" href="#top">
<div className="h-9 w-9 rounded-full bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="text-[rgb(80,200,120)] font-semibold tracking-tight text-sm">HGT</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-slate-900">
               HOÀNG GIA TUẤN
            </span>
<span className="text-xs text-slate-500">
              Hoang Gia Tuan Human Resources Supply
            </span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-xs">
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#gioi-thieu">
            Giới thiệu
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#dich-vu">
            Dịch vụ
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#nganh-nghe">
            Ngành nghề
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#vi-sao">
            Vì sao chọn chúng tôi
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#quy-trinh">
            Quy trình
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#blog">
            Blog HGT
          </a>
<a className="text-slate-600 hover:text-[rgb(80,200,120)] transition-colors" href="#lien-he">
            Liên hệ
          </a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[rgb(80,200,120)]/60 bg-[rgb(80,200,120)]/5 px-4 py-2 text-xs font-medium text-[rgb(22,101,52)] hover:bg-[rgb(80,200,120)]/20 transition-colors" href="tel:0937779793">
<span className="iconify" data="false" data-height="16" data-icon="lucide:phone-call" data-width="16" style={{strokeWidth: '1.5'}}></span>
            0937 77 97 93
          </a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 hover:border-slate-500 transition-colors" id="mobileMenuBtn">
<span className="iconify" data-height="18" data-icon="lucide:menu" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<nav className="max-w-6xl mx-auto flex flex-col gap-1 py-3 px-4 sm:px-6 lg:px-8 text-xs">
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#gioi-thieu">
            Giới thiệu
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#dich-vu">
            Dịch vụ
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#nganh-nghe">
            Ngành nghề
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#vi-sao">
            Vì sao chọn chúng tôi
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#quy-trinh">
            Quy trình
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#blog">
            Blog HGT
          </a>
<a className="py-2 text-slate-700 hover:text-[rgb(80,200,120)] transition-colors" href="#lien-he">
            Liên hệ
          </a>
</nav>
</div>
</header>

<main className="flex-1" id="top">

<section className="relative overflow-hidden border-b border-slate-200">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[rgb(80,200,120)]/10 blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/5 blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto relative z-10 grid gap-10 lg:grid-cols-2 items-center py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-[rgb(80,200,120)]/40 bg-[rgb(80,200,120)]/5 px-3 py-1 text-[0.7rem] text-[rgb(22,101,52)]">
<span className="iconify" data-height="14" data-icon="lucide:badge-check" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Cung ứng &amp; quản lý nguồn nhân lực chuyên nghiệp trên toàn quốc</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
                CUNG ỨNG NGUỒN NHÂN LỰC
              </h1>
<p className="text-sm sm:text-base text-slate-600 max-w-xl">
                CÔNG TY TNHH CUNG ỨNG NGUỒN NHÂN LỰC HOÀNG GIA TUẤN chuyên cung cấp lao động thời vụ, dài hạn, thuê ngoài (outsourcing) và quản lý nhân sự cho các nhà máy, kho bãi, cảng, siêu thị, chuỗi bán lẻ trên khắp cả nước.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-[rgb(80,200,120)] px-6 py-2.5 text-xs font-medium text-white hover:bg-emerald-400 transition-colors" href="#lien-he">
                Nhận tư vấn miễn phí
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-medium text-slate-800 hover:border-[rgb(80,200,120)]/60 hover:text-[rgb(80,200,120)] transition-colors" href="#dich-vu">
<span className="iconify" data-height="16" data-icon="lucide:briefcase-business" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Xem dịch vụ
              </a>
</div>
<div className="flex flex-wrap gap-6 text-xs text-slate-500">
<div className="space-y-1">
<div className="text-sm font-medium text-slate-900">10+ năm kinh nghiệm</div>
<div>Đồng hành cùng nhiều đối tác lớn trong và ngoài nước.</div>
</div>
<div className="space-y-1">
<div className="text-sm font-medium text-slate-900">Hơn 5.000+ lao động</div>
<div>Đội ngũ lao động đa ngành, đã qua đào tạo, sẵn sàng đáp ứng ngay.</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute top-4 -right-6 h-24 w-24 rounded-3xl bg-[rgb(80,200,120)]/10 blur-3xl"></div>
<div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur p-5 sm:p-6 lg:p-7 shadow-lg shadow-slate-900/5 space-y-5">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs text-slate-500">Giải pháp nổi bật</p>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">
                    Cung ứng &amp; quản lý lao động toàn diện
                  </h2>
</div>
<div className="h-10 w-10 rounded-full bg-[rgb(80,200,120)]/10 flex items-center justify-center border border-[rgb(80,200,120)]/40">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:users" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 space-y-2">
<div className="flex items-center gap-2 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:factory" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Nhà máy &amp; kho bãi</span>
</div>
<p className="text-slate-600">
                    Cung ứng công nhân sản xuất, bốc xếp, đóng gói, dán tem, kiểm hàng...
                  </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 space-y-2">
<div className="flex items-center gap-2 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:shopping-bag" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Siêu thị &amp; bán lẻ</span>
</div>
<p className="text-slate-600">
                    Nhân viên bán hàng, thu ngân, PG, trưng bày, kho siêu thị, giao nhận...
                  </p>
</div>
</div>
<div className="flex items-center justify-between gap-4 text-xs">
<div className="space-y-1">
<p className="text-slate-500">Thời gian triển khai</p>
<p className="text-sm font-medium text-slate-900">Chỉ từ 24 – 72 giờ</p>
</div>
<div className="space-y-1">
<p className="text-slate-500">Hình thức hợp tác</p>
<p className="text-sm font-medium text-slate-900">Thời vụ, dài hạn, thuê ngoài</p>
</div>
</div>
<div className="rounded-2xl border border-[rgb(80,200,120)]/40 bg-[rgb(80,200,120)]/5 p-3 flex items-start gap-3 text-xs">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:shield-check" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<p className="font-medium text-slate-900">Cam kết tuân thủ pháp luật</p>
<p className="text-slate-700">
                    Hợp đồng rõ ràng, đầy đủ BHXH – BHYT – BHTN, hồ sơ nhân sự minh bạch, quy trình chấm công – tính lương chính xác.
                  </p>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 text-xs items-center">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:phone" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="leading-tight">
<p className="text-slate-500">Hotline tư vấn 24/7</p>
<p className="font-medium text-slate-900">0937 77 97 93 – 0903 72 74 75</p>
</div>
</div>
<a className="sm:ml-auto inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[0.7rem] font-medium text-white hover:bg-slate-800 transition-colors" href="#lien-he">
                  Gửi yêu cầu ngay
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200" id="gioi-thieu">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.2fr,1fr] items-start">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:building-2" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Về HOÀNG GIA TUẤN</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Đối tác nhân sự tin cậy của doanh nghiệp sản xuất, logistics, thương mại dịch vụ
            </h2>
<p className="text-sm sm:text-base text-slate-700">
              CÔNG TY TNHH CUNG ỨNG NGUỒN NHÂN LỰC HOÀNG GIA TUẤN được thành lập với sứ mệnh cung cấp giải pháp nhân sự linh hoạt, hiệu quả và tuân thủ pháp luật cho doanh nghiệp. Chúng tôi hiểu rằng con người là tài sản quan trọng nhất, vì vậy mọi dịch vụ đều được thiết kế xoay quanh yếu tố <span className="text-[rgb(80,200,120)] font-medium">uy tín – trách nhiệm – chuyên nghiệp</span>.
            </p>
<p className="text-sm sm:text-base text-slate-700">
              Với mạng lưới nhân sự tại nhiều tỉnh thành, quy trình tuyển chọn chặt chẽ, đào tạo bài bản và đội ngũ quản lý hiện trường dày dặn kinh nghiệm, HOÀNG GIA TUẤN đảm bảo đáp ứng nhanh mọi yêu cầu về số lượng, chất lượng lao động theo từng ngành nghề, ca kíp và đặc thù sản xuất.
            </p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-500">Kinh nghiệm</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">10+ năm</p>
<p className="mt-1 text-slate-600">Trong lĩnh vực cung ứng &amp; quản lý nhân lực.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-500">Dự án đã triển khai</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">200+ dự án</p>
<p className="mt-1 text-slate-600">Từ khu công nghiệp, kho bãi đến bán lẻ.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 col-span-2 md:col-span-1">
<p className="text-xs text-slate-500">Địa bàn hoạt động</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-900">Toàn quốc</p>
<p className="mt-1 text-slate-600">Ưu tiên khu vực TP.HCM, Bình Dương, Đồng Nai, Long An...</p>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-3xl border border-[rgb(80,200,120)]/50 bg-[rgb(80,200,120)]/5 p-5 sm:p-6 space-y-4">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">
                Giá trị cốt lõi
              </h3>
<div className="space-y-3 text-xs text-slate-800">
<div className="flex items-start gap-3">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<p className="font-medium text-slate-900">Uy tín &amp; minh bạch</p>
<p className="text-slate-700">
                      Hợp đồng rõ ràng, chi phí cạnh tranh, quy trình quản lý nhân sự – tính lương – chấm công minh bạch.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:users-round" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<p className="font-medium text-slate-900">Linh hoạt &amp; tối ưu chi phí</p>
<p className="text-slate-700">
                      Đa dạng hình thức hợp tác: thời vụ, dài hạn, thuê lại lao động, đáp ứng nhanh biến động sản xuất.
                    </p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:scale" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<p className="font-medium text-slate-900">Tuân thủ pháp luật</p>
<p className="text-slate-700">
                      Thực hiện đầy đủ nghĩa vụ bảo hiểm, thuế, hợp đồng lao động, giảm thiểu rủi ro pháp lý cho đối tác.
                    </p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[0.7rem] font-medium text-white hover:bg-slate-800 transition-colors" href="#lien-he">
                Tải hồ sơ năng lực (PDF)
                <span className="iconify" data-height="14" data-icon="lucide:download" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="dich-vu">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:briefcase-business" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Dịch vụ của chúng tôi</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Dịch vụ cung ứng &amp; quản lý nhân lực chuyên nghiệp
              </h2>
<p className="text-sm sm:text-base text-slate-700 max-w-2xl">
                HOÀNG GIA TUẤN cung cấp giải pháp nhân sự từ khâu tuyển dụng, đào tạo, quản lý, chấm công, tính lương đến các thủ tục bảo hiểm, giúp doanh nghiệp tập trung vào hoạt động kinh doanh cốt lõi.
              </p>
</div>
</div>
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:users" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Cung ứng lao động thời vụ &amp; dài hạn
                  </h3>
<p className="text-xs text-slate-600">
                    Đáp ứng nhanh biến động sản lượng, mùa vụ, chiến dịch.
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Cung ứng công nhân sản xuất, lao động phổ thông cho nhà máy, xưởng, kho bãi.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Bố trí lao động theo ca kíp: hành chính, 3 ca, tăng ca linh hoạt.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Có đội ngũ dự phòng để bổ sung kịp thời khi phát sinh nhu cầu.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:factory" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Thuê ngoài (outsourcing) nhân sự sản xuất – kho vận
                  </h3>
<p className="text-xs text-slate-600">
                    Chúng tôi quản lý trọn gói, doanh nghiệp chỉ tập trung vào sản xuất.
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Nhận khoán theo sản lượng, theo ca, theo công đoạn hoặc theo dự án.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Quản lý nhân sự đầu ca, chấm công, sắp xếp ca làm, đào tạo nội quy.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Phụ trách an toàn lao động, trang bị bảo hộ, hồ sơ nhân sự đầy đủ.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:shopping-bag" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Cung ứng nhân sự bán hàng – siêu thị – chuỗi cửa hàng
                  </h3>
<p className="text-xs text-slate-600">
                    Đội ngũ đã qua đào tạo, tác phong chuyên nghiệp, phù hợp môi trường dịch vụ.
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Nhân viên bán hàng, thu ngân, tư vấn viên, PG, trưng bày, kiểm hàng.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Nhân viên kho, giao nhận, soạn đơn cho các hệ thống bán lẻ, siêu thị.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Hỗ trợ tuyển dụng – đào tạo – chấm công – tính lương theo yêu cầu.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:warehouse" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Nhân sự kho vận – logistics – bốc xếp hàng hóa
                  </h3>
<p className="text-xs text-slate-600">
                    Phù hợp cho kho trung tâm, kho lạnh, cảng, depot, e-commerce.
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Bốc xếp, phân loại, đóng gói, dán tem, scan mã vạch, kiểm đếm.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Bốc xếp hàng hóa tại cảng, ICD, kho ngoại quan, kho thương mại.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Có thể bố trí tổ/đội trưởng hiện trường để phối hợp sản xuất.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:user-cog" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Quản lý nhân sự hiện trường &amp; dịch vụ hành chính nhân sự
                  </h3>
<p className="text-xs text-slate-600">
                    Giảm tải hoàn toàn gánh nặng HR cho doanh nghiệp.
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Tuyển dụng, phỏng vấn, sàng lọc hồ sơ theo yêu cầu từng vị trí.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Quản lý chấm công, nghỉ phép, kỷ luật lao động, thưởng phạt.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Thực hiện các thủ tục BHXH, BHYT, BHTN, ký kết và thanh lý HĐLĐ.</span>
</li>
</ul>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-2xl bg-[rgb(80,200,120)]/10 border border-[rgb(80,200,120)]/40 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:clipboard-list" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Dịch vụ nhân sự theo dự án &amp; chiến dịch ngắn hạn
                  </h3>
<p className="text-xs text-slate-600">
                    Phù hợp cho các chương trình khuyến mãi, khai trương, kiểm kê...
                  </p>
</div>
</div>
<ul className="text-xs text-slate-700 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Nhân sự kiểm kê, trưng bày, hỗ trợ khuyến mãi, phát sampling.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Nhân sự setup cửa hàng mới, chuyển kho, dọn dẹp, vệ sinh công nghiệp nhẹ.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(80,200,120)]">
<span className="iconify" data-height="16" data-icon="lucide:dot" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Thời gian linh hoạt: theo giờ, theo ca, theo ngày hoặc theo dự án.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="nganh-nghe">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:scatter-chart" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Lĩnh vực &amp; ngành nghề cung ứng</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Đa dạng ngành nghề, đáp ứng mọi nhu cầu nhân lực
              </h2>
</div>
</div>
<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 text-xs">

<div className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:factory" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Sản xuất – công nghiệp
              </h3>
<ul className="space-y-1.5 text-slate-700">
<li>• Công nhân sản xuất, lắp ráp, đóng gói, dán tem, phân loại.</li>
<li>• Công nhân may, giày da, điện tử, thực phẩm, nhựa, bao bì.</li>
<li>• Nhân viên QC, KCS, kiểm tra chất lượng theo dây chuyền.</li>
<li>• Công nhân vệ sinh công nghiệp trong nhà máy, xưởng.</li>
</ul>
</div>

<div className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:warehouse" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Kho bãi – logistics – thương mại điện tử
              </h3>
<ul className="space-y-1.5 text-slate-700">
<li>• Nhân viên kho, soạn hàng, scan, kiểm đếm, nhập xuất hàng.</li>
<li>• Bốc xếp tại kho, bãi, cảng, kho ngoại quan, depot container.</li>
<li>• Nhân sự phân loại hàng, xử lý đơn cho sàn TMĐT.</li>
<li>• Nhân viên giao nhận nội bộ khu công nghiệp/khu chế xuất.</li>
</ul>
</div>

<div className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:shopping-cart" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Bán lẻ – siêu thị – cửa hàng tiện lợi
              </h3>
<ul className="space-y-1.5 text-slate-700">
<li>• Nhân viên bán hàng, thu ngân, trưng bày, kiểm kê.</li>
<li>• Nhân viên kho siêu thị, hỗ trợ nhập hàng, soạn đơn.</li>
<li>• PG, tư vấn viên, nhân sự sự kiện – khuyến mãi.</li>
<li>• Nhân viên giao nhận, shipper nội bộ, phụ kho.</li>
</ul>
</div>

<div className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:building" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Văn phòng – dịch vụ – hỗ trợ sản xuất
              </h3>
<ul className="space-y-1.5 text-slate-700">
<li>• Nhân viên hành chính, lễ tân, trực tổng đài.</li>
<li>• Nhân viên tư vấn dịch vụ, chăm sóc khách hàng.</li>
<li>• Nhân viên hỗ trợ sản xuất, phụ việc, tạp vụ công nghiệp.</li>
<li>• Bảo vệ, an ninh nội bộ, kiểm soát ra vào (theo dự án).</li>
</ul>
</div>

<div className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="16" data-icon="lucide:route" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
                Dự án ngắn hạn – chiến dịch
              </h3>
<ul className="space-y-1.5 text-slate-700">
<li>• Nhân sự kiểm kê kho, kiểm hàng định kỳ.</li>
<li>• Đội setup cửa hàng mới, dọn kho, chuyển kho.</li>
<li>• Hỗ trợ sự kiện, roadshow, sampling, activation.</li>
<li>• Nhân sự theo mùa vụ Tết, lễ, cao điểm bán hàng.</li>
</ul>
</div>

<div className="rounded-2xl border border-[rgb(80,200,120)]/40 bg-[rgb(80,200,120)]/5 p-4 space-y-2">
<p className="text-sm font-semibold tracking-tight text-slate-900">
                Ngành nghề khác?
              </p>
<p className="text-xs text-slate-700">
                Nếu doanh nghiệp của bạn có nhu cầu nhân sự ở ngành nghề khác, hãy liên hệ với chúng tôi. Đội ngũ tư vấn sẽ phân tích yêu cầu và đề xuất phương án phù hợp trong thời gian sớm nhất.
              </p>
<a className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-[rgb(22,101,52)] hover:text-emerald-600 transition-colors" href="#lien-he">
                Gửi yêu cầu ngành nghề cụ thể
                <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="vi-sao">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-10">

<div className="space-y-6">
<div className="text-center space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:sparkles" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Vì sao chọn HGT?</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Giải pháp nhân lực tin cậy, linh hoạt và hiệu quả
              </h2>
<p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto">
                Chúng tôi kết hợp kinh nghiệm thực tế tại nhà máy, kho bãi, siêu thị với quy trình quản trị hiện đại, mang lại dịch vụ cung ứng và quản lý nhân lực ổn định cho doanh nghiệp.
              </p>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center text-xs">
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-2xl border border-[rgb(80,200,120)]/60 bg-[rgb(80,200,120)]/5 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="22" data-icon="lucide:users-round" data-inline="false" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-slate-900 uppercase">Đội ngũ nhân sự dày kinh nghiệm</p>
<p className="text-slate-600">
                    Nhân viên, quản lý hiện trường gắn bó lâu năm, am hiểu môi trường sản xuất và kho vận.
                  </p>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-2xl border border-[rgb(80,200,120)]/60 bg-[rgb(80,200,120)]/5 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="22" data-icon="lucide:badge-dollar-sign" data-inline="false" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-slate-900 uppercase">Tối ưu chi phí cho doanh nghiệp</p>
<p className="text-slate-600">
                    Cơ chế tính phí minh bạch, giúp doanh nghiệp chủ động ngân sách và giảm tải chi phí cố định.
                  </p>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-2xl border border-[rgb(80,200,120)]/60 bg-[rgb(80,200,120)]/5 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="22" data-icon="lucide:headset" data-inline="false" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-slate-900 uppercase">Chăm sóc khách hàng tận tâm</p>
<p className="text-slate-600">
                    Đầu mối hỗ trợ riêng cho từng dự án, phản hồi nhanh mọi yêu cầu điều chỉnh nhân sự.
                  </p>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="h-12 w-12 rounded-2xl border border-[rgb(80,200,120)]/60 bg-[rgb(80,200,120)]/5 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="22" data-icon="lucide:calendar-check-2" data-inline="false" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="space-y-1">
<p className="text-sm font-medium text-slate-900 uppercase">Tuân thủ thời hạn &amp; pháp luật</p>
<p className="text-slate-600">
                    Cam kết tiến độ triển khai, tuân thủ đầy đủ quy định về lao động, bảo hiểm, an toàn.
                  </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-[rgb(80,200,120)] text-white px-4 py-8 sm:px-8 sm:py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
<div className="space-y-2">
<div className="flex justify-center">
<span className="iconify text-amber-300" data-height="28" data-icon="lucide:building-2" data-inline="false" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-lg font-semibold tracking-tight">
<span className="counter" data-target="1968">0</span>
</p>
<p className="text-xs font-medium tracking-tight uppercase text-emerald-50">
                  Tổng dự án đã thực hiện
                </p>
</div>
<div className="space-y-2">
<div className="flex justify-center">
<span className="iconify text-amber-300" data-height="28" data-icon="lucide:hard-hat" data-inline="false" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-lg font-semibold tracking-tight">
<span className="counter" data-target="40000">0</span>+
                </p>
<p className="text-xs font-medium tracking-tight uppercase text-emerald-50">
                  Tổng số nhân sự đã cung ứng
                </p>
</div>
<div className="space-y-2">
<div className="flex justify-center">
<span className="iconify text-amber-300" data-height="28" data-icon="lucide:clock-3" data-inline="false" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-lg font-semibold tracking-tight">
<span className="counter" data-target="24">0</span>
</p>
<p className="text-xs font-medium tracking-tight uppercase text-emerald-50">
                  Thời gian hoạt động
                </p>
</div>
<div className="space-y-2">
<div className="flex justify-center">
<span className="iconify text-amber-300" data-height="28" data-icon="lucide:globe-2" data-inline="false" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-lg font-semibold tracking-tight">
<span className="counter" data-target="63">0</span>
</p>
<p className="text-xs font-medium tracking-tight uppercase text-emerald-50">
                  Tỉnh đang hoạt động
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="quy-trinh">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:workflow" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Quy trình hợp tác</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Quy trình cung ứng nhân lực rõ ràng, minh bạch
              </h2>
</div>
</div>
<div className="grid gap-6 lg:grid-cols-[1.3fr,1fr] items-start">

<div className="space-y-5">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[rgb(80,200,120)] flex items-center justify-center text-xs font-semibold text-white">
                    1
                  </div>
<div className="flex-1 w-px bg-slate-200"></div>
</div>
<div className="pb-4 space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Tiếp nhận yêu cầu &amp; tư vấn giải pháp
                  </h3>
<p className="text-xs text-slate-700">
                    Trao đổi nhu cầu về số lượng, vị trí, ca làm, mức lương dự kiến, khu vực làm việc, thời gian triển khai. Đề xuất mô hình hợp tác: cung ứng, thuê ngoài, khoán sản lượng...
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[rgb(80,200,120)] flex items-center justify-center text-xs font-semibold text-white">
                    2
                  </div>
<div className="flex-1 w-px bg-slate-200"></div>
</div>
<div className="pb-4 space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Báo giá &amp; ký kết hợp đồng
                  </h3>
<p className="text-xs text-slate-700">
                    Gửi báo giá chi tiết, thống nhất điều khoản hợp tác, phạm vi công việc, cam kết chất lượng, quy trình chấm công – tính lương – xử lý phát sinh. Ký kết hợp đồng nguyên tắc/dự án.
 </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[rgb(80,200,120)] flex items-center justify-center text-xs font-semibold text-white">
                    3
                  </div>
<div className="flex-1 w-px bg-slate-200"></div>
</div>
<div className="pb-4 space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Tuyển dụng, đào tạo &amp; bố trí nhân sự
                  </h3>
<p className="text-xs text-slate-700">
                    Thực hiện tuyển chọn, phỏng vấn, kiểm tra hồ sơ nhân sự. Đào tạo nội quy, an toàn lao động, yêu cầu công việc. Bố trí lao động đúng số lượng, đúng thời gian theo kế hoạch.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[rgb(80,200,120)] flex items-center justify-center text-xs font-semibold text-white">
                    4
                  </div>
<div className="flex-1 w-px bg-slate-200"></div>
</div>
<div className="pb-4 space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Quản lý nhân sự &amp; báo cáo định kỳ
                  </h3>
<p className="text-xs text-slate-700">
                    Cử cán bộ quản lý hiện trường, giám sát năng suất, kỷ luật lao động. Báo cáo tình hình nhân sự, sản lượng, biến động định kỳ theo tuần/tháng hoặc theo yêu cầu.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="h-7 w-7 rounded-full bg-[rgb(80,200,120)] flex items-center justify-center text-xs font-semibold text-white">
                    5
                  </div>
</div>
<div className="space-y-1">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                    Đánh giá, điều chỉnh &amp; mở rộng quy mô
                  </h3>
<p className="text-xs text-slate-700">
                    Định kỳ đánh giá hiệu quả hợp tác, đề xuất tối ưu chi phí và mô hình nhân sự. Sẵn sàng tăng/giảm số lượng lao động, mở rộng sang nhà máy/kho bãi khác trong hệ thống của đối tác.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-[rgb(80,200,120)]/40 bg-[rgb(80,200,120)]/5 p-5 sm:p-6 space-y-4">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="iconify text-[rgb(80,200,120)]" data-height="18" data-icon="lucide:sparkles" data-inline="false" data-width="18" style={{strokeWidth: '1.5'}}></span>
                Vì sao nên chọn HOÀNG GIA TUẤN?
              </h3>
<ul className="text-xs text-slate-800 space-y-2">
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Đáp ứng nhanh chỉ từ 24 – 72 giờ với dự án thông thường.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Đội ngũ lao động ổn định, đã quen môi trường nhà máy – kho bãi – siêu thị.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Giảm tối đa rủi ro pháp lý về lao động, bảo hiểm, tranh chấp.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Chi phí minh bạch, dễ dự trù, không phát sinh ngoài hợp đồng.</span>
</li>
<li className="flex gap-2">
<span className="mt-0.5 text-[rgb(22,101,52)]">
<span className="iconify" data-height="16" data-icon="lucide:check-circle-2" data-inline="false" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
<span>Đội ngũ quản lý hiện trường nhiều năm kinh nghiệm thực tế.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-[0.7rem] font-medium text-white hover:bg-slate-800 transition-colors" href="#lien-he">
                Trao đổi với chuyên viên của chúng tôi
                <span className="iconify" data-height="14" data-icon="lucide:messages-square" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="blog">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 space-y-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:newspaper" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Blog HGT / Tin tức</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Cập nhật kiến thức &amp; chia sẻ từ HOÀNG GIA TUẤN
              </h2>
<p className="text-sm sm:text-base text-slate-700 max-w-2xl">
                Những bài viết ngắn gọn về kinh nghiệm quản lý nhân sự, xu hướng lao động, câu chuyện dự án và thông tin tuyển dụng mới nhất.
              </p>
</div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[rgb(22,101,52)] hover:text-emerald-600 transition-colors" href="#lien-he">
              Nhận tư vấn cho dự án nhân sự
              <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid gap-5 md:grid-cols-3">

<article className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col">
<div className="aspect-video bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center">
<span className="iconify text-[rgb(22,101,52)]" data-height="32" data-icon="lucide:layout-dashboard" data-inline="false" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col">
<p className="text-[0.7rem] text-slate-500 uppercase tracking-wide">Quản lý nhân sự</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  5 lợi ích khi thuê ngoài đội ngũ lao động cho nhà máy và kho bãi
                </h3>
<p className="text-xs text-slate-700 flex-1">
                  Giảm tải áp lực tuyển dụng, tối ưu chi phí và đảm bảo nguồn nhân sự ổn định là những lợi ích nổi bật khi doanh nghiệp hợp tác với đơn vị cung ứng nhân lực chuyên nghiệp.
                </p>
<button className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-[rgb(22,101,52)] hover:text-emerald-600 transition-colors">
                  Đọc thêm
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>

<article className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col">
<div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
<span className="iconify text-slate-700" data-height="32" data-icon="lucide:warehouse" data-inline="false" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col">
<p className="text-[0.7rem] text-slate-500 uppercase tracking-wide">Kho vận &amp; logistics</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Kinh nghiệm bố trí ca làm việc linh hoạt cho kho trung tâm
                </h3>
<p className="text-xs text-slate-700 flex-1">
                  Việc tổ chức ca làm hợp lý giúp hạn chế tăng ca kéo dài, đảm bảo sức khỏe người lao động và giữ vững năng suất trong mùa cao điểm.
                </p>
<button className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-[rgb(22,101,52)] hover:text-emerald-600 transition-colors">
                  Đọc thêm
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>

<article className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col">
<div className="aspect-video bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
<span className="iconify text-[rgb(80,200,120)]" data-height="32" data-icon="lucide:hand-heart" data-inline="false" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="p-4 sm:p-5 space-y-2 flex-1 flex flex-col">
<p className="text-[0.7rem] text-slate-500 uppercase tracking-wide">Văn hóa doanh nghiệp</p>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Cách HOÀNG GIA TUẤN chăm sóc và giữ chân đội ngũ lao động
                </h3>
<p className="text-xs text-slate-700 flex-1">
                  Chế độ phúc lợi rõ ràng, hỗ trợ kịp thời và môi trường làm việc tôn trọng là yếu tố then chốt giúp chúng tôi duy trì đội ngũ nhân sự ổn định cho khách hàng.
                </p>
<button className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-[rgb(22,101,52)] hover:text-emerald-600 transition-colors">
                  Đọc thêm
                  <span className="iconify" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
</div>
</div>
</section>

<section className="bg-white" id="lien-he">
<div className="max-w-6xl mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr,1fr] items-start">

<div className="space-y-5">
<div className="space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-3 py-1 text-[0.7rem] text-slate-600">
<span className="iconify text-[rgb(80,200,120)]" data-height="14" data-icon="lucide:phone-call" data-inline="false" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span>Liên hệ hợp tác</span>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Gửi yêu cầu nhân sự cho chúng tôi
              </h2>
<p className="text-sm sm:text-base text-slate-700">
                Vui lòng để lại thông tin, chúng tôi sẽ liên hệ tư vấn trong thời gian sớm nhất. Hoặc liên hệ trực tiếp qua hotline để được hỗ trợ nhanh.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4 text-xs">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
<p className="text-slate-500">Hotline tư vấn</p>
<p className="text-sm font-medium text-slate-900">
                  0937 77 97 93 – 0903 72 74 75
                </p>
<p className="text-slate-500">Email: <span className="text-slate-800">info@hoanggiatuan.vn</span></p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-1.5">
<p className="text-slate-500">Địa chỉ văn phòng</p>
<p className="text-sm font-medium text-slate-900">
                  (Cập nhật theo địa chỉ chính thức trên giấy phép kinh doanh)
                </p>
<p className="text-slate-500">
                  TP. Hồ Chí Minh &amp; hệ thống cộng tác viên tại nhiều tỉnh thành.
                </p>
</div>
</div>
<div className="text-xs text-slate-500">
<p className="font-medium text-slate-800 mb-1">
                Giờ làm việc
              </p>
<p>Thứ 2 – Thứ 7: 08:00 – 17:30 (Hỗ trợ dự án khẩn cấp 24/7 qua hotline).</p>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 space-y-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
              Form yêu cầu báo giá / tư vấn
            </h3>
<form className="space-y-3 text-xs">
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="block text-slate-700">Họ và tên</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-slate-700">Số điện thoại</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="0937 77 97 93" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="block text-slate-700">Email</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="you@company.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-slate-700">Tên doanh nghiệp</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="Công ty TNHH..." type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="block text-slate-700">Ngành nghề / khu vực</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="Nhà máy, kho bãi, siêu thị... / Khu vực" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-slate-700">Số lượng dự kiến</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="Ví dụ: 50 lao động, 3 ca/ngày" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-slate-700">Mô tả nhu cầu</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[rgb(80,200,120)] focus:ring-1 focus:ring-[rgb(80,200,120)]/60" placeholder="Mô tả công việc, thời gian triển khai, yêu cầu đặc thù..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<p className="text-[0.7rem] text-slate-500">
                  Bằng việc gửi form, bạn đồng ý cho HOÀNG GIA TUẤN sử dụng thông tin để liên hệ tư vấn dịch vụ.
                </p>
<button className="inline-flex items-center justify-center rounded-full bg-[rgb(80,200,120)] px-6 py-2.5 text-[0.7rem] font-medium text-white hover:bg-emerald-400 transition-colors" type="submit">
                  Gửi yêu cầu
                </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto py-6 sm:py-7 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
<div className="flex items-center gap-2">
<span className="text-slate-900 font-semibold tracking-tight text-sm">HGT</span>
<span className="hidden sm:inline-block text-slate-400">•</span>
<span>
            CÔNG TY TNHH CUNG ỨNG NGUỒN NHÂN LỰC HOÀNG GIA TUẤN
          </span>
</div>
<div className="flex flex-wrap gap-3 sm:items-center text-[0.7rem]">
<span>© <span id="year"></span> Hoang Gia Tuan HR Supply.</span>
<span className="hidden sm:inline-block text-slate-300">|</span>
<span>Website đang được hoàn thiện thêm thông tin &amp; hình ảnh chính thức.</span>
</div>
</div>
</footer>
</div>


    </>
  );
}
