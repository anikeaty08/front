import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function switchTab(tabId) {
// Hide all content views
document.querySelectorAll('.tab-content').forEach(el => {
el.classList.add('hidden');
el.classList.remove('fade-in');
});
// Remove active styles from all buttons
document.querySelectorAll('.tab-btn').forEach(btn => {
btn.classList.remove('border-[#0066CC]', 'text-[#0066CC]', 'font-bold');
btn.classList.add('border-transparent', 'text-gray-500', 'font-medium');
});
// Show selected content
const content = document.getElementById('view-' + tabId);
content.classList.remove('hidden');
content.classList.add('fade-in');
// Add active styles to clicked button
const btn = document.getElementById('btn-' + tabId);
btn.classList.remove('border-transparent', 'text-gray-500', 'font-medium');
btn.classList.add('border-[#0066CC]', 'text-[#0066CC]', 'font-bold');
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm z-0"></div>

<main className="relative z-10 bg-white w-full max-w-[900px] h-[90vh] rounded-xl shadow-2xl flex flex-col overflow-hidden m-4">

<header className="shrink-0 bg-white border-b border-gray-200 pt-6 px-8 pb-0 z-20">
<div className="flex items-start justify-between mb-6">
<div className="space-y-1">
<h1 className="text-xl font-bold text-[#333333] tracking-tight">Uganda Ultimate Primate Safari</h1>
<div className="flex items-center gap-3">
<span className="text-base text-gray-500">15-23 February 2026 (9 days)</span>
<div className="group relative cursor-pointer">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
                                Provisional
                                <div className="w-2 h-2 bg-white rounded-full border-2 border-blue-500"></div>
</span>
</div>
</div>
</div>
<button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<nav className="flex items-center gap-8 border-b border-transparent">
<button className="tab-btn pb-3 border-b-[3px] border-[#0066CC] text-[#0066CC] font-bold text-sm px-1 transition-colors" id="btn-overview" onclick="switchTab('overview')">Overview</button>
<button className="tab-btn pb-3 border-b-[3px] border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm px-1 transition-colors" id="btn-logistics" onclick="switchTab('logistics')">Logistics</button>
<button className="pb-3 border-b-[3px] border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm px-1 transition-colors flex items-center gap-1.5">
                    Bookings <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-bold">4</span>
</button>
<button className="pb-3 border-b-[3px] border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm px-1 transition-colors">Pricing</button>
<button className="pb-3 border-b-[3px] border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm px-1 transition-colors">Communications</button>
</nav>
</header>

<div className="modal-content overflow-y-auto bg-gray-50/50 p-8 flex-1 relative">

<div className="tab-content space-y-6 fade-in" id="view-overview">

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm font-mono text-gray-400 select-all">ID: UG-PRI-2602-001</span>
</div>

<div className="relative flex items-center justify-between w-full px-2 pt-2 pb-6">
<div className="absolute top-[18px] left-0 w-full h-[2px] bg-gray-200 -z-10"></div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2">
<div className="w-6 h-6 rounded-full bg-[#00AA44] flex items-center justify-center text-white border-2 border-white shadow-sm">
<iconify-icon icon="solar:check-read-linear" strokeWidth="3" width="14"></iconify-icon>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-xs font-medium text-gray-700">Created</span>
<span className="text-[10px] text-gray-400">12 Dec 25</span>
</div>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2">
<div className="w-6 h-6 rounded-full bg-[#00AA44] flex items-center justify-center text-white border-2 border-white shadow-sm">
<iconify-icon icon="solar:check-read-linear" strokeWidth="3" width="14"></iconify-icon>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-xs font-medium text-gray-700">Provisional</span>
<span className="text-[10px] text-gray-400">15 Dec 25</span>
</div>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-blue-100 step-active-ring"></div>
<div className="relative w-8 h-8 rounded-full bg-[#0066CC] text-white flex items-center justify-center border-2 border-white shadow-md z-10">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</div>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white z-20"></div>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-xs font-bold text-[#0066CC]">Confirmed</span>
<span className="text-[10px] text-red-500 font-medium">Action Needed</span>
</div>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center"></div>
<span className="text-xs text-gray-500 mt-1">Booking Open</span>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center"></div>
<span className="text-xs text-gray-500 mt-1">Min Met (6)</span>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center"></div>
<span className="text-xs text-gray-500 mt-1">Full (10)</span>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center"></div>
<span className="text-xs text-gray-500 mt-1">Departed</span>
</div>

<div className="flex flex-col items-center gap-2 bg-gray-50/50 z-10 px-2 opacity-50">
<div className="w-6 h-6 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center"></div>
<span className="text-xs text-gray-500 mt-1">Completed</span>
</div>
</div>
</div>

<section className="bg-white rounded-lg border border-gray-200 border-l-4 border-l-[#FF8800] p-5 shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-bold text-[#333333]">Capacity &amp; Bookings</h2>
<span className="text-xs font-medium text-gray-500">40% Filled</span>
</div>
<div className="mb-2">
<div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
<span className="font-medium text-gray-700">4 of 10 seats booked</span>
<span className="text-gray-400">6 seats remaining</span>
</div>
<div className="flex gap-1 h-6">
<div className="flex-1 bg-[#FFB700] rounded-l-md border border-[#E5A500]"></div>
<div className="flex-1 bg-[#FFB700] border border-[#E5A500]"></div>
<div className="flex-1 bg-[#FFB700] border border-[#E5A500] relative group"></div>
<div className="flex-1 bg-[#FFB700] border border-[#E5A500]"></div>
<div className="flex-1 bg-gray-100 border border-gray-200"></div>
<div className="flex-1 bg-gray-100 border border-gray-200"></div>
<div className="flex-1 bg-gray-100 border border-gray-200"></div>
<div className="flex-1 bg-gray-100 border border-gray-200"></div>
<div className="flex-1 bg-gray-100 border border-gray-200"></div>
<div className="flex-1 bg-gray-100 border border-gray-200 rounded-r-md"></div>
</div>
</div>
<div className="flex items-center gap-8 mb-4 mt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-500">Bookings</span>
<span className="text-base font-bold text-gray-900">4 confirmed</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500">Available</span>
<span className="text-base text-gray-700">6 seats</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500 flex items-center gap-1">Min pax <iconify-icon className="text-gray-400" icon="solar:info-circle-linear"></iconify-icon></span>
<span className="text-base text-gray-700">6 required</span>
</div>
</div>
<div className="bg-[#FFF3E0] border-l-4 border-[#FF8800] p-3 rounded-r-md flex items-center justify-between">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#FF8800] shrink-0 mt-0.5" icon="solar:danger-triangle-bold" width="18"></iconify-icon>
<div>
<p className="text-sm font-semibold text-gray-800">Minimum pax deadline: 30 days before departure (15 Jan 2026) — <span className="text-[#D32F2F] font-bold">OVERDUE</span></p>
<p className="text-xs text-gray-600 mt-0.5">Promote departure or consider cancellation</p>
</div>
</div>
<button className="bg-white border border-[#FF8800] text-[#FF8800] hover:bg-orange-50 px-3 py-1.5 rounded text-xs font-medium transition-colors">
                            Manage Minimum Pax
                        </button>
</div>
</section>

<section className="bg-[#E8F5E9] rounded-lg border border-[#C8E6C9] p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-bold text-[#333333]">Financial Projection</h2>
<iconify-icon className="text-[#2E7D32]" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-8 relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#C8E6C9]"></div>
<div className="pr-4">
<div className="flex items-baseline justify-between mb-2">
<span className="text-sm font-semibold text-gray-700">Current (4 pax)</span>
<span className="text-xs text-gray-500">Actual</span>
</div>
<div className="space-y-1 mb-4">
<div className="flex justify-between text-sm">
<span className="text-gray-600">Revenue</span>
<span className="font-bold text-gray-900">N$1,120,000</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Costs locked</span>
<span className="text-gray-600">N$420,000</span>
</div>
</div>
<div className="pt-3 border-t border-[#C8E6C9]">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-xs text-gray-500">Projected Profit</span>
<span className="text-base font-bold text-[#2E7D32]">N$700,000</span>
</div>
<span className="text-sm font-medium text-gray-600 bg-green-100 px-2 py-0.5 rounded">62% margin</span>
</div>
</div>
</div>
<div className="pl-4">
<div className="flex items-baseline justify-between mb-2">
<span className="text-sm font-semibold text-gray-700">If Full (10 pax)</span>
<span className="text-xs text-gray-500">Forecast</span>
</div>
<div className="space-y-1 mb-4">
<div className="flex justify-between text-sm">
<span className="text-gray-600">Projected Revenue</span>
<span className="font-bold text-gray-900">N$2,800,000</span>
</div>
<div className="flex justify-between text-xs">
<span className="text-gray-500">Total costs</span>
<span className="text-gray-600">N$600,000</span>
</div>
</div>
<div className="pt-3 border-t border-[#C8E6C9]">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-xs text-gray-500">Potential Profit</span>
<span className="text-base font-bold text-[#1B5E20]">N$2,200,000</span>
</div>
<span className="text-sm font-bold text-[#1B5E20] bg-green-200 px-2 py-0.5 rounded">79% margin</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
<h2 className="text-base font-bold text-[#333333] mb-4">Action Items &amp; Status</h2>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-[#FFF3E0] border-l-4 border-[#FF8800] rounded-r-md">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF8800]" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-800">Lodge confirmations pending (2 of 4 lodges confirmed)</span>
</div>
<button className="text-sm font-medium text-[#0066CC] hover:underline bg-transparent border-0 cursor-pointer" onclick="switchTab('logistics')">View Logistics tab →</button>
</div>
<div className="flex items-center justify-between p-3 bg-[#FFF3E0] border-l-4 border-[#FF8800] rounded-r-md">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#FF8800]" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-800">Minimum pax not met (6 required, 4 booked) - <span className="font-medium text-red-600">Deadline Passed</span></span>
</div>
<a className="text-sm font-medium text-[#0066CC] hover:underline" href="#">Send booking reminder</a>
</div>
<div className="flex items-center justify-between p-3 bg-[#E8F5E9] border-l-4 border-[#00AA44] rounded-r-md">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#00AA44]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-gray-800">Guide assigned: <span className="font-medium">Marc Cronje</span> (confirmed, available)</span>
</div>
<a className="text-sm font-medium text-[#0066CC] hover:underline" href="#">View profile</a>
</div>
</div>
</section>
</div>

<div className="tab-content space-y-6 hidden" id="view-logistics">

<div className="grid grid-cols-3 gap-4">
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-gray-400" icon="solar:bed-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Accommodation</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-gray-900">50%</span>
<span className="text-xs text-[#FF8800] font-medium">2 Pending</span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-gray-400" icon="solar:bus-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Transport</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-gray-900">Confirmed</span>
<span className="text-xs text-[#00AA44] font-medium">LC-08</span>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-gray-400" icon="solar:ticket-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Permits</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-xl font-bold text-gray-900">4/4</span>
<span className="text-xs text-[#00AA44] font-medium">Secured</span>
</div>
</div>
</div>

<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<div className="flex items-center justify-between p-5 border-b border-gray-100">
<h2 className="text-base font-bold text-[#333333]">Accommodation Status</h2>
<button className="text-xs text-[#0066CC] font-medium hover:underline">Send follow-up emails</button>
</div>
<div className="divide-y divide-gray-100">

<div className="flex items-center p-4 hover:bg-gray-50 transition-colors">
<input checked="" className="custom-checkbox w-4 h-4 rounded border-gray-300 text-[#0066CC] focus:ring-[#0066CC] mr-4 opacity-50" disabled="" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">Boma Guest House</span>
<span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono">NT-1</span>
</div>
<span className="text-xs text-gray-500">Entebbe • 1 Night • 4 Rooms (Twin)</span>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-bold text-[#00AA44] flex items-center justify-end gap-1">
                                        Confirmed <iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-gray-400">Ref: BG-9928</div>
</div>
<button className="p-1 text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center p-4 bg-[#FFF9F0] hover:bg-[#FFF3E0] transition-colors border-l-4 border-l-[#FF8800]">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-[#0066CC] focus:ring-[#0066CC] mr-4 cursor-pointer" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">Primate Lodge</span>
<span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono">NT-2,3</span>
</div>
<span className="text-xs text-gray-500">Kibale Forest • 2 Nights • 4 Rooms (Twin)</span>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-bold text-[#E65100] flex items-center justify-end gap-1">
                                        Pending <iconify-icon icon="solar:clock-circle-bold" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-red-500 font-medium">Sent 5 days ago</div>
</div>
<button className="p-1 text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center p-4 hover:bg-gray-50 transition-colors">
<input checked="" className="custom-checkbox w-4 h-4 rounded border-gray-300 text-[#0066CC] focus:ring-[#0066CC] mr-4 opacity-50" disabled="" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">Engagi Lodge</span>
<span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono">NT-4,5</span>
</div>
<span className="text-xs text-gray-500">Bwindi • 2 Nights • 4 Rooms (Twin)</span>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-bold text-[#00AA44] flex items-center justify-end gap-1">
                                        Confirmed <iconify-icon icon="solar:check-circle-bold" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-gray-400">Ref: EL-2026-FEB</div>
</div>
<button className="p-1 text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center p-4 bg-[#FFF9F0] hover:bg-[#FFF3E0] transition-colors border-l-4 border-l-[#FF8800]">
<input className="custom-checkbox w-4 h-4 rounded border-gray-300 text-[#0066CC] focus:ring-[#0066CC] mr-4 cursor-pointer" type="checkbox"/>
<div className="flex-1">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold text-gray-900">Ishasha Wilderness Camp</span>
<span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-mono">NT-6,7</span>
</div>
<span className="text-xs text-gray-500">QENP • 2 Nights • 4 Rooms (Twin)</span>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<div className="text-xs font-bold text-[#E65100] flex items-center justify-end gap-1">
                                        Pending <iconify-icon icon="solar:clock-circle-bold" width="12"></iconify-icon>
</div>
<div className="text-[10px] text-gray-400">Sent yesterday</div>
</div>
<button className="p-1 text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-2 gap-6">

<section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-bold text-[#333333] flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:jeep-linear" width="18"></iconify-icon>
                                Vehicle Assignment
                            </h2>
<span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmed</span>
</div>
<div className="flex items-start gap-3">
<div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:wheel-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-gray-900">Toyota Land Cruiser</div>
<div className="text-xs text-gray-500">Reg: UBA 889X • 7 Seater • Pop-top</div>
<div className="mt-2 flex gap-2">
<button className="text-[10px] border border-gray-200 hover:bg-gray-50 px-2 py-1 rounded transition-colors">Change Vehicle</button>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-bold text-[#333333] flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:user-id-linear" width="18"></iconify-icon>
                                Crew
                            </h2>
<span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmed</span>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">MC</div>
<div>
<div className="text-sm font-bold text-gray-900">Marc Cronje</div>
<div className="text-xs text-gray-500">Lead Guide • English • 8 yrs exp</div>
<a className="text-[10px] text-[#0066CC] hover:underline mt-1 block" href="#">View Schedule</a>
</div>
</div>
</section>
</div>
</div>
</div>
</main>

    </>
  );
}
