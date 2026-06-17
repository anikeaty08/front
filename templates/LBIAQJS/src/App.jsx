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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        const state = {
          part: 'p1',
          type: '人物'
        };

        const partButtons = Array.from(document.querySelectorAll('.tab-part'));
        const typeButtons = Array.from(document.querySelectorAll('.tab-type'));
        const cards = Array.from(document.querySelectorAll('.topic-card'));
        const summary = document.getElementById('filterSummary');

        function setActive(group, key, value) {
          const isPart = group === 'part';
          const buttons = isPart ? partButtons : typeButtons;

          buttons.forEach(btn => {
            const match = (isPart ? btn.dataset.part : btn.dataset.type) === value;
            btn.setAttribute('aria-pressed', match ? 'true' : 'false');

            if (isPart) {
              // Underline nav style for Part tabs
              btn.classList.toggle('text-white', match);
              btn.classList.toggle('text-white/70', !match);
              btn.classList.toggle('hover:text-white/90', !match);
              btn.classList.toggle('border-[#77ca3e]', match);
              btn.classList.toggle('border-transparent', !match);
            } else {
              // Keep pill style for Type tabs
              if (match) {
                btn.classList.remove('bg-transparent','text-white/70','ring-white/10','hover:bg-white/5');
                btn.classList.add('bg-[#77ca3e]/15','text-[#77ca3e]','ring-[#77ca3e]/40');
              } else {
                btn.classList.add('bg-transparent','text-white/70','ring-white/10','hover:bg-white/5');
                btn.classList.remove('bg-[#77ca3e]/15','text-[#77ca3e]','ring-[#77ca3e]/40');
              }
            }
          });

          state[key] = value;
          applyFilter();
        }

        function applyFilter() {
          let visible = 0;
          cards.forEach(card => {
            const match = card.dataset.part === state.part && card.dataset.type === state.type;
            card.classList.toggle('hidden', !match);
            if (match) visible++;
          });
          summary.textContent = (state.part.toUpperCase() === 'P23' ? 'P2&3' : (state.part === 'p1' ? 'P1' : '串题助手')) + ' · ' + state.type + ' · 共 ' + visible + ' 道题';
        }

        partButtons.forEach(btn => {
          btn.addEventListener('click', () => setActive('part', 'part', btn.dataset.part));
        });
        typeButtons.forEach(btn => {
          btn.addEventListener('click', () => setActive('type', 'type', btn.dataset.type));
        });

        applyFilter();
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
      
<div className="max-w-md min-h-screen flex flex-col mr-auto ml-auto pb-6">

<div className="h-4 md:h-6"></div>

<header className="px-4">
<div className="flex items-center justify-between">
<button className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 transition-colors bg-white/5 hover:bg-white/10 ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-[20px] leading-tight tracking-tight font-semibold text-white/90">雅思口语练习</div>
<button className="inline-flex items-center justify-center w-9 h-9 rounded-full ring-1 transition-colors bg-white/5 hover:bg-white/10 ring-white/10 hover:ring-white/20">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<p className="mt-2 text-sm text-white/60">Hi, Tim 你已经努力练习了20天👏 加油！早日屠鸭成功 🎉
        </p>
</header>

