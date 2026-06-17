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



        // State Management
        let currentUser = null;
        
        // Initial Dummy Data
        const initialPosts = [
            {
                id: 1,
                author: 'webwiz',
                community: 'Frontend',
                communityColor: 'text-indigo-400 bg-indigo-500/20',
                initial: 'F',
                time: '4 hours ago',
                title: 'What is the best way to handle global state in 2024?',
                body: "I've been using Redux for years but recently started looking into Zustand and Jotai. What are your thoughts on shifting towards atomic state management?",
                upvotes: '12.4k',
                comments: 428,
                status: 'active', // active, removed, reported
                isReported: false
            },
            {
                id: 2,
                author: 'crypto_king_99',
                community: 'Unknown',
                communityColor: 'text-zinc-400 bg-zinc-500/20',
                initial: 'U',
                time: '1 hour ago',
                title: 'EARN 5000% APY GUARANTEED CLICK HERE!!!',
                body: 'http://scam-site-very-legit.com/ref=123',
                upvotes: 0,
                comments: 0,
                status: 'active',
                isReported: true,
                reportReason: 'Spam (3), Harassment (1)',
                link: true
            },
            {
                id: 3,
                author: 'shutterbug',
                community: 'Photography',
                communityColor: 'text-orange-400 bg-orange-500/20',
                initial: 'P',
                time: '8 hours ago',
                title: 'Minimalist architecture in Tokyo',
                image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                upvotes: '3.2k',
                comments: 89,
                status: 'active',
                isReported: false
            }
        ];

        // Load posts from local storage or use initial
        let posts = JSON.parse(localStorage.getItem('cmi_posts')) || initialPosts;

        // AUTHENTICATION LOGIC
        function handleLogin(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const isAdmin = username.toLowerCase() === 'admin';
            
            currentUser = {
                username: username,
                isAdmin: isAdmin,
                avatar: username.substring(0,2).toUpperCase()
            };

            // Save session
            localStorage.setItem('cmi_user', JSON.stringify(currentUser));
            
            initApp();
        }

        function handleLogout() {
            localStorage.removeItem('cmi_user');
            location.reload();
        }

        // APP INITIALIZATION
        function initApp() {
            const savedUser = JSON.parse(localStorage.getItem('cmi_user'));
            if (savedUser) {
                currentUser = savedUser;
                document.getElementById('auth-screen').classList.add('hidden');
                document.getElementById('app-screen').classList.remove('hidden');
                document.getElementById('app-screen').classList.add('flex');
                
                // Update UI based on user role
                document.getElementById('user-name-display').innerText = currentUser.username;
                document.getElementById('user-avatar').innerText = currentUser.avatar;
                
                if (currentUser.isAdmin) {
                    document.getElementById('admin-sidebar').classList.remove('hidden');
                    document.getElementById('user-role-display').innerHTML = `<iconify-icon icon="solar:shield-star-linear" width="10"></iconify-icon> Admin`;
                } else {
                    document.getElementById('admin-sidebar').classList.add('hidden');
                    document.getElementById('user-role-display').innerText = 'Member';
                }

                renderFeed();
            }
        }

        // FEED RENDERING SYSTEM
        function renderFeed() {
            const container = document.getElementById('feed-container');
            container.innerHTML = '';

            posts.forEach(post => {
                if (post.status === 'removed' && !currentUser.isAdmin) return; // Hide removed posts for non-admins

                const isRemoved = post.status === 'removed';
                const isReported = post.isReported;
                
                // Styling Logic based on state
                let cardClass = "bg-[#18181b] border border-white/5";
                if (isReported && currentUser.isAdmin && !isRemoved) cardClass = "bg-red-500/5 border border-red-500/30";
                if (isRemoved) cardClass = "bg-zinc-900/50 border border-zinc-800 opacity-75";

                let html = `
                <article class="${cardClass} rounded-lg overflow-hidden transition-all shadow-sm group hover:border-white/20">
                    ${isReported && !isRemoved && currentUser.isAdmin ? `
                        <div class="bg-red-500/10 border-b border-red-500/20 px-4 py-1.5 flex items-center justify-between text-xs">
                            <div class="flex items-center gap-2 text-red-400 font-medium">
                                <iconify-icon icon="solar:flag-bold" width="14"></iconify-icon>
                                <span>Reported: ${post.reportReason}</span>
                            </div>
                            <span class="text-red-400/70 text-[10px] uppercase tracking-wide">Action Required</span>
                        </div>
                    ` : ''}

                    <div class="flex">
                        <!-- Votes -->
                        <div class="w-10 bg-white/[0.02] flex flex-col items-center py-3 gap-1 border-r border-white/5">
                             ${isRemoved ? `<iconify-icon icon="solar:forbidden-linear" width="20" class="text-zinc-600"></iconify-icon>` : `
                            <button class="text-zinc-500 hover:text-orange-500 hover:bg-orange-500/10 p-1 rounded transition-colors">
                                <iconify-icon icon="solar:arrow-up-linear" width="22"></iconify-icon>
                            </button>
                            <span class="text-xs font-bold text-zinc-300">${post.upvotes}</span>
                            <button class="text-zinc-500 hover:text-blue-500 hover:bg-blue-500/10 p-1 rounded transition-colors">
                                <iconify-icon icon="solar:arrow-down-linear" width="22"></iconify-icon>
                            </button>
                            `}
                        </div>
                        
                        <!-- Content -->
                        <div class="flex-1 p-3">
                            <div class="flex items-center gap-2 text-xs mb-2">
                                <div class="w-5 h-5 ${post.communityColor} rounded-full flex items-center justify-center font-bold text-[10px]">${post.initial}</div>
                                <span class="font-semibold text-zinc-300 hover:underline cursor-pointer">c/${post.community}</span>
                                <span class="text-zinc-600">•</span>
                                <span class="text-zinc-500 hover:underline cursor-pointer">Posted by u/${post.author}</span>
                                <span class="text-zinc-600">${post.time}</span>
                            </div>
                            
                            ${isRemoved ? `
                                <h2 class="text-lg font-semibold text-zinc-500 line-through mb-1">[Removed] ${post.title}</h2>
                                <div class="bg-red-500/5 border border-red-500/20 rounded p-2 flex items-start gap-2 mt-2">
                                    <iconify-icon icon="solar:info-circle-linear" width="16" class="text-red-400 mt-0.5"></iconify-icon>
                                    <div>
                                        <p class="text-xs text-red-300 font-medium">Content Removed by Moderators</p>
                                        ${currentUser.isAdmin ? `<button onclick="restorePost(${post.id})" class="text-[10px] font-bold text-red-400 hover:text-red-300 hover:underline uppercase mt-1">Restore Content</button>` : ''}
                                    </div>
                                </div>
                            ` : `
                                <h2 class="text-lg font-semibold text-zinc-100 leading-tight mb-2">${post.title}</h2>
                                ${post.image ? `
                                    <div class="w-full h-64 bg-zinc-800 rounded-md mb-3 overflow-hidden border border-white/5">
                                        <img src="${post.image}" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity">
                                    </div>
                                ` : ''}
                                ${post.link ? `
                                    <div class="p-3 bg-zinc-900/50 rounded border border-white/10 mb-3 flex items-center gap-3">
                                        <div class="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center text-zinc-500">
                                            <iconify-icon icon="solar:link-broken-linear" width="20"></iconify-icon>
                                        </div>
                                        <div>
                                            <div class="text-xs text-blue-400 truncate w-64">${post.body}</div>
                                            <div class="text-[10px] text-zinc-500">External Link</div>
                                        </div>
                                    </div>
                                ` : `
                                    <p class="text-sm text-zinc-400 leading-relaxed mb-4">${post.body}</p>
                                `}
                            `}

                            ${!isRemoved ? `
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center gap-4 text-zinc-500 text-xs font-medium">
                                    <button class="flex items-center gap-1.5 hover:bg-white/5 px-2 py-1.5 rounded transition-colors">
                                        <iconify-icon icon="solar:chat-round-line-linear" width="16"></iconify-icon>
                                        ${post.comments} Comments
                                    </button>
                                    <button class="flex items-center gap-1.5 hover:bg-white/5 px-2 py-1.5 rounded transition-colors">
                                        <iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
                                        Share
                                    </button>
                                </div>
                                
                                <!-- Admin Actions Toolbar -->
                                ${currentUser.isAdmin ? `
                                    <div class="flex items-center gap-2">
                                        ${isReported ? `
                                        <button onclick="approvePost(${post.id})" class="flex items-center gap-1 px-2 py-1 bg-green-500/10 text-green-400 border border-green-500/20 hover:bg-green-500/20 rounded text-[10px] font-bold uppercase transition-colors">
                                            <iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon> Approve
                                        </button>
                                        ` : ''}
                                        <button onclick="removePost(${post.id})" class="flex items-center gap-1 px-2 py-1 bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 rounded text-[10px] font-bold uppercase transition-colors">
                                            <iconify-icon icon="solar:trash-bin-trash-linear" width="12"></iconify-icon> Remove
                                        </button>
                                    </div>
                                ` : `
                                    <button class="flex items-center gap-1 text-zinc-600 hover:text-zinc-400 hover:bg-white/5 px-2 py-1 rounded text-xs transition-colors">
                                        <iconify-icon icon="solar:flag-linear" width="14"></iconify-icon>
                                        Report
                                    </button>
                                `}
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </article>
                `;
                container.innerHTML += html;
            });
        }

        // ACTIONS
        function removePost(id) {
            const postIndex = posts.findIndex(p => p.id === id);
            if(postIndex > -1) {
                posts[postIndex].status = 'removed';
                saveAndRender();
            }
        }

        function restorePost(id) {
            const postIndex = posts.findIndex(p => p.id === id);
            if(postIndex > -1) {
                posts[postIndex].status = 'active';
                posts[postIndex].isReported = false; // clear report on restore
                saveAndRender();
            }
        }

        function approvePost(id) {
            const postIndex = posts.findIndex(p => p.id === id);
            if(postIndex > -1) {
                posts[postIndex].isReported = false;
                saveAndRender();
            }
        }

        function saveAndRender() {
            localStorage.setItem('cmi_posts', JSON.stringify(posts));
            renderFeed();
        }

        // Initialize
        initApp();

    
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
      

<div className="fixed inset-0 z-[100] bg-[#09090b] flex items-center justify-center p-4" id="auth-screen">
<div className="w-full max-w-sm bg-[#18181b] border border-white/5 rounded-2xl p-8 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-purple-600"></div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10">
<div className="flex flex-col items-center mb-8">
<div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-xl flex items-center justify-center font-bold tracking-tighter text-2xl shadow-lg shadow-orange-900/20 mb-4">
                        C
                    </div>
<h1 className="text-xl font-medium text-white tracking-tight">Welcome back</h1>
<p className="text-xs text-zinc-500 mt-1">Enter your credentials to access the terminal.</p>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Username</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:bg-black focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all sm:text-sm" id="username" placeholder="admin" type="text" value="admin"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 ml-1">Password</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon icon="solar:lock-password-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:bg-black focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all sm:text-sm" id="password" placeholder="••••••••" type="password" value="admin"/>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-orange-500 transition-all mt-6" type="submit">
                        Sign In
                    </button>
<div className="text-center mt-4">
<p className="text-[10px] text-zinc-500">
                            Use <span className="text-zinc-300 font-mono">admin / admin</span> for full access.
                        </p>
</div>
</form>
</div>
</div>
</div>

<div className="hidden flex-col h-full bg-[#09090b]" id="app-screen">

<nav className="h-14 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 flex items-center px-4 justify-between shrink-0 z-40 fixed w-full top-0 left-0">
<div className="flex items-center gap-3 w-1/4">
<button className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-orange-600 text-white rounded-lg flex items-center justify-center font-bold tracking-tighter text-sm group-hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20">
                        C
                    </div>
<span className="text-lg font-medium tracking-tight text-white hidden sm:block">CMI</span>
</a>
</div>

<div className="flex-1 max-w-md px-4 hidden sm:block">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600 group-focus-within:text-orange-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-1.5 border border-zinc-800 rounded-md leading-5 bg-[#18181b] text-zinc-300 placeholder-zinc-600 focus:outline-none focus:bg-black focus:ring-1 focus:ring-orange-500/50 focus:border-orange-500/50 sm:text-xs transition-all" placeholder="Search communities, posts, or users..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-zinc-700 text-[10px] border border-zinc-800 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>
</div>

<div className="w-1/4 flex justify-end items-center gap-2 sm:gap-4">
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-zinc-300 hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-white/10" onclick="createPostModal()">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span className="text-xs font-medium">Create</span>
</button>
<button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-full relative transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 block h-1.5 w-1.5 rounded-full ring-2 ring-[#09090b] bg-orange-500"></span>
</button>
<div className="flex items-center gap-2 pl-2 border-l border-white/5 ml-1 cursor-pointer hover:bg-white/5 p-1 pr-2 rounded-full transition-colors" id="user-menu-trigger">
<div className="relative">
<div className="w-7 h-7 rounded bg-zinc-800 text-zinc-300 flex items-center justify-center text-[10px] font-bold border border-white/5" id="user-avatar">

</div>
<div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-[#09090b]">
<iconify-icon className="text-black" icon="solar:shield-check-linear" strokeWidth="3" width="8"></iconify-icon>
</div>
</div>
<div className="hidden lg:flex flex-col">
<span className="text-xs font-medium text-white leading-tight" id="user-name-display">User</span>
<span className="text-[10px] text-zinc-500 font-medium tracking-wide flex items-center gap-0.5" id="user-role-display">
                            Member
                        </span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</nav>

<div className="flex flex-1 pt-14 h-full">

<aside className="w-64 hidden lg:flex flex-col border-r border-white/5 bg-[#09090b] h-full overflow-y-auto no-scrollbar pb-10">
<div className="p-3 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-white/5 rounded-md border border-white/5" href="#">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:flame-linear" width="18"></iconify-icon>
                        Popular
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:gamepad-linear" width="18"></iconify-icon>
                        Gaming
                    </a>
</div>
<div className="border-t border-white/5 my-2 mx-4"></div>

<div className="px-4 py-2 hidden" id="admin-sidebar">
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 px-2">Moderation</h3>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-zinc-400 hover:text-orange-400 hover:bg-orange-500/5 rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:inbox-archive-linear" width="18"></iconify-icon>
                                Mod Queue
                            </div>
<span className="bg-orange-500/10 text-orange-400 text-[10px] font-bold px-1.5 py-0.5 rounded border border-orange-500/20">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:mailbox-linear" width="18"></iconify-icon>
                            Modmail
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                            User Management
                        </a>
</div>
</div>
<div className="border-t border-white/5 my-2 mx-4"></div>
<div className="px-4 py-2">
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 px-2">Communities</h3>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-[8px] font-bold ring-1 ring-blue-500/30">T</div>
                            c/Technology
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-[8px] font-bold ring-1 ring-green-500/30">D</div>
                            c/Design
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-[8px] font-bold ring-1 ring-purple-500/30">W</div>
                            c/WebDev
                        </a>
</div>
</div>
<div className="mt-auto p-4">
<button className="flex items-center gap-3 px-3 py-2 w-full text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-md transition-colors border border-transparent hover:border-red-500/20" onclick="handleLogout()">
<iconify-icon icon="solar:logout-2-linear" width="18"></iconify-icon>
                        Logout
                    </button>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-[#09090b] p-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full pb-20 scroll-smooth">

<div className="bg-[#18181b] border border-white/5 rounded-lg p-3 mb-6 flex items-center gap-3 shadow-lg cursor-text group transition-colors hover:border-white/10">
<div className="w-8 h-8 rounded bg-zinc-800 text-zinc-400 flex items-center justify-center text-xs font-semibold shrink-0 group-hover:text-white transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="16"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none text-sm px-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-0" placeholder="Create Post" type="text"/>
<button className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</button>
<button className="p-2 text-zinc-500 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 mb-4 text-xs font-medium text-zinc-500 overflow-x-auto no-scrollbar">
<button className="px-3 py-1.5 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/5">Best</button>
<button className="px-3 py-1.5 hover:bg-white/5 hover:text-zinc-300 rounded-full transition-colors border border-transparent hover:border-white/5">Hot</button>
<button className="px-3 py-1.5 hover:bg-white/5 hover:text-zinc-300 rounded-full transition-colors border border-transparent hover:border-white/5">New</button>
<button className="px-3 py-1.5 hover:bg-white/5 hover:text-zinc-300 rounded-full transition-colors border border-transparent hover:border-white/5">Top</button>
<div className="flex-1"></div>
<button className="flex items-center gap-1 hover:bg-white/5 text-zinc-500 hover:text-white px-2 py-1 rounded transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>

<div className="space-y-4" id="feed-container">

</div>
</main>

<aside className="w-80 hidden xl:flex flex-col gap-4 p-4 pr-6 overflow-y-auto no-scrollbar border-l border-white/5 bg-[#09090b]">

<div className="bg-[#18181b] border border-white/5 rounded-lg overflow-hidden shadow-sm">
<div className="h-10 bg-gradient-to-r from-zinc-800 to-zinc-900"></div>
<div className="px-4 pb-4">
<div className="flex justify-between items-end -mt-5 mb-2">
<div className="w-14 h-14 bg-[#18181b] p-1 rounded-full">
<div className="w-full h-full bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-inner shadow-black/20">
                                    C
                                </div>
</div>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold hover:bg-zinc-200 transition-colors">Joined</button>
</div>
<div className="flex items-center gap-1 mb-1">
<h2 className="font-semibold text-white">c/CMI</h2>
<span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[10px] px-1.5 rounded font-bold uppercase">Mod</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed mb-4">
                            The official community for CMI discussions. News, updates, and community driven content.
                        </p>
<div className="flex gap-8 border-b border-white/5 pb-4 mb-4">
<div>
<div className="font-semibold text-white text-sm">1.2m</div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Members</div>
</div>
<div>
<div className="font-semibold text-white text-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span> 4.8k
                                </div>
<div className="text-[10px] text-zinc-500 font-medium uppercase tracking-wide">Online</div>
</div>
</div>
<button className="w-full py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-500 transition-colors mb-2 shadow-lg shadow-orange-900/20">Create Post</button>
</div>
</div>

<div className="bg-[#18181b] border border-white/5 rounded-lg p-4 shadow-sm">
<h3 className="font-semibold text-xs text-zinc-300 mb-3 flex items-center gap-2 uppercase tracking-wide">
<iconify-icon icon="solar:history-linear" width="14"></iconify-icon>
                        Audit Log
                    </h3>
<div className="space-y-3 relative">

<div className="absolute left-[6px] top-1 bottom-1 w-px bg-zinc-800"></div>
<div className="flex gap-3 relative z-10">
<div className="mt-0.5 bg-[#18181b] ring-4 ring-[#18181b] rounded-full"><iconify-icon className="text-red-500" icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></div>
<div className="text-xs">
<span className="font-medium text-zinc-300">Admin</span> removed post
                                <div className="text-[10px] text-zinc-500 mt-0.5">2m ago • Spam</div>
</div>
</div>
<div className="flex gap-3 relative z-10">
<div className="mt-0.5 bg-[#18181b] ring-4 ring-[#18181b] rounded-full"><iconify-icon className="text-white" icon="solar:hammer-linear" width="14"></iconify-icon></div>
<div className="text-xs">
<span className="font-medium text-zinc-300">Mod_Steve</span> banned user
                                <div className="text-[10px] text-zinc-500 mt-0.5">15m ago • Rule #1</div>
</div>
</div>
</div>
</div>
<div className="text-[10px] text-zinc-600 leading-relaxed px-2">
                    CMI © 2024. All rights reserved. <br/> Privacy Policy • User Agreement
                </div>
</aside>
</div>
</div>



    </>
  );
}
