import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



tailwind.config = {
theme: {
extend: {
colors: {
bg: '#080808',
sec1: '#0B0B0B',
sec2: '#0D0D0D',
sec3: '#0F0F0F',
sec4: '#0A0A0A',
sec5: '#060606',
card: '#0F0F0F',
cardRaised: '#141414',
txt: '#E8E8E8',
sub: '#9CA3AF',
mut: '#555555',
dim: '#3A3A3A',
accent: '#39FF14'
},
fontFamily: {
display: ['"Space Grotesk"', 'sans-serif'],
body: ['"Geist"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
},
animation: {
'marquee': 'marquee 54s linear infinite',
'pulse-slow': 'pulseOpacity 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 2.4s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
pulseOpacity: {
'0%, 100%': { opacity: '0.6' },
'50%': { opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {

            /* --- 01. LOADER & REVEAL INITIALIZATION --- */
            const loader = document.getElementById('loader');
            const counter = document.getElementById('loader-counter');
            let count = 0;
            
            const countInterval = setInterval(() => {
                count += Math.floor(Math.random() * 8) + 2;
                if (count >= 100) {
                    count = 100;
                    clearInterval(countInterval);
                    counter.innerText = count.toString().padStart(3, '0');
                    
                    setTimeout(() => {
                        loader.style.transform = 'translateY(-100%)';
                        setTimeout(() => {
                            document.querySelector('.logo-mark').classList.add('loaded');
                            initScrollReveals();
                            initHeroUnderline();
                        }, 400);
                    }, 500);
                } else {
                    counter.innerText = count.toString().padStart(3, '0');
                }
            }, 30);

            function initHeroUnderline() {
                const underline = document.querySelector('.hero-underline');
                if (underline) {
                    setTimeout(() => {
                        underline.style.transform = 'scaleX(1)';
                    }, 800);
                }
            }

            /* --- 02. SCRAMBLE TEXT EFFECT --- */
            class TextScramble {
                constructor(el) {
                    this.el = el;
                    this.chars = '!<>-_\\\\/[]{}—=+*^?#_';
                    this.update = this.update.bind(this);
                }
                setText(newText) {
                    const oldText = this.el.innerText;
                    const length = Math.max(oldText.length, newText.length);
                    const promise = new Promise((resolve) => this.resolve = resolve);
                    this.queue = [];
                    for (let i = 0; i < length; i++) {
                        const from = oldText[i] || '';
                        const to = newText[i] || '';
                        const start = Math.floor(Math.random() * 20);
                        const end = start + Math.floor(Math.random() * 20);
                        this.queue.push({ from, to, start, end });
                    }
                    cancelAnimationFrame(this.frameRequest);
                    this.frame = 0;
                    this.update();
                    return promise;
                }
                update() {
                    let output = '';
                    let complete = 0;
                    for (let i = 0, n = this.queue.length; i < n; i++) {
                        let { from, to, start, end, char } = this.queue[i];
                        if (this.frame >= end) {
                            complete++;
                            output += to;
                        } else if (this.frame >= start) {
                            if (!char || Math.random() < 0.28) {
                                char = this.randomChar();
                                this.queue[i].char = char;
                            }
                            output += `<span class="text-sub/50">${char}</span>`;
                        } else {
                            output += from;
                        }
                    }
                    this.el.innerHTML = output;
                    if (complete === this.queue.length) {
                        this.resolve();
                    } else {
                        this.frameRequest = requestAnimationFrame(this.update);
                        this.frame++;
                    }
                }
                randomChar() {
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                }
            }

            document.querySelectorAll('.scramble-link').forEach(link => {
                const fx = new TextScramble(link);
                let text = link.getAttribute('data-text');
                let isAnimating = false;
                
                link.addEventListener('mouseenter', () => {
                    if (isAnimating) return;
                    isAnimating = true;
                    fx.setText(text).then(() => { isAnimating = false; });
                });
            });

            /* --- 03. NAVIGATION & MOBILE MENU --- */
            const nav = document.getElementById('main-nav');
            const mobileToggle = document.getElementById('mobile-toggle');
            const mobileNav = document.getElementById('mobile-nav');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('bg-bg/90', 'backdrop-blur-md', 'scrolled');
                } else {
                    nav.classList.remove('bg-bg/90', 'backdrop-blur-md', 'scrolled');
                }
            });

            mobileToggle.addEventListener('click', () => {
                mobileToggle.classList.toggle('menu-open');
                mobileNav.classList.toggle('open');
                mobileNav.classList.toggle('pointer-events-none');
                
                if (mobileNav.classList.contains('open')) {
                    mobileLinks.forEach((link, idx) => {
                        setTimeout(() => {
                            link.style.opacity = '1';
                            link.style.transform = 'translateY(0)';
                            link.style.transition = 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
                        }, 200 + (idx * 100));
                    });
                } else {
                    mobileLinks.forEach(link => {
                        link.style.opacity = '0';
                        link.style.transform = 'translateY(1.5rem)';
                        link.style.transition = 'none';
                    });
                }
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileToggle.click();
                });
            });

            /* --- 04. SCROLL OBSERVER & TEXT SPLITTING --- */
            function wrapTextNodes(el) {
                const text = el.innerText;
                el.innerHTML = '';
                const words = text.split(' ');
                words.forEach((word, idx) => {
                    const wrap = document.createElement('span');
                    wrap.className = 'word-reveal-wrap';
                    const inner = document.createElement('span');
                    inner.className = 'word-reveal-inner';
                    inner.innerHTML = word + (idx < words.length - 1 ? '&nbsp;' : '');
                    inner.style.transitionDelay = `${idx * 0.04}s`;
                    wrap.appendChild(inner);
                    el.appendChild(wrap);
                });
            }

            document.querySelectorAll('.reveal-text').forEach(el => {
                if(!el.querySelector('.italic')) { // Skip hero title which has complex inner HTML
                    wrapTextNodes(el);
                }
            });

            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        
                        // Handle numbers counting
                        if (entry.target.classList.contains('count-target') && !entry.target.dataset.counted) {
                            entry.target.dataset.counted = 'true';
                            animateValue(entry.target);
                        }
                    }
                });
            }, observerOptions);

            function initScrollReveals() {
                document.querySelectorAll('.fade-up, .reveal-text, .count-target').forEach(el => {
                    observer.observe(el);
                });
            }

            /* --- 05. NUMBER COUNTERS --- */
            function animateValue(obj) {
                const target = parseFloat(obj.getAttribute('data-val'));
                const format = obj.getAttribute('data-format');
                const duration = 2000;
                let startTimestamp = null;
                
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const easeProgress = 1 - Math.pow(1 - progress, 4); // Quartic ease out
                    
                    let current = easeProgress * target;
                    
                    if (format === 'int' || format === 'pct') {
                        current = Math.floor(current);
                        obj.innerHTML = current + (format === 'pct' ? '%' : '');
                    } else if (format === 'curr') {
                        obj.innerHTML = '$' + current.toFixed(1) + 'B';
                    } else if (format === 'ratio') {
                        obj.innerHTML = current.toFixed(1) + ' : 1';
                    } else {
                        obj.innerHTML = current.toFixed(1);
                    }
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        // Ensure final exact value
                        if (format === 'int' || format === 'pct') obj.innerHTML = target + (format === 'pct' ? '%' : '');
                        else if (format === 'curr') obj.innerHTML = '$' + target.toFixed(1) + 'B';
                        else if (format === 'ratio') obj.innerHTML = target.toFixed(1) + ' : 1';
                    }
                };
                window.requestAnimationFrame(step);
            }

            /* --- 06. INTERACTIVE FRAMEWORK TABS --- */
            const fwData = [
                { num: '01', title: 'Constraint Extraction', desc: 'Isolating the false axioms currently assumed to be structural laws within the organization. We interview the top twenty leaders individually to map the collective delusion, identifying constraints that are cultural rather than physical.' },
                { num: '02', title: 'Counterfactual Calibration', desc: 'Modeling the adjacent possible. If the primary constraint was removed tomorrow, what breaks? We build the financial and operational model of the organization operating without its defining limitation.' },
                { num: '03', title: 'The Axiomatic Reversal', desc: 'Formulating the direct opposite of the prevailing strategic assumption. We require the executive team to argue forcefully for this reversal in a controlled environment to break institutional lock-in.' },
                { num: '04', title: 'Adversarial Red-Teaming', desc: 'Subjecting the new axiom to systematic destruction. We employ external domain experts whose sole objective is to prove the new thesis mathematically or operationally impossible within the given time horizon.' },
                { num: '05', title: 'Operational Topography', desc: 'Mapping the exact sequence of dependencies required to execute the shift. We do not provide abstract goals; we provide the rigid, 18-month sequence of 43 binary decisions required.' },
                { num: '06', title: 'Synthesis & Condensation', desc: 'Reduction of the entire engagement into a maximum of seven pages. If the strategy cannot be consumed and understood by a newly hired director in fifteen minutes, it is not a strategy.' },
                { num: '07', title: 'Binary Commitment', desc: 'The final staging. The board and executive team are presented with a binary choice: sign the memo and execute the 43 decisions without modification, or reject it entirely. No hybrid approaches.' }
            ];

            const fwNav = document.getElementById('framework-nav');
            const fwPanel = document.getElementById('framework-panel');
            let activeFwIdx = 0;

            function renderFramework() {
                // Render Nav
                fwNav.innerHTML = fwData.map((item, idx) => `
                    <button class="fw-btn flex flex-col text-left py-4 px-5 border-l-2 ${idx === activeFwIdx ? 'border-accent bg-accent/5' : 'border-white/5 hover:border-white/20'} transition-all min-w-[14rem] lg:min-w-0" data-idx="${idx}">
                        <span class="font-mono text-[0.625rem] ${idx === activeFwIdx ? 'text-accent' : 'text-mut'} uppercase mb-1 transition-colors">STEP ${item.num}</span>
                        <span class="font-mono text-[0.8125rem] ${idx === activeFwIdx ? 'text-txt' : 'text-sub'} transition-colors">${item.title}</span>
                    </button>
                `).join('');

                // Render Panel
                const item = fwData[activeFwIdx];
                fwPanel.innerHTML = `
                    <div>
                        <div class="font-mono text-[6rem] text-dim leading-none tracking-tighter opacity-30 select-none">${item.num}</div>
                        <h3 class="font-display font-medium text-[2rem] text-txt mt-6 leading-[1.1]">${item.title}</h3>
                        <p class="font-body text-[1.0625rem] text-sub leading-[1.6] mt-4 max-w-[48ch]">${item.desc}</p>
                    </div>
                    <div class="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                        <span class="font-mono text-[0.656rem] text-mut uppercase">AXIOM METHODOLOGY</span>
                        <div class="flex gap-1">
                            ${fwData.map((_, i) => `<div class="w-8 h-1 rounded-full ${i === activeFwIdx ? 'bg-accent' : 'bg-white/10'} transition-colors"></div>`).join('')}
                        </div>
                    </div>
                `;

                // Add Listeners
                document.querySelectorAll('.fw-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const idx = parseInt(e.currentTarget.getAttribute('data-idx'));
                        if (idx !== activeFwIdx) {
                            activeFwIdx = idx;
                            
                            // Animate out
                            fwPanel.style.opacity = '0';
                            fwPanel.style.transform = 'translateY(10px)';
                            
                            setTimeout(() => {
                                renderFramework();
                                // Animate in
                                fwPanel.style.opacity = '1';
                                fwPanel.style.transform = 'translateY(0)';
                            }, 200);
                        }
                    });
                });
            }
            // Init transitions
            fwPanel.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            renderFramework();

            /* --- 07. CASE WORK ACCORDION --- */
            const caseData = [
                { client: 'HELIO CAPITAL', industry: 'Private Equity', duration: '9 Mo', val: '$1.2B', desc: 'Restructured core capital allocation thesis across three distinct funds. Reversed the prevailing assumption that high-velocity M&A was the primary value driver, shifting focus to organic operational density. Passed all 6-month falsifiability checks.' },
                { client: 'KORU HEALTH', industry: 'Digital Health', duration: '12 Mo', val: '$840M', desc: 'Contracted go-to-market motion from fourteen distinct buyer personas down to two. Eliminated $14M in marketing spend supporting dead-end funnels. Achieved partial pass on implementation velocity, but full pass on strategic direction.' },
                { client: 'VERMILLION', industry: 'Defense Tech', duration: '11 Mo', val: '$2.4B', desc: 'Complete distribution restructure. Advised shift from direct government procurement to prime contractor integration model. Resulted in timeline compression from 48 to 14 months for full deployment.' },
                { client: 'CRUCIBLE AI', industry: 'Machine Learning', duration: '14 Mo', val: '$4.1B', desc: 'Category definition engagement. Prevented client from competing in commoditized foundational model space. Engineered the pivot to industry-specific reinforcement learning feedback loops. 100% pass rate on review.' }
            ];

            const caseAcc = document.getElementById('case-accordion');
            caseAcc.innerHTML = caseData.map((item, idx) => `
                <div class="case-row border-b border-white/10 cursor-pointer bg-sec2 hover:bg-[#121212] transition-colors" data-idx="${idx}">
                    <div class="min-h-[6rem] py-4 px-2 md:px-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex items-center gap-6">
                            <span class="font-mono text-[0.75rem] text-mut w-6">${String(idx + 1).padStart(2, '0')}</span>
                            <span class="font-display font-medium text-[1.5rem] tracking-tight text-txt">${item.client}</span>
                        </div>
                        <div class="flex items-center gap-6 md:gap-12">
                            <div class="hidden sm:flex flex-col md:text-right">
                                <span class="font-mono text-[0.625rem] text-mut uppercase mb-1">Industry</span>
                                <span class="font-mono text-[0.8125rem] text-sub">${item.industry}</span>
                            </div>
                            <div class="flex flex-col md:text-right">
                                <span class="font-mono text-[0.625rem] text-mut uppercase mb-1">Value Unlocked</span>
                                <span class="font-mono text-[0.8125rem] text-accent">${item.val}</span>
                            </div>
                            <iconify-icon icon="solar:alt-arrow-down-linear" class="case-chevron text-mut text-xl ml-4"></iconify-icon>
                        </div>
                    </div>
                    <div class="case-content bg-[#0D0D0D]">
                        <div class="case-inner">
                            <div class="pb-8 pt-4 px-2 md:pl-[3.5rem] md:pr-12 grid grid-cols-1 md:grid-cols-[1fr_200px] gap-8 border-t border-white/5">
                                <p class="font-body text-[0.9375rem] text-sub leading-[1.6] max-w-[64ch]">${item.desc}</p>
                                <div class="flex flex-col gap-4 border-l border-white/10 pl-6">
                                    <div>
                                        <div class="font-mono text-[0.625rem] text-mut uppercase mb-1">Engagement Length</div>
                                        <div class="font-mono text-[0.8125rem] text-txt">${item.duration}</div>
                                    </div>
                                    <button class="font-mono text-[0.6875rem] text-accent hover:text-white transition-colors text-left uppercase flex items-center gap-2 mt-auto">
                                        View Redacted Memo <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');

            document.querySelectorAll('.case-row').forEach(row => {
                row.addEventListener('click', () => {
                    const isActive = row.classList.contains('active');
                    document.querySelectorAll('.case-row').forEach(r => r.classList.remove('active'));
                    if (!isActive) row.classList.add('active');
                });
            });

            /* --- 08. FAQ ACCORDION --- */
            const faqData = [
                { q: 'Why strictly 90 days?', a: 'Because strategy expands to fill the time allotted. Organizations use strategy phases as an excuse to delay difficult operational decisions. 90 days is the minimum time required to synthesize the truth, and the maximum time allowed before entropy sets in.' },
                { q: 'Do you assist with implementation?', a: 'No. The McKinsey model of pairing strategy with endless implementation retainers creates a perverse incentive to recommend complex, unworkable strategies. We deliver the blueprint; your operating team builds the house. If they cannot, you have an executive talent problem, not a strategy problem.' },
                { q: 'Do you take equity in lieu of cash?', a: 'Occasionally, for Series C or D organizations where we have immense conviction in the founders. However, our baseline protocol requires cash compensation to ensure the board feels the immediate friction and weight of the engagement.' },
                { q: 'What happens if we fail the 6-month review?', a: 'The review is public on our ledger (redacted for non-public clients). A failure means the axiom we established was either incorrect, or your team failed to execute the binary decisions required. We document the autopsy. We do not hide our misses.' },
                { q: 'Why is your capacity capped at 23 engagements?', a: 'Because there are only three principals, and we refuse to leverage associate-level analysts to do senior-level synthesis. We scale our pricing based on demand, not our headcount.' },
                { q: 'Can we hire a single principal for advisory?', a: 'No. The framework requires adversarial red-teaming. Charles, Ilyana, and Dag must all sign the final memo. Without internal friction among the partners, the resulting strategy will be fragile.' }
            ];

            const faqAcc = document.getElementById('faq-accordion');
            faqAcc.innerHTML = faqData.map((item, idx) => `
                <div class="faq-row border-b border-white/10 group cursor-pointer" data-idx="${idx}">
                    <div class="py-6 flex items-start gap-4 md:gap-8 relative">
                        <div class="faq-q-line absolute top-0 left-0 w-full h-[1px] bg-accent/30 z-10"></div>
                        <div class="w-6 h-6 flex-shrink-0 mt-1 relative flex items-center justify-center">
                            <div class="w-[14px] h-[2px] bg-sub"></div>
                            <div class="w-[2px] h-[14px] bg-sub absolute faq-plus"></div>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-display text-[1.125rem] text-txt group-hover:text-accent transition-colors">${item.q}</h4>
                            <div class="faq-content">
                                <div class="faq-inner">
                                    <p class="font-body text-[0.9375rem] text-sub leading-[1.6] pt-4 pb-2 pr-4 md:pr-12">${item.a}</p>
                                </div>
                            </div>
                        </div>
                        <div class="absolute top-0 right-0 w-[2px] h-full bg-accent/0 group-hover:bg-accent/20 transition-colors hidden md:block">
                            <div class="w-full h-full bg-accent faq-line"></div>
                        </div>
                    </div>
                </div>
            `).join('');

            document.querySelectorAll('.faq-row').forEach(row => {
                row.addEventListener('click', () => {
                    const isActive = row.classList.contains('active');
                    document.querySelectorAll('.faq-row').forEach(r => r.classList.remove('active'));
                    if (!isActive) row.classList.add('active');
                });
            });

            /* --- 09. MOUSE TRACKING EFFECTS (Spotlight, 3D Tilt, Magnetic Principals) --- */
            
            // Stakes Spotlight
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // 3D Tilt Cards (Process)
            document.querySelectorAll('.tilt-card').forEach(card => {
                const content = card.querySelector('.tilt-content');
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    content.style.transform = `translateZ(30px)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
                    content.style.transform = `translateZ(0px)`;
                });
            });

            // Magnetic Grid (Principals)
            document.querySelectorAll('.principal-card').forEach(card => {
                const img = card.querySelector('.card-img');
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    
                    card.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
                    img.style.transform = `scale(1.1) translate(${x * -15}px, ${y * -15}px)`;
                    img.style.filter = `grayscale(0) contrast(1.1) brightness(1)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `translate(0px, 0px)`;
                    img.style.transform = `scale(1) translate(0px, 0px)`;
                    img.style.filter = `grayscale(1) contrast(1.08) brightness(0.85)`;
                });
            });

            /* --- 10. SCROLL EFFECTS (Process Line) --- */
            const processLine = document.getElementById('process-line');
            if (processLine) {
                window.addEventListener('scroll', () => {
                    const rect = processLine.getBoundingClientRect();
                    const viewHeight = window.innerHeight;
                    if (rect.top < viewHeight && rect.bottom > 0) {
                        const scrollPercent = 1 - Math.max(0, rect.top / viewHeight);
                        processLine.style.strokeDashoffset = `${100 - (scrollPercent * 100)}%`;
                    }
                });
            }

            // Back to Top
            document.getElementById('back-to-top').addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            /* --- 11. CANVAS HEXAGONAL NETWORK (Hero Background) --- */
            const canvas = document.getElementById('hero-canvas');
            if (canvas) {
                const ctx = canvas.getContext('2d');
                let width, height;
                let nodes = [];
                const maxDistance = 150;
                
                function resize() {
                    width = canvas.width = window.innerWidth;
                    height = canvas.height = window.innerHeight;
                    initNodes();
                }

                class Node {
                    constructor() {
                        this.x = Math.random() * width;
                        this.y = Math.random() * height;
                        this.vx = (Math.random() - 0.5) * 0.4;
                        this.vy = (Math.random() - 0.5) * 0.4;
                        this.radius = Math.random() * 1.5 + 0.5;
                    }
                    update() {
                        this.x += this.vx;
                        this.y += this.vy;
                        if (this.x < 0 || this.x > width) this.vx *= -1;
                        if (this.y < 0 || this.y > height) this.vy *= -1;
                    }
                    draw() {
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                        ctx.fillStyle = 'rgba(57, 255, 20, 0.3)';
                        ctx.fill();
                    }
                }

                function initNodes() {
                    nodes = [];
                    const numNodes = Math.floor((width * height) / 25000); // Responsive density
                    for (let i = 0; i < numNodes; i++) {
                        nodes.push(new Node());
                    }
                }

                function drawNetwork() {
                    ctx.clearRect(0, 0, width, height);
                    
                    for (let i = 0; i < nodes.length; i++) {
                        nodes[i].update();
                        nodes[i].draw();
                        
                        for (let j = i + 1; j < nodes.length; j++) {
                            const dx = nodes[i].x - nodes[j].x;
                            const dy = nodes[i].y - nodes[j].y;
                            const distance = Math.sqrt(dx * dx + dy * dy);
                            
                            if (distance < maxDistance) {
                                const opacity = 1 - (distance / maxDistance);
                                ctx.beginPath();
                                ctx.moveTo(nodes[i].x, nodes[i].y);
                                ctx.lineTo(nodes[j].x, nodes[j].y);
                                ctx.strokeStyle = `rgba(57, 255, 20, ${opacity * 0.15})`;
                                ctx.lineWidth = 0.5;
                                ctx.stroke();
                            }
                        }
                    }
                    requestAnimationFrame(drawNetwork);
                }

                window.addEventListener('resize', resize);
                resize();
                drawNetwork();
            }

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>
<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<div className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.83,0,0.17,1)]" id="loader">
<div className="font-mono text-[clamp(3.25rem,9vw,6.75rem)] text-txt" id="loader-counter">000</div>
<div className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.18em] mt-2">LOADING AXIOM.FRAMEWORK</div>
</div>

<nav className="fixed top-0 left-0 w-full h-[4rem] z-50 transition-all duration-300 flex justify-between items-center px-[clamp(1.5rem,4vw,3.5rem)]" id="main-nav">

<a aria-label="Axiom Home" className="logo-wrap flex items-center justify-center w-[1.75rem] h-[1.75rem] relative group" href="#">
<svg className="logo-mark w-full h-full text-[#F5F5F5]" fill="none" viewbox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">

<path className="bracket bracket-tl" d="M 12.5 4 L 5 4 C 2.239 4 0 6.239 0 9 L 0 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path className="bracket bracket-br" d="M 27.5 28 L 35 28 C 37.761 28 40 25.761 40 23 L 40 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>

<polygon className="inner-shape fill-current" points="11,24 16,9 19,9 14,24" style={{transitionDelay: '0.1s'}}></polygon>
<polygon className="inner-shape fill-current" points="26,24 21,9 24,9 29,24" style={{transitionDelay: '0.16s'}}></polygon>
<rect className="inner-shape crossbar fill-current" height="2.5" style={{transitionDelay: '0.22s'}} width="12" x="14" y="17"></rect>
</svg>
</a>

<div className="hidden md:flex gap-[2.5rem]">
<a className="scramble-link font-mono text-[0.8125rem] tracking-[0.04em] text-sub transition-colors" data-text="Thesis" href="#thesis">Thesis</a>
<a className="scramble-link font-mono text-[0.8125rem] tracking-[0.04em] text-sub transition-colors" data-text="Case Work" href="#case-work">Case Work</a>
<a className="scramble-link font-mono text-[0.8125rem] tracking-[0.04em] text-sub transition-colors" data-text="Framework" href="#framework">Framework</a>
<a className="scramble-link font-mono text-[0.8125rem] tracking-[0.04em] text-sub transition-colors" data-text="Principals" href="#principals">Principals</a>
</div>

<a className="hidden md:flex relative items-center justify-center h-[2.5rem] px-[1.5rem] group" href="#cta">
<span className="absolute inset-0 border-[2px] border-accent/0 pointer-events-none">
<span className="absolute top-0 left-0 w-[0.625rem] h-[2px] bg-accent group-hover:translate-x-[5px] group-hover:translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute top-0 left-0 w-[2px] h-[0.625rem] bg-accent group-hover:translate-x-[5px] group-hover:translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute top-0 right-0 w-[0.625rem] h-[2px] bg-accent group-hover:-translate-x-[5px] group-hover:translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute top-0 right-0 w-[2px] h-[0.625rem] bg-accent group-hover:-translate-x-[5px] group-hover:translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute bottom-0 left-0 w-[0.625rem] h-[2px] bg-accent group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute bottom-0 left-0 w-[2px] h-[0.625rem] bg-accent group-hover:translate-x-[5px] group-hover:-translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute bottom-0 right-0 w-[0.625rem] h-[2px] bg-accent group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
<span className="absolute bottom-0 right-0 w-[2px] h-[0.625rem] bg-accent group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-transform duration-300 ease-[spring(200,18)]"></span>
</span>
<span className="font-mono text-[0.8125rem] font-medium uppercase text-accent group-hover:text-white transition-colors duration-200">Open Dialogue</span>
<div className="absolute inset-0 shadow-[0_0_22px_4px_rgba(57,255,20,0)] group-hover:shadow-[0_0_22px_4px_rgba(57,255,20,0.35)] transition-shadow duration-300"></div>
</a>

<button aria-label="Toggle Menu" className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60]" id="mobile-toggle">
<span className="hamburger-line hl-1 w-[1.5rem] h-[2px] bg-txt mb-[0.375rem] rounded-full"></span>
<span className="hamburger-line hl-2 w-[1.5rem] h-[2px] bg-txt rounded-full"></span>
</button>
</nav>

<div className="mobile-menu fixed inset-0 bg-bg z-[55] flex flex-col items-center justify-center space-y-8 pointer-events-none opacity-0" id="mobile-nav">
<a className="mobile-link font-display font-medium text-[clamp(2.25rem,7vw,3.5rem)] text-txt opacity-0 translate-y-6" href="#thesis">Thesis</a>
<a className="mobile-link font-display font-medium text-[clamp(2.25rem,7vw,3.5rem)] text-txt opacity-0 translate-y-6" href="#case-work">Case Work</a>
<a className="mobile-link font-display font-medium text-[clamp(2.25rem,7vw,3.5rem)] text-txt opacity-0 translate-y-6" href="#framework">Framework</a>
<a className="mobile-link font-display font-medium text-[clamp(2.25rem,7vw,3.5rem)] text-txt opacity-0 translate-y-6" href="#principals">Principals</a>
</div>

<section className="relative min-h-[100dvh] pt-[8rem] pb-[3.5rem] px-[clamp(1.25rem,5vw,6rem)] grid grid-rows-[1fr_auto_auto] overflow-hidden bg-bg z-10 isolate">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(20,20,20,0.8)_0%,rgba(8,8,8,0)_60%)] -z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_85%_80%,rgba(57,255,20,0.06)_0%,rgba(57,255,20,0)_60%)] -z-10"></div>
<canvas className="absolute inset-0 w-full h-full -z-10 hidden md:block" id="hero-canvas"></canvas>
<div className="absolute top-[72%] left-0 w-full h-[1px] bg-white/5 -z-10"></div>

<div className="absolute inset-0 md:hidden -z-10" style={{background: 'radial-gradient(ellipse 60% 40% at 20% 30%, rgba(57,255,20,0.05) 0%, rgba(8,8,8,0) 60%), radial-gradient(circle 18px at 20% 20%, rgba(255,255,255,0.04) 0%, transparent 70%), radial-gradient(circle 14px at 62% 74%, rgba(57,255,20,0.12) 0%, transparent 70%)', backgroundSize: '100% 100%, 3.25rem 2.8125rem, 3.25rem 2.8125rem'}}></div>

<div className="absolute top-[8rem] left-[clamp(1.25rem,5vw,6rem)] flex items-center border border-accent/40 rounded-full px-[0.875rem] py-[0.3125rem] bg-accent/5">
<div className="w-[6px] h-[6px] bg-accent rounded-[1px] mr-2"></div>
<span className="font-mono text-[0.656rem] text-txt uppercase tracking-[0.18em]">AXIOM.01 / STRATEGIC ADVISORY</span>
</div>

<div className="self-start mt-[4rem] md:mt-[6rem] relative z-10 w-full max-w-[100rem]">
<h1 className="hero-title font-display font-medium text-[clamp(3rem,11vw,10.5rem)] leading-[0.94] tracking-[-0.048em] text-txt md:-mr-[8vw]">

                Strategy reduced<br/>to <span className="italic text-accent relative inline-block">first principles.<span className="absolute -bottom-[0.75rem] left-0 h-[3px] bg-accent transition-all duration-[0.9s] ease-[cubic-bezier(0.22,1,0.36,1)] w-0 w-full origin-left scale-x-0 hero-underline"></span></span>
</h1>
<p className="fade-up mt-[1.5rem] font-body text-[1.125rem] text-sub max-w-[62ch] leading-[1.55]">
                We advise operating teams at Series C through public markets. Seven frameworks. Twelve months. Forty-three board decisions.
            </p>
<div className="fade-up mt-[2.5rem] flex flex-col md:flex-row gap-[0.75rem] items-start md:items-baseline">
<a className="btn-primary clip-notched h-[3rem] px-[1.75rem] bg-accent flex items-center justify-center font-mono text-[0.843rem] font-medium uppercase tracking-[0.06em] text-bg" href="#cta">
<span>Request a Memo</span>
<svg className="svg-border" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 0 0 L calc(100% - 10px) 0 L 100% 10px L 100% 100% L 10px 100% L 0 calc(100% - 10px) Z"></path>
</svg>
</a>
<a className="btn-secondary px-[2px] pt-[0.625rem] pb-[0.5rem] font-mono text-[0.843rem] font-medium uppercase tracking-[0.06em] text-txt md:ml-[1.25rem]" href="#thesis">
                    Read The Thesis
                </a>
</div>
</div>

<div className="self-end w-full border-t border-white/5 pt-[1.75rem] mt-[4.5rem] md:mt-[4.5rem]">
<div className="grid grid-cols-2 md:flex justify-between items-baseline gap-y-[1.5rem] gap-x-[2rem]">
<div className="flex flex-col">
<span className="font-mono text-[0.656rem] uppercase tracking-[0.15em] text-mut">Engagements Delivered</span>
<span className="font-display font-medium text-[clamp(1.375rem,2.4vw,2.25rem)] tracking-[-0.02em] text-txt mt-1 count-target" data-format="int" data-val="147">0</span>
</div>
<div className="flex flex-col">
<span className="font-mono text-[0.656rem] uppercase tracking-[0.15em] text-mut">Aggregate Enterprise Value</span>
<span className="font-display font-medium text-[clamp(1.375rem,2.4vw,2.25rem)] tracking-[-0.02em] text-txt mt-1 count-target" data-format="curr" data-val="14.2">0</span>
</div>
<div className="flex flex-col">
<span className="font-mono text-[0.656rem] uppercase tracking-[0.15em] text-mut">Average Engagement Depth</span>
<span className="font-display font-medium text-[clamp(1.375rem,2.4vw,2.25rem)] tracking-[-0.02em] text-txt mt-1">11.4 months</span>
</div>
<div className="flex flex-col">
<span className="font-mono text-[0.656rem] uppercase tracking-[0.15em] text-mut">Principal Partner Ratio</span>
<span className="font-display font-medium text-[clamp(1.375rem,2.4vw,2.25rem)] tracking-[-0.02em] text-txt mt-1 count-target" data-format="ratio" data-val="2.3">1 : 0</span>
</div>
<div className="flex flex-col">
<span className="font-mono text-[0.656rem] uppercase tracking-[0.15em] text-mut">Retention At 36 Months</span>
<span className="font-display font-medium text-[clamp(1.375rem,2.4vw,2.25rem)] tracking-[-0.02em] text-txt mt-1 count-target" data-format="pct" data-val="84">0</span>
</div>
</div>
</div>

<div className="absolute bottom-[2rem] right-[clamp(1.5rem,5vw,6rem)] hidden md:flex flex-col items-center">
<span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-mut mb-2">SCROLL / 01 OF 11</span>
<div className="w-[1px] h-[3rem] bg-accent/20 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-accent origin-top animate-[scaleY_1.8s_cubic-bezier(0.4,0,0.2,1)_infinite]"></div>
</div>
</div>
<style>
            @keyframes scaleY { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 50.1% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
        </style>
</section>

<section className="bg-sec1 py-[1.5rem] border-y border-white/5 relative overflow-hidden h-[5.5rem] flex items-center group">
<div className="absolute top-[0.5rem] left-[clamp(1.25rem,5vw,6rem)] z-10">
<span className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em]">/ CLIENTS SUBJECT TO NDA. NAMES REDACTED.</span>
</div>
<div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused] mt-4" style={{maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)'}}>

<div className="flex items-center whitespace-nowrap px-[1.5rem]">
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">HELIO CAPITAL</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">KORU HEALTH</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">VERMILLION</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">ASTRA STATES</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">PARAGON OPS</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">CRUCIBLE AI</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">MERIDIAN GROUP</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">OUTPOST ENERGY</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">SABLE DEFENSE</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">NORTHWIND FUND IV</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
</div>
<div aria-hidden="true" className="flex items-center whitespace-nowrap px-[1.5rem]">
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">HELIO CAPITAL</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">KORU HEALTH</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">VERMILLION</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">ASTRA STATES</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">PARAGON OPS</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">CRUCIBLE AI</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">MERIDIAN GROUP</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">OUTPOST ENERGY</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">SABLE DEFENSE</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
<span className="font-mono text-[0.875rem] font-medium uppercase tracking-[0.12em] text-white/40">NORTHWIND FUND IV</span><div className="w-1 h-1 bg-white/20 mx-[3rem]"></div>
</div>
</div>
</section>

<section className="bg-sec2 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)]" id="thesis">

<div className="absolute top-[2rem] left-[2rem] w-2 h-2 border-t border-l border-white/10 hidden md:block"></div>
<div className="absolute bottom-[2rem] right-[2rem] w-2 h-2 border-b border-r border-white/10 hidden md:block"></div>
<div className="max-w-[1400px] mx-auto">

<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.02 / DIAGNOSIS</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.75rem,5vw,4.75rem)] tracking-[-0.035em] text-txt max-w-[18ch] leading-[1.05]">
                Strategy decks compound entropy.
            </h2>
<p className="fade-up mt-[2.625rem] font-body text-[1.125rem] text-sub max-w-[64ch] leading-[1.55]">
                Most engagements produce 120-slide artifacts that no one re-reads. We produce the three decisions that change the next eighteen months.
            </p>

<div className="mt-[5rem] w-full border-t border-white/10">

<div className="problem-row fade-up border-b border-white/10 relative cursor-default bg-sec2 hover:bg-[#121212]">
<div className="min-h-[7.5rem] py-6 px-2 md:px-0 grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr_11.25rem] gap-4 md:gap-8 items-center">
<div className="font-mono font-medium text-[clamp(2rem,3vw,3rem)] text-dim leading-none">01</div>
<div className="font-display font-medium text-[1.375rem] text-txt">The McKinsey Trap</div>
<div className="font-body text-[0.9375rem] text-sub leading-[1.6] max-w-[36ch]">Generic playbooks. Delivered by analysts who will never operate what they advise.</div>
<div className="md:text-right flex flex-col md:items-end">
<span className="font-mono font-medium text-[clamp(1.125rem,1.8vw,1.375rem)] text-txt">73% of decks discarded</span>
<span className="font-mono text-[0.625rem] text-mut mt-1">WITHIN 90 DAYS</span>
</div>
</div>

<div className="problem-row-content">
<div className="problem-row-inner pt-2 pb-8 px-2 md:px-0 flex flex-col justify-end min-h-[4rem]">
<div className="font-mono text-[0.75rem] text-sub md:pl-[5rem]">
                                SOURCE: HBR 2023 AUDIT <span className="text-mut mx-2">/</span> N=284 FIRMS <span className="text-mut mx-2">/</span> CONFIDENCE 0.94
                            </div>
</div>
</div>
<div className="accent-bar absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out z-10"></div>
</div>

<div className="problem-row fade-up border-b border-white/10 relative cursor-default bg-sec2 hover:bg-[#121212]" style={{transitionDelay: '120ms'}}>
<div className="min-h-[7.5rem] py-6 px-2 md:px-0 grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr_11.25rem] gap-4 md:gap-8 items-center">
<div className="font-mono font-medium text-[clamp(2rem,3vw,3rem)] text-dim leading-none">02</div>
<div className="font-display font-medium text-[1.375rem] text-txt">The Boutique Paradox</div>
<div className="font-body text-[0.9375rem] text-sub leading-[1.6] max-w-[36ch]">Specialized firms too small to pressure-test recommendations beyond a single vertical.</div>
<div className="md:text-right flex flex-col md:items-end">
<span className="font-mono font-medium text-[clamp(1.125rem,1.8vw,1.375rem)] text-txt">$2.1M avg. rework cost</span>
<span className="font-mono text-[0.625rem] text-mut mt-1">PER ENGAGEMENT</span>
</div>
</div>

<div className="problem-row-content">
<div className="problem-row-inner pt-2 pb-8 px-2 md:px-0 flex flex-col justify-end min-h-[4rem]">
<div className="font-mono text-[0.75rem] text-sub md:pl-[5rem]">
                                INTERNAL DELPHI STUDY <span className="text-mut mx-2">/</span> 2022–2024 <span className="text-mut mx-2">/</span> 47 ENGAGEMENTS
                            </div>
</div>
</div>
<div className="accent-bar absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out z-10"></div>
</div>

<div className="problem-row fade-up border-b border-white/10 relative cursor-default bg-sec2 hover:bg-[#121212]" style={{transitionDelay: '240ms'}}>
<div className="min-h-[7.5rem] py-6 px-2 md:px-0 grid grid-cols-1 md:grid-cols-[5rem_1fr_1fr_11.25rem] gap-4 md:gap-8 items-center">
<div className="font-mono font-medium text-[clamp(2rem,3vw,3rem)] text-dim leading-none">03</div>
<div className="font-display font-medium text-[1.375rem] text-txt">The Internal Ceiling</div>
<div className="font-body text-[0.9375rem] text-sub leading-[1.6] max-w-[36ch]">Executive teams lack the pattern-recognition density that sixty comparable engagements build.</div>
<div className="md:text-right flex flex-col md:items-end">
<span className="font-mono font-medium text-[clamp(1.125rem,1.8vw,1.375rem)] text-txt">11.4 quarters</span>
<span className="font-mono text-[0.625rem] text-mut mt-1">MEDIAN DECISION LAG</span>
</div>
</div>

<div className="problem-row-content">
<div className="problem-row-inner pt-2 pb-8 px-2 md:px-0 flex flex-col justify-end min-h-[4rem]">
<div className="font-mono text-[0.75rem] text-sub md:pl-[5rem]">
                                PRIVATE CLIENT BASELINE <span className="text-mut mx-2">/</span> PRE-AXIOM COHORT
                            </div>
</div>
</div>
<div className="accent-bar absolute bottom-0 left-0 w-full h-[1px] bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out z-10"></div>
</div>
</div>
</div>
</section>

<section className="bg-bg py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5" id="framework">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.03 / METHODOLOGY</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.75rem,5vw,4.75rem)] tracking-[-0.035em] text-txt leading-[1.05]">
                Seven axioms. Applied in order.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.125rem] text-sub max-w-[60ch] leading-[1.55]">
                Our proprietary framework. The same seven-step protocol we applied to close $14.2 billion in aggregate enterprise value since 2019.
            </p>

<div className="mt-[5.5rem] grid grid-cols-1 lg:grid-cols-[17.5rem_1fr] gap-[2rem] lg:gap-[4rem]">

<div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible hide-scrollbar pb-4 lg:pb-0 relative" id="framework-nav">

</div>

<div className="bg-card border border-white/5 rounded-[2px] p-[2.5rem] min-h-[27.5rem] relative flex flex-col justify-between" id="framework-panel">

</div>
</div>
</div>
</section>

<section className="bg-sec3 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.04 / STAKES</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.5rem,4.6vw,4.25rem)] tracking-[-0.03em] text-txt leading-[1.05]">
                Strategic debt compounds at 17% annually.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[60ch] leading-[1.55]">
                Every quarter the wrong axiom remains in place, compounding cost accrues on three balance sheets: capital, credibility, and time.
            </p>

<div className="mt-[4.5rem] grid grid-cols-1 md:grid-cols-3 gap-[1.25rem] lg:gap-[1.5rem]">

<div className="spotlight-card fade-up bg-cardRaised border border-white/5 rounded-[2px] p-[2rem] min-h-[25rem] flex flex-col transition-colors duration-300">
<div className="font-mono text-[0.656rem] uppercase text-mut tracking-[0.15em]">CATEGORY 01 / CAPITAL</div>
<div className="mt-[2rem] font-display font-medium text-[clamp(3.5rem,6vw,5.25rem)] tracking-[-0.04em] text-txt leading-none">$4.2B</div>
<div className="mt-4 font-body text-[0.906rem] text-sub leading-[1.6]">
                        Aggregate capital misallocated annually across Series C+ operating companies. Our engagements typically reveal 12–18% of capital is servicing an obsolete axiom.
                    </div>
<div className="mt-auto pt-8">
<div className="flex gap-[3px] h-[2px] w-full">
<div className="flex-1 bg-white/10"></div><div className="flex-1 bg-white/10"></div>
<div className="flex-1 bg-accent"></div><div className="flex-1 bg-white/10"></div>
<div className="flex-1 bg-accent"></div><div className="flex-1 bg-white/10"></div>
<div className="flex-1 bg-accent"></div>
</div>
<div className="mt-2 font-mono text-[0.625rem] text-mut">SEGMENTS HIGHLIGHTED = MISALLOCATION</div>
</div>
</div>

<div className="spotlight-card fade-up bg-cardRaised border border-white/5 rounded-[2px] p-[2rem] min-h-[25rem] flex flex-col transition-colors duration-300" style={{transitionDelay: '140ms'}}>
<div className="font-mono text-[0.656rem] uppercase text-mut tracking-[0.15em]">CATEGORY 02 / CREDIBILITY</div>
<div className="mt-[2rem] font-display font-medium text-[clamp(3.5rem,6vw,5.25rem)] tracking-[-0.04em] text-txt leading-none">11.4<span className="text-[clamp(1.5rem,2vw,2rem)] ml-2 align-baseline text-sub">qtrs</span></div>
<div className="mt-4 font-body text-[0.906rem] text-sub leading-[1.6]">
                        Average board-level credibility half-life after a single high-profile strategic miss. Recovery requires a minimum of one full product-market-fit reset.
                    </div>
<div className="mt-auto pt-8 flex items-end gap-4 relative h-12">
<div className="flex flex-col items-center absolute left-0 bottom-0">
<div className="w-10 h-10 rounded-full border border-txt/20 bg-txt/10 flex items-center justify-center relative"></div>
<span className="font-mono text-[0.625rem] mt-2 text-txt">PRE-MISS</span>
</div>
<div className="flex flex-col items-center absolute left-6 bottom-0">
<div className="w-7 h-7 rounded-full border border-txt/10 bg-bg z-10"></div>
<span className="font-mono text-[0.625rem] mt-2 text-sub relative z-10">POST-MISS</span>
</div>
</div>
</div>

<div className="spotlight-card fade-up bg-cardRaised border border-white/5 rounded-[2px] p-[2rem] min-h-[25rem] flex flex-col transition-colors duration-300" style={{transitionDelay: '280ms'}}>
<div className="font-mono text-[0.656rem] uppercase text-mut tracking-[0.15em]">CATEGORY 03 / TEMPORAL</div>
<div className="mt-[2rem] font-display font-medium text-[clamp(3.5rem,6vw,5.25rem)] tracking-[-0.04em] text-txt leading-none">18<span className="text-[clamp(1.5rem,2vw,2rem)] ml-2 align-baseline text-sub">mo</span></div>
<div className="mt-4 font-body text-[0.906rem] text-sub leading-[1.6]">
                        The cost of a wrong strategic axiom measured in lost market timing. In category-defining markets, this window closes permanently.
                    </div>
<div className="mt-auto pt-8">
<div className="relative w-full h-[3px] bg-white/10 rounded-full">
<div className="absolute top-0 left-0 h-full bg-accent rounded-full w-[62%]"></div>
<div className="absolute top-[-4px] left-[62%] w-[1px] h-[11px] bg-txt"></div>
</div>
<div className="mt-3 font-mono text-[0.625rem] text-mut uppercase">MARKET WINDOW CONSUMED AT AVG. ENGAGEMENT ARRIVAL / 62%</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-sec4 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5">
<div className="max-w-[1340px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.05 / LEDGER.LIVE</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.375rem,4.3vw,4rem)] tracking-[-0.028em] text-txt leading-[1.05]">
                Every engagement, scored against its own memo.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[58ch] leading-[1.55]">
                Six months after every delivered memo, we publish the falsifiability review. Here's the live ledger across the current cohort.
            </p>

<div className="dashboard-panel fade-up mt-[4.5rem] bg-card border border-white/10 rounded-[4px] overflow-hidden">

<div className="h-[3.25rem] bg-sec1 border-b border-white/5 px-[1.25rem] flex justify-between items-center overflow-x-auto hide-scrollbar">
<div className="flex items-center gap-4 flex-shrink-0">
<svg className="w-[1.125rem] h-[1.125rem] text-white" fill="none" viewbox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
<path d="M 12.5 4 L 5 4 C 2.239 4 0 6.239 0 9 L 0 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path d="M 27.5 28 L 35 28 C 37.761 28 40 25.761 40 23 L 40 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<polygon className="fill-current" points="11,24 16,9 19,9 14,24"></polygon>
<polygon className="fill-current" points="26,24 21,9 24,9 29,24"></polygon>
<rect className="fill-current" height="2.5" width="12" x="14" y="17"></rect>
</svg>
<span className="font-display font-medium text-[0.8125rem] tracking-[0.02em] text-txt">AXIOM LEDGER</span>
<div className="w-[6px] h-[6px] bg-accent rounded-full shadow-[0_0_8px_rgba(57,255,20,0.6)] animate-pulse-slow"></div>
</div>
<div className="flex items-center gap-[1.75rem] ml-8 flex-shrink-0">
<span className="font-mono text-[0.781rem] text-txt border-b-[2px] border-accent py-[0.875rem]">Cohort 2024</span>
<span className="font-mono text-[0.781rem] text-sub hover:text-txt cursor-pointer transition-colors py-[0.875rem]">Cohort 2023</span>
<span className="font-mono text-[0.781rem] text-sub hover:text-txt cursor-pointer transition-colors py-[0.875rem]">Cohort 2022</span>
<span className="font-mono text-[0.781rem] text-sub hover:text-txt cursor-pointer transition-colors py-[0.875rem]">All Time</span>
<div className="flex items-center gap-2 cursor-pointer group py-[0.875rem]">
<span className="font-mono text-[0.781rem] text-sub group-hover:text-txt transition-colors">Falsification Rate</span>
<span className="bg-accent/20 text-accent font-mono text-[0.625rem] px-[6px] py-[2px] rounded-full">3</span>
</div>
</div>
<div className="flex items-center gap-3 ml-auto pl-8 flex-shrink-0">
<div className="relative hidden sm:block">
<input className="w-[12.5rem] h-[2rem] bg-cardRaised border border-white/10 rounded-[4px] px-3 font-mono text-[0.75rem] text-txt placeholder:text-mut focus:outline-none focus:border-accent/50 transition-colors" placeholder="Search engagements..." type="text"/>
</div>
<div className="relative cursor-pointer w-[2rem] h-[2rem] flex items-center justify-center">
<iconify-icon icon="solar:bell-linear" style={{fontSize: '1.125rem', color: '#9CA3AF', strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute top-[4px] right-[4px] w-[6px] h-[6px] bg-accent rounded-full animate-pulse-slow"></div>
</div>
<div className="w-[2rem] h-[2rem] rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center font-mono text-[0.6875rem] font-medium text-txt cursor-pointer">CH</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-sec4 overflow-x-auto hide-scrollbar">

<div className="p-[1.25rem_1.5rem] border-r border-white/5 border-b sm:border-b-0 flex flex-col justify-between min-w-[15rem]">
<div className="font-mono text-[0.625rem] text-mut uppercase tracking-[0.15em]">ACTIVE ENGAGEMENTS</div>
<div className="font-display font-medium text-[2.25rem] tracking-[-0.02em] text-txt my-1">23</div>
<div className="flex items-center justify-between mt-1">
<span className="font-mono text-[0.718rem] text-accent">▲ +4 QoQ</span>
<svg className="overflow-visible" height="20" viewbox="0 0 64 20" width="64"><polyline fill="none" points="0,15 10,14 20,16 30,12 40,8 50,4 64,2" stroke="#39FF14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg>
</div>
</div>

<div className="p-[1.25rem_1.5rem] border-r border-white/5 border-b sm:border-b-0 flex flex-col justify-between min-w-[15rem]">
<div className="font-mono text-[0.625rem] text-mut uppercase tracking-[0.15em]">MEMOS DELIVERED Q4</div>
<div className="font-display font-medium text-[2.25rem] tracking-[-0.02em] text-txt my-1">17</div>
<div className="flex items-center justify-between mt-1">
<span className="font-mono text-[0.718rem] text-accent">▲ +3 QoQ</span>
<svg className="overflow-visible" height="20" viewbox="0 0 64 20" width="64"><polyline fill="none" points="0,18 10,15 20,16 30,12 40,10 50,7 64,5" stroke="#39FF14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg>
</div>
</div>

<div className="p-[1.25rem_1.5rem] border-r border-white/5 border-b lg:border-b-0 flex flex-col justify-between min-w-[15rem]">
<div className="font-mono text-[0.625rem] text-mut uppercase tracking-[0.15em]">PASS RATE (6MO REVIEW)</div>
<div className="font-display font-medium text-[2.25rem] tracking-[-0.02em] text-txt my-1">71.4%</div>
<div className="flex items-center justify-between mt-1">
<span className="font-mono text-[0.718rem] text-accent">▲ +2.8 pts</span>
<svg className="overflow-visible" height="20" viewbox="0 0 64 20" width="64"><polyline fill="none" points="0,10 10,12 20,10 30,10 40,11 50,9 64,6" stroke="#39FF14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg>
</div>
</div>

<div className="p-[1.25rem_1.5rem] flex flex-col justify-between min-w-[15rem]">
<div className="font-mono text-[0.625rem] text-mut uppercase tracking-[0.15em]">FALSIFICATION EVENTS</div>
<div className="font-display font-medium text-[2.25rem] tracking-[-0.02em] text-txt my-1">3</div>
<div className="flex items-center justify-between mt-1">
<span className="font-mono text-[0.718rem] text-[#10B981]">▼ -2 QoQ</span>
<svg className="overflow-visible" height="20" viewbox="0 0 64 20" width="64"><polyline fill="none" points="0,5 10,6 20,4 30,8 40,12 50,15 64,18" stroke="#10B981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline></svg>
</div>
</div>
</div>

<div className="p-[1.75rem_1.5rem] border-t border-white/5 bg-sec4 min-w-[700px] overflow-x-auto hide-scrollbar">
<div className="flex justify-between items-center mb-6">
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.12em]">ENGAGEMENT OUTCOMES BY QUARTER / 2024 YTD</span>
<div className="flex gap-4 font-mono text-[0.625rem] uppercase">
<div className="flex items-center gap-1"><div className="w-2 h-2 bg-accent"></div><span className="text-sub">PASS</span></div>
<div className="flex items-center gap-1"><div className="w-2 h-2 bg-accent/40"></div><span className="text-sub">PARTIAL PASS</span></div>
<div className="flex items-center gap-1"><div className="w-2 h-2 bg-mut"></div><span className="text-sub">FAIL</span></div>
</div>
</div>
<div className="flex flex-col gap-4">

<div className="flex items-center gap-4">
<span className="font-mono text-[0.6875rem] text-sub w-6">Q1</span>
<div className="flex-1 flex h-[1.75rem] rounded-sm overflow-hidden chart-bar relative cursor-pointer group">
<div className="bg-accent h-full transition-opacity hover:opacity-90" style={{width: '73%'}}></div>
<div className="bg-accent/40 h-full transition-opacity hover:opacity-90" style={{width: '18%'}}></div>
<div className="bg-mut h-full transition-opacity hover:opacity-90" style={{width: '9%'}}></div>
<div className="tooltip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] opacity-0 pointer-events-none bg-cardRaised border border-white/10 rounded-[3px] p-[8px_12px] font-mono text-[0.6875rem] text-txt whitespace-nowrap transition-all z-20 shadow-lg">Q1 PASS / N = 11 / RATE = 73%</div>
</div>
<span className="font-mono text-[0.6875rem] text-mut w-8 text-right">n=11</span>
</div>

<div className="flex items-center gap-4">
<span className="font-mono text-[0.6875rem] text-sub w-6">Q2</span>
<div className="flex-1 flex h-[1.75rem] rounded-sm overflow-hidden chart-bar relative cursor-pointer">
<div className="bg-accent h-full transition-opacity hover:opacity-90" style={{width: '69%'}}></div>
<div className="bg-accent/40 h-full transition-opacity hover:opacity-90" style={{width: '23%'}}></div>
<div className="bg-mut h-full transition-opacity hover:opacity-90" style={{width: '8%'}}></div>
<div className="tooltip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] opacity-0 pointer-events-none bg-cardRaised border border-white/10 rounded-[3px] p-[8px_12px] font-mono text-[0.6875rem] text-txt whitespace-nowrap transition-all z-20 shadow-lg">Q2 PASS / N = 13 / RATE = 69%</div>
</div>
<span className="font-mono text-[0.6875rem] text-mut w-8 text-right">n=13</span>
</div>

<div className="flex items-center gap-4">
<span className="font-mono text-[0.6875rem] text-sub w-6">Q3</span>
<div className="flex-1 flex h-[1.75rem] rounded-sm overflow-hidden chart-bar relative cursor-pointer">
<div className="bg-accent h-full transition-opacity hover:opacity-90" style={{width: '78%'}}></div>
<div className="bg-accent/40 h-full transition-opacity hover:opacity-90" style={{width: '15%'}}></div>
<div className="bg-mut h-full transition-opacity hover:opacity-90" style={{width: '7%'}}></div>
<div className="tooltip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] opacity-0 pointer-events-none bg-cardRaised border border-white/10 rounded-[3px] p-[8px_12px] font-mono text-[0.6875rem] text-txt whitespace-nowrap transition-all z-20 shadow-lg">Q3 PASS / N = 14 / RATE = 78%</div>
</div>
<span className="font-mono text-[0.6875rem] text-mut w-8 text-right">n=14</span>
</div>

<div className="flex items-center gap-4">
<span className="font-mono text-[0.6875rem] text-sub w-6">Q4</span>
<div className="flex-1 flex h-[1.75rem] rounded-sm overflow-hidden chart-bar relative cursor-pointer">
<div className="bg-accent h-full transition-opacity hover:opacity-90" style={{width: '71%'}}></div>
<div className="bg-accent/40 h-full transition-opacity hover:opacity-90" style={{width: '24%'}}></div>
<div className="bg-mut h-full transition-opacity hover:opacity-90" style={{width: '5%'}}></div>
<div className="tooltip absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[5px] opacity-0 pointer-events-none bg-cardRaised border border-white/10 rounded-[3px] p-[8px_12px] font-mono text-[0.6875rem] text-txt whitespace-nowrap transition-all z-20 shadow-lg">Q4 PASS / N = 17 / RATE = 71%</div>
</div>
<span className="font-mono text-[0.6875rem] text-mut w-8 text-right">n=17</span>
</div>
</div>
</div>

<div className="px-[1.5rem] pb-[1.5rem] overflow-x-auto hide-scrollbar">
<div className="min-w-[900px]">
<div className="grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.25rem] border-b border-white/10 items-center font-mono text-[0.625rem] uppercase text-mut tracking-[0.12em] px-2">
<div>ENGAGEMENT</div>
<div>AXIOM</div>
<div>COHORT</div>
<div>STATUS</div>
<div>SCORE</div>
<div>REVIEW DATE</div>
<div className="w-4"></div>
</div>

<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec4 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">HELIO CAPITAL</div><div className="text-sub truncate pr-4">Capital efficiency reset</div><div className="text-sub">Q1-2024</div><div className="text-txt flex items-center gap-2"><span className="text-accent">●</span> PASS</div><div className="text-sub">94.2</div><div className="text-sub">2024.07.18</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec2 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">KORU HEALTH</div><div className="text-sub truncate pr-4">Go-to-market contraction</div><div className="text-sub">Q1-2024</div><div className="text-txt flex items-center gap-2"><span className="text-accent/40">●</span> PARTIAL</div><div className="text-sub">68.1</div><div className="text-sub">2024.07.24</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>

<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-accent/5 hover:bg-cardRaised transition-colors cursor-pointer relative">
<div className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent"></div>
<div className="text-txt truncate pr-4">VERMILLION</div><div className="text-sub truncate pr-4">Distribution restructure</div><div className="text-sub">Q2-2024</div><div className="text-txt flex items-center gap-2"><span className="text-accent">●</span> PASS</div><div className="text-sub">88.9</div><div className="text-sub">2024.10.02</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec2 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">PARAGON OPS</div><div className="text-sub truncate pr-4">Org design reset</div><div className="text-sub">Q2-2024</div><div className="text-txt flex items-center gap-2"><span className="text-[#EF4444]">●</span> FAIL</div><div className="text-sub">41.7</div><div className="text-sub">2024.10.18</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec4 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">CRUCIBLE AI</div><div className="text-sub truncate pr-4">Category definition</div><div className="text-sub">Q2-2024</div><div className="text-txt flex items-center gap-2"><span className="text-accent">●</span> PASS</div><div className="text-sub">91.6</div><div className="text-sub">2024.10.29</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec2 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">MERIDIAN GROUP</div><div className="text-sub truncate pr-4">Acquisition thesis</div><div className="text-sub">Q3-2024</div><div className="text-txt flex items-center gap-2"><span className="text-accent">●</span> PASS</div><div className="text-sub">82.4</div><div className="text-sub">2025.01.11</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="group grid grid-cols-[1.5fr_2fr_1fr_1fr_0.8fr_1fr_auto] h-[2.75rem] items-center px-2 font-mono text-[0.781rem] bg-sec4 hover:bg-cardRaised transition-colors cursor-pointer">
<div className="text-txt truncate pr-4">ASTRA STATES</div><div className="text-sub truncate pr-4">International expansion</div><div className="text-sub">Q3-2024</div><div className="text-txt flex items-center gap-2"><span className="text-amber-500">○</span> PENDING</div><div className="text-sub">—</div><div className="text-sub">2025.01.24</div>
<iconify-icon className="text-mut opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="h-[2.25rem] bg-bg border-t border-white/5 px-[1.25rem] flex justify-between items-center relative z-10">
<div className="flex items-center gap-2">
<span className="font-mono text-[0.656rem] text-mut uppercase">LAST SYNC 2 MIN AGO</span>
<div className="w-[6px] h-[6px] bg-accent rounded-full animate-pulse-slow"></div>
</div>
<span className="font-mono text-[0.656rem] text-mut uppercase">LIVE / UPDATED EVERY 30s</span>
</div>
</div>
</div>
</section>

<section className="bg-sec2 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5" id="case-work">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.06 / CASE.WORK</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.5rem,4.5vw,4.25rem)] tracking-[-0.03em] text-txt leading-[1.05]">
                Four memos. Four decisions. Public permission granted.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[60ch] leading-[1.55]">
                The majority of our work is NDA-bound. These four clients waived confidentiality for the record.
            </p>

<div className="mt-[5rem] w-full border-t border-white/10" id="case-accordion">

</div>
</div>
</section>

<section className="bg-bg py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.07 / PROTOCOL</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.5rem,4.5vw,4.25rem)] tracking-[-0.03em] text-txt leading-[1.05]">
                Ninety days. Three phases. One memo.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[58ch] leading-[1.55]">
                Every engagement runs exactly 90 days from axiom establishment to memo delivery. No optionality, no extensions.
            </p>

<div className="mt-[5rem] relative isolate">

<div className="absolute top-[28px] md:top-[128px] left-0 w-full h-[1px] border-t border-dashed border-white/10 -z-10 hidden md:block" id="process-line" style={{strokeDasharray: '100%', strokeDashoffset: '100%'}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">

<div className="tilt-card fade-up perspective-[1200px] cursor-default">
<div className="tilt-content bg-card border border-white/5 rounded-[2px] p-[2.5rem_2rem] min-h-[23.75rem] flex flex-col relative z-10 transition-colors hover:border-white/10">
<div className="w-[3.5rem] h-[3.5rem] rounded-full bg-bg border-[2px] border-accent flex items-center justify-center font-display font-medium text-[1.375rem] text-accent mx-auto">1</div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.18em] mt-[1.5rem] text-center">PHASE 01 / DAYS 00–30</div>
<div className="font-display font-medium text-[1.625rem] tracking-[-0.02em] text-txt mt-2 text-center">Establish the axiom</div>
<div className="font-body text-[0.906rem] text-sub leading-[1.7] mt-[1.25rem] text-center">
                                Four-week immersion. Two principals on-site for a minimum of eight full-day sessions. Constraint mapping, counterfactual calibration, preliminary thesis formation.
                            </div>
<div className="mt-auto pt-8 flex flex-col gap-2">
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Axiom statement (1 page, signed)</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Constraint surface map</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Counterfactual baseline model</span></div>
</div>
</div>
</div>

<div className="tilt-card fade-up perspective-[1200px] cursor-default" style={{transitionDelay: '180ms'}}>
<div className="tilt-content bg-card border border-white/5 rounded-[2px] p-[2.5rem_2rem] min-h-[23.75rem] flex flex-col relative z-10 transition-colors hover:border-white/10">
<div className="w-[3.5rem] h-[3.5rem] rounded-full bg-bg border-[2px] border-accent flex items-center justify-center font-display font-medium text-[1.375rem] text-accent mx-auto">2</div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.18em] mt-[1.5rem] text-center">PHASE 02 / DAYS 31–70</div>
<div className="font-display font-medium text-[1.625rem] tracking-[-0.02em] text-txt mt-2 text-center">Pressure-test the thesis</div>
<div className="font-body text-[0.906rem] text-sub leading-[1.7] mt-[1.25rem] text-center">
                                Forty-day systematic attack on the axiom. Red-team reviews, adversarial scenario modeling, external expert adjudication. Thirty-seven percent of axioms fail here and the engagement concludes.
                            </div>
<div className="mt-auto pt-8 flex flex-col gap-2">
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Red-team adversarial report</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Monte Carlo scenario suite (n=10k)</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">External expert adjudication (3-5)</span></div>
</div>
</div>
</div>

<div className="tilt-card fade-up perspective-[1200px] cursor-default" style={{transitionDelay: '360ms'}}>
<div className="tilt-content bg-card border border-white/5 rounded-[2px] p-[2.5rem_2rem] min-h-[23.75rem] flex flex-col relative z-10 transition-colors hover:border-white/10">
<div className="w-[3.5rem] h-[3.5rem] rounded-full bg-bg border-[2px] border-accent flex items-center justify-center font-display font-medium text-[1.375rem] text-accent mx-auto">3</div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.18em] mt-[1.5rem] text-center">PHASE 03 / DAYS 71–90</div>
<div className="font-display font-medium text-[1.625rem] tracking-[-0.02em] text-txt mt-2 text-center">Stage the decision</div>
<div className="font-body text-[0.906rem] text-sub leading-[1.7] mt-[1.25rem] text-center">
                                Twenty-day memo composition. Seven pages, reviewed twice by the senior principal, signed. Final client session stages the binary commit-or-decline decision.
                            </div>
<div className="mt-auto pt-8 flex flex-col gap-2">
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Seven-page strategic memo</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Binary decision framework</span></div>
<div className="flex items-start gap-3"><div className="w-1 h-1 bg-accent mt-[6px] flex-shrink-0"></div><span className="font-mono text-[0.718rem] text-txt">Six-month pass/fail commitment</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-sec3 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5 overflow-hidden" id="principals">
<div className="max-w-[1400px] mx-auto">
<div className="flex items-center mb-[2.5rem]">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.08 / PRINCIPALS</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.375rem,4.3vw,4rem)] tracking-[-0.028em] text-txt leading-[1.05]">
                Three principals. Every memo signed by all three.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[60ch] leading-[1.55]">
                We refuse to scale into a classical consultancy. Three partners. Capacity capped at twenty-three simultaneous engagements.
            </p>

<div className="mt-[4.5rem] grid grid-cols-1 md:grid-cols-3 gap-[1.25rem] principal-grid relative">

<div className="principal-card fade-up bg-cardRaised border border-white/5 rounded-[2px] overflow-hidden aspect-[3/4] flex flex-col cursor-crosshair transform-gpu transition-transform duration-[0.35s] ease-out will-change-transform z-10">
<div className="flex-[1.4] relative overflow-hidden bg-bg">
<img alt="Charles Morant" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.85] transition-all duration-500 card-img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none"></div>
</div>
<div className="bg-cardRaised p-[1.5rem] flex flex-col justify-end border-t border-white/5 z-10 relative">
<div className="flex justify-between items-baseline">
<span className="font-display font-medium text-[1.375rem] tracking-[-0.018em] text-txt">Charles Morant</span>
<span className="font-mono text-[0.656rem] uppercase text-mut">PRINCIPAL.01</span>
</div>
<div className="font-body text-[0.875rem] text-sub italic mt-3 mb-4">Capital allocation, post-PMF restructuring</div>
<div className="font-mono text-[0.656rem] text-mut uppercase">
                            MEMOS: <span className="text-txt">47</span> <span className="mx-1">/</span> FIELD: <span className="text-txt">19 YRS</span> <span className="mx-1">/</span> REVIEW SCORE: <span className="text-txt">91.4</span>
</div>
</div>
</div>

<div className="principal-card fade-up bg-cardRaised border border-white/5 rounded-[2px] overflow-hidden aspect-[3/4] flex flex-col cursor-crosshair transform-gpu transition-transform duration-[0.35s] ease-out will-change-transform z-10" style={{transitionDelay: '100ms'}}>
<div className="flex-[1.4] relative overflow-hidden bg-bg">
<img alt="Ilyana Osei" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.85] transition-all duration-500 card-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none"></div>
</div>
<div className="bg-cardRaised p-[1.5rem] flex flex-col justify-end border-t border-white/5 z-10 relative">
<div className="flex justify-between items-baseline">
<span className="font-display font-medium text-[1.375rem] tracking-[-0.018em] text-txt">Ilyana Osei</span>
<span className="font-mono text-[0.656rem] uppercase text-mut">PRINCIPAL.02</span>
</div>
<div className="font-body text-[0.875rem] text-sub italic mt-3 mb-4">Category definition, go-to-market contraction</div>
<div className="font-mono text-[0.656rem] text-mut uppercase">
                            MEMOS: <span className="text-txt">62</span> <span className="mx-1">/</span> FIELD: <span className="text-txt">14 YRS</span> <span className="mx-1">/</span> REVIEW SCORE: <span className="text-txt">88.9</span>
</div>
</div>
</div>

<div className="principal-card fade-up bg-cardRaised border border-white/5 rounded-[2px] overflow-hidden aspect-[3/4] flex flex-col cursor-crosshair transform-gpu transition-transform duration-[0.35s] ease-out will-change-transform z-10" style={{transitionDelay: '200ms'}}>
<div className="flex-[1.4] relative overflow-hidden bg-bg">
<img alt="Dag Lindqvist" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-[1.08] brightness-[0.85] transition-all duration-500 card-img" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-accent/5 mix-blend-color pointer-events-none"></div>
</div>
<div className="bg-cardRaised p-[1.5rem] flex flex-col justify-end border-t border-white/5 z-10 relative">
<div className="flex justify-between items-baseline">
<span className="font-display font-medium text-[1.375rem] tracking-[-0.018em] text-txt">Dag Lindqvist</span>
<span className="font-mono text-[0.656rem] uppercase text-mut">PRINCIPAL.03</span>
</div>
<div className="font-body text-[0.875rem] text-sub italic mt-3 mb-4">Regulatory topology, cross-border M&amp;A</div>
<div className="font-mono text-[0.656rem] text-mut uppercase">
                            MEMOS: <span className="text-txt">38</span> <span className="mx-1">/</span> FIELD: <span className="text-txt">22 YRS</span> <span className="mx-1">/</span> REVIEW SCORE: <span className="text-txt">93.7</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-sec4 py-[8rem] relative z-10 px-[clamp(1.25rem,5vw,6rem)] border-t border-white/5">
<div className="max-w-[860px] mx-auto">
<div className="flex items-center mb-[2.5rem] justify-center md:justify-start">
<div className="w-[3px] h-[3px] bg-accent mr-2"></div>
<span className="font-mono text-[0.6875rem] text-mut uppercase tracking-[0.15em]">/ AXIOM.09 / OBJECTIONS</span>
</div>
<h2 className="reveal-text font-display font-medium text-[clamp(2.375rem,4.3vw,4rem)] tracking-[-0.028em] text-txt leading-[1.05] text-center md:text-left">
                Six questions we hear weekly.
            </h2>
<p className="fade-up mt-[1.5rem] font-body text-[1.0625rem] text-sub max-w-[58ch] leading-[1.55] text-center md:text-left mx-auto md:mx-0">
                The questions our prospective clients ask in the first 20 minutes. Our answers, in their declarative form.
            </p>
<div className="mt-[4.5rem] border-t border-white/10" id="faq-accordion">

</div>
</div>
</section>

<section className="bg-bg relative z-10 min-h-[62vh] flex flex-col justify-center items-center px-[1.5rem] py-[10rem] overflow-hidden" id="cta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
<span className="font-display font-medium text-[clamp(11.25rem,26vw,26.25rem)] tracking-[-0.06em] text-white/[0.022]">AXIOM</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_50%_40%_at_50%_60%,rgba(57,255,20,0.06)_0%,rgba(8,8,8,0)_60%)] pointer-events-none z-0"></div>
<div className="relative z-10 max-w-[56rem] mx-auto flex flex-col items-center text-center">
<div className="flex items-center border border-accent/40 rounded-full px-[0.875rem] py-[0.3125rem] bg-accent/5 fade-up">
<div className="w-[6px] h-[6px] bg-accent rounded-[1px] mr-2"></div>
<span className="font-mono text-[0.656rem] text-txt uppercase tracking-[0.18em]">AXIOM.FINAL / REQUEST PROTOCOL</span>
</div>
<h2 className="mt-[2rem] font-display font-medium text-[clamp(2.75rem,5.4vw,5.25rem)] tracking-[-0.04em] text-txt leading-[0.98] reveal-text">
                The memo begins with a 20-minute <span className="italic text-accent">conversation.</span>
</h2>
<p className="mt-[1.5rem] font-body text-[1.125rem] text-sub max-w-[56ch] leading-[1.55] fade-up delay-100">
                We publish one new engagement slot per quarter. Current waitlist: seven.
            </p>
<div className="mt-[3rem] flex flex-col md:flex-row gap-4 items-center justify-center fade-up delay-200">
<a className="btn-primary clip-notched h-[3rem] px-[1.75rem] bg-accent flex items-center justify-center font-mono text-[0.843rem] font-medium uppercase tracking-[0.06em] text-bg w-full md:w-auto" href="#">
<span>Request a Memo</span>
<svg className="svg-border" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 0 0 L calc(100% - 10px) 0 L 100% 10px L 100% 100% L 10px 100% L 0 calc(100% - 10px) Z"></path>
</svg>
</a>
<a className="btn-secondary px-[2px] pt-[0.625rem] pb-[0.5rem] font-mono text-[0.843rem] font-medium uppercase tracking-[0.06em] text-txt w-full md:w-auto mt-2 md:mt-0" href="#dashboard">
                    Open the Ledger
                </a>
</div>
<div className="mt-[3.5rem] font-mono text-[0.75rem] text-mut fade-up delay-300">
                Q1 2025 AVAILABILITY / <span className="text-accent">3</span> SLOTS REMAINING / AVG. RESPONSE TIME 2.3 DAYS
            </div>
</div>
</section>

<footer className="bg-sec5 border-t border-accent relative z-20">

<div className="pt-[4.5rem] px-[clamp(1.5rem,5vw,3.5rem)] relative overflow-hidden flex flex-col items-center group footer-wordmark cursor-default">
<div className="w-full flex justify-between absolute top-[4.5rem] left-0 px-[clamp(1.5rem,5vw,3.5rem)] z-10 pointer-events-none hidden md:flex">
<div className="flex flex-col items-start">
<div className="w-3 h-3 border-t border-l border-white/10 mb-2"></div>
<span className="font-mono text-[0.625rem] text-mut uppercase">AXIOM.MARK / v.03</span>
</div>
<div className="flex flex-col items-end">
<div className="w-3 h-3 border-t border-r border-white/10 mb-2"></div>
<span className="font-mono text-[0.625rem] text-mut uppercase text-right">COORDINATES / 52.37N 4.89E</span>
</div>
</div>

<div className="font-display font-medium text-[clamp(7.5rem,22vw,22.5rem)] tracking-[-0.055em] leading-[0.82] text-cardRaised w-full text-center relative z-0 flex justify-center uppercase pb-4">
<span className="footer-letter" style={{transitionDelay: '0ms'}}>A</span>
<span className="footer-letter" style={{transitionDelay: '60ms'}}>X</span>
<span className="footer-letter" style={{transitionDelay: '120ms'}}>I</span>
<span className="footer-letter" style={{transitionDelay: '180ms'}}>O</span>
<span className="footer-letter" style={{transitionDelay: '240ms'}}>M</span>
</div>
</div>

<div className="border-t border-white/5 pt-[5rem] pb-[3rem] px-[clamp(1.5rem,5vw,3.5rem)]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr] gap-[3rem] max-w-[1400px] mx-auto">
<div className="col-span-1 md:col-span-2 lg:col-span-1">
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em] mb-4">/ FIRST PRINCIPLE</div>
<p className="font-display text-[1rem] italic text-txt leading-[1.55] max-w-[28ch]">
                        "The memo is the unit of strategic work. Everything else is performance."
                    </p>
</div>
<div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em] mb-4">/ DISCIPLINE</div>
<div className="flex flex-col gap-2">
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Thesis" href="#">Thesis</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Case Work" href="#">Case Work</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Framework" href="#">Framework</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Falsifiability Ledger" href="#">Falsifiability Ledger</a>
</div>
</div>
<div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em] mb-4">/ PROTOCOL</div>
<div className="flex flex-col gap-2">
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="90-Day Process" href="#">90-Day Process</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Pricing Band" href="#">Pricing Band</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Engagement Terms" href="#">Engagement Terms</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Review Cycles" href="#">Review Cycles</a>
</div>
</div>
<div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em] mb-4">/ PRINCIPALS</div>
<div className="flex flex-col gap-2">
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Charles Morant" href="#">Charles Morant</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Ilyana Osei" href="#">Ilyana Osei</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Dag Lindqvist" href="#">Dag Lindqvist</a>
</div>
</div>
<div>
<div className="font-mono text-[0.656rem] text-mut uppercase tracking-[0.15em] mb-4">/ REACH</div>
<div className="flex flex-col gap-2">
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="New York / HQ" href="#">New York / HQ</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="London / EU" href="#">London / EU</a>
<a className="font-mono text-[0.781rem] text-txt scramble-link w-fit" data-text="Singapore / APAC" href="#">Singapore / APAC</a>
<a className="font-mono text-[0.781rem] text-accent mt-2 hover:text-white transition-colors w-fit group flex items-center gap-2" href="mailto:inquiries@axiom.com">
<span>inquiries@axiom.com</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 py-[1.5rem] px-[clamp(1.5rem,5vw,3.5rem)] flex flex-col md:flex-row justify-between items-center gap-4 bg-bg">
<div className="font-mono text-[0.625rem] text-mut uppercase tracking-[0.12em]">
                © 2025 AXIOM STRATEGY FRAMEWORK. ALL RIGHTS RESERVED.
            </div>
<div className="flex gap-6 font-mono text-[0.625rem] text-mut uppercase tracking-[0.12em]">
<a className="hover:text-txt transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-txt transition-colors" href="#">Terms of Service</a>
<a className="hover:text-txt transition-colors" href="#">NDA Protocol</a>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all" id="back-to-top">
<iconify-icon icon="solar:alt-arrow-up-linear"></iconify-icon>
</button>
</div>
</footer>



    </>
  );
}
