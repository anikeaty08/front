import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-white flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-[#0145F2] rounded-full"></div>
                ZEFFRON
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888]">
<a className="hover:text-white transition-colors duration-200" href="#showcase">Showcase</a>
<a className="hover:text-white transition-colors duration-200" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors duration-200" href="#team">Team</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-[#E5E5E5] transition-all duration-200 tracking-tight" href="#contact">
                Start Building
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="glow-point top-0 left-1/2 -translate-x-1/2"></div>
<div className="max-w-5xl mx-auto text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#97B9CD] text-xs font-mono mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0145F2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0145F2]"></span>
</span>
                ENGINEERING EXCELLENCE
            </div>
<h1 className="reveal stagger-1 text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-6 text-white">
                We Architect the <span className="text-[#444]">Invisible.</span><br/>
<span className="text-gradient">Custom Software &amp; AI.</span>
</h1>
<p className="reveal stagger-2 text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Zeffron engineers the bespoke technical infrastructure that powers modern business. From complex cloud software to autonomous AI agents, we build the systems generic tools can't handle.
            </p>
<div className="reveal stagger-3 flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-[#0145F2] hover:bg-[#0039cc] text-white text-sm font-medium rounded transition-all duration-200 shadow-[0_0_20px_rgba(1,69,242,0.3)]">
                    Explore Engineering
                </button>
<button className="w-full md:w-auto px-8 py-3 border border-white/10 hover:border-white/20 hover:bg-white/5 text-[#E5E5E5] text-sm font-medium rounded transition-all duration-200">
                    Discuss Architecture
                </button>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0145F2]/30 to-transparent"></div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="showcase">
<div className="reveal mb-16 flex flex-col md:flex-row justify-between items-end gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2 text-white">Selected Works</h2>
<p className="text-[#888]">Bespoke platforms engineered for scale.</p>
</div>
<a className="text-sm text-[#0145F2] hover:text-[#4d82ff] flex items-center gap-1 transition-colors" href="#">View all projects <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
<div className="space-y-24">

<div className="reveal group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative rounded-lg overflow-hidden border border-white/10 bg-[#151515] aspect-[4/3] group-hover:border-[#0145F2]/40 transition-colors duration-500">

<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 z-10"></div>
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#0145F2]"></span>
<span className="text-xs font-mono text-[#0145F2] uppercase tracking-wide">Fintech</span>
</div>
<h3 className="text-3xl font-medium text-white mb-4">Alphacruise Core</h3>
<p className="text-[#888] leading-relaxed mb-8">
                        A bespoke high-frequency data aggregation engine. We replaced 4 fragmented SaaS tools with a single, real-time custom dashboard that handles 50k+ daily requests with sub-100ms latency.
                    </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">React</span>
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">GoLang</span>
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">AWS Lambda</span>
</div>
<div className="p-4 rounded bg-[#111] border border-white/5 flex items-start gap-3">
<i className="w-5 h-5 text-[#F7A505] mt-1" data-lucide="trending-up"></i>
<p className="text-sm text-gray-300">"Zeffron's architecture reduced our cloud spend by 60% while doubling throughput."</p>
</div>
</div>
</div>

<div className="reveal group relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-1">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[#977DFF]"></span>
<span className="text-xs font-mono text-[#977DFF] uppercase tracking-wide">EdTech AI</span>
</div>
<h3 className="text-3xl font-medium text-white mb-4">Techcify Tutor</h3>
<p className="text-[#888] leading-relaxed mb-8">
                        An adaptive RAG (Retrieval-Augmented Generation) pipeline. We fine-tuned Llama 3 on proprietary technical documentation to generate dynamic, context-aware exams for engineering students.
                    </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">Python</span>
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">Vector DB</span>
<span className="px-3 py-1 rounded border border-white/10 text-xs text-[#888] font-mono">Mistral</span>
</div>
<div className="p-4 rounded bg-[#111] border border-white/5 flex items-start gap-3">
<i className="w-5 h-5 text-[#977DFF] mt-1" data-lucide="zap"></i>
<p className="text-sm text-gray-300">"The AI accuracy is unmatched. We automated 95% of our grading workload."</p>
</div>
</div>
<div className="order-2 relative rounded-lg overflow-hidden border border-white/10 bg-[#151515] aspect-[4/3] group-hover:border-[#977DFF]/40 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 z-10"></div>
<img alt="Code AI" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0F0F0F]" id="capabilities">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-16 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Three Pillars of Engineering</h2>
<p className="text-[#888]">We don't offer generic services. We provide specialized architectural implementation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal stagger-1 glass-panel p-8 rounded-xl flex flex-col h-full group">
<div className="w-10 h-10 rounded bg-[#0145F2]/10 flex items-center justify-center mb-6 border border-[#0145F2]/20">
<i className="w-5 h-5 text-[#0145F2]" data-lucide="code-2"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Custom Software</h3>
<p className="text-[#888] text-sm mb-8 leading-relaxed">
                        When SaaS fails, we engineer platforms from the ground up prioritizing scalability and clean architecture.
                    </p>
