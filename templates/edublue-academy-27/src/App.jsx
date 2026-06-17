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



        function switchPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Show selected section
            const targetSection = document.getElementById('page-' + pageId);
            if(targetSection) {
                targetSection.classList.add('active');
            }

            // Update nav state
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Logic to highlight nav items:
            // If viewing news-detail, highlight 'news'
            let navId = pageId;
            if(pageId === 'news-detail') {
                navId = 'news';
            }

            const activeNav = document.getElementById('nav-' + navId);
            if(activeNav) {
                activeNav.classList.add('active');
            }

            // Scroll to top gently
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="switchPage('home')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-blue-500/20 shadow-lg">
<span className="font-semibold text-lg tracking-tighter">E</span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">EDUBLUE.</span>
</div>

<div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
<button className="nav-item active px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200 flex items-center gap-2" id="nav-home" onclick="switchPage('home')">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                    Giới thiệu
                </button>
<button className="nav-item px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200 flex items-center gap-2" id="nav-news" onclick="switchPage('news')">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                    Tin tức
                </button>
<button className="nav-item px-4 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200 flex items-center gap-2" id="nav-notices" onclick="switchPage('notices')">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
                    Thông báo
                    <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
</button>
</div>

<button className="md:hidden text-slate-500 hover:text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Đăng nhập</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-sm shadow-slate-300/50 transition-all tracking-wide">
                    ĐĂNG KÝ NGAY
                </button>
</div>
</div>
</nav>

<main className="flex-grow sm:px-6 pt-24 pr-4 pb-12 pl-4">
<div className="max-w-5xl mx-auto">

<section className="page-section active" id="page-home">

<div className="absolute inset-x-0 top-0 h-[600px] z-0 pointer-events-none overflow-hidden">

<img alt="Background" className="w-full h-full object-cover opacity-10 mix-blend-multiply bg-fade-bottom" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-50/20 via-slate-50/80 to-slate-50"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-50/50 via-transparent to-slate-50/50"></div>
</div>

<div className="relative z-10 py-12 sm:py-20 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-600 text-xs font-medium mb-6 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Tuyển sinh Khoá học Mùa Thu 2024
                    </div>
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Kiến tạo tương lai số <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">với nền tảng vững chắc.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        EduBlue mang đến chương trình đào tạo lập trình hiện đại, tập trung vào tư duy giải quyết vấn đề và kỹ năng thực chiến dành riêng cho sinh viên.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group">
                            Xem lộ trình
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="sm:w-auto hover:bg-white transition-all flex gap-2 font-medium text-slate-700 bg-white/80 w-full border-slate-200 border rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-sm backdrop-blur-sm gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Video giới thiệu
                        </button>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

<div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Thực hành 70%</h3>
<p className="text-sm text-slate-500 leading-relaxed">Học qua dự án thực tế, xây dựng portfolio ngay trong quá trình học tập tại trường.</p>
</div>

<div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Mentorship 1:1</h3>
<p className="text-sm text-slate-500 leading-relaxed">Đội ngũ chuyên gia từ các công ty công nghệ lớn trực tiếp hướng dẫn và review code.</p>
</div>

<div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:diploma-verified-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Chứng chỉ uy tín</h3>
<p className="text-sm text-slate-500 leading-relaxed">Hoàn thành khoá học và nhận chứng chỉ được công nhận bởi cộng đồng doanh nghiệp đối tác.</p>
</div>
</div>
</section>

<section className="page-section" id="page-news">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tin tức &amp; Sự kiện</h2>
<p className="text-slate-500 mt-2 text-sm">Cập nhật những xu hướng công nghệ mới nhất.</p>
</div>
<button className="hidden sm:flex text-sm text-blue-600 font-medium hover:text-blue-700 items-center gap-1">
                        Xem tất cả <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

<div className="group cursor-pointer" onclick="switchPage('news-detail')">
<div className="aspect-video w-full rounded-2xl bg-slate-200 mb-4 overflow-hidden relative border border-slate-200/50">
<img alt="AI Article" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
</div>
<div className="flex items-center gap-3 mb-2 text-xs font-medium">
<span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Công nghệ</span>
<span className="text-slate-400">12 Tháng 10, 2023</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">AI Generative và tác động đến lập trình viên Junior</h3>
<p className="text-sm text-slate-500 line-clamp-2">Khám phá cách trí tuệ nhân tạo đang thay đổi quy trình viết code và những kỹ năng mới sinh viên cần trang bị.</p>
<div className="mt-3 flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            Đọc tiếp <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="space-y-8">

