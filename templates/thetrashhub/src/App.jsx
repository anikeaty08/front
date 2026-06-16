import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year update
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('iconify-icon');
      if (mobileMenu.classList.contains('hidden')) {
        icon.setAttribute('icon', 'lucide:menu');
      } else {
        icon.setAttribute('icon', 'lucide:x');
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      Response:
<meta charset="utf-8"/>
<title>WasteWise by THE Trash Hub</title>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<meta content="AI-powered waste management intelligence for property managers and asset owners. Benchmark performance, reduce costs, and streamline budgeting." name="description"/>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&amp;display=swap" rel="stylesheet"/>

<style>
  .font-playfair { font-family: 'Playfair Display', serif !important; }
  body { font-family: 'Inter', sans-serif; }
</style>
<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-50 border-b border-white/5 bg-[#1b2320]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">

<a className="flex items-center gap-3 group" href="#">

<div className="w-10 h-10 rounded-xl bg-white border border-white/20 flex items-center justify-center relative overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-105 transition-transform duration-300">

<div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-emerald-50"></div>
<svg className="z-10 relative" fill="none" height="28" viewbox="0 0 100 100" width="28" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="circuit-grad" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="#06b6d4"></stop>
</lineargradient>
</defs>

<path d="M28 32L34 88C34.5 92 36 94 40 94H60C64 94 65.5 92 66 88L72 32H28Z" fill="#18181b" stroke="#374151" strokeWidth="3"></path>

<path d="M22 24H78C80 24 81 25 81 27C81 29 80 30 78 30H22C20 30 19 29 19 27C19 25 20 24 22 24Z" fill="#27272a" stroke="#374151" strokeWidth="3"></path>
<path d="M42 18H58L60 24H40L42 18Z" fill="#27272a" stroke="#374151" strokeWidth="3"></path>

<g stroke="url(#circuit-grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
<path className="opacity-100" d="M38 40V55L44 61V75"></path>
<path className="opacity-100" d="M34 50H38"></path>
<path className="opacity-100" d="M50 35V65L58 73V85"></path>
<path className="opacity-100" d="M64 40V50L55 59"></path>
<path className="opacity-80" d="M25 27H40" strokeWidth="2"></path>
<path className="opacity-80" d="M60 27H75" strokeWidth="2"></path>
</g>

<circle cx="44" cy="78" fill="#10b981" r="2.5"></circle>
<circle cx="58" cy="88" fill="#06b6d4" r="2.5"></circle>
<circle cx="55" cy="59" fill="#10b981" r="2"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="font-sans font-bold text-xl tracking-[0.05em] text-white leading-none uppercase drop-shadow-sm">WasteWise</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-gray-300/80 font-medium mt-0.5">by THE TRASH HUB</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#for-owners">For Asset Owners</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>

<button className="md:hidden p-2 text-gray-300 hover:text-white transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden sm:flex items-center gap-3">

<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign in
          </button>

<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-[#1b2320] px-5 py-2.5 text-sm font-semibold hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
<iconify-icon height="16" icon="lucide:upload-cloud" strokeWidth="2" width="16"></iconify-icon>
<span>Upload Invoice</span>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/10 bg-[#1b2320]/95 backdrop-blur-xl absolute w-full left-0 shadow-2xl" id="mobile-menu">
<nav className="flex flex-col p-4 space-y-3 text-sm font-medium text-gray-300">
<a className="hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors" href="#features">Features</a>
<a className="hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors" href="#for-owners">For Asset Owners</a>
<a className="hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-colors" href="#pricing">Pricing</a>
<hr className="border-white/10 mx-4 my-2"/>
<button className="mx-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 text-[#1b2320] px-5 py-3 text-sm font-semibold">
<iconify-icon height="16" icon="lucide:upload-cloud" strokeWidth="2" width="16"></iconify-icon>
            Upload Invoice
          </button>
</nav>
</div>
</header>
<main className="flex-1 w-full">

<div className="relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 lg:pt-24 lg:pb-32 flex flex-col z-10 text-center max-w-7xl mx-auto pt-16 px-4 pb-20 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium tracking-wide uppercase mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            AI-Powered Waste Intelligence
          </div>
<h1 className="max-w-4xl font-playfair text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            Cut Waste Costs. <br/>
<span className="italic text-emerald-400">Not Corners.</span>
</h1>
<p className="max-w-2xl text-lg text-emerald-100/70 mb-10 leading-relaxed">
            Automated auditing for property managers and asset owners. Upload your WM, Republic, or Waste Connections invoices and get performance benchmarks, cost insights, and actionable recommendations in seconds.
          </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-[#1b2320] px-6 py-3.5 text-sm font-semibold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all">
<span>Start Free Analysis</span>
<iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-[#232e29] px-6 py-3.5 text-sm font-medium text-emerald-50 hover:border-emerald-500 hover:bg-emerald-900/30 transition-colors">
<iconify-icon className="text-emerald-400" height="16" icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span>Watch 60s Demo</span>
</button>
</div>

<div className="mt-12 flex flex-col items-center gap-4">
<div className="flex items-center gap-4 text-sm text-emerald-200/60">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#1b2320]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#1b2320]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-[#1b2320]" src="https://i.pravatar.cc/100?img=12"/>
</div>
<p>Trusted by <span className="text-emerald-100 font-medium">1,200+</span> property managers</p>
</div>
<blockquote className="text-emerald-100 italic text-sm max-w-md">
              "Found $4,200 in annual savings and finally understood our waste performance vs. market benchmarks."
            </blockquote>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24" id="features">
<div className="rounded-3xl border border-emerald-800/50 bg-[#232e29] shadow-2xl overflow-hidden relative">

<div className="h-10 border-b border-emerald-800/50 bg-[#1b2320]/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
<span className="ml-4 text-xs text-emerald-200/40">WasteWise Dashboard</span>
</div>
<div className="flex flex-col lg:flex-row min-h-[600px]">

<div className="hidden lg:flex w-64 border-r border-emerald-800/50 bg-[#1b2320] flex-col p-4">
<div className="mb-8">
<p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3 px-2">My Projects</p>
<div className="space-y-1">
<button className="flex gap-2 text-sm font-medium text-emerald-100 bg-emerald-500/10 w-full border-emerald-500/20 border rounded-lg py-2 px-3 items-center">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="16"></iconify-icon>
                    Sunset Ridge Apartments
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-400/70 hover:text-emerald-200 hover:bg-emerald-900/20 text-sm transition-colors">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="16"></iconify-icon>
                    Mandarina Complex
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-emerald-400/50 hover:text-emerald-300 text-sm mt-2 transition-colors">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                    New Project
                  </button>
</div>
</div>
<div className="mb-8">
<p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3 px-2">Recent Uploads</p>
<div className="space-y-2">
<div className="flex items-center gap-2 px-3 text-xs text-emerald-200/60">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="14"></iconify-icon>
<span>WM_Inv_Nov.pdf</span>
</div>
<div className="flex items-center gap-2 px-3 text-xs text-emerald-200/60">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="14"></iconify-icon>
<span>Republic_Oct.pdf</span>
</div>
</div>
</div>
<div className="mt-auto">
<p className="text-xs font-semibold text-emerald-500 uppercase tracking-wider mb-3 px-2">Export</p>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-200/70 hover:text-emerald-100 hover:bg-emerald-900/20 text-sm transition-colors">
<iconify-icon className="text-emerald-400" icon="lucide:file-spreadsheet" strokeWidth="1.5" width="16"></iconify-icon>
                  Download Full Excel
                </button>
</div>
</div>

<div className="flex-1 bg-[#232e29] p-6 lg:p-8 overflow-y-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-semibold text-emerald-50 font-playfair tracking-tight">Sunset Ridge Apartments</h2>
<p className="text-sm text-emerald-200/60">312 Units • Garden-Style • Last synced 2 mins ago</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-700/50 bg-[#2f3b30] px-3 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-800/50 transition-colors">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="14"></iconify-icon>
                    Export Excel
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-emerald-700/50 bg-[#2f3b30] px-3 py-2 text-xs font-medium text-emerald-100 hover:bg-emerald-800/50 transition-colors">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="14"></iconify-icon>
                    Full Report
                  </button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-[#2f3b30] border border-emerald-800/50 p-5 rounded-2xl">
<p className="text-xs font-medium text-emerald-400 uppercase tracking-wide mb-1">Monthly Spend</p>
<p className="text-2xl font-semibold text-emerald-50">$12,450</p>
<p className="text-xs text-emerald-200/50 mt-1 flex items-center gap-1">
<iconify-icon className="text-red-400" icon="lucide:trending-up" strokeWidth="2" width="12"></iconify-icon>
<span className="text-red-300/80">+2.4% vs last month</span>
</p>
</div>
<div className="bg-[#2f3b30] border border-emerald-800/50 p-5 rounded-2xl">
<p className="text-xs font-medium text-emerald-400 uppercase tracking-wide mb-1">Yards / Door</p>
<p className="text-2xl font-semibold text-emerald-50">2.3</p>
<p className="text-xs text-emerald-200/50 mt-1 flex items-center gap-1">
<iconify-icon className="text-emerald-400" icon="lucide:target" strokeWidth="2" width="12"></iconify-icon>
<span>Benchmark: 2.0-2.5</span>
</p>
</div>
<div className="bg-[#2f3b30] border border-emerald-800/50 p-5 rounded-2xl relative overflow-hidden">
<div className="absolute right-0 top-0 w-16 h-16 bg-red-500/10 rounded-bl-3xl"></div>
<p className="text-xs font-medium text-red-400 uppercase tracking-wide mb-1">Issues Found</p>
<p className="text-2xl font-semibold text-emerald-50">3</p>
<p className="text-xs text-red-300/70 mt-1">Action required</p>
</div>
<div className="bg-gradient-to-br from-emerald-900/80 to-[#2f3b30] border border-emerald-500/30 p-5 rounded-2xl">
<p className="text-xs font-medium text-emerald-300 uppercase tracking-wide mb-1">Savings Potential</p>
<p className="text-2xl font-semibold text-emerald-400">$4,200<span className="text-sm font-normal text-emerald-200/70">/yr</span></p>
<p className="text-xs text-emerald-200/50 mt-1">Based on current rates</p>
</div>
</div>

<div className="grid lg:grid-cols-[1fr_1.5fr] gap-6">

<div className="bg-[#1b2320] border border-emerald-800/50 border-dashed border-2 rounded-2xl flex flex-col items-center justify-center p-8 text-center hover:bg-[#1f2924] transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="lucide:upload" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-emerald-50 font-medium mb-1">Upload Invoices</h3>
<p className="text-xs text-emerald-200/60 mb-4">Drag &amp; drop PDF, XLSX, or images</p>
<div className="w-full bg-[#2f3b30] rounded-lg p-3 text-left flex items-center gap-3 border border-emerald-800/30">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400">
<iconify-icon icon="lucide:file-text" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-emerald-50 truncate">WM_Invoice_Nov.pdf</p>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 h-1 bg-emerald-900/50 rounded-full overflow-hidden">
<div className="w-[70%] h-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-[10px] text-emerald-400">70%</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<h3 className="text-sm font-semibold text-emerald-50 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
                    Savings Opportunities
                  </h3>

<div className="bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 p-4 rounded-xl flex items-start justify-between gap-4 shadow-sm group hover:translate-y-[-2px] transition-transform">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-bold text-sm">Compactor Monitor</h4>
<p className="text-emerald-200/70 text-xs mt-1">Hauls averaging only 5.2 tons. Install monitor to reduce pickup frequency.</p>
<div className="flex gap-2 mt-3">
<button className="text-[10px] font-semibold bg-emerald-500 text-[#1b2320] px-2 py-1 rounded hover:bg-emerald-400 transition-colors">View Details</button>
<button className="text-[10px] font-medium text-emerald-300 px-2 py-1 rounded border border-emerald-700/50 hover:bg-emerald-900/30 transition-colors">Contact Vendor</button>
</div>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-emerald-400 font-bold text-sm">$2,400</p>
<p className="text-emerald-200/50 text-[10px]">potential/yr</p>
</div>
</div>

<div className="bg-[#2f3b30] border border-emerald-800/50 p-4 rounded-xl flex items-start justify-between gap-4 hover:translate-y-[-2px] transition-transform">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-[#1b2320] flex items-center justify-center text-red-400 shrink-0">
<iconify-icon icon="lucide:alert-triangle" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-medium text-sm">Contamination Fees</h4>
<p className="text-emerald-200/60 text-xs mt-1">Recurring overage charges detected. 4.2% of total spend.</p>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-emerald-400 font-medium text-sm">$1,800</p>
<p className="text-emerald-200/40 text-[10px]">annual waste</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0f1412] border-t border-emerald-900/50 py-24 relative overflow-hidden" id="for-owners">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-500 mb-3">
              FOR ASSET OWNERS
            </p>
<h2 className="font-playfair text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
              Know how your asset <span className="italic text-emerald-400">really</span> performs
            </h2>
<p className="text-emerald-100/70 text-lg max-w-2xl mx-auto">
              Go beyond cost savings. Get complete visibility into your property's waste performance, benchmark against industry standards, and make data-driven decisions.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:gauge" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Performance Assessment</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                Get a complete health check of your waste operations. We analyze service levels, container utilization, and operational efficiency.
              </p>
</div>

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Industry Benchmarks</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                Compare your Yards Per Door, cost per unit, and service frequency against market standards for your property type.
              </p>
</div>

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:git-compare" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Market Comparison</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                See how your site stacks up against comparable properties in your region. Identify if you're overpaying relative to market rates.
              </p>
</div>

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Complete Excel Export</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                Get your entire historical spend summarized and itemized in a single Excel document. Every line item, fee, and charge—organized and ready for review.
              </p>
</div>

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:calculator" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Budget Support</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                Forecast annual waste costs with confidence. Identify trends, anticipate rate increases, and plan for capital improvements.
              </p>
</div>

<div className="group bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.05)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Save Hours, Not Minutes</h3>
<p className="text-emerald-200/60 text-sm leading-relaxed">
                Stop manually reviewing invoices. Our AI extracts every line item automatically—what took hours now takes seconds.
              </p>
</div>
</div>
</div>
</section>

<section className="text-stone-900 bg-[#f4eadf] border-stone-200 border-t pt-24 pb-24" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
<div className="max-w-xl">
<p className="text-xs font-semibold tracking-[0.18em] uppercase text-stone-500 mb-3">
                THE PROCESS
              </p>
<h2 className="font-playfair text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 leading-tight">
                From PDF to <span className="italic text-stone-600">Insights</span>
                in three simple steps.
              </h2>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-[#f4eadf] px-6 py-3 text-sm font-medium hover:bg-stone-800 transition-colors">
              Start your audit
              <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-[#f7efe4] border border-stone-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-stone-900 text-[#f4eadf] flex items-center justify-center text-lg font-playfair font-semibold mb-6">1</div>
<h3 className="text-xl font-bold font-playfair mb-3">Upload</h3>
<p className="leading-relaxed text-sm text-stone-600">Drag and drop your hauler invoices and contracts directly into the dashboard. We support PDF, XLSX, scanned images, and digital statements.</p>
<div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-2 text-xs font-medium text-stone-500">
<iconify-icon className="text-emerald-600" icon="lucide:file-check" strokeWidth="1.5" width="16"></iconify-icon>
<span>No manual data entry</span>
</div>
</div>

<div className="group p-8 rounded-3xl bg-[#f7efe4] border border-stone-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-stone-900 text-[#f4eadf] flex items-center justify-center text-lg font-playfair font-semibold mb-6">2</div>
<h3 className="text-xl font-bold font-playfair mb-3">Analyze</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                Our AI reads line-item details to categorize spend, identify service levels, flag ancillary fees, and detect contract discrepancies.
              </p>
<div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-2 text-xs font-medium text-stone-500">
<iconify-icon className="text-emerald-600" icon="lucide:cpu" strokeWidth="1.5" width="16"></iconify-icon>
<span>Processed in &lt; 60 seconds</span>
</div>
</div>

<div className="group p-8 rounded-3xl bg-[#f7efe4] border border-stone-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
<div className="w-12 h-12 rounded-full bg-stone-900 text-[#f4eadf] flex items-center justify-center text-lg font-playfair font-semibold mb-6">3</div>
<h3 className="text-xl font-bold font-playfair mb-3">Optimize</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                Get prioritized recommendations with benchmarks, export your complete spend history to Excel, and take action with confidence.
              </p>
<div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-2 text-xs font-medium text-stone-500">
<iconify-icon className="text-emerald-600" icon="lucide:trending-down" strokeWidth="1.5" width="16"></iconify-icon>
<span>Avg. savings of 15-30%</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1b2320] border-t border-emerald-900/50 py-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-500 mb-3">
                IMPACT REPORT
              </p>
<h2 className="font-playfair text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">
                The hidden cost of
                <span className="italic text-emerald-400">waste mismanagement</span>
</h2>
<p className="text-emerald-100/70 mb-8 leading-relaxed">
                Most property managers overpay for waste services because invoices are complex and difficult to audit manually. WasteWise changes the equation.
              </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
<iconify-icon icon="lucide:dollar-sign" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-bold text-lg">$3,000+</h4>
<p className="text-emerald-200/60 text-sm">Average annual savings identified per property.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-bold text-lg">95% Faster</h4>
<p className="text-emerald-200/60 text-sm">Reduce audit time from hours to minutes.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mt-1">
<iconify-icon icon="lucide:file-spreadsheet" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-emerald-50 font-bold text-lg">One Excel File</h4>
<p className="text-emerald-200/60 text-sm">Complete historical spend, itemized and organized.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full"></div>
<div className="relative bg-[#232e29] border border-emerald-800/60 rounded-3xl p-8 shadow-2xl">
<div className="flex items-center justify-between mb-8 border-b border-emerald-800/50 pb-6">
<div>
<p className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Total Processed Spend</p>
<p className="text-4xl font-playfair font-bold text-white mt-2">$2.4M+</p>
</div>
<div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center text-[#1b2320]">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4 mb-4 text-xs">
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-400"></span> Overage Fees</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Rate Issues</span>
<span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Optimizations</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-emerald-200/80">Overage Fees Flagged</span>
<span className="text-emerald-50 font-medium">$142k</span>
</div>
<div className="w-full bg-emerald-900/30 rounded-full h-2">
<div className="bg-red-400 h-2 rounded-full" style={{width: '35%'}}></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-emerald-200/80">Rate Discrepancies</span>
<span className="text-emerald-50 font-medium">$84k</span>
</div>
<div className="w-full bg-emerald-900/30 rounded-full h-2">
<div className="bg-yellow-400 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
<div className="flex justify-between items-center text-sm pt-2">
<span className="text-emerald-200/80">Service Optimizations</span>
<span className="text-emerald-50 font-medium">$310k</span>
</div>
<div className="w-full bg-emerald-900/30 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#232e29] border-t border-emerald-800/50 py-24" id="pricing">
<div className="max-w-4xl mx-auto px-4 text-center">
<p className="text-xs font-semibold tracking-[0.18em] uppercase text-emerald-500 mb-3">
            PRICING
          </p>
<h2 className="font-playfair text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Simple, transparent pricing
          </h2>
<p className="text-emerald-100/70 text-lg mb-12 max-w-2xl mx-auto">
            Start free. Scale when you're ready.
          </p>
<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">

<div className="flex flex-col bg-[#1b2320] border border-emerald-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-colors">
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Free</h3>
<p className="text-emerald-200/60 text-sm mb-6">Perfect for getting started</p>
<p className="text-4xl font-bold text-emerald-50 mb-6 tracking-tight">$0<span className="text-lg font-normal text-emerald-200/60">/mo</span></p>
<ul className="space-y-3 text-sm text-emerald-200/80 mb-8 flex-1">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  1 property
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  5 invoices/month
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Basic benchmarks
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Excel export
                </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-emerald-700/50 bg-[#232e29] px-6 py-3 text-sm font-medium text-emerald-50 hover:border-emerald-500 hover:bg-emerald-900/30 transition-all">
                Get Started Free
              </button>
</div>

<div className="flex flex-col bg-gradient-to-b from-emerald-900/30 to-[#1b2320] border border-emerald-500/30 rounded-2xl p-8 relative shadow-lg hover:shadow-emerald-900/20 transition-all">
<div className="absolute top-4 right-4 text-[10px] font-semibold bg-emerald-500 text-[#1b2320] px-2 py-0.5 rounded-full uppercase tracking-wider">
                Popular
              </div>
<h3 className="text-lg font-semibold text-emerald-50 mb-2">Pro</h3>
<p className="text-emerald-200/60 text-sm mb-6">For portfolio managers</p>
<p className="text-4xl font-bold text-emerald-50 mb-6 tracking-tight">$49<span className="text-lg font-normal text-emerald-200/60">/mo</span></p>
<ul className="space-y-3 text-sm text-emerald-200/80 mb-8 flex-1">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Unlimited properties
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Unlimited invoices
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Full market benchmarks
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
                  Priority support
                </li>
</ul>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 text-[#1b2320] px-6 py-3 text-sm font-semibold hover:bg-emerald-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all">
                Start Free Trial
              </button>
</div>
</div>
</div>
</section>

<section className="bg-[#1b2320] border-t border-emerald-800/50 py-24 text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="font-playfair text-4xl sm:text-5xl font-medium tracking-tight text-white mb-6">
            Ready to see what you're overpaying?
          </h2>
<p className="text-emerald-100/70 text-lg mb-10 max-w-2xl mx-auto">
            Upload your first invoice today and get a complete analysis in under 60 seconds. No credit card required.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-[#1b2320] px-8 py-4 text-sm font-semibold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all w-full sm:w-auto justify-center">
<span>Start Free Analysis</span>
<iconify-icon height="16" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-[#232e29] px-8 py-4 text-sm font-medium text-emerald-50 hover:border-emerald-500 transition-colors w-full sm:w-auto justify-center">
<span>Contact Sales</span>
</button>
</div>
<p className="mt-6 text-xs text-emerald-200/40">
            Secure bank-level encryption • SOC 2 Compliant • No commitment
          </p>
</div>
</section>
</main>

<footer className="bg-[#0f1412] border-t border-emerald-900/50 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">

<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-4">

<div className="w-8 h-8 rounded-lg bg-[#0a0f0d] border border-emerald-500/20 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
<svg className="z-10" fill="none" height="20" viewbox="0 0 100 100" width="20" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="circuit-grad-sm" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#34d399"></stop>
<stop offset="100%" stop-color="#22d3ee"></stop>
</lineargradient>
</defs>
<path d="M28 32L34 88C34.5 92 36 94 40 94H60C64 94 65.5 92 66 88L72 32H28Z" fill="#171717" stroke="#374151" strokeWidth="4"></path>
<path d="M22 24H78C80 24 81 25 81 27C81 29 80 30 78 30H22C20 30 19 29 19 27C19 25 20 24 22 24Z" fill="#1f2937" stroke="#374151" strokeWidth="4"></path>
<path d="M42 18H58L60 24H40L42 18Z" fill="#1f2937" stroke="#374151" strokeWidth="4"></path>
<g stroke="url(#circuit-grad-sm)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
<path d="M38 40V60L44 66V80"></path>
<path d="M50 35V65L58 73V85"></path>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="font-sans font-bold text-lg text-white leading-none uppercase tracking-wide">WasteWise</span>
<span className="text-[9px] uppercase tracking-[0.2em] text-cyan-400/80 font-medium mt-0.5">by THE TRASH HUB</span>
</div>
</div>
<p className="text-sm text-emerald-200/60 max-w-sm mb-4">
              AI-powered waste management intelligence for property managers and asset owners. Benchmark, optimize, and save.
            </p>
<a className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors" href="mailto:trashman@thetrashhub.com">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="16"></iconify-icon>
              trashman@thetrashhub.com
            </a>
</div>

<div>
<h4 className="text-sm font-semibold text-emerald-50 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-emerald-200/60">
<li><a className="hover:text-emerald-50 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-emerald-50 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-emerald-50 transition-colors" href="#for-owners">For Asset Owners</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-emerald-50 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-emerald-200/60">
<li><a className="hover:text-emerald-50 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-50 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-50 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-emerald-900/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-emerald-200/30">
            © <span id="year">2025</span> WasteWise by THE Trash Hub. All rights reserved.
          </p>
<div className="flex items-center gap-4">
<a className="text-emerald-200/40 hover:text-emerald-400 transition-colors" href="https://linkedin.com">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-emerald-200/40 hover:text-emerald-400 transition-colors" href="https://twitter.com">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
