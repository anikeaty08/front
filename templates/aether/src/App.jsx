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



      // Scroll Reveal Animation
      const revealElements = document.querySelectorAll('.reveal');

      const revealOnScroll = () => {
          const windowHeight = window.innerHeight;
          const elementVisible = 100;

          revealElements.forEach((reveal) => {
              const elementTop = reveal.getBoundingClientRect().top;
              if (elementTop < windowHeight - elementVisible) {
                  reveal.classList.add('active');
              }
          });
      }

      window.addEventListener('scroll', revealOnScroll);
      // Trigger once on load
      revealOnScroll();

      // Header Blur Effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('bg-[#0B0B0F]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
          } else {
              header.classList.remove('bg-[#0B0B0F]/80', 'backdrop-blur-md', 'border-b', 'border-white/5');
          }
      });
    


      document.addEventListener('DOMContentLoaded',()=>{const t=document.getElementById('menu-toggle'),m=document.getElementById('mobile-menu');if(t&&m){t.addEventListener('click',()=>{const a=t.classList.toggle('active');m.classList.toggle('translate-x-full',!a)})}const c=document.getElementById('typewriter-code');if(c){const txt="const aether = new Client({\n  apiKey: 'ae_live_5x9...',\n  region: 'us-east-1'\n});\n\n// Initialize connection\nawait aether.connect();\nconsole.log('Neural Grid Online');";let i=0;function type(){if(i<txt.length){c.textContent+=txt.charAt(i);i++;setTimeout(type,Math.random()*30+30)}else{setTimeout(()=>{c.textContent='';i=0;type()},5000)}}const obs=new IntersectionObserver(e=>{if(e[0].isIntersecting){type();obs.disconnect()}},{threshold:0.5});obs.observe(c)}});
    
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
      

