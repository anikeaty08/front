import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initial Data
        const initialItems = [
            { desc: 'UI/UX Design - Dashboard', sub: 'High fidelity mockups and interactive prototype', qty: 40, price: 120 },
            { desc: 'Design System Development', sub: 'Component library in Figma', qty: 15, price: 120 }
        ];

        // Render Initial Items
        window.addEventListener('DOMContentLoaded', () => {
            initialItems.forEach(item => addItem(item.desc, item.sub, item.qty, item.price));
            calculateTotals();
        });

        // Add Item Function
        function addItem(desc = '', sub = '', qty = 1, price = 0) {
            const container = document.getElementById('items-container');
            const id = Date.now(); // unique ID for row
            const rowHTML = `
                <div class="group item-row grid grid-cols-12 gap-4 py-4 border-b border-slate-50 hover:bg-slate-50/50 items-start transition-colors -mx-2 px-2 rounded-lg mt-1" id="row-${id}">
                    <div class="col-span-6">
                        <input type="text" value="${desc}" placeholder="Item name" class="w-full bg-transparent border-0 p-0 text-sm font-medium text-slate-900 focus:ring-0 placeholder:text-slate-300 mb-1">
                        <input type="text" value="${sub}" placeholder="Description" class="w-full bg-transparent border-0 p-0 text-xs text-slate-500 focus:ring-0 placeholder:text-slate-300">
                    </div>
                    <div class="col-span-2">
                        <input type="number" value="${qty}" oninput="calculateTotals()" class="qty-input w-full bg-slate-50/50 text-right border border-transparent hover:border-slate-200 focus:bg-white text-sm text-slate-600 rounded-lg p-1 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all">
                    </div>
                    <div class="col-span-2">
                        <input type="number" value="${price}" oninput="calculateTotals()" class="price-input w-full bg-slate-50/50 text-right border border-transparent hover:border-slate-200 focus:bg-white text-sm text-slate-600 rounded-lg p-1 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all">
                    </div>
                    <div class="col-span-2 flex items-center justify-end gap-2 relative">
                        <span class="row-total text-sm font-medium text-slate-900">$0.00</span>
                        <button onclick="removeRow('${id}')" class="no-print opacity-0 group-hover:opacity-100 absolute -right-8 p-1.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all">
                            <iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                        </button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', rowHTML);
            calculateTotals();
        }

        // Remove Row Function
        function removeRow(id) {
            const row = document.getElementById(`row-${id}`);
            if(row) {
                row.remove();
                calculateTotals();
            }
        }

        // Calculate Totals Function
        function calculateTotals() {
            let subtotal = 0;
            const rows = document.querySelectorAll('.item-row');
            
            rows.forEach(row => {
                const qty = parseFloat(row.querySelector('.qty-input').value) || 0;
                const price = parseFloat(row.querySelector('.price-input').value) || 0;
                const total = qty * price;
                
                row.querySelector('.row-total').textContent = formatCurrency(total);
                subtotal += total;
            });

            // Update Summary
            const summarySubtotal = document.getElementById('summary-subtotal');
            const summaryTotal = document.getElementById('summary-total');
            
            if(summarySubtotal) summarySubtotal.textContent = formatCurrency(subtotal);
            if(summaryTotal) summaryTotal.textContent = formatCurrency(subtotal);
        }

        // Helper to format currency
        function formatCurrency(num) {
            return '$' + num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }

        // Logo Upload Handler
        function handleLogoUpload(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('logo-preview');
                    const content = document.getElementById('logo-content');
                    
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                    content.classList.add('hidden');
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] vibe-gradient-1 blur-3xl -z-10 pointer-events-none opacity-70"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] vibe-gradient-2 blur-3xl -z-10 pointer-events-none opacity-60"></div>
<div className="flex h-screen overflow-hidden">

<aside className="w-20 lg:w-64 flex-shrink-0 bg-white border-r border-slate-100 flex flex-col justify-between transition-all duration-300 z-20">
<div>
<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="hidden lg:block font-medium tracking-tight text-slate-900 text-lg">VIBE<span className="text-slate-400 font-normal">INVOICE</span></span>
</div>
</div>
<nav className="mt-6 flex flex-col gap-1 px-3">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:widget-2-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-600 transition-colors group" href="#">
<iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Create Invoice</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Clients</span>
</a>
</nav>
</div>
<div className="p-3">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:settings-linear" width="20"></iconify-icon>
<span className="hidden lg:block text-sm font-medium">Settings</span>
</a>
<div className="mt-4 flex items-center gap-3 px-3 py-3 border-t border-slate-100">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://i.pravatar.cc/150?img=68"/>
<div className="hidden lg:block overflow-hidden">
<p className="text-sm font-medium text-slate-900 truncate">Alex Morgan</p>
<p className="text-xs text-slate-400 truncate">Freelancer</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative">

<header className="h-16 glass-panel border-b border-slate-200/50 flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4 text-slate-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-slate-600 placeholder:text-slate-400 w-48 focus:w-64 transition-all" placeholder="Search..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="w-9 h-9 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
</button>
<button className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:shadow-lg transition-all hover:scale-105">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 lg:p-8 pb-32" id="main-scroll">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 no-print">
<div>
<h1 className="text-2xl font-medium text-slate-900 tracking-tight">New Invoice</h1>
<p className="text-sm text-slate-500 mt-1">Create and send a new invoice to your client.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-2" onclick="window.print()">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Print
                            </button>
<button className="px-4 py-2 rounded-xl bg-slate-900 text-sm font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800 hover:shadow-slate-900/20 transition-all flex items-center gap-2" onclick="window.print()">
<iconify-icon icon="solar:plain-2-linear"></iconify-icon> Send Invoice
                            </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="print-container bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] border border-slate-100 p-6 lg:p-8">
<div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
<div className="flex-1">
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">From</label>

<div className="w-full max-w-[200px] h-24 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all cursor-pointer group mb-4 overflow-hidden relative" id="logo-placeholder" onclick="document.getElementById('logo-upload').click()">
<div className="flex flex-col items-center" id="logo-content">
<iconify-icon className="group-hover:text-indigo-500 transition-colors mb-1" icon="solar:gallery-add-linear" width="24"></iconify-icon>
<span className="text-xs font-medium group-hover:text-indigo-600">Upload Logo</span>
</div>
<img alt="Logo" className="hidden absolute inset-0 w-full h-full object-contain bg-white p-2" id="logo-preview" src=""/>
<input accept="image/*" className="hidden" id="logo-upload" onchange="handleLogoUpload(this)" type="file"/>
</div>
<input className="block w-full text-base font-medium text-slate-900 border-none p-0 focus:ring-0 placeholder:text-slate-300 mb-1" placeholder="Your Business Name" type="text" value="Acme Design Studio"/>
<textarea className="block w-full text-sm text-slate-500 border-none p-0 focus:ring-0 resize-none placeholder:text-slate-300" placeholder="Address, City, Zip
Country
Tax ID: XX-XXXX" rows="3"></textarea>
</div>
<div className="flex-1 md:text-right">
<label className="block text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Bill To</label>
<div className="relative group">
<select className="block w-full md:text-right appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-indigo-500 focus:border-indigo-500 block p-2.5 pr-8 transition-colors hover:bg-white">
<option>Select Client</option>
<option selected="">Stripe, Inc.</option>
<option>Vercel Inc.</option>
<option>Linear Orbit</option>
</select>

<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500 no-print">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<textarea className="mt-4 w-full md:text-right text-sm text-slate-500 border-none p-0 focus:ring-0 resize-none placeholder:text-slate-300" rows="3">510 Townsend St.
San Francisco, CA 94103</textarea>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Invoice No.</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">#</div>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block w-full pl-7 p-2.5" type="text" value="INV-0024"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Date</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block w-full p-2.5" type="date" value="2023-10-24"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Due Date</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 block w-full p-2.5" type="date" value="2023-11-07"/>
</div>
</div>

<div className="mb-8">
<div className="grid grid-cols-12 gap-4 pb-2 border-b border-slate-100 text-xs font-medium text-slate-400 uppercase tracking-wide">
<div className="col-span-6">Item</div>
<div className="col-span-2 text-right">Qty</div>
<div className="col-span-2 text-right">Price</div>
<div className="col-span-2 text-right">Total</div>
</div>
<div id="items-container">

</div>
<button className="no-print mt-4 flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors w-fit" onclick="addItem()">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                                        Add Line Item
                                    </button>
</div>

<div>
<label className="block text-xs font-medium text-slate-400 mb-2">Notes &amp; Terms</label>
<textarea className="w-full bg-slate-50/50 border border-slate-200 rounded-xl p-3 text-sm text-slate-600 placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all resize-none" placeholder="Thank you for your business! Payment is due within 14 days." rows="3">Thank you for your business! Payment is due within 14 days.</textarea>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 no-print">

<div className="bg-white rounded-2xl shadow-[0_2px_12px_-4px_rgba(0,0,0,0.02)] border border-slate-100 p-6 sticky top-24">
<h3 className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:calculator-minimalistic-linear"></iconify-icon> Summary
                                </h3>
<div className="space-y-3 pb-6 border-b border-slate-100 border-dashed">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium text-slate-700" id="summary-subtotal">$0.00</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 flex items-center gap-1">Tax <span className="text-xs bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded ml-1">0%</span></span>
<span className="font-medium text-slate-700">$0.00</span>
</div>
</div>
<div className="py-6">
<div className="flex justify-between items-baseline mb-1">
<span className="text-sm font-medium text-slate-500">Total Due</span>
<span className="text-2xl font-semibold tracking-tight text-slate-900" id="summary-total">$0.00</span>
</div>
<p className="text-xs text-right text-slate-400">USD</p>
</div>
<div className="space-y-3">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all bg-white" onclick="window.print()">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Preview PDF
                                    </button>
<button className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all bg-white" onclick="window.print()">
<iconify-icon icon="solar:download-linear"></iconify-icon> Download
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
