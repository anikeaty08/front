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



        // Initialize Icons
        lucide.createIcons();

        // Sidebar Toggle Logic (Mobile)
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('backdrop');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                backdrop.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                backdrop.classList.add('hidden');
            }
        }

        // Accordion Logic for Menu
        function toggleMenu(button) {
            const parent = button.closest('.group');
            const submenu = parent.querySelector('.submenu');
            
            // Close all others (Optional - keeps menu cleaner)
            document.querySelectorAll('.group.active').forEach(group => {
                if (group !== parent) {
                    group.classList.remove('active');
                    group.querySelector('.submenu').classList.remove('open');
                }
            });

            // Toggle current
            parent.classList.toggle('active');
            submenu.classList.toggle('open');
        }

        // --- Existing Payment Form Logic ---
        function handleFileSelect(input) {
            const dropZone = document.getElementById('dropZone');
            const preview = document.getElementById('filePreview');
            const fileName = document.getElementById('fileName');
            const fileSize = document.getElementById('fileSize');

            if (input.files && input.files[0]) {
                const file = input.files[0];
                fileName.textContent = file.name;
                let size = file.size / 1024;
                let unit = 'KB';
                if (size > 1024) {
                    size = size / 1024;
                    unit = 'MB';
                }
                fileSize.textContent = size.toFixed(1) + ' ' + unit;
                dropZone.classList.add('hidden');
                preview.classList.remove('hidden');
                preview.classList.add('fade-in');
            }
        }

        function removeFile() {
            const dropZone = document.getElementById('dropZone');
            const preview = document.getElementById('filePreview');
            const input = document.getElementById('fileInput');
            input.value = '';
            preview.classList.add('hidden');
            dropZone.classList.remove('hidden');
            dropZone.classList.add('fade-in');
        }

        function validateAndSubmit() {
            const amountInput = document.getElementById('amount');
            const amountErrorIcon = document.getElementById('amountErrorIcon');
            const amountErrorMsg = document.getElementById('amountErrorMsg');
            
            amountInput.classList.remove('border-red-300', 'focus:border-red-500', 'text-red-900');
            amountInput.classList.add('border-gray-200');
            amountErrorIcon.classList.add('hidden');
            amountErrorMsg.classList.add('hidden');

            if (!amountInput.value) {
                amountInput.classList.remove('border-gray-200');
                amountInput.classList.add('border-red-300', 'focus:border-red-500', 'text-red-900');
                amountErrorIcon.classList.remove('hidden');
                amountErrorMsg.classList.remove('hidden');
                amountInput.parentElement.animate([
                    { transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }
                ], { duration: 300 });
                amountInput.focus();
            } else {
                const btn = document.querySelector('button[type="submit"]');
                btn.disabled = true;
                btn.innerHTML = `<svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...`;
                setTimeout(() => {
                    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4 mr-2"></i> Done`;
                    btn.classList.remove('bg-gray-900', 'hover:bg-black');
                    btn.classList.add('bg-green-600', 'hover:bg-green-700');
                    lucide.createIcons();
                }, 1500);
            }
        }

        function addCustomField() {
            const container = document.getElementById('customFieldsContainer');
            const fieldId = 'field-' + Math.random().toString(36).substr(2, 9);
            const div = document.createElement('div');
            div.className = 'relative fade-in';
            div.innerHTML = `
                <div class="flex justify-between items-center mb-1.5">
                    <input type="text" class="bg-transparent border-none p-0 text-xs font-medium text-gray-700 placeholder-gray-400 focus:ring-0 w-full" placeholder="Field Name" value="Custom Attribute">
                    <button type="button" onclick="this.closest('.relative').remove()" class="text-gray-400 hover:text-red-500 transition-colors">
                        <i data-lucide="x" class="w-3 h-3"></i>
                    </button>
                </div>
                <input type="text" id="${fieldId}" class="block w-full rounded-lg border border-gray-200 bg-white py-2 px-3 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 shadow-sm transition-all hover:border-gray-300 outline-none" placeholder="Enter value...">
            `;
            container.appendChild(div);
            lucide.createIcons();
            setTimeout(() => document.getElementById(fieldId).focus(), 50);
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
      
<div className="flex h-screen w-full">

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded text-white flex items-center justify-center">
<span className="font-bold text-xs">N</span>
</div>
<span className="font-semibold tracking-tight text-lg">NEXUS</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto custom-scroll py-4 px-3 space-y-1">

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="layout-dashboard"></i>
                    Dashboard
                </a>

<div className="pt-4 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sales &amp; CRM</div>

<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="users-2"></i>
<span>Leads &amp; Customers</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 rotate-icon" data-lucide="chevron-down"></i>
</button>
<div className="submenu pl-10 space-y-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">All Leads</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Create Lead</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">My Leads (0)</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Join Requests</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Customers List</a>
</div>
</div>

<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="shopping-cart"></i>
<span>Sales &amp; Orders</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 rotate-icon" data-lucide="chevron-down"></i>
</button>
<div className="submenu pl-10 space-y-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Quotation List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Sale List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Add Sale</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Returns</a>
</div>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="wallet"></i>
                    My Commission <span className="ml-auto text-xs bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded">৳0.00</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="receipt"></i>
                    Convince Bill
                </a>

<div className="pt-4 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Inventory</div>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="package"></i>
<span>Products &amp; Stock</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 rotate-icon" data-lucide="chevron-down"></i>
</button>
<div className="submenu pl-10 space-y-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Product List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Create Product</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Categories</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Brands</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Variants (Size/Color)</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Warranty List</a>
</div>
</div>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="truck"></i>
<span>Suppliers &amp; Purchase</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 rotate-icon" data-lucide="chevron-down"></i>
</button>
<div className="submenu pl-10 space-y-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Supplier List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Purchase List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Create Purchase</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Purchase Orders</a>
</div>
</div>

<div className="pt-4 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Finance</div>

<div className="group active">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-indigo-600" data-lucide="banknote"></i>
<span>Payments &amp; Accounts</span>
</div>
<i className="w-3.5 h-3.5 text-gray-500 rotate-icon" data-lucide="chevron-down" style={{transform: 'rotate(180deg)'}}></i>
</button>
<div className="submenu open pl-10 space-y-1 mt-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Payment List</a>
<a className="block px-3 py-1.5 text-xs font-medium text-indigo-600 bg-white rounded border border-gray-100 shadow-sm" href="#">Add Payment</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Accounts Overview</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Wallet Withdraw</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Expense List</a>
</div>
</div>

<div className="pt-4 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Analytics</div>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900" onclick="toggleMenu(this)">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="bar-chart-3"></i>
<span>Reports</span>
</div>
<i className="w-3.5 h-3.5 text-gray-400 rotate-icon" data-lucide="chevron-down"></i>
</button>
<div className="submenu pl-10 space-y-1">
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Stock Report</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Profit &amp; Loss</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Sales VAT</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Ledgers (Cust/Supp)</a>
<a className="block px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900" href="#">Cashbook</a>
</div>
</div>

<div className="pt-4 pb-1 px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">System</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="shield-check"></i>
                    User Management
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900 group mb-8" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-gray-600" data-lucide="settings"></i>
                    Settings
                </a>
</nav>

<div className="p-4 border-t border-gray-100 bg-white">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-xs font-medium text-gray-600">
                        JS
                    </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-gray-900 truncate">John Salesman</p>
<p className="text-[10px] text-gray-500 truncate">Sales Associate</p>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 lg:ml-64 transition-all duration-300">

<header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 sticky top-0 z-40">
<div className="flex items-center gap-3">
<button className="p-2 -ml-2 rounded-md text-gray-600 hover:bg-gray-100" onclick="toggleSidebar()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<span className="font-semibold tracking-tight">NEXUS</span>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scroll bg-gray-50 p-4 sm:p-8">

<div className="flex items-center gap-2 text-xs text-gray-500 mb-6">
<span>Finance</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span>Payments</span>
<i className="w-3 h-3" data-lucide="chevron-right"></i>
<span className="font-medium text-gray-900">Create</span>
</div>

<div className="max-w-4xl bg-white rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-gray-200 overflow-hidden">

<div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Create Payment</h1>
<p className="text-xs text-gray-500 mt-1">Manage transaction details and allocate funds.</p>
</div>
<button className="group flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50" type="button">
<i className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="arrow-left"></i>
                            Back
                        </button>
</div>

<form className="p-6 sm:p-8" id="paymentForm" onsubmit="event.preventDefault(); validateAndSubmit();">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-6">

<div className="md:col-span-4">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="date">Payment Date</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="calendar"></i>
</div>
<input className="block w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 shadow-sm transition-all hover:border-gray-300 outline-none" id="date" type="date" value="2025-11-24"/>
</div>
</div>
<div className="md:col-span-4">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="paymentType">Payment Type <span className="text-red-500">*</span></label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-9 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition-all hover:border-gray-300 outline-none cursor-pointer" id="paymentType">
<option disabled="" selected="" value="">Select Type</option>
<option value="bank">Bank Transfer</option>
<option value="cash">Cash</option>
<option value="check">Cheque</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="md:col-span-4">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="accountType">Account Type</label>
<div className="relative">
<select className="appearance-none block w-full rounded-lg border border-gray-200 bg-white py-2 pl-3 pr-9 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition-all hover:border-gray-300 outline-none cursor-pointer" id="accountType">
<option disabled="" selected="" value="">Select Account Type</option>
<option value="business">Business</option>
<option value="personal">Personal</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="md:col-span-12 h-px bg-gray-100 my-0.5"></div>

<div className="md:col-span-6">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="sourceAccount">Source Account <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="building-2"></i>
</div>
<select className="appearance-none block w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-9 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition-all hover:border-gray-300 outline-none cursor-pointer" id="sourceAccount">
<option disabled="" selected="" value="">Select Account</option>
<option value="main">Main Operating</option>
<option value="savings">Reserve Savings</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="md:col-span-6">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="paymentAccount">Beneficiary Account <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="user"></i>
</div>
<select className="appearance-none block w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-9 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition-all hover:border-gray-300 outline-none cursor-pointer" id="paymentAccount">
<option disabled="" selected="" value="">Select Payment Account</option>
<option value="vendor1">Vendor Services Ltd.</option>
<option value="contractor2">Contractor Inc.</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<i className="h-3.5 w-3.5" data-lucide="chevron-down"></i>
</div>
</div>
</div>

<div className="md:col-span-4">
<label className="block text-xs font-medium text-gray-500 mb-1.5">Due Amount</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-400 text-xs">$</span>
</div>
<input className="block w-full rounded-lg border border-gray-100 bg-gray-50 py-2 pl-6 pr-3 text-xs text-gray-500 cursor-not-allowed select-none" disabled="" type="text" value="2,500.00"/>
</div>
</div>
<div className="md:col-span-4 relative group">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="amount">Paying Amount <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-xs font-medium">$</span>
</div>
<input className="block w-full rounded-lg border border-gray-200 bg-white py-2 pl-6 pr-3 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-300 shadow-sm transition-all outline-none hover:border-gray-300" id="amount" placeholder="0.00" step="0.01" type="number"/>
<div className="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" id="amountErrorIcon">
<i className="h-3.5 w-3.5 text-red-500" data-lucide="alert-circle"></i>
</div>
</div>
<p className="hidden text-[10px] text-red-600 mt-1 fade-in" id="amountErrorMsg">Enter valid amount.</p>
</div>
<div className="md:col-span-4">
<label className="block text-xs font-medium text-gray-500 mb-1.5">Current Due</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-400 text-xs">$</span>
</div>
<input className="block w-full rounded-lg border border-gray-100 bg-gray-50 py-2 pl-6 pr-3 text-xs text-gray-500 cursor-not-allowed select-none" disabled="" type="text" value="1,200.00"/>
</div>
</div>

<div className="md:col-span-12">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="transId">Transaction ID</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-3.5 w-3.5 text-gray-400" data-lucide="hash"></i>
</div>
<input className="block w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 shadow-sm transition-all outline-none hover:border-gray-300 font-mono" id="transId" placeholder="e.g. TXN-8829302" type="text"/>
</div>
</div>

<div className="md:col-span-12">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Invoice / Receipt</label>
<div className="group relative border-dashed border-2 border-gray-200 rounded-xl p-5 hover:border-indigo-400 hover:bg-gray-50 transition-all cursor-pointer flex flex-col items-center justify-center text-center" id="dropZone" onclick="document.getElementById('fileInput').click()">
<div className="p-2.5 bg-gray-50 rounded-full mb-2 group-hover:bg-white group-hover:shadow-sm transition-all">
<i className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" data-lucide="upload-cloud"></i>
</div>
<p className="text-xs text-gray-900 font-medium">Click to upload <span className="text-gray-500 font-normal">or drag and drop</span></p>
<p className="text-[10px] text-gray-400 mt-0.5">SVG, PNG, JPG or PDF (max. 10MB)</p>
<input className="hidden" id="fileInput" onchange="handleFileSelect(this)" type="file"/>
</div>
<div className="hidden mt-2" id="filePreview">
<div className="flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center border border-indigo-100">
<i className="w-4 h-4 text-indigo-600" data-lucide="file-text"></i>
</div>
<div>
<p className="text-xs font-medium text-gray-900 truncate max-w-[180px]" id="fileName">invoice.pdf</p>
<p className="text-[10px] text-gray-500" id="fileSize">2.4 MB</p>
</div>
</div>
<button className="p-1.5 hover:bg-red-50 rounded-md group transition-colors" onclick="removeFile()" type="button">
<i className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-500 transition-colors" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>

<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6" id="customFieldsContainer"></div>
<div className="md:col-span-12">
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-md transition-colors border border-indigo-200/50 border-dashed" onclick="addCustomField()" type="button">
<i className="w-3 h-3" data-lucide="plus"></i>
                                    Add Custom Field
                                </button>
</div>

<div className="md:col-span-12">
<label className="block text-xs font-medium text-gray-700 mb-1.5" htmlFor="narration">Narration / Notes</label>
<textarea className="block w-full rounded-lg border border-gray-200 bg-white py-2 px-3 text-xs text-gray-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-gray-400 shadow-sm transition-all outline-none resize-none hover:border-gray-300" id="narration" placeholder="Add any relevant notes..." rows="3"></textarea>
</div>
</div>

<div className="mt-8 pt-6 border-t border-gray-100 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
<button className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-medium text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:text-gray-900 transition-all focus:ring-2 focus:ring-gray-200 outline-none" type="button">
                                Cancel
                            </button>
<button className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-medium text-white bg-gray-900 hover:bg-black shadow-lg shadow-gray-900/20 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 outline-none flex justify-center items-center gap-2" type="submit">
<span>Create Payment</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</div>
<div className="mt-8 flex justify-center text-xs text-gray-400">
                    © 2025 Nexus ERP System.
                </div>
</div>
</main>
</div>
<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40 hidden lg:hidden" id="backdrop" onclick="toggleSidebar()"></div>


    </>
  );
}
