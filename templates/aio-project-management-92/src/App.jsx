import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#0B0F19',
sidebar: '#0F1422',
card: '#141B2D',
border: 'rgba(255, 255, 255, 0.06)',
primary: '#3B82F6',
success: '#10B981',
warning: '#F59E0B',
danger: '#EF4444',
text: {
main: '#F1F5F9',
muted: '#94A3B8'
}
}
}
}
}



        // Animation Easing: easeOutQuart
        const easeOutQuart = (t) => 1 - (--t) * t * t * t;

        // Counter Animation
        document.querySelectorAll('.counter').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 1500; // ms
            const startTime = performance.now();
            
            const updateCounter = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutQuart(progress);
                
                if (progress < 1) {
                    counter.innerText = Math.floor(easedProgress * target);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            requestAnimationFrame(updateCounter);
        });

        // Progress Bar Animation
        setTimeout(() => {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.transition = 'width 1.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
                bar.style.width = width;
            });
        }, 500);

        // Chart Tooltip Interaction
        const chartContainer = document.getElementById('chart-container');
        const tooltip = document.getElementById('tooltip');
        const circles = document.querySelectorAll('circle[data-value]');

        if(chartContainer && tooltip) {
            circles.forEach(circle => {
                circle.addEventListener('mouseenter', (e) => {
                    const value = e.target.getAttribute('data-value');
                    const day = e.target.getAttribute('data-day');
                    const rect = e.target.getBoundingClientRect();
                    const containerRect = chartContainer.getBoundingClientRect();
                    
                    tooltip.classList.add('visible');
                    tooltip.innerHTML = `<strong>${day}</strong>: ${value}`;
                    
                    // Position tooltip
                    tooltip.style.left = (rect.left - containerRect.left - 20) + 'px';
                    tooltip.style.top = (rect.top - containerRect.top - 40) + 'px';
                    
                    e.target.setAttribute('r', '6');
                    e.target.setAttribute('fill', '#3B82F6');
                });

                circle.addEventListener('mouseleave', (e) => {
                    tooltip.classList.remove('visible');
                    e.target.setAttribute('r', '4');
                    e.target.setAttribute('fill', '#0B0F19');
                });
            });
        }

        // Initialize Chart Line Draw
        const path = document.querySelector('#graph-line');
        if(path) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.getBoundingClientRect();
        }

        // ---------------------------------------------------------
        // MODAL LOGIC
        // ---------------------------------------------------------
        
        const modal = document.getElementById('task-modal');
        const backdrop = document.getElementById('task-modal-backdrop');
        const workloadItems = document.querySelectorAll('.workload-item');
        const expanderBtn = document.getElementById('modal-expander');
        const expandedTasks = document.getElementById('modal-expanded-tasks');
        let isModalOpen = false;
        let isExpanded = false;

        // Function to Open Modal
        function openModal(triggerElement) {
            if (isModalOpen) return;
            
            const rect = triggerElement.getBoundingClientRect();
            const modalWidth = 340;
            const modalHeight = 350; // approx
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Positioning Logic
            // Default: To the right of the element, aligned top
            let top = rect.top + window.scrollY - 10;
            let left = rect.right + 20;

            // Check right edge overflow
            if (left + modalWidth > viewportWidth - 20) {
                // Flip to left side
                left = rect.left - modalWidth - 20;
            }

            // Check bottom edge overflow
            if (top + modalHeight > viewportHeight) {
                // Align bottom
                top = rect.bottom + window.scrollY - modalHeight + 20;
            }

            modal.style.top = `${top}px`;
            modal.style.left = `${left}px`;
            
            // Show
            backdrop.classList.remove('hidden');
            modal.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
            isModalOpen = true;
        }

        // Function to Close Modal
        function closeModal() {
            if (!isModalOpen) return;
            
            modal.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
            setTimeout(() => {
                backdrop.classList.add('hidden');
            }, 200);
            
            // Reset Expander
            isExpanded = false;
            expandedTasks.style.maxHeight = '0px';
            expandedTasks.style.opacity = '0';
            expanderBtn.querySelector('span').innerText = '+ 1 more...';
            
            isModalOpen = false;
        }

        // Attach Listeners to Workload Items
        workloadItems.forEach(item => {
            // Click Trigger
            item.addEventListener('click', (e) => {
                openModal(item);
            });
        });

        // Close when clicking outside (on backdrop)
        backdrop.addEventListener('click', closeModal);

        // Expander Logic
        expanderBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            if (isExpanded) {
                expandedTasks.style.maxHeight = '100px';
                expandedTasks.style.opacity = '1';
                expanderBtn.querySelector('span').innerText = 'Show less';
            } else {
                expandedTasks.style.maxHeight = '0px';
                expandedTasks.style.opacity = '0';
                expanderBtn.querySelector('span').innerText = '+ 1 more...';
            }
        });

        // Prevent closing when clicking inside modal
        modal.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Keyboard Accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-sidebar border-r border-border flex-shrink-0 flex flex-col h-full hidden md:flex z-20 animate-enter">

