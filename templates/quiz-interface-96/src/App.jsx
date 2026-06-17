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
      

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-6 shrink-0 z-40 relative">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 pl-3 pr-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-full transition-all shadow-sm shadow-emerald-500/20 active:scale-95">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
<span>Quay lại</span>
</button>
</div>
<h1 className="absolute left-1/2 -translate-x-1/2 hidden md:block text-sm font-semibold text-gray-800 tracking-tight text-center max-w-xl truncate">
            CHỦ ĐỀ: Hôm nay tôi buồn - Kỹ thuật kiểm thử phần mềm (Manual Testing)
        </h1>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
<span className="iconify text-emerald-600" data-icon="lucide:hourglass" data-width="15"></span>
<span className="text-sm font-mono font-medium text-gray-700 w-[5ch] text-center">36:21</span>
</div>
<button className="flex items-center gap-2 pl-3 pr-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold rounded-full transition-all shadow-sm shadow-emerald-500/20 active:scale-95">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Nộp bài</span>
</button>
</div>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-72 bg-white border-r border-gray-200 hidden lg:flex flex-col z-30">

<div className="flex-1 overflow-y-auto custom-scroll p-6">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Danh sách câu hỏi</h3>
<div className="grid grid-cols-5 gap-3 mb-8">

<button className="w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-semibold flex items-center justify-center shadow-md ring-2 ring-gray-900 ring-offset-2 transition-transform hover:scale-105">
                        1
                    </button>

<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 text-sm font-medium flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">2</button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 text-sm font-medium flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">3</button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 text-sm font-medium flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">4</button>
<button className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-500 text-sm font-medium flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors">5</button>

</div>

<div className="pt-4 border-t border-gray-100">
<label className="flex items-start gap-3 cursor-pointer group select-none">
<div className="relative flex items-center mt-0.5">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-emerald-500 transition-colors"></div>
<div className="absolute top-[2px] left-[2px] bg-white shadow-sm rounded-full h-4 w-4 transition-transform peer-checked:translate-x-full"></div>
</div>
<span className="text-xs text-gray-500 group-hover:text-gray-700 font-medium leading-tight">Xem đáp án ngay sau khi trả lời</span>
</label>
</div>
</div>

<div className="p-6 bg-gray-50/50 border-t border-gray-200">
<div className="space-y-3">
<div className="flex items-center gap-2.5">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-xs font-medium text-gray-600">Đã làm: <span className="text-gray-900 font-bold ml-1">1</span></span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-4 h-4 rounded-full bg-gray-200 border border-gray-300"></div>
<span className="text-xs font-medium text-gray-600">Chưa làm: <span className="text-gray-900 font-bold ml-1">0</span></span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-4 h-4 rounded-full bg-amber-400 border border-amber-500"></div>
<span className="text-xs font-medium text-gray-600">Chưa chắc: <span className="text-gray-900 font-bold ml-1">0</span></span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-gray-200 flex gap-2">
<div className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] text-gray-500 font-medium">A-D</div>
<span className="text-[10px] text-gray-400 self-center">Chọn đáp án</span>
<div className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] text-gray-500 font-medium ml-2">←</div>
<div className="px-2 py-1 bg-white border border-gray-200 rounded text-[10px] text-gray-500 font-medium">→</div>
<span className="text-[10px] text-gray-400 self-center">Điều hướng</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] relative overflow-hidden">

<div className="flex-1 overflow-y-auto custom-scroll p-4 md:p-8 pb-32">
<div className="max-w-4xl mx-auto">

<div className="flex items-center gap-4 mb-8">
<span className="text-sm font-semibold text-gray-700 min-w-fit">Tiến độ</span>
<div className="flex-1 h-2.5 bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full transition-all duration-500 ease-out"></div>
</div>
<span className="text-sm font-bold text-gray-700 min-w-fit">100%</span>
</div>

<div className="bg-white rounded-2xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">

<div className="px-6 py-5 border-b border-gray-100 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-3">
<h2 className="text-xl font-bold text-gray-900">Câu 1</h2>
<span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-emerald-100/50">
                                    Chọn 1 đáp án
                                </span>
