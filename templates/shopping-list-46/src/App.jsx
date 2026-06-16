import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let lists = [];
        let currentEditItem = null;
        let draggedElement = null;
        let userAddress = null;

        const categoryColors = {
            produce: 'bg-green-100 text-green-700',
            dairy: 'bg-blue-100 text-blue-700',
            meat: 'bg-red-100 text-red-700',
            bakery: 'bg-yellow-100 text-yellow-700',
            pantry: 'bg-orange-100 text-orange-700',
            frozen: 'bg-cyan-100 text-cyan-700',
            beverages: 'bg-purple-100 text-purple-700',
            other: 'bg-gray-100 text-gray-700'
        };

        // Mock price data for demonstration
        const mockPriceDatabase = {
            'milk': [
                { store: 'Walmart', price: 3.48, distance: 1.2, unit: 'gallon' },
                { store: 'Target', price: 3.79, distance: 1.5, unit: 'gallon' },
                { store: 'Whole Foods', price: 5.99, distance: 2.1, unit: 'gallon' },
                { store: 'Kroger', price: 3.29, distance: 0.8, unit: 'gallon' }
            ],
            'bread': [
                { store: 'Walmart', price: 1.98, distance: 1.2, unit: 'loaf' },
                { store: 'Target', price: 2.29, distance: 1.5, unit: 'loaf' },
                { store: 'Whole Foods', price: 4.49, distance: 2.1, unit: 'loaf' },
                { store: 'Kroger', price: 1.79, distance: 0.8, unit: 'loaf' }
            ],
            'eggs': [
                { store: 'Walmart', price: 2.78, distance: 1.2, unit: 'dozen' },
                { store: 'Target', price: 2.99, distance: 1.5, unit: 'dozen' },
                { store: 'Whole Foods', price: 5.99, distance: 2.1, unit: 'dozen' },
                { store: 'Kroger', price: 2.49, distance: 0.8, unit: 'dozen' }
            ],
            'chicken breast': [
                { store: 'Walmart', price: 3.28, distance: 1.2, unit: 'lb' },
                { store: 'Target', price: 3.99, distance: 1.5, unit: 'lb' },
                { store: 'Whole Foods', price: 6.99, distance: 2.1, unit: 'lb' },
                { store: 'Kroger', price: 2.99, distance: 0.8, unit: 'lb' }
            ],
            'bananas': [
                { store: 'Walmart', price: 0.58, distance: 1.2, unit: 'lb' },
                { store: 'Target', price: 0.62, distance: 1.5, unit: 'lb' },
                { store: 'Whole Foods', price: 0.79, distance: 2.1, unit: 'lb' },
                { store: 'Kroger', price: 0.54, distance: 0.8, unit: 'lb' }
            ],
            'apples': [
                { store: 'Walmart', price: 1.48, distance: 1.2, unit: 'lb' },
                { store: 'Target', price: 1.69, distance: 1.5, unit: 'lb' },
                { store: 'Whole Foods', price: 2.49, distance: 2.1, unit: 'lb' },
                { store: 'Kroger', price: 1.29, distance: 0.8, unit: 'lb' }
            ],
            'cheese': [
                { store: 'Walmart', price: 4.98, distance: 1.2, unit: '16oz' },
                { store: 'Target', price: 5.29, distance: 1.5, unit: '16oz' },
                { store: 'Whole Foods', price: 7.99, distance: 2.1, unit: '16oz' },
                { store: 'Kroger', price: 4.49, distance: 0.8, unit: '16oz' }
            ],
            'tomatoes': [
                { store: 'Walmart', price: 1.98, distance: 1.2, unit: 'lb' },
                { store: 'Target', price: 2.19, distance: 1.5, unit: 'lb' },
                { store: 'Whole Foods', price: 3.49, distance: 2.1, unit: 'lb' },
                { store: 'Kroger', price: 1.79, distance: 0.8, unit: 'lb' }
            ]
        };

        function findPrices(itemName) {
            const normalized = itemName.toLowerCase().trim();
            for (const [key, prices] of Object.entries(mockPriceDatabase)) {
                if (normalized.includes(key) || key.includes(normalized)) {
                    return prices.sort((a, b) => a.price - b.price);
                }
            }
            return null;
        }

        function showAddressModal() {
            document.getElementById('addressModal').classList.remove('hidden');
            if (userAddress) {
                document.getElementById('addressStreet').value = userAddress.street;
                document.getElementById('addressCity').value = userAddress.city;
                document.getElementById('addressZip').value = userAddress.zip;
            }
        }

        function hideAddressModal() {
            document.getElementById('addressModal').classList.add('hidden');
        }

        function saveAddress() {
            const street = document.getElementById('addressStreet').value.trim();
            const city = document.getElementById('addressCity').value.trim();
            const zip = document.getElementById('addressZip').value.trim();

            if (!street || !city || !zip) {
                alert('Please fill in all address fields');
                return;
            }

            userAddress = { street, city, zip };
            document.getElementById('addressButton').textContent = city;
            hideAddressModal();
            renderLists();
        }

        function showPriceModal(itemName) {
            if (!userAddress) {
                alert('Please set your address first to see price comparisons');
                showAddressModal();
                return;
            }

            const prices = findPrices(itemName);
            if (!prices) {
                alert('Price information not available for this item yet');
                return;
            }

            document.getElementById('priceModalTitle').textContent = itemName;
            document.getElementById('priceModalAddress').textContent = `${userAddress.city}, ${userAddress.zip}`;

            const content = document.getElementById('priceComparisonContent');
            const lowestPrice = prices[0].price;

            content.innerHTML = prices.map((price, index) => `
                <div class="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors ${index === 0 ? 'ring-2 ring-green-500' : ''}">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <i data-lucide="store" style="width: 20px; height: 20px;" class="text-gray-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">${price.store}</h3>
                                <p class="text-xs text-gray-500">${price.distance} mi away</p>
                            </div>
                        </div>
                        ${index === 0 ? '<span class="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">Best Price</span>' : ''}
                    </div>
                    <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-semibold text-gray-900">$${price.price.toFixed(2)}</span>
                        <span class="text-sm text-gray-500">per ${price.unit}</span>
                        ${index > 0 ? `<span class="text-xs text-red-600 ml-auto">+$${(price.price - lowestPrice).toFixed(2)}</span>` : ''}
                    </div>
                </div>
            `).join('');

            document.getElementById('priceModal').classList.remove('hidden');
            lucide.createIcons();
        }

        function hidePriceModal() {
            document.getElementById('priceModal').classList.add('hidden');
        }

        function showNewListModal() {
            document.getElementById('newListModal').classList.remove('hidden');
            document.getElementById('newListTitle').value = '';
            document.getElementById('newListTitle').focus();
        }

        function hideNewListModal() {
            document.getElementById('newListModal').classList.add('hidden');
        }

        function createList() {
            const title = document.getElementById('newListTitle').value.trim();
            if (!title) return;

            const list = {
                id: Date.now(),
                title: title,
                items: [],
                createdAt: new Date()
            };

            lists.push(list);
            renderLists();
            hideNewListModal();
        }

        function deleteList(listId) {
            if (confirm('Are you sure you want to delete this list?')) {
                lists = lists.filter(l => l.id !== listId);
                renderLists();
            }
        }

        function addItem(listId) {
            const input = document.getElementById(`newItem-${listId}`);
            const name = input.value.trim();
            if (!name) return;

            const list = lists.find(l => l.id === listId);
            if (!list) return;

            const item = {
                id: Date.now(),
                name: name,
                category: 'other',
                quantity: '',
                checked: false
            };

            list.items.push(item);
            input.value = '';
            renderLists();
        }

        function toggleItem(listId, itemId) {
            const list = lists.find(l => l.id === listId);
            if (!list) return;

            const item = list.items.find(i => i.id === itemId);
            if (!item) return;

            item.checked = !item.checked;
            renderLists();
        }

        function showEditItemModal(listId, itemId) {
            const list = lists.find(l => l.id === listId);
            if (!list) return;

            const item = list.items.find(i => i.id === itemId);
            if (!item) return;

            currentEditItem = { listId, itemId };
            document.getElementById('editItemName').value = item.name;
            document.getElementById('editItemCategory').value = item.category;
            document.getElementById('editItemQuantity').value = item.quantity;
            document.getElementById('editItemModal').classList.remove('hidden');
        }

        function hideEditItemModal() {
            document.getElementById('editItemModal').classList.add('hidden');
            currentEditItem = null;
        }

        function saveEditItem() {
            if (!currentEditItem) return;

            const list = lists.find(l => l.id === currentEditItem.listId);
            if (!list) return;

            const item = list.items.find(i => i.id === currentEditItem.itemId);
            if (!item) return;

            item.name = document.getElementById('editItemName').value.trim();
            item.category = document.getElementById('editItemCategory').value;
            item.quantity = document.getElementById('editItemQuantity').value.trim();

            renderLists();
            hideEditItemModal();
        }

        function deleteItem(listId, itemId) {
            const list = lists.find(l => l.id === listId);
            if (!list) return;

            list.items = list.items.filter(i => i.id !== itemId);
            renderLists();
        }

        function handleDragStart(e, listId, itemId) {
            draggedElement = { listId, itemId };
            e.currentTarget.classList.add('opacity-50');
        }

        function handleDragEnd(e) {
            e.currentTarget.classList.remove('opacity-50');
            draggedElement = null;
        }

        function handleDragOver(e) {
            e.preventDefault();
        }

        function handleDrop(e, listId, targetItemId) {
            e.preventDefault();
            if (!draggedElement || draggedElement.listId !== listId) return;

            const list = lists.find(l => l.id === listId);
            if (!list) return;

            const draggedIndex = list.items.findIndex(i => i.id === draggedElement.itemId);
            const targetIndex = list.items.findIndex(i => i.id === targetItemId);

            if (draggedIndex === -1 || targetIndex === -1) return;

            const [removed] = list.items.splice(draggedIndex, 1);
            list.items.splice(targetIndex, 0, removed);

            renderLists();
        }

        function renderLists() {
            const container = document.getElementById('listsContainer');
            const emptyState = document.getElementById('emptyState');

            if (lists.length === 0) {
                container.innerHTML = '';
                emptyState.classList.remove('hidden');
                lucide.createIcons();
                return;
            }

            emptyState.classList.add('hidden');

            container.innerHTML = lists.map(list => {
                const uncheckedItems = list.items.filter(i => !i.checked);
                const checkedItems = list.items.filter(i => i.checked);
                const sortedItems = [...uncheckedItems, ...checkedItems];

                return `
                    <div class="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors">
                        <div class="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                            <div>
                                <h2 class="text-lg font-semibold tracking-tight text-gray-900">${list.title}</h2>
                                <p class="text-sm text-gray-500 mt-0.5">${list.items.length} ${list.items.length === 1 ? 'item' : 'items'}</p>
                            </div>
                            <button onclick="deleteList(${list.id})" class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>
                            </button>
                        </div>
                        <div class="p-6">
                            <div class="flex gap-2 mb-4">
                                <input 
                                    type="text" 
                                    id="newItem-${list.id}" 
                                    placeholder="Add an item..."
                                    class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                                    onkeypress="if(event.key === 'Enter') addItem(${list.id})"
                                >
                                <button onclick="addItem(${list.id})" class="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                    Add
                                </button>
                            </div>
                            ${sortedItems.length > 0 ? `
                                <div class="space-y-2">
                                    ${sortedItems.map(item => {
                                        const prices = findPrices(item.name);
                                        const hasPrices = prices && userAddress;
                                        const lowestPrice = hasPrices ? prices[0] : null;
                                        
                                        return `
                                        <div 
                                            draggable="true"
                                            ondragstart="handleDragStart(event, ${list.id}, ${item.id})"
                                            ondragend="handleDragEnd(event)"
                                            ondragover="handleDragOver(event)"
                                            ondrop="handleDrop(event, ${list.id}, ${item.id})"
                                            class="group flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all cursor-move ${item.checked ? 'opacity-60' : ''}"
                                        >
                                            <button onclick="toggleItem(${list.id}, ${item.id})" class="flex-shrink-0 w-5 h-5 rounded border-2 ${item.checked ? 'bg-black border-black' : 'border-gray-300 hover:border-gray-400'} flex items-center justify-center transition-colors">
                                                ${item.checked ? '<i data-lucide="check" style="width: 14px; height: 14px; stroke-width: 3;" class="text-white"></i>' : ''}
                                            </button>
                                            <div class="flex-1 min-w-0">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span class="text-sm font-medium ${item.checked ? 'line-through text-gray-400' : 'text-gray-900'}">${item.name}</span>
                                                    <span class="px-2 py-0.5 text-xs font-medium rounded ${categoryColors[item.category]}">${item.category}</span>
                                                    ${hasPrices ? `
                                                        <button onclick="showPriceModal('${item.name}')" class="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded hover:bg-green-100 transition-colors">
                                                            <i data-lucide="tag" style="width: 12px; height: 12px;"></i>
                                                            $${lowestPrice.price.toFixed(2)} at ${lowestPrice.store}
                                                        </button>
                                                    ` : ''}
                                                </div>
                                                ${item.quantity ? `<p class="text-xs text-gray-500 mt-0.5">${item.quantity}</p>` : ''}
                                            </div>
                                            <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                ${hasPrices ? `
                                                    <button onclick="showPriceModal('${item.name}')" class="p-1.5 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded transition-colors" title="Compare prices">
                                                        <i data-lucide="tag" style="width: 16px; height: 16px;"></i>
                                                    </button>
                                                ` : ''}
                                                <button onclick="showEditItemModal(${list.id}, ${item.id})" class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
                                                    <i data-lucide="pencil" style="width: 16px; height: 16px;"></i>
                                                </button>
                                                <button onclick="deleteItem(${list.id}, ${item.id})" class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                                                    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
                                                </button>
                                                <div class="p-1.5 text-gray-300 cursor-move">
                                                    <i data-lucide="grip-vertical" style="width: 16px; height: 16px;"></i>
                                                </div>
                                            </div>
                                        </div>
                                    `;
                                    }).join('')}
                                </div>
                            ` : '<p class="text-sm text-gray-500 text-center py-4">No items yet. Add your first item above.</p>'}
                        </div>
                    </div>
                `;
            }).join('');

            lucide.createIcons();
        }

        // Initial render
        renderLists();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="border-b border-gray-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tight">SL</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Shopping Lists</h1>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors" onclick="showAddressModal()">
