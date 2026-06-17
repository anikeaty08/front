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



        // --- Tab & View Logic ---
        let currentTab = 'all';
        let currentView = 'grid'; // 'grid' or 'list'

        function switchTab(tabId) {
            currentTab = tabId;
            
            // Update Tab Styling
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('border-gray-900', 'text-gray-900');
                btn.classList.add('border-transparent', 'text-gray-500');
            });
            const activeBtn = document.getElementById('tab-' + tabId);
            if(activeBtn) {
                activeBtn.classList.remove('border-transparent', 'text-gray-500');
                activeBtn.classList.add('border-gray-900', 'text-gray-900');
            }

            // Filter Content in BOTH views
            const items = document.querySelectorAll('.content-item');
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                if (tabId === 'all' || category === tabId) {
                    item.classList.remove('hidden');
                    // Ensure List items are flex, Grid items are block/flex depending on view
                    if(item.parentElement.id === 'list-view') {
                        item.style.display = 'flex'; // Restore flex for list items
                    } else {
                        item.style.display = ''; // Reset to default (block/flex) defined by class
                    }
                } else {
                    item.classList.add('hidden');
                    item.style.display = 'none'; // Force hide
                }
            });
        }

        function switchView(viewType) {
            currentView = viewType;
            const gridContainer = document.getElementById('grid-view');
            const listContainer = document.getElementById('list-view');
            const btnGrid = document.getElementById('btn-grid');
            const btnList = document.getElementById('btn-list');

            // Toggle Button Styles
            if (viewType === 'grid') {
                gridContainer.classList.remove('hidden');
                listContainer.classList.add('hidden');
                
                btnGrid.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                btnGrid.classList.remove('text-gray-500');
                
                btnList.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                btnList.classList.add('text-gray-500');
            } else {
                gridContainer.classList.add('hidden');
                listContainer.classList.remove('hidden');

                btnList.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
                btnList.classList.remove('text-gray-500');

                btnGrid.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
                btnGrid.classList.add('text-gray-500');
            }
            
            // Re-apply filter to ensure correct items are shown in new view
            switchTab(currentTab);
        }


        // --- Drawer Logic ---
        const drawerPanel = document.getElementById('drawer-panel');
        const drawerOverlay = document.getElementById('drawer-overlay');
        const drawerTitle = document.getElementById('drawer-title');
        const drawerStatus = document.getElementById('drawer-status-badge');

        function openDrawer(title, status, type) {
            drawerTitle.innerText = title;
            drawerStatus.innerText = status;
            
            drawerStatus.className = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ';
            if(status === 'Signed' || status === 'Active') {
                drawerStatus.classList.add('bg-green-50', 'text-green-700', 'border-green-100');
            } else if (status === 'Expiring' || status === 'Needs Review') {
                drawerStatus.classList.add('bg-red-50', 'text-red-700', 'border-red-100');
            } else {
                drawerStatus.classList.add('bg-gray-100', 'text-gray-600', 'border-gray-200');
            }

            drawerOverlay.classList.remove('hidden');
            setTimeout(() => {
                drawerOverlay.classList.remove('opacity-0');
                drawerPanel.classList.remove('translate-x-[110%]');
            }, 10);
        }

        function closeDrawer() {
            drawerPanel.classList.add('translate-x-[110%]');
            drawerOverlay.classList.add('opacity-0');
            setTimeout(() => {
                drawerOverlay.classList.add('hidden');
            }, 300);
        }

        // --- New Doc Modal Logic ---
        const modal = document.getElementById('new-doc-modal');
        const modalBackdrop = document.getElementById('new-doc-backdrop');
        const modalContent = document.getElementById('new-doc-content');

        function openNewDocModal() {
            modal.classList.remove('hidden');
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('opacity-0', 'scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeNewDocModal() {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.add('opacity-0', 'scale-95');
            modalContent.classList.remove('scale-100');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 200);
        }

        // Initialize with default tab
        switchTab('all');
    
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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 h-full z-20">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900 tracking-tighter text-lg font-semibold">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white text-xs">L</div>
                LEGALSTACK
            </div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Workspace</div>
<a className="sidebar-link active flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-900 transition-colors" href="#">
<span className="iconify text-gray-500" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </a>
<div className="pt-6 px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Documents</div>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" onclick="switchTab('agreement')">
<span className="iconify" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
                Agreements
            </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" onclick="switchTab('policy')">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
                Policies
            </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" onclick="switchTab('contract')">
