import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Init lucide icons
    if (window.lucide) {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    }

    // Set current year in footer (progressive enhancement)
    const yearSpan = document.getElementById('year-span');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full bg-gradient-to-r from-sky-50 via-white to-indigo-50 border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
<p className="text-xs sm:text-sm text-slate-600">
        Nền tảng phần mềm quản lý khu vui chơi toàn diện cho doanh nghiệp Việt.
      </p>
<div className="flex items-center gap-3 text-xs sm:text-sm">
<span className="inline-flex items-center gap-1 text-emerald-600">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Hỗ trợ 8:00 - 22:00
        </span>
<span className="hidden sm:inline text-slate-400">•</span>
<a className="text-sky-700 hover:text-sky-800 font-medium tracking-tight" href="tel:+849xxxxxxxx">
          Hotline: 09xx xxx xxx
        </a>
</div>
</div>
</div>

<header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-xl bg-sky-600 flex items-center justify-center shadow-sm">
<span className="text-white text-lg font-semibold tracking-tight">T</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-slate-900">Thinksoft</span>
<span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Playground Software</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#home">Trang chủ</a>
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#solutions">Giải pháp</a>
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#features">Tính năng</a>
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#customers">Khách hàng</a>
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#pricing">Báo giá</a>
<a className="text-slate-700 hover:text-sky-700 transition-colors" href="#resources">Tài liệu</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800 hover:bg-sky-50/80 transition-colors" href="https://docs.thinksoft.com.vn" target="_blank">
<span className="w-4 h-4" data-lucide="book-open"></span>
          Tài liệu
        </a>
<a className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-tight bg-sky-600 text-white shadow-sm hover:bg-sky-700 hover:shadow transition-all" href="#demo">
<span className="w-4 h-4" data-lucide="play-circle"></span>
          Đăng ký demo
        </a>
</div>
</div>
</header>
<main className="flex-1">

<section className="bg-gradient-to-b from-white via-sky-50/40 to-white" id="home">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-[11px] font-medium text-sky-700 tracking-[0.16em] uppercase">
<span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-white shadow-sm"></span>
            Giải pháp phần mềm cho khu vui chơi
          </span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Quản lý khu vui chơi <span className="text-sky-700">thông minh</span>, vận hành
            <span className="text-sky-700">trơn tru</span> trên một nền tảng.
          </h1>
<p className="text-sm sm:text-base text-slate-600 max-w-xl">
            Thinksoft cung cấp giải pháp phần mềm quản lý toàn diện cho khu vui chơi, trung tâm giải trí,
            FEC, trampoline, edutainment… giúp kiểm soát vé, thẻ, doanh thu và vận hành theo thời gian thực.
          </p>

<div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
<div className="flex items-start gap-2">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-emerald-600" data-lucide="check"></span>
</div>
<div>
<p className="font-medium text-slate-800">Kiosk &amp; POS nhanh</p>
<p className="text-slate-500 text-[11px] sm:text-xs">Bán vé, nạp thẻ, combo chỉ trong vài giây.</p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="mt-0.5 w-5 h-5 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-sky-600" data-lucide="scan-line"></span>
</div>
<div>
<p className="font-medium text-slate-800">Kiểm soát ra/vào</p>
<p className="text-slate-500 text-[11px] sm:text-xs">Tích hợp vòng tay RFID, mã QR, cổng từ.</p>
</div>
</div>
<div className="flex items-start gap-2">
<div className="mt-0.5 w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
<span className="w-3.5 h-3.5 text-indigo-600" data-lucide="bar-chart-3"></span>
</div>
<div>
<p className="font-medium text-slate-800">Báo cáo realtime</p>
<p className="text-slate-500 text-[11px] sm:text-xs">Theo dõi doanh thu trên web &amp; mobile.</p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
<a className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-sky-600 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-sky-700 hover:shadow-md transition-all" href="#demo">
<span className="w-4 h-4" data-lucide="calendar"></span>
              Đặt lịch demo miễn phí
            </a>
