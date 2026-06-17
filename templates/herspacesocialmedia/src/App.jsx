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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Toast Notification System
        let toastTimeout;
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = message;
            
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        // Auth Logic
        function toggleAuth() {
            const login = document.getElementById('login-form');
            const signup = document.getElementById('signup-form');
            if (login.classList.contains('hidden')) {
                login.classList.remove('hidden');
                signup.classList.add('hidden');
            } else {
                login.classList.add('hidden');
                signup.classList.remove('hidden');
            }
        }

        function login() {
            document.getElementById('auth-modal').style.display = 'none';
            document.getElementById('app-container').classList.remove('blur-sm');
            showToast('Successfully signed in. Welcome back!');
        }

        function logout() {
            document.getElementById('auth-modal').style.display = 'flex';
            document.getElementById('app-container').classList.add('blur-sm');
            switchTab('feed');
        }

        // Navigation Logic
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('bg-rose-50', 'text-rose-600');
                btn.classList.add('text-slate-500');
            });
            
            const activeBtn = document.querySelector(`[data-target="${tabId}"]`);
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-500');
                activeBtn.classList.add('bg-rose-50', 'text-rose-600');
            }
        }

        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        function toggleNotifications() {
            const panel = document.getElementById('notifications-panel');
            panel.classList.toggle('hidden');
        }

        // Post Interactions Logic
        function selectMood(btn, mood) {
            document.querySelectorAll('.mood-btn').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            showToast(`Mood logged: ${mood}`);
        }

        function toggleMenu(btn, event) {
            event.stopPropagation();
            const dropdown = btn.nextElementSibling;
            
            // Close other dropdowns first
            document.querySelectorAll('.post-menu-btn').forEach(otherBtn => {
                if (otherBtn !== btn) otherBtn.nextElementSibling.classList.add('hidden');
            });
            
            dropdown.classList.toggle('hidden');
        }

        function closeDropdowns(event) {
            // Close post menus
            if (!event.target.closest('.post-menu-btn')) {
                document.querySelectorAll('.post-menu-btn').forEach(btn => {
                    btn.nextElementSibling.classList.add('hidden');
                });
            }
            
            // Close notifications
            if (!event.target.closest('#notifications-panel') && !event.target.closest('[onclick="toggleNotifications()"]')) {
                document.getElementById('notifications-panel').classList.add('hidden');
            }
        }

        function toggleLike(btn, baseCount) {
            const icon = btn.querySelector('.like-icon');
            const countSpan = btn.querySelector('.like-count');
            const isLiked = icon.getAttribute('icon') === 'solar:heart-bold';
            
            if (isLiked) {
                icon.setAttribute('icon', 'solar:heart-linear');
                btn.classList.remove('text-rose-500');
                btn.classList.add('text-slate-400');
                countSpan.innerText = baseCount;
            } else {
                icon.setAttribute('icon', 'solar:heart-bold');
                btn.classList.remove('text-slate-400');
                btn.classList.add('text-rose-500');
                countSpan.innerText = baseCount + 1;
                showToast('Added to liked posts');
            }
        }

        // Payment & Misc Logic
        function processPayment(plan) {
            const btn = event.currentTarget.querySelector('button');
            const originalText = btn.innerText;
            btn.innerHTML = `<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Processing...`;
            
            setTimeout(() => {
                btn.innerText = "Subscribed!";
                btn.classList.remove('bg-slate-50', 'bg-rose-500', 'text-slate-700', 'hover:bg-rose-600', 'hover:bg-slate-100');
                btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-500');
                showToast(`Successfully subscribed to ${plan} plan via RevenueCat. Welcome to Pro!`);
                
                setTimeout(() => {
                    switchTab('profile');
                }, 1500);
            }, 1500);
        }

        function showDownload() {
            showToast("Initiating app download for iOS / Android...");
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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0 md:right-6 bg-slate-800 text-white px-5 py-3 rounded-xl shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 z-[100] text-sm font-medium flex items-center gap-3" id="toast">
<iconify-icon icon="solar:info-circle-linear" width="18"></iconify-icon>
<span id="toast-msg">Notification</span>
</div>

<div className="absolute inset-0 z-50 flex items-center justify-center bg-[#fdfbfb]/90 backdrop-blur-md" id="auth-modal">
<div className="bg-white p-10 rounded-3xl shadow-sm border border-rose-50 w-full max-w-md flex flex-col items-center text-center">
<h1 className="text-lg font-semibold tracking-[0.2em] text-rose-400 mb-8">H E R S P A C E</h1>

<div className="w-full" id="login-form">
<h2 className="text-2xl font-medium tracking-tight text-slate-800 mb-2">Welcome to your space</h2>
<p className="text-sm text-slate-500 mb-8">Connect, grow, and prioritize your wellbeing.</p>
<div className="w-full space-y-4">
<input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder:text-slate-400" placeholder="Email address" type="email"/>
<input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder:text-slate-400" placeholder="Password" type="password"/>
<button className="w-full py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-xl text-sm font-medium transition-colors mt-2" onclick="login()">
                        Sign In
                    </button>
</div>
<div className="mt-6 text-sm text-slate-400">
                    Don't have an account? <button className="text-rose-400 font-medium hover:underline" onclick="toggleAuth()">Create one</button>
</div>
</div>

<div className="w-full hidden" id="signup-form">
<h2 className="text-2xl font-medium tracking-tight text-slate-800 mb-2">Join our community</h2>
<p className="text-sm text-slate-500 mb-8">Create an account to start your journey.</p>
<div className="w-full space-y-4">
<input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder:text-slate-400" placeholder="Full Name" type="text"/>
<input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder:text-slate-400" placeholder="Email address" type="email"/>
<input className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder:text-slate-400" placeholder="Create Password" type="password"/>
<button className="w-full py-3 bg-rose-400 hover:bg-rose-500 text-white rounded-xl text-sm font-medium transition-colors mt-2" onclick="login()">
                        Create Account
                    </button>
</div>
<div className="mt-6 text-sm text-slate-400">
                    Already have an account? <button className="text-rose-400 font-medium hover:underline" onclick="toggleAuth()">Sign in</button>
</div>
</div>
</div>
</div>

<div className="flex w-full h-full blur-sm transition-all duration-500 relative" id="app-container">

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 hidden transition-opacity" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<nav className="absolute md:relative z-40 w-64 h-full bg-white border-r border-rose-50 flex-col justify-between shrink-0 transform -translate-x-full md:translate-x-0 transition-transform duration-300 flex" id="sidebar">
<div>
<div className="h-20 flex items-center justify-between px-8 border-b border-rose-50/50">
<span className="text-sm font-semibold tracking-[0.15em] text-rose-400">H E R S P A C E</span>
<button className="md:hidden text-slate-400 hover:text-slate-600" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-4 space-y-1">
<button className="nav-btn w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl bg-rose-50 text-rose-600 transition-colors" data-target="feed" onclick="switchTab('feed')">
<iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon> Community Feed
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors" data-target="wellness" onclick="switchTab('wellness')">
<iconify-icon icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon> Wellness Hub
                    </button>
<button className="nav-btn w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors" data-target="premium" onclick="switchTab('premium')">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon> Premium
                    </button>
</div>
</div>
<div className="p-4 space-y-1 border-t border-rose-50/50">
<button className="nav-btn w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors" data-target="admin" onclick="switchTab('admin')">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon> Dashboard
                </button>
<button className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors" onclick="showDownload()">
<span className="flex items-center gap-3"><iconify-icon icon="solar:cloud-download-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon> Get App</span>
</button>
<button className="nav-btn w-full mt-4 flex items-center gap-3 px-4 py-2 rounded-xl text-left hover:bg-slate-50 transition-colors" data-target="profile" onclick="switchTab('profile'); if(window.innerWidth &lt; 768) toggleMobileMenu();">
<img alt="Profile" className="w-8 h-8 rounded-full border border-rose-100" src="https://i.pravatar.cc/150?img=47"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-700">Sarah Jenkins</span>
<span className="text-[10px] text-slate-400">Pro Member</span>
</div>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-gradient-to-br from-[#fdfbfb] to-[#f8f5f6]">

<header className="md:hidden flex items-center justify-between p-4 bg-white/80 border-b border-rose-50 z-10 glass-panel relative">
<span className="text-xs font-semibold tracking-[0.15em] text-rose-400">H E R S P A C E</span>
<div className="flex items-center gap-3">
<button className="relative text-slate-400 hover:text-rose-400 transition-colors" onclick="toggleNotifications()">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border border-white"></span>
</button>
<button className="text-slate-500" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>

<div className="hidden md:flex items-center justify-between px-10 py-5 glass-panel z-20 absolute top-0 w-full border-b border-rose-50/30">
<div className="relative w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 rounded-full bg-white/50 border border-slate-100 text-xs focus:outline-none focus:ring-1 focus:ring-rose-200 transition-all placeholder:text-slate-400" onkeypress="if(event.key === 'Enter') showToast('Searching for: ' + this.value)" placeholder="Search topics, groups..." type="text"/>
</div>
<div className="flex items-center gap-4 relative">
<button className="relative text-slate-400 hover:text-rose-400 transition-colors" onclick="toggleNotifications()">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-400 rounded-full border border-white"></span>
</button>

<div className="hidden absolute top-10 right-0 w-80 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden" id="notifications-panel">
<div className="p-4 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
<h3 className="text-sm font-medium text-slate-800">Notifications</h3>
<button className="text-xs text-rose-400 hover:text-rose-500" onclick="showToast('Marked all as read')">Mark read</button>
</div>
<div className="max-h-64 overflow-y-auto">
<div className="p-4 border-b border-slate-50 hover:bg-slate-50/50 cursor-pointer transition-colors" onclick="showToast('Viewing comment')">
<p className="text-xs text-slate-600"><span className="font-medium text-slate-800">Elena Rostova</span> replied to your post in Career &amp; Growth.</p>
<p className="text-[10px] text-slate-400 mt-1">10m ago</p>
</div>
<div className="p-4 border-b border-slate-50 hover:bg-slate-50/50 cursor-pointer transition-colors" onclick="showToast('Opening Wellness Hub')">
<p className="text-xs text-slate-600"><span className="font-medium text-slate-800">System</span> • Your daily wellness report is ready to view.</p>
<p className="text-[10px] text-slate-400 mt-1">1h ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 md:px-10 pt-6 md:pt-24 pb-20 z-10" onclick="closeDropdowns(event)">

<div className="tab-content active max-w-3xl mx-auto" id="feed">
<div className="mb-8">
<h2 className="text-2xl font-medium tracking-tight text-slate-800">Good morning, Sarah</h2>
<p className="text-sm text-slate-500 mt-1">Check in with yourself and your community.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-rose-50 shadow-[0_2px_10px_-4px_rgba(225,29,72,0.05)] mb-8">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-4">How are you feeling today?</span>
<div className="flex justify-between items-center gap-2 overflow-x-auto pb-2">
<button className="mood-btn flex flex-col items-center gap-2 group min-w-[60px]" onclick="selectMood(this, 'Calm')">
<div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-xl group-hover:bg-rose-100 transition-colors border border-rose-100/50">😌</div>
<span className="text-xs text-slate-500 group-[.active]:text-rose-500 group-[.active]:font-medium">Calm</span>
</button>
<button className="mood-btn flex flex-col items-center gap-2 group min-w-[60px]" onclick="selectMood(this, 'Motivated')">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-xl group-hover:bg-orange-100 transition-colors border border-orange-100/50">✨</div>
<span className="text-xs text-slate-500 group-[.active]:text-orange-500 group-[.active]:font-medium">Motivated</span>
</button>
<button className="mood-btn flex flex-col items-center gap-2 group min-w-[60px]" onclick="selectMood(this, 'Tired')">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-xl group-hover:bg-purple-100 transition-colors border border-purple-100/50">😴</div>
<span className="text-xs text-slate-500 group-[.active]:text-purple-500 group-[.active]:font-medium">Tired</span>
</button>
<button className="mood-btn flex flex-col items-center gap-2 group min-w-[60px]" onclick="selectMood(this, 'Low')">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-xl group-hover:bg-blue-100 transition-colors border border-blue-100/50">🌧️</div>
<span className="text-xs text-slate-500 group-[.active]:text-blue-500 group-[.active]:font-medium">Low</span>
</button>
<button className="flex flex-col items-center justify-center min-w-[48px] w-12 h-12 rounded-full border border-dashed border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 transition-all mb-6" onclick="showToast('Opening custom mood selector...')">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-6">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-4 relative">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
<div>
<h4 className="text-sm font-medium text-slate-800 hover:underline cursor-pointer" onclick="switchTab('profile')">Elena Rostova</h4>
<p className="text-xs text-slate-400">Career &amp; Growth Group • 2h ago</p>
</div>
</div>
<button className="post-menu-btn text-slate-400 hover:text-slate-600" onclick="toggleMenu(this, event)">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
<div className="hidden absolute top-8 right-0 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20">
<button className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50" onclick="showToast('Post saved')">Save Post</button>
<button className="w-full text-left px-4 py-2 text-xs text-rose-500 hover:bg-rose-50" onclick="showToast('Post reported')">Report</button>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Just finished my first negotiation workshop! Ladies, never underestimate your worth. Always ask for what you deserve. Who else is working on career goals this month? 💼✨</p>
<div className="flex items-center gap-6 pt-4 border-t border-slate-50">
<button className="flex items-center gap-2 text-xs text-rose-400 font-medium transition-colors" onclick="toggleLike(this, 124)">
<iconify-icon className="like-icon" icon="solar:heart-bold" width="18"></iconify-icon> <span className="like-count">124</span>
</button>
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors" onclick="showToast('Opening comments...')">
<iconify-icon icon="solar:chat-round-linear" width="18"></iconify-icon> 28 Comments
                                </button>
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 ml-auto transition-colors" onclick="showToast('Link copied to clipboard')">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon> Share
                                </button>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.02)]">
