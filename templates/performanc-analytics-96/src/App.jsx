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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
25: '#FCFCFD',
50: '#FAFAFA',
100: '#F4F4F5',
200: '#E4E4E7',
300: '#D4D4D8',
400: '#A1A1AA',
500: '#71717A',
600: '#52525B',
700: '#3F3F46',
800: '#27272A',
900: '#18181B',
950: '#09090B',
}
}
}
}
}

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
      
<div className="flex min-h-screen">

<aside className="hidden lg:flex flex-col w-64 border-r border-zinc-200 bg-white sticky top-0 h-screen z-10">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white font-medium tracking-tighter text-xs">
                        A
                    </div>
<span className="font-medium tracking-tight text-sm">ADMIN</span>
</div>
</div>
<nav className="flex-1 px-3 py-4 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900" href="#">
<iconify-icon height="18" icon="lucide:bar-chart-2" strokeWidth="1.5" width="18"></iconify-icon>
                    业绩概览
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    服务商管理
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:store" strokeWidth="1.5" width="18"></iconify-icon>
                    门店管理
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
<iconify-icon height="18" icon="lucide:wallet" strokeWidth="1.5" width="18"></iconify-icon>
                    财务结算
                </a>
</nav>
<div className="p-4 border-t border-zinc-100">
<button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon height="18" icon="lucide:log-out" strokeWidth="1.5" width="18"></iconify-icon>
                    退出登录
                </button>
</div>
</aside>

<main className="flex-1 overflow-auto">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-20 flex items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer">首页</span>
<iconify-icon height="14" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="text-zinc-900 font-medium">全网核心业绩</span>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors">
<iconify-icon height="18" icon="lucide:bell" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-zinc-300"></div>
</div>
</header>
<div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-10">

<section className="space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-medium tracking-tight text-zinc-900">全网核心业绩统计</h1>
<p className="text-sm text-zinc-500 mt-1">整体大盘数据实时监控与分析</p>
</div>

<div className="flex items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 bg-white border border-zinc-200 hover:border-zinc-300 rounded-md px-3 py-1.5 text-sm text-zinc-700 shadow-sm transition-all">
<iconify-icon className="text-zinc-400" icon="lucide:map-pin" width="14"></iconify-icon>
<span>全国范围</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<div className="relative">
<button className="flex items-center gap-2 bg-white border border-zinc-200 hover:border-zinc-300 rounded-md px-3 py-1.5 text-sm text-zinc-700 shadow-sm transition-all">
<iconify-icon className="text-zinc-400" icon="lucide:calendar" width="14"></iconify-icon>
<span>本月 (2023.10)</span>
<iconify-icon className="text-zinc-400" icon="lucide:chevron-down" width="14"></iconify-icon>
</button>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm transition-colors">
                                查询
                            </button>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500" icon="lucide:globe" width="16"></iconify-icon>
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">线上统计</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-zinc-500 font-medium">线上订单数</span>
<iconify-icon className="text-zinc-300" icon="lucide:shopping-bag" width="18"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">24,592</div>
<div className="mt-2 flex items-center text-xs text-green-600 font-medium">
<iconify-icon className="mr-1" icon="lucide:trending-up" width="12"></iconify-icon>
<span>+12.5%</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-zinc-500 font-medium">线上业绩</span>
<iconify-icon className="text-zinc-300" icon="lucide:credit-card" width="18"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥1,204,390.00</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-zinc-500 font-medium">线上利润</span>
<iconify-icon className="text-zinc-300" icon="lucide:bar-chart-3" width="18"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥342,100.00</div>
</div>

