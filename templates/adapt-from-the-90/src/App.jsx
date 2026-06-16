import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
}
}
}
}



        function submitLeadMagnet(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" class="animate-spin"></iconify-icon> Processing Request';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = 'Report Sent to Inbox';
                btn.classList.remove('bg-white', 'text-black', 'hover:bg-neutral-200');
                btn.classList.add('bg-emerald-600', 'text-white');
                
                setTimeout(() => {
                    e.target.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.add('bg-white', 'text-black', 'hover:bg-neutral-200');
                    btn.classList.remove('bg-emerald-600', 'text-white');
                }, 3000);
            }, 1500);
        }

        function submitProjectForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const status = document.getElementById('formStatus');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="16" class="animate-spin"></iconify-icon> Encrypting & Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'APPLICATION RECEIVED';
                btn.classList.remove('bg-white', 'text-black', 'hover:bg-neutral-200');
                btn.classList.add('bg-neutral-800', 'text-emerald-500', 'border', 'border-emerald-500/20');
                
                status.classList.remove('hidden');
                status.innerHTML = '<span class="text-emerald-500 flex items-center justify-center gap-2"><iconify-icon icon="lucide:check-circle" width="14"></iconify-icon> We will review your architecture within 24 hours.</span>';
                
                e.target.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    btn.classList.add('bg-white', 'text-black', 'hover:bg-neutral-200');
                    btn.classList.remove('bg-neutral-800', 'text-emerald-500', 'border', 'border-emerald-500/20');
                    status.classList.add('hidden');
                }, 5000);
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-900/10 to-transparent blur-[120px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-3.5 h-3.5 bg-white rounded-[1px] group-hover:bg-emerald-400 transition-colors duration-300"></div>
<span className="text-sm font-medium tracking-tight text-white group-hover:text-emerald-100 transition-colors">VARIANT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#audit">Audit</a>
</div>
<a className="text-[13px] font-medium border border-white/10 bg-white/5 px-4 py-1.5 text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all rounded-[3px] flex items-center gap-2 group" href="#contact">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
<span>Initialize</span>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6 max-w-6xl mx-auto">
<div className="flex flex-col border-l border-white/10 pl-8 md:pl-12 relative items-start animate-fade-in">

<div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-[#0a0a0a] border border-neutral-800"></div>
<div className="absolute -left-[5px] bottom-0 w-[9px] h-[9px] bg-[#0a0a0a] border border-neutral-800"></div>
<div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/5 border border-white/5 rounded-full mb-8">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-mono text-emerald-400/90 uppercase tracking-wider">Systems Operational</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] font-medium text-white tracking-tighter mb-6 text-balance">
                High-Performance Web Architecture.<br/>
<span className="text-neutral-500">Deployed in 72 Hours.</span>
</h1>
<p className="max-w-xl text-neutral-400 text-sm md:text-base leading-relaxed font-light mb-10 text-balance animate-fade-in animate-delay-100">
                We engineer secure, enterprise-grade digital experiences designed to convert traffic into revenue. No bloat. No 12-week wait times.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in animate-delay-200">
<a className="group flex items-center justify-center gap-2 px-6 py-3 bg-white text-black text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto rounded-[3px]" href="#contact">
                    START PROJECT
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<a className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/10 text-neutral-300 text-xs font-medium hover:bg-white/5 hover:text-white transition-colors w-full sm:w-auto rounded-[3px]" href="#audit">
<iconify-icon className="text-neutral-500 group-hover:text-emerald-400 transition-colors" icon="lucide:scan-line" strokeWidth="1.5" width="14"></iconify-icon>
                    REQUEST AUDIT
                </a>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-y border-white/5 animate-fade-in animate-delay-300">
<div className="p-6 md:p-8 border-r border-white/5 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1 group-hover:text-emerald-400 transition-colors">72h</div>
<div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Deployment Time</div>
</div>
<div className="p-6 md:p-8 md:border-r border-white/5 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1 group-hover:text-emerald-400 transition-colors">100%</div>
<div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Lighthouse Score</div>
</div>
<div className="p-6 md:p-8 border-r border-t md:border-t-0 border-white/5 text-center group hover:bg-white/[0.02] transition-colors">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1 group-hover:text-emerald-400 transition-colors">SSL</div>
<div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Security Standard</div>
</div>
<div className="p-6 md:p-8 text-center border-t md:border-t-0 border-white/5 group hover:bg-white/[0.02] transition-colors">
<div className="text-2xl md:text-3xl font-medium tracking-tighter text-white mb-1 group-hover:text-emerald-400 transition-colors">ROI</div>
<div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Centric Design</div>
</div>
</div>
</main>

<section className="py-24 border-b border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
<h2 className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest">System Failure</h2>
</div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-12">The "Old Agency" model is broken.</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-[3px]">
<div className="w-10 h-10 bg-white/5 rounded-[3px] flex items-center justify-center border border-white/5 mb-6 text-neutral-300">
<iconify-icon icon="lucide:hourglass" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-3 tracking-tight">The 12-Week Wait</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Traditional agencies take a full quarter to launch. In the current market velocity, speed is your only sustainable competitive advantage.
                    </p>
</div>
<div className="p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-[3px]">
<div className="w-10 h-10 bg-white/5 rounded-[3px] flex items-center justify-center border border-white/5 mb-6 text-neutral-300">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-3 tracking-tight">Aesthetic Over Function</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Most sites are built as art portfolios, not conversion engines. We prioritize clarity, speed, and user flow—metrics that impact revenue.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
<h2 className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest">Protocol</h2>
</div>
<h3 className="text-3xl font-medium text-white tracking-tighter">Data-driven execution.</h3>
</div>
<p className="text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
                    We utilize a pre-configured architecture to eliminate redundancy. Stability, speed, and scalability from Day 0.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
<div className="bg-[#0a0a0a] p-10 group hover:bg-neutral-900/30 transition-colors">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded-[3px] mb-6 inline-block">01 // SCAN</span>
<h4 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">Competitor Analysis</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        We audit your sector's top performers. We extract their strategies and re-engineer them to outperform the baseline.
                    </p>
</div>
<div className="bg-[#0a0a0a] p-10 group hover:bg-neutral-900/30 transition-colors">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded-[3px] mb-6 inline-block">02 // ASSEMBLE</span>
<h4 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">Rapid Development</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Leveraging our component library allows for a 72-hour turnaround. Clean code, zero bloat, maximum efficiency.
                    </p>
</div>
<div className="bg-[#0a0a0a] p-10 group hover:bg-neutral-900/30 transition-colors">
<span className="text-[10px] font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded-[3px] mb-6 inline-block">03 // DEPLOY</span>
<h4 className="text-lg font-medium text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors">Launch &amp; Verify</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                        Instant analytics integration. Mobile responsiveness verification. We confirm system integrity before handover.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.01]" id="audit">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-[4px] relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl -z-10 rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-[3px] mb-5">
<iconify-icon className="text-emerald-500" icon="lucide:unlock" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-emerald-500 uppercase tracking-wide">Free Access</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Competitor Intelligence Report</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 font-light">
                            Stop designing blindly. Receive a granular analysis of your top 3 competitors' web infrastructure and SEO gaps.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
