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

      const modal = document.getElementById('deployModal');
      const backdrop = document.getElementById('modalBackdrop');
      const panel = document.getElementById('modalPanel');
      let isOpen = false;

      function toggleModal() {
          if (!isOpen) {
              // Open
              modal.classList.remove('hidden');
              // Small delay to allow display:block to apply before transition
              setTimeout(() => {
                  backdrop.classList.remove('opacity-0');
                  panel.classList.remove('scale-95', 'opacity-0');
                  panel.classList.add('scale-100', 'opacity-100');

                  // Simulate Loading
                  setTimeout(() => {
                      document.getElementById('step2-dot').classList.add('bg-green-500', 'animate-pulse');
                      document.getElementById('step2-dot').classList.remove('bg-gray-600');
                      document.getElementById('step2-status').innerText = '14 gwei';
                      document.getElementById('step2-status').classList.add('text-green-500');
                      document.getElementById('step2-status').classList.remove('text-gray-600');
                  }, 1500);
              }, 10);
          } else {
              // Close
              backdrop.classList.add('opacity-0');
              panel.classList.remove('scale-100', 'opacity-100');
              panel.classList.add('scale-95', 'opacity-0');
              setTimeout(() => {
                  modal.classList.add('hidden');
              }, 300); // Wait for transition
          }
          isOpen = !isOpen;
      }
    
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-5 h-5 flex items-center justify-center">
<div className="absolute inset-0 bg-[#474DEF] rounded-sm opacity-20 animate-ping"></div>
<div className="w-2.5 h-2.5 bg-[#474DEF] rounded-sm"></div>
</div>
<span className="text-sm font-semibold tracking-tight">Deploy</span>
<span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-gray-100 text-gray-500 border border-gray-200">
            v2.4
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#product">
            Product
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#transparency">
            Transparency
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#developers">
            Developers
          </a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#company">
            Company
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 hidden md:block" href="#">
            Log in
          </a>
<button className="group bg-[#0F1115] text-white px-3 py-2 rounded-lg text-xs font-medium hover:bg-gray-800 transition-all flex items-center gap-2 border border-gray-800 shadow-sm cursor-pointer" onclick="toggleModal()">
<span>Dashboard</span>
<i className="w-3 h-3 text-gray-400 group-hover:text-white transition-colors" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="z-10 relative">

<div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-[11px] font-medium mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#474DEF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#474DEF]"></span>
</span>
              New: Protocol v2 is live
            </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] mb-6 text-gray-900">
              Productive capital for
              <br/>
<span className="text-gray-400">the internet economy.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-md mb-8">
              Deploy is the financial infrastructure for autonomous yield
              generation. Turn idle assets into productive capital.
            </p>
<div className="flex flex-col sm:flex-row gap-3">
<button className="inline-flex justify-center items-center px-5 py-2.5 bg-[#474DEF] text-white text-sm font-medium rounded-md hover:bg-[#3b40cc] transition-all shadow-[0_1px_2px_rgba(71,77,239,0.3)]" onclick="toggleModal()">
                Start Deploying
                <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</button>
<a className="inline-flex justify-center items-center px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-all border border-gray-200 shadow-sm" href="#">
<i className="w-4 h-4 mr-2 text-gray-400" data-lucide="file-text"></i>
                Documentation
              </a>
</div>

<div className="mt-8 flex items-center gap-2 text-xs text-gray-400 font-mono">
<span className="text-gray-300">$</span>
<span>npm install @deploy/sdk</span>
<span className="w-1.5 h-3 bg-gray-400 animate-blink"></span>
</div>
</div>

<div className="relative h-[400px] w-full flex items-center justify-center border border-dashed border-gray-200 rounded-xl bg-gray-50/30">

<div className="absolute inset-0 bg-[linear-gradient(rgba(71,77,239,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(71,77,239,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gray-400"></div>
<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gray-400"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gray-400"></div>
<div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gray-400"></div>

