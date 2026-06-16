import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Mobile menu toggle
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Initialize Lucide icons
lucide.createIcons();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-50 bg-black/20 border-white/10 border-b backdrop-blur-xl grayscale">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<nav className="flex items-center justify-between py-4">
<div className="opacity-0 animate-fade-in">
<a className="flex items-center gap-2 text-xl font-semibold tracking-tight font-geist" href="#" style={{}}>
          
          FlowPay
        </a>
</div>
<div className="hidden md:flex items-center gap-8 opacity-0 animate-fade-in delay-200">
<a className="flex items-center gap-1 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
          Products
          <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="flex items-center gap-1 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
          Solutions
          <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>Developers</a>
<a className="text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>Pricing</a>
</div>
<div className="flex items-center gap-3 opacity-0 animate-fade-in delay-300">
<a className="hidden sm:inline-block text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>Sign in</a>
<a className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium transition-all font-geist bg-white/10 hover:bg-white/20 border-white/20" href="#" style={{}}>
          Get started
        </a>
<button className="md:hidden p-2 rounded-lg transition-colors hover:bg-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
<div className="md:hidden hidden flex-col gap-4 pb-6 border-t pt-4 border-white/10" id="mobileMenu">
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
        Products
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-building w-4 h-4" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
        Solutions
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
        Developers
      </a>
<a className="flex items-center gap-2 text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
        Pricing
      </a>
<a className="text-sm transition-colors font-geist text-white/80 hover:text-white" href="#" style={{}}>Sign in</a>
</div>
</div>
</header>
<main className="">

<section className="relative isolate lg:pt-20 bg-[url(https://cdn.midjourney.com/f17eb8c4-754a-43d0-b0d5-7a87f5cf9922/0_0.png?w=800&amp;q=80)] bg-cover pt-8">
<div className="mx-auto max-w-5xl px-4 sm:px-6 pb-20 lg:pb-32 text-center lg:px-8">
<div className="opacity-0 animate-slide-up delay-400">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm mb-8 font-geist bg-white/5 border-white/10 text-white/80" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
          New: Instant crypto payments now available
        </div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-tight opacity-0 animate-slide-up delay-500 font-space-grotesk" style={{}}>
        Digital payments<br className="hidden sm:inline"/>
<span className="bg-clip-text text-transparent font-space-grotesk bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#ffffff] to-gray-400" style={{}}>reimagined</span>
</h1>
<p className="mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-up delay-600 font-geist text-white/70" style={{}}>
        Experience the future of finance with instant transfers, smart contracts, and seamless global payments. Built for the next generation of digital commerce.
      </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-slide-up delay-700">
<a className="inline-flex items-center gap-2 transition-all transform hover:scale-105 hover:bg-blue-700 text-base font-medium font-geist bg-[radial-gradient(circle_at_bottom_right,var(--tw-gradient-stops))] from-white/10 to-gray-400/70 rounded-lg pt-4 pr-8 pb-4 pl-8" href="#" style={{}}>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          Start building
        </a>
