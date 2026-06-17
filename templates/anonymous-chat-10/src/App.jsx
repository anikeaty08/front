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



        // App State
        let appState = {
            user: {
                nickname: '',
                avatar: '🦊',
                isLoggedIn: false
            },
            currentChat: {
                partner: null,
                messages: []
            },
            navigationHistory: [],
            searchTimer: null,
            searchSeconds: 0
        };
        
        // Load state from localStorage
        function loadState() {
            const saved = localStorage.getItem('whisprState');
            if (saved) {
                appState = { ...appState, ...JSON.parse(saved) };
            }
        }
        
        // Save state to localStorage
        function saveState() {
            localStorage.setItem('whisprState', JSON.stringify(appState));
        }
        
        // Initialize app
        function initApp() {
            loadState();
            
            if (appState.user.isLoggedIn) {
                updateUIWithUserData();
                showScreen('screen-home');
                loadChatList();
            } else {
                showScreen('screen-welcome');
            }
            
            // Update online count periodically
            setInterval(updateOnlineCount, 5000);
        }
        
        // Show screen function
        function showScreen(screenId) {
            // Save to history for back navigation
            const currentVisible = document.querySelector('[id^="screen-"]:not(.hidden)');
            if (currentVisible && currentVisible.id !== screenId) {
                appState.navigationHistory.push(currentVisible.id);
            }
            
            // Hide all screens
            const screens = document.querySelectorAll('[id^="screen-"]');
            screens.forEach(screen => {
                screen.classList.add('hidden');
                screen.classList.remove('flex');
            });
            
            // Show the selected screen
            const targetScreen = document.getElementById(screenId);
            if (targetScreen) {
                targetScreen.classList.remove('hidden');
                targetScreen.classList.add('flex');
            }
        }
        
        // Go back function
        function goBack() {
            if (appState.navigationHistory.length > 0) {
                const previousScreen = appState.navigationHistory.pop();
                showScreen(previousScreen);
            } else {
                showScreen('screen-home');
            }
        }
        
        // Skip onboarding
        function skipOnboarding() {
            showScreen('screen-nickname');
        }
        
        // Nickname validation
        function validateNickname() {
            const input = document.getElementById('nickname-input');
            const btn = document.getElementById('nickname-continue-btn');
            const error = document.getElementById('nickname-error');
            const hint = document.getElementById('nickname-hint');
            const value = input.value.trim();
            
            if (value.length >= 3 && value.length <= 20 && /^[a-zA-Z0-9]+$/.test(value)) {
                btn.disabled = false;
                btn.classList.remove('opacity-50', 'cursor-not-allowed');
                error.classList.add('hidden');
                hint.classList.remove('hidden');
            } else if (value.length > 0) {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                error.classList.remove('hidden');
                hint.classList.add('hidden');
            } else {
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
                error.classList.add('hidden');
                hint.classList.remove('hidden');
            }
        }
        
        // Set nickname from suggestion
        function setNickname(name) {
            document.getElementById('nickname-input').value = name;
            validateNickname();
        }
        
        // Generate random nickname
        function generateRandomNickname() {
            const adjectives = ['Shadow', 'Mystic', 'Night', 'Storm', 'Phantom', 'Silent', 'Golden', 'Crystal', 'Thunder', 'Cosmic'];
            const nouns = ['Wolf', 'Raven', 'Owl', 'Fox', 'Knight', 'Hunter', 'Seeker', 'Wanderer', 'Spirit', 'Phoenix'];
            const random = adjectives[Math.floor(Math.random() * adjectives.length)] + nouns[Math.floor(Math.random() * nouns.length)];
            setNickname(random);
        }
        
        // Continue to avatar selection
        function continueToAvatar() {
            const nickname = document.getElementById('nickname-input').value.trim();
            if (nickname.length >= 3) {
                appState.user.nickname = nickname;
                document.getElementById('display-nickname').textContent = nickname;
                showScreen('screen-avatar');
            }
        }
        
        // Select avatar
        function selectAvatar(emoji, btn) {
            document.getElementById('selected-avatar').textContent = emoji;
            appState.user.avatar = emoji;
            
            // Update border styles
            document.querySelectorAll('.avatar-btn').forEach(b => {
                b.classList.remove('border-purple-500', 'border-2');
                b.classList.add('border-slate-700/50', 'border');
            });
            
            btn.classList.remove('border-slate-700/50', 'border');
            btn.classList.add('border-purple-500', 'border-2');
        }
        
        // Complete profile setup
        function completeProfile() {
            appState.user.isLoggedIn = true;
            saveState();
            updateUIWithUserData();
            showScreen('screen-home');
            loadChatList();
        }
        
        // Update UI with user data
        function updateUIWithUserData() {
            const nickname = appState.user.nickname;
            const avatar = appState.user.avatar;
            
            // Update profile screens
            const profileAvatar = document.getElementById('profile-avatar');
            const profileNickname = document.getElementById('profile-nickname');
            const editAvatar = document.getElementById('edit-avatar');
            const editNickname = document.getElementById('edit-nickname');
            
            if (profileAvatar) profileAvatar.textContent = avatar;
            if (profileNickname) profileNickname.textContent = nickname;
            if (editAvatar) editAvatar.textContent = avatar;
            if (editNickname) editNickname.value = nickname;
        }
        
        // Load chat list
        function loadChatList() {
            const chatList = document.getElementById('chat-list');
            const chats = [
                { avatar: '🦋', name: 'MysticButterfly', message: "That's so interesting! I've never thought about it that way...", time: '2m ago', online: true, unread: 2, gradient: 'from-pink-500 to-rose-600' },
                { avatar: '🐺', name: 'SilentWolf', message: 'See you tomorrow! 👋', time: '1h ago', online: false, unread: 0, gradient: 'from-cyan-500 to-blue-600' },
                { avatar: '🦁', name: 'GoldenLion', message: 'Haha yes exactly! That movie was amazing 🎬', time: '3h ago', online: true, unread: 0, gradient: 'from-amber-500 to-orange-600' },
                { avatar: '🔮', name: 'CrystalSeer', message: 'Thanks for the chat! It was really nice talking to you', time: 'Yesterday', online: false, unread: 0, gradient: 'from-violet-500 to-purple-600' }
            ];
            
            let html = '<p class="text-xs text-slate-500 mb-3 ml-1">Recent Chats</p>';
            
            chats.forEach(chat => {
                html += `
                    <button onclick="openChat('${chat.name}', '${chat.avatar}', '${chat.gradient}')" class="w-full p-4 bg-slate-800/30 backdrop-blur rounded-2xl border border-slate-700/50 mb-3 flex items-center gap-4 hover:bg-slate-800/50 transition-all text-left">
                        <div class="relative">
                            <div class="w-12 h-12 bg-gradient-to-br ${chat.gradient} rounded-full flex items-center justify-center text-xl">${chat.avatar}</div>
                            <div class="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 ${chat.online ? 'bg-green-500' : 'bg-slate-500'} rounded-full border-2 border-slate-900"></div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center justify-between mb-1">
                                <span class="text-white font-medium text-sm">${chat.name}</span>
                                <span class="text-xs text-slate-500">${chat.time}</span>
                            </div>
                            <p class="text-slate-400 text-sm truncate">${chat.message}</p>
                        </div>
                        ${chat.unread > 0 ? `<div class="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center"><span class="text-xs text-white font-medium">${chat.unread}</span></div>` : ''}
                    </button>
                `;
            });
            
            chatList.innerHTML = html;
        }
        
        // Open chat
        function openChat(name, avatar, gradient) {
            appState.currentChat.partner = { name, avatar, gradient };
            
            document.getElementById('chat-partner-name').textContent = name;
            document.getElementById('chat-partner-avatar').textContent = avatar;
            
            // Clear previous messages and add initial ones
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML = `
                <div class="flex justify-center">
                    <span class="px-3 py-1.5 bg-slate-800/50 text-slate-500 text-xs rounded-full">Chat with ${name}</span>
                </div>
            `;
            
            showScreen('screen-chat');
        }
        
        // Start random chat
        function startRandomChat() {
            appState.searchSeconds = 0;
            showScreen('screen-finding');
            
            // Update timer
            appState.searchTimer = setInterval(() => {
                appState.searchSeconds++;
                document.getElementById('search-timer').textContent = appState.searchSeconds + 's';
                
                // Simulate finding a match after random time
                if (appState.searchSeconds >= Math.floor(Math.random() * 5) + 3) {
                    clearInterval(appState.searchTimer);
                    foundMatch();
                }
            }, 1000);
        }
        
        // Cancel search
        function cancelSearch() {
            clearInterval(appState.searchTimer);
            showScreen('screen-home');
        }
        
        // Found match
        function foundMatch() {
            const matches = [
                { name: 'MysticButterfly', avatar: '🦋', gradient: 'from-pink-500 to-rose-600' },
                { name: 'SilentWolf', avatar: '🐺', gradient: 'from-cyan-500 to-blue-600' },
                { name: 'NightOwl', avatar: '🦉', gradient: 'from-amber-500 to-orange-600' },
                { name: 'StarGazer', avatar: '⭐', gradient: 'from-yellow-500 to-amber-600' }
            ];
            
            const match = matches[Math.floor(Math.random() * matches.length)];
            appState.currentChat.partner = match;
            
            document.getElementById('match-avatar').textContent = match.avatar;
            document.getElementById('match-nickname').textContent = match.name;
            
            showScreen('screen-match-found');
        }
        
        // Start chat from match
        function startChat() {
            const partner = appState.currentChat.partner;
            
            document.getElementById('chat-partner-name').textContent = partner.name;
            document.getElementById('chat-partner-avatar').textContent = partner.avatar;
            
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML = `
                <div class="flex justify-center">
                    <span class="px-3 py-1.5 bg-slate-800/50 text-slate-500 text-xs rounded-full">You've been matched! Say hi 👋</span>
                </div>
            `;
            
            showScreen('screen-chat');
        }
        
        // Skip match and find another
        function skipMatch() {
            startRandomChat();
        }
        
        // Exit chat
        function exitChat() {
            showScreen('screen-home');
        }
        
        // Send message
        function sendMessage() {
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            
            if (message) {
                addMessage(message, true);
                input.value = '';
                
                // Simulate typing indicator and response
                setTimeout(() => {
                    document.getElementById('typing-indicator').classList.remove('hidden');
                    
                    setTimeout(() => {
                        document.getElementById('typing-indicator').classList.add('hidden');
                        const responses = [
                            "That's interesting! Tell me more 😊",
                            "I totally agree with you!",
                            "Haha, that's funny!",
                            "Nice! What else do you like?",
                            "Really? I didn't know that!"
                        ];
                        addMessage(responses[Math.floor(Math.random() * responses.length)], false);
                    }, 2000);
                }, 500);
            }
        }
        
        // Handle chat keypress
        function handleChatKeypress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }
        
        // Add message to chat
        function addMessage(text, isSent) {
            const messagesContainer = document.getElementById('chat-messages');
            const partner = appState.currentChat.partner;
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            let html = '';
            
            if (isSent) {
                html = `
                    <div class="flex items-end gap-2 justify-end">
                        <div class="max-w-[75%]">
                            <div class="bg-gradient-to-r from-purple-500 to-indigo-600 px-4 py-3 rounded-2xl rounded-br-md">
                                <p class="text-white text-sm">${text}</p>
                            </div>
                            <p class="text-xs text-slate-500 mt-1 text-right">${time}</p>
                        </div>
                    </div>
                `;
            } else {
                html = `
                    <div class="flex items-end gap-2">
                        <div class="w-8 h-8 bg-gradient-to-br ${partner.gradient || 'from-pink-500 to-rose-600'} rounded-full flex items-center justify-center text-sm flex-shrink-0">${partner.avatar}</div>
                        <div class="max-w-[75%]">
                            <div class="bg-slate-800/70 px-4 py-3 rounded-2xl rounded-bl-md">
                                <p class="text-white text-sm">${text}</p>
                            </div>
                            <p class="text-xs text-slate-500 mt-1">${time}</p>
                        </div>
                    </div>
                `;
            }
            
            messagesContainer.insertAdjacentHTML('beforeend', html);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
        
        // Show chat menu
        function showChatMenu() {
            document.getElementById('screen-chat-menu').classList.remove('hidden');
        }
        
        // Hide chat menu
        function hideChatMenu() {
            document.getElementById('screen-chat-menu').classList.add('hidden');
        }
        
        // View profile
        function viewProfile() {
            hideChatMenu();
            // Show partner profile modal or screen
            alert('Profile view coming soon!');
        }
        
        // Report user
        function reportUser() {
            hideChatMenu();
            alert('Report submitted. Thank you for keeping whispr safe!');
        }
        
        // Block user
        function blockUser() {
            hideChatMenu();
            alert('User blocked successfully.');
            showScreen('screen-home');
        }
        
        // Join room
        function joinRoom(roomName) {
            appState.currentChat.partner = {
                name: roomName.charAt(0).toUpperCase() + roomName.slice(1) + ' Room',
                avatar: roomName === 'gaming' ? '🎮' : roomName === 'music' ? '🎵' : roomName === 'movies' ? '🎬' : roomName === 'tech' ? '💻' : '🎨',
                gradient: 'from-purple-500 to-indigo-600'
            };
            
            document.getElementById('chat-partner-name').textContent = appState.currentChat.partner.name;
            document.getElementById('chat-partner-avatar').textContent = appState.currentChat.partner.avatar;
            document.getElementById('chat-partner-status-text').textContent = '423 members';
            
            const messagesContainer = document.getElementById('chat-messages');
            messagesContainer.innerHTML = `
                <div class="flex justify-center">
                    <span class="px-3 py-1.5 bg-slate-800/50 text-slate-500 text-xs rounded-full">Welcome to ${appState.currentChat.partner.name}!</span>
                </div>
            `;
            
            showScreen('screen-chat');
        }
        
        // Toggle setting
        function toggleSetting(btn) {
            const isOn = btn.classList.contains('bg-purple-500');
            const dot = btn.querySelector('div');
            
            if (isOn) {
                btn.classList.remove('bg-purple-500');
                btn.classList.add('bg-slate-600');
                dot.classList.remove('bg-white', 'ml-auto');
                dot.classList.add('bg-slate-400');
            } else {
                btn.classList.remove('bg-slate-600');
                btn.classList.add('bg-purple-500');
                dot.classList.remove('bg-slate-400');
                dot.classList.add('bg-white', 'ml-auto');
            }
        }
        
        // Show avatar picker
        function showAvatarPicker() {
            document.getElementById('avatar-picker').classList.toggle('hidden');
        }
        
        // Change avatar in edit profile
        function changeAvatar(emoji, btn) {
            document.getElementById('edit-avatar').textContent = emoji;
            appState.user.avatar = emoji;
            
            document.querySelectorAll('.avatar-edit-btn').forEach(b => {
                b.classList.remove('border-purple-500', 'border-2');
                b.classList.add('border-slate-700/50', 'border');
            });
            
            btn.classList.remove('border-slate-700/50', 'border');
            btn.classList.add('border-purple-500', 'border-2');
        }
        
        // Save profile
        function saveProfile() {
            const nickname = document.getElementById('edit-nickname').value.trim();
            if (nickname.length >= 3) {
                appState.user.nickname = nickname;
                saveState();
                updateUIWithUserData();
                goBack();
            }
        }
        
        // Update online count
        function updateOnlineCount() {
            const count = Math.floor(Math.random() * 500) + 1000;
            const onlineEl = document.getElementById('online-count');
            const findingEl = document.getElementById('finding-online');
            if (onlineEl) onlineEl.textContent = count.toLocaleString() + ' people online now';
            if (findingEl) findingEl.textContent = count.toLocaleString();
        }
        
        // Logout
        function logout() {
            localStorage.removeItem('whisprState');
            appState.user.isLoggedIn = false;
            appState.navigationHistory = [];
            showScreen('screen-welcome');
        }
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', initApp);
    
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
      

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
</div>

<div className="relative z-10 flex-1 flex flex-col max-w-md mx-auto w-full" id="app">

<div className="flex flex-1 flex-col px-6 py-8" id="screen-welcome">

<div className="flex items-center justify-center mb-6">
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
</div>

<div className="flex-1 flex items-center justify-center py-4">
<div className="relative">
<div className="w-44 h-44 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-full flex items-center justify-center border border-purple-500/20">
<div className="w-32 h-32 bg-gradient-to-br from-purple-500/30 to-indigo-600/30 rounded-full flex items-center justify-center border border-purple-500/30">
<div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/30">
<span className="iconify text-white" data-height="36" data-icon="lucide:users" data-width="36" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute -top-2 -right-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-1">
<span className="iconify text-purple-400" data-height="18" data-icon="lucide:shield-check" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute -bottom-2 -left-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-2">
<span className="iconify text-indigo-400" data-height="18" data-icon="lucide:lock" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute top-1/2 -right-6 w-9 h-9 bg-slate-800/80 backdrop-blur rounded-xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-3">
<span className="iconify text-violet-400" data-height="14" data-icon="lucide:eye-off" data-width="14" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Connect Anonymously</h2>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Chat with people around the world without revealing your identity. Your privacy is our priority.</p>
</div>

<div className="flex items-center justify-center gap-2 mb-6">
<div className="w-6 h-1.5 bg-purple-500 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
</div>

<div className="space-y-3">
<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2" onclick="showScreen('screen-onboarding-2')">
<span>Get Started</span>
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full py-4 bg-slate-800/50 backdrop-blur text-slate-300 font-medium rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-200" onclick="skipOnboarding()">
                    I already have an account
                </button>
</div>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-onboarding-2">

<div className="flex items-center justify-between mb-6">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-welcome')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
<button className="text-sm text-purple-400 font-medium" onclick="skipOnboarding()">Skip</button>
</div>

<div className="flex-1 flex items-center justify-center py-4">
<div className="relative">
<div className="w-44 h-44 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-cyan-500/20">
<div className="w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full flex items-center justify-center border border-cyan-500/30">
<div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30">
<span className="iconify text-white" data-height="36" data-icon="lucide:message-circle" data-width="36" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute -top-2 -right-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-1">
<span className="iconify text-cyan-400" data-height="18" data-icon="lucide:zap" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute -bottom-2 -left-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-2">
<span className="iconify text-blue-400" data-height="18" data-icon="lucide:globe" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Instant Connections</h2>
<p className="text-sm text-slate-400 font-normal leading-relaxed">Get matched with random people instantly or join topic-based chat rooms to find like-minded individuals.</p>
</div>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-cyan-400" data-height="16" data-icon="lucide:shuffle" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm text-slate-300">Random matching in seconds</span>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-blue-400" data-height="16" data-icon="lucide:hash" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm text-slate-300">Topic-based chat rooms</span>
</div>
</div>

<div className="flex items-center justify-center gap-2 mb-6">
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<div className="w-6 h-1.5 bg-purple-500 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
</div>

<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2" onclick="showScreen('screen-onboarding-3')">
<span>Continue</span>
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-onboarding-3">

<div className="flex items-center justify-between mb-6">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-onboarding-2')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
<button className="text-sm text-purple-400 font-medium" onclick="skipOnboarding()">Skip</button>
</div>

<div className="flex-1 flex items-center justify-center py-4">
<div className="relative">
<div className="w-44 h-44 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center border border-green-500/20">
<div className="w-32 h-32 bg-gradient-to-br from-green-500/30 to-emerald-600/30 rounded-full flex items-center justify-center border border-green-500/30">
<div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
<span className="iconify text-white" data-height="36" data-icon="lucide:shield" data-width="36" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute -top-2 -right-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-1">
<span className="iconify text-green-400" data-height="18" data-icon="lucide:check-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute -bottom-2 -left-4 w-11 h-11 bg-slate-800/80 backdrop-blur rounded-2xl flex items-center justify-center border border-slate-700/50 shadow-lg floating-2">
<span className="iconify text-emerald-400" data-height="18" data-icon="lucide:ban" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Stay Safe &amp; Secure</h2>
<p className="text-sm text-slate-400 font-normal leading-relaxed">We take your safety seriously. Report, block, or skip anyone who makes you uncomfortable.</p>
</div>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-green-400" data-height="16" data-icon="lucide:flag" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm text-slate-300">Report inappropriate behavior</span>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<span className="iconify text-emerald-400" data-height="16" data-icon="lucide:user-x" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm text-slate-300">Block users instantly</span>
</div>
</div>

<div className="flex items-center justify-center gap-2 mb-6">
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
<div className="w-6 h-1.5 bg-purple-500 rounded-full"></div>
</div>

<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2" onclick="showScreen('screen-nickname')">
<span>Create Profile</span>
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-nickname">

<div className="flex items-center justify-between mb-6">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-onboarding-3')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
<div className="w-10"></div>
</div>

<div className="flex items-center gap-2 mb-6">
<div className="flex-1 h-1 bg-purple-500 rounded-full"></div>
<div className="flex-1 h-1 bg-slate-700 rounded-full"></div>
</div>
<p className="text-xs text-slate-500 mb-4">Step 1 of 2</p>

<div className="flex justify-center py-6">
<div className="w-28 h-28 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-full flex items-center justify-center border border-purple-500/20">
<div className="w-18 h-18 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 w-16 h-16">
<span className="iconify text-white" data-height="28" data-icon="lucide:at-sign" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="text-center mb-6">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Choose a Nickname</h2>
<p className="text-sm text-slate-400 font-normal leading-relaxed">This will be your identity in chats. You can change it anytime.</p>
</div>

<div className="mb-4">
<div className="relative">
<input className="w-full py-4 px-5 bg-slate-800/50 backdrop-blur text-white font-medium rounded-2xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 placeholder-slate-500 transition-all text-sm" id="nickname-input" oninput="validateNickname()" placeholder="Enter nickname..." type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2">
<button className="p-1 hover:bg-slate-700/50 rounded-lg transition-all" onclick="generateRandomNickname()">
<span className="iconify text-slate-500 hover:text-purple-400" data-height="20" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<p className="text-xs text-red-400 mt-2 ml-1 hidden" id="nickname-error">Nickname must be 3-20 characters</p>
<p className="text-xs text-slate-500 mt-2 ml-1" id="nickname-hint">3-20 characters, letters and numbers only</p>
</div>

<div className="mb-6">
<p className="text-xs text-slate-500 mb-3 ml-1">Suggestions</p>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all" onclick="setNickname('ShadowWolf')">ShadowWolf</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all" onclick="setNickname('MysticRaven')">MysticRaven</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all" onclick="setNickname('NightOwl')">NightOwl</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all" onclick="setNickname('StormChaser')">StormChaser</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 hover:border-purple-500/50 transition-all" onclick="setNickname('PhantomKnight')">PhantomKnight</button>
</div>
</div>
<div className="flex-1"></div>

<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2 opacity-50 cursor-not-allowed" disabled="" id="nickname-continue-btn" onclick="continueToAvatar()">
<span>Continue</span>
<span className="iconify" data-height="18" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-avatar">

<div className="flex items-center justify-between mb-6">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-nickname')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
<div className="w-10"></div>
</div>

<div className="flex items-center gap-2 mb-6">
<div className="flex-1 h-1 bg-purple-500 rounded-full"></div>
<div className="flex-1 h-1 bg-purple-500 rounded-full"></div>
</div>
<p className="text-xs text-slate-500 mb-4">Step 2 of 2</p>

<div className="flex justify-center py-4">
<div className="relative">
<div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-purple-500/30 text-4xl" id="selected-avatar">
                        🦊
                    </div>
<div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-900">
<span className="iconify text-white" data-height="12" data-icon="lucide:check" data-width="12" style={{strokeWidth: '2'}}></span>
</div>
</div>
</div>

<div className="text-center mb-4">
<p className="text-lg font-semibold text-white" id="display-nickname">ShadowFox</p>
<p className="text-xs text-slate-500">Your anonymous identity</p>
</div>

<div className="text-center mb-4">
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Choose Your Avatar</h2>
<p className="text-sm text-slate-400 font-normal">Express yourself with an anonymous avatar</p>
</div>

<div className="grid grid-cols-5 gap-2 mb-6">
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border-2 border-purple-500 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦊', this)">🦊</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐺', this)">🐺</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦉', this)">🦉</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐱', this)">🐱</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐼', this)">🐼</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦁', this)">🦁</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐸', this)">🐸</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦋', this)">🦋</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🌙', this)">🌙</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('⭐', this)">⭐</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🔮', this)">🔮</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🎭', this)">🎭</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('👻', this)">👻</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🤖', this)">🤖</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('👽', this)">👽</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐲', this)">🐲</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦄', this)">🦄</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐧', this)">🐧</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🦅', this)">🦅</button>
<button className="avatar-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="selectAvatar('🐢', this)">🐢</button>
</div>
<div className="flex-1"></div>

