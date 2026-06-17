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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
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
      

<nav className="border-b border-slate-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="text-[#4F46E5] transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
<iconify-icon height="28" icon="solar:radar-linear" width="28"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">GEO Optimizer</span>
</a>

<div className="hidden lg:flex items-center relative group">
<div className="absolute left-3 w-4 h-4 text-slate-400 group-hover:text-[#4F46E5] transition-colors flex items-center justify-center">
<iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] w-64 transition-all duration-300 hover:shadow-sm placeholder:text-slate-400 font-normal" placeholder="搜索大模型平台特性" type="text"/>
</div>
</div>

<div className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-6 text-base font-normal text-slate-600">
<a className="hover:text-[#4F46E5] transition-colors" href="#effects">优化效果</a>
<a className="hover:text-[#4F46E5] transition-colors" href="#platforms">平台解读</a>
<a className="hover:text-[#4F46E5] transition-colors" href="#pricing">服务报价</a>
</div>
<button className="flex items-center gap-2 text-base font-normal text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
<span>CN</span>
</button>
<a className="px-5 py-2.5 bg-[#EEF2FF] text-[#4F46E5] font-medium rounded-lg hover:bg-[#E0E7FF] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0" href="#cta">
                        获取双引擎方案
                    </a>
</div>

<button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 flex items-center justify-center" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex gap-8 mt-1">
<a className="pb-3 text-base font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-900 transition-colors" href="#">AI搜索优化服务</a>
<a className="pb-3 text-base font-medium text-[#4F46E5] border-b-2 border-[#4F46E5]" href="#">GEO品牌健康度检测</a>
</div>
</div>

