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



    if (window.lucide) {
      window.lucide.createIcons();
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
      
<div className="min-h-screen bg-gradient-to-b from-neutral-50 via-neutral-50 to-neutral-100">

<header className="border-b sticky top-0 z-30 backdrop-blur-md border-neutral-200/80 bg-neutral-50/80">
<div className="max-w-6xl mx-auto flex items-center justify-between py-4 md:py-5 px-4 sm:px-6 lg:px-0">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg shadow-indigo-500/30 from-indigo-600 to-blue-600">
<span className="text-sm font-semibold tracking-tight">MC</span>
</div>
<div className="flex flex-col">
<span className="text-base md:text-lg font-semibold tracking-tight">Medisense Clinic</span>
<span className="text-xs md:text-sm text-neutral-600">Giải pháp y tế chủ động &amp; chính xác</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#solutions">Giải pháp</a>
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#about">Giới thiệu</a>
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#services">Dịch vụ</a>
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#team">Đội ngũ</a>
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#pricing">Bảng giá</a>
<a className="transition-colors text-neutral-700 hover:text-neutral-950" href="#contact">Liên hệ</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="text-sm transition-colors text-neutral-700 hover:text-neutral-950">
            VN
          </button>
<button className="text-sm rounded-full border px-4 py-2 transition-colors border-neutral-300/80 bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-900">
            Tải brochure
          </button>
</div>

<button aria-label="Toggle navigation" className="md:hidden inline-flex items-center justify-center rounded-lg border p-2 border-neutral-300/80 bg-neutral-100/80 text-neutral-800">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</header>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 pt-10 md:pt-16 pb-12 md:pb-20">
<div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs md:text-sm text-indigo-800">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
<span>Giải pháp y tế phòng ngừa theo dữ liệu</span>
</div>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950">
            Nền tảng quản lý <span className="text-indigo-600">sức khỏe toàn diện</span> cho phòng khám hiện đại
          </h1>
<p className="text-base md:text-lg text-neutral-700">
            Medisense Clinic giúp số hóa toàn bộ quy trình khám chữa bệnh, từ tiếp nhận, chẩn đoán, theo dõi đến dự phòng, tập trung vào <span className="text-neutral-950">giải pháp lâm sàng chính xác</span> thay vì chỉ tối ưu đặt lịch.
          </p>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-indigo-500/15 flex items-center justify-center">

<svg className="lucide lucide-activity w-4 h-4 text-indigo-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Theo dõi chỉ số</div>
<div className="text-xs text-neutral-600">Kết nối thiết bị &amp; phân tích tự động</div>
</div>
</div>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-blue-500/15 flex items-center justify-center">

<svg className="lucide lucide-stethoscope w-4 h-4 text-blue-600" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Phác đồ tiêu chuẩn</div>
<div className="text-xs text-neutral-600">Tùy biến theo từng chuyên khoa</div>
</div>
</div>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-cyan-500/15 flex items-center justify-center">

<svg className="lucide lucide-shield-check w-4 h-4 text-cyan-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Bảo mật chuẩn y tế</div>
<div className="text-xs text-neutral-600">Mã hóa &amp; phân quyền linh hoạt</div>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-4 pt-1">
<button className="inline-flex items-center justify-center rounded-full bg-indigo-500 text-sm font-medium px-5 py-2.5 transition-colors hover:bg-indigo-600 text-neutral-50">
              Nhận tư vấn giải pháp
            </button>
<button className="inline-flex items-center gap-2 rounded-full border text-sm px-4 py-2.5 transition-colors border-neutral-300 bg-neutral-100/80 hover:bg-neutral-200/80 text-neutral-900">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Xem demo 5 phút
            </button>
</div>
<div className="flex flex-wrap gap-3 text-xs md:text-sm text-neutral-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Triển khai nhanh trong 7 ngày</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check w-4 h-4 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Phù hợp từ phòng khám nhỏ tới trung tâm đa khoa</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-10 -right-6 h-40 w-40 bg-indigo-500/30 blur-3xl opacity-40 pointer-events-none"></div>
<div className="relative rounded-3xl border bg-gradient-to-br p-5 md:p-6 shadow-2xl border-neutral-200/80 from-neutral-100/90 via-neutral-100/80 to-neutral-50/90 shadow-neutral-50/60">
<div className="flex items-center justify-between mb-4">
<div>
<div className="text-sm text-neutral-700">Tổng quan lâm sàng</div>
<div className="text-lg font-semibold tracking-tight text-neutral-950">Bệnh nhân: Nguyễn Minh</div>
</div>
<span className="rounded-full border border-blue-500/40 bg-blue-500/10 text-xs px-3 py-1 text-blue-700">
                Nguy cơ thấp
              </span>
</div>
<div className="grid grid-cols-2 gap-3 mb-5">
<div className="rounded-2xl border p-3 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-600">Nhịp tim</span>
<svg className="lucide lucide-heart-pulse w-4 h-4 text-rose-600" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-neutral-950">72</span>
<span className="text-xs text-neutral-600">bpm</span>
</div>
<div className="mt-1 text-xs text-blue-600">Ổn định trong 24h</div>
</div>
<div className="rounded-2xl border p-3 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-neutral-600">Huyết áp</span>
<svg className="lucide lucide-activity w-4 h-4 text-indigo-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-neutral-950">120/78</span>
<span className="text-xs text-neutral-600">mmHg</span>
</div>
<div className="mt-1 text-xs text-blue-600">Trong ngưỡng khuyến nghị</div>
</div>
</div>
<div className="rounded-2xl border p-3 mb-4 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-indigo-500/10 flex items-center justify-center">
<svg className="lucide lucide-brain w-4 h-4 text-indigo-700" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</span>
<div className="">
<div className="text-xs text-neutral-600">Gợi ý lâm sàng</div>
<div className="text-sm font-semibold text-neutral-900">Quản lý tăng huyết áp giai đoạn sớm</div>
</div>
</div>
<span className="text-xs text-neutral-600">AI assist</span>
</div>
<ul className="space-y-1.5 text-xs text-neutral-700">
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Tối ưu liều dùng hiện tại, đánh giá lại sau 2 tuần.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span className="">Khuyến nghị đo huyết áp tại nhà 2 lần/ngày, đồng bộ dữ liệu qua ứng dụng.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span className="">Tư vấn thay đổi lối sống tập trung vào giấc ngủ và vận động.</span>
</li>
</ul>
</div>
<div className="flex items-center justify-between text-xs text-neutral-600">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 rounded-full items-center justify-center bg-neutral-200">
<svg className="lucide lucide-user w-3.5 h-3.5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<div>
<div className="text-xs font-medium text-neutral-800">BS. Trần Anh Khoa</div>
<div className="text-[0.7rem] text-neutral-500">Nội tim mạch</div>
</div>
</div>
<span>Đã cập nhật 10 phút trước</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="solutions">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950">Giải pháp cho phòng khám hiện đại</h2>
<p className="text-base md:text-lg mt-2 text-neutral-700">
            Tập trung vào hiệu quả điều trị, chuẩn hóa quy trình lâm sàng và trải nghiệm bệnh nhân, thay vì chỉ quản lý đặt lịch.
          </p>
</div>
<div className="max-w-md text-sm text-neutral-600">
          Hệ thống linh hoạt theo mô hình hoạt động của từng đơn vị: phòng khám tư, trung tâm chuyên khoa, phòng khám doanh nghiệp...
        </div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3 mb-4">
<div className="h-9 w-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
<svg className="lucide lucide-clipboard-list w-4 h-4 text-indigo-600" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Quản lý hồ sơ lâm sàng</div>
<div className="text-xs text-neutral-600">Từ tiếp nhận tới theo dõi dài hạn</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Giao diện hồ sơ điện tử được thiết kế theo luồng suy nghĩ của bác sĩ, giúp ghi nhận nhanh, đầy đủ và dễ tra cứu.
          </p>
<ul className="text-xs space-y-1.5 mt-auto text-neutral-600">
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Mẫu hồ sơ tùy biến theo chuyên khoa.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Kết nối kết quả xét nghiệm, chẩn đoán hình ảnh.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Timeline điều trị trực quan theo từng bệnh lý.</span>
</li>
</ul>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3 mb-4">
<div className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-line-chart w-4 h-4 text-blue-600" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Phân tích &amp; cảnh báo</div>
<div className="text-xs text-neutral-600">Dự báo nguy cơ dựa trên dữ liệu</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Hệ thống nhắc nhở và cảnh báo sớm cho những chỉ số bất thường, hỗ trợ bác sĩ quyết định nhanh hơn.
          </p>
<ul className="text-xs space-y-1.5 mt-auto text-neutral-600">
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Cảnh báo tự động khi vượt ngưỡng an toàn.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Bảng điều khiển cho từng bác sĩ/chuyên khoa.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Báo cáo hiệu quả điều trị theo thời gian.</span>
</li>
</ul>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/70">
<div className="flex items-center gap-3 mb-4">
<div className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<svg className="lucide lucide-users w-4 h-4 text-cyan-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Chăm sóc liên tục</div>
<div className="text-xs text-neutral-600">Kết nối sau khám &amp; quản lý mạn tính</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Tự động hóa nhắc tái khám, theo dõi chỉ số tại nhà tương tác hai chiều giữa bác sĩ &amp; bệnh nhân.
          </p>
<ul className="text-xs space-y-1.5 mt-auto text-neutral-600">
<li bg-slate-500"="" className="flex gap-2 &lt;span class=" h-1="" mt-1="" rounded-full="" w-1="">
<span>Gửi kế hoạch chăm sóc cá nhân hóa.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Chat bảo mật giữa bệnh nhân &amp; phòng khám.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1-1 rounded-full bg-neutral-500"></span>
<span>Tổng hợp dữ liệu để đánh giá tuân thủ điều trị.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="about">
<div className="grid md:grid-cols-[1.1fr,1fr] gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-neutral-950">Về Medisense Clinic</h2>
<p className="text-base md:text mb-4 text-neutral-700">
            Được xây dựng bởi đội ngũ bác sĩ và kỹ sư y sinh, Medisense Clinic tập trung vào việc đưa công nghệ vào thực hành lâm sàng một cách tinh gọn, an toàn và dễ sử dụng.
          </p>
<p className="text-sm mb-4 text-neutral-700">
            Chúng tôi không cố gắng thay thế bác sĩ, mà tạo ra các công cụ thông minh để tối ưu thời gian thăm khám, giảm thao tác hành chính và tăng chất lượng tương tác với bệnh nhân.
          </p>
<div className="grid sm:grid-cols-3 gap-4 mt-4">
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<div className="text-2xl font-semibold tracking-tight mb-1 text-indigo-600">50+</div>
<div className="text-xs text-neutral-600">Phòng khám &amp; trung tâm đang triển khai</div>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<div className="text-2xl font-semibold tracking-tight mb-1 text-indigo-600">98%</div>
<div className="text-xs text-neutral-600">Bác sĩ hài lòng với trải nghiệm sử dụng</div>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<div className="text-2xl font-semibold tracking-tight mb-1 text-indigo-600">24/7</div>
<div className="text-xs text-neutral-600">Đ bộ &amp; bảo vệ dữ liệu y tế</div>
</div>
</div>
</div>
<div 80="" bg-slate-900="" border="" border-slate-800="" className="" classrounded-3xl="" p-5"="">
<div className="flex items-center gap-3 mb-4">
<div className="h-9 w-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">
<svg className="lucide lucide-shield w-4 h-4 text-indigo-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">Chuẩn an toàn &amp; bảo mật</div>
<div className="text-xs text-neutral-600">Đáp ứng các tiêu chuẩn trong quản lý hồ sơ bệnh án</div>
</div>
</div>
<ul className="space-y-2 text-sm mb-4 text-neutral-700">
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Mã hóa dữ liệu ở trạng thái lưu trữ và truyền tải.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Phân quyền chi tiết theo vai trò (bác sĩ, điều dưỡng, CSKH, quản trị...).</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Ghi log truy cập toàn diện, dễ dàng audit khi cần.</span>
</li>
</ul>
<div className="rounded-2xl border p-4 border-neutral-200 bg-neutral-50/80">
<div className="text-xs mb-1 text-neutral-600">Chia sẻ từ bác sĩ</div>
<p className="text-sm mb-3 text-neutral-800">
              “Thay vì dành hơn một nửa thời gian cho giấy tờ, tôi có thể tập trung trao đổi với bệnh nhân. Hệ thống này được thiết kế theo đúng ngôn ngữ của người làm lâm sàng.”
            </p>
<div className="flex items-center justify-between text-xs text-neutral-600">
<div>
<div className="text-xs font-medium text-neutral-800">BS. Lê Hoài Nam</div>
<div className="text-[0.7rem]">Trưởng khoa Nội tổng quát, khách hàng của chúng tôi</div>
</div>
<div className="flex -space-x-2">
<span className="h-6 w-6 rounded-full border border-neutral-100 bg-neutral-300/80"></span>
<span className="h-6 w-6 rounded-full border border-neutral-100 bg-neutral-400/80"></span>
<span className="h-6 w-6 rounded-full border border-neutral-900-neutral-500/80"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="services">
<div className="flex items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950">Dịch vụ &amp; module chức năng</h2>
<p className="text-base md:text-lg mt-2 text-neutral-700">
            Chọn những module phù hợp với mô hình phòng khám, từ cơ bản tới chuyên sâu.
          </p>
</div>
<div className="hidden md:block text-xs text-neutral-600">
          Có thể triển khai từng bước, không ảnh hưởng hoạt động hiện tại.
        </div>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-indigo-500/10 flex items-center justify-center">

<svg className="lucide lucide-file-text w-4 h-4 text-indigo-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Quản lý khám ngoại trú</div>
<div className="text-xs text-neutral-600">Tối ưu quy trình khám chuẩn</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Số hóa toàn bộ quy trình: tiếp nhận, khám bệnh, chẩn đoán, chỉ định cận lâm sàng, kê đơn và thanh toán.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Bao gồm: hồ sơ bệnh án điện tử, template ch đoán, kê đơn điện tử.
          </div>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-flask-conical w-4 h-4 text-blue-600" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Quản lý cận lâm sàng</div>
<div className="text-xs text-neutral-600">Xét nghiệm &amp; chẩn đoán hình ảnh</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Liên kết kết quả xét nghiệm, hình ảnh và báo cáo vào hồ sơ bệnh nhân, giảm sai sót ghi chép.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Kết nối máy xét nghiệm, lưu trữ chỉ số theo thời gian, hỗ trợ so sánh.
          </div>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-cyan-500/10 flex items-center justify-center">
<svg className="lucide lucide-smartphone w-4 h-4 text-cyan-600" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Ứng dụng bệnh nhân</div>
<div className="text-xs text-neutral-600">Theo dõi từ xa &amp; nhắc nhở</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Ứng dụng di động giúp bệnh nhân nhận kế hoạch điều trị, nhắc dùng thuốc, theo dõi triệu chứng và gửi phản hồi.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Hỗ trợ push notification, nhật ký sức khỏe, đánh giá triệu chứng.
          </div>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-headset w-4 h-4 text-blue-600" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Trung tâm CSKH</div>
<div className="text-xs text-neutral-600">Quản lý tương tác đa kênh</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Tập trung mọi cuộc gọi, tin nhắn và yêu cầu hỗ trợ vào một màn hình, gắn trực tiếp với hồ sơ bệnh nhân.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Tích hợp tổng đài, SMS, email, chat.
          </div>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-warehouse w-4 h-4 text-amber-600" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Kho thuốc &amp; vật tư</div>
<div className="text-xs text-neutral-600">Kiểm soát tồn kho chính xác</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Đồng bộ kê đơn, xuất kho, nhập kho với báo cáo tồn kho theo lô, hạn sử dụng và nhà cung cấp.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Cảnh báo tồn kho tối thiểu, thuốc sắp hết hạn.
          </div>
</div>

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl bg-fuchsia-500/10 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-4 h-4 text-fuchsia-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Báo cáo quản trị</div>
<div className="text-xs text-neutral-600">Tài chính &amp; hiệu quả điều trị</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Tổng hợp dữ liệu vận hành theo thời gian thực, giúp lãnh đạo ra quyết định dựa trên số liệu.
          </p>
<div className="mt-auto text-xs text-neutral-600">
            Báo cáo doanh thu, cơ cấu bệnh lý, tần suất tái khám, chất lượng tuân thủ.
          </div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="team">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950">Đội ngũ chuyên môn</h2>
<p className="text-base md:text-lg mt-2 text-neutral-700">
            Kết hợp giữa bác sĩ lâm sàng giàu kinh nghiệm và đội ngũ kỹ sư công nghệ y tế.
          </p>
</div>
<div className="text-xs max-w-md text-neutral-600">
          Mỗi tính năng đều được thiết kế cùng các hội đồng chuyên môn thuộc nhiều chuyên khoa khác nhau.
        </div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-4 mb-3">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500/40 to-blue-500/40 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">TT</span>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">BSCKII. Trần Thùy Trang</div>
<div className="text-xs text-neutral-600">Nội tim mạch &amp; chuyển hóa</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Cố vấn chuyên môn cho các module quản lý bệnh mạn tính và phác đồ tăng huyết áp, đái tháo đường.
          </p>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<svg className="lucide lucide-award w-4 h-4 text-indigo-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span>20+ năm kinh nghiệm lâm sàng</span>
</div>
</div>

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-4 mb-3">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">HN</span>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">ThS.BS. Hoàng Nam</div>
<div className="text-xs text-neutral-600">Chẩn đoán hình ảnh</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Thiết kế luồng đọc - báo cáo - đối chiếu hình ảnh, tối ưu tương tác giữa khoa CĐHA và bác sĩ lâm sàng.
          </p>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<svg className="lucide lucide-monitor-smartphone w-4 h-4 text-cyan-600" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<span>Kết hợp AI đọc phim &amp; lưu trữ PACS</span>
</div>
</div>

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-4 mb-3">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-500/40 to-rose-500/40 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight">QL</span>
</div>
<div>
<div className="text-sm font-semibold text-neutral-900">BS. Quỳnh Lan</div>
<div className="text-xs text-neutral-600">Quản lý chất lượng y tế</div>
</div>
</div>
<p className="text-sm mb-3 text-neutral-700">
            Đảm bảo các tính năng đáp ứng tiêu chuẩn kiểm soát chất lượng và an toàn người bệnh.
          </p>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<svg className="lucide lucide-shield-check w-4 h-4 text-blue-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Tham gia xây dựng tiêu chuẩn nội kiểm</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="pricing">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-950">Bảng giá linh hoạt</h2>
<p className="text-base md:text-lg mt-2 text-neutral-700">
            Tối ưu chi phí theo quy mô phòng khám, không giới hạn số hồ sơ bệnh nhân.
          </p>
</div>
<div className="rounded-full border px-3 py-1 flex items-center gap-2 text-xs max-w-xs border-neutral-200 bg-neutral-100/80 text-neutral-700">
<svg className="lucide lucide-info w-4 h-4 text-indigo-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Giá tham khảo, có thể điều chỉnh theo nhu cầu triển khai thực tế.</span>
</div>
</div>
<div className="grid gap-6 md:grid-cols-[1.1fr,1fr] items-start">

<div className="grid gap-5 md:grid-cols-2">

<div className="rounded-2xl border p-5 flex flex-col border-neutral-200 bg-neutral-100/80">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-sm font-semibold text-neutral-900">Clinic Start</div>
<div className="text-xs text-neutral-600">Cho phòng khám 1–3 phòng</div>
</div>
<span className="rounded-full border text-[0.7rem] px-2 py-0.5 border-neutral-300/80 bg-neutral-200/80 text-neutral-700">
                Phổ biến
              </span>
</div>
<div className="mb-4">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-neutral-950">4.9 triệu</span>
<span className="text-xs text-neutral-600">/tháng</span>
</div>
<div className="text-xs text-neutral-500">Thanh toán năm: từ 49 triệu/năm</div>
</div>
<ul className="space-y-2 text-sm mb-4 text-neutral-700">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Quản lý khám ngoại trú &amp; hồ sơ điện tử cơ bản.</span>
</li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Kho thuốc, vật tư &amp; báo cáo tài chính đơn giản.</span>
</li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-blue-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Đào tạo trực tuyến cho nhân viên.</span>
</li>
</ul>
<button className="mt-auto inline-flex items-center justify-center rounded-full border text-xs px-4 py-2 transition-colors border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-900">
              Yêu cầu báo giá chi tiết
            </button>
</div>

<div className="rounded-2xl border border-indigo-500/60 bg-gradient-to-b p-5 relative overflow-hidden from-neutral-100 to-neutral-50">
<div className="absolute -top-10 -right-12 h-32 w-32 bg-indigo-500/30 blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative flex items-center justify-between mb-3">
<div>
<div className="text-sm font-semibold text-neutral-900">Clinic Pro</div>
<div className="text-xs text-neutral-700">Cho trung tâm đa khoa &amp; chuyên khoa</div>
</div>
<span className="rounded-full bg-indigo-500/20 text-[0.7rem] px-2 py-0.5 border border-indigo-500/40 text-indigo-800">
                Được chọn nhiều nhất
              </span>
</div>
<div className="relative mb-4">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-neutral-950">9.9 triệu</span>
<span className="text-xs text-neutral-600">/tháng</span>
</div>
<div className="text-xs text-neutral-600">Thanh toán năm: từ 99 triệu/năm</div>
</div>
<ul className="relative space-y-2 text-sm mb-4 text-neutral-800">
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Toàn bộ tính năng Clinic Start.</span>
</li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Quản lý cận lâm sàng, chẩn đoán hình ảnh &amp; ứng dụng bệnh nhân.</span>
</li>
<li className="flex gap-2">
<svg className="lucide lucide-check w-4 h-4 mt-0.5 text-indigo-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Dashboard phân tích &amp; cảnh báo lâm sàng.</span>
</li>
</ul>
<button className="relative mt-auto inline-flex items-center justify-center rounded-full bg-indigo-500 text-xs font-medium px-4 py-2 transition-colors hover:bg-indigo-600 text-neutral-50">
              Đặt lịch tư vấn triển khai
            </button>
</div>
</div>

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-100/80">
<div className="flex items-center gap-3 mb-3">
<span className="h-9 w-9 rounded-xl flex items-center justify-center bg-neutral-200">
<i className="w-4 h-4 text-neutral-700" data-lucide="scales" style={{strokeWidth: '1.5'}}></i>
</span>
<div>
<div className="text-sm font-semibold text-neutral-900">Tư vấn gói linh hoạt</div>
<div className="text-xs text-neutral-600">Thiết kế gói phù hợp mô hình riêng của bạn</div>
</div>
</div>
<p className="text-sm mb-4 text-neutral-700">
            Nếu phòng khám của bạn có cấu trúc đặc thù (liên kết nhiều chi nhánh, hợp tác với bệnh viện, hoặc mô hình khám doanh nghiệp),
            chúng tôi có thể tùy chỉnh module và cách tính phí tương ứng.
          </p>
<ul className="space-y-2 text-xs mb-4 text-neutral-700">
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Không giới hạn số lượng hồ sơ bệnh nhân.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Giảm giá khi triển khai đa chi nhánh hoặc hợp đồng dài hạn.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-1 rounded-full bg-neutral-500"></span>
<span>Tùy chọn on-premise hoặc cloud theo chính sách dữ liệu.</span>
</li>
</ul>
<div className="rounded-2xl border p-4 text-xs border-neutral-300 bg-neutral-50/80 text-neutral-700">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-phone-call w-4 h-4 text-indigo-600" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Trao đổi nhanh trong 30 phút</span>
</div>
<p className="mb-2">
              Để có báo giá chính xác, hãy chia sẻ với chúng tôi:
            </p>
<ul className="list-disc list-inside space-y-1 text-neutral-600">
<li>Quy mô phòng khám (số phòng, số bác sĩ).</li>
<li>Chuyên khoa chính &amp; dịch vụ trọng tâm.</li>
<li>Nhu cầu kết nối hệ thống hiện có (kế toán, LIS, PACS...).</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14" id="contact">
<div className="grid md:grid-cols-[1.1fr,1fr] gap-10 items-start">

<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-neutral-950">Liên hệ tư vấn giải pháp</h2>
<p className="text-base md:text-lg mb-6 text-neutral-700">
            Chia sẻ ngắn gọn về mô hình phòng khám, chúng tôi sẽ đề xuất lộ trình triển khai tối ưu.
          </p>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs mb-1 text-neutral-700">Họ và tên</label>
<input className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" placeholder="VD: Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="block text-xs mb-1 text-neutral-700">Chức vụ</label>
<input className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" placeholder="Giám đốc, Bác sĩ trưởng khoa..." type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs mb-1 text-neutral-700">Tên phòng khám / đơn vị</label>
<input className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" type="text"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-neutral-700">Email công việc</label>
<input className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" placeholder="you@clinic.vn" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs mb-1 text-neutral-700">Số điện thoại</label>
<input className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" type="tel"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-neutral-700">Quy mô phòng khám</label>
<select className="outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 text-sm text-neutral-900 bg-neutral-50/80 w-full border-neutral-300 border rounded-xl pt-2 pr-3 pb-2 pl-3">
<option value="">Chọn quy mô</option>
<option>1–3 phòng khám</option>
<option>4–10 phòng khám</option>
<option>Trên  phòng khám / nhiều chi nhánh</option>
</select>
</div>
</div>
<div>
<label className="block text-xs mb-1 text-neutral-700">Nhu cầu chính</label>
<textarea className="w-full rounded-xl border text-sm px-3 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 border-neutral-300 bg-neutral-50/80 text-neutral-900" placeholder="Mô tả ngắn về mô hình hiện tại, vấn đề đang gặp và mục tiêu bạn muốn đạt được..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<button className="inline-flex items-center justify-center rounded-full bg-indigo-500 text-sm font-medium px-6 py-2.5 transition-colors hover:bg-indigo-600 text-neutral-50" type="submit">
                Gửi yêu cầu tư vấn
              </button>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>Chúng tôi cam kết bảo mật tuyệt đối thông tin của bạn.</span>
</div>
</div>
</form>
</div>

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-100/80">
<div className="mb-4">
<h3 className="text-sm font-semibold mb-1 text-neutral-900">Thông tin liên hệ</h3>
<p className="text-xs text-neutral-600">
              Đội ngũ tư vấn sẽ phản hồi trong vòng 24 giờ làm việc.
            </p>
</div>
<div className="space-y-3 text-sm mb-4 text-neutral-700">
<div className="flex gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 mt-0.5 text-indigo-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
                Tầng 5, Tòa nhà HealthTech
                Quận 3, TP. Hồ Chí Minh
              </div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-phone w-4 h-4 mt-0.5 text-indigo-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>Hotline: 1900 999 888</div>
</div>
<div className="flex gap-3">
<svg className="lucide lucide-mail w-4 h-4 mt-0.5 text-indigo-600" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>contact@medisense-clinic.vn</div>
</div>
</div>
<div className="rounded-xl border p-4 mb-4 border-neutral-200 bg-neutral-50/80">
<div className="flex items-center justify-between mb-2">
<div className="text-xs text-neutral-700">Khung giờ tư vấn online</div>
<span className="rounded-full bg-blue-500/15 text-[0.7rem] px-2 py-0.5 flex items-center gap-1 text-blue-700">
<span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
                Đang mở
              </span>
</div>
<div className="grid grid-cols-2 gap-3 text-xs text-neutral-600">
<div>
<div className="mb-1 text-neutral-700">Thứ 2 – Thứ 6</div>
<div>08:30 – 11:30</div>
<div>13:30 – 17:30</div>
</div>
<div>
<div className="mb-1 text-neutral-700">Thứ 7</div>
<div>08:30 – 12:00</div>
<div className="mt-1 text-neutral-500">Chủ nhật: Hỗ trợ qua email</div>
</div>
</div>
</div>
<div className="rounded-xl border bg-gradient-to-tr p-4 border-neutral-200 from-neutral-50 via-neutral-100 to-neutral-100">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-file-down w-4 h-4 text-indigo-600" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
<div className="text-xs text-neutral-800">Nhận bộ tài liệu chi tiết</div>
</div>
<p className="text-xs mb-3 text-neutral-600">
              Bộ tài liệu tổng hợp kiến trúc hệ thống, các module, case study triển khai thực tế và checklist chuẩn bị cho phòng khám.
            </p>
<button className="inline-flex items-center gap-2 rounded-full border text-xs px-4 py-2 transition-colors border-neutral-300 bg-neutral-100 hover:bg-neutral-200 text-neutral-900">
              Tải tài liệu giải pháp
            </button>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-10 md:py-14">
<div className="grid md:grid-cols-[1fr,1.1fr] gap-10 items-start">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 text-neutral-950">Câu hỏi thường gặp</h2>
<p className="text-base md:text-lg mb-4 text-neutral-700">
            Nếu bạn chưa sẵn sàng chuyển đổi toàn bộ hệ thống, chúng tôi có thể đồng hành từng bước.
          </p>
<div className="rounded-2xl border p-4 text-xs border-neutral-200 bg-neutral-100/80 text-neutral-700">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-lightbulb w-4 h-4 text-amber-700" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span>Lộ trình triển khai khuyến nghị</span>
</div>
<ol className="list-decimal list-inside space-y-1 text-neutral-600">
<li>Đánh giá hiện trạng &amp; xác định module ưu tiên.</li>
<li>Triển khai thử nghiệm trên một chuyên khoa.</li>
<li>Nhân rộng ra toàn bộ phòng khám và tích hợp hệ thống khác.</li>
</ol>
</div>
</div>
<div className="space-y-3">

<details className="group rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm text-neutral-900">Phòng khám đang dùng phần mềm khác, có thể chuyển đổi dần không?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180 text-neutral-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-xs text-neutral-700">
              Có. Chúng tôi thường bắt đầu bằng việc triển khai một module độc lập (ví dụ: hồ sơ lâm sàng hoặc kho thuốc)
              song song hệ thống cũ, sau đó lên kế hoạch chuyển đổi dữ liệu và đào tạo đội ngũ để không làm gián đoạn hoạt động.
            </div>
</details>
<details className="group rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm text-neutral-900">Hệ thống có hỗ trợ khám từ xa (telehealth) không?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180 text-neutral-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-xs text-neutral-700">
              Có thể tích hợp module khám từ xa với video call, chat và chia sẻ kết quả cận lâm sàng. Tất cả lịch sử tư vấn sẽ được
              lưu vào hồ sơ bệnh nhân, đảm bảo tính liên tục của điều trị.
            </div>
</details>
<details className="group rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm text-neutral-900">Bảo mật dữ liệu bệnh nhân được đảm bảo như thế nào?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180 text-neutral-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-xs text-neutral-700">
              Dữ liệu được mã hóa, phân quyền chặt chẽ, ghi log truy cập và có cơ chế sao lưu định kỳ.
              Tùy yêu cầu, có thể triển khai tại chỗ (on-premise) để đáp ứng chính sách nội bộ của bệnh viện/phòng khám.
            </div>
</details>
<details className="group rounded-2xl border p-4 border-neutral-200 bg-neutral-100/80">
<summary className="flex items-center justify-between cursor-pointer">
<span className="text-sm text-neutral-900">Thời gian triển khai trung bình là bao lâu?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180 text-neutral-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-xs text-neutral-700">
              Với phòng khám nhỏ, thời gian triển khai có thể từ 1–2 tuần. Với trung tâm đa khoa nhiều dịch vụ,
              chúng tôi thường khuyến nghị lộ trình 4–8 tuần bao gồm khảo sát, cấu hình, đào tạo và chạy thử.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-neutral-200/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-xl flex items-center justify-center bg-neutral-100">
<span className="text-xs font-semibold tracking-tight">MC</span>
</div>
<div className="text-xs text-neutral-600">
            © 2025 Medisense Clinic. Giải pháp công nghệ cho y tế lấy bệnh nhân làm trung tâm.
          </div>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600">
<a className="transition-colors hover:text-neutral-800" href="#">Chính sách bảo mật</a>
<a className="transition-colors hover:text-neutral-800" href="#">Điều khoản sử dụng</a>
<a className="transition-colors hover:text-neutral-800" href="#">Hỗ trợ kỹ thuật</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