<i data-lucide="map-pin" style={{width: '16px', height: '16px'}}></i>
<span id="addressButton">Set Address</span>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="showNewListModal()">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                            New List
                        </button>
</div>
</div>
</div>
</header>

<main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
<div className="space-y-3" id="listsContainer">

</div>
<div className="text-center py-16" id="emptyState">
<div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
<i className="text-gray-400" data-lucide="shopping-cart" style={{width: '24px', height: '24px'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">No shopping lists yet</h3>
<p className="text-sm text-gray-500 mb-6">Create your first shopping list to get started</p>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="showNewListModal()">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                    Create List
                </button>
</div>
</main>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="addressModal">
<div className="bg-white rounded-xl shadow-xl max-w-md w-full">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Set Your Address</h2>
<p className="text-sm text-gray-500 mt-1">We'll find the best prices at stores near you</p>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="addressStreet" placeholder="123 Main St" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">City</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="addressCity" placeholder="City" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="addressZip" placeholder="12345" type="text"/>
</div>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end">
<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" onclick="hideAddressModal()">Cancel</button>
<button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="saveAddress()">Save Address</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="newListModal">
<div className="bg-white rounded-xl shadow-xl max-w-md w-full">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Create New List</h2>
</div>
<div className="p-6">
<label className="block text-sm font-medium text-gray-700 mb-2">List Title</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="newListTitle" placeholder="e.g., Weekly Groceries" type="text"/>
</div>
<div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end">
<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" onclick="hideNewListModal()">Cancel</button>
<button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="createList()">Create List</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="editItemModal">
<div className="bg-white rounded-xl shadow-xl max-w-md w-full">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-lg font-semibold tracking-tight text-gray-900">Edit Item</h2>
</div>
<div className="p-6 space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="editItemName" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
<select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="editItemCategory">
<option value="produce">Produce</option>
<option value="dairy">Dairy</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
<input className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" id="editItemQuantity" placeholder="e.g., 2 lbs, 1 pack" type="text"/>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end">
<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" onclick="hideEditItemModal()">Cancel</button>
<button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="saveEditItem()">Save Changes</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="priceModal">
<div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-gray-200">
<h2 className="text-lg font-semibold tracking-tight text-gray-900" id="priceModalTitle"></h2>
<p className="text-sm text-gray-500 mt-1">Prices at stores near <span id="priceModalAddress"></span></p>
</div>
<div className="flex-1 overflow-y-auto p-6">
<div className="space-y-3" id="priceComparisonContent">

</div>
</div>
<div className="px-6 py-4 bg-gray-50 rounded-b-xl flex gap-3 justify-end border-t border-gray-200">
<button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors" onclick="hidePriceModal()">Close</button>
</div>
</div>
</div>


    </>
  );
}
