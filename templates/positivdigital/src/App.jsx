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



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Preloader Logic
        window.addEventListener('load', () => {
            const progress = document.getElementById('loader-progress');
            const preloader = document.getElementById('preloader');
            
            let loadVal = 0;
            const loadInterval = setInterval(() => {
                loadVal += Math.floor(Math.random() * 10) + 5;
                if(loadVal > 100) loadVal = 100;
                progress.style.width = loadVal + '%';
                
                if(loadVal === 100) {
                    clearInterval(loadInterval);
                    setTimeout(() => {
                        preloader.classList.add('loaded');
                        document.querySelector('#hero').classList.add('hero-revealed');
                        setTimeout(revealOnScroll, 500); 
                    }, 500);
                }
            }, 50);
        });

        // PARALLAX ENGINE
        let ticking = false;
        
        function updateParallax() {
            const parallaxElements = document.querySelectorAll('.parallax-element');
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.1;
                const rect = el.parentElement.getBoundingClientRect(); // relative to viewport
                const elementTop = rect.top;
                const elementHeight = rect.height;

                if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                    let yPos = 0;
                    const center = windowHeight / 2;
                    const elCenter = elementTop + (elementHeight / 2);
                    const diff = center - elCenter;
                    yPos = diff * speed;
                    
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        updateParallax();

        // Reveal on Scroll
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                    const counters = reveal.querySelectorAll('.counter');
                    counters.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            counter.classList.add('counted');
                            animateCounter(counter);
                        }
                    });
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);

        // Counter
        function animateCounter(el) {
            const target = +el.getAttribute('data-target');
            const duration = 2000; 
            const step = target / (duration / 16); 
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    el.innerText = target + (target > 100 ? '+' : '');
                    clearInterval(timer);
                } else {
                    el.innerText = Math.ceil(current) + (target > 100 ? '+' : '');
                }
            }, 16);
        }

        // CAROUSEL STACK LOGIC
        const cardsContainer = document.getElementById('cards-container');
        const dots = [
          document.getElementById('dot-1'),
          document.getElementById('dot-2'),
          document.getElementById('dot-3'),
          document.getElementById('dot-4')
        ];
        
        let currentCard = 1;
        let isAnimating = false;
        
        function updateDots() {
            if(!cardsContainer) return;
            dots.forEach((dot, index) => {
                if (index === currentCard - 1) {
                dot.className = 'cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]';
                } else {
                dot.className = 'cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300';
                }
            });
        }
        
        function setActiveCard(cardNumber) {
          if(!cardsContainer) return;
          if (isAnimating || cardNumber === currentCard) return;
          
          isAnimating = true;
          cardsContainer.className = `stack-section card-${cardNumber}-active relative`;
          currentCard = cardNumber;
          updateDots();
          
          setTimeout(() => {
            isAnimating = false;
          }, 800);
        }
        
        dots.forEach((dot, index) => {
          if(dot) {
              dot.addEventListener('click', () => {
                setActiveCard(index + 1);
              });
          }
        });
        
        // Auto-rotate cards
        if(cardsContainer) {
            setInterval(() => {
              if (!isAnimating) {
                const nextCard = currentCard === 4 ? 1 : currentCard + 1;
                setActiveCard(nextCard);
              }
            }, 5000);
        }

        // SERVICES TAB SWITCHING LOGIC
        const tabs = document.querySelectorAll('.tab-btn');
        const grids = document.querySelectorAll('.service-grid');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update Tabs UI
                tabs.forEach(t => {
                    t.className = 'tab-btn cursor-hover px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300';
                });
                tab.className = 'tab-btn cursor-hover px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded bg-[#007bff]/80 backdrop-blur-md text-white shadow-lg shadow-blue-900/20 transition-all duration-300';

                // Switch Content
                const target = tab.getAttribute('data-tab');
                grids.forEach(grid => {
                    if(grid.id === `grid-${target}`) {
                        grid.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            grid.classList.remove('opacity-0', 'transform', 'translate-y-4');
                        });
                    } else {
                        grid.classList.add('opacity-0', 'transform', 'translate-y-4');
                        setTimeout(() => {
                             if(grid.id !== `grid-${target}`) grid.classList.add('hidden');
                        }, 500); 
                    }
                });
            });
        });

        // PORTFOLIO FILTER LOGIC
        const filterButtons = document.querySelectorAll('#portfolio-filter .filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update button UI
                filterButtons.forEach(b => {
                    b.className = 'filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white transition-all duration-300 rounded-full';
                    b.innerHTML = b.textContent.replace('ทุกรูปแบบ', 'ทุกรูปแบบ').trim(); // clean up
                });
                
                // Active state
                btn.className = 'filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-white bg-white/10 rounded-full shadow-inner transition-all duration-300 flex items-center gap-2';
                const text = btn.textContent.trim();
                btn.innerHTML = `<span class="w-2 h-2 rounded-full bg-[#007bff] shadow-[0_0_10px_#007bff]"></span> ${text}`;
                
                const filter = btn.getAttribute('data-filter');

                // Filter logic with animation
                galleryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.classList.remove('hidden-item');
                        // Small delay to allow display:block to render before opacity transition
                        requestAnimationFrame(() => {
                            item.classList.remove('fading-out');
                        });
                    } else {
                        item.classList.add('fading-out');
                        setTimeout(() => {
                            item.classList.add('hidden-item');
                        }, 500); // match css transition
                    }
                });
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
      
