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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-gray-100 w-full py-2 px-4 text-center">
<a className="text-xs font-medium text-gray-800 hover:text-gray-500 transition-colors" href="#">
            5,000円（税込）以上のご購入で送料無料・最短翌日お届け
        </a>
</div>

<header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<button className="md:hidden p-2 -ml-2 text-gray-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
<a className="font-semibold tracking-tighter text-xl uppercase" href="#">
                        patagonia
                    </a>
</div>

<nav className="hidden md:flex space-x-8 lg:space-x-12 ml-10">
<a className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors pb-1 border-b-2 border-transparent hover:border-gray-900" href="#">ショップ</a>
<a className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors pb-1 border-b-2 border-transparent hover:border-gray-900" href="#">アクティビティ</a>
<a className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors pb-1 border-b-2 border-transparent hover:border-gray-900" href="#">ストーリー</a>
<a className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors pb-1 border-b-2 border-transparent hover:border-gray-900" href="#">環境・社会</a>
</nav>

<div className="flex items-center justify-end space-x-4 md:space-x-6 flex-shrink-0">
<button className="text-gray-900 hover:text-gray-500 transition-colors flex items-center justify-center">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<a className="hidden md:flex text-gray-900 hover:text-gray-500 transition-colors items-center justify-center" href="#">
<iconify-icon height="22" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</a>
<a className="text-gray-900 hover:text-gray-500 transition-colors flex items-center justify-center relative" href="#">
<iconify-icon height="22" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-gray-900 text-white text-[10px] font-medium h-4 w-4 flex items-center justify-center rounded-full leading-none">0</span>
</a>
</div>
</div>
</div>
</header>
<main>

<section className="relative w-full h-[85vh] min-h-[600px] bg-gray-900 overflow-hidden">
<img alt="Mountain landscape" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end pb-20 px-4 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
<div className="max-w-2xl text-white">
<p className="text-sm md:text-base font-medium mb-4 tracking-wide">春のトレイル・コレクション</p>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
                        地球を走る。<br/>自然と呼吸する。
                    </h1>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors" href="#">
                            メンズを見る
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors" href="#">
                            ウィメンズを見る
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer">
<img alt="Climbing gear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&amp;w=2803&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">クライミング</h2>
<a className="inline-flex items-center text-sm font-medium text-white border-b border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors" href="#">
                            コレクションを見る
                            <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group relative block aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer">
<img alt="Surfing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">サーフィン</h2>
<a className="inline-flex items-center text-sm font-medium text-white border-b border-white pb-1 hover:text-gray-200 hover:border-gray-200 transition-colors" href="#">
                            コレクションを見る
                            <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-20 md:py-32">
<div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-8 leading-snug">
                    私たちは、故郷である地球を救うためにビジネスを営む。
                </h2>
<a className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" href="#">
                    私たちのコアバリュー
                </a>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">新着製品</h2>
<a className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors" href="#">すべて見る</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<a className="group block" href="#">
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
<img alt="Jacket" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 bg-white px-2 py-1 text-xs font-medium text-gray-900">New</div>
</div>
<div className="flex flex-col space-y-1">
<h3 className="text-sm font-medium text-gray-900 truncate">メンズ・トレントシェル3L・ジャケット</h3>
<p className="text-sm text-gray-500">¥ 25,300</p>
</div>
</a>

<a className="group block" href="#">
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
<img alt="Fleece" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col space-y-1">
<h3 className="text-sm font-medium text-gray-900 truncate">メンズ・クラシック・レトロX・ジャケット</h3>
<p className="text-sm text-gray-500">¥ 35,200</p>
</div>
</a>

<a className="group block hidden md:block" href="#">
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
<img alt="T-Shirt" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&amp;w=2809&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col space-y-1">
<h3 className="text-sm font-medium text-gray-900 truncate">メンズ・P-6ロゴ・レスポンシビリティー</h3>
<p className="text-sm text-gray-500">¥ 5,940</p>
</div>
</a>

<a className="group block hidden md:block" href="#">
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden relative">
<img alt="Shoes" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col space-y-1">
<h3 className="text-sm font-medium text-gray-900 truncate">ウィメンズ・バギーズ・ショーツ</h3>
<p className="text-sm text-gray-500">¥ 8,250</p>
</div>
</a>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 border-t border-gray-200">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="w-full lg:w-1/2 aspect-video lg:aspect-square bg-gray-100 overflow-hidden relative">
<img alt="Repairing clothes" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full lg:w-1/2 flex flex-col items-start max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">Worn Wear: 着古したウェアから新しい物語を</h2>
<p className="text-base text-gray-600 mb-8 leading-relaxed">
                        私たちがつくる最高の製品とは、すでに存在している製品です。製品を長く使い続け、修理し、そして使い終わったらリサイクルする。そうすることで、地球の資源を節約することができます。
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors" href="#">
                        修理について学ぶ
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-gray-950 text-gray-300 pt-16 pb-8 border-t border-gray-900">
<div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<h3 className="text-sm font-medium text-white mb-4">ニュースレターに登録</h3>
<p className="text-xs text-gray-400 mb-4">
                        新製品やセール情報、環境保護活動に関する最新情報をお届けします。
                    </p>
<form className="flex flex-col space-y-3">
<input className="w-full bg-transparent border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors rounded-none" placeholder="メールアドレス" type="email"/>
<button className="w-full bg-white text-gray-900 px-4 py-3 text-sm font-medium hover:bg-gray-200 transition-colors" type="submit">
                            登録する
                        </button>
</form>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-4">ショップ</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">メンズ</a></li>
<li><a className="hover:text-white transition-colors" href="#">ウィメンズ</a></li>
<li><a className="hover:text-white transition-colors" href="#">キッズ・ベビー</a></li>
<li><a className="hover:text-white transition-colors" href="#">パック・ギア</a></li>
<li><a className="hover:text-white transition-colors" href="#">プロビジョンズ（食品）</a></li>
<li><a className="hover:text-white transition-colors" href="#">ウェブアウトレット</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-4">カスタマーサービス</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">ヘルプセンター</a></li>
<li><a className="hover:text-white transition-colors" href="#">注文状況の確認</a></li>
<li><a className="hover:text-white transition-colors" href="#">返品・交換</a></li>
<li><a className="hover:text-white transition-colors" href="#">修理サービス</a></li>
<li><a className="hover:text-white transition-colors" href="#">サイズ表</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-4">企業情報</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">パタゴニアについて</a></li>
<li><a className="hover:text-white transition-colors" href="#">環境・社会への取り組み</a></li>
<li><a className="hover:text-white transition-colors" href="#">採用情報</a></li>
<li><a className="hover:text-white transition-colors" href="#">直営店一覧</a></li>
<li><a className="hover:text-white transition-colors" href="#">プロプログラム</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="flex items-center space-x-6 text-xs text-gray-500">
<a className="hover:text-white transition-colors" href="#">プライバシーポリシー</a>
<a className="hover:text-white transition-colors" href="#">利用規約</a>
<a className="hover:text-white transition-colors" href="#">特定商取引法に基づく表示</a>
</div>
<div className="text-xs text-gray-500 font-medium">
                    © 2024 Patagonia, Inc. All Rights Reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
