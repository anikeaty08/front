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



      // Data store
      let clients = [
        {
          id: 1,
          name: 'Sarah & David Chen',
          email: 'sarah.chen@email.com',
          phone: '+1 (555) 234-5678',
          budget: '$1.2M - $1.8M',
          neighborhoods: 'Upper West Side, Tribeca',
          notes: 'Looking for 2-3BR with outdoor space. Prefers modern aesthetics.',
          collections: 2,
          lastContact: '2 days ago'
        },
        {
          id: 2,
          name: 'Michael Roberts',
          email: 'michael.r@email.com',
          phone: '+1 (555) 876-5432',
          budget: '$2M - $3M',
          neighborhoods: 'Brooklyn Heights, Park Slope',
          notes: 'Family of 4, needs good schools nearby. Interested in townhomes.',
          collections: 1,
          lastContact: '5 days ago'
        },
        {
          id: 3,
          name: 'Jennifer Park',
          email: 'jpark@email.com',
          phone: '+1 (555) 345-6789',
          budget: '$3M - $5M',
          neighborhoods: 'Tribeca, SoHo, West Village',
          notes: 'Investment properties. Interested in luxury condos with amenities.',
          collections: 3,
          lastContact: '1 week ago'
        },
        {
          id: 4,
          name: 'Alex Thompson',
          email: 'alex.thompson@email.com',
          phone: '+1 (555) 987-1234',
          budget: '$600K - $900K',
          neighborhoods: 'Chelsea, Flatiron, Gramercy',
          notes: 'First-time buyer. Looking for studio or 1BR near work in Midtown.',
          collections: 1,
          lastContact: '3 days ago'
        }
      ];

      function renderClients(filteredClients = clients) {
        const clientsList = document.getElementById('clientsList');
        const emptyState = document.getElementById('clientsEmptyState');
        
        if (filteredClients.length === 0) {
          clientsList.innerHTML = '';
          emptyState.classList.remove('hidden');
          emptyState.classList.add('flex');
          return;
        }

        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');

        clientsList.innerHTML = filteredClients.map(client => `
          <div class="rounded-xl border border-slate-800 bg-slate-950/80 p-5 hover:border-slate-700/80 transition-colors">
            <div class="flex items-start justify-between mb-3">
              <div class="flex items-start gap-3 flex-1">
                <div class="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                  <span class="text-xs font-medium tracking-tight text-slate-100">${client.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="text-sm font-semibold tracking-tight text-slate-50">
                    ${client.name}
                  </div>
                  <div class="mt-0.5 text-xs text-slate-400">
                    ${client.email}
                  </div>
                  ${client.phone ? `<div class="mt-0.5 text-xs text-slate-500">${client.phone}</div>` : ''}
                </div>
              </div>
              <button class="h-8 w-8 rounded-full hover:bg-slate-800/80 flex items-center justify-center flex-shrink-0">
                <i data-lucide="more-horizontal" class="h-4 w-4 text-slate-400" style="stroke-width:1.5"></i>
              </button>
            </div>

            <div class="grid grid-cols-2 gap-3 mb-3">
              <div>
                <div class="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-0.5">Budget</div>
                <div class="text-xs text-slate-300">${client.budget}</div>
              </div>
              <div>
                <div class="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-0.5">Collections</div>
                <div class="text-xs text-slate-300">${client.collections} active</div>
              </div>
            </div>

            ${client.neighborhoods ? `
              <div class="mb-3">
                <div class="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">Neighborhoods</div>
                <div class="text-xs text-slate-300">${client.neighborhoods}</div>
              </div>
            ` : ''}

            ${client.notes ? `
              <div class="mb-4">
                <div class="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">Notes</div>
                <div class="text-xs text-slate-400 leading-relaxed">${client.notes}</div>
              </div>
            ` : ''}

            <div class="flex items-center justify-between pt-3 border-t border-slate-800/80">
              <div class="text-xs text-slate-500">
                Last contact: ${client.lastContact}
              </div>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100">
                  <i data-lucide="mail" class="h-3 w-3" style="stroke-width:1.5"></i>
                  Email
                </button>
                <button class="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-slate-100">
                  <i data-lucide="layers" class="h-3 w-3" style="stroke-width:1.5"></i>
                  Collections
                </button>
              </div>
            </div>
          </div>
        `).join('');

        lucide.createIcons();
      }

      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons();
        }

        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            
            // Update nav buttons
            document.querySelectorAll('.nav-btn').forEach(b => {
              b.classList.remove('bg-slate-900/90', 'border', 'border-slate-700/80', 'text-slate-50');
              b.classList.add('text-slate-300');
              const icon = b.querySelector('i');
              icon.classList.remove('text-slate-300');
              icon.classList.add('text-slate-400');
            });
            btn.classList.remove('text-slate-300');
            btn.classList.add('bg-slate-900/90', 'border', 'border-slate-700/80', 'text-slate-50');
            const icon = btn.querySelector('i');
            icon.classList.remove('text-slate-400');
            icon.classList.add('text-slate-300');

            // Show correct view
            document.getElementById('dashboardView').classList.add('hidden');
            document.getElementById('clientsView').classList.add('hidden');
            
            if (view === 'dashboard') {
              document.getElementById('dashboardView').classList.remove('hidden');
              document.getElementById('dashboardView').classList.add('flex');
            } else if (view === 'clients') {
              document.getElementById('clientsView').classList.remove('hidden');
              document.getElementById('clientsView').classList.add('flex');
              renderClients();
            }
          });
        });

        // Client search
        document.getElementById('clientSearch').addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase();
          const filtered = clients.filter(client => 
            client.name.toLowerCase().includes(query) ||
            client.email.toLowerCase().includes(query) ||
            (client.phone && client.phone.includes(query))
          );
          renderClients(filtered);
        });

        // Modal controls
        const modal = document.getElementById('addClientModal');
        const openButtons = [document.getElementById('newClientBtn'), document.getElementById('addClientBtn')];
        const closeButtons = [document.getElementById('closeModalBtn'), document.getElementById('cancelModalBtn')];

        openButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            modal.classList.remove('hidden');
            lucide.createIcons();
          });
        });

        closeButtons.forEach(btn => {
          btn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.getElementById('addClientForm').reset();
          });
        });

        // Close modal on backdrop click
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.add('hidden');
            document.getElementById('addClientForm').reset();
          }
        });

        // Save client
        document.getElementById('saveClientBtn').addEventListener('click', () => {
          const form = document.getElementById('addClientForm');
          if (!form.checkValidity()) {
            form.reportValidity();
            return;
          }

          const newClient = {
            id: clients.length + 1,
            name: document.getElementById('clientName').value,
            email: document.getElementById('clientEmail').value,
            phone: document.getElementById('clientPhone').value,
            budget: document.getElementById('clientBudget').value,
            neighborhoods: document.getElementById('clientNeighborhoods').value,
            notes: document.getElementById('clientNotes').value,
            collections: 0,
            lastContact: 'Just now'
          };

          clients.unshift(newClient);
          renderClients();
          modal.classList.add('hidden');
          form.reset();
        });
      });
    
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
      
