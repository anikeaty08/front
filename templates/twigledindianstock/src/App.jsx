import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function closeMobileMenu() {
            const toggle = document.getElementById('mobile-menu-toggle');
            if(toggle) toggle.checked = false;
            const appSidebar = document.getElementById('app-sidebar');
            if(appSidebar && !appSidebar.classList.contains('-translate-x-full')) {
                appSidebar.classList.add('-translate-x-full');
            }
        }

        function toggleAppMobileSidebar() {
            const sidebar = document.getElementById('app-sidebar');
            sidebar.classList.toggle('-translate-x-full');
        }

        function appNavigate(view, subView = null) {
            closeMobileMenu();
            
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block', 'flex');
            });
            
            const targetView = document.getElementById(`view-${view}`);
            targetView.classList.remove('hidden');
            targetView.classList.add(view === 'app' ? 'flex' : 'block');

            const header = document.getElementById('main-header');
            if (view === 'auth' || view === 'app') {
                header.classList.add('-translate-y-full');
            } else {
                header.classList.remove('-translate-y-full');
            }

            if (view === 'auth' && subView) switchAuthForm(subView);
            if (view === 'app' && subView) switchAppView(subView);
            
            window.scrollTo({ top: 0, behavior: 'instant' });
        }

        function switchAuthForm(type) {
            document.querySelectorAll('.auth-form').forEach(el => el.classList.add('hidden'));
            document.getElementById(`auth-form-${type}`).classList.remove('hidden');

            const termDynamic = document.getElementById('auth-terminal-dynamic');
            let termText = '';
            
            if (type === 'login') termText = '> AWAITING CREDENTIALS_';
            else if (type === 'join') termText = '> INITIALIZING HANDSHAKE PROTOCOL_';
            else if (type === 'reset') termText = '> AWAITING RECOVERY TARGET_';

            termDynamic.innerHTML = `${termText}<span class="inline-block w-2.5 h-4 bg-[#00ff66] animate-pulse ml-1 translate-y-[1px]"></span>`;
        }

        function switchAppView(subView) {
            document.querySelectorAll('.app-subview').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            const sv = document.getElementById(`app-subview-${subView}`);
            if(sv) {
                sv.classList.remove('hidden');
                sv.classList.add('block');
            }

            document.querySelectorAll('.app-nav-link').forEach(el => {
                el.classList.remove('text-[#00ff66]', 'bg-white/[0.05]');
                el.classList.add('text-zinc-500');
            });
            document.querySelectorAll(`.nav-link-${subView}`).forEach(el => {
                el.classList.remove('text-zinc-500');
                el.classList.add('text-[#00ff66]', 'bg-white/[0.05]');
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="group/nav fixed inset-x-0 top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="main-header">
<input className="hidden peer" id="mobile-menu-toggle" type="checkbox"/>

<div className="relative z-30 flex h-10 items-center overflow-x-auto border-b border-white/5 bg-black/50 px-6 [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
<div className="flex items-center gap-8 whitespace-nowrap text-xs uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex items-center gap-2">
<span className="text-zinc-500">NIFTY 50</span>
<span className="text-white">₹22,453.30</span>
<span className="text-[#00ff66]">+0.85%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">HDFCBANK</span>
<span className="text-white">₹1,452.10</span>
<span className="text-red-500">-0.4%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">INFY</span>
<span className="text-white">₹1,643.20</span>
<span className="text-[#00ff66]">+2.1%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">TCS</span>
<span className="text-white">₹4,120.00</span>
<span className="text-[#00ff66]">+0.5%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">ITC</span>
<span className="text-white">₹412.50</span>
<span className="text-red-500">-1.1%</span>
</div>
<div className="flex items-center gap-2">
<span className="text-zinc-500">SBIN</span>
<span className="text-white">₹765.40</span>
<span className="text-[#00ff66]">+1.8%</span>
</div>
</div>
</div>

<div className="relative z-50 flex h-16 items-center justify-between px-6 bg-[#050505]">
<div className="flex items-center">
<button className="text-xl font-medium tracking-tight text-white uppercase hover:text-[#00ff66] transition-colors" onclick="appNavigate('home')" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                    TWIGLED.
                </button>
</div>
<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
<button className="text-xs font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Protocols</button>
<button className="text-xs font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>API</button>
<button className="text-xs font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Pricing</button>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex h-8 items-center justify-center rounded-full bg-white px-6 text-xs font-medium text-black transition-all hover:bg-zinc-200 uppercase tracking-widest" onclick="appNavigate('auth', 'login')" style={{fontFamily: '\'Inter\', sans-serif'}}>
                    System Access
                </button>
<label className="relative z-50 flex md:hidden h-8 w-8 cursor-pointer flex-col items-center justify-center gap-[4px] rounded-full border border-white/20 transition-colors hover:bg-white/10" htmlFor="mobile-menu-toggle">
<span className="block h-[1.5px] w-3.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] peer-checked:translate-y-[5.5px] peer-checked:rotate-45"></span>
<span className="block h-[1.5px] w-3.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] peer-checked:opacity-0 peer-checked:scale-0"></span>
<span className="block h-[1.5px] w-3.5 bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] peer-checked:-translate-y-[5.5px] peer-checked:-rotate-45"></span>
</label>
</div>
</div>

<div className="fixed inset-0 top-[104px] z-40 bg-[#050505]/95 backdrop-blur-xl border-t border-white/5 flex flex-col px-6 py-8 transition-all duration-500 ease-in-out opacity-0 pointer-events-none -translate-y-4 peer-checked:opacity-100 peer-checked:pointer-events-auto peer-checked:translate-y-0 md:hidden">
<nav className="flex flex-col gap-6 text-center">
<button className="text-lg font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Protocols</button>
<button className="text-lg font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>API</button>
<button className="text-lg font-medium tracking-widest text-white hover:text-[#00ff66] transition-colors uppercase" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Pricing</button>
</nav>
<div className="mt-auto flex flex-col gap-4">
<button className="h-12 w-full flex items-center justify-center rounded-full bg-[#00ff66] px-6 text-sm font-medium text-black transition-all hover:bg-[#00cc52] uppercase tracking-widest" onclick="appNavigate('auth', 'login')" style={{fontFamily: '\'Inter\', sans-serif'}}>
                    Initialize Session
                </button>
<button className="h-12 w-full flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 text-sm font-medium text-white transition-all hover:bg-white/5 uppercase tracking-widest" onclick="appNavigate('auth', 'join')" style={{fontFamily: '\'Inter\', sans-serif'}}>
                    Request Access
                </button>
</div>
</div>
</header>

<div className="page-view block pb-24" id="view-home">
<main className="pt-40 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-32 overflow-hidden">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
<div className="flex flex-col items-start z-10">
<div className="flex items-center gap-2 mb-8 text-[#00ff66]" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse"></div>
<span className="text-xs uppercase tracking-widest">System Online // Latency &lt; 5ms<br/><span className="text-zinc-500">Direct Market Access (DMA) Ready</span></span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[0.85] uppercase mb-8" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                        Algorithmic<br/>
<span className="text-[#00ff66]">Precision.</span><br/>
                        Retail<br/>
                        Accessible.
                    </h1>
<div className="flex items-start gap-4 mb-10 max-w-lg">
<div className="mt-1 flex-shrink-0 text-[#00ff66]">
<iconify-icon height="24" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-[#00ff66] text-sm font-medium uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Decentralize Your Knowledge</h3>
<p className="text-zinc-400 text-lg md:text-xl leading-relaxed">Execute algorithmic tax harvesting, simulate F&amp;O margins with zero latency, and calculate exact STT/SEBI charges before execution.</p>
</div>
</div>
<button className="flex items-center gap-2 h-12 rounded-full bg-[#00ff66] px-8 text-sm font-medium text-black transition-all hover:bg-[#00cc52] uppercase tracking-widest shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_40px_rgba(0,255,102,0.5)]" onclick="appNavigate('auth', 'join')">
                        Start Building
                        <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>

<div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[80px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00ff66]/10 rounded-full mix-blend-screen filter blur-[80px]"></div>
<div className="relative z-10 w-full max-w-lg rounded-xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col h-full">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<span className="text-xs text-zinc-500 font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>&gt;_ root@twigled-core:~</span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-600 mr-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>v2.4.1</span>
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col gap-3 text-sm md:text-base" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="text-[#00ff66] opacity-80">&gt; INITIALIZING twigled_CORE_v2.4...</div>
<div className="flex gap-2">
<span className="text-[#00ff66]">&gt;</span>
<span className="text-zinc-300">AUTHENTICATING ZERODHA_KITE...</span>
<span className="text-[#00ff66]">[OK]</span>
</div>
<div className="text-zinc-400">&gt; FETCHING POSITIONS... 14 FOUND.</div>
<div className="text-zinc-400">&gt; CALCULATING UNREALIZED P&amp;L...</div>
<div className="mt-4 flex gap-2">
<span className="text-[#00ff66]">&gt;</span>
<span className="text-blue-400 font-medium">STATUS: +₹1,42,050 (PROFIT)</span>
</div>
<div className="mt-auto pt-6 grid grid-cols-3 gap-4 border-t border-white/5 text-xs">
<div>
<div className="text-zinc-600 mb-1">API_CALLS</div>
<div className="text-white">1,402/s</div>
</div>
<div>
<div className="text-zinc-600 mb-1">UPTIME</div>
<div className="text-[#00ff66]">99.999%</div>
</div>
<div>
<div className="text-zinc-600 mb-1">ENCRYPTION</div>
<div className="text-purple-400">AES-256</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white leading-[0.9] uppercase mb-8" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                        Analyze<br/>
<span className="text-zinc-700">Simulate</span><br/>
                        Optimize
                    </h2>
<button className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-[#00ff66] flex items-center justify-center text-[#00ff66] group-hover:bg-[#00ff66]/10 transition-colors">
<iconify-icon height="20" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm md:text-base font-medium uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Initialize_Demo.exe</span>
</button>
</div>
<div className="border-l border-white/10 pl-8 md:pl-16">
<h3 className="text-[#00ff66] text-lg md:text-xl font-medium mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>&gt; SYSTEM_ARCHITECTURE</h3>
<p className="text-zinc-400 text-lg md:text-xl leading-relaxed mb-8">We support you in making your financial vision a reality. twigled breaks down the complex web of STT, Stamp Duty, Exchange Charges, and SEBI turnover fees so you know exactly what you're paying.</p>
<a className="inline-flex items-center gap-2 text-sm md:text-base text-white hover:text-[#00ff66] transition-colors font-medium tracking-widest uppercase" href="#" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        [READ_DOCUMENTATION] <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</section>

<section id="protocols">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[0.9] uppercase mb-12" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                    Core<br/>
<span className="text-[#00ff66]">Protocols</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 hover:bg-white/[0.03] transition-colors overflow-hidden">
<div className="flex items-center justify-between mb-12">
<div className="w-10 h-10 flex items-center justify-center text-blue-400">
<iconify-icon height="32" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<span className="text-xs text-zinc-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>01 // Brokerage_Calc</span>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white uppercase tracking-tight mb-4" style={{fontFamily: '\'Oswald\', sans-serif'}}>Transparent Execution Fees</h3>
<p className="text-zinc-500 text-base md:text-lg leading-relaxed">Instantly calculate exact STT (0.1% on delivery), Stamp Duty (0.015%), GST (18%), and SEBI turnover fees before execution. No hidden slippage.</p>
</div>
<div className="group relative rounded-2xl border border-white/5 bg-white/[0.01] p-8 hover:bg-white/[0.03] transition-colors overflow-hidden">
<div className="flex items-center justify-between mb-12">
<div className="w-10 h-10 flex items-center justify-center text-purple-500">
<iconify-icon height="32" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<span className="text-xs text-zinc-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>02 // Sim_Engine</span>
</div>
<h3 className="text-xl md:text-2xl font-medium text-white uppercase tracking-tight mb-4" style={{fontFamily: '\'Oswald\', sans-serif'}}>F&amp;O Sandbox</h3>
<p className="text-zinc-500 text-base md:text-lg leading-relaxed">Simulate BankNifty &amp; Nifty50 options strategies with live Greeks. Zero capital risk.</p>
</div>
</div>
</section>
</main>
<footer className="relative border-t border-white/10 bg-[#050505] pt-24 pb-8 overflow-hidden mt-32">
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl mix-blend-screen pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[0.9] uppercase mb-10" style={{fontFamily: '\'Oswald\', sans-serif'}}>
                            Initialize<br/>
                            Connection.
                        </h2>
<div className="flex max-w-md bg-white/[0.02] border border-white/10 rounded-lg overflow-hidden focus-within:border-[#00ff66]/50 transition-colors">
<input className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-sm md:text-base text-white placeholder:text-zinc-600 font-medium" placeholder="ENTER_EMAIL_ADDRESS" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="email"/>
<button className="bg-white text-black px-6 font-medium text-sm md:text-base tracking-widest uppercase hover:bg-zinc-200 transition-colors">
                                Join
                            </button>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-start lg:justify-end gap-16 lg:gap-32 pt-4">
<div className="flex flex-col gap-6">
<h4 className="text-xs text-zinc-600 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Network</h4>
<div className="flex flex-col gap-2 text-sm md:text-base text-zinc-400 font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-white">Support</span>
<span className="text-teal-400">1-800-TWIGLED</span>
<div className="h-4"></div>
<span className="text-white">Mumbai Node</span>
<span className="text-teal-400">022-2345-6789</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
<span className="text-lg md:text-xl font-medium tracking-tight text-white uppercase mb-4 sm:mb-0" style={{fontFamily: '\'Oswald\', sans-serif'}}>TWIGLED.</span>
<p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 sm:mb-0" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>© 2024 TWIGLED INDIAN STOCK MARKET.</p>
</div>
</div>
</footer>
</div>

<div className="page-view hidden fixed inset-0 z-[100] bg-[#050505] overflow-y-auto" id="view-auth">
<div className="fixed inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F46E5]/10 rounded-full blur-[100px]"></div>
<div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ff66]/10 rounded-full blur-[100px]"></div>
</div>
<div className="relative min-h-screen flex flex-col p-6 md:p-12 max-w-[1400px] mx-auto">
<button className="self-start flex items-center gap-3 text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-medium mb-12 md:mb-24" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="16" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Return To Base
            </button>
<div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center w-full">
<div className="flex flex-col max-w-md w-full">
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[0.85] mb-6 flex flex-col" style={{fontFamily: '\'Oswald\', sans-serif'}}>
<span className="text-white">SYSTEM</span>
<span className="text-[#00ff66]">ACCESS.</span>
</h1>
<p className="text-zinc-500 text-sm md:text-base mb-12" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Authenticate to access algorithmic trading protocols and portfolio analytics.</p>
<div className="relative w-full">

<form className="auth-form flex flex-col gap-6" id="auth-form-login" onsubmit="event.preventDefault(); appNavigate('app', 'dashboard');">
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-[#00ff66]" height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Operator ID (Email)
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff66]/50 transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="email" value="operator@twigled.core"/>
</div>
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-[#4F46E5]" height="14" icon="solar:key-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Passkey
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff66]/50 transition-colors tracking-[0.3em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="password" value="password123"/>
</div>
<div className="flex items-center justify-between mt-2">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 border border-white/20 bg-[#111111] group-hover:border-[#00ff66]/50 transition-colors flex items-center justify-center">
<input className="peer sr-only" type="checkbox"/>
<iconify-icon className="text-[#00ff66] opacity-0 peer-checked:opacity-100 transition-opacity" height="12" icon="solar:check-linear" style={{strokeWidth: '2'}} width="12"></iconify-icon>
</div>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Maintain Session</span>
</label>
<button className="text-[10px] text-blue-500 hover:text-blue-400 uppercase tracking-widest transition-colors" onclick="switchAuthForm('reset')" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="button">
                                    Reset Passkey
                                </button>
</div>
<button className="h-12 w-full bg-[#00ff66] text-black font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-[#00cc52] transition-colors flex items-center justify-center mt-2 shadow-[0_0_20px_rgba(0,255,102,0.15)] hover:shadow-[0_0_30px_rgba(0,255,102,0.3)]" type="submit">
                                Initialize Session
                            </button>
<div className="pt-6 border-t border-white/5 mt-2 text-center flex justify-center items-center gap-2">
<span className="text-[10px] text-zinc-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>New Operator?</span>
<button className="text-[10px] text-[#00ff66] hover:text-[#00cc52] uppercase tracking-widest transition-colors" onclick="switchAuthForm('join')" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="button">
                                    Request Access
                                </button>
</div>
</form>

<form className="auth-form hidden flex flex-col gap-6" id="auth-form-join" onsubmit="event.preventDefault(); appNavigate('app', 'dashboard');">
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-[#00ff66]" height="14" icon="solar:terminal-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Operator Alias
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff66]/50 transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="text"/>
</div>
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-[#00ff66]" height="14" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Secure Comm (Email)
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff66]/50 transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="email"/>
</div>
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-[#4F46E5]" height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Generate Passkey
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#00ff66]/50 transition-colors tracking-[0.3em]" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="password"/>
</div>
<button className="h-12 w-full border border-[#00ff66] text-[#00ff66] bg-[#00ff66]/5 font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-[#00ff66] hover:text-black transition-all flex items-center justify-center mt-4" type="submit">
                                Establish Link
                            </button>
<div className="pt-6 border-t border-white/5 mt-2 text-center flex justify-center items-center gap-2">
<span className="text-[10px] text-zinc-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Existing Node?</span>
<button className="text-[10px] text-blue-500 hover:text-blue-400 uppercase tracking-widest transition-colors" onclick="switchAuthForm('login')" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="button">
                                    Return to Login
                                </button>
</div>
</form>

<form className="auth-form hidden flex flex-col gap-6" id="auth-form-reset" onsubmit="event.preventDefault();">
<p className="text-zinc-400 text-xs md:text-sm mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Transmit your operator ID. System will provision a secure recovery protocol.</p>
<div>
<label className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-widest mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon className="text-blue-500" height="14" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                                    Operator ID (Email)
                                </label>
<input className="w-full h-12 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm md:text-base focus:outline-none focus:border-[#4F46E5]/50 transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="email"/>
</div>
<button className="h-12 w-full bg-white text-black font-medium text-xs md:text-sm tracking-widest uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center mt-4" type="submit">
                                Transmit Recovery Ping
                            </button>
<div className="pt-6 border-t border-white/5 mt-2 text-center">
<button className="text-[10px] text-zinc-500 hover:text-white uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto" onclick="switchAuthForm('login')" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="button">
<iconify-icon height="12" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon> Cancel Sequence
                                </button>
</div>
</form>
</div>
</div>
<div className="hidden md:flex justify-end w-full">
<div className="w-full max-w-lg rounded-xl border border-white/[0.05] bg-[#070707]/80 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden" style={{minHeight: '400px'}}>
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0a0a0a]">
<span className="text-xs text-zinc-500 font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>&gt;_ auth_server@twigled:~</span>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#00ff66]"></div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col gap-4 text-xs md:text-sm" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="text-zinc-400">&gt; ESTABLISHING SECURE CONNECTION...</div>
<div className="flex gap-2">
<span className="text-[#00ff66]">&gt;</span>
<span className="text-zinc-400">ENCRYPTION: AES-256-GCM</span>
<span className="text-[#00ff66]">[OK]</span>
</div>
<div className="mt-4 flex items-center text-zinc-300" id="auth-terminal-dynamic">
                                &gt; AWAITING CREDENTIALS_
                                <span className="inline-block w-2.5 h-4 bg-[#00ff66] animate-pulse ml-1 translate-y-[1px]"></span>
</div>
</div>
<div className="px-4 py-2 border-t border-white/5 bg-[#050505] flex justify-between items-center text-[10px] uppercase tracking-widest font-medium text-zinc-600" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>NODE: AP-SOUTH-1</span>
<span className="text-[#00ff66]">SECURE</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view hidden h-screen w-full bg-[#050505] overflow-hidden flex-col md:flex-row z-[100] fixed inset-0" id="view-app">

<div className="md:hidden flex items-center justify-between px-4 h-16 border-b border-white/5 bg-[#0a0a0a] flex-shrink-0">
<span className="text-lg font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>TWIGLED.</span>
<button className="text-white p-2" onclick="toggleAppMobileSidebar()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-[#0a0a0a] border-r border-white/5 flex flex-col transition-transform duration-300 -translate-x-full md:translate-x-0 md:relative md:flex-shrink-0" id="app-sidebar">

<button className="absolute top-4 right-4 md:hidden text-zinc-400 hover:text-white" onclick="toggleAppMobileSidebar()">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="h-16 flex items-center px-6 border-b border-white/5 hidden md:flex">
<span className="text-xl font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>TWIGLED.</span>
</div>
<div className="p-6 flex-1 flex flex-col gap-2">
<span className="text-[10px] text-zinc-600 uppercase tracking-widest mb-2 px-3 font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>System Modules</span>
<button className="app-nav-link nav-link-dashboard w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[#00ff66] bg-white/[0.05] transition-colors font-medium text-left" onclick="appNavigate('app', 'dashboard')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="18" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="app-nav-link nav-link-portfolio w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-500 hover:text-white hover:bg-white/[0.02] transition-colors font-medium text-left" onclick="appNavigate('app', 'portfolio')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="18" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Portfolio
                </button>
<button className="app-nav-link nav-link-profile w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-500 hover:text-white hover:bg-white/[0.02] transition-colors font-medium text-left" onclick="appNavigate('app', 'profile')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="18" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Profile
                </button>
<button className="app-nav-link nav-link-settings w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-500 hover:text-white hover:bg-white/[0.02] transition-colors font-medium text-left" onclick="appNavigate('app', 'settings')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="18" icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Settings
                </button>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex flex-col">
<span className="text-xs text-white font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>OPERATOR_992</span>
<span className="text-[10px] text-zinc-500 uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Zerodha Linked</span>
</div>
<div className="w-2 h-2 rounded-full bg-[#00ff66]"></div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-xs text-red-500/80 hover:text-red-400 hover:bg-red-500/10 transition-colors uppercase tracking-widest font-medium" onclick="appNavigate('home')" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="16" icon="solar:logout-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Terminate Link
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-y-auto app-scrollbar bg-[#050505] relative">

<div className="app-subview block p-4 md:p-8 lg:p-12 pb-24 max-w-7xl mx-auto w-full" id="app-subview-dashboard">
<header className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white uppercase mb-2" style={{fontFamily: '\'Oswald\', sans-serif'}}>System Dashboard</h1>
<p className="text-xs text-zinc-500 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Overview &amp; Real-time Executions</p>
</div>
<div className="flex items-center gap-3 text-xs" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/5 text-zinc-400">NIFTY: <span className="text-[#00ff66]">22,453.30</span></span>
<span className="px-3 py-1.5 rounded-md bg-white/[0.02] border border-white/5 text-zinc-400">BANKNIFTY: <span className="text-red-400">47,212.10</span></span>
</div>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 text-zinc-800"><iconify-icon height="64" icon="solar:wallet-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon></div>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Net Portfolio Value</span>
<div className="text-2xl md:text-3xl text-white font-medium tracking-tight relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>₹12,45,200.00</div>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col gap-4 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 text-[#00ff66]/10"><iconify-icon height="64" icon="solar:graph-up-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon></div>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Day's P&amp;L</span>
<div className="text-2xl md:text-3xl text-[#00ff66] font-medium tracking-tight relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>+₹14,250.50</div>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col gap-4 relative overflow-hidden sm:col-span-2 lg:col-span-1">
<div className="absolute top-0 right-0 p-6 text-blue-500/10"><iconify-icon height="64" icon="solar:safe-2-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon></div>
<span className="text-xs text-zinc-500 uppercase tracking-widest font-medium relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Margin Available</span>
<div className="text-2xl md:text-3xl text-white font-medium tracking-tight relative z-10" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>₹8,00,000.00</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 bg-black/20 flex items-center justify-between">
<h3 className="text-sm font-medium text-white uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Recent Executions</h3>
<button className="text-xs text-[#00ff66] hover:text-white transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>[ VIEW_ALL ]</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs whitespace-nowrap" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<thead className="text-zinc-600 uppercase tracking-widest border-b border-white/5 bg-[#0a0a0a]">
<tr>
<th className="px-6 py-3 font-medium">Time</th>
<th className="px-6 py-3 font-medium">Symbol</th>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium">Qty</th>
<th className="px-6 py-3 font-medium">Avg Price</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">09:15:02</td>
<td className="px-6 py-4 text-white font-medium">BANKNIFTY 47200 CE</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">BUY</span></td>
<td className="px-6 py-4">105</td>
<td className="px-6 py-4">₹245.50</td>
<td className="px-6 py-4 text-[#00ff66]">COMPLETE</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">09:20:45</td>
<td className="px-6 py-4 text-white font-medium">HDFCBANK</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-red-500/10 text-red-400 rounded">SELL</span></td>
<td className="px-6 py-4">500</td>
<td className="px-6 py-4">₹1450.20</td>
<td className="px-6 py-4 text-[#00ff66]">COMPLETE</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">10:05:12</td>
<td className="px-6 py-4 text-white font-medium">NIFTY 22400 PE</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded">BUY</span></td>
<td className="px-6 py-4">250</td>
<td className="px-6 py-4">₹85.10</td>
<td className="px-6 py-4 text-yellow-500">PENDING</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="app-subview hidden p-4 md:p-8 lg:p-12 pb-24 max-w-7xl mx-auto w-full" id="app-subview-portfolio">
<header className="mb-10 flex flex-col gap-2">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Portfolio Holdings</h1>
<p className="text-xs text-zinc-500 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Long Term &amp; Swing Positions</p>
</header>
<div className="rounded-xl border border-white/5 bg-white/[0.01] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-xs whitespace-nowrap" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<thead className="text-zinc-600 uppercase tracking-widest border-b border-white/5 bg-[#0a0a0a]">
<tr>
<th className="px-6 py-4 font-medium">Asset</th>
<th className="px-6 py-4 font-medium">Qty</th>
<th className="px-6 py-4 font-medium">Avg Cost</th>
<th className="px-6 py-4 font-medium">LTP</th>
<th className="px-6 py-4 font-medium">Current Value</th>
<th className="px-6 py-4 font-medium text-right">P&amp;L</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm text-white font-medium">INFY</span>
<span className="text-[10px] text-zinc-600">IT Sector</span>
</div>
</td>
<td className="px-6 py-5">150</td>
<td className="px-6 py-5">₹1,420.00</td>
<td className="px-6 py-5">₹1,643.20</td>
<td className="px-6 py-5">₹2,46,480.00</td>
<td className="px-6 py-5 text-right">
<div className="flex flex-col items-end">
<span className="text-[#00ff66]">+₹33,480.00</span>
<span className="text-[10px] text-[#00ff66]">+15.71%</span>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm text-white font-medium">HDFCBANK</span>
<span className="text-[10px] text-zinc-600">Banking</span>
</div>
</td>
<td className="px-6 py-5">200</td>
<td className="px-6 py-5">₹1,550.00</td>
<td className="px-6 py-5">₹1,452.10</td>
<td className="px-6 py-5">₹2,90,420.00</td>
<td className="px-6 py-5 text-right">
<div className="flex flex-col items-end">
<span className="text-red-500">-₹19,580.00</span>
<span className="text-[10px] text-red-500">-6.31%</span>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="px-6 py-5">
<div className="flex flex-col">
<span className="text-sm text-white font-medium">TCS</span>
<span className="text-[10px] text-zinc-600">IT Sector</span>
</div>
</td>
<td className="px-6 py-5">50</td>
<td className="px-6 py-5">₹3,800.00</td>
<td className="px-6 py-5">₹4,120.00</td>
<td className="px-6 py-5">₹2,06,000.00</td>
<td className="px-6 py-5 text-right">
<div className="flex flex-col items-end">
<span className="text-[#00ff66]">+₹16,000.00</span>
<span className="text-[10px] text-[#00ff66]">+8.42%</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="app-subview hidden p-4 md:p-8 lg:p-12 pb-24 max-w-7xl mx-auto w-full" id="app-subview-profile">
<header className="mb-10 flex flex-col gap-2">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>Operator Profile</h1>
<p className="text-xs text-zinc-500 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Identity &amp; Protocol Keys</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col gap-6">
<div className="flex items-center gap-4 border-b border-white/5 pb-6">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon height="32" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium tracking-tight" style={{fontFamily: '\'Oswald\', sans-serif'}}>ALEX_MERCER</h3>
<span className="text-[10px] text-zinc-500 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>UID: 88A9-FX21</span>
</div>
</div>
<div className="flex flex-col gap-4 text-xs" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-zinc-600 uppercase">Comm Link (Email)</span>
<span className="text-zinc-300">alex.m@secure.net</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-zinc-600 uppercase">Account Status</span>
<span className="text-[#00ff66]">ACTIVE</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-zinc-600 uppercase">Clearance Level</span>
<span className="text-white">PRO_NODE</span>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col gap-6">
<h3 className="text-sm font-medium text-white uppercase tracking-widest border-b border-white/5 pb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Broker Integrations</h3>
<div className="flex flex-col gap-4">

<div className="flex items-center justify-between p-4 rounded-lg border border-[#00ff66]/20 bg-[#00ff66]/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#111111] border border-white/10 flex items-center justify-center text-orange-500">
<iconify-icon height="18" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Zerodha Kite</span>
<span className="text-[10px] text-[#00ff66] uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Linked</span>
</div>
</div>
<button className="text-[10px] text-red-400 hover:text-red-300 uppercase tracking-widest font-medium transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Revoke</button>
</div>

<div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#111111] border border-white/10 flex items-center justify-center text-purple-500">
<iconify-icon height="18" icon="solar:graph-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-white font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Upstox</span>
<span className="text-[10px] text-zinc-600 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Disconnected</span>
</div>
</div>
<button className="text-[10px] text-white hover:text-[#00ff66] border border-white/10 hover:border-[#00ff66]/50 px-3 py-1.5 rounded transition-all uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Connect</button>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-white/[0.01] p-6 md:p-8 flex flex-col gap-6 lg:col-span-2">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<h3 className="text-sm font-medium text-white uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Access Protocols (API)</h3>
<button className="flex items-center gap-2 text-[10px] text-black bg-white hover:bg-zinc-200 px-3 py-1.5 rounded uppercase tracking-widest font-medium transition-colors" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<iconify-icon height="12" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="12"></iconify-icon> Generate New Key
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs whitespace-nowrap" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<thead className="text-zinc-600 uppercase tracking-widest border-b border-white/5">
<tr>
<th className="py-3 font-medium">Name</th>
<th className="py-3 font-medium">Token</th>
<th className="py-3 font-medium">Created</th>
<th className="py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-zinc-300">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="py-4">Algo_Prod_V1</td>
<td className="py-4"><span className="blur-sm select-none transition-all hover:blur-none cursor-pointer">twg_live_9f8d7c6b5a4</span></td>
<td className="py-4">Oct 12, 2023</td>
<td className="py-4 text-right"><button className="text-red-500 hover:text-red-400"><iconify-icon height="16" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon></button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="app-subview hidden p-4 md:p-8 lg:p-12 pb-24 max-w-7xl mx-auto w-full" id="app-subview-settings">
<header className="mb-10 flex flex-col gap-2">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-white uppercase" style={{fontFamily: '\'Oswald\', sans-serif'}}>System Settings</h1>
<p className="text-xs text-zinc-500 uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Risk Parameters &amp; Environment Configuration</p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="flex flex-col gap-8">
<div className="flex items-center gap-3 border-b border-white/5 pb-4">
<iconify-icon className="text-red-400" height="20" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<h3 className="text-sm font-medium text-white uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Risk Management Controls</h3>
</div>
<div className="flex flex-col gap-6">

<div className="flex flex-col gap-4">
<div className="flex justify-between items-center text-xs" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="text-zinc-400 uppercase tracking-widest">Max Daily Loss Limit</span>
<span className="text-red-400 bg-red-500/10 px-2 py-0.5 rounded">₹10,000</span>
</div>
<input className="w-full" max="50000" min="1000" type="range" value="10000"/>
<p className="text-[10px] text-zinc-600 font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>System halts new orders if MTM breaches this value.</p>
</div>

<div className="flex flex-col gap-3">
<label className="text-xs text-zinc-400 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Max Orders / Minute</label>
<input className="w-full h-10 bg-[#111111]/80 border border-white/5 px-4 text-white text-sm focus:outline-none focus:border-[#00ff66]/50 transition-colors rounded-lg" style={{fontFamily: '\'JetBrains Mono\', monospace'}} type="number" value="30"/>
</div>
</div>
</div>

<div className="flex flex-col gap-8">
<div className="flex items-center gap-3 border-b border-white/5 pb-4">
<iconify-icon className="text-blue-400" height="20" icon="solar:monitor-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<h3 className="text-sm font-medium text-white uppercase tracking-widest" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Environment Configuration</h3>
</div>
<div className="flex flex-col gap-6">

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-300 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Terminal Mode</span>
<span className="text-[10px] text-zinc-600 font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Enables raw log output in dashboard</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ff66]"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-300 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Display Ticker Tape</span>
<span className="text-[10px] text-zinc-600 font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Show global index movements globally</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ff66]"></div>
</label>
</div>

<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<span className="text-xs text-zinc-300 uppercase tracking-widest font-medium" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>Execution Sounds</span>
<span className="text-[10px] text-zinc-600 font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Audio cues on order fill</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00ff66]"></div>
</label>
</div>
</div>
<div className="pt-6 border-t border-white/5 mt-4">
<button className="h-10 px-6 rounded-lg bg-[#00ff66] text-black font-medium text-xs tracking-widest uppercase hover:bg-[#00cc52] transition-colors w-full sm:w-auto">
                                Apply Configuration
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
