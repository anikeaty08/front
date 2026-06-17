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



    // Smooth reveal animation based on IntersectionObserver
    document.addEventListener("DOMContentLoaded", () => {
      const observerOptions = {
        root: null,
        rootMargin: "0px 0px -50px 0px",
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll(".reveal").forEach(el => {
        observer.observe(el);
      });
    });
  
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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-4 md:px-12 flex justify-between items-center backdrop-blur-md border-b border-zinc-900/50 bg-zinc-950/70 transition-all">
<a className="text-sm font-semibold text-zinc-100 tracking-[0.15em] flex items-center gap-2 group" href="#">
<iconify-icon className="text-stone-500 group-hover:text-stone-400 transition-colors" icon="solar:leaf-bold"></iconify-icon>
      GROUNDPOLY
    </a>
<div className="hidden md:flex gap-8 text-xs tracking-wide text-zinc-400 font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#products">Products</a>
<a className="hover:text-zinc-100 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-100 transition-colors" href="#values">Values</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs font-medium text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-full transition-all" href="#contact">
      상담 문의하기
    </a>
</nav>

<header className="min-h-screen flex overflow-hidden bg-center opacity-100 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a5cc1c9-74de-4632-92a4-53e0ccb3e8e7_3840w.png)] bg-cover pt-20 pb-24 relative grayscale-0 invert-0 items-center justify-center" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vw] max-w-4xl glow-blob bg-gradient-to-b from-stone-600/30 to-zinc-900/10"></div>
<div className="z-10 flex flex-col text-center max-w-4xl pr-6 pl-6 relative items-center">
<h1 className="leading-tight reveal delay-100 bg-clip-text active md:text-7xl text-5xl font-semibold text-zinc-100 tracking-tighter mb-8">
        Innovative Materials <br className=""/> from Coffee Grounds
      </h1>
<p className="md:text-lg leading-relaxed reveal delay-200 text-base font-normal text-zinc-400 max-w-2xl mb-12 active">
        버려지는 커피박을 고성능 친환경 소재로 재탄생시켰습니다.<br/>
        기존 플라스틱의 한계를 넘어, 그라운드폴리가 지속 가능한 산업의 새로운 기준을 제시합니다.
      </p>
<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 reveal delay-300 w-full active">
<button className="flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-7 py-3 rounded-full text-sm font-medium hover:bg-zinc-300 transition-all">
          카달로그 다운로드
          <iconify-icon className="" icon="solar:download-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-zinc-900/50 border border-zinc-800 text-zinc-100 px-7 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all backdrop-blur-sm">
          무료 샘플 신청
          <iconify-icon className="" icon="solar:box-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-zinc-900/50 border border-zinc-800 text-zinc-100 px-7 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 hover:border-zinc-700 transition-all backdrop-blur-sm">
          상담 문의하기
          <iconify-icon className="" icon="solar:chat-round-dots-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="md:px-12 border-zinc-900/50 border-t pt-32 pr-6 pb-32 pl-6 relative" id="products">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-4">"이것이 커피로 만든 플라스틱입니다."<br/>그라운드폴리가 제안하는 산업군별 제품 솔루션</h2>
</div>
<div className="flex flex-col gap-16 max-w-5xl mx-auto">

<div className="glass-card md:p-6 group reveal flex flex-col gap-6 rounded-3xl pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">
<div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden shrink-0 bg-zinc-900 w-full border-zinc-800/50 border rounded-2xl relative">
<img alt="식품 포장재" className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-black/10 to-black/0 opacity-100 mix-blend-normal w-full h-full object-contain grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27da1665-623d-4e91-9719-57e3f95bd2a8_3840w.jpg"/>
<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center backdrop-blur-md">
<iconify-icon className="text-stone-400" height="16" icon="solar:box-minimalistic-linear" style={{color: 'rgb(168, 162, 158)'}} width="16"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2 md:px-4 md:pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="max-w-xl">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">식품 포장재 (Food Packaging)</h3>
<p className="text-base text-zinc-400 leading-relaxed font-normal">
                친환경 파우치부터 선물 세트용 내장 트레이(Tray)까지. 커피박 고유의 내추럴한 색감과 질감이 브랜드의 프리미엄과 진정성을 동시에 완성합니다.
              </p>
