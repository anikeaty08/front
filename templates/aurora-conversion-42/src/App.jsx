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
      

<nav className="fixed top-0 z-50 w-full border-b bg-[#05050A]/80 backdrop-blur-md border-white/5">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tight" href="#">
                AURORA
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="transition-colors hover:text-white" href="#process">프로세스</a>
<a className="transition-colors hover:text-white" href="#portfolio">포트폴리오</a>
<a className="transition-colors hover:text-white" href="#pricing">가격안내</a>
<a className="transition-colors hover:text-white" href="#faq">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium transition-all border bg-white/10 text-white hover:bg-white/20 border-white/10" href="#contact">
                무료 진단 받기
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 blur-[120px] rounded-full pointer-events-none bg-violet-600/20"></div>
<div className="container text-center z-10 mr-auto ml-auto pr-6 pl-6 relative">
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
                예쁜 홈페이지는 그만,<br className=""/> <span className="aurora-text">팔리는 사이트</span>를 만듭니다
            </h1>
<p className="mx-auto max-w-2xl text-lg md:text-xl mb-10 leading-relaxed font-light text-slate-400">
                고객의 심리를 꿰뚫는 설계로 단순 방문자를 구매자로 전환합니다.<br className="hidden md:block"/>
                심리학 기반의 전환 최적화 웹사이트를 경험해보세요.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<a className="h-12 px-8 rounded-full text-[#05050A] font-semibold text-sm flex items-center gap-2 transition-colors bg-white hover:bg-slate-200" href="#contact">
                    무료 진단 받기
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center gap-2 transition-colors text-sm font-medium h-12 border rounded-full pr-8 pl-8 hover:bg-white/10 text-white bg-white/5 border-white/10" href="#portfolio">
                    포트폴리오 보기
                </a>
</div>

<div className="flex flex-wrap gap-8 md:gap-16 border-white/5 border-t pt-10 gap-x-8 gap-y-8 justify-center">
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight text-white">150+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">제작 프로젝트</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">320%</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">평균 문의 증가율</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">98%</p>
<p className="text-xs text-slate-500 uppercase tracking-wider mt-1">고객 만족도</p>
</div>
</div>
</div>
</section>

<section className="bg-[#080911] pt-24 pb-24">
<div className="container mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight mb-4">
                    "수천만 원 들여 리뉴얼했는데<br/>왜 문의가 늘지 않을까요?"
                </h2>
<p className="font-light text-slate-400">
                    대부분의 웹사이트가 실패하는 이유는 디자인이 부족해서가 아닙니다.<br/>
<span className="text-violet-400">설득의 구조</span>가 없기 때문입니다.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="hover:border-red-500/30 transition-colors group border rounded-2xl pt-8 pr-8 pb-8 pl-8 border-white/5">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-red-400">
<iconify-icon height="24" icon="solar:gallery-remove-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-white">빛 좋은 개살구</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        화려한 인터랙션과 디자인에만 치중하여 정작 고객이 원하는 정보는 찾기 힘든 구조입니다.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-red-500/30 transition-colors group border-white/5">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-red-400">
<iconify-icon icon="solar:user-block-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">고객 심리 부재</h3>
<p className="leading-relaxed text-sm text-slate-400">
                        공급자가 하고 싶은 말만 나열하고, 고객이 듣고 싶은 해결책은 제시하지 않습니다.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border hover:border-red-500/30 transition-colors group border-white/5">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-red-400">
<iconify-icon icon="solar:routing-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3 text-white">전환 장치 없음</h3>
<p className="text-sm leading-relaxed text-slate-400">
                        고객의 행동을 유도하는 CTA(Call To Action)가 전략적으로 배치되지 않아 이탈이 발생합니다.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row gap-x-16 gap-y-16 items-center">
<div className="md:w-1/2 w-full">
<div className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-xs font-medium mb-6 text-violet-400">
                        AURORA SOLUTION
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                        공장형 템플릿과는<br/>비교를 거부합니다
                    </h2>
