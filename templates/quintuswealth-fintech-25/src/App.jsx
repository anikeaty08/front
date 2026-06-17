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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // --- Connect Wallet Logic ---
            const connectBtn = document.getElementById('connect-wallet-btn');
            const connectText = document.getElementById('connect-wallet-text');
            const totalBalance = document.getElementById('total-balance');
            const depositBtn = document.getElementById('deposit-btn');
            
            let isConnected = false;

            connectBtn.addEventListener('click', () => {
                if (!isConnected) {
                    // Simulating loading state
                    connectBtn.innerHTML = `<iconify-icon icon="solar:refresh-circle-linear" stroke-width="1.5" class="animate-spin"></iconify-icon> Connecting...`;
                    
                    setTimeout(() => {
                        isConnected = true;
                        
                        // Update Wallet Button
                        connectBtn.innerHTML = `<iconify-icon icon="solar:wallet-check-linear" stroke-width="1.5"></iconify-icon> 0x7F...3B9`;
                        connectBtn.classList.replace('text-emerald-400', 'text-emerald-300');
                        connectBtn.classList.replace('bg-emerald-500/10', 'bg-emerald-500/20');
                        connectBtn.classList.replace('border-emerald-500/20', 'border-emerald-500/40');
                        
                        // Update Balance to show working state
                        totalBalance.innerHTML = `$450.00 <span class="text-sm text-zinc-500 font-normal">USDT</span>`;
                        
                        // Update Deposit Button state
                        depositBtn.classList.replace('bg-white', 'bg-emerald-500');
                        depositBtn.classList.replace('text-zinc-950', 'text-white');
                        depositBtn.classList.replace('hover:bg-zinc-200', 'hover:bg-emerald-400');
                        depositBtn.innerText = 'Confirm Deposit (0.00 BNB Fee)';

                    }, 1200); // 1.2s delay to simulate web3 connection
                }
            });

            // --- Admin Panel Logic ---
            const adminLink = document.getElementById('admin-link');
            const adminModal = document.getElementById('admin-modal');
            const closeAdminBtn = document.getElementById('close-admin-btn');

            // Open Admin
            adminLink.addEventListener('click', (e) => {
                e.preventDefault();
                adminModal.classList.remove('hidden');
                adminModal.classList.add('flex');
            });

            // Close Admin
            closeAdminBtn.addEventListener('click', () => {
                adminModal.classList.add('hidden');
                adminModal.classList.remove('flex');
            });

            // Close on outside click
            adminModal.addEventListener('click', (e) => {
                if (e.target === adminModal) {
                    adminModal.classList.add('hidden');
                    adminModal.classList.remove('flex');
                }
            });

            // Mock Admin Table Actions
            const approveBtns = document.querySelectorAll('.approve-btn');
            const rejectBtns = document.querySelectorAll('.reject-btn');

            approveBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const container = this.closest('.action-container');
                    container.innerHTML = '<span class="text-xs text-emerald-400 font-medium px-2 py-1 bg-emerald-500/10 rounded">Approved</span>';
                });
            });

            rejectBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const container = this.closest('.action-container');
                    container.innerHTML = '<span class="text-xs text-red-400 font-medium px-2 py-1 bg-red-500/10 rounded">Rejected</span>';
                });
            });
        });
    
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
      
<div className="min-h-screen flex w-full">

<aside className="w-64 border-r border-zinc-800/60 bg-zinc-950/50 backdrop-blur-xl h-screen fixed hidden lg:flex flex-col py-8 px-6 z-20">
<div className="flex items-center gap-2 mb-12">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zinc-100 to-zinc-400 flex items-center justify-center">
<span className="text-zinc-900 font-semibold tracking-tighter text-sm">QW</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">QuintusWealth</span>
</div>
<nav className="space-y-1 flex-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-900/50 text-white font-medium text-sm border border-zinc-800/50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/30 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
                    ROI Plan
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/30 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
                    Matrix Plan
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/30 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    Deposit &amp; Withdraw
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900/30 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Referrals
                </a>
</nav>
<div className="mt-auto pt-8 border-t border-zinc-800/60">
<div className="flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-medium">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">John Doe</span>
<span className="text-xs text-zinc-500">Free Member</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">

<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white">Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your investments and matrix network.</p>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-500/20 transition-all" id="connect-wallet-btn">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
<span id="connect-wallet-text">Connect Wallet</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-zinc-400">Total Balance</span>
<iconify-icon className="text-zinc-500 text-lg" icon="solar:dollar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white mb-1" id="total-balance">$0.00 <span className="text-sm text-zinc-500 font-normal">USDT</span></div>
<div className="text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon> Includes Admin Bonus
                        </div>
