import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
                window.lucide.createIcons({
                    attrs: {
                        class: "stroke-1.5"
                    }
                });
            }
        });

        // Custom Cursor Logic
        const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const cursor = document.getElementById('cursor');

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        if (!prefersReducedMotion && cursor) {
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;

                const target = e.target;
                const isClickable = target.tagName.toLowerCase() === 'a' ||
                    target.tagName.toLowerCase() === 'button' ||
                    target.closest('a') || target.closest('button') ||
                    target.closest('.group');

                if (isClickable) {
                    cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
                } else {
                    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                }
            });

            function animateCursor() {
                const lerpFactor = 0.18;

                cursorX += (mouseX - cursorX) * lerpFactor;
                cursorY += (mouseY - cursorY) * lerpFactor;

                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';

                requestAnimationFrame(animateCursor);
            }

            animateCursor();
        }

        // Preloader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 700);
            }, 2200);
        });

        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressEl = document.getElementById('scroll-progress');
            if (progressEl) {
                progressEl.style.width = scrolled + '%';
            }
        });

        const hudLabel = document.getElementById('hud-notch-label');
        const hudExpand = document.getElementById('hud-notch-expand');
        const hudCollapse = document.getElementById('hud-notch-collapse');
        let notchTimeout;

        if (hudLabel && hudExpand && hudCollapse) {
            hudLabel.addEventListener('mouseenter', () => {
                if (notchTimeout) {
                    clearTimeout(notchTimeout);
                    notchTimeout = null;
                }
                if (hudExpand.beginElement) hudExpand.beginElement();
            });
            hudLabel.addEventListener('mouseleave', () => {
                notchTimeout = setTimeout(() => {
                    if (hudCollapse.beginElement) hudCollapse.beginElement();
                }, 3000);
            });
        }

        const heroSection = document.getElementById('hero');
        const heroCardSection = document.getElementById('hero-card-section');
        const heroGlassShell = document.querySelector('.hero-glass-shell');
        const heroSlideNav = document.getElementById('hero-slide-nav');
        const heroCardParallax = document.querySelector('.hero-card-parallax');

        if (heroSection && heroGlassShell) {
            let heroExpandCurrent = 0;
            let heroExpandVelocity = 0;
            let heroExpandRaf = 0;
            let heroExpandLastT = 0;

            let parallaxCurrent = 0;
            let parallaxVelocity = 0;

            const smoothDamp = (current, target, currentVelocity, smoothTime, maxSpeed, deltaTime) => {
                const st = Math.max(0.0001, smoothTime);
                const omega = 2 / st;
                const x = omega * deltaTime;
                const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
                let change = current - target;
                const originalTo = target;
                const maxChange = maxSpeed * st;
                change = Math.min(Math.max(change, -maxChange), maxChange);
                target = current - change;
                const temp = (currentVelocity + omega * change) * deltaTime;
                currentVelocity = (currentVelocity - omega * temp) * exp;
                let output = target + (change + temp) * exp;
                if ((originalTo - current > 0) === (output > originalTo)) {
                    output = originalTo;
                    currentVelocity = 0;
                }
                return [output, currentVelocity];
            };

            const tickHeroExpand = (now) => {
                const t = Math.min((now - heroExpandLastT) / 1000, 0.05);
                heroExpandLastT = now;

                const scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0;
                const windowHeight = window.innerHeight;

                let progress = scrollY / (windowHeight * 0.9);
                progress = Math.min(Math.max(progress, 0), 1);
                const heroExpandTarget = 1 - Math.pow(1 - progress, 3);

                let parallaxTarget = 0;
                if (heroCardSection) {
                    const rect = heroCardSection.getBoundingClientRect();
                    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                    const clamped = Math.min(Math.max(1 - Math.abs(rect.top) / viewportHeight, 0), 1);
                    parallaxTarget = heroExpandTarget > 0.3 ? clamped * -16 : 0;
                }

                if (prefersReducedMotion) {
                    heroExpandCurrent = heroExpandTarget;
                    heroExpandVelocity = 0;
                } else {
                    [heroExpandCurrent, heroExpandVelocity] = smoothDamp(
                        heroExpandCurrent,
                        heroExpandTarget,
                        heroExpandVelocity,
                        0.6,
                        2.2,
                        t
                    );
                }
                heroExpandCurrent = Math.min(Math.max(heroExpandCurrent, 0), 1);
                heroGlassShell.style.setProperty('--expand', heroExpandCurrent);

                if (heroCardSection) {
                    const expansionScroll = windowHeight * 0.9;
                    const extraScroll = Math.max(scrollY - expansionScroll, 0);
                    const releaseRange = windowHeight * 0.9;

                    let offsetFactor = 0;
                    if (releaseRange > 0) {
                        offsetFactor = Math.min(extraScroll / releaseRange, 1);
                    }

                    const eased = offsetFactor * offsetFactor * (3 - 2 * offsetFactor);
                    const translate = (1 - eased) * windowHeight;

                    if (offsetFactor === 0) {
                        heroCardSection.style.marginTop = `${windowHeight}px`;
                    } else if (translate <= 1) {
                        heroCardSection.style.marginTop = '';
                    } else {
                        heroCardSection.style.marginTop = `${translate}px`;
                    }
                }

                const isRevealed = heroGlassShell.classList.contains('content-revealed');
                if (!isRevealed && heroExpandCurrent > 0.32) {
                    heroGlassShell.classList.add('content-revealed');
                } else if (isRevealed && heroExpandCurrent < 0.26) {
                    heroGlassShell.classList.remove('content-revealed');
                }

                const zIsHigh = heroGlassShell.style.zIndex === '10000';
                if (!zIsHigh && heroExpandCurrent > 0.18) {
                    heroGlassShell.style.zIndex = '10000';
                } else if (zIsHigh && heroExpandCurrent < 0.1) {
                    heroGlassShell.style.zIndex = '30';
                }

                if (heroSlideNav) {
                    const navIsVisible = heroSlideNav.classList.contains('opacity-100');
                    if (!navIsVisible && heroExpandCurrent > 0.34) {
                        heroSlideNav.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                        heroSlideNav.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    } else if (navIsVisible && heroExpandCurrent < 0.26) {
                        heroSlideNav.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                        heroSlideNav.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    }
                }

                if (heroCardParallax) {
                    if (prefersReducedMotion) {
                        parallaxCurrent = parallaxTarget;
                        parallaxVelocity = 0;
                    } else {
                        [parallaxCurrent, parallaxVelocity] = smoothDamp(
                            parallaxCurrent,
                            parallaxTarget,
                            parallaxVelocity,
                            0.7,
                            45,
                            t
                        );
                    }
                    heroCardParallax.style.transform = `translateY(${parallaxCurrent}px)`;
                }

                const doneExpand = Math.abs(heroExpandTarget - heroExpandCurrent) < 0.001 && Math.abs(heroExpandVelocity) < 0.004;
                const doneParallax = Math.abs(parallaxTarget - parallaxCurrent) < 0.03 && Math.abs(parallaxVelocity) < 0.08;

                if (doneExpand && doneParallax) {
                    heroExpandCurrent = heroExpandTarget;
                    heroExpandVelocity = 0;
                    parallaxCurrent = parallaxTarget;
                    parallaxVelocity = 0;
                    heroExpandRaf = 0;
                    return;
                }

                heroExpandRaf = window.requestAnimationFrame(tickHeroExpand);
            };

            const startHeroExpandRaf = () => {
                if (heroExpandRaf) return;
                heroExpandLastT = performance.now();
                heroExpandRaf = window.requestAnimationFrame(tickHeroExpand);
            };

            window.addEventListener('scroll', startHeroExpandRaf, { passive: true });
            window.addEventListener('resize', startHeroExpandRaf);
            window.addEventListener('pageshow', startHeroExpandRaf);
            startHeroExpandRaf();
            setTimeout(startHeroExpandRaf, 0);
            setTimeout(startHeroExpandRaf, 250);
        }

        // Interactive Code Reveal Hero (Flashlight Effect)
        (function () {
            const canvas = document.getElementById('hero-code-canvas');
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            let width, height;
            // Target mouse position
            let mouseX = -1000;
            let mouseY = -1000;
            // Current smooth position
            let currentX = -1000;
            let currentY = -1000;

            // Auto-wandering state
            let isAuto = true;
            let lastMouseMoveTime = 0;
            let autoTimer = 0;

            // Code Snippets for Znyth Labs
            const keywords = [
                'import {AI} from "znyth";', 'const future = true;', 'await deploy(vision);',
                'bg-zinc-900', '<SafeAreaView>', 'git push origin main',
                'npm install @znyth/core', 'function build()', 'interface User { }',
                'export const config', 'while(alive) {code()}', '01010110',
                'class Enterprise extends AI', 'Znyth.init()', 'data.map(transform)',
                'transition: all 0.5s', 'rgb(24, 24, 27)', 'v2.0.0',
                'Status: "Operational"', 'padding: 24px', 'return <Hero />',
                'Analysis.complete()', 'Encryption: "AES-256"', 'Event("click")',
                '404 Not Found', '200 OK', 'System.ready()',
                'const theme = "dark"', 'let innovation = []', 'render(<App />)'
            ];

            // Grid Configuration
            const fontSize = 14;
            const columnWidth = 200;
            const rowHeight = 22; // Reduced from 30 for more compactness
            let items = [];

            function resize() {
                width = canvas.parentElement.offsetWidth;
                height = canvas.parentElement.offsetHeight;

                // Account for High DPI
                const dpr = window.devicePixelRatio || 1;
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                ctx.scale(dpr, dpr);
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                initItems();
            }

            function initItems() {
                items = [];
                // Set font for measuring
                ctx.font = `${fontSize}px "Geist Mono", "Space Mono", monospace`;

                const rows = Math.ceil(height / rowHeight);

                for (let j = 0; j < rows; j++) {
                    let currentX = -50; // Start slightly off-screen
                    // Create a continuous stream of code for this row
                    while (currentX < width) {
                        const text = keywords[Math.floor(Math.random() * keywords.length)];
                        const textWidth = ctx.measureText(text).width;

                        // Compact spacing (10px to 30px)
                        const gap = 10 + Math.random() * 20;

                        // Center vertically in the row
                        const y = j * rowHeight + rowHeight / 2;

                        // Offset alternate rows for a brick/seamless pattern
                        const rowOffset = (j % 2 === 0) ? 0 : -30;

                        items.push({
                            x: currentX + rowOffset,
                            y,
                            text,
                            width: textWidth
                        });

                        currentX += textWidth + gap;
                    }
                }
            }

            function animate() {
                ctx.clearRect(0, 0, width, height);
                ctx.font = `${fontSize}px "Geist Mono", "Space Mono", monospace`;
                ctx.textAlign = "left"; // Changed from center to left for natural flow
                ctx.textBaseline = "middle";

                // Auto-Wandering Logic
                if (Date.now() - lastMouseMoveTime > 2000) {
                    isAuto = true;
                }

                if (isAuto) {
                    // Slowed down from 0.01 to 0.002 for cinematic slow-motion feel
                    autoTimer += 0.002;
                    // Lissajous curve for organic wandering
                    mouseX = (width / 2) + Math.cos(autoTimer) * (width / 3);
                    mouseY = (height / 2) + Math.sin(autoTimer * 1.5) * (height / 4);
                }

                // Smoothly interpolate current position towards target mouse position
                // Reduced Lerp factor to 0.025 for a heavier, more cinematic "delayed" follow effect
                currentX += (mouseX - currentX) * 0.025;
                currentY += (mouseY - currentY) * 0.025;

                // Pre-calculate protected zones (with 10px radius) relative to canvas
                const protectedElements = document.querySelectorAll('.protected-element');
                const canvasRect = canvas.getBoundingClientRect();
                const protectedZones = Array.from(protectedElements).map(el => {
                    const rect = el.getBoundingClientRect();
                    return {
                        left: rect.left - canvasRect.left - 10,
                        right: rect.right - canvasRect.left + 10,
                        top: rect.top - canvasRect.top - 10,
                        bottom: rect.bottom - canvasRect.top + 10
                    };
                });

                items.forEach(item => {
                    // Check protection first
                    // Use center of text for protection check
                    const itemCenterX = item.x + (item.width / 2);

                    let isProtected = false;
                    for (const zone of protectedZones) {
                        if (itemCenterX >= zone.left && itemCenterX <= zone.right && item.y >= zone.top && item.y <= zone.bottom) {
                            isProtected = true;
                            break;
                        }
                    }

                    if (isProtected) {
                        return; // Skip drawing this item entirely
                    }

                    // Calculate opacity based on distance to interpolated position
                    // Use closest point on the text line to the light source for better illumination logic?
                    // Or just use the center? Center is simpler and looks fine.
                    const dx = currentX - itemCenterX;
                    const dy = currentY - item.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const maxDist = 150; // Radius of reveal

                    let targetOpacity = 0;
                    if (distance < maxDist) {
                        // Map distance 0..150 to opacity 1..0
                        targetOpacity = 1 - (distance / maxDist);
                        targetOpacity = Math.pow(targetOpacity, 3); // Higher power for smoother/softer edge fade
                    } else {
                        targetOpacity = 0; // Completely hidden outside radius
                    }

                    if (targetOpacity > 0.01) {
                        // Blur effect as it fades out: lower opacity = higher blur
                        const blurAmount = (1 - targetOpacity) * 2;
                        ctx.filter = `blur(${blurAmount}px)`;

                        ctx.fillStyle = `rgba(100, 116, 139, ${targetOpacity})`; // Slate-500
                        ctx.fillText(item.text, item.x, item.y);

                        ctx.filter = 'none';
                    }
                });

                requestAnimationFrame(animate);
            }

            // Track Mouse relative to canvas
            document.addEventListener('mousemove', (e) => {
                const rect = canvas.getBoundingClientRect();

                // Only take control if mouse is actually over the hero section
                if (e.clientX >= rect.left && e.clientX <= rect.right &&
                    e.clientY >= rect.top && e.clientY <= rect.bottom) {

                    isAuto = false;
                    lastMouseMoveTime = Date.now();
                    mouseX = e.clientX - rect.left;
                    mouseY = e.clientY - rect.top;
                }
            });

            window.addEventListener('resize', resize);

            // Init
            resize();
            animate();
        })();

        (function () {
            const metas = document.querySelectorAll('.hero-app-meta');
            const details = document.querySelectorAll('.hero-app-details');
            const dots = document.querySelectorAll('.hero-slide-dot');
            const prev = document.querySelector('[data-hero-slide-prev]');
            const next = document.querySelector('[data-hero-slide-next]');

            if (!metas.length || !details.length || !dots.length) return;

            let current = 0;
            const maxIndex = Math.min(metas.length, details.length, dots.length);

            function show(index) {
                const target = ((index % maxIndex) + maxIndex) % maxIndex;
                current = target;

                metas.forEach(el => {
                    const appIndex = parseInt(el.getAttribute('data-app-index') || '0', 10);
                    if (appIndex === target) {
                        el.classList.remove('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                });

                details.forEach(el => {
                    const appIndex = parseInt(el.getAttribute('data-app-index') || '0', 10);
                    if (appIndex === target) {
                        el.classList.remove('hidden');
                    } else {
                        el.classList.add('hidden');
                    }
                });

                dots.forEach(dot => {
                    const dotIndex = parseInt(dot.getAttribute('data-slide-index') || '0', 10);
                    const isActive = dotIndex === target;
                    dot.setAttribute('data-active', isActive ? 'true' : 'false');
                    dot.setAttribute('aria-current', isActive ? 'true' : 'false');

                    dot.classList.remove('bg-zinc-900', 'border-zinc-900', 'scale-110');
                    dot.classList.remove('bg-zinc-900/30', 'border-zinc-900/60');

                    if (isActive) {
                        dot.classList.add('bg-zinc-900', 'border-zinc-900', 'scale-110');
                    } else {
                        dot.classList.add('bg-zinc-900/30', 'border-zinc-900/60');
                    }
                });

                if (window.heroFeatureAutoplay && typeof window.heroFeatureAutoplay.startForSlide === 'function') {
                    window.heroFeatureAutoplay.startForSlide(target);
                }
            }

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const dotIndex = parseInt(dot.getAttribute('data-slide-index') || '0', 10);
                    show(dotIndex);
                });
            });

            const initialActiveDot = Array.from(dots).find(dot => dot.getAttribute('data-active') === 'true');
            if (initialActiveDot) {
                const initialIndex = parseInt(initialActiveDot.getAttribute('data-slide-index') || '0', 10);
                show(initialIndex);
            } else {
                show(0);
            }
        })();

        // Feature Cards Interaction Logic
        (function () {
            const featureCards = document.querySelectorAll('.feature-card');
            const phoneUIStates = {
                'Real-time Sync': { id: 'ui-sync', color: '#10b981' },
                'Neural Engine': { id: 'ui-neural', color: '#06b6d4' },
                'Global CDN': { id: 'ui-cdn', color: '#10b981' },
                'Secure Enclave': { id: 'ui-secure', color: '#818cf8' }
            };
            const heroDots = document.querySelectorAll('.hero-dot');
            const heroDetailsSections = document.querySelectorAll('.hero-app-details');
            const featureOrder = ['Real-time Sync', 'Neural Engine', 'Global CDN', 'Secure Enclave'];
            let autoplayTimer = null;
            let autoplayResumeTimeout = null;
            let currentSlideIndex = 0;

            function setActiveDot(featureName) {
                heroDots.forEach(dot => {
                    const dotFeature = dot.getAttribute('data-feature-name');
                    const isActive = dotFeature === featureName;
                    dot.setAttribute('data-active', isActive ? 'true' : 'false');
                });
            }

            function getVisibleDetailsSection() {
                return Array.from(heroDetailsSections).find(section => !section.classList.contains('hidden')) || null;
            }

            function findCardByFeature(featureName, scopeElement) {
                const cards = scopeElement ? scopeElement.querySelectorAll('.feature-card') : featureCards;
                return Array.from(cards).find(c => {
                    const label = c.querySelector('span');
                    return label && label.textContent.trim() === featureName;
                }) || null;
            }

            function activateFeature(featureName, sourceCard) {
                const stateConfig = phoneUIStates[featureName];
                let activeCard = sourceCard || null;

                if (!activeCard) {
                    const visibleSection = getVisibleDetailsSection();
                    activeCard = (visibleSection && findCardByFeature(featureName, visibleSection)) || findCardByFeature(featureName, null);
                }

                featureCards.forEach(c => {
                    const icon = c.querySelector('.feature-icon');
                    const isActive = c === activeCard;
                    c.setAttribute('data-active', isActive ? 'true' : 'false');
                    if (isActive) {
                        c.classList.remove('bg-zinc-200/50', 'text-zinc-600');
                        c.classList.add('bg-zinc-900', 'text-white', 'shadow-xl');
                        if (icon) {
                            icon.classList.remove('text-zinc-400', 'opacity-0');
                            icon.classList.add('text-white', 'opacity-100');
                        }
                    } else {
                        c.classList.remove('bg-zinc-900', 'text-white', 'shadow-xl');
                        c.classList.add('bg-zinc-200/50', 'text-zinc-600');
                        if (icon) {
                            icon.classList.remove('text-white', 'opacity-100');
                            icon.classList.add('text-zinc-400', 'opacity-0');
                        }
                    }
                });

                if (stateConfig) {
                    document.querySelectorAll('.phone-ui-state').forEach(ui => {
                        ui.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
                        ui.classList.remove('opacity-100', 'translate-y-0');
                    });

                    const activeUI = document.getElementById(stateConfig.id);
                    if (activeUI) {
                        activeUI.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
                        activeUI.classList.add('opacity-100', 'translate-y-0');
                    }

                    const indicator = document.getElementById('phone-status-indicator');
                    if (indicator) indicator.style.backgroundColor = stateConfig.color;
                }

                setActiveDot(featureName);
            }

            function stopAutoplay() {
                if (autoplayTimer) {
                    clearInterval(autoplayTimer);
                    autoplayTimer = null;
                }
                if (autoplayResumeTimeout) {
                    clearTimeout(autoplayResumeTimeout);
                    autoplayResumeTimeout = null;
                }
            }

            function startAutoplayForSlide(slideIndex) {
                stopAutoplay();

                currentSlideIndex = slideIndex;

                const section = Array.from(heroDetailsSections).find(section => {
                    const indexAttr = section.getAttribute('data-app-index') || '0';
                    return parseInt(indexAttr, 10) === slideIndex;
                });

                if (!section) return;

                let i = 0;

                const tick = () => {
                    const featureName = featureOrder[i % featureOrder.length];
                    const card = findCardByFeature(featureName, section);
                    if (card) {
                        activateFeature(featureName, card);
                    }
                    i += 1;
                };

                tick();
                autoplayTimer = window.setInterval(tick, 2400);
            }

            function scheduleAutoplayResume() {
                if (typeof currentSlideIndex !== 'number') return;
                autoplayResumeTimeout = window.setTimeout(() => {
                    startAutoplayForSlide(currentSlideIndex);
                }, 4000);
            }

            featureCards.forEach(card => {
                card.addEventListener('mousedown', () => {
                    const label = card.querySelector('span');
                    if (!label) return;
                    const featureName = label.textContent.trim();
                    stopAutoplay();
                    activateFeature(featureName, card);
                    scheduleAutoplayResume();
                });
            });

            heroDots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const featureName = dot.getAttribute('data-feature-name');
                    if (featureName) {
                        stopAutoplay();
                        activateFeature(featureName);
                        scheduleAutoplayResume();
                    }
                });
            });

            window.heroFeatureAutoplay = {
                startForSlide: startAutoplayForSlide,
                stop: stopAutoplay
            };

            const visibleSection = getVisibleDetailsSection();
            if (visibleSection) {
                const indexAttr = visibleSection.getAttribute('data-app-index') || '0';
                const slideIndex = parseInt(indexAttr, 10);
                startAutoplayForSlide(slideIndex);
            }
        })();
    


        // Initialize Lucide Icons for the new section
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }

        // 3D Tilt Logic
        const cards = document.querySelectorAll('.card-3d-wrapper');
        cards.forEach(card => {
            const content = card.querySelector('.card-3d');
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;
                content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
                const shadowX = (x - centerX) / 12;
                const shadowY = (y - centerY) / 12;
                content.style.boxShadow = `${-shadowX}px ${-shadowY + 15}px 35px rgba(0,0,0,0.08)`;
            });
            card.addEventListener('mouseleave', () => {
                content.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                content.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.06)';
            });
        });

        // Progressive Reveal System
        const initRevealSystem = () => {
            const hasPlayed = sessionStorage.getItem('reveal-animation-played');
            
            // Auto-tag elements if not already tagged
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                // Select key content elements to animate
                // Prioritize existing reveal-elements, then generic content
                const elements = section.querySelectorAll('.reveal-element, h1, h2, h3, p, .card, .card-3d-wrapper, .btn, img, .grid > div, .glass-panel');
                
                elements.forEach(el => {
                    // Avoid nested reveals (if parent is already revealing)
                    if (el.parentElement.closest('.reveal-element')) return;

                    if (!el.classList.contains('reveal-element')) {
                        el.classList.add('reveal-element');
                    }
                    
                    // If session already played, make visible immediately
                    if (hasPlayed) {
                        el.classList.add('is-visible');
                        el.style.transition = 'none'; // Disable transition for instant show
                        el.style.opacity = '1';
                        el.style.transform = 'none';
                    }
                });
            });

            if (hasPlayed) return;

            // Initialize Observer
            const observerOptions = {
                threshold: 0.15,
                rootMargin: '0px 0px -50px 0px'
            };

            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        // Select only direct reveal elements or top-level ones in the section
                        const elements = section.querySelectorAll('.reveal-element:not(.is-visible)');
                        
                        elements.forEach((el, index) => {
                            // Stagger delay based on index
                            // Cap index to prevent huge delays on large lists
                            const delayIndex = index < 15 ? index : 15;
                            el.style.transitionDelay = `${delayIndex * 100}ms`;
                            
                            // Add visibility class
                            requestAnimationFrame(() => {
                                el.classList.add('is-visible');
                            });
                        });
                        
                        sectionObserver.unobserve(section);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                sectionObserver.observe(section);
            });
            
            // Set session flag
            sessionStorage.setItem('reveal-animation-played', 'true');
        };
        
        // Run initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initRevealSystem);
        } else {
            initRevealSystem();
        }

        // Stacked Reveal Logic (Cinematic Scroll)
        const initStackedReveal = () => {
            const stackedWrapper = document.getElementById('stacked-reveal-wrapper');
            const stackedContent = document.getElementById('stacked-content');
            const revealSpacer = document.getElementById('reveal-spacer');
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            if (stackedWrapper && stackedContent && revealSpacer && !prefersReducedMotion) {
                
                const updateDimensions = () => {
                    const contentHeight = stackedContent.offsetHeight;
                    revealSpacer.style.height = contentHeight + 'px';
                    // Initially hidden to prevent overlap with Hero/Upper sections
                    stackedWrapper.style.visibility = 'hidden';
                };

                const onScroll = () => {
                    const spacerRect = revealSpacer.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const contentHeight = stackedContent.offsetHeight;
                    
                    // Visibility Optimization: only show when spacer is near the viewport
                    if (spacerRect.top < windowHeight && spacerRect.bottom > 0) {
                        stackedWrapper.style.visibility = 'visible';
                    } else {
                        stackedWrapper.style.visibility = 'hidden';
                    }

                    const maxTranslate = Math.max(0, contentHeight - windowHeight);

                    let progress = 0;
                    if (maxTranslate > 0) {
                        const rawProgress = -spacerRect.top;
                        progress = Math.min(Math.max(rawProgress / maxTranslate, 0), 1);
                    }

                    const translateY = progress * -maxTranslate;
                    
                    stackedContent.style.transform = `translate3d(0, ${translateY}px, 0)`;
                };

                // Initialize
                updateDimensions();
                onScroll();
                window.addEventListener('resize', () => {
                    updateDimensions();
                    onScroll();
                });
                window.addEventListener('scroll', onScroll, { passive: true });
            }
        };
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initStackedReveal);
        } else {
            initStackedReveal();
        }
    


        /**
         * Cinematic Smooth Scroll & Parallax Controller
         * Delivers a premium, weighted scrolling experience with depth.
         */
        class SmoothScrollController {
            constructor() {
                this.lenis = null;
                this.rafId = null;
                this.parallaxElements = [];
                
                // Cinematic Configuration
                this.config = {
                    lerp: 0.045,       // Slightly heavier for premium feel
                    duration: 1.2,
                    smoothWheel: true,
                    wheelMultiplier: 1,
                    touchMultiplier: 2,
                    orientation: 'vertical',
                    gestureOrientation: 'vertical',
                    normalizeWheel: true,
                    infinite: false,
                };

                this.init();
            }

            init() {
                if (typeof Lenis === 'undefined') {
                    console.warn('Lenis library not loaded.');
                    return;
                }

                // Initialize Lenis
                this.lenis = new Lenis(this.config);

                // Initialize Parallax Elements
                this.initParallax();

                // Start Animation Loop
                this.startRaf();
                
                // Expose instance
                window.smoothScroll = this;
            }

            initParallax() {
                // Find all elements with data-speed
                const elements = document.querySelectorAll('[data-speed]');
                this.parallaxElements = Array.from(elements).map(el => {
                    const rect = el.getBoundingClientRect();
                    // Store initial top relative to document
                    const top = rect.top + window.scrollY;
                    const speed = parseFloat(el.dataset.speed) || 1;
                    return {
                        el,
                        top,
                        speed,
                        height: rect.height
                    };
                });
            }

            updateParallax(scrollY) {
                const viewportHeight = window.innerHeight;
                
                this.parallaxElements.forEach(({ el, top, speed, height }) => {
                    // Distance from the top of the viewport
                    const offset = top - scrollY;
                    
                    // Check if in view (with buffer)
                    if (offset < viewportHeight && offset + height > 0) {
                        // Calculate parallax translation
                        // We want the element to be at 0 translation when it's in the center of the viewport
                        const centerOffset = (viewportHeight / 2) - (offset + height / 2);
                        const translate = centerOffset * (1 - speed);
                        
                        // Apply transform
                        el.style.transform = `translate3d(0, ${translate}px, 0)`;
                    }
                });
            }

            startRaf() {
                const raf = (time) => {
                    this.lenis.raf(time);
                    
                    if (this.lenis) {
                        this.updateParallax(this.lenis.scroll);
                    }

                    this.rafId = requestAnimationFrame(raf);
                };
                this.rafId = requestAnimationFrame(raf);
            }
        }

        const prefersReducedMotionSmooth = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (!prefersReducedMotionSmooth) {
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => new SmoothScrollController());
            } else {
                new SmoothScrollController();
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor" style={{transform: 'translate(-50%, -50%) scale(1)', left: '0px', top: '0px'}}></div>

<div className="fixed inset-0 z-[100] bg-white flex items-center justify-center transition-opacity duration-700" id="loader" style={{opacity: '0', display: 'none'}}>
<div className="flex flex-col items-center gap-6">
<h1 className="text-6xl font-semibold tracking-tighter loading-text">ZNYTH</h1>
<span className="text-xs font-medium tracking-[0.3em] text-zinc-400 uppercase">Initializing Interface</span>
</div>
</div>

<section className="sticky min-h-screen flex flex-col overflow-hidden text-zinc-50 z-0 relative top-0 items-center justify-center" id="hero">

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-45" data-speed="0.85" height="874" id="hero-code-canvas" style={{width: '1557px', height: '972px'}} width="1401"></canvas>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-50" data-speed="0.9" fill="none" id="hud-shell" preserveaspectratio="none" viewbox="0 0 1082 787" xmlns="http://www.w3.org/2000/svg">
<path d="M1082 787H0V0H1082V787ZM24 10C16.8203 10 11 15.8203 11 23V736.5C11 743.68 16.8203 749.5 24 749.5H67.6445C70.5869 749.5 73.4426 750.498 75.7441 752.331L104.415 775.169C106.717 777.002 109.572 778 112.515 778H975.024C976.334 778 977.579 777.498 978.521 776.588C984.599 770.711 1007.9 748.5 1012.85 748.5H1060C1067.18 748.5 1073 742.68 1073 735.5V23C1073 15.8203 1067.18 10 1060 10H607.261L586 44.5H495L473.221 10H24Z" fill="black" id="hud-shell-path">
<animate attributename="d" begin="indefinite" calcmode="spline" dur="0.6s" fill="freeze" id="hud-notch-expand" keysplines="0.19 1 0.22 1" keytimes="0;1" restart="always" values="M1082 787H0V0H1082V787ZM24 10C16.8203 10 11 15.8203 11 23V736.5C11 743.68 16.8203 749.5 24 749.5H67.6445C70.5869 749.5 73.4426 750.498 75.7441 752.331L104.415 775.169C106.717 777.002 109.572 778 112.515 778H975.024C976.334 778 977.579 777.498 978.521 776.588C984.599 770.711 1007.9 748.5 1012.85 748.5H1060C1067.18 748.5 1073 742.68 1073 735.5V23C1073 15.8203 1067.18 10 1060 10H607.261L586 44.5H495L473.221 10H24Z;M1082 787H0V0H1082V787ZM24 10C16.8203 10 11 15.8203 11 23V736.5C11 743.68 16.8203 749.5 24 749.5H67.6445C70.5869 749.5 73.4426 750.498 75.7441 752.331L104.415 775.169C106.717 777.002 109.572 778 112.515 778H975.024C976.334 778 977.579 777.498 978.521 776.588C984.599 770.711 1007.9 748.5 1012.85 748.5H1060C1067.18 748.5 1073 742.68 1073 735.5V23C1073 15.8203 1067.18 10 1060 10H635.34L614.079 44.5H467.847L446.067 10H24Z">
</animate>
<animate attributename="d" begin="indefinite" calcmode="spline" dur="0.6s" fill="freeze" id="hud-notch-collapse" keysplines="0.19 1 0.22 1" keytimes="0;1" restart="always" values="M1082 787H0V0H1082V787ZM24 10C16.8203 10 11 15.8203 11 23V736.5C11 743.68 16.8203 749.5 24 749.5H67.6445C70.5869 749.5 73.4426 750.498 75.7441 752.331L104.415 775.169C106.717 777.002 109.572 778 112.515 778H975.024C976.334 778 977.579 777.498 978.521 776.588C984.599 770.711 1007.9 748.5 1012.85 748.5H1060C1067.18 748.5 1073 742.68 1073 735.5V23C1073 15.8203 1067.18 10 1060 10H635.34L614.079 44.5H467.847L446.067 10H24Z;M1082 787H0V0H1082V787ZM24 10C16.8203 10 11 15.8203 11 23V736.5C11 743.68 16.8203 749.5 24 749.5H67.6445C70.5869 749.5 73.4426 750.498 75.7441 752.331L104.415 775.169C106.717 777.002 109.572 778 112.515 778H975.024C976.334 778 977.579 777.498 978.521 776.588C984.599 770.711 1007.9 748.5 1012.85 748.5H1060C1067.18 748.5 1073 742.68 1073 735.5V23C1073 15.8203 1067.18 10 1060 10H607.261L586 44.5H495L473.221 10H24Z">
</animate>
</path>
</svg>
<div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 z-[60]">
<div className="group inline-flex items-center justify-center text-white cursor-pointer gap-1 sm:gap-0 hover:gap-3 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] delay-[3000ms] hover:delay-0" id="hud-notch-label">
<span className="inline-flex items-center justify-center">
<svg className="h-4 sm:h-5 md:h-6 w-auto" fill="none" viewbox="0 0 602 609" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#hudLogoClip)">
<path d="M0 608.767L93.8914 258.359H266.388L218.236 437.818H393.053L564.003 608.767H0Z" fill="white"></path>
<path d="M601.129 0.00219727L507.237 350.41H334.741L382.893 170.952H208.076L37.1261 0.00219727H601.129Z" fill="white"></path>
</g>
<defs>
<clippath id="hudLogoClip">
<rect fill="white" height="609" width="602"></rect>
</clippath>
</defs>
</svg>
</span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] whitespace-nowrap font-semibold lowercase text-xs sm:text-sm md:text-base lg:text-lg leading-none pt-0.5 sm:pt-1 delay-[3000ms] group-hover:delay-0">
                    zynth labs
                </span>