<div id="cursor"></div>
<div className="noise-overlay"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="liquid-blob bg-[#007bff]" style={{width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: '0.2', animationDuration: '15s'}}></div>
<div className="liquid-blob bg-purple-600" style={{width: '400px', height: '400px', top: '40%', right: '-100px', opacity: '0.15', animationDuration: '20s', animationDelay: '-5s'}}></div>
<div className="liquid-blob bg-cyan-600" style={{width: '600px', height: '600px', bottom: '-150px', left: '20%', opacity: '0.15', animationDuration: '25s', animationDelay: '-10s'}}></div>
</div>
<div id="preloader">
<div className="flex flex-col items-center gap-4">
<span className="font-heading tracking-[0.2em] text-xs uppercase text-white/50" id="loader-text">กำลังเริ่มต้นระบบลิควิด</span>
<div className="loader-bar">
<div className="loader-progress" id="loader-progress"></div>
</div>
</div>
</div>

<nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4">
<div className="max-w-7xl mx-auto px-4">

<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<a className="cursor-hover group flex items-center gap-1.5" href="#">
<span className="font-heading font-bold text-xl tracking-tighter text-white">POSITIV</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#29C5F6] to-[#3a4b9f] flex items-center justify-center shadow-[0_4px_10px_rgba(41,197,246,0.3)] group-hover:scale-105 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:plus" data-strokeWidth="4" data-width="20"></span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#services">บริการ</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#work">ผลงาน</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#gallery">แกลเลอรี</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#pricing">ราคา</a>
</div>
<div className="hidden md:block">
<button className="cursor-hover px-5 py-2 border border-white/20 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-sm">
                        เมนู
                    </button>
</div>
<button className="md:hidden text-white cursor-hover">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute top-28 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 00. เริ่มต้น ]</span>
</div>

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Background" className="parallax-element w-full h-[120%] object-cover opacity-20 grayscale contrast-125 will-change-transform mix-blend-overlay" data-parallax-speed="0.5" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
<div className="reveal mb-8 opacity-0">
<div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#007bff] animate-pulse shadow-[0_0_10px_#007bff]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">นวัตกรรมไร้รอยต่อ</span>
</div>
</div>
<h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.85] tracking-tight text-white drop-shadow-2xl">
<span className="split-line"><span className="block">ANAKOT</span></span>
<span className="split-line"><span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20" style={{transitionDelay: '100ms'}}>LIQUID</span></span>
</h1>

<h1 className="absolute opacity-0 pointer-events-none">อนาคตที่ลื่นไหล</h1>
<p className="mt-8 text-lg md:text-xl text-gray-300/80 font-light max-w-lg mx-auto leading-relaxed reveal opacity-0 delay-200 backdrop-blur-sm rounded-lg p-2">
                เปลี่ยนสิ่งที่จับต้องไม่ได้ให้เป็นความจริง เราสร้างสรรค์ประสบการณ์ดิจิทัลที่ <span className="text-white border-b border-[#007bff]/50 pb-0.5 cursor-hover hover:border-[#007bff] hover:text-[#007bff] transition-colors hover:shadow-[0_0_15px_rgba(0,123,255,0.4)]">ลื่นไหล</span> และปรับตัวได้
            </p>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 reveal opacity-0 delay-500">
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">เลื่อนลง</span>
<div className="glass-panel w-[1px] h-12 !bg-gradient-to-b from-[#007bff] to-transparent/10 !border-0"></div>
</div>
</header>

