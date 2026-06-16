import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const cards = document.querySelectorAll('.spotlight-card');
        cards.forEach(card => {
            card.onmousemove = e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            };
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-violet-500/10 overflow-hidden group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all duration-300 bg-violet-500/10 w-9 h-9 border-violet-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-violet-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Demo2Close</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-violet-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-violet-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_20px_rgba(139,92,246,0.2)]" href="#demo">
                    Improve My Demo
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-screen pt-44 pb-20 relative flex flex-col justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-60 mix-blend-screen">
<div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
<div className="pulse-ring w-[30vw] h-[30vw] max-w-[600px] max-h-[600px]"></div>
<div className="pulse-ring w-[45vw] h-[45vw] max-w-[900px] max-h-[900px]"></div>
<div className="pulse-ring w-[60vw] h-[60vw] max-w-[1200px] max-h-[1200px]"></div>

<svg className="absolute w-[150vw] h-64 text-violet-500/10 top-1/2 -translate-y-1/2 -translate-x-1/4 animate-[pulse_6s_ease-in-out_infinite]" preserveaspectratio="none" viewbox="0 0 1000 100">
<path d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50" fill="none" stroke="currentColor" strokeWidth="1"></path>
<path d="M0,50 Q100,100 200,50 T400,50 T600,50 T800,50 T1000,50" fill="none" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-8 leading-[1.05]">
                    Your Demo Isn’t Closing Because <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-white drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">It’s Not a Conversation.</span>
</h1>
<p className="leading-relaxed text-lg md:text-xl font-light text-zinc-400 max-w-3xl mx-auto mb-12">
                    Most demos fail because they’re presentations. Mor Assouline helps sales teams turn demos into conversations that lead to decisions.
                </p>

<div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.15)] border border-white/10 group bg-black/50 backdrop-blur-sm placeholder-box mb-6">
<div className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-transform duration-500 group-hover:scale-105">
<div className="w-16 h-16 rounded-full bg-violet-600/20 flex items-center justify-center border border-violet-500/30 mb-4 backdrop-blur-md">
<iconify-icon className="text-violet-400 ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tight">[VIDEO PLACEHOLDER]</span>
<span className="text-sm text-zinc-400 mt-2 font-sans tracking-normal text-transform-none">Watch: Why Most Demos Don’t Convert</span>
</div>
</div>

<div className="mt-16 text-left max-w-4xl mx-auto bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
<div className="grid md:grid-cols-2 gap-12">
<div>
<p className="text-lg text-white font-medium mb-4">If your demos aren’t converting, the issue isn’t your product.</p>
<p className="text-zinc-400 mb-6">It’s how the demo is run. Most reps:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>present features instead of guiding decisions</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>skip real discovery</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>talk more than the buyer</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-red-500 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>fail to connect the demo to real problems</span>
</li>
</ul>
</div>
<div className="flex flex-col justify-between">
<div>
<p className="text-lg text-white font-medium mb-4">In this video, Mor breaks down:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-violet-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>why demos don’t lead to deals</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-violet-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>how to structure conversations that convert</span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<iconify-icon className="text-violet-500 shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>what top performers do differently</span>
</li>
</ul>
</div>
<a className="group relative inline-flex h-12 md:h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-violet-600 px-8 text-base font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(139,92,246,0.3)]" href="#demo">
                                Improve My Demo
                                <iconify-icon className="transition-transform duration-300 group-hover:translate-y-1" height="18" icon="solar:arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Sales teams improving demo performance</p>
<div className="h-20 w-full placeholder-box rounded-xl">
                    [IMAGE PLACEHOLDER - LOGOS]
                </div>
</div>
</section>

<section className="py-32 border-b border-white/5 bg-[#050505] relative z-20" id="problem">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-900 text-zinc-400 mb-8 border border-white/10">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-16">
                    Why Demos Don’t Turn Into Deals
                </h2>
<div className="grid sm:grid-cols-2 gap-8 text-left">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<iconify-icon className="text-violet-500 mb-4" icon="solar:presentation-linear" width="32"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">Too much presenting</h3>
<p className="text-zinc-400 leading-relaxed">Not enough interaction.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<iconify-icon className="text-violet-500 mb-4" icon="solar:magnifer-linear" width="32"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">Weak discovery</h3>
<p className="text-zinc-400 leading-relaxed">Demos don’t connect to real needs.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<iconify-icon className="text-violet-500 mb-4" icon="solar:map-arrow-square-linear" width="32"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">No clear direction</h3>
<p className="text-zinc-400 leading-relaxed">Buyers leave without clarity.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5">
<iconify-icon className="text-violet-500 mb-4" icon="solar:user-cross-linear" width="32"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-2">Low engagement</h3>
<p className="text-zinc-400 leading-relaxed">Prospects don’t feel involved.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] border-b border-white/5" id="framework">
<div className="max-w-6xl mx-auto px-6">

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-violet-500 transition-colors">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-violet-400 font-mono text-xs uppercase tracking-wide mb-3 block">Reframe</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">The Problem Isn’t Your Product. It’s Your Process.</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Better slides won’t fix this.<br/>
                                More features won’t fix this.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 md:p-8 h-full">
