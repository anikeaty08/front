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
      
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
 window.lucide.createIcons();
 }
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
      
<div className="relative">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.20),transparent_60%)]"></div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center tracking-tight">
<span className="text-sm font-semibold text-neutral-100">DW</span>
</div>
<div>
<h1 className="text-[22px] leading-tight tracking-tight font-semibold text-neutral-100">PCIe Controller 快速导航图</h1>
<p className="text-sm text-neutral-400">设计视角的结构化导览与问题定位</p>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="group relative">
<input className="w-72 rounded-md bg-neutral-900/60 border border-neutral-800 text-neutral-200 placeholder-neutral-500 px-3 py-2 text-sm outline-none ring-0 focus:border-neutral-700 focus:outline-none transition-colors" placeholder="搜索章节/关键词 (如 iATU, AER, Tag)" type="text"/>
<div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500">
<svg className="opacity-80" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-colors">
<svg data-lucide="link-2" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
                速查锚点
              </button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-2.5 py-1 text-xs">面向实现</span>
<span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 text-xs">问题导向</span>
<span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 px-2.5 py-1 text-xs">性能优先</span>
<span className="inline-flex items-center gap-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300 px-2.5 py-1 text-xs">
<svg data-lucide="triangle-alert" fill="none" height="14" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="14"></svg>
            易错点提示
          </span>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<section className="relative rounded-xl bg-neutral-950/60 border border-neutral-800">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg className="text-neutral-300" data-lucide="cpu" fill="none" height="18" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-neutral-100">控制器总览</h2>
</div>
<span className="text-xs text-neutral-400">Preface–Ch11+</span>
</div>
<div className="mt-4 border-t border-neutral-800"></div>

<div className="mt-4 rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-7 w-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
<svg data-lucide="map" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<div className="space-y-1">
<p className="text-sm text-neutral-200">DesignWare PCIe Controller 专家决策导航图</p>
<p className="text-xs text-neutral-400">将庞杂的 Databook 转化为高信息密度、问题导向、依赖关系清晰的决策地图，帮助快速定位并理解模块关联。</p>
</div>
</div>
</div>

<div className="mt-4 space-y-4">

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30 open:bg-neutral-900/40 transition-colors" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="book-open" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<div className="flex items-center gap-2">
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">总览与基础 (Preface &amp; Ch1–2)</span>
<span className="text-[11px] rounded bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 px-1.5 py-0.5">入门+必读</span>
</div>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="info" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">Preface &amp; Ch1: 产品概述</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">配置类型 EP/RP、Gen2→Gen6 特性对比</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="layout-panel-top" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">2.1 模块概览</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">CXPL / XADM / RADM / CDM 协同关系</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="database" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">2.2 RAM 需求</span>
<span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1.5 py-0.5">核心要求：单周期访问延迟</span>
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5">ECC 支持 (2.2.3)</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="clock" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">2.3 时钟要求</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">core_clk 与 pipe_clk 关系</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">CX_FREQ_STEP_EN 影响速度切换</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="power" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">2.4 复位要求</span>
<span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1.5 py-0.5">必看：Hot Reset (2.4.3)</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">app_ltssm_enable 使用时机</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="inbox" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm text-neutral-200">2.5 接收队列</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">S/F, C/T, B/P 模式影响延迟与复杂度</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="target" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">核心操作与高级功能 (Ch3)</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex flex-wrap items-center gap-2">
<svg data-lucide="play" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.1–3.2 初始化与链路建立</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">需先读 2.3(时钟)/2.4(复位)</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex items-center gap-2">
<svg data-lucide="shield-check" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.7 RAS：ECRC、RAS DP、DES</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex items-center gap-2">
<svg data-lucide="bell-ring" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.9 中断：Legacy / MSI / MSI-X</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex flex-wrap items-center gap-2">
<svg data-lucide="map-pin" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.12 iATU</span>
<span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1.5 py-0.5">DMA 前置条件：出站/入站地址转换</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex flex-wrap items-center gap-2">
<svg data-lucide="leaf" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.17 电源管理 (PM)</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">L1 Substates (3.17.2)</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">关联 2.3.5 参考时钟移除</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex items-center gap-2">
<svg data-lucide="network" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.18 SR-IOV：PF/VF 资源与门数成本</span>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<div className="flex items-center gap-2">
<svg data-lucide="rotate-ccw" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">3.19 FLR：应用需先停止传输以防数据损坏</span>
</div>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="cable" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">接口、总线桥与 DMA (Ch4–7)</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="git-branch" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch4 信号接口</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">XALI(4.1) / TRGT1(4.5) / PIPE(4.14)</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="folder-symlink" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch5 AMBA Bridge</span>
<span className="text:[11px] text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">AXI 分解规则 (5.1.4)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">错误映射 (5.1.3)</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="hard-drive" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch6 Legacy DMA</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">基础功能，限制多；新设计建议评估 HDMA</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="rocket" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch7 HDMA</span>
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5">推荐：多通道、预取、性能更优</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">需配合 AXI 桥使用（不支持 Native）</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="puzzle" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">特殊应用与附录</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="cpu" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch8 CCIX</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">Gen5+，需 PHY ESM 模式</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="lock" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch10 IDE 加密</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">链路层加密与完整性</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="car" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Ch11 Automotive</span>
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5">ISO 26262，CDM 寄存器检查 (11.3)</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="sliders-horizontal" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">附录 A：链路均衡</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">Phase 0–3，Gen3/4/5 调试关键</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="shuffle" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">附录 F/G：时钟/复位域交叉</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">CDC/RDC 亚稳态分析</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2">
<svg data-lucide="gauge" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">附录 M/N：吞吐量计算</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">Gen1/AXI 桥有效吞吐模型</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="navigation-2" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">问题导向快速定位索引</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ul className="ml-4 pl-4 border-l border-neutral-800 space-y-2 text-sm">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        链路无法建立或训练失败 → 查 2.4 复位 (Hot Reset) 与 2.3 时钟；再看 3.2 链路建立；Gen3+ 深入附录 A 均衡。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        DMA 传输失败或数据错误 → 优先核对 3.12 iATU；查 6.4/7.4 高级 DMA 操作与错误；确认 2.2 RAM 单周期要求。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        系统挂起或性能不达标 → 查 3.10 流控与信用；参考附录 S 信用计算与附录 M/N 吞吐模型；用 3.7.3 RAS DES 统计。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        中断未按预期触发 → 查 3.9；核对 4.10 MSI / 4.11 MSI-X 时序协议；SR-IOV 场景参考附录 E.5。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        低功耗/唤醒异常 → 深入 3.17 PM (L1 Substates)；确认 2.3.5 参考时钟移除与外部逻辑实现。
                      </li>