<p className="mb-8 font-light leading-relaxed text-slate-400">
                        Aurora는 단순 에이전시가 아닙니다. 심리학과 데이터를 기반으로 비즈니스 성장을 설계하는 파트너입니다.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-b to-transparent border flex items-center justify-center from-white/10 border-white/10 text-violet-400">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium mb-1 text-white">압도적 몰입감</h4>
<p className="text-sm text-slate-500">3초 안에 고객의 시선을 사로잡아 이탈을 방지하는 첫인상을 설계합니다.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-b to-transparent border flex items-center justify-center from-white/10 border-white/10 text-violet-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium mb-1 text-white">설득의 심리학</h4>
<p className="text-sm text-slate-500">행동 경제학 원리를 적용한 카피라이팅과 레이아웃으로 신뢰를 구축합니다.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-b to-transparent border flex items-center justify-center from-white/10 border-white/10 text-violet-400">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium mb-1 text-white">확실한 성과</h4>
<p className="text-sm text-slate-500">단순 방문을 넘어 실제 문의와 매출로 이어지는 전환 퍼널을 구축합니다.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">

<div className="relative rounded-2xl border bg-[#0F1018] p-6 shadow-2xl overflow-hidden border-white/10">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-violet-500/20 blur-[80px]"></div>
<div className="flex items-center justify-between mb-8 border-b pb-4 border-white/5">
<span className="text-sm text-slate-500">Conversion Rate</span>
<span className="text-sm font-medium flex items-center gap-1 text-green-400">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon> +312%
                            </span>