<svg className="w-full h-full max-w-[400px] max-h-[300px]" fill="none" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">

<circle cx="200" cy="150" fill="white" r="40" stroke="#474DEF" strokeWidth="1.5"></circle>
<circle cx="200" cy="150" r="80" stroke="#E5E7EB" stroke-dasharray="4 4" strokeWidth="1"></circle>
<circle cx="100" cy="250" fill="#474DEF" r="6"></circle>
<circle cx="300" cy="50" fill="#474DEF" r="6"></circle>
<circle cx="300" cy="250" fill="#9CA3AF" r="6"></circle>
<circle cx="100" cy="50" fill="#9CA3AF" r="6"></circle>

<path d="M100 250L200 150L300 50" stroke="#E5E7EB" strokeWidth="1"></path>
<path d="M100 50L200 150L300 250" stroke="#E5E7EB" strokeWidth="1"></path>

<path className="animate-dash" d="M100 250L200 150L300 50" stroke="#474DEF" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="1.5"></path>

<rect fill="#F3F4F6" height="30" rx="4" width="60" x="170" y="135"></rect>
<text fill="#111827" fontFamily="monospace" fontSize="10" text-anchor="middle" x="200" y="155">
                YIELD
              </text>
</svg>
</div>
</div>

<div className="mt-20 md:mt-32 pt-10 border-t border-gray-200">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="pr-6">
<div className="flex items-end justify-between mb-2">
<div className="text-3xl md:text-3xl font-medium tracking-tight text-gray-900 font-mono">
                  22.7%
                </div>
<svg className="w-12 h-6 text-green-500" fill="none" viewbox="0 0 50 25">
<path d="M1 20L10 15L20 18L30 5L40 10L49 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="text-xs text-gray-500 font-medium">Average APY</div>
</div>
<div className="md:px-6 pt-6 md:pt-0">
<div className="flex items-end justify-between mb-2">
<div className="text-3xl md:text-3xl font-medium tracking-tight text-gray-900 font-mono">
                  $400M+
                </div>
<div className="h-1.5 w-12 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-3/4 rounded-full"></div>
</div>
</div>
<div className="text-xs text-gray-500 font-medium">Total Volume</div>
</div>
<div className="md:px-6 pt-6 md:pt-0">
<div className="flex items-end justify-between mb-2">
<div className="text-3xl md:text-3xl font-medium tracking-tight text-gray-900 font-mono">
                  150ms
                </div>
<span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                  LATENCY
                </span>
</div>
<div className="text-xs text-gray-500 font-medium">
                Execution Speed
              </div>
</div>
<div className="md:pl-6 pt-6 md:pt-0">
<div className="flex items-end justify-between mb-2">
<div className="text-3xl md:text-3xl font-medium tracking-tight text-gray-900 font-mono">
                  99.9%
                </div>
<i className="w-5 h-5 text-gray-300" data-lucide="check-circle"></i>
</div>
<div className="text-xs text-gray-500 font-medium">Uptime</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-dashed border-gray-200 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-3xl font-medium tracking-tight text-gray-900 mb-4">
            Built for reliability.
            <br/>
<span className="text-gray-400">Designed for scale.</span>
</h2>
<p className="text-lg text-gray-500 leading-relaxed font-normal">
            Leveraging internet-native instruments to generate disciplined
            market-neutral income.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="relative group bg-white p-8 border border-gray-200 transition-all hover:shadow-lg hover:border-[#474DEF]/30">
<div className="w-10 h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center mb-6 text-[#474DEF]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="shield"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">
              Robust Security
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Surviving every major volatility cycle since 2018 with consistent
              uptime and zero loss of funds.
            </p>
</div>

<div className="relative group bg-white p-8 border border-gray-200 transition-all hover:shadow-lg hover:border-[#474DEF]/30">
<div className="w-10 h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center mb-6 text-[#474DEF]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">
              Instant Settlement
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Funds are available immediately. No lock-up periods or withdrawal
              delays.
            </p>
</div>