<h4 className="text-white text-lg font-medium mb-4 tracking-tight">Deals improve when:</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-zinc-400">
<div className="w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-violet-500/20">
<iconify-icon className="text-violet-400" icon="solar:chat-round-line-linear" width="14"></iconify-icon>
</div>
<span>demos are <strong>conversations</strong></span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<div className="w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-violet-500/20">
<iconify-icon className="text-violet-400" icon="solar:magnifer-zoom-in-linear" width="14"></iconify-icon>
</div>
<span>discovery is <strong>strong</strong></span>
</li>
<li className="flex items-start gap-3 text-zinc-400">
<div className="w-6 h-6 rounded bg-violet-500/10 flex items-center justify-center shrink-0 mt-0.5 border border-violet-500/20">
<iconify-icon className="text-violet-400" icon="solar:map-point-wave-linear" width="14"></iconify-icon>
</div>
<span>buyers are <strong>guided</strong></span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-violet-500 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-violet-400 font-mono text-xs uppercase tracking-wide mb-3 block">Mechanism</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">Demo-to-Close Framework</h3>
<p className="text-zinc-400 text-base leading-relaxed">
                                Top performers don’t demo.
                            </p>
</div>
<div className="lg:col-span-7">
<div className="bg-violet-900/10 border border-violet-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<h4 className="text-white text-lg font-medium mb-6 tracking-tight relative z-10">What top performers do instead:</h4>
<div className="grid sm:grid-cols-3 gap-4 relative z-10 mb-8">
<div className="p-4 rounded-xl bg-black/40 border border-white/5">
<span className="block text-violet-400 font-mono text-xs mb-2">01</span>
<p className="text-sm text-zinc-300">Guide conversations</p>
</div>
<div className="p-4 rounded-xl bg-black/40 border border-white/5">
<span className="block text-violet-400 font-mono text-xs mb-2">02</span>
<p className="text-sm text-zinc-300">Connect problems to solutions</p>
</div>
<div className="p-4 rounded-xl bg-black/40 border border-white/5">
<span className="block text-violet-400 font-mono text-xs mb-2">03</span>
<p className="text-sm text-zinc-300">Lead buyers to decisions</p>
</div>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
<span className="text-zinc-500 text-sm">This is what turns:</span>
<span className="px-4 py-2 rounded-lg bg-violet-600/20 border border-violet-500/30 text-white text-sm font-medium tracking-tight">Demos → into revenue</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group scroll-mt-32">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-violet-500 transition-colors">
<iconify-icon icon="solar:route-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 pt-1">
<span className="text-violet-400 font-mono text-xs uppercase tracking-wide mb-3 block">Process</span>
<h3 className="text-3xl text-white font-medium mb-4 tracking-tight">How Mor Improves Demo Conversion</h3>
<a className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors" href="#demo">
                                Improve My Close Rate
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 grid gap-4">
<div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 font-mono text-sm border border-violet-500/20">01</div>
<div>
<h4 className="text-white text-lg font-medium mb-2 tracking-tight">Analyze current demo structure</h4>
<p className="text-zinc-500 text-sm leading-relaxed">We break down your current approach to identify where deals are stalling and where reps are slipping into presentation mode.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 font-mono text-sm border border-violet-500/20">02</div>
<div>
<h4 className="text-white text-lg font-medium mb-2 tracking-tight">Strengthen discovery and flow</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Implement frameworks that naturally extract pain points and map them directly to the value of your product during the demo.</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0 font-mono text-sm border border-violet-500/20">03</div>
<div>
<h4 className="text-white text-lg font-medium mb-2 tracking-tight">Improve conversion and closing</h4>
<p className="text-zinc-500 text-sm leading-relaxed">Equip your team with the tactics to guide prospects to a firm decision and handle objections confidently on the call.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">What’s Included</h2>
<p className="text-zinc-400 text-base">The complete toolkit to transform your sales conversations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between group overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:clapperboard-play-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Demo Training &amp; Workshops</h3>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Hands-on sessions designed to tear down bad habits and build up a conversational, conversion-focused demo flow tailored to your product.</p>
</div>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col group overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Discovery Frameworks</h3>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Questions and structures that uncover the real urgency behind the prospect's interest, before you show a single feature.</p>
</div>
<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Sales Coaching</h3>
<p className="text-zinc-400 text-base leading-relaxed">Direct, operator-level feedback on actual sales conversations to refine execution.</p>
</div>
</div>
<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-between overflow-hidden">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400 mb-6 shadow-lg shadow-black/50">
<iconify-icon aria-hidden="true" icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-3">Closing Strategy</h3>
<p className="text-zinc-400 text-base leading-relaxed">Learn how to guide the conversation to a natural conclusion, gaining commitments and closing deals without high-pressure tactics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Teams improving demo conversion</h2>
<p className="text-zinc-400 text-base">Sales teams use Mor Assouline’s approach to improve how they run demos and close deals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-violet-500/30 transition-colors shadow-lg">
<div className="h-40 w-full placeholder-box rounded-xl mb-4">
                            [IMAGE PLACEHOLDER]
                        </div>
