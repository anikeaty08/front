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
<a aria-label="Back to home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-blue-500/10 overflow-hidden group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 bg-blue-500/10 w-9 h-9 border-blue-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-blue-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Venli Consulting</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-blue-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-blue-600 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 border border-blue-400/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]" href="#demo">
                    Book a Strategy Call
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-300 text-xs uppercase font-medium tracking-wide mb-8 hover:border-blue-500/40 transition-colors cursor-default shadow-[0_0_20px_rgba(59,130,246,0.1)] backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-signal"></span>
                    Sales Performance &amp; Leadership
                </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight mb-8">
                    Build a Sales Team <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">That Wins More Deals.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                    Marcus Chan helps B2B sales teams strengthen their sales conversations, build confidence, and improve performance through modern consultative selling strategies.
                </p>
<div className="flex flex-col mb-16 items-center justify-center">
<div className="flex w-full max-w-lg mb-6 pr-4 pl-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] border border-blue-400/50" href="#demo">
                            Book a Strategy Call
                            <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div aria-label="Watch Marcus Explain Modern B2B Sales" className="relative w-full max-w-4xl mx-auto aspect-video bg-[#09090b]/80 backdrop-blur-md border border-white/10 rounded-[2rem] flex flex-col items-center justify-center overflow-hidden spotlight-card shadow-2xl ring-1 ring-white/5 z-10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-50"></div>