<div className="h-16 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-white font-semibold text-lg leading-none tracking-tight">aio</h1>
<span className="text-xs text-slate-500 font-medium">Solutions</span>
</div>
</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div className="animate-enter delay-100">
<h3 className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Workspace</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white shadow-sm border border-white/5 group relative overflow-hidden transition-all duration-200 hover:bg-white/10 active:scale-[0.98]" href="#">
<iconify-icon className="text-white" icon="solar:widget-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Overview</span>
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:folder-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Projects</span>
</a>
</li>
<li>
<a className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:checklist-minimalistic-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">My Tasks</span>
</div>
<span className="bg-slate-800 text-slate-400 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-white/5 group-hover:bg-slate-700 transition-colors">08</span>
</a>
</li>
</ul>
</div>

<div className="animate-enter delay-200">
<h3 className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Management</h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Team</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:user-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Clients</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:chart-2-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:case-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Work</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 border border-transparent transition-all duration-200 group active:scale-[0.98]" href="#">
<iconify-icon className="group-hover:text-slate-300 transition-colors duration-200" icon="solar:bolt-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Automation</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="p-4 border-t border-border animate-enter delay-300">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors duration-200 group active:scale-[0.98]">
<div className="relative">
<img alt="Profile" className="w-9 h-9 rounded-full border border-slate-600 transition-transform duration-300 group-hover:scale-105" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-sidebar rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Alex Morgan</p>
<p className="text-xs text-slate-500 truncate group-hover:text-slate-400 transition-colors">Product Lead</p>
</div>
<iconify-icon className="text-slate-500 group-hover:text-slate-300 transition-colors rotate-0 group-hover:rotate-45 duration-300" icon="solar:settings-linear" width="18"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-border bg-background/80 backdrop-blur-md z-10 sticky top-0 animate-enter delay-100">
<h2 className="text-xl font-semibold text-white tracking-tight">Dashboard</h2>
<div className="flex items-center gap-4">

<div className="relative group">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center text-slate-500 group-hover:text-slate-400 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</div>
<input className="w-64 bg-slate-900/50 border border-slate-800 text-sm text-slate-200 rounded-lg pl-10 pr-10 py-1.5 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all duration-200 placeholder:text-slate-600" placeholder="Search Projects..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
<kbd className="hidden sm:inline-block border border-slate-700 rounded px-1.5 text-[10px] font-medium text-slate-500">⌘</kbd>
<kbd className="hidden sm:inline-block border border-slate-700 rounded px-1.5 text-[10px] font-medium text-slate-500">K</kbd>
</div>
</div>

<button className="relative p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-all duration-200 active:scale-95">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-background transform scale-100 transition-transform duration-300"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 scroll-smooth">
<div className="max-w-[1400px] mx-auto space-y-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative bg-card rounded-xl border border-border p-5 shadow-lg overflow-hidden group hover:border-red-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-enter delay-200">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/80 rounded-l-xl"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 text-red-500 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:danger-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-base">Q1 Marketing Launch</h3>
<p className="text-slate-400 text-sm mt-1">Pending approval from Design Team. 3 Blocking tasks.</p>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">Overdue by 2 days</span>
</div>
<div className="mt-4 flex items-center gap-4">
<button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-lg shadow-emerald-900/20 flex items-center gap-2 transition-all duration-200 active:scale-[0.97]">
                                Resolve Blockers
                                <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-200" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="relative bg-card rounded-xl border border-border p-5 shadow-lg overflow-hidden group hover:border-yellow-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-enter delay-200">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500/80 rounded-l-xl"></div>
