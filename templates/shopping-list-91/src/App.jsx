import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            strokeWidth: 1.5
        });

        function toggleCheck(element) {
            const isChecked = element.classList.contains('bg-neutral-900');
            const itemText = element.nextElementSibling.querySelector('p:first-child');
            const itemSubtext = element.nextElementSibling.querySelector('p:last-child');
            
            if (isChecked) {
                // Uncheck
                element.classList.remove('bg-neutral-900', 'border-neutral-900');
                element.classList.add('border-neutral-300');
                element.innerHTML = '';
                itemText.classList.remove('text-neutral-400', 'line-through');
                itemText.classList.add('text-neutral-900');
                itemSubtext.classList.remove('text-neutral-400');
                itemSubtext.classList.add('text-neutral-500');
            } else {
                // Check
                element.classList.remove('border-neutral-300');
                element.classList.add('bg-neutral-900', 'border-neutral-900');
                element.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-white"></i>';
                itemText.classList.remove('text-neutral-900');
                itemText.classList.add('text-neutral-400', 'line-through');
                itemSubtext.classList.remove('text-neutral-500');
                itemSubtext.classList.add('text-neutral-400');
                lucide.createIcons({
                    strokeWidth: 1.5
                });
            }
        }

        function removeItem(button) {
            const item = button.closest('.px-4');
            item.style.opacity = '0';
            item.style.transform = 'translateX(20px)';
            item.style.transition = 'all 0.3s';
            setTimeout(() => {
                item.remove();
            }, 300);
        }

        function addItem() {
            const input = document.getElementById('newItemInput');
            const itemName = input.value.trim();
            
            if (itemName === '') {
                alert('Please enter an item name');
                return;
            }
            
            alert(`Added "${itemName}" to your list!`);
            input.value = '';
        }

        function clearCompleted() {
            const completedItems = document.querySelectorAll('.bg-neutral-900.border-neutral-900');
            completedItems.forEach(checkbox => {
                const item = checkbox.closest('.px-4');
                item.style.opacity = '0';
                item.style.transform = 'translateX(20px)';
                item.style.transition = 'all 0.3s';
                setTimeout(() => {
                    item.remove();
                }, 300);
            });
        }

        // Allow Enter key to add items
        document.getElementById('newItemInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addItem();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="bg-white border-b border-neutral-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tight">SL</span>
</div>
<h1 className="text-lg font-semibold text-neutral-900 tracking-tight">Shopping List</h1>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors" onclick="alert('Share feature coming soon!')">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="hidden sm:inline">Share</span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors" onclick="alert('Settings feature coming soon!')">
<i className="w-4 h-4" data-lucide="settings"></i>
</button>
</div>
</div>
</div>
</header>

<main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6 bg-white rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&amp;h=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&amp;h=80&amp;fit=crop"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&amp;h=80&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">3 people active</p>
<p className="text-xs text-neutral-500">Last updated 2 min ago</p>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors" onclick="alert('Invite sent!')">
<i className="w-4 h-4" data-lucide="user-plus"></i>
<span>Invite</span>
</button>
</div>
</div>

<div className="mb-6 bg-white rounded-xl border border-neutral-200 p-4">
<div className="flex gap-3">
<input className="flex-1 px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent" id="newItemInput" placeholder="Add new item..." type="text"/>
<select className="px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent appearance-none bg-white pr-8" id="categorySelect" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 strokeWidth=%272%27 strokeLinecap=%27round%27 strokeLinejoin=%27round%27%3E%3Cpolyline points=%276 9 12 15 18 9%27%3E%3C/polyline%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1rem'}}>
<option>Produce</option>
<option>Dairy</option>
<option>Meat</option>
<option>Bakery</option>
<option>Frozen</option>
<option>Pantry</option>
</select>
<button className="inline-flex items-center justify-center w-10 h-10 text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors" onclick="addItem()">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="space-y-4">

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-green-600" data-lucide="leaf"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Produce</h3>
<p className="text-xs text-neutral-500">Aisle 1-2</p>
</div>
</div>
<span className="text-xs font-medium text-neutral-500">4 items</span>
</div>
<div className="divide-y divide-neutral-100">
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Bananas</p>
<p className="text-xs text-neutral-500">Added by Sarah • 10 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Spinach (organic)</p>
<p className="text-xs text-neutral-500">Added by Mike • 15 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-900 rounded bg-neutral-900 flex items-center justify-center cursor-pointer" onclick="toggleCheck(this)">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
<div className="flex-1">
<p className="text-sm text-neutral-400 line-through">Tomatoes</p>
<p className="text-xs text-neutral-400">Added by You • 1 hour ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Avocados</p>
<p className="text-xs text-neutral-500">Added by Sarah • 25 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-blue-600" data-lucide="milk"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Dairy</h3>
<p className="text-xs text-neutral-500">Aisle 5</p>
</div>
</div>
<span className="text-xs font-medium text-neutral-500">3 items</span>
</div>
<div className="divide-y divide-neutral-100">
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Whole Milk (1 gallon)</p>
<p className="text-xs text-neutral-500">Added by Mike • 5 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Greek Yogurt</p>
<p className="text-xs text-neutral-500">Added by You • 20 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Cheddar Cheese</p>
<p className="text-xs text-neutral-500">Added by Sarah • 30 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-red-600" data-lucide="drumstick"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Meat &amp; Seafood</h3>
<p className="text-xs text-neutral-500">Aisle 8</p>
</div>
</div>
<span className="text-xs font-medium text-neutral-500">2 items</span>
</div>
<div className="divide-y divide-neutral-100">
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Chicken Breast (2 lbs)</p>
<p className="text-xs text-neutral-500">Added by Mike • 8 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Salmon Fillets</p>
<p className="text-xs text-neutral-500">Added by You • 12 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
<div className="px-4 py-3 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-amber-600" data-lucide="croissant"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-neutral-900">Bakery</h3>
<p className="text-xs text-neutral-500">Aisle 3</p>
</div>
</div>
<span className="text-xs font-medium text-neutral-500">1 item</span>
</div>
<div className="divide-y divide-neutral-100">
<div className="px-4 py-3 flex items-center gap-3 hover:bg-neutral-50 transition-colors group">
<div className="w-5 h-5 border-2 border-neutral-300 rounded group-hover:border-neutral-900 transition-colors cursor-pointer" onclick="toggleCheck(this)"></div>
<div className="flex-1">
<p className="text-sm text-neutral-900">Whole Wheat Bread</p>
<p className="text-xs text-neutral-500">Added by Sarah • 40 min ago</p>
</div>
<button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-neutral-100 rounded transition-all" onclick="removeItem(this)">
<i className="w-4 h-4 text-neutral-400" data-lucide="x"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-white rounded-xl border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-neutral-900">Total Items: 10</p>
<p className="text-xs text-neutral-500">1 item completed</p>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors" onclick="clearCompleted()">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span>Clear Completed</span>
</button>
</div>
</div>
</main>
</div>


    </>
  );
}
