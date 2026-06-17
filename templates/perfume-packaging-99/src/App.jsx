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
      

<nav className="fixed top-0 w-full z-50 glass-effect border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 text-white flex items-center justify-center rounded-lg">
<span className="font-bold text-lg tracking-tighter">L</span>
</div>
<span className="font-semibold text-lg tracking-tight text-neutral-900">LUMINA</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#bottles">玻璃瓶型</a>
<a className="hover:text-neutral-900 transition-colors" href="#boxes">高端礼盒</a>
<a className="hover:text-neutral-900 transition-colors" href="#factory">工厂实力</a>
<a className="hover:text-neutral-900 transition-colors" href="#process">定制流程</a>
</div>
<button className="bg-neutral-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all flex items-center gap-2">
<span>获取报价</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-xs font-medium text-neutral-600 mb-6 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    ISO 9001 认证制造工厂
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-neutral-900">
                    重塑香氛美学，<br/>
<span className="text-neutral-400">诠释品牌嗅觉印记。</span>
</h1>
<p className="text-lg text-neutral-500 mb-10 max-w-2xl leading-relaxed">
                    专注高端香水玻璃瓶与礼盒包装的一站式解决方案。从3D建模设计到模具开发，再到自动化生产，我们为全球品牌提供卓越的包装体验。
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-neutral-900 text-white px-8 py-3.5 rounded-full font-medium hover:translate-y-[-2px] transition-transform flex items-center justify-center gap-2">
                        探索产品系列
                        <iconify-icon icon="solar:round-alt-arrow-down-linear" width="18"></iconify-icon>
</button>
<button className="bg-white border border-neutral-200 text-neutral-700 px-8 py-3.5 rounded-full font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                        观看工厂实拍
                    </button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-40 md:opacity-100 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-l from-transparent via-neutral-50/50 to-neutral-50"></div>
<img alt="Perfume Texture" className="w-full h-full object-cover grayscale opacity-20 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</section>

<section className="border-y border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">15+</p>
<p className="text-sm text-neutral-500">年行业制造经验</p>
</div>
<div className="space-y-1">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">5000+</p>
<p className="text-sm text-neutral-500">自有公模储备</p>
</div>
<div className="space-y-1">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">30万</p>
<p className="text-sm text-neutral-500">日均瓶体产能</p>
</div>
<div className="space-y-1">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">99.8%</p>
<p className="text-sm text-neutral-500">成品出货良品率</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="bottles">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-emerald-600 font-medium tracking-wide text-xs uppercase mb-2 block">The Glass Collection</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">精工玻璃瓶型</h2>
<p className="text-neutral-500 mt-2 max-w-md">采用高白料玻璃，提供抛光、磨砂、喷涂、丝印等多种后道工艺。</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-300 pb-0.5 hover:border-neutral-900 transition-colors" href="#">查看完整目录 →</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative bg-neutral-50 rounded-2xl overflow-hidden aspect-[16/9] border border-neutral-100">
<img alt="Luxury Bottle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent text-white">
<h3 className="text-xl font-medium tracking-tight">经典几何系列</h3>
<p className="text-sm text-white/80 mt-1">适用于沙龙香氛，极简切面设计</p>
</div>
</div>

<div className="group relative bg-neutral-50 rounded-2xl overflow-hidden aspect-[4/5] md:aspect-auto border border-neutral-100">
<img alt="Perfume Bottle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg inline-block">复古定制系列</h3>
</div>
</div>

<div className="group relative bg-neutral-50 rounded-2xl overflow-hidden aspect-square border border-neutral-100">
<div className="absolute top-4 right-4 z-10 bg-white rounded-full px-2 py-1 text-xs font-medium border border-neutral-100">热销</div>
<img alt="Bottle Cap" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">Zamack 锌合金盖</h3>
<p className="text-sm text-neutral-500">重手感，磁吸结构</p>
</div>
</div>
<div className="group relative bg-neutral-50 rounded-2xl overflow-hidden aspect-square border border-neutral-100">
<img alt="Miniature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900">便携小样瓶</h3>
<p className="text-sm text-neutral-500">2ml - 10ml 多种规格</p>
</div>
</div>
<div className="group relative bg-neutral-50 rounded-2xl overflow-hidden aspect-square border border-neutral-100 flex items-center justify-center cursor-pointer hover:bg-neutral-100 transition-colors">
<div className="text-center">
<div className="w-12 h-12 rounded-full bg-neutral-200 text-neutral-600 flex items-center justify-center mx-auto mb-3">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">浏览全部 300+ 款型</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="boxes">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-indigo-400 font-medium tracking-wide text-xs uppercase mb-2 block">Packaging Solutions</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">礼盒定制，<br/>始于开箱的仪式感。</h2>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        我们深知包装是品牌叙事的延伸。提供天地盖、书型盒、圆筒盒等多种盒型结构。精选特种纸张，结合烫金、击凸、UV等工艺，完美匹配您的瓶身设计。
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-sm">EVA与海绵内衬</h4>
<p className="text-xs text-neutral-500 mt-0.5">精确模切，确保运输安全与陈列美观。</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1" icon="solar:palette-linear" width="20"></iconify-icon>
<div>
<h4 className="font-medium text-sm">潘通专色印刷</h4>
<p className="text-xs text-neutral-500 mt-0.5">色彩管理系统，保证品牌色值零色差。</p>
</div>
</li>
</ul>
<button className="border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-neutral-900 transition-all">
                        查看包装案例
                    </button>