<div className="flex justify-between items-start mb-2">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 text-yellow-500 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:info-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium text-base">Mobile App API</h3>
<p className="text-slate-400 text-sm mt-1">Backend integration is at 85%. Need final review.</p>
</div>
</div>
<span className="px-2.5 py-1 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">Due Today, 5:00PM</span>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-[-4px]">
<img alt="" className="w-8 h-8 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=1"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=2"/>
</div>
<button className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-white/5 flex items-center gap-2 transition-all duration-200 active:scale-[0.97]">
<iconify-icon icon="solar:bell-linear" width="14"></iconify-icon> Notify Team
                                </button>
</div>
<div className="w-32 sm:w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-yellow-500 rounded-full progress-bar" data-width="85%" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-card rounded-xl border border-border p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm animate-enter delay-300">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm font-medium">Active Projects</span>
<iconify-icon className="text-slate-600" icon="solar:folder-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold text-white counter" data-target="14">0</h2>
<span className="text-emerald-500 text-xs font-medium flex items-center opacity-0 animate-fade-in delay-700">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear" width="14"></iconify-icon> +2 This Month
                            </span>
</div>
</div>

<div className="bg-card rounded-xl border border-border p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm animate-enter delay-300">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm font-medium">Pending Tasks</span>
<iconify-icon className="text-slate-600" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold text-white counter" data-target="36">0</h2>
<span className="text-slate-500 text-xs font-medium opacity-0 animate-fade-in delay-700">14 High Priority</span>
</div>
</div>

<div className="bg-card rounded-xl border border-border p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm animate-enter delay-300">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm font-medium">Team Velocity</span>
<iconify-icon className="text-slate-600" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold text-white counter" data-target="93">0</h2>
<span className="text-white text-lg font-normal">%</span>
<span className="text-slate-500 text-xs font-medium ml-1 opacity-0 animate-fade-in delay-700">On Track</span>
</div>
</div>

<div className="bg-card rounded-xl border border-border p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-sm animate-enter delay-300">
<div className="flex justify-between items-start mb-4">
<span className="text-slate-400 text-sm font-medium">Hours Logged</span>
<iconify-icon className="text-slate-600" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-3xl font-semibold text-white counter" data-target="156">0</h2>
<span className="text-slate-500 text-xs font-medium opacity-0 animate-fade-in delay-700">/ 200 Capacity</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-card rounded-xl border border-border p-6 shadow-lg flex flex-col animate-enter delay-400">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">Sprint Velocity</h3>
<div className="bg-slate-900 rounded-lg p-1 flex border border-slate-800">
<button className="px-3 py-1 text-xs font-medium bg-slate-800 text-white rounded shadow-sm transition-all duration-200 active:scale-95">Week</button>
<button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors duration-200 active:scale-95">Month</button>
</div>
</div>

<div className="relative w-full h-64 flex-1 group" id="chart-container">
<div className="chart-tooltip" id="tooltip"></div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>

<g className="grid-lines" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" strokeWidth="1">
<line x1="0" x2="800" y1="250" y2="250"></line>
<line x1="0" x2="800" y1="200" y2="200"></line>
<line x1="0" x2="800" y1="150" y2="150"></line>
<line x1="0" x2="800" y1="100" y2="100"></line>
<line x1="0" x2="800" y1="50" y2="50"></line>
</g>

<g className="labels" fill="#64748B" fontFamily="sans-serif" fontSize="10">
<text text-anchor="end" x="-10" y="250">0</text>
<text text-anchor="end" x="-10" y="200">20</text>
<text text-anchor="end" x="-10" y="150">40</text>
<text text-anchor="end" x="-10" y="100">60</text>
<text text-anchor="end" x="-10" y="50">80</text>
<text text-anchor="end" x="-10" y="5">100</text>
</g>

<path className="animate-fade-in delay-700 opacity-0" d="M0,250 C100,100 200,120 300,110 S400,30 450,40 S600,100 700,150 S800,250 800,250 Z" fill="url(#chartGradient)"></path>

<path className="animate-draw-line" d="M0,250 C100,100 200,120 300,110 S400,30 450,40 S600,100 700,150 S800,250 800,250" fill="none" id="graph-line" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.3))'}}></path>