<ul className="mt-auto space-y-3 border-t border-white/5 pt-6">
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#0145F2]" data-lucide="check"></i> Cloud-Native Systems
                        </li>
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#0145F2]" data-lucide="check"></i> High-Scale APIs
                        </li>
</ul>
</div>

<div className="reveal stagger-2 glass-panel p-8 rounded-xl flex flex-col h-full group">
<div className="w-10 h-10 rounded bg-[#977DFF]/10 flex items-center justify-center mb-6 border border-[#977DFF]/20">
<i className="w-5 h-5 text-[#977DFF]" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Custom AI Solutions</h3>
<p className="text-[#888] text-sm mb-8 leading-relaxed">
                        Intelligence tailored to your data. We fine-tune models to solve specific, high-value business problems.
                    </p>
<ul className="mt-auto space-y-3 border-t border-white/5 pt-6">
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#977DFF]" data-lucide="check"></i> LLM Fine-tuning
                        </li>
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#977DFF]" data-lucide="check"></i> Predictive Analytics
                        </li>
</ul>
</div>

<div className="reveal stagger-3 glass-panel p-8 rounded-xl flex flex-col h-full group">
<div className="w-10 h-10 rounded bg-[#F7A505]/10 flex items-center justify-center mb-6 border border-[#F7A505]/20">
<i className="w-5 h-5 text-[#F7A505]" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-medium mb-3 text-white">Intelligent Automation</h3>
<p className="text-[#888] text-sm mb-8 leading-relaxed">
                        The End of Manual Operations. We connect disjointed apps into a seamless, self-driving ecosystem.
                    </p>
<ul className="mt-auto space-y-3 border-t border-white/5 pt-6">
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#F7A505]" data-lucide="check"></i> Autonomous Agents
                        </li>
<li className="flex items-center gap-3 text-xs text-[#AAA] font-mono">
<i className="w-3 h-3 text-[#F7A505]" data-lucide="check"></i> Data Pipelines
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="pricing">
<div className="glow-point bottom-0 right-0 translate-x-1/2 translate-y-1/2 bg-[#977DFF] opacity-[0.08]"></div>
<div className="max-w-7xl mx-auto">
<div className="reveal text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Transparent Investment</h2>
<p className="text-[#888] max-w-xl mx-auto">We operate on a project basis or retainer. No hidden fees. Just clean code and delivered value.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal stagger-1 border border-white/10 rounded-xl p-8 bg-[#111] hover:border-white/20 transition-colors">
<h3 className="text-base font-medium text-white mb-2">Discovery &amp; Audit</h3>
<div className="text-3xl font-semibold text-white mb-6">$2,500 <span className="text-sm font-normal text-[#666]">/ one-time</span></div>
<p className="text-sm text-[#888] mb-8">Deep dive into your technical stack to identify bottlenecks and architecture plan.</p>
<button className="w-full py-2 border border-white/10 rounded text-sm font-medium text-white hover:bg-white/5 transition-colors mb-8">Get Started</button>
<ul className="space-y-3 text-sm text-[#AAA]">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> System Architecture Review</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> Database Optimization Plan</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> AI Feasibility Report</li>
</ul>
</div>

<div className="reveal stagger-2 relative border border-[#0145F2]/50 rounded-xl p-8 bg-[#111] shadow-[0_0_40px_rgba(1,69,242,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0145F2] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wide uppercase">Most Popular</div>
<h3 className="text-base font-medium text-white mb-2">Custom Build</h3>
<div className="text-3xl font-semibold text-white mb-6">Custom <span className="text-sm font-normal text-[#666]">/ project</span></div>
<p className="text-sm text-[#888] mb-8">End-to-end engineering of a specific software product, internal tool, or AI agent.</p>
<button className="w-full py-2 bg-[#0145F2] rounded text-sm font-medium text-white hover:bg-[#0039cc] transition-colors mb-8">Request Quote</button>
<ul className="space-y-3 text-sm text-[#E5E5E5]">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0145F2]" data-lucide="check-circle"></i> Full-Stack Development</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0145F2]" data-lucide="check-circle"></i> Custom UI/UX Design</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0145F2]" data-lucide="check-circle"></i> 3 Months Support</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0145F2]" data-lucide="check-circle"></i> IP Ownership Transfer</li>
</ul>
</div>

