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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="tracking-tighter uppercase text-sm font-medium text-white/90 hover:text-white transition-colors" href="#">
                RE:FOOD LAB
            </a>
<div className="hidden md:flex gap-8 text-xs font-normal tracking-wide text-white/50">
<a className="hover:text-white transition-colors" href="#story">스토리</a>
<a className="hover:text-white transition-colors" href="#values">가치</a>
<a className="hover:text-white transition-colors" href="#package">패키지</a>
</div>
<a className="px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors" href="#pricing">
                구매하기
            </a>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66803c72-934d-428e-8aac-e2ff95ebd3e9_3840w.png)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
<div className="flex flex-col z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 text-xs text-white/70">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<span className="">입안에서 깨어나는 사방신의 신비</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6 text-white text-balance">
                전설의 수호자가 되어<br/>
<span className="holo-text">소중한 마음을 전하세요</span>
</h1>
<p className="text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed mb-10 text-balance">
                당 걱정은 덜고 단백질은 채운, 죄책감 없는 <span className="text-white/90 font-medium">완벽한 디저트</span>를 전설 속 사방신의 가호 아래 만나보세요.
            </p>

<div className="w-full max-w-sm aspect-square relative mb-12 animate-float group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/40 to-amber-900/40 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-full h-full holo-border rounded-2xl bg-[#0a0a0c] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/badefccc-9dbd-4758-b255-134aa5ae1752_800w.png')] bg-cover bg-center opacity-60"></div>
<iconify-icon className="relative z-10 text-white/50 text-4xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<a className="group relative px-8 py-4 bg-white text-black rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 overflow-hidden transition-transform hover:scale-105" href="#pricing">
<span className="relative z-10">지금 전설의 수호자가 되어 구매하기</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-white via-slate-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="story">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">4인 4색, 사방신의 가호를 품은 수호의 연금술</h2>
<p className="text-sm text-white/50 font-light">각 캐릭터의 고유한 아우라와 신화적 요소가 조화롭게 어우러진 디자인</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
<div className="flex items-start justify-between mb-6 relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-blue-400 tracking-wider">청룡 | 이동하</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">고요함 속에 타오르는 푸른 불꽃, 지혜의 숨결</h3>
</div>
<iconify-icon className="text-blue-500/50 text-3xl" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">Concept</span>
<p className="text-sm text-white/80 font-light leading-relaxed">차갑고 날카로운 눈매 뒤에 숨겨진 깊은 지혜와 평안. 정중동의 날카롭고 깔끔한 맛.</p>
</div>
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">The Taste (흑임자 &amp; 민트)</span>
<p className="text-sm text-white/80 font-light leading-relaxed">고소한 흑임자 반죽에 시원하고 깔끔한 민트초코의 반전 매력. 입안에 넣는 순간 첫맛은 시원하고 끝맛은 고소합니다.</p>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-colors duration-500"></div>
<div className="flex items-start justify-between mb-6 relative z-10">
<div className="">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-xs font-medium text-red-400 tracking-wider">주작 | 서아린</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">우아하게 타오르는 불꽃, 열정의 낙인</h3>
</div>
<iconify-icon className="text-red-500/50 text-3xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">Concept</span>
<p className="text-sm text-white/80 font-light leading-relaxed">절제된 에너지와 화려한 퍼포먼스로 무대를 압도하는 주작의 열정. 다섯 가지 감각이 깨어나는 열정.</p>
</div>
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">The Taste (오미자청 &amp; 대추)</span>
<p className="text-sm text-white/80 font-light leading-relaxed">화려한 붉은색 반죽에 진한 오미자청과 대추. 입안에 넣는 순간 첫맛은 새콤하게 톡 쏘고, 끝맛은 달콤합니다.</p>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="flex items-start justify-between mb-6 relative z-10">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span className="text-xs font-medium text-slate-300 tracking-wider">백호 | 백건</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">강렬한 서리의 백호, 용기의 맹세</h3>
</div>
<iconify-icon className="text-white/30 text-3xl" icon="solar:shield-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">Concept</span>
<p className="text-sm text-white/80 font-light leading-relaxed">거침없는 카리스마와 강력한 퍼포먼스 에너지로 무대를 장악하는 백호의 용기. 단짠의 파괴적인 에너지.</p>
</div>
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">The Taste (플레인 &amp; 솔티드 카라멜)</span>
<p className="text-sm text-white/80 font-light leading-relaxed">깨끗한 흰색 반죽에 솔티드 카라멜. 입안에 넣는 순간 첫맛은 짭짤하고 달콤하며, 끝맛은 묵직합니다.</p>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-600/20 transition-colors duration-500"></div>
<div className="flex items-start justify-between mb-6 relative z-10">
<div className="">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-600"></span>
<span className="text-xs font-medium text-emerald-500 tracking-wider">현무 | 현무</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">묵직한 땅의 지혜, 성찰의 땅</h3>
</div>
<iconify-icon className="text-emerald-500/40 text-3xl" icon="solar:mountain-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">Concept</span>
<p className="text-sm text-white/80 font-light leading-relaxed">은근하고 깊게 남는 아우라와 현명함으로 팀을 지탱하는 지혜. 묵직하고 깊게 남는 은은한 여운.</p>
</div>
<div className="bg-black/40 rounded-2xl p-4 border border-white/5">
<span className="block text-xs text-white/40 mb-1">The Taste (말차 &amp; 쑥)</span>
<p className="text-sm text-white/80 font-light leading-relaxed">짙은 감청색 반죽에 진한 말차와 쑥. 입안에 넣는 순간 첫맛은 쌉쌀하고 달콤하며, 끝맛은 깊습니다.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="values">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">왜 '사방신의 정(情)'이어야 할까요?</h2>
<p className="text-sm text-white/50 font-light mb-8">세련된 전통의 맛, 죄책감 없는 즐거움</p>
<div className="relative w-full aspect-square rounded-full border border-white/5 flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
<div className="absolute inset-0 bg-cover bg-center opacity-20 rounded-full mix-blend-luminosity bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66803c72-934d-428e-8aac-e2ff95ebd3e9_800w.png)]"></div>
<div className="w-1/2 h-1/2 rounded-full holo-border opacity-50 animate-[spin_10s_linear_infinite]"></div>
<iconify-icon className="absolute text-4xl text-white/50" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="glass p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-xl text-white/70" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">상큼한 반전</h4>
<span className="text-xs text-white/40 mb-3 uppercase tracking-wider">Fruit Blending</span>
<p className="text-xs text-white/60 font-light leading-relaxed">기름지고 텁텁한 기존 약과는 잊으세요. 과일의 산뜻함이 끝맛을 깔끔하게 잡아줍니다.</p>
</div>
<div className="glass p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-xl text-white/70" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">가벼운 즐거움</h4>
<span className="text-xs text-white/40 mb-3 uppercase tracking-wider">Zero Sugar</span>
<p className="text-xs text-white/60 font-light leading-relaxed">설탕 대신 알룰로스를 사용하여 혈당 걱정 없이 마음껏 즐길 수 있습니다.</p>
</div>
<div className="glass p-6 rounded-2xl flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 border border-white/10">
<iconify-icon className="text-xl text-white/70" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-white mb-2">탄탄한 영양</h4>
<span className="text-xs text-white/40 mb-3 uppercase tracking-wider">High Protein</span>
<p className="text-xs text-white/60 font-light leading-relaxed">밀가루는 줄이고 콩 단백질을 채워, 간식을 먹으면서 영양까지 챙기는 영리한 선택.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#08080a]" id="package">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">전설의 가호를 담은 소장하고 싶은 보석함</h2>
<p className="text-sm text-white/50 font-light">천상의 공간을 표현한 프리미엄 패키지</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="h-48 glass rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-base font-medium text-white mb-2 relative z-10">Premium Set-up Box</h3>
<p className="text-xs text-white/60 font-light leading-relaxed relative z-10">사방신의 기운이 서린 신비로운 감청색 보석함. 금박과 자개 느낌의 홀로그램으로 정교하게 새겨져 있습니다.</p>
</div>
</div>
<div className="space-y-4 md:-mt-8">
<div className="h-64 holo-border rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group bg-[#0a0a0c]">
<div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen transition-transform duration-700 group-hover:scale-105 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9937aebe-0d59-4e99-8432-376b710eedd5_800w.png)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent"></div>
<h3 className="text-base font-medium text-white mb-2 relative z-10">Character Card Inside</h3>
<p className="text-xs text-white/60 font-light leading-relaxed relative z-10">빛에 비추면 캐릭터 실루엣이 은하수와 함께 나타나며, 신비로운 오라를 설명하는 텍스트가 떠오릅니다.</p>
</div>
</div>
<div className="space-y-4">
<div className="h-48 glass rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tl from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<h3 className="text-base font-medium text-white mb-2 relative z-10">Eco-Friendly Luxury</h3>
<p className="text-xs text-white/60 font-light leading-relaxed relative z-10">환경을 생각한 친환경 소재 패키지에 자개 홀로그램을 더해 선물용으로도 완벽합니다.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">전설의 가치를 담은 선택</h2>
<p className="text-sm text-white/50 font-light">귀하의 미식 라이프스타일에 맞춘 구성</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="glass rounded-3xl p-8 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">청룡의 맛보기</h3>
<p className="text-xs text-white/40 mb-6 uppercase tracking-wider">낱개 팩</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-white/30" icon="solar:check-circle-linear"></iconify-icon>
                            사방신 약과 중 택 1 (25g)
                        </div>
