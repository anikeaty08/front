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



        // lucide icons
        lucide.createIcons();

        // 슬라이드/롤링 로직
        const SLIDE_INTERVAL = 20000; // 20초
        const sections = Array.from(document.querySelectorAll('section[data-slide-index]'))
            .sort((a, b) => Number(a.dataset.slideIndex) - Number(b.dataset.slideIndex));

        const dots = Array.from(document.querySelectorAll('.slide-dot'));
        let currentIndex = 0;
        let isPlaying = true;
        let timerId = null;

        const playIcon = document.getElementById('icon-play');
        const pauseIcon = document.getElementById('icon-pause');
        const playPauseLabel = document.getElementById('play-pause-label');
        const playPauseBtn = document.getElementById('playPauseBtn');

        function updateDots() {
            dots.forEach((dot, idx) => {
                if (idx === currentIndex) {
                    dot.classList.add('bg-white', 'ring-2', 'ring-red-500');
                    dot.classList.remove('bg-slate-400/60');
                } else {
                    dot.classList.remove('bg-white', 'ring-2', 'ring-red-500');
                    dot.classList.add('bg-slate-400/60');
                }
            });
        }

        function updatePlayButton() {
            if (!playIcon || !pauseIcon || !playPauseLabel) return;
            if (isPlaying) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                playPauseLabel.textContent = '자동 롤링 일시정지';
                playPauseBtn.setAttribute('aria-label', '자동 롤링 일시정지');
            } else {
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                playPauseLabel.textContent = '자동 롤링 재생';
                playPauseBtn.setAttribute('aria-label', '자동 롤링 재생');
            }
        }

        function goToSlide(index, options = {}) {
            const { fromUser = false } = options;
            if (sections.length === 0) return;

            if (index < 0) index = sections.length - 1;
            if (index >= sections.length) index = 0;

            currentIndex = index;
            sections[currentIndex].scrollIntoView({ behavior: 'smooth' });
            updateDots();

            if (fromUser) {
                pauseAuto();
            }
        }

        function nextSlide() {
            goToSlide(currentIndex + 1);
        }

        function startAuto() {
            if (timerId) clearInterval(timerId);
            timerId = setInterval(nextSlide, SLIDE_INTERVAL);
            isPlaying = true;
            updatePlayButton();
        }

        function pauseAuto() {
            if (timerId) {
                clearInterval(timerId);
                timerId = null;
            }
            isPlaying = false;
            updatePlayButton();
        }

        // 도트 클릭 이벤트
        dots.forEach((dot) => {
            dot.addEventListener('click', () => {
                const idx = Number(dot.dataset.index || '0');
                goToSlide(idx, { fromUser: true });
            });
        });

        // 플레이/일시정지 버튼
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => {
                if (isPlaying) {
                    pauseAuto();
                } else {
                    startAuto();
                }
            });
        }

        // 초기화
        window.addEventListener('DOMContentLoaded', () => {
            updateDots();
            startAuto();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/iphone14wallpaper4copy-79eead3c8221db4e6fd870a3d5061aa0" width="100%"></iframe></div></div>

<header className="fixed bg-black w-full z-50 border-slate-200/50 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">

<img alt="The Invention Lab" className="h-20 md:h-20 w-auto" src="https://i.ibb.co/6RQYnnhL/The-Invention-Lab-CI-org.png" style={{}}/>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm font-Normal text-zinc-400">
<a className="hover:text-red-600 transition-colors" href="#home">Home</a>
<a className="hover:text-red-600 transition-colors" href="#newbiz">New Biz</a>
<a className="hover:text-red-600 transition-colors" href="#strategy">Partnership</a>
<a className="hover:text-red-600 transition-colors" href="#scaleup">Scale-up</a>
<a className="hover:text-red-600 transition-colors" href="#venturestudio">Venture Studio</a>
<a className="text-red-600" href="#startupvn">StartupVN</a>
</nav>
<button className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-slate-800 transition-all">
<span className="">Contact</span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</header>

<div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-3 z-40">

<button aria-label="Hero 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full hover:bg-white transition-all ring-0 bg-white ring-2 ring-red-500" data-index="0"></button>
<button aria-label="New Biz Design 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full hover:bg-white transition-all ring-0 bg-slate-400/60" data-index="1"></button>
<button aria-label="Strategy Partnership 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full hover:bg-white transition-all ring-0 bg-slate-400/60" data-index="2"></button>
<button aria-label="Scale-up 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full bg-slate-400/60 hover:bg-white transition-all ring-0" data-index="3"></button>
<button aria-label="Venture Studio 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full bg-slate-400/60 hover:bg-white transition-all ring-0" data-index="4"></button>
<button aria-label="StartupVN 섹션으로 이동" className="slide-dot w-2.5 h-2.5 rounded-full bg-slate-400/60 hover:bg-white transition-all ring-0" data-index="5"></button>

<button aria-label="자동 롤링 일시정지" className="mt-4 flex items-center justify-center w-7 h-7 rounded-full border border-slate-500/60 bg-slate-900/80 text-slate-100 hover:bg-slate-800 hover:border-slate-300 transition-all" id="playPauseBtn">
<svg className="lucide lucide-play w-3.5 h-3.5 hidden" data-lucide="play" fill="none" height="24" id="icon-play" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<svg className="lucide lucide-pause w-3.5 h-3.5" data-lucide="pause" fill="none" height="24" id="icon-pause" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect></svg>
<span className="sr-only" id="play-pause-label">자동 롤링 일시정지</span>
</button>
</div>

<section className="min-h-screen flex flex-col overflow-hidden text-white pt-20 relative justify-between" data-slide-index="0" id="home">

<div className="-translate-y-1/2 opacity-30 w-[50vw] h-[50vw] rounded-full absolute top-0 right-0 blur-3xl translate-x-1/4"></div>
<div className="-translate-x-1/4 opacity-40 w-[40vw] h-[40vw] bg-cover bg-center rounded-full absolute bottom-0 left-0 blur-3xl translate-y-1/3 bg-[url(default)]" style={{}}></div>

<div className="flex-grow flex flex-col md:flex-row w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="md:w-2/3 w-full pt-12 pb-12 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/30 border border-red-400/30 text-red-50 text-xs font-medium backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                    초기 투자 · Open Innovation · Venture Studio
                </div>
<h1 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
                    Venture Studio for <br/> Startups &amp; Corporates<br/>
</h1>
<div className="space-y-4 max-w-2xl">
<p className="text-xl md:text-2xl font-light text-red-100 leading-snug">
                        Seed &amp; Pre-A 전문 Micro VC.<br/>
                        TIPS · LIPS · Open Innovation을 결합해<br/>
<span className="font-normal text-white border-b border-white/30 pb-0.5">창업–투자–회수 전 과정을 설계합니다.</span>
</p>
</div>
<div className="flex flex-wrap gap-4 pt-4 text-sm md:text-base font-medium text-red-100">
<div className="flex items-center gap-2">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="">New Biz Design</span>
</div>
<span className="opacity-50">|</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="">Strategy Partnership</span>
</div>
<span className="opacity-50">|</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="">Scale-up</span>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex flex-col items-center justify-center p-8">
<div className="transform hover:rotate-0 transition-all duration-500 bg-white rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl rotate-2">
<div className="aspect-square flex text-slate-500 bg-slate-900 rounded-xl mb-4 items-center justify-center" onclick="window.location.href='https://theinventionlab-2025comeup.aura.build';window.location.href='https://inventionlab.typeform.com/TILatCOMEUP2025'" role="button">
<img alt="QR Code" className="w-full h-full object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58bcefea-90ec-4bbb-9501-5c9320155631_800w.png"/>
</div>
<p className="text-lg font-semibold text-slate-950 tracking-tight text-center">Let’s continue after COMEUP</p>
<p className="text-xs text-slate-500 text-center mt-2">미팅·제안·프로그램 협의는QR 스캔 후 폼 작성</p>
</div>
</div>
</div>

<div className="bg-zinc-950/80 w-full z-10 border-white/10 border-t relative backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<a className="group block space-y-2 cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all" href="#newbiz">
<div className="flex items-center gap-2 text-red-200 group-hover:text-white">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<h3 className="font-semibold tracking-tight">New Biz Design</h3>
</div>
<p className="text-xs text-red-100/80 leading-relaxed">
                            Corporate New Business Design&amp; Internal Venture Studio
                        </p>
</a>

<a className="group block space-y-2 cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all" href="#strategy">
<div className="flex items-center gap-2 text-red-200 group-hover:text-white">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="font-semibold tracking-tight">Strategy Partnership</h3>
</div>
<p className="text-xs text-red-100/80 leading-relaxed">
                            Open Innovation&amp; Cross-Border Program
                        </p>
</a>

<a className="group block space-y-2 cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all" href="#scaleup">
<div className="flex items-center gap-2 text-red-200 group-hover:text-white">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<h3 className="font-semibold tracking-tight">Scale-up</h3>
</div>
<p className="text-xs text-red-100/80 leading-relaxed">
                            Seed Investment&amp; TIPS/LIPS Bridge
                        </p>
</a>

<a className="group block space-y-2 cursor-pointer hover:bg-white/10 p-4 rounded-xl transition-all" href="#venturestudio">
<div className="flex items-center gap-2 text-red-200 group-hover:text-white">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="font-semibold tracking-tight">Venture Studio</h3>
</div>
<p className="text-xs text-red-100/80 leading-relaxed">
                            Startup Factory with Corporates공동창업 · 30-40% 지분
                        </p>
</a>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 bg-white flex items-center" data-slide-index="1" id="newbiz">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="mb-16">
<span className="text-red-600 font-semibold tracking-tight text-sm uppercase mb-2 block">For Corporates</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">New Biz Design</h2>
<p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl leading-relaxed">
                    대·중견기업의 <span className="text-slate-900 font-medium">사내벤처 · DX Agile 조직</span>을 위해<br/>
                    아이디어 → MVP → 분사 &amp; JV/공동투자까지 설계합니다.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="lucide lucide-lightbulb w-8 h-8" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">DX Awake &amp; Ideation</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        DX 트렌드 · 고객 Value Chain 분석으로<br/>신규 성장 테마 발굴
                    </p>
</div>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="lucide lucide-wrench w-8 h-8" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">MVP &amp; Customer Test</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        MVP를 실제로 만들고,<br/>고객 데이터를 기반으로 검증
                    </p>
</div>

<div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
<svg className="lucide lucide-git-fork w-8 h-8" data-lucide="git-fork" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path><path d="M12 12v3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Spin-off &amp; JV</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        분사 · JV · Seed 투자까지<br/>실제 회사가 되도록 동행
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center border border-slate-100">
<h4 className="text-3xl font-semibold text-slate-900 mb-1">20+</h4>
<p className="text-slate-500 text-sm">Corporate Clients</p>
<div className="text-xs text-slate-400 mt-4">사내벤처 육성·분사 및 공동투자 경험 보유</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center border border-slate-100">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-red-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold text-slate-900">Success Cases</span>
</div>
<p className="leading-relaxed text-sm text-slate-500">현대산업개발, LG유플러스, 현대자동차 등<br/>분사 사내벤처 공동 Seed 투자 완료</p>
</div>
<div className="bg-slate-900 rounded-2xl p-8 flex flex-col justify-center text-white relative overflow-hidden">
<div className="relative z-10">
<span className="uppercase block text-base font-semibold text-red-400 tracking-wide mb-2">Full Service</span>
<p className="text-sm text-slate-300">교육·코칭·개발까지, 사내벤처 전 여정 End-to-End 지원</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 bg-slate-50 flex items-center" data-slide-index="2" id="strategy">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-4">Strategy Partnership</h2>
<p className="text-lg text-slate-500 max-w-2xl">
                        대·중견기업의 <span className="text-slate-900 font-medium">신성장 과제</span>를 기준으로,<br/>
                        국내·베트남·SEA 스타트업과 연결되는 OI 프로그램 · PoC · 글로벌 연계 사업을 설계합니다.
                    </p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Korea</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Vietnam</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">SEA</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

<div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
<div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Domestic Open Innovation</h3>
<p className="text-slate-600 mb-6 text-lg leading-relaxed">
                        “기업의 전략 과제와 맞는 스타트업을<br/>
                        발굴–매칭–PoC–투자까지 연결합니다.”
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-500">
<svg className="lucide lucide-check w-4 h-4 text-red-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            KT, 삼천리, 우미건설 등 30+ 대기업 파트너
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-500">
<svg className="lucide lucide-check w-4 h-4 text-red-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            산업별(AI, 로봇, 에너지, F&amp;B) 맞춤형 트랙
                        </li>
</ul>
</div>

<div className="bg-slate-900 p-10 rounded-3xl border border-slate-800 shadow-sm text-white">
<div className="w-12 h-12 bg-slate-800 text-red-400 rounded-full flex items-center justify-center mb-6">
<svg className="lucide lucide-plane w-6 h-6" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Global Expansion OI</h3>
<p className="text-slate-400 mb-6 text-lg leading-relaxed">
                        “베트남·동남아 거점을 활용해 한국 기업의<br/>
<span className="text-white">현지 PoC·시범사업·파트너 발굴</span>을 설계합니다.”
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="lucide lucide-check w-4 h-4 text-red-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            호치민 지사 &amp; 19개 이상의 베트남/SEA 포트폴리오
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-400">
<svg className="lucide lucide-check w-4 h-4 text-red-400 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            현지 PoC · 시장진출 · JV 파트너십 설계
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="border-t border-slate-200 pt-6">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">For Corporates</h4>
<p className="text-sm text-slate-600">지금 당장 사업에 쓸 수 있는 PoC·JV·M&amp;A 파이프라인을 만듭니다.</p>
</div>
<div className="border-t border-slate-200 pt-6">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">For Startups</h4>
<p className="text-slate-600 text-sm">단순 데모데이가 아니라, 실제 매출과 투자로 연결되는 OI를 지향합니다.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-24 bg-slate-950 text-white flex items-center" data-slide-index="3" id="scaleup">
<div className="max-w-7xl mx-auto px-6 w-full">

<div className="border-b border-slate-800 pb-12 mb-16">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-12 gap-x-8 gap-y-8 justify-between">
<div className="">
<span className="text-red-500 font-semibold tracking-tight text-sm uppercase mb-2 block">Investment</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Scale-up</h2>
<p className="text-xl font-light text-slate-400">Seed Investment &amp; TIPS/LIPS Bridge</p>
</div>
<div className="flex gap-8 md:gap-16">
<div className="">
<div className="md:text-4xl text-3xl font-semibold tracking-tight text-center">190+</div>
<div className="uppercase text-xs text-slate-500 tracking-wider text-center mt-1">Portfolios</div>
</div>
<div className="">
<div className="md:text-4xl text-3xl font-semibold tracking-tight text-center">450억+</div>
<div className="uppercase text-xs text-slate-500 tracking-wider text-center mt-1">AUM</div>
</div>
<div className="hidden sm:block">
<div className="md:text-4xl text-3xl font-semibold text-emerald-400 tracking-tight text-center">93%</div>
<div className="uppercase text-xs text-slate-500 tracking-wider text-center mt-1">Survival Rate</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-colors">
<div className="absolute -top-3 left-8 bg-slate-950 px-2 text-xs font-medium text-red-500 uppercase tracking-wider">Step 01</div>
<h3 className="text-xl font-semibold mb-4 text-white">Seed / Pre-Seed</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        1–3억 Equity Investment
                        딥테크 · Consumer Tech · Cross-Border
                    </p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-red-500"></div>
</div>
</div>

<div className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-colors">
<div className="absolute -top-3 left-8 bg-slate-950 px-2 text-xs font-medium text-rose-300 uppercase tracking-wider">Step 02</div>
<h3 className="text-xl font-semibold mb-4 text-white">TIPS / LIPS Bridge</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        TIPS 5억/15억, LIPS 4억
                        Blended Financing 구조 설계
                    </p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-rose-400"></div>
</div>
</div>

<div className="group relative p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-red-500/50 transition-colors">
<div className="absolute -top-3 left-8 bg-slate-950 px-2 text-xs font-medium text-emerald-400 uppercase tracking-wider">Step 03</div>
<h3 className="text-xl font-semibold mb-4 text-white">Follow-on &amp; Exit</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-4">
                        Co-investment &amp; Series A+
                        Cross-Border Exit 및 M&amp;A 시나리오
                    </p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="w-full h-full bg-emerald-400"></div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 text-sm">
<div className="flex-1 p-6 bg-slate-900 rounded-xl border border-slate-800 flex gap-4 items-start">
<div className="p-2 bg-red-500/10 rounded-lg text-red-400"><svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
<div>
<span className="text-slate-400">자금만이 아니라, 벤처스튜디오와 연결된 성장 경로를 제공합니다.</span>
</div>
</div>
<div className="flex-1 p-6 bg-slate-900 rounded-xl border border-slate-800 flex gap-4 items-start">
<div className="p-2 bg-red-500/10 rounded-lg text-red-400"><svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg></div>
<div>
<span className="text-slate-400">단순 투자를 넘어, 벤처스튜디오 Co-GP 등 장기 파트너십 구조를 설계합니다.</span>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex overflow-hidden bg-center text-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/efaf7aaf-4161-4e02-b21a-9508b78fe07c_3840w.jpg)] bg-cover pt-24 pb-24 relative items-center" data-slide-index="4" id="venturestudio">

