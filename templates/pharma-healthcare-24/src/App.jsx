import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State Management
        let cartCount = 0;

        // View Switcher
        function switchView(viewName) {
            const storeView = document.getElementById('store-view');
            const dashView = document.getElementById('dashboard-view');
            const navStore = document.getElementById('nav-store');
            const navDash = document.getElementById('nav-dashboard');

            if (viewName === 'store') {
                storeView.classList.remove('hidden-view');
                storeView.classList.add('fade-enter-active');
                dashView.classList.add('hidden-view');
                navStore.classList.add('text-black');
                navStore.classList.remove('text-gray-500');
                navDash.classList.remove('text-black');
                navDash.classList.add('text-gray-500');
            } else {
                dashView.classList.remove('hidden-view');
                dashView.classList.add('fade-enter-active');
                storeView.classList.add('hidden-view');
                navDash.classList.add('text-black');
                navDash.classList.remove('text-gray-500');
                navStore.classList.remove('text-black');
                navStore.classList.add('text-gray-500');
            }
            window.scrollTo(0, 0);
        }

        // Cart Functionality
        function addToCart() {
            cartCount++;
            const badge = document.getElementById('cart-badge');
            badge.innerText = cartCount;
            badge.classList.remove('opacity-0');
            badge.classList.add('animate-bounce');
            setTimeout(() => badge.classList.remove('animate-bounce'), 1000);
            
            showToast('Item added to cart successfully.');
        }

        // Payment Modal Logic
        function openPaymentModal() {
            const modal = document.getElementById('payment-modal');
            const panel = document.getElementById('payment-panel');
            modal.classList.remove('hidden');
            // Trigger animation
            setTimeout(() => {
                panel.classList.remove('translate-x-full');
            }, 10);
        }

        function closePaymentModal() {
            const modal = document.getElementById('payment-modal');
            const panel = document.getElementById('payment-panel');
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Simulate Payment Processing
        function processPayment() {
            const btn = document.getElementById('pay-button');
            const text = document.getElementById('pay-text');
            const loader = document.getElementById('pay-loader');

            text.classList.add('hidden');
            loader.classList.remove('hidden');
            btn.disabled = true;

            setTimeout(() => {
                closePaymentModal();
                text.classList.remove('hidden');
                loader.classList.add('hidden');
                btn.disabled = false;
                showToast('Payment successful! Order processed.');
                
                // Switch to dashboard to show "result"
                setTimeout(() => switchView('dashboard'), 500);
            }, 2000);
        }

        // Toast Logic
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // Initialize view
        switchView('store');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-neutral-800/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="switchView('store')">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white text-black">
<span className="font-medium text-sm tracking-tighter">Ph</span>
</div>
<span className="font-medium tracking-tight text-lg text-white">PHARMA.</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<button className="transition-colors hover:text-white text-black" id="nav-store" onclick="switchView('store')">Store</button>
<button className="transition-colors hover:text-white text-cyan-500 text-gray-500" id="nav-dashboard" onclick="switchView('dashboard')">Dashboard</button>
<a className="transition-colors hover:text-white" href="#">Prescriptions</a>
<a className="transition-colors hover:text-white" href="#">Enterprise</a>
</div>

<div className="flex items-center gap-4">
<div className="relative group cursor-pointer">
<iconify-icon className="text-xl group-hover:text-black transition-colors text-neutral-400" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] flex items-center justify-center rounded-full opacity-0 transition-opacity bg-white text-black" id="cart-badge">0</span>
</div>
<button className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full transition-colors bg-neutral-900 hover:bg-neutral-800 text-white" onclick="switchView('dashboard')">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
<span>Account</span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 min-h-screen">

<div className="max-w-7xl mx-auto px-6 fade-enter-active" id="store-view">

<div className="flex flex-col md:py-24 text-center pt-16 pb-16 space-y-6 items-center justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm text-xs font-medium text-neutral-500 border-neutral-800 bg-black">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                    Now shipping internationally
                </div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-medium text-neutral-100 tracking-tight max-w-3xl">
                    Your pharmacy,<br/>automated and simplified.
                </h1>
<p className="text-lg text-neutral-500 max-w-xl font-light">
                    Manage prescriptions, order refills, and consult with specialists via our secure digital infrastructure.
                </p>

