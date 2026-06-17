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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      });
    
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="h-16 flex items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-slate-900 via-indigo-700 to-violet-700 text-white flex items-center justify-center tracking-tight text-sm font-medium shadow-sm">
              P
            </div>
<span className="text-slate-900 font-medium tracking-tight">
              Parendar
            </span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#features">
              功能特色
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#preview">
              示意圖
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#waitlist">
              搶先體驗
            </a>
</nav>
<a className="inline-flex items-center gap-2 h-10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:from-indigo-700 hover:via-violet-700 hover:to-fuchsia-700 rounded-lg pr-4 pl-4 shadow-sm shadow-violet-200/60" href="#waitlist">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
            搶先體驗
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-32 -right-24 h-80 w-80 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-sky-200 via-indigo-200 to-fuchsia-200"></div>
<div className="absolute -bottom-28 -left-20 h-96 w-96 rounded-full blur-3xl opacity-60 bg-gradient-to-br from-fuchsia-200 via-rose-200 to-amber-200"></div>
</div>
<div className="max-w-7xl md:pt-20 md:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-10 mr-auto ml-auto pt-14 pr-6 pb-10 pl-6">

<div className="flex flex-col justify-center">
<div className="inline-flex gap-2 w-fit text-xs text-slate-600 bg-white/80 backdrop-blur border-slate-200 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm items-center">
            從懷孕到幼兒園的每個重要任務
            <svg className="lucide lucide-calendar-days w-3.5 h-3.5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
</div>
<h1 className="md:text-5xl text-4xl font-semibold tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-fuchsia-700">
            Parendar 育兒任務日曆
          </h1>
<p className="leading-relaxed text-slate-700 mt-4">
            幫你記住從懷孕到幼兒園的每個重要任務
          </p>
<p className="text-[15px] leading-7 text-slate-700 mt-6">
            從產檢、疫苗、補助申請到幼兒園報名，Parendar
            自動為你整理每階段的提醒日曆與專屬 PDF。

            <span className="text-slate-600"></span>
</p>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-8 items-stretch">
<a className="group inline-flex items-center justify-center gap-2 h-11 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 hover:from-indigo-700 hover:via-violet-700 hover:to-fuchsia-700 rounded-lg pr-5 pl-5 shadow-md shadow-violet-200/60 hover:shadow-lg hover:-translate-y-0.5" href="#waitlist">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              📩 搶先體驗 → 留下 Email，我們會第一時間通知你！
            </a>
<a className="inline-flex items-center justify-center gap-2 h-11 hover:border-slate-300 hover:bg-slate-50 transition-colors text-sm text-slate-700 bg-white border-slate-300 border rounded-lg pr-5 pl-5" href="#preview">
<svg className="lucide lucide-file-text w-4.5 h-4.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
              查看示意圖
            </a>
</div>
<div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
<div className="inline-flex gap-1.5 bg-white border-slate-200 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 items-center shadow-sm">
              已有超過
              <span className="text-slate-900 font-medium">150</span>
              位爸媽加入候補名單
              <svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div className="hidden sm:block h-4 w-px bg-slate-200"></div>
<div className="hidden sm:flex gap-1.5 items-center">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Email 僅用於內部通知，不會外洩
            </div>
</div>
</div>

<div className="relative" id="preview">
<div className="relative z-10" id="aura-emf5l381k">


</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="features">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<h2 className="md:text-3xl text-2xl font-semibold text-slate-900 tracking-tight">
          為什麼選擇 Parendar？
        </h2>
<p className="mt-3 text-slate-700">Parendar 能為你做到：</p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-hourglass w-4.5 h-4.5" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 22h14"></path>
<path d="M5 2h14"></path>
<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
<path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
</svg>
</div>
<div className="">
<p className="font-medium text-slate-900">自動產出提醒日曆</p>
<p className="mt-1 text-sm text-slate-600">
                  依預產期／寶寶生日自動排程，重點不漏接。
                </p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-check-circle-2 w-4.5 h-4.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<p className="font-medium text-slate-900">覆蓋全關鍵任務</p>
