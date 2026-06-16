import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

        document.querySelectorAll('.aura-reveal').forEach((el) => {
          const parent = el.parentElement;
          if (parent) {
            const siblings = Array.from(parent.children).filter(c => c.classList.contains('aura-reveal'));
            const index = siblings.indexOf(el);
            if (index > 0) el.style.animationDelay = `${index * 100}ms`;
          }
          observer.observe(el);
        });

        document.querySelectorAll('.flashlight-card').forEach(card => {
          card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4abf55c4-9230-410f-8f21-f7acb9ce9941_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="aura-background-component fixed top-0 w-full -z-10 h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 to-transparent opacity-40"></div>
</div>

<div className="fixed inset-0 bg-stripes pointer-events-none z-0"></div>

<nav className="fixed flex z-50 px-4 top-6 right-0 left-0 justify-center">
<div className="flex shadow-black/50 bg-[#0A0A0A]/80 w-full max-w-5xl border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-6 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="inline-flex items-center gap-3 font-oswald text-xl font-bold tracking-widest text-white" href="#">
<img alt="VIGILFi Logo" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3c2ee7d-c530-412b-9fd9-3cc1e10723ff_320w.png" style={{}}/>
            VIGILFi
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-teal-400 transition-colors" href="#solution">Solution</a>
<a className="hover:text-teal-400 transition-colors" href="#features">Features</a>
<a className="hover:text-teal-400 transition-colors" href="#technology">Technology</a>
<a className="hover:text-teal-400 transition-colors" href="#roadmap">Roadmap</a>
</div>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-400 hover:text-black transition-all duration-300" href="#waitlist">
          Join Waitlist
        </a>
</div>
</nav>
<main className="z-10 relative">

<div className="container border-x flex flex-col text-center max-w-7xl border-white/10 mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/10 text-xs font-medium text-teal-300 mb-8 uppercase tracking-wider aura-reveal is-visible">
<svg className="lucide lucide-lock" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
          Confidentiality by Default
        </div>

<h1 className="text-5xl md:text-7xl lg:text-9xl font-oswald uppercase font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-600 mb-6 max-w-6xl mx-auto leading-[0.9] aura-reveal is-visible" style={{animationDelay: '100ms'}}>
          The Future of
          <br/>
<span className="text-white">Finance is Private</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal aura-reveal is-visible" style={{animationDelay: '200ms'}}>
          VIGILFi is the privacy-first financial super-app that empowers you to spend, save, earn, and transact without exposing your personal data.
        </p>

<div className="flex flex-col sm:flex-row gap-4 aura-reveal is-visible" style={{animationDelay: '300ms'}}>
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(0,240,255,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(0,240,255,0.15)]" href="#waitlist">
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_4s_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(90deg*0.5)),transparent_0,rgba(0,240,255,0.5)_90deg,transparent_90deg)]"></div>
</div>
</div>
<div className="absolute rounded-full bg-[#1A1A1A] inset-[1px] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white px-8 py-3 relative items-center justify-center rounded-full">
<span className="whitespace-nowrap relative z-10 font-sans group-hover:text-teal-400 transition-colors">
                Join the Waitlist
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full relative group-hover:bg-teal-400/20 group-hover:text-teal-400 transition-colors">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</a>
</div>
</div>

<div className="container border-x border-white/10 max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div className="aura-reveal is-visible">
<h2 className="text-4xl font-oswald uppercase text-white mb-6">Redefining the Financial Landscape</h2>
<div className="w-20 h-1 bg-teal-500 mb-8"></div>
</div>
<div className="text-lg text-zinc-400 leading-relaxed space-y-6 aura-reveal is-visible" style={{animationDelay: '100ms'}}>
<p className="">
                    In an era where personal data has become the new currency, the financial industry has lagged in providing users with the privacy they deserve. Every transaction, every balance, every financial decision is tracked, analyzed, and often exploited.
                </p>
<p className="">
                    VIGILFi emerges as a paradigm shift, a revolutionary financial super-app meticulously engineered to restore financial privacy. Our mission is to empower individuals with a secure and private financial ecosystem, where they can manage their finances with absolute confidentiality.
                </p>
