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



        // Icons
        lucide.createIcons();

        const slides = document.querySelectorAll('.slide');
        const indicators = document.querySelectorAll('.indicator');
        const progressBar = document.getElementById('progress-bar');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const playPauseIcon = document.getElementById('play-pause-icon');
        const playPauseText = document.getElementById('play-pause-text');

        let currentIndex = 0;
        const totalSlides = slides.length;
        const intervalTime = 15000; // 15초
        let slideInterval = null;
        let isAutoPlay = true;

        function setProgressActive() {
            progressBar.classList.remove('progress-reset');
            progressBar.classList.add('progress-bar');
            progressBar.style.width = '0%';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    progressBar.style.width = '100%';
                });
            });
        }

        function setProgressStopped() {
            progressBar.classList.remove('progress-bar');
            progressBar.classList.add('progress-reset');
            progressBar.style.width = '0%';
        }

        function updateSlide(index, options = {}) {
            const { resetProgress = true } = options;

            slides.forEach(slide => slide.classList.remove('active'));
            indicators.forEach(ind => ind.classList.add('opacity-30'));

            slides[index].classList.add('active');
            indicators[index].classList.remove('opacity-30');

            if (isAutoPlay && resetProgress) {
                setProgressActive();
            } else if (!isAutoPlay) {
                setProgressStopped();
            }
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlide(currentIndex);
        }

        function startAutoPlay() {
            if (slideInterval) clearInterval(slideInterval);
            isAutoPlay = true;
            playPauseIcon.setAttribute('data-lucide', 'pause');
            playPauseText.textContent = 'Pause';
            lucide.createIcons();
            updateSlide(currentIndex, { resetProgress: true });
            slideInterval = setInterval(nextSlide, intervalTime);
        }

        function stopAutoPlay() {
            isAutoPlay = false;
            if (slideInterval) clearInterval(slideInterval);
            setProgressStopped();
            playPauseIcon.setAttribute('data-lucide', 'play');
            playPauseText.textContent = 'Play';
            lucide.createIcons();
        }

        // 초기 자동재생
        startAutoPlay();

        nextBtn.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
        });

        prevBtn.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
        });

        playPauseBtn.addEventListener('click', () => {
            if (isAutoPlay) {
                stopAutoPlay();
            } else {
                startAutoPlay();
            }
        });

        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = Number(indicator.dataset.index);
                currentIndex = index;
                stopAutoPlay();
                updateSlide(currentIndex, { resetProgress: false });
            });
        });

        // ✅ Nav 클릭 → 특정 슬라이드로 이동
        const logo = document.getElementById('nav-logo');
        const navItems = document.querySelectorAll('[data-slide]');

        function goToSlide(index) {
            currentIndex = index;
            stopAutoPlay();
            updateSlide(currentIndex, { resetProgress: false });
        }

        if (logo) {
            logo.addEventListener('click', () => {
                goToSlide(0); // Home
            });
        }

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = Number(item.dataset.slide);
                goToSlide(index);
            });
        });

        // Typewriter Effect for Slide 0
        const typeElement = document.getElementById("typewriter");
        const words = ["corporations", "entrepreneurs", "innovators"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typeElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typeElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => isDeleting = true, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }

            const speed = isDeleting ? 50 : 100;
            setTimeout(type, speed);
        }
        
        type();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<main className="relative w-full max-w-[1600px] aspect-video bg-zinc-950/80 border border-white/5 shadow-2xl overflow-hidden rounded-2xl backdrop-blur-sm m-6 ring-1 ring-white/10">

<nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6">

<div className="flex items-center gap-2">
<img className="h-14 w-auto opacity-100" src="https://i.ibb.co/6RQYnnhL/The-Invention-Lab-CI-org.png" style={{filter: 'invert(14%) sepia(91%) saturate(7493%) hue-rotate(355deg) brightness(92%) contrast(126%)'}}/>
</div>

