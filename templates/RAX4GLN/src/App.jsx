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



      // Utility: show a view by id, hide others
      function showView(viewId) {
        const sections = ['dashboardView', 'learningView', 'opportunitiesView', 'journeyView', 'communityView'];
        sections.forEach(id => {
          document.getElementById(id).classList.toggle('hidden', id !== viewId);
        });
        // Update top-level tabs active state
        const tabMap = {
          dashboardView: 'tabDashboard',
          learningView: 'tabLearning',
          opportunitiesView: 'tabOpportunities',
          journeyView: 'tabJourney',
          communityView: 'tabCommunity'
        };
        Object.values(tabMap).forEach(btnId => {
          const btn = document.getElementById(btnId);
          if (!btn) return;
          btn.classList.remove('text-white', 'bg-gradient-to-r', 'from-[#FD5108]', 'to-[#FD7342]');
          btn.classList.add('text-[#1F1F1F]');
        });
        const activeBtn = document.getElementById(tabMap[viewId]);
        if (activeBtn) {
          activeBtn.classList.add('text-white', 'bg-gradient-to-r', 'from-[#FD5108]', 'to-[#FD7342]');
          activeBtn.classList.remove('text-[#1F1F1F]');
        }
        // Update breadcrumb secondary label
        const crumb = document.querySelector('header .hidden.sm\\:flex span:last-child');
        if (crumb) {
          const label = {
            dashboardView: 'Dashboard',
            learningView: 'My Learning',
            opportunitiesView: 'Opportunities',
            journeyView: 'Career Journey',
            communityView: 'Community'
          }[viewId];
          crumb.textContent = label || 'Dashboard';
        }
        // Focus management
        const search = document.querySelector('header input[placeholder^="Search"]');
        if (search) search.blur();
        // Re-render icons in case view swapped
        if (window.lucide) window.lucide.createIcons();
      }

      // Learning subtabs
      function showLearningPanel(panelId) {
        const panels = ['panelCurrent', 'panelRecommended', 'panelCatalog'];
        panels.forEach(id => {
          document.getElementById(id).classList.toggle('hidden', id !== panelId);
        });
        const btns = { panelCurrent: 'subCurrent', panelRecommended: 'subRecommended', panelCatalog: 'subCatalog' };
        Object.values(btns).forEach(id => {
          const b = document.getElementById(id);
          b.classList.remove('text-white', 'bg-gradient-to-r', 'from-[#FD5108]', 'to-[#FD7342]');
          b.classList.add('text-[#1F1F1F]');
        });
        const active = document.getElementById(btns[panelId]);
        active.classList.add('text-white', 'bg-gradient-to-r', 'from-[#FD5108]', 'to-[#FD7342]');
        active.classList.remove('text-[#1F1F1F]');
        if (window.lucide) window.lucide.createIcons();
      }

      // Drag and drop for Journey
      function setupDragAndDrop() {
        const pool = document.getElementById('milestonePool');
        const droppables = document.querySelectorAll('.droppable');

        // Drag start
        pool.querySelectorAll('.milestone').forEach(el => {
          el.addEventListener('dragstart', e => {
            e.dataTransfer.setData('text/plain', el.dataset.skill);
            e.dataTransfer.effectAllowed = 'copy';
          });
        });

        // Create chip function
        function createChip(skill) {
          const chip = document.createElement('div');
          chip.className = 'group flex items-center justify-between gap-2 px-2 py-1 rounded-md border border-neutral-200 bg-white text-xs shadow-sm';
          chip.innerHTML = `
            <span class="inline-flex items-center gap-1">
              <i data-lucide="check-circle-2" class="h-3.5 w-3.5 text-[#FD5108]"></i>
              ${skill}
            </span>
            <div class="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
              <button type="button" class="edit-chip px-1.5 h-6 rounded border border-neutral-200 bg-white hover:bg-neutral-50" aria-label="Edit">
                <i data-lucide="pencil" class="h-3.5 w-3.5"></i>
              </button>
              <button type="button" class="remove-chip px-1.5 h-6 rounded border border-neutral-200 bg-white hover:bg-neutral-50" aria-label="Remove">
                <i data-lucide="x" class="h-3.5 w-3.5"></i>
              </button>
            </div>
          `;
          chip.querySelector('.remove-chip').addEventListener('click', () => chip.remove());
          chip.querySelector('.edit-chip').addEventListener('click', () => {
            const newName = prompt('Edit milestone name:', skill);
            if (newName) {
              chip.querySelector('span').lastChild.textContent = ' ' + newName;
            }
          });
          if (window.lucide) window.lucide.createIcons({ attrs: { class: 'h-3.5 w-3.5' } });
          return chip;
        }

        droppables.forEach(zone => {
          zone.addEventListener('dragover', e => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
            zone.classList.add('ring-2', 'ring-[#FD5108]/20', 'bg-orange-50/20');
          });
          zone.addEventListener('dragleave', () => {
            zone.classList.remove('ring-2', 'ring-[#FD5108]/20', 'bg-orange-50/20');
          });
          zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('ring-2', 'ring-[#FD5108]/20', 'bg-orange-50/20');
            const skill = e.dataTransfer.getData('text/plain');
            if (!skill) return;
            zone.appendChild(createChip(skill));
          });
        });

        // Add milestone button
        const addBtn = document.getElementById('btnAddMilestone');
        if (addBtn) {
          addBtn.addEventListener('click', () => {
            const skill = prompt('Add a new milestone/skill:');
            if (!skill) return;
            // Append to the first visible year or pool
            const firstYear = document.querySelector('.droppable[data-year]');
            if (firstYear) firstYear.appendChild(createChip(skill));
          });
        }

        // Clear timeline button
        const clearBtn = document.getElementById('btnClearTimeline');
        if (clearBtn) {
          clearBtn.addEventListener('click', () => {
            document.querySelectorAll('.droppable[data-year]').forEach(zone => zone.innerHTML = '');
          });
        }
      }

      // Tab wiring
      function setupTabs() {
        const map = {
          tabDashboard: 'dashboardView',
          tabLearning: 'learningView',
          tabOpportunities: 'opportunitiesView',
          tabJourney: 'journeyView',
          tabCommunity: 'communityView',
          tabDashboardBtn: 'dashboardView',
          tabLearningBtn: 'learningView',
          tabOppBtn: 'opportunitiesView'
        };
        Object.entries(map).forEach(([btnId, view]) => {
          const btn = document.getElementById(btnId);
          if (btn) btn.addEventListener('click', () => showView(view));
        });

        // Quick actions
        const quickExplore = document.getElementById('quickExplore');
        if (quickExplore) quickExplore.addEventListener('click', () => {
          showView('learningView');
          showLearningPanel('panelRecommended');
        });
        const quickJourney = document.getElementById('quickJourney');
        if (quickJourney) quickJourney.addEventListener('click', () => showView('journeyView'));

        // Learning subtabs
        document.getElementById('subCurrent')?.addEventListener('click', () => showLearningPanel('panelCurrent'));
        document.getElementById('subRecommended')?.addEventListener('click', () => showLearningPanel('panelRecommended'));
        document.getElementById('subCatalog')?.addEventListener('click', () => showLearningPanel('panelCatalog'));
      }

      // Keyboard shortcut: Cmd/Ctrl+K focuses search
      function setupKbar() {
        const search = document.querySelector('header input[placeholder^="Search"]');
        window.addEventListener('keydown', (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            search?.focus();
          }
        });
      }

      // DOM Ready
      document.addEventListener('DOMContentLoaded', () => {
        // Current year
        const yn = document.getElementById('yearNow');
        if (yn) yn.textContent = new Date().getFullYear();

        setupTabs();
        showView('dashboardView'); // default
        showLearningPanel('panelCurrent');
        setupDragAndDrop();
        setupKbar();

        // Init icons
        if (window.lucide) window.lucide.createIcons();
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
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur border-b bg-white/90 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center tracking-tight text-sm font-semibold text-white">SF</div>
<div className="hidden sm:flex items-center gap-2 text-[#4A4A4A]">
<span className="text-[#1F1F1F] font-medium tracking-tight">SkillForward</span>
<span className="text-neutral-300">/</span>
<span className="text-[#4A4A4A]">Dashboard</span>
</div>
</div>
<div className="flex-1 px-4">
<div className="relative group">
<i className="absolute left-3 top-2.5 h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-10 h-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 focus:border-neutral-300 placeholder-neutral-400 text-sm transition bg-white border-neutral-200" placeholder="Search courses, skills, opportunities..."/>
<div className="absolute right-3 top-2.5 text-[10px] text-neutral-500 border rounded px-1 py-0.5 border-neutral-200 bg-white">⌘K</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-md border transition text-sm border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300" id="tabDashboardBtn">
<i className="h-4 w-4" data-lucide="home"></i> Dashboard
              </button>
<button className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-md border transition text-sm border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300" id="tabLearningBtn">
<i className="h-4 w-4" data-lucide="book-open"></i> My Learning
              </button>
<button className="hidden sm:inline-flex items-center gap-2 px-3 h-9 rounded-md border transition text-sm border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300" id="tabOppBtn">
<i className="h-4 w-4" data-lucide="briefcase"></i> Opportunities
              </button>
<div className="h-8 w-[1px] bg-neutral-200"></div>
<button className="relative inline-flex items-center gap-2 px-3 h-9 rounded-md border transition text-sm border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300">
<i className="h-4 w-4" data-lucide="bell"></i>
<span className="hidden sm:inline">Notifications</span>
<span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#FD5108] text-[10px] leading-4 text-center font-medium text-white">5</span>
</button>
<div className="relative">
<button className="flex items-center gap-2 px-2 py-1 rounded-md border transition border-neutral-200 bg-white hover:bg-neutral-50">
<img alt="avatar" className="h-7 w-7 rounded-sm object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="hidden sm:inline text-sm text-[#1F1F1F]">Sarah</span>
<i className="h-4 w-4 text-neutral-500" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-6">
<div className="inline-flex p-1 rounded-lg border shadow-sm border-neutral-200 bg-white">
<button className="px-3 sm:px-4 h-9 rounded-md text-sm font-medium tracking-tight bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-white" id="tabDashboard">Dashboard</button>
<button className="px-3 sm:px-4 h-9 rounded-md text-sm font-medium tracking-tight text-[#1F1F1F] hover:bg-neutral-50" id="tabLearning">My Learning</button>
<button className="px-3 sm:px-4 h-9 rounded-md text-sm font-medium tracking-tight text-[#1F1F1F] hover:bg-neutral-50" id="tabOpportunities">Opportunities</button>
<button className="px-3 sm:px-4 h-9 rounded-md text-sm font-medium tracking-tight text-[#1F1F1F] hover:bg-neutral-50" id="tabJourney">Career Journey</button>
<button className="px-3 sm:px-4 h-9 rounded-md text-sm font-medium tracking-tight text-[#1F1F1F] hover:bg-neutral-50" id="tabCommunity">Community</button>
</div>
</div>

<section className="space-y-6" id="dashboardView">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border shadow-sm border-neutral-200 bg-white">
<div className="p-6 flex items-start justify-between">
<div>
<div className="flex items-center gap-3">
<img alt="Sarah" className="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<h1 className="text-2xl tracking-tight font-semibold text-[#1F1F1F]">Welcome back, Sarah!</h1>
</div>
<p className="mt-2 text-sm text-[#4A4A4A]">Keep your momentum. Your goal: Senior Data Consultant.</p>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 h-10 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] hover:opacity-90 transition border border-[#FD5108]/20 text-sm shadow-sm text-white">
<i className="h-4 w-4" data-lucide="play"></i> Continue Learning
                      </button>
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-md border transition text-sm border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="sparkles"></i> Discover
                      </button>
</div>
</div>
<img alt="hero" className="hidden sm:block h-28 w-48 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>

<div className="px-6 py-4 border-t grid grid-cols-2 md:grid-cols-4 gap-4 border-neutral-200">
<div className="rounded-lg p-4 bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm text-white">
<div className="flex items-center justify-between">
<span className="text-sm opacity-90">📚 Courses Completed</span>
<i className="h-4 w-4" data-lucide="book-check"></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">12</div>
</div>
<div className="rounded-lg p-4 bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm text-white">
<div className="flex items-center justify-between">
<span className="text-sm opacity-90">💡 Skills Achieved</span>
<i className="h-4 w-4" data-lucide="lightbulb"></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">8</div>
</div>
<div className="rounded-lg p-4 bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm text-white">
<div className="flex items-center justify-between">
<span className="text-sm opacity-90">💼 Opportunities Applied</span>
<i className="h-4 w-4" data-lucide="briefcase"></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">6</div>
</div>
<div className="rounded-lg p-4 bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm text-white">
<div className="flex items-center justify-between">
<span className="text-sm opacity-90">⭐ Community Reputation</span>
<i className="h-4 w-4" data-lucide="star"></i>
</div>
<div className="mt-2 text-xl font-semibold tracking-tight">1,247</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="space-y-3">
<div className="rounded-xl p-[1.5px] bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm">
<div className="rounded-[10px] p-4 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="library"></i>
</div>
<div>
<div className="text-sm font-medium">Explore Courses</div>
<div className="text-xs text-[#4A4A4A]">Curated for your path</div>
</div>
</div>
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm hover:opacity-90 text-white" id="quickExplore">Open</button>
</div>
</div>
<div className="rounded-xl p-[1.5px] bg-gradient-to-r from-[#FD5108] to-[#FD7342] shadow-sm">
<div className="rounded-[10px] p-4 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="route"></i>
</div>
<div>
<div className="text-sm font-medium">View Career Journey</div>
<div className="text-xs text-[#4A4A4A]">Plan skills to 2035</div>
</div>
</div>
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm hover:opacity-90 text-white" id="quickJourney">Open</button>
</div>
</div>
</div>

<div className="rounded-xl border shadow-sm p-5 border-neutral-200 bg-white">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Recent Activity</h3>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="filter"></i> Filter
                    </button>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50">
<div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div className="text-sm">
<div className="font-medium">Certificate unlocked: SQL Practitioner</div>
<div className="text-xs text-[#4A4A4A]">2 hours ago</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50">
<div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-4 w-4" data-lucide="bell-ring"></i>
</div>
<div className="text-sm">
<div className="font-medium">New recommended course: GenAI for Consulting</div>
<div className="text-xs text-[#4A4A4A]">Yesterday</div>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200 hover:bg-neutral-50">
<div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-4 w-4" data-lucide="briefcase"></i>
</div>
<div className="text-sm">
<div className="font-medium">You were matched to 3 new opportunities</div>
<div className="text-xs text-[#4A4A4A]">2 days ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" id="learningView">
<div className="rounded-xl border shadow-sm border-neutral-200 bg-white">
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">My Learning</h3>
<div className="inline-flex p-1 rounded-lg border border-neutral-200 bg-white">
<button className="px-3 h-9 rounded-md text-sm font-medium bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-white" id="subCurrent">Current Courses</button>
<button className="px-3 h-9 rounded-md text-sm font-medium text-[#1F1F1F] hover:bg-neutral-50" id="subRecommended">Recommended</button>
<button className="px-3 h-9 rounded-md text-sm font-medium text-[#1F1F1F] hover:bg-neutral-50" id="subCatalog">Course Catalog</button>
</div>
</div>

<div className="px-5 pb-6 space-y-4" id="panelCurrent">
<div className="flex gap-4 overflow-x-auto pb-2">

<div className="min-w-[280px] rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="course" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium">SQL for Analytics</h4>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">In Progress</span>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">Instructor: Priya S</div>
<div className="mt-1 text-xs">⭐ ⭐ ⭐ ⭐ ☆ (4.2)</div>
<div className="mt-3">
<div className="h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '62%'}}></div>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">62% complete</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Continue</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Drop</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Rate</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Certificate</button>
</div>
</div>
</div>
<div className="min-w-[280px] rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="course" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium">Cloud Foundations</h4>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">In Progress</span>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">Instructor: John D</div>
<div className="mt-1 text-xs">⭐ ⭐ ⭐ ⭐ ⭐ (4.8)</div>
<div className="mt-3">
<div className="h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '28%'}}></div>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">28% complete</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Continue</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Drop</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Rate</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Certificate</button>
</div>
</div>
</div>
<div className="min-w-[280px] rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="course" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium">GenAI for Consulting</h4>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Not Started</span>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">Instructor: Mei L</div>
<div className="mt-1 text-xs">⭐ ⭐ ⭐ ⭐ ☆ (4.5)</div>
<div className="mt-3">
<div className="h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '0%'}}></div>
</div>
<div className="mt-1 text-xs text-[#4A4A4A]">0% complete</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Continue</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Drop</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Rate</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Certificate</button>
</div>
</div>
</div>
</div>
</div>

<div className="px-5 pb-6 space-y-4 hidden" id="panelRecommended">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="rec" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<span className="text-[11px] px-2 py-1 rounded bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-white">Recommended for Your Path</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Intermediate</span>
</div>
<h4 className="mt-2 text-sm font-medium">Data Visualization with Tableau</h4>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Enroll</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Preview</button>
</div>
</div>
</div>
<div className="rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="rec2" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<span className="text-[11px] px-2 py-1 rounded bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-white">Recommended for Your Path</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Beginner</span>
</div>
<h4 className="mt-2 text-sm font-medium">Consulting Storytelling</h4>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Enroll</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Preview</button>
</div>
</div>
</div>
<div className="rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<img alt="rec3" className="h-28 w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<span className="text-[11px] px-2 py-1 rounded bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-white">Recommended for Your Path</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Advanced</span>
</div>
<h4 className="mt-2 text-sm font-medium">ETL on the Cloud</h4>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Enroll</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Preview</button>
</div>
</div>
</div>
</div>
</div>

<div className="px-5 pb-6 space-y-4 hidden" id="panelCatalog">
<div className="flex flex-wrap items-center gap-3 p-3 rounded-lg border border-neutral-200 bg-white">
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>All Sectors</option>
<option>Retail</option>
<option>FinServ</option>
<option>Healthcare</option>
</select>
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>All Difficulty</option>
<option>Beginner</option>
<option>Intermediate</option>
<option>Advanced</option>
</select>
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>Any Duration</option>
<option>&lt; 4 hours</option>
<option>4–12 hours</option>
<option>12+ hours</option>
</select>
</div>

<div className="divide-y rounded-xl border shadow-sm overflow-hidden divide-neutral-200 border-neutral-200 bg-white">
<div className="px-5 py-4 grid grid-cols-12 items-center transition hover:bg-neutral-50">
<div className="col-span-6 flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="pie-chart"></i>
</div>
<div>
<div className="text-sm">Marketing Analytics</div>
<div className="text-xs text-[#4A4A4A]">Sector: Retail • 6h • Intermediate</div>
</div>
</div>
<div className="col-span-3 text-xs text-[#4A4A4A]">Status: Not Enrolled</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Enroll</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Preview</button>
</div>
</div>
<div className="px-5 py-4 grid grid-cols-12 items-center transition hover:bg-neutral-50">
<div className="col-span-6 flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm">GenAI Prompting</div>
<div className="text-xs text-[#4A4A4A]">Sector: Cross • 3h • Beginner</div>
</div>
</div>
<div className="col-span-3 text-xs text-[#4A4A4A]">Status: Enrolled</div>
<div className="col-span-3 flex items-center justify-end gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Continue</button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">Preview</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" id="opportunitiesView">
<div className="rounded-xl border shadow-sm border-neutral-200 bg-white">
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Opportunities</h3>
<div className="flex flex-wrap items-center gap-3">
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>All Sectors</option>
<option>Retail</option>
<option>FinServ</option>
<option>Healthcare</option>
</select>
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>All Types</option>
<option>Contract</option>
<option>Full-time</option>
<option>Part-time</option>
</select>
<select className="h-9 rounded-md border text-sm text-[#1F1F1F] focus:outline-none focus:ring-2 focus:ring-[#FD5108]/20 px-2 bg-white border-neutral-200 hover:border-neutral-300">
<option>Open &amp; Closed</option>
<option>Open</option>
<option>Closed</option>
</select>
</div>
</div>
<div className="px-5 pb-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-4 rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="bar-chart-3"></i>
</div>
<div>
<div className="text-sm font-medium">Marketing Analytics Dashboard</div>
<div className="text-xs text-[#4A4A4A]">Posted 3d ago • Retail</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded border bg-blue-50 text-blue-700 border-blue-200">Open</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-[#4A4A4A]">Skills match</span>
<span>86%</span>
</div>
<div className="mt-1 h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '86%'}}></div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">SQL</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Tableau</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Client Comms</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="h-10 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Send Resume</button>
<button className="h-10 rounded-md border border-[#FD5108]/40 text-[#FD5108] text-sm bg-white hover:bg-indigo-50">Express Interest</button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save / Bookmark
                      </button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="messages-square"></i> Contact Project Owner
                      </button>
</div>
</div>
<div className="p-4 rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="cloud"></i>
</div>
<div>
<div className="text-sm font-medium">Cloud ETL Buildout</div>
<div className="text-xs text-[#4A4A4A]">Posted 1w ago • FinServ</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 text-neutral-700 border-neutral-200">Closed</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-[#4A4A4A]">Skills match</span>
<span>73%</span>
</div>
<div className="mt-1 h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '73%'}}></div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Python</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Cloud</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">ETL</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="h-10 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Send Resume</button>
<button className="h-10 rounded-md border border-[#FD5108]/40 text-[#FD5108] text-sm bg-white hover:bg-indigo-50">Express Interest</button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save / Bookmark
                      </button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="messages-square"></i> Contact Project Owner
                      </button>
</div>
</div>
<div className="p-4 rounded-xl border shadow-sm hover:shadow transition border-neutral-200 bg-white">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-white">
<i className="h-5 w-5" data-lucide="gauge"></i>
</div>
<div>
<div className="text-sm font-medium">Customer Insights Sprint</div>
<div className="text-xs text-[#4A4A4A]">Posted 5d ago • Healthcare</div>
</div>
</div>
<span className="text-[11px] px-2 py-1 rounded border bg-blue-50 text-blue-700 border-blue-200">Open</span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-[#4A4A4A]">Skills match</span>
<span>80%</span>
</div>
<div className="mt-1 h-2 rounded-full border overflow-hidden bg-neutral-100 border-neutral-200">
<div className="h-full bg-gradient-to-r from-[#FD5108] to-[#FD7342]" style={{width: '80%'}}></div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">SQL</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">PowerBI</span>
<span className="text-[11px] px-2 py-1 rounded border bg-neutral-100 border-neutral-200">Stakeholder</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="h-10 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">Send Resume</button>
<button className="h-10 rounded-md border border-[#FD5108]/40 text-[#FD5108] text-sm bg-white hover:bg-indigo-50">Express Interest</button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save / Bookmark
                      </button>
<button className="h-10 rounded-md border text-sm col-span-2 flex items-center justify-center gap-2 border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="messages-square"></i> Contact Project Owner
                      </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" id="journeyView">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border shadow-sm border-neutral-200 bg-white">
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Career Journey: 2025–2035</h3>
<div className="flex items-center gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white" id="btnAddMilestone">
<i className="h-4 w-4" data-lucide="plus"></i> Add Skill/Milestone
                    </button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50" id="btnClearTimeline">Clear</button>
</div>
</div>
<div className="px-5 pb-5">
<p className="text-xs text-[#4A4A4A]">Tip: Drag a milestone onto a year. Drag again to change year.</p>

<div className="mt-4 overflow-x-auto">
<div className="flex gap-4 min-w-[900px]">

<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2025</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2025"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2026</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2026"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2027</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2027"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2028</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2028"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2029</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2029"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2030</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2030"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2031</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2031"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2032</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2032"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2033</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2033"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2034</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2034"></div>
</div>
<div className="year-col w-56 rounded-lg border border-neutral-200 bg-white">
<div className="px-3 py-2 border-b text-sm font-medium sticky top-0 border-neutral-200 bg-neutral-50">2035</div>
<div className="p-3 min-h-[160px] space-y-2 droppable" data-year="2035"></div>
</div>
</div>
</div>

<div className="mt-6">
<div className="text-sm font-medium mb-2">Milestones</div>
<div className="flex gap-3 flex-wrap" id="milestonePool">
<div className="milestone cursor-move select-none px-3 py-2 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs shadow-sm text-white" data-skill="SQL Practitioner" draggable="true" title="Drag onto a year">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="database"></i> SQL Practitioner
                        </div>
</div>
<div className="milestone cursor-move select-none px-3 py-2 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs shadow-sm text-white" data-skill="GenAI Practitioner" draggable="true" title="Drag onto a year">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="bot"></i> GenAI Practitioner
                        </div>
</div>
<div className="milestone cursor-move select-none px-3 py-2 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs shadow-sm text-white" data-skill="Cloud Associate" draggable="true" title="Drag onto a year">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="cloud"></i> Cloud Associate
                        </div>
</div>
<div className="milestone cursor-move select-none px-3 py-2 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs shadow-sm text-white" data-skill="Senior Data Consultant" draggable="true" title="Drag onto a year">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="award"></i> Senior Data Consultant
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border shadow-sm lg:sticky lg:top-20 h-fit border-neutral-200 bg-white">
<div className="p-5">
<h3 className="text-base font-semibold tracking-tight">Next Big Goal</h3>
<div className="mt-2 p-4 rounded-lg border border-neutral-200 bg-neutral-50">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-[#FD5108]" data-lucide="target"></i>
<div className="text-sm font-medium">Become Senior Data Consultant (2030)</div>
</div>
<p className="mt-2 text-xs text-[#4A4A4A]">Focus: SQL mastery, GenAI delivery, client storytelling.</p>
</div>
<div className="mt-4">
<div className="text-sm font-medium mb-2">KPIs</div>
<div className="grid grid-cols-3 gap-3">
<div className="p-3 rounded-md border border-neutral-200 bg-white">
<div className="text-xs text-[#4A4A4A]">Skills planned</div>
<div className="text-base font-semibold">6</div>
</div>
<div className="p-3 rounded-md border border-neutral-200 bg-white">
<div className="text-xs text-[#4A4A4A]">Milestones</div>
<div className="text-base font-semibold">8</div>
</div>
<div className="p-3 rounded-md border border-neutral-200 bg-white">
<div className="text-xs text-[#4A4A4A]">Completion</div>
<div className="text-base font-semibold">24%</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-sm font-medium mb-2">Tips</div>
<ul className="space-y-2 text-xs text-[#4A4A4A]">
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-[#FD5108]" data-lucide="hand"></i>
                        Drag to change year.
                      </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-[#FD5108]" data-lucide="tools"></i>
                        Click edit to update skill details.
                      </li>
<li className="flex items-start gap-2">
<i className="h-4 w-4 mt-0.5 text-[#FD5108]" data-lucide="share-2"></i>
                        Share your journey with your manager.
                      </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-6 hidden" id="communityView">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border shadow-sm border-neutral-200 bg-white">
<div className="p-5 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight">Community Discussions</h3>
<div className="flex items-center gap-2">
<button className="px-3 h-9 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-sm text-white">
<i className="h-4 w-4" data-lucide="plus"></i> New Post
                    </button>
<button className="px-3 h-9 rounded-md border text-sm border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="filter"></i> Filters
                    </button>
</div>
</div>
<div className="px-5 pb-5 space-y-4">

<div className="p-4 rounded-lg border transition border-neutral-200 bg-white hover:bg-neutral-50">
<div className="flex items-start &lt;div class=" flex="" gap-4"="" items-start="" justify-between="">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-9 w-9 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium">How are you using GenAI in client discovery?</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">GenAI</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">Consulting</span>
</div>
<p className="mt-1 text-xs text-[#4A4A4A]">We’re piloting note summarization and requirements extraction. Curious about your red flags and best practices.</p>
<div className="mt-2 flex items-center gap-3 text-xs text-[#4A4A4A]">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> Priya S</span>
<span>•</span>
<span>12 replies</span>
<span>•</span>
<span>Updated 1h ago</span>
</div>
</div>
</div>
<div className="shrink-0 flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="thumbs-up"></i> 24
                        </button>
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                        </button>
</div>
</div>
</div>

<div className="p-4 rounded-lg border transition border-neutral-200 bg-white hover:bg-neutral-50">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-9 w-9 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium">SQL window functions: favorite use-cases?</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">SQL</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">Analytics</span>
</div>
<p className="mt-1 text-xs text-[#4A4A4A]">I’m collecting examples for a lunch-and-learn. Ranking, running totals, deduping — share your go-tos.</p>
<div className="mt-2 flex items-center gap-3 text-xs text-[#4A4A4A]">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> Marco T</span>
<span>•</span>
<span>8 replies</span>
<span>•</span>
<span>Updated 3h ago</span>
</div>
</div>
</div>
<div className="shrink-0 flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="thumbs-up"></i> 17
                        </button>
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                        </button>
</div>
</div>
</div>

<div className="p-4 rounded-lg border transition border-neutral-200 bg-white hover:bg-neutral-50">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-9 w-9 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium">Power BI vs Tableau for exec dashboards in 2025?</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">BI</span>
<span className="text-[11px] px-2 py-0.5 rounded border bg-neutral-100 border-neutral-200">Stakeholders</span>
</div>
<p className="mt-1 text-xs text-[#4A4A4A]">Pros/cons for governance, cost, and speed to iterate? Looking for recent experiences.</p>
<div className="mt-2 flex items-center gap-3 text-xs text-[#4A4A4A]">
<span className="inline-flex items-center gap-1"><i className="h-3.5 w-3.5" data-lucide="user"></i> Aisha K</span>
<span>•</span>
<span>23 replies</span>
<span>•</span>
<span>Updated 1d ago</span>
</div>
</div>
</div>
<div className="shrink-0 flex flex-col items-end gap-2">
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="thumbs-up"></i> 39
                        </button>
<button className="inline-flex items-center gap-1 px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="bookmark"></i> Save
                        </button>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-xs text-[#4A4A4A]">Showing 1–3 of 128 threads</span>
<div className="inline-flex items-center rounded-md border overflow-hidden border-neutral-200">
<button aria-label="Previous page" className="px-3 h-9 text-sm border-r bg-white hover:bg-neutral-50 border-neutral-200">
<i className="h-4 w-4" data-lucide="chevron-left"></i>
</button>
<button className="px-3 h-9 text-sm bg-white hover:bg-neutral-50">1</button>
<button className="px-3 h-9 text-sm bg-white hover:bg-neutral-50">2</button>
<button className="px-3 h-9 text-sm bg-white hover:bg-neutral-50">3</button>
<button aria-label="Next page" className="px-3 h-9 text-sm border-l bg-white hover:bg-neutral-50 border-neutral-200">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>

<aside className="rounded-xl border shadow-sm h-fit border-neutral-200 bg-white">
<div className="p-5 space-y-6">

<div>
<div className="flex items-center justify-between">
<h4 className="text-sm font-semibold tracking-tight">Ask a Mentor</h4>
<button className="px-2 h-8 rounded-md border text-xs border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-4 w-4" data-lucide="mail"></i>
</button>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<img alt="mentor" className="h-8 w-8 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-sm font-medium">Daniel Cho</div>
<div className="text-xs text-[#4A4A4A]">Data Strategy • NYC</div>
</div>
<button className="px-2 h-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs text-white">Message</button>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-neutral-200">
<img alt="mentor" className="h-8 w-8 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-sm font-medium">Ritika Shah</div>
<div className="text-xs text-[#4A4A4A]">Cloud &amp; AI • Remote</div>
</div>
<button className="px-2 h-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] text-xs text-white">Message</button>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight">Top Contributors</h4>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between p-2 rounded-md border border-neutral-200">
<div className="flex items-center gap-2">
<img alt="user" className="h-7 w-7 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="text-sm">Marco T</div>
</div>
<div className="text-xs px-2 py-1 rounded border bg-neutral-100 border-neutral-200">1,204 pts</div>
</div>
<div className="flex items-center justify-between p-2 rounded-md border border-neutral-200">
<div className="flex items-center gap-2">
<img alt="user" className="h-7 w-7 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="text-sm">Aisha K</div>
</div>
<div className="text-xs px-2 py-1 rounded border bg-neutral-100 border-neutral-200">1,096 pts</div>
</div>
<div className="flex items-center justify-between p-2 rounded-md border border-neutral-200">
<div className="flex items-center gap-2">
<img alt="user" className="h-7 w-7 rounded-md object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="text-sm">Priya S</div>
</div>
<div className="text-xs px-2 py-1 rounded border bg-neutral-100 border-neutral-200">1,022 pts</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight">Trending Tags</h4>
<div className="mt-3 flex flex-wrap gap-2">
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#genai</button>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#sql</button>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#tableau</button>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#powerbi</button>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#stakeholders</button>
<button className="text-[11px] px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">#cloud</button>
</div>
</div>
</div>
</aside>
</div>
</section>
</div>
</div>

<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-r from-[#FD5108] to-[#FD7342] flex items-center justify-center text-sm font-semibold text-white">SF</div>
<div className="text-sm text-[#4A4A4A]">© <span id="yearNow"></span> SkillForward. All rights reserved.</div>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm">
<a className="text-[#4A4A4A] hover:text-[#1F1F1F]" href="#">Privacy</a>
<a className="text-[#4A4A4A] hover:text-[#1F1F1F]" href="#">Terms</a>
<a className="text-[#4A4A4A] hover:text-[#1F1F1F]" href="#">Help Center</a>
<a className="inline-flex items-center gap-1 text-[#4A4A4A] hover:text-[#1F1F1F]" href="#">
<i className="h-4 w-4" data-lucide="mail"></i> Contact
            </a>
</nav>
</div>
</footer>
</div>



    </>
  );
}
