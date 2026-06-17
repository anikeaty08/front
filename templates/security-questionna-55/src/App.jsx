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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function startDemoProcessing() {
            const uploadState = document.getElementById('demo-upload-state');
            const processingState = document.getElementById('demo-processing-state');
            const resultState = document.getElementById('demo-result-state');
            const progressBar = document.getElementById('demo-progress-bar');
            const progressText = document.getElementById('demo-progress-text');
            const step2 = document.getElementById('step-2');
            const step3 = document.getElementById('step-3');

            // Hide upload, show processing
            uploadState.classList.add('hidden');
            processingState.classList.remove('hidden');

            // Simulate progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 2;
                progressBar.style.width = `${progress}%`;
                progressText.innerText = `${progress}%`;

                if (progress === 40) {
                    step2.classList.remove('opacity-50');
                    step2.querySelector('iconify-icon').setAttribute('icon', 'solar:check-circle-linear');
                    step2.querySelector('iconify-icon').classList.remove('animate-spin', 'text-[#0B6FFF]');
                    step2.querySelector('iconify-icon').classList.add('text-[#16A34A]');
                    
                    step3.classList.remove('opacity-50');
                    step3.querySelector('iconify-icon').setAttribute('icon', 'solar:refresh-circle-linear');
                    step3.querySelector('iconify-icon').classList.add('animate-spin', 'text-[#0B6FFF]');
                }

                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        processingState.classList.add('hidden');
                        resultState.classList.remove('hidden');
                    }, 500);
                }
            }, 40);
        }

        function resetDemo() {
            const uploadState = document.getElementById('demo-upload-state');
            const processingState = document.getElementById('demo-processing-state');
            const resultState = document.getElementById('demo-result-state');
            const progressBar = document.getElementById('demo-progress-bar');
            const progressText = document.getElementById('demo-progress-text');
            const step2 = document.getElementById('step-2');
            const step3 = document.getElementById('step-3');

            resultState.classList.add('hidden');
            processingState.classList.add('hidden');
            uploadState.classList.remove('hidden');

            progressBar.style.width = '0%';
            progressText.innerText = '0%';

            // Reset step icons
            step2.classList.add('opacity-50');
            step2.querySelector('iconify-icon').setAttribute('icon', 'solar:refresh-circle-linear');
            step2.querySelector('iconify-icon').classList.add('animate-spin', 'text-[#0B6FFF]');
            step2.querySelector('iconify-icon').classList.remove('text-[#16A34A]');

            step3.classList.add('opacity-50');
            step3.querySelector('iconify-icon').setAttribute('icon', 'solar:hourglass-linear');
            step3.querySelector('iconify-icon').classList.remove('animate-spin', 'text-[#0B6FFF]');
            step3.querySelector('iconify-icon').classList.add('text-[#F7FAFC]/40');
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
      

<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] bg-[#0B6FFF]/20 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>
<div className="absolute top-[20%] right-[-5%] w-[40vw] h-[60vh] bg-[#00C2A8]/10 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

<header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0F1724]/70 border-b border-[#F7FAFC]/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 transition-opacity hover:opacity-80" href="#">
<iconify-icon className="text-2xl text-[#0B6FFF]" icon="solar:shield-network-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-['Merriweather'] font-medium text-xl tracking-tight">TrustFlow</span>
</a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-[#F7FAFC]/80">
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#F7FAFC]/80 hover:text-white transition-colors duration-300" href="#login">Log In</a>
<a className="bg-gradient-to-r from-[#0B6FFF] to-[#00C2A8] text-white py-2 px-4 rounded-lg text-sm font-medium transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] hover:scale-[1.03]" href="#pricing">Start Free Trial</a>
</div>
</div>
</header>
<main className="pt-24 md:pt-32 pb-16">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="flex flex-col items-start text-left">
<h1 className="font-['Merriweather'] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
                        Automate Security Questionnaire Reviews in Minutes
                    </h1>
<p className="text-base md:text-lg text-[#F7FAFC]/80 mb-8 max-w-xl font-normal leading-relaxed">
                        Upload any spreadsheet. Get validated, prioritized feedback and evidence requests—instantly. Stop manual reviews and accelerate your vendor onboarding.
                    </p>
<div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-6">
<a className="bg-gradient-to-r from-[#0B6FFF] to-[#00C2A8] text-white py-3 px-6 rounded-lg text-base font-medium transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] hover:scale-[1.03] flex items-center justify-center gap-2" href="#pricing">
                            Start Free Trial
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border border-[#F7FAFC]/20 bg-[#F7FAFC]/5 text-[#F7FAFC] py-3 px-6 rounded-lg text-base font-medium transition-all duration-300 ease-[cubic-bezier(.2,.9,.3,1)] hover:-translate-y-[2px] hover:bg-[#F7FAFC]/10 flex items-center justify-center gap-2" href="#demo">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Request Live Demo
                        </a>
</div>
<div className="flex items-center gap-3 text-sm text-[#F7FAFC]/60">
<iconify-icon className="text-[#16A34A] text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">Used by security teams at Fortune 100s.</span>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-[#0B6FFF]/10 to-[#00C2A8]/10 rounded-2xl blur-xl pointer-events-none"></div>
<div className="w-full max-w-md bg-[#0F1724]/60 backdrop-blur-xl border border-[#F7FAFC]/10 rounded-2xl p-6 shadow-2xl relative z-10 overflow-hidden transform transition-transform duration-500 hover:-translate-y-[6px]">

<div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-[#F7FAFC]/20 rounded-xl bg-[#F7FAFC]/5 transition-all duration-300 ease-[cubic-bezier(.2,.9,.3,1)]" id="demo-upload-state">
<div className="w-16 h-16 bg-[#0B6FFF]/20 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-[#0B6FFF]" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Merriweather'] font-medium text-xl tracking-tight mb-2">Upload Vendor Form</h3>
<p className="text-sm text-[#F7FAFC]/60 mb-6 text-center px-4">Drag and drop your .xlsx or .csv security questionnaire here.</p>
<button className="bg-[#F7FAFC]/10 hover:bg-[#F7FAFC]/20 text-white py-2 px-6 rounded-lg text-sm font-medium transition-colors duration-300" onclick="startDemoProcessing()">
                                Select File
                            </button>
</div>

<div className="hidden flex flex-col py-8 transition-all duration-300" id="demo-processing-state">
<div className="flex items-center justify-between mb-2">
<span className="text-sm font-medium text-[#F7FAFC]">Analyzing Document...</span>
<span className="text-sm font-medium text-[#00C2A8]" id="demo-progress-text">0%</span>
</div>
<div className="w-full bg-[#F7FAFC]/10 rounded-full h-2 mb-8 overflow-hidden">
<div className="bg-gradient-to-r from-[#0B6FFF] to-[#00C2A8] h-2 rounded-full w-0 transition-all duration-100 ease-linear" id="demo-progress-bar"></div>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-[#F7FAFC]/80">
<iconify-icon className="text-[#16A34A]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                                    Parsing 245 security controls
                                </li>
<li className="flex items-center gap-3 text-sm text-[#F7FAFC]/80 opacity-50" id="step-2">
<iconify-icon className="animate-spin text-[#0B6FFF]" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
                                    Cross-referencing SOC2 requirements
                                </li>
<li className="flex items-center gap-3 text-sm text-[#F7FAFC]/80 opacity-50" id="step-3">
<iconify-icon className="text-[#F7FAFC]/40" icon="solar:hourglass-linear" strokeWidth="1.5"></iconify-icon>
                                    Flagging critical gaps
                                </li>
</ul>
</div>

<div className="hidden flex flex-col py-6 transition-all duration-300" id="demo-result-state">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#F7FAFC]/10">
<div className="w-10 h-10 bg-[#16A34A]/20 rounded-full flex items-center justify-center text-[#16A34A]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-['Merriweather'] font-medium text-lg tracking-tight">Review Complete</h4>
<p className="text-xs text-[#F7FAFC]/60">Found 3 critical items requiring evidence</p>
</div>
</div>
<div className="space-y-3">
<div className="bg-[#F7FAFC]/5 border border-[#FFB020]/30 rounded-lg p-3 flex justify-between items-start">
<div>
<span className="text-xs font-medium text-[#FFB020] uppercase tracking-wide mb-1 block">Data at Rest</span>
<p className="text-sm font-medium">Encryption standard unspecified</p>
</div>
<button className="text-xs bg-[#FFB020]/10 text-[#FFB020] py-1 px-2 rounded hover:bg-[#FFB020]/20 transition">Request Proof</button>
</div>
<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-lg p-3 flex justify-between items-start">
<div>
<span className="text-xs font-medium text-[#16A34A] uppercase tracking-wide mb-1 block">Access Control</span>
<p className="text-sm font-medium">MFA enforced globally</p>
</div>
<iconify-icon className="text-[#16A34A] text-lg mt-1" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<button className="mt-6 text-xs text-[#F7FAFC]/60 hover:text-white underline text-center w-full transition-colors" onclick="resetDemo()">Run another test</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
<p className="text-center text-sm font-medium text-[#F7FAFC]/50 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-4xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-4xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-4xl" icon="solar:cloud-check-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-4xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-4xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex items-center gap-2 border-l border-[#F7FAFC]/20 pl-8 ml-4">
<span className="text-xs font-medium border border-[#F7FAFC]/30 rounded px-2 py-1">SOC 2 Type II</span>
<span className="text-xs font-medium border border-[#F7FAFC]/30 rounded px-2 py-1">ISO 27001</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32" id="how-it-works">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-['Merriweather'] text-3xl md:text-4xl font-medium tracking-tight mb-4">From Spreadsheet to Security Posture in 3 Steps</h2>
<p className="text-[#F7FAFC]/70 text-base">Eliminate hours of manual reading. Our engine parses any format and aligns it with your risk framework automatically.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group">
<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-8 backdrop-blur-sm h-full transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] group-hover:-translate-y-[6px]">
<div className="w-12 h-12 bg-gradient-to-br from-[#0B6FFF] to-[#0B6FFF]/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:file-download-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Merriweather'] text-xl font-medium tracking-tight mb-3">1. Upload Questionnaire</h3>
<p className="text-sm text-[#F7FAFC]/70 leading-relaxed">Drop any CSV or Excel file from your vendor. We handle custom formats, merged cells, and complex layouts.</p>
</div>
</div>

<div className="relative group">
<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-8 backdrop-blur-sm h-full transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] group-hover:-translate-y-[6px]">
<div className="w-12 h-12 bg-gradient-to-br from-[#00C2A8] to-[#00C2A8]/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Merriweather'] text-xl font-medium tracking-tight mb-3">2. Automated Parsing</h3>
<p className="text-sm text-[#F7FAFC]/70 leading-relaxed">The engine extracts controls, maps them to ISO/SOC2 standards, and evaluates responses for risk severity.</p>
</div>
</div>

<div className="relative group">
<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-8 backdrop-blur-sm h-full transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] group-hover:-translate-y-[6px]">
<div className="w-12 h-12 bg-gradient-to-br from-[#16A34A] to-[#16A34A]/20 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:notes-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Merriweather'] text-xl font-medium tracking-tight mb-3">3. Review &amp; Request</h3>
<p className="text-sm text-[#F7FAFC]/70 leading-relaxed">Get a prioritized list of gaps. Approve controls or trigger one-click evidence requests back to the vendor.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32" id="features">
<h2 className="font-['Merriweather'] text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Built for Enterprise Security</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-6 hover:-translate-y-[6px] transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] flex flex-col">
<iconify-icon className="text-2xl text-[#0B6FFF] mb-4" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Merriweather'] text-lg font-medium tracking-tight mb-2">Risk Scoring</h3>
<ul className="text-sm text-[#F7FAFC]/70 space-y-2 mt-auto">
<li>• Identify <strong>critical</strong> vendor vulnerabilities instantly.</li>
<li>• Customizable <strong>scoring</strong> matrices for your framework.</li>
</ul>
</div>

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-6 hover:-translate-y-[6px] transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] flex flex-col">
<iconify-icon className="text-2xl text-[#00C2A8] mb-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Merriweather'] text-lg font-medium tracking-tight mb-2">Smart Mapping</h3>
<ul className="text-sm text-[#F7FAFC]/70 space-y-2 mt-auto">
<li>• Map responses to <strong>SOC2</strong> and ISO27001 automatically.</li>
<li>• Understand <strong>context</strong> behind non-standard answers.</li>
</ul>
</div>

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-6 hover:-translate-y-[6px] transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] flex flex-col">
<iconify-icon className="text-2xl text-[#16A34A] mb-4" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Merriweather'] text-lg font-medium tracking-tight mb-2">Audit Trails</h3>
<ul className="text-sm text-[#F7FAFC]/70 space-y-2 mt-auto">
<li>• Maintain complete <strong>historical</strong> evidence logs.</li>
<li>• Generate <strong>compliance</strong> ready reports on demand.</li>
</ul>
</div>

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-6 hover:-translate-y-[6px] transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] flex flex-col">
<iconify-icon className="text-2xl text-[#FFB020] mb-4" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Merriweather'] text-lg font-medium tracking-tight mb-2">Team Collaboration</h3>
<ul className="text-sm text-[#F7FAFC]/70 space-y-2 mt-auto">
<li>• Assign <strong>review</strong> tasks to specific domain experts.</li>
<li>• Centralize <strong>communication</strong> with procurement.</li>
</ul>
</div>

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-6 hover:-translate-y-[6px] transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] flex flex-col lg:col-span-2">
<iconify-icon className="text-2xl text-[#0B6FFF] mb-4" icon="solar:plug-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-['Merriweather'] text-lg font-medium tracking-tight mb-2">Seamless Integrations</h3>
<div className="grid sm:grid-cols-2 gap-4 mt-auto">
<ul className="text-sm text-[#F7FAFC]/70 space-y-2">
<li>• Sync findings with <strong>Jira</strong> or ServiceNow.</li>
<li>• Import directly from <strong>Google Drive</strong> or OneDrive.</li>
</ul>
<ul className="text-sm text-[#F7FAFC]/70 space-y-2">
<li>• Push vendor status to <strong>Salesforce</strong> or HubSpot.</li>
<li>• Enforce security via <strong>SSO</strong> (SAML/OAuth).</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32" id="demo">
<div className="bg-gradient-to-br from-[#0F1724] to-[#0B6FFF]/10 border border-[#F7FAFC]/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 z-0"></div>
<div className="relative z-10 max-w-lg mx-auto">
<h2 className="font-['Merriweather'] text-2xl md:text-3xl font-medium tracking-tight mb-4">See TrustFlow with Your Own Data</h2>
<p className="text-sm text-[#F7FAFC]/80 mb-8">Book a custom walkthrough. We'll sign an NDA and process one of your recent vendor questionnaires live.</p>
<form className="space-y-4 text-left" onsubmit="event.preventDefault();">
<div className="relative">
<input className="peer w-full bg-[#0F1724]/80 border border-[#F7FAFC]/20 rounded-lg px-4 py-3 text-sm text-white placeholder-transparent focus:outline-none focus:border-[#0B6FFF] focus:ring-1 focus:ring-[#0B6FFF] transition-all" id="email" placeholder="Work Email" required="" type="email"/>
<label className="absolute left-4 -top-2.5 bg-[#0F1724] px-1 text-xs font-medium text-[#F7FAFC]/60 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[#F7FAFC]/40 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#0B6FFF]" htmlFor="email">Work Email</label>
</div>
<button className="w-full bg-[#F7FAFC] text-[#0F1724] py-3 px-4 rounded-lg text-sm font-semibold transition-transform duration-300 ease-[cubic-bezier(.2,.9,.3,1)] hover:scale-[1.03]" type="submit">
                            Request Walkthrough
                        </button>
