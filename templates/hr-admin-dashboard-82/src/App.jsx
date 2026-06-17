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
      

<aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between flex-shrink-0 z-30 transition-all duration-300 hidden md:flex">
<div>

<div className="h-20 flex items-center px-8 border-b border-gray-50">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mr-3 shadow-lg shadow-blue-200">
<span className="text-white font-bold text-xl">W</span>
</div>
<span className="text-xl font-bold tracking-tight text-gray-800">管理系统</span>
</div>

<nav className="p-4 space-y-1 mt-2">
<a className="flex items-center px-4 py-3 bg-blue-50 text-blue-600 rounded-xl group transition-all duration-200 shadow-sm shadow-blue-100" href="#">
<i className="w-5 h-5 mr-3" data-lucide="home"></i>
<span className="font-medium text-sm">首页</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="layout-dashboard"></i>
<span className="font-medium text-sm">工作台</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="user-plus"></i>
<span className="font-medium text-sm">新增员工</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="calendar-clock"></i>
<span className="font-medium text-sm">日程待办</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="file-text"></i>
<span className="font-medium text-sm">工资条</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="armchair"></i>
<span className="font-medium text-sm">会议室预定</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="users"></i>
<span className="font-medium text-sm">候选人</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="clipboard-check"></i>
<span className="font-medium text-sm">绩效</span>
</a>
<a className="flex items-center px-4 py-3 text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-xl group transition-all duration-200" href="#">
<i className="w-5 h-5 mr-3 group-hover:text-blue-500 transition-colors" data-lucide="settings"></i>
<span className="font-medium text-sm">设置</span>
</a>
</nav>
</div>

<div className="p-6 border-t border-gray-50">
<button className="flex items-center text-gray-400 hover:text-blue-600 transition-colors w-full group">
<div className="p-2 rounded-lg group-hover:bg-blue-50 transition-colors mr-2">
<i className="w-5 h-5" data-lucide="chevrons-left"></i>
</div>
<span className="font-medium text-sm">收起左侧栏</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 flex-shrink-0 z-20">

<div className="flex items-center bg-gray-50/80 rounded-full px-5 py-2.5 w-96 border border-transparent focus-within:border-blue-100 focus-within:bg-white transition-all">
<i className="w-4 h-4 text-gray-400 mr-3" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm text-gray-600 w-full placeholder-gray-400" placeholder="搜索功能、员工或文件..." type="text"/>
</div>

<div className="flex items-center space-x-8">
<button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
<i className="w-4 h-4" data-lucide="plus"></i>
<span>发起审批</span>
</button>
<div className="flex items-center space-x-6 border-l border-gray-100 pl-8">
<div className="relative cursor-pointer group">
<div className="p-2 rounded-full group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" data-lucide="bell"></i>
</div>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</div>
<div className="flex items-center space-x-3 cursor-pointer group">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-100 group-hover:border-blue-200 transition-colors object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-800">吴珊珊</span>
<span className="text-[10px] text-gray-400">招聘专员</span>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 no-scrollbar scroll-smooth">
<div className="max-w-[1600px] mx-auto space-y-6 pb-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="col-span-12 lg:col-span-5 bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base font-bold text-gray-800 flex items-center">
<span className="w-1 h-4 bg-blue-500 rounded-full mr-2"></span>
                                招聘数据
                            </h2>
<button className="text-gray-400 hover:text-blue-600 transition-colors"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="grid grid-cols-3 gap-4">

<div className="group relative p-4 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-50 hover:border-blue-100 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-white text-blue-600 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-gray-800 font-num">12</span>
<span className="text-xs text-gray-500 mt-1 font-medium">待面试</span>
</div>
</div>

<div className="group relative p-4 rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-50 hover:border-orange-100 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-white text-orange-500 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="filter"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-gray-800 font-num">3</span>
<span className="text-xs text-gray-500 mt-1 font-medium">待初筛</span>
</div>
</div>

<div className="group relative p-4 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-50 hover:border-green-100 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-lg bg-white text-green-600 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<div className="flex flex-col">
<span className="text-2xl font-bold text-gray-800 font-num">148</span>
<span className="text-xs text-gray-500 mt-1 font-medium">新增候选人</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base font-bold text-gray-800 flex items-center">
<span className="w-1 h-4 bg-purple-500 rounded-full mr-2"></span>
                                人员状态
                            </h2>
<button className="text-gray-400 hover:text-blue-600 transition-colors"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="grid grid-cols-3 gap-6">