<div className="w-full max-w-md relative mt-8 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="group-focus-within:text-black transition-colors text-neutral-600" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-3 border rounded-xl leading-5 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 sm:text-sm shadow-sm transition-all border-neutral-800 bg-black text-neutral-100" placeholder="Search for Amoxicillin, Aspirin, etc..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 bg-white text-black">All</button>
<button className="px-4 py-2 border rounded-full text-sm font-medium transition-colors bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600">Antibiotics</button>
<button className="px-4 py-2 border rounded-full text-sm font-medium transition-colors bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600">Pain Relief</button>
<button className="px-4 py-2 border rounded-full text-sm font-medium transition-colors bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600">Supplements</button>
<button className="px-4 py-2 border rounded-full text-sm font-medium transition-colors bg-black border-neutral-800 text-neutral-400 hover:border-neutral-600">Dermatology</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-xl border hover:shadow-lg transition-all duration-300 p-4 relative overflow-hidden bg-black border-neutral-900 hover:border-neutral-700">
<div className="h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden bg-neutral-950">
<iconify-icon className="text-6xl group-hover:scale-110 transition-transform duration-500 text-neutral-700" icon="solar:bottle-linear"></iconify-icon>
<div className="absolute top-2 right-2 backdrop-blur px-2 py-0.5 rounded text-xs font-medium border bg-black/90 text-neutral-100 border-neutral-900">Rx Required</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium tracking-tight text-neutral-100">Amoxicillin</h3>
<p className="text-xs text-neutral-500 mt-1">500mg • 30 Capsules</p>
</div>
<span className="text-sm font-medium text-neutral-100">$12.50</span>
</div>
<button className="w-full mt-4 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 border-neutral-800 text-neutral-400 hover:bg-white hover:text-black hover:border-white" onclick="addToCart()">
                        Add to Cart
                    </button>
</div>

<div className="group rounded-xl border hover:shadow-lg transition-all duration-300 p-4 bg-black border-neutral-900 hover:border-neutral-700">
<div className="h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden bg-neutral-950">
<iconify-icon className="text-6xl group-hover:scale-110 transition-transform duration-500 text-neutral-700" icon="solar:pill-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium tracking-tight text-neutral-100">Ibuprofen</h3>
<p className="text-xs text-neutral-500 mt-1">200mg • 100 Tablets</p>
</div>
<span className="text-sm font-medium text-neutral-100">$8.99</span>
</div>
<button className="w-full mt-4 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 border-neutral-800 text-neutral-400 hover:bg-white hover:text-black hover:border-white" onclick="addToCart()">
                        Add to Cart
                    </button>
</div>

<div className="group rounded-xl border hover:shadow-lg transition-all duration-300 p-4 bg-black border-neutral-900 hover:border-neutral-700">
<div className="h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden bg-neutral-950">
<iconify-icon className="text-6xl group-hover:scale-110 transition-transform duration-500 text-neutral-700" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium tracking-tight text-neutral-100">Retinol Serum</h3>
<p className="text-xs text-neutral-500 mt-1">1% • 30ml Bottle</p>
</div>
<span className="text-sm font-medium text-neutral-100">$24.00</span>
</div>
<button className="w-full mt-4 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 border-neutral-800 text-neutral-400 hover:bg-white hover:text-black hover:border-white" onclick="addToCart()">
                        Add to Cart
                    </button>
</div>

<div className="group rounded-xl border hover:shadow-lg transition-all duration-300 p-4 bg-black border-neutral-900 hover:border-neutral-700">
<div className="h-48 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden bg-neutral-950">
<iconify-icon className="text-6xl group-hover:scale-110 transition-transform duration-500 text-neutral-700" icon="solar:heart-pulse-linear"></iconify-icon>
<div className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-medium border bg-blue-950 text-blue-400 border-blue-900">Auto-refill</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium tracking-tight text-neutral-100">Daily Multivitamin</h3>
<p className="text-xs text-neutral-500 mt-1">Men's 50+ • 60 Count</p>
</div>
<span className="text-sm font-medium text-neutral-100">$18.00</span>
</div>
<button className="w-full mt-4 py-2 rounded-lg border text-sm font-medium transition-colors flex items-center justify-center gap-2 border-neutral-800 text-neutral-400 hover:bg-white hover:text-black hover:border-white" onclick="addToCart()">
                        Subscribe &amp; Save
                    </button>
</div>
</div>

