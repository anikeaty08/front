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



        function openPreorderModal() {
            const modal = document.getElementById('preorder-modal');
            const content = document.getElementById('preorder-modal-content');
            
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            document.body.style.overflow = 'hidden';
            
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
        }

        function closePreorderModal() {
            const modal = document.getElementById('preorder-modal');
            const content = document.getElementById('preorder-modal-content');
            
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        if(el.dataset.animate === 'fade-up') {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }
                        if(el.dataset.animate === 'clip-text') {
                            el.style.clipPath = 'inset(0 0 0 0)';
                        }
                        revealObserver.unobserve(el);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('[data-animate]').forEach(el => {
                const animType = el.dataset.animate;
                const delay = el.dataset.delay || '0';
                
                el.style.transitionProperty = 'all';
                el.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)';
                el.style.transitionDuration = '1.2s';
                el.style.transitionDelay = `${delay}ms`;

                if (animType === 'fade-up') {
                    el.style.opacity = '0';
                    el.style.transform = 'translateY(40px)';
                } else if (animType === 'clip-text') {
                    el.style.clipPath = 'inset(0 100% 0 0)';
                    el.style.transitionTimingFunction = 'cubic-bezier(0.77, 0, 0.175, 1)';
                    el.style.transitionDuration = '1.4s';
                }
                
                revealObserver.observe(el);
            });

            const processBlocks = document.querySelectorAll('.process-block');
            const indicators = [
                document.getElementById('ind-1'),
                document.getElementById('ind-2'),
                document.getElementById('ind-3'),
                document.getElementById('ind-4')
            ];

            const processObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        processBlocks.forEach(b => b.style.opacity = '0.2');
                        entry.target.style.opacity = '1';
                        
                        const index = parseInt(entry.target.dataset.index) - 1;
                        indicators.forEach((ind, i) => {
                            if (!ind) return;
                            const dot = ind.querySelector('span');
                            if(i === index) {
                                ind.classList.replace('text-zinc-600', 'text-white');
                                dot.classList.replace('bg-zinc-800', 'bg-red-600');
                            } else {
                                ind.classList.replace('text-white', 'text-zinc-600');
                                dot.classList.replace('bg-red-600', 'bg-zinc-800');
                            }
                        });
                    }
                });
            }, { threshold: 0.5 });

            processBlocks.forEach(block => processObserver.observe(block));

            const revealImgContainer = document.getElementById('reveal-img-container');
            const pZoom = document.querySelector('.parallax-zoom');
            const pZoomContent = document.querySelector('.parallax-content');

            window.addEventListener('scroll', () => {
                const winH = window.innerHeight;

                if(revealImgContainer) {
                    const rect = revealImgContainer.parentElement.getBoundingClientRect();
                    if(rect.top < winH && rect.bottom > 0) {
                        const progress = Math.max(0, Math.min(1, (winH - rect.top) / (winH * 0.8)));
                        const insetTop = 100 - (progress * 100);
                        revealImgContainer.style.clipPath = `inset(${insetTop}% 0% 0% 0%)`;
                    }
                }

                if(pZoom && pZoomContent) {
                    const rect = pZoom.parentElement.getBoundingClientRect();
                    if(rect.top < winH && rect.bottom > 0) {
                        const progress = Math.max(0, Math.min(1, (winH - rect.top) / winH));
                        const scale = 1 + (progress * 0.2);
                        pZoom.style.transform = `scale(${scale})`;
                        
                        // 흐릿한 상태에서 점차 선명해지도록 설정 (스크롤이 내려갈수록 opacity는 1로, blur는 0으로)
                        const opacity = Math.min(1, progress * 2.5);
                        const blur = Math.max(0, 15 - (progress * 30));
                        
                        pZoomContent.style.opacity = opacity;
                        pZoomContent.style.filter = `blur(${blur}px)`;
                    }
                }
            });

            const typeText = "Stop dipping.\nJust eat it.";
            const typeTarget = document.getElementById('typewriter-target');
            const typeCursor = document.getElementById('typewriter-cursor');
            let typeStarted = false;

            const typeObserver = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting && !typeStarted) {
                    typeStarted = true;
                    typeCursor.style.display = 'inline-block';
                    let i = 0;
                    let isDeleting = false;
                    
                    function typeLoop() {
                        if (!isDeleting && i <= typeText.length) {
                            typeTarget.innerHTML = typeText.substring(0, i).replace(/\n/g, '<br>');
                            i++;
                            if (i <= typeText.length) {
                                setTimeout(typeLoop, Math.random() * 50 + 50);
                            } else {
                                isDeleting = true;
                                setTimeout(typeLoop, 2000);
                            }
                        } else if (isDeleting && i >= 0) {
                            typeTarget.innerHTML = typeText.substring(0, i).replace(/\n/g, '<br>');
                            i--;
                            if (i >= 0) {
                                setTimeout(typeLoop, 30);
                            } else {
                                isDeleting = false;
                                i = 0;
                                setTimeout(typeLoop, 500);
                            }
                        }
                    }
                    setTimeout(typeLoop, 500);
                }
            }, { threshold: 0.5 });
            
            if(typeTarget && typeCursor) {
                typeObserver.observe(typeTarget.parentElement);
            }
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
      
