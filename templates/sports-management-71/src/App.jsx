import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        const initialPool = [
            { id: '1', name: 'Cody Rhodes', ovr: 96, role: 'Main Eventer', color: 'green' },
            { id: '2', name: 'Roman Reigns', ovr: 96, role: 'Main Eventer', color: 'green' },
            { id: '3', name: 'Rhea Ripley', ovr: 95, role: 'Main Eventer', color: 'green' },
            { id: '4', name: 'Will Ospreay', ovr: 94, role: 'Main Eventer', color: 'green' },
            { id: '5', name: 'Swerve Strickland', ovr: 92, role: 'Main Eventer', color: 'green' },
            { id: '6', name: 'Drew McIntyre', ovr: 91, role: 'Main Eventer', color: 'green' },
            { id: '7', name: 'LA Knight', ovr: 88, role: 'Upper Midcard', color: 'yellow' },
            { id: '8', name: 'Jordynne Grace', ovr: 88, role: 'Upper Midcard', color: 'yellow' },
            { id: '9', name: 'Moose', ovr: 87, role: 'Upper Midcard', color: 'yellow' },
            { id: '10', name: 'Bron Breakker', ovr: 86, role: 'Midcard', color: 'yellow' },
            { id: '11', name: 'Jade Cargill', ovr: 86, role: 'Midcard', color: 'yellow' },
            { id: '12', name: 'Carmelo Hayes', ovr: 83, role: 'Midcard', color: 'orange' },
        ];
        
        let pool = [...initialPool];
        const totalInitial = pool.length;
        
        const brands = { raw: [], sd: [], nxt: [], aew: [], tna: [] };
        
        let selectedId = null;
        let currentMonth = 1;
        let currentWeek = 0; // 0 = Draft Phase
        let currentYear = 1;

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            renderPool();
            renderBrands();
        });

        // UI Renderers
        function renderPool() {
            const container = document.getElementById('draft-pool');
            document.getElementById('pool-count').innerText = `Showing ${pool.length} of ${totalInitial}`;
            
            if (pool.length === 0) {
                container.innerHTML = `<div class="text-zinc-500 text-sm py-8 px-4 w-full text-center border-2 border-dashed border-zinc-800 rounded-lg">Draft pool is empty. Click 'Start Season' above to begin!</div>`;
                return;
            }

            container.innerHTML = pool.map(s => `
                <div onclick="selectSuperstar('${s.id}')" class="min-w-[140px] bg-zinc-950 border ${selectedId === s.id ? 'selected-card' : 'border-zinc-800 hover:border-zinc-600'} rounded-lg p-3 cursor-pointer transition-all group">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs font-medium text-${s.color}-400 bg-${s.color}-400/10 px-1 rounded">${s.ovr} OVR</span>
                        <iconify-icon icon="solar:star-linear" class="text-zinc-600 ${selectedId === s.id ? 'text-zinc-200' : 'group-hover:text-zinc-400'}"></iconify-icon>
                    </div>
                    <div class="font-medium text-zinc-200 truncate">${s.name}</div>
                    <div class="text-xs text-zinc-500 mt-1 truncate">${s.role}</div>
                </div>
            `).join('');
        }

        function renderBrands() {
            Object.keys(brands).forEach(brandKey => {
                const container = document.getElementById(`list-${brandKey}`);
                const count = document.getElementById(`count-${brandKey}`);
                const list = brands[brandKey];
                
                count.innerText = `${list.length} Assigned`;
                
                if (list.length === 0) {
                    container.innerHTML = `<div class="h-full w-full flex flex-col items-center justify-center text-zinc-600 text-xs text-center"><span class="mt-4">Tap here to draft</span></div>`;
                } else {
                    container.innerHTML = list.map(s => `
                        <div class="bg-zinc-950 border border-zinc-800 rounded p-2 flex justify-between items-center mb-2">
                            <div class="min-w-0 pr-2">
                                <div class="font-medium text-zinc-200 text-xs truncate">${s.name}</div>
                                <div class="text-zinc-500 text-[10px] truncate">${s.role}</div>
                            </div>
                            <span class="text-xs font-medium text-${s.color}-400 shrink-0">${s.ovr}</span>
                        </div>
                    `).join('');
                }
            });
        }

        // Actions
        function selectSuperstar(id) {
            if (currentWeek > 0) return; // Cannot draft after season starts (for this demo)
            selectedId = selectedId === id ? null : id; // Toggle selection
            renderPool();
        }

        function draftTo(brandKey) {
            if (!selectedId) return;
            const index = pool.findIndex(s => s.id === selectedId);
            if (index > -1) {
                const s = pool.splice(index, 1)[0];
                brands[brandKey].push(s);
                selectedId = null;
                renderPool();
                renderBrands();
            }
        }

        // Time Progression
        function advanceTime() {
            const btn = document.getElementById('start-btn');
            
            if (currentWeek === 0) {
                // Start Season
                currentWeek = 1;
                btn.innerHTML = `<iconify-icon icon="solar:forward-linear"></iconify-icon> Advance Week`;
                document.getElementById('draft-instructions').innerText = "The season is active. Manage your roster and progress weeks.";
                selectedId = null;
                renderPool();
            } else {
                currentWeek++;
                if (currentWeek > 4) {
                    currentWeek = 1;
                    currentMonth++;
                    
                    if (currentMonth > 12) {
                        showAwards();
                        return; // Halt progression until modal closed
                    }
                }
            }
            updateCalendarUI();
        }

        function updateCalendarUI() {
            document.getElementById('month-title').innerText = `Year ${currentYear} - Month ${currentMonth}`;
            document.getElementById('week-badge').innerText = `Week ${currentWeek} Active`;
            
            for(let i=1; i<=4; i++) {
                const el = document.getElementById(`week-${i}-box`);
                if (i === currentWeek) {
                    el.className = "border border-zinc-700 bg-zinc-800/40 rounded-lg p-2 relative overflow-hidden ring-1 ring-zinc-500/50 transition-all";
                    el.querySelector('.flex').classList.remove('opacity-50');
                } else if (i < currentWeek) {
                    el.className = "border border-zinc-800/60 bg-zinc-900/50 rounded-lg p-2 opacity-50 transition-all";
                } else {
                    el.className = "border border-zinc-800/60 bg-zinc-900/30 rounded-lg p-2 transition-all";
                    el.querySelector('.flex').classList.add('opacity-50');
                }
            }
        }

        // Awards Logic
        function showAwards() {
            const modal = document.getElementById('awards-modal');
            const content = document.getElementById('awards-content');
            
            document.getElementById('award-year-label').innerText = currentYear;
            document.getElementById('next-year-label').innerText = currentYear + 1;
            
            // Randomly select winners for simulation
            const allDrafted = [].concat(...Object.values(brands));
            if(allDrafted.length > 0) {
                const best = allDrafted.reduce((prev, current) => (prev.ovr > current.ovr) ? prev : current);
                document.getElementById('award-superstar').innerText = best.name;
            } else {
                document.getElementById('award-superstar').innerText = "Vacant";
            }

            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeAwards() {
            const modal = document.getElementById('awards-modal');
            const content = document.getElementById('awards-content');
            
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                
                // Reset to new year
                currentYear++;
                currentMonth = 1;
                currentWeek = 1;
                updateCalendarUI();
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 md:w-64 border-r border-zinc-800/60 bg-zinc-950/80 flex flex-col justify-between z-20 transition-all duration-300">
<div>
<div className="h-16 flex items-center justify-center md:justify-start md:px-6 border-b border-zinc-800/60">
<div className="font-semibold tracking-tight text-zinc-100 flex items-center gap-2 text-base">
<iconify-icon className="text-xl text-zinc-400" icon="solar:crown-star-linear"></iconify-icon>
<span className="hidden md:block tracking-tighter">BOOKER</span>
</div>
</div>
<nav className="p-3 space-y-1 mt-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-800/50 text-zinc-100 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="hidden md:block font-medium">Draft Room</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="hidden md:block font-medium">Schedule</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:clipboard-list-linear"></iconify-icon>
<span className="hidden md:block font-medium">Rosters</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
<span className="hidden md:block font-medium">Ratings</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-zinc-800/60">
<div className="flex flex-col gap-1 hidden md:flex mb-4">
<div className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Resources</div>
<div className="text-zinc-300 font-medium">$2,500,000</div>
<div className="text-zinc-500 text-xs">85k Fans</div>
</div>
<button className="w-full flex items-center justify-center md:justify-start gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear"></iconify-icon>
<span className="hidden md:block font-medium">Settings</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">

<header className="h-auto min-h-16 border-b border-zinc-800/60 glass-panel flex flex-col justify-center px-6 py-4 z-10 shrink-0">
<div className="flex justify-between items-end mb-3">
<h1 className="text-lg font-medium tracking-tight text-zinc-100" id="month-title">Year 1 - Month 1</h1>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800" id="week-badge">Draft Phase Active</span>
</div>
<div className="grid grid-cols-4 gap-3">

<div className="border border-zinc-800/60 bg-zinc-900/30 rounded-lg p-2 transition-all" id="week-1-box">
<div className="text-xs font-medium text-zinc-400 mb-1 ml-2">Week 1</div>
<div className="flex flex-wrap gap-1 ml-2">
<span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 rounded">RAW</span>
<span className="text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 rounded">NXT</span>
<span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 rounded">SD</span>
<span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 rounded">AEW</span>
</div>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/30 rounded-lg p-2 transition-all" id="week-2-box">
<div className="text-xs font-medium text-zinc-600 mb-1 ml-2">Week 2</div>
<div className="flex flex-wrap gap-1 ml-2 opacity-50">
<span className="text-xs bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 rounded">TNA</span>
<span className="text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-1.5 rounded">RAW</span>
<span className="text-xs bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 px-1.5 rounded">NXT</span>
</div>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/30 rounded-lg p-2 transition-all" id="week-3-box">
<div className="text-xs font-medium text-zinc-600 mb-1 ml-2">Week 3</div>
<div className="flex flex-wrap gap-1 ml-2 opacity-50">
<span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 rounded">SD</span>
<span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 rounded">AEW</span>
<span className="text-xs bg-rose-500/10 text-rose-400 border border-rose-500/20 px-1.5 rounded">TNA</span>
</div>
</div>

<div className="border border-zinc-800/60 bg-zinc-900/30 rounded-lg p-2 relative transition-all" id="week-4-box">
<div className="text-xs font-medium text-zinc-600 mb-1 ml-2">Week 4</div>
<div className="flex flex-wrap gap-1 ml-2 opacity-50">
<span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-1.5 rounded w-full text-center font-medium">MAJOR PLE</span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-medium tracking-tight text-zinc-100">The Draft</h2>
<p className="text-zinc-500 mt-1" id="draft-instructions">Tap a superstar, then tap a brand to assign them.</p>
</div>
<button className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-md font-medium hover:bg-white transition-colors flex items-center gap-2 shadow-sm" id="start-btn" onclick="advanceTime()">
<iconify-icon icon="solar:play-circle-linear"></iconify-icon> Start Season
                </button>
</div>

<div className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 relative">
<div className="text-xs font-medium text-zinc-400 mb-3 flex items-center justify-between">
<span>Available Superstars (Undrafted)</span>
<span className="text-zinc-500" id="pool-count"></span>
</div>
<div className="flex gap-2 overflow-x-auto pb-2" id="draft-pool">

</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">

<div className="brand-raw bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col min-h-[300px] cursor-pointer transition-colors" onclick="draftTo('raw')">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/60 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<h3 className="font-medium text-zinc-100 tracking-tight">RAW</h3>
</div>
<span className="text-xs text-zinc-500" id="count-raw">0 Assigned</span>
</div>
<div className="flex-1 border-2 border-dashed border-zinc-800/50 rounded-lg p-2 space-y-2" id="list-raw"></div>
</div>

<div className="brand-sd bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col min-h-[300px] cursor-pointer transition-colors" onclick="draftTo('sd')">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/60 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<h3 className="font-medium text-zinc-100 tracking-tight">SmackDown</h3>
</div>
<span className="text-xs text-zinc-500" id="count-sd">0 Assigned</span>
</div>
<div className="flex-1 border-2 border-dashed border-zinc-800/50 rounded-lg p-2 space-y-2" id="list-sd"></div>
</div>

<div className="brand-nxt bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col min-h-[300px] cursor-pointer transition-colors" onclick="draftTo('nxt')">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/60 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<h3 className="font-medium text-zinc-100 tracking-tight">NXT</h3>
</div>
<span className="text-xs text-zinc-500" id="count-nxt">0 Assigned</span>
</div>
<div className="flex-1 border-2 border-dashed border-zinc-800/50 rounded-lg p-2 space-y-2" id="list-nxt"></div>
</div>

<div className="brand-aew bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col min-h-[300px] cursor-pointer transition-colors" onclick="draftTo('aew')">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/60 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<h3 className="font-medium text-zinc-100 tracking-tight">AEW</h3>
</div>
<span className="text-xs text-zinc-500" id="count-aew">0 Assigned</span>
</div>
<div className="flex-1 border-2 border-dashed border-zinc-800/50 rounded-lg p-2 space-y-2" id="list-aew"></div>
</div>

<div className="brand-tna bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 rounded-xl p-4 flex flex-col min-h-[300px] cursor-pointer transition-colors" onclick="draftTo('tna')">
<div className="flex items-center justify-between mb-4 border-b border-zinc-800/60 pb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-500"></div>
<h3 className="font-medium text-zinc-100 tracking-tight">TNA</h3>
</div>
<span className="text-xs text-zinc-500" id="count-tna">0 Assigned</span>
</div>
<div className="flex-1 border-2 border-dashed border-zinc-800/50 rounded-lg p-2 space-y-2" id="list-tna"></div>
</div>
</div>
</div>
</main>

<aside className="w-80 border-l border-zinc-800/60 glass-panel p-4 flex flex-col z-20 shrink-0 hidden lg:flex">
<h2 className="text-base font-medium tracking-tight text-zinc-100 mb-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:smartphone-linear"></iconify-icon> Your Phone
            </div>
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
</h2>
<div className="flex-1 border border-zinc-800/80 rounded-[2rem] bg-zinc-950 overflow-hidden flex flex-col relative shadow-2xl mx-1 my-2 ring-1 ring-white/5">
<div className="h-6 bg-zinc-950 flex justify-between items-center px-4 text-xs font-medium text-zinc-400">
<span>9:41</span>
<div className="absolute left-1/2 top-0 -translate-x-1/2 w-20 h-4 bg-zinc-900 rounded-b-xl border-b border-x border-zinc-800/50"></div>
<div className="flex gap-1.5 items-center">
<iconify-icon className="text-xs" icon="solar:cellular-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>
<div className="flex-1 bg-zinc-950 flex flex-col relative">
<div className="p-3 border-b border-zinc-800/60 flex items-center justify-between bg-zinc-900/40 backdrop-blur-sm sticky top-0 z-10">
<span className="text-sm font-medium text-zinc-100 tracking-tight">Messages</span>
<div className="flex gap-3">
<button className="text-zinc-400 hover:text-zinc-200 transition-colors relative group" title="Shop">
<iconify-icon className="text-lg" icon="solar:shop-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 p-3 space-y-4 overflow-y-auto bg-zinc-950 pb-24">
<div className="flex flex-col items-start gap-1 w-[85%]">
<div className="text-xs text-zinc-500 ml-1">Hunter H.</div>
<div className="bg-zinc-800/60 border border-zinc-700/50 rounded-2xl rounded-tl-sm p-3 text-xs text-zinc-300 leading-relaxed shadow-sm">
                            Welcome to the new era. Draft the superstars into the correct brands, or assign them to our competitors like AEW or TNA. Tap a star, then tap a column.
                        </div>
<div className="text-xs text-zinc-600 ml-1 mt-0.5">Just now</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800/80">
<div className="text-xs font-medium text-zinc-400 mb-2 flex items-center justify-between">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:password-linear"></iconify-icon> Redeem Code
                        </span>
</div>
<div className="flex gap-2 relative">
<input className="bg-zinc-950 border border-zinc-700 rounded-lg pl-3 pr-16 py-2 text-xs text-zinc-100 w-full focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-600 shadow-inner" placeholder="Enter code..." type="text"/>
<button className="absolute right-1 top-1 bottom-1 bg-zinc-200 text-zinc-900 px-3 rounded-md text-xs font-medium hover:bg-white transition-colors">
                            Claim
                        </button>
</div>
</div>
</div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-zinc-600 rounded-full z-20"></div>
</div>
</aside>

<div className="hidden fixed inset-0 z-50 bg-zinc-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-4" id="awards-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden text-center transform scale-95 opacity-0 transition-all duration-300" id="awards-content">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-yellow-400"></div>
<iconify-icon className="text-6xl text-amber-500 mb-4 mx-auto" icon="solar:cup-star-linear"></iconify-icon>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-100 mb-2">Year End Awards</h2>
<p className="text-zinc-400 mb-6 text-sm">Year <span id="award-year-label">1</span> has concluded! Here are the results.</p>
<div className="space-y-3 mb-8">
<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-left">
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-1">Superstar of the Year</div>
<div className="font-medium text-zinc-200" id="award-superstar">Roman Reigns</div>
</div>
<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-left">
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-1">Top Promotion</div>
<div className="font-medium text-amber-400" id="award-brand">SmackDown</div>
</div>
</div>
<button className="w-full bg-zinc-100 text-zinc-900 px-4 py-3 rounded-lg font-medium hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-md" onclick="closeAwards()">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon> Start Year <span id="next-year-label">2</span>
</button>
</div>
</div>



    </>
  );
}
