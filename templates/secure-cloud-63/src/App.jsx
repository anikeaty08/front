import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Mouse tracking for bento cards
document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.bento-card');
cards.forEach(card => {
card.onmousemove = e => {
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
card.style.setProperty('--x', `${x}px`);
card.style.setProperty('--y', `${y}px`);
}
});
});


document.write(new Date().getFullYear())


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-8 h-8 rounded bg-zinc-900 border border-white/10 group-hover:border-emerald-500/50 transition-colors">
<svg className="text-zinc-100" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-100">VERNDVIT</span>
</a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-white transition-colors" href="#blog">Insights</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-8 px-4 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                    Contact
                </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute top-0 left-0 right-0 h-[500px] glow-bg pointer-events-none"></div>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/20 blur-[100px] rounded-full opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-medium text-emerald-400 mb-8 hover:bg-white/10 transition-colors cursor-default backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Resilience by Design
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 tracking-tight mb-6 max-w-4xl mx-auto">
                    Secure Cloud &amp; AI <br className="hidden sm:block"/>Architectures.
                </h1>
<p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                    Designing resilience for the digital era. Verndvit bridges the gap between rapid innovation and rigid security governance for cloud-native enterprises.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all" href="#contact">
                        Request a Quote
                    </a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-all hover:text-white" href="#services">
                        Explore Services
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-12 border-b border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 mb-8">FRAMEWORKS &amp; STANDARDS WE IMPLEMENT</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-sm font-semibold text-zinc-300 tracking-widest">ISO/IEC 27001</span>
<span className="text-sm font-semibold text-zinc-300 tracking-widest">NIS 2</span>
<span className="text-sm font-semibold text-zinc-300 tracking-widest">DORA</span>
<span className="text-sm font-semibold text-zinc-300 tracking-widest">SOC 2</span>
<span className="text-sm font-semibold text-zinc-300 tracking-widest">GDPR</span>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-4">Architecture &amp; Security</h2>
<p className="text-zinc-500 max-w-xl text-sm">Comprehensive strategies for the modern stack. We secure the infrastructure that powers your AI and cloud applications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bento-card md:col-span-2 relative bg-zinc-900/30 border border-white/10 rounded-xl p-8 overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-32 h-32 text-emerald-500" data-lucide="cloud"></i>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2">Cloud Security Architecture</h3>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                            Enterprise-grade strategies for multi-cloud (Azure, AWS, GCP). We design secure landing zones, identity governance, and Zero Trust implementations that scale.
                        </p>
</div>
</div>

<div className="bento-card relative bg-zinc-900/30 border border-white/10 rounded-xl p-8 overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">AI &amp; MLOps Security</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Securing ML workloads and data pipelines. Protect models from inversion attacks and ensure data sanctity.
                    </p>
</div>

<div className="bento-card relative bg-zinc-900/30 border border-white/10 rounded-xl p-8 overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">Compliance (DORA/NIS2)</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Strategic alignment with EU regulations. We translate legal requirements into technical controls.
                    </p>
</div>

<div className="bento-card md:col-span-2 relative bg-zinc-900/30 border border-white/10 rounded-xl p-8 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400">
<i className="w-5 h-5" data-lucide="terminal"></i>
</div>
<h3 className="text-xl font-medium text-zinc-100 mb-2">DevSecOps &amp; IaC</h3>
<p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                                Shifting security left. CI/CD hardening, secrets management, and policy-as-code enforcement for rapid deployment.
                            </p>
</div>

<div className="hidden md:block w-64 bg-black/50 border border-white/10 rounded-lg p-3 text-[10px] font-mono text-emerald-500/80">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500/50"></div>
</div>
<p className="opacity-50">// Policy Check</p>
<p>resource "aws_s3" "secure" {</p>
<p className="pl-2">encryption = true</p>
<p className="pl-2">public_access = false</p>
<p>}</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-16 text-center">Trusted Advice</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        "Verndvit helped us navigate the complexities of DORA compliance without slowing down our development cycles. The architecture review was eye-opening."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">JD</div>
<div>
<p className="text-xs font-medium text-white">John D.</p>
<p className="text-[10px] text-zinc-500">CTO, FinTech Corp</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        "Expert guidance on securing our LLM infrastructure. Daniel provided clarity in a very chaotic landscape of AI security tools."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">AS</div>
<div>
<p className="text-xs font-medium text-white">Anna S.</p>
<p className="text-[10px] text-zinc-500">Head of Engineering, AI Startup</p>
</div>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-colors">
<div className="flex gap-1 text-emerald-500 mb-4">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">
                        "The independent audit was thorough and actionable. We closed critical gaps in our AWS environment within weeks."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white">MK</div>
