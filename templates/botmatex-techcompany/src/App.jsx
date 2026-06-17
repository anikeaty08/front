import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openModal(id) {
            const modal = document.getElementById(id);
            const modalInner = modal.querySelector('div');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Small delay to allow flex to apply before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalInner.classList.remove('scale-95');
                modalInner.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            const modalInner = modal.querySelector('div');
            modal.classList.add('opacity-0');
            modalInner.classList.remove('scale-100');
            modalInner.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modals when clicking outside the modal content
        window.onclick = function(event) {
            const privacyModal = document.getElementById('privacy-modal');
            const termsModal = document.getElementById('terms-modal');
            if (event.target === privacyModal) closeModal('privacy-modal');
            if (event.target === termsModal) closeModal('terms-modal');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
<div className="absolute top-[-20%] w-[70%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00FF00]/15 via-black/0 to-transparent blur-[120px]"></div>
</div>

<nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center text-2xl font-semibold text-white tracking-wider" href="#">
    Bot<span className="text-[#00FF00]">m</span>atex
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#how-it-works">Services</a>
<a className="text-sm font-light text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="px-5 py-2.5 rounded-full bg-[#00FF00] text-black text-sm font-normal hover:bg-[#00cc00] transition-all duration-300" href="#audit">
                    Get Free Audit
                </a>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="md:pt-40 md:pb-32 pt-32 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#00FF00] animate-pulse"></span>
<span className="text-xs text-neutral-300 font-light uppercase tracking-widest">AI Automation Agency</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tighter text-white leading-[1.05] mb-8">
                    Autopilot Your <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Business Growth</span>
</h1>
<p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-extralight">
                    Stop losing potential clients. We build automated lead generation systems and high-converting websites that multiply your revenue.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00FF00] text-black text-base font-normal hover:scale-[1.02] hover:bg-[#00dd00] transition-all duration-300 flex items-center justify-center gap-2" href="#audit">
                        Get Free Audit
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white text-base font-light hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl text-neutral-400" icon="solar:calendar-linear"></iconify-icon>
                        Book Discovery Call
                    </a>
</div>
<div className="mt-24 pt-8 w-full flex flex-col items-center">
<p className="text-xs text-neutral-500 mb-8 font-light uppercase tracking-widest">Trusted by innovative companies</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-neutral-400">
<div className="flex items-center gap-2 text-xl font-normal tracking-tight"><iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon> REALTY CO.</div>
<div className="flex items-center gap-2 text-xl font-normal tracking-tight"><iconify-icon className="text-2xl" icon="solar:diploma-linear"></iconify-icon> ELITE ED</div>
<div className="flex items-center gap-2 text-xl font-normal tracking-tight"><iconify-icon className="text-2xl" icon="solar:ship-linear"></iconify-icon> GLOBAL LOGISTICS</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01] px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Running a business is hard enough.</h2>
<p className="text-base md:text-lg text-neutral-400 font-extralight">Don't let outdated bottlenecks hold back your potential.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 text-neutral-300 group-hover:text-[#00FF00] transition-colors">
<iconify-icon className="text-2xl" icon="solar:graph-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Inconsistent Leads</h3>
<p className="text-base text-neutral-400 leading-relaxed font-extralight">Relying on word-of-mouth or manual outreach leaves your pipeline dry and revenue unpredictable.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 text-neutral-300 group-hover:text-[#00FF00] transition-colors">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Wasted Time</h3>
<p className="text-base text-neutral-400 leading-relaxed font-extralight">Spending hours answering basic inquiries instead of focusing on high-leverage closing activities.</p>
</div>
<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00FF00]/30 transition-colors group">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center mb-6 text-neutral-300 group-hover:text-[#00FF00] transition-colors">
<iconify-icon className="text-2xl" icon="solar:cursor-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Low Conversion</h3>
<p className="text-base text-neutral-400 leading-relaxed font-extralight">Your current website acts as a static digital brochure rather than a dedicated 24/7 sales engine.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
<div className="w-full md:w-1/2">
<div className="text-xs text-[#00FF00] mb-6 font-light uppercase tracking-widest">Our Capabilities</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-6 leading-[1.1]">
                            The System: <br/>
<span className="text-neutral-500">Autopilot Your Growth</span>
</h2>
<p className="text-base md:text-lg text-neutral-400 mb-10 leading-relaxed font-extralight">
                            We implement custom AI-driven infrastructures designed specifically for modern service businesses to capture, nurture, and convert leads.
                        </p>
<div className="space-y-8 border-l border-white/10 pl-6 md:pl-8">
<div className="">
<h4 className="text-lg font-normal tracking-tight text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-xl text-[#00FF00]" icon="solar:chat-square-code-linear"></iconify-icon>
                                    AI Chatbots &amp; Agents
                                </h4>
<p className="text-base text-neutral-400 font-extralight">Engage visitors instantly on WhatsApp and web, answering FAQs and qualifying leads 24/7.</p>
</div>
<div className="">
<h4 className="text-lg font-normal tracking-tight text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-xl text-[#00FF00]" icon="solar:magnet-linear"></iconify-icon>
                                    Automated Lead Systems
                                </h4>
<p className="text-base text-neutral-400 font-extralight">Connect your marketing directly to your CRM, triggering automated intelligent follow-ups.</p>
</div>
<div className="">
<h4 className="text-lg font-normal tracking-tight text-white mb-2 flex items-center gap-3">
<iconify-icon className="text-xl text-[#00FF00]" icon="solar:monitor-smartphone-linear"></iconify-icon>
                                    High-Conversion Web
                                </h4>
<p className="text-base text-neutral-400 font-extralight">Fast, modern web infrastructure designed purely to turn traffic into booked calls and sales.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden backdrop-blur-md">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF00]/5 blur-[80px] rounded-full"></div>
<h3 className="text-xl font-normal tracking-tight text-white mb-10 relative z-10">Implementation Process</h3>
<div className="space-y-10 relative z-10">
<div className="flex items-start gap-5">
<div className="text-sm font-normal text-neutral-500 shrink-0 mt-0.5 w-6">01</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">System Audit</h4>
<p className="text-sm text-neutral-400 mt-2 leading-relaxed font-extralight">We analyze your current workflow and identify critical revenue bottlenecks.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="text-sm font-normal text-neutral-500 shrink-0 mt-0.5 w-6">02</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">Infrastructure Build</h4>
<p className="text-sm text-neutral-400 mt-2 leading-relaxed font-extralight">We develop your custom AI agents, landing pages, and deep CRM integrations.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="text-sm font-normal text-[#00FF00] shrink-0 mt-0.5 w-6 drop-shadow-[0_0_8px_rgba(0,255,0,0.5)]">03</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">Deploy &amp; Scale</h4>
<p className="text-sm text-neutral-400 mt-2 leading-relaxed font-extralight">Launch the system, watch qualified leads flow in automatically, and scale operations.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.01] px-6" id="results">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-normal tracking-tighter text-white mb-6">Real Results. Less Effort.</h2>
<p className="text-base md:text-lg text-neutral-400 font-extralight">Replace manual work with deterministic AI systems.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden mb-20">
<div className="p-8 bg-black text-center flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-2">+140%</span>
<span className="text-xs text-neutral-500 font-light uppercase tracking-widest">Lead Volume</span>
</div>
<div className="p-8 bg-black text-center flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-2">24/7</span>
<span className="text-xs text-neutral-500 font-light uppercase tracking-widest">Response</span>
</div>
<div className="p-8 bg-black text-center flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-2">3x</span>
<span className="text-xs text-neutral-500 font-light uppercase tracking-widest">Conversion</span>
</div>
<div className="p-8 bg-black text-center flex flex-col items-center justify-center">
<span className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-2">20h</span>
<span className="text-xs text-neutral-500 font-light uppercase tracking-widest">Saved Weekly</span>
</div>
</div>
<div className="max-w-3xl mx-auto">
<div className="p-10 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 relative">
<iconify-icon className="text-4xl text-[#00FF00]/20 absolute top-10 left-10" icon="solar:chat-round-dots-linear"></iconify-icon>
<p className="text-lg md:text-xl text-neutral-300 font-extralight leading-relaxed relative z-10 mb-8 pt-10">
                            "Botmatex completely transformed how we handle client inquiries. Before, we were missing messages. Now, the AI handles qualification, and we wake up to booked strategy calls. It's like having a top-tier sales rep working for free."
                        </p>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-white/5 border border-[#00FF00]/30 flex items-center justify-center text-neutral-300 font-light text-lg">JD</div>
<div>
<h4 className="text-base font-normal text-white tracking-tight">James D.</h4>
<p className="text-sm text-neutral-500 font-extralight">Director, Premium Real Estate</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="audit">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-sm font-light mb-8 border border-[#00FF00]/20">
<iconify-icon className="text-lg" icon="solar:gift-linear"></iconify-icon> Free for a limited time
                        </div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tighter text-white mb-6 leading-[1.1]">
                            Claim Your AI <br/> Growth Audit
                        </h2>
<p className="text-base md:text-lg text-neutral-400 mb-10 leading-relaxed font-extralight">
                            Let our experts analyze your current setup. We'll show you exactly where you're losing money and how AI can automate your specific process.
                        </p>
<div className="space-y-5 mb-10">
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#00FF00] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-neutral-300 font-extralight">Uncover hidden revenue bottlenecks</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#00FF00] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-neutral-300 font-extralight">Custom AI Generation Blueprint</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-2xl text-[#00FF00] shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-neutral-300 font-extralight">Conversion Rate Architecture Review</span>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-3xl h-full flex flex-col backdrop-blur-sm">
<h3 className="text-2xl font-normal tracking-tight text-white mb-8">Request Audit</h3>
<form className="space-y-6 flex-grow flex flex-col">
<div>
<label className="block text-sm font-light text-neutral-400 mb-2" htmlFor="name">Full Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white font-extralight placeholder-neutral-600 focus:outline-none focus:border-[#00FF00]/50 focus:bg-white/[0.02] transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-light text-neutral-400 mb-2" htmlFor="business">Business Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white font-extralight placeholder-neutral-600 focus:outline-none focus:border-[#00FF00]/50 focus:bg-white/[0.02] transition-all" id="business" placeholder="Company Ltd" type="text"/>
</div>
<div>
<label className="block text-sm font-light text-neutral-400 mb-2" htmlFor="email">Work Email</label>
<input className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-base text-white font-extralight placeholder-neutral-600 focus:outline-none focus:border-[#00FF00]/50 focus:bg-white/[0.02] transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-light text-neutral-400 mb-2" htmlFor="phone">WhatsApp Number</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-xl text-neutral-500" icon="solar:phone-linear"></iconify-icon>
</div>
<input className="w-full bg-black/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white font-extralight placeholder-neutral-600 focus:outline-none focus:border-[#00FF00]/50 focus:bg-white/[0.02] transition-all" id="phone" placeholder="+1 234 567 890" type="tel"/>
</div>
</div>
<div className="mt-4 pt-2">
<button className="w-full py-3 rounded-xl bg-[#00FF00] text-black text-base font-normal hover:bg-[#00dd00] transition-all duration-300 flex items-center justify-center gap-2" type="button">
                                    Submit Request
                                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-neutral-500 mt-4 text-center font-extralight">100% free. No obligation.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-normal tracking-tighter text-white mb-8">
                    Ready to Scale Automatically?
                </h2>
<p className="text-base md:text-lg text-neutral-400 mb-12 max-w-2xl mx-auto font-extralight">
                    Stop letting leads slip through the cracks. Partner with Botmatex to build a modern, high-converting digital infrastructure for your business.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00FF00] text-black text-base font-normal hover:bg-[#00cc00] transition-all duration-300" href="#audit">
                        Get Free Audit
                    </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-white text-base font-light hover:bg-white/[0.08] transition-all duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl text-[#00FF00]" icon="solar:chat-round-line-linear"></iconify-icon>
                        Chat on WhatsApp
                    </a>
</div>
</div>
</section>
</main>

<footer className="z-10 text-center bg-black border-white/5 border-t pt-12 pb-12 relative">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="flex items-center text-2xl font-semibold text-white tracking-wider" href="#">
    Bot<span className="text-[#00FF00]">m</span>atex
</a>
<p className="text-sm text-neutral-500 font-extralight">© 2026 Botmatex. All rights reserved.</p>
<div className="flex gap-6">
<button className="text-neutral-500 hover:text-white transition-colors text-sm font-extralight bg-transparent border-none cursor-pointer" onclick="openModal('privacy-modal')">Privacy</button>
<button className="text-neutral-500 hover:text-white transition-colors text-sm font-extralight bg-transparent border-none cursor-pointer" onclick="openModal('terms-modal')">Terms</button>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-md opacity-0 transition-opacity duration-300 px-4" id="privacy-modal">
<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto modal-scroll relative transform scale-95 transition-transform duration-300" onclick="event.stopPropagation()">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center" onclick="closeModal('privacy-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="p-8 md:p-12">
<h2 className="text-3xl font-normal tracking-tight text-white mb-6">Privacy Policy</h2>
<div className="space-y-6 text-sm text-neutral-400 font-extralight leading-relaxed">
<p>Last updated: January 1, 2026</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">1. Information We Collect</h3>
<p>We collect information you provide directly to us, such as when you request an audit, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, business details, and other information you choose to provide.</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">2. How We Use Information</h3>
<p>We use the information we collect about you to provide, maintain, and improve our services, develop new features, provide customer support, and send product updates and administrative messages regarding your AI growth infrastructure.</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">3. Data Security</h3>
<p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. Our AI systems are built with privacy-first architecture.</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-md opacity-0 transition-opacity duration-300 px-4" id="terms-modal">
<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto modal-scroll relative transform scale-95 transition-transform duration-300" onclick="event.stopPropagation()">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center" onclick="closeModal('terms-modal')">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="p-8 md:p-12">
<h2 className="text-3xl font-normal tracking-tight text-white mb-6">Terms of Service</h2>
<div className="space-y-6 text-sm text-neutral-400 font-extralight leading-relaxed">
<p>Last updated: January 1, 2026</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">1. Acceptance of Terms</h3>
<p>By accessing and using the Botmatex website and services, you accept and agree to be bound by the terms and provision of this agreement. Our automated systems are provided "as-is" for the exclusive improvement of business workflows.</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">2. Provision of Services</h3>
<p>You agree and acknowledge that Botmatex is entitled to modify, improve or discontinue any of its services, including AI automation algorithms, at its sole discretion and without notice to you even if it may result in you being prevented from accessing any information.</p>
<h3 className="text-lg text-white font-normal mt-8 mb-4">3. Proprietary Rights</h3>
<p>You acknowledge and agree that Botmatex systems, chatbot infrastructures, and CRM integrations contain proprietary and confidential information protected by intellectual property laws. You are not permitted to reverse-engineer any custom deployment.</p>
</div>
</div>
</div>
</div>



    </>
  );
}