</div>
<p className="text-sm text-stone-400 font-medium shrink-0">* Sustainable Packaging Solution</p>
</div>
</div>

<div className="glass-card md:p-6 group reveal flex flex-col gap-6 rounded-3xl pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">
<div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden relative bg-zinc-900 shrink-0 border border-zinc-800/50">
<img alt="생활용품 및 리빙 제품" className="group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 opacity-100 mix-blend-lighten w-full h-full object-contain grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/939add78-9f2b-49d3-b4bd-d09e76d01972_3840w.png"/>
<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-zinc-950/80 border border-zinc-800 flex items-center justify-center backdrop-blur-md">
<iconify-icon className="text-stone-400" icon="solar:cup-hot-linear"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2 md:px-4 md:pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div className="max-w-xl">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">생활용품 및 리빙 제품군 (Living &amp; Industrial)</h3>
<p className="text-base text-zinc-400 leading-relaxed font-normal">
                높은 내구성과 정밀한 마감을 통해 가전, 가구, 생활 잡화 등 플라스틱이 사용되는 모든 산업 분야에 즉시 적용 가능한 고기능성 소재 솔루션입니다.
              </p>
</div>
<p className="text-sm text-stone-400 font-medium shrink-0">* Industrial &amp; Lifestyle Goods</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 bg-zinc-900/10 pt-32 pr-6 pb-32 pl-6 relative" id="process">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-24 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100">체계적인 수급부터 정밀 공정까지,<br/>그라운드폴리의 4단계 업사이클링 프로세스 상세</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

<div className="glass-card p-4 rounded-2xl reveal group">
<div className="aspect-video rounded-xl overflow-hidden mb-6 relative bg-zinc-900">
<img alt="커피박 수거" className="group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 opacity-100 mix-blend-lighten w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51fe5734-6256-4df8-92f2-2d8dde7cd8b6_1600w.jpg"/>
</div>
<div className="px-2 pb-2">
<h4 className="text-sm font-medium text-zinc-200 mb-3 tracking-wide">01. 커피박 수거 (Collection)</h4>
<p className="text-xs text-zinc-400 leading-relaxed font-normal">
              파트너사 <strong>'대상 다이브스'</strong>에서 발생하는 수천 톤의 커피박을 안정적으로 확보하여 대량 공급의 기반을 마련합니다.
            </p>
</div>
</div>

<div className="glass-card p-4 rounded-2xl reveal delay-100 group">
<div className="aspect-video rounded-xl overflow-hidden mb-6 relative bg-zinc-900">
<img alt="전처리" className="group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 opacity-100 mix-blend-lighten w-full h-full object-contain grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc13da63-a748-41c5-8d00-ba8260f665c6_800w.png"/>
</div>
<div className="px-2 pb-2">
<h4 className="text-sm font-medium text-zinc-200 mb-3 tracking-wide">02. 전처리 (Pre-treatment)</h4>
<p className="text-xs text-zinc-400 leading-relaxed font-normal">
              수거된 커피박을 독자적인 기술로 건조 및 미세 분쇄하여 소재화에 최적화된 고순도 원료로 정제합니다.
            </p>
</div>
</div>

<div className="glass-card p-4 rounded-2xl reveal delay-200 group">
<div className="aspect-video rounded-xl overflow-hidden mb-6 relative bg-zinc-900">
<img alt="펠릿팅" className="group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 opacity-100 mix-blend-lighten w-full h-full object-contain grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fefc23f-7923-4f4a-bc1b-c3cf010e491f_800w.jpg"/>
</div>
<div className="px-2 pb-2">
<h4 className="text-sm font-medium text-zinc-200 mb-3 tracking-wide">03. 펠릿팅 (Pelleting)</h4>
<p className="text-xs text-zinc-400 leading-relaxed font-normal">
              정제된 커피박과 플라스틱 원료를 최적의 비율로 혼합 및 압출하여, 공정에 즉시 투입 가능한 알갱이(Pellet) 소재를 제조합니다.
            </p>
</div>
</div>

