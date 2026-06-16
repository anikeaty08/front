import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Update current year in footer
    document.getElementById('year-span').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col min-h-screen">

<div className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 py-2">
<div className="flex items-center gap-2 text-slate-300 text-sm">
<span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 text-xs tracking-tight">
            Mới
          </span>
<span className="text-sm">Ra mắt Cilinic 2.0 – quản lý phòng khám đa cơ sở.</span>
</div>
<button className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100 transition-colors">
          Xem cập nhật
          <span className="i-lucide-chevron-right w-3 h-3"></span>
</button>
</div>
</div>

<header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-30">
<div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/30">
<span className="text-emerald-400 font-semibold tracking-tight">Ci</span>
</div>
<div className="flex flex-col">
<span className="font-semibold tracking-tight leading-none">Cilinic</span>
<span className="text-xs text-slate-400 leading-none mt-1">Workspace cho phòng khám</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#tinh-nang">Tính năng</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#giai-phap">Giải pháp</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#bang-gia">Bảng giá</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#khach-hang">Khách hàng</a>
<a className="text-slate-300 hover:text-slate-50 transition-colors" href="#faq">Hỗ trợ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center text-sm text-slate-300 hover:text-slate-50 transition-colors">
            Đăng nhập
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 text-sm font-medium tracking-tight px-3 md:px-4 py-2 hover:bg-emerald-400 transition-colors shadow-sm shadow-emerald-500/30">
            Dùng thử miễn phí
            <span className="i-lucide-arrow-right w-4 h-4"></span>
</button>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-b border-slate-900">
<div className="mx-auto max-w-6xl px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs text-slate-300">Nền tảng quản lý phòng khám toàn diện</span>
</div>
<div className="space-y-3">
<h1 className="text-slate-50 font-semibold tracking-tight leading-tight text-4xl md:text-5xl">
                Điều hành phòng khám<br className="hidden sm:block"/>
                trên một không gian làm việc duy nhất.
              </h1>
<p className="text-slate-300 text-base md:text-lg">
                Cilinic giúp bạn quản lý lịch hẹn, hồ sơ bệnh nhân, thu ngân, bảo hiểm và báo cáo
                chỉ trong một màn hình thống nhất. Thiết kế cho bác sĩ, quản lý và nhân viên lễ tân.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex justify-center items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 text-sm font-medium tracking-tight px-4 py-2.5 hover:bg-emerald-400 transition-colors shadow-sm shadow-emerald-500/40">
                Bắt đầu dùng thử 14 ngày
                <span className="i-lucide-arrow-right w-4 h-4"></span>
</button>
<button className="inline-flex justify-center items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-100 text-sm px-4 py-2.5 hover:bg-slate-800 hover:border-slate-700 transition-colors">
                Xem demo trực tiếp
                <span className="i-lucide-play-circle w-4 h-4"></span>
</button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="i-lucide-shield-check w-4 h-4 text-emerald-400"></span>
<span>Bảo mật dữ liệu theo chuẩn y tế</span>
</div>
<div className="flex items-center gap-2">
<span className="i-lucide-cloud w-4 h-4 text-emerald-400"></span>
<span>Hoạt động trên mọi thiết bị</span>
</div>
<div className="flex items-center gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-400"></span>
<span>Không cần cài đặt, không ràng buộc</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 pt-2">
<div className="border border-slate-800 rounded-xl bg-slate-900/60 p-3">
<div className="text-slate-100 font-semibold tracking-tight text-lg">+250</div>
<div className="text-xs text-slate-400 mt-1">Phòng khám đang sử dụng</div>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-900/60 p-3">
<div className="text-slate-100 font-semibold tracking-tight text-lg">99.9%</div>
<div className="text-xs text-slate-400 mt-1">Thời gian hoạt động hệ thống</div>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-900/60 p-3">
<div className="text-slate-100 font-semibold tracking-tight text-lg">24/7</div>
<div className="text-xs text-slate-400 mt-1">Hỗ trợ kỹ thuật</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-8 -left-4 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="absolute -bottom-10 -right-8 w-56 h-56 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="relative border border-slate-800 rounded-2xl bg-slate-900/80 backdrop-blur shadow-xl shadow-emerald-500/20 overflow-hidden">

<div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/80">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-slate-700"></span>
<span className="w-2 h-2 rounded-full bg-slate-700"></span>
<span className="w-2 h-2 rounded-full bg-slate-700"></span>
</div>
<div className="text-xs text-slate-400">Cilinic Workspace</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="i-lucide-monitor w-3.5 h-3.5"></span>
<span className="i-lucide-wifi w-3.5 h-3.5"></span>
</div>
</div>
<div className="grid grid-cols-5">

