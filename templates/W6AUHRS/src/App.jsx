import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        document.querySelectorAll('.faq-toggle').forEach((btn) => {
          btn.addEventListener('click', () => {
            const card = btn.parentElement;
            const content = card.querySelector('div');
            const icon = btn.querySelector('[data-lucide]');
            content.classList.toggle('hidden');
            if (icon && window.lucide) {
              icon.setAttribute('data-lucide', content.classList.contains('hidden') ? 'chevron-down' : 'chevron-up');
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }
          });
        });
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-jipMLzxI5liMrspqcm4GRWTh" width="100%"></iframe></div>

<div className="relative">

<header className="sticky top-3 z-50 ml-auto mr-auto max-w-7xl text-white">
<div className="pr-3 pl-3 justify-center">
<div className="h-14 flex ring-1 rounded-full mr-8 ml-8 pr-2.5 pl-2.5 backdrop-blur-lg items-center justify-between ring-white/10 bg-slate-900/70">
<div className="flex gap-2 items-center">
<span className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 ring-1 flex items-center justify-center to-teal-400 ring-white/5">
<svg className="lucide lucide-feather h-5 w-5 text-black" data-lucide="feather" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</span>
<span className="text-base font-semibold tracking-tight" style={{}}>语雀 Yuque</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="transition hover:text-white" href="#" style={{}}>产品</a>
<a className="transition hover:text-white" href="#" style={{}}>解决方案</a>
<a className="transition hover:text-white" href="#" style={{}}>定价</a>
<a className="transition hover:text-white" href="#" style={{}}>客户案例</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 text-sm rounded-md transition text-slate-300 hover:text-white" style={{}}>登录</button>
<button aria-label="免费注册" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(16,185,129,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transform-gpu hover:-translate-y-0.5 rounded-full p-[1px] items-center justify-center text-white" style={{backgroundImage: 'linear-gradient(144deg,#10B981,#059669 50%,#34D399)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[88px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span style={{}}>免费注册</span>
</span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative pt-0 pb-8">
<div className="max-w-7xl sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-36 pr-4 pl-4">
<div className="max-w-3xl text-left mr-auto ml-0 relative z-20">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm border-zinc-800 bg-black text-zinc-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 bg-emerald-950 text-emerald-400 ring-emerald-800">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="font-medium" style={{}}>300万+ 团队与个人正在使用语雀</span>
</div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold tracking-tight mt-8 mb-6 font-sans text-zinc-100" style={{}}>
              知识库与文档协作平台
            </h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400" style={{}}>
              让知识沉淀有结构，协作编辑更高效。写文档、建百科、做知识库，一站式完成。
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-10 mb-10 items-center">
<button aria-label="免费开始" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(16,185,129,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transform-gpu hover:-translate-y-0.5 rounded-full p-[1px] items-center justify-center text-white" style={{backgroundImage: 'linear-gradient(144deg,#10B981,#059669 50%,#34D399)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[112px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-3.5 pr-6 pb-3.5 pl-6">
<svg className="lucide lucide-pen-line w-4 h-4" data-lucide="pen-line" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
<span style={{}}>免费开始</span>
</span>
</button>
<a className="inline-flex items-center gap-2 ring-1 text-sm font-medium rounded-full pt-3 pr-6 pb-3 pl-6 ring-zinc-800 hover:bg-zinc-950 text-zinc-100 bg-black" href="#">
<svg className="lucide lucide-play-circle h-4.5 w-4.5" data-lucide="play-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span style={{}}>了解产品</span>
</a>
</div>
</div>

<div className="mt-4 relative z-20">
<div className="ring-1 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] to-[#111213] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-lg ring-zinc-800 from-slate-200/10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<aside className="order-2 lg:order-1 lg:col-span-2">
<div className="space-y-3">
<div className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 bg-black">
<div className="px-3 py-2 flex items-center justify-between">
<span className="text-xs text-zinc-400" style={{}}>空间</span>
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] ring-1 ring-zinc-800 hover:bg-zinc-900" style={{}}>
<svg className="lucide lucide-plus" data-lucide="plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                          新建
                        </button>
</div>
<ul className="px-2 pb-2 space-y-1">
<li className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-zinc-900">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center bg-emerald-900/40 ring-emerald-700/40 text-emerald-300">
<svg className="lucide lucide-book" data-lucide="book" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</span>
<span className="text-xs" style={{}}>产品文档</span>
</li>
<li className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-zinc-900">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center bg-sky-900/40 ring-sky-700/40 text-sky-300">
<svg className="lucide lucide-files" data-lucide="files" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M15 2v4a2 2 0 0 0 2 2h4"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
</span>
<span className="text-xs" style={{}}>团队 Wiki</span>
</li>
<li className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-zinc-900">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center bg-violet-900/40 ring-violet-700/40 text-violet-300">
<svg className="lucide lucide-code-2" data-lucide="code-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</span>
<span className="text-xs" style={{}}>API 文档</span>
</li>
<li className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-zinc-900">
<span className="h-6 w-6 rounded-md ring-1 flex items-center justify-center bg-amber-900/40 ring-amber-700/40 text-amber-300">
<svg className="lucide lucide-clipboard-list" data-lucide="clipboard-list" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</span>
<span className="text-xs" style={{}}>会议纪要</span>
</li>
</ul>
</div>
<div className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 bg-black">
<div className="px-3 py-2 flex items-center gap-2">
<svg className="lucide lucide-search text-zinc-400" data-lucide="search" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="text-xs bg-transparent outline-none placeholder:text-zinc-500 w-full" placeholder="搜索知识..."/>
</div>
</div>
</div>
</aside>

<main className="order-1 lg:order-2 lg:col-span-7">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-800 bg-black">
<div className="flex items-center justify-between border-b px-4 py-2 border-zinc-800">
<div className="flex items-center gap-2">
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-zinc-900 ring-zinc-800 hover:bg-zinc-800" style={{}}>
<svg className="lucide lucide-bold" data-lucide="bold" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"></path></svg>
                          B
                        </button>
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-zinc-900 ring-zinc-800 hover:bg-zinc-800" style={{}}>
<svg className="lucide lucide-italic" data-lucide="italic" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>
                          I
                        </button>
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-zinc-900 ring-zinc-800 hover:bg-zinc-800" style={{}}>
<svg className="lucide lucide-list" data-lucide="list" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
                          列表
                        </button>
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-zinc-900 ring-zinc-800 hover:bg-zinc-800" style={{}}>
<svg className="lucide lucide-link-2" data-lucide="link-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
                          链接
                        </button>
</div>
<div className="flex items-center gap-2">
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-emerald-600/20 text-emerald-300 ring-emerald-700/40 hover:bg-emerald-600/25" style={{}}>
<svg className="lucide lucide-share-2" data-lucide="share-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                          分享
                        </button>
<button className="h-7 px-2 rounded-md text-xs ring-1 inline-flex items-center gap-1.5 bg-zinc-900 ring-zinc-800 hover:bg-zinc-800" style={{}}>
<svg className="lucide lucide-messages-square" data-lucide="messages-square" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
                          评论
                        </button>
</div>
</div>
<div className="p-5">
<h3 className="text-xl md:text-2xl font-semibold tracking-tight font-sans" style={{}}>团队知识库最佳实践</h3>
<p className="text-sm mt-1 text-zinc-400" style={{}}>作者：<span className="font-medium text-zinc-200" style={{}}>Nova</span> • 更新于 3 天前</p>
<div className="mt-4 space-y-4 text-sm leading-6 text-zinc-300">
<p style={{}}>本文介绍如何在语雀搭建结构化知识库，包含空间规划、权限设置、模板与搜索最佳实践，帮助团队高效沉淀与复用知识。</p>
<div className="ring-1 rounded-xl overflow-hidden ring-zinc-800">
<div className="px-4 py-2 border-b text-xs bg-zinc-950/70 border-zinc-800 text-zinc-400" style={{}}>步骤清单</div>
<ul className="p-4 grid sm:grid-cols-2 gap-2">
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-check-circle-2 mt-0.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                              规划空间与目录结构
                            </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-users mt-0.5 text-emerald-400" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                              设置成员与权限
                            </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-sparkles mt-0.5 text-emerald-400" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                              使用模板与格式规范
                            </li>
<li className="flex items-start gap-2" style={{}}>
<svg className="lucide lucide-search mt-0.5 text-emerald-400" data-lucide="search" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                              打造可检索的知识索引
                            </li>
</ul>
</div>
<div className="rounded-xl ring-1 p-4 ring-zinc-800 bg-zinc-950/50">
<div className="text-xs mb-2 text-zinc-400" style={{}}>代码示例</div>
<pre className="text-[12px] leading-5 overflow-x-auto"><code className="font-mono text-zinc-200" style={{}}>
// 示例：文档目录元数据
{
  "space": "产品文档",
  "path": "入门/团队协作.md",
  "tags": ["协作", "规范", "模板"],
  "visibility": "team"
}
                          </code></pre>
</div>
</div>
</div>
</div>
<div className="flex mt-3 items-center justify-between">
<div>
<h4 className="text-lg tracking-tight font-semibold" style={{}}>实时协作已开启</h4>
<p className="text-sm text-zinc-400" style={{}}>正在编辑：<span className="font-medium text-zinc-200" style={{}}>Jessie，Ken</span></p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 items-center hover:bg-zinc-800 text-zinc-200 bg-zinc-950" style={{}}>
<svg className="lucide lucide-history" data-lucide="history" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
                        历史版本
                      </button>
<button className="inline-flex gap-1.5 text-xs font-medium rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 items-center hover:bg-zinc-800 text-zinc-200 bg-zinc-950" style={{}}>
<svg className="lucide lucide-lock" data-lucide="lock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        权限
                      </button>
</div>
</div>
</main>

<aside className="order-3 lg:col-span-3">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium tracking-tight" style={{}}>活动</h4>
<button className="rounded-lg px-2.5 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800" style={{}}>实时</button>
</div>
<div className="space-y-3 max-h-120 overflow-y-auto pr-1">
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-emerald-900/40 text-emerald-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Lena</span> 评论了「目录规范」</p>
<p className="text-xs text-zinc-500" style={{}}>2 分钟前</p>
</div>
</div>
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-sky-900/40 text-sky-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Marco</span> 合并了「API 指南」的更改</p>
<p className="text-xs text-zinc-500" style={{}}>7 分钟前</p>
</div>
</div>
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-violet-900/40 text-violet-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Yui</span> 新建了「会议纪要模板」</p>
<p className="text-xs text-zinc-500" style={{}}>15 分钟前</p>
</div>
</div>
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-amber-900/40 text-amber-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Alex</span> 更新了标签与目录</p>
<p className="text-xs text-zinc-500" style={{}}>18 分钟前</p>
</div>
</div>
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-pink-900/40 text-pink-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Sarah</span> 归档了「上线清单」</p>
<p className="text-xs text-zinc-500" style={{}}>22 分钟前</p>
</div>
</div>
<div className="flex gap-3">
<span className="h-9 w-9 rounded-full object-cover ring-1 flex items-center justify-center ring-zinc-800 bg-teal-900/40 text-teal-300">
<svg className="lucide lucide-user-round" data-lucide="user-round" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</span>
<div className="flex-1">
<p className="text-sm" style={{}}><span className="font-medium" style={{}}>Jake</span> 提交了「开发规范」修订</p>
<p className="text-xs text-zinc-500" style={{}}>25 分钟前</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-emerald-950 text-emerald-400 ring-emerald-800">
<svg className="lucide lucide-type" data-lucide="type" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</span>
<h3 className="font-semibold tracking-tight" style={{}}>专业编辑器</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>富文本、表格、代码块、思维结构一应俱全，实时协作不卡顿。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-sky-950 text-sky-400 ring-sky-800">
<svg className="lucide lucide-folders" data-lucide="folders" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z"></path><path d="M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1"></path></svg>
</span>
<h3 className="font-semibold tracking-tight" style={{}}>结构化知识库</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>空间、目录、标签多维组织，沉淀可复用的团队知识资产。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-violet-950 text-violet-400 ring-violet-800">
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<h3 className="font-semibold tracking-tight" style={{}}>全文检索与引用</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>快速检索全文与标题，跨文档引用自动回链，构建知识网络。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-amber-950 text-amber-400 ring-amber-800">
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<h3 className="font-semibold tracking-tight" style={{}}>企业级安全</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>细粒度权限、审计日志与单点登录，满足企业合规与治理。</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden pt-16 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold font-sans" style={{}}>支持每一种知识场景</h2>
<p className="mt-2 text-zinc-400" style={{}}>无论是个人创作还是企业协作，都能快速上手、长期沉淀。</p>
</div>
<div className="grid gap-5 lg:grid-cols-3">
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="h-36 rounded-2xl ring-1 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center ring-zinc-800"></div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{}}>产品文档</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>需求评审、设计方案、上线清单一体化协作。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="h-36 ring-1 bg-center bg-[url('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover rounded-2xl ring-zinc-800"></div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{}}>团队 Wiki</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>流程规范、入职手册、知识百科长期沉淀与复用。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="grid grid-cols-4 gap-3">
<div className="ring-1 h-20 w-full object-cover rounded-xl bg-[url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="rounded-xl ring-1 h-20 w-full bg-[url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="rounded-xl ring-1 h-20 w-full bg-[url('https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="ring-1 h-20 w-full object-cover rounded-xl bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4" style={{}}>API 文档与研发协作</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>代码块高亮、接口说明与变更日志一站管理。</p>
<a className="inline-flex items-center gap-1 text-sm font-medium mt-3 mb-8 hover:text-emerald-300 text-emerald-400" href="#" style={{}}>
                查看模板
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="relative overflow-hidden lg:rounded-3xl transition-all min-h-[260px] flex flex-col w-full rounded-2xl ring-1 text-white bg-neutral-800/60 ring-zinc-800">
<div className="grow bg-[url('https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover pt-6 pr-6 pb-6 pl-6">
<div className="uppercase text-xs font-normal tracking-widest mb-6 text-white/60" style={{}}>接口指南</div>
<div className="space-y-4">
<h4 className="text-2xl font-semibold tracking-tight font-sans text-white" style={{}}>快速集成</h4>
<p className="leading-relaxed text-sm text-white/70" style={{}}>
                      使用标准化示例与 SDK 链接，5 分钟完成接入并产出第一份可发布的 API 文档。
                    </p>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="text-center">
<div className="text-xl font-semibold" style={{}}>5min</div>
<div className="text-xs uppercase tracking-wide text-white/60" style={{}}>接入</div>
</div>
<div className="text-center">
<div className="text-xl font-semibold" style={{}}>Zero</div>
<div className="text-xs uppercase tracking-wide text-white/60" style={{}}>学习成本</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="h-36 rounded-2xl ring-1 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center ring-zinc-800"></div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{}}>会议纪要</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>一键套用模板，快速形成可执行的行动项。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="h-36 rounded-2xl ring-1 bg-[url('https://images.unsplash.com/photo-1527236438218-d82077ae1f85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center ring-zinc-800"></div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{}}>入职手册</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>新人 7 天完成了解与实操，沉淀组织方法论。</p>
</div>
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl ring-zinc-800">
<div className="h-36 rounded-2xl ring-1 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center ring-zinc-800"></div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{}}>知识问答</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>用链接与索引把分散的知识变成自助服务。</p>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="ring-1 bg-gradient-to-tl from-[#111318] to-[#1c1e21]/80 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm ring-zinc-800">
<div className="text-center">
<span className="inline-flex items-center gap-2 text-xs border rounded-full pt-1 pr-3 pb-1 pl-3 text-zinc-300 bg-zinc-950 border-zinc-800" style={{}}>
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                10 分钟搭建你的第一座知识库
              </span>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold font-sans" style={{}}>如何开始使用语雀</h2>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-4">
