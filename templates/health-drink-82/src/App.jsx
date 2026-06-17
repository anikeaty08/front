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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
    const marquee = document.getElementById('review-marquee');
    const track = document.getElementById('review-track');
    if (!marquee || !track) return;

    const originalCards = Array.from(track.children);
    originalCards.forEach(card => {
        const clone = card.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        track.appendChild(clone);
    });

    if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }

    let offset = 0;
    let speed = 0.45;
    let paused = false;
    let isDragging = false;
    let startX = 0;
    let startOffset = 0;
    let singleSetWidth = 0;
    let rafId = null;

    function measure() {
        singleSetWidth = originalCards.reduce((sum, card, index) => {
            const style = window.getComputedStyle(track);
            const gap = parseFloat(style.columnGap || style.gap || 24);
            return sum + card.offsetWidth + (index < originalCards.length - 1 ? gap : 0);
        }, 0);
    }

    function normalizeOffset() {
        if (singleSetWidth <= 0) return;
        while (offset <= -singleSetWidth) offset += singleSetWidth;
        while (offset > 0) offset -= singleSetWidth;
    }

    function render() {
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
    }

    function loop() {
        if (!paused && !isDragging) {
            offset -= speed;
            normalizeOffset();
            render();
        }
        rafId = requestAnimationFrame(loop);
    }

    function pointerDown(clientX) {
        isDragging = true;
        paused = true;
        marquee.classList.add('dragging');
        startX = clientX;
        startOffset = offset;
    }

    function pointerMove(clientX) {
        if (!isDragging) return;
        const delta = clientX - startX;
        offset = startOffset + delta;
        normalizeOffset();
        render();
    }

    function pointerUp() {
        isDragging = false;
        paused = false;
        marquee.classList.remove('dragging');
    }

    marquee.addEventListener('mouseenter', () => {
        paused = true;
    });

    marquee.addEventListener('mouseleave', () => {
        if (!isDragging) paused = false;
    });

    marquee.addEventListener('mousedown', (e) => {
        pointerDown(e.clientX);
    });

    window.addEventListener('mousemove', (e) => {
        pointerMove(e.clientX);
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) pointerUp();
    });

    marquee.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        pointerDown(e.touches[0].clientX);
    }, { passive: true });

    marquee.addEventListener('touchmove', (e) => {
        if (!isDragging || e.touches.length !== 1) return;
        pointerMove(e.touches[0].clientX);
    }, { passive: true });

    marquee.addEventListener('touchend', () => {
        if (isDragging) pointerUp();
    });

    marquee.addEventListener('touchcancel', () => {
        if (isDragging) pointerUp();
    });

    window.addEventListener('resize', () => {
        measure();
        normalizeOffset();
        render();
    });

    measure();
    render();
    loop();
})();

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
      

<div className="fixed top-0 left-0 w-full z-[70]">

<div className="bg-[#2C2825] text-[#A39B92] text-[10px] md:text-xs py-2 px-6 text-center border-b border-white/5 h-8 md:h-10 flex items-center justify-center">
            ※ 본 페이지의 모든 정보는 식품 표시 광고 심의 기준을 준수하기 위해 노력하고 있으며, 본 제품은 건강기능식품이 아닌 일반식품(혼합음료)입니다.
        </div>

<nav className="flex backdrop-blur-md bg-gradient-to-b from-[#1A1817]/90 via-[#1A1817]/40 to-transparent w-full py-2 px-5 md:py-2.5 md:px-6 items-center justify-between transition-all duration-300" id="main-nav">
<div className="w-24 md:w-28 cursor-pointer" onclick="goToHomeAndScroll('hero')">
<img alt="AFTER" className="w-full h-auto brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb88d835-1e5d-4ac1-8145-4388f855107f_320w.png"/>
</div>

<div className="hidden gap-8 text-sm uppercase tracking-widest md:flex font-medium text-white/80 items-center">
<button className="transition-all hover:text-[#D48C70] outline-none" onclick="goToHomeAndScroll('checklist-section')">CHECK LIST</button>
<button className="transition-all hover:text-[#D48C70] outline-none" onclick="goToHomeAndScroll('main-feature')">AFTER</button>
<button className="transition-all hover:text-[#D48C70] outline-none" onclick="goToHomeAndScroll('review')">REVIEW</button>
<button className="transition-all hover:text-[#D48C70] outline-none" onclick="goToHomeAndScroll('faq')">FAQ</button>
<button className="transition-all hover:text-[#D48C70] outline-none" onclick="goToTry()">TRY</button>
</div>
<button className="md:hidden bg-white text-[#1A1817] text-xs font-bold px-4 py-2 rounded-full shadow-lg outline-none" onclick="goToTry()">
                체험단 신청
            </button>
