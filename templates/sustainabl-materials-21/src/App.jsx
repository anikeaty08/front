import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", () => {
      // 1. Lenis Smooth Scrolling
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
      });

      lenis.stop();

      gsap.registerPlugin(ScrollTrigger);
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0, 0);

      gsap.set("body", { opacity: 1 });
      document.body.style.overflow = "hidden";

      // 2. Preloader Animation
      const loaderCounter = document.getElementById("loader-counter");
      const loaderProgress = document.getElementById("loader-progress");
      
      const tlLoader = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          lenis.start();
          ScrollTrigger.refresh(); 
        }
      });

      tlLoader
        .to(loaderCounter, { y: 0, duration: 1, ease: "power4.out" })
        .to(loaderProgress, { width: "100%", duration: 1.5, ease: "power2.inOut" }, "-=0.5")
        .to({ val: 0 }, { 
          val: 100, 
          duration: 1.5, 
          ease: "power2.inOut",
          onUpdate: function() {
            loaderCounter.textContent = Math.round(this.targets()[0].val);
          }
        }, "-=1.5")
        .to("#loader", { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.2 })
        .from("#hero-img", { scale: 1.1, duration: 1.5, ease: "power3.out" }, "-=0.8")
        .to("#hero-title-l", { y: 0, duration: 1, ease: "power4.out" }, "-=1")
        .to("#hero-title-r", { y: 0, duration: 1, ease: "power4.out" }, "-=0.8");

      // 3. Intro Text Scrub Animation
      const introWords = document.querySelectorAll("#intro-scrub span");
      if(introWords.length > 0) {
        gsap.to(introWords, {
          scrollTrigger: {
            trigger: "#intro-scrub",
            start: "top 80%",
            end: "bottom 50%",
            scrub: 1,
          },
          color: "#FFFFFF",
          opacity: 1,
          stagger: 0.1
        });
      }

      // 4. Horizontal Scroll (Process Section)
      const horizWrap = document.getElementById("horiz-wrap");
      if(horizWrap) {
        const getScrollAmount = () => horizWrap.scrollWidth - window.innerWidth;
        const tween = gsap.to(horizWrap, {
          x: () => -getScrollAmount(),
          ease: "none",
        });

        ScrollTrigger.create({
          trigger: "#process",
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          animation: tween,
          scrub: 1,
          invalidateOnRefresh: true,
        });
      }

      // 5. Footer Reveal Elements Animation
      gsap.from(".footer-el", {
        scrollTrigger: {
          trigger: "footer",
          start: "top 80%",
          end: "bottom bottom",
          scrub: 1
        },
        y: 30,
        opacity: 0,
        stagger: 0.1
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div style={{position: 'fixed', inset: '0', pointerEvents: 'none', zIndex: '9999', opacity: '0.03', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noise)\\'/%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 bg-[#050505] z-[10000] flex justify-center items-center text-white" id="loader">
<div className="overflow-hidden mb-6">
<div className="font-['Space_Grotesk',sans-serif] text-7xl md:text-9xl font-normal tracking-tighter leading-none translate-y-full pb-2 text-[#C0A080]" id="loader-counter">0</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-white/10 overflow-hidden">
<div className="w-0 h-full bg-[#C0A080]" id="loader-progress"></div>
</div>
</div>

<nav className="fixed top-0 w-full px-6 py-4 md:px-12 md:py-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<a className="flex items-center" href="#hero">
<span className="font-['Space_Grotesk',sans-serif] text-lg md:text-xl font-medium tracking-tighter uppercase hover:text-[#C0A080] transition-colors">GROUNDPOLY</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-normal tracking-widest uppercase opacity-80">
<a className="hover:text-[#C0A080] transition-colors" href="#intro">Vision</a>
<a className="hover:text-[#C0A080] transition-colors" href="#process">Process</a>
<a className="hover:text-[#C0A080] transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-[#C0A080] transition-colors" href="#pricing">Plans</a>
</div>
<button className="md:hidden group flex items-center justify-center">
<iconify-icon className="w-6 h-6 group-hover:text-[#C0A080] transition-colors" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</nav>

<div className="relative z-10 bg-[#050505] mb-[100vh] shadow-[0_50px_100px_rgba(0,0,0,0.9)] rounded-b-[2rem]" id="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden" id="hero">
<div className="w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Coffee Grounds Texture" className="brightness-[0.3] w-full h-full object-cover grayscale opacity-80" id="hero-img" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col gap-4 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050505] absolute top-0 right-0 bottom-0 left-0 items-center justify-center z-[5] pb-20">
<p className="text-xs md:text-sm font-normal tracking-widest text-[#C0A080] uppercase mt-20 md:mt-0 text-center px-4">매일 버려지는 커피 찌꺼기의 놀라운 변신</p>
<p className="text-base md:text-lg font-light tracking-tight text-white/90 text-center px-4 max-w-lg">이제 플라스틱 대신 <span className="font-normal text-white">'커피'</span>로 만든 소재에 주목하세요.</p>
<div className="flex gap-4 mt-8 pointer-events-auto">
<a className="px-6 py-3 border border-[#C0A080]/50 text-[#C0A080] text-xs font-normal tracking-widest uppercase hover:bg-[#C0A080] hover:text-[#050505] transition-all duration-300 rounded-full" href="#apply">사전 예약하기</a>
<a className="px-6 py-3 border border-white/20 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-all duration-300 rounded-full" href="#notify">출시 알림받기</a>
</div>
</div>
</div>
<div className="relative z-10 w-full h-full flex flex-col justify-between pointer-events-none mix-blend-difference py-32 px-6 md:px-12">
<div className="overflow-hidden self-start">
<h1 className="text-[16vw] md:text-[14vw] font-['Space_Grotesk',sans-serif] leading-[0.85] tracking-tighter mix-blend-difference text-white font-medium translate-y-full block" id="hero-title-l">
            GROUND
          </h1>
</div>
<div className="overflow-hidden self-end flex items-end gap-4">
<h1 className="text-[16vw] md:text-[14vw] font-['Space_Grotesk',sans-serif] leading-[0.85] tracking-tighter mix-blend-difference text-[#C0A080] font-light italic translate-y-full block" id="hero-title-r">
            POLY
          </h1>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-20 max-w-[1600px] mx-auto relative z-20 bg-[#050505]" id="intro">
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
<div className="col-span-12 lg:col-span-4 flex flex-col justify-start border-t border-white/10 pt-4 mb-4 lg:mb-0">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest uppercase">01 — The Vision</span>
</div>
<div className="col-span-12 lg:col-span-8 lg:col-start-5">
<h2 className="md:text-5xl lg:text-6xl leading-[1.2] text-3xl font-normal tracking-tight max-w-5xl mb-16" id="intro-scrub">
<span className="inline-block will-change-[color] text-white/10">버려지는 </span><span className="inline-block will-change-[color] text-white/10">커피박을 </span><span className="inline-block will-change-[color] text-white/10">산업의 </span><span className="inline-block will-change-[color] text-white/10">핵심 </span><span className="inline-block will-change-[color] text-white/10">자원으로, </span><span className="inline-block will-change-[color] text-white/10">혁신 </span><span className="inline-block will-change-[color] text-white/10">소재 </span><span className="inline-block will-change-[color] text-white/10">솔루션 </span><span className="inline-block will-change-[color] text-[#C0A080] opacity-10">그라운드폴리. </span>
</h2>
<div className="grid md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-white/5">
<div className="flex flex-col gap-4">
<iconify-icon className="text-2xl text-[#C0A080]" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-normal tracking-tight text-white">플라스틱 대체 신소재</h3>
<p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">커피박을 재가공하여 기존 플라스틱 소재의 물리적 성질을 구현하면서도 환경 부담을 획기적으로 줄입니다.</p>
</div>
<div className="flex flex-col gap-4">
<iconify-icon className="text-2xl text-[#C0A080]" icon="solar:layers-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-normal tracking-tight text-white">높은 범용성</h3>
<p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">규격화된 소재 공급을 통해 포장재, 생활용품, 산업용 부품 등 다양한 제조 공정에 즉시 적용 가능합니다.</p>
</div>
<div className="flex flex-col gap-4">
<iconify-icon className="text-2xl text-[#C0A080]" icon="solar:recycle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-base font-normal tracking-tight text-white">지속 가능한 순환 경제</h3>
<p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">버려지는 자원을 다시 제품으로 만드는 업사이클링 프로세스로 기업의 ESG 경영 실천을 돕습니다.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#0A0A0A] border border-white/5 rounded-2xl relative z-20 overflow-hidden my-12 mx-4 md:mx-12">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C0A080]/5 to-transparent pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-16 justify-between">
<div className="md:w-1/3">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-[#C0A080] animate-pulse"></div>
<span className="text-xs font-['Space_Grotesk',sans-serif] uppercase tracking-widest text-gray-500">Target &amp; Needs</span>
</div>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white leading-tight mb-6">
                    환경을 생각하는<br/>기업의 고민,<br/><span className="text-[#C0A080]">그라운드폴리가 답을 찾았습니다.</span>
</h2>
</div>
<div className="md:w-2/3 grid gap-6">
<div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
<span className="text-xs text-[#C0A080] font-normal mb-2 block">친환경 패키징이 필요한 브랜드</span>
<p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">"종이는 약하고 플라스틱은 죄책감이 들 때, 내구성과 친환경성을 모두 잡은 소재가 필요합니다."</p>
</div>
<div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
<span className="text-xs text-[#C0A080] font-normal mb-2 block">ESG 성과가 필요한 제조사</span>
<p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">"탄소 배출을 줄여야 하지만, 기존 공정을 완전히 바꾸기에는 비용과 리스크가 부담스럽습니다."</p>
</div>
<div className="p-6 md:p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/30 transition-colors group">
<span className="text-xs text-[#C0A080] font-normal mb-2 block">차별화된 제품을 원하는 디자이너</span>
<p className="text-sm md:text-base text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">"제품의 스토리텔링까지 완성해줄 수 있는 독특하고 혁신적인 질감의 소재를 찾고 있습니다."</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden h-[100vh] border-white/5 border-t relative bg-[#050505] z-20 w-full mt-24" id="process">
<div className="flex w-[400%] h-full will-change-transform" id="horiz-wrap">

<div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Process 1" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 01</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
              수거 및 선별
            </h2>
<p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
              카페 등에서 발생하는 양질의 커피박을 체계적으로 수거합니다. 원료의 순도를 높이기 위한 첫 번째 핵심 단계입니다.
            </p>
</div>
<div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
<span className="text-[20vw] font-['Space_Grotesk',sans-serif] text-white/5 font-light leading-none">01</span>
</div>
</div>

<div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#0A0A0A] border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Process 2" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 02</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
              소재 고도화 공정
            </h2>
<p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
              건조, 분쇄, 배합 기술을 통해 산업용으로 활용 가능한 고품질 원료로 변환합니다. 그라운드폴리만의 독자적인 가공 기술이 적용됩니다.
            </p>
</div>
<div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
<span className="text-[20vw] font-['Space_Grotesk',sans-serif] text-white/5 font-light leading-none">02</span>
</div>
</div>

<div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#050505] border-r border-white/5 pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Process 3" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 03</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
              맞춤형 소재 공급
            </h2>
<p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
              고객사의 제품 특성에 최적화된 물성과 형태로 소재를 가공하여 전달합니다. 펠릿 형태부터 시트까지 다양한 규격을 지원합니다.
            </p>
</div>
<div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
<span className="text-[20vw] font-['Space_Grotesk',sans-serif] text-white/5 font-light leading-none">03</span>
</div>
</div>

<div className="relative w-1/4 h-full flex flex-col md:flex-row items-center justify-evenly md:justify-between px-6 md:px-20 bg-[#0A0A0A] pt-24 pb-8 md:py-0 overflow-hidden shrink-0">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Process 4" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
</div>
<div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest border border-[#C0A080]/30 px-3 py-1 rounded-full">STEP 04</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight text-white mb-6">
              제품 양산 및 적용
            </h2>
<p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed font-light">
              기존 설비를 활용해 포장재 및 다양한 산업 제품을 생산합니다. 별도의 대규모 설비 투자 없이 친환경 라인업을 구축할 수 있습니다.
            </p>
</div>
<div className="relative z-10 hidden md:flex items-center justify-center w-[40%]">
<span className="text-[20vw] font-['Space_Grotesk',sans-serif] text-white/5 font-light leading-none">04</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-20 max-w-[1600px] mx-auto bg-[#050505] overflow-hidden border-t border-white/5 relative z-20" id="solutions">
<div className="mb-16 md:mb-24">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest uppercase block mb-4">Core Values</span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white">
          지속 가능한 미래를 위한<br/>가장 현실적인 대안.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 md:mb-40">
<div className="order-2 md:order-1">
<h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">플라스틱의 익숙함은 그대로,<br/>지구에 미치는 영향은 최소로.</h3>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
              그라운드폴리는 단순히 환경에 좋은 소재를 넘어, 실제 산업 현장에서 플라스틱을 대체할 수 있는 강력한 물성을 제공합니다. 사용자는 기존 플라스틱 제품의 편리함을 그대로 누리면서도, 매립 시 생분해되거나 재활용이 용이한 환경 친화적 경험을 할 수 있습니다.
            </p>
<div className="w-12 h-px bg-[#C0A080]/50"></div>
</div>
<div className="order-1 md:order-2 aspect-[4/3] relative rounded-lg overflow-hidden border border-white/5">
<img alt="Sustainable" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-24 md:mb-40">
<div className="aspect-[4/3] relative rounded-lg overflow-hidden border border-white/5">
<img alt="Versatility" className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">포장재부터 가전까지,<br/>상상을 현실로 만드는 범용성.</h3>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
              특정 분야에 국한되지 않습니다. 그라운드폴리의 소재 기술은 얇은 필름 형태의 포장재부터 단단한 성형이 필요한 산업용 부품까지 넓은 스펙트럼을 커버합니다. 귀사의 제품군이 무엇이든, 커피박 소재가 가진 고유의 가치를 더해 새로운 제품 라인업을 구성할 수 있습니다.
            </p>
<div className="w-12 h-px bg-[#C0A080]/50"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="order-2 md:order-1">
<h3 className="text-xl md:text-3xl font-normal tracking-tight text-white mb-4">지속 가능한 미래를 위한<br/>가장 현실적인 대안.</h3>
<p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6">
              환경 보호는 거창한 구호가 아니라 실질적인 소재의 변화에서 시작됩니다. 커피박이라는 풍부한 자원을 활용함으로써 원료 공급의 안정성을 확보하고, 기업이 지속 가능성 목표를 달성할 수 있도록 가장 효율적이고 경제적인 경로를 제시합니다.
            </p>
<div className="w-12 h-px bg-[#C0A080]/50"></div>
</div>
<div className="order-1 md:order-2 aspect-[4/3] relative rounded-lg overflow-hidden bg-[#0A0A0A] border border-white/5 flex flex-col justify-center p-12">
<iconify-icon className="text-4xl text-[#C0A080] mb-6" icon="solar:chart-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-2xl font-normal text-white mb-2 tracking-tight">ESG Compliance</div>
<p className="text-sm text-gray-500 font-['Space_Grotesk',sans-serif] uppercase tracking-widest">Carbon Footprint Reduction Ready</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-20 bg-[#0A0A0A] border-t border-b border-white/5 relative z-20" id="pricing">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] tracking-widest uppercase block mb-4">Pricing &amp; Plans</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">비즈니스 규모에 맞는 최적의 소재 솔루션</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/50 transition-all duration-300 flex flex-col">
<h3 className="text-lg font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-2 uppercase">Starter Kit</h3>
<p className="text-xs text-[#C0A080] mb-8 font-light">초기 테스트 및 샘플링</p>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
              소재 적용 가능성을 테스트하고 싶은 기업을 위한 기본 샘플 패키지. 물성 확인 및 소규모 프로토타입 제작에 적합합니다.
            </p>
<button className="w-full py-3 border border-white/10 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">문의하기</button>
</div>

<div className="p-8 border border-[#C0A080]/30 bg-[#050505] rounded-xl relative flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(192,160,128,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C0A080] text-[#050505] text-[10px] font-medium tracking-widest uppercase px-3 py-1 rounded-full">Recommended</div>
<h3 className="text-lg font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-2 uppercase">Standard Plan</h3>
<p className="text-xs text-[#C0A080] mb-8 font-light">중소규모 양산</p>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
              중소규모 제품 양산을 위한 표준 규격 소재를 안정적으로 공급합니다. 기존 사출 공정에 즉각 적용 가능한 범용 라인업입니다.
            </p>
<button className="w-full py-3 bg-[#C0A080] text-[#050505] text-xs font-medium tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">플랜 시작하기</button>
</div>

<div className="p-8 border border-white/5 bg-[#050505] rounded-xl hover:border-[#C0A080]/50 transition-all duration-300 flex flex-col">
<h3 className="text-lg font-['Space_Grotesk',sans-serif] text-white tracking-tight mb-2 uppercase">Enterprise</h3>
<p className="text-xs text-[#C0A080] mb-8 font-light">대규모/맞춤형 솔루션</p>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-grow">
              대량 생산 및 특정 물성 개발이 필요한 기업용 커스텀 솔루션. 전담 엔지니어 배정 및 공급망 최적화를 지원합니다.
            </p>
<button className="w-full py-3 border border-white/10 text-white text-xs font-normal tracking-widest uppercase hover:bg-white hover:text-[#050505] transition-colors rounded-full">맞춤 상담</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#050505] text-white relative z-20">
<div className="px-6 md:px-20 max-w-[1600px] mx-auto grid lg:grid-cols-5 gap-12 md:gap-16">
<div className="lg:col-span-2">
<span className="text-xs font-['Space_Grotesk',sans-serif] text-[#C0A080] block mb-6 tracking-widest uppercase">
            Voices of Change
          </span>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
            그라운드폴리와<br/>함께할 변화의 목소리
          </h2>
</div>
<div className="lg:col-span-3 flex flex-col gap-0">
<div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
<p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
              "플라스틱 사용량 절감 수치를 명확히 제시할 수 있어 브랜드 이미지 제고에 큰 도움이 될 것으로 기대합니다."
            </p>
<span className="text-xs font-normal text-[#C0A080]">글로벌 F&amp;B 브랜드 지속가능경영팀</span>
</div>
<div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
<p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
              "커피박 특유의 질감과 색감이 제품에 자연스럽게 녹아들어 디자인 완성도가 높아질 것 같습니다."
            </p>
<span className="text-xs font-normal text-[#C0A080]">라이프스타일 제품 수석 디자이너</span>
</div>
<div className="flex flex-col gap-3 border-b border-white/10 py-8 group cursor-default">
<p className="text-base md:text-lg font-light text-gray-400 group-hover:text-white transition-colors leading-relaxed">
              "기존 사출 공정을 크게 수정하지 않고도 친환경 소재를 도입할 수 있다는 점이 가장 큰 매력입니다."
            </p>
<span className="text-xs font-normal text-[#C0A080]">생활가전 제조사 생산기술팀</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-20 max-w-[1000px] mx-auto bg-[#050505] border-t border-white/5 relative z-20">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-4">자주 묻는 질문</h2>
<p className="text-sm text-gray-400 font-light">그라운드폴리에 대해 궁금한 점들을 확인하세요.</p>
</div>
<div className="space-y-4">

<details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">Q. 커피 향이나 색상이 제품에 남나요?</span>
<iconify-icon className="text-white transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
            A. 공정 과정에서 조절이 가능합니다. 소재 고유의 느낌을 살릴 수도, 무취/무색에 가깝게 정제하여 공급할 수도 있어 고객사의 기획 의도에 맞출 수 있습니다.
          </div>
</details>

<details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">Q. 기존 플라스틱 생산 설비를 그대로 사용할 수 있나요?</span>
<iconify-icon className="text-white transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
            A. 네, 그라운드폴리는 범용성을 고려해 설계되었습니다. 기존 사출 및 압출 설비에서 큰 개조 없이 적용 가능한 최적의 배합을 제공합니다.
          </div>
</details>

<details className="group bg-[#0A0A0A] border border-white/5 rounded-lg overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="text-sm md:text-base font-normal text-white group-open:text-[#C0A080] transition-colors">Q. 공급 물량은 안정적인가요?</span>
<iconify-icon className="text-white transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
            A. 국내외 커피 소비량을 바탕으로 체계적인 원료 수급 망을 구축하고 있어, 대규모 양산에도 안정적인 공급이 가능합니다.
          </div>
</details>
</div>
</section>

<section className="py-24 md:py-48 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-[#0A0A0A] z-20 rounded-b-[2rem]">
<div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C0A080]/10 via-[#0A0A0A] to-[#0A0A0A]"></div>
<iconify-icon className="text-4xl text-[#C0A080] mb-8 relative z-10" icon="solar:infinity-linear" style={{strokeWidth: '1px'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-8 relative z-10 text-white leading-tight">
        매일 버려지는 것들 속에서<br/>
        내일의 가능성을 발견하는 <span className="text-[#C0A080] font-light">자원 순환의 설계자.</span>
</h2>
<p className="max-w-2xl text-gray-400 font-light leading-relaxed relative z-10 text-sm md:text-base">
        플라스틱이 주는 편리함은 지키되, 지구가 짊어진 짐은 덜어내고자 합니다.<br/>지금, 그라운드폴리와 함께 지속 가능한 산업의 새로운 표준을 만들어가세요.
      </p>
</section>
<div className="w-full h-px" id="contact-trigger"></div>
</div>

<footer className="fixed bottom-0 left-0 w-full h-screen bg-[#000000] z-0 flex items-center justify-center text-white">
<div className="z-10 text-center w-full max-w-5xl px-6 relative">
<div className="inline-flex gap-2 bg-white/5 border border-white/10 rounded-full mb-8 py-1.5 px-4 backdrop-blur-sm items-center footer-el">
<div className="w-1.5 h-1.5 rounded-full bg-[#C0A080] animate-pulse"></div>
<span className="text-[10px] md:text-xs uppercase text-gray-300 tracking-widest font-['Space_Grotesk',sans-serif]">
          Ready for the Future
        </span>
</div>
<a className="block group footer-el" href="mailto:contact@groundpoly.com">
<h2 className="text-4xl md:text-[8vw] font-['Space_Grotesk',sans-serif] leading-none font-medium tracking-tighter text-white group-hover:text-[#C0A080] transition-colors duration-500 uppercase">
          Contact Us
        </h2>
<div className="h-px w-0 group-hover:w-full bg-[#C0A080] mx-auto transition-all duration-700 ease-out mt-4 md:mt-8"></div>
</a>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-white/10 border-t mt-16 pt-12 footer-el">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-['Space_Grotesk',sans-serif]">
            Company
          </span>
<p className="text-xs text-gray-400 font-light">상호명: 그라운드폴리 (GroundPoly)</p>
<p className="text-xs text-gray-400 font-light">대표: [성함 입력]</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-['Space_Grotesk',sans-serif]">
            Location
          </span>
<p className="text-xs text-gray-400 font-light leading-relaxed">[회사 소재지 입력]<br/>Seoul, Republic of Korea</p>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-['Space_Grotesk',sans-serif]">
            Inquiries
          </span>
<a className="text-xs text-gray-400 font-light hover:text-white transition-colors" href="mailto:email@domain.com">[이메일 입력]</a>
<a className="text-xs text-gray-400 font-light hover:text-white transition-colors" href="#">[연락처 입력]</a>
</div>
<div className="flex flex-col justify-between">
<span className="text-xs uppercase tracking-widest text-[#C0A080] font-normal font-['Space_Grotesk',sans-serif]">
            Social
          </span>
<div className="flex flex-col gap-4">
<a className="text-xs text-gray-400 font-light hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-gray-400 font-light hover:text-white transition-colors" href="#">Instagram</a>
</div>
<div className="text-[10px] text-gray-600 uppercase tracking-widest mt-8 font-['Space_Grotesk',sans-serif]">
            © 2024 GroundPoly
          </div>
</div>
</div>
</div>
</footer>


    </>
  );
}
