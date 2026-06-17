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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
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
      

<nav className="hidden md:flex fixed top-4 right-4 z-50">
<div className="backdrop-blur-md bg-[#0F1115]/70 border border-white/10 rounded-full px-6 py-3 shadow-lg">
<ul className="flex gap-6 text-sm font-medium tracking-wide text-gray-300">
<li>
<a className="hover:text-[#4FD1FF] transition-colors duration-300" href="#home">Home</a>
</li>
<li>
<a className="hover:text-[#4FD1FF] transition-colors duration-300" href="#services">Services</a>
</li>
<li>
<a className="hover:text-[#4FD1FF] transition-colors duration-300" href="#portfolio">Portfolio</a>
</li>
<li>
<a className="hover:text-[#4FD1FF] transition-colors duration-300" href="#testimonials">Testimonials</a>
</li>
<li>
<a className="hover:text-[#4FD1FF] transition-colors duration-300" href="#contact">Contact</a>
</li>
</ul>
</div>
</nav>

<section className="min-h-screen flex flex-col md:px-12 lg:px-24 border-white/5 border-b pr-6 pl-6 relative justify-center" id="home">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">

<div className="md:col-span-4 flex justify-center md:justify-start">

<div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#1a1d24] to-[#0F1115] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl shadow-[#4FD1FF]/10 relative group">
<img alt="PulseFlows Logo" className="transition-opacity duration-300 opacity-100 w-full h-full object-contain absolute" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cfd268cc-cde0-4cbc-a865-3bf0626039b3_800w.jpg"/>
<div className="hidden absolute inset-0 items-center justify-center">
<span className="text-xs text-gray-600 font-mono tracking-widest">
    PULSEFLOWS
  </span>
</div></div>
</div>

<div className="md:col-span-8 flex flex-col gap-6 md:gap-8 text-center md:text-left">
<h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                    We Bring Automation to Life with <span className="text-[#4FD1FF]">Intelligent Agents</span> And Workflows
                </h1>
<div className="space-y-4 max-w-2xl mx-auto md:mx-0">
<p className="text-base md:text-lg leading-relaxed font-light text-gray-400">
                        We design intelligent, fully autonomous AI assistants and workflows that function like your personal Jarvis or virtual employees.
                    </p>
<p className="text-base md:text-lg leading-relaxed font-light text-gray-400">
                        These agents handle real operations across marketing, social media management, data analysis, customer support, and other essential tasks.
                    </p>
<p className="text-base md:text-lg leading-relaxed font-light text-gray-400">
                        Our mission is to build smart, self-sufficient systems that run independently, so your business keeps moving even when you’re not watching.
                    </p>
</div>
</div>
</div>

