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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
                FIGMA KR
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#curriculum">커리큘럼</a>
<a className="hover:text-white transition-colors" href="#features">강의 특징</a>
<a className="hover:text-white transition-colors" href="#pricing">수강료</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">로그인</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    지금 시작하기
                </a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl figma-gradient pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full mb-8 px-3 py-1 gap-x-2 gap-y-2 items-center">
<span className="flex h-1.5 w-1.5 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium text-neutral-300">2024년형 최신 업데이트 반영</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
<span className="gradient-text">디자인의 미래를</span><br/>
<span className="text-neutral-500">현실로 구현하세요.</span>
</h1>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto mb-10 font-light">
                기초 툴 사용법부터 고도화된 디자인 시스템 구축까지.<br className="hidden md:block"/> 
                현업 디자이너가 알려주는 가장 효율적인 피그마 워크플로우를 경험해보세요.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    커리큘럼 확인하기
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto h-10 px-6 rounded-full border border-white/10 bg-transparent text-neutral-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    무료 강의 보기
                </button>
</div>

<div className="mt-20 relative rounded-xl border border-white/10 bg-neutral-900/50 shadow-2xl shadow-purple-900/20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<div className="p-2 border-b border-white/5 flex gap-1.5 items-center bg-neutral-900/80">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="grid grid-cols-12 h-64 md:h-96 bg-neutral-950">
<div className="col-span-2 border-r border-white/5 p-4 hidden md:block">
<div className="space-y-3">
<div className="h-2 w-16 bg-neutral-800 rounded"></div>
<div className="h-2 w-24 bg-neutral-800 rounded"></div>
<div className="h-2 w-20 bg-neutral-800 rounded"></div>
</div>
</div>
<div className="col-span-12 md:col-span-8 p-8 flex items-center justify-center relative">
<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-4 opacity-10">

<div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div>
<div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div>
<div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div><div className="border border-white/20 rounded"></div>
</div>

<div className="relative z-20 bg-neutral-900 border border-white/10 rounded-lg p-4 w-48 shadow-lg">
<div className="flex justify-between items-center mb-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-purple-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="w-4 h-4 rounded bg-neutral-800"></div>
</div>
<div className="h-2 w-full bg-neutral-800 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-neutral-800 rounded"></div>
</div>
<div className="absolute top-1/3 right-1/4 bg-neutral-800 border border-white/10 rounded p-2 shadow-xl transform rotate-6">
<svg className="lucide lucide-mouse-pointer-2 w-4 h-4 text-white fill-white" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<div className="absolute -bottom-6 left-2 bg-purple-600 text-white text-[10px] px-2 py-0.5 rounded">You</div>
</div>
</div>
<div className="col-span-2 border-l border-white/5 p-4 hidden md:block">
<div className="space-y-3">
<div className="h-2 w-full bg-neutral-800 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">왜 피그마 마스터 클래스인가요?</h2>
<p className="text-neutral-400 font-light">단순한 툴 학습을 넘어, 실무에서 즉시 활용 가능한 노하우를 전수합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-layout-grid w-5 h-5 text-purple-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">오토 레이아웃 완벽 정복</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        반응형 디자인의 핵심, 오토 레이아웃의 기초 원리부터 복잡한 중첩 구조까지 마스터하여 수정에 유연한 디자인을 만듭니다.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-component w-5 h-5 text-blue-400" data-lucide="component" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"></path><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"></path><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">디자인 시스템 구축</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        컴포넌트, 변수(Variables), 스타일을 활용하여 확장 가능하고 일관성 있는 디자인 시스템을 설계하는 방법을 배웁니다.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-all hover:bg-neutral-900/50">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-zap w-5 h-5 text-orange-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">고급 프로토타이핑</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        스마트 애니메이션과 조건부 로직을 사용하여 실제 앱처럼 작동하는 고품질의 인터랙티브 프로토타입을 제작합니다.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-black" id="curriculum">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">커리큘럼 상세</h2>
<p className="text-neutral-400 font-light text-sm">총 8주 과정, 40시간 이상의 실습 중심 강의</p>
</div>
<button className="text-xs text-white border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-colors">
                    전체 실라버스 다운로드
                </button>
</div>
<div className="space-y-4">

