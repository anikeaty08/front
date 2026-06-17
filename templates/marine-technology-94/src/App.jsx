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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-gradient-to-b from-black/50 to-transparent">
<div className="flex items-center gap-2">

<div className="flex items-center gap-2 text-white">
<div className="h-6 w-6 bg-white rounded-sm flex items-center justify-center">
<span className="text-black font-bold text-xs">H</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-medium tracking-tight">衡拓科技</span>
<span className="text-[10px] tracking-widest opacity-80 uppercase">Hunter</span>
</div>
</div>
</div>
<div className="flex items-center gap-4 text-white">
<button aria-label="Search">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button aria-label="Menu">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-[100dvh] overflow-hidden">

<img alt="Ship at sea" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-900/90"></div>

<div className="absolute bottom-0 left-0 w-full p-8 pb-12 flex flex-col gap-6">
<h1 className="text-white text-4xl font-medium leading-[1.1] tracking-tight">
                船舶机电设备<br/>行业领导者
            </h1>
<p className="text-slate-200 text-lg font-light leading-relaxed max-w-sm">
                衡拓科技是上海衡拓实业发展有限公司市场化运作的主体品牌，专注于船舶机电设备和系统的研发设计、生产总成。
            </p>
<button className="group mt-4 flex items-center gap-2 self-start rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all active:scale-95">
<span>探索更多</span>
<i className="w-4 h-4 transition-transform group-active:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</header>

<section className="py-20 px-6 bg-white">
<div className="mb-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">一站式船舶机电<br/>设备解决方案</h2>
<p className="text-slate-500 text-lg leading-relaxed">
                衡拓船舶以减摇技术为核心，构建覆盖全船型、全航速的稳定系统矩阵。
            </p>
</div>

<div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 mb-8">
<img alt="Oil rig" className="w-full h-64 object-cover opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="bg-white/90 text-blue-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur flex items-center gap-2 animate-pulse">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    全场景解决方案
                 </button>
</div>
</div>

<div className="grid gap-3">
<button className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white text-left hover:border-blue-500/50 hover:bg-slate-50 transition-colors group">
<span className="font-medium text-slate-700">机辉人解决方案</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white text-left hover:border-blue-500/50 hover:bg-slate-50 transition-colors group">
<span className="font-medium text-slate-700">海工平台解决方案</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white text-left hover:border-blue-500/50 hover:bg-slate-50 transition-colors group">
<span className="font-medium text-slate-700">商用飞机器解决方案</span>
<i className="w-4 h-4 text-slate-400 group-hover:text-blue-600" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-8 px-6 bg-slate-50">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">灵活适配各个领域的<br/>多样化需求</h2>
<div className="flex flex-col gap-4">

<div className="group relative h-72 w-full overflow-hidden rounded-2xl">
<img alt="Ship" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-2">衡拓船舶</h3>
<p className="text-sm text-slate-300 line-clamp-2">拥有丰富的减摇装置研制经验，集自主设计、制造、服务为一体。</p>
</div>
<div className="absolute bottom-6 right-6 text-white opacity-60">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="group relative h-72 w-full overflow-hidden rounded-2xl">
<img alt="Hydraulics" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-2">衡拓液压</h3>
</div>
<div className="absolute bottom-6 right-6 text-white opacity-60">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="group relative h-72 w-full overflow-hidden rounded-2xl">
<img alt="Precision" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium text-white mb-2">衡拓精密</h3>
</div>
<div className="absolute bottom-6 right-6 text-white opacity-60">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-blue-50/50">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-10">
            更专业、更智能、<br/>
<span className="text-blue-600">更可靠</span>
</h2>
<div className="grid grid-cols-1 gap-8">

<div className="flex gap-4">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="anchor"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">全产业链一体化能力</h3>
<p className="text-slate-500 leading-relaxed text-base">国内唯一集自主设计、制造、服务于一体的...</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">智能化升级</h3>
<p className="text-slate-500 leading-relaxed text-base">推动减摇技术与电力推进、折耗驱动力融合。</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">国际化布局</h3>
<p className="text-slate-500 leading-relaxed text-base">技术对标深海，国际市场认可度高。</p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 mt-1">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 mb-1">国际权威认证</h3>
<p className="text-slate-500 leading-relaxed text-base">质量可靠性全球领先，提升船舶综合性能。</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">

<svg className="w-full text-blue-200" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 400 120">
<path d="M20 80 Q 80 100 200 100 T 380 80 L 360 40 L 40 40 Z"></path>
<path d="M60 40 L 80 20 L 160 20 L 180 40"></path>
<line stroke-dasharray="10 5" stroke-opacity="0.5" x1="20" x2="380" y1="90" y2="90"></line>
</svg>
<button className="absolute self-end mt-20 flex items-center gap-2 text-blue-600 font-medium">
                探索我们的创新技术 <i className="w-5 h-5" data-lucide="arrow-right-circle"></i>
</button>
</div>
</section>

<section className="bg-white">

<div className="relative h-96 w-full">
<img alt="Icebreaker" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/60"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="mb-auto text-right border-b border-white/20 pb-4 pt-8">
<span className="block text-6xl font-medium text-white tracking-tighter">88%</span>
<span className="text-slate-300 text-sm">减摇效率达</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">“雪龙 2”极地破冰船</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-4">
                    国际化战略实施重要里程碑！减摇鳍+减摇水舱+升降系统“组合方案”。
                </p>
<button className="flex items-center gap-2 text-white text-sm font-medium opacity-80">
                    了解更多 <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative h-96 w-full mt-1">
