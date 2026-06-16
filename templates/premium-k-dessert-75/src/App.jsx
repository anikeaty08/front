import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
black: {
DEFAULT: '#0a0a0a',
light: '#141414',
lighter: '#1a1a1a',
},
gold: {
DEFAULT: '#c9a962',
light: '#e8d5a3',
dark: '#a08540',
},
cream: {
DEFAULT: '#f5f0e6',
dark: '#d4cfc5',
}
},
fontFamily: {
heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
korean: ['"Noto Serif KR"', 'serif'],
body: ['"Inter"', 'sans-serif'],
},
letterSpacing: {
tight: '-0.02rem',
widest: '0.2rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple artificial loader
        document.addEventListener('DOMContentLoaded', () => {
            const loader = document.getElementById('loader');
            const progress = document.getElementById('loaderProgress');
            
            // Simulate loading
            setTimeout(() => { progress.style.width = '30%'; }, 200);
            setTimeout(() => { progress.style.width = '70%'; }, 500);
            setTimeout(() => { 
                progress.style.width = '100%'; 
                setTimeout(() => {
                    loader.classList.add('hidden');
                    initAnimations();
                }, 400);
            }, 800);
        });

        function initAnimations() {
            gsap.registerPlugin(ScrollTrigger);

            // Hero Entry Animation
            const heroTl = gsap.timeline();
            heroTl.to('#heroMainText', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 })
                  .to('#heroSubText', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
                  .to('#heroBtns', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
                  .to('#heroScroll', { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4');

            // Nav Hide/Show
            let lastScroll = 0;
            const nav = document.getElementById('nav');
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                if (currentScroll > window.innerHeight * 0.5) {
                    if (currentScroll > lastScroll) nav.classList.add('hidden');
                    else nav.classList.remove('hidden');
                } else {
                    nav.classList.remove('hidden');
                }
                lastScroll = currentScroll;
            }, { passive: true });

            // Reveal Animations
            gsap.utils.toArray('.reveal').forEach(elem => {
                gsap.fromTo(elem, { opacity: 0, y: 40 }, {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: elem, start: 'top 85%', toggleActions: 'play none none none' }
                });
            });
            gsap.utils.toArray('.reveal-left').forEach(elem => {
                gsap.fromTo(elem, { opacity: 0, x: -40 }, {
                    opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: elem, start: 'top 85%', toggleActions: 'play none none none' }
                });
            });
            gsap.utils.toArray('.reveal-right').forEach(elem => {
                gsap.fromTo(elem, { opacity: 0, x: 40 }, {
                    opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: elem, start: 'top 85%', toggleActions: 'play none none none' }
                });
            });
            gsap.utils.toArray('.reveal-scale').forEach(elem => {
                gsap.fromTo(elem, { opacity: 0, scale: 0.95 }, {
                    opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out',
                    scrollTrigger: { trigger: elem, start: 'top 90%', toggleActions: 'play none none none' }
                });
            });

            // Hover Spotlight Effect
            const hoverItems = document.querySelectorAll('.hover-wave');
            hoverItems.forEach(item => {
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    item.style.setProperty('--mouse-x', `${x}%`);
                    item.style.setProperty('--mouse-y', `${y}%`);
                });
            });

            // Horizontal Scroll logic for Process Section
            const processSection = document.getElementById('process');
            const processScrollWrap = document.getElementById('processScrollWrap');
            const processItems = document.querySelectorAll('.scroll-item');

            if (window.innerWidth > 768 && processItems.length > 0) {
                const itemWidth = processItems[0].offsetWidth;
                const gap = 32; // gap-8 = 2rem = 32px roughly
                const totalWidth = (itemWidth * processItems.length) + (gap * (processItems.length - 1));
                const viewportWidth = window.innerWidth;
                
                // Only pin if content is wider than viewport
                if(totalWidth > viewportWidth * 0.8) {
                    const paddingLeft = parseFloat(getComputedStyle(processScrollWrap).paddingLeft) || 0;
                    const scrollDistance = totalWidth - viewportWidth + paddingLeft + gap;

                    gsap.to(processScrollWrap, {
                        x: -scrollDistance,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: processSection,
                            start: 'top top',
                            end: () => `+=${scrollDistance}`,
                            pin: true,
                            scrub: 0.5,
                            anticipatePin: 1,
                            invalidateOnRefresh: true
                        }
                    });
                }
            }

            // Background Watermark text unroll
            const watermark = document.querySelector('.bg-watermark');
            const watermarkText = document.querySelector('.bg-watermark__text');
            const mainContent = document.querySelector('.main-content');
            
            if(watermark && watermarkText && mainContent) {
                watermark.style.height = 'auto';
                const textHeight = watermarkText.offsetHeight;
                watermark.style.height = '0px';

                window.addEventListener('scroll', () => {
                    const rect = mainContent.getBoundingClientRect();
                    const vh = window.innerHeight;
                    const start = rect.top - vh;
                    const end = rect.bottom;
                    const progress = Math.min(Math.max(-start / (end - start), 0), 1);
                    watermark.style.height = (progress * textHeight) + 'px';
                }, { passive: true });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="font-korean text-5xl-rem font-light text-gold mb-8 tracking-widest">Re:Food</div>
<div className="font-heading text-sm-rem tracking-widest uppercase text-cream-dark mb-8">Loading Experience</div>
<div className="w-[12.5rem] h-px bg-black-lighter relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-gold transition-all duration-300" id="loaderProgress"></div>
</div>
</div>

<div className="grain"></div>

<nav className="nav" id="nav">
<a className="font-korean text-xl-rem font-normal text-gold no-underline tracking-widest flex items-center gap-2" href="#">
            Re:Food <span className="font-heading text-xs-rem font-light tracking-widest uppercase text-cream">Lab</span>
</a>
<ul className="hidden md:flex gap-8 list-none m-0 p-0">
<li><a className="nav-link relative font-heading text-xs-rem font-normal tracking-widest uppercase text-cream py-1 transition-colors hover:text-gold" href="#intro">Story</a></li>
<li><a className="nav-link relative font-heading text-xs-rem font-normal tracking-widest uppercase text-cream py-1 transition-colors hover:text-gold" href="#problem">Philosophy</a></li>
<li><a className="nav-link relative font-heading text-xs-rem font-normal tracking-widest uppercase text-cream py-1 transition-colors hover:text-gold" href="#process">Process</a></li>
<li><a className="nav-link relative font-heading text-xs-rem font-normal tracking-widest uppercase text-cream py-1 transition-colors hover:text-gold" href="#values">Values</a></li>
</ul>
<div className="hidden md:flex gap-4">
<a className="font-heading text-xs-rem font-normal tracking-widest uppercase text-black bg-gold px-4 py-2 transition-all hover:bg-gold-light hover:-translate-y-0.5" href="#contact">B2B Inquiry</a>
</div>
<button className="flex md:hidden flex-col gap-[6px] bg-transparent border-none p-2 cursor-pointer">
<span className="block w-6 h-px bg-gold"></span>
<span className="block w-6 h-px bg-gold"></span>
<span className="block w-6 h-px bg-gold"></span>
</button>
</nav>

<section className="hero flex flex-col items-center justify-center text-center">
<div className="hero__bg"></div>
<div className="hero__overlay"></div>
<div className="relative z-10 flex flex-col items-center pt-20 px-4 w-full max-w-[87.5rem]">
<h1 className="font-korean text-4xl-rem md:text-6xl-rem lg:text-8xl-rem font-light text-gold tracking-tight mb-4 opacity-0 translate-y-8" id="heroMainText">
                약과가<br/>왜 이렇게 상큼해?
            </h1>
<p className="font-korean text-base-rem md:text-xl-rem font-light tracking-tight text-cream mb-10 max-w-2xl opacity-0 translate-y-8 leading-relaxed" id="heroSubText">
                입안에 퍼지는 과일향과 쫀득함의 반전.<br/>
                당 걱정은 덜고 단백질은 채운, 죄책감 없는 '완벽한 디저트'를 만나보세요.
            </p>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 translate-y-8" id="heroBtns">
<a className="font-heading text-xs-rem md:text-sm-rem font-normal tracking-widest uppercase text-black bg-gold px-8 py-3 transition-all hover:bg-gold-light" href="#shop">개인 구매하기</a>
<a className="font-heading text-xs-rem md:text-sm-rem font-normal tracking-widest uppercase text-cream border border-gold/30 px-8 py-3 transition-all hover:border-gold hover:text-gold bg-black/50 backdrop-blur-sm" href="#contact">기업 제휴 및 납품 문의</a>
</div>
</div>
<div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 z-10" id="heroScroll">
<span className="font-heading text-xs-rem tracking-widest uppercase text-cream-dark">Scroll to Explore</span>
<span className="scroll-pulse"></span>
</div>
</section>

<div className="main-content relative z-0">

<div aria-hidden="true" className="bg-watermark">
<div className="bg-watermark__text">傳統 革新 味 健康 藥菓 프리미엄 디저트 상큼함 수율 지속가능성</div>
</div>

<section className="relative min-h-[80vh] flex items-center py-32 px-6 overflow-hidden" id="intro">
<div className="absolute inset-0 bg-black z-[-1]"></div>
<div className="max-w-[87.5rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
<div className="relative reveal-left">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-korean text-8xl-rem lg:text-[16rem] font-light text-gold opacity-[0.05] leading-none whitespace-nowrap">革新</span>
<div className="img-frame">
<img alt="Premium Dessert Crafting" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="lg:pl-16">
<div className="flex items-center gap-4 mb-4 reveal">
<span className="w-10 h-px bg-gold"></span>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Service Introduction</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-5xl-rem font-light leading-tight tracking-tight text-cream mb-8 reveal">
                        맛과 영양, 비즈니스의 효율까지<br/>다 잡은 프리미엄 <em className="not-italic text-gold">K-디저트</em> 솔루션
                    </h2>
<ul className="space-y-6 reveal">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl-rem text-gold mt-1" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-1 tracking-tight">과일 블렌딩 기술</h3>
<p className="text-sm-rem text-cream-dark leading-relaxed">딸기, 레몬 등 과일의 상큼함을 더해 약과 특유의 기름진 맛을 잡았습니다.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl-rem text-gold mt-1" icon="solar:health-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-1 tracking-tight">고단백 콩 베이스</h3>
<p className="text-sm-rem text-cream-dark leading-relaxed">밀가루 비중을 줄이고 콩 단백질을 활용해 영양 밸런스를 맞췄습니다.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl-rem text-gold mt-1" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-1 tracking-tight">제로 슈가 지향</h3>
<p className="text-sm-rem text-cream-dark leading-relaxed">0kcal 알룰로스를 사용하여 혈당 부담 없이 즐길 수 있는 건강한 단맛을 구현합니다.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl-rem text-gold mt-1" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-1 tracking-tight">B2B 원가 절감</h3>
<p className="text-sm-rem text-cream-dark leading-relaxed">획기적인 수율 개선을 통해 제조 원가를 낮춘 프리믹스 솔루션을 제공합니다.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="relative py-32 px-6" id="problem">
<div className="absolute inset-0 bg-black-light z-[-1]"></div>
<div className="max-w-[87.5rem] mx-auto relative z-10">
<div className="text-center mb-20">
<div className="flex justify-center items-center gap-4 mb-4 reveal">
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">The Challenge</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-5xl-rem font-light tracking-tight text-cream reveal">
                        우리는 간식을 즐기는 순간의 '걱정'과<br/>제조사의 '비용 고민'에 주목했습니다.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="hover-wave bg-black p-8 text-center reveal">
<iconify-icon className="text-4xl-rem text-gold mb-6 relative z-10 block" icon="solar:user-heart-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-4 tracking-tight relative z-10">건강을 생각하는<br/>디저트 애호가</h3>
<p className="font-body text-sm-rem text-cream-dark leading-relaxed relative z-10">달콤한 간식은 좋지만 높은 당류와 칼로리 때문에 망설여짐</p>
</div>

<div className="hover-wave bg-black p-8 text-center reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl-rem text-gold mb-6 relative z-10 block" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-4 tracking-tight relative z-10">차별화된 메뉴가 필요한<br/>카페/유통사</h3>
<p className="font-body text-sm-rem text-cream-dark leading-relaxed relative z-10">흔한 약과 대신 MZ세대의 입맛을 사로잡을 새로운 킬러 콘텐츠 필요</p>
</div>

<div className="hover-wave bg-black p-8 text-center reveal" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl-rem text-gold mb-6 relative z-10 block" icon="solar:factory-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-4 tracking-tight relative z-10">원가 압박을 느끼는<br/>식품 제조사</h3>
<p className="font-body text-sm-rem text-cream-dark leading-relaxed relative z-10">원재료비 상승 속에서 품질을 유지하며 수익성을 개선할 대안 절실</p>
</div>

<div className="hover-wave bg-black p-8 text-center reveal" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-4xl-rem text-gold mb-6 relative z-10 block" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-korean text-lg-rem font-normal text-cream mb-4 tracking-tight relative z-10">ESG 경영을 실천하는<br/>기업</h3>
<p className="font-body text-sm-rem text-cream-dark leading-relaxed relative z-10">임직원 간식이나 답례품 하나에도 친환경적 가치와 건강을 담고 싶음</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-black-light overflow-visible" id="process">
<div className="max-w-[87.5rem] mx-auto px-6 mb-16 relative z-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div>
<div className="flex items-center gap-4 mb-4 reveal">
<span className="w-10 h-px bg-gold"></span>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Our Process</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-5xl-rem font-light tracking-tight text-cream reveal">
                        Re:Food Lab이 건강한<br/>즐거움을 전달하는 과정
                    </h2>
</div>
</div>
<div className="process-scroll relative z-20 flex gap-8 pb-10 px-6 md:px-[calc((100vw-87.5rem)/2+1.5rem)] overflow-x-auto md:overflow-visible snap-x md:snap-none" id="processScrollWrap">

<article className="scroll-item flex-none w-[17.5rem] md:w-[22rem] snap-start relative cursor-pointer group reveal-scale">
<div className="relative aspect-[4/5] overflow-hidden bg-black-lighter rounded-sm mb-6">
<img alt="원재료 선별" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 scroll-img-overlay z-[12] pointer-events-none"></div>
<span className="absolute top-4 right-4 font-heading text-sm-rem font-normal text-gold bg-black/80 px-3 py-1 tracking-widest z-[15]">STEP 01</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pb-[4rem] z-[20] pointer-events-none">
<h3 className="font-korean text-xl-rem font-normal text-cream mb-2 tracking-tight">원재료 선별</h3>
<p className="font-body text-sm-rem font-light text-cream-dark leading-relaxed">엄격한 품질 관리를 거친 콩 단백질과 신선한 과일 추출물 확보</p>
</div>
</article>

<article className="scroll-item flex-none w-[17.5rem] md:w-[22rem] snap-start relative cursor-pointer group reveal-scale" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[4/5] overflow-hidden bg-black-lighter rounded-sm mb-6">
<img alt="독자적 배합" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 scroll-img-overlay z-[12] pointer-events-none"></div>
<span className="absolute top-4 right-4 font-heading text-sm-rem font-normal text-gold bg-black/80 px-3 py-1 tracking-widest z-[15]">STEP 02</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pb-[4rem] z-[20] pointer-events-none">
<h3 className="font-korean text-xl-rem font-normal text-cream mb-2 tracking-tight">독자적 배합</h3>
<p className="font-body text-sm-rem font-light text-cream-dark leading-relaxed">Re:Food Lab만의 알룰로스 기반 저당 배합비 적용</p>
</div>
</article>

<article className="scroll-item flex-none w-[17.5rem] md:w-[22rem] snap-start relative cursor-pointer group reveal-scale" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[4/5] overflow-hidden bg-black-lighter rounded-sm mb-6">
<img alt="최적화 생산" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 scroll-img-overlay z-[12] pointer-events-none"></div>
<span className="absolute top-4 right-4 font-heading text-sm-rem font-normal text-gold bg-black/80 px-3 py-1 tracking-widest z-[15]">STEP 03</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pb-[4rem] z-[20] pointer-events-none">
<h3 className="font-korean text-xl-rem font-normal text-cream mb-2 tracking-tight">최적화 생산</h3>
<p className="font-body text-sm-rem font-light text-cream-dark leading-relaxed">대량 생산 노하우를 바탕으로 균일한 품질과 식감 구현</p>
</div>
</article>

<article className="scroll-item flex-none w-[17.5rem] md:w-[22rem] snap-start relative cursor-pointer group reveal-scale" style={{transitionDelay: '300ms'}}>
<div className="relative aspect-[4/5] overflow-hidden bg-black-lighter rounded-sm mb-6">
<img alt="맞춤형 공급" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 scroll-img-overlay z-[12] pointer-events-none"></div>
<span className="absolute top-4 right-4 font-heading text-sm-rem font-normal text-gold bg-black/80 px-3 py-1 tracking-widest z-[15]">STEP 04</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 pb-[4rem] z-[20] pointer-events-none">
<h3 className="font-korean text-xl-rem font-normal text-cream mb-2 tracking-tight">맞춤형 공급</h3>
<p className="font-body text-sm-rem font-light text-cream-dark leading-relaxed">B2C 직영 판매부터 B2B 파트너사 맞춤형 프리믹스 공급까지</p>
</div>
</article>
</div>
</section>

<div className="bg-black relative" id="values">

<section className="relative py-32 px-6 overflow-hidden">
<div className="max-w-[87.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative reveal-left">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-korean text-8xl-rem text-gold opacity-[0.05] leading-none whitespace-nowrap z-0">味</span>
<div className="img-frame relative z-10">
<img alt="Gastronomic Experience" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="order-1 lg:order-2 lg:pl-10">
<div className="flex items-center gap-4 mb-4 reveal">
<span className="w-10 h-px bg-gold"></span>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Core Value 01</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-4xl-rem font-light leading-tight tracking-tight text-cream mb-6 reveal">
                            전통 약과의 화려한 변신,<br/>상큼하고 쫀득한 <em className="not-italic text-gold">'미식 경험'</em>
</h2>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed mb-6 max-w-lg reveal">
                            단순히 건강하기만 한 디저트는 지속되기 어렵습니다. Re:Food Lab은 과일 블렌딩을 통해 약과 특유의 텁텁함을 제거했습니다.
                        </p>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed max-w-lg reveal">
                            한입 베어 물 때 느껴지는 과일의 풍미와 전통적인 쫀득함은 고객에게 전에 없던 새로운 미식의 즐거움을 선사합니다.
                        </p>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden bg-black-light">
<div className="max-w-[87.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="lg:pr-10">
<div className="flex items-center gap-4 mb-4 reveal">
<span className="w-10 h-px bg-gold"></span>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Core Value 02</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-4xl-rem font-light leading-tight tracking-tight text-cream mb-6 reveal">
                            제조 원가는 낮추고<br/>수율은 높이는 <em className="not-italic text-gold">'비즈니스 파트너'</em>
</h2>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed mb-6 max-w-lg reveal">
                            B2B 파트너사를 위해 콩 단백질 기반의 고효율 프리믹스를 제안합니다. 기존 방식 대비 획기적인 수율 개선을 통해 제조 원가를 절감할 수 있습니다.
                        </p>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed max-w-lg reveal">
                            호두과자나 핫도그 등 다양한 양산 라인에 즉시 적용 가능한 최적의 솔루션을 제공하여 비즈니스의 수익성을 극대화합니다.
                        </p>
</div>
<div className="relative reveal-right">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-korean text-8xl-rem text-gold opacity-[0.05] leading-none whitespace-nowrap z-0">效</span>
<div className="img-frame relative z-10">
<img alt="Business Efficiency" className="w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 overflow-hidden">
<div className="max-w-[87.5rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative reveal-left">
<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-korean text-8xl-rem text-gold opacity-[0.05] leading-none whitespace-nowrap z-0">續</span>
<div className="img-frame relative z-10">
<img alt="Sustainable Packaging" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
<div className="order-1 lg:order-2 lg:pl-10">
<div className="flex items-center gap-4 mb-4 reveal">
<span className="w-10 h-px bg-gold"></span>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Core Value 03</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-4xl-rem font-light leading-tight tracking-tight text-cream mb-6 reveal">
                            ESG 가치를 실현하는<br/><em className="not-italic text-gold">지속 가능한 먹거리</em>
</h2>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed mb-6 max-w-lg reveal">
                            단순한 식품을 넘어 환경과 사회적 가치를 생각합니다. 자개 디자인의 고급스러운 패키징과 12지신 스토리텔링을 통해 한국의 미를 알립니다.
                        </p>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed max-w-lg reveal">
                            식물성 원료 비중을 높여 지속 가능한 미래 식문화 조성에 앞장서며, 선물을 주고받는 모든 순간에 품격을 더합니다.
                        </p>
</div>
</div>
</section>
</div>

<section className="relative py-32 px-6 bg-black-light" id="pricing">
<div className="max-w-[87.5rem] mx-auto">
<div className="text-center mb-20 reveal">
<div className="flex justify-center items-center gap-4 mb-4">
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold">Our Plans</span>
</div>
<h2 className="font-korean text-3xl-rem md:text-4xl-rem font-light tracking-tight text-cream">
                        귀하의 비즈니스와 라이프스타일에 맞는 선택
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-gold/20 bg-black p-10 relative flex flex-col transition-all duration-300 hover:border-gold reveal">
<h3 className="font-korean text-2xl-rem font-normal text-cream mb-2 tracking-tight">B2C 샘플 팩</h3>
<p className="font-body text-sm-rem text-gold tracking-widest uppercase mb-8">Personal &amp; Gifts</p>
<div className="mb-8 flex-grow">
<p className="font-body text-base-rem text-cream-dark font-light leading-relaxed mb-4">상큼 과일 약과 3종 세트</p>
<ul className="space-y-3 font-body text-sm-rem text-cream-dark/80 font-light">
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 개인 구매용</li>
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 가벼운 선물용 패키지</li>
</ul>
</div>
<a className="inline-block text-center w-full font-heading text-xs-rem font-normal tracking-widest uppercase text-cream border border-gold/30 px-6 py-3 transition-all hover:border-gold hover:text-gold" href="#contact">Buy Now</a>
</div>

<div className="border border-gold bg-black-lighter p-10 relative flex flex-col transform md:-translate-y-4 shadow-2xl reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black font-heading text-xs-rem tracking-widest px-4 py-1 uppercase">Best for Business</div>
<h3 className="font-korean text-2xl-rem font-normal text-cream mb-2 tracking-tight">B2B 프리믹스</h3>
<p className="font-body text-sm-rem text-gold tracking-widest uppercase mb-8">Manufacturers</p>
<div className="mb-8 flex-grow">
<p className="font-body text-base-rem text-cream-dark font-light leading-relaxed mb-4">대용량 원료 공급 및 배합 컨설팅</p>
<ul className="space-y-3 font-body text-sm-rem text-cream-dark/80 font-light">
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 식품 제조사 및 프랜차이즈 대상</li>
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 수율 개선 솔루션 포함</li>
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 맞춤형 배합비 제안</li>
</ul>
</div>
<a className="inline-block text-center w-full font-heading text-xs-rem font-normal tracking-widest uppercase text-black bg-gold px-6 py-3 transition-all hover:bg-gold-light" href="#contact">Inquire Now</a>
</div>

<div className="border border-gold/20 bg-black p-10 relative flex flex-col transition-all duration-300 hover:border-gold reveal" style={{transitionDelay: '200ms'}}>
<h3 className="font-korean text-2xl-rem font-normal text-cream mb-2 tracking-tight">기업용 기프트</h3>
<p className="font-body text-sm-rem text-gold tracking-widest uppercase mb-8">Corporate &amp; VIP</p>
<div className="mb-8 flex-grow">
<p className="font-body text-base-rem text-cream-dark font-light leading-relaxed mb-4">자개 패키징 프리미엄 세트</p>
<ul className="space-y-3 font-body text-sm-rem text-cream-dark/80 font-light">
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 기업 특판 및 대량 구매</li>
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> VIP 답례품 전용</li>
<li className="flex gap-2"><iconify-icon className="text-gold mt-1" icon="solar:check-circle-linear"></iconify-icon> 고급 자개 디자인 적용</li>
</ul>
</div>
<a className="inline-block text-center w-full font-heading text-xs-rem font-normal tracking-widest uppercase text-cream border border-gold/30 px-6 py-3 transition-all hover:border-gold hover:text-gold" href="#contact">Request Quote</a>
</div>
</div>
</div>
</section>

<section className="relative min-h-[80vh] flex items-center overflow-hidden py-24" id="testimonials">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
<img alt="Background" className="w-full h-full object-cover grayscale-[40%] opacity-50" src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[87.5rem] mx-auto px-6 w-full relative z-20">
<div className="mb-16 max-w-2xl reveal">
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold block mb-4">Success Stories</span>
<h2 className="font-korean text-3xl-rem md:text-5xl-rem font-light tracking-tight text-cream">Re:Food Lab과 함께할 때<br/>일어나는 변화</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-black/60 backdrop-blur-md border border-gold/20 p-8 reveal-scale">
<iconify-icon className="text-3xl-rem text-gold mb-6 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-base-rem font-light text-cream leading-relaxed mb-8">"약과가 과일 맛이 나서 신기하다며 재주문하는 고객이 늘었습니다. 흔한 디저트 시장에서 확실한 차별점이 생겼어요."</p>
<div>
<p className="font-korean text-sm-rem text-cream">카페 운영자</p>
<p className="font-body text-xs-rem text-gold tracking-widest uppercase mt-1">B2B Partner</p>
</div>
</div>
<div className="bg-black/60 backdrop-blur-md border border-gold/20 p-8 reveal-scale" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-3xl-rem text-gold mb-6 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-base-rem font-light text-cream leading-relaxed mb-8">"프리믹스 도입 후 공정 수율이 개선되어 생산 단가를 획기적으로 낮췄습니다. 품질은 높아졌는데 원가는 줄어 만족합니다."</p>
<div>
<p className="font-korean text-sm-rem text-cream">식품 제조사 담당자</p>
<p className="font-body text-xs-rem text-gold tracking-widest uppercase mt-1">Manufacturer</p>
</div>
</div>
<div className="bg-black/60 backdrop-blur-md border border-gold/20 p-8 reveal-scale" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-3xl-rem text-gold mb-6 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body text-base-rem font-light text-cream leading-relaxed mb-8">"당뇨 걱정 때문에 간식을 멀리했는데, 이건 알룰로스와 콩 단백질 등 성분이 착해서 안심하고 즐기고 있습니다."</p>
<div>
<p className="font-korean text-sm-rem text-cream">일반 소비자</p>
<p className="font-body text-xs-rem text-gold tracking-widest uppercase mt-1">Customer</p>
</div>
</div>
</div>
</div>
<span className="absolute bottom-10 right-10 font-korean text-8xl-rem text-gold opacity-[0.05] leading-none z-10 pointer-events-none">信</span>
</section>

<section className="relative py-32 px-6 bg-black" id="faq">
<div className="max-w-[50rem] mx-auto w-full">
<div className="text-center mb-16 reveal">
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold block mb-4">FAQ</span>
<h2 className="font-korean text-3xl-rem md:text-4xl-rem font-light tracking-tight text-cream">무엇이든 물어보세요</h2>
</div>
<div className="space-y-4 reveal">

<div className="border-b border-gold/20 pb-4">
<input className="hidden accordion-input" id="faq1" type="checkbox"/>
<label className="flex justify-between items-center cursor-pointer py-2 group" htmlFor="faq1">
<span className="font-korean text-lg-rem font-normal text-cream group-hover:text-gold transition-colors tracking-tight pr-8">Q: 약과인데 정말 당류가 낮나요?</span>
<iconify-icon className="text-gold text-xl-rem transition-transform duration-300 accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</label>
<div className="accordion-content">
<p className="font-body text-sm-rem text-cream-dark font-light leading-relaxed">
                                A: 네, 설탕 대신 0kcal 감미료인 알룰로스를 사용하여 당 함량은 낮추고 달콤한 맛은 그대로 유지했습니다. 건강하게 즐기실 수 있습니다.
                            </p>
</div>
</div>

<div className="border-b border-gold/20 pb-4">
<input className="hidden accordion-input" id="faq2" type="checkbox"/>
<label className="flex justify-between items-center cursor-pointer py-2 group" htmlFor="faq2">
<span className="font-korean text-lg-rem font-normal text-cream group-hover:text-gold transition-colors tracking-tight pr-8">Q: B2B 공급 시 맞춤 제작이 가능한가요?</span>
<iconify-icon className="text-gold text-xl-rem transition-transform duration-300 accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</label>
<div className="accordion-content">
<p className="font-body text-sm-rem text-cream-dark font-light leading-relaxed">
                                A: 네, 파트너사의 제조 환경과 요구되는 식감에 맞춰 맞춤형 배합비 제안이 가능합니다. 브랜드만의 특별한 시그니처 메뉴를 완성해보세요.
                            </p>
</div>
</div>

<div className="border-b border-gold/20 pb-4">
<input className="hidden accordion-input" id="faq3" type="checkbox"/>
<label className="flex justify-between items-center cursor-pointer py-2 group" htmlFor="faq3">
<span className="font-korean text-lg-rem font-normal text-cream group-hover:text-gold transition-colors tracking-tight pr-8">Q: 유통기한과 보관 방법은 어떻게 되나요?</span>
<iconify-icon className="text-gold text-xl-rem transition-transform duration-300 accordion-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</label>
<div className="accordion-content">
<p className="font-body text-sm-rem text-cream-dark font-light leading-relaxed">
                                A: 개별 포장된 상태로 실온 보관이 가능하며, 대량 납품 시 상세 가이드라인과 유통 기한 정보를 별도로 제공해 드립니다.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 bg-black-light text-center" id="contact">
<div className="max-w-[50rem] mx-auto relative z-20">
<div className="font-korean text-6xl-rem font-light text-gold opacity-[0.15] mb-6 reveal">비전</div>
<span className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold block mb-6 reveal">Our Vision</span>
<h2 className="font-korean text-2xl-rem md:text-4xl-rem font-light tracking-tight text-cream mb-8 leading-tight reveal">
                    과거의 전통에 미래의 기술을 더해<br/>오늘을 건강하게 만듭니다.
                </h2>
<p className="font-body text-base-rem font-light text-cream-dark leading-relaxed mb-12 reveal max-w-2xl mx-auto">
                    단순히 맛있는 간식을 만드는 것을 넘어, 제조 효율을 고민하는 기업과 건강한 달콤함을 찾는 소비자 모두가 만족할 수 있는 식문화의 기준을 세우고자 합니다. 지속 가능한 먹거리의 혁신, Re:Food Lab이 앞장서겠습니다.
                </p>
<form className="flex flex-col gap-4 max-w-md mx-auto reveal" onsubmit="return false;">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full p-4 font-body text-sm-rem font-light text-cream bg-transparent border border-gold/30 outline-none focus:border-gold transition-colors placeholder:text-cream-dark/50" placeholder="성함 / 직급" required="" type="text"/>
<input className="w-full p-4 font-body text-sm-rem font-light text-cream bg-transparent border border-gold/30 outline-none focus:border-gold transition-colors placeholder:text-cream-dark/50" placeholder="기업명" required="" type="text"/>
</div>
<input className="w-full p-4 font-body text-sm-rem font-light text-cream bg-transparent border border-gold/30 outline-none focus:border-gold transition-colors placeholder:text-cream-dark/50" placeholder="이메일 주소" required="" type="email"/>
<textarea className="w-full p-4 font-body text-sm-rem font-light text-cream bg-transparent border border-gold/30 outline-none focus:border-gold transition-colors placeholder:text-cream-dark/50 resize-none h-32" placeholder="문의 내용 (B2B 납품, 샘플 요청 등)"></textarea>
<button className="mt-4 px-8 py-4 font-heading text-sm-rem font-normal tracking-widest uppercase text-black bg-gold border-none cursor-pointer transition-all duration-300 hover:bg-gold-light hover:-translate-y-1 relative overflow-hidden group" type="submit">
<span className="relative z-10">Send Inquiry</span>
<div className="absolute top-1/2 left-1/2 w-0 h-0 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out group-active:w-[300px] group-active:h-[300px]"></div>
</button>
</form>
</div>
</section>
</div>

<footer className="relative pt-24 pb-8 px-6 bg-black border-t border-gold/20 overflow-hidden z-10">
<span className="absolute top-0 right-[2%] font-korean text-[12rem] font-light text-gold opacity-[0.03] leading-none pointer-events-none">Lab</span>
<div className="max-w-[87.5rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-20">
<div className="lg:col-span-2 max-w-[18.75rem]">
<div className="font-korean text-3xl-rem text-gold mb-2 tracking-widest">Re:Food</div>
<div className="font-heading text-xs-rem font-light tracking-widest uppercase text-cream mb-8">Lab</div>
<p className="font-body text-sm-rem font-light text-cream-dark leading-relaxed">
                    전통과 기술이 만나 완성된 프리미엄 K-디저트 솔루션. 건강한 달콤함과 비즈니스의 효율을 동시에 제공합니다.
                </p>
</div>
<div>
<h4 className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold mb-6">Navigate</h4>
<ul className="list-none p-0 m-0 space-y-3">
<li><a className="font-body text-sm-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#intro">Story</a></li>
<li><a className="font-body text-sm-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#problem">Philosophy</a></li>
<li><a className="font-body text-sm-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#process">Process</a></li>
<li><a className="font-body text-sm-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-heading text-xs-rem font-normal tracking-widest uppercase text-gold mb-6">Contact</h4>
<p className="font-body text-sm-rem font-light text-cream-dark mb-3 leading-relaxed">
                    서울특별시 노원구<br/>[상세 주소]
                </p>
<p className="font-body text-sm-rem font-light text-cream-dark mb-3">
                    refoodlab@premium-sushi-restaurant-landing-page-template
                </p>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 flex items-center justify-center border border-gold/30 text-cream no-underline transition-all hover:border-gold hover:text-gold" href="#">
<iconify-icon className="text-xl-rem" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center border border-gold/30 text-cream no-underline transition-all hover:border-gold hover:text-gold" href="#">
<iconify-icon className="text-xl-rem" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-[87.5rem] mx-auto mt-24 pt-8 border-t border-gold/10 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-20">
<p className="font-body text-xs-rem font-light text-cream-dark">© 2024 Re:Food Lab. All rights reserved.</p>
<div className="flex gap-6">
<a className="font-body text-xs-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#">Privacy Policy</a>
<a className="font-body text-xs-rem font-light text-cream-dark no-underline transition-colors hover:text-gold" href="#">Terms of Service</a>
</div>
</div>
</footer>





    </>
  );
}
