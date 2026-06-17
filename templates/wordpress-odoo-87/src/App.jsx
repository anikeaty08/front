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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="relative w-8 h-8">
<svg className="w-full h-full text-slate-900" fill="none" viewbox="0 0 32 32">
<circle cx="10" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"></circle>
<circle cx="22" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"></circle>

<circle className="fill-orange-500" cx="10" cy="14" r="2"></circle>
<circle className="fill-orange-500" cx="22" cy="14" r="2"></circle>
<line stroke="#f97316" strokeWidth="2" x1="10" x2="22" y1="14" y2="14"></line>

<path d="M10 20C10 20 12 24 16 24C20 24 22 20 22 20" stroke="#f97316" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<span className="text-slate-900 font-bold tracking-tight text-xl">loogtec</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">WordPress</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Odoo ERP</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900" href="#">Log in</a>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded-full transition-all shadow-lg shadow-slate-900/20">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden subtle-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-orange-100/50 via-amber-50/30 to-transparent rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">New Odoo 17 Integration Modules Available</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                Unify your content and <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500">operations seamlessly.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Orchestrate your business with high-performance WordPress front-ends connected to robust Odoo ERP back-ends. The modern stack for growing enterprises.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-900/10">
                    Start Integration
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch Demo
                </button>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="rounded-xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-[400px]">

<div className="hidden md:block md:col-span-3 border-r border-slate-100 bg-slate-50/30 p-4">
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-700 bg-white p-2 rounded-lg shadow-sm border border-slate-100">
<iconify-icon className="text-orange-600" icon="solar:graph-new-linear"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</div>
<div className="flex items-center gap-3 text-slate-500 px-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
<span className="text-sm">Sales</span>
</div>
<div className="flex items-center gap-3 text-slate-500 px-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm">CRM</span>
</div>
<div className="flex items-center gap-3 text-slate-500 px-2">
<iconify-icon icon="solar:box-linear"></iconify-icon>
<span className="text-sm">Inventory</span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-8">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Real-time Sync Status</h3>
<p className="text-xs text-slate-500">Last synced: Just now via API</p>
</div>
<span className="bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded border border-green-100 flex items-center gap-1">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Active
                                </span>
</div>
<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
<p className="text-xs text-slate-500 mb-1">WooCommerce Orders</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1,284</p>
</div>
<div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
<p className="text-xs text-slate-500 mb-1">Odoo Invoices</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">1,284</p>
</div>
<div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
<p className="text-xs text-slate-500 mb-1">Stock Level</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">99.9%</p>
</div>
</div>

<div className="relative h-24 border border-dashed border-slate-200 rounded-lg flex items-center justify-center gap-8 bg-slate-50/20">
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center text-slate-900">
<span className="font-bold text-xs">W</span>
</div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Store</span>
</div>
<div className="flex-1 h-[1px] bg-slate-200 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
<iconify-icon className="text-slate-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-10 h-10 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center text-purple-900">
<span className="font-bold text-xs">O</span>
</div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">ERP</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by forward-thinking companies</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> ACME</span>
<span className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:atom-linear"></iconify-icon> QUANTUM</span>
<span className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:crown-linear"></iconify-icon> ROYAL</span>
<span className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:infinity-linear"></iconify-icon> LOOP</span>
<span className="text-lg font-bold tracking-tighter text-slate-800 flex items-center gap-1"><iconify-icon icon="solar:shield-linear"></iconify-icon> SECURE</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Complete digital architecture.</h2>
<p className="text-slate-500 text-lg font-light">We bridge the gap between marketing websites and business operations using the two most powerful open-source platforms.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">WordPress Development</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Custom themes, headless architectures, and high-performance plugins tailored for scalability and SEO dominance.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Custom Theme Dev
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Headless WP (React/Next)
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Speed Optimization
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Odoo Implementation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Streamline inventory, accounting, and CRM. We customize Odoo modules to fit your exact business logic.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-read-linear"></iconify-icon> Module Customization
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-read-linear"></iconify-icon> Data Migration
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500" icon="solar:check-read-linear"></iconify-icon> Workflow Automation
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-orange-600 mb-6 shadow-sm">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Seamless Integration</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Connect WooCommerce or Gravity Forms directly to Odoo. Sync orders, customers, and stock in real-time.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Bi-directional Sync
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> API Development
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-read-linear"></iconify-icon> Error Handling Logs
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-block p-3 bg-white rounded-xl shadow-sm border border-slate-200 mb-6">
<iconify-icon className="text-amber-500 text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Automate the boring stuff. Focus on growth.</h2>
<p className="text-slate-500 text-lg font-light mb-8">
                        Stop manually copying orders from your website to your ERP. Our custom connectors ensure your data is always accurate, inventory is synced, and invoices are generated automatically.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<span className="text-xs font-semibold">1</span>
