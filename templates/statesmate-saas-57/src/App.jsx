import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
lime: '#c1ff72',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Simple spotlight effect handler
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-2xl lg:text-3xl font-semibold tracking-tighter font-display" href="#">
                States<span className="transition-colors text-stone-500">mate</span>
</a>

<nav className="hidden lg:flex font-medium gap-x-10 items-center">
<a className="hover:text-stone-900 transition-colors text-sm text-stone-600" href="#services">Categories</a>
<a className="hover:text-stone-900 transition-colors text-sm text-stone-600" href="#cases">Success Stories</a>
<a className="hover:text-stone-900 transition-colors text-sm text-stone-600" href="#">Vendors</a>
</nav>

<div className="flex gap-x-8 items-center">
<a className="hidden lg:block text-sm font-medium text-stone-600 hover:text-stone-900" href="#">Sign in</a>
<button className="bg-stone-900 text-[#c1ff72] hover:bg-stone-800 transition-all font-medium px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group">
                    Find Vendors
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 lg:gap-12 min-h-[60vh] lg:min-h-[75vh] max-w-[1600px] mr-auto ml-auto pt-8 pr-6 pb-12 pl-6 gap-x-8 gap-y-8 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-6" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-600">
<span className="w-2 h-2 rounded-full bg-[#c1ff72] animate-pulse"></span>
                        Curation Station for SaaS &amp; AI
                    </div>

<h1 className="leading-[0.95] lg:text-7xl xl:text-8xl text-5xl font-medium text-stone-900 tracking-tighter font-display">Scale with the <span className="inline-block text-stone-900 font-display relative">Best Vendors.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#c1ff72] -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.6" stroke="currentColor" strokeWidth="8"></path></svg>
</span></h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 font-sans max-w-2xl">
                        We curate dream service stacks for SaaS and AI-native businesses. Connect with top-tier partners for GTM, Revenue, Finance, and Operations to fuel your growth.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2 gap-x-4 gap-y-4">
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight pt-4 pr-8 pb-4 pl-8 relative">
                                Start Curation
                            </span>
<div className="button-shine"></div>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-200/50 transition-colors tracking-tight">
                            Explore Categories
                        </button>
</div>
<style className="">
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(193, 255, 114, 0.1), rgba(255, 255, 255, 0.5), rgba(193, 255, 114, 0.1));
                        box-shadow: inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05), inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5), 0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2), 0 0 0.1em 0.25em rgba(193, 255, 114, 0.4) inset, 0 0 0 0 rgba(255, 255, 255, 1);
                        backdrop-filter: blur(4px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.98); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(193, 255, 114, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#c1ff72] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-4">

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg max-w-sm mx-auto w-full" style={{animationDelay: '0s'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center border shrink-0 bg-lime-50 text-lime-600 border-lime-100">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900" style={{}}>GTM Stack</p>
<span className="text-[10px] text-stone-400">Matched</span>
</div>
<p className="text-xs text-stone-500 truncate">Salesforce + Clay + Gong</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-100 text-stone-600 border-stone-200">Verified</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:ml-8 max-w-sm mx-auto w-full" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#c1ff72] w-10 h-10 border rounded-full items-center justify-center text-stone-900 border-lime-600">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Executive Search</p>
<span className="text-[10px] text-stone-400">Active</span>
</div>
<p className="text-xs text-stone-500 truncate">VP of Growth Candidates</p>
</div>
<span className="bg-[#c1ff72] text-[10px] px-2 py-0.5 rounded border border-[#aae65f] font-medium text-stone-900">3 Ready</span>
</div>

<div className="glass-panel p-4 rounded-xl flex items-center gap-4 animate-float shadow-lg lg:-ml-4 max-w-sm mx-auto w-full" style={{animationDelay: '2.5s'}}>
<div className="w-10 h-10 rounded-full text-[#c1ff72] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-0.5">
<p className="text-xs font-semibold text-stone-900">Finance Ops</p>
<span className="text-[10px] text-stone-400">Audit</span>
</div>
<p className="text-xs text-stone-500 truncate">Fractional CFO Services</p>
</div>
<span className="text-[10px] px-2 py-0.5 rounded border font-medium bg-stone-900 text-white border-stone-700">Top 1%</span>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_40px_rgba(0,0,0,0.02)]">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-sm font-medium text-stone-400 uppercase tracking-widest mb-6">Powering Modern SaaS Teams</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">

