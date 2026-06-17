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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Tabs Logic
        function switchTab(tabName) {
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(`tab-content-${tabName}`).classList.add('active');

            const buttons = ['part1', 'part2', 'part3'];
            buttons.forEach(btn => {
                const el = document.getElementById(`tab-btn-${btn}`);
                if (btn === tabName) {
                    el.className = "px-8 py-2.5 text-xs font-semibold rounded-full transition-all duration-300 bg-white text-black shadow-sm ring-1 ring-black/5";
                } else {
                    el.className = "px-8 py-2.5 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all duration-300 hover:bg-white/50";
                }
            });
        }

        // Accordion Logic
        function toggleAccordion(id) {
            const content = document.getElementById(id);
            const icon = document.getElementById(`icon-${id}`);
            
            if (content.style.gridTemplateRows === "1fr") {
                content.classList.remove('open');
                content.style.gridTemplateRows = "0fr";
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close others if needed (optional)
                document.querySelectorAll('.accordion-content').forEach(c => {
                    c.style.gridTemplateRows = "0fr";
                    c.classList.remove('open');
                });
                document.querySelectorAll('.lucide-chevron-down').forEach(i => {
                    i.style.transform = 'rotate(0deg)';
                });

                content.classList.add('open');
                content.style.gridTemplateRows = "1fr";
                icon.style.transform = 'rotate(180deg)';
            }
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
      

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-6 h-6">
<svg className="text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<span className="font-bold tracking-tight text-gray-900 text-sm uppercase">
                    Write It Right
                </span>
</div>
<nav className="hidden md:flex gap-8 text-[13px] font-medium tracking-wide text-gray-500">
<a className="hover:text-black transition-colors duration-300" href="#problems">Vấn Đề</a>
<a className="hover:text-black transition-colors duration-300" href="#modules">Nội Dung</a>
<a className="hover:text-black transition-colors duration-300" href="#instructor">Giảng Viên</a>
<a className="hover:text-black transition-colors duration-300" href="#faq">FAQ</a>
</nav>
<a className="hidden md:flex items-center justify-center px-5 py-2 bg-black text-white text-[13px] font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg" href="https://go.kissenglish.vn/checkouts/write-it-right/">
                Đăng Ký Ngay
            </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">

<div className="absolute top-0 inset-x-0 h-[500px] w-full bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none -z-10"></div>
<div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[11px] font-semibold uppercase tracking-widest reveal active shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Business English Email Course
            </div>

<h1 className="text-6xl md:text-7xl lg:text-[80px] font-bold text-gray-900 tracking-tighter mb-8 leading-[1.05] reveal delay-75 active">
                WRITE IT <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">
                    RIGHT.
                </span>
</h1>

<h2 className="text-2xl md:text-[28px] font-semibold text-gray-800 tracking-tight mb-6 reveal delay-100 active">
                Viết Email Tiếng Anh Chuẩn Công Sở
            </h2>

<p className="text-[15px] md:text-base leading-relaxed reveal delay-150 active font-normal text-gray-500 tracking-wide max-w-2xl mr-auto mb-12 ml-auto">
  Viết email tiếng Anh đúng – rõ – lịch sự – chuẩn quốc tế, ngay cả khi trước đây bạn còn lúng túng, thiếu tự tin hoặc
  mất rất nhiều thời gian.</p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center reveal delay-200 active">
<a className="group relative flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/20" href="https://go.kissenglish.vn/checkouts/write-it-right/">
<span className="relative z-10">Đăng Ký Học Ngay</span>
</a>
<a className="flex items-center justify-center gap-2 h-12 px-8 glass-panel text-gray-700 hover:text-black text-sm font-medium rounded-full transition-colors w-full sm:w-auto group" href="#video-intro">
<svg className="w-4 h-4 group-hover:text-blue-600 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Xem Video
                </a>
</div>
</div>
</section>

<section className="z-10 border-gray-100 border-b pt-32 pr-6 pb-32 pl-6 relative bg-white" id="problems">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-10 active">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter leading-tight">
                    Bạn Có Đang Gặp <br/>
<span className="text-gray-400">Vấn Đề Này?</span>
</h2>
<div className="space-y-6">

<div className="flex items-start gap-5 group rounded-xl p-2 -ml-2 transition-colors hover:bg-gray-50">
<div className="mt-1 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="">
<h4 className="text-gray-900 text-base font-semibold mb-1">Viết dài nhưng không ai hiểu</h4>
<p className="leading-relaxed text-sm font-normal text-gray-500">
                                Viết một email tiếng Anh rất dài nhưng người nhận vẫn không hiểu bạn muốn nói gì.
                            </p>
</div>
</div>

<div className="flex items-start gap-5 group rounded-xl p-2 -ml-2 transition-colors hover:bg-gray-50">
<div className="mt-1 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-gray-900 text-base font-semibold mb-1">Mất tự tin &amp; thời gian</h4>
<p className="text-gray-500 text-sm font-normal leading-relaxed">
                                Viết xong rồi… xoá. Tra Google Dịch sửa đi sửa lại mất hàng chục phút mỗi ngày.
                            </p>
</div>
</div>

<div className="flex items-start gap-5 group rounded-xl p-2 -ml-2 transition-colors hover:bg-gray-50">
<div className="mt-1 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0 border border-red-100">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<h4 className="text-gray-900 text-base font-semibold mb-1">Bị góp ý nhưng không biết sửa</h4>
<p className="text-gray-500 text-sm font-normal leading-relaxed">
                                Bị sếp hoặc đồng nghiệp góp ý nhưng không biết sửa thế nào cho đúng chuẩn công sở.
                            </p>
</div>
</div>
</div>
<div className="pt-4 border-t border-gray-100">
<p className="text-blue-600 font-medium italic text-sm">
                        "Đó không phải vì bạn dở tiếng Anh. Mà vì bạn chưa được học tư duy viết email công sở đúng chuẩn."
                    </p>
</div>
</div>

<div className="glass-panel overflow-hidden group reveal delay-100 rounded-2xl pt-2 pr-2 pb-2 pl-2 relative active" id="video-intro">
<div className="video-wrapper bg-gray-100 rounded-xl">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write" className="" frameborder="0" src="https://player.vimeo.com/video/1142954643?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="Write It Right Intro"></iframe>
</div>
<div className="p-6 text-center">
<p className="text-sm text-gray-500 font-medium">Tìm hiểu khóa học trong 2 phút</p>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-b pt-24 pr-6 pb-24 pl-6 bg-gradient-to-b from-white to-gray-50/50">
<div className="reveal text-center max-w-4xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-bold text-gray-900 tracking-tight mb-6">
                Giải Pháp Của Write It Right
            </h2>
<p className="md:text-base leading-relaxed text-sm text-gray-500 max-w-2xl mr-auto mb-12 ml-auto">
                Khóa học online chuyên sâu giúp người đi làm viết email <span className="text-gray-900 font-semibold">đúng – rõ – lịch sự</span> và áp dụng ngay vào công việc hàng ngày mà không cần trình độ tiếng Anh cao.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl text-left bg-white">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="text-gray-900 font-bold text-lg mb-2">Tư Duy Bản Xứ</h3>
<p className="text-sm text-gray-500 leading-relaxed">Học cách tư duy viết email như người bản xứ, tránh lỗi dịch word-by-word.</p>
</div>

<div className="glass-panel p-8 rounded-xl text-left bg-white">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<h3 className="text-gray-900 font-bold text-lg mb-2">Công Cụ Sẵn Có</h3>
<p className="text-sm text-gray-500 leading-relaxed">Cung cấp cấu trúc, mẫu câu mở đầu – kết thúc – chuyển ý dùng phổ biến.</p>
</div>

<div className="glass-panel p-8 rounded-xl text-left bg-white">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="text-gray-900 font-bold text-lg mb-2">30+ Loại Email</h3>
<p className="text-sm text-gray-500 leading-relaxed">Thực hành trên các tình huống thực tế thường gặp nhất trong môi trường công sở.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-white" id="modules">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Nội Dung Chi Tiết</h2>
<p className="text-gray-500 text-sm font-medium">Lộ trình học bài bản từ nền tảng đến nâng cao</p>
</div>

<div className="w-full reveal delay-100">
<div className="flex flex-col sm:flex-row justify-center mb-12">
<div className="inline-flex bg-gray-100 p-1.5 rounded-full border border-gray-200">
<button className="px-8 py-2.5 text-xs font-semibold rounded-full transition-all duration-300 bg-white text-black shadow-sm ring-1 ring-black/5" id="tab-btn-part1" onclick="switchTab('part1')">
                            Nền Tảng
                        </button>
<button className="px-8 py-2.5 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all duration-300 hover:bg-white/50" id="tab-btn-part2" onclick="switchTab('part2')">
                            Giao Tiếp Hàng Ngày
                        </button>
<button className="px-8 py-2.5 text-xs font-semibold rounded-full text-gray-500 hover:text-gray-900 transition-all duration-300 hover:bg-white/50" id="tab-btn-part3" onclick="switchTab('part3')">
                            Tình Huống Khó
                        </button>
</div>
</div>

<div className="tab-content active" id="tab-content-part1">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bg-white border border-gray-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-8 border-b border-gray-100 relative z-10">
<div className="">
<h3 className="text-2xl font-bold text-gray-900 mb-2">Phần 1: Nền Tảng Viết Email</h3>
<p className="text-gray-500 text-sm font-light">Xây dựng tư duy và cấu trúc chuẩn cho mọi email.</p>
</div>
<div className="mt-4 md:mt-0 text-3xl font-bold text-gray-200">01</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Tư duy viết email kiểu người bản xứ</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Cách đặt tiêu đề email chuẩn – rõ – hiệu quả</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Cấu trúc chuẩn của một email công sở</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Mẫu câu mở đầu &amp; kết thúc chuyên nghiệp</span>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="tab-content-part2">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bg-white border border-gray-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-8 border-b border-gray-100 relative z-10">
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-2">Phần 2: Giao Tiếp Hàng Ngày</h3>
<p className="text-gray-500 text-sm font-light">Xử lý các loại email công việc thường gặp nhất.</p>
</div>
<div className="mt-4 md:mt-0 text-3xl font-bold text-gray-200">02</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Email hỏi &amp; phản hồi thông tin</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Email nhờ hỗ trợ, đính kèm tài liệu</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Email follow-up, xin lỗi, cảm ơn</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Email báo cáo, đặt lịch họp</span>
</li>
</ul>
</div>
</div>

<div className="tab-content" id="tab-content-part3">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden bg-white border border-gray-100">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 pb-8 border-b border-gray-100 relative z-10">
<div>
<h3 className="text-2xl font-bold text-gray-900 mb-2">Phần 3: Tình Huống Nhạy Cảm</h3>
<p className="text-gray-500 text-sm font-light">Xử lý khéo léo các vấn đề phức tạp qua email.</p>
</div>
<div className="mt-4 md:mt-0 text-3xl font-bold text-gray-200">03</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Email phàn nàn, từ chối, làm rõ hiểu nhầm</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Viết email nhắc deadline, xử lý mâu thuẫn</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Thông báo sự cố, thay đổi, chậm tiến độ</span>
</li>
<li className="flex items-start gap-4 text-sm text-gray-600">
<div className="mt-0.5 p-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium">Theo dõi sau phỏng vấn, dự án</span>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors" href="https://go.kissenglish.vn/checkouts/write-it-right/">
                    Đăng ký khóa học để xem chi tiết
                    <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-gray-100 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Học Viên Nói Gì?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl reveal bg-white">
<div className="mb-6 text-blue-500">
<svg className="opacity-80" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
                        "Trước đây mỗi lần viết email là mất 20-30 phút. Sau khi học Write It Right, mình có sẵn cấu trúc nên viết nhanh hơn rất nhiều. Sếp đọc hiểu ngay ý mình."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>
<div className="">
<div className="text-gray-900 text-sm font-semibold">Lan Anh</div>
<div className="text-xs text-gray-500">Nhân viên hành chính</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-75 bg-white">
<div className="mb-6 text-blue-500">
<svg className="opacity-80" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
                        "Khóa học không dạy lý thuyết dài dòng mà đi thẳng vào từng loại email dùng mỗi ngày. Mình đặc biệt thích phần chỉnh giọng văn. Học xong dùng được ngay."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-500"></div>
<div>
<div className="text-gray-900 text-sm font-semibold">Minh Tuấn</div>
<div className="text-xs text-gray-500">Sales Executive</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl reveal delay-150 bg-white">
<div className="mb-6 text-blue-500">
<svg className="opacity-80" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
</div>
<p className="text-gray-600 text-sm leading-relaxed mb-6">
                        "Write It Right giúp mình hiểu rõ cấu trúc email chuẩn. Giờ mình tự tin hơn rất nhiều khi gửi email cho sếp và đồng nghiệp. Rất đáng tiền."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500"></div>
<div>
<div className="text-gray-900 text-sm font-semibold">Thu Hương</div>
<div className="text-xs text-gray-500">Nhân viên văn phòng</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t pt-24 pr-6 pb-24 pl-6 bg-white" id="instructor">
<div className="glass-panel md:p-12 reveal max-w-5xl rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gray-100 shrink-0 border-4 border-white shadow-lg overflow-hidden relative">

<div className="flex text-gray-400 bg-gray-100 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Hoàng Minh Thủy" className="w-full h-full object-cover" src="http://kissenglish.vn/wp-content/uploads/2025/07/Ms-Thuy-Avatar.jpg"/>
</div>
</div>
<div className="">
<h3 className="text-2xl font-bold text-gray-900 mb-1">Hoàng Minh Thủy</h3>
<p className="text-blue-600 font-medium text-sm mb-6 uppercase tracking-wider">Founder KISS English</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 font-light">
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            8 năm giảng dạy tiếng Anh
                        </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            Từng làm việc tại Damco, Decathlon, IKEA
                        </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            Chủ biên 20 khóa học, 18.000+ học viên
                        </div>
<div className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                            Tác giả bộ sách BOOM English
                        </div>
</div>
<p className="mt-6 text-sm italic text-gray-500">"Phong cách giảng dạy: Dễ hiểu – Thực tế – Ứng dụng ngay."</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pr-6 pb-32 pl-6 relative bg-gray-50" id="order">
<div className="relative max-w-4xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-4">Ưu Đãi Đặc Biệt</h2>
<p className="text-gray-500 mb-16 text-sm">Khoản đầu tư nhỏ cho sự nghiệp chuyên nghiệp hơn.</p>
<div className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-400 p-[1px] shadow-2xl shadow-blue-900/10">
<div className="md:p-12 overflow-hidden bg-white rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
<div className="text-left w-full md:w-1/2">
<h3 className="text-2xl font-bold text-gray-900 mb-2">Trọn Bộ Write It Right</h3>
<div className="flex items-baseline gap-3 mb-6">
<span className="md:text-5xl text-4xl font-bold text-blue-600 tracking-tight">399.000đ</span>
<span className="text-lg text-gray-400 line-through font-normal">1.990.000đ</span>
</div>
<div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-bold uppercase rounded tracking-wider mb-6 border border-red-100">
                                Giảm 80% - Thời gian có hạn
                            </div>
<p className="text-sm text-gray-500 mb-2">Bao gồm:</p>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Trọn bộ khóa học Online trọn đời
                                </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-gray-900 font-medium">Tặng 1 năm học Zoom (Trị giá 2.990k)</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Tặng 3 Ebook tiếng Anh độc quyền
                                </li>
</ul>
</div>
<div className="w-full md:w-auto flex flex-col items-center gap-4">
<a className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30" href="https://go.kissenglish.vn/checkouts/write-it-right/">
                                Đăng Ký Ngay
                            </a>
<p className="text-xs text-gray-500">Cam kết hoàn tiền nếu không hài lòng</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-gray-100 pt-24 pr-6 pb-24 pl-6" id="faq">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-bold text-gray-900 tracking-tight text-center mb-12">Câu Hỏi Thường Gặp</h2>
<div className="space-y-3">

<div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors" onclick="toggleAccordion('faq1')">
                        Tôi mất gốc tiếng Anh có học được không?
                        <svg className="w-4 h-4 transition-transform text-gray-500" fill="none" height="24" id="icon-faq1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-sm text-gray-600 font-normal leading-relaxed">
                            Có. Khóa học không yêu cầu trình độ cao, tập trung vào cấu trúc &amp; mẫu câu dùng ngay. Bạn chỉ cần lắp ghép thông tin vào mẫu có sẵn là dùng được.
                        </div>
</div>
</div>

<div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors" onclick="toggleAccordion('faq2')">
                        Tôi rất bận, có học được không?
                        <svg className="w-4 h-4 transition-transform text-gray-500" fill="none" height="24" id="icon-faq2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq2">
<div className="p-5 pt-0 text-sm text-gray-600 font-normal leading-relaxed">
                             Hoàn toàn được. Nội dung ngắn gọn, súc tích. Bạn có thể học tranh thủ bất cứ lúc nào rảnh rỗi. Mỗi bài học chỉ từ 10-15 phút.
                        </div>
</div>
</div>

<div className="border border-gray-200 rounded-lg bg-gray-50/50 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors" onclick="toggleAccordion('faq3')">
                        Khóa học dành cho ai?
                        <svg className="w-4 h-4 transition-transform text-gray-500" fill="none" height="24" id="icon-faq3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-sm text-gray-600 font-normal leading-relaxed">
                            Phù hợp nhất với người đi làm, nhân sự Sales, Marketing, Hành chính, Quản lý; hoặc những người đang chuẩn bị xin việc tại môi trường quốc tế.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center bg-gray-50 border-t border-gray-100">
<h2 className="text-3xl font-bold text-gray-900 mb-8">Sẵn Sàng Viết Email Chuyên Nghiệp?</h2>
<a className="inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all shadow-lg hover:scale-105" href="https://go.kissenglish.vn/checkouts/write-it-right/">
            Đăng Ký Write It Right Ngay
        </a>
</section>

<footer className="py-16 border-t border-gray-200 text-center bg-white">
<div className="mb-4 font-bold text-gray-900 tracking-tight">KISS ENGLISH</div>
<p className="text-[11px] text-gray-500 mb-8">
            Giúp người đi làm tự tin sử dụng tiếng Anh.
        </p>
<div className="flex justify-center gap-8 text-[10px] text-gray-500 uppercase tracking-widest font-medium">
<a className="hover:text-black transition-colors" href="#">Điều Khoản</a>
<a className="hover:text-black transition-colors" href="#">Bảo Mật</a>
<a className="hover:text-black transition-colors" href="#">Liên Hệ</a>
</div>
</footer>


    </>
  );
}
