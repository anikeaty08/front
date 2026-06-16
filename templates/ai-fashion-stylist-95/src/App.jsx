import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const observerOptions = { root: document.getElementById('sheet-content-area'), threshold: 0.1, rootMargin: '0px 0px -20px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add('reveal-active'), index * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        function observeElements() {
            document.querySelectorAll('.reveal-base').forEach(el => {
                el.classList.remove('reveal-active');
                observer.observe(el);
            });
        }

        let loadingInterval;
        let isStylistLoaded = false;

        function setState(state) {
            document.querySelectorAll('.demo-btn').forEach(btn => {
                const isActive = btn.textContent.toLowerCase().includes(state.replace('sheet', 'full sheet').replace('verdict', 'bubble'));
                btn.className = isActive 
                    ? 'demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-white text-black shadow-sm transition-colors duration-300'
                    : 'demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-transparent text-gray-300 hover:text-white transition-colors duration-300';
            });

            const system = document.getElementById('sia-system');
            const inner = document.getElementById('orb-inner');
            const icon = document.getElementById('orb-icon');
            const glow = document.getElementById('orb-glow');
            const border = document.getElementById('orb-border');
            const ring = document.getElementById('scanning-ring');
            const bubble = document.getElementById('speech-bubble');
            const sheet = document.getElementById('verdict-sheet');
            const overlay = document.getElementById('overlay-backdrop');
            const sparkle3 = document.getElementById('sparkle-3');

            system.classList.remove('translate-y-full', 'scale-50', 'opacity-0');
            
            if (state === 'sheet') {
                sheet.classList.remove('translate-y-full');
                overlay.classList.remove('pointer-events-none', 'opacity-0');
                system.classList.add('translate-y-12', 'scale-75', 'opacity-0', 'pointer-events-none');
                
                if (!isStylistLoaded) startLoadingText();
                observeElements(); 
                return;
            } else {
                sheet.classList.add('translate-y-full');
                overlay.classList.add('pointer-events-none', 'opacity-0');
                system.classList.remove('translate-y-12', 'scale-75', 'opacity-0', 'pointer-events-none');
            }

            if (state === 'browsing') {
                inner.className = 'w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-700 bg-[#E8E0F8]';
                icon.className = 'text-xl text-[#8B7BC8] transition-all duration-300';
                icon.setAttribute('icon', 'solar:eye-linear');
                glow.className = 'absolute inset-[-12px] rounded-full blur-2xl opacity-20 bg-[#8B7BC8] transition-colors duration-700';
                border.className = 'absolute inset-0 p-[1.5px] rounded-full border-gradient-lavender animate-shimmer z-10 shadow-lg';
                ring.classList.add('opacity-0');
                sparkle3.classList.add('opacity-0');
            } else if (state === 'scanning') {
                inner.className = 'w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-700 bg-[#f3f4f6]';
                icon.className = 'text-xl text-[#9ca3af] transition-all duration-300 scale-110';
                icon.setAttribute('icon', 'solar:magnifer-zoom-in-linear');
                glow.className = 'absolute inset-[-12px] rounded-full blur-2xl opacity-20 bg-[#9ca3af] transition-colors duration-700';
                border.className = 'absolute inset-0 p-[1.5px] rounded-full bg-gradient-to-br from-gray-200 to-gray-300 z-10 shadow-lg';
                ring.classList.remove('opacity-0');
                sparkle3.classList.remove('opacity-0');
            } else if (state === 'verdict') {
                const orbWrap = document.getElementById('orb-wrapper');
                orbWrap.style.transform = 'scale(1.12)';
                setTimeout(() => orbWrap.style.transform = '', 300);

                inner.className = 'w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-700 bg-emerald-50';
                icon.className = 'text-xl text-emerald-500 transition-all duration-300';
                icon.setAttribute('icon', 'solar:heart-bold');
                glow.className = 'absolute inset-[-12px] rounded-full blur-2xl opacity-20 bg-emerald-500 transition-colors duration-700';
                border.className = 'absolute inset-0 p-[1.5px] rounded-full border-gradient-green animate-shimmer z-10 shadow-lg';
                ring.classList.add('opacity-0');
                sparkle3.classList.add('opacity-0');
            }

            if (state === 'verdict') {
                bubble.classList.remove('opacity-0', 'scale-95', 'translate-x-4', 'pointer-events-none');
            } else {
                bubble.classList.add('opacity-0', 'scale-95', 'translate-x-4', 'pointer-events-none');
            }
        }

        function setTab(tabId) {
            const fitTab = document.getElementById('tab-fit');
            const styTab = document.getElementById('tab-stylist');
            const fitContent = document.getElementById('content-fit');
            const styContent = document.getElementById('content-stylist');

            const activeClass = 'bg-white text-gray-900 shadow-sm border border-gray-200/50';
            const inactiveClass = 'text-gray-500 hover:text-gray-900 bg-transparent border border-transparent shadow-none';
            
            fitTab.className = `flex-1 py-2 text-xs font-medium rounded-full flex items-center justify-center transition-all duration-300 ${tabId === 'fit' ? activeClass : inactiveClass}`;
            styTab.className = `flex-1 py-2 text-xs font-medium rounded-full flex items-center justify-center transition-all duration-300 ${tabId === 'stylist' ? activeClass : inactiveClass}`;

            if (tabId === 'fit') {
                styContent.classList.add('opacity-0');
                setTimeout(() => {
                    styContent.classList.add('hidden');
                    styContent.classList.remove('flex');
                    fitContent.classList.remove('hidden');
                    fitContent.classList.add('flex');
                    
                    setTimeout(() => {
                        fitContent.classList.remove('opacity-0');
                        observeElements();
                    }, 20);
                }, 200);
            } else {
                fitContent.classList.add('opacity-0');
                setTimeout(() => {
                    fitContent.classList.add('hidden');
                    fitContent.classList.remove('flex');
                    styContent.classList.remove('hidden');
                    styContent.classList.add('flex');
                    
                    setTimeout(() => {
                        styContent.classList.remove('opacity-0');
                        if (!isStylistLoaded) {
                            startLoadingText();
                        } else {
                            observeElements();
                        }
                    }, 20);
                }, 200);
            }
        }

        const loadingTexts = [
            "Analyzing silhouette...",
            "Checking proportions for 5'0\"...",
            "Comparing to your style goals..."
        ];
        let textIndex = 0;

        function startLoadingText() {
            clearInterval(loadingInterval);
            const textEl = document.getElementById('loading-text');
            loadingInterval = setInterval(() => {
                textEl.style.opacity = '0';
                setTimeout(() => {
                    textIndex = (textIndex + 1) % loadingTexts.length;
                    textEl.textContent = loadingTexts[textIndex];
                    textEl.style.opacity = '1';
                }, 300);
            }, 2000);
        }

        function finishStylistLoading() {
            clearInterval(loadingInterval);
            isStylistLoaded = true;
            const loadingArea = document.getElementById('stylist-loading');
            const resultsArea = document.getElementById('stylist-results');

            loadingArea.style.opacity = '0';
            setTimeout(() => {
                loadingArea.classList.add('hidden');
                resultsArea.classList.remove('hidden');
                resultsArea.classList.add('flex');
                observeElements();
            }, 300);
        }

        setTimeout(() => {
            document.getElementById('sia-system').classList.add('pop-in');
        }, 300);

        setTab('stylist');

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none flex justify-between px-8 opacity-20 z-0 max-w-7xl mx-auto hidden sm:flex">
<div className="w-px h-full bg-gray-400 border-l border-dashed border-gray-400"></div>
<div className="w-px h-full bg-gray-400 border-l border-dashed border-gray-400"></div>
<div className="w-px h-full bg-gray-400 border-l border-dashed border-gray-400"></div>
</div>