</div>
</div>
</div>

<div className="container border-x border-b max-w-7xl border-white/10 mr-auto ml-auto pt-12 pr-6 pb-24 pl-6" id="solution">
<div className="grid grid-cols-1 lg:grid-cols-12 border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-sm rounded-none overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-white/10">

<div className="lg:col-span-5 flex flex-col p-8 md:p-12 flashlight-card aura-reveal bg-[#111111]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg">
<svg className="text-red-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-red-400 text-xs font-mono uppercase tracking-widest">The Problem</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
                Your Financial Life is an Open Book
             </h3>
<p className="text-base text-zinc-400 leading-relaxed mb-8">
                In today's digital economy, financial institutions and data brokers continuously monitor your spending. This surveillance exposes you to targeted ads, price discrimination, and fraud.
             </p>
<div className="mt-auto relative rounded-lg border border-red-500/20 bg-red-950/10 p-4 font-mono text-xs text-red-300">
<div className="flex justify-between mb-2 opacity-50">
<span>TRANSACTION_LOG_#4921</span>
<span>VISIBLE</span>
</div>
<div className="space-y-1">
<div className="flex justify-between"><span>Merchant: Coffee_Shop</span><span>-$4.50</span></div>
<div className="flex justify-between"><span>Location: New York, NY</span><span>Geo: 40.71, -74.00</span></div>
<div className="flex justify-between"><span>Category: Food &amp; Drink</span><span>Risk: Low</span></div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-rows-2 divide-y divide-white/10">

