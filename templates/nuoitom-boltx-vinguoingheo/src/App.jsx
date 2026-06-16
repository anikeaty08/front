import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function copyToClipboard(elementId) {
            const element = document.getElementById(elementId);
            const text = element.textContent;
            navigator.clipboard.writeText(text).then(() => {
                showToast();
            });
        }

        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
                toast.classList.remove('translate-y-0', 'opacity-100');
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">NT</span>
</div>
<span className="font-semibold text-lg tracking-tight text-gray-900">NuôiTôi</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Khám phá</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Cách hoạt động</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Về chúng tôi</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Liên hệ</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors" href="#">Đăng nhập</a>
<a className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors" href="#">
                        Tạo chiến dịch
                    </a>
<button className="md:hidden p-2 text-gray-600">
<span className="iconify w-5 h-5" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
<div className="text-center max-w-3xl mx-auto">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                    Nền tảng gây quỹ cộng đồng <span className="text-emerald-600">số 1 Việt Nam</span>
</h1>
<p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
                    Kết nối những tấm lòng nhân ái với những hoàn cảnh cần được giúp đỡ. Mỗi đóng góp của bạn đều tạo nên sự khác biệt.
                </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors" href="#">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:heart" style={{strokeWidth: '1.5'}}></span>
                        Ủng hộ ngay
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-lg border border-gray-200 transition-colors" href="#">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></span>
                        Xem video
                    </a>
</div>
</div>

<div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
<div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-600">15.2 tỷ</div>
<div className="mt-1 text-sm text-gray-500">Đã quyên góp</div>
</div>
<div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-600">1,234</div>
<div className="mt-1 text-sm text-gray-500">Chiến dịch</div>
</div>
<div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-600">45,678</div>
<div className="mt-1 text-sm text-gray-500">Nhà hảo tâm</div>
</div>
<div className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-emerald-600">98%</div>
<div className="mt-1 text-sm text-gray-500">Tỷ lệ thành công</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Chiến dịch nổi bật</h2>
<p className="mt-2 text-gray-600">Những hoàn cảnh đang cần sự giúp đỡ của bạn</p>
</div>
<a className="hidden sm:inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                    Xem tất cả
                    <span className="iconify w-4 h-4 ml-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden bg-gray-100">
<img alt="Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Y tế</span>
<span className="text-xs text-gray-400">Còn 12 ngày</span>
</div>
<h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                            Giúp đỡ bé Minh 5 tuổi phẫu thuật tim bẩm sinh
                        </h3>
<p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            Bé Minh cần được phẫu thuật gấp để có cơ hội sống. Gia đình không có khả năng chi trả...
                        </p>
<div className="mt-4">
<div className="flex items-center justify-between text-sm mb-2">
<span className="font-medium text-emerald-600">245,000,000đ</span>
<span className="text-gray-500">/ 300,000,000đ</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '82%'}}></div>
</div>
<div className="flex items-center justify-between mt-3 text-xs text-gray-500">
<span>1,234 lượt ủng hộ</span>
<span className="font-medium text-emerald-600">82%</span>
</div>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden bg-gray-100">
<img alt="Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Giáo dục</span>
<span className="text-xs text-gray-400">Còn 25 ngày</span>
</div>
<h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                            Xây dựng thư viện cho trẻ em vùng cao Hà Giang
                        </h3>
<p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            Các em nhỏ ở đây chưa từng có một cuốn sách để đọc. Hãy cùng chúng tôi mang tri thức đến...
                        </p>
<div className="mt-4">
<div className="flex items-center justify-between text-sm mb-2">
<span className="font-medium text-emerald-600">89,500,000đ</span>
<span className="text-gray-500">/ 150,000,000đ</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '60%'}}></div>
</div>
<div className="flex items-center justify-between mt-3 text-xs text-gray-500">
<span>567 lượt ủng hộ</span>
<span className="font-medium text-emerald-600">60%</span>
</div>
</div>
</div>
</article>

<article className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
<div className="aspect-[16/10] overflow-hidden bg-gray-100">
<img alt="Campaign" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">Thiên tai</span>
<span className="text-xs text-gray-400">Còn 8 ngày</span>
</div>
<h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                            Hỗ trợ bà con miền Trung sau bão lũ
                        </h3>
<p className="mt-2 text-sm text-gray-500 line-clamp-2">
                            Hàng nghìn hộ dân mất nhà cửa, tài sản. Họ cần sự giúp đỡ khẩn cấp để vượt qua khó khăn...
                        </p>
