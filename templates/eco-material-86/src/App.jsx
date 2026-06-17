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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a5cc1c9-74de-4632-92a4-53e0ccb3e8e7_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="noise-overlay" style={{display: 'block'}}></div>

<nav className="fixed z-40 md:px-12 flex transition-all duration-500 text-stone-200 mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between" id="navbar">
<a className="flex items-center gap-3 group cursor-pointer" href="#">
<iconify-icon className="text-[22px] group-hover:text-amber-500 transition-colors duration-500 text-amber-200/80" icon="solar:leaf-linear"></iconify-icon>
<span className="serif text-sm md:text-base font-normal tracking-widest uppercase">GROUNDPOLY</span>
</a>
<div className="hidden md:flex gap-10 uppercase text-sm text-stone-400 tracking-widest font-extralight gap-x-10 gap-y-10">
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#about">소재 소개</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#process">공정 과정</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#applications">적용 분야</a>
<a className="nav-link hover:text-amber-100 transition-colors duration-300" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-3 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group" href="#contact">
<span className="text-sm tracking-widest text-stone-300 group-hover:text-amber-100 font-extralight">샘플 문의</span>
<iconify-icon className="text-base text-stone-400 group-hover:text-amber-100 transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-stone-200" onclick="document.querySelector('.mobile-menu').classList.toggle('hidden')" style={{display: 'none'}}>
<svg className="text-2xl invisible" data-icon-set="solar" data-solar="hamburger-menu-linear" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 7H4m16 5H4m16 5H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
</button>
</nav>

<div className="mobile-menu hidden fixed inset-0 z-30 bg-black/95 backdrop-blur-md pt-32 px-6 flex-col gap-8 md:hidden" style={{display: 'none'}}>
<a className="serif hover:text-amber-200 text-xl text-stone-300 tracking-widest font-extralight" href="#about" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">소재 소개</a>
<a className="serif hover:text-amber-200 text-xl text-stone-300 tracking-widest font-extralight" href="#process" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">공정 과정</a>
<a className="serif hover:text-amber-200 text-xl text-stone-300 tracking-widest font-extralight" href="#applications" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">적용 분야</a>
<a className="text-xl serif tracking-widest text-stone-300 hover:text-amber-200 font-extralight" href="#faq" onclick="document.querySelector('.mobile-menu').classList.add('hidden')">FAQ</a>
<a className="text-sm text-amber-200 tracking-widest font-extralight text-center border-amber-800/50 border mt-8 pt-4 pb-4" href="#contact">샘플 및 적용 상담</a>
</div>

<header className="overflow-hidden flex bg-stone-950/0 w-full h-screen relative items-center justify-center">
<div className="overflow-hidden z-0 text-4xl bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 via-white/0 to-white/10 absolute top-0 right-0 bottom-0 left-0 grayscale-0 space-x-6">

<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/95 via-[#050505]/50 to-[#080808] z-10 pointer-events-none">
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] z-10 pointer-events-none">
</div>
</div>
<a className="-translate-x-1/2 flex flex-col items-center gap-2 hover:opacity-100 transition-opacity animate-bounce duration-[3000ms] cursor-pointer z-20 text-center opacity-60 absolute bottom-10 left-1/2" href="#about">
<span className="text-xs uppercase tracking-widest text-stone-400 font-extralight">알아보기</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</a><div className="flex flex-col z-20 text-center max-w-7xl mt-16 pr-4 pl-4 relative items-center">
<div className="mb-6 opacity-0 animate-[float_4s_ease-in-out_infinite] reveal active">
<div className="w-1 h-12 bg-gradient-to-b from-transparent to-amber-500/40 mx-auto mb-4"></div>
<iconify-icon className="text-[32px] text-amber-400/70 mx-auto block" icon="solar:leaf-linear"></iconify-icon>
</div><h1 className="md:text-5xl lg:text-6xl leading-tight reveal active text-3xl font-thin text-stone-100 tracking-tight max-w-3xl mt-6 mb-6 drop-shadow-lg">버려지는 커피박의 놀라운 변신, <br className=""/> <span className="serif italic text-amber-300/90 tracking-normal">새로운 소재의 가능성</span>을 만나 
보세요.</h1>
<p className="md:text-lg reveal active leading-relaxed text-base text-stone-300 font-extralight max-w-2xl mr-auto mb-6 ml-auto drop-shadow-md">자연스러운 색감과 텍스처를 담은 커피박 플라스틱 솔루션<br/> 포장재부터 시작하는 현실적인 친환경 전환</p>
<p className="md:text-base reveal active leading-relaxed text-sm text-stone-400/80 font-extralight max-w-xl mr-auto mb-12 ml-auto">
                그라운드폴리는 계열사 기반 원료 수급과 표준화 공정을 바탕으로, 기존 플라스틱 공정 적용 가능성을 고려한 커피박 소재를 제안합니다. 친환경을 넘어, 제품의 첫인상과 브랜드 인상까지 바꾸는 소재입니다.
            </p>