<div className="flex gap-4 group cursor-pointer hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-100 rounded-xl p-2 -m-2 transition-all">
<div className="w-32 h-24 rounded-xl bg-slate-100 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">05 Tháng 10, 2023</div>
<h4 className="text-base font-semibold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">Workshop: Tư duy thiết kế UX/UI cho Developer</h4>
<p className="text-xs text-slate-500 line-clamp-2">Buổi chia sẻ kinh nghiệm thực tế từ Senior Designer của TechCorp.</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-100 rounded-xl p-2 -m-2 transition-all">
<div className="w-32 h-24 rounded-xl bg-slate-100 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">28 Tháng 9, 2023</div>
<h4 className="text-base font-semibold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">Top 5 ngôn ngữ lập trình đáng học nhất năm 2024</h4>
<p className="text-xs text-slate-500 line-clamp-2">Phân tích nhu cầu thị trường và cơ hội nghề nghiệp cho sinh viên mới ra trường.</p>
</div>
</div>

<div className="flex gap-4 group cursor-pointer hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-100 rounded-xl p-2 -m-2 transition-all">
<div className="w-32 h-24 rounded-xl bg-slate-100 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-slate-400 mb-1">20 Tháng 9, 2023</div>
<h4 className="text-base font-semibold text-slate-900 mb-1 tracking-tight group-hover:text-blue-600 transition-colors">EduBlue ký kết hợp tác với Google DSC</h4>
<p className="text-xs text-slate-500 line-clamp-2">Mở rộng cơ hội thực tập và tiếp cận tài nguyên học tập chính hãng.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section" id="page-news-detail">

<div className="mb-8">
<button className="group flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 font-medium transition-colors pl-0 hover:pl-1" onclick="switchPage('news')">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5"></iconify-icon>
                        Quay lại tin tức
                    </button>
</div>
<article className="max-w-3xl mx-auto">

<div className="mb-8 text-center">
<div className="flex items-center justify-center gap-3 mb-4 text-xs font-medium">
<span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">Công nghệ</span>
<span className="text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                                12 Tháng 10, 2023
                            </span>
<span className="text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                5 phút đọc
                            </span>
</div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                            AI Generative và tác động đến<br/>lập trình viên Junior
                        </h1>
<div className="flex items-center justify-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="text-sm font-medium text-slate-900">Hoàng Nam</div>
<div className="text-xs text-slate-500">Senior Software Engineer</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-10">
<img alt="Article Cover" className="w-full h-auto object-cover max-h-[400px]" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<div className="bg-slate-50 px-4 py-2 border-t border-slate-200 text-center">
<span className="text-xs text-slate-400 italic">Ảnh minh họa: Sự kết hợp giữa con người và AI (Nguồn: Unsplash)</span>
</div>
</div>

<div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
<p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
                            Sự bùng nổ của các công cụ Generative AI như GitHub Copilot hay ChatGPT đang tạo ra một làn sóng thay đổi mạnh mẽ trong ngành công nghiệp phần mềm. Đối với các sinh viên công nghệ thông tin và lập trình viên Junior, câu hỏi lớn nhất được đặt ra là: <span className="font-medium text-slate-900 italic">"Liệu AI có thay thế chúng ta không?"</span>
</p>
<h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">1. Thay đổi cách viết Code</h2>
<p className="mb-6">
                            Thay vì gõ từng dòng lệnh boilerplate (mã lặp lại), lập trình viên giờ đây đóng vai trò là "người điều phối" (conductor). AI có thể gợi ý cú pháp, tạo unit test, và thậm chí giải thích các đoạn mã phức tạp chỉ trong vài giây. Điều này giúp tăng năng suất lên đáng kể, nhưng cũng đòi hỏi kỹ năng <span className="bg-yellow-50 text-yellow-800 px-1 rounded border border-yellow-200">Review Code</span> cực kỳ cẩn thận.
                        </p>
<blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-8 italic bg-blue-50 rounded-r-lg text-slate-700">
                            "AI không thay thế lập trình viên. Lập trình viên biết sử dụng AI sẽ thay thế lập trình viên không biết sử dụng nó."
                        </blockquote>
