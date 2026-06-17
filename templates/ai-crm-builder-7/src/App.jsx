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



        // --- Sidebar Navigation Logic ---
        document.querySelectorAll('#sidebar-nav .nav-item').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault(); // Prevent default anchor behavior
                
                // Reset all items
                document.querySelectorAll('#sidebar-nav .nav-item').forEach(nav => {
                    nav.classList.remove('bg-white', 'shadow-sm', 'border', 'border-zinc-200', 'text-zinc-900', 'active');
                    nav.classList.add('text-zinc-600', 'hover:bg-zinc-100');
                    const icon = nav.querySelector('iconify-icon');
                    if(icon) {
                        icon.classList.remove('text-indigo-600');
                        icon.classList.add('text-zinc-400');
                    }
                    const indicator = nav.querySelector('.indicator');
                    if(indicator) indicator.remove();
                });
                
                // Set active state
                this.classList.remove('hover:bg-zinc-100', 'text-zinc-600');
                this.classList.add('bg-white', 'shadow-sm', 'border', 'border-zinc-200', 'text-zinc-900', 'active');
                
                const icon = this.querySelector('iconify-icon');
                if(icon) {
                    icon.classList.remove('text-zinc-400');
                    icon.classList.add('text-indigo-600');
                }

                // Add indicator dot
                const dot = document.createElement('div');
                dot.className = 'indicator w-1.5 h-1.5 bg-indigo-500 rounded-full absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2';
                this.prepend(dot);

                showToast(`Navigated to ${this.innerText.trim()}`);
            });
        });

        // --- Builder Tabs Logic ---
        document.querySelectorAll('#builder-tabs .builder-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                // Reset
                document.querySelectorAll('#builder-tabs .builder-tab').forEach(t => {
                    t.classList.remove('border-indigo-600', 'text-indigo-900');
                    t.classList.add('border-transparent', 'text-zinc-500');
                    const icon = t.querySelector('iconify-icon');
                    if(icon) icon.classList.remove('text-indigo-600');
                });

                // Active
                this.classList.remove('border-transparent', 'text-zinc-500');
                this.classList.add('border-indigo-600', 'text-indigo-900');
                showToast(`Switched to ${this.innerText.trim()}`);
            });
        });

        // --- Pipeline Stage Logic ---
        function setPipelineStage(index) {
            const stages = document.querySelectorAll('#pipeline-stages .stage-item');
            
            stages.forEach((stage, i) => {
                // Reset classes
                stage.className = "stage-item flex-1 h-2.5 rounded-full relative group cursor-pointer shadow-sm transition-all duration-300";
                
                // Clear any existing text inside
                const label = stage.querySelector('div');
                if(label) label.className = "absolute -bottom-6 left-0 text-[10px] font-bold text-zinc-600 whitespace-nowrap transition-colors";

                if (i < index) {
                    // Completed stages
                    stage.classList.add('bg-indigo-600');
                    if(label) label.classList.replace('text-zinc-600', 'text-indigo-700');
                } else if (i === index) {
                    // Current Stage
                    stage.classList.add('bg-indigo-600'); 
                    // Add active ring
                    stage.classList.add('ring-2', 'ring-offset-2', 'ring-indigo-100');
                    if(label) label.classList.replace('text-zinc-600', 'text-indigo-700');
                } else {
                    // Future stages
                    stage.classList.add('bg-zinc-200', 'hover:bg-zinc-300');
                }
            });
            showToast(`Stage updated`);
        }

        // --- Toggle Switch Logic ---
        document.querySelectorAll('.toggle-checkbox').forEach(box => {
            box.addEventListener('change', function() {
                const label = this.nextElementSibling;
                if(this.checked) {
                    label.classList.remove('bg-zinc-200');
                    label.classList.add('bg-indigo-600');
                } else {
                    label.classList.remove('bg-indigo-600');
                    label.classList.add('bg-zinc-200');
                }
            });
        });

        // --- Field Selection Simulation ---
        function selectField(element) {
            // Remove ring from all fields
            document.querySelectorAll('.grid div').forEach(el => {
                el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50/10');
            });
            
            // Add ring to clicked
            element.classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50/10');
            showToast("Field selected: Properties loaded");
        }

        // --- Chat Popup ---
        function toggleChat() {
            const popup = document.getElementById('ai-chat-popup');
            popup.classList.toggle('hidden');
            if(!popup.classList.contains('hidden')) {
                popup.classList.add('ai-chat-open');
                setTimeout(() => popup.querySelector('input').focus(), 100);
            }
        }

        // --- Toast Notification System ---
        function showToast(message, type = 'normal') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            let bgClass = 'bg-zinc-900';
            let icon = 'info';
            
            if (type === 'success') {
                bgClass = 'bg-green-600';
                icon = 'check-circle';
            } else if (type === 'error') {
                bgClass = 'bg-red-600';
                icon = 'alert-circle';
            }

            toast.className = `toast flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white text-xs font-medium ${bgClass} min-w-[200px]`;
            toast.innerHTML = `
                <iconify-icon icon="lucide:${icon}" width="16"></iconify-icon>
                <span>${message}</span>
            `;

            container.appendChild(toast);

            // Remove after 3 seconds
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(-10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // --- Initialize Toggles Correctly on Load ---
        window.addEventListener('load', () => {
            document.querySelectorAll('.toggle-checkbox').forEach(box => {
                const label = box.nextElementSibling;
                if(box.checked) {
                    label.classList.add('bg-indigo-600');
                    label.classList.remove('bg-zinc-200');
                }
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
      

<div className="fixed top-5 right-5 z-[60] flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<aside className="w-64 border-r border-zinc-200 flex flex-col bg-zinc-50/50 flex-shrink-0">

<div className="h-14 border-b border-zinc-200 flex items-center px-4 justify-between cursor-pointer hover:bg-zinc-100 transition-colors" onclick="showToast('Switching organization...')">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white text-xs font-semibold tracking-tighter shadow-sm">
                    AC
                </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight leading-none">Acme Corp</span>
<span className="text-[10px] text-zinc-500 font-medium mt-0.5">Enterprise Plan</span>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="lucide:chevrons-up-down" width="14"></iconify-icon>
</div>

<nav className="flex-1 overflow-y-auto py-4 px-2 space-y-0.5" id="sidebar-nav">

<div className="px-2 mb-2 flex items-center justify-between">
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Apps &amp; Modules</span>
<button className="text-zinc-400 hover:text-zinc-900 cursor-pointer p-1" onclick="showToast('Create new app modal')">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</button>
</div>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:layout-grid" width="16"></iconify-icon>
                Dashboard
            </a>

<div className="nav-group mt-4 mb-2">
<a className="nav-item active flex items-center gap-3 px-3 py-1.5 text-sm font-medium bg-white text-zinc-900 shadow-sm border border-zinc-200 rounded-md group relative" href="#">
<div className="indicator w-1.5 h-1.5 bg-indigo-500 rounded-full absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"></div>
<iconify-icon className="text-indigo-600 icon-active" icon="lucide:banknote" width="16"></iconify-icon>
                    Deals &amp; Pipeline
                    <span className="ml-auto text-[10px] bg-zinc-100 text-zinc-500 px-1.5 rounded border border-zinc-200">v2</span>
</a>
<div className="sub-nav pl-9 mt-1 space-y-0.5">
<a className="sub-nav-item block px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50/50 rounded-md" href="#">Layout Builder</a>
<a className="sub-nav-item block px-2 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md" href="#">Records (1,240)</a>
<a className="sub-nav-item block px-2 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md" href="#">Analytics</a>
</div>
</div>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:users" width="16"></iconify-icon>
                Contacts
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:ticket" width="16"></iconify-icon>
                Tickets
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:folder-kanban" width="16"></iconify-icon>
                Projects
            </a>
<div className="px-2 mt-6 mb-2">
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Platform</span>
</div>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:workflow" width="16"></iconify-icon>
                Automations
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:store" width="16"></iconify-icon>
                App Marketplace
            </a>
<a className="nav-item flex items-center gap-3 px-3 py-1.5 text-sm font-medium text-zinc-600 rounded-md hover:bg-zinc-100 hover:text-zinc-900 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:settings" width="16"></iconify-icon>
                Settings
            </a>
</nav>

<div className="p-3 border-t border-zinc-200">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-100 cursor-pointer transition-colors" onclick="showToast('Profile settings')">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 overflow-hidden border border-white shadow-sm flex items-center justify-center text-white text-xs font-bold">
                    JD
                </div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-900">Jane Developer</span>
<span className="text-[10px] text-zinc-500">Admin</span>
</div>
<iconify-icon className="ml-auto text-zinc-400" icon="lucide:more-vertical" width="14"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white relative">

<header className="h-16 border-b border-zinc-200 flex items-center justify-between px-6 bg-white z-20 flex-shrink-0">
<div className="flex items-center gap-4 flex-1">

<div className="relative w-full max-w-xl group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-indigo-500 animate-pulse" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-12 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm group-hover:bg-white" onkeydown="if(event.key === 'Enter') { showToast('AI generating...'); this.value = ''; }" placeholder="Ask Nexus AI to build a workflow, add fields, or create a report..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
<kbd className="inline-flex items-center border border-zinc-200 rounded px-2 text-[10px] font-sans font-medium text-zinc-400">⌘K</kbd>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2 mr-2">
<div className="w-7 h-7 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[9px] font-medium text-zinc-600 cursor-help" title="Viewing: Sales Team">ST</div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-zinc-200 flex items-center justify-center text-[9px] font-medium text-zinc-600 cursor-help" title="Viewing: Managers">M</div>
<div className="w-7 h-7 rounded-full border-2 border-white bg-white flex items-center justify-center text-zinc-400 hover:bg-zinc-50 cursor-pointer" onclick="showToast('Invite users')">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
</div>
<div className="h-4 w-px bg-zinc-200"></div>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors" onclick="showToast('Opening preview mode...')">
<iconify-icon icon="lucide:play" width="12"></iconify-icon>
                    Preview App
                </button>
<button className="px-4 py-1.5 text-xs font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 shadow-sm transition-all hover:shadow flex items-center gap-2" onclick="showToast('Changes published successfully!', 'success')">
<iconify-icon icon="lucide:save" width="12"></iconify-icon>
                    Publish Changes
                </button>
</div>
</header>

<div className="h-10 border-b border-zinc-200 bg-zinc-50/50 px-6 flex items-center gap-6 flex-shrink-0" id="builder-tabs">
<button className="builder-tab active h-full border-b-2 border-indigo-600 text-xs font-semibold text-indigo-900 flex items-center gap-2 px-1 transition-all">
<iconify-icon icon="lucide:layout-template" width="14"></iconify-icon>
                Layout Builder
            </button>
<button className="builder-tab h-full border-b-2 border-transparent hover:border-zinc-300 text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 px-1 transition-all">
<iconify-icon icon="lucide:git-pull-request" width="14"></iconify-icon>
                Pipelines
            </button>
<button className="builder-tab h-full border-b-2 border-transparent hover:border-zinc-300 text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 px-1 transition-all">
<iconify-icon icon="lucide:workflow" width="14"></iconify-icon>
                Automations
            </button>
<button className="builder-tab h-full border-b-2 border-transparent hover:border-zinc-300 text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-2 px-1 transition-all">
<iconify-icon icon="lucide:shield-check" width="14"></iconify-icon>
                Permissions
            </button>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-zinc-200 flex flex-col bg-white z-10 flex-shrink-0">
<div className="p-4 border-b border-zinc-200 bg-zinc-50/30">
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2 text-zinc-400" icon="lucide:search" width="14"></iconify-icon>
<input className="w-full pl-8 pr-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-zinc-400 text-zinc-700 placeholder:text-zinc-400 shadow-sm" placeholder="Search components..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6 select-none">

<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-500" icon="lucide:sparkles" width="12"></iconify-icon>
<span className="text-[10px] font-bold text-indigo-900 uppercase tracking-wider">AI Components</span>
</div>
<div className="space-y-2">
<div className="draggable-field flex items-center gap-3 p-2 bg-gradient-to-r from-indigo-50 to-white border border-indigo-100 rounded hover:border-indigo-300 cursor-grab active:cursor-grabbing transition-all group shadow-sm" onclick="showToast('Added Smart Summary field')">
<iconify-icon className="text-indigo-500" icon="lucide:bot" width="16"></iconify-icon>
<span className="text-xs font-medium text-indigo-900">Smart Summary</span>
</div>
<div className="draggable-field flex items-center gap-3 p-2 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded hover:border-purple-300 cursor-grab active:cursor-grabbing transition-all group shadow-sm" onclick="showToast('Added Sentiment Analysis field')">
<iconify-icon className="text-purple-500" icon="lucide:brain-circuit" width="16"></iconify-icon>
<span className="text-xs font-medium text-purple-900">Sentiment Analysis</span>
</div>
</div>
</div>

<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Basic Fields</span>
<div className="grid grid-cols-2 gap-2">
<div className="draggable-field flex flex-col items-center justify-center gap-1.5 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Text field')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:type" width="16"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600">Text</span>
</div>
<div className="draggable-field flex flex-col items-center justify-center gap-1.5 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Number field')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:hash" width="16"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600">Number</span>
</div>
<div className="draggable-field flex flex-col items-center justify-center gap-1.5 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Date field')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:calendar" width="16"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600">Date</span>
</div>
<div className="draggable-field flex flex-col items-center justify-center gap-1.5 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Select field')">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900" icon="lucide:check-square" width="16"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-600">Select</span>
</div>
</div>
</div>

<div>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">Relational &amp; Data</span>
<div className="space-y-2">
<div className="draggable-field flex items-center gap-3 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Lookup field')">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600" icon="lucide:link-2" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Lookup / Relation</span>
</div>
<div className="draggable-field flex items-center gap-3 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Formula field')">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600" icon="lucide:function-square" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Formula</span>
</div>
<div className="draggable-field flex items-center gap-3 p-2 bg-white border border-zinc-200 rounded hover:border-zinc-400 cursor-grab active:cursor-grabbing transition-all group" onclick="showToast('Added Attachment field')">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-600" icon="lucide:paperclip" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">File Attachment</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-zinc-50 builder-grid overflow-y-auto p-8 relative flex justify-center">

<div className="w-full max-w-4xl bg-white border border-zinc-200 shadow-lg rounded-xl flex flex-col min-h-[700px]">

<div className="h-20 border-b border-zinc-200 flex items-center justify-between px-8 bg-white rounded-t-xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100 shadow-sm">
<iconify-icon icon="lucide:banknote" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Deal Record</div>
<div className="w-1 h-1 rounded-full bg-zinc-300"></div>
<div className="text-[10px] font-medium text-indigo-600">ID-2940</div>
</div>
<h1 className="text-lg font-bold text-zinc-900 tracking-tight">Acme Corp Enterprise License</h1>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 rounded-md border border-zinc-200 flex items-center gap-2" onclick="showToast('Email composer opened')">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon> Email
                             </button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 rounded-md border border-zinc-200 flex items-center gap-2" onclick="showToast('Calling primary contact...')">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon> Call
                             </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm" onclick="showToast('Edit mode enabled')">Edit</button>
</div>
</div>

<div className="px-8 py-5 bg-zinc-50/50 border-b border-zinc-200">
<div className="flex items-center justify-between gap-1" id="pipeline-stages">
<div className="stage-item flex-1 h-2.5 rounded-full bg-indigo-600 relative group cursor-pointer shadow-sm" onclick="setPipelineStage(0)">
<div className="absolute -bottom-6 left-0 text-[10px] font-bold text-indigo-700 whitespace-nowrap">Discovery</div>
</div>
<div className="stage-item flex-1 h-2.5 rounded-full bg-indigo-600 relative group cursor-pointer shadow-sm" onclick="setPipelineStage(1)">
<div className="absolute -bottom-6 left-0 text-[10px] font-bold text-indigo-700 whitespace-nowrap">Qualified</div>
</div>
<div className="stage-item flex-1 h-2.5 rounded-full bg-indigo-200 hover:bg-indigo-300 relative group cursor-pointer transition-colors shadow-inner ring-2 ring-white" onclick="setPipelineStage(2)">
<div className="absolute -bottom-6 left-0 text-[10px] font-bold text-zinc-600 whitespace-nowrap">Proposal</div>
</div>
<div className="stage-item flex-1 h-2.5 rounded-full bg-zinc-200 hover:bg-zinc-300 relative group cursor-pointer transition-colors" onclick="setPipelineStage(3)"></div>
<div className="stage-item flex-1 h-2.5 rounded-full bg-zinc-200 hover:bg-zinc-300 relative group cursor-pointer transition-colors" onclick="setPipelineStage(4)"></div>
</div>
<div className="mt-8"></div>
</div>

<div className="p-8 flex-1">
<div className="grid grid-cols-12 gap-8 h-full">

<div className="col-span-8 space-y-8">

<div className="border border-dashed border-zinc-300 rounded-lg p-1 hover:border-indigo-400 transition-colors relative group/section">
<div className="absolute -top-3 left-3 bg-white px-2 text-[10px] font-bold text-zinc-400 group-hover/section:text-indigo-600 uppercase tracking-wider">Key Information</div>
<div className="grid grid-cols-2 gap-6 p-4">

<div className="group relative p-2 rounded hover:bg-zinc-50 border border-transparent hover:border-zinc-200 cursor-pointer transition-all" onclick="selectField(this)">
<label className="block text-[11px] font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Deal Name <span className="text-red-500">*</span></label>
<div className="text-sm font-medium text-zinc-900">Acme Corp Enterprise License</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
<iconify-icon className="text-zinc-400 hover:text-indigo-600" icon="lucide:pencil" width="12"></iconify-icon>
</div>
</div>

<div className="group relative p-2 rounded hover:bg-zinc-50 border border-transparent hover:border-zinc-200 cursor-pointer transition-all" onclick="selectField(this)">
<label className="block text-[11px] font-semibold text-zinc-500 mb-1.5 uppercase tracking-wide">Amount</label>
<div className="text-sm font-medium text-zinc-900">$ 120,000.00</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
<iconify-icon className="text-zinc-400 hover:text-indigo-600" icon="lucide:pencil" width="12"></iconify-icon>
</div>
</div>

<div className="col-span-2 group relative p-3 rounded-md bg-gradient-to-r from-indigo-50/50 to-white border border-indigo-100 cursor-pointer ring-1 ring-indigo-500/20 shadow-sm" onclick="selectField(this)">
<div className="flex justify-between items-start">
<label className="block text-[11px] font-bold text-indigo-700 mb-1.5 uppercase tracking-wide flex items-center gap-2">
<iconify-icon icon="lucide:bot" width="12"></iconify-icon> Deal Probability (AI)
                                                </label>
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-green-200">High</span>
</div>
<div className="text-sm text-zinc-800 leading-snug">
                                                85% chance of closing. Client has engaged with proposal 3 times in the last 24 hours.
                                            </div>
</div>
</div>
</div>

<div className="border-2 border-dashed border-zinc-200 rounded-lg min-h-[120px] flex flex-col items-center justify-center text-center hover:bg-zinc-50/50 hover:border-indigo-300 transition-all cursor-copy" onclick="showToast('Drop fields here')">
<iconify-icon className="text-zinc-300 mb-2" icon="lucide:layout-template" width="24"></iconify-icon>
<span className="text-xs text-zinc-500 font-medium">Drag fields here to create a new section</span>
</div>

<div className="border-t border-zinc-200 pt-6">
<div className="flex items-center gap-6 border-b border-zinc-200 mb-6">
<div className="pb-3 border-b-2 border-indigo-600 text-sm font-semibold text-zinc-900 cursor-pointer" onclick="showToast('Viewing Timeline')">Activity Timeline</div>
<div className="pb-3 border-b-2 border-transparent text-sm font-medium text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors" onclick="showToast('Viewing Emails')">Emails</div>
<div className="pb-3 border-b-2 border-transparent text-sm font-medium text-zinc-500 hover:text-zinc-900 cursor-pointer transition-colors" onclick="showToast('Viewing Files')">Files (3)</div>
<button className="ml-auto text-xs text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1 mb-2" onclick="showToast('Add Related List')">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon> Add Related List
                                        </button>
</div>

<div className="space-y-6 pl-2 opacity-75 pointer-events-none grayscale-[0.5]">
<div className="flex gap-4 relative">
<div className="w-px bg-zinc-200 absolute left-4 top-8 bottom-[-30px]"></div>
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 shadow-sm z-10 shrink-0">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900">Email sent to Sarah Connor</div>
<div className="text-[11px] text-zinc-500 mt-0.5">Yesterday at 2:30 PM • via Outlook</div>
<div className="text-xs text-zinc-600 mt-2 bg-zinc-50 p-3 rounded-md border border-zinc-200 shadow-sm italic font-serif text-zinc-500">
                                                    "Hey Sarah, just following up on the proposal sent last week..."
                                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-4 space-y-6">
<div className="bg-zinc-50/80 rounded-lg border border-zinc-200 p-4 shadow-sm">
<h4 className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-4 border-b border-zinc-200 pb-2">Properties</h4>
<div className="space-y-4">
<div className="cursor-pointer hover:bg-zinc-100 p-1 rounded transition-colors" onclick="selectField(this)">
<label className="block text-[10px] font-semibold text-zinc-400 uppercase mb-1">Account (Lookup)</label>
<div className="flex items-center gap-2 mt-1 p-1.5 bg-white border border-zinc-200 rounded shadow-sm">
<div className="w-5 h-5 rounded bg-pink-100 text-pink-600 flex items-center justify-center text-[10px] font-bold border border-pink-200">A</div>
<span className="text-xs font-medium text-zinc-900">Acme Corporation</span>
<iconify-icon className="ml-auto text-zinc-400" icon="lucide:external-link" width="10"></iconify-icon>
</div>
</div>
<div className="cursor-pointer hover:bg-zinc-100 p-1 rounded transition-colors" onclick="selectField(this)">
<label className="block text-[10px] font-semibold text-zinc-400 uppercase mb-1">Close Date</label>
<div className="text-xs font-medium text-zinc-900 bg-white border border-zinc-200 rounded p-1.5 shadow-sm">Oct 24, 2023</div>
</div>
<div className="cursor-pointer hover:bg-zinc-100 p-1 rounded transition-colors" onclick="selectField(this)">
<label className="block text-[10px] font-semibold text-zinc-400 uppercase mb-1">Owner</label>
<div className="flex items-center gap-2 mt-1">
<div className="w-5 h-5 rounded-full bg-zinc-800 text-white flex items-center justify-center text-[9px] font-bold">JD</div>
<span className="text-xs font-medium text-zinc-700">Jane Developer</span>
</div>
</div>
</div>
</div>
<div className="border-2 border-dashed border-zinc-200 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-indigo-300 hover:bg-indigo-50/10 transition-colors h-32" onclick="showToast('Drop sidebar widgets')">
<iconify-icon className="text-zinc-300" icon="lucide:puzzle" width="20"></iconify-icon>
<span className="text-[10px] text-zinc-400 font-medium mt-2">Drop sidebar widgets</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-8 z-50">

<div className="hidden absolute bottom-16 right-0 w-80 bg-white border border-zinc-200 rounded-xl shadow-2xl flex flex-col overflow-hidden origin-bottom-right" id="ai-chat-popup">
<div className="bg-zinc-900 text-white p-3 flex justify-between items-center">
<span className="text-xs font-semibold flex items-center gap-2">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon> Nexus AI
                            </span>
<iconify-icon className="cursor-pointer hover:text-zinc-300" icon="lucide:x" onclick="toggleChat()" width="14"></iconify-icon>
</div>
<div className="p-4 h-60 bg-zinc-50 overflow-y-auto space-y-3">
<div className="flex gap-2 items-start">
<div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center flex-shrink-0"><iconify-icon icon="lucide:bot" width="14"></iconify-icon></div>
<div className="bg-white border border-zinc-200 p-2 rounded-lg rounded-tl-none text-xs text-zinc-600 shadow-sm">
                                    Hello Jane, how can I help you customize the Deals pipeline today?
                                </div>
</div>
<div className="flex gap-2 items-start flex-row-reverse">
<div className="w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center flex-shrink-0 text-[10px] font-bold">JD</div>
<div className="bg-indigo-600 text-white p-2 rounded-lg rounded-tr-none text-xs shadow-sm">
                                    Add a new field for competitors.
                                </div>
</div>
</div>
<div className="p-2 border-t border-zinc-200 bg-white">
<input className="w-full text-xs p-2 border border-zinc-200 rounded focus:outline-none focus:border-indigo-500" placeholder="Type a message..." type="text"/>
</div>
</div>
<button className="bg-black text-white p-3 pr-5 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 border border-zinc-800 group" onclick="toggleChat()">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-inner">
<iconify-icon className="text-white" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div className="text-left">
<div className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Nexus AI</div>
<div className="text-xs font-semibold">Generate Workflow?</div>
</div>
</button>
</div>
</div>

<div className="w-80 bg-white border-l border-zinc-200 flex flex-col z-10 flex-shrink-0">
<div className="h-12 border-b border-zinc-200 flex items-center px-4 justify-between bg-zinc-50/50">
<span className="text-xs font-bold text-zinc-900 uppercase tracking-wide">Field Settings</span>
<button className="text-zinc-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50" onclick="showToast('Deleted field', 'error')">
<iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="ai-border p-3">
<div className="flex items-start gap-3">
<div className="p-1.5 bg-indigo-100 rounded text-indigo-600 mt-0.5">
<iconify-icon icon="lucide:bot" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-zinc-900">AI Probability</span>
<span className="text-[10px] text-zinc-500 leading-tight mt-0.5">Auto-calculated field based on email sentiment and activity frequency.</span>
</div>
</div>
</div>

<div className="space-y-5">
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">Field Label</label>
<input className="w-full px-2.5 py-2 text-xs border border-zinc-200 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all" type="text" value="Deal Probability"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">AI Model</label>
<div className="relative">
<select className="w-full px-2.5 py-2 text-xs border border-zinc-200 rounded-md appearance-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none bg-zinc-50 font-medium">
<option>Gemini 3 Pro (Recommended)</option>
<option>GPT-4 Turbo</option>
<option>Claude 3 Opus</option>
</select>
<iconify-icon className="absolute right-2.5 top-2.5 text-zinc-400 pointer-events-none" icon="lucide:chevron-down" width="12"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">Prompt Configuration</label>
<textarea className="w-full px-2.5 py-2 text-xs border border-zinc-200 rounded-md focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none transition-all resize-none h-20 font-mono text-zinc-600 bg-zinc-50" placeholder="Enter system prompt for AI...">Analyze the sentiment of the last 5 emails and frequency of interactions to determine a 0-100% closing probability.</textarea>
</div>
<div className="h-px bg-zinc-100 my-2"></div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<label className="text-[11px] font-medium text-zinc-600">Show in List View</label>
<div className="relative inline-block w-7 h-3.5 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border border-zinc-300 appearance-none cursor-pointer transition-all duration-200" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-3.5 rounded-full bg-indigo-600 cursor-pointer"></label>
</div>
</div>
<div className="flex items-center justify-between">
<label className="text-[11px] font-medium text-zinc-600">Read Only</label>
<div className="relative inline-block w-7 h-3.5 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-3.5 h-3.5 rounded-full bg-white border border-zinc-300 appearance-none cursor-pointer transition-all duration-200" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-3.5 rounded-full bg-indigo-600 cursor-pointer"></label>
</div>
</div>
</div>
<div className="h-px bg-zinc-100 my-2"></div>

<div>
<div className="flex items-center justify-between mb-3">
<span className="text-[11px] font-bold text-zinc-700 uppercase tracking-wide">Field Permissions</span>
<span className="text-[10px] text-indigo-600 cursor-pointer hover:underline font-medium" onclick="showToast('Manage roles modal')">Manage Roles</span>
</div>
<div className="bg-zinc-50 rounded-md border border-zinc-200 divide-y divide-zinc-100">
<div className="flex items-center justify-between p-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-[11px] font-medium text-zinc-700">Admin</span>
</div>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded cursor-pointer hover:border-zinc-300">Full Access</span>
</div>
<div className="flex items-center justify-between p-2">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
<span className="text-[11px] font-medium text-zinc-700">Manager</span>
</div>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded cursor-pointer hover:border-zinc-300">View Only</span>
</div>
<div className="flex items-center justify-between p-2 opacity-50">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-300"></div>
<span className="text-[11px] font-medium text-zinc-700">Staff</span>
</div>
<span className="text-[10px] text-zinc-400 bg-white border border-zinc-200 px-1.5 py-0.5 rounded cursor-pointer hover:border-zinc-300">Hidden</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