<g className="points opacity-0 animate-fade-in delay-700">
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="114" cy="130" data-day="Mon" data-value="42 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="228" cy="115" data-day="Tue" data-value="51 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="342" cy="110" data-day="Wed" data-value="58 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="456" cy="40" data-day="Thu" data-value="86 Tasks" fill="#F1F5F9" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="570" cy="110" data-day="Fri" data-value="60 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="684" cy="145" data-day="Sat" data-value="41 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
<circle className="cursor-pointer hover:r-6 transition-all duration-300" cx="798" cy="200" data-day="Sun" data-value="22 Tasks" fill="#0B0F19" r="4" stroke="#60A5FA" strokeWidth="2"></circle>
</g>

<g className="opacity-0 animate-fade-in delay-700" transform="translate(456, 20)">
<rect fill="#1E293B" height="24" rx="4" stroke="rgba(255,255,255,0.1)" width="120" x="-60" y="-20"></rect>
<text fill="#E2E8F0" fontSize="11" font-weight="500" text-anchor="middle" x="0" y="-4">Thursday: 56 Tasks</text>
</g>

<g className="labels" fill="#64748B" fontFamily="sans-serif" fontSize="11">
<text text-anchor="middle" x="114" y="275">Mon</text>
<text text-anchor="middle" x="228" y="275">Tue</text>
<text text-anchor="middle" x="342" y="275">Wed</text>
<text fill="#E2E8F0" font-weight="600" text-anchor="middle" x="456" y="275">Thu</text>
<text text-anchor="middle" x="570" y="275">Fri</text>
<text text-anchor="middle" x="684" y="275">Sat</text>
<text text-anchor="middle" x="790" y="275">Sun</text>
</g>
</svg>
</div>
<div className="mt-4 text-center">
<span className="text-sm text-slate-400">Tasks Completed <strong className="text-white">215 Tasks</strong></span>
</div>
</div>

<div className="bg-card rounded-xl border border-border p-6 shadow-lg animate-enter delay-500">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-white tracking-tight">Team Workload</h3>
<a className="text-xs text-emerald-500 font-medium hover:text-emerald-400 flex items-center gap-1 transition-colors duration-200" href="#">
                                View all <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="space-y-6" id="team-workload-list">

<div className="group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors duration-200 workload-item" data-user="Wade Warren">
<div className="flex justify-between items-center mb-2 pointer-events-none">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-slate-700" src="https://i.pravatar.cc/150?u=3"/>
<span className="text-sm text-slate-200 font-medium">Wade Warren</span>
</div>
<span className="text-xs font-semibold text-slate-300">95%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden pointer-events-none">
<div className="h-full bg-warning rounded-full progress-bar" data-width="95%" style={{width: '0%'}}></div>
</div>
</div>

<div className="group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors duration-200 workload-item" data-user="Esther Howard">
<div className="flex justify-between items-center mb-2 pointer-events-none">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-slate-700" src="https://i.pravatar.cc/150?u=4"/>
<span className="text-sm text-slate-200 font-medium">Esther Howard</span>
</div>
<span className="text-xs font-semibold text-slate-300">61%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden pointer-events-none">
<div className="h-full bg-success rounded-full progress-bar" data-width="61%" style={{width: '0%'}}></div>
</div>
</div>

<div className="group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors duration-200 workload-item" data-burnout="true" data-user="Leslie Alexander">
<div className="flex justify-between items-center mb-2 pointer-events-none">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-slate-700" src="https://i.pravatar.cc/150?u=5"/>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-200 font-medium">Leslie Alexander</span>
<span className="bg-red-500/20 text-red-400 border border-red-500/20 text-[10px] px-1.5 rounded font-medium">Burnout Risk</span>
</div>
</div>
<span className="text-xs font-semibold text-red-400">105%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden pointer-events-none">
<div className="h-full bg-danger rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)] progress-bar" data-width="100%" style={{width: '0%'}}></div>
</div>
</div>

<div className="group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors duration-200 workload-item" data-user="Guy Hawkins">
<div className="flex justify-between items-center mb-2 pointer-events-none">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-slate-700" src="https://i.pravatar.cc/150?u=6"/>
<span className="text-sm text-slate-200 font-medium">Guy Hawkins</span>
</div>
<span className="text-xs font-semibold text-slate-300">30%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden pointer-events-none">
<div className="h-full bg-slate-600 rounded-full progress-bar" data-width="30%" style={{width: '0%'}}></div>
</div>
</div>

