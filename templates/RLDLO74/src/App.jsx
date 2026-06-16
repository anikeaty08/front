import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        let isOpen = false;

        // Tab functionality
        document.querySelectorAll('.pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const tabName = btn.getAttribute('data-tab');
                
                // If clicking the same active tab and sidebar is open, close it
                if (btn.classList.contains('active') && isOpen) {
                    closeSidebar();
                    return;
                }
                
                // Remove active states from all buttons
                document.querySelectorAll('.pill-btn').forEach(b => {
                    b.classList.remove('active');
                    b.style.background = '';
                    b.setAttribute('aria-selected', 'false');
                    const icon = b.querySelector('i');
                    if (icon) {
                        icon.classList.remove('text-cyan-400');
                        icon.classList.add('text-white/60');
                    }
                });
                
                // Hide all tab contents
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });

                // Add active state to clicked tab
                btn.classList.add('active');
                btn.style.background = 'rgba(0, 212, 255, 0.2)';
                btn.setAttribute('aria-selected', 'true');
                const activeIcon = btn.querySelector('i');
                if (activeIcon) {
                    activeIcon.classList.remove('text-white/60');
                    activeIcon.classList.add('text-cyan-400');
                }
                
                // Show corresponding content
                const content = document.getElementById(tabName + '-content');
                if (content) {
                    content.classList.remove('hidden');
                }
                
                // Open sidebar
                openSidebar();
            });
        });

        function openSidebar() {
            isOpen = true;
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('backdrop');
            
            if (backdrop) {
                backdrop.style.opacity = '1';
                backdrop.style.pointerEvents = 'auto';
            }
            
            if (sidebar) {
                sidebar.style.opacity = '1';
                sidebar.style.transform = 'translateY(-50%) scale(1)';
                sidebar.style.pointerEvents = 'auto';
            }
        }

        function closeSidebar() {
            isOpen = false;
            const sidebar = document.getElementById('sidebar');
            const backdrop = document.getElementById('backdrop');
            
            if (backdrop) {
                backdrop.style.opacity = '0';
                backdrop.style.pointerEvents = 'none';
            }
            
            if (sidebar) {
                sidebar.style.opacity = '0';
                sidebar.style.transform = 'translateY(-50%) scale(0.95)';
                sidebar.style.pointerEvents = 'none';
            }
            
            // Remove active states
            document.querySelectorAll('.pill-btn').forEach(b => {
                b.classList.remove('active');
                b.style.background = '';
                b.setAttribute('aria-selected', 'false');
                const icon = b.querySelector('i');
                if (icon) {
                    icon.classList.remove('text-cyan-400');
                    icon.classList.add('text-white/60');
                }
            });
        }

        // Close sidebar when clicking backdrop
        document.getElementById('backdrop').addEventListener('click', closeSidebar);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50" id="pillMenu">
<div className="flex flex-col rounded-full p-1 pill-menu">
<button aria-selected="true" className="pill-btn active group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200" data-tab="daily" role="tab" style={{background: 'rgba(0, 212, 255, 0.2)'}}>
<i className="w-5 h-5 text-cyan-400 transition-colors" data-lucide="sun"></i>
<div className="absolute right-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Daily</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="tasks" role="tab">
<i className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="check-square"></i>
<div className="absolute right-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Tasks</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="projects" role="tab">
<i className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="folder"></i>
<div className="absolute right-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Projects</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="calendar" role="tab">
<i className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="calendar"></i>
<div className="absolute right-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Calendar</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="inbox" role="tab">
<i className="w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="inbox"></i>
<div className="absolute right-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Inbox</div>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="backdrop" style={{backdropFilter: 'blur(8px)'}}></div>

<div className="fixed right-20 top-1/2 transform -translate-y-1/2 w-80 z-50 opacity-0 scale-95 pointer-events-none transition-all duration-400" id="sidebar" style={{height: '80vh', maxHeight: '600px'}}>
<div className="h-full rounded-3xl overflow-hidden glass-panel">

<div className="p-6 border-b border-white/10 fade-in stagger-1">
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Actions</h2>
<button className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200" onclick="closeSidebar()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>

<div className="h-full p-6 overflow-y-auto scrollbar-custom">

<div className="tab-content" id="daily-content">
<div className="space-y-6">

<div className="glass-card rounded-xl p-4 fade-in stagger-2">
<h3 className="font-semibold mb-3 flex items-center" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
<i className="w-4 h-4 mr-2 text-orange-400" data-lucide="sunrise"></i>
                                Morning Checklist
                            </h3>
<div className="space-y-2">
<label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-5 h-5 rounded-md border-2 border-cyan-400 flex items-center justify-center bg-cyan-500/20">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<span className="text-sm" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Review daily goals</span>
</label>
<label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-5 h-5 rounded-md border-2 border-white/30"></div>
<span className="text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Check weather &amp; news</span>
</label>
<label className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-5 h-5 rounded-md border-2 border-white/30"></div>
<span className="text-sm" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Plan top 3 priorities</span>
</label>
</div>
</div>