</div>
</div>

<div className="z-10 text-center max-w-4xl px-4 -translate-y-10 md:-translate-y-20 space-y-4" data-speed="1.05">
<h1 className="text-4xl md:text-7xl font-medium tracking-tighter leading-[1.1] text-zinc-900 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="protected-element font-bold w-fit mx-auto">EMPOWERING THE</div>
<div className="protected-element font-bold text-zinc-400 w-fit mr-auto ml-auto">FILIPINO FUTURE</div>
</h1>
<p className="protected-element mt-4 max-w-xl mx-auto text-sm md:text-base text-zinc-500 leading-relaxed reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                Znyth Labs architects cinematic, data-native interfaces for ambitious Filipino brands. We blend
                strategy, code, and motion into products that feel distinctly Filipino and globally competitive.
            </p>
<div className="pt-6 flex justify-center">
<a className="protected-element group flex items-center justify-center gap-2 uppercase transition-all duration-300 ease-out hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_15px_25px_-5px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] text-xs font-semibold text-white tracking-[0.2em] bg-black border-white/20 border rounded-full pt-3 pr-8 pb-3 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_20px_-5px_rgba(0,0,0,0.5)]" href="#contact">
<span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        Start Project
        <svg aria-hidden="true" className="lucide lucide-arrow-right" height="14" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>

