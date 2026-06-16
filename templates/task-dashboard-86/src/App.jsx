import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function startTask(btn) {
            // Simulate task opening and processing
            const originalText = btn.innerText;
            const originalClasses = btn.className;
            
            btn.innerText = 'Opening...';
            btn.className = 'text-xs px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium transition-all min-w-[100px] flex items-center justify-center gap-1';
            
            setTimeout(() => {
                btn.innerText = 'In Progress';
                btn.className = 'text-xs px-4 py-2 bg-amber-500 text-white rounded-lg font-medium transition-all min-w-[100px] shadow-inner cursor-wait';
                
                // Simulate completion
                setTimeout(() => {
                    btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Completed';
                    btn.className = 'text-xs px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg font-semibold transition-all min-w-[100px] flex items-center justify-center gap-1';
                    btn.disabled = true;
                }, 3000);
            }, 800);
        }

        function copyUpi() {
            const upiId = document.getElementById('upiId').innerText;
            navigator.clipboard.writeText(upiId).then(() => {
                const copyBtn = document.getElementById('copyText');
                copyBtn.innerText = 'Copied!';
                setTimeout(() => {
                    copyBtn.innerText = 'Copy';
                }, 2000);
            });
        }
        
        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal('subscriptionModal');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-200">
<span className="text-lg font-semibold tracking-tighter text-indigo-600">TASKFLOW</span>
</div>
<div className="p-4 flex-1 flex flex-col gap-1 overflow-y-auto hide-scrollbar">
<p className="text-xs font-medium text-gray-400 px-3 mt-4 mb-2 uppercase tracking-widest">Menu</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-50 text-indigo-600 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
                Available Tasks
            </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium text-sm transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                Wallet &amp; Withdraw
            </a>
<p className="text-xs font-medium text-gray-400 px-3 mt-8 mb-2 uppercase tracking-widest">Premium</p>
<button className="flex items-center justify-between px-3 py-2 rounded-lg text-amber-600 hover:bg-amber-50 font-medium text-sm transition-colors w-full text-left" onclick="openModal('subscriptionModal')">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
                    Upgrade Account
                </div>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm tracking-tight">
                    JD
                </div>
<div>
<p className="text-sm font-medium text-gray-900">John Doe</p>
<p className="text-xs text-gray-500">Free Tier</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10 sticky top-0">
<div className="flex items-center gap-4 md:hidden">
<button className="text-gray-500 hover:text-gray-900">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<span className="text-base font-semibold tracking-tighter text-indigo-600">TASKFLOW</span>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-gray-500">
<span>Dashboard</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-gray-900 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-900 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Welcome back, John.</h1>
<p className="text-sm text-gray-500 mt-1">Here is what's happening with your tasks today.</p>
</div>

<div className="bg-indigo-950 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between text-white relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-9xl">
<iconify-icon icon="solar:crown-star-linear"></iconify-icon>
</div>
<div className="relative z-10 max-w-xl">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-900 text-indigo-200 text-xs font-medium mb-4 border border-indigo-800">
<iconify-icon icon="solar:lock-unlocked-linear"></iconify-icon>
                            Premium Access
                        </div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Unlock 100+ Professional Tasks</h2>