<div className="fixed top-3 z-[100] flex gap-1.5 p-1.5 rounded-full bg-[#0f1115]/90 backdrop-blur-md border border-white/10 shadow-xl">
<button className="demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-white text-black shadow-sm transition-colors duration-300" onclick="setState('browsing')">Browsing</button>
<button className="demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-transparent text-gray-300 hover:text-white transition-colors duration-300" onclick="setState('scanning')">Scanning</button>
<button className="demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-transparent text-gray-300 hover:text-white transition-colors duration-300" onclick="setState('verdict')">Bubble</button>
<button className="demo-btn px-3 py-1.5 rounded-full text-xs font-medium bg-transparent text-gray-300 hover:text-white transition-colors duration-300" onclick="setState('sheet')">Full Sheet</button>
</div>

<main className="relative z-10 w-full h-[100dvh] max-w-[430px] bg-white sm:rounded-[2.5rem] sm:shadow-2xl sm:h-[844px] overflow-hidden flex flex-col border sm:border-[6px] sm:border-[#0f1115]">

<div className="flex-1 overflow-y-auto no-scrollbar bg-white pb-32">

<header className="h-12 border-b border-gray-100 flex items-center justify-center relative">
<div className="absolute left-4"><iconify-icon className="text-xl text-gray-800" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="text-base tracking-tighter font-medium text-gray-900">GAP</div>
<div className="absolute right-4"><iconify-icon className="text-xl text-gray-800" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon></div>
</header>
<div className="px-5 py-5">
<div className="text-xs text-gray-500 mb-2.5">Women / Sweatshirts</div>

