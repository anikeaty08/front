import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Initialize Lucide icons
  lucide.createIcons();
  
  // FAQ Toggle functionality
  function toggleFAQ(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.style.transform = 'rotate(180deg)';
    } else {
      content.classList.add('hidden');
      icon.style.transform = 'rotate(0deg)';
    }
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx" width="100%"></iframe></div>

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b border-white/5">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
<a className="flex items-center space-x-3 opacity-0 animate-fade-in-up" href="#" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<span className="block h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg" style={{}}></span>
<span className="absolute inset-0 block h-3 w-3 rounded-full bg-orange-500 opacity-75 animate-ping" style={{}}></span>
</div>
<span className="text-xl font-semibold tracking-tight font-geist">Aura</span>
</a>

<ul className="hidden md:flex opacity-0 animate-fade-in-up animate-delay-100 text-sm font-medium space-x-8 items-center" style={{opacity: '1', transform: 'translateY(0px)'}}>
<li className=""><a className="transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist rounded-lg pt-2 pr-3 pb-2 pl-3" href="#home" style={{}}>Home</a></li>
<li className=""><a className="rounded-lg px-3 py-2 transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist" href="#infrastructure" style={{}}>Infrastructure</a></li>
<li className=""><a className="rounded-lg px-3 py-2 transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist" href="#validators" style={{}}>Validators</a></li>
<li className=""><a className="rounded-lg px-3 py-2 transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist" href="#networks" style={{}}>Networks</a></li>
<li className=""><a className="rounded-lg px-3 py-2 transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist" href="#staking" style={{}}>Staking</a></li>
<li className=""><a className="rounded-lg px-3 py-2 transition-all duration-200 hover:text-orange-400 hover:bg-white/5 font-geist" href="#community" style={{}}>Ecosystem</a></li>
</ul>
<div className="flex items-center space-x-4 opacity-0 animate-fade-in-up animate-delay-200" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors" id="mobile-btn">
<svg className="lucide lucide-menu w-6 h-6 stroke-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-orange-500 hover:text-white hover:scale-105 shadow-lg font-geist" href="#beta" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Join Testnet
        </a>
</div>
</nav>

<div className="fixed inset-0 z-40 hidden flex-col gap-6 bg-black/95 px-6 pt-24 text-lg font-medium backdrop-blur-xl md:hidden" id="mobile-menu">
<button className="absolute top-5 right-5 p-2 rounded-lg hover:bg-white/5" id="mobile-close">
<svg className="lucide lucide-x h-6 w-6 stroke-white" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#home" style={{}}>Home</a>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#infrastructure" style={{}}>Infrastructure</a>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#validators" style={{}}>Validators</a>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#networks" style={{}}>Networks</a>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#staking" style={{}}>Staking</a>
<a className="transition-colors hover:text-orange-400 py-2 font-geist" href="#community" style={{}}>Ecosystem</a>
<a className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-black transition-all hover:bg-orange-500 hover:text-white font-geist" href="#beta" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        Join Testnet
      </a>
</div>
</header>

<section className="relative flex overflow-hidden min-h-screen pt-32 pb-20 items-center justify-center">

<div className="relative w-full max-w-6xl md:p-16 ring-1 ring-white/10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30eeab2d-e97c-4b45-b740-6695c7862813_1600w.jpg)] bg-cover rounded-3xl mr-4 ml-4 pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-xl">

<div className="opacity-0 animate-fade-in-up animate-delay-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center gap-3 text-sm font-semibold bg-gradient-to-r from-white/10 to-white/5 border-white/10 border rounded-full mb-8 pt-2 pr-5 pb-2 pl-5">
<svg className="lucide lucide-shield-check h-4 w-4 stroke-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-green-400 font-geist">Live on Mainnet</span>
<span className="text-xs text-white font-geist bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>Production Ready</span>
</span>
</div>

<h1 className="text-4xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl opacity-0 animate-fade-in-up animate-delay-500 font-geist font-light" style={{opacity: '1', transform: 'translateY(0px)'}}>
        Meet Aura<br/>
