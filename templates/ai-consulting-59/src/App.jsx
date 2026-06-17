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
      
<div className="relative w-[100vw] h-[100vh] -mt-[4vw] mb-[4vw] bg-[#161616] text-[#EBE9DF] flex flex-col justify-center items-center overflow-hidden">
<div className="absolute top-10 left-10 text-[0.65rem] uppercase tracking-[0.05em] text-[#8C8A85]">
        AI Consulting Services
        <br/>
        Custom automations &amp; intelligent workflows
      </div>
<div className="flex flex-col w-full max-w-[600px] items-center">
<div className="w-[80px] h-[80px] relative mb-16 animate-[spin_8s_linear_infinite] after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-3 after:h-3 after:bg-[#161616] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full">
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(0deg)'}}></div>
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(30deg)'}}></div>
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(60deg)'}}></div>
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(90deg)'}}></div>
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(120deg)'}}></div>
<div className="absolute top-1/2 left-0 w-full h-[8px] bg-[#EBE9DF] origin-center -mt-[4px]" style={{transform: 'rotate(150deg)'}}></div>
</div>
<h1 className="text-[8rem] sm:text-[10rem] lg:text-[14rem] font-semibold tracking-tighter leading-[0.8] overflow-hidden flex mb-8">
<span className="animate-reveal" style={{animationDelay: '0.2s'}}>A</span>
<span className="animate-reveal" style={{animationDelay: '0.3s'}}>I</span>
<span className="animate-reveal" style={{animationDelay: '0.4s'}}>R</span>
<span className="animate-reveal" style={{animationDelay: '0.5s'}}>E</span>
<span className="animate-reveal" style={{animationDelay: '0.6s'}}></span>
<span className="text-[0.4em] align-super animate-reveal font-normal" style={{animationDelay: '0.7s'}}></span>
</h1>
<div className="text-[0.65rem] uppercase tracking-[0.15em] font-medium text-[#8C8A85] flex flex-col items-center gap-4">
<div className="w-[200px] h-[1px] bg-[#EBE9DF]/10 relative">
<div className="absolute left-0 top-0 h-full w-0 bg-[#EBE9DF] animate-progress"></div>
</div>
<span className="flex items-center">Real Estate Consulting</span>
</div>
</div>
<div className="absolute bottom-10 right-10 text-[0.65rem] uppercase tracking-[0.05em] text-[#8C8A85] text-right">
        © 2026 Prepared for [Client Name]
        <br/>
        Strategic AI Implementation
      </div>
</div>


<div className="lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 text-[#EBE9DF] bg-[#316C4D] w-full max-w-[1600px] pt-[4vw] pr-[4vw] pb-[4vw] pl-[4vw] gap-x-8 gap-y-8">


<header className="col-span-1 lg:col-span-12 mb-8 lg:mb-16">
<div className="text-xs uppercase tracking-wider leading-tight font-normal">
          Phase 1 — Discovery &amp; Audit
        </div>