<div className="mt-4">
<div className="flex items-center justify-between text-sm mb-2">
<span className="font-medium text-emerald-600">456,000,000đ</span>
<span className="text-gray-500">/ 500,000,000đ</span>
</div>
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" style={{width: '91%'}}></div>
</div>
<div className="flex items-center justify-between mt-3 text-xs text-gray-500">
<span>2,345 lượt ủng hộ</span>
<span className="font-medium text-emerald-600">91%</span>
</div>
</div>
</div>
</article>
</div>
<div className="mt-8 text-center sm:hidden">
<a className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                    Xem tất cả chiến dịch
                    <span className="iconify w-4 h-4 ml-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Danh mục gây quỹ</h2>
<p className="mt-2 text-gray-600">Chọn lĩnh vực bạn muốn hỗ trợ</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
<span className="iconify w-6 h-6 text-red-500" data-icon="lucide:heart-pulse" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Y tế</span>
<span className="text-xs text-gray-400">234 chiến dịch</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<span className="iconify w-6 h-6 text-blue-500" data-icon="lucide:graduation-cap" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Giáo dục</span>
<span className="text-xs text-gray-400">156 chiến dịch</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
<span className="iconify w-6 h-6 text-orange-500" data-icon="lucide:cloud-rain" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Thiên tai</span>
<span className="text-xs text-gray-400">89 chiến dịch</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
<span className="iconify w-6 h-6 text-purple-500" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Cộng đồng</span>
<span className="text-xs text-gray-400">178 chiến dịch</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
<span className="iconify w-6 h-6 text-green-500" data-icon="lucide:leaf" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Môi trường</span>
<span className="text-xs text-gray-400">67 chiến dịch</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all" href="#">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center group-hover:bg-pink-100 transition-colors">
<span className="iconify w-6 h-6 text-pink-500" data-icon="lucide:baby" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="mt-3 text-sm font-medium text-gray-700">Trẻ em</span>
<span className="text-xs text-gray-400">312 chiến dịch</span>
</a>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Cách hoạt động</h2>
<p className="mt-2 text-gray-600">Quy trình gây quỹ đơn giản và minh bạch</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="text-xl font-semibold text-emerald-600">1</span>
</div>
<h3 className="mt-4 font-medium text-gray-900">Tạo chiến dịch</h3>
<p className="mt-2 text-sm text-gray-500">Đăng ký và tạo chiến dịch gây quỹ của bạn trong vài phút</p>
</div>
<div className="text-center">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="text-xl font-semibold text-emerald-600">2</span>
</div>
<h3 className="mt-4 font-medium text-gray-900">Xác minh</h3>
<p className="mt-2 text-sm text-gray-500">Đội ngũ NuôiTôi xác minh thông tin và phê duyệt chiến dịch</p>
</div>
<div className="text-center">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="text-xl font-semibold text-emerald-600">3</span>
</div>
<h3 className="mt-4 font-medium text-gray-900">Lan tỏa</h3>
<p className="mt-2 text-sm text-gray-500">Chia sẻ chiến dịch để kết nối với các nhà hảo tâm</p>
</div>
<div className="text-center">
<div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="text-xl font-semibold text-emerald-600">4</span>
</div>
<h3 className="mt-4 font-medium text-gray-900">Nhận hỗ trợ</h3>
<p className="mt-2 text-sm text-gray-500">Rút tiền về tài khoản và cập nhật tiến độ sử dụng</p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-600 to-teal-700">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl">
<div className="text-center mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ủng hộ ngay</h2>
<p className="mt-2 text-gray-600">Chuyển khoản trực tiếp đến tài khoản NuôiTôi</p>
</div>