<span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent font-geist font-light" style={{}}>Web3 Infrastructure</span><br/>
        Built for Scale.
      </h1>

<p className="mt-8 max-w-2xl text-lg text-gray-300 leading-relaxed sm:text-xl opacity-0 animate-fade-in-up animate-delay-700 font-geist" style={{opacity: '1', transform: 'translateY(0px)'}}>
        Professional blockchain infrastructure powering the next generation of decentralized networks. Secure validation, lightning-fast RPC endpoints, and seamless IBC relaying across 50+ networks.
      </p>

<div className="mt-12 flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-in-up animate-delay-700" style={{opacity: '1', transform: 'translateY(0px)'}}>
<a className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all duration-200 hover:bg-orange-500 hover:text-white hover:scale-105 shadow-lg font-geist" href="#infrastructure" style={{}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Explore Infrastructure
        </a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 backdrop-blur-sm font-geist" href="#validators" style={{}}>
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
          View Validators
        </a>
</div>

<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in-up animate-delay-700" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-geist font-light" style={{}}>50+</div>
<div className="text-sm text-gray-400 mt-1 font-geist">Networks</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-geist font-light" style={{}}>99.9%</div>
<div className="text-sm text-gray-400 mt-1 font-geist">Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-geist font-light" style={{}}>$2.8B</div>
<div className="text-sm text-gray-400 mt-1 font-geist">Total Staked</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-geist font-light" style={{}}>15k+</div>
<div className="text-sm text-gray-400 mt-1 font-geist">Delegators</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 hidden lg:block">
<span className="absolute right-20 top-16 rounded-full bg-white/5 px-4 py-2 text-xs backdrop-blur-sm border border-white/10 animate-float font-geist" style={{animationDelay: '-1s'}}>
<svg className="lucide lucide-zap w-3 h-3 inline mr-2" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Lightning Fast
        </span>
<span className="absolute left-16 bottom-32 rounded-full bg-white/5 px-4 py-2 text-xs backdrop-blur-sm border border-white/10 animate-float font-geist" style={{animationDelay: '-2s'}}>
<svg className="lucide lucide-globe w-3 h-3 inline mr-2" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
          Global Network
        </span>
<span className="absolute right-24 bottom-40 rounded-full bg-white/5 px-4 py-2 text-xs backdrop-blur-sm border border-white/10 animate-float font-geist" style={{animationDelay: '-3s'}}>
<svg className="lucide lucide-shield w-3 h-3 inline mr-2" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          24/7 Monitoring
        </span>
<span className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/5 px-4 py-2 text-xs backdrop-blur-sm border border-white/10 animate-float font-geist" style={{animationDelay: '-4s'}}>
<svg className="lucide lucide-cpu w-3 h-3 inline mr-2" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
          Auto Scaling
        </span>
</div>
</div>
</section>

<section className="py-20 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light" style={{}}>Trusted by Leading Networks</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-geist">Providing secure validation and infrastructure services across multiple blockchain ecosystems</p>
</div>
<div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">ATOM</span>
</div>
<span className="text-xs text-gray-500 font-geist">Cosmos</span>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">OSMO</span>
</div>
<span className="text-xs text-gray-500 font-geist">Osmosis</span>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">JUNO</span>
</div>
<span className="text-xs text-gray-500 font-geist">Juno</span>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">STAR</span>
</div>
<span className="text-xs text-gray-500 font-geist">Stargaze</span>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">EVMOS</span>
</div>
<span className="text-xs text-gray-500 font-geist">Evmos</span>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-2 border border-white/10">
<span className="font-semibold text-sm tracking-tight font-geist">AKASH</span>
</div>
<span className="text-xs text-gray-500 font-geist">Akash</span>
</div>
</div>
</div>
</section><meta charset="utf-8"/><meta content="width=device-width, initial-scale=1.0" name="viewport"/><title>Pricing, Testimonials &amp; FAQ</title><style>
        .font-geist { font-family: 'Geist', sans-serif !important; }
    </style><section className="py-20 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">Simple, Transparent Pricing</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-geist">Choose the perfect plan for your infrastructure needs. All plans include 24/7 monitoring and support.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold mb-2 font-geist">Starter</h3>
