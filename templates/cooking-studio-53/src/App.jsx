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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid h-screen w-full"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-20">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-lg">LiveRecipe</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#service">서비스 소개</a>
<a className="hover:text-slate-900 transition-colors" href="#process">이용 방법</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">플랜</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">후기</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors">메뉴 확인하기</button>
<button className="bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm">
                    예약하기
                </button>
</div>
</div>
</nav>

<section className="snap-section hero">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://res.cloudinary.com/ddfngxp51/video/upload/v1781161505/hanel_opu4wi.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/45"></div>

<div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 py-24 md:py-0" style={{minHeight: '100vh'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide">재료 준비부터 뒷정리 걱정 없이, 오직 요리하고 기록하는 즐거움만</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-tight md:leading-[1.1] mb-6 text-balance max-w-4xl">
                요리가 콘텐츠가 되는 공간,<br/>
<span className="text-white/60">당신의 하루가 특별해집니다.</span>
</h1>
<p className="text-base md:text-lg text-white/70 mb-10 text-balance max-w-2xl mx-auto leading-relaxed">
                라이브레시피는 단순한 식당이 아닙니다. 맛있는 요리를 직접 만들고, 우리만의 특별한 영상 콘텐츠로 남길 수 있는 특별한 요리 경험을 제공합니다.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-slate-900 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                    지금 바로 예약하기
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white/10 text-white border border-white/30 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-white/20 transition-all">
                    메뉴 확인하기
                </button>
</div>
</div>
</section>

<section className="snap-section relative z-10 px-6" id="service">
<div className="w-full max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 text-balance">
                    준비는 라이브레시피가,<br/>주인공은 당신이 되는 공간
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">누구나 쉽게 만드는<br/>트렌디 요리</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        다양한 메뉴들을 부담 없이 직접 요리할 수 있습니다. 완벽하게 준비된 레시피로 실패 없는 요리를 경험하세요.
                    </p>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:camera-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">촬영에 최적화된<br/>공간 디자인</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        시선이 닿는 곳마다 예쁘게 연출되어 있어, 나만의 쿠킹 브이로그와 SNS 콘텐츠를 감각적으로 담아낼 수 있습니다.
                    </p>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8 hover:border-slate-300 transition-colors">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 mb-6 shadow-sm">
<iconify-icon className="text-2xl text-slate-700" icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight mb-3">준비와 정리가<br/>필요 없는 시스템</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        재료 손질부터 도구 준비, 번거로운 뒷정리까지 모두 세팅되어 있어 오직 요리와 촬영에만 집중할 수 있습니다.
                    </p>
</div>
</div>
</div>
</section>

<section className="snap-section relative z-10 border-t border-slate-100 px-6">
<div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight text-balance">
                    요리 콘텐츠를 만들고 싶지만,<br/>현실적인 장벽에 부딪혔던 분들을 위해
                </h2>
<p className="text-base text-slate-500 mb-8">
                    라이브레시피는 요리의 즐거움만을 남기고, 번거로운 과정은 모두 덜어냈습니다.
                </p>
</div>
<div className="space-y-4">
<div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-4 items-start shadow-sm">
<div className="mt-1 text-slate-400">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1 text-slate-900">새로운 체험을 즐기고 싶은 분</h4>
<p className="text-sm text-slate-500 leading-relaxed">특별한 요리를 해보고 싶지만, 한 번 쓰기 위해 비싼 조리도구와 향신료를 모두 사기
                            부담스러운 상황</p>
</div>
</div>
<div className="p-6 bg-white border border-slate-200 rounded-2xl flex gap-4 items-start shadow-sm">
<div className="mt-1 text-slate-400">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold mb-1 text-slate-900">요리 과정을 즐기고 싶은 분</h4>
<p className="text-sm text-slate-500 leading-relaxed">요리 자체는 좋아하지만, 끝없는 재료 손질과 산더미처럼 쌓이는 설거지 등 뒷정리가
                            엄두가 안 나는 상황</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section relative z-10 px-6" id="process">
<div className="w-full max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">라이브레시피를 즐기는 4단계 프로세스
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-slate-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm text-sm font-semibold text-slate-900">
                        1</div>
