import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Keep the spotlight card effect from the template
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
<div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:chart-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">Ian Altman</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-xs hover:bg-orange-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-orange-500 rounded-full py-2.5 px-5 shadow-[0_0_15px_rgba(249,115,22,0.3)]" href="#booking">
                    Book Call
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-[90vh] pt-44 pb-20 relative flex flex-col items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen z-0"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-50"></div>
<div className="z-10 text-center max-w-5xl mx-auto px-6 relative w-full">
<div className="inline-flex gap-2 text-xs uppercase cursor-default font-medium text-orange-400 tracking-wide bg-orange-500/10 border-orange-500/20 border rounded-full mb-8 py-1.5 px-4 backdrop-blur-sm items-center">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Same Side Selling®
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-semibold text-white tracking-tight mb-6">
                    Win More Business Without <span className="text-zinc-500">Competing on Price.</span>
</h1>
<p className="leading-relaxed text-base md:text-lg font-light text-zinc-400 max-w-2xl mx-auto mb-10">
                    Ian Altman helps sales teams and organizations differentiate their value, build trust with buyers, and win more business using the Same Side Selling® approach.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-orange-500 px-8 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(249,115,22,0.3)]" href="#booking">
                        Book a Revenue Strategy Call
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl bg-zinc-900 border border-white/10 placeholder-media flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="relative z-10 flex flex-col items-center text-center p-6">
<div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center text-orange-500 mb-4 backdrop-blur-sm">
<iconify-icon className="ml-1" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase mb-2">Video Placeholder</span>
<h3 className="text-white text-lg font-medium">Watch Ian Explain Same Side Selling®</h3>
</div>
</div>
</div>
</section>

<section className="z-20 bg-[#030303] border-white/5 border-y py-16 relative">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 mb-8 font-mono uppercase tracking-widest">Organizations and leaders influenced by Ian Altman’s work</p>

<div className="w-full h-32 rounded-xl bg-zinc-900 border border-white/5 placeholder-media flex flex-col items-center justify-center max-w-5xl mx-auto">
<iconify-icon className="text-zinc-600 mb-2" icon="solar:gallery-linear" width="24"></iconify-icon>
<span className="text-zinc-600 font-mono text-xs tracking-widest uppercase">Image Placeholder (Client Logos)</span>
</div>
</div>
</section>

<section className="bg-[#050505] py-24 relative" id="challenges">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Why Many Sales Teams Struggle to Differentiate
                    </h2>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Sales leaders and executives frequently encounter these obstacles when trying to drive revenue growth in competitive markets.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="sc-card p-8 rounded-2xl group spotlight-card">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Competing on Price</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Sales teams struggle to stand out in crowded markets, often reducing conversations to discounts and price matches rather than value.</p>
</div>

<div className="sc-card p-8 rounded-2xl group spotlight-card">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Weak Buyer Trust</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Customers hesitate and deals slow down when sellers feel transactional or pushy rather than acting as trusted advisors.</p>
</div>

<div className="sc-card p-8 rounded-2xl group spotlight-card">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Lack of Sales Differentiation</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Organizations fail to clearly communicate their unique value, making them look identical to competitors in the eyes of the buyer.</p>
</div>

<div className="sc-card p-8 rounded-2xl group spotlight-card">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:hourglass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg mb-2">Stalled Opportunities</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Deals stall indefinitely in the pipeline because sellers cannot effectively align with buyer priorities and decision-making processes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-t border-white/5 relative" id="approach">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.05),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Why Leaders Learn From Ian Altman</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:book-bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-base mb-2">Creator of Same Side Selling®</h3>
<p className="text-zinc-400 text-sm leading-relaxed">A proven framework focused entirely on establishing trust and aligning seamlessly with buyers.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-base mb-2">Sales Differentiation Expert</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Helping B2B organizations stand out effectively without resorting to competing on price.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-base mb-2">Revenue Growth Strategist</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Guiding executive leaders to strengthen their pipeline, accelerate velocity, and increase win rates.</p>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium text-base mb-2">Trusted Sales Advisor</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Working directly with organizational leaders to transform their sales approach and culture.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-lg md:text-xl text-white font-medium leading-relaxed mb-12">
                    "Executives and sales leaders around the world learn from Ian Altman’s approach to trust-based selling and differentiation."
                </p>

<div className="w-full aspect-[21/9] rounded-2xl bg-zinc-900 border border-white/10 placeholder-media flex flex-col items-center justify-center shadow-lg">
<iconify-icon className="text-zinc-600 mb-3" icon="solar:chat-square-like-linear" width="32"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">Image Placeholder</span>
<span className="text-zinc-600 text-xs mt-1">Client insights and leadership feedback</span>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c] border-y border-white/5" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        How Ian Altman Helps Organizations Win More Business
                    </h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto">A structured methodology to transform how your team engages buyers.</p>
</div>
<div className="relative pl-8 md:pl-12 space-y-16 border-l border-zinc-800 ml-4 md:ml-0">

