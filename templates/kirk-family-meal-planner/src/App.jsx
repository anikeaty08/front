import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentDay = '';
        let selectedMealType = 'dinner';
        let mealData = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [],
            saturday: [],
            sunday: []
        };
        let groceryItems = [];

        function toggleDay(day) {
            const content = document.getElementById(`${day}-content`);
            const icon = document.getElementById(`${day}-icon`);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function addMeal(day) {
            currentDay = day;
            document.getElementById('mealModal').classList.remove('hidden');
            document.getElementById('mealName').value = '';
            document.getElementById('recipeNotes').value = '';
            document.getElementById('saveRecipe').checked = false;
            selectedMealType = 'dinner';
            
            // Reset ingredients
            document.getElementById('ingredientsList').innerHTML = `
                <div class="flex gap-2">
                    <input type="text" placeholder="Ingredient name" class="ingredient-name flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors">
                    <input type="text" placeholder="Amount" class="ingredient-amount w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors">
                </div>
            `;
            
            // Reset meal type buttons
            document.querySelectorAll('.meal-type-btn').forEach(btn => {
                btn.classList.remove('bg-black', 'text-white');
                btn.classList.add('text-gray-900');
            });
        }

        function closeMealModal() {
            document.getElementById('mealModal').classList.add('hidden');
        }

        function selectMealType(type) {
            selectedMealType = type;
            document.querySelectorAll('.meal-type-btn').forEach(btn => {
                if (btn.dataset.type === type) {
                    btn.classList.add('bg-black', 'text-white');
                    btn.classList.remove('text-gray-900');
                } else {
                    btn.classList.remove('bg-black', 'text-white');
                    btn.classList.add('text-gray-900');
                }
            });
        }

        function addIngredientField() {
            const ingredientsList = document.getElementById('ingredientsList');
            const newField = document.createElement('div');
            newField.className = 'flex gap-2';
            newField.innerHTML = `
                <input type="text" placeholder="Ingredient name" class="ingredient-name flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors">
                <input type="text" placeholder="Amount" class="ingredient-amount w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors">
                <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-red-500 transition-colors">
                    <i data-lucide="x" style="width: 16px; height: 16px;"></i>
                </button>
            `;
            ingredientsList.appendChild(newField);
            lucide.createIcons();
        }

        function saveMeal() {
            const mealName = document.getElementById('mealName').value.trim();
            if (!mealName) {
                alert('Please enter a meal name');
                return;
            }

            const ingredients = [];
            const ingredientInputs = document.querySelectorAll('#ingredientsList > div');
            ingredientInputs.forEach(div => {
                const name = div.querySelector('.ingredient-name').value.trim();
                const amount = div.querySelector('.ingredient-amount').value.trim();
                if (name) {
                    ingredients.push({ name, amount });
                }
            });

            const meal = {
                id: Date.now(),
                name: mealName,
                type: selectedMealType,
                ingredients: ingredients,
                notes: document.getElementById('recipeNotes').value.trim(),
                saved: document.getElementById('saveRecipe').checked
            };

            mealData[currentDay].push(meal);
            renderDay(currentDay);
            closeMealModal();
            updateMealCount(currentDay);
        }

        function renderDay(day) {
            const mealsContainer = document.getElementById(`${day}-meals`);
            mealsContainer.innerHTML = '';

            mealData[day].forEach(meal => {
                const mealDiv = document.createElement('div');
                mealDiv.className = 'p-3 border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors';
                mealDiv.innerHTML = `
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-sm font-medium text-gray-900">${meal.name}</span>
                                <span class="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-600">${meal.type}</span>
                                ${meal.saved ? '<i data-lucide="bookmark-check" style="width: 14px; height: 14px;" class="text-gray-400"></i>' : ''}
                            </div>
                            ${meal.ingredients.length > 0 ? `
                                <p class="text-xs text-gray-500">${meal.ingredients.length} ingredient${meal.ingredients.length > 1 ? 's' : ''}</p>
                            ` : ''}
                        </div>
                        <button onclick="removeMeal('${day}', ${meal.id})" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                        </button>
                    </div>
                `;
                mealsContainer.appendChild(mealDiv);
            });

            lucide.createIcons();
        }

        function removeMeal(day, mealId) {
            mealData[day] = mealData[day].filter(meal => meal.id !== mealId);
            renderDay(day);
            updateMealCount(day);
        }

        function updateMealCount(day) {
            const count = mealData[day].length;
            document.getElementById(`${day}-count`).textContent = `${count} meal${count !== 1 ? 's' : ''} planned`;
        }

        document.getElementById('generateGroceryBtn').addEventListener('click', function() {
            groceryItems = [];
            
            // Collect all ingredients from all days
            Object.values(mealData).forEach(dayMeals => {
                dayMeals.forEach(meal => {
                    meal.ingredients.forEach(ingredient => {
                        // Check if ingredient already exists
                        const existing = groceryItems.find(item => 
                            item.name.toLowerCase() === ingredient.name.toLowerCase()
                        );
                        
                        if (existing) {
                            // Combine amounts if possible
                            if (ingredient.amount) {
                                existing.amount = existing.amount ? `${existing.amount}, ${ingredient.amount}` : ingredient.amount;
                            }
                        } else {
                            groceryItems.push({
                                id: Date.now() + Math.random(),
                                name: ingredient.name,
                                amount: ingredient.amount || '',
                                checked: false
                            });
                        }
                    });
                });
            });

            renderGroceryList();
        });

        function renderGroceryList() {
            const listContainer = document.getElementById('groceryList');
            
            if (groceryItems.length === 0) {
                listContainer.innerHTML = `
                    <div class="p-8 text-center">
                        <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                            <i data-lucide="shopping-cart" style="width: 20px; height: 20px;" class="text-gray-400"></i>
                        </div>
                        <p class="text-sm text-gray-500">Add meals to generate your grocery list</p>
                        <p class="text-xs text-gray-400 mt-1">or add items manually above</p>
                    </div>
                `;
            } else {
                listContainer.innerHTML = '';
                groceryItems.forEach(item => {
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'p-3 hover:bg-gray-50 transition-colors flex items-center gap-3';
                    itemDiv.innerHTML = `
                        <input type="checkbox" ${item.checked ? 'checked' : ''} onchange="toggleGroceryItem(${item.id})" class="w-4 h-4 rounded border-gray-300">
                        <div class="flex-1 ${item.checked ? 'opacity-50' : ''}">
                            <p class="text-sm text-gray-900 ${item.checked ? 'line-through' : ''}">${item.name}</p>
                            ${item.amount ? `<p class="text-xs text-gray-500">${item.amount}</p>` : ''}
                        </div>
                        <button onclick="removeGroceryItem(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors">
                            <i data-lucide="x" style="width: 16px; height: 16px;"></i>
                        </button>
                    `;
                    listContainer.appendChild(itemDiv);
                });
            }

            document.getElementById('totalItems').textContent = groceryItems.length;
            lucide.createIcons();
        }

        function toggleGroceryItem(itemId) {
            const item = groceryItems.find(i => i.id === itemId);
            if (item) {
                item.checked = !item.checked;
                renderGroceryList();
            }
        }

        function removeGroceryItem(itemId) {
            groceryItems = groceryItems.filter(item => item.id !== itemId);
            renderGroceryList();
        }

        function clearGroceryList() {
            if (confirm('Are you sure you want to clear the grocery list?')) {
                groceryItems = [];
                renderGroceryList();
            }
        }

        function addManualItem() {
            const input = document.getElementById('manualItemInput');
            const itemName = input.value.trim();
            
            if (itemName) {
                groceryItems.push({
                    id: Date.now(),
                    name: itemName,
                    amount: '',
                    checked: false
                });
                input.value = '';
                renderGroceryList();
            }
        }

        document.getElementById('manualItemInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addManualItem();
            }
        });

        // Initialize lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="border-b border-gray-200 bg-white sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tight">FM</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-gray-900">Family Meal Planner</h1>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
