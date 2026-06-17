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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter text-slate-950">
                FRAME
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-indigo-600 transition-colors" href="#features">기능</a>
<a className="hover:text-indigo-600 transition-colors" href="#solutions">솔루션</a>
<a className="hover:text-indigo-600 transition-colors" href="#pricing">요금제</a>
<a className="hover:text-indigo-600 transition-colors" href="#faq">자주 묻는 질문</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-slate-600 hover:text-slate-900">로그인</button>
<button className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-sm">
                    무료로 시작하기
                </button>
</div>
</div>
</nav>

<section className="pt-40 pb-24 px-6">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium mb-6">
<iconify-icon height="16" icon="solar:star-fall-minimalistic-linear" width="16"></iconify-icon>
<span>새로운 차원의 워크플로우를 경험하세요</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-950 mb-8 leading-[1.1]">
                복잡한 비즈니스 프로세스를<br/>하나의 흐름으로 연결합니다
            </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                데이터 분석부터 협업까지, 팀의 생산성을 극대화하기 위한 가장 세련된 도구입니다. 지금 바로 효율적인 변화를 시작해보세요.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                    무료 체험 시작하기
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-all">
                    데모 예약하기
                </button>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 p-4 shadow-2xl">
<div className="bg-white rounded-xl border border-slate-100 h-[30rem] md:h-[40rem] flex items-center justify-center">
<iconify-icon className="text-slate-200" height="64" icon="solar:monitor-linear" width="64"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-10">Trusted by modern teams worldwide</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50 grayscale">
<div className="text-xl font-semibold text-center tracking-tighter">ALPHAV</div>
<div className="text-xl font-semibold text-center tracking-tighter">NEXUS</div>
<div className="text-xl font-semibold text-center tracking-tighter">QUANTUM</div>
<div className="text-xl font-semibold text-center tracking-tighter">ORBIT</div>
<div className="text-xl font-semibold text-center tracking-tighter">VERTEX</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-4">강력한 기능, 직관적인 사용성</h2>
<p className="text-slate-500 max-w-lg">당신의 업무를 지원하기 위해 설계된 핵심 기능들을 확인해보세요.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950 mb-3">실시간 데이터 분석</h3>
<p className="text-sm text-slate-500 leading-relaxed">복잡한 데이터를 한눈에 파악할 수 있는 시각화 대시보드를 제공합니다. 실시간으로 업데이트되는 지표를 확인하세요.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950 mb-3">팀 협업 최적화</h3>
<p className="text-sm text-slate-500 leading-relaxed">팀원들과 실시간으로 문서를 공유하고 의견을 나눌 수 있습니다. 더 효율적인 커뮤니케이션을 경험하세요.</p>
</div>

<div className="group">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950 mb-3">엔터프라이즈급 보안</h3>
<p className="text-sm text-slate-500 leading-relaxed">최고 수준의 암호화 기술로 데이터를 안전하게 보호합니다. 안심하고 비즈니스에 집중하세요.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row items-center gap-20">
<div className="flex-1">
<span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">Automation</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-950 mt-4 mb-6 leading-tight">반복되는 업무는<br/>자동화 시스템에 맡기세요</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        매일 반복되는 지루한 작업을 자동화 설정 한 번으로 해결할 수 있습니다. 수동 프로세스를 줄이고 창의적인 업무에 더 많은 시간을 투자하세요.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-indigo-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            사용자 맞춤형 워크플로우 엔진
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-indigo-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            타사 서비스와의 유연한 API 연동
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-indigo-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            AI 기반 업무 예측 알림
                        </li>
