import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Navigation Logic
        function switchTab(tabId) {
            // Update Sidebar State
            document.querySelectorAll('.sidebar-item').forEach(el => {
                el.classList.remove('active', 'bg-slate-100', 'text-slate-900', 'font-medium');
                el.classList.add('text-slate-600');
                // Reset Icon Colors
                const icon = el.querySelector('i');
                if(icon) icon.classList.replace('text-indigo-600', 'text-slate-400');
            });

            const activeBtn = document.getElementById('nav-' + tabId);
            activeBtn.classList.add('active');
            activeBtn.classList.replace('text-slate-600', 'text-slate-900');
            // Highlight Icon
            const activeIcon = activeBtn.querySelector('i');
            if(activeIcon) activeIcon.classList.replace('text-slate-400', 'text-indigo-600');

            // Show Content
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
            });
            const activeView = document.getElementById('view-' + tabId);
            activeView.classList.remove('hidden');
        }

        // Add simple fade animation CSS
        const style = document.createElement('style');
        style.innerHTML = `
            .animate-fade {
                animation: fadeIn 0.3s ease-in-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-slate-200 bg-white flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div>
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="bg-indigo-600 rounded-md p-1.5 text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-medium tracking-tight text-lg">PartnerFlow</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Growth</p>
<button className="sidebar-item active w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-affiliate" onclick="switchTab('affiliate')">
<i className="w-5 h-5 text-slate-400" data-lucide="link"></i>
<span>Affiliate Links</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-marketing" onclick="switchTab('marketing')">
<i className="w-5 h-5 text-slate-400" data-lucide="image"></i>
<span>Marketing Kit</span>
</button>
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mt-6 mb-2">Lead Management</p>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-submit-lead" onclick="switchTab('submit-lead')">
<i className="w-5 h-5 text-slate-400" data-lucide="user-plus"></i>
<span>Submit Lead</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-submit-sale" onclick="switchTab('submit-sale')">
<i className="w-5 h-5 text-slate-400" data-lucide="check-circle-2"></i>
<span>Submit Sale</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-leads" onclick="switchTab('leads')">
<i className="w-5 h-5 text-slate-400" data-lucide="users"></i>
<span>Leads Table</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-deals" onclick="switchTab('deals')">
<i className="w-5 h-5 text-slate-400" data-lucide="trello"></i>
<span>Deals Pipeline</span>
</button>
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mt-6 mb-2">Financials</p>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-giftcards" onclick="switchTab('giftcards')">
<i className="w-5 h-5 text-slate-400" data-lucide="gift"></i>
<span>Gift Cards</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-earnings" onclick="switchTab('earnings')">
<i className="w-5 h-5 text-slate-400" data-lucide="wallet"></i>
<span>Earnings</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-payouts" onclick="switchTab('payouts')">
<i className="w-5 h-5 text-slate-400" data-lucide="banknote"></i>
<span>Payouts</span>
</button>
<button className="sidebar-item w-full flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-slate-600" id="nav-invoices" onclick="switchTab('invoices')">
<i className="w-5 h-5 text-slate-400" data-lucide="file-text"></i>
<span>Invoices</span>
</button>
</nav>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-sm">JS</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">John Smith</span>
<span className="text-xs text-slate-400">Affiliate Partner</span>
</div>
</div>
</div>
</aside>

<div className="md:hidden fixed top-0 w-full bg-white border-b border-slate-200 z-50 px-4 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="bg-indigo-600 rounded-md p-1.5 text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="font-medium tracking-tight">PartnerFlow</span>
</div>
<button className="text-slate-500">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<main className="flex-1 overflow-y-auto bg-slate-50/50 pt-16 md:pt-0">
<div className="max-w-6xl mx-auto px-6 py-10" id="content-area">

<div className="view-section block animate-fade" id="view-affiliate">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Affiliate Overview</h1>
<p className="text-lg text-slate-500">Manage your links and track performance.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-2 text-slate-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="mouse-pointer-2"></i>
<span>Total Clicks</span>
</div>
<div className="text-3xl text-slate-900 font-medium tracking-tight">1,248</div>
<div className="text-sm text-emerald-600 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +12% this week
                        </div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-2 text-slate-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="users"></i>
<span>Signups</span>
</div>
<div className="text-3xl text-slate-900 font-medium tracking-tight">86</div>
<div className="text-sm text-emerald-600 mt-2 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> +5% this week
                        </div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-3 mb-2 text-slate-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="percent"></i>
<span>Conversion Rate</span>
</div>
<div className="text-3xl text-slate-900 font-medium tracking-tight">6.8%</div>
<div className="text-sm text-slate-400 mt-2">Target: 5.0%</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 max-w-2xl">
<h3 className="text-lg font-medium text-slate-900 mb-1">Cobranded Affiliate Link</h3>
<p className="text-slate-500 mb-6 text-sm">Share this link to track referrals and earn commissions.</p>
<div className="flex gap-3">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400" data-lucide="link"></i>
</div>
<input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-900/5 sm:text-sm" readonly="" type="text" value="https://partnerflow.com/ref/johnsmith-agency"/>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="copy"></i>
                            Copy
                        </button>
</div>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-marketing">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Marketing Kit</h1>
<p className="text-lg text-slate-500">Download banners, email templates, and logos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<i className="w-12 h-12 text-slate-300" data-lucide="image"></i>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center"></div>
</div>
<div className="p-5">
<h3 className="font-medium text-slate-900">Social Media Banner Pack</h3>
<p className="text-sm text-slate-500 mt-1 mb-4">Instagram, LinkedIn &amp; Twitter sizes</p>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Download ZIP</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<i className="w-12 h-12 text-slate-300" data-lucide="file-text"></i>
</div>
<div className="p-5">
<h3 className="font-medium text-slate-900">Email Templates</h3>
<p className="text-sm text-slate-500 mt-1 mb-4">Cold outreach &amp; follow-up scripts</p>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">View Docs</button>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<i className="w-12 h-12 text-slate-300" data-lucide="box"></i>
</div>
<div className="p-5">
<h3 className="font-medium text-slate-900">Brand Logos</h3>
<p className="text-sm text-slate-500 mt-1 mb-4">SVG &amp; PNG formats (Light/Dark)</p>
<button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">Download Assets</button>
</div>
</div>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-submit-lead">
<div className="max-w-2xl mx-auto">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Submit a Lead</h1>
<p className="text-lg text-slate-500">Manually register a potential client.</p>
</div>
<form className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-6">
<div className="grid grid-cols-1 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Client Name</label>
<input className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="text"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
<input className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
<input className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Company Name</label>
<input className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Notes (Optional)</label>
<textarea className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" rows="3"></textarea>
</div>
</div>
<div className="pt-4 border-t border-slate-100 flex justify-end">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm" type="button">
                                Submit Lead
                            </button>
</div>
</form>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-submit-sale">
<div className="max-w-2xl mx-auto">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Submit Closed Sale</h1>
<p className="text-lg text-slate-500">Upload payment proof for converted leads.</p>
</div>
<form className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Select Lead</label>
<div className="relative">
<select className="block w-full px-4 py-3 border border-slate-200 rounded-lg appearance-none bg-white focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all">
<option>TechCorp Solutions - Pending</option>
<option>Design Studio X - Negotiation</option>
</select>
<i className="absolute right-3 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Transaction Amount (Excl. GST)</label>
<div className="relative">
<span className="absolute left-4 top-3 text-slate-500">$</span>
<input className="block w-full pl-8 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all" placeholder="0.00" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Payment Proof (Screenshot)</label>
<div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-200 border-dashed rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
<div className="space-y-1 text-center">
<i className="mx-auto h-10 w-10 text-slate-400" data-lucide="upload-cloud"></i>
<div className="flex text-sm text-slate-600 justify-center">
<label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500" htmlFor="file-upload">
<span>Upload a file</span>
<input className="sr-only" id="file-upload" name="file-upload" type="file"/>
</label>
<p className="pl-1">or drag and drop</p>
</div>
<p className="text-xs text-slate-500">PNG, JPG, PDF up to 10MB</p>
</div>
</div>
</div>
<div className="pt-4 border-t border-slate-100 flex justify-end">
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm" type="button">
                                Verify &amp; Submit
                            </button>
</div>
</form>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-leads">
<div className="mb-6 flex justify-between items-center">
<div>
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Leads CRM</h1>
<p className="text-lg text-slate-500">Track status, chats, and internal comments.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg bg-white text-sm font-medium hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="filter"></i> Filter
                        </button>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-4 font-medium text-slate-500">Client</th>
<th className="px-6 py-4 font-medium text-slate-500">Stage</th>
<th className="px-6 py-4 font-medium text-slate-500">Conversion Est.</th>
<th className="px-6 py-4 font-medium text-slate-500">Timeline</th>
<th className="px-6 py-4 font-medium text-slate-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Acme Corp</div>
<div className="text-xs text-slate-500">Added 2 days ago</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Discovery
                                    </span>
</td>
<td className="px-6 py-4 text-slate-600">60%</td>
<td className="px-6 py-4 text-slate-600">Oct 24, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 mx-1"><i className="w-5 h-5" data-lucide="message-square"></i></button>
<button className="text-slate-400 hover:text-slate-600 mx-1"><i className="w-5 h-5" data-lucide="eye"></i></button>
</td>
</tr>

<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Starlight Media</div>
<div className="text-xs text-slate-500">Added 5 days ago</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Negotiation
                                    </span>
</td>
<td className="px-6 py-4 text-slate-600">85%</td>
<td className="px-6 py-4 text-slate-600">Oct 20, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-indigo-600 mx-1"><i className="w-5 h-5" data-lucide="message-square"></i></button>
<button className="text-slate-400 hover:text-slate-600 mx-1"><i className="w-5 h-5" data-lucide="eye"></i></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-deals">
<div className="mb-6">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Deals Pipeline</h1>
<p className="text-lg text-slate-500">Read-only view of deal progression and meetings.</p>
</div>
<div className="space-y-4">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-medium text-slate-900">Project Alpha Upgrade</h3>
<span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">Closed Won</span>
</div>
<p className="text-slate-500 text-sm">Client: TechFlow Inc • Value: $12,000</p>
</div>
<div className="flex items-center gap-8 w-full md:w-auto">
<div className="flex flex-col items-center">
<span className="text-xs text-slate-400 uppercase font-medium">Meeting</span>
<span className="text-sm font-medium text-slate-700">Done</span>
</div>
<div className="h-px w-12 bg-slate-200"></div>
<div className="flex flex-col items-center">
<span className="text-xs text-slate-400 uppercase font-medium">Proposal</span>
<span className="text-sm font-medium text-slate-700">Sent</span>
</div>
<div className="h-px w-12 bg-slate-200"></div>
<div className="flex flex-col items-center">
<span className="text-xs text-slate-400 uppercase font-medium">Contract</span>
<span className="text-sm font-medium text-slate-700">Signed</span>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex-1">
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-medium text-slate-900">Q4 Marketing Retainer</h3>
<span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">In Progress</span>
</div>
<p className="text-slate-500 text-sm">Client: FreshMarket • Value: $4,500/mo</p>
</div>
<div className="flex items-center gap-8 w-full md:w-auto opacity-70">
<div className="flex flex-col items-center">
<span className="text-xs text-slate-400 uppercase font-medium">Meeting</span>
<span className="text-sm font-medium text-slate-700">Done</span>
</div>
<div className="h-px w-12 bg-indigo-500"></div>
<div className="flex flex-col items-center">
<span className="text-xs text-indigo-600 uppercase font-medium">Proposal</span>
<span className="text-sm font-medium text-indigo-600">Reviewing</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-giftcards">
<div className="mb-8 flex justify-between items-end">
<div>
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Subscription Gift Cards</h1>
<p className="text-lg text-slate-500">Purchase codes for your clients.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="plus"></i> Buy New Card
                    </button>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-4 font-medium text-slate-500">Code</th>
<th className="px-6 py-4 font-medium text-slate-500">Amount</th>
<th className="px-6 py-4 font-medium text-slate-500">Purchase Date</th>
<th className="px-6 py-4 font-medium text-slate-500">Status</th>
<th className="px-6 py-4 font-medium text-slate-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 font-mono text-slate-700">GIFT-8X29-LM92</td>
<td className="px-6 py-4 font-medium">$50.00</td>
<td className="px-6 py-4 text-slate-500">Oct 12, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Active
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-indigo-600 hover:text-indigo-800 font-medium text-xs">Copy</button>
</td>
</tr>
<tr>
<td className="px-6 py-4 font-mono text-slate-700 line-through text-slate-400">GIFT-9921-PP00</td>
<td className="px-6 py-4 font-medium text-slate-400">$100.00</td>
<td className="px-6 py-4 text-slate-500">Sep 28, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                                        Redeemed
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-slate-400 text-xs">-</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-earnings">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Earnings</h1>
<p className="text-lg text-slate-500">Client transactions and commission breakdown.</p>
</div>
<div className="bg-zinc-900 text-white p-8 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row justify-between items-center">
<div>
<p className="text-zinc-400 text-sm font-medium mb-1">Total Lifetime Earnings</p>
<h2 className="text-4xl font-medium tracking-tight">$12,450.00</h2>
</div>
<div className="mt-4 md:mt-0 text-right">
<p className="text-zinc-400 text-sm font-medium mb-1">Pending Clearance</p>
<h2 className="text-xl font-medium tracking-tight">$850.00</h2>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm">
<div className="px-6 py-4 border-b border-slate-200 font-medium text-slate-900">Transaction History</div>
<div className="divide-y divide-slate-100">

<div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-5 h-5" data-lucide="arrow-down-left"></i>
</div>
<div>
<div className="font-medium text-slate-900">Commission - TechFlow Inc</div>
<div className="text-xs text-slate-500">Ref: INV-2023-001 • Oct 25, 2023</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-emerald-600">+$250.00</div>
<div className="text-xs text-slate-400">Cleared</div>
</div>
</div>

<div className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<div className="font-medium text-slate-900">Commission - Alpha Project</div>
<div className="text-xs text-slate-500">Ref: INV-2023-002 • Oct 28, 2023</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-slate-600">+$600.00</div>
<div className="text-xs text-slate-400">Pending</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-payouts">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Payouts</h1>
<p className="text-lg text-slate-500">Monthly payout cycle and withdrawals.</p>
</div>
<div className="flex flex-col md:flex-row gap-6 mb-8">
<div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="relative z-10">
<div className="text-sm font-medium text-slate-500 mb-2">Next Payout</div>
<div className="text-3xl font-medium text-slate-900 tracking-tight">$850.00</div>
<div className="mt-4 text-sm text-slate-600">Scheduled for <span className="font-semibold">Nov 01, 2023</span></div>
</div>
<i className="absolute right-6 top-6 w-16 h-16 text-slate-50 opacity-50" data-lucide="calendar"></i>
</div>
<div className="flex-1 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="text-sm font-medium text-slate-500 mb-2">Payout Method</div>
<div className="flex items-center gap-3 mt-3">
<div className="w-10 h-6 bg-slate-800 rounded flex items-center justify-center">
<span className="text-[10px] text-white font-bold">BANK</span>
</div>
<span className="text-slate-900 font-medium">•••• 4829</span>
</div>
<button className="mt-4 text-sm text-indigo-600 font-medium hover:underline">Manage methods</button>
</div>
</div>
<h3 className="font-medium text-slate-900 mb-4">Payout History</h3>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-4 font-medium text-slate-500">Date</th>
<th className="px-6 py-4 font-medium text-slate-500">Amount</th>
<th className="px-6 py-4 font-medium text-slate-500">Status</th>
<th className="px-6 py-4 font-medium text-slate-500">Invoice</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-4 text-slate-700">Oct 01, 2023</td>
<td className="px-6 py-4 font-medium">$1,200.00</td>
<td className="px-6 py-4"><span className="text-emerald-600 font-medium">Paid</span></td>
<td className="px-6 py-4"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4" data-lucide="download"></i></button></td>
</tr>
<tr>
<td className="px-6 py-4 text-slate-700">Sep 01, 2023</td>
<td className="px-6 py-4 font-medium">$950.00</td>
<td className="px-6 py-4"><span className="text-emerald-600 font-medium">Paid</span></td>
<td className="px-6 py-4"><button className="text-slate-400 hover:text-slate-600"><i className="w-4 h-4" data-lucide="download"></i></button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-section hidden animate-fade" id="view-invoices">
<div className="mb-8">
<h1 className="text-3xl text-slate-900 font-medium tracking-tight mb-2">Converted Lead Invoices</h1>
<p className="text-lg text-slate-500">Generate GST/Non-GST invoices for your payouts.</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-12 text-center">
<div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-indigo-600" data-lucide="file-plus"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Generate New Invoice</h3>
<p className="text-slate-500 max-w-md mx-auto mb-6">Create a compliant invoice for your converted leads to process your payout.</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm">
                        Start Invoice Generator
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
