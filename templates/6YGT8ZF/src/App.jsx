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
                console.log('Button clicked:', btn.getAttribute('data-tab'));
                
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
            console.log('Opening sidebar');
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
            console.log('Closing sidebar');
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

        // Initialize charts after DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                // Pathway Chart
                const pathwayCtx = document.getElementById('pathwayChart');
                if (pathwayCtx) {
                    new Chart(pathwayCtx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Progress',
                                data: [20, 35, 45, 60, 70, 85],
                                borderColor: '#00D4FF',
                                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                                tension: 0.4,
                                fill: true,
                                borderWidth: 2,
                                pointRadius: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { display: false },
                                y: { display: false }
                            }
                        }
                    });
                }

                // Performance Chart
                const performanceCtx = document.getElementById('performanceChart');
                if (performanceCtx) {
                    new Chart(performanceCtx, {
                        type: 'line',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Performance',
                                data: [65, 78, 82, 90],
                                borderColor: '#8B5CF6',
                                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                                tension: 0.4,
                                fill: true,
                                borderWidth: 2,
                                pointRadius: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: {
                                x: { display: false },
                                y: { display: false }
                            }
                        }
                    });
                }
            }, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 opacity-30">
<div className="absolute top-20 left-20 w-96 h-96 mix-blend-multiply filter opacity-20 animate-pulse bg-cyan-400 rounded-full blur-3xl"></div>
<div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-20 left-40 w-96 h-96 mix-blend-multiply filter opacity-20 animate-pulse bg-pink-400 rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
</div>

<div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50" id="pillMenu" style={{backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)'}}>
<div className="flex flex-col rounded-full pt-1 pr-1 pb-1 pl-1" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)'}}>
<button aria-selected="true" className="pill-btn active group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200" data-tab="profile" role="tab" style={{background: 'rgba(0, 212, 255, 0.2)'}}>
<svg className="lucide lucide-user w-5 h-5 text-cyan-400 transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<div className="absolute left-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Profile Hub</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="guide" role="tab">
<svg className="lucide lucide-compass w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="absolute left-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Guide</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="northstar" role="tab">
<svg className="lucide lucide-star w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<div className="absolute left-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Northstar</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="pathway" role="tab">
<svg className="lucide lucide-route w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<div className="absolute left-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Pathway</div>
</button>
<button aria-selected="false" className="pill-btn group relative w-12 h-12 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10" data-tab="performance" role="tab">
<svg className="lucide lucide-trending-up w-5 h-5 text-white/60 group-hover:text-cyan-400 transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div className="absolute left-16 bg-slate-900/95 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">Performance</div>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/40 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="backdrop" style={{backdropFilter: 'blur(8px)'}}></div>

<div className="fixed left-20 top-1/2 transform -translate-y-1/2 w-64 z-50 opacity-0 scale-95 pointer-events-none transition-all duration-400" id="sidebar" style={{height: '80vh', maxHeight: '600px'}}>

