import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Screen management
        const screens = {
            home: document.getElementById('home-screen'),
            searching: document.getElementById('searching-screen'),
            match: document.getElementById('match-screen'),
            chat: document.getElementById('chat-screen'),
            friends: document.getElementById('friends-screen')
        };

        const modals = {
            endChat: document.getElementById('end-chat-modal'),
            friendRequest: document.getElementById('friend-request-modal')
        };

        function showScreen(screenName) {
            Object.values(screens).forEach(s => s.classList.add('hidden'));
            Object.values(modals).forEach(m => m.classList.add('hidden'));
            screens[screenName].classList.remove('hidden');
        }

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.remove('bg-violet-500', 'text-white', 'active');
                    b.classList.add('bg-zinc-800', 'text-zinc-400');
                });
                this.classList.remove('bg-zinc-800', 'text-zinc-400');
                this.classList.add('bg-violet-500', 'text-white', 'active');
            });
        });

        // Start search
        document.getElementById('start-search-btn').addEventListener('click', () => {
            showScreen('searching');
            setTimeout(() => showScreen('match'), 2500);
        });

        // Cancel search
        document.getElementById('cancel-search-btn').addEventListener('click', () => {
            showScreen('home');
        });

        // Match actions
        document.getElementById('accept-match-btn').addEventListener('click', () => {
            showScreen('chat');
        });

        document.getElementById('decline-match-btn').addEventListener('click', () => {
            showScreen('searching');
            setTimeout(() => showScreen('match'), 2000);
        });

        // Chat actions
        document.getElementById('back-to-home').addEventListener('click', () => {
            modals.endChat.classList.remove('hidden');
        });

        document.getElementById('end-chat-btn').addEventListener('click', () => {
            modals.endChat.classList.remove('hidden');
        });

        document.getElementById('cancel-end').addEventListener('click', () => {
            modals.endChat.classList.add('hidden');
        });

        document.getElementById('confirm-end').addEventListener('click', () => {
            showScreen('home');
        });

        document.getElementById('explore-new').addEventListener('click', () => {
            showScreen('searching');
            setTimeout(() => showScreen('match'), 2000);
        });

        // Friend request
        document.getElementById('add-friend-btn').addEventListener('click', () => {
            modals.friendRequest.classList.remove('hidden');
        });

        document.getElementById('cancel-friend').addEventListener('click', () => {
            modals.friendRequest.classList.add('hidden');
        });

        document.getElementById('send-friend-request').addEventListener('click', () => {
            modals.friendRequest.classList.add('hidden');
            const toast = document.getElementById('toast');
            toast.classList.remove('hidden');
            setTimeout(() => toast.classList.add('hidden'), 3000);
        });

        // Friends screen
        document.getElementById('friends-btn').addEventListener('click', () => {
            showScreen('friends');
        });

        document.getElementById('back-from-friends').addEventListener('click', () => {
            showScreen('home');
        });

        // Rephrase panel
        document.getElementById('rephrase-btn').addEventListener('click', () => {
            document.getElementById('rephrase-panel').classList.toggle('hidden');
        });

        document.getElementById('close-rephrase').addEventListener('click', () => {
            document.getElementById('rephrase-panel').classList.add('hidden');
        });

        // Send message
        document.getElementById('send-btn').addEventListener('click', () => {
            const input = document.getElementById('message-input');
            const message = input.value.trim();
            if (message) {
                const chatMessages = document.getElementById('chat-messages');
                const msgDiv = document.createElement('div');
                msgDiv.className = 'flex justify-end';
                msgDiv.innerHTML = `
                    <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
                        <p class="text-sm">${message}</p>
                        <p class="text-xs text-white/70 mt-1">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                    </div>
                `;
                chatMessages.appendChild(msgDiv);
                input.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
                document.getElementById('rephrase-panel').classList.add('hidden');
            }
        });

        // Enter key to send
        document.getElementById('message-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.getElementById('send-btn').click();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-sm mx-auto relative">

<div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 relative" style={{minHeight: '700px'}}>

<div className="flex justify-between items-center px-6 py-3 bg-zinc-900">
<span className="text-xs font-medium">9:41</span>
<div className="flex items-center gap-1">
<span className="iconify w-4 h-4" data-icon="lucide:signal" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:wifi" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="iconify w-4 h-4" data-icon="lucide:battery-full" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="relative" id="app-container">

<div className="px-6 pb-6" id="home-screen">

<div className="text-center pt-8 pb-6">
<h1 className="text-3xl font-semibold tracking-tight bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">anom</h1>
<p className="text-zinc-500 text-sm mt-1">Connect anonymously</p>
</div>

<div className="flex justify-center mb-8">
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
<span className="iconify w-12 h-12 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
</div>

<div className="mb-6">
<p className="text-zinc-400 text-sm mb-3">Find someone to chat with</p>
<div className="flex gap-2 flex-wrap">
<button className="filter-btn active px-4 py-2 rounded-full text-sm font-medium bg-violet-500 text-white transition-all" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-all" data-filter="male">Male</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-all" data-filter="female">Female</button>
<button className="filter-btn px-4 py-2 rounded-full text-sm font-medium bg-zinc-800 text-zinc-400 hover:bg-zinc-700 transition-all" data-filter="others">Others</button></div>

<div className="grid grid-cols-2 gap-3 mb-8">
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/ class=" font-semibold="" text-2xl="" text-violet-400"="">2.4k
<p className="text-zinc-500 text-xs">Online now</p>
</div>
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50">
<p className="text-2xl font-semibold text-fuchsia-400">128</p>
<p className="text-zinc-500 text-xs">Your chats</p>
</div>
</div>

<button className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium text-base hover:opacity-90 transition-all flex items-center justify-center gap-2" id="start-search-btn">
<span className="iconify w-5 h-5" data-icon="luc" style={{strokeWidth: '1.5'}}></span>
                        Start Searching
                    </button>

<div className="flex justify-center gap-8 mt-8">
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-violet-400 transition-all" id="friends-btn">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify w-5 h-5" data-icon="lucide:users" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs">Friends</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-violet-400 transition-all">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
<span className="iconify w-5 h-5" data-icon="lucide:settings" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-xs">Settings</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-violet-400 transition-all">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center relative">
<span className="iconify w-5 h-5" data-icon="lucide:bell" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-0 right-0 w-3 h-3 bg-fuchsia-500 rounded-full border-2 border-zinc-900"></span>
</div>
<span className="text-xs">Alerts</span>
</button>
</div>
</div>

<div className="px-6 pb-6 hidden" id="searching-screen">
<div className="flex flex-col items-center justify-center" style={{minHeight: '580px'}}>

<div className="relative mb-8">
<div className="w-32 h-32 rounded-full border-4 border-violet-500/30 flex items-center justify-center animate-pulse">
<div className="w-24 h-24 rounded-full border-4 border-violet-500/50 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
<span className="iconify w-8 h-8 text-white animate-spin" data-icon="lucide:loader-2" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="absolute inset-0 rounded-full border-4 border-violet-500/20"></div>
</div>
<h2 className="text-xl font-medium tracking-tight mb-2">Searching...</h2>
<p className="text-zinc-500 text-sm text-center mb-8">Looking for someone interesting to chat with</p>
<div className="flex items-center gap-2 text-zinc-400 text-sm mb-8">
<span className="iconify w-4 h-4" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
<span>Your identity is protected</span>
</div>
<button className="px-8 py-3 rounded-full bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-all" id="cancel-search-btn">
                            Cancel Search
                        </button>
</div>
</div>

<div className="px-6 pb-6 hidden" id="match-screen">
<div className="flex flex-col items-center justify-center" style={{minHeight: '580px'}}>
<div className="text-center mb-8">
<div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-400 text-xs mb-4">
<span className="iconify w-3 h-3" data-icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></span>
                                Match Found!
                            </div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Someone wants to chat</h2>
<p className="text-zinc-500 text-sm">Accept to start an anonymous conversation</p>
</div>

<div className="relative mb-8">
<div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
<span className="iconify w-14 h-14 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center border-4 border-zinc-900">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:check" style={{strokeWidth: '2'}}></span>
</div>
</div>
<p className="text-zinc-400 text-sm mb-8">Anonymous User</p>
<div className="flex gap-4 w-full">
<button className="flex-1 py-4 rounded-2xl bg-zinc-800 text-zinc-300 font-medium hover:bg-zinc-700 transition-all flex items-center justify-center gap-2" id="decline-match-btn">
<span className="iconify w-5 h-5" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
                                Skip
                            </button>
<button className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-all flex items-center justify-center gap-2" id="accept-match-btn">
<span className="iconify w-5 h-5" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
                                Accept
                            </button>
</div>
</div>
</div>

<div className="hidden flex flex-col" id="chat-screen" style={{height: '640px'}}>

<div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all" id="back-to-home">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
<span className="iconify w-5 h-5 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-sm">Anonymous</p>
<p className="text-xs text-green-400">Online</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all" id="add-friend-btn">
<span className="iconify w-4 h-4" data-icon="lucide:user-plus" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center hover:bg-red-500/30 transition-all text-red-400" id="end-chat-btn">
<span className="iconify w-4 h-4" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" id="chat-messages">

<div className="flex justify-center">
<span className="px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-500 text-xs">Chat started • Stay anonymous &amp; respectful</span>
</div>

<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="bg-zinc-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
<p className="text-sm">Hey there! How are you doing today? 👋</p>
<p className="text-xs text-zinc-500 mt-1">2:34 PM</p>
</div>
</div>

<div className="flex justify-end">
<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
<p className="text-sm">Hi! I'm doing great, thanks for asking! How about you?</p>
<p className="text-xs text-white/70 mt-1">2:35 PM</p>
</div>
</div>

<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="bg-zinc-800 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
<p className="text-sm">Pretty good! Just exploring this app. It's interesting to chat anonymously 😊</p>
<p className="text-xs text-zinc-500 mt-1">2:36 PM</p>
</div>
</div>
</div>

<div className="hidden px-4 py-3 border-t border-zinc-800 bg-zinc-900/95" id="rephrase-panel">
<div className="flex items-center justify-between mb-3">
<p className="text-xs text-zinc-400">Rephrase your message</p>
<button className="text-zinc-500 hover:text-white" id="close-rephrase">
<span className="iconify w-4 h-4" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex gap-2 flex-wrap">
<button className="rephrase-option px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-300 hover:bg-violet-500 hover:text-white transition-all">More Formal</button>
<button className="rephrase-option px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-300 hover:bg-violet-500 hover:text-white transition-all">More Casual</button>
<button className="rephrase-option px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-300 hover:bg-violet-500 hover:text-white transition-all">Friendly</button>
<button className="rephrase-option px-3 py-1.5 rounded-full bg-zinc-800 text-xs text-zinc-300 hover:bg-violet-500 hover:text-white transition-all">Shorter</button>
</div>
</div>

<div className="px-4 py-3 border-t border-zinc-800">
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all text-zinc-400">
<span className="iconify w-5 h-5" data-icon="lucide:image" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all text-zinc-400">
<span className="iconify w-5 h-5" data-icon="lucide:mic" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="flex-1 relative">
<input className="w-full bg-zinc-800 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 placeholder-zinc-500" id="message-input" placeholder="Type a message..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-violet-400 transition-all" id="rephrase-btn">
<span className="iconify w-4 h-4" data-icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<button className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center hover:opacity-90 transition-all" id="send-btn">
<span className="iconify w-5 h-5 text-white" data-icon="lucide:send" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-zinc-950/90 flex items-center justify-center px-6" id="end-chat-modal">
<div className="bg-zinc-900 rounded-3xl p-6 w-full border border-zinc-800">
<div className="text-center mb-6">
<div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
<span className="iconify w-8 h-8 text-red-400" data-icon="lucide:message-circle-x" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">End this chat?</h3>
<p className="text-zinc-500 text-sm">This conversation will disappear for both of you</p>
</div>
<div className="flex gap-3">
<button className="flex-1 py-3 rounded-xl bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-all" id="cancel-end">Cancel</button>
<button className="flex-1 py-3 rounded-xl bg-red-500 text-white font-medium text-sm hover:bg-red-600 transition-all" id="confirm-end">End Chat</button>
</div>
<button className="w-full mt-3 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2" id="explore-new">
<span className="iconify w-4 h-4" data-icon="lucide:shuffle" style={{strokeWidth: '1.5'}}></span>
                            Find New Partner
                        </button>
</div>

<div id="hidden absolute inset-0 bg-zinc-950/90 flex items-center justify-center px-6">
<div className="bg-zinc-900 rounded-3xl p-6 w-full border border-zinc-800">
<div className="text-center mb-6">
<div className="w-16 h-16 rounded-full bg-violet-500/20 flex items-center justify-center mx-auto mb-4">
<span className="iconify w-8 h-8 text-violet-400" data-icon="lucide:user-plus" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Send Friend Request?</h3>
<p className="text-zinc-500 text-sm">If they accept, you can save this chat and stay connected</p>
</div>
<div className="flex gap-3">
<button className="flex-1 py-3 rounded-xl bg-zinc-800 text-zinc-300 font-medium text-sm hover:bg-zinc-700 transition-all" id="cancel-friend">Cancel</button>
<button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium text-sm hover:opacity-90 transition-all" id="send-friend-request">Send Request</button>
</div>
</div>
</div>

<div className="px-6 pb-6 hidden" id="friends-screen">

<div className="flex items-center gap-3 py-4">
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all" id="back-from-friends">
<span className="iconify w-4 h-4" data-icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></span>
</button>
<h2 className="text-xl font-medium tracking-tight">Friends</h2>
</div>

<div className="mb-6">
<p className="text-zinc-500 text-sm mb-3">Friend Requests</p>
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
<span className="iconify w-6 h-6 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-sm">Anonymous #4521</p>
<p className="text-xs text-zinc-500">Wants to be friends</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-zinc-600 transition-all">
<span className="iconify w-4 h-4 text-zinc" data-icon="lucide:x" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-8 h-8 rounded-full bg-violet-500 flex items-center justify-center hover:bg-violet-600 transition-all">
<span className="iconify w-4 h-4 text-white" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>

<div>-zinc-500 text-sm mb-3"&gt;Your Friends (3)
<div className="space-y-3">
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
<span className="iconify w-6 h-6 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></span>
</div>
<div>
<p className="font-medium text-sm">Anonymous #1234</p>
<p className="text-xs text-green-400">Online</p>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-violet-500 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
<span className="iconify w-6 h-6 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-zinc-500 rounded-full border-2 border-zinc-900"></span>
</div>
<div>
<p className="font-medium text-sm">Anonymous #8765</p>
<p className="text-xs text-zinc-500">Last seen 2h ago</p>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-violet-500 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="bg-zinc-800/50 rounded-2xl p-4 border border-zinc-700/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
<span className="iconify w-6 h-6 text-white" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900"></span>
</div>
<div>
<p className="font-medium text-sm">Anonymous #3456</p>
<p className="text-xs text-green-400">Online</p>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center hover:bg-violet-500 transition-all">
<span className="iconify w-5 h-5" data-icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden absolute bottom-4 left-4 right-4 bg-zinc-800 rounded-2xl p-4 border border-zinc-700 flex items-center gap-3" id="toast">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
<span className="iconify w-5 h-5 text-green-400" data-icon="lucide:check" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-sm">Friend request sent!</p>
<p className="text-xs text-zinc-500">They'll be notified</p>
</div>
</div>
</div>
</div>
</div>

</div></div>
    </>
  );
}
