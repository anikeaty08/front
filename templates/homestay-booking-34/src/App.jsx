import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center z-10 relative">
<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="18"></iconify-icon>
</div>
            HOMESTAY<span className="text-gray-400">LUX</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Trang chủ</a>
<a className="hover:text-gray-900 transition-colors" href="#">Phòng nghỉ</a>
<a className="hover:text-gray-900 transition-colors" href="#">Liên hệ</a>
<a className="flex items-center gap-1.5 text-gray-900 bg-white border border-gray-200 shadow-sm px-3 py-1.5 rounded-md hover:border-gray-300 transition-all" href="#">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
<span>Hỗ trợ</span>
</a>
</nav>
</header>

<main className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 relative w-full max-w-3xl mx-auto mb-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl -z-10 pointer-events-none">
<div className="absolute top-10 left-10 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-10 right-10 w-64 h-64 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>

<div className="w-full text-center space-y-8 fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="space-y-3">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white/50 text-xs font-medium text-gray-600 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Hệ thống tra cứu trực tuyến 24/7
                </div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
                    Tra cứu đơn đặt phòng
                </h1>
<p className="text-lg text-gray-500 font-normal max-w-lg mx-auto leading-relaxed">
                    Nhập số điện thoại bạn đã sử dụng khi đặt phòng để xem chi tiết booking, mã check-in và trạng thái thanh toán.
                </p>
</div>

<div className="max-w-md mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<form className="relative bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 flex items-center transition-shadow focus-within:shadow-md focus-within:ring-1 focus-within:ring-gray-200">
<div className="pl-4 text-gray-400 flex items-center justify-center">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-400 text-base py-3 px-3 outline-none" placeholder="Nhập số điện thoại (VD: 0912345678)" required="" type="text"/>
<button className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap" onclick="document.getElementById('result-card').classList.remove('hidden');" type="button">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon>
<span>Tra cứu</span>
</button>
</form>
</div>
<div className="flex items-center justify-center gap-6 text-xs text-gray-400">
<span className="flex items-center gap-1.5">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="14"></iconify-icon>
                    Bảo mật thông tin
                </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="14"></iconify-icon>
                    Kết quả tức thì
                </span>
</div>
</div>

<div className="hidden w-full max-w-xl mx-auto mt-12 fade-in-up" id="result-card" style={{animationDelay: '0.2s'}}>
<div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

<div className="px-6 py-5 border-b border-gray-100 flex justify-between items-start bg-gray-50/50">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Mã đặt phòng</p>
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">#BK-83920</span>
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon icon="lucide:copy" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col items-end">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="1.5" width="12"></iconify-icon>
                            Đã xác nhận
                        </span>
<span className="text-xs text-gray-400 mt-1.5">Đặt ngày 20 Th10, 2023</span>
</div>
</div>

<div className="p-6">
<div className="flex gap-5">
<div className="w-20 h-20 rounded-lg bg-gray-100 shrink-0 overflow-hidden border border-gray-100">
<img alt="Room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-lg font-semibold text-gray-900 truncate">Studio Deluxe View Núi</h3>
<p className="text-sm text-gray-500 truncate mt-0.5">Tầng 2, Khu A • Giường đôi King size</p>
<div className="flex items-center gap-4 mt-3">
<div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="14"></iconify-icon>
                                    2 Người lớn
                                </div>
<div className="flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
<iconify-icon icon="lucide:moon" strokeWidth="1.5" width="14"></iconify-icon>
                                    2 Đêm
                                </div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10"></div>

<div className="flex flex-col gap-1 pr-4 bg-white">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Nhận phòng</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="lucide:calendar-check" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-semibold text-gray-900">14:00, 24 Th10</span>
</div>
</div>

<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 bg-white">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>

<div className="flex flex-col gap-1 pl-4 items-end bg-white">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Trả phòng</span>
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">12:00, 26 Th10</span>
<iconify-icon className="text-gray-400" icon="lucide:calendar-x" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-100 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-gray-500">Giá phòng (2 đêm)</span>
<span className="font-medium text-gray-900">2.400.000₫</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500">Phí dịch vụ</span>
<span className="font-medium text-gray-900">100.000₫</span>
</div>
<div className="flex justify-between text-base pt-2">
<span className="font-semibold text-gray-900">Tổng thanh toán</span>
<span className="font-bold text-gray-900 tracking-tight">2.500.000₫</span>
</div>
<div className="bg-blue-50/50 rounded-lg p-3 flex gap-3 items-start mt-2">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="lucide:info" strokeWidth="1.5" width="16"></iconify-icon>
<p className="text-xs text-blue-700 leading-relaxed">
                                Bạn đã thanh toán cọc 50%. Số tiền còn lại <span className="font-semibold">1.250.000₫</span> sẽ thanh toán khi nhận phòng.
                            </p>
</div>
</div>
</div>

<div className="bg-gray-50 px-6 py-4 flex gap-3 border-t border-gray-200">
<button className="flex-1 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-900 font-medium py-2.5 rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
                        Chỉ đường
                    </button>
<button className="flex-1 bg-gray-900 hover:bg-black text-white font-medium py-2.5 rounded-lg text-sm transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon icon="lucide:message-circle" strokeWidth="1.5" width="16"></iconify-icon>
                        Liên hệ
                    </button>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-gray-200 bg-white">
<div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">
                © 2023 HomestayLux Inc. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
