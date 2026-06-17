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
      

<div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl gap-x-12 gap-y-12">

<div className="w-full max-w-[400px] mx-auto bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 relative flex flex-col h-[850px]">

<div className="h-12 bg-white flex items-center justify-between px-6 pt-2 z-20">
<span className="text-xs font-semibold tracking-wide">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-4 bg-gray-900 rounded-full opacity-20"></div>
<div className="w-4 h-4 bg-gray-900 rounded-full opacity-20"></div>
<div className="w-6 h-3 border border-gray-300 rounded-sm relative">
<div className="absolute inset-0.5 bg-gray-800 w-3/4"></div>
</div>
</div>
</div>

<div className="bg-white px-6 pb-4 pt-2 flex justify-between items-center sticky top-0 z-10 border-b border-gray-100">
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full btn-press">
<span className="text-sm font-semibold tracking-tight">粤A·88888</span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="p-2 rounded-full hover:bg-gray-50 transition-colors">
<svg className="lucide lucide-bell w-5 h-5 text-gray-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
</div>

<div className="flex-1 overflow-y-auto pb-24">

<div className="bg-white m-4 p-6 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100/50">
<div className="flex justify-between items-start mb-6">
<div className="">
<p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">平均油耗</p>
<div className="flex items-baseline gap-1">
<h1 className="text-4xl font-semibold text-gray-900 tracking-tighter">7.5</h1>
<span className="text-sm font-medium text-gray-500">L/100km</span>
</div>
</div>
<div className="bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-medium flex items-center gap-1">
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                            0.2
                        </div>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-5">
<div className="">
<p className="text-[10px] text-gray-400 mb-1">本月花费</p>
<p className="text-sm font-semibold tracking-tight">¥420</p>
</div>
<div className="">
<p className="text-[10px] text-gray-400 mb-1">本月里程</p>
<p className="text-sm font-semibold tracking-tight">560 <span className="text-[10px] text-gray-400 font-normal">km</span></p>
</div>
<div className="">
<p className="text-[10px] text-gray-400 mb-1">上次加油</p>
<p className="text-sm font-semibold tracking-tight">3天前</p>
</div>
</div>
</div>

<div className="mx-4 mb-4 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 text-white shadow-lg flex items-center justify-between">
<div>
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-map-pin w-3 h-3 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs text-gray-300 font-medium">广州 · 今日油价</span>
</div>
<div className="flex gap-4 items-baseline">
<div>
<span className="text-xs text-gray-400 mr-1">92#</span>
<span className="text-lg font-semibold tracking-tight">7.86</span>
</div>
<div>
<span className="text-xs text-gray-400 mr-1">95#</span>
<span className="text-lg font-semibold tracking-tight">8.42</span>
</div>
</div>
</div>
<div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-white" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="bg-white mx-4 mb-6 p-5 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold tracking-tight">近30天趋势</h3>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="h-24 flex items-end justify-between gap-2 px-1">

<div className="w-full bg-emerald-100 rounded-t-sm h-[40%] relative group">
<div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] py-1 px-2 rounded transition-opacity">7.2</div>
</div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-emerald-500 rounded-t-sm h-[70%] relative shadow-md shadow-emerald-200"></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-emerald-100 rounded-t-sm h-[65%]"></div>
</div>
<div className="flex justify-between mt-3 text-[10px] text-gray-400 font-medium">
<span>01-01</span>
<span>01-15</span>
<span>今日</span>
</div>
</div>

<div className="px-6 mb-3 flex justify-between items-end">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">最近记录</h3>
<span className="text-xs text-emerald-600 font-medium">查看全部</span>
</div>

<div className="bg-white mx-4 mb-3 p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm active:bg-gray-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg className="lucide lucide-fuel w-5 h-5" data-lucide="fuel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"></path><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path><path d="M2 21h13"></path><path d="M3 9h11"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">加满 · 92#</p>
<p className="text-xs text-gray-400 mt-0.5">2023-10-24 14:30</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-900">- ¥325.00</p>
<p className="text-xs text-gray-500 mt-0.5">42.5 L</p>
</div>
</div>

<div className="bg-white mx-4 mb-3 p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500">
<svg className="lucide lucide-fuel w-5 h-5" data-lucide="fuel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"></path><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path><path d="M2 21h13"></path><path d="M3 9h11"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">加满 · 92#</p>
<p className="text-xs text-gray-400 mt-0.5">2023-10-10 09:15</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-gray-900">- ¥280.00</p>
<p className="text-xs text-gray-500 mt-0.5">36.2 L</p>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 pb-6 pt-3 px-6 flex justify-between items-end z-30">
<div className="flex flex-col items-center gap-1 text-emerald-600">
<svg className="lucide lucide-layout-dashboard w-6 h-6" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-[10px] font-medium">首页</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg className="lucide lucide-plus-circle w-6 h-6" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
<span className="text-[10px] font-medium">记一笔</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg className="lucide lucide-list w-6 h-6" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<span className="text-[10px] font-medium">记录</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">我的</span>
</div>
</div>
</div>