<div className="mt-12 flex justify-center">
<button className="text-sm underline underline-offset-4 text-neutral-600 hover:text-white decoration-neutral-700" onclick="openPaymentModal()">
                    Debug: Open Payment Gateway
                </button>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 hidden-view fade-enter" id="dashboard-view">
<div className="flex flex-col md:flex-row gap-8">

<aside className="w-full md:w-64 flex-shrink-0">
<div className="sticky top-24 space-y-8">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-800 text-neutral-400">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-medium text-neutral-100">Dr. Alex Chen</h2>
<p className="text-xs text-neutral-500">Cardiologist</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium bg-neutral-900 text-white" href="#">
<iconify-icon className="text-lg" icon="solar:home-smile-linear"></iconify-icon>
                                    Overview
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 transition-colors text-sm font-medium hover:bg-neutral-950 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
                                    Orders
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 transition-colors text-sm font-medium hover:bg-neutral-950 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:document-medicine-linear"></iconify-icon>
                                    Prescriptions
                                    <span className="ml-auto py-0.5 px-2 rounded text-[10px] bg-neutral-900 text-neutral-400">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 transition-colors text-sm font-medium hover:bg-neutral-950 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
                                    Billing
                                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-500 transition-colors text-sm font-medium hover:bg-neutral-950 hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
                                    Settings
                                </a>
</nav>
</div>

<div className="p-4 border rounded-xl shadow-sm bg-black border-neutral-800">
<h3 className="text-xs font-medium uppercase tracking-wider mb-3 text-neutral-100">Automation</h3>
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-neutral-400">Auto-Refill</span>
<button className="w-9 h-5 rounded-full relative transition-colors bg-white" onclick="this.classList.toggle('bg-gray-300')">
<span className="absolute right-1 top-1 w-3 h-3 rounded-full transition-transform bg-black"></span>
</button>
</div>
<div className="text-xs text-neutral-600">
                                Next processing: <span className="text-neutral-100">Oct 24, 2023</span>
</div>
</div>
</div>
</aside>

<div className="flex-1 space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-5 rounded-xl border shadow-sm bg-black border-neutral-800">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Total Spend</span>
<iconify-icon className="text-neutral-600" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-neutral-100">$2,405.00</div>
<div className="text-xs mt-1 flex items-center gap-1 text-indigo-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> +12% from last month
                            </div>
</div>
<div className="p-5 rounded-xl border shadow-sm bg-black border-neutral-800">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Active Orders</span>
<iconify-icon className="text-neutral-600" icon="solar:box-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-neutral-100">3</div>
<div className="text-xs mt-1 text-neutral-600">In transit</div>
</div>
<div className="p-5 rounded-xl border shadow-sm bg-black border-neutral-800">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Pending Rx</span>
<iconify-icon className="text-neutral-600" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div className="text-2xl font-medium tracking-tight text-neutral-100">1</div>
<div className="text-xs text-green-500 mt-1">Requires approval</div>
</div>
</div>

<div className="border rounded-xl shadow-sm overflow-hidden bg-black border-neutral-800">
<div className="px-6 py-4 border-b flex items-center justify-between border-neutral-900 bg-neutral-950/50">
<h3 className="text-sm font-medium text-neutral-100">Recent Transactions</h3>
<button className="text-xs text-neutral-500 hover:text-white">Download Invoice</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="text-neutral-500 font-medium bg-neutral-950">
<tr>
<th className="px-6 py-3 font-medium">Order ID</th>
<th className="px-6 py-3 font-medium">Medication</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-900">
<tr className="transition-colors hover:bg-neutral-950/50">
<td className="px-6 py-4 font-mono text-xs text-neutral-500">#TRX-8823</td>
<td className="px-6 py-4 font-medium text-neutral-100">Lipitor (Atorvastatin)</td>
<td className="px-6 py-4 text-neutral-500">Oct 21, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border bg-indigo-950 text-indigo-300 border-indigo-900">Delivered</span>
</td>
<td className="px-6 py-4 text-right text-neutral-100">$45.00</td>
</tr>
<tr className="transition-colors hover:bg-neutral-950/50">
<td className="px-6 py-4 font-mono text-xs text-neutral-500">#TRX-8822</td>
<td className="px-6 py-4 font-medium text-neutral-100">Metformin HCl</td>
<td className="px-6 py-4 text-neutral-500">Oct 15, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border bg-blue-950 text-blue-300 border-blue-900">Processing</span>
</td>
<td className="px-6 py-4 text-right text-neutral-100">$12.99</td>
</tr>
<tr className="transition-colors hover:bg-neutral-950/50">
<td className="px-6 py-4 font-mono text-xs text-neutral-500">#TRX-8821</td>
<td className="px-6 py-4 font-medium text-neutral-100">Annual Consultation</td>
<td className="px-6 py-4 text-neutral-500">Oct 10, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border bg-neutral-900 text-neutral-400 border-neutral-800">Completed</span>
</td>
<td className="px-6 py-4 text-right text-neutral-100">$150.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] hidden" id="payment-modal">