<div className="group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors duration-200 workload-item" data-user="Brooklyn Simmons">
<div className="flex justify-between items-center mb-2 pointer-events-none">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-slate-700" src="https://i.pravatar.cc/150?u=7"/>
<span className="text-sm text-slate-200 font-medium">Brooklyn Simmons</span>
</div>
<span className="text-xs font-semibold text-slate-300">52%</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden pointer-events-none">
<div className="h-full bg-success rounded-full progress-bar" data-width="52%" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-card rounded-xl border border-border overflow-hidden shadow-lg animate-enter delay-600">
<div className="p-5 border-b border-border flex flex-col sm:flex-row justify-between items-center gap-4">
<h3 className="text-lg font-medium text-white tracking-tight">Priority Projects</h3>
<div className="flex items-center gap-4">
<div className="relative">
<button className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg hover:text-white transition-all duration-200 active:scale-95">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon> All Status <iconify-icon className="ml-1" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
<a className="text-xs text-emerald-500 font-medium hover:text-emerald-400 flex items-center gap-1 transition-colors duration-200" href="#">
                                View all <iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-border bg-slate-900/30 text-xs font-medium text-slate-500 uppercase tracking-wider">
<th className="px-6 py-4 font-semibold">Project Name</th>
<th className="px-6 py-4 font-semibold">Status</th>
<th className="px-6 py-4 font-semibold w-1/4">Progress</th>
<th className="px-6 py-4 font-semibold">Team</th>
<th className="px-6 py-4 font-semibold">Due Date</th>
<th className="px-6 py-4 text-right font-semibold">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-border">

<tr className="group hover:bg-white/[0.03] transition-colors duration-300">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="logos:figma" width="16"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">Saas Redesign</p>
<p className="text-xs text-slate-500">UI/UX Phase</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> On Track
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
<span>Tasks</span>
<span className="text-slate-200">24/40</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full progress-bar" data-width="60%" style={{width: '0%'}}></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-[-4px]">
<img alt="" className="w-7 h-7 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=8"/>
<img alt="" className="w-7 h-7 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=9"/>
<div className="w-7 h-7 rounded-full border-2 border-card bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-medium">+4</div>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Jan 14, 2026</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-slate-500 hover:text-white transition-colors duration-200 active:scale-90"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.03] transition-colors duration-300">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">Payment Integration</p>
<p className="text-xs text-slate-500">Backend API</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-700/30 text-slate-400 border border-slate-700/50">
<span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span> Paused
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
<span>Tasks</span>
<span className="text-slate-200">16/28</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-slate-500 rounded-full progress-bar" data-width="45%" style={{width: '0%'}}></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-[-4px]">
<img alt="" className="w-7 h-7 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=10"/>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Jan 20, 2026</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-slate-500 hover:text-white transition-colors duration-200 active:scale-90"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.03] transition-colors duration-300">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">Security Audit Log</p>
<p className="text-xs text-slate-500">DevOps</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> In Progress
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
<span>Tasks</span>
<span className="text-slate-200">12/32</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full progress-bar" data-width="38%" style={{width: '0%'}}></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-[-4px]">
<img alt="" className="w-7 h-7 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=11"/>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Jan 26, 2026</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-slate-500 hover:text-white transition-colors duration-200 active:scale-90"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-white/[0.03] transition-colors duration-300">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:bug-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-200 group-hover:text-white transition-colors duration-200">Authentication Fix</p>
<p className="text-xs text-slate-500">DevOps</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Review
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
<span>Tasks</span>
<span className="text-slate-200">06/10</span>
</div>
<div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full progress-bar" data-width="60%" style={{width: '0%'}}></div>
</div>
</td>
<td className="px-6 py-4">
<div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-[-4px]">
<img alt="" className="w-7 h-7 rounded-full border-2 border-card" src="https://i.pravatar.cc/150?u=12"/>
<div className="w-7 h-7 rounded-full border-2 border-card bg-slate-800 flex items-center justify-center text-[10px] text-slate-400 font-medium">+2</div>
</div>
</td>
<td className="px-6 py-4 text-slate-400">Jan 10, 2026</td>
<td className="px-6 py-4 text-right">
<button className="p-1 text-slate-500 hover:text-white transition-colors duration-200 active:scale-90"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="h-8"></div>
</div>
</main>


