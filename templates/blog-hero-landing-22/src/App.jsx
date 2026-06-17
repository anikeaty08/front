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
      

<div className="bg-white w-full max-w-6xl h-full max-h-[90vh] rounded-2xl shadow-sm border border-neutral-200 overflow-hidden relative flex flex-col">

<header className="w-full px-8 py-6 flex justify-between items-center border-b border-neutral-100 flex-shrink-0">

<nav className="flex items-center space-x-2 text-xs text-neutral-500">
<a className="hover:text-blue-500 transition-colors duration-200" href="#">HOME</a>
<iconify-icon className="text-neutral-400" height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-neutral-800 font-medium">ブログ</span>
</nav>

<div className="hidden sm:flex items-center space-x-4">
<button className="text-neutral-400 hover:text-blue-500 transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto hide-scrollbar w-full relative">
<div className="flex flex-col items-center justify-start pt-16 pb-12 px-6 sm:px-12 text-center z-10 relative">

<h1 aria-label="BLOG &amp; NEWS" className="text-4xl sm:text-5xl font-light tracking-tight text-neutral-900 mb-6">
<span className="animate-word" style={{animationDelay: '0s'}}>BLOG</span>
<span className="animate-word" style={{animationDelay: '0.1s'}}>&amp;</span>
<span className="animate-word" style={{animationDelay: '0.2s'}}>NEWS</span>
</h1>

<p className="text-xl sm:text-2xl font-light tracking-tight text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10">
                    REGLOS Co., Ltd.の最新情報や、<br className="hidden sm:block"/>業界のトピックをお届けします。
                </p>

<div className="w-full flex flex-wrap justify-center gap-3 mb-16">

<button className="group relative px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium tracking-tight shadow-sm hover:bg-blue-600 transition-all duration-200">
<span>全ての記事</span>
</button>

<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium tracking-tight hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                        ニュース
                    </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium tracking-tight hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                        ブログ
                    </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium tracking-tight hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                        プレスリリース
                    </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium tracking-tight hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                        人材教育
                    </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium tracking-tight hover:border-blue-500 hover:text-blue-500 transition-colors duration-200">
                        WEBマーケティング
                    </button>
</div>

<div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

<article className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-neutral-100 cursor-pointer text-left">
<div className="w-full h-48 bg-neutral-100 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-blue-500 tracking-wide bg-blue-50 px-2 py-0.5 rounded">NEWS</span>
<span className="text-xs text-neutral-400 font-light tabular-nums tracking-wide">2024.02.05</span>
</div>
<h3 className="text-base font-medium text-neutral-800 leading-snug tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                オフィス移転のお知らせと、新しい働き方への取り組みについて
                            </h3>
<p className="text-xs text-neutral-400 line-clamp-2 mt-auto leading-relaxed">
                                この度、業務拡大に伴いオフィスを移転いたしました。新しい環境でのスタートを切るとともに...
                            </p>
</div>
</article>

<article className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-neutral-100 cursor-pointer text-left">
<div className="w-full h-48 bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:notebook-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-emerald-600 tracking-wide bg-emerald-50 px-2 py-0.5 rounded">BLOG</span>
<span className="text-xs text-neutral-400 font-light tabular-nums tracking-wide">2024.02.01</span>
</div>
<h3 className="text-base font-medium text-neutral-800 leading-snug tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                デジタル人材育成の現場から：効果的な研修プログラムの作り方
                            </h3>
<p className="text-xs text-neutral-400 line-clamp-2 mt-auto leading-relaxed">
                                変化の激しいIT業界において、継続的な学習と成長を促すための社内制度設計について解説します。
                            </p>
</div>
</article>

<article className="group flex flex-col bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-neutral-100 cursor-pointer text-left">
<div className="w-full h-48 bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:presentation-graph-linear" width="32"></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-amber-600 tracking-wide bg-amber-50 px-2 py-0.5 rounded">PRESS</span>
<span className="text-xs text-neutral-400 font-light tabular-nums tracking-wide">2024.01.28</span>
</div>
<h3 className="text-base font-medium text-neutral-800 leading-snug tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
                                新規WEBマーケティング支援サービスの提供開始
                            </h3>
<p className="text-xs text-neutral-400 line-clamp-2 mt-auto leading-relaxed">
                                中小企業向けの新しいデジタルマーケティングパッケージをリリースしました。
                            </p>
</div>
</article>
</div>
</div>

<div className="w-full flex justify-center pb-8 opacity-50">
<button className="flex items-center space-x-2 text-sm text-neutral-400 hover:text-blue-500 transition-colors">
<span>もっと表示する</span>
<iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</main>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-50"></div>
</div>

    </>
  );
}
