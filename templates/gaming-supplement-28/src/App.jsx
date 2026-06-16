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
            lucide.createIcons();

            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
            });
            
            const details = document.querySelectorAll("details");
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                        }
                    });
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white" data-lucide="flask-conical" strokeWidth="1.5"></i>
<span className="text-sm font-normal tracking-tight uppercase">The Invention Lab</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#features">기능</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#process">프로세스</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#pricing">플랜</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm font-normal bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#pricing">구매하기</a>
</div>
</div>
</header>
<main>
<section className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center">
<div className="absolute inset-0 bg-grid pointer-events-none"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center reveal mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-violet-500"></span>
<span className="text-sm font-normal text-neutral-300 tracking-tight">게이머 전용 리추얼 포션 출시</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] font-normal tracking-tight text-white mb-6">
                    집중력은 올리고 <br className="hidden md:block"/> 피로감은 낮추는 승리의 리추얼
                </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                    연패의 늪에서 당신을 구해줄 단 한 번의 드링크.<br className="hidden md:block"/> 아직도 설탕 가득한 캔 음료로 버티고 있나요? 승률을 바꾸는 새로운 감각을 경험하세요.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-transform hover:scale-105" href="#pricing">
                        지금 내 전용 포션 제조하기
                    </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-base font-normal text-white transition-colors hover:bg-white/5" href="#features">
                        더 알아보기
                    </a>
</div>
</div>