</ul>
</div>
<div className="flex-1 w-full">
<div className="relative aspect-square bg-white rounded-3xl border border-slate-200 shadow-xl p-8">
<div className="space-y-6">
<div className="h-8 bg-slate-100 rounded-lg w-1/3 animate-pulse"></div>
<div className="h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-6 gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<iconify-icon height="20" icon="solar:notification-lines-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-3 bg-slate-200 rounded-full w-2/3"></div>
<div className="h-2 bg-slate-100 rounded-full w-1/2"></div>
</div>
</div>
<div className="h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-6 gap-4 translate-x-12 opacity-80">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon height="20" icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 space-y-2">
<div className="h-3 bg-slate-200 rounded-full w-2/3"></div>
<div className="h-2 bg-slate-100 rounded-full w-1/2"></div>
</div>
</div>
</div>
<div className="absolute bottom-10 right-10 bg-indigo-600 text-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">자동화 활성화됨</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-slate-950 mb-4">합리적인 요금 플랜</h2>
<p className="text-slate-500">당신의 성장에 맞추어 필요한 요금제를 선택하세요.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
<h3 className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-950">₩0</span>
<span className="text-slate-400 text-sm">/월</span>
</div>
<p className="text-sm text-slate-500 mb-8">개인 프로젝트 및 취미 활동을 위한 시작점</p>
<button className="w-full py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all mb-8">무료로 시작</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            최대 3명의 팀원
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            기본 데이터 분석
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border-2 border-indigo-600 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">Best Choice</div>
<h3 className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wider">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-950">₩29,000</span>
<span className="text-slate-400 text-sm">/월</span>
</div>
<p className="text-sm text-slate-500 mb-8">성장하는 팀을 위한 필수 기능을 모두 담았습니다</p>
<button className="w-full py-3 rounded-xl bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition-all mb-8 shadow-md">지금 구매하기</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-xs text-slate-600 font-medium">
<iconify-icon className="text-indigo-500" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            무제한 팀원 초대
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600 font-medium">
<iconify-icon className="text-indigo-500" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            고급 자동화 도구
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600 font-medium">
<iconify-icon className="text-indigo-500" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            커스텀 도메인 연결
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
<h3 className="text-sm font-semibold text-slate-500 mb-6 uppercase tracking-wider">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-950">별도 문의</span>
</div>
<p className="text-sm text-slate-500 mb-8">대규모 조직을 위한 맞춤형 보안 및 관리 환경</p>
<button className="w-full py-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all mb-8">영업팀에 문의</button>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            24/7 전담 기술 지원
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-slate-400" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
                            SSO 및 SAML 인증 지원
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 text-white px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-16 text-center">자주 묻는 질문</h2>
<div className="space-y-6">
<div className="border-b border-slate-800 pb-6 group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">기존 데이터를 어떻게 이전하나요?</h4>
<iconify-icon className="text-slate-500" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-400 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                        CSV, JSON 등 다양한 형식의 데이터를 간편하게 업로드할 수 있으며, API 연동을 통한 대규모 마이그레이션도 지원합니다.
                    </p>
</div>
<div className="border-b border-slate-800 pb-6 group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">정기 결제 해지는 언제든 가능한가요?</h4>
<iconify-icon className="text-slate-500" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-400 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                        네, 계정 설정 페이지에서 언제든지 정기 결제를 해지하실 수 있으며 별도의 위약금은 발생하지 않습니다.
                    </p>
</div>
<div className="border-b border-slate-800 pb-6 group cursor-pointer">
<div className="flex items-center justify-between mb-2">
<h4 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">모바일 앱도 제공되나요?</h4>
<iconify-icon className="text-slate-500" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<p className="text-sm text-slate-400 leading-relaxed max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                        현재 iOS와 Android를 위한 전용 앱이 제공되고 있으며, 웹 브라우저에서도 동일하게 모바일에 최적화된 경험을 제공합니다.
                    </p>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<div className="text-xl font-semibold tracking-tighter text-slate-950 mb-6">FRAME</div>
<p className="text-sm text-slate-500 leading-relaxed">세상의 모든 워크플로우를 단순하고 아름답게 연결하는 솔루션입니다.</p>
</div>
<div className="space-y-4">
<h5 className="text-xs font-semibold text-slate-950 uppercase tracking-widest">Product</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">기능 가이드</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">릴리즈 노트</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">통합 라이브러리</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-xs font-semibold text-slate-950 uppercase tracking-widest">Company</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">서비스 소개</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">채용 정보</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">블로그</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="text-xs font-semibold text-slate-950 uppercase tracking-widest">Newsletter</h5>
<div className="flex gap-2">
<input className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20" placeholder="이메일 주소" type="text"/>
<button className="bg-slate-900 text-white text-[10px] px-3 py-2 rounded-lg font-medium">구독</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 gap-4">
<p className="text-xs text-slate-400">© 2024 FRAME Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:mailbox-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:user-rounded-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="#"><iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
