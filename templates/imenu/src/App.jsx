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
sans: ['"Noto Sans SC"', 'system-ui', 'sans-serif'],
serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
},
colors: {
primary: '#386641',
accent: '#F58529',
dark: '#2B2B2B',
light: '#FAF9F6',
secondary: '#6A4C93',
}
}
}
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-light/90 backdrop-blur-md border-b border-[#E8E8E8]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold font-serif shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">i</div>
<span className="text-xl font-semibold tracking-tight font-serif text-dark">iMeal</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="#products">核心方案</a>
<a className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="#science">科学原理</a>
<a className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="#ingredients">严选食材</a>
<a className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="#menu">全球菜单</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                        登录
                    </button>
<button className="bg-dark hover:bg-black text-white text-sm font-medium px-5 py-2 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 tracking-wide">
                        开始体验
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[32px] shadow-2xl shadow-neutral-200/60 border border-neutral-100 overflow-hidden">
<div className="grid lg:grid-cols-5 min-h-[680px]">

<div className="lg:col-span-2 p-8 md:p-12 lg:p-16 flex flex-col justify-center animate-fade-in relative z-10 bg-white">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 w-fit mb-6">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="text-xs font-semibold text-primary uppercase tracking-wider font-mono">B轮融资：东方智慧系列</span>
</div>

<h1 className="md:text-5xl lg:text-5xl leading-[1.2] text-dark text-4xl font-semibold tracking-tight font-serif mb-6" style={{}}>代谢精准化<br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-accent" style={{}}>味蕾新巅峰</span></h1>
<p className="text-base text-neutral-600 leading-relaxed max-w-lg mb-8 font-light">
                            从京都怀石料理到地中海饮食的精准复刻。我们将每一口食物量化为 <span className="font-mono font-medium text-primary">0-100</span> 的代谢评分 (Metabolic Score)，在优化生物机能的同时，绝不牺牲美味。
                        </p>

<div className="flex flex-col gap-4 mb-10">
<div className="flex items-center gap-3 group">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<span className="font-semibold text-sm block">CGM 动态血糖验证</span>
<span className="text-xs text-neutral-500">实时预测餐后葡萄糖反应。</span>
</div>
</div>
<div className="flex items-center gap-3 group">
<div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
<svg className="lucide lucide-flask-conical w-5 h-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<div>
<span className="font-semibold text-sm block">Adaptogenic 适应原成分</span>
<span className="text-xs text-neutral-500">融入人参、冬虫夏草与灵芝精华。</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-[#2E5535] transition-all hover:-translate-y-1 shadow-lg shadow-green-900/10 flex items-center gap-2 group tracking-wide">
                                查看当季菜单
                                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 rounded-full font-medium text-dark hover:bg-neutral-50 transition-colors border border-transparent hover:border-neutral-200">
                                了解原理
                            </button>
</div>
</div>

<div className="lg:col-span-3 relative h-full min-h-[400px] lg:min-h-auto bg-[#F7F7F7] overflow-hidden group flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-white to-[#F0F0F0]"></div>

<img alt="Precision Nutrition Bowl" className="relative z-10 w-[90%] md:w-[80%] h-auto object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105 hover:rotate-1 rounded-full" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-10 right-8 left-8 md:left-auto md:w-80 space-y-3 z-20">

<div className="glass-card p-4 rounded-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-2">
<div>
<p className="text-dark font-bold text-sm">增肌平衡波奇碗</p>
<p className="text-neutral-500 text-[10px] uppercase tracking-wide mt-1">精准宏量营养素</p>
</div>
<div className="bg-primary text-white px-2 py-1 rounded text-xs font-mono font-bold">98</div>
</div>
<div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden mt-1 mb-2">
<div className="h-full bg-primary w-[98%]"></div>
</div>
<div className="flex gap-2 mt-1">
<span className="text-[10px] bg-neutral-100 px-2 py-1 rounded text-neutral-700">低GI</span>
<span className="text-[10px] bg-neutral-100 px-2 py-1 rounded text-neutral-700">抗氧化</span>
</div>
</div>

<div className="glass-card p-3 rounded-2xl flex gap-3 items-center animate-fade-in" style={{animationDelay: '0.4s'}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-indigo-500 flex items-center justify-center text-white shrink-0">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<p className="text-xs text-dark font-medium leading-tight">
                                    "成分已扫描。建议搭配一杯温水以激活酶活性。"
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-8 font-sans">科研数据支持</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-lg font-bold font-serif flex items-center gap-2"><svg className="lucide lucide-landmark w-5 h-5" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg> 斯坦福医学院</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><svg className="lucide lucide-flask-conical w-5 h-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg> 京都大学</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><svg className="lucide lucide-dna w-5 h-5" data-lucide="dna" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 16 1.5 1.5"></path><path d="m14 8-1.5-1.5"></path><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"></path><path d="m16.5 10.5 1 1"></path><path d="m17 6-2.891-2.891"></path><path d="M2 15c6.667-6 13.333 0 20-6"></path><path d="m20 9 .891.891"></path><path d="M3.109 14.109 4 15"></path><path d="m6.5 12.5 1 1"></path><path d="m7 18 2.891 2.891"></path><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"></path></svg> 麻省理工媒体实验室</div>
<div className="text-lg font-bold font-serif flex items-center gap-2"><svg className="lucide lucide-heart-pulse w-5 h-5" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> 梅奥诊所</div>
</div>
</div>
</section>

<section className="py-24 bg-light" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold font-serif tracking-tight text-dark">个性化生物方案</h2>
<p className="mt-4 text-neutral-600">根据您的健康目标选择专属的代谢路径。</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"><svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100"><svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#88AB8E] to-[#AFC8AD]"></div>
<div className="mb-6 relative">
<div className="h-48 rounded-xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Asian Zen Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="bg-[#88AB8E]/10 text-[#2F4F4F] text-xs font-bold px-3 py-1 rounded-full font-mono uppercase backdrop-blur-sm border border-[#88AB8E]/20">全新系列</span>
</div>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-1">Zen 禅意方案</h3>
<p className="text-xs font-bold text-[#88AB8E] mb-3 uppercase tracking-wider font-mono">东方长寿饮食</p>
<p className="text-neutral-600 text-sm mb-6 flex-grow leading-relaxed">抗炎核心，采用亚洲超级食物（姜黄、生姜、抹茶）和清蒸优质蛋白。注重身心平衡。</p>
<ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-[#88AB8E]/20 flex items-center justify-center"><svg className="lucide lucide-leaf w-3 h-3 text-[#556B2F]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></div> 植物基 &amp; 深海鱼类
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-[#88AB8E]/20 flex items-center justify-center"><svg className="lucide lucide-wind w-3 h-3 text-[#556B2F]" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg></div> 肠道菌群优化
                        </li>
</ul>
<div className="mt-auto">
<p className="text-2xl font-bold text-dark font-mono">¥16,999<span className="text-sm font-normal text-neutral-500 font-sans"> / 8 周</span></p>
<button className="w-full mt-4 bg-[#2F4F4F] text-white py-3 rounded-xl font-medium hover:bg-[#1f3535] transition-colors shadow-lg shadow-[#2F4F4F]/20">选择 Zen</button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-[#FFB347]"></div>
<div className="mb-6 relative">
<div className="h-48 rounded-xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Balanced Meal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full font-mono uppercase backdrop-blur-sm border border-accent/20">最受欢迎</span>
</div>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-1">MetaBoot 代谢重置</h3>
<p className="text-xs font-bold text-accent mb-3 uppercase tracking-wider font-mono">极速燃脂</p>
<p className="text-neutral-600 text-sm mb-6 flex-grow leading-relaxed">经 CGM 数据验证的综合代谢重启方案。平衡血糖，消除饥饿感，提升精力。</p>
<ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><svg className="lucide lucide-activity w-3 h-3 text-accent" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div> 赠送 CGM 血糖传感器
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center"><svg className="lucide lucide-chef-hat w-3 h-3 text-accent" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg></div> 每日3餐精准配送
                        </li>
</ul>
<div className="mt-auto">
<p className="text-2xl font-bold text-dark font-mono">¥18,999<span className="text-sm font-normal text-neutral-500 font-sans"> / 12 周</span></p>
<button className="w-full mt-4 bg-accent text-white py-3 rounded-xl font-medium hover:bg-[#E0721B] transition-colors shadow-lg shadow-accent/20">开启重置</button>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-neutral-200 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden flex flex-col">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-[#B56576]"></div>
<div className="mb-6 relative">
<div className="h-48 rounded-xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Healing Soup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full font-mono uppercase backdrop-blur-sm border border-secondary/20">医疗级护理</span>
</div>
<h3 className="text-xl font-semibold font-serif tracking-tight mb-1">Recovery 术后修复</h3>
<p className="text-xs font-bold text-secondary mb-3 uppercase tracking-wider font-mono">滋补 &amp; 愈合</p>
<p className="text-neutral-600 text-sm mb-6 flex-grow leading-relaxed">传统药膳（骨汤、花胶、人参）结合精准的蛋白质滴定技术，加速身体修复。</p>
<ul className="space-y-3 mb-8 border-t border-neutral-100 pt-6">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center"><svg className="lucide lucide-heart-pulse w-3 h-3 text-secondary" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg></div> 从流食到固食分阶
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center"><svg className="lucide lucide-shield-plus w-3 h-3 text-secondary" data-lucide="shield-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg></div> 高胶原蛋白 &amp; 锌
                        </li>
</ul>
<div className="mt-auto">
<p className="text-2xl font-bold text-dark font-mono">¥2,999<span className="text-sm font-normal text-neutral-500 font-sans"> / 阶段</span></p>
<button className="w-full mt-4 bg-white border-2 border-secondary text-secondary py-3 rounded-xl font-medium hover:bg-secondary hover:text-white transition-colors">查看计划</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden relative" id="ingredients">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-2 block">产地溯源</span>
<h2 className="text-3xl md:text-4xl font-semibold font-serif tracking-tight text-dark mb-4">功能性食材</h2>
<p className="text-neutral-600">我们仅采购具有高生物利用率和酶活性的顶级食材。</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-neutral-100">
<img alt="Changbai Mountain Ginseng Root" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-bold text-lg font-serif">长白山人参</h3>
<p className="text-xs text-neutral-500">认知功能 &amp; 活力提升</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-neutral-100">
<img alt="Uji Matcha" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-bold text-lg font-serif">宇治抹茶</h3>
<p className="text-xs text-neutral-500">茶氨酸 &amp; 儿茶素</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-neutral-100">
<img alt="Wild Raw Salmon" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-bold text-lg font-serif">野生三文鱼</h3>
<p className="text-xs text-neutral-500">Omega-3 &amp; 虾青素</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-square rounded-2xl overflow-hidden mb-4 relative bg-neutral-100">
<img alt="Organic Turmeric" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-bold text-lg font-serif">有机鲜姜黄</h3>
<p className="text-xs text-neutral-500">姜黄素 &amp; 强效抗炎</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-light" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold font-serif tracking-tight text-dark">智慧精选</h2>
<p className="text-neutral-600 mt-2">东西方饮食文化的碰撞。扩展后的当季菜单。</p>
</div>

<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input checked="" className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none hover:bg-neutral-100">
                            全部
                        </div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none hover:bg-neutral-100">
                            中医食疗
                        </div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none hover:bg-neutral-100">
                            高蛋白
                        </div>
</label>
<label className="cursor-pointer">
<input className="custom-checkbox peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 text-sm font-medium text-neutral-600 peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary transition-all select-none hover:bg-neutral-100">
                            植物基
                        </div>
</label>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Cooked White Fish" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-primary font-mono">Score 98</span>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide">
                            日式融合
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">西京烧银鳕鱼</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">味噌发酵釉面提供天然益生菌。富含 Omega-3 脂肪酸，有益大脑健康。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥168</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-[#FFFAF0]">
<img alt="Steamed Salmon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-accent font-mono">Score 94</span>
</div>
<div className="absolute bottom-3 left-3 bg-accent/90 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide flex items-center gap-1">
<svg className="lucide lucide-flame w-3 h-3" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg> 减脂首选
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow relative">
<h4 className="font-semibold text-dark mb-1">低温慢煮三文鱼</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">搭配发酵羽衣甘蓝和藜麦。预计餐后血糖波动为零，极致控糖体验。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥145</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Broth" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-secondary font-mono">Score 99</span>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide">
                            RECOVERY
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">花旗参乌鸡精华</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">8小时隔水炖煮，加入枸杞与花旗参。富含极易吸收的胶原蛋白。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥188</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Green Noodles" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-primary font-mono">Score 92</span>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide">
                            植物基
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">京都宇治抹茶荞麦面</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">高儿茶素有机抹茶面，搭配枝豆与柚子醋乳液。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥95</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Steak" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-primary font-mono">Score 90</span>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide">
                            高蛋白
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">草饲菲力牛排</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">精选瘦肉部位，佐以烤根茎蔬菜和黑蒜泥。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥210</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Seared Scallops" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-secondary font-mono">Score 97</span>
</div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide">
                            TCM 凉性
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">清蒸北海道带子</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">搭配绿豆粉丝与金银蒜。富含锌元素。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥180</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-[#F3F4F6]">
<img alt="Mushroom Steak" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-primary font-mono">Score 93</span>
</div>
<div className="absolute bottom-3 left-3 bg-primary/90 backdrop-blur-sm px-2 py-1 rounded text-white text-[10px] font-medium tracking-wide flex items-center gap-1">
<svg className="lucide lucide-leaf w-3 h-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> 纯素 VEGAN
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow relative">
<h4 className="font-semibold text-dark mb-1">香煎猴头菇扒</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-neutral-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">富含适应原的猴头菇扒，有助于提升脑力认知。口感比拟菲力牛排。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥120</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
<img alt="Poke" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/95 backdrop-blur px-2 py-1 rounded-md shadow-sm border border-neutral-100">
<span className="text-xs font-bold text-accent font-mono">Score 95</span>
</div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h4 className="font-semibold text-dark mb-1">金枪鱼藜麦波奇饭</h4>
<div className="flex gap-1 mb-2">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-xs text-neutral-500 mb-4 line-clamp-2">生金枪鱼块搭配松软藜麦、牛油果和芝麻姜汁。</p>
<div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
<span className="font-bold text-dark font-mono">¥155</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 border border-neutral-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:shadow-md transition-all">
                    查看全部 42 道菜品 <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="science">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-primary font-mono text-xs font-bold uppercase tracking-widest mb-2 block">Bio-Index Technology</span>
<h2 className="text-3xl md:text-4xl font-semibold font-serif tracking-tight text-dark mb-4">透明的生物学机制</h2>
<p className="text-neutral-600 text-lg font-light">
                    我们不仅仅计算卡路里。Bio-Index 生物指数分析食物与您荷尔蒙的每一次“对话”。
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/50 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
<div className="absolute top-0 w-full h-1 bg-accent"></div>
<div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6">
<svg className="lucide lucide-activity w-8 h-8" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="font-bold text-xl text-dark mb-2 font-serif">血糖控制</h3>
<p className="text-sm text-neutral-500 mb-6">利用 CGM 数据，我们确保每一餐的血糖波动 (PPGR) 保持在最佳区间。</p>

<div className="w-full bg-neutral-50 rounded-xl p-4 border border-neutral-100 mt-auto">
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-neutral-400">Predicted Spike</span>
<span className="text-lg font-bold text-accent font-mono">&lt; 15mg/dL</span>
</div>
<div className="h-10 flex items-end gap-1 justify-between px-1">
<div className="w-full bg-accent/20 h-[20%] rounded-sm"></div>
<div className="w-full bg-accent/30 h-[30%] rounded-sm"></div>
<div className="w-full bg-accent/40 h-[25%] rounded-sm"></div>
<div className="w-full bg-accent/20 h-[20%] rounded-sm"></div>
<div className="w-full bg-accent/10 h-[15%] rounded-sm"></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/50 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden md:-mt-4 md:mb-4">
<div className="absolute top-0 w-full h-1 bg-primary"></div>
<div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
<svg className="lucide lucide-sprout w-10 h-10" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="font-bold text-xl text-dark mb-2 font-serif">营养密度 (ND Score)</h3>
<p className="text-sm text-neutral-500 mb-6">不仅仅是宏量营养素。我们追踪微量元素、植物化学物和酶活性。</p>

<div className="relative w-32 h-32 flex items-center justify-center mt-auto">
<svg className="w-full h-full transform -rotate-90">
<circle cx="64" cy="64" fill="none" r="60" stroke="#F0F0F0" strokeWidth="8"></circle>
<circle cx="64" cy="64" fill="none" r="60" stroke="#386641" stroke-dasharray="377" stroke-dashoffset="37" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-dark font-mono">94</span>
<span className="text-[10px] text-neutral-400 uppercase">Avg Score</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-xl shadow-neutral-200/50 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
<div className="absolute top-0 w-full h-1 bg-secondary"></div>
<div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6">
<svg className="lucide lucide-scale w-8 h-8" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<h3 className="font-bold text-xl text-dark mb-2 font-serif">TCM 阴阳平衡</h3>
<p className="text-sm text-neutral-500 mb-6">结合传统中医智慧，根据时令节气与个人体质调整食材属性。</p>
<div className="w-full mt-auto grid grid-cols-2 gap-3">
<div className="bg-neutral-50 rounded-lg p-3 text-left">
<div className="text-xs text-secondary font-bold mb-1">YIN 阴</div>
<div className="h-1 bg-secondary/20 rounded-full w-full"><div className="h-full w-[60%] bg-secondary"></div></div>
</div>
<div className="bg-neutral-50 rounded-lg p-3 text-left">
<div className="text-xs text-accent font-bold mb-1">YANG 阳</div>
<div className="h-1 bg-accent/20 rounded-full w-full"><div className="h-full w-[40%] bg-accent"></div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-bold font-serif text-center mb-12">用户见证</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-light rounded-3xl p-8 relative overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="flex gap-4 items-center mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
<img alt="Sarah" className="w-full h-full rounded-full object-cover border-2 border-light" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="font-bold text-dark font-serif">Sarah Wu</p>
<p className="text-xs text-neutral-500">创意总监 • Zen 用户</p>
</div>
</div>
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-sm text-dark leading-relaxed italic">
                        "‘Zen 禅意方案’彻底改变了我。我不仅吃到了从小熟悉的亚洲风味——比如花旗参鸡汤——而且优化了配方，饭后完全不会犯困。我的专注力现在极其敏锐。"
                    </blockquote>
</div>

<div className="bg-light rounded-3xl p-8 relative overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="flex gap-4 items-center mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-[#FFB347] p-0.5">
<img alt="David" className="w-full h-full rounded-full object-cover border-2 border-light" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="font-bold text-dark font-serif">David Chen</p>
<p className="text-xs text-neutral-500">科技公司 CEO • MetaBoot 用户</p>
</div>
</div>
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-sm text-dark leading-relaxed italic">
                        "作为创业者，我没有时间去思考每顿饭吃什么。iMeal 的数据驱动模式非常适合我。CGM 显示我的血糖曲线变得非常平稳，下午再也不需要喝咖啡提神了。"
                    </blockquote>
</div>

<div className="bg-light rounded-3xl p-8 relative overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
<div className="flex gap-4 items-center mb-6">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-[#B56576] p-0.5">
<img alt="Elena" className="w-full h-full rounded-full object-cover border-2 border-light" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<p className="font-bold text-dark font-serif">Elena Zhang</p>
<p className="text-xs text-neutral-500">马拉松运动员 • Recovery 用户</p>
</div>
</div>
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 text-accent fill-accent" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-sm text-dark leading-relaxed italic">
                        "高强度训练后的恢复期至关重要。iMeal 的 Recovery 计划非常专业，食物的生物利用率极高，我的肌肉酸痛感明显减少，这简直是运动员的福音。"
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 bg-light">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-primary rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-green-900/30">

<div className="absolute inset-0 opacity-20">
<img alt="Texture" className="w-full h-full object-cover mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold font-serif tracking-tight mb-6">Fuel Different. Feel Vibrant.</h2>
<p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">加入这场美味与生物学相遇的营养革命。</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg tracking-wide">
                            立即开始
                        </button>
<button className="bg-accent border border-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#E0721B] transition-colors flex items-center justify-center gap-2 tracking-wide">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                            咨询营养师
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-white py-16 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold font-serif">i</div>
<span className="text-lg font-bold font-serif">iMeal</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">未来的代谢操作系统。科学支持的精准营养，直接送达您的餐桌。</p>
</div>
<div>
<h4 className="font-bold mb-4 font-serif">核心方案</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-accent transition-colors" href="#">MetaBoot 代谢重置</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Zen 禅意系列</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 font-serif">科学技术</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-accent transition-colors" href="#">方法论</a></li>
<li><a className="hover:text-accent transition-colors" href="#">TCM 中医结合</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4 font-serif">订阅通讯</h4>
<p className="text-xs text-neutral-500 mb-4">订阅以获取最新营养科学更新。</p>
<div className="flex gap-2">
<input className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-accent text-white placeholder-neutral-500 outline-none" placeholder="电子邮箱地址" type="email"/>
<button className="bg-accent rounded-lg px-3 hover:bg-[#E0721B] transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4 text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
<p>© 2024 iMeal Science Ltd. 保留所有权利。</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40">
<button className="w-14 h-14 bg-[#1A1A1A] text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border border-neutral-700">
<svg className="lucide lucide-bot w-6 h-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</button>
</div>



    </>
  );
}