<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2" onclick="completeProfile()">
<span>Start Chatting</span>
<span className="iconify" data-height="18" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="hidden flex-1 flex-col" id="screen-home">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between mb-4">
<h1 className="text-xl font-semibold text-white tracking-tight">Messages</h1>
<div className="flex items-center gap-2">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-search')">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-settings')">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-xl">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-green-400 font-medium" id="online-count">1,247 people online now</span>
</div>
</div>

<div className="px-6 pb-4">
<div className="flex gap-3">
<button className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all" onclick="startRandomChat()">
<span className="iconify text-white" data-height="18" data-icon="lucide:shuffle" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-white font-medium text-sm">Random Chat</span>
</button>
<button className="flex-1 py-4 bg-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 flex items-center justify-center gap-2 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-rooms')">
<span className="iconify text-slate-300" data-height="18" data-icon="lucide:users" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-slate-300 font-medium text-sm">Join Room</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6" id="chat-list">
<p className="text-xs text-slate-500 mb-3 ml-1">Recent Chats</p>

</div>

<div className="px-6 py-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-home')">
<span className="iconify text-purple-500" data-height="22" data-icon="lucide:message-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-purple-500 font-medium">Chats</span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-explore')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:compass" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Explore</span>
</button>
<button className="w-14 h-14 -mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30" onclick="startRandomChat()">
<span className="iconify text-white" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="flex flex-col items-center gap-1 relative" onclick="showScreen('screen-notifications')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:bell" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Alerts</span>
<div className="absolute -top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-profile')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:user" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Profile</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-explore">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between mb-4">
<h1 className="text-xl font-semibold text-white tracking-tight">Explore</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-search')">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">