<div className="p-8 md:p-12 flashlight-card aura-reveal group" style={{animationDelay: '100ms', -MouseX: '131.4478759765625px', -MouseY: '27.08331298828125px'}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-teal-500/10 border border-teal-500/20 rounded-lg">
<svg className="text-teal-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<span className="text-teal-400 text-xs font-mono uppercase tracking-widest">The Solution</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">
                    Confidentiality by Default
                </h3>
<p className="text-base text-zinc-400 leading-relaxed">
                    VIGILFi combines Fully Homomorphic Encryption (FHE) with modern neobanking. We don’t just offer privacy as an option; it is an integral part of our architecture.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#080808]">
<div className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-teal-500/50 transition-colors">
<svg className="text-white group-hover:text-teal-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h4 className="text-sm font-bold text-white mb-2">FHE Privacy Tech</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Compute on encrypted data without ever decrypting it.</p>
</div>
<div className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-teal-500/50 transition-colors">
<svg className="text-white group-hover:text-teal-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-sm font-bold text-white mb-2">x402 Payments</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Private, internet-native micropayments &amp; subscriptions.</p>
</div>
<div className="p-6 md:p-8 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:border-teal-500/50 transition-colors">
<svg className="text-white group-hover:text-teal-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<h4 className="text-sm font-bold text-white mb-2">Neobank Suite</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Anonymous virtual cards, P2P transfers &amp; vaults.</p>
</div>
</div>
</div>
</div>
</div>

<section className="container max-w-7xl mx-auto px-6 border-x border-b border-white/10 py-24" id="features">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1 aura-reveal">
<div className="inline-flex items-center justify-center px-3 py-1 mb-6 border border-teal-500/30 bg-teal-500/10 text-teal-200 text-xs font-medium tracking-wide uppercase">
              Seamless Workflow
            </div>
<h2 className="text-5xl md:text-6xl lg:text-7xl font-oswald uppercase tracking-tight leading-[0.9] text-white">
              Private Finance at
              <br/>
              Your Fingertips
            </h2>
</div>
<div className="flex flex-col justify-end items-start lg:items-end lg:text-right max-w-md gap-12 aura-reveal" style={{animationDelay: '100ms'}}>
<p className="text-zinc-400 text-lg leading-relaxed text-left lg:text-left">
              Bridge the gap between privacy coins and everyday financial needs.
            </p>
</div>
</div>

<div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#0A0A0A] border border-white/10 mb-10 overflow-hidden group shadow-2xl shadow-teal-900/20 aura-reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-teal-800/10 blur-[120px] rounded-full pointer-events-none"></div>

<div className="absolute inset-6 md:inset-12 flex border border-white/5 bg-[#050505] shadow-2xl z-20">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-6 bg-black/40 backdrop-blur-md hidden md:flex">
<div className="w-8 h-8 bg-teal-500/10 border-l-2 border-teal-400 flex items-center justify-center">
<svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="w-8 h-8 flex items-center justify-center opacity-40">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<div className="w-8 h-8 flex items-center justify-center opacity-40">
<svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
</div>

<div className="flex-1 p-8 relative overflow-hidden flex flex-col">

<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-teal-400 shadow-[0_0_10px_rgba(0,240,255,0.8)] rounded-full animate-pulse"></div>
<span className="text-sm font-mono text-zinc-300 tracking-wider">
                    VIGIL_PROTECTED
                  </span>
</div>
<div className="flex gap-3">
<div className="px-3 py-1 bg-teal-900/20 border border-teal-500/20 text-[10px] text-teal-300 uppercase tracking-widest rounded">
                        Protocol: Fhenix402
                    </div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

<div className="relative w-full aspect-[1.58/1] rounded-xl bg-gradient-to-br from-zinc-800 to-black border border-white/10 p-6 flex flex-col justify-between overflow-hidden group/card transform transition-transform hover:scale-[1.02] duration-500">

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" style={{}}></div>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/20 blur-[50px] rounded-full"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-oswald text-xl tracking-widest text-white/90">VIGILFi</span>
<svg className="text-teal-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle><line className="opacity-0 group-hover/card:opacity-100 transition-opacity" x1="2" x2="22" y1="2" y2="22"></line></svg>
</div>
<div className="relative z-10 space-y-4">
<div className="flex gap-4">
<div className="h-8 w-12 bg-white/10 rounded"></div>
<div className="h-8 w-12 bg-white/5 rounded"></div>
</div>
<div className="font-mono text-lg text-teal-100 tracking-[0.2em] blur-[2px] group-hover/card:blur-none transition-all duration-300">
                              **** **** **** 8842
                          </div>
<div className="flex justify-between items-end">
<div className="text-xs text-white/50 uppercase tracking-wider">
                                  Valid Thru<span className="text-white">12/28</span>
</div>
<div className="text-xs text-white/50 uppercase tracking-wider text-right">
                                  Balance<span className="text-teal-400 font-bold">$ ENCRYPTED</span>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="text-xs text-zinc-500 font-mono mb-2 uppercase tracking-wider">Recent Activity (Decrypted Locally)</div>

<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 bg-teal-500/10 rounded-md text-teal-400">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Netflix Subscription</div>
<div className="text-[10px] text-zinc-500 font-mono">x402 Micropayment</div>
</div>
</div>
<span className="text-sm text-white font-mono">-$15.99</span>
</div>

<div className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] rounded-lg transition-colors">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/10 rounded-md text-purple-400">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path></svg>
</div>
<div>
<div className="text-sm text-white font-medium">Top-Up (Fhenix L2)</div>
<div className="text-[10px] text-zinc-500 font-mono">Encrypted Deposit</div>
</div>
</div>
<span className="text-sm text-teal-400 font-mono">+$500.00</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="group pt-8 px-4 pb-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
<span className="block text-4xl font-oswald text-teal-900 mb-4 group-hover:text-teal-400 transition-colors">01</span>
<h3 className="text-lg font-semibold text-white mb-2">Top-Up with Privacy</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Fund your account via Fhenix402 private transactions. Your initial funding source remains confidential.
            </p>
</div>
<div className="group pt-8 px-4 pb-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
<span className="block text-4xl font-oswald text-teal-900 mb-4 group-hover:text-teal-400 transition-colors">02</span>
<h3 className="text-lg font-semibold text-white mb-2">Confidential Activity</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              P2P transfers, savings, and micropayments are processed with end-to-end encryption using FHE.
            </p>
