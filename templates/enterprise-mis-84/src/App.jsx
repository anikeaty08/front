import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-100 flex-col hidden md:flex z-20">

<div className="h-16 flex items-center px-6 border-b border-gray-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter shadow-sm">
                    MIS
                </div>
<span className="font-semibold tracking-tight text-slate-900">NEXUS</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">概览</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                数据看板
            </a>

<a className="group flex items-center px-3 py-2 text-sm font-medium bg-gray-100 text-slate-900 rounded-md" href="#">
<span className="iconify text-slate-900 mr-3" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
                企业信息
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">管理</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                角色管理
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
                权限配置
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="18"></span>
                功能流程
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">系统</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="18"></span>
                系统设置
            </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium text-slate-600 hover:bg-gray-50 hover:text-slate-900 rounded-md transition-colors" href="#">
<span className="iconify text-slate-400 group-hover:text-slate-900 mr-3" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
                操作日志
            </a>
</nav>

<div className="border-t border-gray-100 p-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full bg-gray-100 ring-2 ring-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-slate-900">Admin User</span>
<span className="text-xs text-slate-500">nexus@corp.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 z-10 sticky top-0">

<button className="md:hidden p-2 text-gray-500">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>

<div className="flex items-center gap-4 flex-1">
<div className="hidden md:flex text-sm text-slate-500 gap-2 items-center">
<span className="hover:text-slate-800 cursor-pointer transition-colors">首页</span>
<span className="text-gray-300">/</span>
<span className="text-slate-800 font-medium">企业信息管理</span>
</div>

<div className="relative w-full max-w-sm ml-4 hidden md:block group">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-gray-400 group-focus-within:text-indigo-500 transition-colors" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="block w-full pl-10 pr-3 py-1.5 border border-gray-200 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all shadow-sm" placeholder="搜索企业名称、统一社会信用代码..." type="text"/>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-gray-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="h-6 w-px bg-gray-200 mx-1"></div>
<button className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
<span className="iconify" data-icon="lucide:circle-user" data-strokeWidth="1.5" data-width="18"></span>
<span className="hidden sm:block">账户</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto space-y-6 pb-10">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">企业信息列表</h1>
<p className="text-sm text-slate-500 mt-1">查看已入驻企业详情，配置相关功能、权限及角色。</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm font-medium text-slate-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
<span className="iconify" data-icon="lucide:filter" data-width="16"></span>
                            筛选
                        </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-transparent rounded-md text-sm font-medium text-white hover:bg-slate-800 shadow-sm transition-all">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                            新增企业
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in" style={{animationDelay: '0.1s'}}>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">入驻企业总数</p>
<h3 className="text-xl font-bold text-slate-900 mt-1">1,248</h3>
</div>
<div className="w-8 h-8 bg-indigo-50 rounded text-indigo-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:building-2" data-width="18"></span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">本月新增</p>
<h3 className="text-xl font-bold text-slate-900 mt-1">42</h3>
</div>
<div className="w-8 h-8 bg-emerald-50 rounded text-emerald-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:trending-up" data-width="18"></span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wider">待审核</p>
<h3 className="text-xl font-bold text-slate-900 mt-1">8</h3>
</div>
<div className="w-8 h-8 bg-amber-50 rounded text-amber-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:file-clock" data-width="18"></span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="overflow-x-auto min-h-[400px]">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/50 text-xs font-medium text-gray-500 uppercase tracking-wider">
<th className="p-4 w-10 text-center">
<input className="custom-checkbox" type="checkbox"/>
</th>
<th className="p-4">企业名称 / 统一信用代码</th>
<th className="p-4">所属行业</th>
<th className="p-4">联系人</th>
<th className="p-4">状态</th>
<th className="p-4">操作</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="p-4 text-center">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">智汇云图科技有限公司</div>
<div className="text-xs text-slate-500 font-mono mt-0.5">91110108MA007YBQ2L</div>
</div>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">信息技术</span>
</td>
<td className="p-4">
<div className="text-sm text-slate-900">张明远</div>
<div className="text-xs text-slate-500">138****8888</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            正常运营
                                        </span>
</td>
<td className="p-4">
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
<span className="iconify" data-icon="lucide:settings-2" data-width="14"></span>
                                                功能配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
                                                权限配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                                                角色管理
                                            </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="p-4 text-center">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">优选生活贸易有限公司</div>
<div className="text-xs text-slate-500 font-mono mt-0.5">91330106MA28W4K53X</div>
</div>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">电子商务</span>
</td>
<td className="p-4">
<div className="text-sm text-slate-900">李雨薇</div>
<div className="text-xs text-slate-500">139****1234</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                            试用期
                                        </span>
</td>
<td className="p-4">
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
<span className="iconify" data-icon="lucide:settings-2" data-width="14"></span>
                                                功能配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
                                                权限配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                                                角色管理
                                            </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="p-4 text-center">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:factory" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">宏达精密制造厂</div>
<div className="text-xs text-slate-500 font-mono mt-0.5">91440300MA5F32JX9H</div>
</div>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">智能制造</span>
</td>
<td className="p-4">
<div className="text-sm text-slate-900">王建国</div>
<div className="text-xs text-slate-500">136****9988</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            待审核
                                        </span>
</td>
<td className="p-4">
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
<span className="iconify" data-icon="lucide:settings-2" data-width="14"></span>
                                                功能配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
                                                权限配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                                                角色管理
                                            </button>
</div>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="p-4 text-center">
<input className="custom-checkbox" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="18"></span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">康健医药集团</div>
<div className="text-xs text-slate-500 font-mono mt-0.5">91310000MA1FL4G28K</div>
</div>
</div>
</td>
<td className="p-4">
<span className="text-sm text-slate-600 bg-gray-100 px-2 py-1 rounded border border-gray-200">医疗健康</span>
</td>
<td className="p-4">
<div className="text-sm text-slate-900">陈志强</div>
<div className="text-xs text-slate-500">189****7766</div>
</td>
<td className="p-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            账户锁定
                                        </span>
</td>
<td className="p-4">
<div className="flex flex-wrap gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
<span className="iconify" data-icon="lucide:settings-2" data-width="14"></span>
                                                功能配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-amber-600 hover:border-amber-200 hover:bg-amber-50 transition-all">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
                                                权限配置
                                            </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white border border-gray-200 rounded text-xs font-medium text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
<span className="iconify" data-icon="lucide:users" data-width="14"></span>
                                                角色管理
                                            </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-sm text-slate-500">显示 1 至 4 条，共 1,248 条</span>
<div className="flex gap-2">
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 disabled:opacity-50 transition-colors">上一页</button>
<button className="px-3 py-1.5 border border-gray-200 rounded-md text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 transition-colors">下一页</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