<h1 className="text-xl font-medium tracking-tighter text-gray-900 leading-snug mb-4 pr-4">VintageSoft Wedge Crewneck Sweatshirt</h1>
<div className="w-full aspect-[3/4] rounded-3xl overflow-hidden mb-5 bg-gray-50 relative border border-gray-100">
<img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&amp;h=800&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between mb-3">
<div className="text-xl font-medium tracking-tighter text-gray-900">$49.95</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<span className="text-gray-900">★★★★☆</span> 234 reviews
                    </div>
</div>
<div className="mt-6">
<div className="text-xs text-gray-900 mb-3">Color: <span className="font-medium">True Black</span></div>
<div className="flex gap-3">
<div className="w-9 h-9 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-gray-900"></div>
<div className="w-9 h-9 rounded-full bg-[#1C2A43] border border-gray-200"></div>
<div className="w-9 h-9 rounded-full bg-[#A8A9AD] border border-gray-200"></div>
</div>
</div>
<div className="mt-7">
<div className="flex items-center justify-between mb-3">
<div className="text-xs font-medium text-gray-900">Size</div>
</div>
<div className="grid grid-cols-6 gap-2">
<button className="h-11 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-gray-400 transition-colors">XXS</button>
<button className="h-11 border-2 border-gray-900 rounded-xl text-sm font-medium text-gray-900">XS</button>
<button className="h-11 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-gray-400 transition-colors">S</button>
<button className="h-11 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-gray-400 transition-colors">M</button>
<button className="h-11 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-gray-400 transition-colors">L</button>
<button className="h-11 border border-gray-200 rounded-xl text-sm text-gray-500 hover:border-gray-400 transition-colors">XL</button>
</div>
</div>
<button className="w-full h-14 bg-[#0f1115] text-white text-sm font-medium rounded-full mt-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-black transition-colors">Add to Bag</button>
</div>
</div>

<div className="absolute inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-500 ease-soft z-30 backdrop-blur-[2px]" id="overlay-backdrop" onclick="setState('verdict')"></div>

<div className="absolute bottom-[68px] right-[16px] z-40 flex items-end justify-end transition-all duration-700 ease-spring" id="sia-system">

<div className="absolute right-[68px] bottom-[12px] opacity-0 scale-95 translate-x-4 pointer-events-none transition-all duration-500 ease-spring origin-bottom-right" id="speech-bubble">
<div className="p-[1px] rounded-2xl rounded-br-sm border-gradient-green animate-shimmer shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
<div className="bg-white/95 backdrop-blur-xl rounded-[15px] rounded-br-[3px] px-4 py-3 w-max max-w-[220px]">
<p className="text-sm font-medium text-gray-900 leading-tight">
                            You're an XS here <span className="text-emerald-500 font-medium ml-0.5">✓</span>
</p>
</div>
</div>
</div>