<aside className="col-span-1 border-r border-slate-800 bg-slate-950/50">
<div className="p-3 flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Chi nhánh</span>
<span className="i-lucide-chevron-down w-3 h-3 text-slate-500"></span>
</div>
<button className="flex items-center gap-2 rounded-lg bg-slate-900/70 border border-slate-800 px-2.5 py-1.5 hover:bg-slate-800/80 transition-colors">
<div className="h-6 w-6 rounded-md bg-gradient-to-tr from-emerald-500 to-sky-500"></div>
<div className="flex flex-col items-start">
<span className="text-xs text-slate-100">Phòng khám Quận 1</span>
<span className="text-[0.7rem] text-slate-400">Hoạt động • 12 phòng</span>
</div>
</button>
<nav className="space-y-1 text-xs">
<button className="w-full flex items-center gap-2 rounded-md bg-slate-900/80 border border-slate-800 px-2.5 py-1.5 text-slate-100 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors">
<span className="i-lucide-layout-dashboard w-3.5 h-3.5"></span>
<span>Tổng quan</span>
</button>
<button className="w-full flex items-center gap-2 rounded-md px-2.5 py-1.5 text-slate-300 hover:bg-slate-900/70 hover:text-slate-50 hover:border-slate-700 border border-transparent transition-colors">
<span className="i-lucide-calendar-clock w-3.5 h-3.5"></span>
<span>Lịch hẹn</span>
</button>
<button className="w-full flex items-center gap-2 rounded-md px-2.5 py-1.5 text-slate-300 hover:bg-slate-900/70 hover:text-slate-50 hover:border-slate-700 border border-transparent transition-colors">
<span className="i-lucide-stethoscope w-3.5 h-3.5"></span>
<span>Khám bệnh</span>
</button>
<button className="w-full flex items-center gap-2 rounded-md px-2.5 py-1.5 text-slate-300 hover:bg-slate-900/70 hover:text-slate-50 hover:border-slate-700 border border-transparent transition-colors">
<span className="i-lucide-users w-3.5 h-3.5"></span>
<span>Bệnh nhân</span>
</button>
<button className="w-full flex items-center gap-2 rounded-md px-2.5 py-1.5 text-slate-300 hover:bg-slate-900/70 hover:text-slate-50 hover:border-slate-700 border border-transparent transition-colors">
<span className="i-lucide-credit-card w-3.5 h-3.5"></span>
<span>Thu ngân</span>
</button>
<button className="w-full flex items-center gap-2 rounded-md px-2.5 py-1.5 text-slate-300 hover:bg-slate-900/70 hover:text-slate-50 hover:border-slate-700 border border-transparent transition-colors">
<span className="i-lucide-bar-chart-3 w-3.5 h-3.5"></span>
<span>Báo cáo</span>
</button>
</nav>
</div>
</aside>

<div className="col-span-4 bg-slate-950/40">

<div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="i-lucide-calendar-days w-4 h-4"></span>
<span>Hôm nay</span>
<span className="text-slate-500">•</span>
<span>Thứ 3, 17/11/2025</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-200 hover:border-emerald-500/60 hover:text-emerald-300 transition-colors">
<span className="i-lucide-plus w-3.5 h-3.5"></span>
<span>Thêm lịch hẹn</span>
</button>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="i-lucide-bell w-4 h-4"></span>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
<div className="flex items-center gap-2">
<img alt="Avatar" className="h-7 w-7 rounded-full border border-slate-700 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
</div>
</div>

<div className="grid md:grid-cols-5 gap-3 p-4">

<div className="md:col-span-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="font-medium tracking-tight">Lịch khám theo giờ</span>
<span className="rounded-full border border-emerald-500/30 text-emerald-300 px-2 py-0.5 text-[0.7rem]">08:00 - 17:00</span>
</div>
<div className="flex items-center gap-1 text-[0.7rem] text-slate-400">
<button className="px-2 py-0.5 rounded-md border border-slate-800 bg-slate-900/70 hover:border-slate-700">Ngày</button>
<button className="px-2 py-0.5 rounded-md border border-slate-900 bg-slate-950/80 hover:border-slate-800">Tuần</button>
</div>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-950/40 overflow-hidden">

<div className="grid grid-cols-6 border-b border-slate-800 text-[0.7rem] text-slate-400">
<div className="py-2 pl-2 border-r border-slate-800">Giờ</div>
<div className="py-2 text-center">Phòng 101</div>
<div className="py-2 text-center">Phòng 102</div>
<div className="py-2 text-center">Phòng 201</div>
<div className="py-2 text-center">Phòng 202</div>
<div className="py-2 text-center">Phòng 301</div>
</div>

<div className="divide-y divide-slate-900 text-[0.7rem]">

<div className="grid grid-cols-6">
<div className="border-r border-slate-900 py-3 pl-2 text-slate-500">08:00</div>
<div className="relative py-2 border-r border-slate-900">
<div className="absolute inset-y-1 left-1 right-1 rounded-md bg-emerald-500/15 border border-emerald-500/50 flex flex-col justify-center px-2">
<div className="flex items-center justify-between">
<span className="text-[0.75rem] text-emerald-200 font-medium tracking-tight">Nguyễn Thị A</span>
<span className="text-[0.65rem] text-emerald-200/80">Khám tổng quát</span>
</div>
<div className="flex items-center justify-between mt-1 text-[0.65rem] text-slate-300">
<span className="flex items-center gap-1">
<span className="i-lucide-stethoscope w-3 h-3"></span>
<span>BS. Minh</span>
</span>
<span>08:00 - 08:30</span>
</div>
</div>
</div>
<div className="border-r border-slate-900"></div>
<div className="border-r border-slate-900"></div>
<div className="border-r border-slate-900"></div>
<div></div>
</div>