<span className="iconify" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="18"></span>
                Contracts
            </a>
<a className="sidebar-link flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors" href="#" onclick="switchTab('po')">
<span className="iconify" data-icon="lucide:shopping-cart" data-strokeWidth="1.5" data-width="18"></span>
                PO Terms
            </a>
</nav>

<div className="p-4 border-t border-gray-100">
<button className="flex items-center gap-3 w-full hover:bg-gray-50 p-2 rounded-lg transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Jane Doe</p>
<p className="text-xs text-gray-400 truncate">Legal Ops Lead</p>
</div>
<span className="iconify text-gray-400" data-icon="lucide:chevron-up" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-gray-50/50 relative">

<header className="h-16 flex items-center justify-between px-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
<div className="flex items-center gap-4">
<nav className="flex text-sm font-medium text-gray-500">
<span className="hover:text-gray-900 cursor-pointer transition-colors">Home</span>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900">Documents</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="iconify absolute left-3 top-2.5 text-gray-400 group-focus-within:text-gray-600 transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="16"></span>
<input className="pl-9 pr-4 py-2 bg-gray-100 border border-transparent rounded-lg text-sm focus:bg-white focus:border-gray-200 focus:ring-0 focus:outline-none transition-all w-64 placeholder-gray-400 text-gray-800" placeholder="Search..." type="text"/>
</div>
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors relative">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Documents</h1>
<p className="text-sm text-gray-500 mt-1">Manage your legal agreements, policies, and contracts.</p>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-sm flex items-center gap-2" onclick="openNewDocModal()">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="16"></span>
                        New Document
                    </button>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 gap-4">

<nav aria-label="Tabs" className="-mb-px flex space-x-6 overflow-x-auto no-scrollbar">
<button className="tab-btn border-gray-900 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" id="tab-all" onclick="switchTab('all')">All</button>
<button className="tab-btn border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" id="tab-agreement" onclick="switchTab('agreement')">Agreements</button>
<button className="tab-btn border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" id="tab-policy" onclick="switchTab('policy')">Policies</button>
<button className="tab-btn border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" id="tab-contract" onclick="switchTab('contract')">Contracts</button>
<button className="tab-btn border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors" id="tab-po" onclick="switchTab('po')">PO Terms</button>
</nav>

<div className="flex items-center bg-gray-100 p-1 rounded-lg mb-2 sm:mb-0">
<button className="p-1.5 rounded-md bg-white text-gray-900 shadow-sm transition-all" id="btn-grid" onclick="switchView('grid')">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
</button>
<button className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 transition-all" id="btn-list" onclick="switchView('list')">
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in" id="grid-view">

<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer relative overflow-hidden" data-category="agreement" onclick="openDrawer('NDA - Acme Corp', 'Signed', 'agreement')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<span className="iconify" data-icon="lucide:file-signature" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Signed</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">NDA - Acme Corp</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Standard non-disclosure agreement for partnership evaluation.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2"/>
</div>
<span className="text-xs text-gray-400 font-medium">Updated 2h ago</span>
</div>
</div>
<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="agreement" onclick="openDrawer('Vendor Agreement 2024', 'Pending', 'agreement')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<span className="iconify" data-icon="lucide:handshake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100/50">Pending</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Vendor Agreement 2024</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">SaaS services agreement with DataProcess Inc.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span className="text-xs text-gray-400 font-medium">Oct 24</span>
</div>
</div>

<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="policy" onclick="openDrawer('Remote Work Policy v2.1', 'Active', 'policy')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Active</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Remote Work Policy v2.1</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Guidelines for hybrid working environment and security.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-500">Effective Jan 1</span>
<span className="text-xs text-gray-400 font-medium">V 2.1</span>
</div>
</div>
<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="policy" onclick="openDrawer('Data Privacy Framework', 'Needs Review', 'policy')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
<span className="iconify" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100/50">Needs Review</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Data Privacy Framework</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">GDPR and CCPA compliance updates for Q4.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-medium text-gray-500">+2</div>
</div>
<span className="text-xs text-gray-400 font-medium">Yesterday</span>
</div>
</div>