<div className="relative z-10 w-full max-w-5xl mx-auto reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-fuchsia-500/30 rounded-[2rem] blur-2xl opacity-50"></div>
<div className="relative rounded-[2rem] border border-white/10 bg-neutral-900/60 p-2 md:p-4 backdrop-blur-xl shadow-2xl">
<img alt="Pulse Boost Gaming Potion Powder and Shaker" className="w-full h-auto rounded-xl md:rounded-2xl object-cover aspect-video bg-neutral-950" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d3efa40-3f5b-4e7c-a95b-991a6198ba94_3840w.png"/>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">단순한 음료가 아니다,<br/> 당신의 티어를 높여줄 승리의 포션</h2>
<p className="text-base text-neutral-400">게이머를 위해 설계된 4가지 핵심 가치</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glow-border bg-neutral-900/50 p-6 rounded-2xl reveal border border-white/5 flex flex-col h-full">
<div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6 text-white">
<i className="w-5 h-5" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-2">지속 가능한 집중력</h3>
<p className="text-base text-neutral-400 leading-relaxed mt-auto">설탕 0g으로 급격한 피로감(Crash) 없이 뇌 회전을 돕는 정교한 영양 설계</p>
</div>
<div className="glow-border bg-neutral-900/50 p-6 rounded-2xl reveal border border-white/5 flex flex-col h-full" style={{transitionDelay: '100ms'}}>
<div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6 text-white">
<i className="w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-2">크리에이터 콜라보</h3>
<p className="text-base text-neutral-400 leading-relaxed mt-auto">내가 사랑하는 스트리머가 직접 개발에 참여한 한정판 스페셜 플레이버</p>
</div>
<div className="glow-border bg-neutral-900/50 p-6 rounded-2xl reveal border border-white/5 flex flex-col h-full" style={{transitionDelay: '200ms'}}>
<div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6 text-white">
<i className="w-5 h-5" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-2">맞춤형 리추얼</h3>
<p className="text-base text-neutral-400 leading-relaxed mt-auto">매 시즌 바뀌는 전용 쉐이커로 완성하는 '게임 준비 완료'의 감각</p>
</div>
<div className="glow-border bg-neutral-900/50 p-6 rounded-2xl reveal border border-white/5 flex flex-col h-full" style={{transitionDelay: '300ms'}}>
<div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6 text-white">
<i className="w-5 h-5" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal tracking-tight text-white mb-2">압도적인 경제성</h3>
<p className="text-base text-neutral-400 leading-relaxed mt-auto">매일 마시는 캔 음료의 1/3 가격으로 즐기는 고효율 파우더 타입</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="lg:w-1/3 lg:sticky lg:top-32 h-fit reveal">
<span className="text-sm font-normal text-violet-400 tracking-widest uppercase mb-4 block">Problem</span>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white leading-[1.2]">왜 당신의 집중력은<br/> 판이 거듭될수록<br/> 떨어질까요?</h2>
</div>
<div className="lg:w-2/3 flex flex-col gap-8">
<div className="group relative pl-8 border-l border-white/10 hover:border-white/40 transition-colors reveal">
<div className="absolute w-2 h-2 bg-neutral-800 group-hover:bg-white rounded-full -left-[4.5px] top-2 transition-colors"></div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">집중력이 필요한 랭커</h3>
<p className="text-base text-neutral-400 leading-relaxed">게임 중반부만 되면 눈이 침침하고 반응 속도가 느려지는 분들을 위한 에임 회복 솔루션.</p>
</div>
<div className="group relative pl-8 border-l border-white/10 hover:border-white/40 transition-colors reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute w-2 h-2 bg-neutral-800 group-hover:bg-white rounded-full -left-[4.5px] top-2 transition-colors"></div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">건강을 생각하는 게이머</h3>
<p className="text-base text-neutral-400 leading-relaxed">고카페인과 고당류 음료 섭취 후 예외 없이 찾아오는 무기력증(Sugar Crash)이 두려운 분.</p>
</div>
<div className="group relative pl-8 border-l border-white/10 hover:border-white/40 transition-colors reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute w-2 h-2 bg-neutral-800 group-hover:bg-white rounded-full -left-[4.5px] top-2 transition-colors"></div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">팬심 가득한 시청자</h3>
<p className="text-base text-neutral-400 leading-relaxed">스트리머와 같은 맛을 공유하며 커뮤니티의 소속감을 깊게 느끼고 싶은 분.</p>
</div>
<div className="group relative pl-8 border-l border-white/10 hover:border-white/40 transition-colors reveal" style={{transitionDelay: '300ms'}}>
<div className="absolute w-2 h-2 bg-neutral-800 group-hover:bg-white rounded-full -left-[4.5px] top-2 transition-colors"></div>
<h3 className="text-xl font-normal tracking-tight text-white mb-2">합리적인 소비를 원하는 분</h3>
<p className="text-base text-neutral-400 leading-relaxed">매일 마시는 에너지 드링크 비용과 끊임없이 나오는 분리수거 쓰레기가 부담스러운 분.</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-sm font-normal text-violet-400 tracking-widest uppercase mb-4 block">Process</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white">단 30초, 승리를 위한 준비는 끝났습니다</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-white/10"></div>
<div className="relative flex flex-col items-center text-center reveal">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 glow-border">
<i className="w-8 h-8" data-lucide="beaker" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">1. 쉐이커 준비</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[12rem]">소장 가치 높은 전용 디자인 쉐이커에 물 또는 얼음을 채웁니다.</p>
</div>
<div className="relative flex flex-col items-center text-center reveal" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 glow-border">
<i className="w-8 h-8" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">2. 포션 투하</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[12rem]">취향에 맞는 스트리머 콜라보 파우더 한 스쿱을 넣습니다.</p>
</div>
<div className="relative flex flex-col items-center text-center reveal" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 glow-border">
<i className="w-8 h-8" data-lucide="refresh-cw" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">3. 쉐이킹</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[12rem]">가볍게 흔들어 파우더를 녹이면 승리의 포션이 완성됩니다.</p>
</div>
<div className="relative flex flex-col items-center text-center reveal" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white mb-6 relative z-10 glow-border">
<i className="w-8 h-8" data-lucide="gamepad-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-normal text-white mb-2 tracking-tight">4. 플레이</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-[12rem]">카페인 크래시 걱정 없이 선명해진 몰입감을 경험하며 승리하세요.</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950 overflow-hidden">
<div className="max-w-7xl mx-auto space-y-32">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2 aspect-square rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<i className="w-32 h-32 text-neutral-800 group-hover:text-white/20 transition-colors duration-700" data-lucide="target" strokeWidth="1"></i>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-neutral-900 mb-6">
<span className="text-sm font-normal text-neutral-300">Performance</span>
</div>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-6 leading-tight">끝까지 유지되는<br/> 선명한 몰입감</h2>
<p className="text-base text-neutral-400 leading-relaxed">
                            기존 에너지 드링크의 일시적인 각성 효과와는 다릅니다. 설탕을 완전히 빼고 비타민과 누트로픽 성분을 더해, 게임이 끝날 때까지 뇌가 지치지 않고 최상의 컨디션을 유지하도록 돕습니다.
                        </p>