<section className="py-32 relative z-10" id="services">
<div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 01. ความสามารถ ]</span>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">ความเชี่ยวชาญ<br/><span className="text-gray-500">ที่ชัดเจน</span></h2>
<p className="text-gray-400 max-w-sm text-lg">กระบวนการโปร่งใส ผลลัพธ์ที่จับต้องได้</p>
</div>
<div className="reveal flex p-1 glass-panel rounded-lg" id="service-tabs">
<button className="tab-btn cursor-hover px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded bg-[#007bff]/80 backdrop-blur-md text-white shadow-lg shadow-blue-900/20 transition-all duration-300" data-tab="strategic">กลยุทธ์</button>
<button className="tab-btn cursor-hover px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300" data-tab="creative">สร้างสรรค์</button>
<button className="tab-btn cursor-hover px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300" data-tab="technical">เทคนิค</button>
</div>
</div>

<div className="relative" id="services-grid-container">

<div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="grid-strategic">

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">SEO &amp; การวิเคราะห์</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">ข้อมูลเชิงลึกช่วยเพิ่มการมองเห็นและเปลี่ยนกระแสผู้เข้าชมให้เป็นลูกค้าที่ภักดี</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:compass" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">กลยุทธ์ผลิตภัณฑ์</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">นำทางกระแสตลาดเพื่อค้นหาโอกาสใหม่สำหรับผลิตภัณฑ์ดิจิทัลของคุณ</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">วิทยาศาสตร์ข้อมูล</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่ใช้งานได้จริงเพื่อการเติบโต</p>
</div>
</div>

<div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden opacity-0 transform translate-y-4" id="grid-creative">

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:palette" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">การออกแบบ UI/UX</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">อินเทอร์เฟซที่ให้ความรู้สึกเหมือนเป็นส่วนหนึ่งของความคิด ราบรื่น และใช้งานง่าย</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:film" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">โมชั่นกราฟิก</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">ใส่พลังงานจลน์ลงในทุกการโต้ตอบ ทำให้พิกเซลที่หยุดนิ่งกลับมีชีวิต</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:fingerprint" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">อัตลักษณ์แบรนด์</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">กลั่นกรองตัวตนของคุณให้เป็นภาษาภาพที่ลื่นไหลไปในทุกสื่อ</p>
</div>
</div>

<div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 hidden opacity-0 transform translate-y-4" id="grid-technical">

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">พัฒนาเว็บไซต์</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">โครงสร้างโค้ดที่แข็งแกร่งดั่งเพชรและความยืดหยุ่นที่ปรับขนาดได้ดั่งน้ำ</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">พัฒนาแอปพลิเคชัน</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">แอปพลิเคชันที่ลื่นไหลและปรับตัวเข้ากับมือ อุปกรณ์ และบริบทของผู้ใช้ได้อย่างสมบูรณ์แบบ</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-width="24"></span>
</div>
<div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl flex items-center justify-center text-[#007bff] mb-6 shadow-inner">
<span className="iconify" data-icon="lucide:cloud" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-heading text-xl font-medium mb-3 text-white tracking-tight">โครงสร้างพื้นฐานคลาวด์</h3>
<p className="text-base text-gray-400 leading-relaxed mb-6">ระบบเบื้องหลังที่ขยายตัวได้อย่างไร้ขีดจำกัดตามความต้องการทางดิจิทัลของคุณ</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10 min-h-screen flex items-center" id="work">
<div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 02. ภาพสะท้อน ]</span>
</div>
<div className="max-w-7xl mx-auto px-6 w-full h-full">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8 reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#007bff] rounded-full animate-pulse shadow-[0_0_10px_#007bff]"></div>
<p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">กรณีศึกษาที่คัดสรร</p>
</div>
<div className="mb-8">
<h2 className="font-heading text-4xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 text-white">
<span className="block">การเปลี่ยนแปลง</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#007bff] to-cyan-400">ที่ลื่นไหล</span>
</h2>
<p className="text-lg text-white/70 leading-relaxed max-w-md">
                            เราไม่ได้แค่สร้างเว็บไซต์ แต่เราสร้างระบบนิเวศที่เป็นของเหลว เลื่อนดูความสำเร็จทางสถาปัตยกรรมดิจิทัลล่าสุดของเรา
                        </p>
