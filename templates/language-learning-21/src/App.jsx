import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
},
colors: {
brand: {
black: '#020408',
dark: '#0B101B',
card: '#0F1729', // Updated to match dashboard
blue: '#3B82F6',
glow: '#60A5FA',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
<i className="w-4 h-4 text-blue-400" data-lucide="sparkles"></i>
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-lg font-semibold tracking-tight text-white">so-ki</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
</div>
<button className="bg-white/5 hover:bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/10 transition-all flex items-center gap-2 group">
<span className="cursor-pointer" onclick="window.location.href='https://say-it-diary-ai.lovable.app'" role="button">Start Diary</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New Approach to Fluency
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                昨日の自分を<br className="md:hidden"/>思い出して、<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-300 text-glow">
                    英語が話せる感覚を。
                </span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-slate-400 max-w-2xl mr-auto mb-12 ml-auto">
                「so-ki（想起）」は、あなたの日常を記憶のフックに変える英語日記アプリ。<br className="hidden md:block"/>
                覚えるのではなく、昨日の出来事を思い出す。そのプロセスが英語を定着させます。
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center gap-2">
<i className="w-5 h-5" data-lucide="mic"></i>
<span className="cursor-pointer" onclick="window.location.href='https://say-it-diary-ai.lovable.app'" role="button">今日のことを話す</span>
</button>
<button className="hover:bg-white/5 transition-all cursor-pointer font-medium text-slate-300 bg-transparent h-12 border-white/10 border rounded-full pr-8 pl-8" onclick="window.location.href='https://like-stitch-45880937.figma.site'" role="button">
                    仕組みを見る
                </button>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center mb-4 text-blue-400">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Speak</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        マイクに向かって今日あったことを話すだけ。文字入力は不要。会話形式でAIが引き出します。
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-indigo-900/20 flex items-center justify-center mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Generate</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        話した内容をAIが整理し、自然な英語日記と「使えるフレーズ」を自動生成します。
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-purple-900/20 flex items-center justify-center mb-4 text-purple-400">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Review</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        その日のうちに音読練習。自分の文脈だからこそ、単語帳よりも深く記憶に残ります。
                    </p>
</div>

<div className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-teal-500/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-10 h-10 rounded-lg bg-teal-900/20 flex items-center justify-center mb-4 text-teal-400">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Recall</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        翌日、日本語訳を見て英語を「想起」する。スラスラ言える成功体験が継続の鍵です。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#020408]">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Your Context, Your Words</h2>
<p className="text-lg text-slate-400">自分の出来事から抽出された、世界に一つだけのフレーズ帳。</p>
</div>

<div className="border border-blue-900/30 bg-[#060b16] rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">

<div className="flex items-center justify-between mb-8">
<div>
<div className="flex items-center gap-3 mb-1">
<button className="text-slate-400 hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h3 className="text-xl font-semibold text-white tracking-tight">My Expressions</h3>
</div>
<p className="text-xs text-blue-400 font-medium ml-8">32 of 32 phrases</p>
</div>
<button className="text-slate-400 hover:text-white"><i className="w-5 h-5" data-lucide="filter"></i></button>
</div>

<div className="space-y-4 mb-8">
<div className="flex flex-wrap gap-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider py-1 mr-1">Scene</span>
<button className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 text-xs font-medium">All Scenes</button>
<button className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 text-xs font-medium hover:bg-slate-800 transition-colors">daily life</button>
<button className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50 text-xs font-medium hover:bg-slate-800 transition-colors">feelings</button>
</div>
</div>

<div className="space-y-3">

<div className="group p-4 rounded-xl border border-white/5 bg-[#0B1221] hover:border-blue-500/30 transition-all cursor-default relative overflow-hidden">
<div className="absolute left-0 top-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-medium text-orange-400 group-hover:text-orange-300 transition-colors">be addicted to</h4>
<span className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> Feb 3</span>
</div>
<p className="text-sm text-slate-400 mb-3">〜に夢中になっている、〜の中毒である</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] border border-slate-700 bg-slate-800/50 text-slate-300">hobbies</span>
<span className="px-2 py-0.5 rounded text-[10px] border border-purple-900/30 bg-purple-900/10 text-purple-400">verb phrase</span>
</div>
</div>

<div className="group p-4 rounded-xl border border-white/5 bg-[#0B1221] hover:border-blue-500/30 transition-all cursor-default">
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-medium text-orange-400 group-hover:text-orange-300 transition-colors">since this morning</h4>
<span className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> Feb 3</span>
</div>
<p className="text-sm text-slate-400 mb-3">今朝からずっと</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] border border-slate-700 bg-slate-800/50 text-slate-300">daily life</span>
</div>
</div>