<div className="w-full max-w-6xl mx-auto">

<div className="rounded-2xl border border-slate-800 bg-slate-950/90 shadow-2xl overflow-hidden backdrop-blur">

<div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2">
<div className="flex items-center gap-2">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
</div>
<div className="ml-3 flex items-center gap-2 text-xs tracking-tight text-slate-400">
<span className="h-4 w-4 rounded bg-slate-800/80 flex items-center justify-center">
<span className="text-[0.6rem] font-semibold tracking-tight">TA</span>
</span>
<span className="font-medium tracking-tight">The Architect Broker</span>
<span className="text-slate-600">•</span>
<span className="text-slate-500">Collections CRM</span>
</div>
</div>
</div>

<div className="flex h-[36rem] bg-slate-950">

<aside className="w-60 border-r border-slate-800 bg-slate-950/90 flex flex-col">

<div className="border-b border-slate-800 px-4 py-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-slate-100 text-slate-900 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">TA</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight uppercase text-slate-100">
                    The Architect Broker
                  </span>
<span className="text-xs text-slate-500 tracking-tight">Collections Workspace</span>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 py-4 text-xs">
<div className="mb-4">
<div className="mb-1 px-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                  Workspace
                </div>
<div className="space-y-0.5">
<button className="nav-btn flex w-full items-center gap-2 rounded-md bg-slate-900/90 border border-slate-700/80 px-2.5 py-1.5 text-xs text-slate-50" data-view="dashboard">
<i className="h-3.5 w-3.5 text-slate-300" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight font-medium">Dashboard</span>
</button>
<button className="nav-btn flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 hover:bg-slate-900/70" data-view="clients">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight">Clients</span>
</button>
<button className="nav-btn flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 hover:bg-slate-900/70" data-view="collections">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight">Collections</span>
</button>
<button className="nav-btn flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 hover:bg-slate-900/70" data-view="feedback">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="message-circle" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight">Client Feedback</span>
</button>
</div>
</div>
</nav>
<div className="border-t border-slate-800 px-3 py-3 text-[0.65rem]">
<div className="flex items-center justify-between">
<button className="flex items-center gap-2 rounded-md px-2 py-1.5 hover:bg-slate-900/70">
<div className="h-6 w-6 rounded-full bg-slate-800 flex items-center justify-center">
<span className="text-[0.6rem] font-medium tracking-tight text-slate-100">DW</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium tracking-tight text-slate-100">
                      David Wayne
                    </span>
