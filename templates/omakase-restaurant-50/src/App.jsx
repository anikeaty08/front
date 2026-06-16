import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  CONFIGURATION                                                         ║
           ║                                                                        ║
           ║  Change BASE_URL when hosting images externally.                       ║
           ║                                                                        ║
           ║  LOCAL TESTING:                                                        ║
           ║  BASE_URL = './sushiAnimation'                                         ║
           ║                                                                        ║
           ║  GITHUB HOSTED:                                                        ║
           ║  BASE_URL = 'https://raw.githubusercontent.com/USER/REPO/main/sushiAnimation' ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        const CONFIG = {
            // ═══════════════════════════════════════════════════════════════════
            // IMAGE SOURCE - Change this URL for different hosting
            //
            // LOCAL TESTING:
            //   BASE_URL: './sushiAnimation'
            //
            // GITHUB HOSTED (current - for aura.build):
            // ═══════════════════════════════════════════════════════════════════
            BASE_URL: 'https://raw.githubusercontent.com/VanhDc/sushi-template/main/sushiAnimation',

            // Number of frames in the animation sequence
            FRAME_COUNT: 192,

            // Frame filename pattern
            // Files are named: frame_000.jpg, frame_001.jpg, ... frame_191.jpg
            getFramePath: function(index) {
                const frameNum = String(index).padStart(3, '0');
                return `${this.BASE_URL}/frame_${frameNum}.jpg`;
            }
        };

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  IMAGE PRELOADER                                                       ║
           ║                                                                        ║
           ║  WHY PRELOAD?                                                          ║
           ║  The scroll animation needs instant access to all 192 frames.          ║
           ║  If we loaded them on-demand, there would be visible loading delays    ║
           ║  as the user scrolls.                                                  ║
           ║                                                                        ║
           ║  HOW IT WORKS:                                                         ║
           ║  1. Create an Image object for each frame                              ║
           ║  2. Set the src to trigger loading                                     ║
           ║  3. Track load progress with a counter                                 ║
           ║  4. Store loaded images in an array for quick access                   ║
           ║  5. Resolve the promise when all images are loaded                     ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        const images = [];  // Array to store all loaded Image objects
        let imagesLoaded = 0;

        function preloadImages() {
            return new Promise((resolve) => {
                const loader = document.getElementById('loader');
                const progressBar = document.getElementById('loaderProgress');
                const countText = document.getElementById('loaderCount');

                for (let i = 0; i < CONFIG.FRAME_COUNT; i++) {
                    const img = new Image();

                    // ═══════════════════════════════════════════════════════════
                    // IMAGE LOAD EVENT
                    // Fires when a single image finishes loading
                    // ═══════════════════════════════════════════════════════════
                    img.onload = () => {
                        imagesLoaded++;
                        const progress = (imagesLoaded / CONFIG.FRAME_COUNT) * 100;

                        // Update loading UI
                        progressBar.style.width = `${progress}%`;
                        countText.textContent = `${Math.round(progress)}%`;

                        // All images loaded - hide loader and start experience
                        if (imagesLoaded === CONFIG.FRAME_COUNT) {
                            setTimeout(() => {
                                loader.classList.add('hidden');
                                initAnimations();
                                resolve();
                            }, 500); // Small delay for smooth transition
                        }
                    };

                    // ═══════════════════════════════════════════════════════════
                    // IMAGE ERROR HANDLING
                    // If an image fails to load, we still count it to prevent
                    // the loader from hanging indefinitely
                    // ═══════════════════════════════════════════════════════════
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${i}`);
                        imagesLoaded++;
                        const progress = (imagesLoaded / CONFIG.FRAME_COUNT) * 100;
                        progressBar.style.width = `${progress}%`;
                        countText.textContent = `${Math.round(progress)}%`;

                        if (imagesLoaded === CONFIG.FRAME_COUNT) {
                            setTimeout(() => {
                                loader.classList.add('hidden');
                                initAnimations();
                                resolve();
                            }, 500);
                        }
                    };

                    // Start loading the image
                    img.src = CONFIG.getFramePath(i);
                    images.push(img);
                }
            });
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  CANVAS SETUP & SCROLL ANIMATION                                       ║
           ║                                                                        ║
           ║  THE CORE TECHNIQUE:                                                   ║
           ║  This is where the scroll-driven animation magic happens.              ║
           ║                                                                        ║
           ║  CANVAS BASICS:                                                        ║
           ║  - Canvas is an HTML element for drawing graphics                      ║
           ║  - getContext('2d') gives us a 2D rendering context                    ║
           ║  - drawImage() renders an image to the canvas                          ║
           ║                                                                        ║
           ║  WHY CANVAS OVER IMG?                                                  ║
           ║  - Canvas drawing is GPU-accelerated                                   ║
           ║  - No DOM manipulation overhead                                        ║
           ║  - Smoother performance at high frame rates                            ║
           ║                                                                        ║
           ║  SCROLL-TO-FRAME MAPPING:                                              ║
           ║  scroll progress (0 to 1) → frame index (0 to 191)                     ║
           ║  Example: 50% scroll = frame 95                                        ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initCanvas() {
            const canvas = document.getElementById('heroCanvas');
            const ctx = canvas.getContext('2d');

            // ═══════════════════════════════════════════════════════════════════
            // CANVAS SIZING
            // We set the canvas size to match the viewport while maintaining
            // the aspect ratio of our source images (800x450)
            // ═══════════════════════════════════════════════════════════════════
            function resizeCanvas() {
                const container = canvas.parentElement;
                const containerWidth = container.offsetWidth;
                const containerHeight = container.offsetHeight;

                // Source image dimensions
                const imgWidth = 800;
                const imgHeight = 450;
                const imgAspect = imgWidth / imgHeight;

                // Calculate size to cover container (like background-size: cover)
                let drawWidth, drawHeight;
                const containerAspect = containerWidth / containerHeight;

                if (containerAspect > imgAspect) {
                    // Container is wider than image aspect
                    drawWidth = containerWidth;
                    drawHeight = containerWidth / imgAspect;
                } else {
                    // Container is taller than image aspect
                    drawHeight = containerHeight;
                    drawWidth = containerHeight * imgAspect;
                }

                canvas.width = drawWidth;
                canvas.height = drawHeight;

                // Center the canvas
                canvas.style.width = `${drawWidth}px`;
                canvas.style.height = `${drawHeight}px`;

                // Redraw current frame after resize
                if (images[0] && images[0].complete) {
                    renderFrame(0);
                }
            }

            // ═══════════════════════════════════════════════════════════════════
            // RENDER FRAME
            // Draws a specific frame to the canvas
            // ═══════════════════════════════════════════════════════════════════
            function renderFrame(frameIndex) {
                // Clamp frame index to valid range
                const index = Math.min(Math.max(frameIndex, 0), CONFIG.FRAME_COUNT - 1);
                const img = images[index];

                if (img && img.complete && img.naturalWidth > 0) {
                    // Clear canvas and draw new frame
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                }
            }

            // Initial setup
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);

            // Render first frame immediately
            renderFrame(0);

            // ═══════════════════════════════════════════════════════════════════
            // GSAP SCROLLTRIGGER SETUP
            // This is where we connect scroll position to frame rendering
            //
            // KEY PROPERTIES:
            // - trigger: The element that triggers the animation
            // - start: When the animation starts ("top top" = when top of trigger hits top of viewport)
            // - end: When the animation ends ("+=300%" = after scrolling 3x viewport height)
            // - pin: Keeps the element fixed during the animation
            // - scrub: Smoothly links animation to scroll position (0.5 = slight smoothing)
            // - onUpdate: Called on every scroll update with progress value
            // ═══════════════════════════════════════════════════════════════════

            gsap.registerPlugin(ScrollTrigger);

            // ═══════════════════════════════════════════════════════════════════
            // SCROLLTRIGGER DEFAULTS
            // anticipatePin prevents the "stuck" feeling when scrolling starts
            // by adjusting pinned element positioning ahead of time
            // ═══════════════════════════════════════════════════════════════════
            ScrollTrigger.defaults({
                anticipatePin: 1
            });

            // Create the scroll-driven animation
            ScrollTrigger.create({
                trigger: '#hero',
                start: 'top top',
                end: '+=300%',  // 3 viewport heights of scrolling
                pin: true,      // Pin the hero section during animation
                pinSpacing: true, // Add spacing below for smooth scroll
                scrub: 0.3,     // Faster scrubbing for more responsive feel
                anticipatePin: 1, // Prevent initial scroll jump
                invalidateOnRefresh: true, // Recalculate on resize
                onUpdate: (self) => {
                    // ═══════════════════════════════════════════════════════════
                    // THE MAGIC LINE
                    // self.progress is a value from 0 to 1
                    // We multiply by (FRAME_COUNT - 1) to get frame index 0-191
                    // Math.floor ensures we get whole numbers
                    // ═══════════════════════════════════════════════════════════
                    const frameIndex = Math.floor(self.progress * (CONFIG.FRAME_COUNT - 1));
                    renderFrame(frameIndex);
                }
            });

            return { renderFrame, resizeCanvas };
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  NAVIGATION HIDE/SHOW ON SCROLL                                        ║
           ║                                                                        ║
           ║  TECHNIQUE:                                                            ║
           ║  Track scroll direction by comparing current vs previous scroll        ║
           ║  position. Hide nav on scroll down, show on scroll up.                 ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initNavigation() {
            const nav = document.getElementById('nav');
            let lastScroll = 0;

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;

                // Only hide/show after scrolling past the hero
                if (currentScroll > window.innerHeight) {
                    if (currentScroll > lastScroll) {
                        // Scrolling down - hide nav
                        nav.classList.add('hidden');
                    } else {
                        // Scrolling up - show nav
                        nav.classList.remove('hidden');
                    }
                } else {
                    nav.classList.remove('hidden');
                }

                lastScroll = currentScroll;
            });
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  BACKGROUND KANJI SCROLL REVEAL                                        ║
           ║                                                                        ║
           ║  TECHNIQUE:                                                            ║
           ║  Uses clip-path animation to reveal the vertical kanji text as         ║
           ║  the user scrolls. The text reveals from top to bottom, creating       ║
           ║  an elegant "unrolling scroll" effect.                                 ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initBackgroundKanjiAnimation() {
            const kanjiElement = document.querySelector('.background-kanji');
            const kanjiText = document.querySelector('.background-kanji__text');
            const mainContent = document.querySelector('.main-content');
            if (!kanjiElement || !kanjiText || !mainContent) return;

            // Measure text height
            kanjiElement.style.height = 'auto';
            const textHeight = kanjiText.offsetHeight;
            kanjiElement.style.height = '0px';

            // Direct scroll event for true 1:1 mapping
            const updateHeight = () => {
                const rect = mainContent.getBoundingClientRect();
                const vh = window.innerHeight;

                // Progress: 0 at start, 1 at end of main-content scroll
                const start = rect.top - vh;
                const end = rect.bottom;
                const progress = Math.min(Math.max(-start / (end - start), 0), 1);

                kanjiElement.style.height = (progress * textHeight) + 'px';
            };

            window.addEventListener('scroll', updateHeight, { passive: true });
            window.addEventListener('resize', updateHeight);
            updateHeight();
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  SCROLL REVEAL ANIMATIONS                                              ║
           ║                                                                        ║
           ║  TECHNIQUE:                                                            ║
           ║  Elements with .reveal classes start invisible/offset.                 ║
           ║  ScrollTrigger animates them to their final state when they            ║
           ║  enter the viewport.                                                   ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initRevealAnimations() {
            // ═══════════════════════════════════════════════════════════════════
            // Refresh ScrollTrigger to recalculate positions after hero pin
            // ═══════════════════════════════════════════════════════════════════
            ScrollTrigger.refresh();

            // Reveal from bottom
            gsap.utils.toArray('.reveal').forEach(elem => {
                gsap.fromTo(elem,
                    { opacity: 0, y: 40 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // Reveal from left
            gsap.utils.toArray('.reveal-left').forEach(elem => {
                gsap.fromTo(elem,
                    { opacity: 0, x: -40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // Reveal from right
            gsap.utils.toArray('.reveal-right').forEach(elem => {
                gsap.fromTo(elem,
                    { opacity: 0, x: 40 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });

            // Reveal with scale (menu items)
            gsap.utils.toArray('.reveal-scale').forEach((elem, i) => {
                gsap.fromTo(elem,
                    { opacity: 0, scale: 0.95 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        delay: i * 0.1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: elem,
                            start: 'top 95%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  PINNED HORIZONTAL SCROLL FOR MENU                                     ║
           ║                                                                        ║
           ║  TECHNIQUE: Convert vertical scroll to horizontal movement             ║
           ║                                                                        ║
           ║  This creates an Apple-style horizontal gallery where:                 ║
           ║  1. The section pins when it enters the viewport                       ║
           ║  2. Scrolling down moves menu items from right to left                 ║
           ║  3. The section unpins after all items have scrolled through           ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initMenuHorizontalScroll() {
            const menuSection = document.querySelector('.menu');
            const menuScroll = document.querySelector('.menu__scroll');
            const menuItems = document.querySelectorAll('.menu__item');

            if (!menuSection || !menuScroll || menuItems.length === 0) return;

            // Skip pinned scroll on mobile - use native horizontal scroll instead
            if (window.innerWidth <= 768) return;

            // Calculate total scroll distance needed
            const itemWidth = menuItems[0].offsetWidth;
            const gap = parseFloat(getComputedStyle(menuScroll).gap) || 32;
            const totalWidth = (itemWidth * menuItems.length) + (gap * (menuItems.length - 1));
            const viewportWidth = window.innerWidth;
            const paddingLeft = parseFloat(getComputedStyle(menuScroll).paddingLeft) || 32;

            // How far we need to scroll horizontally
            const scrollDistance = totalWidth - viewportWidth + paddingLeft + gap;

            // Create the pinned horizontal scroll
            gsap.to(menuScroll, {
                x: -scrollDistance,
                ease: 'none',
                scrollTrigger: {
                    trigger: menuSection,
                    start: 'top top',
                    end: () => `+=${scrollDistance}`,
                    pin: true,
                    scrub: 0.5,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  HERO CONTENT ANIMATION                                                ║
           ║                                                                        ║
           ║  Animates the hero text and scroll indicator after loading.            ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initHeroAnimation() {
            const tl = gsap.timeline({ delay: 0.5 });

            tl.to('#heroJapanese', {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: 'power3.out'
            })
            .to('#heroTitle', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.8')
            .to('#heroTagline', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.6')
            .to('#heroScroll', {
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            }, '-=0.4');
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  EXPERIENCE CARDS HOVER EFFECT                                         ║
           ║                                                                        ║
           ║  TECHNIQUE: Track mouse position and update CSS custom properties      ║
           ║  to create a spotlight effect that follows the cursor.                 ║
           ║                                                                        ║
           ║  The ::after pseudo-element uses these variables to position its       ║
           ║  radial gradient, creating the "reveal" effect on the pattern.         ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initExperienceHover() {
            const items = document.querySelectorAll('.experience__item');

            items.forEach(item => {
                // Track mouse position within each card
                item.addEventListener('mousemove', (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    item.style.setProperty('--mouse-x', `${x}%`);
                    item.style.setProperty('--mouse-y', `${y}%`);
                });

                // Don't reset position on leave - spotlight stays at last cursor position
                // This prevents the "center flash" during fade-out
            });
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  MAIN INITIALIZATION                                                   ║
           ║                                                                        ║
           ║  Called after all images are loaded. Sets up all interactions.         ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        function initAnimations() {
            initCanvas();
            initNavigation();
            initHeroAnimation();
            initExperienceHover();  // Experience cards spotlight effect

            // Initialize reveal animations after a short delay
            // This ensures the hero pin is set up first
            setTimeout(() => {
                initRevealAnimations();
                initBackgroundKanjiAnimation();
                initMenuHorizontalScroll();
                // Final refresh after all animations are set up
                setTimeout(() => ScrollTrigger.refresh(), 200);
            }, 100);
        }

        /* ╔════════════════════════════════════════════════════════════════════════╗
           ║  START THE EXPERIENCE                                                  ║
           ║                                                                        ║
           ║  Wait for DOM to be ready, then preload images.                        ║
           ╚════════════════════════════════════════════════════════════════════════╝ */

        document.addEventListener('DOMContentLoaded', () => {
            preloadImages();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="loader__logo">鯨</div>
<div className="loader__text">Loading Experience</div>
<div className="loader__progress">
<div className="loader__progress-bar" id="loaderProgress"></div>
</div>
<div className="loader__count" id="loaderCount">0%</div>
</div>

<div className="grain"></div>

<nav className="nav" id="nav">
<a className="nav__logo" href="#">
            鯨 <span className="nav__logo-en">Kujira</span>
</a>
<ul className="nav__links">
<li><a className="nav__link" href="#philosophy">Philosophy</a></li>
<li><a className="nav__link" href="#menu">Menu</a></li>
<li><a className="nav__link" href="#experience">Experience</a></li>
<li><a className="nav__link" href="#chef">Our Chef</a></li>
</ul>
<a className="nav__cta" href="#reservation">Reserve</a>
<button aria-label="Menu" className="nav__menu-btn">
<span></span>
<span></span>
<span></span>
</button>
</nav>

<section className="hero" id="hero">
<div className="hero__canvas-container">
<canvas className="hero__canvas" id="heroCanvas"></canvas>
<div className="hero__overlay"></div>

<div className="hero__fade"></div>
<div className="hero__content">
<h1 className="hero__japanese" id="heroJapanese">鯨</h1>
<p className="hero__title" id="heroTitle">Kujira</p>
<p className="hero__tagline" id="heroTagline">Artistry in Every Slice</p>
</div>
<div className="hero__scroll" id="heroScroll">
<span className="hero__scroll-text">Scroll to Explore</span>
<span className="hero__scroll-line"></span>
</div>
</div>
</section>

<div className="main-content">

<div aria-hidden="true" className="background-kanji">
<div className="background-kanji__text">寿司の芸術鮮度匠心技美味極上職人魂伝統革新四季折々海の恵み一期一会真心込めて繊細な技巧</div>
</div>

<section className="philosophy" id="philosophy">
<div className="philosophy__container">
<div className="philosophy__left reveal-left">
<span className="philosophy__kanji">匠</span>
<div className="philosophy__image-frame">

<img alt="Master chef preparing sushi" className="philosophy__image" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/chef-hands.jpeg"/>
</div>
</div>
<div className="philosophy__right">
<span className="philosophy__label reveal">Our Philosophy</span>
<h2 className="philosophy__heading reveal">
                    Where Tradition<br/>
                    Meets <em>Mastery</em>
</h2>
<p className="philosophy__text reveal">
                    At Kujira, we believe sushi is more than food—it's an art form passed down through generations. Each piece tells a story of the sea, the seasons, and the skilled hands that craft it.
                </p>
<p className="philosophy__text reveal">
                    Our commitment to sourcing the finest ingredients from Tokyo's Tsukiji Market ensures every bite transports you to the heart of Japan.
                </p>
<span className="philosophy__signature reveal">— 山田 健太郎</span>
</div>
</div>
</section>

<section className="menu" id="menu">
<div className="menu__header">
<div className="menu__title-group">
<span className="menu__label reveal">Signature Selection</span>
<h2 className="menu__title reveal">Omakase Highlights</h2>
</div>
<a className="menu__view-all reveal" href="#">
                View Full Menu
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
<div className="menu__scroll">
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Otoro - Premium fatty tuna" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/otoro.jpeg"/>
<div className="menu__item-overlay"></div>
<span className="menu__item-price">$48</span>
</div>
<div className="menu__item-content">
<span className="menu__item-japanese">大トロ</span>
<h3 className="menu__item-name">Otoro</h3>
<p className="menu__item-desc">Premium fatty bluefin tuna belly, melt-in-your-mouth texture</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Uni - Hokkaido sea urchin" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/uni.jpeg"/>
<div className="menu__item-overlay"></div>
<span className="menu__item-price">$36</span>
</div>
<div className="menu__item-content">
<span className="menu__item-japanese">雲丹</span>
<h3 className="menu__item-name">Uni</h3>
<p className="menu__item-desc">Hokkaido sea urchin, briny sweetness with creamy finish</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="A5 Wagyu - Seared Miyazaki beef" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/wagyu.jpeg"/>
<div className="menu__item-overlay"></div>
<span className="menu__item-price">$32</span>
</div>
<div className="menu__item-content">
<span className="menu__item-japanese">和牛</span>
<h3 className="menu__item-name">A5 Wagyu</h3>
<p className="menu__item-desc">Seared Miyazaki wagyu with truffle ponzu</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Amaebi - Sweet shrimp" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/amaebi.jpeg"/>
<div className="menu__item-overlay"></div>
<span className="menu__item-price">$28</span>
</div>
<div className="menu__item-content">
<span className="menu__item-japanese">甘海老</span>
<h3 className="menu__item-name">Amaebi</h3>
<p className="menu__item-desc">Sweet shrimp, delicate and pristine from Hokkaido waters</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Anago - Conger eel" src="https://raw.githubusercontent.com/VanhDc/sushi-template/main/images/anago.jpeg"/>
<div className="menu__item-overlay"></div>
<span className="menu__item-price">$24</span>
</div>
<div className="menu__item-content">
<span className="menu__item-japanese">穴子</span>
<h3 className="menu__item-name">Anago</h3>
<p className="menu__item-desc">Conger eel with house-made sweet soy glaze</p>
</div>
</article>
</div>
</section>

<section className="experience" id="experience">
<div className="experience__container">
<div className="experience__header">
<span className="experience__label reveal">The Kujira Way</span>
<h2 className="experience__title reveal">An Unforgettable Experience</h2>
</div>
<div className="experience__grid">
<div className="experience__item reveal">
<span className="experience__icon">鮮</span>
<h3 className="experience__item-title">Daily Fresh</h3>
<p className="experience__item-text">Fish flown in daily from Tokyo's renowned Tsukiji Market, ensuring peak freshness and authentic flavors.</p>
</div>
<div className="experience__item reveal">
<span className="experience__icon">匠</span>
<h3 className="experience__item-title">Master Crafted</h3>
<p className="experience__item-text">Our itamae trained for over 15 years in Tokyo, bringing time-honored techniques to every creation.</p>
</div>
<div className="experience__item reveal">
<span className="experience__icon">心</span>
<h3 className="experience__item-title">Heartfelt Service</h3>
<p className="experience__item-text">Intimate 12-seat counter experience where hospitality meets artistry in perfect harmony.</p>
</div>
</div>
</div>
</section>

<section className="chef" id="chef">
<div className="chef__background"></div>
<div className="chef__overlay"></div>
<div className="chef__content">
<div className="chef__card reveal-right">
<span className="chef__label">Master Chef</span>
<blockquote className="chef__quote">
                    Sushi is not about the fish. It's about the moment of harmony between nature, technique, and the guest's anticipation.
                </blockquote>
<p className="chef__name">Kentaro Yamada</p>
<p className="chef__title">Head Itamae, 20 Years Experience</p>
</div>
<span className="chef__kanji">職</span>
</div>
</section>

<section className="reservation" id="reservation">
<div className="reservation__container">
<div className="reservation__kanji reveal">予約</div>
<span className="reservation__label reveal">Reserve Your Seat</span>
<h2 className="reservation__title reveal">Begin Your Journey</h2>
<p className="reservation__subtitle reveal">
                Our intimate 12-seat counter fills quickly. Reserve your omakase experience and discover why Kujira has been called "a transcendent journey through Japanese culinary art."
            </p>
<form className="reservation__form reveal" onsubmit="return false;">
<div className="reservation__row">
<input className="reservation__input" placeholder="Your Name" required="" type="text"/>
<input className="reservation__input" placeholder="Email Address" required="" type="email"/>
</div>
<div className="reservation__row">
<input className="reservation__input" required="" type="date"/>
<select className="reservation__input" required="">
<option disabled="" selected="" value="">Party Size</option>
<option value="1">1 Guest</option>
<option value="2">2 Guests</option>
<option value="3">3 Guests</option>
<option value="4">4 Guests</option>
</select>
</div>
<input className="reservation__input" placeholder="Phone Number" type="tel"/>
<button className="reservation__button" type="submit">Request Reservation</button>
</form>
</div>
</section>
</div>

<footer className="footer">
<span className="footer__kanji">鯨</span>
<div className="footer__container">
<div className="footer__brand">
<div className="footer__logo">鯨</div>
<div className="footer__logo-en">Kujira</div>
<p className="footer__tagline">Where tradition meets mastery. An intimate omakase experience in the heart of the city.</p>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Navigate</h4>
<ul className="footer__links">
<li><a className="footer__link" href="#philosophy">Philosophy</a></li>
<li><a className="footer__link" href="#menu">Menu</a></li>
<li><a className="footer__link" href="#experience">Experience</a></li>
<li><a className="footer__link" href="#chef">Our Chef</a></li>
</ul>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Contact</h4>
<p className="footer__contact-item">123 Sakura Lane<br/>Downtown, NY 10001</p>
<p className="footer__contact-item">+1 (212) 555-0123</p>
<p className="footer__contact-item">hello@kujira.com</p>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Hours</h4>
<p className="footer__contact-item">Tuesday — Saturday<br/>6:00 PM — 10:00 PM</p>
<p className="footer__contact-item">Closed Sunday &amp; Monday</p>
<div className="footer__social">
<a aria-label="Instagram" className="footer__social-link" href="#">IG</a>
<a aria-label="Facebook" className="footer__social-link" href="#">FB</a>
</div>
</div>
</div>
<div className="footer__bottom">
<p className="footer__copyright">© 2025 Kujira. All rights reserved.</p>
<div className="footer__legal">
<a className="footer__legal-link" href="#">Privacy Policy</a>
<a className="footer__legal-link" href="#">Terms of Service</a>
</div>
</div>
</footer>





    </>
  );
}
