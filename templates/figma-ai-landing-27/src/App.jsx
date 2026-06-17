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
      

<div className="fixed inset-0 pointer-events-none opacity-40 z-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '4rem 4rem'}}></div>

<section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden z-10 border-b border-white/5">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2F6BFF] rounded-full blur-[140px] opacity-10 pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF8A3D] rounded-full blur-[150px] opacity-[0.08] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 max-w-5xl text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md mb-10">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF]" style={{boxShadow: '0 0 8px #2F6BFF'}}></span>
<span className="text-xs font-semibold tracking-widest uppercase text-white/70">Figma Design OS Spinoff</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.15]" style={{textWrap: 'balance'}}>
                あなたが稼働するのは、<br className="hidden md:block"/>わずか10%でいい。
            </h1>

<p className="text-lg md:text-xl text-slate-300 font-semibold max-w-3xl mb-12 leading-relaxed tracking-tight" style={{textWrap: 'balance'}}>
                時間を浪費するデザインは終わった。<br className="hidden md:block"/>Figma AIの真価を引き出し、あなたの価値を最大化する<br className="hidden md:block"/>「オリジナルLPキット」<span className="text-xs align-top opacity-60 ml-1 font-normal tracking-normal">※専用テンプレート&amp;プロンプト付き</span>
</p>

<div className="max-w-2xl text-slate-400 text-sm md:text-base space-y-6 mb-16 leading-loose font-medium">
<p>90%の余裕を手に入れ、残された10%にあなたの最高の努力とエッセンスを注ぎ込む。<br className="hidden md:block"/>そして、残りの時間は好きなだけあなたの自由に使えばいい。</p>
<p>Figmaを使いこなしているつもりでも、まだ「退屈な作業」に時間を奪われていませんか？<br className="hidden md:block"/>デザインは瞬時に形になり、ここから、今の時代だからこそ到達できる<br className="hidden md:block"/>「あなた独自のデザインシステム」が始まります。</p>
</div>

<a className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#0B0F17] font-bold text-sm md:text-base rounded-sm overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-3 tracking-tight">
                    今すぐ「売れるLPのベース」を手に入れ、作業時間を90%削減する
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>
</section>

<section className="py-24 relative z-10 bg-[#0B0F17]">
<div className="container mx-auto px-6 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-5 sticky top-24">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-[#FF8A3D]"></div>
<div className="text-[#FF8A3D] text-xs font-bold tracking-widest uppercase">Pain Point</div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                        時間を浪費する退屈な<br/>基礎工事
                    </h2>
</div>
<div className="lg:col-span-7 space-y-8 text-slate-400 text-sm md:text-base leading-loose font-medium">
<div className="p-8 md:p-12 border border-white/5 bg-white/[0.01] relative">

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/20"></div>
<p className="mb-8 text-slate-300">FigmaのWebサイト公開機能は強力ですが、ゼロから組めば結局1日（約8時間）の工数がかかります。かといって公式のテンプレートを使えば、いかにも「テンプレートで作りました」という没個性なデザインに。白紙にAIプロンプトを打ち込んでも、構造が破綻した使えないレイアウトが生成されるだけです。</p>
<div className="flex items-start gap-4 p-6 border border-white/10 bg-[#080C16]">
<iconify-icon className="text-[#2F6BFF] text-xl flex-shrink-0 mt-1" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-white font-semibold tracking-tight leading-relaxed">「時間を浪費する退屈な基礎工事」は、もうAIと強固なベースファイルに任せてください。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 border-y border-white/5 bg-[#080C16] overflow-hidden">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '1.5rem 1.5rem'}}></div>
<div className="container mx-auto px-6 max-w-6xl relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">なぜ、このAIは暴走しないのか？</h2>
<p className="text-slate-400 text-sm md:text-base leading-loose font-medium">
                    おそらくあなたは、「一撃必殺の長文プロンプトをAIに投げ込んで、本当にレイアウトが崩れないのか？」と疑っているはずです。その疑問は正しい。通常のテンプレートなら確実に破綻します。
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-10">
<div>
<h3 className="text-xl md:text-2xl font-semibold text-white mb-4 tracking-tight">なぜ、このキットのAIは暴走を許さないのか？</h3>
<p className="text-slate-400 leading-loose text-sm md:text-base font-medium">その秘密は、このベースファイルが単なる「枠組み」ではなく、私たちが実務の現場で稼働させている緻密なプラットフォーム『Figma Design OS』からスピンオフした副産物だからです。</p>
</div>
<div className="p-8 border border-white/10 bg-[#0B0F17] relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-gradient-to-b from-transparent via-[#2F6BFF] to-transparent"></div>
<p className="text-slate-300 leading-loose text-sm font-medium mb-6">ルール、変数（トークン）、Auto Layout、コンポーネント設計がOSレベルで厳密に統合管理されているため、AIは「デザインを勝手に考える」ことができません。</p>
<p className="text-slate-300 leading-loose text-sm font-medium">ただ、あらかじめ定義された完璧な構造に対して「あなたの意図通りにデータを流し込む」ことしかできなくなるのです。</p>
</div>
</div>