<div className="relative float-orb w-[56px] h-[56px] cursor-pointer" id="orb-wrapper" onclick="setState('sheet')">
<div className="absolute inset-[-12px] rounded-full blur-2xl opacity-20 bg-[#8B7BC8] transition-colors duration-700" id="orb-glow"></div>
<svg className="absolute inset-[-4px] w-[64px] h-[64px] opacity-0 transition-opacity duration-300 pointer-events-none -rotate-90" id="scanning-ring" viewbox="0 0 64 64">
<defs>
<lineargradient id="ring-grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="50%" stop-color="#C4453A"></stop>
<stop offset="100%" stop-color="#C57510"></stop>
</lineargradient>
</defs>
<circle className="ring-sweep" cx="32" cy="32" fill="none" r="30" stroke="url(#ring-grad)" strokeLinecap="round" strokeWidth="2.5"></circle>
</svg>
<div className="absolute inset-0 p-[1.5px] rounded-full border-gradient-lavender animate-shimmer z-10 shadow-lg" id="orb-border">
<div className="w-full h-full rounded-full bg-white/70 backdrop-blur-xl flex items-center justify-center overflow-hidden">
<div className="w-[44px] h-[44px] rounded-full flex items-center justify-center transition-all duration-700 bg-[#E8E0F8]" id="orb-inner">
<iconify-icon className="text-xl text-[#8B7BC8] transition-all duration-300" icon="solar:eye-linear" id="orb-icon" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 z-0 pointer-events-none" id="sparkles-container">
<div className="sparkle text-emerald-500 w-1.5 h-1.5 bg-current" style={{-Radius: '35px', -Duration: '4s', -Delay: '0s'}}></div>
<div className="sparkle text-[#C4453A] w-1 h-1 bg-current" style={{-Radius: '42px', -Duration: '5.5s', -Delay: '-2s'}}></div>
<div className="sparkle text-[#C57510] w-1 h-1 bg-current opacity-0 transition-opacity" id="sparkle-3" style={{-Radius: '30px', -Duration: '3s', -Delay: '-1s'}}></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[85%] glass-sheet rounded-t-[2.5rem] z-50 translate-y-full transition-transform duration-700 ease-spring flex flex-col" id="verdict-sheet">
<div className="relative shrink-0 w-full pt-3 pb-2 z-20">
<div className="w-full flex justify-center pb-3 cursor-pointer" onclick="setState('verdict')">
<div className="w-12 h-1.5 rounded-full bg-gray-300/80"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2 justify-center mb-5 mt-1">
<div className="w-7 h-7 rounded-full bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-xs text-emerald-600">✦</div>
<span className="text-xs font-medium text-gray-500">Sia · 5'0" · Pear · Long torso</span>
</div>

<div className="flex p-1 bg-gray-100/50 border border-gray-200/50 rounded-full mx-6 relative z-10 shadow-inner">
<button className="flex-1 py-2 text-xs font-medium rounded-full flex items-center justify-center transition-all duration-300 text-gray-500 hover:text-gray-900" id="tab-fit" onclick="setTab('fit')">
                            Fit
                        </button>
<button className="flex-1 py-2 text-xs font-medium rounded-full flex items-center justify-center transition-all duration-300 bg-white text-gray-900 shadow-sm border border-gray-200/50" id="tab-stylist" onclick="setTab('stylist')">
                            Stylist
                        </button>
</div>
</div>
<div className="absolute -bottom-6 left-0 w-full h-6 bg-white/0 backdrop-blur-md progressive-blur-mask pointer-events-none"></div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-12 pt-6 relative" id="sheet-content-area">

<div className="hidden flex-col gap-6 transition-opacity duration-300 opacity-0 absolute top-6 left-6 right-6 pb-12" id="content-fit">
<div className="reveal-base flex flex-col items-center pt-2">
<div className="w-[76px] h-[76px] bg-[#0f1115] rounded-[1.5rem] flex items-center justify-center shadow-xl mb-3">
<span className="text-3xl font-medium text-white tracking-tighter">XS</span>
</div>
<div className="text-sm font-medium tracking-tight text-gray-900">Your size at Gap</div>
<div className="text-xs text-gray-400 mt-1">Alpha · Regular</div>
</div>

<div className="reveal-base glass-card p-5">
<div className="flex justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-4 px-1">
<span>Tight</span><span>Perfect</span><span>Loose</span>
</div>
<div className="relative w-full h-2 bg-gray-100 rounded-full mb-4">

