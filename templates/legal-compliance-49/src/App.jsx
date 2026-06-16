import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
navy: '#1A2B3C',
gold: '#C5A028',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const contentDict = {
            supplier: {
                desc: "Configuring interface to recover delayed payments and compute accrued interest.",
                heroTitle: "Upload Sales/Receivables Ledger",
                heroDesc: "Drag and drop your financial exports. We automatically calculate interest claimable from defaulting buyers.",
                card1Title: "Principal Owed to You",
                card2Title: "Interest Claimable (3x)",
                card3Title: "Buyer's Sec 43B(h) Risk",
                card4Title: "Your MSEFC Filings",
                chartTitle: "Receivables Aging Analysis",
                chartDesc: "Distribution of delayed payments from buyers",
                reconTitle: "Receivables Reconciliation Engine",
                reconDesc: "Intelligent FIFO allocation of received payments against oldest invoices.",
                tpl1Title: "Audit-Ready Receivables Ledger",
                tpl2Title: "Sec 16 Demand Notice",
                tpl2Desc: "Auto-populated legal draft (.docx) calculating compound interest to serve to buyers.",
                tpl3Title: "MSEFC Claim Summary",
                tpl3Desc: "Structured PDF summarizing dates, principal, and exact interest claim for Samadhaan portal."
            },
            buyer: {
                desc: "Configuring interface to manage vendor payables, avoid tax disallowance, and settle MSME disputes.",
                heroTitle: "Upload Purchase/Payables Ledger",
                heroDesc: "Drag and drop your financial exports. We automatically identify MSME compliance risks and 43B(h) exposure.",
                card1Title: "Principal Owed to MSMEs",
                card2Title: "Accrued Penalty Risk (3x)",
                card3Title: "Your Sec 43B(h) Tax Risk",
                card4Title: "MSEFC Cases Against You",
                chartTitle: "Payables Aging Analysis",
                chartDesc: "Distribution of outstanding dues to registered MSME suppliers",
                reconTitle: "Payables Reconciliation Engine",
                reconDesc: "Intelligent FIFO allocation of outgoing payments to minimize interest penalty.",
                tpl1Title: "Form 1 Half-Yearly Return Data",
                tpl2Title: "Supplier Settlement Agreement",
                tpl2Desc: "Standardized waiver/settlement drafts for negotiating accrued interest with MSMEs.",
                tpl3Title: "MSEFC Defense Summary",
                tpl3Desc: "Structured PDF summarizing payments made, deductions, and defenses for Samadhaan hearings."
            }
        };

        function switchPerspective(type) {
            const btnSupplier = document.getElementById('btn-supplier');
            const btnBuyer = document.getElementById('btn-buyer');
            const data = contentDict[type];

            // Toggle active classes for buttons
            if (type === 'supplier') {
                btnSupplier.className = "text-xs font-medium px-5 py-2 rounded-md bg-white text-navy shadow-sm transition-all border border-slate-200";
                btnBuyer.className = "text-xs font-medium px-5 py-2 rounded-md text-slate-500 hover:text-slate-700 transition-all border border-transparent";
            } else {
                btnBuyer.className = "text-xs font-medium px-5 py-2 rounded-md bg-white text-navy shadow-sm transition-all border border-slate-200";
                btnSupplier.className = "text-xs font-medium px-5 py-2 rounded-md text-slate-500 hover:text-slate-700 transition-all border border-transparent";
            }

            // Update text content across dashboard
            document.getElementById('perspective-desc').innerText = data.desc;
            document.getElementById('hero-title').innerText = data.heroTitle;
            document.getElementById('hero-desc').innerText = data.heroDesc;
            document.getElementById('card1-title').innerText = data.card1Title;
            document.getElementById('card2-title').innerText = data.card2Title;
            document.getElementById('card3-title').innerText = data.card3Title;
            document.getElementById('card4-title').innerText = data.card4Title;
            document.getElementById('chart-title').innerText = data.chartTitle;
            document.getElementById('chart-desc').innerText = data.chartDesc;
            document.getElementById('recon-title').innerText = data.reconTitle;
            document.getElementById('recon-desc').innerText = data.reconDesc;
            document.getElementById('tpl1-title').innerText = data.tpl1Title;
            document.getElementById('tpl2-title').innerText = data.tpl2Title;
            document.getElementById('tpl2-desc').innerText = data.tpl2Desc;
            document.getElementById('tpl3-title').innerText = data.tpl3Title;
            document.getElementById('tpl3-desc').innerText = data.tpl3Desc;
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-navy text-slate-300 flex-shrink-0 hidden md:flex flex-col border-r border-slate-800 relative z-20">
<div className="p-6 border-b border-white/10 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center text-white font-serif font-semibold tracking-tighter text-lg shadow-sm">JD</div>
<span className="font-serif tracking-tighter text-xl font-semibold text-white">JurisDraft Pro</span>
</div>
<div className="p-4 flex-1 overflow-y-auto">
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 px-2">Compliance Modules</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-white/10 text-white transition-colors group" href="#">
<iconify-icon className="text-lg opacity-80 group-hover:opacity-100" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="text-lg opacity-60 group-hover:opacity-100" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Data Engine</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="text-lg opacity-60 group-hover:opacity-100" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Reconciliation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="text-lg opacity-60 group-hover:opacity-100" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">MSEFC Filings</span>
</a>
</nav>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4 px-2 mt-8">Settings</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="text-lg opacity-60 group-hover:opacity-100" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Configuration</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs text-white">AK</div>
<div>
<div className="text-sm text-white font-medium leading-none">Admin User</div>
<div className="text-xs text-slate-500 mt-1">Acme Corp Ltd.</div>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">

<header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-10">
<div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<h1 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-navy">Compliance Command Center</h1>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white hover:bg-slate-50 hover:text-red-600 px-2.5 py-1.5 rounded border border-slate-200 transition-colors shadow-sm">
<iconify-icon className="text-sm" icon="solar:trash-bin-minimalistic-linear"></iconify-icon>
<span className="hidden sm:inline">Clear Data</span>
</button>
<div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-full border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        Awaiting Upload
                    </div>
<button className="text-slate-400 hover:text-navy transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden relative">

<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#1A2B3C 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col gap-10">

<div className="flex flex-col items-center justify-center mb-2">
<h2 className="text-sm font-semibold text-navy mb-3">Select Operating Perspective</h2>
<div className="flex items-center bg-slate-200/60 p-1 rounded-lg w-max shadow-inner border border-slate-200/80">
<button className="text-xs font-medium px-5 py-2 rounded-md bg-white text-navy shadow-sm transition-all border border-slate-200" id="btn-supplier" onclick="switchPerspective('supplier')">
                            MSME Supplier (Creditor)
                        </button>
<button className="text-xs font-medium px-5 py-2 rounded-md text-slate-500 hover:text-slate-700 transition-all border border-transparent" id="btn-buyer" onclick="switchPerspective('buyer')">
                            Corporate Buyer (Debtor)
                        </button>
</div>
<p className="text-xs text-slate-500 mt-3 text-center max-w-md" id="perspective-desc">
                        Configuring interface to recover delayed payments and compute accrued interest.
                    </p>
</div>

<section>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-1 mb-8">
<div className="border-2 border-dashed border-slate-200 hover:border-gold/50 transition-colors rounded-lg p-8 sm:p-12 flex flex-col items-center justify-center text-center bg-slate-50/50 cursor-pointer group">
<div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-sm group-hover:shadow-md group-hover:border-gold/30">
<iconify-icon className="text-2xl text-navy group-hover:text-gold transition-colors" icon="solar:cloud-upload-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-navy mb-1" id="hero-title">Upload Sales/Receivables Ledger</h3>
<p className="text-sm text-slate-500 max-w-md mx-auto mb-4" id="hero-desc">Drag and drop your financial exports. We automatically calculate interest claimable from defaulting buyers.</p>
<div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400 font-medium">
<span className="bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">Tally (Excel/XML)</span>
<span className="bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">Business Central</span>
<span className="bg-white px-2 py-1 rounded border border-slate-100 shadow-sm">Vyapar (CSV)</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity">
<iconify-icon className="text-6xl text-slate-400" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider relative z-10" id="card1-title">Principal Owed to You</div>
<div className="text-2xl font-semibold text-slate-400 tracking-tight relative z-10">₹ 0</div>
<div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 relative z-10">
<span>- no data</span>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-slate-200"></div>
<div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity">
<iconify-icon className="text-6xl text-slate-400" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider relative z-10" id="card2-title">Interest Claimable (3x)</div>
<div className="text-2xl font-semibold text-slate-400 tracking-tight relative z-10 flex items-baseline gap-2">
                                ₹ 0
                                <span className="text-xs font-normal text-slate-400">@16.5% p.a.</span>
</div>
<div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 relative z-10">
                                Sec 16 MSMED Act applied
                            </div>
</div>

<div className="bg-slate-50/50 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity">
<iconify-icon className="text-6xl text-slate-400" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start relative z-10">
<div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider" id="card3-title">Buyer's Sec 43B(h) Risk</div>
</div>
<div className="text-2xl font-semibold text-slate-400 tracking-tight relative z-10">₹ 0</div>
<div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400 relative z-10">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon> Awaiting scan
                            </div>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl p-5 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
<div className="absolute top-0 right-0 p-4 opacity-5 transition-opacity">
<iconify-icon className="text-6xl text-slate-400" icon="solar:gavel-linear"></iconify-icon>
</div>
<div className="text-xs font-medium text-slate-500 mb-1 uppercase tracking-wider relative z-10" id="card4-title">Your MSEFC Filings</div>
<div className="text-2xl font-semibold text-slate-400 tracking-tight relative z-10">0 Filings</div>
<div className="mt-3 flex items-center gap-3 text-xs text-slate-400 relative z-10">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-200"></span> 0 Pre-litigation</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-200"></span> 0 Awarded</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-base font-semibold text-navy" id="chart-title">Receivables Aging Analysis</h3>
<p className="text-xs text-slate-500 mt-1" id="chart-desc">Distribution of delayed payments from buyers</p>
</div>
<button className="text-xs font-medium text-slate-400 border border-slate-100 px-3 py-1.5 rounded bg-slate-50 flex items-center gap-2 cursor-not-allowed">
<iconify-icon icon="solar:export-linear"></iconify-icon> Export View
                            </button>
</div>

<div className="h-48 flex items-end gap-2 sm:gap-6 pt-4 border-b border-slate-100 relative opacity-50">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-[1px]">
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div className="w-full border-t border-slate-100 border-dashed"></div>
<div></div>
</div>
<div className="flex-1 flex flex-col items-center justify-end gap-2 group relative z-10">
<span className="text-xs font-medium text-slate-600 absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 shadow-sm rounded border border-slate-100 z-20">₹ 0</span>
<div className="w-full max-w-[80px] bg-slate-200 transition-colors rounded-t h-[4px]"></div>
<span className="text-xs text-slate-400 mt-2 whitespace-nowrap">0-15 Days</span>
</div>
<div className="flex-1 flex flex-col items-center justify-end gap-2 group relative z-10">
<span className="text-xs font-medium text-slate-600 absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 shadow-sm rounded border border-slate-100 z-20">₹ 0</span>
<div className="w-full max-w-[80px] bg-slate-200 transition-colors rounded-t h-[4px]"></div>
<span className="text-xs text-slate-400 mt-2 whitespace-nowrap">16-45 Days</span>
</div>
<div className="flex-1 flex flex-col items-center justify-end gap-2 group relative z-10">
<span className="text-xs font-medium text-slate-600 absolute -top-6 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-2 py-1 shadow-sm rounded border border-slate-100 z-20">₹ 0</span>
<div className="w-full max-w-[80px] bg-slate-200 transition-colors rounded-t h-[4px]"></div>
<span className="text-xs text-slate-400 mt-2 whitespace-nowrap">&gt; 45 Days</span>
</div>
</div>
</div>
</section>
<hr className="border-slate-200"/>

<section>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h2 className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-navy" id="recon-title">Receivables Reconciliation Engine</h2>
<p className="text-sm text-slate-500 mt-1" id="recon-desc">Intelligent FIFO allocation of received payments against oldest invoices.</p>
</div>

<div className="flex items-center gap-2">
<span className="text-xs text-slate-400 mr-2">Direct Sync:</span>
<div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#2A1E5C] hover:border-navy cursor-pointer transition-colors" title="Tally Prime">
<iconify-icon icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 hover:border-navy cursor-pointer transition-colors" title="Business Central">
<iconify-icon icon="solar:windows-frame-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded bg-white border border-slate-200 shadow-sm flex items-center justify-center text-red-500 hover:border-navy cursor-pointer transition-colors" title="Busy">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-500 uppercase tracking-wider font-semibold">
<tr>
<th className="px-4 py-3">Date</th>
<th className="px-4 py-3">Reference (Inv/Rect)</th>
<th className="px-4 py-3 text-right">Principal Amt</th>
<th className="px-4 py-3 text-right">Receipt Amt</th>
<th className="px-4 py-3 text-right text-emerald-600">Auto-Adjust (FIFO)</th>
<th className="px-4 py-3 text-right text-gold">Int. Accrued</th>
<th className="px-4 py-3 text-right font-semibold text-navy">Running Balance</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-600">
<tr>
<td className="px-4 py-16 text-center" colspan="7">
<div className="flex flex-col items-center justify-center text-slate-400">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl text-slate-300" icon="solar:database-linear"></iconify-icon>
</div>
<p className="font-medium text-slate-500 mb-1">No ledger data found</p>
<p className="text-xs">Upload your financial exports above to populate the engine.</p>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="bg-slate-50 px-4 py-3 border-t border-slate-200 flex justify-between items-center text-xs">
<span className="text-slate-400">Showing 0 of 0 ledger entries</span>
<div className="flex gap-1">
<button className="px-2 py-1 border border-slate-200 rounded bg-slate-50 text-slate-300 cursor-not-allowed">Prev</button>
<button className="px-2 py-1 border border-slate-200 rounded bg-slate-50 text-slate-300 cursor-not-allowed">Next</button>
</div>
</div>
</div>
</section>
<hr className="border-slate-200"/>

<section className="mb-12">
<h2 className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-navy mb-6">Regulatory Export Center</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all cursor-pointer group flex flex-col h-full opacity-60 hover:opacity-100">
<div className="w-10 h-10 rounded bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-emerald-600" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2" id="tpl1-title">Audit-Ready Receivables Ledger</h3>
<p className="text-xs text-slate-500 flex-1 mb-4" id="tpl1-desc">Complete reconciliation sheet with automated formulas for auditor verification.</p>
<div className="text-xs font-medium text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Select Template <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all cursor-pointer group flex flex-col h-full relative overflow-hidden opacity-60 hover:opacity-100">
<div className="absolute top-0 right-0 bg-slate-200 text-slate-500 group-hover:bg-gold group-hover:text-white transition-colors text-[9px] font-semibold px-2 py-0.5 rounded-bl-lg uppercase tracking-wider">Most Used</div>
<div className="w-10 h-10 rounded bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-blue-600" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2" id="tpl2-title">Sec 16 Demand Notice</h3>
<p className="text-xs text-slate-500 flex-1 mb-4" id="tpl2-desc">Auto-populated legal draft (.docx) calculating compound interest to serve to buyers.</p>
<div className="text-xs font-medium text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Select Template <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all cursor-pointer group flex flex-col h-full opacity-60 hover:opacity-100">
<div className="w-10 h-10 rounded bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-indigo-600" icon="solar:file-check-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-navy mb-2" id="tpl3-title">MSEFC Claim Summary</h3>
<p className="text-xs text-slate-500 flex-1 mb-4" id="tpl3-desc">Structured PDF summarizing dates, principal, and exact interest claim for Samadhaan portal.</p>
<div className="text-xs font-medium text-gold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Select Template <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto bg-slate-200 text-slate-400 cursor-not-allowed text-sm font-medium px-8 py-3.5 rounded-lg shadow-sm flex items-center justify-center gap-2">
<iconify-icon className="text-lg" icon="solar:printer-linear"></iconify-icon>
                            Generate Statutory Reports
                        </button>
<span className="text-xs text-slate-400">Upload data to generate reports.</span>
</div>
</section>
</div>

<footer className="bg-navy mt-auto border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="flex gap-3 items-start p-4 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-gold text-xl flex-shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-serif">
<strong className="text-white font-semibold tracking-wide">Statutory Disclaimer:</strong> This tool is for informational and calculation purposes only based on the MSMED Act, 2006. While we strive for absolute accuracy in line with RBI rates and Section 43B(h) of the Income Tax Act, these results do not constitute legal or tax advice. Users must verify all outputs with a qualified Chartered Accountant or Legal Counsel before any statutory filing or legal action.
                        </p>
</div>
</div>
</footer>
</main>
</div>



    </>
  );
}