<a className="inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-700 hover:border-sky-300 hover:text-sky-800 hover:bg-sky-50/60 transition-all" href="https://thinksoft.com.vn" target="_blank">
<span className="w-4 h-4" data-lucide="globe-2"></span>
              Website chính thức
            </a>
</div>

<div className="pt-4 border-t border-slate-200 mt-4">
<p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-2">
              Được tin dùng bởi các khu vui chơi &amp; FEC
            </p>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100/70 border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span>Vận hành 24/7 tại nhiều tỉnh thành</span>
</div>
<div className="inline-flex items-center gap-1.5">
<span className="font-medium text-slate-800">10.000+</span>
<span>giao dịch/ngày</span>
</div>
<span className="hidden sm:inline text-slate-300">•</span>
<div className="inline-flex items-center gap-1.5">
<span className="w-4 h-4 text-amber-500" data-lucide="star"></span>
<span>Được khách hàng đánh giá cao về độ ổn định</span>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 w-32 h-32 bg-sky-100/60 rounded-full blur-3xl"></div>
<div className="absolute -bottom-8 -right-6 w-40 h-40 bg-indigo-100/60 rounded-full blur-3xl"></div>
<div className="relative rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
<div className="flex items-center gap-2">
<div className="flex -space-x-1">
<span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
<span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
</div>
<span className="text-xs font-medium text-slate-700">Dashboard khu vui chơi</span>
</div>
<span className="text-[11px] text-slate-500">Realtime • Cloud</span>
</div>
<div className="p-4 sm:p-5 space-y-4">

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-2.5">
<div className="flex items-center justify-between gap-2 mb-1">
<p className="text-[11px] text-slate-500">Doanh thu hôm nay</p>
<span className="w-3.5 h-3.5 text-emerald-500" data-lucide="trending-up"></span>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">42.500.000₫</p>
<p className="text-[11px] text-emerald-600">+18% so với hôm qua</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-2.5">
<div className="flex items-center justify-between gap-2 mb-1">
<p className="text-[11px] text-slate-500">Lượt khách</p>
<span className="w-3.5 h-3.5 text-sky-500" data-lucide="users"></span>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">1.248</p>
<p className="text-[11px] text-slate-500">Đang trong giờ cao điểm</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-2.5">
<div className="flex items-center justify-between gap-2 mb-1">
<p className="text-[11px] text-slate-500">Thẻ đang hoạt động</p>
<span className="w-3.5 h-3.5 text-indigo-500" data-lucide="contactless-payment"></span>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">3.542</p>
<p className="text-[11px] text-slate-500">RFID &amp; Mã QR</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50/50 p-2.5">
<div className="flex items-center justify-between gap-2 mb-1">
<p className="text-[11px] text-slate-500">Khu vực</p>
<span className="w-3.5 h-3.5 text-amber-500" data-lucide="map"></span>
</div>
<p className="text-sm font-semibold text-slate-900 tracking-tight">18</p>
<p className="text-[11px] text-emerald-600">16 hoạt động, 2 bảo trì</p>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
<div className="flex items-center justify-between mb-2">
<div>
<p className="text-xs font-medium text-slate-800">Tình trạng khu vực</p>
<p className="text-[11px] text-slate-500">Cập nhật mỗi 30 giây</p>
</div>
<button className="inline-flex items-center gap-1.5 text-[11px] px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-600 hover:border-sky-300 hover:text-sky-800">
<span className="w-3.5 h-3.5" data-lucide="clock-3"></span>
                    Thực tế
                  </button>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<div className="flex flex-col gap-1">
