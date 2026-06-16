import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function aivaApp() {
            return {
                activeTab: 'chat',
                input: '',
                isTyping: false,
                voiceMode: false,
                statusText: 'Online',
                messages: [
                    { id: 1, text: "Hello! I'm AIVA. How can I assist you today?", sender: 'ai', time: '10:00 AM' }
                ],
                benefits: [
                    { icon: 'solar:bolt-linear', title: 'Faster Responses', desc: 'Skip the line with priority processing speed.' },
                    { icon: 'solar:brain-linear', title: 'Smarter AI Model', desc: 'Access to GPT-4 with enhanced reasoning.' },
                    { icon: 'solar:database-linear', title: 'Extended Memory', desc: 'AIVA remembers details from past conversations.' }
                ],

                initApp() {
                    // Start entrance animation simulation
                    setTimeout(() => {
                        document.body.style.opacity = '1';
                    }, 100);
                },

                switchTab(tab) {
                    this.activeTab = tab;
                },

                sendMessage() {
                    if (!this.input.trim()) return;

                    const userMsg = this.input.trim();
                    const now = new Date();
                    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                    // Add User Message
                    this.messages.push({
                        id: Date.now(),
                        text: userMsg.replace(/\n/g, '<br>'),
                        sender: 'user',
                        time: time
                    });

                    this.input = '';
                    this.scrollToBottom();
                    this.statusText = 'Thinking...';
                    this.isTyping = true;

                    // Simulate AI Response
                    setTimeout(() => {
                        this.isTyping = false;
                        this.statusText = 'Online';
                        
                        let aiResponse = "I can definitely help with that! As an AI assistant built with React Native and Expo, I can process voice commands, store history, and connect to advanced APIs.";
                        
                        if(userMsg.toLowerCase().includes('plan') || userMsg.toLowerCase().includes('premium')) {
                            aiResponse = "Our Premium plan unlocks advanced models and extended context memory. You can check the details in the Premium tab.";
                        } else if (userMsg.toLowerCase().includes('code')) {
                            aiResponse = "Here is a snippet example:\n<br><code class='block mt-2 bg-black/50 p-2 rounded text-xs font-mono text-indigo-300'>const App = () => {\n  return <View>...</View>\n}</code>";
                        }

                        this.messages.push({
                            id: Date.now() + 1,
                            text: aiResponse,
                            sender: 'ai',
                            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                        });
                        
                        this.scrollToBottom();

                    }, 1500);
                },

                scrollToBottom() {
                    this.$nextTick(() => {
                        const container = document.getElementById('chat-container');
                        container.scrollTop = container.scrollHeight;
                    });
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full h-full sm:max-w-md sm:h-[850px] bg-black sm:rounded-3xl relative flex flex-col overflow-hidden sm:border sm:border-zinc-800 shadow-2xl" x-data="aivaApp()" x-init="initApp()">

<header className="absolute top-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-md border-b border-zinc-800/50 px-5 pt-12 pb-3 flex justify-between items-center transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-xs font-semibold tracking-tighter shadow-lg shadow-indigo-500/20">
                    AI
                </div>
<div className="flex flex-col">
<h1 className="text-base font-medium tracking-tight leading-none text-white">AIVA</h1>
<span className="text-[10px] text-zinc-500 font-medium flex items-center gap-1 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span x-text="statusText"></span>
</span>
</div>
</div>
<button :className="voiceMode ? 'text-indigo-400 bg-indigo-500/10' : 'text-zinc-400 hover:text-zinc-200'" @click="voiceMode = !voiceMode" className="p-2 rounded-full transition-colors relative group">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-indigo-500/30 voice-ring" x-show="voiceMode"></div>
</button>
</header>

<main className="flex-1 relative w-full overflow-hidden bg-zinc-950">

<div className="h-full w-full flex flex-col pt-24 pb-24" x-show="activeTab === 'chat'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">

<div className="flex-1 overflow-y-auto px-4 space-y-5 no-scrollbar pb-4" id="chat-container">

<div className="text-center py-6">
<p className="text-xs text-zinc-500 mb-2">Today</p>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800/60">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="text-xs text-zinc-400">GPT-4 Turbo Active</span>
</div>
</div>
<template :key="msg.id" x-htmlFor="msg in messages">
<div :className="msg.sender === 'user' ? 'flex justify-end' : 'flex justify-start'" className="animate-message group">
<div :class="msg.sender === 'user' 
                                ? 'bg-zinc-100 text-black rounded-2xl rounded-tr-sm' 
                                : 'bg-zinc-900 text-zinc-200 border border-zinc-800/80 rounded-2xl rounded-tl-sm'" className="max-w-[85%] px-4 py-3 relative shadow-sm">
<p className="text-sm font-normal leading-relaxed" x-html="msg.text"></p>

<div className="flex items-center gap-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<span className="text-[10px] text-zinc-500" x-text="msg.time"></span>
<button className="text-zinc-600 hover:text-zinc-400" x-show="msg.sender === 'ai'">
<iconify-icon icon="solar:copy-linear" width="12"></iconify-icon>
</button>
<button className="text-zinc-600 hover:text-zinc-400" x-show="msg.sender === 'ai'">
<iconify-icon icon="solar:like-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
</template>

<div className="flex justify-start animate-message" x-show="isTyping">
<div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl rounded-tl-sm px-4 py-4 flex gap-1.5 items-center w-16">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce"></div>
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
</div>
</div>

<div className="h-2"></div>
</div>

<div className="absolute bottom-20 left-0 right-0 px-4 pb-2 bg-gradient-to-t from-zinc-950 via-zinc-950 to-transparent pt-10">
<div className="relative flex items-end gap-2 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 p-2 rounded-[24px] shadow-lg shadow-black/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all">
<button className="p-2 text-zinc-400 hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<textarea @keydown.enter.prevent="sendMessage()" className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none resize-none py-2.5 max-h-24 no-scrollbar" placeholder="Ask anything..." rows="1" x-model="input"></textarea>
<button :className="input.trim() ? 'bg-white text-black translate-y-0 opacity-100' : 'bg-zinc-800 text-zinc-500 translate-y-2 opacity-0'" :disabled="!input.trim()" @click="sendMessage()" className="p-2 rounded-full transition-all duration-300 absolute right-2 bottom-2 transform">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
<button className="p-2 text-zinc-400 hover:text-white transition-colors absolute right-2 bottom-2" x-show="!input.trim()">
<iconify-icon icon="solar:microphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="h-full w-full overflow-y-auto no-scrollbar pt-28 px-6 pb-24" style={{display: 'none'}} x-show="activeTab === 'premium'">
<div className="text-center mb-8">
<div className="w-16 h-16 mx-auto bg-gradient-to-tr from-amber-200 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/20 animate-float">
<iconify-icon className="text-black" icon="solar:crown-star-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Upgrade to <span className="text-gradient font-semibold">Pro</span></h2>
<p className="text-sm text-zinc-400 leading-relaxed">Unlock the full potential of AIVA with advanced models and unlimited context.</p>
</div>
<div className="space-y-4">

<template x-htmlFor="benefit in benefits">
<div className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<div className="mt-0.5 text-indigo-400">
<iconify-icon :icon="benefit.icon" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200" x-text="benefit.title"></h3>
<p className="text-xs text-zinc-500 mt-1" x-text="benefit.desc"></p>
</div>
</div>
</template>
</div>
<div className="mt-8 p-1 bg-zinc-900 rounded-full flex relative">
<div className="absolute top-1 bottom-1 left-1 w-1/2 bg-zinc-800 rounded-full transition-all"></div>
<button className="w-1/2 py-3 text-xs font-medium text-center relative z-10 text-white">Monthly</button>
<button className="w-1/2 py-3 text-xs font-medium text-center relative z-10 text-zinc-500">Yearly (-20%)</button>
</div>
<button className="w-full mt-6 py-4 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-indigo-500/10 flex items-center justify-center gap-2">
<span>Start 7-Day Free Trial</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-zinc-600 mt-4">Recurring billing, cancel anytime.</p>
</div>

<div className="h-full w-full overflow-y-auto no-scrollbar pt-24 px-5 pb-24" style={{display: 'none'}} x-show="activeTab === 'settings'">
<h2 className="text-lg font-medium tracking-tight mb-6">Settings</h2>
<div className="space-y-6">

<section>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 pl-1">Account</h3>
<div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium">Free Plan</p>
<p className="text-xs text-zinc-500">Upgrade for more</p>
</div>
</div>
<button @click="activeTab = 'premium'" className="px-3 py-1.5 bg-indigo-600/10 text-indigo-400 text-xs font-medium rounded-full hover:bg-indigo-600/20 transition-colors">Manage</button>
</div>
</div>
</section>

<section>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 pl-1">Preferences</h3>
<div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden divide-y divide-zinc-800/50">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:moon-stars-linear" width="20"></iconify-icon>
<span className="text-sm">Dark Mode</span>
</div>
<div className="w-11 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:soundwave-square-linear" width="20"></iconify-icon>
<span className="text-sm">Haptic Feedback</span>
</div>
<div className="w-11 h-6 bg-zinc-700 rounded-full relative cursor-pointer">
<div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="p-4 flex items-center justify-between group cursor-pointer hover:bg-zinc-800/30">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span className="text-sm">Assistant Personality</span>
</div>
<div className="flex items-center gap-2 text-zinc-500">
<span className="text-xs">Professional</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section>
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3 pl-1">Data</h3>
<div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
<button className="w-full p-4 flex items-center gap-3 text-red-400 hover:bg-red-400/5 transition-colors text-left">
<iconify-icon icon="solar:trash-bin-trash-linear" width="20"></iconify-icon>
<span className="text-sm">Clear Chat History</span>
</button>
</div>
</section>
</div>
</div>
</main>

<nav className="absolute bottom-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-xl border-t border-zinc-800/50 flex justify-around items-start pt-4 z-30">
<button @click="switchTab('chat')" className="flex flex-col items-center gap-1 w-16 group">
<div :className="activeTab === 'chat' ? 'text-white -translate-y-1' : 'text-zinc-500 group-hover:text-zinc-300'" className="relative transition-transform duration-200">
<iconify-icon :icon="activeTab === 'chat' ? 'solar:chat-round-dots-bold' : 'solar:chat-round-dots-linear'" strokeWidth="1.5" width="26"></iconify-icon>
<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" x-show="activeTab === 'chat'"></span>
</div>
<span :className="activeTab === 'chat' ? 'text-white' : 'text-zinc-500'" className="text-[10px] font-medium">Chat</span>
</button>
<button @click="switchTab('premium')" className="flex flex-col items-center gap-1 w-16 group">
<div :className="activeTab === 'premium' ? 'text-amber-400 -translate-y-1' : 'text-zinc-500 group-hover:text-zinc-300'" className="relative transition-transform duration-200">
<iconify-icon :icon="activeTab === 'premium' ? 'solar:crown-star-bold' : 'solar:crown-star-linear'" strokeWidth="1.5" width="26"></iconify-icon>
<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full" x-show="activeTab === 'premium'"></span>
</div>
<span :className="activeTab === 'premium' ? 'text-amber-400' : 'text-zinc-500'" className="text-[10px] font-medium">Premium</span>
</button>
<button @click="switchTab('settings')" className="flex flex-col items-center gap-1 w-16 group">
<div :className="activeTab === 'settings' ? 'text-white -translate-y-1' : 'text-zinc-500 group-hover:text-zinc-300'" className="relative transition-transform duration-200">
<iconify-icon :icon="activeTab === 'settings' ? 'solar:settings-bold' : 'solar:settings-linear'" strokeWidth="1.5" width="26"></iconify-icon>
<span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" x-show="activeTab === 'settings'"></span>
</div>
<span :className="activeTab === 'settings' ? 'text-white' : 'text-zinc-500'" className="text-[10px] font-medium">Settings</span>
</button>
</nav>
</div>



    </>
  );
}
