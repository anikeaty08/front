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
      
<div className="w-full max-w-3xl mx-auto relative">

<header className="text-center mb-24 space-y-4">
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-black">
                图片拍摄流程&amp;时间模板
            </h1>
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100">
<i className="w-4 h-4 text-gray-400 mr-2" data-lucide="clock"></i>
<p className="text-base text-gray-500 font-normal">
                    完整流程 34-44 个工作日 · 预计 1-1.5 个月
                </p>
</div>
</header>

<div className="relative flex flex-col items-center">

<div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 -translate-x-1/2 z-0"></div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-6 text-2xl text-gray-200 font-light hidden sm:block">01</div>
<div className="dashed-separator absolute top-10 w-full h-px"></div>
<div className="flex flex-col items-center pt-20">

<div className="w-32 h-32 rounded-full bg-black text-white flex flex-col items-center justify-center text-center p-4 shadow-xl ring-4 ring-white">
<span className="text-sm text-gray-400 mb-1 font-normal">Step 01</span>
<span className="text-lg font-medium leading-tight">立项<br/>&amp;需求提出</span>
</div>

<span className="mt-4 text-base text-gray-500 bg-white px-2">重要节点</span>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-0 text-2xl text-gray-200 font-light hidden sm:block">02</div>
<div className="dashed-separator absolute top-4 w-full h-px"></div>
<div className="flex flex-col items-center pt-16 w-full">

<div className="bg-white px-4 py-2 border border-gray-200 rounded-lg shadow-sm mb-8 text-center relative">
<div className="text-lg font-medium text-gray-900">需求梳理</div>
<div className="text-sm text-gray-400 font-normal mt-0.5">2-3 个工作日</div>

<div className="absolute -top-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
<div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
</div>

<div className="w-full max-w-md space-y-4">

<div className="flex items-center w-full">
<div className="flex-1 text-right pr-4 text-base text-gray-600">图片数量 / 版式</div>
<div className="w-8 h-px bg-gray-300"></div>
<div className="w-px h-4 bg-gray-200"></div> 
<div className="flex-1"></div>
</div>

<div className="flex items-center w-full">
<div className="flex-1"></div>
<div className="w-px h-4 bg-gray-200"></div> 
<div className="w-8 h-px bg-gray-300"></div>
<div className="flex-1 pl-4 text-left text-base text-gray-600">场景数量 / 类型</div>
</div>

<div className="flex items-center w-full">
<div className="flex-1 text-right pr-4 text-base text-gray-600">模特人种 / 数量</div>
<div className="w-8 h-px bg-gray-300"></div>
<div className="w-px h-4 bg-gray-200"></div>
<div className="flex-1"></div>
</div>

<div className="flex items-center w-full">
<div className="flex-1"></div>
<div className="w-px h-4 bg-gray-200"></div>
<div className="w-8 h-px bg-gray-300"></div>
<div className="flex-1 pl-4 text-left text-base text-gray-600">风格类型 / 参考图</div>
</div>

<div className="flex justify-center pt-4">
<div className="bg-gray-50 text-gray-500 text-sm px-3 py-1 rounded border border-gray-100">
                                时间线排期
                             </div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-6 text-2xl text-gray-200 font-light hidden sm:block">03</div>
<div className="dashed-separator absolute top-10 w-full h-px"></div>
<div className="flex flex-col items-center pt-24">
<div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex flex-col items-center justify-center text-center shadow-sm ring-8 ring-white z-10 hover:border-black transition-colors duration-300">
<span className="text-base font-medium text-black">需求确认</span>
</div>
<span className="mt-3 text-sm text-gray-400 bg-white px-2">重要节点</span>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-0 text-2xl text-gray-200 font-light hidden sm:block">04</div>
<div className="dashed-separator absolute top-4 w-full h-px"></div>
<div className="flex flex-col items-center pt-16 w-full">

<div className="bg-white px-5 py-3 border border-gray-200 rounded-lg shadow-sm mb-8 text-center relative z-10">
<div className="text-lg font-medium text-gray-900">方案制作</div>
<div className="text-sm text-gray-400 font-normal mt-0.5">5 个工作日</div>

<div className="absolute -top-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
<div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
</div>

<div className="w-full max-w-md space-y-6">

<div className="flex items-start w-full group">
<div className="flex-1 text-right pr-4 pt-1">
<span className="block text-base font-medium text-gray-900">调性 &amp; 影调</span>
<span className="block text-sm text-gray-400">视觉创意核心</span>
</div>
<div className="flex flex-col items-center h-full">
<div className="w-8 h-px bg-gray-300 mt-3 group-hover:bg-gray-400 transition-colors"></div>
</div>
<div className="w-px h-12 bg-gray-200 mx-[0.5px]"></div>
<div className="flex-1"></div>
</div>

