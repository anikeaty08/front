import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function toggleAI() {
          const checkbox = document.getElementById('ai-toggle');
          const box = document.getElementById('ai-response-box');

          if (checkbox.checked) {
              // Sovereign Mode
              box.className = "bg-emerald-50 border border-emerald-100 px-4 py-3 rounded-2xl rounded-tr-none text-sm transition-all duration-300";
              box.innerHTML = `
                  <div class="flex items-center gap-2 text-emerald-700 font-medium mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                      Intent Detected: Urgent Payment
                  </div>
                  <span class="text-xs text-emerald-600/80">Confidence Score: 0.98. Routing to priority handling.</span>
              `;
          } else {
              // Standard Mode
              box.className = "bg-red-50 border border-red-100 px-4 py-3 rounded-2xl rounded-tr-none text-sm transition-all duration-300";
              box.innerHTML = `
                  <div class="flex items-center gap-2 text-red-700 font-medium mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                      Intent Unclear
                  </div>
                  <span class="text-xs text-red-600/80">Low confidence score (0.12). Routing to general queue.</span>
              `;
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none" style={{opacity: '0.6'}}>
<div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
</div>

<div aria-hidden="true" className="fixed inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-emerald-600 rounded-sm flex items-center justify-center">
<svg fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">
            agentra
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#problem">
            THE PROBLEM
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#solution">
            SOLUTION
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#cases">
            RESULTS
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">
            PRICING
          </a>
</div>
<a className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 to-neutral-300 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300" href="#contact">
<div className="relative h-full w-full bg-white/50 rounded-[1px] px-3 sm:px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-600 group-hover:text-black transition-colors">
              Book Audit
            </span>
</div>
</a>
</div>
</nav>

<main className="sm:pt-32 sm:pb-24 sm:px-6 max-w-6xl z-10 mr-auto ml-auto pt-24 pr-4 pb-12 pl-4 relative">
<div className="flex flex-col md:pl-12 sm:pl-8 sm:gap-8 border-neutral-200 border-l pb-20 pl-6 relative gap-x-6 gap-y-6 items-start">

<div aria-hidden="true" className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white border border-neutral-200"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-neutral-50/80 backdrop-blur-sm border border-neutral-200 rounded-full animate-in animate-in-delay-1 shadow-sm">
<svg className="text-emerald-600" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-[10px] uppercase font-medium text-neutral-600 tracking-wide">
            Zero Data Leakage. 100% On-Premise.
          </span>
</div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] animate-in animate-in-delay-2 text-3xl font-medium text-neutral-900 tracking-tighter">
          Stop Guessing.
          <br/>
<span className="text-neutral-400">Start Knowing.</span>
</h1>
<p className="md:text-base leading-relaxed animate-in animate-in-delay-2 text-sm font-light text-neutral-500 max-w-xl">
          Unlock the 98% of customer insights your manual reviews miss. We
          analyze 100% of your calls for compliance, sentiment, and agent
          performance—securely on your own infrastructure.
        </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto animate-in animate-in-delay-3">
<div className="p-[1px] rounded-sm bg-gradient-to-b from-neutral-700 to-neutral-900 w-full sm:w-auto shadow-sm">
<a className="block hover:bg-neutral-800 transition-colors text-xs font-semibold text-white tracking-wide text-center bg-neutral-900 w-full h-full rounded-[1px] pt-3.5 pr-6 pb-3.5 pl-6" href="#contact">
              BOOK A CALL
            </a>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-neutral-200 animate-in animate-in-delay-3">
<p className="text-[10px] font-mono uppercase text-neutral-400 text-center tracking-widest mb-6">
          Trusted by forward-thinking SMEs in High-Compliance Markets
        </p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="font-bold tracking-tight text-neutral-800">
              NeoFin
            </span>
</div>
<div className="flex items-center gap-2">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
<span className="font-bold tracking-tight text-neutral-800">
              JavaBank
            </span>
</div>
<div className="flex items-center gap-2">
<svg className="text-purple-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="font-bold tracking-tight text-neutral-800">
              InsureCo
            </span>
</div>
<div className="flex items-center gap-2">
<svg className="text-orange-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12l-4-4-4 4M12 16V8"></path>
</svg>
<span className="font-bold tracking-tight text-neutral-800">
              NorthStar
            </span>
</div>
<div className="flex items-center gap-2">
<svg className="text-cyan-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20h20M2 4h20M2 12h20"></path>
</svg>
<span className="font-bold tracking-tight text-neutral-800">
              EquiServe
            </span>
</div>
</div>
</div>
</main>

<section className="py-16 sm:py-24 border-y border-neutral-200 bg-white relative z-10" id="problem">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-[10px] font-mono text-red-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-red-500 rounded-full"></span>
          The 1% Trap
        </h2>
<h3 className="sm:text-3xl md:text-4xl sm:mb-12 text-2xl font-medium text-neutral-900 tracking-tighter mb-8">
          Your Call Center is a
          <span className="text-neutral-400">Black Box</span>
          .
        </h3>
<p className="md:text-base leading-relaxed text-sm font-light text-neutral-500 max-w-2xl mb-12">
          You record thousands of hours, but manual review only hears ~1%. The
          disasters are hiding in the 99% you miss.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 text-orange-500 shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">
                Lost Revenue
              </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                Agents are missing upsell cues while supervisors are busy with
                paperwork. Money is left on the table daily.
              </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 text-red-500 shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">
                Compliance Risks
              </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                A missed disclaimer today is a regulator's fine tomorrow. Manual
                checks can't scale to meet audit demands.
              </p>
</div>
</div>

<div className="group relative rounded-sm p-[1px] bg-gradient-to-b from-neutral-200 via-neutral-200 to-neutral-300 hover:from-neutral-300 hover:via-neutral-400 hover:to-neutral-500 transition-all duration-500 h-full">
<div className="p-6 sm:p-8 bg-neutral-50 rounded-[1px] h-full relative z-10">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-neutral-200 mb-4 text-neutral-600 shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="8.5" cy="7" r="4"></circle>
<line x1="18" x2="23" y1="8" y2="13"></line>
<line x1="23" x2="18" y1="8" y2="13"></line>
</svg>
</div>
<h4 className="text-base font-medium text-neutral-900 tracking-tight mb-2">
                Hidden Churn
              </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
                Customers are telling you exactly why they are leaving, but
                nobody is listening until it's too late.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 bg-neutral-50 z-10 pt-16 pb-16 relative border-b border-neutral-200" id="solution">
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
<div>
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              Total Visibility
            </h2>
<h3 className="text-2xl font-medium text-neutral-900 tracking-tighter sm:text-3xl">
              Turn Voice Data into Revenue
            </h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200">
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-6 flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
<path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10"></path>
</svg>
<span className="text-[10px] font-mono uppercase text-neutral-500">
                Feature 01
              </span>
</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">
              The Performance Coach
            </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
              Clone your best agents. Identify silence, interruptions, and
              script adherence to train your team effectively.
            </p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-6 flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12l-4-4-4 4M12 16V8"></path>
</svg>
<span className="text-[10px] font-mono uppercase text-neutral-500">
                Feature 02
              </span>
</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">
              The Revenue Radar
            </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
              Predict churn before it happens. Sentiment heatmaps and competitor
              mention tracking in real-time.
            </p>
</div>
<div className="bg-white p-6 sm:p-10 hover:bg-neutral-50 transition-colors duration-300">
<div className="mb-6 flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
<span className="text-[10px] font-mono uppercase text-neutral-500">
                Feature 03
              </span>
</div>
<h4 className="sm:text-lg text-base font-medium text-neutral-900 tracking-tight mb-3">
              The Compliance Shield
            </h4>
<p className="leading-relaxed text-xs font-light text-neutral-500">
              Automate guardrails. Real-time verification of mandatory scripts
              (CBN/OJK/GDPR) and auto-redaction of PII.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">
            Competitive Edge
          </h2>
<h3 className="text-2xl sm:text-3xl font-medium text-neutral-900 tracking-tighter mb-4">
            Enterprise Power. SME Economics.
          </h3>
<p className="text-xs text-neutral-500 font-light">
            Why an in-house solution beats third-party products.
          </p>
</div>
<div className="border border-neutral-200 rounded-sm overflow-hidden text-sm">

<div className="grid grid-cols-3 bg-neutral-50 border-b border-neutral-200">
<div className="p-4 font-mono text-[10px] uppercase tracking-wider text-neutral-500 flex items-center">
              Feature
            </div>
<div className="p-4 bg-emerald-50/50 border-x border-emerald-100 font-bold text-emerald-700 text-center">
              In-House (Agentra)
            </div>
<div className="p-4 text-center font-medium text-neutral-600">
              Third-Party
            </div>
</div>

<div className="grid grid-cols-3 border-b border-neutral-100">
<div className="p-4 font-medium text-neutral-900 flex items-center">
              Dialects
            </div>
<div className="p-4 bg-emerald-50/20 border-x border-emerald-50 text-center text-neutral-700">
              Native
              <br/>
<span className="text-[10px] text-neutral-500">
                (Pidgin, Hinglish, Javanese)
              </span>
</div>
<div className="p-4 text-center text-neutral-500">
              Generic
              <br/>
<span className="text-[10px] text-neutral-400">
                (Standard English Only)
              </span>
</div>
</div>

<div className="grid grid-cols-3 border-b border-neutral-100">
<div className="p-4 font-medium text-neutral-900 flex items-center">
              Data Privacy
            </div>
<div className="p-4 bg-emerald-50/20 border-x border-emerald-50 text-center text-neutral-700">
<span className="inline-flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Zero Leakage
              </span>
<br/>
<span className="text-[10px] text-neutral-500">
                Data stays on your servers
              </span>
</div>
<div className="p-4 text-center text-neutral-500">
              High Risk
              <br/>
<span className="text-[10px] text-neutral-400">
                Sent to 3rd party cloud
              </span>
</div>
</div>

<div className="grid grid-cols-3">
<div className="p-4 font-medium text-neutral-900 flex items-center">
              Cost Model
            </div>
<div className="p-4 bg-emerald-50/20 border-x border-emerald-50 text-center text-neutral-700">
              Flat Rate
              <br/>
<span className="text-[10px] text-neutral-500">
                Unlimited Processing
              </span>
</div>
<div className="p-4 text-center text-neutral-500">
              Per-Minute Tax
              <br/>
<span className="text-[10px] text-neutral-400">
                Costs explode with volume
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200 relative overflow-hidden">
<div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-4">
              Sovereign Mode
            </h2>
<h3 className="text-3xl font-medium text-neutral-900 tracking-tighter mb-6">
              AI That Speaks Your Language
            </h3>
<p className="text-sm font-light text-neutral-500 leading-relaxed mb-8">
              Standard models fail on code-switching and local dialects. Agentra
              is trained on your specific customer vocabulary, ensuring intent
              is never lost in translation.
            </p>

<div className="flex items-center gap-3">
<span className="text-xs font-medium text-neutral-500">
                Standard AI
              </span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="ai-toggle" onchange="toggleAI()" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
</label>
<span className="text-xs font-medium text-emerald-600">
                Sovereign Mode
              </span>
</div>
</div>
<div className="md:w-1/2 w-full">
<div className="bg-white border border-neutral-200 rounded-sm p-6 shadow-sm min-h-[200px] flex flex-col justify-center relative">

<div className="flex gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] text-neutral-500">
                  C
                </div>
<div className="bg-neutral-100 px-4 py-2 rounded-2xl rounded-tl-none text-sm text-neutral-800">
                  "Abeg send money"
                </div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-600">
                  AI
                </div>
<div className="bg-red-50 border border-red-100 px-4 py-3 rounded-2xl rounded-tr-none text-sm transition-all duration-300" id="ai-response-box">
<div className="flex items-center gap-2 text-red-700 font-medium mb-1">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="12" x2="12" y1="8" y2="12"></line>
<line x1="12" x2="12.01" y1="16" y2="16"></line>
</svg>
                    Intent Unclear
                  </div>
<span className="text-xs text-red-600/80">
                    Low confidence score (0.12). Routing to general queue.
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-white border-b border-neutral-200" id="cases">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-center text-2xl font-medium text-neutral-900 tracking-tighter mb-12">
          Proven Results in High-Stakes Markets
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-neutral-50 border border-neutral-200 p-8 rounded-[1px]">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-2">
<svg className="text-emerald-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="font-bold text-neutral-900">NeoFin Nigeria</span>
</div>
<span className="text-[10px] font-mono text-neutral-400">
                FINTECH
              </span>
</div>
<div className="mb-4">
<span className="text-[10px] font-mono uppercase text-red-500 mb-1 block">
                Challenge
              </span>
<p className="text-xs text-neutral-500">
                High cloud API costs and poor Pidgin recognition.
              </p>
</div>
<div>
<span className="text-[10px] font-mono uppercase text-emerald-600 mb-1 block">
                Result
              </span>
<p className="text-sm font-medium text-neutral-900">
                "$60k/year saved in API fees and a 40% drop in churn via
                sentiment alerts."
              </p>
</div>
</div>

<div className="bg-neutral-50 border border-neutral-200 p-8 rounded-[1px]">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-2">
<svg className="text-blue-600" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="3" x2="21" y1="9" y2="9"></line>
<line x1="9" x2="9" y1="21" y2="9"></line>
</svg>
<span className="font-bold text-neutral-900">JavaBank</span>
</div>
<span className="text-[10px] font-mono text-neutral-400">
                BANKING
              </span>
</div>
<div className="mb-4">
<span className="text-[10px] font-mono uppercase text-red-500 mb-1 block">
                Challenge
              </span>
<p className="text-xs text-neutral-500">
                Strict OJK data residency rules and agents speaking mixed
                Javanese.
              </p>
</div>
<div>
<span className="text-[10px] font-mono uppercase text-emerald-600 mb-1 block">
                Result
              </span>
<p className="text-sm font-medium text-neutral-900">
                "100% Data Residency Compliance and zero audit infractions."
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-900 text-white relative overflow-hidden" id="pricing">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-30"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 text-center">
<h2 className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-4">
          The Intelligence Launchpad
        </h2>
<div className="border border-neutral-700 bg-neutral-800/50 backdrop-blur-sm p-8 sm:p-12 rounded-sm shadow-2xl">
<div className="text-5xl font-medium tracking-tighter mb-2">$50,000</div>
<div className="text-neutral-400 text-sm mb-8">
            One-Time Deployment Fee
          </div>
<ul className="text-left max-w-sm mx-auto space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              90-Day Build &amp; Launch
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              Custom Dialect Training (Your Vocabulary)
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              Unlimited Call Processing
            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="text-emerald-500" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
              1 Month Hyper-Care Support
            </li>
</ul>
<a className="inline-block w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 text-xs font-semibold tracking-wide hover:bg-emerald-500 transition-colors rounded-sm" href="#contact">
            CHECK ELIGIBILITY
          </a>
</div>
</div>
</section>

<section className="py-16 border-b border-neutral-200 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<h2 className="text-center text-xl font-medium tracking-tight mb-12">
          90 Days to Full Visibility
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-4 left-0 w-full h-px bg-neutral-200 z-0"></div>
<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-8 h-8 bg-white border border-emerald-500 text-emerald-600 rounded-full flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0 shadow-sm relative z-10">
              01
            </div>
<h3 className="font-medium text-neutral-900 mb-2">Foundation</h3>
<p className="text-xs text-neutral-500">
              Assessment &amp; PoC.
              <br/>
              Month 1
            </p>
</div>
<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-8 h-8 bg-white border border-neutral-300 text-neutral-500 rounded-full flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0 shadow-sm relative z-10">
              02
            </div>
<h3 className="font-medium text-neutral-900 mb-2">Calibration</h3>
<p className="text-xs text-neutral-500">
              Training on your specific data.
              <br/>
              Month 2
            </p>
</div>
<div className="relative z-10 bg-white md:bg-transparent pt-4 md:pt-0">
<div className="w-8 h-8 bg-white border border-neutral-300 text-neutral-500 rounded-full flex items-center justify-center text-xs font-bold mb-4 mx-auto md:mx-0 shadow-sm relative z-10">
              03
            </div>
<h3 className="font-medium text-neutral-900 mb-2">Go-Live</h3>
<p className="text-xs text-neutral-500">
              Full Dashboard Launch.
              <br/>
              Month 3
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-50 border-b border-neutral-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest mb-8">
          Built by Experts in Sovereign AI
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-neutral-200 rounded-full mb-4 overflow-hidden grayscale">
<img alt="Alex V." className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
</div>
<div className="text-sm font-medium text-neutral-900">Alex V.</div>
<div className="text-[10px] text-neutral-500 mb-1">Lead Architect</div>
<p className="text-[10px] text-neutral-400 max-w-[150px]">
              Specialist in Edge Computing &amp; GPU Optimization
            </p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-neutral-200 rounded-full mb-4 overflow-hidden grayscale">
<img alt="Sarah L." className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
</div>
<div className="text-sm font-medium text-neutral-900">Sarah L.</div>
<div className="text-[10px] text-neutral-500 mb-1">
              Head of Linguistics
            </div>
<p className="text-[10px] text-neutral-400 max-w-[150px]">
              Expert in Code-Switching &amp; Dialect ASR
            </p>
</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 bg-neutral-200 rounded-full mb-4 overflow-hidden grayscale">
<img alt="David K." className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
</div>
<div className="text-sm font-medium text-neutral-900">David K.</div>
<div className="text-[10px] text-neutral-500 mb-1">
              Compliance Strategy
            </div>
<p className="text-[10px] text-neutral-400 max-w-[150px]">
              Former Auditor for Fintech Regulations
            </p>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12 sm:py-16" id="contact">
<div className="max-w-xl mx-auto px-4 text-center">
<h2 className="text-3xl font-medium tracking-tighter mb-6">
          Ready to own your intelligence?
        </h2>
<div className="p-[1px] inline-block rounded-sm bg-gradient-to-b from-neutral-200 to-neutral-300 shadow-sm mb-12">
<button className="bg-neutral-900 text-white px-8 py-4 text-xs font-semibold tracking-wide hover:bg-neutral-800 transition-colors rounded-[1px] flex items-center justify-center gap-2">
            BOOK 15-MIN AUDIT
            <svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7"></path>
</svg>
</button>
</div>
<div className="flex justify-center gap-6 text-[10px] text-neutral-500 font-mono uppercase tracking-widest border-t border-neutral-100 pt-8">
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600" href="#">LinkedIn</a>
<a className="hover:text-emerald-600" href="#">Twitter</a>
</div>
<div className="mt-4 text-[10px] text-neutral-400 font-mono">
          Agentra © 2025
        </div>
</div>
</footer>



    </>
  );
}
