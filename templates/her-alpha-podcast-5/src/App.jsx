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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tighter text-lg hover:opacity-80 transition-opacity" href="#">
                HER ALPHA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#about">关于我们</a>
<a className="hover:text-zinc-100 transition-colors" href="#episodes">往期节目</a>
<a className="hover:text-zinc-100 transition-colors" href="#subscribe">订阅</a>
</div>
<div className="flex items-center gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18"></span>
</a>
<button className="md:hidden text-zinc-100">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide">每周更新 · 投资与科技</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-zinc-100 tracking-tight leading-[1.1] mb-6">
                Her Alpha <span className="text-zinc-600 font-light">|</span> <span className="text-gradient">超额姐妹</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                聊投资、聊科技、聊如何用 AI 让自己更值钱。<br className="hidden md:block"/>
                在嘈杂的市场里，找到属于自己的投资节奏。
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-zinc-100 text-zinc-900 hover:bg-white rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="16"></span>
                    立即收听
                </button>
<button className="w-full sm:w-auto px-6 py-3 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200 bg-zinc-900/30 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:podcast" data-strokeWidth="1.5" data-width="16"></span>
                    Apple Podcast
                </button>
</div>
</div>
</header>

<section className="py-20 border-t border-zinc-900" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-6">关于主播</h2>
<div className="space-y-8">
<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-indigo-900/30 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<span className="iconify" data-icon="lucide:gem" data-width="14"></span>
</div>
<h3 className="text-zinc-200 font-medium">VC 投资人</h3>
</div>
<p className="text-sm leading-relaxed pl-11">
                                前美元 VC 投资人，深耕硬科技项目多年，擅长从资本视角拆解商业模式。
                            </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-rose-900/30 flex items-center justify-center border border-rose-500/20 text-rose-400">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span>
</div>
<h3 className="text-zinc-200 font-medium">AI 产品经理</h3>
</div>
<p className="text-sm leading-relaxed pl-11">
                                一人公司践行者，真实体验 AI 如何放大个体生产力，正在构建自己的数字资产。
                            </p>
</div>
</div>
</div>
<div>
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-6">为什么做这档节目？</h2>
<div className="prose prose-invert prose-sm text-zinc-400 font-light">
<p className="mb-4">
                            我们在科技行业待了好几年，看过很多硬科技项目，也真实体验到 AI 怎么把一个人的生产力放大好几倍。
                        </p>
<p className="mb-4">
                            但我们发现，在科技和投资的圈子里，女生的声音太少了，或者总被贴上某种标签。我们想找到那些不甘于现状、想突破自己的姐妹们。
                        </p>
<p>
                            用自己的视角和经验，聊点真实的、有用的东西。探索财务自由和精神独立的可能性。
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/20 border-y border-zinc-900">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-lg font-medium text-zinc-200 mb-10 flex items-center gap-2">
<span className="iconify text-indigo-500" data-icon="lucide:sparkles" data-width="16"></span>
                在这里，我们会聊...
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
<span className="iconify text-zinc-100 mb-4" data-icon="lucide:globe-2" data-strokeWidth="1.5" data-width="20"></span>
<h3 className="text-zinc-200 text-sm font-medium mb-2">全球科技前沿</h3>
<p className="text-xs text-zinc-500 leading-relaxed">拆解全球有意思的科技公司和商业模式，不仅仅是看热闹。</p>
</div>

<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
<span className="iconify text-zinc-100 mb-4" data-icon="lucide:trending-up" data-strokeWidth="1.5" data-width="20"></span>
<h3 className="text-zinc-200 text-sm font-medium mb-2">投资机会</h3>
<p className="text-xs text-zinc-500 leading-relaxed">分享我们觉得有意思的美股、Crypto 及新兴市场投资机会。</p>
</div>