</form>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32" id="pricing">
<h2 className="font-['Merriweather'] text-3xl md:text-4xl font-medium tracking-tight mb-12 text-center">Transparent Pricing</h2>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-8 backdrop-blur-sm">
<h3 className="text-lg font-medium tracking-tight mb-2">Starter</h3>
<div className="mb-6">
<span className="text-4xl font-['Merriweather'] font-semibold">$499</span>
<span className="text-sm text-[#F7FAFC]/60">/mo</span>
</div>
<ul className="space-y-3 text-sm text-[#F7FAFC]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Up to 20 reviews/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Standard SOC2 mapping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> 2 User seats</li>
</ul>
<a className="w-full inline-block text-center border border-[#F7FAFC]/20 py-2 rounded-lg text-sm font-medium hover:bg-[#F7FAFC]/10 transition-colors" href="#demo">Start Trial</a>
</div>

<div className="bg-gradient-to-b from-[#0B6FFF]/10 to-transparent border border-[#0B6FFF]/30 rounded-2xl p-8 backdrop-blur-sm relative transform md:-translate-y-4 shadow-2xl shadow-[#0B6FFF]/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0B6FFF] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Professional</h3>
<div className="mb-6">
<span className="text-4xl font-['Merriweather'] font-semibold">$999</span>
<span className="text-sm text-[#F7FAFC]/60">/mo</span>
</div>
<ul className="space-y-3 text-sm text-[#F7FAFC]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Unlimited reviews</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Custom framework mapping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> 10 User seats</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Jira / API Integration</li>
</ul>
<a className="w-full inline-block text-center bg-[#0B6FFF] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#0B6FFF]/90 transition-colors" href="#demo">Start Free Trial</a>
</div>