<div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<div>
<div className="text-2xl font-bold text-gray-800 font-num group-hover:text-indigo-600 transition-colors">10<span className="text-xs font-normal text-gray-400 ml-1">人</span></div>
<div className="text-xs font-medium text-gray-500">待入职</div>
</div>
</div>

<div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mr-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div>
<div className="text-2xl font-bold text-gray-800 font-num group-hover:text-cyan-600 transition-colors">128<span className="text-xs font-normal text-gray-400 ml-1">人</span></div>
<div className="text-xs font-medium text-gray-500">待转正</div>
</div>
</div>

<div className="flex items-center p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center mr-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="user-x"></i>
</div>
<div>
<div className="text-2xl font-bold text-gray-800 font-num group-hover:text-red-500 transition-colors">6<span className="text-xs font-normal text-gray-400 ml-1">人</span></div>
<div className="text-xs font-medium text-gray-500">待离职</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[calc(100vh-280px)] min-h-[600px]">

<div className="col-span-12 xl:col-span-3 lg:col-span-4 bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50 flex flex-col">
<div className="flex justify-between items-center mb-8">
<h2 className="text-base font-bold text-gray-800 flex items-center">
<span className="w-1 h-4 bg-blue-600 rounded-full mr-2"></span>
                                招聘岗位
                            </h2>
<button className="text-xs text-blue-500 font-medium hover:underline">全部</button>
</div>
<div className="flex-1 flex flex-col items-center justify-start pt-4 relative">

<div className="relative w-56 h-56">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<path className="text-gray-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5"></path>

<path className="text-blue-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="60, 100" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="text-cyan-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="18, 100" stroke-dashoffset="-62" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="text-purple-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="8, 100" stroke-dashoffset="-82" strokeLinecap="round" strokeWidth="2.5"></path>
<path className="text-yellow-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="12, 100" stroke-dashoffset="-92" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-4xl font-bold text-gray-800 font-num">66</span>
<span className="text-xs text-gray-400 font-medium mt-1">总计</span>
</div>
</div>

<div className="w-full mt-8 space-y-3">
<div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors cursor-default">
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-blue-600 mr-3"></span>
<span className="text-xs font-medium text-gray-600">销售部门</span>
</div>
<span className="text-xs font-bold font-num text-gray-800">40<span className="font-normal text-gray-400 ml-1">个</span></span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors cursor-default">
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-cyan-400 mr-3"></span>
<span className="text-xs font-medium text-gray-600">技术部门</span>
</div>
<span className="text-xs font-bold font-num text-gray-800">12<span className="font-normal text-gray-400 ml-1">个</span></span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors cursor-default">
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-yellow-400 mr-3"></span>
<span className="text-xs font-medium text-gray-600">会计部门</span>
</div>
<span className="text-xs font-bold font-num text-gray-800">10<span className="font-normal text-gray-400 ml-1">个</span></span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors cursor-default">
<div className="flex items-center">
<span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-3"></span>
<span className="text-xs font-medium text-gray-600">行政部门</span>
</div>
<span className="text-xs font-bold font-num text-gray-800">1<span className="font-normal text-gray-400 ml-1">个</span></span>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-gray-50">
<div className="flex items-center justify-between bg-blue-50/50 rounded-lg p-3 border border-blue-50/50">
<span className="text-xs text-gray-500 font-medium">待发布岗位: <span className="text-gray-800 font-bold ml-1">5</span></span>
<button className="text-[10px] text-blue-600 font-semibold flex items-center hover:underline">
                                     查看详情 <i className="w-3 h-3 ml-0.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-6 lg:col-span-8 bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50 flex flex-col">
<div className="flex justify-between items-center mb-6">
<div className="flex space-x-8 text-sm border-b border-gray-100 w-full">
<button className="font-bold text-gray-800 border-b-2 border-blue-600 pb-3 px-1 transition-all">全部</button>
<button className="text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-200 pb-3 px-1 transition-all">销售</button>
<button className="text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-200 pb-3 px-1 transition-all">会计</button>
<button className="text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-200 pb-3 px-1 transition-all">行政</button>
<button className="text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-200 pb-3 px-1 transition-all">技术</button>
<button className="text-gray-400 hover:text-gray-600 border-b-2 border-transparent hover:border-gray-200 pb-3 px-1 transition-all">运营</button>
</div>
<button className="text-gray-400 hover:text-blue-600 ml-4"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
<div className="flex-1 space-y-4 overflow-y-auto pr-1 no-scrollbar">

