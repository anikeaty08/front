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



// ============================================
// CATEGORY 1: FADE ANIMATIONS - JAVASCRIPT
// ============================================
(function() {
    const prompts = {
        seq: { title: "Sequential Staggered Fade", prompt: "Create a CSS keyframe animation for a Hero section where each element fades in and slides up individually. Use a 200ms stagger between them.", code: `.seq-el { opacity: 0; transform: translateY(40px); }\n.active .seq-el { animation: fadeSlideUp 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards; }` },
        dir: { title: "Directional Slide Entry", prompt: "I have a Bento Grid layout. The large left card slides from left, top-right from right, bottom-right from bottom.", code: `.dir-left { opacity: 0; transform: translateX(-60px); }\n.active .dir-left { transition: all 1.5s; opacity: 1; transform: translate(0); }` },
        scale: { title: "Elastic Scale Up", prompt: "Create an effect where the main image scales up from 0.85 to 1.0 with a bouncy elastic effect.", code: `.main-render { opacity: 0; transform: scale(0.85); }\n.active .main-render { transition: all 1.5s cubic-bezier(0.34, 1.56, 0.64, 1); opacity: 1; transform: scale(1); }` },
        rot: { title: "Rotation Settle", prompt: "Create a Team section animation where cards start rotated and snap into a clean grid.", code: `.rot-l { transform: rotate(-10deg) translateY(60px); opacity: 0; }\n.active .architect-card { transition: all 1.5s; opacity: 1; transform: rotate(0) translate(0); }` }
    };

    window.cat1Replay = function(id) {
        const sec = document.querySelector('#cat1-container #' + id);
        sec.classList.remove('active');
        const els = sec.querySelectorAll('.seq-el, .dir-left, .dir-right, .dir-up, .main-render, .float-info, .architect-card');
        els.forEach(e => { e.style.animation = 'none'; e.style.transition = 'none'; e.style.opacity = '0'; });
        void sec.offsetWidth;
        els.forEach(e => { e.style.animation = ''; e.style.transition = ''; e.style.opacity = ''; });
        setTimeout(() => sec.classList.add('active'), 50);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if(e.isIntersecting) e.target.classList.add('active');
            else e.target.classList.remove('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('#cat1-container section').forEach(s => observer.observe(s));

    const modal = document.getElementById('cat1-modal');
    window.cat1OpenModal = function(key) {
        document.getElementById('cat1-m-title').innerText = prompts[key].title;
        document.getElementById('cat1-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat1-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat1CloseModal = function() { modal.classList.remove('open'); };
    window.cat1CopyAll = function(e) {
        navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat1-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat1-m-code').innerText}`);
        const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000);
    };
    modal.addEventListener('click', e => { if(e.target===modal) cat1CloseModal(); });
})();



// ============================================
// CATEGORY 2: PARALLAX - JAVASCRIPT
// ============================================
(function() {
    const sections = {
        hero: document.querySelector('#cat2-container #p-hero'),
        multi: document.querySelector('#cat2-container #p-multi'),
        zoom: document.querySelector('#cat2-container #p-zoom'),
        reveal: document.querySelector('#cat2-container #p-reveal')
    };
    const elements = {
        heroBg: document.getElementById('cat2-hero-bg'),
        multiBack: document.getElementById('cat2-l-back'),
        multiMid: document.getElementById('cat2-l-mid'),
        multiFront: document.getElementById('cat2-l-front'),
        zoomBg: document.getElementById('cat2-zoom-bg'),
        zoomContent: document.getElementById('cat2-zoom-content'),
        revealImg: document.getElementById('cat2-reveal-img')
    };

    function updateParallax() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Hero
        const heroRect = sections.hero.getBoundingClientRect();
        if (heroRect.bottom > 0 && heroRect.top < windowHeight) {
            const heroOffset = sections.hero.offsetTop;
            elements.heroBg.style.transform = `translateY(${(scrollY - heroOffset) * 0.5}px)`;
        }

        // Multi-layer
        const multiRect = sections.multi.getBoundingClientRect();
        if (multiRect.top < windowHeight && multiRect.bottom > 0) {
            const relativeScroll = (windowHeight - multiRect.top);
            elements.multiBack.style.transform = `translateY(${relativeScroll * 0.15}px)`;
            elements.multiMid.style.transform = `translateY(${relativeScroll * 0.3}px)`;
            elements.multiFront.style.transform = `translateY(${relativeScroll * 0.05}px)`;
        }

        // Zoom
        const zoomRect = sections.zoom.getBoundingClientRect();
        if (zoomRect.top < windowHeight && zoomRect.bottom > 0) {
            const visibleProgress = Math.max(0, Math.min(1, (windowHeight - zoomRect.top) / windowHeight));
            const scale = 1 + (visibleProgress * 0.3);
            elements.zoomBg.style.transform = `scale(${scale})`;
            elements.zoomContent.style.opacity = Math.max(0, Math.min(1, 2 - (visibleProgress * 2.5)));
        } else if (zoomRect.top > windowHeight) {
            elements.zoomBg.style.transform = `scale(1)`;
            elements.zoomContent.style.opacity = 1;
        }

        // Reveal
        const revRect = sections.reveal.getBoundingClientRect();
        if (revRect.top < windowHeight && revRect.bottom > 0) {
            const revealProgress = Math.max(0, Math.min(1, (windowHeight - revRect.top) / (windowHeight * 0.9)));
            const insetTop = 100 - (revealProgress * 100);
            elements.revealImg.style.clipPath = `inset(${insetTop}% 0% 0% 0%)`;
        } else if (revRect.top > windowHeight) {
            elements.revealImg.style.clipPath = `inset(100% 0% 0% 0%)`;
        }

        requestAnimationFrame(updateParallax);
    }
    requestAnimationFrame(updateParallax);

    const prompts = {
        hero: { prompt: "Create a Hero Section with a Parallax Background effect. Background moves at 50% speed.", code: `bg.style.transform = \`translateY(\${scrolled * 0.5}px)\`;` },
        multi: { prompt: "Create Multi-Layer Parallax with 3 layers moving at different speeds (0.15x, 0.3x, 0.05x).", code: `layers.forEach((l,i) => l.style.transform = \`translateY(\${y * speeds[i]}px)\`);` },
        zoom: { prompt: "Create a Zoom Parallax effect. Background scales from 1.0 to 1.3, text fades out.", code: `bg.style.transform = \`scale(\${1 + progress * 0.3})\`;` },
        reveal: { prompt: "Create Image Reveal using clip-path. Image reveals from top to bottom.", code: `img.style.clipPath = \`inset(\${100 - progress*100}% 0% 0% 0%)\`;` }
    };

    const modal = document.getElementById('cat2-modal');
    window.cat2OpenModal = function(key) {
        document.getElementById('cat2-m-title').innerText = key.toUpperCase();
        document.getElementById('cat2-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat2-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat2CloseModal = function() { modal.classList.remove('open'); };
    window.cat2CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat2-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat2-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat2CloseModal(); });
})();



// ============================================
// CATEGORY 3: COUNTER ANIMATIONS - JAVASCRIPT
// ============================================
(function() {
    const prompts = {
        count: { prompt: "Create Stats Row where numbers count up from 0 to their final value.", code: `const ease = 1 - Math.pow(1 - progress, 3);\nel.innerText = formatNumber(target * ease);` },
        prog: { prompt: "Create Progress Bars that animate width while number counts up in sync.", code: `bar.style.width = targetWidth;\nrunCounter(numberEl, targetValue, 2000);` },
        circle: { prompt: "Create Circular Progress Indicators using SVG stroke-dashoffset.", code: `const offset = 565 - (565 * pct) / 100;\ncircle.style.strokeDashoffset = offset;` },
        card: { prompt: "Create dashboard Stat Cards with smooth count-up numbers.", code: `if (num >= 1000000) return (num/1000000).toFixed(1) + 'M';` }
    };

    function formatNum(value, decimals = 0) {
        return value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    }

    function runCounter(el, duration = 2000, delay = 0) {
        const target = parseFloat(el.dataset.target);
        const decimals = parseInt(el.dataset.decimals) || 0;
        const suffix = el.dataset.suffix || "";
        setTimeout(() => {
            let startTime = null;
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                const val = target * ease;
                el.innerText = formatNum(val, decimals) + suffix;
                if (progress < 1) window.requestAnimationFrame(step);
                else el.innerText = formatNum(target, decimals) + suffix;
            }
            window.requestAnimationFrame(step);
        }, delay);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) cat3PlaySection(entry.target.id);
            else cat3ResetSection(entry.target.id);
        });
    }, { threshold: 0.25 });
    document.querySelectorAll('#cat3-container section').forEach(s => observer.observe(s));

    function cat3PlaySection(id) {
        const sec = document.querySelector('#cat3-container #' + id);
        if(id === 'stats') sec.querySelectorAll('.counter').forEach(el => runCounter(el, 2500));
        if(id === 'progress') {
            sec.querySelectorAll('.prog-item').forEach((item, i) => {
                const bar = item.querySelector('.prog-fill');
                const num = item.querySelector('.counter-prog');
                setTimeout(() => { bar.style.transition = 'width 2s ease'; bar.style.width = bar.dataset.width; }, i * 200);
                runCounter(num, 2000, i * 200);
            });
        }
        if(id === 'circles') {
            sec.querySelectorAll('.circle-wrap').forEach((wrap, i) => {
                const circle = wrap.querySelector('.c-prog');
                const num = wrap.querySelector('.counter-circle');
                const pct = circle.dataset.pct;
                setTimeout(() => {
                    const offset = 565 - (pct / 100) * 565;
                    circle.style.transition = 'stroke-dashoffset 2.5s ease-in-out';
                    circle.style.strokeDashoffset = offset;
                }, i * 150);
                runCounter(num, 2500, i * 150);
            });
        }
        if(id === 'impact') sec.querySelectorAll('.counter-card').forEach(el => runCounter(el, 2800));
    }

    function cat3ResetSection(id) {
        const sec = document.querySelector('#cat3-container #' + id);
        sec.querySelectorAll('[class*="counter"]').forEach(el => { el.innerText = "0" + (el.dataset.suffix || ""); });
        sec.querySelectorAll('.prog-fill').forEach(el => { el.style.transition = 'none'; el.style.width = '0%'; });
        sec.querySelectorAll('.c-prog').forEach(el => { el.style.transition = 'none'; el.style.strokeDashoffset = '565'; });
    }

    window.cat3Replay = function(id) { cat3ResetSection(id); setTimeout(() => cat3PlaySection(id), 50); };

    const modal = document.getElementById('cat3-modal');
    window.cat3OpenModal = function(key) {
        document.getElementById('cat3-m-title').innerText = prompts[key].prompt.split('.')[0];
        document.getElementById('cat3-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat3-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat3CloseModal = function() { modal.classList.remove('open'); };
    window.cat3CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat3-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat3-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat3CloseModal(); });
})();



