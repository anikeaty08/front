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
      

<nav className="bg-white border-b border-gray-200 h-16 px-4 flex items-center justify-between shadow-sm shrink-0 z-30">

<div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pr-4">

<button className="flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
<span>创建事项</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:list-todo" data-width="14"></span>
<span>待完成</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
<span>已完成</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
<span>AI 辅助</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:calendar" data-width="14"></span>
<span>日历</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all whitespace-nowrap">
<span className="iconify" data-icon="lucide:sticky-note" data-width="14"></span>
<span>便签</span>
</button>
</div>

<div className="flex items-center gap-4 shrink-0 pl-2 bg-white">

<div className="relative hidden md:flex items-center group">
<div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-gray-900">
<span className="iconify" data-icon="lucide:search" data-width="14"></span>
</div>
<input className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg block w-48 pl-8 pr-8 py-1.5 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 focus:outline-none transition-all placeholder-gray-400" placeholder="搜索任务..." type="text"/>
<button className="absolute inset-y-0 right-0 pr-2 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer">
<span className="iconify" data-icon="lucide:rotate-cw" data-width="12"></span>
</button>
</div>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 px-3 py-1.5 rounded-md shadow-sm text-xs font-medium transition-all">
<span className="iconify" data-icon="lucide:printer" data-width="14"></span>
<span>打印</span>
</button>

<div className="hidden lg:flex flex-col items-end leading-none">
<span className="text-sm font-bold text-gray-800 tracking-tight font-mono">11:33:20</span>
<span className="text-[10px] text-gray-500 font-medium">2025-12-19 周五</span>
</div>

<button className="text-gray-400 hover:text-gray-600 relative">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>

<div className="flex items-center gap-2 border-l border-gray-200 pl-4">
<img alt="User" className="w-7 h-7 rounded-full border border-gray-200" src="https://ui-avatars.com/api/?name=Admin&amp;background=0f172a&amp;color=fff"/>
<span className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer">设置</span>
</div>
</div>
</nav>

<div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between gap-4 overflow-x-auto z-20 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
<div className="flex items-center gap-2">

<button className="flex items-center gap-1.5 bg-gray-900 text-white px-3 py-1 rounded shadow-sm text-xs font-medium hover:bg-black transition-colors">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span>全部</span>
</button>

<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-indigo-500"></span>
<span>协同事项</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-blue-500"></span>
<span>个人事项</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-red-500"></span>
<span>重要紧急</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-emerald-500"></span>
<span>重要不紧急</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-amber-500"></span>
<span>紧急不重要</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-gray-400"></span>
<span>不重要不紧急</span>
</button>
<button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded hover:border-gray-300 hover:bg-gray-50 text-xs font-medium transition-colors">
<span className="w-1.5 h-1.5 rounded-sm bg-purple-500"></span>
<span>例行事项</span>
</button>
</div>

<div className="flex items-center border border-gray-200 rounded-lg overflow-hidden shrink-0">
<button className="px-2 py-1 hover:bg-gray-50 text-gray-500 border-r border-gray-200">
<span className="iconify" data-icon="lucide:zoom-in" data-width="14"></span>
</button>
<button className="px-2 py-1 hover:bg-gray-50 text-gray-500 border-r border-gray-200 text-xs font-medium">
                恢复
            </button>
<button className="px-2 py-1 hover:bg-gray-50 text-gray-500">
<span className="iconify" data-icon="lucide:zoom-out" data-width="14"></span>
</button>
</div>
</div>

<main className="flex-1 overflow-auto bg-gray-50 w-full relative">
<div className="min-w-max">
<table className="w-full text-left border-collapse">
<thead className="bg-gray-50 sticky top-0 z-10 shadow-sm border-b border-gray-200">
<tr>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-10 text-center border-r border-gray-100">ID</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-16 text-center border-r border-gray-100">状态</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-16 text-center border-r border-gray-100">分类</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-28 text-center border-r border-gray-100">优先级</th>
<th className="py-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-tight border-r border-gray-100 min-w-[300px]">待办事项</th>
<th className="py-2 px-4 text-xs font-semibold text-gray-500 uppercase tracking-tight border-r border-gray-100 w-64">进度反馈</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-16 text-center border-r border-gray-100">工期</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-20 text-center border-r border-gray-100">开始时间</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-20 text-center border-r border-gray-100">完成时间</th>
<th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase tracking-tight w-40 text-center">操作</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-100 text-xs text-gray-700">

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-sky-400 text-white text-[10px] px-1 rounded-sm">顶</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">个人</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要不紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            HaningGroup.com 多语种网站建设
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">105天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-800 font-medium">03-31</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">

