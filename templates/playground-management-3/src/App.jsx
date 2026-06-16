import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Toggle mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Init lucide icons for <i data-lucide="...">
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b backdrop-blur z-40 text-[15px] border-slate-200 bg-white/80" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-cyan-500 flex items-center justify-center text-sm font-semibold tracking-tight text-white" style={{}}>
          TS
        </div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight group-hover:text-cyan-700 transition-colors text-slate-900" style={{}}>
            Thinksoft
          </span>
<span className="text-[12px] text-slate-500" style={{}}>
            Playground Management
          </span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-[15px]">
<a className="transition-colors text-slate-600 hover:text-cyan-700" href="#solutions" style={{}}>Giải pháp</a>
<a className="transition-colors text-slate-600 hover:text-cyan-700" href="#features" style={{}}>Tính năng</a>
<a className="transition-colors text-slate-600 hover:text-cyan-700" href="#customers" style={{}}>Khách hàng</a>
<a className="transition-colors text-slate-600 hover:text-cyan-700" href="#pricing" style={{}}>Bảng giá</a>
<a className="transition-colors text-slate-600 hover:text-cyan-700" href="#resources" style={{}}>Tài liệu</a>
</nav>

<div className="hidden md:flex items-center gap-3 text-[15px]">
<a className="px-3 py-1.5 rounded-md border transition-colors border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50" href="https://docs.thinksoft.com.vn" style={{}} target="_blank">
          Tài liệu
        </a>
<a className="px-4 py-1.5 rounded-md transition-colors shadow-sm bg-cyan-600 text-white hover:bg-cyan-700" href="#contact" style={{}}>
          Liên hệ demo
        </a>
</div>