<div className="absolute inset-y-0 left-0 w-[60%] rounded-full bg-gradient-to-r from-emerald-200 via-emerald-400 to-[#C57510] opacity-50"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[42%] w-5 h-5 bg-white rounded-full border-[3px] border-emerald-500 shadow-sm"></div>
</div>
<div className="text-xs text-center text-gray-500 font-medium">Slightly fitted — good for your frame</div>
</div>
<div className="reveal-base glass-card p-5 flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight text-gray-900">Confidence</div>
<div className="text-xs text-gray-500 mt-1">High match for your body</div>
</div>
<div className="flex items-center gap-3">
<div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="w-[89%] h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-base font-medium tracking-tighter text-emerald-500">89%</span>
</div>
</div>
<div className="reveal-base glass-card px-5 py-2">
<details className="group">
<summary className="py-4 flex items-center justify-between cursor-pointer list-none text-sm font-medium text-gray-900 tracking-tight">
                                Size details
                                <iconify-icon className="text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-5 flex flex-col gap-3">
<div className="flex items-center justify-between text-sm border-b border-gray-100 pb-3">
<span className="w-14 font-medium text-gray-500">Chest</span>
<span className="text-gray-400 text-xs">32.0" <span className="mx-1">→</span> <span className="text-gray-900 font-medium">32.75"</span></span>
<span className="w-20 text-right font-medium text-emerald-600 text-xs">✓ Room</span>
</div>
<div className="flex items-center justify-between text-sm border-b border-gray-100 pb-3">
<span className="w-14 font-medium text-gray-500">Waist</span>
<span className="text-gray-400 text-xs">28.0" <span className="mx-1">→</span> <span className="text-gray-900 font-medium">26.00"</span></span>
<span className="w-20 text-right font-medium text-emerald-600 text-xs">✓ Good</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="w-14 font-medium text-gray-500">Hips</span>
<span className="text-gray-400 text-xs">35.0" <span className="mx-1">→</span> <span className="text-gray-900 font-medium">35.75"</span></span>
<span className="w-20 text-right font-medium text-[#C57510] text-xs">△ Close</span>
</div>
</div>
</details>
</div>
<div className="reveal-base bg-emerald-50 border border-emerald-100/50 rounded-2xl p-4">
<p className="text-xs text-gray-700 leading-relaxed"><span className="mr-1.5 text-emerald-600">✦</span> <span className="font-medium text-gray-900">Tip:</span> Gap's XS runs true to size this season. No need to size up.</p>
</div>
</div>

<div className="flex flex-col transition-opacity duration-300" id="content-stylist">
<div className="flex flex-col items-center justify-center py-16" id="stylist-loading">
<div className="relative w-[96px] h-[96px] float-orb mb-8">
<div className="w-full h-full rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center relative z-10">
<iconify-icon className="text-4xl text-emerald-400" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
</div>
<div className="absolute inset-0 z-0">
<div className="sparkle text-emerald-500 w-2 h-2 bg-current" style={{-Radius: '55px', -Duration: '3.5s', -Delay: '0s'}}></div>
<div className="sparkle text-[#C4453A] w-1.5 h-1.5 bg-current" style={{-Radius: '65px', -Duration: '5s', -Delay: '-1.5s'}}></div>
<div className="sparkle text-[#C57510] w-2 h-2 bg-current" style={{-Radius: '48px', -Duration: '4s', -Delay: '-3s'}}></div>
</div>
</div>
<div className="text-sm font-medium tracking-tight text-gray-900 mb-2">Sia is studying this piece</div>
<div className="text-xs text-gray-500 h-4 transition-opacity duration-300" id="loading-text">Analyzing silhouette...</div>
<div className="flex gap-1.5 mt-6">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-[pop-spring_1s_infinite_0s]"></div>
<div className="w-2 h-2 rounded-full bg-[#C4453A] animate-[pop-spring_1s_infinite_0.2s]"></div>
<div className="w-2 h-2 rounded-full bg-[#C57510] animate-[pop-spring_1s_infinite_0.4s]"></div>
</div>
<button className="mt-12 text-xs text-gray-400 hover:text-gray-600 transition-colors border-b border-gray-300 pb-0.5" onclick="finishStylistLoading()">Demo: Show Results</button>
</div>
<div className="hidden flex-col" id="stylist-results">
<div className="reveal-base pt-2 mb-8">
<div className="inline-flex items-center rounded-full border border-red-200/50 bg-red-50 px-3 py-1 text-[10px] text-red-600 mb-4 shadow-sm uppercase tracking-widest font-medium">
                                Insight
                            </div>