<p className="text-indigo-200 mt-2 text-sm sm:text-base leading-relaxed">Your free trial allows 10 tasks. Upgrade to Premium for ₹100/month to unlock unlimited high-paying tasks from verified partners.</p>
</div>
<button className="mt-6 md:mt-0 relative z-10 bg-white text-indigo-950 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-50 transition-colors shadow-sm whitespace-nowrap" onclick="openModal('subscriptionModal')">
                        Upgrade for ₹100
                    </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Available Balance</p>
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-3xl font-semibold tracking-tight text-gray-900">₹ 45.00</p>
<span className="text-xs font-medium text-green-600 flex items-center">+12.5%</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Pending Approval</p>
<div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-3xl font-semibold tracking-tight text-gray-900">₹ 120.00</p>
<span className="text-xs font-medium text-gray-400">3 tasks under review</span>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start">
<p className="text-sm font-medium text-gray-500">Tasks Completed</p>
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<p className="text-3xl font-semibold tracking-tight text-gray-900">4<span className="text-base text-gray-400 font-normal">/10</span></p>
<span className="text-xs font-medium text-gray-500">Free tier limit</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-base font-semibold tracking-tight text-gray-900">Available Tasks (Free Tier)</h3>
<span className="text-xs font-medium text-gray-500">6 tasks remaining</span>
</div>
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
<div className="flex items-start sm:items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:smartphone-update-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">Test and Review Financial App</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
<span>Provided by FinTech Solutions</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon> 5 mins</span>
</p>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">₹ 15.00</span>
<button className="text-xs px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all min-w-[100px]" onclick="startTask(this)">Start Task</button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
<div className="flex items-start sm:items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">Complete Market Research Survey</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
<span>Provided by DataCorp</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon> 10 mins</span>
</p>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">₹ 25.00</span>
<button className="text-xs px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all min-w-[100px]" onclick="startTask(this)">Start Task</button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group">
<div className="flex items-start sm:items-center gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0">
<iconify-icon className="text-lg" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">Watch Promotional Video &amp; Feedback</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-2">
<span>Provided by MediaNet</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:stopwatch-linear"></iconify-icon> 3 mins</span>
</p>
</div>
</div>
<div className="mt-4 sm:mt-0 flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
<span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">₹ 10.00</span>
<button className="text-xs px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all min-w-[100px]" onclick="startTask(this)">Start Task</button>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4 px-1">
<iconify-icon className="text-gray-400" icon="solar:lock-keyhole-linear"></iconify-icon>
<h3 className="text-base font-semibold tracking-tight text-gray-500">Premium Professional Tasks (100+)</h3>
</div>
<div className="bg-gray-50 rounded-xl border border-gray-200 border-dashed overflow-hidden opacity-75 grayscale relative">

<div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10 flex flex-col items-center justify-center">
<button className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-lg text-sm font-medium text-gray-900 flex items-center gap-2 hover:bg-gray-50 transition-colors" onclick="openModal('subscriptionModal')">
<iconify-icon className="text-indigo-600" icon="solar:lock-keyhole-unlocked-linear"></iconify-icon>
                                Unlock via Subscription
                            </button>
</div>

<div className="flex items-center justify-between p-5 border-b border-gray-200">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-600">Website Usability Testing</h4>
<p className="text-xs text-gray-400 mt-1">Takes ~15 mins</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-semibold text-gray-500">₹ 150.00</span>
<button className="text-xs px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed" disabled="">Locked</button>
</div>
</div>

<div className="flex items-center justify-between p-5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
<iconify-icon className="text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-600">Write Product Description</h4>
<p className="text-xs text-gray-400 mt-1">Takes ~20 mins</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="text-sm font-semibold text-gray-500">₹ 200.00</span>
<button className="text-xs px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-medium cursor-not-allowed" disabled="">Locked</button>
</div>
</div>
</div>
</div>
<div className="py-8 text-center">
<p className="text-xs text-gray-400">TaskFlow Admin Panel Connected securely.</p>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6" id="subscriptionModal">
<div className="absolute inset-0 modal-overlay" onclick="closeModal('subscriptionModal')"></div>
<div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col border border-gray-200 animate-in fade-in zoom-in-95 duration-200">
<div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Unlock Premium Access</h3>
<button className="text-gray-400 hover:text-gray-600 p-1" onclick="closeModal('subscriptionModal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6">
<div className="text-center mb-6">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon className="text-2xl" icon="solar:crown-star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-gray-600">Pay a monthly subscription of <strong className="text-gray-900 font-semibold">₹ 100</strong> to unlock 100+ high-paying professional tasks immediately.</p>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
<p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Payment Method</p>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
<span className="text-[10px] font-bold text-gray-800">UPI</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Direct UPI Transfer</p>
<p className="text-xs text-gray-500">Instant activation</p>
</div>
</div>

<div className="bg-white border border-indigo-100 rounded-lg p-4 relative group">
<p className="text-xs text-gray-500 mb-1">Send exact ₹100 to this UPI ID:</p>
<div className="flex items-center justify-between">
<code className="text-base font-semibold text-indigo-700 tracking-tight" id="upiId">8080446922@fam</code>
<button className="text-indigo-600 hover:bg-indigo-50 p-1.5 rounded-md transition-colors flex items-center gap-1 text-xs font-medium" onclick="copyUpi()">
<iconify-icon className="text-sm" icon="solar:copy-linear"></iconify-icon>
<span id="copyText">Copy</span>
</button>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start gap-2 text-xs text-gray-500">
<iconify-icon className="text-sm text-gray-400 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p>After successful payment, your account will be upgraded to Premium within 5 minutes. Commission from completed tasks will be processed normally to your verified wallet.</p>
</div>
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-sm relative overflow-hidden group">
<span className="relative z-10 flex items-center justify-center gap-2">
                            I have paid ₹100 via UPI
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>


    </>
  );
}