// ============================================
// CATEGORY 4: STAGGERED REVEAL - JAVASCRIPT
// ============================================
(function() {
    const prompts = {
        grid: { prompt: "Create Gallery Grid with staggered reveal. Each card fades in with delay.", code: `.card { opacity: 0; transform: translateY(40px); }\n.active .card { transition-delay: calc(var(--i) * 100ms); opacity: 1; transform: translateY(0); }` },
        svg: { prompt: "Create SVG Path Drawing with stroke-dashoffset animation.", code: `.path { stroke-dasharray: 1000; stroke-dashoffset: 1000; }\n.active .path { stroke-dashoffset: 0; transition: 2s; }` },
        text: { prompt: "Create Text Reveal using clip-path mask that reveals left to right.", code: `.text { clip-path: inset(0 100% 0 0); }\n.active .text { clip-path: inset(0 0% 0 0); transition: 1.4s; }` },
        curtain: { prompt: "Create Image Curtain reveal with staggered panels sliding up.", code: `.panel { transform: translateY(0); }\n.active .panel { transform: translateY(-100%); transition-delay: calc(var(--i) * 100ms); }` }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if(e.isIntersecting) e.target.classList.add('active');
            else e.target.classList.remove('active');
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('#cat4-container section').forEach(s => observer.observe(s));

    window.cat4Replay = function(id) {
        const sec = document.querySelector('#cat4-container #' + id);
        sec.classList.remove('active');
        void sec.offsetWidth;
        setTimeout(() => sec.classList.add('active'), 50);
    };

    const modal = document.getElementById('cat4-modal');
    window.cat4OpenModal = function(key) {
        document.getElementById('cat4-m-title').innerText = prompts[key].prompt.split('.')[0];
        document.getElementById('cat4-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat4-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat4CloseModal = function() { modal.classList.remove('open'); };
    window.cat4CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat4-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat4-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat4CloseModal(); });
})();



// ============================================
// CATEGORY 5: PINNED/STICKY - JAVASCRIPT
// ============================================
(function() {
    const stickyTitle = document.getElementById('cat5-sticky-title');
    const stickyDesc = document.getElementById('cat5-sticky-desc');
    const dots = document.querySelectorAll('#cat5-container .timeline-item');
    const blocks = document.querySelectorAll('#cat5-container .scroll-block');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                blocks.forEach(b => b.classList.remove('active'));
                entry.target.classList.add('active');
                const title = entry.target.dataset.title;
                const desc = entry.target.dataset.desc;
                const index = entry.target.dataset.index;
                dots.forEach(d => d.classList.remove('active'));
                const dot = document.getElementById(`cat5-time-${index}`);
                if(dot) dot.classList.add('active');
                stickyTitle.style.opacity = 0;
                stickyDesc.style.opacity = 0;
                setTimeout(() => {
                    stickyTitle.innerText = title;
                    stickyDesc.innerText = desc;
                    stickyTitle.style.opacity = 1;
                    stickyDesc.style.opacity = 1;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    blocks.forEach(b => observer.observe(b));

    const hContainer = document.getElementById('cat5-h-scroll-container');
    const hTrack = document.getElementById('cat5-h-track');
    window.addEventListener('scroll', () => {
        const rect = hContainer.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        if (rect.top <= 0 && rect.bottom >= viewHeight) {
            const scrolled = Math.abs(rect.top);
            const total = rect.height - viewHeight;
            const progress = scrolled / total;
            const trackWidth = hTrack.scrollWidth;
            const maxTranslate = trackWidth - viewWidth;
            const translateX = progress * maxTranslate;
            hTrack.style.transform = `translateX(-${translateX}px)`;
        }
    });

    const prompts = {
        split: { prompt: "Create a Split-Screen layout. Left side is 'position: sticky; top: 0; height: 100vh'. Right side scrolls naturally.", code: `.sticky-col { position: sticky; top: 0; height: 100vh; }` },
        stack: { prompt: "Create Stacked Slides effect. Each section is 'position: sticky; top: 0; height: 100vh'.", code: `.slide { position: sticky; top: 0; height: 100vh; }` },
        horiz: { prompt: "Create Horizontal Scroll pinned vertically. Parent is tall (500vh). Map vertical scroll to horizontal transform.", code: `const progress = scrolled / (totalHeight - viewHeight);\ntrack.style.transform = \`translateX(-\${progress * maxTranslate}px)\`;` }
    };

    const modal = document.getElementById('cat5-modal');
    window.cat5OpenModal = function(key) {
        document.getElementById('cat5-m-title').innerText = key.toUpperCase();
        document.getElementById('cat5-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat5-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat5CloseModal = function() { modal.classList.remove('open'); };
    window.cat5CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat5-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat5-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat5CloseModal(); });
})();



// ============================================
// CATEGORY 6: PROGRESS INDICATORS - JAVASCRIPT
// ============================================
(function() {
    const globalRing = document.getElementById('cat6-global-ring');
    const globalNum = document.getElementById('cat6-global-num');
    const globalPct = document.getElementById('cat6-global-pct');
    const gCircum = 2 * Math.PI * 45;
    globalRing.style.strokeDasharray = `${gCircum} ${gCircum}`;
    globalRing.style.strokeDashoffset = gCircum;

    const pathSection = document.getElementById('cat6-path-progress');
    const pathFill = document.getElementById('cat6-path-fill');
    const pathNodes = document.querySelectorAll('#cat6-container .path-node');

    const circSection = document.getElementById('cat6-circular-section');
    const sectRing = document.getElementById('cat6-section-ring');
    const sectNum = document.getElementById('cat6-section-num');
    const chunks = document.querySelectorAll('#cat6-container .content-chunk');
    const sCircum = 2 * Math.PI * 140;
    sectRing.style.strokeDasharray = `${sCircum} ${sCircum}`;
    sectRing.style.strokeDashoffset = sCircum;

    const container = document.getElementById('cat6-container');

    window.addEventListener('scroll', () => {
        const containerRect = container.getBoundingClientRect();
        if (containerRect.top > window.innerHeight || containerRect.bottom < 0) {
            globalPct.classList.remove('visible');
            return;
        }

        const scrollTop = window.scrollY - container.offsetTop;
        const containerHeight = container.scrollHeight - window.innerHeight;
        const scrollRatio = Math.min(Math.max(scrollTop / containerHeight, 0), 1);

        globalNum.innerText = Math.round(scrollRatio * 100) + '%';
        const gOffset = gCircum - (scrollRatio * gCircum);
        globalRing.style.strokeDashoffset = gOffset;
        if(scrollTop > 200) globalPct.classList.add('visible');
        else globalPct.classList.remove('visible');

        const pathRect = pathSection.getBoundingClientRect();
        if(pathRect.top < window.innerHeight && pathRect.bottom > 0) {
            const startPoint = window.innerHeight / 2;
            const pTotal = pathRect.height;
            const pScrolled = startPoint - pathRect.top;
            const pRatio = Math.max(0, Math.min(1, pScrolled / (pTotal - startPoint)));
            pathFill.style.height = `${pRatio * 100}%`;
            pathNodes.forEach(node => {
                const nr = node.getBoundingClientRect();
                if(nr.top < window.innerHeight * 0.75) node.classList.add('active');
                else node.classList.remove('active');
            });
        }

        const cRect = circSection.getBoundingClientRect();
        if(cRect.top <= 0 && cRect.bottom >= 0) {
            const cTotal = cRect.height - window.innerHeight;
            const cScrolled = Math.abs(cRect.top);
            const cRatio = Math.max(0, Math.min(1, cScrolled / cTotal));
            const sOffset = sCircum - (cRatio * sCircum);
            sectRing.style.strokeDashoffset = sOffset;
            sectNum.innerText = Math.round(cRatio * 100) + '%';
            chunks.forEach(chunk => {
                const cr = chunk.getBoundingClientRect();
                if(cr.top < window.innerHeight/2 && cr.bottom > window.innerHeight/2) chunk.classList.add('active');
                else chunk.classList.remove('active');
            });
        }
    });

    const prompts = {
        global: { title: "Global Progress System", prompt: "Create a Global Progress system with circular indicator (SVG stroke-dashoffset).", code: `ring.style.strokeDashoffset = circum - (scrollRatio * circum);` },
        path: { title: "Path Trace Animation", prompt: "Create a 'Path Tracing' effect. A vertical line fills with color as the user scrolls.", code: `const ratio = scrolled / pathHeight;\npathLine.style.height = \`\${ratio * 100}%\`;` },
        circle: { title: "Sticky Section Progress", prompt: "Create a Donut Chart that updates (0-100%) based on how far the section has scrolled.", code: `const ratio = Math.abs(rect.top) / (sectionHeight - viewHeight);\nupdateRing(ratio);` }
    };

    const modal = document.getElementById('cat6-modal');
    window.cat6OpenModal = function(key) {
        document.getElementById('cat6-m-title').innerText = prompts[key].title;
        document.getElementById('cat6-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat6-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat6CloseModal = function() { modal.classList.remove('open'); };
    window.cat6CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat6-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat6-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat6CloseModal(); });
})();



// ============================================
// CATEGORY 7: CREATIVE EFFECTS - JAVASCRIPT
// ============================================
(function() {
    // TYPEWRITER
    const typeText = "We build products that empower teams to do their best work.";
    const typeEl = document.getElementById('cat7-type-target');
    const cursorEl = document.getElementById('cat7-cursor');
    const subEl = document.getElementById('cat7-type-sub');
    let typeTimeout;

    function startTypewriter() {
        resetTypewriter();
        let i = 0;
        cursorEl.classList.remove('hidden');
        subEl.classList.remove('visible');
        function typeLoop() {
            if(i < typeText.length) {
                typeEl.textContent += typeText.charAt(i);
                i++;
                typeTimeout = setTimeout(typeLoop, Math.random() * 40 + 30);
            } else {
                typeTimeout = setTimeout(() => { cursorEl.classList.add('hidden'); subEl.classList.add('visible'); }, 500);
            }
        }
        typeLoop();
    }
    function resetTypewriter() {
        clearTimeout(typeTimeout);
        typeEl.textContent = '';
        cursorEl.classList.remove('hidden');
        subEl.classList.remove('visible');
    }
    window.cat7ReplayTypewriter = function() { resetTypewriter(); setTimeout(startTypewriter, 100); };

    const typeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if(entry.isIntersecting) startTypewriter(); else resetTypewriter(); });
    }, { threshold: 0.3 });
    typeObserver.observe(document.getElementById('cat7-typewriter'));

    // SCRAMBLE
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    const scrambleElements = document.querySelectorAll('#cat7-container .s-title');
    const scrambleIntervals = [];

    function scrambleText(el) {
        const final = el.getAttribute('data-final');
        let iterations = 0;
        const interval = setInterval(() => {
            el.innerText = final.split("").map((letter, index) => {
                if(index < iterations) return final[index];
                return chars[Math.floor(Math.random() * chars.length)];
            }).join("");
            if(iterations >= final.length) clearInterval(interval);
            iterations += 1 / 3;
        }, 30);
        scrambleIntervals.push(interval);
    }
    function resetScramble() {
        scrambleIntervals.forEach(clearInterval);
        scrambleIntervals.length = 0;
        scrambleElements.forEach(el => el.innerText = "Qk3pL@9m");
    }
    window.cat7ReplayScramble = function() {
        resetScramble();
        setTimeout(() => { scrambleElements.forEach((el, i) => { setTimeout(() => scrambleText(el), i * 200); }); }, 100);
    };

    const scrambleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) scrambleElements.forEach((el, i) => { setTimeout(() => scrambleText(el), i * 200); });
            else resetScramble();
        });
    }, { threshold: 0.25 });
    scrambleObserver.observe(document.getElementById('cat7-scramble'));

    // COLOR SHIFT
    const colorSection = document.getElementById('cat7-color');
    const colorSticky = document.getElementById('cat7-color-sticky');
    const colors = [
        { h: 224, s: 64, l: 33 },
        { h: 263, s: 70, l: 50 },
        { h: 335, s: 78, l: 42 },
        { h: 24,  s: 89, l: 48 },
        { h: 159, s: 91, l: 22 }
    ];

    // MORPH SHAPES
    const morphSection = document.getElementById('cat7-morph');
    const morphPath = document.getElementById('cat7-morph-path');
    const lis = [
        document.getElementById('cat7-morph-li-1'),
        document.getElementById('cat7-morph-li-2'),
        document.getElementById('cat7-morph-li-3'),
        document.getElementById('cat7-morph-li-4')
    ];
    const paths = [
        "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
        "M 25,25 L 175,25 L 175,175 L 25,175 Z",
        "M 100,25 L 175,175 L 25,175 Z",
        "M 100,20 L 170,60 L 170,140 L 100,180 L 30,140 L 30,60 Z"
    ];

    window.addEventListener('scroll', () => {
        // Color Shift
        const colorRect = colorSection.getBoundingClientRect();
        const winH = window.innerHeight;
        if(colorRect.top <= 0 && colorRect.bottom >= winH) {
            const scrolled = Math.abs(colorRect.top);
            const total = colorRect.height - winH;
            const progress = Math.min(Math.max(scrolled / total, 0), 1);
            const segmentLength = 1 / (colors.length - 1);
            const segment = Math.floor(progress / segmentLength);
            const subProgress = (progress % segmentLength) / segmentLength;
            const c1 = colors[Math.min(segment, colors.length-1)];
            const c2 = colors[Math.min(segment + 1, colors.length-1)];
            if(c1 && c2) {
                const h = c1.h + (c2.h - c1.h) * subProgress;
                const s = c1.s + (c2.s - c1.s) * subProgress;
                const l = c1.l + (c2.l - c1.l) * subProgress;
                colorSticky.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
            }
        }

        // Morph Shapes
        const morphRect = morphSection.getBoundingClientRect();
        if(morphRect.top <= 0 && morphRect.bottom >= winH) {
            const scrolled = Math.abs(morphRect.top);
            const total = morphRect.height - winH;
            const progress = Math.min(Math.max(scrolled / total, 0), 1);
            const stage = Math.min(Math.floor(progress * 4), 3);
            morphPath.setAttribute('d', paths[stage]);
            morphPath.style.transform = `rotate(${progress * 360}deg)`;
            lis.forEach(li => li.classList.remove('active'));
            lis[stage].classList.add('active');
        }
    });

    // MODAL
    const prompts = {
        type: { title: "Typewriter Effect", prompt: "Create a Typewriter effect where text appears character by character with a blinking cursor.", code: `if(i < text.length) {\n  el.innerHTML += text.charAt(i);\n  i++;\n  setTimeout(type, rand(30,70));\n}` },
        scramble: { title: "Text Scramble", prompt: "Create a 'Hacker' text scramble effect. Cycle through random characters before locking onto the correct letter.", code: `el.innerText = text.split("").map((letter, index) => {\n  if(index < iterations) return text[index];\n  return chars[Math.floor(Math.random()*chars.length)];\n}).join("");` },
        color: { title: "Color Shift Scroll", prompt: "Create a tall sticky section where the background color interpolates smoothly between 5 colors (HSL) based on scroll percentage.", code: `const h = c1.h + (c2.h - c1.h) * subProgress;\nelement.style.backgroundColor = \`hsl(\${h}, \${s}%, \${l}%)\`;` },
        morph: { title: "SVG Shape Morph", prompt: "Morph an SVG path from Circle -> Square -> Triangle -> Hexagon based on scroll position while rotating the shape.", code: `const paths = [circlePath, squarePath, triPath, hexPath];\nconst stage = Math.floor(progress * 4);\npath.setAttribute('d', paths[stage]);` }
    };

    const modal = document.getElementById('cat7-modal');
    window.cat7OpenModal = function(key) {
        document.getElementById('cat7-m-title').innerText = prompts[key].title;
        document.getElementById('cat7-m-prompt').innerText = prompts[key].prompt;
        document.getElementById('cat7-m-code').innerText = prompts[key].code;
        modal.classList.add('open');
    };
    window.cat7CloseModal = function() { modal.classList.remove('open'); };
    window.cat7CopyAll = function(e) { navigator.clipboard.writeText(`PROMPT:\n${document.getElementById('cat7-m-prompt').innerText}\n\nCODE:\n${document.getElementById('cat7-m-code').innerText}`); const btn = e.target; const orig = btn.innerText; btn.innerText = 'Copied!'; btn.style.background = '#10B981'; setTimeout(() => { btn.innerText = orig; btn.style.background = ''; }, 2000); };
    modal.addEventListener('click', e => { if(e.target===modal) cat7CloseModal(); });
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
      

