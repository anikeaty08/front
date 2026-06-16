import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const toast = document.getElementById('toast');
            
            // Show toast
            toast.classList.remove('translate-x-full', 'opacity-0');
            
            // Hide after 3 seconds
            setTimeout(() => {
                toast.classList.add('translate-x-full', 'opacity-0');
            }, 3000);
            
            // Reset form
            this.reset();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-24 right-5 z-50 transform transition-all duration-300 translate-x-full opacity-0" id="toast">
<div className="bg-white border border-green-100 shadow-xl rounded-lg p-4 flex items-center gap-3">
<div className="bg-green-100 text-green-600 rounded-full p-1">
<iconify-icon height="20" icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Thành công!</h4>
<p className="text-xs text-slate-500">Yêu cầu đặt lịch của bạn đã được gửi.</p>
</div>
</div>
</div>

<header className="fixed top-0 w-full z-40 border-b border-gray-100 glass-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="bg-blue-900 text-white p-1.5 rounded md:hidden">
<iconify-icon icon="lucide:car-front" width="20"></iconify-icon>
</div>
<span className="font-semibold text-xl tracking-tight text-blue-900">TOÀN TIẾN 568</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#hero">Trang chủ</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#features">Dịch vụ</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#pricing">Bảng giá</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors" href="#contact">Liên hệ</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-900 bg-amber-400 hover:bg-amber-500 transition-all shadow-sm" href="#booking">
                        Đặt lịch ngay
                    </a>

<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-900" id="hero">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-90"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600 blur-3xl opacity-20"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500 blur-3xl opacity-10"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/30 border border-blue-700/50 text-blue-100 text-xs font-medium mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Mở cửa phục vụ tất cả các ngày trong tuần
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                NƠI LÀM MỚI <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-300">XẾ YÊU CỦA BẠN</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300 font-light mb-10">
                Dịch vụ Rửa xe - Hút bụi - Làm lốp - Chăm sóc xe chuyên nghiệp. <br className="hidden sm:block"/>Trải nghiệm dịch vụ tận tâm và công nghệ hiện đại tại Toàn Tiến 568.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-blue-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-lg shadow-amber-500/20" href="#booking">
                    Đặt lịch rửa xe
                    <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-medium rounded-lg text-white hover:bg-slate-800 transition-all backdrop-blur-sm" href="#pricing">
                    Xem bảng giá
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Tại sao chọn chúng tôi?</h2>
<p className="mt-4 text-slate-500">Chúng tôi chăm sóc xe của bạn như chính xe của mình.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Công nghệ hơi nước nóng</h3>
<p className="text-sm text-slate-500 leading-relaxed">Làm sạch sâu, loại bỏ vết bẩn cứng đầu mà không hại bề mặt sơn.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Vệ sinh khoang máy</h3>
<p className="text-sm text-slate-500 leading-relaxed">Quy trình an toàn tuyệt đối, bảo vệ các chi tiết điện tử nhạy cảm.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Khử mùi &amp; Diệt khuẩn</h3>
<p className="text-sm text-slate-500 leading-relaxed">Mang lại không gian trong lành, thoáng mát cho nội thất xe.</p>
</div>

