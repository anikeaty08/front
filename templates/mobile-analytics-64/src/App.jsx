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



        lucide.createIcons();
    
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
      

<main className="w-full max-w-md bg-white min-h-screen shadow-sm relative pb-10">

<div className="flex justify-between items-center px-5 py-2 text-sm font-semibold text-slate-900 select-none">
<span>00:23</span>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<div className="flex items-center gap-0.5 bg-slate-200 px-1 rounded text-[10px] font-bold h-4">
<span>69</span>
</div>
</div>
</div>

<header className="flex items-center justify-between px-4 py-2 border-b border-transparent">
<button className="p-2 -ml-2 hover:bg-slate-50 rounded-full text-slate-800">
<i className="w-7 h-7" data-lucide="chevron-left"></i>
</button>
<div className="flex-1 ml-2">
<h1 className="text-xl font-semibold tracking-tight leading-tight text-slate-900">Công cụ chuyên nghiệp</h1>
<p className="text-slate-500 text-sm font-medium">Thông tin chi tiết về bài viết</p>
</div>
<div className="flex items-center gap-4 text-slate-800">
<button><i className="w-6 h-6" data-lucide="bar-chart-2"></i></button>
<button><i className="w-6 h-6" data-lucide="sticky-note"></i></button>
<button><i className="w-6 h-6" data-lucide="more-horizontal"></i></button>
</div>
</header>

<section className="flex flex-col items-center mt-6 px-4">

<div className="relative w-36 h-36 rounded-xl overflow-hidden shadow-sm border border-slate-100">
<img alt="Comic thumbnail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 bg-black/40 p-1 rounded">
<i className="w-4 h-4 text-white" data-lucide="image"></i>
</div>
</div>

<p className="text-center text-lg font-medium text-slate-900 mt-5 leading-relaxed px-4">
                Siro dâu còn chưa hút được, mà no bởi cơm toá gòi :)
            </p>
<span className="text-slate-400 -mt-1 font-bold text-xl tracking-widest">...</span>

<div className="flex items-center gap-1.5 text-slate-500 text-sm mt-1 mb-6">
<span>20:00 thứ Bảy, 17 tháng 1, 2026</span>
<span className="text-slate-400">•</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="globe"></i>
</div>
</section>

<section className="flex justify-center items-start gap-10 px-4 pb-8">
<div className="flex flex-col items-center gap-1">
<div className="bg-slate-500 rounded-full p-0.5 text-white w-6 h-6 flex items-center justify-center">
<i className="w-3.5 h-3.5 fill-current" data-lucide="thumbs-up"></i>
</div>
<span className="text-slate-500 text-sm font-medium">34,6K</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-6 h-6 text-slate-500" data-lucide="message-circle"></i>
<span className="text-slate-500 text-sm font-medium">47</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-6 h-6 text-slate-500" data-lucide="share-2"></i>
<span className="text-slate-500 text-sm font-medium">31</span>
</div>
<div className="flex flex-col items-center gap-1">
<i className="w-6 h-6 text-slate-500" data-lucide="bookmark"></i>
<span className="text-slate-500 text-sm font-medium">0</span>
</div>
</section>

<div className="px-4 mb-6">
<div className="bg-slate-50 rounded-xl p-4 flex gap-3">
<div className="shrink-0 mt-0.5">
<div className="bg-green-600 rounded-full p-0.5">
<i className="w-3 h-3 text-white stroke-[3]" data-lucide="check"></i>
</div>
</div>
<div>
<h3 className="text-[15px] font-semibold text-slate-900 leading-snug">
                        Chúng tôi không phát hiện thấy bất kỳ vấn đề nào về nội dung
                    </h3>
<p className="text-[15px] text-slate-600 mt-1 leading-snug">
                        Tuyệt quá! Khả năng tiếp cận nội dung của bạn đã được tối ưu hóa. 
                        <a className="text-blue-600 font-semibold hover:underline" href="#">Tìm hiểu thêm</a>
</p>
</div>
</div>
</div>
<hr className="border-slate-100 mx-4 mb-6"/>

<section className="px-4 mb-6">
<div className="flex items-center gap-2 mb-4">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Tổng quan</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="info"></i>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="border border-slate-200 rounded-xl p-4">
<div className="text-[17px] font-semibold text-slate-900">35.454</div>
<div className="text-sm text-slate-600 mt-0.5">Lượt xem</div>
</div>

<div className="border border-slate-200 rounded-xl p-4">
<div className="text-[17px] font-semibold text-slate-900">1,05 US$</div>
<div className="text-sm text-slate-600 mt-0.5">Thu nhập</div>
</div>

<div className="border border-slate-200 rounded-xl p-4">
<div className="text-[17px] font-semibold text-slate-900">24.950</div>
<div className="text-sm text-slate-600 mt-0.5">Lượt tương tác</div>
</div>

<div className="border border-slate-200 rounded-xl p-4">
<div className="text-[17px] font-semibold text-slate-900">0</div>
<div className="text-sm text-slate-600 mt-0.5">Số người theo dõi thực</div>
</div>
</div>
</section>

<div className="px-4 mb-2">
<div className="flex items-start gap-3 py-2">
<i className="w-6 h-6 text-slate-900 mt-0.5" data-lucide="trending-up"></i>
<div className="flex-1">
<p className="text-[17px] font-semibold text-slate-900 leading-snug">
                        Bài viết này nhận được 1x so với số lượt xem thông thường của bạn
                    </p>
<p className="text-sm text-slate-500 mt-1">
                        Xem lý do và tìm hiểu cách cải thiện
                    </p>
</div>
<i className="w-6 h-6 text-slate-400 mt-2" data-lucide="chevron-right"></i>
</div>
</div>
<hr className="border-slate-100 mx-4 mb-6 mt-2"/>

<section className="px-4 pb-20">
<div className="flex items-center gap-2 mb-2">
<h2 className="text-xl font-semibold tracking-tight text-slate-900">Lượt xem</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="info"></i>
</div>
<div className="flex justify-center mt-6">
<span className="text-3xl font-bold text-slate-900 tracking-tight">35.454</span>
</div>
</section>

<div className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-200 py-3 px-6 flex justify-between items-center z-50">
<i className="w-6 h-6 text-slate-400" data-lucide="grid-3x3"></i>
<div className="bg-green-500 p-1.5 rounded-full"><i className="w-5 h-5 text-white fill-current" data-lucide="phone"></i></div>
<div className="bg-blue-500 p-1.5 rounded-full"><i className="w-5 h-5 text-white fill-current" data-lucide="message-circle"></i></div>
<div className="bg-indigo-500 p-1.5 rounded-full"><i className="w-5 h-5 text-white" data-lucide="compass"></i></div>
<div className="bg-red-500 p-1.5 rounded-full"><i className="w-5 h-5 text-white" data-lucide="play-circle"></i></div>
<i className="w-6 h-6 text-slate-400" data-lucide="menu"></i>
</div>
</main>


    </>
  );
}