<div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
</a>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-44 bg-gradient-to-t from-white via-white/95 to-transparent z-40">
</div>
<div className="hero-glass-shell" style={{-Expand: '1', zIndex: '10000'}}>
<div className="hero-glass-inner">
<div className="hero-card">

<div className="absolute inset-0 z-0 opacity-[var(--expand,0)] transition-opacity duration-0 pointer-events-none" style={{background: 'linear-gradient(135deg, #e4e4e7 0%, #ffffff 50%, #d4d4d8 100%)'}}>
<div className="absolute inset-0 opacity-50 mix-blend-overlay" style={{background: 'linear-gradient(45deg, rgba(255,0,0,0.1), rgba(0,255,0,0.1), rgba(0,0,255,0.1))'}}>
</div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 400 400\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.95\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\' opacity=\\'1\\'/%3E%3C/svg%3E\')'}}>
</div>
</div>
<div className="hero-card-parallax relative z-10 w-full h-full" style={{transform: 'translateY(-11.1323px)'}}>

<div className="absolute top-0 left-0 w-full h-[200px] md:h-[260px] flex items-center justify-between px-6 md:px-10 z-20" style={{opacity: 'calc(1 - var(--expand, 0) * 3)', transform: 'translateY(calc(var(--expand, 0) * -20px))', pointerEvents: 'none'}}>
<div className="max-w-sm space-y-3 text-left">
<p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>Product
                                    Ecosystem</p>
<h2 className="text-lg md:text-2xl font-medium tracking-tight text-white reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>Next-generation
                                    applications engineered for scale</h2>
<p className="text-xs md:text-sm text-white reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>A suite of intelligent tools designed to
                                    redefine workflow, creativity, and data visualization for the modern era.</p>
</div>
<div className="hidden md:flex flex-col items-end gap-3 text-xs text-white">
<span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">AI-Powered
                                    Core</span>
<span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">Cross-Platform</span>
<span className="px-3 py-1 rounded-full border border-white/15 bg-white/5">Enterprise
                                    Security</span>
</div>
</div>