<div className="ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 ring-zinc-800 bg-slate-50/5">
<div className="flex items-center gap-2 text-zinc-300">
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>1</span>
<span className="font-medium" style={{}}>创建空间</span>
</div>
<p className="text-sm mt-1 text-zinc-400" style={{}}>选择模板，规划目录与标签。</p>
</div>
<div className="ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 ring-zinc-800 bg-slate-50/5">
<div className="flex items-center gap-2 text-zinc-300">
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>2</span>
<span className="font-medium" style={{}}>邀请成员</span>
</div>
<p className="text-sm mt-1 text-zinc-400" style={{}}>配置角色与权限，保障安全协作。</p>
</div>
<div className="ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 ring-zinc-800 bg-slate-50/5">
<div className="flex items-center gap-2 text-zinc-300">
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>3</span>
<span className="font-medium" style={{}}>共同编辑</span>
</div>
<p className="text-sm mt-1 text-zinc-400" style={{}}>实时协作、评论与任务分配。</p>
</div>
<div className="ring-1 rounded-2xl pt-4 pr-4 pb-4 pl-4 ring-zinc-800 bg-slate-50/5">
<div className="flex items-center gap-2 text-zinc-300">
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>4</span>
<span className="font-medium" style={{}}>发布沉淀</span>
</div>
<p className="text-sm mt-1 text-zinc-400" style={{}}>知识索引化，长期可检索与复用。</p>
</div>
</div>
<div className="mt-6">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-800">
<img alt="协作预览" className="w-full object-cover aspect-video" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<button className="absolute inset-0 m-auto h-14 w-14 rounded-full backdrop-blur flex items-center justify-center shadow-md bg-black/90 hover:bg-black">
<svg className="lucide lucide-play h-6 w-6 text-zinc-100" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl bg-gradient-to-br p-6 shadow-sm ring-1 lg:col-span-1 from-emerald-400 to-teal-400 text-black ring-white/10">
<h3 className="text-2xl tracking-tight font-semibold font-sans" style={{}}>立即免费使用</h3>
<p className="mt-2 text-sm text-emerald-900" style={{}}>无需信用卡，团队协作从第一篇文档开始。</p>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-black/95 text-zinc-100 hover:bg-black" href="#" style={{}}>
<svg className="lucide lucide-rocket" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                免费注册
              </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 bg-black/10 text-black ring-black/20 hover:bg-black/15" href="#" style={{}}>
