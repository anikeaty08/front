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



        // Database simulation using localStorage
        const DB = {
            get: () => JSON.parse(localStorage.getItem('mindflow_ideas') || '[]'),
            set: (ideas) => localStorage.setItem('mindflow_ideas', JSON.stringify(ideas)),
            clear: () => localStorage.removeItem('mindflow_ideas')
        };

        let currentFilter = 'all';

        // DOM Elements
        const ideaInput = document.getElementById('ideaInput');
        const categorySelect = document.getElementById('categorySelect');
        const saveBtn = document.getElementById('saveBtn');
        const ideasList = document.getElementById('ideasList');
        const emptyState = document.getElementById('emptyState');
        const purgeBtn = document.getElementById('purgeBtn');
        const purgeModal = document.getElementById('purgeModal');
        const cancelPurge = document.getElementById('cancelPurge');
        const confirmPurge = document.getElementById('confirmPurge');
        const filterBtn = document.getElementById('filterBtn');
        const filterPills = document.getElementById('filterPills');

        // Save idea
        saveBtn.addEventListener('click', () => {
            const text = ideaInput.value.trim();
            if (!text) return;

            const ideas = DB.get();
            const newIdea = {
                id: Date.now(),
                text,
                category: categorySelect.value,
                favorite: false,
                createdAt: new Date().toISOString()
            };
            ideas.unshift(newIdea);
            DB.set(ideas);
            ideaInput.value = '';
            renderIdeas();
            updateStats();
        });

        // Render ideas
        function renderIdeas() {
            let ideas = DB.get();
            
            if (currentFilter === 'favorites') {
                ideas = ideas.filter(i => i.favorite);
            } else if (currentFilter !== 'all') {
                ideas = ideas.filter(i => i.category === currentFilter);
            }

            if (ideas.length === 0) {
                ideasList.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            ideasList.innerHTML = ideas.map(idea => `
                <div class="group bg-white rounded-xl border border-neutral-200 p-4 hover:border-neutral-300 transition-all hover:shadow-sm" data-id="${idea.id}">
                    <div class="flex items-start gap-3">
                        <button class="favorite-btn mt-0.5 text-neutral-300 hover:text-amber-500 transition-colors ${idea.favorite ? 'text-amber-500' : ''}">
                            <span class="iconify" data-icon="${idea.favorite ? 'lucide:star' : 'lucide:star'}" data-width="18" style="stroke-width: 1.5; ${idea.favorite ? 'fill: currentColor;' : ''}"></span>
                        </button>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm text-neutral-900 leading-relaxed">${escapeHtml(idea.text)}</p>
                            <div class="flex items-center gap-2 mt-2">
                                <span class="text-xs text-neutral-400">${formatDate(idea.createdAt)}</span>
                                <span class="w-1 h-1 rounded-full bg-neutral-300"></span>
                                <span class="text-xs text-neutral-400 capitalize">${idea.category}</span>
                            </div>
                        </div>
                        <button class="delete-btn opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all">
                            <span class="iconify" data-icon="lucide:x" data-width="16" style="stroke-width: 1.5;"></span>
                        </button>
                    </div>
                </div>
            `).join('');

            // Attach event listeners
            document.querySelectorAll('.favorite-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.closest('[data-id]').dataset.id);
                    toggleFavorite(id);
                });
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = parseInt(e.target.closest('[data-id]').dataset.id);
                    deleteIdea(id);
                });
            });
        }

        function toggleFavorite(id) {
            const ideas = DB.get();
            const idea = ideas.find(i => i.id === id);
            if (idea) {
                idea.favorite = !idea.favorite;
                DB.set(ideas);
                renderIdeas();
                updateStats();
            }
        }

        function deleteIdea(id) {
            const ideas = DB.get().filter(i => i.id !== id);
            DB.set(ideas);
            renderIdeas();
            updateStats();
        }

        function updateStats() {
            const ideas = DB.get();
            const today = new Date().toDateString();
            
            document.getElementById('totalCount').textContent = ideas.length;
            document.getElementById('favCount').textContent = ideas.filter(i => i.favorite).length;
            document.getElementById('todayCount').textContent = ideas.filter(i => new Date(i.createdAt).toDateString() === today).length;
        }

        function formatDate(dateStr) {
            const date = new Date(dateStr);
            const now = new Date();
            const diff = now - date;
            
            if (diff < 60000) return 'Just now';
            if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
            if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
            return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        }

        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Filter functionality
        filterBtn.addEventListener('click', () => {
            filterPills.classList.toggle('hidden');
            filterPills.classList.toggle('flex');
        });

        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-pill').forEach(p => {
                    p.classList.remove('bg-neutral-900', 'text-white');
                    p.classList.add('bg-neutral-100', 'text-neutral-600');
                });
                e.target.classList.remove('bg-neutral-100', 'text-neutral-600');
                e.target.classList.add('bg-neutral-900', 'text-white');
                currentFilter = e.target.dataset.filter;
                renderIdeas();
            });
        });

        // Purge functionality
        purgeBtn.addEventListener('click', () => purgeModal.classList.remove('hidden'));
        cancelPurge.addEventListener('click', () => purgeModal.classList.add('hidden'));
        confirmPurge.addEventListener('click', () => {
            DB.clear();
            purgeModal.classList.add('hidden');
            renderIdeas();
            updateStats();
        });

        // Keyboard shortcut
        ideaInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                saveBtn.click();
            }
        });

        // Initial render
        renderIdeas();
        updateStats();
    
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
      

