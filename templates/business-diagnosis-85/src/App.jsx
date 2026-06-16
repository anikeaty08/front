import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 md:h-screen md:sticky top-0 z-10 flex flex-col hidden md:flex">
<div className="p-6 border-b border-slate-100">
<h1 className="font-semibold text-lg tracking-tight uppercase">B.DIAGNOSIS</h1>
</div>
<nav className="p-4 flex-1 space-y-1">
<a className="flex items-center gap-3 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-lg" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
                Hồ sơ sức khỏe
            </a>
<a className="flex items-center gap-3 transition-colors font-medium text-slate-900 bg-slate-100 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
                Khám lâm sàng mới
            </a>
<a className="flex items-center gap-3 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
                Tủ thuốc (Playbooks)
            </a>
<a className="flex items-center gap-3 hover:text-slate-900 hover:bg-slate-50 transition-colors font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Khách hàng (Tiệm PMU)
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full px-3 py-2 text-slate-600 hover:text-slate-900 rounded-md font-medium transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
                Cài đặt
            </button>
</div>
</aside>

<div className="md:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-20">
<h1 className="font-semibold text-base tracking-tight uppercase">B.DIAGNOSIS</h1>
<button className="p-2 text-slate-600">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<main className="flex-1 p-4 md:p-8 lg:p-12 max-w-4xl mx-auto w-full">

<header className="mb-10">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs font-semibold uppercase tracking-widest text-slate-900">Bước 1: Thu thập sinh hiệu</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Bước 2: Chẩn đoán &amp; Phác đồ</span>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Tạo Phiếu Khám Mới</h2>
<p className="text-sm text-slate-500 mt-2">Đo lường các chỉ số cốt lõi để AI phân tích và đưa ra phác đồ hệ thống hóa phù hợp.</p>
</header>
<form className="space-y-8">

<section className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
<h3 className="font-semibold text-base tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-id-linear"></iconify-icon>
                        Hồ Sơ Doanh Nghiệp (Bệnh Nhân)
                    </h3>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-medium text-slate-700">Tên Doanh nghiệp / Thương hiệu</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors" placeholder="VD: Alpha Marketing Agency" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Lĩnh vực hoạt động</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors appearance-none">
<option disabled="" selected="" value="">Chọn lĩnh vực...</option>
<option>Agency / Dịch vụ</option>
<option>Thẩm mỹ viện / Spa / PMU</option>
<option>Bán lẻ / F&amp;B</option>
<option>Sản xuất / Phân phối</option>
<option>Khác</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Quy mô nhân sự</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors appearance-none">
<option disabled="" selected="" value="">Chọn quy mô...</option>
<option>1 - 5 người (Sơ khai)</option>
<option>6 - 20 người (Tăng trưởng)</option>
<option>21 - 50 người (Mở rộng)</option>
<option>&gt; 50 người (Trưởng thành)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
<h3 className="font-semibold text-base tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:pulse-2-linear"></iconify-icon>
                        Đo lường Sinh hiệu (8 Chức năng lõi)
                    </h3>
<span className="text-xs text-slate-500">Kéo trượt để chấm điểm (0 - 100)</span>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Marketing &amp; Lead Gen</label>
<span className="text-[11px] text-slate-500">Khả năng tạo khách hàng tiềm năng</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">50%</span>
</div>
<input max="100" min="0" type="range" value="50"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Sales (Bán hàng)</label>
<span className="text-[11px] text-slate-500">Tỷ lệ chuyển đổi &amp; Quy trình chốt sale</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">65%</span>
</div>
<input max="100" min="0" type="range" value="65"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Customer Service (CSKH)</label>
<span className="text-[11px] text-slate-500">Trải nghiệm &amp; Giữ chân khách hàng</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">85%</span>
</div>
<input max="100" min="0" type="range" value="85"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Product/Fulfillment</label>
<span className="text-[11px] text-slate-500">Chất lượng dịch vụ &amp; Phân phối</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">80%</span>
</div>
<input max="100" min="0" type="range" value="80"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">HR / People (Nhân sự)</label>
<span className="text-[11px] text-slate-500">Đào tạo, văn hóa &amp; giữ chân nhân tài</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">55%</span>
</div>
<input max="100" min="0" type="range" value="55"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Hiring (Tuyển dụng)</label>
<span className="text-[11px] text-slate-500">Khả năng thu hút &amp; đánh giá ứng viên</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">60%</span>
</div>
<input max="100" min="0" type="range" value="60"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">Finance (Tài chính)</label>
<span className="text-[11px] text-slate-500">Quản lý dòng tiền, P&amp;L, ngân sách</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">70%</span>
</div>
<input max="100" min="0" type="range" value="70"/>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<div>
<label className="text-sm font-medium text-slate-900 block">IT &amp; Systems (Hệ thống)</label>
<span className="text-[11px] text-slate-500">Số hóa, Tools, Automation &amp; Dữ liệu</span>
</div>
<span className="text-xs font-semibold text-slate-900 border border-slate-200 px-2 py-0.5 rounded bg-slate-50">40%</span>
</div>
<input max="100" min="0" type="range" value="40"/>
</div>
</div>
</section>

