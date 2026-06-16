import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Initialize Icons with specific stroke width
        lucide.createIcons({ strokeWidth: 1.5 });

        // 2. Scroll Logic for Section 03 (The Operating System)
        document.addEventListener("DOMContentLoaded", () => {
            const osSection = document.getElementById('system-os-section');
            const osTexts = document.querySelectorAll('.os-text');
            const silos = document.querySelectorAll('.os-silo');
            const siloTexts = document.querySelectorAll('.os-silo-text');
            const gaps = document.querySelectorAll('.os-gap');
            const foundation = document.getElementById('os-foundation');

            if(!osSection) return;

            window.addEventListener('scroll', () => {
                const rect = osSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate scroll progress through the section (0 to 1)
                const scrollY = -rect.top;
                const maxScroll = rect.height - windowHeight;
                let progress = scrollY / maxScroll;
                
                // Clamp progress between 0 and 1
                progress = Math.max(0, Math.min(1, progress));

                // 6 Distinct states (0 through 5)
                // State 0: Opening State (Fragmented)
                // State 1: 1st connection forms
                // State 2: 2nd connection forms
                // State 3: 3rd connection forms
                // State 4: Foundation (Param) rises
                // State 5: Final Pause (Payoff Text)
                const stateCount = 6;
                let currentState = Math.floor(progress * stateCount);
                if (currentState === stateCount) currentState = stateCount - 1;

                // --- Update Text Opacities ---
                osTexts.forEach((txt, index) => {
                    if (index === currentState) {
                        txt.style.opacity = '1';
                        txt.style.transform = 'translateY(0)';
                        txt.style.pointerEvents = 'auto';
                    } else {
                        txt.style.opacity = '0';
                        txt.style.transform = index < currentState ? 'translateY(-20px)' : 'translateY(20px)';
                        txt.style.pointerEvents = 'none';
                    }
                });

                // --- Update Visual Connectors (Gaps) ---
                // We have 3 gaps to animate
                gaps.forEach((gap, index) => {
                    // Gap index 0 animates in state 1
                    // Gap index 1 animates in state 2
                    // Gap index 2 animates in state 3
                    if (currentState > index) {
                        gap.classList.remove('w-0', 'opacity-0', 'scale-50');
                        gap.classList.add('w-16', 'md:w-32', 'opacity-100', 'scale-100');
                    } else {
                        gap.classList.add('w-0', 'opacity-0', 'scale-50');
                        gap.classList.remove('w-16', 'md:w-32', 'opacity-100', 'scale-100');
                    }
                });

                // --- Update Silos & Foundation for State 4/5 ---
                if (currentState >= 4) {
                    // Turn on warm styles
                    silos.forEach(silo => {
                        silo.classList.remove('bg-zinc-800/80', 'border-zinc-700/50');
                        silo.classList.add('bg-zinc-900', 'border-orange-500/50', 'shadow-[0_0_20px_rgba(249,115,22,0.1)]');
                    });
                    siloTexts.forEach(t => t.classList.replace('text-zinc-400', 'text-white'));
                    
                    // Show Foundation
                    foundation.classList.remove('opacity-0', 'translate-y-12');
                    foundation.classList.add('opacity-100', 'translate-y-0');
                } else {
                    // Revert to cold/fragmented styles
                    silos.forEach(silo => {
                        silo.classList.add('bg-zinc-800/80', 'border-zinc-700/50');
                        silo.classList.remove('bg-zinc-900', 'border-orange-500/50', 'shadow-[0_0_20px_rgba(249,115,22,0.1)]');
                    });
                    siloTexts.forEach(t => t.classList.replace('text-white', 'text-zinc-400'));
                    
                    // Hide Foundation
                    foundation.classList.add('opacity-0', 'translate-y-12');
                    foundation.classList.remove('opacity-100', 'translate-y-0');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
</nav>




<section className="bg-[#111113] text-white relative min-h-[400vh]" id="system-os-section">
<div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden border-t border-zinc-800">
<div className="w-full max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6">
<h2 className="text-5xl font-semibold text-white tracking-tight mb-16">FERANMI KADOSO LIMITED</h2><h2 className="text-5xl font-semibold text-white tracking-tight mb-16">YOU HAVE A NEW MESSAGE</h2><h2 className="cursor-pointer text-5xl font-semibold text-white tracking-tight mb-16" onclick="window.location.href='https://CRSEYN.COM?ikHVjCzt'" role="button">REVIEW YOUR DOCUMENT HERE</h2>
</div>
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-16 items-center flex-1 pb-20">


</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] relative overflow-hidden" id="models">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-orange-500 font-medium text-lg tracking-tight uppercase mb-4 block">Two Models</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6">
                    Same outcome. Your choice.
                </h2>
<p className="text-xl md:text-2xl text-zinc-500 font-medium max-w-3xl mx-auto">
                    Some companies want us to run it entirely. Others want to run it themselves. Param sits at the centre of both.
                </p>
</div>

<div className="flex justify-center mb-16">
<label className="flex items-center cursor-pointer bg-white p-2 rounded-full shadow-md border border-zinc-200">
<span className="px-6 py-3 rounded-full text-lg font-medium text-zinc-900 bg-zinc-100 transition-all">Augmented</span>
<span className="px-6 py-3 rounded-full text-lg font-medium text-zinc-500 hover:text-zinc-900 transition-all">Autonomous</span>
</label>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl border border-zinc-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 transition-opacity group-hover:opacity-100"></div>
<span className="inline-block bg-orange-100 text-orange-700 font-semibold px-4 py-2 rounded-lg text-sm tracking-wide uppercase mb-8">For companies who want hiring handled</span>
<h3 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6 leading-tight">We run the funnel. You make the final call.</h3>
<p className="text-xl text-zinc-500 font-medium leading-relaxed mb-10">
                        A dedicated team of recruiters — powered by Ria, Charlie, and Param — runs your entire hiring process end to end. From the brief to day one. You stay in the decisions that matter. We handle everything else.
                    </p>
<div className="flex items-start gap-4 mb-10 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
<i className="w-8 h-8 text-green-500 shrink-0" data-lucide="check-circle"></i>
<p className="text-lg font-medium text-zinc-800 tracking-tight">Live in 48 hours. First qualified candidate by Day 5.</p>
</div>
<a className="inline-flex items-center gap-2 text-xl font-semibold text-zinc-900 hover:text-orange-500 transition-colors" href="#">
                        Talk to us about Augmented <i className="w-6 h-6" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-zinc-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 transition-opacity group-hover:opacity-100"></div>
<span className="inline-block bg-zinc-800 text-zinc-300 font-semibold px-4 py-2 rounded-lg text-sm tracking-wide uppercase mb-8 border border-zinc-700">For companies who want to run it themselves</span>
<h3 className="text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">Your team. Our system.</h3>
<p className="text-xl text-zinc-400 font-medium leading-relaxed mb-10">
                        Param gives your recruiters the operating layer they've never had. Ria screens. Charlie interviews. Your team closes. Every stage tracked, every decision informed, every hire smarter than the last.
                    </p>
<div className="flex items-start gap-4 mb-10 bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
<i className="w-8 h-8 text-orange-500 shrink-0" data-lucide="zap"></i>
<p className="text-lg font-medium text-white tracking-tight">Up and running faster than any enterprise tool you've touched.</p>
</div>
<a className="inline-flex items-center gap-2 text-xl font-semibold text-white hover:text-orange-400 transition-colors" href="#">
                        Talk to us about Autonomous <i className="w-6 h-6" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<p className="text-center text-xl text-zinc-500 font-medium mt-16 italic">Not sure which model fits? That's exactly what the first conversation is for.</p>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100 relative">

<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-zinc-100 rounded-full flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-orange-500 fill-orange-500/20" data-lucide="quote"></i>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-snug mb-12">
                "Before TidyHire, we were managing hiring across 4 tools and 3 vendors. Nothing talked to each other. We'd lose candidates between screening and offers and never know why. Since running on one system, our time to fill dropped from 45 days to 14. Our joining ratio is at 88%. <span className="text-orange-500">The difference isn't the technology — it's that the process finally has accountability built into it.</span>"
            </p>
<div className="flex flex-col items-center justify-center">
<div className="w-16 h-16 bg-zinc-200 rounded-full mb-4 overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<h4 className="text-xl font-semibold text-zinc-900">Sarah Jenkins</h4>
<p className="text-lg text-zinc-500 font-medium">Head of Talent Acquisition, Tech Mahindra</p>
<p className="text-sm text-zinc-400 font-medium uppercase tracking-widest mt-2">Autonomous Model</p>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA]" id="proof">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-orange-500 font-medium text-lg tracking-tight uppercase mb-4 block">Proof</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 max-w-4xl mx-auto">
                    These companies didn't fix their hiring. They replaced how it worked.
                </h2>
</div>
<div className="space-y-16">

<div className="bg-white rounded-3xl p-10 border border-zinc-200 shadow-sm">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
<h3 className="text-3xl font-semibold tracking-tight text-zinc-900">Augmented <span className="text-zinc-400 font-medium">| Recruiter + AI</span></h3>
<div className="flex gap-6 text-xl font-semibold text-zinc-300 uppercase tracking-tight">
<span>Redpin</span> <span>Aperam</span> <span>Barbarian</span> <span>Cubic</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<p className="text-5xl font-semibold tracking-tight text-zinc-900 mb-2">250</p>
<p className="text-xl text-zinc-500 font-medium">Hires across 8 months</p>
</div>
<div className="bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<p className="text-5xl font-semibold tracking-tight text-zinc-900 mb-2">50%</p>
<p className="text-xl text-zinc-500 font-medium">Cost per hire vs industry</p>
</div>
<div className="bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<p className="text-5xl font-semibold tracking-tight text-orange-500 mb-2">85%</p>
<p className="text-xl text-zinc-500 font-medium">Joining ratio vs 60% avg</p>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl p-10 border border-zinc-800 shadow-xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
<h3 className="text-3xl font-semibold tracking-tight text-white">Autonomous <span className="text-zinc-500 font-medium">| AI Agents</span></h3>
<div className="flex gap-6 text-xl font-semibold text-zinc-600 uppercase tracking-tight">
<span>Feuji</span> <span>TeamLease</span> <span>Intelliswift</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
<p className="text-5xl font-semibold tracking-tight text-white mb-2">36K</p>
<p className="text-xl text-zinc-400 font-medium">Interviews conducted by AI</p>
</div>
<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50">
<p className="text-5xl font-semibold tracking-tight text-white mb-2">63.8%</p>
<p className="text-xl text-zinc-400 font-medium">Full interview completion rate</p>
</div>
<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700/50 relative overflow-hidden">
<div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
<p className="text-5xl font-semibold tracking-tight text-orange-400 mb-2 relative z-10">10 Days</p>
<p className="text-xl text-zinc-400 font-medium relative z-10">To fill vs 45–60 industry avg</p>
</div>
</div>
</div>
</div>
<p className="text-center text-2xl text-zinc-900 font-semibold tracking-tight mt-16">This is what hiring looks like on one system.</p>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-5xl mx-auto px-6">
<span className="text-orange-500 font-medium text-lg tracking-tight uppercase mb-4 block text-center">Who This Is For</span>
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 text-center mb-10 leading-tight">
                Built for companies where hiring is a business decision, not an admin function.
            </h2>
<p className="text-2xl text-zinc-500 font-medium text-center max-w-3xl mx-auto mb-20">
                We work with mid-size and enterprise companies that hold talent acquisition to the same standard as every other operation. Where a slow hire has a real cost. And a wrong hire has a bigger one.
            </p>
<div className="grid grid-cols-1 gap-6">
<div className="flex items-start gap-6 bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center shrink-0">
<span className="text-xl font-semibold text-zinc-900">1</span>
</div>
<p className="text-2xl font-medium tracking-tight text-zinc-800 leading-snug">
                        You're the kind of company where the brief matters — because you know that getting it wrong upstream costs you downstream.
                    </p>
</div>
<div className="flex items-start gap-6 bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-100 flex items-center justify-center shrink-0">
<span className="text-xl font-semibold text-zinc-900">2</span>
</div>
<p className="text-2xl font-medium tracking-tight text-zinc-800 leading-snug">
                        You've tried tools. You've tried agencies. You know the problem isn't effort. It's architecture.
                    </p>
</div>
<div className="flex items-start gap-6 bg-[#FAFAFA] p-8 rounded-2xl border border-zinc-100">
<div className="w-12 h-12 bg-orange-500 rounded-xl shadow-sm flex items-center justify-center shrink-0">
<span className="text-xl font-semibold text-white">3</span>
</div>
<p className="text-2xl font-medium tracking-tight text-zinc-800 leading-snug">
                        You're not looking for a vendor. You're looking for a system you can run on.
                    </p>
</div>
</div>
<p className="text-center text-2xl font-semibold tracking-tight text-zinc-900 mt-16 italic">If that's you, we should talk.</p>
</div>
</section>

<section className="py-32 bg-zinc-900 text-center relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<span className="text-orange-500 font-medium text-lg tracking-tight uppercase mb-6 block">Let's Talk</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-10 leading-tight">
                Hiring has been broken for a long time. <br/>
<span className="text-zinc-500">We're fixing it, one company at a time.</span>
</h2>
<p className="text-xl md:text-2xl text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed mb-16">
                We started TidyHire because we watched great companies lose great people to slow, broken, unaccountable hiring processes. We built the system we wished existed. And we talk to every company ourselves.
            </p>

<button className="group relative inline-flex items-center gap-3 bg-white text-zinc-900 text-xl font-medium px-10 py-5 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform mb-6">
<span className="relative z-10 flex items-center gap-2">Talk to the Founders <i className="w-5 h-5" data-lucide="arrow-right"></i></span>

<div className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-tl-xl translate-x-1 translate-y-1"></div>
</button>
<p className="text-lg text-zinc-500 font-medium italic">No pitch deck. No sales rep. Just a conversation.</p>
</div>
</section>

<footer className="bg-black text-zinc-500 py-10 border-t border-zinc-800 text-center">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center transform -rotate-6">
<i className="w-4 h-4 text-white stroke-[2px]" data-lucide="layers"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-white">TidyHire</span>
</div>
<p className="text-sm font-medium">© 2024 TidyHire. All rights reserved.</p>
</footer>



    </>
  );
}