</nav>
</div>



<div className="block" id="home-view">

<header className="relative flex min-h-screen w-full items-center overflow-hidden pt-28 md:pt-32 bg-[#1A1817]" id="hero">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="AFTER Balance Background" className="w-full h-full object-cover object-right-center scale-[1.05] origin-right transition-transform duration-1000 ease-out" id="hero-bg" src="https://i.postimg.cc/J420nRNP/generated-image-(3).png"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1817] via-[#1A1817]/70 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#1A1817] to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-20 flex flex-col md:flex-row items-center h-full">
<div className="w-full md:w-3/5 flex flex-col items-start text-left fade-in-up relative py-20">
<div className="flex flex-wrap gap-2 mb-8">
</div>
<h1 className="pretendard font-semibold text-5xl md:text-6xl lg:text-7xl leading-[1.2] tracking-tight text-white mb-8 transition-transform duration-700 ease-out origin-left hover:scale-110 cursor-default break-keep" id="hero-text">
                        카페인은 비우고,<br/>
<span className="text-[#D48C70]">내 리듬은 채우고.</span>
</h1>
<p className="maruburi font-normal text-lg md:text-2xl text-white/70 mb-12 leading-relaxed break-keep">
                        과하게 올라간 텐션을 다독이고,<br className="hidden md:block"/>
                        남은 하루의 리듬을 가장 편안하게 이어갑니다.<br/>
<strong className="font-bold text-white tracking-wide text-xl md:text-2xl mt-5 inline-block">카페인 릴렉서 <span className="text-3xl md:text-4xl ml-1">AFTER</span></strong>
</p>
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white px-8 py-5 text-[#1A1817] transition-all duration-300 ease-out hover:bg-transparent hover:text-white hover:shadow-[0_0_30px_rgba(212,140,112,0.3)] w-fit outline-none" onclick="goToTry()">
<i className="w-5 h-5 ml-2 relative z-10 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</header>

<section className="bg-[#F3EFE7] z-20 border-white/5 border-t py-12 md:py-16 pr-6 pl-6 relative overflow-hidden" id="checklist-section">
<div className="max-w-4xl mx-auto fade-up-scroll text-center">

<span className="pretendard uppercase text-[10px] md:text-xs tracking-[0.2em] text-[#D48C70] font-bold block mb-2">Checklist</span>

<h3 className="maruburi text-2xl md:text-4xl font-semibold mb-8 leading-tight">
            오후 4시만 되면<br/>
            이런 고민, 해보셨나요?
        </h3>

<div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-left">

<div className="bg-white/60 p-5 md:p-6 rounded-[20px] border border-[#D7B39A]/30 flex items-start gap-3 hover:shadow-md transition duration-300">
<div className="text-[#D48C70] mt-1 shrink-0"><i className="w-5 h-5 md:w-6 md:h-6" data-lucide="coffee"></i></div>
<p className="pretendard font-medium text-base md:text-lg text-[#4A443E] leading-snug">커피를 또 마시자니<br/><span className="text-[#D48C70]">휴식이 방해될까 봐</span> 걱정된다.</p>
</div>
<div className="bg-white/60 p-5 md:p-6 rounded-[20px] border border-[#D7B39A]/30 flex items-start gap-3 hover:shadow-md transition duration-300">
<div className="text-[#D48C70] mt-1 shrink-0"><i className="w-5 h-5 md:w-6 md:h-6" data-lucide="eye"></i></div>
<p className="pretendard font-medium text-base md:text-lg text-[#4A443E] leading-snug">피곤해서 누웠는데<br/><span className="text-[#D48C70]">생각이 꼬리에 꼬리를</span> 문다.</p>
</div>
<div className="bg-white/60 p-5 md:p-6 rounded-[20px] border border-[#D7B39A]/30 flex items-start gap-3 hover:shadow-md transition duration-300">
<div className="text-[#D48C70] mt-1 shrink-0"><i className="w-5 h-5 md:w-6 md:h-6" data-lucide="droplets"></i></div>
<p className="pretendard font-medium text-base md:text-lg text-[#4A443E] leading-snug">커피 마신 뒤 남는<br/><span className="text-[#D48C70]">텁텁함을 깔끔하게</span> 씻어내고 싶다.</p>
</div>
<div className="bg-white/60 p-5 md:p-6 rounded-[20px] border border-[#D7B39A]/30 flex items-start gap-3 hover:shadow-md transition duration-300">
<div className="text-[#D48C70] mt-1 shrink-0"><i className="w-5 h-5 md:w-6 md:h-6" data-lucide="briefcase"></i></div>
<p className="pretendard font-medium text-base md:text-lg text-[#4A443E] leading-snug">퇴근 후에도 업무의<br/><span className="text-[#D48C70]">긴장감이 쉽게 가시지</span> 않는다.</p>
</div>
</div>

<div className="mt-10 inline-block bg-[#4A443E] text-[#F3EFE7] px-6 md:px-10 py-4 rounded-xl shadow-lg w-full md:w-auto">
<p className="maruburi text-lg md:text-xl mb-1">카페인의 각성효과, 이제 차분히 식히세요.</p>
<p className="pretendard font-light text-xs md:text-sm opacity-80">부드러운 진정이 몸과 마음의 밸런스를 되찾아 줍니다.</p>
</div>
</div>
</section>

<section className="py-12 md:py-16 bg-[#F3EFE7] relative overflow-hidden" id="main-feature">
<div className="max-w-6xl mx-auto px-6 fade-up-scroll">

<div className="text-center mb-8 md:mb-10">
<span className="pretendard uppercase text-[10px] md:text-xs tracking-[0.2em] text-[#D48C70] font-bold block mb-2">AFTER Balance</span>
<h2 className="maruburi text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#4A443E] font-bold mb-4">
                카페인 릴렉서 <span className="text-[#D48C70]">AFTER</span>
</h2>
<p className="pretendard text-base md:text-lg text-[#6B645D] font-medium break-keep tracking-wide">
                L-테아닌, 마그네슘, GABA의 <span className="text-[#4A443E] font-bold">Triple 배합</span>과 <span className="text-[#4A443E] font-bold">Lemon Lime Flavor</span>
</p>
</div>

<div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">

<div className="lg:max-w-none lg:w-[280px] aspect-[9/16] overflow-hidden z-10 flex-shrink-0 bg-[#1A1817] w-full max-w-[240px] border-[#D7B39A]/20 border rounded-[24px] mr-auto ml-auto relative shadow-2xl">

<iframe allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen="" className="absolute left-0 w-full pointer-events-none top-[-15%] h-[130%]" frameborder="0" src="https://www.youtube.com/embed/4WytNMvpmPM?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=4WytNMvpmPM&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1">
</iframe>
</div>

<div className="w-full lg:flex-1 flex flex-col justify-between py-2 lg:py-0">
<div className="w-full mb-4 lg:mb-0">
<h3 className="maruburi text-xl md:text-2xl text-[#2F2A26] italic mb-2 break-keep">“카페인은 비우고, 내 리듬은 채우고”</h3>
<p className="break-keep text-[#4A443E] font-medium text-base md:text-lg leading-relaxed mb-2 md:mb-4">
                        오후 4시, 여전히 뇌를 자극하는 커피의 잔여감.<br className="hidden lg:block"/>
                        이제 억지로 견디지 말고 부드럽게 이완하세요.
                    </p>
</div>

<div className="grid grid-cols-2 gap-3 md:gap-4 mt-auto">

<div className="bg-white/70 backdrop-blur-md p-4 md:p-5 rounded-[20px] md:rounded-[24px] border border-[#D7B39A]/30 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(74,68,62,0.04)] hover:shadow-md transition-shadow group">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8DCC5]/40 flex items-center justify-center mb-2 md:mb-3 text-[#D48C70] group-hover:bg-[#E8DCC5]/70 transition-colors">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="leaf"></i>
</div>
<p className="pretendard text-[#A39B92] font-semibold text-[9px] md:text-[10px] tracking-[0.15em] uppercase mb-0.5">L-Theanine</p>
<p className="pretendard text-[#4A443E] font-bold text-lg md:text-xl leading-tight mb-1">200mg</p>
<p className="pretendard text-[#6B645D] font-medium text-[10px] md:text-xs break-keep">편안한 멘탈 밸런스</p>
</div>

<div className="bg-white/70 backdrop-blur-md p-4 md:p-5 rounded-[20px] md:rounded-[24px] border border-[#D7B39A]/30 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(74,68,62,0.04)] hover:shadow-md transition-shadow group">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8DCC5]/40 flex items-center justify-center mb-2 md:mb-3 text-[#D48C70] group-hover:bg-[#E8DCC5]/70 transition-colors">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="activity"></i>
</div>
<p className="pretendard text-[#A39B92] font-semibold text-[9px] md:text-[10px] tracking-[0.15em] uppercase mb-0.5">Magnesium</p>
<p className="pretendard text-[#4A443E] font-bold text-lg md:text-xl leading-tight mb-1">90mg</p>
<p className="pretendard text-[#6B645D] font-medium text-[10px] md:text-xs break-keep">신경 및 근육 긴장 완화</p>
</div>

<div className="bg-white/70 backdrop-blur-md p-4 md:p-5 rounded-[20px] md:rounded-[24px] border border-[#D7B39A]/30 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(74,68,62,0.04)] hover:shadow-md transition-shadow group">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8DCC5]/40 flex items-center justify-center mb-2 md:mb-3 text-[#D48C70] group-hover:bg-[#E8DCC5]/70 transition-colors">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="brain-circuit"></i>
</div>
<p className="pretendard text-[#A39B92] font-semibold text-[9px] md:text-[10px] tracking-[0.15em] uppercase mb-0.5">GABA</p>
<p className="pretendard text-[#4A443E] font-bold text-lg md:text-xl leading-tight mb-1">100mg</p>
<p className="pretendard text-[#6B645D] font-medium text-[10px] md:text-xs break-keep">안정적인 휴식 유도</p>
</div>

<div className="bg-white/70 backdrop-blur-md p-4 md:p-5 rounded-[20px] md:rounded-[24px] border border-[#D7B39A]/30 flex flex-col items-center justify-center text-center shadow-[0_8px_30px_rgba(74,68,62,0.04)] hover:shadow-md transition-shadow group">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#E8DCC5]/40 flex items-center justify-center mb-2 md:mb-3 text-[#D48C70] group-hover:bg-[#E8DCC5]/70 transition-colors">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<p className="pretendard text-[#A39B92] font-semibold text-[9px] md:text-[10px] tracking-[0.15em] uppercase mb-0.5">Flavor</p>
<p className="pretendard text-[#4A443E] font-bold text-lg md:text-xl leading-tight mb-1 uppercase">Lemon Lime</p>
<p className="pretendard text-[#6B645D] font-medium text-[10px] md:text-xs break-keep">텁텁함 없는 깔끔한 마무리</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-12 md:py-16 bg-[#F3EFE7] flex flex-col items-center" id="after">
<div className="max-w-7xl mx-auto w-full fade-up-scroll">

<div className="text-center mb-8 md:mb-10 px-6">
<span className="pretendard uppercase text-[10px] md:text-xs tracking-[0.2em] text-[#D48C70] font-bold block mb-2">AFTER : Product Lineup</span>
<h2 className="maruburi text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#4A443E] font-bold">
                AFTER Balance의 <span className="text-[#D48C70]">다양한 Flavor</span>
</h2>
</div>

<div className="flex lg:grid lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar px-6 pb-8 lg:pb-0">

<div className="snap-center shrink-0 w-[260px] sm:w-[320px] lg:w-auto cursor-pointer bg-white rounded-t-[24px] md:rounded-t-[32px] rounded-b-none pt-8 md:pt-10 px-4 flex flex-col items-center shadow-[0_8px_30px_rgba(74,68,62,0.06)] border border-[#D7B39A]/20 overflow-hidden relative group h-[360px] md:h-[420px] hover:bg-[#FDFCFB] transition-colors" onclick="goToProduct()">
<div className="absolute inset-0 bg-gradient-to-t from-[#D48C70]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-0 pointer-events-none">
</div>
<h4 className="maruburi font-semibold text-xl md:text-2xl text-[#2C2825] text-center mb-1.5 leading-tight tracking-tight z-10 relative group-hover:text-[#D48C70] transition-colors">
                    AFTER<br/>LEMON LIME</h4>
<div className="h-6 mb-1 z-10 flex items-center justify-center relative">
<span className="inline-block text-[#D48C70] text-[11px] md:text-xs font-bold tracking-wider">자세히 보기 →</span>
</div>

<img alt="AFTER Lemon Lime" className="absolute left-1/2 -translate-x-1/2 bottom-[-2%] h-[65%] md:h-[70%] w-auto max-w-[95%] object-bottom object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl z-0 opacity-95" src="https://i.postimg.cc/R0C3MmpQ/IMG_0420.png"/>
</div>

<div className="snap-center shrink-0 w-[260px] sm:w-[320px] lg:w-auto bg-white rounded-t-[24px] md:rounded-t-[32px] rounded-b-none pt-8 md:pt-10 px-4 flex flex-col items-center shadow-[0_8px_30px_rgba(74,68,62,0.06)] border border-[#D7B39A]/20 overflow-hidden relative group h-[360px] md:h-[420px]">
<h4 className="maruburi font-semibold text-xl md:text-2xl text-[#2C2825] text-center mb-1.5 leading-tight tracking-tight z-10 relative">
                    AFTER<br/>ZERO</h4>
<div className="h-6 mb-1 z-10 flex items-center justify-center relative">
<span className="inline-block bg-[#F3EFE7] text-[#D48C70] text-[10px] md:text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#D7B39A]/30 tracking-wide">출시예정</span>
</div>
<img alt="AFTER Zero" className="absolute left-1/2 -translate-x-1/2 bottom-[-2%] h-[65%] md:h-[70%] w-auto max-w-[95%] object-bottom object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl z-0 opacity-95" src="https://i.postimg.cc/nLVsHxSK/IMG_0421.png"/>
</div>

<div className="snap-center shrink-0 w-[260px] sm:w-[320px] lg:w-auto bg-white rounded-t-[24px] md:rounded-t-[32px] rounded-b-none pt-8 md:pt-10 px-4 flex flex-col items-center shadow-[0_8px_30px_rgba(74,68,62,0.06)] border border-[#D7B39A]/20 overflow-hidden relative group h-[360px] md:h-[420px]">
<h4 className="maruburi font-semibold text-xl md:text-2xl text-[#2C2825] text-center mb-1.5 leading-tight tracking-tight z-10 relative">
                    AFTER<br/>GREEN GRAPES</h4>
<div className="h-6 mb-1 z-10 flex items-center justify-center relative">
<span className="inline-block bg-[#F3EFE7] text-[#D48C70] text-[10px] md:text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#D7B39A]/30 tracking-wide">출시예정</span>
</div>
<img alt="AFTER Green Grapes" className="absolute left-1/2 -translate-x-1/2 bottom-[-2%] h-[65%] md:h-[70%] w-auto max-w-[95%] object-bottom object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl z-0 opacity-95" src="https://i.postimg.cc/25H1ytgb/IMG_0422.png"/>
</div>

<div className="snap-center shrink-0 w-[260px] sm:w-[320px] lg:w-auto bg-white rounded-t-[24px] md:rounded-t-[32px] rounded-b-none pt-8 md:pt-10 px-4 flex flex-col items-center shadow-[0_8px_30px_rgba(74,68,62,0.06)] border border-[#D7B39A]/20 overflow-hidden relative group h-[360px] md:h-[420px]">
<h4 className="maruburi font-semibold text-xl md:text-2xl text-[#2C2825] text-center mb-1.5 leading-tight tracking-tight z-10 relative">
                    AFTER<br/>CHERRY</h4>
<div className="h-6 mb-1 z-10 flex items-center justify-center relative">
<span className="inline-block bg-[#F3EFE7] text-[#D48C70] text-[10px] md:text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#D7B39A]/30 tracking-wide">출시예정</span>
</div>
<img alt="AFTER Cherry" className="absolute left-1/2 -translate-x-1/2 bottom-[-2%] h-[65%] md:h-[70%] w-auto max-w-[95%] object-bottom object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl z-0 opacity-95" src="https://i.postimg.cc/yNfDxG2J/IMG_0423.png"/>
</div>

<div className="shrink-0 w-2 lg:hidden"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2C2825] text-[#F3EFE7] overflow-hidden relative">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="오후 4시 추천 배경" className="w-full h-full object-cover opacity-60 scale-105" src="https://i.postimg.cc/5N6vp7nJ/generated_image_(5).png"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#2C2825] via-[#2C2825]/30 to-[#2C2825]"></div>
</div>
<div className="max-w-4xl mx-auto fade-up-scroll text-center relative z-10">
<h3 className="maruburi text-2xl md:text-4xl font-semibold mb-12 break-keep">오후 4시의 선택, AFTER<br/>이런 분들께 강력 추천합니다!</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
<div className="md:p-6 hover:bg-white/10 transition text-center bg-white/5 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur">
<i className="w-7 h-7 md:w-8 md:h-8 text-[#D48C70] mx-auto mb-4" data-lucide="laptop"></i>
<p className="pretendard font-medium text-xs sm:text-sm md:text-base break-keep">과도한 업무에<br/>신경이 곤두선 분</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-5 md:p-6 rounded-2xl text-center hover:bg-white/10 transition">
<i className="w-7 h-7 md:w-8 md:h-8 text-[#D48C70] mx-auto mb-4" data-lucide="coffee"></i>
<p className="pretendard font-medium text-xs sm:text-sm md:text-base break-keep">카페인 섭취 후<br/>휴식이 걱정되는 분</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-5 md:p-6 rounded-2xl text-center hover:bg-white/10 transition">
<i className="w-7 h-7 md:w-8 md:h-8 text-[#D48C70] mx-auto mb-4" data-lucide="moon-star"></i>
<p className="pretendard font-medium text-xs sm:text-sm md:text-base break-keep">퇴근 및 육아 후<br/>온전한 쉼이 필요한 분</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-5 md:p-6 rounded-2xl text-center hover:bg-white/10 transition">
<i className="w-7 h-7 md:w-8 md:h-8 text-[#D48C70] mx-auto mb-4" data-lucide="sparkles"></i>
<p className="pretendard font-medium text-xs sm:text-sm md:text-base break-keep">부담 없는 저칼로리<br/>음료를 찾는 분</p>
</div>
</div>
</div>
</section>

<style>
    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 12px)); } /* Gap의 절반만큼 보정 */
    }
    .animate-infinite-scroll {
        display: flex;
        width: max-content;
        animation: scroll 40s linear infinite;
    }
    /* 호버 시 일시 정지 */
    .animate-infinite-scroll:hover {
        animation-play-state: paused;
    }