</ul>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="wand-2" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">专家方法论：如何使用此导航图</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4 space-y-3">
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg data-lucide="goal" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">真实案例：实现 HDMA 功能</span>
</div>
<ol className="mt-2 ml-4 pl-4 border-l border-neutral-800 space-y-2 text-sm text-neutral-300">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          目标定位 → 在“接口、总线桥与 DMA”中找到 Ch7 HDMA（标注推荐与需配合 AXI 桥）。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          前置检查 → 3.12 iATU 为 DMA 前置条件，先完成地址转换配置。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          依赖识别 → HDMA 依赖 AXI 桥，查 Ch5；若涉及虚拟化，关联 3.18 SR-IOV。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          阅读路径 → Step1: Ch5 AMBA Bridge；Step2: 3.12 iATU；Step3: 7.1–7.3 架构/寄存器/用法；Step4: 7.4 高级与错误处理。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          时间预估 → 将阅读范围聚焦至 ~150 页核心内容，降低返工风险。
                        </li>
</ol>
</div>
</div>
</details>

<div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-start gap-3">
<div className="h-7 w-7 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
<svg data-lucide="sparkles" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<div className="space-y-1">
<p className="text-sm text-neutral-200">结论</p>
<p className="text-xs text-neutral-400">该导航图不仅是目录索引，更是结构化知识地图与决策工具。通过模拟专家的分析路径，帮助在最短时间内建立系统理解并高效完成设计与调试。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative rounded-xl bg-neutral-950/60 border border-neutral-800">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="hard-drive" height="18" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-neutral-100">第 6 章 - DMA Overview</h2>
</div>
<span className="text-xs text-neutral-400">Ch6 专注</span>
</div>
<div className="mt-4 border-t border-neutral-800"></div>
<div className="mt-4 space-y-4">

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30 open:bg-neutral-900/40" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="workflow" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight">🏗️ 核心架构与基本操作</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="swap-horizontal" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.1 DMA Write/Read 流程 (p497, p502)</span>
<span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1.5 py-0.5">🔴 必看</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">SAR/DAR 在读写中的反转</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="boxes" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.4.2 内部架构 (p537)</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">📊 复杂: 转换 PCIe/AXI 事务</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="power-square" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.3.3 启动与停止 (p518, p519)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">⚠️ 启动后不可修改上下文</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">软件停止用于调试</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="list-tree" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight">🎯 链表模式 (LL) - 精髓所在</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="file-list" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.2.3 LL 概述 (p508)</span>
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5">✅ 推荐: 高效 Scatter-Gather</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-col gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<div className="flex items-center gap-2">
<svg data-lucide="repeat" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.4.9 LL 操作 (p546)</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">📊 复杂: 生产者-消费者同步、元素回收</span>
</div>
<div className="ml-5 grid gap-1">
<div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">
<svg data-lucide="handshake" height="14" strokeWidth="1.5" width="14"></svg>
                              6.4.9.3 PCS-CCS-CB-TCB 同步 (p550)
                              <span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1 py-0">🔴 必看</span>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300">