<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://izhlervrsbzdrcyxhhnb.supabase.co/storage/v1/object/public/Gochujang%20Bros/de5ab01f-4533-4092-91f0-054326aca917.mp4"></video>
</div>

<nav className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5 transition-all duration-300">

<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 transition-opacity hover:opacity-80 group" href="home.html">
<div className="w-14 h-8 md:w-16 md:h-10 flex items-center justify-center">
<svg className="w-full h-full text-[#F4E8D1] group-hover:scale-105 transition-transform duration-300" fill="none" viewbox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
<style>
                            .ci-fill { fill: #050505; }
                            .ci-stroke { stroke: currentColor; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
                            .ci-thin { stroke: currentColor; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; fill: none; }
                        </style>
<g className="ci-stroke">
<path className="ci-fill" d="M 30 85 C 15 85 10 70 20 60 C 20 45 40 40 50 50 C 60 45 75 55 70 65 C 80 70 75 85 60 85 Z"></path>
<path className="ci-thin" d="M 40 65 C 30 65 30 75 40 75 C 45 75 45 70 40 70"></path>
<path className="ci-thin" d="M 65 75 Q 85 75 95 65"></path>
</g>
<g className="ci-stroke" transform="translate(280, 0) scale(-1, 1)">
<path className="ci-fill" d="M 30 85 C 15 85 10 70 20 60 C 20 45 40 40 50 50 C 60 45 75 55 70 65 C 80 70 75 85 60 85 Z"></path>
<path className="ci-thin" d="M 40 65 C 30 65 30 75 40 75 C 45 75 45 70 40 70"></path>
<path className="ci-thin" d="M 65 75 Q 85 75 95 65"></path>
</g>
<g className="ci-stroke">
<path d="M 100 20 L 135 20"></path>
<path d="M 95 28 L 140 28"></path>
<path className="ci-fill" d="M 98 30 C 80 55 85 95 105 105 L 130 105 C 150 95 155 55 137 30"></path>
<path className="ci-thin" d="M 97 42 Q 108 35 117.5 42 T 138 42"></path>
</g>
<g className="ci-stroke">
<path d="M 145 20 L 180 20"></path>
<path d="M 140 28 L 185 28"></path>
<path className="ci-fill" d="M 143 30 C 125 55 130 95 150 105 L 175 105 C 195 95 200 55 182 30"></path>
<path className="ci-thin" d="M 142 42 Q 153 35 162.5 42 T 183 42"></path>
</g>
<path className="ci-stroke" d="M 145.5 65 C 143.5 85 137 98 130 105" fill="none"></path>
</svg>
</div>
<span className="uppercase text-base md:text-xl font-extrabold text-[#F4E8D1] tracking-tight mt-0.5">Gochujang Bros.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm md:text-base font-semibold text-zinc-400">
<a className="hover:text-white transition-colors" href="#core-value">Core Value</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#flavors">Flavors</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10 text-xs md:text-sm font-semibold tracking-tight">
<a className="text-white bg-white/10 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm" href="/home">KOR</a>
<a className="hover:text-white transition-colors text-zinc-500 rounded-full pt-1.5 pr-3 pb-1.5 pl-3" href="/home-en">ENG</a>
</div>
</div>
</div>

<div className="md:hidden w-full overflow-x-auto whitespace-nowrap border-t border-white/5 px-6 py-3 flex items-center gap-7 text-sm font-semibold text-zinc-400 scrollbar-hide bg-[#050505]/20">
<a className="hover:text-white transition-colors shrink-0" href="#core-value">Core Value</a>
<a className="hover:text-white transition-colors shrink-0" href="#process">Process</a>
<a className="hover:text-white transition-colors shrink-0" href="#flavors">Flavors</a>
<a className="hover:text-white transition-colors shrink-0" href="#pricing">Pricing</a>
</div>
</nav>

<section className="min-h-[calc(100vh-112px)] md:min-h-[calc(100vh-80px)] py-12 flex overflow-hidden w-full relative items-center justify-center">
<div className="flex flex-col text-center w-full max-w-5xl z-10 mx-auto px-6 relative items-center">
<span className="uppercase block text-sm md:text-base text-red-500 tracking-[0.2em] font-semibold mb-6" data-animate="fade-up" data-delay="100" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '100ms'}}>비빔밥 위, 찌개 국물 속... 늘 요리 뒤에 숨어있던 고추장.</span>
<h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.3] md:leading-[1.2] font-extrabold text-white tracking-tight mb-6" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>이제 숟가락을 내려놓고<br/>포장을 뜯으세요.</h1>
<p className="text-zinc-400 text-lg md:text-2xl font-medium mb-12 max-w-2xl px-4" data-animate="fade-up" data-delay="500" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '500ms'}}>
                고추장이 드디어 주인공이 되었습니다.
            </p>
