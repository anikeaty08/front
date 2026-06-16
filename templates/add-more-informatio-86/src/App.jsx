import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
bg: '#08090E',
bg2: '#0E101A',
card: '#131725',
card2: '#1A1E2E',
card3: '#1E2436',
violet: { DEFAULT: '#7C5CFC', light: '#9B7EFF', subtle: 'rgba(124,92,252,0.15)' },
cyan: { DEFAULT: '#00D4FF', subtle: 'rgba(0,212,255,0.12)' },
green: { DEFAULT: '#00E676', subtle: 'rgba(0,230,118,0.12)' },
gold: { DEFAULT: '#FFB930', subtle: 'rgba(255,185,48,0.12)' },
red: { DEFAULT: '#FF4560', subtle: 'rgba(255,69,96,0.1)' },
text: '#F0F2FF',
text2: '#8B91B0',
text3: '#444B6A',
border: 'rgba(255,255,255,0.07)',
border2: 'rgba(255,255,255,0.12)',
},
fontFamily: {
head: ['Cabinet Grotesk', 'sans-serif'],
body: ['Instrument Sans', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm39 39V1H1v38h38z' fill='rgba(255,255,255,0.02)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Simple counter animation
  const animateValue = (id, start, end, duration, prefix = '', suffix = '') => {
    const obj = document.getElementById(id);
    if (!obj) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      obj.innerHTML = prefix + current.toLocaleString() + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Reveal on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if(entry.target.querySelector('#cMatch') && !entry.target.dataset.animated) {
            entry.target.dataset.animated = "true";
            animateValue("cMatch", 0, 14205, 2000);
            animateValue("cPaid", 0, 892340, 2000, '$');
            animateValue("cTraders", 0, 3428, 2000);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="blob blob1"></div>
<div className="blob blob2"></div>
<div className="blob blob3"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[600] w-[calc(100%-3rem)] max-w-5xl flex items-center justify-between glass-panel rounded-full pl-6 pr-2 py-2 shadow-2xl shadow-black/50">
<div className="flex items-center gap-2">
<span className="font-head font-semibold text-lg tracking-tighter text-white">BATTLE<span className="text-violet-light/90">-01</span></span>
</div>
<div className="hidden md:flex gap-1">
<a className="text-sm font-normal text-text2 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors" href="#features">Features</a>
<a className="text-sm font-normal text-text2 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors" href="#how">How It Works</a>
<a className="text-sm font-normal text-text2 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors" href="#modes">Game Modes</a>
<a className="text-sm font-normal text-text2 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors" href="#markets">Markets</a>
<a className="text-sm font-normal text-text2 px-4 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-xs font-normal text-white px-3 py-1.5 rounded-full bg-red-subtle border border-red/20 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse"></span>
      847 Live
    </div>
<button className="text-sm font-normal text-text2 hover:text-white px-3 py-2 transition-colors">Log in</button>
<button className="btn-primary text-white px-5 py-2 rounded-full font-head font-medium text-sm transition-all flex items-center gap-1.5 tracking-tight">
      Enter Arena <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<div className="relative z-10 border-b border-white/[0.04] bg-white/[0.01] overflow-hidden py-3 mt-24">
<div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>
<div className="ticker-track flex gap-10 items-center text-xs font-normal">
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ TraderKing +€210</span><span className="text-text3">EUR/USD · 15m</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-red font-medium">● LIVE</span><span className="text-text3">847 matches active</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-gold font-medium">⚔ TOURNAMENT</span><span className="text-text3">€1,200 pot · 3 spots</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ SilverFox23</span><span className="text-text3">7-match streak</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-white font-medium">★ Gold Rank</span><span className="text-text3">unlocked by MarketHawk</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ €892,340</span><span className="text-text3">paid out this month</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-red font-medium">● NEW MATCH</span><span className="text-text3">EUR/USD · 15m</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ TheRunner +€95</span><span className="text-text3">2 min ago</span></div>

<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ TraderKing +€210</span><span className="text-text3">EUR/USD · 15m</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-red font-medium">● LIVE</span><span className="text-text3">847 matches active</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-gold font-medium">⚔ TOURNAMENT</span><span className="text-text3">€1,200 pot · 3 spots</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ SilverFox23</span><span className="text-text3">7-match streak</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-white font-medium">★ Gold Rank</span><span className="text-text3">unlocked by MarketHawk</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ €892,340</span><span className="text-text3">paid out this month</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-red font-medium">● NEW MATCH</span><span className="text-text3">EUR/USD · 15m</span></div>
<span className="text-white/10">•</span>
<div className="flex items-center gap-2 whitespace-nowrap"><span className="text-green font-medium">▲ TheRunner +€95</span><span className="text-text3">2 min ago</span></div>
</div>
</div>

<section className="relative z-10 pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
<div className="hero-noise"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/80 to-bg pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-[1fr_440px] gap-12 items-center text-center md:text-left">
<div className="flex flex-col items-center md:items-start reveal">
<div className="inline-flex items-center gap-2 glass-panel rounded-full px-4 py-1.5 text-xs font-medium text-white/80 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-pulse"></span> BATTLE-01 IS LIVE
      </div>
<h1 className="font-head font-bold text-6xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tighter mb-6">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">TRADE.</span><br/>
<span className="text-outline">COMPETE.</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-cyan">WIN.</span>
</h1>
<p className="text-lg text-text2 font-light max-w-lg mb-10 leading-relaxed">
        The world's first competitive trading platform. Real opponents. Real stakes. Pure skill decides the winner.
      </p>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-14">
<button className="btn-primary text-white px-8 py-4 rounded-full font-head font-medium text-base transition-all flex items-center gap-2 tracking-tight">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
          Start Trading
        </button>
<button className="glass-panel text-white px-8 py-4 rounded-full font-medium text-sm transition-all flex items-center gap-2 hover:bg-white/[0.05]">
          View live matches
        </button>
</div>
<div className="inline-flex glass-panel rounded-2xl overflow-hidden divide-x divide-white/5 shadow-2xl">
<div className="px-8 py-6 text-center">
<div className="font-head text-3xl font-bold tracking-tighter text-white" id="cMatch">0</div>
<div className="text-xs text-text2 font-normal mt-1">Matches Played</div>
</div>
<div className="px-8 py-6 text-center">
<div className="font-head text-3xl font-bold tracking-tighter text-white" id="cPaid">$0</div>
<div className="text-xs text-text2 font-normal mt-1">Paid Out</div>
</div>
<div className="px-8 py-6 text-center hidden sm:block">
<div className="font-head text-3xl font-bold tracking-tighter text-white" id="cTraders">0</div>
<div className="text-xs text-text2 font-normal mt-1">Active Traders</div>
</div>
</div>
</div>
<div className="hidden md:flex justify-end items-center pointer-events-none select-none reveal relative">
<div className="absolute inset-0 bg-violet-light/10 blur-[100px] rounded-full mix-blend-screen"></div>
<svg className="overflow-visible relative z-10" fill="none" height="460" viewbox="0 0 380 420" width="420" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="hg1" x1="0" x2="140" y1="0" y2="190">
<stop offset="0%" stop-color="#141923"></stop><stop offset="100%" stop-color="#0B0D14"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="hg2" x1="240" x2="380" y1="230" y2="420">
<stop offset="0%" stop-color="#141923"></stop><stop offset="100%" stop-color="#0B0D14"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="hgWin" x1="70" x2="70" y1="190" y2="380">
<stop offset="0%" stop-color="#00E676"></stop><stop offset="100%" stop-color="rgba(0,230,118,0)"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="hgLose" x1="310" x2="310" y1="230" y2="50">
<stop offset="0%" stop-color="#FF4560"></stop><stop offset="100%" stop-color="rgba(255,69,96,0)"></stop>
</lineargradient>
<clippath id="clipCard1"><rect height="168" rx="16" width="140" x="10" y="10"></rect></clippath>
<clippath id="clipCard2"><rect height="168" rx="16" width="140" x="230" y="242"></rect></clippath>
<filter id="shadowCard"><fedropshadow dx="0" dy="16" flood-color="rgba(0,0,0,0.6)" stddeviation="24"></fedropshadow></filter>
<filter id="glow1"><fegaussianblur result="blur" stddeviation="12"></fegaussianblur><femerge><femergenode in="blur"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge></filter>
</defs>
<path className="path-draw" d="M70 178 Q70 210 130 210 Q190 210 190 230 Q190 250 250 250" fill="none" stroke="url(#hgWin)" strokeLinecap="round" strokeWidth="2"></path>
<path className="path-draw" d="M310 242 Q310 210 250 210 Q190 210 190 190 Q190 170 130 170 Q70 170 70 178" fill="none" stroke="url(#hgLose)" strokeLinecap="round" strokeWidth="2" style={{animationDelay: '.2s'}}></path>
<g className="f-card1" filter="url(#shadowCard)">
<rect fill="url(#hg1)" height="168" rx="16" stroke="rgba(255,255,255,0.08)" strokeWidth="1" width="140" x="10" y="10"></rect>
<g clipPath="url(#clipCard1)">
<rect fill="rgba(255,255,255,0.1)" height="4" rx="2" width="88" x="26" y="30"></rect>
<rect fill="rgba(255,255,255,0.05)" height="4" rx="2" width="60" x="26" y="44"></rect>
<path d="M26 90 Q50 70 70 100 T114 60" fill="none" stroke="#00E676" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="114" cy="60" fill="#00E676" filter="url(#glow1)" r="3"></circle>
<rect fill="rgba(0,230,118,0.1)" height="24" rx="6" width="40" x="26" y="120"></rect>
<rect fill="rgba(255,255,255,0.02)" height="24" rx="6" width="40" x="74" y="120"></rect>
</g>
</g>
<g className="f-badge1" transform="translate(130,-5)">
<circle cx="16" cy="16" fill="#0B0D14" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></circle>
<circle cx="16" cy="16" fill="rgba(0,230,118,0.2)" r="12"></circle>
<circle cx="16" cy="16" fill="#00E676" r="6"></circle>
</g>
<g className="f-card2" filter="url(#shadowCard)">
<rect fill="url(#hg2)" height="168" rx="16" stroke="rgba(255,255,255,0.08)" strokeWidth="1" width="140" x="230" y="242"></rect>
<g clipPath="url(#clipCard2)">
<rect fill="rgba(255,255,255,0.1)" height="4" rx="2" width="88" x="246" y="262"></rect>
<rect fill="rgba(255,255,255,0.05)" height="4" rx="2" width="60" x="246" y="276"></rect>
<path d="M246 290 Q270 320 290 300 T334 340" fill="none" stroke="#FF4560" strokeLinecap="round" strokeWidth="2"></path>
<circle cx="334" cy="340" fill="#FF4560" filter="url(#glow1)" r="3"></circle>
<rect fill="rgba(255,69,96,0.1)" height="24" rx="6" width="40" x="246" y="352"></rect>
<rect fill="rgba(255,255,255,0.02)" height="24" rx="6" width="40" x="294" y="352"></rect>
</g>
</g>
<g className="f-badge2" transform="translate(350,226)">
<circle cx="16" cy="16" fill="#0B0D14" r="16" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></circle>
<circle cx="16" cy="16" fill="rgba(255,69,96,0.2)" r="12"></circle>
<circle cx="16" cy="16" fill="#FF4560" r="6"></circle>
</g>
<g className="f-pot" filter="url(#glow1)">
<rect fill="#141923" height="44" rx="22" stroke="rgba(255,255,255,0.15)" strokeWidth="1" width="92" x="144" y="196"></rect>
<text fill="#fff" fontFamily="sans-serif" fontSize="12" font-weight="600" letter-spacing="1" text-anchor="middle" x="190" y="222">VS</text>
</g>
</svg>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg2/30 border-t border-white/[0.02]" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-20 text-center md:text-left reveal">
<h2 className="font-head font-semibold text-4xl md:text-5xl tracking-tighter mb-4 leading-tight text-white">Built different.<br/>Wins instantly.</h2>
<p className="text-lg text-text2 font-light max-w-xl">Everything broken about prop firms and brokers — fixed. Competitive trading the way it should be.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

<div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group transition-all duration-500">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-violet/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 text-white text-xl">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-3 text-white">Player vs Player</h3>
<p className="text-sm text-text2 leading-relaxed mb-10 font-light">You compete against other traders, not the house. No bots, no rigged odds. Pure skill — best P&amp;L wins the pot.</p>
<div className="mt-auto">
<div className="font-head text-4xl font-semibold tracking-tighter leading-none text-white">51.1%</div>
<div className="text-xs text-text3 font-medium mt-2">Avg Win Ratio</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group transition-all duration-500">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 text-white text-xl">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-3 text-white">Instant Payouts</h3>
<p className="text-sm text-text2 leading-relaxed mb-10 font-light">No more waiting days for your money. Winnings hit your wallet the second a match closes.</p>
<div className="flex flex-col gap-4 mt-auto">
<div className="flex items-center gap-3">
<span className="text-xs text-text3 w-16 text-right">Prop Firms</span>
<div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-red/50 rounded-full pbar-fill" style={{-W: '25%'}}></div></div>
<span className="text-xs font-head font-medium text-white/50 w-8">Days</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-text3 w-16 text-right">Brokers</span>
<div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden"><div className="h-full bg-white/20 rounded-full pbar-fill" style={{-W: '35%'}}></div></div>
<span className="text-xs font-head font-medium text-white/50 w-8">Slow</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-text3 w-16 text-right text-white">BATTLE-01</span>
<div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden relative"><div className="absolute inset-0 bg-gradient-to-r from-violet to-cyan rounded-full pbar-fill shadow-[0_0_10px_rgba(124,92,252,0.8)]" style={{-W: '98%'}}></div></div>
<span className="text-xs font-head font-medium text-green w-8">Now</span>
</div>
</div>
</div>

<div className="glass-panel rounded-[2rem] p-10 relative overflow-hidden group transition-all duration-500">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-green/10 blur-[80px] rounded-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-50"></div>
<div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 text-white text-xl">
<iconify-icon icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-3 text-white">Risk Limited</h3>
<p className="text-sm text-text2 leading-relaxed mb-10 font-light">Your downside is capped at a single entry fee. No full capital exposure. No evaluation traps.</p>
<div className="mt-auto">
<div className="font-head text-4xl font-semibold tracking-tighter leading-none text-white">1×</div>
<div className="text-xs text-text3 font-medium mt-2">Max Risk = Entry Fee</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg border-t border-white/[0.02]" id="how">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24 reveal">
<h2 className="font-head font-semibold text-4xl md:text-5xl tracking-tighter leading-tight text-white mb-4">Three steps to your<br/>first win</h2>
<p className="text-lg text-text2 font-light max-w-xl mx-auto">Get started in under two minutes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative reveal">
<div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="text-center relative z-10 group">
<div className="w-14 h-14 mx-auto rounded-full glass-panel flex items-center justify-center font-head font-medium text-white mb-8 shadow-lg group-hover:border-white/20 transition-colors">01</div>
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 text-white text-2xl opacity-80 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-lg font-semibold tracking-tight mb-2 text-white">Deposit</h3>
<p className="text-sm text-text2 leading-relaxed font-light">Fund your account with crypto. Minimum 50 USDT, credited instantly.</p>
</div>
<div className="text-center relative z-10 group mt-8 md:mt-0">
<div className="w-14 h-14 mx-auto rounded-full glass-panel flex items-center justify-center font-head font-medium text-white mb-8 shadow-lg group-hover:border-white/20 transition-colors">02</div>
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 text-white text-2xl opacity-80 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-lg font-semibold tracking-tight mb-2 text-white">Challenge</h3>
<p className="text-sm text-text2 leading-relaxed font-light">Enter a 1v1 battle or tournament. Choose your pair and stake.</p>
</div>
<div className="text-center relative z-10 group mt-8 md:mt-0">
<div className="w-14 h-14 mx-auto rounded-full glass-panel flex items-center justify-center font-head font-medium text-white mb-8 shadow-lg group-hover:border-white/20 transition-colors">03</div>
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 text-white text-2xl opacity-80 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-lg font-semibold tracking-tight mb-2 text-white">Trade</h3>
<p className="text-sm text-text2 leading-relaxed font-light">Both traders compete on the same pair over the same duration.</p>
</div>
<div className="text-center relative z-10 group mt-8 md:mt-0">
<div className="w-14 h-14 mx-auto rounded-full glass-panel flex items-center justify-center font-head font-medium text-white mb-8 shadow-lg group-hover:border-white/20 transition-colors">04</div>
<div className="w-12 h-12 mx-auto flex items-center justify-center mb-4 text-white text-2xl opacity-80 group-hover:opacity-100 transition-opacity group-hover:-translate-y-1 duration-300">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-lg font-semibold tracking-tight mb-2 text-white">Win Instantly</h3>
<p className="text-sm text-text2 leading-relaxed font-light">Best P&amp;L percentage takes the pot. Withdraw to your wallet instantly.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg2/30 border-t border-white/[0.02]" id="modes">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-head font-semibold text-4xl md:text-5xl tracking-tighter mb-4 text-white">Choose your arena</h2>
<p className="text-lg text-text2 font-light max-w-xl mx-auto">Different modes for different trading styles. All instantly settled.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">

<div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group flex flex-col">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mb-6 text-white text-xl">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-2 text-white">1v1 Duels</h3>
<p className="text-sm text-text2 leading-relaxed font-light mb-8">Head-to-head combat. You against one other trader. Match duration from 5 minutes to 4 hours. Winner takes the combined stake.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Instant matchmaking</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Custom stake sizes</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Private matches via link</li>
</ul>
</div>

<div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group flex flex-col">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mb-6 text-gold text-xl">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-2 text-white">Tournaments</h3>
<p className="text-sm text-text2 leading-relaxed font-light mb-8">Daily and weekly structured brackets. Buy-in once, survive the rounds, and take the lion's share of massive accumulated prize pools.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Up to 10,000 players</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Top 10% get paid</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Guaranteed minimum pots</li>
</ul>
</div>

<div className="glass-panel rounded-[2rem] p-8 relative overflow-hidden group flex flex-col">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center mb-6 text-red text-xl">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-head text-2xl font-semibold tracking-tight mb-2 text-white">King of the Hill</h3>
<p className="text-sm text-text2 leading-relaxed font-light mb-8">Hold the highest P&amp;L on a specific asset for 24 hours. The leaderboard is completely live, and a target is constantly on your back.</p>
<ul className="space-y-3 mt-auto">
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> 24-hour rolling cycles</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Asset-specific leaderboards</li>
<li className="flex items-center gap-2 text-xs text-text3"><iconify-icon className="text-green text-base" icon="solar:check-circle-linear"></iconify-icon> Accumulative rewards</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg border-t border-white/[0.02]">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-[1fr_500px] gap-20 items-center reveal">
<div className="order-2 lg:order-1 flex flex-col items-start">
<h2 className="font-head font-semibold text-4xl md:text-5xl tracking-tighter leading-tight mb-6 text-white">Real traders.<br/>Real stakes.<br/>One winner.</h2>
<p className="text-lg text-text2 font-light max-w-xl mb-12">No house, no bots, no hidden edge. Every BATTLE-01 match is pure trader vs trader — same pair, same timeframe, best P&amp;L wins the pot.</p>
<div className="flex flex-col gap-8 mb-12 w-full">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-white text-xl">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="block text-base font-medium text-white mb-1">Matched against real opponents</strong>
<span className="text-sm text-text2 font-light leading-relaxed">Instant matchmaking pairs you with a live trader at the same stake level.</span>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-white text-xl">
<iconify-icon icon="solar:chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="block text-base font-medium text-white mb-1">Best P&amp;L wins everything</strong>
<span className="text-sm text-text2 font-light leading-relaxed">Trade the same pair for the same duration. Highest profit percentage takes the pot.</span>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-white text-xl">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<strong className="block text-base font-medium text-white mb-1">Instant payout to your wallet</strong>
<span className="text-sm text-text2 font-light leading-relaxed">Winner's funds are transferred the second the match closes. No delays.</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative flex justify-center items-center w-full">
<div className="absolute inset-0 bg-violet-light/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="relative w-full rounded-[2rem] glass-panel bg-white/[0.01] p-2 md:p-3 shadow-2xl">
<div className="w-full bg-[#0B0D14] rounded-3xl border border-white/5 overflow-hidden flex flex-col">

<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red shadow-[0_0_8px_rgba(255,69,96,0.6)]"></span>
<span className="text-xs font-medium text-white/50 tracking-widest uppercase">Live Match</span>
</div>
<div className="text-xs font-mono text-white/40">#8472-BTC</div>
</div>

<div className="p-8 flex flex-col gap-8">

<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 font-head font-medium text-lg">T1</div>
<div className="flex flex-col">
<span className="text-base font-medium text-white">TraderOne</span>
<span className="text-xs text-text3 font-mono">1.5 ETH Stake</span>
</div>
</div>
<span className="text-xl font-mono font-medium text-green drop-shadow-[0_0_12px_rgba(0,230,118,0.2)]">+12.4%</span>
</div>

<div className="relative h-px w-full bg-white/5 flex items-center justify-center">
<div className="absolute bg-[#0B0D14] border border-white/5 px-3 py-1 text-[10px] font-medium tracking-widest text-white/40 rounded-full">VS</div>
</div>

<div className="flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/80 font-head font-medium text-lg">T2</div>
<div className="flex flex-col">
<span className="text-base font-medium text-white">CryptoPro</span>
<span className="text-xs text-text3 font-mono">1.5 ETH Stake</span>
</div>
</div>
<span className="text-xl font-mono font-medium text-red/80">-4.2%</span>
</div>

<div className="mt-4 w-full bg-white/[0.02] border border-white/[0.05] rounded-2xl p-5 flex items-center justify-between">
<span className="text-xs font-medium text-white/60 tracking-widest uppercase">Prize Pot</span>
<span className="text-3xl font-head font-bold text-white tracking-tighter">$8,450</span>
</div>
<div className="text-center flex justify-center items-center gap-2">
<div className="h-1 w-full max-w-[120px] bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-violet w-1/3 rounded-full"></div>
</div>
<span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">02:45 Left</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg2/30 border-t border-white/[0.02]" id="markets">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="font-head font-semibold text-3xl md:text-4xl tracking-tighter mb-4 text-white">Trade the assets you know</h2>
<p className="text-text2 font-light max-w-xl mx-auto">Deep liquidity and zero slippage on over 150+ global markets.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
<div className="glass-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1">
<iconify-icon className="text-4xl text-gold mb-4" icon="solar:bitcoin-linear"></iconify-icon>
<div className="text-base font-medium text-white mb-1">Crypto</div>
<div className="text-xs text-text3 font-light">BTC, ETH, SOL &amp; more</div>
</div>
<div className="glass-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1">
<iconify-icon className="text-4xl text-green mb-4" icon="solar:dollar-linear"></iconify-icon>
<div className="text-base font-medium text-white mb-1">Forex</div>
<div className="text-xs text-text3 font-light">EUR/USD, GBP/JPY, Majors</div>
</div>
<div className="glass-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1">
<iconify-icon className="text-4xl text-cyan mb-4" icon="solar:graph-up-linear"></iconify-icon>
<div className="text-base font-medium text-white mb-1">Indices</div>
<div className="text-xs text-text3 font-light">US30, NAS100, SPX500</div>
</div>
<div className="glass-panel p-8 rounded-[1.5rem] flex flex-col items-center text-center transition-all hover:-translate-y-1">
<iconify-icon className="text-4xl text-text2 mb-4" icon="solar:safe-circle-linear"></iconify-icon>
<div className="text-base font-medium text-white mb-1">Metals</div>
<div className="text-xs text-text3 font-light">Gold (XAU), Silver (XAG)</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 bg-bg border-t border-white/[0.02]" id="faq">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="text-center mb-16">
<h2 className="font-head font-semibold text-4xl tracking-tighter mb-4 text-white">Frequently Asked Questions</h2>
<p className="text-text2 font-light">Everything you need to know about the platform.</p>
</div>
<div className="flex flex-col gap-3">
<div className="glass-panel rounded-2xl overflow-hidden group">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="this.parentElement.classList.toggle('open')">
<span className="font-medium text-base text-white">How do I withdraw my winnings?</span>
<iconify-icon className="faq-icon transition-transform text-white/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-a px-8 pb-6 text-sm text-text2 font-light leading-relaxed">
          Winnings are automatically credited to your BATTLE-01 wallet the moment a match concludes. You can withdraw to your connected crypto wallet instantly, with zero holding periods.
        </div>
</div>
<div className="glass-panel rounded-2xl overflow-hidden group">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="this.parentElement.classList.toggle('open')">
<span className="font-medium text-base text-white">What happens if there's a tie?</span>
<iconify-icon className="faq-icon transition-transform text-white/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-a px-8 pb-6 text-sm text-text2 font-light leading-relaxed">
          In the rare event of an exact P&amp;L percentage tie down to the second decimal point, the match is declared a draw and entry fees are instantly refunded to both traders' wallets.
        </div>
</div>
<div className="glass-panel rounded-2xl overflow-hidden group">
<button className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none" onclick="this.parentElement.classList.toggle('open')">
<span className="font-medium text-base text-white">Are there any hidden fees?</span>
<iconify-icon className="faq-icon transition-transform text-white/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-a px-8 pb-6 text-sm text-text2 font-light leading-relaxed">
          No. BATTLE-01 takes a flat 5% platform fee directly from the final pot. There are no deposit, withdrawal, or hidden evaluation fees whatsoever.
        </div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-bg py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-head font-medium text-lg tracking-tighter text-white/50">BATTLE<span className="text-white/80">-01</span></span>
</div>
<div className="flex gap-6 text-sm text-text3 font-normal">
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="text-xs text-text3">
      © 2024 BATTLE-01. All rights reserved.
    </div>
</div>
</footer>


    </>
  );
}