<h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">2. Những kỹ năng mới cần trang bị</h2>
<p className="mb-4">Để tồn tại và phát triển trong kỷ nguyên này, EduBlue khuyến nghị sinh viên tập trung vào:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Tư duy giải quyết vấn đề (Problem Solving):</strong> AI giỏi thực thi, nhưng con người giỏi xác định vấn đề.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Kiến trúc hệ thống (System Design):</strong> Hiểu cách các thành phần kết nối với nhau quan trọng hơn việc nhớ cú pháp.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span><strong>Prompt Engineering:</strong> Kỹ năng đặt câu hỏi đúng để AI trả về kết quả chính xác nhất.</span>
</li>
</ul>
<h2 className="text-2xl font-semibold text-slate-900 mt-10 mb-4 tracking-tight">3. Kết luận</h2>
<p className="mb-6">
                            Tương lai không phải là cuộc chiến giữa Người và Máy, mà là sự cộng tác. Tại EduBlue, chúng tôi đã bắt đầu tích hợp các module hướng dẫn sử dụng AI một cách có đạo đức và hiệu quả vào chương trình giảng dạy, giúp sinh viên không chỉ học code, mà còn học cách làm chủ công nghệ.
                        </p>
</div>

<div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
<span className="text-sm text-slate-500 mr-2">Tags:</span>
<a className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 transition-colors" href="#">#ArtificialIntelligence</a>
<a className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 transition-colors" href="#">#Coding</a>
<a className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-600 transition-colors" href="#">#CareerAdvice</a>
</div>
</article>
</section>

<section className="page-section" id="page-notices">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Thông báo học vụ</h2>
<p className="text-slate-500 mt-2 text-sm">Các thông tin quan trọng về lịch học, thi cử và nghỉ lễ.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">

<div className="p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="flex gap-4">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-red-50 text-red-600 border border-red-100 flex-shrink-0">
<span className="text-xs font-semibold uppercase">T10</span>
<span className="text-lg font-bold leading-none">15</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-red-100 text-red-700">QUAN TRỌNG</span>
<span className="text-xs text-slate-400">8:00 AM</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Thay đổi lịch thi cuối khoá - Lớp Web Frontend K14</h3>
<p className="text-sm text-slate-500">Do sự cố kỹ thuật tại phòng máy, lịch thi sẽ được dời sang ngày 20/10/2023. Sinh viên vui lòng kiểm tra email để xem chi tiết phòng thi mới.</p>
</div>
</div>
<button className="text-slate-300 hover:text-blue-600">
<iconify-icon icon="solar:menu-dots-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="flex gap-4">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
<span className="text-xs font-semibold uppercase">T10</span>
<span className="text-lg font-bold leading-none">12</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-100 text-blue-700">HỌC VỤ</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Mở đăng ký bổ sung học phần tự chọn</h3>
<p className="text-sm text-slate-500">Cổng đăng ký sẽ mở từ 12/10 đến hết 15/10 cho các môn: UI/UX Design, Git Advanced.</p>
</div>
</div>
</div>
</div>

<div className="p-6 hover:bg-slate-50 transition-colors">
<div className="flex items-start justify-between gap-4">
<div className="flex gap-4">
<div className="flex flex-col items-center justify-center w-12 h-12 rounded-lg bg-slate-100 text-slate-600 border border-slate-200 flex-shrink-0">
<span className="text-xs font-semibold uppercase">T09</span>
<span className="text-lg font-bold leading-none">30</span>
</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600">THÔNG BÁO</span>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Bảo trì hệ thống LMS định kỳ</h3>
<p className="text-sm text-slate-500">Hệ thống sẽ tạm ngưng phục vụ từ 00:00 đến 04:00 ngày 01/10 để nâng cấp server.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-200 bg-white py-12 relative z-10">
<div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-xs">E</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">EDUBLUE.</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-blue-600 transition-colors" href="#">Về chúng tôi</a>
<a className="hover:text-blue-600 transition-colors" href="#">Điều khoản</a>
<a className="hover:text-blue-600 transition-colors" href="#">Bảo mật</a>
<a className="hover:text-blue-600 transition-colors" href="#">Liên hệ</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-youtube-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 mt-8 text-center text-xs text-slate-400 font-light">
            © 2024 Edublue Academy. All rights reserved. Designed for students.
        </div>
</footer>


    </>
  );
}
