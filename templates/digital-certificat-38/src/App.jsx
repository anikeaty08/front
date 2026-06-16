import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
mono: ['Inter', 'monospace'], // Tech mono look
},
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
},
accent: {
DEFAULT: '#F5A623', // Requested specific orange
glow: 'rgba(245, 166, 35, 0.5)',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'scan': 'scan 4s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scan: {
'0%': { backgroundPosition: '0% 0%' },
'100%': { backgroundPosition: '0% 100%' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-8 h-8 relative flex items-center justify-center">
<svg className="w-full h-full text-accent" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L2 17L12 22L22 17L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="12" fill="currentColor" r="3"></circle>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">SymbolTech</span>
</div>
<div className="hidden md:flex gap-10 text-sm font-medium text-slate-400 tracking-wide uppercase">
<a className="hover:text-accent transition-colors" href="#features">Platform</a>
<a className="hover:text-accent transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-accent transition-colors" href="#pricing">Enterprise</a>
</div>
<button className="text-sm font-semibold text-white bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded border border-white/10 transition-all backdrop-blur-sm">
                Login
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center overflow-hidden">


<div className="absolute inset-0 z-0">
<img alt="Digital Identity" className="w-full h-full object-cover object-[center_20%] saturate-[0.8] brightness-[0.7]" src="https://images.unsplash.com/photo-1616766098956-c81f12114571?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply"></div>

<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
<div className="absolute inset-0 scanlines opacity-30"></div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center h-full pt-20">

<div className="lg:col-span-6 space-y-10">

<div className="inline-flex items-center gap-3 px-3 py-1 border-l-2 border-accent bg-slate-900/50 backdrop-blur-sm">
<span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">System Status: Online</span>
</div>
<h1 className="text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Identity <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">Verified.</span>
</h1>
<p className="text-xl text-slate-300 font-light max-w-lg leading-relaxed border-l border-white/10 pl-6">
                    Next-generation credentialing infrastructure. Issue verifiable digital badges and certificates anchored in cryptographic truth.
                </p>
<div className="flex flex-col sm:flex-row gap-5 pt-4">
<button className="group bg-accent hover:bg-orange-500 text-white px-8 py-4 rounded font-medium transition-all shadow-[0_0_30px_rgba(245,166,35,0.2)] flex items-center justify-center gap-3">
<span className="tracking-wide">Start Verification</span>
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="scan-line"></i>
</button>
<button className="bg-slate-900/60 backdrop-blur border border-white/10 hover:border-white/30 text-white px-8 py-4 rounded font-medium transition-all flex items-center justify-center gap-3">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                        Watch Demo
                    </button>
</div>
</div>

<div className="lg:col-span-6 h-[600px] relative pointer-events-none hidden lg:block">


<div className="absolute top-20 left-0 animate-float" style={{animationDelay: '1s'}}>
<div className="glass-panel p-4 rounded-sm border-l-2 border-l-accent max-w-[180px]">
<div className="text-[10px] text-slate-400 font-mono mb-1">USER_ID</div>
<div className="text-sm text-white font-mono tracking-wider">8829-AF-X</div>
<div className="h-px w-full bg-white/10 my-2"></div>
<div className="flex justify-between items-center">
<span className="text-[9px] text-slate-500 uppercase">Signal</span>
<div className="flex gap-0.5">
<div className="w-1 h-2 bg-accent"></div>
<div className="w-1 h-2 bg-accent"></div>
<div className="w-1 h-2 bg-accent"></div>
<div className="w-1 h-2 bg-slate-700"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-full w-12 h-px bg-white/20">
<div className="absolute right-0 top-[-2px] w-1 h-1 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute top-1/3 right-10 flex flex-col items-center">

<div className="relative w-40 h-44 group">
<svg className="w-full h-full drop-shadow-[0_0_15px_rgba(245,166,35,0.3)]" viewbox="0 0 100 115">
<path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="rgba(245,166,35,0.1)" stroke="#F5A623" strokeWidth="0.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<i className="w-10 h-10 text-accent mb-2 stroke-[2]" data-lucide="check"></i>
<span className="text-xs font-semibold text-accent tracking-widest uppercase">Verified</span>
<span className="text-[9px] font-mono text-accent/70 mt-1">24.10.24</span>
</div>

<div className="absolute inset-[-10px] border border-dashed border-accent/20 rounded-full animate-spin-slow opacity-30"></div>
</div>

<div className="absolute -top-24 right-[-40px] w-28 h-32 opacity-70">
<svg className="w-full h-full" viewbox="0 0 100 115">
<path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-[10px] font-semibold text-slate-400 tracking-wider">PENDING</span>
<span className="text-[8px] font-mono text-slate-600">VC-1074</span>
</div>

<div className="absolute bottom-4 left-0 w-px h-12 bg-white/10 rotate-45 origin-bottom"></div>
</div>

<div className="absolute -bottom-16 left-[-60px] w-24 h-28 opacity-80 animate-float" style={{animationDuration: '8s'}}>
<svg className="w-full h-full" viewbox="0 0 100 115">
<path d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" fill="rgba(15,23,42,0.6)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="briefcase"></i>
</div>
</div>

<div className="absolute top-[200px] -left-[180px]">
<div className="bg-black/60 backdrop-blur-md border border-slate-700/50 p-3 rounded font-mono text-[10px] leading-tight text-slate-400 w-48">
<div className="flex justify-between border-b border-white/5 pb-1 mb-1">
<span>LOG_cb2</span>
<span className="text-accent">●</span>
</div>
<div className="opacity-50">"iss": "did:eth:0x7..."</div>
<div className="text-emerald-400/80">"verified": true</div>
<div className="opacity-50">"exp": 17300400</div>
</div>

<svg className="absolute top-1/2 left-full w-24 h-20 text-accent/30 overflow-visible">
<path d="M0 0 L10 0 L40 -40 L80 -40" fill="none" stroke="currentColor" strokeWidth="1" vector-effect="non-scaling-stroke"></path>
<circle cx="80" cy="-40" fill="currentColor" r="2"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">

<div className="p-10 rounded border border-red-900/20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-red-900/10 to-slate-900/40 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<i className="w-6 h-6" data-lucide="shield-alert"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-200 tracking-tight">Legacy Formats</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 text-slate-400 text-lg font-light">
<i className="w-5 h-5 mt-1 shrink-0 text-red-900/50" data-lucide="x"></i>
                            PDFs are easily forged and difficult to verify at scale
                        </li>
<li className="flex gap-4 text-slate-400 text-lg font-light">
<i className="w-5 h-5 mt-1 shrink-0 text-red-900/50" data-lucide="x"></i>
                            No centralized digital showcase for recipients
                        </li>
</ul>
</div>

<div className="p-10 rounded border border-accent/20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 to-slate-900/40 backdrop-blur-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 blur-[80px]"></div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">SymbolTech Standard</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 text-slate-300 text-lg font-light">
<i className="w-5 h-5 mt-1 shrink-0 text-accent" data-lucide="check"></i>
                            Instant blockchain verification via QR or Link
                        </li>
<li className="flex gap-4 text-slate-300 text-lg font-light">
<i className="w-5 h-5 mt-1 shrink-0 text-accent" data-lucide="check"></i>
                            Automated issuance to thousands via API
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900/30 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Platform Modules</h2>
<p className="text-xl text-slate-400 max-w-2xl font-light">End-to-end reputation management infrastructure.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Smart Issuance</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">Design dynamic templates. Issue credentials that update in real-time based on user data.</p>
</div>

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="scan-face"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Verification Layer</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">Cryptographic proofs embedded in every badge. Instant authenticity checks without login.</p>
</div>

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="layout-grid"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Identity Wallet</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">A unified passport for users to store, manage, and share their achievements on LinkedIn.</p>
</div>

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">White-label UI</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">Fully branded verification pages hosted on your domain with your CSS variables.</p>
</div>

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Analytics</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">Track share rates, views, and social engagement across all issued credentials.</p>
</div>

<div className="group p-8 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
<div className="w-12 h-12 rounded bg-slate-800 flex items-center justify-center mb-8 group-hover:text-accent transition-colors">
<i className="w-6 h-6" data-lucide="webhook"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-4">Rest API</h3>
<p className="text-slate-400 text-lg leading-relaxed font-light">Trigger issuance events from your LMS, CRM, or HRIS system via simple webhooks.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl font-semibold text-white mb-4 tracking-tight">Industry Solutions</h2>
<p className="text-slate-400 text-xl font-light">Adaptive workflows for every sector</p>
</div>

<div className="w-full">
<input checked="" className="hidden peer/tab1" id="tab1" name="tabs" type="radio"/>
<input className="hidden peer/tab2" id="tab2" name="tabs" type="radio"/>
<input className="hidden peer/tab3" id="tab3" name="tabs" type="radio"/>
<input className="hidden peer/tab4" id="tab4" name="tabs" type="radio"/>

<nav className="flex flex-wrap justify-center gap-8 mb-16 border-b border-white/5">
<label className="pb-4 text-lg font-medium text-slate-500 border-b-2 border-transparent cursor-pointer hover:text-slate-300 transition-colors" htmlFor="tab1">Sports</label>
<label className="pb-4 text-lg font-medium text-slate-500 border-b-2 border-transparent cursor-pointer hover:text-slate-300 transition-colors" htmlFor="tab2">Education</label>
<label className="pb-4 text-lg font-medium text-slate-500 border-b-2 border-transparent cursor-pointer hover:text-slate-300 transition-colors" htmlFor="tab3">Corporate</label>
<label className="pb-4 text-lg font-medium text-slate-500 border-b-2 border-transparent cursor-pointer hover:text-slate-300 transition-colors" htmlFor="tab4">Non-Profit</label>
</nav>

<div className="tab-content" id="content1">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-white mb-6">Athlete Digital Passport</h3>
<p className="text-xl text-slate-400 mb-8 font-light">Record race results, qualifications, and podium finishes in an immutable profile.</p>
<ul className="space-y-4 text-slate-300">
<li className="flex items-center gap-4"><i className="w-5 h-5 text-accent" data-lucide="check"></i> Automated post-finish issuance</li>
<li className="flex items-center gap-4"><i className="w-5 h-5 text-accent" data-lucide="check"></i> Social-ready assets for Instagram</li>
</ul>
</div>
<div className="h-80 rounded border border-slate-800 bg-slate-900/50 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10 text-center p-6 border border-white/10 bg-black/40 backdrop-blur-md rounded">
<i className="w-10 h-10 text-accent mx-auto mb-4" data-lucide="trophy"></i>
<div className="text-white font-mono uppercase tracking-widest text-sm">Finisher 2024</div>
</div>
</div>
</div>
</div>
<div className="tab-content" id="content2">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-white mb-6">Verifiable Diplomas</h3>
<p className="text-xl text-slate-400 mb-8 font-light">Replace paper certificates with W3C Verifiable Credentials. Employers can verify skills instantly.</p>
<ul className="space-y-4 text-slate-300">
<li className="flex items-center gap-4"><i className="w-5 h-5 text-accent" data-lucide="check"></i> LMS Integration (Moodle/Canvas)</li>
<li className="flex items-center gap-4"><i className="w-5 h-5 text-accent" data-lucide="check"></i> Tamper-proof cryptography</li>
</ul>
</div>
<div className="h-80 rounded border border-slate-800 bg-slate-900/50 flex items-center justify-center">
<i className="w-24 h-24 text-slate-700" data-lucide="graduation-cap"></i>
</div>
</div>
</div>
<div className="tab-content" id="content3">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-white mb-6">Employee Recognition</h3>
<p className="text-xl text-slate-400 mb-8 font-light">Boost retention by digitizing service awards, project completions, and internal training.</p>
</div>
<div className="h-80 rounded border border-slate-800 bg-slate-900/50 flex items-center justify-center">
<i className="w-24 h-24 text-slate-700" data-lucide="briefcase"></i>
</div>
</div>
</div>
<div className="tab-content" id="content4">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-3xl font-semibold text-white mb-6">Volunteer Impact</h3>
<p className="text-xl text-slate-400 mb-8 font-light">Provide volunteers with a digital record of their hours and social impact for their portfolio.</p>
</div>
<div className="h-80 rounded border border-slate-800 bg-slate-900/50 flex items-center justify-center">
<i className="w-24 h-24 text-slate-700" data-lucide="heart"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900/20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white">Recipient Experience</h2>
</div>

<div className="rounded border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden relative group max-w-5xl mx-auto">

<div className="h-10 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
<div className="flex gap-2 opacity-50">
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
<div className="w-3 h-3 rounded-full bg-slate-600"></div>
</div>
<div className="ml-4 flex-1 h-6 bg-slate-800/50 rounded text-[10px] text-slate-500 flex items-center px-3 font-mono">
<i className="w-3 h-3 mr-2" data-lucide="lock"></i> https://certs.symboltech.io/v/8829
                    </div>
</div>

<div className="p-8 md:p-16 flex flex-col md:flex-row gap-12 items-start bg-slate-50">

<div className="flex-1 w-full bg-white text-slate-900 p-10 rounded shadow-xl relative border border-slate-200">
<div className="absolute top-0 right-0 p-6">
<div className="w-16 h-16 bg-slate-900 text-white flex items-center justify-center rounded">
<i className="w-8 h-8" data-lucide="gem"></i>
</div>
</div>
<div className="h-px w-12 bg-accent mb-8"></div>
<div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Certification of Achievement</div>
<h3 className="text-3xl font-serif font-bold mb-6 text-slate-900">System Architecture <br/>Professional</h3>
<div className="text-sm text-slate-500 mb-8 font-serif italic">Awarded to</div>
<div className="text-xl font-bold text-slate-900 mb-10 pb-10 border-b border-slate-100">Anna Veremchuk</div>
<div className="flex justify-between items-end">
<div className="text-xs text-slate-400 font-mono">
                                ISSUED: 24.10.2024<br/>
                                ID: 88292-AF
                            </div>
<div className="p-1 bg-white border border-slate-100 rounded">
<i className="w-16 h-16 text-slate-900" data-lucide="qr-code"></i>
</div>
</div>
</div>

<div className="w-full md:w-72 space-y-8 pt-4">
<div className="flex items-center gap-3 p-3 bg-green-50 rounded border border-green-200 text-green-700 text-sm font-medium">
<i className="w-4 h-4" data-lucide="check-circle"></i> Valid Certificate
                        </div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Issued to</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-300 overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-sm text-slate-700 font-bold">Anna Veremchuk</div>
</div>
</div>
<button className="w-full bg-[#0077b5] hover:bg-[#006097] text-white text-sm font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4 fill-current" data-lucide="linkedin"></i> Add to LinkedIn
                        </button>
<button className="w-full bg-slate-900 text-white text-sm font-semibold py-3 px-4 rounded transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="download"></i> Download PDF
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-950">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full -z-10"></div>
<div className="max-w-xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-5xl font-semibold tracking-tight text-white mb-6">Ready to issue?</h2>
<p className="text-xl text-slate-400 mb-12 font-light">Launch your pilot program in less than 7 days.</p>
<form className="space-y-4 text-left p-8 rounded border border-white/5 bg-slate-900/50 backdrop-blur-md">
<div className="grid grid-cols-1 gap-4">
<div>
<label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">Work Email</label>
<input className="w-full bg-slate-950 border border-slate-700 rounded px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-700" type="email"/>
</div>
<button className="w-full bg-accent hover:bg-orange-500 text-white font-medium py-4 rounded mt-2 transition-all shadow-[0_4px_20px_rgba(245,166,35,0.25)] uppercase tracking-widest text-sm">
                        Request Access
                    </button>
</div>
</form>
</div>
</section>
<footer className="bg-slate-950 border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-slate-800 border border-slate-700"></div>
<span className="text-slate-500 font-semibold tracking-tight">SymbolTech © 2024</span>
</div>
<div className="flex gap-8 text-slate-600 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</footer>


    </>
  );
}