<div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:shadow-blue-50/50 hover:border-blue-100 transition-all group">
<img alt="Avatar" className="w-12 h-12 rounded-lg object-cover mr-4 shadow-sm" src="https://i.pravatar.cc/150?u=11"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<h3 className="text-sm font-bold text-gray-800 mr-2">李默</h3>
<span className="text-xs text-gray-400">仓库管理员</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-500 text-[10px] font-bold tracking-wide uppercase">待初筛</span>
</div>
<div className="flex items-center space-x-4 text-[11px] text-gray-500">
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">期望:</span>
<span className="font-medium font-num text-gray-700">15k</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">经验:</span>
<span className="font-medium text-gray-700">7年</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">学历:</span>
<span className="font-medium text-gray-700">本科</span>
</div>
<div className="flex items-center text-gray-400">
<i className="w-3 h-3 mr-1" data-lucide="file-text"></i> Word
                                        </div>
</div>
</div>
<div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-green-600"><i className="w-4 h-4" data-lucide="check"></i></button>
</div>
</div>

<div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:shadow-blue-50/50 hover:border-blue-100 transition-all group">
<img alt="Avatar" className="w-12 h-12 rounded-lg object-cover mr-4 shadow-sm" src="https://i.pravatar.cc/150?u=5"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<h3 className="text-sm font-bold text-gray-800 mr-2">王凡玄</h3>
<span className="text-xs text-gray-400">行政专员</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-500 text-[10px] font-bold tracking-wide uppercase">复试</span>
</div>
<div className="flex items-center space-x-4 text-[11px] text-gray-500">
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">期望:</span>
<span className="font-medium font-num text-gray-700">8k</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">经验:</span>
<span className="font-medium text-gray-700">2年</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">学历:</span>
<span className="font-medium text-gray-700">大专</span>
</div>
<div className="flex items-center text-gray-400">
<i className="w-3 h-3 mr-1" data-lucide="file-text"></i> PDF
                                        </div>
</div>
</div>
<div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-green-600"><i className="w-4 h-4" data-lucide="check"></i></button>
</div>
</div>

<div className="flex items-center p-4 bg-white border border-gray-100 rounded-xl hover:shadow-lg hover:shadow-blue-50/50 hover:border-blue-100 transition-all group">
<img alt="Avatar" className="w-12 h-12 rounded-lg object-cover mr-4 shadow-sm" src="https://i.pravatar.cc/150?u=33"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<div className="flex items-center">
<h3 className="text-sm font-bold text-gray-800 mr-2">吴萱萱</h3>
<span className="text-xs text-gray-400">高级产品经理</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-green-50 text-green-600 text-[10px] font-bold tracking-wide uppercase">Offer</span>
</div>
<div className="flex items-center space-x-4 text-[11px] text-gray-500">
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">期望:</span>
<span className="font-medium font-num text-gray-700">25k</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">经验:</span>
<span className="font-medium text-gray-700">5年</span>
</div>
<div className="flex items-center bg-gray-50 px-2 py-1 rounded">
<span className="text-gray-400 mr-1">学历:</span>
<span className="font-medium text-gray-700">硕士</span>
</div>
<div className="flex items-center text-gray-400">
<i className="w-3 h-3 mr-1" data-lucide="file-spreadsheet"></i> Excel
                                        </div>
</div>
</div>
<div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-blue-600"><i className="w-4 h-4" data-lucide="eye"></i></button>
<button className="p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-green-600"><i className="w-4 h-4" data-lucide="check"></i></button>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-3 lg:col-span-12 flex flex-col space-y-6">

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50">
<div className="flex justify-between items-center mb-5">
<h2 className="text-base font-bold text-gray-800 flex items-center">
<span className="w-1 h-4 bg-orange-400 rounded-full mr-2"></span>
                                    快捷功能
                                </h2>
<button className="text-xs text-gray-400 hover:text-blue-600">更多</button>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-blue-50 rounded-xl group transition-all duration-200 border border-transparent hover:border-blue-100">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="user-plus"></i>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-blue-700">新增员工</span>
</button>
<button className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-green-50 rounded-xl group transition-all duration-200 border border-transparent hover:border-green-100">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 group-hover:bg-green-600 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-green-700">新增候选人</span>
</button>
<button className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-orange-50 rounded-xl group transition-all duration-200 border border-transparent hover:border-orange-100">
<div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-2 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-orange-700">招聘需求</span>
</button>
<button className="flex flex-col items-center justify-center p-4 bg-gray-50 hover:bg-purple-50 rounded-xl group transition-all duration-200 border border-transparent hover:border-purple-100">
<div className="w-10 h-10 rounded-full bg-purple-100 text-purple-500 flex items-center justify-center mb-2 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="send"></i>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-purple-700">发起审批</span>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-50/50 flex-1 flex flex-col min-h-[300px]">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base font-bold text-gray-800 flex items-center">
<span className="w-1 h-4 bg-red-500 rounded-full mr-2"></span>
                                    日程待办
                                </h2>
