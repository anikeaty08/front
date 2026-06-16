import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex flex-col">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-2xl text-[#00FF00]" icon="solar:bolt-linear"></iconify-icon>
<span className="font-manrope font-bold text-lg tracking-tight text-white group-hover:text-[#00FF00] transition-colors">SIGNAL PR</span>
</a>
<span className="text-[10px] font-mono text-neutral-500 tracking-widest ml-8">EST. 2025</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#process">How We Work</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FF00]/5 border border-[#00FF00]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
<span className="text-[10px] font-mono font-bold text-[#00FF00] tracking-wider">OPEN TO PROJECTS</span>
</div>
<a className="px-5 py-2 text-sm font-medium text-white border border-white/20 rounded-lg hover:border-[#00FF00] hover:text-[#00FF00] transition-all duration-300" href="https://calendly.com" target="_blank">
                    Book a Call
                </a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">

<div className="flex flex-col items-start">

<div className="reveal flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-[#00FF00] tracking-widest uppercase">Web3 PR + AI Search</span>
</div>

<h1 className="reveal delay-100 text-5xl lg:text-7xl font-manrope font-semibold tracking-tighter leading-[1.1] text-white mb-6">
                    BE VISIBLE IN <br/>
<span className="text-[#00FF00]">AI SEARCH</span> <br/>
                    &amp; MEDIA
                </h1>

<p className="reveal delay-200 text-lg text-neutral-400 max-w-lg mb-8 leading-relaxed font-light">
                    First Web3 agency combining traditional PR with AI search optimization. Get mentioned by ChatGPT, Perplexity, and featured in top-tier media.
                </p>

<div className="reveal delay-300 flex flex-wrap gap-4 mb-12">
<a className="px-6 py-3.5 text-sm font-medium text-white border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all" href="#services">
                        View Services →
                    </a>
<a className="px-6 py-3.5 text-sm font-bold text-black bg-[#00FF00] rounded-lg hover:bg-[#00FF00]/90 transition-all shadow-[0_0_20px_rgba(0,255,0,0.2)]" href="https://calendly.com" target="_blank">
                        Book a Call
                    </a>
</div>