<div className="relative group bg-white p-8 border border-gray-200 transition-all hover:shadow-lg hover:border-[#474DEF]/30">
<div className="w-10 h-10 bg-gray-50 rounded border border-gray-100 flex items-center justify-center mb-6 text-[#474DEF]">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2">
              Scalable Infrastructure
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Auto-scaling infrastructure designed to handle billions in daily
              volume without degradation.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0C10] text-white rounded-none md:rounded-[2rem] mx-0 md:mx-6 relative overflow-hidden border border-gray-800" id="product">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#474DEF 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-2.5 py-1 rounded border border-gray-700 bg-gray-900/50 text-[10px] font-mono mb-6 text-[#474DEF] uppercase tracking-wider">
              Stable Asset
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
              Introducing dUSD
              <span className="text-[#474DEF]">.</span>
</h2>
<p className="text-lg text-gray-400 max-w-xl mb-8 leading-relaxed font-light">
              A high-yield, productive dollar. Deploy's flagship instrument
              designed for treasury management and automated yield generation.
            </p>
<div className="space-y-4 font-mono text-sm text-gray-500 mb-10">
<div className="flex justify-between border-b border-gray-800 pb-2">
<span>Status</span>
<span className="text-green-500">Live</span>
</div>
<div className="flex justify-between border-b border-gray-800 pb-2">
<span>Structure</span>
<span className="text-white">Delta Neutral</span>
</div>
<div className="flex justify-between border-b border-gray-800 pb-2">
<span>Availability</span>
<span className="text-white">Global</span>
</div>
</div>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-gray-100 transition-all" href="#">
              Start Minting
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
<div className="flex justify-between items-center mb-6">
<h4 className="text-xs font-mono text-gray-400">
                YIELD PERFORMANCE (12M)
              </h4>
<div className="flex gap-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-[#474DEF]"></span>
<span className="text-xs text-gray-500">Live Data</span>
</div>
</div>

<svg className="w-full h-auto drop-shadow-[0_0_15px_rgba(71,77,239,0.3)]" viewbox="0 0 400 200">

<line stroke="#1f2937" strokeWidth="1" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#1f2937" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#1f2937" strokeWidth="1" x1="0" x2="400" y1="150" y2="150"></line>

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#474DEF" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#474DEF" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0,150 C40,140 80,100 120,110 C160,120 200,60 240,70 C280,80 320,40 360,30 L400,20" fill="none" stroke="#474DEF" strokeWidth="2"></path>

<path d="M0,150 C40,140 80,100 120,110 C160,120 200,60 240,70 C280,80 320,40 360,30 L400,20 V200 H0 Z" fill="url(#chartGradient)" stroke="none"></path>

<circle cx="240" cy="70" fill="#0A0C10" r="3" stroke="#474DEF" strokeWidth="2"></circle>
<circle cx="360" cy="30" fill="#0A0C10" r="3" stroke="#474DEF" strokeWidth="2"></circle>
</svg>
<div className="mt-4 flex justify-between items-end">
<div>
<div className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-wider">
                  Current APY
                </div>
<div className="text-2xl font-mono text-white tracking-tight">
                  22.7%
                </div>
</div>
<div className="text-right">
<div className="text-[10px] text-gray-500 font-mono mb-1 uppercase tracking-wider">
                  Spread
                </div>
<div className="text-xs font-mono text-[#474DEF] tracking-tight">
                  +0.04%
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-gray-400">
<div className="flex items-center gap-4 group cursor-pointer">
<span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
            Custody
          </span>
<span className="text-xl font-semibold text-gray-700 tracking-tight group-hover:text-black transition-colors">
            Fireblocks
          </span>
</div>
<div className="h-8 w-px bg-gray-200 hidden md:block rotate-12"></div>
<div className="flex items-center gap-4 group cursor-pointer">
<span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-0.5 rounded">
            Audit
          </span>