</style>

<section className="py-12 md:py-16 bg-[#F3EFE7] overflow-hidden" id="review">
<div className="max-w-7xl mx-auto px-6 mb-6 text-center fade-up-scroll">
<span className="pretendard uppercase text-[10px] md:text-xs tracking-[0.2em] text-[#D48C70] font-bold block mb-2">REAL REVIEW</span>
<h3 className="maruburi text-2xl md:text-4xl tracking-tight text-[#4A443E] font-medium leading-snug">
            이미 많은 분들이 <br className="md:hidden"/>AFTER가 만든 편안한 리듬을 경험하고 있습니다.
        </h3>
</div>
<div className="review-marquee" id="review-marquee">
<div className="review-track" id="review-track">

<article className="review-card">
<div className="review-thumb">
<img alt="Camping Review" src="https://i.postimg.cc/V6WBQJbj/generated_image_(4).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">박*준</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.20</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        캠핑 와서 불멍하며 마시니 딱이네요. 커피 마시기엔 늦은 시간이라 걱정했는데, AFTER 덕분에 밤에 푹 쉴 수 있을 것 같아요.
                    </p>
</div>
</article>
<article className="review-card">
<div className="review-thumb">
<img alt="Office Review" src="https://i.postimg.cc/HWKjWp4K/20260323_144529.jpg"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">이*민</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.22</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        오후 3시만 되면 커피 세 잔째라 심장이 두근거렸는데.. 이거 마시고 나니 확실히 차분해지네요. 사무실 필수템 등극입니다.
                    </p>