<div className="category-divider">
<h1>Category 1: Fade Animations</h1>
<p>Sequential fade, directional slide, elastic scale, rotation settle</p>
</div>
<div id="cat1-container">
<div className="modal-overlay" id="cat1-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat1-m-title" style={{color: '#fff'}}>Animation Title</h3>
<button className="close-btn" onclick="cat1CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat1-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Generated CSS</span>
<div className="code-block" id="cat1-m-code"></div>
</div>
<button className="btn btn-gold" onclick="cat1CopyAll(event)" style={{width: '100%'}}>Copy Prompt &amp; Code</button>
</div>
</div>
<section id="hero">
<div className="controls">
<button className="ctrl-btn" onclick="cat1OpenModal('seq')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat1Replay('hero')">Replay</button>
</div>
<div className="container">
<span className="label seq-el" style={{animationDelay: '0ms'}}>Next Gen Architecture</span>
<h1 className="seq-el" style={{fontSize: 'clamp(48px, 6vw, 90px)', marginBottom: '24px', animationDelay: '200ms'}}>
                Redefine the <br/> <span style={{color: 'var(--accent)'}}>Skyline.</span>
</h1>
<p className="seq-el" style={{maxWidth: '500px', marginBottom: '40px', animationDelay: '400ms'}}>
                Lumina leverages generative AI to create sustainable, structural blueprints in milliseconds.
            </p>
