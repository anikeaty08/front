import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Tab Navigation Logic
        function switchTab(tabName) {
            // Hide all screens
            document.querySelectorAll('[id^="screen-"]').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show selected screen
            const screen = document.getElementById(`screen-${tabName}`);
            screen.classList.remove('hidden');
            
            // Reset nav colors
            const navIds = ['home', 'contacts', 'settings'];
            navIds.forEach(id => {
                const btn = document.getElementById(`nav-${id}`);
                if (id === tabName) {
                    btn.classList.remove('text-zinc-500');
                    btn.classList.add('text-white');
                } else {
                    btn.classList.add('text-zinc-500');
                    btn.classList.remove('text-white');
                }
            });
        }

        // SOS Trigger Logic
        function triggerSOS() {
            const feedback = document.getElementById('sos-feedback');
            feedback.classList.remove('hidden');
            setTimeout(() => {
                feedback.classList.add('hidden');
            }, 4000);
        }

        // Toggle Switch Logic
        function toggleSwitch(btn) {
            const isActive = btn.getAttribute('data-active') === 'true';
            const knob = btn.firstElementChild;
            
            if (isActive) {
                btn.classList.remove('bg-emerald-500');
                btn.classList.add('bg-zinc-700');
                knob.classList.remove('translate-x-5');
                btn.setAttribute('data-active', 'false');
            } else {
                btn.classList.remove('bg-zinc-700');
                btn.classList.add('bg-emerald-500');
                knob.classList.add('translate-x-5');
                btn.setAttribute('data-active', 'true');
            }
        }

        // Modal Logic
        function openModal() {
            document.getElementById('modal-overlay').classList.remove('hidden');
        }
        function closeModal() {
            document.getElementById('modal-overlay').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full h-full max-w-sm sm:max-w-md sm:h-[850px] sm:border sm:border-zinc-800 sm:rounded-[3rem] bg-black overflow-hidden shadow-2xl flex flex-col">

<div className="h-12 w-full flex items-center justify-between px-6 pt-2 z-20 bg-gradient-to-b from-black/80 to-transparent absolute top-0 left-0">
<span className="text-xs font-medium tracking-wide text-zinc-400">9:41</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-400" icon="solar:signal-linear" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="solar:wi-fi-linear" width="16"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="solar:battery-full-linear" width="16"></iconify-icon>
</div>
</div>

<header className="pt-14 pb-4 px-6 flex items-center justify-between bg-black/50 backdrop-blur-sm z-10 border-b border-zinc-900/50">
<div>
<h1 className="text-lg font-semibold tracking-tight text-white flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    SafeGuard
                </h1>
<p className="text-xs text-zinc-500 font-medium">Ready for emergency</p>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</header>

<main className="flex-1 relative overflow-y-auto hide-scrollbar bg-black" id="main-content">

<div className="absolute inset-0 flex flex-col items-center justify-center p-6 fade-in" id="screen-home">
<div className="relative group cursor-pointer mb-12">
<div className="absolute inset-0 bg-red-600 rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
<button className="relative w-64 h-64 rounded-full bg-gradient-to-b from-red-600 to-red-700 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.4)] border-4 border-red-500/30 animate-pulse-sos active:scale-95 transition-transform duration-200" onclick="triggerSOS()">
<iconify-icon className="text-white mb-2" icon="solar:shield-warning-linear" width="64"></iconify-icon>
<span className="text-3xl font-bold tracking-tighter text-white">SOS</span>
<span className="text-xs text-red-200 mt-1 font-medium tracking-wide uppercase opacity-80">Press to Alert</span>
</button>
</div>
<div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 mb-4 backdrop-blur-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">Current Location</p>
<p className="text-xs text-zinc-500">GPS Active • Accurate to 5m</p>
</div>
</div>
<div className="h-24 w-full bg-zinc-800 rounded-lg overflow-hidden relative">

<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.3)]"></div>
</div>
<div className="absolute bottom-2 right-2 bg-zinc-900/80 px-2 py-1 rounded text-[10px] text-zinc-400">
                            Lat: 40.7128, Long: -74.0060
                        </div>
</div>
</div>

<div className="hidden absolute top-4 left-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center gap-3 backdrop-blur-xl z-50" id="sos-feedback">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<p className="text-sm font-semibold">Alert Sent Successfully</p>
<p className="text-xs opacity-80">Contacts notified via SMS.</p>
</div>
</div>
</div>

