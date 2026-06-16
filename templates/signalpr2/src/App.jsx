import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Intersection Observer for scroll animations
document.addEventListener("DOMContentLoaded", () => {
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
// Trigger counter animation if it's the dashboard
if(entry.target.id === 'pricing-section') {
animateCounter();
document.getElementById('progress-bar').classList.add('animate-fill-bar');
}
}
});
}, observerOptions);
document.querySelectorAll('.reveal-group').forEach(el => observer.observe(el));
// Header Scroll Effect
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
if (window.scrollY > 20) {
header.classList.add('glass-header');
header.classList.remove('bg-transparent');
} else {
header.classList.remove('glass-header');
header.classList.add('bg-transparent');
}
});
// FAQ Logic
document.querySelectorAll('.accordion-header').forEach(button => {
button.addEventListener('click', () => {
const item = button.parentElement;
const isActive = item.classList.contains('active');
// Close all others
document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
if (!isActive) {
item.classList.add('active');
}
});
});
// Counter Animation
let counted = false;
function animateCounter() {
if(counted) return;
const counter = document.getElementById('reach-counter');
if(!counter) return;
let start = 0;
const end = 98;
const duration = 2000;
const stepTime = Math.abs(Math.floor(duration / end));
const timer = setInterval(() => {
start += 1;
counter.innerText = start;
if (start == end) {
clearInterval(timer);
counted = true;
}
}, stepTime);
}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 py-4 px-6 lg:px-12 border-b border-transparent" id="main-header">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded bg-[#111] border border-white/10 group-hover:border-[#00FF00]/50 transition-colors">
<iconify-icon className="text-[#00FF00] text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-semibold tracking-tight text-lg leading-none">SIGNAL PR</span>
<span className="text-[#666] text-[10px] font-mono mt-1">EST. 2025</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 bg-[#111]/80 backdrop-blur-md px-8 py-3 rounded-full border border-white/5 shadow-2xl">
<a className="text-xs text-[#888] hover:text-[#00FF00] uppercase tracking-[0.15em] transition-colors font-medium" href="#services">Services</a>
<a className="text-xs text-[#888] hover:text-[#00FF00] uppercase tracking-[0.15em] transition-colors font-medium" href="#how-we-work">How We Work</a>
<a className="text-xs text-[#888] hover:text-[#00FF00] uppercase tracking-[0.15em] transition-colors font-medium" href="#results">Results</a>
<a className="text-xs text-[#888] hover:text-[#00FF00] uppercase tracking-[0.15em] transition-colors font-medium" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF00] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF00]"></span>
</div>
<span className="text-[10px] text-[#00FF00] font-mono tracking-wider">OPEN TO PROJECTS</span>
</div>
<a className="group relative px-5 py-2.5 bg-[#0A0A0A] border border-white/20 text-white text-xs font-semibold uppercase tracking-wide rounded hover:bg-[#00FF00] hover:text-black hover:border-[#00FF00] transition-all duration-300 overflow-hidden" href="https://calendly.com" target="_blank">
<span className="relative z-10">Book a Call</span>
</a>
</div>

<button className="md:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-12 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#222 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'}}></div>
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center relative z-10">

<div className="lg:col-span-3 flex flex-col items-start reveal-group is-visible">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#00FF00]"></div>
<span className="text-[10px] font-mono text-white tracking-widest uppercase">Web3 PR + AI Search</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[0.95] mb-8">
<span className="text-white block">BE VISIBLE IN</span>
<span className="text-[#00FF00] block">AI SEARCH</span>
<span className="text-white block">&amp; MEDIA</span>
</h1>
<p className="text-[#888] text-lg max-w-lg leading-relaxed mb-10 font-light">
                    First Web3 agency combining traditional PR with AI search optimization. Get mentioned by ChatGPT, Perplexity, and featured in top-tier media.
                </p>
