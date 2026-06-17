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



// Replace with GA4 or your analytics before deploy
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}



{
"@context":"https://schema.org",
"@type":"SoftwareApplication",
"name":"Scrumble",
"applicationCategory":"BusinessApplication",
"operatingSystem":"Web",
"description":"팀 리더를 위한 체크인, 대시보드, 리포트 자동화로 관리 시간을 절반으로 줄이는 협업 운영 도구.",
"offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}
}



{
"@context":"https://schema.org",
"@type":"FAQPage",
"mainEntity":[
{"@type":"Question","name":"팀원들이 또 써야 하나요?","acceptedAnswer":{"@type":"Answer","text":"기존 툴과 자연스럽게 연동되어 설득 비용이 없습니다."}},
{"@type":"Question","name":"회의 문화와 충돌하지 않나요?","acceptedAnswer":{"@type":"Answer","text":"1분 체크인으로 회의는 더 전략적으로 바뀝니다."}},
{"@type":"Question","name":"데이터 보안은 어떻게 보장하나요?","acceptedAnswer":{"@type":"Answer","text":"전송·저장 암호화, 접근 통제, 삭제 요청 절차를 제공합니다."}},
{"@type":"Question","name":"도입 난이도는 어느 정도인가요?","acceptedAnswer":{"@type":"Answer","text":"기존 워크플로우에 살짝 추가하는 방식으로 빠르게 시작합니다."}},
{"@type":"Question","name":"가격 정책은 어떻게 되나요?","acceptedAnswer":{"@type":"Answer","text":"베타 기간에는 혜택가가 제공되며, 정식 출시 전 안내드립니다."}}
]
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-sm tracking-tight font-semibold">S</span>
</div>
<span className="text-sm text-neutral-300">Scrumble</span>
<span className="mx-2 h-4 w-px bg-white/10"></span>
<span className="text-xs text-neutral-400">관리에서 리더십으로</span>
</div>

<div className="hidden md:flex items-center gap-2">
<div className="text-xs text-neutral-400 mr-2">오디언스</div>
<div className="inline-flex rounded-lg border border-white/10 p-1 bg-white/5">
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white hover:bg-white/10 transition" data-active="true" id="aud-startup">스타트업</button>
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white hover:bg-white/10 transition" id="aud-mid">중견</button>
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white hover:bg-white/10 transition" id="aud-enterprise">대기업</button>
</div>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300 hover:text-white transition" href="#features">기능</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#benefits">이점</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#roi">ROI</a>
<a className="text-sm text-neutral-300 hover:text-white transition" href="#faq">FAQ</a>
<a className="inline-flex items-center gap-2 text-sm bg-[#9747FF] text-white px-3.5 py-2 rounded-md hover:brightness-110 hover:shadow-sm shadow-[#9747FF]/30 transition ring-1 ring-white/10" href="#apply">
<i className="w-4 h-4" data-lucide="rocket"></i>
            클로즈베타테스터 신청하기
          </a>
</nav>
<button aria-label="메뉴 열기" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-white/10 transition ring-1 ring-white/10" id="open-mobile">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden border-t border-white/10" id="mobile-sheet">
<div className="px-4 py-3 flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="text-xs text-neutral-400">오디언스</div>
<div className="ml-auto inline-flex rounded-lg border border-white/10 p-1 bg-white/5">
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white" data-active="true" id="m-aud-startup">스타트업</button>
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white" id="m-aud-mid">중견</button>
<button className="px-3 py-1.5 text-xs rounded-md data-[active=true]:bg-[#9747FF] data-[active=true]:text-white" id="m-aud-enterprise">대기업</button>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<a className="text-sm px-3 py-2 rounded-md hover:bg-white/10" href="#features">기능</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-white/10" href="#benefits">이점</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-white/10" href="#roi">ROI</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-white/10" href="#faq">FAQ</a>
<a className="col-span-2 inline-flex items-center justify-center gap-2 text-sm bg-[#9747FF] text-white px-3 py-2 rounded-md hover:brightness-110 ring-1 ring-white/10" href="#apply">
<i className="w-4 h-4" data-lucide="rocket"></i> 클로즈베타테스터 신청하기
            </a>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative overflow-hidden" id="hero">
<div aria-hidden="true" className="absolute inset-0 opacity-[0.08] pointer-events-none">
<div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#9747FF] blur-[120px]"></div>
<div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-sky-500 blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold text-white">
                오늘도 어김없이... 하루가 끝났나요?
              </h1>
<div className="mt-5">
<div className="relative w-full">
<div className="text-lg sm:text-xl text-neutral-300">
<span className="inline-flex items-center" id="rolling"></span>
</div>
</div>
</div>
<p className="mt-4 text-neutral-300" id="hero-subcopy">
                관리하느라 리더십을 못 쓰는 순간, 팀은 신호를 보냅니다.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-[#9747FF] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:brightness-110 hover:shadow-sm shadow-[#9747FF]/30 transition" href="#apply">
<i className="w-4 h-4" data-lucide="rocket"></i>
                  클로즈베타테스터 신청하기
                </a>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white ring-1 ring-white/10 hover:bg-white/10 transition" id="open-demo">
<i className="w-4 h-4" data-lucide="play"></i>
                  1분 데모 보기
                </button>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-400">
<div className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="shield"></i>
                  SSL 암호화
                </div>
<div className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="check-circle2"></i>
                  개인정보 최소 수집
                </div>
<div className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="clock"></i>
                  2초 롤링 메시지
                </div>
</div>
</div>
<div className="relative">
<div className="rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm shadow-xl">
<div className="aspect-[16/10] rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="팀 협업 보드 미리보기" className="w-full h-full object-cover" fetchpriority="high" loading="eager" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -bottom-6 -right-6 hidden md:block">
<div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-lg">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/10">
<img alt="사용자" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-neutral-300">1분 체크인</div>
<div className="text-[11px] text-neutral-400">보고 대신 신호 포착</div>
</div>
<i className="w-4 h-4 text-emerald-400" data-lucide="signal"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-white/5" id="valuebar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
<div className="inline-flex items-center gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">베타 한정 초대 • 선착순 <span className="font-semibold" id="teamLimit">10</span>팀</span>
</div>
<p className="text-sm text-neutral-200 md:flex-1" id="value-prop">
            Scrumble로 관리 시간을 절반으로 줄이고, 팀 리더 본연의 역할에 집중하세요.
          </p>
<a className="inline-flex items-center gap-2 text-sm bg-[#9747FF] text-white px-4 py-2 rounded-md hover:brightness-110 ring-1 ring-white/10" href="#apply">
<i className="w-4 h-4" data-lucide="rocket"></i>
            클로즈베타테스터 신청하기
          </a>
</div>
</section>

<section className="py-16 md:py-20" id="contrast">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white mb-8">관리 대신 <span className="text-[#9747FF]">전략에</span> / 보고 대신 <span className="text-[#9747FF]">결정에 집중</span></h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="reveal opacity-0 translate-y-4 transition duration-500">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 h-full">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-amber-400" data-lucide="file-warning"></i>
<span className="text-sm text-neutral-300">Before · 관리 과부하</span>
</div>
<div className="relative overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="혼잡한 회의" className="w-full h-48 object-cover blur-[1px] opacity-80" loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<p className="mt-4 text-sm text-neutral-300">상태 확인과 보고에 시간을 소모하고, 중요한 결정은 밀립니다.</p>
</div>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 delay-100">
<div className="rounded-xl border border-white/10 bg-white/5 p-6 h-full">
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-emerald-400" data-lucide="target"></i>
<span className="text-sm text-neutral-300">After · 전략 집중</span>
</div>
<div className="relative overflow-hidden rounded-lg ring-1 ring-white/10">
<img alt="집중과 결정" className="w-full h-48 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<p className="mt-4 text-sm text-neutral-300">신호를 빠르게 포착해 결정을 앞당기고, 팀의 속도를 유지합니다.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">관리가 아니라 리더십을. 팀을 움직이는 본질에 집중하세요.</h2>
<p className="mt-2 text-neutral-400 text-sm">핵심 4가지로 관리 시간을 절반으로.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="alarm-clock"></i>
<span className="text-sm font-medium text-white">1분 체크인</span>
</div>
<button aria-label="도움말" className="tooltip-trigger inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 ring-1 ring-white/10" data-tip="팀원 상태와 업무 상황을 빠르고 자연스럽게 파악">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
</div>
<p className="mt-3 text-sm text-neutral-300">팀원 상태와 업무 상황을 빠르고 자연스럽게 파악</p>
<div className="absolute top-2 right-2 hidden group-hover:block">
<span className="text-[10px] px-2 py-1 rounded bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">어떻게 시간이 절반이 되나요?</span>
</div>
<div className="tooltip hidden absolute -top-2 right-10 z-10 rounded-md bg-neutral-900 px-3 py-2 text-[11px] text-neutral-200 ring-1 ring-white/10 shadow-lg"></div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="check-square"></i>
<span className="text-sm font-medium text-white">투두·체크아웃</span>
</div>
<button className="tooltip-trigger inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 ring-1 ring-white/10" data-tip="완료까지 흐름을 놓치지 않고 안정적으로 관리">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
</div>
<p className="mt-3 text-sm text-neutral-300">업무 완료까지 흐름을 놓치지 않고 안정적으로 관리</p>
<div className="absolute top-2 right-2 hidden group-hover:block">
<span className="text-[10px] px-2 py-1 rounded bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">어떻게 시간이 절반이 되나요?</span>
</div>
<div className="tooltip hidden absolute -top-2 right-10 z-10 rounded-md bg-neutral-900 px-3 py-2 text-[11px] text-neutral-200 ring-1 ring-white/10 shadow-lg"></div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="layout-dashboard"></i>
<span className="text-sm font-medium text-white">팀 대시보드</span>
</div>
<button className="tooltip-trigger inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 ring-1 ring-white/10" data-tip="진척도와 분위기를 한눈에 포착">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
</div>
<p className="mt-3 text-sm text-neutral-300">진척도와 분위기를 한눈에</p>
<div className="absolute top-2 right-2 hidden group-hover:block">
<span className="text-[10px] px-2 py-1 rounded bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">어떻게 시간이 절반이 되나요?</span>
</div>
<div className="tooltip hidden absolute -top-2 right-10 z-10 rounded-md bg-neutral-900 px-3 py-2 text-[11px] text-neutral-200 ring-1 ring-white/10 shadow-lg"></div>
</div>
<div className="group relative rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="file-bar-chart"></i>
<span className="text-sm font-medium text-white">리포트 자동화</span>
</div>
<button className="tooltip-trigger inline-flex items-center justify-center h-7 w-7 rounded-md hover:bg-white/10 ring-1 ring-white/10" data-tip="데이터 기반 인사이트로 1:1 케어·전략적 의사결정">
<i className="w-4 h-4" data-lucide="help-circle"></i>
</button>
</div>
<p className="mt-3 text-sm text-neutral-300">데이터 기반 인사이트로 1:1 케어·전략적 의사결정</p>
<div className="absolute top-2 right-2 hidden group-hover:block">
<span className="text-[10px] px-2 py-1 rounded bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">어떻게 시간이 절반이 되나요?</span>
</div>
<div className="tooltip hidden absolute -top-2 right-10 z-10 rounded-md bg-neutral-900 px-3 py-2 text-[11px] text-neutral-200 ring-1 ring-white/10 shadow-lg"></div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">깊어지는 리더의 시간, 가벼워지는 팀의 움직임.</h2>
<p className="mt-2 text-sm text-neutral-400">문제 한 줄 → 효과 한 줄로 명확하게.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="open-fitcheck">
<i className="w-4 h-4" data-lucide="clipboard-check"></i>
              우리 팀 적합도 30초 체크
            </button>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">
                장황한 회의 → <span className="text-neutral-200">체크인으로 대체</span>
</div>
<p className="mt-2 text-xs text-neutral-400">팀원 <span className="font-semibold">1분</span> 작성, 리더는 대시보드 확인으로 끝</p>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">불투명한 개인 할일 → <span className="text-neutral-200">팀에게 투명하게</span></div>
<p className="mt-2 text-xs text-neutral-400">누가 뭘 하고 있는지 <span className="font-semibold">한눈에</span> 보여요</p>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">추측 기반 관리 → <span className="text-neutral-200">데이터 기반</span></div>
<p className="mt-2 text-xs text-neutral-400">주간/월간 활동 패턴과 완료율을 <span className="font-semibold">객관적으로</span></p>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">케어 타이밍 놓침 → <span className="text-neutral-200">위험 신호 빠른 포착</span></div>
<p className="mt-2 text-xs text-neutral-400">지표로 <span className="font-semibold">즉시 대응</span></p>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">상황 확인 시간 낭비 → <span className="text-neutral-200">초단축</span></div>
<p className="mt-2 text-xs text-neutral-400">대시보드만 보면 <span className="font-semibold">모든 팀원</span>이 보입니다</p>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-500 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="text-sm text-neutral-300">새 툴 설득 부담 → <span className="text-neutral-200">연동으로 제로</span></div>
<p className="mt-2 text-xs text-neutral-400">기존 툴에 <span className="font-semibold">살짝 추가</span>로 시작</p>
</div>
</div>
<div className="mt-6 sm:hidden">
<button className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="open-fitcheck-2">
<i className="w-4 h-4" data-lucide="clipboard-check"></i>
              우리 팀 적합도 30초 체크
            </button>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="story">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">어제와는 다른 리더의 하루를 만드세요.</h2>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-neutral-400" data-lucide="cloud-off"></i>
<span className="text-sm text-neutral-300">Before</span>
</div>
<ul className="space-y-3" id="before-list">
<li className="flex items-start gap-3 text-sm text-neutral-400 filter grayscale transition">
<i className="w-4 h-4 mt-0.5" data-lucide="minus"></i>
                  매일 팀원 상황 확인에 시간 소모
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-400 filter grayscale transition">
<i className="w-4 h-4 mt-0.5" data-lucide="minus"></i>
                  프로젝트 이슈를 늦게 발견
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-400 filter grayscale transition">
<i className="w-4 h-4 mt-0.5" data-lucide="minus"></i>
                  리더십 대신 관리 업무에 갇힘
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-400 filter grayscale transition">
<i className="w-4 h-4 mt-0.5" data-lucide="minus"></i>
                  팀 분위기 파악에 근거 부족
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-400 filter grayscale transition">
<i className="w-4 h-4 mt-0.5" data-lucide="minus"></i>
                  번아웃을 퇴사 통보로서야 알게 됨
                </li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="sun"></i>
<span className="text-sm text-neutral-300">After</span>
</div>
<ul className="space-y-3" id="after-list">
<li className="flex items-start gap-3 text-sm text-neutral-200 opacity-0 translate-y-1 transition">
<i className="w-4 h-4 mt-0.5 text-emerald-400" data-lucide="check"></i>
                  팀 상황을 빠르게 한눈에 파악
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-200 opacity-0 translate-y-1 transition">
<i className="w-4 h-4 mt-0.5 text-emerald-400" data-lucide="check"></i>
                  빠른 이슈 감지와 즉각 대응 가능
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-200 opacity-0 translate-y-1 transition">
<i className="w-4 h-4 mt-0.5 text-emerald-400" data-lucide="check"></i>
                  전략과 팀 케어에 집중하는 리더십 발휘
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-200 opacity-0 translate-y-1 transition">
<i className="w-4 h-4 mt-0.5 text-emerald-400" data-lucide="check"></i>
                  데이터 기반으로 팀 상태와 분위기 관리
                </li>
<li className="flex items-start gap-3 text-sm text-neutral-200 opacity-0 translate-y-1 transition">
<i className="w-4 h-4 mt-0.5 text-emerald-400" data-lucide="check"></i>
                  지속적인 케어로 팀원 번아웃 예방
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="roi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-white">팀의 운영, 더 아무지게. 더 많은 시간을 '진짜 일'에.</h2>
<p className="mt-2 text-sm text-neutral-400">팀 특성에 맞는 ROI를 확인하세요.</p>
</div>
<div className="text-xs text-neutral-500">기본값: <span className="font-medium text-neutral-300" id="roi-default">8명</span></div>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2">
<div className="rounded-xl border border-white/10 bg-white/5">
<div className="flex flex-wrap gap-2 p-2 border-b border-white/10">
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10 data-[active=true]:bg-[#9747FF] data-[active=true]:text-white" data-active="true" data-key="cut">단축</button>
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10" data-key="focus">집중</button>
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10" data-key="improve">향상</button>
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10" data-key="save">절감</button>
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10" data-key="detect">포착</button>
<button className="roi-tab px-3 py-2 text-xs rounded-md hover:bg-white/10" data-key="communicate">소통</button>
</div>
<div className="p-5 space-y-3" id="roi-panels">
<div className="roi-panel" id="panel-cut">
<div className="text-sm text-neutral-200"><span className="font-medium">30분</span> 스탠드업을 <span className="font-medium">1분 체크인</span>으로</div>
<p className="text-xs text-neutral-400">반복 회의 시간을 <span className="font-semibold">최대 80%</span> 단축</p>
</div>
<div className="roi-panel hidden" id="panel-focus">
<div className="text-sm text-neutral-200">확인하느라 DM도, 슬랙 뒤지기도 끝</div>
<p className="text-xs text-neutral-400">금쪽같은 <span className="font-semibold">집중시간 2배</span> 확보</p>
</div>
<div className="roi-panel hidden" id="panel-improve">
<div className="text-sm text-neutral-200">보고를 위한 보고 작업 최소화</div>
<p className="text-xs text-neutral-400">업무 효율 <span className="font-semibold">60%</span> 향상</p>
</div>
<div className="roi-panel hidden" id="panel-save">
<div className="text-sm text-neutral-200">일정 지연 신호를 미리 포착</div>
<p className="text-xs text-neutral-400">프로젝트 예산 <span className="font-semibold">15%</span> 절감</p>
</div>
<div className="roi-panel hidden" id="panel-detect">
<div className="text-sm text-neutral-200">팀원의 번아웃 조기 감지</div>
<p className="text-xs text-neutral-400">팀을 잃지 않는 가장 빠른 방법</p>
</div>
<div className="roi-panel hidden" id="panel-communicate">
<div className="text-sm text-neutral-200">실시간 컨디션으로 자연스러운 소통</div>
<p className="text-xs text-neutral-400">팀 에너지 개선</p>
</div>
</div>
<div className="px-5 pb-5 text-[11px] text-neutral-500">
                  *가정에 따른 추정치이며 팀 특성에 따라 달라질 수 있습니다.
                </div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="calculator"></i>
<div className="text-sm font-medium text-white">미니 계산기</div>
</div>
<label className="block text-xs text-neutral-400 mb-1">팀원 수</label>
<input className="w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="teamSize" max="50" min="2" type="number" value="8"/>
<label className="block mt-4 text-xs text-neutral-400 mb-1">시간당 인건비(팀 평균, 원)</label>
<input className="w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="hourlyCost" min="10000" step="1000" type="number" value="50000"/>
<p className="mt-3 text-[11px] text-neutral-500">기본 가정: 매일 30분 스탠드업, 주 5일, 연 48주, <span className="font-medium">80%</span> 시간 단축</p>
<div className="mt-4 p-4 rounded-lg bg-neutral-900 ring-1 ring-white/10">
<div className="text-xs text-neutral-400">연간 추정 절감액</div>
<div className="text-2xl tracking-tight font-semibold text-white mt-1" id="saving">₩0</div>
</div>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 text-sm bg-[#9747FF] text-white px-4 py-2 rounded-md hover:brightness-110 ring-1 ring-white/10" id="apply-cta-1">
<i className="w-4 h-4" data-lucide="rocket"></i>
                클로즈베타테스터 신청하기
              </button>
</div>
</div>
</div>
</section>

<section className="py-14 border-t border-white/10" id="trust">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="award"></i>
<h3 className="text-lg tracking-tight font-semibold">베타 혜택</h3>
</div>
<div className="grid sm:grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-sm text-neutral-300">우선 온보딩</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-sm text-neutral-300">전용 채널</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-sm text-neutral-300">가격 혜택</div>
</div>
<div className="mt-10">
<div className="text-xs text-neutral-500 mb-3">함께하는 팀</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">

<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">AL</div>
<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">BN</div>
<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">CX</div>
<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">DV</div>
<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">EP</div>
<div className="h-12 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-sm tracking-tight">FO</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="messages-square"></i>
<h3 className="text-2xl tracking-tight font-semibold">FAQ</h3>
</div>
<div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/5">

<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm text-neutral-200">
                팀원들이 또 써야 하나요?
                <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">기존 툴과 자연스럽게 연동되어 설득 비용이 없습니다.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm text-neutral-200">
                우리 팀은 회의 문화가 중요한데요?
                <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">1분 체크인으로 회의는 더 전략적으로 바뀝니다.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm text-neutral-200">
                데이터 보안이 걱정돼요.
                <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">전송·저장 암호화, 접근 통제, 삭제 요청 절차를 제공합니다.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm text-neutral-200">
                도입 난이도는 어느 정도인가요?
                <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">기존 워크플로우에 살짝 추가하는 방식으로 빠르게 시작합니다.</p>
</details>
<details className="group p-5">
<summary className="flex cursor-pointer items-center justify-between text-sm text-neutral-200">
                가격 가이드는 어떻게 되나요?
                <i className="w-4 h-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-400">베타 기간 혜택가 제공 후, 정식 출시 전에 공지합니다.</p>
</details>
</div>
</div>
</section>

<section className="py-16 md:py-20 border-t border-white/10" id="apply">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
<div className="flex items-start md:items-center md:justify-between gap-4">
<div>
<h3 className="text-2xl tracking-tight font-semibold text-white">마지막 한 걸음이면 충분합니다.</h3>
<p className="mt-1 text-sm text-neutral-300">베타 참여 혜택: 우선 온보딩 · 전용 채널 · 가격 혜택</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-[#9747FF]/20 text-[#9747FF] ring-1 ring-[#9747FF]/30">베타 한정 초대 • 선착순 <span className="font-semibold" id="teamLimit2">10</span>팀</span>
</div>
<div className="mt-6 grid md:grid-cols-2 gap-6">
<div className="space-y-4">
<div>
<label className="text-xs text-neutral-400" htmlFor="email">이메일<span className="text-[#9747FF] ml-1">*</span></label>
<input className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="email" placeholder="you@company.com" type="email"/>
<p className="mt-1 text-xs text-amber-400 hidden" id="emailError">유효한 이메일을 입력해 주세요.</p>
</div>
<div>
<label className="text-xs text-neutral-400" htmlFor="teamSizeSelect">팀 규모<span className="text-[#9747FF] ml-1">*</span></label>
<select className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="teamSizeSelect">
<option value="">선택하세요</option>
<option value="1-5">1-5명</option>
<option value="6-10">6-10명</option>
<option value="11-20">11-20명</option>
<option value="21-50">21-50명</option>
<option value="51+">51명 이상</option>
</select>
<p className="mt-1 text-xs text-amber-400 hidden" id="teamError">팀 규모를 선택해 주세요.</p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="text-xs text-neutral-400" htmlFor="org">회사/팀명 (선택)</label>
<input className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="org" placeholder="회사 또는 팀명" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400" htmlFor="tools">현재 사용하는 툴 (선택)</label>
<input className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#9747FF] text-neutral-100" id="tools" placeholder="예: Jira, Notion, Slack" type="text"/>
</div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs text-neutral-500">신용카드 불필요 · 언제든 철회 가능 · 개인정보 최소 수집</p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm bg-[#9747FF] text-white px-4 py-2 rounded-md hover:brightness-110 ring-1 ring-white/10" id="apply-submit">
<i className="w-4 h-4" data-lucide="rocket"></i>
                  클로즈베타테스터 신청하기
                </button>
<div className="hidden text-sm text-neutral-300 inline-flex items-center gap-2" id="apply-loading">
<i className="w-4 h-4 animate-spin" data-lucide="loader-2"></i> 전송 중...
                </div>
</div>
</div>
<div className="hidden mt-6 p-4 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 text-sm text-emerald-200" id="apply-success">
              감사합니다! 베타 온보딩 대기 리스트에 등록되었습니다. 곧 메일로 안내드릴게요.
              <div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20" id="share-link">
<i className="w-4 h-4" data-lucide="share-2"></i> 링크 공유
                </button>
<a className="text-xs text-neutral-300 hover:text-white" href="#hero">처음으로</a>
</div>
</div>
<div className="hidden mt-6 p-4 rounded-lg bg-amber-500/10 ring-1 ring-amber-500/30 text-sm text-amber-200" id="apply-error">
              제출에 실패했어요. 잠시 후 다시 시도해 주세요. <a className="underline" href="mailto:hello@example.com">hello@example.com</a>
<button className="ml-3 underline" id="retry">재시도</button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="text-sm text-neutral-500">
            © <span id="year"></span> Scrumble. All rights reserved.
          </div>
<div className="flex items-center gap-4 text-sm">
<a className="text-neutral-400 hover:text-white" href="#">개인정보처리방침</a>
<a className="text-neutral-400 hover:text-white" href="#">보안</a>
<a className="text-neutral-400 hover:text-white" href="#">문의</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-3 inset-x-0 z-[60] px-3 opacity-0 pointer-events-none transition" id="sticky-cta">
<div className="max-w-3xl mx-auto rounded-xl bg-neutral-900/95 ring-1 ring-white/10 shadow-xl px-4 py-3 flex items-center justify-between gap-3">
<div className="text-sm text-neutral-200 flex items-center gap-2">
<i className="w-4 h-4 text-[#9747FF]" data-lucide="sparkles"></i>
        지금 신청하고 우선 온보딩을 받으세요.
      </div>
<a className="inline-flex items-center gap-2 text-sm bg-[#9747FF] text-white px-4 py-2 rounded-md hover:brightness-110 ring-1 ring-white/10" href="#apply">
<i className="w-4 h-4" data-lucide="rocket"></i> 클로즈베타테스터 신청하기
      </a>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="demo-modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative max-w-3xl mx-auto mt-24 rounded-2xl bg-neutral-950 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2 text-sm">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="play-circle"></i>
          1분 데모
        </div>
<button className="h-8 w-8 rounded-md hover:bg-white/10 inline-flex items-center justify-center" id="close-demo">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4">
<div className="aspect-video rounded-lg overflow-hidden ring-1 ring-white/10">
<video className="w-full h-full" controls="" poster="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://cdn.coverr.co/videos/coverr-working-on-laptop-6595/1080p.mp4" type="video/mp4"/>
</video>
</div>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<img alt="스크린샷 1" className="rounded-lg ring-1 ring-white/10" loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="스크린샷 2" className="rounded-lg ring-1 ring-white/10" loading="lazy" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="스크린샷 3" className="rounded-lg ring-1 ring-white/10" loading="lazy" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="fit-modal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative max-w-lg mx-auto mt-28 rounded-2xl bg-neutral-950 ring-1 ring-white/10 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2 text-sm">
<i className="w-5 h-5 text-[#9747FF]" data-lucide="clipboard-check"></i>
          30초 적합도 체크
        </div>
<button className="h-8 w-8 rounded-md hover:bg-white/10 inline-flex items-center justify-center" id="close-fit">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="text-xs text-neutral-400">현재 사용하는 툴</label>
<input className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-[#9747FF]" id="fit-tools" placeholder="예: Jira, Notion, Slack" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">평균 회의 시간(하루, 분)</label>
<input className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-[#9747FF]" id="fit-meeting" min="0" type="number" value="30"/>
</div>
<div>
<label className="text-xs text-neutral-400">팀 규모</label>
<select className="mt-1 w-full text-sm px-3 py-2 bg-neutral-900 rounded-md ring-1 ring-white/10 focus:ring-2 focus:ring-[#9747FF]" id="fit-size">
<option value="">선택하세요</option>
<option>1-5명</option>
</select></div></div></div></div>
    </>
  );
}