<div className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Phục vụ tận tâm</h3>
<p className="text-sm text-slate-500 leading-relaxed">Đội ngũ kỹ thuật viên lành nghề, tỉ mỉ từng chi tiết nhỏ nhất.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-y border-gray-200" id="pricing">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Bảng giá dịch vụ</h2>
<p className="mt-4 text-slate-500">Minh bạch, cạnh tranh và không phát sinh chi phí.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-fit">
<div className="bg-slate-900 p-6 text-center">
<div className="inline-flex p-3 rounded-full bg-white/10 text-amber-400 mb-3">
<iconify-icon icon="lucide:bike" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Dịch vụ Xe Máy</h3>
</div>
<div className="p-6">
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-gray-50 pb-3">
<span className="text-slate-600 font-medium">Rửa xe các loại</span>
<span className="text-slate-900 font-semibold">30.000đ</span>
</li>
<li className="flex justify-between items-center border-b border-gray-50 pb-3">
<span className="text-slate-600 font-medium">Vá lốp xe</span>
<span className="text-slate-900 font-semibold">40.000đ</span>
</li>
</ul>
<div className="mt-6 pt-4 border-t border-dashed border-gray-200">
<p className="text-xs text-center text-slate-400">Giá đã bao gồm hoá chất tẩy rửa chuyên dụng.</p>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
<div className="bg-blue-900 p-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="bg-white/10 p-2 rounded-lg text-white">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Dịch vụ Ô Tô</h3>
</div>
<span className="text-xs font-medium text-blue-200 bg-blue-800 px-3 py-1 rounded-full">Phổ biến nhất</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-4 font-medium text-slate-500 uppercase tracking-wider text-xs" scope="col">Hạng mục</th>
<th className="px-6 py-4 font-medium text-slate-900 text-center w-32" scope="col">Xe 4-5 Chỗ</th>
<th className="px-6 py-4 font-medium text-slate-900 text-center w-32" scope="col">Xe 7-9 Chỗ</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 text-slate-600 font-medium">Rửa xe, hút bụi, tiêu chuẩn</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">70.000đ</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">90.000đ</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 text-slate-600">
<span className="font-medium">Vệ sinh nội thất hơi nước nóng</span>
<br/><span className="text-xs text-slate-400 font-light">(Không tháo phụ kiện)</span>
</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">180.000đ</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">200.000đ</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 text-slate-600">
<span className="font-medium">Vệ sinh khoang máy</span>
<br/><span className="text-xs text-slate-400 font-light">Công nghệ hơi nước nóng</span>
</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">450.000đ</td>
<td className="px-6 py-4 text-slate-900 font-semibold text-center">550.000đ</td>
</tr>
<tr className="bg-amber-50/30">
<td className="px-6 py-4 text-amber-900 font-medium flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="lucide:plus-circle"></iconify-icon>
                                        Khử mùi, xông tinh dầu
                                    </td>
<td className="px-6 py-4 text-amber-700 font-semibold text-center border-l border-amber-100" colspan="2">
                                        30.000đ <span className="text-xs font-normal text-amber-600">/lần</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Hình ảnh thực tế</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
<div className="aspect-[4/3] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-slate-400 hover:bg-gray-300 transition-colors">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 pointer-events-none"></div>
<div className="max-w-xl mx-auto px-4 relative z-10">
<div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-slate-900">ĐẶT LỊCH HẸN</h2>
<p className="text-sm text-slate-500 mt-1">Vui lòng điền thông tin để chúng tôi phục vụ tốt nhất</p>
</div>
<form className="space-y-5" id="bookingForm">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Họ và tên</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm" placeholder="Nguyễn Văn A" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Số điện thoại</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm" placeholder="09xx xxx xxx" required="" type="tel"/>
</div>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Loại xe</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm appearance-none cursor-pointer">
<option>Xe máy</option>
<option>Xe Ô tô 4-5 Chỗ</option>
<option>Xe Ô tô 7-9 Chỗ</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Dịch vụ cần làm</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
<input className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Rửa xe &amp; Hút bụi</span>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
<input className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Vệ sinh nội thất (Hơi nước nóng)</span>
</label>
<label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
<input className="w-4 h-4 text-blue-900 border-gray-300 rounded focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Vệ sinh khoang máy</span>
</label>
</div>
</div>

<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Thời gian dự kiến</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-600" type="datetime-local"/>
</div>
<button className="w-full py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex justify-center items-center gap-2 mt-4" type="submit">
<span>Gửi yêu cầu</span>
<iconify-icon icon="lucide:send" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="space-y-4">
<h3 className="text-white text-lg font-semibold tracking-tight">TOÀN TIẾN 568</h3>
<p className="text-sm leading-relaxed max-w-xs">
                        Dịch vụ chăm sóc xe chuyên nghiệp. Đem lại vẻ đẹp hoàn mỹ và sự bền bỉ cho xế yêu của bạn.
                    </p>
</div>

<div className="space-y-4">
<h4 className="text-white text-sm font-medium uppercase tracking-wider">Liên hệ</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-amber-400" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Địa chỉ cửa hàng (Cập nhật sau)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="lucide:phone" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:0868776xxx">0868 776 xxx</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-amber-400" icon="lucide:mail" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contact@toantien568.vn">contact@toantien568.vn</a>
</li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-white text-sm font-medium uppercase tracking-wider">Giờ mở cửa</h4>
<ul className="space-y-2 text-sm">
<li className="flex justify-between border-b border-slate-800 pb-2">
<span>Thứ 2 - Thứ 6</span>
<span className="text-white">7:30 - 18:30</span>
</li>
<li className="flex justify-between border-b border-slate-800 pb-2">
<span>Thứ 7 - Chủ Nhật</span>
<span className="text-white">7:30 - 19:30</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
<p>© 2023 TOÀN TIẾN 568 Car Wash Service. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
