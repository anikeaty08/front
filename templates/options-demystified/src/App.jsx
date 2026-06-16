import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
},
dark: {
900: '#020617', // Slate 950
800: '#0f172a', // Slate 900
700: '#1e293b', // Slate 800
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}
// --- Improved Router Logic ---
function switchView(viewId) {
// 1. Defined all view IDs
const allViews = ['view-home', 'view-instructions', 'view-schwab'];
// 2. Hide all views
allViews.forEach(id => {
const el = document.getElementById(id);
if (el) el.classList.add('hidden');
});
// 3. Show target view
const targetId = 'view-' + viewId;
const targetEl = document.getElementById(targetId);
if (targetEl) {
targetEl.classList.remove('hidden');
// Re-trigger animations for a fresh feel
const animatedElements = targetEl.querySelectorAll('.animate-fade-in-up');
animatedElements.forEach(el => {
el.style.animation = 'none';
el.offsetHeight; /* trigger reflow */
el.style.animation = null;
});
}
// 4. Scroll to top (important for view switching)
// Unless it's an anchor link ON the home page
if (viewId !== 'how-it-works' && viewId !== 'waitlist') {
window.scrollTo(0, 0);
}
// 5. Close mobile menu if open
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
mobileMenu.classList.add('hidden');
menuIcon.innerHTML = '<path d="M3 12h18M3 6h18M3 18h18"></path>';
}
}
// Handle Browser Navigation (Back/Forward buttons) & Initial Load
function handleHashChange() {
const hash = window.location.hash.replace('#', '');
if (hash === 'instructions') {
switchView('instructions');
} else if (hash === 'schwab') {
switchView('schwab');
} else if (hash === 'how-it-works' || hash === 'waitlist') {
switchView('home');
// Allow a split second for the view to render before scrolling
setTimeout(() => {
const el = document.getElementById(hash);
if(el) el.scrollIntoView({behavior: 'smooth'});
}, 50);
} else {
switchView('home');
}
}
// Initialize
window.addEventListener('load', handleHashChange);
window.addEventListener('hashchange', handleHashChange);
// Mobile Menu Toggle
function toggleMobileMenu() {
const menu = document.getElementById('mobile-menu');
const icon = document.getElementById('menu-icon');
if (menu.classList.contains('hidden')) {
menu.classList.remove('hidden');
icon.innerHTML = '<path d="M18 6L6 18M6 6l12 12"></path>'; // X icon
} else {
menu.classList.add('hidden');
icon.innerHTML = '<path d="M3 12h18M3 6h18M3 18h18"></path>'; // Hamburger icon
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none">
<div className="absolute inset-0 bg-dark-900"></div>
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px]"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-50 relative" href="#home" onclick="switchView('home')">

<svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
<span className="font-bold text-lg tracking-tight">Options<span className="font-light text-slate-400">Demystified</span></span>
</a>

<div className="hidden md:flex space-x-8">
<a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#home" onclick="switchView('home')">Home</a>

<a className="hover:text-white transition-colors flex items-center text-sm font-medium text-slate-400" href="#instructions" onclick="switchView('instructions')">
                      Instructions <span className="bg-brand-500/10 text-brand-400 text-[10px] px-1.5 py-0.5 rounded ml-1">New</span>
</a>
<a className="hover:text-white transition-colors text-sm font-medium text-slate-400" href="#how-it-works">How It Works</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-all" href="#waitlist">
                        Log In
                    </a>
<a className="px-5 py-2 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-all shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]" href="#waitlist">
                        Join Waitlist
                    </a>
</div>

<div className="md:hidden flex items-center z-50 relative">
<button className="text-slate-400 hover:text-white focus:outline-none p-2" onclick="toggleMobileMenu()">
<svg className="w-6 h-6 transition-transform" fill="none" id="menu-icon" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 12h18M3 6h18M3 18h18"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="hidden absolute top-16 left-0 w-full h-screen bg-dark-900/95 backdrop-blur-xl border-t border-slate-800 md:hidden p-6 flex flex-col gap-6 animate-fade-in-up transition-all" id="mobile-menu">
<div className="flex flex-col space-y-4">
<a className="text-lg font-medium text-slate-200 hover:text-brand-400 py-2 border-b border-slate-800/50" href="#home" onclick="switchView('home');">Home</a>

<a className="text-lg font-medium text-slate-200 hover:text-brand-400 py-2 border-b border-slate-800/50 flex justify-between items-center" href="#instructions" onclick="switchView('instructions');">
                    Instructions <span className="bg-brand-500/20 text-brand-400 text-xs px-2 py-1 rounded">New</span>
</a>
<a className="text-lg font-medium text-slate-200 hover:text-brand-400 py-2 border-b border-slate-800/50" href="#how-it-works" onclick="switchView('home'); setTimeout(() =&gt; document.getElementById('how-it-works').scrollIntoView(), 100);">How It Works</a>
</div>
<div className="mt-4 flex flex-col gap-4">
<a className="w-full py-3 rounded-lg bg-slate-800 text-center text-white font-medium border border-slate-700" href="#waitlist" onclick="toggleMobileMenu()">Log In</a>
<a className="w-full py-3 rounded-lg bg-brand-600 text-center text-white font-bold shadow-lg" href="#waitlist" onclick="toggleMobileMenu()">Join Waitlist</a>
</div>
</div>
</nav>

<div className="" id="view-home">

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&amp;w=2560&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed opacity-10 -z-20"></div>
<div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 opacity-90 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="lg:w-1/2 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs text-brand-400 font-medium mb-6 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Waitlist Now Open
                    </div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up leading-[1.1]">
                        Learn Options Without <br className="hidden lg:block"/>
<span className="text-gradient">Wall Street Jargon</span>
</h1>
<p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up leading-relaxed">Simple lessons, real trades, and visual tools that finally make options click. Stop gambling and start trading with probability on your side.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
<a className="px-8 py-4 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group" href="#waitlist">
                            Start Free Mini-Course
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14m-7-7 7 7-7 7"></path></svg>
</a>
<button className="px-8 py-4 rounded-lg border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 transition-all font-semibold text-slate-300 flex items-center justify-center gap-2">
<svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            Watch 2-Minute Overview
                        </button>
</div>
</div>

<div className="lg:w-1/2 relative mt-16 lg:mt-0 animate-float w-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-500/10 to-transparent rounded-full blur-3xl -z-10"></div>

<div className="relative z-10 glass-card rounded-2xl p-1 border border-slate-700/50 shadow-2xl">
<div className="bg-dark-900/80 rounded-xl overflow-hidden relative">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="p-6 md:p-8 pb-12 relative">
<div className="flex flex-col sm:flex-row justify-between items-start mb-6 md:mb-8 gap-4">
<div className="">
<div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Payoff Diagram</div>
<div className="text-2xl font-bold text-white">Iron Condor</div>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono">PoP: 72%</div>
</div>

<div className="w-full relative">
<svg className="w-full h-auto drop-shadow-[0_0_10px_rgba(56,189,248,0.3)]" preserveaspectratio="xMidYMid meet" strokeWidth="2" viewbox="0 0 400 200">

<line stroke="#334155" stroke-dasharray="4 4" strokeWidth="1" x1="0" x2="400" y1="100" y2="100"></line>

<path className="payoff-line" d="M0,180 L100,100 L150,50 L250,50 L300,100 L400,180" fill="none" stroke="#38bdf8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>

<path className="" d="M100,100 L150,50 L250,50 L300,100 Z" fill="rgba(14, 165, 233, 0.1)" stroke="none"></path>
</svg>
</div>
<div className="flex justify-between text-[10px] sm:text-xs text-slate-500 font-mono mt-4">
<span>$420 Put</span>
<span className="">Max Profit: $350</span>
<span>$450 Call</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-dark-800/50 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Options Feel So <span className="text-red-400">Confusing</span></h2>
<p className="text-slate-400 max-w-2xl mx-auto">The industry teaches options like a math class. We teach it like a business.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-dark-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:languages" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">The Greek Alphabet</h3>
<p className="text-slate-400 text-sm leading-relaxed">Delta, Gamma, Theta, Vega. Most gurus start here. It's like trying to learn to drive by studying the thermodynamics of a combustion engine.</p>
</div>

<div className="bg-dark-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:sigma" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">Complex Formulas</h3>
<p className="text-slate-400 text-sm leading-relaxed">Black-Scholes models and probability equations. We strip away the calculus and focus on what matters: <span className="text-white">Risk vs. Reward.</span></p>
</div>

<div className="bg-dark-900 border border-slate-800 rounded-xl p-8 relative overflow-hidden group hover:border-red-500/30 transition-colors">
<div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:bomb" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white mb-3">The Gambling Trap</h3>
<p className="text-slate-400 text-sm leading-relaxed">Most beginners buy cheap options hoping for a lottery win. That's a losing game. We teach you how to <span className="text-white">sell</span> risk like an insurance company.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Options Really Work <span className="text-brand-400">(Visually)</span></h2>
<p className="text-slate-400 max-w-2xl mx-auto">Click a card to see the plain-English breakdown. No complex math required.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<button className="group text-left p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-brand-500 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1" onclick="document.getElementById('modal-cc').showModal()">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2v20M2 12h20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">Covered Calls</h3>
<p className="text-slate-400 text-sm mb-4">"Rent out your shares."</p>
<div className="flex items-center text-brand-400 text-xs font-semibold uppercase tracking-wider">
                            See how it works <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</div>
</button>

<button className="group text-left p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-brand-500 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1" onclick="document.getElementById('modal-calls').showModal()">
<div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">Calls</h3>
<p className="text-slate-400 text-sm mb-4">"I'm betting it goes up."</p>
<div className="flex items-center text-brand-400 text-xs font-semibold uppercase tracking-wider">
                            See how it works <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</div>
</button>

<button className="group text-left p-6 rounded-2xl bg-slate-900/50 border border-slate-700 hover:border-brand-500 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1" onclick="document.getElementById('modal-puts').showModal()">
<div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>
</div>
<h3 className="text-xl font-bold text-white mb-2">Puts</h3>
<p className="text-slate-400 text-sm mb-4">"Insurance if it drops."</p>
<div className="flex items-center text-brand-400 text-xs font-semibold uppercase tracking-wider">
                            See how it works <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
</div>
</button>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-900/90 to-dark-900 border-t border-slate-800" id="waitlist">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Stop Guessing. <br/><span className="text-brand-400">Start Building Wealth.</span></h2>
<p className="text-slate-400 text-lg mb-10">Join the waitlist for the only options course that respects your intelligence and your risk tolerance.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto bg-slate-800 p-2 rounded-2xl border border-slate-700 shadow-xl">
<input className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:ring-0 px-4 py-3 outline-none" placeholder="Enter your best email..." required="" type="email"/>
<button className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold transition-all shadow-lg whitespace-nowrap" type="button">
                        Join Waitlist
                    </button>
</form>
</div>
</section>
</div>

<div className="hidden min-h-screen pt-32 pb-24" id="view-instructions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h1 className="text-3xl font-bold text-white mb-4 animate-fade-in-up">Platform Instructions</h1>
<p className="text-slate-400 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.1s'}}>Step-by-step visual guides for major brokerages. Click a card to start the tutorial.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>

<a className="block group cursor-pointer bg-slate-900/50 hover:bg-slate-800 border border-slate-700 hover:border-brand-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1" href="#schwab" onclick="switchView('schwab')">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded bg-blue-500/10 text-blue-400 flex items-center justify-center">
<iconify-icon icon="lucide:monitor" width="24"></iconify-icon>
</div>
<span className="px-2 py-1 rounded bg-slate-800 text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-slate-700">Beginner</span>
</div>
<h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">How to Place an Options Trade on Charles Schwab</h3>
<p className="text-sm text-slate-400 mb-4">A complete walkthrough of the desktop interface. From login to confirmation.</p>
<div className="flex items-center text-xs font-semibold text-brand-400">
                        Start Tutorial <iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</div>
</a>


<div className="opacity-50 pointer-events-none bg-slate-900/30 border border-slate-800 border-dashed rounded-xl p-6">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded bg-slate-800 text-slate-600 flex items-center justify-center">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-bold text-slate-500 mb-2">Robinhood Mobile</h3>
<p className="text-sm text-slate-600 mb-4">Coming soon.</p>
</div>
</div>
</div>
</div>

<div className="hidden min-h-screen" id="view-schwab">

<div className="sticky top-16 z-40 bg-dark-900/95 backdrop-blur border-b border-slate-800 transition-all">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center h-12 overflow-x-auto gap-6 text-xs font-medium no-scrollbar">
<a className="text-white whitespace-nowrap" href="#schwab-start">Before You Start</a>
<a className="text-slate-400 hover:text-white whitespace-nowrap transition-colors" href="#schwab-steps">Step-by-Step</a>
<a className="text-slate-400 hover:text-white whitespace-nowrap transition-colors" href="#schwab-screenshots">Screenshots</a>
<a className="text-slate-400 hover:text-white whitespace-nowrap transition-colors" href="#schwab-risk">Next Steps</a>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

<div className="mb-16 border-b border-slate-800 pb-12">
<a className="inline-flex items-center gap-2 mb-4 text-brand-400 text-sm font-medium cursor-pointer hover:text-brand-300" href="#instructions" onclick="switchView('instructions')">
<iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Back to Instructions
                </a>
<h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">How to Place an Options Trade on Charles Schwab <span className="text-slate-500">(Step-by-Step)</span></h1>
<p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
                    A plain-English, screenshot-driven walkthrough for your first options order on Schwab.com. This guide helps you navigate the interface without the confusion.
                </p>
</div>

<section className="mb-20 scroll-mt-32" id="schwab-start">
<h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center text-sm">1</span>
                    Before You Start
                </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<iconify-icon className="text-slate-400 mb-4" icon="lucide:user-check" width="32"></iconify-icon>
<h3 className="font-bold text-white mb-2">Schwab Account</h3>
<p className="text-sm text-slate-400">You must have a funded brokerage account. This guide covers the desktop website.</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<iconify-icon className="text-slate-400 mb-4" icon="lucide:shield-check" width="32"></iconify-icon>
<h3 className="font-bold text-white mb-2">Options Approval</h3>
<p className="text-sm text-slate-400">Ensure you have "Level 0" or "Level 1" approval (for buying calls/puts or covered calls).</p>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<iconify-icon className="text-slate-400 mb-4" icon="lucide:book-open" width="32"></iconify-icon>
<h3 className="font-bold text-white mb-2">Know Your Trade</h3>
<p className="text-sm text-slate-400">Don't guess. Have your ticker, strike price, and expiration date ready.</p>
</div>
</div>
</section>

<section className="mb-20 scroll-mt-32" id="schwab-steps">
<h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center text-sm">2</span>
                    Step-by-Step on Schwab.com
                </h2>
<div className="space-y-12">

<div className="flex flex-col lg:flex-row gap-8 pb-12 border-b border-slate-800/50">
<div className="lg:w-1/3">
<h3 className="text-xl font-bold text-white mb-3">1. Open the Stock Page</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">Log in to Schwab. In the top search bar, type the ticker symbol (e.g., AAPL for Apple) and click the result to go to the Quote page.</p>
<div className="bg-brand-900/20 p-3 rounded border border-brand-500/20 text-xs text-brand-300">
<span className="font-bold">Pro Tip:</span> Make sure you are on the "Research" or "Trade" tab.
                            </div>
</div>
<div className="lg:w-2/3">
<div className="aspect-video bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center relative overflow-hidden group">
<div className="text-center">
<iconify-icon className="text-slate-600 mb-2 mx-auto" icon="lucide:image" width="48"></iconify-icon>
<span className="text-slate-500 font-mono text-sm">Screenshot: Search Bar &amp; Quote</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8 pb-12 border-b border-slate-800/50">
<div className="lg:w-1/3">
<h3 className="text-xl font-bold text-white mb-3">2. Open the Options Chain</h3>
<p className="text-slate-400 text-sm mb-4 leading-relaxed">Scroll down slightly or look for the sub-menu links. Click on <strong>Option Chain</strong> or <strong>Trade Options</strong>. This opens the list of all available contracts.</p>
</div>
<div className="lg:w-2/3">
<div className="aspect-video bg-slate-800/50 rounded-lg border-2 border-dashed border-slate-700 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-slate-600 mb-2 mx-auto" icon="lucide:image" width="48"></iconify-icon>
<span className="text-slate-500 font-mono text-sm">Screenshot: Clicking 'Option Chain'</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-32" id="schwab-risk">
<div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
<h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">
<iconify-icon icon="lucide:alert-octagon"></iconify-icon> Important Risk Disclosure
                    </h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Options carry a high level of risk and are not suitable for all investors. Certain requirements must be met to trade options through Schwab. Investing involves risks, including loss of principal, hedging and leverage risk, and the risk that an investment may not perform as anticipated.
                    </p>
</div>
</section>
</div>
</div>


<dialog className="bg-transparent p-0 w-full max-w-4xl backdrop:bg-black/80" id="modal-cc">
<div className="bg-dark-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
<div className="sticky top-0 z-10 flex justify-between items-center p-6 bg-dark-900/95 border-b border-slate-800 backdrop-blur">
<h3 className="text-2xl font-bold text-white flex items-center gap-3">
<span className="w-8 h-8 rounded bg-yellow-500/10 text-yellow-500 flex items-center justify-center"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 2v20M2 12h20"></path></svg></span>
                    The "Landlord" Strategy (Covered Calls)
                </h3>
<form method="dialog">
<button className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg>
</button>
</form>
</div>
<div className="p-8">
<div className="flex flex-col md:flex-row gap-8">
<div className="md:w-1/2 space-y-6">
<p className="text-slate-300 text-lg leading-relaxed">Think of your 100 shares of stock like a house you own. You can live in it (hold it) and hope the value goes up, OR you can rent it out to collect income while you wait.</p>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Real World Example</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex justify-between border-b border-slate-700/50 pb-2">
<span>You own:</span>
<span className="text-white">100 shares of AAPL ($200)</span>
</li>
<li className="flex justify-between border-b border-slate-700/50 pb-2">
<span>You sell:</span>
<span className="text-white">1 Call Option (Strike $210)</span>
</li>
<li className="flex justify-between pt-1">
<span>You collect:</span>
<span className="text-green-400 font-bold">$150 instant cash</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</dialog>

<dialog className="bg-transparent p-0 w-full max-w-4xl backdrop:bg-black/80" id="modal-calls">
<div className="bg-dark-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-8">
<div className="flex justify-between mb-6">
<h3 className="text-2xl font-bold text-white">Understanding Calls</h3>
<form method="dialog"><button className="text-slate-400 hover:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg></button></form>
</div>
<p className="text-slate-300 text-lg mb-4">A "Call" is just a down payment on a house. You control the asset without paying the full price yet. If value goes up, your small down payment becomes worth much more.</p>
</div>
</dialog>

<dialog className="bg-transparent p-0 w-full max-w-4xl backdrop:bg-black/80" id="modal-puts">
<div className="bg-dark-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden p-8">
<div className="flex justify-between mb-6">
<h3 className="text-2xl font-bold text-white">Understanding Puts</h3>
<form method="dialog"><button className="text-slate-400 hover:text-white"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"></path></svg></button></form>
</div>
<p className="text-slate-300 text-lg mb-4">A "Put" is simply car insurance. You pay a small premium to protect your car (stock). If you crash (stock drops), the insurance pays out.</p>
</div>
</dialog>

<footer className="text-sm bg-gradient-to-br from-white/10 to-white/0 opacity-80 border-slate-900 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-slate-500">
<span className="font-bold text-slate-300">OptionsDemystified</span> © 2025
            </div>
</div>
</footer>

    </>
  );
}