<a className="absolute bottom-10 right-10 md:bottom-12 md:right-16 group" href="#services">
<div className="p-3 border border-white/10 rounded-full group-hover:border-[#4FD1FF]/50 transition-all duration-500 animate-bounce">
<svg className="lucide lucide-arrow-down w-5 h-5 text-gray-500 group-hover:text-[#4FD1FF]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</a>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#16181D]" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                    Automation Systems We Build <span className="text-gray-500 text-lg md:text-2xl font-normal ml-2 block md:inline md:ml-4 mt-1 md:mt-0">(Top 5 Types of Workflow Agents)</span>
</h2>
<p className="text-lg text-[#4FD1FF] font-medium tracking-wide">
                    Production-ready AI workflows designed to reduce workload, errors, and operational drag.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 md:p-8 bg-[#0F1115] border border-white/5 rounded-lg hover:border-[#4FD1FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4FD1FF]/5">
<div className="mb-4">
<svg className="lucide lucide-trending-up w-8 h-8 text-gray-400 group-hover:text-[#4FD1FF] transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Sales &amp; Growth Automation</h3>
<p className="text-sm text-gray-500 leading-relaxed">Lead qualification, outreach sequences, and pipeline management agents.</p>
</div>
<div className="group p-6 md:p-8 bg-[#0F1115] border border-white/5 rounded-lg hover:border-[#4FD1FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4FD1FF]/5">
<div className="mb-4">
<svg className="lucide lucide-settings w-8 h-8 text-gray-400 group-hover:text-[#4FD1FF] transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Operations &amp; Internal Systems</h3>
<p className="text-sm text-gray-500 leading-relaxed">SOP enforcement, data entry, and project coordination workflows.</p>
</div>
<div className="group p-6 md:p-8 bg-[#0F1115] border border-white/5 rounded-lg hover:border-[#4FD1FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4FD1FF]/5">
<div className="mb-4">
<svg className="lucide lucide-pen-tool w-8 h-8 text-gray-400 group-hover:text-[#4FD1FF] transition-colors" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Content &amp; Media Automation</h3>
<p className="text-sm text-gray-500 leading-relaxed">Research, drafting, scheduling, and distribution agents.</p>
</div>
<div className="group p-6 md:p-8 bg-[#0F1115] border border-white/5 rounded-lg hover:border-[#4FD1FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4FD1FF]/5">
<div className="mb-4">
<svg className="lucide lucide-network w-8 h-8 text-gray-400 group-hover:text-[#4FD1FF] transition-colors" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Multi-Agent Orchestration</h3>
<p className="text-sm text-gray-500 leading-relaxed">Complex systems where multiple AI agents collaborate to finish tasks.</p>
</div>
<div className="group p-6 md:p-8 bg-[#0F1115] border border-white/5 rounded-lg hover:border-[#4FD1FF]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#4FD1FF]/5 md:col-span-2 lg:col-span-2">
<div className="mb-4">
<svg className="lucide lucide-cpu w-8 h-8 text-gray-400 group-hover:text-[#4FD1FF] transition-colors" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Custom Agentic Systems</h3>
<p className="text-sm text-gray-500 leading-relaxed">Bespoke solutions architected specifically for unique business bottlenecks and proprietary processes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0F1115]" id="portfolio">

<div className="border-l-2 border-[#4FD1FF] pl-6 py-2">
<h2 className="text-3xl font-semibold text-white tracking-tight">Deployed Workflows</h2>
<p className="text-gray-400 mt-2">Real-world systems engineered for efficiency and scale.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div className="w-full aspect-[16/9] border border-white/10 rounded-lg overflow-hidden relative bg-[#0F1115]">
<img alt="Workflow Automation Preview" className="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e73a6869-4b76-4a6c-a17b-5a5601173f42_800w.png"/>
<div className="hidden absolute inset-0 items-center justify-center">
<span className="text-xs text-gray-600 font-mono tracking-widest text-center px-4">
                  WORKFLOW PREVIEW
                </span>
</div>
</div>



</div>

<div className="space-y-6">
<h3 className="text-2xl font-semibold text-white tracking-tight">Automated Sales &amp; Outreach Agent</h3>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        This Sales Agent workflow is designed to automate the early-stage sales process for service-based and local businesses. The agent operates on a scheduled basis and identifies a limited number of relevant businesses per day within a defined geographic or niche-based scope.
                    </p>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        Once targets are identified, the agent performs structured research using publicly available information. Based on this research, it generates a customized outreach message aligned with the business context and sends it through the available communication channel. Incoming responses are monitored and categorized automatically.
                    </p>
<div>
<h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Key Capabilities</h4>
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Scheduled lead discovery and filtering
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Business research and contextual analysis
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Personalized outreach message generation
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automated follow-up handling &amp; qualification
                            </li>