<label className="flex items-center gap-2 cursor-pointer ml-2 group">
<input className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500/20 group-hover:border-amber-500 transition-colors" type="checkbox"/>
<span className="text-xs font-medium text-gray-500 group-hover:text-amber-600 transition-colors">Chưa chắc chắn</span>
</label>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-yellow-50 hover:border-yellow-200 hover:text-yellow-700 text-xs font-medium text-gray-600 transition-colors bg-white shadow-sm">
<span className="iconify text-yellow-500" data-icon="lucide:lightbulb" data-width="14"></span>
                                    Gợi ý
                                </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-xs font-medium text-gray-600 transition-colors bg-white shadow-sm">
<span className="iconify text-gray-400" data-icon="lucide:message-square" data-width="14"></span>
                                    Góp ý
                                </button>
</div>
</div>

<div className="p-6 md:p-8">
<h3 className="text-base font-medium text-gray-900 leading-relaxed mb-6">
                                Thành phần bắt buộc phải có trong mọi chương trình C++?
                            </h3>

<div className="relative group mb-8">
<div className="bg-gray-50 rounded-xl border border-gray-200 p-5 font-mono text-sm leading-6 overflow-x-auto custom-scroll">
<pre><code><span className="text-purple-600">#include</span> <span className="text-green-600">&lt;iostream&gt;</span>
<span className="text-purple-600">using namespace</span> std;

<span className="text-blue-600">int</span> <span className="text-yellow-600">main</span>() {
    cout &lt;&lt; <span className="text-green-600">"Hello C++"</span>;
    <span className="text-purple-600">return</span> <span className="text-orange-600">0</span>;
}</code></pre>
</div>
</div>

<div className="space-y-3">

<label className="group relative block cursor-pointer">
<input checked="" className="peer sr-only" name="q1" type="radio"/>
<div className="flex items-center p-4 rounded-xl border-2 bg-emerald-50/30 border-emerald-500 shadow-sm transition-all">
<div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border border-emerald-500 bg-emerald-500 text-white transition-all mr-4 shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-white"></div>
</div>
<div className="flex-1">
<span className="text-[15px] font-medium text-gray-900">
                                                A. Thư viện #include &lt;iostream&gt;
                                            </span>
</div>
</div>
</label>

<label className="group relative block cursor-pointer">
<input className="peer sr-only" name="q1" type="radio"/>
<div className="flex items-center p-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 peer-checked:bg-emerald-50/30 peer-checked:border-emerald-500 transition-all">
<div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 text-white transition-all mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1">
<span className="text-[15px] font-medium text-gray-700 group-hover:text-gray-900">
                                                B. Hàm main()
                                            </span>
</div>
</div>
</label>

<label className="group relative block cursor-pointer">
<input className="peer sr-only" name="q1" type="radio"/>
<div className="flex items-center p-4 rounded-xl border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 peer-checked:bg-emerald-50/30 peer-checked:border-emerald-500 transition-all">
<div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 peer-checked:border-emerald-500 peer-checked:bg-emerald-500 text-white transition-all mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<div className="flex-1">
<span className="text-[15px] font-medium text-gray-700 group-hover:text-gray-900">
                                                C. Hàm std::cout
                                            </span>
</div>
</div>
</label>
</div>
</div>

<div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
<button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded-lg cursor-not-allowed shadow-sm opacity-60" disabled="">
<span className="iconify" data-icon="lucide:chevron-left" data-width="14"></span>
                                Trước
                            </button>
<button className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 active:scale-95">
                                Tiếp
                                <span className="iconify" data-icon="lucide:chevron-right" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>

<footer className="absolute bottom-0 w-full bg-white border-t border-gray-200 h-14 flex items-center justify-between px-4 sm:px-6 z-40">

<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-gray-900 text-white rounded-full px-3 py-1.5 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] font-bold tracking-wide uppercase">Rendering ...</span>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<button className="w-10 h-10 flex items-center justify-center text-sm font-bold text-white bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/30 ring-4 ring-white z-10 relative transition-transform hover:scale-110">
                            1
                        </button>
<div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm z-20">
<span className="iconify text-blue-500" data-icon="lucide:check-circle" data-width="14"></span>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<span className="text-xs font-medium text-gray-500 hidden sm:inline-block">1-1 / 1</span>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center text-gray-400 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:text-gray-600 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<button className="w-8 h-8 flex items-center justify-center text-gray-400 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:text-gray-600 transition-colors shadow-sm">
<span className="iconify" data-icon="lucide:chevrons-right" data-width="16"></span>
</button>
</div>
</div>
</footer>
</main>
</div>

    </>
  );
}