<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-neutral-100/20" onclick="closePaymentModal()"></div>

<div className="absolute right-0 top-0 h-full w-full sm:w-[480px] shadow-2xl transform transition-transform duration-300 translate-x-full flex flex-col bg-black" id="payment-panel">

<div className="px-6 py-5 border-b flex items-center justify-between border-neutral-900">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-indigo-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium text-neutral-100">Secure Checkout</span>
</div>
<button className="text-neutral-600 hover:text-white" onclick="closePaymentModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6">

<div className="mb-8">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">Order Summary</p>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-100">Amoxicillin (500mg)</span>
<span className="text-sm font-medium text-neutral-100">$12.50</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-100">Service Fee</span>
<span className="text-sm font-medium text-neutral-100">$2.00</span>
</div>
<div className="flex items-center justify-between pt-3 border-t mt-3 border-neutral-900">
<span className="text-base font-medium text-neutral-100">Total</span>
<span className="text-base font-medium text-neutral-100">$14.50</span>
</div>
</div>

<form onsubmit="event.preventDefault(); processPayment();">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">Payment Details</p>
<div className="space-y-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">Email</label>
<input className="block w-full px-3 py-2 border rounded-lg text-sm focus:bg-white focus:ring-1 focus:ring-black focus:border-black transition-colors outline-none border-neutral-800 bg-neutral-950" type="email" value="alex.chen@example.com"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">Card Information</label>
<div className="border rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-black focus-within:border-black transition-all border-neutral-800 bg-black">
<div className="px-3 py-2 border-b flex items-center gap-2 border-neutral-900">
<iconify-icon className="text-neutral-600" icon="solar:card-linear"></iconify-icon>
<input className="w-full text-sm outline-none placeholder-neutral-400" placeholder="Card number" type="text"/>
</div>
<div className="flex divide-x divide-neutral-900">
<input className="w-1/2 px-3 py-2 text-sm outline-none placeholder-neutral-400" placeholder="MM / YY" type="text"/>
<input className="w-1/2 px-3 py-2 text-sm outline-none placeholder-neutral-400" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-300">Cardholder Name</label>
<input className="block w-full px-3 py-2 border rounded-lg text-sm focus:ring-1 focus:ring-black focus:border-black transition-colors outline-none border-neutral-800" placeholder="Full name on card" type="text"/>
</div>
</div>

<div className="mt-6 flex items-start gap-2">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border checked:bg-black checked:border-black transition-all border-neutral-700 bg-black" id="save-card" type="checkbox"/>
<iconify-icon className="absolute left-0 top-0 h-4 w-4 opacity-0 peer-checked:opacity-100 pointer-events-none text-xs flex items-center justify-center text-black" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-neutral-500 cursor-pointer" htmlFor="save-card">Save this payment method for future auto-refills.</label>
</div>
<button className="mt-8 w-full py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 relative overflow-hidden bg-white text-black hover:bg-neutral-200" id="pay-button" type="submit">
<span id="pay-text">Pay $14.50</span>
<div className="hidden animate-spin h-4 w-4 border-2 rounded-full border-black/30 border-t-black" id="pay-loader"></div>
</button>
<div className="mt-4 flex justify-center items-center gap-2 text-neutral-600">
<iconify-icon className="grayscale opacity-50" icon="logos:stripe" width="30"></iconify-icon>
<span className="text-[10px]">Powered by Stripe</span>
</div>
</form>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 translate-y-20 opacity-0 transition-all duration-300 z-[110] border shadow-xl rounded-lg p-4 flex items-center gap-3 bg-black border-neutral-800" id="toast">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-950 text-indigo-400">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-100">Success</h4>
<p className="text-xs text-neutral-500" id="toast-message">Item added to cart</p>
</div>
</div>


    </>
  );
}