</ul>
</div>
<div className="bg-[#16181D] p-4 border-l-2 border-[#4FD1FF] rounded-r-lg">
<p className="text-xs text-gray-500 italic">
<span className="text-[#4FD1FF] not-italic font-medium">Note:</span> This workflow demonstrates sales process automation and lead qualification logic. Final sales decisions and commitments always remain under human control.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div className="w-full aspect-[16/9] border border-white/10 rounded-lg overflow-hidden relative bg-[#0F1115] lg:order-2">
<img alt="Workflow Automation Preview" className="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df62668f-0438-494e-a396-e3551d37902a_800w.png"/>
<div className="hidden absolute inset-0 items-center justify-center">
<span className="text-xs text-gray-600 font-mono tracking-widest text-center px-4">
                  WORKFLOW PREVIEW
                </span>
</div>
</div>


</div>

<div className="space-y-6 lg:order-1">
<h3 className="text-2xl font-semibold text-white tracking-tight">Intelligent Customer Support Agent</h3>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        This Customer Support Agent workflow acts as a first-line customer support assistant for businesses handling frequent and repetitive queries. The agent monitors incoming customer messages across a configured communication channel and responds using business-specific knowledge, FAQs, policies, and operating rules.
                    </p>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        It is capable of understanding intent, providing accurate responses, and escalating complex or sensitive cases when required. The agent logs all interactions to help improve customer experience.
                    </p>
<div>
<h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Key Capabilities</h4>
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automated response to common queries
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Business-specific knowledge handling
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Context-aware conversation flow
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Escalation of unresolved or critical cases
                            </li>
