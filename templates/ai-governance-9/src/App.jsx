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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-8 h-8 flex items-center justify-center text-neutral-900">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M50 45 C 50 45, 30 45, 30 65 C 30 85, 40 90, 50 90 C 60 90, 70 85, 70 65 C 70 45, 50 45, 50 45 Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>

<path d="M32 50 C 25 45, 15 50, 10 40 C 5 30, 15 25, 20 30" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>

<path d="M68 50 C 75 45, 85 50, 90 40 C 95 30, 85 25, 80 30" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>

<path d="M35 50 C 35 30, 25 20, 35 15 C 40 12, 45 20, 42 30" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>

<path d="M65 50 C 65 30, 75 20, 65 15 C 60 12, 55 20, 58 30" stroke="currentColor" strokeLinecap="round" strokeWidth="4"></path>
</svg>
</div>

<span className="text-lg font-semibold tracking-tighter text-neutral-900">Gorgone<span className="text-violet-800">.AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Platform</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Solutions</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Company</a>
</div>
<div>
<button className="text-sm font-medium bg-neutral-900 text-white px-5 py-2 rounded border border-neutral-900 hover:bg-neutral-800 transition-all">
                    Request Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
</span>
                Gorgone.AI Runtime Security
            </div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Regain Control of <br className="hidden md:block"/> Enterprise AI
            </h1>

<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Turn chaotic AI usage into solid governance. 
                Sovereign, secure, and fully auditable runtime enforcement for your organization.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-violet-900 text-white text-sm font-medium rounded hover:bg-violet-800 transition-all shadow-lg shadow-violet-900/10">
                    Request Early Access
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-700 text-sm font-medium rounded border border-neutral-200 hover:border-neutral-300 transition-all flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    See How It Works
                </button>
</div>

<div className="relative max-w-4xl mx-auto mt-12 p-8 md:p-12 border border-neutral-100 bg-neutral-50/50 rounded-xl shadow-sm">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm relative z-10">
<iconify-icon className="text-neutral-500" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Users</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-neutral-200 relative overflow-hidden mx-4">
<div className="absolute top-0 left-0 w-8 h-full bg-violet-600 animate-flow-h"></div>
</div>
<div className="md:hidden w-px h-12 bg-neutral-200 relative overflow-hidden my-2">
<div className="absolute top-0 left-0 w-full h-8 bg-violet-600 animate-flow-v"></div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-white border border-violet-200 shadow-[0_0_20px_rgba(139,92,246,0.15)] rounded flex items-center justify-center relative z-10">
<iconify-icon className="text-violet-700" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold text-violet-900 uppercase tracking-widest">Proxy</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-neutral-200 relative overflow-hidden mx-4">
<div className="absolute top-0 left-0 w-8 h-full bg-violet-600 animate-flow-h delay-100"></div>
</div>
<div className="md:hidden w-px h-12 bg-neutral-200 relative overflow-hidden my-2">
<div className="absolute top-0 left-0 w-full h-8 bg-violet-600 animate-flow-v delay-100"></div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-violet-900 border border-violet-950 rounded flex items-center justify-center shadow-md relative z-10">

<svg className="w-7 h-7 text-white" fill="none" viewbox="0 0 100 100">
<path d="M50 45 C 50 45, 30 45, 30 65 C 30 85, 40 90, 50 90 C 60 90, 70 85, 70 65 C 70 45, 50 45, 50 45 Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M35 50 C 35 30, 25 20, 35 15" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
<path d="M65 50 C 65 30, 75 20, 65 15" stroke="currentColor" strokeLinecap="round" strokeWidth="6"></path>
</svg>
</div>
<span className="text-xs font-semibold text-neutral-900 uppercase tracking-widest">Gorgone Engine</span>
</div>