<div className="mb-6">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Featured</p>
<div className="p-5 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 rounded-2xl border border-purple-500/30">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-purple-500/30 rounded-xl flex items-center justify-center">
<span className="iconify text-purple-400" data-height="20" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-white font-medium text-sm">Speed Dating Event</h3>
<p className="text-xs text-purple-300">Live now • 234 participants</p>
</div>
</div>
<button className="w-full py-3 bg-purple-500 text-white font-medium text-sm rounded-xl hover:bg-purple-600 transition-all" onclick="showScreen('screen-finding')">
                            Join Now
                        </button>
</div>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-3">
<p className="text-xs text-slate-500 ml-1 uppercase tracking-wide">Popular Rooms</p>
<button className="text-xs text-purple-400" onclick="showScreen('screen-rooms')">See All</button>
</div>
<div className="space-y-2">
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('gaming')">
<div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center text-xl">🎮</div>
<div className="flex-1">
<h3 className="text-white font-medium text-sm">Gaming</h3>
<p className="text-xs text-slate-500">423 chatting</p>
</div>
<span className="iconify text-slate-600" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('music')">
<div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center text-xl">🎵</div>
<div className="flex-1">
<h3 className="text-white font-medium text-sm">Music Lovers</h3>
<p className="text-xs text-slate-500">312 chatting</p>
</div>
<span className="iconify text-slate-600" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('movies')">
<div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-xl">🎬</div>
<div className="flex-1">
<h3 className="text-white font-medium text-sm">Movie Buffs</h3>
<p className="text-xs text-slate-500">189 chatting</p>
</div>
<span className="iconify text-slate-600" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="mb-6">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Browse by Interest</p>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Technology</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Art</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Sports</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Books</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Travel</button>
<button className="px-4 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-purple-300 transition-all">Food</button>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-home')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:message-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Chats</span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-explore')">
<span className="iconify text-purple-500" data-height="22" data-icon="lucide:compass" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-purple-500 font-medium">Explore</span>
</button>
<button className="w-14 h-14 -mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30" onclick="startRandomChat()">
<span className="iconify text-white" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="flex flex-col items-center gap-1 relative" onclick="showScreen('screen-notifications')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:bell" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Alerts</span>
<div className="absolute -top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-profile')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:user" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Profile</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-rooms">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-4 mb-4">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-home')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-xl font-semibold text-white tracking-tight">Chat Rooms</h1>
</div>

