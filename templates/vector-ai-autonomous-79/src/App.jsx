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



      document.addEventListener("DOMContentLoaded", () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("sys-active");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll(".sys-reveal, .sys-flicker-anim").forEach(el => observer.observe(el));
      });
    
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
      
<div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-grid"></div>
<header className="relative z-40 h-16 border-b border-zinc-800 bg-[#0B0F12] flex items-stretch sticky top-0">
<div className="md:w-64 flex bg-[#0B0F12] w-full border-zinc-800 border-r pr-6 pl-6 items-center justify-between">
<span className="uppercase text-2xl text-white tracking-widest font-ibm-mono">Vector AI</span>
<div className="w-2 h-2 bg-[#1C997F] rounded-none shadow-[0_0_8px_#67D6C2]"></div>
</div>
<nav className="hidden md:flex flex-1 items-stretch">
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#">Home</a>
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#about">About</a>
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#suites">Suites</a>
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#custom">Custom</a>
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#faq">FAQ</a>
<a className="flex items-center px-6 border-r border-zinc-800 text-[10px] font-mono uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-stretch">
<div className="hidden lg:flex items-center border-l border-zinc-800 bg-[#0B0F12]">
<input className="bg-transparent text-[10px] font-mono text-zinc-300 px-6 py-2 w-32 focus:outline-none placeholder:text-zinc-700 uppercase" placeholder="SYS_QUERY" type="text"/>
</div>
<a className="px-6 border-l border-zinc-800 text-white hover:bg-zinc-900 transition-colors h-full flex items-center justify-center" href="https://app.vectorai.digital/authentication/sign-in/signin-basic/">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</a>
<a className="px-6 border-l border-zinc-800 bg-[#1C997F] text-white hover:bg-[#158069] text-[10px] font-mono uppercase tracking-widest h-full flex items-center justify-center" href="#contact">
          Schedule Demo
        </a>
</div>
</header>
<main className="relative z-10 flex-1 flex flex-col md:flex-row">
<aside className="hidden md:flex flex-col w-16 border-r border-zinc-800 bg-[#0B0F12] shrink-0">
<div className="flex-1 flex flex-col pt-32 pb-12 gap-x-12 gap-y-12 items-center justify-start">
<div className="whitespace-nowrap text-[10px] uppercase text-zinc-600 tracking-widest font-mono -rotate-90">
            Security Layer: Active
          </div>
<div className="w-px h-24 bg-zinc-800"></div>
<div className="-rotate-90 whitespace-nowrap text-[10px] font-mono uppercase tracking-widest text-zinc-600">
            Node V-01
          </div>
</div>
</aside>
<div className="flex-1 flex flex-col min-w-0">

<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] border-b border-zinc-800">
<div className="lg:col-span-7 md:p-16 flex flex-col bg-[#0B0F12] border-zinc-800 border-r pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="absolute inset-0 -z-10 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top_left,#1C997F10_0%,transparent_50%)]"></div>
<div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-zinc-700"></div>
<div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-zinc-700"></div>
<div className="font-mono text-xs text-[#1C997F] mb-8 uppercase tracking-widest">
              22 AI Agents • 5 Departments • Your ROI
            </div>
<div className="space-y-6">
<h1 className="uppercase leading-none md:text-7xl text-5xl font-semibold text-white tracking-tight sys-reveal sys-rise">
                A Security-First
                <span className="text-zinc-700">Autonomous AI Company</span>
</h1>
<p className="max-w-md text-sm text-zinc-500 font-mono leading-relaxed border-l-2 border-[#1C997F] pl-4 sys-reveal sys-rise sys-delay-100">
                A complete AI-powered company working for you 24/7. Trained on your company knowledge base, with real-time operational visibility. Marketing, Finance, Warehouse, Security &amp; Operations.
              </p>
<p className="text-[10px] text-zinc-600 font-mono uppercase tracking-tight">
                Deployment: 24 hours to 7 days for standard setups. Custom enterprise implementations can take weeks to months depending on requirements.
              </p>