<div data-animate="fade-up" data-delay="700" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '700ms'}}>
<a className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 md:px-8 md:py-5 bg-red-600 text-white text-sm md:text-base font-semibold uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-black cursor-pointer shadow-lg hover:shadow-xl" href="https://smore.im/form/Aw4xqobwco" target="_blank">
<span className="flex items-center gap-2 z-10 relative">
                        지금 바로 고추장칩 출시 알림 받기
                        <iconify-icon className="text-lg md:text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0 bg-white absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
</a>
</div>
</div>
</section>

<section className="relative z-10 pt-24 md:pt-32 pb-24 md:pb-32 bg-[#050505] overflow-hidden" id="core-value">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="bg-center bg-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 md:mb-24" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-4 block">Core Value</span>
<h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.3] md:leading-tight">순창 고추장 원물 사용,<br/>찍어 먹지 않는 '진짜' 고추장 칩</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="relative rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500" data-animate="fade-up" data-delay="100" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '100ms'}}>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<iconify-icon className="text-3xl md:text-4xl text-red-500 mb-6 block" icon="solar:leaf-linear"></iconify-icon>
<h3 className="text-xl font-extrabold tracking-tight text-white mb-4">원물 그대로의 풍미</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-400">순창 고추장 원물을 그대로 사용해 깊은 매콤함을 구현했습니다.</p>
</div>
<div className="relative rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<iconify-icon className="text-3xl md:text-4xl text-red-500 mb-6 block" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-xl font-extrabold tracking-tight text-white mb-4">조리 없는 K-푸드</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-400">비비고, 끓이고, 찍을 필요 없습니다. 포장만 뜯으면 완성되는 가장 빠른 K-미식입니다.</p>
</div>
<div className="relative rounded-3xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500" data-animate="fade-up" data-delay="500" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '500ms'}}>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<iconify-icon className="text-3xl md:text-4xl text-red-500 mb-6 block" icon="solar:bolt-linear"></iconify-icon>
<h3 className="text-xl font-extrabold tracking-tight text-white mb-4">압도적인 바삭함</h3>
<p className="text-zinc-400 text-base lg:text-lg font-medium leading-relaxed">고추장을 바삭한 칩 형태로 변환시킨 Gochujang Bros만의 특수 공법을 경험하세요.</p>
</div>
</div>
</div>
</section>