<div className="relative">
<span className="iconify text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
<input className="w-full py-3 pl-12 pr-4 bg-slate-800/50 text-white rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none placeholder-slate-500 text-sm" placeholder="Search rooms..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">All Rooms</p>
<div className="space-y-2">
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('gaming')">
<div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-2xl">🎮</div>
<div className="flex-1">
<h3 className="text-white font-medium">Gaming</h3>
<p className="text-xs text-slate-500">Talk about your favorite games</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">423 online</span>
</div>
</div>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('music')">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl">🎵</div>
<div className="flex-1">
<h3 className="text-white font-medium">Music Lovers</h3>
<p className="text-xs text-slate-500">Share and discover new music</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">312 online</span>
</div>
</div>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('movies')">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-2xl">🎬</div>
<div className="flex-1">
<h3 className="text-white font-medium">Movie Buffs</h3>
<p className="text-xs text-slate-500">Discuss movies and TV shows</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">189 online</span>
</div>
</div>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('tech')">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">💻</div>
<div className="flex-1">
<h3 className="text-white font-medium">Tech Talk</h3>
<p className="text-xs text-slate-500">Technology and programming</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">156 online</span>
</div>
</div>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all text-left" onclick="joinRoom('art')">
<div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl">🎨</div>
<div className="flex-1">
<h3 className="text-white font-medium">Art &amp; Design</h3>
<p className="text-xs text-slate-500">Creative minds unite</p>
<div className="flex items-center gap-2 mt-1">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">98 online</span>
</div>
</div>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-finding">
<div className="flex items-center justify-between mb-8">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="cancelSearch()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">whispr</h1>
<div className="w-10"></div>
</div>
<div className="flex-1 flex flex-col items-center justify-center">

