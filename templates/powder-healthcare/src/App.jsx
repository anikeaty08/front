import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab switching logic
        function switchTab(tabId) {
            // Hide all content
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            // Show selected content
            document.getElementById('content-' + tabId).classList.add('active');

            // Reset buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active', 'text-white', 'border-l-2', 'border-white');
                btn.classList.add('text-neutral-500');
            });

            // Activate button
            const activeBtn = document.getElementById('tab-' + tabId);
            activeBtn.classList.remove('text-neutral-500');
            activeBtn.classList.add('active', 'text-white');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-white uppercase" href="#">
                Powder
            </a>
<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#how-it-works">Platform</a>
<a className="hover:text-white transition-colors" href="#why-powder">Mission</a>
<a className="hover:text-white transition-colors" href="#blog">Intelligence</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-semibold uppercase tracking-widest bg-white text-black px-6 py-3 hover:bg-neutral-200 transition-colors rounded-sm" href="#">
                    Book Demo
                </a>
</div>
</div>
</nav>

<section className="relative pt-40 pb-32 md:pt-56 md:pb-40 overflow-hidden border-b border-white/10">
<div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col items-start max-w-5xl">
<div className="inline-flex items-center gap-3 mb-8 border-l border-white/30 pl-4">
<span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">System v2.0 Live</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] mb-10 text-white tracking-tighter">
                    THE OS FOR <br/>
<span className="text-neutral-500">HEALTH FINANCE.</span>
</h1>
<div className="grid md:grid-cols-12 gap-10 items-end w-full border-t border-white/10 pt-10">
<div className="md:col-span-5">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                            We empower providers, TPAs, and HMOs through intelligent claims vetting—ensuring faster settlements, transparent payments, and renewed confidence from patients.
                        </p>
</div>
<div className="md:col-span-7 flex flex-col sm:flex-row items-center justify-end gap-4 w-full">
<button className="w-full sm:w-auto px-10 py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm">
                            Deploy Powder
                        </button>
<button className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white text-sm font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors rounded-sm flex items-center justify-center gap-2 group">
                            System Specs
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 border-y border-white/10 divide-x divide-white/10">
<div className="p-6 flex flex-col gap-2">
<span className="text-xs font-mono text-neutral-500 uppercase">Compliance</span>
<span className="text-sm text-white flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> HIPAA &amp; NDPR</span>
</div>
<div className="p-6 flex flex-col gap-2">
<span className="text-xs font-mono text-neutral-500 uppercase">Uptime</span>
<span className="text-sm text-white flex items-center gap-2"><iconify-icon icon="solar:server-square-linear"></iconify-icon> 99.99% Guaranteed</span>
</div>
<div className="p-6 flex flex-col gap-2">
<span className="text-xs font-mono text-neutral-500 uppercase">Security</span>
<span className="text-sm text-white flex items-center gap-2"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> AES-256 Encryption</span>
</div>
<div className="p-6 flex flex-col gap-2">
<span className="text-xs font-mono text-neutral-500 uppercase">Coverage</span>
<span className="text-sm text-white flex items-center gap-2"><iconify-icon icon="solar:global-linear"></iconify-icon> Pan-African Network</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative border-b border-white/10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-24 items-start">
<div>
<span className="block text-xs font-mono text-blue-500 uppercase tracking-widest mb-6">The Friction Point</span>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 text-white leading-tight">
                        TRUST IS BROKEN <br/> <span className="text-neutral-600">IN THE ECOSYSTEM.</span>
</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light max-w-md">
                        Africa’s health insurance ecosystem is slowed down by mistrust. Hospitals wait weeks for reimbursements, HMOs create complex vetting rules, and patients are left in limbo.
                    </p>
<div className="h-px w-24 bg-white/20 mb-8"></div>
<p className="text-white text-xl leading-relaxed font-normal">
                        PowderClaims turns this broken process into a fast, transparent, and reliable experience.
                    </p>
</div>
<div className="relative pt-10">

<div className="border border-white/10 bg-neutral-900/20 p-8 rounded-sm relative">
<div className="absolute top-0 left-0 px-2 py-1 bg-white/10 border-r border-b border-white/10 text-[10px] font-mono text-white">PROCESS_LOG</div>

<div className="flex items-start gap-6 mb-12 opacity-40">
<div className="w-8 h-8 border border-red-500/50 flex items-center justify-center text-red-500 text-xs">ERR</div>
<div className="flex-1 font-mono text-xs space-y-2">
<div className="text-red-400">&gt; INITIATE CLAIM_MANUAL</div>
<div className="text-neutral-500">Processing paperwork...</div>
<div className="text-neutral-500">Waiting for approval...</div>
<div className="text-red-500">&gt; TIMEOUT [45 DAYS]</div>
</div>
</div>

