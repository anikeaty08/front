import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0 z-10">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<span className="text-lg font-semibold tracking-tighter text-gray-900">KOLI</span>
</div>

<nav className="flex-1 overflow-y-auto py-5 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon> Orders
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> Customers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:archive-linear" strokeWidth="1.5"></iconify-icon> Inventory
            </a>
<div className="pt-4 pb-2 px-3">
<p className="text-xs font-medium text-gray-400 tracking-wider uppercase">System</p>
</div>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon> Resolution Center
                </div>
</a>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#7C3AED] bg-purple-50 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Settings &amp; Rates
            </a>
</nav>

<div className="p-4 border-t border-gray-100 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-xs font-medium text-purple-700">SA</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Super Admin</p>
<p className="text-xs text-gray-500 truncate">System Control</p>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] relative z-0 h-full overflow-hidden">

<header className="bg-white border-b border-gray-200 shrink-0">
<div className="h-16 flex items-center justify-between px-8">
<div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Global Control Center</h1>
</div>

<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#E85D04] hover:bg-[#D05303] rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#E85D04]/30 focus:ring-offset-1">
<iconify-icon className="text-lg" icon="solar:upload-track-node-linear" strokeWidth="1.5"></iconify-icon>
                    Update Globally
                </button>
</div>

<div className="px-8 flex gap-8">
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors">General</button>
<button className="pb-3 text-sm font-medium text-[#7C3AED] border-b-2 border-[#7C3AED] transition-colors">Financial Rates</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors">Team &amp; Roles</button>
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-900 border-b-2 border-transparent transition-colors">Security &amp; Approvals</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">

<div className="col-span-12 xl:col-span-7 space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
<iconify-icon className="text-gray-500 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
<h2 className="text-sm font-semibold text-gray-900">Financial Rates &amp; Tariffs</h2>
</div>
<div className="p-6 space-y-8">

<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Currency Matrix</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">RMB to FCFA Base Rate</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-gray-400 text-sm">¥</span>
<input className="w-full pl-8 pr-12 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-shadow" type="text" value="85.50"/>
<span className="absolute right-3 text-gray-400 text-xs font-medium">FCFA</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">USD to FCFA Base Rate</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-gray-400 text-sm">$</span>
<input className="w-full pl-8 pr-12 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-shadow" type="text" value="610.25"/>
<span className="absolute right-3 text-gray-400 text-xs font-medium">FCFA</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Logistics Tariffs (Per KG)</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Air Cargo Price</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-gray-400 text-sm">✈️</span>
<input className="w-full pl-9 pr-12 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-shadow" type="text" value="8500"/>
<span className="absolute right-3 text-gray-400 text-xs font-medium">FCFA</span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-700">Sea Cargo Price</label>
<div className="relative flex items-center">
<span className="absolute left-3 text-gray-400 text-sm">🚢</span>
<input className="w-full pl-9 pr-12 py-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] transition-shadow" type="text" value="2500"/>
<span className="absolute right-3 text-gray-400 text-xs font-medium">FCFA</span>
</div>
</div>
</div>
</div>

<div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100 flex items-center justify-between">
<div>
<h4 className="text-sm font-medium text-purple-900">Global Service Charge</h4>
<p className="text-xs text-purple-700/80 mt-0.5">Automated fee added to every order's subtotal.</p>
</div>
<div className="relative w-24">
<input className="w-full pr-8 pl-3 py-1.5 text-sm font-medium text-gray-900 border border-purple-200 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="5.0"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-500 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h2 className="text-sm font-semibold text-gray-900">Team &amp; Roles</h2>
</div>
<span className="text-xs font-medium text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">12 Active Admins</span>
</div>
<div className="p-6">

<div className="mb-6">
<label className="text-xs font-medium text-gray-700 mb-2 block">Invite New Member</label>
<div className="flex gap-3">
<input className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" placeholder="Email address" type="email"/>
<select className="px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-white text-gray-700 w-40">
<option>Support</option>
<option>Logistics</option>
<option>Editor</option>
<option>Super Admin</option>
</select>
<button className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors">Invite</button>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Recent Audit Trail</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 bg-gray-50/50 rounded-lg border border-gray-100">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[10px] font-medium text-blue-700">MR</span>
</div>
<div>
<p className="text-sm text-gray-900"><span className="font-medium">Marcus</span> changed <span className="font-medium">Air Cargo Price</span> from 8200 to 8500 FCFA.</p>
<p className="text-xs text-gray-400 mt-0.5">Today, 10:42 AM</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 hover:bg-gray-50/50 rounded-lg transition-colors">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0 mt-0.5">
<span className="text-[10px] font-medium text-orange-700">SJ</span>
</div>
<div>
<p className="text-sm text-gray-900"><span className="font-medium">Sarah</span> approved a refund of <span className="font-medium">65,000 FCFA</span> for Order #519004.</p>
<p className="text-xs text-gray-400 mt-0.5">Yesterday, 15:20 PM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 xl:col-span-5 space-y-6">

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
<iconify-icon className="text-gray-500 text-lg" icon="solar:shield-check-linear"></iconify-icon>
<h2 className="text-sm font-semibold text-gray-900">Security &amp; Approvals</h2>
</div>
<div className="p-6 space-y-6">

<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-gray-900">High-Value Approval Workflow</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Require Super-Admin approval for refunds or weight adjustments above the threshold.</p>
<div className="mt-3 flex items-center gap-2">
<span className="text-xs font-medium text-gray-700">Threshold:</span>
<input className="w-24 px-2 py-1 text-xs border border-gray-200 rounded text-center focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="50,000"/>
<span className="text-xs text-gray-500">FCFA</span>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7C3AED]"></div>
</label>
</div>
<hr className="border-gray-100"/>

<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-gray-900">Enforce 2FA for Admins</h3>
<p className="text-xs text-gray-500 mt-1 leading-relaxed">Mandate OTP or biometric verification for all staff dashboard logins.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7C3AED]"></div>
</label>
</div>
<hr className="border-gray-100"/>

<div>
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-gray-900">IP Whitelisting</h3>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7C3AED]"></div>
</label>
</div>
<p className="text-xs text-gray-500 mb-3">Restrict panel access to specific office networks.</p>
<textarea className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] bg-gray-50 opacity-50 cursor-not-allowed" disabled="" placeholder="e.g. 192.168.1.1, 10.0.0.1" rows="2"></textarea>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2 bg-gray-50/50">
<iconify-icon className="text-gray-500 text-lg" icon="solar:settings-minimalistic-linear"></iconify-icon>
<h2 className="text-sm font-semibold text-gray-900">General &amp; Maintenance</h2>
</div>
<div className="p-6 space-y-6">

<div className="p-4 bg-orange-50/50 border border-[#E85D04]/20 rounded-xl flex items-start justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-[#E85D04] flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon> Maintenance Mode
                                    </h3>
<p className="text-xs text-gray-600 mt-1 leading-relaxed">Pause the mobile app for users. Shows an "Under Maintenance" screen globally.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#E85D04]"></div>
</label>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">App Support Links</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<input className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="+221 77 123 45 67"/>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="support@koli.app"/>
</div>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">App Version Control</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-gray-700">Min. iOS Version</label>
<input className="w-full px-3 py-1.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="2.4.1"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-gray-700">Min. Android Version</label>
<input className="w-full px-3 py-1.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-md focus:outline-none focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED]" type="text" value="2.4.0"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
