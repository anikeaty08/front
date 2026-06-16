import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchTab(tabId) {
            // Hide all views
            ['view-dashboard', 'view-play', 'view-events', 'view-leaderboard'].forEach(id => {
                const el = document.getElementById(id);
                if(el) {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });
            
            // Show selected view
            // Note: 'events' redirects to dashboard list for this demo simplicity, or Play for gameplay
            let targetView = 'view-' + tabId;
            if(tabId === 'events') targetView = 'view-dashboard'; // Showing events on dashboard
            
            const viewEl = document.getElementById(targetView);
            if(viewEl) {
                viewEl.classList.remove('hidden');
                viewEl.classList.add('block');
            }

            // Update Desktop Nav State
            document.querySelectorAll('.nav-item').forEach(btn => {
                btn.classList.remove('active', 'text-zinc-200', 'bg-zinc-800/50');
                btn.classList.add('text-zinc-400');
            });
            const activeDesktop = document.getElementById('nav-' + tabId);
            if(activeDesktop) {
                activeDesktop.classList.add('active', 'text-zinc-200', 'bg-zinc-800/50');
                activeDesktop.classList.remove('text-zinc-400');
            }

            // Update Mobile Nav State
            document.querySelectorAll('.mobile-nav-item').forEach(btn => {
                btn.classList.remove('text-zinc-100');
                btn.classList.add('text-zinc-400');
            });
            const activeMobile = document.getElementById('mobile-nav-' + tabId);
            if(activeMobile) {
                activeMobile.classList.remove('text-zinc-400');
                activeMobile.classList.add('text-zinc-100');
            }
        }

        // Simulating gameplay interaction
        function submitAnswer() {
            const input = document.getElementById('answerInput');
            if(input.value.trim() !== "") {
                const overlay = document.getElementById('success-overlay');
                const content = document.getElementById('success-content');
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    content.classList.remove('scale-95');
                    content.classList.add('scale-100');
                }, 50);
            }
        }

        function closeSuccess() {
            const overlay = document.getElementById('success-overlay');
            overlay.classList.add('hidden');
            document.getElementById('answerInput').value = '';
            switchTab('dashboard'); // Go back to dashboard after success
        }

        // Initialize
        switchTab('dashboard');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="hidden md:flex items-center justify-between h-14 px-4 lg:px-6 glass sticky top-0 z-30 w-full border-b border-zinc-800">

<div className="flex items-center gap-2.5 mr-8">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter shadow-lg shadow-indigo-500/20">H</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">HUNT.</span>
</div>

<nav className="flex-1 flex items-center gap-1">
<button className="nav-item active flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-md transition-all" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon>
                Dashboard
            </button>
<button className="nav-item flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-md transition-all" id="nav-events" onclick="switchTab('events')">
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
                Events
            </button>
<button className="nav-item flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-md transition-all" id="nav-leaderboard" onclick="switchTab('leaderboard')">
<iconify-icon icon="lucide:trophy" width="16"></iconify-icon>
                Leaderboard
            </button>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] text-zinc-400 font-mono">LIVE SESSION</span>
</div>
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-0 right-0.5 w-1.5 h-1.5 bg-indigo-500 rounded-full border border-zinc-950"></span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<img alt="User" className="w-6 h-6 rounded-full border border-zinc-700" src="https://i.pravatar.cc/100?img=33"/>
</button>
</div>
</header>

<header className="md:hidden h-14 border-b border-zinc-800 flex items-center justify-between px-4 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-[10px] font-semibold tracking-tighter">H</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">HUNT.</span>
</div>
<div className="flex items-center gap-3">
<div className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-emerald-500 font-medium">LIVE</div>
<img alt="User" className="w-7 h-7 rounded-full border border-zinc-700" src="https://i.pravatar.cc/100?img=33"/>
</div>
</header>

<main className="flex-1 overflow-y-auto scrollbar-hide relative w-full">
<div className="max-w-5xl mx-auto p-4 md:p-8 pb-24 md:pb-12 min-h-full">

<div className="fade-in block" id="view-dashboard">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Dashboard</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your active hunts and progress.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white text-black hover:bg-zinc-200 text-xs font-medium rounded-md transition-colors shadow-lg shadow-white/5">
                            Find New Hunt
                        </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="text-zinc-500 mb-1"><iconify-icon icon="lucide:target" width="18"></iconify-icon></div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">12</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Hunts Completed</div>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30">