<p className="text-gray-400 text-sm font-geist">Perfect for individual validators and small projects</p>
</div>
<div className="mb-8">
<div className="flex items-baseline">
<span className="text-4xl font-light tracking-tight font-geist">$49</span>
<span className="text-gray-400 text-sm ml-2 font-geist">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Up to 3 validator nodes</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Basic RPC endpoints</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">24/7 monitoring</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Email support</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">99.9% SLA</span>
</li>
</ul>
<button className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 font-geist">
          Get Started
        </button>
</div>

<div className="relative bg-gradient-to-br from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 scale-105">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full font-geist">Most Popular</span>
</div>
<div className="mb-8">
<h3 className="text-xl font-semibold mb-2 font-geist">Professional</h3>
<p className="text-gray-400 text-sm font-geist">Ideal for growing networks and enterprise validators</p>
</div>
<div className="mb-8">
<div className="flex items-baseline">
<span className="text-4xl font-light tracking-tight font-geist">$199</span>
<span className="text-gray-400 text-sm ml-2 font-geist">/month</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Up to 15 validator nodes</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Premium RPC endpoints</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">IBC relaying services</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Advanced monitoring &amp; alerts</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Priority support</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">99.99% SLA</span>
</li>
</ul>
<button className="w-full rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-orange-600 hover:scale-105 shadow-lg font-geist">
          Start Free Trial
        </button>
</div>

<div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300">
<div className="mb-8">
<h3 className="text-xl font-semibold mb-2 font-geist">Enterprise</h3>
<p className="text-gray-400 text-sm font-geist">Custom solutions for large-scale operations</p>
</div>
<div className="mb-8">
<div className="flex items-baseline">
<span className="text-4xl font-light tracking-tight font-geist">Custom</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Unlimited validator nodes</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Dedicated infrastructure</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Custom integrations</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">White-label solutions</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">Dedicated support team</span>
</li>
<li className="flex items-center text-sm">
<svg className="lucide lucide-check w-4 h-4 text-green-400 mr-3 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-geist">99.99% SLA guarantee</span>
</li>
</ul>
<button className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 font-geist">
          Contact Sales
        </button>
</div>
</div>
<div className="text-center">
<p className="text-gray-400 text-sm mb-4 font-geist">All plans include a 30-day money-back guarantee</p>
<div className="flex justify-center items-center gap-6 text-xs text-gray-500">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-geist">Enterprise Security</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-headphones w-4 h-4" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="font-geist">24/7 Support</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-geist">99.9% Uptime</span>
</div>
</div>
</div>
</div>
</section><section className="py-20 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">Trusted by Web3 Leaders</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-geist">See what leading validators and developers say about our infrastructure platform</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
<div className="flex items-center mb-4">
<div className="flex text-orange-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist">
          "Aura's infrastructure has been rock-solid for our validator operations. Their monitoring and alerting system helped us maintain 100% uptime across all networks."
        </p>
<div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-semibold text-sm font-geist">SM</span>
</div>
<div>
<div className="font-semibold text-sm font-geist">Sarah Mitchell</div>
<div className="text-gray-400 text-xs font-geist">Lead Validator, CosmosHub</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
<div className="flex items-center mb-4">
<div className="flex text-orange-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist">
          "The RPC endpoints are incredibly fast and reliable. Our dApp users have noticed the significant improvement in transaction speeds since switching to Aura."
        </p>
<div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-semibold text-sm font-geist">DK</span>
</div>
<div>
<div className="font-semibold text-sm font-geist">David Kim</div>
<div className="text-gray-400 text-xs font-geist">CTO, DeFi Protocol</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
<div className="flex items-center mb-4">
<div className="flex text-orange-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed font-geist">
          "Their IBC relaying service is exceptional. Cross-chain transactions are processed smoothly, and their technical support team is always responsive."
        </p>
