import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Custom date range toggle
        const weekFilter = document.getElementById('weekFilter');
        const customDateRange = document.getElementById('customDateRange');

        weekFilter.addEventListener('change', function() {
            if (this.value === 'custom') {
                customDateRange.classList.remove('hidden');
                customDateRange.classList.add('flex');
            } else {
                customDateRange.classList.add('hidden');
                customDateRange.classList.remove('flex');
            }
        });

        // Sorting functionality
        let sortDirection = {};

        function sortTable(columnIndex) {
            const table = document.getElementById('performanceTable');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr')).filter(row => !row.classList.contains('bg-gray-50'));
            
            // Toggle sort direction for this column
            if (!sortDirection[columnIndex]) {
                sortDirection[columnIndex] = 'asc';
            } else if (sortDirection[columnIndex] === 'asc') {
                sortDirection[columnIndex] = 'desc';
            } else {
                sortDirection[columnIndex] = 'asc';
            }
            
            const direction = sortDirection[columnIndex];
            
            rows.sort((a, b) => {
                let aValue, bValue;
                
                if (columnIndex === 0) {
                    // Sort by stylist name
                    aValue = a.cells[columnIndex].textContent.trim();
                    bValue = b.cells[columnIndex].textContent.trim();
                } else {
                    // Sort by numeric value
                    aValue = parseFloat(a.cells[columnIndex].textContent.replace(/[$,%]/g, '')) || 0;
                    bValue = parseFloat(b.cells[columnIndex].textContent.replace(/[$,%]/g, '')) || 0;
                }
                
                if (direction === 'asc') {
                    return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
                } else {
                    return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
                }
            });
            
            // Re-append rows in sorted order
            rows.forEach(row => tbody.insertBefore(row, tbody.querySelector('.bg-gray-50')));
            
            // Re-initialize lucide icons
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">

<header className="bg-white border-b border-gray-200">
<div className="max-w-[1800px] mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Stylist Performance Dashboard</h1>
<p className="text-sm text-gray-500 mt-1">Weekly tracking across all locations</p>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
<i className="w-4 h-4 text-gray-600" data-lucide="calendar"></i>
<select className="bg-transparent text-sm font-medium text-gray-900 border-none outline-none cursor-pointer" id="weekFilter">
<option value="current">Week: Dec 17-23, 2023</option>
<option value="week1">Week: Dec 10-16, 2023</option>
<option value="week2">Week: Dec 3-9, 2023</option>
<option value="week3">Week: Nov 26-Dec 2, 2023</option>
<option value="week4">Week: Nov 19-25, 2023</option>
<option value="week5">Week: Nov 12-18, 2023</option>
<option value="week6">Week: Nov 5-11, 2023</option>
<option value="week7">Week: Oct 29-Nov 4, 2023</option>
<option value="custom">Custom Date Range...</option>
</select>
</div>

<div className="hidden items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2" id="customDateRange">
<input className="bg-transparent text-sm font-medium text-gray-900 border-none outline-none" id="startDate" type="date"/>
<span className="text-gray-400">to</span>
<input className="bg-transparent text-sm font-medium text-gray-900 border-none outline-none" id="endDate" type="date"/>
</div>
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                            Export Report
                        </button>
</div>
</div>
</div>
</header>

<div className="max-w-[1800px] mx-auto px-6 py-4">
<div className="bg-white rounded-lg border border-gray-200 p-4">
<div className="flex items-center gap-6">
<span className="text-sm font-medium text-gray-700">Performance Status:</span>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<span className="text-xs text-gray-600">Below Forecast</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-orange-500"></div>
<span className="text-xs text-gray-600">Below Projection</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<span className="text-xs text-gray-600">Below Goal</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-xs text-gray-600">Above Goal</span>
</div>
</div>
</div>
</div>
</div>

<main className="max-w-[1800px] mx-auto px-6 py-6">
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full" id="performanceTable">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="sticky left-0 z-10 bg-gray-50 px-6 py-4 text-left border-r border-gray-200">
<div className="flex items-center gap-2 cursor-pointer group" onclick="sortTable(0)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Stylist</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(1)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Level</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(2)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Total Sales</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(3)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Service Sales</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(4)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Retail Sales</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(5)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Retail/Service %</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(6)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide"># Services</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(7)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide"># Clients</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(8)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Rebooking %</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(9)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">SPT</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(10)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">RPCT</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(11)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Retail Magic #</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(12)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">8-Week FV</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(13)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Utilization</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(14)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">New Retention</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
<th className="px-4 py-4 text-center border-l border-gray-200">
<div className="flex items-center justify-center gap-2 cursor-pointer group" onclick="sortTable(15)">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Existing Retention</span>
<div className="flex flex-col opacity-40 group-hover:opacity-100 transition-opacity">
<i className="w-3 h-3 -mb-1" data-lucide="chevron-up"></i>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</th>
</tr>
</thead>
<tbody>

<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
<td className="sticky left-0 z-10 bg-white px-6 py-4 border-r border-gray-200">
<div className="flex items-center gap-3">
<img alt="Stylist" className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-semibold text-gray-900 whitespace-nowrap">Emma Richardson</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<span className="text-sm text-gray-900">3</span>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<span className="text-sm font-medium text-gray-900">$10,630</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<span className="text-sm font-medium text-gray-900">$8,450</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<span className="text-sm font-medium text-gray-900">$2,180</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">25.8%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">52</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">38</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">76%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">2.8</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">$57.37</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">31</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">$18,200</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">87%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">68%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">92%</span>
</div>
</td>
</tr>

<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
<td className="sticky left-0 z-10 bg-white px-6 py-4 border-r border-gray-200">
<div className="flex items-center gap-3">
<img alt="Stylist" className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-semibold text-gray-900 whitespace-nowrap">Michael Chen</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<span className="text-sm text-gray-900">2</span>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<span className="text-sm font-medium text-gray-900">$7,700</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<span className="text-sm font-medium text-gray-900">$6,720</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<span className="text-sm font-medium text-gray-900">$980</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">14.6%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">42</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">34</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">62%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">2.3</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">$28.82</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">16</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">$13,400</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">78%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">71%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">84%</span>
</div>
</td>
</tr>

<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
<td className="sticky left-0 z-10 bg-white px-6 py-4 border-r border-gray-200">
<div className="flex items-center gap-3">
<img alt="Stylist" className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-semibold text-gray-900 whitespace-nowrap">Sarah Martinez</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<span className="text-sm text-gray-900">1</span>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<span className="text-sm font-medium text-gray-900">$5,310</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<span className="text-sm font-medium text-gray-900">$4,890</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<span className="text-sm font-medium text-gray-900">$420</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-900">8.6%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">36</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">28</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-900">48%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">1.9</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-900">$15.00</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-900">9</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 rounded-md border border-red-200">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium text-gray-900">$8,600</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">69%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-50 rounded-md border border-orange-200">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<span className="text-sm font-medium text-gray-900">58%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">79%</span>
</div>
</td>
</tr>

<tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
<td className="sticky left-0 z-10 bg-white px-6 py-4 border-r border-gray-200">
<div className="flex items-center gap-3">
<img alt="Stylist" className="w-9 h-9 rounded-full object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-sm font-semibold text-gray-900 whitespace-nowrap">James Wilson</div>
</div>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<span className="text-sm text-gray-900">2</span>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<span className="text-sm font-medium text-gray-900">$8,750</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<span className="text-sm font-medium text-gray-900">$7,210</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center justify-center px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<span className="text-sm font-medium text-gray-900">$1,540</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">21.4%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">46</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">36</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">73%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">2.6</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">$42.78</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">24</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">$15,800</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">81%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-md border border-green-200">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium text-gray-900">78%</span>
</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-200">
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-50 rounded-md border border-yellow-200">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="text-sm font-medium text-gray-900">86%</span>
</div>
</td>
</tr>

<tr className="bg-gray-50 font-semibold">
<td className="sticky left-0 z-10 bg-gray-100 px-6 py-4 border-r border-gray-300">
<div className="text-sm font-semibold text-gray-900">WEEKLY TOTALS</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">—</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">$32,390</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">$27,270</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">$5,120</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">18.8%</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">176</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">136</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">65%</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">2.4</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">$37.65</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">80</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">$56,000</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">79%</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">69%</div>
</td>
<td className="px-4 py-4 text-center border-l border-gray-300">
<div className="text-sm font-semibold text-gray-900">85%</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>


    </>
  );
}