<div className="glass-card rounded-xl p-4 fade-in stagger-3">
<h3 className="font-semibold mb-3" style={{color: 'rgba(255, 255, 255, 0.95)'}}>How are you feeling?</h3>
<div className="flex justify-between">
<button className="w-11 h-11 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition-all duration-200 hover:scale-110 flex items-center justify-center mood-emoji">😔</button>
<button className="w-11 h-11 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 transition-all duration-200 hover:scale-110 flex items-center justify-center mood-emoji">😐</button>
<button className="w-11 h-11 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 transition-all duration-200 hover:scale-110 flex items-center justify-center mood-emoji shadow-lg shadow-cyan-400/20">🙂</button>
<button className="w-11 h-11 rounded-xl bg-green-500/20 hover:bg-green-500/30 transition-all duration-200 hover:scale-110 flex items-center justify-center mood-emoji">😊</button>
<button className="w-11 h-11 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 transition-all duration-200 hover:scale-110 flex items-center justify-center mood-emoji">🚀</button>
</div>
</div>

<div className="glass-card rounded-xl p-4 fade-in stagger-4">
<h3 className="font-semibold mb-3 flex items-center" style={{color: 'rgba(255, 255, 255, 0.95)'}}>
<i className="w-4 h-4 mr-2 text-purple-400" data-lucide="moon"></i>
                                Evening Reflection
                            </h3>
<textarea className="w-full h-24 bg-black/20 rounded-lg p-3 text-sm border border-white/10 focus:border-cyan-400/50 transition-colors resize-none" placeholder="What went well today?" style={{color: 'rgba(255, 255, 255, 0.95)'}}></textarea>
</div>
</div>
</div>

<div className="tab-content hidden" id="tasks-content">

<div className="glass-card rounded-xl p-4 mb-6 fade-in stagger-1">
<div className="flex space-x-2">
<input className="flex-1 bg-black/20 rounded-lg p-3 text-sm border border-white/10 focus:border-cyan-400/50 transition-colors" placeholder="Add new task..." style={{color: 'rgba(255, 255, 255, 0.95)'}} type="text"/>
<button className="px-4 py-3 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="space-y-3">
<div className="glass-card rounded-xl p-4 priority-high fade-in stagger-2">
<div className="flex items-center space-x-3">
<div className="w-5 h-5 rounded-md border-2 border-white/30"></div>
<div className="flex-1">
<p className="text-sm font-medium" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Review quarterly report</p>
<p className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Due today • High priority</p>
</div>
<i className="w-4 h-4 text-white/40" data-lucide="grip-vertical"></i>
</div>
</div>
<div className="glass-card rounded-xl p-4 priority-medium fade-in stagger-3">
<div className="flex items-center space-x-3">
<div className="w-5 h-5 rounded-md border-2 border-cyan-400 flex items-center justify-center bg-cyan-500/20">
<i className="w-3 h-3 text-cyan-400" data-lucide="check"></i>
</div>
<div className="flex-1">
<p className="text-sm font-medium line-through" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Call client about proposal</p>
<p className="text-xs" style={{color: 'rgba(255, 255, 255, 0.4)'}}>Completed 2h ago</p>
</div>
<i className="w-4 h-4 text-white/40" data-lucide="grip-vertical"></i>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="projects-content">
<div className="space-y-4">
<div className="glass-card rounded-xl p-4 fade-in stagger-1">
<div className="flex items-center justify-between mb-3">
<h3 className="font-semibold" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Website Redesign</h3>
<span className="text-xs px-2 py-1 rounded-lg bg-green-500/20 text-green-400">Active</span>
</div>
<div className="mb-3">
<div className="flex justify-between text-xs mb-1" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<span>Progress</span>
<span>75%</span>
</div>
<div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" style={{width: '75%'}}></div>
</div>
</div>
<div className="flex items-center space-x-2 text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<i className="w-3 h-3" data-lucide="users"></i>
<span>4 members</span>
<i className="w-3 h-3 ml-2" data-lucide="calendar"></i>
<span>Due Dec 15</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="calendar-content">
<div className="space-y-2 fade-in stagger-1">
<div className="text-center py-2 text-sm font-semibold" style={{color: 'rgba(255, 255, 255, 0.8)'}}>Today, Dec 12</div>
<div className="glass-card rounded-xl p-3">
<div className="flex items-center space-x-3">
<div className="text-xs font-medium w-12" style={{color: 'rgba(255, 255, 255, 0.6)'}}>9:00</div>
<div className="flex-1">
<p className="text-sm font-medium" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Team standup</p>
<p className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>30 min • Conference room A</p>
</div>
<div className="w-3 h-3 rounded-full bg-cyan-400"></div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="inbox-content">
<div className="space-y-3 fade-in stagger-1">
<div className="glass-card rounded-xl p-4">
<div className="flex items-start space-x-3">
<img className="w-8 h-8 rounded-lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&amp;h=32&amp;fit=crop&amp;crop=face"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Alex Johnson</p>
<p className="text-xs truncate" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Hey, can we review the wireframes today?</p>
<p className="text-xs mt-1" style={{color: 'rgba(255, 255, 255, 0.4)'}}>2 min ago</p>
</div>
<div className="w-2 h-2 rounded-full bg-cyan-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
