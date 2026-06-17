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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-neutral-900 flex items-center gap-2" href="#">
<span className="w-5 h-5 bg-neutral-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">B</span>
                BLOG.
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">首页</a>
<a className="text-neutral-900" href="#">文章</a>
<a className="hover:text-neutral-900 transition-colors" href="#">项目</a>
<a className="hover:text-neutral-900 transition-colors" href="#">关于</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="md:hidden text-neutral-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">

<section className="mb-20">
<div className="max-w-2xl">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 leading-[1.15]">
                    探索设计、代码与<br/>数字产品的构建艺术。
                </h1>
<p className="text-lg text-neutral-500 leading-relaxed max-w-lg font-light">
                    在这里，我记录关于前端开发、界面设计以及极简主义生活方式的思考。
                </p>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-md hover:bg-neutral-800 transition-all shadow-sm" href="#latest">
                        浏览文章
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-neutral-600 bg-white border border-neutral-200 rounded-md hover:bg-neutral-50 transition-all" href="#">
                        订阅周刊
                    </a>
</div>
</div>
</section>

<section className="mb-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">精选文章</h2>
</div>
<a className="group block relative overflow-hidden rounded-xl bg-white border border-neutral-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300" href="#">
<div className="grid md:grid-cols-2 gap-0">
<div className="aspect-[4/3] md:aspect-auto overflow-hidden bg-neutral-100 relative">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-100 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-300">
<iconify-icon icon="lucide:image" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="flex items-center gap-3 text-xs font-medium text-neutral-500 mb-4">
<span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">设计系统</span>
<span>2023年 10月 24日</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 mb-4 group-hover:text-neutral-700 transition-colors">
                            如何构建可扩展的 UI 组件库：从原则到实践
                        </h3>
<p className="text-neutral-500 leading-relaxed mb-6 font-light">
                            在现代 Web 开发中，一致性是关键。本文将深入探讨原子设计理论，以及如何利用 Tailwind CSS 构建一个既灵活又统一的设计系统。
                        </p>
<div className="flex items-center text-sm font-medium text-neutral-900 group-hover:translate-x-1 transition-transform">
                            阅读全文 
                            <iconify-icon className="ml-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</a>
</section>

<section className="mb-24" id="latest">
<div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
<h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">最新发布</h2>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1" href="#">
                    查看全部 <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="flex flex-col group">
<a className="block overflow-hidden rounded-lg bg-neutral-100 mb-5 aspect-[3/2] relative border border-neutral-200/50" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-50 to-orange-50 group-hover:scale-105 transition-transform duration-500"></div>
</a>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
<span>工程化</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>5 分钟阅读</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                            Next.js 14 的新特性解析与迁移指南
                        </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                            Server Actions 带来了全新的数据变更模式。我们将详细分析这对现有的 React 应用架构意味着什么。
                        </p>
</div>
</article>

<article className="flex flex-col group">
<a className="block overflow-hidden rounded-lg bg-neutral-100 mb-5 aspect-[3/2] relative border border-neutral-200/50" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 group-hover:scale-105 transition-transform duration-500"></div>
</a>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
<span>思考</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>3 分钟阅读</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                            为什么极简主义设计往往更难实现？
                        </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                            "少即是多"不仅仅是一句口号。它要求设计师在每一个像素上做出更慎重的决定。
                        </p>
</div>
</article>

<article className="flex flex-col group">
<a className="block overflow-hidden rounded-lg bg-neutral-100 mb-5 aspect-[3/2] relative border border-neutral-200/50" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 to-teal-50 group-hover:scale-105 transition-transform duration-500"></div>
</a>
<div className="flex flex-col flex-1">
<div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
<span>工具</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span>4 分钟阅读</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                            2024 年高效开发者的装备清单
                        </h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4 line-clamp-2">
                            从终端配置到物理外设，分享一些能显著提升日常编程幸福感和效率的工具。
                        </p>
</div>
</article>
</div>
</section>

<section className="mb-24">
<h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-8">过往归档</h2>
<div className="space-y-6">

<a className="group flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-neutral-100 hover:border-neutral-200 transition-colors" href="#">
<div className="md:w-3/4 pr-4">
<h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">深入理解 React 并发模式</h3>
<p className="mt-1 text-sm text-neutral-500 line-clamp-1 font-light">探索 Fiber 架构下的时间切片与优先级调度机制。</p>
</div>
<div className="mt-2 md:mt-0 text-xs text-neutral-400 font-mono">
                        2023-09-12
                    </div>
</a>

<a className="group flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-neutral-100 hover:border-neutral-200 transition-colors" href="#">
<div className="md:w-3/4 pr-4">
<h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">CSS Grid 网格布局完全指南</h3>
<p className="mt-1 text-sm text-neutral-500 line-clamp-1 font-light">不再依赖 Flexbox，用二维布局系统解决复杂排版问题。</p>
</div>
<div className="mt-2 md:mt-0 text-xs text-neutral-400 font-mono">
                        2023-08-28
                    </div>
</a>

<a className="group flex flex-col md:flex-row md:items-baseline justify-between py-4 border-b border-neutral-100 hover:border-neutral-200 transition-colors" href="#">
<div className="md:w-3/4 pr-4">
<h3 className="text-base font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">重构：改善既有代码的设计</h3>
<p className="mt-1 text-sm text-neutral-500 line-clamp-1 font-light">读后感与实际项目中的应用案例分享。</p>
</div>
<div className="mt-2 md:mt-0 text-xs text-neutral-400 font-mono">
                        2023-08-15
                    </div>
</a>
</div>
</section>

<section className="rounded-2xl bg-neutral-900 text-neutral-50 p-8 md:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-xl">
<div className="flex items-center gap-2 mb-4 text-neutral-400">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest">订阅更新</span>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">加入我们的每周邮件列表</h3>
<p className="text-neutral-400 font-light mb-8 text-sm leading-relaxed">
                    每周一发送。包含最新的文章更新、设计资源推荐以及一些代码片段。无垃圾邮件，随时退订。
                </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all" placeholder="你的邮箱地址" type="email"/>
<button className="px-5 py-2.5 bg-white text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-100 transition-colors whitespace-nowrap" type="button">
                        立即订阅
                    </button>
</form>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-base font-semibold tracking-tighter text-neutral-900 flex items-center gap-2 mb-2" href="#">
<span className="w-4 h-4 bg-neutral-900 rounded-full flex items-center justify-center text-white text-[8px] font-bold">B</span>
                    BLOG.
                </a>
<p className="text-xs text-neutral-400 font-light">© 2024 Design &amp; Code. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="lucide:figma" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