<h1 className="font-playfair text-3xl font-medium leading-tight text-gray-900 mb-3 tracking-tighter">This hides your waist.</h1>
<p className="text-sm text-gray-500 leading-relaxed pr-4">No darts, no cinch, no belt — straight drop from bust. The V-neck and length are great, but this one matters to you.</p>
</div>
<div className="flex gap-3 mb-8">

<div className="reveal-base flex-1 relative rounded-3xl p-[1px] border-gradient-green animate-shimmer-slow shadow-sm">
<div className="bg-white w-full h-full rounded-[1.4rem] p-4 flex flex-col">
<div className="text-[10px] font-medium tracking-widest text-emerald-600 uppercase mb-4">Working for you</div>
<ul className="text-xs text-gray-600 space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-emerald-500 text-base shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span className="leading-relaxed">Look taller — V-neck + maxi hemline</span>
</li>
</ul>
</div>
</div>

<div className="reveal-base flex-1 relative rounded-3xl p-[1px] border-gradient-rose animate-shimmer-slow shadow-sm" style={{transitionDelay: '100ms'}}>
<div className="bg-white w-full h-full rounded-[1.4rem] p-4 flex flex-col">
<div className="text-[10px] font-medium tracking-widest text-red-600 uppercase mb-4">Not Working</div>
<ul className="text-xs text-gray-600 space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-red-500 text-base shrink-0 mt-0.5" icon="solar:close-circle-bold"></iconify-icon>
<span className="leading-relaxed">Show waist — Tent silhouette</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-red-500 text-base shrink-0 mt-0.5" icon="solar:close-circle-bold"></iconify-icon>
<span className="leading-relaxed">Slim hips — Light floral adds volume</span>
</li>
</ul>
</div>
</div>
</div>
<div className="reveal-base glass-card p-5 mb-8">
<div className="text-sm font-medium tracking-tight text-gray-900 mb-2">What to look for instead</div>
<div className="text-xs text-gray-500 mb-4">Try styles that naturally cinch or can be belted.</div>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">wrap maxi dress</span>
<span className="px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 shadow-sm hover:bg-gray-100 transition-colors cursor-pointer">belted V-neck</span>
</div>
</div>
<div className="reveal-base border-t border-gray-100">
<details className="group">
<summary className="py-5 flex items-center justify-between cursor-pointer list-none text-sm font-medium tracking-tight text-gray-900">
                                    Sia's full take
                                    <iconify-icon className="text-gray-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pb-6 pt-1">
<p className="text-sm text-gray-500 leading-relaxed">
                                        Honestly? The overall fit through the shoulders is perfectly fine, and the length hits your goals of appearing taller. But you told me you want to show off your waist, and this silhouette is going to hide it completely due to the straight cut. For lazy Sundays around the house, go for it. For looking put-together and highlighting your shape, keep scrolling for wrap options.
                                    </p>
</div>
</details>
</div>
<div className="reveal-base mt-4 pt-8 border-t border-gray-100 flex flex-col items-center">
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-gray-400">Was Sia helpful?</span>
<button className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center text-lg">👍</button>
<button className="w-11 h-11 rounded-full bg-white border border-gray-100 shadow-sm hover:bg-gray-50 transition-colors flex items-center justify-center text-lg">👎</button>
</div>
<p className="text-[10px] text-gray-400 mt-6 tracking-widest uppercase font-medium">✦ Powered by Kridha AI</p>
</div>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full h-[56px] bg-white border-t border-gray-100 flex items-center justify-between px-6 z-20 shrink-0 shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
<iconify-icon className="text-xl text-gray-800" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl text-gray-300" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-lg text-gray-800" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl text-gray-800" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-6 h-6 border border-gray-200 rounded-lg flex items-center justify-center text-xs font-medium text-gray-800 shadow-sm">3</div>
<iconify-icon className="text-xl text-gray-800" icon="solar:menu-dots-linear" strokeWidth="1.5"></iconify-icon>
</nav>
</main>


    </>
  );
}