<div className="flex justify-between">
<span className="text-slate-600">Khu trò chơi</span>
<span className="font-medium text-slate-900">86%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
<div className="h-full w-5/6 bg-sky-500 rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between">
<span className="text-slate-600">Food court</span>
<span className="font-medium text-slate-900">62%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
<div className="h-full w-3/5 bg-emerald-500 rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between">
<span className="text-slate-600">Sự kiện</span>
<span className="font-medium text-slate-900">44%</span>
</div>
<div className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
<div className="h-full w-2/5 bg-amber-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-3 text-[11px]">
<div className="rounded-xl border border-slate-200 bg-white p-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-3.5 h-3.5 text-sky-500" data-lucide="monitor-smartphone"></span>
<p className="text-xs font-medium text-slate-800">Quầy POS</p>
</div>
<span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px]">
                      5/5 hoạt động
                    </span>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between">
<span className="text-slate-500">Vé lượt / giờ</span>
<span className="font-medium text-slate-900">320</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Thời gian trung bình</span>
<span className="font-medium text-slate-900">17s</span>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-2.5 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-3.5 h-3.5 text-emerald-500" data-lucide="shield-check"></span>
<p className="text-xs font-medium text-slate-800">Nhân sự &amp; phân quyền</p>
</div>
<span className="px-1.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-[10px]">
                      Đã đồng bộ
                    </span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Nhân viên online</span>
<span className="font-medium text-slate-900">27</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Ca trực hôm nay</span>
<span className="font-medium text-slate-900">3 ca</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-5 left-4 sm:left-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-slate-200">
<span className="w-4 h-4 text-sky-600" data-lucide="cloud"></span>
<p className="text-[11px] text-slate-700">
                Triển khai on-premise &amp; cloud • Tương thích kiosk, RFID, QR
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="solutions">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Giải pháp</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Nền tảng thống nhất cho toàn bộ khu vui chơi
            </h2>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Từ bán vé, kiểm soát ra/vào, nạp tiền vào thẻ, đến quản lý quầy game, F&amp;B, kho và báo cáo.
              Thinksoft được thiết kế tối ưu cho đặc thù vận hành khu vui chơi tại Việt Nam.
            </p>
</div>
<a className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-sky-700 hover:text-sky-900" href="#demo">
<span className="w-4 h-4" data-lucide="arrow-right-circle"></span>
            Xem demo luồng vận hành tổng thể
          </a>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="h-full rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-sky-200 transition-colors p-4 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-xl bg-sky-100 flex items-center justify-center">
<span className="w-5 h-5 text-sky-600" data-lucide="shopping-bag"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Bán vé &amp; thẻ chơi</p>
<p className="text-[11px] text-slate-500">POS • Kiosk • Online ticket</p>
</div>
</div>
<p className="text-xs text-slate-600 mb-3">
              Hỗ trợ đa dạng loại vé: vé lượt, vé combo, vé giờ, vé nhóm, gói thành viên… tích hợp thẻ RFID,
              mã QR, voucher và khuyến mãi linh hoạt.
            </p>
<ul className="space-y-1 text-xs text-slate-600 flex-1">
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Bán vé &amp; gán thẻ RFID/QR trong một bước.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Tự động tính thời gian chơi, phụ thu giờ cao điểm.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Kết nối máy in hóa đơn, mã vạch, đầu đọc thẻ.
              </li>
</ul>
<div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
<span className="text-slate-500">Tối ưu cho quầy đông khách</span>
<span className="text-emerald-600 font-medium">17s / giao dịch</span>
</div>
</div>

<div className="h-full rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-sky-200 transition-colors p-4 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center">
<span className="w-5 h-5 text-indigo-600" data-lucide="radar"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Kiểm soát khu vực &amp; trò chơi</p>
<p className="text-[11px] text-slate-500">Gate • RFID • Online credit</p>
</div>
</div>
<p className="text-xs text-slate-600 mb-3">
              Quản lý lượt chơi tại từng máy game, khu vực trampoline, khu mạo hiểm, khu phát triển kỹ năng…
              bằng thẻ hoặc vòng tay điện tử.
            </p>
