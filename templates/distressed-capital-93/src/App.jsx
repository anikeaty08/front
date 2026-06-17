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



        // Initialize Icons
        lucide.createIcons();

        // Simple Router
        function router(pageId) {
            // Hide all pages
            const pages = ['home', 'portfolio', 'thesis', 'restructuring'];
            pages.forEach(id => {
                const el = document.getElementById('page-' + id);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });

            // Show selected page
            const activePage = document.getElementById('page-' + pageId);
            if(activePage) {
                activePage.classList.remove('hidden');
                activePage.classList.add('block');
                window.scrollTo(0, 0);
            }

            // Update Nav State
            // (Simplified: In a real app we'd map buttons to IDs more strictly)
        }

        // Accordion Logic
        document.querySelectorAll('.accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const content = trigger.querySelector('.accordion-content');
                const isExpanded = content.style.maxHeight;
                
                // Close all others
                document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
                document.querySelectorAll('.accordion-trigger').forEach(t => {
                    t.classList.remove('bg-[#E3FF00]', 'text-black');
                    const icon = t.querySelector('[data-lucide="plus"]');
                    if(icon) icon.style.transform = 'rotate(0deg)';
                });

                if (!isExpanded) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    trigger.classList.add('bg-[#E3FF00]', 'text-black');
                    const icon = trigger.querySelector('[data-lucide="plus"]');
                    if(icon) icon.style.transform = 'rotate(45deg)';
                }
            });
        });

        // Initialize Home
        router('home');
    
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
      

<div className="fixed inset-0 z-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 bg-[#050505] border-b border-white/10">

<div className="flex justify-between items-center px-6 py-4 md:px-12 relative z-20">
<button className="flex items-center gap-3 group cursor-pointer focus:outline-none" onclick="router('home')">
<div className="w-5 h-5 bg-[#E3FF00] group-hover:rotate-45 transition-transform duration-300"></div>
<span className="font-headline text-xl tracking-tighter">VECTOR CAPITAL</span>
</button>
<div className="hidden md:flex gap-10 text-xs font-medium tracking-wide text-neutral-400">
<button className="nav-link hover:text-white transition-colors uppercase" onclick="router('portfolio')">Portfolio</button>
<button className="nav-link hover:text-white transition-colors uppercase" onclick="router('thesis')">Thesis</button>
<button className="nav-link hover:text-white transition-colors uppercase" onclick="router('restructuring')">Restructuring</button>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 text-[10px] text-neutral-500 font-mono border-r border-white/10 pr-4">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    NY_DATA_CENTER: ONLINE
                </div>
<button className="text-xs border border-white/20 px-5 py-2 hover:bg-[#E3FF00] hover:text-black hover:border-[#E3FF00] transition-colors uppercase font-bold">
                    L.P. Login
                </button>
</div>
</div>

<div className="flex overflow-hidden bg-black border-y border-white/10 h-8 items-center relative">
<div className="animate-marquee whitespace-nowrap flex gap-16 text-[10px] font-mono tracking-wider">
<span className="text-neutral-500">MARKET_SENTIMENT: <span className="text-red-500">EXTREME FEAR</span></span>
<span>BDI_INDEX <span className="text-red-500">▼ 1,240 (-4.2%)</span></span>
<span>CRUDE_WTI <span className="text-green-500">▲ 78.40 (+1.2%)</span></span>
<span>STEEL_HRC <span className="text-red-500">▼ 850.00 (-2.1%)</span></span>
<span>VIX_VOLATILITY <span className="text-green-500">▲ 24.12 (+8.4%)</span></span>
<span>EUR/USD <span className="text-neutral-400">0.9812</span></span>
<span>HIGH_YIELD_SPREAD <span className="text-green-500">▲ 480bps</span></span>