<div className="hidden md:flex gap-6 text-xs font-medium text-zinc-400">
<span className="hover:text-white cursor-pointer" data-go="0">Home</span>
<span className="hover:text-white cursor-pointer" data-go="1">About</span>
<span className="hover:text-white cursor-pointer" data-go="2">Capabilities</span>
<span className="hover:text-white cursor-pointer" data-go="3">Methodology</span>
</div>
<a className="text-[10px] font-semibold uppercase bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition" href="#">
                Contact
            </a>
</nav>

<section className="slide md:px-20 active text-center pr-8 pl-8" id="slide-0">
<div className="inline-flex mx-auto text-[10px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-8 tracking-wide uppercase font-semibold" style={{}}>
                Venture Studio for Startup &amp; Corporates
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6">
                We build new ventures with <br/>
<span className="text-gradient-primary font-sans" id="typewriter" style={{}}>corporations</span><span className="cursor-blink h-8 md:h-12 lg:h-14 ml-1 align-middle"> </span>
</h1>
<p className="md:text-base leading-relaxed text-sm text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>
                새로운 사업을 설계하고 성장 단계까지 이끄는 벤처 빌딩 파트너.<br/>
                시장의 기회를 발견하고 실행 가능한 비즈니스로 발전시킵니다.
            </p>
<div className="flex justify-center gap-4">
<button className="px-6 py-2.5 bg-white text-black rounded-lg text-xs font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2" style={{}}>
                    Start Project 
                    <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-6 py-2.5 glass-panel text-white rounded-lg text-xs font-medium hover:bg-white/5 transition-colors" style={{}}>
                    Explore Model
                </button>
</div>
</section>

<section className="slide px-4 md:px-10" id="slide-1">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-10 max-w-3xl mx-auto">
<h2 className="md:text-4xl leading-normal text-2xl font-semibold text-white tracking-tight mb-6 font-sans" style={{}}>
                        더인벤션랩은 8년간의
                        <span className="text-zinc-400 font-sans" style={{}}>오픈이노베이션 역량</span>을 토대로,<br/>
<span className="text-gradient-primary font-sans" style={{}}>Venture Studio</span>로서<br className="hidden md:block"/>
                        새로운 비즈니스와 성장 기회를 설계합니다.
                    </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="glass-panel bg-zinc-900/30 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 md:p-7">
<div className="flex items-center gap-3 mb-6">
<div className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700">
<svg className="lucide lucide-history w-5 h-5 text-zinc-300" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white" style={{}}>TIL’s Journey</h3>
<p className="text-xs text-zinc-500 font-mono mt-1 tracking-wider" style={{}}>2017 — PRESENT</p>
</div>
</div>
<div className="space-y-6">

<div className="border-zinc-800 border-l pl-6 relative">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900"></div>
<h4 className="text-sm font-semibold text-zinc-200 mb-2" style={{}}>Open Innovation Leadership</h4>
<p className="leading-relaxed break-keep text-sm text-zinc-400" style={{}}>
                                    민간 대기업 및 중견기업의 스타트업 발굴부터 PoC, 성과 도출, 투자 연계까지 8년간의 실행 경험을 축적했습니다.
                                </p>
</div>

<div className="border-zinc-800 border-l pl-6 relative">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900"></div>
<h4 className="text-sm font-semibold text-zinc-200 mb-2" style={{}}>Startup Investments &amp; Accelerating</h4>
<p className="leading-relaxed break-keep text-sm text-zinc-400" style={{}}>
                                    초기 투자부터 성장 가속화와 후속 투자까지, 전주기 스타트업 투자·육성 경험을 보유하고 있습니다.
                                </p>
</div>

<div className="relative pl-6 border-l border-transparent">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 border-2 border-zinc-900"></div>
<h4 className="text-sm font-semibold text-zinc-200 mb-2" style={{}}>
                                    Corporate Company Building &amp; Spin-Off
                                </h4>
<p className="leading-relaxed break-keep text-sm text-zinc-400" style={{}}>
                                    사내벤처 육성 및 스핀오프 프로젝트를 통한 독립 법인화 성공 사례를 다수 보유하고 있습니다.
                                </p>
</div>
</div>
</div>