<div className="seq-el" style={{display: 'flex', gap: '16px', animationDelay: '600ms'}}>
<a className="btn btn-gold" href="#">Start Generating</a>
<a className="btn btn-glass" href="#">Watch Keynote</a>
</div>
<div className="hero-stats seq-el" style={{animationDelay: '800ms'}}>
<div className="stat"><h3>14k+</h3><p>Projects Built</p></div>
<div className="stat"><h3>0.2s</h3><p>Render Speed</p></div>
<div className="stat"><h3>LEED</h3><p>Certified Ready</p></div>
</div>
</div>
</section>
<section id="features">
<div className="controls">
<button className="ctrl-btn" onclick="cat1OpenModal('dir')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat1Replay('features')">Replay</button>
</div>
<div className="container">
<span className="label" style={{textAlign: 'center'}}>Capabilities</span>
<h2 style={{textAlign: 'center', fontSize: '48px', marginBottom: '60px'}}>The Design Suite</h2>
<div className="bento-grid">
<div className="b-card b-1 dir-left">
<img alt="Drafting" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="b-content"><h3>Neural Drafting</h3><p>Sketch to CAD conversion with 99.8% accuracy.</p></div>
</div>
<div className="b-card dir-right" style={{transitionDelay: '200ms'}}>
<img alt="Material" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="b-content"><h3>Material Solver</h3><p>Calculate load-bearing instantly.</p></div>
</div>
<div className="b-card dir-up" style={{transitionDelay: '400ms'}}>
<img alt="Compliance" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="b-content"><h3>Zoning Compliance</h3><p>Auto-check against local regulations.</p></div>
</div>
</div>
</div>
</section>
<section id="showcase">
<div className="controls">
<button className="ctrl-btn" onclick="cat1OpenModal('scale')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat1Replay('showcase')">Replay</button>
</div>
<div className="container">
<div style={{textAlign: 'center', marginBottom: '40px'}}>
<span className="label">Project Spotlight</span>
<h2 style={{fontSize: '48px'}}>The Zenith Hub</h2>
</div>
<div className="stage">
<div className="main-render"></div>
<div className="float-info f-1" style={{transitionDelay: '300ms'}}>
<span className="label" style={{marginBottom: '4px'}}>Efficiency</span>
<h4 style={{fontSize: '24px', color: '#fff'}}>Net Zero</h4>
</div>
<div className="float-info f-2" style={{transitionDelay: '500ms'}}>
<span className="label" style={{marginBottom: '4px'}}>Timeline</span>
<h4 style={{fontSize: '24px', color: '#fff'}}>6 Weeks</h4>
</div>
</div>
</div>
</section>
<section id="team">
<div className="controls">
<button className="ctrl-btn" onclick="cat1OpenModal('rot')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat1Replay('team')">Replay</button>
</div>
<div className="container">
<span className="label">Visionaries</span>
<h2 style={{fontSize: '48px'}}>The Architects</h2>
<div className="team-row">
<div className="architect-card rot-l">
<img className="arc-img" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="arc-info"><h3>Elias Vane</h3><p>Lead Engineer</p></div>
</div>
<div className="architect-card rot-c" style={{transitionDelay: '200ms'}}>
<img className="arc-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="arc-info"><h3>Sarah O'Neil</h3><p>Design Director</p></div>
</div>
<div className="architect-card rot-r" style={{transitionDelay: '400ms'}}>
<img className="arc-img" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="arc-info"><h3>Marcus Chen</h3><p>Structural AI</p></div>
</div>
</div>
</div>
</section>
</div>