</div>
</div>
<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2 aspect-square rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-bl from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<i className="w-32 h-32 text-neutral-800 group-hover:text-white/20 transition-colors duration-700" data-lucide="users" strokeWidth="1"></i>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-neutral-900 mb-6">
<span className="text-sm font-normal text-neutral-300">Community</span>
</div>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-6 leading-tight">스트리머와 함께 마시는<br/> '우리만의 맛'</h2>
<p className="text-base text-neutral-400 leading-relaxed">
                            단순히 이름만 빌린 제품이 아닙니다. 스트리머가 직접 맛 테이스팅에 참여하여 완성한 독창적인 플레이버를 즐겨보세요. 전용 굿즈와 함께라면 단순한 음료를 넘어 팬덤의 일원이 되는 경험을 제공합니다.
                        </p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal">
<div className="w-full md:w-1/2 aspect-square rounded-3xl bg-neutral-900 border border-white/5 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<i className="w-32 h-32 text-neutral-800 group-hover:text-white/20 transition-colors duration-700" data-lucide="trending-up" strokeWidth="1"></i>
</div>
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-neutral-900 mb-6">
<span className="text-sm font-normal text-neutral-300">Efficiency</span>
</div>
<h2 className="text-3xl lg:text-4xl font-normal tracking-tight text-white mb-6 leading-tight">캔 음료 1/3 가격으로 즐기는<br/> 압도적 효율</h2>
<p className="text-base text-neutral-400 leading-relaxed">
                            매번 편의점에 갈 필요 없습니다. 1회 섭취 비용 1달러($1) 미만의 경제적인 40회분 대용량 통으로 한 달 내내 넉넉하게 즐기세요. 불필요한 캔 쓰레기도 줄어들어 환경까지 생각할 수 있습니다.
                        </p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">당신의 게이밍 환경에 맞는<br/> 플랜을 선택하세요</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="bg-neutral-900/30 border border-white/10 rounded-3xl p-8 flex flex-col reveal">
<h3 className="text-lg font-normal tracking-tight text-white mb-2">싱글 팩</h3>
<p className="text-sm text-neutral-400 mb-6">원하는 맛 하나만 깔끔하게.</p>
<div className="mb-8">
<span className="text-3xl font-normal tracking-tight text-white">$35.99</span>
</div>
<ul className="space-y-4 text-base text-neutral-300 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                                40회분 파우더 1통
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                                스쿱 포함
                            </li>
</ul>
<button className="w-full h-10 rounded-full border border-white/20 bg-transparent text-sm font-normal text-white hover:bg-white/5 transition-colors">선택하기</button>
</div>
<div className="relative bg-neutral-900 border border-neutral-700 rounded-3xl p-8 flex flex-col reveal accent-glow lg:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-medium tracking-widest uppercase rounded-full">
                            Best Choice
                        </div>
<h3 className="text-lg font-normal tracking-tight text-white mb-2">스타터 키트</h3>
<p className="text-sm text-neutral-400 mb-6">첫 구매 시 가장 추천하는 완벽한 세트.</p>
<div className="mb-8">
<span className="text-3xl font-normal tracking-tight text-white">$39.99</span>
</div>
<ul className="space-y-4 text-base text-neutral-300 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                                40회분 파우더 1통
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
<span className="text-white font-normal">전용 쉐이커 포함</span>
</li>
</ul>
<button className="w-full h-10 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">시작하기</button>
</div>
<div className="bg-neutral-900/30 border border-white/10 rounded-3xl p-8 flex flex-col reveal">
<h3 className="text-lg font-normal tracking-tight text-white mb-2">듀오 번들</h3>
<p className="text-sm text-neutral-400 mb-6">두 가지 맛을 번갈아 즐기고 싶다면.</p>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-3xl font-normal tracking-tight text-white">$65.00</span>
<span className="text-sm text-violet-400 font-normal">10% Save</span>
</div>
<ul className="space-y-4 text-base text-neutral-300 mb-8 flex-1">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                                콜라보 맛 선택 2통
                            </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-white" data-lucide="circle-check" strokeWidth="1.5"></i>
                                한정판 굿즈 포함
                            </li>
