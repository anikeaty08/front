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



document.documentElement.classList.add('js');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
serif: ['"Noto Serif KR"', 'serif'],
},
colors: {
brand: {
bg: '#f5f1ea',
green: '#2F5D50',
dark: '#181512',
text: '#4a453e',
muted: '#8a8178',
border: '#d9d1c5'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    window.addEventListener('load', () => { document.body.classList.add('is-loaded'); });
    document.addEventListener("DOMContentLoaded", () => {
      // Mobile Menu Toggle
      const mobileToggle = document.getElementById('mobile-menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');

      if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
      }

      // GSAP Animations
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const ease = "power3.out"; const dur = 1.3;
        const scrollConfig = (el) => ({ trigger: el, start: "top 85%" });
        
        // Header animation
        gsap.from("#main-nav-inner", { y: -20, opacity: 0, duration: 1, ease, delay: 0.1 });

        // Hero animation
        const heroTl = gsap.timeline({ delay: 0.2, defaults: { ease, duration: dur } });
        heroTl.from(".hero-label", { opacity: 0, y: 15 }, 0)
              .from(".hero-headline", { opacity: 0, y: 25 }, 0.1)
              .from(".hero-copy", { opacity: 0, y: 20 }, 0.3)
              .from(".hero-btn-group", { opacity: 0, y: 15 }, 0.5)
              .from(".hero-img-wrap", { scale: 1.05, opacity: 0, duration: 1.8 }, 0.2)
              .from(".hero-plaque", { opacity: 0, y: 20 }, 0.8);

        // Scroll animations
        gsap.utils.toArray('[data-anim="up"]').forEach(el => {
          gsap.from(el, { 
            scrollTrigger: scrollConfig(el), 
            y: 40, 
            opacity: 0, 
            duration: dur, 
            ease, 
            delay: el.dataset.delay ? parseFloat(el.dataset.delay) : 0 
          });
        });

        gsap.utils.toArray('[data-anim="scale"]').forEach(el => {
          gsap.from(el, { 
            scrollTrigger: scrollConfig(el), 
            scale: 1.05, 
            opacity: 0, 
            duration: 1.6, 
            ease: "power2.out" 
          });
        });
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
      

<header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-5">
<div className="max-w-[1380px] mx-auto">
<div className="relative flex items-center justify-between h-14 sm:h-[72px] px-3 sm:px-4 rounded-full border border-brand-border/75 backdrop-blur-xl shadow-sm py-1 bg-brand-bg/90" id="main-nav-inner">

<a className="flex items-center gap-3 shrink-0 group relative z-20 pl-1" href="#">
<div className="h-10 w-10 flex uppercase text-xs font-bold text-brand-green tracking-widest bg-white border-brand-border border rounded-full items-center justify-center">
            RL</div>
<div className="flex flex-col leading-none pt-0.5">
<span className="text-[10px] uppercase tracking-widest font-semibold text-brand-muted mb-1">Food Tech</span>
<span className="text-sm text-brand-dark font-bold">Re:Food Lab</span>
</div>
</a>

<nav className="hidden xl:flex items-center gap-8 absolute left-[50%] -translate-x-1/2">
<a className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors" href="#features">스토리</a>
<a className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors" href="#about">철학</a>
<a className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors" href="#products">라인업</a>
<a className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors" href="#packaging">패키지</a>
<a className="text-sm font-medium text-brand-muted hover:text-brand-dark transition-colors" href="#plans">예약구매</a>
</nav>

<div className="hidden md:flex items-center gap-4 shrink-0 relative z-20">
<a className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-brand-dark text-white hover:bg-brand-green transition-colors text-sm font-bold shadow-md" href="#plans">
            한정수량 예약하기
          </a>
</div>

<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-brand-border bg-white text-brand-dark" id="mobile-menu-toggle">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden mt-3 rounded-[24px] border border-brand-border bg-brand-bg/95 backdrop-blur-xl p-4 relative z-40 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-1">
<a className="px-4 py-3 rounded-xl text-sm font-medium text-brand-dark hover:bg-white/50" href="#features">스토리</a>
<a className="px-4 py-3 rounded-xl text-sm font-medium text-brand-dark hover:bg-white/50" href="#products">라인업</a>
<a className="px-4 py-3 rounded-xl text-sm font-medium text-brand-dark hover:bg-white/50" href="#plans">예약구매</a>
<a className="mt-2 inline-flex items-center justify-center h-12 px-5 rounded-full bg-brand-dark text-white text-sm font-bold" href="#plans">한정수량
            예약하기</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden border-b border-brand-border bg-[#f3efe8]" id="hero">
<div className="relative max-w-[1380px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] min-h-[100svh]">

<div className="flex flex-col px-6 sm:px-8 lg:px-14 pt-32 sm:pt-40 lg:pt-48 pb-12 lg:border-r border-brand-border relative justify-center z-10">
<div className="mb-8 hero-label">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-green/30 bg-brand-green/5 text-brand-green text-xs font-bold tracking-widest uppercase">
<span className="h-1.5 w-1.5 rounded-full bg-brand-green"></span> 신제품 출시
          </span>
</div>
<div className="max-w-2xl">
<h1 className="text-4xl sm:text-6xl lg:text-[68px] leading-[1.2] break-keep hero-headline font-serif font-semibold text-brand-dark text-balance">
            달콤함은 온전히 남기고 <br/>
<span className="text-brand-green">당 걱정만 덜어낸</span><br/>
            완벽한 디저트의 시작
          </h1>
<p className="mt-6 sm:mt-8 leading-[1.6] break-keep hero-copy text-base sm:text-lg text-brand-text max-w-md">
            설탕 대신 알룰로스로 당은 낮추고, 콩가루(비지)로 단백질과 식이섬유는 꽉 채웠습니다.<br/>건강한 원료로 다시 빚어낸 '과일 저당 약과'를 만나보세요.
          </p>
<div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center hero-btn-group gap-4">
<a className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-brand-dark text-white hover:bg-brand-green duration-300 text-sm font-bold shadow-lg transition-colors" href="#plans">
              한정수량 예약하러 가기
              <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative min-h-[50vh] lg:min-h-full overflow-hidden hero-img-wrap">
<div className="absolute inset-0 bg-[#e9e2d8]">
<img alt="Premium Dessert" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.05]" data-anim="parallax" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/badefccc-9dbd-4758-b255-134aa5ae1752_1600w.png"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

<div className="absolute left-6 right-6 bottom-8 lg:left-10 lg:bottom-10 lg:max-w-sm hero-plaque z-10">
<div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl">
<p className="text-xs font-bold tracking-widest text-brand-green mb-2 uppercase">Signature Dessert</p>
<h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">상큼한 과일청 저당 약과</h3>
<p className="text-sm leading-[1.6] text-brand-text break-keep">단백질과 식이섬유를 꽉 채운 완벽한 영양 밸런스 간식.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-b border-brand-border bg-white pt-20 pb-20 sm:py-28" id="features">
<div className="px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto relative">
<div className="text-center mb-16 sm:mb-20" data-anim="up">
<span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">For Whom</span>
<h2 className="text-3xl sm:text-5xl font-serif font-semibold text-brand-dark leading-[1.3] break-keep text-balance">
          우리가 약과를 사랑하면서도 <br/>
<span className="text-brand-green">주저했던 이유들</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
<div className="p-8 sm:p-10 bg-brand-bg rounded-3xl border border-brand-border/50 hover:bg-[#f0ece5] transition-colors" data-anim="up">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm mb-6 text-2xl">
<iconify-icon icon="solar:ruler-cross-pen-bold-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-dark mb-3">식단 관리 중인 다이어터</h3>
<p className="text-base leading-[1.6] text-brand-text break-keep">"달콤한 간식이 간절하지만, 높은 칼로리와 찌르는 듯한 당 수치 때문에 꾹 참아야만
            했던 분"</p>
</div>
<div className="p-8 sm:p-10 bg-brand-bg rounded-3xl border border-brand-border/50 hover:bg-[#f0ece5] transition-colors" data-anim="up">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm mb-6 text-2xl">
<iconify-icon icon="solar:hearts-bold-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-dark mb-3">아이 간식을 고민하는 부모님</h3>
<p className="text-base leading-[1.6] text-brand-text break-keep">"시중의 자극적인 과자 대신, 성분이 착하고 믿을 수 있는 건강한 간식을 먹이고 싶은
            분"</p>
</div>
<div className="p-8 sm:p-10 bg-brand-bg rounded-3xl border border-brand-border/50 hover:bg-[#f0ece5] transition-colors" data-anim="up">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm mb-6 text-2xl">
<iconify-icon icon="solar:chef-hat-bold-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-dark mb-3">까다로운 디저트 마니아</h3>
<p className="text-base leading-[1.6] text-brand-text break-keep">"건강한 맛은 밍밍하다는 편견을 깨줄, 식감과 풍미가 완벽한 새로운 미식 경험을 찾는
            분"</p>
</div>
<div className="p-8 sm:p-10 bg-brand-bg rounded-3xl border border-brand-border/50 hover:bg-[#f0ece5] transition-colors" data-anim="up">
<div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-brand-green shadow-sm mb-6 text-2xl">
<iconify-icon icon="solar:briefcase-bold-duotone"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-brand-dark mb-3">바쁜 일상의 직장인</h3>
<p className="text-base leading-[1.6] text-brand-text break-keep">"나른한 오후, 죄책감 없이 허기를 달래줄 가벼우면서도 든든한 '한 입 거리'가 필요한
            분"</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-brand-dark min-h-[80vh] flex flex-col justify-end" id="video-ad">
<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-honey-on-pancakes-2873-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
</div>
<div className="relative z-10 w-full px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto pb-20 sm:pb-28">
<div className="flex flex-wrap gap-3 mb-6" data-anim="up">
<span className="bg-brand-green text-white text-xs font-bold rounded-full px-4 py-1.5 shadow-lg">혈당 부담 ZERO</span>
<span className="bg-white text-brand-dark text-xs font-bold rounded-full px-4 py-1.5 shadow-lg">ESG 콩단백질 함유</span>
</div>
<h2 className="text-white font-serif font-semibold leading-[1.2] text-4xl sm:text-6xl lg:text-7xl break-keep text-balance mb-6" data-anim="up" data-delay="0.1">
        당분은 비우고,<br/>
        내 리듬은 채우고.
      </h2>
<p className="text-base sm:text-xl text-white/90 break-keep leading-[1.6] max-w-2xl mb-10" data-anim="up" data-delay="0.2">
        설탕 없이도 완성되는 극강의 쫀득함. 과하게 올라간 텐션을 다독이고 남은 하루의 리듬을 가장 편안하게 이어가세요.
      </p>
<div data-anim="up" data-delay="0.3">
<a className="inline-flex items-center justify-center gap-3 w-full sm:w-auto min-w-[300px] h-16 px-8 rounded-full bg-white text-brand-dark hover:bg-brand-green hover:text-white transition-all duration-300 shadow-2xl group text-base font-bold" href="#plans">
<span>사전 예약하고 당 걱정 해소하기</span>
<iconify-icon className="text-xl transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative overflow-hidden border-b border-brand-border bg-brand-bg py-20 sm:py-28" id="ingredients">
<div className="px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto relative">
<div className="text-center mb-16 sm:mb-20" data-anim="up">
<span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Core Ingredients</span>
<h2 className="text-3xl sm:text-5xl font-serif font-semibold text-brand-dark leading-[1.3] break-keep text-balance">
          달콤함은 남기고 <span className="text-brand-green">영양은 꽉 채운 비결</span>
</h2>
<p className="mt-6 text-base sm:text-lg text-brand-text leading-[1.6] max-w-2xl mx-auto break-keep">
          밀가루와 설탕 범벅인 일반 디저트와는 다릅니다. 성분부터 깐깐하게 재설계했습니다.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">

<div className="group relative overflow-hidden bg-white rounded-[32px] p-8 sm:p-12 border border-brand-border/50 hover:border-brand-green/50 transition-colors shadow-sm hover:shadow-xl" data-anim="up">
<div className="absolute top-0 right-0 p-8 opacity-5 text-[80px] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:leaf-bold"></iconify-icon>
</div>
<div className="h-14 w-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8 text-3xl">
<iconify-icon icon="solar:leaf-bold-duotone"></iconify-icon>
</div>
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-brand-dark text-white text-xs font-bold rounded-full mb-3">단백질 · 식이섬유 UP</span>
<h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 tracking-tight">영양 가득 콩가루(비지) 베이스</h3>
</div>
<p className="text-base text-brand-text leading-[1.6] break-keep">
            탄수화물 덩어리인 밀가루 비중을 대폭 줄이고, 영양소가 풍부한 <strong>국산 콩가루와 콩비지</strong>를 아낌없이 담았습니다. 디저트 하나를 먹어도 든든한 포만감과 건강한 에너지를
            선사합니다.
          </p>
</div>

<div className="group relative overflow-hidden bg-white rounded-[32px] p-8 sm:p-12 border border-brand-border/50 hover:border-brand-green/50 transition-colors shadow-sm hover:shadow-xl" data-anim="up" data-delay="0.1">
<div className="absolute top-0 right-0 p-8 opacity-5 text-[80px] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:star-fall-bold"></iconify-icon>
</div>
<div className="h-14 w-14 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-8 text-3xl">
<iconify-icon icon="solar:star-fall-bold-duotone"></iconify-icon>
</div>
<div className="mb-4">
<span className="inline-block px-3 py-1 bg-white border border-brand-dark text-brand-dark text-xs font-bold rounded-full mb-3">당류 걱정 DOWN</span>
<h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4 tracking-tight">설탕 대신 100% 알룰로스</h3>
</div>
<p className="text-base text-brand-text leading-[1.6] break-keep">
            설탕 대신 체내에 거의 흡수되지 않는 <strong>대체당 '알룰로스'</strong>를 배합하여 만들었습니다. 약과 특유의 꾸덕하고 기분 좋은 달콤함은 완벽하게 살리면서, 섭취 후의 당 걱정은
            가볍게 덜어냈습니다.
          </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-b border-brand-border bg-white py-20 sm:py-28" id="products">
<div className="px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto relative">
<div className="mb-16 text-center" data-anim="up">
<span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Line Up</span>
<h2 className="text-3xl sm:text-5xl font-serif font-semibold text-brand-dark leading-[1.3] break-keep mb-6">
          건강함의 새로운 기준,<br/>
<span className="text-brand-green">Re:Food Lab 시그니처</span>
</h2>
<p className="text-base sm:text-lg text-brand-text leading-[1.6] max-w-2xl mx-auto break-keep">
          다양한 취향을 고려하여 엄선된 재료로 빚어냈습니다. 세 가지 맛의 프리미엄 약과 라인업을 만나보세요.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">

<div className="group flex flex-col items-center bg-brand-bg rounded-[32px] p-8 sm:p-10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-border/50" data-anim="up">
<div className="w-40 h-40 rounded-full overflow-hidden mb-8 bg-white border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-4xl text-brand-muted" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<span className="text-xs font-bold text-white bg-brand-green px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase shadow-md">Best</span>
<h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">오리지널 과일 저당</h3>
<p className="text-sm font-bold text-brand-muted mb-5">35g / 170 kcal</p>
<p className="text-sm text-brand-text leading-[1.6] break-keep text-center font-medium">
            상큼한 과일향이 입안 가득 퍼지는 시그니처. 누구나 호불호 없이 즐길 수 있는 깔끔한 단맛이 특징입니다.
          </p>
</div>

<div className="group flex flex-col items-center bg-brand-bg rounded-[32px] p-8 sm:p-10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-border/50" data-anim="up" data-delay="0.1">
<div className="w-40 h-40 rounded-full overflow-hidden mb-8 bg-white border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-4xl text-brand-muted" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<span className="text-xs font-bold text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full mb-4 tracking-widest uppercase bg-white">Nutty</span>
<h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">블랙 세서미 (흑임자)</h3>
<p className="text-sm font-bold text-brand-muted mb-5">35g / 185 kcal</p>
<p className="text-sm text-brand-text leading-[1.6] break-keep text-center font-medium">
            국산 흑임자를 듬뿍 넣어 씹을수록 깊은 고소함이 우러납니다. 할매니얼 입맛을 저격하는 진한 전통의 맛.
          </p>
</div>

<div className="group flex flex-col items-center bg-brand-bg rounded-[32px] p-8 sm:p-10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-brand-border/50" data-anim="up" data-delay="0.2">
<div className="w-40 h-40 rounded-full overflow-hidden mb-8 bg-white border border-brand-border flex items-center justify-center group-hover:scale-105 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-4xl text-brand-muted" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<span className="text-xs font-bold text-brand-dark border-2 border-brand-dark px-4 py-1 rounded-full mb-4 tracking-widest uppercase bg-white">Protein</span>
<h3 className="text-2xl font-bold text-brand-dark tracking-tight mb-2">너트 프로틴 (견과)</h3>
<p className="text-sm font-bold text-brand-muted mb-5">35g / 190 kcal</p>
<p className="text-sm text-brand-text leading-[1.6] break-keep text-center font-medium">
            다양한 견과류가 박혀 씹는 식감과 포만감을 동시에. 운동 전후, 바쁜 일상 속 에너지 보충용으로 완벽합니다.
          </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden border-b border-brand-border bg-brand-bg py-20 sm:py-28" id="packaging">
<div className="px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto relative">
<div className="text-center mb-16 sm:mb-20" data-anim="up">
<span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Package Design</span>
<h2 className="text-3xl sm:text-5xl font-serif font-semibold text-brand-dark leading-[1.3] break-keep mb-6">
          받는 순간 시작되는 기분 좋은 경험
        </h2>
<p className="text-base sm:text-lg text-brand-text leading-[1.6] max-w-2xl mx-auto break-keep">
          나를 위한 가벼운 간식부터 소중한 분을 위한 품격 있는 선물까지.<br/>현대적인 감각을 담아 언박싱의 설렘을 선사합니다.
        </p>
</div>
<div className="grid lg:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-center mb-20 sm:mb-32">
<div className="order-2 lg:order-1" data-anim="up">
<div className="inline-flex items-center justify-center px-4 py-2 bg-brand-green/10 text-brand-green font-bold text-sm rounded-full mb-6">
<iconify-icon className="mr-2 text-lg" icon="solar:gift-bold-duotone"></iconify-icon> Gift Set
          </div>
<h3 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-6 tracking-tight">모던 시그니처 기프트 세트</h3>
<p className="text-base sm:text-lg text-brand-text leading-[1.6] mb-8 break-keep">
            오리지널, 흑임자, 견과 단백 3가지 맛이 정갈하게 포장된 패키지입니다. 전용 쇼핑백이 함께 제공되어 답례품이나 명절 선물로 완벽한 품격을 선사합니다.
          </p>
<ul className="space-y-4 text-brand-text">
<li className="flex items-center gap-3"><iconify-icon className="text-brand-green text-xl" icon="solar:check-circle-bold"></iconify-icon> 프리미엄 종이 패키지 및 전용 쇼핑백</li>
<li className="flex items-center gap-3"><iconify-icon className="text-brand-green text-xl" icon="solar:check-circle-bold"></iconify-icon> 취향에 맞게 즐기는 3가지 맛 다채로운 구성</li>
</ul>
</div>
<div className="order-1 lg:order-2 aspect-[4/3] rounded-[32px] overflow-hidden bg-white border border-brand-border shadow-2xl" data-anim="scale">
<img alt="Gift Set" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1933bfd9-7c83-4ebd-b21c-7c7b97e44dda_1600w.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white py-20 sm:py-28" id="plans">
<div className="px-6 sm:px-8 lg:px-14 max-w-[1380px] mx-auto">
<div className="mb-16 text-center" data-anim="up">
<span className="text-brand-green font-bold text-sm tracking-widest uppercase mb-4 block">Pre-Order</span>
<h2 className="text-3xl sm:text-5xl font-serif font-semibold text-brand-dark leading-[1.3] break-keep mb-4">
          가장 먼저 만나는 <span className="text-brand-green">사전 예약 혜택</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col rounded-[32px] bg-brand-bg border border-brand-border/60 overflow-hidden hover:shadow-xl transition-shadow" data-anim="up">
<div className="h-56 overflow-hidden">
<img alt="Daily" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b61779ff-89a1-4026-960f-ebe282b86b7d_3840w.png"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-white m-2 rounded-[24px]">
<h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">데일리 스낵</h3>
<p className="text-sm font-bold text-brand-muted mb-6">과일 저당 약과 1박스</p>
<div className="border-t border-brand-border mb-6"></div>
<p className="text-base text-brand-text leading-[1.6] mb-8 flex-grow">과일 저당 약과 (15개입)<br/>가벼운 시작을 위한 기본 구성</p>
<p className="text-3xl font-bold text-brand-dark mb-6">
              2,500<span className="text-lg font-normal text-brand-muted ml-1">원</span></p>
<a className="w-full py-4 rounded-xl border-2 border-brand-dark text-brand-dark font-bold text-center hover:bg-brand-dark hover:text-white transition-colors" href="#">선택하기</a>
</div>
</div>

<div className="flex flex-col rounded-[32px] bg-brand-green border border-brand-green overflow-hidden shadow-2xl transform md:-translate-y-4 relative" data-anim="up">
<div className="absolute top-6 right-6 bg-white text-brand-green text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
            Best Choice</div>
<div className="h-56 overflow-hidden">
<img alt="Gift" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1933bfd9-7c83-4ebd-b21c-7c7b97e44dda_1600w.png?w=800&amp;q=80"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-brand-bg m-2 rounded-[24px]">
<h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">가벼운 선물용</h3>
<p className="text-sm font-bold text-brand-green mb-6">과일 저당 약과 3박스 세트</p>
<div className="border-t border-brand-border mb-6"></div>
<p className="text-base text-brand-text leading-[1.6] mb-8 flex-grow">취향에 맞게 즐기는 3가지 맛<br/>다채로운 구성으로 풍성하게</p>
<p className="text-3xl font-bold text-brand-dark mb-6">
              14,900<span className="text-lg font-normal text-brand-muted ml-1">원</span></p>
<a className="w-full py-4 rounded-xl bg-brand-dark text-white font-bold text-center hover:bg-black transition-colors shadow-lg" href="#">예약하기</a>
</div>
</div>

<div className="flex flex-col rounded-[32px] bg-brand-bg border border-brand-border/60 overflow-hidden hover:shadow-xl transition-shadow" data-anim="up">
<div className="h-56 overflow-hidden">
<img alt="Premium" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/308bde2e-1ecb-41a5-abe0-543b1d9f0930_1600w.png"/>
</div>
<div className="p-8 flex flex-col flex-grow bg-white m-2 rounded-[24px]">
<h3 className="text-2xl font-bold text-brand-dark mb-2 tracking-tight">프리미엄 세트</h3>
<p className="text-sm font-bold text-brand-muted mb-6">모던 시그니처 기프트 세트</p>
<div className="border-t border-brand-border mb-6"></div>
<p className="text-base text-brand-text leading-[1.6] mb-8 flex-grow">고급스러운 패키 디자인<br/>12가지 맛의 완벽한 밸런스</p>
<p className="text-3xl font-bold text-brand-dark mb-6">
              23,000<span className="text-lg font-normal text-brand-muted ml-1">원</span></p>
<a className="w-full py-4 rounded-xl border-2 border-brand-dark text-brand-dark font-bold text-center hover:bg-brand-dark hover:text-white transition-colors" href="#">선택하기</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-bg border-t border-brand-border py-16">
<div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-14 text-center">
<iconify-icon className="text-4xl text-brand-green mb-6" icon="solar:stars-linear"></iconify-icon>
<p className="text-2xl sm:text-3xl font-serif font-semibold text-brand-dark mb-6">"디저트가 삶의 위로가 되도록"</p>
<p className="text-base text-brand-text mb-12 max-w-2xl mx-auto break-keep leading-[1.6]">
        맛있는 것을 먹을 때의 행복이 건강에 대한 불안으로 돌아오지 않기를 바랍니다.<br/>Re:Food Lab의 첫 번째 한정 수량을 가장 먼저 경험해 보세요.
      </p>
<div className="border-t border-brand-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-left">
<h4 className="font-bold text-brand-dark text-lg mb-1">Re:Food Lab</h4>
<p className="text-sm text-brand-muted">건강한 푸드테크의 시작</p>
</div>
<p className="text-sm text-brand-muted">Copyright © 2024 Re:Food Lab. All rights reserved.</p>
<div className="flex gap-4 text-sm font-medium text-brand-text">
<a className="hover:text-brand-green" href="#">이용약관</a>
<a className="hover:text-brand-green" href="#">개인정보처리방침</a>
</div>
</div>
</div>
</footer>





    </>
  );
}