<a className="inline-flex items-center gap-2 rounded-lg border px-8 py-4 text-base font-medium transition-all font-geist border-white/20 hover:bg-white/10" href="#" style={{}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="6 3 20 12 6 21 6 3"></polygon></svg>
          Watch demo
        </a>
</div>

<div className="relative mt-16 lg:mt-24 opacity-0 animate-scale-in delay-800">
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
<div className="w-72 h-44 transform hover:rotate-[-8deg] transition-transform duration-500 relative overflow-hidden bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-2xl rotate-[-12deg]">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-gray-500/20 to-purple-500/20" style={{}}></div>
<div className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-8 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded" style={{}}></div>
<svg className="lucide lucide-wifi w-6 h-6 text-white/60" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div className="">
<p className="text-lg font-mono tracking-wider font-geist" style={{}}>•••• •••• •••• 4829</p>
<div className="flex justify-between items-end mt-2">
<div>
<p className="text-xs font-geist text-white/60" style={{}}>VALID THRU</p>
<p className="text-sm font-medium font-geist" style={{}}>08/28</p>
</div>
<div className="text-right">
<p className="text-xs font-geist text-white/60" style={{}}>SARAH CHEN</p>
<p className="text-sm font-medium font-geist" style={{}}>FlowPay</p>
</div>
</div>
</div>
</div>
</div>
<div className="w-80 h-48 rounded-2xl glass card-glow transform hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-blue-500/20 to-blue-500/20" style={{}}></div>
<div className="relative p-8 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-14 h-10 rounded bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50" style={{}}></div>
<i className="w-7 h-7 text-white/60" data-lucide="contactless"></i>
</div>
<div className="">
<p className="text-xl font-mono tracking-wider font-geist" style={{}}>•••• •••• •••• 7391</p>
<div className="flex justify-between items-end mt-3">
<div>
<p className="text-xs font-geist text-white/60" style={{}}>EXPIRES</p>
<p className="text-base font-medium font-geist" style={{}}>12/27</p>
</div>
<div className="text-right">
<p className="text-xs font-geist text-white/60" style={{}}>ALEX MORGAN</p>
<p className="text-base font-semibold font-geist" style={{}}>FlowPay Pro</p>
</div>
</div>
</div>
</div>
</div>
<div className="w-72 h-44 rounded-2xl glass card-glow transform rotate-[8deg] hover:rotate-[4deg] transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-gray-500/20 to-purple-500/20"></div>
<div className="relative p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-8 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded" style={{}}></div>
<svg className="lucide lucide-smartphone w-6 h-6 text-white/60" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<p className="text-lg font-mono tracking-wider font-geist" style={{}}>•••• •••• •••• 5067</p>
<div className="flex justify-between items-end mt-2">
<div className="">
<p className="text-xs text-white/60 font-geist" style={{}}>VALID THRU</p>
<p className="text-sm font-medium font-geist" style={{}}>03/29</p>
</div>
<div className="text-right">
<p className="text-xs font-geist text-white/60" style={{}}>JAMIE TAYLOR</p>
<p className="text-sm font-medium font-geist" style={{}}>FlowPay</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
</section>

<section className="relative py-16 lg:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 font-space-grotesk" style={{}}>
          Built for modern businesses
        </h2>
<p className="text-lg max-w-2xl mx-auto font-geist text-white/70" style={{}}>
          Powerful APIs, instant settlements, and enterprise-grade security for companies of all sizes.
        </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">
<div className="glass transition-all duration-300 group hover:bg-white/10 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 flex group-hover:scale-110 transition-transform bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-zap w-[24px] h-[24px] text-neutral-50" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist" style={{}}>Lightning Fast</h3>
<p className="leading-relaxed font-geist text-white/70" style={{}}>Process payments in milliseconds with our optimized infrastructure and global network.</p>
</div>
<div className="glass rounded-2xl p-8 transition-all duration-300 group hover:bg-white/10">
<div className="w-12 h-12 flex group-hover:scale-110 transition-transform bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-shield w-[24px] h-[24px] text-neutral-50" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist" style={{}}>Bank-Grade Security</h3>
<p className="leading-relaxed font-geist text-white/70" style={{}}>End-to-end encryption, fraud detection, and compliance with global financial regulations.</p>
</div>
<div className="glass rounded-2xl p-8 transition-all duration-300 group hover:bg-white/10">
<div className="w-12 h-12 flex group-hover:scale-110 transition-transform bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-white/0 to-gray-400/50 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-globe w-[24px] h-[24px] text-neutral-50" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist" style={{}}>Global Coverage</h3>
<p className="leading-relaxed font-geist text-white/70" style={{}}>Accept payments from 150+ countries with automatic currency conversion and local methods.</p>
</div>
</div>
</div>
</section>

<section className="relative lg:py-24 bg-[url(https://cdn.midjourney.com/29200336-58f2-4962-819d-1554824576bf/0_1.png?w=800&amp;q=80)] bg-cover pt-16 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<div className="glass rounded-2xl p-8 lg:p-12">
<div className="flex items-center gap-2 mb-6">
<div className="flex items-center">
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-sm font-geist text-white/60" style={{}}>5.0</span>
</div>
<h3 className="text-2xl lg:text-3xl mb-6 leading-tight font-space-grotesk" style={{}}>
              "FlowPay transformed how we handle payments"
            </h3>
<p className="text-lg leading-relaxed mb-8 font-geist text-white/80" style={{}}>
              The integration was seamless, and our conversion rates improved by 40%. The real-time analytics and fraud protection give us complete peace of mind. It's exactly what we needed to scale globally.
            </p>
<div className="flex items-center gap-4">
<img alt="Marcus Johnson" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=320&amp;q=80"/>
<div>
<p className="font-medium font-geist" style={{}}>Marcus Johnson</p>
<p className="text-sm font-geist text-white/60" style={{}}>CTO at TechFlow</p>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 flex bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#292d33]/10 to-gray-400/70 rounded-full mr-auto mb-4 ml-auto items-center justify-center border border-white/10">
<svg className="lucide lucide-trending-up w-8 h-8" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-sm font-medium mb-2 font-geist text-white/80" style={{}}>Transaction Volume</p>
<p className="text-4xl mb-2 font-space-grotesk" style={{}}>$2.4B</p>
<p className="text-sm font-geist text-white/60" style={{}}>processed monthly</p>
</div>
<div className="glass rounded-2xl p-8 text-center">
<div className="w-16 h-16 flex bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#292d33]/10 to-gray-400/70 border-white/10 border rounded-full mr-auto mb-4 ml-auto items-center justify-center" style={{}}>
<svg className="lucide lucide-users w-8 h-8" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="text-sm font-medium mb-2 font-geist text-white/80" style={{}}>Customer Satisfaction</p>
<p className="text-4xl mb-2 font-space-grotesk" style={{}}>98%</p>
<p className="text-sm font-geist text-white/60" style={{}}>would recommend us</p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="relative mt-24 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="">
<h4 className="font-semibold mb-4 font-geist" style={{}}>Product</h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Payments</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Checkout</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Crypto</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Mobile SDK</a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist" style={{}}>Developers</h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>API Docs</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>SDKs</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Webhooks</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Testing</a>
</div>
</div>
<div className="">
<h4 className="font-semibold mb-4 font-geist" style={{}}>Company</h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>About</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Careers</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Blog</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Press</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 font-geist" style={{}}>Support</h4>
<div className="space-y-3">
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Help Center</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Contact</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Status</a>
<a className="block text-sm transition-colors font-geist text-white/60 hover:text-white" href="#" style={{}}>Security</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 border-t border-white/10">
<div className="flex items-center gap-2">
<span className="font-semibold font-geist" style={{}}>FlowPay</span>
</div>
<p className="text-sm font-geist text-white/50" style={{}}>© 2024 FlowPay Technologies. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="transition-colors text-white/50 hover:text-white" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition-colors text-white/50 hover:text-white" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="transition-colors text-white/50 hover:text-white" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
