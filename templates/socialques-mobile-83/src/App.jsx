import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Toast notification function
        function showToast(message, type = 'info') {
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            toast.textContent = message;
            document.body.appendChild(toast);
            
            // Show toast
            setTimeout(() => {
                toast.classList.add('show');
            }, 100);
            
            // Hide and remove toast
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 300);
            }, 3000);
        }

        // Navigation functionality
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const sections = document.querySelectorAll('.section');
            const taskCards = document.querySelectorAll('.task-card');
            const backToTasksBtn = document.getElementById('backToTasks');
            
            // Tab bar navigation
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetSection = this.dataset.section;
                    
                    // Update active tab button
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Show target section with animation
                    sections.forEach(section => {
                        section.classList.remove('active');
                        section.classList.add('hidden');
                    });
                    
                    const target = document.getElementById(targetSection);
                    if (target) {
                        target.classList.add('active');
                        target.classList.remove('hidden');
                    }
                });
            });

            // Task card click handling - prevent click when clicking buttons
            taskCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't navigate if clicking on buttons
                    if (e.target.closest('.accept-task-btn') || e.target.closest('.report-btn')) {
                        return;
                    }
                    
                    // Navigate to task detail
                    sections.forEach(section => {
                        section.classList.remove('active');
                        section.classList.add('hidden');
                    });
                    
                    const taskDetail = document.getElementById('task-detail');
                    if (taskDetail) {
                        taskDetail.classList.add('active');
                        taskDetail.classList.remove('hidden');
                    }
                });
            });

            // Back to tasks button
            if (backToTasksBtn) {
                backToTasksBtn.addEventListener('click', function() {
                    sections.forEach(section => {
                        section.classList.remove('active');
                        section.classList.add('hidden');
                    });
                    
                    const tasksSection = document.getElementById('tasks');
                    if (tasksSection) {
                        tasksSection.classList.add('active');
                        tasksSection.classList.remove('hidden');
                    }
                    
                    // Update tab button state
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    const tasksBtn = document.querySelector('[data-section="tasks"]');
                    if (tasksBtn) {
                        tasksBtn.classList.add('active');
                    }
                });
            }

            // Task filter functionality
            const taskFilters = document.querySelectorAll('.task-filter');
            taskFilters.forEach(filter => {
                filter.addEventListener('click', function() {
                    taskFilters.forEach(f => {
                        f.classList.remove('active', 'bg-purple-500/20', 'text-purple-300', 'border-purple-500/30');
                        f.classList.add('bg-slate-800/50', 'text-slate-300', 'border-slate-700/50');
                    });
                    
                    this.classList.remove('bg-slate-800/50', 'text-slate-300', 'border-slate-700/50');
                    this.classList.add('active', 'bg-purple-500/20', 'text-purple-300', 'border-purple-500/30');
                });
            });

            // Accept task button handling with animation
            const acceptTaskBtns = document.querySelectorAll('.accept-task-btn');
            acceptTaskBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Prevent card click
                    
                    // Animate button state change
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                        this.innerHTML = '已接受';
                        this.className = 'accept-task-btn w-full bg-green-500/20 text-green-300 border border-green-500/30 font-medium py-2 rounded-lg transition-colors';
                        this.disabled = true;
                        
                        // Show success toast
                        showToast('任务已成功接受！', 'success');
                    }, 100);
                });
            });

            // Report button handling
            const reportBtns = document.querySelectorAll('.report-btn');
            reportBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    // Show confirmation dialog
                    if (confirm('确定要举报这个内容吗？')) {
                        showToast('举报已提交，感谢您的反馈！', 'info');
                    }
                });
            });

            // Like button interaction
            const likeBtns = document.querySelectorAll('.like-btn');
            likeBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    
                    const heart = this.querySelector('svg');
                    const countSpan = this.querySelector('span');
                    let count = parseInt(countSpan.textContent);
                    
                    // Toggle like state
                    if (this.classList.contains('liked')) {
                        this.classList.remove('liked', 'text-pink-400');
                        this.classList.add('text-slate-400');
                        heart.style.fill = 'none';
                        count -= 1;
                    } else {
                        this.classList.add('liked', 'text-pink-400');
                        this.classList.remove('text-slate-400');
                        heart.style.fill = 'currentColor';
                        count += 1;
                        
                        // Add bounce animation
                        heart.style.transform = 'scale(1.3)';
                        setTimeout(() => {
                            heart.style.transform = 'scale(1)';
                        }, 200);
                    }
                    
                    countSpan.textContent = count;
                });
            });

            // Comment button interaction
            const commentBtns = document.querySelectorAll('.comment-btn');
            commentBtns.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    showToast('评论功能即将开放！', 'info');
                });
            });

            // Quick action buttons
            const quickActionBtns = document.querySelectorAll('.quick-action-btn');
            quickActionBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const action = this.querySelector('span').textContent;
                    showToast(`${action}功能即将开放！`, 'info');
                });
            });

            // Publish task button
            const publishTaskBtn = document.getElementById('publishTaskBtn');
            if (publishTaskBtn) {
                publishTaskBtn.addEventListener('click', function() {
                    showToast('发布任务功能即将开放！', 'info');
                });
            }

            // Add scroll effects for task cards
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);

            // Observe all task cards for scroll animations
            document.querySelectorAll('.task-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-slate-900/50 backdrop-blur-xl border-b border-slate-800/50 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center space-x-3">
<button className="quick-action-btn" title="定位">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"></path>
</svg>
<span className="text-sm">定位</span>
</button>
<button className="quick-action-btn" title="扫一扫">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="scan-line" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
<span className="text-sm">扫一扫</span>
</button>
<button className="quick-action-btn" title="碰一碰">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5z"></path>
<path d="M2 17l10 5 10-5"></path>
<path d="M2 12l10 5 10-5"></path>
</svg>
<span className="text-sm">碰一碰</span>
</button>
</div>

<div className="flex space-x-0 items-center">
<button className="hover:from-purple-600 hover:to-pink-600 transition-colors text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg pt-2 pr-4 pb-2 pl-4 sm:pl-5 sm:pr-5" id="publishTaskBtn">
                        发布任务
                    </button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="section" id="tasks">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6">

<div className="lg:col-span-2 space-y-6">

<div className="flex flex-wrap gap-2">
<button className="task-filter active bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">全部任务</button>
<button className="task-filter bg-slate-800/50 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-slate-700/50 hover:border-slate-600/50 transition-colors">附近任务</button>
<button className="task-filter bg-slate-800/50 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-slate-700/50 hover:border-slate-600/50 transition-colors">商家任务</button>
<button className="task-filter bg-slate-800/50 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-slate-700/50 hover:border-slate-600/50 transition-colors">个人任务</button>
<button className="task-filter bg-slate-800/50 text-slate-300 hover:text-white px-4 py-2 rounded-full text-sm font-medium border border-slate-700/50 hover:border-slate-600/50 transition-colors">匿名任务</button>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-semibold">进行中的任务</h3>
<span className="text-sm text-slate-400">2个任务进行中</span>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors cursor-pointer task-card" data-task-id="1" style={{opacity: '0', transform: 'translateY(20px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex items-start justify-between mb-3">
<div className="">
<h4 className="font-medium mb-1">拍照打卡：中山公园</h4>
<p className="text-sm text-slate-400">在中山公园拍摄一张照片并上传</p>
</div>
<div className="flex items-center space-x-2">
<span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs font-medium">进行中</span>
<button className="report-btn text-red-400 hover:text-red-300 transition-colors" title="举报非法任务">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-sm">+100</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm">+50 EXP</span>
</div>
</div>
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">0.5km</span>
</div>
</div>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors cursor-pointer task-card" data-task-id="2" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex items-start justify-between mb-3">
<div className="">
<h4 className="font-medium mb-1">社交任务：结识新朋友</h4>
<p className="text-sm text-slate-400">在社交区域与3位新用户进行互动</p>
</div>
<div className="flex items-center space-x-2">
<span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium">66%</span>
</div>
</div>
<div className="mb-3">
<div className="w-full bg-slate-700 rounded-full h-2">
<div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{width: '66%'}}></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-sm">+200</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm">+100 EXP</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-sm">+抵用券</span>
</div>
</div>
<span className="text-sm text-slate-400">2/3 完成</span>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 border-slate-800/50 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<h3 className="text-xl font-semibold mb-6">可接受任务</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors cursor-pointer task-card" data-task-id="3" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div className="flex items-center space-x-2">
<span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs font-medium">商家任务</span>
<button className="report-btn text-red-400 hover:text-red-300 transition-colors" title="举报非法任务">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
</div>
</div>
<h4 className="font-medium mb-2">星巴克打卡挑战</h4>
<p className="text-sm text-slate-400 mb-4">在指定星巴克门店拍照打卡，分享你的咖啡时光</p>
<div className="flex items-center space-x-4 mb-4">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-sm font-medium">+150</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-sm font-medium">5元券</span>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">1.2km</span>
</div>
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-sm">30分钟</span>
</div>
</div>
<button className="accept-task-btn w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 rounded-lg transition-colors">
                                    接受任务
                                </button>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors cursor-pointer task-card" data-task-id="4" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s, transform 0.6s'}}>
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex items-center space-x-2">
<span className="bg-green-500/20 text-green-300 px-2 py-1 rounded-full text-xs font-medium">社交任务</span>
</div>
</div>
<h4 className="font-medium mb-2">公园聚会活动</h4>
<p className="text-sm text-slate-400 mb-4">参与公园聚会，与其他用户互动交流</p>
<div className="flex items-center space-x-4 mb-4">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
<span className="text-sm font-medium">+120</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium">+80 EXP</span>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">800m</span>
</div>
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-sm">1小时</span>
</div>
</div>
<button className="accept-task-btn w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-2 rounded-lg transition-colors">
                                    接受任务
                                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">

