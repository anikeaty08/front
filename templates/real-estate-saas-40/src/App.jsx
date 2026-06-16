import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to handle pricing toggle visual state (functional simulation)
        const toggle = document.getElementById('billing-toggle');
        const prices = document.querySelectorAll('.text-4xl');
        
        toggle.addEventListener('change', function() {
            if(this.checked) {
                prices[0].innerText = '$24'; // Starter Annual
                prices[1].innerText = '$64'; // Pro Annual
            } else {
                prices[0].innerText = '$29'; // Starter Monthly
                prices[1].innerText = '$79'; // Pro Monthly
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-semibold tracking-tighter">
                    IG
                </div>
<span className="text-lg font-semibold tracking-tight">ImmoGest</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden sm:block text-slate-500 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#">Start Free Trial</a>
</div>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50 z-0 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-50 z-0"></div>
<div className="z-10 sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium mb-8 border border-indigo-100/50">
<span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
    New: Automated Owner Payout System
  </div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-slate-900 tracking-tight max-w-4xl mr-auto mb-6 ml-auto">
    Manage your entire real estate portfolio in one place.
  </h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-500 max-w-2xl mr-auto mb-10 ml-auto">
    Simplify property management, automate rent tracking, and gain full financial visibility. Built for modern agencies
    and landlords.
  </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-full text-base font-medium shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-all" href="#">
      Start Free Trial
    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full text-base font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
      Request Demo
    </a>
</div>

<div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/60 bg-white shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
<div className="flex items-center px-4 py-3 border-b border-slate-100 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
</div>
<div className="flex h-[400px] md:h-[600px] bg-white">

<div className="hidden md:block w-56 border-r border-slate-100 p-4 space-y-2 bg-slate-50/30">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon> Dashboard
        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 text-sm hover:bg-slate-50 cursor-pointer">
<iconify-icon className="text-lg" icon="solar:buildings-2-linear"></iconify-icon> Properties
        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 text-sm hover:bg-slate-50 cursor-pointer">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Tenants
        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 text-sm hover:bg-slate-50 cursor-pointer">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon> Invoices
        </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 text-sm hover:bg-slate-50 cursor-pointer">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon> Owner Payouts
        </div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden flex flex-col bg-slate-50/10">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Financial Overview</h3>
<div className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 bg-white">This
            Month</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="text-xs text-slate-500 mb-1">Total Revenue</div>
<div className="text-2xl font-semibold tracking-tight">$42,500</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm relative overflow-hidden">
<div className="text-xs text-slate-500 mb-1">Unpaid Rents</div>
<div className="text-2xl font-semibold tracking-tight text-red-600">$3,200</div>
<div className="absolute right-0 bottom-0 w-16 h-16 bg-red-50 rounded-tl-full -mr-4 -mb-4 opacity-50"></div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="text-xs text-slate-500 mb-1">Active Tenants</div>
<div className="text-2xl font-semibold tracking-tight">142</div>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
<div className="text-xs text-slate-500 mb-1">Occupancy</div>
<div className="text-2xl font-semibold tracking-tight text-green-600">96%</div>
</div>
</div>

<div className="flex-1 rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm">
<div className="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<div className="text-sm font-medium text-slate-700">Recent Invoices</div>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-medium">
                  JD</div>
<div>
<div className="font-medium text-slate-900">John Doe</div>
<div className="text-xs text-slate-500">FAC-2023-001</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-slate-900">$1,200</div>
<div className="text-xs text-green-600 flex items-center gap-1 justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Paid
                </div>
</div>
</div>
<div className="flex items-center justify-between text-sm p-2 rounded-lg hover:bg-slate-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-medium">
                  AS</div>
<div>
<div className="font-medium text-slate-900">Alice Smith</div>
<div className="text-xs text-slate-500">FAC-2023-002</div>
</div>
</div>
<div className="text-right">
<div className="font-medium text-slate-900">$950</div>
<div className="text-xs text-red-500 flex items-center gap-1 justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Unpaid
                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Trusted by modern property managers and real estate agencies</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<div className="text-xl font-semibold tracking-tighter">URBAN<span className="font-medium">ESTATE</span></div>
<div className="text-xl font-semibold tracking-tighter">PRIME<span className="font-medium">LIVING</span></div>
<div className="text-xl font-semibold tracking-tighter">NEXUS<span className="font-medium">PROP</span></div>
<div className="text-xl font-semibold tracking-tighter">ELEVATE<span className="font-medium">MGMT</span></div>
<div className="text-xl font-semibold tracking-tighter">CORE<span className="font-medium">REALTY</span></div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Stop managing properties in the dark</h2>
<p className="text-lg text-slate-500">Traditional methods lead to lost revenue, frustrated owners, and endless administrative hours.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-2 text-red-500 font-medium mb-6">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
                            The old way
                        </div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm shrink-0">
<iconify-icon icon="solar:document-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Manual Excel Tracking</h4>
<p className="text-sm text-slate-500">Endless spreadsheets, prone to human error and data loss.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm shrink-0">
<iconify-icon icon="solar:question-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Unpaid Rent Confusion</h4>
<p className="text-sm text-slate-500">Difficulty tracking exactly who has paid and who is behind.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm shrink-0">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Time Wasted on Admin</h4>
<p className="text-sm text-slate-500">Hours spent generating manual invoices and calculating payouts.</p>
</div>
</li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-indigo-50/50 border border-indigo-100/50 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -mr-8 -mt-8 blur-2xl"></div>
<div className="flex items-center gap-2 text-indigo-600 font-medium mb-6 relative z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            With ImmoGest
                        </div>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
<iconify-icon icon="solar:database-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Centralized System</h4>
<p className="text-sm text-slate-500">Everything organized in one secure, cloud-based platform.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Clear Financial Visibility</h4>
<p className="text-sm text-slate-500">Instantly see paid rents, outstanding balances, and owner dues.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 shadow-sm shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Automated Workflows</h4>
<p className="text-sm text-slate-500">Generate invoices automatically and simplify owner payouts.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything you need to scale</h2>
<p className="text-lg text-slate-500 max-w-2xl">Powerful features designed specifically to eliminate friction from property management and accounting.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-5">
<iconify-icon className="text-xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Property Management</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Manage houses, villas, buildings, and apartments. Easily track vacant vs rented units in a structured hierarchy.</p>
<div className="text-xs font-medium text-indigo-600 bg-indigo-50 inline-block px-2 py-1 rounded">Impact: Better organization</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-5">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Tenant Management</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Assign tenants to apartments, manage lease contracts, and automatically track contract durations and renewals.</p>
<div className="text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">Impact: Zero contract errors</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Smart Invoicing</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Generate invoices, link payments, and maintain clear payment histories with unique references (e.g., FAC-XXXXX).</p>
<div className="text-xs font-medium text-emerald-600 bg-emerald-50 inline-block px-2 py-1 rounded">Impact: Professional billing</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600 mb-5">
<iconify-icon className="text-xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Unpaid Rent Tracking</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Record unpaid rents manually or automatically. Get a clear monthly overview of outstanding balances to act fast.</p>
<div className="text-xs font-medium text-red-600 bg-red-50 inline-block px-2 py-1 rounded">Impact: Reduce revenue loss</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 px-2 py-1 bg-indigo-600 text-white text-[10px] font-semibold tracking-wider uppercase rounded-bl-lg">Core</div>
<div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-5">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Owner Payout System</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Pay owners only when tenants have paid. Visual indicators show eligibility based on real collected payments.</p>
<div className="text-xs font-medium text-purple-600 bg-purple-50 inline-block px-2 py-1 rounded">Impact: Transparent cashflow</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-5">
<iconify-icon className="text-xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Financial Dashboard</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">Get a bird's-eye view of your operations. Monitor monthly cash flow, owner payout status, and total revenue.</p>
<div className="text-xs font-medium text-slate-600 bg-slate-100 inline-block px-2 py-1 rounded">Impact: Data-driven decisions</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How it works</h2>
<p className="text-lg text-slate-500">A logical, streamlined workflow from property registration to owner payouts.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 font-semibold mb-4 shadow-sm relative">
                                1
                            </div>
<h4 className="font-semibold text-slate-900 mb-1 text-sm">Register Properties</h4>
<p className="text-xs text-slate-500">Build your portfolio structure.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 font-semibold mb-4 shadow-sm">
                                2
                            </div>
<h4 className="font-semibold text-slate-900 mb-1 text-sm">Assign Tenants</h4>
<p className="text-xs text-slate-500">Link contracts to units.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 font-semibold mb-4 shadow-sm">
                                3
                            </div>
<h4 className="font-semibold text-slate-900 mb-1 text-sm">Generate Invoices</h4>
<p className="text-xs text-slate-500">Automate monthly billing.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-slate-600 font-semibold mb-4 shadow-sm">
                                4
                            </div>
<h4 className="font-semibold text-slate-900 mb-1 text-sm">Track Payments</h4>
<p className="text-xs text-slate-500">Mark paid or unpaid.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-indigo-600 border-2 border-indigo-600 flex items-center justify-center text-white font-semibold mb-4 shadow-sm shadow-indigo-200">
                                5
                            </div>
<h4 className="font-semibold text-slate-900 mb-1 text-sm">Pay Owners</h4>
<p className="text-xs text-slate-500">Distribute funds safely.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<p className="text-lg text-slate-500 mb-8">Choose the plan that fits the size of your portfolio.</p>

<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-slate-900">Monthly</span>
<div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer z-10 transition-all duration-200" id="billing-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-200" htmlFor="billing-toggle"></label>
</div>
<span className="text-sm font-medium text-slate-500">Annually <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full ml-1">-20%</span></span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Perfect for landlords with a small portfolio.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$29</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="block w-full py-2.5 px-4 bg-white border border-slate-200 text-center rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8" href="#">Start Free Trial</a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Up to 20 Properties</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Tenant Management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Basic Invoicing</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-indigo-600 shadow-xl relative md:-mt-4 md:mb-4 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-3.5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pro</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">For growing real estate agencies managing multiple owners.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$79</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<a className="block w-full py-2.5 px-4 bg-indigo-600 text-center rounded-full text-sm font-medium text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200 transition-colors mb-8" href="#">Start Free Trial</a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Up to 150 Properties</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Smart Invoicing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unpaid Rent Tracking</li>
</ul>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">For large portfolios needing custom solutions.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Custom</span>
</div>
<a className="block w-full py-2.5 px-4 bg-white border border-slate-200 text-center rounded-full text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Properties</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Everything in Pro</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-600 text-lg" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500 rounded-full blur-[120px] opacity-20 z-0 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Take Control of Your Real Estate Operations Today.</h2>
<p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Join hundreds of property managers who have modernized their workflow and eliminated manual tracking errors.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 rounded-full text-base font-medium hover:bg-slate-100 transition-all" href="#">
                        Get Started Now
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-slate-700 text-white rounded-full text-base font-medium hover:bg-slate-800 transition-all" href="#">
                        Talk to Sales
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">
                            IG
                        </div>
<span className="text-base font-semibold tracking-tight">ImmoGest</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">The modern platform to simplify property management, automate rent tracking, and gain full financial visibility.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon></a>
<a className="hover:text-slate-900" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Data Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-500">© 2023 ImmoGest Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