<svg data-lucide="recycle" height="14" strokeWidth="1.5" width="14"></svg>
                              6.4.9.4 元素回收 (p553)
                              <span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1 py-0">⚠️ 先写数据再写控制位</span>
</div>
</div>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="gauge" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">Descriptor Early Fetch (p511)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">⚡ 关键参数: CC_DMA_EFETCH_EN</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="zap" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight">⚡ 性能优化与仲裁</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="scale" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.4.10 多通道仲裁 (p554)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">关键: DMA_*_ARB_WEIGHT_*</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">权重总和受 CC_NUM_DMA_RD_TAG 限制</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="tag" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.4.5 PCIe TAGs (p541)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">关键: CC_NUM_DMA_RD_TAG</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-1.5 py-0.5">为 DMA 读独占</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="shuffle" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.4.3 DMA Ordering (p538)</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-1.5 py-0.5">📊 乱序与内部重排</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="speedometer" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.1.1 性能限制 (p498)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">大 BusWidth + 小 MTU 可能无法满速</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="plug" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight">🔌 特殊配置与接口</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="cpu" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.2.5 原生控制器操作 (无 AXI) (p515)</span>
<span className="text-[11px] rounded bg-rose-500/10 border border-rose-500/30 text-rose-300 px-1.5 py-0.5">🔴 必看: 避免死锁的约定</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="users" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.2.6 SR-IOV 支持 (p516)</span>
<span className="text-[11px] rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 px-1.5 py-0.5">共享寄存器，需 VI 软件隔离</span>
</div>
</li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<div className="flex flex-wrap items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/40 px-3 py-2 hover:border-neutral-700">
<svg data-lucide="hand" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm">6.2.4 硬件流控 (HSHAKE) (p512)</span>
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5">✅ 推荐: 硬件生成/消费控制</span>
</div>
</li>
</ol>
</div>
</details>

<details className="group rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="bug" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight">📍 问题定位与解决方案</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4 space-y-3">

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg className="text-amber-300" data-lucide="alert-circle" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">问题: DMA 通道无故停止，或性能低于预期</span>
</div>
<ul className="mt-2 ml-4 pl-4 border-l border-neutral-800 space-y-1 text-sm text-neutral-300">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          1) 检查 LL 模式下 PCS/CCS 是否同步失败 (p550)
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          2) PCIe Tag 池是否耗尽，关注 CC_NUM_DMA_RD_TAG (p541)
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          3) 查看 DMA_*_ERR_STATUS_* 是否有非致命错误导致 Halt (p543)
                        </li>
</ul>
</div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg className="text-rose-300" data-lucide="alert-triangle" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">问题: DMA 传输数据错误或异常中止</span>
</div>
<ul className="mt-2 ml-4 pl-4 border-l border-neutral-800 space-y-1 text-sm text-neutral-300">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          1) 是否发生致命错误？若是，需软复位 DMA 引擎 (p544)
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          2) 原生模式下 XALI 接口使用是否正确，特别是写通道完成包顺序 (p515)
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          3) LL 描述符内容 (SAR/DAR/Size) 是否正确 (p508)
                        </li>
</ul>
</div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg className="text-sky-300" data-lucide="radar" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">问题: 调试困难，无法区分 DMA 流量</span>
</div>
<div className="mt-2 text-sm text-neutral-300">
                        解决: 利用 armisc_info_dma, awmisc_info_dma, d_trgt1_req_dma 等调试信号 (p545)
                      </div>