<ul className="space-y-1 text-xs text-slate-600 flex-1">
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Tự động trừ tiền/lượt khi quẹt thẻ tại máy.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Giới hạn số lần chơi, thời gian chờ &amp; an toàn.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Báo cáo chi tiết doanh thu từng khu vực.
              </li>
</ul>
<div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
<span className="text-slate-500">Giảm thất thoát &amp; gian lận</span>
<span className="text-emerald-600 font-medium">-25% lỗi vận hành</span>
</div>
</div>

<div className="h-full rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-sky-200 transition-colors p-4 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center">
<span className="w-5 h-5 text-emerald-600" data-lucide="layers"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Quản trị &amp; báo cáo</p>
<p className="text-[11px] text-slate-500">Tài chính • Nhân sự • Loyalty</p>
</div>
</div>
<p className="text-xs text-slate-600 mb-3">
              Bộ báo cáo đa chiều về doanh thu, chi phí, tồn kho, hiệu quả từng khu vực, từng thiết bị và từng
              nhân viên, hỗ trợ ra quyết định nhanh chóng.
            </p>
<ul className="space-y-1 text-xs text-slate-600 flex-1">
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Dashboard theo thời gian thực trên web &amp; mobile.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Chi tiết theo ca, quầy, nhân viên, máy, khu vực.
              </li>
<li className="flex items-start gap-1.5">
<span className="mt-0.5 w-3.5 h-3.5 text-emerald-500" data-lucide="check"></span>
                Kết xuất Excel, PDF, tích hợp phần mềm kế toán.
              </li>
</ul>
<div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
<span className="text-slate-500">Dữ liệu tập trung</span>
<span className="text-emerald-600 font-medium">Quyết định nhanh hơn</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/60" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Tính năng nổi bật</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Thiết kế riêng cho mô hình khu vui chơi
            </h2>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Thinksoft không chỉ là phần mềm bán vé, mà là hệ thống quản trị toàn diện, đáp ứng nhiều mô hình:
              khu vui chơi trong TTTM, trung tâm giải trí gia đình (FEC), khu vui chơi liên hoàn, trampoline park,
              khu vận động, edu-play, và nhiều hơn nữa.
            </p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="space-y-4">
<div className="rounded-2xl bg-white border border-slate-200 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-4 text-sky-600" data-lucide="cpu"></span>
<p className="text-sm font-medium text-slate-900">Tối ưu cho thiết bị &amp; máy game</p>
</div>
<ul className="space-y-1.5 text-xs text-slate-600">
<li>• Quản lý từng máy game, reader, kiosk dưới dạng thiết bị chuẩn.</li>
<li>• Ghi nhận lượt chơi, lỗi, thời gian hoạt động của từng máy.</li>
<li>• Cảnh báo khi doanh thu máy bất thường so với trung bình.</li>
</ul>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-4 text-emerald-600" data-lucide="id-card"></span>
<p className="text-sm font-medium text-slate-900">Thẻ/ vòng tay thông minh</p>
</div>
<ul className="space-y-1.5 text-xs text-slate-600">
<li>• Hỗ trợ thẻ RFID, vòng tay, mã QR, thẻ giấy có barcode.</li>
<li>• Thẻ tiền/credit, ticket thưởng, điểm tích lũy, membership.</li>
<li>• Tự động áp dụng ưu đãi theo hạng thẻ khách hàng thân thiết.</li>
</ul>
</div>
</div>

<div className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col">
<div className="p-4 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
<span className="w-4 h-4 text-sky-600" data-lucide="activity"></span>
</div>
<div className="text-xs">
<p className="font-medium text-slate-900">Tổng quan vận hành</p>
<p className="text-[11px] text-slate-500">Xem trên laptop, tablet, mobile</p>
</div>
</div>
<span className="text-[11px] text-emerald-600 font-medium px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-100">
                Online 99.9%
              </span>
