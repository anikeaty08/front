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



        // Simple tab switching logic for the mockup
        function switchTab(tabId) {
            // Hide all views
            document.getElementById('view-search').classList.add('hidden');
            document.getElementById('view-billing').classList.add('hidden');
            
            // Reset nav styles
            document.getElementById('nav-search').classList.remove('bg-white/5', 'text-zinc-100');
            document.getElementById('nav-search').classList.add('text-zinc-400');
            document.getElementById('nav-billing').classList.remove('bg-white/5', 'text-zinc-100');
            document.getElementById('nav-billing').classList.add('text-zinc-400');

            // Show selected view and update nav style
            document.getElementById('view-' + tabId).classList.remove('hidden');
            document.getElementById('nav-' + tabId).classList.add('bg-white/5', 'text-zinc-100');
            document.getElementById('nav-' + tabId).classList.remove('text-zinc-400');
        }

        // Pricing toggle logic
        function togglePricing() {
            const isYearly = document.getElementById('pricing-toggle').checked;
            const priceAmount = document.getElementById('price-amount');
            const pricePeriod = document.getElementById('price-period');
            const labelMonthly = document.getElementById('label-monthly');
            const labelYearly = document.getElementById('label-yearly');

            if (isYearly) {
                priceAmount.innerText = '$100';
                pricePeriod.innerText = '/yr';
                labelMonthly.classList.replace('text-white', 'text-zinc-400');
                labelYearly.classList.replace('text-zinc-400', 'text-white');
            } else {
                priceAmount.innerText = '$10';
                pricePeriod.innerText = '/mo';
                labelMonthly.classList.replace('text-zinc-400', 'text-white');
                labelYearly.classList.replace('text-white', 'text-zinc-400');
            }
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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

<aside className="w-64 border-r border-white/5 bg-[#09090b]/80 backdrop-blur-xl flex-col hidden md:flex z-10">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<span className="text-white text-lg tracking-tighter font-medium flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:box-minimalistic-linear"></iconify-icon>
                Repplica
            </span>
</div>
<nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
<div className="px-3 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-widest">Platform</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-zinc-100 transition-colors text-sm text-left" id="nav-search" onclick="switchTab('search')">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
                AI Lead Finder
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors text-sm text-left">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Saved Prospects
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors text-sm text-left">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
                Campaigns
            </button>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-zinc-500 uppercase tracking-widest">Account</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors text-sm text-left" id="nav-billing" onclick="switchTab('billing')">
<iconify-icon className="text-lg" icon="solar:card-2-linear"></iconify-icon>
                Billing &amp; Plans
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-zinc-100 transition-colors text-sm text-left">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                Settings
            </button>
</nav>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">
                    JD
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Freelance Plan</p>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 z-10">

<header className="md:hidden h-16 border-b border-white/5 flex items-center justify-between px-4 bg-[#09090b]">
<span className="text-white text-lg tracking-tighter font-medium">Repplica</span>
<button className="text-zinc-400"><iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon></button>
</header>

<div className="flex-1 overflow-y-auto block" id="view-search">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
<div className="max-w-2xl mb-10">
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Find your next client.</h1>
<p className="text-zinc-400 text-sm">Describe your ideal niche. Our AI will scan the web to find businesses, evaluate their current web presence, and extract owner contact details.</p>
</div>

<div className="relative group mb-12">
<div className="absolute top-0 -inset-y-2 -inset-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative flex items-center bg-[#09090b] border border-white/10 rounded-xl p-2 shadow-2xl focus-within:border-indigo-500/50 transition-colors">
<div className="pl-3 pr-2 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
</div>
<input className="block w-full bg-transparent border-0 text-white placeholder-zinc-600 focus:ring-0 text-sm py-2 px-2" placeholder="e.g. Roofing businesses in Texas with outdated websites..." type="text"/>
<button className="ml-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 whitespace-nowrap">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                            Generate Leads
                        </button>
</div>
</div>

<div className="border border-white/5 rounded-xl bg-white/[0.02] backdrop-blur-sm overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
<h2 className="text-sm font-medium text-white">Recent AI Discoveries</h2>
<span className="text-xs text-zinc-500 flex items-center gap-1"><iconify-icon icon="solar:info-circle-linear"></iconify-icon> Real-time web extraction</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="text-xs text-zinc-500 border-b border-white/5 bg-white/[0.01]">
<tr>
<th className="px-6 py-3 font-normal">Business Details</th>
<th className="px-6 py-3 font-normal">Decision Maker</th>
<th className="px-6 py-3 font-normal">Web Status</th>
<th className="px-6 py-3 font-normal text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Apex Roofing Co.</p>
<a className="text-xs text-indigo-400 hover:underline" href="#">apexroofingtx.com</a>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-zinc-300">Michael T.</p>
<p className="text-xs text-zinc-500">Owner &amp; Founder</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Not Mobile Responsive
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors">Reveal Contact</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">CloudSync SaaS</p>
<a className="text-xs text-indigo-400 hover:underline" href="#">cloudsync-app.io</a>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-zinc-300">Sarah Jenkins</p>
<p className="text-xs text-zinc-500">CEO</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> High Bounce Rate
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="px-3 py-1.5 text-xs font-medium border border-white/10 text-zinc-300 rounded-md hover:bg-white/5 transition-colors">m***@cloudsync...</button>
</td>
</tr>

<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-medium">Prime Real Estate</p>
<a className="text-xs text-indigo-400 hover:underline" href="#">prime-realty-group.net</a>
</div>
</div>
</td>
<td className="px-6 py-4">
<p className="text-zinc-300">David Chen</p>
<p className="text-xs text-zinc-500">Principal Broker</p>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Needs Funnel
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white rounded-md hover:bg-white/20 transition-colors">Reveal Contact</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto hidden" id="view-billing">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
<div className="text-center max-w-2xl mx-auto mb-12">
<h1 className="text-3xl font-medium text-white tracking-tight mb-4">Scale your outreach.</h1>
<p className="text-zinc-400 text-sm">Upgrade to unlock unlimited AI searches, verified emails, and automated pitch generation.</p>
</div>

<div className="flex items-center justify-center gap-4 mb-10">
<span className="text-sm font-medium" id="label-monthly">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="pricing-toggle" onchange="togglePricing()" type="checkbox"/>
<div className="w-10 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white"></div>
</label>
<span className="text-sm font-medium text-white flex items-center gap-2" id="label-yearly">
                        Yearly 
                        <span className="text-[10px] uppercase tracking-wider font-medium bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">Save $20</span>
</span>
</div>

<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

<div className="border border-white/5 bg-white/[0.02] rounded-2xl p-8 flex flex-col">
<h3 className="text-lg font-medium text-white mb-2">Starter</h3>
<p className="text-zinc-400 text-sm mb-6 h-10">Perfect for exploring the platform and finding your first few leads.</p>
<div className="mb-6">
<span className="text-4xl font-medium text-white">$0</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-zinc-300">
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> 10 AI Searches per month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Basic website analysis</li>
<li className="flex items-center gap-3"><iconify-icon className="text-zinc-500" icon="solar:check-circle-linear"></iconify-icon> Save up to 50 prospects</li>
</ul>
<button className="w-full py-2.5 px-4 rounded-lg bg-white/5 text-white font-medium text-sm border border-white/5 hover:bg-white/10 transition-colors">Current Plan</button>
</div>

<div className="border border-indigo-500/30 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-medium uppercase tracking-wider px-3 py-1 rounded-bl-lg">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2 text-indigo-100">Pro Freelancer</h3>
<p className="text-zinc-400 text-sm mb-6 h-10">Unlimited power to fill your pipeline with high-quality clients.</p>
<div className="mb-6 flex items-end gap-1">
<span className="text-4xl font-medium text-white" id="price-amount">$100</span>
<span className="text-zinc-500 text-sm mb-1" id="price-period">/yr</span>
</div>
<ul className="space-y-3 mb-8 flex-1 text-sm text-zinc-200">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited AI Searches</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Full owner contact details</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Deep website audit reports</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Export to CSV / CRM</li>
</ul>
<button className="w-full py-2.5 px-4 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(99,102,241,0.3)]">Upgrade to Pro</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