<span>Performance Benchmarks (CWV)</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
<span>Conversion Funnel Mapping</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
<span>Technical SEO Audit</span>
</li>
</ul>
</div>
<div className="w-full md:w-80">
<form className="space-y-4" onsubmit="submitLeadMagnet(event)">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2" htmlFor="lm-email">Work Email</label>
<input className="w-full input-primary px-3 py-2.5 rounded-[3px] text-sm placeholder:text-neutral-700" id="lm-email" placeholder="name@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2" htmlFor="lm-url">Company URL</label>
<input className="w-full input-primary px-3 py-2.5 rounded-[3px] text-sm placeholder:text-neutral-700" id="lm-url" placeholder="https://" required="" type="url"/>
</div>
<button className="w-full bg-white text-black px-4 py-3 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors rounded-[3px] flex items-center justify-center gap-2 mt-2" type="submit">
                                GENERATE REPORT
                                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<p className="text-[10px] text-neutral-600 text-center pt-2">Encrypted data processing.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="solutions">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest mb-3">Deployment Options</h2>
<h3 className="text-3xl font-medium text-white tracking-tighter">Transparent Architecture.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="flex flex-col p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-[3px] group">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 bg-white/5 border border-white/5 rounded-[3px] flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition-colors">
<iconify-icon icon="lucide:radar" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-[3px] text-neutral-500">DIAGNOSTIC</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Technical Audit</h3>
<p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed">
                        For organizations not ready for a rebuild. Deep dive analysis of current stack, security vulnerabilities, and conversion bottlenecks.
                    </p>
<ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
<li className="text-[11px] text-neutral-400 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Top 3 Competitor Matrix
                        </li>
<li className="text-[11px] text-neutral-400 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Actionable Architecture Plan
                        </li>
</ul>
</div>

<div className="flex flex-col p-8 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors rounded-[3px] group">
<div className="flex items-start justify-between mb-6">
<div className="w-10 h-10 bg-white/5 border border-white/5 rounded-[3px] flex items-center justify-center text-purple-400 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-colors">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-[10px] font-mono border border-white/10 px-2 py-1 rounded-[3px] text-neutral-500">CORE SYSTEM</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Full Stack Architecture</h3>
<p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed">
                        Complete multi-page digital infrastructure. CMS integration, analytics dashboard setup, and advanced SEO foundation.
                    </p>
<ul className="space-y-3 mt-auto border-t border-white/5 pt-6">
<li className="text-[11px] text-neutral-400 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span> 5-Page React/Static Structure
                        </li>
<li className="text-[11px] text-neutral-400 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Analytics Dashboard Setup
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#0a0a0a] py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white max-w-2xl leading-[1.1]">
                    Helping visionary enterprises engineer <span className="text-neutral-500">digital intelligence</span> that scales globally.
                </h2>