<div className="relative mb-8">
<div className="w-40 h-40 border-4 border-purple-500/30 rounded-full flex items-center justify-center animate-ping-slow"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 border-4 border-purple-500/50 rounded-full flex items-center justify-center animate-ping-slower"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/30">
<span className="iconify text-white animate-pulse" data-height="36" data-icon="lucide:search" data-width="36" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Finding Someone</h2>
<p className="text-sm text-slate-400 mb-2" id="search-status">Looking for the perfect match...</p>
<p className="text-xs text-slate-500 mb-8" id="search-timer">0s</p>

<div className="flex items-center gap-6 text-center">
<div>
<p className="text-2xl font-semibold text-white" id="finding-online">1,247</p>
<p className="text-xs text-slate-500">Online</p>
</div>
<div className="w-px h-8 bg-slate-700"></div>
<div>
<p className="text-2xl font-semibold text-white">~12s</p>
<p className="text-xs text-slate-500">Avg. Wait</p>
</div>
</div>
</div>
<button className="w-full py-4 bg-slate-800/50 backdrop-blur text-slate-300 font-medium rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all" onclick="cancelSearch()">
                Cancel Search
            </button>
</div>

<div className="hidden flex-1 flex-col px-6 py-8" id="screen-match-found">
<div className="flex-1 flex flex-col items-center justify-center">