<div className="grid grid-cols-6">
<div className="border-r border-slate-900 py-3 pl-2 text-slate-500">09:00</div>
<div className="border-r border-slate-900"></div>
<div className="relative py-2 border-r border-slate-900">
<div className="absolute inset-y-1 left-1 right-1 rounded-md bg-sky-500/15 border border-sky-500/50 flex flex-col justify-center px-2">
<div className="flex items-center justify-between">
<span className="text-[0.75rem] text-sky-100 font-medium tracking-tight">Trần Văn B</span>
<span className="text-[0.65rem] text-sky-100/80">Xét nghiệm</span>
</div>
<div className="flex items-center justify-between mt-1 text-[0.65rem] text-slate-200">
<span className="flex items-center gap-1">
<span className="i-lucide-flask-conical w-3 h-3"></span>
<span>XN máu</span>
</span>
<span>09:00 - 09:20</span>
</div>
</div>
</div>
<div className="border-r border-slate-900"></div>
<div className="border-r border-slate-900"></div>
<div></div>
</div>

<div className="grid grid-cols-6">
<div className="border-r border-slate-900 py-3 pl-2 text-slate-500">10:00</div>
<div className="border-r border-slate-900"></div>
<div className="border-r border-slate-900"></div>
<div className="relative py-2 border-r border-slate-900">
<div className="absolute inset-y-1 left-1 right-1 rounded-md bg-amber-500/10 border border-amber-400/60 flex flex-col justify-center px-2">
<div className="flex items-center justify-between">
<span className="text-[0.75rem] text-amber-100 font-medium tracking-tight">Phan C</span>
<span className="text-[0.65rem] text-amber-100/80">Tái khám</span>
</div>
<div className="flex items-center justify-between mt-1 text-[0.65rem] text-slate-200">
<span className="flex items-center gap-1">
<span className="i-lucide-heart-pulse w-3 h-3"></span>
<span>Tim mạch</span>
</span>
<span>10:00 - 10:30</span>
</div>
</div>
</div>
<div className="border-r border-slate-900"></div>
<div></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 space-y-3">

<div className="border border-slate-800 rounded-xl bg-slate-950/40 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="i-lucide-users-2 w-3.5 h-3.5 text-slate-200"></span>
<span className="text-xs font-medium tracking-tight text-slate-100">Danh sách chờ</span>
</div>
<span className="rounded-full bg-slate-900/80 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-slate-300">
                            05 bệnh nhân
                          </span>
</div>
<div className="space-y-1.5 text-[0.75rem]">
<div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/70 px-2 py-1.5 hover:border-emerald-500/50 transition-colors">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.7rem] text-slate-200">NA</div>
<div>
<div className="text-slate-100">Nguyễn Anh</div>
<div className="text-[0.65rem] text-slate-400">Khám da liễu • 08:45</div>
</div>
</div>
<span className="text-[0.65rem] text-emerald-300">Đã đến</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-2 py-1.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.7rem] text-slate-200">TB</div>
<div>
<div className="text-slate-100">Trần Bình</div>
<div className="text-[0.65rem] text-slate-400">Khám nội tổng quát • 09:15</div>
</div>
</div>
<span className="text-[0.65rem] text-amber-300">Đang di chuyển</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/50 px-2 py-1.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center text-[0.7rem] text-slate-200">LM</div>
<div>
<div className="text-slate-100">Lê My</div>
<div className="text-[0.65rem] text-slate-400">Tái khám • 09:30</div>
</div>
</div>
<span className="text-[0.65rem] text-slate-400">Đặt trước</span>
</div>
</div>
</div>

<div className="border border-slate-800 rounded-xl bg-slate-950/40 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="i-lucide-pie-chart w-3.5 h-3.5 text-slate-200"></span>
<span className="text-xs font-medium tracking-tight text-slate-100">Doanh thu hôm nay</span>
</div>
<button className="text-[0.7rem] text-slate-400 hover:text-slate-200 transition-colors">
                            Xem chi tiết
                          </button>
</div>
<div className="space-y-1">
<div className="text-sm text-slate-100 font-semibold tracking-tight">
                            32.500.000₫
                          </div>
<div className="flex items-center gap-2 text-[0.7rem]">
<span className="text-emerald-300 flex items-center gap-1">
<span className="i-lucide-trending-up w-3 h-3"></span>
<span>+18% so với hôm qua</span>
</span>
</div>
</div>
<div className="space-y-1.5 text-[0.7rem]">
<div className="flex items-center justify-between">
<span className="text-slate-300">Tiền mặt</span>
<span className="text-slate-100">12.000.000₫</span>
</div>
<div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-2/5 bg-emerald-500"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-300">Chuyển khoản / Thẻ</span>
<span className="text-slate-100">20.500.000₫</span>
</div>
<div className="h-1.5 rounded-full bg-slate-900 overflow-hidden">
<div className="h-full w-3/4 bg-sky-500"></div>
</div>
</div>
</div>