</div>
<div className="relative flex-1">
<img alt="Thinksoft playground dashboard" className="w-full h-60 sm:h-72 object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-x-3 bottom-3 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl px-3 py-2.5">
<div className="flex items-center justify-between gap-2 mb-1.5">
<p className="text-xs font-medium text-slate-900">Tương thích nhiều mô hình</p>
<span className="text-[11px] text-slate-500">Chuỗi &amp; đơn lẻ</span>
</div>
<div className="grid grid-cols-3 gap-2 text-[11px]">
<div className="rounded-xl bg-slate-50 border border-slate-200 px-2 py-1.5">
<p className="font-medium text-slate-800">01</p>
<p className="text-slate-500">Khu vui chơi trong TTTM</p>
</div>
<div className="rounded-xl bg-slate-50 border border-slate-200 px-2 py-1.5">
<p className="font-medium text-slate-800">02</p>
<p className="text-slate-500">Trung tâm giải trí gia đình (FEC)</p>
</div>
<div className="rounded-xl bg-slate-50 border border-slate-200 px-2 py-1.5">
<p className="font-medium text-slate-800">03</p>
<p className="text-slate-500">Khu vận động, trampoline &amp; edu-play</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="rounded-2xl bg-white border border-slate-200 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-4 text-amber-600" data-lucide="shield"></span>
<p className="text-sm font-medium text-slate-900">Phân quyền &amp; kiểm soát</p>
</div>
<ul className="space-y-1.5 text-xs text-slate-600">
<li>• Phân quyền chi tiết theo chức danh, quầy, ca, khu vực.</li>
<li>• Nhật ký thao tác nhân sự, truy vết khi có sai lệch tiền.</li>
<li>• Hạn chế thao tác nhạy cảm: hủy vé, giảm giá, đổi thẻ.</li>
</ul>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-4">
<div className="flex items-center gap-2 mb-2">
<span className="w-4 h-4 text-indigo-600" data-lucide="smartphone"></span>
<p className="text-sm font-medium text-slate-900">Giám sát từ xa</p>
</div>
<ul className="space-y-1.5 text-xs text-slate-600">
<li>• Xem doanh thu, lượt khách trên điện thoại theo thời gian thực.</li>
<li>• Cảnh báo qua email/Telegram khi doanh thu bất thường.</li>
<li>• Nhiều cấp độ truy cập: chủ đầu tư, quản lý khu, quản lý vùng.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="customers">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Khách hàng</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Đồng hành cùng các khu vui chơi trên khắp Việt Nam
            </h2>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Thinksoft được triển khai tại nhiều tỉnh thành với các mô hình từ nhỏ đến lớn, giúp chuẩn hóa quy
              trình và minh bạch số liệu tài chính cho chủ đầu tư.
            </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Quản lý trung tâm giải trí</p>
<p className="text-[11px] text-slate-500">Chuỗi FEC tại TP.HCM</p>
</div>
</div>
<p className="text-xs text-slate-600 flex-1">
              “Trước đây chúng tôi quản lý bằng Excel và các phần mềm rời rạc, rất khó kiểm soát doanh thu theo
              từng máy game. Từ khi dùng Thinksoft, số liệu tập trung hơn, việc đối soát với nhân sự ca trở nên
              minh bạch, tiết kiệm thời gian và giảm thất thoát đáng kể.”
            </p>
<div className="mt-3 pt-3 border-t border-slate-200 text-[11px] flex items-center justify-between">
<span className="text-slate-500">Thời gian triển khai</span>
<span className="font-medium text-emerald-600">≈ 3 tuần</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Chủ khu vui chơi trẻ em</p>
<p className="text-[11px] text-slate-500">Khu vui chơi trong TTTM</p>
</div>
</div>
<p className="text-xs text-slate-600 flex-1">
              “Điểm mình thích nhất là giao diện bán vé rất dễ dùng cho nhân viên mới, cộng thêm việc báo cáo
              doanh thu trong ngày, trong tuần có sẵn giúp mình nắm tình hình từ xa mà không cần gọi điện hỏi
              ca trưởng.”
            </p>
