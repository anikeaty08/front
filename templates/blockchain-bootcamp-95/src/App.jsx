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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg">
<iconify-icon icon="lucide:blocks" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">CHAINMASTERS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#bootcamps">Bootcamps</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#projects">Live Projects</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#showcase">Showcase</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#categories">Categories</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/5" href="#">
                    Apply Now
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply filter"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-indigo-50 rounded-full blur-3xl mix-blend-multiply filter"></div>
</div>
<div className="relative max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                New cohort starts October 15th
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Master the Blockchain<br/>
<span className="text-slate-400">with Industry Giants.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Live, expert-led education designed to propel your career in Web3. Choose your path by role, project, or technology.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-slate-900 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
                    Explore Bootcamps
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200">
                    Find your Career Path
                </button>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Curriculum powered by teams from</p>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter text-slate-800">COINBASE</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">POLYGON</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">CONSENSYS</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">CHAINLINK</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">AAVE</span>
<span className="text-lg font-bold tracking-tighter text-slate-800">LEDGER</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="bootcamps">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-blue-600" icon="lucide:graduation-cap" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-wide text-blue-600 uppercase">Intensive Learning</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Signature Bootcamps</h2>
<p className="text-slate-500 text-lg max-w-2xl">Cohort-based learning programs ranging from 6 to 12 weeks. Master a specific discipline with live mentorship.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-1.5 w-full bg-blue-500"></div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                Product
                            </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Web3 Product Management</h3>
<p className="text-sm text-slate-500 mb-6 flex-1">
                            Understand the crypto ecosystem, tokenomics, and how to build user-centric Web3 products.
                        </p>
<div className="mb-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
<img alt="Instructor" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Run by <span className="font-bold tracking-tight">COINBASE</span></p>
<p className="text-xs text-slate-400">Sarah Jenks, Lead PM</p>
</div>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="14"></iconify-icon>
<span>8 Weeks, Part-time</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                            View Syllabus
                        </button>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-1.5 w-full bg-indigo-500"></div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                Finance
                            </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">DeFi Markets Specialist</h3>
<p className="text-sm text-slate-500 mb-6 flex-1">
                            Master liquidity pools, yield farming strategies, and AMM mechanics directly from the source.
                        </p>
<div className="mb-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
<img alt="Instructor" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Annie"/>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Run by <span className="font-bold tracking-tight">UNISWAP</span></p>
<p className="text-xs text-slate-400">Hayden Z., Founder</p>
</div>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="14"></iconify-icon>
<span>6 Weeks, Part-time</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                            View Syllabus
                        </button>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden">
<div className="h-1.5 w-full bg-emerald-500"></div>
<div className="p-8 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="lucide:terminal-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                Engineering
                            </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Solidity &amp; EVM Engineering</h3>
<p className="text-sm text-slate-500 mb-6 flex-1">
                            Architect secure smart contracts. Audit standards, gas optimization, and cross-chain bridging.
                        </p>
<div className="mb-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 overflow-hidden">
<img alt="Instructor" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Robert"/>
</div>
<div>
<p className="text-xs font-medium text-slate-900">Run by <span className="font-bold tracking-tight">CONSENSYS</span></p>
<p className="text-xs text-slate-400">Dev Relations Team</p>
</div>
</div>
</div>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-2 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:calendar" width="14"></iconify-icon>
<span>10 Weeks, Intensive</span>
</div>
</div>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-colors">
                            View Syllabus
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="careers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-purple-600" icon="lucide:briefcase" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-wide text-purple-600 uppercase">Role Pathways</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Browse by Career</h2>
<p className="text-slate-500 mt-2">Curated curriculums tailored for specific industry roles.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:ring-1 hover:ring-purple-500 transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Smart Contract Dev</h3>
<p className="text-xs text-slate-500 mb-4">Solidity, Rust, Security Auditing</p>
<div className="mt-auto flex items-center text-xs font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                        See 4 Courses <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:ring-1 hover:ring-purple-500 transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:pie-chart" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">DeFi Analyst</h3>
<p className="text-xs text-slate-500 mb-4">Tokenomics, Risk Analysis, On-chain Data</p>
<div className="mt-auto flex items-center text-xs font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                        See 3 Courses <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:ring-1 hover:ring-purple-500 transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">NFT &amp; Metaverse Creator</h3>
<p className="text-xs text-slate-500 mb-4">Creative Coding, IP Rights, Community</p>
<div className="mt-auto flex items-center text-xs font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                        See 5 Courses <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>

