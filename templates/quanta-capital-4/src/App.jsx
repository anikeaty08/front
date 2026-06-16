import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Loader ---
            const loader = document.getElementById('page-loader');
            const loaderCount = document.getElementById('loader-count');
            
            if (!localStorage.getItem('quanta_visited')) {
                let count = 0;
                const interval = setInterval(() => {
                    count += 3;
                    if(count > 100) count = 100;
                    loaderCount.innerText = count.toString().padStart(3, '0');
                    if(count === 100) {
                        clearInterval(interval);
                        setTimeout(() => {
                            loader.style.opacity = '0';
                            setTimeout(() => { loader.style.display = 'none'; }, 320);
                            localStorage.setItem('quanta_visited', 'true');
                            initEntranceAnimations();
                        }, 400);
                    }
                }, 30);
            } else {
                loader.style.display = 'none';
                initEntranceAnimations();
            }

            // --- Nav Scroll ---
            const nav = document.getElementById('main-nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 80) {
                    nav.style.transform = 'translateX(-50%) scale(0.97)';
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.88)';
                    nav.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.4)';
                } else {
                    nav.style.transform = 'translateX(-50%) scale(1)';
                    nav.style.backgroundColor = 'rgba(10, 10, 10, 0.72)';
                    nav.style.boxShadow = 'none';
                }
            }, { passive: true });

            // --- Intersection Observers for Entrance ---
            function initEntranceAnimations() {
                const observerOptions = { root: null, threshold: 0.1, rootMargin: '-60px' };
                const observer = new IntersectionObserver((entries, obs) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('active');
                            if(entry.target.classList.contains('stat-num') || entry.target.classList.contains('stat-num-float')) {
                                animateValue(entry.target);
                            }
                            obs.unobserve(entry.target);
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.fade-up, .stat-num, .stat-num-float').forEach(el => observer.observe(el));
            }

            // --- Number Count Up ---
            function animateValue(obj) {
                const isFloat = obj.classList.contains('stat-num-float');
                const target = parseFloat(obj.getAttribute('data-target'));
                const duration = 2000;
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // easeOutCubic
                    const ease = 1 - Math.pow(1 - progress, 3);
                    const current = ease * target;
                    obj.innerHTML = isFloat ? current.toFixed(1) : Math.floor(current);
                    if (progress < 1) window.requestAnimationFrame(step);
                    else obj.innerHTML = isFloat ? target.toFixed(1) : target;
                };
                window.requestAnimationFrame(step);
            }

            // --- Spotlight Hover ---
            document.querySelectorAll('.spotlight-card').forEach(card => {
                card.addEventListener('mousemove', e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // --- Live Feed Simulator ---
            const feedData = [
                { time: '14:28:03', action: 'BUY', sym: 'NVDA', reason: 'momentum ensemble · 94% conviction', size: '+$142,000', conf: 94, c: 'bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/30' },
                { time: '14:27:41', action: 'SELL', sym: 'XOM', reason: 'mean reversion · 81% conviction', size: '-$88,400', conf: 81, c: 'bg-[#FF5C6C]/10 text-[#FF5C6C] border-[#FF5C6C]/30' },
                { time: '14:27:22', action: 'BUY', sym: 'ARM', reason: 'earnings drift · 89% conviction', size: '+$76,200', conf: 89, c: 'bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/30' },
                { time: '14:26:58', action: 'TRIM', sym: 'META', reason: 'volatility regime shift · 72%', size: '-$55,000', conf: 72, c: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' },
                { time: '14:26:41', action: 'BUY', sym: 'TSM', reason: 'supply-chain signal · 91%', size: '+$208,000', conf: 91, c: 'bg-[#00D4AA]/10 text-[#00D4AA] border-[#00D4AA]/30' },
                { time: '14:26:19', action: 'HOLD', sym: 'MSFT', reason: 'valuation neutral · 68%', size: '$0', conf: 68, c: 'bg-white/10 text-[#A0A0A0] border-white/20' }
            ];
            
            const feedList = document.getElementById('live-feed-list');
            const feedPanel = document.getElementById('feed-panel');
            const pausedIndicator = document.getElementById('feed-paused');
            let feedIndex = 0;
            let isFeedPaused = false;

            feedPanel.addEventListener('mouseenter', () => { isFeedPaused = true; pausedIndicator.style.opacity = '1'; });
            feedPanel.addEventListener('mouseleave', () => { isFeedPaused = false; pausedIndicator.style.opacity = '0'; });

            function createFeedRow(data) {
                const el = document.createElement('div');
                el.className = 'grid grid-cols-[70px_50px_1fr_60px] md:grid-cols-[80px_60px_100px_1fr_90px_110px_40px] items-center gap-2 p-3 border-b border-[rgba(255,255,255,0.03)] bg-[#0A0A0A] cursor-pointer hover:bg-[#111] transition-colors transform translate-y-4 opacity-0 transition-all duration-400 ease-out';
                el.innerHTML = `
                    <span class="font-['JetBrains_Mono'] text-[10px] md:text-[11px] text-[#6B6B6B]">${data.time}</span>
                    <span class="h-5 px-1.5 rounded flex items-center justify-center font-['JetBrains_Mono'] text-[9px] md:text-[10px] border ${data.c}">${data.action}</span>
                    <span class="font-['Space_Grotesk'] font-medium text-sm md:text-base text-[#F2F2F2]">${data.sym}</span>
                    <span class="hidden md:block font-['Inter'] text-[13px] text-[#A0A0A0] truncate">${data.reason}</span>
                    <span class="font-['JetBrains_Mono'] text-[11px] md:text-[12px] text-right text-[#A0A0A0]">${data.size}</span>
                    <div class="hidden md:flex items-center gap-2 justify-end w-full">
                        <div class="w-[50px] h-1 bg-white/10 rounded-full overflow-hidden"><div class="h-full bg-[#00D4AA]" style="width: ${data.conf}%"></div></div>
                        <span class="font-['JetBrains_Mono'] text-[10px] text-[#6B6B6B] w-6 text-right">${data.conf}%</span>
                    </div>
                    <div class="hidden md:flex justify-end text-[#6B6B6B]"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></div>
                `;
                return el;
            }

            // Initial populate
            for(let i=0; i<6; i++) {
                const row = createFeedRow(feedData[feedData.length - 1 - i]);
                row.style.transform = 'translateY(0)';
                row.style.opacity = '1';
                feedList.appendChild(row);
            }

            setInterval(() => {
                if(isFeedPaused) return;
                const data = feedData[feedIndex % feedData.length];
                const row = createFeedRow(data);
                feedList.insertBefore(row, feedList.firstChild);
                
                // Trigger animation
                requestAnimationFrame(() => {
                    row.style.transform = 'translateY(0)';
                    row.style.opacity = '1';
                });

                if(feedList.children.length > 8) {
                    feedList.removeChild(feedList.lastChild);
                }
                feedIndex++;
            }, 2800);

            // --- Easter Egg ---
            const brandText = document.querySelector('.scramble-text');
            const originalText = brandText.innerText;
            const chars = '!<>-_\\/[]{}—=+*^?#_';
            
            brandText.parentElement.addEventListener('mouseenter', () => {
                let iteration = 0;
                let interval = setInterval(() => {
                    brandText.innerText = originalText.split('').map((letter, index) => {
                        if(index < iteration) return originalText[index];
                        return chars[Math.floor(Math.random() * chars.length)]
                    }).join('');
                    if(iteration >= originalText.length) clearInterval(interval);
                    iteration += 1/3;
                }, 30);
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="noise-overlay"></div>

<div className="fixed inset-0 bg-[#080808] z-[9999] flex flex-col items-center justify-center transition-opacity duration-300" id="page-loader">
<div className="w-[320px] h-[2px] bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
<div className="h-full bg-[#00D4AA] loader-bar w-full"></div>
</div>
<div className="mt-5 font-['JetBrains_Mono'] text-xs tracking-[0.18em] text-[#6B6B6B] uppercase flex items-center gap-2">
            LOADING <span id="loader-count">000</span>
</div>
</div>

<nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] max-w-[960px] h-[54px] px-2 pl-5 bg-[#0A0A0A]/70 backdrop-blur-[20px] saturate-[140%] border border-[rgba(255,255,255,0.08)] rounded-full flex items-center justify-between transition-all duration-200" id="main-nav">
<a className="flex items-center gap-2.5 nav-logo-group" href="#">
<div className="logo-container loaded w-[26px] h-[26px]">
<svg className="w-full h-full text-[#F2F2F2]" viewbox="0 0 32 32">
<circle className="logo-outer" cx="16" cy="16" fill="none" r="13" stroke="currentColor" stroke-dasharray="63 82" stroke-dashoffset="21" strokeLinecap="round" strokeWidth="1.25"></circle>
<circle className="logo-inner" cx="16" cy="16" fill="none" r="7" stroke="currentColor" strokeWidth="2"></circle>
<rect className="logo-dot" fill="#00D4AA" height="3" rx="0.5" width="3" x="22" y="3"></rect>
</svg>
</div>
<span className="font-['Space_Grotesk'] font-semibold text-sm tracking-[-0.01em] text-[#F2F2F2]">Quanta</span>
</a>
<div className="hidden md:flex items-center gap-7">
<a className="font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white relative group transition-colors duration-200" href="#platform">Platform<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4AA] transition-all duration-200 group-hover:w-full"></span></a>
<a className="font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white relative group transition-colors duration-200" href="#research">Research<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4AA] transition-all duration-200 group-hover:w-full"></span></a>
<a className="font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white relative group transition-colors duration-200" href="#pricing">Pricing<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4AA] transition-all duration-200 group-hover:w-full"></span></a>
<a className="font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white relative group transition-colors duration-200" href="#company">Company<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4AA] transition-all duration-200 group-hover:w-full"></span></a>
<a className="font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white relative group transition-colors duration-200 flex items-center gap-1.5" href="#careers">Careers <span className="w-[18px] h-[18px] rounded-full bg-[#00D4AA] text-[#080808] text-xs flex items-center justify-center pt-[1px]">3</span><span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#00D4AA] transition-all duration-200 group-hover:w-full"></span></a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block font-['JetBrains_Mono'] text-sm font-medium text-white/60 hover:text-white underline-offset-4 hover:underline" href="#contact">Contact</a>
<button className="cta-primary h-[38px] px-5 bg-[#00D4AA] text-[#080808] font-['Space_Grotesk'] font-medium text-sm tracking-[0.01em] transition-all duration-200 flex items-center gap-1 group">
                Request Access
                <iconify-icon className="text-sm transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<button className="md:hidden w-6 h-6 flex flex-col items-center justify-center gap-[4px] text-[#F2F2F2]">
<span className="w-[18px] h-[1.5px] bg-current block"></span>
<span className="w-[18px] h-[1.5px] bg-current block"></span>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-[100dvh] pt-[140px] pb-20 px-4 md:px-6 lg:px-10 flex flex-col items-center text-center overflow-hidden border-b border-[rgba(255,255,255,0.05)]">

<div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_35%,rgba(0,212,170,0.055)_0%,transparent_65%)] pointer-events-none"></div>
<div className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,transparent_35%,transparent_65%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
<div className="absolute inset-0 z-[3] dot-pattern opacity-50 pointer-events-none hidden md:block animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_50%_30%,rgba(0,212,170,0.06)_0%,transparent_55%)] md:hidden pointer-events-none"></div>
<div className="absolute inset-0 z-[5] bg-[radial-gradient(ellipse_100%_100%_at_50%_50%,transparent_30%,rgba(0,0,0,0.5)_100%)] pointer-events-none"></div>
<div className="relative z-10 max-w-[1280px] w-full flex flex-col items-center">

<div className="fade-up inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] mb-9">
<span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] shadow-[0_0_8px_#00D4AA] animate-pulse"></span>
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-[#A0A0A0]">LIVE · 2,847 PORTFOLIOS UNDER AI MANAGEMENT</span>
</div>

<h1 className="max-w-[920px] font-['Space_Grotesk'] font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.96] tracking-[-0.035em] text-[#F2F2F2] flex flex-col items-center">
<div className="overflow-hidden"><span className="inline-block transform translate-y-full opacity-0 animate-word" style={{animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards'}}>Alpha,</span> <span className="inline-block transform translate-y-full opacity-0 animate-word" style={{animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.29s forwards'}}>engineered</span></div>
<div className="overflow-hidden"><span className="inline-block transform translate-y-full opacity-0 animate-word" style={{animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.38s forwards'}}>at</span> <span className="inline-block transform translate-y-full opacity-0 animate-word text-[#00D4AA]" style={{animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.47s forwards'}}>institutional</span> <span className="inline-block transform translate-y-full opacity-0 animate-word" style={{animation: 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.56s forwards'}}>scale.</span></div>
</h1>
<style>@keyframes slideUp { to { transform: translateY(0); opacity: 1; } }</style>

<p className="max-w-[620px] mt-6 mb-10 text-base md:text-lg text-[#A0A0A0] leading-[1.55] fade-up" style={{transitionDelay: '0.7s'}}>
                    Quanta runs 140+ machine-learning signals across global equities, fixed income, and private markets — so your capital compounds while your team builds the thesis.
                </p>

<div className="flex items-center gap-3 mb-14 fade-up" style={{transitionDelay: '0.8s'}}>
<button className="cta-primary h-[46px] px-[22px] bg-[#00D4AA] text-[#080808] font-['Space_Grotesk'] font-medium text-sm tracking-[0.01em] flex items-center gap-1.5 group">
                        Request Access
                        <iconify-icon className="text-sm transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
<button className="cta-secondary h-[46px] px-3.5 flex items-center z-10 group">
<span className="font-['Space_Grotesk'] font-medium text-sm text-[#F2F2F2] bracket-l">[</span>
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.2em] text-[#F2F2F2] mx-3 z-10 group-hover:text-white transition-colors">VIEW METHODOLOGY</span>
<span className="font-['Space_Grotesk'] font-medium text-sm text-[#F2F2F2] bracket-r">]</span>
</button>
</div>

<div className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.15em] text-[#6B6B6B] mb-14 flex flex-wrap justify-center gap-x-2 gap-y-4 fade-up" style={{transitionDelay: '0.9s'}}>
<span>$4.2B AUM TRACKED</span> <span>·</span> <span>14 QUANT RESEARCHERS</span> <span className="hidden md:inline">·</span> <span className="w-full md:w-auto text-center">SOC 2 TYPE II · INSTITUTIONAL-GRADE</span>
</div>

<div className="w-full max-w-[1100px] aspect-auto md:aspect-[16/9] rounded-[14px] bg-[#0E0E0E] border border-[rgba(255,255,255,0.08)] shadow-[0_60px_140px_rgba(0,0,0,0.7),inset_0_0_0_1px_rgba(0,212,170,0.04)] overflow-hidden relative fade-up flex flex-col" style={{transitionDelay: '1.1s', transitionDuration: '0.9s'}}>

<div className="h-12 bg-[#111111] border-b border-[rgba(255,255,255,0.06)] px-4 flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-[18px] h-[18px] opacity-80"><svg className="w-full h-full text-[#F2F2F2]" viewbox="0 0 32 32"><circle cx="16" cy="16" fill="none" r="13" stroke="currentColor" stroke-dasharray="63 82" stroke-dashoffset="21" strokeLinecap="round" strokeWidth="1.25"></circle><circle cx="16" cy="16" fill="none" r="7" stroke="currentColor" strokeWidth="2"></circle><rect fill="#00D4AA" height="3" rx="0.5" width="3" x="22" y="3"></rect></svg></div>
<div className="w-[1px] h-3.5 bg-[rgba(255,255,255,0.15)]"></div>
<span className="font-['JetBrains_Mono'] text-xs text-[#A0A0A0]">QUANTA / ALPHA CONSOLE</span>
</div>
<div className="hidden md:flex items-center gap-1">
<button className="px-3 py-1.5 rounded-md bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/30 font-['JetBrains_Mono'] text-xs uppercase tracking-wide">Overview</button>
<button className="px-3 py-1.5 rounded-md text-[#A0A0A0] hover:text-[#F2F2F2] font-['JetBrains_Mono'] text-xs uppercase tracking-wide transition-colors">Positions</button>
<button className="px-3 py-1.5 rounded-md text-[#A0A0A0] hover:text-[#F2F2F2] font-['JetBrains_Mono'] text-xs uppercase tracking-wide transition-colors">Signals</button>
<button className="px-3 py-1.5 rounded-md text-[#A0A0A0] hover:text-[#F2F2F2] font-['JetBrains_Mono'] text-xs uppercase tracking-wide transition-colors">Research</button>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center px-2 py-1 rounded bg-[rgba(255,255,255,0.05)] text-[#A0A0A0] font-['JetBrains_Mono'] text-xs"><iconify-icon className="mr-1" icon="solar:magnifer-linear"></iconify-icon> ⌘K</div>
<div className="relative text-[#A0A0A0] hover:text-white cursor-pointer"><iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon><span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00D4AA] rounded-full animate-pulse"></span></div>
<div className="w-[26px] h-[26px] rounded-full bg-[#1A1A1A] flex items-center justify-center font-['JetBrains_Mono'] text-[10px] text-[#A0A0A0] border border-[rgba(255,255,255,0.1)]">MK</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[rgba(255,255,255,0.06)] border-b border-[rgba(255,255,255,0.06)] shrink-0">
<div className="bg-[#0E0E0E] p-4 md:p-[18px_22px] flex flex-col justify-between">
<span className="font-['JetBrains_Mono'] text-[10px] uppercase text-[#6B6B6B] mb-2">PORTFOLIO VALUE</span>
<div className="flex items-end gap-2 mb-3"><span className="font-['JetBrains_Mono'] text-xl md:text-2xl font-medium text-[#F2F2F2]">$4,287,410</span> <span className="font-['JetBrains_Mono'] text-xs text-[#00D4AA] mb-1">▲ +2.47%</span></div>
<svg className="w-[72px] h-[18px]" viewbox="0 0 72 18"><polyline fill="none" points="0,15 10,12 20,16 30,8 40,10 50,4 60,6 70,2" stroke="#00D4AA" strokeWidth="1.25"></polyline><circle className="animate-[pulse_2s_infinite]" cx="70" cy="2" fill="#00D4AA" r="1.5"></circle></svg>
</div>
<div className="bg-[#0E0E0E] p-4 md:p-[18px_22px] flex flex-col justify-between">
<span className="font-['JetBrains_Mono'] text-[10px] uppercase text-[#6B6B6B] mb-2">SHARPE RATIO (30D)</span>
<div className="flex items-end gap-2 mb-3"><span className="font-['JetBrains_Mono'] text-xl md:text-2xl font-medium text-[#F2F2F2]">2.14</span> <span className="font-['JetBrains_Mono'] text-xs text-[#00D4AA] mb-1">▲ +0.12</span></div>
<svg className="w-[72px] h-[18px]" viewbox="0 0 72 18"><polyline fill="none" points="0,16 15,14 30,15 45,8 60,5 70,3" stroke="#00D4AA" strokeWidth="1.25"></polyline><circle className="animate-[pulse_2s_infinite]" cx="70" cy="3" fill="#00D4AA" r="1.5"></circle></svg>
</div>
<div className="bg-[#0E0E0E] p-4 md:p-[18px_22px] flex flex-col justify-between hidden md:flex">
<span className="font-['JetBrains_Mono'] text-[10px] uppercase text-[#6B6B6B] mb-2">ALPHA vs BENCHMARK</span>
<div className="flex items-end gap-2 mb-3"><span className="font-['JetBrains_Mono'] text-xl md:text-2xl font-medium text-[#F2F2F2]">+312 bps</span> <span className="font-['JetBrains_Mono'] text-xs text-[#00D4AA] mb-1">▲ +47 bps</span></div>
<svg className="w-[72px] h-[18px]" viewbox="0 0 72 18"><polyline fill="none" points="0,12 20,14 40,6 60,4 70,2" stroke="#00D4AA" strokeWidth="1.25"></polyline><circle className="animate-[pulse_2s_infinite]" cx="70" cy="2" fill="#00D4AA" r="1.5"></circle></svg>
</div>
<div className="bg-[#0E0E0E] p-4 md:p-[18px_22px] flex flex-col justify-between hidden md:flex">
<span className="font-['JetBrains_Mono'] text-[10px] uppercase text-[#6B6B6B] mb-2">ACTIVE SIGNALS</span>
<div className="flex items-end gap-2 mb-3"><span className="font-['JetBrains_Mono'] text-xl md:text-2xl font-medium text-[#F2F2F2]">87 / 142</span> <span className="font-['JetBrains_Mono'] text-xs text-[#A0A0A0] mb-1">58 dormant</span></div>
<div className="w-full h-[3px] bg-[rgba(255,255,255,0.08)] mt-auto rounded-full overflow-hidden"><div className="h-full w-[61%] bg-[#00D4AA]"></div></div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-[1px] bg-[rgba(255,255,255,0.06)]">
<div className="bg-[#0E0E0E] p-5 hidden md:flex flex-col relative group">
<div className="flex justify-between items-center mb-6 z-10">
<span className="font-['JetBrains_Mono'] text-xs uppercase text-[#A0A0A0]">EQUITY CURVE · YTD</span>
<div className="flex gap-1"><span className="px-2 py-1 text-[10px] text-[#A0A0A0] font-['JetBrains_Mono']">1M</span><span className="px-2 py-1 text-[10px] text-[#00D4AA] bg-[#00D4AA]/10 rounded font-['JetBrains_Mono']">YTD</span></div>
</div>

<div className="flex-1 relative border-l border-b border-[rgba(255,255,255,0.08)] mt-2">
<svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q10,75 20,70 T40,60 T60,40 T80,30 T100,10 L100,100 L0,100 Z" fill="rgba(0,212,170,0.18)" stroke="none"></path>
<path d="M0,80 Q10,75 20,70 T40,60 T60,40 T80,30 T100,10" fill="none" stroke="#00D4AA" strokeWidth="1.5"></path>
<path d="M0,85 Q20,80 40,75 T70,60 T100,40" fill="none" stroke="rgba(255,255,255,0.35)" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
<div className="absolute left-0 bottom-0 w-full flex justify-between px-2 pt-2 text-[9px] text-[#6B6B6B] font-['JetBrains_Mono'] transform translate-y-full"><span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span></div>
<div className="absolute right-0 top-0 h-full flex flex-col justify-between py-2 text-[9px] text-[#6B6B6B] font-['JetBrains_Mono'] text-right pr-2 transform translate-x-full"><span>$4.4M</span><span>$4.0M</span><span>$3.6M</span><span>$3.2M</span></div>

<div className="absolute top-0 bottom-0 w-[1px] bg-white/15 left-[60%] opacity-0 group-hover:opacity-100 transition-opacity"><div className="absolute top-4 -translate-x-1/2 bg-[#1A1A1A] border border-white/10 p-1.5 rounded text-[9px] font-['JetBrains_Mono'] text-white whitespace-nowrap z-20">Aug 14<br/><span className="text-[#00D4AA]">$4.12M</span></div></div>
</div>
</div>
<div className="bg-[#0E0E0E] flex flex-col overflow-hidden">
<div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] text-[10px] font-['JetBrains_Mono'] text-[#6B6B6B] border-b border-[rgba(255,255,255,0.06)] px-4 py-2 bg-[#121212]"><span>SYMBOL</span><span>ALLOCATION</span><span className="text-right">Δ 24H</span><span className="text-right">SIGNAL</span></div>
<div className="flex-1 overflow-y-auto hide-scroll text-xs font-['JetBrains_Mono']">
<div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] items-center px-4 py-2.5 border-b border-[rgba(255,255,255,0.03)] bg-[rgba(0,212,170,0.04)] border-l-2 border-l-[#00D4AA]"><span className="text-[#F2F2F2] font-medium">NVDA</span><div className="flex items-center gap-2"><div className="w-[40px] h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[70%] h-full bg-[#00D4AA]"></div></div><span className="text-[#A0A0A0] text-[10px]">14.2%</span></div><span className="text-[#00D4AA] text-right">▲ +1.8%</span><div className="flex justify-end items-center gap-1.5 text-[10px] text-[#A0A0A0]"><span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]"></span> buy</div></div>
<div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] items-center px-4 py-2.5 border-b border-[rgba(255,255,255,0.03)]"><span className="text-[#F2F2F2] font-medium">TSM</span><div className="flex items-center gap-2"><div className="w-[40px] h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[48%] h-full bg-[#00D4AA]"></div></div><span className="text-[#A0A0A0] text-[10px]">9.7%</span></div><span className="text-[#00D4AA] text-right">▲ +0.6%</span><div className="flex justify-end items-center gap-1.5 text-[10px] text-[#A0A0A0]"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> hold</div></div>
<div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] items-center px-4 py-2.5 border-b border-[rgba(255,255,255,0.03)] bg-[#121212]"><span className="text-[#F2F2F2] font-medium">ASML</span><div className="flex items-center gap-2"><div className="w-[40px] h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[40%] h-full bg-[#00D4AA]"></div></div><span className="text-[#A0A0A0] text-[10px]">8.1%</span></div><span className="text-[#FF5C6C] text-right">▼ -0.4%</span><div className="flex justify-end items-center gap-1.5 text-[10px] text-[#A0A0A0]"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> hold</div></div>
<div className="grid grid-cols-[2fr_2fr_1.5fr_1fr] items-center px-4 py-2.5 border-b border-[rgba(255,255,255,0.03)]"><span className="text-[#F2F2F2] font-medium">ARM</span><div className="flex items-center gap-2"><div className="w-[40px] h-1.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[30%] h-full bg-[#00D4AA]"></div></div><span className="text-[#A0A0A0] text-[10px]">6.3%</span></div><span className="text-[#00D4AA] text-right">▲ +2.1%</span><div className="flex justify-end items-center gap-1.5 text-[10px] text-[#A0A0A0]"><span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA]"></span> buy</div></div>
</div>
</div>
</div>

<div className="h-9 bg-[#0A0A0A] border-t border-[rgba(255,255,255,0.06)] px-4 flex justify-between items-center text-[10px] font-['JetBrains_Mono'] text-[#6B6B6B] shrink-0">
<div className="flex items-center gap-2"><span className="text-[#00D4AA]">●</span> CONNECTED · LAST TICK 14:28:03 UTC · LATENCY 12ms</div>
<div className="hidden md:block">BUILD 4.2.1-stable · API v3</div>
</div>
</div>
</div>
</section>

<section className="h-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative flex flex-col justify-center overflow-hidden">
<div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-[#6B6B6B] z-10">
<span className="w-[3px] h-[3px] bg-[#00D4AA]"></span> / INTEGRATED WITH
            </div>
<div className="marquee-container w-full overflow-hidden mt-6">
<div className="flex whitespace-nowrap animate-marquee items-center gap-14 w-max">

<div className="flex items-center gap-14 opacity-30 hover:opacity-80 transition-opacity duration-300 filter brightness-0 invert text-xl font-['Space_Grotesk'] font-bold tracking-tight"><span>Interactive Brokers</span><span>Bloomberg</span><span>Refinitiv</span><span>TradingView</span><span>Polygon.io</span><span>CBOE</span><span>IEX Cloud</span><span>Alpaca</span><span>Koyfin</span><span>Tradier</span><span>CME Group</span></div>
<div className="flex items-center gap-14 opacity-30 hover:opacity-80 transition-opacity duration-300 filter brightness-0 invert text-xl font-['Space_Grotesk'] font-bold tracking-tight"><span>Interactive Brokers</span><span>Bloomberg</span><span>Refinitiv</span><span>TradingView</span><span>Polygon.io</span><span>CBOE</span><span>IEX Cloud</span><span>Alpaca</span><span>Koyfin</span><span>Tradier</span><span>CME Group</span></div>
</div>
</div>
</section>

<section className="py-[120px] px-4 md:px-6 flex flex-col items-center bg-[#080808] border-b border-[rgba(255,255,255,0.05)]" id="platform">
<div className="w-full max-w-[1200px] flex flex-col items-center text-center">
<div className="fade-up inline-flex items-center gap-2 mb-6">
<span className="w-[3px] h-[3px] bg-[#00D4AA]"></span>
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">/ MARKET REALITY</span>
</div>
<h2 className="max-w-[860px] font-['Space_Grotesk'] font-semibold text-4xl md:text-5xl lg:text-[4.25rem] leading-[1.02] tracking-[-0.025em] text-[#F2F2F2] mb-5 pb-2">
                    Signal decay is <span className="text-[#00D4AA]">measured in minutes</span>, not quarters.
                </h2>
<p className="max-w-[620px] text-[15px] text-[#A0A0A0] leading-[1.65] mb-16 fade-up">
                    By the time a human team ingests a 10-K, unwinds the footnotes, and rebalances — the alpha is priced in. Quanta compresses the cycle from days to 90 seconds.
                </p>
<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)]">
<div className="bg-[#080808] p-10 md:p-12 text-left spotlight-card group fade-up">
<div className="font-['JetBrains_Mono'] text-[3.5rem] font-medium text-[#F2F2F2] leading-none mb-2 group-hover:text-[#00D4AA] transition-colors duration-300 stat-num" data-target="37">0</div>
<span className="text-[#00D4AA] text-[3.5rem] font-['JetBrains_Mono'] font-medium absolute top-10 md:top-12 ml-20 md:ml-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300">%</span>
<div className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#6B6B6B] tracking-wider mb-6">OF ALPHA LOST TO LATENCY</div>
<p className="text-sm text-[#A0A0A0] leading-[1.6]">Median institutional research cycle — from data availability to portfolio action — is 4.2 business days. In that window, the average signal decays 37%.</p>
</div>
<div className="bg-[#080808] p-10 md:p-12 text-left spotlight-card group fade-up" style={{transitionDelay: '0.1s'}}>
<div className="font-['JetBrains_Mono'] text-[3.5rem] font-medium text-[#F2F2F2] leading-none mb-2 group-hover:text-[#00D4AA] transition-colors duration-300 flex items-end"><span className="stat-num" data-target="140">0</span><span className="text-3xl pb-2 text-[#6B6B6B] group-hover:text-[#00D4AA]/60">+</span></div>
<div className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#6B6B6B] tracking-wider mb-6 mt-1">MANUAL RECONCILIATION HOURS / WEEK</div>
<p className="text-sm text-[#A0A0A0] leading-[1.6]">Quant teams drown in CSV stitching, feature engineering, and infrastructure babysitting. Time spent on edge: under 18%.</p>
</div>
<div className="bg-[#080808] p-10 md:p-12 text-left spotlight-card group fade-up" style={{transitionDelay: '0.2s'}}>
<div className="font-['JetBrains_Mono'] text-[3.5rem] font-medium text-[#F2F2F2] leading-none mb-2 group-hover:text-[#00D4AA] transition-colors duration-300 flex"><span className="text-3xl pt-2 text-[#6B6B6B] group-hover:text-[#00D4AA]/60">$</span><span className="stat-num-float" data-target="4.1">0.0</span><span className="text-3xl pt-2 text-[#6B6B6B] group-hover:text-[#00D4AA]/60">M</span></div>
<div className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#6B6B6B] tracking-wider mb-6 mt-1">AVG ANNUAL TECH STACK COST</div>
<p className="text-sm text-[#A0A0A0] leading-[1.6]">Bloomberg terminal, data vendors, cloud compute, dev headcount. Quanta replaces 70% of that stack with a single subscription.</p>
</div>
</div>
</div>
</section>

<section className="py-[140px] px-4 md:px-6 bg-[#0D0D0D] border-b border-[rgba(255,255,255,0.05)] flex justify-center overflow-hidden">
<div className="w-full max-w-[1200px]">
<div className="fade-up inline-flex items-center gap-2 mb-6">
<span className="w-[3px] h-[3px] bg-[#00D4AA]"></span>
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">/ CAPABILITIES</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[72px]">
<h2 className="md:col-span-2 font-['Space_Grotesk'] font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.025em] text-[#F2F2F2]">
                        One <span className="text-[#00D4AA]">integrated</span> pipeline, from raw data to rebalanced book.
                    </h2>
<p className="text-[15px] text-[#A0A0A0] leading-[1.65] flex items-end fade-up">
                        Every component you'd otherwise stitch together — data ingestion, feature store, signal library, execution router, risk monitor — engineered as a single coherent system.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-grid">

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:-rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Unified Feature Store</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">147 engineered features across equities, rates, FX, and alternative data. Versioned, point-in-time correct, accessible via SDK or SQL.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">PIT-SAFE · ISO-8601</div>
</div>

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Signal Library</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">Pre-trained ensembles: momentum, reversal, quality, carry. Combine via our declarative signal composition layer or bring your own model.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">142 SIGNALS ACTIVE</div>
</div>

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:-rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:activity-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Live Risk Monitor</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">Real-time VAR, stress-testing against 14 regimes, concentration alerts, and drawdown circuit-breakers — running 24/7.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">&lt;50ms CALC LATENCY</div>
</div>

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:branching-paths-up-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Backtesting Engine</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">Walk-forward validation with realistic cost modelling: borrow rates, market impact, slippage curves calibrated to your venue and size.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">14-YEAR HISTORY</div>
</div>

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:-rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Execution Router</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">Smart order routing across 6 prime brokers. Automatic venue selection, TWAP/VWAP algorithms, and FIX-protocol connectivity.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">6 PB INTEGRATIONS</div>
</div>

<div className="conic-card bg-[#0E0E0E] border border-[rgba(255,255,255,0.06)] rounded-[14px] p-8 h-auto md:h-[320px] flex flex-col relative group transition-colors hover:bg-[#111111]">
<div className="w-10 h-10 rounded-lg bg-[#00D4AA]/10 border border-[#00D4AA]/20 flex items-center justify-center text-[#00D4AA] text-lg mb-6 group-hover:rotate-6 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] font-semibold text-xl text-[#F2F2F2] mb-2.5 group-hover:tracking-[-0.015em] transition-all">Compliance Layer</h3>
<p className="text-sm text-[#A0A0A0] leading-[1.6] mb-8">SOC 2 Type II, pre-trade compliance checks, position-limit enforcement, audit trail with tamper-evident logs, and regulator reporting.</p>
<div className="absolute bottom-8 left-8 font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#6B6B6B]">SOC 2 · ISO 27001</div>
</div>
</div>
</div>
</section>

<section className="py-[140px] px-4 md:px-6 flex flex-col items-center bg-[#080808] border-b border-[rgba(255,255,255,0.05)]" id="research">
<div className="w-full max-w-[1100px] flex flex-col items-center">
<div className="fade-up inline-flex items-center gap-2 mb-6">
<span className="w-[3px] h-[3px] bg-[#00D4AA]"></span>
<span className="font-['JetBrains_Mono'] text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">/ SIGNATURE — LIVE FEED</span>
</div>
<h2 className="max-w-[860px] text-center font-['Space_Grotesk'] font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.025em] text-[#F2F2F2] mb-5">
                    Watch alpha <span className="text-[#00D4AA]">surface</span> in real time.
                </h2>
<p className="max-w-[560px] text-center text-[15px] text-[#A0A0A0] leading-[1.65] mb-16 fade-up">
                    Every arrow is a live trade-signal. Click any row to expand the model's reasoning.
                </p>
<div className="w-full h-[580px] bg-[#0A0A0A] border border-[rgba(255,255,255,0.06)] rounded-2xl overflow-hidden flex flex-col shadow-2xl fade-up relative" id="feed-panel">

<div className="h-14 bg-[#0E0E0E] border-b border-[rgba(255,255,255,0.05)] px-5 flex items-center justify-between shrink-0 z-10">
<div className="font-['JetBrains_Mono'] text-xs text-[#F2F2F2] flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] animate-pulse"></span> LIVE · SIGNALS STREAM</div>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 rounded bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#A0A0A0] font-['JetBrains_Mono'] text-[11px] transition-colors">ALL VENUES ▾</button>
<div className="px-3 py-1.5 rounded bg-[#00D4AA]/10 text-[#00D4AA] border border-[#00D4AA]/30 font-['JetBrains_Mono'] text-[11px]">AUTO-SCROLL ON</div>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#0A0A0A]/50">
<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#0A0A0A_0%,transparent_15%,transparent_85%,#0A0A0A_100%)] z-10"></div>
<div className="absolute bottom-0 w-full flex flex-col justify-end p-2 pb-6" id="live-feed-list">

</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-white/10 backdrop-blur rounded text-[10px] font-['JetBrains_Mono'] text-white opacity-0 transition-opacity z-20" id="feed-paused">PAUSED</div>
</div>
</div>
</div>
</section>

<section className="py-[160px] px-4 md:px-6 flex flex-col items-center bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden">
<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-dashed border-[#00D4AA]/20 opacity-30 pointer-events-none"></div>
<div className="relative z-10 max-w-[900px] text-center flex flex-col items-center">
<h2 className="font-['Space_Grotesk'] font-semibold text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] tracking-[-0.03em] text-[#F2F2F2] mb-5">
                    Boost your <span className="text-[#00D4AA]">alpha</span> today.
                </h2>
<p className="max-w-[440px] text-[15px] text-[#A0A0A0] leading-[1.65] mb-10 fade-up">
                    Request access — one call, 72-hour onboarding, no committee meetings.
                </p>
<button className="cta-primary h-[54px] px-[28px] bg-[#00D4AA] text-[#080808] font-['Space_Grotesk'] font-medium text-base tracking-[0.01em] flex items-center gap-2 group fade-up transition-transform duration-200 hover:scale-[1.02]">
                    Request Access
                    <iconify-icon className="text-lg transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="bg-[#080808] pt-20 pb-8 px-4 md:px-6 lg:px-10 border-t border-[rgba(255,255,255,0.05)] relative z-10 overflow-hidden">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-[72px]">
<div className="flex flex-col">
<a className="flex items-center gap-3 mb-4 group inline-block w-max" href="#" id="footer-logo">
<div className="w-[36px] h-[36px] text-[#F2F2F2] group-hover:text-[#00D4AA] transition-colors"><svg className="w-full h-full" viewbox="0 0 32 32"><circle cx="16" cy="16" fill="none" r="13" stroke="currentColor" stroke-dasharray="63 82" stroke-dashoffset="21" strokeLinecap="round" strokeWidth="1.25"></circle><circle cx="16" cy="16" fill="none" r="7" stroke="currentColor" strokeWidth="2"></circle><rect fill="currentColor" height="3" rx="0.5" width="3" x="22" y="3"></rect></svg></div>
<span className="font-['Space_Grotesk'] font-semibold text-[22px] tracking-[-0.01em] text-[#F2F2F2] scramble-text">Quanta</span>
</a>
<p className="text-sm text-[#A0A0A0] mb-6">Alpha, engineered at scale.</p>
<div className="flex gap-4">
<a className="text-[#A0A0A0] hover:text-[#00D4AA] transition-colors" href="#"><iconify-icon className="text-[18px]" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-[#A0A0A0] hover:text-[#00D4AA] transition-colors" href="#"><iconify-icon className="text-[18px]" icon="solar:linkedin-linear"></iconify-icon></a>
<a className="text-[#A0A0A0] hover:text-[#00D4AA] transition-colors" href="#"><iconify-icon className="text-[18px]" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#6B6B6B] mb-2">Product</span>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Platform</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Signal Library</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Pricing</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Changelog</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Integrations</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#6B6B6B] mb-2">Research</span>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Whitepapers</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Methodology</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Risk Framework</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider text-[#6B6B6B] mb-2">Company</span>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">About</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors flex items-center gap-1.5 w-max" href="#">Careers <span className="w-[14px] h-[14px] rounded bg-[#00D4AA] text-[#080808] text-[9px] flex items-center justify-center font-['JetBrains_Mono'] pt-[1px]">3</span></a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Contact</a>
<a className="text-sm text-[#A0A0A0] hover:text-[#F2F2F2] transition-colors w-max" href="#">Security</a>
<div className="mt-4 font-['JetBrains_Mono'] text-[10px] text-[#6B6B6B] leading-relaxed">
                    quanta@hq.co<br/>Greenwich · Zurich
                </div>
</div>
</div>
<div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[rgba(255,255,255,0.04)] items-center">
<div className="font-['JetBrains_Mono'] text-[11px] text-[#6B6B6B] text-center md:text-left order-2 md:order-1">© 2026 QUANTA CAPITAL SYSTEMS, INC.</div>
<div className="flex justify-center gap-4 font-['JetBrains_Mono'] text-[11px] text-[#A0A0A0] order-1 md:order-2">
<a className="hover:text-[#F2F2F2] transition-colors" href="#">Terms</a>
<a className="hover:text-[#F2F2F2] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#F2F2F2] transition-colors" href="#">SOC 2 Report</a>
</div>
<div className="flex justify-center md:justify-end font-['JetBrains_Mono'] text-[11px] text-[#A0A0A0] order-3 relative group cursor-help">
<span className="text-[#00D4AA] mr-1.5 animate-pulse">●</span> SYSTEM STATUS · ALL OPERATIONAL
                <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">14 services · avg latency 12ms · last incident 47 days ago</div>
</div>
</div>
<div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden">
<div className="font-['Space_Grotesk'] font-bold text-[clamp(120px,18vw,280px)] text-[rgba(255,255,255,0.015)] tracking-[-0.04em] leading-none whitespace-nowrap">QUANTA</div>
</div>
</footer>



    </>
  );
}
