import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function triggerTsunami(event) {
            event.preventDefault();
            const overlay = document.getElementById('flood-overlay');
            const targetUrl = 'contact.html'; // Points to the internal contact page
            
            // Remove the translation to let it surge up
            overlay.classList.remove('translate-y-full');
            
            // Wait for animation to finish then redirect
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 800);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] translate-y-full pointer-events-none transition-transform duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]" id="flood-overlay">

<div className="absolute inset-0 bg-[#06b6d4]">

<div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-[#050b14] to-[#050b14] opacity-90"></div>

<svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="floodGrid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#floodGrid)" height="100%" width="100%"></rect>
</svg>
</div>
</div>

<a className="z-50 hover:bg-slate-200 transition-all duration-200 flex items-center gap-2 text-xs font-medium text-slate-950 tracking-tight bg-white rounded-lg pt-2 pr-4 pb-2 pl-4 absolute top-6 right-6 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] cursor-pointer no-underline" href="contact.html" onclick="triggerTsunami(event)">Work with us</a>

<div className="fixed inset-0 z-0 pointer-events-none opacity-40">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#06b6d4" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#06b6d4" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#06b6d4" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path className="animate-flow" d="M0,0 L1000,1000" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>
<path className="animate-flow delay-1" d="M100,0 L1100,1000" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>
<path className="animate-flow delay-2" d="M-200,0 L800,1000" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>
<path className="animate-flow delay-3" d="M100%,0 L0,1000" fill="none" stroke="url(#lineGradient)" strokeWidth="1"></path>

<circle className="animate-node delay-1" cx="20%" cy="30%" fill="#22d3ee" r="2"></circle>
<circle className="animate-node delay-2" cx="80%" cy="15%" fill="#22d3ee" r="2"></circle>
<circle className="animate-node" cx="50%" cy="50%" fill="#22d3ee" r="2"></circle>
<circle className="animate-node delay-3" cx="10%" cy="80%" fill="#22d3ee" r="2"></circle>
<circle className="animate-node delay-1" cx="90%" cy="70%" fill="#22d3ee" r="2"></circle>
</svg>

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/10 blur-[120px] rounded-full"></div>
</div>

<div className="flex flex-col max-w-7xl z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center">

<header className="mb-16 flex items-center justify-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-cyan-500 blur-md opacity-40 rounded-full"></div>
</div>
<span className="text-2xl font-medium text-white tracking-tight">Clearbyte </span>
</header>

<div className="w-full max-w-4xl mb-16 flex flex-wrap justify-center items-center gap-x-10 gap-y-8 opacity-60">
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity duration-300">
<svg className="lucide lucide-aperture w-5 h-5" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="font-semibold tracking-tight text-sm">OpenAI</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity duration-300">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="font-medium tracking-tight text-sm">Claude</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity duration-300">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-medium tracking-tight text-sm">Google Gemini</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity duration-300">
<svg className="lucide lucide-infinity w-5 h-5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="font-bold tracking-tight text-sm">Meta</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity duration-300">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-bold tracking-tight text-sm">Zapier</span>
</div>
</div>

<main className="w-full max-w-[680px] rounded-3xl border border-cyan-500/40 shadow-[0_0_60px_-15px_rgba(6,182,212,0.15)] bg-[#0b121e] relative overflow-hidden backdrop-blur-sm">

<div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-600/20 via-[#0b121e]/20 to-transparent pointer-events-none"></div>
<div className="relative p-8 md:p-12">

<h1 className="sm:text-4xl leading-[1.15] text-3xl font-medium text-white tracking-tight mb-10">
    Empowering Businesses with <br/>
<span className="text-cyan-400">Tailored AI Solutions.</span>
</h1>

<div className="leading-relaxed text-lg font-light text-slate-400 space-y-8">
<p className="">The narrative around Artificial Intelligence is dominated by noise. Every business knows they need to adopt AI, but few understand how to do it securely, effectively, and at scale. The risk isn't just falling behind—it's implementing powerful tools without the right guardrails.</p>
<p className="">
                        At Clearbyte, we bridge the gap between abstract potential and business-grade implementation. We don't just "install" AI; we engineer the cognitive architecture of your future organization.
                    </p>
<p className="text-slate-200 font-normal">
                        Our approach is built on three pillars:
                    </p>

<div className="grid gap-6 my-8">

<div className="flex gap-4 items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
<div className="mt-1 bg-cyan-900/30 p-2 rounded-lg text-cyan-400">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-base tracking-tight mb-1">Consulting &amp; Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                                    We analyze your existing workflows to uncover high-ROI areas where AI can drive real efficiency, separating hype from strategic value.
                                </p>
</div>
</div>

<div className="flex gap-4 hover:border-cyan-500/30 transition-colors duration-300 bg-slate-800/30 border-slate-700/50 border rounded-xl pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4 items-start">
<div className="mt-1 bg-cyan-900/30 p-2 rounded-lg text-cyan-400">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-base tracking-tight mb-1">Bespoke AI Systems</h3>
<p className="leading-relaxed text-sm text-slate-400">We design and build bespoke AI agents and integration layers tailored specifically to your data, privacy needs, and infrastructure.</p>
</div>
</div>

<div className="flex gap-4 items-start p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors duration-300">
<div className="mt-1 bg-cyan-900/30 p-2 rounded-lg text-cyan-400">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-base tracking-tight mb-1">Team Education + Training</h3>
<p className="leading-relaxed text-sm text-slate-400">We bridge the knowledge gap through workshops and training, ensuring your workforce can leverage AI tools confidently and responsibly.</p>
</div>
</div>
</div>
<p className="">
                        We’re not here to sell you a chatbot. We are here to help you navigate the single biggest technological shift of our lifetime with clarity and confidence.
                    </p>
<p className="text-white font-medium">
                        The future belongs to those who integrate intelligence securely. Let's build that future together.
                    </p>
</div>

<div className="mt-12 flex justify-end">
<a className="hover:bg-slate-200 transition-all duration-200 inline-flex items-center gap-2 group shadow-white/5 text-sm font-medium text-slate-950 bg-white rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-lg cursor-pointer no-underline" href="contact.html" onclick="triggerTsunami(event)">Work with us</a>
</div>
</div>
</main>

<div className="h-24"></div>
</div>


    </>
  );
}