</div>
<div className="space-y-3">
<div className="h-2 rounded-full w-3/4 bg-white/5"></div>
<div className="h-2 rounded-full w-1/2 bg-white/5"></div>
<div className="h-32 bg-gradient-to-tr from-violet-500/10 to-indigo-500/10 rounded-lg mt-4 border flex items-center justify-center relative overflow-hidden group border-white/5">
<div className="absolute inset-0 bg-violet-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="text-sm z-10 font-medium tracking-widest text-white/40">VISUAL HIERARCHY</span>
</div>
<div className="flex gap-3 mt-4">
<div className="h-10 flex-1 rounded-md bg-white/10"></div>
<div className="h-10 w-24 rounded-md shadow-[0_0_15px_rgba(124,58,237,0.3)] bg-violet-600"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080911]" id="portfolio">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2 text-white">Selected Work</h2>
<p className="text-sm text-slate-400">심리학 설계가 적용된 실제 성공 사례를 확인하세요.</p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-medium text-violet-300">전체</button>
<button className="px-4 py-2 rounded-full border text-xs font-medium border-white/10 text-slate-400 hover:text-white hover:border-white/20">SaaS</button>
<button className="px-4 py-2 rounded-full border text-xs font-medium border-white/10 text-slate-400 hover:text-white hover:border-white/20">E-Commerce</button>
<button className="px-4 py-2 rounded-full border text-xs font-medium border-white/10 text-slate-400 hover:text-white hover:border-white/20">Service</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border mb-4 bg-slate-800 border-white/5">
<img alt="Fintech Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-100 from-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-black">FINTECH</span>
</div>
<div className="font-medium text-lg text-white">PayFlow 리브랜딩</div>
</div>
</div>
<div className="flex justify-between items-center border-t pt-3 border-white/10">
<p className="text-slate-500 text-xs">문의 전환율 <span className="text-green-400">+240%</span></p>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border mb-4 bg-slate-800 border-white/5">
<img alt="SaaS Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-100 from-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-black">SaaS</span>
</div>
<div className="font-medium text-lg text-white">TaskMaster 랜딩페이지</div>
</div>
</div>
<div className="flex justify-between items-center border-t pt-3 border-white/10">
<p className="text-slate-500 text-xs">회원가입률 <span className="text-green-400">+180%</span></p>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border mb-4 bg-slate-800 border-white/5">
<img alt="Commerce Project" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-100 from-black/80"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white text-black">COMMERCE</span>
</div>
<div className="font-medium text-lg text-white">Mono Shop 자사몰</div>
</div>
</div>
<div className="flex justify-between items-center border-t pt-3 border-white/10">
<p className="text-slate-500 text-xs">매출 증대 <span className="text-green-400">+300%</span></p>
<iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="process">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Proven Process</h2>
<p className="text-slate-400">데이터와 심리학에 기반한 체계적인 5단계 프로세스</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-white/10"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="group md:bg-transparent md:p-0 md:border-none bg-[#05050A] border rounded-xl pt-6 pr-6 pb-6 pl-6 relative border-white/5">
<div className="w-12 h-12 mx-auto rounded-full bg-[#0F1018] border flex items-center justify-center mb-4 shadow-[0_0_0_8px_#05050A] group-hover:border-violet-500 transition-colors border-white/10 text-white">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<h4 className="font-medium mb-1 text-sm text-white">Discovery</h4>
<p className="text-xs text-slate-500">비즈니스 &amp; 타겟 분석</p>
</div>
</div>

<div className="group relative bg-[#05050A] md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-white/5">
<div className="w-12 h-12 mx-auto rounded-full bg-[#0F1018] border flex items-center justify-center mb-4 shadow-[0_0_0_8px_#05050A] group-hover:border-violet-500 transition-colors border-white/10 text-white">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<h4 className="font-medium mb-1 text-sm text-white">Strategy</h4>
<p className="text-xs text-slate-500">심리학 기반 설계</p>
</div>
</div>

<div className="group relative bg-[#05050A] md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-white/5">
<div className="w-12 h-12 mx-auto rounded-full bg-[#0F1018] border flex items-center justify-center mb-4 shadow-[0_0_0_8px_#05050A] group-hover:border-violet-500 transition-colors border-white/10 text-white">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<h4 className="font-medium mb-1 text-sm text-white">Design</h4>
<p className="text-xs text-slate-500">몰입감 있는 비주얼</p>
</div>
</div>

<div className="group relative bg-[#05050A] md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-white/5">
<div className="w-12 h-12 mx-auto rounded-full bg-[#0F1018] border flex items-center justify-center mb-4 shadow-[0_0_0_8px_#05050A] group-hover:border-violet-500 transition-colors border-white/10 text-white">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<h4 className="font-medium mb-1 text-sm text-white">Dev</h4>
<p className="text-xs text-slate-500">최적화 개발</p>
</div>
</div>

<div className="group relative bg-[#05050A] md:bg-transparent p-6 md:p-0 rounded-xl border md:border-none border-white/5">
<div className="w-12 h-12 mx-auto rounded-full bg-[#0F1018] border flex items-center justify-center mb-4 shadow-[0_0_0_8px_#05050A] group-hover:border-violet-500 transition-colors border-white/10 text-white">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div className="text-center">
<h4 className="font-medium mb-1 text-sm text-white">Launch</h4>
<p className="text-xs text-slate-500">런칭 및 데이터 분석</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080911] border-y border-white/5">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-[#05050A] border relative border-white/5">
<iconify-icon className="text-violet-500/20 text-5xl absolute top-6 right-6" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="mb-6 leading-relaxed text-slate-300">"단순히 예쁜게 아니라 비즈니스 구조를 이해하고 만들어주셨습니다. 리뉴얼 후 문의량이 정확히 3배 늘었습니다. 투자한 비용이 전혀 아깝지 않습니다."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="font-medium text-sm text-white">김민수 대표</p>
<p className="text-slate-500 text-xs">스타트업 A사</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#05050A] border relative border-white/5">
<iconify-icon className="text-violet-500/20 text-5xl absolute top-6 right-6" icon="solar:quote-up-square-linear"></iconify-icon>
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="mb-6 leading-relaxed text-slate-300">"다른 에이전시와 다르게 심리학적 접근이 인상 깊었습니다. 고객이 왜 이탈하는지 명확히 진단해주셨고, 결과로 증명했습니다."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700"></div>
<div>
<p className="font-medium text-sm text-white">이영희 마케터</p>
<p className="text-slate-500 text-xs">교육 플랫폼 B사</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute top-0 right-0 w-full max-w-2xl h-96 blur-[100px] pointer-events-none bg-indigo-600/10"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    매달 <span className="text-violet-400">₩500만</span> 매출 기회,<br/>놓치고 계신가요?
                </h2>
