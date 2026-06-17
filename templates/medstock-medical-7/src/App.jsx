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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}



        // Mock Data for "Native Database" Simulation
        let currentUser = 'admin'; // 'admin' or 'user'
        
        let inventory = [
            { id: 101, name: 'Olympus Microscope', category: 'Equipment', qty: 15, location: 'Lab 1-A' },
            { id: 102, name: 'Beaker 500ml', category: 'Consumables', qty: 200, location: 'Storage B' },
            { id: 103, name: 'Paracetamol 500mg', category: 'Chemicals', qty: 5000, location: 'Pharma Cold Storage' },
            { id: 104, name: 'Surgical Mask', category: 'Consumables', qty: 1000, location: 'General Store' },
            { id: 105, name: 'Anatomy Model (Heart)', category: 'Equipment', qty: 4, location: 'Anatomy Wing' },
        ];

        let requests = [
            { id: 'REQ-001', user: 'Dr. Smith', dept: 'Pathology', itemId: 102, itemName: 'Beaker 500ml', status: 'Pending' },
            { id: 'REQ-002', user: 'Nurse Joy', dept: 'Surgery', itemId: 104, itemName: 'Surgical Mask', status: 'Approved' },
            { id: 'REQ-003', user: 'Prof. Oak', dept: 'Research', itemId: 101, itemName: 'Olympus Microscope', status: 'Pending' },
        ];

        // --- Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            renderInventory();
            renderRequests();
            renderCatalog();
            updateStats();
            updateRoleUI();
        });

        // --- View Navigation ---
        function switchView(viewName) {
            // Hide all views
            ['dashboard', 'inventory', 'requests', 'catalog'].forEach(v => {
                document.getElementById('view-' + v).classList.add('hidden');
                document.getElementById('nav-' + v).classList.remove('bg-gray-100', 'text-gray-900');
                document.getElementById('nav-' + v).classList.add('text-gray-600');
            });
            
            // Show selected
            document.getElementById('view-' + viewName).classList.remove('hidden');
            document.getElementById('nav-' + viewName).classList.add('bg-gray-50', 'text-gray-900');
            document.getElementById('nav-' + viewName).classList.remove('text-gray-600');
            
            // Update breadcrumb
            document.getElementById('breadcrumb').innerText = viewName.charAt(0).toUpperCase() + viewName.slice(1);
        }

        // --- Rendering ---
        function renderInventory() {
            const tbody = document.getElementById('inventory-table-body');
            tbody.innerHTML = '';
            inventory.forEach(item => {
                const tr = document.createElement('tr');
                tr.className = 'hover:bg-gray-50 transition-colors group';
                tr.innerHTML = `
                    <td class="px-6 py-3 font-mono text-gray-400 text-xs">#${item.id}</td>
                    <td class="px-6 py-3 font-medium text-gray-900">${item.name}</td>
                    <td class="px-6 py-3 text-gray-500">${item.category}</td>
                    <td class="px-6 py-3 text-gray-900">${item.qty}</td>
                    <td class="px-6 py-3 text-gray-500">${item.location}</td>
                    <td class="px-6 py-3 text-right">
                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${item.qty > 10 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}">
                            ${item.qty > 10 ? 'In Stock' : 'Low Stock'}
                        </span>
                    </td>
                `;
                tbody.appendChild(tr);
            });
            document.getElementById('stat-total').innerText = inventory.reduce((acc, curr) => acc + parseInt(curr.qty), 0).toLocaleString();
        }

        function renderRequests() {
            const tbody = document.getElementById('requests-table-body');
            tbody.innerHTML = '';
            let pendingCount = 0;

            requests.forEach(req => {
                if(req.status === 'Pending') pendingCount++;
                
                const tr = document.createElement('tr');
                let statusBadge = '';
                let actions = '';

                if (req.status === 'Pending') {
                    statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">Pending</span>`;
                    actions = `
                        <button onclick="updateRequest('${req.id}', 'Approved')" class="text-green-600 hover:text-green-800 text-xs font-medium mr-3 hover:underline">Approve</button>
                        <button onclick="updateRequest('${req.id}', 'Rejected')" class="text-red-500 hover:text-red-700 text-xs font-medium hover:underline">Reject</button>
                    `;
                } else if (req.status === 'Approved') {
                    statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-100">Approved</span>`;
                    actions = `<span class="text-gray-400 text-xs">Completed</span>`;
                } else {
                    statusBadge = `<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">Rejected</span>`;
                    actions = `<span class="text-gray-400 text-xs">-</span>`;
                }

                tr.innerHTML = `
                    <td class="px-6 py-3 font-mono text-gray-400 text-xs">${req.id}</td>
                    <td class="px-6 py-3 text-gray-900 font-medium">${req.user}</td>
                    <td class="px-6 py-3 text-gray-500">${req.dept}</td>
                    <td class="px-6 py-3 text-gray-900">${req.itemName}</td>
                    <td class="px-6 py-3">${statusBadge}</td>
                    <td class="px-6 py-3 text-right">${actions}</td>
                `;
                tbody.appendChild(tr);
            });

            document.getElementById('stat-pending').innerText = pendingCount;
            const badge = document.getElementById('badge-requests');
            if(pendingCount > 0) {
                badge.innerText = pendingCount;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        function renderCatalog() {
            const grid = document.getElementById('catalog-grid');
            grid.innerHTML = '';
            inventory.forEach(item => {
                const div = document.createElement('div');
                div.className = 'bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow group flex flex-col justify-between h-full';
                div.innerHTML = `
                    <div>
                        <div class="flex justify-between items-start mb-2">
                            <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-600 uppercase tracking-wide">${item.category}</span>
                            <span class="text-xs text-gray-400 font-mono">#${item.id}</span>
                        </div>
                        <h3 class="text-base font-semibold text-gray-900 tracking-tight">${item.name}</h3>
                        <p class="text-xs text-gray-500 mt-1 mb-4">Available in central store: <span class="font-medium text-gray-900">${item.qty}</span></p>
                    </div>
                    <button onclick="userRequestItem(${item.id}, '${item.name}')" class="w-full mt-auto bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-gray-300 py-2 rounded text-xs font-medium transition-all active:scale-95">
                        Request Item
                    </button>
                `;
                grid.appendChild(div);
            });
        }

        // --- Logic ---
        function updateStats() {
            renderInventory();
            renderRequests();
        }

        function handleAddItem(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const newItem = {
                id: Math.floor(Math.random() * 900) + 100,
                name: formData.get('name'),
                category: formData.get('category'),
                qty: formData.get('qty'),
                location: formData.get('location')
            };
            inventory.push(newItem);
            closeModal('add-item-modal');
            renderInventory();
            renderCatalog();
            showToast('Item added to physical store');
            e.target.reset();
        }

        function userRequestItem(itemId, itemName) {
            const reqId = 'REQ-' + (Math.floor(Math.random() * 9000) + 1000);
            const newReq = {
                id: reqId,
                user: 'Dr. CurrentUser',
                dept: 'Pathology', // Hardcoded for user simulation
                itemId: itemId,
                itemName: itemName,
                status: 'Pending'
            };
            requests.unshift(newReq);
            renderRequests();
            showToast('Request sent to Admin');
        }

        function updateRequest(reqId, status) {
            const reqIndex = requests.findIndex(r => r.id === reqId);
            if (reqIndex > -1) {
                const req = requests[reqIndex];
                req.status = status;
                
                if(status === 'Approved') {
                    // Reduce inventory
                    const itemIndex = inventory.findIndex(i => i.id === req.itemId);
                    if(itemIndex > -1 && inventory[itemIndex].qty > 0) {
                        inventory[itemIndex].qty--;
                    }
                }
                
                updateStats();
                renderCatalog(); // To update stock display
                showToast(`Request ${status}`);
            }
        }

        // --- UI Utilities ---
        function openModal(id) {
            document.getElementById(id).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // --- Role Toggle Simulation ---
        function toggleRole() {
            currentUser = currentUser === 'admin' ? 'user' : 'admin';
            updateRoleUI();
            
            // Auto switch to appropriate view
            if(currentUser === 'user') {
                switchView('catalog');
            } else {
                switchView('dashboard');
            }
            showToast(`Switched to ${currentUser === 'admin' ? 'Admin' : 'Dept. User'} View`);
        }

        function updateRoleUI() {
            const avatar = document.getElementById('user-avatar');
            const name = document.getElementById('user-name');
            const role = document.getElementById('user-role');
            const dashNav = document.getElementById('nav-dashboard');
            const invNav = document.getElementById('nav-inventory');
            const reqNav = document.getElementById('nav-requests');
            const catNav = document.getElementById('nav-catalog');

            if (currentUser === 'admin') {
                avatar.innerText = 'AD';
                avatar.className = "h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-xs font-semibold text-white";
                name.innerText = 'Admin User';
                role.innerText = 'System Administrator';
                
                // Show Admin Links
                dashNav.style.display = 'flex';
                invNav.style.display = 'flex';
                reqNav.style.display = 'flex';
                // Hide User Links
                catNav.style.display = 'none';
            } else {
                avatar.innerText = 'PA';
                avatar.className = "h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-semibold text-white";
                name.innerText = 'Dr. Pathologist';
                role.innerText = 'Pathology Department';

                // Hide Admin Links
                dashNav.style.display = 'none';
                invNav.style.display = 'none';
                reqNav.style.display = 'none';
                // Show User Links
                catNav.style.display = 'flex';
            }
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
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-gray-900">
<span className="iconify text-gray-900" data-icon="lucide:activity-square" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight uppercase">MedStock</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<div className="px-3 pb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Main</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-dashboard" onclick="switchView('dashboard')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-inventory" onclick="switchView('inventory')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:package" data-strokeWidth="1.5" data-width="18"></span>
                Inventory (Store)
            </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group relative" id="nav-requests" onclick="switchView('requests')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="18"></span>
                Requests
                <span className="absolute right-2 bg-gray-900 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full hidden" id="badge-requests">0</span>
</button>
<div className="mt-8 px-3 pb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">User Portal</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors group" id="nav-catalog" onclick="switchView('catalog')">
<span className="iconify text-gray-400 group-hover:text-gray-600" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="18"></span>
                Request Item
            </button>
</div>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-xs font-semibold text-gray-700" id="user-avatar">
                    AD
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900" id="user-name">Admin User</span>
<span className="text-[10px] text-gray-500" id="user-role">System Administrator</span>
</div>
</div>

<button className="mt-3 w-full py-1.5 border border-gray-200 rounded text-[10px] font-medium text-gray-600 hover:bg-gray-50 transition-colors" onclick="toggleRole()">
                Switch View (Admin/User)
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden p-1 text-gray-500 hover:text-gray-900">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<nav className="flex text-sm font-medium text-gray-500">
<span className="hover:text-gray-900 cursor-pointer">College</span>
<span className="mx-2 text-gray-300">/</span>
<span className="text-gray-900" id="breadcrumb">Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-icon="lucide:search" data-width="14"></span>
<input className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-gray-300 w-64 transition-all" placeholder="Search items..." type="text"/>
</div>
<button className="relative p-2 text-gray-400 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18"></span>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth" id="content-area">

<div className="fade-in" id="view-dashboard">
<div className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Overview</h1>
<p className="text-sm text-gray-500 mt-1">Real-time inventory statistics across departments.</p>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-xs font-medium transition-colors shadow-sm flex items-center gap-2" onclick="switchView('inventory')">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                        Add Inventory
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Total Items</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-2 tracking-tight" id="stat-total">1,248</h3>
</div>
<span className="p-2 bg-gray-50 rounded-md text-gray-600">
<span className="iconify" data-icon="lucide:package-open" data-width="20"></span>
</span>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pending Requests</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-2 tracking-tight" id="stat-pending">3</h3>
</div>
<span className="p-2 bg-orange-50 rounded-md text-orange-600">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</span>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Departments</p>
<h3 className="text-2xl font-semibold text-gray-900 mt-2 tracking-tight">8</h3>
</div>
<span className="p-2 bg-blue-50 rounded-md text-blue-600">
<span className="iconify" data-icon="lucide:building-2" data-width="20"></span>
</span>
</div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
<h2 className="text-sm font-semibold text-gray-900">Low Stock Alert</h2>
<button className="text-xs text-gray-500 hover:text-gray-900 font-medium">View All</button>
</div>
<table className="w-full text-left">
<thead className="bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
<tr>
<th className="px-6 py-3">Item Name</th>
<th className="px-6 py-3">Category</th>
<th className="px-6 py-3">Stock Level</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm">
<tr>
<td className="px-6 py-3 text-gray-900 font-medium">Surgical Gloves (M)</td>
<td className="px-6 py-3 text-gray-500">Consumables</td>
<td className="px-6 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-700 border border-red-100">
                                        12 Boxes
                                    </span>
</td>
<td className="px-6 py-3 text-right">
<button className="text-gray-400 hover:text-gray-900">Restock</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden fade-in" id="view-inventory">
<div className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Inventory Store</h1>
<p className="text-sm text-gray-500 mt-1">Manage physical store items available for departments.</p>
</div>
<button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-xs font-medium transition-colors shadow-sm flex items-center gap-2" onclick="openModal('add-item-modal')">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                        Add New Item
                    </button>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left whitespace-nowrap">
<thead className="bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
<tr>
<th className="px-6 py-3">ID</th>
<th className="px-6 py-3">Item Name</th>
<th className="px-6 py-3">Category</th>
<th className="px-6 py-3">Quantity</th>
<th className="px-6 py-3">Location</th>
<th className="px-6 py-3 text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm" id="inventory-table-body">

</tbody>
</table>
</div>
</div>
</div>

<div className="hidden fade-in" id="view-requests">
<div className="mb-6">
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Requisition Requests</h1>
<p className="text-sm text-gray-500 mt-1">Approve or reject requests from departments.</p>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-gray-50 text-xs text-gray-500 font-medium uppercase tracking-wider">
<tr>
<th className="px-6 py-3">Request ID</th>
<th className="px-6 py-3">Requester</th>
<th className="px-6 py-3">Department</th>
<th className="px-6 py-3">Item Requested</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-sm" id="requests-table-body">

</tbody>
</table>
</div>
</div>

<div className="hidden fade-in" id="view-catalog">
<div className="mb-6 bg-blue-50 border border-blue-100 p-4 rounded-lg flex items-start gap-3">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:info" data-width="18"></span>
<div>
<h3 className="text-sm font-medium text-blue-900">Department Access</h3>
<p className="text-xs text-blue-700 mt-1">You are logged in as <strong>Pathology Dept</strong>. Requests will be sent to Central Admin for approval.</p>
</div>
</div>
<div className="mb-6">
<h1 className="text-xl font-semibold text-gray-900 tracking-tight">Request Items</h1>
<p className="text-sm text-gray-500 mt-1">Browse the central store and request items for your department.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="catalog-grid">

</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-50 hidden flex items-center justify-center" id="add-item-modal">
<div className="bg-white rounded-lg shadow-xl border border-gray-200 w-full max-w-md p-6 transform transition-all scale-100">
<div className="flex justify-between items-center mb-4">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight">Add Store Item</h3>
<button className="text-gray-400 hover:text-gray-900" onclick="closeModal('add-item-modal')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<form id="add-item-form" onsubmit="handleAddItem(event)">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Item Name</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-all" name="name" placeholder="e.g. Microscope Slide" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
<select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200" name="category">
<option>Equipment</option>
<option>Consumables</option>
<option>Chemicals</option>
<option>Furniture</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Quantity</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200" min="1" name="qty" placeholder="0" required="" type="number"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">Storage Location</label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200" name="location" placeholder="e.g. Shelf A-12" type="text"/>
</div>
</div>
<div className="mt-6 flex justify-end gap-3">
<button className="px-4 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50" onclick="closeModal('add-item-modal')" type="button">Cancel</button>
<button className="px-4 py-2 text-xs font-medium text-white bg-gray-900 rounded-md hover:bg-gray-800 shadow-sm" type="submit">Add to Inventory</button>
</div>
</form>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-md shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50" id="toast">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="18"></span>
<span className="text-sm font-medium" id="toast-msg">Operation successful</span>
</div>



    </>
  );
}
