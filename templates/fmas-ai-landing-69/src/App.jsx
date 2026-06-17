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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-neutral-800 to-neutral-700 flex items-center justify-center border border-white/10 shadow-inner">
<span className="text-white font-semibold text-xs tracking-tighter">FM</span>
</div>
<span className="text-neutral-200 font-medium tracking-tight text-sm">FMAS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#agents">에이전트</a>
<a className="hover:text-white transition-colors duration-200" href="#workflow">워크플로우</a>
<a className="hover:text-white transition-colors duration-200" href="#security">보안</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">요금제</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white transition-colors hidden sm:block" href="#">로그인</a>
<a className="text-sm font-medium text-neutral-950 bg-white px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    데모 요청
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">시스템 v2.0 라이브</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                기관급 수준의 <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">멀티 에이전트 분석.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                특화된 AI 에이전트 스웜을 조율하여 시장을 분석하고, 리스크를 평가하며, 포트폴리오를 실시간으로 최적화하세요. 환각 없는 순수한 데이터.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-all flex items-center gap-2">
                    분석 시작
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-transparent border border-neutral-800 text-neutral-300 font-medium text-sm hover:border-neutral-600 hover:text-white transition-all flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="16"></iconify-icon>
                    시뮬레이션 보기
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative rounded-xl border border-white/10 bg-neutral-900/90 backdrop-blur-xl overflow-hidden shadow-2xl">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="ml-auto flex items-center gap-3 text-xs text-neutral-500 font-mono">
<span className="flex items-center gap-1"><iconify-icon icon="lucide:cpu" width="12"></iconify-icon> 에이전트_스웜_활성</span>
<span className="text-emerald-500">연결됨</span>
</div>
</div>
<div className="flex flex-col md:flex-row h-[500px]">

<div className="w-full md:w-64 border-r border-white/5 p-4 bg-neutral-950/50">
<div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">활성 에이전트</div>

<div className="p-3 mb-3 rounded border border-emerald-500/20 bg-emerald-500/5 flex items-start gap-3">
<div className="mt-0.5 text-emerald-400">
<iconify-icon icon="lucide:bar-chart-2" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-emerald-100">매크로 분석가</div>
<div className="text-[10px] text-emerald-400/70 mt-1">인플레이션 데이터 처리 중...</div>
</div>
</div>

<div className="p-3 mb-3 rounded border border-white/5 bg-white/5 flex items-start gap-3 opacity-60">
<div className="mt-0.5 text-neutral-400">
<iconify-icon icon="lucide:newspaper" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-neutral-300">감성 분석 봇</div>
<div className="text-[10px] text-neutral-500 mt-1">대기 중</div>
</div>
</div>

<div className="p-3 mb-3 rounded border border-indigo-500/20 bg-indigo-500/5 flex items-start gap-3">
<div className="mt-0.5 text-indigo-400">
<iconify-icon icon="lucide:shield-alert" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-indigo-100">리스크 관리자</div>
<div className="text-[10px] text-indigo-400/70 mt-1">리밸런싱 중...</div>
</div>
</div>
</div>

<div className="flex-1 p-6 relative">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white text-lg font-medium tracking-tight">포트폴리오 Alpha_v4</h3>
<p className="text-xs text-neutral-500 font-mono mt-1">최종 업데이트: 14ms 전</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-neutral-400">1H</span>
<span className="px-2 py-1 rounded border border-white/10 bg-neutral-800 text-xs text-white">1D</span>
<span className="px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-neutral-400">1W</span>
</div>
</div>

<div className="relative h-64 w-full flex items-end gap-1 overflow-hidden opacity-90">

<svg className="w-full h-full absolute bottom-0 left-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,35 Q10,32 20,25 T40,20 T60,28 T80,15 T100,5 V40 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,35 Q10,32 20,25 T40,20 T60,28 T80,15 T100,5" fill="none" stroke="#10b981" strokeWidth="0.5" vector-effect="non-scaling-stroke"></path>

<circle className="animate-pulse" cx="40" cy="20" fill="#10b981" r="1"></circle>
<circle cx="80" cy="15" fill="#fff" r="1"></circle>
</svg>

<div className="absolute inset-0 border-t border-b border-white/5 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>
</div>

<div className="absolute top-24 right-10 glass-panel p-4 rounded-lg w-64 animate-float">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-400" icon="lucide:sparkles" width="14"></iconify-icon>
<span className="text-xs font-medium text-white">AI 인사이트</span>
</div>
<p className="text-[11px] text-neutral-400 leading-relaxed">
                                기술 섹터 변동성 감지됨. 리스크 에이전트가 단기 풋 옵션을 통한 헤징을 제안합니다.
                            </p>