</div>
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-zinc-800/20 rounded-full blur-2xl"></div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-zinc-400">Active ROI Investment</span>
<iconify-icon className="text-zinc-500 text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white mb-1">$0.00</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 mt-3 mb-1">
<div className="bg-zinc-400 h-1.5 rounded-full" style={{width: '0%'}}></div>
</div>
<div className="flex justify-between text-xs text-zinc-500">
<span>Earned: $0.00</span>
<span>Target (3X): $0.00</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-5 flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-sm font-medium text-zinc-400">Matrix Status</span>
<iconify-icon className="text-zinc-500 text-lg" icon="solar:structure-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white mb-1">Inactive</div>
<div className="text-xs text-zinc-500">0 / 30 Network Members</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

<div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50">
<iconify-icon className="text-white text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-medium tracking-tight text-white">ROI Plan</h2>
<p className="text-xs text-zinc-500">Earn 0.1% to 0.13% randomly daily.</p>
</div>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between text-sm py-2 border-b border-zinc-800/50">
<span className="text-zinc-400">Minimum Deposit</span>
<span className="text-white font-medium">$1.00 USDT</span>
</div>
<div className="flex justify-between text-sm py-2 border-b border-zinc-800/50">
<span className="text-zinc-400">Total Return</span>
<span className="text-white font-medium">300% (3X)</span>
</div>
<div className="flex justify-between text-sm py-2 border-b border-zinc-800/50">
<span className="text-zinc-400">Referral Commission</span>
<span className="text-white font-medium">L1: 8% | L2: 3%</span>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-medium text-zinc-400">Amount to Invest (USDT BSC)</label>
<div className="relative">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-4 pr-16 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" placeholder="Enter amount..." type="number"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-400 hover:text-white px-2 py-1 bg-zinc-800/50 rounded">MAX</button>
</div>
<div className="p-3 bg-zinc-950/50 border border-zinc-800/50 rounded-lg mt-3">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-zinc-500">Official Deposit Address</span>
<button className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon> Copy
                                </button>
</div>
<div className="text-xs font-mono text-zinc-300 break-all select-all">
                                0xd34428D759322d5F63C248Dcc55891e3BfE68FD0
                            </div>
</div>
<button className="w-full bg-white text-zinc-950 font-medium text-sm py-2.5 rounded-lg hover:bg-zinc-200 transition-colors mt-2" id="deposit-btn">
                            Deposit &amp; Invest via Web3
                        </button>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6">
<h2 className="text-lg font-medium tracking-tight text-white mb-1">Withdraw Funds</h2>
<p className="text-xs text-zinc-500 mb-5">Manual approval required. Minimum $3.00.</p>
<div className="flex gap-3">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2.5 pl-7 pr-4 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" placeholder="0.00" type="number"/>
</div>
<button className="bg-zinc-800 text-white border border-zinc-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-700 transition-colors whitespace-nowrap">
                                Request
                            </button>
</div>
</div>

<div className="bg-zinc-900/20 border border-zinc-800/60 rounded-2xl p-6">
<h2 className="text-lg font-medium tracking-tight text-white mb-1">Account Details</h2>
<p className="text-xs text-zinc-500 mb-5">Complete your profile to unlock all features.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">First Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" type="text"/>
</div>
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">Last Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">Username</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" type="text"/>
</div>
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">WhatsApp</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" type="text"/>
</div>
</div>
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">E-mail</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">Password</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-all" type="password"/>
</div>
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">Re-type Password</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-all" type="password"/>
</div>
</div>
<div>
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block flex justify-between">
<span>Referral Code (Optional)</span>
<span className="text-zinc-600 normal-case">Default: Admin</span>
</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-600 transition-all" placeholder="Enter code" type="text"/>
</div>
<button className="w-full bg-zinc-800 text-white font-medium text-sm py-2 rounded-lg hover:bg-zinc-700 transition-colors" type="button">
                                Save Profile
                            </button>
</form>
</div>
</div>
</div>

<div className="mb-10">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-xl font-medium tracking-tight text-white mb-1">2x4 Matrix Plan</h2>
<p className="text-sm text-zinc-500">7 Levels. Buy in order. Earn up to 4 levels deep (12%, 10%, 8%, 5%).</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="border border-emerald-500/30 bg-emerald-500/5 rounded-xl p-5 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Level 1</span>
<span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/20 text-emerald-300">Next to Buy</span>
</div>
<div className="text-2xl font-medium tracking-tight text-white mb-4">$10</div>
<button className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 font-medium text-sm py-2 rounded-lg hover:bg-emerald-500 hover:text-zinc-950 transition-all">
                            Purchase Level
                        </button>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-75">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Level 2</span>