<div className="noise-overlay"></div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-[#3CFF5F] rounded-full mix-blend-screen opacity-[0.03] blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-[#3c5aff] rounded-full mix-blend-screen opacity-[0.03] blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-transparent" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group relative z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/0 border border-white/10 flex items-center justify-center group-hover:border-[#3CFF5F]/50 transition-colors">
<span className="text-[#3CFF5F] font-bold tracking-tighter">A</span>
</div>
<span className="font-semibold tracking-tight text-lg text-white">
            AETHER
          </span>
</a>
<nav className="hidden lg:flex items-center gap-1">

<div className="relative group px-4 py-2">
<button className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-white transition-colors py-2">
              Features
              <iconify-icon className="group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[640px] pt-2">
<div className="glass-panel rounded-2xl p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/10">
<div className="grid grid-cols-2 gap-8">
<div className="">
<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
                      Platform
                    </h4>
<div className="space-y-2">
<a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5" href="#">
<div className="w-9 h-9 rounded-lg bg-[#3CFF5F]/10 text-[#3CFF5F] flex items-center justify-center group-hover/item:scale-110 transition-transform">
<iconify-icon icon="solar:graph-new-bold-duotone" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-sm text-white font-medium group-hover/item:text-[#3CFF5F] transition-colors">
                            Analytics
                          </div>
<div className="text-xs text-gray-500 mt-0.5">
                            Real-time inference monitoring
                          </div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5" href="#">
<div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover/item:text-purple-300 transition-colors">
                            Neural Engine
                          </div>
<div className="text-xs text-gray-500 mt-0.5">
                            Automated workflow builder
                          </div>
</div>
</a>
</div>
</div>
<div className="">
<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
                      Infrastructure
                    </h4>
<div className="space-y-2">
<a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5" href="#">
<div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover/item:text-blue-300 transition-colors">
                            Security Vault
                          </div>
<div className="text-xs text-gray-500 mt-0.5">
                            SOC2 compliant isolation
                          </div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5" href="#">
<div className="w-9 h-9 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
<iconify-icon icon="solar:global-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium group-hover/item:text-orange-300 transition-colors">
                            Edge Network
                          </div>
<div className="text-xs text-gray-500 mt-0.5">
                            Global low-latency grid
                          </div>
</div>
</a>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center bg-white/[0.02] -mx-6 -mb-6 px-6 py-4">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#3CFF5F] animate-pulse"></span>
<span className="text-xs text-gray-500">
                      Systems Operational
                    </span>
</div>
<a className="text-xs text-[#3CFF5F] flex items-center gap-1 hover:underline" href="#">
                    View Changelog
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="relative group px-4 py-2">
<button className="flex items-center gap-1 text-sm text-gray-400 group-hover:text-white transition-colors py-2">
              Solutions
              <iconify-icon className="group-hover:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[400px] pt-2">
<div className="glass-panel rounded-2xl p-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] ring-1 ring-white/10">
<a className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/sub" href="#">
<div className="text-sm text-white font-medium group-hover/sub:text-[#3CFF5F] transition-colors">
                    For Startups
                  </div>
<div className="text-xs text-gray-500">
                    Scale from zero to IPO
                  </div>
</a>
<a className="block p-3 rounded-xl hover:bg-white/5 transition-colors group/sub" href="#">
<div className="text-sm text-white font-medium group-hover/sub:text-[#3CFF5F] transition-colors">
                    For Enterprise
                  </div>
<div className="text-xs text-gray-500">
                    Secure, private, isolated
                  </div>
</a>
</div>
</div>
</div>
<a className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors" href="#company">
            Company
          </a>
</nav>

<div className="hidden lg:flex items-center gap-6">
<a className="text-sm text-white hover:text-gray-300 transition-colors" href="#">
            Sign In
          </a>
<a className="relative group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3CFF5F]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]" href="#">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0B0F_0%,#3CFF5F_50%,#0B0B0F_100%)]" style={{animation: 'spin 3s linear infinite'}}></span>
<span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0F]/80 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition-all group-hover:bg-[#0B0B0F]/60 group-hover:text-[#3CFF5F] group-hover:shadow-[0_0_30px_rgba(60,255,95,0.4)]">
              Get Started
            </span>
</a>
</div>

<button className="lg:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group rounded-full hover:bg-white/5 transition-colors" id="menu-toggle">
<span className="w-5 h-0.5 bg-white transition-all duration-300 origin-center group-[.active]:rotate-45 group-[.active]:translate-y-2"></span>
<span className="w-5 h-0.5 bg-white transition-all duration-300 group-[.active]:opacity-0"></span>
<span className="w-5 h-0.5 bg-white transition-all duration-300 origin-center group-[.active]:-rotate-45 group-[.active]:-translate-y-2"></span>
</button>
</div>
</header>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>
<div className="container text-center z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-float">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CFF5F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CFF5F]"></span>
</span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">
            Aether 2.0 is live
          </span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
          Orchestrate your
          <br/>
<span className="text-gradient-primary">digital intelligence</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          The unified workspace for AI agents, neural workflows, and
          decentralized data layers. Built for the next generation of builders.
        </p>

<div className="flex flex-col sm:flex-row gap-4 mb-20 gap-x-4 gap-y-4 items-center justify-center">

<button className="relative group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3CFF5F]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0B0F_0%,#3CFF5F_50%,#0B0B0F_100%)]" style={{animation: 'spin 3s linear infinite'}}></span>
<span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0F]/80 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all group-hover:bg-[#0B0B0F]/60 group-hover:text-[#3CFF5F] group-hover:shadow-[0_0_30px_rgba(60,255,95,0.4)]">
              Start Building Free
            </span>
</button>

<button className="group px-8 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-[#3CFF5F]/50 hover:text-[#3CFF5F] hover:shadow-[0_0_20px_rgba(60,255,95,0.2)] transition-all backdrop-blur-md flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
            Watch Demo
          </button>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl backdrop-blur-md shadow-2xl overflow-hidden reveal active shadow-[0_0_80px_-20px_rgba(60,255,95,0.15)] ring-1 ring-white/10 bg-[#0e1014]/80 border border-[#3CFF5F]/10">

<div className="flex items-center gap-4 bg-[#0e1014] h-10 border-b border-white/5 px-4 w-full select-none">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10"></div>
<div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10"></div>
<div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-black/40 border border-white/5 rounded-md px-4 py-1 text-[10px] text-gray-500 flex items-center gap-2 min-w-[240px] justify-center font-mono group hover:border-white/10 transition-colors cursor-text">
<iconify-icon className="text-gray-600" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<span className="text-gray-400">app.aether</span>
<span className="text-gray-600">/dashboard</span>
</div>
</div>
<div className="w-16"></div>
</div>

<div className="flex h-[550px] bg-[#0B0B0F]/90 backdrop-blur-xl relative overflow-hidden">

<div className="hidden md:flex w-64 border-r border-white/5 p-4 flex-col bg-[#0e1014]/50">

<div className="flex items-center gap-3 px-3 py-2 mb-6 border border-white/5 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-br from-[#3CFF5F] to-[#28c840] flex items-center justify-center text-black text-[10px] font-bold shadow-[0_0_10px_rgba(60,255,95,0.3)]">
                  A
                </div>
<span className="text-sm font-medium text-white tracking-tight">
                  Mainnet Alpha
                </span>
<iconify-icon className="ml-auto text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>

<nav className="space-y-1 flex-1">
<div className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-white/5 border border-[#3CFF5F]/20 rounded-lg shadow-[0_0_15px_rgba(60,255,95,0.05)] cursor-pointer">
<iconify-icon className="text-[#3CFF5F]" icon="solar:widget-linear"></iconify-icon>
                  Overview
                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
<iconify-icon className="group-hover:text-[#3CFF5F] transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
                  Active Agents
                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
<iconify-icon className="group-hover:text-[#3CFF5F] transition-colors" icon="solar:graph-new-linear"></iconify-icon>
                  Analytics
                </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
<iconify-icon className="group-hover:text-[#3CFF5F] transition-colors" icon="solar:settings-linear"></iconify-icon>
                  Settings
                </div>
</nav>

<div className="mt-auto p-4 rounded-xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent relative overflow-hidden group hover:border-[#3CFF5F]/20 transition-colors">
<div className="absolute inset-0 bg-[#3CFF5F]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-center gap-3 mb-3 relative z-10">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CFF5F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CFF5F]"></span>
</div>
<span className="text-xs font-medium text-gray-300">
                    System Optimal
                  </span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-3 relative z-10">
<div className="h-full bg-[#3CFF5F] w-[92%] rounded-full shadow-[0_0_10px_#3CFF5F] animate-[pulse_3s_ease-in-out_infinite]"></div>
</div>
<div className="flex justify-between text-[10px] text-gray-500 font-mono relative z-10">
<span>CPU: 42%</span>
<span>MEM: 1.2GB</span>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden relative flex flex-col">

<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">
                    Dashboard Overview
                  </h2>
<div className="flex items-center gap-2 mt-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#3CFF5F]"></span>
<p className="text-xs text-gray-500">
                      Real-time inference monitoring
                    </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex h-8 px-3 rounded-md bg-white/5 border border-white/10 items-center gap-2 text-xs text-gray-300 font-mono">
<iconify-icon className="text-gray-500" icon="solar:global-linear"></iconify-icon>
                    us-east-1
                  </div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-600 border border-white/10 shadow-inner"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full pb-4">

<div className="md:col-span-2 flex flex-col gap-6">

<div className="grid grid-cols-3 gap-3 md:gap-4">
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] group hover:border-[#3CFF5F]/20 transition-all hover:-translate-y-1">
<div className="text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-medium">
                        Total Requests
                      </div>
<div className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#3CFF5F] transition-colors">
                        2.4M
                      </div>
<div className="text-[10px] text-[#3CFF5F] flex items-center gap-1">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
                        +12.5%
                      </div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] group hover:border-[#3CFF5F]/20 transition-all hover:-translate-y-1">
<div className="text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-medium">
                        Avg Latency
                      </div>
<div className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#3CFF5F] transition-colors">
                        42ms
                      </div>
<div className="text-[10px] text-[#3CFF5F] flex items-center gap-1">
<iconify-icon icon="solar:trending-down-linear"></iconify-icon>
                        -8.4%
                      </div>
</div>
<div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] group hover:border-[#3CFF5F]/20 transition-all hover:-translate-y-1">
<div className="text-gray-500 text-[10px] uppercase tracking-wider mb-2 font-medium">
                        Active Nodes
                      </div>
<div className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#3CFF5F] transition-colors">
                        842
                      </div>
<div className="text-[10px] text-[#3CFF5F] flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Operational
                      </div>
</div>
</div>

<div className="flex-1 rounded-xl border border-white/5 bg-white/[0.02] p-5 relative overflow-hidden group hover:border-white/10 transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="flex justify-between items-center mb-6 relative z-10">
<div className="flex gap-2 items-center">
<span className="text-xs text-white font-medium">
                          Inference Volume
                        </span>
<div className="w-px h-3 bg-white/10"></div>
<span className="text-xs text-gray-500">Live Stream</span>
</div>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-[#3CFF5F] animate-pulse"></span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-[70%] w-full">

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 600 200">
<defs>
<lineargradient id="graphGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3CFF5F', stopOpacity: '0.1'}}></stop>
<stop offset="100%" style={{stopColor: '#3CFF5F', stopOpacity: '0'}}></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="2.5"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="opacity-50" d="M0,150 C50,145 100,120 150,130 S250,160 300,120 S400,80 450,90 S550,120 600,100 L600,200 L0,200 Z" fill="url(#graphGradient)"></path>
<path d="M0,150 C50,145 100,120 150,130 S250,160 300,120 S400,80 450,90 S550,120 600,100" fill="none" filter="url(#glow)" stroke="#3CFF5F" strokeWidth="2"></path>

<circle className="animate-pulse origin-center hover:scale-150 transition-transform cursor-pointer" cx="450" cy="90" fill="#0B0B0F" r="4" stroke="#3CFF5F" strokeWidth="2"></circle>

<line opacity="0.3" stroke="#3CFF5F" stroke-dasharray="4 4" strokeWidth="1" x1="450" x2="450" y1="90" y2="200"></line>
</svg>
</div>
</div>
</div>

<div className="hidden md:flex rounded-xl border border-white/5 bg-white/[0.02] p-0 overflow-hidden flex-col h-full relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0F]/50 pointer-events-none z-20"></div>
<div className="p-4 border-b border-white/5 bg-white/[0.02] flex justify-between items-center z-10">
<span className="text-xs font-medium text-white">
                      Live Agents
                    </span>
<iconify-icon className="text-gray-500 cursor-pointer hover:text-white transition-colors" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="flex-1 overflow-hidden p-3 space-y-3 z-10">

<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#3CFF5F]/30 transition-all group cursor-default">
<div className="w-8 h-8 rounded-lg bg-[#3CFF5F]/10 flex items-center justify-center text-[#3CFF5F] group-hover:bg-[#3CFF5F] group-hover:text-black transition-colors mt-0.5">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<div className="text-xs font-medium text-white truncate">
                            Data Pipeline A
                          </div>
<span className="w-1.5 h-1.5 rounded-full bg-[#3CFF5F] shadow-[0_0_8px_#3CFF5F]"></span>
</div>
<div className="text-[10px] text-gray-500 truncate">
                          Ingesting 40GB/s...
                        </div>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#3CFF5F]/30 transition-all group cursor-default">
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mt-0.5">
<iconify-icon icon="solar:magic-stick-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<div className="text-xs font-medium text-white truncate">
                            Neural Engine
                          </div>
<span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></span>
</div>
<div className="text-[10px] text-gray-500 truncate">
                          Optimizing weights
                        </div>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#3CFF5F]/30 transition-all group cursor-default">
<div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors mt-0.5">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<div className="text-xs font-medium text-white truncate">
                            Security Auditor
                          </div>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
</div>
<div className="text-[10px] text-gray-500 truncate">
                          Scan complete
                        </div>
</div>
</div>

<div className="mt-2 rounded-lg bg-[#050505] border border-white/10 p-3 font-mono text-[10px] leading-relaxed relative overflow-hidden h-[120px]">
<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(18,20,24,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10 opacity-20"></div>
<div className="space-y-1.5 opacity-80">
<div className="flex gap-2 text-gray-400">
<span className="text-[#3CFF5F]">&gt;</span>
<span className="typing-effect">init_sequence(core)</span>
</div>
<div className="flex gap-2 text-gray-500">
<span className="text-blue-400">ℹ</span>
<span>[10:42:01] Mesh connected</span>
</div>
<div className="flex gap-2 text-gray-500">
<span className="text-blue-400">ℹ</span>
<span>[10:42:02] Syncing blocks...</span>
</div>
<div className="flex gap-2 text-gray-500">
<span className="text-yellow-400">⚠</span>
<span>[10:42:05] Latency spike handled</span>
</div>
<div className="flex gap-2 text-gray-500">
<span className="text-[#3CFF5F]">✔</span>
<span>[10:42:09] Ready for inference</span>
</div>
<div className="w-2 h-4 bg-[#3CFF5F] animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-[#0e1014]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-gray-500 mb-8 tracking-widest uppercase">
          Trusted by forward-thinking teams
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default">
            ACME
            <span className="text-[#3CFF5F]">.AI</span>
</span>
<span className="text-xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default">
            NEXUS
          </span>
<span className="text-xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default">
            QUANTA
          </span>
<span className="text-xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default">
            VERTEX
          </span>
<span className="text-xl font-bold font-sans tracking-tight hover:text-white transition-colors cursor-default">
            ORBITAL
          </span>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
            Everything you need to
            <br/>
<span className="text-gray-400">scale intelligence</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-2 auto-rows-[300px]">

<div className="md:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group reveal">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#3CFF5F] rounded-full blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CFF5F]">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-2">Real-time Analytics</h3>
<p className="text-gray-400 max-w-md">
                  Monitor your AI agents performance with millisecond latency.
                  Visualise complex data streams.
                </p>
</div>
<div className="mt-8 w-full h-48 bg-[#0e1014] rounded-xl border border-white/5 relative overflow-hidden flex flex-col p-5 shadow-inner">
<div className="flex justify-between items-center mb-6">
<div className="flex gap-3 items-center">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3CFF5F] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#3CFF5F]"></span>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium tracking-wide">
                        LIVE INGEST
                      </span>
<span className="text-[10px] text-gray-500 font-mono">
                        us-east-1a
                      </span>
</div>
</div>
<div className="px-2 py-1 rounded bg-[#3CFF5F]/10 border border-[#3CFF5F]/20 text-[#3CFF5F] text-[10px] font-mono font-bold">
                    99.9% UP
                  </div>
</div>
<div className="flex-1 relative w-full">
<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="cardGraph" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3CFF5F" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#3CFF5F" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C20,75 30,50 50,60 S70,30 85,40 S95,20 100,30 V100 H0 Z" fill="url(#cardGraph)"></path>
<path d="M0,80 C20,75 30,50 50,60 S70,30 85,40 S95,20 100,30" fill="none" stroke="#3CFF5F" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<circle className="animate-pulse" cx="85" cy="40" fill="#0B0B0F" r="3" stroke="#3CFF5F" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="flex justify-between mt-3 pt-3 border-t border-white/5 text-[10px] text-gray-600 font-mono">
<span>12:00</span>
<span>12:15</span>
<span>12:30</span>
<span>12:45</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#EFFF3C]">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
<p className="text-sm text-gray-400">
              SOC2 compliant infrastructure with end-to-end encryption.
            </p>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden group reveal">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#3CFF5F]">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
<p className="text-sm text-gray-400">
              Edge deployment ensures your users never wait.
            </p>
</div>

<div className="md:col-span-3 glass-card rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group reveal">
<div className="flex-1">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Developer First API</h3>
<p className="text-sm text-gray-400">
                Rest API and GraphQL support out of the box. SDKs for Python,
                Node, and Go.
              </p>
</div>
<div className="flex gap-1.5 mb-4 opacity-50">
<span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0e1014] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] to-transparent h-20 z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 reveal">
<div className="inline-block px-3 py-1 rounded-full bg-[#3CFF5F]/10 border border-[#3CFF5F]/20 text-[#3CFF5F] text-xs font-semibold mb-6">
              WORKFLOW AUTOMATION
            </div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">
              Automate complex logic
              <br/>
              without writing code.
            </h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our visual builder allows you to drag, drop, and connect neural
              nodes. Watch your data flow in real-time and debug with a single
              click.
            </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                Visual Node Editor
              </li>
<li className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                Real-time Debugging
              </li>
<li className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear" width="20"></iconify-icon>
                One-click Deployment
              </li>
</ul>
</div>

<div className="lg:w-1/2 w-full reveal delay-200">
<div className="relative rounded-2xl border border-white/10 bg-[#0B0B0F] p-2 shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-[#3CFF5F] to-transparent opacity-20 rounded-2xl"></div>
<div className="relative bg-[#0e1014] rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center group ring-1 ring-white/10 shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-1/4 left-1/4 w-40 bg-[#14161b] border border-white/10 rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float z-20 hover:border-[#3CFF5F]/50 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#3CFF5F]/10 flex items-center justify-center text-[#3CFF5F] ring-1 ring-[#3CFF5F]/20">
<iconify-icon icon="solar:database-bold-duotone"></iconify-icon>
</div>
<div className="text-xs font-semibold text-white tracking-wide">
                      SQL Source
                    </div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-gray-700 rounded-full"></div>
</div>
<div className="h-1.5 w-1/2 bg-white/5 rounded-full"></div>
</div>
<div className="mt-4 flex gap-1 justify-end">
<span className="w-2 h-2 rounded-full bg-[#3CFF5F] shadow-[0_0_10px_#3CFF5F]"></span>
</div>
</div>
<svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
<defs>
<filter id="glow-line">
<fegaussianblur result="coloredBlur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="animate-[dash_30s_linear_infinite] opacity-40" d="M 190 160 C 290 160, 260 260, 370 260" fill="none" stroke="#3CFF5F" stroke-dasharray="6 6" strokeWidth="2"></path>
<path d="M 190 160 C 290 160, 260 260, 370 260" fill="none" filter="url(#glow-line)" stroke="#3CFF5F" stroke-dasharray="100 200" stroke-dashoffset="200" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="3s" from="300" repeatcount="indefinite" to="0"></animate>
</path>
</svg>
<div className="absolute bottom-1/4 right-1/4 w-40 bg-[#14161b] border border-[#3CFF5F]/30 rounded-xl p-4 shadow-[0_0_40px_rgba(60,255,95,0.05)] animate-float-delayed z-20 hover:bg-[#3CFF5F]/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#3CFF5F] flex items-center justify-center text-black shadow-[0_0_15px_#3CFF5F]">
<iconify-icon icon="solar:magic-stick-bold-duotone"></iconify-icon>
</div>
<div className="text-xs font-semibold text-white tracking-wide">
                      Transformation
                    </div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-full bg-[#3CFF5F]/50 rounded-full animate-pulse"></div>
</div>
<div className="h-1.5 w-2/3 bg-white/5 rounded-full"></div>
</div>
<div className="mt-4 flex gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all reveal">
<div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#3CFF5F]/50 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-[#3CFF5F]" icon="solar:lock-password-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">
              Encrypted Vaults
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Store sensitive keys and user data in isolated environments.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all reveal delay-75">
<div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#3CFF5F]/50 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-[#3CFF5F]" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">
              Infinite Scaling
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Auto-scaling infrastructure handles traffic spikes effortlessly.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all reveal delay-150">
<div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 flex items-center justify-center mb-4 group-hover:border-[#3CFF5F]/50 transition-colors">
<iconify-icon className="text-gray-300 group-hover:text-[#3CFF5F]" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 text-white">
              Team Collaboration
            </h3>
<p className="text-sm text-gray-400 leading-relaxed">
              Granular permissions and real-time multiplayer editing.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#0e1014] relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#3CFF5F] opacity-5 blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="reveal">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
              99.9%
            </div>
<div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Uptime
            </div>
</div>
<div className="reveal delay-75">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
              50ms
            </div>
<div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Latency
            </div>
</div>
<div className="reveal delay-150">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
              10k+
            </div>
<div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Nodes
            </div>
</div>
<div className="reveal delay-200">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2 tracking-tight">
              24/7
            </div>
<div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
              Support
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="integration">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold mb-16 tracking-tight">
          Connects with your
          <br/>
          favorite tools
        </h2>
<div className="relative max-w-4xl mx-auto">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#555 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 relative z-10">

<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:slack-icon" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-50 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all filter invert" icon="logos:github-icon" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-100 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:notion-icon" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-150 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:figma" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-200 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:aws" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-250 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:google-cloud" width="28"></iconify-icon>
</div>

<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-75 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all filter invert" icon="logos:openai-icon" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-100 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:stripe" width="28"></iconify-icon>
</div>
<div className="group aspect-square rounded-2xl bg-[#111318] border border-white/5 flex items-center justify-center hover:border-[#3CFF5F]/50 hover:shadow-[0_0_15px_rgba(60,255,95,0.1)] transition-all duration-300 reveal delay-125 cursor-pointer">
<iconify-icon className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all" icon="logos:discord-icon" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0e1014] pt-32 pb-32 relative">
<style>
    @keyframes scroll-down {
      0% { transform: translateY(-50%); }
      100% { transform: translateY(0); }
    }
    .animate-scroll-down {
      animation: scroll-down 40s linear infinite;
    }
    .animate-scroll-down-slow {
      animation: scroll-down 60s linear infinite;
    }
    .pause-on-hover:hover {
      animation-play-state: paused;
    }
  </style>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3CFF5F] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600 opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative">
<div className="absolute -top-10 -left-10 text-[#3CFF5F] opacity-20">
<svg fill="currentColor" height="120" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.8954 5.9124 16 7.01697 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.01697C5.46468 8 5.01697 8.44772 5.01697 9V11C5.01697 11.5523 4.56925 12 4.01697 12H3.01697V5H13.017V15C13.017 18.3137 10.3307 21 7.01697 21H5.01697Z"></path>
</svg>
</div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
            Loved by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CFF5F] to-[#EFFF3C]">engineers</span>
</h2>
<p className="text-gray-400 text-lg mb-10">
            Join 10,000+ developers building the next generation of AI applications.
          </p>
<div className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-10 backdrop-blur-xl overflow-hidden transition-all hover:border-[#3CFF5F]/30 hover:shadow-[0_0_50px_-20px_rgba(60,255,95,0.15)]">

<div className="absolute inset-0 bg-gradient-to-br from-[#3CFF5F]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative flex flex-col h-full">
<div className="flex gap-1 mb-6">

<svg className="w-5 h-5 text-[#3CFF5F] fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 text-[#3CFF5F] fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 text-[#3CFF5F] fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 text-[#3CFF5F] fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 text-[#3CFF5F] fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<blockquote className="text-2xl font-medium text-white leading-relaxed tracking-tight mb-8">
                "Aether isn't just a tool; it's the backbone of our entire ML infrastructure. The visual workflow builder saved us months of custom engineering time."
              </blockquote>
<div className="mt-auto flex items-center gap-5">
<div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-[#3CFF5F] to-blue-500">
<div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0e1014]">
<img alt="Sarah Jenkins" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>
<div>
<div className="text-lg font-semibold text-white">Sarah Jenkins</div>
<div className="text-sm text-gray-400">CTO at TechFlow</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
<div className="grid grid-cols-2 gap-6 w-full">

<div className="flex flex-col gap-6 animate-scroll-down-slow pause-on-hover">

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Security was our main concern. Aether's encrypted vaults put us at ease immediately."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<div className="text-xs font-semibold text-white">David Chen</div>
<div className="text-[10px] text-gray-500">Lead Architect</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"The API response times are insane. We saw a 300% improvement instantly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-semibold border border-blue-500/30">ER</div>
<div>
<div className="text-xs font-semibold text-white">Elena Rossi</div>
<div className="text-[10px] text-gray-500">DevOps Engineer</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Migration was seamless. The support team actually knows their stuff."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="">
<div className="text-xs font-semibold text-white">Marcus T.</div>
<div className="text-[10px] text-gray-500">Systems Lead</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Security was our main concern. Aether's encrypted vaults put us at ease immediately."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div>
<div className="text-xs font-semibold text-white">David Chen</div>
<div className="text-[10px] text-gray-500">Lead Architect</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"The API response times are insane. We saw a 300% improvement instantly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-semibold border border-blue-500/30">ER</div>
<div>
<div className="text-xs font-semibold text-white">Elena Rossi</div>
<div className="text-[10px] text-gray-500">DevOps Engineer</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Migration was seamless. The support team actually knows their stuff."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="">
<div className="text-xs font-semibold text-white">Marcus T.</div>
<div className="text-[10px] text-gray-500">Systems Lead</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 animate-scroll-down pause-on-hover pt-16">

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"The developer experience is unmatched. Everything just works out of the box."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-semibold border border-purple-500/30">JS</div>
<div>
<div className="text-xs font-semibold text-white">Jessica S.</div>
<div className="text-[10px] text-gray-500">Frontend Lead</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Finally, a platform that takes compliance seriously. SOC2 ready from day one."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div>
<div className="text-xs font-semibold text-white">Alex Wong</div>
<div className="text-[10px] text-gray-500">CISO</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Best infrastructure decision we've made in years. It scales effortlessly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-semibold border border-orange-500/30">TM</div>
<div>
<div className="text-xs font-semibold text-white">Tom Miller</div>
<div className="text-[10px] text-gray-500">VP Engineering</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"The developer experience is unmatched. Everything just works out of the box."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xs font-semibold border border-purple-500/30">JS</div>
<div>
<div className="text-xs font-semibold text-white">Jessica S.</div>
<div className="text-[10px] text-gray-500">Frontend Lead</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Finally, a platform that takes compliance seriously. SOC2 ready from day one."</p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div>
<div className="text-xs font-semibold text-white">Alex Wong</div>
<div className="text-[10px] text-gray-500">CISO</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#0B0B0F] border border-white/5 hover:border-[#3CFF5F]/30 transition-colors">
<div className="flex gap-0.5 text-[#3CFF5F] mb-3">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-sm text-gray-300 mb-4 leading-relaxed">"Best infrastructure decision we've made in years. It scales effortlessly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-semibold border border-orange-500/30">TM</div>
<div>
<div className="text-xs font-semibold text-white">Tom Miller</div>
<div className="text-[10px] text-gray-500">VP Engineering</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold mb-4 tracking-tight">
            Transparent Pricing
          </h2>

<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-sm text-gray-400">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer toggle-checkbox" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all toggle-label transition-colors"></div>
</label>
<span className="text-sm text-white font-medium">
              Yearly
              <span className="text-[#3CFF5F] text-xs ml-1">-20%</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 rounded-2xl bg-[#111318] border border-white/5 reveal">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-bold mb-6">
              $0
              <span className="text-sm font-normal text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                5k Monthly Calls
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                Community Support
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                1 Project
              </li>
</ul>
<button className="group w-full py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-[#3CFF5F]/50 hover:text-[#3CFF5F] hover:shadow-[0_0_20px_rgba(60,255,95,0.15)] transition-all backdrop-blur-md flex items-center justify-center gap-2">
              Start Free
            </button>
</div>

<div className="relative p-8 rounded-2xl bg-[#111318] border border-[#3CFF5F]/50 shadow-[0_0_30px_rgba(60,255,95,0.1)] scale-105 z-10 reveal delay-75">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3CFF5F] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Most Popular
            </div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<div className="text-3xl font-bold mb-6">
              $49
              <span className="text-sm font-normal text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-2">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear"></iconify-icon>
                500k Monthly Calls
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear"></iconify-icon>
                Priority Support
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-[#3CFF5F]" icon="solar:check-circle-linear"></iconify-icon>
                10 Projects
              </li>
</ul>
<button className="relative w-full group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3CFF5F]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0B0F_0%,#3CFF5F_50%,#0B0B0F_100%)]" style={{animation: 'spin 3s linear infinite'}}></span>
<span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0F]/80 px-8 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all group-hover:bg-[#0B0B0F]/60 group-hover:text-[#3CFF5F] group-hover:shadow-[0_0_30px_rgba(60,255,95,0.4)]">
                Get Pro
              </span>
</button>
</div>

<div className="p-8 rounded-2xl bg-[#111318] border border-white/5 reveal delay-150">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-bold mb-6">Custom</div>
<ul className="space-y-4 mb-8 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                Unlimited Calls
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                Dedicated Success Manager
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:check-circle-linear"></iconify-icon>
                Unlimited Projects
              </li>
</ul>
<button className="group w-full py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 hover:border-[#3CFF5F]/50 hover:text-[#3CFF5F] hover:shadow-[0_0_20px_rgba(60,255,95,0.15)] transition-all backdrop-blur-md flex items-center justify-center gap-2">
              Contact Sales
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0e1014]">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-12 tracking-tight text-center">
          Questions &amp; Answers
        </h2>
<div className="space-y-4">

<details className="group border border-white/5 rounded-xl bg-[#0B0B0F] overflow-hidden transition-all duration-300 hover:border-white/10 open:border-[#3CFF5F]/30 open:bg-[#111318] reveal">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium outline-none">
<span>How does the credits system work?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              Credits are consumed based on compute time and data processed.
              Simple API calls use fewer credits than complex neural network
              operations. You can monitor usage in real-time.
            </div>
</details>

<details className="group border border-white/5 rounded-xl bg-[#0B0B0F] overflow-hidden transition-all duration-300 hover:border-white/10 open:border-[#3CFF5F]/30 open:bg-[#111318] reveal">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium outline-none">
<span>Can I self-host Aether?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              Yes, our Enterprise plan includes an option for on-premise
              deployment via Docker containers or Kubernetes clusters with
              air-gapped support.
            </div>
</details>

<details className="group border border-white/5 rounded-xl bg-[#0B0B0F] overflow-hidden transition-all duration-300 hover:border-white/10 open:border-[#3CFF5F]/30 open:bg-[#111318] reveal">
<summary className="flex cursor-pointer items-center justify-between p-6 text-white font-medium outline-none">
<span>Is my data used for training?</span>
<iconify-icon className="transition-transform duration-300 group-open:rotate-180 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
              Absolutely not. We maintain strict data isolation. Your inputs and
              outputs belong solely to you and are never used to train our base
              models.
            </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[#0B0B0F]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#3CFF5F] to-[#EFFF3C] opacity-[0.05] blur-[120px] rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8">
          Ready to build the future?
        </h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of developers pushing the boundaries of what's possible
          with AI.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="relative group overflow-hidden rounded-full p-[1px] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3CFF5F]/50 focus:ring-offset-2 focus:ring-offset-[#0B0B0F]">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0B0F_0%,#3CFF5F_50%,#0B0B0F_100%)]" style={{animation: 'spin 3s linear infinite'}}></span>
<span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0F]/80 px-10 py-4 text-lg font-bold text-white backdrop-blur-xl transition-all group-hover:bg-[#0B0B0F]/60 group-hover:text-[#3CFF5F] group-hover:shadow-[0_0_30px_rgba(60,255,95,0.4)]">
              Start Building Now
            </span>
</button>
<button className="px-10 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all">
            Contact Sales
          </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0e1014] relative overflow-hidden pt-20 pb-10">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

<div className="lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-[#3CFF5F] flex items-center justify-center text-black text-xs font-bold">
                A
              </div>
<span className="font-semibold text-white">AETHER</span>
</a>
<p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              The definitive platform for AI orchestration and neural workflows.
              Designing the intelligence layer of the internet.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#3CFF5F] hover:border-[#3CFF5F] transition-all" href="#">
<iconify-icon icon="prime:twitter"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#3CFF5F] hover:border-[#3CFF5F] transition-all" href="#">
<iconify-icon icon="prime:github"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#3CFF5F] hover:border-[#3CFF5F] transition-all" href="#">
<iconify-icon icon="prime:discord"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Resources</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Community
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Careers
                </a>
<span className="text-[10px] bg-white/10 text-white px-1.5 py-0.5 rounded ml-1">
                  Hiring
                </span>
</li>
<li>
<a className="hover:text-[#3CFF5F] transition-colors" href="#">
                  Legal
                </a>
</li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-gray-500">
            © 2024 Aether Inc. All rights reserved.
          </div>
<div className="flex items-center gap-2 bg-[#111318] border border-white/10 rounded-lg p-1 pr-1 focus-within:border-[#3CFF5F] transition-colors w-full md:w-auto">
<input className="bg-transparent border-none outline-none text-sm text-white px-3 w-64 placeholder-gray-600" placeholder="Subscribe to newsletter" type="email"/>
<button className="bg-white/10 hover:bg-[#3CFF5F] hover:text-black text-white p-2 rounded-md transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3CFF5F]/50 to-transparent"></div>
</footer>

<div className="fixed inset-y-0 right-0 w-[85vw] md:w-[450px] bg-[#0e1014]/95 backdrop-blur-3xl border-l border-white/10 z-40 transform translate-x-full shadow-[-50px_0_100px_rgba(0,0,0,0.8)] flex flex-col pt-24 pb-10 px-8 overflow-y-auto" id="mobile-menu">
<div className="space-y-10">
<div className="space-y-4">
<h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2 mb-6 border-l-2 border-[#3CFF5F]">
            Platform
          </h3>
<a className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-lg font-medium text-white hover:bg-white/[0.06] hover:border-[#3CFF5F]/30 transition-all group" href="#features">
            Features
            <iconify-icon className="text-gray-500 group-hover:text-[#3CFF5F] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-lg font-medium text-white hover:bg-white/[0.06] hover:border-[#3CFF5F]/30 transition-all group" href="#integration">
            Integrations
            <iconify-icon className="text-gray-500 group-hover:text-[#3CFF5F] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-lg font-medium text-white hover:bg-white/[0.06] hover:border-[#3CFF5F]/30 transition-all group" href="#pricing">
            Pricing
            <iconify-icon className="text-gray-500 group-hover:text-[#3CFF5F] transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="space-y-4">
<h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2 mb-6 border-l-2 border-purple-500">
            Company
          </h3>
<a className="block text-base text-gray-400 hover:text-white transition-colors pl-2" href="#company">
            About Aether
          </a>
<a className="block text-base text-gray-400 hover:text-white transition-colors pl-2" href="#">
            Blog
          </a>
<a className="block text-base text-gray-400 hover:text-white transition-colors pl-2" href="#">
            Careers
            <span className="text-[10px] bg-[#3CFF5F] text-black px-1.5 py-0.5 rounded ml-2 font-bold">
              HIRING
            </span>
</a>
</div>
</div>
<div className="mt-auto space-y-4 pt-10">
<a className="block w-full py-4 rounded-full border border-white/10 text-center font-medium text-white hover:bg-white/5 transition-colors" href="#">
          Sign In
        </a>
<a className="relative group block w-full overflow-hidden rounded-full p-[1px]" href="#">
<span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#0B0B0F_0%,#3CFF5F_50%,#0B0B0F_100%)]" style={{animation: 'spin 3s linear infinite'}}></span>
<span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#0B0B0F]/80 px-6 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all group-hover:bg-[#0B0B0F]/60 group-hover:text-[#3CFF5F]">
            Get Started
          </span>
</a>
</div>
</div>


    </>
  );
}