<div className="w-20 h-20 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-2xl tracking-tight mb-2">VIDEO PLACEHOLDER</h3>
<p className="text-zinc-400 font-medium text-sm">Watch Marcus Explain Modern B2B Sales</p>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5 bg-[#020202] relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-500 tracking-wide mb-8">Sales teams learning modern selling through Venli Consulting</p>
<div className="w-full h-32 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 spotlight-card">
<iconify-icon className="text-zinc-600" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<span className="text-zinc-600 font-semibold tracking-widest uppercase text-sm">IMAGE PLACEHOLDER</span>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-6 border border-red-500/20">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Why Many Sales Teams<br className="hidden md:block"/> Struggle to Close Deals
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Weak sales conversations</h3>
<p className="text-zinc-400 text-base leading-relaxed">Many salespeople struggle to guide effective customer conversations.</p>
</div>

<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:arrow-down-broken-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Low confidence</h3>
<p className="text-zinc-400 text-base leading-relaxed">Sales reps hesitate when communicating value.</p>
</div>

<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Inconsistent performance</h3>
<p className="text-zinc-400 text-base leading-relaxed">Without strong coaching and frameworks, results vary across teams.</p>
</div>

<div className="sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 mb-6">
<iconify-icon icon="solar:hourglass-line-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Outdated sales techniques</h3>
<p className="text-zinc-400 text-base leading-relaxed">Traditional selling approaches fail with modern buyers.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-b border-white/5" id="why-marcus">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        Why Sales Leaders<br/>Work With Marcus Chan
                    </h2>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:chat-square-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Strategy 01</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Modern consultative selling</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            Training focused on real buyer conversations.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Strategy 02</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Leadership development</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            Helping sales leaders build stronger teams.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Strategy 03</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Confidence-driven sales</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            Helping reps communicate value clearly.
                        </p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-blue-500 transition-colors">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-blue-400 font-mono text-xs uppercase tracking-wide mb-3 block">Strategy 04</span>
<h3 className="text-3xl text-white font-semibold mb-4 tracking-tight">Practical frameworks</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            Strategies teams can apply immediately.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/5 relative z-20">
<div className="max-w-6xl mx-auto px-6">
<div className="sc-card p-8 md:p-12 lg:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-12 spotlight-card shadow-2xl">
<div className="w-full md:w-1/2 aspect-[4/3] bg-zinc-900/60 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-md relative overflow-hidden">
<iconify-icon className="text-blue-500/50 mb-4 z-10" icon="solar:gallery-linear" width="48"></iconify-icon>
<span className="text-white font-semibold tracking-tight z-10 text-xl mb-2">IMAGE PLACEHOLDER</span>
<span className="text-zinc-400 text-sm z-10 max-w-xs">Sales teams developing stronger selling skills with Venli Consulting</span>
</div>
<div className="w-full md:w-1/2">
<div className="flex text-blue-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl text-white font-semibold leading-[1.3] tracking-tight mb-6">
                            "Organizations work with Marcus Chan to strengthen sales leadership and improve sales conversations across their teams."
                        </h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tight mb-4">
                        How Venli Consulting Helps Sales Teams Improve
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-semibold text-xl font-sans tracking-tight shadow-inner">1</div>
<div>
<h3 className="text-white font-semibold text-lg">Step 1</h3>
</div>
</div>
<div className="mb-4">
<div className="text-2xl font-semibold text-white tracking-tight">Evaluate Sales Conversations</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed flex-grow">
                            Identify gaps in sales communication and approach.
                        </p>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-semibold text-xl font-sans tracking-tight shadow-inner">2</div>
<div>
<h3 className="text-white font-semibold text-lg">Step 2</h3>
</div>
</div>
<div className="mb-4">
<div className="text-2xl font-semibold text-white tracking-tight">Implement Modern Sales Frameworks</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed flex-grow">
                            Introduce consultative selling strategies for real conversations.
                        </p>
</div>

<div className="group relative p-8 rounded-[2rem] bg-[#0A0A0A] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white font-semibold text-xl font-sans tracking-tight shadow-inner">3</div>
<div>
<h3 className="text-white font-semibold text-lg">Step 3</h3>
</div>
</div>
<div className="mb-4">
<div className="text-2xl font-semibold text-white tracking-tight">Develop Stronger Sales Leaders</div>
</div>
<p className="text-zinc-400 text-base leading-relaxed flex-grow">
                            Equip leaders to coach and develop their teams.
                        </p>
</div>
</div>
<div className="mt-16 flex justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-10 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] border border-blue-400/50" href="#demo">
                        Improve My Sales Team
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium">B2B Sales Training</h4>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium">Consultative Selling Frameworks</h4>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium">Sales Leadership Development</h4>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium">Sales Coaching Programs</h4>
</div>

<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/10 flex items-center gap-4 hover:border-white/20 transition-colors lg:col-span-1 md:col-span-2">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium">Team Sales Workshops</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/5 relative z-20" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="sc-card p-8 md:p-12 lg:p-16 rounded-[2.5rem] flex flex-col md:flex-row-reverse items-center gap-12 spotlight-card shadow-2xl">
<div className="w-full md:w-[45%] aspect-square bg-zinc-900/60 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-8 backdrop-blur-md relative overflow-hidden">
<iconify-icon className="text-blue-500/50 mb-4 z-10" icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="text-white font-semibold tracking-tight z-10 text-xl">IMAGE PLACEHOLDER</span>
</div>
<div className="w-full md:w-[55%]">
<h3 className="text-3xl md:text-4xl text-white font-semibold leading-[1.2] tracking-tight mb-6">
                            Hi, I'm Marcus Chan.
                        </h3>
<p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Through Venli Consulting, I work with B2B sales teams and leaders to improve sales conversations, build confidence, and strengthen sales performance.
                        </p>
<p className="text-zinc-400 text-lg leading-relaxed">
                            My goal is to help organizations develop sales teams that communicate value clearly and win more opportunities.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-b border-white/5 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
<div className="sc-card p-6 md:p-8 rounded-2xl">
<h4 className="text-lg text-white font-medium mb-3">Who is this designed for?</h4>
<p className="text-zinc-400 text-base leading-relaxed">B2B sales teams and leaders looking to improve sales performance.</p>
</div>
<div className="sc-card p-6 md:p-8 rounded-2xl">
<h4 className="text-lg text-white font-medium mb-3">Is this sales training or leadership development?</h4>
<p className="text-zinc-400 text-base leading-relaxed">Both — focused on improving sales conversations and leadership.</p>
</div>
<div className="sc-card p-6 md:p-8 rounded-2xl">
<h4 className="text-lg text-white font-medium mb-3">Does this work for experienced sales teams?</h4>
<p className="text-zinc-400 text-base leading-relaxed">Yes. The training helps teams strengthen modern selling skills.</p>
</div>
<div className="sc-card p-6 md:p-8 rounded-2xl">
<h4 className="text-lg text-white font-medium mb-3">What makes Venli Consulting different?</h4>
<p className="text-zinc-400 text-base leading-relaxed">A focus on consultative selling and leadership development.</p>
</div>
<div className="sc-card p-6 md:p-8 rounded-2xl border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.05)]">
<h4 className="text-lg text-white font-medium mb-3">How do we get started?</h4>
<p className="text-zinc-400 text-base leading-relaxed mb-4">Book a strategy call to explore how we can help your team.</p>
<a className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors" href="#demo">
                            Book a Strategy Call <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-start">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-12">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Strengthen Your<br/> Sales Team
                        </h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Marcus Chan to explore how Venli Consulting can help improve sales conversations and team performance.
                        </p>
</div>

<div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 flex flex-col items-center justify-center p-8 text-center spotlight-card">
<div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-2xl tracking-tight mb-2">CALENDLY PLACEHOLDER</h3>
<p className="text-zinc-400 text-sm mb-8">Select a time to book your strategy call.</p>
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-blue-600 px-8 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] border border-blue-400/50" href="#">
                            Book My Call
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 pr-8">
<a aria-label="Back to home" className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-blue-500/5 relative overflow-hidden group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors duration-300" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                        Venli Consulting
                    </a>
<p className="text-zinc-500 mb-6 leading-relaxed max-w-xs">
                        Marcus Chan helps B2B sales teams strengthen their sales conversations, build confidence, and improve performance.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Services</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Sales Training</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Leadership Development</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Consultative Selling</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Team Workshops</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#about">About Marcus</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#process">Process</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Legal</h4>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-zinc-500 hover:text-blue-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 Venli Consulting Group. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
