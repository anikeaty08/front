import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        // Modal Logic
        function openModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
        }

        function closeModal() {
            const modal = document.getElementById('demoModal');
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
        }

        // Close on clicking outside
        document.getElementById('demoModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Scroll Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); 
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center text-white group-hover:text-indigo-500 transition-colors duration-500">
<iconify-icon height="24" icon="solar:infinity-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-indigo-500/50 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">HOOHAI</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#features">Platform</a>
<a className="hover:text-white transition-colors duration-300" href="#methodology">Solutions</a>
<a className="hover:text-white transition-colors duration-300" href="#quote">Philosophy</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300" onclick="openModal()">
                    Login
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">

<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 leading-[1.1]">
                Interactive AI Interview<br/>&amp; Training Platform
            </h1>

<p className="reveal delay-200 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
                Hire better candidates in less time. Train teams faster with consistent results.
            </p>

<div className="reveal delay-300 flex justify-center">
<button className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] inline-flex items-center gap-2 transform hover:scale-105 duration-200" onclick="openModal()">
                    View Analysis Demo
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-12 border-y border-white/[0.06] bg-white/[0.01]" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal delay-100 p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06] hover:border-indigo-500/30 transition-all group">
<div className="h-10 w-10 flex items-center justify-center text-slate-300 mb-4 bg-white/[0.05] rounded-lg group-hover:text-indigo-400 transition-colors">
<iconify-icon height="24" icon="solar:user-speak-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-2">AI Interviewer</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Automate screening with adaptive, conversational AI agents.</p>
</div>

<div className="reveal delay-200 p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06] hover:border-indigo-500/30 transition-all group">
<div className="h-10 w-10 flex items-center justify-center text-slate-300 mb-4 bg-white/[0.05] rounded-lg group-hover:text-indigo-400 transition-colors">
<iconify-icon height="24" icon="solar:presentation-graph-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-2">AI Trainer</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Roleplay scenarios for sales and support teams.</p>
</div>

<div className="reveal delay-300 p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06] hover:border-indigo-500/30 transition-all group">
<div className="h-10 w-10 flex items-center justify-center text-slate-300 mb-4 bg-white/[0.05] rounded-lg group-hover:text-indigo-400 transition-colors">
<iconify-icon height="24" icon="solar:headset-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-2">AI Customer Service</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">24/7 intelligent support agents that learn from experts.</p>
</div>

<div className="reveal delay-100 p-6 rounded-xl bg-[#0A0A0A] border border-white/[0.06] hover:border-indigo-500/30 transition-all group">
<div className="h-10 w-10 flex items-center justify-center text-slate-300 mb-4 bg-white/[0.05] rounded-lg group-hover:text-indigo-400 transition-colors">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-2">Leadership Clone</h3>
<p className="text-xs text-slate-400 font-light leading-relaxed">Scale your management culture by digitizing mentorship.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Engineered for Human Capital.</h2>
<div className="max-w-3xl">
<p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                        We don't just automate; we enhance. Our frameworks are designed to remove bias, increase velocity, and standardize excellence across your organization.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-indigo-500 mb-4">01</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">CALIBRATION</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Defining the gold standard.</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>We ingest your company's values, successful transcripts, and performance data to create a custom AI baseline that mirrors your top performers.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-indigo-500 mb-4">02</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">INTERACTION</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Dynamic, real-time engagement.</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Candidates and employees interact with voice-enabled AI agents that probe deeply, challenge assumptions, and provide realistic scenarios.</p>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-indigo-500 mb-4">03</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">ANALYSIS</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Beyond keywords and resumes.</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Our engine scores interactions on empathy, problem-solving, and technical accuracy, generating detailed reports for hiring managers.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-indigo-500 mb-4">04</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">OPTIMIZATION</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Continuous improvement loops.</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>The system learns from hire outcomes and training progress, refining its models to become more predictive over time.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050505]" id="quote">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<iconify-icon className="mx-auto text-indigo-500 mb-8" height="32" icon="solar:quote-up-square-linear" width="32"></iconify-icon>
<p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                    "Hiring is the most important engine of growth. <span className="text-indigo-500 font-normal">HOOHAI makes it predictable.</span>"
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest">The Mission</p>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/[0.06]">
<div className="absolute inset-0 bg-indigo-900/5 mix-blend-overlay"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                Scale your team.<br/>
<span className="text-slate-500">Clone your culture.</span>
</h2>
<button className="reveal delay-100 px-8 py-4 bg-white text-black text-sm font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2" onclick="openModal()">
                Get Early Access
                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-md p-4 md:p-8" id="demoModal">

<div className="w-full max-w-5xl bg-[#0E0F14] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden flex flex-col md:flex-row">

<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-50 p-2 rounded-full hover:bg-white/5 bg-black/20 backdrop-blur-sm" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 bg-black/20 relative">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-indigo-500" icon="solar:videocamera-record-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white tracking-tight">Generated AI Clone</h3>
</div>

<div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">

<img alt="AI Clone Result" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
<iconify-icon className="text-white ml-1" height="32" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="h-1 bg-white/20 rounded-full overflow-hidden mb-2">
<div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-slate-400">
<span>00:14 / 01:30</span>
<span>HD</span>
</div>
</div>
</div>
</div>

<div className="w-full md:w-5/12 flex flex-col bg-[#0E0F14]">

<div className="p-6 md:p-8 border-b border-white/5">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white tracking-tight">Perception Analysis</h3>
</div>
<p className="text-xs text-slate-500 font-light">
                        Biometric processing complete. Session ID: #8X9-22
                    </p>
</div>

<div className="flex-1 p-6 md:p-8 overflow-y-auto">
<ul className="space-y-4 font-mono text-xs">

<li className="group">
<div className="flex justify-between items-center mb-1.5">
<span className="text-slate-500 uppercase tracking-wider text-[10px]">Posture</span>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Balanced</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[95%]"></div>
</div>
</li>

<li className="group">
<div className="flex justify-between items-center mb-1.5">
<span className="text-slate-500 uppercase tracking-wider text-[10px]">Gaze</span>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Direct / 98%</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[98%]"></div>
</div>
</li>

<li className="group">
<div className="flex justify-between items-center mb-1.5">
<span className="text-slate-500 uppercase tracking-wider text-[10px]">Gestures</span>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Natural</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[88%]"></div>
</div>
</li>

<li className="group">
<div className="flex justify-between items-center mb-1.5">
<span className="text-slate-500 uppercase tracking-wider text-[10px]">Engagement</span>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">High</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[92%]"></div>
</div>
</li>

<li className="group">
<div className="flex justify-between items-center mb-1.5">
<span className="text-slate-500 uppercase tracking-wider text-[10px]">Environment</span>
<span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Professional</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500/50 w-[100%]"></div>
</div>
</li>
</ul>
</div>

<div className="p-6 md:p-8 bg-black/20 border-t border-white/5 mt-auto">
<button className="w-full bg-white text-black font-semibold py-3.5 rounded-lg text-sm hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group">
<span>Book a Call to Deploy</span>
<iconify-icon className="group-hover:-translate-y-0.5 transition-transform" height="18" icon="solar:calendar-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white" height="20" icon="solar:infinity-linear" width="20"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-white uppercase">HOOHAI</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
                        The AI infrastructure for modern workforce development.
                    </p>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-wider">© 2024 HOOHAI.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="ri:linkedin-fill" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="ri:twitter-x-fill" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