<div className="mt-3 pt-3 border-t border-slate-200 text-[11px] flex items-center justify-between">
<span className="text-slate-500">Tỷ lệ lỗi giao dịch</span>
<span className="font-medium text-emerald-600">Giảm ~30%</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 flex flex-col h-full">
<div className="flex items-center gap-3 mb-3">
<img alt="Customer" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=320&amp;q=80"/>
<div>
<p className="text-sm font-medium text-slate-900">Quản lý vận hành chuỗi</p>
<p className="text-[11px] text-slate-500">Hệ thống nhiều chi nhánh</p>
</div>
</div>
<p className="text-xs text-slate-600 flex-1">
              “Thinksoft hỗ trợ chúng tôi follow doanh thu theo từng chi nhánh, so sánh hiệu quả và có chiến
              lược điều chỉnh nhanh. Hệ thống phân quyền giúp bảo mật và giảm rủi ro can thiệp dữ liệu tại
              từng điểm.”
            </p>
<div className="mt-3 pt-3 border-t border-slate-200 text-[11px] flex items-center justify-between">
<span className="text-slate-500">Số chi nhánh</span>
<span className="font-medium text-emerald-600">&gt; 5 khu vui chơi</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/80" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Gói giải pháp</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Linh hoạt theo quy mô &amp; mô hình kinh doanh
            </h2>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Thinksoft tư vấn gói giải pháp và phương án triển khai phù hợp với đặc thù từng khu vui chơi,
              từ mô hình nhỏ đến chuỗi nhiều chi nhánh.
            </p>
</div>
<div className="inline-flex items-center gap-2 text-xs text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1.5">
<span className="w-4 h-4 text-emerald-600" data-lucide="check-circle-2"></span>
<span>Miễn phí tư vấn &amp; khảo sát mô hình ban đầu</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col">
<div className="flex items-start justify-between mb-3">
<div>
<p className="text-sm font-medium text-slate-900">Gói Cơ bản</p>
<p className="text-[11px] text-slate-500">Khu vui chơi đơn lẻ, diện tích nhỏ</p>
</div>
<span className="px-2 py-0.5 rounded-full text-[10px] bg-sky-50 text-sky-700 border border-sky-100">
                Phổ biến
              </span>
</div>
<p className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Liên hệ báo giá</p>
<p className="text-[11px] text-slate-500 mb-3">Theo số lượng quầy POS &amp; thiết bị.</p>
<ul className="space-y-1.5 text-xs text-slate-600 flex-1">
<li>• 1–2 quầy bán vé &amp; nạp thẻ.</li>
<li>• Quản lý thẻ, vé, khuyến mãi cơ bản.</li>
<li>• Báo cáo doanh thu theo ca, ngày, nhân viên.</li>
</ul>
<a className="mt-4 inline-flex justify-center items-center gap-1.5 px-3 py-1.5 rounded-full border border-sky-200 text-xs font-medium text-sky-700 hover:bg-sky-50 hover:border-sky-300" href="#demo">
              Nhận tư vấn cho mô hình nhỏ
              <span className="w-3.5 h-3.5" data-lucide="arrow-right"></span>
</a>
</div>

<div className="rounded-2xl border-2 border-sky-400 bg-white shadow-sm p-4 relative flex flex-col">
<div className="absolute -top-3 right-4 px-2 py-0.5 rounded-full bg-sky-600 text-white text-[10px] tracking-[0.16em] uppercase">
              Recommended
            </div>