<section className="relative min-h-[50vh] md:min-h-[70vh] py-24 flex items-center justify-center bg-[#050505] border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="bg-center opacity-40 mix-blend-luminosity bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ec5d578-dc9a-4550-9861-4f110fd78687_3840w.png')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-b from-[#050505]/5 via-black/70 to-[#050505]/5 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center w-full max-w-4xl mx-auto px-6 relative">
<div data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-6 block border-0">For Whom</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.3] md:leading-[1.2]">왜 고추장은 꼭<br/>'조연'이어야만 했을까요?</h2>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row relative bg-[#050505] border-t border-white/5" id="process">
<div className="lg:w-5/12 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] flex flex-col px-8 py-16 md:p-12 lg:p-20 bg-[#050505] z-20 border-white/5 border-b lg:border-b-0 lg:border-r justify-center">
<span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-6 block border-l-2 border-red-500 pl-3">Process</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-extrabold text-white tracking-tight mb-8">장독대에서<br/>스낵 칩이 되기까지,<br/>고추장의 진화</h2>
<div className="hidden lg:flex flex-col mt-6 space-y-5">
<div className="process-indicator text-lg lg:text-xl font-medium flex items-center gap-4 transition-colors duration-300" id="ind-1">
<span className="w-2.5 h-2.5 rounded-full transition-all duration-300 text-zinc-600"></span> Selection
                </div>
<div className="process-indicator text-lg lg:text-xl font-medium flex items-center gap-4 transition-colors duration-300" id="ind-2">
<span className="w-2.5 h-2.5 rounded-full transition-all duration-300 text-zinc-600"></span> Infusion
                </div>
<div className="process-indicator text-lg lg:text-xl font-medium flex items-center gap-4 transition-colors duration-300" id="ind-3">
<span className="w-2.5 h-2.5 rounded-full transition-all duration-300 text-zinc-600"></span> Baking
                </div>
<div className="process-indicator text-lg lg:text-xl font-medium flex items-center gap-4 transition-colors duration-300" id="ind-4">
<span className="w-2.5 h-2.5 rounded-full transition-all duration-300 text-zinc-600"></span> Main Stage
                </div>
</div>
</div>
<div className="lg:w-7/12 flex flex-col relative z-10">
<div className="process-block min-h-[60vh] lg:min-h-screen flex flex-col p-8 md:p-16 lg:p-24 transition-opacity duration-700 bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3579c78a-bfc2-438b-829d-51caf33c48d4_3840w.png)] bg-cover border-white/5 border-b justify-center" data-index="1">
<div className="text-red-500 font-semibold text-xl md:text-2xl mb-4">01</div>
<h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">Selection</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-300 max-w-md">100% 국산 쌀로 만든 전통 순창 고추장을 베이스로 선정합니다. 가장 깊고 진한 맛을 내는 원물만을 고집합니다.</p>
</div>
<div className="process-block min-h-[60vh] lg:min-h-screen flex flex-col p-8 md:p-16 lg:p-24 transition-opacity duration-700 bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b563c5e-4726-40d3-8202-6e61c282f142_1600w.png)] bg-cover border-white/5 border-b justify-center" data-index="2">
<div className="text-red-500 font-semibold text-xl md:text-2xl mb-4">02</div>
<h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">Infusion</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-300 max-w-md">고추장의 깊은 감칠맛을 칩 한 조각에 응축시킵니다. 겉도는 가루가 아닌, 원물 자체가 반죽에 스며듭니다.</p>
</div>
<div className="process-block min-h-[60vh] lg:min-h-screen flex flex-col p-8 md:p-16 lg:p-24 transition-opacity duration-700 bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba211b23-c09e-4a68-8199-fa2a3b2a5835_1600w.png)] bg-cover border-white/5 border-b justify-center" data-index="3">
<div className="text-red-500 font-semibold text-xl md:text-2xl mb-4">03</div>
<h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">Baking</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-300 max-w-md">고추장의 원물 함량(20%)을 유지하면서도 타지 않게 바삭하게 구워냅니다. 튀기지 않아 깔끔한 끝맛을 자랑합니다.</p>
</div>
<div className="process-block min-h-[60vh] lg:min-h-screen flex flex-col p-8 md:p-16 lg:p-24 transition-opacity duration-700 bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac59cfb0-874b-4fab-b7cd-8e812d72f6c6_1600w.png)] bg-cover border-white/5 border-b justify-center" data-index="4">
<div className="text-red-500 font-semibold text-xl md:text-2xl mb-4">04</div>
<h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4">Main Stage</h3>
<p className="text-base lg:text-lg leading-relaxed font-medium text-zinc-300 max-w-md">이제 고추장은 요리의 재료가 아닌, 당신의 메인 스낵이 됩니다. 언제 어디서든 바삭하게 즐기세요.</p>
</div>
</div>
</section>

<section className="min-h-[80vh] md:min-h-[100vh] py-24 md:py-32 relative flex items-center justify-center bg-[#020202] overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="bg-center bg-[#0A0A0A] w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63346bfa-727d-40f9-b1f5-7e284085ddd2_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0" id="reveal-img-container" style={{clipPath: 'inset(0%)'}}></div>
<div className="bg-gradient-to-t from-[#020202] via-transparent to-[#020202] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/822fc792-bde9-45b0-83a3-607eab2dff0a_3840w.png)] bg-cover bg-center absolute inset-0 pointer-events-none"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.3]" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>장독대 속에서 꺼낸<br/>바삭한 반전</h2>
<p className="text-zinc-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed px-4" data-animate="fade-up" data-delay="200" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '200ms'}}>
                지금까지 고추장은 찌개 국물을 내거나 밥을 비빌 때만 쓰였습니다. 우리는 그 고정관념을 깼습니다. 국물 속에 숨어있던 고추장의 진한 풍미를 입안 가득 바삭하게 터뜨려 보세요.
            </p>
</div>
</section>

<section className="min-h-[80vh] md:min-h-[100vh] py-24 md:py-32 relative flex items-center justify-center overflow-hidden bg-black border-y border-white/5">
<div className="parallax-zoom bg-center opacity-30 bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1596649281566-b33a763864a7?q=80&amp', transform: 'scale(1)', transition: 'transform 0.1s ease-out'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-transparent pointer-events-none"></div>
<div className="parallax-content text-center max-w-3xl mx-auto px-6 relative z-10" style={{opacity: '0', filter: 'blur(15px)', transition: 'opacity 0.1s ease-out, filter 0.1s ease-out', textShadow: '0 4px 30px rgba(0, 0, 0, 1), 0 2px 8px rgba(0,0,0,0.8)'}}>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-8 leading-[1.3]">순창 고추장 원물의<br/>압도적 존재감</h2>
<p className="text-zinc-300 text-base md:text-lg lg:text-xl font-medium leading-relaxed px-4">
                '고추장 향'만 입힌 과자가 아닙니다. 한국인이 가장 사랑하는 발효된 매운맛의 정수를 보여줍니다. 칩 한 조각에서 비빔밥의 그 짜릿한 첫 입을 느낄 수 있습니다.
            </p>
</div>
</section>

<section className="min-h-[60vh] flex flex-col bg-center overflow-hidden text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8af7618-9b6b-4718-951b-69b490c9e1d7_3840w.png)] bg-cover pt-32 pr-6 pb-32 pl-6 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/95 to-white/10 z-0 pointer-events-none"></div>
<div className="z-10 w-full max-w-4xl relative">
<div className="overflow-hidden mb-6">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight py-2" data-animate="clip-text" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)', transitionDuration: '1.4s', transitionDelay: '0ms', clipPath: 'inset(0px 100% 0px 0px)'}}>찍어 먹는 소스에서</h2>
</div>
<div className="overflow-hidden mb-10">
<p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300 text-center max-w-2xl mx-auto mb-8 px-4" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>고추장은 오랫동안 무언가를 찍어 먹기 위한 도구였습니다. 하지만 Gochujang Bros의 칩은 그 자체로 완벽합니다. 준비할 필요 없이, 언제 어디서든 고추장의 매력을 다이렉트로 즐기세요.</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-red-500 leading-tight py-2" data-animate="clip-text" data-delay="150" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1)', transitionDuration: '1.4s', transitionDelay: '150ms', clipPath: 'inset(0px 100% 0px 0px)'}}>'그냥 먹는 스낵'으로</h2>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#020202] relative overflow-hidden border-t border-white/5" id="flavors">
<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">