</div>
<div className="pt-6 border-t border-white/5">
<p className="text-xs text-white/50 font-light mb-4">추천: 가벼운 간식이 필요한 분</p>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10">선택하기</button>
</div>
</div>

<div className="relative rounded-3xl p-px bg-gradient-to-b from-white/20 to-white/5 shadow-2xl z-10 scale-100 md:scale-105">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
<div className="bg-[#0a0a0c] rounded-[calc(1.5rem-1px)] p-8 h-full">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-white">리푸드랩 프리미엄 기프트</h3>
<span className="px-2 py-1 bg-white text-black text-[10px] font-semibold rounded-full uppercase tracking-wider">Best</span>
</div>
<p className="text-xs text-white/40 mb-6 uppercase tracking-wider">Full Set</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon>
                                12구 세트
                            </div>
<div className="flex items-center gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon>
                                전용 프리미엄 쇼핑백
                            </div>
<div className="flex items-center gap-3 text-sm text-white/90 font-light">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon>
                                캐릭터 미공개 굿즈 포함
                            </div>
</div>
<div className="pt-6 border-t border-white/10">
<p className="text-xs text-white/50 font-light mb-4">추천: 소중한 분께 드릴 특별한 답례품</p>
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition-colors">예약 구매하기</button>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 border border-white/5">
<h3 className="text-lg font-medium text-white mb-2">주작의 올인원 세트</h3>
<p className="text-xs text-white/40 mb-6 uppercase tracking-wider">8구 세트</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-white/30" icon="solar:check-circle-linear"></iconify-icon>
                            4가지 맛 각 2구씩 (총 8구)
                        </div>