<div className="category-divider">
<h1>Category 2: Parallax Effects</h1>
<p>Background parallax, multi-layer depth, zoom parallax, image reveal</p>
</div>
<div id="cat2-container">
<div className="modal-overlay" id="cat2-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat2-m-title" style={{color: '#fff'}}>Parallax Type</h3>
<button className="close-btn" onclick="cat2CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat2-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Logic &amp; CSS</span>
<div className="code-block" id="cat2-m-code"></div>
</div>
<button className="btn btn-gold" onclick="cat2CopyAll(event)" style={{width: '100%'}}>Copy Prompt &amp; Code</button>
</div>
</div>
<section id="p-hero">
<div className="controls">
<button className="ctrl-btn" onclick="cat2OpenModal('hero')">Show Prompt</button>
</div>
<div className="ph-bg" id="cat2-hero-bg"></div>
<div className="ph-content">
<h1 className="ph-title">Experience the <br/><span style={{color: 'var(--accent)'}}>Difference</span></h1>
<p className="ph-sub">Where innovation meets execution.</p>
<button className="btn btn-gold">Explore Now</button>
</div>
</section>
<section id="p-multi">
<div className="controls">
<button className="ctrl-btn" onclick="cat2OpenModal('multi')">Show Prompt</button>
</div>
<div className="layer l-back" id="cat2-l-back"></div>
<div className="layer l-mid" id="cat2-l-mid"></div>
<div className="layer l-front" id="cat2-l-front">
<div className="glass-card">
<span className="label">Performance</span>
<h2 style={{fontSize: '48px', marginBottom: '24px'}}>Built for Speed</h2>
<p style={{marginBottom: '32px'}}>Every detail optimized for maximum velocity.</p>
<div style={{borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', fontSize: '14px', color: 'var(--accent)', letterSpacing: '0.1em', fontWeight: '600'}}>
                    99.9% UPTIME • 50MS LATENCY
                </div>
</div>
</div>
</section>
<section id="p-zoom">
<div className="controls">
<button className="ctrl-btn" onclick="cat2OpenModal('zoom')">Show Prompt</button>
</div>
<div className="pz-bg" id="cat2-zoom-bg"></div>
<div className="pz-overlay"></div>
<div className="pz-content" id="cat2-zoom-content">
<span className="label">Precision</span>
<h2 style={{fontSize: '64px', marginBottom: '16px'}}>Attention to Detail</h2>
<p style={{fontSize: '20px'}}>Crafted with mathematical perfection.</p>
</div>
</section>
<section id="p-reveal">
<div className="controls">
<button className="ctrl-btn" onclick="cat2OpenModal('reveal')">Show Prompt</button>
</div>
<div className="pr-col-left">
<span className="label">Innovation</span>
<h2 style={{fontSize: '56px', marginBottom: '32px'}}>Reimagining <br/>Possibility</h2>
<p style={{marginBottom: '24px'}}>We strip away the unnecessary to reveal the essential.</p>
<button className="btn btn-gold">Learn More</button>
</div>
<div className="pr-col-right">
<div className="pr-img-wrap">
<img className="pr-img" id="cat2-reveal-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&amp;h=1600&amp;fit=crop"/>
</div>
</div>
</section>
</div>


<div className="category-divider">
<h1>Category 3: Counter Animations</h1>
<p>Stats count-up, progress bars, circular indicators, dashboard cards</p>
</div>
<div id="cat3-container">
<div className="modal-overlay" id="cat3-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat3-m-title" style={{color: '#fff'}}>Animation Logic</h3>
<button className="close-btn" onclick="cat3CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat3-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Core Logic (JS)</span>
<div className="code-block" id="cat3-m-code"></div>
</div>
<button className="btn-copy" onclick="cat3CopyAll(event)">Copy Prompt &amp; Code</button>
</div>
</div>
<section id="stats">
<div className="controls">
<button className="ctrl-btn" onclick="cat3OpenModal('count')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat3Replay('stats')">Replay</button>
</div>
<div className="container">
<span className="section-label" style={{textAlign: 'center'}}>Global Impact</span>
<h2 style={{textAlign: 'center', fontSize: '48px'}}>Trusted by teams worldwide</h2>
<div className="stats-grid">
<div className="stat-card">
<svg className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="stat-num-wrap"><span className="counter" data-suffix="+" data-target="50000">0</span></div>
<div className="stat-label">Active Users</div>
</div>
<div className="stat-card">
<svg className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line></svg>
<div className="stat-num-wrap"><span className="counter" data-suffix="+" data-target="180">0</span></div>
<div className="stat-label">Countries</div>
</div>
<div className="stat-card">
<svg className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<div className="stat-num-wrap"><span className="counter" data-decimals="1" data-suffix="%" data-target="99.9">0</span></div>
<div className="stat-label">Uptime Guarantee</div>
</div>
<div className="stat-card">
<svg className="stat-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<div className="stat-num-wrap"><span className="counter" data-decimals="1" data-suffix="/5" data-target="4.9">0</span></div>
<div className="stat-label">Average Rating</div>
</div>
</div>
</div>
</section>
<section id="progress">
<div className="controls">
<button className="ctrl-btn" onclick="cat3OpenModal('prog')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat3Replay('progress')">Replay</button>
</div>
<div className="container">
<span className="section-label" style={{textAlign: 'center'}}>Tech Stack</span>
<h2 style={{textAlign: 'center', fontSize: '56px'}}>Our Expertise</h2>
<div className="prog-container">
<div className="prog-item">
<div className="prog-header"><span className="prog-label">Frontend Development</span><span className="prog-val counter-prog" data-suffix="%" data-target="95">0%</span></div>
<div className="prog-track"><div className="prog-fill" data-width="95%"></div></div>
</div>
<div className="prog-item">
<div className="prog-header"><span className="prog-label">Backend Systems</span><span className="prog-val counter-prog" data-suffix="%" data-target="88">0%</span></div>
<div className="prog-track"><div className="prog-fill" data-width="88%"></div></div>
</div>
<div className="prog-item">
<div className="prog-header"><span className="prog-label">Cloud Infrastructure</span><span className="prog-val counter-prog" data-suffix="%" data-target="92">0%</span></div>
<div className="prog-track"><div className="prog-fill" data-width="92%"></div></div>
</div>
</div>
</div>
</section>
<section id="circles">
<div className="controls">
<button className="ctrl-btn" onclick="cat3OpenModal('circle')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat3Replay('circles')">Replay</button>
</div>
<div className="container">
<span className="section-label" style={{textAlign: 'center'}}>Benchmarks</span>
<h2 style={{textAlign: 'center', fontSize: '56px'}}>Performance Metrics</h2>
<div className="circle-grid">
<div className="circle-wrap">
<div className="circle-label">Success Rate</div>
<div className="relative-circle">
<svg className="circle-svg"><circle className="c-bg" cx="100" cy="100" r="90"></circle><circle className="c-prog" cx="100" cy="100" data-pct="98" r="90"></circle></svg>
<div className="circle-center counter-circle" data-suffix="%" data-target="98">0%</div>
</div>
<div className="circle-desc">Task Completion</div>
</div>
<div className="circle-wrap">
<div className="circle-label">Satisfaction</div>
<div className="relative-circle">
<svg className="circle-svg"><circle className="c-bg" cx="100" cy="100" r="90"></circle><circle className="c-prog" cx="100" cy="100" data-pct="94" r="90"></circle></svg>
<div className="circle-center counter-circle" data-suffix="%" data-target="94">0%</div>
</div>
<div className="circle-desc">5-Star Reviews</div>
</div>
<div className="circle-wrap">
<div className="circle-label">Productivity</div>
<div className="relative-circle">
<svg className="circle-svg"><circle className="c-bg" cx="100" cy="100" r="90"></circle><circle className="c-prog" cx="100" cy="100" data-pct="87" r="90"></circle></svg>
<div className="circle-center counter-circle" data-suffix="%" data-target="87">0%</div>
</div>
<div className="circle-desc">Efficiency Gain</div>
</div>
</div>
</div>
</section>
<section id="impact">
<div className="controls">
<button className="ctrl-btn" onclick="cat3OpenModal('card')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat3Replay('impact')">Replay</button>
</div>
<div className="container">
<span className="section-label" style={{textAlign: 'center'}}>Real-Time Data</span>
<h2 style={{textAlign: 'center', fontSize: '56px'}}>Impact at Scale</h2>
<div className="impact-grid">
<div className="impact-card">
<span className="imp-val counter-card" data-decimals="1" data-suffix="M" data-target="2.5">0</span>
<span className="imp-label">Projects Launched</span>
<div className="trend">+23% this month</div>
</div>
<div className="impact-card">
<span className="imp-val counter-card" data-decimals="0" data-suffix="M" data-target="15">0</span>
<span className="imp-label">Total Downloads</span>
<div className="trend">+18% this month</div>
</div>
</div>
</div>
</section>
</div>


<div className="category-divider">
<h1>Category 4: Staggered Reveal</h1>
<p>Gallery grid, SVG path drawing, text reveal mask, image curtain</p>
</div>
<div id="cat4-container">
<div className="modal-overlay" id="cat4-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat4-m-title" style={{color: '#fff'}}>Stagger Effect</h3>
<button className="close-btn" onclick="cat4CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat4-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Code</span>
<div className="code-block" id="cat4-m-code"></div>
</div>
<button className="btn-gold" onclick="cat4CopyAll(event)" style={{width: '100%'}}>Copy Prompt &amp; Code</button>
</div>
</div>
<section id="gallery">
<div className="controls">
<button className="ctrl-btn" onclick="cat4OpenModal('grid')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat4Replay('gallery')">Replay</button>
</div>
<div className="container">
<span className="label" style={{textAlign: 'center'}}>Portfolio</span>
<h2 style={{textAlign: 'center', fontSize: '48px'}}>Selected Works</h2>
<div className="gallery-grid">
<div className="project-card" style={{transitionDelay: '0ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Architecture</span><h4 className="p-title">Zenith Tower</h4></div></div>
<div className="project-card" style={{transitionDelay: '100ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Interior</span><h4 className="p-title">Azure Studios</h4></div></div>
<div className="project-card" style={{transitionDelay: '200ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Urban</span><h4 className="p-title">Metro Line</h4></div></div>
<div className="project-card" style={{transitionDelay: '300ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Industrial</span><h4 className="p-title">Forge Works</h4></div></div>
<div className="project-card" style={{transitionDelay: '400ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Residential</span><h4 className="p-title">Haven Terrace</h4></div></div>
<div className="project-card" style={{transitionDelay: '500ms'}}><img className="p-img" src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&amp;fit=crop"/><div className="p-info"><span className="p-tag">Commercial</span><h4 className="p-title">Nexus Plaza</h4></div></div>
</div>
</div>
</section>
<section id="workflow">
<div className="controls">
<button className="ctrl-btn" onclick="cat4OpenModal('svg')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat4Replay('workflow')">Replay</button>
</div>
<div className="container">
<div className="workflow-layout">
<div className="wf-text">
<span className="label">The Process</span>
<h2 style={{fontSize: '48px', marginBottom: '40px'}}>From Idea to Reality</h2>
<div className="wf-step" style={{transitionDelay: '0ms'}}><h4>01. Discover</h4><p>We immerse ourselves in your brand to uncover deep insights.</p></div>
<div className="wf-step" style={{transitionDelay: '800ms'}}><h4>02. Design</h4><p>Crafting intuitive interfaces and stunning visual systems.</p></div>
<div className="wf-step" style={{transitionDelay: '1600ms'}}><h4>03. Develop</h4><p>Building robust, scalable code with modern architecture.</p></div>
<div className="wf-step" style={{transitionDelay: '2400ms'}}><h4>04. Deploy</h4><p>Launching your product to the world with precision.</p></div>
</div>
<div className="wf-svg-container">
<svg height="600" viewbox="0 0 400 600" width="400">
<line className="wf-path" style={{transitionDelay: '400ms'}} x1="200" x2="200" y1="50" y2="200"></line>
<line className="wf-path" style={{transitionDelay: '1200ms'}} x1="200" x2="200" y1="200" y2="350"></line>
<line className="wf-path" style={{transitionDelay: '2000ms'}} x1="200" x2="200" y1="350" y2="500"></line>
<circle className="wf-node" cx="200" cy="50" r="10" style={{transitionDelay: '0ms'}}></circle>
<circle className="wf-node" cx="200" cy="200" r="10" style={{transitionDelay: '800ms'}}></circle>
<circle className="wf-node" cx="200" cy="350" r="10" style={{transitionDelay: '1600ms'}}></circle>
<circle className="wf-node" cx="200" cy="500" r="10" style={{transitionDelay: '2400ms'}}></circle>
</svg>
</div>
</div>
</div>
</section>
<section id="quote">
<div className="controls">
<button className="ctrl-btn" onclick="cat4OpenModal('text')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat4Replay('quote')">Replay</button>
</div>
<div className="quote-container">
<div className="line-wrap"><span className="reveal-text" style={{transitionDelay: '0ms'}}>"Architecture is the</span></div>
<div className="line-wrap"><span className="reveal-text" style={{transitionDelay: '150ms'}}>learned game, correct</span></div>
<div className="line-wrap"><span className="reveal-text" style={{transitionDelay: '300ms'}}>and magnificent, of</span></div>
<div className="line-wrap"><span className="reveal-text" style={{transitionDelay: '450ms'}}>forms assembled in</span></div>
<div className="line-wrap"><span className="reveal-text" style={{transitionDelay: '600ms'}}>the <span style={{color: 'var(--accent)'}}>light.</span>"</span></div>
<p className="quote-attr">— Le Corbusier</p>
</div>
</section>
<section id="featured">
<div className="controls">
<button className="ctrl-btn" onclick="cat4OpenModal('curtain')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat4Replay('featured')">Replay</button>
</div>
<div className="container">
<span className="label" style={{textAlign: 'center'}}>Featured Project</span>
<h2 style={{textAlign: 'center', fontSize: '48px', marginBottom: '16px'}}>The Meridian</h2>
<div className="feat-wrapper">
<img className="feat-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&amp;fit=crop"/>
<div className="curtains">
<div className="curtain-panel" style={{transitionDelay: '0ms'}}></div>
<div className="curtain-panel" style={{transitionDelay: '100ms'}}></div>
<div className="curtain-panel" style={{transitionDelay: '200ms'}}></div>
<div className="curtain-panel" style={{transitionDelay: '300ms'}}></div>
<div className="curtain-panel" style={{transitionDelay: '400ms'}}></div>
</div>
</div>
<div className="feat-caption"><span className="label">2024 • Dubai, UAE</span><p>A landmark tower redefining urban skylines.</p></div>
</div>
</section>
</div>


<div className="category-divider">
<h1>Category 5: Pinned Layouts</h1>
<p>Split sticky, stacked slides, horizontal scroll</p>
</div>
<div id="cat5-container">
<div className="modal-overlay" id="cat5-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat5-m-title" style={{color: '#fff'}}>Title</h3>
<button className="close-btn" onclick="cat5CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat5-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Logic</span>
<div className="code-block" id="cat5-m-code"></div>
</div>
<button className="btn-gold" onclick="cat5CopyAll(event)" style={{width: '100%'}}>Copy Prompt &amp; Code</button>
</div>
</div>
<section id="cat5-hero">
<div style={{maxWidth: '800px', padding: '0 20px'}}>
<span className="label">Structural Design</span>
<h1 style={{fontSize: 'clamp(48px, 6vw, 80px)', marginBottom: '20px'}}>Pinned &amp;<br/>Sticky Physics</h1>
<p>Scroll down to experience layout mechanics powered by modern CSS.</p>
</div>
</section>
<div id="cat5-split-sticky">
<div className="sticky-col">
<div className="controls"><button className="ctrl-btn" onclick="cat5OpenModal('split')">Show Prompt</button></div>
<span className="label">Core Principles</span>
<h2 className="sticky-title" id="cat5-sticky-title">Precision</h2>
<div className="sticky-desc" id="cat5-sticky-desc">Engineered to the micrometer.</div>
<div style={{marginTop: '40px'}}>
<div className="timeline-item active" id="cat5-time-1">01. Blueprint</div>
<div className="timeline-item" id="cat5-time-2">02. Foundation</div>
<div className="timeline-item" id="cat5-time-3">03. Structure</div>
<div className="timeline-item" id="cat5-time-4">04. Finish</div>
</div>
</div>
<div className="scroll-col">
<div className="scroll-block active" data-desc="Engineered to the micrometer." data-index="1" data-title="Precision"><h3>01. The Blueprint</h3><p>Every great structure begins with a flawless plan.</p><img className="block-img" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&amp;fit=crop"/></div>
<div className="scroll-block" data-desc="Unshakable foundations." data-index="2" data-title="Stability"><h3>02. The Foundation</h3><p>Deep piling and reinforced concrete ensure longevity.</p><img className="block-img" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=1200&amp;fit=crop"/></div>
<div className="scroll-block" data-desc="Rising above the noise." data-index="3" data-title="Elevation"><h3>03. The Structure</h3><p>Steel lattice work that defies gravity.</p><img className="block-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&amp;fit=crop"/></div>
<div className="scroll-block" data-desc="Beauty in the details." data-index="4" data-title="Refinement"><h3>04. The Finish</h3><p>Polished glass and sustainable materials.</p><img className="block-img" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&amp;fit=crop"/></div>
</div>
</div>
<div id="cat5-stacked-wrapper">
<div className="controls" style={{position: 'absolute', zIndex: '100', right: '40px', top: '40px'}}><button className="ctrl-btn" onclick="cat5OpenModal('stack')">Show Prompt</button></div>
<div className="slide s-1"><div className="slide-overlay"><span className="label">The Process</span><h2 style={{fontSize: '64px'}}>Scroll to Stack</h2><p>Each section pins to the top, creating a depth stack effect.</p></div></div>
<div className="slide s-2"><div className="slide-overlay"><h2>Concept</h2><p>Initial sketches and ideation.</p></div></div>
<div className="slide s-3"><div className="slide-overlay"><h2>Drafting</h2><p>Technical drawings and compliance.</p></div></div>
<div className="slide s-4"><div className="slide-overlay"><h2>Construction</h2><p>Breaking ground and vertical rise.</p></div></div>
</div>
<div id="cat5-h-scroll-container">
<div id="cat5-h-sticky-stage">
<div className="controls"><button className="ctrl-btn" onclick="cat5OpenModal('horiz')">Show Prompt</button></div>
<div id="cat5-h-track">
<div className="h-card"><img className="h-img" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&amp;fit=crop"/><div className="h-info"><div className="h-num">01</div><h2>Innovation</h2><p>Pushing technical boundaries.</p></div></div>
<div className="h-card"><img className="h-img" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&amp;fit=crop"/><div className="h-info"><div className="h-num">02</div><h2>Vision</h2><p>Seeing what others cannot.</p></div></div>
<div className="h-card"><img className="h-img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&amp;fit=crop"/><div className="h-info"><div className="h-num">03</div><h2>Teamwork</h2><p>Collaborative engineering.</p></div></div>
</div>
</div>
</div>
</div>


<div className="category-divider">
<h1>Category 6: Progress Indicators</h1>
<p>Reading bar, path tracing, circular sticky progress</p>
</div>
<div id="cat6-container">
<div className="modal-overlay" id="cat6-modal">
<div className="modal-box">
<div className="modal-header">
<h3 className="modal-title" id="cat6-m-title">Title</h3>
<button className="close-btn" onclick="cat6CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat6-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Code Snippet</span>
<div className="code-block" id="cat6-m-code"></div>
</div>
<button className="btn-gold" onclick="cat6CopyAll(event)" style={{width: '100%'}}>Copy Prompt &amp; Code</button>
</div>
</div>
<div id="cat6-global-pct">
<svg className="pct-svg" viewbox="0 0 100 100">
<circle className="pct-track" cx="50" cy="50" r="45"></circle>
<circle className="pct-fill" cx="50" cy="50" id="cat6-global-ring" r="45"></circle>
</svg>
<span className="pct-num" id="cat6-global-num">0%</span>
</div>
<section id="cat6-hero">
<div className="controls"><button className="ctrl-btn" onclick="cat6OpenModal('global')">Show Global Logic</button></div>
<div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
<div className="hero-badge">SYSTEM V.4.0</div>
<h1 className="hero-h1">Lumina OS</h1>
<p>Advanced Scroll Tracking Protocols.<br/>Scroll to initialize diagnostic sequence.</p>
</div>
</section>
<section id="cat6-path-progress">
<div className="controls"><button className="ctrl-btn" onclick="cat6OpenModal('path')">Show Prompt</button></div>
<div className="container" style={{textAlign: 'center', paddingBottom: '60px'}}>
<span className="mono">DIAGNOSTIC 01</span>
<h2 style={{fontSize: '48px', margin: '20px 0'}}>Path Tracing</h2>
<p style={{margin: '0 auto'}}>Scroll down to trace the connection line.</p>
</div>
<div className="path-container">
<div className="path-svg-wrap"><div className="path-line-fill" id="cat6-path-fill"></div></div>
<div style={{width: '100%'}}>
<div className="path-node node-left"><div className="node-content"><h3>Initialization</h3><p>Loading core kernel modules.</p></div><div className="node-marker"></div></div>
<div className="path-node node-right"><div className="node-content"><h3>Handshake</h3><p>Establishing secure connection.</p></div><div className="node-marker"></div></div>
<div className="path-node node-left"><div className="node-content"><h3>Encryption</h3><p>256-bit keys generated.</p></div><div className="node-marker"></div></div>
<div className="path-node node-right"><div className="node-content"><h3>Uplink</h3><p>Connection established. Stable.</p></div><div className="node-marker"></div></div>
</div>
</div>
</section>
<div id="cat6-circular-section">
<div className="sticky-progress">
<div className="controls" style={{top: '40px', right: 'auto', left: '40px'}}><button className="ctrl-btn" onclick="cat6OpenModal('circle')">Show Prompt</button></div>
<span className="mono">DIAGNOSTIC 02</span>
<div className="big-circle-wrap">
<svg className="bc-svg"><circle className="bc-track" cx="150" cy="150" r="140"></circle><circle className="bc-fill" cx="150" cy="150" id="cat6-section-ring" r="140"></circle></svg>
<div className="bc-value" id="cat6-section-num">0%</div>
</div>
<p style={{marginTop: '20px', color: '#666', fontSize: '14px'}}>Sector Analysis</p>
</div>
<div className="scroll-content">
<div className="content-chunk active"><h3>Sector A: Memory</h3><p>Analyzing heap allocation and stack trace integrity.</p></div>
<div className="content-chunk"><h3>Sector B: Logic</h3><p>Verifying arithmetic logic unit calculations.</p></div>
<div className="content-chunk"><h3>Sector C: Storage</h3><p>Checking write speeds and redundancy protocols.</p></div>
<div className="content-chunk"><h3>Sector D: Network</h3><p>Latency check complete. Bandwidth optimal.</p></div>
</div>
</div>
</div>


<div className="category-divider">
<h1>Category 7: Creative Effects</h1>
<p>Typewriter, text scramble, color shift, SVG morph</p>
</div>
<div id="cat7-container">
<div className="modal-overlay" id="cat7-modal">
<div className="modal-box">
<div className="modal-header">
<h3 id="cat7-m-title" style={{color: '#fff', textTransform: 'uppercase'}}>Title</h3>
<button className="close-btn" onclick="cat7CloseModal()">×</button>
</div>
<div className="prompt-block">
<span className="pb-label">AI Prompt</span>
<div className="pb-text" id="cat7-m-prompt"></div>
</div>
<div className="prompt-block">
<span className="pb-label">Code Logic</span>
<div className="code-block" id="cat7-m-code"></div>
</div>
<button className="btn-copy" onclick="cat7CopyAll(event)">Copy Prompt &amp; Code</button>
</div>
</div>
<section id="cat7-typewriter">
<div className="controls">
<button className="ctrl-btn" onclick="cat7OpenModal('type')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat7ReplayTypewriter()">Replay</button>
</div>
<div className="type-container">
<span className="label">Our Mission</span>
<div className="type-text">
<span id="cat7-type-target"></span><span className="cursor" id="cat7-cursor"></span>
</div>
<p className="type-sub" id="cat7-type-sub">Join 10,000+ creative teams building the future.</p>
</div>
</section>
<section id="cat7-scramble">
<div className="controls">
<button className="ctrl-btn" onclick="cat7OpenModal('scramble')">Show Prompt</button>
<button className="ctrl-btn" onclick="cat7ReplayScramble()">Replay</button>
</div>
<div className="container">
<span className="label" style={{textAlign: 'center'}}>Capabilities</span>
<h2 style={{textAlign: 'center', fontSize: '48px', marginBottom: '20px'}}>What We Do</h2>
<div className="card-grid">
<div className="scramble-card">
<svg className="s-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M16 18l6-6-6-6"></path><path d="M8 6l-6 6 6 6"></path></svg>
<div className="s-title" data-final="Development">X9#m2@L</div>
<p>Full-stack engineering expertise.</p>
</div>
<div className="scramble-card">
<svg className="s-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><circle cx="11" cy="11" r="2"></circle></svg>
<div className="s-title" data-final="Design">#k92!Pz</div>
<p>Pixel-perfect precision.</p>
</div>
<div className="scramble-card">
<svg className="s-icon" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<div className="s-title" data-final="Strategy">Q@8m$W1</div>
<p>Data-driven growth plans.</p>
</div>
</div>
</div>
</section>
<div id="cat7-color">
<div id="cat7-color-sticky">
<div className="controls" style={{position: 'absolute', top: '40px', right: '40px'}}>
<button className="ctrl-btn" onclick="cat7OpenModal('color')">Show Prompt</button>
</div>
<div className="color-card" id="cat7-color-card">
<svg className="color-icon" fill="none" id="cat7-color-icon" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
</svg>
<h2 className="color-title" id="cat7-color-title">Adaptive Design</h2>
<p className="color-desc" id="cat7-color-desc">Beautiful at every scroll position.</p>
</div>
</div>
</div>
<div id="cat7-morph">
<div id="cat7-morph-sticky">
<div className="controls" style={{position: 'absolute', top: '40px', right: '40px'}}>
<button className="ctrl-btn" onclick="cat7OpenModal('morph')">Show Prompt</button>
</div>
<div className="morph-layout">
<div className="morph-content">
<span className="label">Evolution</span>
<h2 style={{fontSize: '56px', marginBottom: '30px', color: '#fff'}}>Constantly Evolving</h2>
<ul className="morph-list">
<li className="active" id="cat7-morph-li-1">Agile Methodology</li>
<li id="cat7-morph-li-2">Continuous Improvement</li>
<li id="cat7-morph-li-3">Future-Focused Thinking</li>
<li id="cat7-morph-li-4">Infinite Adaptability</li>
</ul>
</div>
<div className="morph-visual">
<svg id="cat7-morph-svg" viewbox="0 0 200 200">
<defs>
<lineargradient id="cat7-morph-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#CFB53B"></stop>
<stop offset="100%" stop-color="#FFD700"></stop>
</lineargradient>
</defs>
<path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" id="cat7-morph-path"></path>
</svg>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
