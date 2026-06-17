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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up, .reveal-scale').forEach(el => {
                observer.observe(el);
            });
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
      

<nav className="fixed w-full top-0 z-50 glass-card border-b border-slate-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0057FF] to-[#F5A623] flex items-center justify-center text-white font-semibold text-lg tracking-tighter">
                        AF
                    </div>
<span className="font-semibold text-lg tracking-tight text-slate-900">AgentForce Solutions</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#0057FF] transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0057FF] transition-colors" href="#">Success Stories</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#0057FF] transition-colors" href="#">About</a>
</div>
<div className="hidden md:flex items-center">
<a className="text-sm font-medium text-white bg-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-sm" href="#">
                        Contact Us
                    </a>
</div>
<div className="flex md:hidden items-center">
<button className="text-slate-600 hover:text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 -left-4 w-72 h-72 bg-[#F5A623] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob pointer-events-none"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-[#0057FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] pointer-events-none z-[-1]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl reveal-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-[#0057FF] mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057FF]"></span>
</span>
                        Next-Gen AI Deployment
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        Power Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#00A3FF]">Agentforce</span>
</h1>
<p className="mt-6 text-lg text-slate-500 font-light leading-relaxed max-w-xl">
                        Expert AI-driven implementation and optimization services to unlock the full potential of your Salesforce ecosystem. Scale faster, operate smarter.
                    </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 rounded-full text-sm font-medium text-slate-900 bg-[#F5A623] hover:bg-yellow-400 transition-all duration-300 shadow-[0_4px_14px_0_rgba(245,166,35,0.39)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.23)] hover:-translate-y-0.5" href="#">
                            Get Started
                        </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 rounded-full text-sm font-medium text-[#0057FF] bg-transparent border border-[#0057FF]/30 hover:border-[#0057FF] hover:bg-blue-50/50 transition-all duration-300" href="#">
                            See How It Works
                        </a>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg reveal-scale">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0057FF]/10 to-[#F5A623]/10 rounded-3xl blur-2xl transform rotate-3"></div>
<div className="relative glass-card rounded-2xl border border-white/60 p-6 shadow-2xl shadow-slate-200/50 backdrop-blur-xl">

<div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0057FF] to-blue-400 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:smart-speaker-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">AI Agent Workflow</div>
<div className="text-xs text-green-500 font-medium flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Active
                                    </div>
</div>
</div>
<iconify-icon className="text-slate-400 text-lg" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex-shrink-0"></div>
<div className="w-full bg-slate-50 rounded-2xl rounded-tl-none p-3 border border-slate-100">
<div className="h-2 w-3/4 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-slate-200 rounded"></div>
</div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-[#F5A623]/20 flex items-center justify-center flex-shrink-0 text-[#F5A623]">
<iconify-icon className="text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="w-full bg-gradient-to-r from-blue-50 to-transparent rounded-2xl rounded-tr-none p-3 border border-blue-100/50">
<div className="h-2 w-full bg-[#0057FF]/20 rounded mb-2"></div>
<div className="h-2 w-5/6 bg-[#0057FF]/20 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-[#0057FF]/20 rounded"></div>
</div>
</div>
<div className="pt-2">
<div className="w-full h-12 rounded-xl border border-slate-200 bg-white flex items-center px-4 justify-between text-xs text-slate-400">
                                    Processing optimization parameters...
                                    <iconify-icon className="text-base" icon="solar:microphone-2-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
<p className="text-center text-xs font-medium tracking-widest text-slate-400 uppercase">Trusted by Leading Brands</p>
</div>
<div className="relative w-full overflow-hidden marquee-container flex">

<div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10"></div>

<div className="animate-marquee items-center space-x-12 md:space-x-24 px-12">

<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">ACME CORP</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300 flex items-center gap-1"><iconify-icon icon="solar:target-linear"></iconify-icon> NEXUS</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">GLOBAL INC</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300 flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> VERTEX</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">QUANTUM</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">SYNAPSE</span>

<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">ACME CORP</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300 flex items-center gap-1"><iconify-icon icon="solar:target-linear"></iconify-icon> NEXUS</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">GLOBAL INC</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300 flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> VERTEX</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">QUANTUM</span>
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-slate-300">SYNAPSE</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto reveal-up">
<h2 className="text-sm font-semibold text-[#0057FF] tracking-widest uppercase mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Comprehensive Agentforce Solutions</h3>
<p className="mt-4 text-base text-slate-500 font-light">We bridge the gap between AI potential and business reality through tailored deployment and continuous refinement.</p>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#0057FF]/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden reveal-up">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F5A623] to-[#0057FF] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#0057FF]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0057FF] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:widget-add-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Agentforce Implementation</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                            End-to-end deployment of Salesforce Agentforce tailored to your unique business workflows. We map, design, and integrate AI agents seamlessly into your existing CRM infrastructure to drive immediate value.
                        </p>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F5A623] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Custom Agent Persona Design
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F5A623] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                CRM Data Grounding &amp; Integration
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#F5A623] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Secure Deployment &amp; Testing
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#0057FF] group-hover:text-[#F5A623] transition-colors" href="#">
                            Learn more <iconify-icon className="ml-1 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-500 hover:-translate-y-1 overflow-hidden reveal-up" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#0057FF] to-[#F5A623] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center text-[#F5A623] mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Agentforce Optimization</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6 font-light">
                            Fine-tune and maximize the performance of your existing Agentforce setup. We analyze conversational metrics, improve resolution rates, and expand agent capabilities to ensure peak operational efficiency.
                        </p>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-[#0057FF] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Conversation Flow Refinement
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#0057FF] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                AI Accuracy &amp; Grounding Audits
                            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-[#0057FF] text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                Performance Analytics &amp; Reporting
                            </li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#0057FF] group-hover:text-[#F5A623] transition-colors" href="#">
                            Learn more <iconify-icon className="ml-1 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50/40 relative border-y border-blue-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/50 reveal-up">
<div className="py-6 md:py-0 px-4">
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-[#F5A623] mb-2 drop-shadow-sm">50+</div>
<div className="text-base font-medium text-slate-900 tracking-tight">Implementations</div>
<p className="text-xs text-slate-500 mt-2 font-light">Successfully launched across various industries.</p>
</div>
<div className="py-6 md:py-0 px-4">
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-[#0057FF] mb-2 drop-shadow-sm">98%</div>
<div className="text-base font-medium text-slate-900 tracking-tight">Client Satisfaction</div>
<p className="text-xs text-slate-500 mt-2 font-light">Rated excellent for our dedicated support and expertise.</p>
</div>
<div className="py-6 md:py-0 px-4">
<div className="text-5xl lg:text-6xl font-semibold tracking-tighter text-[#F5A623] mb-2 drop-shadow-sm">3x</div>
<div className="text-base font-medium text-slate-900 tracking-tight">Faster Deployment</div>
<p className="text-xs text-slate-500 mt-2 font-light">Compared to industry averages using our frameworks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What Our Partners Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 reveal-up" style={{transitionDelay: '100ms'}}>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 border-l-4 border-l-[#0057FF] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
<iconify-icon className="text-4xl text-[#F5A623] mb-6 opacity-80" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base text-slate-600 font-light italic leading-relaxed flex-grow">
                        "AgentForce Solutions completely transformed our customer service operations. Their understanding of the Salesforce ecosystem and AI capabilities allowed us to automate 40% of our level 1 tickets within the first month. The team's expertise is unmatched."
                    </p>
<div className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Sarah Jenkins</div>
<div className="text-xs text-slate-500">VP of Customer Success, TechFlow</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 border-l-4 border-l-[#F5A623] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
<iconify-icon className="text-4xl text-[#0057FF] mb-6 opacity-80" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-base text-slate-600 font-light italic leading-relaxed flex-grow">
                        "We struggled to get our initial AI agents properly grounded with our data. AFS stepped in for an optimization project and dramatically reduced hallucinations while improving response accuracy by 60%. They are absolute professionals."
                    </p>
<div className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0"></div>
<div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Marcus Chen</div>
<div className="text-xs text-slate-500">Director of IT, GlobalRetail</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#0057FF] to-blue-600 z-0"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] z-0 opacity-50"></div>
<div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F5A623] rounded-full mix-blend-overlay filter blur-3xl opacity-50 pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal-up">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Ready to Transform Your Salesforce Experience?
            </h2>
<p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto font-light">
                Book a free strategy session with our AI architects to discover how Agentforce can drive efficiency and growth for your organization.
            </p>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full text-sm font-semibold text-[#0057FF] bg-white hover:bg-[#F5A623] hover:text-white transition-all duration-300 shadow-xl hover:shadow-[#F5A623]/20 hover:-translate-y-1" href="#">
                Book a Free Consultation
            </a>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-[#0057FF] flex items-center justify-center text-white font-semibold text-xs tracking-tighter">
                            AF
                        </div>
<span className="font-semibold text-base tracking-tight text-[#0057FF]">AgentForce Solutions</span>
</div>
<p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
                        Empowering enterprises with intelligent, data-grounded AI agents built on the Salesforce platform.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#F5A623] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Services</h4>
<ul className="space-y-3 text-sm font-light text-slate-500">
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Implementation</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Optimization</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Strategy Consulting</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Training &amp; Support</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm font-light text-slate-500">
<li><a className="hover:text-[#0057FF] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 text-sm font-light text-slate-500">
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#0057FF] transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2024 AgentForce Solutions. All rights reserved. Salesforce and Agentforce are trademarks of Salesforce, Inc.
                </p>
</div>
</div>
</footer>



    </>
  );
}