<div className="hidden md:flex flex-1 h-px bg-neutral-200 relative overflow-hidden mx-4">
<div className="absolute top-0 left-0 w-8 h-full bg-violet-600 animate-flow-h delay-200"></div>
</div>
<div className="md:hidden w-px h-12 bg-neutral-200 relative overflow-hidden my-2">
<div className="absolute top-0 left-0 w-full h-8 bg-violet-600 animate-flow-v delay-200"></div>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-16 h-16 bg-white border border-neutral-200 rounded flex items-center justify-center shadow-sm relative z-10">
<iconify-icon className="text-neutral-500" icon="solar:cloud-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Models</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                    AI is being used. <br/><span className="text-neutral-400">You just don’t see it.</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white rounded-lg mb-6 group-hover:border-violet-300 transition-colors">
<iconify-icon className="text-neutral-900" icon="solar:ghost-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Shadow AI</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Employees are using consumer-grade AI tools across departments without IT oversight, creating invisible risk vectors.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white rounded-lg mb-6 group-hover:border-violet-300 transition-colors">
<iconify-icon className="text-neutral-900" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Data Exfiltration</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Sensitive IP, PII, and proprietary code are being sent to external models trained on public data, violating sovereignty.
                    </p>
</div>

<div className="group">
<div className="w-12 h-12 flex items-center justify-center border border-neutral-200 bg-white rounded-lg mb-6 group-hover:border-violet-300 transition-colors">
<iconify-icon className="text-neutral-900" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-3 tracking-tight">Compliance Blindspots</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        No centralized audit trail exists for AI interactions, making it impossible to adhere to GDPR or the EU AI Act.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16">
                A Runtime Control Layer for AI
            </h2>

<div className="flex flex-col items-center">

<div className="w-full max-w-sm p-6 border border-neutral-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-center gap-2 mb-2">
<iconify-icon className="text-neutral-400" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">Users &amp; Agents</span>
</div>
<p className="text-xs text-neutral-500">Employees, IDEs, and internal apps</p>
</div>

<div className="h-10 w-px bg-neutral-200 my-2 relative">
<div className="absolute top-0 left-0 w-full h-4 bg-violet-600 animate-flow-v"></div>
</div>

<div className="w-full max-w-sm p-6 border border-neutral-200 rounded-lg bg-neutral-50">
<div className="flex items-center justify-center gap-2 mb-2">
<iconify-icon className="text-neutral-600" icon="solar:server-square-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">Network Proxy</span>
</div>
<p className="text-xs text-neutral-500">Transparent interception layer</p>
</div>

<div className="h-10 w-px bg-neutral-200 my-2 relative">
<div className="absolute top-0 left-0 w-full h-4 bg-violet-600 animate-flow-v delay-100"></div>
</div>

<div className="w-full max-w-sm p-6 border border-violet-200 rounded-lg bg-violet-50/30 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-500/5 blur-xl"></div>
<div className="relative z-10">
<div className="flex items-center justify-center gap-2 mb-2">
<iconify-icon className="text-violet-700" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-violet-900 tracking-tight">Gorgone Engine</span>
</div>
<p className="text-xs text-violet-800/70">Policy enforcement, PII redaction, logging</p>
</div>
</div>

<div className="h-10 w-px bg-neutral-200 my-2 relative">
<div className="absolute top-0 left-0 w-full h-4 bg-violet-600 animate-flow-v delay-200"></div>
</div>

<div className="w-full max-w-sm p-6 border border-neutral-200 rounded-lg bg-white opacity-80">
<div className="flex items-center justify-center gap-2 mb-2">
<iconify-icon className="text-neutral-400" icon="solar:cloud-check-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">Approved Models</span>
</div>
<p className="text-xs text-neutral-500">OpenAI, Anthropic, Mistral, Llama</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.05)] transition-all duration-300">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center mb-6 text-violet-800">
<iconify-icon icon="solar:eye-scan-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Runtime Observability</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Gain complete visibility into every prompt and completion. Identify which models are being used, by whom, and for what purpose in real-time.
                    </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.05)] transition-all duration-300">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center mb-6 text-violet-800">