<p className="max-w-xl mx-auto text-slate-400">
                    전환율 1% 차이가 연 매출 ₩6,000만 이상의 차이를 만듭니다.<br/>
                    합리적인 투자로 잃고 있는 매출을 되찾으세요.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

<div className="rounded-2xl border bg-[#0F1018] p-8 flex flex-col border-white/10">
<div className="mb-6">
<h3 className="font-medium text-lg text-white">Landing</h3>
<div className="mt-4 flex items-baseline text-white">
<span className="text-3xl font-semibold tracking-tight">₩99만~</span>
</div>
<p className="mt-2 text-sm text-slate-500">제품 런칭, 이벤트 페이지용</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 반응형 원페이지
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 기본 SEO 설정
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 문의 폼 연동
                        </li>
</ul>
<a className="w-full block text-center rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors border-white/10 bg-white/5 text-white hover:bg-white/10" href="#contact">
                        문의하기
                    </a>
</div>

<div className="relative rounded-2xl border border-violet-500 bg-[#13141F] p-8 flex flex-col shadow-[0_0_30px_rgba(124,58,237,0.1)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-violet-600 text-white">
                        Best Choice
                    </div>
<div className="mb-6">
<h3 className="font-medium text-lg text-white">Business</h3>
<div className="mt-4 flex items-baseline text-white">
<span className="text-3xl font-semibold tracking-tight">₩199만~</span>
</div>
<p className="mt-2 text-sm text-slate-400">고객 68%가 선택한 표준 패키지</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> 5페이지 내외 구성
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> 상세페이지 기획/디자인
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-violet-500" icon="solar:check-circle-bold"></iconify-icon> CMS(관리자) 기능
                        </li>
</ul>
<a className="w-full block text-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors bg-white text-black hover:bg-slate-200" href="#contact">
                        지금 시작하기
                    </a>
</div>

<div className="rounded-2xl border bg-[#0F1018] p-8 flex flex-col border-white/10">
<div className="mb-6">
<h3 className="font-medium text-lg text-white">Growth</h3>
<div className="mt-4 flex items-baseline text-white">
<span className="text-3xl font-semibold tracking-tight">₩499만~</span>
</div>
<p className="mt-2 text-sm text-slate-500">본격적인 성장을 위한 기업용</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 맞춤형 기능 개발
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 브랜드 아이덴티티 심화
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon> 1개월 유지보수 무료
                        </li>
</ul>
<a className="w-full block text-center rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors border-white/10 bg-white/5 text-white hover:bg-white/10" href="#contact">
                        별도 문의
                    </a>
</div>
</div>

<div className="max-w-3xl mx-auto mt-12 pt-8 border-t text-center border-white/5">
<p className="text-sm text-slate-400">Enterprise(대규모 프로젝트)는 별도 견적으로 진행됩니다. <br className="md:hidden"/>지금 문의주시면 <span className="font-semibold text-white">₩47만 상당의 기획 진단</span>을 무료로 해드립니다.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#080911]" id="faq">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center text-white">FAQ</h2>
<div className="space-y-4">
<details className="group bg-[#05050A] rounded-xl border open:border-violet-500/30 transition-all border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">제작 기간은 얼마나 걸리나요?</span>
<span className="transition-transform group-open:rotate-180 text-violet-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        프로젝트 규모에 따라 다르지만, 일반적으로 Landing 패키지는 1-2주, Business 패키지는 3-4주 정도 소요됩니다. 기획 단계에서 정확한 일정을 안내해 드립니다.
                    </div>
</details>
<details className="group bg-[#05050A] rounded-xl border open:border-violet-500/30 transition-all border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">수정은 몇 번까지 가능한가요?</span>
<span className="transition-transform group-open:rotate-180 text-violet-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        각 단계(기획, 디자인, 개발) 별로 2회의 무료 수정을 제공해 드립니다. 사전에 철저한 기획을 통해 불필요한 수정을 최소화합니다.
                    </div>
</details>
<details className="group bg-[#05050A] rounded-xl border open:border-violet-500/30 transition-all border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">기존 사이트 리뉴얼도 가능한가요?</span>
<span className="transition-transform group-open:rotate-180 text-violet-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        네, 가능합니다. 기존 사이트의 문제점(이탈률, 전환율 등)을 분석하여 개선 방향을 제안해 드립니다.
                    </div>
