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
      

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-zinc-100 text-lg font-medium tracking-tighter flex items-center" href="#">
                MICHIN<span className="text-pink-500">TAROT</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-zinc-100 transition-colors" href="#about">레이블 소개</a>
<a className="hover:text-zinc-100 transition-colors" href="#masters">마스터즈</a>
<a className="hover:text-zinc-100 transition-colors" href="#process">상담 안내</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded-full hover:bg-pink-500/20 transition-colors" href="#">
                예약하기
            </a>

<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col overflow-hidden text-center pt-32 pr-6 pb-20 pl-6 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-pink-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-pink-500/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<iconify-icon className="text-pink-400" icon="solar:stars-linear"></iconify-icon>
<span>3인 3색 프리미엄 타로 레이블</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-100 max-w-3xl leading-[1.15]">
                운명의 흐름을 읽는<br/><span className="text-pink-400">가장 예리한 시선</span>
</h1>
<p className="mt-6 text-base md:text-lg text-zinc-500 max-w-2xl font-light leading-relaxed">
                미친타로는 뻔한 해석을 거부합니다. 각기 다른 광기와 강점을 지닌 3명의 마스터가 당신의 현재와 미래를 투명하게 꿰뚫어 봅니다.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="hover:bg-pink-600 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium text-white bg-pink-500 rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-[0_0_20px_rgba(236,72,153,0.15)]" href="#">
                    상담 예약하기
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 bg-zinc-900/50 backdrop-blur-sm border border-white/5 text-zinc-300 text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center hover:text-pink-400" href="#masters">
                    마스터 소개 보기
                </a>
</div>
</div>
</main>

<section className="border-t border-white/5 py-24 bg-zinc-950/50" id="masters">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col text-center mb-16 items-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100">독보적인 3인 3색 마스터</h2>
<p className="mt-3 text-sm text-zinc-500 font-light">당신의 고민에 가장 깊이 공감할 마스터를 찾아보세요.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="z-10 relative">
<div className="flex group-hover:border-pink-500/50 group-hover:text-pink-400 transition-colors text-zinc-300 bg-zinc-800/50 w-12 h-12 border-white/5 border rounded-full mb-6 items-center justify-center">
<iconify-icon className="" height="22" icon="solar:scale-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">독끼타로</h3>
<div className="text-xs font-medium text-pink-400/80 tracking-wide mt-1 mb-4">연애 / 법 / 상속 / 매매운 전문</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            숨겨진 이해관계와 얽힌 실타래를 독하게 끊어냅니다. 복잡한 연애사부터 현실적인 법적 분쟁, 상속, 매매까지 예리하게 파고드는 솔루션을 경험하세요.
                        </p>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
<iconify-icon height="22" icon="solar:flame-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">똘끼타로</h3>
<div className="text-xs text-blue-400/80 font-medium mt-1 mb-4 tracking-wide">연애 / 19금 타로 전문</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            필터링 없는 거침없는 해석으로 당신의 본능을 깨웁니다. 아슬아슬한 연애의 줄타기와 누구에게도 말 못한 은밀한 19금 고민을 속 시원하게 풀어드립니다.
                        </p>
</div>
</div>

<div className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/80 transition-all duration-300 overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-300 mb-6 border border-white/5 group-hover:border-purple-500/50 group-hover:text-purple-400 transition-colors">
<iconify-icon height="22" icon="solar:eye-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">광끼타로</h3>
<div className="text-xs text-purple-400/80 font-medium mt-1 mb-4 tracking-wide">연애 / 고부갈등 / 진로 / 취업 전문</div>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                            신들린 듯한 직관력으로 짓누르는 인간관계와 미래를 꿰뚫습니다. 끝없는 고부갈등, 연애 문제부터 막막한 진로와 취업의 늪에서 구원할 해답을 제시합니다.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-24 pb-24 relative" id="process">

<div className="absolute -right-64 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-pink-500/5 rounded-full pointer-events-none opacity-50"></div>
<div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-pink-500/5 rounded-full pointer-events-none opacity-50"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-100 leading-tight mb-8">
                        단순한 점술을 넘어선<br/><span className="text-pink-400">프리미엄 타로 컨설팅</span>
</h2>
<ul className="space-y-8">
<li className="flex gap-4 group">
<div className="mt-0.5">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-pink-400 transition-colors" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-pink-100 transition-colors">100% 비밀 보장 원칙</h4>
<p className="text-sm text-zinc-500 font-light mt-1.5 leading-relaxed">모든 상담 내용은 철저하게 보호되며, 오직 내담자 본인의 더 나은 선택을 위해서만 사용됩니다.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="mt-0.5">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-pink-400 transition-colors" height="18" icon="solar:history-linear" width="18"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-pink-100 transition-colors">심도 있는 50분 집중 상담</h4>
<p className="text-sm text-zinc-500 font-light mt-1.5 leading-relaxed">짧은 시간에 쫓기지 않고, 충분한 대화와 다각도의 카드 전개를 통해 문제의 핵심을 파악합니다.</p>
</div>
</li>
<li className="flex gap-4 group">
<div className="mt-0.5">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center group-hover:border-pink-500/30 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-pink-400 transition-colors" height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-200 group-hover:text-pink-100 transition-colors">상담 요약 디지털 리포트</h4>
<p className="text-sm text-zinc-500 font-light mt-1.5 leading-relaxed">상담 종료 후, 리딩의 핵심 내용과 방향성을 정리한 리포트를 제공하여 언제든 다시 확인할 수 있습니다.</p>
</div>
</li>
</ul>
</div>

<div className="relative w-full aspect-square md:aspect-[4/5] bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center backdrop-blur-sm group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-zinc-950/0 to-transparent group-hover:from-pink-500/10 transition-colors duration-500"></div>
<div className="relative grid grid-cols-2 gap-4 opacity-70 mix-blend-plus-lighter group-hover:opacity-100 transition-all duration-700 p-8">
<div className="w-28 h-40 border border-zinc-800/80 rounded-xl bg-zinc-900/80 shadow-2xl -rotate-6 transform transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-0 group-hover:border-pink-500/20 flex items-center justify-center">
<iconify-icon className="text-zinc-600 group-hover:text-pink-400 transition-colors duration-500" height="40" icon="solar:star-fall-minimalistic-2-linear" width="40"></iconify-icon>
</div>
<div className="w-28 h-40 border border-zinc-800/80 rounded-xl bg-zinc-900/80 shadow-2xl rotate-6 transform transition-all duration-500 group-hover:-translate-y-4 group-hover:rotate-0 group-hover:border-pink-500/20 mt-12 flex items-center justify-center">
<iconify-icon className="text-zinc-600 group-hover:text-pink-400 transition-colors duration-500" height="40" icon="solar:sun-linear" width="40"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-10 text-center text-xs text-zinc-600 font-light mt-auto bg-zinc-950">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-medium tracking-tighter text-zinc-400 text-sm">MICHIN<span className="text-pink-500/50">TAROT</span></div>
<div className="flex gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">서비스 이용약관</a>
<a className="hover:text-zinc-300 transition-colors" href="#">개인정보처리방침</a>
<a className="hover:text-zinc-300 transition-colors" href="#">자주 묻는 질문</a>
</div>
<div>© 2024 MICHINTAROT LABEL. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
