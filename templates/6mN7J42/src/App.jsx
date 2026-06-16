import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', function() {
            const dropdownTrigger = document.getElementById('dropdown-trigger');
            const dropdownMenu = document.getElementById('dropdown-menu');
            const dropdownIcon = document.getElementById('dropdown-icon');
            const selectedOption = document.getElementById('selected-option');
            const dropdownItems = document.querySelectorAll('.dropdown-item');
            const budgetDataContainer = document.getElementById('budget-data');
            
            const budgetData = {
                "Spent": [
                    {category: "Groceries", description: "Local Supermarkets", amount: "$120.00", trend: "up", color: "green", path: "M0,15 L10,10 L20,18 L30,12 L40,16 L50,8 L60,14 L70,6 L80,14 L90,10 L100,4"},
                    {category: "Entertainment", description: "Movies, Subscriptions", amount: "$45.00", trend: "down", color: "pink", path: "M0,6 L10,10 L20,8 L30,14 L40,12 L50,16 L60,18 L70,14 L80,20 L90,22 L100,24"},
                    {category: "Transport", description: "Gas, Public Transport", amount: "$60.00", trend: "up", color: "green", path: "M0,20 L10,18 L20,16 L30,14 L40,16 L50,12 L60,10 L70,8 L80,10 L90,6 L100,4"}
                ],
                "Saved": [
                    {category: "Emergency Fund", description: "Savings Account", amount: "$250.00", trend: "up", color: "green", path: "M0,20 L10,18 L20,15 L30,12 L40,10 L50,8 L60,6 L70,5 L80,4 L90,3 L100,2"},
                    {category: "Vacation", description: "Travel Fund", amount: "$75.00", trend: "up", color: "green", path: "M0,15 L10,14 L20,13 L30,12 L40,11 L50,10 L60,9 L70,8 L80,7 L90,6 L100,5"},
                    {category: "Investments", description: "Stocks, Bonds", amount: "$180.00", trend: "up", color: "green", path: "M0,24 L10,22 L20,20 L30,18 L40,16 L50,14 L60,12 L70,10 L80,8 L90,6 L100,4"}
                ],
                "Earned": [
                    {category: "Salary", description: "Main Income", amount: "$1,250.00", trend: "up", color: "green", path: "M0,20 L10,19 L20,18 L30,17 L40,16 L50,15 L60,14 L70,13 L80,12 L90,11 L100,10"},
                    {category: "Freelance", description: "Side Projects", amount: "$350.00", trend: "up", color: "green", path: "M0,15 L10,12 L20,18 L30,10 L40,20 L50,8 L60,16 L70,12 L80,18 L90,10 L100,14"},
                    {category: "Investments", description: "Dividends, Interest", amount: "$85.00", trend: "down", color: "pink", path: "M0,10 L10,12 L20,14 L30,12 L40,16 L50,14 L60,18 L70,16 L80,20 L90,18 L100,22"}
                ]
            };
            
            function renderBudgetData(selectedValue) {
                const data = budgetData[selectedValue];
                let html = '';
                
                data.forEach((item, index) => {
                    const isLast = index === data.length - 1;
                    const borderClass = isLast ? '' : 'border-b border-gray-700';
                    const trendIcon = item.trend === 'up' 
                        ? '<svg class="w-4 h-4 ml-1 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 15l7-7 7 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                        : '<svg class="w-4 h-4 ml-1 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 9l-7 7-7-7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
                    
                    const colorClass = item.color === 'green' ? '#10B981' : '#EC4899';
                    const gradientId = `${item.category.toLowerCase().replace(/\s/g, '')}Gradient${index}`;
                    
                    html += `
                        <div class="${borderClass} pb-4 mb-4 slide-in delay-${index+1}00">
                            <div class="flex justify-between items-center mb-2">
                                <div>
                                    <h2 class="font-bold text-gray-100">${item.category}</h2>
                                    <p class="text-sm text-gray-400">${item.description}</p>
                                </div>
                                <div class="flex items-center">
                                    <span class="font-bold text-gray-100">${item.amount}</span>
                                    ${trendIcon}
                                </div>
                            </div>
                            <div class="h-12 w-full">
                                <svg class="w-full h-full" viewBox="-1 -1 102 32" preserveAspectRatio="none">
                                    <path class="chart-line" d="${item.path}" fill="none" stroke="${colorClass}" stroke-width="2" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
                                    <path class="chart-fill" d="${item.path} V30 H0 Z" fill="url(#${gradientId})"/>
                                    <defs>
                                        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="${colorClass}"/>
                                            <stop offset="100%" stop-color="${colorClass}" stop-opacity="0"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    `;
                });
                
                budgetDataContainer.innerHTML = html;
            }
            
            renderBudgetData("Spent");
            
            dropdownTrigger.addEventListener('click', function() {
                dropdownMenu.classList.toggle('open');
                dropdownIcon.classList.toggle('open');
            });
            
            dropdownItems.forEach(item => {
                item.addEventListener('click', function() {
                    const value = this.getAttribute('data-value');
                    const color = this.getAttribute('data-color');
                    
                    selectedOption.textContent = value;
                    dropdownMenu.classList.remove('open');
                    dropdownIcon.classList.remove('open');
                    
                    if (color === 'blue') {
                        dropdownTrigger.className = 'flex items-center bg-blue-900/30 rounded-md px-3 py-1.5 cursor-pointer hover:bg-blue-800/50 transition-colors border border-white/10';
                        selectedOption.className = 'text-blue-400 text-sm font-medium';
                    } else if (color === 'green') {
                        dropdownTrigger.className = 'flex items-center bg-green-900/30 rounded-md px-3 py-1.5 cursor-pointer hover:bg-green-800/50 transition-colors border border-white/10';
                        selectedOption.className = 'text-green-400 text-sm font-medium';
                    } else if (color === 'purple') {
                        dropdownTrigger.className = 'flex items-center bg-purple-900/30 rounded-md px-3 py-1.5 cursor-pointer hover:bg-purple-800/50 transition-colors border border-white/10';
                        selectedOption.className = 'text-purple-400 text-sm font-medium';
                    }
                    
                    renderBudgetData(value);
                });
            });
            
            document.addEventListener('click', function(event) {
                if (!dropdownTrigger.contains(event.target) && !dropdownMenu.contains(event.target)) {
                    dropdownMenu.classList.remove('open');
                    dropdownIcon.classList.remove('open');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-gray-800 rounded-2xl p-6 shadow-lg max-w-md w-full slide-in border border-white/10">
<div className="flex justify-between items-center mb-6">
<div>
<h1 className="text-xl font-bold text-gray-100">Budget Overview</h1>
<p className="text-sm text-gray-400">Weekly Average</p>
</div>
<div className="relative">
<div className="flex items-center bg-blue-900/30 rounded-md px-3 py-1.5 cursor-pointer hover:bg-blue-800/50 transition-colors border border-white/10" id="dropdown-trigger">
<span className="text-blue-400 text-sm font-medium" id="selected-option">Spent</span>
<svg className="w-4 h-4 ml-1 text-blue-400 rotate-icon" fill="none" id="dropdown-icon" stroke="currentColor" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="dropdown absolute right-0 top-full mt-1 w-40 bg-gray-700 rounded-lg shadow-lg z-10 border border-white/10" id="dropdown-menu">
<div className="p-2">
<div className="dropdown-item flex items-center space-x-2 p-2 hover:bg-gray-600 rounded cursor-pointer" data-color="blue" data-value="Spent">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M21 11.25H3M21 16.5H3M3.75 19.5h16.5a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 .75.75z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-gray-200">Spent</span>
</div>
<div className="dropdown-item flex items-center space-x-2 p-2 hover:bg-gray-600 rounded cursor-pointer" data-color="green" data-value="Saved">
<svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7.5 4.5h9c2.25 0 3 .75 3 3v9c0 2.25-.75 3-3 3h-9c-2.25 0-3-.75-3-3v-9c0-2.25.75-3 3-3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M13.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M7.5 16.5v-1.5c0-1.5 1.5-3 3-3h3c1.5 0 3 1.5 3 3v1.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-gray-200">Saved</span>
</div>
<div className="dropdown-item flex items-center space-x-2 p-2 hover:bg-gray-600 rounded cursor-pointer" data-color="purple" data-value="Earned">
<svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-gray-200">Earned</span>
</div>
</div>
</div>
</div>
</div>
<div id="budget-data"></div>
<div className="mt-6 slide-in delay-400">
<button className="w-full gradient-button text-white rounded-xl py-3 font-bold shadow-lg">
                Details
            </button>
</div>
</div>


    </>
  );
}