<div className="group border border-white/5 bg-neutral-900/20 rounded-lg overflow-hidden hover:border-white/10 transition-colors">
<details className="w-full">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Week 01</span>
<h4 className="text-base font-medium text-neutral-200">피그마 인터페이스와 기본기 다지기</h4>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 pt-0 text-sm text-neutral-400 border-t border-white/5 mt-2">
<ul className="space-y-2 pt-4 list-disc list-inside marker:text-neutral-600">
<li>벡터 네트워크의 이해와 펜툴 마스터</li>
<li>프레임(Frame) vs 그룹(Group)의 차이점</li>
<li>제약 조건(Constraints)을 활용한 반응형 기초</li>
</ul>
</div>
</details>
</div>

<div className="group border border-white/5 bg-neutral-900/20 rounded-lg overflow-hidden hover:border-white/10 transition-colors">
<details className="w-full">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Week 02</span>
<h4 className="text-base font-medium text-neutral-200">오토 레이아웃 심화 과정</h4>
</div>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
</details>
</div>

<div className="group border border-white/5 bg-neutral-900/20 rounded-lg overflow-hidden hover:border-white/10 transition-colors">
<details className="w-full">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Week 03</span>
<h4 className="text-base font-medium text-neutral-200">컴포넌트와 변수(Variables)</h4>
</div>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
</details>
</div>

<div className="group border border-white/5 bg-neutral-900/20 rounded-lg overflow-hidden hover:border-white/10 transition-colors">
<details className="w-full">
<summary className="flex items-center justify-between p-5 cursor-pointer select-none">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">Week 04</span>
<h4 className="text-base font-medium text-neutral-200">개발 핸드오프와 협업 프로세스</h4>
</div>
<svg className="lucide lucide-plus w-4 h-4 text-neutral-500" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
</details>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto text-center">
<p className="text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Trusted by Designers from</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale">

<span className="text-lg font-semibold tracking-tight">Toss</span>
<span className="text-lg font-semibold tracking-tight">Kakao</span>
<span className="text-lg font-semibold tracking-tight">Naver</span>
<span className="text-lg font-semibold tracking-tight">Line</span>
<span className="text-lg font-semibold tracking-tight">Coupang</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="pricing">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">심플한 요금제</h2>
<p className="text-neutral-400 font-light">평생 소장 가능한 강의와 자료를 합리적인 가격에 만나보세요.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/20 flex flex-col hover:bg-neutral-900/40 transition-colors">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Basic Class</h3>
<p className="text-sm text-neutral-400 mt-1">입문자를 위한 필수 과정</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">₩129,000</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 피그마 기초 강의 20강
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 실습 예제 파일 제공
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check w-4 h-4 text-neutral-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 수강 기간 무제한
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors">
                        시작하기
                    </button>
</div>

<div className="p-8 rounded-2xl border border-purple-500/30 bg-neutral-900/40 flex flex-col relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
                            Master Class
                            <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] uppercase font-bold tracking-wide border border-purple-500/20">Popular</span>
</h3>
<p className="text-sm text-neutral-400 mt-1">취업/이직을 위한 포트폴리오 완성</p>
</div>
<div className="mb-6">
<span className="text-3xl font-medium text-white">₩249,000</span>
<span className="text-sm text-neutral-500 line-through ml-2">₩350,000</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Class 모든 내용 포함
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 심화 프로토타이핑 &amp; 디자인 시스템
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="lucide lucide-check w-4 h-4 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1:1 포트폴리오 피드백 (2회)
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        마스터 클래스 신청하기
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">지금 바로 시작하세요.</h2>
<p className="text-neutral-400 mb-10 font-light">
                더 이상 혼자 고민하지 마세요.체계적인 커리큘럼과 함께 가장 빠르게 성장할 수 있는 길입니다.
            </p>
<div className="flex flex-col items-center gap-4">
<button className="h-12 px-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                    수강 신청하고 바로 학습하기
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-xs text-neutral-500 mt-4">7일 이내 불만족 시 100% 환불 보장</p>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-semibold tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<svg className="lucide lucide-figma w-4 h-4 text-neutral-500" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
                    FIGMA KR
                </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                    실무 중심의 피그마 교육 플랫폼.<br/>
                    디자이너의 성장을 돕습니다.
                </p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">과정 소개</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">커리큘럼</a></li>
<li><a className="hover:text-white transition-colors" href="#">수강 후기</a></li>
<li><a className="hover:text-white transition-colors" href="#">기업 강의 문의</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">리소스</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">블로그</a></li>
<li><a className="hover:text-white transition-colors" href="#">무료 템플릿</a></li>
<li><a className="hover:text-white transition-colors" href="#">단축키 가이드</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">법적 고지</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">이용약관</a></li>
<li><a className="hover:text-white transition-colors" href="#">개인정보처리방침</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-neutral-600">© 2024 Figma KR Master Class. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</footer>


    </>
  );
}
