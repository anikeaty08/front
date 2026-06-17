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



        var submitted = false;

        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => { observer.observe(el); });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const target = document.querySelector(targetId);
                if(target) { target.scrollIntoView({ behavior: 'smooth' }); }
            });
        });

        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        function toggleFaq(id) {
            const content = document.getElementById(`faq-content-${id}`);
            const icon = document.getElementById(`faq-icon-${id}`);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
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
      
<div className="fixed inset-0 w-full h-full pointer-events-none opacity-[0.04] z-50" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
<nav className="fixed top-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference text-stone-200 transition-all duration-500" id="navbar">
<a className="flex items-center group cursor-pointer" href="#">
<span className="tracking-tighter text-sm md:text-base font-normal">GROUNDPOLY</span>
</a>
<div className="hidden md:flex gap-10 text-xs tracking-widest uppercase text-stone-400 font-extralight">
<a className="relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full hover:text-amber-100 transition-colors duration-300" href="#about">서비스 소개</a>
<a className="relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full hover:text-amber-100 transition-colors duration-300" href="#solutions">솔루션</a>
<a className="relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full hover:text-amber-100 transition-colors duration-300" href="#process">프로세스</a>
<a className="relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full hover:text-amber-100 transition-colors duration-300" href="#faq">FAQ</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 border border-stone-700/50 rounded-full px-5 py-2 hover:border-amber-700/50 hover:bg-amber-900/10 transition-all duration-500 group" href="https://image2url.com/r2/default/files/1774354205507-25e698a5-ab66-4c74-a02a-e5d10bab92d4.png" rel="noopener noreferrer" target="_blank">
<span className="text-xs uppercase tracking-widest text-stone-300 group-hover:text-amber-100 font-extralight">샘플 카달로그</span>
<iconify-icon className="text-stone-400 group-hover:text-amber-100 transition-colors" icon="solar:file-download-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-2 bg-amber-600/80 text-black border border-amber-500/50 rounded-full px-5 py-2 hover:bg-amber-500 transition-all duration-500 group" href="#inquiry">
<span className="text-xs uppercase tracking-widest font-normal">상담하기</span>
</a>
</div>
<button className="md:hidden text-stone-200 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
<div className="hidden fixed z-30 flex-col gap-8 md:hidden bg-black/95 pt-32 px-6 inset-0 backdrop-blur-md transition-opacity duration-300" id="mobile-menu">
<a className="mobile-link text-xl serif tracking-tight text-stone-300 hover:text-amber-200" href="#about">서비스 소개</a>
<a className="mobile-link text-xl serif tracking-tight text-stone-300 hover:text-amber-200" href="#solutions">솔루션</a>
<a className="mobile-link text-xl serif tracking-tight text-stone-300 hover:text-amber-200" href="#process">프로세스</a>
<a className="mobile-link text-xl serif tracking-tight text-stone-300 hover:text-amber-200" href="#faq">FAQ</a>
<div className="mt-8 flex flex-col gap-4">
<a className="py-4 text-center border border-amber-800/50 text-amber-200 tracking-widest uppercase text-xs font-light" href="https://image2url.com/r2/default/files/1774354205507-25e698a5-ab66-4c74-a02a-e5d10bab92d4.png" rel="noopener noreferrer" target="_blank">샘플 카달로그 보기</a>
<a className="mobile-link py-4 text-center bg-amber-600/80 text-black tracking-widest uppercase text-xs font-normal" href="#inquiry">프로젝트 상담하기</a>
</div>
</div>
<header className="overflow-hidden flex bg-gray-950/20 w-full h-screen relative items-center justify-center">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover absolute inset-0 opacity-80" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-coffee-beans-in-a-grinder-43385-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/40 z-10 pointer-events-none"></div>
</div>
<div className="z-20 flex flex-col text-center max-w-5xl mt-16 px-4 relative items-center">
<div className="mb-8 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] animate-float reveal" style={{transitionDelay: '200ms'}}>
<div className="w-1 h-20 bg-gradient-to-b from-transparent to-amber-600/50 mx-auto mb-4"></div>
<iconify-icon className="text-amber-500/80 drop-shadow-[0_0_1rem_rgba(212,175,55,0.3)]" icon="solar:recive-square-linear" width="48"></iconify-icon>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight text-stone-100 leading-tight tracking-tighter drop-shadow-lg opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal mb-6" style={{transitionDelay: '400ms'}}>
                매일 버려지는 커피 찌꺼기의 <br/> <span className="serif italic text-amber-400/90 tracking-tighter">놀라운 변신</span>
</h1>
<p className="text-sm md:text-base text-stone-300 tracking-wide font-extralight max-w-lg mx-auto mb-12 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal drop-shadow-md" style={{transitionDelay: '600ms'}}>
                커피박에서 시작되는 새로운 소재의 가능성을 만나보세요.
            </p>
<div className="flex flex-col sm:flex-row gap-4 md:gap-6 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '800ms'}}>
<a className="flex items-center justify-center gap-2 px-8 py-4 border border-stone-800 text-stone-300 text-xs uppercase tracking-widest hover:border-stone-500 hover:bg-stone-900/30 hover:text-white transition-all duration-500 ease-out font-light" href="https://image2url.com/r2/default/files/1774354205507-25e698a5-ab66-4c74-a02a-e5d10bab92d4.png" rel="noopener noreferrer" target="_blank">
<span className="transition-colors font-light">카달로그 보기</span>
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-4 bg-amber-900/20 border border-amber-700/50 text-amber-100 text-xs uppercase tracking-widest hover:bg-amber-600/20 hover:border-amber-500 transition-all duration-700 ease-out group hover:shadow-[0_0_2rem_rgba(212,175,55,0.15)] font-light" href="#inquiry">
                    프로젝트 상담하기
                    <iconify-icon className="text-amber-500 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</header>
<main>
<section className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="about">
<div className="absolute top-0 left-12 md:left-24 text-[12rem] md:text-[20rem] serif font-extralight text-white/[0.02] tracking-tighter pointer-events-none -translate-y-1/3 z-0">01</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10 items-center">
<div className="opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal">
<span className="text-amber-500/80 text-xs tracking-widest uppercase font-light mb-6 block">Our Vision</span>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tighter text-stone-100 leading-tight mb-8">
                        지속 가능한 <br/> <span className="serif italic text-amber-100">미래의 소재</span>를 빚다.
                    </h2>
<p className="text-stone-400 font-extralight text-sm md:text-base leading-relaxed mb-6">
                        매년 전 세계적으로 수백만 톤의 커피 찌꺼기가 매립되거나 소각되며 막대한 온실가스를 배출합니다. GroundPoly는 버려지는 커피박을 수거하여 고부가 가치의 친환경 복합 소재로 재탄생시킵니다.
                    </p>
<p className="text-stone-400 font-extralight text-sm md:text-base leading-relaxed">
                        자연에서 온 소재로 자연을 보호하는 완벽한 순환의 구조. 기존 플라스틱과 목재를 대체할 수 있는 강력한 내구성과 아름다운 심미성을 동시에 제공합니다.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '200ms'}}>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-8 flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors duration-500 group">