<div className="bg-[#F7FAFC]/5 border border-[#F7FAFC]/10 rounded-2xl p-8 backdrop-blur-sm">
<h3 className="text-lg font-medium tracking-tight mb-2">Enterprise</h3>
<div className="mb-6">
<span className="text-4xl font-['Merriweather'] font-semibold">Custom</span>
</div>
<ul className="space-y-3 text-sm text-[#F7FAFC]/80 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Advanced RBAC</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> Dedicated success manager</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> SSO (SAML/OAuth)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#0B6FFF]" icon="solar:check-circle-linear"></iconify-icon> On-prem deployment options</li>
</ul>
<a className="w-full inline-block text-center border border-[#F7FAFC]/20 py-2 rounded-lg text-sm font-medium hover:bg-[#F7FAFC]/10 transition-colors" href="#demo">Contact Sales</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#F7FAFC]/10 bg-[#0F1724] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-2xl text-[#0B6FFF]" icon="solar:shield-network-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-['Merriweather'] font-medium text-lg tracking-tight">TrustFlow</span>
</div>
<p className="text-sm text-[#F7FAFC]/60 leading-relaxed mb-6">
                        Automating third-party security reviews. Stop reading spreadsheets and start securing your supply chain.
                    </p>
<div className="flex gap-4">
<a aria-label="LinkedIn" className="text-[#F7FAFC]/40 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a aria-label="Twitter" className="text-[#F7FAFC]/40 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:hashtag-square-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-4">Product</h4>
<ul className="space-y-2 text-sm text-[#F7FAFC]/60">
<li><a className="hover:text-white transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-[#F7FAFC]/60">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-[#F7FAFC]/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#F7FAFC]/40">
<p>© 2024 TrustFlow Inc. All rights reserved.</p>
<p className="mt-2 md:mt-0">We use minimal analytics to improve your experience. <a className="underline hover:text-[#F7FAFC]/80" href="#">Manage preferences</a>.</p>
</div>
</div>
</footer>



    </>
  );
}
