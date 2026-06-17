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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<span className="font-semibold tracking-tighter text-lg">H</span>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">HAPOS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#features">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="#inventory">Inventory</a>
<a className="hover:text-gray-900 transition-colors" href="#hr">HR &amp; Payroll</a>
<a className="hover:text-gray-900 transition-colors" href="#finance">Finance</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Sign in</a>
<a className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 hero-gradient relative overflow-hidden">
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                The new standard for Philippine Business
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
                Orchestrate your entire <br className="hidden md:block"/>
                business in <span className="text-gradient">one system.</span>
</h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                From inventory and payroll to POS and financial reports. HAPOS is the unified ERP platform designed for modern Filipino enterprises.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-full shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-300">
                    Start Free Trial
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-gray-700 border border-gray-200 font-medium rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent blur-3xl -z-10 transform translate-y-20"></div>
<div className="bg-white rounded-xl border border-gray-200/80 shadow-2xl shadow-gray-200/50 overflow-hidden">

<div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
<div className="w-3 h-3 rounded-full bg-gray-300"></div>
<div className="w-3 h-3 rounded-full bg-gray-300"></div>
<div className="w-3 h-3 rounded-full bg-gray-300"></div>
<div className="ml-auto flex items-center gap-4">
<div className="h-2 w-20 bg-gray-200 rounded-full"></div>
<div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xs">JP</div>
</div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white">

<div className="hidden md:block md:col-span-2 space-y-4">
<div className="h-8 w-full bg-orange-50 rounded-md flex items-center px-3 text-orange-600 text-sm font-medium gap-2">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon> Overview
                            </div>
<div className="h-8 w-full hover:bg-gray-50 rounded-md flex items-center px-3 text-gray-500 text-sm gap-2">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon> Inventory
                            </div>
<div className="h-8 w-full hover:bg-gray-50 rounded-md flex items-center px-3 text-gray-500 text-sm gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> HR &amp; Payroll
                            </div>
</div>

<div className="col-span-12 md:col-span-10 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="h-8 w-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs text-green-600 font-medium">+12.5%</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">₱2,450,000</div>
<div className="text-xs text-gray-400 mt-1">Total Revenue (Monthly)</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-400 font-medium">Active</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">142</div>
<div className="text-xs text-gray-400 mt-1">Employees Clocked-in</div>
</div>

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs text-red-500 font-medium">Action Req</span>
</div>
<div className="text-2xl font-semibold text-gray-900 tracking-tight">3</div>
<div className="text-xs text-gray-400 mt-1">Low Stock Alerts</div>
</div>

<div className="col-span-1 md:col-span-2 p-4 rounded-xl border border-gray-100 bg-white shadow-sm h-48 flex flex-col justify-end gap-2 items-end relative overflow-hidden">
<div className="absolute top-4 left-4 text-sm font-medium text-gray-900">Cash Flow</div>
<div className="flex items-end gap-3 w-full h-32 px-2">
<div className="w-full bg-orange-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-orange-200 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-orange-300 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-orange-400 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-orange-500 rounded-t-sm h-[75%]"></div>
<div className="w-full bg-gray-200 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-gray-200 rounded-t-sm h-[50%]"></div>
</div>
</div>

<div className="col-span-1 p-4 rounded-xl border border-gray-100 bg-white shadow-sm h-48">
<div className="text-sm font-medium text-gray-900 mb-3">Recent Sales</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Order #2291</span>
<span className="font-medium">₱1,200</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Order #2292</span>
<span className="font-medium">₱450</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Order #2293</span>
<span className="font-medium">₱3,100</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Order #2294</span>
<span className="font-medium">₱890</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-gray-400 font-medium mb-8">TRUSTED BY FORWARD-THINKING COMPANIES IN THE PHILIPPINES</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 rounded-full"></div>
<span className="font-semibold text-gray-800">MetroBuild</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 transform rotate-45"></div>
<span className="font-semibold text-gray-800">ApexRetail</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 border-2 border-gray-800 rounded-md"></div>
<span className="font-semibold text-gray-800">ManilaTech</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-800 rounded-tr-xl rounded-bl-xl"></div>
<span className="font-semibold text-gray-800">IslandFoods</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="features">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Complete control over your operations.</h2>
<p className="text-gray-500 text-lg">Stop juggling multiple spreadsheets and disconnected software. HAPOS unifies your entire workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden group hover:border-orange-200 transition-colors">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-orange-600 mb-6 shadow-sm">
<iconify-icon icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Inventory Management</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                            Track stock in real-time across multiple warehouses. Set automatic low-stock alerts and manage product conditions seamlessly.
                        </p>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-4/5 bg-white border-t border-l border-gray-200 rounded-tl-2xl shadow-sm translate-x-4 translate-y-4 p-4">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