<div className="flex items-start gap-6 relative">
<div className="absolute -left-6 top-4 w-1 h-12 bg-blue-500"></div>
<div className="w-8 h-8 bg-blue-500/10 border border-blue-500 flex items-center justify-center text-blue-400 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex-1 font-mono text-xs space-y-2">
<div className="text-blue-400">&gt; INITIATE POWDER_AI</div>
<div className="text-white">Analyzing eligibility... [OK]</div>
<div className="text-white">Mapping tariffs... [OK]</div>
<div className="text-white">Fraud check... [PASSED]</div>
<div className="text-blue-500 font-bold">&gt; APPROVED [120s]</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6 border-b border-white/10">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tighter">OPERATIONAL IMPACT</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-white/10">

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">30<span className="text-3xl text-neutral-500">%</span></div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Overhead</div>
<p className="text-sm text-neutral-500 leading-relaxed">Reduction in administrative costs via automated workflows.</p>
</div>

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">50<span className="text-3xl text-neutral-500">%</span></div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Workload</div>
<p className="text-sm text-neutral-500 leading-relaxed">Decrease in manual vetting tasks for medical teams.</p>
</div>

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">~0<span className="text-3xl text-neutral-500">s</span></div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Latency</div>
<p className="text-sm text-neutral-500 leading-relaxed">Instant eligibility checks and tariff mapping.</p>
</div>

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">High</div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Retention</div>
<p className="text-sm text-neutral-500 leading-relaxed">Increased enrollee trust through faster reimbursement.</p>
</div>

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">Omni</div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Ingestion</div>
<p className="text-sm text-neutral-500 leading-relaxed">WhatsApp, Email, API, Portal—unified data stream.</p>
</div>

<div className="border-r border-b border-white/10 p-10 group hover:bg-white/[0.02] transition-colors">
<div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">Live</div>
<div className="text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">Visibility</div>
<p className="text-sm text-neutral-500 leading-relaxed">Real-time status tracking for all stakeholders.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative border-b border-white/10" id="products">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">Architecture</span>
<h2 className="text-4xl font-medium tracking-tighter text-white mb-6">UNIFIED<br/>OPERATIONS</h2>
<p className="text-neutral-400 text-sm leading-relaxed mb-8">
                        Powder brings all claims processing, telemedicine, and RCM into one unified system. No claim slips through, fraud is minimized, and scaling becomes effortless.
                    </p>
<a className="text-xs font-bold uppercase tracking-widest text-white border-b border-white pb-1 inline-block" href="#">View Documentation</a>
</div>
<div className="lg:col-span-3 grid md:grid-cols-3 gap-8">

<div className="border border-white/10 p-8 hover:border-white/30 transition-colors bg-neutral-900/10">
<div className="text-white mb-6">
<iconify-icon icon="solar:stethoscope-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Telemedicine</h3>
<p className="text-neutral-500 text-sm mb-8 leading-relaxed min-h-[60px]">Connected care with integrated HMO preauthorization and offline sync.</p>
<div className="space-y-4 border-t border-white/10 pt-6">
<div className="flex justify-between text-xs text-neutral-400">
<span>Video &amp; Chat</span>
<span className="text-white">Secure</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Claims Sync</span>
<span className="text-white">Auto</span>
</div>
</div>
<a className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors" href="#">
                            Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-white/10 p-8 hover:border-white/30 transition-colors bg-neutral-900/10">
<div className="text-white mb-6">
<iconify-icon icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Core AI</h3>
<p className="text-neutral-500 text-sm mb-8 leading-relaxed min-h-[60px]">The intelligence layer. Automated eligibility, scoring, and fraud detection.</p>
<div className="space-y-4 border-t border-white/10 pt-6">
<div className="flex justify-between text-xs text-neutral-400">
<span>Pre-Auth</span>
<span className="text-white">Instant</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Availability</span>
<span className="text-white">24/7</span>
</div>
</div>
<a className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors" href="#">
                            Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="border border-white/10 p-8 hover:border-white/30 transition-colors bg-neutral-900/10">
<div className="text-white mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Finance RCM</h3>
<p className="text-neutral-500 text-sm mb-8 leading-relaxed min-h-[60px]">Revenue simplified. Unified billing-to-claims automation for CFOs.</p>
<div className="space-y-4 border-t border-white/10 pt-6">
<div className="flex justify-between text-xs text-neutral-400">
<span>Invoicing</span>
<span className="text-white">Real-time</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Cash Flow</span>
<span className="text-white">+40%</span>
</div>
</div>
<a className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-blue-400 transition-colors" href="#">
                            Explore <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6 border-b border-white/10" id="how-it-works">