<h1 className="text-6xl md:text-[6rem] lg:text-[8rem] font-semibold tracking-tighter leading-[0.85] mt-6 uppercase">
          Workflow Audit &amp;
          <br/>
          ROI Roadmap
        </h1>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 border-t border-[#EBE9DF] pt-8">
<div>
<div className="text-xs uppercase tracking-wider leading-tight font-normal mb-2 text-[#EBE9DF]/80">
              Phase
            </div>
<div className="text-sm font-medium">Discovery</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider leading-tight font-normal mb-2 text-[#EBE9DF]/80">
              Goal
            </div>
<div className="text-sm font-medium">Actionable Quick-Wins</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider leading-tight font-normal mb-2 text-[#EBE9DF]/80">
              Outcome
            </div>
<div className="text-sm font-medium">Phased Implementation Plan</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider leading-tight font-normal mb-2 text-[#EBE9DF]/80">
              Credit
            </div>
<div className="text-sm font-medium">100% Towards Phase 2</div>
</div>
</div>
</header>

<main className="col-span-1 lg:col-span-8 flex flex-col lg:pr-8 gap-x-12 gap-y-12">
<div className="leading-relaxed text-xl font-normal text-[#EBE9DF]/90 max-w-[800px]">
<p className="mb-8">
<strong className="text-[#EBE9DF]">
              Rapid Assessment ($5,000 | 1 week)
            </strong>
<br/>
            Focused review of one workflow with actionable quick-wins. Includes
            stakeholder interviews, workflow mapping, and 3 priority
            recommendations.
          </p>
<p className="mb-8">
<strong className="text-[#EBE9DF]">
              Full AI Readiness Audit ($10,000 – $15,000 | 2–4 weeks)
            </strong>
<br/>
            Comprehensive multi-department analysis and roadmap. Tech stack
            evaluation, competitive benchmarking, and phased implementation
            plan.
          </p>
<blockquote className="text-4xl lg:text-5xl font-medium tracking-tighter leading-[1.1] py-16 border-t border-b border-[#EBE9DF] my-16 text-[#EBE9DF]">
            "100% credit: Discovery fees fully credited toward Phase 2 if you
            proceed within 60 days."
          </blockquote>
</div>
<div className="text-xl leading-relaxed max-w-[800px] font-normal text-[#EBE9DF]/90 mt-12">
<h3 className="text-4xl md:text-5xl font-semibold mb-10 tracking-tighter text-[#EBE9DF] uppercase">
            Our 3-Step Process
          </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div>
<div className="font-semibold text-[#EBE9DF] mb-2">1. Discovery</div>
<div className="text-sm">Workflow audit and ROI roadmap</div>
</div>
<div className="">
<div className="font-semibold text-[#EBE9DF] mb-2">2. Build</div>
<div className="text-sm">Custom tools and integrations</div>
</div>
<div>
<div className="font-semibold text-[#EBE9DF] mb-2">3. Support</div>
<div className="text-sm">Optimization and iteration</div>
</div>
</div>
</div>
</main>

<aside className="col-span-1 lg:col-start-10 lg:col-span-3 flex flex-col gap-12">
<div className="border border-[#EBE9DF] p-8">
<div className="font-semibold text-lg mb-4 tracking-tight text-[#EBE9DF]">
            Terms &amp; Conditions
          </div>
<ul className="text-sm leading-relaxed text-[#EBE9DF]/90 font-normal space-y-3 list-disc pl-4">
<li>50% deposit to start</li>
<li>Full IP transfer upon completion</li>
<li>30-day warranty on all builds</li>
<li>Month-to-month support after initial commitment</li>
</ul>
</div>
<div className="flex flex-col gap-6 mt-4">
<div className="text-xs uppercase tracking-wider leading-tight font-normal mb-2 text-[#EBE9DF]/80">
            Add-On Services
          </div>
<div className="flex flex-col gap-1 border-b border-[#EBE9DF]/30 pb-3">
<div className="text-[#EBE9DF] font-semibold">Half-Day Workshop</div>
<div className="text-sm text-[#EBE9DF]/70">
              $3,500 / Up to 20 attendees
            </div>
</div>
<div className="flex flex-col gap-1 border-b border-[#EBE9DF]/30 pb-3">
<div className="text-[#EBE9DF] font-semibold">Full-Day Workshop</div>
<div className="text-sm text-[#EBE9DF]/70">
              $6,000 / Immersive AI training
            </div>
</div>
<div className="flex flex-col gap-1 border-b border-[#EBE9DF]/30 pb-3">
<div className="text-[#EBE9DF] font-semibold">Executive Strategy</div>
<div className="text-sm text-[#EBE9DF]/70">$2,500 / 2-hour session</div>
</div>
<div className="flex flex-col gap-1 border-b border-[#EBE9DF]/30 pb-3">
<div className="text-[#EBE9DF] font-semibold">Custom Prompts</div>
<div className="text-sm text-[#EBE9DF]/70">
              $3,000 – $8,000 / Library &amp; playbook
            </div>
</div>
<div className="flex flex-col gap-1 border-b border-[#EBE9DF]/30 pb-3">
<div className="text-[#EBE9DF] font-semibold">Advisory Retainer</div>
<div className="text-sm text-[#EBE9DF]/70">
              $2,000/mo / No build hours
            </div>
</div>
<div className="flex flex-col gap-1">
<div className="text-[#EBE9DF] font-semibold">Ad-Hoc Consulting</div>
<div className="text-sm text-[#EBE9DF]/70">
              $300/hr / 2-hour minimum
            </div>
</div>
</div>
</aside>

<footer className="col-span-1 lg:col-span-12 flex flex-col md:flex-row md:items-end gap-8 border-[#EBE9DF] border-t mt-8 pt-12 pb-12 gap-x-4 gap-y-4 items-start justify-between">
<div className="">
<div className="text-xs uppercase tracking-wider leading-tight font-normal text-[#EBE9DF]/80">
            Next Phase
          </div>
<div className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter mt-4 leading-none">
            PHASE 2 &amp; 3
          </div>
</div>
<div className="text-xs uppercase tracking-wider leading-tight font-normal text-left md:text-right text-[#EBE9DF]/80">
          © 2026 AI Consulting
          <br/>
          Proprietary &amp; Confidential
        </div>
</footer>
</div>
<div className="flex flex-col gap-16 text-[#EBE9DF] w-full max-w-[1200px] mt-16 mb-16 gap-x-16 gap-y-16">
<header className="flex flex-col md:flex-row md:items-end gap-4 border-[#EBE9DF]/15 border-b pb-8 gap-x-4 gap-y-4 items-start justify-between">
<div className="text-5xl sm:text-7xl md:text-[8rem] font-semibold tracking-tighter leading-[0.85] text-[#EBE9DF] uppercase">
          IMPLEMENTATION
        </div>
<div className="text-[0.65rem] uppercase tracking-widest leading-relaxed font-medium text-[#EBE9DF]/60 md:text-right">
          Protocol: Build &amp; Support
          <br/>
          Status: Active Packages
        </div>
</header>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#EBE9DF]/15 border-[#EBE9DF]/15 border gap-x-[1px] gap-y-[1px]">

<div className="bg-[#161616] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#FD4A1F]">PHASE 2</span>
<div className="w-6 h-6 border border-[#EBE9DF] flex items-center justify-center">
<div className="w-3 h-3 bg-[#EBE9DF] rounded-full"></div>
</div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              AI Tool Onboarding
            </h3>
<p className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8">
              Team training on AI platforms with custom prompt libraries and
              usage playbooks.
            </p>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/15 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Investment
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">$5k – $15k</span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Build Phase
            </div>
</div>
</div>

<div className="bg-[#161616] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#FD4A1F]">PHASE 2</span>
<div className="w-6 h-6 border border-[#EBE9DF] relative overflow-hidden">
<div className="absolute w-[1px] h-[110%] bg-[#EBE9DF] top-[-5%] left-1/2 rotate-45"></div>
</div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Workflow Automation
            </h3>
<p className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8">
              Email triage, CRM integrations, lead scoring, document processing,
              API connections.
            </p>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/15 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Investment
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $10k – $35k
            </span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Build Phase
            </div>
</div>
</div>

<div className="bg-[#161616] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#FD4A1F]">PHASE 2</span>
<div className="w-6 h-6 border border-[#EBE9DF] relative">
<div className="absolute w-[1px] h-[60%] bg-[#EBE9DF] left-1/2 top-[20%]"></div>
<div className="absolute w-[60%] h-[1px] bg-[#EBE9DF] left-[20%] top-1/2"></div>
</div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Custom AI Tool Build
            </h3>
<p className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8">
              Proprietary applications, dashboards, underwriting engines,
              analysis tools, client-facing products.
            </p>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/15 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Investment
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $25k – $75k+
            </span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Build Phase
            </div>
</div>
</div>

<div className="bg-[#161616] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#FD4A1F]">PHASE 2</span>
<div className="w-6 h-6 bg-[#EBE9DF]"></div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Full AI Transformation
            </h3>
<p className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8">
              End-to-end strategy, multiple builds, cross-department
              integrations, change management.
            </p>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/15 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Investment
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $75k – $150k+
            </span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Build Phase
            </div>
</div>
</div>

<div className="bg-[#161616] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#8C8A85]">PHASE 3</span>
<div className="w-6 h-6 border border-[#EBE9DF] rounded-full"></div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Essential Support
            </h3>
<ul className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8 space-y-1">
<li className="">• 8–10 hours included</li>
<li>• 48-hour response time</li>
<li>• 30 min/mo strategy call</li>
<li>• System monitoring included</li>
</ul>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/15 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Monthly Retainer
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $3,000
              <span className="font-normal text-[0.7em]">/ Mo</span>
</span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Ongoing Support
            </div>
</div>
</div>

<div className="bg-[#316C4D] p-8 flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#28593f] relative group">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#EBE9DF]">PHASE 3</span>
<div className="w-6 h-6 border border-[#EBE9DF] relative">
<div className="absolute w-[1px] h-[60%] bg-[#EBE9DF] left-1/2 top-[20%]"></div>
<div className="absolute w-[60%] h-[1px] bg-[#EBE9DF] left-[20%] top-1/2"></div>
</div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Growth Support
            </h3>
<ul className="text-sm leading-relaxed text-[#EBE9DF]/90 mb-8 space-y-1">
<li>• 20–25 hours included</li>
<li>• 24-hour response time</li>
<li>• Minor feature builds</li>
<li>• 60 min/mo strategy call</li>
</ul>
</div>
<div className="mt-auto border-t border-[#EBE9DF]/30 pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#FD4A1F]">
              Monthly Retainer
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $7,500
              <span className="font-normal text-[0.7em]">/ Mo</span>
</span>
<div className="mt-4 text-[0.65rem] uppercase font-semibold cursor-pointer flex items-center gap-2 text-[#EBE9DF] after:content-['↓'] after:text-lg">
              Ongoing Support
            </div>
</div>
</div>
<div className="flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-[#1c1c1c] group bg-[#161616] pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex justify-between mb-8">
<span className="font-semibold text-xs text-[#8C8A85]">PHASE 3</span>
<div className="w-6 h-6 border border-[#EBE9DF] flex items-center justify-center">
<div className="w-4 h-4 bg-[#EBE9DF]"></div>
</div>
</div>
<div className="flex-grow">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-[1.1] text-[#EBE9DF]">
              Enterprise Support
            </h3>
<ul className="text-sm leading-relaxed text-[#EBE9DF]/70 mb-8 space-y-1">
<li>• 40+ hours included</li>
<li>• Same day response time</li>
<li>• Full capacity feature builds</li>
<li>• Weekly strategy calls</li>
</ul>
</div>
<div className="border-[#EBE9DF]/15 border-t mt-auto pt-4">
<span className="block text-[0.6rem] uppercase tracking-widest mb-1 text-[#316C4D]">
              Monthly Retainer
            </span>
<span className="text-lg font-semibold text-[#EBE9DF]">
              $15,000+
              <span className="font-normal text-[0.7em]">/ Mo</span>
</span>
<div className="text-[0.65rem] uppercase cursor-pointer flex gap-2 after:content-['↓'] after:text-lg font-semibold text-[#EBE9DF] mt-4 gap-x-2 gap-y-2 items-center">
              Ongoing Support
            </div>
</div>
</div>
</div>
<footer className="grid grid-cols-1 md:grid-cols-2 pt-8 gap-8 border-t border-[#EBE9DF]/15">
<div className="flex flex-col md:flex-row gap-8 lg:gap-16">
<div className="text-[0.65rem] uppercase tracking-[0.08em] leading-relaxed font-medium text-[#EBE9DF]/60">
            All support packages include system monitoring, prompt optimization,
            and priority access.
            <br/>
            Month-to-month after 3-month commitment.
          </div>
</div>
<div className="text-left md:text-right text-[0.65rem] uppercase tracking-[0.08em] leading-relaxed font-medium text-[#EBE9DF]/60">
          Prepared for [Client Name]
          <br/>
          Proprietary and Confidential.
        </div>
</footer>
</div>

    </>
  );
}