</div>
<div className="group pt-8 px-4 pb-4 cursor-pointer hover:bg-white/[0.02] transition-colors">
<span className="block text-4xl font-oswald text-teal-900 mb-4 group-hover:text-teal-400 transition-colors">03</span>
<h3 className="text-lg font-semibold text-white mb-2">Spend Anonymously</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Generate one-time virtual cards. Merchants never see your real identity or balance.
            </p>
</div>
</div>
</section>

<section className="container border-x border-b max-w-7xl border-white/10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="technology">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-12">
<div className="flex-1">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-oswald uppercase tracking-tight text-white">
                Powered by
                <br/>
<span className="text-teal-400">Advanced Cryptography</span>
</h2>
</div>
<div className="max-w-md text-zinc-400">
                Built on a foundation of trustless, verifiable, and confidential computation using Fully Homomorphic Encryption.
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-teal-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-2xl font-bold text-white mb-4">Fully Homomorphic Encryption (FHE)</h3>
<p className="text-zinc-400 leading-relaxed max-w-lg mb-6">
                        The cornerstone of VIGILFi. Computations are performed on encrypted data without ever decrypting it. This ensures that your financial information remains confidential, even during processing on the Fhenix L2.
                    </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white/5 text-xs text-white rounded-full border border-white/10">Fhenix L2</span>
<span className="px-3 py-1 bg-white/5 text-xs text-white rounded-full border border-white/10">Ethereum Secured</span>
</div>
</div>
</div>

<div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl group hover:border-teal-500/30 transition-colors">
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-3">FHERC20 Tokens</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    All user balances are held as confidential tokens. Balance visibility is encrypted and only accessible by the private key holder.
                </p>
</div>

<div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl group hover:border-teal-500/30 transition-colors">
<div className="mb-4 text-xs font-mono text-teal-400 uppercase tracking-wider">Use Case</div>
<h3 className="text-lg font-bold text-white mb-3">For Journalists &amp; Activists</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Secure and anonymous way to send and receive funds in high-stakes environments, protecting you from surveillance.
                </p>
</div>

<div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl group hover:border-teal-500/30 transition-colors">
<div className="mb-4 text-xs font-mono text-teal-400 uppercase tracking-wider">Use Case</div>
<h3 className="text-lg font-bold text-white mb-3">For Developers</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Leverage our privacy-preserving infrastructure to build confidential e-commerce and private data markets.
                </p>
</div>

<div className="bg-[#0E0E0E] border border-white/10 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-center">
<h3 className="text-xl font-bold text-white mb-2">Fhenix402 Protocol</h3>
<p className="text-sm text-zinc-400 mb-6">HTTP 402: Payment Required, finally realized with privacy.</p>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-teal-400"></div>
</div>
</div>
</div>
</section>

<section className="container border-x border-b max-w-7xl border-white/10 mr-auto ml-auto py-24 px-6 bg-[#050505]" id="roadmap">
<h2 className="text-4xl font-oswald uppercase text-white mb-16 text-center">The Path to Privacy</h2>
<div className="relative">