<div className="reveal stagger-3 border border-white/10 rounded-xl p-8 bg-[#111] hover:border-white/20 transition-colors">
<h3 className="text-base font-medium text-white mb-2">Enterprise Scale</h3>
<div className="text-3xl font-semibold text-white mb-6">Retainer <span className="text-sm font-normal text-[#666]">/ monthly</span></div>
<p className="text-sm text-[#888] mb-8">Dedicated engineering team acting as your fractional CTO and R&amp;D department.</p>
<button className="w-full py-2 border border-white/10 rounded text-sm font-medium text-white hover:bg-white/5 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-3 text-sm text-[#AAA]">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> Fractional CTO Service</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> 24/7 Infrastructure Monitoring</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#333]" data-lucide="check-circle"></i> Continuous CI/CD Updates</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0F0F0F]" id="team">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-16 flex flex-col md:flex-row justify-between items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-2 text-white">The Engineers</h2>
<p className="text-[#888]">Builders, not managers.</p>
</div>
<a className="text-sm text-[#888] hover:text-white transition-colors mt-4 md:mt-0" href="#">Join the collective →</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="reveal stagger-1 group">
<div className="aspect-square rounded-lg bg-[#222] mb-4 overflow-hidden relative">
<img alt="Team Member" className="object-cover w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium">Alex Chen</h4>
<p className="text-xs text-[#0145F2] font-mono mb-2">Lead Architect</p>
<p className="text-xs text-[#666]">Ex-Google Cloud. Specialist in distributed systems.</p>
</div>

<div className="reveal stagger-2 group">
<div className="aspect-square rounded-lg bg-[#222] mb-4 overflow-hidden relative">
<img alt="Team Member" className="object-cover w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium">Sarah Vance</h4>
<p className="text-xs text-[#977DFF] font-mono mb-2">AI Research Lead</p>
<p className="text-xs text-[#666]">PhD in NLP. Focused on LLM finetuning.</p>
</div>

<div className="reveal stagger-3 group">
<div className="aspect-square rounded-lg bg-[#222] mb-4 overflow-hidden relative">
<img alt="Team Member" className="object-cover w-full h-full opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium">Marcus Thorne</h4>
<p className="text-xs text-[#F7A505] font-mono mb-2">Automation Engineer</p>
<p className="text-xs text-[#666]">Expert in data pipelines and workflow orchestration.</p>
</div>

<div className="reveal group">
<div className="aspect-square rounded-lg bg-[#222] mb-4 overflow-hidden relative border border-dashed border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
<i className="w-8 h-8 text-[#444]" data-lucide="plus"></i>
</div>
<h4 className="text-white font-medium">You?</h4>
<p className="text-xs text-[#888] font-mono mb-2">Senior Engineer</p>
<p className="text-xs text-[#666]">We are looking for exceptional backend talent.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/10 bg-[#050505] text-center" id="contact">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">Ready to upgrade your infrastructure?</h2>
<p className="text-[#888] mb-10 text-lg font-light">
                Stop renting generic tools. Start building your own assets. Zeffron brings the engineering discipline required to scale.
            </p>
<button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0145F2] hover:bg-[#0039cc] text-white text-sm font-medium rounded transition-all duration-200">
                Book a Technical Strategy Session
                <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#444]">
<div className="font-mono uppercase tracking-widest">Zeffron Systems © 2024</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</section>


    </>
  );
}