<div className="flex items-center justify-between mb-4 relative">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
<div>
<h4 className="text-sm font-medium text-slate-800 hover:underline cursor-pointer" onclick="switchTab('profile')">Maya Patel</h4>
<p className="text-xs text-slate-400">Wellness &amp; Yoga • 5h ago</p>
</div>
</div>
<button className="post-menu-btn text-slate-400 hover:text-slate-600" onclick="toggleMenu(this, event)">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
<div className="hidden absolute top-8 right-0 w-32 bg-white rounded-xl shadow-lg border border-slate-100 py-1 z-20">
<button className="w-full text-left px-4 py-2 text-xs text-slate-600 hover:bg-slate-50" onclick="showToast('Post saved')">Save Post</button>
<button className="w-full text-left px-4 py-2 text-xs text-rose-500 hover:bg-rose-50" onclick="showToast('Post reported')">Report</button>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Sharing my quick 10-minute morning stretch routine. Perfect for easing anxiety before opening emails. 🧘‍♀️</p>
<div className="w-full h-48 bg-purple-50 rounded-xl mb-4 flex items-center justify-center border border-purple-100/50 relative overflow-hidden group cursor-pointer" onclick="showToast('Starting video playback...')">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10"></div>
<div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm z-20 text-purple-500 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-6 pt-2 border-t border-slate-50 pt-4 mt-2">
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-rose-400 transition-colors" onclick="toggleLike(this, 89)">
<iconify-icon className="like-icon" icon="solar:heart-linear" width="18"></iconify-icon> <span className="like-count">89</span>
</button>
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors" onclick="showToast('Opening comments...')">
<iconify-icon icon="solar:chat-round-linear" width="18"></iconify-icon> 12 Comments
                                </button>
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 ml-auto transition-colors" onclick="showToast('Link copied to clipboard')">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon> Share
                                </button>