<iconify-icon className="text-stone-500 group-hover:text-amber-400 transition-colors" icon="solar:leaf-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg text-stone-200 tracking-tight font-light mb-1">탄소 저감</h3>
<p className="text-xs text-stone-500 font-light">플라스틱 대비 획기적인 탄소 발자국 감소 효과</p>
</div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-8 flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors duration-500 group">
<iconify-icon className="text-stone-500 group-hover:text-amber-400 transition-colors" icon="solar:recycle-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg text-stone-200 tracking-tight font-light mb-1">100% 재활용</h3>
<p className="text-xs text-stone-500 font-light">사용 후 다시 가공하여 새로운 제품으로 생산 가능</p>
</div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-8 flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors duration-500 group">
<iconify-icon className="text-stone-500 group-hover:text-amber-400 transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg text-stone-200 tracking-tight font-light mb-1">뛰어난 내구성</h3>
<p className="text-xs text-stone-500 font-light">방수 및 항균 처리로 다양한 환경에서 사용 가능</p>
</div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-8 flex flex-col items-start gap-4 hover:border-amber-500/30 transition-colors duration-500 group">
<iconify-icon className="text-stone-500 group-hover:text-amber-400 transition-colors" icon="solar:pallete-2-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg text-stone-200 tracking-tight font-light mb-1">맞춤형 디자인</h3>
<p className="text-xs text-stone-500 font-light">다양한 색상, 질감, 형태로 자유로운 성형 지원</p>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-32 md:py-48 bg-stone-950/50 border-t border-white/5 px-6 md:px-12" id="solutions">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal">
<span className="text-amber-500/80 text-xs tracking-widest uppercase font-light mb-4 block">Solutions</span>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tighter text-stone-100 mb-6">
                        적용 가능 <span className="serif italic text-amber-100">분야</span>
