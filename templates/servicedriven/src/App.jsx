import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none technical-grid z-0"></div>
<div className="fixed inset-0 z-[-1]">
<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight cascade-gradient">Service Driven</span>
</div>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/5">
<a className="px-4 py-1.5 text-xs text-neutral-300 hover:text-white transition-colors cascade-hover" href="#solutions">Solutions</a>
<a className="px-4 py-1.5 text-xs text-neutral-300 hover:text-white transition-colors cascade-hover" href="#platform">Architecture</a>
<a className="px-4 py-1.5 text-xs text-neutral-300 hover:text-white transition-colors cascade-hover" href="#pricing">Results</a>
</div>

<button className="text-xs font-medium px-4 py-2 hover:opacity-80 transition-opacity cascade-gradient">
                Contact
            </button>
</div>
</nav>
<main className="relative z-10">

<section className="max-w-[1200px] mx-auto px-6 pt-16 pb-12">
<div className="max-w-4xl mx-auto text-center">

<h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[0.95] mb-6 animate-on-scroll text-gradient">
                    The operating system for<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">modern client services.</span>
</h1>

<p className="text-lg text-neutral-200 font-light leading-relaxed max-w-xl mx-auto mb-8 animate-on-scroll">
                    We combine high-fidelity website design with critical business infrastructure. 
                    Automated SEO, programmatic invoicing, and brand-driven media generation in one unified workflow.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll">
<button className="shiny-cta px-8 py-3.5 text-sm">
<span>Website Services</span>
</button>
<button className="px-8 py-3.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                        View Documentation
                        <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="mt-8 relative rounded-lg border border-white/10 bg-black/50 overflow-hidden aspect-[16/9] md:aspect-[21/9] group animate-on-scroll">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="grid grid-cols-3 h-full divide-x divide-white/5">

<div className="p-8 flex flex-col justify-between group-hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
<iconify-icon icon="lucide:bar-chart-2"></iconify-icon> SEO Intelligence
                        </div>
<div className="space-y-2">
<div className="h-1 bg-green-500/20 rounded w-full overflow-hidden">
<div className="h-full w-3/4 bg-green-500"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-400 font-mono">
<span>Organic Traffic</span>
<span className="text-green-400">+124%</span>
</div>
</div>
</div>

<div className="p-8 flex flex-col justify-between group-hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
<iconify-icon icon="lucide:receipt"></iconify-icon> Financial Ops
                        </div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded border border-white/5 bg-white/5">
<div className="w-16 h-1.5 bg-white/20 rounded"></div>
<div className="w-8 h-1.5 bg-blue-500 rounded"></div>
</div>
<div className="flex items-center justify-between p-2 rounded border border-white/5 bg-white/5 opacity-50">
<div className="w-12 h-1.5 bg-white/20 rounded"></div>
<div className="w-8 h-1.5 bg-neutral-600 rounded"></div>
</div>
</div>
</div>

<div className="p-8 flex flex-col justify-between group-hover:bg-white/[0.02] transition-colors">
<div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase">
<iconify-icon icon="lucide:aperture"></iconify-icon> Media Synthesis
                        </div>
<div className="relative w-full aspect-video bg-white/5 rounded border border-white/5 flex items-center justify-center">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
<iconify-icon className="text-white ml-0.5" icon="lucide:play" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-5 overflow-hidden marquee-wrapper bg-black">
<div className="marquee-content items-center">

<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:googleanalytics" width="30"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:ahrefs" width="80"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:adobe" width="30"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:figma" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:notion" width="30"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:stripe" width="50"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:googleanalytics" width="30"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:ahrefs" width="80"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:adobe" width="30"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:figma" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors" icon="simple-icons:notion" width="30"></iconify-icon>
</div>
</div>

<section className="relative bg-black overflow-hidden h-[700px] flex items-center" id="solutions">
<div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 grid grid-cols-1 md:grid-cols-2">
<div className="flex flex-col justify-center">
<div className="text-xs font-mono text-blue-400 mb-6 uppercase tracking-widest">Core Architecture</div>
<h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-[0.95]">
                        Integrated <br/>
