import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Spotlight effect logic kept for styled cards
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
<nav aria-label="Main Navigation" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-5xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-green-500/10 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300 bg-green-500/10 w-9 h-9 border-green-500/20 border rounded-xl relative shadow-lg items-center justify-center" style={{perspective: '800px'}}>
<style>
                        @keyframes navCubeSpin {
                            0% { transform: rotateX(-20deg) rotateY(0deg); }
                            100% { transform: rotateX(-20deg) rotateY(360deg); }
                        }
                    </style>
<div className="w-5 h-5 relative group-hover:scale-110 transition-transform duration-300" style={{transformStyle: 'preserve-3d', animation: 'navCubeSpin 8s linear infinite'}}>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
<div className="absolute inset-0 border-[1.5px] border-green-500 bg-green-500/20 backdrop-blur-sm shadow-[inset_0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
</div>
<span className="text-white font-semibold tracking-tight text-[15px]">Lushin</span>
</a>
<div className="hidden md:flex gap-8 items-center flex-1 justify-center">
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors" href="#why-dan">Why Dan Faber</a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
</div>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-[13px] hover:bg-green-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-semibold text-white bg-green-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(34,197,94,0.3)]" href="#booking">
                    Book a Call
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main>

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative flex flex-col items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">

<div className="inline-flex gap-2 text-[11px] uppercase hover:border-green-500/40 transition-colors cursor-default font-semibold text-green-300 tracking-wide bg-green-500/5 border-green-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_20px_rgba(34,197,94,0.1)] backdrop-blur-sm items-center">
                    Leadership Development &amp; Sales Coaching
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05] mb-8">
                    Build High-Performing<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Sales Leaders and Teams</span>
</h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                    Dan Faber helps organizations develop stronger leaders, improve sales performance, and build high-performing teams through coaching and leadership development.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-green-500 px-8 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-green-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] w-full sm:w-auto" href="#booking">
                        Book a Leadership Strategy Call
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 rounded-3xl"></div>
<div className="relative placeholder-box aspect-video rounded-2xl w-full shadow-2xl">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span>VIDEO PLACEHOLDER</span>
</div>
<p className="text-sm text-zinc-500 mt-4 text-center">Watch Dan Explain Sales Leadership Coaching</p>
</div>
</div>
</section>

<section className="z-20 bg-[#020202] border-white/5 border-y py-16 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<div className="placeholder-box w-full max-w-4xl h-32 rounded-xl">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:buildings-linear" width="32"></iconify-icon>
<span>IMAGE PLACEHOLDER</span>
</div>
<p className="text-center text-xs text-zinc-500 mt-6 font-mono uppercase tracking-widest">Organizations influenced by Lushin leadership and sales coaching</p>
</div>
</section>

<section className="bg-black py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Why Many Sales Teams <span className="text-zinc-500">Fail to Reach Their Potential</span>
</h2>
<p className="text-zinc-400 text-base max-w-2xl mx-auto">Common challenges Dan addresses in sales organizations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="sc-card p-8 rounded-[2rem] spotlight-card group">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-cross-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Weak Sales Leadership</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Managers lack the necessary coaching skills to actively develop their teams and drive continuous improvement.</p>
</div>
<div className="sc-card p-8 rounded-[2rem] spotlight-card group">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-broken-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Low Accountability</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Without strong, focused leadership, teams lose their direction, discipline, and commitment to targets.</p>
</div>
<div className="sc-card p-8 rounded-[2rem] spotlight-card group">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Inconsistent Sales Performance</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Teams struggle to maintain high performance quarter over quarter, relying on luck rather than process.</p>
</div>
<div className="sc-card p-8 rounded-[2rem] spotlight-card group">
<div className="w-12 h-12 rounded-xl bg-zinc-500/10 border border-zinc-500/20 flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-broken-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Limited Leadership Development</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Organizations fail to identify, nurture, and build strong future leaders from within their current ranks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative" id="why-dan">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="text-green-500 font-mono text-xs uppercase tracking-wider mb-2">The Approach</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Why Leaders Work With Dan Faber</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="sc-card p-6 rounded-2xl flex flex-col h-full border-t-2 border-t-green-500/50 hover:border-t-green-500 transition-all">
<iconify-icon className="text-white mb-4" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<h3 className="text-lg text-white font-semibold mb-2">Sales Leadership Coaching</h3>
<p className="text-zinc-400 text-sm mt-auto">Helping leaders develop stronger, more resilient teams capable of autonomous success.</p>
</div>
<div className="sc-card p-6 rounded-2xl flex flex-col h-full border-t-2 border-t-zinc-700 hover:border-t-green-500 transition-all">
<iconify-icon className="text-white mb-4" icon="solar:chart-square-linear" width="28"></iconify-icon>
<h3 className="text-lg text-white font-semibold mb-2">Performance Development</h3>
<p className="text-zinc-400 text-sm mt-auto">Hyper-focused on improving measurable sales results and organizational growth.</p>
</div>
<div className="sc-card p-6 rounded-2xl flex flex-col h-full border-t-2 border-t-zinc-700 hover:border-t-green-500 transition-all">
<iconify-icon className="text-white mb-4" icon="solar:sprout-linear" width="28"></iconify-icon>
<h3 className="text-lg text-white font-semibold mb-2">Coaching Culture</h3>
<p className="text-zinc-400 text-sm mt-auto">Building organizations where leaders actively prioritize developing their people.</p>
</div>
<div className="sc-card p-6 rounded-2xl flex flex-col h-full border-t-2 border-t-zinc-700 hover:border-t-green-500 transition-all">
<iconify-icon className="text-white mb-4" icon="solar:box-linear" width="28"></iconify-icon>
<h3 className="text-lg text-white font-semibold mb-2">Practical Frameworks</h3>
<p className="text-zinc-400 text-sm mt-auto">Delivering actionable tools and methodologies that leaders can apply immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="sc-card rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 placeholder-box aspect-square rounded-2xl max-w-sm mx-auto">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:gallery-linear" width="32"></iconify-icon>
<span>IMAGE PLACEHOLDER</span>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<div className="flex text-green-500 gap-1 mb-6">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
                            "Sales leaders and organizations benefit from Lushin’s coaching approach focused on leadership development and sales performance."
                        </p>