<span className="text-neutral-500 ml-16">MARKET_SENTIMENT: <span className="text-red-500">EXTREME FEAR</span></span>
<span>BDI_INDEX <span className="text-red-500">▼ 1,240 (-4.2%)</span></span>
<span>CRUDE_WTI <span className="text-green-500">▲ 78.40 (+1.2%)</span></span>
<span>STEEL_HRC <span className="text-red-500">▼ 850.00 (-2.1%)</span></span>
<span>VIX_VOLATILITY <span className="text-green-500">▲ 24.12 (+8.4%)</span></span>
</div>
</div>
</nav>

<div className="pt-32 flex-grow relative z-10" id="app-container">

<main className="page-transition block" id="page-home">

<header className="container mx-auto px-6 md:px-12 py-12 md:py-24 border-b border-white/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div>
<div className="inline-block bg-[#E3FF00] text-black text-[10px] font-bold px-2 py-1 mb-6 animate-pulse">
                            FUND IV OPEN FOR CAPITAL
                        </div>
<h1 className="font-headline text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter mb-8">
                            BUY THE<br/><span className="text-neutral-800">BLOOD.</span>
</h1>
<p className="text-neutral-400 font-mono text-sm md:text-base max-w-md border-l-2 border-[#E3FF00] pl-6 leading-relaxed">
                            Vector Capital specializes in distressed industrial acquisition. We provide liquidity when banks retreat and engineer turnarounds when management fails.
                        </p>
</div>

<div className="w-full">
<div className="border border-white/10 bg-[#0A0A0A]">
<div className="flex justify-between items-center p-4 border-b border-white/10 bg-neutral-900/50">
<span className="text-xs font-bold text-neutral-400">MACRO DASHBOARD</span>
<i className="w-4 h-4 text-[#E3FF00]" data-lucide="activity"></i>
</div>
<div className="grid grid-cols-2">

<div className="p-6 border-r border-b border-white/10">
<div className="text-[10px] text-neutral-500 mb-1">GLOBAL SHIPPING</div>
<div className="text-xl font-mono font-bold text-red-500">-12.4%</div>
<svg className="w-full h-8 mt-2 sparkline" viewbox="0 0 100 20">
<path d="M0 5 L20 10 L40 2 L60 15 L80 12 L100 18" fill="none" stroke="#ef4444" strokeWidth="1.5"></path>
</svg>
</div>

<div className="p-6 border-b border-white/10">
<div className="text-[10px] text-neutral-500 mb-1">DISTRESSED DEBT</div>
<div className="text-xl font-mono font-bold text-green-500">+24.8%</div>
<svg className="w-full h-8 mt-2 sparkline" viewbox="0 0 100 20">
<path d="M0 15 L20 12 L40 18 L60 5 L80 8 L100 2" fill="none" stroke="#22c55e" strokeWidth="1.5"></path>
</svg>
</div>

<div className="p-6 border-r border-white/10">
<div className="text-[10px] text-neutral-500 mb-1">INDUSTRIAL OUTPUT</div>
<div className="text-xl font-mono font-bold text-neutral-300">-2.1%</div>
<svg className="w-full h-8 mt-2 sparkline" viewbox="0 0 100 20">
<path d="M0 10 L30 10 L60 8 L100 12" fill="none" stroke="#737373" strokeWidth="1.5"></path>
</svg>
</div>

<div className="p-6">
<div className="text-[10px] text-neutral-500 mb-1">VOLATILITY (VIX)</div>
<div className="text-xl font-mono font-bold text-[#E3FF00]">HIGH</div>
<div className="w-full bg-neutral-800 h-1 mt-4">
<div className="bg-[#E3FF00] h-full w-[85%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="container mx-auto px-6 md:px-12 py-24">
<div className="flex items-center gap-4 mb-12">
<h2 className="font-headline text-3xl md:text-4xl">ACTIVE DEAL FLOW</h2>
<div className="h-[1px] flex-grow bg-white/10"></div>
<span className="text-xs font-mono text-neutral-500">Q3_2024</span>
</div>
<div className="border border-white/10 bg-[#0A0A0A]">