<div className="md:p-7 bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-950/20 border-red-500/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative overflow-hidden group">
<div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-500/20 blur-[70px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition-all duration-700">
</div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="flex bg-red-50/10 w-9 h-9 border-red-600/20 border rounded-lg items-center justify-center">
<svg className="lucide lucide-sparkles w-5 h-5 text-red-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-red-600" style={{}}>The Next Chapter</h3>
<p className="text-xs text-zinc-400 tracking-wider font-mono mt-1" style={{}}>VENTURE STUDIO MODEL</p>
</div>
</div>
<div className="space-y-5 relative z-10">
<div>
<h4 className="text-sm font-semibold text-white mb-2" style={{}}>Venture Studio for Corporates</h4>
<p className="leading-relaxed break-keep text-sm text-zinc-400 mb-4" style={{}}>
                                    급변하는 AI 기술과 기업 환경 변화에 대응하기 위해, 기존의 오픈이노베이션을 넘어선
                                    <span className="text-red-200" style={{}}>벤처 스튜디오</span>로 진화합니다.
                                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="bg-zinc-950/50 border border-white/5 rounded-lg p-3.5 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400 mb-2" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h5 className="text-sm font-medium text-zinc-200 mb-1 mt-1" style={{}}>AI-Driven</h5>
<p className="text-xs text-zinc-500 break-keep" style={{}}>AI가 촉진하는 변화에 맞춘 혁신적 벤처 모델</p>
</div>
<div className="bg-zinc-950/50 border border-white/5 rounded-lg p-3.5 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
<svg className="lucide lucide-link w-4 h-4 text-emerald-400 mb-2" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<h5 className="text-sm font-medium text-zinc-200 mb-1 mt-1" style={{}}>New Business</h5>
<p className="text-xs text-zinc-500 break-keep" style={{}}>스타트업 육성 역량을 기업 비즈니스와 연결</p>
</div>
</div>
<div className="pt-4 border-t border-white/5 mt-2">
<a className="inline-flex items-center gap-2 hover:text-blue-300 transition-colors text-xs text-red-600" href="#model" style={{}}>
                                    Discover Studio Model
                                    
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="slide px-4 md:px-16" id="slide-2">
<div className="max-w-7xl mx-auto pt-16 pb-4" id="capabilities">
<div className="text-center mb-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mt-3 mb-3 font-sans" style={{}}>What We Do</h2>
<p className="text-base font-medium text-zinc-400" style={{}}>
                        더인벤션랩은 시장의 기회를 발견하고, 실행 가능한 비즈니스로 발전시키며, <br/>
                        지속적인 성장과 확장을 가능하게 하는 벤처를 만듭니다.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden">

<div className="flex flex-col hover:bg-zinc-900/50 transition-colors bg-zinc-950 h-full pt-10 pr-10 pb-10 pl-10">
<div className="mb-8">
<span className="text-[10px] uppercase text-zinc-500 tracking-widest border-zinc-800 border rounded pt-1 pr-2 pb-1 pl-2" style={{}}>
                                01
                            </span>
<h3 className="text-2xl font-semibold text-white mt-4 mb-1 font-sans" style={{}}>New Business Design</h3>
<p className="text-xs font-medium text-blue-400" style={{}}>From Insight to Business</p>
</div>
<p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed break-keep" style={{}}>
                            시장 기회를 정밀하게 분석하고, 검증 가능한 방향으로 디자인합니다.
                        </p>
<ul className="space-y-3 text-xs text-zinc-400 mb-8 border-t border-zinc-800 pt-6">
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                시장·기술 리서치 및 기회 발굴
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                신사업 콘셉트 및 BM 설계
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                사내벤처 육성 및 자체 신사업 추진
                            </li>
</ul>
</div>

<div className="flex flex-col hover:bg-zinc-900/50 transition-colors bg-zinc-950 h-full pt-10 pr-10 pb-10 pl-10 relative">
<div className="mb-8">
<span className="text-[10px] uppercase text-zinc-500 tracking-widest border-zinc-800 border rounded pt-1 pr-2 pb-1 pl-2" style={{}}>
                                02
                            </span>
<h3 className="text-2xl font-semibold text-white mt-4 mb-1 font-sans" style={{}}>Venture Building &amp; Scale-up</h3>
<p className="text-xs font-medium text-purple-400" style={{}}>From Strategy to Scalable Growth</p>
</div>
<p className="flex-grow leading-relaxed break-keep text-sm text-zinc-400 mb-8" style={{}}>
                            사업의 실행 기반을 구축하고, 지속 가능한 성장 구조와 투자 스케일업을 만들어갑니다.
                        </p>
<ul className="space-y-3 text-xs text-zinc-400 mb-8 border-t border-zinc-800 pt-6">
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                실행 로드맵 및 시장 진입 준비
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                핵심 지표 중심의 성장 전략 설계
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                후속 투자 전략 및 스케일업 구조 설계
                            </li>
</ul>
</div>

<div className="flex flex-col hover:bg-zinc-900/50 transition-colors bg-zinc-950 h-full pt-10 pr-10 pb-10 pl-10">
<div className="mb-8">
<span className="text-[10px] uppercase text-zinc-500 tracking-widest border-zinc-800 border rounded pt-1 pr-2 pb-1 pl-2" style={{}}>
                                03
                            </span>
<h3 className="text-2xl font-semibold text-white mt-4 mb-1 font-sans" style={{}}>Strategic Partnership</h3>
<p className="text-xs text-emerald-400 font-medium" style={{}}>From OI to Strategic Network</p>
</div>
<p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed break-keep" style={{}}>
                            벤처가 성장할 수 있도록 외부 생태계를 설계하고 확장합니다.
                        </p>
<ul className="space-y-3 text-xs text-zinc-400 mb-8 border-t border-zinc-800 pt-6">
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                글로벌 및 국내 OI 프로그램 운영
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                스타트업·기술 매칭 및 PoC 프로젝트 기획
                            </li>
<li className="flex gap-2 items-center" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                대기업·기관·스타트업 간 협력 모델 설계
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="slide px-4 md:px-16 overflow-hidden" id="slide-3">
<div className="max-w-7xl mx-auto pt-24 pb-8 relative">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2">
</div>

<div className="text-center mb-8 relative z-10">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mt-3 mb-3 font-sans" style={{}}>How We Do</h2>
<p className="text-base font-medium text-zinc-400" style={{}}>
                        더인벤션랩은 우연이 아닌 구조와 과정으로 벤처를 만듭니다.<br/>
                        Studio Core Platform을 기반으로 기업과 창업자를 위한 새로운 사업을 정교한 프로세스로 설계하고 실행합니다.
                    </p>
</div>

<div className="aspect-square md:aspect-[16/10] min-h-[480px] flex w-full max-w-3xl mx-auto relative items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] rounded-full border border-zinc-800/60"></div>
<div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-zinc-800/30"></div>
<div className="absolute w-full h-px bg-zinc-800/50"></div>
<div className="absolute h-full w-px bg-zinc-800/50"></div>
<div className="absolute w-full h-px bg-zinc-800/30 rotate-45"></div>
<div className="absolute w-full h-px bg-zinc-800/30 -rotate-45"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-[220px] h-[220px] md:w-[380px] md:h-[380px]">

<div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 pointer-events-auto group z-20">
<div className="w-full h-full rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500 transition-all duration-300 shadow-lg shadow-black/50 cursor-pointer relative z-10">
<svg className="lucide lucide-dollar-sign w-5 h-5 md:w-6 md:h-6" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 flex flex-col items-center w-40">
<span className="block text-[10px] md:text-xs font-semibold text-zinc-300 tracking-[0.15em] uppercase mb-1" style={{}}>Capital</span>
<span className="block text-[10px] text-zinc-500 scale-0 group-hover:scale-100 transition-transform origin-top bg-zinc-900 border border-zinc-800 px-2 py-1 rounded whitespace-nowrap" style={{}}>
                                        Blended Financing
                                    </span>
</div>
</div>

<div className="absolute top-1/2 -right-0 translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 pointer-events-auto group z-20">
<div className="w-full h-full rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-purple-400 group-hover:border-purple-500 transition-all duration-300 shadow-lg shadow-black/50 cursor-pointer relative z-10">
<svg className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 flex flex-col items-center w-40">
<span className="block text-[10px] md:text-xs font-semibold text-zinc-300 tracking-[0.15em] uppercase mb-1" style={{}}>Talent</span>
<span className="block text-[10px] text-zinc-500 scale-0 group-hover:scale-100 transition-transform origin-top bg-zinc-900 border border-zinc-800 px-2 py-1 rounded whitespace-nowrap" style={{}}>
                                        Operator Pool
                                    </span>
</div>
</div>

<div className="absolute -bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 md:w-12 md:h-12 pointer-events-auto group z-20">
<div className="w-full h-full rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-orange-400 group-hover:border-orange-500 transition-all duration-300 shadow-lg shadow-black/50 cursor-pointer relative z-10">
<svg className="lucide lucide-building-2 w-5 h-5 md:w-6 md:h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 flex flex-col items-center w-40">
<span className="block text-[10px] md:text-xs font-semibold text-zinc-300 tracking-[0.15em] uppercase mb-1" style={{}}>Infra</span>
<span className="block text-[10px] text-zinc-500 scale-0 group-hover:scale-100 transition-transform origin-top bg-zinc-900 border border-zinc-800 px-2 py-1 rounded whitespace-nowrap" style={{}}>
                                        Validation System
                                    </span>
</div>
</div>

<div className="absolute top-1/2 -left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 pointer-events-auto group z-20">
<div className="w-full h-full rounded-xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500 transition-all duration-300 shadow-lg shadow-black/50 cursor-pointer relative z-10">
<svg className="lucide lucide-share-2 w-5 h-5 md:w-6 md:h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 flex flex-col items-center w-40">
<span className="block text-[10px] md:text-xs font-semibold text-zinc-300 tracking-[0.15em] uppercase mb-1" style={{}}>Network</span>
<span className="block text-[10px] text-zinc-500 scale-0 group-hover:scale-100 transition-transform origin-top bg-zinc-900 border border-zinc-800 px-2 py-1 rounded whitespace-nowrap" style={{}}>
                                        LP &amp; Cross-border
                                    </span>
</div>
</div>
</div>
</div>

<div className="relative z-20 w-40 h-40 md:w-48 md:h-48 rounded-full bg-zinc-950 border border-zinc-800 flex flex-col items-center justify-center text-center shadow-2xl shadow-black ring-1 ring-white/5 group">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-800/20 to-transparent opacity-50"></div>
<div className="group-hover:opacity-100 transition-all duration-700 ease-out opacity-0 border-red-600/20 border-2 rounded-full absolute inset-0 scale-110">
</div>
<h3 className="text-xl md:text-xl font-bold text-white tracking-tight" style={{}}>STUDIO CORE PLATFORM</h3>
</div>
</div>
</div>
</section>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 z-50">
<div className="h-full bg-red-600 w-0 progress-bar" id="progress-bar" style={{width: '0%'}}></div>
</div>

<div className="absolute bottom-8 right-8 z-50 flex gap-2">
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 indicator opacity-100" data-index="0"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 indicator opacity-30" data-index="1"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 indicator opacity-30" data-index="2"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 indicator opacity-30" data-index="3"></button>
</div>

<div className="absolute bottom-8 left-8 z-50 flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 bg-black/40 hover:bg-white/10 transition-colors" id="prev-btn">
<svg className="lucide lucide-chevron-left w-4 h-4 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide font-semibold px-3 h-8 rounded-full border border-white/20 bg-black/40 hover:bg-white/10 transition-colors" id="play-pause-btn">
<svg className="lucide lucide-pause w-3 h-3 text-white" data-lucide="pause" fill="none" height="24" id="play-pause-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
<span id="play-pause-text" style={{}}>Pause</span>
</button>
<button className="flex hover:bg-white/10 transition-colors bg-black/40 w-8 h-8 border-white/20 border rounded-full items-center justify-center" id="next-btn">
<svg className="lucide lucide-chevron-right w-4 h-4 text-white" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</main>


    </>
  );
}
