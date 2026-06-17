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
      

<header className="h-20 lg:h-24 sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200/60 flex items-center justify-between pl-4 md:pl-8 pr-0 transition-all">

<a className="flex items-center gap-3 group shrink-0" href="#">
<div className="relative w-10 h-10 flex items-center justify-center bg-stone-50 rounded-full border border-stone-100">
<iconify-icon className="text-green-800" icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-xl md:text-2xl font-medium tracking-tight text-stone-900 leading-none group-hover:opacity-70 transition-opacity font-serif">Akebonoyama</span>
<span className="text-[9px] md:text-[10px] tracking-[0.25em] text-stone-400 uppercase mt-1 font-medium">Agricultural Park</span>
</div>
</a>

<div className="hidden lg:flex flex-1 flex-col items-end justify-center pr-8 h-full">
<div className="flex items-center gap-6 text-[11px] text-stone-500 font-medium mb-1.5">
<a className="hover:text-green-700 flex items-center gap-1.5 transition-colors" href="#"><span className="w-1.5 h-1.5 rounded-full bg-green-500/50"></span> キッチンカー募集</a>
<a className="hover:text-green-700 flex items-center gap-1.5 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="14"></iconify-icon> 撮影について</a>
<div className="w-px h-3 bg-stone-300 mx-1"></div>
<div className="flex items-center gap-3 text-stone-400">
<a className="hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="solar:smart-home-angle-linear" width="16"></iconify-icon></a>
<a className="hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="solar:bell-linear" width="16"></iconify-icon></a>
</div>
</div>
<nav className="flex items-center gap-8">
<a className="text-xs font-bold text-stone-600 hover:text-green-800 transition-colors tracking-wide py-1 relative group" href="#about">
                    ご利用案内
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-800 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-bold text-stone-600 hover:text-green-800 transition-colors tracking-wide py-1 relative group" href="#flowers">
                    見ごろの花
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-800 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-bold text-stone-600 hover:text-green-800 transition-colors tracking-wide py-1 relative group" href="#events">
                    イベント
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-800 transition-all group-hover:w-full"></span>
</a>
<a className="text-xs font-bold text-stone-600 hover:text-green-800 transition-colors tracking-wide py-1 relative group" href="#access">
                    アクセス
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-green-800 transition-all group-hover:w-full"></span>
</a>
<button className="ml-2 w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-100 transition-colors group">
<iconify-icon className="text-stone-800" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
</div>

<div className="lg:hidden flex-1 flex justify-end pr-4">
<button className="p-2 text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden md:flex h-full shrink-0">
<a className="w-24 lg:w-32 h-full bg-[#1e4a2d] hover:bg-[#153621] text-white flex flex-col items-center justify-center transition-colors group relative overflow-hidden" href="#">
<span className="text-[11px] font-bold relative z-10 tracking-widest">CONTACT</span>
<span className="text-[10px] mt-0.5 opacity-60 z-10">お問合せ</span>
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a className="w-24 lg:w-32 h-full bg-[#d97706] hover:bg-[#b45309] text-white flex flex-col items-center justify-center transition-colors group relative overflow-hidden" href="#">
<span className="text-[11px] font-bold relative z-10 tracking-widest">BBQ</span>
<span className="text-[10px] mt-0.5 opacity-80 z-10">ご予約</span>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
</div>
</header>
<main className="w-full overflow-hidden">

<section className="relative w-full max-w-[1600px] mx-auto min-h-[600px] md:h-[750px] flex flex-col md:block mb-24">

<div className="relative w-full md:w-[85%] h-[50vh] md:h-full md:absolute md:top-0 md:left-0 z-0 hero-blob overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] group">
<img alt="Park Scenery" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[2.5s] ease-out" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-stone-900/10 to-transparent pointer-events-none"></div>
</div>

<div className="absolute top-8 md:top-24 left-4 md:left-[12%] z-10 w-auto md:w-80 bg-white/95 backdrop-blur shadow-xl border border-white/40 animate-fade-in-up">
<div className="p-5 md:p-6 border-b border-stone-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Today's Park</span>
<div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded-full border border-green-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-bold text-green-800 tracking-wider">OPEN</span>
</div>
</div>
<p className="text-3xl font-serif text-stone-800 mt-2">09:00 <span className="text-base text-stone-400 font-sans mx-1">-</span> 17:00</p>
</div>
<div className="bg-stone-50 p-4 flex items-center justify-between group cursor-pointer hover:bg-stone-100 transition-colors">
<span className="text-xs font-bold text-stone-600">本日のイベント情報</span>
<iconify-icon className="text-stone-400 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="absolute top-[35%] md:top-32 right-4 md:right-[5%] z-10 text-right pointer-events-none">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-stone-800 leading-[1.1] tracking-tight drop-shadow-sm font-serif mix-blend-multiply">
                    自然と<br/>