<div className="text-zinc-500 mb-1"><iconify-icon icon="lucide:award" width="18"></iconify-icon></div>
<div className="text-2xl font-semibold text-zinc-100 tracking-tight">2.4k</div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider mt-1">Total Points</div>
</div>
<div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 col-span-2 md:col-span-2 relative overflow-hidden group cursor-pointer hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent"></div>
<div className="relative flex justify-between items-center h-full">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-indigo-400">Active Mission</span>
</div>
<div className="text-lg font-medium text-zinc-200">Urban Enigma: Downtown</div>
<div className="text-xs text-zinc-500 mt-1">Checkpoint 4/10 • Ends in 2h</div>
</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<h3 className="text-sm font-medium text-zinc-200 mb-4 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="lucide:compass" width="16"></iconify-icon>
                    Recommended For You
                </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group relative aspect-[2/1] md:aspect-[2.5/1] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1625232709289-4b1057e03425?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-0.5 rounded-md bg-zinc-950/50 backdrop-blur border border-zinc-800 text-[10px] text-zinc-300 font-medium">Nov 12</span>
</div>
<div className="absolute bottom-0 w-full p-4">
<h4 className="text-base font-medium text-white mb-1">Neon Cyber Chase</h4>
<p className="text-xs text-zinc-400 line-clamp-1 mb-3">Solve AR puzzles in the tech district.</p>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 bg-white text-black text-[10px] font-semibold uppercase tracking-wider rounded hover:bg-zinc-200 transition-colors">Join Waitlist</button>
</div>
</div>
</div>

<div className="group relative aspect-[2/1] md:aspect-[2.5/1] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1476994230281-1448088947db?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-0.5 rounded-md bg-zinc-950/50 backdrop-blur border border-zinc-800 text-[10px] text-zinc-300 font-medium">Dec 05</span>
</div>
<div className="absolute bottom-0 w-full p-4">
<h4 className="text-base font-medium text-white mb-1">Forest Whispers</h4>
<p className="text-xs text-zinc-400 line-clamp-1 mb-3">A wilderness survival puzzle hunt.</p>
<div className="flex items-center gap-3">
<button className="px-3 py-1.5 bg-white text-black text-[10px] font-semibold uppercase tracking-wider rounded hover:bg-zinc-200 transition-colors">Join Waitlist</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden h-full flex flex-col justify-center min-h-[60vh]" id="view-play">
<div className="max-w-2xl mx-auto w-full">

<div className="flex items-center justify-between mb-6 px-1">
<button className="text-zinc-500 hover:text-zinc-300 flex items-center gap-2 text-xs font-medium transition-colors" onclick="switchTab('dashboard')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
                            Back to Hub
                        </button>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-amber-500">
<iconify-icon icon="lucide:timer" width="12"></iconify-icon>
<span className="text-xs font-mono font-medium">00:45:32</span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm">

<div className="relative w-full aspect-video bg-zinc-950 border-b border-zinc-800 group">
<img alt="Clue" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1549591325-34208a264a6d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] uppercase tracking-wider text-indigo-400 font-semibold mb-1 block">Step 5 of 10</span>
<h2 className="text-lg md:text-xl font-medium text-white tracking-tight">The Ancient Archway</h2>
</div>
<button className="w-8 h-8 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 transition-colors">
<iconify-icon icon="lucide:maximize-2" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="p-6">
<p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                                "Beneath the stone lion's gaze, where the shadow falls at noon. Look for the year carved not in stone, but in bronze plate."
                            </p>
<div className="flex gap-2 mb-6">
<button className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-500/10 border border-indigo-500/20 transition-colors">
<iconify-icon icon="lucide:lightbulb" width="12"></iconify-icon>
                                    Hint (-50pts)
                                </button>
<button className="text-xs text-zinc-400 hover:text-zinc-300 flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-800 border border-zinc-700 transition-colors">
<iconify-icon icon="lucide:map" width="12"></iconify-icon>
                                    Map
                                </button>