<iconify-icon icon="solar:traffic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Policy Enforcement</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Define granular rules. Block specific keywords, redact PII automatically before it leaves your network, or route traffic to cheaper models.
                    </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.05)] transition-all duration-300">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center mb-6 text-violet-800">
<iconify-icon icon="solar:siderbar-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Agent Governance</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        As AI agents become autonomous, control their output and tool access. Prevent agents from taking unauthorized actions or executing harmful code.
                    </p>
</div>

<div className="group p-8 border border-neutral-200 rounded-xl hover:border-violet-200 hover:shadow-[0_4px_20px_rgba(139,92,246,0.05)] transition-all duration-300">
<div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center mb-6 text-violet-800">
<iconify-icon icon="solar:file-check-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 mb-3 tracking-tight">Compliance-Ready Audit Logs</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Every interaction is logged with full metadata. Trace decisions back to the source for GDPR, EU AI Act, and internal compliance audits.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 text-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Built for regulated environments.
                </h2>
<p className="text-neutral-400 text-lg mb-10 font-light">
                    Our infrastructure is designed for banking, insurance, healthcare, and government entities requiring absolute sovereignty.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm">On-premise or Private VPC deployment options</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm">End-to-end encryption in transit and at rest</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm">Country-specific data residency (EU/CH)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm">Zero data retention by external model providers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-violet-500 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm">Single-tenant architecture available</span>
</li>
</ul>
</div>

<div className="relative bg-neutral-900 border border-neutral-800 rounded-xl p-8 shadow-2xl">

<div className="flex gap-2 mb-6">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="font-mono text-xs space-y-3 text-neutral-400">
<div className="flex items-center gap-2">
<span className="text-violet-400">policy:</span>
<span className="text-white">block_pii</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="text-neutral-500">enabled:</span>
<span className="text-green-400">true</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="text-neutral-500">detectors:</span>
<span className="text-white">[ "iban", "ssn", "email" ]</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="text-neutral-500">action:</span>
<span className="text-white">"redact"</span>
</div>
<div className="h-px bg-neutral-800 my-4"></div>
<div className="flex items-center gap-2">
<span className="text-violet-400">audit_log:</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="text-neutral-500">destination:</span>
<span className="text-white">"s3://gorgone-secure-audit"</span>
</div>
<div className="flex items-center gap-2 pl-4">
<span className="text-neutral-500">encryption:</span>
<span className="text-white">"AES-256"</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-8 leading-tight">
                AI should be powerful. <br/> Not uncontrollable.
            </h2>
<p className="text-xl text-neutral-500 font-light leading-relaxed">
                We are shifting the focus from model-centric innovation to runtime governance. 
                As enterprises integrate LLMs into core processes, the control plane becomes 
                more critical than the model itself.
            </p>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
                Become a Design Partner
            </h2>
<p className="text-neutral-500 mb-10 max-w-lg mx-auto">
                We are working with a limited number of enterprises to define the European standard for AI governance.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3 bg-white border border-neutral-200 rounded text-sm focus:outline-none focus:border-violet-500 transition-colors text-neutral-900 placeholder:text-neutral-400" placeholder="work@company.com" type="email"/>
<button className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded hover:bg-neutral-800 transition-colors" type="button">
                    Request Access
                </button>
</form>
<p className="text-xs text-neutral-400 mt-6">
                Limited spots available for Q3 2024.
            </p>
</div>
</section>

<footer className="bg-white py-12 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900 tracking-tighter">

<div className="w-4 h-4 text-neutral-900">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M50 45 C 50 45, 30 45, 30 65 C 30 85, 40 90, 50 90 C 60 90, 70 85, 70 65 C 70 45, 50 45, 50 45 Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M35 50 C 35 30, 25 20, 35 15" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
<path d="M65 50 C 65 30, 75 20, 65 15" stroke="currentColor" strokeLinecap="round" strokeWidth="8"></path>
</svg>
</div>
                Gorgone<span className="text-violet-800">.AI</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Security</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-neutral-400">
                © 2024 Gorgone AI Ltd. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