<div className="flex flex-wrap items-center gap-4 mb-16">
<a className="px-8 py-4 border border-white/20 text-white rounded hover:bg-white hover:text-black transition-colors flex items-center gap-2 group" href="#services">
<span className="text-sm font-medium">View Services</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-4 bg-[#00FF00] text-black rounded font-semibold hover:bg-[#00CC00] transition-colors text-sm" href="https://calendly.com" target="_blank">
                        Book a Call
                    </a>
</div>
<div className="grid grid-cols-3 gap-8 w-full border-t border-white/10 pt-8">
<div>
<div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">50+</div>
<div className="text-[10px] text-[#666] font-mono tracking-widest uppercase">Projects Launched</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">$100M+</div>
<div className="text-[10px] text-[#666] font-mono tracking-widest uppercase">Client Valuation</div>
</div>
<div>
<div className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">200+</div>
<div className="text-[10px] text-[#666] font-mono tracking-widest uppercase">Media Placements</div>
</div>
</div>
</div>

<div className="lg:col-span-2 relative h-[400px] lg:h-[600px] w-full reveal-group delay-200">
<div className="absolute inset-0 flex items-center justify-center">

<div className="relative w-full h-full">

<svg className="absolute inset-0 w-full h-full z-0 opacity-30" viewbox="0 0 400 400">
<line className="animate-beam" stroke="#00FF00" stroke-dasharray="4 4" strokeWidth="1" x1="200" x2="100" y1="200" y2="100"></line>
<line stroke="#fff" stroke-dasharray="4 4" strokeWidth="1" x1="200" x2="300" y1="200" y2="120"></line>
<line stroke="#fff" stroke-dasharray="4 4" strokeWidth="1" x1="200" x2="150" y1="200" y2="300"></line>
<line className="animate-beam" stroke="#00FF00" stroke-dasharray="4 4" strokeWidth="1" x1="200" x2="320" y1="200" y2="280"></line>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0A0A0A] border border-[#00FF00]/30 rounded-full flex items-center justify-center shadow-[0_0_30px_-10px_rgba(0,255,0,0.3)] z-10 animate-float">
<span className="text-white font-semibold tracking-tight text-xs">SIGNAL</span>
</div>

<div className="absolute top-[20%] left-[20%] w-16 h-16 bg-[#111] border border-white/10 rounded-full flex items-center justify-center z-10 animate-float-delayed backdrop-blur-md">
<span className="text-[#888] text-[9px] font-mono">MEDIA</span>
<div className="absolute -right-1 -top-1 w-2 h-2 bg-[#00FF00] rounded-full animate-pulse"></div>
</div>
<div className="absolute top-[25%] right-[20%] w-20 h-20 bg-[#111] border border-white/10 rounded-full flex flex-col items-center justify-center z-10 animate-float backdrop-blur-md">
<iconify-icon className="text-[#00FF00] mb-1" icon="solar:brain-linear"></iconify-icon>
<span className="text-[#888] text-[9px] font-mono">AI SEARCH</span>
</div>
<div className="absolute bottom-[20%] left-[30%] w-14 h-14 bg-[#111] border border-white/10 rounded-full flex items-center justify-center z-10 animate-float-delayed backdrop-blur-md">
<span className="text-[#888] text-[9px] font-mono">TRUST</span>
</div>
<div className="absolute bottom-[25%] right-[15%] w-16 h-16 bg-[#111] border border-white/10 rounded-full flex items-center justify-center z-10 animate-float backdrop-blur-md">
<span className="text-[#888] text-[9px] font-mono">RANK</span>
<div className="absolute -left-1 -bottom-1 w-2 h-2 bg-[#00FF00] rounded-full animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] border-t border-white/5 reveal-group" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<span className="inline-block px-3 py-1 rounded bg-[#00FF00]/10 text-[#00FF00] text-[10px] font-mono uppercase tracking-widest mb-4">Core Services</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">WHAT WE <span className="text-[#444]">DELIVER</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#111] border border-white/10 p-8 rounded-xl hover:border-[#00FF00]/50 hover:scale-[1.02] transition-all duration-300 stagger-delay-1 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white text-[40px] mb-6 block" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">WEB3 PR &amp; MEDIA RELATIONS</h3>
<p className="text-[#888] text-sm leading-relaxed mb-8">Tier-1 media coverage in CoinDesk, Cointelegraph, Decrypt. Press releases, thought leadership, and journalist relationships.</p>
<a className="text-[#00FF00] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#111] border border-white/10 p-8 rounded-xl hover:border-[#00FF00]/50 hover:scale-[1.02] transition-all duration-300 stagger-delay-2 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white text-[40px] mb-6 block" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">AI SEARCH OPTIMIZATION (GEO)</h3>
<p className="text-[#888] text-sm leading-relaxed mb-8">Get mentioned by ChatGPT, Perplexity, Claude, Gemini. We optimize your content for AI citation patterns and build authority.</p>
<a className="text-[#00FF00] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#111] border border-white/10 p-8 rounded-xl hover:border-[#00FF00]/50 hover:scale-[1.02] transition-all duration-300 stagger-delay-3 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white text-[40px] mb-6 block" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl text-white font-semibold mb-3 tracking-tight">PODCAST PLACEMENTS</h3>
<p className="text-[#888] text-sm leading-relaxed mb-8">Feature on top Web3 podcasts. Interview preparation, talking points, and distribution strategy included.</p>
<a className="text-[#00FF00] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] relative reveal-group" id="how-we-work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<span className="inline-block px-3 py-1 rounded bg-[#00FF00]/10 text-[#00FF00] text-[10px] font-mono uppercase tracking-widest mb-4">Our Proven Process</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">HOW WE WORK</h2>
</div>
<div className="text-[#444] font-mono text-sm uppercase tracking-wider">// Dual Track Strategy</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-[#111] border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
<iconify-icon className="text-white text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-2xl text-white font-semibold tracking-tight">PR PROCESS</h3>
</div>
<div className="space-y-8">
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">01</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Discovery</h4>
<p className="text-[#888] text-sm leading-relaxed">Deep dive into your project, competitors, and target audience analysis.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">02</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Strategy</h4>
<p className="text-[#888] text-sm leading-relaxed">Custom media plan with outlet targeting and narrative angles.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">03</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Outreach</h4>
<p className="text-[#888] text-sm leading-relaxed">Journalist relationships and personalized story pitching.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">04</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Amplification</h4>
<p className="text-[#888] text-sm leading-relaxed">Social proof, syndication, and ongoing coverage management.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-10 border-b border-white/5 pb-6">
<iconify-icon className="text-white text-2xl" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-2xl text-white font-semibold tracking-tight">LLM OPTIMIZATION</h3>
</div>
<div className="space-y-8">
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">01</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Audit</h4>
<p className="text-[#888] text-sm leading-relaxed">Analyze current AI search visibility across ChatGPT, Perplexity, Claude.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">02</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Optimize</h4>
<p className="text-[#888] text-sm leading-relaxed">Content restructuring for AI citation patterns and semantic relevance.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">03</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Authority</h4>
<p className="text-[#888] text-sm leading-relaxed">Build authoritative sources and backlinks that LLMs trust.</p>
</div>
</div>
<div className="flex gap-6 group">
<span className="text-[#00FF00] font-mono text-lg pt-1">04</span>
<div>
<h4 className="text-white font-semibold text-lg mb-2">Monitor</h4>
<p className="text-[#888] text-sm leading-relaxed">Track AI mentions weekly and adjust strategy based on results.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] border-t border-white/5 reveal-group" id="results">
<div className="max-w-7xl mx-auto">
<div className="mb-12 text-center">
<span className="inline-block px-3 py-1 rounded bg-[#00FF00]/10 text-[#00FF00] text-[10px] font-mono uppercase tracking-widest mb-4">Client Results</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white">PROVEN <span className="text-[#444]">IMPACT</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#111] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
<div>
<iconify-icon className="text-[#333] text-4xl mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-white text-lg font-light leading-relaxed mb-6">"Signal PR got us mentioned in every major AI search engine within 3 weeks. The organic traffic uplift was immediate."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white font-medium text-xs">MK</div>
<div>
<div className="text-white text-sm font-semibold">Michael K.</div>
<div className="text-[#666] text-xs">CEO, DeFi Protocol</div>
</div>
</div>
</div>

<div className="bg-[#111] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
<div>
<iconify-icon className="text-[#333] text-4xl mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-white text-lg font-light leading-relaxed mb-6">"Traditional PR wasn't enough. The AI optimization strategy helped us dominate the narrative during our token launch."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white font-medium text-xs">SA</div>
<div>
<div className="text-white text-sm font-semibold">Sarah A.</div>
<div className="text-[#666] text-xs">CMO, Layer 2 Chain</div>
</div>
</div>
</div>

<div className="bg-[#111] p-8 rounded-xl border border-white/5 flex flex-col justify-between hover:border-white/10 transition-colors">
<div>
<iconify-icon className="text-[#333] text-4xl mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-white text-lg font-light leading-relaxed mb-6">"We secured coverage in CoinDesk and Bloomberg thanks to their connections. Professional and effective."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-white font-medium text-xs">JD</div>
<div>
<div className="text-white text-sm font-semibold">James D.</div>
<div className="text-[#666] text-xs">Founder, NFT Marketplace</div>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="text-[#00FF00] hover:text-white transition-colors text-sm font-medium inline-flex items-center gap-2" href="#">
                    See All Case Studies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] relative reveal-group" id="pricing-section">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<span className="inline-block px-3 py-1 rounded bg-[#00FF00]/10 text-[#00FF00] text-[10px] font-mono uppercase tracking-widest mb-4">Investment</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">YOUR VISIBILITY</h2>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-[#444] mb-6">INVESTMENT</h2>
<p className="text-[#888] text-lg leading-relaxed mb-8 max-w-md">Every project is unique. We don't believe in cookie-cutter packages. Let's discuss your goals and create a custom strategy that maximizes your ROI.</p>
<a className="inline-block px-8 py-4 bg-[#00FF00] text-black rounded font-semibold hover:bg-[#00CC00] transition-colors text-sm" href="https://calendly.com" target="_blank">
                    Get Custom Quote
                </a>
</div>

<div className="relative w-full">

<div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full"></div>
<div className="relative bg-[#0F0F0F] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm">

<div className="bg-[#181818] px-4 py-3 border-b border-white/5 flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
<div className="w-3 h-3 rounded-full bg-[#333]"></div>
</div>
<span className="text-[#666] text-xs">DASHBOARD_V1.0</span>
</div>

<div className="p-8 space-y-8">

<div className="flex items-end justify-between border-b border-white/5 pb-4">
<span className="text-[#666] text-xs tracking-wider">ESTIMATED REACH</span>
<div className="text-5xl font-bold text-white tracking-tighter">
<span id="reach-counter">0</span>%
                            </div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-xs text-[#666]">
<span>MEDIA OUTLETS</span>
<span>TIER 1</span>
</div>
<div className="w-full h-2 bg-[#222] rounded-full overflow-hidden">
<div className="h-full bg-[#00FF00] w-0" id="progress-bar"></div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-[#666] text-xs tracking-wider">AI SENTIMENT</span>
<span className="px-2 py-1 bg-[#00FF00]/20 text-[#00FF00] text-[10px] rounded border border-[#00FF00]/20 uppercase">
                                Positive
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#0A0A0A] border-t border-white/5 reveal-group" id="faq">
<div className="max-w-3xl mx-auto">
<div className="mb-16 text-center">
<span className="inline-block px-3 py-1 rounded bg-[#00FF00]/10 text-[#00FF00] text-[10px] font-mono uppercase tracking-widest mb-4">Frequently Asked</span>
<h2 className="text-4xl font-semibold tracking-tighter text-white">QUESTIONS</h2>
</div>
<div className="space-y-4">

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">What makes Signal PR different?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            We combine traditional PR with AI search optimization. While others focus only on media coverage, we ensure you're visible in ChatGPT, Perplexity, and other AI search engines.
                        </div>
</div>
</div>

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">What is AI Search Optimization (GEO)?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            GEO means Generative Engine Optimization — optimizing your content to be cited and recommended by AI language models like ChatGPT, Claude, and Perplexity.
                        </div>
</div>
</div>

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">Which media outlets do you work with?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            We work with tier-1 crypto media including CoinDesk, Cointelegraph, Decrypt, The Block, and mainstream outlets like Bloomberg, Forbes, and TechCrunch.
                        </div>
</div>
</div>

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">How long does it take to see results?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            PR results typically appear within 2-4 weeks. AI search visibility improvements take 4-8 weeks as models update their knowledge.
                        </div>
</div>
</div>

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">Do you offer podcast placements?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            Yes, we arrange appearances on top Web3 podcasts with full interview preparation including talking points and media training.
                        </div>
</div>
</div>

<div className="accordion-item border border-white/10 rounded-lg bg-[#111] overflow-hidden">
<button className="accordion-header w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors">
<span className="text-white font-medium">What are your pricing models?</span>
<iconify-icon className="accordion-icon text-[#666] text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="px-6 pb-6 text-[#888] text-sm leading-relaxed">
                            We offer monthly retainers, project-based pricing, and performance-based models. Every engagement is customized to your goals.
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#080808] border-t border-white/10 pt-20 pb-10 px-6 lg:px-12 reveal-group">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#00FF00] text-xl" icon="solar:bolt-linear"></iconify-icon>
<span className="text-white font-semibold text-lg">SIGNAL PR</span>
</div>
<p className="text-[#888] text-sm mb-1">Web3 PR + AI Search Optimization.</p>
<p className="text-[#888] text-sm mb-6">The agency for the intelligence age.</p>
<a className="text-white hover:text-[#00FF00] transition-colors text-sm font-medium" href="mailto:hello@signalpr.io">hello@signalpr.io</a>
</div>

<div>
<h4 className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-6">Navigation</h4>
<ul className="space-y-3">
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#services">Services</a></li>
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#how-we-work">How We Work</a></li>
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#faq">FAQ</a></li>
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="https://calendly.com">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-[#444] text-[10px] font-mono uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-3">
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#">Twitter / X</a></li>
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#">LinkedIn</a></li>
<li><a className="text-[#888] hover:text-[#00FF00] transition-colors text-sm" href="#">Telegram</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#444] uppercase tracking-wider">
<div>© 2025 Signal PR. All rights reserved.</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="text-[#222]">|</span>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