<div className="border border-slate-800 rounded-xl bg-slate-950/40 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="i-lucide-alert-circle w-3.5 h-3.5 text-amber-300"></span>
<span className="text-xs font-medium tracking-tight text-slate-100">Thông báo</span>
</div>
<span className="text-[0.7rem] text-slate-400">3 chưa xử lý</span>
</div>
<div className="space-y-1.5 text-[0.7rem]">
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2 py-1.5">
<span className="i-lucide-file-warning w-3 h-3 text-amber-300"></span>
<div>
<div className="text-slate-100">Thiếu hồ sơ BHYT bệnh nhân Trần Bình</div>
<div className="text-[0.65rem] text-slate-400">Bổ sung trước khi thu ngân • 5 phút trước</div>
</div>
</div>
<div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/70 px-2 py-1.5">
<span className="i-lucide-hard-drive-download w-3 h-3 text-sky-300"></span>
<div>
<div className="text-slate-100">Phiên bản hệ thống mới sẵn sàng</div>
<div className="text-[0.65rem] text-slate-400">Cập nhật sau 22:00 để tránh gián đoạn</div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</div>
</div>
</div> 
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="tinh-nang">
<div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-3 max-w-2xl">
<h2 className="text-slate-50 font-semibold tracking-tight text-2xl md:text-3xl">
                Tất cả công việc của phòng khám trong một nền tảng.
              </h2>
<p className="text-slate-300 text-base">
                Từ tiếp nhận bệnh nhân, khám, cận lâm sàng, kê đơn, thanh toán đến báo cáo -
                Cilinic giúp đội ngũ của bạn phối hợp trơn tru, giảm sai sót và tối ưu thời gian.
              </p>
</div>
<div className="flex gap-3 text-xs text-slate-300">
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5">
<span className="i-lucide-lock-keyhole w-3.5 h-3.5 text-emerald-300"></span>
<span>Mã hóa đầu cuối</span>
</div>
<div className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5">
<span className="i-lucide-server w-3.5 h-3.5 text-sky-300"></span>
<span>Lưu trữ đám mây</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border border-slate-800 rounded-2xl bg-slate-950/70 p-5 flex flex-col gap-4 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
<span className="i-lucide-calendar-clock w-4 h-4 text-emerald-300"></span>
</div>
<div>
<h3 className="text-slate-50 font-medium tracking-tight text-lg">Lịch hẹn &amp; tiếp nhận</h3>
<p className="text-slate-400 text-sm mt-1">
                    Quản lý lịch hẹn đa kênh, tự động nhắc lịch qua SMS/Zalo, xếp số thứ tự thông minh.
                  </p>
</div>
</div>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Lịch theo phòng, theo bác sĩ, theo loại dịch vụ.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Giảm trùng lịch, nhầm bệnh nhân với bộ lọc thông minh.</span>
</li>
</ul>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/70 p-5 flex flex-col gap-4 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center gap-3">
<div 10="" 40="" bg-sky-500="" border="" border-sky-500="" className="h-9 w-9 rounded-lg bg-sky-500/10 border borderky &lt;div class=" flex="" h-9="" items-center="" justify-center"="" rounded-lg="" w-9="">
<span className="i-lucide-stethoscope w-4 h-4 text-sky-300"></span>
</div>
<div>
<h3 className="text-slate-50 font-medium tracking-tight text-lg">Khám bệnh &amp; hồ sơ điện tử</h3>
<p className="text-slate-400 text-sm mt-1">
                    Giao diện khám bệnh liền mạch từ chỉ định, cận lâm sàng đến kê đơn – tất cả trên một màn hình.
                  </p>
</div>
</div>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Hồ sơ bệnh án điện tử chuẩn hóa, tra cứu trong vài giây.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Mẫu đơn thuốc, phác đồ điều trị tùy chỉnh theo chuyên khoa.</span>
</li>
</ul>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/70 p-5 flex flex-col gap-4 hover:border-emerald-500/40 hover:bg-slate-900/80 transition-colors">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<span className="i-lucide-credit-card w-4 h-4 text-amber-300"></span>
</div>
<div>
<h3 className="text-slate-50 font-medium tracking-tight text-lg">Thu ngân &amp; bảo hiểm</h3>
<p className="text-slate-400 text-sm mt-1">
                    Tính tiền nhanh, kiểm soát công nợ, tách bạch BHYT – dịch vụ, hạn chế nhầm lẫn.
                  </p>
</div>
</div>
<ul className="text-sm text-slate-300 space-y-1.5">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tự động lấy dữ liệu từ chỉ định và đơn thuốc sang hoá đơn.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Báo cáo doanh thu theo ca, theo quầy, theo nhân sự.</span>
</li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 pt-4">
<div className="border border-slate-800 rounded-2xl bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center gap-2">
<span className="i-lucide-shield-check w-4 h-4 text-emerald-300"></span>
<h3 className="text-sm font-medium tracking-tight text-slate-50">An toàn &amp; tuân thủ</h3>
</div>
<p className="text-sm text-slate-300">
                Phân quyền chi tiết theo vai trò, lịch sử thao tác đầy đủ, sao lưu nhiều lớp trên đám mây.
              </p>
</div>
<div className="border border-slate-800 rounded-2xl bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center gap-2">
<span className="i-lucide-repeat-2 w-4 h-4 text-sky-300"></span>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Kết nối hệ sinh thái</h3>
</div>
<p className="text-sm text-slate-300">
                Tích hợp lab, PACS, nhà thuốc, cổng thanh toán và dịch vụ nhắn tin, giúp dữ liệu chảy liền mạch.
              </p>