<span className="text-xs text-blue-500 cursor-pointer font-medium hover:underline">全部 &gt;</span>
</div>

<div className="flex justify-between mb-8 pb-4 border-b border-gray-50">
<div className="flex flex-col items-center cursor-pointer group space-y-1">
<span className="text-[10px] font-medium text-gray-400 group-hover:text-blue-500">周一</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-num text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">18</div>
</div>
<div className="flex flex-col items-center cursor-pointer group space-y-1">
<span className="text-[10px] font-medium text-gray-400 group-hover:text-blue-500">周二</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-num text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">19</div>
</div>
<div className="flex flex-col items-center cursor-pointer group space-y-1">
<span className="text-[10px] font-bold text-blue-600">周三</span>
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-semibold font-num text-white shadow-md shadow-blue-300 transform scale-110">20</div>
</div>
<div className="flex flex-col items-center cursor-pointer group space-y-1">
<span className="text-[10px] font-medium text-gray-400 group-hover:text-blue-500">周四</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-num text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">21</div>
</div>
<div className="flex flex-col items-center cursor-pointer group space-y-1">
<span className="text-[10px] font-medium text-gray-400 group-hover:text-blue-500">周五</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold font-num text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">22</div>
</div>
</div>

<div className="space-y-6 overflow-y-auto no-scrollbar flex-1 relative pl-2">
<div className="absolute left-[13px] top-2 bottom-4 w-px bg-gray-100 z-0"></div>

<div className="flex relative z-10">
<div className="w-3 h-3 rounded-full bg-white border-2 border-blue-500 shadow-sm mt-1 flex-shrink-0"></div>
<div className="flex-1 ml-4 bg-gray-50 rounded-lg p-3 relative group hover:bg-blue-50 transition-colors cursor-pointer border border-transparent hover:border-blue-100">
<div className="absolute left-[-6px] top-2 w-2 h-2 bg-gray-50 group-hover:bg-blue-50 rotate-45 transform"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-gray-800">UI岗位面试</span>
<span className="text-[10px] font-medium text-blue-500 bg-blue-100 px-1.5 py-0.5 rounded">10:00</span>
</div>
<p className="text-[11px] text-gray-500 leading-relaxed">面试官: 吴萱萱 <br/> 候选人: 张三 - 视频面试</p>
</div>
</div>

<div className="flex relative z-10">
<div className="w-3 h-3 rounded-full bg-white border-2 border-orange-400 shadow-sm mt-1 flex-shrink-0"></div>
<div className="flex-1 ml-4 bg-gray-50 rounded-lg p-3 relative group hover:bg-orange-50 transition-colors cursor-pointer border border-transparent hover:border-orange-100">
<div className="absolute left-[-6px] top-2 w-2 h-2 bg-gray-50 group-hover:bg-orange-50 rotate-45 transform"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-gray-800">招聘需求审批</span>
<span className="text-[10px] font-medium text-orange-500 bg-orange-100 px-1.5 py-0.5 rounded">14:30</span>
</div>
<p className="text-[11px] text-gray-500 leading-relaxed">申请人: 杨文元 <br/> 部门: 技术部</p>
</div>
</div>

<div className="flex relative z-10">
<div className="w-3 h-3 rounded-full bg-white border-2 border-green-500 shadow-sm mt-1 flex-shrink-0"></div>
<div className="flex-1 ml-4 bg-gray-50 rounded-lg p-3 relative group hover:bg-green-50 transition-colors cursor-pointer border border-transparent hover:border-green-100">
<div className="absolute left-[-6px] top-2 w-2 h-2 bg-gray-50 group-hover:bg-green-50 rotate-45 transform"></div>
<div className="flex justify-between items-center mb-1">
<span className="text-xs font-bold text-gray-800">李默入职</span>
<span className="text-[10px] font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded">16:00</span>
</div>
<p className="text-[11px] text-gray-500">办理入职手续 - 这里的文本很长</p>
</div>
</div>
</div>
<div className="mt-4 pt-3 text-center">
<span className="text-[11px] text-gray-400 font-medium">今日剩余待办 <span className="text-blue-600 font-bold text-sm mx-1">6</span> 件</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