<div className="mb-20">
<span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-4">Workflow</span>
<h2 className="text-4xl font-medium text-white tracking-tighter">INTEGRATION LOGIC</h2>
</div>
<div className="grid md:grid-cols-3 gap-0 border-t border-b border-l border-white/10">

<div className="border-r border-white/10 p-12 relative group">
<div className="text-xs font-mono text-neutral-500 mb-6">01 // INGESTION</div>
<div className="mb-8 text-white opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-5xl" icon="solar:inbox-in-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Multi-Channel Intake</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Claims aggregated from WhatsApp, calls, API endpoints, and legacy hospital systems into a single data lake.</p>
</div>

<div className="border-r border-white/10 p-12 relative group">
<div className="text-xs font-mono text-neutral-500 mb-6">02 // PROCESSING</div>
<div className="mb-8 text-white opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-5xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">AI Adjudication</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Automated rules engine runs eligibility checks, fraud detection algorithms, and tariff validation instantly.</p>
</div>

<div className="border-r border-white/10 p-12 relative group">
<div className="text-xs font-mono text-neutral-500 mb-6">03 // SETTLEMENT</div>
<div className="mb-8 text-white opacity-80 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-5xl" icon="solar:bill-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4">Resolution</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Transparent tracking ledger, accelerated reimbursement cycles, and real-time financial reporting.</p>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-4 flex flex-col items-start">
<h2 className="text-3xl font-medium text-white mb-10 tracking-tighter">DEPLOYMENT<br/>SECTORS</h2>
<div className="flex flex-col w-full border-l border-white/10">
<button className="tab-btn active text-left pl-6 py-4 text-sm uppercase tracking-widest font-medium text-neutral-500 hover:text-white transition-all" id="tab-startups" onclick="switchTab('startups')">Startups</button>
<button className="tab-btn text-left pl-6 py-4 text-sm uppercase tracking-widest font-medium text-neutral-500 hover:text-white transition-all" id="tab-hospitals" onclick="switchTab('hospitals')">Hospitals</button>
<button className="tab-btn text-left pl-6 py-4 text-sm uppercase tracking-widest font-medium text-neutral-500 hover:text-white transition-all" id="tab-hmos" onclick="switchTab('hmos')">HMOs</button>
<button className="tab-btn text-left pl-6 py-4 text-sm uppercase tracking-widest font-medium text-neutral-500 hover:text-white transition-all" id="tab-state" onclick="switchTab('state')">Government</button>
</div>
</div>

<div className="lg:col-span-8 bg-neutral-900/10 border border-white/10 p-10 md:p-16 min-h-[400px]">

<div className="tab-content active gap-10" id="content-startups">
<div className="flex justify-between items-start border-b border-white/10 pb-8">
<h3 className="text-3xl text-white font-light tracking-tight">Market Entry Acceleration</h3>
<iconify-icon className="text-3xl text-white" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<div className="grid md:grid-cols-2 gap-10 pt-4">
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Objective</h4>
<p className="text-neutral-400 leading-relaxed">Rapidly deploy compliant health infrastructure without incurring technical debt.</p>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Impact</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Cut engineering costs by 60%</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Day-1 HIPAA &amp; NDPR Compliance</li>
</ul>
</div>
</div>
</div>

<div className="tab-content gap-10" id="content-hospitals">
<div className="flex justify-between items-start border-b border-white/10 pb-8">
<h3 className="text-3xl text-white font-light tracking-tight">Revenue Cycle Optimization</h3>
<iconify-icon className="text-3xl text-white" icon="solar:hospital-linear"></iconify-icon>
</div>
<div className="grid md:grid-cols-2 gap-10 pt-4">
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Objective</h4>
<p className="text-neutral-400 leading-relaxed">Eliminate revenue leakage and reduce reimbursement latency.</p>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Impact</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Automated reconciliation</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Real-time cash flow visibility</li>
</ul>
</div>
</div>
</div>

<div className="tab-content gap-10" id="content-hmos">
<div className="flex justify-between items-start border-b border-white/10 pb-8">
<h3 className="text-3xl text-white font-light tracking-tight">Operational Scale</h3>
<iconify-icon className="text-3xl text-white" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div className="grid md:grid-cols-2 gap-10 pt-4">
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Objective</h4>
<p className="text-neutral-400 leading-relaxed">Scale claim volume processing 3x without linear headcount increase.</p>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Impact</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>14-day turnaround (vs 45+)</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>30% reduction in fraud</li>
</ul>
</div>
</div>
</div>

