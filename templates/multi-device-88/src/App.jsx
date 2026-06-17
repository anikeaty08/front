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



      document.querySelectorAll('[data-app]').forEach(app => {
        const screens = app.querySelectorAll('[data-screen]');
        const defaultName = app.dataset.default || 'home';

        function show(name) {
          screens.forEach(s => {
            if (s.dataset.screen === name) {
              s.classList.remove('hidden');
            } else {
              s.classList.add('hidden');
            }
          });

          // update nav states
          app.querySelectorAll('[data-tab]').forEach(btn => {
            const active = btn.dataset.tab === name;
            btn.classList.toggle('text-neutral-100', active);
            btn.classList.toggle('text-neutral-400', !active);
            btn.classList.toggle('bg-neutral-900', active);
            if (active) {
              btn.setAttribute('aria-current', 'page');
            } else {
              btn.removeAttribute('aria-current');
            }
          });
        }

        // init
        show(defaultName);

        // events
        app.querySelectorAll('[data-tab]').forEach(btn => {
          btn.addEventListener('click', () => show(btn.dataset.tab));
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
      
<div className="min-h-screen">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 flex items-center justify-center tracking-tight text-sm font-semibold">IT</div>
<div>
<h1 className="text-xl tracking-tight font-semibold">IntelliTrack 原型 · 智能提醒与习惯追踪</h1>
<p className="text-xs text-neutral-400">多场景提醒 · 习惯打卡 · 数据可视化 · 元服务卡片</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<span className="px-3 py-2 rounded-md bg-neutral-900 outline outline-1 outline-neutral-800 text-sm text-neutral-300">单文件 · 内嵌运行</span>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<p className="text-sm text-neutral-400 mb-4">说明：为便于评审与比对，以下为内嵌版本。每个设备框为独立运行的页面壳，底部标签可在卡片内切换。</p>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

<div className="bg-neutral-900/60 rounded-xl border border-neutral-800 p-4">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-neutral-300">Brief · 产品规划说明</div>
<span className="text-xs text-neutral-500">内嵌</span>
</div>
<div className="mx-auto relative">
<div className="relative mx-auto w-[340px] h-[720px] rounded-[36px] bg-black shadow-2xl ring-1 ring-neutral-800">
<div className="absolute -left-0.5 top-24 h-16 w-0.5 bg-neutral-700/60 rounded"></div>
<div className="absolute -right-0.5 top-28 h-10 w-0.5 bg-neutral-700/60 rounded"></div>
<div className="absolute inset-0 rounded-[36px] bg-neutral-900">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-full border border-neutral-800/80"></div>
<div className="absolute inset-[10px] rounded-[28px] overflow-hidden bg-neutral-950">
<div className="h-full w-full flex flex-col">

<div className="px-4 pt-3">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16.2a6 6 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="16" x="3" y="7"></rect><path d="M21 10v4"></path></svg>
</div>
</div>
</div>

<div className="px-5 pb-6 overflow-y-auto">
<div className="flex items-center justify-between mt-2">
<h2 className="text-2xl tracking-tight font-semibold">产品规划说明</h2>
<span className="text-[10px] text-neutral-500">v0.1</span>
</div>
<div className="mt-4 grid grid-cols-1 gap-4">
<section className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-4">
<h3 className="text-base font-semibold tracking-tight">1. 核心能力</h3>
<ul className="mt-2 text-sm text-neutral-300 leading-6">
<li>- 多场景提醒：日程、待办、喝水、生日/纪念日，支持智能触发（时间/地点/设备/健康数据）。</li>
<li>- 习惯打卡：目标可配置，支持周期/次数/时长，提供激励与连续打卡奖励。</li>
<li>- 数据可视化：完成率、连续天数、专注时长、番茄统计，个性化建议。</li>
<li>- 元服务卡片：桌面/负一屏直达查看与打卡，提高频次与留存。</li>
</ul>
</section>
<section className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-4">
<h3 className="text-base font-semibold tracking-tight">2. 信息架构</h3>
<div className="mt-3 grid grid-cols-2 gap-3 text-xs text-neutral-300">
<div className="rounded-lg border border-neutral-800 p-3">
<div className="font-medium">主导航</div>
<ul className="mt-2 space-y-1">
<li>首页（概览/快捷操作）</li>
<li>任务（待办/提醒/日程）</li>
<li>习惯（打卡/激励/模板）</li>
<li>数据（趋势/目标达成）</li>
<li>设置（通知/智能/同步）</li>
</ul>
</div>
<div className="rounded-lg border border-neutral-800 p-3">
<div className="font-medium">关键流程</div>
<ul className="mt-2 space-y-1">
<li>快速添加（自然语言解析）</li>
<li>智能触发（时间/地点/健康/设备）</li>
<li>打卡与反馈（正反馈/奖励）</li>
<li>卡片交互（查看/打卡/延迟）</li>
</ul>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900/60 border border-neutral-800 p-4">
<h3 className="text-base font-semibold tracking-tight">3. 体验与规范</h3>
<ul className="mt-2 text-sm text-neutral-300 leading-6">
<li>- 触控优先：关键操作单手可达；重要入口固定底栏。</li>
<li>- 视觉：高对比、弱边框、柔和阴影；字号层级清晰，标题 tracking-tight。</li>
<li>- 交互：主要按钮具备按压/悬浮反馈；开关/复选框为自定义组件。</li>
<li>- 响应式：小屏聚焦关键模块，大屏卡片化并列展示。</li>
</ul>
</section>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/60 rounded-xl border border-neutral-800 p-4">
<div className="flex items-center justify-between mb-3">
<div className="text-sm text-neutral-300">首页 · 概览与快速操作</div>
<span className="text-xs text-neutral-500">内嵌</span>
</div>
<div className="mx-auto relative">
<div className="relative mx-auto w-[340px] h-[720px] rounded-[36px] bg-black shadow-2xl ring-1 ring-neutral-800">
<div className="absolute -left-0.5 top-24 h-16 w-0.5 bg-neutral-700/60 rounded"></div>
<div className="absolute -right-0.5 top-28 h-10 w-0.5 bg-neutral-700/60 rounded"></div>
<div className="absolute inset-0 rounded-[36px] bg-neutral-900">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-full border border-neutral-800/80"></div>
<div className="absolute inset-[10px] rounded-[28px] overflow-hidden bg-neutral-950">

<div className="h-full w-full flex flex-col" data-app="" data-default="home">

<div className="px-4 pt-3">
<div className="flex items-center justify-between text-xs text-neutral-400">
<span>9:41</span>
<div className="flex items-center gap-1.5">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16.2a6 6 0 0 1 7 0"></path></svg>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="16" x="3" y="7"></rect><path d="M21 10v4"></path></svg>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div data-screen="home">

<div className="px-5 mt-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xs text-neutral-400">早上好</div>
<h1 className="text-2xl tracking-tight font-semibold">今天，做到更好</h1>
</div>
</div>
<button aria-label="search" className="p-2 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</button>
</div>

<div className="mt-4 flex gap-2">
<div className="flex-1">
<div className="flex items-center gap-2 rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2">
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
<input className="bg-transparent w-full text-sm placeholder-neutral-500 focus:outline-none" placeholder="用一句话快速添加（如：明天9点会议）" type="text"/>
</div>
</div>
<button className="px-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-sm font-medium">添加</button>
</div>
</div>

<div className="px-5 pb-4">
<section className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">今日任务</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">6</div>
<div className="mt-1 text-xs text-neutral-500">已完成 2</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">连续打卡</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">8</div>
<div className="mt-1 text-xs text-neutral-500">天</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">喝水进度</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">60%</div>
<div className="mt-1 text-xs text-neutral-500">1200/2000ml</div>
</div>
</section>
<section className="mt-5">
<div className="flex items-center justify-between mb-2">
<h2 className="text-base font-semibold tracking-tight">今日安排</h2>
<button className="text-xs text-neutral-400 hover:text-neutral-200">查看全部</button>
</div>
<div className="space-y-2">
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3 flex items-center justify-between hover:border-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
</div>
<div>
<div className="text-sm font-medium">项目周会</div>
<div className="text-xs text-neutral-400">09:30 - 10:30 · 会议室 A</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs">加入</button>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3 flex items-center justify-between hover:border-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800">
<svg className="w-5 h-5 text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M12 7C10.5 5.5 9 4 9 3a2 2 0 1 1 4 0"></path><path d="M12 7c1.5-1.5 3-3 3-4a2 2 0 1 0-4 0"></path></svg>
</div>
<div>
<div className="text-sm font-medium">妈妈生日</div>
<div className="text-xs text-neutral-400">全天 · 已设置提醒</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs">发送祝福</button>
</div>
</div>
</section>
<section className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 p-4">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">喝水提醒</div>
<span className="text-xs text-neutral-400">每1小时</span>
</div>
<div className="mt-4 flex items-center gap-3">
<svg className="w-10 h-10 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.7s6 6.2 6 10.3a6 6 0 0 1-12 0C6 8.9 12 2.7 12 2.7z"></path></svg>
<div>
<div className="text-2xl tracking-tight font-semibold">+250ml</div>
<div className="text-xs text-neutral-400">轻触添加今日摄入</div>
</div>
</div>
<button className="mt-4 w-full py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-sm font-medium">我已喝水</button>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-4 space-y-3">
<div className="text-sm font-medium">快捷操作</div>
<div className="grid grid-cols-3 gap-2">
<button className="h-20 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex flex-col items-center justify-center gap-2">
<svg className="w-5 h-5 text-neutral-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18M8 5v14m8-14v14M3 19h18"></path></svg>
<span className="text-xs">新待办</span>
</button>
<button className="h-20 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex flex-col items-center justify-center gap-2">
<svg className="w-5 h-5 text-neutral-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>
<span className="text-xs">番茄钟</span>
</button>
<button className="h-20 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 flex flex-col items-center justify-center gap-2">
<svg className="w-5 h-5 text-neutral-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H7m8-5-5 5 5 5"></path></svg>
<span className="text-xs">稍后提醒</span>
</button>
</div>
</div>
</section>
</div>
</div>

<div className="hidden" data-screen="tasks">
<div className="px-5 mt-1 flex items-center justify-between">
<h1 className="text-2xl tracking-tight font-semibold">任务</h1>
<div className="flex items-center gap-2">
<button aria-label="filter" className="p-2 rounded-md bg-neutral-900 border border-neutral-800 hover:bg-neutral-800">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18l-7 8v4l-4 2v-6z"></path></svg>
</button>
<button aria-label="add" className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-500">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</button>
</div>
</div>
<div className="px-5 mt-3">
<div className="grid grid-cols-3 rounded-lg bg-neutral-900 border border-neutral-800 p-1 text-sm">
<button className="py-1.5 rounded-md bg-neutral-800">今天</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">即将</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">全部</button>
</div>
</div>
<div className="px-5 mt-4 pb-4 space-y-2">
<label className="flex items-center gap-3 rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-neutral-700 bg-neutral-900 flex items-center justify-center peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors">
<svg className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex-1">
<div className="text-sm font-medium">提交周报</div>
<div className="text-xs text-neutral-400">今天 18:00 · 提醒</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px]">工作</span>
<button className="p-2 rounded-md hover:bg-neutral-800">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</label>
<label className="flex items-center gap-3 rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-neutral-700 bg-neutral-900 flex items-center justify-center peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors">
<svg className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex-1">
<div className="text-sm font-medium">喝水 250ml</div>
<div className="text-xs text-neutral-400">每1小时 · 循环提醒</div>
</div>
<button className="px-2 py-1 rounded-md bg-neutral-800 text-xs hover:bg-neutral-700">完成</button>
</label>
<label className="flex items-center gap-3 rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700">
<input className="peer sr-only" type="checkbox"/>
<span className="h-5 w-5 rounded-md border border-neutral-700 bg-neutral-900 flex items-center justify-center peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors">
<svg className="w-3.5 h-3.5 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex-1">
<div className="text-sm font-medium">准备生日礼物</div>
<div className="text-xs text-neutral-400">周五 · 提前2天提醒</div>
</div>
<span className="px-2 py-0.5 rounded bg-neutral-800 text-[10px]">生活</span>
</label>
</div>
</div>

<div className="hidden" data-screen="habits">
<div className="px-5 mt-1 flex items-center justify-between">
<h1 className="text-2xl tracking-tight font-semibold">习惯</h1>
<button aria-label="add habit" className="p-2 rounded-md bg-indigo-600 hover:bg-indigo-500">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</button>
</div>
<div className="px-5 mt-3 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">本周完成</div>
<div className="text-2xl tracking-tight font-semibold mt-1">12</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">连续天数</div>
<div className="text-2xl tracking-tight font-semibold mt-1">8</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3">
<div className="text-xs text-neutral-400">本月完成率</div>
<div className="text-2xl tracking-tight font-semibold mt-1">78%</div>
</div>
</div>
<div className="px-5 mt-4 space-y-3 pb-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight">今日打卡</h2>
<button className="text-xs text-neutral-400 hover:text-neutral-100">管理</button>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800">
<svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5a3 3 0 1 1 4 4l-2 2 3 1-1 3-3-1-2 2-4 1 1-4 2-2-2-2"></path></svg>
</div>
<div>
<div className="text-sm font-medium">跑步</div>
<div className="text-xs text-neutral-400">目标 3 次/周 · 今天第 1 次</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-xs font-medium">打卡</button>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-neutral-800 rounded-md overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-md" style={{width: '33%'}}></div>
</div>
<div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
<span>本周进度</span>
<span>1/3</span>
</div>
</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800">
<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19V5a2 2 0 0 1 2-2h5v16l-3-2-3 2zM14 3h4a2 2 0 0 1 2 2v14l-3-2-3 2z"></path></svg>
</div>
<div>
<div className="text-sm font-medium">阅读</div>
<div className="text-xs text-neutral-400">目标 30 分钟/天 · 已读 20 分钟</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs font-medium">继续</button>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-neutral-800 rounded-md overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-md" style={{width: '66%'}}></div>
</div>
<div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
<span>今日进度</span>
<span>20/30 分钟</span>
</div>
</div>
</div>
<div className="rounded-xl bg-neutral-900 border border-neutral-800 p-3 hover:border-neutral-700 transition-colors">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-neutral-800">
<svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a4 4 0 0 0-4 4v2H6a3 3 0 1 0 0 6h12a3 3 0 1 0 0-6h-2v-2a4 4 0 0 0-4-4z"></path></svg>
</div>
<div>
<div className="text-sm font-medium">冥想</div>
<div className="text-xs text-neutral-400">目标 10 分钟/天 · 未开始</div>
</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-sky-600 hover:bg-sky-500 text-xs font-medium">开始</button>
</div>
<div className="mt-3">
<div className="h-2 w-full bg-neutral-800 rounded-md overflow-hidden">
<div className="h-full bg-gradient-to-r from-sky-500 to-sky-400 rounded-md" style={{width: '0%'}}></div>
</div>
<div className="mt-1.5 flex items-center justify-between text-[11px] text-neutral-400">
<span>今日进度</span>
<span>0/10 分钟</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" data-screen="analytics">
<div className="px-5 mt-1 flex items-center justify-between">
<h1 className="text-2xl tracking-tight font-semibold">数据</h1>
<div className="grid grid-cols-3 rounded-lg bg-neutral-900 border border-neutral-800 p-1 text-xs">
<button className="py-1.5 px-2 rounded-md bg-neutral-800">7 天</button>
<button className="py-1.5 px-2 rounded-md hover:bg-neutral-800 text-neutral-300">30 天</button>
<button className="py-1.5 px-2 rounded-md hover:bg-neutral-800 text-neutral-300">90 天</button>
</div>
</div>
<div className="px-5 mt-4 pb-4 space-y-3">
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight">完成率趋势</h2>
<span className="text-xs text-neutral-400">较上期 +6%</span>
</div>
<div className="mt-3">
<svg className="w-full h-24" viewbox="0 0 320 100">
<defs>
<lineargradient id="grad1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#6366f1" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="#6366f1" stop-opacity="0"></stop>
</lineargradient>
</defs>
<polyline fill="url(#grad1)" points="0,80 20,70 40,72 60,60 80,50 100,56 120,44 140,46 160,40 180,45 200,38 220,42 240,35 260,40 280,34 300,36 320,30 320,100 0,100" stroke="none"></polyline>
<polyline fill="none" points="0,80 20,70 40,72 60,60 80,50 100,56 120,44 140,46 160,40 180,45 200,38 220,42 240,35 260,40 280,34 300,36 320,30" stroke="#818cf8" strokeWidth="2"></polyline>
</svg>
<div className="mt-2 flex items-center justify-between text-xs text-neutral-400">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center justify-between">
<h2 className="text-base font-semibold tracking-tight">每日完成数量</h2>
<span className="text-xs text-neutral-400">目标 5/日</span>
</div>
<div className="mt-4 grid grid-cols-7 gap-2">
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-12 mt-12"></div></div>
<span className="text-[10px] text-neutral-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-16 mt-8"></div></div>
<span className="text-[10px] text-neutral-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-20 mt-4"></div></div>
<span className="text-[10px] text-neutral-400">Wed</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-[88px] mt-2"></div></div>
<span className="text-[10px] text-neutral-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-16 mt-8"></div></div>
<span className="text-[10px] text-neutral-400">Fri</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-10 mt-14"></div></div>
<span className="text-[10px] text-neutral-400">Sat</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-full h-24 bg-neutral-800 rounded-md overflow-hidden"><div className="w-full bg-indigo-500 h-20 mt-4"></div></div>
<span className="text-[10px] text-neutral-400">Sun</span>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center justify-between mb-2">
<h2 className="text-base font-semibold tracking-tight">高频习惯表现</h2>
<button className="text-xs text-neutral-400 hover:text-neutral-100">更多</button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="text-sm">阅读</div>
<div className="flex-1 mx-3 h-2 rounded bg-neutral-800 overflow-hidden">
<div className="h-full w-4/5 rounded bg-gradient-to-r from-indigo-500 to-indigo-400"></div>
</div>
<span className="text-xs text-neutral-400">80%</span>
</div>
<div className="flex items-center justify-between">
<div className="text-sm">跑步</div>
<div className="flex-1 mx-3 h-2 rounded bg-neutral-800 overflow-hidden">
<div className="h-full w-3/5 rounded bg-gradient-to-r from-emerald-500 to-emerald-400"></div>
</div>
<span className="text-xs text-neutral-400">60%</span>
</div>
<div className="flex items-center justify-between">
<div className="text-sm">冥想</div>
<div className="flex-1 mx-3 h-2 rounded bg-neutral-800 overflow-hidden">
<div className="h-full w-2/5 rounded bg-gradient-to-r from-sky-500 to-sky-400"></div>
</div>
<span className="text-xs text-neutral-400">40%</span>
</div>
</div>
</section>
</div>
</div>

<div className="hidden" data-screen="settings">
<div className="px-5 mt-1 flex items-center justify-between">
<h1 className="text-2xl tracking-tight font-semibold">设置</h1>
<span className="text-xs text-neutral-400">本地示例</span>
</div>
<div className="px-5 mt-4 pb-4 space-y-4">
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center gap-3">
<img alt="用户头像" className="w-10-10 rounded-full object-cover" https:="" images.unsplash.com="" photo-1544005313-94ddf0286df2?q='80&amp;w=96&amp;auto=format&amp;fit=crop"' src="https://images.unsplash.com/photo-154400531                                &lt;img src="/>
<div className="flex-1">
<div className="text-sm font-medium">陈梓</div>
<div className="text-xs text-neutral-400">chenzi@example.com</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs">编辑资料</button>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<h2 className="text-sm font-semibold tracking-tight">通知设置</h2>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm">系统推送</div>
<div className="text-xs text-neutral-400">提醒、任务到期等推送消息</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-neutral-800 rounded-full peer peer-checked:bg-emerald-600 transition-colors after:content-[''] after:absolute after:w-5 after:h-5 after:bg-neutral-100 after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-4"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">每日概要</div>
<div className="text-xs text-neutral-400">每天早上发送今日安排与目标</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-neutral-800 rounded-full peer peer-checked:bg-emerald-600 transition-colors after:content-[''] after:absolute after:w-5 after:h-5 after:bg-neutral-100 after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-4"></span>
</label>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<h2 className="text-sm font-semibold tracking-tight">智能能力</h2>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-sm">时间语义解析</div>
<div className="text-xs text-neutral-400">自动识别“明天9点”“每周三”等自然语言</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-neutral-800 rounded-full peer peer-checked:bg-emerald-600 transition-colors after:content-[''] after:absolute after:w-5 after:h-5 after:bg-neutral-100 after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-4"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">位置触发</div>
<div className="text-xs text-neutral-400">到达/离开指定地点时提醒</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-neutral-800 rounded-full peer peer-checked:bg-emerald-600 transition-colors after:content-[''] after:absolute after:w-5 after:h-5 after:bg-neutral-100 after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-4"></span>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm">健康数据联动</div>
<div className="text-xs text-neutral-400">结合步数、站立、睡眠等进行智能建议</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-10 h-6 bg-neutral-800 rounded-full peer peer-checked:bg-emerald-600 transition-colors after:content-[''] after:absolute after:w-5 after:h-5 after:bg-neutral-100 after:rounded-full after:top-0.5 after:left-0.5 after:transition-all peer-checked:after:translate-x-4"></span>
</label>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight">同步与备份</h2>
<span className="text-xs text-neutral-400">最后同步 09:12</span>
</div>
<div className="mt-3 grid grid-cols-3 rounded-lg bg-neutral-900 border border-neutral-800 p-1 text-sm">
<button className="py-1.5 rounded-md bg-neutral-800">iCloud</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">本地</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">离线导出</button>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 text-xs font-medium">立即同步</button>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs">导出 .json</button>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<h2 className="text-sm font-semibold tracking-tight">外观与语言</h2>
<div className="mt-3 grid grid-cols-2 gap-3">
<div>
<div className="text-xs text-neutral-400 mb-1">主题</div>
<div className="grid grid-cols-3 rounded-lg bg-neutral-900 border border-neutral-800 p-1 text-xs">
<button className="py-1.5 rounded-md bg-neutral-800">自动</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">深色</button>
<button className="py-1.5 rounded-md hover:bg-neutral-800 text-neutral-300">浅色</button>
</div>
</div>
<div>
<div className="text-xs text-neutral-400 mb-1">语言</div>
<div className="rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm flex items-center justify-between">
<span>简体中文</span>
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</section>
<section className="rounded-xl bg-neutral-900 border border-neutral-800 p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium">关于 IntelliTrack</div>
<div className="text-xs text-neutral-400">版本 v0.1 · 实验性原型</div>
</div>
<button className="px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs">查看条款</button>
</div>
</section>
</div>
</div>
</div>

<nav aria-label="主导航" className="px-3 pb-3 pt-2 border-t border-neutral-800 bg-neutral-950/90 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="grid grid-cols-5 gap-1">
<button aria-label="首页" className="group flex flex-col items-center gap-1 rounded-lg py-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors" data-tab="home">
<svg className="w-5 h-5 group-aria-[current=page]:text-neutral-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-5H9v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[11px]">首页</span>
</button>
<button aria-label="任务" className="group flex flex-col items-center gap-1 rounded-lg py-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors" data-tab="tasks">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11h8M9 7h8M9 15h8"></path><path d="M5 7h.01M5 11h.01M5 15h.01"></path></svg>
<span className="text-[11px]">任务</span>
</button>
<button aria-label="习惯" className="group flex flex-col items-center gap-1 rounded-lg py-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors" data-tab="habits">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21s-7-4.35-7-10A4 4 0 0 1 12 7a4 4 0 0 1 7 4c0 5.65-7 10-7 10z"></path></svg>
<span className="text-[11px]">习惯</span>
</button>
<button aria-label="数据" className="group flex flex-col items-center gap-1 rounded-lg py-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors" data-tab="analytics">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="1" width="4" x="3" y="10"></rect><rect height="16" rx="1" width="4" x="10" y="4"></rect><rect height="12" rx="1" width="4" x="17" y="8"></rect></svg>
<span className="text-[11px]">数据</span>
</button>
<button aria-label="设置" className="group flex flex-col items-center gap-1 rounded-lg py-2 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors" data-tab="settings">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.07a2 2 0 1 1-2.83 2.83l-.07-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.1a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.07.06A2 2 0 1 1 3.2 17l.06-.07A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 1 1 0-4h.1a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.07A2 2 0 1 1 6.05 3.2l.07.06A1.65 1.65 0 0 0 7.94 3a1.65 1.65 0 0 0 1-1.51V1a2 2 0 1 1 4 0v.1a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.07-.06A2 2 0 1 1 20.8 7l-.06.07a1.65 1.65 0 0 0-.33 1.82c.2.6.75 1 1.39 1h.2a2 2 0 1 1 0 4h-.1c-.64 0-1.2.4-1.5 1Z"></path></svg>
<span className="text-[11px]">设置</span>
</button>
</div>
</nav>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 text-center text-xs text-neutral-500">
<span>© 2025 IntelliTrack · 原型示例，用于评审与演示</span>
</div>
</main>
</div>



    </>
  );
}