<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:boxes"></iconify-icon> Linear</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:zap"></iconify-icon> Raycast</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:triangle"></iconify-icon> Vercel</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:hexagon"></iconify-icon> Scale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:layers"></iconify-icon> Stack</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:command"></iconify-icon> Command</div>
</div>
<div className="flex items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 ml-12 lg:ml-24">
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:boxes"></iconify-icon> Linear</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:zap"></iconify-icon> Raycast</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:triangle"></iconify-icon> Vercel</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:hexagon"></iconify-icon> Scale</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:layers"></iconify-icon> Stack</div>
<div className="flex items-center gap-2 text-xl lg:text-2xl font-semibold font-display"><iconify-icon icon="lucide:command"></iconify-icon> Command</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12">
<h2 className="lg:text-5xl text-3xl font-medium text-stone-900 tracking-tight font-display">
                            The Right Partners. <span className="text-stone-400">At The Right Stage.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-2">CMO &amp; Growth</h3>
<p className="text-stone-500 text-sm leading-relaxed">Stop wasting budget on mismatched agencies. We find partners who specialize in your ARR stage and vertical.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">CEO &amp; Vision</h3>
<p className="text-stone-500 text-sm leading-relaxed">Scale your vision with AI-native operational partners that integrate seamlessly with your existing tech stack.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-200 rounded-2xl hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2 text-stone-900">CRO &amp; Revenue</h3>
<p className="text-stone-500 text-sm leading-relaxed">Fix leaky funnels. We curate retention and sales enablement vendors that directly impact NRR and CAC.</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mx-auto mb-12 px-6" id="services">
<h2 className="text-3xl lg:text-5xl font-medium text-stone-900 tracking-tight font-display mb-10 lg:mb-12">Curated Ecosystems</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#0a0a0a] border-[#1a1a1a] border rounded-[32px] p-6 relative justify-between">

<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon icon="lucide:pie-chart" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-semibold text-white font-display mb-3 tracking-tight">GTM &amp; Revenue</h3>
<p className="text-stone-400 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Architect a revenue engine. From Outbound agencies to CRM implementers, we source the stack that closes deals.
                                </p>
<a className="inline-flex items-center text-white font-medium text-sm hover:underline underline-offset-4 group/link" href="#">
                                    Browse GTM Vendors 
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-900 w-full max-w-[280px] z-10 rounded-xl p-5 relative shadow-2xl border border-stone-800">
<div className="flex gap-2 border-stone-800 border-b mb-4 pb-3 items-center">
<div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-stone-600"></div>
<div className="text-[10px] text-stone-500 font-mono ml-2">stack_config.json</div>
</div>
<div className="space-y-3 font-mono text-[10px] text-stone-400">
<div className="flex gap-2"><span className="text-purple-400">"revenue_stack"</span>: {</div>
<div className="pl-4 flex gap-2"><span className="text-blue-400">"crm"</span>: <span className="text-white">"Salesforce"</span>,</div>
<div className="pl-4 flex gap-2"><span className="text-blue-400">"enrichment"</span>: <span className="text-white">"Clay"</span>,</div>
<div className="pl-4 flex gap-2"><span className="text-blue-400">"outbound"</span>: <span className="text-white">"SmartLead"</span></div>
<div className="flex gap-2">},</div>
<div className="flex gap-2"><span className="text-purple-400">"status"</span>: <span className="text-[#c1ff72]">"Optimized"</span></div>

<div className="flex gap-3 bg-stone-800 border-stone-700 border rounded-lg mt-4 p-2 items-center">
<div className="h-6 w-6 rounded bg-lime-900/50 text-lime-400 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:check-circle-2" width="14"></iconify-icon>
</div>
<div className="flex-1 text-[9px] text-stone-300">Data Flow Active</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-lime-300 border-lime-300 border rounded-[32px] p-6 relative items-center justify-between">

<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div className="">
<div className="w-12 h-12 rounded-2xl bg-white/40 backdrop-blur-sm flex items-center justify-center mb-6 text-stone-900">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-semibold text-stone-900 font-display mb-3 tracking-tight">Teams &amp; Operations</h3>
<p className="text-stone-800 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        People processes, simplified. Find partners for recruiting, EOR, and internal ops that scale with your headcount.
                                    </p>
</div>
<a className="inline-flex items-center text-stone-900 font-semibold text-sm hover:underline underline-offset-4 group/link" href="#">
                                    View Operations Partners
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-lime-400/50 p-4">

<div className="flex gap-3">

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Recruiting</div>
<div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div className="h-1.5 w-12 bg-lime-300 rounded"></div>
<span className="text-[8px] text-stone-400">Eng</span>
</div>
<div className="h-1 w-full bg-stone-100 rounded"></div>
</div>
<div className="bg-white p-3 rounded border border-stone-100 shadow-sm">
<div className="flex justify-between items-center mb-2">
<div className="h-1.5 w-8 bg-orange-300 rounded"></div>
<span className="text-[8px] text-stone-400">Sales</span>
</div>
</div>
</div>