</h2>
<p className="text-stone-400 font-extralight text-sm md:text-base max-w-2xl mx-auto">
                        GroundPoly의 혁신적인 소재는 산업과 일상의 경계를 넘어 다양한 분야에 적용될 수 있습니다. 귀하의 브랜드 가치를 높여줄 친환경 소재를 경험해보세요.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500 opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 border border-stone-800 rounded-full flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-amber-300" icon="solar:home-smile-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-stone-100 font-light tracking-tight mb-4">건축 및 인테리어</h3>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-6 flex-grow">
                            벽면 패널, 바닥재, 가구 마감재 등. 천연 커피의 따뜻한 색감과 고유의 텍스처를 살려 고급스러운 공간을 연출합니다.
                        </p>
<div className="w-full h-px bg-gradient-to-r from-stone-800 to-transparent"></div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500 opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 border border-stone-800 rounded-full flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-amber-300" icon="solar:cup-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-stone-100 font-light tracking-tight mb-4">라이프스타일 굿즈</h3>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-6 flex-grow">
                            텀블러, 컵 코스터, 화분, 트레이 등 일상생활에서 쉽게 접할 수 있는 매력적이고 실용적인 오브제를 생산합니다.
                        </p>
<div className="w-full h-px bg-gradient-to-r from-stone-800 to-transparent"></div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-10 flex flex-col group hover:-translate-y-2 transition-transform duration-500 opacity-0 translate-y-8 ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '300ms'}}>
<div className="w-14 h-14 border border-stone-800 rounded-full flex items-center justify-center mb-8 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon className="text-stone-400 group-hover:text-amber-300" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-stone-100 font-light tracking-tight mb-4">패키징 및 보관함</h3>
<p className="text-stone-400 text-sm font-extralight leading-relaxed mb-6 flex-grow">
                            화장품 용기, 고급 선물 상자, 전자기기 패키지 등 기업의 ESG 경영을 직관적으로 보여줄 수 있는 친환경 솔루션입니다.
                        </p>
<div className="w-full h-px bg-gradient-to-r from-stone-800 to-transparent"></div>
</div>
</div>
</div>
</section>
<section className="relative py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5" id="process">
<div className="absolute top-0 right-12 md:right-24 text-[12rem] md:text-[20rem] serif font-extralight text-white/[0.02] tracking-tighter pointer-events-none -translate-y-1/3 z-0">03</div>
<div className="text-center mb-20 md:mb-32 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal relative z-10">
<span className="text-amber-500/80 text-xs tracking-widest uppercase font-light mb-4 block">Process</span>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tighter text-stone-100 mb-6">
                    새로운 가치를 <span className="serif italic text-amber-100">창조하는 과정</span>