<div className="glass-card p-4 rounded-2xl reveal delay-300 group">
<div className="aspect-video rounded-xl overflow-hidden mb-6 relative bg-zinc-900">
<img alt="사출 및 성형" className="group-hover:opacity-70 group-hover:scale-105 transition-all duration-500 object-auto opacity-100 mix-blend-lighten w-full h-full grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0684820b-bfd6-4b18-ace8-e8c08528b4e4_800w.png"/>
</div>
<div className="px-2 pb-2">
<h4 className="text-sm font-medium text-zinc-200 mb-3 tracking-wide">04. 사출 및 성형 (Molding)</h4>
<p className="text-xs text-zinc-400 leading-relaxed font-normal">
              고객사의 니즈에 맞춰 최적화된 물성을 구현하고, 최종 친환경 플라스틱 제품으로 정밀 성형합니다.
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 border-y border-zinc-900/50 pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-2xl mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-6 leading-tight">기업의 지속 가능한 내일을 방해하는 플라스틱 문제,<br/>해결책은 없을까요?</h2>
</div>
<div className="grid md:grid-cols-3 gap-px bg-zinc-800/50 rounded-2xl overflow-hidden reveal delay-100">

<div className="bg-zinc-950 p-10 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
<div className="">
<iconify-icon className="text-zinc-600 mb-8 group-hover:text-stone-400 transition-colors" icon="solar:archive-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium text-zinc-200 mb-4">패키징 담당자</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">탄소세 대응이 시급하지만, 기존 친환경 소재는 품질이 떨어져 고민일 때</p>
</div>
</div>

<div className="bg-zinc-950 p-10 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
<div className="">
<iconify-icon className="text-zinc-600 mb-8 group-hover:text-stone-400 transition-colors" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium text-zinc-200 mb-4">제품 디자이너</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">브랜드의 진정성을 시각적으로 전달할 수 있는 독특하고 고급스러운 친환경 소재를 찾을 때</p>
</div>
</div>

<div className="bg-zinc-950 p-10 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors">
<div>
<iconify-icon className="text-zinc-600 mb-8 group-hover:text-stone-400 transition-colors" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="text-base font-medium text-zinc-200 mb-4">ESG 경영 팀</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-normal">실질적인 폐기물 저감 성과와 대규모 자원 순환 모델 도입이 필요할 때</p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-32 pt-20 pb-20 relative gap-x-32 gap-y-32" id="values">

<div className="px-6 md:px-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[500px] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/50">
<img alt="Value 01" className="mask-radial opacity-100 mix-blend-screen w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17ce9190-35b5-4a0b-9aa5-bff82981688b_1600w.png"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 mb-8">01</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 leading-tight">성공적인 소재 전환을 보장하는 신뢰의 가치,<br/>전문 엔지니어링 지원</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
          그라운드폴리는 단순히 소재를 파는 것이 아니라 귀사의 제품 성공을 지원합니다. 전문 물성 엔지니어가 정밀 분석 데이터를 바탕으로 인장강도, 내구성, 가공성까지 종합 검토하여 가장 최적화된 소재 솔루션을 제안합니다. 기술적 불확실성을 제거하고 가장 안정적인 친환경 전환을 시작하세요.
        </p>
</div>
</div>

<div className="px-6 md:px-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center reveal">
<div className="space-y-6">
<div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 mb-8">02</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 leading-tight">플라스틱의 익숙함은 그대로,<br/>지구에 미치는 영향은 최소로.</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
          그라운드폴리는 단순히 환경에 좋은 소재를 넘어, 실제 산업 현장에서 기존 플라스틱과 동일한 물성을 제공합니다. 사용자는 기존 플라스틱 제품의 편리함을 그대로 누리면서도, ESG/플라스틱 규제 대응 및 기업 친환경 이미지 제고 등 환경 친화적 경험을 할 수 있습니다.
        </p>
</div>
<div className="relative aspect-square md:aspect-auto md:h-[500px] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/50">
<img alt="Value 02" className="mask-radial opacity-100 mix-blend-screen w-full h-full object-cover grayscale-0" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="px-6 md:px-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 md:order-1 relative aspect-square md:aspect-auto md:h-[500px] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/50">
<img alt="Value 03" className="mask-radial opacity-100 mix-blend-screen w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 mb-8">03</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 leading-tight">포장재부터 전 플라스틱 제품군으로,<br/>상상을 현실로 만드는 범용성.</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
          특정 분야에 국한되지 않습니다. 그라운드폴리의 소재 기술은 얇은 필름 형태의 포장재부터 단단한 성형이 필요한 산업용 부품까지 넓은 스펙트럼을 커버합니다. 귀사의 제품군이 무엇이든, 커피박 소재가 가진 고유의 가치를 더해 새로운 제품 라인업을 구성할 수 있습니다.
        </p>
