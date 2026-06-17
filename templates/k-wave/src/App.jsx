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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Initialize Lucide Icons
        lucide.createIcons();

        // Formspree API Integration
        async function submitProjectForm(e) {
            e.preventDefault();
            const form = e.target;
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            
            // 1. 제출 상태 UI 변경
            btn.textContent = '전송 중...';
            btn.disabled = true;
            status.classList.add('hidden');
            status.classList.remove('text-blue-900', 'text-red-600');

            // 2. 폼 데이터 가져오기
            const formData = new FormData(form);
            
            try {
                // 3. Formspree로 데이터 전송
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // 성공 처리
                    btn.textContent = '🌊 Send the Wave';
                    btn.disabled = false;
                    status.classList.remove('hidden');
                    status.classList.add('text-blue-900');
                    status.innerHTML = '귀하의 메시지가 성공적으로 전달되었습니다.<br>곧 연락드리겠습니다.';
                    form.reset();
                } else {
                    // 서버 오류 또는 검증 실패
                    const data = await response.json();
                    throw new Error(data.error || '전송에 실패했습니다.');
                }
            } catch (error) {
                // 에러 처리
                console.error(error);
                btn.textContent = '🌊 Send the Wave';
                btn.disabled = false;
                status.classList.remove('hidden');
                status.classList.add('text-red-600');
                status.innerHTML = '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none" style={{filter: 'invert(1) opacity(0.6) saturate(1.2)'}}>
<div className="absolute w-full h-full left-0 top-0" data-us-project="0WrRbFIPaKoWVkiQWBG0"></div>
</div>


<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<a aria-label="K WAVE Home" className="flex items-center" href="#">
<img alt="K WAVE 로고" className="h-12 sm:h-16 w-auto object-contain mix-blend-multiply" src="https://raw.githubusercontent.com/lovebased/kwavelogo-image/main/K%20Wave%20logo.png"/>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#market">ABOUT</a>
<a className="hover:text-neutral-900 transition-colors" href="#process">VISION &amp; BUSINESS</a>
<a className="hover:text-neutral-900 transition-colors" href="#services">NEWS &amp; INSIGHTS</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">CONTACT</a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-blue-400 hover:to-blue-500 transition-all duration-300" href="#contact">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="hidden sm:inline text-sm font-normal text-blue-900 group-hover:text-blue-800 transition-colors">Ready to Ride?</span>
<span className="sm:hidden text-sm font-normal text-blue-900 group-hover:text-blue-800 transition-colors">Ready to Ride?</span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-40 sm:pb-24 sm:px-6 max-w-6xl z-10 mr-auto ml-auto pt-32 pr-4 pb-12 pl-4 relative">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>

<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-normal text-neutral-700 tracking-tight">Ready to Ride<br/>the Korean Wave?</h1>
<p className="md:text-lg leading-relaxed animate-in animate-in-delay-2 text-base font-light text-neutral-500 max-w-xl">
                From Seoul to Europe, From IP to Experience<br/>
                We Bridge K-pop IP to Global Fans<br/><br/>
                K-POP 브랜드 IP와 글로벌 팬덤을 연결하는 전략적 파트너,<br/>한국의 문화적 가치를 ‘경험’으로 연결합니다.
            </p>
<div className="flex flex-col sm:flex-row mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">
<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="#contact">
                        Come Ride the K WAVE~
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

<div className="relative z-30 mt-8 sm:mt-16 grid grid-cols-2 md:grid-cols-4 border-y border-neutral-200 animate-in animate-in-delay-3 bg-white/60 backdrop-blur-sm">
<div className="p-4 sm:p-8 border-r border-neutral-200 text-center flex flex-col justify-center">
<div className="sm:text-2xl md:text-3xl text-xl font-normal text-neutral-500 tracking-tight mb-1">K-POP IP</div>
<div className="text-xs sm:text-xs uppercase text-neutral-400 tracking-widest font-mono">글로벌 라이선스</div>
</div>
<div className="p-4 sm:p-8 md:border-r border-neutral-200 text-center flex flex-col justify-center">
<div className="sm:text-2xl md:text-3xl text-xl font-normal text-neutral-500 tracking-tight mb-1">MD Sourcing</div>
<div className="text-xs sm:text-xs uppercase text-neutral-400 tracking-widest font-mono">고품질 굿즈 제작</div>
</div>
<div className="p-4 sm:p-8 border-r border-t md:border-t-0 border-neutral-200 text-center flex flex-col justify-center overflow-hidden">
<div className="sm:text-2xl md:text-xl lg:text-3xl text-[1.1rem] whitespace-nowrap font-normal text-neutral-500 tracking-tight mb-1">Supply Network</div>
<div className="text-[0.65rem] sm:text-xs uppercase text-neutral-400 tracking-widest font-mono">전 세계 유통망</div>
</div>
<div className="p-4 sm:p-8 text-center border-t md:border-t-0 border-neutral-200 flex flex-col justify-center">
<div className="sm:text-2xl md:text-3xl text-xl font-normal text-neutral-500 tracking-tight mb-1">Event-Linked</div>
<div className="text-xs sm:text-xs uppercase text-neutral-400 tracking-widest font-mono">팬덤 경험 극대화</div>
</div>
</div>
</main>

<section className="py-4 border-b border-neutral-200 bg-white relative overflow-hidden pause-on-hover">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
<div className="flex animate-scroll hover:pause">

<div className="flex items-center gap-8 px-4 min-w-max">
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
</div>

<div className="flex items-center gap-8 px-4 min-w-max">
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-base font-normal tracking-tight text-neutral-400" style={{wordSpacing: '0.3em'}}>Beyond Entertainment, Global Cultural Language, K WAVE. We translate creative K-POP IP into globally scalable physical experiences connecting Korea to the world.</span>
<i className="w-3.5 h-3.5 text-neutral-300" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="scroll-mt-24 py-16 sm:py-24 border-b border-neutral-200 bg-white relative z-10" id="market">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<h2 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-blue-900 rounded-full"></span>
                Who We Are
            </h2>
<h3 className="sm:text-3xl md:text-4xl mb-4 sm:mb-6 text-2xl font-normal text-neutral-900 tracking-tight">Bridging K-Culture to the World</h3>
<p className="text-base sm:text-lg font-light text-neutral-500 leading-relaxed max-w-2xl">
                K WAVE는 한국에서 시작된 K-POP IP가<br className="hidden sm:inline"/>
                유럽과 아시아의 오프라인 문화 허브로 자연스럽게 연결되도록 전략을 설계합니다.<br/><br/>
                우리는 단순한 물류가 아닌, 한류의 맥박을 전달합니다.
            </p>

<div className="mt-12 sm:mt-16 relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">
<div className="bg-neutral-50 p-6 sm:p-10 rounded-[1px] relative overflow-hidden flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
<div className="flex-shrink-0">
<div className="w-12 h-12 sm:w-16 sm:h-16 rounded-sm flex items-center justify-center shadow-sm mb-2 sm:mb-0 overflow-hidden bg-white">
<img alt="놀이터Playground 로고" className="w-full h-full object-contain p-1" src="https://raw.githubusercontent.com/lovebased/playgroundlogo-image/main/playground%20logo.png"/>
</div>
</div>
<div className="flex-1">
<h4 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-2 flex items-center gap-2">
                            Strategic Partnership
                        </h4>
<h5 className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight mb-3">
                            K WAVE <span className="text-neutral-300 font-light mx-1">x</span> 놀이터Playground
                        </h5>
<h6 className="text-base font-normal text-neutral-700 mb-3">
                            런던의 K-Culture Experience Hub, 놀이터Playground와의 파트너십
                        </h6>
<p className="text-sm sm:text-base font-light text-neutral-500 leading-relaxed">
                            K WAVE는 런던 중심 Piccadilly에서 운영중인 K-POP, K-Beauty, F&amp;B, 엔터테인먼트가 결합된 유럽 대표 K-Culture Experience Hub, 놀이터Playground와의 독점적인 파트너십을 통해 유럽 시장 내 K-POP 상품을 소싱하고, 놀이터의 글로벌 네트워크에 안정적으로 공급하는 핵심 유통 인프라를 전담합니다.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-b border-neutral-200 bg-neutral-50 relative z-10">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10">
<h2 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-4 flex items-center justify-center gap-2">
<span className="w-1 h-1 bg-blue-900 rounded-full"></span>
                    FOUNDER / CEO
                </h2>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-900 tracking-tight leading-tight max-w-3xl mx-auto">
                    런던 기반 K-Culture 복합 허브 생태계를 구축한 <br className="hidden sm:block"/>
<span className="font-medium text-neutral-900">JS Holdings Ltd.</span> 대표,<br/>김종순
                </h3>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm mt-12">
<div className="bg-white rounded-[1px] flex flex-col md:flex-row">

<div className="w-full md:w-1/2 p-8 sm:p-10 border-b md:border-b-0 md:border-r border-neutral-100 bg-white">
<h4 className="text-xs font-mono uppercase text-blue-900 mb-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                            Founder Message
                        </h4>
<div className="space-y-5 text-base font-light text-neutral-600 leading-relaxed">
<p>
                                지난 20년간 런던에서 한국 문화를 다양한 공간으로 구현하며<br className="hidden sm:block"/> 
                                저는 한 가지를 확신하게 되었습니다.
                            </p>
<p>
                                K-Culture는 일시적으로 유행하는 콘텐츠가 아니라<br className="hidden sm:block"/> 
                                전세계가 함께 공유하는 문화적 언어입니다.
                            </p>
<p>
                                K WAVE는 그 경험이<br className="hidden sm:block"/> 
                                더 멀리, 더 안정적으로 확장될 수 있도록<br className="hidden sm:block"/> 
                                한국에서의 소싱, 유럽 내 리테일과 이벤트, 그리고 글로벌 확장 네트워크까지<br className="hidden sm:block"/> 
                                그 공급과 전략을 설계합니다.
                            </p>
<p>
                                이 파도는 이미 시작되었습니다.<br className="hidden sm:block"/> 
                                이제 함께 올라타실 차례입니다.
                            </p>
<div className="pt-4">
<p className="text-xl sm:text-2xl font-medium tracking-tight text-blue-900 mb-2">Ready to ride?</p>
<p className="text-neutral-900 font-normal">- 김종순 드림</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 p-8 sm:p-10 bg-neutral-50/50 flex flex-col justify-center">
<h4 className="text-xs font-mono uppercase text-neutral-500 mb-6 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="contact" strokeWidth="1.5"></i>
                            Profile
                        </h4>
<ul className="space-y-3 sm:space-y-4 text-sm font-light text-neutral-600 leading-relaxed">
<li className="flex items-start gap-3">
<span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
<span>2016년부터 런던에서 K-외식·라이프스타일 브랜드 확장 및 유럽 내 K-Pop 유통 전략</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
<span>UK &amp; EU 46+개 매장 운영 네트워크 및 글로벌 브랜드 확장 경험 보유</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
<span>연 매출 £50M+ / 고용 400명+</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
<span>놀이터Playground 내 유럽 최초 K-POP 포토카드 전문 허브 런칭</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1 h-1 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></span>
<span>다수 언론 보도 및 수상 이력 (2024 국무총리표창, 2025 문화체육부 장관상 등)</span>
</li>
</ul>

<div className="mt-10 pt-6 border-t border-neutral-200/60 flex items-center gap-4 sm:gap-5">
<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-neutral-200 bg-white shadow-sm flex-shrink-0">
<img alt="김종순 대표" className="w-full h-full object-cover" src="https://raw.githubusercontent.com/lovebased/kwavejoekim-image/main/joe.png"/>
</div>
<div className="flex flex-col">
<span className="text-lg sm:text-xl font-normal text-neutral-900 tracking-tight">김종순</span>
<span className="text-xs font-mono uppercase text-neutral-500 tracking-widest mt-0.5">Founder / CEO</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 sm:py-24 bg-white z-10 pt-16 pb-16 relative border-b border-neutral-200" id="process">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="mb-12 sm:mb-16 border-b border-neutral-200 pb-12 sm:pb-16">
<h2 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-8 flex items-center gap-2">
<span className="w-1 h-1 bg-blue-900 rounded-full"></span>
                    VISION &amp; BUSINESS
                </h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

<div className="lg:col-span-5">
<h3 className="text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-8">Beyond Entertainment</h3>
<div className="space-y-8">
<p className="text-lg sm:text-xl text-neutral-900 font-normal leading-relaxed tracking-tight">
                                Korean Wave is not a moment — It is Now a Movement<br/>
                                We Ride the Wave<br/>
                                We Bridge IP to Global Fans
                            </p>
<div className="space-y-4 text-base sm:text-lg font-light text-neutral-500 leading-relaxed">
<p>
                                    한류는 단지 트랜드가 아닙니다.<br/>
                                    하나의 거대한 문화적 흐름입니다.
                                </p>
<p>
                                    우리는 전 세계 팬들이<br/>
                                    단순한 팬덤 기반의 소비자가 아닌<br/>
                                    문화적 경험의 참여자가 되는 구조를 만듭니다.
                                </p>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col justify-end">
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm mt-8 lg:mt-0">
<div className="bg-neutral-50 rounded-[1px] p-4 sm:p-6 md:p-8 overflow-hidden">
<div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-6 w-full overflow-x-auto hide-scrollbar pb-2 -mb-2" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<span className="flex-shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-neutral-200 rounded-sm text-[10px] sm:text-xs font-mono text-neutral-700 tracking-wide">IP</span>
<i className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="flex-shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-neutral-200 rounded-sm text-[10px] sm:text-xs font-mono text-neutral-700 tracking-wide">상품</span>
<i className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="flex-shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-neutral-200 rounded-sm text-[10px] sm:text-xs font-mono text-neutral-700 tracking-wide">공간</span>
<i className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="flex-shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-neutral-200 rounded-sm text-[10px] sm:text-xs font-mono text-neutral-700 tracking-wide">이벤트</span>
<i className="flex-shrink-0 w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
<span className="flex-shrink-0 whitespace-nowrap px-2 sm:px-3 py-1 sm:py-1.5 border rounded-sm text-[10px] sm:text-xs font-mono text-blue-900 font-medium bg-blue-50/50 border-blue-200 tracking-wide">커뮤니티</span>
</div>
<p className="text-sm sm:text-base font-light text-neutral-600 leading-relaxed mt-4">
                                    이 seamless 글로벌 연결고리가 강화 및 지속될 때<br/>한류는 산업이 됩니다.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 sm:mt-24">
<h3 className="text-xl sm:text-2xl font-normal text-neutral-900 tracking-tight mb-6">What We Do_Our Core Services</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">

<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300 flex flex-col h-full">
<div className="sm:mb-6 inline-block text-sm text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">01 / STRATEGY</div>
<h4 className="sm:text-lg text-base font-normal text-neutral-900 tracking-tight mb-5">IP Sourcing &amp; Strategy</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 mb-8 flex-grow">
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<div>
<span className="block text-neutral-700">K-POP MD 기획 및 소싱</span>
<span className="block text-xs mt-1 text-neutral-400">- 앨범 / 포토카드 / 응원봉 / Official Goods / Limited Event MD</span>
</div>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">한국 제조 네트워크 관리</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">국가별 맞춤 전략 설계</span>
</li>
</ul>
<div className="pt-5 border-t border-neutral-100 mt-auto">
<p className="text-xs font-mono text-blue-900 leading-relaxed italic">"We translate creative IP into globally scalable physical experiences."</p>
</div>
</div>

<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300 flex flex-col h-full">
<div className="sm:mb-6 inline-block text-sm text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">02 / NETWORK</div>
<h4 className="sm:text-lg text-base font-normal text-neutral-900 tracking-tight mb-5">Global Supply Network</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 mb-8 flex-grow">
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">수출·통관 관리</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">유럽 및 아시아 공급망 운영</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">안정적 물류 시스템 구축</span>
</li>
</ul>
<div className="pt-5 border-t border-neutral-100 mt-auto">
<p className="text-xs font-mono text-blue-900 leading-relaxed italic">"A seamless supply chain connecting Korea to the world."</p>
</div>
</div>

<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300 flex flex-col h-full">
<div className="sm:mb-6 inline-block text-sm text-neutral-500 font-mono bg-neutral-50 border-neutral-200 border rounded-sm mb-4 pt-1 pr-2 pb-1 pl-2">03 / EXPERIENCE</div>
<h4 className="sm:text-lg text-base font-normal text-neutral-900 tracking-tight mb-5">Event-Linked Experience</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 mb-8 flex-grow">
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">글로벌 Concert/Festival 연계 MD 전략</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">Fanbase Event 협업</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">팝업/쇼케이스 및 현지 이벤트 기획</span>
</li>
<li className="flex items-start gap-2.5">
<span className="w-1 h-1 bg-neutral-400 rounded-full mt-1.5 flex-shrink-0"></span>
<span className="text-neutral-700">리테일·공간 연계 소비 설계</span>
</li>
</ul>
<div className="pt-5 border-t border-neutral-100 mt-auto">
<p className="text-xs font-mono text-blue-900 leading-relaxed italic">"We elevate the K-Pop ecosystem across Europe through strategic event integration."</p>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<div className="bg-blue-50/50 border border-blue-100/50 px-6 py-4 rounded-sm w-full md:w-auto">
<p className="text-sm sm:text-base font-normal text-blue-900 tracking-tight text-center">
                            Not just distributing products — but shaping the European K-Pop experience industry.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 py-16 sm:py-24 bg-white relative z-10" id="services">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="text-center">
<h2 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-4">NEWS &amp; INSIGHTS</h2>
<h3 className="text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight">The Wave in Motion</h3>
</div>

<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-10 w-full">

<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm w-full sm:w-auto">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="https://magazine.hankyung.com/business/article/202509179222b" rel="noopener noreferrer" target="_blank">
                        [2025 한국경제 최고의 리더 상]
                    </a>
</div>

<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm w-full sm:w-auto">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="http://koweekly.co.uk/news.php?code=foto&amp;mode=view&amp;num=10868" rel="noopener noreferrer" target="_blank">
                        [2024 세계한인의 날 국무총리표창]
                    </a>
</div>

<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm w-full sm:w-auto">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="https://www.youtube.com/watch?v=ODGiUQhs_zM" rel="noopener noreferrer" target="_blank">
                        [Youtube_세계속의 한국인]
                    </a>
</div>

<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm w-full sm:w-auto">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="https://raw.githubusercontent.com/lovebased/JSholdings-profile/main/JS%20Holdings%202026.pdf" rel="noopener noreferrer" target="_blank">
                        [JS Holdings Ltd Profile]
                    </a>
</div>

<div className="p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm w-full sm:w-auto">
<a className="block hover:bg-neutral-600 transition-colors text-sm font-medium text-white tracking-wide text-center bg-neutral-500 w-full h-full rounded-full pt-3.5 pr-6 pb-3.5 pl-6" href="https://raw.githubusercontent.com/lovebased/playgroundprofile/main/K-playground%20Deck.pdf" rel="noopener noreferrer" target="_blank">
                        [놀이터Playground Profile]
                    </a>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 py-16 sm:py-24 border-t border-neutral-200 bg-white relative z-10" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="text-center mb-8 sm:mb-12">
<h2 className="text-xs font-mono text-blue-900 uppercase tracking-widest mb-4">CONTACT</h2>
<h3 className="text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight">
                    Ready to Ride?
                </h3>
</div>
<div className="relative p-[1px] rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm">

<form action="https://formspree.io/f/mpqjbekp" className="space-y-4 sm:space-y-6 bg-neutral-50 p-6 sm:p-8 rounded-[1px]" id="projectForm" method="POST" onsubmit="submitProjectForm(event)">
<input name="_subject" type="hidden" value="[K WAVE] 새로운 문의가 접수되었습니다."/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div>
<label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Name / Company</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-base" name="name_company" placeholder="홍길동 / K WAVE" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Email</label>
<input className="w-full input-base px-3 py-3 rounded-sm text-base" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-mono uppercase text-neutral-500 mb-1.5">Message</label>
<textarea className="w-full input-base px-3 py-3 rounded-sm text-base" name="message" placeholder="메시지를 입력해주세요." required="" rows="5"></textarea>
</div>

<div className="mt-6 flex justify-start">
<div className="inline-block p-[1px] rounded-full bg-gradient-to-b from-neutral-400 to-neutral-600 shadow-sm">
<button className="px-8 py-2.5 bg-neutral-500 text-white text-sm font-medium tracking-wide hover:bg-neutral-600 transition-colors rounded-full flex items-center justify-center gap-2" id="submitBtn" type="submit">
                                🌊 Send the Wave
                            </button>
</div>
</div>
<div className="hidden text-center text-sm mt-4 leading-relaxed font-medium" id="formStatus"></div>
</form>
</div>
</div>
</section>

<footer className="bg-white py-12 sm:py-16 border-t border-neutral-200 relative z-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

<div className="md:col-span-12 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 pb-8 sm:pb-12 border-b border-neutral-100 mb-2">
<img alt="K WAVE 로고" className="h-40 sm:h-56 md:h-64 w-auto block object-contain mix-blend-multiply" src="https://raw.githubusercontent.com/lovebased/kwavelogo-image/main/K%20Wave%20logo.png"/>
<div className="hidden sm:block w-px h-16 bg-neutral-200"></div>
<div className="flex flex-col">
<span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-400 tracking-widest block mb-3">Strategic Partner</span>
<div className="flex items-center gap-3">
<div className="w-12 h-12 sm:w-14 sm:h-14 border border-neutral-100 rounded-sm flex items-center justify-center shadow-sm overflow-hidden bg-white">
<img alt="놀이터Playground 로고" className="w-full h-full object-contain p-1" src="https://raw.githubusercontent.com/lovebased/playgroundlogo-image/main/playground%20logo.png"/>
</div>
<span className="text-base sm:text-lg font-normal text-neutral-700">놀이터Playground</span>
</div>
</div>
</div>

<div className="md:col-span-4 mt-2 sm:mt-0">
<h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 leading-relaxed">
<li><span className="text-neutral-900 font-normal">K WAVE_주식회사 케이웨이브</span></li>
<li>경기도 성남시 분당구 판교역로<br/>192번길 14-2 912호</li>
</ul>
</div>

<div className="md:col-span-5 mt-2 sm:mt-0">
<h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 leading-relaxed">
<li>
<a className="hover:text-blue-900 transition-colors flex items-center gap-2" href="tel:+820317031333">
<iconify-icon height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                +82(0)31-703-1333
                            </a>
</li>
<li>
<a className="hover:text-blue-900 transition-colors flex items-center gap-2" href="https://www.korean-wave.co.kr" target="_blank">
<iconify-icon height="16" icon="solar:global-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                www.korean-wave.co.kr
                            </a>
</li>
<li>
<a className="hover:text-blue-900 transition-colors flex items-center gap-2" href="mailto:jinny.kim@korean-wave.co.kr">
<iconify-icon height="16" icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                jinny.kim@korean-wave.co.kr
                            </a>
</li>
</ul>
</div>

<div className="md:col-span-3 mt-2 sm:mt-0">
<h4 className="text-xs font-mono uppercase text-neutral-400 tracking-widest mb-6">Instagram</h4>
<ul className="space-y-3 text-sm font-light text-neutral-500 leading-relaxed">
<li>

<a className="hover:text-blue-900 transition-colors flex items-start gap-2" href="https://www.instagram.com/jsholdingsgroup?igsh=Ymxub2djdGZ6YXAy" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mt-0.5 flex-shrink-0" height="16" icon="solar:camera-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>JS Holdings Ltd</span>
</a>
</li>
<li>

<a className="hover:text-blue-900 transition-colors flex items-start gap-2" href="https://www.instagram.com/kplayground.ldn?igsh=MWc4dnh4dDJpNTNqZg==" rel="noopener noreferrer" target="_blank">
<iconify-icon className="mt-0.5 flex-shrink-0" height="16" icon="solar:camera-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>놀이터Playground</span>
</a>
</li>
</ul>
</div>
</div>

<div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-400 font-mono tracking-widest uppercase">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-neutral-900 rounded-sm"></div>
<span>© 2026 K WAVE. All rights reserved.</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
