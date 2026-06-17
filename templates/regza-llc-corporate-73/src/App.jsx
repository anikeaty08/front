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



        lucide.createIcons();

        // 1. SMOOTH SCROLL (Lenis)
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. MOBILE MENU
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.style.opacity = '1';
                mobileMenu.style.pointerEvents = 'auto';
                menuToggle.innerHTML = '<i data-lucide="x" class="w-5 h-5"></i>';
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
                menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                document.body.style.overflow = '';
            }
            lucide.createIcons();
        });

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.style.opacity = '0';
                mobileMenu.style.pointerEvents = 'none';
                menuToggle.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
                document.body.style.overflow = '';
                lucide.createIcons();
            });
        });

        // 3. CURSOR & GLOW EFFECT
        const cursor = document.getElementById('cursor');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Glow Border Effect
            document.querySelectorAll('.glow-border').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });

            // Magnetic Effect
            const magnetics = document.querySelectorAll('.magnetic-wrap');
            magnetics.forEach(btn => {
                const rect = btn.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dist = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
                
                if (dist < 80) {
                    const moveX = (mouseX - centerX) * 0.2;
                    const moveY = (mouseY - centerY) * 0.2;
                    btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    btn.style.transform = `translate(0px, 0px)`;
                }
            });
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        document.querySelectorAll('.hover-trigger, a, button, input, textarea').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // 4. GSAP ANIMATIONS
        gsap.registerPlugin(ScrollTrigger);

        // Hero Text Reveal
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                rotate: 0,
                duration: 1.4,
                ease: "power4.out",
                delay: 0.2 + (i * 0.15)
            });
        });

        // Fade Up Elements
        gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.1 });
        gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });

        // Scroll Triggers
        document.querySelectorAll('.scroll-trigger-item').forEach(item => {
            gsap.fromTo(item, 
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
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
      

<div className="noise-overlay"></div>

<div className="aurora-bg"></div>
<div className="fixed inset-0 grid-lines z-0 pointer-events-none"></div>

<div id="cursor"></div>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
<div className="flex items-center justify-between px-6 py-3 rounded-full border border-white/10 bg-[#050505]/80 backdrop-blur-xl shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 w-full max-w-5xl hover:border-white/20">
<a className="group hover-trigger flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-gradient-to-tr from-cyan-900 to-black rounded-lg border border-white/10 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
<span className="text-white font-bold text-xs tracking-tight">R</span>
</div>
<span className="font-semibold tracking-tight text-sm text-white">REGZA</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors hover-trigger relative group tracking-wide" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors hover-trigger relative group tracking-wide" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors hover-trigger relative group tracking-wide" href="#works">
                    Works
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors hover-trigger relative group tracking-wide" href="#company">
                    Company
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-[11px] font-semibold text-black bg-white px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-all hover-trigger magnetic-wrap" href="#contact">
                    Contact
                </a>
<button className="md:hidden text-white hover-trigger p-1" id="menu-toggle">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#020202] z-40 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500" id="mobile-menu-overlay">
<div className="absolute inset-0 grid-lines z-0 opacity-20"></div>
<div className="flex flex-col items-center gap-10 relative z-10">
<a className="mobile-link text-3xl font-light text-white hover:text-cyan-400 transition-colors tracking-tight" href="#about">About</a>
<a className="mobile-link text-3xl font-light text-white hover:text-cyan-400 transition-colors tracking-tight" href="#services">Services</a>
<a className="mobile-link text-3xl font-light text-white hover:text-cyan-400 transition-colors tracking-tight" href="#works">Works</a>
<a className="mobile-link text-3xl font-light text-white hover:text-cyan-400 transition-colors tracking-tight" href="#company">Company</a>
<a className="mobile-link text-xl font-medium text-cyan-400 mt-4" href="#contact">Contact Us</a>
</div>
</div>

<section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-24 pb-12 text-center">
<div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">

<div className="mb-12 inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md animate-fade-in opacity-0">
<div className="relative w-1.5 h-1.5 bg-cyan-400 rounded-full pulsing-dot"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-medium">Digital Craftsmanship</span>
</div>

<h1 className="text-[13vw] md:text-[9rem] leading-[0.8] font-semibold tracking-tighter text-white mb-12 mix-blend-screen select-none w-full text-center">
<span className="mask-text"><span className="text-gradient">Essential</span></span>
<span className="mask-text"><span className="text-neutral-600 font-serif italic">needs,</span></span>
<span className="mask-text"><span className="text-gradient">Delivered.</span></span>
</h1>
<div className="flex flex-col items-center justify-center gap-10 w-full border-t border-white/10 pt-10 animate-fade-up opacity-0 max-w-4xl" style={{transitionDelay: '0.5s'}}>
<p className="text-sm md:text-base text-neutral-400 leading-relaxed text-center">
                    本質を見極め、最適解を届ける。<br/>
                    テクノロジーと人間性の調和が生む、<br className="hidden md:block"/>
                    次世代のデジタル体験を創造します。
                </p>
<div className="flex flex-wrap justify-center items-center gap-12">
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1">Established</span>
<span className="text-xl font-mono text-white">2024</span>
</div>
<div className="flex flex-col items-center">
<span className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1">Projects</span>
<span className="text-xl font-mono text-white">12+</span>
</div>
</div>
<a className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 magnetic-wrap hover-trigger mt-4" href="#services">
<i className="w-5 h-5" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-[#050505]/50 backdrop-blur-sm z-20 relative overflow-hidden">
<div className="flex whitespace-nowrap py-3 animate-marquee">
<div className="flex items-center gap-12 px-6">
<span className="text-xs font-mono text-neutral-500">LATEST NEWS</span>
<span className="text-xs font-medium text-white">2024.10.01 - コーポレートサイトをリニューアルしました。</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="text-xs font-medium text-white">2024.09.15 - 新規事業「AIコンサルティング」の提供を開始。</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="text-xs font-medium text-white">2024.08.01 - 採用情報を更新しました（エンジニア・デザイナー募集中）</span>
</div>

<div aria-hidden="true" className="flex items-center gap-12 px-6">
<span className="text-xs font-mono text-neutral-500">LATEST NEWS</span>
<span className="text-xs font-medium text-white">2024.10.01 - コーポレートサイトをリニューアルしました。</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="text-xs font-medium text-white">2024.09.15 - 新規事業「AIコンサルティング」の提供を開始。</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span className="text-xs font-medium text-white">2024.08.01 - 採用情報を更新しました（エンジニア・デザイナー募集中）</span>
</div>
</div>
</div>

<section className="py-32 px-6 relative z-10" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 text-center lg:text-left">
<div className="sticky top-32 flex flex-col items-center lg:items-start">
<span className="text-cyan-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 block">Philosophy</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8 leading-[1.1]">
                            Timeless<br/><span className="text-neutral-600">Value.</span>
</h2>
<p className="text-sm text-neutral-400 leading-loose max-w-sm">
                            変化の激しい時代において「変わらない本質」を大切にします。
                            技術は手段であり、目的は常に人の豊かさにあります。
                            クライアントの真の課題に向き合い、共に未来を創るパートナーとして在り続けます。
                        </p>
</div>
</div>
<div className="lg:col-span-7 space-y-6">

<div className="glow-border bg-[#0a0a0a] p-8 md:p-12 hover-trigger scroll-trigger-item">
<div className="flex items-start justify-between mb-8">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">01 / Mission</span>
<i className="w-5 h-5 text-neutral-400" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">見極め、届ける。</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            必要なものを正しく見極め、最適な形で届ける。過剰な機能も、不足したサービスも提供しません。ただ、真に必要な価値を追求します。
                        </p>
</div>

<div className="glow-border bg-[#0a0a0a] p-8 md:p-12 hover-trigger scroll-trigger-item">
<div className="flex items-start justify-between mb-8">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">02 / Vision</span>
<i className="w-5 h-5 text-neutral-400" data-lucide="eye"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">顧客と共に在り続ける。</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            単発のプロジェクトで終わる関係ではなく、事業の成長に寄り添い続けるパートナーでありたいと考えています。
                        </p>
</div>

<div className="glow-border bg-[#0a0a0a] p-8 md:p-12 hover-trigger scroll-trigger-item">
<div className="flex items-start justify-between mb-8">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded">03 / Values</span>
<i className="w-5 h-5 text-neutral-400" data-lucide="diamond"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-4 tracking-tight">誠実さと、長期の視点。</h3>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
<div><div className="text-white text-sm font-medium">Integrity</div><div className="text-[10px] text-neutral-500 mt-1">正直な判断</div></div>
<div><div className="text-white text-sm font-medium">Perspective</div><div className="text-[10px] text-neutral-500 mt-1">長期の視点</div></div>
<div><div className="text-white text-sm font-medium">Inheritance</div><div className="text-[10px] text-neutral-500 mt-1">次への継承</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5 bg-[#030303]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20 gap-6">
<div>
<span className="text-cyan-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-4 block">Capabilities</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">Our Services</h2>
</div>
<p className="text-neutral-500 text-sm max-w-sm text-center">
                    デジタルとリアルの境界を超え、<br/>
                    ビジネスの核心に触れるソリューションを。
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glow-border group relative h-[480px] bg-[#080808] overflow-hidden hover-trigger scroll-trigger-item">
<div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808] to-[#080808]"></div>
<img alt="System" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md">
<i className="w-5 h-5" data-lucide="code-2"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-3">System Development</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6 border-l border-cyan-500/30 pl-3">
                                高品質なWebアプリケーション・業務システムの設計開発。堅牢性と拡張性を両立します。
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">Next.js</span>
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">AWS</span>
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">TypeScript</span>
</div>
</div>
</div>
</div>

<div className="glow-border group relative h-[480px] bg-[#080808] overflow-hidden hover-trigger scroll-trigger-item" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808] to-[#080808]"></div>
<img alt="AI" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-3">AI Consulting</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6 border-l border-purple-500/30 pl-3">
                                生成AIの活用による業務効率化とデータドリブンな意思決定を支援します。
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">LLM Integration</span>
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">Automation</span>
</div>
</div>
</div>
</div>

<div className="glow-border group relative h-[480px] bg-[#080808] overflow-hidden hover-trigger scroll-trigger-item" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-20 transition-opacity duration-700">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080808] to-[#080808]"></div>
<img alt="Wellness" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-white mb-3">Well-being</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-6 border-l border-orange-500/30 pl-3">
                                タイ古式マッサージサロン「泰道」の運営。身体性の回復と心身の調和を提供。
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">Salon Management</span>
<span className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">Mindfulness</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="works">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20 gap-6 border-b border-white/10 pb-8">
<div>
<span className="text-cyan-500 text-[11px] font-bold tracking-[0.2em] uppercase">Selected Works</span>
<h2 className="text-4xl md:text-5xl font-semibold mt-4 text-white tracking-tighter">Case Studies</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-white hover:text-cyan-400 transition-colors magnetic-wrap group mt-2" href="#">
                    View All
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="space-y-32">

<div className="group cursor-pointer scroll-trigger-item">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 overflow-hidden rounded-2xl relative">
<div className="aspect-[16/9] bg-[#111] overflow-hidden">
<img alt="Dashboard" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="lg:col-span-4 lg:pl-8">
<span className="text-[10px] font-mono text-cyan-500 mb-4 block">01 — Fintech</span>
<h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-cyan-200 transition-colors">Financial Dashboard</h3>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                                複雑な金融データを直感的に可視化するダッシュボード刷新プロジェクト。
                                リアルタイム性を重視した設計と、ダークモード基調のUIデザイン。
                            </p>
<ul className="text-[11px] text-neutral-400 space-y-2 font-mono">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>UI/UX Design</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>Frontend Development</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>API Integration</li>
</ul>
</div>
</div>
</div>

<div className="group cursor-pointer scroll-trigger-item">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-4 lg:pr-8 order-2 lg:order-1">
<span className="text-[10px] font-mono text-cyan-500 mb-4 block">02 — HR Tech</span>
<h3 className="text-3xl font-semibold text-white mb-4 group-hover:text-cyan-200 transition-colors">AI Matching Platform</h3>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                                独自のアルゴリズムを用いた求職者と企業のマッチングプラットフォーム。
                                検索精度を300%向上させ、採用コストの削減に貢献。
                            </p>
<ul className="text-[11px] text-neutral-400 space-y-2 font-mono">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>Algorithm Design</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>Backend Development</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-white rounded-full"></div>Cloud Infrastructure</li>
</ul>
</div>
<div className="lg:col-span-8 overflow-hidden rounded-2xl relative order-1 lg:order-2">
<div className="aspect-[16/9] bg-[#111] overflow-hidden">
<img alt="AI" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 overflow-hidden bg-[#020202]">
<div className="max-w-7xl mx-auto">
<div className="mb-24 text-center">
<span className="text-cyan-500 text-[11px] font-bold tracking-[0.2em] uppercase">Workflow</span>
<h2 className="text-3xl font-semibold mt-4 text-white tracking-tight">How we work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">

<div className="absolute top-8 left-0 w-full h-px bg-gradient-to-r from-white/5 via-white/20 to-white/5 hidden md:block z-0"></div>

<div className="relative bg-[#050505] border border-white/5 p-8 rounded-xl z-10 hover:-translate-y-2 transition-transform duration-500 group">
<span className="text-4xl font-bold text-neutral-800 group-hover:text-white/20 transition-colors absolute top-4 right-4">01</span>
<div className="w-3 h-3 bg-cyan-500 rounded-full mb-8 relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
<h3 className="text-lg font-bold text-white mb-2">Hearing</h3>
<p className="text-xs text-neutral-500 leading-relaxed">課題の本質を見極める徹底的なヒアリング。</p>
</div>
<div className="relative bg-[#050505] border border-white/5 p-8 rounded-xl z-10 hover:-translate-y-2 transition-transform duration-500 group" style={{transitionDelay: '0.1s'}}>
<span className="text-4xl font-bold text-neutral-800 group-hover:text-white/20 transition-colors absolute top-4 right-4">02</span>
<div className="w-3 h-3 bg-black border border-white/30 rounded-full mb-8 relative z-10 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors"></div>
<h3 className="text-lg font-bold text-white mb-2">Strategy</h3>
<p className="text-xs text-neutral-500 leading-relaxed">ビジネスゴールに基づいた最適な技術選定。</p>
</div>
<div className="relative bg-[#050505] border border-white/5 p-8 rounded-xl z-10 hover:-translate-y-2 transition-transform duration-500 group" style={{transitionDelay: '0.2s'}}>
<span className="text-4xl font-bold text-neutral-800 group-hover:text-white/20 transition-colors absolute top-4 right-4">03</span>
<div className="w-3 h-3 bg-black border border-white/30 rounded-full mb-8 relative z-10 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors"></div>
<h3 className="text-lg font-bold text-white mb-2">Build</h3>
<p className="text-xs text-neutral-500 leading-relaxed">アジャイルな開発プロセスで高品質に実装。</p>
</div>
<div className="relative bg-[#050505] border border-white/5 p-8 rounded-xl z-10 hover:-translate-y-2 transition-transform duration-500 group" style={{transitionDelay: '0.3s'}}>
<span className="text-4xl font-bold text-neutral-800 group-hover:text-white/20 transition-colors absolute top-4 right-4">04</span>
<div className="w-3 h-3 bg-black border border-white/30 rounded-full mb-8 relative z-10 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors"></div>
<h3 className="text-lg font-bold text-white mb-2">Growth</h3>
<p className="text-xs text-neutral-500 leading-relaxed">リリース後のデータ分析と継続的な改善。</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5" id="company">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight text-center">Company Profile</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-neutral-900/20 border border-white/5 p-10 rounded-2xl hover:bg-neutral-900/40 transition-colors">
<dl className="space-y-6">
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-4 last:border-0">
<dt className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pt-1">Company</dt>
<dd className="col-span-2 text-sm text-white font-medium">合同会社レグザ (Regza LLC)</dd>
</div>
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-4 last:border-0">
<dt className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pt-1">CEO</dt>
<dd className="col-span-2 text-sm text-white font-medium">飯田 悠暉</dd>
</div>
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-4 last:border-0">
<dt className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pt-1">Founded</dt>
<dd className="col-span-2 text-sm text-white font-medium">2024</dd>
</div>
<div className="grid grid-cols-3 gap-4 border-b border-white/5 pb-4 last:border-0">
<dt className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold pt-1">Capital</dt>
<dd className="col-span-2 text-sm text-white font-medium">3,000,000 JPY</dd>
</div>
</dl>
</div>
<div className="space-y-4">
<div className="bg-neutral-900/20 border border-white/5 p-8 rounded-2xl flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">Tokyo HQ</span>
<p className="text-sm text-neutral-300 mt-2 font-medium">〒155-0033<br/>東京都世田谷区代田2-36-5<br/>ハイムユタカ103</p>
</div>
</div>
<div className="bg-neutral-900/20 border border-white/5 p-8 rounded-2xl flex items-start gap-4 hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<span className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">Toyama Office</span>
<p className="text-sm text-neutral-300 mt-2 font-medium">〒939-8064<br/>富山県富山市上袋655<br/>サンコレクトギアビル5号室</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10 border-t border-white/5 bg-[#010101]" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Let's create together.</h2>
<p className="text-neutral-400 mb-12 max-w-xl mx-auto">
                プロジェクトのご相談、協業のご提案など、<br/>お気軽にお問い合わせください。
            </p>
<form className="max-w-2xl mx-auto bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 text-left space-y-6 hover:border-white/20 transition-colors relative overflow-hidden group">

<div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine" style={{animationDuration: '1.5s'}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-bold ml-1">NAME</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-neutral-800" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 font-bold ml-1">EMAIL</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-neutral-800" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2 relative z-10">
<label className="text-xs text-neutral-500 font-bold ml-1">MESSAGE</label>
<textarea className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all placeholder:text-neutral-800 resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group hover-trigger magnetic-wrap relative z-10 mt-6" type="button">
                    Send Message
                    <i className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="send"></i>
</button>
</form>
<div className="mt-12 text-xs text-neutral-600 font-mono">
<a className="hover:text-white transition-colors" href="mailto:info@regza.co.jp">info@regza.co.jp</a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 bg-black text-center md:text-left relative z-20">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-gradient-to-tr from-cyan-900 to-black rounded border border-white/10 flex items-center justify-center">
<span className="text-white font-bold text-[8px]">R</span>
</div>
<span className="text-[10px] text-neutral-500 font-medium tracking-wider">© 2024 REGZA LLC.</span>
</div>
<div className="flex gap-8">
<a className="text-[10px] text-neutral-600 hover:text-white transition-colors uppercase tracking-wider font-medium" href="#">Privacy</a>
<a className="text-[10px] text-neutral-600 hover:text-white transition-colors uppercase tracking-wider font-medium" href="#">Terms</a>
</div>
</div>
</footer>


<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
        @keyframes shine {
            100% { left: 125%; }
        }
        .group:hover .animate-shine {
            animation: shine 1s;
        }
    </style>

    </>
  );
}