<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-zinc-500 font-medium">已拨出利润</span>
<iconify-icon className="text-zinc-300" icon="lucide:pie-chart" width="18"></iconify-icon>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥120,500.00</div>
<div className="mt-2 w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-900 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-500" icon="lucide:store" width="16"></iconify-icon>
<h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-500">线下统计</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-2">
<span className="text-sm text-zinc-500 font-medium">线下业绩</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥856,200.00</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-2">
<span className="text-sm text-zinc-500 font-medium">线下利润</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥180,400.00</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-[0px_2px_4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-start mb-2">
<span className="text-sm text-zinc-500 font-medium">已拨出利润</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">¥90,000.00</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 col-span-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-zinc-900">服务商统计</h3>
<span className="bg-zinc-100 text-zinc-600 text-xs px-2 py-1 rounded font-medium">全网</span>
</div>
<div className="space-y-6">
<div>
<div className="text-xs text-zinc-500 mb-1">服务商总数</div>
<div className="text-2xl font-semibold tracking-tight text-zinc-900">1,204</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">金牌服务商</span>
<span className="text-zinc-900 font-medium">120 人</span>
</div>
<div className="w-full bg-zinc-50 h-1.5 rounded-full overflow-hidden">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '10%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">银牌服务商</span>
<span className="text-zinc-900 font-medium">450 人</span>
</div>
<div className="w-full bg-zinc-50 h-1.5 rounded-full overflow-hidden">
<div className="bg-zinc-400 h-1.5 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">普通服务商</span>
<span className="text-zinc-900 font-medium">634 人</span>
</div>
<div className="w-full bg-zinc-50 h-1.5 rounded-full overflow-hidden">
<div className="bg-zinc-200 h-1.5 rounded-full" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 col-span-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-zinc-900">门店统计</h3>
</div>
<div className="grid grid-cols-1 gap-5">
<div className="flex justify-between items-center pb-4 border-b border-zinc-50">
<div>
<div className="text-xs text-zinc-500">全网门店数量</div>
<div className="text-lg font-semibold mt-0.5">342</div>
</div>
<div className="bg-zinc-50 p-2 rounded-md">
<iconify-icon className="text-zinc-400" icon="lucide:map"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center pb-4 border-b border-zinc-50">
<div>
<div className="text-xs text-zinc-500">全网门店业绩</div>
<div className="text-lg font-semibold mt-0.5">¥9.2M</div>
</div>
<div className="bg-zinc-50 p-2 rounded-md">
<iconify-icon className="text-zinc-400" icon="lucide:banknote"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center">
<div>
<div className="text-xs text-zinc-500">全网门店订单数</div>
<div className="text-lg font-semibold mt-0.5">18.5k</div>
</div>
<div className="bg-zinc-50 p-2 rounded-md">
<iconify-icon className="text-zinc-400" icon="lucide:receipt"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 col-span-1">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-zinc-900">待提现资产</h3>
<iconify-icon className="text-zinc-300" icon="lucide:alert-circle" width="16"></iconify-icon>
</div>
<div className="space-y-4">
<div className="bg-zinc-50 rounded-lg p-3">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">消费券待提现</span>
<span className="text-zinc-900 font-medium">¥45,000</span>
</div>
</div>
<div className="bg-zinc-50 rounded-lg p-3">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">余额待提现</span>
<span className="text-zinc-900 font-medium">¥128,300</span>
</div>
</div>
<div className="bg-zinc-50 rounded-lg p-3">
<div className="flex justify-between text-xs mb-1">
<span className="text-zinc-500">激活券待提现</span>
<span className="text-zinc-900 font-medium">¥12,400</span>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="w-full h-px bg-zinc-200"></div>

<section className="space-y-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white border border-zinc-200 rounded shadow-sm">
<iconify-icon className="text-zinc-700" icon="lucide:user-check"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-zinc-900">服务商专项统计</h2>
</div>
<div className="flex gap-2">

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="lucide:search" width="14"></iconify-icon>
<input className="pl-9 pr-3 py-1.5 bg-white border border-zinc-200 rounded-md text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-100 transition-all w-48 lg:w-64" placeholder="搜索服务商姓名/ID" type="text"/>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">

<div className="px-5 py-3 border-b border-zinc-100 flex gap-4 items-center bg-zinc-50/50">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">当前筛选:</span>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-zinc-200 text-xs text-zinc-600">
                                    杭州市
                                    <iconify-icon className="cursor-pointer hover:text-red-500" icon="lucide:x"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white border border-zinc-200 text-xs text-zinc-600">
                                    张三 (ID: 8829)
                                    <iconify-icon className="cursor-pointer hover:text-red-500" icon="lucide:x"></iconify-icon>
</span>
</div>
</div>
<div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="space-y-1">
<div className="text-xs text-zinc-500">名下会员个数</div>
<div className="text-xl font-semibold text-zinc-900">1,203 人</div>
</div>
<div className="space-y-1">
<div className="text-xs text-zinc-500">名下门店个数</div>
<div className="text-xl font-semibold text-zinc-900">14 家</div>
</div>
<div className="space-y-1">
<div className="text-xs text-zinc-500">已分红金额</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight">¥45,290.00</div>
</div>
<div className="space-y-1">
<div className="text-xs text-zinc-500">已提现金额</div>
<div className="text-xl font-semibold text-zinc-900 tracking-tight">¥40,000.00</div>
</div>
</div>
</div>
</section>

<section className="space-y-5 pb-10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white border border-zinc-200 rounded shadow-sm">
<iconify-icon className="text-zinc-700" icon="lucide:shopping-cart"></iconify-icon>
</div>
<h2 className="text-lg font-medium text-zinc-900">门店专项统计</h2>
</div>
<div className="flex gap-2">

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" icon="lucide:search" width="14"></iconify-icon>
<input className="pl-9 pr-3 py-1.5 bg-white border border-zinc-200 rounded-md text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-100 transition-all w-48 lg:w-64" placeholder="搜索门店名称" type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h3 className="font-medium text-sm text-zinc-900">喜茶 (西湖店) 数据概览</h3>
</div>
<button className="text-xs text-zinc-500 hover:text-zinc-900 flex items-center gap-1">
                                    查看详情 <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-xs text-zinc-500 block mb-1">门店订单数</span>
<span className="text-lg font-semibold text-zinc-900">892</span>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-xs text-zinc-500 block mb-1">收款码业绩</span>
<span className="text-lg font-semibold text-zinc-900">¥12,400</span>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-xs text-zinc-500 block mb-1">线上订单业绩</span>
<span className="text-lg font-semibold text-zinc-900">¥45,100</span>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-500 mb-3 uppercase tracking-wider">分红数据</h4>
<div className="flex items-center gap-8">
<div>
<span className="text-xs text-zinc-400">已分红金额</span>
<div className="text-sm font-medium text-zinc-900">¥8,200.00</div>
</div>
<div className="w-px h-8 bg-zinc-100"></div>
<div>
<span className="text-xs text-zinc-400">已提现金额</span>
<div className="text-sm font-medium text-zinc-900">¥5,000.00</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
<h3 className="font-medium text-sm text-zinc-900 mb-5">待提现明细</h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-500">消费券</span>
<span className="font-medium text-zinc-900">¥1,200</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-500">余额</span>
<span className="font-medium text-zinc-900">¥3,450</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-zinc-500">激活券</span>
<span className="font-medium text-zinc-900">¥800</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-zinc-200 rounded-lg text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                                查看提现记录
                            </button>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
