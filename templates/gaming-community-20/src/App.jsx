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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Global UI Functions
        function showToast(message, icon = 'solar:info-circle-linear') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'glass-panel bg-zinc-900/90 px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium text-white shadow-xl fade-in border border-white/10';
            toast.innerHTML = `<iconify-icon icon="${icon}" width="18" class="text-indigo-400"></iconify-icon> ${message}`;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.replace('fade-in', 'fade-out');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        function handleNav(el, e) {
            e.preventDefault();
            const text = el.innerText.trim();
            showToast(`Opening ${text}...`, 'solar:mouse-circle-linear');
        }

        function handleJoinRequest(btn) {
            if (btn.classList.contains('pointer-events-none')) return;
            
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Requested';
            btn.classList.remove('bg-white/5', 'hover:bg-white/10', 'text-white', 'border-white/5');
            btn.classList.add('bg-emerald-500/10', 'text-emerald-400', 'border-emerald-500/20', 'pointer-events-none');
            showToast('Request to join sent!', 'solar:user-check-linear');
        }

        function handlePostFlock(form) {
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:radar-linear" width="18" class="animate-spin"></iconify-icon> Posting...';
            btn.classList.add('opacity-80', 'cursor-wait');
            
            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Posted!';
                btn.classList.remove('opacity-80', 'cursor-wait', 'bg-indigo-500', 'hover:bg-indigo-400');
                btn.classList.add('bg-emerald-500', 'hover:bg-emerald-400', 'shadow-emerald-500/20');
                showToast('Flock posted successfully!', 'solar:confetti-linear');
                
                form.reset();
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400', 'shadow-emerald-500/20');
                    btn.classList.add('bg-indigo-500', 'hover:bg-indigo-400');
                }, 2500);
            }, 1000);
        }

        // Auth Logic
        function toggleAuth(type) {
            const signinContainer = document.getElementById('signin-container');
            const signupContainer = document.getElementById('signup-container');
            
            if (type === 'signup') {
                signinContainer.classList.add('hidden');
                signupContainer.classList.remove('hidden');
                signupContainer.classList.add('fade-in');
                setTimeout(() => signupContainer.classList.remove('fade-in'), 300);
            } else {
                signupContainer.classList.add('hidden');
                signinContainer.classList.remove('hidden');
                signinContainer.classList.add('fade-in');
                setTimeout(() => signinContainer.classList.remove('fade-in'), 300);
            }
        }

        function handleLogin() {
            const authView = document.getElementById('auth-view');
            const dashboardView = document.getElementById('dashboard-view');
            
            authView.classList.add('fade-out');
            
            setTimeout(() => {
                authView.classList.add('hidden');
                authView.classList.remove('fade-out');
                
                dashboardView.classList.remove('hidden');
                dashboardView.classList.add('fade-in');
                
                showToast('Successfully signed in', 'solar:shield-check-linear');
                
                setTimeout(() => {
                    dashboardView.classList.remove('fade-in');
                }, 300);
            }, 300);
        }

        function handleLogout() {
            const authView = document.getElementById('auth-view');
            const dashboardView = document.getElementById('dashboard-view');
            const signinContainer = document.getElementById('signin-container');
            const signupContainer = document.getElementById('signup-container');
            
            dashboardView.classList.add('fade-out');
            
            setTimeout(() => {
                dashboardView.classList.add('hidden');
                dashboardView.classList.remove('fade-out');
                
                signupContainer.classList.add('hidden');
                signinContainer.classList.remove('hidden');
                
                authView.classList.remove('hidden');
                authView.classList.add('fade-in');
                
                showToast('Signed out', 'solar:logout-linear');

                setTimeout(() => {
                    authView.classList.remove('fade-in');
                }, 300);
            }, 300);
        }

        // Simulated Test Data
        const testDataStorage = {
            currentUser: {
                name: "Nova Kendricks",
                firstName: "Nova",
                username: "@nova_plays",
                avatar: "https://i.pravatar.cc/150?img=49",
                lfgStatus: true
            },
            flockFeed: [
                {
                    title: "Late Night Ranked Grind",
                    desc: "Looking for 2 more to fill out our squad. Currently Gold/Plat elo. Must have comms and chill vibes. No toxicity.",
                    creator: {
                        name: "Sarah Jenkins",
                        username: "@sjeee",
                        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
                    },
                    platform: "PC",
                    platformIcon: "solar:monitor-linear",
                    game: "Valorant",
                    vibe: "Competitive",
                    members: "3/5"
                },
                {
                    title: "Elden Ring DLC Co-op",
                    desc: "Need help with the new bosses. I'm running a strength build, could use some magic support to balance the team out!",
                    creator: {
                        name: "Marcus T",
                        username: "@marcust_gg",
                        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
                    },
                    platform: "Console",
                    platformIcon: "solar:gamepad-linear",
                    game: "Elden Ring",
                    vibe: "Co-op",
                    members: "1/2"
                }
            ],
            recentActivity: [
                {
                    title: "Welcome to Flock!",
                    desc: "Your account has been set up successfully.",
                    icon: "solar:confetti-linear",
                    iconClass: "text-emerald-400 bg-emerald-500/20 border-emerald-500/20",
                    time: "Just now"
                },
                {
                    title: "Game Synced",
                    desc: "Valorant & Elden Ring stats successfully linked.",
                    icon: "solar:link-circle-linear",
                    iconClass: "text-indigo-400 bg-indigo-500/20 border-indigo-500/20",
                    time: "1m ago"
                }
            ],
            friendsOnline: [
                {
                    name: "Jinx",
                    status: "In Menu - Valorant",
                    avatar: "https://i.pravatar.cc/150?img=12",
                    dotClass: "bg-emerald-500",
                    statusColor: "text-indigo-400",
                    imgClass: ""
                },
                {
                    name: "Daveee",
                    status: "Watching Netflix",
                    avatar: "https://i.pravatar.cc/150?img=33",
                    dotClass: "bg-purple-500",
                    statusColor: "text-zinc-600",
                    imgClass: "opacity-60 mix-blend-luminosity"
                },
                {
                    name: "Player_One",
                    status: "Away",
                    avatar: "https://i.pravatar.cc/150?img=47",
                    dotClass: "bg-amber-500",
                    statusColor: "text-amber-400",
                    imgClass: ""
                }
            ]
        };

        // Render UI
        function initDashboard() {
            const avatarEl = document.getElementById("sidebar-avatar");
            if(avatarEl) {
                avatarEl.src = testDataStorage.currentUser.avatar;
                document.getElementById("sidebar-name").textContent = testDataStorage.currentUser.name;
                document.getElementById("sidebar-username").textContent = testDataStorage.currentUser.username;
                document.getElementById("welcome-text").textContent = `Welcome, ${testDataStorage.currentUser.firstName}`;
                document.getElementById("lfg-toggle").checked = testDataStorage.currentUser.lfgStatus;
            }

            const feedContainer = document.getElementById("flock-feed-container");
            if(feedContainer) {
                feedContainer.innerHTML = testDataStorage.flockFeed.map(post => `
                    <div class="glass-panel rounded-2xl p-5 hover:border-white/10 transition-colors group">
                        <div class="flex justify-between items-start mb-3">
                            <div>
                                <h3 class="text-base font-medium text-white mb-1.5">${post.title}</h3>
                                <div class="flex items-center gap-2">
                                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-5 h-5 rounded-full object-cover mix-blend-luminosity opacity-80" alt="Creator">
                                    <span class="text-xs text-zinc-400 font-light">Posted by ${post.creator.username}</span>
                                </div>
                            </div>
                            <div class="bg-indigo-500/10 text-indigo-400 text-xs px-2.5 py-1.5 rounded-md font-medium flex items-center gap-1.5 shrink-0">
                                <iconify-icon icon="solar:users-group-two-rounded-linear" width="14"></iconify-icon>
                                ${post.members}
                            </div>
                        </div>
                        
                        <p class="text-sm text-zinc-300 font-light mb-5 leading-relaxed">${post.desc}</p>
                        
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                            <div class="flex flex-wrap gap-2">
                                <span class="bg-zinc-900 border border-white/5 rounded-md px-2 py-1 text-xs text-zinc-500 flex items-center gap-1.5"><iconify-icon icon="${post.platformIcon}" width="12"></iconify-icon> ${post.platform}</span>
                                <span class="bg-zinc-900 border border-white/5 rounded-md px-2 py-1 text-xs text-zinc-500">${post.game}</span>
                                <span class="bg-zinc-900 border border-white/5 rounded-md px-2 py-1 text-xs text-zinc-500">${post.vibe}</span>
                            </div>
                            <button type="button" onclick="event.preventDefault(); handleJoinRequest(this);" class="shrink-0 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-xl transition-all border border-white/5 w-full sm:w-auto">
                                Request to Join
                            </button>
                        </div>
                    </div>
                `).join('');
            }

            const activityContainer = document.getElementById("activity-container");
            if(activityContainer) {
                activityContainer.innerHTML = testDataStorage.recentActivity.map(activity => `
                    <div onclick="showToast('Viewing activity details...', 'solar:eye-linear')" class="p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer flex items-center justify-between group">
                        <div class="flex items-center gap-4">
                            <div class="w-10 h-10 rounded-lg border flex items-center justify-center ${activity.iconClass}">
                                <iconify-icon icon="${activity.icon}" width="20"></iconify-icon>
                            </div>
                            <div>
                                <h4 class="text-sm font-medium text-zinc-200">${activity.title}</h4>
                                <p class="text-xs text-zinc-500 font-light">${activity.desc}</p>
                            </div>
                        </div>
                        <span class="text-xs text-zinc-600 font-light group-hover:text-zinc-400 transition-colors">${activity.time}</span>
                    </div>
                `).join('');
            }

            const friendsContainer = document.getElementById("friends-container");
            if(friendsContainer) {
                document.getElementById("friends-header").textContent = `Friends Online (${testDataStorage.friendsOnline.length})`;
                friendsContainer.innerHTML = testDataStorage.friendsOnline.map(friend => `
                    <div onclick="showToast('Opening chat with ${friend.name}', 'solar:chat-round-line-linear')" class="flex items-center gap-3 cursor-pointer group hover:bg-white/5 p-2 -mx-2 rounded-xl transition-colors">
                        <div class="relative">
                            <div class="w-8 h-8 rounded-full bg-zinc-800 overflow-hidden">
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Avatar" class="w-full h-full object-cover ${friend.imgClass}">
                            </div>
                            <div class="absolute bottom-0 right-0 w-2 h-2 ${friend.dotClass} border border-zinc-900 rounded-full"></div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-zinc-200 truncate group-hover:text-white transition-colors">${friend.name}</p>
                            <p class="text-xs ${friend.statusColor} truncate">${friend.status}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        initDashboard();
        
    
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
      

<div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none" id="toast-container"></div>

<div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
<div className="fixed bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-y-1/3 pointer-events-none"></div>

<div className="w-full min-h-screen flex items-center justify-center relative z-20 px-4 py-12 flex-col" id="auth-view">

<div className="w-full max-w-sm" id="signin-container">
<div className="mb-8 text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-6">
<iconify-icon icon="solar:gamepad-charge-linear" width="28"></iconify-icon>
</div>
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2">Sign in to Flock</h1>
<p className="text-sm text-zinc-400 font-light max-w-sm">Connect with players, sync your stats, and drop into your next favorite lobby.</p>
</div>
<div className="glass-panel w-full max-w-sm p-6 lg:p-8 rounded-3xl relative">
<form className="space-y-5" onsubmit="event.preventDefault(); handleLogin();">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 ml-1">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="name@example.com" type="email"/>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5 ml-1 pr-1">
<label className="block text-xs font-medium text-zinc-300">Password</label>
<button className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors" onclick="event.preventDefault(); showToast('Password reset link sent to your email.', 'solar:letter-opened-linear')" type="button">Forgot?</button>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="pt-1">
<label className="flex items-center gap-2.5 cursor-pointer group w-max">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-4 h-4 bg-zinc-950 border border-white/10 rounded peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-colors"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs font-light text-zinc-400 group-hover:text-zinc-300 transition-colors">Keep me signed in</span>
</label>
</div>
<button className="w-full bg-white text-zinc-950 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors mt-2 flex items-center justify-center gap-2" type="submit">
                        Sign In <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
<div className="mt-6 text-center border-t border-white/5 pt-6">
<p className="text-xs text-zinc-500 font-light">
                        Don't have an account? 
                        <button className="font-medium text-white hover:text-indigo-400 transition-colors ml-1" onclick="event.preventDefault(); toggleAuth('signup')" type="button">Sign up</button>
</p>
</div>
</div>
</div>

<div className="w-full max-w-sm hidden" id="signup-container">
<div className="mb-8 text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xl shadow-indigo-500/20 mb-6">
<iconify-icon icon="solar:gamepad-charge-linear" width="28"></iconify-icon>
</div>
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2">Create an Account</h1>
<p className="text-sm text-zinc-400 font-light max-w-sm">Join the flock to find your perfect squad and track your progress.</p>
</div>
<div className="glass-panel w-full max-w-sm p-6 lg:p-8 rounded-3xl relative">
<form className="space-y-5" onsubmit="event.preventDefault(); handleLogin();">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 ml-1">Username</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="PlayerOne" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 ml-1">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="name@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-1.5 ml-1">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full bg-white text-zinc-950 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors mt-2 flex items-center justify-center gap-2" type="submit">
                        Sign Up <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
<div className="mt-6 text-center border-t border-white/5 pt-6">
<p className="text-xs text-zinc-500 font-light">
                        Already have an account? 
                        <button className="font-medium text-white hover:text-indigo-400 transition-colors ml-1" onclick="event.preventDefault(); toggleAuth('signin')" type="button">Sign in</button>
</p>
</div>
</div>
</div>
</div>

<div className="hidden w-full flex min-h-screen" id="dashboard-view">

<aside className="hidden lg:flex w-64 flex-col border-r border-white/5 bg-zinc-950/80 backdrop-blur-xl h-screen sticky top-0 z-20 shrink-0">
<div className="p-6 flex items-center gap-2 mb-4 shrink-0">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:gamepad-charge-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight text-base">FLOCK GAMER</span>
</div>
<nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 mt-4">Menu</p>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium bg-indigo-500/10 text-indigo-300 transition-colors" href="#" onclick="handleNav(this, event)">
<iconify-icon icon="solar:home-angle-linear" width="20"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#" onclick="handleNav(this, event)">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
                    Flock Feed
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#" onclick="handleNav(this, event)">
<div className="relative flex items-center justify-center">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</div>
                    Messages
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#" onclick="handleNav(this, event)">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
                    Scheduled Sessions
                </a>
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 mt-8">Your Games</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-light text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#" onclick="handleNav(this, event)">
<div className="w-6 h-6 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:ghost-linear" width="14"></iconify-icon>
</div>
                    Valorant
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-light text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors" href="#" onclick="handleNav(this, event)">
<div className="w-6 h-6 rounded bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-500">
<iconify-icon icon="solar:sword-linear" width="14"></iconify-icon>
</div>
                    Elden Ring
                </a>
</nav>
<div className="p-4 shrink-0 border-t border-white/5 flex flex-col gap-2">
<button className="flex w-full items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors" onclick="event.preventDefault(); handleLogout();" type="button">
<iconify-icon icon="solar:logout-linear" width="18"></iconify-icon>
                    Sign Out
                </button>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-colors mt-2" href="#" onclick="handleNav(this, event)">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 overflow-hidden shrink-0">
<img alt="Avatar" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" id="sidebar-avatar" src=""/>
</div>
<div className="flex-1 min-w-0">
<p className="text-zinc-200 truncate" id="sidebar-name">Loading...</p>
<p className="text-xs text-zinc-500 truncate font-light" id="sidebar-username">@loading</p>
</div>
<iconify-icon className="text-zinc-500" icon="solar:settings-linear" width="18"></iconify-icon>
</a>
</div>
</aside>

<main className="flex-1 min-w-0 flex flex-col min-h-screen relative z-10">

<header className="lg:hidden h-16 flex items-center justify-between px-6 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:gamepad-charge-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-rose-400 transition-colors" onclick="event.preventDefault(); handleLogout();" type="button">
<iconify-icon icon="solar:logout-linear" width="22"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-200" onclick="event.preventDefault(); showToast('Mobile menu expanded', 'solar:hamburger-menu-linear');" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="p-6 lg:p-8 max-w-6xl mx-auto w-full space-y-8 pb-20">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
<div>
<h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-white mb-2" id="welcome-text">Welcome to Flock Gamer</h1>
<p className="text-sm text-zinc-400 font-light">Here's what's happening in your network today.</p>
</div>

<div className="glass-panel px-4 py-3 rounded-xl flex items-center gap-4 shrink-0">
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Looking for Group</span>
<span className="text-xs text-zinc-500 font-light">Let others invite you</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer toggle-checkbox" id="lfg-toggle" onchange="showToast(this.checked ? 'LFG Status: Active' : 'LFG Status: Hidden', 'solar:user-circle-linear')" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-800 rounded-full peer peer-checked:bg-indigo-500/80 transition-colors duration-300 toggle-label after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-medium text-white tracking-tight">Flock Feed</h2>
<button className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1" onclick="event.preventDefault(); showToast('Refreshing feed...', 'solar:refresh-linear');" type="button">
                                    Refresh <iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 gap-4" id="flock-feed-container">

</div>
</div>

<div>
<h2 className="text-lg font-medium text-white tracking-tight mb-4 mt-8">Recent Activity</h2>
<div className="glass-panel rounded-2xl p-2 flex flex-col gap-1" id="activity-container">

</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Create a Flock</h3>
<p className="text-xs text-zinc-400 font-light mb-6">Start a new group and let players join your session.</p>
<form className="space-y-3 mb-6" onsubmit="event.preventDefault(); handlePostFlock(this);">
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" placeholder="Flock Title (e.g. Ranked Grind)" required="" type="text"/>
<textarea className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none custom-scrollbar" placeholder="Description..." required="" rows="2"></textarea>
<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-950/50 border border-white/5 rounded-xl px-3 py-2.5 flex items-center justify-between cursor-pointer hover:border-white/10 transition-colors" onclick="showToast('Opening Game selection...', 'solar:alt-arrow-down-linear')">
<span className="text-xs text-zinc-300 truncate">Game: <span className="text-white font-medium">Valorant</span></span>
<iconify-icon className="text-zinc-500 shrink-0" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
<div className="bg-zinc-950/50 border border-white/5 rounded-xl px-3 py-2.5 flex items-center justify-between cursor-pointer hover:border-white/10 transition-colors" onclick="showToast('Opening Vibe selection...', 'solar:alt-arrow-down-linear')">
<span className="text-xs text-zinc-300 truncate">Vibe: <span className="text-white font-medium">Casual</span></span>
<iconify-icon className="text-zinc-500 shrink-0" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
<button className="w-full mt-2 flex items-center justify-center gap-2 bg-indigo-500 text-white px-4 py-3 rounded-xl text-sm font-medium hover:bg-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/20" type="submit">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                                        Post to Feed
                                    </button>
</form>
</div>
</div>

<div className="glass-panel rounded-2xl p-5">
<h3 className="text-sm font-medium text-zinc-200 mb-4" id="friends-header">Friends Online</h3>
<div className="space-y-4" id="friends-container">

</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