<iconify-icon className="text-zinc-600" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-300 mb-4">$20</div>
<button className="w-full bg-zinc-950 text-zinc-600 border border-zinc-800 font-medium text-sm py-2 rounded-lg cursor-not-allowed" disabled="">
                            Requires L1
                        </button>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Level 3</span>
<iconify-icon className="text-zinc-700" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-500 mb-4">$40</div>
<button className="w-full bg-zinc-950 text-zinc-700 border border-zinc-800/50 font-medium text-sm py-2 rounded-lg cursor-not-allowed" disabled="">
                            Locked
                        </button>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-50">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Level 4</span>
<iconify-icon className="text-zinc-700" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-500 mb-4">$80</div>
<button className="w-full bg-zinc-950 text-zinc-700 border border-zinc-800/50 font-medium text-sm py-2 rounded-lg cursor-not-allowed" disabled="">
                            Locked
                        </button>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-50 hidden md:block">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Level 5</span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-500 mb-4">$160</div>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-50 hidden md:block">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Level 6</span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-500 mb-4">$320</div>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/20 rounded-xl p-5 relative overflow-hidden opacity-50 hidden md:block">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Level 7</span>
</div>
<div className="text-2xl font-medium tracking-tight text-zinc-500 mb-4">$640</div>
</div>
</div>
</div>

<footer className="border-t border-zinc-800/60 pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2023 QuintusWealth. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Support</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="text-zinc-300 font-medium hover:text-white transition-colors flex items-center gap-1 border-l border-zinc-800 pl-4" href="#" id="admin-link">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon> Admin Access
                    </a>
</div>
</footer>
</main>
</div>

<div className="fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm hidden items-center justify-center p-4" id="admin-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
<div className="flex justify-between items-center p-6 border-b border-zinc-800/60">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-medium tracking-tight text-white">Admin Control Center</h2>
<p className="text-xs text-zinc-500">Manage system parameters and users.</p>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors p-2 bg-zinc-800/50 hover:bg-zinc-800 rounded-lg" id="close-admin-btn">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4">
<span className="text-xs font-medium text-zinc-500">Total System Users</span>
<div className="text-xl font-medium text-white mt-1">1,248</div>
</div>
<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4">
<span className="text-xs font-medium text-zinc-500">Total ROI Distributed</span>
<div className="text-xl font-medium text-white mt-1">$45,290.00</div>
</div>
<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-4">
<span className="text-xs font-medium text-zinc-500">Pending Withdrawals</span>
<div className="text-xl font-medium text-emerald-400 mt-1">3</div>
</div>
</div>

<div className="bg-zinc-950/50 border border-zinc-800/50 rounded-xl p-5">
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Global ROI Settings
                    </h3>
<div className="flex items-end gap-4">
<div className="flex-1">
<label className="text-xs uppercase tracking-wider font-medium text-zinc-500 mb-1.5 block">Current Daily Rate (%)</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg py-2 px-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-all" type="text" value="0.12"/>
</div>
<button className="bg-white text-zinc-950 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors whitespace-nowrap">
                            Update Rate
                        </button>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon> Pending Withdrawals
                    </h3>
<div className="border border-zinc-800/50 rounded-xl overflow-hidden">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-zinc-950/50 border-b border-zinc-800/50 text-xs uppercase tracking-wider text-zinc-500">
<tr>
<th className="px-4 py-3 font-medium">User</th>
<th className="px-4 py-3 font-medium">Amount</th>
<th className="px-4 py-3 font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-4 py-3 text-zinc-300">john_doe</td>
<td className="px-4 py-3 text-white font-medium">$125.00</td>
<td className="px-4 py-3 text-right">
<div className="flex justify-end gap-2 action-container">
<button className="approve-btn bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded text-xs font-medium hover:bg-emerald-500/20 transition-colors">Approve</button>
<button className="reject-btn bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded text-xs font-medium hover:bg-red-500/20 transition-colors">Reject</button>
</div>
</td>
</tr>
<tr className="hover:bg-zinc-800/20 transition-colors">
<td className="px-4 py-3 text-zinc-300">alex_invest</td>
<td className="px-4 py-3 text-white font-medium">$45.00</td>
<td className="px-4 py-3 text-right">
<div className="flex justify-end gap-2 action-container">
<button className="approve-btn bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded text-xs font-medium hover:bg-emerald-500/20 transition-colors">Approve</button>
<button className="reject-btn bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded text-xs font-medium hover:bg-red-500/20 transition-colors">Reject</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