<section className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
<h3 className="font-semibold text-base tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:clipboard-text-linear"></iconify-icon>
                        Khai báo triệu chứng (Nỗi đau của Founder)
                    </h3>
</div>
<div className="p-6 space-y-6">
<div>
<label className="text-xs font-medium text-slate-700 block mb-3">Tích chọn các triệu chứng đang gặp phải:</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="flex items-start gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input className="custom-checkbox w-4 h-4 mt-0.5 rounded border-slate-300" type="checkbox"/>
<div>
<span className="text-sm font-medium text-slate-900 block">Founder làm việc &gt;12h/ngày</span>
<span className="text-[11px] text-slate-500 block mt-0.5">Vẫn phải nhúng tay vào mọi việc nhỏ.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 border border-rose-200 bg-rose-50/30 rounded-md cursor-pointer hover:bg-rose-50/50 transition-colors">
<input checked="" className="custom-checkbox w-4 h-4 mt-0.5 rounded border-slate-300" type="checkbox"/>
<div>
<span className="text-sm font-medium text-slate-900 block">Chi phí Ads tăng, doanh thu giảm</span>
<span className="text-[11px] text-slate-500 block mt-0.5">Không đo lường được hiệu quả thực sự.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 border border-amber-200 bg-amber-50/30 rounded-md cursor-pointer hover:bg-amber-50/50 transition-colors">
<input checked="" className="custom-checkbox w-4 h-4 mt-0.5 rounded border-slate-300" type="checkbox"/>
<div>
<span className="text-sm font-medium text-slate-900 block">Quy trình chỉ nằm trong đầu</span>
<span className="text-[11px] text-slate-500 block mt-0.5">Nhân sự mới vào không biết bắt đầu từ đâu.</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 border border-slate-200 rounded-md cursor-pointer hover:bg-slate-50 transition-colors">
<input className="custom-checkbox w-4 h-4 mt-0.5 rounded border-slate-300" type="checkbox"/>
<div>
<span className="text-sm font-medium text-slate-900 block">Lỗ hổng dòng tiền</span>
<span className="text-[11px] text-slate-500 block mt-0.5">Có doanh thu nhưng cuối tháng không thấy tiền.</span>
</div>
</label>
</div>
</div>
<div className="space-y-1.5 border-t border-slate-100 pt-6">
<label className="text-xs font-medium text-slate-700">Ghi chú bổ sung của bác sĩ (Mô tả chi tiết)</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:border-slate-400 focus:bg-white transition-colors resize-y" placeholder="Nhập thêm các quan sát, bối cảnh thực tế của doanh nghiệp..." rows="4">Founder đang ôm đồm quá nhiều việc, dẫn đến tắc nghẽn ở khâu công nghệ và tiếp thị. Chi phí Marketing tăng nhưng không có hệ thống đo lường rành mạch.</textarea>
</div>
</div>
</section>

<div className="sticky bottom-4 md:bottom-8 mt-10 p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-lg shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 z-10">
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="w-full sm:w-auto px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md hover:bg-slate-50 transition-colors" type="button">
                        Lưu Nháp
                    </button>
<button className="w-full sm:w-auto px-4 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon className="text-base text-rose-500" icon="solar:trash-bin-trash-linear"></iconify-icon>
                        Xóa Form
                    </button>
</div>
<button className="w-full sm:w-auto px-6 py-2.5 bg-slate-900 text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2" type="button">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon>
                    Chẩn Đoán &amp; Ra Phác Đồ
                </button>
</div>
</form>

<footer className="mt-8 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 B.Diagnosis System. Bảo mật thông tin tuyệt đối.</p>
</footer>
</main>

    </>
  );
}