<div className="text-center mb-16 md:mb-24" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<span className="text-sm md:text-base uppercase block font-semibold text-red-500 tracking-[0.2em] mb-4">전통에서, 당신의 취향으로</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.3]">당신의 취향을 선택하세요</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

<div className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)] flex flex-col" data-animate="fade-up" data-delay="100" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '100ms'}}>
<div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden flex items-center justify-center p-8 bg-black/50">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Original Gochujang" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-90 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de21fbfb-af3a-4efe-8a78-3313f62959ca_800w.png"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 -mt-10 bg-gradient-to-t from-[#0a0a0a] from-80% to-transparent">
<span className="text-xs md:text-sm font-semibold tracking-widest text-red-500 uppercase mb-3 drop-shadow-md">시그니처</span>
<h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">오리지널</h3>
<p className="text-base md:text-lg font-medium text-zinc-400 leading-relaxed">발효 고추장의 본질을 그대로<br/>깊고 진하며, 타협하지 않는 강렬한 맛.</p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)] flex flex-col" data-animate="fade-up" data-delay="200" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '200ms'}}>
<div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden flex items-center justify-center p-8 bg-black/50">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Chocolate Gochujang" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-90 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f14c9e2-3237-46a2-a12a-8875beefc667_800w.png"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 -mt-10 bg-gradient-to-t from-[#0a0a0a] from-80% to-transparent">
<span className="text-xs md:text-sm font-semibold tracking-widest text-red-500 uppercase mb-3 drop-shadow-md">예상 밖의 조합</span>
<h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">초콜릿</h3>
<p className="text-base md:text-lg font-medium text-zinc-400 leading-relaxed">달콤함과 매운맛의 만남.<br/>코코아의 풍부함과 고추장의 매콤함이 만들어낸 균형.</p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(220,38,38,0.3)] flex flex-col" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>
<div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden flex items-center justify-center p-8 bg-black/50">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Tomato Gochujang" className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-90 drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4ce191d-7a4c-4367-a4eb-91b554da9c9b_800w.png"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow relative z-20 -mt-10 bg-gradient-to-t from-[#0a0a0a] from-80% to-transparent">
<span className="text-xs md:text-sm font-semibold tracking-widest text-red-500 uppercase mb-3 drop-shadow-md">산뜻한 변주</span>
<h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">토마토</h3>
<p className="text-base md:text-lg font-medium text-zinc-400 leading-relaxed">상큼하고 가벼운 산미.<br/>고추장의 풍미를 더 산뜻하게 즐기는 새로운 방식.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 relative bg-[#020202] border-t border-white/5" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 md:mb-24" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-4 block">Pricing</span>
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.3]">주인공을 맞이하는<br/>얼리버드 혜택</h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
<div className="border border-white/5 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl flex flex-col relative group hover:border-white/20 transition-colors duration-300" data-animate="fade-up" data-delay="100" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '100ms'}}>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Taste Starter</h4>
<p className="text-zinc-500 text-sm md:text-base font-medium mt-3 mb-8">고추장칩 오리지널 2봉</p>
<div className="text-3xl md:text-4xl font-extrabold text-white mt-auto mb-2 font-mono tracking-tight">₩6,900</div>
</div>
<div className="border border-red-500/30 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl flex flex-col relative overflow-hidden lg:-translate-y-4 shadow-[0_0_50px_rgba(220,38,38,0.1)]" data-animate="fade-up" data-delay="200" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '200ms'}}>
<div className="absolute top-0 inset-x-0 h-1 bg-red-600"></div>
<div className="absolute top-6 right-6 md:right-8 text-xs md:text-sm font-semibold uppercase tracking-widest text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">Most Popular</div>
<h4 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mt-10 md:mt-0 pr-24 md:pr-0">Main Character</h4>
<p className="text-zinc-400 text-sm md:text-base font-medium mt-3 mb-8">고추장칩 5봉 + 한정판 스낵 집게</p>
<div className="text-4xl md:text-5xl font-extrabold text-white mt-auto mb-2 font-mono tracking-tight">₩18,900</div>
</div>
<div className="border border-white/5 bg-[#0A0A0A] p-8 md:p-12 rounded-3xl flex flex-col relative group hover:border-white/20 transition-colors duration-300" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-white">Bros Bundle</h4>
<p className="text-zinc-500 text-sm md:text-base font-medium mt-3 mb-8">고추장칩 10봉 (무료배송)</p>
<div className="text-3xl md:text-4xl font-extrabold text-white mt-auto mb-2 font-mono tracking-tight">₩29,900</div>
</div>
</div>

