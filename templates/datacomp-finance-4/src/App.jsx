import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Reveal only once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((element) => {
                observer.observe(element);
            });
            
            // Subtle Navbar shadow on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.remove('shadow-sm');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-[#0B1F3B] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
<span className="font-semibold tracking-tighter text-base">DC</span>
</div>
<span className="text-xl font-semibold tracking-tighter text-[#0B1F3B]">DATACOMP</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-[#0B1F3B] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B1F3B] hover:after:w-full after:transition-all after:duration-300" href="#problem">Platform</a>
<a className="hover:text-[#0B1F3B] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B1F3B] hover:after:w-full after:transition-all after:duration-300" href="#features">Solutions</a>
<a className="hover:text-[#0B1F3B] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B1F3B] hover:after:w-full after:transition-all after:duration-300" href="#how-it-works">How it Works</a>
<a className="hover:text-[#0B1F3B] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B1F3B] hover:after:w-full after:transition-all after:duration-300" href="#pricing">Pricing</a>
<a className="hover:text-[#0B1F3B] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#0B1F3B] hover:after:w-full after:transition-all after:duration-300" href="#compliance">Security</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-[#0B1F3B] transition-colors" href="#">Sign In</a>
<a className="btn-interactive bg-[#2F80ED] text-white text-sm font-medium px-4 py-2 rounded shadow-sm shadow-[#2F80ED]/20" href="#">
                    Request a Demo
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 relative overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F7F9FC] z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#2F80ED] text-xs font-medium mb-6">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    The Data Reliability Layer for Accounts Payable
                </div>
<h1 className="reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-semibold text-[#0B1F3B] tracking-tight leading-[1.1] mb-6">
                    Stop Letting Bad Data Poison Your Finance Operations.
                </h1>
<p className="reveal delay-200 text-lg text-slate-500 mb-8 leading-relaxed font-light">
                    Datacomp transforms messy supplier invoices and financial documents into validated, structured, AI-ready datasets. Built for modern finance teams demanding ERP data integrity.
                </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center gap-4 mb-10">
<button className="btn-interactive group w-full sm:w-auto px-6 py-3 bg-[#2F80ED] text-white font-medium rounded shadow-md shadow-[#2F80ED]/20 flex items-center justify-center gap-2">
                        Request a Demo
                        <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group w-full sm:w-auto px-6 py-3 bg-white text-[#0B1F3B] border border-gray-200 font-medium rounded hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2">
<iconify-icon className="text-slate-400 group-hover:text-[#2F80ED] transition-colors duration-300" icon="solar:play-circle-linear"></iconify-icon>
                        See How It Works
                    </button>
</div>
<div className="reveal delay-400 flex items-center gap-3 text-sm text-slate-500 border-l-2 border-[#27AE60] pl-4">
<iconify-icon className="text-[#27AE60] text-lg" icon="solar:verified-check-linear"></iconify-icon>
<p>Designed for reliability, compliance, and automation-driven organizations.</p>
</div>
</div>

<div className="reveal delay-300 relative w-full max-w-lg mx-auto lg:ml-auto animate-float">
<div className="absolute -inset-1 bg-gradient-to-r from-[#2F80ED]/20 to-[#0B1F3B]/10 blur-2xl rounded-2xl transition-opacity duration-500 hover:opacity-70"></div>
<div className="bg-white rounded-xl border border-gray-200/80 shadow-xl overflow-hidden relative group">

<div className="h-10 bg-slate-50 border-b border-gray-100 flex items-center px-4 justify-between transition-colors duration-300 group-hover:bg-slate-100/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-red-400 transition-colors cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-green-400 transition-colors cursor-pointer"></div>
</div>
<div className="text-xs text-slate-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> contract-validation.json
                        </div>
</div>
<div className="p-6">

<div className="flex items-center justify-between mb-6">
<div className="w-16 h-20 bg-slate-100 border border-slate-200 rounded flex flex-col items-center justify-center gap-2 relative overflow-hidden group/pdf hover:border-blue-300 transition-colors cursor-pointer">
<iconify-icon className="text-slate-400 text-xl group-hover/pdf:text-[#2F80ED] transition-colors duration-300 group-hover/pdf:-translate-y-0.5 transform" icon="solar:document-text-linear"></iconify-icon>
<span className="text-[10px] text-slate-400 group-hover/pdf:text-[#2F80ED] transition-colors">PDF</span>
</div>
<div className="flex-1 px-4 relative h-10 flex items-center justify-center">
<div className="w-full h-px border-t border-dashed border-slate-300 relative overflow-hidden">
<div className="absolute inset-0 w-full h-4 -top-2 data-stream opacity-70"></div>
</div>
<div className="absolute bg-white px-2 py-0.5 text-xs font-medium text-[#2F80ED] border border-blue-100 rounded-full flex items-center gap-1 shadow-sm">
<iconify-icon className="animate-pulse" icon="solar:magic-stick-3-linear"></iconify-icon> Validating
                                </div>
</div>
<div className="w-48 bg-slate-900 rounded p-3 shadow-inner hover:shadow-slate-800/50 transition-shadow">
<div className="text-[10px] text-slate-400 font-mono mb-2 flex justify-between">
<span>Payload</span>
<span className="text-[#27AE60] flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> Valid</span>
</div>
<div className="text-xs font-mono text-slate-300 space-y-1">
<div className="hover:bg-white/5 px-1 -mx-1 rounded transition-colors"><span className="text-blue-400">"vendor_id"</span>: <span className="text-green-400">"V-8829"</span>,</div>
<div className="hover:bg-white/5 px-1 -mx-1 rounded transition-colors"><span className="text-blue-400">"total_amt"</span>: <span className="text-orange-400">12450.00</span>,</div>
<div className="hover:bg-white/5 px-1 -mx-1 rounded transition-colors"><span className="text-blue-400">"vat_match"</span>: <span className="text-purple-400">true</span></div>
</div>
</div>
</div>

<div className="bg-[#F7F9FC] border border-gray-100 rounded-lg p-4 flex items-center justify-between group/score hover:bg-white transition-colors">
<div>
<h4 className="text-sm font-medium text-[#0B1F3B]">Dataset Health</h4>
<p className="text-xs text-slate-500 mt-0.5">ERP &amp; AI Readiness</p>
</div>
<div className="flex items-center gap-3">
<div className="text-right">
<div className="text-2xl font-semibold text-[#0B1F3B] tracking-tight group-hover/score:scale-105 transition-transform duration-300 origin-right">99.8%</div>
<div className="text-[10px] text-[#27AE60] font-medium">+0.2% vs last batch</div>
</div>
<div className="w-12 h-12 rounded-full border-4 border-[#27AE60] flex items-center justify-center text-[#27AE60] bg-green-50/50">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-500 max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-200/60 text-center relative z-10">
<p className="text-xs font-medium text-slate-400 tracking-wider uppercase mb-6">Trusted by Enterprise Finance Teams &amp; Accountants</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
<div className="text-lg font-semibold tracking-tighter text-[#0B1F3B] flex items-center gap-1 hover:-translate-y-1 transition-transform cursor-pointer"><iconify-icon icon="solar:buildings-linear"></iconify-icon> ACME CORP</div>
<div className="text-lg font-semibold tracking-tighter text-[#0B1F3B] flex items-center gap-1 hover:-translate-y-1 transition-transform cursor-pointer"><iconify-icon icon="solar:box-linear"></iconify-icon> GLOBEX</div>
<div className="text-lg font-semibold tracking-tighter text-[#0B1F3B] flex items-center gap-1 hover:-translate-y-1 transition-transform cursor-pointer"><iconify-icon icon="solar:chart-2-linear"></iconify-icon> INITECH</div>
<div className="text-lg font-semibold tracking-tighter text-[#0B1F3B] flex items-center gap-1 hover:-translate-y-1 transition-transform cursor-pointer"><iconify-icon icon="solar:wallet-linear"></iconify-icon> SOYUZ</div>
<div className="text-lg font-semibold tracking-tighter text-[#0B1F3B] flex items-center gap-1 hover:-translate-y-1 transition-transform cursor-pointer"><iconify-icon icon="solar:database-linear"></iconify-icon> UMBRELLA</div>
</div>
</div>
</header>

<section className="py-24 bg-white px-6" id="problem">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] tracking-tight mb-4">
                    Finance Teams Don’t Have a Document Problem.<br/>They Have a <span className="text-red-500">Data Problem.</span>
</h2>
<p className="text-slate-500 text-lg">
                    Extracting text from a PDF is easy. Ensuring that data is perfectly structured, mathematically correct, and formatted for your ERP is where operations break down.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 p-6 rounded-xl bg-[#F7F9FC] border border-gray-100 card-hover group cursor-default">
<div className="w-10 h-10 rounded bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#0B1F3B] mb-2 group-hover:text-red-500 transition-colors">Inconsistent Formats</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Supplier invoices arriving in PDFs, images, and EDI formats create structural chaos, requiring constant manual mapping and mapping updates.
                    </p>
</div>

<div className="reveal delay-200 p-6 rounded-xl bg-[#F7F9FC] border border-gray-100 card-hover group cursor-default">
<div className="w-10 h-10 rounded bg-orange-50 text-orange-500 flex items-center justify-center mb-4 group-hover:bg-orange-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#0B1F3B] mb-2 group-hover:text-orange-500 transition-colors">Hidden Data Errors</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Mismatched POs, incorrect VAT calculations, and duplicate line items bypass basic OCR tools, causing silent financial mistakes.
                    </p>
</div>

<div className="reveal delay-300 p-6 rounded-xl bg-[#F7F9FC] border border-gray-100 card-hover group cursor-default">
<div className="w-10 h-10 rounded bg-purple-50 text-purple-500 flex items-center justify-center mb-4 group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:server-path-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#0B1F3B] mb-2 group-hover:text-purple-500 transition-colors">ERP Automation Failures</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        When unstructured or dirty data hits your ERP or AI agents, workflows crash, demanding costly engineering and accounting intervention.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B1F3B] px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2F80ED]/20 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 reveal">
<div className="text-[#2F80ED] text-sm font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:shield-up-linear"></iconify-icon> The Solution
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                    DataComp Becomes Your Data Reliability Layer
                </h2>