</div>
</article>
<article className="review-card review-card-featured">
<div className="review-thumb">
<img alt="Cafe Review" src="https://i.postimg.cc/GtNjzZDh/generated_image_(7).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">정*지</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.23</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        상큼한 레몬라임 맛이라 텁텁함도 없고 밤에 잠도 잘 올 것 같아요! 카페인 부담 없이 친구들이랑 마시기 너무 좋아요.
                    </p>
</div>
</article>
<article className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 1" src="https://i.postimg.cc/wvxPryWs/20260323_152806.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">최*혁</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.24</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        야근할 때 커피 마시면 밤에 잠을 설쳐서 고생했는데, AFTER를 같이 마시니 신기하게 두근거림이 없어요. 최고입니다.
                    </p>
</div>
</article>
<article className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 2" src="https://i.postimg.cc/sXf8LQn7/20260323_152829.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">김*나</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.25</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        늦게까지 기획서 쓰느라 커피가 절실했는데 AFTER 믿고 한 잔 더 마셨습니다. 차분하게 집중이 잘 되네요. 야근 필수템!
                    </p>
</div>
</article>
<article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Camping Review" src="https://i.postimg.cc/V6WBQJbj/generated_image_(4).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">박*준</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.20</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        캠핑 와서 불멍하며 마시니 딱이네요. 커피 마시기엔 늦은 시간이라 걱정했는데, AFTER 덕분에 밤에 푹 쉴 수 있을 것 같아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Office Review" src="https://i.postimg.cc/HWKjWp4K/20260323_144529.jpg"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">이*민</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.22</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        오후 3시만 되면 커피 세 잔째라 심장이 두근거렸는데.. 이거 마시고 나니 확실히 차분해지네요. 사무실 필수템 등극입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card review-card-featured">
<div className="review-thumb">
<img alt="Cafe Review" src="https://i.postimg.cc/GtNjzZDh/generated_image_(7).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">정*지</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.23</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        상큼한 레몬라임 맛이라 텁텁함도 없고 밤에 잠도 잘 올 것 같아요! 카페인 부담 없이 친구들이랑 마시기 너무 좋아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 1" src="https://i.postimg.cc/wvxPryWs/20260323_152806.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">최*혁</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.24</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        야근할 때 커피 마시면 밤에 잠을 설쳐서 고생했는데, AFTER를 같이 마시니 신기하게 두근거림이 없어요. 최고입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 2" src="https://i.postimg.cc/sXf8LQn7/20260323_152829.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">김*나</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.25</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        늦게까지 기획서 쓰느라 커피가 절실했는데 AFTER 믿고 한 잔 더 마셨습니다. 차분하게 집중이 잘 되네요. 야근 필수템!
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Camping Review" src="https://i.postimg.cc/V6WBQJbj/generated_image_(4).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">박*준</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.20</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        캠핑 와서 불멍하며 마시니 딱이네요. 커피 마시기엔 늦은 시간이라 걱정했는데, AFTER 덕분에 밤에 푹 쉴 수 있을 것 같아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Office Review" src="https://i.postimg.cc/HWKjWp4K/20260323_144529.jpg"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">이*민</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.22</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        오후 3시만 되면 커피 세 잔째라 심장이 두근거렸는데.. 이거 마시고 나니 확실히 차분해지네요. 사무실 필수템 등극입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card review-card-featured">
<div className="review-thumb">
<img alt="Cafe Review" src="https://i.postimg.cc/GtNjzZDh/generated_image_(7).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">정*지</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.23</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        상큼한 레몬라임 맛이라 텁텁함도 없고 밤에 잠도 잘 올 것 같아요! 카페인 부담 없이 친구들이랑 마시기 너무 좋아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 1" src="https://i.postimg.cc/wvxPryWs/20260323_152806.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">최*혁</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.24</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        야근할 때 커피 마시면 밤에 잠을 설쳐서 고생했는데, AFTER를 같이 마시니 신기하게 두근거림이 없어요. 최고입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 2" src="https://i.postimg.cc/sXf8LQn7/20260323_152829.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">김*나</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.25</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        늦게까지 기획서 쓰느라 커피가 절실했는데 AFTER 믿고 한 잔 더 마셨습니다. 차분하게 집중이 잘 되네요. 야근 필수템!
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Camping Review" src="https://i.postimg.cc/V6WBQJbj/generated_image_(4).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">박*준</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.20</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        캠핑 와서 불멍하며 마시니 딱이네요. 커피 마시기엔 늦은 시간이라 걱정했는데, AFTER 덕분에 밤에 푹 쉴 수 있을 것 같아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Office Review" src="https://i.postimg.cc/HWKjWp4K/20260323_144529.jpg"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">이*민</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.22</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        오후 3시만 되면 커피 세 잔째라 심장이 두근거렸는데.. 이거 마시고 나니 확실히 차분해지네요. 사무실 필수템 등극입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card review-card-featured">
<div className="review-thumb">
<img alt="Cafe Review" src="https://i.postimg.cc/GtNjzZDh/generated_image_(7).png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">정*지</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.23</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        상큼한 레몬라임 맛이라 텁텁함도 없고 밤에 잠도 잘 올 것 같아요! 카페인 부담 없이 친구들이랑 마시기 너무 좋아요.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 1" src="https://i.postimg.cc/wvxPryWs/20260323_152806.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">최*혁</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.24</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        야근할 때 커피 마시면 밤에 잠을 설쳐서 고생했는데, AFTER를 같이 마시니 신기하게 두근거림이 없어요. 최고입니다.
                    </p>
