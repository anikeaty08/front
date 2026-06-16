import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center opacity-40">
<div className="w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] -top-32 absolute"></div>
<div className="w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] bottom-0 absolute"></div>
</div>

<main className="relative z-10 w-full flex flex-col items-center pt-24 pb-32 px-6 sm:px-8">

<header className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20 space-y-5">
<span className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium text-indigo-300 tracking-wider uppercase">
                Overview
            </span>
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
                Service Model
            </h1>
<p className="text-base text-[#9CA3AF]">
                Our implementation approach and project management methodology
            </p>
</header>

<section className="w-full max-w-[1000px] mb-24 flex flex-col items-center">
<h2 className="text-xl font-medium tracking-tight text-white mb-8">The 4 Pillars of Proliant</h2>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-[#4B5A73] hover:bg-[#1A2532]">
<div className="w-12 h-12 rounded-xl bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-blue-400 shadow-inner">
<i data-lucide="users"></i>
</div>
<span className="text-sm font-medium text-white">Access to People</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-[#4B5A73] hover:bg-[#1A2532]">
<div className="w-12 h-12 rounded-xl bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-teal-400 shadow-inner">
<i data-lucide="wand-2"></i>
</div>
<span className="text-sm font-medium text-white">Ease of Use</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-[#4B5A73] hover:bg-[#1A2532]">
<div className="w-12 h-12 rounded-xl bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-emerald-400 shadow-inner">
<i data-lucide="git-merge"></i>
</div>
<span className="text-sm font-medium text-white">Automation &amp; Integration</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-[#4B5A73] hover:bg-[#1A2532]">
<div className="w-12 h-12 rounded-xl bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-rose-400 shadow-inner">
<i data-lucide="rocket"></i>
</div>
<span className="text-sm font-medium text-white">Implementation</span>
</div>
</div>
</section>

<section className="w-full max-w-[1000px] mb-24 flex flex-col items-center">
<h2 className="text-xl font-medium tracking-tight text-white mb-8">Implementation Process</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">1</div>
<h3 className="text-base font-medium tracking-tight text-white">Welcome &amp; Discovery</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Establish foundational goals, outline the project scope, and introduce key team members to begin the journey.
                    </p>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">2</div>
<h3 className="text-base font-medium tracking-tight text-white">Data Migration</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Securely transfer historical data, validate integrity, and map properties to the new architecture.
                    </p>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">3</div>
<h3 className="text-base font-medium tracking-tight text-white">System Configuration</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Tailor the platform workflows, permissions, and automated processes specific to your organizational needs.
                    </p>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">4</div>
<h3 className="text-base font-medium tracking-tight text-white">Training &amp; Testing</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Comprehensive onboarding sessions coupled with rigorous user acceptance testing to ensure readiness.
                    </p>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">5</div>
<h3 className="text-base font-medium tracking-tight text-white">Go-Live Support</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Dedicated active monitoring and immediate assistance during your official transition to the live environment.
                    </p>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-2xl p-7 flex flex-col gap-3 group transition-colors hover:border-indigo-500/30">
<div className="flex items-center gap-3 mb-1">
<div className="w-7 h-7 rounded-full bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-xs text-[#9CA3AF] font-medium group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">6</div>
<h3 className="text-base font-medium tracking-tight text-white">Ongoing Partnership</h3>
</div>
<p className="text-sm text-[#9CA3AF] leading-relaxed font-normal">
                        Continuous check-ins, feature updates, and strategic guidance to maximize your long-term value.
                    </p>
</div>
</div>
</section>

<section className="w-full max-w-[900px] mb-24">
<div className="flex flex-col md:flex-row bg-[#18212C] border border-[#2E3A4D] rounded-[24px] overflow-hidden shadow-2xl shadow-black/20">

<div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
<div className="w-12 h-12 rounded-xl bg-[#0E131A] border border-[#2E3A4D] flex items-center justify-center text-blue-400 mb-6">
<i data-lucide="layout-grid"></i>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-4">
                        Project Management with Monday.com
                    </h2>
<p className="text-base text-[#9CA3AF] leading-relaxed mb-8">
                        We leverage industry-leading tools to provide full transparency, real-time updates, and seamless collaboration throughout your entire implementation journey.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<i className="text-indigo-400 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-[#E5E7EB]">Centralized workspace for all stakeholders</span>
</li>
<li className="flex items-center gap-3">
<i className="text-indigo-400 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-[#E5E7EB]">Real-time status updates and milestone tracking</span>
</li>
<li className="flex items-center gap-3">
<i className="text-indigo-400 w-5 h-5 flex-shrink-0" data-lucide="check-circle-2"></i>
<span className="text-sm text-[#E5E7EB]">Direct, contextual communication on deliverables</span>
</li>
</ul>
</div>

<div className="p-8 md:p-12 md:w-2/5 bg-[#0E131A]/50 border-t md:border-t-0 md:border-l border-[#2E3A4D] flex flex-col justify-center relative overflow-hidden">
<span className="text-[10px] font-medium tracking-[0.15em] text-[#6B7280] uppercase mb-6 block">
                        Typical Implementation Board Includes
                    </span>
<div className="space-y-3 relative z-10">

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-xl p-3.5 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-sm text-[#D1D5DB] font-medium">Timeline &amp; Phases</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-xl p-3.5 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-sm text-[#D1D5DB] font-medium">Data Architecture</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-xl p-3.5 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<span className="text-sm text-[#D1D5DB] font-medium">Integration Tasks</span>
</div>

<div className="bg-[#18212C] border border-[#2E3A4D] rounded-xl p-3.5 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
<span className="text-sm text-[#D1D5DB] font-medium">Testing Protocols</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[800px]">
<div className="bg-gradient-to-b from-[#18212C] to-[#0E131A] border border-[#2E3A4D] rounded-[24px] p-10 md:p-12 text-center flex flex-col items-center relative overflow-hidden shadow-2xl shadow-black/20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="w-12 h-12 flex items-center justify-center mb-6">
<i className="w-8 h-8 text-indigo-400" data-lucide="sparkles"></i>
</div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-3">
                    Implementation is the foundation of our success...
                </h2>
<p className="text-base text-[#9CA3AF] max-w-xl">
                    Our structured approach ensures you go live with confidence, stability, and a system ready to scale.
                </p>
</div>
</section>
</main>


    </>
  );
}
