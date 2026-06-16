import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-zinc-200/60 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-base font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-zinc-900 text-white rounded flex items-center justify-center text-xs font-medium tracking-tighter">QP</div>
                Quietpilot
            </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Architecture</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Tenancy</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Docs</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Login</a>
<button className="bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:github-linear" strokeWidth="1.5"></iconify-icon>
                View Repository
            </button>
</div>
</header>

<main className="flex-1 md:py-24 grid lg:grid-cols-[1fr_1.2fr] lg:gap-20 w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 gap-x-12 gap-y-12 items-center overflow-hidden">

<div className="flex flex-col items-start relative z-10">
<div className="fade-in inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-600 mb-6 shadow-sm" style={{animationDelay: '2.6s'}}>
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                TypeScript Modular-Monolith
            </div>

<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-semibold tracking-tighter leading-none mb-6 relative z-20" style={{animation: 'quietPilotReveal 5s ease-in-out forwards'}}>
                Quiet Pilot
            </h1>
<h2 className="fade-in text-2xl md:text-3xl lg:text-3xl font-medium tracking-tighter leading-[1.2] text-zinc-900 mb-5" style={{animationDelay: '2.7s'}}>
                The core engine for service businesses.
            </h2>
<p className="fade-in text-base text-zinc-500 font-normal leading-relaxed mb-10 max-w-md" style={{animationDelay: '2.8s'}}>
                A multi-tenant SaaS codebase providing the complete workflow primitives—from initial lead intake to downstream synchronization.
            </p>

<div className="fade-in w-full max-w-md bg-white border border-zinc-200 shadow-sm rounded-xl p-5 relative overflow-hidden" style={{animationDelay: '2.9s'}}>

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<h3 className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-6 relative z-10">Workflow Architecture</h3>
<div className="relative pl-3 before:absolute before:inset-y-2 before:left-[15px] before:w-[1px] before:bg-zinc-200 flex flex-col gap-5 z-10">

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.1s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Lead Intake</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.2s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Inventory &amp; COGS</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.3s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Quote Versioning</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.4s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Approval</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.5s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:handshake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Proposal Acceptance</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.6s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Payment Gate</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.7s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:hammer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Job Creation</div>
</div>
</div>

<div className="fly-in-left relative flex items-center gap-4 group" style={{animationDelay: '3.8s'}}>
<div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border border-zinc-300 group-hover:border-zinc-900 transition-colors z-10"></div>
<div className="w-8 h-8 rounded-md bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon className="text-base" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-900 tracking-tight">Downstream Sync</div>
</div>
</div>
</div>
</div>
</div>

<div className="fade-in relative w-full lg:-mr-10 z-0" style={{animationDelay: '3.0s'}}>
<div className="absolute -inset-1 bg-gradient-to-tr from-zinc-200 to-zinc-100 rounded-[1.5rem] blur-xl opacity-60 z-0"></div>
<div className="relative z-10 bg-[#0c0c0c] rounded-xl border border-[#262626] shadow-2xl overflow-hidden flex flex-col">

<div className="flex items-center justify-between px-4 py-3 border-b border-[#262626] bg-[#0c0c0c]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="text-xs font-medium text-[#777] tracking-tight flex items-center gap-2">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                        packages/core/src/workflow.ts
                    </div>
<div className="w-10"></div> 
</div>

<div className="p-6 overflow-x-auto code-scroll bg-[#0c0c0c]">
<pre className="text-xs leading-[1.8] font-mono text-[#d4d4d4]"><span className="text-[#c586c0]">import</span> <span className="text-[#d4d4d4]">{</span> <span className="text-[#9cdcfe]">Tenant</span><span className="text-[#d4d4d4]">,</span> <span className="text-[#9cdcfe]">ID</span> <span className="text-[#d4d4d4]">}</span> <span className="text-[#c586c0]">from</span> <span className="text-[#ce9178]">'@qp/types'</span><span className="text-[#d4d4d4]">;</span>

<span className="text-[#c586c0]">export</span> <span className="text-[#569cd6]">interface</span> <span className="text-[#4ec9b0]">ServiceWorkflow</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">T</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Tenant</span><span className="text-[#d4d4d4]">&gt; {</span>
  <span className="text-[#6a9955]">/** Registers a new potential opportunity */</span>
  <span className="text-[#dcdcaa]">leadIntake</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">payload</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">LeadDTO</span><span className="text-[#d4d4d4]">): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">Lead</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Pulls availability and calculates Cost of Goods Sold */</span>
  <span className="text-[#dcdcaa]">resolveInventoryAndCOGS</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">items</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">CatalogItem</span><span className="text-[#d4d4d4]">[]): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">COGSProfile</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Creates an immutable pricing snapshot */</span>
  <span className="text-[#dcdcaa]">quoteVersioning</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">leadId</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">ID</span><span className="text-[#d4d4d4]">, </span><span className="text-[#9cdcfe]">items</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">LineItem</span><span className="text-[#d4d4d4]">[]): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">Quote</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Routes quote through internal permissions */</span>
  <span className="text-[#dcdcaa]">approval</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">quoteId</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">ID</span><span className="text-[#d4d4d4]">, </span><span className="text-[#9cdcfe]">chain</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">ApprovalChain</span><span className="text-[#d4d4d4]">): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">Status</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Client facing signature collection */</span>
  <span className="text-[#dcdcaa]">proposalAcceptance</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">quoteId</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">ID</span><span className="text-[#d4d4d4]">, </span><span className="text-[#9cdcfe]">sig</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">Signature</span><span className="text-[#d4d4d4]">): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#569cd6]">boolean</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Multi-tenant transaction processing */</span>
  <span className="text-[#dcdcaa]">paymentGate</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">amount</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">Money</span><span className="text-[#d4d4d4]">, </span><span className="text-[#9cdcfe]">method</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">PaymentMethod</span><span className="text-[#d4d4d4]">): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">Tx</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Transitions proposal to operational entity */</span>
  <span className="text-[#dcdcaa]">jobCreation</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">proposalId</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">ID</span><span className="text-[#d4d4d4]">): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#4ec9b0]">Job</span><span className="text-[#d4d4d4]">&gt;;</span>

  <span className="text-[#6a9955]">/** Dispatches data to external ERPs/Systems */</span>
  <span className="text-[#dcdcaa]">downstreamSync</span><span className="text-[#d4d4d4]">(</span><span className="text-[#9cdcfe]">job</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">Job</span><span className="text-[#d4d4d4]">, </span><span className="text-[#9cdcfe]">targets</span><span className="text-[#d4d4d4]">: </span><span className="text-[#4ec9b0]">SyncTarget</span><span className="text-[#d4d4d4]">[]): </span><span className="text-[#4ec9b0]">Promise</span><span className="text-[#d4d4d4]">&lt;</span><span className="text-[#569cd6]">void</span><span className="text-[#d4d4d4]">&gt;;</span>
<span className="text-[#d4d4d4]">}</span>
</pre>
</div>
</div>
</div>
</main>

    </>
  );
}