<svg className="lucide lucide-credit-card" data-lucide="credit-card" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                查看定价
              </a>
</div>
</div>
<div className="ring-1 lg:col-span-2 bg-gradient-to-t rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm ring-zinc-800 from-slate-900/10 to-slate-700/30">
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-semibold" style={{}}>最新动态</h4>
<a className="text-sm font-medium text-emerald-400 hover:text-emerald-300" href="#" style={{}}>全部</a>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="flex gap-3">
<div className="h-20 w-28 rounded-xl ring-1 bg-[url('https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="min-w-0">
<p className="text-sm font-medium truncate" style={{}}>全文搜索升级：更快更准</p>
<p className="text-xs text-zinc-400" style={{}}>产品更新 • 2 天前</p>
</div>
</div>
<div className="flex gap-3">
<div className="h-20 w-28 rounded-xl ring-1 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="min-w-0">
<p className="text-sm font-medium truncate" style={{}}>企业版支持 SSO 与审计日志</p>
<p className="text-xs text-zinc-400" style={{}}>安全与治理 • 1 周前</p>
</div>
</div>
<div className="flex gap-3">
<div className="h-20 w-28 rounded-xl ring-1 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover ring-zinc-800"></div>
<div className="min-w-0">
<p className="text-sm font-medium truncate" style={{}}>工程团队如何搭建知识地图</p>
<p className="text-xs text-zinc-400" style={{}}>实践案例 • 3 周前</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold font-sans" style={{}}>常见问题</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800">
<button className="w-full flex faq-toggle pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<span className="text-sm font-medium text-left" style={{}}>语雀是否支持多人实时协作？</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>支持多人同时编辑、评论与批注，变更会自动保存且可在历史版本中追溯。</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800">
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left" style={{}}>是否有免费版本？</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>提供免费版，满足个人与小团队使用。需要更高配额与安全能力可升级付费版。</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800">
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left" style={{}}>如何管理权限与安全？</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>支持空间与文档级权限、成员角色、外链可见性、SSO 与审计日志，满足企业治理需求。</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800">
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left" style={{}}>是否支持导入导出？</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>支持 Markdown/HTML/Docx 等导入导出，迁移成本低，便于与现有流程衔接。</p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-10 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="ring-1 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm ring-zinc-800 from-slate-900 to-slate-700/10">
<div className="grid gap-6 md:grid-cols-4">
<div className="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 ring-1 flex items-center justify-center to-teal-400 ring-white/5">
<svg className="lucide lucide-feather h-5 w-5 text-black" data-lucide="feather" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</div>
<span className="text-lg tracking-tight font-semibold" style={{}}>语雀 Yuque</span>
</div>
<p className="mt-3 text-sm text-zinc-400" style={{}}>让知识沉淀，协作更高效。</p>
<div className="mt-4 flex items-center gap-3">
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#">
<svg className="lucide lucide-twitter h-4.5 w-4.5" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#">
<svg className="lucide lucide-youtube h-4.5 w-4.5" data-lucide="youtube" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#">
<svg className="lucide lucide-github h-4.5 w-4.5" data-lucide="github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-medium" style={{}}>产品</h5>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-zinc-100" href="#" style={{}}>功能</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>定价</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>更新日志</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>服务状态</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium" style={{}}>资源</h5>
<ul className="mt-3 space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-zinc-100" href="#" style={{}}>模板中心</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>开发者</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>帮助文档</a></li>
<li><a className="hover:text-zinc-100" href="#" style={{}}>联系我们</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium" style={{}}>账户</h5>
<div className="mt-3 flex gap-2">
<a className="inline-flex items-center gap-2 ring-1 text-sm font-medium rounded-full pt-2 pr-3 pb-2 pl-3 ring-zinc-800 hover:bg-zinc-950" href="#" style={{}}>
<svg className="lucide lucide-log-in" data-lucide="log-in" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                    登录
                  </a>
<button aria-label="注册" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(16,185,129,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(16,185,129,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 transform-gpu hover:-translate-y-0.5 rounded-full p-[1px] items-center justify-center text-white" style={{backgroundImage: 'linear-gradient(144deg,#10B981,#059669 50%,#34D399)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-user-plus" data-lucide="user-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span style={{}}>注册</span>
</span>
</button>
</div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4 border-zinc-800">
<p className="text-xs text-zinc-400" style={{}}>© <span id="year" style={{}}>2025</span> 语雀 Yuque. 保留所有权利。</p>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<a className="hover:text-zinc-100" href="#" style={{}}>隐私政策</a>
<a className="hover:text-zinc-100" href="#" style={{}}>服务条款</a>
<a className="hover:text-zinc-100" href="#" style={{}}>Cookie</a>
</div>
</div>
</div>
</div>
</footer>
</div>




    </>
  );
}