<button aria-label="Toggle navigation" className="md:hidden inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-cyan-400" id="mobileMenuBtn" style={{}}>
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{color: 'rgb(68, 64, 60)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu" style={{}}>
<div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-[15px]">
<a className="py-1 text-slate-700 hover:text-cyan-700" href="#solutions" style={{}}>Giải pháp</a>
<a className="py-1 text-slate-700 hover:text-cyan-700" href="#features" style={{}}>Tính năng</a>
<a className="py-1 text-slate-700 hover:text-cyan-700" href="#customers" style={{}}>Khách hàng</a>
<a className="py-1 text-slate-700 hover:text-cyan-700" href="#pricing" style={{}}>Bảng giá</a>
<a className="py-1 text-slate-700 hover:text-cyan-700" href="#resources" style={{}}>Tài liệu</a>
<div className="pt-2 flex gap-2">
<a className="flex-1 text-center px-3 py-1.5 rounded-md border transition-colors border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50" href="https://docs.thinksoft.com.vn" style={{}} target="_blank">
            Tài liệu
          </a>
<a className="flex-1 text-center px-3 py-1.5 rounded-md transition-colors bg-cyan-600 text-white hover:bg-cyan-700" href="#contact" style={{}}>
            Liên hệ demo
          </a>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="bg-gradient-to-b w-full border-b from-slate-50 to-white border-slate-200" style={{}}>
<div className="sm:px-6 lg:px-8 sm:py-16 lg:py-20 grid lg:grid-cols-2 lg:gap-16 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 gap-x-10 gap-y-10 items-center">

<div className="">
<span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium tracking-tight mb-4 border-cyan-100 bg-cyan-50 text-cyan-700" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Giải pháp cho khu vui chơi hiện đại
          </span>
<h1 className="text-[32px] sm:text-[38px] lg:text-[46px] font-semibold tracking-tight mb-4 leading-tight text-slate-900" style={{}}>
            Phần mềm quản lý khu vui chơi<br className="hidden sm:block"/>
            tập trung, linh hoạt và chính xác.
          </h1>
<p className="text-[15px] sm:text-[16px] max-w-xl mb-6 text-slate-600" style={{}}>
            Thinksoft cung cấp giải pháp phần mềm quản lý toàn diện cho khu vui chơi, trung tâm giải trí, FEC, trampoline park… 
            từ bán vé, soát vé, thẻ từ, combo dịch vụ, đến báo cáo doanh thu theo thời gian thực.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
<a className="inline-flex justify-center items-center px-4 py-2.5 rounded-md text-[15px] font-medium shadow-sm transition-colors bg-cyan-600 text-white hover:bg-cyan-700" href="#contact" style={{}}>
              Đặt lịch tư vấn &amp; demo
            </a>
<a className="inline-flex justify-center items-center px-4 py-2.5 rounded-md border text-[15px] transition-colors gap-2 border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50" href="https://thinksoft.com.vn" style={{}} target="_blank">
<span>Xem chi tiết trên website</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="flex flex-wrap items-center gap-4 text-[12px] text-slate-500" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Bảo mật &amp; phân quyền chặt chẽ</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal-high w-4 h-4 text-cyan-500" data-lucide="signal-high" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path></svg>
<span>Hỗ trợ nhiều mô hình khu vui chơi</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 rounded-3xl blur-2xl opacity-70 pointer-events-none bg-cyan-100" style={{}}></div>
<div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-3xl blur-2xl opacity-70 pointer-events-none bg-green-100"></div>
<div className="relative rounded-2xl border shadow-sm/50 overflow-hidden bg-white border-slate-200 shadow-slate-200/60" style={{}}>

<div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50" style={{}}>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-[12px] font-medium text-slate-700" style={{}}>Thinksoft Playground Manager</span>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-500" style={{}}>
<svg className="lucide lucide-cloud w-3.5 h-3.5 text-cyan-500" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span>Cloud</span>
</div>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
<div className="rounded-lg border px-3 py-2 border-slate-100 bg-slate-50" style={{}}>
<div className="text-[11px] text-slate-500 mb-1" style={{}}>Doanh thu hôm nay</div>
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{}}>35.2M</div>
<div className="text-[11px] flex items-center gap-1 mt-0.5 text-green-600">
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="">+18% so với hôm qua</span>
</div>
</div>
<div className="rounded-lg border px-3 py-2 border-slate-100 bg-slate-50" style={{}}>
<div className="text-[11px] text-slate-500 mb-1" style={{}}>Lượt khách</div>
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{}}>1,284</div>
<div className="text-[11px] text-slate-500 mt-0.5" style={{}}>Trong ngày</div>
</div>
<div className="rounded-lg border px-3 py-2 border-slate-100 bg-slate-50" style={{}}>
<div className="text-[11px] text-slate-500 mb-1" style={{}}>Thẻ đang hoạt động</div>
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{}}>742</div>
<div className="text-[11px] mt-0.5 text-green-600">Trực tuyến</div>
</div>
<div className="rounded-lg border px-3 py-2 border-slate-100 bg-slate-50" style={{}}>
<div className="text-[11px] text-slate-500 mb-1" style={{}}>Đặt tiệc sinh nhật</div>
<div className="text-sm font-semibold tracking-tight text-slate-900" style={{}}>12</div>
<div className="text-[11px] text-slate-500 mt-0.5" style={{}}>Tuần này</div>
</div>
</div>

<div className="rounded-xl border p-3 sm:p-4 border-slate-100 bg-white" style={{}}>
<div className="flex items-center justify-between mb-2">
<div className="">
<div className="text-[12px] text-slate-500" style={{}}>Doanh thu theo khung giờ</div>
<div className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Hôm nay</div>
</div>
<div className="flex gap-1.5">
<button className="px-2.5 py-1.5 rounded-md border text-[12px] transition-colors border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 hover:bg-cyan-50" style={{}}>
                      Giờ
                    </button>
<button className="px-2.5 py-1.5 rounded-md border border-transparent text-[12px] text-slate-500 transition-colors hover:border-cyan-200 hover:bg-slate-50" style={{}}>
                      Ngày
                    </button>
