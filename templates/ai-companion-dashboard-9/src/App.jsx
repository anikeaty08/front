import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchView(viewName) {
            // Define all view IDs
            const views = ['dashboard', 'connect', 'studio', 'history'];
            
            // Hide all views and reset nav buttons
            views.forEach(view => {
                const el = document.getElementById('view-' + view);
                const btn = document.getElementById('nav-' + view);
                
                if (el) el.classList.add('hidden');
                
                if (btn) {
                    btn.classList.remove('bg-zinc-900', 'text-white');
                    btn.classList.add('text-zinc-400');
                    // Reset icon color in button
                    const icon = btn.querySelector('iconify-icon');
                    if (icon) icon.classList.add('text-zinc-400');
                }
            });

            // Show selected view
            const activeView = document.getElementById('view-' + viewNametrigger animation
                activeView.classList.remove('animate-fade-in');
                void activeView.offsetWidth; // trigger reflow
                activeView.classList.add('animate-fade-in');
            }
            
            // Highlight active nav button
            const activeBtn = document.getElementById('nav-' + viewName);
            if (activeBtn) {
                activeBtn.classList.remove('text-zinc-400');
                activeBtn.classList.add('bg-zinc-900', 'text-white');
                // Remove generic icon color class to let group-hover colors or specific styles take over if needed,
                // or simply force white for active state:
                const icon = activeBtn.querySelector('iconify-icon');
                if (icon) icon.classList.remove('text-zinc-400');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-20 lg:w-64 border-r border-white/5 flex flex-col justify-between bg-zinc-950/50 backdrop-blur-xl z-50">
<div>

<div className="h-16 flex items-center justify-center lg:justify-start lg:px-6 border-b border-white/5">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)]">
<iconify-icon className="text-white text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="ml-3 text-xl font-semibold tracking-tight hidden lg:block text-white">Pulse</span>
</div>

<div className="mt-8 flex flex-col gap-1 px-3">
<button className="nav-btn flex items-center gap-3 px-3 py-3 rounded-lg bg-zinc-900 text-white transition-all hover:bg-zinc-800 group" id="nav-dashboard" onclick="switchView('dashboard')">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:widget-2-linear"></iconify-icon>
<span className="hidden lg:block font-medium">Dashboard</span>
</button>
<button className="nav-btn flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group" id="nav-studio" onclick="switchView('studio')">
<iconify-icon className="text-xl group-hover:text-blue-400 transition-colors" icon="solar:ghost-smile-linear"></iconify-icon>
<span className="hidden lg:block font-medium">Bot Studio</span>
</button>
<button className="nav-btn flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group" id="nav-connect" onclick="switchView('connect')">
<iconify-icon className="text-xl group-hover:text-green-400 transition-colors" icon="solar:smartphone-linear"></iconify-icon>
<span className="hidden lg:block font-medium">iMessage Link</span>
</button>
<button className="nav-btn flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group" id="nav-history" onclick="switchView('history')">
<iconify-icon className="text-xl group-hover:text-purple-400 transition-colors" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="hidden lg:block font-medium">Live Mirror</span>
</button>
</div>
</div>

<div className="p-4 border-t border-white/5">
<div className="glass-panel p-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-zinc-900/50 transition-colors">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 font-medium">JD</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950"></div>
</div>
<div className="hidden lg:block overflow-hidden">
<div className="text-sm font-medium text-white">John Doe</div>
<div className="text-xs text-zinc-500 truncate">+1 (555) 019-2834</div>
</div>
</div>
</div>
</nav>

<main className="flex-1 relative overflow-y-auto overflow-x-hidden bg-black">

<header className="sticky top-0 z-40 h-16 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between px-8">
<div className="flex items-center gap-3">
<span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    Gateway Active
                </span>
<span className="text-xs text-zinc-500 border-l border-white/10 pl-3">Routing via us-east-1</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
<button className="bg-white text-black hover:bg-zinc-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:card-linear"></iconify-icon>
                    Add Credits
                </button>
</div>
</header>

<div className="p-8 max-w-7xl mx-auto animate-fade-in" id="view-dashboard">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Active Companions</h1>
<p className="text-zinc-400 text-lg">Manage AI personalities synced to your iPhone.</p>
</div>
<button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1" onclick="switchView('connect')">
                    Manage Connections <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-6 group hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