<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="contract" onclick="openDrawer('AWS Enterprise Support', 'Expiring', 'contract')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<span className="iconify" data-icon="lucide:scroll-text" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100/50">Expiring</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">AWS Enterprise Support</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Annual cloud infrastructure support contract.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-500">Expiring in 12 days</span>
<span className="text-xs text-gray-400 font-medium">Nov 20</span>
</div>
</div>
<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="contract" onclick="openDrawer('Office Lease - NY', 'Active', 'contract')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Active</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Office Lease - NY</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Commercial lease for headquarters at 100 Main St.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-500">Valid until 2026</span>
<span className="text-xs text-gray-400 font-medium">Long Term</span>
</div>
</div>

<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="po" onclick="openDrawer('Standard Purchase Terms v4', 'Draft', 'po')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<span className="iconify" data-icon="lucide:receipt" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Draft</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Standard Purchase Terms v4</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Updated payment terms to Net 30 default.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-500">Procurement</span>
<span className="text-xs text-gray-400 font-medium">v4.0</span>
</div>
</div>
<div className="content-item group bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all cursor-pointer" data-category="po" onclick="openDrawer('Hardware Procurement', 'Active', 'po')">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<span className="iconify" data-icon="lucide:server" data-strokeWidth="1.5" data-width="20"></span>
</div>
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Active</span>
</div>
<h3 className="text-sm font-semibold text-gray-900 mb-1">Hardware Procurement</h3>
<p className="text-xs text-gray-500 mb-4 line-clamp-2">Dell &amp; Apple specific procurement guidelines.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50">
<span className="text-xs text-gray-500">IT Dept</span>
<span className="text-xs text-gray-400 font-medium">v1.2</span>
</div>
</div>
</div>

<div className="hidden bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm" id="list-view">
<div className="divide-y divide-gray-100">

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="agreement" onclick="openDrawer('NDA - Acme Corp', 'Signed', 'agreement')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:file-signature" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">NDA - Acme Corp</p>
<p className="text-xs text-gray-500 truncate">Standard non-disclosure agreement</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Signed</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2"/>
</div>
<span className="text-xs text-gray-500 ml-2">Updated 2h ago</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="agreement" onclick="openDrawer('Vendor Agreement 2024', 'Pending', 'agreement')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:handshake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Vendor Agreement 2024</p>
<p className="text-xs text-gray-500 truncate">SaaS services with DataProcess</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100/50">Pending</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span className="text-xs text-gray-500 ml-2">Oct 24</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="policy" onclick="openDrawer('Remote Work Policy v2.1', 'Active', 'policy')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Remote Work Policy v2.1</p>
<p className="text-xs text-gray-500 truncate">Hybrid working guidelines</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Active</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<span className="text-xs text-gray-500">Effective Jan 1</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="policy" onclick="openDrawer('Data Privacy Framework', 'Needs Review', 'policy')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Data Privacy Framework</p>
<p className="text-xs text-gray-500 truncate">GDPR/CCPA compliance</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100/50">Needs Review</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<div className="flex -space-x-2">
<img alt="" className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
</div>
<span className="text-xs text-gray-500 ml-2">Yesterday</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="contract" onclick="openDrawer('AWS Enterprise Support', 'Expiring', 'contract')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:scroll-text" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">AWS Enterprise Support</p>
<p className="text-xs text-gray-500 truncate">Annual cloud support</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-100/50">Expiring</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<span className="text-xs text-gray-500">Nov 20</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="contract" onclick="openDrawer('Office Lease - NY', 'Active', 'contract')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Office Lease - NY</p>
<p className="text-xs text-gray-500 truncate">100 Main St Headquarters</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Active</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<span className="text-xs text-gray-500">Long Term</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="po" onclick="openDrawer('Standard Purchase Terms v4', 'Draft', 'po')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:receipt" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Standard Purchase Terms v4</p>
<p className="text-xs text-gray-500 truncate">Net 30 default updates</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">Draft</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<span className="text-xs text-gray-500">v4.0</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>

<div className="content-item p-4 hover:bg-gray-50 cursor-pointer transition-colors flex items-center justify-between group" data-category="po" onclick="openDrawer('Hardware Procurement', 'Active', 'po')">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
<span className="iconify" data-icon="lucide:server" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="min-w-0">
<p className="text-sm font-semibold text-gray-900 truncate">Hardware Procurement</p>
<p className="text-xs text-gray-500 truncate">Dell &amp; Apple guidelines</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-50 text-green-700 border border-green-100/50">Active</span>
</div>
<div className="hidden md:flex items-center gap-2 w-1/4">
<span className="text-xs text-gray-500">v1.2</span>
</div>
<div className="flex items-center justify-end">
<span className="iconify text-gray-300 group-hover:text-gray-500 transition-colors" data-icon="lucide:chevron-right" data-width="16"></span>
</div>
</div>
</div>
</div>
<div className="h-12"></div> 
</div>
</div>