<header className="border-b border-neutral-200 bg-white/80 backdrop-blur-xl sticky top-0 z-50">
<div className="sm:px-6 flex max-w-3xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">M</span>
</div>
<span className="text-base font-medium text-neutral-900 tracking-tight">Mindflow</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-neutral-100 transition-colors text-neutral-500 hover:text-neutral-900" id="filterBtn">
<svg aria-hidden="true" data-icon="lucide:filter" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 rounded-lg hover:bg-red-50 transition-colors text-neutral-500 hover:text-red-600" id="purgeBtn">
<svg aria-hidden="true" data-icon="lucide:trash-2" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<section className="overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-50 relative">
<div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
<div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg shadow-neutral-200/50">
<img alt="Misty mountains at sunrise" className="w-full h-48 sm:h-64 object-cover" decoding="async" loading="lazy" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
<p className="text-white/80 text-xs font-medium uppercase tracking-wider mb-1">Welcome to</p>
<h1 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">Your Idea Journal</h1>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
<p className="text-2xl font-semibold text-neutral-900 tracking-tight" id="totalCount">2</p>
<p className="text-xs text-neutral-500 mt-1">Total Ideas</p>
</div>
<div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
<p className="text-2xl font-semibold text-neutral-900 tracking-tight" id="favCount">0</p>
<p className="text-xs text-neutral-500 mt-1">Favorites</p>
</div>
<div className="bg-white rounded-xl p-4 border border-neutral-200 text-center">
<p className="text-2xl font-semibold text-neutral-900 tracking-tight" id="todayCount">2</p>
<p className="text-xs text-neutral-500 mt-1">Today</p>
</div>
</div>
</div>
</section>

<main className="max-w-3xl mx-auto px-4 sm:px-6 py-8">

<div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 mb-8 shadow-sm">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:lightbulb" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1">
<textarea className="w-full resize-none border-0 focus:ring-0 text-base text-neutral-900 placeholder:text-neutral-400 bg-transparent outline-none" id="ideaInput" placeholder="What's on your mind? Capture your idea..." rows="3"></textarea>
<div className="flex items-center justify-between mt-3 pt-3 border-t border-neutral-100">
<div className="flex items-center gap-2">
<select className="text-xs text-neutral-500 bg-neutral-100 rounded-lg px-3 py-1.5 border-0 focus:ring-2 focus:ring-violet-500 cursor-pointer" id="categorySelect">
<option value="general">General</option>
<option value="work">Work</option>
<option value="personal">Personal</option>
<option value="creative">Creative</option>
</select>
</div>
<button className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors" id="saveBtn">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Save Idea
                        </button>
</div>
</div>
</div>
</div>

<div className="hidden flex-wrap gap-2 mb-6" id="filterPills">
<button className="filter-pill active px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-900 text-white transition-colors" data-filter="all">All</button>
<button className="filter-pill px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="favorites">Favorites</button>
<button className="filter-pill px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="general">General</button>
<button className="filter-pill px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="work">Work</button>
<button className="filter-pill px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="personal">Personal</button>
<button className="filter-pill px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200 transition-colors" data-filter="creative">Creative</button>
</div>

<div className="space-y-3" id="ideasList">
<div className="group bg-white rounded-xl border border-neutral-200 p-4 hover:border-neutral-300 transition-all hover:shadow-sm" data-id="1768356828295">
<div className="flex items-start gap-3">
<button className="favorite-btn mt-0.5 text-neutral-300 hover:text-amber-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900 leading-relaxed">22222 hfjdkshfkjdsnfg</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs text-neutral-400">5m ago</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs text-neutral-400 capitalize">work</span>
</div>
</div>
<button className="delete-btn opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all">
<svg aria-hidden="true" data-icon="lucide:x" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="group bg-white rounded-xl border border-neutral-200 p-4 hover:border-neutral-300 transition-all hover:shadow-sm" data-id="1768356816439">
<div className="flex items-start gap-3">
<button className="favorite-btn mt-0.5 text-neutral-300 hover:text-amber-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-sm text-neutral-900 leading-relaxed">dsdsdd 1111</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs text-neutral-400">6m ago</span>
<span className="w-1 h-1 rounded-full bg-neutral-300"></span>
<span className="text-xs text-neutral-400 capitalize">personal</span>
</div>
</div>
<button className="delete-btn opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-red-500 transition-all">
<svg aria-hidden="true" data-icon="lucide:x" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="text-center py-16 hidden" id="emptyState">
<div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4">
<svg aria-hidden="true" data-icon="lucide:inbox" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11"></path></g></svg>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-1">No ideas yet</h3>
<p className="text-sm text-neutral-500">Start capturing your thoughts above</p>
</div>
</main>

<div className="hidden fixed inset-0 bg-neutral-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="purgeModal">
<div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
<div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
<svg aria-hidden="true" data-icon="lucide:alert-triangle" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 text-center tracking-tight mb-2">Delete all ideas?</h3>
<p className="text-sm text-neutral-500 text-center mb-6">This action cannot be undone. All your saved ideas will be permanently removed.</p>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" id="cancelPurge">Cancel</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors" id="confirmPurge">Delete All</button>
</div>
</div>
</div>


    </>
  );
}