<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
<span className="iconify text-zinc-100 mb-4" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20"></span>
<h3 className="text-zinc-200 text-sm font-medium mb-2">AI 与一人公司</h3>
<p className="text-xs text-zinc-500 leading-relaxed">分享一人公司怎么玩，实用的 AI 工具与工作流，放大你的杠杆。</p>
</div>

<div className="p-6 rounded-lg border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
<span className="iconify text-zinc-100 mb-4" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="20"></span>
<h3 className="text-zinc-200 text-sm font-medium mb-2">女性视角</h3>
<p className="text-xs text-zinc-500 leading-relaxed">聊聊作为女生做投资的真实感受，打破刻板印象。</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="episodes">
<div className="max-w-3xl mx-auto">
<div className="flex items-end justify-between mb-10 border-b border-zinc-800 pb-4">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight">最新单集</h2>
<a className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors" href="#">
                    查看全部 <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="space-y-4">

<article className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
<span>Vol. 03</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>54 min</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>AI Tools</span>
</div>
<h3 className="text-lg font-medium text-zinc-200 group-hover:text-white mb-2 transition-colors">
                            不上班的这一年：如何利用 AI 打造一人公司，实现超级个体？
                        </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                            离开大厂后，我如何利用 ChatGPT、Midjourney 和各类 Automation 工具重构工作流。普通人如何找到自己的生态位？
                        </p>
</div>
</article>

<article className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
<span>Vol. 02</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>48 min</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Investment</span>
</div>
<h3 className="text-lg font-medium text-zinc-200 group-hover:text-white mb-2 transition-colors">
                            VC 视角的 2024 美股观察：硬科技还有哪些 Alpha 机会？
                        </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                            回顾过去一年的市场波动，为什么我们仍然看好 AI 基础设施？从英伟达的财报里，我们能读出什么信号？
                        </p>
</div>
</article>

<article className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all cursor-pointer">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:bg-zinc-700 transition-colors">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-1">
<div className="flex items-center gap-3 text-xs text-zinc-500 mb-2">
<span>Vol. 01</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>62 min</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Female Growth</span>
</div>
<h3 className="text-lg font-medium text-zinc-200 group-hover:text-white mb-2 transition-colors">
                            不仅仅是标签：女性投资人的搞钱哲学与真实困境
                        </h3>
<p className="text-sm text-zinc-500 line-clamp-2">
                            在这个男性主导的行业里，我们如何保持清醒？聊聊我们的职业选择、金钱观以及如何克服“冒充者综合症”。
                        </p>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" id="subscribe">
<div className="max-w-xl mx-auto px-6 text-center">
<span className="iconify text-zinc-500 mx-auto mb-6" data-icon="lucide:mail" data-strokeWidth="1.2" data-width="32"></span>
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-4">加入超额姐妹社区</h2>
<p className="text-zinc-400 font-light mb-8">
                获取每周独家投资笔记、AI 工具推荐清单，以及听友社群入口。
            </p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-zinc-900 border border-zinc-800 text-zinc-200 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all text-sm placeholder-zinc-600" placeholder="输入你的邮箱..." type="email"/>
<button className="px-6 py-3 bg-zinc-100 text-zinc-900 font-medium text-sm rounded-md hover:bg-white transition-colors" type="button">
                    订阅更新
                </button>
</form>
<p className="text-xs text-zinc-600 mt-4">
                我们承诺不发送垃圾邮件。随时可以取消订阅。
            </p>
</div>
</section>

<footer className="py-12 border-t border-zinc-900">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-sm font-medium text-zinc-300 mb-2">Her Alpha | 超额姐妹</p>
<p className="text-xs text-zinc-600">© 2024 All rights reserved.</p>
</div>

<div className="flex flex-wrap justify-center gap-2">
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">全球科技</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">美股投资</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">AI工具</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">一人公司</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">Crypto</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-500 uppercase tracking-wider">女性成长</span>
</div>
</div>
</footer>

    </>
  );
}