<div className="mt-20 md:mt-24 text-center flex flex-col items-center justify-center" data-animate="fade-up" data-delay="400" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '400ms'}}>
<a className="relative group inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-6 bg-red-600 text-white font-semibold text-base md:text-lg tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer" href="https://smore.im/form/Aw4xqobwco" target="_blank">
<span className="relative z-10 flex items-center gap-3">
                        출시 알림 받기
                        <iconify-icon className="text-xl md:text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</a>
<p className="mt-8 text-sm md:text-base text-zinc-400 font-medium leading-relaxed">한정된 첫 생산 물량.<br className="block sm:hidden"/>가장 먼저 경험해보세요.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden flex flex-col items-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>
<div className="w-full relative z-10">
<div className="text-center mb-16 md:mb-20 px-6" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<span className="text-red-500 text-sm md:text-base tracking-[0.2em] uppercase font-semibold mb-4 block">TESTIMONIALS</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.3] font-extrabold text-white tracking-tight">고추장의 변신을 경험한<br/>사람들의 이야기</h2>
</div>

<div className="relative z-10 w-full overflow-hidden">
<div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>
<div className="flex gap-6 w-max animate-scroll-left px-6 py-4">

<div className="flex gap-6 shrink-0">
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"항상 냉장고에 있던 고추장이 이제 제 간식이 됐어요. 영화 볼 때 이거 하나면 다른 안주 생각이 안 납니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">K</div>
<span className="text-sm font-medium text-zinc-500">얼리버드 테스터 K님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"비빔밥 해 먹기 귀찮을 때 이거 한 봉지면 끝이에요. 고추장 생각날 때 바로 해결됩니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">L</div>
<span className="text-sm font-medium text-zinc-500">베타 테스터 L님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"처음엔 반신반의했는데 한 입 먹고 바로 이해됐어요. 이게 그냥 과자가 아니라 '고추장'이네요."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">M</div>
<span className="text-sm font-medium text-zinc-500">테스터 M님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"맥주랑 같이 먹었는데 진짜 미쳤어요. 짭짤한 안주보다 훨씬 중독성 있습니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">J</div>
<span className="text-sm font-medium text-zinc-500">테스터 J님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"이건 매운맛 과자가 아니라 완전히 다른 카테고리 같아요. 한국 음식의 맛을 과자로 만든 느낌."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">S</div>
<span className="text-sm font-medium text-zinc-500">테스터 S님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"고추장이 이렇게 가벼워질 수 있다는 게 신기했어요. 어릴 때 먹던 맛이 완전히 새롭게 느껴집니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">H</div>
<span className="text-sm font-medium text-zinc-500">테스터 H님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"주변 사람들한테 다 나눠줬는데 반응이 다 똑같아요. '이거 뭐냐'고 계속 물어봅니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">P</div>
<span className="text-sm font-medium text-zinc-500">테스터 P님</span>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6 shrink-0">
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"항상 냉장고에 있던 고추장이 이제 제 간식이 됐어요. 영화 볼 때 이거 하나면 다른 안주 생각이 안 납니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">K</div>
<span className="text-sm font-medium text-zinc-500">얼리버드 테스터 K님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"비빔밥 해 먹기 귀찮을 때 이거 한 봉지면 끝이에요. 고추장 생각날 때 바로 해결됩니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">L</div>
<span className="text-sm font-medium text-zinc-500">베타 테스터 L님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"처음엔 반신반의했는데 한 입 먹고 바로 이해됐어요. 이게 그냥 과자가 아니라 '고추장'이네요."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">M</div>
<span className="text-sm font-medium text-zinc-500">테스터 M님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"맥주랑 같이 먹었는데 진짜 미쳤어요. 짭짤한 안주보다 훨씬 중독성 있습니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">J</div>
<span className="text-sm font-medium text-zinc-500">테스터 J님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"이건 매운맛 과자가 아니라 완전히 다른 카테고리 같아요. 한국 음식의 맛을 과자로 만든 느낌."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">S</div>
<span className="text-sm font-medium text-zinc-500">테스터 S님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"고추장이 이렇게 가벼워질 수 있다는 게 신기했어요. 어릴 때 먹던 맛이 완전히 새롭게 느껴집니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">H</div>
<span className="text-sm font-medium text-zinc-500">테스터 H님</span>
</div>
</div>
<div className="w-[300px] md:w-[400px] min-h-[250px] p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:scale-105 transition-transform duration-300 hover:bg-white/[0.04] flex flex-col shadow-lg">
<iconify-icon className="text-3xl md:text-4xl text-zinc-700 mb-6 block" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-zinc-300 text-base md:text-lg font-medium leading-relaxed mb-8 break-keep">"주변 사람들한테 다 나눠줬는데 반응이 다 똑같아요. '이거 뭐냐'고 계속 물어봅니다."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-semibold text-zinc-400">P</div>
<span className="text-sm font-medium text-zinc-500">테스터 P님</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#020202] border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.3]">궁금해하실 내용을<br/>미리 담았습니다</h2>
</div>
<div className="space-y-3">
<details className="group border-b border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" data-animate="fade-up" data-delay="100" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '100ms'}}>
<summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-white/[0.02] transition-colors">
<span className="pr-6">Q. 일반 고추장 소스 맛이랑 비슷한가요?</span>
<span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
<span className="absolute w-4 h-[2px] bg-zinc-400 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-[2px] h-4 bg-zinc-400 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-base font-medium leading-relaxed">
                        완전히 같지는 않습니다.<br/>
                        고추장의 풍미를 바탕으로, 스낵으로 즐기기 좋게 더 가볍고 바삭하게 재해석했습니다.
                    </div>