<span className="text-xs font-medium text-gray-500">Product</span>
<span className="text-xs font-medium text-gray-500">Stock</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-gray-700">Premium Rice 25kg</span>
</div>
<span className="text-xs font-medium text-gray-900">450</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs text-gray-700">Canned Tuna Lrg</span>
</div>
<span className="text-xs font-medium text-red-600">12 (Low)</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-gray-700">Cooking Oil 1L</span>
</div>
<span className="text-xs font-medium text-gray-900">1,200</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-gray-900 text-white rounded-2xl p-8 border border-gray-800 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-3xl rounded-full"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-orange-400 mb-6 shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">HR &amp; Payroll</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-8">
                            Automated DTR and payroll processing. Handle overtime, late deductions, and 13th-month pay with one click.
                        </p>

<div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-gray-400">Payroll Period</span>
<span className="text-xs text-white">Sep 1-15</span>
</div>
<div className="h-1 w-full bg-gray-700 rounded-full mb-4 overflow-hidden">
<div className="h-full bg-orange-500 w-3/4"></div>
</div>
<button className="w-full py-2 bg-white text-gray-900 text-xs font-semibold rounded-lg">Generate Payslips</button>
</div>
</div>
</div>

<div className="col-span-1 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Point of Sale</h3>
<p className="text-sm text-gray-500">Quick checkout, voucher support, and multiple payment methods integration.</p>
</div>

<div className="col-span-1 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:bill-list-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Expenses &amp; Billing</h3>
<p className="text-sm text-gray-500">Monitor spending, approve claims, and generate professional invoices instantly.</p>
</div>

<div className="col-span-1 bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Branch</h3>
<p className="text-sm text-gray-500">Centralized dashboard for all your locations with branch-level permissions.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="space-y-6">
<div className="flex items-center gap-2 text-orange-600 font-medium">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon> Finance
                    </div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Profit &amp; Loss Statements
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Real-time Cash Flow
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Accounts Receivable
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Bank Integration
                        </li>
</ul>
</div>

<div className="space-y-6">
<div className="flex items-center gap-2 text-orange-600 font-medium">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> HR Tech
                    </div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Clock In/Out Tracking
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Grace Period Settings
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Late Detection
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Department Management
                        </li>
</ul>
</div>

<div className="space-y-6">
<div className="flex items-center gap-2 text-orange-600 font-medium">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon> Sales &amp; POS
                    </div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Customer Accounts
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Discounts &amp; Vouchers
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Sales Order Tracking
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Professional Invoicing
                        </li>
</ul>
</div>

<div className="space-y-6">
<div className="flex items-center gap-2 text-orange-600 font-medium">
<iconify-icon icon="solar:folder-check-linear"></iconify-icon> Expenses
                    </div>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Budget Tracking
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Expense Claim Approval
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Spending Reports
                        </li>
<li className="flex gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-400 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Excel/PDF Exports
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 right-0 p-40 bg-orange-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to streamline your business?</h2>
<p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">Join hundreds of Filipino businesses growing faster with HAPOS ERP. Start your free 14-day trial today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-orange-500/30">
                        Get Started Now
                    </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-gray-600 text-white font-medium rounded-full hover:bg-white/5 transition-colors">
                        Book a Demo
                    </button>
</div>
<p className="text-xs text-gray-500 mt-8">No credit card required. Cancel anytime.</p>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-16 px-6 border-t border-gray-800">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-white text-xs">H</div>
<span className="text-white font-semibold tracking-tight text-lg">HAPOS</span>
</div>
<p className="text-sm text-gray-500 mb-6 max-w-xs">
                    The all-in-one Enterprise Resource Planning system built for the Philippines. Simplifying operations, HR, and finance.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-400 transition-colors" href="#">Inventory</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">HR &amp; Payroll</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">POS</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Accounting</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-orange-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-orange-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
            © 2023 HAPOS ERP Inc. All rights reserved. Designed for PH Business.
        </div>
</footer>

    </>
  );
}