</div>
<div className="pt-12 flex flex-wrap gap-4">
<a className="group bg-zinc-100 hover:bg-white text-black text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 w-fit border border-transparent rounded-none font-semibold sys-reveal sys-rise sys-delay-200" href="#contact">
                Schedule Demo
                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
<a className="group border border-zinc-800 hover:bg-zinc-900 text-white text-xs uppercase tracking-widest px-8 py-4 transition-all flex items-center gap-4 w-fit rounded-none font-semibold sys-reveal sys-rise sys-delay-300" href="#contact">
                Talk to Sales
                <iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-5 relative bg-zinc-950 overflow-hidden group">
<div className="absolute inset-0 z-20 pointer-events-none p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="bg-black/50 backdrop-blur-sm border border-zinc-700 p-2 text-[10px] font-mono text-white sys-flicker-anim">
                  VECTOR_OPS [LIVE]
                </div>
</div>
<div className="self-end bg-[#0B0F12] border border-zinc-700 p-4 w-64 shadow-2xl sys-reveal sys-slide-r sys-delay-300">
<div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
<span className="text-[10px] text-white uppercase tracking-widest">
                    Operational Status
                  </span>
<div className="w-1.5 h-1.5 bg-[#67D6C2] rounded-none animate-pulse"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>AI AGENTS</span>
<span className="text-white">22 ACTIVE</span>
</div>
<div className="w-full bg-zinc-800 h-0.5">
<div className="w-full h-full bg-[#1C997F]"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-500">
<span>DEPLOY_TIME</span>
<span className="text-white">24h - 7d</span>
</div>
</div>
</div>
</div>
<img className="absolute inset-0 w-full h-full object-cover contrast-125 grayscale brightness-50 group-hover:brightness-75 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8826ae6a-df85-4863-aa7e-53251ae70196_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1C997F]/10 mix-blend-overlay"></div>
</div>
</div>

<div className="bg-[#0B0F12] border-b border-zinc-800 p-8 md:p-16" id="about">
<div className="max-w-4xl">
<div className="font-mono text-xs text-[#1C997F] mb-4 uppercase tracking-widest">// What is Vector AI</div>
<h2 className="text-4xl text-white uppercase font-semibold tracking-tight mb-6">Your copilot for operations and marketing</h2>
<p className="text-zinc-500 font-mono text-sm leading-relaxed mb-12">Vector AI thinks, suggests, and automates without forcing you to start from scratch. Connect your campaigns, documents, and processes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-800">

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:bolt-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Zero Friction</h3>
<p className="text-xs text-zinc-500 font-mono">Boost your business without barriers. Vector AI automatizes so you can focus on growth.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Privacy by Design</h3>
<p className="text-xs text-zinc-500 font-mono">Your data is protected with military-grade encryption. Zero-trust architecture.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:chart-2-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Measurable Results</h3>
<p className="text-xs text-zinc-500 font-mono">Real-time analytics. You know exactly what works and what doesn't.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:graph-up-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Scalable</h3>
<p className="text-xs text-zinc-500 font-mono">From startups to enterprise. Vector AI grows with you without limits.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:hand-stars-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Guided Onboarding</h3>
<p className="text-xs text-zinc-500 font-mono">Complete setup in 24h - 7 days. No consultants. No unnecessary complexity.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:chat-dots-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">12-24h Support</h3>
<p className="text-xs text-zinc-500 font-mono">Our team responds quickly. Email support that actually helps.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:globus-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Scalable Infrastructure</h3>
<p className="text-xs text-zinc-500 font-mono">Cloud native. 99.9% uptime. Architecture that supports millions of operations.</p>
</div>
</div>