<div className="group border-b border-white/10 hover:bg-[#E3FF00] hover:text-black transition-colors cursor-pointer accordion-trigger">
<div className="grid grid-cols-12 p-6 items-center gap-4">
<div className="col-span-12 md:col-span-1 font-mono text-xs opacity-50">#042</div>
<div className="col-span-12 md:col-span-4 font-bold text-lg">NORTH SEA RIGGING</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase">Energy / Logistics</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase text-right md:text-left">Target IRR: 34%</div>
<div className="col-span-12 md:col-span-1 text-right">
<i className="w-5 h-5 ml-auto" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content max-h-0 overflow-hidden bg-[#0A0A0A] text-white transition-all duration-300">
<div className="p-8 border-t border-white/10 grid md:grid-cols-2 gap-8">
<div>
<div className="text-[#E3FF00] text-xs font-bold mb-2">THESIS</div>
<p className="text-sm text-neutral-400 leading-relaxed">Asset is trading at 0.4x book value due to liquidity crunch. Equipment is modern but mismanaged. Plan involves selling non-core vessels and focusing on wind-farm support services.</p>
</div>
<div className="flex flex-col justify-end items-start md:items-end">
<button className="border border-white/20 px-6 py-2 text-xs uppercase hover:bg-white hover:text-black transition-colors">Request Access</button>
</div>
</div>
</div>
</div>

<div className="group border-b border-white/10 hover:bg-[#E3FF00] hover:text-black transition-colors cursor-pointer accordion-trigger">
<div className="grid grid-cols-12 p-6 items-center gap-4">
<div className="col-span-12 md:col-span-1 font-mono text-xs opacity-50">#043</div>
<div className="col-span-12 md:col-span-4 font-bold text-lg">APEX FOUNDRY GMBH</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase">Manufacturing</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase text-right md:text-left">Target IRR: 28%</div>
<div className="col-span-12 md:col-span-1 text-right">
<i className="w-5 h-5 ml-auto" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content max-h-0 overflow-hidden bg-[#0A0A0A] text-white transition-all duration-300">
<div className="p-8 border-t border-white/10">
<p className="text-sm text-neutral-400">German automotive supplier facing insolvency. Structural reform of labor contracts required. Bridge financing approved.</p>
</div>
</div>
</div>

<div className="group hover:bg-[#E3FF00] hover:text-black transition-colors cursor-pointer accordion-trigger">
<div className="grid grid-cols-12 p-6 items-center gap-4">
<div className="col-span-12 md:col-span-1 font-mono text-xs opacity-50">#044</div>
<div className="col-span-12 md:col-span-4 font-bold text-lg">PACIFIC TIMBER CO.</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase">Commodities</div>
<div className="col-span-6 md:col-span-3 text-xs font-mono uppercase text-right md:text-left">Target IRR: 42%</div>
<div className="col-span-12 md:col-span-1 text-right">
<i className="w-5 h-5 ml-auto" data-lucide="plus"></i>
</div>
</div>
<div className="accordion-content max-h-0 overflow-hidden bg-[#0A0A0A] text-white transition-all duration-300">
<div className="p-8 border-t border-white/10">
<p className="text-sm text-neutral-400">Vertical integration opportunity. Mill assets undervalued by 60%. Export ban lifting in Q4 creates arbitrage opportunity.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-transition hidden" id="page-portfolio">
<header className="container mx-auto px-6 md:px-12 py-16 border-b border-white/10">
<h1 className="font-headline text-5xl md:text-7xl mb-4">LIQUIDITY<br/>EVENTS</h1>
<p className="text-neutral-500 font-mono text-sm max-w-xl">
                    Historical performance does not guarantee future results, but it does suggest we know what we are doing. Average holding period: 28 months.
                </p>
</header>
<section className="container mx-auto px-6 md:px-12 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-white/10 bg-[#0A0A0A] group hover:border-[#E3FF00] transition-colors duration-300">
<div className="h-48 bg-neutral-900 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black"></div>
<div className="absolute bottom-4 left-4">
<i className="text-white w-8 h-8 opacity-50" data-lucide="anchor"></i>
</div>
<div className="absolute top-4 right-4 bg-[#E3FF00] text-black text-[10px] font-bold px-2 py-1">
                                EXITED 2023
                            </div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl mb-1">BALTIC FREIGHT</h3>
<div className="text-xs font-mono text-neutral-500 mb-6">LOGISTICS RESTRUCTURING</div>
<div className="grid grid-cols-2 gap-4 border-t border-dashed border-white/10 pt-4 mb-4">
<div>
<div className="text-[10px] text-neutral-500">MOIC</div>
<div className="text-2xl font-mono text-[#E3FF00]">3.4x</div>
</div>
<div>
<div className="text-[10px] text-neutral-500">IRR</div>
<div className="text-2xl font-mono text-white">42%</div>
</div>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Acquired out of bankruptcy. Negotiated union contracts. Modernized fleet with fuel-efficient engines. Sold to Maersk.
                            </p>
</div>
</div>

<div className="border border-white/10 bg-[#0A0A0A] group hover:border-[#E3FF00] transition-colors duration-300">
<div className="h-48 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,_#111_25%,_#000_25%,_#000_50%,_#111_50%,_#111_75%,_#000_75%,_#000_100%)] bg-[length:20px_20px] opacity-20"></div>
<div className="absolute bottom-4 left-4">
<i className="text-white w-8 h-8 opacity-50" data-lucide="factory"></i>
</div>
<div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1">
                                EXITED 2021
                            </div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl mb-1">STEEL DYNAMICS</h3>
<div className="text-xs font-mono text-neutral-500 mb-6">MANUFACTURING TURNAROUND</div>
<div className="grid grid-cols-2 gap-4 border-t border-dashed border-white/10 pt-4 mb-4">
<div>
<div className="text-[10px] text-neutral-500">MOIC</div>
<div className="text-2xl font-mono text-[#E3FF00]">2.8x</div>
</div>
<div>
<div className="text-[10px] text-neutral-500">IRR</div>
<div className="text-2xl font-mono text-white">31%</div>
</div>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Spun out from conglomerate parent. Reduced overhead by 22%. Refocused on aerospace alloys. Sold to PE Consortium.
                            </p>
</div>
</div>

<div className="border border-white/10 bg-[#0A0A0A] group hover:border-[#E3FF00] transition-colors duration-300">
<div className="h-48 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-800"></div>
<div className="absolute bottom-4 left-4">
<i className="text-white w-8 h-8 opacity-50" data-lucide="zap"></i>
</div>
<div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1">
                                EXITED 2022
                            </div>
</div>
<div className="p-6">
<h3 className="font-headline text-xl mb-1">NEXUS POWER</h3>
<div className="text-xs font-mono text-neutral-500 mb-6">INFRASTRUCTURE</div>
<div className="grid grid-cols-2 gap-4 border-t border-dashed border-white/10 pt-4 mb-4">
<div>
<div className="text-[10px] text-neutral-500">MOIC</div>
<div className="text-2xl font-mono text-[#E3FF00]">4.1x</div>
</div>
<div>
<div className="text-[10px] text-neutral-500">IRR</div>
<div className="text-2xl font-mono text-white">55%</div>
</div>
</div>
<p className="text-xs text-neutral-400 leading-relaxed">
                                Acquired distressed grid assets in Eastern Europe. Upgraded control systems. Stabilized cash flow via gov contracts.
                            </p>
</div>
</div>
</div>
</section>
</main>

<main className="page-transition hidden" id="page-thesis">
<div className="flex flex-col md:flex-row min-h-screen">

<div className="md:w-5/12 bg-[#050505] p-12 md:sticky md:top-32 md:h-[calc(100vh-128px)] flex flex-col justify-between border-r border-white/10">
<div>
<div className="text-[#E3FF00] font-mono text-xs mb-4">OPERATIONAL_THESIS_V4</div>
<h2 className="font-headline text-5xl md:text-6xl mb-8 leading-none">CHAOS IS<br/>A LADDER.</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            Most firms avoid volatility. We engineer it. Our thesis is built on the mathematical certainty that mismanagement creates value gaps in industrial sectors.
                        </p>
<ul className="space-y-4 font-mono text-xs text-neutral-500">
<li className="flex items-center gap-3">
<i className="text-[#E3FF00] w-4 h-4" data-lucide="check"></i> Asset-Heavy Industries Only
                            </li>
<li className="flex items-center gap-3">
<i className="text-[#E3FF00] w-4 h-4" data-lucide="check"></i> &lt; 50% Book Value Entry
                            </li>
<li className="flex items-center gap-3">
<i className="text-[#E3FF00] w-4 h-4" data-lucide="check"></i> Control Positions Required
                            </li>
</ul>
</div>
<div className="hidden md:block">
<div className="w-full bg-neutral-900 h-1 rounded-full overflow-hidden">
<div className="bg-white h-full w-1/3 animate-pulse"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-600 mt-2 font-mono">
<span>ALGO_STATUS</span>
<span>HUNTING...</span>
</div>
</div>
</div>

<div className="md:w-7/12 bg-[#0A0A0A]">

<div className="p-12 md:p-24 border-b border-white/10 hover:bg-neutral-900 transition-colors group">
<div className="text-4xl font-bold text-neutral-800 mb-6 group-hover:text-[#E3FF00]">01</div>
<h3 className="font-headline text-3xl mb-4">THE ACQUISITION</h3>
<p className="text-neutral-400 leading-relaxed text-sm mb-6">
                            We identify targets through proprietary algorithmic screening of debt covenants and inventory turnover. We approach before the bank forecloses. We bring immediate liquidity in exchange for total operational control.
                        </p>
<div className="p-4 bg-black border border-white/10 font-mono text-xs text-green-500">
                            &gt; INJECT_CAPITAL()<br/>
                            &gt; SECURE_BOARD_SEATS()<br/>
                            &gt; FREEZE_NON_ESSENTIAL_SPEND()
                        </div>
</div>

<div className="p-12 md:p-24 border-b border-white/10 hover:bg-neutral-900 transition-colors group">
<div className="text-4xl font-bold text-neutral-800 mb-6 group-hover:text-[#E3FF00]">02</div>
<h3 className="font-headline text-3xl mb-4">THE STRIP</h3>
<p className="text-neutral-400 leading-relaxed text-sm mb-6">
                            Sentimental attachments to legacy business lines destroy value. We strip the asset to its profitable core. Real estate is sold and leased back. Inventory is liquidated. Management is replaced with operators.
                        </p>
<div className="grid grid-cols-3 gap-2">
<div className="h-20 bg-neutral-800 border border-white/5"></div>
<div className="h-20 bg-neutral-800 border border-white/5"></div>
<div className="h-20 bg-neutral-800 border border-white/5 flex items-center justify-center">
<i className="text-red-500" data-lucide="x"></i>
</div>
</div>
</div>

<div className="p-12 md:p-24 hover:bg-neutral-900 transition-colors group">
<div className="text-4xl font-bold text-neutral-800 mb-6 group-hover:text-[#E3FF00]">03</div>
<h3 className="font-headline text-3xl mb-4">THE EXIT</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                            Once EBITDA stabilizes and growth resumes, we exit. We do not hold for dividends. We sell to strategic buyers looking for market share or PE firms looking for stable cash flow. Speed is our primary metric.
                        </p>
</div>
</div>
</div>
</main>

<main className="page-transition hidden" id="page-restructuring">
<header className="container mx-auto px-6 md:px-12 py-16 text-center">
<span className="inline-block border border-[#E3FF00] text-[#E3FF00] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">Services</span>
<h1 className="font-headline text-5xl md:text-6xl mb-6">CRISIS MANAGEMENT</h1>
<p className="text-neutral-400 max-w-2xl mx-auto text-sm">
                    We don't just invest. We offer interim management and restructuring services for companies on the brink.
                </p>
</header>
<section className="container mx-auto px-6 md:px-12 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

<div className="bg-[#0A0A0A] p-12 hover:bg-neutral-900 transition-colors">
<i className="w-10 h-10 text-[#E3FF00] mb-6" data-lucide="shield-alert"></i>
<h3 className="font-bold text-xl mb-4">Interim C-Suite</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Immediate deployment of battle-tested CEOs and CFOs to stabilize operations during leadership vacuums or fraud investigations.
                        </p>
</div>

<div className="bg-[#0A0A0A] p-12 hover:bg-neutral-900 transition-colors">
<i className="w-10 h-10 text-[#E3FF00] mb-6" data-lucide="scale"></i>
<h3 className="font-bold text-xl mb-4">Balance Sheet Recap</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Negotiating with creditors to convert debt to equity, extend maturity runways, or secure DIP (Debtor-In-Possession) financing.
                        </p>
</div>

<div className="bg-[#0A0A0A] p-12 hover:bg-neutral-900 transition-colors">
<i className="w-10 h-10 text-[#E3FF00] mb-6" data-lucide="scissors"></i>
<h3 className="font-bold text-xl mb-4">Cost Rationalization</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Zero-based budgeting analysis. We identify where money is bleeding and cauterize the wound immediately.
                        </p>
</div>

<div className="bg-[#0A0A0A] p-12 hover:bg-neutral-900 transition-colors">
<i className="w-10 h-10 text-[#E3FF00] mb-6" data-lucide="gavel"></i>
<h3 className="font-bold text-xl mb-4">Liquidations</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Orderly wind-down of non-viable entities to maximize recovery value for secured creditors and minimize legal exposure.
                        </p>
</div>
</div>

<div className="mt-12 text-center">
<button className="bg-white text-black px-8 py-4 font-bold uppercase tracking-tight hover:bg-[#E3FF00] transition-colors">
                        Contact Restructuring Team
                    </button>
</div>
</section>
</main>
</div>

<footer className="flex flex-col md:flex-row h-[40vh] border-t border-white/10">

<a className="w-full md:w-1/2 h-full bg-[#E3FF00] text-black flex flex-col justify-center items-center relative overflow-hidden group" href="#">
<div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors z-10"></div>
<div className="relative z-20 text-center">
<div className="text-xs font-bold font-mono border border-black px-2 py-1 inline-block mb-4">LP PORTAL</div>
<h2 className="font-headline text-4xl md:text-5xl">BECOME A<br/>PARTNER</h2>
</div>
<i className="absolute bottom-8 right-8 w-8 h-8 z-20 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" data-lucide="arrow-up-right"></i>
</a>

<a className="w-full md:w-1/2 h-full bg-black text-white border-l border-neutral-800 flex flex-col justify-center items-center relative overflow-hidden group" href="#">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwMDAwIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMzMzMzMzMiLz4KPC9zdmc+')] opacity-20"></div>
<div className="relative z-20 text-center">
<div className="text-xs font-bold font-mono border border-white/50 px-2 py-1 inline-block mb-4">CONFIDENTIAL</div>
<h2 className="font-headline text-4xl md:text-5xl">SUBMIT AN<br/>ASSET</h2>
</div>
<i className="absolute bottom-8 right-8 w-8 h-8 z-20 text-[#E3FF00] group-hover:translate-x-2 transition-transform" data-lucide="arrow-right"></i>
</a>
</footer>


    </>
  );
}
