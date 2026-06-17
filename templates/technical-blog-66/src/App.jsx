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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur">
<div className="flex sm:px-6 md:px-8 h-[60px] max-w-[1376px] mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="font-medium text-lg text-[#1b1b1f]">广习习的博客</div>
<div className="flex items-center gap-6">
<div className="hidden sm:flex items-center gap-2 rounded-md bg-[#f6f6f7] hover:bg-gray-200 px-3 py-1.5 text-base text-gray-500 cursor-pointer transition-colors">
<i className="h-4 w-4" data-lucide="search"></i>
<span>Search</span>
<span className="ml-2 rounded border border-gray-300 bg-white px-1.5 py-0.5 text-sm leading-none font-medium">Ctrl K</span>
</div>
<nav className="hidden md:flex gap-5 text-base font-medium">
<a className="text-[#3c3c43] hover:text-[#3451b2] transition-colors" href="#">首页</a>
<a className="text-[#3c3c43] hover:text-[#3451b2] transition-colors" href="#">博客</a>
<a className="text-[#3c3c43] hover:text-[#3451b2] transition-colors" href="#">关于</a>
</nav>
<div className="flex items-center gap-4 ml-2">
<button className="text-gray-500 hover:text-[#3c3c43] transition-colors">
<i className="h-5 w-5" data-lucide="sun"></i>
</button>
<button className="text-gray-500 hover:text-[#3c3c43] transition-colors">
<i className="h-5 w-5" data-lucide="github"></i>
</button>
</div>
</div>
</div>
</header>

<div className="mx-auto max-w-[1376px] px-4 sm:px-6 md:px-8 flex items-start justify-center">

<aside className="hidden lg:block w-64 shrink-0 py-10 pr-8 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
<nav className="space-y-6">
<div className="">
<button className="flex w-full items-center justify-between py-1.5 text-base font-medium text-[#1b1b1f]">
<span>前端</span>
<i className="h-4 w-4 text-gray-400" data-lucide="chevron-down"></i>
</button>
<ul className="mt-2 space-y-1.5 border-l border-gray-200 pl-4">
<li>
<a className="block py-1 text-base text-[#3451b2] font-normal" href="#">在win11开发兼容ie的网页</a>
</li>
<li className="">
<a className="block py-1 text-base text-[#3c3c43] hover:text-[#3451b2] transition-colors font-normal" href="#">最近开发时遇到的问题(var和async)</a>
</li>
</ul>
</div>
<div className="">
<button className="flex w-full items-center justify-between py-1.5 text-base font-medium text-[#1b1b1f]">
<span>总结</span>
<i className="h-4 w-4 text-gray-400" data-lucide="chevron-right"></i>
</button>
</div>
<div className="">
<button className="flex w-full items-center justify-between py-1.5 text-base font-medium text-[#1b1b1f]">
<span>vitepress示例</span>
<i className="h-4 w-4 text-gray-400" data-lucide="chevron-right"></i>
</button>
</div>
</nav>
</aside>

<main className="min-w-0 max-w-3xl flex-1 py-12 lg:px-8 xl:px-12 w-full">
<h1 className="text-[32px] font-semibold tracking-tight text-[#1b1b1f] mb-6 -tracking-[0.02em]">在win11开发兼容ie的网页</h1>
<div className="flex flex-col gap-5 mb-10">
<div className="text-base text-gray-500">更新时间 : 2025-11-27 11:29</div>
<div className="flex gap-3">
<span className="inline-flex items-center justify-center rounded bg-[#2080f0]/10 px-2.5 py-1 text-sm font-medium text-[#2080f0]">ie</span>
<span className="inline-flex items-center justify-center rounded bg-[#2080f0]/10 px-2.5 py-1 text-sm font-medium text-[#2080f0]">兼容</span>
</div>
</div>
<h2 className="text-2xl font-semibold text-[#1b1b1f] tracking-tight border-gray-200 border-t mt-12 mb-6 pt-6">目标是什么</h2>
<p className="text-lg leading-relaxed mb-4 text-[#3c3c43]">这里指的是语法的兼容，目标版本是ie8。我平时语法用到的比如</p>
<ul className="list-disc pl-5 space-y-2 mb-6 text-lg text-[#3c3c43] marker:text-gray-400">
<li className="pl-1">
<code className="rounded bg-[#f6f6f7] px-1.5 py-0.5 text-base font-mono text-[#3c3c43]">Arrow functions () =&gt; {}</code>
</li>
<li className="pl-1">
<code className="rounded bg-[#f6f6f7] px-1.5 py-0.5 text-base font-mono text-[#3c3c43]">Optional chaining operator (?.)</code>
</li>
</ul>

<div className="mb-6 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center min-h-[180px] max-w-full relative shadow-sm">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMjUwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2Y2ZjZmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ExYTFhYSI+Q2FuaXVzZSBTY3JlZW5zaG90PC90ZXh0Pjwvc3ZnPg==')] bg-cover bg-center opacity-70"></div>
</div>
<p className="text-lg leading-relaxed mb-8 text-[#3c3c43]">
                可以在 <a className="text-[#3451b2] font-medium hover:underline underline-offset-4 decoration-1" href="#">语法搜索</a> 查看语法兼容情况
            </p>
<h2 className="text-2xl font-semibold tracking-tight text-[#1b1b1f] mt-12 mb-6 border-t border-gray-200 pt-6">开发环境搭建</h2>
<p className="text-lg leading-relaxed mb-4 text-[#3c3c43]">
                在 win11 系统，目前来说最简单的方法是使用 <code className="rounded bg-[#f6f6f7] px-1.5 py-0.5 text-base font-mono text-[#3451b2]">edge</code> 的 <code className="rounded bg-[#f6f6f7] px-1.5 py-0.5 text-base font-mono text-[#3c3c43]">ie兼容模式</code> ，缺点是不确定使用的是什么版本的。
            </p>
<p className="text-lg leading-relaxed mb-4 text-[#3c3c43]">
                有一个方法可以调出ie的原生软件页面。可以参考 <a className="text-[#3451b2] font-medium hover:underline underline-offset-4 decoration-1" href="#">Win11 打开 IE 浏览器 - 简书</a>
</p>
<p className="text-lg leading-relaxed mb-4 text-[#3c3c43]">总结一下：</p>
<ul className="list-disc pl-5 space-y-2 mb-6 text-lg text-[#3c3c43] marker:text-gray-400">
<li className="pl-1">在 edge 允许启用 ie兼容模式</li>
<li className="pl-1">创建 vbs 脚本 <code className="rounded bg-[#f6f6f7] px-1.5 py-0.5 text-base font-mono text-[#3c3c43]">CreateObject("InternetExplorer.Application").Visible=true</code></li>
</ul>

<div className="mb-12 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center min-h-[140px] max-w-full relative shadow-sm">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MDAiIGhlaWdodD0iMjAwIiBmaWxsPSJub25lIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y2ZjZmNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ExYTFhYSI+RWRnZSBJRSBNb2RlIFNldHRpbmdzPC90ZXh0Pjwvc3ZnPg==')] bg-cover bg-center opacity-70"></div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-[#1b1b1f] mt-12 mb-6 border-t border-gray-200 pt-6">IE浏览器问题</h2>
<ol className="list-decimal pl-5 space-y-2 mb-16 text-lg text-[#3c3c43] marker:text-gray-500">
<li className="pl-1">
                    升级win11后,IE调试工具-网络-网络集合代理无法启动，<a className="text-[#3451b2] font-medium hover:underline underline-offset-4 decoration-1" href="#">win11 24H2删除了老的依赖，参考链接评论</a>
</li>
</ol>
<div className="mt-16 text-base text-gray-500 mb-4">最后一次编辑: 6 天前</div>
<div className="bg-[#f6f6f7] rounded-lg p-4 mb-10 flex items-center gap-2 cursor-pointer hover:bg-gray-200/50 transition-colors">
<i className="h-4 w-4 text-gray-500" data-lucide="chevron-right"></i>
<span className="text-base text-[#3c3c43] font-medium">查看所有历史</span>
</div>
<div className="border-t border-gray-200 pt-8 pb-16 flex justify-center">
<button className="text-base text-gray-500 hover:text-[#1b1b1f] font-medium transition-colors">github登录</button>
</div>
</main>

<aside className="hidden xl:block shrink-0 sticky h-[calc(100vh-60px)] overflow-y-auto w-[240px] pt-12 pb-12 pl-6 top-[60px]">
<div className="mb-4 text-base font-medium text-[#1b1b1f] tracking-tight">目录</div>
<nav className="border-l border-gray-200">
<ul className="space-y-3">
<li className="">
<a className="block pl-4 text-base text-[#3c3c43] hover:text-[#3451b2] transition-colors font-normal" href="#">目标是什么</a>
</li>
<li className="">
<a className="block pl-4 text-base text-[#3c3c43] hover:text-[#3451b2] transition-colors font-normal" href="#">开发环境搭建</a>
</li>
</ul>
</nav>
</aside>
</div>


    </>
  );
}