</div>
<div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
<img alt="Box 1" className="rounded-lg opacity-90 hover:opacity-100 transition-opacity w-full h-64 object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Box 2" className="rounded-lg opacity-90 hover:opacity-100 transition-opacity w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="factory">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-neutral-500 font-medium tracking-wide text-xs uppercase mb-2 block">Manufacturing Excellence</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">硬核工厂实力</h2>
<p className="text-neutral-500 mt-4 max-w-xl mx-auto">不仅是制造，更是对品质的承诺。拥有全自动行列机生产线与十万级无尘组装车间。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3">模具开发中心</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        自有CNC模具车间，3-5天快速出3D样品，7-10天完成模具开发，大幅缩短新品上市周期。
                    </p>
</div>

<div className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6">
<iconify-icon icon="solar:conveyor-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3">自动化生产线</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        引进欧洲全自动制瓶机组，配合自动检测设备，精准控制瓶身重量、厚度及瓶口公差。
                    </p>
</div>

<div className="p-8 rounded-2xl border border-neutral-100 bg-neutral-50 hover:shadow-lg hover:shadow-neutral-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center text-neutral-900 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3">严格品控体系</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        通过ISO9001、ISO14001认证。执行真空试漏、拉力测试、酒精耐磨等多项严苛测试。
                    </p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-64 md:h-80">
<div className="col-span-2 row-span-2 rounded-xl overflow-hidden relative group">
<img alt="Factory Line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs font-medium rounded backdrop-blur">自动化车间</div>
</div>
<div className="rounded-xl overflow-hidden relative group">
<img alt="Quality Check" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden relative group">
<img alt="Raw Materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="col-span-2 rounded-xl overflow-hidden relative bg-neutral-100 flex items-center justify-center group border border-neutral-200">
<div className="text-center group-hover:scale-105 transition-transform">
<p className="text-4xl font-bold text-neutral-900 tracking-tight">7000㎡</p>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">仓储面积</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-t border-neutral-200" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-16 text-center">OEM/ODM 合作流程</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-neutral-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors shadow-sm">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:chat-round-line-linear" width="32"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">需求沟通</h4>
<p className="text-xs text-neutral-500 mt-2">确认瓶型、容量、工艺</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors shadow-sm">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">设计打样</h4>
<p className="text-xs text-neutral-500 mt-2">3D图纸与模具制作</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors shadow-sm">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:file-check-linear" width="32"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">样品确认</h4>
<p className="text-xs text-neutral-500 mt-2">客户签样与合同签署</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors shadow-sm">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">批量生产</h4>
<p className="text-xs text-neutral-500 mt-2">全检、组装与包装</p>
</div>

<div className="text-center group">
<div className="w-24 h-24 mx-auto bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-6 group-hover:border-neutral-900 transition-colors shadow-sm">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:delivery-linear" width="32"></iconify-icon>
</div>
<h4 className="font-medium text-neutral-900">物流交付</h4>
<p className="text-xs text-neutral-500 mt-2">协助报关与全球发货</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div>
<h3 className="text-3xl font-medium tracking-tight mb-6">准备好开启下一个爆款项目了吗？</h3>
<p className="text-neutral-400 mb-8 max-w-md">无论是寻找现货公模，还是开发独家私模，我们的团队随时准备为您服务。</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500">致电我们</p>
<p className="font-medium">+86 138 0000 0000</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500">发送邮件</p>
<p className="font-medium">business@luminapack.com</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5">
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-1.5">姓名</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" placeholder="您的姓名" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">公司</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" placeholder="公司名称" type="text"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">邮箱</label>
<input className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-1.5">需求描述</label>
<textarea className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors" placeholder="请简述您的需求（产品类型、数量等）" rows="3"></textarea>
</div>
<button className="w-full bg-white text-neutral-900 font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors">提交咨询</button>
</form>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2024 Lumina Packaging Co., Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">隐私政策</a>
<a className="hover:text-white transition-colors" href="#">服务条款</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