</div>
<div className="border border-slate-800 rounded-2xl bg-slate-950/60 p-5 space-y-3">
<div className="flex items-center gap-2">
<span className="i-lucide-bar-chart-3 w-4 h-4 text-violet-300"></span>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Báo cáo theo thời gian thực</h3>
</div>
<p className="text-sm text-slate-300">
                Theo dõi lượt khám, doanh thu, hiệu suất bác sĩ và phòng ban trên dashboard trực quan.
              </p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-gradient-to-b from-slate-950 to-slate-950/90" id="giai-phap">
<div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-3 max-w-2xl">
<h2 className="text-slate-50 font-semibold tracking-tight text-2xl md:text-3xl">
                Giải pháp cho từng vai trò trong phòng khám.
 </h2>
<p className="text-slate-300 text-base">
                Dù bạn là chủ phòng khám, bác sĩ, điều dưỡng hay kế toán, Cilinic đều có giao diện làm việc riêng phù hợp.
              </p>
</div>
<div className="text-xs text-slate-400 max-w-sm">
              Triển khai nhanh trong 7–10 ngày, đội ngũ chuyên gia sẽ tư vấn quy trình, chuyển đổi dữ liệu và đào tạo tại chỗ.
            </div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center">
<span className="i-lucide-crown w-4 h-4 text-emerald-300"></span>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Chủ phòng khám</h3>
<p className="text-[0.7rem] text-slate-400 mt-0.5">Tầm nhìn toàn cảnh</p>
</div>
</div>
<span className="rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.65rem] px-2 py-0.5 text-emerald-200">
                  Dashboard 360°
                </span>
</div>
<ul className="space-y-1.5 text-sm text-slate-300">
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Xem ngay doanh thu, chi phí, lợi nhuận theo ngày/tháng/cơ sở.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>So sánh hiệu suất từng bác sĩ, phòng ban, khung giờ.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Nhận cảnh báo khi có bất thường về doanh thu hoặc lượng bệnh nhân.</span>
</li>
</ul>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-sky-500/10 border border-sky-400/40 flex items-center justify-center">
<span className="i-lucide-user-doctor w-4 h-4 text-sky-300"></span>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Bác sĩ</h3>
<p className="text-[0.7rem] text-slate-400 mt-0.5">Tập trung vào chuyên môn</p>
</div>
</div>
<span className="rounded-full bg-sky-500/10 border border-sky-500/40 text-[0.65rem] px-2 py-0.5 text-sky-200">
                  EHR tối giản
                </span>
</div>
<ul className="space-y-1.5 text-sm text-slate-300">
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Hồ sơ bệnh nhân hiển thị theo dòng thời gian, không lo bỏ sót thông tin.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Kê đơn nhanh với gợi ý liều dùng, tương tác thuốc và cảnh báo dị ứng.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tích hợp kết quả xét nghiệm, chẩn đoán hình ảnh ngay trong màn hình khám.</span>
</li>
</ul>
</div>

<div className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-amber-500/10 border border-amber-400/40 flex items-center justify-center">
<span className="i-lucide-building-2 w-4 h-4 text-amber-300"></span>
</div>
<div>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Lễ tân &amp; thu ngân</h3>
<p className="text-[0.7rem] text-slate-400 mt-0.5">Tiếp nhận nhanh – ít sai sót</p>
</div>
</div>
<span className="rounded-full bg-amber-500/10 border border-amber-500/40 text-[0.65rem] px-2 py-0.5 text-amber-100">
                  Quy trình chuẩn
                </span>
</div>
<ul className="space-y-1.5 text-sm text-slate-300">
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tự động gợi ý bệnh nhân cũ theo số điện thoại, CCCD, BHYT.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>In hóa đơn, phiếu thu, phiếu khám chỉ với một cú nhấp chuột.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Đối soát ca làm việc rõ ràng, hạn chế chênh lệch tiền mặt.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="bang-gia">
<div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-3">
<h2 className="text-slate-50 font-semibold tracking-tight text-2xl md:text-3xl">
                Bảng giá minh bạch, linh hoạt theo quy mô.
              </h2>
<p className="text-slate-300 text-base max-w-2xl">
                Chi trả theo số lượng phòng khám và điểm làm việc. Không phụ thu ẩn, đã bao gồm cập nhật tính năng và sao lưu dữ liệu.
              </p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<span className="i-lucide-badge-check w-4 h-4 text-emerald-300"></span>
<span>Miễn phí triển khai cho phòng khám dưới 10 phòng</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative flex flex-col border border-slate-800 rounded-2xl bg-slate-950/80 p-6">
<h3 className="text-sm font-medium tracking-tight text-slate-50">Starter</h3>
<p className="text-xs text-slate-400 mt-1 mb-4">Phòng khám nhỏ, 1 cơ sở</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-slate-50">1.200.000₫</span>
<span className="text-xs text-slate-400">/tháng</span>
</div>
<p className="text-xs text-slate-400 mt-2 mb-4">Tối đa 5 điểm làm việc đồng thời.</p>
<ul className="space-y-1.5 text-sm text-slate-300 mb-6">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Lịch hẹn, khám bệnh, thu ngân cơ bản.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>01 chi nhánh, 01 kho thuốc.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Hỗ trợ online trong giờ hành chính.</span>
</li>
</ul>
<button className="mt-auto inline-flex justify-center items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 text-sm text-slate-100 px-3 py-2 hover:bg-slate-800 hover:border-emerald-500/60 transition-colors">
                Chọn gói Starter
                <span className="i-lucide-arrow-right w-4 h-4"></span>
