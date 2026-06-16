import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
        });

        // Simple view switching logic to navigate between wireframes
        function switchTab(tabId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // Show target view
            const targetView = document.getElementById('view-' + tabId);
            if(targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
            }
            
            // Handle Sidebar visibility & active states
            const sidebar = document.getElementById('main-sidebar');
            if (tabId === 'login') {
                sidebar.classList.add('hidden');
            } else {
                sidebar.classList.remove('hidden');
                
                // Reset nav item styles
                document.querySelectorAll('.nav-item').forEach(el => {
                    el.classList.remove('bg-[#27272A]', 'text-white');
                    el.classList.add('text-gray-400');
                });
                
                // Set active nav item style
                const activeNav = document.getElementById('nav-' + tabId);
                if(activeNav) {
                    activeNav.classList.remove('text-gray-400');
                    activeNav.classList.add('bg-[#27272A]', 'text-white');
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-[#111111] border-r border-[#222222] flex flex-col hidden md:flex flex-shrink-0 z-20 relative transition-all duration-300" id="main-sidebar">

<div className="h-20 flex items-center px-6 shrink-0 mt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#1A1A1A] border border-[#333] rounded-md flex items-center justify-center flex-shrink-0 shadow-sm">
<span className="text-[#D9F950] font-medium text-base">P</span>
</div>
<div className="leading-tight">
<div className="font-medium text-base text-white tracking-tight">Proposal IQ</div>
<div className="text-xs text-gray-500 mt-0.5">Management Suite</div>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<div className="px-3 mb-3 text-xs font-medium text-gray-500 uppercase tracking-widest">Main</div>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#27272A] text-white transition-colors group" href="#" id="nav-dashboard" onclick="switchTab('dashboard')">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="text-base font-medium">Dashboard</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#27272A]/50 transition-colors group" href="#" id="nav-proposals" onclick="switchTab('proposals')">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="text-base font-medium">Proposals</span>
<span className="ml-auto bg-[#183a21] text-[#4ade80] text-xs font-medium py-0.5 px-2 rounded-full border border-[#22c55e]/20">12</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#27272A]/50 transition-colors group" href="#" id="nav-clients" onclick="switchTab('clients')">
<i className="w-5 h-5" data-lucide="users"></i>
<span className="text-base font-medium">Clients</span>
</a>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#27272A]/50 transition-colors group" href="#">
<i className="w-5 h-5" data-lucide="layout-template"></i>
<span className="text-base font-medium">Templates</span>
</a>
<div className="px-3 mt-10 mb-3 text-xs font-medium text-gray-500 uppercase tracking-widest">System</div>
<a className="nav-item flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#27272A]/50 transition-colors group" href="#" id="nav-settings" onclick="switchTab('settings')">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-base font-medium">Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-500 hover:text-red-400 transition-colors group mt-2" href="#" onclick="switchTab('login')">
<i className="w-5 h-5" data-lucide="log-out"></i>
<span className="text-base font-medium">Sign out</span>
</a>
</nav>

<div className="p-4 border-t border-[#222222] shrink-0">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-[#27272A]/50 transition-colors text-left group">
<div className="w-10 h-10 rounded-md bg-[#222222] text-[#D9F950] border border-[#333] flex items-center justify-center font-medium text-base shrink-0 group-hover:border-[#555] transition-colors">
                    AT
                </div>
<div className="flex-1 overflow-hidden">
<p className="text-base font-medium text-white truncate">Alex Thompson</p>
<p className="text-xs text-gray-500 truncate mt-0.5">Strategic Lead</p>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#0A0A0A] overflow-y-auto relative">

<div className="max-w-[1200px] mx-auto w-full p-8 lg:p-12" id="app-content">

<div className="view-section block animate-fade-in" id="view-dashboard">

<header className="flex items-end justify-between mb-10">
<h1 className="text-4xl tracking-tight font-medium text-white">Dashboard</h1>
<span className="text-sm font-medium text-gray-400 uppercase tracking-widest">OCT 2024</span>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">

<div className="bg-[#141414] border border-[#222222] rounded-xl p-6 shadow-sm">
<div className="text-sm text-gray-400 mb-3">Total proposals</div>
<div className="text-4xl tracking-tight text-white font-light mb-5">24</div>
<div className="text-xs font-medium text-[#D9F950] uppercase tracking-wide">+3 THIS MONTH</div>
</div>

<div className="bg-[#141414] border border-[#222222] rounded-xl p-6 shadow-sm">
<div className="text-sm text-gray-400 mb-3">Accepted</div>
<div className="text-4xl tracking-tight text-white font-light mb-5">11</div>
<div className="text-xs font-medium text-[#D9F950] uppercase tracking-wide">46% CLOSE RATE</div>
</div>

<div className="bg-[#141414] border border-[#222222] rounded-xl p-6 shadow-sm">
<div className="text-sm text-gray-400 mb-3">Pending signature</div>
<div className="text-4xl tracking-tight text-white font-light mb-5">4</div>
<div className="text-xs font-medium text-[#fbbf24] uppercase tracking-wide">2 EXPIRING SOON</div>
</div>

<div className="bg-[#141414] border border-[#222222] rounded-xl p-6 shadow-sm">
<div className="text-sm text-gray-400 mb-3">Revenue pipeline</div>
<div className="text-4xl tracking-tight text-white font-light mb-5">$89k</div>
<div className="text-xs font-medium text-[#D9F950] uppercase tracking-wide">FROM OPEN DEALS</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl tracking-tight font-medium text-white mb-5">Recent activity</h2>
<div className="bg-[#141414] border border-[#222222] rounded-xl shadow-sm overflow-hidden">

<div className="p-5 border-b border-[#222222] flex gap-4 hover:bg-[#1A1A1A] transition-colors">
<div className="w-2 h-2 rounded-full bg-[#D9F950] mt-2 shrink-0"></div>
<div>
<p className="text-base text-gray-300"><span className="text-white font-medium">Internal Data Pipeline Revamp</span> — signed by client</p>
<p className="text-sm text-gray-500 mt-1">2 hours ago</p>
</div>
</div>

<div className="p-5 border-b border-[#222222] flex gap-4 hover:bg-[#1A1A1A] transition-colors">
<div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
<div>
<p className="text-base text-gray-300"><span className="text-white font-medium">AI-Powered Content Automation</span> — sent to Preferred Travel Group</p>
<p className="text-sm text-gray-500 mt-1">5 hours ago</p>
</div>
</div>

<div className="p-5 border-b border-[#222222] flex gap-4 hover:bg-[#1A1A1A] transition-colors">
<div className="w-2 h-2 rounded-full bg-gray-500 mt-2 shrink-0"></div>
<div>
<p className="text-base text-gray-300"><span className="text-white font-medium">Customer Service Agent AI</span> — draft created from meeting transcript</p>
<p className="text-sm text-gray-500 mt-1">Yesterday, 3:12pm</p>
</div>
</div>

<div className="p-5 border-b border-[#222222] flex gap-4 hover:bg-[#1A1A1A] transition-colors">
<div className="w-2 h-2 rounded-full bg-gray-500 mt-2 shrink-0"></div>
<div>
<p className="text-base text-gray-300"><span className="text-white font-medium">Predictive Maintenance AI</span> — draft created</p>
<p className="text-sm text-gray-500 mt-1">Oct 15</p>
</div>
</div>

<div className="p-5 flex gap-4 hover:bg-[#1A1A1A] transition-colors">
<div className="w-2 h-2 rounded-full bg-[#D9F950] mt-2 shrink-0"></div>
<div>
<p className="text-base text-gray-300"><span className="text-white font-medium">CRM Integration</span> — signed by client</p>
<p className="text-sm text-gray-500 mt-1">Oct 12</p>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-5">
<h2 className="text-xl tracking-tight font-medium text-white">Proposals overview</h2>
<button className="px-4 py-2 border border-[#333] hover:border-[#555] rounded-lg text-sm font-medium text-white bg-[#111] hover:bg-[#1A1A1A] transition-all">View all</button>
</div>
<div className="bg-[#141414] border border-[#222222] rounded-xl shadow-sm overflow-hidden overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-[#222222] text-xs font-medium text-gray-500 uppercase tracking-widest bg-[#111111]/50">
<th className="p-5 font-medium">Proposal</th>
<th className="p-5 font-medium">Client</th>
<th className="p-5 font-medium">Status</th>
<th className="p-5 font-medium text-right">Value</th>
<th className="p-5 font-medium text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-[#222222]">

<tr className="hover:bg-[#1A1A1A]/50 transition-colors group">
<td className="p-5 text-base font-medium text-white">AI-Powered Content Automation</td>
<td className="p-5 text-base text-gray-400">Preferred Travel Group</td>
<td className="p-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider">In Review</span>
</td>
<td className="p-5 text-base text-white text-right">$6,360/mo</td>
<td className="p-5 text-base text-gray-500 text-right">Oct 24</td>
</tr>

<tr className="hover:bg-[#1A1A1A]/50 transition-colors group">
<td className="p-5 text-base font-medium text-white">Internal Data Pipeline Revamp</td>
<td className="p-5 text-base text-gray-400">TechFlow Solutions</td>
<td className="p-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-wider">Accepted</span>
</td>
<td className="p-5 text-base text-white text-right">$12,500</td>
<td className="p-5 text-base text-gray-500 text-right">Oct 20</td>
</tr>

<tr className="hover:bg-[#1A1A1A]/50 transition-colors group">
<td className="p-5 text-base font-medium text-white">Customer Service Agent AI</td>
<td className="p-5 text-base text-gray-400">Acme Logistics Corp.</td>
<td className="p-5">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-gray-500/10 text-gray-400 border border-gray-500/20 uppercase tracking-wider">Draft</span>
</td>
<td className="p-5 text-base text-gray-500 text-right">TBD</td>
<td className="p-5 text-base text-gray-500 text-right">Yesterday</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="view-section hidden animate-fade-in" id="view-clients">
<header className="flex items-end justify-between mb-10">
<h1 className="text-4xl tracking-tight font-medium text-white">Clients</h1>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i> Add Client
                    </button>
</header>
<div className="bg-[#141414] border border-[#222222] rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-[#222222] flex gap-4">
<div className="relative w-full max-w-md">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" data-lucide="search"></i>
<input className="w-full pl-9 pr-4 py-2 bg-[#0A0A0A] border border-[#333] rounded-lg text-base text-white focus:outline-none focus:border-[#555] placeholder-gray-600 transition-all" placeholder="Search clients..." type="text"/>
</div>
</div>
<div className="p-12 text-center flex flex-col items-center justify-center text-gray-500">
<i className="w-12 h-12 mb-4 text-gray-700" data-lucide="users"></i>
<p className="text-base">Client directory would be listed here.</p>
<p className="text-sm mt-2">Wireframe representation only.</p>
</div>
</div>
</div>

<div className="view-section hidden animate-fade-in max-w-3xl" id="view-settings">
<header className="mb-10">
<h1 className="text-4xl tracking-tight font-medium text-white">Settings</h1>
<p className="text-base text-gray-500 mt-2">Manage your account and workspace preferences.</p>
</header>
<div className="space-y-6">

<div className="bg-[#141414] border border-[#222222] rounded-xl overflow-hidden">
<div className="p-6 border-b border-[#222222]">
<h3 className="text-lg font-medium text-white tracking-tight">Profile</h3>
<p className="text-sm text-gray-500 mt-1">Update your personal details.</p>
</div>
<div className="p-6 space-y-5">
<div className="flex gap-6 items-center">
<div className="w-16 h-16 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-xl text-[#D9F950]">AT</div>
<button className="px-4 py-2 bg-[#222] hover:bg-[#333] border border-[#333] rounded-lg text-sm font-medium text-white transition-colors">Upload Avatar</button>
</div>
<div className="grid gap-2">
<label className="text-sm font-medium text-gray-300">Full Name</label>
<input className="w-full px-4 py-2.5 bg-[#0A0A0A] border border-[#333] rounded-lg text-base text-white focus:outline-none focus:border-white transition-all" type="text" value="Alex Thompson"/>
</div>
</div>
</div>

<div className="bg-[#141414] border border-[#222222] rounded-xl overflow-hidden">
<div className="p-6 border-b border-[#222222]">
<h3 className="text-lg font-medium text-white tracking-tight">Preferences</h3>
<p className="text-sm text-gray-500 mt-1">Customize your workspace experience.</p>
</div>
<div className="p-6 space-y-6">

<div className="flex items-center justify-between">
<div>
<div className="text-base font-medium text-white">Email Notifications</div>
<div className="text-sm text-gray-500 mt-1">Receive updates when a proposal is signed.</div>
</div>
<div className="relative w-11 h-6 bg-[#D9F950] rounded-full cursor-pointer flex items-center px-1 shadow-sm transition-colors" onclick="this.classList.toggle('bg-[#333]'); this.classList.toggle('bg-[#D9F950]'); this.querySelector('div').classList.toggle('translate-x-5');">
<div className="w-4 h-4 bg-black rounded-full shadow-md transform translate-x-5 transition-transform duration-200"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div>
<div className="text-base font-medium text-white">AI Content Suggestions</div>
<div className="text-sm text-gray-500 mt-1">Enable auto-completion in editor.</div>
</div>
<div className="relative w-11 h-6 bg-[#333] rounded-full cursor-pointer flex items-center px-1 shadow-sm transition-colors" onclick="this.classList.toggle('bg-[#333]'); this.classList.toggle('bg-[#D9F950]'); this.querySelector('div').classList.toggle('translate-x-5');">
<div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="view-section hidden fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center p-6" id="view-login">
<div className="w-full max-w-md">
<div className="text-center mb-10">
<div className="w-12 h-12 bg-[#1A1A1A] border border-[#333] rounded-lg flex items-center justify-center mx-auto mb-6 shadow-lg">
<span className="text-[#D9F950] font-medium text-xl">P</span>
</div>
<h1 className="text-3xl tracking-tight font-medium text-white mb-2">Welcome back</h1>
<p className="text-base text-gray-500">Sign in to your Proposal IQ account</p>
</div>
<div className="bg-[#141414] border border-[#222222] rounded-xl p-8 shadow-xl">
<form className="space-y-5" onsubmit="event.preventDefault(); switchTab('dashboard');">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">Email address</label>
<input className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-lg text-base text-white focus:outline-none focus:border-white transition-all" required="" type="email" value="alex@example.com"/>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<label className="text-sm font-medium text-gray-300">Password</label>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#333] rounded-lg text-base text-white focus:outline-none focus:border-white transition-all" required="" type="password" value="password123"/>
</div>
<button className="w-full bg-white text-black font-medium text-base py-3 rounded-lg hover:bg-gray-200 transition-colors mt-2" type="submit">
                        Sign in
                    </button>
</form>
<div className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account? <a className="text-white hover:underline" href="#">Contact Admin</a>
</div>
</div>
</div>
</div>

<style>
        /* Optional: Add a subtle fade-in for view switching */
        .animate-fade-in {
            animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>

    </>
  );
}