<div className="bg-slate-900/50 border-slate-800/50 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<h3 className="text-lg font-semibold mb-4">最近动态</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs">完成任务：<span className="font-medium">咖啡店打卡</span></p>
<p className="text-xs text-slate-400">获得 80 金币，30 经验值</p>
</div>
<span className="text-xs text-slate-400">2小时前</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex-1">
<p className="text-xs">升级到 <span className="font-medium">等级 15</span></p>
<p className="text-xs text-slate-400">解锁新功能</p>
</div>
<span className="text-xs text-slate-400">1天前</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section hidden" id="task-detail">
<div className="max-w-4xl mx-auto">

<button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors mb-6" id="backToTasks">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
<span>返回任务列表</span>
</button>

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden">

<div className="p-8 border-b border-slate-800/50">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center space-x-4">
<div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
<svg className="w-8 h-8 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div>
<h1 className="text-3xl font-bold tracking-tight mb-2">星巴克打卡挑战</h1>
<p className="text-slate-400">在指定星巴克门店拍照打卡，分享你的咖啡时光</p>
</div>
</div>
<div className="flex items-center space-x-3">
<span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">商家任务</span>
<button className="report-btn text-red-400 hover:text-red-300 transition-colors p-2" title="举报非法任务">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="text-center p-4 bg-slate-800/30 rounded-xl">
<div className="flex items-center justify-center mb-2">
<svg className="w-6 h-6 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<div className="text-2xl font-bold text-yellow-400">+150</div>
<div className="text-sm text-slate-400">金币奖励</div>
</div>
<div className="text-center p-4 bg-slate-800/30 rounded-xl">
<div className="flex items-center justify-center mb-2">
<svg className="w-6 h-6 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="text-2xl font-bold text-blue-400">+75</div>
<div className="text-sm text-slate-400">经验值</div>
</div>
<div className="text-center p-4 bg-slate-800/30 rounded-xl">
<div className="flex items-center justify-center mb-2">
<svg className="w-6 h-6 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div className="text-2xl font-bold text-green-400">5元</div>
<div className="text-sm text-slate-400">抵用券</div>
</div>
<div className="text-center p-4 bg-slate-800/30 rounded-xl">
<div className="flex items-center justify-center mb-2">
<svg className="w-6 h-6 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<div className="text-2xl font-bold text-slate-300">30分钟</div>
<div className="text-sm text-slate-400">预计用时</div>
</div>
</div>
</div>