<p className="text-zinc-300 text-base leading-relaxed flex-1">
                            "The shift from presenting to having a conversation completely changed our win rate. The framework is practical and immediately actionable."
                        </p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full placeholder-box text-[8px]">IMG</div>
<div>
<div className="text-white text-sm font-medium">VP of Sales</div>
<div className="text-zinc-500 text-xs">SaaS Company</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-violet-500/30 transition-colors shadow-lg">
<div className="h-40 w-full placeholder-box rounded-xl mb-4">
                            [IMAGE PLACEHOLDER]
                        </div>
<p className="text-zinc-300 text-base leading-relaxed flex-1">
                            "Mor helped our AEs stop feature-dumping and start running targeted discovery that weaves naturally into the product demonstration."
                        </p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full placeholder-box text-[8px]">IMG</div>
<div>
<div className="text-white text-sm font-medium">Sales Director</div>
<div className="text-zinc-500 text-xs">B2B Software</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-white/10 flex flex-col gap-6 hover:border-violet-500/30 transition-colors shadow-lg">
<div className="h-40 w-full placeholder-box rounded-xl mb-4">
                            [IMAGE PLACEHOLDER]
                        </div>
<p className="text-zinc-300 text-base leading-relaxed flex-1">
                            "Our reps finally have a clear roadmap for every call. They know exactly how to guide the buyer to a decision."
                        </p>
<div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
<div className="w-10 h-10 rounded-full placeholder-box text-[8px]">IMG</div>
<div>
<div className="text-white text-sm font-medium">Sales Enablement Lead</div>
<div className="text-zinc-500 text-xs">Tech Scale-up</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5" id="about">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="aspect-square rounded-3xl overflow-hidden placeholder-box shadow-[0_0_40px_rgba(139,92,246,0.1)] border-white/10">
                   [IMAGE PLACEHOLDER - MOR ASSOULINE]
               </div>
<div>
<h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Hi, I’m Mor Assouline.</h2>
<div className="space-y-4 text-zinc-400 text-base leading-relaxed">
<p>I work with sales teams that are running demos but not closing at the level they should.</p>
<p>The issue isn’t effort — it’s how demos are structured.</p>
<p>My focus is helping reps turn demos into conversations that lead to decisions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">Who is this for?</h3>
<p className="text-zinc-400">SaaS reps and sales teams.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">Is this demo training?</h3>
<p className="text-zinc-400">Yes, focused on conversion and closing.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">Does this work for experienced reps?</h3>
<p className="text-zinc-400">Yes, especially those with low close rates.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">What makes this different?</h3>
<p className="text-zinc-400">Focus on conversations, not presentations.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5">
<h3 className="text-lg text-white font-medium mb-2">How do we start?</h3>
<p className="text-zinc-400">Book a call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                            Turn More Demos Into Deals
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a call to improve how your demos convert. Stop presenting and start having conversations that close.
                        </p>
<div className="flex items-center gap-3 text-zinc-300">
<div className="w-6 h-6 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 shrink-0">
<iconify-icon aria-hidden="true" icon="solar:calendar-date-linear" width="14"></iconify-icon>
</div>
                            Select a time on the calendar to get started.
                        </div>
</div>

<div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 placeholder-box mt-8 lg:mt-0">
                        [CALENDLY PLACEHOLDER]<br/>
<span className="text-xs mt-4">CTA: Book My Call</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
<div className="md:col-span-2 pr-8">
<a className="flex items-center gap-3 text-white font-medium tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-violet-500/5 relative overflow-hidden group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-violet-500 transition-colors duration-300" icon="solar:microphone-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        Demo2Close
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        Helping sales teams turn demos into conversations that lead to decisions.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Navigation</h4>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="#problem">The Problem</a>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="#framework">Framework</a>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="#proof">Results</a>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="#about">About Mor</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Connect</h4>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="https://demotoclose.com" target="_blank">Website</a>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="https://www.linkedin.com/in/morassouline" target="_blank">LinkedIn</a>
<a className="text-zinc-500 hover:text-violet-400 transition-colors" href="https://www.youtube.com/@demotoclose" target="_blank">YouTube</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Demo2Close. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
