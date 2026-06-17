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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 border-b border-white/5 bg-[#050816]/80 backdrop-blur-xl" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-green-500/20 border border-green-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-xs font-semibold tracking-tight text-green-200" style={{transition: 'outline 0.1s ease-in-out'}}>TS</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>Thinksoft</span>
<span className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Playground Management Suite</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="hover:text-green-300 transition-colors" href="#about" style={{transition: 'outline 0.1s ease-in-out'}}>Giới thiệu</a>
<a className="hover:text-green-300 transition-colors" href="#features" style={{transition: 'outline 0.1s ease-in-out'}}>Tính năng</a>
<a className="hover:text-green-300 transition-colors" href="#solutions" style={{transition: 'outline 0.1s ease-in-out'}}>Giải pháp</a>
<a className="hover:text-green-300 transition-colors" href="#clients" style={{transition: 'outline 0.1s ease-in-out'}}>Khách hàng</a>
<a className="hover:text-green-300 transition-colors" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Liên hệ</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-blue-600/70 bg-blue-900/60 px-3 py-1.5 text-[11px] font-medium text-blue-200 hover:bg-blue-900 hover:border-blue-500/80 hover:text-white transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-play-circle h-3.5 w-3.5"></i>
            Xem demo
          </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-3 sm:px-4 py-1.5 text-[11px] font-semibold text-blue-50 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60 transition-all" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-mail h-3.5 w-3.5"></i>
            Đăng ký tư vấn
          </button>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-b border-white/5 bg-gradient-to-b from-[#050816] via-[#050816] to-[#02010b]" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24 grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 lg:gap-14 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-blue-300 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span>Tối ưu quản lý khu vui chơi từ quầy vé đến vận hành thực địa</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-blue-50 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
              Phần mềm quản lý khu vui chơi<br className="hidden sm:block"/>
<span className="text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}>Thinksoft Playground</span>
</h1>
<p className="text-sm sm:text-[15px] text-blue-300 leading-relaxed mb-6 max-w-xl" style={{transition: 'outline 0.1s ease-in-out'}}>
              Thinksoft giúp chủ đầu tư khu vui chơi, trung tâm giải trí, trampoline park, FEC, khu trò chơi trẻ em…
              quản lý đồng bộ <span className="text-blue-100" style={{transition: 'outline 0.1s ease-in-out'}}>vé vào cổng, trò chơi, thẻ nạp, kiosk tự phục vụ, ca làm việc</span> 
              và báo cáo doanh thu theo thời gian thực – trên một nền tảng duy nhất.
            </p>
<div className="flex flex-wrap items-center gap-3 mb-8">
<button className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-[12px] font-semibold text-blue-50 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60 transition-all" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-rocket h-4 w-4"></i>
                Đặt lịch demo miễn phí
              </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-blue-600/80 bg-blue-900/60 px-3 py-2 text-[12px] font-medium text-blue-200 hover:border-blue-500 hover:bg-blue-900 hover:text-white transition-all" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-file-text h-4 w-4"></i>
                Nhận báo giá
              </button>
</div>
<div className="grid grid-cols-3 gap-4 max-w-sm text-[11px] text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="border border-white/5 rounded-xl bg-blue-900/40 px-3 py-2.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-sm font-semibold text-blue-50 tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>120+</div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>điểm triển khai trên toàn quốc</div>
</div>
<div className="border border-white/5 rounded-xl bg-blue-900/40 px-3 py-2.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-sm font-semibold text-blue-50 tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>30%</div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                  tăng doanh thu trung bình sau 6 tháng
                </div>
</div>
<div className="border border-white/5 rounded-xl bg-blue-900/40 px-3 py-2.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-sm font-semibold text-blue-50 tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                  hỗ trợ vận hành &amp; xử lý sự cố từ xa
                </div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-8 -right-6 h-40 w-40 rounded-full bg-green-500/10 blur-3xl" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="absolute -bottom-4 -left-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="relative border border-white/10 bg-gradient-to-b from-blue-900/80 to-blue-950/90 rounded-2xl p-4 sm:p-5 shadow-[0_0_40px_rgba(15,23,42,0.8)]" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-cyan-400" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span className="text-[11px] font-medium text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Dashboard doanh thu theo thời gian thực
                  </span>
</div>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Live
                </span>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Hôm nay</span>
<span>So với tuần trước</span>
</div>
<div className="grid grid-cols-[1.4fr,1fr] gap-4 items-end">

<div className="flex items-end gap-1.5 h-32 rounded-xl bg-blue-900/70 px-3 py-3 border border-white/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex-1 rounded-full bg-blue-800/80 h-10" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="flex-1 rounded-full bg-blue-800/80 h-16" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="flex-1 rounded-full bg-green-500/90 h-24 shadow-[0_0_18px_rgba(129,140,248,0.55)]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="flex-1 rounded-full bg-blue-800/80 h-14" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="flex-1 rounded-full bg-blue-800/80 h-20" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<div className="space-y-2">
<div className="rounded-lg border border-white/5 bg-blue-900/70 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between text-[11px] text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Doanh thu vé vào cổng</span>
<span className="text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>+18%</span>
</div>
<div className="mt-1 text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                        48.2 triệu
                      </div>
</div>
<div className="rounded-lg border border-white/5 bg-blue-900/70 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between text-[11px] text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Doanh thu trò chơi</span>
<span className="text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>+12%</span>
</div>
<div className="mt-1 text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                        35.7 triệu
                      </div>
</div>
</div>
</div>

<div className="mt-3 grid grid-cols-3 gap-3 text-[11px]">
<div className="rounded-lg border border-white/5 bg-blue-900/70 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Lượt khách</div>
<div className="mt-0.5 text-sm font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                      1.248
                    </div>
</div>
<div className="rounded-lg border border-white/5 bg-blue-900/70 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Check-in online</div>
<div className="mt-0.5 text-sm font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                      64%
                    </div>
</div>
<div className="rounded-lg border border-white/5 bg-blue-900/70 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Tỷ lệ trùng vé</div>
<div className="mt-0.5 text-sm font-semibold text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>
                      0.02%
                    </div>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2 text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-shield-check h-3.5 w-3.5 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span className="">Mã hóa dữ liệu &amp; phân quyền chi tiết</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-blue-900/80 px-2.5 py-1 text-[10px] font-medium text-blue-200 hover:bg-blue-800 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Xem chi tiết
                  <i className="lucide lucide-arrow-right h-3 w-3"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050816]" id="about" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="sm:px-6 lg:px-8 lg:py-16 grid lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-16 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 gap-x-10 gap-y-10 items-center">
<div className="">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-50 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
              Được thiết kế riêng cho mô hình khu vui chơi hiện đại
            </h2>
<p className="text-sm sm:text-[15px] text-blue-300 leading-relaxed mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
              Thinksoft Playground không phải là phần mềm bán vé thông thường. Hệ thống được xây dựng dựa trên
              kinh nghiệm triển khai cho nhiều mô hình: <span className="text-blue-100" style={{transition: 'outline 0.1s ease-in-out'}}>trung tâm giải trí trong TTTM, khu
              vui chơi trẻ em, khu liên hợp thể thao, trampoline park, snow park, VR/AR zone</span>…
            </p>
<p className="text-sm sm:text-[15px] text-blue-300 leading-relaxed mb-5" style={{transition: 'outline 0.1s ease-in-out'}}>
              Chúng tôi tập trung vào <span className="text-blue-100" style={{transition: 'outline 0.1s ease-in-out'}}>tốc độ vận hành tại quầy vé, tính ổn định, phân quyền chặt chẽ</span> 
              và hệ thống báo cáo chi tiết, giúp bạn kiểm soát doanh thu, chi, khuyến mãi và hiệu suất trò chơi
              theo từng khung giờ.
            </p>
<div className="grid sm:grid-cols-2 gap-4 text-sm">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-green-500/15 border border-green-400/30 p-1.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-badge-check h-4 w-4 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</div>
<div>
<h3 className="text-[13px] font-semibold text-blue-50 mb-0.5" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Quy trình vận hành chuẩn hóa
                  </h3>
<p className="text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Từ đặt chỗ, bán vé, nạp thẻ, kiểm soát vào cổng, đến báo cáo ca làm việc.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 p-1.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-users h-4 w-4 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</div>
<div>
<h3 className="text-[13px] font-semibold text-blue-50 mb-0.5" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Phù hợp nhiều mô hình kinh doanh
                  </h3>
<p className="text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Bán vé theo giờ, theo gói, combo trò chơi, hoặc tích hợp F&amp;B đều được hỗ trợ.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-cyan-500/15 border border-cyan-400/30 p-1.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-cloud h-4 w-4 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</div>
<div>
<h3 className="text-[13px] font-semibold text-blue-50 mb-0.5" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Triển khai linh hoạt Cloud / On-premise
                  </h3>
<p className="text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Lựa chọn mô hình triển khai phù hợp với hạ tầng và ngân sách của doanh nghiệp.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-yellow-500/15 border border-yellow-400/30 p-1.5" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-lock h-4 w-4 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</div>
<div className="">
<h3 className="text-[13px] font-semibold text-blue-50 mb-0.5" style={{transition: 'outline 0.1s ease-in-out'}}>
                    An toàn dữ liệu &amp; phân quyền chi tiết
                  </h3>
<p className="text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Quản lý theo ca, nhật ký thao tác, phân quyền đến từng chức năng cho từng nhóm nhân sự.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-8 h-32 w-32 rounded-full bg-green-500/20 blur-3xl" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/80 via-blue-950/90 to-blue-900/80 p-4 sm:p-5" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="text-[11px] uppercase tracking-[0.12em] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Trung tâm điều hành
                </div>
<span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium text-cyan-200" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Manager View
                </span>
</div>
<div className="space-y-3 text-[12px]">
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-blue-900/80 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-ticket h-3.5 w-3.5 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<div className="">
<div className="text-[12px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Quầy vé - Khu A
                      </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Đang mở ca • 3 nhân viên • 82 khách trong khu
                      </div>
</div>
</div>
<div className="text-right text-[11px]">
<div className="font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>21.4 triệu</div>
<div className="text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>+9% so với hôm qua</div>
</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/5 bg-blue-900/80 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-cyan-500/15 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-gamepad-2 h-3.5 w-3.5 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<div>
<div className="text-[12px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Khu trò chơi điện tử
                      </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                        32 máy hoạt động • 4 máy cần kiểm tra
                      </div>
</div>
</div>
<div className="text-right text-[11px]">
<div className="font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>12.8 triệu</div>
<div className="text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}>Đang tải báo cáo...</div>
</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-dashed border-blue-600/60 bg-blue-950/80 px-3 py-2" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2">
<span className="h-6 w-6 rounded-full bg-blue-700/60 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-plus h-3.5 w-3.5 text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<div>
<div className="text-[12px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Thêm khu trò chơi mới
                      </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Cấu hình giá vé, khung giờ &amp; quy tắc tính giờ trong 5 phút
                      </div>
</div>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-blue-600/70 px-2 py-0.5 text-[10px] font-medium text-blue-200 hover:bg-blue-800/80 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Bắt đầu
                    <i className="lucide lucide-arrow-right h-3 w-3"></i>
</button>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span>Đồng bộ dữ liệu tức thì về server trung tâm</span>
</div>
<span>Tần suất: 5 giây/lần</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#050816] via-[#02010b] to-[#050816] border-white/5 border-b" id="features" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-50 mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>
                Tính năng nổi bật cho khu vui chơi nhiều điểm chạm
              </h2>
<p className="text-sm sm:text-[15px] text-blue-300 max-w-2xl" style={{transition: 'outline 0.1s ease-in-out'}}>
                Thinksoft được thiết kế theo từng khu vực vận hành: quầy vé, khu trò chơi, kho quà tặng, kiosk tự phục vụ,
                bộ phận chăm sóc khách hàng và phòng kế toán.
              </p>
</div>
<div className="flex gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full border border-green-500/50 bg-green-500/10 px-2 py-1 text-green-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-sparkles h-3 w-3"></i>
                Tối ưu cho FEC &amp; trung tâm giải trí
              </span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-[13px]">

<article className="group relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-green-500/15 border border-green-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-ticket-percent h-4 w-4 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Bán vé linh hoạt &amp; nhanh chóng
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Front-desk
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Hỗ trợ nhiều loại vé: vé theo giờ, vé trọn gói, combo gia đình, vé sự kiện; in hóa đơn, vòng tay, 
                QR code chỉ với vài thao tác.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Bán vé theo khung giờ, tự động nhắc hết giờ chơi.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Tích hợp nhiều phương thức thanh toán: tiền mặt, thẻ, ví điện tử, mã giảm giá.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Quét mã vạch / QR từ vé online hoặc ứng dụng khách hàng.</span>
</li>
</ul>
</article>
<article className="group relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-credit-card h-4 w-4 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Hệ thống thẻ từ / vòng tay nạp tiền
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  RFID / QR
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Tự động trừ tiền theo lượt / theo phút khi khách quét thẻ tại cổng trò chơi. Giảm thất thoát, hạn chế
                dùng tiền mặt trong khu vực.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Hỗ trợ tích điểm đổi quà, tặng giờ chơi, khuyến mãi sinh nhật.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Theo dõi lịch sử giao dịch của từng thẻ / gia đình.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Khóa thẻ ngay khi phát hiện mất, đổi thẻ nhanh cho khách.</span>
</li>
</ul>
</article>
<article className="group relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-yellow-500/15 border border-yellow-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-monitor-play h-4 w-4 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Kiosk tự phục vụ &amp; đặt vé online
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Self-service
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Giảm tải cho quầy vé, tăng trải nghiệm khách hàng với kiosk mua vé, nạp thẻ, ký miễn trừ trách nhiệm
                ngay tại điểm chơi.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Tích hợp chữ ký điện tử, gửi email/SMS xác nhận ngay lập tức.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Đặt trước suất chơi, thanh toán online, check-in bằng QR.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Cá nhân hóa giao diện kiosk theo thương hiệu của bạn.</span>
</li>
</ul>
</article>
<article className="group relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-rose-500/15 border border-rose-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-pie-chart h-4 w-4 text-rose-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Báo cáo tài chính &amp; kế toán
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Reporting
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Tự động tổng hợp doanh thu theo ca, quầy, khu vực, loại vé, đối tác; xuất dữ liệu cho phòng kế toán chỉ
                với vài thao tác.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Đối soát chi tiết từng ca với biên bản rõ ràng.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Giao diện web xem báo cáo mọi lúc mọi nơi.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Xuất Excel/PDF, kết nối với phần mềm kế toán.</span>
</li>
</ul>
</article>
<article className="group relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-users-2 h-4 w-4 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Quản lý hội viên &amp; khách hàng trung thành
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  CRM
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Xây dựng tệp khách hàng thân thiết, theo dõi lịch sử ghé chơi, số trẻ, sở thích trò chơi để triển khai
                chiến dịch marketing hiệu quả.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Tự động nhắc sinh nhật, gửi voucher ưu đãi.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Phân nhóm khách hàng theo tần suất, giá trị sử dụng.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Gửi email/SMS hàng loạt theo chiến dịch.</span>
</li>
</ul>
</article>
<article className="group relative rounded-2xl border border-dashed border-blue-600/70 bg-blue-950/60 p-4 hover:border-green-400/60 hover:bg-blue-900/80 transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="h-8 w-8 rounded-xl bg-blue-800/80 border border-blue-500/70 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-plug-2 h-4 w-4 text-blue-200" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Tích hợp thiết bị &amp; mở rộng theo nhu cầu
                  </h3>
</div>
<span className="text-[10px] rounded-full bg-blue-900/80 px-2 py-0.5 text-blue-400 border border-blue-600/60" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Extensible
                </span>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Sẵn sàng kết nối với cổng kiểm soát, camera, barrier, cổng xoay, máy in hóa đơn, hệ thống chấm công,
                hoặc phần mềm thứ ba qua API.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>API mở để tích hợp website đặt vé, mobile app.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span className="">Tùy chỉnh báo cáo, workflow theo từng dự án.</span>
</li>
<li className="flex items-start gap-1.5">
<i className="lucide lucide-check h-3.5 w-3.5 mt-[3px] text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Đội ngũ phát triển nội bộ, hỗ trợ chỉnh sửa nhanh.</span>
</li>
</ul>
</article>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#050816]" id="solutions" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-50 mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>
                Giải pháp cho từng loại hình khu vui chơi
              </h2>
<p className="text-sm sm:text-[15px] text-blue-300 max-w-2xl" style={{transition: 'outline 0.1s ease-in-out'}}>
                Dù bạn vận hành một khu vui chơi trẻ em nhỏ trong TTTM hay một tổ hợp giải trí quy mô lớn,
                Thinksoft đều có cấu hình phù hợp.
              </p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 text-[13px]">

<article className="relative rounded-2xl border border-white/5 bg-gradient-to from-blue-950/90 to-blue-900/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2 mb-2">
<span className="h-8 w-8 rounded-xl bg-green-500/20 border border-green-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-building-2 h-4 w-4 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Khu vui chơi trẻ em trong TTTM
                </h3>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Tối ưu tốc độ bán vé giờ chơi, quản lý phụ huynh / trẻ, cảnh báo khi quá giờ, đối soát với chủ TTTM.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>In thẻ/phù hiệu cho trẻ, quản lý thông tin phụ huynh, số điện thoại.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Nhắc hết giờ qua màn hình, tin nhắn hoặc loa nội bộ.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-green-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Báo cáo chia sẻ doanh thu với TTTM theo kỳ.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-white/5 text-[11px] flex items-center justify-between" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Thời gian triển khai dự kiến: 10–15 ngày</span>
<button className="inline-flex items-center gap-1 rounded-full bg-green-500/80 px-2.5 py-1 text-[10px] font-medium text-blue-50 hover:bg-green-400 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Xem demo
                  <i className="lucide lucide-arrow-right h-3 w-3"></i>
</button>
</div>
</article>

<article className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-blue-950/90 to-blue-900/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2 mb-2">
<span className="h-8 w-8 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-sparkle h-4 w-4 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Trampoline park / khu vận động
                </h3>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Tập trung vào an toàn, quản lý cam kết miễn trừ trách nhiệm, đặt suất chơi theo khung giờ và giám sát
                số lượng khách trong khu.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Ký miễn trừ trách nhiệm điện tử trên kiosk hoặc mobile.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Giới hạn số người cho từng suất, cảnh báo khi quá tải.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Tích hợp camera &amp; cảm biến để giám sát khu vực.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-white/5 text-[11px] flex items-center justify-between" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Thời gian triển khai dự kiến: 20–30 ngày</span>
<button className="inline-flex items-center gap-1 rounded-full bg-cyan-500/80 px-2.5 py-1 text-[10px] font-medium text-blue-50 hover:bg-cyan-400 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Nhận tư vấn
                  <i className="lucide lucide-arrow-right h-3 w-3"></i>
</button>
</div>
</article>

<article className="relative rounded-2xl border border-white/5 bg-gradient-to-b from-blue-950/90 to-blue-900/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2 mb-2">
<span className="h-8 w-8 rounded-xl bg-yellow-500/20 border border-yellow-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-circuit-board h-4 w-4 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<h3 className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Trung tâm trò chơi điện tử &amp; VR/AR
                </h3>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                Theo dõi doanh thu từng máy, doanh thu theo nội dung trò chơi, cảnh báo máy lỗi, thống kê giờ hoạt động
                để bảo trì định kỳ.
              </p>
<ul className="space-y-1.5 text-[12px] text-blue-400 mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Đọc dữ liệu từ máy thông qua thiết bị trung gian / API.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>So sánh doanh thu theo trò chơi, thời gian, khu vực.</span>
</li>
<li className="flex gap-1.5">
<i className="lucide lucide-dot h-3 w-3 mt-1 text-yellow-300" style={{transition: 'outline 0.1s ease-in-out'}}></i>
<span>Lập kế hoạch bảo trì dựa trên số giờ hoạt động.</span>
</li>
</ul>
<div className="mt-auto pt-3 border-t border-white/5 text-[11px] flex items-center justify-between" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Thời gian triển khai dự kiến: 25–35 ngày</span>
<button className="inline-flex items-center gap-1 rounded-full bg-yellow-500/90 px-2.5 py-1 text-[10px] font-medium text-blue-50 hover:bg-yellow-400 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Trao đổi chi tiết
                  <i className="lucide lucide-arrow-right h-3 w-3"></i>
</button>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-gradient-to-b from-[#02010b] via-[#050816] to-[#050816]" id="clients" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-50 mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>
                Được tin dùng bởi nhiều khu vui chơi trên toàn quốc
              </h2>
<p className="text-sm sm:text-[15px] text-blue-300 max-w-2xl" style={{transition: 'outline 0.1s ease-in-out'}}>
                Từ những mô hình nhỏ đến tổ hợp giải trí nhiều tầng, Thinksoft đã đồng hành cùng khách hàng trong quá
                trình chuẩn hóa vận hành, tăng doanh thu và kiểm soát thất thoát.
              </p>
</div>
<div className="flex gap-2 text-[11px]">
<span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/60 bg-cyan-500/10 px-2 py-1 text-cyan-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-shield-check h-3 w-3"></i>
                Hơn 5 năm kinh nghiệm triển khai thực tế
              </span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-10 text-[11px]">
<div className="rounded-xl border border-white/5 bg-blue-950/70 px-3 py-3 flex flex-col items-start justify-between hover:border-green-400/60 hover:bg-blue-900/80 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-xs font-semibold text-blue-100 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>Kids Galaxy</div>
<p className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                Khu vui chơi trẻ em 800m² – TTTM tại TP.HCM
              </p>
</div>
<div className="rounded-xl border border-white/5 bg-blue-950/70 px-3 py-3 flex flex-col items-start justify-between hover:border-green-400/60 hover:bg-blue-900/80 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-xs font-semibold text-blue-100 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>Jump Arena</div>
<p className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                Trampoline park &amp; khu vận động cho gia đình
              </p>
</div>
<div className="rounded-xl border border-white/5 bg-blue-950/70 px-3 py-3 flex flex-col items-start justify-between hover:border-green-400/60 hover:bg-blue-900/80 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-xs font-semibold text-blue-100 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>FunCity</div>
<p className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                Trung tâm trò chơi điện tử &amp; FEC nhiều tầng
              </p>
</div>
<div className="rounded-xl border border-white/5 bg-blue-950/70 px-3 py-3 flex flex-col items-start justify-between hover:border-green-400/60 hover:bg-blue-900/80 transition" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="text-xs font-semibold text-blue-100 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>Snow World</div>
<p className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                Khu vui chơi chủ đề tuyết &amp; trải nghiệm mùa đông
              </p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-5 text-[13px]">
<article className="relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-full bg-green-500/20 border border-green-400/50 flex items-center justify-center text-[13px] font-semibold text-green-100" style={{transition: 'outline 0.1s ease-in-out'}}>
                  TN
                </div>
<div>
<div className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Trần Ngọc Anh
                  </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Quản lý vận hành – Kids Galaxy
                  </div>
</div>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                “Trước đây chúng tôi dùng Excel và máy bán vé đơn lẻ, rất khó kiểm soát. Sau khi chuyển sang Thinksoft,
                việc đối soát ca, theo dõi doanh thu từng khu vực và quản lý danh sách hội viên dễ dàng hơn rất nhiều.”
              </p>
<div className="mt-auto flex items-center justify-between text-[11px] text-blue-400 pt-3 border-t border-white/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Giảm 60% thời gian chốt ca</span>
<span className="inline-flex items-center gap-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-trending-up h-3 w-3"></i>
                  +22% doanh thu/năm
                </span>
</div>
</article>
<article className="relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-[13px] font-semibold text-cyan-100" style={{transition: 'outline 0.1s ease-in-out'}}>
                  HL
                </div>
<div>
<div className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Hoàng Long
                  </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Chủ đầu tư – Trampoline park tại Hà Nội
                  </div>
</div>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                “Điểm mình đánh giá cao là đội ngũ triển khai hiểu rất rõ nghiệp vụ của khu vận động. Từ khâu ký miễn
                trừ trách nhiệm đến kiểm soát số người trong khu đều được xây dựng trong phần mềm.”
              </p>
<div className="mt-auto flex items-center justify-between text-[11px] text-blue-400 pt-3 border-t border-white/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Rút ngắn 50% thời gian xếp hàng</span>
<span className="inline-flex items-center gap-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-badge-check h-3 w-3"></i>
                  Vận hành ổn định mùa cao điểm
                </span>
</div>
</article>
<article className="relative rounded-2xl border border-white/5 bg-blue-950/80 p-4 flex flex-col" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-3 mb-3">
<div className="h-9 w-9 rounded-full bg-yellow-500/20 border border-yellow-400/50 flex items-center justify-center text-[13px] font-semibold text-yellow-100" style={{transition: 'outline 0.1s ease-in-out'}}>
                  DT
                </div>
<div>
<div className="text-[13px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Đinh Thảo
                  </div>
<div className="text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Trưởng bộ phận tài chính – FunCity
                  </div>
</div>
</div>
<p className="text-[12px] text-blue-300 mb-3" style={{transition: 'outline 0.1s ease-in-out'}}>
                “Hệ thống báo cáo của Thinksoft giúp chúng tôi nhìn rất rõ cấu trúc doanh thu, chi phí khuyến mãi và
                hiệu quả từng chương trình ưu đãi. Việc làm việc với phòng kế toán nhẹ nhàng hơn hẳn.”
              </p>
<div className="mt-auto flex items-center justify-between text-[11px] text-blue-400 pt-3 border-t border-white/5" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Kiểm soát khuyến mãi chặt chẽ</span>
<span className="inline-flex items-center gap-1 text-cyan-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-piggy-bank h-3 w-3"></i>
                  Giảm thất thoát doanh thu
                </span>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#050816]" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">

<div className="">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-blue-50 mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>
              Đặt lịch demo hoặc nhận tư vấn triển khai
            </h2>
<p className="text-sm sm:text-[15px] text-blue-300 mb-5 max-w-xl" style={{transition: 'outline 0.1s ease-in-out'}}>
              Hãy chia sẻ mô hình khu vui chơi, số lượng điểm chơi, quầy vé và các yêu cầu đặc thù. Đội ngũ Thinksoft
              sẽ đề xuất cấu hình hệ thống phù hợp nhất với lộ trình triển khai cụ thể.
            </p>
<div className="mb-6 space-y-3 text-[13px]">
<div className="flex items-center gap-2 text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="h-7 w-7 rounded-lg bg-green-500/20 border border-green-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-phone-call h-4 w-4 text-green-200" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<span>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Hotline tư vấn:</span>
<span className="ml-1 font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>090x xxx xxx</span>
</span>
</div>
<div className="flex items-center gap-2 text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="h-7 w-7 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-mail h-4 w-4 text-cyan-200" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<span>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Email:</span>
<span className="ml-1 font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>sales@thinksoft.vn</span>
</span>
</div>
<div className="flex items-center gap-2 text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="h-7 w-7 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-clock-3 h-4 w-4 text-cyan-200" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<span>
<span className="text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>Giờ làm việc:</span>
<span className="ml-1 font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>Thứ 2 – Thứ 7, 8:30 – 17:30</span>
</span>
</div>
</div>
<div className="rounded-2xl border border-white/5 bg-blue-950/80 p-4 text-[12px] text-blue-300" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2 mb-2">
<span className="h-6 w-6 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<i className="lucide lucide-info h-3.5 w-3.5 text-cyan-200" style={{transition: 'outline 0.1s ease-in-out'}}></i>
</span>
<span className="text-[12px] font-semibold text-blue-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Quy trình triển khai tiêu chuẩn
                </span>
</div>
<ol className="list-decimal list-inside space-y-1.5 text-[12px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<li className="">Khảo sát mô hình kinh doanh &amp; quy trình vận hành hiện tại.</li>
<li className="">Đề xuất giải pháp, phạm vi tính năng và chi phí triển khai.</li>
<li>Cấu hình hệ thống, tích hợp thiết bị &amp; đào tạo nhân sự.</li>
<li>Chạy thử song song, điều chỉnh theo phản hồi thực tế.</li>
<li>Bàn giao &amp; đồng hành hỗ trợ vận hành lâu dài.</li>
</ol>
</div>
</div>

<div className="relative">
<div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-green-500/20 blur-3xl" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<form className="relative rounded-2xl border border-white/10 bg-blue-950/90 p-4 sm:p-5 space-y-4 text-[13px]" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="">
<label className="block text-[12px] font-medium text-blue-200 mb-1" htmlFor="name" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Họ và tên
                </label>
<input className="w-full rounded-lg border border-blue-600/70 bg-blue-900/80 px-3 py-2 text-[13px] text-blue-50 placeholder:text-blue-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 outline-none transition" id="name" placeholder="VD: Nguyễn Minh An" style={{transition: 'outline 0.1s ease-in-out'}} type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] font-medium text-blue-200 mb-1" htmlFor="phone" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Số điện thoại
                  </label>
<input className="w-full rounded-lg border border-blue-600/70 bg-blue-900/80 px-3 py-2 text-[13px] text-blue-50 placeholder:text-blue-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 outline-none transition" id="phone" placeholder="VD: 09xx xxx xxx" style={{transition: 'outline 0.1s ease-in-out'}} type="tel"/>
</div>
<div>
<label className="block text-[12px] font-medium text-blue-200 mb-1" htmlFor="email" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Email
                  </label>
<input className="w-full rounded-lg border border-blue-600/70 bg-blue-900/80 px-3 py-2 text-[13px] text-blue-50 placeholder:text-blue-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 outline-none transition" id="email" placeholder="you@company.vn" style={{transition: 'outline 0.1s ease-in-out'}} type="email"/>
</div>
</div>
<div>
<label className="block text-[12px] font-medium text-blue-200 mb-1" htmlFor="business-type" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Loại hình khu vui chơi
                </label>
<select className="w-full rounded-lg border border-blue-600/70 bg-blue-900/80 px-3 py-2 text-[13px] text-blue-50 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 outline-none transition" id="business-type" style={{transition: 'outline 0.1s ease-in-out'}}>
<option className="bg-blue-900" style={{transition: 'outline 0.1s ease-in-out'}} value="">-- Chọn loại hình --</option>
<option className="bg-blue-900" style={{transition: 'outline 0.1s ease-in-out'}} value="kids">Khu vui chơi trẻ em trong TTTM</option>
<option className="bg-blue-900" style={{transition: 'outline 0.1s ease-in-out'}} value="trampoline">Trampoline park / khu vận động</option>
<option className="bg-blue-900" style={{transition: 'outline 0.1s ease-in-out'}} value="fec">Trung tâm trò chơi điện tử / FEC</option>
<option className="bg-blue-900" style={{transition: 'outline 0.1s ease-in-out'}} value="others">Khác (ghi rõ bên dưới)</option>
</select>
</div>
<div className="">
<label className="block text-[12px] font-medium text-blue-200 mb-1" htmlFor="message" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Nhu cầu &amp; ghi chú thêm
                </label>
<textarea className="w-full rounded-lg border border-blue-600/70 bg-blue-900/80 px-3 py-2 text-[13px] text-blue-50 placeholder:text-blue-500 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 outline-none transition" id="message" placeholder="VD: Số lượng điểm chơi, số quầy vé, mô tả cách bán vé hiện tại, thời gian dự kiến khai trương..." rows="4" style={{transition: 'outline 0.1s ease-in-out'}}></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-start gap-2 text-[11px] text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<input className="mt-[3px] h-3.5 w-3.5 rounded border-blue-500 bg-blue-900 text-green-500 focus:ring-green-400/60" id="agree" style={{transition: 'outline 0.1s ease-in-out'}} type="checkbox"/>
<label className="cursor-pointer" htmlFor="agree">
                    Tôi đồng ý để Thinksoft liên hệ tư vấn qua điện thoại / email.
                  </label>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-[12px] font-semibold text-blue-50 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300/60 transition" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">
<i className="lucide lucide-send h-4 w-4"></i>
                  Gửi thông tin
                </button>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#02010b]" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-[11px] text-blue-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-green-500/20 border border-green-400/40 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="text-[10px] font-semibold tracking-tight text-green-200" style={{transition: 'outline 0.1s ease-in-out'}}>TS</span>
</div>
<div>
<div className="text-[11px] font-semibold text-blue-100" style={{transition: 'outline 0.1s ease-in-out'}}>Thinksoft</div>
<div className="text-[10px] text-blue-500" style={{transition: 'outline 0.1s ease-in-out'}}>Giải pháp phần mềm cho khu vui chơi &amp; trung tâm giải trí</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<span>© 2024 Thinksoft. All rights reserved.</span>
<span className="hidden sm:inline-block h-3 w-px bg-blue-700" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<a className="hover:text-green-300 transition" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Điều khoản sử dụng</a>
<span className="hidden sm:inline-block h-3 w-px bg-blue-700" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<a className="hover:text-green-300 transition" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Chính sách bảo mật</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