</div>
</div>
</div>
</div>

<div className="tab-content max-w-4xl mx-auto" id="wellness">
<div className="mb-8 flex items-end justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-800">Wellness Hub</h2>
<p className="text-sm text-slate-500 mt-1">Track your cycle, mind, and body.</p>
</div>
<button className="text-xs font-medium text-rose-500 bg-rose-50 px-4 py-2 rounded-full hover:bg-rose-100 transition-colors" onclick="showToast('Generating your personalized wellness report...')">Generate Report</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-white p-6 rounded-2xl border border-rose-100/60 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-10 -mt-10 opacity-50 z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-medium text-slate-800">Cycle Tracker</h3>
<iconify-icon className="text-rose-400 cursor-pointer" icon="solar:calendar-date-linear" onclick="showToast('Opening calendar view...')" width="20"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 border-rose-100 relative cursor-pointer hover:scale-105 transition-transform" onclick="showToast('Logging cycle details...')">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="#f43f5e" stroke-dasharray="289" stroke-dashoffset="150" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<span className="text-xs text-slate-400 uppercase tracking-widest mt-2">Day</span>
<span className="text-3xl font-medium tracking-tight text-rose-500 leading-none mt-1">14</span>
<span className="text-[10px] text-slate-400 mt-1">Ovulation in 2d</span>
</div>
<div className="flex-1 ml-8 space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors" onclick="showToast('Updating flow prediction...')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500"><iconify-icon icon="solar:waterdrops-linear" width="16"></iconify-icon></div>
<span className="text-sm font-medium text-slate-600">Flow Prediction</span>
</div>
<span className="text-xs font-medium text-slate-800">Light</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition-colors" onclick="showToast('Logging sleep data...')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500"><iconify-icon icon="solar:moon-sleep-linear" width="16"></iconify-icon></div>
<span className="text-sm font-medium text-slate-600">Sleep Quality</span>
</div>
<span className="text-xs font-medium text-slate-800">7.5 hrs</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-gradient-to-b from-[#F4F0FF] to-white p-6 rounded-2xl border border-purple-50 shadow-sm flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-400 mb-4 border border-purple-50/50">
<iconify-icon icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-800 mb-1">Daily Meditation</h3>
<p className="text-xs text-slate-500 leading-relaxed mb-4">10 min guided audio for anxiety relief and grounding.</p>
</div>
<button className="w-full py-3 bg-purple-500 text-white rounded-xl text-sm font-medium hover:bg-purple-600 transition-colors flex items-center justify-center gap-2 shadow-sm shadow-purple-200" onclick="showToast('Starting Daily Meditation Audio...')">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon> Start Session
                            </button>
</div>
</div>
</div>

<div className="tab-content max-w-3xl mx-auto text-center pt-8" id="premium">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-orange-100 text-rose-500 mb-6 shadow-sm">
<iconify-icon icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-800 mb-4">Unlock Her Space Pro</h2>
<p className="text-sm text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">Get personalized insights, exclusive expert-led workshops, and priority community features. Billed securely via RevenueCat.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-rose-300 transition-colors cursor-pointer relative overflow-hidden group" onclick="processPayment('monthly')">
<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-2">Monthly</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-medium tracking-tight text-slate-800">$9.99</span>
<span className="text-sm text-slate-400">/mo</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon> Full cycle &amp; mood analytics</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited meditation audios</li>
<li className="flex items-center gap-2 text-sm text-slate-600"><iconify-icon className="text-rose-400" icon="solar:check-circle-linear"></iconify-icon> Ad-free experience</li>
</ul>
<button className="w-full py-3 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium group-hover:bg-slate-100 transition-colors border border-slate-200 pointer-events-none">
                                Subscribe Monthly
                            </button>
</div>
<div className="bg-rose-50 p-6 rounded-2xl border-2 border-rose-300 relative overflow-hidden shadow-[0_4px_20px_-4px_rgba(225,29,72,0.15)] cursor-pointer" onclick="processPayment('annual')">
<div className="absolute top-0 right-0 bg-rose-400 text-white text-[10px] font-medium px-3 py-1 rounded-bl-lg uppercase tracking-wider">Best Value</div>
<h3 className="text-sm font-medium text-rose-600 uppercase tracking-wider mb-2">Annually</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-medium tracking-tight text-slate-800">$79.99</span>
<span className="text-sm text-slate-500">/yr</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> All Monthly features</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> 1-on-1 expert coaching session</li>
<li className="flex items-center gap-2 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> Save 33% yearly</li>
</ul>
<button className="w-full py-3 bg-rose-500 text-white rounded-xl text-sm font-medium hover:bg-rose-600 transition-colors shadow-sm shadow-rose-200 pointer-events-none">
                                Subscribe Annually
                            </button>
</div>
</div>
</div>

<div className="tab-content max-w-5xl mx-auto" id="admin">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-800">Admin Overview</h2>
<p className="text-sm text-slate-500 mt-1">Real-time application metrics and user data.</p>
</div>
<div className="flex gap-2">
<select className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-600 outline-none hover:border-slate-300 transition-colors cursor-pointer" onchange="showToast('Updating charts for: ' + this.value)">
<option>Last 7 Days</option>
<option>Last 30 Days</option>
<option>This Year</option>
</select>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-slate-200 transition-colors" onclick="showToast('Opening User Analytics')">
<span className="text-xs font-medium text-slate-500 flex items-center gap-2"><iconify-icon className="text-rose-400" icon="solar:users-group-rounded-linear"></iconify-icon> Total Users</span>
<div className="mt-3 flex items-end gap-2">
<h3 className="text-2xl font-medium tracking-tight text-slate-800">42,891</h3>
<span className="text-xs text-emerald-500 mb-1 flex items-center"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 12%</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-slate-200 transition-colors" onclick="showToast('Opening App Metrics')">
<span className="text-xs font-medium text-slate-500 flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:cloud-download-linear"></iconify-icon> App Downloads</span>
<div className="mt-3 flex items-end gap-2">
<h3 className="text-2xl font-medium tracking-tight text-slate-800">8,402</h3>
<span className="text-xs text-emerald-500 mb-1 flex items-center"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 5%</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-slate-200 transition-colors" onclick="showToast('Opening Financial Data')">
<span className="text-xs font-medium text-slate-500 flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:card-linear"></iconify-icon> Revenue (MRR)</span>
<div className="mt-3 flex items-end gap-2">
<h3 className="text-2xl font-medium tracking-tight text-slate-800">$14.2k</h3>
<span className="text-xs text-emerald-500 mb-1 flex items-center"><iconify-icon icon="solar:arrow-up-linear"></iconify-icon> 24%</span>
</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-slate-200 transition-colors" onclick="showToast('Opening Conversion Funnel')">
<span className="text-xs font-medium text-slate-500 flex items-center gap-2"><iconify-icon className="text-purple-400" icon="solar:crown-linear"></iconify-icon> Pro Conversions</span>
<div className="mt-3 flex items-end gap-2">
<h3 className="text-2xl font-medium tracking-tight text-slate-800">8.4%</h3>
<span className="text-xs text-rose-500 mb-1 flex items-center"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon> 1%</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h3 className="text-sm font-medium text-slate-700 mb-6">Revenue Growth (via RevenueCat)</h3>
<div className="h-48 flex items-end justify-between gap-2">
<div className="w-full bg-rose-50 rounded-t-sm h-[30%] relative group cursor-pointer" onclick="showToast('Jan Revenue: $4.2k')"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded z-10">Jan</div></div>
<div className="w-full bg-rose-100 rounded-t-sm h-[45%] relative group cursor-pointer" onclick="showToast('Feb Revenue: $6.1k')"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded z-10">Feb</div></div>
<div className="w-full bg-rose-200 rounded-t-sm h-[40%] relative group cursor-pointer" onclick="showToast('Mar Revenue: $5.8k')"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded z-10">Mar</div></div>
<div className="w-full bg-rose-300 rounded-t-sm h-[60%] relative group cursor-pointer" onclick="showToast('Apr Revenue: $8.9k')"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded z-10">Apr</div></div>
<div className="w-full bg-rose-400 rounded-t-sm h-[75%] relative group cursor-pointer" onclick="showToast('May Revenue: $11.5k')"><div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded z-10">May</div></div>
<div className="w-full bg-rose-500 rounded-t-sm h-[90%] relative cursor-pointer" onclick="showToast('Jun Revenue: $14.2k')"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-rose-500">$14.2k</div></div>
</div>
<div className="flex justify-between mt-3 text-xs text-slate-400 border-t border-slate-50 pt-3">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h3 className="text-sm font-medium text-slate-700 mb-4">Top Feature Usage</h3>
<div className="space-y-4 mt-6">
<div className="cursor-pointer group" onclick="showToast('Detailed Cycle Tracker Stats')">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-800 transition-colors">Cycle Tracker</span>
<span className="font-medium text-slate-800">84%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-rose-400 h-1.5 rounded-full" style={{width: '84%'}}></div></div>
</div>
<div className="cursor-pointer group" onclick="showToast('Detailed Community Stats')">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-800 transition-colors">Community Feed</span>
<span className="font-medium text-slate-800">62%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-purple-400 h-1.5 rounded-full" style={{width: '62%'}}></div></div>
</div>
<div className="cursor-pointer group" onclick="showToast('Detailed Meditation Stats')">
<div className="flex justify-between text-xs mb-1">
<span className="text-slate-600 group-hover:text-slate-800 transition-colors">Meditation Audio</span>
<span className="font-medium text-slate-800">45%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5"><div className="bg-blue-400 h-1.5 rounded-full" style={{width: '45%'}}></div></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs text-slate-500">Allow Notifications</span>
<label className="relative inline-flex items-center cursor-pointer" onchange="showToast(event.target.checked ? 'Notifications enabled' : 'Notifications disabled')">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-rose-400"></div>
</label>
</div>
</div>
</div>
</div>

<div className="tab-content max-w-3xl mx-auto" id="profile">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden mb-6">
<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-rose-100 to-orange-50"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center md:items-end gap-6 mt-10">
<div className="relative">
<img alt="Profile" className="w-24 h-24 rounded-full border-4 border-white shadow-sm object-cover bg-white" src="https://i.pravatar.cc/150?img=47"/>
<button className="absolute bottom-0 right-0 w-8 h-8 bg-rose-400 text-white rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors border-2 border-white" onclick="showToast('Change profile picture')">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
</button>
</div>
<div className="text-center md:text-left flex-1">
<h2 className="text-2xl font-medium tracking-tight text-slate-800">Sarah Jenkins</h2>
<p className="text-sm text-slate-500">Pro Member • Joined March 2023</p>
</div>
<button className="px-5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-700 text-sm font-medium rounded-xl border border-slate-200 transition-colors" onclick="showToast('Opening settings editor...')">
                                Edit Profile
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h3 className="text-sm font-medium text-slate-800 mb-4">Account Details</h3>
<div className="space-y-4">
<div>
<label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block mb-1">Email</label>
<p className="text-sm text-slate-700">sarah.jenkins@example.com</p>
</div>
<div>
<label className="text-[10px] uppercase tracking-wider text-slate-400 font-medium block mb-1">Subscription</label>
<p className="text-sm text-rose-500 font-medium flex items-center gap-2">
                                        Her Space Pro Annual <iconify-icon icon="solar:crown-star-linear"></iconify-icon>
</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<h3 className="text-sm font-medium text-slate-800 mb-4">Preferences</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Private Profile</span>
<label className="relative inline-flex items-center cursor-pointer" onchange="showToast(event.target.checked ? 'Profile is now private' : 'Profile is public')">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-rose-400"></div>
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">Daily Reminders</span>
<label className="relative inline-flex items-center cursor-pointer" onchange="showToast(event.target.checked ? 'Reminders ON' : 'Reminders OFF')">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-rose-400"></div>
</label>
</div>
</div>
</div>
</div>
<div className="mt-6 flex justify-center">
<button className="text-sm text-slate-400 hover:text-rose-500 font-medium transition-colors flex items-center gap-2" onclick="logout()">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Sign Out
                        </button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
