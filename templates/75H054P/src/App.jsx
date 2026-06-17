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
      
        // Mock database
        const mockTags = [
            { id: 1, name: 'JavaScript', color: 'bg-blue-100 text-blue-800' },
            { id: 2, name: 'React', color: 'bg-cyan-100 text-cyan-800' },
            { id: 3, name: 'TypeScript', color: 'bg-indigo-100 text-indigo-800' },
            { id: 4, name: 'Node.js', color: 'bg-green-100 text-green-800' },
            { id: 5, name: 'Python', color: 'bg-yellow-100 text-yellow-800' },
            { id: 6, name: 'Machine Learning', color: 'bg-purple-100 text-purple-800' },
            { id: 7, name: 'Web Development', color: 'bg-pink-100 text-pink-800' },
            { id: 8, name: 'Database', color: 'bg-gray-100 text-gray-800' }
        ];

        const mockContent = [
            { id: 1, title: 'Building Modern Web Apps', category: 'Tutorial', tags: [1, 2, 3], date: '2024-01-15' },
            { id: 2, title: 'React Hooks Deep Dive', category: 'Article', tags: [2, 1], date: '2024-01-14' },
            { id: 3, title: 'TypeScript Best Practices', category: 'Guide', tags: [3, 1], date: '2024-01-13' },
            { id: 4, title: 'Node.js Performance Tips', category: 'Tutorial', tags: [4, 1], date: '2024-01-12' },
            { id: 5, title: 'Python ML Algorithms', category: 'Course', tags: [5, 6], date: '2024-01-11' },
            { id: 6, title: 'Full Stack Development', category: 'Course', tags: [1, 2, 4, 7], date: '2024-01-10' },
            { id: 7, title: 'Database Design Patterns', category: 'Article', tags: [8, 4], date: '2024-01-09' }
        ];

        // State
        let selectedTags = [];
        let isDropdownOpen = false;
        let hasSearched = false;

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            initializeTagOptions();
            bindEventListeners();
        });

        function initializeTagOptions() {
            const tagOptionsContainer = document.getElementById('tag-options');
            mockTags.forEach(tag => {
                const option = document.createElement('div');
                option.className = 'flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors';
                option.innerHTML = `
                    <input type="checkbox" id="tag-${tag.id}" class="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500">
                    <label for="tag-${tag.id}" class="text-sm font-medium text-gray-900 cursor-pointer">${tag.name}</label>
                `;
                option.addEventListener('click', () => toggleTag(tag.id));
                tagOptionsContainer.appendChild(option);
            });
        }

        function bindEventListeners() {
            document.getElementById('search-container').addEventListener('click', toggleDropdown);
            document.addEventListener('click', (e) => {
                if (!e.target.closest('#search-container') && !e.target.closest('#tag-dropdown')) {
                    closeDropdown();
                }
            });
        }

        function toggleDropdown() {
            isDropdownOpen = !isDropdownOpen;
            const dropdown = document.getElementById('tag-dropdown');
            const icon = document.getElementById('dropdown-icon');
            
            if (isDropdownOpen) {
                dropdown.classList.add('open');
                icon.style.transform = 'rotate(180deg)';
            } else {
                dropdown.classList.remove('open');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        function closeDropdown() {
            isDropdownOpen = false;
            document.getElementById('tag-dropdown').classList.remove('open');
            document.getElementById('dropdown-icon').style.transform = 'rotate(0deg)';
        }

        function toggleTag(tagId) {
            const checkbox = document.getElementById(`tag-${tagId}`);
            checkbox.checked = !checkbox.checked;
            
            if (checkbox.checked) {
                selectedTags.push(tagId);
            } else {
                selectedTags = selectedTags.filter(id => id !== tagId);
            }
            
            updateSelectedTags();
            
            if (selectedTags.length > 0 && !hasSearched) {
                animateToResults();
            } else if (selectedTags.length > 0) {
                searchContent();
            } else {
                hideResults();
            }
        }

        function updateSelectedTags() {
            const container = document.getElementById('selected-tags');
            if (selectedTags.length === 0) {
                container.classList.add('hidden');
                return;
            }
            
            container.classList.remove('hidden');
            container.innerHTML = selectedTags.map(tagId => {
                const tag = mockTags.find(t => t.id === tagId);
                return `
                    <span class="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium ${tag.color}">
                        ${tag.name}
                        <button class="ml-2 w-4 h-4 rounded-full hover:bg-black hover:bg-opacity-10 flex items-center justify-center" onclick="removeTag(${tagId})">
                            <i data-lucide="x" class="w-3 h-3"></i>
                        </button>
                    </span>
                `;
            }).join('');
            lucide.createIcons();
        }

        function removeTag(tagId) {
            selectedTags = selectedTags.filter(id => id !== tagId);
            document.getElementById(`tag-${tagId}`).checked = false;
            updateSelectedTags();
            
            if (selectedTags.length > 0) {
                searchContent();
            } else {
                hideResults();
            }
        }

        function animateToResults() {
            hasSearched = true;
            const centeredSearch = document.getElementById('centered-search');
            const navbar = document.getElementById('navbar');
            const resultsSection = document.getElementById('results-section');
            
            // Animate navbar up
            navbar.style.position = 'sticky';
            navbar.style.top = '0';
            navbar.style.zIndex = '50';
            
            // Hide centered search
            centeredSearch.style.opacity = '0';
            centeredSearch.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                centeredSearch.style.display = 'none';
                resultsSection.classList.remove('hidden');
                searchContent();
            }, 300);
        }

        function searchContent() {
            const loadingState = document.getElementById('loading-state');
            const resultsTable = document.getElementById('results-table');
            
            loadingState.classList.remove('hidden');
            resultsTable.classList.add('hidden');
            
            setTimeout(() => {
                const filteredContent = mockContent.filter(item => 
                    item.tags.some(tag => selectedTags.includes(tag))
                );
                
                displayResults(filteredContent);
                loadingState.classList.add('hidden');
                resultsTable.classList.remove('hidden');
            }, 800);
        }

        function displayResults(content) {
            const tableBody = document.getElementById('table-body');
            const resultsCount = document.getElementById('results-count');
            
            resultsCount.textContent = `Found ${content.length} items`;
            
            tableBody.innerHTML = content.map(item => `
                <tr class="hover:bg-gray-50 transition-colors">
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm font-medium text-gray-900">${item.title}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-600">${item.category}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex flex-wrap gap-1">
                            ${item.tags.map(tagId => {
                                const tag = mockTags.find(t => t.id === tagId);
                                return `<span class="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${tag.color}">${tag.name}</span>`;
                            }).join('')}
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        ${new Date(item.date).toLocaleDateString()}
                    </td>
                </tr>
            `).join('');
        }

        function hideResults() {
            if (hasSearched) {
                const resultsSection = document.getElementById('results-section');
                resultsSection.classList.add('hidden');
                
                const centeredSearch = document.getElementById('centered-search');
                centeredSearch.style.display = 'flex';
                centeredSearch.style.opacity = '1';
                centeredSearch.style.transform = 'translateY(0)';
                
                const navbar = document.getElementById('navbar');
                navbar.style.position = 'relative';
                
                hasSearched = false;
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
      
<div id="app">

<nav className="w-full bg-white border-b border-gray-200 px-6 py-4 animate-navbar" id="navbar" style={{animationDelay: '0.1s'}}>
<div className="max-w-7xl mx-auto flex items-center justify-between fade-in">
<div className="flex items-center space-x-8">
<h1 className="text-xl font-semibold tracking-tight">TagSearch</h1>
<div className="flex space-x-1">
<button className="px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-lg transition-colors hover:bg-gray-200" id="search-tab">
                            Search
                        </button>
<button className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg transition-colors hover:bg-gray-100" id="stats-tab">
                            Stats
                        </button>
</div>
</div>
</div>
</nav>

<main className="transition-all duration-700 ease-out" id="main-content">

<div className="flex items-center justify-center min-h-screen -mt-16" id="centered-search">
<div className="w-full max-w-2xl px-6 fade-in" style={{animationDelay: '0.3s'}}>
<div className="text-center mb-8">
<h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">Find what you're looking for</h2>
<p className="text-lg text-gray-600">Select tags to discover relevant content</p>
</div>

<div className="relative">
<div className="relative bg-white rounded-xl shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md" id="search-container">
<div className="flex items-center px-4 py-3">
<i className="w-5 h-5 text-gray-400 mr-3" data-lucide="search"></i>
<input className="flex-1 text-gray-900 placeholder-gray-500 bg-transparent border-none outline-none" id="search-input" placeholder="Click to select tags..." readonly="" type="text"/>
<i className="w-5 h-5 text-gray-400 transition-transform duration-200" data-lucide="chevron-down" id="dropdown-icon"></i>
</div>

<div className="hidden px-4 pb-3 flex flex-wrap gap-2" id="selected-tags"></div>
</div>

<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-200 tag-select z-10" id="tag-dropdown">
<div className="p-4 space-y-2" id="tag-options"></div>
</div>
</div>
</div>
</div>

<div className="hidden max-w-7xl mx-auto px-6 py-8" id="results-section">

<div className="hidden text-center py-12" id="loading-state">
<div className="flex justify-center items-center space-x-2 mb-4">
<div className="w-2 h-2 bg-blue-500 rounded-full loading-dot"></div>
<div className="w-2 h-2 bg-blue-500 rounded-full loading-dot"></div>
<div className="w-2 h-2 bg-blue-500 rounded-full loading-dot"></div>
</div>
<p className="text-gray-600">Loading results...</p>
</div>

<div className="hidden" id="results-table">
<div className="mb-6">
<h3 className="text-2xl font-semibold text-gray-900 mb-2 tracking-tight">Results</h3>
<p className="text-gray-600" id="results-count">Found 0 items</p>
</div>
<div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
<table className="w-full">
<thead className="bg-gray-50 border-b border-gray-200">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tags</th>
<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-200" id="table-body">
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
