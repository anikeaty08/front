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



        // SPA Logic
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            // Show target
            document.getElementById(pageId).classList.add('active');
            
            // Update Active Nav State
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('text-slate-900');
                    btn.classList.remove('text-slate-500');
                } else {
                    btn.classList.remove('text-slate-900');
                    btn.classList.add('text-slate-500');
                }
            });
            
            // Scroll to top
            window.scrollTo(0, 0);
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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl border-b border-slate-100 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="showPage('home')">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Kameti<span className="text-primary">Fund</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors nav-link" data-target="features" onclick="showPage('features')">Features</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors nav-link" data-target="docs" onclick="showPage('docs')">Docs</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors nav-link" data-target="pricing" onclick="showPage('pricing')">Pricing</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors nav-link" data-target="download" onclick="showPage('download')">Download</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors nav-link" data-target="help" onclick="showPage('help')">Support</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900">Sign In</button>
<button className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-slate-200" onclick="showPage('pricing')">Get Started</button>
</div>
</div>
</nav>

<main className="pt-16 min-h-screen">

<div className="page-section active" id="home">

<section className="relative pt-20 pb-24 overflow-hidden bg-white">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                            v2.4 Live: New Admin Tools
                        </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                            Modern Digital Kameti <br/>
<span className="text-slate-400">Dashboard Platform</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                            A secure and automated savings group management system with powerful admin control and transparent member tracking.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-3 bg-primary bg-primary-hover text-white font-medium rounded-full transition-all shadow-xl shadow-[#4A90A4]/20 flex items-center justify-center gap-2" onclick="showPage('pricing')">
                                Get Started <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium rounded-full transition-all flex items-center justify-center gap-2" onclick="showPage('pricing')">
                                View Pricing
                            </button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-slate-400 font-medium">
<span className="flex items-center gap-1"><iconify-icon className="text-primary" icon="solar:verified-check-linear"></iconify-icon> GDPR Compliant</span>
<span className="flex items-center gap-1"><iconify-icon className="text-primary" icon="solar:shield-keyhole-linear"></iconify-icon> Encrypted Data</span>
</div>
</div>

<div className="relative group">

<div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-10 animate-[bounce_3s_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Payout Sent</div>
<div className="text-sm font-semibold text-slate-900">₹50,000.00</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">

<div className="h-12 border-b border-slate-100 flex items-center justify-between px-4 bg-slate-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="h-6 w-32 bg-slate-100 rounded-md"></div>
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
</div>

<div className="flex h-[400px]">

<div className="w-48 border-r border-slate-100 p-4 hidden md:block">
<div className="space-y-3">
<div className="h-8 w-full bg-primary/10 text-primary rounded-md flex items-center px-3 text-xs font-medium gap-2"><iconify-icon icon="solar:home-2-linear"></iconify-icon> Dashboard</div>
<div className="h-8 w-full text-slate-400 hover:bg-slate-50 rounded-md flex items-center px-3 text-xs font-medium gap-2"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Members</div>
<div className="h-8 w-full text-slate-400 hover:bg-slate-50 rounded-md flex items-center px-3 text-xs font-medium gap-2"><iconify-icon icon="solar:card-transfer-linear"></iconify-icon> Payments</div>
<div className="h-8 w-full text-slate-400 hover:bg-slate-50 rounded-md flex items-center px-3 text-xs font-medium gap-2"><iconify-icon icon="solar:settings-linear"></iconify-icon> Settings</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100">
<div className="h-24 bg-slate-50 rounded border border-slate-100 p-3">
<div className="h-2 w-12 bg-slate-200 rounded mb-2"></div>
<div className="h-4 w-20 bg-slate-300 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 p-6 bg-slate-50/30">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold text-slate-800">Overview</h3>
<div className="h-8 w-24 bg-white border border-slate-200 rounded-md"></div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm mb-6">
<div className="flex items-end gap-2 h-32 w-full justify-between px-2">
<div className="w-full bg-primary/10 rounded-t h-[40%]"></div>
<div className="w-full bg-primary/30 rounded-t h-[70%]"></div>
<div className="w-full bg-primary/20 rounded-t h-[50%]"></div>
<div className="w-full bg-primary/60 rounded-t h-[90%] relative group-hover:bg-primary transition-colors"></div>
<div className="w-full bg-primary/40 rounded-t h-[60%]"></div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
<div className="p-3 border-b border-slate-50 flex justify-between">
<div className="h-4 w-20 bg-slate-100 rounded"></div>
<div className="h-4 w-8 bg-slate-100 rounded"></div>
</div>
<div className="p-3 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
<div className="h-3 w-24 bg-slate-100 rounded"></div>
</div>
<div className="h-4 w-12 bg-green-100 rounded-full"></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
<div className="h-3 w-24 bg-slate-100 rounded"></div>
</div>
<div className="h-4 w-12 bg-green-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-sm h-[300px] flex items-center justify-center relative overflow-hidden">

<div className="relative z-10 grid grid-cols-2 gap-4 w-3/4">
<div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
<iconify-icon className="text-white/80 text-3xl mb-2" icon="solar:user-circle-linear"></iconify-icon>
<div className="h-2 w-16 bg-white/20 rounded mx-auto"></div>
</div>
<div className="bg-white/10 p-4 rounded-xl border border-white/20 text-center">
<iconify-icon className="text-white/80 text-3xl mb-2" icon="solar:user-circle-linear"></iconify-icon>
<div className="h-2 w-16 bg-white/20 rounded mx-auto"></div>
</div>
<div className="col-span-2 bg-white p-4 rounded-xl border border-white/20 text-center flex items-center justify-center gap-3 shadow-lg">
<div className="text-primary font-semibold">Common Pot</div>
<iconify-icon className="text-primary" icon="solar:database-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">What is the Kameti Platform?</h2>
<p className="text-white/80 leading-relaxed mb-6">
                            Kameti is a digital savings management platform where members contribute monthly and receive payouts in structured rotation. The system provides full admin control, payment tracking, automation, and transparency for both organizers and members.
                        </p>
<p className="text-white/80 leading-relaxed mb-8">
                            Unlike manual record-keeping on paper or spreadsheets, our dashboard offers real-time status updates, automated payment reminders, and secure bank-grade ledgers.
                        </p>
<div className="flex gap-4">
<div className="flex flex-col gap-1">
<span className="text-2xl font-bold text-white">10k+</span>
<span className="text-xs text-white/60 uppercase tracking-wide">Active Groups</span>
</div>
<div className="w-px h-12 bg-white/20"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-bold text-white">₹25Cr</span>
<span className="text-xs text-white/60 uppercase tracking-wide">Managed Funds</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">System Flow</h2>
<p className="text-slate-500 mt-3">From setup to final payout in 5 automated steps.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-primary to-transparent w-1/3 animate-[shimmer_2s_infinite]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="group">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-full text-xs flex items-center justify-center font-medium text-slate-500 border border-white">1</span>
<iconify-icon className="text-slate-400 group-hover:text-primary transition-colors" icon="solar:user-plus-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-medium text-slate-900 text-sm mb-2">Create Admin Account</h3>
<p className="text-center text-xs text-slate-500 px-2">Sign up securely as an organizer.</p>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-full text-xs flex items-center justify-center font-medium text-slate-500 border border-white">2</span>
<iconify-icon className="text-slate-400 group-hover:text-primary transition-colors" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-medium text-slate-900 text-sm mb-2">Manage Groups</h3>
<p className="text-center text-xs text-slate-500 px-2">Set rules, amount, and duration.</p>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-full text-xs flex items-center justify-center font-medium text-slate-500 border border-white">3</span>
<iconify-icon className="text-slate-400 group-hover:text-primary transition-colors" icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-medium text-slate-900 text-sm mb-2">Add &amp; Verify</h3>
<p className="text-center text-xs text-slate-500 px-2">KYC verification for members.</p>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-full text-xs flex items-center justify-center font-medium text-slate-500 border border-white">4</span>
<iconify-icon className="text-slate-400 group-hover:text-primary transition-colors" icon="solar:chart-2-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-medium text-slate-900 text-sm mb-2">Track Contributions</h3>
<p className="text-center text-xs text-slate-500 px-2">Real-time ledger updates.</p>
</div>

<div className="group">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm relative">
<span className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-full text-xs flex items-center justify-center font-medium text-slate-500 border border-white">5</span>
<iconify-icon className="text-slate-400 group-hover:text-primary transition-colors" icon="solar:card-send-linear" width="32"></iconify-icon>
</div>
<h3 className="text-center font-medium text-slate-900 text-sm mb-2">Payout &amp; Report</h3>
<p className="text-center text-xs text-slate-500 px-2">Auto transfer and PDF reports.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:settings-minimalistic-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Admin Dashboard Control</h4>
<p className="text-sm text-slate-500 leading-relaxed">Centralized command center for all your groups and settings.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Real-Time Tracking</h4>
<p className="text-sm text-slate-500 leading-relaxed">See who paid instantly. No manual entry required.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:bell-bing-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Automated Notifications</h4>
<p className="text-sm text-slate-500 leading-relaxed">Smart reminders via Email and SMS for dues.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Secure Monitoring</h4>
<p className="text-sm text-slate-500 leading-relaxed">Bank-grade encryption for all transaction data.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:file-text-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Transparent Records</h4>
<p className="text-sm text-slate-500 leading-relaxed">Downloadable PDF ledgers accessible to all members.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:layers-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Flexible Plans</h4>
<p className="text-sm text-slate-500 leading-relaxed">Customize pot size, duration, and cycle dates.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:lock-keyhole-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Privacy Protection</h4>
<p className="text-sm text-slate-500 leading-relaxed">Member data is masked and never sold to third parties.</p>
</div>
<div className="group hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-primary mb-4" icon="solar:headphones-round-sound-linear" width="28"></iconify-icon>
<h4 className="font-medium text-slate-900 mb-2">Dedicated Support</h4>
<p className="text-sm text-slate-500 leading-relaxed">24/7 assistance for payment or technical queries.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Powerful Admin Control Panel</h2>
<p className="text-slate-500 mt-3">Monitor groups, payments, and payouts from one centralized dashboard.</p>
</div>
<div className="bg-slate-50 rounded-2xl border border-slate-200 p-2 shadow-2xl">
<div className="bg-white rounded-xl border border-slate-200 overflow-hidden">

<div className="h-14 border-b border-slate-100 flex items-center justify-between px-6">
<div className="font-semibold text-slate-800">Kameti Group Alpha</div>
<div className="flex gap-3 text-xs font-medium">
<div className="px-3 py-1.5 bg-slate-100 rounded text-slate-600">Export CSV</div>
<div className="px-3 py-1.5 bg-primary text-white rounded">Add Member</div>
</div>
</div>

<div className="p-6 overflow-x-auto">
<div className="min-w-[800px]">
<div className="grid grid-cols-6 gap-4 text-xs font-medium text-slate-400 uppercase tracking-wider mb-4 px-4">
<div className="col-span-2">Member</div>
<div>Status</div>
<div>Contribution</div>
<div>Date</div>
<div>Action</div>
</div>
<div className="space-y-2">

<div className="grid grid-cols-6 gap-4 items-center p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="col-span-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm font-medium text-slate-700">Sarah Johnson</div>
</div>
<div><span className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">Paid</span></div>
<div className="text-sm text-slate-600">₹10,000</div>
<div className="text-sm text-slate-500">Oct 05, 2023</div>
<div><iconify-icon className="text-slate-400 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon></div>
</div>

<div className="grid grid-cols-6 gap-4 items-center p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="col-span-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm font-medium text-slate-700">Michael Chen</div>
</div>
<div><span className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">Paid</span></div>
<div className="text-sm text-slate-600">₹10,000</div>
<div className="text-sm text-slate-500">Oct 04, 2023</div>
<div><iconify-icon className="text-slate-400 cursor-pointer" icon="solar:menu-dots-linear"></iconify-icon></div>
</div>

<div className="grid grid-cols-6 gap-4 items-center p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
<div className="col-span-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm font-medium text-slate-700">Priya Patel</div>
</div>
<div><span className="px-2 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">Pending</span></div>
<div className="text-sm text-slate-600">₹0</div>
<div className="text-sm text-slate-500">-</div>
<div><button className="text-xs text-primary font-medium hover:underline">Remind</button></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
<div className="flex gap-6 group">
<div className="w-12 h-12 shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/20">
<iconify-icon icon="solar:telescope-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-3">Our Vision</h3>
<p className="text-white/80 leading-relaxed font-light">
                                To revolutionize the informal savings sector by providing a digital infrastructure that ensures trust, transparency, and financial growth for communities worldwide.
                            </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 shrink-0 bg-white/10 rounded-lg flex items-center justify-center text-white border border-white/20">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-3">Our Mission</h3>
<p className="text-white/80 leading-relaxed font-light">
                                Empowering organizers with tools to manage funds effortlessly while giving contributors peace of mind through secure, verified, and automated digital tracking.
                            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 p-5 rounded-xl cursor-pointer hover:border-primary transition-colors">
<summary className="flex justify-between items-center font-medium list-none text-slate-900">
<span>Is my money safe with KametiFund?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Yes, all funds are held in escrow accounts regulated by banking partners. We prioritize data encryption and do not use your money for investments.</p>
</details>
<details className="group bg-white border border-slate-200 p-5 rounded-xl cursor-pointer hover:border-primary transition-colors">
<summary className="flex justify-between items-center font-medium list-none text-slate-900">
<span>Can I automate monthly payments?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Absolutely. You can link your bank account or UPI ID to set up auto-debit for your monthly contributions.</p>
</details>
<details className="group bg-white border border-slate-200 p-5 rounded-xl cursor-pointer hover:border-primary transition-colors">
<summary className="flex justify-between items-center font-medium list-none text-slate-900">
<span>How are reports generated?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<p className="text-slate-500 mt-4 text-sm leading-relaxed">Reports are generated automatically at the end of every cycle. Both admins and members can download PDF statements from their dashboard.</p>
</details>
</div>
</div>
</section>
</div>

<div className="page-section" id="docs">
<div className="flex max-w-7xl mx-auto min-h-screen">

<aside className="w-64 hidden lg:block border-r border-slate-200 sticky-sidebar py-8 pl-6 pr-6 bg-white z-10">
<div className="space-y-8">
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Introduction</h5>
<ul className="space-y-3">
<li><a className="text-sm text-primary font-medium block border-l-2 border-primary pl-3 -ml-3" href="#">What is Kameti</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Getting Started</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Core Platform</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Admin Dashboard</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Creating Groups</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Adding Members</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Managing Contributions</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Advanced</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Payout Automation</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">API Access</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 block pl-3" href="#">Compliance</a></li>
</ul>
</div>
</div>
</aside>

<div className="flex-1 py-12 px-6 lg:px-16 bg-white">
<div className="max-w-3xl">
<div className="flex items-center gap-2 text-sm text-primary mb-4">
<span>Docs</span>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Introduction</span>
</div>
<h1 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">What is KametiFund?</h1>
<p className="text-slate-600 leading-7 mb-8 text-lg font-light">
                            KametiFund is a comprehensive SaaS infrastructure designed to digitize the ROSCA (Rotating Savings and Credit Association) model. We provide the technical layer for trusted communities to manage pooled funds securely.
                        </p>

<div className="bg-blue-50/50 rounded-lg border border-blue-100 p-5 mb-10 flex gap-4">
<iconify-icon className="text-blue-500 shrink-0 mt-1" icon="solar:info-circle-linear" width="20"></iconify-icon>
<div className="text-sm text-slate-700 leading-relaxed">
<span className="font-semibold text-slate-900">Note:</span> The platform handles the ledger, notifications, and payment gateway integration. The actual disbursement logic is controlled by the Group Admin based on the consensus algorithm.
                            </div>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-12 mb-6">Getting Started</h2>
<p className="text-slate-600 leading-7 mb-6">
                            To integrate the Kameti Dashboard into your existing community workflow, you can use our initialization script. This sets up the admin environment.
                        </p>

<div className="bg-slate-900 rounded-xl p-6 mb-10 overflow-x-auto shadow-lg">
<div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-2">
<span className="text-xs text-slate-400 font-medium">install.sh</span>
<span className="text-xs text-slate-500">BASH</span>
</div>
<code className="text-sm text-slate-300 code-font leading-relaxed">
<span className="text-purple-400">npm</span> install @kameti/core<br/>
<span className="text-purple-400">npx</span> kameti-init --admin<br/>
<br/>
<span className="text-slate-500"># Start the local dashboard</span><br/>
<span className="text-purple-400">npm</span> run dev
                            </code>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-12 mb-6">Admin Dashboard Overview</h2>
<p className="text-slate-600 leading-7 mb-4">
                            The admin dashboard is the control center. From here, you can:
                        </p>
<ul className="list-none space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon> Monitor total liquidity in the pot.
                            </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon> Approve or reject new member KYC requests.
                            </li>
<li className="flex items-center gap-3 text-slate-600 text-sm">
<iconify-icon className="text-primary" icon="solar:check-circle-linear"></iconify-icon> Trigger manual payouts in case of automated failures.
                            </li>
</ul>
</div>
</div>
</div>
</div>

<div className="page-section" id="features">
<div className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-24">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Core Dashboard Features</h1>
<p className="text-lg text-slate-500">Designed for efficiency, security, and absolute transparency.</p>
</div>

<div className="rounded-3xl bg-primary text-white overflow-hidden p-8 md:p-12 mb-32 shadow-2xl shadow-[#4A90A4]/20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Admin Overview Panel</h3>
<p className="text-white/80 leading-relaxed mb-6">
                                    Get a bird's eye view of your financial circles. The overview panel aggregates data from all active groups, showing upcoming due dates, total collected amounts, and pending approvals.
                                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white font-medium"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Live Contribution Status</li>
<li className="flex items-center gap-3 text-sm text-white font-medium"><iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon> Smart Payment Tracking</li>
</ul>
</div>
<div className="order-1 md:order-2 bg-white/10 rounded-2xl border border-white/20 p-8 h-[350px] relative overflow-hidden flex items-end justify-center">

<div className="w-full max-w-md bg-white rounded-t-xl border border-slate-200 shadow-sm h-[90%] p-4">
<div className="flex justify-between items-center mb-6">
<div className="h-4 w-24 bg-slate-100 rounded"></div>
<div className="h-8 w-8 bg-slate-100 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="h-20 bg-primary/20 rounded-lg"></div>
<div className="h-20 bg-slate-50 rounded-lg"></div>
<div className="h-20 bg-slate-50 rounded-lg"></div>
</div>
<div className="space-y-2">
<div className="h-10 w-full bg-slate-50 rounded-lg"></div>
<div className="h-10 w-full bg-slate-50 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 h-[400px] relative overflow-hidden flex items-center justify-center shadow-lg">

<div className="w-48 h-[90%] bg-black rounded-3xl border-4 border-slate-800 overflow-hidden relative shadow-2xl">
<div className="absolute inset-0 bg-white">
<div className="bg-primary h-32 w-full p-4 text-white">
<div className="mt-8 text-lg font-semibold">My Groups</div>
</div>
<div className="p-4 space-y-3 -mt-6">
<div className="bg-white rounded-lg shadow p-3 h-20"></div>
<div className="bg-white rounded-lg shadow p-3 h-20"></div>
<div className="bg-white rounded-lg shadow p-3 h-20"></div>
</div>
</div>
</div>
</div>
<div className="pl-0 md:pl-10">
<div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Analytics &amp; Reports</h3>
<p className="text-slate-500 leading-relaxed mb-6">
                                Data-driven insights for financial planning. Download monthly statements, track default rates, and visualize the growth of your community funds.
                            </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Export to CSV/PDF</li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Auto Status Updates</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="pricing">
<div className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple &amp; Transparent Pricing</h2>
<p className="text-slate-500">Pay only for what you use. Cancel anytime.</p>
<div className="mt-8 inline-flex bg-slate-100 rounded-full p-1 relative">
<div className="w-1/2 h-full absolute left-0 bg-white rounded-full shadow-sm transition-all border border-slate-200"></div>
<button className="px-6 py-2 text-sm font-medium text-slate-900 rounded-full relative z-10 w-24">Monthly</button>
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-full relative z-10 w-24">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-medium text-slate-900 mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">₹499</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8 h-10">Essential tools for small personal groups.</p>
<button className="w-full py-3 bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">Select Starter</button>
<div className="mt-8 pt-8 border-t border-slate-100">
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> Basic Dashboard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> Up to 2 Groups</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> Email Support</li>
</ul>
</div>
</div>

<div className="bg-white border-2 border-primary rounded-2xl p-8 shadow-2xl shadow-primary/10 relative transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wide">Most Popular</div>
<h3 className="font-medium text-slate-900 mb-2">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">₹999</span>
<span className="text-slate-500">/mo</span>
</div>
<p className="text-sm text-slate-500 mb-8 h-10">Advanced automation for growing communities.</p>
<button className="w-full py-3 bg-primary bg-primary-hover text-white font-medium rounded-lg transition-colors shadow-lg shadow-primary/20">Select Pro</button>
<div className="mt-8 pt-8 border-t border-slate-100">
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Unlimited Groups</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Advanced Analytics</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-read-linear"></iconify-icon> Auto-Payouts</li>
</ul>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<h3 className="font-medium text-slate-900 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900">Custom</span>
</div>
<p className="text-sm text-slate-500 mb-8 h-10">For large organizations requiring specific compliance.</p>
<button className="w-full py-3 bg-slate-50 text-slate-900 font-medium rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">Contact Sales</button>
<div className="mt-8 pt-8 border-t border-slate-100">
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> Dedicated Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> Custom API Integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-slate-400" icon="solar:check-read-linear"></iconify-icon> White-label Option</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="download">
<div className="min-h-screen bg-white">

<div className="bg-primary pt-24 pb-32 px-6 text-center">
<div className="w-16 h-16 bg-white/10 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
<iconify-icon className="text-white text-3xl" icon="solar:cloud-download-linear"></iconify-icon>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Download Kameti Software</h1>
<p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Access the full secure admin and member system on your device. Manage your funds with native performance.</p>
</div>

<div className="max-w-5xl mx-auto px-6 -mt-16 pb-24">
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
<button className="px-8 py-4 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl min-w-[200px]">
<iconify-icon icon="mdi:microsoft-windows" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] text-slate-400 uppercase tracking-wide">Get for</div>
<div className="font-medium text-sm">Windows</div>
</div>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-lg min-w-[200px]">
<iconify-icon icon="mdi:apple" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Get for</div>
<div className="font-medium text-sm">macOS</div>
</div>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-lg min-w-[200px]">
<iconify-icon icon="mdi:linux" width="24"></iconify-icon>
<div className="text-left">
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Get for</div>
<div className="font-medium text-sm">Linux</div>
</div>
</button>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-sm">
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Version</div>
<div className="text-sm font-semibold text-slate-900">v2.4.1 Stable</div>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Size</div>
<div className="text-sm font-semibold text-slate-900">142 MB</div>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">License</div>
<div className="text-sm font-semibold text-slate-900">Commercial</div>
</div>
<div>
<div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Last Updated</div>
<div className="text-sm font-semibold text-slate-900">Oct 24, 2023</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section" id="help">
<div className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">

<div className="flex flex-col items-center text-center mb-16">
<div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
<iconify-icon icon="solar:chat-round-line-linear" width="32"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">How can we help?</h1>
<p className="text-slate-500">Search our knowledge base or contact support directly.</p>

<div className="mt-8 w-full max-w-md relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="Search for answers..." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Send us a message</h3>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Name</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Phone</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" placeholder="+91..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Email</label>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm resize-none" placeholder="Describe your issue..." rows="4"></textarea>
</div>
<button className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors w-full" type="button">Submit Ticket</button>
</form>
</div>

<div className="space-y-4">
<div className="p-5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-primary" icon="solar:card-recive-linear"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm">Payment Issues</h4>
</div>
<p className="text-xs text-slate-500 pl-7">Transaction failures, refunds.</p>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-primary" icon="solar:user-id-linear"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm">Account &amp; KYC</h4>
</div>
<p className="text-xs text-slate-500 pl-7">Verification pending, login.</p>
</div>
<div className="p-5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-primary" icon="solar:settings-linear"></iconify-icon>
<h4 className="font-medium text-slate-900 text-sm">Technical Support</h4>
</div>
<p className="text-xs text-slate-500 pl-7">Bugs, app crashes.</p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 text-center">
<div className="text-xs text-slate-400 mb-1">Direct Email</div>
<div className="text-sm font-medium text-slate-900">support@kametifund.com</div>
<div className="text-[10px] text-green-600 mt-2 bg-green-50 inline-block px-2 py-1 rounded">Avg response: 2 hrs</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">KametiFund</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Security</a>
<a className="hover:text-slate-900 transition-colors" href="#">Status</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 KametiFund Inc.
            </div>
</div>
</footer>


    </>
  );
}