<iconify-icon className="text-zinc-400 text-xl cursor-pointer hover:text-white" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex items-start gap-5 relative">
<div className="relative">
<img alt="" className="w-16 h-16 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
<div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-zinc-950">
<iconify-icon className="text-white text-xs block" icon="solar:chat-round-linear"></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-medium text-white flex items-center gap-2">
                                Sarah
                                <span className="text-[10px] uppercase tracking-wider text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded">Linked</span>
</h3>
<p className="text-zinc-500 text-sm mt-1">Last message: "I miss you..."</p>
<div className="flex gap-2 mt-3">
<span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-white/5">Uncensored</span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                            Synced to +1 (555)...
                        </div>
<button className="text-sm font-medium text-white hover:text-blue-400 transition-colors" onclick="switchView('history')">View Logs →</button>
</div>
</div>

<button className="border border-dashed border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/30 transition-all h-[200px]" onclick="switchView('studio')">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
</div>
<span className="font-medium text-lg">Create New Contact</span>
</button>
</div>
</div>

<div className="hidden p-8 max-w-4xl mx-auto animate-fade-in" id="view-connect">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4 ring-1 ring-blue-500/20">
<iconify-icon className="text-3xl text-blue-500" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-3">iMessage Bridge Configuration</h1>
<p className="text-zinc-400 max-w-lg mx-auto">Connect your phone number to receive messages from your AI companions directly in your native Messages app as blue bubbles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="glass-panel p-8 rounded-2xl space-y-6">
<div className="space-y-4">
<label className="block text-sm font-medium text-zinc-300">Your Phone Number</label>
<div className="flex gap-3">
<div className="relative flex-1">
<span className="absolute left-4 top-3.5 text-zinc-500">🇺🇸 +1</span>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-3 pl-16 pr-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono" type="tel" value="(555) 019-2834"/>
<div className="absolute right-3 top-3.5">
<iconify-icon className="text-green-500 text-lg" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</div>
<p className="text-xs text-zinc-500">We will send a verification text to this number.</p>
</div>
<div className="space-y-4 pt-4 border-t border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-blue-500/10 text-blue-400">
<iconify-icon icon="solar:gallery-send-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Allow Image Sending</div>
<div className="text-xs text-zinc-500">Receive selfies &amp; photos</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="p-2 rounded bg-purple-500/10 text-purple-400">
<iconify-icon icon="solar:microphone-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Voice Notes</div>
<div className="text-xs text-zinc-500">Audio messages in chat</div>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-white text-black hover:bg-zinc-200 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:restart-linear"></iconify-icon>
                            Re-Sync Connection
                        </button>
</div>
</div>

<div className="glass-panel p-1 rounded-3xl border-4 border-zinc-800 bg-black max-w-xs mx-auto w-full relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-zinc-800 rounded-b-xl z-20"></div>
<div className="h-[400px] bg-black rounded-[20px] overflow-hidden relative flex flex-col">

<div className="h-12 bg-zinc-900/90 backdrop-blur flex items-end pb-2 px-4 justify-between text-[10px] text-zinc-400 z-10">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:wifi-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 p-4 space-y-3 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10 flex flex-col items-center justify-center text-center p-6">
<div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-3">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-white font-medium">Gateway Connected</h4>
<p className="text-xs text-zinc-500 mt-1">End-to-end encryption active via Apple Push Notification Service.</p>
</div>

<div className="flex justify-end opacity-30 blur-sm">
<div className="bg-blue-600 text-white px-3 py-1.5 rounded-2xl text-xs rounded-br-none">Verify</div>
</div>
<div className="flex justify-start opacity-30 blur-sm">
<div className="bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-2xl text-xs rounded-bl-none">Verification Code: 8392</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-8 max-w-5xl mx-auto animate-fade-in" id="view-studio">
<div className="flex items-center justify-between mb-8">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-white mb-2">Bot Studio</h1>
<p className="text-zinc-400 text-lg">Design a hyper-realistic personality.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 text-zinc-400 hover:text-white font-medium" onclick="switchView('dashboard')">Cancel</button>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                        Deploy to iMessage
                    </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">