</div>
<div className="pt-6 border-t border-white/5">
<p className="text-xs text-white/50 font-light mb-4">추천: 모든 전설을 경험하고 싶은 분</p>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/10">선택하기</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-12 text-center">전설의 가호와 함께 일어난 일상의 기적</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass p-6 rounded-2xl">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-blue-500" icon="solar:waterdrops-linear"></iconify-icon>
<span className="text-xs text-white/60">지혜로운 선택 (청룡)</span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">"흑임자와 민트의 조화가 너무 신선해요. 차분한 지혜의 시간을 선사합니다."</p>
</div>
<div className="glass p-6 rounded-2xl">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-red-500" icon="solar:fire-linear"></iconify-icon>
<span className="text-xs text-white/60">열정적인 하루 (주작)</span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">"오미자의 새콤달콤한 맛이 활력을 불어넣습니다. 열정적인 하루를 시작하세요."</p>
</div>
<div className="glass p-6 rounded-2xl">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-slate-300" icon="solar:shield-linear"></iconify-icon>
<span className="text-xs text-white/60">용기 있는 도전 (백호)</span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">"단짠의 조화가 강렬해요. 거침없는 용기의 기운을 전합니다."</p>
</div>
<div className="glass p-6 rounded-2xl">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-emerald-500" icon="solar:mountain-linear"></iconify-icon>
<span className="text-xs text-white/60">성찰의 시간 (현무)</span>
</div>
<p className="text-sm text-white/80 font-light leading-relaxed">"쌉쌀한 말차와 쑥의 조화가 깊은 여운을 줍니다. 성찰의 시간을 선사합니다."</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex flex-col items-center justify-center border-t border-white/5 text-center px-6 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-[#050505] to-[#050505] -z-10"></div>
<div className="w-24 h-24 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
<div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
<span className="tracking-tighter uppercase text-lg font-medium text-white">RE:</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">당신의 일상을 수호하는 달콤함</h2>
<p className="text-sm md:text-base text-white/50 max-w-2xl font-light leading-relaxed mb-10 text-balance">
            Re:Food Lab은 과거의 전설을 오늘의 기술로 재해석합니다. 단순히 맛있는 간식을 넘어, 당신의 건강한 라이프스타일을 수호하는 가장 세련된 전통을 제안합니다. 지금, 사방신의 가호를 한 입 베어 물어보세요.
        </p>
<a className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-full text-sm font-medium transition-all backdrop-blur-md" href="#pricing">
            전설 만나보기
        </a>
</section>

<footer className="border-t border-white/5 py-12 bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="tracking-tighter uppercase text-sm font-medium text-white/80">RE:FOOD LAB</span>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-white/40 font-light">
<span>서울특별시 노원구 [상세 주소]</span>
<span className="hidden md:block w-px h-3 bg-white/10"></span>
<a className="hover:text-white transition-colors" href="mailto:refoodlab@korean-restaurant-landing-page-template">refoodlab@korean-restaurant-landing-page-template</a>
</div>
<div className="text-[10px] text-white/30 tracking-wider">
                © 2024 Re:Food Lab. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