<div className="flex items-start w-full group">
<div className="flex-1"></div>
<div className="w-px h-12 bg-gray-200 mx-[0.5px]"></div>
<div className="flex flex-col items-center h-full">
<div className="w-8 h-px bg-gray-300 mt-3 group-hover:bg-gray-400 transition-colors"></div>
</div>
<div className="flex-1 pl-4 pt-1 text-left">
<span className="block text-base font-medium text-gray-900">参考展示</span>
<span className="block text-sm text-gray-400">模特 / 情绪 / 服装 / 场地</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-6 text-2xl text-gray-200 font-light hidden sm:block">05</div>
<div className="dashed-separator absolute top-10 w-full h-px"></div>
<div className="flex flex-col items-center pt-20">
<div className="w-28 h-28 rounded-full bg-black text-white flex flex-col items-center justify-center text-center p-2 shadow-xl ring-4 ring-white">
<span className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Review</span>
<span className="text-base font-medium leading-tight">方案评审</span>
<span className="text-xs text-gray-500 mt-1">调整及确认</span>
</div>
<span className="mt-4 text-sm text-gray-500 bg-white px-2">重要节点 · 5 个工作日</span>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-0 text-2xl text-gray-200 font-light hidden sm:block">06</div>
<div className="dashed-separator absolute top-4 w-full h-px"></div>
<div className="flex flex-col items-center pt-16 w-full">

<div className="bg-white px-5 py-3 border border-gray-200 rounded-lg shadow-sm mb-8 text-center relative z-10">
<div className="text-lg font-medium text-gray-900">方案落地</div>
<div className="text-sm text-gray-400 font-normal mt-0.5">7-10 个工作日</div>
<div className="absolute -top-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
<div className="absolute -bottom-8 left-1/2 w-px h-8 bg-gray-200 -translate-x-1/2"></div>
</div>

<div className="w-full max-w-md flex flex-col items-center">
<div className="h-8 w-px bg-gray-200"></div>

<div className="space-y-4 w-full px-8">
<div className="flex items-center justify-between group">
<span className="text-base text-gray-500 group-hover:text-black transition-colors">供应商建联 &amp; Brief</span>
<div className="h-px bg-gray-200 flex-1 mx-4"></div>
<i className="w-4 h-4 text-gray-300" data-lucide="users"></i>
</div>
<div className="flex items-center justify-between group">
<span className="text-base text-gray-500 group-hover:text-black transition-colors">场地 / 模特资料</span>
<div className="h-px bg-gray-200 flex-1 mx-4"></div>
<i className="w-4 h-4 text-gray-300" data-lucide="image"></i>
</div>
<div className="flex items-center justify-between group">
<span className="text-base text-gray-500 group-hover:text-black transition-colors">服装 / 拍摄方案</span>
<div className="h-px bg-gray-200 flex-1 mx-4"></div>
<i className="w-4 h-4 text-gray-300" data-lucide="shirt"></i>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 mb-16">
<div className="absolute left-0 top-6 text-2xl text-gray-200 font-light hidden sm:block">07</div>
<div className="dashed-separator absolute top-10 w-full h-px"></div>
<div className="flex flex-col items-center pt-24">

<div className="w-24 h-24 rounded-full bg-white border-2 border-black flex flex-col items-center justify-center text-center shadow-none ring-8 ring-white z-10">
<span className="text-base font-semibold text-black leading-tight">执行资料<br/>确认</span>
</div>
<span className="mt-3 text-sm text-gray-400 bg-white px-2">重要节点</span>
</div>
</div>

<div className="w-full relative z-10 pb-12">
<div className="absolute left-0 top-0 text-2xl text-gray-200 font-light hidden sm:block">08</div>
<div className="dashed-separator absolute top-4 w-full h-px"></div>
<div className="flex flex-col items-center pt-16 w-full">
<div className="flex flex-col items-center">
<div className="text-lg font-medium text-gray-900 bg-white relative z-10 px-2">拍摄筹备</div>
<div className="text-sm text-gray-400 mt-1 mb-6">5-7 个工作日</div>

<div className="h-12 w-px bg-gray-200 mb-2"></div>

<div className="flex space-x-2">
<span className="px-3 py-1 bg-gray-50 text-gray-500 text-sm rounded border border-gray-100">器材准备</span>
<span className="px-3 py-1 bg-gray-50 text-gray-500 text-sm rounded border border-gray-100">人员通告</span>
<span className="px-3 py-1 bg-gray-50 text-gray-500 text-sm rounded border border-gray-100">样品管理</span>
</div>
</div>
</div>
</div>

<div className="w-2 h-2 rounded-full bg-gray-300 relative z-10 mt-8"></div>
</div>
</div>


    </>
  );
}
