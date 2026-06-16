import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openMenu() {
            const menu = document.getElementById('fullscreen-menu-overlay');
            if (menu && menu.parentElement.tagName !== 'BODY') {
                // Move menu to body to escape parent stacking context
                document.body.appendChild(menu);
            }
            // Trigger reflow
            void menu.offsetWidth;
            
            menu.classList.remove('opacity-0', 'pointer-events-none');
            menu.classList.add('opacity-100', 'pointer-events-auto');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            const menu = document.getElementById('fullscreen-menu-overlay');
            if (menu) {
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }
        }
    


    function showServiceDesc(title, text) {
            const container = document.getElementById('service-desc-container');
            const placeholder = document.getElementById('service-desc-placeholder');
            const titleEl = document.getElementById('service-desc-title');
            const textEl = document.getElementById('service-desc-text');
            
            if(container && titleEl && textEl) {
                titleEl.textContent = title;
                textEl.textContent = text;
                container.classList.remove('opacity-0', 'translate-y-2');
                container.classList.add('opacity-100', 'translate-y-0');
                if(placeholder) placeholder.classList.add('opacity-0');
            }
        }

        function hideServiceDesc() {
            const container = document.getElementById('service-desc-container');
            const placeholder = document.getElementById('service-desc-placeholder');
            
            if(container) {
                container.classList.remove('opacity-100', 'translate-y-0');
                container.classList.add('opacity-0', 'translate-y-2');
                if(placeholder) placeholder.classList.remove('opacity-0');
            }
        }
  


                function showServiceDesc(title, text) {
                    const container = document.getElementById('service-desc-container');
                    const placeholder = document.getElementById('service-desc-placeholder');
                    const titleEl = document.getElementById('service-desc-title');
                    const textEl = document.getElementById('service-desc-text');
                    
                    if(container && titleEl && textEl) {
                        titleEl.textContent = title;
                        textEl.textContent = text;
                        container.classList.remove('opacity-0', 'scale-95');
                        container.classList.add('opacity-100', 'scale-100');
                        if(placeholder) placeholder.classList.add('opacity-0');
                    }
                }

                function hideServiceDesc() {
                    const container = document.getElementById('service-desc-container');
                    const placeholder = document.getElementById('service-desc-placeholder');
                    
                    if(container) {
                        container.classList.remove('opacity-100', 'scale-100');
                        container.classList.add('opacity-0', 'scale-95');
                        if(placeholder) placeholder.classList.remove('opacity-0');
                    }
                }
            


            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


            function updateDistInfo(label, pct, amt) {
                const el = document.getElementById('dist-detail-display');
                if(el) {
                    el.innerHTML = `<span class="text-white font-medium">${label}:</span> <span class="text-gray-400">${pct}</span> <span class="text-[#0052FF] ml-1">(${amt})</span>`;
                    el.classList.remove('animate-pulse', 'text-[#0052FF]');
                }
            }
        


        (function() {
            const container = document.querySelector('.roadmap-container');
            const line = document.getElementById('scroll-line');
            const items = document.querySelectorAll('.roadmap-item');
            
            function updateRoadmap() {
                if (!container || !line) return;
                
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const containerTop = rect.top;
                const containerHeight = rect.height;
                
                // Calculate progress
                let progress = 0;
                const startOffset = windowHeight * 0.4; // Start filling when container enters
                const endOffset = 100; // Finish before bottom
                
                if (containerTop < startOffset) {
                    const scrolled = Math.abs(containerTop - startOffset);
                    progress = (scrolled / (containerHeight - endOffset)) * 100;
                }
                
                // Clamp progress
                progress = Math.max(0, Math.min(100, progress));
                line.style.height = `${progress}%`;

                // Update items state
                items.forEach((item, index) => {
                    const itemRect = item.getBoundingClientRect();
                    const triggerPoint = windowHeight * 0.65;
                    
                    if (itemRect.top < triggerPoint) {
                        // Activate Item
                        item.classList.remove('opacity-30');
                        item.classList.add('opacity-100');
                        
                        // Update Colors
                        const title = item.querySelectorAll('.roadmap-title');
                        const kicker = item.querySelectorAll('.roadmap-kicker');
                        const list = item.querySelectorAll('.roadmap-list');
                        const dot = item.querySelector('.roadmap-dot');
                        const icons = item.querySelectorAll('.roadmap-icon');

                        title.forEach(t => {
                            t.classList.remove('text-gray-300');
                            t.classList.add('text-[#0052FF]');
                        });
                        
                        kicker.forEach(k => {
                            k.classList.remove('text-gray-500');
                            k.classList.add('text-white');
                        });

                        list.forEach(l => {
                            l.classList.remove('text-gray-500');
                            l.classList.add('text-blue-100');
                        });

                        icons.forEach(i => {
                            i.classList.add('text-[#0052FF]');
                        });

                        if (dot) {
                            dot.classList.remove('border-white', 'bg-black', 'shadow-[0_0_8px_rgba(255,255,255,0.8)]');
                            dot.classList.add('bg-[#0052FF]', 'border-[#0052FF]', 'shadow-[0_0_20px_#0052FF]', 'scale-[2.0]', 'animate-pulse');
                        }
                    } else {
                        // Deactivate Logic (Optional, typically roadmaps stay active)
                    }
                });
            }

            window.addEventListener('scroll', updateRoadmap);
            window.addEventListener('resize', updateRoadmap);
            // Initial call
            setTimeout(updateRoadmap, 100);
        })();
    


        // Copy Address Logic
        function copyAddress(btn) {
            const ca = "0x029a3580A92cAC14457418F46f653B2078DF9469";
            navigator.clipboard.writeText(ca);
            
            const originalText = document.getElementById('ca-text').innerText;
            const originalIcon = btn.querySelector('span:last-child').innerHTML;
            
            document.getElementById('ca-text').innerText = "ADDRESS COPIED";
            document.getElementById('ca-text').classList.add('text-white');
            btn.querySelector('span:last-child').innerHTML = '<iconify-icon icon="lucide:check" class="text-green-400"></iconify-icon>';
            
            setTimeout(() => {
                document.getElementById('ca-text').innerText = originalText;
                document.getElementById('ca-text').classList.remove('text-white');
                btn.querySelector('span:last-child').innerHTML = originalIcon;
            }, 2000);
        }

        // Interactive Tokenomics
        const segments = document.querySelectorAll('.token-bar-segment');
        const display = document.getElementById('token-info-display');
        const titleEl = document.getElementById('token-title');
        const descEl = document.getElementById('token-desc');
        const percentEl = document.getElementById('token-percent');

        // Initial State
        display.classList.add('active');

        segments.forEach(segment => {
            segment.addEventListener('mouseenter', () => {
                const title = segment.getAttribute('data-title');
                const desc = segment.getAttribute('data-desc');
                const percent = segment.getAttribute('data-percent');
                const color = window.getComputedStyle(segment).backgroundColor;

                display.classList.remove('active');
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#0052FF]/10 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>

<div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>

<div className="absolute bottom-[-20%] left-[20%] w-[45vw] h-[45vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZmNzI4MCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')] opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-gray-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/40">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-3 relative z-[110]">

<div className="flex text-lg font-bold text-white font-mono bg-[#0052FF] w-8 h-8 rounded items-center justify-center">R</div>
<span className="font-mono text-sm tracking-widest text-white uppercase font-medium">ROOFER</span>
</div>

<div className="flex items-center gap-2 md:gap-3 relative z-[110]">

<nav className="hidden md:flex items-center gap-1">
<a className="group flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono text-gray-400 hover:text-white transition-all hover:bg-white/5" href="https://roofer.so/team" target="_blank">
<span className="">Team</span>
</a>
<a className="group flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono text-gray-400 hover:text-white transition-all hover:bg-white/5" href="#token">
<span className="">Token</span>
</a>
<a className="group ml-2 flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-mono font-medium text-white bg-[#0052FF]/10 border border-[#0052FF]/20 hover:bg-[#0052FF]/20 hover:border-[#0052FF]/40 transition-all" href="https://roofer.so/vision" target="_blank">
<span className="">Vision</span>
</a>
</nav>

<button className="group flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md border border-white/10 bg-white/5 text-white hover:bg-[#0052FF] hover:border-[#0052FF] hover:shadow-[0_0_15px_rgba(0,82,255,0.4)] transition-all duration-300" onclick="openMenu()">
<svg className="group-hover:rotate-180 transition-transform duration-500 w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line className="" x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>


<div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-between overflow-hidden" id="fullscreen-menu-overlay">

<div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full h-16 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="flex text-lg font-bold text-white font-mono bg-[#0052FF] w-8 h-8 rounded items-center justify-center">R</div>
<span className="font-mono text-sm tracking-widest text-white uppercase font-medium">MENU</span>
</div>
<button className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all" onclick="closeMenu()">
<svg className="group-hover:rotate-90 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 flex flex-col justify-center w-full max-w-7xl mx-auto px-6 py-12">
<nav className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div className="space-y-2">
<p className="text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-6 pl-1">Navigation</p>
<a className="group flex items-baseline gap-4 py-3 border-b border-white/5 hover:border-[#0052FF]/50 transition-colors" href="/" onclick="closeMenu()">
<span className="font-mono text-xs text-[#0052FF] opacity-50 group-hover:opacity-100 transition-opacity">01</span>
<span className="text-4xl md:text-5xl font-mono font-light tracking-tighter text-gray-300 group-hover:text-white transition-colors">HOME</span>
</a>
<a className="group flex items-baseline gap-4 py-3 border-b border-white/5 hover:border-[#0052FF]/50 transition-colors" href="#vision" onclick="closeMenu()">
<span className="font-mono text-xs text-[#0052FF] opacity-50 group-hover:opacity-100 transition-opacity">02</span>
<span className="text-4xl md:text-5xl font-mono font-light tracking-tighter text-gray-300 group-hover:text-white transition-colors">VISION</span>
</a>
<a className="group flex items-baseline gap-4 py-3 border-b border-white/5 hover:border-[#0052FF]/50 transition-colors" href="#token" onclick="closeMenu()">
<span className="font-mono text-xs text-[#0052FF] opacity-50 group-hover:opacity-100 transition-opacity">03</span>
<span className="text-4xl md:text-5xl font-mono font-light tracking-tighter text-gray-300 group-hover:text-white transition-colors">TOKEN</span>
</a>
<a className="group flex items-baseline gap-4 py-3 border-b border-white/5 hover:border-[#0052FF]/50 transition-colors" href="https://roofer.so/team" target="_blank">
<span className="font-mono text-xs text-[#0052FF] opacity-50 group-hover:opacity-100 transition-opacity">04</span>
<span className="text-4xl md:text-5xl font-mono font-light tracking-tighter text-gray-300 group-hover:text-white transition-colors">TEAM</span>
</a>
</div>
<div className="flex flex-col justify-end space-y-8">

<div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
<h4 className="text-sm font-mono text-white mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#0052FF] animate-pulse"></span>
                            Ecosystem
                        </h4>
<div className="grid grid-cols-2 gap-4">
<a className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group" href="https://dexscreener.com/base/0x5fac02aa6fa9d793400a3fb2a9554f0547effa2a09d3b1d2688ae00e56161692" target="_blank">
<div className="p-1.5 rounded bg-white/5 group-hover:bg-[#0052FF] transition-colors"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg></div>
                                DexScreener
                            </a>
<a className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group" href="https://roofer.com" target="_blank">
<div className="p-1.5 rounded bg-white/5 group-hover:bg-[#0052FF] transition-colors"><svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 3C6.72 2 4 3 2.5 4.5c0 0-1.5 1-3 1.5C-1.28 7.15-1.28 8.35 0 9.5c-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></div>
                                Roofer.com
                            </a>
</div>
</div>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="https://x.com/roofonbase" target="_blank"><svg fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></a>
<a className="text-gray-500 hover:text-white transition-colors" href="https://www.instagram.com/roofer._com/" target="_blank"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</nav>
</div>

<div className="px-6 py-4 border-t border-white/10 max-w-7xl mx-auto w-full flex justify-between items-center text-[10px] font-mono text-gray-600">
<span>SECURE CONNECTION ESTABLISHED</span>
<span className="uppercase tracking-widest text-[#0052FF]">System Online</span>
</div>
</div>

</div>
</nav>

<main className="min-h-screen flex flex-col z-10 max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-20 pl-6 relative justify-center">

<button className="animate-fade-in inline-flex hover:bg-[#0052FF]/20 transition-all group cursor-pointer select-none bg-[#0052FF]/10 w-max max-w-full border-[#0052FF]/30 border rounded-full mb-3 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-1.5 gap-y-1.5 items-center" onclick="const ca='0x029a3580A92cAC14457418F46f653B2078DF9469';navigator.clipboard.writeText(ca);const t=document.getElementById('ca-text');const i=this.lastElementChild;if(!this.d){this.d=t.innerText;this.h=i.innerHTML;}t.innerText='$ROOF BASE CONTRACT ADDRESS COPIED TO CLIPBOARD';t.classList.remove('text-[#0052FF]');t.classList.add('text-white');i.innerHTML='&lt;svg xmlns=\'http://www.w3.org/2000/svg\' width=\'10\' height=\'10\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' strokeWidth=\'2\' strokeLinecap=\'round\' strokeLinejoin=\'round\' class=\'text-emerald-400\'&gt;&lt;polyline points=\'20 6 9 17 4 12\'&gt;&lt;/polyline&gt;&lt;/svg&gt;';setTimeout(()=&gt;{t.innerText=this.d;t.classList.add('text-[#0052FF]');t.classList.remove('text-white');i.innerHTML=this.h;},2000);">
<span className="relative flex h-1.5 w-1.5 flex-shrink-0">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0052FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0052FF]"></span>
</span>
<span className="text-[6px] sm:text-[9px] uppercase group-hover:text-blue-300 transition-colors text-[#0052FF] tracking-wider font-mono truncate" id="ca-text">
        LIVE ON BASE: 0x029a3580A92cAC14457418F46f653B2078DF9469
    </span>
<span className="text-[#0052FF] group-hover:text-blue-300 transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="copy" height="10" style={{}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect className="" fill="none" height="14" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</button>
<div className="max-w-4xl space-y-8 animate-fade-in" style={{animationDelay: '0.1s'}}>
<h1 className="text-4xl md:text-6xl lg:text-[64px] leading-[1.1] font-extralight text-white tracking-tight font-mono">
                $ROOF | <span className="gradient-text font-light">Bringing roofing onchain.</span>
</h1>
<p className="md:text-base leading-relaxed text-sm font-light text-gray-400 mix-blend-lighten max-w-2xl">
                We acquire roofing companies and scale them utilizing drones &amp; AI technology. Backed by Mucker Capital, HF0, and Soma Capital: Roofer.com. $ROOF brings our business onchain &amp; democratizes access to the roofing industry.
            </p>

<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="glass-button inline-flex items-center justify-center group hover:border-[#0052FF]/50 hover:bg-[#0052FF]/5 text-xs font-semibold text-white tracking-tight font-mono rounded-sm pt-4 pr-8 pb-4 pl-8" href="https://roofer.com" target="_blank">
                    VIEW ROOFER.COM
                    <svg className="ml-2 group-hover:translate-x-1 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="glass-button inline-flex items-center justify-center group hover:bg-[#0052FF]/10 text-xs text-[#0052FF] tracking-tight font-mono border-[#0052FF] rounded-sm pt-4 pr-8 pb-4 pl-8" href="/vision">
                    READ THE VISION
                    <svg className="ml-2 text-[#0052FF]" data-icon-set="lucide" data-lucide="book-open" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 animate-fade-in mt-28 gap-x-6 gap-y-6" style={{animationDelay: '0.2s'}}>

<div className="metric-card p-6 rounded-lg flex flex-col justify-between h-40 group cursor-default">
<div className="metric-shine"></div>
<div className="metric-icon-bg">
<iconify-icon icon="lucide:coins"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-[#0052FF]/10 border border-[#0052FF]/20 flex items-center justify-center text-[#0052FF]">
<iconify-icon className="" icon="lucide:dollar-sign" width="16"></iconify-icon>
</div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-[#0052FF] font-semibold mb-1">Capital Raised</p>
<p className="font-mono text-3xl text-white font-medium tracking-tight">$7.5M</p>
</div>
</div>

<div className="metric-card p-6 rounded-lg flex flex-col justify-between h-40 group cursor-default">
<div className="metric-shine"></div>
<div className="metric-icon-bg">
<iconify-icon icon="lucide:bar-chart-2"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
<iconify-icon className="" icon="lucide:trending-up" width="16"></iconify-icon>
</div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Annual Revenue</p>
<p className="font-mono text-3xl text-white font-medium tracking-tight">$3.5M</p>
</div>
</div>

<div className="metric-card p-6 rounded-lg flex flex-col justify-between h-40 group cursor-default">
<div className="metric-shine"></div>
<div className="metric-icon-bg">
<iconify-icon icon="lucide:hard-hat"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:hammer" width="16"></iconify-icon>
</div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold mb-1">Projects</p>
<p className="font-mono text-3xl text-white font-medium tracking-tight">2,200+</p>
</div>
</div>

<div className="metric-card p-6 rounded-lg flex flex-col justify-between h-40 group cursor-default">
<div className="metric-shine"></div>
<div className="metric-icon-bg">
<iconify-icon icon="lucide:users"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
<iconify-icon className="" icon="lucide:smile" width="16"></iconify-icon>
</div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-orange-400 font-semibold mb-1">Clients</p>
<p className="font-mono text-3xl text-white font-medium tracking-tight">4,000</p>
</div>
</div>

<div className="metric-card p-6 rounded-lg flex flex-col justify-between h-40 group cursor-default">
<div className="metric-shine"></div>
<div className="metric-icon-bg">
<iconify-icon icon="lucide:globe"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" fill="currentColor" r="3"></circle></svg>
</div>
</div>
<p className="font-mono text-[10px] uppercase tracking-widest text-blue-500 font-semibold mb-1">Network</p>
<p className="font-mono text-3xl text-white font-medium tracking-tight">Base</p>
</div>
</div>
</div>
</main>

<section className="overflow-hidden border-white/5 border-t pt-24 pb-24 relative" id="vision">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 space-y-8">
<h2 className="text-2xl md:text-3xl font-extralight text-white font-mono leading-tight">
<span className="gradient-text font-normal">Roofing</span> doesn't care about crypto cycles.
                    </h2>
<p className="text-sm leading-relaxed text-gray-400">
                        $ROOF is the on-chain avenue to access a $150B+ market. The roofing industry is highly fragmented (90%+), recession resilient (15–20 year replacement cycles), and offers double-digit EBITDA margins.
                    </p>
<p className="text-sm leading-relaxed text-gray-400">
                        PE has started to roll up the roofing industry. But we don't believe in gating these investment opportunities. We’re bringing the roofing rollup model onchain. That's why we're here.
                    </p>
<div className="p-6 glass-panel rounded-sm mt-8 border-l-2 border-l-[#0052FF]">
<h4 className="font-mono text-sm text-white mb-2 flex items-center gap-2">
<svg className="text-[#0052FF]" data-icon-set="lucide" data-lucide="zap" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            The Rollup Edge
                        </h4>
<p className="text-xs text-gray-500 leading-relaxed">
                            Traditional roofing is manual. We utilize drones + AI inspections to increase agility, achieve lower costs at scale: expanding our margins.
                        </p>
</div>
</div>

<div className="lg:col-span-6 flex lg:py-0 pt-12 pb-12 justify-center">
<div className="md:w-[400px] md:h-[400px] flex w-[300px] h-[300px] relative items-center justify-center">

<div className="border-white/5 border rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-8 border border-dashed border-[#0052FF]/20 rounded-full"></div>

<div className="absolute inset-[15%] rounded-full z-0 opacity-60 pointer-events-none" style={{animation: 'spin-slow 30s linear infinite'}}>
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">
<defs>

<path d="M -2 -2 L 2 0 L -2 2" fill="none" id="arrow-cw" stroke="#0052FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</defs>
<g transform="translate(50, 50)">

<use href="#arrow-cw" transform="rotate(0) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(36) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(72) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(108) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(144) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(180) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(216) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(252) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(288) translate(0, -44)"></use>
<use href="#arrow-cw" transform="rotate(324) translate(0, -44)"></use>
</g>
</svg>
</div>

<div className="absolute w-36 h-36 flex items-center justify-center z-10">

<div className="absolute w-full h-full" style={{animation: 'reverse-spin 30s linear infinite'}}>
<svg className="" height="100%" viewbox="0 0 100 100" width="100%">
<defs>
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circle"></path>
</defs>
<text className="" fill="#fff" fontFamily="'IBM Plex Mono', monospace" fontSize="7.5" letter-spacing="2">
<textpath className="" xlink:href="#circle">
                            $ROOF FLYWHEEL • $ROOF FLYWHEEL •
                        </textpath>
</text>
</svg>
</div>

<div className="w-16 h-16 rounded-full bg-[#0052FF] relative flex items-center justify-center shadow-[0_0_30px_#0052FF] overflow-hidden">
<div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')]"></div>
<div className="absolute w-full h-full border border-white/30 rounded-full animate-ping opacity-20"></div>
<span className="relative z-10 font-mono font-bold text-white text-xl">R</span>
</div>
</div>

<div className="absolute inset-0 pointer-events-none">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20">
<div className="w-36 md:w-44 p-3 glass-panel rounded text-center border border-[#0052FF]/20 bg-gray-950/80 shadow-[0_0_20px_-5px_rgba(0,82,255,0.2)] backdrop-blur-md">
<div className="text-[#0052FF] mb-1 flex justify-center"><svg className="mx-auto" data-icon-set="lucide" data-lucide="coins" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" fill="none" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M7 6h1v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m16.71 13.88l.7.71l-2.82 2.82" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-[10px] md:text-xs leading-tight text-white font-mono" style={{}}>Raise Onchain (ICO/Vault/SSLP)</div>
</div>
</div>

<div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20">
<div className="w-36 md:w-44 p-3 glass-panel rounded text-center border border-[#0052FF]/20 bg-gray-950/80 shadow-[0_0_20px_-5px_rgba(0,82,255,0.2)] backdrop-blur-md">
<div className="text-cyan-400 mb-1 flex justify-center"><svg className="mx-auto" data-icon-set="lucide" data-lucide="building-2" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10 6h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10 10h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10 14h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M10 18h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-[10px] md:text-xs leading-tight text-white font-mono">Acquire Profitable Businesses</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 pointer-events-auto z-20">
<div className="w-36 md:w-44 p-3 glass-panel rounded text-center border border-[#0052FF]/20 bg-gray-950/80 shadow-[0_0_20px_-5px_rgba(0,82,255,0.2)] backdrop-blur-md">
<div className="text-emerald-400 mb-1 flex justify-center"><svg className="mx-auto" data-icon-set="lucide" data-lucide="trending-up" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><polyline fill="none" points="16 7 22 7 22 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg></div>
<div className="text-[10px] md:text-xs leading-tight text-white font-mono">IRL Cash Flows &amp; Yield</div>
</div>
</div>

<div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-20">
<div className="md:w-44 glass-panel text-center bg-gray-950/80 w-36 border-[#0052FF]/20 border rounded pt-3 pr-3 pb-3 pl-3 shadow-[0_0_20px_-5px_rgba(0,82,255,0.2)] backdrop-blur-md">
<div className="text-orange-400 mb-1 flex justify-center"><svg className="mx-auto" data-icon-set="lucide" data-lucide="flame" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3l-1.42-2.84c-.55-1.1.9-2.3 2.3-1.63L16.25 7a2.5 2.5 0 0 0 2.25 4v0a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 0 0 5v0a2.5 2.5 0 0 1-2.5 2.5h-5A4.5 4.5 0 0 1 6.5 19v-2.1a2 2 0 0 1 2-2.4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="text-[10px] md:text-xs leading-tight text-white font-mono">Provide Value to $ROOF</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="service">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-12">
<h2 className="text-2xl md:text-4xl font-extralight text-white font-mono mb-2">The Service</h2>
<p className="text-sm text-gray-400 max-w-2xl font-light">
                    The Web2 business process that fuels the value of <a className="text-gray-200 hover:text-[#0052FF] transition-colors underline decoration-white/20 hover:decoration-[#0052FF]" href="https://roofer.com" target="_blank">Roofer.com</a> and <a className="text-gray-200 hover:text-[#0052FF] transition-colors underline decoration-white/20 hover:decoration-[#0052FF]" href="https://dexscreener.com/base/0x5fac02aa6fa9d793400a3fb2a9554f0547effa2a09d3b1d2688ae00e56161692" target="_blank">$ROOF</a>.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 gap-x-6 gap-y-6">

<div className="glass-panel p-8 rounded-sm group relative overflow-hidden flex flex-col h-full border-t border-white/10 hover:border-[#0052FF]/50 transition-colors duration-500">
<div className="absolute top-5 right-5 z-10">
<span className="font-mono text-xs font-bold text-[#0052FF] bg-[#0052FF]/5 border border-[#0052FF]/20 px-2 py-1 rounded shadow-[0_0_15px_rgba(0,82,255,0.15)] backdrop-blur-sm">01</span>
</div>
<div className="h-32 w-full flex items-center justify-center mb-6 relative">
<div className="relative w-24 h-24 opacity-60 group-hover:opacity-100 transition-opacity">
<svg className="text-gray-600 stroke-1" fill="none" stroke="currentColor" viewbox="0 0 100 60">
<path d="M10 50 L50 10 L90 50"></path>
<path d="M20 50 L20 60 L80 60 L80 50" stroke-opacity="0.3"></path>
</svg>
<div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0052FF] to-transparent animate-scan"></div>
<div className="absolute top-[10px] left-[48px] w-2 h-2 border border-[#0052FF] rounded-full animate-ping"></div>
</div>
</div>
<h3 className="text-lg text-white font-mono mb-3">Free Inspection</h3>
<p className="leading-relaxed text-xs font-light text-gray-400" style={{}}>Receive an inspection of your roof via one of our proprietary drones &amp; receive a consultation with one of our roofing specialists.</p>
</div>

<div className="glass-panel p-8 rounded-sm group relative overflow-hidden flex flex-col h-full border-t border-white/10 hover:border-cyan-500/50 transition-colors duration-500">
<div className="absolute top-5 right-5 z-10">
<span className="font-mono text-xs font-bold text-cyan-500 bg-cyan-500/5 border border-cyan-500/20 px-2 py-1 rounded shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-sm">02</span>
</div>
<div className="h-32 w-full flex items-center justify-center mb-6 gap-4">
<div className="w-8 h-12 border border-white/20 rounded-sm bg-gray-800/50 animate-float-1 group-hover:border-cyan-500 transition-colors"></div>
<div className="w-8 h-12 border border-white/20 rounded-sm bg-gray-800/50 animate-float-2 group-hover:border-cyan-500 transition-colors" style={{marginTop: '15px'}}></div>
<div className="w-8 h-12 border border-white/20 rounded-sm bg-gray-800/50 animate-float-3 group-hover:border-cyan-500 transition-colors" style={{marginTop: '-5px'}}></div>
</div>
<h3 className="text-lg text-white font-mono mb-3">Choose Your Materials</h3>
<p className="leading-relaxed text-xs font-light text-gray-400" style={{}}>Materials are suggested by our specialists based on the drone inspection and AI intelligence. Together, we find the ideal construction for your needs.</p>
</div>

<div className="glass-panel p-8 rounded-sm group relative overflow-hidden flex flex-col h-full border-t border-white/10 hover:border-emerald-500/50 transition-colors duration-500">
<div className="absolute top-5 right-5 z-10">
<span className="font-mono text-xs font-bold text-emerald-500 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded shadow-[0_0_15px_rgba(16,185,129,0.15)] backdrop-blur-sm">03</span>
</div>
<div className="h-32 w-full flex items-center justify-center mb-6 relative">
<svg className="w-24 h-24 text-gray-700" viewbox="0 0 100 100">
<path d="M10 60 L50 20 L90 60" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M20 60 L20 80 L80 80 L80 60" fill="none" stroke="currentColor" stroke-opacity="0.3" strokeWidth="2"></path>

<path className="animate-check group-hover:opacity-100 opacity-0 transition-opacity" d="M35 50 L45 60 L65 40" fill="none" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<h3 className="text-lg text-white font-mono mb-3">100% Satisfaction</h3>
<p className="leading-relaxed text-xs font-light text-gray-400" style={{}}>Your service is completed by our specialists. Every service is not rendered complete until the client is fully satisfied.</p>
</div>
</div>

<div className="mb-12 relative group/section">

<div className="absolute left-0 md:left-[19px] top-[-3rem] bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block pointer-events-none">
</div>

<div className="flex items-center gap-4 mb-6 pl-0 md:pl-12">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0052FF]/5 border border-[#0052FF]/20 backdrop-blur-sm shadow-[0_0_15px_-5px_#0052FF]">
<div className="w-1.5 h-1.5 rounded-full bg-[#0052FF] animate-pulse"></div>
<span className="text-[10px] uppercase font-semibold text-[#0052FF] tracking-widest font-mono">Provided Services</span>
</div>
<div className="h-[1px] flex-1 bg-gradient-to-r from-[#0052FF]/20 via-white/5 to-transparent"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pl-0 md:pl-12 mb-6">

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Residential Roofing', 'Durable. Weatherproof. Built to protect what matters most.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Residential</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Roof Inspection', 'Spot issues early with a roof inspection—and protect your home with confidence.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
<path d="m12 12 4 10 1.7-4.3L22 16Z"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Inspection</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Insurance Claim', 'We simplify roof claims so you get paid—no stress, just results.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Insurance</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Commercial Roofing', 'Experts in flat, TPO, and EPDM roofing—built for performance and long-term durability.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect>
<path d="M9 22v-4h6v4"></path>
<path d="M8 6h.01"></path>
<path d="M16 6h.01"></path>
<path d="M12 6h.01"></path>
<path d="M12 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 10h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 10h.01"></path>
<path d="M8 14h.01"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Commercial</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Waterproofing', 'Stop leaks before they start—professional waterproofing that lasts.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z">
</path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Waterproofing</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Roof Repair', 'Restore your roof fast—leaks, damage, wear and tear, fixed right.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"></path>
<path d="m16 16 6-6"></path>
<path d="m8 8 6-6"></path>
<path d="m9 7 8 8"></path>
<path d="m21 11-8-8"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Repair</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Gutter Installation', 'Protect your home with seamless, custom-fit gutters that keep water away.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="m8 17 4 4 4-4"></path>
<path d="M3 13h18"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Gutters</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Roof Replacement', 'Roofing a new home or replacing the old? We do it all—expertly and efficiently.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
<path d="M3 3v5h5"></path>
<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
<path d="M16 16h5v5"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Replacement</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>

<div className="group relative flex items-center justify-between p-3.5 rounded-sm border border-white/5 bg-gray-900/40 hover:bg-[#0052FF]/5 hover:border-[#0052FF]/30 transition-all duration-300 cursor-crosshair overflow-hidden" onmouseenter="showServiceDesc('Hail Damage Roofing', 'Restore your roof after hail damage—quick, expert help starts with a free inspection.')" onmouseleave="hideServiceDesc()">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNDBMMCAwTDQwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwNTJGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity duration-500">
</div>
<div className="flex items-center gap-3 relative z-10">
<div className="text-gray-500 group-hover:text-[#0052FF] transition-colors duration-300">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.9A7 7 0 1 1 15.7 8h1.8a4.5 4.5 0 0 1 2.5 8.2"></path>
<path d="M16 14v2"></path>
<path d="M8 14v2"></path>
<path d="M16 20h.01"></path>
<path d="M8 20h.01"></path>
<path d="M12 16v2"></path>
<path d="M12 22h.01"></path>
</svg>
</div>
<span className="font-mono text-xs text-gray-400 group-hover:text-white uppercase tracking-wider transition-colors duration-300">Hail Damage</span>
</div>
<div className="relative z-10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#0052FF]">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</div>

<div className="pl-0 md:pl-12">
<div className="overflow-hidden flex md:px-8 group-hover:border-[#0052FF]/20 transition-colors bg-black/60 w-full h-20 border-white/5 border rounded-sm pr-4 pl-4 relative backdrop-blur-md items-center">

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 bg-[length:100%_4px,3px_100%] pointer-events-none opacity-40">
</div>

<div className="w-full flex justify-between items-center transition-opacity duration-300" id="service-desc-placeholder">
<span className="text-gray-700 text-[10px] font-mono tracking-[0.2em] uppercase animate-pulse">
                    // hover to reveal service info
                </span>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-gray-800"></div>
<div className="w-1 h-1 rounded-full bg-gray-800"></div>
<div className="w-1 h-1 rounded-full bg-gray-800"></div>
</div>
</div>

<div className="flex md:px-8 transition-all duration-300 bg-gray-950/95 border-[#0052FF] border-l-2 pr-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-between" id="service-desc-container">
<div className="flex flex-col relative z-10 w-full mr-4">
<div className="flex items-center gap-3 mb-1">
<span className="text-[#0052FF] text-[10px] font-mono animate-pulse">&gt;&gt;</span>
<h4 className="text-white font-mono text-sm tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" id="service-desc-title">Roof Replacement</h4>
</div>
<p className="text-gray-400 text-xs font-light font-mono pl-6 leading-relaxed line-clamp-2" id="service-desc-text">Roofing a new home or replacing the old? We do it all—expertly and efficiently.</p>
</div>
<div className="flex items-center gap-4 shrink-0">
<a className="hidden" href="https://roofer.com" target="_blank">
<span className="text-[10px] font-mono uppercase tracking-widest font-semibold">View Service</span>
<svg className="lucide lucide-arrow-up-right group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>

<div className="hidden md:flex shrink-0 bg-[#0052FF]/5 w-8 h-8 border-[#0052FF]/20 border rounded items-center justify-center">
<div className="w-1.5 h-1.5 bg-[#0052FF] rounded-full shadow-[0_0_8px_#0052FF] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>

</div>


</div>
</section>

<section className="border-y border-white/5 pt-24 pb-24 relative overflow-hidden">

<div className="aura-background-component absolute top-0 left-0 w-full h-full -z-20 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>

<div className="absolute inset-0 bg-black/75 -z-10 pointer-events-none"></div>
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative z-10">
<h2 className="text-2xl md:text-3xl font-extralight text-white font-mono mb-12 tracking-tight">Token Distribution</h2>

<div className="flex justify-between items-end mb-3 px-1 font-mono text-xs">
<div className="text-left">
<span className="text-gray-500 block text-[10px] tracking-widest uppercase mb-1">Total Supply</span>
<span className="text-white font-medium text-sm md:text-base">100,000,000 Coins</span>
</div>
<div className="text-right text-[#0052FF] animate-pulse cursor-default transition-all duration-300 h-6 flex items-end" id="dist-detail-display">
                Click to show details
            </div>
</div>

<div className="bg-gray-900/50 border-white/10 border rounded-lg mb-8 pt-2 pr-2 pb-2 pl-2">
<div className="flex w-full h-12 rounded overflow-hidden cursor-pointer bg-gray-800/50">

<div className="h-full bg-sky-300 hover:bg-sky-200 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('ICO', ' 10%', '10M $ROOF')" style={{width: '10%'}} title="ICO"></div>

<div className="h-full bg-blue-400 hover:bg-blue-300 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('Team', ' 30%', '30M $ROOF')" style={{width: '30%'}} title="Team"></div>

<div className="h-full bg-blue-500 hover:bg-blue-400 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('Liquidity', ' 30%', '30M $ROOF')" style={{width: '30%'}} title="Liquidity"></div>

<div className="h-full bg-blue-600 hover:bg-blue-500 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('SSLP', ' 10%', '10M $ROOF')" style={{width: '10%'}} title="SSLP"></div>

<div className="h-full bg-blue-700 hover:bg-blue-600 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('Community Incentives', ' 10%', '10M $ROOF')" style={{width: '10%'}} title="Community Incentives"></div>

<div className="h-full bg-blue-800 hover:bg-blue-700 relative transition-all duration-200 border-r border-gray-900/50" onclick="updateDistInfo('Secondary Markets', ' 8%', '8M $ROOF')" style={{width: '8%'}} title="Secondary Markets"></div>

<div className="h-full bg-blue-950 hover:bg-blue-900 relative transition-all duration-200" onclick="updateDistInfo('Noice EF', ' 2%', '2M $ROOF')" style={{width: '2%'}} title="Noice EF"></div>
</div>
</div>


</div>
</section>

<section className="overflow-hidden min-h-[600px] flex border-white/5 border-b pt-20 pb-20 relative items-center">

<div className="grid-physics-container">
<div className="grid-floor"></div>
</div>
<div className="z-10 w-full max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl text-white tracking-tight font-extralight text-center mb-16"><span className="gradient-text font-light">Execution</span> Roadmap</h2>
<div className="relative roadmap-container">

<div className="md:left-1/2 md:-translate-x-1/2 overflow-hidden bg-white/5 w-[2px] rounded-full absolute top-0 left-[19px] h-[calc(100%-11.5rem)] md:h-[calc(100%-6rem)]">
<div className="roadmap-line-fill transition-[height] duration-75 ease-linear bg-[#0052FF] w-full h-0" id="scroll-line" style={{height: '0%'}}></div>
</div>

<div className="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-20 transition-all duration-700" data-index="0">
<div className="hidden md:block text-right pt-2 group">
<span className="font-mono text-xs tracking-widest mb-2 block transition-colors duration-500 roadmap-kicker">INITIAL</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">The Beginning</h3>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot"></div>
<div className="md:pl-0 pt-1 pl-16">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">INITIAL</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">The Beginning</h3>
</div>
<ul className="space-y-4 text-sm font-light transition-colors duration-500 roadmap-list">
<li className="flex items-center gap-3"><iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> Raised $7.5M Seed Capital</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> Acquired Multiple Roofing Businesses</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> Achieved $3.5M ARR</li>
</ul>
</div>
</div>

<div className="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-20 transition-all duration-700" data-index="1">
<div className="order-2 md:order-1 pl-16 md:pl-0 pt-1 md:text-right">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">Q4 2025</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">Web3 Integration</h3>
</div>
<ul className="md:flex md:flex-col md:items-end transition-colors duration-500 roadmap-list text-sm font-light space-y-4">
<li className="flex items-center gap-3"><span className="hidden md:inline">Successful ICO Raise</span> <iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> <span className="md:hidden">Successful ICO Raise</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">$ROOF TGE on Base</span> <iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> <span className="md:hidden">$ROOF TGE on Base</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">Next Acquisition LOI</span> <iconify-icon className="text-xs transition-colors duration-500 roadmap-icon" icon="lucide:check"></iconify-icon> <span className="md:hidden">Next Acquisition LOI</span></li>
</ul>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot order-1"></div>
<div className="hidden md:block order-3 pt-2">
<span className="block text-xs tracking-widest font-mono mb-2 transition-colors duration-500 roadmap-kicker">Q4 2025</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">Web3 Integration</h3>
</div>
</div>

<div className="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-20 transition-all duration-700" data-index="2">
<div className="hidden md:block text-right pt-2">
<span className="font-mono text-xs tracking-widest mb-2 block transition-colors duration-500 roadmap-kicker">Q1 2026</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">Expansion</h3>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot"></div>
<div className="md:pl-0 pt-1 pl-16">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">Q1 2026</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">Expansion</h3>
</div>
<ul className="space-y-4 text-sm font-light transition-colors duration-500 roadmap-list">
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> USDRoof Beta Initiated</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> Next Roofing Acquisition Closes</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> Achieve $10M annualized revenue</li>
</ul>
</div>
</div>

<div className="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-20 transition-all duration-700" data-index="3">
<div className="order-2 md:order-1 pl-16 md:pl-0 pt-1 md:text-right">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">Q2 2026</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">Active Growth</h3>
</div>
<ul className="space-y-4 text-sm font-light md:flex md:flex-col md:items-end transition-colors duration-500 roadmap-list">
<li className="flex items-center gap-3"><span className="hidden md:inline">$30M+ Under LOI</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">$30M+ Under LOI</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">$10M Annual Revenue</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">$10M Annual Revenue</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">USDRoof Public Launch (Vault)</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">USDRoof Public Launch (Vault)</span></li>
</ul>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot order-1"></div>
<div className="hidden md:block order-3 pt-2">
<span className="block text-xs tracking-widest font-mono mb-2 transition-colors duration-500 roadmap-kicker">Q2 2026</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">Active Growth</h3>
</div>
</div>

<div className="roadmap-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-20 transition-all duration-700" data-index="4">
<div className="hidden md:block text-right pt-2">
<span className="font-mono text-xs tracking-widest mb-2 block transition-colors duration-500 roadmap-kicker">Q3 2026</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">Scaling</h3>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot"></div>
<div className="md:pl-0 pt-1 pl-16">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">Q3 2026</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">Scaling</h3>
</div>
<ul className="space-y-4 text-sm font-light transition-colors duration-500 roadmap-list">
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> USDRoof Public Launch (Vault)</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> $40M+ Revenue</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> $100M+ Acquisition Run Rate</li>
</ul>
</div>
</div>

<div className="roadmap-item grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 transition-all duration-700 relative gap-x-8 gap-y-8" data-index="5">
<div className="order-2 md:order-1 pl-16 md:pl-0 pt-1 md:text-right">
<div className="md:hidden mb-4">
<span className="font-mono text-xs tracking-widest roadmap-kicker transition-colors duration-500">Q4 2026+</span>
<h3 className="text-xl font-mono roadmap-title transition-colors duration-500">The Future</h3>
</div>
<ul className="md:flex md:flex-col md:items-end transition-colors duration-500 roadmap-list text-sm font-light space-y-4">
<li className="flex items-center gap-3"><span className="hidden md:inline">Flywheel Compounds</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">Flywheel Compounds</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">PE Offerings Expand</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">PE Offerings Expand</span></li>
<li className="flex items-center gap-3"><span className="hidden md:inline">Acquisitions Continue</span> <iconify-icon className="text-[10px] transition-colors duration-500 roadmap-icon" icon="lucide:circle"></iconify-icon> <span className="md:hidden">Acquisitions Continue</span></li>
</ul>
</div>

<div className="absolute left-[16px] md:left-1/2 w-2 h-2 rounded-full border flex items-center justify-center z-20 md:-translate-x-1/2 transition-all duration-500 roadmap-dot order-1"></div>
<div className="hidden md:block order-3 pt-2">
<span className="block text-xs tracking-widest font-mono mb-2 transition-colors duration-500 roadmap-kicker">Q4 2026+</span>
<h3 className="text-2xl font-mono tracking-tight transition-colors duration-500 roadmap-title">The Future</h3>
</div>
</div>
</div>


</div>
</section>

<footer className="overflow-hidden bg-black pt-0 pb-8 relative">
<style className="">
        @keyframes ticker-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-ticker-scroll {
            animation: ticker-scroll 40s linear infinite;
        }
        .text-glass-stroke {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
            color: transparent;
        }
    </style>

<div className="relative w-full border-y border-white/5 bg-gray-950/30 backdrop-blur-xl mb-12 overflow-hidden z-10 group">

<div className="-top-[10%] -bottom-[10%] flex overflow-hidden absolute right-0 left-0 items-center justify-center">
<div className="flex items-center py-10 w-max animate-ticker-scroll hover:[animation-play-state:paused] cursor-default relative z-10">


</div>
</div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0052FF]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0052FF]/40 to-transparent"></div>

<div className="flex items-center py-10 w-max animate-ticker-scroll hover:[animation-play-state:paused] cursor-default">

<div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
<div className="flex items-center gap-4 group/item">
<div className="w-2 h-2 rounded-full bg-[#0052FF] shadow-[0_0_15px_#0052FF] animate-pulse"></div>
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter group-hover/item:text-[#0052FF] transition-colors duration-300">$ROOF</span>
</div>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
<span className="text-4xl md:text-6xl font-mono font-semibold text-glass-stroke tracking-tighter hover:text-white/20 transition-colors duration-300">REAL WORLD ASSETS</span>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="flex items-center gap-4">
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter">BASE</span>
<span className="px-2 py-1 rounded-sm text-[10px] font-mono border border-white/10 text-gray-500 bg-white/5 tracking-widest uppercase">L2 Native</span>
</div>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-4xl md:text-6xl font-mono font-semibold text-glass-stroke tracking-tighter hover:text-white/20 transition-colors duration-300">LIQUIDITY</span>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="flex items-center gap-4">
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter">SCALING</span>
<svg className="" fill="none" height="32" stroke="#0052FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>

<div className="flex items-center gap-16 md:gap-32 px-8 md:px-16">
<div className="flex items-center gap-4 group/item">
<div className="w-2 h-2 rounded-full bg-[#0052FF] shadow-[0_0_15px_#0052FF] animate-pulse"></div>
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter group-hover/item:text-[#0052FF] transition-colors duration-300">$ROOF</span>
</div>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-4xl md:text-6xl font-mono font-semibold text-glass-stroke tracking-tighter hover:text-white/20 transition-colors duration-300">REAL WORLD ASSETS</span>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="flex items-center gap-4">
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter">BASE</span>
<span className="px-2 py-1 rounded-sm text-[10px] font-mono border border-white/10 text-gray-500 bg-white/5 tracking-widest uppercase">L2 Native</span>
</div>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-4xl md:text-6xl font-mono font-semibold text-glass-stroke tracking-tighter hover:text-white/20 transition-colors duration-300">LIQUIDITY</span>
<svg className="text-gray-800 -rotate-12" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="flex items-center gap-4">
<span className="text-4xl md:text-6xl font-mono font-semibold text-white tracking-tighter">SCALING</span>
<svg className="" fill="none" height="32" stroke="#0052FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
</div>

<div className="absolute left-0 top-0 h-full w-24 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 h-full w-24 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
</div>

<div className="z-20 flex gap-8 max-w-7xl mr-auto mb-8 ml-auto pr-6 pl-6 relative gap-x-8 gap-y-8 items-center justify-center">
<a aria-label="Instagram" className="text-gray-400 hover:text-[#0052FF] transition-colors duration-300" href="https://www.instagram.com/roofer._com/" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Founder's X" className="text-gray-400 hover:text-[#0052FF] transition-colors duration-300" href="https://x.com/rollupceo" target="_blank">

<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
<a aria-label="Official X" className="text-gray-400 hover:text-[#0052FF] transition-colors duration-300" href="https://x.com/roofonbase" target="_blank">
<svg className="" fill="currentColor" height="18" stroke="none" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>
</a>
<a aria-label="Facebook" className="text-gray-400 hover:text-[#0052FF] transition-colors duration-300" href="https://www.facebook.com/rooferdotcom/" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>

<div className="max-w-7xl mx-auto px-6 relative z-20">
<div className="hidden"></div>
<div className="flex flex-col md:flex-row text-[10px] text-gray-600 font-mono border-white/5 border-t pt-8 items-center justify-between">
<p className="">© 2025 Roofer.com. All rights reserved.</p>
<div className="flex items-center gap-6 py-4 md:py-0">
<a className="hover:underline hover:text-gray-400 transition-colors" href="/vision">Vision.</a>
<a className="hover:underline hover:text-gray-400 transition-colors" href="/team">Team.</a>
<a className="hover:underline hover:text-gray-400 transition-colors" href="/terms">Terms.</a>
</div>
<p className="">Built on Base. Powered by Community.</p>
</div>
</div>
</footer>


    </>
  );
}