<span className="text-neutral-500">Service Stack.</span>
</h2>
<p className="text-neutral-400 max-w-sm font-light leading-relaxed mb-10">
                        We don't just build websites. We deploy a complete business ecosystem. 
                        From the first pixel of your brand identity to the automated invoice sent to your client.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="mt-1 w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-900/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-blue-400" icon="lucide:search"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white cascade-hover cursor-default">SEO Optimization</h4>
<p className="text-xs text-neutral-500 mt-1">Technical audits, keyword architecture, and rank tracking.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-900/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-blue-400" icon="lucide:file-spreadsheet"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white cascade-hover cursor-default">Financial Design</h4>
<p className="text-xs text-neutral-500 mt-1">Branded invoicing, automated collection, and revenue dashboards.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-900/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-blue-400" icon="lucide:video"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white cascade-hover cursor-default">Media Production</h4>
<p className="text-xs text-neutral-500 mt-1">Video generation, motion graphics, and social assets.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="absolute right-[-10%] top-[-20%] bottom-[-20%] w-[60%] wall-container pointer-events-none opacity-60">
<div className="wall-grid h-full flex gap-6">

<div className="wall-column-up flex flex-col gap-6 w-full">
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-white text-2xl" icon="lucide:globe"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Web Design</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-blue-400 text-2xl" icon="lucide:search"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">SEO Strategy</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-purple-400 text-2xl" icon="lucide:palette"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Branding</span>
</div>

<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-white text-2xl" icon="lucide:globe"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Web Design</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-blue-400 text-2xl" icon="lucide:search"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">SEO Strategy</span>
</div>
</div>

<div className="wall-column-down flex flex-col gap-6 w-full pt-20">
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-green-400 text-2xl" icon="lucide:receipt"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Invoicing</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-red-400 text-2xl" icon="lucide:video"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Video Gen</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-white text-2xl" icon="lucide:layout"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">UI/UX</span>
</div>

<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-green-400 text-2xl" icon="lucide:receipt"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Invoicing</span>
</div>
<div className="wall-card p-6 rounded-lg aspect-[4/3] flex flex-col justify-between">
<iconify-icon className="text-red-400 text-2xl" icon="lucide:video"></iconify-icon>
<span className="text-xs font-mono text-neutral-400">Video Gen</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-16 border-b border-white/5" id="platform">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-medium text-white mb-4 tracking-tight">Capabilities</h2>
<p className="text-neutral-400 text-sm max-w-md">Precision tools for every stage of the client lifecycle.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="shiny-box p-10 relative group h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-lg bg-neutral-900 border border-white/10 text-white">
<iconify-icon icon="lucide:radar" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 cascade-hover cursor-default">Search Engineering</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        We treat SEO as a structural component, not an afterthought. Technical audits, schema implementation, and content architecture.
                    </p>
<div className="flex gap-2 mt-auto">
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Semrush</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Ahrefs</span>
</div>
</div>

<div className="shiny-box p-10 relative group h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-lg bg-neutral-900 border border-white/10 text-white">
<iconify-icon icon="lucide:credit-card" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 cascade-hover cursor-default">Revenue Operations</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Seamless invoicing integrated into your brand experience. Client portals, automated reminders, and financial reporting.
                    </p>
<div className="flex gap-2 mt-auto">
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Stripe</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Mercury</span>
</div>
</div>

<div className="shiny-box p-10 relative group h-full flex flex-col">
<div className="mb-8 p-3 w-fit rounded-lg bg-neutral-900 border border-white/10 text-white">
<iconify-icon icon="lucide:clapperboard" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 cascade-hover cursor-default">Brand &amp; Media</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        High-fidelity visual identity systems and video generation. We create assets that define market leadership.
                    </p>