<i data-lucide="bookmark" style={{width: '16px', height: '16px'}}></i>
                        Saved Recipes
                    </button>
</div>
</div>
</header>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">This Week's Meals</h2>
<button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors" id="generateGroceryBtn">
<i data-lucide="sparkles" style={{width: '16px', height: '16px'}}></i>
                            Generate List
                        </button>
</div>

<div className="space-y-3">
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('monday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Mon</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Monday</p>
<p className="text-xs text-gray-500" id="monday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="monday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="monday-content">
<div className="space-y-2" id="monday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('monday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('tuesday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Tue</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Tuesday</p>
<p className="text-xs text-gray-500" id="tuesday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="tuesday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="tuesday-content">
<div className="space-y-2" id="tuesday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('tuesday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('wednesday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Wed</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Wednesday</p>
<p className="text-xs text-gray-500" id="wednesday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="wednesday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="wednesday-content">
<div className="space-y-2" id="wednesday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('wednesday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('thursday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Thu</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Thursday</p>
<p className="text-xs text-gray-500" id="thursday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="thursday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="thursday-content">
<div className="space-y-2" id="thursday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('thursday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('friday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Fri</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Friday</p>
<p className="text-xs text-gray-500" id="friday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="friday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="friday-content">
<div className="space-y-2" id="friday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('friday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('saturday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Sat</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Saturday</p>
<p className="text-xs text-gray-500" id="saturday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="saturday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="saturday-content">
<div className="space-y-2" id="saturday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('saturday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
<div className="border border-gray-200 rounded-lg bg-white hover:border-gray-300 transition-colors">
<button className="w-full px-4 py-3 flex items-center justify-between text-left" onclick="toggleDay('sunday')">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="text-sm font-medium text-gray-700">Sun</span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Sunday</p>
<p className="text-xs text-gray-500" id="sunday-count">0 meals planned</p>
</div>
</div>
<i className="text-gray-400 transition-transform" data-lucide="chevron-down" id="sunday-icon" style={{width: '20px', height: '20px'}}></i>
</button>
<div className="hidden px-4 pb-4 space-y-3 border-t border-gray-100" id="sunday-content">
<div className="space-y-2" id="sunday-meals"></div>
<button className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center gap-2" onclick="addMeal('sunday')">
<i data-lucide="plus" style={{width: '16px', height: '16px'}}></i>
                                    Add Meal
                                </button>
</div>
</div>
</div>
</div>

<div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
<div className="flex items-center justify-between">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Grocery List</h2>
<button className="text-sm text-gray-500 hover:text-gray-900 transition-colors" onclick="clearGroceryList()">Clear All</button>
</div>
<div className="border border-gray-200 rounded-lg bg-white">
<div className="p-4 border-b border-gray-100">
<div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
<i className="text-gray-400" data-lucide="search" style={{width: '16px', height: '16px'}}></i>
<input className="flex-1 bg-transparent text-sm outline-none text-gray-900 placeholder:text-gray-400" id="manualItemInput" placeholder="Add item manually..." type="text"/>
<button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" onclick="addManualItem()">Add</button>
</div>
</div>
<div className="divide-y divide-gray-100" id="groceryList">
<div className="p-8 text-center">
<div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
<i className="text-gray-400" data-lucide="shopping-cart" style={{width: '20px', height: '20px'}}></i>
</div>
<p className="text-sm text-gray-500">Add meals to generate your grocery list</p>
<p className="text-xs text-gray-400 mt-1">or add items manually above</p>
</div>
</div>
<div className="p-4 border-t border-gray-200 bg-gray-50">
<div className="flex items-center justify-between text-sm">
<span className="text-gray-600">Total items</span>
<span className="font-medium text-gray-900" id="totalItems">0</span>
</div>
</div>
</div>
<button className="w-full px-4 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
<i data-lucide="share-2" style={{width: '16px', height: '16px'}}></i>
                        Share List
                    </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" id="mealModal">
<div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
<h3 className="text-lg font-semibold text-gray-900">Add Meal</h3>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="closeMealModal()">
<i data-lucide="x" style={{width: '20px', height: '20px'}}></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Meal Name</label>
<input className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors" id="mealName" placeholder="e.g., Spaghetti Bolognese" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Meal Type</label>
<div className="grid grid-cols-3 gap-2">
<button className="meal-type-btn px-3 py-2 border border-gray-200 rounded-lg text-sm hover:border-gray-400 transition-colors" data-type="breakfast" onclick="selectMealType('breakfast')">Breakfast</button>
<button className="meal-type-btn px-3 py-2 border border-gray-200 rounded-lg text-sm hover:border-gray-400 transition-colors" data-type="lunch" onclick="selectMealType('lunch')">Lunch</button>
<button className="meal-type-btn px-3 py-2 border border-gray-200 rounded-lg text-sm hover:border-gray-400 transition-colors" data-type="dinner" onclick="selectMealType('dinner')">Dinner</button>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<label className="text-sm font-medium text-gray-900">Ingredients</label>
<button className="text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1" onclick="addIngredientField()">
<i data-lucide="plus" style={{width: '12px', height: '12px'}}></i>
                            Add
                        </button>
</div>
<div className="space-y-2" id="ingredientsList">
<div className="flex gap-2">
<input className="ingredient-name flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors" placeholder="Ingredient name" type="text"/>
<input className="ingredient-amount w-24 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors" placeholder="Amount" type="text"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Recipe Notes (Optional)</label>
<textarea className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none" id="recipeNotes" placeholder="Add cooking instructions or notes..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
<input className="w-4 h-4 rounded border-gray-300" id="saveRecipe" type="checkbox"/>
<label className="text-sm text-gray-700" htmlFor="saveRecipe">Save this recipe for future use</label>
</div>
</div>
<div className="px-6 py-4 border-t border-gray-200 flex gap-3">
<button className="flex-1 px-4 py-2 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors" onclick="closeMealModal()">Cancel</button>
<button className="flex-1 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors" onclick="saveMeal()">Add Meal</button>
</div>
</div>
</div>


    </>
  );
}