</div>

<div className="space-y-4 text-base text-white/60 mb-12">
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<span className="text-xs uppercase tracking-wider">ความพึงพอใจลูกค้า</span>
<span className="font-semibold text-white">99.8%</span>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center justify-between">
<span className="text-xs uppercase tracking-wider">เวลาโหลดเฉลี่ย</span>
<span className="font-semibold text-white">0.4s</span>
</div>
</div>

<div className="flex space-x-4 items-center pl-1">
<button className="cursor-hover w-3 h-3 rounded-full bg-[#007bff] transition-all duration-300 scale-125 shadow-[0_0_10px_#007bff]" id="dot-1"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-4"></button>
</div>
</div>

<div className="flex flex-col space-y-8 items-center w-full lg:w-auto reveal delay-200">
<div className="stack-section card-1-active relative" id="cards-container">

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-[#007bff]/20 to-purple-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<span className="iconify text-[#007bff]" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">ฟินเทค</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">2023</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-[#007bff] to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">Stripe</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">ออกแบบระบบชำระเงินระดับโลก</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>การแปลงผล</span>
<span className="text-white">+24%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-[#007bff] h-1 rounded-full w-[84%]"></div>
</div>
</div>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    ดูผลงาน <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<span className="iconify text-purple-400" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">ค้าปลีก</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">2023</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:shirt" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">Neon</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">แฟชั่นที่สมจริง</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>การรักษาลูกค้า</span>
<span className="text-white">+45%</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-purple-500 h-1 rounded-full w-[90%]"></div>
</div>
</div>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    ดูผลงาน <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<span className="iconify text-emerald-400" data-icon="lucide:database" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">ซอฟต์แวร์</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">2022</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-white" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">Oracle</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">การแสดงผลข้อมูล</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>ความเร็ว</span>
<span className="text-white">10x</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-emerald-500 h-1 rounded-full w-[95%]"></div>
</div>
</div>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    ดูผลงาน <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[30rem] md:h-[32rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<span className="iconify text-white" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="16"></span>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">เอไอ</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">2024</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-white to-gray-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-white/10 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-black" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">OpenAI</h3>
<p className="text-xs text-white/60 mb-8 uppercase tracking-widest">ตรรกะอินเทอร์เฟซ</p>
<div className="w-full space-y-3 mb-6">
<div className="flex justify-between text-xs text-gray-400">
<span>ผู้ใช้</span>
<span className="text-white">100M+</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1">
<div className="bg-white h-1 rounded-full w-[99%]"></div>
</div>
</div>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
                                    ดูผลงาน <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="gallery">
<div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 03. นิทรรศการ ]</span>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">ผืนผ้าใบ<br/><span className="text-gray-500">ดิจิทัล</span></h2>
<p className="text-gray-400 max-w-md text-lg">หลากหลายรูปแบบ ตั้งแต่ความแม่นยำที่หยุดนิ่งไปจนถึงการเคลื่อนไหวที่ลื่นไหล</p>
</div>

<div className="glass-panel p-1.5 rounded-full flex items-center gap-1 relative overflow-hidden" id="portfolio-filter">
<button className="filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-white bg-white/10 rounded-full shadow-inner transition-all duration-300 flex items-center gap-2" data-filter="all">
<span className="w-2 h-2 rounded-full bg-[#007bff] shadow-[0_0_10px_#007bff]"></span> ทุกรูปแบบ
                    </button>
<button className="filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white transition-all duration-300 rounded-full" data-filter="static">ภาพนิ่ง</button>
<button className="filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white transition-all duration-300 rounded-full" data-filter="shorts">วิดีโอสั้น</button>
<button className="filter-btn cursor-pointer px-4 py-2 text-[10px] uppercase tracking-widest font-semibold text-gray-500 hover:text-white transition-all duration-300 rounded-full" data-filter="motion">ภาพเคลื่อนไหว</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-6" id="gallery-grid">

<div className="gallery-item md:col-span-2 lg:col-span-2 row-span-1 glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100" data-category="static">
<div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
<img alt="Static Banner" className="w-full h-full object-cover gallery-img transition-transform duration-700 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 z-20 flex flex-col justify-end p-6 gallery-overlay opacity-0 transition-opacity duration-300">
<span className="glass-panel w-fit px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-widest text-white mb-2 backdrop-blur-md">แบนเนอร์ภาพนิ่ง</span>
<h4 className="font-heading text-2xl font-bold text-white">สถาปัตยกรรมมินิมอล</h4>
<p className="text-xs text-gray-300 mt-1">ภาพลักษณ์แบรนด์ความละเอียดสูง</p>
</div>
</div>

<div className="gallery-item md:col-span-1 row-span-2 glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative" data-category="shorts">

<div className="absolute inset-0 z-0">
<img alt="Short Form" className="w-full h-full object-cover filter contrast-125 brightness-75" src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-fill="white" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
</div>

<div className="absolute top-4 left-4 z-20 flex gap-2">
<span className="bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">สด</span>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#007bff] to-cyan-400"></div>
<span className="text-sm font-semibold text-white">@positiv_agency</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-4">เบื้องหลังกระบวนการออกแบบอินเทอร์เฟซแบบลิควิดของเรา #webdesign #uiux</p>
<div className="flex justify-between items-center text-white/80">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1"><span className="iconify" data-icon="lucide:heart" data-width="20"></span><span className="text-[10px]">12k</span></div>
<div className="flex flex-col items-center gap-1"><span className="iconify" data-icon="lucide:message-circle" data-width="20"></span><span className="text-[10px]">342</span></div>
</div>
<span className="iconify animate-spin-slow" data-icon="lucide:disc" data-width="24"></span>
</div>
</div>
</div>

<div className="gallery-item md:col-span-1 row-span-1 glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-150 relative bg-[#050a14]" data-category="motion">

<div className="absolute inset-0 overflow-hidden flex items-center justify-center">
<div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,123,255,0.2)_0%,transparent_70%)] motion-banner-anim"></div>
<div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-20 transform rotate-12 scale-150">
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '0.1s'}}></div>
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '0.3s'}}></div>
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '0.5s'}}></div>
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '0.7s'}}></div>
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '0.9s'}}></div>
<div className="bg-white/10 h-full rounded-full motion-banner-anim" style={{animationDelay: '1.1s'}}></div>
</div>
<div className="relative z-10 text-center">
<span className="block text-4xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 tracking-tighter motion-banner-anim-rev">ลดราคา</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-[#007bff] block mt-2">โฆษณาเคลื่อนไหว</span>
</div>
</div>
<div className="absolute bottom-4 right-4 z-20">
<span className="glass-panel px-2 py-1 rounded text-[10px] font-semibold text-white/50 border border-white/10">HTML5</span>
</div>
</div>

<div className="gallery-item md:col-span-1 row-span-1 glass-panel rounded-2xl overflow-hidden cursor-hover group gallery-card-hover reveal delay-100" data-category="static">
<img alt="Static" className="w-full h-full object-cover gallery-img transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-6 left-6 z-20">
<span className="glass-panel px-2 py-1 rounded text-[10px] uppercase text-white mb-1 inline-block">การถ่ายภาพ</span>
<h4 className="text-white font-medium">กระแสเมือง</h4>
</div>
</div>

<div className="gallery-item md:col-span-2 lg:col-span-2 row-span-1 glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-300 relative bg-gradient-to-r from-indigo-900 to-purple-900 border border-white/10" data-category="motion">

<div className="absolute inset-0 flex items-center justify-between px-12 overflow-hidden">
<div className="w-32 h-32 bg-purple-500 rounded-full blur-[60px] absolute -left-10 motion-banner-anim"></div>
<div className="w-32 h-32 bg-cyan-500 rounded-full blur-[60px] absolute -right-10 motion-banner-anim-rev"></div>
<div className="relative z-10 w-1/2">
<h3 className="text-3xl font-heading font-bold text-white leading-none mb-2">พร้อมสู่ <br/> อนาคต</h3>
<button className="px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-transform">ช้อปเลย</button>
</div>
<div className="relative z-10 w-1/2 flex justify-end">

<div className="w-32 h-32 glass-panel rounded-xl border border-white/20 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
<span className="iconify text-white" data-icon="lucide:box" data-width="40"></span>
</div>
</div>
</div>
<div className="absolute top-4 right-4 z-20">
<span className="glass-panel px-2 py-1 rounded text-[10px] font-semibold text-white/70 border border-white/10 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> ริชมีเดีย</span>
</div>
</div>

<div className="gallery-item md:col-span-1 row-span-2 glass-panel rounded-2xl overflow-hidden cursor-hover group reveal delay-200 border border-white/10 relative" data-category="shorts">
<div className="absolute inset-0 z-0">
<img alt="Short Form" className="w-full h-full object-cover filter brightness-75 sepia-[0.2]" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white" data-fill="white" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full p-6 z-20 bg-gradient-to-t from-black/90 to-transparent">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
<span className="text-sm font-semibold text-white">@tech_daily</span>
</div>
<p className="text-xs text-gray-300 leading-snug mb-4">ความงามแบบไซเบอร์พังค์ในการพัฒนาเว็บยุคใหม่ 🔮 #coding #aesthetic</p>
<div className="flex justify-between items-center text-white/80">
<div className="flex gap-4">
<div className="flex flex-col items-center gap-1"><span className="iconify" data-icon="lucide:heart" data-width="20"></span><span className="text-[10px]">8.5k</span></div>
<div className="flex flex-col items-center gap-1"><span className="iconify" data-icon="lucide:share-2" data-width="20"></span><span className="text-[10px]">แชร์</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">

<div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm border-y border-white/5 z-0"></div>
<div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 04. เครือข่าย ]</span>
</div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<h4 className="reveal text-xs font-semibold uppercase tracking-widest text-gray-400 mb-12">ได้รับความไว้วางใจจากผู้นำระดับโลก</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="reveal text-center"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="12">0</span><span className="text-[10px] text-gray-500 uppercase tracking-widest">ปีประสบการณ์</span></div>
<div className="reveal text-center delay-100"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="250">0</span><span className="text-[10px] text-gray-500 uppercase tracking-widest">โครงการที่ส่งมอบ</span></div>
<div className="reveal text-center delay-200"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="18">0</span><span className="text-[10px] text-gray-500 uppercase tracking-widest">รางวัลที่ได้รับ</span></div>
<div className="reveal text-center delay-300"><span className="block text-5xl font-heading font-medium text-white mb-2 counter drop-shadow-lg" data-target="4">0</span><span className="text-[10px] text-gray-500 uppercase tracking-widest">สาขาทั่วโลก</span></div>
</div>
</div>
<div className="marquee-container overflow-hidden whitespace-nowrap relative w-full z-10">
<div className="marquee-content gap-24 items-center opacity-50 hover:opacity-100 transition-opacity duration-500">
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">ADOBE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">MICROSOFT</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">GOOGLE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">SPOTIFY</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">NETFLIX</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">AMAZON</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">AIRBNB</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">ADOBE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">MICROSOFT</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">GOOGLE</span>
<span className="text-3xl font-heading font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20">SPOTIFY</span>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="pricing">
<div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 05. การลงทุน ]</span>
</div>

