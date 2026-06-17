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



        gsap.registerPlugin(ScrollTrigger);

        // Text Reveal Animation for large headings
        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(el => {
            const text = el.innerHTML;
            const lines = text.split('<br>').map(line => {
                return `<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block translate-y-[110%] reveal-word">${line}</span></span>`;
            }).join('<br>');
            el.innerHTML = lines;

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 1,
                stagger: 0.1,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Parallax Images
        gsap.utils.toArray('.parallax-img').forEach(img => {
            gsap.to(img, {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });

        // Fade in sections
        gsap.utils.toArray('section').forEach(section => {
            gsap.fromTo(section, 
                { opacity: 0, y: 30 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });

        // Venn Diagram Hover Effects
        const vennInteractions = [
            { circle: 'circle-market', list: 'list-market', bullet: 'bullet-market' },
            { circle: 'circle-customer', list: 'list-customer', bullet: 'bullet-customer' },
            { circle: 'circle-company', list: 'list-company', bullet: 'bullet-company' }
        ];

        vennInteractions.forEach(({ circle, list, bullet }) => {
            const circleEl = document.getElementById(circle);
            const listEl = document.getElementById(list);
            const bulletEl = document.getElementById(bullet);

            if (circleEl && listEl && bulletEl) {
                circleEl.addEventListener('mouseenter', () => {
                    listEl.classList.add('text-red-600');
                    bulletEl.classList.add('bg-red-600');
                    bulletEl.classList.remove('bg-zinc-300');
                });
                circleEl.addEventListener('mouseleave', () => {
                    listEl.classList.remove('text-red-600');
                    bulletEl.classList.remove('bg-red-600');
                    bulletEl.classList.add('bg-zinc-300');
                });
            }
        });

        // Footer Logo Hover Effect
        const contactLink = document.getElementById('contact-link');
        const footerLogo = document.getElementById('footer-logo');

        if (contactLink && footerLogo) {
            contactLink.addEventListener('mouseenter', () => {
                footerLogo.classList.remove('text-zinc-200');
                footerLogo.classList.add('text-red-600');
            });
            contactLink.addEventListener('mouseleave', () => {
                footerLogo.classList.remove('text-red-600');
                footerLogo.classList.add('text-zinc-200');
            });
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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between border-x border-zinc-100">
<div className="h-full border-r border-zinc-100 w-1/3 hidden md:block"></div>
<div className="h-full border-r border-zinc-100 w-1/3 hidden md:block"></div>
</div>
</div>

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100/50 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
<div className="text-sm tracking-tight font-[800] uppercase text-zinc-900">
                GOCHUJANG BROS
            </div>
<div className="flex gap-4 text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</header>
<main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<section className="min-h-screen flex flex-col justify-between pt-32 pb-12">
<div className="flex-grow flex flex-col justify-center max-w-5xl">
<h1 className="reveal-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight font-[800] leading-tight mb-6 text-zinc-900"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] reveal-word">
                    Stop cooking it.</span></span><br/><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] reveal-word">
<span className="text-red-600">Just eat it.</span>
</span></span></h1>
<p className="text-lg md:text-2xl lg:text-3xl tracking-tight text-zinc-500 mb-12 font-[500]">
                    From ingredient to snack
                </p>
<div className="w-full relative overflow-hidden rounded-sm group mt-4 border border-zinc-100 bg-zinc-50">
<img alt="Woman Enjoying Spicy Crispy Snack" className="w-full h-auto block brightness-95 contrast-110 transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d9c5942-d7a9-42b9-8996-38bf83bc126b_1600w.png"/>
<div className="bg-gradient-to-t from-white via-transparent to-transparent absolute inset-0 pointer-events-none"></div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-12 pt-6 border-t border-zinc-200">
<p className="text-sm md:text-base text-zinc-500 max-w-sm mb-4 md:mb-0 leading-relaxed font-[600]">
                    고추장을 요리재료에서<br/>‘바로 먹는 스낵’으로 전환
                </p>
<div className="flex items-center gap-2 text-zinc-500">
<span className="text-xs uppercase tracking-widest font-[600]">Scroll to explore</span>
<iconify-icon className="text-lg animate-bounce" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-40 border-t border-zinc-200 min-h-screen flex flex-col justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs uppercase tracking-widest text-zinc-400 block mb-6 font-[600]">The Problem</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[800] leading-tight mb-8 text-zinc-900">
                        The missing<br/>connection
                    </h2>
<p className="text-lg md:text-2xl tracking-tight text-zinc-600 mb-12 font-[600]">
                        Everything exists <br/>— but nothing connects.
                    </p>
<ul className="space-y-6 text-sm md:text-base text-zinc-600 font-[500] border-l border-zinc-200 pl-6 leading-relaxed">
<li className="relative transition-colors duration-300" id="list-market">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 bg-zinc-300 rounded-full transition-colors duration-300" id="bullet-market"></span>
                            K-food는 빠르게 성장하고 있지만,<br/>진짜 발효의 맛은 제대로 소비되지 않음
                        </li>
<li className="relative transition-colors duration-300" id="list-customer">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 bg-zinc-300 rounded-full transition-colors duration-300" id="bullet-customer"></span>
                            미국 소비자는 매운맛, 발효, 칩을 모두 선호하지만<br/>연결된 소비 경험은 없음
                        </li>
<li className="relative transition-colors duration-300" id="list-company">
<span className="absolute -left-[29px] top-2 w-1.5 h-1.5 bg-zinc-300 rounded-full transition-colors duration-300" id="bullet-company"></span>
                            우리는 발효 기술과 제품을 보유하고 있지만,<br/>이를 연결하는 형태가 없음
                        </li>
</ul>
</div>

<div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center scale-90 sm:scale-100 mt-12 lg:mt-0">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-zinc-200 bg-white/80 flex items-start justify-center pt-6 sm:pt-8 z-10 backdrop-blur-sm transition-colors hover:border-zinc-400 shadow-sm cursor-default" id="circle-market">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-[600] pointer-events-none">Market</span>
</div>
<div className="absolute bottom-12 left-0 sm:left-4 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-zinc-200 bg-white/80 flex items-end justify-start pb-12 sm:pb-16 pl-6 sm:pl-8 z-20 backdrop-blur-sm transition-colors hover:border-zinc-400 shadow-sm cursor-default" id="circle-customer">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-[600] pointer-events-none">Customer</span>
</div>
<div className="absolute bottom-12 right-0 sm:right-4 w-48 h-48 sm:w-64 sm:h-64 rounded-full border-2 border-zinc-200 bg-white/80 flex items-end justify-end pb-12 sm:pb-16 pr-6 sm:pr-8 z-30 backdrop-blur-sm transition-colors hover:border-zinc-400 shadow-sm cursor-default" id="circle-company">
<span className="text-xs uppercase tracking-widest text-zinc-400 font-[600] pointer-events-none">Company</span>
</div>

<div className="absolute inset-0 flex items-center justify-center z-40 mt-8 pointer-events-none">
<div className="w-32 sm:w-40 text-center">
<p className="text-xs sm:text-sm font-[800] text-red-600 tracking-tight leading-relaxed break-keep">
                                문제는 수요가 아니라,<br/>연결되지 않는 구조
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-zinc-200 text-center">
<h2 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[800] leading-tight mb-6 max-w-4xl mx-auto text-zinc-900"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] reveal-word">
                Now you can eat</span></span><br/><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] reveal-word">real gochujang.
            </span></span></h2>
<p className="text-lg md:text-2xl lg:text-3xl tracking-tight text-zinc-600 mb-6 font-[500]">
                No cooking. No preparation. Just eat it.
            </p>
<p className="text-sm text-zinc-400 tracking-tight mb-16 font-[600]">
                이제 고추장을 요리하지 않고, 바로 먹을 수 있습니다
            </p>
<div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden rounded-sm group bg-zinc-50 flex items-center justify-center border border-zinc-100">
<img alt="Exploding Spicy Chips and Chili Pot" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-1000 parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6af28cf7-1ad2-4312-ae10-206a2675e98d_1600w.png"/>
<div className="relative z-10 text-center p-6 sm:p-8 backdrop-blur-md bg-white/90 border border-black/5 rounded-sm mx-4 shadow-xl">
<span className="text-xs uppercase tracking-widest text-zinc-500 mb-2 block font-[600]">Premium Product</span>
<h3 className="text-xl sm:text-2xl md:text-4xl tracking-tight font-[800] text-zinc-900">Gochujang Chips</h3>
</div>
</div>
</section>

<section className="py-24 md:py-40 border-t border-zinc-200">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
<div>
<span className="text-xs uppercase tracking-widest text-zinc-400 block mb-6 font-[600]">How It Works</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[800] leading-tight text-zinc-900">
                        How we make<br/><span className="text-red-600">it possible</span>
</h2>
</div>
<p className="text-base md:text-xl lg:text-2xl tracking-tight text-zinc-600 max-w-sm text-left md:text-right border-l md:border-l-0 md:border-r border-zinc-200 pl-4 md:pl-0 md:pr-4 py-2 font-[500]">
                    We didn’t change the flavor —<br/>we changed the format.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-zinc-200">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50/80 transition-colors group">
<span className="text-xs font-[800] text-zinc-300 mb-8 block">01</span>
<div className="h-12 w-12 border border-zinc-200 rounded-full flex items-center justify-center mb-8 group-hover:border-zinc-900 transition-colors bg-white">
<iconify-icon className="text-xl text-zinc-900" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-[800] mb-4 text-zinc-900">Real Gochujang</h3>
<p className="text-sm text-zinc-500 font-[500] leading-relaxed break-keep">
                        실제 발효 고추장을 기반으로 만든 스낵<br className="hidden sm:block"/>(시즈닝이 아닌 원물 활용)
                    </p>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50/80 transition-colors group">
<span className="text-xs font-[800] text-zinc-300 mb-8 block">02</span>
<div className="h-12 w-12 border border-zinc-200 rounded-full flex items-center justify-center mb-8 group-hover:border-zinc-900 transition-colors bg-white">
<iconify-icon className="text-xl text-zinc-900" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-[800] mb-4 text-zinc-900">Ready-to-Eat</h3>
<p className="text-sm text-zinc-500 font-[500] leading-relaxed break-keep">
                        조리 없이 바로 섭취 가능
                    </p>
</div>

<div className="p-8 md:p-12 hover:bg-zinc-50/80 transition-colors group">
<span className="text-xs font-[800] text-zinc-300 mb-8 block">03</span>
<div className="h-12 w-12 border border-zinc-200 rounded-full flex items-center justify-center mb-8 group-hover:border-zinc-900 transition-colors bg-white">
<iconify-icon className="text-xl text-zinc-900" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl tracking-tight font-[800] mb-4 text-zinc-900">Snack Format</h3>
<p className="text-sm text-zinc-500 font-[500] leading-relaxed break-keep">
                        미국인이 가장 익숙한 칩 형태로 구현
                    </p>
</div>
</div>
</section>

<section className="py-24 md:py-40 border-t border-zinc-200 bg-zinc-50 relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 overflow-hidden">

<div className="absolute inset-0 z-0 flex flex-col justify-center gap-4 sm:gap-6 opacity-60 pointer-events-none" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="flex w-max animate-scroll-left gap-4 sm:gap-6">

<div className="flex gap-4 sm:gap-6">
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795e3e90-ddac-4d95-ac5b-7be38024b276_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce07742f-d7b7-4227-aedb-ff1702a1d36c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7119b0d9-f33c-4141-a118-a2e18cd18139_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3486249c-a839-4991-a018-c22d6c3b740a_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eaf1d21-67fd-429d-9895-95acbbe94959_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d0c5daf-1608-4aff-bd90-2fd8fe61eec7_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0f2365-dbf8-4694-8095-be5f78514b0c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b047d387-557c-4cc1-8714-6a9336a41015_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/129e3129-536e-4e4b-b671-026f2da1de89_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ffa6c58-0388-4911-a0f7-290ea7b042ed_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1f8dc9-e1ea-40a1-bd3a-8ab7afe647ad_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66591a3a-f0f9-4a98-b17c-64e728f0717d_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd8fb52-d107-4eab-aff0-d0f711feec02_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd1b681b-dea4-4295-92ab-fe19e1b92a38_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5e56435-baa8-41f8-a502-d1ef7f7b5c34_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1893cfa8-0ec5-40df-ac15-21261da5d6d3_800w.jpg"/>
</div>

<div className="flex gap-4 sm:gap-6">
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795e3e90-ddac-4d95-ac5b-7be38024b276_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce07742f-d7b7-4227-aedb-ff1702a1d36c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7119b0d9-f33c-4141-a118-a2e18cd18139_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3486249c-a839-4991-a018-c22d6c3b740a_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eaf1d21-67fd-429d-9895-95acbbe94959_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d0c5daf-1608-4aff-bd90-2fd8fe61eec7_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0f2365-dbf8-4694-8095-be5f78514b0c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b047d387-557c-4cc1-8714-6a9336a41015_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/129e3129-536e-4e4b-b671-026f2da1de89_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ffa6c58-0388-4911-a0f7-290ea7b042ed_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1f8dc9-e1ea-40a1-bd3a-8ab7afe647ad_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66591a3a-f0f9-4a98-b17c-64e728f0717d_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd8fb52-d107-4eab-aff0-d0f711feec02_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd1b681b-dea4-4295-92ab-fe19e1b92a38_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5e56435-baa8-41f8-a502-d1ef7f7b5c34_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1893cfa8-0ec5-40df-ac15-21261da5d6d3_800w.jpg"/>
</div>
</div>

<div className="flex w-max animate-scroll-left-slow gap-4 sm:gap-6 -ml-[15vw]">

<div className="flex gap-4 sm:gap-6">
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/129e3129-536e-4e4b-b671-026f2da1de89_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ffa6c58-0388-4911-a0f7-290ea7b042ed_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1f8dc9-e1ea-40a1-bd3a-8ab7afe647ad_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66591a3a-f0f9-4a98-b17c-64e728f0717d_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd8fb52-d107-4eab-aff0-d0f711feec02_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd1b681b-dea4-4295-92ab-fe19e1b92a38_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5e56435-baa8-41f8-a502-d1ef7f7b5c34_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1893cfa8-0ec5-40df-ac15-21261da5d6d3_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795e3e90-ddac-4d95-ac5b-7be38024b276_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce07742f-d7b7-4227-aedb-ff1702a1d36c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7119b0d9-f33c-4141-a118-a2e18cd18139_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3486249c-a839-4991-a018-c22d6c3b740a_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eaf1d21-67fd-429d-9895-95acbbe94959_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d0c5daf-1608-4aff-bd90-2fd8fe61eec7_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0f2365-dbf8-4694-8095-be5f78514b0c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b047d387-557c-4cc1-8714-6a9336a41015_800w.jpg"/>
</div>

<div className="flex gap-4 sm:gap-6">
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/129e3129-536e-4e4b-b671-026f2da1de89_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ffa6c58-0388-4911-a0f7-290ea7b042ed_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a1f8dc9-e1ea-40a1-bd3a-8ab7afe647ad_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66591a3a-f0f9-4a98-b17c-64e728f0717d_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd8fb52-d107-4eab-aff0-d0f711feec02_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd1b681b-dea4-4295-92ab-fe19e1b92a38_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5e56435-baa8-41f8-a502-d1ef7f7b5c34_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1893cfa8-0ec5-40df-ac15-21261da5d6d3_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/795e3e90-ddac-4d95-ac5b-7be38024b276_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce07742f-d7b7-4227-aedb-ff1702a1d36c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7119b0d9-f33c-4141-a118-a2e18cd18139_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3486249c-a839-4991-a018-c22d6c3b740a_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2eaf1d21-67fd-429d-9895-95acbbe94959_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d0c5daf-1608-4aff-bd90-2fd8fe61eec7_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0f2365-dbf8-4694-8095-be5f78514b0c_800w.jpg"/>
<img alt="" className="w-48 sm:w-64 h-36 sm:h-48 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b047d387-557c-4cc1-8714-6a9336a41015_800w.jpg"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<span className="text-xs uppercase tracking-widest text-zinc-400 block mb-6 font-[600]">Validation</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-[800] leading-tight mb-8 text-zinc-900 drop-shadow-sm">
                            Tested in<br/><span className="text-red-600">real life.</span>
</h2>
</div>
<p className="text-lg md:text-xl tracking-tight text-zinc-600 py-8 border-y border-zinc-200 mt-auto font-[500] bg-zinc-50/50 backdrop-blur-sm px-4 -mx-4">
                        We validated not just the product,<br/>but the behavior.
                    </p>
</div>
<div className="lg:col-span-7 grid gap-8 sm:gap-12">
<div className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 lg:p-12 border border-zinc-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
<h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-[800] border-b border-zinc-100 pb-4">Actual Testing</h4>
<ul className="space-y-4 text-sm sm:text-base text-zinc-700 font-[500] leading-relaxed">
<li className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>광장시장, 한양대학교 등에서 외국인 대상 실제 테스트 진행</span>
</li>
<li className="flex gap-4 items-start">
<iconify-icon className="text-xl text-zinc-400 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>제품 시식 및 인터뷰, 랜딩페이지 반응 검증</span>
</li>
</ul>
</div>
<div className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 lg:p-12 border border-zinc-200 rounded-sm shadow-sm hover:shadow-md transition-shadow">
<h4 className="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-[800] border-b border-zinc-100 pb-4">Core Insights</h4>
<ul className="space-y-6 text-sm text-zinc-700 font-[500]">
<li className="flex flex-col gap-2">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-[600]">Reaction Shift</span>
<span className="text-base sm:text-lg md:text-xl font-[800] tracking-tight text-zinc-900 break-keep">“Interesting”이 아닌<br/>“I would buy this” 반응 확인</span>
</li>
<li className="flex flex-col gap-2">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-[600]">Format Over Flavor</span>
<span className="text-base sm:text-lg md:text-xl font-[800] tracking-tight text-zinc-900 break-keep">맛이 중요하며, ‘새로운 경험’이 더 큰 가치로 다가갔다.</span>
</li>
<li className="flex flex-col gap-2">
<span className="text-xs text-zinc-400 uppercase tracking-widest font-[600]">Value Proposition</span>
<span className="text-base sm:text-lg md:text-xl font-[800] tracking-tight text-zinc-900 break-keep">'새로운 스낵 경험'이 핵심 가치로, 먹는 방식이 중요했다.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 border-t border-zinc-200 overflow-hidden relative">
<div className="absolute -right-[20%] top-[20%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-red-100/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 relative z-10 px-4">
<span className="text-xs uppercase tracking-widest text-zinc-400 block mb-6 font-[600]">A new category</span>
<h2 className="reveal-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[800] leading-tight mb-8 text-zinc-900"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] reveal-word">
                    Real K-snack
                </span></span></h2>
<p className="text-xl md:text-3xl lg:text-4xl tracking-tight text-zinc-600 mb-4 font-[500]">
                    We don’t season snacks.
                </p>
<p className="text-lg md:text-2xl lg:text-3xl tracking-tight text-zinc-500 font-[500]">
                    We transform fermented ingredients into snacks.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 relative z-10 border border-zinc-200">
<div className="bg-white p-8 md:p-16 flex flex-col justify-center">
<span className="text-xs font-[800] text-zinc-400 uppercase tracking-widest mb-8 block border-b border-zinc-100 pb-4">The Status Quo</span>
<p className="text-sm md:text-base text-zinc-600 font-[500] leading-relaxed mb-4 break-keep">
                        기존 스낵은 시즈닝을 입힌 구조<br className="hidden sm:block"/>(맛을 덧붙이는 방식)
                    </p>
</div>
<div className="bg-white p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-zinc-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none"></div>
<span className="text-xs font-[800] text-zinc-900 uppercase tracking-widest mb-8 block border-b border-zinc-200 pb-4 relative z-10">The Gochujang Bros Way</span>
<p className="text-sm md:text-base text-zinc-600 font-[500] leading-relaxed mb-4 break-keep relative z-10">
                        우리는 고추장, 된장, 김치 등<br className="hidden sm:block"/>발효 원물 자체를 스낵으로 전환
                    </p>
</div>
</div>
<div className="mt-24 text-center relative z-10 px-4">
<h4 className="text-sm uppercase tracking-widest text-zinc-400 mb-8 font-[800]">Scalability</h4>
<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-base sm:text-lg md:text-xl tracking-tight text-zinc-900 font-[800]">
<span>고추장 칩</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>된장 카라멜</span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>김치 스낵</span>
</div>
<p className="text-sm text-zinc-500 font-[500] mt-6 break-keep">
                    단일 제품이 아닌 확장 가능한 카테고리
                </p>
<div className="mt-16 pt-16 border-t border-zinc-200 inline-block w-full max-w-2xl">
<p className="text-lg md:text-2xl lg:text-3xl tracking-tight text-zinc-800 font-[500]">
                        From coated flavors to fermented ingredients.
                    </p>
</div>
</div>
</section>

<section className="py-24 md:py-40 border-t border-zinc-200">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
<div>
<span className="text-xs uppercase tracking-widest text-zinc-400 block mb-6 font-[600]">The Team</span>
<h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-[800] leading-tight mb-6 text-zinc-900">
                        Built to <span className="text-red-600">execute.</span>
</h2>
<p className="text-lg md:text-xl tracking-tight text-zinc-600 max-w-md font-[500]">
                        From idea to validation<br/>— executed by one team.
                    </p>
</div>
<div className="p-6 border border-zinc-200 rounded-sm bg-zinc-50 max-w-sm w-full md:w-auto">
<p className="text-sm text-zinc-600 font-[500] leading-relaxed break-keep">
                        마케팅 / 전략 / 제품 / 검증까지<br/>한 팀 내에서 수행
                    </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-6 border-t border-zinc-200 pt-12">

<div className="relative flex flex-col justify-end min-h-[360px] p-6 rounded-sm overflow-hidden group bg-zinc-200">
<img alt="공원표" className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d1e1c5f-6eac-41ca-a586-f77014d8cb24_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
<div className="relative z-10">
<div className="text-lg md:text-xl tracking-tight font-[800] text-white mb-2">공원표</div>
<div className="text-xs uppercase tracking-widest text-zinc-300 mb-4 pb-4 border-b border-white/20 font-[600]">마케팅 &amp; 실행</div>
<p className="text-sm text-zinc-400 font-[500] leading-relaxed break-keep">
                            전체 방향 설정 및 조직/유관부서 협업
                        </p>
</div>
</div>

<div className="relative flex flex-col justify-end min-h-[360px] p-6 rounded-sm overflow-hidden group bg-zinc-200">
<img alt="오현수" className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb8c0e88-e6db-41bf-9643-033cfd85e305_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
<div className="relative z-10">
<div className="text-lg md:text-xl tracking-tight font-[800] text-white mb-2">오현수</div>
<div className="text-xs uppercase tracking-widest text-zinc-300 mb-4 pb-4 border-b border-white/20 font-[600]">전략</div>
<p className="text-sm text-zinc-400 font-[500] leading-relaxed break-keep">
                            비즈니스 구조 설계 및 프로젝트 관리
                        </p>
</div>
</div>

<div className="relative flex flex-col justify-end min-h-[360px] p-6 rounded-sm overflow-hidden group bg-zinc-200">
<img alt="이승규" className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33f14a80-7696-4c4c-9165-8657e1d907b8_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10"></div>
<div className="relative z-10">
<div className="text-lg md:text-xl tracking-tight font-[800] text-white mb-2">이승규</div>
<div className="text-xs uppercase tracking-widest text-zinc-300 mb-4 pb-4 border-b border-white/20 font-[600]">제품 &amp; 검증</div>
<p className="text-sm text-zinc-400 font-[500] leading-relaxed break-keep">
                            프로토타입 제작 및 실제 소비자 테스트
                        </p>
</div>
</div>
</div>
<div className="mt-24 py-12 border-y border-zinc-200 text-center">
<p className="text-base sm:text-lg md:text-2xl tracking-tight text-zinc-900 font-[800] leading-relaxed break-keep">
                    우리는 아이디어만 낸 팀이 아니라,<br className="sm:hidden"/> <span className="text-red-600">직접 만들고 검증한 팀</span>입니다.
                </p>
</div>
</section>
</main>

<footer className="bg-zinc-50 pt-24 pb-12 relative z-20 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-center text-center mb-24">
<h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight font-[800] text-zinc-200 transition-colors duration-300 mb-8 select-none break-all sm:break-normal px-4" id="footer-logo">
                    GOCHUJANG BROS
                </h2>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors border-b border-zinc-300 pb-1 font-[600]" href="#" id="contact-link">
                    Contact Us
                    <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 text-xs uppercase tracking-widest text-zinc-400 font-[600]">
<p className="text-center md:text-left mb-4 md:mb-0">© 2024 GOCHUJANG BROS. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