<img alt="Research Ship" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-slate-900/60"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<div className="mb-auto text-right border-b border-white/20 pb-4 pt-8">
<span className="block text-6xl font-medium text-white tracking-tighter">86%</span>
<span className="text-slate-300 text-sm">减摇效率达</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">“探索二号”考察船</h3>
<p className="text-slate-300 text-sm leading-relaxed mb-4">
                    以全产业链能力为根基，通过技术创新与场景化解决方案。
                </p>
<button className="flex items-center gap-2 text-white text-sm font-medium opacity-80">
                    了解更多 <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-10">我们从未停止探索</h2>
<div className="flex flex-col gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-xl aspect-video mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-3 left-3 bg-blue-600/90 backdrop-blur px-3 py-1 rounded text-white text-xs font-medium">公司新闻</div>
</div>
<h3 className="text-lg font-medium text-slate-900 leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    国际化战略实施重要里程碑！衡拓船舶通过法国船级社工厂认证
                </h3>
<p className="text-slate-400 text-sm">2024-09-22</p>
<a className="inline-block mt-3 text-blue-600 text-sm font-medium" href="#">了解详情 ↗</a>
</div>

<div className="border-t border-slate-100 pt-6">
<div className="flex items-center gap-3 mb-2">
<span className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-0.5 rounded">行业动态</span>
<span className="text-slate-400 text-xs">2024-09-15</span>
</div>
<h3 className="text-base font-medium text-slate-800 line-clamp-2 mb-2">
                    智能航海系统更新：提升远洋作业效率的关键技术突破
                </h3>
</div>

<div className="border-t border-slate-100 pt-6">
<div className="flex items-center gap-3 mb-2">
<span className="text-blue-600 text-xs font-medium bg-blue-50 px-2 py-0.5 rounded">签约快讯</span>
<span className="text-slate-400 text-xs">2024-08-30</span>
</div>
<h3 className="text-base font-medium text-slate-800 line-clamp-2 mb-2">
                    衡拓科技与大型船企签署战略合作协议，共建深蓝未来
                </h3>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors">
                全部新闻 <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="py-12 px-6 bg-slate-50">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">想要了解更多？</h2>
<div className="grid grid-cols-1 gap-6">

<div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm min-h-[280px] flex flex-col justify-between">
<img alt="Building" className="absolute right-0 bottom-0 w-32 h-32 object-cover opacity-80 rounded-tl-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-xl font-medium text-slate-900 leading-snug mb-4">向用户提供先进适用的<br/>船舶机电产品</h3>
</div>
<button className="self-start flex items-center gap-2 text-sm bg-slate-100 px-4 py-2 rounded-full text-slate-700 font-medium">
                    了解衡拓 <i className="w-4 h-4 text-blue-500" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-6 shadow-sm min-h-[200px] flex flex-col justify-center text-center">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<h3 className="relative z-10 text-xl font-medium text-white mb-2">加入我们的团队，塑造<br/>智能化的未来</h3>
<div className="relative z-10 text-5xl font-semibold text-white mt-4">1000+</div>
<p className="relative z-10 text-slate-400 text-xs uppercase tracking-widest mt-1">专业技术研发人才</p>
<button className="relative z-10 mx-auto mt-6 flex items-center gap-2 text-sm bg-white/10 backdrop-blur px-4 py-2 rounded-full text-white font-medium border border-white/20">
                    加入我们 <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="rounded-2xl bg-blue-600 p-6 shadow-sm text-white flex flex-col justify-between h-[200px]">
<div>
<h3 className="text-xl font-medium leading-snug">衡拓，与世界共享<br/>中国智造的力量</h3>
</div>
<div className="text-right">
<div className="text-5xl font-semibold">64+</div>
<div className="text-blue-200 text-xs">服务船舶企业</div>
</div>
</div>

<div className="rounded-2xl bg-slate-100 p-6 flex items-center justify-between">
<h3 className="text-lg font-medium text-slate-900">在世界各地与<br/>我们联系</h3>
<button className="flex items-center gap-2 text-sm bg-white px-4 py-2 rounded-full text-slate-700 font-medium shadow-sm">
                    联系我们 <i className="w-4 h-4 text-blue-500" data-lucide="message-circle"></i>
</button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 px-6">
<div className="flex items-center gap-2 text-white mb-10">
<div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
<span className="text-black font-bold text-sm">H</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-medium tracking-tight">衡拓科技</span>
<span className="text-xs tracking-widest opacity-80 uppercase">Hunter</span>
</div>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-10 mb-12">
<div>
<h4 className="text-white text-sm font-medium mb-4">业务领域</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">动力系统集成</a></li>
<li><a className="hover:text-white transition-colors" href="#">智能系统集成</a></li>
<li><a className="hover:text-white transition-colors" href="#">船舶装置</a></li>
<li><a className="hover:text-white transition-colors" href="#">热能环保</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">关于我们</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">公司概况</a></li>
<li><a className="hover:text-white transition-colors" href="#">可持续发展</a></li>
<li><a className="hover:text-white transition-colors" href="#">加入我们</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">服务支持</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">服务体系</a></li>
<li><a className="hover:text-white transition-colors" href="#">资料下载</a></li>
<li><a className="hover:text-white transition-colors" href="#">常见问题</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">关注我们</h4>
<div className="flex gap-4">
<a className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5 text-white" data-lucide="wechat"></i> 
</a>
<a className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" href="#">
<i className="w-5 h-5 text-white" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col gap-4 text-xs">
<p>COPYRIGHT 2025 HUNTER CO., LTD.</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">网站地图</a>
<a className="hover:text-white" href="#">法律声明</a>
<a className="hover:text-white" href="#">隐私政策</a>
</div>
</div>
</footer>


    </>
  );
}