<div className="p-8 space-y-8">

<div>
<h2 className="text-xl font-semibold mb-4">任务详情</h2>
<div className="bg-slate-800/30 rounded-xl p-6">
<p className="text-slate-300 leading-relaxed mb-4">
                                    欢迎参加星巴克打卡挑战！我们邀请您到指定的星巴克门店进行拍照打卡，分享您的咖啡时光。
                                </p>
<p className="text-slate-300 leading-relaxed">
                                    完成任务后，您将获得金币奖励和星巴克5元抵用券，可在下次消费时使用。
                                </p>
</div>
</div>

<div>
<h2 className="text-xl font-semibold mb-4">任务要求</h2>
<div className="space-y-3">
<div className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
<svg className="w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="font-medium">前往指定门店</p>
<p className="text-sm text-slate-400">星巴克中山公园店（距离1.2km）</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl">
<div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
<svg className="w-4 h-4 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div>
<p className="font-medium">拍照打卡</p>
<p className="text-sm text-slate-400">在店内拍摄照片并上传</p>
</div>
</div>
<div className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div>
<p className="font-medium">分享体验</p>
<p className="text-sm text-slate-400">发布一条动态分享您的体验</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-xl font-semibold mb-4">位置信息</h2>
<div className="bg-slate-800/30 rounded-xl p-6">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="flex-1">
<h3 className="font-medium mb-2">星巴克中山公园店</h3>
<p className="text-sm text-slate-400 mb-3">上海市长宁区长宁路1027号</p>
<div className="flex items-center space-x-4 text-sm">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-slate-400">距离 1.2km</span>
</div>
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="text-slate-400">营业时间：7:00-22:00</span>
</div>
</div>
</div>
<button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                        查看地图
                                    </button>
