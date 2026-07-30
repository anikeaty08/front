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
      
      window.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // 强化字体呈现
        document.body.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
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
      

<div className="pointer-events-none absolute inset-x-0 -top-40 h-80 opacity-60 [filter:blur(80px)]">
<div className="mx-auto h-full max-w-4xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-fuchsia-500/20"></div>
</div>

<main className="relative mx-auto max-w-7xl px-6 sm:px-6 md:px-8">

<section className="pt-12 md:pt-16 lg:pt-20">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">

<div className="w-full md:max-w-xl">
<div className="inline-flex items-center gap-2 rounded-[999px] border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 shadow-sm ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<i className="h-3.5 w-3.5" data-lucide="star" strokeWidth="1.5"></i>
<span>全新发布 · 更快更稳</span>
</div>
<h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
              简化你的工作流，释放创造力
            </h1>
<p className="mt-3 text-base sm:text-lg text-slate-300/90">
              以极简的界面与强大的能力，帮助你在更短时间内完成更多。跨设备同步，安全可靠，开箱即用。
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center rounded-[8px] bg-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-indigo-400/30 hover:bg-indigo-400 hover:ring-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-[#0B0F19]" href="#">
                立即注册
              </a>
<a className="inline-flex items-center justify-center rounded-[8px] border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 shadow-sm ring-1 ring-inset ring-white/10 hover:bg-white/7 hover:ring-white/20 transition" href="#">
                了解更多
              </a>
</div>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-300/90">
<div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10">
<i className="h-4 w-4 text-amber-400" data-lucide="zap" strokeWidth="1.5"></i>
<span>即刻上手</span>
</div>
<div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10">
<i className="h-4 w-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span>企业级安全</span>
</div>
<div className="flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 p-3 shadow-sm ring-1 ring-inset ring-white/10">
<i className="h-4 w-4 text-sky-400" data-lucide="cpu" strokeWidth="1.5"></i>
<span>性能优化</span>
</div>
</div>
</div>

<div className="w-full md:max-w-xl lg:max-w-2xl">
<div className="relative rounded-[8px] border border-white/10 bg-white/5 p-2 shadow-lg ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<img alt="产品特色预览" className="h-64 w-full object-cover rounded-[6px] sm:h-80 md:h-[420px]" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop" style={{filter: `saturate(1.05) contrast(1.05)`}} />

<div className="absolute bottom-4 left-4 rounded-[8px] border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-sm text-sm text-slate-200 shadow-md ring-1 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-300" data-lucide="activity" strokeWidth="1.5"></i>
<span>实时分析已开启</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="my-12 md:my-16 border-t border-white/10"></div>

<section className="py-0">
<div className="mx-auto max-w-5xl">
<div className="mb-6 md:mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">为效率而生的核心能力</h2>
<p className="mt-2 text-slate-300/90">三大模块协同运作，覆盖从规划到执行的完整流程。</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="rounded-[8px] border border-white/10 bg-indigo-500/10 p-2 text-indigo-300 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="command" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">统一指挥面板</h3>
</div>
<p className="mt-3 text-sm leading-6 text-slate-300/90">
                一处完成创建、分配与追踪，自动同步所有成员的最新状态，减少往返沟通成本。
              </p>
</div>

<div className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="rounded-[8px] border border-white/10 bg-emerald-500/10 p-2 text-emerald-300 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">零信任安全</h3>
</div>
<p className="mt-3 text-sm leading-6 text-slate-300/90">
                端到端加密与细粒度权限控制，确保敏感数据在任何场景下都可控、可追溯。
              </p>
</div>

<div className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="rounded-[8px] border border-white/10 bg-sky-500/10 p-2 text-sky-300 ring-1 ring-inset ring-white/10">
<i className="h-5 w-5" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white">自动化加速</h3>
</div>
<p className="mt-3 text-sm leading-6 text-slate-300/90">
                使用模板与触发器，自动处理重复流程。支持可视化编排，几分钟即可上线。
              </p>
</div>
</div>
</div>
</section>

<div className="my-12 md:my-16 border-t border-white/10"></div>

<section className="py-0">
<div className="mx-auto max-w-5xl">
<div className="mb-6 md:mb-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">来自真实用户的反馈</h2>
<p className="mt-2 text-slate-300/90">他们正在用它加速团队协作与交付。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<figure className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<img alt="客户头像 A" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop" />
<div>
<figcaption className="text-sm font-medium text-white">林澜</figcaption>
<p className="text-xs text-slate-400">产品经理 · 初创团队</p>
</div>
</div>
<blockquote className="mt-3 text-sm leading-6 text-slate-300/90">
                上线不到一周，需求梳理与评审效率提升了至少 35%。界面足够直观，新同事也能快速接手。
              </blockquote>
</figure>

<figure className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<img alt="客户头像 B" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=256&auto=format&fit=crop" />
<div>
<figcaption className="text-sm font-medium text-white">王赫</figcaption>
<p className="text-xs text-slate-400">工程负责人 · SaaS</p>
</div>
</div>
<blockquote className="mt-3 text-sm leading-6 text-slate-300/90">
                自动化流程很强，我们把部署、回滚、通知串在一起，出错率显著降低，发布节奏更稳了。
              </blockquote>
</figure>

<figure className="rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-md ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<img alt="客户头像 C" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop" />
<div>
<figcaption className="text-sm font-medium text-white">程岚</figcaption>
<p className="text-xs text-slate-400">运营总监 · 电商</p>
</div>
</div>
<blockquote className="mt-3 text-sm leading-6 text-slate-300/90">
                数据看板开箱即用，洞察维度清晰。我们把转化分析和投放策略合在一起，决策速度更快了。
              </blockquote>
</figure>
</div>
</div>
</section>

<div className="my-12 md:my-16 border-t border-white/10"></div>

<section className="py-0">
<div className="mx-auto max-w-3xl text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            现在开始，打造更顺滑的团队协作体验
          </h3>
<p className="mt-2 text-slate-300/90">
            免费注册，享受 14 天专业版功能试用，无需绑定信用卡。
          </p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center justify-center rounded-[8px] bg-indigo-500 px-6 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-indigo-400/30 hover:bg-indigo-400 hover:ring-indigo-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-[#0B0F19]" href="#">
              立即注册
            </a>
<a className="inline-flex items-center gap-2 rounded-[8px] border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 shadow-sm ring-1 ring-inset ring-white/10 hover:bg-white/7 hover:ring-white/20 transition" href="#">
<i className="h-4 w-4" data-lucide="mail" strokeWidth="1.5"></i>
              联系销售
            </a>
</div>
<p className="mt-3 text-xs text-slate-400">已符合 GDPR 与 SOC2 要求 · 可签署企业级协议</p>
</div>
</section>

<footer className="py-12 md:py-16">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-[8px] border border-white/10 bg-white/5 p-6 shadow-sm ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-[6px] border border-white/10 bg-white/10 px-2 py-1 text-xs font-semibold tracking-tight text-white ring-1 ring-inset ring-white/10">
                LX
              </div>
<p className="text-sm text-slate-300/90">© 2025 LX Inc. 保留所有权利</p>
</div>
<nav className="flex items-center gap-4 text-sm text-slate-300/90">
<a className="hover:text-white hover:underline underline-offset-4" href="#">隐私</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#">条款</a>
<a className="hover:text-white hover:underline underline-offset-4" href="#">支持</a>
</nav>
</div>
</div>
</footer>
</main>



    </>
  );
}