<div className="tab-content gap-10" id="content-state">
<div className="flex justify-between items-start border-b border-white/10 pb-8">
<h3 className="text-3xl text-white font-light tracking-tight">Public Sector Infrastructure</h3>
<iconify-icon className="text-3xl text-white" icon="solar:city-linear"></iconify-icon>
</div>
<div className="grid md:grid-cols-2 gap-10 pt-4">
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Objective</h4>
<p className="text-neutral-400 leading-relaxed">Establish universal coverage transparency and auditability.</p>
</div>
<div>
<h4 className="text-sm font-bold text-white uppercase mb-3">Impact</h4>
<ul className="space-y-2 text-neutral-400 text-sm">
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Live financial dashboards</li>
<li className="flex items-center gap-3"><span className="w-1 h-1 bg-white"></span>Massive scale deployment</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-y border-white/10 bg-white/[0.01]" id="why-powder">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tighter">THE POWDER PROTOCOL</h2>
<p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-16">
                We are not just a platform. We are the operating system for modern health finance. Built by operators from Synthesis &amp; Springboard, backed by institutional rigor.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left border-t border-white/10 pt-12">
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Advisory</h4>
<p className="text-sm text-neutral-500">Harvard, Kennedy School, JP Morgan alumni.</p>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Technology</h4>
<p className="text-sm text-neutral-500">API-First, modular, plug-and-play architecture.</p>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Origin</h4>
<p className="text-sm text-neutral-500">Founded by proven healthcare operators.</p>
</div>
<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-2">Results</h4>
<p className="text-sm text-neutral-500">Up to 60% faster reimbursements.</p>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-[1400px] mx-auto px-6" id="blog">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
<h2 className="text-3xl font-medium text-white tracking-tighter">INTELLIGENCE</h2>
<a className="text-xs font-bold uppercase tracking-widest text-white hover:text-neutral-400 transition-colors" href="#">View Archives</a>
</div>
<div className="grid md:grid-cols-3 gap-0 border border-white/10 divide-x divide-white/10">

<article className="group cursor-pointer hover:bg-neutral-900/20 transition-colors p-8">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-6">Health Finance</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:underline decoration-1 underline-offset-4">The Future of Claims Vetting</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">How AI is replacing manual adjudication processes across the continent.</p>
<span className="text-xs text-white uppercase font-bold tracking-widest group-hover:translate-x-1 transition-transform inline-block">Read -&gt;</span>
</article>

<article className="group cursor-pointer hover:bg-neutral-900/20 transition-colors p-8">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-6">Infrastructure</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:underline decoration-1 underline-offset-4">API-First for HMOs</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">Legacy systems are holding back growth. Here is the modern alternative.</p>
<span className="text-xs text-white uppercase font-bold tracking-widest group-hover:translate-x-1 transition-transform inline-block">Read -&gt;</span>
</article>

<article className="group cursor-pointer hover:bg-neutral-900/20 transition-colors p-8">
<div className="text-[10px] font-mono text-neutral-500 uppercase mb-6">Case Study</div>
<h3 className="text-xl font-medium text-white mb-4 group-hover:underline decoration-1 underline-offset-4">Reducing Fraud by 30%</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">A look at how transparency builds public trust in healthcare.</p>
<span className="text-xs text-white uppercase font-bold tracking-widest group-hover:translate-x-1 transition-transform inline-block">Read -&gt;</span>
</article>
</div>
</section>

<footer className="bg-[#050505] pt-20 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6">

<div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-24 pb-24 border-b border-white/10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">
                    REDEFINE TRUST IN <br /> <span className="text-neutral-500">HEALTHCARE.</span>
</br></h2>
<button className="px-10 py-4 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors rounded-sm whitespace-nowrap">
                    Initiate Demo
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-bold tracking-tighter text-white uppercase block mb-6" href="#">
                        Powder
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        San Francisco &amp; Lagos.<br/>
                        Building the operating system for African health insurance.
                    </p>
</div>
<div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Product</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Claims Vetting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Telemedicine</a></li>
<li><a className="hover:text-white transition-colors" href="#">RCM Intelligence</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-4 text-xs text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Connect</h4>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:brand-linkedin-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:brand-x-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="py-8 border-t border-white/10 flex justify-between items-center text-[10px] text-neutral-600 font-mono uppercase">
<p>© 2024 POWDER HEALTH INC.</p>
<p>SYSTEM STATUS: ONLINE</p>
</div>
</div>
</footer>


    </>
  );
}