<a className="group flex flex-col p-6 bg-white rounded-xl border border-slate-200 hover:border-purple-500 hover:ring-1 hover:ring-purple-500 transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="lucide:building-2" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-1">Web3 Founder</h3>
<p className="text-xs text-slate-500 mb-4">Governance, Fundraising, Legal</p>
<div className="mt-auto flex items-center text-xs font-medium text-purple-600 group-hover:translate-x-1 transition-transform">
                        See 2 Courses <iconify-icon className="ml-1" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-orange-600" icon="lucide:hammer" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-wide text-orange-600 uppercase">Live Sprints</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Build with Protocol Teams</h2>
<p className="text-slate-500 mt-2">Join live, guided build-alongs run directly by project engineers.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative block h-full bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="relative aspect-video w-full bg-slate-50 rounded-t-2xl border-b border-slate-100 flex items-center justify-center overflow-hidden">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 text-xs font-semibold px-2 py-1 rounded shadow-sm text-slate-600 z-10 flex items-center gap-1">
<iconify-icon icon="lucide:calendar-clock" width="12"></iconify-icon>
                            Oct 26, 4:00 PM EST
                        </div>
<div className="space-y-2 opacity-50 scale-90 group-hover:scale-100 transition-transform duration-500">
<div className="w-48 h-2 bg-slate-300 rounded-full"></div>
<div className="w-32 h-2 bg-slate-300 rounded-full"></div>
<div className="w-40 h-8 bg-slate-200 rounded mt-4"></div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded">Advanced</span>
<span className="text-xs text-slate-400 font-medium">UNISWAP LABS</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Build a V4 Hook</h3>
<p className="text-sm text-slate-500 mb-5">Create a custom liquidity pool hook with limit order functionality live.</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Dan"/>
<div>
<p className="text-xs font-semibold text-slate-900">Dan Robinson</p>
<p className="text-xs text-slate-400">Head of Research</p>
</div>
</div>
</div>
</div>

<div className="group relative block h-full bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="relative aspect-video w-full bg-slate-50 rounded-t-2xl border-b border-slate-100 flex items-center justify-center overflow-hidden">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 text-xs font-semibold px-2 py-1 rounded shadow-sm text-slate-600 z-10 flex items-center gap-1">
<iconify-icon icon="lucide:calendar-clock" width="12"></iconify-icon>
                            Oct 28, 1:00 PM EST
                        </div>
<div className="grid grid-cols-3 gap-2 opacity-50 scale-90 group-hover:scale-100 transition-transform duration-500">
<div className="w-12 h-16 bg-slate-300 rounded"></div>
<div className="w-12 h-16 bg-slate-300 rounded"></div>
<div className="w-12 h-16 bg-slate-300 rounded"></div>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">Intermediate</span>
<span className="text-xs text-slate-400 font-medium">OPENSEA</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Seaport Integration</h3>
<p className="text-sm text-slate-500 mb-5">Implement efficient NFT trading features using the Seaport protocol.</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"/>
<div>
<p className="text-xs font-semibold text-slate-900">Elena S.</p>
<p className="text-xs text-slate-400">Senior Solidity Eng</p>
</div>
</div>
</div>
</div>

<div className="group relative block h-full bg-white border border-slate-200 rounded-2xl hover:border-slate-300 hover:shadow-lg transition-all">
<div className="relative aspect-video w-full bg-slate-50 rounded-t-2xl border-b border-slate-100 flex items-center justify-center overflow-hidden">
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur border border-slate-200 text-xs font-semibold px-2 py-1 rounded shadow-sm text-slate-600 z-10 flex items-center gap-1">
<iconify-icon icon="lucide:calendar-clock" width="12"></iconify-icon>
                            Nov 02, 6:00 PM EST
                        </div>
<div className="w-16 h-16 rounded-full border-4 border-slate-300 opacity-50 scale-90 group-hover:scale-100 transition-transform duration-500"></div>
</div>
<div className="p-6">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">Intermediate</span>
<span className="text-xs text-slate-400 font-medium">OPTIMISM</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Launch an OP Stack Chain</h3>
<p className="text-sm text-slate-500 mb-5">Spin up your own L2 rollup using the OP Stack configuration.</p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-100">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-slate-100 bg-slate-50" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ben"/>
<div>
<p className="text-xs font-semibold text-slate-900">Ben Jones</p>
<p className="text-xs text-slate-400">Director, Foundation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="showcase">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
<div>
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-pink-600" icon="lucide:rocket" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-wide text-pink-600 uppercase">Community Hub</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Project Showcase</h2>
<p className="text-slate-500 mt-2">Discover projects built on L1/L2 chains by our alumni.</p>
</div>
<div className="flex gap-3 mt-4 md:mt-0">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 transition-colors">
<iconify-icon icon="lucide:filter" width="16"></iconify-icon> Filter
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-lg text-sm font-medium hover:bg-pink-700 shadow-sm transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon> Submit Project
                    </button>
