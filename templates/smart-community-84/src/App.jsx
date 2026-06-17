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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-blue-600 transition-transform group-hover:scale-110" data-height="20" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="20"></span>
<span className="serif font-semibold text-lg tracking-tight text-slate-900">智 · 社区</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">智慧服务</a>
<a className="hover:text-blue-600 transition-colors" href="#">安防监控</a>
<a className="hover:text-blue-600 transition-colors" href="#">绿色能源</a>
<a className="hover:text-blue-600 transition-colors" href="#">关于我们</a>
</div>
<div className="flex items-center gap-3">
<button className="text-slate-500 hover:text-slate-800 transition-colors">
<span className="iconify" data-height="18" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="bg-slate-900 text-slate-50 px-4 py-1.5 rounded-full text-xs font-medium hover:bg-blue-700 transition-colors shadow-sm ring-1 ring-inset ring-slate-900/10">
                    业主登录
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
<div className="absolute top-40 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM2NDc0OGIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>
<div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-medium shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                系统运行正常 · 实时监测中
            </div>
<h1 className="serif text-5xl md:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                万物互联的<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">未来栖息地</span>
</h1>
<p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                融合前沿AI技术与人文关怀，重新定义社区生活。从无感通行到智能管家，让科技隐于无形，服务触手可及。
            </p>
<div className="flex items-center justify-center gap-4 pt-4">
<button className="group relative px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-2">
                        预约参观 
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</button>
<button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-lg shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    演示视频
                </button>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-slate-200/50">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="space-y-2">
<h2 className="serif text-3xl font-medium text-slate-900 tracking-tight">核心科技</h2>
<p className="text-slate-500">构建安全、高效、绿色的生活场景。</p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group" href="#">
                    查看所有功能 <span className="iconify transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-blue-600" data-height="80" data-icon="lucide:scan-face" data-width="80"></span>
</div>
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 border border-blue-100">
<span className="iconify" data-icon="lucide:scan-face" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">无感通行</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        基于生物识别技术，实现社区大门、单元门与电梯的自动联动，归家之路畅通无阻。
                    </p>
</div>

<div className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-green-100 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-green-600" data-height="80" data-icon="lucide:leaf" data-width="80"></span>
</div>
<div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center mb-6 text-green-600 border border-green-100">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">智慧能源</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        智能微电网系统，实时优化公共区域能耗，太阳能光伏与雨水回收系统共建绿色生态。
                    </p>
</div>

<div className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-indigo-100 transition-all duration-300 cursor-pointer overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-indigo-600" data-height="80" data-icon="lucide:smartphone" data-width="80"></span>
</div>
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600 border border-indigo-100">
<span className="iconify" data-icon="lucide:layout-grid" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">云端管家</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        一键报修、物业缴费、访客邀请。专属APP连接社区万物，从容掌控生活节奏。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-100">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-2 md:order-1">

<div className="relative w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-300/50">

<div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400"></div>
<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1558002038-1091a1661116?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-overlay"></div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:home" data-width="18"></span>
</div>
<div>
<div className="text-xs font-semibold text-slate-800">Home Control</div>
<div className="text-[10px] text-slate-500">场景模式 · 归家模式</div>
</div>
<div className="ml-auto flex gap-2">
<div className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-[10px] font-medium border border-blue-100">24°C</div>
<div className="px-2 py-1 bg-green-50 text-green-600 rounded text-[10px] font-medium border border-green-100">ON</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl -z-10"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-200/50 rounded-full blur-2xl -z-10"></div>
</div>
<div className="space-y-6 order-1 md:order-2">
<div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
<span className="w-8 h-[1px] bg-blue-600"></span> 智慧美学
                </div>
<h2 className="serif text-4xl font-medium text-slate-900 tracking-tight">数据驱动的<br/>舒适体验</h2>
<p className="text-slate-500 leading-relaxed">
                    不仅是冰冷的硬件堆砌，更是有温度的智能感知。通过分布式的传感器网络，社区能够感知环境变化，自动调节光照与温度，为您创造最适宜的居住环境。
                </p>
<div className="space-y-4 pt-2">
<div className="flex items-start gap-3">
<div className="mt-1 text-blue-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-800">全域感知</h4>
<p className="text-xs text-slate-500 mt-1">毫米波雷达与AI视觉全覆盖。</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 text-blue-500">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-800">隐私加密</h4>
<p className="text-xs text-slate-500 mt-1">银行级数据加密技术，守护您的隐私安全。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="serif text-3xl font-medium text-slate-900 tracking-tight mb-4">社区数据看板</h2>
<p className="text-slate-500 max-w-xl mx-auto">数字化运营，让社区状态一目了然。</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:shield-check" data-width="24"></span>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">安防覆盖率</div>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:cloud" data-width="24"></span>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">24 AQI</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">空气质量优</div>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:car" data-width="24"></span>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">156</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">剩余车位</div>
</div>

<div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center gap-2">
<span className="iconify text-slate-400 mb-2" data-icon="lucide:wifi" data-width="24"></span>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">5G</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">全区覆盖</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-6 mb-10">
<div className="max-w-6xl mx-auto space-y-8">
<div className="flex items-center justify-between border-b border-slate-200 pb-4">
<h3 className="text-lg font-semibold text-slate-800">未来生活图景</h3>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-400 hover:text-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span>
</button>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-slate-400 hover:text-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">

<div className="col-span-2 row-span-2 relative group rounded-xl overflow-hidden cursor-pointer bg-slate-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<p className="text-sm font-medium">现代建筑美学</p>
<p className="text-xs text-white/80">Smart Architecture</p>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden cursor-pointer bg-slate-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
</div>

<div className="relative group rounded-xl overflow-hidden cursor-pointer bg-slate-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
</div>

<div className="col-span-2 relative group rounded-xl overflow-hidden cursor-pointer bg-slate-200">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
<p className="text-sm font-medium">远程协作中心</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-slate-200/50 bg-gradient-to-b from-slate-50 to-blue-50/30">
<div className="max-w-xl mx-auto text-center">
<div className="mb-6 flex justify-center">
<div className="p-3 bg-white rounded-full shadow-sm border border-slate-100 text-blue-600">
<span className="iconify" data-icon="lucide:mail" data-width="24"></span>
</div>
</div>
<h2 className="serif text-2xl font-medium text-slate-900 mb-3 tracking-tight">订阅社区动态</h2>
<p className="text-slate-500 text-sm mb-8">
                获取最新的社区公告、智能家居升级指南及活动通知。
            </p>
<form className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
<input className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition-all placeholder:text-slate-400" placeholder="you@example.com" required="" type="email"/>
<button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors shadow-lg shadow-slate-900/10" type="submit">
                    订阅
                </button>
</form>
<p className="text-[10px] text-slate-400 mt-4">
                点击订阅即表示同意我们的隐私政策与服务条款。
            </p>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-blue-600" data-icon="lucide:hexagon" data-width="20"></span>
<span className="serif font-bold text-lg text-slate-900">智 · 社区</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        以前沿科技赋能现代居住，打造安全、便捷、绿色的智慧生活样本。
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">产品</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">智能安防</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">智慧物业</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">社区APP</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">商业合作</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">关于</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">开发团队</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">联系我们</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">工作机会</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">关注</h4>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-blue-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="hover:text-blue-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-blue-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Smart Community. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">隐私政策</a>
<a className="hover:text-slate-600" href="#">服务条款</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