</details>
<details className="group border-b border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" data-animate="fade-up" data-delay="200" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '200ms'}}>
<summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-white/[0.02] transition-colors">
<span className="pr-6">Q. 얼마나 매운가요?</span>
<span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
<span className="absolute w-4 h-[2px] bg-zinc-400 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-[2px] h-4 bg-zinc-400 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-base font-medium leading-relaxed">
                        확실한 매운맛은 있지만, 극단적으로 자극적인 수준은 아닙니다.<br/>
                        단순히 강하게 맵기만 한 것이 아니라,<br/>
                        감칠맛과 깊이가 함께 느껴지는 레이어드된 매운맛입니다.
                    </div>
</details>
<details className="group border-b border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>
<summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-white/[0.02] transition-colors">
<span className="pr-6">Q. 시즈닝 가루처럼 손에 묻나요?</span>
<span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
<span className="absolute w-4 h-[2px] bg-zinc-400 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-[2px] h-4 bg-zinc-400 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-base font-medium leading-relaxed">
                        아니요.<br/>
                        고추장 풍미를 칩에 직접 블렌딩해 구워냈기 때문에<br/>
                        가루 날림 없이 깔끔하게 즐길 수 있습니다.
                    </div>
</details>
<details className="group border-b border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" data-animate="fade-up" data-delay="400" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '400ms'}}>
<summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-white/[0.02] transition-colors">
<span className="pr-6">Q. 다른 매운 칩과 뭐가 다른가요?</span>
<span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
<span className="absolute w-4 h-[2px] bg-zinc-400 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-[2px] h-4 bg-zinc-400 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-base font-medium leading-relaxed">
                        이 제품은 시즈닝 파우더 대신, 고추장의 풍미를 그대로 칩에 블렌딩해 만들어집니다.<br/>
                        그래서 단순한 자극적인 매운맛이 아니라, 더 깊고 균형 잡힌 맛을 느낄 수 있습니다.
                    </div>
</details>
<details className="group border-b border-white/5 bg-[#0A0A0A] rounded-2xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden" data-animate="fade-up" data-delay="500" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '500ms'}}>
<summary className="flex items-center justify-between cursor-pointer p-6 md:p-8 list-none text-base md:text-lg lg:text-xl font-semibold text-white hover:bg-white/[0.02] transition-colors">
<span className="pr-6">Q. 어떻게 먹는 게 좋나요?</span>
<span className="relative w-6 h-6 flex-shrink-0 flex items-center justify-center">
<span className="absolute w-4 h-[2px] bg-zinc-400 transition-transform duration-300 group-open:rotate-180"></span>
<span className="absolute w-[2px] h-4 bg-zinc-400 transition-transform duration-300 group-open:rotate-90"></span>
</span>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 text-zinc-400 text-base font-medium leading-relaxed">
                        그냥 바로 먹어도 좋고,<br/>
                        딥에 찍어 먹거나, 핑거푸드에 곁들이거나,<br/>
                        부숴서 토핑으로 활용해도 좋습니다.
                    </div>
</details>
</div>
</div>
</section>

<section className="flex flex-col min-h-[60vh] md:min-h-[80vh] py-24 px-6 text-center border-white/5 border-t relative items-center justify-center">
<div className="max-w-4xl mb-12 md:mb-16" data-animate="fade-up" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '0ms'}}>
<p className="text-zinc-400 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-6">
                고추장은 수 세기 동안 한국 식탁의 든든한 조연이었습니다. 하지만 우리는 믿었습니다.<br className="hidden md:block"/>
                고추장 그 자체가 가진 폭발적인 감칠맛은 충분히 주인공이 될 자격이 있다는 것을요.
            </p>