<div className="absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-800 via-teal-900 to-zinc-800 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="relative bg-[#0A0A0A] border border-white/10 p-8 pt-12 aura-reveal">
<div className="absolute -top-4 left-8 bg-[#0A0A0A] border border-teal-500/50 text-teal-400 px-4 py-1 text-sm font-mono uppercase rounded-full shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                          Phase 1
                      </div>
<div className="text-xs text-zinc-500 mb-4 font-mono">Months 1-3</div>
<h3 className="text-xl font-bold text-white mb-4">The Private Payments App</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Fhenix402 Micropayments</li>
<li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Basic Wallet (FHERC20)</li>
<li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Private P2P Transfers</li>
<li className="flex items-start gap-2"><span className="text-teal-500">✓</span> Web App &amp; Extension</li>
</ul>
</div>

<div className="relative bg-[#0A0A0A] border border-white/10 p-8 pt-12 aura-reveal" style={{animationDelay: '100ms'}}>
<div className="absolute -top-4 left-8 bg-[#0A0A0A] border border-white/20 text-white px-4 py-1 text-sm font-mono uppercase rounded-full">
                          Phase 2
                      </div>
<div className="text-xs text-zinc-500 mb-4 font-mono">Months 4-6</div>
<h3 className="text-xl font-bold text-white mb-4">The Confidential Neobank</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Anonymous Virtual Cards</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Confidential Savings Vaults</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Subscription Management</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Mobile App (iOS/Android)</li>
</ul>
</div>

<div className="relative bg-[#0A0A0A] border border-white/10 p-8 pt-12 aura-reveal" style={{animationDelay: '200ms'}}>
<div className="absolute -top-4 left-8 bg-[#0A0A0A] border border-white/20 text-white px-4 py-1 text-sm font-mono uppercase rounded-full">
                          Phase 3
                      </div>
<div className="text-xs text-zinc-500 mb-4 font-mono">Months 7-12</div>
<h3 className="text-xl font-bold text-white mb-4">The Privacy Super-App</h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Privacy-Preserving DEX</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Encrypted Governance</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Compliance Mode</li>
<li className="flex items-start gap-2"><span className="text-zinc-600">○</span> Multi-Chain Expansion</li>
</ul>
</div>
</div>
</div>
</section>

<section className="container border-x border-b max-w-7xl border-white/10 mr-auto ml-auto py-24 px-6">
<h2 className="text-4xl font-oswald uppercase text-white mb-12">Frequently Asked Questions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-3">What is VIGILFi?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">VIGILFi is a privacy-first financial super-app that allows you to spend, save, earn, and transact without exposing your personal data. It combines neobank convenience with FHE privacy tech.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-3">How is it different?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Unlike traditional apps that monetize your data, VIGILFi is "privacy by default." We use Fully Homomorphic Encryption so even we cannot see your balances.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-3">Is VIGILFi secure?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Yes. Security is our core. By leveraging FHE and the Fhenix network (Ethereum L2), we provide unparalleled security and privacy.</p>
</div>
<div className="border-b border-white/10 pb-6">
<h3 className="text-lg font-bold text-white mb-3">What is FHE?</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Fully Homomorphic Encryption allows computations on encrypted data without decrypting it. We process transactions without ever seeing the raw amounts.</p>
</div>
</div>
</section>

<footer className="bg-[#020202] text-white border-t border-white/10 font-sans relative overflow-hidden" id="waitlist">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto border-x border-white/10 relative z-10">

<div className="px-8 md:px-12 pb-24 pt-20 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">

<img alt="VIGILFi Logo" className="h-10 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<span className="text-3xl font-oswald font-bold tracking-widest text-white">
                    VIGILFi
                </span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs font-medium mb-6">
                    The Architects of Financial Confidentiality. Empowering you to take control of your financial life.
                </p>
<div className="flex gap-4 text-zinc-500">
<a className="hover:text-teal-400 transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="hover:text-teal-400 transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="w-full lg:w-auto flex flex-col gap-2">
<label className="text-xs font-mono text-teal-400 uppercase tracking-wider">Join the Waitlist</label>
<div className="flex flex-col md:flex-row gap-0">
<div className="relative w-full md:w-80 group">
<input className="bg-[#111] border border-white/10 text-white text-xs font-mono font-medium placeholder:text-zinc-700 px-5 py-4 w-full h-full outline-none uppercase transition-colors rounded-none focus:border-teal-500/50" placeholder="EMAIL@ADDRESS.COM" type="email"/>
</div>
<button className="bg-teal-500 text-black text-[11px] tracking-wide font-bold px-8 py-4 border border-teal-500 hover:bg-teal-400 transition-colors uppercase whitespace-nowrap">
                    Submit
                    </button>
</div>
<div className="flex gap-6 mt-4">
<a className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase" href="#">Terms of Service</a>
<a className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase" href="#">Privacy Policy</a>
<span className="text-[10px] text-zinc-700 uppercase ml-auto">© 2025 VIGILFi</span>
</div>
</div>
</div>
</div>
</footer>


</main>
    </>
  );
}