<div className="md:px-16 transition-all duration-300 w-full h-full z-30 pt-10 pr-6 pb-10 pl-6 absolute top-0 right-0 bottom-0 left-0" style={{opacity: 'var(--expand, 0)', pointerEvents: 'auto'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full h-full max-w-[1400px] mr-auto ml-auto gap-x-10 gap-y-10 items-center">
<section className="lg:col-span-4 flex flex-col">
<div className="hero-app-meta space-y-10" data-app-index="0">
<div className="h-16 w-16 bg-black rounded-2xl flex items-center justify-center shadow-xl reveal-item reveal-delay-1">
<svg className="h-8 w-auto" fill="none" viewbox="0 0 602 609" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#hudLogoClip)">
<path d="M0 608.767L93.8914 258.359H266.388L218.236 437.818H393.053L564.003 608.767H0Z" fill="white"></path>
<path d="M601.129 0.00219727L507.237 350.41H334.741L382.893 170.952H208.076L37.1261 0.00219727H601.129Z" fill="white"></path>
</g>
</svg>
</div>
<div className="space-y-6 reveal-item reveal-delay-1">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-black uppercase leading-[0.9] reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Zynth Suite
                                            </h2>
<p className="text-base md:text-xl text-zinc-500 font-normal leading-relaxed max-w-md reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Experience the ethereal interface designed for the next generation
                                                of creators. Seamlessly integrated, purely intuitive.
                                            </p>
</div>
<div className="group relative w-full aspect-square max-w-sm rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-200 cursor-pointer reveal-item reveal-delay-2">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-400 to-zinc-600 scale-150 group-hover:scale-125 transition-transform duration-1000 ease-out">
</div>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-zinc-800 to-transparent opacity-40 mix-blend-overlay">
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30">
<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5"></circle>
<polygon fill="currentColor" points="10,8 16,12 10,16"></polygon>
</svg>
</div>
</div>
</div>
</div>
<div className="hero-app-meta space-y-10 hidden" data-app-index="1">
<div className="h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl reveal-item reveal-delay-1">
<div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center">
<span className="text-xs font-semibold tracking-[0.2em] uppercase">CD
                                                </span>
</div>
</div>
<div className="space-y-6 reveal-item reveal-delay-1">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-black uppercase leading-[0.9] reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Cortex Desk
                                            </h2>
<p className="text-base md:text-xl text-zinc-500 font-normal leading-relaxed max-w-md reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                A deep-work cockpit that syncs briefs, docs, and decisions into one
                                                continuously updating surface.
                                            </p>
</div>
<div className="group relative w-full aspect-square max-w-sm rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 cursor-pointer reveal-item reveal-delay-2">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-zinc-800 to-black scale-150 group-hover:scale-125 transition-transform duration-1000 ease-out">
</div>
<div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent opacity-60 mix-blend-overlay">
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-emerald-500/20 backdrop-blur-md rounded-full p-4 border border-emerald-300/40">
<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16M4 7h10M4 17h7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="hero-app-meta space-y-10 hidden" data-app-index="2">
<div className="h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl reveal-item reveal-delay-1">
<div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-sky-400 to-indigo-500 flex items-center justify-center">
<span className="text-xs font-semibold tracking-[0.2em] uppercase">HM
                                                </span>
</div>
</div>
<div className="space-y-6 reveal-item reveal-delay-1">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-black uppercase leading-[0.9] reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Halo Metrics
                                            </h2>
<p className="text-base md:text-xl text-zinc-500 font-normal leading-relaxed max-w-md reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Live product analytics for founders who need story, not just
                                                dashboards. Every spike, drop, and cohort, explained.
                                            </p>
</div>
<div className="group relative w-full aspect-square max-w-sm rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 cursor-pointer reveal-item reveal-delay-2">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-zinc-900 to-black scale-150 group-hover:scale-125 transition-transform duration-1000 ease-out">
</div>
<div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent opacity-60 mix-blend-overlay">
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-sky-500/20 backdrop-blur-md rounded-full p-4 border border-sky-300/40">
<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19l4-9 4 5 4-10 4 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="hero-app-meta space-y-10 hidden" data-app-index="3">
<div className="h-16 w-16 bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl reveal-item reveal-delay-1">
<div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center">
<span className="text-xs font-semibold tracking-[0.2em] uppercase">LF
                                                </span>
</div>
</div>
<div className="space-y-6 reveal-item reveal-delay-1">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-black uppercase leading-[0.9] reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Lumen Flow
                                            </h2>
<p className="text-base md:text-xl text-zinc-500 font-normal leading-relaxed max-w-md reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                Automation canvas for ops teams. Drag, connect, and ship workflows
                                                that feel cinematic instead of bureaucratic.
                                            </p>
</div>
<div className="group relative w-full aspect-square max-w-sm rounded-[2rem] overflow-hidden shadow-2xl bg-zinc-900 cursor-pointer reveal-item reveal-delay-2">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-zinc-900 to-black scale-150 group-hover:scale-125 transition-transform duration-1000 ease-out">
</div>
<div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
<div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent opacity-60 mix-blend-overlay">
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-amber-500/20 backdrop-blur-md rounded-full p-4 border border-amber-300/40">
<svg className="w-8 h-8 text-white" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h7l-3 5M19 7h-7l3-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-8 flex items-center justify-center transition-opacity transition-transform duration-300 z-30" id="hero-slide-nav">
<div className="flex items-center justify-center gap-2 py-2" id="hero-slide-dots">
<button aria-current="true" className="hero-slide-dot h-1.5 rounded-full transition-all duration-300 w-1.5 aria-[current=true]:w-6 bg-black/20 hover:bg-black/40 aria-[current=true]:!bg-black aria-[current=true]:!scale-100 aria-[current=true]:!shadow-none bg-zinc-900 border-zinc-900 scale-110" data-active="true" data-slide-index="0" type="button"></button>
<button aria-current="false" className="hero-slide-dot h-1.5 rounded-full transition-all duration-300 w-1.5 aria-[current=true]:w-6 bg-black/20 hover:bg-black/40 aria-[current=true]:!bg-black aria-[current=true]:!scale-100 aria-[current=true]:!shadow-none bg-zinc-900/30 border-zinc-900/60" data-active="false" data-slide-index="1" type="button"></button>
<button aria-current="false" className="hero-slide-dot h-1.5 rounded-full transition-all duration-300 w-1.5 aria-[current=true]:w-6 bg-black/20 hover:bg-black/40 aria-[current=true]:!bg-black aria-[current=true]:!scale-100 aria-[current=true]:!shadow-none bg-zinc-900/30 border-zinc-900/60" data-active="false" data-slide-index="2" type="button"></button>
<button aria-current="false" className="hero-slide-dot h-1.5 rounded-full transition-all duration-300 w-1.5 aria-[current=true]:w-6 bg-black/20 hover:bg-black/40 aria-[current=true]:!bg-black aria-[current=true]:!scale-100 aria-[current=true]:!shadow-none bg-zinc-900/30 border-zinc-900/60" data-active="false" data-slide-index="3" type="button"></button>
</div>
</div>
</section>
<section className="lg:col-span-4 flex justify-center py-10 lg:py-0 reveal-item reveal-delay-3">
<div className="relative border-[1px] overflow-hidden box-content bg-center md:w-[320px] md:h-[680px] w-[260px] h-[520px] max-w-[80vw] max-h-[80vh] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39a98b24-48f0-484e-904b-9cf7114eb0cf_800w.png)] bg-cover z-10 rounded-[3.5rem] shadow-2xl mx-auto">
<img alt="Zynth Labs app shell" className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none reveal-element is-visible" decoding="async" fetchpriority="low" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39a98b24-48f0-484e-904b-9cf7114eb0cf_800w.png" style={{transition: 'none', opacity: '1', transform: 'none'}}/>
<div className="absolute inset-0 rounded-[3.5rem] overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 border border-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] z-10 isolate mix-blend-normal">
<div className="px-6 pt-6 pb-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all duration-300" id="phone-status-indicator" style={{backgroundColor: 'rgb(16, 185, 129)'}}>
</div>
<div className="w-12 h-1.5 rounded-full bg-zinc-800"></div>
</div>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800"></div>
<div className="w-4 h-1.5 rounded-full bg-zinc-800"></div>
</div>
</div>
<div className="relative h-full overflow-hidden">

<div className="phone-ui-state absolute inset-0 px-6 pt-8 space-y-6 transition-all duration-300 transform opacity-100 translate-y-0" id="ui-sync">
<div className="grid grid-cols-2 gap-4">
<div className="h-24 rounded-2xl bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-end gap-2 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-emerald-500 animate-[shimmer_2s_infinite]">
</div>
</div>
<div className="w-1/2 h-2 bg-zinc-800 rounded-full"></div>
</div>
<div className="h-24 rounded-2xl bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-end gap-2 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="w-full h-1 bg-emerald-500/20 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-emerald-500 animate-[shimmer_2s_infinite_reverse]">
</div>
</div>
<div className="w-3/4 h-2 bg-zinc-800 rounded-full"></div>
</div>
</div>
<div className="space-y-3">
<div className="w-full h-12 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
</div>
<div className="flex-1 h-2 bg-zinc-800 rounded-full"></div>
<div className="w-8 h-2 bg-zinc-800 rounded-full"></div>
</div>
<div className="w-full h-12 rounded-xl bg-zinc-900/30 border border-white/5 flex items-center px-4 gap-3">
<div className="w-6 h-6 rounded-lg bg-zinc-800"></div>
<div className="flex-1 h-2 bg-zinc-800 rounded-full opacity-50">
</div>
<div className="w-12 h-2 bg-zinc-800 rounded-full opacity-50">
</div>
</div>
</div>
</div>

<div className="phone-ui-state absolute inset-0 px-6 pt-8 flex flex-col items-center justify-center transition-all duration-300 transform opacity-0 translate-y-2 pointer-events-none" id="ui-neural">
<div className="relative w-48 h-48 flex items-center justify-center">
<div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[ping_3s_linear_infinite]">
</div>
<div className="absolute inset-4 border border-cyan-500/40 rounded-full animate-[ping_4s_linear_infinite_reverse]">
</div>
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-xl animate-pulse">
</div>
<div className="absolute flex gap-1">
<div className="w-1 h-8 bg-cyan-500 rounded-full animate-[height_1s_ease-in-out_infinite]">
</div>
<div className="w-1 h-12 bg-cyan-400 rounded-full animate-[height_1.2s_ease-in-out_infinite_delay-100]">
</div>
<div className="w-1 h-16 bg-white rounded-full animate-[height_0.8s_ease-in-out_infinite_delay-200]">
</div>
<div className="w-1 h-12 bg-cyan-400 rounded-full animate-[height_1.2s_ease-in-out_infinite_delay-300]">
</div>
<div className="w-1 h-8 bg-cyan-500 rounded-full animate-[height_1s_ease-in-out_infinite_delay-400]">
</div>
</div>
</div>
<div className="mt-8 w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 animate-[shimmer_1.5s_infinite]">
</div>
</div>
</div>

<div className="phone-ui-state absolute inset-0 px-6 pt-8 space-y-8 transition-all duration-300 transform opacity-0 translate-y-2 pointer-events-none" id="ui-cdn">
<div className="relative h-40 bg-zinc-900/30 rounded-3xl border border-white/5 overflow-hidden">
<svg className="absolute inset-0 w-full h-full opacity-30" viewbox="0 0 200 150">
<circle cx="40" cy="40" fill="white" r="2"></circle>
<circle cx="160" cy="60" fill="white" r="2"></circle>
<circle cx="100" cy="110" fill="white" r="2"></circle>
<circle cx="50" cy="120" fill="white" r="2"></circle>
<path d="M40 40 L160 60 L100 110 L50 120 L40 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse">
</div>
<div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white] animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="h-12 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="w-6 h-1 bg-zinc-700 rounded-full"></div>
</div>
<div className="h-12 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="w-6 h-1 bg-zinc-700 rounded-full"></div>
</div>
<div className="h-12 bg-zinc-900/50 border border-white/5 rounded-xl flex items-center justify-center reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="w-6 h-1 bg-zinc-700 rounded-full"></div>
</div>
</div>
</div>

<div className="phone-ui-state absolute inset-0 px-6 pt-8 flex flex-col items-center transition-all duration-300 transform opacity-0 translate-y-2 pointer-events-none" id="ui-secure">
<div className="relative w-40 h-40 mt-10">
<div className="absolute inset-0 border border-indigo-500/30 rounded-full">
</div>
<div className="absolute inset-4 border border-indigo-500/50 rounded-full">
</div>
<div className="absolute inset-8 border-2 border-indigo-500 flex items-center justify-center rounded-3xl rotate-45 animate-[spin_8s_linear_infinite]">
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]">
</div>
</div>
</div>
<div className="mt-12 w-full space-y-3">
<div className="w-full h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
</div>
<div className="flex justify-between px-2">
<div className="w-12 h-1.5 bg-zinc-800 rounded-full"></div>
<div className="w-8 h-1.5 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-center opacity-20">
<div className="w-8 h-1 bg-white rounded-full"></div>
<div className="w-4 h-1 bg-white rounded-full"></div>
</div>
</div>
</div>
</section>
<section className="lg:col-span-4 flex flex-col justify-center pl-0 lg:pl-10">
<h3 className="text-xl font-semibold tracking-tight text-slate-800 mb-8 reveal-item reveal-delay-4 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                        Core Capabilities
                                    </h3>