<span className="text-xl font-semibold text-gray-700 tracking-tight group-hover:text-black transition-colors">
            Halborn
          </span>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/30" id="transparency">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">
              Complete transparency
            </h2>
<p className="text-lg text-gray-500 mb-10 font-normal">
              No pooled custody. Positions remain user-owned, transparently
              observable on-chain at all times. Verify, don't trust.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center mt-1 group-hover:border-[#474DEF] transition-colors">
<i className="w-4 h-4 text-gray-500 group-hover:text-[#474DEF]" data-lucide="key"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">
                    Self-Custodial
                  </h4>
<p className="text-sm text-gray-500 mt-1">
                    Smart contract engine executes trades without taking
                    custody.
                  </p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-8 h-8 rounded border border-gray-200 bg-white flex items-center justify-center mt-1 group-hover:border-[#474DEF] transition-colors">
<i className="w-4 h-4 text-gray-500 group-hover:text-[#474DEF]" data-lucide="eye"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900">
                    On-Chain Verification
                  </h4>
<p className="text-sm text-gray-500 mt-1">
                    Real-time solvency audits available via public block
                    explorers.
                  </p>
</div>
</li>
</ul>
</div>

<div className="bg-white rounded border border-gray-200 relative overflow-hidden shadow-sm">

<div className="absolute inset-x-0 h-px bg-blue-500/50 z-20 animate-scan shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex justify-between items-center">
<span className="text-[10px] font-mono text-gray-500 uppercase">
                Live Monitor
              </span>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400 opacity-50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400 opacity-50"></div>
</div>
</div>
<div className="p-8 relative z-10">
<div className="space-y-6">
<div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-200">
<span className="text-xs font-mono text-gray-500 uppercase">
                    Current APY
                  </span>
<span className="text-sm font-mono font-medium text-[#474DEF]">
                    22.71%
                  </span>
</div>
<div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-200">
<span className="text-xs font-mono text-gray-500 uppercase">
                    TVL
                  </span>
<span className="text-sm font-mono font-medium text-gray-900">
                    $402,129,000
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs font-mono text-gray-500 uppercase">
                    Health Factor
                  </span>
<div className="flex items-center gap-2">
<div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="w-[98%] h-full bg-green-500"></div>
</div>
<span className="text-xs font-mono font-medium text-green-600">
                      98/100
                    </span>
</div>
</div>
</div>
<div className="mt-8 p-4 bg-gray-50 rounded border border-gray-100 font-mono text-[10px] text-gray-400">
<p>&gt; Initializing handshake...</p>
<p>&gt; Connection established (12ms)</p>
<p>&gt; Fetching latest block data...</p>
<p className="text-[#474DEF]">
                  &gt; Yield optimization active
                  <span className="animate-blink">_</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 gap-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
                System Protocol
              </h2>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-mono text-[#474DEF]">
                  // ARCHITECTURE_V2
                </span>
<span className="h-px w-12 bg-gray-200"></span>
</div>
</div>
<div className="font-mono text-[10px] text-gray-400 text-right">
<div>UPTIME: 99.99%</div>
<div>LAST_BLOCK: 1829304</div>
</div>
</div>

<div className="bg-[#0A0C10] border border-gray-800 shadow-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="relative flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-[#0F1115] z-10">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 bg-gray-700"></div>
<div className="w-2.5 h-2.5 bg-gray-800"></div>
<span className="ml-2 text-[10px] font-mono text-gray-500 uppercase">
                  user_sequence.sh
                </span>
</div>
<div className="text-[10px] font-mono text-gray-600">READ_ONLY</div>
</div>

<div className="relative z-10 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">

<div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-5xl font-mono text-gray-800 group-hover:text-white transition-colors tracking-tighter">
                    01
                  </span>
<span className="text-[9px] font-mono text-gray-500 border border-gray-800 px-1 py-0.5 uppercase">
                    Auth
                  </span>
</div>
<h3 className="text-lg font-mono text-white mb-4 uppercase tracking-tight">
                  Connect
                </h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">
                  &gt; INITIATE_HANDSHAKE
                  <br/>
                  &gt; VERIFY_SIGNATURE
                  <br/>
                  &gt; ESTABLISH_SESSION
                </p>
</div>

<div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-5xl font-mono text-gray-800 group-hover:text-white transition-colors tracking-tighter">
                    02
                  </span>
<span className="text-[9px] font-mono text-gray-500 border border-gray-800 px-1 py-0.5 uppercase">
                    Input
                  </span>
</div>
<h3 className="text-lg font-mono text-white mb-4 uppercase tracking-tight">
                  Deposit
                </h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">
                  &gt; SELECT_ASSET_TYPE
                  <br/>
                  &gt; APPROVE_CONTRACT
                  <br/>
                  &gt; EXECUTE_TX
                </p>
</div>

<div className="p-8 md:p-12 hover:bg-white/[0.02] transition-colors group">
<div className="flex justify-between items-start mb-16">
<span className="text-5xl font-mono text-gray-800 group-hover:text-white transition-colors tracking-tighter">
                    03
                  </span>
<span className="text-[9px] font-mono text-gray-500 border border-gray-800 px-1 py-0.5 uppercase">
                    Auto
                  </span>
</div>
<h3 className="text-lg font-mono text-white mb-4 uppercase tracking-tight">
                  Yield
                </h3>
<p className="text-xs text-gray-500 font-mono leading-relaxed">
                  &gt; START_OPTIMIZER
                  <br/>
                  &gt; COMPOUND_REWARDS
                  <br/>
                  &gt; MONITOR_APY
                </p>
</div>
</div>

<div className="relative z-10 border-t border-gray-800 p-8 flex justify-center bg-[#0A0C10]">
<button className="group relative inline-flex items-center justify-center px-10 py-3 bg-white text-black text-xs font-bold font-mono uppercase tracking-widest hover:bg-gray-200 transition-all" onclick="toggleModal()">
                Initialize_App
                <span className="absolute top-0 right-0 -mt-1 -mr-1 w-2 h-2 bg-[#474DEF]"></span>
<span className="absolute bottom-0 left-0 -mb-1 -ml-1 w-2 h-2 bg-[#474DEF]"></span>
</button>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="border border-gray-200 p-5 bg-gray-50/50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Audited By
                </span>
<span className="text-base font-semibold text-gray-900 tracking-tight">
                  Halborn Security
                </span>
</div>
<div className="h-2 w-2 bg-green-500 rounded-full"></div>
</div>
<div className="border border-gray-200 p-5 bg-gray-50/50 flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Penetration Test
                </span>
<span className="text-base font-semibold text-gray-900 tracking-tight">
                  QuillAudits
                </span>
</div>
<div className="h-2 w-2 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-12 text-center">
          Questions
        </h2>
<div className="space-y-3">

<details className="group bg-white rounded border border-gray-200 overflow-hidden transition-all duration-300 open:pb-4 hover:border-gray-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-gray-900">
<span className="flex-1">What is Deploy?</span>
<span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="plus"></i>
</span>
</summary>
<div className="px-5 text-sm text-gray-500 leading-relaxed max-w-2xl">
              Deploy is a self-custodial execution engine that turns idle
              capital into productive base assets through automated
              market-neutral strategies.
            </div>
</details>

<details className="group bg-white rounded border border-gray-200 overflow-hidden transition-all duration-300 open:pb-4 hover:border-gray-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-gray-900">
<span className="flex-1">How is yield generated?</span>
<span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="plus"></i>
</span>
</summary>
<div className="px-5 text-sm text-gray-500 leading-relaxed max-w-2xl">
              Yield is generated by capturing perpetual funding spreads—a
              market-structural source of return independent of token
              incentives.
            </div>
</details>

<details className="group bg-white rounded border border-gray-200 overflow-hidden transition-all duration-300 open:pb-4 hover:border-gray-300">
<summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-gray-900">
<span className="flex-1">Is it secure?</span>
<span className="transition-transform group-open:rotate-180">
<i className="w-4 h-4 text-gray-400" data-lucide="plus"></i>
</span>
</summary>
<div className="px-5 text-sm text-gray-500 leading-relaxed max-w-2xl">
              Yes, the protocol is fully audited by Halborn. Smart contracts are
              immutable and verifiable on-chain.
            </div>
</details>
</div>
</div>
</section>

<section className="py-24 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-tech-grid opacity-50 z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
          Ready to deploy?
        </h2>
<p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto font-normal">
          Digital assets and market demand have converged. The infrastructure is
          ready.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex justify-center items-center px-6 py-3 bg-[#474DEF] text-white text-sm font-medium rounded-md hover:bg-opacity-90 transition-all shadow-lg shadow-indigo-500/20" onclick="toggleModal()">
            Start Now
          </button>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-gray-900 text-sm font-medium rounded-md hover:bg-gray-50 border border-gray-200 transition-all" href="#">
            Contact Sales
          </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-[#474DEF] rounded-sm"></div>
<span className="font-medium tracking-tight text-gray-900">Deploy</span>
</div>
<div className="flex gap-8 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">
              Twitter
            </a>
<a className="hover:text-gray-900 transition-colors" href="#">
              Discord
            </a>
<a className="hover:text-gray-900 transition-colors" href="#">Docs</a>
<a className="hover:text-gray-900 transition-colors" href="#">GitHub</a>
</div>
<div className="text-gray-400 text-xs">© 2024 Deploy Inc.</div>
</div>
</div>
</footer>

<div aria-modal="true" className="fixed inset-0 z-50 hidden" id="deployModal" role="dialog">

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity opacity-0" id="modalBackdrop"></div>

<div className="flex items-center justify-center min-h-screen px-4 py-6">
<div className="relative bg-[#0F1115] w-full max-w-md rounded-xl border border-gray-800 shadow-2xl overflow-hidden transition-all transform scale-95 opacity-0" id="modalPanel">

<div className="flex items-center justify-between p-5 border-b border-gray-800">
<h3 className="text-white font-medium text-sm flex items-center gap-2">
<i className="w-4 h-4 text-gray-500" data-lucide="terminal"></i>
              Initialize Deployment
            </h3>
<button className="text-gray-500 hover:text-white transition-colors" onclick="toggleModal()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="p-6">
<div className="space-y-4">
<div className="flex flex-col gap-1">
<label className="text-[10px] uppercase font-mono text-gray-500 tracking-wider">
                  Protocol Environment
                </label>
<select className="bg-gray-900 border border-gray-700 text-white text-xs rounded p-2 focus:ring-1 focus:ring-[#474DEF] outline-none">
<option>Mainnet (v2.4)</option>
<option>Testnet (Goerli)</option>
</select>
</div>
<div className="p-4 bg-gray-900/50 rounded border border-gray-800 font-mono text-xs">
<div className="flex items-center gap-3 mb-3 text-gray-400">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="flex-1">Connecting to provider...</span>
<span className="text-green-500">OK</span>
</div>
<div className="flex items-center gap-3 mb-3 text-gray-400">
<div className="w-2 h-2 rounded-full bg-gray-600" id="step2-dot"></div>
<span className="flex-1">Estimating gas fees...</span>
<span className="text-gray-600" id="step2-status">WAIT</span>
</div>
<div className="flex items-center gap-3 text-gray-400">
<div className="w-2 h-2 rounded-full bg-gray-600"></div>
<span className="flex-1">Awaiting signature...</span>
</div>
</div>
</div>
<button className="w-full mt-6 bg-[#474DEF] hover:bg-[#3b40cc] text-white py-2.5 rounded text-sm font-medium transition-all shadow-[0_0_15px_rgba(71,77,239,0.25)] flex items-center justify-center gap-2">
              Connect Wallet
              <i className="w-4 h-4" data-lucide="wallet"></i>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