<div className="fixed inset-0 bg-gray-900/10 backdrop-blur-[2px] z-40 hidden transition-opacity duration-300 opacity-0" id="drawer-overlay" onclick="closeDrawer()"></div>

<div className="fixed top-2 right-2 bottom-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 transform translate-x-[110%] transition-transform duration-300 ease-in-out flex flex-col" id="drawer-panel">
<div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
<span>Document Details</span>
</div>
<button className="text-gray-400 hover:text-gray-700 hover:bg-gray-100 p-1 rounded-md transition-colors" onclick="closeDrawer()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="2" data-width="18"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100" id="drawer-status-badge">
                            Active
                        </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> Last edited 2 days ago
                        </span>
</div>
<h2 className="text-xl font-semibold text-gray-900 tracking-tight leading-snug" id="drawer-title">
                        Non-Disclosure Agreement
                    </h2>
<p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        This document outlines the confidentiality terms agreed upon between the involved parties.
                    </p>
</div>
<div className="bg-gray-50 rounded-lg p-4 border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
<span className="iconify text-gray-700" data-icon="lucide:file-edit" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Content Editor</p>
<p className="text-xs text-gray-500">View and edit document body</p>
</div>
</div>
<span className="iconify text-gray-300 group-hover:text-gray-600" data-icon="lucide:external-link" data-width="16"></span>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Signatories</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/100?img=12"/>
<div>
<p className="text-sm font-medium text-gray-900">Sarah Connor</p>
<p className="text-xs text-gray-500">sarah@skynet.com</p>
</div>
</div>
<span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100 flex items-center gap-1">
<span className="iconify" data-icon="lucide:check" data-width="10"></span> Signed
                            </span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500 border border-gray-200">JD</div>
<div>
<p className="text-sm font-medium text-gray-900">John Doe</p>
<p className="text-xs text-gray-500">john@legalstack.com</p>
</div>
</div>
<span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded border border-gray-200">
                                Pending
                            </span>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Info</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 border border-gray-100 rounded-lg">
<p className="text-xs text-gray-500 mb-1">Created By</p>
<p className="text-sm font-medium text-gray-900">Legal Team</p>
</div>
<div className="p-3 border border-gray-100 rounded-lg">
<p className="text-xs text-gray-500 mb-1">Effective Date</p>
<p className="text-sm font-medium text-gray-900">Nov 12, 2024</p>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-gray-100 bg-gray-50/50 rounded-b-2xl">
<div className="grid grid-cols-1 gap-3">
<button className="w-full bg-gray-900 hover:bg-black text-white py-2.5 px-4 rounded-lg text-sm font-medium shadow-sm hover:shadow transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:send" data-width="16"></span>
                        Send with Signmagics
                    </button>
<button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 py-2.5 px-4 rounded-lg text-sm font-medium shadow-sm transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span>
                        Renew Document
                    </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="new-doc-modal">

<div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity opacity-0" id="new-doc-backdrop" onclick="closeNewDocModal()"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 transform scale-95 opacity-0 transition-all duration-200" id="new-doc-content">
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-semibold text-gray-900 tracking-tight">New Document</h2>
<button className="text-gray-400 hover:text-gray-700 transition-colors" onclick="closeNewDocModal()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeNewDocModal();">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Document Title</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 focus:ring-0 transition-all placeholder-gray-400" placeholder="e.g. Master Services Agreement" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 focus:ring-0 transition-all appearance-none text-gray-700">
<option>Agreement</option>
<option>Policy</option>
<option>Contract</option>
<option>PO Term</option>
</select>
<span className="iconify absolute right-3 top-2.5 text-gray-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">Description (Optional)</label>
<textarea className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:bg-white focus:border-gray-400 focus:ring-0 transition-all placeholder-gray-400 resize-none" placeholder="Brief description of the document..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-gray-900 hover:bg-black text-white py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all flex items-center justify-center gap-2" type="submit">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                                Create Document
                            </button>
</div>
</form>
</div>
</div>
</div>
</main>


    </>
  );
}
