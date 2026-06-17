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
      

<div className="fixed inset-0 bg-gray-900/20 z-20 hidden lg:hidden backdrop-blur-sm" id="sidebarOverlay"></div>

<aside className="w-64 bg-white border-r border-gray-200/60 flex-col fixed inset-y-0 left-0 z-30 transform -translate-x-full lg:translate-x-0 transition-transform duration-200 ease-in-out h-full flex overflow-y-auto no-scrollbar shadow-[4px_0_24px_-2px_rgba(0,0,0,0.02)]">
<div className="p-6">
<h1 className="text-lg font-medium tracking-tight text-gray-900 flex items-center gap-2">
<span className="font-semibold tracking-tighter">digit</span>
</h1>
</div>
<nav className="flex-1 py-2 px-4 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-gray-50 text-gray-900" href="#">
<iconify-icon className="text-lg text-gray-900" icon="solar:widget-linear"></iconify-icon>
                サマリ
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-2-linear"></iconify-icon>
                日別 累計
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:list-linear"></iconify-icon>
                日別_詳細
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                月別
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
                月別 前年度比較
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-linear"></iconify-icon>
                メディア別
            </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium text-gray-400">Assets</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:gallery-wide-linear"></iconify-icon>
                クリエイティブ
            </a>
<div className="pt-6 pb-2 px-3 text-xs font-medium text-gray-400">Management</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:megaphone-linear"></iconify-icon>
                広告
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:flag-linear"></iconify-icon>
                キャンペーン
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:copy-linear"></iconify-icon>
                コピー
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:layers-linear"></iconify-icon>
                広告グループ
            </a>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden w-full lg:pl-64 bg-[#f4f5f7]">

<header className="flex-shrink-0 bg-white border-b border-gray-200/60 h-14 px-4 sm:px-8 flex items-center justify-between z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="lg:hidden text-gray-500 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
<div className="flex items-center gap-3">
<h2 className="text-sm font-medium text-gray-900">サマリ</h2>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 transition-colors shadow-sm">
<iconify-icon className="text-base text-gray-500" icon="solar:calendar-linear"></iconify-icon>
<span>Sep 1, 2025 - Oct 31, 2025</span>
<iconify-icon className="text-xs text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-[1600px] mx-auto space-y-8">

<div className="flex flex-wrap gap-4 overflow-x-auto no-scrollbar pb-2 items-center">

<div className="relative group min-w-[140px]">
<select className="appearance-none w-full bg-white border border-gray-200/80 rounded-lg pl-3 pr-8 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 shadow-sm transition-all cursor-pointer">
<option>プロジェクト名</option>
<option>Project Alpha</option>
<option>Project Beta</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="relative group min-w-[140px]">
<select className="appearance-none w-full bg-white border border-gray-200/80 rounded-lg pl-3 pr-8 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 shadow-sm transition-all cursor-pointer">
<option>アカウント名</option>
<option>Account A</option>
<option>Account B</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="relative group min-w-[140px]">
<select className="appearance-none w-full bg-white border border-gray-200/80 rounded-lg pl-3 pr-8 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 shadow-sm transition-all cursor-pointer">
<option>メディア名</option>
<option>Meta</option>
<option>Google</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<div className="relative group min-w-[140px]">
<select className="appearance-none w-full bg-white border border-gray-200/80 rounded-lg pl-3 pr-8 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500/50 shadow-sm transition-all cursor-pointer">
<option>キャンペーン名</option>
<option>Spring Sale</option>
<option>Winter Promo</option>
</select>
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 pointer-events-none group-hover:text-gray-600 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:wad-of-money-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">広告費</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">¥102,948,754</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
                            53.0%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:monitor-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">impressions</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">379,989,370</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
                            208.6%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">ROAS</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">131.64%</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon>
                            -51.6%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:cursor-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">clicks</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">1,469,787</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon>
                            -8.2%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:target-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">CTR</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">0.39%</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon>
                            -70.3%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:tag-price-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">CPC</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">¥70</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
                            66.7%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:bag-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">purchase</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">16,927</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon>
                            -16.9%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:filter-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">CVR</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">1.15%</div>
<div className="flex items-center gap-1 mt-1 text-rose-500 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon>
                            -9.5%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:bill-check-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">CPA</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">¥6,082</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
                            84.1%
                        </div>
</div>

<div className="group bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 p-5 hover:shadow-md hover:shadow-gray-200/50 transition-all">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:eye-linear"></iconify-icon>
<span className="text-xs text-gray-400 font-medium">CPM</span>
</div>
<div className="text-lg font-medium tracking-tight text-gray-900">¥270</div>
<div className="flex items-center gap-1 mt-1 text-emerald-600 text-xs font-medium">
<iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon>
                            12.4%
                        </div>
</div>
</div>

<div className="space-y-8">

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50">
<div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-wider font-medium text-gray-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-900 rounded-full"></div>
<span>広告費</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 border border-orange-500 rounded-full"></div>
<span>purchase</span>
</div>
</div>
<div className="relative h-48 w-full">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="
                                    M1,45 V38 h0.6 V45 M3,45 V25 h0.6 V45 M5,45 V28 h0.6 V45 M7,45 V32 h0.6 V45 M9,45 V35 h0.6 V45 
                                    M11,45 V40 h0.6 V45 M13,45 V38 h0.6 V45 M15,45 V30 h0.6 V45 M17,45 V22 h0.6 V45 M19,45 V18 h0.6 V45 
                                    M21,45 V15 h0.6 V45 M23,45 V19 h0.6 V45 M25,45 V25 h0.6 V45 M27,45 V35 h0.6 V45 M29,45 V38 h0.6 V45 
                                    M31,45 V42 h0.6 V45 M33,45 V40 h0.6 V45 M35,45 V32 h0.6 V45 M37,45 V28 h0.6 V45 M39,45 V20 h0.6 V45
                                    M41,45 V15 h0.6 V45 M43,45 V12 h0.6 V45 M45,45 V18 h0.6 V45 M47,45 V25 h0.6 V45 M49,45 V30 h0.6 V45 
                                    M51,45 V35 h0.6 V45 M53,45 V38 h0.6 V45 M55,45 V32 h0.6 V45 M57,45 V22 h0.6 V45 M59,45 V25 h0.6 V45 
                                    M61,45 V20 h0.6 V45 M63,45 V15 h0.6 V45 M65,45 V12 h0.6 V45 M67,45 V18 h0.6 V45 M69,45 V22 h0.6 V45 
                                    M71,45 V28 h0.6 V45 M73,45 V35 h0.6 V45 M75,45 V40 h0.6 V45 M77,45 V42 h0.6 V45 M79,45 V38 h0.6 V45
                                    M81,45 V32 h0.6 V45 M83,45 V25 h0.6 V45 M85,45 V20 h0.6 V45 M87,45 V15 h0.6 V45 M89,45 V18 h0.6 V45 
                                    M91,45 V22 h0.6 V45 M93,45 V28 h0.6 V45 M95,45 V35 h0.6 V45 M97,45 V40 h0.6 V45 M99,45 V38 h0.6 V45
                                    " fill="#1e3a8a" opacity="0.9" stroke="none"></path>

<path d="M1,35 L5,28 L10,32 L15,25 L20,18 L25,22 L30,30 L35,28 L40,20 L45,15 L50,22 L55,28 L60,25 L65,18 L70,20 L75,30 L80,35 L85,25 L90,20 L95,25 L99,30" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>
<circle cx="90" cy="20" fill="#fff" r="0.8" stroke="#f97316" strokeWidth="0.5"></circle>
</svg>
<div className="absolute bottom-0 w-full flex justify-between text-[10px] text-gray-400 mt-2">
<span>Sep 1</span>
<span>Sep 17</span>
<span>Oct 3</span>
<span>Oct 19</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50">
<div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-wider font-medium text-gray-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-900 rounded-full"></div>
<span>imp</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 border border-orange-500 rounded-full"></div>
<span>CPM</span>
</div>
</div>
<div className="relative h-48 w-full">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="
                                     M2,45 V35 h0.6 V45 M4,45 V30 h0.6 V45 M6,45 V25 h0.6 V45 M8,45 V20 h0.6 V45 M10,45 V22 h0.6 V45 
                                     M12,45 V28 h0.6 V45 M14,45 V32 h0.6 V45 M16,45 V38 h0.6 V45 M18,45 V40 h0.6 V45 M20,45 V35 h0.6 V45 
                                     M22,45 V30 h0.6 V45 M24,45 V25 h0.6 V45 M26,45 V18 h0.6 V45 M28,45 V15 h0.6 V45 M30,45 V20 h0.6 V45 
                                     M32,45 V25 h0.6 V45 M34,45 V30 h0.6 V45 M36,45 V35 h0.6 V45 M38,45 V40 h0.6 V45 M40,45 V38 h0.6 V45 
                                     M42,45 V32 h0.6 V45 M44,45 V28 h0.6 V45 M46,45 V22 h0.6 V45 M48,45 V18 h0.6 V45 M50,45 V15 h0.6 V45 
                                     M52,45 V20 h0.6 V45 M54,45 V25 h0.6 V45 M56,45 V30 h0.6 V45 M58,45 V35 h0.6 V45 M60,45 V40 h0.6 V45 
                                     M62,45 V38 h0.6 V45 M64,45 V32 h0.6 V45 M66,45 V28 h0.6 V45 M68,45 V22 h0.6 V45 M70,45 V18 h0.6 V45 
                                     M72,45 V20 h0.6 V45 M74,45 V25 h0.6 V45 M76,45 V30 h0.6 V45 M78,45 V35 h0.6 V45 M80,45 V40 h0.6 V45 
                                     M82,45 V38 h0.6 V45 M84,45 V32 h0.6 V45 M86,45 V28 h0.6 V45 M88,45 V22 h0.6 V45 M90,45 V18 h0.6 V45 
                                     M92,45 V20 h0.6 V45 M94,45 V25 h0.6 V45 M96,45 V30 h0.6 V45 M98,45 V35 h0.6 V45
                                     " fill="#1e3a8a" opacity="0.9" stroke="none"></path>

<path d="M2,30 L8,25 L15,35 L22,28 L30,22 L38,30 L45,25 L52,18 L60,20 L68,28 L75,32 L82,25 L90,20 L98,15" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>
</svg>
<div className="absolute bottom-0 w-full flex justify-between text-[10px] text-gray-400 mt-2">
<span>Sep 1</span>
<span>Sep 17</span>
<span>Oct 3</span>
<span>Oct 19</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50">
<div className="flex items-center gap-6 mb-4 text-[10px] uppercase tracking-wider font-medium text-gray-400">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div><span>clicks</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 border border-orange-500 rounded-full"></div><span>CTR</span></div>
</div>
<div className="h-24 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">

<path d="
                                    M2,40 V32 h0.8 V40 M6,40 V28 h0.8 V40 M10,40 V20 h0.8 V40 M14,40 V25 h0.8 V40 M18,40 V30 h0.8 V40 
                                    M22,40 V35 h0.8 V40 M26,40 V38 h0.8 V40 M30,40 V32 h0.8 V40 M34,40 V28 h0.8 V40 M38,40 V22 h0.8 V40 
                                    M42,40 V18 h0.8 V40 M46,40 V15 h0.8 V40 M50,40 V20 h0.8 V40 M54,40 V25 h0.8 V40 M58,40 V30 h0.8 V40 
                                    M62,40 V35 h0.8 V40 M66,40 V38 h0.8 V40 M70,40 V32 h0.8 V40 M74,40 V28 h0.8 V40 M78,40 V22 h0.8 V40 
                                    M82,40 V18 h0.8 V40 M86,40 V20 h0.8 V40 M90,40 V25 h0.8 V40 M94,40 V30 h0.8 V40 M98,40 V35 h0.8 V40
                                    " fill="#1e3a8a" opacity="0.8"></path>

<path d="M0,28 L5,25 L10,30 L15,22 L20,18 L25,25 L30,32 L35,28 L40,20 L45,15 L50,22 L55,28 L60,35 L65,30 L70,25 L75,20 L80,18 L85,22 L90,28 L95,32 L100,28" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>
</svg>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50">
<div className="flex items-center gap-6 mb-4 text-[10px] uppercase tracking-wider font-medium text-gray-400">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-900 rounded-full"></div><span>purchase</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 border border-orange-500 rounded-full"></div><span>CVR</span></div>
</div>
<div className="h-24 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">

<path d="
                                    M3,40 V30 h0.8 V40 M7,40 V25 h0.8 V40 M11,40 V20 h0.8 V40 M15,40 V22 h0.8 V40 M19,40 V28 h0.8 V40 
                                    M23,40 V32 h0.8 V40 M27,40 V35 h0.8 V40 M31,40 V38 h0.8 V40 M35,40 V30 h0.8 V40 M39,40 V25 h0.8 V40 
                                    M43,40 V20 h0.8 V40 M47,40 V18 h0.8 V40 M51,40 V15 h0.8 V40 M55,40 V20 h0.8 V40 M59,40 V25 h0.8 V40 
                                    M63,40 V30 h0.8 V40 M67,40 V35 h0.8 V40 M71,40 V38 h0.8 V40 M75,40 V32 h0.8 V40 M79,40 V28 h0.8 V40 
                                    M83,40 V22 h0.8 V40 M87,40 V18 h0.8 V40 M91,40 V20 h0.8 V40 M95,40 V25 h0.8 V40 M99,40 V30 h0.8 V40
                                    " fill="#1e3a8a" opacity="0.8"></path>

<path d="M0,25 L5,22 L10,28 L15,32 L20,25 L25,18 L30,20 L35,28 L40,30 L45,25 L50,20 L55,15 L60,18 L65,22 L70,28 L75,30 L80,25 L85,20 L90,22 L95,25 L100,20" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>
</svg>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50">
<div className="flex items-center gap-6 mb-4 text-[10px] uppercase tracking-wider font-medium text-gray-400">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 border border-blue-900 rounded-full"></div><span>CPA</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 border border-orange-500 rounded-full"></div><span>CPC</span></div>
</div>
<div className="h-24 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">

<path d="M0,30 L5,28 L10,32 L15,25 L20,22 L25,28 L30,35 L35,30 L40,25 L45,20 L50,22 L55,28 L60,32 L65,35 L70,30 L75,25 L80,20 L85,18 L90,22 L95,25 L100,28" fill="none" stroke="#1e3a8a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>

<path d="M0,25 L5,22 L10,20 L15,18 L20,22 L25,25 L30,28 L35,32 L40,28 L45,25 L50,20 L55,18 L60,22 L65,25 L70,28 L75,22 L80,18 L85,15 L90,18 L95,20 L100,22" fill="none" stroke="#f97316" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75"></path>
</svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl border border-transparent shadow-sm shadow-gray-200/50 xl:col-span-1">
<h3 className="text-xs font-medium text-gray-400 mb-8 tracking-wide">メディア別内訳</h3>
<div className="flex flex-col items-center">
<div className="relative w-48 h-48">

<div className="w-full h-full rounded-full" style={{background: 'conic-gradient(#bfdbfe 0% 38%, #1d4ed8 38% 54%, #e5e7eb 54% 71%, #fdba74 71% 83%, #1e3a8a 83% 100%)'}}></div>

<div className="absolute inset-0 m-auto w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
<span className="text-[10px] text-gray-400 uppercase tracking-widest">Total</span>
<span className="text-sm font-semibold text-gray-900 mt-1">102,948,754</span>
</div>
</div>
<div className="flex gap-6 mt-8 text-[10px] text-gray-500 uppercase tracking-wider">
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-200"></div>Meta</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-gray-200"></div>TikTok</div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-700"></div>X</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-transparent shadow-sm shadow-gray-200/50 xl:col-span-2 overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-right">
<thead className="bg-white text-[11px] font-bold text-gray-500 border-b border-gray-100">
<tr>
<th className="px-6 py-4 text-left">メディア名</th>
<th className="px-4 py-4 whitespace-nowrap">広告費 <span className="text-[9px] align-middle">▼</span></th>
<th className="px-4 py-4">impressions</th>
<th className="px-4 py-4">clicks</th>
<th className="px-4 py-4">CTR</th>
<th className="px-4 py-4">CPC</th>
<th className="px-4 py-4">purchase</th>
<th className="px-4 py-4">CVR</th>
<th className="px-4 py-4">CPA</th>
<th className="px-4 py-4">ROAS</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-5 text-xs text-gray-600">
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-left font-medium text-gray-900">Meta</td>
<td className="px-4 py-3">¥39,158,167 <span className="text-orange-500 font-bold ml-1">▮</span></td>
<td className="px-4 py-3">123,496,299 <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3 bg-blue-50/50 text-gray-700">330,577</td>
<td className="px-4 py-3">+0... <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3 bg-blue-50/50 text-gray-700">¥118</td>
<td className="px-4 py-3 bg-blue-50/50 text-gray-700">4,047</td>
<td className="px-4 py-3">1% <span className="text-blue-900 font-bold ml-1">▮</span></td>
<td className="px-4 py-3 bg-blue-50/50 text-gray-700">¥9,676</td>
<td className="px-4 py-3">96.22%</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-left font-medium text-gray-900">TikTok</td>
<td className="px-4 py-3">¥17,881,770 <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3">50,269,163</td>
<td className="px-4 py-3">105,719</td>
<td className="px-4 py-3">0.21% <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3 text-gray-500">¥169</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-left font-medium text-gray-900">X</td>
<td className="px-4 py-3">¥15,746,141 <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3">89,939,352</td>
<td className="px-4 py-3">209,153</td>
<td className="px-4 py-3">0.23% <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3 text-gray-500">¥75</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
<td className="px-4 py-3 text-gray-300">-</td>
</tr>
<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-left font-medium text-gray-900">Google Search</td>
<td className="px-4 py-3">¥12,022,353 <span className="text-orange-500 font-bold ml-1">|</span></td>
<td className="px-4 py-3">422,044</td>
<td className="px-4 py-3">110,226</td>
<td className="px-4 py-3">26.12% <span className="text-orange-500 font-bold ml-1">▇</span></td>
<td className="px-4 py-3 text-gray-500">¥109</td>
<td className="px-4 py-3">4,020</td>
<td className="px-4 py-3">3.65% <span className="text-blue-900 font-bold ml-1">▇</span></td>
<td className="px-4 py-3 text-gray-500">¥2,990</td>
<td className="px-4 py-3">307.18%</td>
</tr>

<tr className="bg-gray-50/50 font-medium text-gray-900">
<td className="px-6 py-3 text-left">Grand total</td>
<td className="px-4 py-3">¥102,948,7...</td>
<td className="px-4 py-3">379,989,3...</td>
<td className="px-4 py-3">1,469,787</td>
<td className="px-4 py-3">+0%</td>
<td className="px-4 py-3">¥70</td>
<td className="px-4 py-3">16,92...</td>
<td className="px-4 py-3">1%</td>
<td className="px-4 py-3">¥6,082</td>
<td className="px-4 py-3">131.64%</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 mt-auto">
<span>Showing 1-13 of 13</span>
<div className="flex items-center gap-2">
<button className="hover:text-gray-900 disabled:opacity-50 transition-colors"><iconify-icon className="text-sm" icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<button className="hover:text-gray-900 disabled:opacity-50 transition-colors"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-center text-[10px] text-gray-400 mt-12 pt-6 border-t border-gray-200/60">
<span>Data Last Updated: 2/17/2026 12:14:26 PM</span>
<a className="hover:text-gray-500 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</main>

    </>
  );
}