</button>
</div>

<div className="relative flex flex-col border border-emerald-500/60 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-lg shadow-emerald-500/30">
<div className="absolute -top-3 right-4 rounded-full bg-emerald-500 text-slate-950 text-[0.65rem] font-semibold px-2 py-0.5 uppercase tracking-wide">
                Phổ biến
              </div>
<h3 className="text-sm font-medium tracking-tight text-slate-50">Professional</h3>
<p className="text-xs text-slate-300 mt-1 mb-4">Phòng khám đa khoa, nhiều phòng khám</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-slate-50">2.800.000₫</span>
<span className="text-xs text-slate-400">/tháng</span>
</div>
<p className="text-xs text-slate-300 mt-2 mb-4">Tối đa 15 điểm làm việc, 3 chi nhánh.</p>
<ul className="space-y-1.5 text-sm text-slate-200 mb-6">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tất cả tính năng của Starter.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tích hợp lab, PACS, SMS, cổng thanh toán.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Báo cáo tài chính nâng cao, export sang Excel.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Đào tạo trực tiếp cho đội ngũ lên đến 20 người.</span>
</li>
</ul>
<button className="mt-auto inline-flex justify-center items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 text-sm font-medium px-3 py-2 hover:bg-emerald-400 transition-colors">
                Chọn gói Professional
                <span className="i-lucide-arrow-right w-4 h-4"></span>
</button>
</div>

<div className="relative flex flex-col border border-slate-800 rounded-2xl bg-slate-950/80 p-6">
<h3 className="text-sm font-medium tracking-tight text-slate-50">Enterprise</h3>
<p className="text-xs text-slate-400 mt-1 mb-4">Chuỗi phòng khám, bệnh viện tư</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold tracking-tight text-slate-50">Liên hệ</span>
</div>
<p className="text-xs text-slate-400 mt-2 mb-4">Tuỳ chỉnh sâu quy trình, tích hợp hệ thống sẵn có.</p>
<ul className="space-y-1.5 text-sm text-slate-300 mb-6">
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Không giới hạn điểm làm việc và chi nhánh.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Tư vấn kiến trúc hệ thống, HA, DR site.</span>
</li>
<li className="flex gap-2">
<span className="i-lucide-check w-4 h-4 text-emerald-300 mt-0.5"></span>
<span>Hợp đồng SLA riêng, hỗ trợ 24/7.</span>
</li>
</ul>
<button className="mt-auto inline-flex justify-center items-center gap-2 rounded-lg border border-emerald-500/60 bg-slate-900/80 text-sm text-emerald-200 px-3 py-2 hover:bg-slate-900 hover:text-emerald-100 transition-colors">
                Đặt lịch tư vấn
                <span className="i-lucide-calendar-range w-4 h-4"></span>
</button>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-slate-400">
<div className="flex items-center gap-2">
<span className="i-lucide-info w-3.5 h-3.5"></span>
<span>Giảm 15% khi thanh toán năm. Hỗ trợ xuất hóa đơn VAT đầy đủ.</span>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-1">
<span className="i-lucide-credit-card w-3.5 h-3.5"></span>
<span>Chuyển khoản, thẻ, ví điện tử</span>
</div>
<div className="flex items-center gap-1">
<span className="i-lucide-badge-dollar-sign w-3.5 h-3.5"></span>
<span>Dừng gia hạn bất cứ lúc nào</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="khach-hang">
<div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-3 max-w-2xl">
<h2 className="text-slate-50 font-semibold tracking-tight text-2xl md:text-3xl">
                Được tin tưởng bởi các phòng khám trên khắp Việt Nam.
              </h2>
<p className="text-slate-300 text-base">
                Cilinic đang vận hành hàng trăm phòng khám từ chuyên khoa nhỏ đến chuỗi đa cơ sở.
              </p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="i-lucide-sparkles w-4 h-4 text-amber-300"></span>
<span>Điểm hài lòng trung bình 4.8/5 từ chủ phòng khám</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/70 py-3">
              Phòng khám Ánh Dương
            </div>
<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/70 py-3">
              Nha khoa CentralSmile
            </div>
<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/70 py-3">
              Phòng khám Đa khoa Minh Tâm
            </div>
<div className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-950/70 py-3">
              Phòng khám Nhi HappyKid
            </div>
</div>

<div className="grid md:grid-cols-3 gap-6">
<article className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<img alt="Khách hàng" className="h-9 w-9 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">BS. Ngô Trọng Khoa</div>
<div className="text-[0.7rem] text-slate-400">Giám đốc Phòng khám Minh Tâm</div>
</div>
</div>
<p className="text-sm text-slate-300">
                “Trước đây chúng tôi dùng nhiều phần mềm rời rạc. Từ khi chuyển sang Cilinic, dữ liệu tập trung, báo cáo rõ ràng,
                giúp tôi kiểm soát tốt hơn mà không cần có mặt thường xuyên tại phòng khám.”
              </p>
