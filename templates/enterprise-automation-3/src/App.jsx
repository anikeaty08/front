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



      // Page Loader
      window.addEventListener('load', () => {
        const loader = document.getElementById('loader');
        setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
            loader.style.display = 'none';
          }, 700);
        }, 500);
      });

      // Mobile Menu Toggle
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
      
      menuToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenu.classList.remove('flex');
        }
      });

      // Scroll Animation Observer
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      }, observerOptions);

      document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
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
      

<div className="fixed inset-0 z-[100] bg-[#050505] flex items-center justify-center transition-opacity duration-700" id="loader">
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
<span className="text-xs font-medium tracking-widest text-white uppercase">Initializing</span>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white z-50" href="#">SUFFIX</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#process">How It Works</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#case-studies">Case Studies</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium" href="#contact">
            Book Audit
          </a>
</div>

<button className="md:hidden text-white z-50" id="menu-toggle">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/5 flex-col p-6 gap-6 md:hidden" id="mobile-menu">
<a className="text-lg text-white font-medium" href="#services">Services</a>
<a className="text-lg text-white font-medium" href="#process">How It Works</a>
<a className="text-lg text-white font-medium" href="#case-studies">Case Studies</a>
<a className="text-lg text-white font-medium" href="#pricing">Pricing</a>
<a className="btn-primary w-full text-center py-3 rounded-full font-medium" href="#contact">Book Audit</a>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="glow-blob w-[800px] h-[800px] top-[-200px] left-1/2 -translate-x-1/2 opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 uppercase tracking-wide">Accepting Enterprise Clients</span>
</div>
<h1 className="fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
          Operational velocity <br/>
<span className="text-neutral-500">through intelligence.</span>
</h1>
<p className="fade-up delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          SUFFIX architects custom automation ecosystems. We replace manual bottlenecks with autonomous workflows, compounding your efficiency and ROI.
        </p>
<div className="fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto btn-primary h-12 px-8 rounded-full flex items-center justify-center gap-2 font-medium" href="#contact">
            Book Free Automation Audit
            <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 hover:bg-white/5 text-white flex items-center justify-center transition-all font-medium" href="#services">
            Explore Solutions
          </a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-neutral-600 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tighter text-white">ACME Corp</div>
<div className="text-xl font-bold tracking-tighter text-white">Vertex</div>
<div className="text-xl font-bold tracking-tighter text-white">Lumina</div>
<div className="text-xl font-bold tracking-tighter text-white">Bolt.ai</div>
<div className="text-xl font-bold tracking-tighter text-white">Nexus</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end gap-6">
<div className="fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-neutral-400 max-w-lg font-light">We don't just connect apps. We engineer full-stack operational infrastructures tailored to your business model.</p>
</div>
<a className="fade-up delay-100 text-sm font-medium text-white border-b border-white/30 pb-1 hover:border-white transition-colors" href="#contact">View all capabilities</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="service-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] fade-up delay-100 group">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:workflow" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Workflow Automation</h3>
<p className="text-sm leading-relaxed font-light">End-to-end process orchestration. We connect your disparate tools into a single, self-driving ecosystem.</p>
</div>

<div className="service-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] fade-up delay-200 group">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:database" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">CRM &amp; Sales Systems</h3>
<p className="text-sm leading-relaxed font-light">Automated lead enrichment, scoring, and follow-up sequences that fill your pipeline while you sleep.</p>
</div>

<div className="service-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] fade-up delay-300 group">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:bot" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Conversational AI</h3>
<p className="text-sm leading-relaxed font-light">Custom LLM agents that handle customer support, internal queries, and data retrieval instantly.</p>
</div>

<div className="service-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] fade-up delay-100 group">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:bar-chart-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Process Optimization</h3>
<p className="text-sm leading-relaxed font-light">Strategic auditing of operations to identify redundancies before applying digital leverage.</p>
</div>