</div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg className="text-emerald-300" data-lucide="wand-2" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">性能优化策略</span>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-2 py-1">调整仲裁权重</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-2 py-1">优化 Tag 分配</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-2 py-1">启用 Early Fetch</span>
<span className="text-[11px] rounded bg-neutral-800 border border-neutral-700 text-neutral-300/90 px-2 py-1">合理规划 LL 描述符大小</span>
</div>
</div>
</div>
</details>
</div>
</div>
</section>

<section className="relative rounded-xl bg-neutral-950/60 border border-neutral-800">
<div className="p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="brain" height="18" strokeWidth="1.5" viewbox="0 0 24 24" width="18"></svg>
</div>
<h2 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-neutral-100">第 6 章 - DMA Overview 专家决策导图</h2>
</div>
<span className="text-xs text-neutral-400">专家解读</span>
</div>
<div className="mt-4 border-t border-neutral-800"></div>

<details className="group mt-4 rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="layers" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">第一部分：核心内容分析</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4 space-y-4">

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg data-lucide="construction" height="16" strokeWidth="1.5" width="16"></svg>
<h3 className="text-sm font-semibold tracking-tight text-neutral-100">1. 🏗️ DMA功能总览与基本传输机制 (Section 6.1, 6.2.1, 6.4.2)</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">DMA控制器是PCIe系统中用于CPU卸载数据传输的关键硬件。它支持本地内存与远端内存之间的数据双向（读/写）传输，且读写操作可同时进行（全双工），并与常规PCIe流量并行，极大提升系统吞吐。</p>
<div className="mt-3">
<p className="text-xs text-neutral-400">核心概念：</p>
<ul className="mt-1 ml-4 pl-4 border-l border-neutral-800 space-y-2 text-sm text-neutral-300">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<span className="font-medium text-neutral-200">DMA Write</span>: 将<span className="font-medium">本地内存</span>数据传输到<span className="font-medium">远端内存</span>。过程为：DMA向本地内存发MRd请求 -&gt; 本地应用返回数据 -&gt; DMA将数据封装成MWr TLP -&gt; 发送至远端。<code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">SAR</code>指向本地，<code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">DAR</code>指向远端。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<span className="font-medium text-neutral-200">DMA Read</span>: 将<span className="font-medium">远端内存</span>数据传输到<span className="font-medium">本地内存</span>。过程为：DMA向远端内存发MRd请求 -&gt; 远端返回CplD -&gt; DMA将数据转换为MWr请求 -&gt; 写入本地内存。<code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">SAR</code>指向远端，<code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">DAR</code>指向本地。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<span className="font-medium text-neutral-200">配置灵活性</span>: 支持1-8个读通道和1-8个写通道。可通过本地DBI或PCIe远程编程。
                        </li>
</ul>
</div>
<div className="mt-3">
<p className="text-xs text-neutral-400">关键机制：</p>
<ul className="mt-1 ml-4 pl-4 border-l border-neutral-800 space-y-1 text-sm text-neutral-300">
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>全双工操作：读写通道独立运作，实现最大性能。</li>
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>上下文寄存器：每个DMA传输（通道）通过一系列专有寄存器进行编程和状态更新。</li>
</ul>
</div>
<div className="mt-3">
<p className="text-xs text-neutral-400">重要参数：</p>
<ul className="mt-1 ml-4 pl-4 border-l border-neutral-800 space-y-1 text-sm text-neutral-300">
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div><code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">CC_NUM_DMA_WR_CHAN</code>: 可配置的DMA写通道数量 (1-8)。</li>
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div><code className="px-1 py-0.5 rounded bg-neutral-800 border border-neutral-700 text-neutral-200">CC_NUM_DMA_RD_CHAN</code>: 可配置的DMA读通道数量 (1-8)。</li>
</ul>
</div>
<div className="mt-3">
<p className="text-xs text-neutral-400">设计权衡：</p>
<p className="text-sm text-neutral-300 mt-1">性能与资源：增加通道数量可提升并发度，但会消耗更多硬件资源。</p>
</div>
</div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg data-lucide="list-checks" height="16" strokeWidth="1.5" width="16"></svg>
<h3 className="text-sm font-semibold tracking-tight text-neutral-100">2. 🎯 链表模式 (Linked List Mode) - 高效与同步 (Section 6.2.3, 6.4.9)</h3>
<p className="mt-2 text-sm text-neutral-300">LL 模式通过在内存中维护描述符队列，支持高效的 Scatter-Gather 与超长传输。硬件按需预取描述符并进行流水化处理，结合生产者/消费者同步原语实现零拷贝式高吞吐。</p>
<div className="mt-3">
<p className="text-xs text-neutral-400">同步与有序性：</p>
<ul className="mt-1 ml-4 pl-4 border-l border-neutral-800 space-y-2 text-sm text-neutral-300">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          PCS/CCS 索引 +/TCB 循环位确保队列满/空可区分，避免写指针与读指针重叠引发歧义。
                        </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                          非一致性缓存系统：描述符区建议禁缓存或在写控制位前显式清缓存/刷回。
                        </li>