<div className="relative h-[480px] border border-white/10 bg-[#0B0F17] flex items-center justify-center p-8 overflow-hidden">
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '2rem 2rem'}}></div>
<div className="relative w-full max-w-sm flex flex-col items-center gap-6">

<div className="px-5 py-2.5 border border-[#FF8A3D]/30 bg-[#FF8A3D]/5 rounded-sm text-xs font-mono text-[#FF8A3D] flex items-center gap-3 tracking-widest w-full justify-center">
<iconify-icon className="text-lg" icon="solar:code-square-linear"></iconify-icon> DEFINED TOKENS
                        </div>

<div className="w-[1px] h-6 bg-white/20"></div>

<div className="w-full p-5 border border-[#2F6BFF]/40 bg-[#2F6BFF]/5 rounded-sm relative" style={{boxShadow: '0 0 60px 10px rgba(47, 107, 255, 0.05)'}}>
<div className="absolute -top-3 left-4 px-2 bg-[#0B0F17] text-[10px] font-mono text-[#2F6BFF] tracking-widest">AUTO LAYOUT ENGINE</div>
<div className="flex justify-between items-center mt-2">
<div className="space-y-2 w-1/2">
<div className="h-1.5 w-full bg-white/10 rounded-full"></div>
<div className="h-1.5 w-4/5 bg-white/10 rounded-full"></div>
</div>
<div className="flex gap-2 text-slate-500">
<iconify-icon icon="solar:arrows-up-down-linear"></iconify-icon>
<iconify-icon icon="solar:arrows-left-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="w-[1px] h-8 bg-white/20 relative flex justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-[#2F6BFF] absolute top-1" style={{boxShadow: '0 0 8px 2px #2F6BFF'}}></div>
</div>

<div className="w-[90%] p-4 border border-white/20 bg-white/5 rounded-sm flex items-center justify-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-semibold text-white tracking-widest uppercase">Data Injection</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-[#0B0F17]">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

<div className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center">
<div className="w-full max-w-md p-8 border border-white/5 bg-[#080C16] relative flex flex-col gap-4">

<div className="absolute -top-3 left-8 px-3 bg-[#080C16] text-[10px] font-mono text-slate-500 tracking-widest uppercase">Wireframe Instance</div>

<div className="h-32 w-full border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-3">
<div className="w-2/3 h-1.5 bg-white/20"></div>
<div className="w-1/2 h-1.5 bg-white/10"></div>
<div className="w-20 h-6 bg-[#2F6BFF]/20 border border-[#2F6BFF]/50 mt-2"></div>
</div>

<div className="h-20 w-full border border-white/5 bg-transparent flex items-center gap-5 px-5">
<div className="w-10 h-10 border border-white/10 bg-white/5"></div>
<div className="flex-1 space-y-2.5">
<div className="w-full h-1 bg-white/10"></div>
<div className="w-3/4 h-1 bg-white/10"></div>
<div className="w-5/6 h-1 bg-white/10"></div>
</div>
</div>

<div className="h-24 w-full border border-white/5 bg-white/[0.01] grid grid-cols-2 gap-3 p-3">
<div className="border border-white/10 bg-white/5"></div>
<div className="border border-white/10 bg-white/5"></div>
</div>

<div className="h-24 w-full border border-[#FF8A3D]/20 bg-[#FF8A3D]/5 flex flex-col items-center justify-center gap-3">
<div className="w-1/2 h-1 bg-[#FF8A3D]/40"></div>
<div className="w-32 h-8 bg-[#FF8A3D] flex items-center justify-center">
<div className="w-16 h-1 bg-black/30"></div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-10">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-[#2F6BFF]"></div>
<div className="text-[#2F6BFF] text-xs font-bold tracking-widest uppercase">Core Structure</div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">勝敗を分ける「王道のベース」</h2>
<p className="text-slate-400 text-sm md:text-base leading-loose font-medium mb-6">世の中のWeb制作において、最もスピードと成果が求められるのが「ランディングページ（LP）」です。Heroから始まり、Pain（問題提起）、Solution（解決策）、Proof（実証）、そしてCTAへと至る王道の構成。</p>
<p className="text-white text-sm md:text-base font-semibold leading-loose pl-5 border-l-2 border-[#2F6BFF]">結局のところ、この『Figma Design OS』の血統を受け継ぐ「売れるLPの強固なベース」をあらかじめ持っている者が、Web制作というゲームを制するのです。</p>
</div>
<div className="space-y-6">
<p className="text-slate-400 text-sm md:text-base leading-loose font-medium">誤解しないでください。このキットを使っても、あなたのオリジナリティが消えることは絶対にありません。ベースとなるLPの構造が完璧に計算されているからこそ、あなたは作業の90%をAIに丸投げし「あなたにしか注入できない最後の10%（カラー、タイポグラフィ、独自のあしらい）」に最高のパフォーマンスを発揮できます。</p>
<div className="p-5 border border-white/10 bg-white/5">
<p className="text-slate-200 text-sm font-semibold leading-relaxed">その10%こそが、誰よりもあなたの価値を証明し、次なるプロジェクトへ流用できる「あなただけのデザインシステム」の原点となるのです。</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 border-t border-white/5 bg-[#080C16]">
<div className="container mx-auto px-6 max-w-6xl">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">48分のロードマップ</h2>
<p className="text-slate-400 text-sm md:text-base leading-loose font-medium">プロンプトをコピペし、実行する。その瞬間に、売れるLPの構成が一気に組み上がっていく快感を味わってください。</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-7 relative w-full aspect-video border border-white/10 bg-[#0B0F17] flex flex-col group overflow-hidden">

<div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full border border-white/20 bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full border border-white/20 bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full border border-white/20 bg-white/10"></div>
</div>

<div className="flex-1 relative flex items-center justify-center bg-[#080C16]">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '1rem 1rem'}}></div>

<div className="w-16 h-16 rounded-full border border-white/20 bg-[#2F6BFF] flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform cursor-pointer relative z-10" style={{boxShadow: '0 0 40px rgba(47, 107, 255, 0.4)'}}>
<iconify-icon className="text-2xl text-white ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-5 space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">

<div className="relative pl-12">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#080C16] border-[2px] border-[#2F6BFF] flex items-center justify-center"></div>
<div className="text-[11px] font-mono text-[#2F6BFF] mb-2 tracking-widest">0 MIN — 5 MIN</div>
<h4 className="text-white font-semibold text-lg mb-3 tracking-tight">複製とセットアップ</h4>
<p className="text-slate-400 text-sm leading-loose font-medium">本キット（AI専用ベースファイル）を複製し、基本構造を把握する。</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#080C16] border-[2px] border-white/20 flex items-center justify-center"></div>
<div className="text-[11px] font-mono text-slate-500 mb-2 tracking-widest">5 MIN — 40 MIN</div>
<h4 className="text-white font-semibold text-lg mb-3 tracking-tight">一撃必殺マスタープロンプトの実行</h4>
<p className="text-slate-400 text-sm leading-loose font-medium">付属の「LP専用マスタープロンプト」を入力。あらかじめ定義された制約に対し、AIが的確なレイアウトとダミーコピーを一気に流し込みます。</p>
</div>

<div className="relative pl-12">
<div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#080C16] border-[2px] border-[#FF8A3D] flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#FF8A3D]"></div>
</div>
<div className="text-[11px] font-mono text-[#FF8A3D] mb-2 tracking-widest">40 MIN — 48 MIN</div>
<h4 className="text-white font-semibold text-lg mb-3 tracking-tight">あなたのエッセンスと公開</h4>
<p className="text-slate-400 text-sm leading-loose font-medium">生成されたデザインに、あなたのオリジナリティ（10%の魔法）を加え、公開ボタンを押すだけ。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5 bg-[#0B0F17]">
<div className="container mx-auto px-6 max-w-5xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">提供内容</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-10 border border-white/10 bg-[#080C16] flex flex-col gap-8 transition-colors hover:border-white/20">
<div className="w-14 h-14 border border-[#2F6BFF]/30 bg-[#2F6BFF]/5 flex items-center justify-center text-[#2F6BFF] text-3xl">
<iconify-icon icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-4 tracking-tight leading-snug">『Figma Design OS』スピンオフ<br/>LP特化型ベーステンプレート</h3>
<div className="inline-block px-2.5 py-1 border border-white/10 bg-white/5 text-[10px] font-mono text-slate-400 tracking-widest uppercase mb-6">複製権限あり</div>
<p className="text-slate-400 text-sm leading-loose font-medium">AIが完璧なレイアウトを生成できるよう、ルール・変数・Auto Layoutが計算し尽くされた強固な構造体。このファイルをあなたのFigmaに複製するところからすべてが始まります。</p>
</div>
</div>

<div className="p-10 border border-white/10 bg-[#080C16] flex flex-col gap-8 relative transition-colors hover:border-white/20">
<div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FF8A3D] text-[#080C16] text-[10px] font-bold tracking-widest uppercase">Bonus</div>
<div className="w-14 h-14 border border-[#FF8A3D]/30 bg-[#FF8A3D]/5 flex items-center justify-center text-[#FF8A3D] text-3xl">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-4 tracking-tight leading-snug">Figma Make ハッキングガイドライン<br/>＆専用プロンプト集</h3>
<div className="inline-block px-2.5 py-1 border border-white/10 bg-white/5 text-[10px] font-mono text-slate-400 tracking-widest uppercase mb-6">PDF + Prompt Text</div>
<p className="text-slate-400 text-sm leading-loose font-medium">AIの出力をガチャ（運任せ）にしないための、検証済みの「一撃必殺マスタープロンプト」と「スタイル設定シート（The Guideline）」を付属。ベーステンプレートのポテンシャルを120%引き出します。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#080C16] border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-3xl text-center relative z-10">

<div className="inline-flex items-center gap-3 px-5 py-2.5 border border-white/10 bg-[#0B0F17] mb-12">
<iconify-icon className="text-2xl text-[#FF8A3D]" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-widest uppercase text-white">30日間 100%返金保証</span>
</div>
<p className="text-slate-400 text-sm md:text-base leading-loose font-medium mb-16">
                私たちは、このキットの「効率化」という絶対的な価値に自信を持っています。もし、あなたが実際にこのキットを使用し、謳い文句通りに作業時間を圧倒的に短縮できなかった場合は、理由を問わず全額返金いたします。あなたにリスクはありません。
            </p>
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-snug" style={{textWrap: 'balance'}}>
                浮いた7時間で、<br/>あなたは何を創りますか？
            </h2>
<p className="text-lg text-slate-300 mb-12 font-semibold tracking-tight">
                今すぐキットを手に入れて、Figma AIの本当の力を解放してください。
            </p>
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-white text-[#0B0F17] font-bold text-sm md:text-base rounded-sm overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]" href="#" style={{boxShadow: '0 0 40px rgba(255,255,255,0.15)'}}>
<div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-3 tracking-tight">
                    今すぐ「売れるLPのベース」を手に入れ、作業時間を90%削減する
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#0B0F17] text-center relative z-10">
<div className="container mx-auto px-6">
<div className="text-2xl font-bold tracking-tighter text-white/20 mb-4">FAIK</div>
<p className="text-[11px] font-mono tracking-widest text-slate-600 uppercase">© Figma AI LP Kit. System Ready.</p>
</div>
</footer>

    </>
  );
}