</div>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Trigger Event</h4>
<p className="text-sm text-slate-500">Customer purchases product on WordPress site.</p>
</div>
</div>
<div className="w-[1px] h-6 bg-slate-200 ml-3"></div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
<span className="text-xs font-semibold">2</span>
</div>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Process Data</h4>
<p className="text-sm text-slate-500">Data is validated and formatted via middleware.</p>
</div>
</div>
<div className="w-[1px] h-6 bg-slate-200 ml-3"></div>
<div className="flex gap-4">
<div className="mt-1">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<span className="text-xs font-semibold">3</span>
</div>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Execute Action</h4>
<p className="text-sm text-slate-500">Sales order created in Odoo, stock reserved.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-white rounded-2xl transform rotate-3 scale-95 opacity-50"></div>
<div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 relative z-10">
<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Automation Rules</span>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500">Running</span>
</div>
</div>

<div className="space-y-3 font-mono text-xs">
<div className="p-3 bg-slate-50 rounded border border-slate-100 text-slate-600 flex justify-between items-center">
<span>IF <span className="text-blue-600">order.status</span> == 'paid'</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100 text-slate-600 ml-4 flex justify-between items-center relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-slate-200"></div>
<div className="absolute -left-4 top-0 h-1/2 w-[1px] bg-slate-200"></div>
<span>THEN <span className="text-orange-600">odoo.create_invoice()</span></span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100 text-slate-600 ml-4 flex justify-between items-center relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-slate-200"></div>
<div className="absolute -left-4 -top-1/2 h-full w-[1px] bg-slate-200"></div>
<span>THEN <span className="text-orange-600">odoo.update_inventory()</span></span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100 text-slate-600 ml-4 flex justify-between items-center relative">
<div className="absolute -left-4 top-1/2 w-4 h-[1px] bg-slate-200"></div>
<div className="absolute -left-4 -top-1/2 h-full w-[1px] bg-slate-200"></div>
<span>THEN <span className="text-orange-600">wp.send_email()</span></span>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 text-center">
<button className="text-xs font-medium text-orange-600 hover:text-orange-700 flex items-center justify-center gap-1">
                                View Logs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Transparent pricing models.</h2>
<p className="text-slate-500 text-lg font-light mb-8">Choose a plan that fits your integration complexity.</p>

<div className="inline-flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 relative">
<div className="w-1/2 h-full absolute left-0 bg-white rounded-md shadow-sm transition-all duration-300"></div>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-slate-900">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-slate-500">Yearly</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="font-medium text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">$900</span>
<span className="text-slate-500 text-sm">/project</span>
</div>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">Perfect for small shops needing basic WP to Odoo connection.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Standard Theme Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Basic Sales Sync
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Email Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-400 transition-colors">Select Plan</button>
</div>

<div className="relative p-8 rounded-2xl border border-orange-200 bg-orange-50/30 shadow-xl shadow-orange-100">
<div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-wide uppercase">Popular</div>
<h3 className="font-medium text-orange-900 mb-2">Business</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">$2,500</span>
<span className="text-slate-500 text-sm">/project</span>
</div>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-orange-100">Full bi-directional synchronization and custom modules.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center text-orange-700"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Custom WP Design
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center text-orange-700"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Inventory &amp; Invoice Sync
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-5 h-5 rounded-full bg-orange-200 flex items-center justify-center text-orange-700"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            3 Custom Odoo Modules
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 transition-colors shadow-md shadow-orange-200">Get Started</button>
</div>

<div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">Custom</span>
</div>
<p className="text-xs text-slate-500 mb-6 pb-6 border-b border-slate-100">Complex architectures, multi-site, and dedicated support.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Headless Implementation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            Dedicated Server Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"><iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon></div>
                            24/7 SLA Support
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:border-slate-400 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="relative w-6 h-6">
<svg className="w-full h-full text-slate-900" fill="none" viewbox="0 0 32 32">
<circle cx="10" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"></circle>
<circle cx="22" cy="14" r="6" stroke="currentColor" strokeWidth="2.5"></circle>
<circle className="fill-orange-500" cx="10" cy="14" r="2"></circle>
<circle className="fill-orange-500" cx="22" cy="14" r="2"></circle>
<line stroke="#f97316" strokeWidth="2" x1="10" x2="22" y1="14" y2="14"></line>
<path d="M10 20C10 20 12 24 16 24C20 24 22 20 22 20" stroke="#f97316" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
</div>
<span className="text-slate-900 font-medium tracking-tight">loogtec</span>
</div>
<p className="text-sm text-slate-400 mb-6">Building the bridge between content and commerce.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-twitter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-github-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">WordPress Themes</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Odoo Modules</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Newsletter</h4>
<form className="space-y-2">
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500" placeholder="Enter your email" type="email"/>
<button className="w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Loogtec Systems Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