<div className="flex items-start justify-between mb-3">
<div>
<p className="text-sm font-medium text-slate-900">Gói Tiêu chuẩn</p>
<p className="text-[11px] text-slate-500">Khu vui chơi trung bình/ lớn, FEC</p>
</div>
</div>
<p className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Liên hệ báo giá</p>
<p className="text-[11px] text-slate-500 mb-3">Tùy số lượng chi nhánh &amp; thiết bị.</p>
<ul className="space-y-1.5 text-xs text-slate-600 flex-1">
<li>• 3–8 quầy POS, nhiều khu vực trò chơi.</li>
<li>• Quản lý máy game, gate, khu vực, membership.</li>
<li>• Báo cáo đa chiều, giám sát từ xa, phân quyền chi tiết.</li>
<li>• Hỗ trợ tích hợp phần mềm kế toán, hệ thống bán vé online.</li>
</ul>
<a className="mt-4 inline-flex justify-center items-center gap-1.5 px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-medium tracking-tight hover:bg-sky-700 shadow-sm hover:shadow" href="#demo">
              Đặt lịch demo &amp; nhận proposal
              <span className="w-3.5 h-3.5" data-lucide="arrow-right"></span>
</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4 flex flex-col">
<div className="flex items-start justify-between mb-3">
<div>
<p className="text-sm font-medium text-slate-900">Gói Chuỗi &amp; Tùy chỉnh</p>
<p className="text-[11px] text-slate-500">Chuỗi FEC, nhiều chi nhánh</p>
</div>
</div>
<p className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Theo dự án</p>
<p className="text-[11px] text-slate-500 mb-3">Tư vấn, thiết kế &amp; triển khai riêng.</p>
<ul className="space-y-1.5 text-xs text-slate-600 flex-1">
<li>• Quản lý tập trung nhiều chi nhánh, phân cấp quản lý.</li>
<li>• Tùy chỉnh báo cáo, quy trình theo mô hình riêng.</li>
<li>• Hỗ trợ tích hợp hệ thống hiện có (CRM, ERP, loyalty…).</li>
<li>• Hỗ trợ triển khai, training &amp; chuyển giao chi tiết.</li>
</ul>
<a className="mt-4 inline-flex justify-center items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 text-xs font-medium text-slate-700 hover:border-sky-300 hover:text-sky-800 hover:bg-sky-50" href="#demo">
              Trao đổi nhu cầu &amp; lộ trình triển khai
              <span className="w-3.5 h-3.5" data-lucide="arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="resources">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Tài liệu &amp; hỗ trợ</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Trung tâm tài liệu cho đội vận hành
            </h2>
<p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Thinksoft xây dựng hệ thống tài liệu trực tuyến bằng tiếng Việt, hướng dẫn chi tiết từ thao tác
              bán vé đến cấu hình hệ thống, giúp đào tạo nhân sự nhanh chóng.
            </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="w-5 h-5 text-indigo-600" data-lucide="book-open-text"></span>
<p className="text-sm font-medium text-slate-900">Tài liệu trực tuyến</p>
</div>
<p className="text-xs text-slate-600 mb-3">
              Truy cập ngay tại <span className="font-medium text-slate-800">docs.thinksoft.com.vn</span> với nhiều
              mục như: Hướng dẫn POS, Setup khu vực, Quản lý máy, Báo cáo, v.v.
            </p>
<ul className="space-y-1.5 text-xs text-slate-600 flex-1">
<li>• Nội dung cập nhật liên tục theo phiên bản mới.</li>
<li>• Có hình minh họa chi tiết cho từng bước thao tác.</li>
<li>• Dễ dàng chia sẻ cho nhân viên mới tự học &amp; thực hành.</li>
</ul>
<a className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700" href="https://docs.thinksoft.com.vn" target="_blank">
              Mở trang tài liệu
              <span className="w-3.5 h-3.5" data-lucide="external-link"></span>