<div className="relative mb-6">
<div className="w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center border border-green-500/30 animate-pulse">
<div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30">
<span className="iconify text-white" data-height="48" data-icon="lucide:check" data-width="48" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Match Found!</h2>
<p className="text-sm text-slate-400 mb-6">You've been connected with someone</p>

<div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50 w-full mb-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-3xl" id="match-avatar">🦋</div>
<div>
<h3 className="text-white font-semibold text-lg" id="match-nickname">MysticButterfly</h3>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-green-400">Online now</span>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-3">
<button className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 flex items-center justify-center gap-2" onclick="startChat()">
<span>Start Chatting</span>
<span className="iconify" data-height="18" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full py-4 bg-slate-800/50 backdrop-blur text-slate-300 font-medium rounded-2xl border border-slate-700/50 hover:bg-slate-800/70 transition-all" onclick="skipMatch()">
                    Find Someone Else
                </button>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-chat">

<div className="px-4 py-3 bg-slate-900/80 backdrop-blur border-b border-slate-800/50 flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-800/50 transition-all" onclick="exitChat()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="relative">
<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-lg" id="chat-partner-avatar">🦋</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" id="chat-partner-status"></div>
</div>
<div className="flex-1">
<h3 className="text-white font-medium text-sm" id="chat-partner-name">MysticButterfly</h3>
<p className="text-xs text-green-400" id="chat-partner-status-text">Online</p>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-800/50 transition-all" onclick="showChatMenu()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:more-vertical" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" id="chat-messages">

<div className="flex justify-center">
<span className="px-3 py-1.5 bg-slate-800/50 text-slate-500 text-xs rounded-full">You've been matched! Say hi 👋</span>
</div>
</div>

<div className="hidden px-4 pb-2" id="typing-indicator">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center text-xs">🦋</div>
<div className="bg-slate-800/70 px-3 py-2 rounded-xl">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>
</div>

<div className="px-4 py-3 bg-slate-900/80 backdrop-blur border-t border-slate-800/50">
<div className="flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-800/50 transition-all">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:plus" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="flex-1 relative">
<input className="w-full py-3 px-4 bg-slate-800/50 text-white rounded-2xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none placeholder-slate-500 text-sm" id="chat-input" onkeypress="handleChatKeypress(event)" placeholder="Type a message..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2">
<span className="iconify text-slate-500" data-height="20" data-icon="lucide:smile" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25" onclick="sendMessage()">
<span className="iconify text-white" data-height="18" data-icon="lucide:send" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end justify-center" id="screen-chat-menu">
<div className="w-full max-w-md bg-slate-900 rounded-t-3xl p-6 animate-slide-up">
<div className="w-12 h-1 bg-slate-700 rounded-full mx-auto mb-6"></div>
<div className="space-y-2">
<button className="w-full p-4 bg-slate-800/50 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all" onclick="viewProfile()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:user" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white">View Profile</span>
</button>
<button className="w-full p-4 bg-slate-800/50 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-all" onclick="reportUser()">
<span className="iconify text-amber-400" data-height="20" data-icon="lucide:flag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white">Report User</span>
</button>
<button className="w-full p-4 bg-red-500/10 rounded-xl flex items-center gap-3 hover:bg-red-500/20 transition-all" onclick="blockUser()">
<span className="iconify text-red-400" data-height="20" data-icon="lucide:ban" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-red-400">Block User</span>
</button>
</div>
<button className="w-full mt-4 py-4 bg-slate-800/50 text-slate-300 font-medium rounded-xl hover:bg-slate-800 transition-all" onclick="hideChatMenu()">
                    Cancel
                </button>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-notifications">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-4 mb-4">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="showScreen('screen-home')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-xl font-semibold text-white tracking-tight">Notifications</h1>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<div className="space-y-3">