<div className="group p-4 rounded-xl border border-white/5 bg-[#0B1221] hover:border-blue-500/30 transition-all cursor-default">
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-medium text-orange-400 group-hover:text-orange-300 transition-colors">monetize</h4>
<span className="text-xs text-slate-500 flex items-center gap-1"><i className="w-3 h-3" data-lucide="calendar"></i> Feb 3</span>
</div>
<p className="text-sm text-slate-400 mb-3">収益化する</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] border border-slate-700 bg-slate-800/50 text-slate-300">work</span>
<span className="px-2 py-0.5 rounded text-[10px] border border-purple-900/30 bg-purple-900/10 text-purple-400">verb</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060b16] to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-[#0B101B]/30">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-16">

<div className="flex-1 space-y-6 max-w-lg">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/20 border border-teal-500/20 text-teal-300 text-xs font-medium">
<i className="w-3 h-3" data-lucide="trophy"></i>
                        Streak &amp; Rewards
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                        頑張らなくていい。<br/>
                        寝る前の「1分」だけ。
                    </h2>
<p className="text-lg text-slate-400 font-light">
                        「その日しか書けない」というプレッシャーはありません。
                        過去の日記を使った「想起クイズ」が、ゲーム感覚であなたの記憶を定着させます。
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-slate-300">
<div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20">
<i className="w-3 h-3" data-lucide="flame"></i>
</div>
<span>継続したくなるストリーク機能</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<div className="w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<i className="w-3 h-3" data-lucide="brain"></i>
</div>
<span>定着率90%を目指す想起トレーニング</span>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-md">

<div className="relative">

<div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-50"></div>

<div className="bg-[#020408] rounded-2xl border border-white/10 p-4 shadow-2xl relative overflow-hidden">

<div className="text-center mb-6 pt-2">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3d2412] border border-amber-500/20 text-amber-500 text-sm font-medium mb-2">
<i className="w-4 h-4 fill-amber-500" data-lucide="flame"></i>
                                    1 day
                                </div>
<p className="text-xs text-slate-500">You're just getting started! 🌱</p>
</div>

<div className="bg-[#0F1729] rounded-xl border border-white/5 p-4 mb-3">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center border border-white/5 shrink-0">
<i className="w-5 h-5 text-slate-400" data-lucide="trophy"></i>
</div>
<div className="flex-1">
<div className="flex justify-between items-baseline mb-1">
<h4 className="text-sm font-medium text-white">Past diaries mastered</h4>
<span className="text-lg font-semibold text-white">0<span className="text-slate-500 text-sm font-normal">/7</span></span>
</div>
<div className="w-full bg-[#1E293B] rounded-full h-1.5 mb-2">
<div className="bg-blue-600 h-1.5 rounded-full w-[5%]"></div>
</div>
<p className="text-[10px] text-slate-500">Diaries with 90%+ recall accuracy on the latest attempt.</p>
</div>
</div>
</div>

<div className="bg-[#1c1917] rounded-xl border border-amber-500/20 p-6 mb-3 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none"></div>
<div className="w-12 h-12 mx-auto rounded-xl bg-[#3d2412] flex items-center justify-center mb-3 border border-amber-500/20 text-amber-500">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<div className="flex items-center justify-center gap-2 mb-1">
<h4 className="text-lg font-semibold text-amber-500">Today's diary</h4>
<i className="w-4 h-4 text-amber-500" data-lucide="check"></i>
</div>
<p className="text-xs text-slate-400">Great job! You've completed today's entry.</p>
</div>

<div className="bg-[#0F1729] rounded-xl border border-white/5 p-5 mb-3 text-center group hover:border-indigo-500/30 transition-colors cursor-pointer relative">
<span className="absolute top-3 right-3 bg-amber-600 text-[#020408] text-[10px] font-bold px-1.5 py-0.5 rounded">NEXT</span>
<div className="w-10 h-10 mx-auto rounded-lg bg-[#1E293B] flex items-center justify-center mb-3 text-indigo-400 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="brain"></i>
</div>
<h4 className="text-sm font-semibold text-white mb-1">Latest recall quiz</h4>
<p className="text-[11px] text-slate-500">Practice recalling your most recent diary from memory.</p>
<p className="text-[10px] text-amber-500 mt-2 font-medium">Next step: try the latest recall quiz!</p>
</div>

<div className="bg-[#0F1729] rounded-xl border border-white/5 p-4 text-center group hover:border-blue-500/30 transition-colors cursor-pointer">
<div className="w-10 h-10 mx-auto rounded-lg bg-[#1E293B] flex items-center justify-center mb-2 text-slate-300">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h4 className="text-sm font-semibold text-white">Instant English</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#010204]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
<span className="text-slate-300 font-semibold tracking-tight">so-ki</span>
</div>
<div className="text-sm text-slate-500">
                © 2026 so-ki App. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</footer>


    </>
  );
}