<div className="group border-r border-b border-zinc-800 p-8 min-h-[280px] flex flex-col justify-between hover:bg-zinc-900/50 transition-colors">
<iconify-icon className="text-[#1C997F]" icon="solar:filters-linear" width="24"></iconify-icon>
<div>
<h3 className="text-white uppercase text-sm font-semibold mb-2">Intuitive Interface</h3>
<p className="text-xs text-zinc-500 font-mono">Modern UI designed for productivity. If you use Excel, you can use Vector AI.</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col bg-[#0B0F12] border-b border-zinc-800" id="suites">
<div className="p-8 md:p-16">
<h2 className="text-4xl text-white uppercase font-semibold tracking-tight mb-4">5 Suites. 22 AI Agents. Infinite Possibilities.</h2>
<p className="text-zinc-500 font-mono text-sm max-w-2xl">Each suite replaces $10K+/year software. Enterprise-grade AI, designed for businesses of all sizes.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 border-t border-zinc-800">

<div className="border-r border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">Marketing &amp; Sales</h3>
<p className="text-[11px] text-zinc-500 font-mono mb-6">Automate campaigns, content, SEO, email marketing, and ads with 5 specialized agents.</p>
<ul className="text-[10px] space-y-2 font-mono text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>CR Agent - Client records management</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>AI email marketing</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Social media content</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>SEO and AEO</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>AI Ad generation</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Predictive analytics</li>
</ul>
</div>

<div className="border-r border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">Financial Suite</h3>
<p className="text-[11px] text-zinc-500 font-mono mb-6">Accounting, financial reports, and analysis with 3 specialized agents.</p>
<ul className="text-[10px] space-y-2 font-mono text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Invoice generation</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>AI expense tracking</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Real-time reports</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Tax prep (1099)</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Cash flow forecasting</li>
</ul>
</div>

<div className="border-r border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">Warehouse Suite</h3>
<p className="text-[11px] text-zinc-500 font-mono mb-6">Complete inventory and logistics management with 6 specialized agents.</p>
<ul className="text-[10px] space-y-2 font-mono text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>ML demand prediction</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Automatic reorder</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Order processing</li>
</ul>
</div>

<div className="border-r border-zinc-800 p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">Operations Suite</h3>
<p className="text-[11px] text-zinc-500 font-mono mb-6">Automate daily operations and client management with 3 specialized agents.</p>
<ul className="text-[10px] space-y-2 font-mono text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Auto-capture ads</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Automatic scheduling</li>
</ul>
</div>

<div className="p-8 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest border-b border-zinc-800 pb-2">Security Suite</h3>
<p className="text-[11px] text-zinc-500 font-mono mb-6">Enterprise-level security with 5 specialized agents.</p>
<ul className="text-[10px] space-y-2 font-mono text-zinc-400">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Ethical Hacker 24/7</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Military-Grade Enc</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#1C997F]"></div>Threat detection</li>
</ul>
</div>
</div>
<div className="p-8 bg-zinc-900/10 text-center border-t border-zinc-800">
<p className="text-[10px] font-mono text-[#1C997F] uppercase tracking-widest">Our Mission: Empower entrepreneurs to do business without friction. Take AI to the next level.</p>
</div>
</div>

<div className="p-8 md:p-16 bg-[#0B0F12] border-b border-zinc-800" id="security">
<div className="mb-12">
<h2 className="text-3xl text-white uppercase font-semibold tracking-tight mb-2">Military-Grade Security That Never Sleeps</h2>
<p className="text-zinc-500 font-mono text-sm">While competitors sleep, our Ethical Hacker Agent protects your business 24/7. Enterprise security without the enterprise price tag.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Ethical Hacker Agent</h4>
<p className="text-[10px] text-zinc-500 font-mono">AI-powered penetration testing running 24/7. Finds vulnerabilities before the bad guys do.</p>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Military-Grade Encryption</h4>
<p className="text-[10px] text-zinc-500 font-mono">AES-256 encryption. The same level used by government agencies and banks.</p>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Zero-Trust Architecture</h4>
<p className="text-[10px] text-zinc-500 font-mono">Never trust, always verify. Every request is authenticated, even from inside your network.</p>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Real-Time Threat Detection</h4>
<p className="text-[10px] text-zinc-500 font-mono">AI monitors for suspicious activity 24/7. Automatic alerts and incident response.</p>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Compliance Ready</h4>
<p className="text-[10px] text-zinc-500 font-mono">SOC2, GDPR, CCPA compliant out of the box. Built for enterprise security requirements.</p>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 p-6">
<h4 className="text-white text-xs uppercase font-semibold mb-2">Data Isolation</h4>
<p className="text-[10px] text-zinc-500 font-mono">Your data stays yours. Complete isolation between tenants. No cross-contamination.</p>
</div>
</div>
<p className="mt-8 text-[10px] font-mono text-zinc-600 text-right italic">Security Suite included in Professional plan and above.</p>
</div>

<div className="p-8 md:p-16 bg-[#0B0F12] border-b border-zinc-800" id="custom">
<div className="mb-12">
<h2 className="text-3xl text-white uppercase font-semibold tracking-tight mb-2">Custom AI Solutions</h2>
<p className="text-zinc-500 font-mono text-sm">Beyond our 22 agents, we build exactly what your business needs. Enterprise-grade custom development. Your vision, our expertise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#1C997F] transition-colors">
<h4 className="text-white text-xs uppercase font-semibold mb-4">Custom AI Agents</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-6">Need an agent that doesn't exist? We design and build AI agents tailored to your specific industry, workflows, and business logic.</p>
</div>
<div className="border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#1C997F] transition-colors">
<h4 className="text-white text-xs uppercase font-semibold mb-4">System Integration</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-6">Already using Salesforce, SAP, or custom ERPs? We connect Vector AI with your existing tech stack. No rip-and-replace.</p>
</div>
<div className="border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#1C997F] transition-colors">
<h4 className="text-white text-xs uppercase font-semibold mb-4">Enterprise Solutions</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-6">For organizations with unique requirements. Dedicated infrastructure, custom SLAs, and white-label options.</p>
</div>
<div className="border border-zinc-800 p-8 flex flex-col justify-between hover:border-[#1C997F] transition-colors">
<h4 className="text-white text-xs uppercase font-semibold mb-4">AI Consulting</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-6">Not sure where to start? Our team analyzes your operations and identifies the highest-impact automation opportunities.</p>
</div>
</div>
<div className="mt-12 flex justify-center">
<a className="bg-white text-black px-12 py-4 text-xs font-mono uppercase tracking-widest font-semibold hover:bg-zinc-200 transition-colors" href="#contact">Schedule Demo</a>
</div>
</div>

<div className="p-8 md:p-16 bg-[#0B0F12] border-b border-zinc-800" id="faq">
<div className="mb-12 text-center">
<h2 className="text-3xl text-white uppercase font-semibold tracking-tight mb-2">Frequently Asked Questions</h2>
<p className="text-zinc-500 font-mono text-sm">Everything you need to know about Vector AI</p>
</div>
<div className="max-w-4xl mx-auto space-y-4">
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                What is Vector AI?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Vector AI is the first autonomous AI-powered company. It's a platform where 22 artificial intelligence agents work together as employees of a company, organized into 5 departments, to maximize ROI for entrepreneurs and businesses. The agents share data with each other and collaborate to make intelligent decisions, just like a human team but available 24/7.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                What does Vector AI do?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Vector AI automates your complete business operations. AI agents handle marketing, finance, inventory, security, and customer operations, working 24/7 without rest. Instead of hiring 5-10 employees for different departments, Vector AI gives you a complete team of agents that already know how to work together.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                How many agents does Vector AI have?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Vector AI has 22 AI agents organized into 5 Suites (departments): Marketing Suite (5 agents), Financial Suite (3 agents), Warehouse Suite (6 agents), Security Suite (5 agents), and Operations Suite (3 agents). Each agent has a specialty and works in coordination with the others.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                What are the 5 Vector AI Suites?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Marketing Suite: SEO Agent, Social Media Agent, AdGen Agent, ROAS Agent, Email Marketing Agent. Financial Suite: Financial Analyst, Financial Auditor, CPA Agent. Warehouse Suite: Forecast Agent, Anomalies Agent, Reorder Agent, Optimizer Agent, Balance Agent, Warehouse Dashboard. Security Suite: Ethical Hacker Agent, Encryption Management, Security Audit Agent, Threat Detection Agent, Compliance Agent. Operations Suite: CR Agent, Appointments Agent, Customer Service Agent.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                Who is Vector AI for?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">For entrepreneurs and businesses that want to automate their operations without hiring large teams. Ideal for: businesses selling physical products that need inventory control, marketing agencies managing multiple clients, companies needing automated financial analysis, and any business that wants to operate 24/7 without increasing payroll.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                Does Vector AI replace employees?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Vector AI doesn't replace humans, it empowers them. The agents handle repetitive tasks, data analysis, and constant monitoring so you and your team can focus on strategic decisions, customer relationships, and business growth. It's like having a team of analysts working while you sleep.</p>
</details>
<details className="group bg-zinc-900/20 border border-zinc-800 p-6">
<summary className="list-none cursor-pointer flex justify-between items-center text-white text-xs font-semibold uppercase tracking-wider">
                How do I get started with Vector AI?
                <iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-[10px] text-zinc-500 font-mono leading-relaxed">Schedule a demo with our team. We'll show you how Vector AI can work for your specific business and which agents would give you the most value based on your industry.</p>
</details>
</div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-[#0B0F12] border-b border-zinc-800" id="contact">
<div className="p-8 md:p-16 border-r border-zinc-800">
<h2 className="text-4xl text-white uppercase font-semibold tracking-tight mb-8">Let's Connect</h2>
<div className="space-y-8">
<div>
<span className="text-[10px] font-mono text-[#1C997F] uppercase tracking-widest block mb-2">Company</span>
<p className="text-white text-sm font-medium">Vector AI, Inc</p>
<p className="text-xs text-zinc-500 font-mono">Available worldwide • Remote company</p>
</div>
<div>
<span className="text-[10px] font-mono text-[#1C997F] uppercase tracking-widest block mb-2">Electronic Signal</span>
<p className="text-white text-sm font-medium">contact@vectorai.digital</p>
<p className="text-xs text-zinc-500 font-mono">Response time: 12-24 hours</p>
<p className="text-[10px] text-zinc-600 font-mono mt-1">Prefer email for faster response</p>
</div>
</div>
</div>
<div className="p-8 md:p-16 bg-zinc-900/10">
<form action="#" className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Full Name</label>
<input className="w-full bg-[#0B0F12] border border-zinc-800 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#1C997F]" type="text"/>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Email Address</label>
<input className="w-full bg-[#0B0F12] border border-zinc-800 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#1C997F]" type="email"/>
</div>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Inquiry Type</label>
<select className="w-full bg-[#0B0F12] border border-zinc-800 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#1C997F] appearance-none">
<option>Schedule Demo</option>
<option>Enterprise Query</option>
<option>Custom AI Solution</option>
</select>
</div>
<div>
<label className="block text-[10px] font-mono text-zinc-500 uppercase mb-2">Message</label>
<textarea className="w-full bg-[#0B0F12] border border-zinc-800 px-4 py-3 text-white text-xs focus:outline-none focus:border-[#1C997F]" rows="4"></textarea>
</div>
<button className="w-full bg-[#1C997F] hover:bg-[#158069] text-white py-4 text-xs font-mono uppercase tracking-widest transition-colors font-semibold">Initiate Sequence</button>
</form>
</div>
</section>
<footer className="border-t border-zinc-800 bg-[#0B0F12] text-zinc-500 font-mono relative z-20">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-[160px] relative z-10">
<div className="lg:col-span-4 border-r border-zinc-800 p-8 flex flex-col justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-[#1C997F]"></div>
<span className="text-sm font-semibold text-white tracking-widest uppercase">Vector AI</span>
</div>
<div className="text-[10px] text-zinc-600 mt-4">© 2024 Vector AI Neural Systems. All rights reserved.</div>
</div>
<div className="lg:col-span-8 p-8 flex items-center justify-end gap-12">
<div className="flex flex-col gap-2">
<span className="text-[9px] text-[#1C997F] uppercase tracking-widest">Connect</span>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-[10px] text-zinc-500 hover:text-white transition-colors" href="#">X (Twitter)</a>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest">Status</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#67D6C2] rounded-full animate-pulse"></div>
<span className="text-[10px] text-white">All Systems Operational</span>
</div>
</div>
</div>
</div>
</footer>
</div>
</main>


    </>
  );
}