</div>
</div>

<div className="px-6 md:px-12 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center reveal">
<div className="space-y-6">
<div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 mb-8">04</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 leading-tight">지속 가능한 미래를 위한<br/>가장 현실적인 대안.</h3>
<p className="text-base text-zinc-400 font-normal leading-relaxed">
          환경 보호는 거창한 구호가 아니라 실질적인 소재의 변화에서 시작됩니다. 커피박이라는 버려지는 자원을 활용함으로써 원료 공급의 안정성을 확보하고, 기업이 지속 가능성 목표를 달성할 수 있도록 가장 효율적이고 경제적인 경로를 제시합니다.
        </p>
</div>
<div className="relative aspect-square md:aspect-auto md:h-[500px] w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/50">
<img alt="Value 04" className="mask-radial opacity-100 mix-blend-screen w-full h-full object-cover grayscale-0" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative bg-zinc-900/10 border-y border-zinc-900/50" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100">귀사의 비즈니스 규모에 맞춘<br/>커스텀 플랜</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="glass-card rounded-2xl p-8 flex flex-col reveal delay-100">
<h3 className="text-lg font-medium text-zinc-100 mb-2">Sample Pack</h3>
<p className="text-sm text-zinc-500 mb-8 font-normal">신속한 도입 검토를 위한 소재 샘플 및 데이터 시트(TDS) 제공</p>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">소량 소재 펠릿 샘플</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">기본 물성 데이터 시트</span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors">문의하기</button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col relative reveal border-stone-800/50 shadow-[0_0_30px_rgba(41,37,36,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-zinc-100 text-zinc-900 text-xs font-semibold tracking-tight rounded-full">RECOMMENDED</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Standard Solution</h3>
<p className="text-sm text-zinc-500 mb-8 font-normal">특정 제품군 적용을 위한 소재 최적화 및 안정적 공급</p>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-100 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">제품별 맞춤형 물성 최적화</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-100 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">안정적인 소재 정기 공급</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-100 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">공정 테스트 기술 지원</span>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-300 transition-colors">솔루션 상담</button>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col reveal delay-200">
<h3 className="text-lg font-medium text-zinc-100 mb-2">Enterprise Partnership</h3>
<p className="text-sm text-zinc-500 mb-8 font-normal">대규모 자원 순환 체계 구축 및 공동 제품 개발 컨설팅</p>
<div className="flex-grow space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">전사적 순환 모델 기획</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">독점 라인업 공동 개발</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">ESG 경영 성과 리포트 연계</span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors">파트너십 제안</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100">그라운드폴리와 함께할 때 일어나는 변화</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-2xl reveal">
<iconify-icon className="text-zinc-800 text-2xl mb-4" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">"대상 다이브스의 원료 수급 안정성 덕분에 대규모 패키징 라인업 전환에 성공했습니다."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="text-xs">
<span className="block text-zinc-200 font-medium">글로벌 파트너사</span>
<span className="text-zinc-500">생산 관리팀</span>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl reveal delay-100">
<iconify-icon className="text-zinc-800 text-2xl mb-4" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">"전문 엔지니어의 물성 검토 덕분에 별도의 시행착오 없이 사출 공정을 최적화했습니다."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="text-xs">
<span className="block text-zinc-200 font-medium">라이프스타일 브랜드</span>
<span className="text-zinc-500">제품 개발팀</span>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl reveal delay-200">
<iconify-icon className="text-zinc-800 text-2xl mb-4" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">"기존 설비를 그대로 활용하면서도 기업의 탄소 발자국을 효과적으로 줄였습니다."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800"></div>
<div className="text-xs">
<span className="block text-zinc-200 font-medium">제조 혁신 기업</span>
<span className="text-zinc-500">ESG 경영팀</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 relative bg-zinc-900/10 border-t border-zinc-900/50">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-12 reveal">그라운드폴리에 대해<br/>자주 묻는 질문</h2>
<div className="space-y-2 reveal delay-100">