<div className="flex flex-col sm:flex-row gap-4 reveal active">
<a className="px-8 py-4 bg-stone-100 text-[#050505] text-sm tracking-widest font-normal hover:bg-amber-100 transition-all duration-500 ease-out rounded-sm" href="#contact">
                    샘플 문의
                </a>
<a className="px-8 py-4 border border-stone-500/40 text-stone-100 text-sm tracking-widest font-extralight hover:border-amber-100 hover:text-amber-50 transition-all duration-500 ease-out backdrop-blur-sm bg-black/20 rounded-sm" href="#contact">
                    적용 상담 받기
                </a>
</div>
</div>
</header>

<section className="md:py-48 md:px-20 overflow-hidden bg-[#080808]/90 pt-32 pr-6 pb-32 pl-6 relative" id="about">
<div className="bg-gradient-to-l from-stone-900/30 to-transparent w-1/3 h-full absolute top-0 right-0"></div>
<div className="grid md:grid-cols-2 gap-20 z-10 relative items-center">
<div className="space-y-10 reveal">
<span className="text-amber-600/80 text-sm tracking-widest border-l border-amber-600/30 pl-4 font-extralight">서비스 소개</span>
<h2 className="text-3xl md:text-5xl leading-snug font-thin text-stone-200 tracking-tight">
                    버려지는 커피박을 산업의 핵심 자원으로,<br/>
<span className="serif text-amber-100/80 tracking-normal">혁신 소재 솔루션 GroundPoly</span>
</h2>
<div className="space-y-4 text-stone-400 font-extralight leading-relaxed max-w-md text-base md:text-lg">
<p className="">그라운드폴리는 버려지는 커피박을 단순히 재활용하는 데 그치지 않습니다.</p>
<p className="">커피 고유의 색감과 질감, 그리고 자원 순환의 스토리를 담아 브랜드에 새로운 인상을 더하는 소재로 발전시킵니다.</p>
<p className="">기존 플라스틱 공정 적용 가능성을 고려하면서도, 일반 플라스틱이 주기 어려운 따뜻한 무드와 차별화된 외관을 함께 제안합니다.</p>
</div>
<div className="flex flex-col gap-6 pt-8 border-t border-stone-800/60">
<div className="flex items-start gap-4">
<iconify-icon className="text-[20px] text-amber-500/70 mt-1 shrink-0" icon="solar:palette-linear"></iconify-icon>
<div className="">
<p className="text-stone-200 font-extralight text-base">자연스러운 브라운 톤과 유기적인 텍스처</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[20px] text-amber-500/70 mt-1 shrink-0" icon="solar:settings-linear"></iconify-icon>
<div>
<p className="text-stone-200 font-extralight text-base">기존 공정 적용 가능성을 고려한 소재 설계</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[20px] text-amber-500/70 mt-1 shrink-0" icon="solar:book-linear"></iconify-icon>
<div className="">
<p className="text-stone-200 font-extralight text-base">브랜드 스토리까지 전달하는 업사이클링 소재</p>
</div>
</div>
</div>
</div>
<div className="relative h-[600px] reveal delay-200 group">
<div className="absolute top-10 right-10 w-64 h-80 bg-stone-900 overflow-hidden z-20 border border-stone-800/50 transform group-hover:-translate-y-4 transition-transform duration-1000">
<img alt="Coffee Grounds" className="hover:opacity-100 transition-opacity duration-700 grayscale-[0.3] opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a5cc1c9-74de-4632-92a4-53e0ccb3e8e7_3840w.png?w=800&amp;q=80"/>
</div>
<div className="absolute bottom-10 left-10 w-72 h-96 bg-stone-800 overflow-hidden z-10 border border-stone-800/50 transform group-hover:translate-y-4 transition-transform duration-1000">
<img alt="Material Texture" className="hover:opacity-100 transition-opacity duration-700 grayscale-[0.5] opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#080808] via-transparent to-amber-900/10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y bg-[#0A0A0A]/90 border-stone-900/50 pt-24 pb-24">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-3 block">대상 고객</span>
<h3 className="text-2xl md:text-4xl leading-tight font-thin text-stone-200 tracking-tight">
                    ESG 및 플라스틱 규제 대응을 고민하는 고객뿐만 아니라,<br/>
