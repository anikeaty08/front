import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // -- Mobile Menu Toggle Logic --
            const sidebar = document.getElementById('sidebar');
            const mobileMenuBtns = document.querySelectorAll('.mobile-menu-btn');
            const closeSidebarBtn = document.getElementById('close-sidebar-btn');
            const mobileOverlay = document.getElementById('mobile-overlay');

            function toggleMenu() {
                const isClosed = sidebar.classList.contains('-translate-x-full');
                if (isClosed) {
                    sidebar.classList.remove('-translate-x-full');
                    mobileOverlay.classList.remove('hidden');
                    setTimeout(() => {
                        mobileOverlay.classList.remove('opacity-0');
                    }, 10);
                } else {
                    sidebar.classList.add('-translate-x-full');
                    mobileOverlay.classList.add('opacity-0');
                    setTimeout(() => {
                        mobileOverlay.classList.add('hidden');
                    }, 300);
                }
            }

            mobileMenuBtns.forEach(btn => btn.addEventListener('click', toggleMenu));
            closeSidebarBtn.addEventListener('click', toggleMenu);
            mobileOverlay.addEventListener('click', toggleMenu);

            // -- SPA Navigation Logic --
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');

                    // Reset all nav links to inactive state
                    navLinks.forEach(nav => {
                        nav.classList.remove('bg-slate-100', 'text-slate-900');
                        nav.classList.add('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                    });

                    // Set clicked link to active state
                    link.classList.remove('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                    link.classList.add('bg-slate-100', 'text-slate-900');

                    // Show corresponding section and hide others
                    contentSections.forEach(section => {
                        if (section.id === targetId) {
                            section.classList.remove('hidden');
                            section.classList.add('flex');
                        } else {
                            section.classList.add('hidden');
                            section.classList.remove('flex');
                        }
                    });

                    // Auto-close sidebar on mobile after navigating
                    if (window.innerWidth < 768 && !sidebar.classList.contains('-translate-x-full')) {
                        toggleMenu();
                    }
                });
            });

            // -- Print Logic --
            const printBtn = document.getElementById('print-btn');
            if (printBtn) {
                printBtn.addEventListener('click', () => {
                    window.print();
                });
            }

            // -- Auto-Calculate Helpers --
            function parseNumber(str) {
                if (!str) return 0;
                const parsed = parseFloat(str.replace(/[^0-9.-]+/g, ""));
                return isNaN(parsed) ? 0 : parsed;
            }

            function formatCurrency(num) {
                return '$' + num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }

            function calculateTotals() {
                let subtotal = 0;
                document.querySelectorAll('.calc-row').forEach(row => {
                    const rateStr = row.querySelector('.row-rate').innerText;
                    const qtyStr = row.querySelector('.row-qty').innerText;

                    let rate = parseNumber(rateStr);
                    let qty = parseNumber(qtyStr);
                    let lineTotal = rate * qty;
                    
                    row.querySelector('.row-total').innerText = formatCurrency(lineTotal);
                    subtotal += lineTotal;
                });

                document.getElementById('subtotal-val').innerText = formatCurrency(subtotal);
                document.getElementById('total-val').innerText = formatCurrency(subtotal);
            }

            // -- Edit & Save Mode Logic --
            const editBtn = document.getElementById('edit-btn');
            const editText = document.getElementById('edit-text');
            const editIcon = document.getElementById('edit-icon');
            let isEditing = false;

            const simpleFields = ['billed-name', 'billed-attn', 'billed-addr1', 'billed-addr2'];

            function createInput(val, extraClasses = '') {
                return `<input type="text" class="w-full bg-slate-50 border border-slate-300 rounded px-2 py-1 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 shadow-sm ${extraClasses}" value="${val}">`;
            }

            if (editBtn) {
                editBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    isEditing = !isEditing;

                    if (isEditing) {
                        // Enter Edit Mode
                        editText.innerText = 'Save';
                        editIcon.setAttribute('icon', 'solar:check-square-linear');
                        editBtn.classList.replace('text-slate-600', 'text-emerald-600');
                        
                        // Convert simple fields to inputs
                        simpleFields.forEach(id => {
                            const el = document.getElementById(id);
                            if (el) {
                                // Keep base font style logic
                                let fontClasses = el.id === 'billed-name' ? 'text-sm font-medium' : 'text-sm';
                                el.innerHTML = createInput(el.innerText, fontClasses);
                            }
                        });

                        // Convert table rows to inputs
                        document.querySelectorAll('.calc-row').forEach(row => {
                            const titleEl = row.querySelector('.row-desc-title');
                            const subEl = row.querySelector('.row-desc-sub');
                            const rateEl = row.querySelector('.row-rate');
                            const qtyEl = row.querySelector('.row-qty');

                            titleEl.innerHTML = createInput(titleEl.innerText, 'text-sm font-medium mb-1');
                            subEl.innerHTML = createInput(subEl.innerText, 'text-xs');
                            rateEl.innerHTML = createInput(rateEl.innerText, 'text-sm text-right');
                            qtyEl.innerHTML = createInput(qtyEl.innerText, 'text-sm text-right');
                        });
                    } else {
                        // Save Mode
                        editText.innerText = 'Edit';
                        editIcon.setAttribute('icon', 'solar:pen-linear');
                        editBtn.classList.replace('text-emerald-600', 'text-slate-600');

                        // Save simple fields back to text
                        simpleFields.forEach(id => {
                            const el = document.getElementById(id);
                            if (el) {
                                const input = el.querySelector('input');
                                if (input) el.innerText = input.value;
                            }
                        });

                        // Save table rows back to text
                        document.querySelectorAll('.calc-row').forEach(row => {
                            const titleEl = row.querySelector('.row-desc-title');
                            const subEl = row.querySelector('.row-desc-sub');
                            const rateEl = row.querySelector('.row-rate');
                            const qtyEl = row.querySelector('.row-qty');

                            if(titleEl.querySelector('input')) titleEl.innerText = titleEl.querySelector('input').value;
                            if(subEl.querySelector('input')) subEl.innerText = subEl.querySelector('input').value;
                            
                            if(rateEl.querySelector('input')) {
                                let rateVal = rateEl.querySelector('input').value;
                                // Auto-format back to currency string if standard number was entered
                                if(rateVal && !rateVal.includes('$') && !isNaN(parseFloat(rateVal))) {
                                    rateVal = '$' + rateVal;
                                }
                                rateEl.innerText = rateVal;
                            }
                            
                            if(qtyEl.querySelector('input')) qtyEl.innerText = qtyEl.querySelector('input').value;
                        });

                        // Auto-calculate after saving
                        calculateTotals();
                    }
                });
            }

            // -- Download PDF Logic --
            const downloadBtn = document.getElementById('download-btn');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if(isEditing) {
                        alert("Please save your edits before downloading.");
                        return;
                    }

                    const element = document.querySelector('.invoice-container');
                    const opt = {
                        margin:       [0.5, 0.5, 0.5, 0.5], 
                        filename:     'INV-2023-084.pdf',
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { scale: 2, useCORS: true },
                        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
                    };
                    html2pdf().set(opt).from(element).save();
                });
            }

            // -- Copy Link Logic --
            const copyLinkBtn = document.getElementById('copy-link-btn');
            if (copyLinkBtn) {
                copyLinkBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        const originalHTML = copyLinkBtn.innerHTML;
                        copyLinkBtn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> <span>Copied!</span>`;
                        setTimeout(() => {
                            copyLinkBtn.innerHTML = originalHTML;
                        }, 2000);
                    });
                });
            }

            // -- Send Email Logic --
            const sendBtn = document.getElementById('send-btn');
            if (sendBtn) {
                sendBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    window.location.href = "mailto:?subject=Invoice%20INV-2023-084";
                });
            }

            // -- Prevent Default on empty links --
            document.querySelectorAll('a[href="#"]').forEach(link => {
                link.addEventListener('click', (e) => e.preventDefault());
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300 md:hidden" id="mobile-overlay"></div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 h-full flex flex-col transform -translate-x-full transition-transform duration-300 md:relative md:translate-x-0 shrink-0" id="sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:routing-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 uppercase">S&amp;L Freight</span>
</div>

<button className="md:hidden text-slate-400 hover:text-slate-900" id="close-sidebar-btn">
<iconify-icon icon="solar:close-square-linear" width="24"></iconify-icon>
</button>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1">
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" data-target="view-dashboard" href="#">
<iconify-icon icon="solar:widget-linear" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium bg-slate-100 text-slate-900 rounded-md transition-colors" data-target="view-invoices" href="#">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
                Invoices
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" data-target="view-clients" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                Clients
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" data-target="view-fleet" href="#">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
                Fleet &amp; Drivers
            </a>
<a className="nav-link flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 transition-colors" data-target="view-reports" href="#">
<iconify-icon icon="solar:chart-linear" width="20"></iconify-icon>
                Reports
            </a>
</nav>

<div className="p-4 border-t border-slate-100 shrink-0">
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs font-semibold">
                    SL
                </div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Admin User</span>
<span className="text-xs text-slate-500">Settings &amp; Profile</span>
</div>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<section className="content-section hidden flex-1 flex-col h-full overflow-hidden w-full" id="view-dashboard">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 sm:px-8 z-10 shrink-0 gap-4">
<button className="mobile-menu-btn md:hidden text-slate-500 hover:text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="font-medium text-slate-900">Dashboard</h2>
</header>
<div className="scrollable-area flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-6xl mx-auto">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:wallet-money-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">Total Revenue (YTD)</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$1,245,000.00</div>
<div className="text-xs text-emerald-600 flex items-center gap-1 font-medium mt-1">
<iconify-icon icon="solar:trend-up-linear" width="16"></iconify-icon>
                                +14.5% from last year
                            </div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:bill-list-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">Outstanding Invoices</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">$132,450.00</div>
<div className="text-xs text-amber-600 flex items-center gap-1 font-medium mt-1">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
                                8 invoices overdue
                            </div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:box-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">Active Loads</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">14</div>
<div className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-1">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                                6 delivering today
                            </div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col gap-3">
<div className="flex items-center gap-3 text-slate-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
<span className="text-sm font-medium">Total Drivers</span>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">28</div>
<div className="text-xs text-slate-500 flex items-center gap-1 font-medium mt-1">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                                24 currently active
                            </div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight text-slate-900">Recent Invoices</h3>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">View All</a>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left text-sm whitespace-nowrap min-w-[600px]">
<thead className="bg-slate-50/50">
<tr>
<th className="px-6 py-3 font-medium text-slate-500">Invoice ID</th>
<th className="px-6 py-3 font-medium text-slate-500">Client</th>
<th className="px-6 py-3 font-medium text-slate-500">Date Issued</th>
<th className="px-6 py-3 font-medium text-slate-500 text-right">Amount</th>
<th className="px-6 py-3 font-medium text-slate-500 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">INV-2023-084</td>
<td className="px-6 py-4">Apex Manufacturing Corp.</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$2,824.18</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
                                                Pending
                                            </span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">INV-2023-083</td>
<td className="px-6 py-4">Global Logistics Inc.</td>
<td className="px-6 py-4 text-slate-500">Oct 22, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$4,150.00</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                                Paid
                                            </span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">INV-2023-082</td>
<td className="px-6 py-4">Summit Retail Group</td>
<td className="px-6 py-4 text-slate-500">Oct 15, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$1,890.50</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                                Paid
                                            </span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">INV-2023-081</td>
<td className="px-6 py-4">Oasis Distributors</td>
<td className="px-6 py-4 text-slate-500">Sep 28, 2023</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$5,200.00</td>
<td className="px-6 py-4 text-right">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200/60">
                                                Overdue
                                            </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="content-section flex flex-1 flex-col h-full overflow-hidden w-full" id="view-invoices">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 z-10 shrink-0">
<div className="flex items-center gap-4">
<button className="mobile-menu-btn md:hidden text-slate-500 hover:text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm">
<a className="hidden sm:inline-block text-slate-500 hover:text-slate-900 transition-colors" href="#">Invoices</a>
<span className="hidden sm:inline-block text-slate-300">/</span>
<span className="font-medium text-slate-900">INV-2023-084</span>
<span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">
                            Pending
                        </span>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="edit-btn">
<iconify-icon icon="solar:pen-linear" id="edit-icon" width="18"></iconify-icon>
<span id="edit-text">Edit</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="print-btn">
<iconify-icon icon="solar:printer-linear" width="18"></iconify-icon>
<span className="hidden sm:inline">Print</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="download-btn">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
<span>PDF</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm" id="copy-link-btn">
<iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
<span>Link</span>
</button>
<button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm ml-1" id="send-btn">
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
<span>Send</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8 pb-24" id="main-scroll">

<div className="invoice-container max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-12">

<div className="flex flex-col sm:flex-row justify-between items-start gap-8 border-b border-slate-100 pb-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:routing-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 uppercase">S&amp;L Freight</span>
</div>
<div className="text-sm text-slate-500 space-y-1">
<p>1280 Logistics Blvd, Suite 400</p>
<p>Dallas, TX 75201</p>
<p>United States</p>
<p className="pt-2">billing@slfreight.com</p>
<p>+1 (555) 019-8472</p>
</div>
</div>
<div className="text-left sm:text-right">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">INVOICE</h1>
<p className="text-sm font-medium text-slate-600 mb-4">#INV-2023-084</p>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:inline-grid">
<span className="text-slate-500">Issue Date</span>
<span className="text-slate-900 font-medium sm:text-right">Oct 24, 2023</span>
<span className="text-slate-500">Due Date</span>
<span className="text-slate-900 font-medium sm:text-right">Nov 23, 2023</span>
</div>
</div>
</div>

<div className="mb-10">
<h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">Billed To</h3>
<p className="text-sm font-medium text-slate-900" id="billed-name">Apex Manufacturing Corp.</p>
<div className="text-sm text-slate-500 space-y-1 mt-1">
<p id="billed-attn">Attn: Accounts Payable</p>
<p id="billed-addr1">4500 Industrial Pkwy</p>
<p id="billed-addr2">Chicago, IL 60632</p>
</div>
</div>

<div className="w-full overflow-x-auto mb-8">
<table className="w-full text-left text-sm border-collapse min-w-[600px]">
<thead>
<tr className="border-b border-slate-200">
<th className="py-3 font-medium text-slate-500 w-1/2">Description</th>
<th className="py-3 font-medium text-slate-500 text-right">Rate</th>
<th className="py-3 font-medium text-slate-500 text-right">Miles/Qty</th>
<th className="py-3 font-medium text-slate-500 text-right">Line Total</th>
</tr>
</thead>
<tbody className="text-slate-700 divide-y divide-slate-100">
<tr className="calc-row">
<td className="py-4">
<p className="font-medium text-slate-900 row-desc-title">Full Truckload (FTL) Freight</p>
<p className="text-slate-500 text-xs mt-0.5 row-desc-sub">Dallas, TX to Chicago, IL - Load Ref: LD-9923</p>
</td>
<td className="py-4 text-right row-rate">$2.45</td>
<td className="py-4 text-right row-qty">925</td>
<td className="py-4 text-right font-medium text-slate-900 row-total">$2,266.25</td>
</tr>
<tr className="calc-row">
<td className="py-4">
<p className="font-medium text-slate-900 row-desc-title">Fuel Surcharge (FSC)</p>
<p className="text-slate-500 text-xs mt-0.5 row-desc-sub">Standard national average adjustment</p>
</td>
<td className="py-4 text-right row-rate">$407.93</td>
<td className="py-4 text-right row-qty">1</td>
<td className="py-4 text-right font-medium text-slate-900 row-total">$407.93</td>
</tr>
<tr className="calc-row">
<td className="py-4">
<p className="font-medium text-slate-900 row-desc-title">Lumper Fee</p>
<p className="text-slate-500 text-xs mt-0.5 row-desc-sub">Unloading service at destination</p>
</td>
<td className="py-4 text-right row-rate">$150.00</td>
<td className="py-4 text-right row-qty">1</td>
<td className="py-4 text-right font-medium text-slate-900 row-total">$150.00</td>
</tr>
</tbody>
</table>
</div>

<div className="flex flex-col sm:flex-row justify-end border-t border-slate-200 pt-6">
<div className="w-full sm:w-80 space-y-3">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Subtotal</span>
<span className="font-medium text-slate-900" id="subtotal-val">$2,824.18</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Tax (0%)</span>
<span className="font-medium text-slate-900">$0.00</span>
</div>
<div className="flex justify-between text-base pt-3 border-t border-slate-100">
<span className="font-semibold text-slate-900">Total Amount</span>
<span className="font-semibold text-slate-900" id="total-val">$2,824.18</span>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 text-sm text-slate-500">
<h4 className="font-medium text-slate-700 mb-1">Payment Terms &amp; Notes</h4>
<p>Net 30. Please remit payment by the due date to avoid a 1.5% late fee per month. Make all checks payable to S&amp;L Freight LLC. For ACH transfers, please use routing #123456789.</p>
</div>
</div>
</div>
</section>

<section className="content-section hidden flex-1 flex-col h-full overflow-hidden w-full" id="view-clients">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 sm:px-8 z-10 shrink-0 gap-4">
<button className="mobile-menu-btn md:hidden text-slate-500 hover:text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="font-medium text-slate-900">Clients</h2>
</header>
<div className="scrollable-area flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-6xl mx-auto">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
<div className="relative w-full sm:w-80">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent shadow-sm" placeholder="Search clients..." type="text"/>
</div>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto justify-center">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span>Add New Client</span>
</button>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<div className="overflow-x-auto w-full">
<table className="w-full text-left text-sm whitespace-nowrap min-w-[800px]">
<thead className="bg-slate-50/50">
<tr>
<th className="px-6 py-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Client Name</th>
<th className="px-6 py-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Contact Info</th>
<th className="px-6 py-4 font-medium text-slate-500 text-xs uppercase tracking-wider">Location</th>
<th className="px-6 py-4 font-medium text-slate-500 text-xs uppercase tracking-wider text-right">Total Billed (YTD)</th>
<th className="px-6 py-4 font-medium text-slate-500 text-xs uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Apex Manufacturing Corp.</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Jane Doe</span>
<span className="text-xs text-slate-500">jane@apexcorp.com</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Chicago, IL</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$142,500.00</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Global Logistics Inc.</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Mark Smith</span>
<span className="text-xs text-slate-500">mark.smith@globallogistics.com</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Houston, TX</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$89,240.50</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Summit Retail Group</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Sarah Johnson</span>
<span className="text-xs text-slate-500">s.johnson@summitretail.com</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Denver, CO</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$45,100.00</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-slate-900">Oasis Distributors</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span>Kevin Lee</span>
<span className="text-xs text-slate-500">klee@oasisdist.com</span>
</div>
</td>
<td className="px-6 py-4 text-slate-500">Phoenix, AZ</td>
<td className="px-6 py-4 text-right font-medium text-slate-900">$21,800.25</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="content-section hidden flex-1 flex-col h-full overflow-hidden w-full" id="view-fleet">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 sm:px-8 z-10 shrink-0 gap-4">
<button className="mobile-menu-btn md:hidden text-slate-500 hover:text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="font-medium text-slate-900">Fleet &amp; Drivers</h2>
</header>
<div className="scrollable-area flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-6xl mx-auto space-y-10">

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-slate-900">Active Drivers</h3>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">View Directory</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Michael Rodriguez</h4>
<p className="text-xs text-slate-500 mt-0.5">ID: DRV-8942</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                                        En Route
                                    </span>
</div>
<div className="bg-slate-50 rounded-lg p-3 text-xs border border-slate-100">
<div className="flex items-center gap-2 text-slate-600 mb-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Current: I-35 N, near Austin, TX</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
<span>Load: LD-9923 (Dallas to Chicago)</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">David Chen</h4>
<p className="text-xs text-slate-500 mt-0.5">ID: DRV-8915</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                        Available
                                    </span>
</div>
<div className="bg-slate-50 rounded-lg p-3 text-xs border border-slate-100">
<div className="flex items-center gap-2 text-slate-600 mb-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Current: Atlanta Terminal</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
<span>Load: Awaiting Dispatch</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col gap-4">
<div className="flex justify-between items-start">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Robert Williams</h4>
<p className="text-xs text-slate-500 mt-0.5">ID: DRV-8802</p>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60">
                                        Off Duty
                                    </span>
</div>
<div className="bg-slate-50 rounded-lg p-3 text-xs border border-slate-100">
<div className="flex items-center gap-2 text-slate-600 mb-1.5">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Current: Seattle, WA</span>
</div>
<div className="flex items-center gap-2 text-slate-600">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Restarting 34-hour</span>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium tracking-tight text-slate-900">Equipment Status</h3>
<button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Manage Fleet</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-3">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                        Available
                                    </span>
</div>
<h4 className="font-medium text-slate-900 text-sm">Truck #1042</h4>
<p className="text-xs text-slate-500 mt-1">2022 Freightliner Cascadia</p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-3">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:bus-linear" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                                        In Use
                                    </span>
</div>
<h4 className="font-medium text-slate-900 text-sm">Truck #1038</h4>
<p className="text-xs text-slate-500 mt-1">2021 Peterbilt 579</p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-3">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200/60">
                                        Maintenance
                                    </span>
</div>
<h4 className="font-medium text-slate-900 text-sm">Trailer #T-501</h4>
<p className="text-xs text-slate-500 mt-1">53' Dry Van</p>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<div className="flex justify-between items-center mb-3">
<div className="bg-slate-100 p-2 rounded-lg text-slate-600">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                                        Available
                                    </span>
</div>
<h4 className="font-medium text-slate-900 text-sm">Trailer #T-504</h4>
<p className="text-xs text-slate-500 mt-1">53' Refrigerated</p>
</div>
</div>
</section>
</div>
</div>
</section>

<section className="content-section hidden flex-1 flex-col h-full overflow-hidden w-full" id="view-reports">
<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center px-4 sm:px-8 z-10 shrink-0 gap-4">
<button className="mobile-menu-btn md:hidden text-slate-500 hover:text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="font-medium text-slate-900">Reports</h2>
</header>
<div className="scrollable-area flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-6xl mx-auto">
<div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<h3 className="text-xl font-medium tracking-tight text-slate-900">Available Reports</h3>
<div className="flex gap-2">
<select className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
<option>Last 30 Days</option>
<option>This Quarter</option>
<option>Year to Date</option>
<option>Custom Range</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-5 flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Monthly Earnings</h4>
<p className="text-sm text-slate-500">Comprehensive breakdown of total revenue, broken down by client and load type.</p>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex justify-end">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                                    Download CSV
                                </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-5 flex-1">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:gas-station-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Fuel Expenses</h4>
<p className="text-sm text-slate-500">Detailed logs of fleet fueling costs, including state-by-state IFTA breakdowns.</p>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex justify-end">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                                    Download CSV
                                </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-5 flex-1">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Tax Summaries</h4>
<p className="text-sm text-slate-500">Quarterly tax estimates based on gross earnings, deductible miles, and overhead.</p>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex justify-end">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                                    Download PDF
                                </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-5 flex-1">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Driver Settlements</h4>
<p className="text-sm text-slate-500">Pay period summaries for all active drivers including deductions and bonuses.</p>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex justify-end">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                                    Download CSV
                                </button>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 flex flex-col">
<div className="p-5 flex-1">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-1">Maintenance Costs</h4>
<p className="text-sm text-slate-500">Repair shop logs, preventative maintenance records, and parts inventory expenses.</p>
</div>
<div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 rounded-b-xl flex justify-end">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                                    Download CSV
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
