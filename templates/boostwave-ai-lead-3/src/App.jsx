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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
925: '#101012',
950: '#0A0A0A',
}
},
letterSpacing: {
tight: '-0.02em',
tighter: '-0.04em',
},
animation: {
'blob': 'blob 10s infinite',
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'grid-flow': 'gridFlow 20s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
gridFlow: {
'0%': { backgroundPosition: '0 0' },
'100%': { backgroundPosition: '40px 40px' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(100%)' }
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Observer
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));

            // Star Generation Logic
            const starContainer = document.getElementById('stars-container');
            const starCount = 50;

            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                const xy = Math.random() * 100;
                const duration = Math.random() * 3 + 2; 
                const size = Math.random() * 2 + 1; 
                
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.setProperty('--duration', `${duration}s`);
                star.style.setProperty('--opacity', Math.random() * 0.7 + 0.3);
                
                starContainer.appendChild(star);
            }

            // Mouse move effect for features
            const cards = document.querySelectorAll('.feature-card');
            document.addEventListener('mousemove', e => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect(),
                          x = e.clientX - rect.left,
                          y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                };
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
      

<div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
<div className="absolute inset-0 grid-bg animate-grid-flow opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]"></div>
<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/10 blur-[120px] rounded-full animate-blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full animate-blob animation-delay-2000"></div>
<div className="absolute inset-0" id="stars-container"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<a className="group relative flex items-center justify-center" href="#">
<div className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="relative z-10" fill="none" height="36" viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<rect fill="#18181B" height="35" rx="8.5" width="35" x="0.5" y="0.5"></rect>
<rect height="35" rx="8.5" stroke="url(#paint0_linear_logo)" stroke-opacity="0.2" width="35" x="0.5" y="0.5"></rect>
<path d="M10 18C10 18 13.5 24.5 16 24.5C18.5 24.5 20 11.5 22.5 11.5C25 11.5 26 18 26 18" stroke="url(#paint1_linear_logo)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_logo" x1="0" x2="36" y1="0" y2="36">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="white" stop-opacity="0"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_logo" x1="10" x2="26" y1="18" y2="18">
<stop stop-color="#818CF8"></stop>
<stop offset="1" stop-color="#22D3EE"></stop>
</lineargradient>
</defs>
</svg>
</a>
<span className="font-semibold tracking-tight text-white text-lg">Boostwave<span className="text-zinc-500 text-base">.ai</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#problem">The Crisis</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-zinc-200 transition-colors" href="#booking">
                Book Strategy Call
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="opacity-0 animate-fade-up flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.1)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">The Speed to Lead Solution</span>
</div>
</div>
<h1 className="opacity-0 animate-fade-up [animation-delay:200ms] text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.95] mb-8 drop-shadow-2xl">
                Turn Cold Leads Into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-200 to-cyan-300">Closed Deals</span> While You Sleep
            </h1>
<p className="opacity-0 animate-fade-up [animation-delay:400ms] text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                The average business loses 70% of revenue potential due to slow response times. We build a <span className="text-white font-medium">24/7 digital sales team</span> that calls, qualifies, and books leads in under 60 seconds.
            </p>