<div className="bg-gray-50 rounded-2xl p-6 mb-8">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
<span className="text-white font-semibold text-sm">MB</span>
</div>
<div>
<div className="font-medium text-gray-900">MB Bank</div>
<div className="text-sm text-gray-500">Ngân hàng Quân đội</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Số tài khoản</div>
<div className="text-lg font-semibold text-gray-900 tracking-wide" id="accountNumber">0123456789</div>
</div>
<button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" onclick="copyToClipboard('accountNumber')">
<span className="iconify w-5 h-5" data-icon="lucide:copy" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Chủ tài khoản</div>
<div className="text-lg font-semibold text-gray-900" id="accountName">CONG TY TNHH NUOI TOI</div>
</div>
<button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" onclick="copyToClipboard('accountName')">
<span className="iconify w-5 h-5" data-icon="lucide:copy" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
<div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Nội dung chuyển khoản</div>
<div className="text-lg font-semibold text-gray-900" id="transferContent">NUOITOI [Tên của bạn]</div>
</div>
<button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" onclick="copyToClipboard('transferContent')">
<span className="iconify w-5 h-5" data-icon="lucide:copy" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="text-center">
<p className="text-sm text-gray-500 mb-4">Hoặc quét mã QR để chuyển khoản</p>
<div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl border-2 border-dashed border-gray-200">
<div className="w-40 h-40 bg-gray-100 rounded-xl flex items-center justify-center">
<span className="iconify w-16 h-16 text-gray-300" data-icon="lucide:qr-code" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="mt-8">
<p className="text-sm text-gray-500 mb-3 text-center">Gợi ý số tiền</p>
<div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">50K</button>
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">100K</button>
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">200K</button>
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">500K</button>
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">1M</button>
<button className="px-3 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-medium rounded-lg transition-colors">2M</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Câu chuyện thành công</h2>
<p className="mt-2 text-gray-600">Những tấm lòng đã được kết nối</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 text-sm leading-relaxed">
                        "Nhờ NuôiTôi, con tôi đã được phẫu thuật thành công. Cảm ơn tất cả những nhà hảo tâm đã giúp đỡ gia đình chúng tôi trong lúc khó khăn nhất."
                    </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
<span className="text-emerald-600 font-medium text-sm">NL</span>
</div>
<div>
<div className="font-medium text-sm text-gray-900">Nguyễn Lan</div>
<div className="text-xs text-gray-500">Đã nhận hỗ trợ 245 triệu</div>
</div>
</div>
</div>
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 text-sm leading-relaxed">
                        "Tôi rất hạnh phúc khi có thể đóng góp một phần nhỏ cho cộng đồng. NuôiTôi giúp tôi tin tưởng rằng tiền của mình đến đúng người cần."
                    </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
<span className="text-blue-600 font-medium text-sm">TH</span>
</div>
<div>
<div className="font-medium text-sm text-gray-900">Trần Hùng</div>
<div className="text-xs text-gray-500">Nhà hảo tâm</div>
</div>
</div>
</div>
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex items-center gap-1 mb-4">
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify w-5 h-5 text-yellow-400" data-icon="lucide:star" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 text-sm leading-relaxed">
                        "Thư viện của chúng tôi đã được xây dựng hoàn thành. Các em nhỏ giờ đây có nơi để đọc sách và học tập. Cảm ơn NuôiTôi rất nhiều!"
                    </p>
<div className="mt-4 flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<span className="text-purple-600 font-medium text-sm">LM</span>
</div>
<div>
<div className="font-medium text-sm text-gray-900">Lê Mai</div>
<div className="text-xs text-gray-500">Giáo viên vùng cao</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-gray-900">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                Bạn muốn tạo chiến dịch gây quỹ?
            </h2>
<p className="mt-4 text-gray-400 text-lg">
                Hãy để NuôiTôi giúp bạn kết nối với hàng nghìn nhà hảo tâm trên khắp Việt Nam
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors" href="#">
                    Bắt đầu ngay - Miễn phí
                    <span className="iconify w-5 h-5 ml-2" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-gray-300 hover:text-white font-medium transition-colors" href="#">
<span className="iconify w-5 h-5 mr-2" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
                    Liên hệ tư vấn
                </a>
</div>
</div>
</section>

<footer className="bg-gray-900 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tight">NT</span>
</div>
<span className="font-semibold text-lg tracking-tight text-white">NuôiTôi</span>
</a>
<p className="mt-4 text-sm text-gray-400 max-w-xs">
                        Nền tảng gây quỹ cộng đồng uy tín hàng đầu Việt Nam, kết nối lòng nhân ái với những hoàn cảnh khó khăn.
                    </p>
<div className="mt-6 flex items-center gap-4">
<a className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:facebook" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:youtube" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Khám phá</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Tất cả chiến dịch</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Y tế</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Giáo dục</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Thiên tai</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Về NuôiTôi</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Giới thiệu</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Cách hoạt động</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Câu hỏi thường gặp</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Liên hệ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Pháp lý</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Điều khoản sử dụng</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Chính sách bảo mật</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Quy chế hoạt động</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">© 2024 NuôiTôi. Tất cả quyền được bảo lưu.</p>
<div className="flex items-center gap-6">
<span className="text-xs text-gray-500">Hotline: 1900 1234</span>
<span className="text-xs text-gray-500">Email: support@nuoitoi.vn</span>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 right-4 transform translate-y-20 opacity-0 transition-all duration-300 z-50" id="toast">
<div className="bg-gray-900 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2">
<span className="iconify w-5 h-5 text-emerald-400" data-icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Đã sao chép!</span>
</div>
</div>


    </>
  );
}