<div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
<span className="iconify text-purple-400" data-height="18" data-icon="lucide:user-plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-white text-sm">New match available!</p>
<p className="text-xs text-slate-500 mt-1">Someone wants to chat with you</p>
<p className="text-xs text-purple-400 mt-2">2 min ago</p>
</div>
</div>
</div>
<div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-white text-sm">MysticButterfly sent you a message</p>
<p className="text-xs text-slate-500 mt-1">"Hey! How are you?"</p>
<p className="text-xs text-slate-500 mt-2">15 min ago</p>
</div>
</div>
</div>
<div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<p className="text-white text-sm">Welcome to whispr!</p>
<p className="text-xs text-slate-500 mt-1">Start chatting anonymously with people around the world</p>
<p className="text-xs text-slate-500 mt-2">1 hour ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-home')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:message-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Chats</span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-explore')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:compass" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Explore</span>
</button>
<button className="w-14 h-14 -mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30" onclick="startRandomChat()">
<span className="iconify text-white" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-notifications')">
<span className="iconify text-purple-500" data-height="22" data-icon="lucide:bell" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-purple-500 font-medium">Alerts</span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-profile')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:user" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Profile</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-profile">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between mb-4">
<h1 className="text-xl font-semibold text-white tracking-tight">Profile</h1>
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-settings')">
<span className="iconify text-slate-400" data-height="18" data-icon="lucide:settings" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="px-6 mb-6">
<div className="p-6 bg-gradient-to-br from-purple-500/10 to-indigo-600/10 rounded-2xl border border-purple-500/20 text-center">
<div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-4 shadow-xl shadow-purple-500/30" id="profile-avatar">🦊</div>
<h2 className="text-xl font-semibold text-white" id="profile-nickname">ShadowFox</h2>
<div className="flex items-center justify-center gap-2 mt-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-sm text-green-400">Online</span>
</div>
<button className="mt-4 px-6 py-2 bg-slate-800/50 text-slate-300 text-sm rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="showScreen('screen-edit-profile')">
                        Edit Profile
                    </button>
</div>
</div>

<div className="px-6 mb-6">
<div className="grid grid-cols-3 gap-3">
<div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
<p className="text-2xl font-semibold text-white">24</p>
<p className="text-xs text-slate-500">Chats</p>
</div>
<div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
<p className="text-2xl font-semibold text-white">156</p>
<p className="text-xs text-slate-500">Messages</p>
</div>
<div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 text-center">
<p className="text-2xl font-semibold text-white">3d</p>
<p className="text-xs text-slate-500">Active</p>
</div>
</div>
</div>

<div className="px-6 flex-1">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Quick Actions</p>
<div className="space-y-2">
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all" onclick="showScreen('screen-settings')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:settings" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Settings</span>
<span className="iconify text-slate-600 ml-auto" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all" onclick="showScreen('screen-blocked')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:user-x" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Blocked Users</span>
<span className="iconify text-slate-600 ml-auto" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all" onclick="showScreen('screen-help')">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:help-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Help &amp; Support</span>
<span className="iconify text-slate-600 ml-auto" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="px-6 py-4 border-t border-slate-800/50 bg-slate-900/50 backdrop-blur">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-home')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:message-circle" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Chats</span>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-explore')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:compass" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Explore</span>
</button>
<button className="w-14 h-14 -mt-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30" onclick="startRandomChat()">
<span className="iconify text-white" data-height="24" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="flex flex-col items-center gap-1 relative" onclick="showScreen('screen-notifications')">
<span className="iconify text-slate-500" data-height="22" data-icon="lucide:bell" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-slate-500">Alerts</span>
<div className="absolute -top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
</button>
<button className="flex flex-col items-center gap-1" onclick="showScreen('screen-profile')">
<span className="iconify text-purple-500" data-height="22" data-icon="lucide:user" data-width="22" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-purple-500 font-medium">Profile</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-settings">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="goBack()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-xl font-semibold text-white tracking-tight">Settings</h1>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Privacy</p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:eye-off" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Hide Online Status</span>
</div>
<button className="w-11 h-6 bg-purple-500 rounded-full p-0.5 cursor-pointer transition-all" onclick="toggleSetting(this)">
<div className="w-5 h-5 bg-white rounded-full ml-auto shadow transition-all"></div>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:check-check" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Read Receipts</span>
</div>
<button className="w-11 h-6 bg-slate-600 rounded-full p-0.5 cursor-pointer transition-all" onclick="toggleSetting(this)">
<div className="w-5 h-5 bg-slate-400 rounded-full shadow transition-all"></div>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:user-x" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Block Strangers</span>
</div>
<button className="w-11 h-6 bg-slate-600 rounded-full p-0.5 cursor-pointer transition-all" onclick="toggleSetting(this)">
<div className="w-5 h-5 bg-slate-400 rounded-full shadow transition-all"></div>
</button>
</div>
</div>
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Notifications</p>
<div className="space-y-2 mb-6">
<div className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:bell" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Push Notifications</span>
</div>
<button className="w-11 h-6 bg-purple-500 rounded-full p-0.5 cursor-pointer transition-all" onclick="toggleSetting(this)">
<div className="w-5 h-5 bg-white rounded-full ml-auto shadow transition-all"></div>
</button>
</div>
<div className="flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:volume-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Sound Effects</span>
</div>
<button className="w-11 h-6 bg-purple-500 rounded-full p-0.5 cursor-pointer transition-all" onclick="toggleSetting(this)">
<div className="w-5 h-5 bg-white rounded-full ml-auto shadow transition-all"></div>
</button>
</div>
</div>
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Support</p>
<div className="space-y-2 mb-6">
<button className="w-full flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all" onclick="showScreen('screen-help')">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:help-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Help Center</span>
</div>
<span className="iconify text-slate-600" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:flag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Report a Problem</span>
</div>
<span className="iconify text-slate-600" data-height="18" data-icon="lucide:chevron-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-slate-800/30 backdrop-blur rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-all">
<div className="flex items-center gap-3">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:info" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">About</span>
</div>
<span className="text-xs text-slate-500">v1.0.0</span>
</button>
</div>
</div>