<div className="liquid-blob bg-[#007bff]" style={{width: '700px', height: '300px', top: '20%', left: '50%', transform: 'translateX(-50%)', opacity: '0.08', filter: 'blur(100px)'}}></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">ความลื่นไหล<br/><span className="text-gray-500">ที่ขยายขนาดได้</span></h2>
<p className="text-gray-400 max-w-md mx-auto text-lg">เลือกสถานะที่เหมาะสมกับการเติบโตของคุณ</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl cursor-hover hover:border-white/20 group reveal delay-100 flex flex-col h-full relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="font-heading font-bold text-xl">S</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-2">Solid (มั่นคง)</h3>
<p className="text-sm text-gray-400 mb-6 h-10">รากฐานดิจิทัลสำหรับธุรกิจใหม่</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-heading font-bold text-white">฿9,900</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">/ เดือน</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>สถาปัตยกรรมหน้าเดียว</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>SEO พื้นฐาน &amp; การวิเคราะห์</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>รองรับมือถือ</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>แก้ไขงานได้ 1 ครั้ง</span>
</li>
</ul>
<button className="cursor-hover w-full py-3 px-4 glass-panel border border-white/10 rounded-xl text-white/70 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            เริ่มต้นเล็กๆ
                        </button>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover border-[#007bff]/50 hover:border-[#007bff] group reveal delay-200 flex flex-col h-full relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(0,123,255,0.15)]">

<div className="absolute inset-0 bg-gradient-to-b from-[#007bff]/10 to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 p-4">
<span className="bg-[#007bff] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded shadow-lg shadow-blue-500/20">ยอดนิยม</span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#007bff] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
<span className="font-heading font-bold text-xl">M</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-2">Liquid (ลื่นไหล)</h3>
<p className="text-sm text-gray-400 mb-6 h-10">ระบบนิเวศที่ปรับตัวได้สำหรับแบรนด์ที่กำลังเติบโต</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-heading font-bold text-white">฿19,900</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">/ เดือน</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-[#007bff] mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>เว็บแอปพลิเคชันเต็มรูปแบบ</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-[#007bff] mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>แอนิเมชัน &amp; โมชั่นขั้นสูง</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-[#007bff] mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>ระบบจัดการเนื้อหา (CMS)</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-[#007bff] mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>แก้ไขงานได้ 3 ครั้ง</span>
</li>
</ul>
<button className="cursor-hover w-full py-3 px-4 bg-[#007bff] rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-[#007bff] transition-all duration-300 shadow-lg shadow-blue-900/40">
                            เลือกแบบลื่นไหล
                        </button>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover hover:border-white/20 group reveal delay-300 flex flex-col h-full relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-gradient-to-br from-white/20 to-transparent border border-white/10 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="font-heading font-bold text-xl">L</span>
</div>
<h3 className="font-heading text-2xl font-semibold text-white mb-2">Ethereal (เหนือระดับ)</h3>
<p className="text-sm text-gray-400 mb-6 h-10">โซลูชันที่ครอบคลุมสำหรับองค์กรขนาดใหญ่</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-heading font-bold text-white">฿29,900</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">/ เดือน</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>โครงสร้างพื้นฐานระดับโลก</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>การรวม AI &amp; Machine Learning</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>สนับสนุน 24/7 ลำดับความสำคัญสูง</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<span className="iconify text-gray-500 mt-0.5" data-icon="lucide:check-circle" data-width="16"></span>
<span>แก้ไขงานได้ไม่จำกัด</span>
</li>
</ul>
<button className="cursor-hover w-full py-3 px-4 glass-panel border border-white/10 rounded-xl text-white/70 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            เลือกแบบเหนือระดับ
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black/80 backdrop-blur-xl pt-24 pb-12 border-t border-white/10 relative z-20" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="space-y-6">
<div className="flex items-center gap-1.5 mb-6">
<span className="font-heading font-bold text-2xl tracking-tighter text-white">POSITIV</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#29C5F6] to-[#3a4b9f] flex items-center justify-center shadow-[0_4px_10px_rgba(41,197,246,0.3)]">
<span className="iconify text-white" data-icon="lucide:plus" data-strokeWidth="4" data-width="20"></span>
</div>
</div>
<p className="text-gray-500 text-base leading-relaxed">นิยามใหม่ของภูมิทัศน์ดิจิทัลด้วยความแม่นยำและความคิดสร้างสรรค์ มาร่วมสร้างอนาคตไปด้วยกัน</p>
<div className="flex gap-4">
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#007bff] hover:text-white transition-colors border-0" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#007bff] hover:text-white transition-colors border-0" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#007bff] hover:text-white transition-colors border-0" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">บริษัท</h5>
<ul className="space-y-4 text-base text-gray-500">
<li><a className="cursor-hover hover:text-white transition-colors" href="#">เกี่ยวกับเรา</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">ร่วมงานกับเรา</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">สื่อมวลชน</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">ติดต่อเรา</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">บริการ</h5>
<ul className="space-y-4 text-base text-gray-500">
<li><a className="cursor-hover hover:text-white transition-colors" href="#">พัฒนาเว็บไซต์</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">ออกแบบ UI/UX</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">การตลาด SEO</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">สร้างแบรนด์</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">ติดต่อเรา</h5>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#007bff]" data-icon="lucide:phone" data-width="16"></span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Tel</p>
<a className="cursor-hover text-white text-lg font-mono hover:text-[#007bff] transition-colors block" href="tel:0648714556">064-871-4556</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#06C755]" data-icon="lucide:message-circle" data-width="16"></span>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Line</p>
<a className="cursor-hover text-white text-lg font-mono hover:text-[#06C755] transition-colors block" href="#">@positivdigital</a>
</div>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600">
<p>© 2023 Positiv+ Digital Agency. สงวนลิขสิทธิ์.</p>
<div className="flex gap-6">
<a className="cursor-hover hover:text-white transition-colors" href="#">นโยบายความเป็นส่วนตัว</a>
<a className="cursor-hover hover:text-white transition-colors" href="#">เงื่อนไขการให้บริการ</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
