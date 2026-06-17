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



        document.addEventListener('DOMContentLoaded', () => {
            // Register ScrollTrigger
            gsap.registerPlugin(ScrollTrigger);

            // Navbar background opacity on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-black/80');
                    navbar.classList.remove('bg-black/50');
                } else {
                    navbar.classList.add('bg-black/50');
                    navbar.classList.remove('bg-black/80');
                }
            });

            // Reveal Animations
            const revealElements = document.querySelectorAll('.gs-reveal');
            
            revealElements.forEach((elem) => {
                gsap.fromTo(elem, 
                    { 
                        y: 40, 
                        opacity: 0 
                    }, 
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%", // Trigger when top of element hits 85% down viewport
                            toggleActions: "play none none reverse" // Replay when scrolling back up (optional, change to "play none none none" for once)
                        }
                    }
                );
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if(targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
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
      
<div className="noise-bg"></div>

<nav className="fixed top-0 w-full z-40 bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-[0.2em] text-white uppercase" href="#">RE:FOOD LAB</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-white/60 hover:text-white transition-colors tracking-wide" href="#philosophy">Philosophy</a>
<a className="text-xs text-white/60 hover:text-white transition-colors tracking-wide" href="#values">Values</a>
<a className="text-xs text-white/60 hover:text-white transition-colors tracking-wide" href="#pricing">Plans</a>
</div>
<a className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full hover:bg-neutral-200 transition-colors tracking-wide" href="#pricing">
                예약하기
            </a>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
<div className="glow-blob bg-amber-600/20 w-[600px] h-[600px] top-1/4 -left-1/4"></div>
<div className="glow-blob bg-orange-500/10 w-[500px] h-[500px] bottom-1/4 -right-1/4"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 gs-reveal">
<span className="inline-block py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs text-white/70 tracking-wide mb-8">
                    약과는 좋아하지만 당과 칼로리는 부담스러우셨나요?
                </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-white leading-[1.1] mb-8 text-gradient">
                    이제 죄책감 없이,<br/>
                    과일의 상큼함으로 채운<br/>
                    새로운 약과를 만나보세요.
                </h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:scale-[1.02] transition-transform duration-300 tracking-wide" href="#pricing">
                        한정수량 예약하러 가기
                    </a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 gs-reveal">
<span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="mb-20 md:w-2/3 gs-reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                        전통의 쫀득함에 과일의 상큼함을 더한,<br/>
                        단백질 로우슈거 약과
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 gs-reveal">
<iconify-icon className="text-2xl text-amber-500/80 mb-6" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">상큼한 대전환</h3>
<p className="text-sm text-white/60 leading-relaxed">기름진 맛 대신 과일의 풍미를 더해 끝맛까지 깔끔하게</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 gs-reveal">
<iconify-icon className="text-2xl text-amber-500/80 mb-6" icon="solar:dumbbell-large-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">영양 설계</h3>
<p className="text-sm text-white/60 leading-relaxed">밀가루 대신 콩을 사용해 채운 고단백·고식이섬유</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 gs-reveal">
<iconify-icon className="text-2xl text-amber-500/80 mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">당 걱정 제로</h3>
<p className="text-sm text-white/60 leading-relaxed">설탕 대신 알룰로스로 구현한 건강하고 깊은 단맛</p>
</div>
<div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 gs-reveal">
<iconify-icon className="text-2xl text-amber-500/80 mb-6" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-white mb-3">한입의 즐거움</h3>
<p className="text-sm text-white/60 leading-relaxed">언제 어디서나 깔끔하게 즐기는 미니 사이즈</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 gs-reveal">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-4">
                        "왜 맛있는 간식은 항상 몸에 미안할까요?"
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
<div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block -translate-y-1/2"></div>
<div className="relative pt-8 md:pt-12 border-t md:border-t-0 border-white/5 gs-reveal">
<div className="absolute top-0 md:top-1/2 left-0 md:left-1/2 w-2 h-2 bg-amber-500/50 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
<h3 className="text-base font-medium tracking-tight text-white mb-4">식단 관리 중인 다이어터</h3>
<p className="text-sm text-white/50 leading-relaxed">달콤한 디저트가 간절하지만, 높은 당과 칼로리 때문에 망설여짐</p>
</div>
<div className="relative pt-8 md:pt-12 border-t md:border-t-0 border-white/5 gs-reveal">
<div className="absolute top-0 md:top-1/2 left-0 md:left-1/2 w-2 h-2 bg-amber-500/50 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
<h3 className="text-base font-medium tracking-tight text-white mb-4">아이 간식을 고민하는 부모님</h3>
<p className="text-sm text-white/50 leading-relaxed">시판 과자의 첨가물과 설탕이 걱정되어 건강한 원재료의 간식을 찾음</p>
</div>
<div className="relative pt-8 md:pt-12 border-t md:border-t-0 border-white/5 gs-reveal">
<div className="absolute top-0 md:top-1/2 left-0 md:left-1/2 w-2 h-2 bg-amber-500/50 rounded-full -translate-x-1/2 -translate-y-1/2 hidden md:block"></div>
<h3 className="text-base font-medium tracking-tight text-white mb-4">전통 간식 애호가</h3>
<p className="text-sm text-white/50 leading-relaxed">약과의 식감은 좋으나 특유의 느끼함 때문에 많이 먹지 못함</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto">
<div className="mb-16 gs-reveal">
<span className="text-xs text-amber-500/80 tracking-widest uppercase mb-4 block">Process</span>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white">
                        Re:Food Lab이 약과를 재해석하는 방법
                    </h2>
</div>
<div className="flex flex-col md:flex-row gap-6">
<div className="flex-1 p-8 rounded-2xl bg-black/40 border border-white/5 gs-reveal">
<span className="text-4xl font-light text-white/10 mb-6 block">01</span>
<h3 className="text-base font-medium text-white mb-2">과일 블렌딩</h3>
<p className="text-xs text-white/50 leading-relaxed">신선한 과일의 풍미를 담아 상큼한 베이스를 만듭니다.</p>
</div>
<div className="flex-1 p-8 rounded-2xl bg-black/40 border border-white/5 gs-reveal">
<span className="text-4xl font-light text-white/10 mb-6 block">02</span>
<h3 className="text-base font-medium text-white mb-2">단백질 베이킹</h3>
<p className="text-xs text-white/50 leading-relaxed">콩을 베이스로 하여 단백질과 식이섬유의 밸런스를 잡습니다.</p>
</div>
<div className="flex-1 p-8 rounded-2xl bg-black/40 border border-white/5 gs-reveal">
<span className="text-4xl font-light text-white/10 mb-6 block">03</span>
<h3 className="text-base font-medium text-white mb-2">로우슈거 공법</h3>
<p className="text-xs text-white/50 leading-relaxed">알룰로스를 활용해 칼로리 부담을 낮춘 집청 과정을 거칩니다.</p>
</div>
<div className="flex-1 p-8 rounded-2xl bg-black/40 border border-white/5 gs-reveal">
<span className="text-4xl font-light text-white/10 mb-6 block">04</span>
<h3 className="text-base font-medium text-white mb-2">미니 큐어링</h3>
<p className="text-xs text-white/50 leading-relaxed">한입에 먹기 좋은 사이즈로 완성하여 쫀득한 식감을 살립니다.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 flex flex-col gap-32" id="values">

<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center gs-reveal">
<div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Soy beans" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 md:pl-12">
<span className="text-xs text-white/40 tracking-widest uppercase mb-4 block">Value #1</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                        밀가루 대신 '콩',<br/>간식을 넘어선 영양
                    </h2>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
                        단순히 배를 채우는 간식이 아닙니다. 콩 기반의 원재료로 단백질과 식이섬유 함량을 높였습니다. 이제 약과 한 입으로도 건강한 영양소를 챙길 수 있습니다.
                    </p>
</div>
</div>

<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center gs-reveal">
<div className="md:pr-12">
<span className="text-xs text-white/40 tracking-widest uppercase mb-4 block">Value #2</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                        설탕 없이도 완벽한<br/>'알룰로스'의 달콤함
                    </h2>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
                        당류 함량은 확 낮추고 단맛의 풍미는 그대로 유지했습니다. 알룰로스를 사용하여 혈당 걱정이나 칼로리 죄책감 없이 온 가족이 마음 편히 즐길 수 있습니다.
                    </p>
</div>
<div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Honey drip" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center gs-reveal">
<div className="order-2 md:order-1 relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Minimalist pocket" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 md:pl-12">
<span className="text-xs text-white/40 tracking-widest uppercase mb-4 block">Value #3</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 leading-tight">
                        가방 속에 쏙,<br/>일상 어디서나 즐기는 미니멀 디저트
                    </h2>
<p className="text-sm text-white/60 leading-relaxed max-w-md">
                        끈적이고 먹기 불편했던 큰 약과의 단점을 해결했습니다. 한입 사이즈의 미니 약과로 사무실, 운동 전후, 이동 중에도 깔끔하고 가볍게 즐기세요.
                    </p>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-950" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 gs-reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
                        건강한 달콤함을<br/>가장 먼저 경험하세요
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col gs-reveal">
<h3 className="text-xl font-medium text-white mb-2">스타터 팩 <span className="text-sm text-white/40 font-light">(10개입)</span></h3>
<p className="text-xs text-white/50 mb-8 h-10">1인 가구를 위한 가벼운 시작</p>
<div className="mt-auto pt-8 border-t border-white/5">
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm hover:bg-white hover:text-black transition-colors">선택하기</button>
</div>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/80 border border-amber-500/20 relative flex flex-col gs-reveal transform md:-translate-y-4 shadow-2xl shadow-amber-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-black text-[10px] font-medium tracking-widest uppercase rounded-full">Best</div>
<h3 className="text-xl font-medium text-white mb-2">패밀리 팩 <span className="text-sm text-amber-500/60 font-light">(30개입)</span></h3>
<p className="text-xs text-white/60 mb-8 h-10">온 가족 영양 간식으로 넉넉하게</p>
<div className="mt-auto pt-8 border-t border-white/5">
<button className="w-full py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">선택하기</button>
</div>
</div>

<div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col gs-reveal">
<h3 className="text-xl font-medium text-white mb-2">선물용 세트</h3>
<p className="text-xs text-white/50 mb-8 h-10">소중한 분께 드리는 건강한 아름다움</p>
<div className="mt-auto pt-8 border-t border-white/5">
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm hover:bg-white hover:text-black transition-colors">선택하기</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="mb-16 gs-reveal">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white">
                        Re:Food Lab 약과와 함께할 새로운 일상
                    </h2>
</div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-12 snap-x gs-reveal">
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl bg-neutral-900/30 border border-white/5 snap-start">
<iconify-icon className="text-2xl text-white/20 mb-6" icon="solar:cup-hot-linear"></iconify-icon>
<p className="text-base font-light text-white leading-relaxed">
                            "오후 4시, 당 떨어지는 시간에 칼로리 걱정 없이 즐기는 상큼한 휴식"
                        </p>
</div>
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl bg-neutral-900/30 border border-white/5 snap-start">
<iconify-icon className="text-2xl text-white/20 mb-6" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<p className="text-base font-light text-white leading-relaxed">
                            "아이들에게 과자 대신 내어주는 든든하고 건강한 단백질 간식"
                        </p>
</div>
<div className="min-w-[300px] md:min-w-[400px] p-8 rounded-2xl bg-neutral-900/30 border border-white/5 snap-start">
<iconify-icon className="text-2xl text-white/20 mb-6" icon="solar:running-linear"></iconify-icon>
<p className="text-base font-light text-white leading-relaxed">
                            "운동 후 가볍게 당 충전이 필요할 때 찾는 깔끔한 에너지원"
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-3xl mx-auto gs-reveal">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">
                    궁금한 점을 확인해보세요
                </h2>
<div className="space-y-4">
<details className="group bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white">
                            Q. 설탕이 안 들어갔는데 정말 달콤한가요?
                            <iconify-icon className="text-white/50 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-white/50 leading-relaxed border-t border-white/5 mt-2">
                            A. 네, 설탕 대신 천연 감미료인 알룰로스를 사용하여 약과 특유의 깊은 단맛을 건강하게 구현했습니다.
                        </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white">
                            Q. 콩으로 만들면 식감이 딱딱하지 않나요?
                            <iconify-icon className="text-white/50 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-white/50 leading-relaxed border-t border-white/5 mt-2">
                            A. Re:Food Lab만의 공법으로 일반 약과보다 더 쫀득하고 부드러운 식감을 완성했습니다.
                        </div>
</details>
<details className="group bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-sm font-medium text-white">
                            Q. 과일 맛이 약과와 잘 어울릴까요?
                            <iconify-icon className="text-white/50 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-6 pt-0 text-sm text-white/50 leading-relaxed border-t border-white/5 mt-2">
                            A. 기존 약과의 기름진 맛을 과일의 상큼함이 잡아주어 훨씬 산뜻하고 질리지 않는 맛을 선사합니다.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-40 px-6 relative overflow-hidden flex items-center justify-center text-center">
<div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-950 to-neutral-900/20"></div>
<div className="max-w-4xl mx-auto relative z-10 gs-reveal">
<h2 className="text-2xl md:text-5xl font-medium tracking-tighter text-white mb-8 leading-tight">
                    "우리는 즐거운 식사가<br/>건강을 해치지 않아야 한다고 믿습니다."
                </h2>
<p className="text-sm text-white/50 leading-relaxed max-w-2xl mx-auto mb-12">
                    Re:Food Lab은 익숙한 전통 간식을 현대적인 영양 설계로 재해석합니다. 단순히 맛있는 간식을 넘어, 당신의 지속 가능한 식단을 응원하는 든든한 파트너가 되겠습니다. 지금, 세상에 없던 상큼한 약과를 가장 먼저 경험해보세요.
                </p>
<a className="inline-block px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:scale-[1.02] transition-transform duration-300 tracking-wide" href="#pricing">
                    경험하기
                </a>
</div>
</section>
</main>

<footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="text-sm font-medium tracking-[0.2em] text-white uppercase mb-4">RE:FOOD LAB</div>
<p className="text-xs text-white/40 leading-relaxed max-w-xs">
                    익숙함을 넘어선 새로운 건강함.<br/>전통 디저트의 진화.
                </p>
</div>
<div className="md:text-right space-y-2">
<p className="text-xs text-white/50">대표: 대표자명 입력</p>
<p className="text-xs text-white/50">주소: 서울특별시 상세 주소 입력</p>
<p className="text-xs text-white/50">문의: <a className="hover:text-white transition-colors" href="mailto:contact@refoodlab.com">contact@refoodlab.com</a></p>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-xs text-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 Re:Food Lab. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