<div>
<p className="text-xs font-medium text-white">Michael K.</p>
<p className="text-[10px] text-zinc-500">CISO, Logistics Ent.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="blog">

<div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-2">Latest Insights</h2>
<p className="text-zinc-500 text-sm">Thoughts on security architecture, regulations, and AI.</p>
</div>
<a className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1" href="#">
                    View all posts <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="aspect-video w-full rounded-lg bg-zinc-900 border border-white/10 overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-500"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-emerald-400 font-medium mb-2">
<span>REGULATION</span>
<span className="text-zinc-600">•</span>
<span className="text-zinc-500">OCT 12, 2023</span>
</div>
<h3 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors mb-2">
                        Preparing for NIS 2 Directive
                    </h3>
<p className="text-xs text-zinc-500 line-clamp-2">
                        Key architectural changes required for essential entities operating within the EU digital market.
                    </p>
</a>

<a className="group block" href="#">
<div className="aspect-video w-full rounded-lg bg-zinc-900 border border-white/10 overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rotate-45 border border-white/10 group-hover:rotate-90 transition-transform duration-500"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-emerald-400 font-medium mb-2">
<span>AI SECURITY</span>
<span className="text-zinc-600">•</span>
<span className="text-zinc-500">SEP 28, 2023</span>
</div>
<h3 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors mb-2">
                        Securing Large Language Model Deployments
                    </h3>
<p className="text-xs text-zinc-500 line-clamp-2">
                        Addressing prompt injection and data leakage risks in enterprise RAG architectures.
                    </p>
</a>

<a className="group block" href="#">
<div className="aspect-video w-full rounded-lg bg-zinc-900 border border-white/10 overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-zinc-800/50 group-hover:bg-zinc-800/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-px bg-white/10"></div>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-emerald-400 font-medium mb-2">
<span>CLOUD</span>
<span className="text-zinc-600">•</span>
<span className="text-zinc-500">SEP 15, 2023</span>
</div>
<h3 className="text-base font-medium text-zinc-200 group-hover:text-emerald-400 transition-colors mb-2">
                        The State of Zero Trust in 2024
                    </h3>
<p className="text-xs text-zinc-500 line-clamp-2">
                        Moving beyond the buzzword: Practical implementation steps for identity-aware proxies.
                    </p>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-black" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium text-zinc-100 mb-6">Built on Expertise</h2>
<div className="space-y-6 text-zinc-400 text-sm leading-relaxed">
<p>
                            Verndvit is founded by <strong className="text-zinc-200">Daniel Gora</strong> (CISSP, CCSP, CSSLP), bridging the gap between rigorous security standards and modern agility.
                        </p>
<p>
                            We don't just audit; we architect. From day zero to production, we ensure your systems are resilient by design, compliant by default, and ready for the AI era.
                        </p>
</div>
<div className="mt-8 flex gap-4">
<div className="px-4 py-2 rounded border border-white/10 bg-zinc-900/50">
<p className="text-lg font-semibold text-white">10+</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Years Experience</p>
</div>
<div className="px-4 py-2 rounded border border-white/10 bg-zinc-900/50">
<p className="text-lg font-semibold text-white">100%</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Independent</p>
</div>
</div>
</div>
<div className="relative">

<div className="aspect-square rounded-full border border-white/5 bg-gradient-to-tr from-zinc-900 to-black relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent"></div>
<div className="w-2/3 h-2/3 border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
<div className="absolute w-1/3 h-1/3 border border-white/20 rounded-full"></div>
<i className="w-8 h-8 text-emerald-500/80 relative z-10" data-lucide="lock"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-900/50"></div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white mb-2">Start the Conversation</h2>
<p className="text-zinc-500 text-sm">Ready to secure your architecture?</p>
</div>
<form className="space-y-6 bg-black/50 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-medium text-zinc-500 uppercase mb-2">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 uppercase mb-2">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 uppercase mb-2">Message</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none" placeholder="How can we help?" rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium text-sm py-2.5 rounded hover:bg-zinc-200 transition-colors" type="button">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-sm font-semibold text-white">VERNDVIT</span>
</a>
<p className="text-xs text-zinc-500">
                        Secure Cloud, AI, and Application Architectures for the future.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Cloud Architecture</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">AI Security</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Compliance</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Audits</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#blog">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">
                    ©  Verndvit. All rights reserved.
                </p>
<div className="flex gap-6 text-[10px] text-zinc-600">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
