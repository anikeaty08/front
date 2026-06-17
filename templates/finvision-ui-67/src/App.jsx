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



  // Initialize Lucide icons
  lucide.createIcons();
  
  // Add smooth scrolling and enhanced interactions
  document.addEventListener('DOMContentLoaded', function() {
    // Smooth reveal animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="animate-"]').forEach(el => {
      observer.observe(el);
    });

    // Enhanced hover effects for glass cards
    document.querySelectorAll('.glass-card').forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Add dynamic typing effect for search placeholder
    const searchInput = document.querySelector('input[placeholder*="搜索"]');
    if (searchInput) {
      const phrases = [
        '搜索交易记录、客户档案、报表...',
        '查询今日大额转账记录...',
        '搜索风险预警信息...',
        '查找各分行月度业绩...'
      ];
      let currentPhrase = 0;
      
      setInterval(() => {
        currentPhrase = (currentPhrase + 1) % phrases.length;
        searchInput.placeholder = phrases[currentPhrase];
      }, 3000);
    }

    // Add pulse effect to active indicators
    document.querySelectorAll('[class*="animate-pulse"]').forEach(el => {
      setInterval(() => {
        el.style.opacity = '0.4';
        setTimeout(() => el.style.opacity = '1', 500);
      }, 2000);
    });
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
      

<div className="fixed inset-0 -z-20">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/60 to-gray-800/70"></div>
<div className="w-full h-full opacity-30 blur-sm">
<iframe frameborder="0" height="100%" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe>
</div>
</div>

<div className="fixed inset-0 -z-10 ambient-orbs pointer-events-none"></div>

<div className="flex flex-wrap justify-center gap-3 pt-8 px-4 text-sm font-medium animate-fade-in" style={{animationDelay: '0.1s', animationPlayState: 'running'}}>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">资产监控</span>
<span className="px-5 py-2.5 rounded-full backdrop-blur-sm border border-blue-500/30 bg-blue-600/20 text-blue-200 font-medium hover:scale-105 hover:bg-blue-600/30 transition-all duration-300">AI 风控智脑</span>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">跨境结算</span>
<span className="px-5 py-2.5 rounded-full backdrop-blur-sm border border-purple-500/30 bg-purple-600/20 text-purple-200 font-medium hover:scale-105 hover:bg-purple-600/30 transition-all duration-300">数据合规</span>
<span className="px-5 py-2.5 rounded-full glass-card font-medium hover:scale-105 transition-transform duration-300">实时大屏</span>
</div>

<div className="flex-1 flex animate-blur-in px-4 sm:px-6 pb-16 pt-12 items-start justify-center relative" style={{animationDelay: '0.3s', animationPlayState: 'running'}}>
<div className="relative w-full max-w-7xl mt-8 glass-container rounded-3xl flex flex-col overflow-hidden shadow-2xl">

<div className="glass-chrome flex items-center justify-between h-16 px-6 relative z-10">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2.5">
<span className="w-4 h-4 rounded-full bg-red-500/90 shadow-md hover:bg-red-400 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
<span className="w-4 h-4 rounded-full bg-yellow-400/90 shadow-md hover:bg-yellow-300 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
<span className="w-4 h-4 rounded-full bg-green-500/90 shadow-md hover:bg-green-400 transition-colors cursor-pointer hover:scale-110 transform duration-200"></span>
</div>
<div className="flex items-center gap-1 ml-6">
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-rotate-cw w-5 h-5" data-lucide="rotate-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path></svg>
</button>
</div>
</div>
<div className="flex-1 mx-8 max-w-lg">
<div className="glass-input flex items-center gap-3 rounded-xl px-4 py-3 text-sm group">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="flex-1 truncate font-medium text-white">secure.bank-analytics.internal</span>
<div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
</div>
</div>
<div className="flex items-center gap-2 text-gray-400">
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-bookmark w-5 h-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-share w-5 h-5" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
<button className="rounded-lg p-2.5 transition-all duration-200 hover:text-white hover:bg-white/10 hover:scale-105">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-1 min-h-0 relative">

<div className="glass-sidebar w-80 lg:w-96 flex flex-col relative z-10 animate-slide-left" style={{animationDelay: '0.5s', animationPlayState: 'running'}}>

<div className="p-6 border-b border-white/5">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<div className="icon-container p-3 rounded-xl">
<svg className="lucide lucide-landmark w-7 h-7 text-blue-300" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
</div>
<div>
<h1 className="text-xl font-bold text-white">智汇金融云</h1>
<p className="text-sm text-gray-400">企业级数据中台</p>
</div>
</div>
<button className="icon-container p-2.5 rounded-lg transition-all duration-200 hover:scale-105">
<div className="relative">
<svg className="lucide lucide-bell w-4 h-4 text-gray-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
</div>
</button>
</div>