<svg className="text-white/5 transform -translate-y-1/3 opacity-50 w-[800px] h-[800px] absolute top-0 right-0 translate-x-1/3" fill="currentColor" viewbox="0 0 100 100">
<path className="" d="M50 0 C20 0 0 20 0 50 C0 80 20 100 50 100 C80 100 100 80 100 50" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="" d="M50 10 C30 10 10 30 10 50 C10 70 30 90 50 90" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">

<div className="text-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6">
<span className="text-sm font-semibold tracking-wide uppercase">The Next Model</span>
</div>
<h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Venture Studio</h2>
<p className="text-xl md:text-2xl text-red-100 font-light max-w-3xl mx-auto">
                아이디어 발굴 → 검증 → 팀 구성 → 초기 투자 → 사업화까지<br/>
<span className="font-medium text-white">창업 전 과정을 함께 수행하는 ‘공동창업자 + 투자자’ 모델</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
<div className="p-8 rounded-3xl bg-red-800/60 border border-red-500/40 backdrop-blur-sm">
<h3 className="text-lg font-semibold mb-6 text-red-100">Traditional Startup Model</h3>
<ul className="space-y-4 text-red-50">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-red-200 mt-0.5 opacity-80" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-light">창업자가 아이디어·팀·자금 모두 직접 해결</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-red-200 mt-0.5 opacity-80" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="font-light">초기 시행착오 많고, 투자자는 소액 지분</span>
</li>
</ul>
</div>
<div className="transform md:-translate-y-4 text-red-900 bg-white border-white/20 border-4 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="flex gap-2 mb-6 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-thumbs-up" data-icon-replaced="true" data-icon-set="lucide" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(220, 38, 38)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
<h3 className="text-xl font-bold tracking-tight">Venture Studio Model</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-medium">투자사가 검증 및 핵심 인력 직접 투입</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-600 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-medium">평균 20–50% 지분, 빠른 Exit 성공 확률</span>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="hover:bg-white/10 transition-colors bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<svg className="lucide lucide-circle-dollar-sign mr-auto mb-4 ml-auto" data-icon-replaced="true" data-icon-set="lucide" data-lucide="circle-dollar-sign" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(254, 202, 202)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
<h4 className="font-semibold mb-2">Capital</h4>
<p className="text-xs text-red-100 opacity-80">TIPS/LIPS &amp; 테마 펀드</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-users w-8 h-8 mx-auto mb-4 text-red-200" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h4 className="font-semibold mb-2">Talent</h4>
<p className="text-xs text-red-100 opacity-80">C-Level &amp; Operator Pool</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-building w-8 h-8 mx-auto mb-4 text-red-200" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
<h4 className="font-semibold mb-2">Infrastructure</h4>
<p className="text-xs text-red-100 opacity-80">광화문 베이스캠프 &amp; 방법론</p>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<svg className="lucide lucide-network w-8 h-8 mx-auto mb-4 text-red-200" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
<h4 className="font-semibold mb-2">Network</h4>
<p className="text-xs text-red-100 opacity-80">대기업 파트너 &amp; SEA 거점</p>
</div>
</div>
<div className="mt-16 text-center border-t border-white/10 pt-8">
<p className="text-red-100 font-light text-lg">
                K-뷰티 &amp; K-푸드 등 <span className="font-semibold text-white">브랜드형 섹터</span>를 중심으로,<br/>
                            국내외 파트너와 함께 <span className="font-semibold text-white">벤처스튜디오형 기업을 집중 제조</span>합니다.
            </p>
