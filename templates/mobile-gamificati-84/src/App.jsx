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
      

<div className="w-full max-w-sm h-[850px] bg-white sm:rounded-[2rem] sm:border sm:border-zinc-200 relative overflow-hidden flex flex-col shadow-2xl">

<header className="pt-12 pb-2 px-6 bg-white/90 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center justify-between mb-6">
<h1 className="text-xl font-bold tracking-tight text-zinc-900">미션</h1>

<div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
<div className="bg-yellow-400 w-4 h-4 rounded-full flex items-center justify-center text-white shadow-sm text-[8px]">
                        mg
                    </div>
<span className="text-xs font-semibold tracking-tight tabular-nums">14,250</span>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-5 text-white relative overflow-hidden shadow-lg mb-2">

<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500 rounded-full blur-[60px] opacity-20 translate-x-10 -translate-y-10"></div>
<div className="flex justify-between items-start relative z-10 mb-4">
<div>
<p className="text-xs text-zinc-400 font-medium mb-1">일일 목표 달성</p>
<h2 className="text-lg font-bold tracking-tight">3/5 완료</h2>
</div>
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-yellow-400" data-lucide="gift" strokeWidth="1.5"></i>
</div>
</div>

<div className="space-y-2 relative z-10">
<div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-yellow-300 to-yellow-500 w-[60%] rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-400 font-medium">
<span>현재 3개</span>
<span className="text-yellow-400">목표 5개</span>
</div>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar bg-white">

<div className="sticky top-0 bg-white z-10 px-6 py-2 border-b border-zinc-100">
<div className="flex p-1 bg-zinc-100 rounded-xl">
<button className="flex-1 py-2 rounded-lg bg-white text-xs font-semibold shadow-sm text-zinc-900 transition-all">일일 미션</button>
<button className="flex-1 py-2 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-700 transition-all">주간 도전</button>
<button className="flex-1 py-2 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-700 transition-all">업적</button>
</div>
</div>
<div className="p-6 space-y-4">

<div className="flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="sun" strokeWidth="1.5"></i>
<span className="text-xs font-semibold text-zinc-900">오늘의 할 일</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl border border-yellow-200 bg-yellow-50/30">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
<i className="w-5 h-5" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-semibold text-zinc-900 truncate">출석 체크</h3>
<p className="text-xs text-zinc-500 mt-0.5">매일 접속하고 보상 받기</p>
</div>
<button className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm shadow-yellow-200 transition-colors animate-pulse">
                        받기
                    </button>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 bg-white shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 border border-zinc-100">
<i className="w-5 h-5" data-lucide="play-circle" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-medium text-zinc-900">광고 시청하기</h3>
<span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">2/5</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[40%] rounded-full"></div>
</div>
</div>
<button className="flex-shrink-0 border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">
                        이동
                    </button>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 bg-white shadow-sm">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 border border-zinc-100">
<i className="w-5 h-5" data-lucide="egg" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<h3 className="text-sm font-medium text-zinc-900">황금알 수확</h3>
<span className="text-[10px] font-medium text-zinc-400">0/3</span>
</div>
<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-300 w-0 rounded-full"></div>
</div>
</div>
<button className="flex-shrink-0 border border-zinc-200 text-zinc-600 hover:bg-zinc-50 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors">
                        이동
                    </button>
</div>

<div className="h-px bg-zinc-100 my-2"></div>

<div className="flex items-center gap-2 mt-6">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-xs font-semibold text-zinc-900">완료된 미션</span>
</div>

<div className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 bg-zinc-50/50 opacity-60">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-zinc-900 line-through decoration-zinc-400">친구 초대하기</h3>
<p className="text-xs text-zinc-400">보상 지급 완료</p>
</div>
<div className="flex-shrink-0 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-[10px] font-bold">
                        DONE
                    </div>
</div>
</div>

<div className="h-24"></div>
</main>

<nav className="absolute bottom-0 w-full bg-white/90 backdrop-blur-xl border-t border-zinc-200 pb-6 pt-3 px-6 z-30">
<ul className="flex justify-between items-center">

<li className="flex flex-col items-center gap-1 w-12 group">
<button className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</button>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-600">홈</span>
</li>

<li className="flex flex-col items-center gap-1 w-12">
<button className="text-zinc-900">
<i className="w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</button>
<span className="text-[10px] font-medium text-zinc-900">미션</span>
</li>

<li className="relative -top-5">
<button className="bg-zinc-900 rounded-full p-3 shadow-lg shadow-zinc-200 text-white hover:scale-105 transition-transform">
<i className="w-6 h-6" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</li>

<li className="flex flex-col items-center gap-1 w-12 group">
<button className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</button>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-600">친구</span>
</li>

<li className="flex flex-col items-center gap-1 w-12 group">
<button className="text-zinc-400 group-hover:text-zinc-600 transition-colors">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</button>
<span className="text-[10px] font-medium text-zinc-400 group-hover:text-zinc-600">MY</span>
</li>
</ul>
</nav>
</div>


    </>
  );
}
