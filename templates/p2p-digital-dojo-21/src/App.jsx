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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6', // Teal/Emerald vibe for growth/money
900: '#134e4a',
950: '#042f2e',
},
obsidian: '#050505',
charcoal: '#0A0A0A',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "linear-gradient(to right, #202020 1px, transparent 1px), linear-gradient(to bottom, #202020 1px, transparent 1px)",
},
animation: {
'blob': 'blob 7s infinite',
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-white/5 border border-white/10 rounded flex items-center justify-center group-hover:bg-brand-500/20 group-hover:border-brand-500/50 transition-colors">
<span className="font-bold text-white tracking-tighter text-sm">P2P</span>
</div>
<span className="text-sm font-medium text-gray-400 tracking-tight group-hover:text-white transition-colors">Prospect to Partner</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#problem">The Cost</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#dojo">Digital Dojo</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#pricing">Membership</a>
</div>
<a className="bg-white text-black hover:bg-gray-200 text-xs font-semibold px-4 py-2 rounded-full transition-colors tracking-tight" href="#tour">
                Book Tour
            </a>
</div>
</nav>
<main className="relative pt-16">

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-900/10 rounded-full blur-[120px] animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
<div className="absolute inset-0 bg-grid opacity-20"></div>
</div>

<section className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-medium text-brand-500 mb-8 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                50+ ACTIVE MEMBERS INCLUDING FORTUNE 500 TEAMS
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 max-w-5xl leading-[1.1] animate-fade-in" style={{animationDelay: '0.1s'}}>
                Stop Losing Money to the <span className="text-gray-500">Isolation Tax.</span>
</h1>
<p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10 animate-fade-in" style={{animationDelay: '0.2s'}}>
                Every month you work alone costs you unfinished projects, inconsistent revenue, and opportunities that slip to entrepreneurs who built the right network.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in" style={{animationDelay: '0.3s'}}>
<a className="h-12 px-8 rounded-full bg-white text-black font-semibold text-sm flex items-center gap-2 hover:bg-gray-100 transition-all hover:scale-105" href="#tour">
<span className="iconify" data-icon="lucide:calendar" data-width="18"></span>
                    Book Your Digital Dojo Tour
                </a>
<a className="h-12 px-8 rounded-full border border-white/10 bg-transparent text-white font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-all" href="#members">
                    See Who's Inside
                    <span className="iconify" data-icon="lucide:arrow-down" data-width="18"></span>
</a>
</div>
<div className="mt-24 text-sm text-gray-500 max-w-3xl mx-auto border-t border-white/5 pt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
<p>You've got the skills. You've got the vision. What you don't have is the partner who closes the project you started six months ago. Working solo isn't noble. It's expensive.</p>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="problem">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">What Another Year Alone Actually Costs You</h2>
<p className="text-gray-400 text-sm max-w-xl">The "Isolation Tax" isn't a metaphor. It's the tangible revenue you lose by operating in a vacuum.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col group">
<div className="spotlight-border absolute inset-0 rounded-2xl"></div>
<div className="relative z-10">
<span className="iconify text-gray-400 mb-6 group-hover:text-white transition-colors" data-icon="lucide:folder-open" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-3">Unfinished Projects</h3>
<p className="text-sm text-gray-500 leading-relaxed">That course you started. The partnership proposal sitting in drafts. Solo means half-built revenue sitting on the shelf.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col group">
<div className="spotlight-border absolute inset-0 rounded-2xl"></div>
<div className="relative z-10">
<span className="iconify text-gray-400 mb-6 group-hover:text-white transition-colors" data-icon="lucide:trending-down" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-3">Inconsistent Revenue</h3>
<p className="text-sm text-gray-500 leading-relaxed">No referral network means you're always hunting. Feast or famine cycles because you have no built-in client base.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col group">
<div className="spotlight-border absolute inset-0 rounded-2xl"></div>
<div className="relative z-10">
<span className="iconify text-gray-400 mb-6 group-hover:text-white transition-colors" data-icon="lucide:clock" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-3">Burned Time</h3>
<p className="text-sm text-gray-500 leading-relaxed">Hours spent on tasks someone in your network could handle in minutes. Researching solutions a vetted partner already knows.</p>
</div>
</div>

<div className="spotlight-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] flex flex-col group">
<div className="spotlight-border absolute inset-0 rounded-2xl"></div>
<div className="relative z-10">
<span className="iconify text-gray-400 mb-6 group-hover:text-white transition-colors" data-icon="lucide:brain-circuit" data-width="24"></span>
<h3 className="text-lg font-medium text-white mb-3">Mental Toll</h3>
<p className="text-sm text-gray-500 leading-relaxed">The weight of doing it alone. No accountability. The quiet fear that maybe you're not cut out for this.</p>
</div>
</div>
</div>
<div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/5 text-center">
<p className="text-sm text-gray-400">
                    You've tried networking groups that don't lead to business. Masterminds that cost $10k but don't generate clients. <br className="hidden md:block"/>
<span className="text-white font-medium">You don't need more contacts. You need vetted partners who have skin in the game.</span>
</p>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                        Imagine Waking Up Knowing Someone Has Your Back.
                    </h2>
</div>
<div>
<p className="text-gray-400 text-base leading-relaxed mb-6">
                        What changes when you're not alone? That project you shelved gets finished because your new dev partner trades coins for equity. The sales call you dreaded gets handled by the marketer who joined last month.
                    </p>
<p className="text-gray-400 text-base leading-relaxed mb-6">
                        You don't need to be everything. You need access to people who fill the gaps. Vetted people. Cross-industry people.
                    </p>
<p className="text-white font-medium text-lg border-l-2 border-brand-500 pl-4">
                        That version of your business exists. You're just in the wrong room.
                    </p>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="text-center max-w-3xl mx-auto mb-16">
<div className="text-brand-500 text-xs font-mono mb-4 uppercase tracking-widest">Infrastructure for Entrepreneurship</div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-6">Welcome to P2P</h2>
<p className="text-xl text-gray-400">The only vetted community where collaboration, partnerships, and transactions happen in the same place.</p>
</div>
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-black aspect-[16/9] md:aspect-[21/9] flex items-center justify-center group">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="grid grid-cols-6 grid-rows-4 gap-4 w-full h-full p-8 opacity-40 transform perspective-1000 rotate-x-12 scale-110">

<div className="col-span-1 row-span-1 bg-white/10 rounded border border-white/5"></div>
<div className="col-span-2 row-span-2 bg-white/5 rounded border border-white/10"></div>
<div className="col-span-1 row-span-1 bg-brand-500/20 rounded border border-brand-500/30"></div>
<div className="col-span-2 row-span-1 bg-white/10 rounded border border-white/5"></div>
<div className="col-span-1 row-span-2 bg-white/5 rounded border border-white/10"></div>
<div className="col-span-2 row-span-1 bg-white/10 rounded border border-white/5"></div>
<div className="col-span-1 row-span-1 bg-white/5 rounded border border-white/10"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="glass-panel px-8 py-4 rounded-full text-white text-sm font-medium flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        Live in the Digital Dojo
                    </div>
</div>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
<p>P2P isn't a networking group. It's the infrastructure that makes entrepreneurship less lonely and more profitable.</p>
<p>Inside the Digital Dojo, our AR/virtual environment, you walk through a premium space where members have storefronts and deals get done.</p>
<p>The coin economy creates immediate buying power. You enter with 1,000 coins. You spend them on services. Reciprocity becomes automatic.</p>
</div>
</section>

<section className="w-full border-y border-white/5 bg-white/[0.01] py-12">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-white text-lg font-medium tracking-tight mb-2">Join 50+ Vetted Entrepreneurs</p>
<p className="text-gray-500 text-sm mb-6">Including teams from 5 Fortune 500 Companies</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">

<span className="font-bold text-xl text-white tracking-tighter">ACME CORP</span>
<span className="font-bold text-xl text-white tracking-tighter">GLOBAL DYNAMICS</span>
<span className="font-bold text-xl text-white tracking-tighter">SOYLENT</span>
<span className="font-bold text-xl text-white tracking-tighter">UMBRELLA</span>
<span className="font-bold text-xl text-white tracking-tighter">MASSIVE DYNAMIC</span>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24" id="how-it-works">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">From Prospect to Partner in Three Steps</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-white font-mono text-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">01</div>
<h3 className="text-lg font-medium text-white">Book a Digital Dojo Tour</h3>
<p className="text-sm text-gray-500 leading-relaxed">We'll walk through the virtual space together. No pitch. No pressure. Just a 15-minute look at how P2P works.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-white font-mono text-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]">02</div>
<h3 className="text-lg font-medium text-white">Get Vetted</h3>
<p className="text-sm text-gray-500 leading-relaxed">We don't let everyone in. If your business is real and you're committed to reciprocity, you're in.</p>
</div>

<div className="relative z-10 flex flex-col gap-4">
<div className="w-16 h-16 rounded-full bg-black border border-brand-500/30 flex items-center justify-center text-brand-500 font-mono text-xl shadow-[0_0_20px_rgba(20,184,166,0.1)]">03</div>
<h3 className="text-lg font-medium text-white">Enter with 1,000 Coins</h3>
<p className="text-sm text-gray-500 leading-relaxed">Instant access. Immediate buying power. Start browsing member storefronts and build relationships that generate revenue.</p>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors text-sm font-medium" href="#tour">
                    Book Your Tour Now <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</section>

<section className="relative z-10 w-full py-24 bg-white/[0.02] border-y border-white/5" id="dojo">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="relative w-48 h-64 border border-white/20 rounded bg-white/5 transform perspective-1000 rotate-y-12 translate-x-12 translate-y-4 hover:translate-y-2 transition-transform duration-700">
<div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-600"></div>
<div className="absolute top-12 left-2 right-2 h-2 bg-gray-700 rounded"></div>
<div className="absolute top-16 left-2 right-2 h-2 bg-gray-700 rounded w-2/3"></div>
<div className="absolute bottom-4 left-0 right-0 text-center text-[10px] text-brand-500 font-mono">STOREFRONT</div>
</div>
<div className="relative w-48 h-64 border border-brand-500/30 rounded bg-brand-900/10 backdrop-blur-md transform perspective-1000 -rotate-y-12 -translate-x-4 -translate-y-8 z-10 shadow-2xl shadow-brand-900/20">
<div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-brand-500"></div>
<div className="absolute top-12 left-2 right-2 h-2 bg-white/20 rounded"></div>
<div className="absolute top-16 left-2 right-2 h-2 bg-white/20 rounded w-2/3"></div>
<div className="absolute bottom-10 left-4 right-4 h-8 bg-brand-500 rounded flex items-center justify-center text-black text-[10px] font-bold">HIRE NOW</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-brand-500" data-icon="lucide:box" data-width="20"></span>
<span className="text-xs font-mono text-brand-500 uppercase tracking-widest">Premium Environment</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">This Isn't Zoom.<br/>This Is the Digital Dojo.</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        The Digital Dojo is a premium AR/virtual environment you access via phone or AR glasses. It's not a video call. It's a space you walk through. Member storefronts line the halls. Services are on display.
                    </p>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Different floors unlock as you level up: <span className="text-white">Capital, Empire, Legacy, Billionaire.</span> Each tier gives access to higher-level partnerships.
                    </p>
<p className="text-gray-400 text-sm leading-relaxed">
                        The Dojo makes collaboration tangible. You're walking into someone's storefront, seeing their work, and making a decision in real time.
                    </p>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
<div className="border border-white/10 rounded-3xl p-8 md:p-12 bg-gradient-to-b from-white/[0.02] to-transparent">
<h2 className="text-2xl font-medium text-white mb-8">What Membership Includes</h2>
<div className="text-gray-400 text-sm md:text-base leading-loose max-w-4xl">
                    Access to the Digital Dojo and all active member storefronts where you can browse services, book consultations, and close deals without leaving the platform. 
                    <span className="text-white">Entry coins of 1,000 upon joining</span>, giving you immediate buying power. 
                    A vetted cross-industry network spanning finance, SaaS, government contracting, marketing, creative services, and operations. 
                    The coin-based reciprocity economy that eliminates cold selling. Accountability infrastructure through partnership tracking. 
                    Priority access to member-to-member deals. 
                    And for <span className="text-white">$999 members</span>, your own storefront inside the Digital Dojo where other members discover your services directly.
                </div>
<div className="mt-8 pt-8 border-t border-white/5 text-sm text-gray-500">
                    This is what $500 or $999 gets you. Compare that to a $10k mastermind that doesn't generate clients.
                </div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Why Coins Change Everything</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-4">
                        The coin economy solves the biggest problem in networking: extraction without reciprocity. In P2P, every interaction has skin in the game.
                    </p>
<p className="text-gray-400 text-sm leading-relaxed mb-4">
                        You enter with <span className="text-brand-500">1,000 gifted coins</span>. You spend coins on services you need. Other members spend their coins on you. The economy forces mutual exchange.
                    </p>
<p className="text-gray-400 text-sm leading-relaxed">
                        The psychology is simple. When you spend coins on someone, they're more likely to spend coins on you. Reciprocity becomes automatic, not aspirational.
                    </p>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand-500/20 blur-[100px] rounded-full"></div>
<div className="relative glass-panel rounded-2xl p-8 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 flex items-center justify-center text-black font-bold text-3xl mb-6 shadow-lg shadow-yellow-500/20">
                            P2P
                        </div>
<h3 className="text-white font-medium text-lg">Automatic Reciprocity</h3>
<p className="text-gray-500 text-xs mt-2">1 Coin = Real Value. Real Services.</p>
<div className="mt-6 w-full bg-white/5 rounded-lg p-4 text-left">
<div className="flex justify-between text-xs text-white mb-2">
<span>Starting Balance</span>
<span className="text-brand-500">+1,000 Coins</span>
</div>
<div className="flex justify-between text-xs text-gray-400">
<span>Risk Level</span>
<span>Zero (Gifted)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="members">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">What Happens When Partners Meet</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-mono text-brand-500 px-2 py-1 rounded bg-brand-500/10">Finance + SaaS</span>
</div>
<p className="text-gray-300 text-sm mb-4">"A CFO consultant joined looking for clients. Within two weeks, partnered with a SaaS founder on a fractional finance package. $50k contract, six-month engagement."</p>
<div className="text-xs text-gray-500">Built via Digital Dojo introductions</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-mono text-brand-500 px-2 py-1 rounded bg-brand-500/10">Marketer + Gov Contractor</span>
</div>
<p className="text-gray-300 text-sm mb-4">"Met a government contractor who needed marketing infrastructure. Traded coins for initial work, converted to $8k/month retainer by Month 2."</p>
<div className="text-xs text-gray-500">Reciprocity in action</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-mono text-brand-500 px-2 py-1 rounded bg-brand-500/10">Agency + Dev</span>
</div>
<p className="text-gray-300 text-sm mb-4">"A creative agency had a half-built app idea. Found a dev partner in the Dojo, traded equity for build-out, launched in 90 days."</p>
<div className="text-xs text-gray-500">Launched after 2 years dormant</div>
</div>

<div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 transition-colors">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs font-mono text-brand-500 px-2 py-1 rounded bg-brand-500/10">Coach + Ops</span>
</div>
<p className="text-gray-300 text-sm mb-4">"Hired an ops specialist for 800 coins, freed up 15 hours a week, increased coaching capacity by 40%. Both became repeat partners."</p>
<div className="text-xs text-gray-500">Instant ROI</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Two Ways In. Both One-Time Payments.</h2>
<p className="text-gray-400 text-sm">No monthly subscriptions. Lifetime access to the infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-medium text-white">Partner</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">$500</span>
<span className="text-gray-500 text-sm">one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> Access to Digital Dojo</li>
<li className="flex gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> 1,000 Coins (Immediate Buying Power)</li>
<li className="flex gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> Full Network Access</li>
<li className="flex gap-3 text-sm text-gray-300"><span className="iconify text-white" data-icon="lucide:check"></span> Member Directory Visibility</li>
</ul>
<a className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-medium text-center hover:bg-white/5 transition-colors" href="#tour">Book Tour to Discuss</a>
<p className="text-xs text-gray-500 text-center mt-4">Best for testing the waters</p>
</div>

<div className="relative rounded-3xl border border-brand-500/30 bg-gradient-to-b from-brand-900/10 to-black p-8 flex flex-col shadow-2xl shadow-brand-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">RECOMMENDED</div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white">Partner + Storefront</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">$999</span>
<span className="text-gray-500 text-sm">one-time</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white font-medium"><span className="iconify text-brand-500" data-icon="lucide:check"></span> Everything in Partner Tier</li>
<li className="flex gap-3 text-sm text-white font-medium"><span className="iconify text-brand-500" data-icon="lucide:check"></span> Your Own Digital Dojo Storefront</li>
<li className="flex gap-3 text-sm text-white font-medium"><span className="iconify text-brand-500" data-icon="lucide:check"></span> 2,000 Coins (Double Buying Power)</li>
<li className="flex gap-3 text-sm text-white font-medium"><span className="iconify text-brand-500" data-icon="lucide:check"></span> Priority Placement on Premium Floors</li>
<li className="flex gap-3 text-sm text-white font-medium"><span className="iconify text-brand-500" data-icon="lucide:check"></span> Advanced Analytics</li>
</ul>
<a className="w-full py-3 rounded-xl bg-white text-black text-sm font-bold text-center hover:bg-gray-100 transition-colors" href="#tour">Book Tour to Discuss</a>
<p className="text-xs text-gray-500 text-center mt-4">Best for serious revenue generation</p>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl font-medium text-white mb-6">What You've Tried vs. What Works</h3>
<div className="space-y-6">
<div className="pl-4 border-l border-white/10">
<p className="text-gray-500 text-xs uppercase mb-1">BNI &amp; Local Groups</p>
<p className="text-gray-300 text-sm">BNI is geography-limited and time-heavy. <span className="text-white">P2P is global, virtual, and transactional.</span></p>
</div>
<div className="pl-4 border-l border-white/10">
<p className="text-gray-500 text-xs uppercase mb-1">High-Ticket Masterminds</p>
<p className="text-gray-300 text-sm">They cost $10k+ for advice. <span className="text-white">P2P costs $999 once and provides built-in clients.</span></p>
</div>
<div className="pl-4 border-l border-white/10">
<p className="text-gray-500 text-xs uppercase mb-1">Fiverr &amp; LinkedIn</p>
<p className="text-gray-300 text-sm">Cold outreach and strangers. <span className="text-white">P2P is warm infrastructure with vetted partners.</span></p>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium text-white mb-6">Common Questions</h3>
<div className="space-y-4">
<details className="group">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm text-gray-300 hover:text-white pb-4 border-b border-white/5">
                                Is this just another networking group?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-gray-500 text-sm mt-2 leading-relaxed">No. Networking groups schedule meetings and hope for referrals. P2P has infrastructure. Storefronts. Coins. You're doing business, not just chatting.</p>
</details>
<details className="group">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm text-gray-300 hover:text-white pb-4 border-b border-white/5">
                                What if I spend my coins and get nothing?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-gray-500 text-sm mt-2 leading-relaxed">Rare due to vetting. Coins are also refillable. Most members spend their first 1,000 within two weeks because the ROI is clear.</p>
</details>
<details className="group">
<summary className="flex justify-between items-center cursor-pointer list-none text-sm text-gray-300 hover:text-white pb-4 border-b border-white/5">
                                Is it worth it if I'm not in the "right" industry?
                                <span className="transition group-open:rotate-180"><span className="iconify" data-icon="lucide:chevron-down"></span></span>
</summary>
<p className="text-gray-500 text-sm mt-2 leading-relaxed">That's why it works. Cross-industry collaboration creates the biggest wins. A SaaS founder needs a gov contractor. Your "wrong" industry is someone else's solution.</p>
</details>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center" id="tour">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">The Cost of Waiting is Real.</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
                Every month you work solo, you lose opportunities that compounding partnerships would create. What will you have built three months from now if you stay in the same room?
            </p>
<div className="glass-panel p-8 rounded-2xl max-w-lg mx-auto text-left relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-blue-600"></div>
<h3 className="text-xl font-medium text-white mb-2">Book Your Tour</h3>
<p className="text-sm text-gray-500 mb-6">15-minute walkthrough. No sales pressure. Instant access if vetted.</p>

<div className="bg-black/50 border border-white/10 rounded-lg p-4 flex flex-col gap-3">
<div className="flex justify-between items-center border-b border-white/10 pb-3">
<span className="text-sm text-white font-medium">Select a Date</span>
<div className="flex gap-2">
<span className="iconify text-gray-500" data-icon="lucide:chevron-left"></span>
<span className="iconify text-white" data-icon="lucide:chevron-right"></span>
</div>
</div>
<div className="grid grid-cols-5 gap-2 text-center">
<div className="p-2 rounded bg-white/5 text-gray-300 text-xs cursor-pointer hover:bg-brand-500 hover:text-black transition">Mon<br/>12</div>
<div className="p-2 rounded bg-white/5 text-gray-300 text-xs cursor-pointer hover:bg-brand-500 hover:text-black transition">Tue<br/>13</div>
<div className="p-2 rounded bg-white/5 text-gray-300 text-xs cursor-pointer hover:bg-brand-500 hover:text-black transition">Wed<br/>14</div>
<div className="p-2 rounded bg-white/5 text-gray-300 text-xs cursor-pointer hover:bg-brand-500 hover:text-black transition">Thu<br/>15</div>
<div className="p-2 rounded bg-white/5 text-gray-300 text-xs cursor-pointer hover:bg-brand-500 hover:text-black transition">Fri<br/>16</div>
</div>
<button className="mt-2 w-full bg-white text-black text-sm font-semibold py-2 rounded hover:bg-gray-200 transition">Confirm Time</button>
</div>
<p className="text-[10px] text-brand-500 mt-4 text-center">Limited tour slots available this week.</p>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-bold text-white tracking-tighter text-lg">P2P</span>
<p className="text-gray-500 text-xs mt-2 max-w-xs">50+ Vetted Members. 5 Fortune 500 Companies.<br/>Cross-Industry Collaboration That Generates Revenue.</p>
</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-white transition" href="#">Community Guidelines</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Contact Support</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