</li></ul>
</div>
<div className="mt-3">
<p className="text-xs text-neutral-400">高效实践：</p>
<div className="mt-1 flex flex-wrap gap-2">
<span className="text-[11px] rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2 py-1">启用 Early Fetch</span>
<span className="text-[11px] rounded bg-sky-500/10 border border-sky-500/30 text-sky-300 px-2 py-1">分离描述符/数据内存通道</span>
<span bg-neutral-800="" border="" border-neutral-700="" className="text-[11px] rounded bg-amber-500/10 border-amber-500/30 text-amber-300 px-2 py-1门铃批量唤醒减少中断&lt;/span&gt; &lt;span class=" px-2="" py-1"="" rounded="" text-[11px]="" text-neutral-300="">与 MRRS/MPS 对齐</span>
</div>
</div>
</div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg data-lucide="gauge" height="16" strokeWidth="1.5" width="16"></svg>
<h3 className="text-sm font-semibold tracking-tight text-neutral-100">3. ⚡ 性能关键维度：Tags、仲裁与包粒度</h3>
</div>
<ul="mt-2 border-l="" border-neutral-800="" ml-4="" pl-4="" space-y-2="" text-neutral-300"="" text-sm="">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        Tags：读通道并发的根基。总可用 Tag 受实现参数限制，需在多通道之间合理分配，避免“饿死”。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        仲裁：权重设置影响不同通道的服务公平性与尾延迟，权重总和不宜超过可同时悬挂的请求能力。
                      </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                        包粒度：请求长度对齐 MPS/MRRS，避免过小包引发协议开销主导。
                      </li>

</ul="mt-2></div>

<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-4">
<div className="flex items-center gap-2">
<svg data-lucide="shield" height="16" strokeWidth="1.5" width="16"></svg>
<h3 className="text-sm font tracking-tight text-neutral-100">4. 🔐 稳定性与容错：错误处理路径</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">非致命错误通常可上报并继续；致命错误需停止相关通道并进行软复位。务必记录错误上下文，避免在未知状态下继续传输。</p>
</div>
</div>
</div></details>

<details className="group mt-4 rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="git-merge" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[px] font-semibold tracking-tight text-neutral-100">第二部分：实现与集成流程</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ol className="relative ml-4 pl-4 border-l border-neutral-800 space-y-3 text-sm">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      准备 iATU：配置出站/入站窗口，将本地/远端地址空间映射到可达区域。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      选择模式：普通模式（寄存器编程）或链表模式（高吞吐、低 CPU 占用）。
                    </li>
                    &lt; className="relative"&gt;
                      <div className="absolute -left-4 top-3 w-4 h-px-neutral-800"></div>
                      通道规划：读/写通道数、优先级与权重；评估 Tag 池容量与峰值并发。
                    
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      描述符布局：缓存策略、对齐、循环位；启用 Early Fetch 以降低首包延迟。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      中断/轮询：根据负载决定 MSI/MSI-X 或轮询；批量完成可降低中断风暴。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 hx bg-neutral-800"></div>
<li className="relative">
<div className="absolute -left-4-3 w-4 h-px bg-neutral-800"></div>
                      性能试车：从单通道到多通道，逐步提升并发与包长，观察吞吐、尾延迟与 Tag 使用率。
                    </li>
</li></ol>
</div>
</details>

<details className="group mt-4 rounded-lg border border-neutral-800 bg-neutral-90030" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg 1.5"="" data-lucide="check-square" height="16 strokeWidth=" width="16"></svg>
</div>
<span className="text-[15px]-semibold tracking-tight text-neutral-100">第三部分：配置检查清单</span>
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<ul className="ml-4 pl-4 border-l border-neutral-800 space-y-2 text-sm">
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      iATU 窗口覆盖 SAR/DAR 所在区间，RW 权限正确，未被其他窗口遮挡。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      MRRS/MPS 与平台一致，避免过小导致协议开销过高或分片。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      描述符与数据区地址对齐到平台建议粒度（常见 64B/128B 对）。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      Early Fetch 已按需开启；LL 控制位写入在数据写之后。
                    </li>