<div className="reveal delay-300 w-full grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-2xl font-manrope font-bold text-white">50+</div>
<div className="text-[10px] font-mono text-neutral-500 mt-1">PROJECTS LAUNCHED</div>
</div>
<div>
<div className="text-2xl font-manrope font-bold text-white">$100M+</div>
<div className="text-[10px] font-mono text-neutral-500 mt-1">CLIENT VALUATION</div>
</div>
<div>
<div className="text-2xl font-manrope font-bold text-white">200+</div>
<div className="text-[10px] font-mono text-neutral-500 mt-1">MEDIA PLACEMENTS</div>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center items-center h-full min-h-[500px] relative reveal delay-200">
<div className="relative w-96 h-96">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00FF00] rounded-full shadow-[0_0_30px_#00FF00] z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#00FF00]/20 rounded-full animate-ring"></div>

<div className="absolute top-20 left-20 node-float">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-[180px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 origin-top-left absolute top-1 left-1"></div>
</div>
<div className="absolute bottom-20 right-20 node-float-delay">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-[180px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-[135deg] origin-top-left absolute top-1 left-1"></div>
</div>
<div className="absolute top-1/2 right-10 node-float">
<div className="w-3 h-3 bg-neutral-500 rounded-full"></div>
<div className="w-[140px] h-[1px] bg-white/10 absolute top-1.5 right-3"></div>
</div>

<div className="absolute top-16 left-10 bg-[#111] border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-neutral-400 node-float">
                        MEDIA
                    </div>
<div className="absolute bottom-16 right-10 bg-[#111] border border-white/10 px-3 py-1 rounded text-[10px] font-mono text-[#00FF00] node-float-delay">
                        AI SEARCH
                    </div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Core Services</span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold text-white tracking-tight">
                        WHAT WE <span className="text-neutral-600">DELIVER</span>
</h2>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group reveal bg-[#111111] border border-white/5 p-8 rounded-xl hover:border-[#00FF00]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-[#00FF00]" icon="solar:globe-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">WEB3 PR &amp; MEDIA RELATIONS</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 min-h-[60px]">
                        Tier-1 media coverage in CoinDesk, Cointelegraph, Decrypt. Press releases, thought leadership, and journalist relationships.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-[#00FF00] hover:text-white transition-colors group-hover:translate-x-1 duration-300" href="#">
                        Learn More <span className="ml-1">→</span>
</a>
</div>

<div className="group reveal delay-100 bg-[#111111] border border-white/5 p-8 rounded-xl hover:border-[#00FF00]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-[#00FF00]" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">AI SEARCH OPTIMIZATION (GEO)</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 min-h-[60px]">
                        Get mentioned by ChatGPT, Perplexity, Claude, Gemini. We optimize your content for AI citation patterns and build authority.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-[#00FF00] hover:text-white transition-colors group-hover:translate-x-1 duration-300" href="#">
                        Learn More <span className="ml-1">→</span>
</a>
</div>

<div className="group reveal delay-200 bg-[#111111] border border-white/5 p-8 rounded-xl hover:border-[#00FF00]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00FF00]/10 transition-colors">
<iconify-icon className="text-2xl text-white group-hover:text-[#00FF00]" icon="solar:microphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-3">PODCAST PLACEMENTS</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-8 min-h-[60px]">
                        Feature on top Web3 podcasts. Interview preparation, talking points, and distribution strategy included.
                    </p>
<a className="inline-flex items-center text-xs font-mono text-[#00FF00] hover:text-white transition-colors group-hover:translate-x-1 duration-300" href="#">
                        Learn More <span className="ml-1">→</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Our Proven Process</span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold text-white tracking-tight">
                        HOW WE WORK
                    </h2>
</div>
<div className="text-right">
<span className="font-mono text-xs text-neutral-500">// DUAL TRACK STRATEGY</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="reveal p-8 rounded-xl border border-white/10 bg-[#111111]">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
<h3 className="text-xl font-manrope font-bold text-white">PR PROCESS</h3>
<iconify-icon className="text-neutral-500" icon="solar:megaphone-linear"></iconify-icon>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">01</span>
<div>
<h4 className="text-white font-medium mb-1">Discovery</h4>
<p className="text-sm text-neutral-400 font-light">Deep dive into your project, competitors, and target audience analysis.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">02</span>
<div>
<h4 className="text-white font-medium mb-1">Strategy</h4>
<p className="text-sm text-neutral-400 font-light">Custom media plan with outlet targeting and narrative angles.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">03</span>
<div>
<h4 className="text-white font-medium mb-1">Outreach</h4>
<p className="text-sm text-neutral-400 font-light">Journalist relationships and personalized story pitching.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">04</span>
<div>
<h4 className="text-white font-medium mb-1">Amplification</h4>
<p className="text-sm text-neutral-400 font-light">Social proof, syndication, and ongoing coverage management.</p>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-xl border border-white/10 bg-[#111111]">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
<h3 className="text-xl font-manrope font-bold text-white">LLM OPTIMIZATION</h3>
<iconify-icon className="text-neutral-500" icon="solar:code-scan-linear"></iconify-icon>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">01</span>
<div>
<h4 className="text-white font-medium mb-1">Audit</h4>
<p className="text-sm text-neutral-400 font-light">Analyze current AI search visibility across ChatGPT, Perplexity, Claude.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">02</span>
<div>
<h4 className="text-white font-medium mb-1">Optimize</h4>
<p className="text-sm text-neutral-400 font-light">Content restructuring for AI citation patterns and semantic relevance.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">03</span>
<div>
<h4 className="text-white font-medium mb-1">Authority</h4>
<p className="text-sm text-neutral-400 font-light">Build authoritative sources and backlinks that LLMs trust.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-sm font-mono text-[#00FF00] pt-1">04</span>
<div>
<h4 className="text-white font-medium mb-1">Monitor</h4>
<p className="text-sm text-neutral-400 font-light">Track AI mentions weekly and adjust strategy based on results.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Client Results</span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold text-white tracking-tight">
                        PROVEN <span className="text-neutral-600">IMPACT</span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6 text-[#00FF00]">
<iconify-icon className="text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed mb-6">
                        "Signal PR got us mentioned in every major AI search engine within 3 weeks. The organic traffic uplift was immediate."
                    </p>
<div className="border-t border-white/5 pt-4">
<div className="text-white font-medium text-sm">Michael K.</div>
<div className="text-neutral-500 text-xs font-mono">CEO, DeFi Protocol</div>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6 text-[#00FF00]">
<iconify-icon className="text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed mb-6">
                        "Traditional PR wasn't enough. The AI optimization strategy helped us dominate the narrative during our token launch."
                    </p>
<div className="border-t border-white/5 pt-4">
<div className="text-white font-medium text-sm">Sarah A.</div>
<div className="text-neutral-500 text-xs font-mono">CMO, Layer 2 Chain</div>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-xl bg-[#111111] border border-white/5 hover:border-[#00FF00]/30 transition-colors">
<div className="mb-6 text-[#00FF00]">
<iconify-icon className="text-3xl" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<p className="text-lg text-neutral-300 font-light leading-relaxed mb-6">
                        "We secured coverage in CoinDesk and Bloomberg thanks to their connections. Professional and effective."
                    </p>
<div className="border-t border-white/5 pt-4">
<div className="text-white font-medium text-sm">James D.</div>
<div className="text-neutral-500 text-xs font-mono">Founder, NFT Marketplace</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex items-center text-sm font-mono text-[#00FF00] hover:text-white transition-colors border-b border-[#00FF00]/30 hover:border-white pb-1" href="#">
                    See All Case Studies <span className="ml-2">→</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="flex items-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Investment</span>
</div>
<h2 className="text-4xl md:text-5xl font-manrope font-semibold text-white tracking-tight mb-6">
                        YOUR VISIBILITY <br/> <span className="text-neutral-600">INVESTMENT</span>
</h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-8">
                        Every project is unique. We don't believe in cookie-cutter packages. Let's discuss your goals and create a custom strategy that maximizes your ROI.
                    </p>
<a className="inline-flex items-center px-8 py-4 bg-[#111] border border-[#00FF00]/30 text-[#00FF00] text-sm font-bold rounded-lg hover:bg-[#00FF00] hover:text-black transition-all group" href="https://calendly.com" target="_blank">
                        Get Custom Quote <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal delay-200">
<div className="relative bg-[#111111] border border-white/10 rounded-2xl p-8 max-w-md mx-auto shadow-2xl overflow-hidden group hover:border-[#00FF00]/20 transition-colors">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<span className="text-xs font-mono text-neutral-500">DASHBOARD_V1.0</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
</div>

<div className="mb-6">
<div className="text-[10px] font-mono text-neutral-500 mb-1">ESTIMATED REACH</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-manrope font-bold text-white tracking-tighter">98<span className="text-2xl text-[#00FF00]">%</span></span>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between text-[10px] font-mono text-neutral-500 mb-2">
<span>MEDIA OUTLETS</span>
<span className="text-white">TIER 1</span>
</div>
<div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-[#00FF00] w-[85%] rounded-full shadow-[0_0_10px_#00FF00]"></div>
</div>
</div>

<div className="flex justify-between items-center bg-white/5 p-4 rounded-lg border border-white/5">
<span className="text-xs text-neutral-400 font-medium">AI SENTIMENT</span>
<span className="px-2 py-1 bg-[#00FF00]/10 border border-[#00FF00]/20 text-[#00FF00] text-[10px] font-bold rounded uppercase tracking-wider">
                                POSITIVE
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] border-t border-white/5" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12 text-center reveal">
<div className="flex items-center justify-center gap-2 mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></span>
<span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Frequently Asked</span>
</div>
<h2 className="text-4xl font-manrope font-semibold text-white tracking-tight">QUESTIONS</h2>
</div>
<div className="space-y-4">

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        What makes Signal PR different?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        We are the only agency specifically bridging the gap between traditional media relations and LLM optimization. While others focus solely on press, we ensure your narrative is also picked up by the AI systems that millions of users query daily.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        What is AI Search Optimization (GEO)?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        Generative Engine Optimization (GEO) is the process of optimizing content and brand signals to appear in AI-generated answers (ChatGPT, Gemini, Perplexity). We structure your PR coverage so it serves as trusted training data for these models.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        Which media outlets do you work with?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        We maintain relationships with Tier-1 crypto media (Coindesk, Cointelegraph, The Block) and mainstream finance/tech publications (Bloomberg, TechCrunch, Forbes, Fortune).
                    </div>
</details>

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        How long does it take to see results?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        PR is a momentum game. Typically, we see initial placements within 2-4 weeks. AI Search Optimization results usually begin to reflect in 6-8 weeks as models update their index.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        Do you offer podcast placements?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        Yes. We have a dedicated podcast booking arm that secures interviews on top Web3 and technology podcasts to establish thought leadership.
                    </div>
</details>

<details className="group bg-[#111111] border border-white/10 rounded-lg overflow-hidden reveal">
<summary className="flex items-center justify-between p-6 cursor-pointer text-white font-medium hover:bg-white/5 transition-colors select-none">
                        What are your pricing models?
                        <iconify-icon className="text-neutral-500 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-neutral-400 font-light leading-relaxed text-sm">
                        We offer custom retainers based on your specific goals and timeline. We do not use cookie-cutter packages as every project requires a unique strategy.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-2xl text-[#00FF00]" icon="solar:bolt-linear"></iconify-icon>
<span className="font-manrope font-bold text-lg tracking-tight text-white">SIGNAL PR</span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                        Web3 PR + AI Search Optimization. <br/>The agency for the intelligence age.
                    </p>
<a className="text-white hover:text-[#00FF00] transition-colors text-sm" href="mailto:hello@signalpr.io">hello@signalpr.io</a>
</div>

<div className="hidden lg:block"></div>

<div>
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">NAVIGATION</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">How We Work</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="https://calendly.com" target="_blank">Contact</a>
</div>
</div>

<div>
<h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-6">CONNECT</h4>
<div className="flex flex-col gap-3">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Telegram</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 font-mono">© 2025 Signal PR. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-600 hover:text-white transition-colors font-mono" href="#">PRIVACY POLICY</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors font-mono" href="#">TERMS OF SERVICE</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