<div className="hidden absolute inset-0 flex flex-col p-6 fade-in" id="screen-contacts">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-semibold text-white tracking-tight">Emergency Contacts</h2>
<button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors" onclick="openModal()">
<iconify-icon icon="solar:add-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto space-y-3 pb-20">

<div className="group bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-900/80 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-zinc-300 font-medium">
                                JD
                            </div>
<div>
<p className="text-sm font-medium text-white">John Doe</p>
<p className="text-xs text-zinc-500">+1 (555) 012-3456</p>
</div>
</div>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-zinc-400 hover:text-white"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="p-2 text-red-400 hover:text-red-300"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="group bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-4 flex items-center justify-between hover:bg-zinc-900/80 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-zinc-300 font-medium">
                                MS
                            </div>
<div>
<p className="text-sm font-medium text-white">Mom &amp; Dad</p>
<p className="text-xs text-zinc-500">+1 (555) 098-7654</p>
</div>
</div>
<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 text-zinc-400 hover:text-white"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
<button className="p-2 text-red-400 hover:text-red-300"><iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="mt-8 text-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto mb-3 text-zinc-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<p className="text-xs text-zinc-500">Contacts are stored locally on your device.</p>
</div>
</div>
</div>

<div className="hidden absolute inset-0 flex flex-col p-6 fade-in" id="screen-settings">
<h2 className="text-xl font-semibold text-white tracking-tight mb-6">Settings</h2>
<div className="space-y-6">

<div>
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 ml-1">Notifications</h3>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
<div className="p-4 flex items-center justify-between border-b border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:bell-bing-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-200">Sound Alert</span>
</div>

<button className="w-10 h-5 bg-zinc-700 rounded-full relative transition-colors duration-200" data-active="false" onclick="toggleSwitch(this)">
<div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1 transition-transform duration-200"></div>
</button>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:smartphone-vibration-linear" width="20"></iconify-icon>
<span className="text-sm text-zinc-200">Vibration</span>
</div>
<button className="w-10 h-5 bg-emerald-500 rounded-full relative transition-colors duration-200" data-active="true" onclick="toggleSwitch(this)">
<div className="w-3 h-3 bg-white rounded-full absolute left-1 top-1 translate-x-5 transition-transform duration-200"></div>
</button>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 ml-1">Emergency Message</h3>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-4">
<label className="block text-xs text-zinc-400 mb-2">Message Content</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 transition-colors h-24 resize-none" spellcheck="false">Help! I am in danger. My current location is attached to this message.</textarea>
<div className="flex justify-end mt-2">
<button className="text-xs text-emerald-500 font-medium hover:text-emerald-400 transition-colors">Save Changes</button>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 ml-1">System</h3>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden">
<button className="w-full p-4 flex items-center justify-between hover:bg-zinc-800/30 transition-colors text-left">
<span className="text-sm text-zinc-200">Location Permissions</span>
<span className="text-xs text-emerald-500 flex items-center gap-1">Granted <iconify-icon icon="solar:check-circle-linear"></iconify-icon></span>
</button>
</div>
</div>
</div>
</div>
</main>

<nav className="h-20 bg-black border-t border-zinc-900 flex items-center justify-around px-2 pb-2">
<button className="flex flex-col items-center gap-1 p-2 w-16 text-white transition-colors" id="nav-home" onclick="switchTab('home')">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-zinc-500 hover:text-zinc-300 transition-colors" id="nav-contacts" onclick="switchTab('contacts')">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Contacts</span>
</button>
<button className="flex flex-col items-center gap-1 p-2 w-16 text-zinc-500 hover:text-zinc-300 transition-colors" id="nav-settings" onclick="switchTab('settings')">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</button>
</nav>

<div className="hidden absolute inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center fade-in" id="modal-overlay">
<div className="bg-zinc-900 w-full sm:w-[90%] rounded-t-3xl sm:rounded-3xl border border-zinc-800 p-6 pb-10 sm:pb-6 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-semibold text-white">New Contact</h3>
<button className="text-zinc-500 hover:text-white" onclick="closeModal()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-zinc-400 mb-1.5 ml-1">Full Name</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="e.g. Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-400 mb-1.5 ml-1">Phone Number</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-zinc-600 transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full py-3.5 bg-white text-black font-semibold rounded-xl mt-4 hover:bg-zinc-200 transition-colors text-sm" onclick="closeModal()">Save Contact</button>
</div>
</div>
</div>
</div>


    </>
  );
}