<span className="text-[0.65rem] text-slate-500">Principal • NYC</span>
</div>
</button>
<button className="h-7 w-7 flex items-center justify-center rounded-full hover:bg-slate-900/80">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">

<div className="flex-1 flex flex-col" id="dashboardView">

<div className="border-b border-slate-800/80 px-8 py-4 flex items-center justify-between">
<div>
<div className="text-lg font-semibold tracking-tight text-slate-50">
                    Dashboard
                  </div>
<div className="mt-0.5 text-sm text-slate-400">
                    Overview of your active collections and client activity
                  </div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-500/80" id="newClientBtn">
<i className="h-3.5 w-3.5 text-slate-300" data-lucide="user-plus" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight">Add client</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-tight text-slate-950 hover:bg-white" id="newCollectionBtn">
<i className="h-3.5 w-3.5" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
                    New collection
                  </button>
</div>
</div>

<div className="px-8 py-6 border-b border-slate-800/80">
<div className="grid grid-cols-4 gap-4">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Active Collections
                    </div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                      12
                    </div>
<div className="mt-1 text-xs text-slate-400">
                      3 shared this week
                    </div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Total Clients
                    </div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                      28
                    </div>
<div className="mt-1 text-xs text-slate-400">
                      5 new this month
                    </div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Listings Curated
                    </div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                      147
                    </div>
<div className="mt-1 text-xs text-slate-400">
                      Across all collections
                    </div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-4">
<div className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-slate-500 mb-1">
                      Client Feedback
                    </div>
<div className="text-2xl font-semibold tracking-tight text-slate-50">
                      34
                    </div>
<div className="mt-1 text-xs text-slate-400">
                      8 pending responses
                    </div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-8 py-6">
<div className="mb-4 flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight text-slate-100">
                    Recent Collections
                  </h2>
<button className="text-xs text-slate-400 hover:text-slate-200">
                    View all →
                  </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 hover:border-slate-700/80 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-slate-50">
                          Upper West Side – Modern Loft Tour
                        </div>