<div className="hero-app-details space-y-8" data-app-index="0">
<div className="space-y-4 w-full max-w-sm reveal-item reveal-delay-4">

<div className="feature-card group flex items-center justify-between p-5 rounded-3xl cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-blue-600 shadow-blue-500/20 ring-1 ring-white/10 bg-zinc-900 text-white shadow-xl" data-active="true">
<span className="text-base font-semibold tracking-wide">Real-time Sync</span>
<svg className="feature-icon w-5 h-5 text-white opacity-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"></polyline>
</svg>
</div>

<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Neural Engine</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Global CDN</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Secure Enclave</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<div className="mt-8 w-full max-w-sm rounded-[2.5rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-50 overflow-hidden relative group cursor-default transform transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] reveal-item reveal-delay-5">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="text-xl font-bold text-slate-800 tracking-tight">Community</h4>
<p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1.5 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                            Global Activity
                                                        </p>
</div>
<div className="bg-blue-50 p-2.5 rounded-2xl text-blue-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M3 12h18"></path>
<path d="M12 3c2.5 3 4 6.5 4 9s-1.5 6-4 9"></path>
<path d="M12 3C9.5 6 8 9.5 8 12s1.5 6 4 9"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">24k</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Online Now</p>
</div>
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">142</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Countries</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-indigo-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-pink-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-sky-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                                            +99
                                                        </div>
</div>
<div className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full cursor-pointer hover:bg-blue-100 transition-colors">
                                                        Join Hub →
                                                    </div>
</div>
</div>
</div>
</div>
<div className="hero-app-details space-y-8 hidden" data-app-index="1">
<div className="space-y-4 w-full max-w-sm reveal-item reveal-delay-4">
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Real-time Sync</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"></polyline>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-blue-600 shadow-blue-500/20 ring-1 ring-white/10 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-semibold tracking-wide">Neural Engine</span>
<svg className="feature-icon w-5 h-5 text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Global CDN</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Secure Enclave</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<div className="mt-8 w-full max-w-sm rounded-[2.5rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-50 overflow-hidden relative group cursor-default transform transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] reveal-item reveal-delay-5">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="text-xl font-bold text-slate-800 tracking-tight">Focus Rooms</h4>
<p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1.5 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                            Deep Work Sessions
                                                        </p>
</div>
<div className="bg-emerald-50 p-2.5 rounded-2xl text-emerald-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="3" width="18" x="3" y="4"></rect>
<path d="M8 10h8M8 14h5"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">18</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Active Teams</p>
</div>
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">92%</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">On-Time</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-emerald-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-cyan-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                                            +32
                                                        </div>
</div>
<div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full cursor-pointer hover:bg-emerald-100 transition-colors">
                                                        View Schedules →
                                                    </div>
</div>
</div>
</div>
</div>
<div className="hero-app-details space-y-8 hidden" data-app-index="2">
<div className="space-y-4 w-full max-w-sm reveal-item reveal-delay-4">
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Real-time Sync</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"></polyline>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Neural Engine</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-blue-600 shadow-blue-500/20 ring-1 ring-white/10 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-semibold tracking-wide">Global CDN</span>
<svg className="feature-icon w-5 h-5 text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Secure Enclave</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<div className="mt-8 w-full max-w-sm rounded-[2.5rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-50 overflow-hidden relative group cursor-default transform transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] reveal-item reveal-delay-5">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-sky-100/50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="text-xl font-bold text-slate-800 tracking-tight">Revenue Lens</h4>
<p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1.5 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                            Product-Led Growth
                                                        </p>
</div>
<div className="bg-sky-50 p-2.5 rounded-2xl text-sky-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h18v4H3z"></path>
<path d="M7 13h3v8H7zM14 9h3v12h-3z"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">+38%</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Weekly Active</p>
</div>
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">3.2x</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Lift in MRR</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-sky-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-indigo-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                                            +21
                                                        </div>
</div>
<div className="text-xs font-bold text-sky-600 bg-sky-50 px-4 py-2 rounded-full cursor-pointer hover:bg-sky-100 transition-colors">
                                                        Open Board →
                                                    </div>
</div>
</div>
</div>
</div>
<div className="hero-app-details space-y-8 hidden" data-app-index="3">
<div className="space-y-4 w-full max-w-sm reveal-item reveal-delay-4">
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Real-time Sync</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="13 2 3 14 11 14 11 22 21 10 13 10 13 2"></polyline>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Neural Engine</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer transition-all duration-300 ease-out hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-medium">Global CDN</span>
<svg className="feature-icon w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="feature-card group flex items-center justify-between p-5 rounded-3xl cursor-pointer transform transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] bg-blue-600 shadow-blue-500/20 ring-1 ring-white/10 bg-zinc-200/50 text-zinc-600" data-active="false">
<span className="text-base font-semibold tracking-wide">Secure Enclave</span>
<svg className="feature-icon w-5 h-5 text-zinc-400 opacity-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<div className="mt-8 w-full max-w-sm rounded-[2.5rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-slate-50 overflow-hidden relative group cursor-default transform transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] reveal-item reveal-delay-5">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl opacity-60"></div>
<div className="relative z-10 p-8 h-full">
<div className="flex justify-between items-start mb-8">
<div>
<h4 className="text-xl font-bold text-slate-800 tracking-tight">Pipelines</h4>
<p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mt-1.5 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                                            Automated Hand-Offs
                                                        </p>
</div>
<div className="bg-amber-50 p-2.5 rounded-2xl text-amber-600">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16M4 12h10M4 17h7"></path>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">12</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Flows Live</p>
</div>
<div className="bg-slate-50 p-4 rounded-3xl border border-slate-100/50 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<p className="text-3xl font-bold text-slate-800 tracking-tight">74%</p>
<p className="text-[11px] text-slate-400 font-semibold mt-1">Efficiency</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-amber-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-rose-300 shadow-sm"></div>
<div className="w-10 h-10 rounded-full border-[3px] border-white bg-slate-800 text-white flex items-center justify-center text-[10px] font-bold shadow-sm">
                                                            +16
                                                        </div>
</div>
<div className="text-xs font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-full cursor-pointer hover:bg-amber-100 transition-colors">
                                                        Preview →
                                                    </div>
</div>
</div>
</div>
</div>
</section></div>
<div className="mt-8 reveal-item reveal-delay-5">
<p className="text-sm font-medium text-zinc-900 mb-4 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                                    Available on these platforms
                                </p>
<div className="flex items-center space-x-6">
<a className="text-black hover:text-zinc-600 transition-colors" href="#">
<svg fill="currentColor" height="24" viewbox="0 0 384 512" width="24">
<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z">
</path>
</svg>
</a>
<a className="hover:opacity-80 transition-opacity" href="#">
<svg height="24" viewbox="0 0 512 512" width="24">
<path d="M32.5 31.7L32.5 480.3 358.4 256z" fill="#2196F3"></path>
<path d="M358.4 256L32.5 480.3 392.3 438.7 444.6 357.5z" fill="#4CAF50">
</path>
<path d="M32.5 31.7L358.4 256 444.6 154.5 392.3 73.3z" fill="#FFC107">
</path>
<path d="M392.3 73.3L444.6 154.5 444.6 357.5 392.3 438.7 486.2 308.8C501.1 285.5 501.1 226.5 486.2 203.2z" fill="#F44336">
</path>
</svg>
</a>
</div>
</div>
</div></div></div></div></div></section>
<section className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden" id="hero-card-section" style={{marginTop: '578.058px'}}>
<div className="spline-container absolute inset-0 z-0">
<iframe className="pointer-events-none opacity-80" frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 z-0 pointer-events-none">
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center -mt-20 gap-y-0">
<div className="flex flex-col items-center justify-center w-full max-w-4xl mb-10">
<svg className="w-full h-auto text-white" fill="none" viewbox="0 0 3772 892" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M831.132 585.603H978.037V654H736.566V586.793L880.497 392.902H737.16V324.505H976.252V391.713L831.132 585.603ZM1225.1 319.747C1264.35 319.747 1296.07 332.237 1320.26 357.217C1344.45 381.8 1356.54 416.296 1356.54 460.704V654H1273.27V472.005C1273.27 445.835 1266.73 425.812 1253.65 411.934C1240.56 397.66 1222.72 390.523 1200.12 390.523C1177.12 390.523 1158.88 397.66 1145.4 411.934C1132.32 425.812 1125.77 445.835 1125.77 472.005V654H1042.51V324.505H1125.77V365.543C1136.88 351.269 1150.95 340.167 1168 332.237C1185.45 323.91 1204.48 319.747 1225.1 319.747ZM1750.94 324.505L1546.94 809.826H1458.32L1529.69 645.673L1397.66 324.505H1491.03L1576.08 554.676L1662.32 324.505H1750.94ZM1892.77 392.902V552.297C1892.77 563.399 1895.35 571.527 1900.5 576.682C1906.05 581.44 1915.17 583.819 1927.86 583.819H1966.52V654H1914.18C1844 654 1808.91 619.901 1808.91 551.702V392.902H1769.66V324.505H1808.91V243.023H1892.77V324.505H1966.52V392.902H1892.77ZM2211.97 319.747C2236.95 319.747 2259.16 325.298 2278.59 336.4C2298.02 347.106 2313.08 363.164 2323.79 384.575C2334.89 405.59 2340.44 430.966 2340.44 460.704V654H2257.18V472.005C2257.18 445.835 2250.63 425.812 2237.55 411.934C2224.46 397.66 2206.62 390.523 2184.02 390.523C2161.02 390.523 2142.78 397.66 2129.3 411.934C2116.22 425.812 2109.68 445.835 2109.68 472.005V654H2026.41V213.88H2109.68V365.543C2120.38 351.269 2134.66 340.167 2152.5 332.237C2170.34 323.91 2190.17 319.747 2211.97 319.747Z" fill="white"></path>
<path className="" d="M2599.8 213.88V654H2516.54V213.88H2599.8ZM2660.66 488.063C2660.66 454.757 2667.2 425.217 2680.29 399.444C2693.77 373.672 2711.81 353.846 2734.41 339.969C2757.41 326.091 2782.98 319.152 2811.13 319.152C2835.72 319.152 2857.13 324.109 2875.37 334.021C2894 343.934 2908.87 356.424 2919.97 371.491V324.505H3003.83V654H2919.97V605.825C2909.27 621.288 2894.4 634.175 2875.37 644.484C2856.73 654.397 2835.12 659.353 2810.54 659.353C2782.78 659.353 2757.41 652.216 2734.41 637.942C2711.81 623.667 2693.77 603.644 2680.29 577.871C2667.2 551.702 2660.66 521.766 2660.66 488.063ZM2919.97 489.253C2919.97 469.031 2916.01 451.783 2908.08 437.509C2900.15 422.838 2889.44 411.736 2875.96 404.202C2862.48 396.272 2848.01 392.307 2832.54 392.307C2817.08 392.307 2802.81 396.074 2789.72 403.608C2776.64 411.141 2765.93 422.243 2757.6 436.914C2749.67 451.188 2745.71 468.238 2745.71 488.063C2745.71 507.888 2749.67 525.334 2757.6 540.402C2765.93 555.072 2776.64 566.373 2789.72 574.303C2803.2 582.233 2817.48 586.198 2832.54 586.198C2848.01 586.198 2862.48 582.431 2875.96 574.897C2889.44 566.967 2900.15 555.865 2908.08 541.591C2916.01 526.92 2919.97 509.474 2919.97 489.253ZM3168.42 372.68C3179.13 356.82 3193.8 343.934 3212.44 334.021C3231.47 324.109 3253.08 319.152 3277.26 319.152C3305.42 319.152 3330.79 326.091 3353.39 339.969C3376.39 353.846 3394.43 373.672 3407.52 399.444C3421 424.821 3427.74 454.36 3427.74 488.063C3427.74 521.766 3421 551.702 3407.52 577.871C3394.43 603.644 3376.39 623.667 3353.39 637.942C3330.79 652.216 3305.42 659.353 3277.26 659.353C3252.68 659.353 3231.07 654.595 3212.44 645.079C3194.2 635.166 3179.53 622.478 3168.42 607.014V654H3085.16V213.88H3168.42V372.68ZM3342.69 488.063C3342.69 468.238 3338.52 451.188 3330.2 436.914C3322.27 422.243 3311.56 411.141 3298.08 403.608C3285 396.074 3270.72 392.307 3255.26 392.307C3240.19 392.307 3225.92 396.272 3212.44 404.202C3199.35 411.736 3188.65 422.838 3180.32 437.509C3172.39 452.179 3168.42 469.427 3168.42 488.063C3168.42 507.888 3172.39 525.334 3180.32 540.402C3188.65 555.072 3199.35 566.373 3212.44 574.303C3225.92 582.233 3240.19 586.198 3255.26 586.198C3270.72 586.198 3285 582.431 3298.08 574.897C3311.56 566.967 3322.27 555.865 3330.2 541.591C3338.52 526.92 3342.69 509.474 3342.69 488.063Z" fill="white"></path>
<path d="M3614.33 659.353C3587.37 659.353 3563.18 654.595 3541.77 645.079C3520.36 635.166 3503.31 621.883 3490.62 605.23C3478.33 588.577 3471.59 570.139 3470.4 549.918H3554.26C3555.85 562.606 3561.99 573.113 3572.7 581.44C3583.8 589.766 3597.48 593.93 3613.74 593.93C3629.6 593.93 3641.89 590.758 3650.61 584.414C3659.73 578.069 3664.29 569.941 3664.29 560.029C3664.29 549.323 3658.74 541.393 3647.64 536.238C3636.93 530.687 3619.69 524.74 3595.9 518.396C3571.31 512.448 3551.09 506.302 3535.23 499.958C3519.77 493.614 3506.29 483.9 3494.79 470.815C3483.68 457.73 3478.13 440.086 3478.13 417.882C3478.13 399.643 3483.29 382.989 3493.6 367.922C3504.3 352.855 3519.37 340.96 3538.8 332.237C3558.62 323.514 3581.82 319.152 3608.39 319.152C3647.64 319.152 3678.96 329.065 3702.36 348.89C3725.75 368.319 3738.64 394.686 3741.02 427.993H3661.32C3660.13 414.908 3654.58 404.599 3644.67 397.065C3635.15 389.135 3622.26 385.17 3606.01 385.17C3590.94 385.17 3579.24 387.946 3570.92 393.497C3562.99 399.048 3559.02 406.78 3559.02 416.692C3559.02 427.794 3564.57 436.319 3575.67 442.267C3586.78 447.818 3604.02 453.567 3627.42 459.515C3651.21 465.462 3670.83 471.608 3686.3 477.952C3701.76 484.296 3715.04 494.209 3726.15 507.69C3737.65 520.775 3743.59 538.221 3743.99 560.029C3743.99 579.061 3738.64 596.11 3727.93 611.178C3717.62 626.245 3702.55 638.14 3682.73 646.863C3663.3 655.19 3640.5 659.353 3614.33 659.353Z" fill="white"></path>
<path d="M0 655.564L93.8914 305.156H266.388L218.236 484.615H393.053L564.003 655.564H0Z" fill="white"></path>
<path className="" d="M601.129 46.7993L507.237 397.207H334.741L382.893 217.749H208.076L37.1261 46.7993H601.129Z" fill="white"></path>
</svg>
</div>
<p className="md:text-lg leading-relaxed text-sm font-normal text-zinc-400 tracking-wide max-w-2xl -translate-y-3 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                Znyth Labs architects cinematic, data-native interfaces for ambitious Filipino brands. We blend
                strategy, code, and motion into products that feel distinctly Filipino and globally competitive.
            </p>
