import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-gray-100 text-sm">
<div className="max-w-[1200px] mx-auto px-4 py-2 flex justify-between items-center">
<div className="flex gap-6 text-gray-500 items-center">
<span className="flex items-center gap-1">
<svg className="inline-block" fill="none" height="16" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.45 2.22.95 3.23a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.01.5 2.1.82 3.23.95a2 2 0 0 1 1.72 2z"></path></svg>
          0888 999 111
        </span>
<span className="flex items-center gap-1">
<svg className="inline-block" fill="none" height="16" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 6-10 7L2 6"></path></svg>
          kinhdoanh@zumi.com.vn
        </span>
</div>
<a className="flex items-center gap-1 text-blue-600 font-semibold hover:underline transition-colors" href="#">
<svg fill="none" height="16" stroke="#2563EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16"><circle cx="8" cy="7" r="4"></circle><path d="M2 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path></svg>
        Đăng nhập
      </a>
</div>
</header>
<main>

<section className="max-w-[1200px] mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center py-14 md:py-20">
<div className="md:w-1/2 w-full">
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-5 leading-tight">Thiết kế độc đáo, nâng tầm thương hiệu</h1>
<p className="text-base text-gray-700 mb-8 leading-relaxed max-w-md">Tạo ra sản phẩm in ấn chất lượng cao và mang đậm dấu ấn cá nhân hoặc thương hiệu của bạn. Dễ dàng thiết kế, thao tác đơn giản – giao diện trực quan.</p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg shadow transition-all text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Thiết kế ngay</button>
<button className="bg-blue-400 hover:bg-blue-500 text-white font-normal py-2.5 px-6 rounded-lg transition-all text-base border-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">Xem mẫu 2025</button>
</div>
</div>
<div className="md:w-1/2 w-full mt-12 md:mt-0 flex justify-center">
<div className="w-72 h-72 bg-white shadow-lg rounded-xl flex items-center justify-center relative">
<img alt="Áo thun thiết kế" className="object-contain w-60 h-60 rounded-lg" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full bg-blue-600 text-white font-semibold shadow">Hot 2025</span>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-3xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight mb-12 text-center">Thiết kế dễ dàng</h2>
<div className="flex flex-col sm:flex-row gap-8">
<article className="flex-1 bg-white shadow-md rounded-lg p-6 text-left hover:scale-105 hover:shadow-lg transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center text-lg font-bold mb-4">1</div>
<h3 className="font-semibold text-lg mb-2">Chọn sản phẩm</h3>
<p className="text-sm text-gray-700 leading-relaxed">Lựa chọn loại áo, chất liệu, màu sắc phù hợp với nhu cầu và phong cách riêng.</p>
</article>
<article className="flex-1 bg-white shadow-md rounded-lg p-6 text-left hover:scale-105 hover:shadow-lg transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center text-lg font-bold mb-4">2</div>
<h3 className="font-semibold text-lg mb-2">Thiết kế &amp; chỉnh sửa</h3>
<p className="text-sm text-gray-700 leading-relaxed">Dễ dàng tải lên logo, hình ảnh, thêm text và sắp xếp bố cục ngay trên giao diện web.</p>
</article>
<article className="flex-1 bg-white shadow-md rounded-lg p-6 text-left hover:scale-105 hover:shadow-lg transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-200 text-blue-600 flex items-center justify-center text-lg font-bold mb-4">3</div>
<h3 className="font-semibold text-lg mb-2">Đặt hàng &amp; nhận áo</h3>
<p className="text-sm text-gray-700 leading-relaxed">Xác nhận đơn hàng, chọn số lượng và nhận áo tận nơi nhanh chóng, đúng như thiết kế.</p>
</article>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-blue-500 to-blue-100">
<div className="max-w-[1150px] mx-auto">
<h2 className="text-4xl font-bold text-white text-center tracking-tight mb-14">Công cụ thiết kế chuyên nghiệp</h2>
<div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-stretch">

<aside className="w-full md:w-72 flex-shrink-0 overflow-y-auto">
<h3 className="font-semibold text-lg text-gray-800 mb-6">Sản phẩm</h3>
<div className="grid grid-cols-3 md:grid-cols-1 gap-4">
<div className="bg-gray-50 rounded-lg p-3 shadow hover:ring-2 ring-blue-500 transition">
<img alt="Áo thun" className="w-16 h-16 object-contain mx-auto mb-2" src="https://dummyimage.com/80x80/3b82f6/ffffff&amp;text=Áo+Thun"/>
<div className="text-center text-sm text-gray-700 font-medium">Áo thun</div>
</div>
<div className="bg-gray-50 rounded-lg p-3 shadow hover:ring-2 ring-blue-500 transition">
<img alt="Áo polo" className="w-16 h-16 object-contain mx-auto mb-2" src="https://dummyimage.com/80x80/60a5fa/ffffff&amp;text=Áo+Polo"/>
<div className="text-center text-sm text-gray-700 font-medium">Áo polo</div>
</div>
<div className="bg-gray-50 rounded-lg p-3 shadow hover:ring-2 ring-blue-500 transition">
<img alt="Áo khoác" className="w-16 h-16 object-contain mx-auto mb-2" src="https://dummyimage.com/80x80/93c5fd/ffffff&amp;text=Áo+Khoác"/>
<div className="text-center text-sm text-gray-700 font-medium">Áo khoác</div>
</div>
</div>
<div className="mt-10">
<label className="block text-gray-700 text-sm font-semibold mb-2">Tìm sản phẩm</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-blue-500">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18"><circle cx="8" cy="8" r="6"></circle><path d="m21 21-4.35-4.35"></path></svg>
</span>
<input className="pl-10 pr-3 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm bg-white transition" placeholder="Tìm kiếm..." type="text"/>
</div>
</div>
</aside>

