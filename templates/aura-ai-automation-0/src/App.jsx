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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black font-semibold text-xs tracking-tighter">A</div>
<span className="font-medium tracking-tight text-white group-hover:text-gray-300 transition-colors">Aura</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/10 hover:bg-white/15 border border-white/10 text-white px-4 py-2 rounded-full transition-all" href="#contact">
                Book Intro
                <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-600/20 blur-[120px] rounded-full opacity-40 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-10 h-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
<span>Now accepting new enterprise partners</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-white leading-[1.1]">
                Automate the <span className="text-gray-500">impossible.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We build intelligent autonomous agents that handle your complex workflows, data extraction, and customer interactions 24/7.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                    Start Automating
                    <iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-3 bg-black border border-white/10 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                    View Case Studies
                </button>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-gray-500 mb-8 uppercase tracking-widest">Powered by next-gen infrastructure</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:code-circle-linear"></iconify-icon> OpenAI</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon> Pinecone</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:layers-linear"></iconify-icon> LangChain</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon> Vercel</div>
</div>
</div>
</section>

<section className="py-24 relative" id="solutions">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Scalable Intelligence</h2>
<p className="text-gray-400 max-w-lg text-lg">Deploy custom AI architectures tailored to eliminate bottlenecks in your specific vertical.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Support Agents</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        LLMs trained on your knowledge base to resolve 80% of support tickets instantly without human intervention.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Data Extraction</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Turn unstructured PDFs, emails, and invoices into structured JSON data pushed directly to your CRM.
                    </p>
</div>

<div className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-400 mb-6 border border-rose-500/20">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Sales Outreach</h3>
<p className="text-sm text-gray-400 leading-relaxed">
                        Autonomous agents that research prospects and draft hyper-personalized outreach at unlimited scale.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Seamless integration into your existing stack.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xs font-medium">1</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Audit &amp; Analysis</h4>
<p className="text-sm text-gray-400">We map your workflows to identify high-impact automation opportunities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white text-xs font-medium">2</div>
<div className="w-px h-full bg-white/10 my-2"></div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Development</h4>
<p className="text-sm text-gray-400">Custom building the AI agents using secure, private instances.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center text-white text-xs font-medium shadow-[0_0_15px_rgba(99,102,241,0.5)]">3</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Deployment</h4>
<p className="text-sm text-gray-400">Live integration with Slack, Hubspot, Notion, or your custom ERP.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl rounded-full"></div>
<div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="text-[10px] uppercase tracking-wider text-gray-500">workflow_v1.json</div>
</div>
<div className="p-6 space-y-4 font-mono text-xs">
<div className="flex items-center gap-3 text-gray-400">
<iconify-icon className="text-emerald-400" icon="solar:login-2-linear"></iconify-icon>
<span>Trigger: New Lead (Webhook)</span>
</div>
<div className="w-px h-4 bg-white/10 ml-2.5"></div>
<div className="flex items-center gap-3 text-gray-400">
<iconify-icon className="text-indigo-400" icon="solar:cpu-bolt-linear"></iconify-icon>
<span>Action: Analyze intent with GPT-4o</span>
</div>
<div className="w-px h-4 bg-white/10 ml-2.5"></div>
<div className="flex items-center gap-3 text-gray-400">
<iconify-icon className="text-rose-400" icon="solar:database-linear"></iconify-icon>
<span>Action: Enrich data from LinkedIn</span>
</div>
<div className="w-px h-4 bg-white/10 ml-2.5"></div>
<div className="p-3 rounded border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 flex items-center justify-between">
<span>Success: Draft drafted in CRM</span>
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white mb-1 tracking-tight">100k+</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Tasks Automated</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white mb-1 tracking-tight">40h</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Saved Weekly Per Client</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white mb-1 tracking-tight">99.9%</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Uptime</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-medium text-white mb-1 tracking-tight">24/7</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">System Monitoring</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to scale without hiring?</h2>
<p className="text-lg text-gray-400 mb-10">Stop doing repetitive work. Let us build the engine that drives your business forward.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1.5 ml-1">Work Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-gray-600" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group" type="submit">
                    Get Free Consultation
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-gray-600 pt-2">No commitment required. We reply within 2 hours.</p>
</form>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none"></div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white font-semibold text-[10px]">A</div>
<span className="text-sm font-medium text-gray-400">Aura Systems © 2024</span>
</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