<div className="service-card p-8 rounded-2xl border border-white/5 bg-white/[0.02] fade-up delay-200 group">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Custom Systems</h3>
<p className="text-sm leading-relaxed font-light">Bespoke scripts and API integrations for complex scenarios that standard low-code tools cannot handle.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-white/[0.02]" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center text-white mb-16 fade-up">Deployment Protocol</h2>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="relative pt-6 md:pt-12 fade-up delay-100">
<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-neutral-700 rounded-full bg-[#050505] z-10"></div>
<span className="text-xs font-mono text-neutral-500 mb-2 block">01</span>
<h3 className="text-lg font-medium text-white mb-2">Audit</h3>
<p className="text-sm text-neutral-400 font-light">Deep dive analysis of current workflows to identify high-impact automation opportunities.</p>
</div>

<div className="relative pt-6 md:pt-12 fade-up delay-200">
<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-neutral-700 rounded-full bg-[#050505] z-10"></div>
<span className="text-xs font-mono text-neutral-500 mb-2 block">02</span>
<h3 className="text-lg font-medium text-white mb-2">Architecture</h3>
<p className="text-sm text-neutral-400 font-light">Designing a scalable blueprint using best-in-class tools suited to your specific tech stack.</p>
</div>

<div className="relative pt-6 md:pt-12 fade-up delay-300">
<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 border-2 border-neutral-700 rounded-full bg-[#050505] z-10"></div>
<span className="text-xs font-mono text-neutral-500 mb-2 block">03</span>
<h3 className="text-lg font-medium text-white mb-2">Implementation</h3>
<p className="text-sm text-neutral-400 font-light">Agile development and integration of systems with rigorous testing environments.</p>
</div>

<div className="relative pt-6 md:pt-12 fade-up delay-100">
<div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10"></div>
<span className="text-xs font-mono text-neutral-500 mb-2 block">04</span>
<h3 className="text-lg font-medium text-white mb-2">Handover</h3>
<p className="text-sm text-neutral-400 font-light">Comprehensive documentation, team training, and ongoing optimization support.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="case-studies">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Built for scale.</h2>
<p className="text-neutral-400 font-light mb-8 text-lg">Whether you are a hyper-growth SaaS or an established financial institution, our systems adapt to your regulatory and operational requirements.</p>
<div className="grid grid-cols-2 gap-4">
<div className="p-5 rounded-xl border border-white/5 bg-white/5">
<div className="text-3xl font-semibold text-white mb-1">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Hours Saved Monthly</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-white/5">
<div className="text-3xl font-semibold text-white mb-1">40%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Cost Reduction</div>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="fade-up delay-100 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:landmark" width="24"></iconify-icon>
<h4 className="font-medium text-white mb-1">FinTech</h4>
<p className="text-xs text-neutral-500">Automated KYC &amp; Reporting</p>
</div>

<div className="fade-up delay-200 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:stethoscope" width="24"></iconify-icon>
<h4 className="font-medium text-white mb-1">Healthcare</h4>
<p className="text-xs text-neutral-500">Patient Onboarding Flows</p>
</div>

<div className="fade-up delay-300 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:shopping-bag" width="24"></iconify-icon>
<h4 className="font-medium text-white mb-1">E-Commerce</h4>
<p className="text-xs text-neutral-500">Inventory &amp; Logistics Sync</p>
</div>

<div className="fade-up delay-100 p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-white/20 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:building-2" width="24"></iconify-icon>
<h4 className="font-medium text-white mb-1">Real Estate</h4>
<p className="text-xs text-neutral-500">Tenant Lead Management</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#080808]" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium text-indigo-400 uppercase tracking-widest mb-4 fade-up">About Us</h2>
<h3 className="text-2xl md:text-4xl font-medium text-white mb-8 fade-up delay-100">The Architects of Efficiency</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-10 fade-up delay-200">
          We are a team of engineers, strategists, and data scientists obsessed with eliminating the mundane. SUFFIX was founded on the belief that human potential should be spent on creativity and strategy, not repetitive data entry.
        </p>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center text-white mb-16 fade-up">Engagement Models</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="fade-up delay-100 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Project Sprint</h3>
<p className="text-sm text-neutral-500 mt-2">One-time implementation for specific bottlenecks.</p>
</div>
<div className="my-6 space-y-3 flex-grow">
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>System Audit</div>
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>Custom Development</div>
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>30 Days Support</div>
</div>
<a className="w-full block text-center py-3 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#contact">Inquire</a>
</div>

<div className="fade-up delay-200 p-8 rounded-2xl border border-white/20 bg-white/[0.03] flex flex-col relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Growth Partner</h3>
<p className="text-sm text-neutral-500 mt-2">Ongoing optimization and new feature rollouts.</p>
</div>
<div className="my-6 space-y-3 flex-grow">
<div className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-indigo-400" icon="lucide:check"></iconify-icon>Unlimited Workflows</div>
<div className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-indigo-400" icon="lucide:check"></iconify-icon>Weekly Maintenance</div>
<div className="flex items-center text-sm text-neutral-300"><iconify-icon className="mr-3 text-indigo-400" icon="lucide:check"></iconify-icon>Priority Support</div>
</div>
<a className="w-full block text-center py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="#contact">Start Subscription</a>
</div>

<div className="fade-up delay-300 p-8 rounded-2xl border border-white/10 bg-[#0a0a0a] flex flex-col">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-neutral-500 mt-2">For large organizations requiring SLA &amp; Security.</p>
</div>
<div className="my-6 space-y-3 flex-grow">
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>Custom SLAs</div>
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>On-premise / Private Cloud</div>
<div className="flex items-center text-sm text-neutral-400"><iconify-icon className="mr-3 text-white" icon="lucide:check"></iconify-icon>Dedicated Engineer</div>
</div>
<a className="w-full block text-center py-3 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">

<div className="glow-blob w-[600px] h-[600px] bottom-[-200px] right-[-100px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 fade-up">Ready to automate the mundane?</h2>
<p className="text-lg text-neutral-400 font-light mb-10 fade-up delay-100">
          Book a free 30-minute audit. We'll outline exactly where you are losing time and how much you could save.
        </p>
<form className="max-w-md mx-auto space-y-4 text-left fade-up delay-200">
<div>
<label className="sr-only" htmlFor="email">Work Email</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" id="email" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full btn-primary h-12 rounded-lg flex items-center justify-center gap-2 font-medium" type="button">
            Book Free Audit
            <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-neutral-600 mt-4">No commitment required. 100% confidential.</p>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1">
<a className="text-lg font-semibold tracking-tighter text-white" href="#">SUFFIX</a>
<p className="mt-4 text-xs text-neutral-500 leading-relaxed">Building the autonomous enterprise of tomorrow, today.</p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">AI Workflows</a></li>
<li><a className="hover:text-white transition-colors" href="#">CRM Automation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chatbots</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 SUFFIX Automation. All rights reserved.</p>
<div className="flex gap-4 text-neutral-600">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