</div>
</div>
</section>

<section className="min-h-screen py-24 bg-slate-50 flex items-center relative overflow-hidden" data-slide-index="5" id="startupvn">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0 opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">

<div className="text-center mb-16">
<span className="text-red-600 font-semibold tracking-tight text-sm uppercase mb-2 block">Vietnam Startup &amp; Investor Intelligence Platform</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">StartupVN</h2>
<p className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed">
                    베트남 스타트업 생태계를 한눈에 파악할 수 있는<br/>
<span className="text-slate-900 font-medium">원스톱 데이터 &amp; 인사이트 허브</span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">01</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Startup / Investor Data</h3>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">베트남 혁신 생태계의 핵심 플레이어를가장 체계적으로 정리한 데이터베이스</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-database w-4 h-4 text-red-600 mt-0.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="font-medium">300개+</span> 유망 스타트업 상세 프로필
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-building w-4 h-4 text-red-600 mt-0.5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
<span className="font-medium">180개+</span> VC·AC·투자기관 정보
                        </li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">02</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Market Trends &amp; Insights</h3>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">주간·격주 단위로 제공되는시장 인사이트 기반 리포트</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-file-text w-4 h-4 text-red-600 mt-0.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            AI·핀테크·이커머스 등 핵심 성장 분야 리포트
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-zap w-4 h-4 text-red-600 mt-0.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                            격주 스냅샷: 빠르게 성장하는 생태계 요약
                        </li>