</details>
<details className="group bg-[#05050A] rounded-xl border open:border-violet-500/30 transition-all border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">유지보수는 어떻게 되나요?</span>
<span className="transition-transform group-open:rotate-180 text-violet-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm leading-relaxed text-slate-400">
                        제작 완료 후 1개월간 간단한 텍스트/이미지 수정은 무료로 지원해 드립니다. 이후에는 건별 또는 월 단위 유지보수 계약을 통해 관리받으실 수 있습니다.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="container mx-auto px-6">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-white">Insights</h2>
<a className="text-sm flex items-center gap-1 text-violet-400 hover:text-violet-300" href="#">View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block" href="#">
<div className="aspect-video rounded-lg mb-4 overflow-hidden border bg-slate-800 border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-violet-400">Conversion</span>
<h3 className="font-medium mt-1 group-hover:text-violet-300 transition-colors text-white">랜딩페이지 전환율을 2배 높이는 카피라이팅 공식</h3>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-lg mb-4 overflow-hidden border bg-slate-800 border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-violet-400">Design</span>
<h3 className="font-medium mt-1 group-hover:text-violet-300 transition-colors text-white">고객의 시선을 조종하는 F패턴 레이아웃</h3>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-lg mb-4 overflow-hidden border bg-slate-800 border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-bold tracking-wider uppercase text-violet-400">Case Study</span>
<h3 className="font-medium mt-1 group-hover:text-violet-300 transition-colors text-white">스타트업 A사가 웹사이트 리뉴얼로 투자를 받은 비결</h3>
</a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-[#080911]" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent pointer-events-none to-violet-900/10"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-white">
                        준비되셨나요?<br/>
<span className="text-violet-400">매출 상승의 시작점</span>
</h2>
<p className="mb-8 text-lg font-light text-slate-400">
                        부담 없이 문의해주세요. 현재 웹사이트의 문제점을 <br/>
                        무료로 진단하고 개선 방향을 제안해 드립니다.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-violet-400">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span>평균 24시간 내 답변드립니다</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-violet-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span>이번 달 신규 프로젝트  남았습니다</span>
</div>
</div>
</div>

<div className="bg-[#05050A] p-8 rounded-2xl border shadow-2xl border-white/10">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400">이름</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600 bg-white/5 border-white/10 text-white" placeholder="홍길동" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400">연락처</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600 bg-white/5 border-white/10 text-white" placeholder="010-0000-0000" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400">이메일</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600 bg-white/5 border-white/10 text-white" placeholder="hello@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400">프로젝트 내용</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all placeholder:text-slate-600 bg-white/5 border-white/10 text-white" placeholder="현재 상황과 고민, 예산 범위 등을 간단히 적어주세요." rows="4"></textarea>
</div>
<button className="w-full font-semibold rounded-lg py-4 text-sm transition-colors mt-2 bg-white text-black hover:bg-slate-200" type="button">
                            무료 진단 신청하기
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#05050A] border-t pt-16 pb-8 border-white/5">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="text-xl font-bold tracking-tight flex items-center gap-2 mb-4 text-white" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr flex items-center justify-center text-xs from-violet-600 to-indigo-600 text-white">A</div>
                        AURORA
                    </a>
<p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                        우리는 단순한 웹사이트가 아닌, 비즈니스 성장을 위한 강력한 도구를 만듭니다. 심리학과 디자인의 만남, Aurora.
                    </p>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-white">Menu</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="transition-colors hover:text-white" href="#process">프로세스</a></li>
<li><a className="transition-colors hover:text-white" href="#portfolio">포트폴리오</a></li>
<li><a className="transition-colors hover:text-white" href="#pricing">가격안내</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-sm text-white">Social</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="transition-colors hover:text-white" href="#">Instagram</a></li>
<li><a className="transition-colors hover:text-white" href="#">LinkedIn</a></li>
<li><a className="transition-colors hover:text-white" href="#">Threads</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-xs text-slate-600">© 2024 Aurora Creative. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400" href="#">개인정보처리방침</a>
<a className="hover:text-slate-400" href="#">이용약관</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
