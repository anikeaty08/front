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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.add('py-4');
                navbar.classList.remove('py-3');
            }
        });

        // FAQ Toggle Function
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const isOpen = content.classList.contains('open');
            
            // Close all others
            document.querySelectorAll('.faq-content').forEach(el => {
                el.classList.remove('open');
            });

            // Toggle current
            if (!isOpen) {
                content.classList.add('open');
            }
        }

        // GSAP Scroll Animations
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Reveal elements on scroll
            gsap.utils.toArray('.gs-reveal').forEach(function(elem) {
                gsap.fromTo(elem, 
                    { y: 40, opacity: 0 }, 
                    {
                        y: 0, 
                        opacity: 1, 
                        duration: 1, 
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: elem,
                            start: "top 85%", // Reveal when top of element hits 85% of viewport height
                            toggleActions: "play none none none"
                        }
                    }
                );
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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100" id="navbar">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="text-xl tracking-tight font-semibold text-green-800 flex items-center gap-2" href="#">
<iconify-icon className="" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
                JARANAM CLUB
            </a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-green-700 transition-colors" href="#about">소개</a>
<a className="hover:text-green-700 transition-colors" href="#process">이용안내</a>
<a className="hover:text-green-700 transition-colors" href="#program">프로그램</a>
<a className="hover:text-green-700 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20" href="#contact">
                문의하기
            </a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="lg:px-12 flex flex-col lg:flex-row lg:gap-20 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="w-full lg:w-1/2 gs-reveal">
<span className="inline-block py-1 px-3 rounded-full bg-green-100 text-green-800 text-xs font-medium tracking-wide uppercase mb-6">
                    No Planning. No Stress. Just Family Time.
                </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900 leading-tight mb-6 text-balance">
                    도심 한가운데서,<br className=""/>
<span className="text-green-700">가족의 추억을 키우다</span>
</h1>
<p className="text-base md:text-lg text-slate-600 leading-relaxed mb-10 font-normal max-w-lg">
                    주말마다 반복되는 장거리 운전과 '어디 갈지' 고민하는 스트레스에 지치셨나요? 멀리 가지 않아도 아이는 신나게, 부모는 편안하게 즐기는 우리 가족만의 도심 속 놀이터.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30" href="#program">
                        6월 프로그램 보기 &amp; 문의하기
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="w-full lg:w-1/2 relative gs-reveal" style={{transitionDelay: '0.2s'}}>
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/50 relative">
<img alt="Family enjoying nature" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46d180d8-0ba1-4a67-ba22-f397dbf8b38c_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4 text-balance">
                    도심 속 자연·놀이·교육을 한 번에,<br/>JARANAM CLUB
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-green-300 hover:shadow-md transition-all duration-300 gs-reveal">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">도심 속 자연 경험</h3>
<p className="text-sm text-slate-600 leading-relaxed font-normal">
                        멀리 나가지 않아도 아이들이 흙을 만지고 자연을 배우는 에듀테인먼트 공간.
                    </p>
</div>
<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-green-300 hover:shadow-md transition-all duration-300 gs-reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">모두가 행복한 주말</h3>
<p className="text-sm text-slate-600 leading-relaxed font-normal">
                        함께 추억을 쌓는 'With'부터, 부모에게 휴식을 주는 'Without' 프로그램까지 자유로운 선택.
                    </p>
</div>
<div className="p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-green-300 hover:shadow-md transition-all duration-300 gs-reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">스트레스 제로</h3>
<p className="text-sm text-slate-600 leading-relaxed font-normal">
                        복잡한 준비와 이동 피로 없이, 온전히 가족과의 즐거운 시간에만 집중.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 gs-reveal">
<span className="text-orange-500 text-sm font-medium tracking-wide uppercase mb-3 block">Problem</span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-4 text-balance">
                    "이번 주말엔 또 어디 가지?"<br/>부모님의 주말 스트레스를 끝낼 때
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 gs-reveal">
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-5">계획이 스트레스</span>
<p className="text-base text-slate-700 leading-relaxed font-normal">
                        매번 새로운 장소를 검색하고 예약하는 과정이 피로한 부모님
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 gs-reveal" style={{transitionDelay: '0.1s'}}>
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-5">이동이 부담</span>
<p className="text-base text-slate-700 leading-relaxed font-normal">
                        자연을 보여주고 싶지만, 꽉 막힌 도로와 장거리 운전이 두려운 부모님
                    </p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 gs-reveal" style={{transitionDelay: '0.2s'}}>
<span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium mb-5">휴식이 필요</span>
<p className="text-base text-slate-700 leading-relaxed font-normal">
                        키즈카페에서 시간만 때우는 대신, 부모도 함께 리프레시하고 싶은 가족
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-green-900 text-white overflow-hidden relative" id="process">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="mb-16 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-4 text-balance">
                    예약부터 체험까지,<br/>스트레스 제로 이용 방법
                </h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-white/20"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">

<div className="relative gs-reveal">
<div className="w-12 h-12 rounded-full bg-green-800 border border-white/30 flex items-center justify-center text-white font-medium mb-6 relative z-10 mx-auto md:mx-0 shadow-lg">
                            1
                        </div>
<div className="text-center md:text-left">
<h3 className="text-xl tracking-tight font-medium mb-3">프로그램 확인</h3>
<p className="text-sm text-green-100/80 leading-relaxed font-normal">
                                매월 업데이트되는 도심 속 자연/체험 콘텐츠 확인
                            </p>
</div>
</div>

<div className="relative gs-reveal" style={{transitionDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-green-800 border border-white/30 flex items-center justify-center text-white font-medium mb-6 relative z-10 mx-auto md:mx-0 shadow-lg">
                            2
                        </div>
<div className="text-center md:text-left">
<h3 className="text-xl tracking-tight font-medium mb-3">간편 문의 및 예약</h3>
<p className="text-sm text-green-100/80 leading-relaxed font-normal">
                                복잡한 절차 없이 원하는 날짜와 프로그램 간편 신청
                            </p>
</div>
</div>

<div className="relative gs-reveal" style={{transitionDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-orange-500 border border-orange-400 flex items-center justify-center text-white font-medium mb-6 relative z-10 mx-auto md:mx-0 shadow-lg shadow-orange-500/20">
                            3
                        </div>
<div className="text-center md:text-left">
<h3 className="text-xl tracking-tight font-medium mb-3">가벼운 마음으로 방문</h3>
<p className="text-sm text-green-100/80 leading-relaxed font-normal">
                                짐 부담 없이 가깝게 찾아와 준비된 에듀테인먼트 즐기기
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-12">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32 gs-reveal">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<span className="text-green-700 text-sm font-medium tracking-wide mb-3 block">Family Edutainment</span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-5">
<span className="text-slate-400">[가깝게]</span> 멀리 떠나지 않아도 충분한 자연 경험
                    </h2>
<p className="text-base text-slate-600 leading-relaxed font-normal">
                        반복되는 교통 체증에서 벗어나세요. 도심 한가운데서 식물을 접하고 자연을 배우며, 이동에 쓸 에너지를 아껴 아이와 더 깊게 눈을 맞춥니다.
                    </p>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Child with plants" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1600&amp;q=80"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32 gs-reveal">
<div className="w-full lg:w-1/2">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Family playing together" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66183618-64c9-445f-a462-dc50a2cb98ae_1600w.jpg"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<span className="text-green-700 text-sm font-medium tracking-wide mb-3 block">Closer Family</span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-5"><span className="text-slate-400">[재밌게]</span> 아이도 만족, 부모도 만족하는 주말</h2>
<p className="text-base text-slate-600 leading-relaxed font-normal">
                        아이만 놀고 부모는 지켜보는 지루한 시간은 끝났습니다. 교감하는 시간(With)과 온전한 나만의 휴식(Without) 모두 JARANAM CLUB이 지원합니다.
                    </p>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 gs-reveal">
<div className="w-full lg:w-1/2 order-2 lg:order-1">
<span className="text-green-700 text-sm font-medium tracking-wide mb-3 block">Be together</span>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900 mb-5">
<span className="text-slate-400">[편하게]</span> 도심 한가운데서, 가족의 추억을 키우다
                    </h2>
<p className="text-base text-slate-600 leading-relaxed font-normal">
                        무엇을 준비할지 검색하느라 시간을 허비하지 마세요. 모든 것이 세심하게 준비된 공간에서 짐 가방은 가볍게, 가족 간의 추억은 무겁게 채워갑니다.
                    </p>
</div>
<div className="w-full lg:w-1/2 order-1 lg:order-2">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Relaxing space" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3881717-4f35-475d-86dc-07538f474784_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-secondary" id="program">
<div className="max-w-5xl mx-auto px-6 lg:px-12">
<div className="text-center mb-12 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
                    우리 가족에게 맞는 프로그램 안내
                </h2>
</div>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-green-100 relative overflow-hidden gs-reveal">

<div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-medium px-4 py-2 rounded-bl-xl tracking-wide">
                    9월 스페셜 프로그램
                </div>
<div className="flex flex-col md:flex-row gap-10">
<div className="flex-1">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-2">
                            아이와 함께 하는 쿠킹 클래스
                        </h3>
<p className="text-sm text-orange-500 font-medium mb-6">
                            "우리 아이가 직접 수확한 토마토를 활용한 피자 만들기"
                        </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div className="">
<span className="block text-sm font-medium text-slate-800">포함 내용</span>
<span className="block text-xs text-slate-500 mt-1">수확 체험, 토마토 피자 만들기, 도심 속 자연 활동 일체</span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div className="">
<span className="block text-sm font-medium text-slate-800">특별 혜택</span>
<span className="block text-xs text-slate-500 mt-1">체험 재료 일체 제공, 가족 전용 공간 이용, 전문 강사 가이드 포함</span>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mb-8">
                            ※ 상세 가격 및 요금제 구성은 문의 시 개별 안내됩니다.
                        </p>
<a className="inline-flex w-full md:w-auto items-center justify-center px-8 py-4 text-sm font-medium text-white bg-green-700 rounded-full hover:bg-green-800 transition-colors" href="#contact">
                            월별 프로그램, 컨텐츠 보기 &amp; 문의하기
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<div className="flex-1 hidden md:block">
<div className="h-full w-full rounded-2xl overflow-hidden bg-slate-100">
<img alt="Cooking class" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14ea5144-3562-4e23-81ee-3e1686fa5cb2_800w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">
                    JARANAM CLUB과 함께한 가족들의 변화
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 relative gs-reveal">
<iconify-icon className="text-green-100 absolute top-8 left-8" icon="solar:quote-left-bold" width="40"></iconify-icon>
<p className="text-base text-slate-700 leading-relaxed font-normal relative z-10 pt-8 mb-6">
                        "집 근처에서 예약 한 번으로 알찬 프로그램을 즐길 수 있어서 주말 장소 고민 스트레스가 사라졌습니다."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-medium">가족</div>
<div className="text-sm font-medium text-slate-900">7세 아이 부모님</div>
</div>
</div>
<div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 relative gs-reveal" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-green-100 absolute top-8 left-8" icon="solar:quote-left-bold" width="40"></iconify-icon>
<p className="text-base text-slate-700 leading-relaxed font-normal relative z-10 pt-8 mb-6">
                        "아이만 노는 게 아니라 부모인 저도 피자를 만들며 몰입할 수 있어서, 간만에 진짜 '가족 시간'을 보냈어요."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm font-medium">가족</div>
<div className="text-sm font-medium text-slate-900">5세 아이 부모님</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-6 lg:px-12">
<div className="text-center mb-12 gs-reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-slate-900">자주 묻는 질문</h2>
</div>
<div className="space-y-4 gs-reveal">

<div className="border border-slate-200 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 text-sm md:text-base">자연 체험을 위해 멀리 나가야 하나요?</span>
<iconify-icon className="text-slate-400 faq-icon shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content bg-slate-50/50">
<div className="faq-inner px-6 pb-5 text-sm text-slate-600 font-normal leading-relaxed">
                            아닙니다. 도심 한가운데 위치하여 대중교통이나 가까운 거리로 편하게 방문하실 수 있습니다.
                        </div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 text-sm md:text-base">부모가 계속 같이 참여해야 하나요?</span>
<iconify-icon className="text-slate-400 faq-icon shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content bg-slate-50/50">
<div className="faq-inner px-6 pb-5 text-sm text-slate-600 font-normal leading-relaxed">
                            아닙니다! 온 가족이 함께 교감하는 'With형', 전문 선생님과 아이가 함께하는 동안 부모님은 휴식을 취하는 'Without형' 중 선택 가능합니다.
                        </div>
</div>
</div>

<div className="border border-slate-200 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-900 text-sm md:text-base">매달 프로그램이 바뀌나요?</span>
<iconify-icon className="text-slate-400 faq-icon shrink-0" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content bg-slate-50/50">
<div className="faq-inner px-6 pb-5 text-sm text-slate-600 font-normal leading-relaxed">
                            네, 매월 시즌에 맞춘 새로운 콘텐츠가 오픈됩니다. 6월은 '토마토 피자 클래스'가 진행 중이며 상세 내용은 문의로 확인 가능합니다.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-green-900 text-white text-center px-6" id="contact">
<div className="max-w-4xl mx-auto gs-reveal">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-6 text-balance leading-tight">
                바쁜 일상 속 부모의 마음과,<br/>추억이 필요한 아이의 마음을 모두 담았습니다.
            </h2>
<p className="text-base text-green-100/80 mb-10 font-normal">
                도심 한가운데서, 가족의 추억을 키우다.<br className="hidden sm:block"/> No Planning. No Stress. Just Family Time.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-xl shadow-orange-500/20" href="#">
                월별 프로그램, 컨텐츠 보기 &amp; 문의하기
            </a>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6 lg:px-12 text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center md:gap-8">
<span className="text-lg tracking-tight font-semibold text-green-800 mb-4 md:mb-0">
                    JARANAM CLUB
                </span>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-xs text-slate-500">
<span>contact@jaranamclub.com</span>
<span className="hidden md:inline text-slate-300">|</span>
<span>서울시 도심 내 공간</span>
</div>
</div>
<div className="text-xs text-slate-400">
                Copyright © 2026 JARANAM CLUB. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