</div>
</article><article aria-hidden="true" className="review-card">
<div className="review-thumb">
<img alt="Overtime Review 2" src="https://i.postimg.cc/sXf8LQn7/20260323_152829.png"/>
</div>
<div className="p-6 flex flex-col flex-1">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#E8DCC5] flex items-center justify-center text-[#D48C70]">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<span className="pretendard font-bold text-sm text-[#4A443E]">김*나</span>
</div>
<span className="text-[10px] text-[#A39B92]">2026.03.25</span>
</div>
<div className="flex gap-0.5 mb-3 text-[#D48C70]">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i><i className="w-3.5 h-3.5 fill-current" data-lucide="star"></i>
</div>
<p className="pretendard text-sm text-[#6B645D] leading-relaxed break-keep">
                        늦게까지 기획서 쓰느라 커피가 절실했는데 AFTER 믿고 한 잔 더 마셨습니다. 차분하게 집중이 잘 되네요. 야근 필수템!
                    </p>
</div>
</article></div>
</div>
</section>
<style>
    .review-marquee {
        position: relative;
        overflow: hidden;
        width: 100%;
        cursor: grab;
        user-select: none;
        touch-action: pan-y;
    }

    .review-marquee.dragging {
        cursor: grabbing;
    }

    .review-track {
        display: flex;
        align-items: stretch;
        gap: 1.5rem;
        width: max-content;
        will-change: transform;
        padding: 0 1.5rem;
    }

    .review-card {
        width: 300px;
        background: white;
        border-radius: 1.5rem 1.5rem 0 0;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(74, 68, 62, 0.06);
        border: 1px solid rgba(215, 179, 154, 0.2);
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }

    .review-card-featured {
        border: 2px solid rgba(212, 140, 112, 0.1);
    }

    .review-thumb {
        height: 11rem;
        overflow: hidden;
    }

    .review-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        pointer-events: none;
    }

    @media (min-width: 768px) {
        .review-card {
            width: 320px;
        }

        .review-thumb {
            height: 12rem;
        }
    }
</style>
 
<section className="py-12 px-6 bg-[#F3EFE7]" id="faq">
<div className="max-w-3xl mx-auto fade-up-scroll">
<div className="text-center mb-12">
<span className="pretendard uppercase text-xs tracking-[0.2em] text-[#D48C70] font-bold block mb-4">FAQ</span>
<h3 className="maruburi text-3xl md:text-4xl tracking-tight text-[#4A443E]">자주 묻는 질문 (FAQ)</h3>
</div>
<div className="space-y-4 pretendard">
<details className="group bg-white/50 rounded-2xl border border-[#D7B39A]/30 cursor-pointer overflow-hidden">
<summary className="flex justify-between items-center font-medium p-6 text-lg list-none outline-none">
<span className="flex gap-3"><span className="text-[#D48C70]">Q.</span> 수면제인가요? 업무 중에 마시면 졸리지 않나요?</span>
<iconify-icon className="w-5 h-5 text-[#D48C70] transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon></summary></details></div></div></section></div>
    </>
  );
}