<span className="text-[#1e4a2d]">呼吸</span>する<br/>
                    休日を。
                </h1>
</div>

<div className="relative md:absolute bottom-0 md:bottom-16 right-0 md:right-[5%] w-full md:w-[600px] bg-white shadow-xl z-20 border-t-4 border-[#1e4a2d]">
<div className="p-8">
<div className="flex items-end justify-between mb-6 border-b border-stone-100 pb-4">
<h2 className="text-xl font-serif text-stone-800 tracking-wider">NEWS</h2>
<a className="text-[10px] font-bold text-stone-400 hover:text-green-800 transition-colors flex items-center gap-1" href="#">
                            VIEW ALL <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<ul className="space-y-4">
<li className="group">
<a className="flex gap-4 items-baseline" href="#">
<time className="text-xs font-bold text-stone-400 w-20 shrink-0 tabular-nums">2026.01.25</time>
<span className="text-xs font-medium text-stone-700 group-hover:text-green-800 transition-colors line-clamp-1 leading-relaxed">
                                    【開花情報】梅園の紅梅が五分咲きとなりました
                                </span>
</a>
</li>
<li className="group">
<a className="flex gap-4 items-baseline" href="#">
<time className="text-xs font-bold text-stone-400 w-20 shrink-0 tabular-nums">2026.01.20</time>
<span className="text-xs font-medium text-stone-700 group-hover:text-green-800 transition-colors line-clamp-1 leading-relaxed">
                                    春のバーベキュー予約受付開始のお知らせ（3月分）
                                </span>
</a>
</li>
</ul>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 max-w-7xl mx-auto" id="events">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-green-800 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">Events</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">季節のイベント</h2>
</div>
<div className="hidden md:block h-px flex-1 bg-stone-200 mx-8 relative top-[-10px]"></div>
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-stone-200 rounded-full text-xs font-bold hover:border-stone-800 hover:bg-stone-50 transition-all duration-300 shadow-sm" href="#">
                    イベント一覧へ
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-stone-200 aspect-[4/3] mb-5">
<img alt="Fresh Vegetables Market" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 flex flex-col items-center shadow-sm border border-stone-100">
<span className="text-[10px] font-bold text-stone-400 uppercase leading-none mb-0.5">JAN</span>
<span className="text-lg font-serif font-medium text-stone-900 leading-none">28</span>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] font-bold text-green-800 mb-2">
<span className="px-2 py-0.5 border border-green-800/20 rounded-sm bg-green-50/50">マルシェ</span>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-green-800 transition-colors">あけぼの山青空市 - Winter Selection</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">地元の新鮮野菜やハンドメイド雑貨が集まる月一回のマルシェ。今月は温かいスープも。</p>
<div className="flex items-center gap-2 text-xs text-stone-400 group-hover:text-stone-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>中央広場</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-stone-200 aspect-[4/3] mb-5">
<img alt="Green Meadow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 flex flex-col items-center shadow-sm border border-stone-100">
<span className="text-[10px] font-bold text-stone-400 uppercase leading-none mb-0.5">FEB</span>
<span className="text-lg font-serif font-medium text-stone-900 leading-none">04</span>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] font-bold text-green-800 mb-2">
<span className="px-2 py-0.5 border border-green-800/20 rounded-sm bg-green-50/50">体験教室</span>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-green-800 transition-colors">冬のパークヨガ &amp; ランチ</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">澄んだ空気の中で体を動かした後は、園内カフェ特製のランチボックスを。</p>
<div className="flex items-center gap-2 text-xs text-stone-400 group-hover:text-stone-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>芝生広場</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm bg-stone-200 aspect-[4/3] mb-5">
<img alt="Bird in Nature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-3 py-1.5 flex flex-col items-center shadow-sm border border-stone-100">
<span className="text-[10px] font-bold text-stone-400 uppercase leading-none mb-0.5">FEB</span>
<span className="text-lg font-serif font-medium text-stone-900 leading-none">11</span>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] font-bold text-green-800 mb-2">
<span className="px-2 py-0.5 border border-green-800/20 rounded-sm bg-green-50/50">自然観察</span>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-green-800 transition-colors">冬鳥を探そう - 野鳥観察会</h3>
<p className="text-xs text-stone-500 leading-relaxed mb-4">専門ガイドと一緒に園内の森を散策。双眼鏡の貸し出しもあります。</p>
<div className="flex items-center gap-2 text-xs text-stone-400 group-hover:text-stone-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span>日本庭園</span>
</div>
</article>
</div>
</section>