</article>
<article className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<img alt="Khách hàng" className="h-9 w-9 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">BS. Trần Bích Hà</div>
<div className="text-[0.7rem] text-slate-400">Chủ Nha khoa CentralSmile</div>
</div>
</div>
<p className="text-sm text-slate-300">
                “Giao diện rất dễ dùng cho cả lễ tân lẫn bác sĩ. Việc theo dõi lịch hẹn và thanh toán diễn ra trơn tru,
                giảm đáng kể thời gian chờ của bệnh nhân.”
              </p>
</article>
<article className="border border-slate-800 rounded-2xl bg-slate-950/80 p-5 flex flex-col gap-4">
<div className="flex items-center gap-3">
<img alt="Khách hàng" className="h-9 w-9 rounded-full object-cover border border-slate-700" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="text-sm font-medium tracking-tight text-slate-50">BS. Lê Quốc Huy</div>
<div className="text-[0.7rem] text-slate-400">Giám đốc Chuỗi phòng khám H.</div>
</div>
</div>
<p className="text-sm text-slate-300">
                “Điểm tôi đánh giá cao là khả năng mở rộng và tuỳ biến quy trình. Đội ngũ Cilinic phản hồi rất nhanh
                khi chúng tôi cần thay đổi hoặc tích hợp thêm hệ thống.”
              </p>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-900 bg-slate-950" id="faq">
<div className="mx-auto max-w-6xl px-4 py-12 md:py-16 space-y-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="space-y-3 max-w-2xl">
<h2 className="text-slate-50 font-semibold tracking-tight text-2xl md:text-3xl">
                Câu hỏi thường gặp.
              </h2>
<p className="text-slate-300 text-base">
                Nếu bạn còn thắc mắc khác, hãy để lại thông tin, đội ngũ Cilinic sẽ liên hệ tư vấn chi tiết.
              </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-3">
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Cilinic triển khai trong bao lâu?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Với phòng khám quy mô nhỏ đến trung bình, thời gian triển khai thường từ 7–10 ngày bao gồm khảo sát quy trình,
                  cài đặt, chuyển dữ liệu cơ bản và đào tạo nhân viên. Với chuỗi nhiều cơ sở, thời gian có thể dài hơn tùy mức độ phức tạp.
                </p>
</details>
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Dữ liệu của phòng khám được bảo mật như thế nào?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Tất cả dữ liệu được mã hóa khi truyền và khi lưu trữ. Hệ thống phân quyền theo vai trò, ghi nhật ký truy cập,
                  sao lưu định kỳ nhiều lớp. Chúng tôi cũng ký thoả thuận bảo mật dữ liệu (NDA) khi hợp tác.
                </p>
</details>
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Phòng khám có thể xuất dữ liệu ra nếu ngừng dùng?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Có. Cilinic hỗ trợ xuất dữ liệu chuẩn định dạng CSV/Excel hoặc theo cấu trúc thỏa thuận trước,
                  giúp phòng khám chủ động lưu trữ và di chuyển dữ liệu khi cần.
                </p>
</details>
</div>
<div className="space-y-3">
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Cilinic có hỗ trợ làm việc từ xa không?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Hệ thống được xây dựng trên nền tảng web, có thể truy cập từ máy tính, tablet, điện thoại có Internet.
                  Quyền xem từ xa được cấu hình theo vai trò để đảm bảo an toàn dữ liệu.
                </p>
</details>
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Có thể tuỳ chỉnh quy trình theo phòng khám không?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Có. Chúng tôi hỗ trợ cấu hình nhiều bước trong quy trình: tiếp nhận, tuyến khám, loại hóa đơn,
                  mẫu in, mẫu đơn thuốc, quyền duyệt... Tùy mức độ tuỳ biến, chi phí triển khai sẽ khác nhau.
                </p>
</details>
<details className="group border border-slate-800 rounded-xl bg-slate-950/80 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-50">Chính sách hỗ trợ sau triển khai như thế nào?</span>
<span className="i-lucide-chevron-down w-4 h-4 text-slate-400 group-open:rotate-180 transition-transform"></span>
</summary>
<p className="text-sm text-slate-300 mt-3">
                  Đội ngũ Cilinic hỗ trợ qua hotline, Zalo, email trong giờ làm việc và hỗ trợ khẩn cấp 24/7
                  với các gói Professional và Enterprise. Mọi bản cập nhật tính năng đều miễn phí trong thời hạn sử dụng.
                </p>
</details>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-emerald-600 to-sky-600 text-slate-950">
<div className="mx-auto max-w-6xl px-4 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="space-y-3 max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Sẵn sàng nâng cấp cách vận hành phòng khám của bạn?
            </h2>
<p className="text-sm md:text-base text-emerald-50/80">
              Đặt lịch demo miễn phí 30 phút để xem Cilinic phù hợp với quy trình hiện tại của phòng khám đến đâu.
            </p>