<div className="mt-3 flex gap-2">
<button className="flex-1 bg-white text-neutral-950 text-[10px] font-medium py-1.5 rounded hover:bg-neutral-200">실행</button>
<button className="flex-1 border border-white/10 text-neutral-300 text-[10px] font-medium py-1.5 rounded hover:bg-white/5">무시</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="agents">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">스웜 아키텍처</h2>
<p className="text-neutral-400 max-w-xl">각 에이전트는 특정 도메인 지식과 도구를 갖춘 격리된 LLM 인스턴스로, 보안 버스를 통해 통신합니다.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-blue-400" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">탐색 에이전트</h3>
<p className="text-sm text-neutral-500 leading-relaxed">초당 50,000개 이상의 티커와 뉴스 소스를 스캔하여 부상하는 패턴을 식별합니다.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="lucide:calculator" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">퀀트 에이전트</h3>
<p className="text-sm text-neutral-500 leading-relaxed">통계적 차익거래 분석을 수행하고 전략을 즉시 백테스트합니다.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-orange-400" icon="lucide:skull" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">리스크 에이전트</h3>
<p className="text-sm text-neutral-500 leading-relaxed">가설을 깨뜨리려는 적대적 모델입니다. VaR 및 꼬리 위험(Tail Risk)을 계산합니다.</p>
</div>

<div className="group p-6 rounded-xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:gavel" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">실행 에이전트</h3>
<p className="text-sm text-neutral-500 leading-relaxed">슬리피지와 거래 비용을 최소화하기 위해 주문 라우팅을 최적화합니다.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
<div className="flex-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">에이전트에 대한 완벽한 제어</h2>
<p className="text-neutral-400 mb-8 text-lg font-light">스웜의 파라미터를 미세 조정하세요. 리스크 허용 범위, 자산 클래스, 데이터 소스를 정밀하게 정의할 수 있습니다.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        에이전트별 사용자 지정 가능한 LLM 온도
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        API를 통한 독점 데이터 세트 연결
                    </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        휴먼 인 더 루프(Human-in-the-loop) 승인 워크플로우
                    </li>
</ul>
<button className="mt-8 text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors text-sm font-medium">
                    문서 읽기
                </button>
</div>
<div className="flex-1 w-full max-w-md">
<div className="glass-panel p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<span className="text-sm font-medium text-white">에이전트 구성</span>
<iconify-icon className="text-neutral-500" icon="lucide:sliders-horizontal" width="16"></iconify-icon>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-neutral-400">리스크 허용 범위</span>
<span className="text-white">보수적</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-white w-1/3 rounded-full"></div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">공매도 활성화</span>
<div className="w-10 h-5 bg-neutral-800 rounded-full relative cursor-pointer border border-white/10">
<div className="w-3 h-3 bg-neutral-500 rounded-full absolute top-1 left-1"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">감성 분석</span>
<div className="w-10 h-5 bg-emerald-500/20 rounded-full relative cursor-pointer border border-emerald-500/50">
<div className="w-3 h-3 bg-emerald-400 rounded-full absolute top-1 right-1"></div>
</div>
</div>

<div className="space-y-3 pt-4 border-t border-white/5">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-neutral-700 rounded bg-transparent checked:bg-neutral-700 transition-colors" type="checkbox"/>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300">암호화폐 시장</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox appearance-none w-4 h-4 border border-neutral-700 rounded bg-transparent checked:bg-neutral-700 transition-colors" type="checkbox"/>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300">주식 (미국)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox appearance-none w-4 h-4 border border-neutral-700 rounded bg-transparent checked:bg-neutral-700 transition-colors" type="checkbox"/>
<span className="text-xs text-neutral-400 group-hover:text-neutral-300">외환 (Forex)</span>
</label>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<span className="text-white font-semibold text-[10px] tracking-tighter">FM</span>
</div>
<span className="text-neutral-200 font-medium tracking-tight text-sm">FMAS</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">
                    차세대 퀀트 기업을 위한 고급 AI 기반 금융 분석 인프라.
                </p>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">개인정보처리방침</a>
<a className="hover:text-white transition-colors" href="#">이용약관</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 text-[10px] text-neutral-600">
            © 2024 FMAS Inc. 모든 시스템 정상 작동 중.
        </div>
</footer>

    </>
  );
}