<div className="border-b border-zinc-800/60">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200 text-sm md:text-base outline-none">
              1. 커피박 수급이 안정적인가요?
              <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 text-sm mt-4 mb-2 leading-relaxed font-normal pl-4 border-l border-zinc-800">
              A. 네, 파트너사인 '대상 다이브스'를 통해 연간 수천 톤 규모의 원료를 상시 확보하고 있어 대형 프로젝트에도 흔들림 없는 공급을 보장합니다.
            </p>
</details>
</div>

<div className="border-b border-zinc-800/60">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200 text-sm md:text-base outline-none">
              2. 제품에서 커피 냄새가 나나요?
              <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 text-sm mt-4 mb-2 leading-relaxed font-normal pl-4 border-l border-zinc-800">
              A. 고객사의 요청에 따라 조절 가능합니다. 커피 고유의 향을 살려 친환경성을 강조하거나, 공정을 통해 무취에 가깝게 제거하여 일반 제품처럼 활용할 수도 있습니다.
            </p>
</details>
</div>

<div className="border-b border-zinc-800/60">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200 text-sm md:text-base outline-none">
              3. 제품 물성에 문제가 없는지?
              <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 text-sm mt-4 mb-2 leading-relaxed font-normal pl-4 border-l border-zinc-800">
              A. 그라운드폴리의 전문 엔지니어가 인장강도와 내구성 등을 철저히 검토합니다. 기존 플라스틱과 동일한 수준의 물성을 유지하여 즉시 대체가 가능합니다.
            </p>
</details>
</div>

<div className="border-b border-zinc-800/60">
<details className="group py-5 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-zinc-200 text-sm md:text-base outline-none">
              4. 탄소배출량이 얼마나 감축되는지?
              <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-zinc-400 text-sm mt-4 mb-2 leading-relaxed font-normal pl-4 border-l border-zinc-800">
              A. 폐기물 자원화와 신재 플라스틱 대체 효과를 통해 탄소 발자국을 획기적으로 줄입니다. 상세한 감축 데이터는 상담을 통해 리포트 형태로 제공해 드립니다.
            </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 text-center relative overflow-hidden flex flex-col items-center justify-center">
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[60vw] h-[60vw] max-w-2xl glow-blob bg-gradient-to-t from-stone-600/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto reveal">
<iconify-icon className="text-zinc-800 mb-8 mx-auto" icon="solar:earth-linear" width="48"></iconify-icon>
<p className="text-base md:text-lg text-zinc-400 font-normal leading-relaxed mb-12">
        그라운드폴리는 단순히 소재를 만드는 팀이 아닙니다.<br/>
        땅(Ground)에서 온 자원이 다시 가치 있게 순환되는 새로운 폴리(Poly)의 시대를 꿈꿉니다.<br/>
        일상의 익숙한 커피가 세상을 바꾸는 혁신 소재가 되는 여정, 그라운드폴리가 파트너사와 함께 걷겠습니다.
      </p>
<button className="bg-zinc-100 text-zinc-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-300 transition-all shadow-[0_0_40px_rgba(244,244,245,0.15)] flex items-center gap-2 mx-auto">
        지금 바로 상담 문의하기
        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6 md:px-12 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col items-start gap-4">
<span className="text-sm font-semibold text-zinc-100 tracking-[0.15em] flex items-center gap-2">
<iconify-icon className="text-stone-500" icon="solar:leaf-bold"></iconify-icon>
          GROUNDPOLY
        </span>
<div className="flex flex-col gap-2 text-xs text-zinc-500 font-normal">
<span>팀명: 그라운드폴리 (Ground Poly)</span>
<span>원료 파트너: 대상 다이브스 (Daesang Dives)</span>
<span>주소: 서울특별시 소재 혁신센터 00호</span>
</div>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 text-xs text-zinc-500 font-normal">
<a className="hover:text-zinc-300 transition-colors flex items-center gap-1.5" href="mailto:contact@groundpoly.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
          contact@groundpoly.com
        </a>
</div>
<div className="text-xs text-zinc-700 font-normal">
        © 2026 Ground Poly. All rights reserved.
      </div>
</div>
</footer>


    </>
  );
}
