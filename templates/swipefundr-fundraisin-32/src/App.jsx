import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Intersection Observer for Reveal Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Toggle Switch Logic (Visual only)
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.parentNode.addEventListener('click', () => {
                toggle.classList.toggle('active');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
<div className="absolute inset-0 bg-white"></div>
<div className="absolute inset-0 bg-grid-animate"></div>
<div className="orb w-[500px] h-[500px] bg-indigo-100/50 top-[-100px] left-[-100px]"></div>
<div className="orb w-[400px] h-[400px] bg-rose-100/50 bottom-[0] right-[-100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white shadow-lg shadow-zinc-200">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tighter text-zinc-900">SwipeFundr</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Sign In</button>
<button className="text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition-colors px-4 py-2 rounded-full shadow-lg shadow-zinc-200">
                    Get App
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden flex flex-col items-center justify-center">
<div className="max-w-4xl mx-auto px-6 text-center z-10">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 mb-8 hover:bg-white hover:shadow-sm transition-all cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Live Beta: 84 deals closed this week</span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.05]">
                Fundraising shouldn't<br/>
                feel like <span className="shimmer-text">begging.</span>
</h1>
<p className="reveal delay-200 text-lg text-zinc-500 max-w-lg mx-auto mb-10 leading-relaxed font-light">
                Stop chasing warm intros. Start swiping on verified investors who are actually deploying capital right now.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl shadow-zinc-200">
                    Create Founder Profile
                </button>
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-50 transition-all">
                    I'm an Investor
                </button>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-100/50 reveal">

<div className="bg-red-50/50 p-8 md:p-16 border-b md:border-b-0 md:border-r border-red-100 relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-red-200"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="frown"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900">The Old Way</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x"></i>
<div>
<p className="text-sm font-medium text-zinc-900">Cold DMs ignored</p>
<p className="text-xs text-zinc-500">97% never get a reply</p>
</div>
</li>
<li className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x"></i>
<div>
<p className="text-sm font-medium text-zinc-900">Pitch deck limbo</p>
<p className="text-xs text-zinc-500">Dying in spam folders forever</p>
</div>
</li>
<li className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x"></i>
<div>
<p className="text-sm font-medium text-zinc-900">Slow intros</p>
<p className="text-xs text-zinc-500">8 weeks for one coffee chat</p>
</div>
</li>
<li className="flex items-start gap-3 opacity-70 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x"></i>
<div className="text-sm font-medium text-zinc-900">Ghosted after 5 follow-ups</div>
</li>
</ul>
</div>
</div>

<div className="bg-emerald-50/50 p-8 md:p-16 relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-400"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-zinc-900">SwipeFundr</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Instant Match &amp; Chat</p>
<p className="text-xs text-zinc-500">One swipe to open a direct line</p>
</div>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-75">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Traction First</p>
<p className="text-xs text-zinc-500">Metrics visible before messaging</p>
</div>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-100">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">84% Reply Rate</p>
<p className="text-xs text-zinc-500">Within 24 hours (2024 Data)</p>
</div>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform delay-150">
<div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<div className="text-sm font-medium text-zinc-900">Deals move at Twitter speed</div>
</li>
</ul>
</div>
</div>
</div>
<div className="text-center mt-8 reveal">
<button className="text-sm font-semibold text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-emerald-600 hover:border-emerald-600 transition-all">
                Stop begging. Start swiping.
            </button>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4 reveal">One Card. 5 Seconds. Total Clarity.</h2>
<p className="text-zinc-500 max-w-xl mx-auto mb-16 reveal">Your entire startup, distilled into a swipeable card that investors actually read. No 40-page decks.</p>
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="relative w-[320px] h-[650px] bg-zinc-900 rounded-[3rem] border-8 border-zinc-800 shadow-2xl mx-auto flex-shrink-0 reveal">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

<div className="absolute inset-1 bg-zinc-100 rounded-[2.5rem] overflow-hidden">

<div className="iphone-screen w-full h-[300%]">

<div className="h-1/3 w-full p-4 flex flex-col justify-center bg-white border-b border-zinc-100">
<div className="w-12 h-12 bg-blue-600 rounded-xl mb-4 flex items-center justify-center text-white"><i className="w-6 h-6" data-lucide="cloud"></i></div>
<h3 className="text-2xl font-bold text-zinc-900">SkyStream</h3>
<p className="text-zinc-500 text-sm mb-4">Decentralized cloud storage for AI.</p>
<div className="grid grid-cols-2 gap-2">
<div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
<div className="text-[10px] text-zinc-400 uppercase">MRR</div>
<div className="text-sm font-bold text-zinc-900">$42k</div>
</div>
<div className="bg-zinc-50 p-2 rounded-lg border border-zinc-100">
<div className="text-[10px] text-zinc-400 uppercase">Growth</div>
<div className="text-sm font-bold text-green-600">+20% MoM</div>
</div>
</div>
</div>

<div className="h-1/3 w-full p-4 flex flex-col justify-center bg-white border-b border-zinc-100">
<div className="w-12 h-12 bg-purple-600 rounded-xl mb-4 flex items-center justify-center text-white"><i className="w-6 h-6" data-lucide="bot"></i></div>
<h3 className="text-2xl font-bold text-zinc-900">AutoCode</h3>
<p className="text-zinc-500 text-sm mb-4">Self-healing codebase agent.</p>
<div className="flex items-center gap-2 mb-4">
<img alt="" className="w-6 h-6 rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span className="text-xs font-medium text-blue-500">@felix_codes</span>
</div>
<div className="p-3 bg-zinc-900 rounded-xl text-white text-xs">
                                    "Just shipped v2. 500 stars on Github in 4 hours."
                                </div>
</div>

<div className="h-1/3 w-full p-4 flex flex-col justify-center bg-white">
<div className="w-12 h-12 bg-orange-500 rounded-xl mb-4 flex items-center justify-center text-white"><i className="w-6 h-6" data-lucide="shopping-bag"></i></div>
<h3 className="text-2xl font-bold text-zinc-900">CartFast</h3>
<p className="text-zinc-500 text-sm mb-4">1-click checkout for newsletters.</p>
<div className="flex gap-2 mb-4">
<span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[10px] font-bold">Seed</span>
<span className="px-2 py-1 bg-zinc-100 text-zinc-600 rounded text-[10px] font-bold">Fintech</span>
</div>
<div className="w-full h-12 bg-zinc-50 rounded border border-zinc-100 flex items-end pb-1 px-1 gap-1">

<div className="w-1/5 h-1/3 bg-orange-200 rounded-sm"></div>
<div className="w-1/5 h-1/2 bg-orange-300 rounded-sm"></div>
<div className="w-1/5 h-2/3 bg-orange-400 rounded-sm"></div>
<div className="w-1/5 h-3/4 bg-orange-500 rounded-sm"></div>
<div className="w-1/5 h-full bg-orange-600 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 space-y-4 text-left reveal delay-100">
<div className="p-4 bg-white border border-zinc-200 rounded-2xl hover-card flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="layout-template"></i>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">One-liner + Logo</div>
<div className="text-xs text-zinc-500">First impressions matter.</div>
</div>
</div>
<div className="p-4 bg-white border border-zinc-200 rounded-2xl hover-card flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Live MRR / Metrics</div>
<div className="text-xs text-zinc-500">Auto-updated via Stripe API.</div>
</div>
</div>
<div className="p-4 bg-white border border-zinc-200 rounded-2xl hover-card flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="twitter"></i>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Founder Social Proof</div>
<div className="text-xs text-zinc-500">LinkedIn + Latest 3 Tweets embedded.</div>
</div>
</div>
<div className="p-4 bg-white border border-zinc-200 rounded-2xl hover-card flex items-center gap-4 group cursor-default">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="target"></i>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">The "Ask"</div>
<div className="text-xs text-zinc-500">Seeking amount + valuation + stage.</div>
</div>
</div>
<p className="text-xs text-zinc-400 mt-6 pt-4 border-t border-zinc-100">
<i className="w-3 h-3 inline mr-1" data-lucide="clock"></i>
                        Investors spend 3.7 seconds deciding to swipe right. We optimized for that.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 text-left reveal">
<div className="inline-block px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-6">Zero Gatekeepers</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Instant Matches.<br/>Chat opens immediately.</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    When you both swipe right, the chat unlocks instantly. No "express interest" limbo. No waiting for an associate to approve you.
                </p>
<div className="p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50 inline-block backdrop-blur-sm">
<p className="text-xs text-zinc-400 mb-1">Last week's activity:</p>
<div className="flex gap-4 text-sm font-medium text-white">
<span>41 term sheets</span>
<span className="w-px h-4 bg-zinc-700"></span>
<span>18 co-founders</span>
<span className="w-px h-4 bg-zinc-700"></span>
<span>3 acquisitions</span>
</div>
</div>
</div>
<div className="flex-1 w-full relative h-[400px]">

<div className="absolute top-0 right-0 w-full md:w-[90%] space-y-4">

<div className="chat-bubble flex items-end justify-start gap-3" style={{animationDelay: '0.2s'}}>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-600 flex-shrink-0"></div>
<div className="bg-zinc-800 border border-zinc-700 text-zinc-200 px-4 py-3 rounded-2xl rounded-bl-none text-sm shadow-xl max-w-[80%]">
                            Just backed your round – wiring Monday. 🚀
                        </div>
</div>

<div className="chat-bubble flex items-end justify-end gap-3" style={{animationDelay: '0.8s'}}>
<div className="bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-br-none text-sm shadow-xl max-w-[80%]">
                            Amazing! Sending over the docsend now.
                        </div>
<div className="w-8 h-8 rounded-full bg-blue-900 border border-blue-700 flex-shrink-0"></div>
</div>

<div className="chat-bubble flex items-end justify-start gap-3" style={{animationDelay: '1.4s'}}>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-600 flex-shrink-0"></div>
<div className="bg-zinc-800 border border-zinc-700 text-zinc-200 px-4 py-3 rounded-2xl rounded-bl-none text-sm shadow-xl max-w-[80%]">
                            I'm the ex-Head of Design at Figma. Love what you're building. Available for advisory?
                        </div>
</div>

<div className="chat-bubble flex items-end justify-start gap-3" style={{animationDelay: '2.5s'}}>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-zinc-600 flex-shrink-0"></div>
<div className="bg-zinc-800 border border-zinc-700 text-zinc-200 px-4 py-3 rounded-2xl rounded-bl-none text-sm shadow-xl max-w-[80%]">
                            $250k check at $5M pre – term sheet tonight?
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Choose Your Audience. Precisely.</h2>
<p className="text-zinc-500">Publish once, route to the exact people you want.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group cursor-pointer reveal">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="gem"></i>
</div>
<div className="toggle-switch active"></div>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Investors Only</h3>
<p className="text-sm text-zinc-500 mb-4">2,800+ Verified Angels &amp; VCs.</p>
<div className="text-xs font-mono text-purple-600 bg-purple-50 inline-block px-2 py-1 rounded">Min Check: $10k</div>
</div>

<div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group cursor-pointer reveal delay-100">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="toggle-switch"></div>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Founders &amp; Talent</h3>
<p className="text-sm text-zinc-500 mb-4">Find a CTO, designer, or operator.</p>
<div className="text-xs font-mono text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">Equity Only</div>
</div>

<div className="p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-xl transition-all group cursor-pointer reveal delay-200">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<div className="toggle-switch"></div>
</div>
<h3 className="text-lg font-bold text-zinc-900 mb-2">Everyone</h3>
<p className="text-sm text-zinc-500 mb-4">Maximum reach. Go viral.</p>
<div className="text-xs font-mono text-green-600 bg-green-50 inline-block px-2 py-1 rounded">Open Access</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center reveal">Traction Speaks. Bullshit Walks.</h2>
<div className="relative w-full max-w-3xl h-64 bg-white rounded-2xl border border-zinc-200 shadow-xl flex overflow-hidden reveal">

<div className="w-1/2 bg-zinc-100/50 p-8 flex flex-col justify-center items-center relative border-r border-zinc-200 group">
<div className="blur-metrics space-y-4 w-full text-center">
<h3 className="text-xl font-bold text-zinc-400">"Some Revenue"</h3>
<p className="text-lg text-zinc-400">"Good Growth"</p>
<p className="text-lg text-zinc-400">"Traction"</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Buried by Algo</span>
</div>
</div>

<div className="w-1/2 p-8 flex flex-col justify-center items-center relative bg-gradient-to-br from-white to-green-50/50">
<div className="space-y-4 w-full text-center sharp-metrics">
<h3 className="text-2xl font-bold text-zinc-900">$84k MRR <span className="text-green-500 text-sm align-top">↑34%</span></h3>
<p className="text-lg font-medium text-zinc-800">42k MAU</p>
<div className="flex justify-center gap-2 text-xs font-mono text-zinc-500">
<span className="bg-green-100 text-green-700 px-2 py-1 rounded">LTV: $19</span>
<span className="bg-green-100 text-green-700 px-2 py-1 rounded">CAC: $4</span>
</div>
</div>
<div className="absolute top-4 right-4">
<i className="w-5 h-5 text-green-500" data-lucide="check-circle-2"></i>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg z-10">
                    VS
                </div>
</div>
<p className="text-center text-sm text-zinc-500 mt-8 max-w-lg">
                9 of the last 12 YC companies that raised on SwipeFundr connected their Stripe account on day one.
            </p>
</div>
</section>

<section className="py-24 bg-black text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="twitter"></i>
</div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Built for Twitter Speed</h2>
<p className="text-zinc-400 text-lg mb-8">
                    Login with X. Your latest project updates appear automatically on your card. Post your pitch with one tap.
                </p>
<ul className="space-y-4 text-zinc-300">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>One-tap crosspost = instant social proof</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Investors are already on X – no context switch</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-500" data-lucide="check"></i>
<span>Close deals in DMs</span>
</li>
</ul>
</div>
<div className="relative reveal delay-200">

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 x-glow transition-all duration-500">
<div className="flex justify-between items-center mb-6 border-b border-zinc-800 pb-4">
<div className="text-sm font-semibold text-zinc-400">Share to X</div>
<button className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold px-4 py-1.5 rounded-full transition-colors">
                            Post
                        </button>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-700"></div>
<div className="flex-1 space-y-3">
<div className="w-24 h-4 bg-zinc-800 rounded"></div>
<div className="w-full h-16 bg-zinc-800 rounded border border-zinc-700/50 p-3">
<div className="flex gap-3 mb-2">
<div className="w-8 h-8 rounded bg-zinc-700"></div>
<div className="space-y-1">
<div className="w-20 h-2 bg-zinc-700 rounded"></div>
<div className="w-12 h-2 bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -left-8 top-1/2 -translate-y-1/2 text-zinc-700 hidden md:block">
<i className="w-6 h-6" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">The Anti-Noise Algorithm</h2>
<p className="text-zinc-500 mb-12">We ruthlessly protect investor time so they keep coming back.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="text-lg font-bold text-zinc-900 mb-1">Max 5</div>
<div className="text-xs text-zinc-500">Pitches per founder. Forces prioritization.</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="text-lg font-bold text-zinc-900 mb-1">&lt;30s</div>
<div className="text-xs text-zinc-500">Manual review time for every new pitch.</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="text-lg font-bold text-zinc-900 mb-1">Ban</div>
<div className="text-xs text-zinc-500">Low effort or spam results in instant removal.</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-colors">
<div className="text-lg font-bold text-zinc-900 mb-1">Ratings</div>
<div className="text-xs text-zinc-500">Investors rate matches. Bad founders sink.</div>
</div>
</div>
<div className="mt-16 p-8 rounded-3xl bg-zinc-900 text-white relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-left">
<div className="text-sm text-zinc-400 uppercase tracking-widest mb-1">Average Session</div>
<div className="text-4xl font-bold">46m Signal</div>
</div>
<div className="h-px w-full md:w-px md:h-16 bg-zinc-700"></div>
<div className="text-right opacity-50">
<div className="text-sm text-zinc-400 uppercase tracking-widest mb-1">Wasted Time</div>
<div className="text-4xl font-bold">4m Noise</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-zinc-800"></div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-br from-zinc-900 via-black to-red-950 text-white text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-20"></div>
<div className="relative z-10 max-w-2xl mx-auto reveal">
<div className="flex items-center justify-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
<span className="text-red-400 font-mono text-sm">LIVE RIGHT NOW</span>
</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">87 new pitches added.</h2>
<p className="text-xl text-zinc-300 mb-10">11 investors with $500k+ checks are active right now.</p>
<button className="btn-pulse bg-white text-zinc-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-100 transition-colors inline-flex items-center gap-2">
                Swipe Live Deals 
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<p className="text-xs text-zinc-500 mt-6 font-medium">Takes 9 seconds. No email, no password, no deck.</p>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
</div>
<span className="text-sm font-bold text-zinc-900">SwipeFundr</span>
</div>
<div className="text-xs text-zinc-400">
                © 2024 SwipeFundr Inc. NYC / SF.
            </div>
</div>
</footer>


    </>
  );
}