<h4 className="text-base font-semibold mb-2">메뉴 및 일정 선택</h4>
<p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">만들고 싶은 메뉴와 원하는 방문 시간을 선택하여 예약합니다.
                    </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm text-sm font-semibold text-slate-900">
                        2</div>
<h4 className="text-base font-semibold mb-2">몸만 편하게 방문</h4>
<p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">재료와 도구는 모두 준비되어 있습니다. 가벼운 마음으로
                        방문하세요.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm text-sm font-semibold text-slate-900">
                        3</div>
<h4 className="text-base font-semibold mb-2">요리하며 콘텐츠 촬영</h4>
<p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">예쁘게 세팅된 공간에서 자유롭게 요리하며 나만의 영상을
                        기록합니다.</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-slate-900 border border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-sm text-sm font-semibold text-white">
                        4</div>
<h4 className="text-base font-semibold mb-2">즐기고 바로 퇴장</h4>
<p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">완성된 요리를 즐긴 후, 뒷정리는 맡기고 가볍게 돌아갑니다.
                    </p>
</div>
</div>
</div>
</section>

<section className="snap-section tall relative z-10 px-6">
<div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Filming food" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 md:pl-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    카메라만 켜세요, 찍는 모든 순간이 감성 콘텐츠가 됩니다.
                </h2>
<p className="text-base text-slate-500 leading-relaxed">
                    요리하는 순간이 곧 콘텐츠가 되는 공간. 라이브레시피는 감각적인 인테리어와 최적의 조명으로 평범한 요리도 감성적인 브이로그와 SNS 콘텐츠로 완성해 드립니다. 오늘의 레시피를,
                    오늘의 추억으로 기록해 보세요.
                </p>
</div>
</div>
</section>

<section className="snap-section tall relative z-10 border-t border-slate-100 px-6">
<div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="md:pr-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:hands-drop-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    시작부터 끝까지, 오롯이 경험에만 집중하는 시간
                </h2>
<p className="text-base text-slate-500 leading-relaxed">
                    요리는 즐겁지만, 장보기와 설거지는 부담스럽다면. 라이브레시피는 준비와 정리의 수고를 대신하고 요리하는 즐거움만 남겨드립니다. 깨끗하게 준비된 재료와 도구로 요리에 집중하고,
                    완성된 요리와 소중한 추억, 그리고 성취감만 가져가세요.
                </p>
</div>
<div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Clean kitchen ingredients" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="snap-section tall relative z-10 border-t border-slate-100 px-6">
<div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100">
<img alt="Beautiful plated dish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 md:pl-12">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 mb-6">
<iconify-icon className="text-xl text-slate-700" icon="solar:ticket-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    다양하고 핫한 메뉴들을 합리적인 가격으로 쉽게 경험하세요.
                </h2>
<p className="text-base text-slate-500 leading-relaxed">
                    사 먹는 것보다 더 특별한 경험을 합리적인 비용으로 제공합니다. 부담 없는 가격으로 매번 새로운 메뉴를 직접 요리해 보며, 단순한 식사를 넘어 하루를 특별한 기억으로 채울 수
                    있습니다.
                </p>
</div>
</div>
</section>

<section className="snap-section relative z-10 bg-[#FAF9F6] px-0" id="pricing">
<div className="w-full">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 tracking-tight">Cooked with Love</h2>
<p className="text-stone-500 font-light mt-2">See how our community uses LiveRecipe everyday.</p>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-6 px-6 max-w-[100vw] snap-x">
<div className="min-w-[260px] md:min-w-[300px] aspect-[9/16] relative rounded-lg overflow-hidden group snap-center cursor-pointer">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=2571&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/60">
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-fill="currentColor" data-icon="lucide:play" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
</path>
</svg>
</div>
</div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-serif text-lg">Curry Prep</p>
<p className="text-xs opacity-90">Using Rasarth Turmeric</p>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] aspect-[9/16] relative rounded-lg overflow-hidden group snap-center cursor-pointer">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/60">
</div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-serif text-lg">Morning Ritual</p>
<p className="text-xs opacity-90">Warm Lemon Water &amp; Honey</p>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] aspect-[9/16] relative rounded-lg overflow-hidden group snap-center cursor-pointer">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&amp;w=2535&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/60">
</div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-serif text-lg">Spice Blending</p>
<p className="text-xs opacity-90">Traditional Mortar</p>
</div>
</div>
<div className="min-w-[260px] md:min-w-[300px] aspect-[9/16] relative rounded-lg overflow-hidden group snap-center cursor-pointer">
<img className="w-full h-full object-cover transition duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/60">
</div>
<div className="absolute bottom-4 left-4 text-white">
<p className="font-serif text-lg">Golden Milk</p>
<p className="text-xs opacity-90">Nightly Routine</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section tall relative z-10 px-6" id="reviews">
<div className="w-full max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 text-balance">
                    이미 많은 분들이 라이브레시피에서<br/>특별한 하루를 기록하고 있습니다.
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "집에서는 아무리 구도를 잡아도 유튜브 감성이 안 나왔는데, 여기서는 대충 찍어도 영상미가 살아서 구독자분들이 어디냐고 물어봐요!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">
                            지연</div>