<div className="mt-10 liquid-cta-container">
<button aria-label="Start Your Journey" className="group relative flex items-center justify-center pt-5 pr-10 pb-5 pl-10 gap-x-3 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 border-t border-white/10 border-b border-black shadow-[0_10px_20px_-5px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,1),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-0 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]">
<span className="relative z-10 font-semibold tracking-[0.2em] text-sm uppercase text-zinc-200 group-hover:text-white transition-colors drop-shadow-sm">
        Book a Discovery Call
    </span>
<svg className="lucide lucide-arrow-right relative z-10 w-4 h-4 text-zinc-400 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-white drop-shadow-sm" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="absolute bottom-0 w-full z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
<div className="px-6 py-4 md:py-6 border-b md:border-b-0 md:border-r border-white/5 bg-black/20 md:bg-transparent">
<p className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-[0.2em] whitespace-nowrap reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                        Trusted by Schools and Businesses
                    </p>
</div>
<div className="relative flex-1 overflow-hidden py-4 md:py-6 w-full">
<div className="inline-flex animate-marquee items-center gap-16 px-6">
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6">
</path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">STANFORD</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:stripe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Stripe</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:library" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-semibold tracking-tight">HARVARD</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:vercel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-semibold tracking-tight">Vercel</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">
</path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">ACME CORP</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:notion" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Notion</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6">
</path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">MIT</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2.886 4.18A11.98 11.98 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556q-.787.496-1.65.866L.951 7.277q.371-.863.866-1.65ZM.322 9.163l14.515 14.515q-1.066.26-2.195.322L0 11.358a12 12 0 0 1 .322-2.195m-.17 4.862l9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Linear</span>
</span>

<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6">
</path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">STANFORD</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:stripe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Stripe</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:library" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-semibold tracking-tight">HARVARD</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:vercel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
<span className="text-sm font-semibold tracking-tight">Vercel</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:building-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2">
</path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">ACME CORP</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:notion" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Notion</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="lucide:graduation-cap" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6">
</path>
<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
</g>
</svg>
<span className="text-sm font-semibold tracking-tight">MIT</span>
</span>
<span className="flex items-center gap-2 text-white/40 hover:text-white transition-colors cursor-default">
<svg aria-hidden="true" data-icon="simple-icons:linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2.886 4.18A11.98 11.98 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556q-.787.496-1.65.866L.951 7.277q.371-.863.866-1.65ZM.322 9.163l14.515 14.515q-1.066.26-2.195.322L0 11.358a12 12 0 0 1 .322-2.195m-.17 4.862l9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z" fill="currentColor">
</path>
</svg>
<span className="text-sm font-semibold tracking-tight">Linear</span>
</span>
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent">
</div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black/80 to-transparent">
</div>
</div>
</div>
</div>
</section>
<section className="hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.4] mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 via-white/0 to-purple-50/50"></div>
<div className="relative z-10 flex flex-col gap-0 select-none pointer-events-none opacity-20 rotate-[-5deg] scale-110 origin-center">
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee">
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">INNOVATION</span>
</div>
</div>
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee-reverse">
<span className="text-[8rem] font-semibold tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
</div>
</div>
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee">
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">CONNECTION</span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-50/0 via-zinc-50/0 to-zinc-50/90 z-20">
</div>
</section>
<section className="hidden relative w-full overflow-hidden bg-white min-h-screen flex items-center" id="mission">
<div className="absolute top-0 left-0 w-full h-full mission-bg-radial pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative z-10 flex flex-col justify-center reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="flex items-center gap-2 mb-6">
<div className="h-px w-8 bg-zinc-300"></div>
<span className="text-xs font-mono font-medium text-zinc-500 uppercase tracking-[0.2em]">
                        The Philosophy
                    </span>
</div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                    Weaving tradition into the <br className="hidden lg:block"/>
<span className="text-gradient">digital fabric.</span>
</h2>
<div className="space-y-8 text-xl text-zinc-500 font-light leading-relaxed max-w-xl">
<p>
                        The "Banig" is a symbol of Filipino resilience and
                        artistry—interwoven strips creating a unified whole. ZYNTH LABS
                        mirrors this in code.
                    </p>
<p>
                        We build software that respects the unique constraints of our
                        archipelago while adhering to Silicon Valley's rigorous standards
                        of minimalism and speed.
                    </p>
</div>
<div className="mt-12 pt-12 border-t border-zinc-100 grid grid-cols-2 gap-12">
<div className="group">
<div className="flex items-center gap-3 mb-2 text-indigo-600">
<svg className="lucide lucide-users w-5 h-5 text-indigo-500/80 stroke-1.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600/60">Impact</span>
</div>
<h4 className="text-4xl font-semibold text-zinc-900 tracking-tight">110M+</h4>
<p className="text-base text-zinc-400 mt-1 font-normal">Filipinos Connected</p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-2 text-indigo-600">
<svg className="lucide lucide-map-pin w-5 h-5 text-indigo-500/80 stroke-1.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-indigo-600/60">Coverage</span>
</div>
<h4 className="text-4xl font-semibold text-zinc-900 tracking-tight">7,641</h4>
<p className="text-base text-zinc-400 mt-1 font-normal">Islands Reached</p>
</div>
</div>
</div>
<div className="relative h-[600px] lg:h-[700px] bg-zinc-50 rounded-[2.5rem] overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 flex flex-col justify-center transform lg:translate-x-8 reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.4] mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-50/50 via-white/0 to-purple-50/50"></div>
<div className="relative z-10 flex flex-col gap-0 select-none pointer-events-none opacity-20 rotate-[-5deg] scale-110 origin-center">
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee">
<span className="text-[8rem] font-semibold tracking-tighter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">INNOVATION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">INNOVATION</span>
</div>
</div>
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee-reverse">
<span className="text-[8rem] font-semibold tracking-titter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-titter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-titter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
<span className="text-[8rem] font-semibold tracking-titter text-transparent mx-8" style={{WebkitTextStroke: '2px #18181b'}}>TRADITION</span>
</div>
</div>
<div className="overflow-hidden whitespace-nowrap">
<div className="inline-flex animate-marquee">
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">CONNECTION</span>
<span className="text-[8rem] font-semibold tracking-titter text-zinc-900 mx-8">CONNECTION</span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-50/0 via-zinc-50/0 to-zinc-50/90 z-20">
</div>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 bg-center font-jakarta bg-black w-full z-10 pt-20 pr-4 pb-32 pl-4 relative" id="nationwide-ecosystem">
<div className="max-w-[1280px] mr-auto ml-auto">

<div className="max-w-4xl mb-24 mx-auto text-center">
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                    Nationwide 
                    <span className="text-neutral-500">Ecosystem.</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 font-normal max-w-2xl leading-relaxed tracking-tight mx-auto reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                    Empowering businesses through seamless strategic partnerships and robust integrations fostering
                    growth at
                    scale.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="group md:col-span-2 relative h-[500px] rounded-[32px] bg-[#050505] overflow-hidden reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="shine-border rounded-[32px]"></div>

<div className="absolute top-8 left-8 z-20">
<h3 className="text-2xl font-medium tracking-tight text-white mb-1">Regional Hubs</h3>
<p className="text-neutral-500 text-sm font-medium">Live connection status</p>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-80">

<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden bg-[#050505]" style={{perspective: '1000px'}}>

<div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] origin-center" style={{transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(30deg) scale(1.4)'}}>

<div className="absolute inset-0 bg-zinc-950/90" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '80px 80px'}}></div>

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 0.5px, transparent 0.5px), linear-gradient(90deg, rgba(255,255,255,0.05) 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-60" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(56, 189, 248, 0)"></stop>
<stop offset="50%" stop-color="rgba(56, 189, 248, 1)"></stop>
<stop offset="100%" stop-color="rgba(56, 189, 248, 0)"></stop>
</lineargradient>
</defs>

<path d="M0 45% H 100%" stroke="rgba(255,255,255,0.15)" strokeWidth="3"></path>
<path d="M35% 0 V 100%" stroke="rgba(255,255,255,0.15)" strokeWidth="3"></path>
<path d="M65% 0 V 100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>
<path d="M0 75% H 100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2"></path>

<path className="opacity-80 animate-[shimmer_5s_linear_infinite]" d="M0 45% H 100%" stroke="#38bdf8" stroke-dasharray="100 800" strokeWidth="1.5"></path>
<path className="opacity-80 animate-[shimmer_7s_linear_infinite]" d="M35% 100% V 0" stroke="#34d399" stroke-dasharray="100 600" strokeWidth="1.5"></path>
</svg>

<div className="absolute left-[35%] top-[45%] w-0 h-0" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_25px_4px_rgba(56,189,248,0.8)] animate-pulse"></div>

<div className="absolute bottom-0 left-[-0.5px] w-[1px] h-32 bg-gradient-to-t from-sky-500/0 via-sky-400/60 to-transparent origin-bottom" style={{transform: 'rotateX(-90deg)'}}></div>

<div className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-sky-400/30 rounded-full animate-[ping_3s_linear_infinite]"></div>

<div className="absolute bottom-32 left-2 px-1.5 py-0.5 bg-sky-950/80 border border-sky-500/30 rounded text-[6px] font-mono tracking-widest text-sky-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{transform: 'rotateX(-90deg)'}}>HUB_01</div>
</div>