<div className="opacity-0 animate-fade-up [animation-delay:600ms] flex flex-col md:flex-row items-center justify-center gap-4">
<a className="group w-full md:w-auto px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] relative overflow-hidden" href="#booking">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                    Start Your 5-Minute Advantage
                    <iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:bolt-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-zinc-950" id="problem">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">The 5-Minute Window <br/><span className="text-zinc-500">(And Why You're Missing It)</span></h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                        Harvard Business Review studied 2.1 million leads. The data is brutal. Every hour you wait, your lead becomes 10x less valuable. Even when you DO call fast, most leads need 8-12 contact attempts before they answer.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
<div className="p-2 bg-red-500/10 rounded-lg text-red-400"><iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon></div>
<div>
<div className="text-sm text-zinc-500">Average Business Response</div>
<div className="text-white font-mono">4-6 Hours</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
<div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><iconify-icon icon="solar:bolt-circle-bold" width="24"></iconify-icon></div>
<div>
<div className="text-sm text-emerald-200/70">Boostwave Response</div>
<div className="text-white font-mono">Under 60 Seconds</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="relative bg-zinc-900 rounded-2xl border border-white/10 p-8 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px]"></div>
<h3 className="text-lg font-medium text-white mb-6">Impact of Response Time on Contact Rate</h3>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-indigo-300 font-medium">Under 5 Minutes</span>
<span className="text-white font-mono">80% Contact Rate</span>
</div>
<div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 w-[80%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400">10 Minutes</span>
<span className="text-zinc-400 font-mono">40% Contact Rate</span>
</div>
<div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[40%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-400">30 Minutes</span>
<span className="text-zinc-400 font-mono">18% Contact Rate</span>
</div>
<div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-700 w-[18%]"></div>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-500">24 Hours</span>
<span className="text-zinc-500 font-mono">3% Contact Rate</span>
</div>
<div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-800 w-[3%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-xs text-zinc-500 text-center uppercase tracking-widest">Harvard Business Review Study (2.1M Leads)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-zinc-925" id="how-it-works">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[100px] rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">How It Works</h2>
<p className="text-lg text-zinc-400">
                    We don't just "add AI." We build a 24/7 digital sales team that follows a proven 4-step framework.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal group feature-card relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
<div className="absolute -top-3 -right-3 w-12 h-12 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center text-lg font-mono font-bold text-white z-20">01</div>
<div className="h-12 w-12 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-mono text-indigo-400 mb-2 uppercase tracking-wide">0-60 Seconds</div>
<h3 className="text-xl font-medium text-white mb-3">Instant Strike</h3>
<p className="text-sm text-zinc-400 mb-4">The moment a lead hits your system, our AI acts.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-read-linear"></iconify-icon> Outbound call &lt; 60s</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-read-linear"></iconify-icon> Human-sounding Voice AI</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-indigo-500" icon="solar:check-read-linear"></iconify-icon> Instant SMS/Voicemail drop</li>
</ul>
</div>

<div className="reveal delay-100 group feature-card relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-emerald-500/30 transition-all duration-300">
<div className="absolute -top-3 -right-3 w-12 h-12 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center text-lg font-mono font-bold text-white z-20">02</div>
<div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:filter-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-mono text-emerald-400 mb-2 uppercase tracking-wide">60s - 3 Minutes</div>
<h3 className="text-xl font-medium text-white mb-3">Intelligent Qualification</h3>
<p className="text-sm text-zinc-400 mb-4">We filter the tire-kickers so you don't have to.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-emerald-500" icon="solar:check-read-linear"></iconify-icon> Verify ownership/decision maker</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-emerald-500" icon="solar:check-read-linear"></iconify-icon> Confirm project timeline</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-emerald-500" icon="solar:check-read-linear"></iconify-icon> Only sales-ready leads pass</li>
</ul>
</div>

<div className="reveal delay-200 group feature-card relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-orange-500/30 transition-all duration-300">
<div className="absolute -top-3 -right-3 w-12 h-12 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center text-lg font-mono font-bold text-white z-20">03</div>
<div className="h-12 w-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-mono text-orange-400 mb-2 uppercase tracking-wide">Days 1-14</div>
<h3 className="text-xl font-medium text-white mb-3">Relentless Follow-Up</h3>
<p className="text-sm text-zinc-400 mb-4">Where humans fail, AI dominates.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-orange-500" icon="solar:check-read-linear"></iconify-icon> 12+ contact attempts</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-orange-500" icon="solar:check-read-linear"></iconify-icon> Call, SMS &amp; Email drip</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-orange-500" icon="solar:check-read-linear"></iconify-icon> Re-engagement campaigns</li>
</ul>
</div>

<div className="reveal delay-300 group feature-card relative bg-zinc-900/40 rounded-3xl p-6 border border-white/5 hover:border-blue-500/30 transition-all duration-300">
<div className="absolute -top-3 -right-3 w-12 h-12 bg-zinc-950 rounded-full border border-white/10 flex items-center justify-center text-lg font-mono font-bold text-white z-20">04</div>
<div className="h-12 w-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<div className="text-xs font-mono text-blue-400 mb-2 uppercase tracking-wide">Closing Time</div>
<h3 className="text-xl font-medium text-white mb-3">Human Handoff</h3>
<p className="text-sm text-zinc-400 mb-4">You show up to appointments ready to buy.</p>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-blue-500" icon="solar:check-read-linear"></iconify-icon> Auto-sync to your calendar</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-blue-500" icon="solar:check-read-linear"></iconify-icon> Full transcript &amp; notes</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-blue-500" icon="solar:check-read-linear"></iconify-icon> Pre-call brief for your team</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-white/5" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl font-semibold text-white tracking-tighter mb-16 border-b border-white/5 pb-8">Real Results: The Boostwave Difference</h2>
<div className="space-y-12">

<div className="reveal group relative bg-zinc-900/30 rounded-3xl border border-white/5 p-8 lg:p-12 hover:border-white/10 transition-colors">
<div className="flex flex-col lg:flex-row gap-12">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700">Roofing</span>
<span className="text-zinc-500 text-sm">Premier Roofing Co. - Houston, TX</span>
</div>
<h3 className="text-3xl font-medium text-white mb-6">From 2-3 Deals to 14 Closed Deals Per Month</h3>
<div className="space-y-4 mb-8">
<div className="flex items-baseline justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500">Response Time</span>
<span className="text-white font-mono">4hrs → <span className="text-emerald-400">47 secs</span></span>
</div>
<div className="flex items-baseline justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500">Contact Rate</span>
<span className="text-white font-mono">28% → <span className="text-emerald-400">76%</span></span>
</div>
<div className="flex items-baseline justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500">Cost Per Acquisition</span>
<span className="text-white font-mono">$4,200 → <span className="text-emerald-400">$980</span></span>
</div>
</div>
</div>
<div className="lg:w-1/3 bg-zinc-950 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5"></div>
<div className="relative z-10">
<div className="text-5xl font-bold text-white tracking-tight mb-2">467%</div>
<div className="text-xs text-indigo-300 font-mono tracking-widest uppercase mb-4">Increase in Closed Business</div>
<div className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-200 rounded-lg text-sm font-medium">+$180,000 Revenue (Q1)</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 group relative bg-zinc-900/30 rounded-3xl border border-white/5 p-8 lg:p-12 hover:border-white/10 transition-colors">
<div className="flex flex-col lg:flex-row gap-12">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700">Solar</span>
<span className="text-zinc-500 text-sm">SunPower Solutions - California</span>
</div>
<h3 className="text-3xl font-medium text-white mb-6">Reviving "Dead" Leads into $392k Revenue</h3>
<p className="text-zinc-400 mb-6">
                                Had 3,200 dormant leads from the past 18 months. Sales team refused to call them. We launched an AI Reactivation Campaign.
                            </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
<div className="text-2xl font-semibold text-white">3,200</div>
<div className="text-xs text-zinc-500">Cold Leads Called</div>
</div>
<div className="bg-zinc-950 p-4 rounded-xl border border-white/5">
<div className="text-2xl font-semibold text-white">89</div>
<div className="text-xs text-zinc-500">Appointments Booked</div>
</div>
</div>
</div>
<div className="lg:w-1/3 bg-zinc-950 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/5"></div>
<div className="relative z-10">
<div className="text-5xl font-bold text-white tracking-tight mb-2">8,066%</div>
<div className="text-xs text-orange-300 font-mono tracking-widest uppercase mb-4">ROI on Reactivation</div>
<div className="inline-block px-4 py-2 bg-orange-500/20 text-orange-200 rounded-lg text-sm font-medium">$392,000 Revenue Generated</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 group relative bg-zinc-900/30 rounded-3xl border border-white/5 p-8 lg:p-12 hover:border-white/10 transition-colors">
<div className="flex flex-col lg:flex-row gap-12">
<div className="flex-1">
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full border border-zinc-700">MedSpa</span>
<span className="text-zinc-500 text-sm">Radiant MedSpa - Scottsdale, AZ</span>
</div>
<h3 className="text-3xl font-medium text-white mb-6">Solving the "Ghosting" Problem</h3>
<p className="text-zinc-400 mb-6">
                                40% of leads went to voicemail. Show-up rate for consultations was only 35%. Boostwave AI took over scheduling and education.
                            </p>
<div className="flex items-baseline justify-between border-b border-white/5 pb-2">
<span className="text-zinc-500">Show-Up Rate</span>
<span className="text-white font-mono">35% → <span className="text-emerald-400">78%</span></span>
</div>
</div>
<div className="lg:w-1/3 bg-zinc-950 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-pink-500/5"></div>
<div className="relative z-10">
<div className="text-4xl font-bold text-white tracking-tight mb-2">$216k</div>
<div className="text-xs text-pink-300 font-mono tracking-widest uppercase mb-4">Monthly Revenue (Up from $87k)</div>
<div className="inline-block px-4 py-2 bg-pink-500/20 text-pink-200 rounded-lg text-sm font-medium">Booked 6 Weeks Out</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative backdrop-blur-md" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl md:text-5xl font-semibold text-white tracking-tighter text-center mb-16">Investment &amp; Packages</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal flex flex-col p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-semibold text-white mb-4">$2,497<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<p className="text-sm text-zinc-500 mb-8">Perfect for single locations with 50-150 leads/month.</p>
<ul className="space-y-4 text-sm text-zinc-400 mb-8 flex-1">
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Up to 500 AI calls/mo</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic CRM Integration</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Standard Qualification Script</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> SMS &amp; Email Automation</li>
</ul>
<a className="block w-full py-3 text-center rounded-lg border border-zinc-700 text-white hover:bg-zinc-800 text-sm transition-colors" href="#booking">Get Started</a>
</div>

<div className="reveal delay-100 flex flex-col p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 relative hover:border-indigo-500/50 transition-colors">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<div className="text-3xl font-semibold text-white mb-4">$4,997<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<p className="text-sm text-zinc-400 mb-8">Growing businesses with 150-400 leads/month.</p>
<ul className="space-y-4 text-sm text-zinc-300 mb-8 flex-1">
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-bold"></iconify-icon> Up to 1,500 AI calls/mo</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-bold"></iconify-icon> Advanced Multi-touch (6+)</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-bold"></iconify-icon> Custom Script Development</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-bold"></iconify-icon> A/B Testing &amp; Optimization</li>
<li className="flex gap-3"><iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-bold"></iconify-icon> Dedicated Success Manager</li>
</ul>
<a className="block w-full py-3 text-center rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40" href="#booking">Scale Now</a>
</div>

<div className="reveal delay-200 flex flex-col p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<div className="text-3xl font-semibold text-white mb-4">$9,997<span className="text-sm font-normal text-zinc-500">/mo</span></div>
<p className="text-sm text-zinc-500 mb-8">High volume &amp; multi-location operations.</p>
<ul className="space-y-4 text-sm text-zinc-400 mb-8 flex-1">
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI calls</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> Multiple AI Agents</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> White-glove Onboarding</li>
<li className="flex gap-3"><iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon> API Integrations</li>
</ul>
<a className="block w-full py-3 text-center rounded-lg border border-zinc-700 text-white hover:bg-zinc-800 text-sm transition-colors" href="#booking">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-925 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="reveal text-3xl font-semibold text-white tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
<div className="reveal space-y-4">
<details className="group bg-zinc-900/50 rounded-xl border border-white/5 open:border-indigo-500/30 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        Does the AI actually sound human?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-zinc-400 px-6 pb-6 text-sm leading-relaxed">
                        Yes. Our conversational AI uses advanced natural language processing and voice synthesis. In blind tests, 87% of people can't tell they're speaking with AI. We also customize tone and personality to match your brand.
                    </div>
</details>
<details className="group bg-zinc-900/50 rounded-xl border border-white/5 open:border-indigo-500/30 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        What if a lead asks a question the AI can't answer?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-zinc-400 px-6 pb-6 text-sm leading-relaxed">
                        The AI is programmed to handle 90% of common questions. For complex inquiries, it says: "That's a great question—let me connect you with one of our specialists who can give you exact details. What's the best time for them to call you?"
                    </div>
</details>
<details className="group bg-zinc-900/50 rounded-xl border border-white/5 open:border-indigo-500/30 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        How long does setup take?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-zinc-400 px-6 pb-6 text-sm leading-relaxed">
                        Most clients are fully operational in 7-14 days. We handle all technical setup while you focus on running your business.
                    </div>
</details>
<details className="group bg-zinc-900/50 rounded-xl border border-white/5 open:border-indigo-500/30 transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none text-white font-medium">
                        What industries does this work for?
                        <span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-zinc-400 px-6 pb-6 text-sm leading-relaxed">
                        We specialize in home services (roofing, HVAC, solar, remodeling), medical/dental practices, legal services, real estate, and B2B professional services—anywhere the initial conversation can qualify or disqualify a lead.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-zinc-950 border-t border-white/5" id="booking">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="mb-8 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 backdrop-blur-sm inline-block">
<h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-linear"></iconify-icon> 90-Day Performance Guarantee
                        </h3>
<p className="text-zinc-400 text-sm">
                            If you don't see at least a 3X improvement in lead contact rates and 2X increase in qualified appointments, we'll refund your setup fee and work for free until you do.
                        </p>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                        Stop Losing Leads. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Book Your Strategy Session.</span>
</h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                        In this 30-minute demo, we will:
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400"><iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon></div>
                            Calculate your exact "missed revenue" metric
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400"><iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon></div>
                            Live demo of the AI calling a lead in real-time
                        </li>
<li className="flex items-center gap-3 text-zinc-300">
<div className="w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-indigo-400"><iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon></div>
                            Build a custom ROI projection for your business
                        </li>
</ul>
<div className="flex items-center gap-4 text-sm text-zinc-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-950"></div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-950"></div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border-2 border-zinc-950"></div>
</div>
<p>Join 150+ innovative business owners</p>
</div>
</div>

<div className="reveal delay-200 relative">
<div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden group hover:border-indigo-500/30 transition-colors">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-zinc-800 rounded-2xl flex items-center justify-center mb-8 shadow-lg border border-white/5">
<iconify-icon className="text-3xl text-indigo-400" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Schedule Your Strategy Call</h3>
<p className="text-zinc-400 text-sm mb-10 max-w-sm leading-relaxed">
                                Ready to scale? Choose a time that works for you. We'll send a calendar invite and a pre-call briefing.
                            </p>

<a className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] shadow-lg shadow-white/5" href="https://calendly.com/ichoudharyudit/30min" target="_blank">
                                Select a Time
                                <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 30 Minute Session</span>
<span className="w-1 h-1 bg-zinc-800 rounded-full mx-2"></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:videocamera-linear"></iconify-icon> Google Meet / Zoom</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 bg-zinc-950 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center relative">
<svg fill="none" height="32" viewbox="0 0 36 36" width="32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#18181B" height="35" rx="8.5" width="35" x="0.5" y="0.5"></rect>
<rect height="35" rx="8.5" stroke="white" stroke-opacity="0.1" width="35" x="0.5" y="0.5"></rect>
<path d="M10 18C10 18 13.5 24.5 16 24.5C18.5 24.5 20 11.5 22.5 11.5C25 11.5 26 18 26 18" stroke="url(#paint1_linear_logo_footer)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_logo_footer" x1="10" x2="26" y1="18" y2="18">
<stop stop-color="#818CF8"></stop>
<stop offset="1" stop-color="#22D3EE"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div>
<span className="block font-semibold tracking-tight text-white text-sm">Boostwave.ai</span>
<a className="text-xs text-zinc-600 hover:text-indigo-400 transition-colors" href="mailto:udit@boostwaveai.com">udit@boostwaveai.com</a>
</div>
</div>
<div className="text-sm text-zinc-600">
                © 2024 Boostwave AI. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors hover:scale-110 duration-200" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors hover:scale-110 duration-200" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors hover:scale-110 duration-200" href="#"><iconify-icon icon="solar:brand-x-linear" width="18"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