</h2>
</div>
<div className="relative z-10 hidden md:block w-full h-px bg-stone-800 absolute top-1/2 -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
<div className="flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '100ms'}}>
<div className="w-16 h-16 bg-[#050505] border border-stone-800 rounded-full flex items-center justify-center mb-6 relative z-10 text-stone-400"><span className="text-xs font-light">01</span></div>
<h3 className="text-lg text-stone-200 font-light tracking-tight mb-3">커피박 수거</h3>
<p className="text-stone-500 text-xs font-extralight leading-relaxed">지역 카페 및 프랜차이즈와 협력하여<br/>깨끗한 상태의 커피 찌꺼기를 수집합니다.</p>
</div>
<div className="flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '200ms'}}>
<div className="w-16 h-16 bg-[#050505] border border-stone-800 rounded-full flex items-center justify-center mb-6 relative z-10 text-stone-400"><span className="text-xs font-light">02</span></div>
<h3 className="text-lg text-stone-200 font-light tracking-tight mb-3">건조 및 전처리</h3>
<p className="text-stone-500 text-xs font-extralight leading-relaxed">특수 공법을 통해 수분을 완벽히 제거하고<br/>불순물을 걸러내어 최적의 원료로 만듭니다.</p>
</div>
<div className="flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 bg-[#050505] border border-stone-800 rounded-full flex items-center justify-center mb-6 relative z-10 text-stone-400"><span className="text-xs font-light">03</span></div>
<h3 className="text-lg text-stone-200 font-light tracking-tight mb-3">폴리머 배합</h3>
<p className="text-stone-500 text-xs font-extralight leading-relaxed">친환경 결합제 및 생분해성 폴리머와<br/>혼합하여 펠릿(Pellet) 형태로 가공합니다.</p>
</div>
<div className="flex flex-col items-center text-center opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal" style={{transitionDelay: '400ms'}}>
<div className="w-16 h-16 bg-[#050505] border border-stone-800 rounded-full flex items-center justify-center mb-6 relative z-10 text-amber-500/80 shadow-[0_0_1rem_rgba(212,175,55,0.1)]"><span className="text-xs font-light">04</span></div>
<h3 className="text-lg text-amber-100 font-light tracking-tight mb-3">제품 성형 및 생산</h3>
<p className="text-stone-500 text-xs font-extralight leading-relaxed">사출, 압출 등 다양한 제조 공정을 통해<br/>고객이 원하는 최종 제품을 완성합니다.</p>
</div>
</div>
</section>
<section className="relative py-32 md:py-48 bg-stone-950/30 border-t border-white/5 px-6 md:px-12" id="faq">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal">
<span className="text-amber-500/80 text-xs tracking-widest uppercase font-light mb-4 block">FAQ</span>
<h2 className="text-3xl md:text-5xl font-extralight tracking-tighter text-stone-100 mb-6">자주 묻는 <span className="serif italic text-amber-100">질문</span></h2>
</div>
<div className="space-y-4 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal">
<div className="bg-black/70 backdrop-blur-2xl border border-stone-800/50 hover:border-stone-700 transition-colors cursor-pointer group rounded-sm" onclick="toggleFaq('1')">
<div className="px-6 py-5 flex justify-between items-center">
<h3 className="text-stone-200 text-sm font-light tracking-tight group-hover:text-amber-100 transition-colors">커피박 소재의 내구성은 일반 플라스틱과 비교하면 어떤가요?</h3>
<iconify-icon className="text-stone-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="faq-icon-1" width="20"></iconify-icon>
</div>
<div className="hidden px-6 pb-5 pt-0" id="faq-content-1">
<p className="text-stone-500 text-xs font-extralight leading-relaxed border-t border-stone-800/50 pt-4">
                                GroundPoly의 커피박 복합 소재는 일반적인 ABS 또는 PP 플라스틱과 유사한 수준의 인장강도와 내충격성을 자랑합니다. 또한 특수 코팅 처리를 통해 생활 방수 및 오염 방지 기능이 뛰어나 일상 생활 용품 및 가구 마감재로 손색이 없습니다.
                            </p>
</div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-stone-800/50 hover:border-stone-700 transition-colors cursor-pointer group rounded-sm" onclick="toggleFaq('2')">
<div className="px-6 py-5 flex justify-between items-center">
<h3 className="text-stone-200 text-sm font-light tracking-tight group-hover:text-amber-100 transition-colors">제품에서 커피 향이 나나요?</h3>
<iconify-icon className="text-stone-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="faq-icon-2" width="20"></iconify-icon>
</div>
<div className="hidden px-6 pb-5 pt-0" id="faq-content-2">
<p className="text-stone-500 text-xs font-extralight leading-relaxed border-t border-stone-800/50 pt-4">
                                네, 소재에 약 20~30%의 실제 커피 원두 찌꺼기가 포함되어 있어 초기에는 은은하고 자연스러운 커피 향을 느끼실 수 있습니다. 이는 인공 향료가 아닌 천연의 향으로, 시간이 지남에 따라 점차 옅어지며 공간에 자연스럽게 스며듭니다.
                            </p>