<p className="mt-1 text-sm text-slate-600">
                  產檢、疫苗、政府補助、托嬰／幼兒園等一次整理。
                </p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-map-pin w-4.5 h-4.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div className="">
<p className="font-medium text-slate-900">在地化建議</p>
<p className="mt-1 text-sm text-slate-600">
                  依所在地提供月子中心、補助申請時程等資訊。
                </p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-bell-ring w-4.5 h-4.5" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M22 8c0-2.3-.8-4.3-2-6"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
<path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
</svg>
</div>
<div>
<p className="font-medium text-slate-900">提前提醒</p>
<p className="mt-1 text-sm text-slate-600">
                  Email 或行事曆提醒，關鍵時間點不錯過。
                </p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-file-down w-4.5 h-4.5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M12 18v-6"></path>
<path d="m9 15 3 3 3-3"></path>
</svg>
</div>
<div className="">
<p className="font-medium text-slate-900">彈性匯出</p>
<p className="mt-1 text-sm text-slate-600">
                  匯出 PDF 或匯入 Google / iOS 行事曆 (.ics)。
                </p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div>
<p className="font-medium text-slate-900">清楚好讀</p>
<p className="mt-1 text-sm text-slate-600">
                  每階段任務、所需文件與截止時間一目了然。
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/60" id="waitlist">
<div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
<div className="md:p-8 bg-white border-slate-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center">
<svg className="lucide lucide-inbox w-4.5 h-4.5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
<path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
</svg>
</div>
<div className="flex-1">
<h3 className="text-xl md:text-2xl tracking-tight text-slate-900 font-semibold">
                📩 搶先體驗
              </h3>
<p className="mt-2 text-slate-700 text-[15px]">
                留下 Email，我們 MVP 上線會第一時間通知你！
              </p>
<div className="mt-5">

<div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
<iframe className="" data-tally-src="https://tally.so/r/xxxxxx" frameborder="0" height="500" loading="lazy" marginheight="0" marginwidth="0" title="Parendar 表單" width="100%"></iframe>
</div>
<p className="mt-3 text-xs text-slate-500">
                  等你完成 Tally 表單後，請把上述連結 https://tally.so/r/xxxxxx
                  換成正式連結。
                </p>
</div>
</div>
</div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
<div className="inline-flex items-start gap-2">
<svg className="lucide lucide-shield w-4.5 h-4.5 text-slate-700 mt-0.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
<p className="text-slate-700">
                🔐 您的 email 僅用於內部通知與體驗邀請，不會外洩、不會發送廣告。
              </p>
</div>
<div className="inline-flex items-start gap-2">
<svg className="lucide lucide-heart w-4.5 h-4.5 text-slate-700 mt-0.5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
<p className="text-slate-700">
                👶 專為台灣爸媽設計，已有超過 150 位爸媽加入候補名單。
              </p>
</div>
<div className="inline-flex items-start gap-2">
<svg className="lucide lucide-send w-4.5 h-4.5 text-slate-700 mt-0.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
<p className="text-slate-700">
                💌 現在留下 email，我們 MVP 上線會第一時間通知你！
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-slate-900 via-indigo-700 to-violet-700 text-white flex items-center justify-center tracking-tight text-sm font-medium shadow-sm">
              P
            </div>
<div className="">
<p className="text-slate-900 font-medium tracking-tight">Parendar</p>
<p className="text-xs text-slate-500 mt-0.5">
                © 2025 Parendar.
                所有內容僅供參考，實際提醒時間與建議會依所在地與法規更新。
              </p>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#features">
              功能特色
            </a>
<a className="hover:text-slate-900 transition-colors" href="#preview">
              示意圖
            </a>
<a className="hover:text-slate-900 transition-colors" href="#waitlist">
              搶先體驗
            </a>
</div>
</div>
</div>
</footer>




    </>
  );
}
