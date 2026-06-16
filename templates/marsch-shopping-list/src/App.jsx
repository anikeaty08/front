import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

<div className="mb-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
<div>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Shopping List</h1>
<p className="text-sm text-gray-500 mt-1">Collaborative grocery management</p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i className="w-4 h-4" data-lucide="share-2"></i>
                    Share List
                </button>
</div>

<div className="flex items-center gap-2 mt-4 pb-4 border-b border-gray-200">
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="font-medium">Active:</span>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium">JD</div>
<div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium">SM</div>
<div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-medium">AL</div>
</div>
<span className="text-xs text-gray-500 ml-1">+2 more</span>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 mb-6 shadow-sm">
<h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Item</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
<input className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Item name" type="text"/>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-700">
<option>Select category</option>
<option>Produce</option>
<option>Dairy</option>
<option>Meat &amp; Seafood</option>
<option>Bakery</option>
<option>Frozen</option>
<option>Pantry</option>
<option>Beverages</option>
<option>Household</option>
</select>
<select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-700">
<option>Store region</option>
<option>Entrance / Front</option>
<option>Aisle 1-5</option>
<option>Aisle 6-10</option>
<option>Aisle 11-15</option>
<option>Back Wall</option>
<option>Perimeter</option>
<option>Checkout Area</option>
</select>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
                    Add Item
                </button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3 mb-6">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" placeholder="Search items..." type="text"/>
</div>
<select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-700">
<option>All Categories</option>
<option>Produce</option>
<option>Dairy</option>
<option>Meat &amp; Seafood</option>
<option>Bakery</option>
<option>Frozen</option>
<option>Pantry</option>
</select>
<select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-700">
<option>Sort by Store Region</option>
<option>Sort by Category</option>
<option>Sort by Date Added</option>
</select>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Produce</h3>
<p className="text-xs text-gray-500 mt-0.5">Perimeter • 4 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="apple"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Bananas</p>
<p className="text-xs text-gray-500">Added by Sarah • 2h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Tomatoes</p>
<p className="text-xs text-gray-500">Added by John • 3h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-900 bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-400 line-through">Lettuce</p>
<p className="text-xs text-gray-400">Completed by Alex</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Avocados</p>
<p className="text-xs text-gray-500">Added by Maria • 5h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Dairy</h3>
<p className="text-xs text-gray-500 mt-0.5">Back Wall • 3 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
<i className="w-4 h-4 text-blue-600" data-lucide="milk"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Whole Milk</p>
<p className="text-xs text-gray-500">Added by John • 1h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Cheddar Cheese</p>
<p className="text-xs text-gray-500">Added by Sarah • 2h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Greek Yogurt</p>
<p className="text-xs text-gray-500">Added by Alex • 4h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Meat &amp; Seafood</h3>
<p className="text-xs text-gray-500 mt-0.5">Back Wall • 2 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="beef"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Chicken Breast</p>
<p className="text-xs text-gray-500">Added by Maria • 3h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Salmon Fillets</p>
<p className="text-xs text-gray-500">Added by John • 5h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Bakery</h3>
<p className="text-xs text-gray-500 mt-0.5">Entrance / Front • 3 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
<i className="w-4 h-4 text-yellow-600" data-lucide="croissant"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-900 bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-400 line-through">Sourdough Bread</p>
<p className="text-xs text-gray-400">Completed by Sarah</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Bagels</p>
<p className="text-xs text-gray-500">Added by Alex • 2h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Croissants</p>
<p className="text-xs text-gray-500">Added by Maria • 6h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Pantry</h3>
<p className="text-xs text-gray-500 mt-0.5">Aisle 6-10 • 4 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
<i className="w-4 h-4 text-amber-600" data-lucide="package"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Pasta</p>
<p className="text-xs text-gray-500">Added by John • 1h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Olive Oil</p>
<p className="text-xs text-gray-500">Added by Sarah • 3h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Canned Tomatoes</p>
<p className="text-xs text-gray-500">Added by Alex • 4h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Rice</p>
<p className="text-xs text-gray-500">Added by Maria • 7h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="px-4 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-semibold text-gray-900">Beverages</h3>
<p className="text-xs text-gray-500 mt-0.5">Aisle 1-5 • 2 items</p>
</div>
<div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center">
<i className="w-4 h-4 text-cyan-600" data-lucide="cup-soda"></i>
</div>
</div>
</div>
<div className="divide-y divide-gray-100">
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Orange Juice</p>
<p className="text-xs text-gray-500">Added by Sarah • 2h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
<div className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors group">
<div className="flex items-center gap-3">
<button className="w-5 h-5 rounded border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition-colors flex-shrink-0">
</button>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900">Sparkling Water</p>
<p className="text-xs text-gray-500">Added by John • 5h ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
<i className="w-4 h-4 text-gray-400" data-lucide="trash-2"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 shadow-sm">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-6">
<div>
<p className="text-2xl font-semibold text-gray-900">18</p>
<p className="text-xs text-gray-500">Total items</p>
</div>
<div className="w-px h-10 bg-gray-200"></div>
<div>
<p className="text-2xl font-semibold text-green-600">2</p>
<p className="text-xs text-gray-500">Completed</p>
</div>
<div className="w-px h-10 bg-gray-200"></div>
<div>
<p className="text-2xl font-semibold text-gray-900">16</p>
<p className="text-xs text-gray-500">Remaining</p>
</div>
</div>
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i className="w-4 h-4" data-lucide="check-circle"></i>
                    Mark All Complete
                </button>
</div>
</div>
</div>


    </>
  );
}