</div>
</div>
</div>

<div>
<h2 className="text-xl font-semibold mb-4">发布者信息</h2>
<div className="bg-slate-800/30 rounded-xl p-6">
<div className="flex items-center space-x-4">
<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
<span className="text-lg font-bold text-white">星</span>
</div>
<div className="flex-1">
<h3 className="font-medium mb-1">星巴克官方</h3>
<p className="text-sm text-slate-400 mb-2">认证商家 · 信誉等级 AAA</p>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-1">
<svg className="w-4 h-4 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm">4.8分</span>
</div>
<span className="text-sm text-slate-400">已发布 156 个任务</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex space-x-4 pt-6">
<button className="accept-task-btn flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-4 rounded-xl transition-colors text-lg">
                                接受任务
                            </button>
<button className="px-8 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 hover:text-white font-medium py-4 rounded-xl transition-colors">
                                收藏
                            </button>
<button className="px-8 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 text-slate-300 hover:text-white font-medium py-4 rounded-xl transition-colors">
                                分享
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="section hidden" id="feed">
<div className="mb-8">
<h2 className="text-3xl font-bold tracking-tight mb-2">匿名动态</h2>
<p className="text-slate-400">发现平台内用户的匿名分享</p>
</div>

<div className="max-w-2xl mx-auto space-y-6">

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-white">匿名</span>
</div>
<div>
<p className="font-medium">匿名用户</p>
<p className="text-xs text-slate-400">2小时前 • 中山公园</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="report-btn text-slate-400 hover:text-red-400 transition-colors" title="屏蔽此内容">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 20 20"></path><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"></path><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"></path></svg>
</button>
<button className="report-btn text-slate-400 hover:text-red-400 transition-colors" title="举报非法内容">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
</div>
</div>
<p className="text-slate-200 mb-4">刚刚完成了星巴克打卡任务！公园里的咖啡香味真不错，还遇到了几个有趣的朋友 ☕️ #任务完成 #社交</p>
<div className="bg-slate-800/50 rounded-xl p-3 mb-4">
<div className="flex items-center space-x-2">
<svg className="w-5 h-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-sm text-slate-300">完成任务：星巴克打卡挑战</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<button className="like-btn flex items-center space-x-1 text-slate-400 hover:text-pink-400 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm">23</span>
</button>
<button className="comment-btn flex items-center space-x-1 text-slate-400 hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-sm">5</span>
</button>
</div>
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm">156</span>
</div>
</div>
</div>