<p className="text-slate-300 text-base mb-8 font-light">
                    We sit between your document ingestion and your ERP, ensuring every byte of financial data perfectly matches your accounting schemas before it enters your systems.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-[#27AE60] text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-200 text-sm group-hover:text-white transition-colors">Transform messy documents into rigidly structured datasets.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-[#27AE60] text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-200 text-sm group-hover:text-white transition-colors">Detect anomalies, VAT errors, and duplicates before they impact accounting.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-[#27AE60] text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-200 text-sm group-hover:text-white transition-colors">Enforce Data Contracts and custom validation rules at scale.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-[#27AE60] text-xl shrink-0 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-200 text-sm group-hover:text-white transition-colors">Deliver guaranteed, reliable inputs for RPA, ERPs, and AI Agents.</span>
</li>
</ul>
</div>
<div className="flex-1 w-full reveal delay-200">
<div className="bg-[#0F294D] border border-white/10 rounded-xl p-6 shadow-2xl hover:border-white/20 transition-colors duration-500">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
<span className="text-sm text-slate-300 font-medium">Data Contract Execution</span>
<div className="flex items-center gap-2 text-xs">
<span className="w-2 h-2 rounded-full bg-[#27AE60] animate-pulse shadow-[0_0_8px_rgba(39,174,96,0.6)]"></span>
<span className="text-[#27AE60]">Live Monitoring</span>
</div>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-default">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:calculator-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">Line Items Sum == Total Amount</span>
</div>
<span className="text-xs bg-[#27AE60]/20 text-[#27AE60] px-2 py-0.5 rounded border border-[#27AE60]/30">Passed</span>
</div>

<div className="flex items-center justify-between bg-white/5 p-3 rounded hover:bg-white/10 transition-colors cursor-default">
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400" icon="solar:user-id-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">Vendor Exists in Master Data</span>
</div>
<span className="text-xs bg-[#27AE60]/20 text-[#27AE60] px-2 py-0.5 rounded border border-[#27AE60]/30">Passed</span>
</div>

<div className="flex items-center justify-between bg-white/5 p-3 rounded border border-red-500/30 relative overflow-hidden group/error hover:bg-red-500/10 transition-colors cursor-default">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500"></div>
<div className="flex items-center gap-3 pl-2">
<iconify-icon className="text-red-400 group-hover/error:scale-110 transition-transform" icon="solar:danger-circle-linear"></iconify-icon>
<span className="text-xs font-mono text-slate-300">Duplicate Invoice Number</span>
</div>
<span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded border border-red-500/30">Failed</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FC] px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] tracking-tight mb-4">
                    A Platform Designed for<br/>Financial Data Reliability.
                </h2>
<p className="text-slate-500 text-lg max-w-2xl">
                    Everything you need to turn raw documents into pristine, structured data streams for your accounts payable processes.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative overflow-hidden card-hover group reveal delay-100">
<div className="w-10 h-10 rounded bg-blue-50 text-[#2F80ED] flex items-center justify-center mb-6 group-hover:bg-[#2F80ED] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#0B1F3B] mb-2">Data Contract Studio</h3>
<p className="text-sm text-slate-500 mb-6 max-w-sm relative z-10">
                        Define strict schemas and validation rules that enforce data discipline. Reject data that doesn't meet your accounting standards.
                    </p>
<div className="mt-4 bg-[#0B1F3B] rounded-lg p-4 font-mono text-[11px] text-slate-300 leading-relaxed shadow-inner group-hover:shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] transition-shadow duration-300 cursor-text selection:bg-[#2F80ED]/30">
<span className="text-purple-400">schema:</span> Invoice<br/>
<span className="text-purple-400">rules:</span><br/>
                          - <span className="text-blue-400">field:</span> total_tax<br/>
                            <span className="text-blue-400">validate:</span> equals(sum(line_items.tax))<br/>
                            <span className="text-blue-400">action:</span> flag_for_review
                    </div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-6 reveal delay-200">
<div className="flex-1 bg-white rounded-xl p-6 border border-gray-200 shadow-sm card-hover group">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#2F80ED] group-hover:rotate-12 transition-transform duration-300" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-[#0B1F3B]">Data Quality Score</h3>
</div>
<p className="text-xs text-slate-500 mb-4">Measure financial dataset reliability in real-time.</p>
<div className="text-3xl font-semibold text-[#0B1F3B] tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">98.5<span className="text-sm text-slate-400 font-normal">/100</span></div>
</div>
<div className="flex-1 bg-white rounded-xl p-6 border border-gray-200 shadow-sm card-hover group">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#27AE60] group-hover:rotate-12 transition-transform duration-300" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-[#0B1F3B]">Agent Readiness</h3>
</div>
<p className="text-xs text-slate-500 mb-4">Know instantly if data can feed AI automations.</p>

<div className="flex items-center justify-between bg-slate-50 p-2 rounded border border-gray-100 group-hover:bg-green-50/50 transition-colors cursor-pointer">
<span className="text-xs font-medium text-slate-600">Auto-Routing</span>
<div className="w-8 h-4 bg-[#27AE60] rounded-full relative shadow-inner transition-colors">
<div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5 shadow transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-1 bg-white rounded-xl p-6 border border-gray-200 shadow-sm card-hover group reveal delay-300">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
<iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:export-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-[#0B1F3B] mb-2">Exports &amp; APIs</h3>
<p className="text-xs text-slate-500 mb-6">
                        Seamlessly push validated data to your systems via JSON, API, Webhooks, or formatted CSV/Excel.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-600 hover:bg-white hover:border-[#2F80ED] hover:text-[#2F80ED] transition-colors cursor-pointer">REST API</span>
<span className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-600 hover:bg-white hover:border-[#2F80ED] hover:text-[#2F80ED] transition-colors cursor-pointer">Webhooks</span>
<span className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-600 hover:bg-white hover:border-[#2F80ED] hover:text-[#2F80ED] transition-colors cursor-pointer">NetSuite</span>
<span className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-[10px] font-medium text-slate-600 hover:bg-white hover:border-[#2F80ED] hover:text-[#2F80ED] transition-colors cursor-pointer">SAP</span>
</div>
</div>

<div className="col-span-1 md:col-span-1 lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200 shadow-sm flex flex-col justify-center card-hover group reveal delay-100">
<h3 className="text-lg font-semibold text-[#0B1F3B] mb-2">Validation &amp; Error Detection</h3>
<p className="text-sm text-slate-500 mb-6">
                        Automatically detect VAT mismatches, mathematical anomalies, and duplicate invoices. Stop silent mistakes before they require manual corrections.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default">
<iconify-icon className="text-[#2F80ED]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-xs font-medium text-[#0B1F3B]">Math Verification</span>
</div>
<div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default">
<iconify-icon className="text-[#2F80ED]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-xs font-medium text-[#0B1F3B]">Vendor Matching</span>
</div>
<div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default">
<iconify-icon className="text-[#2F80ED]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-xs font-medium text-[#0B1F3B]">Duplicate Checks</span>
</div>
<div className="flex items-center gap-2 hover:translate-x-1 transition-transform cursor-default">
<iconify-icon className="text-[#2F80ED]" icon="solar:check-read-linear"></iconify-icon>
<span className="text-xs font-medium text-[#0B1F3B]">Tax Compliance</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-xl p-8 border border-gray-200 shadow-sm bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] card-hover group reveal delay-200">
<div className="bg-white/90 backdrop-blur-sm h-full w-full transition-colors duration-500 group-hover:bg-white/95">
<div className="w-10 h-10 rounded bg-slate-50 text-slate-600 flex items-center justify-center border border-slate-100 mb-4 group-hover:border-slate-200 transition-colors">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#0B1F3B] mb-2">Structured Dataset Viewer</h3>
<p className="text-sm text-slate-500 mb-4">
                            Work with clean, normalized, finance-grade datasets directly in our UI, alongside full data lineage and audit logs.
                        </p>
<a className="text-xs font-medium text-[#2F80ED] hover:text-blue-700 transition-colors flex items-center gap-1 group/link w-max" href="#">
                            Explore Data Lineage <iconify-icon className="group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-t border-gray-100" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-[#0B1F3B] tracking-tight mb-4">From Documents to Reliable Data in Minutes</h2>
<p className="text-slate-500 text-sm">A streamlined pipeline built for finance automation infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-100 -translate-y-1/2 z-0 reveal delay-100"></div>

<div className="relative z-10 flex flex-col items-center text-center bg-white reveal delay-100 group cursor-default">
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#F7F9FC] text-[#0B1F3B] font-semibold flex items-center justify-center text-sm shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">1</div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-2 group-hover:text-[#2F80ED] transition-colors">Ingest</h4>
<p className="text-xs text-slate-500">Upload supplier documents via email, API, or portal.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center bg-white reveal delay-200 group cursor-default">
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#2F80ED] text-white font-semibold flex items-center justify-center text-sm shadow-sm shadow-blue-500/20 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">2</div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-2 group-hover:text-[#2F80ED] transition-colors">Structure &amp; Validate</h4>
<p className="text-xs text-slate-500">DataComp extracts and applies rigid data contracts.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center bg-white reveal delay-300 group cursor-default">
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#F7F9FC] text-[#0B1F3B] font-semibold flex items-center justify-center text-sm shadow-sm mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">3</div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-2 group-hover:text-[#27AE60] transition-colors">Detect Anomalies</h4>
<p className="text-xs text-slate-500">Errors are flagged and routed for review before export.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center bg-white reveal delay-400 group cursor-default">
<div className="w-12 h-12 rounded-full border-4 border-white bg-[#27AE60] text-white font-semibold flex items-center justify-center text-sm shadow-sm shadow-green-500/20 mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all duration-300">4</div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-2 group-hover:text-[#27AE60] transition-colors">Deliver</h4>
<p className="text-xs text-slate-500">Clean datasets become instantly usable in your ERP.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F7F9FC] px-6">
<div className="max-w-4xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm reveal card-hover">
<h2 className="text-2xl md:text-3xl font-semibold text-[#0B1F3B] tracking-tight mb-8 text-center">
                Why Finance Teams Use DataComp
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Reduce costly data errors and silent mistakes</span>
</div>
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Accelerate document processing speeds</span>
</div>
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Prevent ERP and RPA automation failures</span>
</div>
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Gain full visibility on data health &amp; metrics</span>
</div>
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Eliminate manual financial inconsistencies</span>
</div>
<div className="flex items-start gap-3 group">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0 group-hover:scale-110 transition-transform" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover:text-[#0B1F3B] transition-colors">Build reliable AI &amp; automation workflows</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-t border-gray-100" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0B1F3B] tracking-tight mb-4">
                    Simple, Predictable Pricing
                </h2>
<p className="text-slate-500 text-lg max-w-2xl mx-auto">
                    Choose the plan that fits your volume of financial documents and data requirements.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col card-hover reveal delay-100">
<h3 className="text-lg font-semibold text-[#0B1F3B] mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Perfect for small finance teams getting started with structured data.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-[#0B1F3B] tracking-tight">$99.99</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">50 data input documents/mo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Standard data contracts</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">CSV &amp; Excel exports</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Email support</span>
</li>
</ul>
<button className="btn-interactive w-full py-2.5 px-4 bg-white text-[#0B1F3B] border border-gray-200 font-medium rounded hover:bg-gray-50 hover:border-gray-300 text-sm">
                        Get Started
                    </button>
</div>

<div className="bg-white rounded-2xl border-2 border-[#2F80ED] p-8 shadow-lg flex flex-col relative transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-400 reveal delay-200 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2F80ED] text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide shadow-sm shadow-[#2F80ED]/30">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-semibold text-[#0B1F3B] mb-2">Pro</h3>
<p className="text-sm text-slate-500 mb-6 h-10">For growing companies needing automated ERP workflows and APIs.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-[#0B1F3B] tracking-tight">$229.99</span>
<span className="text-sm text-slate-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600 font-medium">500 data input documents/mo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Advanced validation rules</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">REST API &amp; Webhooks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Priority support</span>
</li>
</ul>
<button className="btn-interactive w-full py-2.5 px-4 bg-[#2F80ED] text-white font-medium rounded shadow-sm shadow-[#2F80ED]/20 text-sm">
                        Start Free Trial
                    </button>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 flex flex-col card-hover reveal delay-300">
<h3 className="text-lg font-semibold text-[#0B1F3B] mb-2">Enterprise</h3>
<p className="text-sm text-slate-500 mb-6 h-10">Custom limits and dedicated infrastructure for large-scale operations.</p>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-[#0B1F3B] tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Unlimited data inputs</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Custom data contracts</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">Dedicated Success Manager</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2F80ED] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">SSO &amp; SLA Guarantees</span>
</li>
</ul>
<button className="btn-interactive w-full py-2.5 px-4 bg-white text-[#0B1F3B] border border-gray-200 font-medium rounded hover:bg-gray-50 hover:border-gray-300 text-sm">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FC] px-6 border-t border-gray-100" id="compliance">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-semibold text-[#0B1F3B] tracking-tight mb-4">Built for Financial-Grade Reliability &amp; Compliance</h2>
<p className="text-slate-500 text-sm">Enterprise-grade infrastructure focused on risk-reduction and governance.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 text-center border border-gray-200 bg-white rounded-xl card-hover reveal delay-100 group">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-[#0B1F3B] transition-colors duration-300" icon="solar:lock-password-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-1">Secure Authentication</h4>
<p className="text-xs text-slate-500">SSO, SAML, and role-based access controls.</p>
</div>
<div className="p-6 text-center border border-gray-200 bg-white rounded-xl card-hover reveal delay-200 group">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-[#0B1F3B] transition-colors duration-300" icon="solar:layers-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-1">Data Isolation</h4>
<p className="text-xs text-slate-500">Strict company-level tenant isolation.</p>
</div>
<div className="p-6 text-center border border-gray-200 bg-white rounded-xl card-hover reveal delay-300 group">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-[#0B1F3B] transition-colors duration-300" icon="solar:history-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-1">Audit Logs</h4>
<p className="text-xs text-slate-500">Full traceability and historical data lineage.</p>
</div>
<div className="p-6 text-center border border-gray-200 bg-white rounded-xl card-hover reveal delay-400 group">
<iconify-icon className="text-2xl text-slate-400 mb-3 group-hover:text-[#0B1F3B] transition-colors duration-300" icon="solar:shield-keyhole-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-1">Data Governance</h4>
<p className="text-xs text-slate-500">Maintain total control over retention and routing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 border-t border-gray-100">
<div className="max-w-5xl mx-auto rounded-2xl bg-[#0B1F3B] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl reveal hover:shadow-3xl transition-shadow duration-500">
<div className="absolute top-0 right-0 p-32 bg-[#2F80ED]/20 blur-[80px] rounded-full pointer-events-none transition-transform duration-1000 hover:scale-110"></div>
<div className="absolute bottom-0 left-0 p-32 bg-[#27AE60]/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6 reveal delay-100">
                    Turn Your Financial Documents Into Reliable Data.
                </h2>
<p className="text-slate-300 text-lg max-w-xl mx-auto mb-10 font-light reveal delay-200">
                    DataComp is the Data Reliability Layer your finance stack is missing. Stop fixing bad data manually.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal delay-300">
<button className="btn-interactive w-full sm:w-auto px-8 py-3 bg-[#2F80ED] text-white font-medium rounded shadow-lg shadow-[#2F80ED]/30 text-sm">
                        Request a Demo
                    </button>
<button className="btn-interactive w-full sm:w-auto px-8 py-3 bg-transparent border border-slate-500 text-white font-medium rounded hover:bg-white/5 hover:border-slate-400 text-sm">
                        View API Documentation
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4 group cursor-pointer w-max">
<div className="w-6 h-6 rounded bg-[#0B1F3B] flex items-center justify-center text-white group-hover:bg-[#2F80ED] transition-colors duration-300">
<span className="font-semibold tracking-tighter text-[10px]">DC</span>
</div>
<span className="text-base font-semibold tracking-tighter text-[#0B1F3B]">DATACOMP</span>
</div>
<p className="text-xs text-slate-500 max-w-xs mb-4">
                    The Data Reliability &amp; Data Contracts Layer for Accounts Payable and Enterprise Finance operations.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#0B1F3B] hover:-translate-y-0.5 transition-all duration-300" href="#"><iconify-icon className="text-lg" icon="solar:brand-linkedin-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#0B1F3B] hover:-translate-y-0.5 transition-all duration-300" href="#"><iconify-icon className="text-lg" icon="solar:brand-twitter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-4">Platform</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Data Contracts</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Validation Engine</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Data Quality Score</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-4">Solutions</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Accounts Payable Automation</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Supplier Invoice Processing</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">ERP Data Integrity</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">AI-Ready Financial Data</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0B1F3B] mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">About</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Security</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#2F80ED] hover:translate-x-1 inline-block transition-transform duration-300" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400">© 2024 DataComp Inc. All rights reserved.</p>
<p className="text-[10px] text-slate-400 hidden md:block">Optimizing Financial Data Validation &amp; Finance Automation Infrastructure.</p>
</div>
</footer>



    </>
  );
}