<span className="text-xs text-slate-500">뷰티/일상 브이로거</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "기념일에 특별한 요리를 해주고 싶어서 방문했어요. 재료가 다 손질되어 있어서 요리 초보인 저도 실패 없이 맛있게 성공했습니다."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">
                            민준</div>
<span className="text-xs text-slate-500">직장인</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-8">
<div className="flex gap-1 text-slate-900 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                        "설거지랑 음식물 쓰레기 처리 안 해도 된다는 점이 최고예요. 요리하는 손맛만 쏙 골라 즐긴 기분입니다."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">
                            수진</div>
<span className="text-xs text-slate-500">프리랜서</span>
</div>
</div>
</div>
<div className="text-center">
<button className="text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors inline-flex items-center gap-2">
                    지금 1,000개+의 후기 구경하기
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="snap-section relative z-10 border-t border-slate-100 px-6">
<div className="w-full max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">자주 묻는 질문을 확인해보세요.</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<span className="text-base">Q. 요리를 전혀 못 하는 초보자도 참여할 수 있나요?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        A. 네, 당연합니다. 누구나 쉽게 따라 할 수 있도록 친절한 레시피와 정량 가이드가 제공되므로 실패 걱정 없이 요리를 완성하실 수 있습니다.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<span className="text-base">Q. 촬영 장비나 거치대 같은 것도 따로 챙겨가야 하나요?</span>
<span className="relative h-5 w-5 shrink-0">
<iconify-icon className="absolute inset-0 text-xl opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="absolute inset-0 text-xl opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                        A. 기본적인 촬영에 도움이 되는 거치 공간과 환경이 완비되어 있습니다. 개인 스마트폰이나 카메라만 편하게 지참하시면 됩니다.
                    </div>
</details>
</div>
</div>
</section>

<section className="snap-section relative z-10 px-6 justify-center">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 text-balance">
                요리가 가진 본연의 즐거움,<br/>사람들과 나누는 즐거움
            </h2>
<p className="text-base text-slate-500 mb-10 leading-relaxed">
                신개념 쿠킹 레스토랑 '라이브레시피'는 레시피를 보고 따라하고, 커스터마이징해 공유할 수 있는 가치를 제공합니다. 소중한 사람들과 예쁜 공간에서 특별한 하루를 만들고, 기록하고, 즐기기만
                하세요.
            </p>
<button className="bg-slate-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                지금 바로 예약하기
            </button>
</div>
</section>

<footer className="relative z-10 border-t border-slate-200 bg-slate-50 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 text-white rounded-md flex items-center justify-center">
<iconify-icon className="text-xs" icon="solar:play-circle-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tight">라이브레시피</span>
</a>
<div className="text-xs text-slate-500 space-y-2 leading-relaxed">
<p>상호명 : (주)라이브레시피 | 대표자 : 000</p>
<p>회사 소재지 : 서울시 특별구 요리로 123, 라이브빌딩 4층</p>
<p>이메일 : support@liverecipe.com</p>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">Copyright © 라이브레시피. All rights reserved.</p>
<div className="flex gap-4 text-xs text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">이용약관</a>
<a className="hover:text-slate-900 transition-colors" href="#">개인정보처리방침</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