<div className="mt-1 text-xs text-slate-400">
                          Sarah &amp; David Chen • 7 listings
                        </div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[0.65rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Active
                      </span>
</div>
<div className="flex gap-2 mb-3">
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-600"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100"></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-slate-400">
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
                          3 liked
                        </span>
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
                          2 comments
                        </span>
</div>
<button className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100">
<span>Open</span>
<i className="h-3 w-3" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 hover:border-slate-700/80 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-slate-50">
                          Brooklyn Heights – Family Townhomes
                        </div>
<div className="mt-1 text-xs text-slate-400">
                          Michael Roberts • 5 listings
                        </div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-700/40 border border-slate-600/40 px-2 py-0.5 text-[0.65rem] text-slate-300">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        Draft
                      </span>
</div>
<div className="flex gap-2 mb-3">
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-700 via-slate-600 to-slate-500"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-slate-400">
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                          Not shared yet
                        </span>
</div>
<button className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100">
<span>Open</span>
<i className="h-3 w-3" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 hover:border-slate-700/80 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-slate-50">
                          Tribeca Luxury – Investment Properties
                        </div>
<div className="mt-1 text-xs text-slate-400">
                          Jennifer Park • 12 listings
                        </div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[0.65rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Active
                      </span>
</div>
<div className="flex gap-2 mb-3">
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400"></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-slate-400">
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
                          8 liked
                        </span>
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
                          5 comments
                        </span>
</div>
<button className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100">
<span>Open</span>
<i className="h-3 w-3" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 hover:border-slate-700/80 transition-colors cursor-pointer">
<div className="flex items-start justify-between mb-3">
<div className="flex-1">
<div className="text-sm font-semibold tracking-tight text-slate-50">
                          Chelsea Studio &amp; 1BR Options
                        </div>
<div className="mt-1 text-xs text-slate-400">
                          Alex Thompson • 9 listings
                        </div>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/40 px-2 py-0.5 text-[0.65rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                        Active
                      </span>
</div>
<div className="flex gap-2 mb-3">
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-600 via-slate-500 to-slate-400"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"></div>
<div className="flex-1 h-16 rounded-lg bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600"></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-3 text-slate-400">
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
                          1 liked
                        </span>
<span className="flex items-center gap-1">
<i className="h-3 w-3" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
                          1 comment
                        </span>
</div>
<button className="inline-flex items-center gap-1 text-slate-300 hover:text-slate-100">
<span>Open</span>
<i className="h-3 w-3" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex-col hidden" id="clientsView">

<div className="border-b border-slate-800/80 px-8 py-4 flex items-center justify-between">
<div>
<div className="text-lg font-semibold tracking-tight text-slate-50">
                    Clients
                  </div>
<div className="mt-0.5 text-sm text-slate-400">
                    Manage your client relationships and property preferences
                  </div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200 hover:border-slate-500/80">
<i className="h-3.5 w-3.5 text-slate-300" data-lucide="filter" style={{strokeWidth: '1.5'}}></i>
<span className="tracking-tight">Filter</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-tight text-slate-950 hover:bg-white" id="addClientBtn">
<i className="h-3.5 w-3.5" data-lucide="user-plus" style={{strokeWidth: '1.5'}}></i>
                    Add client
                  </button>
</div>
</div>

<div className="px-8 py-4 border-b border-slate-800/80">
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-900/50 pl-10 pr-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientSearch" placeholder="Search clients by name, email, or phone..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-8 py-6">
<div className="space-y-3" id="clientsList">

</div>

<div className="hidden flex flex-col items-center justify-center py-16" id="clientsEmptyState">
<div className="h-16 w-16 rounded-full bg-slate-900/50 border border-slate-800 flex items-center justify-center mb-4">
<i className="h-8 w-8 text-slate-600" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="text-sm font-semibold tracking-tight text-slate-300 mb-1">No clients yet</div>
<div className="text-xs text-slate-500 mb-4">Get started by adding your first client</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-tight text-slate-950 hover:bg-white">
<i className="h-3.5 w-3.5" data-lucide="user-plus" style={{strokeWidth: '1.5'}}></i>
                    Add client
                  </button>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50" id="addClientModal">
<div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl w-full max-w-lg mx-4">
<div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
<div>
<div className="text-base font-semibold tracking-tight text-slate-50">Add New Client</div>
<div className="text-xs text-slate-400 mt-0.5">Create a new client profile</div>
</div>
<button className="h-8 w-8 rounded-full hover:bg-slate-800/80 flex items-center justify-center" id="closeModalBtn">
<i className="h-4 w-4 text-slate-400" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<form className="px-6 py-6 space-y-4" id="addClientForm">
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Full Name *</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientName" placeholder="e.g., Sarah Johnson" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Email *</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientEmail" placeholder="sarah.johnson@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Phone</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientPhone" placeholder="+1 (555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Budget Range</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientBudget" placeholder="e.g., $800K - $1.2M" type="text"/>
</div>
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Preferred Neighborhoods</label>
<input className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500" id="clientNeighborhoods" placeholder="e.g., Upper West Side, Chelsea" type="text"/>
</div>
<div>
<label className="block text-xs font-medium tracking-tight text-slate-300 mb-1.5">Notes</label>
<textarea className="w-full rounded-lg border border-slate-700/80 bg-slate-950/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 resize-none" id="clientNotes" placeholder="Any additional information about the client..." rows="3"></textarea>
</div>
</form>
<div className="border-t border-slate-800 px-6 py-4 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-1.5 text-xs text-slate-200 hover:border-slate-500/80" id="cancelModalBtn">
            Cancel
          </button>
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-1.5 text-xs font-medium tracking-tight text-slate-950 hover:bg-white" id="saveClientBtn">
<i className="h-3.5 w-3.5" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
            Add Client
          </button>
</div>
</div>
</div>


    </>
  );
}