<div className="flex-1 bg-stone-50 rounded-lg p-2 space-y-2">
<div className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Onboarding</div>
<div className="bg-white p-3 rounded border border-lime-500 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-lime-500"></div>
<div className="h-1.5 w-16 bg-stone-800 rounded mb-2"></div>
<div className="mt-2 flex items-center gap-1">
<div className="w-4 h-4 rounded-full bg-stone-200"></div>
<div className="text-[8px] text-stone-400">Rippling Sync</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group overflow-hidden lg:p-10 flex flex-col min-h-[350px] transition-transform hover:scale-[1.01] duration-300 bg-emerald-50 border-emerald-100 border rounded-[32px] pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="relative w-full h-32 mb-4">
<div className="absolute right-0 top-0 space-y-3 w-full max-w-[220px]">
<div className="bg-white p-3 rounded-2xl rounded-tr-none shadow-sm text-xs text-stone-600 ml-auto w-fit transform group-hover:-translate-x-1 transition-transform delay-75 border border-emerald-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:arrow-up-right"></iconify-icon>
                                            NRR Increased to 120%
                                        </div>
</div>
<div className="bg-stone-900 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-white w-fit transform group-hover:translate-x-1 transition-transform delay-100">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#c1ff72]" icon="lucide:shield-check"></iconify-icon>
                                            Compliance Passed
                                        </div>
</div>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 text-emerald-800">
<iconify-icon icon="lucide:banknote" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-semibold text-stone-900 font-display mb-2 tracking-tight">Finances &amp; Compliance</h3>
<p className="leading-relaxed text-sm text-stone-700 mb-4">Fractional CFOs, Tax AI, and audit partners to keep your runway clear.</p>
<a className="inline-flex items-center text-stone-900 font-semibold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    View Finance <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">

<div className="flex w-full h-32 relative justify-end">
<div className="relative transform rotate-3 group-hover:rotate-6 transition-transform duration-500 origin-bottom-right">
<div className="bg-white p-4 rounded-xl shadow-lg border border-sky-100 w-36">
<div className="flex justify-between items-end mb-2">
<div className="text-[10px] text-stone-400">Churn Rate</div>
<div className="text-xs font-bold text-sky-600">-2.4%</div>
</div>
<div className="h-12 w-full flex items-end gap-1">
<div className="w-1/5 bg-sky-100 h-[60%] rounded-sm"></div>
<div className="w-1/5 bg-sky-100 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-sky-100 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-sky-100 h-[30%] rounded-sm"></div>
<div className="w-1/5 bg-sky-500 h-[20%] rounded-sm"></div>
</div>
</div>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center mb-4 text-sky-800">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-semibold text-stone-900 font-display mb-2 tracking-tight">Retention &amp; CS</h3>
<p className="text-stone-700 text-sm mb-4 leading-relaxed">Experts in ChurnZero, Intercom, and CS strategy to lock in customer value.</p>
<a className="inline-flex items-center text-stone-900 font-semibold text-xs uppercase tracking-wide hover:opacity-70" href="#">
                                    View Retention <iconify-icon className="ml-1" icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="lg:py-16 lg:px-12 max-w-[1600px] mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="text-center max-w-4xl mx-auto space-y-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 gap-x-8 gap-y-8">
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon className="" icon="lucide:filter" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900">Strictly Vetted</h3>
<p className="text-stone-600 text-sm leading-relaxed">We reject 98% of vendors. If they are on Statesmate, they have proven ROI.</p>
</div>
<div className="border space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon className="" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900">Speed to Scale</h3>
<p className="text-stone-600 text-sm leading-relaxed">Skip the RFP process. Get matched with the right partner in less than 48 hours.</p>
</div>
<div className="space-y-3">
<div className="mx-auto w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-stone-900 mb-2">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900">AI-Native Focus</h3>
<p className="text-stone-600 text-sm leading-relaxed">We understand the unique needs of AI businesses, from GPU sourcing to data ethics.</p>
</div>
</div>
</div>
</section>


<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-[#c1ff72] rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-6xl leading-tight font-medium text-stone-900 tracking-tight font-display">Ready to build your dream team?</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<button className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center justify-center flex">
                                    Get Matched Now
                                </button>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.8) 0%, transparent 20%)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-neutral-50 border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-2xl font-bold tracking-tighter font-display">States<span className="text-stone-500">mate</span></span>
</div>
<p className="text-sm text-stone-500 font-sans max-w-sm leading-relaxed">
                                The curation station for SaaS and AI-native businesses. Scale faster with the best vendors.
                            </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-20 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Platform</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#services">Vendors</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#cases">Success Stories</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">For Agencies</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Company</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#">Manifesto</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Social</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="14"></iconify-icon> Twitter</a></li>
<li><a className="flex items-center gap-2 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="simple-icons:linkedin" width="14"></iconify-icon> LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-200 text-stone-400">
<p>© 2024 Statesmate. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-stone-600" href="#">Privacy</a>
<a className="hover:text-stone-600" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>
</main>
</div>


    </>
  );
}