<p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Leadership Insights &amp; Client Experiences</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        How Lushin Improves<br/>
<span className="text-green-500">Sales Performance</span>
</h2>
</div>

<div className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm font-semibold">1</span>
</div>
<div>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-2 block">Step 01</span>
<h3 className="text-2xl text-white font-semibold mb-3">Assess Leadership Capability</h3>
<p className="text-zinc-400 leading-relaxed max-w-2xl">We begin by identifying specific leadership and performance gaps within your organization to understand exactly where improvement is needed.</p>
</div>
</div>

<div className="relative pl-12 pb-20 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm font-semibold">2</span>
</div>
<div>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-2 block">Step 02</span>
<h3 className="text-2xl text-white font-semibold mb-3">Develop Coaching Skills</h3>
<p className="text-zinc-400 leading-relaxed max-w-2xl">We equip your leaders with practical, actionable coaching tools designed to elevate their ability to manage and motivate their teams.</p>
</div>
</div>

<div className="relative pl-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#050505] group-hover:border-green-500 transition-colors">
<span className="font-mono text-sm font-semibold">3</span>
</div>
<div>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-wider mb-2 block">Step 03</span>
<h3 className="text-2xl text-white font-semibold mb-3">Strengthen Team Performance</h3>
<p className="text-zinc-400 leading-relaxed max-w-2xl mb-8">We embed these new leadership practices into your daily operations, ensuring they drive measurable, long-term sales results.</p>
<a className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-zinc-200 transition-colors" href="#booking">
                            Improve Your Sales Leadership
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="programs">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">Core Programs &amp; Focus Areas</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white font-medium hover:border-green-500/50 hover:bg-green-500/5 transition-all">Sales Leadership Coaching</div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white font-medium hover:border-green-500/50 hover:bg-green-500/5 transition-all">Performance Coaching Programs</div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white font-medium hover:border-green-500/50 hover:bg-green-500/5 transition-all">Leadership Development Training</div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white font-medium hover:border-green-500/50 hover:bg-green-500/5 transition-all">Sales Team Coaching</div>
<div className="px-6 py-4 rounded-full border border-white/10 bg-zinc-900/50 text-white font-medium hover:border-green-500/50 hover:bg-green-500/5 transition-all">Executive Coaching</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 placeholder-box w-full aspect-[4/5] rounded-3xl shadow-2xl relative">
<iconify-icon className="text-zinc-700 mb-4" icon="solar:user-bold" width="48"></iconify-icon>
<span className="text-zinc-600">IMAGE PLACEHOLDER</span>
</div>
<div className="order-1 lg:order-2">
<div className="text-green-500 font-mono text-xs uppercase tracking-wider mb-4">About</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Hi, I'm Dan Faber.</h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p>
                                Through Lushin, I work with leaders and organizations to develop stronger sales teams and leadership capability.
                            </p>
<p>
                                My mission is to help leaders build coaching cultures that drive continuous performance and sustainable organizational growth.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="pb-6 border-b border-white/10">
<h4 className="text-white font-medium text-lg mb-2">Who is this designed for?</h4>
<p className="text-zinc-400">Sales leaders and organizations seeking stronger leadership development.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-white font-medium text-lg mb-2">Is this sales training or leadership coaching?</h4>
<p className="text-zinc-400">Both — combining sales performance with leadership development.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-white font-medium text-lg mb-2">Does this work for experienced teams?</h4>
<p className="text-zinc-400">Yes. The focus is improving leadership capability and team performance, regardless of current tenure.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-white font-medium text-lg mb-2">What makes Lushin different?</h4>
<p className="text-zinc-400">A coaching-focused approach to leadership and sales development, rather than just tactical training.</p>
</div>
<div className="pb-6 border-b border-white/10">
<h4 className="text-white font-medium text-lg mb-2">How do we get started?</h4>
<p className="text-zinc-400">Book a strategy call to discuss your organization's specific needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#080808] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">
<div className="flex flex-col justify-center h-full mb-12 lg:mb-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Strengthen Your<br/>
<span className="text-green-500">Sales Leadership</span>
</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed max-w-md">
                            Book a conversation with Dan Faber to explore how Lushin can help develop stronger leaders and higher-performing sales teams.
                        </p>
<div>
<button className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-8 text-[15px] font-semibold text-black transition-all hover:bg-zinc-200">
                                Book My Call
                                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="relative w-full h-[500px] lg:h-[600px] placeholder-box rounded-2xl shadow-2xl ring-1 ring-white/5 bg-[#0c0c0c]">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:calendar-date-linear" width="48"></iconify-icon>
<span>CALENDLY PLACEHOLDER</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 py-12 text-sm text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg justify-center md:justify-start">
<div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
<span className="text-green-500">L</span>
</div>
                Lushin
            </div>
<div className="text-zinc-600 text-xs">
                © 2024 Lushin. Dan Faber. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