<div className="glass-input flex items-center gap-3 rounded-xl px-4 py-3 text-sm group">
<svg className="lucide lucide-search w-4 h-4 text-gray-400 group-focus-within:text-blue-300 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400" placeholder="搜索交易记录、客户档案、报表..." type="text"/>
<span className="text-xs text-gray-500 font-mono">⌘K</span>
</div>
</div>

<div className="flex-1 p-4 space-y-3 overflow-y-auto">
<div className="mb-8">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">仪表盘</h3>
<nav className="space-y-1.5">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-blue-500/15 border border-blue-500/20 text-blue-200 transition-all duration-200 hover:bg-blue-500/25 group" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">核心概览</span>
<div className="ml-auto w-2 h-2 rounded-full bg-blue-400"></div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-pie-chart w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
<span className="font-medium">交易分析</span>
<span className="ml-auto text-xs bg-gray-600/50 text-gray-300 px-2 py-1 rounded-md font-mono">Live</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">客户画像</span>
<div className="ml-auto flex -space-x-1.5">
<div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-gray-800"></div>
<div className="w-5 h-5 rounded-full bg-purple-500 border-2 border-gray-800"></div>
</div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-file-bar-chart w-5 h-5" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18h8"></path><path d="M8 14h8"></path><path d="M8 10h4"></path></svg>
<span className="font-medium">监管报表</span>
<span className="ml-auto w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" style={{animationPlayState: 'running'}}></span>
</a>
</nav>
</div>
<div className="mb-8">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">工具箱</h3>
<nav className="space-y-1.5">
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-alert-triangle w-5 h-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium">风险预警</span>
<span className="ml-auto text-xs bg-red-500/80 text-white px-2 py-1 rounded-full font-mono">3</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-medium">合规中心</span>
<span className="ml-auto text-xs text-gray-500 font-mono">Updated</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-bot w-5 h-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="font-medium">智能投顾</span>
<div className="ml-auto w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
</a>
<a className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/8 transition-all duration-200 group" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-medium">系统配置</span>
</a>
</nav>
</div>

<div className="mb-6">
<h3 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4 px-3">实时动态</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-green-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">大额跨境转账审批通过</p>
<p className="text-xs text-gray-500 mt-0.5">3分钟前 • ID: 88291</p>
</div>
</div>
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-red-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">检测到异常异地登录</p>
<p className="text-xs text-gray-500 mt-0.5">18分钟前 • 风险等级: 高</p>
</div>
</div>
<div className="flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
<div className="flex-1 min-w-0">
<p className="text-sm text-gray-200 truncate">季度财务报表已生成</p>
<p className="text-xs text-gray-500 mt-0.5">1小时前 • 自动归档</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-4 p-4 rounded-xl glass-card hover:bg-white/8 transition-all duration-200 cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
<span className="text-white font-semibold text-lg">陈</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-semibold text-white">陈总监</p>
<p className="text-sm text-gray-400 truncate">chen.director@bank.com</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-h-0 relative animate-slide-right" style={{animationDelay: '0.7s', animationPlayState: 'running'}}>

<div className="p-8 border-b border-white/5">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
<div>
<h2 className="text-3xl font-bold text-white mb-2 tracking-tight">下午好，陈总监</h2>
<p className="text-gray-400 text-lg">全行核心业务数据实时监控与分析概览。</p>
</div>
<div className="flex items-center gap-4">
<button className="glass-card px-6 py-3 rounded-xl font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 flex items-center gap-2">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                导出报表
              </button>
<button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-medium text-white hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                新建审计
              </button>
</div>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 animate-slide-up" style={{animationDelay: '0.9s', animationPlayState: 'running'}}>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-coins w-6 h-6 text-blue-400" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+18.2%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">¥8,420亿</h3>
<p className="text-gray-400">总管理资产规模</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-activity w-6 h-6 text-purple-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+7.4%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">847万</h3>
<p className="text-gray-400">今日交易笔数</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-trending-up w-6 h-6 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">+1.2%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">14.7%</h3>
<p className="text-gray-400">净资本收益率 (ROE)</p>
</div>
<div className="glass-card p-6 rounded-2xl group">
<div className="flex items-center justify-between mb-4">
<div className="icon-container p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-alert w-6 h-6 text-orange-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<span className="text-sm text-green-400 font-semibold">99.9%</span>
</div>
<h3 className="text-3xl font-bold text-white mb-1">99.9%</h3>
<p className="text-gray-400">风险拦截成功率</p>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 animate-slide-up" style={{animationDelay: '1.1s', animationPlayState: 'running'}}>