<div className="h-full rounded-3xl overflow-hidden" style={{background: 'rgba(30, 35, 55, 0.6)', backdropFilter: 'blur(40px) saturate(180%)', WebkitBackdropFilter: 'blur(40px) saturate(180%)', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255,255,255,0.15)'}}>

<div className="h-full p-5 overflow-y-auto">

<div className="tab-content" id="profile-content">
<div className="text-center mb-6">
<div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-cyan-400/30" style={{background: 'linear-gradient(135deg, #00D4FF, #8B5CF6)'}}>
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&amp;h=120&amp;fit=crop&amp;crop=face"/>
</div>
<h2 className="text-lg font-semibold text-white mb-2 tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Alex Chen</h2>
<div className="rounded-xl p-3 mb-4" style={{background: 'rgba(255,255,255,0.05)'}}>
<div className="flex justify-between text-xs mb-1" style={{color: 'rgba(255, 255, 255, 0.6)'}}>
<span>Level 12</span>
<span>2,847 XP</span>
</div>
<div className="w-full bg-slate-700/50 rounded-full h-2">
<div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-500" style={{width: '67%'}}></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xl font-semibold text-white mb-1">47</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Goals</div>
</div>
<div className="rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xl font-semibold text-cyan-400 mb-1">12</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Streak</div>
</div>
<div className="rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xl font-semibold text-purple-400 mb-1">89%</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Success</div>
</div>
<div className="rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xl font-semibold mb-1" style={{color: '#FF006E'}}>4.8</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Rating</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="guide-content">
<h3 className="text-lg font-semibold mb-4 tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Insights</h3>
<div className="mb-6">
<div className="w-32 h-32 mx-auto relative">
<svg className="w-full h-full" viewbox="0 0 200 200">
<circle cx="80" cy="70" fill="rgba(0,212,255,0.3)" r="35" stroke="#00D4FF" strokeWidth="2"></circle>
<circle cx="120" cy="70" fill="rgba(139,92,246,0.3)" r="35" stroke="#8B5CF6" strokeWidth="2"></circle>
<circle cx="100" cy="110" fill="rgba(255,0,110,0.3)" r="35" stroke="#FF006E" strokeWidth="2"></circle>
</svg>
</div>
</div>
<div className="space-y-3">
<div className="rounded-xl p-3" style={{background: 'linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,212,255,0.05))', border: '1px solid rgba(0,212,255,0.2)'}}>
<div className="font-medium text-cyan-300 text-sm mb-1">Analytical</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Strong logical reasoning</div>
</div>
<div className="rounded-xl p-3" style={{background: 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(139,92,246,0.05))', border: '1px solid rgba(139,92,246,0.2)'}}>
<div className="font-medium text-purple-300 text-sm mb-1">Creative</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Innovative solutions</div>
</div>
<div className="rounded-xl p-3" style={{background: 'linear-gradient(135deg, rgba(255,0,110,0.2), rgba(255,0,110,0.05))', border: '1px solid rgba(255,0,110,0.2)'}}>
<div className="font-medium text-sm mb-1" style={{color: '#FF006E'}}>Collaborative</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Team leadership</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="northstar-content">
<h3 className="text-lg font-semibold mb-6 tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Roadmap</h3>
<div className="relative">
<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center ring-4 ring-cyan-400/20">
<svg className="lucide lucide-check w-4 h-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1 rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="font-medium text-sm mb-1" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Frontend Cert</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Complete</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center ring-4 ring-purple-400/20 animate-pulse">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<div className="flex-1 rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="font-medium text-sm mb-1" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Personal Project</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>70% complete</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center ring-4 ring-slate-600/20">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
</div>
<div className="flex-1 rounded-xl p-3" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="font-medium text-sm mb-1" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Senior Role</div>
<div className="text-xs" style={{color: 'rgba(255, 255, 255, 0.6)'}}>6 months</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="pathway-content">
<h3 className="text-lg font-semibold mb-4 tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Trajectory</h3>
<div className="rounded-xl p-3 mb-4" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div style={{height: '150px'}}>
<canvas height="0" id="pathwayChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
<div className="space-y-2">
<div className="text-center p-2 rounded-xl" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xs font-medium text-cyan-400">Career ↗</div>
</div>
<div className="text-center p-2 rounded-xl" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xs font-medium text-purple-400">Skills ↗</div>
</div>
<div className="text-center p-2 rounded-xl" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div className="text-xs font-medium" style={{color: '#FF006E'}}>Wellness →</div>
</div>
</div>
</div>

<div className="tab-content hidden" id="performance-content">
<h3 className="text-lg font-semibold mb-4 tracking-tight" style={{color: 'rgba(255, 255, 255, 0.95)'}}>Analytics</h3>
<div className="rounded-xl p-3 mb-4" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)'}}>
<div style={{height: '120px'}}>
<canvas height="0" id="performanceChart" style={{display: 'block', boxSizing: 'border-box', height: '0px', width: '0px'}} width="0"></canvas>
</div>
</div>
<div className="mb-4">
<h4 className="text-xs font-medium mb-2" style={{color: 'rgba(255, 255, 255, 0.6)'}}>Habit Tracker</h4>
<div className="grid grid-cols-7 gap-1">
<div className="w-5 h-5 rounded bg-cyan-400 opacity-80"></div>
<div className="w-5 h-5 rounded bg-cyan-400"></div>
<div className="w-5 h-5 rounded bg-slate-600"></div>
<div className="w-5 h-5 rounded bg-cyan-400"></div>
<div className="w-5 h-5 rounded bg-cyan-400"></div>
<div className="w-5 h-5 rounded bg-cyan-400 opacity-60"></div>
<div className="w-5 h-5 rounded bg-slate-600"></div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