<section className="mt-4 px-4">
<div className="rounded-2xl bg-[#161D26] ring-1 shadow-md ring-white/10 shadow-black/30">
<div className="flex items-center justify-between px-4 pt-3">
<span className="text-[15px] font-medium text-white/80">学习总览</span>
<button className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-[#77ca3e] hover:text-[#8ae451] active:opacity-90 transition-colors">
              查看更多
              <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-3 gap-3 p-4 pt-2">

<div className="rounded-xl ring-1 transition-colors p-3 flex items-center gap-3 bg-white/5 hover:bg-white/7 ring-white/10 hover:ring-white/20">
<div className="shrink-0 w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[11px] text-white/60">距离考试</div>
<div className="text-[17px] leading-none font-semibold tracking-tight text-[#77ca3e] mt-1" id="examDateText">33天</div>
</div>
</div>

<div className="rounded-xl ring-1 transition-colors p-3 flex items-center gap-3 bg-white/5 hover:bg-white/7 ring-white/10 hover:ring-white/20">
<div className="shrink-0 w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-target w-5 h-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="min-w-0">
<div className="text-[11px] text-white/60">目标分数</div>
<div className="text-[17px] leading-none font-semibold tracking-tight text-[#77ca3e] mt-1">7.5</div>
</div>
</div>

<div className="rounded-xl ring-1 transition-colors p-3 flex items-center gap-3 bg-white/5 hover:bg-white/7 ring-white/10 hover:ring-white/20">
<div className="shrink-0 w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg-white/5 ring-white/10">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="min-w-0">
<div className="text-[11px] text-white/60">练习进度</div>
<div className="text-[17px] leading-none font-semibold tracking-tight text-[#77ca3e] mt-1">68%</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-4 pr-4 pl-4">
<div className="grid grid-cols-2 gap-3">
<button className="transition-colors hover:bg-blue-300 text-black text-left bg-blue-400 opacity-0 rounded-2xl pt-4 pr-4 pb-4 pl-4" style={{animation: 'fadeInUp 0.6s ease-out 0.3s forwards'}}>
<div className="flex items-center justify-between mb-2">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs bg-blue-500 px-2 py-1 rounded-full">HOT</span>
</div>
<h3 className="font-semibold text-sm mb-1">快速串题</h3>
<p className="text-xs opacity-90">一个故事搞定多道题</p>
</button>
<button className="border p-4 rounded-2xl text-left transition-colors opacity-0 bg-black border-gray-800 text-gray-100 hover:bg-gray-950" style={{animation: 'fadeInUp 0.6s ease-out 0.35s forwards'}}>
<div className="flex items-center justify-between mb-2">
<svg className="lucide lucide-target w-6 h-6 text-gray-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-xs px-2 py-1 rounded-full bg-green-900 text-green-300">NEW</span>
</div>
<h3 className="font-semibold text-sm mb-1">模拟考试</h3>
<p className="text-xs text-gray-400">完整流程练习</p>
</button>
</div>
</section>

<section className="mt-4 pr-4 pl-4">
<div className="rounded-2xl bg-[#161D26] ring-1 shadow-md ring-white/10 shadow-black/30">
<div className="flex gap-3 pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="min-w-0">
<div className="text-[15px] font-medium text-white/80">串题助手</div>
<p className="mt-1 text-[12px] leading-relaxed text-white/60">一个故事搞定多道题</p>
</div>
<button className="shrink-0 inline-flex items-center gap-2 h-10 px-4 rounded-xl text-[13px] font-medium transition-colors ring-1 bg-[#77ca3e] hover:bg-[#8ae451] ring-[#77ca3e]/60 text-black/90">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              继续串题
            </button>
</div>
<div className="h-px bg-white/10"></div>
<div className="pt-3 pr-4 pb-4 pl-4">
<div className="flex gap-2 text-[12px] text-white/70 items-center">
<div className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-loader w-3.5 h-3.5" data-lucide="loader" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
                进行中 · 3 组
              </div>
<div className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ring-1 ring-white/10 bg-white/5">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                已完成 · 2 组
              </div>
</div>
</div>
</div>
</section>

<section className="mt-5 pr-4 pl-4 space-y-3">

<div>
<div className="grid grid-cols-3 gap-2 border-b border-white/10" id="partTabs">
<button aria-pressed="true" className="tab-part inline-flex items-center justify-center h-10 px-3 -mb-px text-[13px] font-medium transition-colors border-b-2 border-[#77ca3e] text-white" data-part="p1">
              P1
            </button>
<button aria-pressed="false" className="tab-part inline-flex items-center justify-center h-10 px-3 -mb-px text-[13px] font-medium transition-colors border-b-2 border-transparent text-white/70 hover:text-white/90" data-part="p23">
              P2&amp;3
            </button>
<button aria-pressed="false" className="tab-part inline-flex items-center justify-center h-10 px-3 -mb-px text-[13px] font-medium transition-colors border-b-2 border-transparent text-white/70 hover:text-white/90" data-part="assistant">
              自定义
            </button>
</div>
</div>

<div>
<div className="grid grid-cols-4 gap-2" id="typeTabs">
<button aria-pressed="false" className="tab-type inline-flex items-center justify-center h-8 rounded-xl text-[12px] font-medium transition-all ring-1 focus:outline-none focus:ring-2 focus:ring-[#77ca3e]/40 bg-transparent text-white/70 ring-white/10 hover:bg-white/5" data-type="人物">
              人物
            </button>
<button aria-pressed="false" className="tab-type inline-flex h-8 text-[12px] transition-all ring-1 focus:outline-none focus:ring-2 focus:ring-[#77ca3e]/40 font-medium rounded-xl items-center justify-center bg-transparent text-white/70 ring-white/10 hover:bg-white/5" data-type="事件">
              事件
            </button>
<button aria-pressed="true" className="tab-type inline-flex h-8 text-[12px] transition-all ring-1 focus:outline-none focus:ring-2 focus:ring-[#77ca3e]/40 ring-[#77ca3e]/40 font-medium text-[#77ca3e] bg-[#77ca3e]/15 rounded-xl items-center justify-center" data-type="新题">
              新题
            </button>
<button aria-pressed="false" className="tab-type inline-flex items-center justify-center h-8 rounded-xl text-[12px] font-medium transition-all ring-1 focus:outline-none focus:ring-2 focus:ring-[#77ca3e]/40 bg-transparent text-white/70 ring-white/10 hover:bg白/5" data-type="我的分组">
              我的分组
            </button>
</div>
</div>
</section><section className="mt-4 pr-4 pl-4">
<div className="rounded-2xl bg-[#161D26] ring-1 shadow-md ring-white/10 shadow-black/30">
</div>
</section>

<div className="flex mt-3 pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2 text-[13px] text-white/60">
<svg className="lucide lucide-x lucide-filter w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="" id="filterSummary">P1 · 人物 · 共 3 道题</span>
</div>
<button className="inline-flex gap-1.5 text-[13px] transition-colors hover:text白/90 text白/70 items-center">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg> 快速筛选
        </button>
</div>

<main className="mt-3 pr-4 pl-4">
<div className="grid grid-cols-2 gap-3" id="cardGrid">

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring-white/10 hover:ring-white/20 shadow-black/30" data-part="p1" data-type="人物">
<div className="flex items-start justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">描述你的最好朋友</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 12 次
            </div>
</article>
<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30" data-part="p1" data-type="人物">
<div className="flex items-start justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2024 Sep–Dec</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一位启发你的人</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 8 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30 hidden" data-part="p1" data-type="事件">
<div className="flex items-start justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-calendar-clock w-5 h-5" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一次难忘的聚会</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 5 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30 hidden" data-part="p1" data-type="地点">
<div className="flex items-start justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2024 Sep–Dec</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">你喜欢去的城市角落</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 10 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 hidden ring白/10 hover:ring白/20 shadow-black/30" data-part="p1" data-type="物品">
<div className="flex items-start justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-package w-5 h-5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一个常用的学习工具</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 7 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 hidden ring白/10 hover:ring白/20 shadow-black/30" data-part="p23" data-type="人物">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一位你想共事的专业人士</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 3 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 hidden ring白/10 hover:ring白/20 shadow-black/30" data-part="p23" data-type="事件">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-megaphone w-5 h-5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2024 Sep–Dec</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一次公开演讲经历</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 4 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 hidden ring白/10 hover:ring白/20 shadow-black/30" data-part="assistant" data-type="物品">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">跨题联想</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">用一个物品串联三段答案</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              智能引导练习
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 hidden ring白/10 hover:ring白/20 shadow-black/30" data-part="p23" data-type="地点">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-landmark w-5 h-5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一个值得推荐的景点</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 2 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30" data-part="p1" data-type="人物">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-heart-handshake w-5 h-5" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2024 Sep–Dec</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一位你敬佩的志愿者</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 6 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30 hidden" data-part="p1" data-type="事件">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-trophy w-5 h-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">2025 Jan–Apr</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">一次令你自豪的成就</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-history w-4 h-4" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
              已练习 9 次
            </div>
</article>

<article className="topic-card rounded-xl bg-[#161D26] ring-1 shadow-md p-3 transition-all hover:-translate-y-0.5 ring白/10 hover:ring白/20 shadow-black/30 hidden" data-part="assistant" data-type="人物">
<div className="flex items开始 justify-between">
<div className="w-9 h-9 rounded-lg ring-1 flex items-center justify-center bg白/5 ring白/10">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-[11px] ring-1 rounded-md px-2 py-0.5 text白/60 bg白/5 ring白/10">智能建议</span>
</div>
<h3 className="mt-2 text-[15px] font-semibold tracking-tight text-[#77ca3e] line-clamp-2">角色设定：考官/朋友视角</h3>
<div className="mt-1.5 flex items-center gap-1.5 text-[12px] text白/60">
<svg className="lucide lucide-wand-2 w-4 h-4" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
              自动生成追问
            </div>
</article>
</div>
</main>

<div className="mt-auto"></div>
</div>


    </>
  );
}