<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-white">匿名</span>
</div>
<div>
<p className="font-medium">匿名用户</p>
<p className="text-xs text-slate-400">5小时前 • 购物中心</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="report-btn text-slate-400 hover:text-red-400 transition-colors" title="屏蔽此内容">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 2 20 20"></path><path d="M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"></path><path d="M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"></path></svg>
</button>
<button className="report-btn text-slate-400 hover:text-red-400 transition-colors" title="举报非法内容">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
</div>
</div>
<p className="text-slate-200 mb-4">今天组织了一个小聚会，认识了好多新朋友！大家一起做任务的感觉真棒 🎉 感谢这个平台让我们相遇 #社交聚会 #新朋友</p>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<button className="like-btn flex items-center space-x-1 text-slate-400 hover:text-pink-400 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm">45</span>
</button>
<button className="comment-btn flex items-center space-x-1 text-slate-400 hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-sm">12</span>
</button>
</div>
<div className="flex items-center space-x-1 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm">234</span>
</div>
</div>
</div>
</div>
</div>

<div className="section hidden" id="map">
<div className="mb-8">
<h2 className="text-3xl font-bold tracking-tight mb-2">地图探索</h2>
<p className="text-slate-400">查看附近的任务、用户和兴趣点</p>
</div>
<div className="bg-slate-800/50 rounded-2xl overflow-hidden">

<div className="h-96 bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center relative">
<div className="text-center">
<svg className="w-16 h-16 text-slate-400 mb-4 mx-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-lg font-medium text-slate-300 mb-2">互动地图</p>
<p className="text-sm text-slate-400">在这里可以查看附近的任务和活动</p>
</div>

<div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
<div className="absolute bottom-24 right-24 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
</div>
</div>
</div>

<div className="section hidden" id="social">
<div className="mb-8">
<h2 className="text-3xl font-bold tracking-tight mb-2">社交中心</h2>
<p className="text-slate-400">认识新朋友，建立社交网络</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2">
<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<h3 className="text-xl font-semibold mb-6">附近用户</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
<div className="flex items-center space-x-3 mb-3">
<div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-white">李</span>
</div>
<div>
<p className="font-medium">探索者小李</p>
<p className="text-xs text-slate-400">等级 12 • 距离 200m</p>
</div>
</div>
<p className="text-sm text-slate-400 mb-3">喜欢拍照和旅行，最近完成了5个打卡任务</p>
<button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    发起对话
                                </button>
</div>
<div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-colors">
<div className="flex items-center space-x-3 mb-3">
<div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-white">游</span>
</div>
<div>
<p className="font-medium">游戏玩家王二</p>
<p className="text-xs text-slate-400">等级 18 • 距离 500m</p>
</div>
</div>
<p className="text-sm text-slate-400 mb-3">资深玩家，经常组织线下聚会活动</p>
<button className="w-full bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                    发起对话
                                </button>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<h3 className="text-lg font-semibold mb-4">最近消息</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl">
<div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-white">小</span>
</div>
<div className="flex-1">
<p className="text-sm font-medium">小明</p>
<p className="text-xs text-slate-400">一起去做任务吗？</p>
</div>
<span className="text-xs text-slate-400">1小时前</span>
</div>
</div>
</div>
<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6">
<h3 className="text-lg font-semibold mb-4">活动邀请</h3>
<div className="space-y-3">
<div className="bg-slate-800/30 rounded-xl p-3">
<h4 className="text-sm font-medium mb-1">公园聚会</h4>
<p className="text-xs text-slate-400 mb-2">今晚7点在中山公园</p>
<div className="flex space-x-2">
<button className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">参加</button>
<button className="text-xs bg-slate-700/50 text-slate-400 px-2 py-1 rounded">忽略</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section hidden" id="profile">
<div className="max-w-4xl mx-auto">
<div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden">