</ul>
</div>

<div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col hover:border-slate-300 transition-colors">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">03</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Ecosystem Intelligence</h3>
</div>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">베트남 시장 진출·투자·협업을 위한전략적 의사결정 지원</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-lightbulb w-4 h-4 text-red-600 mt-0.5" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
                            산업·투자 단계별 심층 인사이트 제공
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<svg className="lucide lucide-compass w-4 h-4 text-red-600 mt-0.5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                            신흥 기회영역(Emerging Opportunities) 분석
                        </li>
</ul>
</div>
</div>

<div className="border-t border-slate-200 pt-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="space-y-2">
<h4 className="font-bold text-slate-900 text-sm">One-stop Hub</h4>
<p className="text-xs text-slate-500">for Startup &amp; Investor Data</p>
</div>
<div className="space-y-2">
<h4 className="font-bold text-slate-900 text-sm">Extensive Insights</h4>
<p className="text-xs text-slate-500">across Industries &amp; Stages</p>
</div>
<div className="space-y-2">
<h4 className="font-bold text-slate-900 text-sm">Analytical Reports</h4>
<p className="text-xs text-slate-500">highlighting Emerging Opportunities</p>
</div>
<div className="space-y-2">
<h4 className="font-bold text-slate-900 text-sm">Timely Updates</h4>
<p className="text-xs text-slate-500">on Funding &amp; Ecosystem Activities</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-12 text-center text-sm border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
<div className="flex items-center gap-3 mb-2">
<img alt="The Invention Lab" className="w-auto h-24" src="https://i.ibb.co/6RQYnnhL/The-Invention-Lab-CI-org.png"/>
</div>
<p className="text-slate-500">© 2025 The Invention Lab. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
