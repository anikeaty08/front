import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    /* ═══════════════════════════════════════════
       Golden Coffee Grains Animation
       ═══════════════════════════════════════════ */
    function initFallingGrains() {
        const canvas = document.getElementById('grainsCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const grains = [];
        const numGrains = 40;
        const goldColors = ['#F9A826', '#FFD700', '#F57F17', '#FFB300'];

        class Grain {
            constructor() {
                this.reset(true);
            }
            reset(initial = false) {
                this.x = Math.random() * width;
                this.y = initial ? Math.random() * height : -20;
                this.size = Math.random() * 2 + 1.2;
                this.speedY = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.angle = Math.random() * Math.PI * 2;
                this.rotationSpeed = (Math.random() - 0.5) * 0.04;
                this.color = goldColors[Math.floor(Math.random() * goldColors.length)];
                this.opacity = Math.random() * 0.5 + 0.15;
            }
            update() {
                this.y += this.speedY;
                this.x += this.speedX;
                this.angle += this.rotationSpeed;
                if (this.y > height + 20) {
                    this.reset();
                }
            }
            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);
                ctx.globalAlpha = this.opacity;
                
                // Draw grain body
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
                ctx.fill();
                
                // Draw inner slit (coffee bean look)
                ctx.strokeStyle = 'rgba(0,0,0,0.5)';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(0, -this.size * 0.8);
                ctx.bezierCurveTo(this.size * 0.4, 0, -this.size * 0.4, 0, 0, this.size * 0.8);
                ctx.stroke();
                
                ctx.restore();
            }
        }

        for (let i = 0; i < numGrains; i++) {
            grains.push(new Grain());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            grains.forEach(g => {
                g.update();
                g.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });
    }

    /* ═══════════════════════════════════════════
       Text Scramble
       ═══════════════════════════════════════════ */
    function scrambleText(el) {
        const original = el.dataset.orig || (el.dataset.orig = el.textContent);
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!<>-_\\/[]{}—=+*^?#';
        let iter = 0;
        clearInterval(el._si);
        el._si = setInterval(() => {
            el.textContent = original.split('').map((c, i) =>
                i < iter ? original[i] : chars[Math.floor(Math.random() * chars.length)]
            ).join('');
            iter += 0.5;
            if (iter >= original.length) { clearInterval(el._si); el.textContent = original; }
        }, 30);
    }

    /* ═══════════════════════════════════════════
       Init Functions
       ═══════════════════════════════════════════ */
    gsap.registerPlugin(ScrollTrigger);

    function initNav() {
        const nav = document.getElementById('nav');
        const toggle = document.getElementById('navToggle');
        const links = document.getElementById('navLinks');
        let open = false;
        toggle.addEventListener('click', () => {
            open = !open;
            links.classList.toggle('open', open);
            toggle.classList.toggle('active', open);
            nav.classList.toggle('nav--menu-open', open);
        });
        const closeMenu = () => {
            open = false;
            links.classList.remove('open');
            toggle.classList.remove('active');
            nav.classList.remove('nav--menu-open');
        };
        links.addEventListener('click', () => { if (open) closeMenu(); });
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', scrollY > 60);
            if (open) closeMenu();
        }, { passive: true });
    }

    function initScrollProgress() {
        const bar = document.getElementById('scrollProgress');
        gsap.to(bar, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: 'body', start: 'top top', end: 'bottom bottom', scrub: true },
        });
    }

    function initHeroReveal() {
        const title = document.getElementById('heroTitle');
        const text = title.textContent.trim();
        title.innerHTML = text.split('').map((c, i) =>
            `<span class="hero__char" style="--i:${i}">${c}</span>`
        ).join('');

        const tl = gsap.timeline({ delay: 0.15 });
        tl.fromTo('.hero__char',
            { y: 80, rotateX: 60, opacity: 0 },
            { y: 0, rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'expo.out' }
        );
        tl.fromTo('.hero__tag', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4');
        tl.fromTo('.hero__sub', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3');
        tl.fromTo('.hero__actions', { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2');
    }

    function initHeadingReveals() {
        document.querySelectorAll('.heading-reveal__inner').forEach(el => {
            gsap.to(el, {
                y: 0,
                duration: 1,
                ease: 'expo.out',
                scrollTrigger: { trigger: el.parentElement, start: 'top 85%' },
            });
        });
    }

    function initMenu() {
        gsap.fromTo('.m-item', 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
              scrollTrigger: { trigger: '.menu__grid', start: 'top 80%' }
            }
        );
    }

    function initCapabilities() {
        document.querySelectorAll('.cap-card').forEach(card => {
            const txt = card.querySelector('[data-scramble-text]');
            if (txt) { card.addEventListener('mouseenter', () => scrambleText(txt)); }
            gsap.fromTo(card,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
                  scrollTrigger: { trigger: card, start: 'top 88%' } }
            );
        });
    }

    function initWork() {
        document.querySelectorAll('.work__item').forEach((item, i) => {
            gsap.fromTo(item,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: i * 0.1, ease: 'power2.out',
                  scrollTrigger: { trigger: item, start: 'top 90%' } }
            );
        });
    }

    function initMagnetic() {
        if (matchMedia('(hover: none)').matches) return;
        document.querySelectorAll('[data-magnetic]').forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r = btn.getBoundingClientRect();
                const x = e.clientX - r.left - r.width / 2;
                const y = e.clientY - r.top - r.height / 2;
                gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
            });
        });
    }

    function initCTA() {
        gsap.fromTo('.cta__inner',
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: 'expo.out',
              scrollTrigger: { trigger: '.cta', start: 'top 75%' } }
        );
    }

    /* ═══════════════════════════════════════════
       Boot
       ═══════════════════════════════════════════ */
    const lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1.0, smoothWheel: true });
    lenis.on('scroll', () => {
        ScrollTrigger.update();
    });
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    initNav();
    document.addEventListener('DOMContentLoaded', () => {
        requestAnimationFrame(() => {
            initFallingGrains();
            initScrollProgress();
            initHeroReveal();
            initHeadingReveals();
            initMenu();
            initCapabilities();
            initWork();
            initMagnetic();
            initCTA();
        });
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="scroll-progress" id="scrollProgress"></div>
<div className="coffee-grains-bg"></div>
<div className="jp-vertical">未来のコーヒーラボ</div>

<canvas className="fixed inset-0 pointer-events-none z-0" id="grainsCanvas"></canvas>
<nav className="nav" id="nav">
<a className="nav__logo" href="#">BREW<span>.</span> <span className="nav__logo-jp">システム</span></a>
<div className="nav__links" id="navLinks">
<a href="#menu">Menu</a>
<a href="#capabilities">Specs</a>
<a href="#work">Archives</a>
<a href="#contact">Terminal</a>
</div>
<a className="nav__cta" href="#menu">Initialize <iconify-icon height="16" icon="solar:bolt-linear" width="16"></iconify-icon></a>
<button aria-label="Menu" className="nav__toggle" id="navToggle"><span></span><span></span></button>
</nav>

<section className="hero section" id="hero">
<div className="hero__content">
<div className="hero__tag">Future Coffee Lab</div>
<h1 className="hero__title" id="heroTitle">
<span className="hero__char" style={{-I: '0'}}>B</span><span className="hero__char" style={{-I: '1'}}>R</span><span className="hero__char" style={{-I: '2'}}>E</span><span className="hero__char" style={{-I: '3'}}>W</span>
</h1>
<p className="hero__sub">
                Engineering flavor profiles that transcend conventional sensory boundaries.
                <span className="jp-text">完璧な抽出プロトコルを起動します。</span>
</p>
<div className="hero__actions">
<a className="hero__btn hero__btn--primary" data-magnetic="" href="#menu">
                    Access Menu
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="hero__btn hero__btn--ghost" data-magnetic="" href="#contact">
                    Locate Terminal
                </a>
</div>
</div>
</section>

<section className="menu section" id="menu">
<div className="container">
<div className="ui-cross ui-cross--tl"></div><div className="ui-cross ui-cross--tr"></div>
<div className="section-tag"><span>[ 01 ]</span> // System_Menu</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner font-display text-4xl font-semibold uppercase tracking-tight text-white mb-8 block">Extraction<br/>Protocols</span></span></h2>
<div className="menu__grid">

<div className="menu__col">
<h3 className="menu__cat">Black / Pure <span className="jp-text">ブラック</span></h3>
<div className="menu__list">

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Neon Genesis Pour" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Neon Genesis Pour</span>
<span className="m-item__dots"></span>
<span className="m-item__price">550</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">Single-origin Yirgacheffe. Absolute clarity, inducing sensory overload. <span className="jp-text">高解像度</span></p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Dark Matter Drip" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Dark Matter Drip</span>
<span className="m-item__dots"></span>
<span className="m-item__price">400</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">Obsidian dark roast. Gravity-defying body with notes of burnt cacao.</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Akira Red Eye" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1620131435887-846985012571?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Akira Red Eye</span>
<span className="m-item__dots"></span>
<span className="m-item__price">650</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">High-octane drip fortified with a double shot of hyper-espresso.</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="menu__col">
<h3 className="menu__cat">Modified / Milk <span className="jp-text">ミルク</span></h3>
<div className="menu__list">

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Mecha Matcha Latte" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Mecha Matcha Latte</span>
<span className="m-item__dots"></span>
<span className="m-item__price">700</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">Ceremonial grade Uji matcha synchronized with steamed oat milk. <span className="jp-text">同期率 100%</span></p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Ghost Macchiato" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Ghost Macchiato</span>
<span className="m-item__dots"></span>
<span className="m-item__price">600</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">Madagascar vanilla bean suspended in an ethereal espresso cloud.</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>

<div className="m-item flex flex-col sm:flex-row items-start sm:items-center gap-4 relative group p-3 -mx-3 rounded-xl transition-all hover:bg-white/5 border border-transparent hover:border-white/5">
<div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden flex-shrink-0 border border-white/10 shadow-lg">
<img alt="Cyber-Mocha" className="w-full h-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-110" src="https://images.unsplash.com/photo-1572442388796-11668aa44cb0?w=150&amp;q=80"/>
</div>
<div className="flex-grow w-full">
<div className="m-item__header">
<span className="m-item__name">Cyber-Mocha</span>
<span className="m-item__dots"></span>
<span className="m-item__price">650</span>
</div>
<p className="m-item__desc sm:max-w-[85%]">Valrhona dark chocolate integrated into a heavy espresso matrix.</p>
</div>
<button className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 backdrop-blur-md px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                                Order
                                <iconify-icon height="16" icon="solar:cart-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="capabilities section" id="capabilities">
<div className="container">
<div className="section-tag"><span>[ 02 ]</span> // Hardware_Specs</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner font-display text-4xl font-semibold uppercase tracking-tight text-white block">Lab<br/>Capabilities</span></span></h2>
<div className="cap__grid">
<div className="cap-card" data-scramble="">
<div className="cap-card__num">TYPE-01 <span>焙煎</span></div>
<iconify-icon className="cap-card__icon" icon="solar:flame-linear"></iconify-icon>
<h3 className="cap-card__title" data-scramble-text="">Thermal Roasting</h3>
<p className="cap-card__desc">Algorithm-driven temperature curves to unlock the precise molecular structure of every micro-lot bean.</p>
</div>
<div className="cap-card" data-scramble="">
<div className="cap-card__num">TYPE-02 <span>抽出</span></div>
<iconify-icon className="cap-card__icon" icon="solar:droplets-linear"></iconify-icon>
<h3 className="cap-card__title" data-scramble-text="">Nitro Infusion</h3>
<p className="cap-card__desc">Cold-steeped concentrates injected with microscopic nitrogen bubbles for an impossible velvet texture.</p>
</div>
</div>
</div>
</section>

<section className="work section" id="work">
<div className="container">
<div className="section-tag"><span>[ 03 ]</span> // Visual_Archives</div>
<h2><span className="heading-reveal"><span className="heading-reveal__inner font-display text-4xl font-semibold uppercase tracking-tight text-white block">Selected<br/>Outputs</span></span></h2>
<div className="work__grid">
<a className="work__item work__item--tall" href="#">
<img alt="Espresso" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Extraction #01</span>
<h3 className="work__name">Void Core <span className="jp-text">ヴォイドコア</span></h3>
<iconify-icon className="work__overlay-icon" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</a>
<a className="work__item" href="#">
<img alt="Matcha" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=1600&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Extraction #02</span>
<h3 className="work__name">Green Matter <span className="jp-text">グリーンマター</span></h3>
<iconify-icon className="work__overlay-icon" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</a>
<a className="work__item" href="#">
<img alt="Cold Brew" className="work__img object-cover w-full h-full absolute inset-0" loading="lazy" src="https://images.unsplash.com/photo-1515823662972-da6a2b4d3002?w=1600&amp;q=80"/>
<div className="work__overlay">
<span className="work__cat">Extraction #03</span>
<h3 className="work__name">Stasis Brew <span className="jp-text">ステイシス</span></h3>
<iconify-icon className="work__overlay-icon" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="cta section" id="contact">
<div className="container">
<div className="cta__inner">
<div className="ui-cross ui-cross--tl"></div><div className="ui-cross ui-cross--tr"></div>
<div className="ui-cross ui-cross--bl"></div><div className="ui-cross ui-cross--br"></div>
<h2 className="cta__title">Connect to<br/><em>Mainframe</em></h2>
<p className="cta__sub">Initialize your order protocol. Terminals currently accepting remote connections.</p>
<a className="cta__btn" data-magnetic="" href="#">
<span>Execute Order</span>
<iconify-icon height="20" icon="solar:programming-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="footer">
<div className="container">
<div className="footer__inner">
<div className="footer__left">
<span className="footer__logo">BREW<span>.</span></span>
<p className="footer__tagline">Future Coffee Lab // Neo-Tokyo Sector</p>
</div>
<div className="footer__col">
<span className="footer__col-title">Index</span>
<a href="#menu">Menu</a><a href="#capabilities">Specs</a><a href="#work">Archives</a><a href="#contact">Terminal</a>
</div>
<div className="footer__col">
<span className="footer__col-title">Network</span>
<a href="#">X_Corp</a><a href="#">Insta_Grid</a><a href="#">Byte_Dance</a>
</div>
</div>
<div className="footer__bottom">
<span>VER 2.0.25 // BREW Lab</span>
<span>System Online</span>
</div>
</div>
</footer>






    </>
  );
}