<p className="text-zinc-300 text-base md:text-lg lg:text-xl font-medium">Gochujang Bros는 전통의 맛을 현대의 리듬으로 재해석합니다.</p>
</div>
<div className="flex flex-col items-center justify-center gap-10 md:gap-14 w-full px-4">
<div className="flex min-h-[4rem] md:min-h-[5rem] w-full items-center justify-center text-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight inline-block text-center">
<span className="break-words" id="typewriter-target"></span>
<span className="w-[3px] md:w-[4px] h-[0.9em] bg-red-500 ml-2 animate-pulse inline-block align-middle" id="typewriter-cursor"></span>
</h2>
</div>
<div data-animate="fade-up" data-delay="300" style={{transitionProperty: 'all', transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)', transitionDuration: '1.2s', transitionDelay: '300ms'}}>
<a className="relative group inline-flex items-center justify-center px-8 py-4 md:px-14 md:py-6 bg-red-600 text-white font-semibold text-base md:text-lg tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(220,38,38,0.2)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer" href="https://smore.im/form/Aw4xqobwco" target="_blank">
<span className="relative z-10 flex items-center gap-3">
                        고추장칩 출시 알림 받기
                        <iconify-icon className="text-xl md:text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
</a>
</div>
</div>
</section>

<footer className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 bg-[#020202] border-t border-white/5">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-12 md:gap-16">
<div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
<a className="inline-flex flex-col items-center md:items-start gap-3 md:gap-4 mb-6 md:mb-8 transition-opacity hover:opacity-90 group" href="#">
<div className="w-32 h-14 md:w-48 md:h-20 lg:w-64 lg:h-28 flex items-center justify-center mb-1 md:mb-2">
<svg className="w-full h-full text-[#F4E8D1] group-hover:scale-105 transition-transform duration-500 ease-out" fill="none" viewbox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
<style>
                                .ci-fill { fill: #050505; }
                                .ci-stroke { stroke: currentColor; stroke-width: 6; stroke-linecap: round; stroke-linejoin: round; }
                                .ci-thin { stroke: currentColor; stroke-width: 4; stroke-linecap: round; stroke-linejoin: round; fill: none; }
                            </style>
<g className="ci-stroke">
<path className="ci-fill" d="M 30 85 C 15 85 10 70 20 60 C 20 45 40 40 50 50 C 60 45 75 55 70 65 C 80 70 75 85 60 85 Z"></path>
<path className="ci-thin" d="M 40 65 C 30 65 30 75 40 75 C 45 75 45 70 40 70"></path>
<path className="ci-thin" d="M 65 75 Q 85 75 95 65"></path>
</g>
<g className="ci-stroke" transform="translate(280, 0) scale(-1, 1)">
<path className="ci-fill" d="M 30 85 C 15 85 10 70 20 60 C 20 45 40 40 50 50 C 60 45 75 55 70 65 C 80 70 75 85 60 85 Z"></path>
<path className="ci-thin" d="M 40 65 C 30 65 30 75 40 75 C 45 75 45 70 40 70"></path>
<path className="ci-thin" d="M 65 75 Q 85 75 95 65"></path>
</g>
<g className="ci-stroke">
<path d="M 100 20 L 135 20"></path>
<path d="M 95 28 L 140 28"></path>
<path className="ci-fill" d="M 98 30 C 80 55 85 95 105 105 L 130 105 C 150 95 155 55 137 30"></path>
<path className="ci-thin" d="M 97 42 Q 108 35 117.5 42 T 138 42"></path>
</g>
<g className="ci-stroke">
<path d="M 145 20 L 180 20"></path>
<path d="M 140 28 L 185 28"></path>
<path className="ci-fill" d="M 143 30 C 125 55 130 95 150 105 L 175 105 C 195 95 200 55 182 30"></path>
<path className="ci-thin" d="M 142 42 Q 153 35 162.5 42 T 183 42"></path>
</g>
<path className="ci-stroke" d="M 145.5 65 C 143.5 85 137 98 130 105" fill="none"></path>
</svg>
</div>
<span className="text-[#F4E8D1] font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight uppercase leading-none">Gochujang Bros.</span>
<span className="text-[10px] sm:text-xs md:text-sm uppercase font-semibold text-[#F4E8D1]/80 tracking-widest mt-1">Est. 2026 • Traditional Soul, Modern Crunch</span>
</a>
<p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed mt-2">
                    대표: 공원표, 오현수, 이승규<br/>
                    이메일: support@gochujangbros.com
                </p>
</div>
<div className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto mt-4 md:mt-0">
<a className="text-zinc-400 hover:text-white transition-colors text-base md:text-lg lg:text-xl flex items-center gap-2 md:gap-3 font-medium group" href="#">
<iconify-icon className="text-xl md:text-2xl group-hover:text-red-500 transition-colors" icon="solar:hashtag-linear"></iconify-icon>
                    @gochujang_bros_official
                </a>
<p className="md:text-sm md:mt-8 uppercase text-xs font-semibold text-zinc-600 tracking-widest mt-6">Copyright 2026 Gochujang Bros. All Rights Reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center opacity-0 transition-opacity duration-300" id="preorder-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer" onclick="closePreorderModal()"></div>
<div className="relative w-full max-w-[420px] h-[85vh] max-h-[800px] bg-white rounded-2xl shadow-2xl scale-95 transition-transform duration-300 z-10 overflow-hidden mx-4 flex flex-col" id="preorder-modal-content">
<button className="absolute top-4 right-4 z-20 p-2 bg-black/5 hover:bg-black/10 rounded-full text-black transition-colors backdrop-blur-md flex items-center justify-center cursor-pointer" onclick="closePreorderModal()">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<div className="w-full h-full -webkit-overflow-scrolling-touch overflow-y-auto bg-[#fafafa]">
<iframe allowfullscreen="" height="100%" src="https://smore.im/form/Aw4xqobwco" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>



    </>
  );
}