</div>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-stone-800/50 hover:border-stone-700 transition-colors cursor-pointer group rounded-sm" onclick="toggleFaq('3')">
<div className="px-6 py-5 flex justify-between items-center">
<h3 className="text-stone-200 text-sm font-light tracking-tight group-hover:text-amber-100 transition-colors">기업의 로고를 새기거나 맞춤형 디자인이 가능한가요?</h3>
<iconify-icon className="text-stone-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="faq-icon-3" width="20"></iconify-icon>
</div>
<div className="hidden px-6 pb-5 pt-0" id="faq-content-3">
<p className="text-stone-500 text-xs font-extralight leading-relaxed border-t border-stone-800/50 pt-4">
                                물론입니다. 레이저 각인, 실크스크린 등 다양한 방식으로 기업의 로고나 메시지를 새길 수 있습니다. 또한 금형 설계를 통해 원하시는 형태와 크기로 맞춤형 주문 제작(OEM/ODM)이 가능하여 브랜드 아이덴티티를 효과적으로 표현할 수 있습니다.
                            </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative bg-[#050505] border-t border-stone-900/50" id="inquiry">
<div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
<div className="text-center mb-16 opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal">
<span className="text-amber-600/80 text-xs tracking-widest uppercase mb-4 block font-light">Contact Us</span>
<h2 className="text-3xl md:text-4xl serif text-stone-100 tracking-tight mb-4 font-normal">프로젝트 상담 및 샘플 요청</h2>
<p className="text-sm text-stone-400 font-extralight">고객님의 소중한 정보를 남겨주시면, 담당자가 확인 후 빠르게 연락드리겠습니다.</p>
</div>
<div className="bg-black/70 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-lg opacity-0 translate-y-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 reveal">
<form action="https://docs.google.com/forms/d/e/1FAIpQLSeNyIGztcIJh3HCbuTFX4ut4Ug4eqD1yEcCMiB2gWsoWUDpPg/formResponse" className="space-y-6" method="POST" onsubmit="submitted=true;" target="hidden_iframe">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light" htmlFor="inquiry_type">선택사항</label>
<select className="w-full bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 focus:shadow-[0_0_10px_rgba(212,175,55,0.1)] px-4 py-3 rounded-md text-sm cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg_xmlns=%22http://www.w3.org/2000/svg%22_viewBox=%220_0_24_24%22_fill=%22none%22_stroke=%22%23e5e5e5%22_strokeWidth=%222%22_strokeLinecap=%22round%22_strokeLinejoin=%22round%22%3e%3cpolyline_points=%226_9_12_15_18_9%22%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:1em] pr-10 font-light" id="inquiry_type" name="entry.839337160">
<option className="bg-stone-900" value="샘플 요청">샘플 요청</option>
<option className="bg-stone-900" value="상담 문의">상담 문의</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light" htmlFor="company">회사명</label>
<input className="w-full bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 focus:shadow-[0_0_10px_rgba(212,175,55,0.1)] px-4 py-3 rounded-md text-sm font-light placeholder-stone-600" id="company" name="entry.1398047145" placeholder="회사명을 입력해주세요" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light" htmlFor="name">이름 <span className="text-red-500">*</span></label>
<input className="w-full bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 focus:shadow-[0_0_10px_rgba(212,175,55,0.1)] px-4 py-3 rounded-md text-sm font-light placeholder-stone-600" id="name" name="entry.2005620554" placeholder="성함을 입력해주세요" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light" htmlFor="email">이메일 <span className="text-red-500">*</span></label>
<input className="w-full bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 focus:shadow-[0_0_10px_rgba(212,175,55,0.1)] px-4 py-3 rounded-md text-sm font-light placeholder-stone-600" id="email" name="entry.1045781291" placeholder="이메일 주소를 입력해주세요" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-stone-400 mb-2 font-light" htmlFor="contact_info">연락처</label>
<input className="w-full bg-white/5 border border-white/10 text-stone-200 transition-all duration-300 focus:outline-none focus:border-amber-500/50 focus:bg-white/10 focus:shadow-[0_0_10px_rgba(212,175,55,0.1)] px-4 py-3 rounded-md text-sm font-light placeholder-stone-600" id="contact_info" name="entry.1166974658" placeholder="연락처를 입력해주세요" type="text"/>
</div>
</div>
<div className="pt-8 text-center">
<button className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-12 py-4 bg-amber-600 hover:bg-amber-500 text-stone-900 font-normal text-xs uppercase tracking-widest rounded-md transition-colors duration-300" type="submit">
                                정보 전송하기
                                <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
<p className="text-xs text-stone-500 mt-4 font-extralight">제출해주신 정보는 상담 목적으로만 사용되며, 안전하게 관리됩니다.</p>
</div>
</form>
<iframe className="hidden" id="hidden_iframe" name="hidden_iframe" onload="if(submitted){alert('정상적으로 접수되었습니다. 담당자가 곧 연락드리겠습니다.');}"></iframe>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12 px-6 md:px-12 bg-[#050505]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="tracking-tighter text-base font-normal text-stone-200">GROUNDPOLY</span>
<p className="text-stone-600 text-xs font-extralight">커피박에서 찾은 무한한 가능성</p>
</div>
<div className="flex gap-6 text-xs text-stone-500 font-light">
<a className="hover:text-stone-300 transition-colors" href="#">이용약관</a>
<a className="hover:text-stone-300 transition-colors" href="#">개인정보처리방침</a>
<a className="hover:text-amber-400 transition-colors" href="mailto:contact@groundpoly.com">Contact Us</a>
</div>
</div>
<div className="max-w-7xl mx-auto text-center md:text-left text-xs text-stone-700 font-extralight mt-12">
            © 2026 GroundPoly. All rights reserved.
        </div>
</footer>


    </>
  );
}