<div className="absolute left-[65%] top-[60%] w-0 h-0" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_20px_4px_rgba(52,211,153,0.6)] animate-pulse delay-500"></div>
<div className="absolute bottom-0 left-[-0.5px] w-[1px] h-20 bg-gradient-to-t from-emerald-500/0 via-emerald-400/60 to-transparent origin-bottom" style={{transform: 'rotateX(-90deg)'}}></div>
</div>

<div className="absolute left-[45%] top-[30%] w-0 h-0" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-amber-400 rounded-full shadow-[0_0_15px_rgba(251,191,36,0.6)] animate-pulse delay-1000"></div>
<div className="absolute bottom-0 left-[-0.5px] w-[1px] h-12 bg-gradient-to-t from-amber-500/0 via-amber-400/50 to-transparent origin-bottom" style={{transform: 'rotateX(-90deg)'}}></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] animate-[shimmer_6s_infinite] pointer-events-none"></div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#050505_90%)] pointer-events-none"></div>
</div>

<div className="w-3/4 h-3/4 relative">

<div className="absolute top-1/3 left-1/4">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_4px_rgba(255,255,255,0.4)] animate-pulse">
</div>
<div className="absolute top-4 left-4 whitespace-nowrap">
<div className="glass-panel px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-semibold tracking-wide uppercase text-neutral-300">San
                                            Francisco</span>
</div>
</div>
</div>

<div className="absolute bottom-1/3 right-1/4">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_20px_4px_rgba(255,255,255,0.4)] animate-pulse delay-75">
</div>
<div className="absolute bottom-4 right-4 whitespace-nowrap">
<div className="glass-panel px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-semibold tracking-wide uppercase text-neutral-300">New
                                            York</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2">
<div className="w-2 h-2 bg-neutral-600 rounded-full"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
<path className="opacity-60" d="M25% 33% Q 50% 50% 75% 66%" fill="none" stroke="url(#gradient-line)" stroke-dasharray="6 6" strokeWidth="1.5"></path>
<defs>
<lineargradient id="gradient-line" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="white"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
<div className="flex gap-8">
<div className="">
<div className="text-3xl font-medium tracking-tight text-white">12</div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Partners
                                </div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white">99.9<span className="text-lg text-neutral-600">%</span></div>
<div className="text-xs text-neutral-500 font-medium uppercase tracking-wider mt-1">Uptime
                                </div>
</div>
</div>
</div>
</div>

<div className="group md:col-span-1 overflow-hidden flex flex-col bg-[#050505] h-[500px] rounded-[32px] pt-12 pb-12 relative items-center justify-between reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="shine-border rounded-[32px]"></div>

<div className="flex-1 flex w-full relative items-center justify-center">

<div className="absolute w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative w-64 h-64 transform-style-3d group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
<svg className="overflow-visible drop-shadow-2xl w-[255px] h-[255px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(24, 24, 27)', width: '255px', height: '255px'}} viewbox="0 0 200 200">
<defs>
<filter id="glow-bw">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="0.5">
<line opacity="0.4" x1="100" x2="40" y1="120" y2="150"></line>
<line opacity="0.4" x1="100" x2="160" y1="120" y2="160"></line>
<line opacity="0.4" x1="100" x2="180" y1="90" y2="70"></line>
<line opacity="0.4" x1="100" x2="20" y1="90" y2="80"></line>
</g>

<g className="" transform="translate(0, 40)">
<ellipse cx="100" cy="100" fill="rgba(5,5,5,0.8)" rx="50" ry="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></ellipse>
<path className="" d="M50 100 v-20 a50 15 0 0 0 100 0 v20 a50 15 0 0 1 -100 0" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</g>

<g className="" transform="translate(0, 20)">
<ellipse cx="100" cy="100" fill="rgba(5,5,5,0.8)" rx="50" ry="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></ellipse>
<path className="" d="M50 100 v-20 a50 15 0 0 0 100 0 v20 a50 15 0 0 1 -100 0" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<circle className="animate-pulse" cx="80" cy="108" fill="#ffffff" filter="url(#glow-bw)" r="1.5"></circle>
<circle cx="85" cy="108" fill="#333" r="1.5"></circle>
<circle cx="90" cy="108" fill="#333" r="1.5"></circle>
</g>

<g className="" transform="translate(0, 0)">
<ellipse cx="100" cy="100" fill="rgba(5,5,5,0.8)" rx="50" ry="15" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></ellipse>
<path className="" d="M50 100 v-20 a50 15 0 0 0 100 0 v20 a50 15 0 0 1 -100 0" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>

<ellipse className="" cx="100" cy="80" fill="rgba(255,255,255,0.03)" rx="50" ry="15" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></ellipse>
</g>

<circle cx="40" cy="150" fill="#ffffff" filter="url(#glow-bw)" r="3">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</circle>
<circle cx="160" cy="160" fill="white" opacity="0.5" r="2"></circle>
<circle cx="180" cy="70" fill="#ffffff" filter="url(#glow-bw)" r="2.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.3;1"></animate>
</circle>
<circle cx="20" cy="80" fill="white" opacity="0.6" r="2"></circle>

<circle fill="#fff" filter="url(#glow-bw)" r="2">
<animatemotion calcmode="linear" dur="2s" keypoints="0;1" keytimes="0;1" path="M180 70 L100 90" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;1;0"></animate>
</circle>
<circle className="" fill="#ffffff" filter="url(#glow-bw)" r="2">
<animatemotion calcmode="linear" dur="2.5s" keypoints="0;1" keytimes="0;1" path="M100 120 L40 150" repeatcount="indefinite"></animatemotion>
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="1;0;0"></animate>
</circle>

<path d="M100 80 L100 50" stroke="rgba(255, 255, 255, 0.3)" stroke-dasharray="2 2" strokeWidth="1"></path>
<circle cx="100" cy="50" fill="none" opacity="0.6" r="4" stroke="#ffffff" strokeWidth="1">
<animate attributename="r" dur="4s" repeatcount="indefinite" values="4;8;4"></animate>
<animate attributename="opacity" dur="4s" repeatcount="indefinite" values="0.6;0;0.6"></animate>
</circle>
</svg>
</div>
</div>
<div className="text-center px-8 relative z-10">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Instant Sync</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-medium">
            Data propagates across all nodes with sub-millisecond latency.
        </p>
</div>
</div>

<div className="group md:col-span-1 relative h-[360px] rounded-[32px] bg-[#050505] overflow-hidden reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="shine-border rounded-[32px]"></div>

<div className="flex overflow-hidden absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
<svg className="group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,0.4,0.25,1)] transform group-hover:scale-105 opacity-60 max-w-[360px] w-[360px] h-[360px]" data-icon-replaced="true" fill="none" preserveaspectratio="xMidYMid meet" strokeWidth="2" style={{width: '360px', height: '360px', color: 'rgb(24, 24, 27)'}} viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="hub-gradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#27272a"></stop>
<stop offset="100%" stop-color="#09090b"></stop>
</lineargradient>
<lineargradient id="node-gradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#3f3f46"></stop>
<stop offset="100%" stop-color="#18181b"></stop>
</lineargradient>
<filter height="200%" id="glow-white" width="200%" x="-50%" y="-50%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g className="" opacity="0.3" stroke="white" stroke-dasharray="4 6" strokeWidth="1">
<line className="" stroke-opacity="0.3" x1="100" x2="200" y1="90" y2="140">
<animate attributename="stroke-dashoffset" dur="4s" from="100" repeatcount="indefinite" to="0"></animate>
</line>
<line className="" stroke-opacity="0.3" x1="300" x2="200" y1="90" y2="140">
<animate attributename="stroke-dashoffset" dur="5s" from="0" repeatcount="indefinite" to="100"></animate>
</line>
<line stroke-opacity="0.3" x1="100" x2="200" y1="210" y2="160">
<animate attributename="stroke-dashoffset" dur="4.5s" from="0" repeatcount="indefinite" to="-100"></animate>
</line>
<line stroke-opacity="0.3" x1="300" x2="200" y1="210" y2="160">
<animate attributename="stroke-dashoffset" dur="6s" from="-100" repeatcount="indefinite" to="0"></animate>
</line>
</g>

<g className="" transform="translate(100, 90)">
<path className="" d="M-20 0 L0 10 L20 0 L0 -10 Z" fill="#52525b" stroke="none"></path>
<path className="" d="M-20 0 L0 10 L0 30 L-20 20 Z" fill="#27272a" stroke="none"></path>
<path className="" d="M20 0 L0 10 L0 30 L20 20 Z" fill="#18181b" stroke="none"></path>
<path className="" d="M-20 0 L0 -10 L20 0 L0 10 L-20 0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<animatetransform attributename="transform" dur="4s" ease="ease-in-out" repeatcount="indefinite" type="translate" values="100 90; 100 85; 100 90"></animatetransform>
</g>

<g className="" transform="translate(300, 90)">
<path className="" d="M-20 0 L0 10 L20 0 L0 -10 Z" fill="#52525b" stroke="none"></path>
<path className="" d="M-20 0 L0 10 L0 30 L-20 20 Z" fill="#27272a" stroke="none"></path>
<path className="" d="M20 0 L0 10 L0 30 L20 20 Z" fill="#18181b" stroke="none"></path>
<path className="" d="M-20 0 L0 -10 L20 0 L0 10 L-20 0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<animatetransform attributename="transform" dur="5s" ease="ease-in-out" repeatcount="indefinite" type="translate" values="300 90; 300 95; 300 90"></animatetransform>
</g>

<g transform="translate(100, 210)">
<path d="M-20 0 L0 10 L20 0 L0 -10 Z" fill="#52525b" stroke="none"></path>
<path d="M-20 0 L0 10 L0 30 L-20 20 Z" fill="#27272a" stroke="none"></path>
<path d="M20 0 L0 10 L0 30 L20 20 Z" fill="#18181b" stroke="none"></path>
<path d="M-20 0 L0 -10 L20 0 L0 10 L-20 0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<animatetransform attributename="transform" dur="4.5s" ease="ease-in-out" repeatcount="indefinite" type="translate" values="100 210; 100 215; 100 210"></animatetransform>
</g>

<g transform="translate(300, 210)">
<path d="M-20 0 L0 10 L20 0 L0 -10 Z" fill="#52525b" stroke="none"></path>
<path d="M-20 0 L0 10 L0 30 L-20 20 Z" fill="#27272a" stroke="none"></path>
<path d="M20 0 L0 10 L0 30 L20 20 Z" fill="#18181b" stroke="none"></path>
<path d="M-20 0 L0 -10 L20 0 L0 10 L-20 0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<animatetransform attributename="transform" dur="5.5s" ease="ease-in-out" repeatcount="indefinite" type="translate" values="300 210; 300 205; 300 210"></animatetransform>
</g>

<g className="" transform="translate(200, 150)">

<ellipse className="" cx="0" cy="45" fill="#000" filter="url(#glow-white)" opacity="0.6" rx="50" ry="15"></ellipse>

<path className="" d="M-30 0 L0 15 L0 45 L-30 30 Z" fill="#27272a" stroke="rgba(255,255,255,0.15)" strokeWidth="1"></path>

<path className="" d="M30 0 L0 15 L0 45 L30 30 Z" fill="#18181b" stroke="rgba(255,255,255,0.15)" strokeWidth="1"></path>

<path className="" d="M-30 0 L0 -15 L30 0 L0 15 Z" fill="#52525b" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>

<path className="" d="M-10 0 L0 -5 L10 0 L0 5 Z" fill="#fff" filter="url(#glow-white)">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.4;1;0.4"></animate>
</path>

<path d="M0 -15 L0 -40" opacity="0.5" stroke="white" stroke-dasharray="2 2" strokeWidth="1">
<animate attributename="stroke-dashoffset" dur="1s" from="10" repeatcount="indefinite" to="0"></animate>
</path>
</g>
</svg>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
<svg className="lucide lucide-layers w-5 h-5 text-black stroke-1.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Deep Integration</h3>
<p className="text-xs text-neutral-500 font-medium">Connects with Salesforce, HubSpot, and 50+
                            tools.</p>
</div>
</div>