<a className="flex items-center gap-2 text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-colors" href="#contact">
                    Start a Project 
                    <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.02] p-8 rounded-[3px] border border-white/5 flex flex-col justify-between min-h-[300px]">
<div>
<div className="flex gap-1 mb-4">
<iconify-icon className="text-emerald-500" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon className="text-emerald-500" icon="lucide:star" width="14"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-4 leading-tight tracking-tight">
                            "Finally, a system that actually generates revenue."
                        </h3>
<p className="text-neutral-400 leading-relaxed text-sm font-light">
                            "Variant didn't just design a page, they built a sales instrument. First qualified lead arrived 14 hours post-launch."
                        </p>
</div>
<div className="mt-6 border-t border-white/5 pt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] text-white font-mono">SJ</div>
<div>
<div className="text-sm font-medium text-white leading-none mb-1">Sarah Jenkins</div>
<div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">CTO, Nexus Inc.</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] p-8 rounded-[3px] border border-white/5 flex flex-col items-center justify-between min-h-[300px]">
<div className="text-center w-full">
<span className="text-[10px] text-neutral-500 font-mono uppercase tracking-widest block mb-2 border-b border-white/5 pb-2">Core Web Vitals</span>
</div>
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="#262626" strokeWidth="4"></circle>
<circle cx="50" cy="50" fill="none" r="45" stroke="#10b981" stroke-dasharray="283" stroke-dashoffset="10" strokeLinecap="round" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-3xl font-medium text-white tracking-tighter">99</span>
</div>
</div>
<button className="w-full text-white/50 text-[10px] font-mono hover:text-white transition-colors uppercase tracking-widest">
                        View Lighthouse Report
                    </button>
</div>

<div className="flex flex-col bg-white/[0.02] min-h-[300px] border border-white/5 rounded-[3px] p-8 justify-between md:col-span-2 lg:col-span-1">
<div className="flex justify-between items-start text-white">
<span className="text-lg font-medium tracking-tight">Inquiries</span>
<iconify-icon className="text-neutral-600" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<p className="leading-relaxed text-sm text-neutral-400 font-light">
                        Initialize sequence. Whether you have a complex architecture problem or require a consultation, we are standing by.
                    </p>
<div className="space-y-4">
<a className="hover:text-white transition-colors flex text-sm text-neutral-300 gap-x-3 items-center group" href="mailto:hello@variant.sys">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-emerald-500" icon="lucide:mail" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="font-mono text-xs">hello@variant.sys</span>
</a>
<div className="flex gap-2 text-sm text-neutral-300 gap-x-3 items-center group cursor-default">
<div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
<iconify-icon className="text-neutral-400" icon="lucide:phone" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="font-mono text-xs">+1 (555) 019-2834</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-[11px] font-mono text-emerald-500 uppercase tracking-widest mb-3">Secure Slot</h2>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-4">
                    Ready to scale?
                </h3>
<p className="text-neutral-400 text-sm font-light">
                    We cap active builds to ensure 72-hour delivery standards.
                </p>
</div>
<form className="space-y-6 bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[4px]" id="projectForm" onsubmit="submitProjectForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Full Name</label>
<input className="w-full input-primary px-3 py-3 rounded-[3px] text-sm" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Work Email</label>
<input className="w-full input-primary px-3 py-3 rounded-[3px] text-sm" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Company Website</label>
<input className="w-full input-primary px-3 py-3 rounded-[3px] text-sm" name="website" placeholder="https://" type="url"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Budget Range</label>
<div className="relative">
<select className="w-full input-primary px-3 py-3 rounded-[3px] text-sm text-neutral-300" name="budget" required="">
<option disabled="" selected="" value="">Select Range</option>
<option value="1.5k-5k">$1,500 - $5,000</option>
<option value="5k-10k">$5,000 - $10,000</option>
<option value="10k+">$10,000+</option>
</select>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">Timeline</label>
<div className="relative">
<select className="w-full input-primary px-3 py-3 rounded-[3px] text-sm text-neutral-300" name="timeline" required="">
<option disabled="" selected="" value="">Select Timeline</option>
<option value="asap">ASAP (Priority)</option>
<option value="1month">Within 1 Month</option>
<option value="quarter">This Quarter</option>
</select>
</div>
</div>
</div>
<div>
<label className="block text-[10px] font-mono uppercase text-neutral-500 mb-2">System Pain Point</label>
<textarea className="w-full input-primary px-3 py-3 rounded-[3px] text-sm" name="message" placeholder="Describe the current bottlenecks..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black py-4 text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors rounded-[3px] flex items-center justify-center gap-2 mt-2" id="submitBtn" type="submit">
                    SUBMIT APPLICATION
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<div className="hidden text-center text-xs mt-4" id="formStatus"></div>
</form>
</div>
</section>

<footer className="bg-[#0a0a0a] py-12 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-neutral-800 rounded-[1px]"></div>
<span>Variant Systems © 2025</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<div className="flex items-center gap-2 text-emerald-900">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-emerald-500">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
