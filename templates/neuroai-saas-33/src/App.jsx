import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            // Showcase Tabs
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Reset buttons
                    tabBtns.forEach(b => {
                        b.classList.remove('border-white/10', 'bg-white/5', 'text-white');
                        b.classList.add('border-transparent', 'text-neutral-400');
                    });
                    // Set active button
                    btn.classList.add('border-white/10', 'bg-white/5', 'text-white');
                    btn.classList.remove('border-transparent', 'text-neutral-400');

                    // Switch content
                    const target = btn.getAttribute('data-target');
                    tabContents.forEach(content => {
                        content.classList.remove('opacity-100', 'z-10');
                        content.classList.add('opacity-0', 'z-0');
                    });
                    const activeContent = document.getElementById(`view-${target}`);
                    activeContent.classList.remove('opacity-0', 'z-0');
                    activeContent.classList.add('opacity-100', 'z-10');
                });
            });

            // Pricing Toggle
            const pricingBtns = document.querySelectorAll('.pricing-toggle-btn');
            const pricingBg = document.getElementById('pricing-bg');
            const priceVals = document.querySelectorAll('.price-val');

            pricingBtns.forEach((btn, index) => {
                btn.addEventListener('click', () => {
                    const plan = btn.getAttribute('data-plan');
                    
                    // Move background
                    if(plan === 'monthly') {
                        pricingBg.style.transform = 'translateX(0)';
                    } else {
                        pricingBg.style.transform = 'translateX(100%)';
                    }

                    // Update text colors
                    pricingBtns.forEach(b => {
                        b.classList.remove('text-white');
                        b.classList.add('text-neutral-400');
                    });
                    btn.classList.add('text-white');
                    btn.classList.remove('text-neutral-400');

                    // Update prices
                    priceVals.forEach(val => {
                        val.textContent = val.getAttribute(`data-${plan}`);
                    });
                });
            });
            
            // Details single open
            const details = document.querySelectorAll("details");
            details.forEach((targetDetail) => {
                targetDetail.addEventListener("click", () => {
                    details.forEach((detail) => {
                        if (detail !== targetDetail) {
                            detail.removeAttribute("open");
                        }
                    });
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">NeuroAI</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
</div>
<div className="hidden md:flex items-center gap-4 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">Start Free Trial</a>
</div>
<button className="md:hidden text-neutral-400 hover:text-white" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden border-t border-white/5 bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4 text-sm font-medium" id="mobile-menu">
<a className="text-neutral-400 hover:text-white" href="#features">Features</a>
<a className="text-neutral-400 hover:text-white" href="#pricing">Pricing</a>
<a className="text-neutral-400 hover:text-white" href="#">Log in</a>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="glow-bg"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
                NeuroAI 2.0 is here: Now with Code Assistant
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight max-w-4xl mx-auto">
                The all-in-one AI workspace for <span className="text-gradient">creation &amp; development.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Generate content, automate workflows, and write code faster with an intelligent assistant designed for modern teams.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                    Start Building Free
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors" href="#">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Demo
                </a>
</div>

<div className="relative mx-auto max-w-5xl rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-2 shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-blue-500/10 opacity-50"></div>
<div className="relative rounded-xl border border-white/5 bg-[#0f0f11] overflow-hidden flex flex-col md:flex-row h-[400px] md:h-[600px]">

<div className="hidden md:flex flex-col w-64 border-r border-white/5 p-4 bg-[#0a0a0a]">
<div className="flex items-center gap-2 mb-8 px-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600"></div>
<span className="text-sm font-medium text-white">Project Alpha</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm font-medium">
<iconify-icon icon="solar:pen-linear" width="18"></iconify-icon> Writer
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:code-linear" width="18"></iconify-icon> Code Gen
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:bg-white/5 hover:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon> Automations
                            </div>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[#0f0f11]">

<div className="h-14 border-b border-white/5 flex items-center px-6">
<div className="text-sm font-medium text-neutral-300">Blog Post Generator</div>
</div>

<div className="flex-1 p-6 flex flex-col gap-4">
<div className="w-3/4 h-8 rounded-md bg-white/5 animate-pulse"></div>
<div className="w-full h-4 rounded-md bg-white/5 animate-pulse"></div>
<div className="w-5/6 h-4 rounded-md bg-white/5 animate-pulse"></div>
<div className="w-full h-4 rounded-md bg-white/5 animate-pulse"></div>

<div className="absolute bottom-6 right-6 w-72 rounded-xl border border-white/10 bg-[#171717] shadow-xl p-4">
<div className="flex items-center gap-2 mb-3 text-sm font-medium text-white">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear"></iconify-icon> AI Assistant
                                </div>
<div className="text-xs text-neutral-400 mb-3 bg-black/50 p-2 rounded border border-white/5">
                                    Optimizing paragraph for SEO...
                                </div>
<div className="flex gap-2">
<div className="h-2 flex-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#0a0a0a]/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-500 mb-6 tracking-wide uppercase">Trusted by innovative teams worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tighter">Acme Corp</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><iconify-icon icon="solar:atom-linear" width="24"></iconify-icon> Quantum</span>
<span className="text-xl font-semibold tracking-tighter">GlobalNet</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon> Loop</span>
<span className="text-xl font-semibold tracking-tighter">Stark Inc</span>
</div>
</div>
</section>

<section className="py-24 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">One platform. Infinite possibilities.</h2>
<p className="text-base text-neutral-400 max-w-2xl mx-auto">Replace multiple isolated tools with a unified AI ecosystem designed to accelerate your entire workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">AI Writer</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Generate high-converting copy, blog posts, and marketing materials in seconds with context-aware models.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Chat Assistant</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Train conversational agents on your data to handle customer support or internal knowledge queries.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Smart Automations</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Connect your favorite apps and let AI route data, trigger actions, and summarize information automatically.</p>
</div>

<div className="group p-6 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Coding Copilot</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Write boilerplate, debug issues, and refactor architecture with an AI pair programmer inside your IDE.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">From idea to execution in seconds</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-lg font-semibold text-white mb-6 shadow-xl">1</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Provide Context</h3>
<p className="text-sm text-neutral-400">Input your prompt, connect your database, or describe the goal you want to achieve.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border border-indigo-500/30 flex items-center justify-center text-lg font-semibold text-indigo-400 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">2</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">AI Processing</h3>
<p className="text-sm text-neutral-400">Our models analyze intent, structure logic, and generate the optimal output in real-time.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center text-lg font-semibold text-white mb-6 shadow-xl">3</div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Review &amp; Deploy</h3>
<p className="text-sm text-neutral-400">Get production-ready content, code, or workflows that you can instantly utilize.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Designed for every workflow</h2>
<div className="flex flex-col gap-2" id="showcase-tabs">
<button className="tab-btn w-full text-left px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-medium text-sm transition-all" data-target="writer">
<div className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:document-text-linear" width="20"></iconify-icon>
                                Content Creation
                            </div>
</button>
<button className="tab-btn w-full text-left px-4 py-3 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white font-medium text-sm transition-all" data-target="code">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:code-linear" width="20"></iconify-icon>
                                Development
                            </div>
</button>
<button className="tab-btn w-full text-left px-4 py-3 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white font-medium text-sm transition-all" data-target="automation">
<div className="flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:share-circle-linear" width="20"></iconify-icon>
                                Workflows
                            </div>
</button>
</div>
</div>

<div className="w-full md:w-2/3 relative h-[350px] md:h-[450px]">

<div className="tab-content absolute inset-0 rounded-xl border border-white/10 bg-[#0f0f11] p-6 transition-opacity duration-300 opacity-100 z-10" id="view-writer">
<div className="h-8 border-b border-white/10 mb-4 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<h4 className="text-white font-medium text-lg mb-2">10 Ways AI is changing marketing</h4>
<div className="space-y-3">
<div className="w-full h-4 bg-white/5 rounded"></div>
<div className="w-11/12 h-4 bg-white/5 rounded"></div>
<div className="w-full h-4 bg-white/5 rounded"></div>
<div className="w-4/5 h-4 bg-indigo-500/20 rounded border border-indigo-500/30 flex items-center px-2 text-xs text-indigo-300 font-medium">✨ AI generating next paragraph...</div>
</div>
</div>

<div className="tab-content absolute inset-0 rounded-xl border border-white/10 bg-[#0f0f11] p-6 transition-opacity duration-300 opacity-0 z-0" id="view-code">
<div className="h-8 border-b border-white/10 mb-4 flex items-center gap-2">
<span className="text-xs text-neutral-500 font-mono">api.ts</span>
</div>
<div className="font-mono text-xs text-neutral-400 space-y-2">
<div><span className="text-purple-400">import</span> { NextApiRequest, NextApiResponse } <span className="text-purple-400">from</span> <span className="text-green-400">'next'</span>;</div>
<br/>
<div><span className="text-purple-400">export default async function</span> <span className="text-blue-400">handler</span>(</div>
<div className="pl-4">req: NextApiRequest,</div>
<div className="pl-4">res: NextApiResponse</div>
<div>) {</div>
<div className="pl-4 text-neutral-600">// AI: Connecting to database</div>
<div className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> db.query(<span className="text-green-400">'SELECT * FROM users'</span>);</div>
<div className="pl-4">res.status(<span className="text-orange-400">200</span>).json(data);</div>
<div>}</div>
</div>
</div>

<div className="tab-content absolute inset-0 rounded-xl border border-white/10 bg-[#0f0f11] p-6 transition-opacity duration-300 opacity-0 z-0 flex items-center justify-center" id="view-automation">
<div className="flex flex-col items-center gap-4">
<div className="px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-sm font-medium">New Email Received</div>
<div className="w-px h-8 bg-white/20"></div>
<div className="px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> AI Summarize
                            </div>
<div className="w-px h-8 bg-white/20"></div>
<div className="flex gap-4">
<div className="px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-sm font-medium">Post to Slack</div>
<div className="px-4 py-2 rounded-lg bg-neutral-900 border border-white/10 text-sm font-medium">Update Notion</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">Built for modern teams</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Marketing Agencies</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Software Engineers</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Content Creators</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Startup Founders</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Product Managers</span>
<span className="px-4 py-2 rounded-full border border-white/10 text-sm text-neutral-300 hover:bg-white/5 cursor-default transition-colors">Students &amp; Researchers</span>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Plays nice with others</h2>
<p className="text-base text-neutral-400 max-w-xl mx-auto mb-12">Connect NeuroAI to your existing tech stack effortlessly. Import context and export results where you work.</p>
<div className="relative w-full max-w-3xl mx-auto h-[300px] flex items-center justify-center">

<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold tracking-tighter z-10 shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                    N
                </div>

<div className="absolute w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center top-10 left-[20%] text-neutral-400">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<div className="absolute w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center bottom-10 left-[30%] text-neutral-400">
<iconify-icon icon="solar:document-linear" width="24"></iconify-icon>
</div>
<div className="absolute w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center top-20 right-[25%] text-neutral-400">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div className="absolute w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center bottom-20 right-[20%] text-neutral-400">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0"></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Simple, transparent pricing</h2>

<div className="inline-flex items-center p-1 bg-black rounded-full border border-white/10 relative">
<div className="absolute w-1/2 h-[calc(100%-8px)] top-1 left-1 bg-white/10 rounded-full transition-transform duration-300" id="pricing-bg"></div>
<button className="pricing-toggle-btn relative z-10 w-24 py-1.5 text-sm font-medium text-white transition-colors" data-plan="monthly">Monthly</button>
<button className="pricing-toggle-btn relative z-10 w-24 py-1.5 text-sm font-medium text-neutral-400 transition-colors" data-plan="yearly">Yearly <span className="text-[10px] text-indigo-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-2xl bg-black border border-white/10 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-sm text-neutral-400 mb-6">Perfect for individuals starting with AI.</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight price-val" data-monthly="$15" data-yearly="$12">$15</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-center text-sm font-medium hover:bg-white/5 transition-colors mb-8" href="#">Get Started</a>
<div className="space-y-3 mt-auto">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 50,000 words/month
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Basic Chatbot
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 5 Automations
                        </div>
</div>
</div>

<div className="bg-gradient-border p-8 rounded-2xl shadow-2xl relative scale-100 md:scale-105 z-10 flex flex-col">
<div className="absolute top-0 right-6 transform -translate-y-1/2">
<span className="bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-400 mb-6">For professionals and small teams.</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight price-val" data-monthly="$49" data-yearly="$39">$49</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<a className="w-full py-2.5 rounded-lg bg-white text-black text-center text-sm font-medium hover:bg-neutral-200 transition-colors mb-8" href="#">Start 14-day Free Trial</a>
<div className="space-y-3 mt-auto">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited words
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Custom AI Personas
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited Automations
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> AI Code Assistant
                        </div>
</div>
</div>

<div className="p-8 rounded-2xl bg-black border border-white/10 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Enterprise</h3>
<p className="text-sm text-neutral-400 mb-6">Custom solutions for large organizations.</p>
<div className="mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">Custom</span>
</div>
<a className="w-full py-2.5 rounded-lg border border-white/10 text-white text-center text-sm font-medium hover:bg-white/5 transition-colors mb-8" href="#">Contact Sales</a>
<div className="space-y-3 mt-auto">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated Support
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Custom Model Training
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; Advanced Security
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-12 text-center">Loved by builders</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#0f0f11] border border-white/5">
<div className="flex gap-1 mb-4 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"NeuroAI replaced three different tools in our stack. The code generation features alone have saved our dev team hours every week."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-medium text-white">JD</div>
<div>
<div className="text-sm font-medium text-white">John Doe</div>
<div className="text-xs text-neutral-500">CTO, TechStart</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0f0f11] border border-white/5">
<div className="flex gap-1 mb-4 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"The AI writer understands context better than anything else I've tried. It actually sounds like our brand voice now."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-medium text-white">SM</div>
<div>
<div className="text-sm font-medium text-white">Sarah Miller</div>
<div className="text-xs text-neutral-500">Marketing Director</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#0f0f11] border border-white/5">
<div className="flex gap-1 mb-4 text-indigo-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 mb-6 leading-relaxed">"Setting up automation workflows is incredibly intuitive. It feels like having an extra ops person on the team working 24/7."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-medium text-white">AL</div>
<div>
<div className="text-sm font-medium text-white">Alex Lee</div>
<div className="text-xs text-neutral-500">Operations Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-black border border-white/5 rounded-xl p-6" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white">
                        What models do you use under the hood?
                        <iconify-icon className="text-neutral-500 group-open:hidden" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-neutral-500 hidden group-open:block" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed">We utilize a combination of top-tier models including GPT-4, Claude 3, and our own proprietary models fine-tuned for specific tasks like coding and formatting to provide the best possible results.</p>
</details>
<details className="group bg-black border border-white/5 rounded-xl p-6">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white">
                        Is my data used to train your public models?
                        <iconify-icon className="text-neutral-500 group-open:hidden" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-neutral-500 hidden group-open:block" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed">No. We take privacy seriously. Data processed through Pro and Enterprise plans is never used to train our base models. Your data remains yours.</p>
</details>
<details className="group bg-black border border-white/5 rounded-xl p-6">
<summary className="flex justify-between items-center font-medium cursor-pointer text-white">
                        Can I cancel my subscription at any time?
                        <iconify-icon className="text-neutral-500 group-open:hidden" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="text-neutral-500 hidden group-open:block" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</summary>
<p className="text-neutral-400 mt-4 text-sm leading-relaxed">Yes, you can cancel your subscription from your billing dashboard at any time. You will retain access to your plan until the end of your current billing cycle.</p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-900/20 z-0"></div>
<div className="max-w-4xl mx-auto rounded-3xl bg-gradient-border p-1">
<div className="bg-black rounded-[23px] p-12 text-center relative z-10 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Ready to upgrade your workflow?</h2>
<p className="text-base text-neutral-400 mb-8 max-w-xl mx-auto">Join thousands of professionals building faster and smarter with NeuroAI.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-neutral-600" placeholder="Enter your email" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap" type="submit">
                        Start Free Trial
                    </button>
</form>
<p className="text-xs text-neutral-500 mt-4">14-day free trial. No credit card required.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white block mb-4" href="#">NeuroAI</a>
<p className="text-sm text-neutral-400 max-w-xs mb-6">The definitive AI workspace for modern teams to create, automate, and develop.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:figma-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2024 NeuroAI Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Systems Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