<span className="serif text-amber-100/80">브랜드 인상까지 남기는 소재가 필요할 때</span>
</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="hover:border-amber-900/40 transition-colors duration-500 reveal delay-100 bg-stone-900/20 border-stone-800/40 border pt-8 pr-8 pb-8 pl-8">
<svg className="block w-[456px] h-[38px] mb-6" data-icon-replaced="true" data-icon-set="solar" data-solar="box-linear" height="38" strokeWidth="2" style={{color: 'rgb(120, 113, 108)', width: '456px', height: '38px'}} viewbox="0 0 24 24" width="456" xmlns="http://www.w3.org/2000/svg"><path className="" d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
<h4 className="text-xl font-normal text-stone-200 tracking-tight mb-3">친환경 패키징을<br/>고민하는 브랜드</h4>
<p className="text-base font-extralight text-stone-400 leading-relaxed">종이는 내구성이 부족하고, 플라스틱은 환경 부담이 클 때, 내구성과 지속가능성을 모두 갖춘 새로운 소재가 필요합니다.</p>
</div>
<div className="p-8 border border-stone-800/40 bg-stone-900/20 hover:border-amber-900/40 transition-colors duration-500 reveal delay-200">
<iconify-icon className="text-[32px] text-stone-500 mb-6 block" icon="solar:tuning-square-2-linear"></iconify-icon>
<h4 className="text-xl font-normal text-stone-200 tracking-tight mb-3">ESG 성과가 필요한 제조사</h4>
<p className="text-base font-extralight text-stone-400 leading-relaxed">탄소 배출을 줄여야 하지만, 기존 공정을 완전히 바꾸기에는 비용과 리스크가 고민되는 고객의 니즈를 충족시켜 드립니다.</p>
</div>
<div className="p-8 border border-stone-800/40 bg-stone-900/20 hover:border-amber-900/40 transition-colors duration-500 reveal delay-300">
<iconify-icon className="text-[32px] text-stone-500 mb-6 block" icon="solar:chat-line-linear"></iconify-icon>
<h4 className="text-xl font-normal text-stone-200 tracking-tight mb-3">차별화된 제품을 원하는 고객사</h4>
<p className="text-base font-extralight text-stone-400 leading-relaxed">제품의 스토리텔링까지 완성을 원하는 고객에게 새로운 선택지를 제안합니다.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#080808]/90 pt-32 pb-32 relative" id="process">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 reveal">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-3 block">진행 프로세스</span>
<h3 className="md:text-4xl leading-tight text-3xl font-thin text-stone-100 tracking-tight">커피 한 잔의 여유가 혁신 소재가 되기까지</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4">
<div className="group relative reveal delay-100">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700">
<div className="bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-6 left-6 text-stone-600 font-serif text-3xl tracking-tight">01</div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<span className="serif text-2xl tracking-tight text-stone-100">커피박 수거 및 선별</span>
<span className="text-sm font-extralight text-stone-400 leading-relaxed border-t border-stone-800/80 mt-1 pt-3">계열사에서 발생하는 동일한 품질의 커피박을 안정적으로 확보하고, 이력 추적 기반의 원료 관리 시스템을 운영합니다.</span>
</div><img alt="Step 1" className="filter group-hover:scale-105 transition-all duration-[1500ms] opacity-40 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="group relative reveal delay-150">
<div className="aspect-[4/5] bg-stone-900/30 border border-stone-800/50 relative overflow-hidden transition-all duration-700">
<img alt="Step 2" className="w-full h-full object-cover filter grayscale opacity-40 group-hover:scale-105 transition-all duration-[1500ms]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 text-stone-600 font-serif text-3xl tracking-tight">02</div><div className="bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
<span className="serif text-2xl tracking-tight text-stone-100">소재 고도화 공정</span>
<span className="text-sm font-extralight text-stone-400 leading-relaxed border-t border-stone-800/80 mt-1 pt-3">커피박의 물성을 최적화하여 다양한 산업에 적용 가능한 소재로 발전시킵니다.</span>
</div>
</div>
</div>
<div className="group relative reveal delay-200">
<div className="aspect-[4/5] overflow-hidden transition-all duration-700 cursor-pointer bg-stone-900/30 border border-stone-800/50 relative" onclick="window.location.href='/home'" role="button">
<img alt="Plastic Food Packaging" className="filter group-hover:scale-105 transition-all duration-[1500ms] opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81797ef3-0a7b-4913-84eb-30a4c0952646_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent pointer-events-none"></div>
<div className="text-3xl text-stone-600 tracking-tight font-serif absolute top-6 left-6 z-10">03</div>
<div className="flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500 absolute right-6 bottom-6 left-6">
<span className="serif text-2xl tracking-tight text-stone-100">맞춤형 소재 공급</span>
<span className="leading-relaxed text-sm text-stone-400 font-extralight bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent border-stone-800/80 border-t mt-1 pt-3">식품 포장재를 비롯한 다양한 플라스틱 제품 특성에 맞춘 맞춤형 커피박 소재 솔루션을 제공합니다.</span>
</div>
</div>
</div>
<div className="group relative reveal delay-250">
<div className="aspect-[4/5] overflow-hidden transition-all duration-700 bg-center bg-gradient-to-br from-[#050505]/80 via-[#050505]/50 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6613a349-d1fe-4c83-8a39-9b705906c4b7_800w.jpg)] bg-cover relative">
<div className="text-3xl text-stone-600 tracking-tight font-serif absolute top-6 left-6">04</div>
<div className="flex flex-col gap-2 z-10 transform group-hover:-translate-y-2 transition-transform duration-500 absolute right-6 bottom-6 left-6">
<span className="serif text-2xl text-stone-100 tracking-tight">제품 적용 및 양산</span>
<span className="leading-relaxed text-sm text-stone-400 font-extralight border-stone-800/80 border-t mt-1 pt-3">기존 플라스틱 가공 설비에서 바로 적용 가능한 형태로 소재를 공급하여 포장재 및 다양한 산업 제품에 적용합니다.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-0 bg-[#050505]/90 pt-10 pr-6 pb-10 pl-6">
<div className="space-y-1">
<div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden reveal">
<img className="absolute inset-0 w-full h-full object-cover brightness-[0.25] hover:brightness-[0.35] transition-all duration-[2000ms] scale-105 hover:scale-100 mix-blend-luminosity" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#050505] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-12 left-6 md:left-20 max-w-xl w-full md:w-auto">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-4 block">핵심 가치 01</span>
<h4 className="text-3xl md:text-5xl serif leading-tight font-thin text-stone-100 tracking-tight mb-6">플라스틱의 익숙함은 그대로, <br/>지구에 미치는 영향은 최소로</h4>
<p className="text-base md:text-lg font-extralight text-stone-300 leading-relaxed mb-2">그라운드폴리는 단순히 환경에 좋은 소재를 넘어, 실제 산업 현장에서 기존 플라스틱과 동일한 물성을 제공합니다.</p>
<p className="text-base md:text-lg font-extralight text-stone-400 leading-relaxed">사용자는 기존 플라스틱 제품의 편리함을 그대로 누리면서도, ESG/플라스틱 규제 대응 및 기업 친환경 이미지 제고 등 환경 친화적 경험을 할 수 있습니다.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-0 h-auto md:h-[60vh] reveal">
<div className="flex flex-col md:p-24 bg-[#080808]/90 border-stone-900/50 border-r pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="w-full max-w-md">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-4 block">핵심 가치 02</span>
<h4 className="text-3xl md:text-4xl serif leading-tight font-thin text-stone-100 tracking-tight mb-6">포장재부터 전 플라스틱 제품군으로, 상상을 현실로 만드는 범용성</h4>
<p className="text-base md:text-lg font-extralight text-stone-300 leading-relaxed mb-4">특정 분야에 국한되지 않습니다. 그라운드폴리의 소재 기술은 얇은 필름 형태의 포장재부터 단단한 성형이 필요한 산업용 부품까지 넓은 스펙트럼을 커버합니다.</p>
<p className="text-base md:text-lg font-extralight text-stone-400 leading-relaxed">제품군이 무엇이든, 커피박 소재가 가진 고유의 가치를 더해 새로운 제품 라인업을 구성할 수 있습니다.</p>
</div>
</div>
<div className="relative h-[40vh] md:h-full bg-stone-900 overflow-hidden group">
<img className="brightness-[0.4] group-hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.2] w-full h-full object-cover" src="https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-0 h-auto md:h-[60vh] reveal">
<div className="relative h-[40vh] md:h-full bg-stone-900 overflow-hidden group hidden md:block">
<img className="w-full h-full object-cover brightness-[0.3] group-hover:scale-105 transition-transform duration-[2000ms] grayscale-[0.4]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex flex-col md:p-24 bg-[#080808]/90 pt-12 pr-12 pb-12 pl-12 relative justify-center">
<div className="w-full max-w-md">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-4 block">핵심 가치 03</span>
<h4 className="text-3xl md:text-4xl serif leading-tight font-thin text-stone-100 tracking-tight mb-6">지속 가능한 미래를 위한 <br/> 가장 현실적인 대안</h4>
<p className="text-base md:text-lg font-extralight text-stone-300 leading-relaxed mb-4">환경 보호는 거창한 구호가 아니라 실질적인 소재의 변화에서 시작됩니다.</p>
<p className="text-base md:text-lg font-extralight text-stone-400 leading-relaxed">커피박이라는 버려지는 자원을 활용함으로써 원료 공급의 안정성을 확보하고, 기업이 지속 가능성 목표를 달성할 수 있도록 가장 효율적이고 경제적인 경로를 제시합니다.</p>
</div>
</div>
<div className="relative h-[40vh] bg-stone-900 overflow-hidden group md:hidden">
<img className="w-full h-full object-cover brightness-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="bg-[#080808]/90 border-stone-900/50 border-t pt-32 pb-32" id="applications">
<div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-24">
<div className="reveal">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-3 block">적용 분야</span>
<h3 className="text-3xl font-thin text-stone-200 tracking-tight mb-8">우선 적용을 검토하는 분야</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-4 border-b border-stone-800/50 pb-4">
<iconify-icon className="text-[20px] text-stone-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-extralight text-stone-300">비식품 접촉 포장재</span>
</li>
<li className="flex items-center gap-4 border-b border-stone-800/50 pb-4">
<iconify-icon className="text-[20px] text-stone-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-extralight text-stone-300">외부 패키징 부품</span>
</li>
<li className="flex items-center gap-4 border-b border-stone-800/50 pb-4">
<iconify-icon className="text-[20px] text-stone-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-extralight text-stone-300">생활용품 및 프로모션 굿즈</span>
</li>
<li className="flex items-center gap-4 border-b border-stone-800/50 pb-4">
<iconify-icon className="text-[20px] text-stone-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-extralight text-stone-300">디자인 소품 및 성형품</span>
</li>
<li className="flex items-center gap-4 border-b border-stone-800/50 pb-4">
<iconify-icon className="text-[20px] text-stone-600 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-lg font-extralight text-stone-300">브랜드 스토리를 담은 한정판 패키지</span>
</li>
</ul>
<div className="p-6 bg-stone-900/20 border border-stone-800/40 rounded-sm">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                        그라운드폴리는 초기에는 식품과 직접 닿지 않는 영역부터 현실적으로 접근합니다. 도입 장벽은 낮추고, 브랜드가 체감하는 차별화는 크게 만드는 방향을 우선합니다.
                    </p>
</div>
</div>
<div className="reveal delay-200">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-3 block">기대 효과</span>
<h3 className="text-3xl font-thin text-stone-200 tracking-tight mb-8">그라운드폴리로 기대할 수 있는 변화</h3>
<div className="grid grid-cols-1 gap-6">
<div className="p-6 border border-stone-800/40 hover:border-amber-900/40 transition-colors bg-[#0A0A0A]">
<span className="text-2xl font-serif text-amber-500/50 tracking-tight block mb-2">01</span>
<p className="text-base font-extralight text-stone-300 leading-relaxed">친환경 메시지를 제품의 외관과 촉감으로 자연스럽게 전달할 수 있습니다.</p>
</div>
<div className="p-6 border border-stone-800/40 hover:border-amber-900/40 transition-colors bg-[#0A0A0A]">
<span className="text-2xl font-serif text-amber-500/50 tracking-tight block mb-2">02</span>
<p className="text-base font-extralight text-stone-300 leading-relaxed">커피박 특유의 색감과 질감이 브랜드에 차별화된 인상을 더할 수 있습니다.</p>
</div>
<div className="p-6 border border-stone-800/40 hover:border-amber-900/40 transition-colors bg-[#0A0A0A]">
<span className="text-2xl font-serif text-amber-500/50 tracking-tight block mb-2">03</span>
<p className="text-base font-extralight text-stone-300 leading-relaxed">기존 플라스틱 공정 활용 가능성을 검토하며 도입 부담을 줄일 수 있습니다.</p>
</div>
<div className="p-6 border border-stone-800/40 hover:border-amber-900/40 transition-colors bg-[#0A0A0A]">
<span className="text-2xl font-serif text-amber-500/50 tracking-tight block mb-2">04</span>
<p className="text-base font-extralight text-stone-300 leading-relaxed">단순 포장재를 넘어, 스토리 있는 소재 경험을 기획할 수 있습니다.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505]/90 border-stone-900/50 border-t pt-32 pb-32 relative" id="faq">
<div className="container mx-auto px-6 md:px-20 max-w-4xl">
<div className="text-center mb-16 reveal">
<span className="text-amber-600/80 text-sm tracking-widest font-extralight mb-3 block">FAQ</span>
<h3 className="text-3xl md:text-4xl font-thin text-stone-200 tracking-tight">그라운드폴리에 대해 자주 묻는 질문</h3>
</div>
<div className="space-y-4 reveal delay-100">
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">커피박의 느낌이 제품에 실제로 남나요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(120, 113, 108)'}} width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            적용 용도와 배합 조건에 따라 차이가 있지만, 커피박 특유의 자연스러운 색감과 질감을 살리는 방향으로 설계할 수 있습니다.
                        </p>
</div>
</details>
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">커피 향도 남나요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            향은 공정과 사양에 따라 조정 방향을 검토할 수 있습니다. 제품 특성에 맞춰 소재의 존재감은 살리고 불필요한 요소는 줄이는 방향으로 개발합니다.
                        </p>
</div>
</details>
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">기존 설비를 그대로 사용할 수 있나요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            소재 조성과 제품 사양에 따라 기존 사출 및 압출 설비 적용 가능성을 검토합니다.
                        </p>
</div>
</details>
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">어떤 제품부터 적용하는 것이 적합한가요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            초기에는 식품과 직접 닿지 않는 포장재 및 외부 부품부터 적용 검토하는 것이 현실적입니다.
                        </p>
</div>
</details>
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">일반 플라스틱과 가장 다른 점은 무엇인가요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            그라운드폴리는 단순한 대체재가 아니라, 자연스러운 외관과 자원 순환의 스토리를 함께 담을 수 있는 소재라는 점에서 차별화됩니다.
                        </p>
</div>
</details>
<details className="group border border-stone-800/60 bg-[#0A0A0A] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-stone-200">
<h4 className="text-lg font-normal tracking-tight">원료 공급은 안정적인가요?</h4>
<span className="shrink-0 transition duration-300 group-open:-rotate-180 text-stone-500">
<iconify-icon className="text-[20px] text-stone-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-4 border-t border-stone-800/40 mt-2">
<p className="text-base font-extralight text-stone-400 leading-relaxed">
                            계열사 기반 원료 수급과 표준화 관리 체계를 바탕으로 안정적인 공급 구조를 구축하고 있습니다.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="md:py-40 overflow-hidden flex flex-col border-y text-center bg-stone-950/90 border-stone-900 pt-40 pb-40 relative items-center" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-3xl relative z-10 reveal">
<iconify-icon className="text-[32px] text-amber-600/60 mb-8 mx-auto block" icon="solar:leaf-linear"></iconify-icon>
<div className="space-y-6 text-stone-300 font-extralight leading-relaxed text-lg md:text-xl mb-12">
<p className="">그라운드폴리는 버려지는 커피박을 다시 쓰는 데서 멈추지 않습니다.</p>
<p className="">우리는 매일 버려지는 것들 속에서 내일의 가능성을 발견하는 '자원 순환의 설계자' 입니다.</p>
<p className="">플라스틱이 주는 편리함은 지키되, <br className="hidden md:block"/> 지구가 짊어진 짐은 덜어내고자 합니다.</p>
<p className="font-normal text-stone-100 pt-4">지금, 그라운드폴리와 함께 지속 가능한 산업의 새로운 표준을 만들어가세요.</p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 border border-stone-600/50 text-stone-100 text-sm tracking-widest font-normal hover:bg-stone-100 hover:text-black hover:border-stone-100 transition-all duration-500 ease-out" href="mailto:이메일 주소 입력">
                    샘플 문의
                </a>
<a className="px-8 py-4 border border-transparent bg-stone-900 text-stone-300 text-sm tracking-widest font-extralight hover:bg-amber-900/20 hover:text-amber-100 hover:border-amber-900/40 transition-all duration-500 ease-out" href="mailto:이메일 주소 입력">
                    협업 문의
                </a>
</div>
</div>
</section>

<footer className="md:px-12 bg-[#050505] border-stone-900 border-t pt-20 pr-6 pb-12 pl-6">
<div className="container mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[18px] text-amber-700/80" icon="solar:leaf-linear"></iconify-icon>
<span className="serif tracking-widest text-sm text-stone-300 font-normal uppercase">GROUNDPOLY</span>
</div>
<p className="text-stone-500 text-sm font-extralight leading-relaxed mb-1">상호명 : 그라운드폴리 GroundPoly</p>
<p className="text-stone-500 text-sm font-extralight leading-relaxed mb-1">대표 : 김부건</p>
</div></div></div></footer>
    </>
  );
}