<div className="fixed inset-0 z-40 bg-transparent hidden" id="task-modal-backdrop"></div>
<div className="fixed z-50 w-[340px] opacity-0 translate-y-2 pointer-events-none transition-all duration-200 ease-smooth" id="task-modal">

<div className="bg-[#1A2333] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">

<div className="px-4 pt-4 pb-2">
<h4 className="text-sm font-medium text-slate-200">3 Assigned Tasks</h4>
</div>

<div className="flex flex-col">

<div className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors cursor-pointer">
<label className="custom-checkbox relative flex items-center justify-center w-4 h-4 cursor-pointer">
<input className="peer appearance-none w-4 h-4 absolute inset-0 opacity-0 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 border border-slate-600 rounded bg-slate-800/50 transition-colors flex items-center justify-center peer-hover:border-slate-500">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-sm text-slate-300 flex-1 truncate">Review Q1 Design</span>
<span className="text-xs text-slate-500 font-medium">Mon, Jan 19</span>
</div>

<div className="relative flex items-center gap-3 px-4 py-2.5 bg-orange-500/10 border-y border-orange-500/10 cursor-pointer transition-colors">
<div className="w-4 h-4 flex items-center justify-center rounded bg-orange-500/20 text-orange-400">
<iconify-icon icon="solar:danger-triangle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-orange-200 flex-1 truncate font-medium">Auth Flow Bug</span>
<span className="text-xs text-orange-300/60 font-medium">Mon, Jan 19</span>
</div>

<div className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors cursor-pointer">
<label className="custom-checkbox relative flex items-center justify-center w-4 h-4 cursor-pointer">
<input className="peer appearance-none w-4 h-4 absolute inset-0 opacity-0 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 border border-slate-600 rounded bg-slate-800/50 transition-colors flex items-center justify-center peer-hover:border-slate-500">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-sm text-slate-300 flex-1 truncate">Checkout UI</span>
<span className="text-xs text-slate-500 font-medium">Tues, Jan 20</span>
</div>

<div className="overflow-hidden transition-all duration-300 max-h-0 opacity-0" id="modal-expanded-tasks">
<div className="group flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors cursor-pointer border-t border-white/5">
<label className="custom-checkbox relative flex items-center justify-center w-4 h-4 cursor-pointer">
<input className="peer appearance-none w-4 h-4 absolute inset-0 opacity-0 cursor-pointer" type="checkbox"/>
<div className="w-4 h-4 border border-slate-600 rounded bg-slate-800/50 transition-colors flex items-center justify-center peer-hover:border-slate-500">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
</label>
<span className="text-sm text-slate-300 flex-1 truncate">Documentation Update</span>
<span className="text-xs text-slate-500 font-medium">Wed, Jan 21</span>
</div>
</div>

<button className="px-4 py-2 text-left text-xs font-medium text-slate-500 hover:text-slate-300 transition-colors focus:outline-none flex items-center gap-1 group" id="modal-expander">
<span className="group-hover:translate-x-0.5 transition-transform duration-200">+ 1 more...</span>
</button>
</div>

<div className="bg-[#151b28] p-3 pt-0">

<div className="relative h-4 w-full -mt-2 mb-1 overflow-visible pointer-events-none">
<svg className="absolute left-8 top-0 text-slate-600/30" fill="none" height="20" viewbox="0 0 40 20" width="40">
<path d="M1 0C1 8 8 15 16 15H30" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
<path d="M26 11L30 15L26 19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
</svg>
</div>

<div className="bg-[#1E293B]/50 border border-white/5 rounded-lg p-2.5 mb-3 flex items-start gap-2">
<p className="text-xs leading-relaxed text-slate-300">
<span className="font-semibold text-slate-200">Suggestion:</span> Reassign "Auth Flow Bug" to <span className="text-slate-200">Guy Hawkins</span>
</p>
</div>

<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#26334D] border border-white/10 text-slate-200 text-xs font-medium py-1.5 rounded-md transition-all duration-200 active:scale-95 group">
<iconify-icon className="group-hover:rotate-180 transition-transform duration-500" icon="solar:restart-linear" width="14"></iconify-icon>
                        Reassign
                    </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-[#26334D] border border-white/10 text-slate-200 text-xs font-medium py-1.5 rounded-md transition-all duration-200 active:scale-95">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        Extend
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