<div className="hidden lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex-col gap-4" id="mobile-menu">
<input className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-base focus:ring-2 focus:ring-[#4F46E5]" placeholder="搜索大模型平台特性" type="text"/>
<a className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100" href="#">AI搜索优化服务</a>
<a className="text-lg font-medium text-[#4F46E5] py-2 border-b border-slate-100" href="#">GEO品牌健康度检测</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#effects">优化效果</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#platforms">平台解读</a>
<a className="text-lg font-medium text-slate-700 py-2" href="#pricing">服务报价</a>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20" id="cta">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl pr-0 lg:pr-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#4F46E5] text-sm font-medium mb-6">
<iconify-icon height="16" icon="solar:stars-linear" width="16"></iconify-icon>
                    大模型SEO优化专家
                </div>
<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                    企业为何必须布局 <br/>大模型SEO优化？
                </h1>
<p className="text-xl text-slate-500 font-normal leading-relaxed mb-8">
                    大模型SEO优化公司帮助企业在AI时代抢占流量入口，GEO优化服务是其中的核心能力。立即诊断您的品牌是否在AI问答中被“投毒”或遗漏。
                </p>
<div className="flex items-center gap-4 text-sm text-slate-600 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        支持DeepSeek
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        支持文心一言
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-green-500" height="18" icon="solar:check-circle-linear" width="18"></iconify-icon>
                        支持Kimi/豆包
                    </div>
</div>
</div>

<div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#4F46E5] to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
<div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">GEO健康度检测</h2>
</div>
<p className="text-sm text-slate-500 font-normal mb-6">诊断品牌是否被AI“投毒”或忽视，免费获取报告。</p>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">需检测的品牌/产品名</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] outline-none transition-all placeholder:text-slate-400" placeholder="例如：水滴互动" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">联系人姓名</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] outline-none transition-all placeholder:text-slate-400" placeholder="如何称呼您" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5">联系电话/微信</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base focus:ring-2 focus:ring-[#4F46E5]/20 focus:border-[#4F46E5] outline-none transition-all placeholder:text-slate-400" placeholder="用于接收详细诊断报告" type="text"/>
</div>
<label className="custom-checkbox flex items-start gap-3 cursor-pointer mt-2 group">
<input checked="" className="sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border border-slate-300 bg-slate-50 flex items-center justify-center mt-0.5 transition-colors group-hover:border-[#4F46E5]">
<svg className="w-3.5 h-3.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</div>
<span className="text-sm text-slate-600 font-normal leading-snug">
                                同意获取定制化AI平台展现效果预估与GEO/SEO适配建议
                            </span>
</label>
<button className="w-full mt-6 px-8 py-3.5 bg-[#4F46E5] hover:bg-[#4338ca] text-white text-lg font-medium rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform active:scale-[0.98] flex items-center justify-center gap-2" type="button">
<span>马上获取诊断报告</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col items-start group cursor-default p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
<div className="text-[#4F46E5] bg-indigo-50 rounded-xl mb-5 px-3 py-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:routing-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">流量入口迁移</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">用户更多通过AI问答获取信息，传统SEO无法覆盖ChatGPT、DeepSeek等全新场景。</p>
</div>

<div className="flex flex-col items-start group cursor-default p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
<div className="text-[#4F46E5] bg-indigo-50 rounded-xl mb-5 px-3 py-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">决策链渗透</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">AI推荐直接影响用户“方案论证”阶段，GEO可精准抢占高价值的商业决策场景。</p>
</div>

<div className="flex flex-col items-start group cursor-default p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
<div className="text-[#4F46E5] bg-indigo-50 rounded-xl mb-5 px-3 py-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">信任度叠加</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">被AI频繁引用的内容会反向提升搜索引擎排名，完美遵循Google E-E-A-T准则。</p>
</div>

<div className="flex flex-col items-start group cursor-default p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
<div className="text-[#4F46E5] bg-indigo-50 rounded-xl mb-5 px-3 py-3 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">成本效率提升</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed">AI SEO可自动挖掘长尾词、生成结构化内容，比传统人工优化成本大幅降低70%。</p>
</div>
</div>
</main>

<section className="py-24 bg-white relative overflow-hidden" id="effects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#4F46E5] font-medium mb-4 block text-sm uppercase tracking-wider">GEO Optimization Effects</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">GEO优化效果预估</h2>
<p className="text-xl text-slate-500 font-normal">GEO优化效果与AI平台特性、内容基础、行业竞争度紧密相关，以下为常见场景的预期效果。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-slate-50 group">
<div className="mb-6 text-[#4F46E5] bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="28" icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">AI引用率提升</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                        一般2-4个月可见AI平台引用率提升，品牌名、产品词在DeepSeek、文心一言等回答中被提及频率增加，引用准确率逐步优化。
                    </p>
</div>

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-slate-50 group">
<div className="mb-6 text-[#4F46E5] bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="28" icon="solar:layers-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">多平台覆盖</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                        根据目标平台数量制定策略，知识图谱与结构化数据建设完成后，可同步提升Kimi、豆包等多个AI工具的引用表现。
                    </p>
</div>

<div className="p-8 border border-slate-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 bg-slate-50 group">
<div className="mb-6 text-[#4F46E5] bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 origin-left">
<iconify-icon height="28" icon="solar:refresh-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">持续迭代优化</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                        每月提供AI引用监测报告，根据数据调整内容策略。GEO效果具有累积性，持续优化可带来长期流量与品牌曝光增长。
                    </p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:text-[#4F46E5] hover:border-[#4F46E5] text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md" href="#cta">
                    了解GEO布局方案 / 获取效果预估
                </a>
</div>
</div>
</section>

<section className="bg-[#4F46E5] py-24 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 bg-indigo-400/20 text-indigo-100 text-sm font-medium rounded-full mb-4 border border-indigo-400/30">
                    GEO vs SEO
                </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                    了解GEO和SEO的区别，<br/>有助于选择适合的AI搜索优化策略
                </h2>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors backdrop-blur-sm">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="w-full relative">
<div className="flex w-[200%] animate-scroll hover:pause">
<div className="flex animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:server-square-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">底层逻辑对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:monitor-linear" width="16"></iconify-icon> SEO 传统搜索
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    面向百度、Google等传统搜索引擎，通过关键词布局、反向链接等技术手段提升排名，目标是吸引用户点击进入网站。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:cpu-linear" width="16"></iconify-icon> GEO 生成式引擎
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    针对ChatGPT、DeepSeek等AI，优化内容结构使其被AI直接提取并整合到答案中，目标是成为AI生成内容的核心引用来源。
                                </p>
</div>
</div>
</div>

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">优化维度对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:text-field-focus-linear" width="16"></iconify-icon> 关键词密度
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    依赖关键词密度、页面速度、外链数量等量化指标，内容需适配人类阅读习惯，强调页面权重积累。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:network-linear" width="16"></iconify-icon> 语义理解与结构化
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    聚焦语义关联、知识图谱构建及多模态适配，要求内容逻辑清晰、实体关系明确，便于AI解析上下文意图。
                                </p>
</div>
</div>
</div>

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">结果呈现对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:list-linear" width="16"></iconify-icon> 链接列表
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    用户需在搜索结果页手动点击链接筛选信息，结果呈现为长篇的网页标题和摘要列表。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon> 直接答案生成
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    AI直接生成整合后的结构化答案（如对比表格、步骤指南），用户无需跳转即可获取信息，品牌内容被优先引用展示。
                                </p>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex animate-infinite-scroll pl-4 gap-x-6 gap-y-6">

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:server-square-update-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">底层逻辑对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:monitor-linear" width="16"></iconify-icon> SEO 传统搜索
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    面向百度、Google等传统搜索引擎，通过关键词布局、反向链接等技术手段提升排名，目标是吸引用户点击进入网站。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:cpu-linear" width="16"></iconify-icon> GEO 生成式引擎
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    针对ChatGPT、DeepSeek等AI，优化内容结构使其被AI直接提取并整合到答案中，目标是成为AI生成内容的核心引用来源。
                                </p>
</div>
</div>
</div>

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">优化维度对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:text-field-focus-linear" width="16"></iconify-icon> 关键词密度
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    依赖关键词密度、页面速度、外链数量等量化指标，内容需适配人类阅读习惯，强调页面权重积累。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:network-linear" width="16"></iconify-icon> 语义理解与结构化
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    聚焦语义关联、知识图谱构建及多模态适配，要求内容逻辑清晰、实体关系明确，便于AI解析上下文意图。
                                </p>
</div>
</div>
</div>

<div className="min-w-[400px] w-[400px] bg-white p-8 rounded-2xl shadow-xl transform transition-transform duration-300 hover:-translate-y-2 cursor-default flex flex-col h-full">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5]">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">结果呈现对比</h3>
</div>
<div className="flex-1 space-y-6">
<div>
<h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:list-linear" width="16"></iconify-icon> 链接列表
                                </h4>
<p className="text-[15px] text-slate-600 font-normal leading-relaxed">
                                    用户需在搜索结果页手动点击链接筛选信息，结果呈现为长篇的网页标题和摘要列表。
                                </p>
</div>
<div>
<h4 className="text-sm font-semibold text-[#4F46E5] uppercase tracking-wider mb-2 flex items-center gap-2">
<iconify-icon height="16" icon="solar:magic-stick-3-linear" width="16"></iconify-icon> 直接答案生成
                                </h4>
<p className="text-[15px] text-slate-900 font-medium leading-relaxed">
                                    AI直接生成整合后的结构化答案（如对比表格、步骤指南），用户无需跳转即可获取信息，品牌内容被优先引用展示。
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center relative z-10">
<button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#4F46E5] text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                获取GEO/SEO适配建议
            </button>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-24">
<div className="max-w-4xl mb-12">
<span className="text-slate-500 font-medium mb-4 block text-base uppercase tracking-wide">Implementation Path</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        GEO优化实施路径：多维度提升内容引用率
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:code-file-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">结构化内容</h3>
<p className="text-slate-500 text-sm leading-relaxed">优化网站和内容的结构，使其更容易被生成引擎解析和引用。包括清晰的标题、子标题和Schema元标签。</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:pin-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">关键信息突出</h3>
<p className="text-slate-500 text-sm leading-relaxed">确保重要信息（如产品特点、服务优势）容易被找到和理解，以便生成引擎可以有效地提取和使用。</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:share-circle-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">增强语义相关性</h3>
<p className="text-slate-500 text-sm leading-relaxed">使用深度关联的行业词汇和短语来提高内容的语义相关性，使其更符合AI提问的多轮对话意图。</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:ruler-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">GEO度量标准</h3>
<p className="text-slate-500 text-sm leading-relaxed">使用GEO专门的度量标准来评估内容表现，不再仅看排名，而是关注“引用频次”和“回答采纳率”。</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:graph-new-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">持续监测和调整</h3>
<p className="text-slate-500 text-sm leading-relaxed">定期监测内容在DeepSeek等生成引擎中的表现，并根据底层模型更新反馈进行内容结构的动态调整。</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<iconify-icon className="text-[#4F46E5] mb-4" height="28" icon="solar:refresh-linear" width="28"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">适应引擎进化</h3>
<p className="text-slate-500 text-sm leading-relaxed">由于生成引擎和大型语言模型（LLMs）以月为单位不断进化，GEO策略需要灵活适应，持续更新优化框架。</p>
</div>
</div>
</div>

<div className="max-w-5xl">
<div className="mb-12">
<span className="text-slate-500 font-medium mb-4 block text-base uppercase tracking-wide">Dual Engine Strategy</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        AI SEO + GEO 技术双引擎驱动
                    </h2>
<p className="text-lg text-slate-600 mt-4">作为大模型SEO优化公司，我们提供全域AI搜索优化服务，快速提升多端排名。</p>
</div>
<div className="space-y-6">

<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-[#4F46E5] rounded-lg shrink-0">
<iconify-icon height="24" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">技术升级</h3>
<p className="text-slate-500 text-[15px] leading-relaxed">投资前沿AI技术和工具，如自然语言处理(NLP)和机器学习(ML)，深度支持AISEO与GEO的规模化实施。</p>
</div>
</div>
<div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-[#4F46E5] rounded-lg shrink-0">
<iconify-icon height="24" icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">内容重构</h3>
<p className="text-slate-500 text-[15px] leading-relaxed">从单一关键词优化转向多维内容生成，涵盖深度文本、信息图表、问答数据等适宜AI解析的形式。</p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-[#4F46E5] rounded-lg shrink-0">
<iconify-icon height="24" icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">语义搜索优化</h3>
<p className="text-slate-500 text-[15px] leading-relaxed">利用AI工具分析用户Prompt提问模式，挖掘潜在意图词簇，构建覆盖全生命周期的语义关键词库。</p>
</div>
</div>
<div className="flex-1 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4">
<div className="p-3 bg-indigo-50 text-[#4F46E5] rounded-lg shrink-0">
<iconify-icon height="24" icon="solar:server-path-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">技术基建强化</h3>
<p className="text-slate-500 text-[15px] leading-relaxed">用Schema等规范标记产品参数、行业认证、客户评价，降低大模型抓取门槛，帮助AI快速识别业务核心价值。</p>
</div>
</div>
</div>
</div>
<div className="mt-12">
<button className="inline-flex items-center gap-2 px-8 py-4 bg-[#4F46E5] hover:bg-[#4338ca] text-white text-lg font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                        获取实施路径规划
                        <iconify-icon height="22" icon="solar:arrow-right-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="platforms">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">解读不同大模型平台GEO优化特性</h2>
<p className="text-lg text-slate-500">各平台内容抓取与引用机制不同，GEO优化需针对性布局</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
<iconify-icon height="26" icon="solar:chat-round-dots-linear" width="26"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900">豆包</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">语义理解与多轮对话适配</h4>
<p className="text-sm text-slate-600 mb-3">豆包整合搜索与对话场景，需强化上下文连贯性，让品牌在多轮对话中被准确引用。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">多轮对话</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">知识图谱</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">实体关系</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">多模态与时效性</h4>
<p className="text-sm text-slate-600 mb-3">支持图文输入，优化图片Alt。偏好权威、时效性强的内容，建立品牌信息一致性。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">多模态</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">时效性</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
<iconify-icon height="26" icon="solar:code-square-linear" width="26"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900">DeepSeek</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">技术内容与结构化数据</h4>
<p className="text-sm text-slate-600 mb-3">推理能力强，需强化技术文档、参数说明等结构化数据，提供最佳实践对比方案。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">技术文档</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">结构化数据</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">代码方案</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">权威引用与长尾覆盖</h4>
<p className="text-sm text-slate-600 mb-3">重视可溯源信息。挖掘长尾技术词，布局FAQ，抢占细分技术场景入口。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">可溯源</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">长尾词</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">FAQ</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center">
<iconify-icon height="26" icon="solar:box-minimalistic-linear" width="26"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900">文心一言</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">百度生态内容整合</h4>
<p className="text-sm text-slate-600 mb-3">与搜索深度整合，需同步布局百科、知道等生态。通过行业认证、案例数据提升E-E-A-T权重。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">百度生态</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">E-E-A-T</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">权威背书</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">结构化与行业词布局</h4>
<p className="text-sm text-slate-600 mb-3">使用Schema标记官网，围绕行业核心词构建内容体系，确保优先调取。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">Schema</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">行业词</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
<iconify-icon height="26" icon="solar:users-group-two-rounded-linear" width="26"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900">腾讯元宝</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">腾讯生态与社交场景</h4>
<p className="text-sm text-slate-600 mb-3">整合微信公众号、视频号。侧重对话与社交场景，内容需口语化、场景化。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">公众号</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">口语化</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">社交场景</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">权威新闻与解决方案</h4>
<p className="text-sm text-slate-600 mb-3">偏好权威媒体来源，清晰表述产品功能与应用场景，便于在询价选型中推荐。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">权威媒体</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">解决方案</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
<iconify-icon height="26" icon="solar:document-medicine-linear" width="26"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900">Kimi</h3>
</div>
<div className="space-y-6">
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">长文本与深度内容</h4>
<p className="text-sm text-slate-600 mb-3">擅长长文本理解，布局深度白皮书、行业报告，提升在复杂问答中的引用率。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">白皮书</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">行业报告</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">长文本</span>
</div>
</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-2">实时搜索与全链路覆盖</h4>
<p className="text-sm text-slate-600 mb-3">支持联网实时搜索。内容需逻辑连贯，覆盖用户从认知到购买的完整问答链路。</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">联网搜索</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">逻辑连贯</span>
<span className="px-2 py-1 bg-white border border-slate-200 text-xs text-slate-500 rounded">全链路</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#4F46E5] to-indigo-600 p-8 rounded-2xl shadow-lg flex flex-col justify-center text-center">
<iconify-icon className="text-white mx-auto mb-6 opacity-90" height="48" icon="solar:rocket-linear" width="48"></iconify-icon>
<h3 className="text-2xl font-semibold text-white mb-4">定制您的专属优化方案</h3>
<p className="text-indigo-100 text-sm mb-8 leading-relaxed">了解各平台具体落地细节，免费获取一份详尽的针对性平台分发策略建议书。</p>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-white text-[#4F46E5] text-base font-medium rounded-lg transition-all shadow hover:shadow-md hover:-translate-y-0.5" href="#cta">
                        获取平台优化方案
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] relative overflow-hidden">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#4F46E5] font-medium mb-4 block text-sm uppercase tracking-wider">Service Delivery</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">我们的GEO优化服务交付说明</h2>
<p className="text-lg text-slate-500">每个环节都有清晰的交付物和可量化的监测指标</p>
</div>
<div className="space-y-6">

<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
<div className="text-4xl font-black text-indigo-100 shrink-0">01</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">目标AI平台确认</h3>
<p className="text-slate-600 text-[15px] leading-relaxed">根据客户行业和目标用户，确定优先优化的AI平台（DeepSeek、文心一言、豆包等）。不同平台的内容抓取机制不同，策略需要差异化定制。</p>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
<div className="text-4xl font-black text-indigo-100 shrink-0">02</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">知识图谱搭建</h3>
<p className="text-slate-600 text-[15px] leading-relaxed">梳理品牌核心概念、产品功能、行业关联词，构建语义关联网络。帮助AI工具建立对品牌的完整认知，不只是认识品牌名，而是理解品牌在行业中的定位。</p>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
<div className="text-4xl font-black text-indigo-100 shrink-0">03</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">网站结构化标记</h3>
<p className="text-slate-600 text-[15px] leading-relaxed">在关键页面（服务页、关于页、案例页）添加Schema结构化数据，让大模型爬虫能更高效、准确地抓取和解析核心内容，大幅提升被引用的概率。</p>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
<div className="text-4xl font-black text-indigo-100 shrink-0">04</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">权威内容建设</h3>
<p className="text-slate-600 text-[15px] leading-relaxed">在知乎、百度百科、行业媒体等AI工具频繁抓取的高权重平台发布权威内容，建立多平台的品牌信息一致性，形成AI引用的信任基石。</p>
</div>
</div>

<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-shadow">
<div className="text-4xl font-black text-indigo-100 shrink-0">05</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">水滴GEO软件监控与迭代</h3>
<p className="text-slate-600 text-[15px] leading-relaxed">每月通过自研工具检测品牌在主流AI平台中的出现频率、情感倾向和引用准确率，根据数据波动动态调整内容干预策略，持续提升引用质量。</p>
</div>
</div>
</div>
<div className="mt-12 text-center bg-indigo-50 border border-indigo-100 p-6 rounded-xl">
<p className="text-slate-700 text-sm mb-3">查看我们的GEO大模型SEO成功案例，了解实际提升数据。GEO优化哪家好？水滴互动已服务多家知名企业，效果可追溯。</p>
<a className="text-[#4F46E5] font-medium hover:underline inline-flex items-center gap-1" href="#">点击查看客户案例 <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4 text-center">GEO优化费用模式</h2>
<p className="text-center text-slate-500 mb-16">根据目标平台、行业竞争度、内容基础定制报价，透明计费无隐形支出。</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 border border-slate-200 rounded-2xl hover:border-[#4F46E5] transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-[#4F46E5] mb-6 transition-colors">
<iconify-icon height="24" icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">按平台与范围计费</h3>
<p className="text-sm text-slate-500 leading-relaxed">根据目标AI平台数量（DeepSeek、文心等）及优化范围（单品牌/多产品线）定制报价。平台越多、范围越广，投入相应增加。</p>
</div>
<div className="p-8 border border-[#4F46E5] shadow-lg rounded-2xl relative">
<div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#4F46E5] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                        推荐模式
                    </div>
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-[#4F46E5] mb-6">
<iconify-icon height="24" icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">按年服务费+考核模式</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">采用年度服务费配合KPI考核机制。包含知识图谱搭建、结构化标记、权威内容分发、月度监测与迭代，过程透明，效果可追溯。</p>
</div>
<div className="p-8 border border-slate-200 rounded-2xl hover:border-[#4F46E5] transition-colors group">
<div className="w-12 h-12 rounded-full bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-slate-400 group-hover:text-[#4F46E5] mb-6 transition-colors">
<iconify-icon height="24" icon="solar:tuning-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">完全定制化方案</h3>
<p className="text-sm text-slate-500 leading-relaxed">不同行业、现有内容资产质量、竞品活跃度直接影响优化难度与周期。我们将基于前期深度调研输出专属落地方案。</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e293b] text-white hover:bg-[#0f172a] text-lg font-medium rounded-lg transition-all shadow-sm" href="#cta">
                    获取专属方案与精准报价
                </a>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-4 group" href="#">
<div className="text-[#4F46E5] flex items-center justify-center">
<iconify-icon height="28" icon="solar:radar-linear" width="28"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold text-slate-900 tracking-tight leading-none">GEO Optimizer</span>
</div>
</a>
<p className="text-sm text-slate-500 font-medium mb-6">专注大模型时代的AI搜索优化与流量增长，水滴互动旗下产品。</p>
</div>

<div>
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">核心服务</h3>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">GEO品牌健康度诊断</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">大模型SEO包年优化</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">知识图谱搭建服务</a></li>
</ul>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">平台解析</h3>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">DeepSeek优化指南</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">豆包多模态优化</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">文心一言占位策略</a></li>
</ul>
</div>
<div>
<h3 className="text-slate-900 font-semibold mb-6 tracking-tight">关于我们</h3>
<ul className="space-y-4 text-sm text-slate-500 font-medium">
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">客户成功案例</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">什么是GEO？</a></li>
<li><a className="hover:text-[#4F46E5] transition-colors" href="#">联系水滴互动</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-slate-400 font-medium">
<p>© 2024 水滴互动. 保留所有权利。</p>
</div>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-[#4F46E5] transition-colors" href="#"><iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#4F46E5] transition-colors" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