</ul>
</div>
<div className="bg-[#16181D] p-4 border-l-2 border-[#4FD1FF] rounded-r-lg">
<p className="text-xs text-gray-500 italic">
<span className="text-[#4FD1FF] not-italic font-medium">Note:</span> This workflow does not impersonate human staff and does not perform financial or legal actions. It is designed to assist, not replace, human support teams.
                        </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"><div className="w-full aspect-[16/9] border border-white/10 rounded-lg overflow-hidden relative bg-[#0F1115]">
<img alt="Workflow Automation Preview" className="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c57e1a67-b2e8-4c95-a6f0-0485201b4d13_800w.png"/>
<div className="hidden absolute inset-0 items-center justify-center">
<span className="text-xs text-gray-600 font-mono tracking-widest text-center px-4">
                  WORKFLOW PREVIEW
                </span>
</div>
</div>


</div>

<div className="space-y-6">
<h3 className="text-2xl font-semibold text-white tracking-tight">Centralized Operations Coordinator</h3>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        This Custom workflow acts as a centralized AI-powered operations coordination system for businesses managing multiple tools, processes, and rule-based workflows. The agent monitors incoming operational signals such as leads, requests, updates, or system events and processes them according to predefined business rules.
                    </p>
<p className="text-sm md:text-base leading-relaxed text-gray-400">
                        It analyzes context before acting, determines the appropriate next step, triggers actions across connected tools, and escalates edge cases to humans when data is incomplete or confidence is low.
                    </p>
<div>
<h4 className="text-white font-medium mb-3 text-sm uppercase tracking-wider">Key Capabilities</h4>
<ul className="space-y-2">
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monitoring inputs from multiple business systems
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Rule-based and context-aware decision support
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Coordination of actions across integrated tools
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-400">
<svg className="lucide lucide-check w-4 h-4 text-[#3EE6A8] mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Detailed logging, reporting, and operational insights
                            </li>
</ul>
</div>
<div className="bg-[#16181D] p-4 border-l-2 border-[#4FD1FF] rounded-r-lg">
<p className="text-xs text-gray-500 italic">
<span className="text-[#4FD1FF] not-italic font-medium">Note:</span> This workflow does not impersonate human staff, make financial or legal commitments, or act outside defined permissions. It operates strictly as an assistive operations agent.
                        </p>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 text-center max-w-2xl mx-auto">
<p className="text-xs text-gray-600 leading-relaxed">
<span className="text-gray-400 font-medium">Portfolio Disclaimer:</span> The workflows displayed here are demonstration builds created in a development environment. Certain nodes may appear inactive or unconfigured to prevent misuse, unauthorized execution, or exposure of credentials. Live deployments are fully configured, tested, and secured based on client-specific requirements.
                </p>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-[#16181D]" id="testimonials">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-12 border-l-2 border-[#4FD1FF] pl-4">Client Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-6 bg-[#0F1115] rounded-lg border border-white/5 relative">
<span className="text-4xl text-[#4FD1FF]/20 absolute top-4 right-6 font-serif">"</span>
<p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                        The lead qualification workflow replaced a process that used to take our sales team 2 hours every morning. The handoff to the CRM is flawless now.
                    </p>
<div>
<p className="text-white text-sm font-medium">David R.</p>
<p className="text-xs text-gray-500">SaaS Growth Lead</p>
</div>
</div>

<div className="p-6 bg-[#0F1115] rounded-lg border border-white/5 relative">
<span className="text-4xl text-[#4FD1FF]/20 absolute top-4 right-6 font-serif">"</span>
<p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                        We needed a custom solution to bridge three different tools. PulseFlows built a reliable system that just works in the background without constant maintenance.
                    </p>
<div>
<p className="text-white text-sm font-medium">Sarah M.</p>
<p className="text-xs text-gray-500">Logistics Operations</p>
</div>
</div>

<div className="p-6 bg-[#0F1115] rounded-lg border border-white/5 relative">
<span className="text-4xl text-[#4FD1FF]/20 absolute top-4 right-6 font-serif">"</span>
<p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10">
                        Communication was clear from day one. They assessed our requirements honestly and delivered the content automation agent exactly as scoped.
                    </p>
<div>
<p className="text-white text-sm font-medium">James T.</p>
<p className="text-xs text-gray-500">Digital Agency Owner</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-[#0F1115] border-t border-white/5" id="contact">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-block p-3 rounded-full bg-[#4FD1FF]/5 mb-6">
<svg className="lucide lucide-message-square-more w-6 h-6 text-[#4FD1FF]" data-lucide="message-square-more" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path><path d="M8 11h.01"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Let’s Build Your Automation</h2>
<p className="text-gray-400 text-lg mb-12 font-light">Share your requirement and we’ll assess feasibility before moving forward.</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-6">

<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 hover:border-[#4FD1FF] text-gray-300 hover:text-white transition-all duration-300" href="mailto:smartbuys25in@gmail.com">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm font-medium">Email</span>
</a>

<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 hover:border-[#4FD1FF] text-gray-300 hover:text-white transition-all duration-300" href="https://www.instagram.com/pulse_flows/" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span className="text-sm font-medium">Instagram</span>
</a>

<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 hover:border-[#4FD1FF] text-gray-300 hover:text-white transition-all duration-300" href="https://www.facebook.com/share/1BKzTNkBfo/" target="_blank">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<span className="text-sm font-medium">Facebook</span>
</a>

<a className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 hover:border-[#4FD1FF] text-gray-300 hover:text-white transition-all duration-300" href="https://t.me/pulse_flows" target="_blank">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="text-sm font-medium">Telegram</span>
</a>

<div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#16181D] border border-white/10 text-gray-500 cursor-default">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-sm font-medium select-all">pulse_flows</span>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#0F1115]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<span className="text-white font-semibold tracking-tight text-lg">PulseFlows</span>
<p className="text-xs text-gray-600 mt-1">Intelligent Automation Systems</p>
</div>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="https://pulseflows-termsandconditi.aura.build/" target="_blank">Terms &amp; Conditions</a>
</div>
<div className="flex gap-4">
<a className="text-gray-600 hover:text-[#4FD1FF] transition-colors" href="https://www.instagram.com/pulse_flows/"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-600 hover:text-[#4FD1FF] transition-colors" href="mailto:smartbuys25in@gmail.com"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
<div className="text-center mt-12">
<p className="text-[10px] text-gray-700 uppercase tracking-widest">© PulseFlows. All Systems Operational.</p>
</div>
</footer>


&gt;
    </>
  );
}