<li className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>
                      中断屏蔽/状态/清除位路径验证通过；批量完成策略已验证。
                    </li>
</ul></div>
</details>

<details className="group mt-4 rounded-lg border border-neutral-800 bg-neutral-900/30" open="">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="satellite-dish" height="16" strokeWidth="1.5" width="16"></svg>
</div>
<span className="text-[15px] font-semibold tracking-tight text-neutral-100">第四部分：调试与观测</span>
</div>
                  &lt; data-lucide="chevron-down" width="18" height="18" strokeWidth="1.5" className="transition-transform group-open:rotate-180 text-neutral-400"&gt;
</summary>
<div className="px-4 pb-4 space-y-3">
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg data-lucide="signal" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">推荐观测点</span>
</div>
<ul className="mt-2 ml-4 pl-4 border-l border-neutral-800 space-y-1 text-sm-neutral-300">
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>armisc_info_dma / awmisc_info_dma：AXI 侧请求速率、背压与突发。</li>
<li className="relative"><div className="absolute -left- top-3 w-4 h-px bg-neutral-800"></div>d_trgt1_req_dma：PCIe 侧请求节奏与并发。</li>
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>LL 指针/循环位：PCS/CCS 与 CB/TCB 的推进关系。</li>
</ul>
</div>
<div className="rounded-md border border-neutral-800 bg-neutral-900/40 p-3">
<div className="flex items-center gap-2">
<svg data-lucide="bug" height="16" strokeWidth="1.5" width="16"></svg>
<span className="text-sm font-semibold tracking-tight">常见异常定位</span>
</div>
<ul className="mt-2 ml-4 pl-4 border-l border-neutral-800 space-y1 text-sm text-neutral-300">
<li className="relative"><div className="absolute -left-4-3 w-4 h-px bg-neutral-800"></div>吞吐低：检查 MPS/MRRS、Tag 使用率、仲权重与 Early Fetch。</li>
<li className="relative"><div className="absolute -left-4 top-3 w-4 h-px bg-neutral-800"></div>卡死：确认 LL 控制位写入顺序与缓存刷回；确认无致命错误置位。</li>
<li className="relative"><div className="absolute -left-4 top-3 w4 h-px bg-neutral-800"></div>数据错：核对 iATU 窗口、端到端地址合法性与对齐。</li>
</ul>
</div>
</div>
</details>

<details className="group mt-4 rounded-lg border border-neutral-800 bg-neutral-900/30">
<summary className="list-none cursor-pointer select-none px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<svg data-lucide="help-circle" height="16" strokeWidth="1.5" width="16"></svg>
</div>
                    &lt; class="text-[15px] font-semibold tracking-tight text-neutral-100第五部分：FAQ 快答
</div>
<svg className="transition-transform group-open:rotate-180 text-neutral-400" data-lucide="chevron-down" height="18" strokeWidth="1.5" width="18"></svg>
</summary>
<div className="px-4 pb-4">
<div className="space-y- text-sm text-neutral-300">
<p className="flex items-start gap-2">
<svg 16"="" className="mt-0.5 shrink-0 text-neutral-400" data-lucide="chevrons-right" strokeWidth="1.5" width="16 height="></svg>
                      问：LL 描述符需要多大对齐？答：建议至少 64B 对齐，具体依实现与平台缓存线。
                    </p>
<p className="flex items-start gap-2">
<svg className="mt-0.5 shrink-0 text-neutral-400" data-lucide="chevrons-right" height="16" strokeWidth="1.5" width="16"></svg>
 问：如何判断 Tag 不足？答：观察读请求挂起数长期触顶、CplD 节奏出现“锯齿可考虑提升 Tag 或通道权重。
                    </p>
<p className="flex items-start gap-2">
<svg className="mt-0.5 shrink-0 text-neutral-400" data-lucide="chevrons-right" height="16" strokeWidth="15" width="16"></svg>
                      问：Early Fetch 何时收益最大？答：LL 长链路、大量小描述符场景显著降低首包等待时间。
                    </p>
</div>
</div>
</details>
</div>
</section>
</div>

<div className="mt-8 text-[12px] text-neutral-500 flex items-center gap-2 justify-center">
<svg data-lucide="badge-check" height="14" strokeWidth="1.5" width="14"></svg>
          内容为设计导航参考，请结合实际 IP 版本与平台手册验证。
        </div>
</main>
</div>



    </>
  );
}
