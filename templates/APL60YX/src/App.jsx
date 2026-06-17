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



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Show dashboard by default
        showModule('dashboard');
      });

      // Module navigation
      function showModule(moduleName) {
        // Hide all modules
        document.querySelectorAll('.module-container').forEach(el => {
          el.classList.add('hidden');
        });
        
        // Show selected module with animation
        const moduleEl = document.getElementById(`module-${moduleName}`);
        if (moduleEl) {
          moduleEl.classList.remove('hidden');
          
          // Reset animation by removing and re-adding the class
          moduleEl.classList.remove('fade-in');
          setTimeout(() => moduleEl.classList.add('fade-in'), 10);
        }
        
        // Update navigation
        document.querySelectorAll('.nav-item').forEach(el => {
          el.classList.remove('border-emerald-500', 'text-emerald-400');
          el.classList.add('border-transparent');
        });
        
        const navItem = document.getElementById(`nav-${moduleName}`);
        if (navItem) {
          navItem.classList.remove('border-transparent');
          navItem.classList.add('border-emerald-500', 'text-emerald-400');
        }
      }

      // Bind navigation
      document.querySelectorAll('.nav-item').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const moduleName = el.id.replace('nav-', '');
          showModule(moduleName);
        });
      });

      // Show request detail modal
      function showRequestDetail(requestId) {
        const modal = document.getElementById('requestDetailModal');
        const content = document.getElementById('requestDetailContent');
        
        // Example content for the modal based on request ID
        content.innerHTML = `
          <div class="space-y-4">
            <div class="border-b border-white/10 pb-4">
              <div class="flex items-center justify-between">
                <h3 class="text-lg font-medium">${requestId}</h3>
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400">In Review</span>
              </div>
              <h2 class="text-xl font-semibold mt-1">${requestId.startsWith('PR') ? 'Procurement of Office Laptops' : 
                 requestId.startsWith('TR') ? 'Travel Request for Conference' : 
                 requestId.startsWith('IT') ? 'Software License Renewal' :
                 requestId.startsWith('HR') ? 'Staff Training Program' : 'Budget Request Q4'}</h2>
            </div>
            
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="text-xs text-slate-400">Initiator</p>
                <p class="text-sm">John Doe (IR12345)</p>
              </div>
              <div>
                <p class="text-xs text-slate-400">Submitted On</p>
                <p class="text-sm">Oct 12, 2023</p>
              </div>
              <div>
                <p class="text-xs text-slate-400">Department</p>
                <p class="text-sm">Support Services Group</p>
              </div>
              <div>
                <p class="text-xs text-slate-400">Current Step</p>
                <p class="text-sm">Director Approval</p>
              </div>
            </div>
            
            <div>
              <p class="text-xs text-slate-400 mb-1">Description</p>
              <p class="text-sm bg-black/30 border border-white/10 rounded-md p-3">
                This request is for the procurement of 5 laptops for the marketing team. The current laptops are over 4 years old and showing performance issues that affect productivity.
              </p>
            </div>
            
            <div>
              <p class="text-xs text-slate-400 mb-1">Workflow Progress</p>
              <div class="relative pt-1">
                <div class="overflow-hidden h-2 mb-2 text-xs flex rounded bg-white/5">
                  <div class="w-2/3 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"></div>
                </div>
                <div class="flex text-xs justify-between">
                  <span>Initiator</span>
                  <span class="text-emerald-400">Director</span>
                  <span>CD</span>
                  <span>EC</span>
                  <span>Complete</span>
                </div>
              </div>
            </div>
            
            <div class="rounded-lg border border-white/10 p-3 bg-black/20">
              <h4 class="text-sm font-medium mb-2">Activity Timeline</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-2">
                  <div class="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                    <i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>
                  </div>
                  <div>
                    <p class="text-sm">Submitted by John Doe</p>
                    <p class="text-xs text-slate-400">Oct 12, 2023 - 10:45 AM</p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <div class="h-5 w-5 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                    <i data-lucide="check" class="w-3 h-3 text-emerald-400"></i>
                  </div>
                  <div>
                    <p class="text-sm">Approved by Supervisor</p>
                    <p class="text-xs text-slate-400">Oct 13, 2023 - 09:30 AM</p>
                  </div>
                </div>
                <div class="flex items-start gap-2">
                  <div class="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center mt-0.5">
                    <i data-lucide="loader" class="w-3 h-3 text-blue-400"></i>
                  </div>
                  <div>
                    <p class="text-sm">Pending Director Approval</p>
                    <p class="text-xs text-slate-400">Current Step</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-2">
              <div></div>
              <div class="flex items-center gap-2">
                <button class="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">
                  <i data-lucide="download" class="w-4 h-4"></i>
                  Download
                </button>
                <button class="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
                  <i data-lucide="file-pen" class="w-4 h-4"></i>
                  Take Action
                </button>
              </div>
            </div>
          </div>
        `;
        
        // Show modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        // Initialize icons in modal content
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }, modal);
        }
      }

      // Close request detail modal
      document.getElementById('closeDetailModal')?.addEventListener('click', () => {
        document.getElementById('requestDetailModal').classList.add('hidden');
        document.getElementById('requestDetailModal').classList.remove('flex');
      });

      // New Request
      document.getElementById('btnNewRequest')?.addEventListener('click', () => {
        const modal = document.getElementById('newRequestModal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      });

      // Close new request modal
      document.getElementById('closeNewRequestModal')?.addEventListener('click', () => {
        document.getElementById('newRequestModal').classList.add('hidden');
        document.getElementById('newRequestModal').classList.remove('flex');
      });

      document.getElementById('cancelNewRequest')?.addEventListener('click', () => {
        document.getElementById('newRequestModal').classList.add('hidden');
        document.getElementById('newRequestModal').classList.remove('flex');
      });

      document.getElementById('createNewRequest')?.addEventListener('click', () => {
        const title = document.getElementById('newRequestTitle').value;
        if (!title) {
          alert('Please enter a title for the request');
          return;
        }
        
        // Hide modal
        document.getElementById('newRequestModal').classList.add('hidden');
        document.getElementById('newRequestModal').classList.remove('flex');
        
        // Show success message
        showToast('Request created successfully');
        
        // Redirect to the request module
        showModule('requests');
      });

      // Toggle switches
      function bindToggle(buttonId) {
        const el = document.getElementById(buttonId);
        if (!el) return;
        
        el.addEventListener('click', () => {
          const checked = el.getAttribute('aria-checked') === 'true';
          el.setAttribute('aria-checked', String(!checked));
          const span = el.querySelector('.dot');
          if (span) {
            if (checked) {
              span.style.left = '0.25rem';
              span.style.right = 'auto';
              el.querySelector('.relative').classList.remove('bg-emerald-500/30');
              el.querySelector('.relative').classList.add('bg-slate-700');
              span.classList.remove('bg-emerald-400');
              span.classList.add('bg-white');
            } else {
              span.style.right = '0.25rem';
              span.style.left = 'auto';
              el.querySelector('.relative').classList.add('bg-emerald-500/30');
              el.querySelector('.relative').classList.remove('bg-slate-700');
              span.classList.add('bg-emerald-400');
              span.classList.remove('bg-white');
            }
          }
        });
      }

      bindToggle('toggleMfa');
      bindToggle('toggleLogout');
      bindToggle('toggleTracking');
      bindToggle('toggleIp');

      // Charts (initialized when analytics tab is shown)
      document.getElementById('nav-analytics')?.addEventListener('click', initCharts);

      function initCharts() {
        setTimeout(() => {
          // Type Chart
          if (document.getElementById('typeChart')) {
            new Chart(document.getElementById('typeChart'), {
              type: 'doughnut',
              data: {
                labels: ['Procurement', 'Travel / PTA', 'IT / Technology', 'HR / Admin', 'Financial'],
                datasets: [{
                  data: [23, 15, 12, 9, 8],
                  backgroundColor: [
                    'rgba(16, 185, 129, 0.7)', // emerald
                    'rgba(59, 130, 246, 0.7)', // blue
                    'rgba(139, 92, 246, 0.7)', // purple
                    'rgba(245, 158, 11, 0.7)', // amber
                    'rgba(239, 68, 68, 0.7)'   // rose
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'right',
                    labels: {
                      color: 'rgb(148, 163, 184)',
                      font: {
                        size: 11
                      }
                    }
                  }
                }
              }
            });
          }

          // Time Chart
          if (document.getElementById('timeChart')) {
            new Chart(document.getElementById('timeChart'), {
              type: 'bar',
              data: {
                labels: ['Procurement', 'Travel / PTA', 'IT / Technology', 'HR / Admin', 'Financial'],
                datasets: [{
                  label: 'Average Days',
                  data: [3.8, 2.5, 4.2, 2.9, 5.1],
                  backgroundColor: [
                    'rgba(16, 185, 129, 0.7)', // emerald
                    'rgba(59, 130, 246, 0.7)', // blue
                    'rgba(139, 92, 246, 0.7)', // purple
                    'rgba(245, 158, 11, 0.7)', // amber
                    'rgba(239, 68, 68, 0.7)'   // rose
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                      color: 'rgb(148, 163, 184)',
                      font: {
                        size: 11
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: 'rgb(148, 163, 184)',
                      font: {
                        size: 11
                      }
                    }
                  }
                }
              }
            });
          }

          // Status Chart
          if (document.getElementById('statusChart')) {
            new Chart(document.getElementById('statusChart'), {
              type: 'bar',
              data: {
                labels: ['Draft', 'Submitted', 'In Review', 'Approved', 'Rejected', 'Returned'],
                datasets: [{
                  label: 'Count',
                  data: [5, 12, 7, 34, 2, 7],
                  backgroundColor: [
                    'rgba(148, 163, 184, 0.7)', // slate
                    'rgba(59, 130, 246, 0.7)',  // blue
                    'rgba(245, 158, 11, 0.7)',  // amber
                    'rgba(16, 185, 129, 0.7)',  // emerald
                    'rgba(239, 68, 68, 0.7)',   // rose
                    'rgba(245, 158, 11, 0.7)'   // amber
                  ],
                  borderWidth: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: 'rgba(255, 255, 255, 0.05)'
                    },
                    ticks: {
                      color: 'rgb(148, 163, 184)',
                      font: {
                        size: 11
                      }
                    }
                  },
                  x: {
                    grid: {
                      display: false
                    },
                    ticks: {
                      color: 'rgb(148, 163, 184)',
                      font: {
                        size: 11
                      }
                    }
                  }
                }
              }
            });
          }
        }, 100);
      }

      // Document filtering
      function filterDocumentsByType(type) {
        console.log(`Filtering documents by type: ${type}`);
        // In a real app, this would filter the document list
        showToast(`Filtered by: ${type}`);
      }

      // Template selection
      function selectTemplate(templateId) {
        console.log(`Selected template: ${templateId}`);
        showToast(`Template selected: ${templateId}`);
        // In a real app, this would show a confirmation or start a new request with this template
      }

      // View document
      function viewDocument(documentId) {
        console.log(`Viewing document: ${documentId}`);
        showRequestDetail(documentId);
      }

      // Toast notification
      function showToast(message, isError = false) {
        const toastEl = document.createElement('div');
        toastEl.className = 'fixed bottom-4 right-4 z-50 px-4 py-2 rounded-md text-sm font-medium transition-all transform translate-y-4 opacity-0';
        
        if (isError) {
          toastEl.classList.add('bg-rose-500/90', 'text-white');
        } else {
          toastEl.classList.add('bg-emerald-500/90', 'text-white');
        }
        
        toastEl.textContent = message;
        document.body.appendChild(toastEl);
        
        // Animate in
        setTimeout(() => {
          toastEl.classList.remove('translate-y-4', 'opacity-0');
        }, 10);
        
        // Animate out and remove
        setTimeout(() => {
          toastEl.classList.add('translate-y-4', 'opacity-0');
          setTimeout(() => {
            toastEl.remove();
          }, 300);
        }, 3000);
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
      

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30 flex items-center justify-center">
<span className="text-emerald-400 font-semibold" style={{letterSpacing: '-0.02em'}}>FC</span>
</div>
<div>
<h1 className="text-lg sm:text-xl font-semibold tracking-tight">FlowCore</h1>
<p className="text-xs text-slate-400">Document &amp; Workflow Platform</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" id="btnNotifications">
<svg className="lucide lucide-bell w-4 h-4 text-slate-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" id="btnHelp">
<svg className="lucide lucide-help-circle w-4 h-4 text-slate-300" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</button>
<div className="flex items-center gap-2 ml-2 pl-2 border-l border-white/10">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20 flex items-center justify-center">
<span className="text-xs text-emerald-400 font-medium">JD</span>
</div>
<div className="hidden md:block">
<p className="text-sm font-medium">J. Doe</p>
<p className="text-xs text-slate-400">Administrator</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="border-b border-white/10 bg-white/2">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex items-center space-x-1">
<a className="nav-item text-sm font-medium text-emerald-400 border-emerald-500 border-b-2 pt-4 pr-3 pb-4 pl-3" href="#" id="nav-dashboard">Dashboard</a>
<a className="nav-item px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-white/20 hover:text-white" href="#" id="nav-requests">Requests</a>
<a className="nav-item px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-white/20 hover:text-white" href="#" id="nav-documents">Documents</a>
<a className="nav-item px-3 py-4 text-sm font-medium border-b-2 border-transparent hover:border-white/20 hover:text-white" href="#" id="nav-templates">Templates</a>
<a className="nav-item hover:border-white/20 hover:text-white text-sm font-medium border-b-2 pt-4 pr-3 pb-4 pl-3 border-transparent" href="#" id="nav-workflow">Workflow</a>
<a className="nav-item hover:border-white/20 hover:text-white text-sm font-medium border-b-2 pt-4 pr-3 pb-4 pl-3 border-transparent" href="#" id="nav-analytics">Analytics</a>
<a className="nav-item hover:border-white/20 hover:text-white text-sm font-medium border-b-2 pt-4 pr-3 pb-4 pl-3 border-transparent" href="#" id="nav-settings">Settings</a>
</nav>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">


<section className="module-container" id="module-dashboard">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
<div className="flex items-center gap-2">
<div className="text-sm text-slate-400">Last refresh: <span className="text-slate-300">Today, 10:45 AM</span></div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" id="btnRefresh">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-slate-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-emerald-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">12</div>
<div className="text-sm text-slate-400">Pending Requests</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-check-circle w-5 h-5 text-blue-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">45</div>
<div className="text-sm text-slate-400">Approved Documents</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-amber-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<div className="text-2xl font-semibold">7</div>
<div className="text-sm text-slate-400">Awaiting Review</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-rose-500/10 flex items-center justify-center">
<svg className="lucide lucide-x-circle w-5 h-5 text-rose-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">3</div>
<div className="text-sm text-slate-400">Rejected/Returned</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
<a className="text-xs text-emerald-400 hover:text-emerald-300" href="#">View all</a>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 border border-white/10 transition cursor-pointer" onclick="showModule('requests')">
<div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center mt-1">
<svg className="lucide lucide-file-check w-4 h-4 text-emerald-400" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Procurement Request #PR-2023-089 approved</div>
<div className="text-xs text-slate-400 mt-1">Final approval by M. Johnson • 2 hours ago</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 border border-white/10 transition cursor-pointer" onclick="showModule('documents')">
<div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center mt-1">
<svg className="lucide lucide-file-plus w-4 h-4 text-blue-400" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Travel Request #TR-2023-042 submitted</div>
<div className="text-xs text-slate-400 mt-1">Submitted by A. Smith • 3 hours ago</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 border border-white/10 transition cursor-pointer" onclick="showModule('workflow')">
<div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center mt-1">
<svg className="lucide lucide-git-branch w-4 h-4 text-amber-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Workflow for IT Equipment updated</div>
<div className="text-xs text-slate-400 mt-1">Modified by T. Wilson • 5 hours ago</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/8 border border-white/10 transition cursor-pointer" onclick="showModule('documents')">
<div className="h-8 w-8 rounded-full bg-rose-500/10 flex items-center justify-center mt-1">
<svg className="lucide lucide-file-x w-4 h-4 text-rose-400" data-lucide="file-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m14.5 12.5-5 5"></path><path d="m9.5 12.5 5 5"></path></svg>
</div>
<div>
<div className="text-sm font-medium">HR Request #HR-2023-015 returned for revision</div>
<div className="text-xs text-slate-400 mt-1">Reviewed by L. Brown • Yesterday</div>
</div>
</div>
</div>
</div>
</div>
<div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h2 className="text-lg font-semibold tracking-tight mb-4">Quick Actions</h2>
<div className="space-y-3">
<button className="w-full flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition" onclick="showModule('requests')">
<svg className="lucide lucide-file-plus w-4 h-4" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
<span className="text-sm font-medium">New Document Request</span>
</button>
<button className="w-full flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition" onclick="showModule('documents')">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-sm font-medium">Search Documents</span>
</button>
<button className="w-full flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition" onclick="showModule('templates')">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm font-medium">Browse Templates</span>
</button>
<button className="w-full flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition" onclick="showModule('workflow')">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm font-medium">Configure Workflow</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-requests">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Document Requests</h1>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-emerald-950 font-medium transition" id="btnNewRequest">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            New Request
          </button>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div>
<label className="block text-xs text-slate-400 mb-1.5">Request Type</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option value="">All Types</option>
<option>Procurement</option>
<option>Travel / PTA</option>
<option>IT / Technology</option>
<option>HR / Admin</option>
<option>Financial</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Status</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option value="">All Statuses</option>
<option>Draft</option>
<option>Submitted</option>
<option>In Review</option>
<option>Approved</option>
<option>Rejected</option>
<option>Returned</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Date Range</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>Last 30 days</option>
<option>Last 90 days</option>
<option>This year</option>
<option>Custom range</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Search</label>
<div className="relative">
<input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Search by ID, title, etc." type="text"/>
<svg className="lucide lucide-search pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-white/10 bg-white/5">
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Request ID</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Title</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Type</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Status</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Submitted</th>
<th className="px-4 py-3 text-left text-xs font-medium text-slate-400">Current Step</th>
<th className="px-4 py-3 text-center text-xs font-medium text-slate-400">Actions</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-white/5 hover:bg-white/5 cursor-pointer" onclick="showRequestDetail('PR-2023-089')">
<td className="px-4 py-3 text-sm">PR-2023-089</td>
<td className="px-4 py-3 text-sm">Procurement of Office Laptops</td>
<td className="px-4 py-3 text-sm">Procurement</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400">Approved</span>
</td>
<td className="px-4 py-3 text-sm">Oct 15, 2023</td>
<td className="px-4 py-3 text-sm">Final Approval</td>
<td className="px-4 py-3 text-center">
<div className="flex items-center justify-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="View">
<svg className="lucide lucide-eye w-4 h-4 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 cursor-pointer" onclick="showRequestDetail('TR-2023-042')">
<td className="px-4 py-3 text-sm">TR-2023-042</td>
<td className="px-4 py-3 text-sm">Travel Request for Conference</td>
<td className="px-4 py-3 text-sm">Travel / PTA</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400">In Review</span>
</td>
<td className="px-4 py-3 text-sm">Oct 12, 2023</td>
<td className="px-4 py-3 text-sm">Director Approval</td>
<td className="px-4 py-3 text-center">
<div className="flex items-center justify-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="View">
<svg className="lucide lucide-eye w-4 h-4 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 cursor-pointer" onclick="showRequestDetail('IT-2023-056')">
<td className="px-4 py-3 text-sm">IT-2023-056</td>
<td className="px-4 py-3 text-sm">Software License Renewal</td>
<td className="px-4 py-3 text-sm">IT / Technology</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-500/10 text-amber-400">Pending</span>
</td>
<td className="px-4 py-3 text-sm">Oct 10, 2023</td>
<td className="px-4 py-3 text-sm">Coordinator Review</td>
<td className="px-4 py-3 text-center">
<div className="flex items-center justify-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="View">
<svg className="lucide lucide-eye w-4 h-4 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/5 cursor-pointer" onclick="showRequestDetail('HR-2023-015')">
<td className="px-4 py-3 text-sm">HR-2023-015</td>
<td className="px-4 py-3 text-sm">Staff Training Program</td>
<td className="px-4 py-3 text-sm">HR / Admin</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-500/10 text-rose-400">Returned</span>
</td>
<td className="px-4 py-3 text-sm">Oct 8, 2023</td>
<td className="px-4 py-3 text-sm">Initiator Revision</td>
<td className="px-4 py-3 text-center">
<div className="flex items-center justify-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="View">
<svg className="lucide lucide-eye w-4 h-4 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-white/5 cursor-pointer" onclick="showRequestDetail('FN-2023-037')">
<td className="px-4 py-3 text-sm">FN-2023-037</td>
<td className="px-4 py-3 text-sm">Budget Request Q4</td>
<td className="px-4 py-3 text-sm">Financial</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-500/10 text-slate-400">Draft</span>
</td>
<td className="px-4 py-3 text-sm">--</td>
<td className="px-4 py-3 text-sm">Not submitted</td>
<td className="px-4 py-3 text-center">
<div className="flex items-center justify-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="View">
<svg className="lucide lucide-eye w-4 h-4 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Edit">
<svg className="lucide lucide-edit w-4 h-4 text-slate-400" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="More">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-slate-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-4 py-3 flex items-center justify-between border-t border-white/10">
<div className="text-xs text-slate-400">
              Showing 5 of 67 requests
            </div>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-white/10 text-slate-400">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex items-center">
<button className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-medium">1</button>
<button className="px-2.5 py-1 rounded hover:bg-white/10 text-xs font-medium">2</button>
<button className="px-2.5 py-1 rounded hover:bg-white/10 text-xs font-medium">3</button>
<span className="px-1 text-xs text-slate-500">...</span>
<button className="px-2.5 py-1 rounded hover:bg-white/10 text-xs font-medium">14</button>
</div>
<button className="p-1 rounded hover:bg-white/10 text-slate-400">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-documents">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Document Library</h1>
<div className="flex items-center gap-2">
<div className="relative">
<input className="w-64 bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Search documents..." type="text"/>
<svg className="lucide lucide-search pointer-events-none absolute right-2.5 top-2.5 h-4 w-4 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
              Filters
            </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('all')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-slate-500/10 flex items-center justify-center">
<svg className="lucide lucide-files w-5 h-5 text-slate-400" data-lucide="files" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 21 8v7a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path><path d="M15 2v4a2 2 0 0 0 2 2h4"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
</div>
<div>
<div className="text-sm font-medium">All Documents</div>
<div className="text-xs text-slate-400">67 total</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('procurement')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-shopping-cart w-5 h-5 text-emerald-400" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Procurement</div>
<div className="text-xs text-slate-400">23 documents</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('travel')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-plane w-5 h-5 text-blue-400" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Travel / PTA</div>
<div className="text-xs text-slate-400">15 documents</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('it')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-purple-500/10 flex items-center justify-center">
<svg className="lucide lucide-cpu w-5 h-5 text-purple-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div>
<div className="text-sm font-medium">IT / Technology</div>
<div className="text-xs text-slate-400">12 documents</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('hr')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-users w-5 h-5 text-amber-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm font-medium">HR / Admin</div>
<div className="text-xs text-slate-400">9 documents</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 transition cursor-pointer" onclick="filterDocumentsByType('financial')">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-rose-500/10 flex items-center justify-center">
<svg className="lucide lucide-wallet w-5 h-5 text-rose-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<div className="text-sm font-medium">Financial</div>
<div className="text-xs text-slate-400">8 documents</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-emerald-500/30 transition cursor-pointer group" onclick="viewDocument('PR-2023-089')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-emerald-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-emerald-400 transition">Procurement of Office Laptops</div>
<div className="text-xs text-slate-400 mt-0.5">PR-2023-089</div>
<div className="text-xs text-emerald-400 mt-1">Approved</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Oct 15, 2023</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Share">
<svg className="lucide lucide-share w-4 h-4 text-slate-400" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/30 transition cursor-pointer group" onclick="viewDocument('TR-2023-042')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-blue-400 transition">Travel Request for Conference</div>
<div className="text-xs text-slate-400 mt-0.5">TR-2023-042</div>
<div className="text-xs text-blue-400 mt-1">In Review</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Oct 12, 2023</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Share">
<svg className="lucide lucide-share w-4 h-4 text-slate-400" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition cursor-pointer group" onclick="viewDocument('IT-2023-056')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-purple-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-purple-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-purple-400 transition">Software License Renewal</div>
<div className="text-xs text-slate-400 mt-0.5">IT-2023-056</div>
<div className="text-xs text-amber-400 mt-1">Pending</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Oct 10, 2023</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Share">
<svg className="lucide lucide-share w-4 h-4 text-slate-400" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-500/30 transition cursor-pointer group" onclick="viewDocument('HR-2023-015')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-amber-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-amber-400 transition">Staff Training Program</div>
<div className="text-xs text-slate-400 mt-0.5">HR-2023-015</div>
<div className="text-xs text-rose-400 mt-1">Returned</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Oct 8, 2023</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="Download">
<svg className="lucide lucide-download w-4 h-4 text-slate-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Share">
<svg className="lucide lucide-share w-4 h-4 text-slate-400" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
</button>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-rose-500/30 transition cursor-pointer group" onclick="viewDocument('FN-2023-037')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-rose-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-rose-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-rose-400 transition">Budget Request Q4</div>
<div className="text-xs text-slate-400 mt-0.5">FN-2023-037</div>
<div className="text-xs text-slate-400 mt-1">Draft</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">--</div>
<div className="flex items-center gap-2">
<button className="p-1 rounded hover:bg-white/10" title="Edit">
<svg className="lucide lucide-edit w-4 h-4 text-slate-400" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</button>
<button className="p-1 rounded hover:bg-white/10" title="Delete">
<svg className="lucide lucide-trash-2 w-4 h-4 text-slate-400" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-templates">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Document Templates</h1>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
            Create Template
          </button>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
<div className="flex flex-wrap items-center gap-2">
<button className="px-3 py-1.5 text-sm rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">All</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">Procurement</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">Travel / PTA</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">IT / Technology</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">HR / Admin</button>
<button className="px-3 py-1.5 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">Financial</button>
<div className="ml-auto">
<div className="relative">
<input className="w-48 bg-black/30 border border-white/10 rounded-md px-3 py-1.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Search templates..." type="text"/>
<svg className="lucide lucide-search pointer-events-none absolute right-2.5 top-1.5 h-4 w-4 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-emerald-500/30 transition cursor-pointer group" onclick="selectTemplate('TEMP-PR-001')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-emerald-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-emerald-400 transition">Standard Procurement Request</div>
<div className="text-xs text-slate-400 mt-0.5">TEMP-PR-001</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-slate-400">Updated 2 weeks ago</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Procurement</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Use Template
              </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/30 transition cursor-pointer group" onclick="selectTemplate('TEMP-TR-001')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-blue-400 transition">Travel Request Template</div>
<div className="text-xs text-slate-400 mt-0.5">TEMP-TR-001</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-slate-400">Updated 1 month ago</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Travel / PTA</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Use Template
              </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-purple-500/30 transition cursor-pointer group" onclick="selectTemplate('TEMP-IT-001')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-purple-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-purple-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-purple-400 transition">IT Equipment Request</div>
<div className="text-xs text-slate-400 mt-0.5">TEMP-IT-001</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-slate-400">Updated 3 weeks ago</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">IT / Technology</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Use Template
              </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-amber-500/30 transition cursor-pointer group" onclick="selectTemplate('TEMP-HR-001')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-amber-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-amber-400 transition">Training Program Request</div>
<div className="text-xs text-slate-400 mt-0.5">TEMP-HR-001</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-slate-400">Updated 2 months ago</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">HR / Admin</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Use Template
              </button>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:border-rose-500/30 transition cursor-pointer group" onclick="selectTemplate('TEMP-FN-001')">
<div className="p-4">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md bg-rose-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-text w-5 h-5 text-rose-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div>
<div className="text-sm font-medium group-hover:text-rose-400 transition">Budget Request Form</div>
<div className="text-xs text-slate-400 mt-0.5">TEMP-FN-001</div>
<div className="flex items-center gap-1 mt-1">
<svg className="lucide lucide-clock w-3 h-3 text-slate-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-slate-400">Updated 1 week ago</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 px-4 py-2 bg-black/20 flex items-center justify-between">
<div className="text-xs text-slate-400">Financial</div>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Use Template
              </button>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-workflow">
<div className="flex mb-6 items-center justify-between">
<h1 className="text-2xl font-semibold tracking-tight">Workflow Studio</h1>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-slate-300" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
              Reset
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
              Save Workflow
            </button>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<div className="xl:col-span-3 space-y-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<h2 className="text-lg font-semibold tracking-tight mb-3">Workflow Type</h2>
<div className="space-y-2">
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>Procurement</option>
<option>Travel / PTA</option>
<option>IT / Technology</option>
<option>HR / Admin</option>
<option>Financial</option>
<option>Custom</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Name</label>
<input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" type="text" value="Standard Procurement Workflow"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1.5">Description</label>
<textarea className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" rows="2">Default approval workflow for procurement requests with role-based routing.</textarea>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<h2 className="text-lg font-semibold tracking-tight mb-3">Workflow Steps</h2>
<div className="space-y-2">
<p className="text-xs text-slate-400 mb-2">Drag steps to the workflow canvas</p>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user w-4 h-4 text-emerald-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm">Initiator</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user-check w-4 h-4 text-blue-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm">Approval</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-git-branch w-4 h-4 text-purple-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="text-sm">Condition</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-amber-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm">Review</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4 text-rose-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="text-sm">Notification</span>
</div>
</div>
<div className="rounded-md border border-white/10 bg-black/20 p-2 cursor-grab">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flag w-4 h-4 text-slate-400" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
<span className="text-sm">Final</span>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<h2 className="text-lg font-semibold tracking-tight mb-3">Rules</h2>
<div className="space-y-2">
<div className="flex items-center gap-2">
<input checked="" className="hidden peer" id="rule1" type="checkbox"/>
<label className="h-4 w-4 rounded border border-white/15 bg-black/30 peer-checked:bg-emerald-500/80 peer-checked:border-emerald-400 transition inline-flex items-center justify-center" htmlFor="rule1">
<svg className="opacity-0 peer-checked:opacity-100 text-emerald-950" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</label>
<label className="text-sm cursor-pointer" htmlFor="rule1">Monetary routing (≥50,000)</label>
</div>
<div className="flex items-center gap-2">
<input checked="" className="hidden peer" id="rule2" type="checkbox"/>
<label className="h-4 w-4 rounded border border-white/15 bg-black/30 peer-checked:bg-emerald-500/80 peer-checked:border-emerald-400 transition inline-flex items-center justify-center" htmlFor="rule2">
<svg className="opacity-0 peer-checked:opacity-100 text-emerald-950" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</label>
<label className="text-sm cursor-pointer" htmlFor="rule2">Role-based routing</label>
</div>
<div className="flex items-center gap-2">
<input checked="" className="hidden peer" id="rule3" type="checkbox"/>
<label className="h-4 w-4 rounded border border-white/15 bg-black/30 peer-checked:bg-emerald-500/80 peer-checked:border-emerald-400 transition inline-flex items-center justify-center" htmlFor="rule3">
<svg className="opacity-0 peer-checked:opacity-100 text-emerald-950" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</label>
<label className="text-sm cursor-pointer" htmlFor="rule3">Allow delegation</label>
</div>
<div className="flex items-center gap-2">
<input className="hidden peer" id="rule4" type="checkbox"/>
<label className="h-4 w-4 rounded border border-white/15 bg-black/30 peer-checked:bg-emerald-500/80 peer-checked:border-emerald-400 transition inline-flex items-center justify-center" htmlFor="rule4">
<svg className="opacity-0 peer-checked:opacity-100 text-emerald-950" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</label>
<label className="text-sm cursor-pointer" htmlFor="rule4">Enforce MFA at submission</label>
</div>
</div>
</div>
</div>

<div className="xl:col-span-9 space-y-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-5 min-h-[400px]">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Workflow Canvas</h2>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-zoom-in w-3 h-3" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
                    Zoom
                  </button>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-undo w-3 h-3" data-lucide="undo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>
                    Undo
                  </button>
</div>
</div>

<div className="overflow-x-auto">
<div className="min-w-[840px] flex items-center gap-2 py-12">

<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-emerald-500/50 bg-emerald-500/5 rounded-lg px-4 py-3 border border-emerald-500/30">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user w-4 h-4 text-emerald-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Initiator</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Role-based start</div>
</div>
<div className="connector h-px w-20 bg-emerald-500/40"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-emerald-500/50 bg-emerald-500/5 rounded-lg px-4 py-3 border border-emerald-500/30">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user-check w-4 h-4 text-emerald-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Director</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">If AD/DD initiates</div>
</div>
<div className="connector h-px w-20 bg-emerald-500/40"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-emerald-500/50 bg-emerald-500/5 rounded-lg px-4 py-3 border border-emerald-500/30">
<div className="flex items-center gap-2">
<svg className="lucide lucide-user-check w-4 h-4 text-emerald-400" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium">Coordinating Director</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Interim/final</div>
</div>
<div className="connector h-px w-20 bg-emerald-500/40"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-white/10 bg-slate-900/80 rounded-lg px-4 py-3 border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-git-branch w-4 h-4 text-purple-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="text-sm font-medium">Condition</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Amount ≥ 50,000</div>
</div>
<div className="connector h-px w-20 bg-white/10"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-white/10 bg-slate-900/80 rounded-lg px-4 py-3 border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-crown w-4 h-4 text-amber-400" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-sm font-medium">Executive Chairman</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Final approver</div>
</div>
<div className="connector h-px w-20 bg-white/10"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-white/10 bg-slate-900/80 rounded-lg px-4 py-3 border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-blue-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm font-medium">Finance Review</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Financial validation</div>
</div>
<div className="connector h-px w-20 bg-white/10"></div>
</div>
<div className="flow-node group flex flex-col items-center">
<div className="node ring-1 ring-white/10 bg-slate-900/80 rounded-lg px-4 py-3 border border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-flag w-4 h-4 text-emerald-400" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
<span className="text-sm font-medium">Complete</span>
</div>
<div className="text-[11px] text-slate-500 mt-1">Final state</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Workflow Preview</h2>
<button className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                  Simulate
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 p-4 bg-black/20">
<h3 className="text-sm font-semibold tracking-tight mb-2">Role-Based Paths</h3>
<ul className="text-xs text-slate-400 space-y-1.5">
<li>• <span className="text-emerald-400">AD/DD</span> → Director → CD → EC</li>
<li>• <span className="text-emerald-400">Director</span> → CD → EC</li>
<li>• <span className="text-emerald-400">CD</span> → EC</li>
<li>• <span className="text-emerald-400">SA/Tech</span> → COS → EC</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-black/20">
<h3 className="text-sm font-semibold tracking-tight mb-2">Monetary Routing</h3>
<ul className="text-xs text-slate-400 space-y-1.5">
<li>• Amount ≥ 50,000: Route to Finance</li>
<li>• Amount ≥ 100,000: Route to EC (required)</li>
<li>• Amount ≥ 500,000: Multiple approvals</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-analytics">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Analytics &amp; Reports</h1>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Last 30 Days
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Export
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-file-plus w-5 h-5 text-emerald-400" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">67</div>
<div className="text-sm text-slate-400">Total Requests</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-blue-500/10 flex items-center justify-center">
<svg className="lucide lucide-activity w-5 h-5 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">3.2d</div>
<div className="text-sm text-slate-400">Avg. Processing Time</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-purple-500/10 flex items-center justify-center">
<svg className="lucide lucide-check w-5 h-5 text-purple-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">78%</div>
<div className="text-sm text-slate-400">Approval Rate</div>
</div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5 text-amber-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-2xl font-semibold">+12%</div>
<div className="text-sm text-slate-400">Processing Efficiency</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h2 className="text-lg font-semibold tracking-tight mb-4">Requests by Type</h2>
<div className="h-64">
<canvas height="256" id="typeChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '554px'}} width="554"></canvas>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h2 className="text-lg font-semibold tracking-tight mb-4">Processing Time by Type</h2>
<div className="h-64">
<canvas height="256" id="timeChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '554px'}} width="554"></canvas>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold tracking-tight">Status Distribution</h2>
<button className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-filter w-3 h-3" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                Filter
              </button>
</div>
<div className="h-64">
<canvas height="256" id="statusChart" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '760px'}} width="760"></canvas>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<h2 className="text-lg font-semibold tracking-tight mb-4">Saved Reports</h2>
<div className="space-y-3">
<div className="rounded-lg border border-white/10 p-3 bg-black/20 hover:bg-black/30 transition cursor-pointer">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-bar-chart w-4 h-4 text-emerald-400" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<div className="text-sm font-medium">Monthly Performance</div>
</div>
<p className="text-xs text-slate-400 mt-1">Last run: 2 days ago</p>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-black/20 hover:bg-black/30 transition cursor-pointer">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-bar-chart w-4 h-4 text-blue-400" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<div className="text-sm font-medium">Department Summary</div>
</div>
<p className="text-xs text-slate-400 mt-1">Last run: 1 week ago</p>
</div>
<div className="rounded-lg border border-white/10 p-3 bg-black/20 hover:bg-black/30 transition cursor-pointer">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-bar-chart w-4 h-4 text-purple-400" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
<div className="text-sm font-medium">Quarterly Review</div>
</div>
<p className="text-xs text-slate-400 mt-1">Last run: 1 month ago</p>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center gap-1 text-xs px-2 py-2 rounded bg-white/5 hover:bg-white/10 border border-white/10 transition">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Create New Report
              </button>
</div>
</div>
</div>
</section>

<section className="module-container hidden" id="module-settings">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 transition">
<svg className="lucide lucide-save w-4 h-4" data-lucide="save" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg>
            Save Changes
          </button>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<div className="border-b border-white/10">
<div className="flex overflow-x-auto">
<button className="px-4 py-3 text-sm font-medium border-b-2 border-emerald-500 text-emerald-400">General</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">User Management</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">Permissions</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">Workflows</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">Templates</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">Notifications</button>
<button className="px-4 py-3 text-sm font-medium border-b-2 border-transparent hover:text-white">Integrations</button>
</div>
</div>
<div className="p-5 space-y-6">

<div className="">
<h2 className="text-lg font-semibold tracking-tight mb-4">General Settings</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-4">
<div className="">
<label className="block text-sm text-slate-400 mb-1.5">Organization Name</label>
<input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" type="text" value="Federal Inland Revenue Service"/>
</div>
<div className="">
<label className="block text-sm text-slate-400 mb-1.5">Admin Email</label>
<input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" type="email" value="admin@example.org"/>
</div>
<div className="">
<label className="block text-sm text-slate-400 mb-1.5">Time Zone</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>Africa/Lagos (UTC+01:00)</option>
<option>UTC</option>
<option>America/New_York (UTC-05:00)</option>
<option>Europe/London (UTC+00:00)</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm text-slate-400 mb-1.5">Default Language</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>English</option>
<option>French</option>
<option>Spanish</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Date Format</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>DD/MM/YYYY</option>
<option>MM/DD/YYYY</option>
<option>YYYY-MM-DD</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Currency</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9">
<option>NGN (₦)</option>
<option>USD ($)</option>
<option>EUR (€)</option>
<option>GBP (£)</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-semibold tracking-tight mb-4">Security &amp; Compliance</h2>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10">
<div>
<div className="text-sm font-medium">Enforce MFA for all users</div>
<div className="text-xs text-slate-400 mt-0.5">Require multi-factor authentication for all accounts</div>
</div>
<button aria-checked="true" className="flex items-center justify-between px-2 py-1 rounded-full bg-black/30 border border-white/10 hover:border-emerald-500/40 transition" id="toggleMfa" role="switch" type="button">
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-emerald-500/30">
<span className="dot absolute right-1 h-4 w-4 rounded-full bg-emerald-400 transition-all"></span>
</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10">
<div>
<div className="text-sm font-medium">Auto-logout after inactivity</div>
<div className="text-xs text-slate-400 mt-0.5">Log users out after 30 minutes of inactivity</div>
</div>
<button aria-checked="true" className="flex items-center justify-between px-2 py-1 rounded-full bg-black/30 border border-white/10 hover:border-emerald-500/40 transition" id="toggleLogout" role="switch" type="button">
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-emerald-500/30">
<span className="dot absolute right-1 h-4 w-4 rounded-full bg-emerald-400 transition-all"></span>
</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10">
<div>
<div className="text-sm font-medium">Document change tracking</div>
<div className="text-xs text-slate-400 mt-0.5">Track all changes to documents for audit purposes</div>
</div>
<button aria-checked="true" className="flex items-center justify-between px-2 py-1 rounded-full bg-black/30 border border-white/10 hover:border-emerald-500/40 transition" id="toggleTracking" role="switch" type="button">
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-emerald-500/30">
<span className="dot absolute right-1 h-4 w-4 rounded-full bg-emerald-400 transition-all"></span>
</span>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/10">
<div>
<div className="text-sm font-medium">IP address restrictions</div>
<div className="text-xs text-slate-400 mt-0.5">Limit access to specific IP ranges</div>
</div>
<button aria-checked="false" className="flex items-center justify-between px-2 py-1 rounded-full bg-black/30 border border-white/10 hover:border-emerald-500/40 transition" id="toggleIp" role="switch" type="button">
<span className="relative inline-flex h-6 w-10 items-center rounded-full bg-slate-700">
<span className="dot absolute left-1 h-4 w-4 rounded-full bg-white transition-all"></span>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-white/2 py-4 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between">
<div className="text-xs text-slate-500">
            FlowCore Document Management &amp; Workflow Platform
          </div>
<div className="flex items-center gap-4 mt-3 md:mt-0">
<a className="text-xs text-slate-400 hover:text-white" href="#">Help</a>
<a className="text-xs text-slate-400 hover:text-white" href="#">API</a>
<a className="text-xs text-slate-400 hover:text-white" href="#">Documentation</a>
<a className="text-xs text-slate-400 hover:text-white" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-black/60 z-50 items-center justify-center hidden backdrop-blur-sm" id="requestDetailModal">
<div className="bg-[#0b0d12] border border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto p-6 mx-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight">Request Details</h2>
<button className="p-1 rounded-full hover:bg-white/10" id="closeDetailModal">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div id="requestDetailContent">

</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 z-50 items-center justify-center hidden backdrop-blur-sm" id="newRequestModal">
<div className="bg-[#0b0d12] border border-white/10 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto p-6 mx-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl font-semibold tracking-tight">New Document Request</h2>
<button className="p-1 rounded-full hover:bg-white/10" id="closeNewRequestModal">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm text-slate-400 mb-1.5">Request Type</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9" id="newRequestType">
<option>Procurement</option>
<option>Travel / PTA</option>
<option>IT / Technology</option>
<option>HR / Admin</option>
<option>Financial</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Title</label>
<input className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" id="newRequestTitle" placeholder="Enter a descriptive title" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Description</label>
<textarea className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" id="newRequestDesc" placeholder="Provide a detailed description" rows="3"></textarea>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Priority</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9" id="newRequestPriority">
<option>Normal</option>
<option>High</option>
<option>Urgent</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm text-slate-400 mb-1.5">Use Template</label>
<div className="relative">
<select className="w-full appearance-none bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 pr-9" id="newRequestTemplate">
<option value="">None (start from scratch)</option>
<option>Standard Procurement Request</option>
<option>Travel Request Template</option>
<option>IT Equipment Request</option>
<option>Training Program Request</option>
<option>Budget Request Form</option>
</select>
<svg className="lucide lucide-chevron-down pointer-events-none absolute right-2.5 top-2.5 h-5 w-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="pt-4 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition" id="cancelNewRequest">
              Cancel
            </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-emerald-950 font-medium transition" id="createNewRequest">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Create Request
            </button>
</div>
</div>
</div>
</div>



    </>
  );
}