<div className="flex items-center">
<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4">
<span className="text-white font-semibold text-sm font-geist">AL</span>
</div>
<div>
<div className="font-semibold text-sm font-geist">Alex Liu</div>
<div className="text-gray-400 text-xs font-geist">Founder, Cross-chain Bridge</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-light mb-2 font-geist">500+</div>
<div className="text-sm text-gray-400 font-geist">Active Validators</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-light mb-2 font-geist">99.99%</div>
<div className="text-sm text-gray-400 font-geist">Average Uptime</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-light mb-2 font-geist">1M+</div>
<div className="text-sm text-gray-400 font-geist">Transactions/Day</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-light mb-2 font-geist">24/7</div>
<div className="text-sm text-gray-400 font-geist">Support</div>
</div>
</div>
</div>
</section><section className="py-20 border-t border-white/10">
<div className="mx-auto max-w-4xl px-4 md:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">Frequently Asked Questions</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-geist">Everything you need to know about our infrastructure platform and services</p>
</div>
<div className="space-y-4">

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(1)">
<span className="font-semibold font-geist">What networks do you support?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-1">
<p className="text-gray-400 leading-relaxed font-geist">
            We support 50+ blockchain networks including Cosmos Hub, Osmosis, Juno, Stargaze, Evmos, Akash, and many more. Our infrastructure spans across all major Cosmos SDK networks and we're constantly adding support for new chains as they launch.
          </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(2)">
<span className="font-semibold font-geist">How do you ensure high availability?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-2">
<p className="text-gray-400 leading-relaxed font-geist">
            Our infrastructure is built with redundancy in mind. We operate multiple geographically distributed data centers, implement automated failover systems, and maintain 24/7 monitoring with instant alerts. This allows us to achieve 99.99% uptime consistently.
          </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(3)">
<span className="font-semibold font-geist">Can I migrate my existing validators to Aura?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-3">
<p className="text-gray-400 leading-relaxed font-geist">
            Absolutely! Our team provides comprehensive migration support to help you transition your existing validator operations seamlessly. We handle the technical aspects while ensuring zero downtime and maintaining your validator performance metrics.
          </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(4)">
<span className="font-semibold font-geist">What kind of monitoring do you provide?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-4">
<p className="text-gray-400 leading-relaxed font-geist">
            We provide comprehensive monitoring including validator performance metrics, network health status, alerting for missed blocks or governance proposals, and detailed analytics dashboards. All metrics are available through our web interface and API.
          </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(5)">
<span className="font-semibold font-geist">Do you offer custom enterprise solutions?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-5">
<p className="text-gray-400 leading-relaxed font-geist">
            Yes, our Enterprise plan includes custom solutions tailored to your specific needs. This includes dedicated infrastructure, white-label services, custom integrations, and dedicated support teams. Contact our sales team to discuss your requirements.
          </p>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between" onclick="toggleFAQ(6)">
<span className="font-semibold font-geist">What payment methods do you accept?</span>
<svg className="lucide lucide-chevron-down w-5 h-5 transition-transform" data-lucide="chevron-down" fill="none" height="24" id="faq-icon-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-6 pb-6 hidden" id="faq-content-6">
<p className="text-gray-400 leading-relaxed font-geist">
            We accept all major cryptocurrencies (ATOM, OSMO, USDC, ETH, BTC) as well as traditional payment methods including credit cards and bank transfers. Enterprise clients can also set up invoicing for larger contracts.
          </p>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-gray-400 mb-6 font-geist">Still have questions?</p>
<a className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400 font-geist" href="#contact">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
        Contact Support
      </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-16">
<div className="mx-auto max-w-7xl px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center space-x-3 mb-4">
<span className="block h-3 w-3 rounded-full bg-orange-500" style={{}}></span>
<span className="text-xl font-semibold tracking-tight font-geist">Aura</span>
</div>
<p className="text-gray-400 text-sm max-w-md leading-relaxed font-geist">
            Building the infrastructure that powers the decentralized future. Secure, scalable, and reliable blockchain services for developers and networks.
          </p>
<div className="flex items-center gap-4 mt-6">
<a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Services</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Validation Services</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">RPC Endpoints</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">IBC Relaying</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Monitoring</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Resources</h3>
<ul className="space-y-2 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Status Page</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Support</a></li>
</ul></div></div></div></footer>
    </>
  );
}