<div className="px-6 py-4">
<button className="w-full py-4 bg-red-500/10 text-red-400 font-medium rounded-2xl border border-red-500/20 hover:bg-red-500/20 transition-all flex items-center justify-center gap-2" onclick="logout()">
<span className="iconify" data-height="18" data-icon="lucide:log-out" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span>Log Out</span>
</button>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-help">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="goBack()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-xl font-semibold text-white tracking-tight">Help &amp; Support</h1>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">

<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Frequently Asked Questions</p>
<div className="space-y-2 mb-6">
<details className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<summary className="text-white text-sm font-medium cursor-pointer">How does anonymous chatting work?</summary>
<p className="text-sm text-slate-400 mt-3">You can chat with random people without revealing your real identity. Only your nickname and avatar are visible to others.</p>
</details>
<details className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<summary className="text-white text-sm font-medium cursor-pointer">How do I report someone?</summary>
<p className="text-sm text-slate-400 mt-3">Tap the menu icon (three dots) in a chat and select "Report User". Describe the issue and submit.</p>
</details>
<details className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<summary className="text-white text-sm font-medium cursor-pointer">Can I change my nickname?</summary>
<p className="text-sm text-slate-400 mt-3">Yes! Go to Profile &gt; Edit Profile to change your nickname or avatar anytime.</p>
</details>
<details className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
<summary className="text-white text-sm font-medium cursor-pointer">Is my data safe?</summary>
<p className="text-sm text-slate-400 mt-3">We don't collect personal data. All chats are anonymous and messages are not stored permanently.</p>
</details>
</div>

<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Contact Us</p>
<div className="space-y-2">
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:mail" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Email Support</span>
</button>
<button className="w-full p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-all">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-white text-sm">Twitter @whispr</span>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-edit-profile">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="goBack()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-lg font-semibold text-white tracking-tight">Edit Profile</h1>
<button className="text-sm text-purple-400 font-medium" onclick="saveProfile()">Save</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">

<div className="flex justify-center py-6">
<div className="relative">
<div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-4xl shadow-xl shadow-purple-500/30" id="edit-avatar">🦊</div>
<button className="absolute -bottom-1 -right-1 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center border-4 border-slate-900" onclick="showAvatarPicker()">
<span className="iconify text-white" data-height="14" data-icon="lucide:camera" data-width="14" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="mb-6">
<label className="text-xs text-slate-500 mb-2 block ml-1">Nickname</label>
<input className="w-full py-4 px-5 bg-slate-800/50 text-white font-medium rounded-2xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none text-sm" id="edit-nickname" type="text" value="ShadowFox"/>
</div>

<div className="hidden mb-6" id="avatar-picker">
<label className="text-xs text-slate-500 mb-3 block ml-1">Choose Avatar</label>
<div className="grid grid-cols-5 gap-2">
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border-2 border-purple-500 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🦊', this)">🦊</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🐺', this)">🐺</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🦉', this)">🦉</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🐱', this)">🐱</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🐼', this)">🐼</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🦁', this)">🦁</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🐸', this)">🐸</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🦋', this)">🦋</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('🌙', this)">🌙</button>
<button className="avatar-edit-btn w-12 h-12 bg-slate-800/50 rounded-xl flex items-center justify-center text-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all" onclick="changeAvatar('⭐', this)">⭐</button>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-blocked">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="goBack()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<h1 className="text-xl font-semibold text-white tracking-tight">Blocked Users</h1>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<div className="flex flex-col items-center justify-center py-12 text-center">
<div className="w-16 h-16 bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
<span className="iconify text-slate-500" data-height="28" data-icon="lucide:user-x" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-white font-medium mb-2">No Blocked Users</h3>
<p className="text-sm text-slate-500">Users you block will appear here</p>
</div>
</div>
</div>

<div className="hidden flex-1 flex-col" id="screen-search">

<div className="px-6 pt-6 pb-4">
<div className="flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800/50 border border-slate-700/50" onclick="goBack()">
<span className="iconify text-slate-400" data-height="20" data-icon="lucide:arrow-left" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="flex-1 relative">
<span className="iconify text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" data-height="18" data-icon="lucide:search" data-width="18" style={{strokeWidth: '1.5'}}></span>
<input autofocus="" className="w-full py-3 pl-12 pr-4 bg-slate-800/50 text-white rounded-xl border border-slate-700/50 focus:border-purple-500/50 focus:outline-none placeholder-slate-500 text-sm" placeholder="Search chats..." type="text"/>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6">
<p className="text-xs text-slate-500 mb-3 ml-1 uppercase tracking-wide">Recent Searches</p>
<div className="space-y-2">
<button className="w-full p-3 flex items-center gap-3 hover:bg-slate-800/30 rounded-xl transition-all">
<span className="iconify text-slate-500" data-height="18" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-slate-300">MysticButterfly</span>
</button>
<button className="w-full p-3 flex items-center gap-3 hover:bg-slate-800/30 rounded-xl transition-all">
<span className="iconify text-slate-500" data-height="18" data-icon="lucide:clock" data-width="18" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm text-slate-300">Gaming room</span>
</button>
</div>
</div>
</div>
</div>

<style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        .floating-1 { animation: float 3s ease-in-out infinite; }
        .floating-2 { animation: float 3s ease-in-out infinite 0.5s; }
        .floating-3 { animation: float 3s ease-in-out infinite 1s; }
        
        @keyframes ping-slow {
            75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        
        @keyframes ping-slower {
            75%, 100% { transform: scale(1.3); opacity: 0; }
        }
        .animate-ping-slower { animation: ping-slower 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s; }
        
        @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
        
        /* Hide scrollbar */
        ::-webkit-scrollbar { display: none; }
        * { -ms-overflow-style: none; scrollbar-width: none; }
    </style>



    </>
  );
}