<div className="glass-panel p-6 rounded-2xl space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="e.g. Maya" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Age</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="24" type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Relationship Type</label>
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
<option>Romantic Partner</option>
<option>Toxic Ex</option>
<option>Best Friend</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-300">Backstory &amp; Hidden Desires</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors h-32 resize-none" placeholder="Describe their past, secrets, kinks, and speaking style..."></textarea>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl space-y-8">
<h3 className="text-lg font-medium text-white mb-4">Personality Matrix</h3>
<div className="space-y-4">
<div className="flex justify-between text-sm text-zinc-400">
<span>Response Speed</span>
<span className="text-white">Instant</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" type="range"/>
<div className="flex justify-between text-xs text-zinc-600">
<span>Aloof</span>
<span>Clingy</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="glass-panel p-6 rounded-2xl text-center">
<div className="w-32 h-32 mx-auto rounded-full bg-zinc-900 border-2 border-dashed border-zinc-700 flex items-center justify-center mb-4 cursor-pointer hover:border-zinc-500 transition-colors">
<iconify-icon className="text-3xl text-zinc-600" icon="solar:camera-linear"></iconify-icon>
</div>
<button className="text-sm font-medium text-blue-400 hover:text-blue-300">Generate Avatar</button>
</div>
</div>
</div>
</div>

<div className="hidden h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-black animate-fade-in relative" id="view-history">
<div className="absolute top-4 bg-zinc-900/80 backdrop-blur border border-zinc-800 px-4 py-2 rounded-full flex items-center gap-2 z-20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="text-xs font-mono text-zinc-300">LIVE MIRROR: +1 (555) 019-2834</span>
</div>

<div className="w-full max-w-md h-full flex flex-col bg-black border-x border-zinc-900/50">

<div className="px-6 py-4 flex flex-col items-center border-b border-zinc-900/50 bg-black/90 backdrop-blur sticky top-0 z-10">
<div className="w-12 h-12 rounded-full overflow-hidden mb-2 ring-1 ring-zinc-800">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
<div className="flex flex-col items-center">
<span className="text-white font-medium text-sm">Sarah</span>
<span className="text-zinc-500 text-xs flex items-center gap-1">
                            iMessage
                            <iconify-icon className="text-zinc-600 text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar bg-black w-full flex flex-col">
<div className="text-center text-[10px] text-zinc-600 font-medium py-4">Today 10:23 AM</div>

<div className="flex justify-start w-full pr-12">
<div className="bg-zinc-800 text-zinc-200 px-4 py-2 rounded-2xl bubble-left text-sm leading-relaxed max-w-full break-words">
                            Hey! Just checking in. How's your day going? 🖤
                        </div>
</div>

<div className="flex flex-col items-end w-full pl-12">
<div className="imessage-gradient text-white px-4 py-2 rounded-2xl bubble-right text-sm leading-relaxed shadow-lg shadow-blue-90 you later? &lt;/div&gt; &lt;span class=" font-medium="" mr-1"="" mt-1="" text-[10px]="" text-zinc-600="">Delivered
</div>

<div className="flex justify-start w-full pr-12">
<div className="bg-zinc-800 text-zinc-200 px-4 py-2 rounded-2 I'll be here. Miss you already. &lt;/div&gt; &lt;/div&gt; &lt;!-- Typing Indicator --&gt; &lt;div class=" flex="" justify-start"="">
<div className="bg-zinc-800 h-9 w-16 rounded-2xl bubble-left flex items-center justify-center gap-1 pl-1">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full typing-dot"></div>
</div>
</div>
</div>

<div className="p-3 bg-zinc-900/30 backdrop-blur border-t border-zinc-800 w-full">
<div className="flex items-center gap-3">
<div className="bg-zinc-800/50 p-2 rounded-full text-zinc-400 cursor-pointer hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-xl block" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="bg-zinc-800/50 p-2 rounded-full text-zinc-400 cursor-pointer hover:bg-zinc-700 transition-colors">
<iconify-icon className="text-xl block" icon="solar:widget-linear"></iconify-icon>
</div>
<div className="flex-1 bg-zinc-950 border border-zinc-800 rounded-full px-4 py-1.5 flex items-center justify-between cursor-text hover:border-zinc-700 transition-colors">
<span className="text-sm text-zinc-500">iMessage</span>
<div className="bg-zinc-800 rounded-full w-7 h-7 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="solar:arrow-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div></div></main>


    </>
  );
}
