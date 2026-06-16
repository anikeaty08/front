import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0F12]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00FF88] shadow-[0_0_10px_#00FF88]"></div>
<span className="text-sm font-semibold tracking-widest uppercase text-white">Geek Synergy</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors" href="#approach">Approach</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<button className="px-4 py-2 text-xs font-medium border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Contact Us
            </button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FF88] opacity-[0.07] blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-[#00FF88] mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse"></span>
                Next-Gen Enterprise AI
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                We Engineer AI Agents<br/>
<span className="text-neutral-500">That Run Your Business.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                From strategy to deployment, we design and integrate autonomous AI systems tailored to your complex enterprise workflows.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3.5 bg-[#00FF88] text-[#0B0F12] text-sm font-medium rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,136,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                        Start Your AI Roadmap
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-3.5 bg-transparent border border-neutral-700 text-white text-sm font-medium rounded-full hover:border-neutral-400 transition-colors">
                    Book a Consultation
                </button>
</div>
</div>

<div className="absolute bottom-20 left-10 hidden lg:block animate-pulse opacity-40">
<iconify-icon className="text-[#00FF88]" icon="solar:code-scan-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-40 right-10 hidden lg:block opacity-40">
<iconify-icon className="text-neutral-600" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 bg-[#0B0F12]" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 flex flex-col justify-between group h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-[#00FF88] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:tuning-square-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Agent Strategy</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            We map your operational bottlenecks and design a multi-agent roadmap that aligns with your business goals.
                        </p>
</div>
<div className="mt-8 h-px w-full bg-gradient-to-r from-[#00FF88]/50 to-transparent"></div>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col justify-between group h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-[#00FF88] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Agent Architecture</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Building secure, scalable LLM infrastructures with RAG pipelines and custom tool-use capabilities.
                        </p>
</div>
<div className="mt-8 h-px w-full bg-gradient-to-r from-[#00FF88]/50 to-transparent"></div>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col justify-between group h-full">
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-[#00FF88] group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:rocket-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Enterprise Deployment</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                            Seamless integration into your existing ERP, CRM, and cloud environments with enterprise-grade security.
                        </p>
</div>
<div className="mt-8 h-px w-full bg-gradient-to-r from-[#00FF88]/50 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="capabilities">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#00FF88]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">AI Agents Across<br/>Every Business Function</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">

<div className="glass-card p-8 rounded-2xl md:col-span-2 relative overflow-hidden group transition-all duration-300">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:chat-round-dots-linear" width="80"></iconify-icon>
</div>
<div className="flex flex-col justify-end h-full relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#00FF88]">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-semibold">Support</span>
</div>
<h3 className="text-2xl font-medium mb-2">Customer Support Automation</h3>
<p className="text-sm text-neutral-400 font-light">Autonomous tier-1 and tier-2 resolution with human handoff protocols.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#00FF88] transition-colors" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium mb-1">HR Assistant</h3>
<p className="text-xs text-neutral-400">Onboarding &amp; Policy Q&amp;A</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#00FF88] transition-colors" icon="solar:graph-up-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium mb-1">Sales Qualifier</h3>
<p className="text-xs text-neutral-400">Lead scoring &amp; outreach</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#00FF88] transition-colors" icon="solar:card-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium mb-1">Finance Agent</h3>
<p className="text-xs text-neutral-400">Invoice reconciliation</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col justify-between group hover:bg-white/10 transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-[#00FF88] transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
<div>
<h3 className="text-lg font-medium mb-1">Compliance</h3>
<p className="text-xs text-neutral-400">Real-time risk audit</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 relative overflow-hidden group transition-all duration-300 bg-gradient-to-br from-white/5 to-[#00FF88]/10">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:code-circle-linear" width="80"></iconify-icon>
</div>
<div className="flex flex-col justify-end h-full relative z-10">
<div className="flex items-center gap-2 mb-2 text-[#00FF88]">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<span className="text-xs uppercase tracking-wider font-semibold">Engineering</span>
</div>
<h3 className="text-2xl font-medium mb-2">DevOps Monitoring Agent</h3>
<p className="text-sm text-neutral-400 font-light">Predictive system health checks and automated incident response.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0B0F12]" id="approach">
<div className="max-w-7xl mx-auto">
<h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-16 text-center">Implementation Roadmap</h2>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0F12] border border-neutral-700 flex items-center justify-center relative z-10 mb-4 group-hover:border-[#00FF88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
<span className="text-xs font-mono text-neutral-400 group-hover:text-[#00FF88]">01</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Discover</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed px-2">Analyze data flows and identify high-value automation targets.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0F12] border border-neutral-700 flex items-center justify-center relative z-10 mb-4 group-hover:border-[#00FF88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
<span className="text-xs font-mono text-neutral-400 group-hover:text-[#00FF88]">02</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Design</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed px-2">Architect agent personas, tools, and guardrails.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0F12] border border-neutral-700 flex items-center justify-center relative z-10 mb-4 group-hover:border-[#00FF88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
<span className="text-xs font-mono text-neutral-400 group-hover:text-[#00FF88]">03</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Integrate</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed px-2">Connect to APIs, databases, and secure private environments.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0F12] border border-neutral-700 flex items-center justify-center relative z-10 mb-4 group-hover:border-[#00FF88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
<span className="text-xs font-mono text-neutral-400 group-hover:text-[#00FF88]">04</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Deploy</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed px-2">Phased rollout with human-in-the-loop monitoring.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-[#0B0F12] border border-neutral-700 flex items-center justify-center relative z-10 mb-4 group-hover:border-[#00FF88] group-hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300">
<span className="text-xs font-mono text-neutral-400 group-hover:text-[#00FF88]">05</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Optimize</h4>
<p className="text-xs text-neutral-500 font-light leading-relaxed px-2">Continuous fine-tuning based on performance metrics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                    Enterprise-grade AI.<br/>
<span className="text-[#00FF88]">Human-centered execution.</span>
</h2>
<p className="text-lg text-neutral-400 font-light mb-8">
                    We don't just write scripts. We engineer resilient, autonomous systems that adhere to strict enterprise security and compliance standards.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-[#00FF88]" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<span className="font-light">SOC 2 Compliant Deployments</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-[#00FF88]" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<span className="font-light">Custom Multi-Agent Orchestration</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<iconify-icon className="text-[#00FF88]" icon="solar:code-file-linear" width="24"></iconify-icon>
<span className="font-light">Deep API &amp; Legacy System Integration</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#00FF88] to-blue-500 blur-[100px] opacity-10"></div>
<div className="glass-card p-1 rounded-2xl border border-white/10">

<div className="bg-[#0e1215] rounded-xl p-6 font-mono text-xs leading-loose text-neutral-400">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<p><span className="text-purple-400">class</span> <span className="text-yellow-200">EnterpriseAgent</span>:</p>
<p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self, role, tools):</p>
<p className="pl-8">self.role = role</p>
<p className="pl-8">self.security_level = <span className="text-[#00FF88]">'HIGH'</span></p>
<p className="pl-8">self.connect_erp()</p>
<br/>
<p className="pl-4"><span className="text-purple-400">async def</span> <span className="text-blue-400">execute_task</span>(self, context):</p>
<p className="pl-8"><span className="text-gray-500"># Verify compliance constraints</span></p>
<p className="pl-8"><span className="text-purple-400">await</span> self.audit_log(context)</p>
<p className="pl-8"><span className="text-purple-400">return</span> self.llm.process(context)</p>
<br/>
<p className="animate-pulse text-[#00FF88]">_</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/2" id="results">
<div className="max-w-7xl mx-auto">
<div className="glass-card rounded-3xl p-10 md:p-16 border-t border-white/10 text-center md:text-left relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00FF88] blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 relative z-10">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">AI Agents Delivering<br/>Real Results.</h2>
<p className="text-neutral-400 font-light">Metrics from our recent enterprise fintech implementation.</p>
</div>
<div className="flex flex-col sm:flex-row gap-12">
<div>
<div className="text-4xl md:text-5xl font-medium text-[#00FF88] mb-1">60%</div>
<div className="text-sm text-neutral-400 font-medium">Faster Resolution</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-[#00FF88] mb-1">40%</div>
<div className="text-sm text-neutral-400 font-medium">Cost Reduction</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium text-[#00FF88] mb-1">24/7</div>
<div className="text-sm text-neutral-400 font-medium">Auto-Availability</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 text-center relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-t from-[#00FF88]/10 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8">Build Your<br/>AI Workforce.</h2>
<p className="text-neutral-400 text-lg font-light mb-10">
                Ready to transform your operations? Let's engineer the future of your business.
            </p>
<button className="px-10 py-4 bg-[#00FF88] text-[#0B0F12] text-sm font-semibold rounded-full hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] transition-all transform hover:-translate-y-1">
                Schedule Strategy Call
            </button>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<div className="font-mono mb-4 md:mb-0">GEEK SYNERGY © 2024</div>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">LinkedIn</a>
<a className="hover:text-neutral-400" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