<div className="group md:col-span-2 relative h-[360px] rounded-[32px] bg-[#050505] overflow-hidden reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="shine-border rounded-[32px]"></div>
<div className="flex pl-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex w-full h-full relative items-center justify-center" style={{perspective: '1200px'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-zinc-500/10 blur-[80px] rounded-full pointer-events-none"></div>

<div className="relative w-[280px] h-[360px] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-x-0 hover:rotate-y-0 group" style={{transformStyle: 'preserve-3d', transform: 'rotateX(12deg) rotateY(-12deg) rotateZ(2deg)'}}>

<div className="absolute -right-8 top-0 w-2 h-2 rounded-full bg-zinc-500/40 blur-[1px] animate-pulse" style={{transform: 'translateZ(10px)'}}></div>
<div className="absolute -left-4 bottom-20 w-1.5 h-1.5 rounded-full bg-zinc-500/40 blur-[1px] animate-pulse delay-700" style={{transform: 'translateZ(-20px)'}}></div>

<div className="absolute top-0 left-0 right-0 h-24 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm p-4 flex items-center gap-4 transition-transform duration-500 ease-out group-hover:translate-y-[-10px]" style={{transform: 'translateZ(-60px) translateY(-20px) scale(0.9)'}}>
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shadow-inner">
<svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1.5">
<div className="h-2 w-16 bg-zinc-700/50 rounded-full"></div>
<span className="text-[10px] text-zinc-600 font-mono">10:00 AM</span>
</div>
<div className="h-1.5 w-24 bg-zinc-800/50 rounded-full"></div>
</div>
</div>

<div className="absolute top-24 left-0 right-0 h-24 rounded-2xl bg-zinc-900/60 border border-white/10 backdrop-blur-md p-4 flex items-center gap-4 transition-transform duration-500 ease-out group-hover:translate-y-[-5px]" style={{transform: 'translateZ(-30px) translateY(-10px) scale(0.95)'}}>
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-zinc-200 font-bold text-[10px] shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    1 PM
                 </div>
<div className="flex-1">
<div className="text-xs text-zinc-300 font-medium mb-1 tracking-tight">Design Review</div>
<div className="flex items-center gap-2">
<div className="flex -space-x-1.5">
<div className="w-4 h-4 rounded-full bg-zinc-700 border border-zinc-800"></div>
<div className="w-4 h-4 rounded-full bg-zinc-600 border border-zinc-800"></div>
</div>
<span className="text-[10px] text-zinc-500">Video Link</span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-48 rounded-2xl bg-[#0F0F11] border border-white/10 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)] p-5 flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,1)] group/card" style={{transform: 'translateZ(20px)'}}>

<div className="flex justify-between items-start">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-100 shadow-[0_0_8px_rgba(255,255,255,0.4)]"></span>
</span>
<span className="text-[10px] font-bold tracking-widest text-zinc-100 uppercase">Now Live</span>
</div>
<div className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-zinc-400 font-mono tracking-wide">00:42:15</div>
</div>

<div className="space-y-1.5 z-10">
<h3 className="text-lg font-medium text-white tracking-tight leading-snug">Q4 Roadmap Sync</h3>
<p className="text-xs text-zinc-500 flex items-center gap-1.5">
<svg className="w-3 h-3 text-zinc-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        All Hands · Main Hall
                    </p>
</div>

<div className="flex justify-between items-center pt-2 border-t border-white/5">
<div className="flex -space-x-2.5">
<div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] overflow-hidden bg-zinc-800 ring-1 ring-white/10 relative z-30">
<img alt="User" className="w-full h-full object-cover opacity-90 grayscale" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=64&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] overflow-hidden bg-zinc-800 ring-1 ring-white/10 relative z-20">
<img alt="User" className="w-full h-full object-cover opacity-90 grayscale" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=64&amp;q=80"/>
</div>
<div className="w-8 h-8 rounded-full border-2 border-[#0F0F11] bg-zinc-800 text-zinc-300 text-[9px] flex items-center justify-center font-bold ring-1 ring-white/10 relative z-10">
                            +12
                        </div>
</div>
<button className="group/btn relative w-8 h-8 rounded-full bg-white text-black flex items-center justify-center overflow-hidden transition-transform active:scale-95">
<div className="absolute inset-0 bg-zinc-200 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
<svg className="w-4 h-4 relative z-10 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</button>
</div>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
<div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-2xl rounded-full pointer-events-none"></div>
</div>

<div className="absolute inset-0 pointer-events-none" style={{transform: 'translateZ(-10px)'}}>
<div className="absolute top-[42%] left-8 w-[1px] h-10 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-[32%] right-8 w-[1px] h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
</div>
<div className="absolute top-8 left-8">
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Unified Events</h3>
<p className="text-xs text-neutral-500 font-medium">Shared calendars across your organization.</p>
</div>
</div>
</div>
</div>
</section>

<div className="relative w-full z-10 pointer-events-none" id="reveal-spacer" style={{height: '1305px'}}></div>

<div className="fixed inset-0 w-full h-full z-0 pointer-events-auto overflow-hidden invisible" id="stacked-reveal-wrapper" style={{visibility: 'visible'}}>
<div className="w-full relative will-change-transform" id="stacked-content" style={{transform: 'translate3d(0px, -333px, 0px)'}}>
<section className="relative flex flex-col items-center justify-center w-full py-24 bg-[#FAFAFA] text-neutral-900 overflow-hidden" id="team">

<div className="max-w-7xl w-full mb-20 space-y-6 text-center" data-speed="0.95">
<div className="reveal-element inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-neutral-200 is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-900"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-600">We are hiring</span>
</div>
<h2 className="reveal-element text-4xl sm:text-6xl font-medium tracking-tight text-neutral-900 is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                Meet the team
            </h2>
<p className="reveal-element text-xl text-neutral-500 max-w-2xl mx-auto font-normal leading-relaxed is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
                The creative minds building the future of finance. A diverse group of thinkers, makers, and doers.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">

<div className="card-3d-wrapper h-[420px] w-full cursor-pointer group reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="card-3d relative h-full w-full rounded-[1.5rem] bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden border border-neutral-200" style={{transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 20px 40px -15px'}}>

<div className="gloss-overlay absolute inset-0 z-20 opacity-50"></div>

<div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>

<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neutral-100 blur-3xl z-0 opacity-60"></div>

<div className="relative z-30 flex justify-between items-start transform translate-z-10">
<div className="rounded-full bg-neutral-50 p-3 border border-neutral-100 shadow-sm">
<svg className="lucide lucide-layers text-neutral-900 h-5 w-5 stroke-[1.5] stroke-1.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="flex gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
</div>
</div>

<div className="relative z-30 flex flex-col items-center mt-4">
<div className="relative rounded-full p-1 bg-gradient-to-b from-neutral-100 to-transparent avatar-float transition-transform duration-500 group-hover:scale-105">
<div className="relative h-28 w-28 rounded-full border-[3px] border-white overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] bg-white">
<img alt="Mufidul" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
</div>

<div className="relative z-30 space-y-2 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
<div className="flex items-center justify-between border-t border-neutral-100 pt-6">
<div className="">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Mufidul</h3>
<p className="text-sm font-medium text-neutral-500">Design Lead</p>
</div>
<div className="rounded-full bg-neutral-900 text-white p-2 shadow-lg hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-up-right h-4 w-4 stroke-[1.5] stroke-1.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper h-[420px] w-full cursor-pointer group reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="card-3d relative h-full w-full rounded-[1.5rem] bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden border border-neutral-200" style={{transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 20px 40px -15px'}}>
<div className="gloss-overlay absolute inset-0 z-20 opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>
<div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-50 blur-3xl z-0 opacity-40"></div>
<div className="relative z-30 flex justify-between items-start transform translate-z-10">
<div className="rounded-full bg-neutral-50 p-3 border border-neutral-100 shadow-sm">
<svg className="lucide lucide-code-2 text-neutral-900 h-5 w-5 stroke-[1.5] stroke-1.5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="flex gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
</div>
</div>
<div className="relative z-30 flex flex-col items-center mt-4">
<div className="relative rounded-full p-1 bg-gradient-to-b from-neutral-100 to-transparent avatar-float transition-transform duration-500 group-hover:scale-105" style={{animationDelay: '1s'}}>
<div className="relative h-28 w-28 rounded-full border-[3px] border-white overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] bg-white">
<img alt="Sarah" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
</div>
<div className="relative z-30 space-y-2 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
<div className="flex items-center justify-between border-t border-neutral-100 pt-6">
<div className="">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Sarah</h3>
<p className="text-sm font-medium text-neutral-500">Engineering</p>
</div>
<div className="rounded-full bg-neutral-900 text-white p-2 shadow-lg hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-up-right h-4 w-4 stroke-[1.5] stroke-1.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper h-[420px] w-full cursor-pointer group reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="card-3d relative h-full w-full rounded-[1.5rem] bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden border border-neutral-200" style={{transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)', boxShadow: 'rgba(0, 0, 0, 0.06) 0px 20px 40px -15px'}}>
<div className="gloss-overlay absolute inset-0 z-20 opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>
<div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-emerald-50 blur-3xl z-0 opacity-40"></div>
<div className="relative z-30 flex justify-between items-start transform translate-z-10">
<div className="rounded-full bg-neutral-50 p-3 border border-neutral-100 shadow-sm">
<svg className="lucide lucide-bar-chart-3 text-neutral-900 h-5 w-5 stroke-[1.5] stroke-1.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="flex gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
</div>
</div>
<div className="relative z-30 flex flex-col items-center mt-4">
<div className="relative rounded-full p-1 bg-gradient-to-b from-neutral-100 to-transparent avatar-float transition-transform duration-500 group-hover:scale-105" style={{animationDelay: '2s'}}>
<div className="relative h-28 w-28 rounded-full border-[3px] border-white overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] bg-white">
<img alt="Michael" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
</div>
<div className="relative z-30 space-y-2 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
<div className="flex items-center justify-between border-t border-neutral-100 pt-6">
<div className="">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Michael</h3>
<p className="text-sm font-medium text-neutral-500">Product</p>
</div>
<div className="rounded-full bg-neutral-900 text-white p-2 shadow-lg hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-up-right h-4 w-4 stroke-[1.5] stroke-1.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="card-3d-wrapper h-[420px] w-full cursor-pointer group reveal-element is-visible" style={{transition: 'none', opacity: '1', transform: 'none'}}>
<div className="card-3d relative h-full w-full rounded-[1.5rem] bg-white p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden border border-neutral-200">
<div className="gloss-overlay absolute inset-0 z-20 opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-white to-neutral-50 z-0"></div>
<div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-purple-50 blur-3xl z-0 opacity-40"></div>
<div className="relative z-30 flex justify-between items-start transform translate-z-10">
<div className="rounded-full bg-neutral-50 p-3 border border-neutral-100 shadow-sm">
<svg className="lucide lucide-zap text-neutral-900 h-5 w-5 stroke-[1.5] stroke-1.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="flex gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
<div className="h-1.5 w-1.5 rounded-full bg-neutral-200"></div>
</div>
</div>
<div className="relative z-30 flex flex-col items-center mt-4">
<div className="relative rounded-full p-1 bg-gradient-to-b from-neutral-100 to-transparent avatar-float transition-transform duration-500 group-hover:scale-105" style={{animationDelay: '0.5s'}}>
<div className="relative h-28 w-28 rounded-full border-[3px] border-white overflow-hidden shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] bg-white">
<img alt="Jessica" className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
</div>
</div>
<div className="relative z-30 space-y-2 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
<div className="flex items-center justify-between border-t border-neutral-100 pt-6">
<div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Jessica</h3>
<p className="text-sm font-medium text-neutral-500">Marketing</p>
</div>
<div className="rounded-full bg-neutral-900 text-white p-2 shadow-lg hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-arrow-up-right h-4 w-4 stroke-[1.5] stroke-1.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative flex flex-col justify-between w-full min-h-[25vh] overflow-hidden bg-zinc-100 text-zinc-900" id="contact">

<div className="absolute inset-0 pointer-events-none opacity-60" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #ffffff 0%, #f4f4f5 100%)'}}></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlNGU0ZTciLz4KPC9zdmc+')] opacity-20 pointer-events-none mix-blend-multiply"></div>

<div className="flex flex-col flex-1 lg:px-8 w-full z-10 pt-12 pr-6 pb-12 pl-6 relative items-center justify-center">

<div className="mb-16 text-center space-y-2">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border rounded-full bg-white/50 border-white/50 shadow-[inset_0_1px_4px_rgba(0,0,0,0.05)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
<span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">System Ready</span>
</div>
<h2 className="text-6xl font-bold tracking-tighter text-zinc-900 md:text-8xl mix-blend-darken">
                Let's Build.
            </h2>
<p className="text-lg font-medium tracking-wide text-zinc-400 uppercase">
                Initialize your next sequence
            </p>
</div>
</div>

<div className="relative z-10 w-full border-t bg-white/40 backdrop-blur-md border-white/20">
<div className="flex flex-col items-center justify-between max-w-6xl px-6 py-6 mx-auto md:flex-row gap-4">
<div className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
                © 2024 Znyth Labs
            </div>
<div className="flex gap-8">
<a className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase hover:text-zinc-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[25vw] font-bold leading-none tracking-tighter text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.05)] opacity-80" style={{WebkitTextStroke: '1px rgba(0,0,0,0.03)'}}>ZNYTH</h1>
</div>
</footer>
</div>
</div>




    </>
  );
}
