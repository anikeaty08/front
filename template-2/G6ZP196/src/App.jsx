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



        // Initialize Lucide icons
        lucide.createIcons();

        // Widget interaction functionality
        document.addEventListener('DOMContentLoaded', function() {
            const widgets = document.querySelectorAll('.widget-card');
            const modal = document.getElementById('modal-overlay');
            const modalTitle = document.getElementById('modal-title');
            const modalBody = document.getElementById('modal-body');
            const closeModal = document.getElementById('close-modal');

            // Make grid sortable
            const grid = document.getElementById('dashboard-grid');
            new Sortable(grid, {
                animation: 300,
                ghostClass: 'sortable-ghost',
                dragClass: 'sortable-drag',
                handle: '.drag-indicator',
                forceFallback: true,
                fallbackTolerance: 3
            });

            // Widget click handlers
            widgets.forEach(widget => {
                widget.addEventListener('click', function(e) {
                    if (e.target.closest('.drag-indicator')) return;
                    
                    const widgetType = this.dataset.widget;
                    openModal(widgetType);
                });
            });

            // Modal functionality
            function openModal(widgetType) {
                const content = getModalContent(widgetType);
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.body;
                
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.querySelector('#modal-content').classList.remove('scale-95');
                }, 10);
                
                lucide.createIcons();
            }

            function closeModalHandler() {
                modal.classList.add('opacity-0');
                modal.querySelector('#modal-content').classList.add('scale-95');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 400);
            }

            closeModal.addEventListener('click', closeModalHandler);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) closeModalHandler();
            });

            // Escape key handler
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                    closeModalHandler();
                }
            });

            // Modal content generator
            function getModalContent(widgetType) {
                const contents = {
                    tasks: {
                        title: 'Task Manager',
                        body: `
                            <div class="space-y-6">
                                <div class="grid grid-cols-2 gap-4 mb-6">
                                    <div class="glass-card p-4 text-center">
                                        <div class="text-2xl font-bold accent-text mb-1">3</div>
                                        <div class="text-xs text-secondary">Completed</div>
                                    </div>
                                    <div class="glass-card p-4 text-center">
                                        <div class="text-2xl font-bold text-orange-400 mb-1">4</div>
                                        <div class="text-xs text-secondary">Remaining</div>
                                    </div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h3 class="font-medium text-sm title-text mb-3">All Tasks</h3>
                                    <div class="space-y-3">
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" checked class="custom-checkbox">
                                            <span class="text-sm text-secondary line-through">Review reports</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" checked class="custom-checkbox">
                                            <span class="text-sm text-secondary line-through">Update documentation</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" checked class="custom-checkbox">
                                            <span class="text-sm text-secondary line-through">Code review</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" class="custom-checkbox">
                                            <span class="text-sm text-white-primary">Team meeting</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" class="custom-checkbox">
                                            <span class="text-sm text-white-primary">Update dashboard</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" class="custom-checkbox">
                                            <span class="text-sm text-white-primary">Client presentation</span>
                                        </label>
                                        <label class="flex items-center space-x-3 cursor-pointer p-3 glass-card">
                                            <input type="checkbox" class="custom-checkbox">
                                            <span class="text-sm text-white-primary">Deploy updates</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    calendar: {
                        title: 'Upcoming Events',
                        body: `
                            <div class="space-y-6">
                                <div class="glass-card p-4">
                                    <div class="flex items-center justify-between mb-4">
                                        <h3 class="font-medium text-sm title-text">Next Milestone</h3>
                                        <div class="flex items-center space-x-1 accent-text">
                                            <i data-lucide="clock" class="w-4 h-4"></i>
                                            <span class="text-xs">Urgent</span>
                                        </div>
                                    </div>
                                    <div class="text-lg font-semibold mb-2 title-text">Product Launch</div>
                                    <div class="text-sm text-secondary mb-4">Final preparations and go-live</div>
                                    <div class="flex items-center space-x-6 text-center">
                                        <div>
                                            <div class="text-xl font-bold accent-text">2</div>
                                            <div class="text-xs text-secondary">Days</div>
                                        </div>
                                        <div>
                                            <div class="text-xl font-bold text-white-primary">14</div>
                                            <div class="text-xs text-secondary">Hours</div>
                                        </div>
                                        <div>
                                            <div class="text-xl font-bold text-white-primary">23</div>
                                            <div class="text-xs text-secondary">Minutes</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="space-y-3">
                                    <h3 class="font-medium text-sm title-text">This Week</h3>
                                    <div class="space-y-2">
                                        <div class="glass-card p-3">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <div class="font-medium text-sm">Team Standup</div>
                                                    <div class="text-xs text-secondary">Daily sync meeting</div>
                                                </div>
                                                <div class="text-xs accent-text">Tomorrow 9:00 AM</div>
                                            </div>
                                        </div>
                                        <div class="glass-card p-3">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <div class="font-medium text-sm">Client Review</div>
                                                    <div class="text-xs text-secondary">Present latest updates</div>
                                                </div>
                                                <div class="text-xs accent-text">Wed 2:00 PM</div>
                                            </div>
                                        </div>
                                        <div class="glass-card p-3">
                                            <div class="flex justify-between items-start">
                                                <div>
                                                    <div class="font-medium text-sm">Sprint Planning</div>
                                                    <div class="text-xs text-secondary">Plan next iteration</div>
                                                </div>
                                                <div class="text-xs accent-text">Fri 10:00 AM</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    habits: {
                        title: 'Habit Tracking',
                        body: `
                            <div class="space-y-6">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <span class="text-2xl">🔥</span>
                                        <div>
                                            <div class="font-semibold text-lg accent-text">7 Day Streak</div>
                                            <div class="text-xs text-secondary">Keep it up!</div>
                                        </div>
                                    </div>
                                    <div class="text-center">
                                        <div class="text-lg font-bold">82%</div>
                                        <div class="text-xs text-secondary">Weekly Score</div>
                                    </div>
                                </div>
                                
                                <div class="space-y-6">
                                    <div class="glass-card p-4">
                                        <div class="flex items-center justify-between mb-4">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">💪</span>
                                                <div>
                                                    <div class="font-medium">Exercise</div>
                                                    <div class="text-xs text-secondary">7/7 this week</div>
                                                </div>
                                            </div>
                                            <div class="text-sm accent-text font-medium">Perfect!</div>
                                        </div>
                                        <div class="flex space-x-1 mb-3">
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient"></div>
                                            <div class="habit-dot completed primary-gradient glow-primary"></div>
                                        </div>
                                        <div class="text-xs text-secondary">Best streak: 12 days</div>
                                    </div>
                                    
                                    <div class="glass-card p-4">
                                        <div class="flex items-center justify-between mb-4">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">📚</span>
                                                <div>
                                                    <div class="font-medium">Reading</div>
                                                    <div class="text-xs text-secondary">5/7 this week</div>
                                                </div>
                                            </div>
                                            <div class="text-sm text-orange-400 font-medium">Good</div>
                                        </div>
                                        <div class="flex space-x-1 mb-3">
                                            <div class="habit-dot completed secondary-gradient"></div>
                                            <div class="habit-dot completed secondary-gradient"></div>
                                            <div class="habit-dot completed secondary-gradient"></div>
                                            <div class="habit-dot completed secondary-gradient"></div>
                                            <div class="habit-dot completed secondary-gradient"></div>
                                            <div class="habit-dot incomplete"></div>
                                            <div class="habit-dot incomplete"></div>
                                        </div>
                                        <div class="text-xs text-secondary">Current streak: 3 days</div>
                                    </div>
                                    
                                    <div class="glass-card p-4">
                                        <div class="flex items-center justify-between mb-4">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">🧘</span>
                                                <div>
                                                    <div class="font-medium">Meditation</div>
                                                    <div class="text-xs text-secondary">6/7 this week</div>
                                                </div>
                                            </div>
                                            <div class="text-sm accent-text font-medium">Great</div>
                                        </div>
                                        <div class="flex space-x-1 mb-3">
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot completed success-gradient"></div>
                                            <div class="habit-dot incomplete"></div>
                                        </div>
                                        <div class="text-xs text-secondary">Current streak: 6 days</div>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    xp: {
                        title: 'Level Progress',
                        body: `
                            <div class="space-y-6">
                                <div class="text-center glass-card p-6">
                                    <div class="text-4xl font-bold title-text mb-2">Level 12</div>
                                    <div class="level-badge mb-4">Productivity Master</div>
                                    <div class="progress-container mb-4">
                                        <div class="progress-bar" style="width: 89%;"></div>
                                    </div>
                                    <div class="flex justify-between text-sm">
                                        <span class="accent-text font-medium">2,847 XP</span>
                                        <span class="text-secondary">3,200 XP</span>
                                    </div>
                                    <div class="text-xs text-secondary mt-2">353 XP to next level</div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h3 class="font-medium title-text">Recent XP Gains</h3>
                                    <div class="space-y-2">
                                        <div class="glass-card p-3 flex justify-between items-center">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">✅</span>
                                                <span class="text-sm">Completed all tasks</span>
                                            </div>
                                            <span class="text-sm accent-text font-medium">+50 XP</span>
                                        </div>
                                        <div class="glass-card p-3 flex justify-between items-center">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">🔥</span>
                                                <span class="text-sm">7-day habit streak</span>
                                            </div>
                                            <span class="text-sm accent-text font-medium">+100 XP</span>
                                        </div>
                                        <div class="glass-card p-3 flex justify-between items-center">
                                            <div class="flex items-center space-x-3">
                                                <span class="text-lg">🎯</span>
                                                <span class="text-sm">Weekly goal achieved</span>
                                            </div>
                                            <span class="text-sm accent-text font-medium">+75 XP</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-4">
                                    <h3 class="font-medium title-text mb-3">Next Level Rewards</h3>
                                    <div class="space-y-2 text-sm">
                                        <div class="flex items-center space-x-2">
                                            <span class="text-lg">🏆</span>
                                            <span>New achievement badge</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-lg">🎨</span>
                                            <span>Unlock new dashboard themes</span>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <span class="text-lg">📊</span>
                                            <span>Advanced analytics dashboard</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    achievement: {
                        title: 'Achievements',
                        body: `
                            <div class="space-y-6">
                                <div class="text-center glass-card p-6">
                                    <div class="text-6xl mb-4 achievement-emoji">🏆</div>
                                    <h3 class="text-lg font-semibold title-text mb-2">Week Champion</h3>
                                    <p class="text-sm text-secondary mb-4">Completed all weekly goals and maintained perfect habit streaks</p>
                                    <div class="text-xs accent-text font-medium">Unlocked today</div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h3 class="font-medium title-text">Recent Achievements</h3>
                                    <div class="grid grid-cols-2 gap-3">
                                        <div class="glass-card p-4 text-center">
                                            <div class="text-3xl mb-2">🎯</div>
                                            <div class="text-xs font-medium mb-1">Goal Crusher</div>
                                            <div class="text-xs text-secondary">2 days ago</div>
                                        </div>
                                        <div class="glass-card p-4 text-center">
                                            <div class="text-3xl mb-2">📚</div>
                                            <div class="text-xs font-medium mb-1">Knowledge Seeker</div>
                                            <div class="text-xs text-secondary">5 days ago</div>
                                        </div>
                                        <div class="glass-card p-4 text-center">
                                            <div class="text-3xl mb-2">💪</div>
                                            <div class="text-xs font-medium mb-1">Fitness Warrior</div>
                                            <div class="text-xs text-secondary">1 week ago</div>
                                        </div>
                                        <div class="glass-card p-4 text-center">
                                            <div class="text-3xl mb-2">🧘</div>
                                            <div class="text-xs font-medium mb-1">Zen Master</div>
                                            <div class="text-xs text-secondary">1 week ago</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-4">
                                    <h3 class="font-medium title-text mb-3">Progress to Next Achievement</h3>
                                    <div class="space-y-3">
                                        <div>
                                            <div class="flex justify-between text-xs mb-1">
                                                <span>Consistency Master</span>
                                                <span class="accent-text">8/10 days</span>
                                            </div>
                                            <div class="progress-container">
                                                <div class="progress-bar" style="width: 80%;"></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex justify-between text-xs mb-1">
                                                <span>Task Dominator</span>
                                                <span class="accent-text">47/50 tasks</span>
                                            </div>
                                            <div class="progress-container">
                                                <div class="progress-bar" style="width: 94%;"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    ai: {
                        title: 'AI Assistant',
                        body: `
                            <div class="space-y-6">
                                <div class="ai-card glass-card p-4">
                                    <div class="flex items-center space-x-3 mb-4">
                                        <div class="ai-icon">
                                            <i data-lucide="sparkles" class="w-4 h-4"></i>
                                        </div>
                                        <div class="text-sm font-medium accent-text">Current Insight</div>
                                    </div>
                                    <p class="text-sm text-secondary leading-relaxed mb-4">Based on your habits, you're 23% more productive on days when you exercise in the morning. Consider scheduling workouts before 9 AM.</p>
                                    <div class="flex space-x-3">
                                        <button class="ai-button primary">Apply Suggestion</button>
                                        <button class="ai-button secondary">Remind Later</button>
                                    </div>
                                </div>
                                
                                <div class="space-y-4">
                                    <h3 class="font-medium title-text">Previous Insights</h3>
                                    <div class="space-y-3">
                                        <div class="glass-card p-4">
                                            <div class="flex items-start space-x-3">
                                                <div class="ai-icon flex-shrink-0">
                                                    <i data-lucide="trending-up" class="w-3 h-3"></i>
                                                </div>
                                                <div>
                                                    <div class="text-xs accent-text font-medium mb-1">Productivity Pattern</div>
                                                    <p class="text-xs text-secondary">Your task completion rate increases by 40% when you break large tasks into smaller chunks of 25-minute focused sessions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="glass-card p-4">
                                            <div class="flex items-start space-x-3">
                                                <div class="ai-icon flex-shrink-0">
                                                    <i data-lucide="clock" class="w-3 h-3"></i>
                                                </div>
                                                <div>
                                                    <div class="text-xs accent-text font-medium mb-1">Optimal Schedule</div>
                                                    <p class="text-xs text-secondary">You tend to be most creative between 2-4 PM. Consider scheduling design work and brainstorming during this window.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="glass-card p-4">
                                            <div class="flex items-start space-x-3">
                                                <div class="ai-icon flex-shrink-0">
                                                    <i data-lucide="target" class="w-3 h-3"></i>
                                                </div>
                                                <div>
                                                    <div class="text-xs accent-text font-medium mb-1">Habit Optimization</div>
                                                    <p class="text-xs text-secondary">Pairing meditation with your morning coffee ritual could help establish a stronger routine. 87% success rate observed with habit stacking.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-4">
                                    <h3 class="font-medium title-text mb-3">AI Analytics Summary</h3>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="text-center">
                                            <div class="text-lg font-bold accent-text">92%</div>
                                            <div class="text-xs text-secondary">Prediction Accuracy</div>
                                        </div>
                                        <div class="text-center">
                                            <div class="text-lg font-bold text-orange-400">+18%</div>
                                            <div class="text-xs text-secondary">Productivity Boost</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                };
                
                return contents[widgetType] || { title: 'Widget', body: 'No content available.' };
            }

            // Initialize animations
            setTimeout(() => {
                document.querySelectorAll('.animate-fade-in, .animate-fade-in-up').forEach(el => {
                    el.style.opacity = '1';
                });
            }, 100);
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
      

<div className="fixed inset-0 pointer-events-none opacity-20" style={{backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')`, mixBlendMode: `overlay`}}></div>

<div className="fixed inset-0 pointer-events-none background-gradient">

<div className="absolute top-0 left-1/4 w-96 h-96 aurora-glow aurora-cyan"></div>
<div className="absolute top-1/3 right-1/4 w-80 h-80 aurora-glow aurora-purple"></div>
<div className="absolute bottom-1/4 left-1/2 w-72 h-72 aurora-glow aurora-pink"></div>

<div className="absolute inset-0 gradient-mesh"></div>
</div>

<div className="fixed bottom-0 left-0 right-0 h-32 wave-reflection pointer-events-none"></div>
<div className="relative z-10 p-6" style={{padding: `24px`}}>
<header className="mb-8" style={{marginBottom: `32px`}}>
<h1 className="text-2xl font-display font-semibold mb-2 opacity-0 animate-fade-in title-glow" style={{fontSize: `24px`, lineHeight: `1.2`, letterSpacing: `-0.02em`, textShadow: `0 1px 2px rgba(0,0,0,0.3)`}}>Dashboard</h1>
<p className="text-secondary opacity-0 animate-fade-in" style={{fontSize: `13px`, color: `rgba(255, 255, 255, 0.6)`, textShadow: `0 1px 2px rgba(0,0,0,0.3)`, animationDelay: `0.1s`}}>Welcome back, your workspace is ready</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 auto-rows-min" id="dashboard-grid" style={{gap: `16px`}}>

<div className="widget-card col-span-1 row-span-1 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="tasks" style={{animationDelay: `0.2s`}}>
<div className="glass-card p-5 h-full relative overflow-hidden">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-sm title-text">Tasks</h3>
<span className="text-xs px-2 py-1 rounded-lg status-badge">3/7</span>
</div>
<div className="space-y-3">
<label className="flex items-center space-x-3 cursor-pointer group/task">
<input checked className="custom-checkbox" type="checkbox" />
<span className="text-xs text-secondary line-through body-text">Review reports</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group/task">
<input className="custom-checkbox" type="checkbox" />
<span className="text-xs text-white-primary body-text">Team meeting</span>
</label>
<label className="flex items-center space-x-3 cursor-pointer group/task">
<input className="custom-checkbox" type="checkbox" />
<span className="text-xs text-white-primary body-text">Update dashboard</span>
</label>
</div>
</div>
</div>

<div className="widget-card col-span-1 md:col-span-2 row-span-1 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="calendar" style={{animationDelay: `0.3s`}}>
<div className="glass-card p-5 h-full relative">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-sm title-text">Upcoming</h3>
<div className="flex items-center space-x-1 accent-text">
<i className="w-4 h-4 icon-glow" data-lucide="calendar"></i>
<span className="text-xs body-text">Today</span>
</div>
</div>
<div className="flex items-center space-x-6">
<div className="text-center">
<div className="text-2xl font-semibold accent-text number-glow">2</div>
<div className="text-xs text-secondary body-text">Days</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white-primary number-glow">14</div>
<div className="text-xs text-secondary body-text">Hours</div>
</div>
<div className="flex-1">
<div className="text-sm font-medium mb-1 title-text">Product Launch</div>
<div className="text-xs text-secondary body-text">Next milestone approaching</div>
</div>
</div>
</div>
</div>

<div className="widget-card col-span-1 md:col-span-2 row-span-2 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="habits" style={{animationDelay: `0.4s`}}>
<div className="glass-card p-5 h-full relative">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-sm title-text">Habit Tracker</h3>
<div className="flex items-center space-x-2 streak-indicator">
<span className="text-xl animate-pulse">🔥</span>
<span className="text-xs font-medium text-orange-400 body-text">7 day streak</span>
</div>
</div>
<div className="space-y-6">
<div className="habit-row">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium title-text">Exercise</span>
<span className="text-xs text-secondary body-text">7/7</span>
</div>
<div className="flex space-x-2">
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient"></div>
<div className="habit-dot completed primary-gradient glow-primary"></div>
</div>
</div>
<div className="habit-row">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium title-text">Reading</span>
<span className="text-xs text-secondary body-text">5/7</span>
</div>
<div className="flex space-x-2">
<div className="habit-dot completed secondary-gradient"></div>
<div className="habit-dot completed secondary-gradient"></div>
<div className="habit-dot completed secondary-gradient"></div>
<div className="habit-dot completed secondary-gradient"></div>
<div className="habit-dot completed secondary-gradient"></div>
<div className="habit-dot incomplete"></div>
<div className="habit-dot incomplete"></div>
</div>
</div>
<div className="habit-row">
<div className="flex items-center justify-between mb-3">
<span className="text-sm font-medium title-text">Meditation</span>
<span className="text-xs text-secondary body-text">6/7</span>
</div>
<div className="flex space-x-2">
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot completed success-gradient"></div>
<div className="habit-dot incomplete"></div>
</div>
</div>
</div>
</div>
</div>

<div className="widget-card col-span-1 md:col-span-2 row-span-1 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="xp" style={{animationDelay: `0.5s`}}>
<div className="glass-card p-5 h-full relative">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="font-medium text-sm title-text">Level Progress</h3>
<span className="level-badge">Level 12</span>
</div>
<div className="space-y-4">
<div className="flex justify-between text-xs">
<span className="accent-text font-medium">2,847 XP</span>
<span className="text-secondary body-text">3,200 XP</span>
</div>
<div className="progress-container">
<div className="progress-bar" data-progress="89" style={{width: `89%`}}></div>
</div>
<div className="text-xs text-secondary text-center body-text">353 XP to next level</div>
</div>
</div>
</div>

<div className="widget-card col-span-1 row-span-1 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="achievement" style={{animationDelay: `0.6s`}}>
<div className="glass-card p-5 h-full relative achievement-card">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="text-center achievement-content">
<div className="text-3xl mb-3 achievement-emoji">🏆</div>
<div className="text-sm font-medium mb-2 title-text achievement-title">Week Champion</div>
<div className="text-xs text-secondary body-text">Unlocked today</div>
</div>
</div>
</div>

<div className="widget-card col-span-1 md:col-span-2 row-span-2 opacity-0 animate-fade-in-up group cursor-pointer" data-expandable="true" data-widget="ai" style={{animationDelay: `0.7s`}}>
<div className="glass-card ai-card p-5 h-full relative">
<div className="drag-indicator absolute top-3 right-3 opacity-0 group-hover:opacity-50 transition-opacity duration-200">
<i className="w-4 h-4 icon-glow" data-lucide="grip-vertical"></i>
</div>
<div className="flex items-center space-x-3 mb-4">
<div className="ai-icon">
<i className="w-4 h-4 text-white" data-lucide="sparkles"></i>
</div>
<h3 className="font-medium text-sm title-text">AI Assistant</h3>
</div>
<div className="space-y-4">
<div className="text-xs font-medium accent-text insight-label">Productivity Insight</div>
<p className="text-sm text-secondary leading-relaxed body-text ai-suggestion">Based on your habits, you're 23% more productive on days when you exercise in the morning. Consider scheduling workouts before 9 AM.</p>
<div className="flex space-x-3 mt-6">
<button className="ai-button primary">Apply</button>
<button className="ai-button secondary">Later</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 hidden opacity-0 transition-all duration-400" id="modal-overlay">
<div className="flex items-center justify-center min-h-screen p-6" style={{padding: `24px`}}>
<div className="glass-card modal-card max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 transform scale-95 transition-all duration-400" id="modal-content" style={{borderRadius: `20px`, padding: `24px`}}>
<div className="flex items-center justify-between mb-6" style={{marginBottom: `24px`}}>
<h2 className="text-lg font-semibold title-text title-glow" id="modal-title" style={{fontSize: `24px`, lineHeight: `1.2`, letterSpacing: `-0.02em`}}>Widget Details</h2>
<button className="close-button" id="close-modal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="text-sm text-secondary body-text" id="modal-body" style={{fontSize: `13px`, color: `rgba(255, 255, 255, 0.6)`}}>

</div>
</div>
</div>
</div>



    </>
  );
}