<ul className="text-xs text-emerald-50/90 space-y-1">
<li className="flex items-center gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4"></span>
<span>Không ràng buộc hợp đồng sau buổi demo</span>
</li>
<li className="flex items-center gap-2">
<span className="i-lucide-check-circle-2 w-4 h-4"></span>
<span>Được tư vấn tối ưu quy trình hiện tại</span>
</li>
</ul>
</div>
<form className="w-full md:w-96 bg-slate-950/10 backdrop-blur rounded-2xl border border-emerald-200/40 p-5 space-y-3">
<div className="text-sm font-medium">Đăng ký nhận demo</div>
<div className="grid gap-3 text-xs">
<div>
<label className="block mb-1 text-slate-900">Họ và tên</label>
<input className="w-full rounded-lg border border-emerald-200/60 bg-white/80 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="VD: BS. Nguyễn Văn A" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block mb-1 text-slate-900">Số điện thoại</label>
<input className="w-full rounded-lg border border-emerald-200/60 bg-white/80 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="098..." type="tel"/>
</div>
<div>
<label className="block mb-1 text-slate-900">Email</label>
<input className="w-full rounded-lg border border-emerald-200/60 bg-white/80 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="you@clinic.vn" type="email"/>
</div>
</div>
<div>
<label className="block mb-1 text-slate-900">Tên phòng khám</label>
<input className="w-full rounded-lg border border-emerald-200/60 bg-white/80 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Phòng khám ..." type="text"/>
</div>
<div>
<label className="block mb-1 text-slate-900">Ghi chú thêm (tuỳ chọn)</label>
<textarea className="w-full rounded-lg border border-emerald-200/60 bg-white/80 px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" placeholder="Quy mô, chuyên khoa, yêu cầu tích hợp..." rows="3"></textarea>
</div>
</div>
<button className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 text-emerald-50 text-sm font-medium px-3 py-2.5 hover:bg-slate-900 transition-colors" type="submit">
              Gửi yêu cầu demo
              <span className="i-lucide-send w-4 h-4"></span>
</button>
<p className="text-[0.7rem] text-emerald-50/80 mt-1">
              Bằng việc gửi form, bạn đồng ý cho Cilinic liên hệ qua điện thoại/Zalo để tư vấn.
            </p>
</form>
</div>
</section>
</main>

<footer className="border-t border-slate-900 bg-slate-950">
<div className="mx-auto max-w-6xl px-4 py-8 space-y-6 text-xs text-slate-400">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="space-y-2 max-w-xs">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-400/30">
<span className="text-emerald-400 font-semibold tracking-tight">Ci</span>
</div>
<span className="font-semibold tracking-tight text-slate-50">Cilinic</span>
</div>
<p className="text-xs text-slate-400">
              Nền tảng workspace giúp phòng khám vận hành mượt mà, giảm tải giấy tờ, tăng trải nghiệm cho bệnh nhân.
            </p>
<div className="flex items-center gap-2 text-[0.7rem]">
<span className="i-lucide-shield-check w-3.5 h-3.5 text-emerald-400"></span>
<span>Cam kết bảo mật dữ liệu và tuân thủ quy định y tế hiện hành.</span>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
<div className="space-y-2">
<div className="text-[0.7rem] font-semibold tracking-wide text-slate-300 uppercase">Sản phẩm</div>
<ul className="space-y-1">
<li><a className="hover:text-slate-200" href="#tinh-nang">Tính năng</a></li>
<li><a className="hover:text-slate-200" href="#bang-gia">Bảng giá</a></li>
<li><a className="hover:text-slate-200" href="#khach-hang">Khách hàng</a></li>
</ul>
</div>
<div className="space-y-2">
<div className="text-[0.7rem] font-semibold tracking-wide text-slate-300 uppercase">Tài nguyên</div>
<ul className="space-y-1">
<li><a className="hover:text-slate-200" href="#faq">Câu hỏi thường gặp</a></li>
<li><a className="hover:text-slate-200" href="#">Tài liệu triển khai</a></li>
<li><a className="hover:text-slate-200" href="#">Hướng dẫn sử dụng</a></li>
</ul>
</div>
<div className="space-y-2">
<div className="text-[0.7rem] font-semibold tracking-wide text-slate-300 uppercase">Liên hệ</div>
<ul className="space-y-1">
<li className="flex items-center gap-2">
<span className="i-lucide-phone w-3.5 h-3.5"></span>
<span>096x xxx xxx</span>
</li>
<li className="flex items-center gap-2">
<span className="i-lucide-mail w-3.5 h-3.5"></span>
<span>hello@cilinic.vn</span>
</li>
<li className="flex items-center gap-2">
<span className="i-lucide-map-pin w-3.5 h-3.5"></span>
<span>TP. Hồ Chí Minh</span>
</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-900 pt-4">
<p className="text-[0.7rem]">
            © <span id="year-span"></span> Cilinic. Đã đăng ký bản quyền.
          </p>
<div className="flex flex-wrap items-center gap-3 text-[0.7rem]">
<a className="hover:text-slate-200" href="#">Điều khoản sử dụng</a>
<span className="h-3 w-px bg-slate-700"></span>
<a className="hover:text-slate-200" href="#">Chính sách bảo mật</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
