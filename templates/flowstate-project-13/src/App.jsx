import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 🟢 FLOW 1: ONBOARDING ---
        function completeOnboarding() {
            const onboarding = document.getElementById('view-onboarding');
            const app = document.getElementById('app-layout');
            
            onboarding.style.opacity = '0';
            setTimeout(() => {
                onboarding.style.display = 'none';
                app.classList.remove('hidden');
                // Trigger reflow
                void app.offsetWidth;
                app.style.opacity = '1';
                lucide.createIcons();
            }, 500);
        }

        // --- NAVIGATION LOGIC ---
        function showDashboard() {
            document.getElementById('view-dashboard').classList.remove('hidden');
            document.getElementById('view-project').classList.add('hidden');
            // Reset modal inputs just in case
        }

        function openProject(name) {
            document.getElementById('view-dashboard').classList.add('hidden');
            document.getElementById('view-project').classList.remove('hidden');
            document.getElementById('project-detail-name').innerText = name;
            // In a real app, this would fetch project data
            lucide.createIcons();
        }

        // --- 🔵 FLOW 2: CREATE MODAL ---
        function openCreateModal() {
            const modal = document.getElementById('modal-create');
            const content = document.getElementById('modal-content');
            modal.classList.remove('hidden');
            // Trigger animation
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
        }

        function closeCreateModal() {
            const modal = document.getElementById('modal-create');
            const content = document.getElementById('modal-content');
            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function selectPriority(btn) {
            document.querySelectorAll('.priority-btn').forEach(b => {
                b.className = 'priority-btn px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all';
            });
            btn.className = 'priority-btn px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-blue-700 text-sm font-medium transition-all';
        }

        function submitNewProject() {
            const name = document.getElementById('new-project-name').value || "New Project";
            closeCreateModal();
            
            // Simulate adding to list (Visual feedback)
            setTimeout(() => {
                openProject(name);
            }, 300);
        }

        // --- 🟣 FLOW 3: TABS ---
        function switchTab(tabId) {
            // Buttons
            ['workflow', 'links', 'timeline'].forEach(t => {
                const btn = document.getElementById(`tab-btn-${t}`);
                const content = document.getElementById(`tab-content-${t}`);
                
                if (t === tabId) {
                    btn.classList.remove('border-transparent', 'text-gray-500');
                    btn.classList.add('border-blue-600', 'text-blue-600');
                    content.classList.remove('hidden');
                } else {
                    btn.classList.add('border-transparent', 'text-gray-500');
                    btn.classList.remove('border-blue-600', 'text-blue-600');
                    content.classList.add('hidden');
                }
            });
        }

        // Initialize icons on load
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center p-6 transition-opacity duration-500" id="view-onboarding">
<div className="max-w-md w-full space-y-8">
<div className="text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-6">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h1 className="text-3xl tracking-tight font-medium text-gray-900">Welcome to FlowState</h1>
<p className="mt-3 text-lg text-gray-500">Streamline your workflow from research to handoff.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder-gray-400" placeholder="name@company.com" type="email" value="alex@flowstate.design"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 text-base focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all" placeholder="••••••••" type="password" value="password123"/>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg transition-colors shadow-sm text-base flex items-center justify-center gap-2" onclick="completeOnboarding()">
                    Get Started <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-center text-sm text-gray-400">By joining, you agree to our Terms of Service.</p>
</div>
</div>

<div className="flex h-full hidden opacity-0 transition-opacity duration-500" id="app-layout">

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col justify-between">
<div>
<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2 text-blue-600">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="text-lg font-medium tracking-tight text-gray-900">FlowState</span>
</div>
</div>
<nav className="p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-gray-900 bg-gray-50 rounded-lg group transition-colors" onclick="showDashboard()">
<i className="w-5 h-5 text-gray-500 group-hover:text-blue-600" data-lucide="layout-grid"></i>
                        Dashboard
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg group transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="folder"></i>
                        Projects
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg group transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="check-square"></i>
                        Tasks
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg group transition-colors">
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600" data-lucide="bell"></i>
                        Reminders
                        <span className="ml-auto bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">2</span>
</button>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-sm font-medium">AD</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-gray-900 truncate">Alex Designer</p>
<p className="text-xs text-gray-500 truncate">Pro Plan</p>
</div>
<i className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-[#F9FAFB] overflow-hidden">

<header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4">
<div className="flex items-center gap-2 text-blue-600">
<i className="w-6 h-6" data-lucide="layers"></i>
<span className="text-lg font-medium text-gray-900">FlowState</span>
</div>
<button><i className="w-6 h-6 text-gray-600" data-lucide="menu"></i></button>
</header>

<div className="bg-amber-50 border-b border-amber-100 px-6 py-3 flex items-center justify-between" id="reminder-banner">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-600" data-lucide="clock"></i>
<span className="text-sm font-medium text-amber-900">Project "Fintech App" deadline in 48 hours.</span>
</div>
<button className="text-sm font-medium text-amber-700 hover:text-amber-900 hover:underline" onclick="openProject('Fintech App')">View Project</button>
</div>

<div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

<div className="max-w-6xl mx-auto space-y-8 animate-fade-in" id="view-dashboard">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl tracking-tight font-medium text-gray-900">Dashboard</h1>
<p className="text-base text-gray-500 mt-1">Overview of your active projects.</p>
</div>

<button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm" onclick="openCreateModal()">
<i className="w-4 h-4" data-lucide="plus"></i> New Project
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600"><i className="w-5 h-5" data-lucide="folder-open"></i></div>
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">+2 this week</span>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">4</div>
<div className="text-sm text-gray-500 mt-1">Active Projects</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600"><i className="w-5 h-5" data-lucide="clock"></i></div>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">2</div>
<div className="text-sm text-gray-500 mt-1">Approaching Deadline</div>
</div>
<div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-50 rounded-lg text-green-600"><i className="w-5 h-5" data-lucide="check-circle"></i></div>
</div>
<div className="text-3xl font-medium tracking-tight text-gray-900">12</div>
<div className="text-sm text-gray-500 mt-1">Tasks Completed</div>
</div>
</div>

<div>
<h2 className="text-lg font-medium text-gray-900 mb-4">Recent Projects</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="project-list">

<div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden" onclick="openProject('Fintech App')">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div> 
<div className="flex justify-between items-start mb-4 pl-2">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">Fintech App</h3>
<span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">Urgent</span>
</div>
<p className="text-sm text-gray-500">Stripe Inc.</p>
</div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
</div>
</div>
<div className="pl-2 space-y-4">
<div className="flex justify-between text-sm text-gray-600">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="calendar"></i> Due Oct 24</span>
<span className="font-medium">75%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex gap-2 mt-2">
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">UI Design</span>
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">Mobile</span>
</div>
</div>
</div>

<div className="group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer relative overflow-hidden" onclick="openProject('E-commerce Web')">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-4 pl-2">
<div>
<div className="flex items-center gap-2 mb-1">
<h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">E-commerce Web</h3>
<span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full">Normal</span>
</div>
<p className="text-sm text-gray-500">Nike</p>
</div>
</div>
<div className="pl-2 space-y-4">
<div className="flex justify-between text-sm text-gray-600">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="calendar"></i> Due Nov 12</span>
<span className="font-medium">30%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full" style={{width: '30%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto space-y-6 hidden" id="view-project">

<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
<button className="hover:text-gray-900 transition-colors" onclick="showDashboard()">Dashboard</button>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
<span className="text-gray-900 font-medium" id="project-detail-name">Fintech App</span>
</div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<h1 className="text-3xl tracking-tight font-medium text-gray-900 mb-2">Fintech App Redesign</h1>
<div className="flex items-center gap-4 text-sm text-gray-600">
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-gray-400" data-lucide="briefcase"></i> Stripe Inc.</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i> Due Oct 24</span>
<span className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-medium border border-green-100">Active</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-2 mr-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-xs text-blue-700">JS</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs text-gray-600">+2</div>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200"><i className="w-5 h-5" data-lucide="share-2"></i></button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200"><i className="w-5 h-5" data-lucide="more-horizontal"></i></button>
</div>
</div>
<div className="mt-6">
<div className="flex justify-between text-sm mb-2">
<span className="text-gray-600">Progress</span>
<span className="font-medium text-gray-900">75%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
<div className="bg-blue-600 h-2.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>

<div className="border-b border-gray-200">
<div className="flex gap-8">
<button className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium text-sm transition-colors flex items-center gap-2" id="tab-btn-workflow" onclick="switchTab('workflow')">
<i className="w-4 h-4" data-lucide="kanban"></i> Workflow
                            </button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors flex items-center gap-2" id="tab-btn-links" onclick="switchTab('links')">
<i className="w-4 h-4" data-lucide="link"></i> Links
                            </button>
<button className="pb-3 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors flex items-center gap-2" id="tab-btn-timeline" onclick="switchTab('timeline')">
<i className="w-4 h-4" data-lucide="calendar-days"></i> Timeline
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="tab-content-workflow">

<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-gray-900 text-sm">Research</h3>
<span className="text-xs bg-white text-gray-500 px-2 py-0.5 rounded border border-gray-200">Done</span>
</div>
<div className="space-y-3">
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm opacity-60">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600"><i className="w-4 h-4" data-lucide="check-circle-2"></i></div>
<div>
<p className="text-sm text-gray-500 line-through">Competitor Analysis</p>
</div>
</div>
</div>
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm opacity-60">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-blue-600"><i className="w-4 h-4" data-lucide="check-circle-2"></i></div>
<div>
<p className="text-sm text-gray-500 line-through">User Personas</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-gray-900 text-sm">Design</h3>
<span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded border border-blue-200">In Progress</span>
</div>
<div className="space-y-3">
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 transition-colors group cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-gray-300 group-hover:text-blue-500"><i className="w-4 h-4" data-lucide="circle"></i></div>
<div className="w-full">
<p className="text-sm font-medium text-gray-900">High Fidelity Mocks</p>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">
<i className="w-3 h-3" data-lucide="alert-circle"></i> Due Tomorrow
                                                </div>
<img className="w-5 h-5 rounded-full bg-gray-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</div>
</div>
<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 transition-colors group cursor-pointer">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-gray-300 group-hover:text-blue-500"><i className="w-4 h-4" data-lucide="circle"></i></div>
<div className="w-full">
<p className="text-sm font-medium text-gray-900">Design System Update</p>
</div>
</div>
</div>
<button className="w-full py-2 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-200/50 rounded-lg border border-dashed border-gray-300 hover:border-gray-400 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i> Add Task
                                </button>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-gray-900 text-sm">Handoff</h3>
<span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded border border-gray-200">Pending</span>
</div>
<div className="flex flex-col items-center justify-center h-32 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-lg">
                                No tasks yet
                            </div>
</div>
</div>

<div className="hidden" id="tab-content-links">
<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50/50">
<h3 className="font-medium text-gray-900 text-sm">Project Resources</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
<i className="w-4 h-4" data-lucide="plus"></i> Add Link
                                </button>
</div>
<div className="divide-y divide-gray-100">
<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="p-2 bg-purple-50 text-purple-600 rounded-lg border border-purple-100"><i className="w-5 h-5" data-lucide="figma"></i></div>
<div>
<p className="text-sm font-medium text-gray-900">Master Design File</p>
<p className="text-xs text-gray-500">Figma • Updated 2h ago</p>
</div>
</div>
<a className="text-gray-400 hover:text-blue-600" href="#"><i className="w-4 h-4" data-lucide="external-link"></i></a>
</div>
<div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100"><i className="w-5 h-5" data-lucide="file-text"></i></div>
<div>
<p className="text-sm font-medium text-gray-900">Product Requirements Doc</p>
<p className="text-xs text-gray-500">Notion • Updated yesterday</p>
</div>
</div>
<a className="text-gray-400 hover:text-blue-600" href="#"><i className="w-4 h-4" data-lucide="external-link"></i></a>
</div>
</div>
</div>
</div>

<div className="hidden" id="tab-content-timeline">
<div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-gray-900">October 2023</h3>
<div className="flex gap-2">
<button className="p-1 hover:bg-gray-100 rounded"><i className="w-4 h-4 text-gray-500" data-lucide="chevron-left"></i></button>
<button className="p-1 hover:bg-gray-100 rounded"><i className="w-4 h-4 text-gray-500" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="space-y-6">
<div className="grid grid-cols-12 gap-4 text-xs text-gray-400 border-b border-gray-100 pb-2">
<div className="col-span-2">Task</div>
<div className="col-span-10 flex justify-between">
<span>Oct 1</span><span>Oct 5</span><span>Oct 10</span><span>Oct 15</span><span>Oct 20</span><span>Oct 25</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center">
<div className="col-span-2 text-sm font-medium text-gray-900">Research</div>
<div className="col-span-10 relative h-8 bg-gray-50 rounded-full overflow-hidden">
<div className="absolute left-[0%] width-[30%] bg-green-200 text-green-800 text-xs font-medium px-3 h-full flex items-center rounded-full w-1/4">Completed</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center">
<div className="col-span-2 text-sm font-medium text-gray-900">Design</div>
<div className="col-span-10 relative h-8 bg-gray-50 rounded-full">
<div className="absolute left-[25%] w-[40%] bg-blue-500 text-white text-xs font-medium px-3 h-full flex items-center rounded-full shadow-sm border border-blue-600">In Progress (Due Oct 24)</div>
</div>
</div>

<div className="grid grid-cols-12 gap-4 items-center opacity-50">
<div className="col-span-2 text-sm font-medium text-gray-900">Handoff</div>
<div className="col-span-10 relative h-8 bg-gray-50 rounded-full">
<div className="absolute left-[65%] w-[10%] bg-gray-300 text-gray-700 text-xs font-medium px-3 h-full flex items-center rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="modal-create">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-lg transform scale-95 transition-transform duration-300" id="modal-content">
<div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
<h3 className="text-lg font-medium text-gray-900">Create New Project</h3>
<button className="text-gray-400 hover:text-gray-600" onclick="closeCreateModal()"><i className="w-5 h-5" data-lucide="x"></i></button>
</div>
<div className="p-6 space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Project Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-base focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder-gray-400" id="new-project-name" placeholder="e.g. Website Redesign" type="text"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Client Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-base focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all" placeholder="e.g. Acme Corp" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Deadline</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-base focus:ring-2 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all text-gray-600" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5">Priority</label>
<div className="grid grid-cols-3 gap-3">
<button className="priority-btn px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:border-blue-600 focus:bg-blue-50 focus:text-blue-700 transition-all" onclick="selectPriority(this)">Low</button>
<button className="priority-btn px-4 py-2 rounded-lg border border-blue-600 bg-blue-50 text-blue-700 text-sm font-medium transition-all" onclick="selectPriority(this)">Medium</button>
<button className="priority-btn px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 focus:border-amber-600 focus:bg-amber-50 focus:text-amber-700 transition-all" onclick="selectPriority(this)">High</button>
</div>
</div>
</div>
<div className="px-6 py-4 bg-gray-50 rounded-b-xl flex justify-end gap-3 border-t border-gray-100">
<button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" onclick="closeCreateModal()">Cancel</button>
<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2" onclick="submitNewProject()">
                    Create Project
                </button>
</div>
</div>
</div>


    </>
  );
}