</div>
<div className="flex gap-2">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-600">
<iconify-icon icon="lucide:key" width="14"></iconify-icon>
</div>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg pl-9 pr-4 py-2.5 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-900 transition-all placeholder:text-zinc-600" id="answerInput" placeholder="Enter solution..." type="text"/>
</div>
<button className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium rounded-lg transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)]" onclick="submitAnswer()">
                                    Submit
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in" id="view-leaderboard">
<div className="flex items-center justify-between mb-6">
<h1 className="text-xl font-medium text-zinc-100 tracking-tight">Global Rankings</h1>
<div className="flex bg-zinc-900 rounded-lg p-0.5 border border-zinc-800">
<button className="px-3 py-1 text-xs font-medium bg-zinc-800 text-white rounded shadow-sm">Global</button>
<button className="px-3 py-1 text-xs font-medium text-zinc-500 hover:text-zinc-300">Local</button>
</div>
</div>
<div className="bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800/50 text-[10px] uppercase tracking-wider text-zinc-500">
<th className="px-4 py-3 font-medium w-16">Rank</th>
<th className="px-4 py-3 font-medium">Team</th>
<th className="px-4 py-3 font-medium hidden md:table-cell">Completion Time</th>
<th className="px-4 py-3 font-medium text-right">Points</th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group hover:bg-zinc-800/30 transition-colors border-b border-zinc-800/30">
<td className="px-4 py-3">
<div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center text-xs font-bold">1</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-8 h-8 rounded-full border border-zinc-800" src="https://i.pravatar.cc/100?img=33"/>
<div className="absolute -bottom-1 -right-1 bg-zinc-900 rounded-full p-0.5">
<iconify-icon className="text-amber-500" icon="lucide:crown" width="10"></iconify-icon>
</div>
</div>
<span className="font-medium text-zinc-200">Alex Hunter</span>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 font-mono text-xs hidden md:table-cell">02:14:12</td>
<td className="px-4 py-3 text-right font-mono text-emerald-400">2,450</td>
</tr>

<tr className="group hover:bg-zinc-800/30 transition-colors border-b border-zinc-800/30">
<td className="px-4 py-3 text-zinc-500 font-mono">2</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-zinc-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/100?img=12"/>
<span className="text-zinc-300">Team Alpha</span>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 font-mono text-xs hidden md:table-cell">02:20:45</td>
<td className="px-4 py-3 text-right font-mono text-zinc-300">2,300</td>
</tr>

<tr className="group hover:bg-zinc-800/30 transition-colors border-b border-zinc-800/30">
<td className="px-4 py-3 text-zinc-500 font-mono">3</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-zinc-800 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://i.pravatar.cc/100?img=59"/>
<span className="text-zinc-300">Midnight Runners</span>
</div>
</td>
<td className="px-4 py-3 text-zinc-500 font-mono text-xs hidden md:table-cell">02:25:10</td>
<td className="px-4 py-3 text-right font-mono text-zinc-300">2,150</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 w-full h-16 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 z-40">
<div className="grid grid-cols-3 h-full max-w-sm mx-auto">
<button className="mobile-nav-item active flex flex-col items-center justify-center gap-1 text-zinc-400" id="mobile-nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon icon="lucide:layout-grid" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="mobile-nav-item flex flex-col items-center justify-center gap-1 text-zinc-400" id="mobile-nav-events" onclick="switchTab('events')">
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Events</span>
</button>
<button className="mobile-nav-item flex flex-col items-center justify-center gap-1 text-zinc-400" id="mobile-nav-leaderboard" onclick="switchTab('leaderboard')">
<iconify-icon icon="lucide:trophy" width="20"></iconify-icon>
<span className="text-[10px] font-medium">Rank</span>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] hidden bg-zinc-950/90 backdrop-blur-md flex items-center justify-center p-4" id="success-overlay">
<div className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-2xl p-8 text-center transform scale-95 transition-all duration-300" id="success-content">
<div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
<iconify-icon icon="lucide:check" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-white mb-2">Excellent!</h2>
<p className="text-sm text-zinc-400 mb-6">Answer accepted. You've earned 100 points.</p>
<button className="w-full py-2.5 bg-white text-black font-medium text-sm rounded-lg hover:bg-zinc-200 transition-colors" onclick="closeSuccess()">
                Continue Hunt
            </button>
</div>
</div>


    </>
  );
}