<div className="glass-card p-8 rounded-2xl" style={{transform: 'translateY(-8px) scale(1.02)'}}>
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold text-white">重点业务监控</h3>
<button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 hover:scale-105 transition-all duration-200">
                  查看全部
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div><div className="space-y-6">
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: 'translateY(-8px) scale(1.02)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
<svg className="lucide lucide-credit-card w-6 h-6 text-white" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">零售信贷业务</h4>
<p className="text-sm text-gray-400">个人消费贷 • 信用卡分期</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full font-medium">季度目标超额</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-gray-800"></div>
<div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-gray-800"></div>
<div className="w-7 h-7 rounded-full bg-pink-500 border-2 border-gray-800"></div>
</div>
<span className="text-sm text-gray-400">同比增长 12%</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: 'translateY(0px) scale(1)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
<svg className="lucide lucide-globe w-6 h-6 text-white" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">跨境支付结算</h4>
<p className="text-sm text-gray-400">SWIFT 报文 • 外汇实时汇率</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full font-medium">处理中</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="w-full bg-gray-700/50 rounded-full h-2 mr-4">
<div className="bg-gradient-to-r from-orange-500 to-red-600 h-2 rounded-full" style={{width: '88%'}}></div>
</div>
<span className="text-sm text-gray-400 whitespace-nowrap">88%</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl group cursor-pointer" style={{transform: 'translateY(0px) scale(1)'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-white" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">不良贷款率 (NPL)</h4>
<p className="text-sm text-gray-400">风险控制 • 资产质量</p>
</div>
</div>
<div className="text-right">
<span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full font-medium">优于同业</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-7 h-7 bg-emerald-500 border-gray-50 border-2 rounded-full"></div>
<div className="w-7 h-7 bg-teal-500 border-gray-50 border-2 rounded-full"></div>
</div>
<span className="text-sm text-gray-400">0.82%</span>
</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-bold text-white">资金流向监控</h3>
<button className="glass-card px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:scale-105 transition-all duration-200">
                  查看详情
                </button>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">企</span>
</div>
<div>
<p className="text-white font-medium">A类企业大额入账</p>
<p className="text-sm text-gray-400">来自: 科技有限公司 (CN)</p>
</div>
</div>
<span className="text-xs text-green-400 font-mono">+ ¥5,000,000</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">风</span>
</div>
<div>
<p className="text-white font-medium">风控系统拦截</p>
<p className="text-sm text-gray-400">原因: 疑似洗钱风险特征</p>
</div>
</div>
<span className="text-xs text-red-400 font-mono">已冻结</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">理</span>
</div>
<div>
<p className="text-white font-medium">理财产品赎回</p>
<p className="text-sm text-gray-400">产品代码: LC-99281</p>
</div>
</div>
<span className="text-xs text-gray-400 font-mono">- ¥200,000</span>
</div>
<div className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">贷</span>
</div>
<div>
<p className="text-white font-medium">企业贷款发放</p>
<p className="text-sm text-gray-400">普惠金融专项资金</p>
</div>
</div>
<span className="text-xs text-gray-400 font-mono">- ¥1,500,000</span>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/5">
<h4 className="text-lg font-semibold text-white mb-4">快捷操作</h4>
<div className="grid grid-cols-2 gap-3">
<button className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-200 text-center group">
<svg className="lucide lucide-file-check w-6 h-6 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">生成审计报告</span>
</button>
<button className="glass-card p-4 rounded-xl hover:scale-105 transition-all duration-200 text-center group">
<svg className="lucide lucide-upload-cloud w-6 h-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m16 16-4-4-4 4"></path></svg>
<span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">数据上链</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 glass-card p-8 rounded-2xl animate-slide-up" style={{animationDelay: '1.3s', animationPlayState: 'running'}}>
<div className="flex items-center gap-4 mb-6">
<div className="icon-container p-3 rounded-xl">
<svg className="lucide lucide-sparkles w-8 h-8 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<div>
<h3 className="text-2xl font-bold text-white">智汇金融助手 (AI)</h3>
<p className="text-gray-400">基于大语言模型的智能投资分析与风险预测</p>
</div>
<div className="ml-auto flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></div>
<span className="text-sm text-green-400 font-medium">运行中</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-line-chart w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2">市场趋势预测</h4>
<p className="text-gray-400 text-sm">基于宏观经济数据的下季度走势分析</p>
</div>
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-search-check w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="search-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 11 2 2 4-4"></path><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2">智能合规审计</h4>
<p className="text-gray-400 text-sm">自动扫描异常交易并生成合规性报告</p>
</div>
<div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-200 cursor-pointer group">
<svg className="lucide lucide-users-2 w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 19a6 6 0 0 0-12 0"></path><circle cx="8" cy="9" r="4"></circle><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2">客户流失预警</h4>
<p className="text-gray-400 text-sm">分析用户行为特征，提前发现流失风险</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
