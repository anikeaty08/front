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



        lucide.createIcons();

        const categoryColors = {
            dairy: 'bg-blue-50 text-blue-700',
            produce: 'bg-green-50 text-green-700',
            meat: 'bg-red-50 text-red-700',
            bakery: 'bg-amber-50 text-amber-700',
            pantry: 'bg-yellow-50 text-yellow-700',
            frozen: 'bg-cyan-50 text-cyan-700',
            beverages: 'bg-orange-50 text-orange-700',
            snacks: 'bg-pink-50 text-pink-700',
            household: 'bg-purple-50 text-purple-700',
            personal: 'bg-indigo-50 text-indigo-700',
            other: 'bg-gray-50 text-gray-700'
        };

        let listIdCounter = 2;

        // Create new list
        document.getElementById('newListBtn').addEventListener('click', () => {
            const listsContainer = document.getElementById('listsContainer');
            const listId = listIdCounter++;
            
            const listHTML = `
                <div class="border border-gray-200 rounded-xl overflow-hidden bg-white" data-list-id="${listId}">
                    <div class="p-5 border-b border-gray-200 bg-gray-50">
                        <div class="flex items-start justify-between gap-4">
                            <div class="flex-1">
                                <input type="text" value="New Shopping List" class="list-title text-xl font-semibold tracking-tight text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0 w-full" />
                                <p class="text-sm text-gray-500 mt-1"><span class="item-count">0</span> items</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <button class="add-item-btn p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                    <i data-lucide="plus" class="w-5 h-5"></i>
                                </button>
                                <button class="delete-list-btn p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                    <i data-lucide="trash-2" class="w-5 h-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-5">
                        <div class="items-container space-y-1"></div>
                    </div>
                </div>
            `;
            
            listsContainer.insertAdjacentHTML('beforeend', listHTML);
            lucide.createIcons();
            initializeListEvents();
            
            const newList = listsContainer.lastElementChild;
            newList.querySelector('.list-title').focus();
            newList.querySelector('.list-title').select();
        });

        // Add item to list
        function addItemToList(itemsContainer) {
            const itemHTML = `
                <div class="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
                    <button class="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
                        <i data-lucide="grip-vertical" class="w-5 h-5 text-gray-400"></i>
                    </button>
                    <input type="checkbox" class="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" />
                    <div class="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
                        <input type="text" value="New Item" class="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" />
                        <select class="item-category text-xs px-2 py-1 rounded-md bg-gray-50 text-gray-700 border-none outline-none cursor-pointer">
                            <option value="dairy">Dairy</option>
                            <option value="produce">Produce</option>
                            <option value="meat">Meat & Seafood</option>
                            <option value="bakery">Bakery</option>
                            <option value="pantry">Pantry</option>
                            <option value="frozen">Frozen</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="personal">Personal Care</option>
                            <option value="other" selected>Other</option>
                        </select>
                    </div>
                    <button class="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
                        <i data-lucide="x" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
            
            itemsContainer.insertAdjacentHTML('beforeend', itemHTML);
            lucide.createIcons();
            
            const newItem = itemsContainer.lastElementChild;
            const nameInput = newItem.querySelector('.item-name');
            nameInput.focus();
            nameInput.select();
            
            updateItemCount(itemsContainer);
            initializeDragAndDrop();
        }

        // Update item count
        function updateItemCount(itemsContainer) {
            const list = itemsContainer.closest('[data-list-id]');
            const count = itemsContainer.querySelectorAll('.item-row').length;
            list.querySelector('.item-count').textContent = count;
        }

        // Initialize all list events
        function initializeListEvents() {
            // Add item buttons
            document.querySelectorAll('.add-item-btn').forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            document.querySelectorAll('.add-item-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const list = e.target.closest('[data-list-id]');
                    const itemsContainer = list.querySelector('.items-container');
                    addItemToList(itemsContainer);
                });
            });

            // Delete list buttons
            document.querySelectorAll('.delete-list-btn').forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            document.querySelectorAll('.delete-list-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    if (confirm('Are you sure you want to delete this list?')) {
                        e.target.closest('[data-list-id]').remove();
                    }
                });
            });

            // Delete item buttons
            document.querySelectorAll('.delete-item-btn').forEach(btn => {
                btn.replaceWith(btn.cloneNode(true));
            });
            document.querySelectorAll('.delete-item-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const item = e.target.closest('.item-row');
                    const itemsContainer = item.closest('.items-container');
                    item.remove();
                    updateItemCount(itemsContainer);
                });
            });

            // Checkbox toggle
            document.querySelectorAll('.item-checkbox').forEach(checkbox => {
                checkbox.replaceWith(checkbox.cloneNode(true));
            });
            document.querySelectorAll('.item-checkbox').forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    const nameInput = e.target.closest('.item-row').querySelector('.item-name');
                    if (e.target.checked) {
                        nameInput.classList.add('line-through', 'text-gray-400');
                        nameInput.classList.remove('text-gray-900');
                    } else {
                        nameInput.classList.remove('line-through', 'text-gray-400');
                        nameInput.classList.add('text-gray-900');
                    }
                });
            });

            // Category change
            document.querySelectorAll('.item-category').forEach(select => {
                select.replaceWith(select.cloneNode(true));
            });
            document.querySelectorAll('.item-category').forEach(select => {
                select.addEventListener('change', (e) => {
                    const category = e.target.value;
                    const colorClass = categoryColors[category];
                    e.target.className = `item-category text-xs px-2 py-1 rounded-md border-none outline-none cursor-pointer ${colorClass}`;
                });
            });

            initializeDragAndDrop();
        }

        // Drag and drop functionality
        let draggedItem = null;

        function initializeDragAndDrop() {
            document.querySelectorAll('.item-row').forEach(item => {
                item.addEventListener('dragstart', function(e) {
                    draggedItem = this;
                    this.style.opacity = '0.4';
                });

                item.addEventListener('dragend', function(e) {
                    this.style.opacity = '1';
                    document.querySelectorAll('.item-row').forEach(el => {
                        el.classList.remove('border-t-2', 'border-gray-900');
                    });
                });

                item.addEventListener('dragover', function(e) {
                    e.preventDefault();
                    if (draggedItem !== this) {
                        const rect = this.getBoundingClientRect();
                        const midpoint = rect.top + rect.height / 2;
                        
                        document.querySelectorAll('.item-row').forEach(el => {
                            el.classList.remove('border-t-2', 'border-gray-900');
                        });

                        if (e.clientY < midpoint) {
                            this.classList.add('border-t-2', 'border-gray-900');
                        }
                    }
                });

                item.addEventListener('drop', function(e) {
                    e.preventDefault();
                    if (draggedItem !== this) {
                        const rect = this.getBoundingClientRect();
                        const midpoint = rect.top + rect.height / 2;
                        
                        if (e.clientY < midpoint) {
                            this.parentNode.insertBefore(draggedItem, this);
                        } else {
                            this.parentNode.insertBefore(draggedItem, this.nextSibling);
                        }
                    }
                    document.querySelectorAll('.item-row').forEach(el => {
                        el.classList.remove('border-t-2', 'border-gray-900');
                    });
                });
            });
        }

        // Initialize events on page load
        initializeListEvents();
    
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
      
<div className="max-w-4xl mx-auto px-4 py-8 md:py-12">

<div className="mb-8">
<div className="flex items-center justify-between mb-2">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Shopping Lists</h1>
<button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" id="newListBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
                    New List
                </button>
</div>
<p className="text-gray-600 text-sm">Organize your shopping across multiple lists</p>
</div>

<div className="space-y-6" id="listsContainer">

<div className="border border-gray-200 rounded-xl overflow-hidden bg-white" data-list-id="1">
<div className="p-5 border-b border-gray-200 bg-gray-50">
<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<input className="list-title text-xl font-semibold tracking-tight text-gray-900 bg-transparent border-none outline-none focus:ring-0 p-0 w-full" type="text" value="Weekly Groceries"/>
<p className="text-sm text-gray-500 mt-1"><span className="item-count">8</span> items</p>
</div>
<div className="flex items-center gap-2">
<button className="add-item-btn p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
<button className="delete-list-btn p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
<div className="p-5">
<div className="items-container space-y-1">

<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Milk"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-blue-50 text-blue-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Bananas"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-green-50 text-green-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option selected="" value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Chicken Breast"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-red-50 text-red-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option selected="" value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Whole Wheat Bread"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-amber-50 text-amber-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option selected="" value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Olive Oil"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-yellow-50 text-yellow-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option selected="" value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input checked="" className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-400 line-through p-0 text-sm font-medium" type="text" value="Ice Cream"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-cyan-50 text-cyan-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option selected="" value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Orange Juice"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-orange-50 text-orange-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option selected="" value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="item-row group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors" draggable="true">
<button className="drag-handle cursor-move opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5 text-gray-400" data-lucide="grip-vertical"></i>
</button>
<input className="item-checkbox w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 focus:ring-offset-0 cursor-pointer" type="checkbox"/>
<div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-2">
<input className="item-name flex-1 bg-transparent border-none outline-none text-gray-900 p-0 text-sm font-medium" type="text" value="Paper Towels"/>
<select className="item-category text-xs px-2 py-1 rounded-md bg-purple-50 text-purple-700 border-none outline-none cursor-pointer">
<option value="dairy">Dairy</option>
<option value="produce">Produce</option>
<option value="meat">Meat &amp; Seafood</option>
<option value="bakery">Bakery</option>
<option value="pantry">Pantry</option>
<option value="frozen">Frozen</option>
<option value="beverages">Beverages</option>
<option value="snacks">Snacks</option>
<option selected="" value="household">Household</option>
<option value="personal">Personal Care</option>
<option value="other">Other</option>
</select>
</div>
<button className="delete-item-btn opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-red-600 transition-all">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden text-center py-16" id="emptyState">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
<i className="w-8 h-8 text-gray-400" data-lucide="shopping-cart"></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">No shopping lists yet</h3>
<p className="text-sm text-gray-600">Create your first list to get started</p>
</div>
</div>


    </>
  );
}