</div>
</div>
<div className="mt-3">
<div className="flex items-end gap-1.5 h-20">
<div className="flex-1 rounded-t-md bg-cyan-100" style={{height: '20%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-200" style={{height: '35%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-300" style={{height: '55%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-400" style={{height: '80%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-300" style={{height: '60%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-200" style={{height: '40%'}}></div>
<div className="flex-1 rounded-t-md bg-cyan-100" style={{height: '25%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400" style={{}}>
<span>09h</span><span>11h</span><span>13h</span><span>15h</span><span>17h</span><span>19h</span><span>21h</span>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-3">
<div className="rounded-lg border px-3 py-2.5 flex items-center justify-between border-slate-100 bg-slate-50" style={{}}>
<div className="">
<div className="text-[12px] text-slate-500" style={{}}>Top khu vực doanh thu cao</div>
<div className="text-[13px] text-slate-800" style={{}}>Khu trò chơi điện tử · 42%</div>
</div>
<svg className="lucide lucide-trophy w-4 h-4 text-yellow-500" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="rounded-lg border px-3 py-2.5 flex items-center justify-between border-slate-100 bg-slate-50" style={{}}>
<div className="">
<div className="text-[12px] text-slate-500" style={{}}>Cảnh báo</div>
<div className="text-[13px] text-rose-600">3 thẻ chưa checkout sau giờ đóng</div>
</div>
<svg className="lucide lucide-alert-triangle w-4 h-4 text-rose-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-6 sm:-bottom-6 sm:left-10 rounded-xl border shadow-sm px-3 py-2 flex items-center gap-2 bg-white border-slate-200" style={{}}>
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-cyan-100" style={{}}>
<svg className="lucide lucide-scan-line w-3.5 h-3.5 text-cyan-600" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<div className="text-[12px] leading-tight">
<div className="font-medium tracking-tight text-slate-800" style={{}}>Soát vé nhanh</div>
<div className="text-slate-500" style={{}}>Kết nối cổng từ &amp; QR reader</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-200 bg-white" id="solutions" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-2 text-slate-900" style={{}}>
              Giải pháp cho mọi mô hình khu vui chơi
            </h2>
<p className="text-[15px] max-w-2xl text-slate-600" style={{}}>
              Thinksoft hỗ trợ vận hành từ những khu vui chơi nhỏ trong trung tâm thương mại đến hệ thống chuỗi FEC đa chi nhánh, 
              đảm bảo tính linh hoạt trong mô hình kinh doanh và chính sách giá.
            </p>
</div>
<div className="flex items-center gap-2 text-[12px] text-slate-500" style={{}}>
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Có thể tuỳ chỉnh theo quy trình riêng của từng đơn vị.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-xl border transition-colors shadow-sm/50 border-slate-200 bg-slate-50/60 hover:bg-white hover:border-cyan-300" style={{}}>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-lg flex items-center justify-center bg-cyan-100" style={{}}>
<svg className="lucide lucide-ticket w-4.5 h-4.5 text-cyan-600" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Bán vé &amp; soát vé</div>
<div className="text-[12px] text-slate-500" style={{}}>Quầy vé, online, QR</div>
</div>
</div>
<ul className="text-[15px] space-y-1.5 text-slate-600" style={{}}>
<li className="">• Vé trọn gói, vé theo khung giờ, combo, khuyến mãi.</li>
<li>• Tự động kiểm soát lượt vào – ra, chống gian lận.</li>
<li>• Hỗ trợ QR code, thẻ từ, vòng tay RFID.</li>
</ul>
</div>
</div>

<div className="rounded-xl border transition-colors shadow-sm/50 border-slate-200 bg-slate-50/60 hover:bg-white hover:border-cyan-300" style={{}}>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-100">
<svg className="lucide lucide-wallet-cards w-4.5 h-4.5 text-green-700" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Quản lý thẻ &amp; ví điện tử</div>
<div className="text-[12px] text-slate-500" style={{}}>Top-up, tích điểm, membership</div>
</div>
</div>
<ul className="text-[15px] space-y-1.5 text-slate-600" style={{}}>
<li>• Thẻ trả trước, trả sau, hạn mức theo độ tuổi.</li>
<li>• Tích điểm, xếp hạng thành viên, ưu đãi cá nhân hóa.</li>
<li>• Nhật ký sử dụng dịch vụ chi tiết, rõ ràng.</li>
</ul>
</div>
</div>

<div className="rounded-xl border transition-colors shadow-sm/50 border-slate-200 bg-slate-50/60 hover:bg-white hover:border-cyan-300" style={{}}>
<div className="p-4 sm:p-5">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-lg flex items-center justify-center bg-green-100">
<svg className="lucide lucide-chart-line w-4.5 h-4.5 text-yellow-700" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Báo cáo &amp; điều hành</div>
<div className="text-[12px] text-slate-500" style={{}}>Real-time, đa chi nhánh</div>
</div>
</div>
<ul className="text-[15px] space-y-1.5 text-slate-600" style={{}}>
<li className="">• Doanh thu theo khu vực, nhân viên, khung giờ.</li>
<li>• Dashboard cho chủ đầu tư, giám đốc vùng.</li>
<li>• Xuất Excel, PDF, kết nối BI và hệ thống khác.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-200 bg-slate-50" id="features" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
<div>
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-2 text-slate-900" style={{}}>
              Tính năng nổi bật
            </h2>
<p className="text-[15px] max-w-2xl text-slate-600" style={{}}>
              Thiết kế dành riêng cho ngành khu vui chơi, tối ưu hoá thời gian phục vụ tại quầy và mang đến trải nghiệm mượt mà cho khách hàng cuối.
            </p>
</div>
<div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-[12px] text-slate-500 border-slate-200 bg-white" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-cyan-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Triển khai on-premise hoặc cloud tùy nhu cầu doanh nghiệp.</span>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="space-y-3">
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-monitor-smartphone w-4 h-4 text-cyan-600" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Giao diện quầy bán hàng thân thiện</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Màn hình POS tối ưu cho thao tác chạm, ghi nhận vé, combo, phụ thu, ưu đãi trong vài giây.
              </p>
</div>
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-users w-4 h-4 text-green-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Quản lý ca &amp; nhân sự</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Ghi nhận ca làm, doanh thu theo nhân viên, kiểm soát chiết khấu và quyền thao tác trên hệ thống.
              </p>
</div>
</div>

<div className="space-y-3">
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-badge-dollar-sign w-4 h-4 text-yellow-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Chính sách giá linh hoạt</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Định giá theo giờ cao điểm/thấp điểm, ngày lễ, nhóm khách hàng, loại dịch vụ, số lượng người chơi.
              </p>
</div>
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<i className="w-4 h-4 text-slate-600" data-lucide="cube" style={{}}></i>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Quản lý dịch vụ &amp; trò chơi</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Gắn cấu hình thẻ, số lượt, thời gian sử dụng cho từng khu vực hoặc trò chơi riêng lẻ.
              </p>
</div>
</div>

<div className="space-y-3">
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-party-popper w-4 h-4 text-rose-500" data-lucide="party-popper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Đặt tiệc &amp; sự kiện</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Lịch đặt tiệc sinh nhật, đặt đoàn, tour trường học, theo dõi cọc, phụ thu, thực đơn và lịch trình.
              </p>
</div>
<div className="rounded-lg border p-3.5 border-slate-200 bg-white" style={{}}>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-lock-keyhole w-4 h-4 text-blue-700" data-lucide="lock-keyhole" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Bảo mật &amp; phân quyền chi tiết</h3>
</div>
<p className="text-[14px] text-slate-600" style={{}}>
                Phân quyền theo vai trò, chi nhánh, phòng ban; lưu vết thao tác giúp kiểm soát rủi ro nội bộ.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-200 bg-white" id="customers" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-2 text-slate-900" style={{}}>
              Được tin dùng bởi nhiều khu vui chơi trên toàn quốc
            </h2>
<p className="text-[15px] max-w-2xl text-slate-600" style={{}}>
              Thinksoft đồng hành cùng chủ đầu tư ngay từ giai đoạn thiết kế quy trình, đào tạo nhân viên, 
              cho đến khi vận hành ổn định và mở rộng hệ thống.
            </p>
</div>
<div className="flex gap-4 text-[13px] text-slate-500" style={{}}>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>Hỗ trợ 24/7</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500" style={{}}></span>
<span>Nâng cấp định kỳ</span>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 items-stretch">

<div className="lg:col-span-1 rounded-xl border p-4 sm:p-5 flex flex-col justify-between border-slate-200 bg-slate-50" style={{}}>
<div>
<div className="text-[13px] font-medium text-slate-500 uppercase tracking-tight mb-3" style={{}}>
                Một số lĩnh vực khách hàng
              </div>
<ul className="text-[15px] space-y-2 text-slate-700" style={{}}>
<li>• Khu vui chơi trẻ em tại TTTM</li>
<li>• Trung tâm giải trí gia đình (FEC)</li>
<li>• Trampoline park, khu nhà bóng</li>
</ul>
</div>
<div className="mt-5 pt-4 border-t text-[13px] text-slate-500 border-slate-200" style={{}}>
              Hệ thống có thể mở rộng thêm module nhà hàng, cửa hàng bán lẻ, minigolf, bowling…
            </div>
</div>

<div className="lg:col-span-2 rounded-xl border flex flex-col md:flex-row overflow-hidden border-slate-200 bg-slate-50/80" style={{}}>
<div className="md:w-2/3 p-4 sm:p-5 flex flex-col justify-between">
<div className="">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-quote w-4 h-4 text-cyan-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-[13px] font-medium tracking-tight text-cyan-700" style={{}}>CÂU CHUYỆN KHÁCH HÀNG</span>
</div>
<p className="text-[15px] mb-4 text-slate-800" style={{}}>
                  “Từ khi áp dụng hệ thống của Thinksoft, chúng tôi kiểm soát được chính xác lượng khách, 
                  doanh thu theo khung giờ, giảm thất thoát vé và hạn chế tối đa rủi ro từ khâu soát vé. 
                  Thời gian training nhân viên mới cũng nhanh hơn nhiều so với trước.”
                </p>
</div>
<div className="flex items-center justify-between text-[13px] text-slate-600" style={{}}>
<div>
<div className="font-medium tracking-tight text-slate-900" style={{}}>Đại diện quản lý vận hành</div>
<div>Khu vui chơi tại TP. Hồ Chí Minh</div>
</div>
<div className="flex items-center gap-1 text-[12px] text-slate-500" style={{}}>
<svg className="lucide lucide-star w-3.5 h-3.5 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Hợp tác &gt; 3 năm</span>
</div>
</div>
</div>
<div className="md:w-1/3 relative bg-slate-200/40" style={{}}>
<img alt="Khu vui chơi" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 left-3 right-3 rounded-lg border px-3 py-2 text-[12px] backdrop-blur bg-white/85 border-slate-200 text-slate-700" style={{}}>
                Hình ảnh minh họa khu vui chơi sử dụng hệ thống kiểm soát vé &amp; thẻ từ.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-200 bg-slate-50" id="pricing" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-2 text-slate-900" style={{}}>
              Gói giải pháp linh hoạt
            </h2>
<p className="text-[15px] max-w-2xl text-slate-600" style={{}}>
              Thinksoft tư vấn cấu hình, triển khai, đào tạo vận hành và hỗ trợ sau triển khai. 
              Báo giá chi tiết dựa trên quy mô, số lượng điểm bán và tính năng cần triển khai.
            </p>
</div>
<div className="flex items-center gap-2 text-[13px] text-slate-500" style={{}}>
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>Liên hệ chúng tôi để nhận báo giá phù hợp với mô hình của bạn.</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-xl border p-5 flex flex-col hover:shadow-sm transition-all border-slate-200 bg-white hover:border-cyan-400" style={{}}>
<div className="mb-4">
<div className="text-[13px] font-medium text-slate-500 uppercase tracking-tight" style={{}}>Gói Cơ bản</div>
<div className="text-[18px] font-semibold tracking-tight text-slate-900" style={{}}>Khu vui chơi đơn lẻ</div>
<p className="text-[14px] mt-1 text-slate-600" style={{}}>
                Phù hợp với 1 điểm kinh doanh, số lượng quầy bán vé &amp; check-in vừa phải.
              </p>
</div>
<ul className="text-[14px] space-y-1.5 flex-1 text-slate-700" style={{}}>
<li className="">• Quản lý bán vé, soát vé, combo dịch vụ.</li>
<li>• Quản lý thẻ, nạp tiền, trừ lượt.</li>
<li className="">• Báo cáo doanh thu cơ bản.</li>
</ul>
<div className="mt-4">
<div className="text-[12px] text-slate-500 mb-2" style={{}}>Báo giá theo yêu cầu</div>
<a className="inline-flex items-center justify-center w-full px-3 py-2 rounded-md border text-[14px] font-medium transition-colors border-cyan-300 bg-cyan-50 text-cyan-700 hover:bg-cyan-100 hover:border-cyan-400" href="#contact" style={{}}>
                Yêu cầu tư vấn
              </a>
</div>
</div>

<div className="rounded-xl border-2 border-cyan-500 p-5 flex flex-col shadow-sm relative overflow-hidden bg-white" style={{}}>
<div className="absolute right-4 top-4 px-2 py-0.5 rounded-full text-[11px] font-medium tracking-tight bg-cyan-100 text-cyan-700" style={{}}>
              Được chọn nhiều
            </div>
<div className="mb-4">
<div className="text-[13px] font-medium uppercase tracking-tight text-cyan-600" style={{}}>Gói Chuyên nghiệp</div>
<div className="text-[18px] font-semibold tracking-tight text-slate-900" style={{}}>Trung tâm giải trí &amp; FEC</div>
<p className="text-[14px] mt-1 text-slate-600" style={{}}>
                Dành cho khu vui chơi có nhiều khu vực, hệ thống trò chơi phong phú và yêu cầu báo cáo chi tiết.
              </p>
</div>
<ul className="text-[14px] space-y-1.5 flex-1 text-slate-700" style={{}}>
<li className="">• Toàn bộ tính năng gói Cơ bản.</li>
<li className="">• Quản lý ca, nhân sự, phân quyền nâng cao.</li>
<li>• Báo cáo phân tích theo khu vực, trò chơi, kênh bán.</li>
</ul>
<div className="mt-4">
<div className="text-[12px] text-slate-500 mb-2" style={{}}>Báo giá chi tiết khi khảo sát</div>
<a className="inline-flex items-center justify-center w-full px-3 py-2 rounded-md text-[14px] font-medium transition-colors bg-cyan-600 text-white hover:bg-cyan-700" href="#contact" style={{}}>
                Đặt lịch khảo sát
              </a>
</div>
</div>

<div className="rounded-xl border p-5 flex flex-col hover:shadow-sm transition-all border-slate-200 bg-white hover:border-cyan-400" style={{}}>
<div className="mb-4">
<div className="text-[13px] font-medium text-slate-500 uppercase tracking-tight" style={{}}>Gói Doanh nghiệp</div>
<div className="text-[18px] font-semibold tracking-tight text-slate-900" style={{}}>Chuỗi khu vui chơi đa chi nhánh</div>
<p className="text-[14px] mt-1 text-slate-600" style={{}}>
                Phù hợp với tập đoàn, chuỗi FEC, yêu cầu tích hợp hệ thống khác và quản trị tập trung.
              </p>
</div>
<ul className="text-[14px] space-y-1.5 flex-1 text-slate-700" style={{}}>
<li className="">• Toàn bộ tính năng gói Chuyên nghiệp.</li>
<li className="">• Quản lý đa chi nhánh, phân cấp quản trị vùng.</li>
<li className="">• Tích hợp ERP, CRM, hệ thống kế toán, BI.</li>
</ul>
<div className="mt-4">
<div className="text-[12px] text-slate-500 mb-2" style={{}}>Báo giá &amp; lộ trình triển khai riêng</div>
<a className="inline-flex items-center justify-center w-full px-3 py-2 rounded-md border text-[14px] font-medium transition-colors border-slate-200 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50" href="#contact" style={{}}>
                Trao đổi với chuyên gia
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-slate-200 bg-white" id="resources" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div className="">
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-2 text-slate-900" style={{}}>
              Tài liệu &amp; hỗ trợ kỹ thuật
            </h2>
<p className="text-[15px] max-w-2xl text-slate-600" style={{}}>
              Tham khảo tài liệu hướng dẫn cấu hình, API, quy trình vận hành và các câu hỏi thường gặp tại cổng tài liệu trực tuyến.
            </p>
</div>
<div className="flex flex-wrap items-center gap-2">
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-[14px] transition-colors border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-700" href="https://docs.thinksoft.com.vn" style={{}} target="_blank">
<svg className="lucide lucide-book-open-text w-4 h-4" data-lucide="book-open-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
<span>Mở cổng tài liệu</span>
</a>
<a className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-transparent text-[14px] transition-colors text-slate-600 hover:border-cyan-200 hover:bg-slate-50" href="https://thinksoft.com.vn" style={{}} target="_blank">
<svg className="lucide lucide-globe-2 w-4 h-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Website chính thức</span>
</a>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border p-4 sm:p-5 border-slate-200 bg-slate-50" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-file-text w-4 h-4 text-cyan-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Hướng dẫn vận hành</h3>
</div>
<p className="text-[14px] mb-2 text-slate-600" style={{}}>
              Quy trình bán vé, nạp thẻ, xử lý khiếu nại, chi tiết thao tác cho từng bộ phận.
            </p>
<span className="text-[12px] text-slate-500" style={{}}>Dạng bài viết &amp; video, cập nhật thường xuyên.</span>
</div>
<div className="rounded-xl border p-4 sm:p-5 border-slate-200 bg-slate-50" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-braces w-4 h-4 text-green-600" data-lucide="braces" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>API &amp; tích hợp hệ thống</h3>
</div>
<p className="text-[14px] mb-2 text-slate-600" style={{}}>
              Tài liệu kỹ thuật cho đội ngũ IT, tích hợp với website booking, app khách hàng, hệ thống hoá đơn điện tử…
            </p>
<span className="text-[12px] text-slate-500" style={{}}>Cấu trúc API, ví dụ request/response.</span>
</div>
<div className="rounded-xl border p-4 sm:p-5 border-slate-200 bg-slate-50" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-headset w-4 h-4 text-yellow-600" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
<h3 className="text-[15px] font-medium tracking-tight text-slate-900" style={{}}>Trung tâm hỗ trợ</h3>
</div>
<p className="text-[14px] mb-2 text-slate-600" style={{}}>
              Gửi yêu cầu hỗ trợ, theo dõi trạng thái ticket, lịch cập nhật phiên bản và các thông báo quan trọng.
            </p>
<span className="text-[12px] text-slate-500" style={{}}>Quy trình xử lý minh bạch, có SLA rõ ràng.</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-slate-50" id="contact" style={{}}>
<div className="sm:px-6 lg:px-8 sm:py-14 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="max-w-3xl mx-auto rounded-2xl border shadow-sm p-4 sm:p-6 lg:p-8 border-slate-200 bg-white" style={{}}>
<div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="">
<h2 className="text-[24px] sm:text-[30px] font-semibold tracking-tight mb-1 text-slate-900" style={{}}>
                Liên hệ tư vấn &amp; demo giải pháp
              </h2>
<p className="text-[15px] text-slate-600" style={{}}>
                Cho chúng tôi biết về mô hình khu vui chơi của bạn, đội ngũ Thinksoft sẽ liên hệ trong vòng 24 giờ làm việc.
              </p>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[12px] bg-cyan-50 border-cyan-100 text-cyan-700" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>Tư vấn miễn phí, không ràng buộc</span>
</div>
</div>
<form className="grid md:grid-cols-2 gap-4 text-[15px]">
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Họ và tên</label>
<input className="w-full rounded-md border px-3 py-2 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" placeholder="Nguyễn Văn A" style={{}} type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Số điện thoại</label>
<input className="w-full rounded-md border px-3 py-2 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" placeholder="09xx xxx xxx" style={{}} type="tel"/>
</div>
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Email</label>
<input className="w-full rounded-md border px-3 py-2 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" placeholder="you@company.com" style={{}} type="email"/>
</div>
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Tên đơn vị / Khu vui chơi</label>
<input className="w-full rounded-md border px-3 py-2 text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" placeholder="Tên doanh nghiệp hoặc khu vui chơi" style={{}} type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Quy mô mô hình</label>
<select className="w-full rounded-md border px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" style={{}}>
<option value="">Chọn quy mô</option>
<option>1 điểm khu vui chơi</option>
<option>2-3 điểm khu vui chơi</option>
<option>&gt; 3 điểm / Chuỗi FEC</option>
<option>Đang trong giai đoạn chuẩn bị khai trương</option>
</select>
</div>
<div className="md:col-span-1">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Thời gian dự kiến triển khai</label>
<select className="w-full rounded-md border px-3 py-2 text-[15px] focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 border-slate-200 text-slate-900 bg-slate-50" style={{}}>
<option value="">Chọn thời gian</option>
<option>Trong 1 tháng tới</option>
<option>1 - 3 tháng tới</option>
<option>3 - 6 tháng tới</option>
<option>Chưa xác định, đang tham khảo</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-[13px] font-medium mb-1.5 text-slate-700" style={{}}>Nhu cầu &amp; mô tả mô hình kinh doanh</label>
<textarea className="text-[15px] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500 text-slate-900 bg-slate-50 w-full border-slate-200 border rounded-md pt-2 pr-3 pb-2 pl-3" placeholder="Ví dụ: Khu vui chơi trẻ em tại TTTM, có 2 quầy vé, 1 khu trampoline, 1 khu trò chơi điện tử, dự kiến mở thêm chi nhánh trong 1 năm tới..." rows="4"></textarea>
</div>
<div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-2">
<div className="flex items-start gap-2 text-[12px] text-slate-500" style={{}}>
<input className="mt-0.5 h-3.5 w-3.5 rounded focus:ring-cyan-500/60 border-slate-300 text-cyan-600" id="agreement" style={{}} type="checkbox"/>
<label className="cursor-pointer" htmlFor="agreement">
                  Tôi đồng ý để Thinksoft liên hệ tư vấn qua điện thoại / email. Thông tin của bạn được bảo mật và chỉ sử dụng cho mục đích tư vấn giải pháp.
                </label>
</div>
<button className="inline-flex items-center justify-center px-4 py-2.5 rounded-md text-[15px] font-medium shadow-sm transition-colors bg-cyan-600 text-white hover:bg-cyan-700" style={{}} type="submit">
                Gửi thông tin
              </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-slate-200 bg-white" style={{}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-[13px] text-slate-600" style={{}}>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-cyan-500 flex items-center justify-center text-[11px] font-semibold tracking-tight text-white" style={{}}>
            TS
          </div>
<div className="flex flex-col leading-tight">
<span className="font-medium tracking-tight text-[14px] text-slate-900" style={{}}>Thinksoft</span>
<span className="text-[12px] text-slate-500" style={{}}>Giải pháp quản lý khu vui chơi</span>
</div>
</div>
<div className="flex flex-wrap gap-4">
<div>
<div className="font-medium mb-1 text-slate-800" style={{}}>Liên hệ</div>
<div>Website: <a className="hover:underline text-cyan-700" href="https://thinksoft.com.vn" style={{}} target="_blank">thinksoft.com.vn</a></div>
<div>Email: <a className="hover:underline text-cyan-700" href="mailto:info@thinksoft.com.vn" style={{}}>info@thinksoft.com.vn</a></div>
</div>
<div>
<div className="font-medium mb-1 text-slate-800" style={{}}>Tài nguyên</div>
<div><a className="transition-colors hover:text-cyan-700" href="https://docs.thinksoft.com.vn" style={{}} target="_blank">Cổng tài liệu</a></div>
<div><a className="transition-colors hover:text-cyan-700" href="#pricing" style={{}}>Báo giá giải pháp</a></div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-slate-200" style={{}}>
<p className="text-[12px] text-slate-500" style={{}}>
          © <span id="year">2025</span> Thinksoft. Đã đăng ký bản quyền.
        </p>
<div className="flex gap-3 text-[12px] text-slate-500" style={{}}>
<a className="transition-colors hover:text-cyan-700" href="#contact" style={{}}>Liên hệ</a>
<span className="text-slate-300" style={{}}>•</span>
<a className="transition-colors hover:text-cyan-700" href="#resources" style={{}}>Hỗ trợ kỹ thuật</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