<div className="w-full max-w-[400px] mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border-[6px] border-gray-900 relative flex flex-col h-[850px]">

<div className="pt-12 pb-4 px-6 flex items-center justify-between border-b border-gray-50">
<div className="p-2 -ml-2 rounded-full hover:bg-gray-50 text-gray-500">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<h2 className="text-base font-semibold tracking-tight">记一笔</h2>
<div className="text-sm font-medium text-emerald-600">保存</div>
</div>
<div className="flex-1 overflow-y-auto bg-gray-50/50">

<div className="p-6 pb-2">
<button className="border-dashed flex flex-col gap-3 hover:bg-emerald-50 transition-colors group bg-emerald-50/50 w-full h-32 border-emerald-200 border-2 rounded-2xl gap-x-3 gap-y-3 items-center justify-center">
<div className="bg-white p-3 rounded-full shadow-sm text-emerald-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-camera w-6 h-6" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<span className="text-sm font-medium text-emerald-700">拍照识别小票</span>
</button>
<p className="text-center text-[10px] text-gray-400 mt-2">智能识别金额、升数、单价、日期</p>
</div>

<div className="px-6 space-y-5">

<div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
<label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">当前里程 (km)</label>
<div className="relative">
<input className="w-full text-3xl font-semibold tracking-tight text-gray-900 placeholder-gray-200 focus:outline-none" placeholder="0" type="number"/>
<div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2">
<span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded">上次: 12580</span>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-5">
<div className="grid grid-cols-2 gap-6">

<div className="relative">
<label className="block text-[11px] font-medium text-gray-400 mb-1">总金额 (元)</label>
<div className="flex items-baseline border-b border-gray-100 pb-1 focus-within:border-emerald-500 transition-colors">
<span className="text-lg font-medium text-gray-400 mr-1">¥</span>
<input className="w-full text-xl font-semibold text-gray-900 focus:outline-none p-0" placeholder="0.00" type="number"/>
</div>
</div>

<div className="relative">
<label className="block text-[11px] font-medium text-gray-400 mb-1">单价 (元/L)</label>
<div className="flex items-baseline border-b border-gray-100 pb-1 focus-within:border-emerald-500 transition-colors">
<input className="w-full text-xl font-semibold text-gray-900 focus:outline-none p-0" type="number" value="7.86"/>
</div>
</div>
</div>

<div className="bg-gray-50 p-3 rounded-xl flex justify-between items-center border border-gray-100">
<span className="text-xs font-medium text-gray-500">加油升数</span>
<div className="flex items-baseline gap-1">
<span className="text-lg font-semibold text-gray-900">0.00</span>
<span className="text-xs text-gray-400">L</span>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">

<div className="flex items-center justify-between py-2 border-b border-gray-50">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
<svg className="lucide lucide-droplets w-4 h-4" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<span className="text-sm font-medium text-gray-700">加满油箱</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-200 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-emerald-500 cursor-pointer transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>

<div className="flex items-center justify-between py-3 pt-4">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-orange-50 text-orange-600 rounded-lg">
<svg className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<span className="text-sm font-medium text-gray-700">油灯亮了</span>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-gray-200 appearance-none cursor-pointer transition-all duration-300 left-0" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-200 cursor-pointer transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
<div className="flex items-center gap-3 border-b border-gray-50 pb-3">
<svg className="lucide lucide-fuel w-4 h-4 text-gray-400" data-lucide="fuel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"></path><path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path><path d="M2 21h13"></path><path d="M3 9h11"></path></svg>
<div className="flex-1">
<label className="block text-[10px] text-gray-400">油号</label>
<select className="w-full bg-transparent text-sm font-medium text-gray-900 focus:outline-none appearance-none">
<option>92# 汽油</option>
<option>95# 汽油</option>
<option>98# 汽油</option>
<option>0# 柴油</option>
</select>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="flex-1">
<label className="block text-[10px] text-gray-400">加油站</label>
<input className="w-full bg-transparent text-sm font-medium text-gray-900 focus:outline-none truncate" type="text" value="中石化广州天河站"/>
</div>
<svg className="lucide lucide-navigation w-4 h-4 text-emerald-500" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</div>
</div>

<div className="flex justify-end pr-2">
<div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200 shadow-sm text-xs text-gray-500">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                            2025-01-28 14:45
                        </div>
</div>
<div className="h-20"></div> 
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-6 z-30">
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-lg py-3.5 rounded-xl shadow-lg shadow-emerald-200 transition-all btn-press flex items-center justify-center gap-2">
<svg className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                    保存记录
                </button>
</div>
</div>
</div>



    </>
  );
}
