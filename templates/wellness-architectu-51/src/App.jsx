import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }

        document.querySelectorAll('.split-animate').forEach(el => {
            splitTextToWords(el);
        });

        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -30, opacity: 0, duration: 0.4 })
              .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });

        function initSite() {
            gsap.to('.hero-text span', { 
                y: 0, 
                stagger: 0.1, 
                duration: 1.4, 
                ease: 'power4.out' 
            });
            gsap.to('.hero-fade', { opacity: 1, duration: 1, delay: 0.6 });
            
            gsap.to('.hero-img', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero-img',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });

            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.015,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.92,
                        opacity: 0.3, 
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 15vh",    
                            scrub: true
                        }
                    });
                }
            });

            gsap.from('.footer-sticky > div', {
                y: 60,
                opacity: 0,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top bottom',
                    end: 'bottom bottom',
                    scrub: true
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>

<div className="loader">
<div className="loader-text">VERSPA</div>
<div className="loader-bar"></div>
</div>

<nav className="fixed top-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference text-white">
<div className="display font-semibold text-xl tracking-tighter">VERSPA</div>
<div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-medium">
<a className="hover:text-gray-400 transition-colors" href="#">프로젝트</a>
<a className="hover:text-gray-400 transition-colors" href="#">스튜디오</a>
<a className="hover:text-gray-400 transition-colors" href="#">커뮤니티</a>
<a className="hover:text-gray-400 transition-colors" href="#">문의하기</a>
</div>
<div className="md:hidden text-xs tracking-widest">MENU</div>
</nav>

<div className="wrapper">

<section className="h-screen relative flex items-center justify-center overflow-hidden">
<img alt="Background" className="absolute inset-0 w-full h-full object-cover brightness-75 hero-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"/>
<div className="relative z-10 text-center text-white mix-blend-difference px-6">
<h1 className="display text-[7vw] leading-none hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full uppercase">Global Wellness</span>
</h1>
<h1 className="display text-[7vw] leading-none hero-text overflow-hidden tracking-tighter">
<span className="block translate-y-full uppercase">Technology</span>
</h1>
<p className="mt-8 text-xs md:text-sm uppercase tracking-[0.5em] font-medium opacity-0 hero-fade">미래형 웰니스 아키텍처의 기준</p>
</div>
</section>

<section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-16 max-w-[1800px] mx-auto bg-[var(--c-bg)]">
<div>
<h2 className="display text-3xl md:text-5xl leading-tight split-animate font-semibold tracking-tight">
                    감각의 전이, <br/><span className="text-[var(--c-accent)]">웰니스의 진화.</span>
</h2>
</div>
<div className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
<p className="mb-8 split-animate">우리는 기술이 인간의 가장 본연적인 휴식에 기여해야 한다고 믿습니다. VERSPA는 생체 리듬 분석과 공간 심리학을 결합하여, 단순한 거주 공간을 넘어 신체와 정신이 완벽히 회복되는 경험을 설계합니다.</p>
<div className="h-px w-full bg-black/10 my-8"></div>
<div className="flex gap-12 text-xs uppercase tracking-widest font-semibold text-gray-500">
<div>Since 2024</div>
<div>Seoul / Tokyo</div>
</div>
</div>
</section>

<section className="stack-section">
<div className="text-center mb-20 px-6">
<div className="text-xs uppercase tracking-widest mb-4 opacity-50 font-semibold">Our Portfolio</div>
<h2 className="display text-4xl md:text-7xl tracking-tighter uppercase font-semibold">Recent Projects</h2>
</div>
<div className="stack-container">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">01</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">스마트 리커버리 센터</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Seoul, South Korea</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                인공지능 기반의 온도 및 조도 최적화 시스템을 통해 도심 속 완벽한 수면 환경을 제공하는 하이엔드 주거 솔루션입니다.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold">프로젝트 상세보기</button>
</div>
<div className="card-img-wrap">
<img alt="Smart Recovery" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dccab47-16b0-4716-9e1a-b97f124e3031_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">02</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">바이오필릭 명상 파빌리온</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Jeju, South Korea</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                자연의 소리와 향기를 디지털로 재해석하여 뇌파 안정과 깊은 명상을 돕는 테크-웰니스 공간입니다.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold">프로젝트 상세보기</button>
</div>
<div className="card-img-wrap">
<img alt="Meditation Pavilion" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/952269bf-60f5-48dc-afce-13953bead1eb_1600w.webp"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-4xl md:text-5xl display mb-2 text-[var(--c-bg)] opacity-20">03</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">뉴로-아키텍처 하우스</h3>
<p className="text-xs mt-4 opacity-60 uppercase tracking-widest font-medium">Tokyo, Japan</p>
</div>
<div className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
                                신경 과학적 접근을 통해 거주자의 스트레스 수치를 실시간으로 관리하는 미래형 개인 주택입니다.
                            </div>
<button className="text-left uppercase tracking-widest text-xs border-b border-white/30 pb-2 w-max hover:text-white transition-all font-semibold">프로젝트 상세보기</button>
</div>
<div className="card-img-wrap">
<img alt="Neuro Architecture" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa5ed4de-1a7e-4bb7-b0ea-1a4c511663df_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#E3E1DC] text-center flex flex-col items-center justify-center relative z-10 px-6">
<h2 className="display text-2xl md:text-4xl mb-8 tracking-tight font-semibold">기술 그 이상의 안식</h2>
<div className="max-w-xl text-gray-600 font-light mb-12 leading-relaxed text-base md:text-lg">
                우리는 단순한 건물이 아닌, 삶의 질을 바꾸는 도구를 만듭니다. VERSPA의 기술은 당신의 가장 고요한 순간에 비로소 완성됩니다.
            </div>
<div className="h-16 w-px bg-black/20"></div>
</section>
</div>

<footer className="footer-sticky px-6">
<div className="relative z-10 text-center">
<div className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500 font-medium">새로운 시작을 원하신다면</div>
<a className="display text-[7vw] leading-none hover:text-gray-400 transition-colors tracking-tighter font-semibold" href="mailto:contact@verspa.tech">
                함께 시작하기
            </a>
<div className="flex justify-center gap-8 mt-12 text-xs uppercase tracking-widest text-gray-400 font-medium">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="mt-20 text-[10px] text-gray-700 font-medium tracking-widest">
                © 2025 VERSPA WELLNESS TECHNOLOGY. ALL RIGHTS RESERVED.
            </div>
</div>
<img className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"/>
</footer>


    </>
  );
}