</ul>
<button className="w-full h-10 rounded-full border border-white/20 bg-transparent text-sm font-normal text-white hover:bg-white/5 transition-colors">선택하기</button>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">이 포션과 함께라면<br/> 달라질 게이밍 라이프</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-900 border border-white/5 p-8 rounded-2xl reveal">
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="message-square" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 leading-relaxed font-normal tracking-tight">"밤샘 게임 후에도 머리가 멍하지 않고 개운한 아침을 맞이할 수 있습니다."</p>
</div>
<div className="bg-neutral-900 border border-white/5 p-8 rounded-2xl reveal" style={{transitionDelay: '100ms'}}>
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="message-square" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 leading-relaxed font-normal tracking-tight">"중요한 교전 순간, 평소보다 한 발 빠른 반응 속도를 체감할 것입니다."</p>
</div>
<div className="bg-neutral-900 border border-white/5 p-8 rounded-2xl reveal" style={{transitionDelay: '200ms'}}>
<i className="w-6 h-6 text-neutral-600 mb-6" data-lucide="message-square" strokeWidth="1.5"></i>
<p className="text-base text-neutral-300 leading-relaxed font-normal tracking-tight">"책상 위에 놓인 전용 쉐이커가 당신의 게이밍 셋업을 완벽하게 완성해 줍니다."</p>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 relative border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-3xl font-normal tracking-tight text-white">승리를 위해 궁금한 점들</h2>
</div>
<div className="space-y-4">
<details className="group bg-neutral-900/50 border border-white/10 rounded-2xl reveal overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-normal text-white tracking-tight">
<span className="text-base">기존 에너지 드링크와 무엇이 다른가요?</span>
<span className="transition group-open:rotate-45 text-neutral-400">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 leading-relaxed">
                            설탕이 들어있지 않아 '슈가 크래시(급격한 무기력증)'가 없으며, 게이머에게 최적화된 비타민과 영양 설계로 지속적인 집중력을 제공합니다.
                        </div>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-2xl reveal overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-normal text-white tracking-tight">
<span className="text-base">한 통으로 얼마나 마실 수 있나요?</span>
<span className="transition group-open:rotate-45 text-neutral-400">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 leading-relaxed">
                            약 40회 분량으로 구성되어 있어, 매일 한 잔씩 마셔도 한 달 넘게 넉넉하게 이용 가능합니다.
                        </div>
</details>
<details className="group bg-neutral-900/50 border border-white/10 rounded-2xl reveal overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 font-normal text-white tracking-tight">
<span className="text-base">카페인 함량이 너무 높지는 않나요?</span>
<span className="transition group-open:rotate-45 text-neutral-400">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 text-base text-neutral-400 leading-relaxed">
                            적정량의 카페인과 함께 뇌 기능을 돕는 성분들이 정밀하게 배합되어 있어 과도한 떨림 없이 차분한 몰입감을 줍니다.
                        </div>
</details>
</div>
</div>
</section>
<section className="py-32 px-6 relative border-t border-white/5 bg-neutral-950 flex flex-col items-center text-center">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-6 leading-relaxed">
                    "우리는 게이머의 승리가 단순히 운이 아닌,<br/> 준비된 실력에서 나온다고 믿습니다."
                </h2>
<p className="text-base text-neutral-400 leading-relaxed mb-10">
                    팀 더인벤션랩은 단순한 음료 회사가 아닙니다. 게임에 몰입하는 그 순간의 가치를 이해하고, 최고의 퍼포먼스를 낼 수 있는 환경을 만드는 조력자가 되고자 합니다. 더 이상 설탕 찌꺼기에 의존하지 마세요. 이제 당신의 실력을 온전히 증명할 시간입니다.
                </p>
<a className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-base font-medium text-black transition-transform hover:scale-105" href="#pricing">
                    포션 제조하러 가기
                </a>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#0a0a0a] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-base font-normal tracking-tight text-white uppercase">The Invention Lab</span>
<p className="text-sm text-neutral-500">서울특별시 강남구 테헤란로 (예시)</p>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="mailto:contact@amaranth-agriculture-landing-page-template">contact@amaranth-agriculture-landing-page-template</a>
</div>
</div>
</footer>


    </>
  );
}