<main className="flex-1 bg-gray-50 rounded-lg p-8 relative flex flex-col justify-center items-center">
<div className="absolute right-5 top-8 flex flex-col gap-3 text-blue-600 z-10">
<button className="hover:text-blue-700 transition-colors" title="Xoay phải">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="22"><path d="M21 2v6h-6"></path><path d="M3 13a9 9 0 1 0 3-7.7l-1 1"></path></svg>
</button>
<button className="hover:text-blue-700 transition-colors" title="Xoay trái">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="22"><path d="M3 2v6h6"></path><path d="M21 13a9 9 0 1 1-3-7.7l1 1"></path></svg>
</button>
<button className="hover:text-blue-700 transition-colors" title="Xem trước">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="22"><circle cx="11" cy="11" r="8"></circle><circle cx="11" cy="11" r="3"></circle></svg>
</button>
<button className="hover:text-blue-700 transition-colors" title="Xóa">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="22"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
<div className="w-64 h-64 bg-white shadow rounded-xl flex items-center justify-center relative">
<img alt="Canvas sản phẩm" className="object-contain w-56 h-56 rounded-md" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&amp;fit=crop&amp;w=400&amp;q=80" />
<span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Trước</span>
</img></div>
<div className="mt-6 flex gap-4">
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg shadow transition-all text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Lưu thiết kế</button>
<button className="bg-white border border-blue-400 text-blue-700 hover:bg-blue-50 font-semibold py-2 px-5 rounded-lg transition-all text-base focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2">Tải lên hình</button>
</div>
</main>
</div>
</div>
</section>
</main>

<footer className="bg-slate-800 text-slate-300 px-6 py-16 mt-16">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
<div>
<img alt="Zumi" className="mb-4" src="https://dummyimage.com/120x40/2563eb/ffffff&amp;text=Zumi" />
<p className="text-sm leading-relaxed mb-3">Công ty TNHH Zumi<br/>
        Tư vấn &amp; thiết kế đồng phục, in ấn thương hiệu chuyên nghiệp.</p>
<div className="flex items-center gap-2 text-sm mb-1">
<svg fill="none" height="16" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.45 2.22.95 3.23a2 2 0 0 1-.45 2.11l-.27.27a16 16 0 0 0 6.29 6.29l.27-.27a2 2 0 0 1 2.11-.45c1.01.5 2.1.82 3.23.95a2 2 0 0 1 1.72 2z"></path></svg>
          0888 999 111
        </div>
<div className="flex items-center gap-2 text-sm">
<svg fill="none" height="16" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="16"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 6-10 7L2 6"></path></svg>
          kinhdoanh@zumi.com.vn
        </div>
</img></div>
<nav>
<h4 className="font-semibold mb-3 text-base">CHÍNH SÁCH</h4>
<ul className="space-y-2 text-sm leading-relaxed">
<li><a className="hover:underline" href="#">Chính sách bảo mật</a></li>
<li><a className="hover:underline" href="#">Chính sách đổi trả</a></li>
<li><a className="hover:underline" href="#">Hướng dẫn đặt hàng</a></li>
</ul>
</nav>
<nav>
<h4 className="font-semibold mb-3 text-base">SẢN PHẨM</h4>
<ul className="space-y-2 text-sm leading-relaxed">
<li><a className="hover:underline" href="#">Áo thun đồng phục</a></li>
<li><a className="hover:underline" href="#">Áo polo công sở</a></li>
<li><a className="hover:underline" href="#">Áo khoác</a></li>
</ul>
</nav>
<div>
<h4 className="font-semibold mb-3 text-base">Thời gian hoạt động</h4>
<p className="text-sm leading-relaxed">
          Thứ 2 - Thứ 7<br/>
          Từ 7h đến 17h<br/>
          Chủ nhật, ngày lễ, tết nghỉ
        </p>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-700 text-center text-slate-400 text-xs">
      © 2025 zumi.com.vn - Giải pháp nâng tầm giá trị thương hiệu
    </div>
</footer>

    </>
  );
}