</div>
</div>

<div className="space-y-4">

<div className="flex gap-6 border-b border-slate-200 mb-6 pb-1">
<button className="pb-3 border-b-2 border-pink-600 text-sm font-medium text-slate-900">Trending</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-900">Newest</button>
<button className="pb-3 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-900">Launchpad</button>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="flex flex-col items-center justify-center min-w-[60px] h-[60px] border border-slate-100 rounded-lg bg-slate-50 text-slate-600 hover:text-pink-600 hover:border-pink-200 cursor-pointer transition-colors group/vote">
<iconify-icon className="group-hover/vote:scale-125 transition-transform" icon="lucide:chevron-up" width="20"></iconify-icon>
<span className="text-sm font-bold">428</span>
</div>
<div className="w-16 h-16 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-inner">
<span className="font-bold text-xl tracking-tighter">Dr.</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900 truncate">DripDrop Protocol</h3>
<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 uppercase tracking-wide">
                                Arbitrum
                            </span>
</div>
<p className="text-sm text-slate-500 truncate pr-4">Automated DCA strategies for Uniswap V3 positions with tax harvesting.</p>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:message-circle" width="12"></iconify-icon> 24 comments
                            </div>
<span className="text-xs text-slate-300">|</span>
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> Updated 2h ago
                            </div>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#" title="Read Documentation">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-400 hover:border-blue-200 hover:bg-blue-50 transition-colors" href="#" title="X Feed">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                            Visit
                        </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="flex flex-col items-center justify-center min-w-[60px] h-[60px] border border-slate-100 rounded-lg bg-slate-50 text-slate-600 hover:text-pink-600 hover:border-pink-200 cursor-pointer transition-colors group/vote">
<iconify-icon className="group-hover/vote:scale-125 transition-transform" icon="lucide:chevron-up" width="20"></iconify-icon>
<span className="text-sm font-bold">312</span>
</div>
<div className="w-16 h-16 rounded-xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-inner">
<iconify-icon icon="lucide:sprout" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900 truncate">EcoStake</h3>
<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 uppercase tracking-wide">
                                Base
                            </span>
<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 uppercase tracking-wide">
                                DeFi
                            </span>
</div>
<p className="text-sm text-slate-500 truncate pr-4">Carbon credit offset marketplace built on Base L2 using zero-knowledge proofs.</p>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:message-circle" width="12"></iconify-icon> 18 comments
                            </div>
<span className="text-xs text-slate-300">|</span>
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> Updated 5h ago
                            </div>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#" title="Read Documentation">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-400 hover:border-blue-200 hover:bg-blue-50 transition-colors" href="#" title="X Feed">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                            Visit
                        </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="flex flex-col items-center justify-center min-w-[60px] h-[60px] border border-slate-100 rounded-lg bg-slate-50 text-slate-600 hover:text-pink-600 hover:border-pink-200 cursor-pointer transition-colors group/vote">
<iconify-icon className="group-hover/vote:scale-125 transition-transform" icon="lucide:chevron-up" width="20"></iconify-icon>
<span className="text-sm font-bold">189</span>
</div>
<div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0 shadow-inner">
<iconify-icon icon="lucide:shield-check" width="32"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-semibold text-slate-900 truncate">VaultGuard</h3>
<span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-500 border border-slate-200 uppercase tracking-wide">
                                Ethereum
                            </span>
</div>
<p className="text-sm text-slate-500 truncate pr-4">Multi-sig coordination tool for DAOs with built-in proposal simulation.</p>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:message-circle" width="12"></iconify-icon> 8 comments
                            </div>
<span className="text-xs text-slate-300">|</span>
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="lucide:clock" width="12"></iconify-icon> Updated 1d ago
                            </div>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0">
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors" href="#" title="Read Documentation">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 w-10 h-10 rounded-lg border border-slate-200 text-slate-500 hover:text-blue-400 hover:border-blue-200 hover:bg-blue-50 transition-colors" href="#" title="X Feed">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                            Visit
                        </a>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">View all 142 projects</button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="categories">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 mb-3">
