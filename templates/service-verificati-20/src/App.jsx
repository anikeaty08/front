import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        const resultsContainer = document.getElementById('resultsContainer');
        const modalOverlay = document.getElementById('modalOverlay');
        const modalContent = document.getElementById('modalContent');
        const searchInput = document.getElementById('searchInput');

        function handleEnter(e) {
            if (e.key === 'Enter') {
                showResults();
            }
        }

        function showResults() {
            if(searchInput.value.trim() === "") {
                searchInput.focus();
                return;
            }
            // Show logic
            resultsContainer.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                resultsContainer.classList.remove('opacity-0', 'translate-y-4');
            }, 10);
            
            // Scroll into view smoothly
            setTimeout(() => {
                resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }

        function hideResults() {
            resultsContainer.classList.add('opacity-0', 'translate-y-4');
            setTimeout(() => {
                resultsContainer.classList.add('hidden');
            }, 300);
            searchInput.value = "";
        }

        function openModal(id, device, status, statusClass, issue, cost) {
            // Populate Data
            document.getElementById('modalId').textContent = id;
            document.getElementById('modalDevice').textContent = device;
            document.getElementById('modalIssue').textContent = issue;
            document.getElementById('modalCost').textContent = cost;
            
            const badge = document.getElementById('modalStatusBadge');
            badge.textContent = status;
            badge.className = `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium ${statusClass}`;

            // Show Modal
            modalOverlay.classList.remove('hidden');
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-30">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.location.reload()">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-lg font-medium tracking-tight text-gray-900">ServiceVerify</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
<i className="w-3 h-3" data-lucide="lock"></i>
<span>Secure Portal</span>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-6xl mx-auto px-6 py-12">

<section className="max-w-2xl mx-auto mb-12 text-center transition-all duration-500 ease-in-out" id="searchSection">
<h1 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight mb-4">
                Check Service Status
            </h1>
<p className="text-lg text-gray-500 mb-8 font-light leading-relaxed">
                Enter the customer's mobile number to verify repair status. 
                <br className="hidden md:block"/>Data is masked for privacy protection.
            </p>
<div className="relative group max-w-xl mx-auto">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-gray-400 group-focus-within:text-gray-900 transition-colors" data-lucide="search"></i>
</div>
<input className="w-full pl-12 pr-32 py-4 bg-white border border-gray-200 rounded-xl text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder-gray-400 text-gray-900" id="searchInput" onkeypress="handleEnter(event)" placeholder="Customer Mobile Number (e.g. 017...)" type="text"/>
<button className="absolute right-2 top-2 bottom-2 bg-gray-900 hover:bg-gray-800 active:bg-black text-white px-6 rounded-lg font-medium transition-all flex items-center gap-2 text-base shadow-md hover:shadow-lg transform active:scale-95" onclick="showResults()">
                    Verify
                </button>
</div>
<div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="eye-off"></i> No Logging</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="database"></i> Stateless</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="user-x"></i> Initials Only</span>
</div>
</section>

<section className="hidden opacity-0 transition-all duration-500 ease-out transform translate-y-4" id="resultsContainer">
<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gray-50/50">
<div className="flex items-center gap-3">
<h2 className="text-lg font-medium text-gray-900">Search Results</h2>
<span className="text-xs font-medium bg-white text-gray-500 px-2 py-0.5 rounded border border-gray-200 shadow-sm">Live Data</span>
</div>
<button className="text-sm text-gray-400 hover:text-gray-600 underline decoration-gray-300 underline-offset-2" onclick="hideResults()">Clear Search</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100 bg-gray-50/30">
<th className="py-4 pl-6 pr-4 text-xs font-medium text-gray-500 uppercase tracking-wider w-32">Service Code</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Device Info</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">Warranty</th>
<th className="py-4 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Status</th>
<th className="py-4 pl-4 pr-6 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-300" data-lucide="hash"></i>
<span className="font-mono text-sm text-gray-900">SVC-8294</span>
</div>
</td>
<td className="py-4 px-4 text-sm text-gray-600">Oct 24, 2023</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">H. Rahman</span>
<span className="text-xs text-gray-400 font-mono">***-**-5423</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-sm text-gray-900">iPhone 13 Pro Max</span>
<span className="text-xs text-gray-400">Display Replacement</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[10px] text-blue-600 font-bold">RK</div>
<span className="text-sm text-gray-600">Rashed</span>
</div>
</td>
<td className="py-4 px-4 text-center">
<div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-50 text-green-600">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
</td>
<td className="py-4 px-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                        Ready for Pickup
                                    </span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<button className="group/btn inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:text-gray-900 hover:border-gray-300 shadow-sm hover:shadow transition-all active:scale-95" onclick="openModal('SVC-8294', 'iPhone 13 Pro Max', 'Ready for Pickup', 'bg-emerald-50 text-emerald-700', 'Display Replacement', '15,500 BDT')">
                                        Details
                                        <i className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-gray-600 transition-colors" data-lucide="chevron-right"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50 transition-colors">
<td className="py-4 pl-6 pr-4">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-gray-300" data-lucide="hash"></i>
<span className="font-mono text-sm text-gray-900">SVC-4512</span>
</div>
</td>
<td className="py-4 px-4 text-sm text-gray-600">Oct 26, 2023</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">M. Islam</span>
<span className="text-xs text-gray-400 font-mono">***-**-8891</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex flex-col">
<span className="text-sm text-gray-900">Galaxy S22 Ultra</span>
<span className="text-xs text-gray-400">Battery Drain</span>
</div>
</td>
<td className="py-4 px-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[10px] text-orange-600 font-bold">TS</div>
<span className="text-sm text-gray-600">Tanvir</span>
</div>
</td>
<td className="py-4 px-4 text-center">
<div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
<i className="w-3.5 h-3.5" data-lucide="minus"></i>
</div>
</td>
<td className="py-4 px-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                        In Progress
                                    </span>
</td>
<td className="py-4 pl-4 pr-6 text-right">
<button className="group/btn inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:text-gray-900 hover:border-gray-300 shadow-sm hover:shadow transition-all active:scale-95" onclick="openModal('SVC-4512', 'Galaxy S22 Ultra', 'In Progress', 'bg-amber-50 text-amber-700', 'Battery Diagnosis', 'Pending')">
                                        Details
                                        <i className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-gray-600 transition-colors" data-lucide="chevron-right"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-gray-200 bg-gray-50/50 text-xs text-gray-400 flex justify-center">
                    Showing results for mobile ending in ****23
                </div>
</div>
</section>
</main>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 hidden opacity-0 transition-opacity duration-300" id="modalOverlay" onclick="closeModal()">
<div className="flex items-center justify-center min-h-screen px-4 py-4">

<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 transform scale-95 transition-all duration-300" id="modalContent" onclick="event.stopPropagation()">

<div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
<div>
<h3 className="text-lg font-semibold text-gray-900">Service Details</h3>
<p className="text-sm text-gray-500 mt-0.5 flex items-center gap-2">
                            ID: <span className="font-mono text-gray-700" id="modalId">SVC-0000</span>
</p>
</div>
<button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>

<div className="p-6 space-y-6">

<div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Current Status</p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-gray-200 text-gray-800" id="modalStatusBadge">
                                Status
                            </span>
</div>
<div className="text-right">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Est. Cost</p>
<p className="text-lg font-semibold text-gray-900" id="modalCost">0.00</p>
</div>
</div>

<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Device Information</p>
<p className="text-sm text-gray-600 mt-0.5" id="modalDevice">Device Name</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Service Request</p>
<p className="text-sm text-gray-600 mt-0.5" id="modalIssue">Issue Description</p>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-6">
<p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-4">Service Timeline</p>
<div className="relative pl-4 border-l-2 border-gray-100 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] bg-white border-2 border-green-500 w-3 h-3 rounded-full"></div>
<p className="text-sm font-medium text-gray-900">Device Received</p>
<p className="text-xs text-gray-500">Oct 24, 10:30 AM</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] bg-white border-2 border-green-500 w-3 h-3 rounded-full"></div>
<p className="text-sm font-medium text-gray-900">Diagnosis Complete</p>
<p className="text-xs text-gray-500">Oct 25, 02:15 PM</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] bg-white border-2 border-gray-300 w-3 h-3 rounded-full"></div>
<p className="text-sm font-medium text-gray-400">Ready for Pickup</p>
<p className="text-xs text-gray-400">Estimated: Oct 27</p>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t border-gray-100 flex justify-end">
<button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors" onclick="closeModal()">
                        Close
                    </button>
</div>
</div>
</div>
</div>
<footer className="w-full py-8 border-t border-gray-200 mt-auto bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">
                © 2023 Service Verification System. 
            </p>
<div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
<span className="hover:text-gray-600 cursor-pointer transition-colors">Privacy Policy</span>
<span className="hover:text-gray-600 cursor-pointer transition-colors">Terms of Service</span>
<span className="hover:text-gray-600 cursor-pointer transition-colors">Support</span>
</div>
</div>
</footer>


    </>
  );
}