<div className="flex gap-2 mt-auto">
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Figma</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400">Premiere</span>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5 relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-mono text-blue-500 uppercase tracking-widest">Workflow</span>
<h2 className="text-3xl md:text-5xl font-medium text-white mt-4 tracking-tight">The Execution Pipeline</h2>
</div>
<div className="relative">
<div className="absolute top-[24px] left-0 w-full h-px bg-white/10 z-0 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="group">
<div className="w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center mb-6 text-sm font-mono text-white group-hover:border-blue-500 transition-colors mx-auto md:mx-0">01</div>
<h4 className="text-lg text-white font-medium mb-2 text-center md:text-left">Audit</h4>
<p className="text-sm text-neutral-500 leading-relaxed text-center md:text-left">Full diagnostic of current digital footprint, SEO health, and brand gaps.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center mb-6 text-sm font-mono text-white group-hover:border-blue-500 transition-colors mx-auto md:mx-0">02</div>
<h4 className="text-lg text-white font-medium mb-2 text-center md:text-left">Architect</h4>
<p className="text-sm text-neutral-500 leading-relaxed text-center md:text-left">Strategy formulation. Design systems, financial workflows, and content mapping.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center mb-6 text-sm font-mono text-white group-hover:border-blue-500 transition-colors mx-auto md:mx-0">03</div>
<h4 className="text-lg text-white font-medium mb-2 text-center md:text-left">Deploy</h4>
<p className="text-sm text-neutral-500 leading-relaxed text-center md:text-left">Development and launch. Website, invoicing portals, and video assets go live.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center mb-6 text-sm font-mono text-white group-hover:border-blue-500 transition-colors mx-auto md:mx-0">04</div>
<h4 className="text-lg text-white font-medium mb-2 text-center md:text-left">Scale</h4>
<p className="text-sm text-neutral-500 leading-relaxed text-center md:text-left">Ongoing optimization. Rank tracking, new media generation, and revenue analysis.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-black relative" id="pricing">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight">Services</h2>
<p className="text-neutral-500 text-sm mt-2">Transparent engagement models for modern businesses.</p>
</div>
<div className="flex items-center gap-3 mt-6 md:mt-0">
<span className="text-xs font-medium text-white">Monthly</span>
<div className="toggle-switch active" onclick="this.classList.toggle('active')"></div>
<span className="text-xs font-medium text-neutral-500">Quarterly</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="shiny-pricing p-8 flex flex-col">
<div className="mb-6">
<div className="text-lg font-medium text-white">Identity</div>
<div className="text-sm text-neutral-500 mt-1">For emerging brands</div>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight text-white">$795</span>
<span className="text-xs text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Website Design &amp; Dev
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Brand Guidelines
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Basic SEO Setup
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-xs font-medium text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wide">Select</button>
</div>

<div className="shiny-pricing-featured p-8 relative flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-blue-600 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">Recommended</div>
<div className="mb-6">
<div className="text-lg font-medium text-white">Growth</div>
<div className="text-sm text-neutral-500 mt-1">Full service stack</div>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight text-white">$1,250</span>
<span className="text-xs text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="lucide:check-circle"></iconify-icon> Advanced SEO &amp; Reporting
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="lucide:check-circle"></iconify-icon> Invoicing System Setup
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="lucide:check-circle"></iconify-icon> Monthly Video Assets (2)
                            </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-400" icon="lucide:check-circle"></iconify-icon> Priority Support
                            </li>
</ul>
<button className="w-full py-3 bg-white rounded-lg text-xs font-medium text-black hover:bg-neutral-200 transition-colors uppercase tracking-wide">Capture</button>
</div>

<div className="shiny-pricing p-8 flex flex-col">
<div className="mb-6">
<div className="text-lg font-medium text-white">Enterprise</div>
<div className="text-sm text-neutral-500 mt-1">Complex infrastructure</div>
</div>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight text-white">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Full Operations Audit
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Dedicated Design Squad
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon> Custom Integrations
                            </li>
</ul>
<button className="w-full py-3 border border-white/10 rounded-lg text-xs font-medium text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wide">Transcend</button>
</div>
</div>
</div>
</section>

<footer className="bg-black/50 backdrop-blur-xl pt-20 pb-10 border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20">
<div>
<div className="inline-flex items-center gap-2 mb-6">
<span className="text-sm font-medium tracking-tight cascade-gradient">Service Driven</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs">
                            Architecting the intersection of high-end design and business utility.
                        </p>
</div>
<div className="grid grid-cols-2 gap-16 mt-10 md:mt-0">
<div>
<h4 className="text-xs font-mono text-white uppercase mb-4">Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">SEO &amp; Analytics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Web Design</a></li>
<li><a className="hover:text-white transition-colors" href="#">Video Production</a></li>
<li><a className="hover:text-white transition-colors" href="#">Financial Ops</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-mono text-white uppercase mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 uppercase font-mono">© 2024 Service Driven Inc. All rights reserved.</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] text-neutral-400 font-mono uppercase">Systems Operational</span>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