</a>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="w-5 h-5 text-emerald-600" data-lucide="headset"></span>
<p className="text-sm font-medium text-slate-900">Đồng hành triển khai</p>
</div>
<p className="text-xs text-slate-600 mb-3">
              Đội ngũ Thinksoft hỗ trợ từ giai đoạn khảo sát, tư vấn mô hình, lên phương án thiết bị, thiết kế
              quy trình cho đến triển khai vận hành thử và chuyển giao.
            </p>
<ul className="space-y-1.5 text-xs text-slate-600 flex-1">
<li>• Hỗ trợ onsite &amp; online tùy giai đoạn.</li>
<li>• Training chi tiết cho quản lý và nhân viên từng bộ phận.</li>
<li>• Bảo hành &amp; bảo trì phần mềm lâu dài.</li>
</ul>
<div className="mt-4 flex flex-wrap gap-2 text-[11px]">
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
<span className="w-3.5 h-3.5" data-lucide="phone"></span>
                Hotline hỗ trợ kỹ thuật
              </div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
<span className="w-3.5 h-3.5" data-lucide="message-circle"></span>
                Nhóm chat hỗ trợ vận hành
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-sky-50/70" id="demo">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">Liên hệ</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Đặt lịch demo &amp; tư vấn miễn phí
            </h2>
<p className="text-sm text-slate-600 mt-2 mb-4">
              Hãy chia sẻ mô hình khu vui chơi của bạn (diện tích, số quầy, loại hình trò chơi…) để Thinksoft
              tư vấn giải pháp phù hợp và demo vận hành thực tế.
            </p>
<div className="space-y-2 text-sm text-slate-700">
<div className="flex items-center gap-2">
<span className="w-4 h-4 text-sky-600" data-lucide="mail"></span>
<span>Email: <span className="font-medium">info@thinksoft.com.vn</span></span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-4 text-sky-600" data-lucide="phone-call"></span>
<span>Hotline: <span className="font-medium">09xx xxx xxx</span></span>
</div>
<div className="flex items-center gap-2">
<span className="w-4 h-4 text-sky-600" data-lucide="globe"></span>
<a className="font-medium text-sky-700 hover:text-sky-900" href="https://thinksoft.com.vn" target="_blank">
                  thinksoft.com.vn
                </a>
</div>
</div>
</div>

<div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-4 sm:p-5">
<form className="space-y-4 text-sm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Họ và tên</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="Nguyễn Văn A" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Chức vụ</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="Chủ đầu tư / Quản lý..." type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Số điện thoại</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="09xx xxx xxx" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="you@company.vn" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Tên khu vui chơi / Doanh nghiệp</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="Tên khu vui chơi..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Mô tả mô hình &amp; nhu cầu</label>
<textarea className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-400 placeholder:text-slate-400" placeholder="Ví dụ: Diện tích 800m2, 4 quầy bán vé, ~40 máy game, cần quản lý vé giờ, thẻ RFID, báo cáo doanh thu theo khu vực..." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<p className="text-[11px] text-slate-500">
                  Chúng tôi sẽ liên hệ lại trong vòng <span className="font-medium text-slate-700">24 giờ làm việc</span>.
                </p>
<button className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-sky-600 text-white text-xs font-medium tracking-tight hover:bg-sky-700 shadow-sm hover:shadow" type="submit">
<span className="w-4 h-4" data-lucide="send"></span>
                  Gửi yêu cầu tư vấn
                </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
<div className="flex items-center gap-2">
<span className="text-slate-900 font-semibold tracking-tight text-sm">Thinksoft</span>
<span className="text-slate-300">•</span>
<span>Giải pháp phần mềm quản lý khu vui chơi</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-slate-800" href="https://thinksoft.com.vn" target="_blank">
          Website
        </a>
<a className="hover:text-slate-800" href="https://docs.thinksoft.com.vn" target="_blank">
          Tài liệu
        </a>
<span className="text-slate-300 hidden sm:inline">•</span>
<span>© <span id="year-span">2024</span> Thinksoft. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