<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black" title="完成">OK</button>

<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200" title="删除">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200" title="催办">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400" title="取消">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200" title="详情">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 flex justify-center gap-1">
<span className="inline-block bg-sky-400 text-white text-[10px] px-1 rounded-sm">顶</span>
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">例/日</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要不紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            网站流量查巡/SEO关键词抽查/服务器日志/AI动态资讯
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-16</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 flex justify-center gap-1">
<span className="inline-block bg-sky-400 text-white text-[10px] px-1 rounded-sm">顶</span>
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">协同</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            测试 待办事项 前端用户体验
                        </td>
<td className="py-2 px-4 border-r border-gray-100 flex items-center justify-between">
<span className="truncate text-[10px] text-gray-500 w-48">刘志辉: 简单AI辅助功能已经加上。</span>
<span className="iconify text-gray-400 hover:text-blue-600 cursor-pointer shrink-0" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-16</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">协同</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            待办事项系统 前端鼠标改成 纯黑色或红色看看效果。
                        </td>
<td className="py-2 px-4 border-r border-gray-100 flex items-center justify-between">
<span className="truncate text-[10px] text-gray-500 w-48">刘志辉: 已修改成红色</span>
<span className="iconify text-gray-400 hover:text-blue-600 cursor-pointer shrink-0" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-16</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">协同</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            超激鼓（百科）提报与跟进
                        </td>
<td className="py-2 px-4 border-r border-gray-100 flex items-center justify-between">
<span className="truncate text-[10px] text-gray-500 w-48">杨金威: 修改“超激鼓”词条...</span>
<span className="iconify text-gray-400 hover:text-blue-600 cursor-pointer shrink-0" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">3天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-19</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">

</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">协同</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-emerald-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要不紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            汉印激光打印机GEO
                        </td>
<td className="py-2 px-4 border-r border-gray-100 flex items-center justify-between">
<span className="truncate text-[10px] text-gray-500 w-48">林泳: 测试</span>
<span className="iconify text-gray-400 hover:text-blue-600 cursor-pointer shrink-0" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">15天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-16</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-800 font-medium">12-31</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="bg-yellow-50 hover:bg-yellow-100/80 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">个人</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            未命名任务
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-18</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-18</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">个人</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">重要紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            未命名任务
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-18</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-18</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">个人</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-amber-500 text-white px-2 py-0.5 rounded text-[10px] font-medium">紧急不重要</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            未命名任务
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-18</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-18</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="py-2 px-2 text-center text-gray-400 border-r border-gray-100">
<span className="iconify mx-auto" data-icon="lucide:grip-vertical" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="inline-block bg-pink-400 text-white text-[10px] px-1 rounded-sm">逾</span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">个人</td>
<td className="py-2 px-2 text-center border-r border-gray-100">
<span className="bg-gray-800 text-white px-2 py-0.5 rounded text-[10px] font-medium">不重要不紧急</span>
</td>
<td className="py-2 px-4 border-r border-gray-100 font-medium text-gray-800">
                            未命名任务
                        </td>
<td className="py-2 px-4 border-r border-gray-100 text-right">
<span className="iconify text-gray-400 hover:text-blue-600 inline ml-auto cursor-pointer" data-icon="lucide:list" data-width="14"></span>
</td>
<td className="py-2 px-2 text-center border-r border-gray-100">1天</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-gray-500">12-18</td>
<td className="py-2 px-2 text-center border-r border-gray-100 text-red-500 font-medium">12-18</td>
<td className="py-2 px-2 text-center">
<div className="flex items-center justify-center gap-1 opacity-80 group-hover:opacity-100">
<button className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-[10px] font-medium hover:bg-black">OK</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-red-600 hover:border-red-200">删</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-amber-500 hover:border-amber-200">催</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-gray-900 hover:border-gray-400">消</button>
<button className="w-6 h-6 bg-white border border-gray-200 text-gray-500 rounded flex items-center justify-center text-[10px] font-medium hover:text-blue-600 hover:border-blue-200">详</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</main>

    </>
  );
}