<div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 border-b border-slate-800/50">
<div className="flex items-center space-x-6">
<div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
<span className="text-2xl font-bold text-white">威</span>
</div>
<div className="flex-1">
<h1 className="text-3xl font-bold tracking-tight mb-2">探索者大威</h1>
<p className="text-slate-400 mb-4">热爱探索和社交的游戏玩家</p>
<div className="flex items-center space-x-6">
<div className="text-center">
<p className="text-2xl font-bold text-purple-400">15</p>
<p className="text-xs text-slate-400">等级</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-yellow-400">2,580</p>
<p className="text-xs text-slate-400">金币</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-blue-400">1,200</p>
<p className="text-xs text-slate-400">经验值</p>
</div>
<div className="text-center">
<p className="text-2xl font-bold text-green-400">47</p>
<p className="text-xs text-slate-400">已完成</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div>
<h3 className="text-xl font-semibold mb-4">最近成就</h3>
<div className="space-y-3">
<div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl">
<div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div>
<p className="font-medium">社交达人</p>
<p className="text-sm text-slate-400">成功与50位用户建立联系</p>
</div>
</div>
<div className="flex items-center space-x-3 p-3 bg-slate-800/30 rounded-xl">
<div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
<svg className="w-5 h-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div>
<p className="font-medium">任务专家</p>
<p className="text-sm text-slate-400">连续7天完成每日任务</p>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold mb-4">统计数据</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<span className="text-sm text-slate-400">本周完成任务</span>
<span className="text-lg font-semibold">12</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<span className="text-sm text-slate-400">社交互动次数</span>
<span className="text-lg font-semibold">89</span>
</div>
<div className="flex items-center justify-between p-3 bg-slate-800/30 rounded-xl">
<span className="text-sm text-slate-400">获得金币总数</span>
<span className="text-lg font-semibold">15,670</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 z-50">
<div className="grid grid-cols-5 h-20">
<button className="tab-btn flex flex-col text-xs pr-3 pl-3 space-y-1 items-center justify-center" data-section="tasks">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle className="" cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="font-medium">任务</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center space-y-1 px-3 text-xs" data-section="feed">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
<span className="font-medium">动态</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center space-y-1 px-3 text-xs" data-section="map">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-medium">地图</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center space-y-1 px-3 text-xs" data-section="social">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">社交</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center space-y-1 px-3 text-xs" data-section="profile">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="font-medium">我的</span>
</button>
</div>
</nav>
<style>
        /* Tab Bar Styles */
        .tab-btn {
            @apply text-slate-400 hover:text-white transition-colors;
        }
        .tab-btn.active {
            @apply text-purple-400;
        }
        .tab-btn.active svg {
            @apply text-purple-400;
        }

        /* Navigation Styles */
        .nav-btn {
            @apply flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors;
        }
        .nav-btn.active {
            @apply text-white bg-slate-800/50 border border-purple-500/30;
        }
        .quick-action-btn {
            @apply flex flex-col items-center space-y-1 px-3 py-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors;
        }

        /* Section Styles */
        .section {
            @apply hidden;
        }
        .section.active {
            @apply block;
        }

        /* Task Filter Styles */
        .task-filter.active {
            @apply bg-purple-500/20 text-purple-300 border-purple-500/30;
        }

        /* Animation for loading states */
        .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: .5;
            }
        }

        /* Toast notification styles */
        .toast {
            @apply fixed top-4 right-4 bg-slate-900 border border-slate-700 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform transition-transform duration-300 translate-x-full opacity-0;
        }
        .toast.show {
            @apply translate-x-0 opacity-100;
        }
    </style>


    </>
  );
}