<div className="relative">
<div className="absolute -left-12 md:-left-16 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-[0_0_0_8px_#0a0a0c]">
<span className="text-xs font-mono">01</span>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-orange-500/20 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Assess Sales Differentiation</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Identify critical gaps in your current positioning and discover where your sales process falls out of alignment with modern buyer behavior.</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-12 md:-left-16 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] border border-orange-500/50 flex items-center justify-center text-orange-500 shadow-[0_0_0_8px_#0a0a0c]">
<span className="text-xs font-mono">02</span>
</div>
<div className="bg-zinc-900/50 border border-orange-500/10 rounded-2xl p-6 md:p-8 hover:border-orange-500/30 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
<h3 className="text-xl text-white font-medium mb-3 relative z-10">Implement Same Side Selling®</h3>
<p className="text-zinc-400 text-sm leading-relaxed relative z-10">Equip your teams with practical, trust-based selling frameworks that shift the dynamic from adversarial negotiations to collaborative problem-solving.</p>
</div>
</div>

<div className="relative">
<div className="absolute -left-12 md:-left-16 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 shadow-[0_0_0_8px_#0a0a0c]">
<span className="text-xs font-mono">03</span>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-orange-500/20 transition-colors">
<h3 className="text-xl text-white font-medium mb-3">Strengthen Revenue Growth</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Help leaders build a sustainable, highly-qualified pipeline, improve forecasting accuracy, and elevate overall team performance.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#booking">
                        Strengthen Your Sales Strategy
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Core Areas of Focus</h2>
</div>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-sm flex items-center gap-2 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Same Side Selling® Training
                    </div>
<div className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-sm flex items-center gap-2 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Sales Differentiation Frameworks
                    </div>
<div className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-sm flex items-center gap-2 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Revenue Growth Strategy
                    </div>
<div className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-sm flex items-center gap-2 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Sales Leadership Coaching
                    </div>
<div className="px-5 py-3 rounded-xl bg-zinc-900 border border-white/5 text-zinc-300 text-sm flex items-center gap-2 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Trust-Based Selling Techniques
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0c] border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="w-full aspect-[4/5] md:aspect-square rounded-3xl bg-zinc-900 border border-white/10 placeholder-media flex flex-col items-center justify-center shadow-xl">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:user-circle-linear" width="48"></iconify-icon>
<span className="text-zinc-500 font-mono text-xs tracking-widest uppercase">Image Placeholder</span>
<span className="text-zinc-600 text-xs mt-1">Ian Altman Portrait</span>
</div>

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Hi, I’m Ian Altman.</h2>
<div className="space-y-6 text-zinc-400 text-base leading-relaxed">
<p>
                                Through Grow My Revenue, I help organizations differentiate their value and build trust with buyers.
                            </p>
<p>
                                My mission is simple: help leaders and sales teams win more business without competing on price. By aligning with how modern executives make decisions, we remove the friction from the sales process.
                            </p>
</div>
<div className="mt-10">
<a className="text-orange-500 font-medium text-sm flex items-center gap-2 hover:text-orange-400 transition-colors w-fit pb-1 border-b border-orange-500/30 hover:border-orange-400" href="#booking">
                                Let's discuss your revenue strategy 
                                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="grid gap-4">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium text-base mb-2">Who is this designed for?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Sales leaders and organizations seeking stronger differentiation and more predictable revenue growth.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium text-base mb-2">Is this training or consulting?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Both — combining high-level strategy with practical, actionable frameworks your team can use immediately.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium text-base mb-2">Does this work for experienced sales teams?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Yes. The focus is improving buyer engagement and differentiation, which elevates even the most seasoned sales professionals.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium text-base mb-2">What makes Ian’s approach unique?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">The Same Side Selling® framework is fundamentally focused on trust and alignment, treating selling as a collaborative puzzle to solve rather than a battle to win.</p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 transition-colors">
<h4 className="text-white font-medium text-base mb-2">How do we get started?</h4>
<p className="text-zinc-400 text-sm leading-relaxed">Book a strategy call to discuss your current challenges and see if our approach aligns with your goals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#030303] border-t border-white/5" id="booking">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0c] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full mb-10 lg:mb-0">
<div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-[1.1]">
                            Strengthen Your Sales Differentiation
                        </h2>
<p className="text-zinc-400 text-base mb-8 leading-relaxed max-w-md">
                            Book a conversation with Ian Altman to explore how Same Side Selling® can help your team win more business without relying on price discounts.
                        </p>
<a className="inline-flex h-12 w-fit items-center justify-center gap-2.5 rounded-full bg-orange-500 px-8 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:scale-[1.02] shadow-[0_0_20px_rgba(249,115,22,0.2)]" href="#">
                            Book My Call
                        </a>
</div>

<div className="relative w-full h-[500px] bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden shadow-inner placeholder-media flex flex-col items-center justify-center text-center p-6">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:calendar-minimalistic-linear" width="40"></iconify-icon>
<span className="text-zinc-500 font-mono text-sm tracking-widest uppercase mb-2">Calendly Placeholder</span>
<p className="text-zinc-600 text-xs max-w-xs">Interactive calendar embed goes here.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#000000] border-t border-white/5 py-12 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<iconify-icon className="text-orange-500" icon="solar:chart-up-linear" width="18"></iconify-icon>
                Ian Altman | Grow My Revenue
            </div>
<div className="text-zinc-600 text-xs">
                © 2024 Grow My Revenue, LLC. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
