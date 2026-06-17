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



        const CONFIG = {
            OWNER_USER: 'unknownsteveyt',
            OWNER_PASS: 'GetRickRolled'
        };

        let state = {
            user: null,
            isOwner: false,
            activeDM: null,
            users: [
                { id: 1, name: 'CyberWolf', role: 'Mod', status: 'online', avatar: 'bg-indigo-500' },
                { id: 2, name: 'PixelArtz', role: 'Member', status: 'online', avatar: 'bg-pink-500' },
                { id: 3, name: 'Glitch00', role: 'Member', status: 'idle', avatar: 'bg-purple-500' },
                { id: 4, name: 'Guest_99', role: 'Guest', status: 'dnd', avatar: 'bg-slate-500' }
            ],
            messages: [
                { id: 1, user: 'SYSTEM', text: 'Welcome to BLOXD Chat v9.5. Respect the rules.', time: 'Now', type: 'system', pinned: true },
                { id: 2, user: 'CyberWolf', text: 'Has anyone seen the new update?', time: '10:00 AM', type: 'text', pinned: false },
                { id: 3, user: 'PixelArtz', text: 'Yeah looks super clean!', time: '10:01 AM', type: 'text', pinned: false }
            ],
            dms: {}, // Structure: { 'Username': [{ user: 'Me', text: 'hi' }] }
            lockdown: false
        };

        // --- AUTH ---
        function handleLogin() {
            const input = document.getElementById('username-input');
            const username = input.value.trim();
            if(!username) return input.focus();

            if(username.toLowerCase() === CONFIG.OWNER_USER.toLowerCase()) {
                document.getElementById('step-1').classList.add('hidden');
                document.getElementById('step-2').classList.remove('hidden');
                document.getElementById('login-card').classList.replace('neon-border-blue', 'neon-border-gold');
                document.getElementById('title-accent').classList.replace('text-cyan-400', 'text-amber-400');
                document.getElementById('login-accent').classList.replace('bg-cyan-500', 'bg-amber-500');
            } else {
                completeLogin(username, 'Member');
            }
        }

        function verifyOwner() {
            const pass = document.getElementById('password-input').value;
            if(pass === CONFIG.OWNER_PASS) {
                completeLogin(CONFIG.OWNER_USER, 'Owner');
            } else {
                alert("ACCESS DENIED");
            }
        }

        function backToLogin() {
            document.getElementById('step-2').classList.add('hidden');
            document.getElementById('step-1').classList.remove('hidden');
            document.getElementById('login-card').classList.replace('neon-border-gold', 'neon-border-blue');
            document.getElementById('title-accent').classList.replace('text-amber-400', 'text-cyan-400');
            document.getElementById('login-accent').classList.replace('bg-amber-500', 'bg-cyan-500');
        }

        function completeLogin(username, role) {
            state.user = { name: username, role: role, avatar: role === 'Owner' ? 'bg-amber-500' : 'bg-cyan-600' };
            state.isOwner = (role === 'Owner');

            // Setup UI based on role
            document.getElementById('my-name').innerText = username;
            document.getElementById('my-role').innerText = role;
            const avatar = document.getElementById('my-avatar');
            avatar.className = `w-8 h-8 rounded-full ${state.user.avatar} flex items-center justify-center text-xs font-bold text-white relative border border-white/20`;
            if(state.isOwner) {
                document.getElementById('nav-admin').classList.remove('hidden');
                document.getElementById('mobile-admin-link').classList.remove('hidden');
                document.getElementById('app-logo-bg').classList.replace('from-cyan-500', 'from-amber-500');
                document.getElementById('app-logo-bg').classList.replace('to-blue-600', 'to-orange-600');
                showToast('Welcome Owner', 'System Access Granted');
            } else {
                state.users.push({ id: Date.now(), name: username, role: role, status: 'online', avatar: 'bg-cyan-600' });
            }

            // Hide Login
            document.getElementById('login-view').classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => { 
                document.getElementById('login-view').style.display = 'none';
                document.getElementById('app').classList.remove('opacity-0');
            }, 500);

            renderUsers();
            renderChat();
        }

        // --- NAVIGATION ---
        function switchTab(tab) {
            ['chat', 'admin', 'dm'].forEach(t => {
                const el = document.getElementById(`view-${t}`);
                if(el) el.classList.add('hidden');
            });
            document.getElementById(`view-${tab}`).classList.remove('hidden');
            
            // Highlight Nav
            const chatBtn = document.getElementById('nav-chat');
            const adminBtn = document.getElementById('nav-admin');
            
            chatBtn.className = 'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ' + (tab === 'chat' ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5');
            
            if(adminBtn) {
                adminBtn.className = 'w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ' + (tab === 'admin' ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20' : 'text-amber-400 hover:bg-amber-500/10');
            }

            if(tab === 'chat') {
                state.activeDM = null;
                document.getElementById('header-title').innerText = "Global Chat";
            }
        }

        // --- USERS & DM ---
        function renderUsers() {
            const list = document.getElementById('online-users-list');
            const mobileList = document.getElementById('mobile-user-list');
            document.getElementById('online-count').innerText = state.users.length;
            
            let html = '';
            state.users.forEach(u => {
                if(u.name === state.user.name) return; // Don't show self
                const isOwner = u.name === CONFIG.OWNER_USER || u.role === 'Owner';
                const statusColor = u.status === 'online' ? 'bg-emerald-500' : (u.status === 'idle' ? 'bg-amber-500' : 'bg-red-500');
                
                html += `
                <div onclick="startDM('${u.name}')" class="group flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors">
                    <div class="relative">
                        <div class="w-8 h-8 rounded-full ${u.avatar} flex items-center justify-center text-xs font-bold text-white border border-white/10">
                            ${u.name[0]}
                        </div>
                        <div class="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 ${statusColor} rounded-full border-2 border-slate-900"></div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-1">
                            <span class="text-xs font-medium text-slate-200 truncate group-hover:text-white transition-colors">${u.name}</span>
                            ${isOwner ? '<iconify-icon icon="solar:crown-bold" class="text-amber-400 text-[10px]"></iconify-icon>' : ''}
                        </div>
                        <span class="text-[10px] text-slate-500 capitalize block">${u.role}</span>
                    </div>
                    <iconify-icon icon="solar:chat-round-dots-linear" class="text-slate-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all"></iconify-icon>
                </div>`;
            });
            list.innerHTML = html;
            mobileList.innerHTML = html;
        }

        function startDM(targetUser) {
            state.activeDM = targetUser;
            if(!state.dms[targetUser]) state.dms[targetUser] = [];
            
            document.getElementById('dm-target-name').innerText = targetUser;
            renderDM();
            switchTab('dm');
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        function closeDM() {
            switchTab('chat');
        }

        function renderDM() {
            if(!state.activeDM) return;
            const msgs = state.dms[state.activeDM];
            const container = document.getElementById('dm-container');
            container.innerHTML = `<div class="text-center text-[10px] text-slate-600 py-4 uppercase tracking-widest">Start of encrypted chat with ${state.activeDM}</div>`;
            
            msgs.forEach(msg => {
                const isMe = msg.user === state.user.name;
                container.innerHTML += `
                    <div class="flex ${isMe ? 'justify-end' : 'justify-start'} animate-slide-up">
                        <div class="max-w-[80%] rounded-2xl px-4 py-2 text-sm ${isMe ? 'bg-indigo-600 text-white' : 'bg-white/10 text-slate-200'}">
                            ${msg.text}
                        </div>
                    </div>`;
            });
            container.scrollTop = container.scrollHeight;
        }

        function sendDM() {
            const input = document.getElementById('dm-input');
            const text = input.value.trim();
            if(!text || !state.activeDM) return;
            
            state.dms[state.activeDM].push({ user: state.user.name, text: text });
            input.value = '';
            renderDM();
            
            // Simulate Reply
            setTimeout(() => {
                if(state.activeDM) {
                    state.dms[state.activeDM].push({ user: state.activeDM, text: "I'm currently away but I got your message." });
                    renderDM();
                    showToast(state.activeDM, "New Private Message");
                }
            }, 2000);
        }


        // --- CHAT SYSTEM ---
        function handleKey(e, type) { if(e.key === 'Enter') type === 'global' ? sendGlobal() : sendDM(); }

        function renderChat() {
            const container = document.getElementById('chat-container');
            container.innerHTML = '';
            
            state.messages.forEach((msg, index) => {
                const isMe = msg.user === state.user.name;
                const isOwnerMsg = msg.user === CONFIG.OWNER_USER;
                
                // Styles
                let bgClass = isMe ? 'bg-cyan-900/20 border-cyan-500/20' : 'bg-white/5 border-white/10';
                if(msg.type === 'system') bgClass = 'bg-red-500/10 border-red-500/20 text-center';
                if(msg.pinned) bgClass += ' pinned-msg';
                if(isOwnerMsg && msg.type !== 'system') bgClass = 'bg-amber-500/10 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.1)]';

                // Controls for Owner
                let ownerControls = '';
                if(state.isOwner && msg.type !== 'system') {
                    ownerControls = `
                    <div class="absolute -top-3 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-white/10 rounded px-1 py-0.5 z-10">
                        <button onclick="togglePin(${msg.id})" title="Pin" class="p-1 hover:text-amber-400 text-slate-400"><iconify-icon icon="solar:pin-bold"></iconify-icon></button>
                        <button onclick="deleteMsg(${msg.id})" title="Delete" class="p-1 hover:text-red-400 text-slate-400"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
                        ${!isMe ? `<button onclick="banUser('${msg.user}')" title="Ban" class="p-1 hover:text-red-600 text-slate-400"><iconify-icon icon="solar:forbidden-circle-linear"></iconify-icon></button>` : ''}
                    </div>`;
                }

                const pinIcon = msg.pinned ? `<iconify-icon icon="solar:pin-bold" class="text-amber-400 text-xs inline-block mr-1"></iconify-icon>` : '';
                const crown = isOwnerMsg ? `<iconify-icon icon="solar:crown-bold" class="text-amber-400 ml-1"></iconify-icon>` : '';
                
                // HTML Construction
                if (msg.type === 'system') {
                    container.innerHTML += `
                        <div class="flex justify-center my-2 animate-slide-up">
                            <div class="text-[10px] font-bold tracking-widest uppercase text-red-400 bg-red-950/50 px-4 py-1 rounded-full border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                ${msg.text}
                            </div>
                        </div>`;
                } else {
                    container.innerHTML += `
                        <div class="flex ${isMe ? 'justify-end' : 'justify-start'} group relative animate-slide-up mb-1">
                            ${ownerControls}
                            <div class="flex items-end max-w-[85%] gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}">
                                ${!isMe ? `<div class="w-8 h-8 rounded-full ${msg.user === CONFIG.OWNER_USER ? 'bg-amber-500' : 'bg-slate-700'} flex shrink-0 items-center justify-center text-xs font-bold">${msg.user[0]}</div>` : ''}
                                <div>
                                    <div class="flex items-center gap-2 mb-1 ${isMe ? 'justify-end' : 'justify-start'}">
                                        <span class="text-xs font-bold ${isOwnerMsg ? 'text-amber-400 owner-badge' : 'text-slate-300'} flex items-center">${msg.user} ${crown}</span>
                                        <span class="text-[10px] text-slate-500">${msg.time}</span>
                                    </div>
                                    <div class="px-4 py-2.5 rounded-2xl text-sm text-slate-200 border backdrop-blur-sm ${bgClass}">
                                        ${pinIcon} ${msg.text}
                                    </div>
                                </div>
                            </div>
                        </div>`;
                }
            });
            container.scrollTop = container.scrollHeight;
        }

        function sendGlobal() {
            const input = document.getElementById('global-input');
            const text = input.value.trim();
            if(!text) return;
            if(state.lockdown && !state.isOwner) {
                showToast('Error', 'Chat is in LOCKDOWN mode.');
                return;
            }

            state.messages.push({
                id: Date.now(),
                user: state.user.name,
                text: text,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                type: 'text',
                pinned: false
            });
            input.value = '';
            renderChat();
        }

        // --- OWNER FUNCTIONS ---
        function togglePin(id) {
            const msg = state.messages.find(m => m.id === id);
            if(msg) {
                msg.pinned = !msg.pinned;
                renderChat();
                showToast('System', msg.pinned ? 'Message Pinned' : 'Message Unpinned');
            }
        }

        function deleteMsg(id) {
            if(confirm("Permanently delete message?")) {
                state.messages = state.messages.filter(m => m.id !== id);
                renderChat();
            }
        }

        function banUser(name) {
            if(name === CONFIG.OWNER_USER) return alert("Cannot ban Owner.");
            if(confirm(`Ban ${name} from the server?`)) {
                // Remove messages
                state.messages = state.messages.filter(m => m.user !== name);
                // Remove from user list
                state.users = state.users.filter(u => u.name !== name);
                
                // Broadcast ban
                state.messages.push({ id: Date.now(), user: 'SYSTEM', text: `${name} has been banned by the Owner.`, time: 'Now', type: 'system' });
                
                renderUsers();
                renderChat();
                showToast('Admin', `${name} Banned`);
            }
        }

        function toggleLockdown() {
            state.lockdown = !state.lockdown;
            const statusEl = document.getElementById('system-status');
            if(state.lockdown) {
                statusEl.classList.remove('hidden');
                state.messages.push({ id: Date.now(), user: 'SYSTEM', text: 'SERVER LOCKDOWN INITIATED', time: 'Now', type: 'system' });
            } else {
                statusEl.classList.add('hidden');
                state.messages.push({ id: Date.now(), user: 'SYSTEM', text: 'Lockdown lifted.', time: 'Now', type: 'system' });
            }
            renderChat();
        }

        function clearChat() {
            if(confirm("Clear all global chat history?")) {
                state.messages = [{ id: Date.now(), user: 'SYSTEM', text: 'Chat history cleared by Owner.', time: 'Now', type: 'system' }];
                renderChat();
            }
        }

        function sendBroadcast() {
            const txt = document.getElementById('broadcast-input').value;
            if(!txt) return;
            state.messages.push({ id: Date.now(), user: 'SYSTEM', text: txt.toUpperCase(), time: 'Now', type: 'system', pinned: true });
            document.getElementById('broadcast-input').value = '';
            renderChat();
            showToast('Success', 'Broadcast sent');
        }

        // --- UTILS ---
        function showToast(title, msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-title').innerText = title;
            document.getElementById('toast-msg').innerText = msg;
            toast.classList.remove('translate-x-full');
            setTimeout(() => toast.classList.add('translate-x-full'), 3000);
        }

        // Init
        // Auto-login dummy users in background for realism
        setTimeout(() => { if(!state.user) { renderUsers(); } }, 100);

    
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
      

<div className="absolute inset-0 z-[60] flex items-center justify-center bg-slate-950 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" id="login-view">
<div className="glass-panel w-full max-w-sm p-8 rounded-2xl shadow-2xl transition-all duration-500 neon-border-blue relative overflow-hidden" id="login-card">
<div className="absolute top-0 left-0 w-full h-1 bg-cyan-500 shadow-[0_0_15px_#06b6d4] transition-colors duration-300" id="login-accent"></div>
<div className="text-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-1">BLOXD <span className="text-cyan-400" id="title-accent">CHAT</span></h1>
<p className="text-xs text-slate-500 tracking-widest uppercase">v9.5 PRO</p>
</div>

<div className="space-y-4 animate-slide-up" id="step-1">
<div className="relative group">
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="solar:user-circle-linear" width="20"></iconify-icon>
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-white placeholder-slate-600 transition-all" id="username-input" placeholder="Enter Username" type="text"/>
</div>
<button className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2.5 rounded-lg transition-all shadow-lg shadow-cyan-500/20" onclick="handleLogin()">Enter World</button>
</div>

<div className="hidden space-y-4 animate-slide-up" id="step-2">
<div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center gap-2 text-amber-400">
<iconify-icon icon="solar:crown-bold-duotone"></iconify-icon> <span className="text-xs font-bold uppercase">Owner Verification</span>
</div>
<input className="w-full bg-white/5 border border-amber-500/30 rounded-lg py-2.5 px-4 text-sm focus:border-amber-400 outline-none text-amber-100 placeholder-slate-600" id="password-input" placeholder="Passkey" type="password"/>
<button className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg shadow-lg shadow-amber-500/20" onclick="verifyOwner()">Authenticate</button>
<button className="w-full text-slate-500 text-xs hover:text-white" onclick="backToLogin()">Back</button>
</div>
</div>
</div>

<div className="w-full h-full flex flex-col md:flex-row relative z-10 opacity-0 transition-opacity duration-1000" id="app">

<aside className="hidden md:flex w-64 glass-panel border-r border-white/5 flex-col z-40">
<div className="p-5 flex items-center gap-3 border-b border-white/5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20" id="app-logo-bg">
<span className="font-bold text-white text-sm">B</span>
</div>
<h1 className="text-sm font-bold tracking-tight text-white">BLOXD <span className="text-slate-500 font-normal">v9.5</span></h1>
</div>
<nav className="p-3 space-y-1 overflow-y-auto flex-1">
<p className="px-3 pt-2 pb-1 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Menu</p>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20" id="nav-chat" onclick="switchTab('chat')">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon> Global Chat
                </button>
<button className="hidden w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-500/10 transition-colors" id="nav-admin" onclick="switchTab('admin')">
<iconify-icon icon="solar:shield-user-linear" width="18"></iconify-icon> Owner Panel
                </button>

<div className="mt-6">
<div className="flex items-center justify-between px-3 mb-2">
<span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Online</span>
<span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20" id="online-count">0</span>
</div>
<div className="space-y-0.5" id="online-users-list">

</div>
</div>
</nav>

<div className="p-4 border-t border-white/5 bg-black/20">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white relative" id="my-avatar">
                        ME
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-bold text-white truncate" id="my-name">Guest</p>
<p className="text-[10px] text-slate-500 truncate" id="my-role">Member</p>
</div>
<button className="text-slate-500 hover:text-red-400" onclick="location.reload()"><iconify-icon icon="solar:logout-2-linear"></iconify-icon></button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative bg-slate-950/50">

<header className="h-14 glass-panel border-b border-white/5 flex items-center justify-between px-4 z-30 shrink-0">
<div className="flex items-center gap-3 md:hidden">
<button className="text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')"><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
<span className="font-bold text-white">BLOXD</span>
</div>
<div className="flex items-center gap-2">
<h2 className="text-sm font-medium text-slate-200" id="header-title">Global Chat</h2>
<span className="hidden text-[10px] text-cyan-400 italic flex items-center gap-1 ml-2" id="typing-indicator">
                        typing<span className="animate-bounce">.</span><span className="animate-bounce delay-75">.</span><span className="animate-bounce delay-150">.</span>
</span>
</div>
<div className="flex items-center gap-3">
<div className="hidden px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse font-bold" id="system-status">LOCKDOWN</div>
</div>
</header>

<div className="flex-1 relative overflow-hidden">

<div className="absolute inset-0 flex flex-col" id="view-chat">
<div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20 scroll-smooth" id="chat-container">

</div>

<div className="p-4 glass-panel border-t border-white/5 shrink-0 relative z-20">
<div className="flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:bg-white/10 focus:border-cyan-500/50 outline-none transition-all placeholder-slate-500" id="global-input" onkeydown="handleKey(event, 'global')" placeholder="Type a message..." type="text"/>
<button className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 rounded-lg transition-all shadow-lg shadow-cyan-500/20" onclick="sendGlobal()"><iconify-icon icon="solar:plain-3-bold-duotone"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col hidden bg-black/20" id="view-dm">
<div className="h-10 border-b border-white/5 flex items-center px-4 bg-white/5 justify-between">
<div className="flex items-center gap-2">
<button className="text-slate-400 hover:text-white md:hidden" onclick="switchTab('chat')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<span className="text-xs text-slate-400">Chatting with</span>
<span className="text-sm font-bold text-white" id="dm-target-name">User</span>
</div>
<button className="text-slate-500 hover:text-red-400" onclick="closeDM()"><iconify-icon icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3 pb-20" id="dm-container"></div>
<div className="p-4 glass-panel border-t border-white/5 shrink-0">
<div className="flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:bg-white/10 focus:border-indigo-500/50 outline-none transition-all placeholder-slate-500" id="dm-input" onkeydown="handleKey(event, 'dm')" placeholder="Private message..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 rounded-lg transition-all" onclick="sendDM()"><iconify-icon icon="solar:plain-3-bold-duotone"></iconify-icon></button>
</div>
</div>
</div>

<div className="absolute inset-0 hidden overflow-y-auto p-6 bg-black/40 backdrop-blur-sm" id="view-admin">
<div className="max-w-3xl mx-auto space-y-6">
<div className="p-6 glass-panel rounded-xl neon-border-gold border border-amber-500/20">
<h2 className="text-2xl font-bold text-amber-400 mb-1 flex items-center gap-2"><iconify-icon icon="solar:crown-bold-duotone"></iconify-icon> OWNER CONSOLE</h2>
<p className="text-xs text-amber-200/60 font-mono">ROOT ACCESS GRANTED // SECURE CONNECTION</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glass-panel p-5 rounded-xl border border-white/10">
<h3 className="text-sm font-bold text-white mb-4 flex gap-2"><iconify-icon className="text-blue-400" icon="solar:server-square-linear"></iconify-icon> Server Control</h3>
<div className="space-y-2">
<button className="w-full text-left px-3 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 rounded text-xs font-medium transition-all flex items-center justify-between group" onclick="toggleLockdown()">
<span>Toggle Lockdown</span> <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:lock-keyhole-bold-duotone"></iconify-icon>
</button>
<button className="w-full text-left px-3 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/20 rounded text-xs font-medium transition-all flex items-center justify-between" onclick="clearChat()">
<span>Clear Global Chat</span> <iconify-icon icon="solar:trash-bin-trash-bold-duotone"></iconify-icon>
</button>
<div className="pt-2">
<input className="w-full bg-black/30 border border-white/10 rounded px-2 py-1.5 text-xs text-white mb-2" id="broadcast-input" placeholder="System Broadcast Message" type="text"/>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-1.5 rounded text-xs font-bold shadow-lg shadow-blue-500/20" onclick="sendBroadcast()">SEND BROADCAST</button>
</div>
</div>
</div>

<div className="glass-panel p-5 rounded-xl border border-white/10">
<h3 className="text-sm font-bold text-white mb-4 flex gap-2"><iconify-icon className="text-emerald-400" icon="solar:users-group-rounded-linear"></iconify-icon> Advanced Actions</h3>
<p className="text-xs text-slate-400 mb-3">To Manage Users: Use the pin/ban/delete icons that appear when hovering over messages in Global Chat.</p>
<div className="bg-black/30 p-3 rounded border border-white/5">
<div className="flex items-center gap-2 mb-2 text-xs text-slate-300">
<iconify-icon className="text-amber-400" icon="solar:pin-bold"></iconify-icon> Pin Messages
                                    </div>
<div className="flex items-center gap-2 mb-2 text-xs text-slate-300">
<iconify-icon className="text-red-400" icon="solar:trash-bin-trash-linear"></iconify-icon> Delete Messages
                                    </div>
<div className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-red-500" icon="solar:forbidden-circle-linear"></iconify-icon> Ban Users
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-slate-950/95 z-50 hidden md:hidden flex flex-col p-6 animate-slide-up" id="mobile-menu">
<div className="flex justify-end"><button className="text-white" onclick="document.getElementById('mobile-menu').classList.add('hidden')"><iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon></button></div>
<h2 className="text-xl font-bold text-white mb-6">Menu</h2>
<div className="space-y-4">
<button className="w-full text-left text-lg text-slate-300" onclick="switchTab('chat'); document.getElementById('mobile-menu').classList.add('hidden')">Global Chat</button>
<div className="hidden" id="mobile-admin-link"><button className="w-full text-left text-lg text-amber-400 font-bold" onclick="switchTab('admin'); document.getElementById('mobile-menu').classList.add('hidden')">Owner Panel</button></div>
<div className="pt-6 border-t border-white/10">
<h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Online Users</h3>
<div className="space-y-2" id="mobile-user-list"></div>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-[100] transform translate-x-full transition-transform duration-300" id="toast">
<div className="glass-panel px-4 py-3 rounded-lg border-l-4 border-cyan-500 shadow-2xl flex items-center gap-3">
<iconify-icon className="text-cyan-400" icon="solar:bell-bing-bold-duotone" id="toast-icon"></iconify-icon>
<div>
<h4 className="text-xs font-bold text-white" id="toast-title">Notification</h4>
<p className="text-[10px] text-slate-300" id="toast-msg">Message content</p>
</div>
</div>
</div>


    </>
  );
}