<iconify-icon className="text-slate-600" icon="lucide:layout-grid" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-wide text-slate-600 uppercase">Topics</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Explore by Category</h2>
<p className="text-slate-500 mt-2">Deep dive into specific areas of the blockchain stack.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:coins" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">DeFi</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:image" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">NFTs</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">DAOs</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Security</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Layer 2</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:globe" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Infrastructure</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:eye" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Privacy (ZK)</span>
</a>
<a className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:shadow-sm transition-all" href="#">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="lucide:gamepad-2" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">GameFi</span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Built for the future of finance.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Traditional education can't keep up with the speed of crypto. We partner directly with the protocols defining the industry to provide curriculum that updates in real-time.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-700" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Direct Mentorship</h4>
<p className="text-sm text-slate-500 mt-1">Weekly live sessions with developers and founders from top protocols.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-700" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Proof of Work</h4>
<p className="text-sm text-slate-500 mt-1">Earn on-chain credentials (SBTs) verifiable by employers immediately.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-700" icon="lucide:check" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Global Network</h4>
<p className="text-sm text-slate-500 mt-1">Join a private community of 5,000+ alumni working at Coinbase, Kraken, and more.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-50"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="lucide:award" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Verified Certificate</div>
<div className="text-xs text-slate-400">Issued on Ethereum</div>
</div>
</div>
<iconify-icon className="text-slate-400" icon="lucide:share-2" width="20"></iconify-icon>
</div>
<div className="space-y-4">
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded-full"></div>
<div className="h-32 w-full bg-slate-50 rounded-xl border border-dashed border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                                Certificate Visualization
                            </div>
<div className="flex justify-between items-center pt-4">
<div className="text-xs text-slate-400 font-mono">0x71C...9A23</div>
<div className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-xs font-medium">Valid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Upcoming Live Workshops</h2>
<p className="text-slate-500 mt-2">Join single sessions to get a taste of the bootcamp.</p>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View full calendar
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">

<div className="group bg-white p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-100 rounded-lg text-slate-900 border border-slate-200">
<span className="text-xs font-semibold uppercase text-slate-500">OCT</span>
<span className="text-xl font-bold tracking-tight">24</span>
</div>
<div>
<div className="text-xs font-bold text-blue-600 mb-1 tracking-wide">WEBINAR</div>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">The State of L2 Scaling Solutions</h3>
<p className="text-sm text-slate-500 mt-1">Hosted by <span className="font-semibold text-slate-700">Polygon Labs</span></p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=2"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+400</div>
</div>
<button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 bg-white hover:border-slate-300 transition-colors">Register</button>
</div>
</div>

<div className="group bg-white p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-100 rounded-lg text-slate-900 border border-slate-200">
<span className="text-xs font-semibold uppercase text-slate-500">OCT</span>
<span className="text-xl font-bold tracking-tight">28</span>
</div>
<div>
<div className="text-xs font-bold text-purple-600 mb-1 tracking-wide">WORKSHOP</div>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-purple-600 transition-colors">Zero Knowledge Proofs 101</h3>
<p className="text-sm text-slate-500 mt-1">Hosted by <span className="font-semibold text-slate-700">StarkWare</span></p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=3"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=4"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+250</div>
</div>
<button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 bg-white hover:border-slate-300 transition-colors">Register</button>
</div>
</div>

<div className="group bg-white p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-slate-100 rounded-lg text-slate-900 border border-slate-200">
<span className="text-xs font-semibold uppercase text-slate-500">NOV</span>
<span className="text-xl font-bold tracking-tight">02</span>
</div>
<div>
<div className="text-xs font-bold text-emerald-600 mb-1 tracking-wide">FIRESIDE CHAT</div>
<h3 className="text-lg font-medium text-slate-900 group-hover:text-emerald-600 transition-colors">Regulation &amp; The Future of Crypto</h3>
<p className="text-sm text-slate-500 mt-1">Hosted by <span className="font-semibold text-slate-700">CoinCenter</span></p>
</div>
</div>
<div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full border-2 border-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=5"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+800</div>
</div>
<button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-600 bg-white hover:border-slate-300 transition-colors">Register</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Ready to break into Web3?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                Join 10,000+ graduates working at the forefront of the digital economy. Applications for the October cohort close soon.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-slate-900 text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-100 transition-colors">
                    Start Application
                </button>
<button className="w-full sm:w-auto bg-slate-800 border border-slate-700 text-white text-sm font-medium px-8 py-3.5 rounded-xl hover:bg-slate-700 transition-colors">
                    Schedule a Call
                </button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center rounded-md">
<iconify-icon icon="lucide:blocks" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">CHAINMASTERS</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        The premier education platform for blockchain technology, smart contracts, and decentralized finance.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Certifications</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Product Manager</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">DeFi Specialist</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Solidity Engineer</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Tokenomics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Partners</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Alumni</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Events</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Glossary</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Help Center</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 ChainMasters Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:github" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