<section className="bg-[#1c1c1c] text-white py-20 md:py-32 overflow-hidden relative" id="flowers">
<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] border border-white/10 rounded-full"></div>
<div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] border border-white/10 rounded-full"></div>
</div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-serif mb-2">Now Blooming</h2>
<p className="text-stone-400 text-sm font-light">あけぼの山を彩る、今が見ごろの花々</p>
</div>
<div className="mt-6 md:mt-0 flex gap-4">
<button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x">

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4 group">
<img alt="Cherry Blossoms" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="bg-white/20 backdrop-blur text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Forecast</span>
</div>
</div>
<h3 className="text-xl font-serif mb-1">桜 (ソメイヨシノ)</h3>
<p className="text-xs text-stone-500 mb-2">Sakura Plaza</p>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-pink-400 h-full w-[30%]"></div>
</div>
<p className="text-[10px] text-stone-400 mt-1 text-right">3分咲き</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4 group">
<img alt="Tulips" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="bg-[#d97706] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Best Time</span>
</div>
</div>
<h3 className="text-xl font-serif mb-1">チューリップ</h3>
<p className="text-xs text-stone-500 mb-2">Windmill Garden</p>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-yellow-500 h-full w-[90%]"></div>
</div>
<p className="text-[10px] text-stone-400 mt-1 text-right">満開</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4 group">
<img alt="Plum Blossoms" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="bg-white/20 backdrop-blur text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">Ending</span>
</div>
</div>
<h3 className="text-xl font-serif mb-1">梅</h3>
<p className="text-xs text-stone-500 mb-2">Japanese Garden</p>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-red-400 h-full w-[100%]"></div>
</div>
<p className="text-[10px] text-stone-400 mt-1 text-right">散り始め</p>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center flex flex-col justify-center items-center border border-white/10 rounded-sm hover:bg-white/5 transition-colors cursor-pointer group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-stone-300" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-bold tracking-widest text-stone-300">VIEW ALL</span>
<span className="text-[10px] text-stone-500 mt-2">年間花カレンダーを見る</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 max-w-7xl mx-auto bg-stone-50">
<div className="text-center mb-16">
<span className="text-green-800 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Facilities</span>
<h2 className="text-3xl md:text-4xl font-serif text-stone-900">園内施設のご案内</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Windmill and Flowers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
<div className="bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full border border-white/20 mb-3">
<iconify-icon className="text-white" icon="solar:wind-linear" width="16"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-bold mb-1">風車広場</h3>
<p className="text-stone-200 text-sm">四季折々の花畑とオランダ風車の絶景スポット</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer bg-white border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="flex h-full">
<div className="w-1/2 p-8 flex flex-col justify-center">
<h3 className="text-xl font-bold text-stone-900 mb-2">あけぼのビーチパーク</h3>
<p className="text-xs text-stone-500 mb-6 leading-relaxed">手ぶらで楽しめる本格BBQ。カフェも併設しており、ゆったりとした時間を過ごせます。</p>
<span className="text-[10px] font-bold text-green-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                予約サイトへ <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</span>
</div>
<div className="w-1/2 h-full">
<img alt="Outdoor Picnic Area" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer">
<img alt="Japanese Garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors flex flex-col justify-end p-6">
<h3 className="text-lg text-white font-bold">日本庭園</h3>
<p className="text-[10px] text-stone-200 mt-1">茶室「柏泉亭」</p>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 group relative rounded-2xl overflow-hidden cursor-pointer bg-[#eefbf2] border border-green-100 p-6 flex flex-col justify-between hover:border-green-300 transition-colors">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
<iconify-icon icon="solar:tree-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-stone-900">冒険の森</h3>
<p className="text-xs text-stone-500 mt-2">アスレチック遊具で思いっきり遊ぼう</p>
</div>
<div className="absolute bottom-4 right-4 text-green-800 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 pb-0.5 hover:border-stone-900" href="#">
<iconify-icon icon="solar:map-linear" width="16"></iconify-icon>
                    園内マップをダウンロード (PDF)
                </a>
</div>
</section>

<section className="bg-white border-t border-stone-200" id="access">
<div className="flex flex-col md:flex-row h-full md:h-[500px]">
<div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-stone-50">
<h2 className="text-3xl font-serif text-stone-900 mb-8">Access</h2>
<div className="space-y-6">
<div>
<div className="flex items-center gap-3 text-stone-800 font-bold mb-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>所在地</span>
</div>
<p className="text-sm text-stone-600 pl-8 leading-relaxed">
                                〒277-0825<br/>
                                千葉県柏市布施2005-2<br/>
<span className="text-xs text-stone-400 mt-1 block">駐車場 500台（無料）</span>
</p>
</div>
<div>
<div className="flex items-center gap-3 text-stone-800 font-bold mb-2">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
<span>公共交通機関</span>
</div>
<p className="text-sm text-stone-600 pl-8 leading-relaxed">
                                JR常磐線「我孫子駅」北口より<br/>
                                阪東バス「あけぼの山農業公園」行き 終点下車 徒歩1分
                            </p>
</div>
</div>
<a className="mt-10 inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-stone-900 text-white text-xs font-bold rounded-sm hover:bg-stone-700 transition-colors shadow-lg shadow-stone-200" href="https://maps.google.com" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="16"></iconify-icon>
                        Google Mapで見る
                    </a>
</div>

<div className="w-full md:w-1/2 bg-[#e5e5e5] relative group overflow-hidden">
<img alt="Park Pathway" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1510797215324-95aa89f43c33?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
<iconify-icon className="text-green-800" icon="solar:map-point-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="bg-green-900 text-white py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex items-center justify-center gap-2 mb-6 opacity-60">
<iconify-icon icon="solar:hashtag-linear" width="20"></iconify-icon>
<span className="text-sm tracking-widest uppercase">Akebonoyama_Park</span>
</div>
<div className="flex justify-center gap-4 md:gap-8">

<div className="w-32 md:w-48 aspect-square rounded-sm overflow-hidden bg-white/10 group cursor-pointer relative">
<img alt="Sunflowers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-32 md:w-48 aspect-square rounded-sm overflow-hidden bg-white/10 hidden md:block group cursor-pointer relative">
<img alt="Lavender Field" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-32 md:w-48 aspect-square rounded-sm overflow-hidden bg-white/10 group cursor-pointer relative">
<img alt="Autumn Leaves" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-32 md:w-48 aspect-square rounded-sm overflow-hidden bg-white/10 hidden md:block group cursor-pointer relative">
<img alt="Morning Dew" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518173946687-a4c036bc9c5d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-xs font-bold border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-green-900 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
                        Instagramをフォロー
                    </a>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-stone-800" icon="solar:wind-linear" width="24"></iconify-icon>
<span className="text-lg font-serif font-bold text-stone-800">Akebonoyama</span>
</div>
<p className="text-xs text-stone-500 leading-relaxed mb-6">
                        四季折々の花々と風車が織りなす風景。<br/>
                        心安らぐ自然の中で、特別な一日を。
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="mdi:facebook" width="16"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="18"></iconify-icon></a>
</div>
</div>

<div className="flex flex-wrap gap-12 md:gap-20">
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-4">Guide</h4>
<ul className="space-y-2 text-xs text-stone-500 font-medium">
<li><a className="hover:text-green-800 transition-colors" href="#">ご利用案内</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">施設マップ</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">よくある質問</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">バリアフリー情報</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-4">Enjoy</h4>
<ul className="space-y-2 text-xs text-stone-500 font-medium">
<li><a className="hover:text-green-800 transition-colors" href="#">見ごろの花</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">イベント情報</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">BBQ予約</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">日本庭園</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-stone-900 uppercase tracking-widest mb-4">Contact</h4>
<ul className="space-y-2 text-xs text-stone-500 font-medium">
<li><a className="hover:text-green-800 transition-colors" href="#">お問い合わせ</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">撮影申請について</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">出店者募集</a></li>
</ul>
</div>
</div>
</div>

<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-stone-400">© 2026 Akebonoyama Agricultural Park. All rights reserved.</p>
<div className="flex gap-6 text-[10px] text-stone-400">
<a className="hover:text-stone-600" href="#">プライバシーポリシー</a>
<a className="hover:text-stone-600" href="#">サイトマップ</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
