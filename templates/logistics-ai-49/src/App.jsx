import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleAddClient() {
            const form = document.getElementById('add-client-form');
            form.classList.toggle('hidden');
            form.classList.toggle('fade-in');
        }

        function addClientSimulate() {
            // Visual feedback only
            toggleAddClient();
            alert("Client added! In a real app, this would appear on the board instantly.");
        }

        function runOptimization() {
            const overlay = document.getElementById('optimization-overlay');
            const container = document.getElementById('schedule-container');
            const cards = Array.from(container.getElementsByClassName('schedule-card'));
            const btn = document.getElementById('optimize-btn');
            const totalTime = document.getElementById('total-time-display');
            const wastedTime = document.getElementById('wasted-time-display');
            const finishTime = document.getElementById('finish-time');

            // Show loading
            overlay.classList.remove('hidden');

            setTimeout(() => {
                // Simulate shuffling logic
                overlay.classList.add('hidden');
                
                // Reorder cards DOM (Simulating optimization)
                // Let's swap the 2nd and 3rd card
                if(cards.length >= 3) {
                    container.insertBefore(cards[2], cards[1]);
                    
                    // Update times visually (Hardcoded for demo effect)
                    const timeSlots = container.querySelectorAll('.font-mono');
                    timeSlots[0].innerText = "08:00"; // Unchanged
                    timeSlots[1].innerText = "11:15"; // Moved Sarah here
                    timeSlots[2].innerText = "13:00"; // Moved Studio here (shorter drive)
                    
                    // Update descriptions to show "Optimized" state
                    const driveTimes = container.querySelectorAll('.text-zinc-400 span:last-child');
                    driveTimes[0].innerHTML = "10 min drive <span class='text-green-600 font-medium'>(Optimized)</span>";
                    driveTimes[1].innerHTML = "15 min drive <span class='text-green-600 font-medium'>(Saved 30m)</span>";
                }

                // Update Stats
                totalTime.innerText = "6h 45m";
                totalTime.classList.add('text-green-600');
                wastedTime.innerText = "-1h 30m";
                wastedTime.classList.remove('text-red-500');
                wastedTime.classList.add('text-green-600');
                finishTime.innerText = "02:45 PM";

                // Update Button State
                btn.classList.remove('bg-zinc-900', 'text-white');
                btn.classList.add('bg-green-50', 'text-green-700', 'border', 'border-green-200');
                btn.innerHTML = `
                    <div class="flex items-center justify-center gap-2">
                        <span class="iconify" data-icon="lucide:check" data-width="16"></span>
                        <span class="text-xs font-medium">Optimization Complete</span>
                    </div>
                `;

                // Add success message to chat
                const chat = document.getElementById('chat-messages');
                const successMsg = document.createElement('div');
                successMsg.className = "flex gap-3 fade-in";
                successMsg.innerHTML = `
                    <div class="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
                        <span class="iconify text-zinc-500" data-icon="lucide:bot" data-width="14"></span>
                    </div>
                    <div class="bg-green-50 p-2.5 rounded-lg rounded-tl-none border border-green-100">
                        <p class="text-xs text-green-800 leading-relaxed">
                            Done! I've grouped the downtown clients together. You'll finish by 2:45 PM instead of 4:15 PM.
                        </p>
                    </div>
                `;
                chat.appendChild(successMsg);
                chat.scrollTop = chat.scrollHeight;

            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-zinc-200 bg-white flex items-center justify-between px-6 z-20 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">OPTIRoute AI</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-900 border-b-2 border-zinc-900 py-4 h-full flex items-center" href="#">Schedule &amp; Route</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Client Database</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Team &amp; Fleet</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Reports</a>
</nav>
<div className="flex items-center gap-4">
<button className="relative p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200">
<img alt="User" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<main className="flex-1 flex overflow-hidden">

<aside className="w-64 border-r border-zinc-200 bg-white flex flex-col z-10 hidden md:flex">
<div className="p-4 border-b border-zinc-100">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Calendar</span>
<button className="text-zinc-400 hover:text-zinc-900">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
</button>
</div>

<div className="bg-zinc-50 rounded-lg p-3 border border-zinc-100">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-900">October 2023</span>
<div className="flex gap-1">
<span className="iconify text-zinc-400" data-icon="lucide:chevron-left" data-width="14"></span>
<span className="iconify text-zinc-400" data-icon="lucide:chevron-right" data-width="14"></span>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-[10px] text-zinc-400 mb-1">
<div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-xs text-zinc-600">
<div className="py-1 text-zinc-300">29</div>
<div className="py-1 text-zinc-300">30</div>
<div className="py-1">1</div>
<div className="py-1">2</div>
<div className="py-1 bg-zinc-900 text-white rounded shadow-sm">3</div>
<div className="py-1">4</div>
<div className="py-1">5</div>
</div>
</div>
</div>

<div className="p-4 flex-1 overflow-y-auto">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Active Teams</span>
<span className="iconify text-zinc-400" data-icon="lucide:users" data-width="14"></span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md cursor-pointer transition-colors group">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium border border-blue-200">MA</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-xs font-medium text-zinc-900 group-hover:text-blue-600">Maria (Owner)</p>
<p className="text-[10px] text-zinc-400">Route A • 5 Clients</p>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md cursor-pointer transition-colors group">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-medium border border-amber-200">TM</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-zinc-300 border-2 border-white rounded-full"></div>
</div>
<div>
<p className="text-xs font-medium text-zinc-900 group-hover:text-blue-600">Team Blue</p>
<p className="text-[10px] text-zinc-400">Route B • Available</p>
</div>
</div>
</div>
<div className="mt-6">
<div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100">
<div className="flex gap-2 items-start">
<span className="iconify text-indigo-500 mt-0.5" data-icon="lucide:zap" data-width="14"></span>
<div>
<p className="text-xs font-medium text-indigo-900 mb-1">AI Suggestion</p>
<p className="text-[10px] text-indigo-700 leading-relaxed">Rain expected at 4PM. Consider moving Mrs. Silva's appointment earlier to avoid traffic.</p>
</div>
</div>
</div>
</div>
</div>
</aside>

<section className="flex-1 bg-zinc-50 relative flex flex-col overflow-hidden">

<div className="px-8 py-6 pb-2 shrink-0 flex justify-between items-end">
<div>
<h1 className="text-xl font-medium text-zinc-900 tracking-tight">Tuesday, October 3rd</h1>
<p className="text-xs text-zinc-500 mt-1 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        Planning Phase
                        <span className="text-zinc-300">|</span>
                        4 Clients Pending
                    </p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-zinc-200 rounded-lg shadow-sm text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-all">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="14"></span>
                        Import XLSX
                    </button>
<button className="flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-900 rounded-lg shadow-sm text-xs font-medium text-white hover:bg-zinc-800 transition-all" onclick="toggleAddClient()">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                        Add Client
                    </button>
</div>
</div>

<div className="flex-1 p-8 pt-4 overflow-y-auto flex gap-6">

<div className="flex-1 flex flex-col max-w-2xl">

<div className="mb-6 bg-white rounded-xl border border-zinc-200 shadow-sm p-4 hidden" id="add-client-form">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-zinc-900">Add to Schedule</h3>
<div className="flex bg-zinc-100 rounded-md p-1">
<button className="px-3 py-1 text-[10px] font-medium bg-white shadow-sm rounded text-zinc-900">Text/Form</button>
<button className="px-3 py-1 text-[10px] font-medium text-zinc-500 hover:text-zinc-900">Upload Photo</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Client Name</label>
<div className="relative">
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900" placeholder="e.g. John Doe" type="text"/>
<span className="iconify absolute right-3 top-2.5 text-zinc-400" data-icon="lucide:search" data-width="14"></span>
</div>
</div>
<div>
<label className="block text-[10px] font-medium text-zinc-500 mb-1 uppercase tracking-wider">Time</label>
<select className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 appearance-none">
<option>08:00 AM</option>
<option>09:00 AM</option>
<option>10:00 AM</option>
</select>
</div>
</div>
<div className="flex justify-end gap-2">
<button className="text-xs text-zinc-500 px-3 py-2 hover:text-zinc-900" onclick="toggleAddClient()">Cancel</button>
<button className="text-xs bg-zinc-900 text-white px-4 py-2 rounded-lg hover:bg-zinc-800" onclick="addClientSimulate()">Add to Board</button>
</div>
</div>

<div className="flex items-center justify-between mb-3">
<p className="text-xs font-medium text-zinc-500">Current Route Sequence</p>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-400">Drag to reorder manually</span>
</div>
</div>

<div className="space-y-3 relative pb-20" id="schedule-container">

<div className="absolute left-6 top-4 bottom-4 w-px bg-zinc-200 -z-10 border-l border-dashed border-zinc-300"></div>

<div className="schedule-card group relative flex gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all cursor-move">
<div className="flex flex-col items-center gap-1 pt-1">
<div className="w-3 h-3 rounded-full border-2 border-zinc-900 bg-white z-10"></div>
<span className="text-[10px] font-medium text-zinc-400 font-mono">08:00</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-zinc-900">Residence: Yamamoto Family</h4>
<span className="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:grip-vertical" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 mb-2">124 Maple Avenue, Downtown</p>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[10px] font-medium text-zinc-600">
<span className="iconify" data-icon="lucide:clock" data-width="10"></span> 2h
                                    </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 border border-blue-100 text-[10px] font-medium text-blue-600">
<span className="iconify" data-icon="lucide:droplet" data-width="10"></span> Deep Clean
                                    </span>
</div>
</div>
</div>

<div className="ml-12 flex items-center gap-2 text-[10px] text-zinc-400">
<span className="iconify" data-icon="lucide:car" data-width="12"></span>
<span>15 min drive (Heavy Traffic)</span>
</div>

<div className="schedule-card group relative flex gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all cursor-move">
<div className="flex flex-col items-center gap-1 pt-1">
<div className="w-3 h-3 rounded-full border-2 border-zinc-300 bg-white z-10"></div>
<span className="text-[10px] font-medium text-zinc-400 font-mono">10:15</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-zinc-900">Office: Design Studio</h4>
<span className="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:grip-vertical" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 mb-2">890 Tech Park, Sector 4</p>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[10px] font-medium text-zinc-600">
<span className="iconify" data-icon="lucide:clock" data-width="10"></span> 1.5h
                                    </span>
</div>
</div>
</div>

<div className="ml-12 flex items-center gap-2 text-[10px] text-zinc-400">
<span className="iconify" data-icon="lucide:car" data-width="12"></span>
<span>45 min drive (Inefficient Route)</span>
</div>

<div className="schedule-card group relative flex gap-4 bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:shadow-md transition-all cursor-move">
<div className="flex flex-col items-center gap-1 pt-1">
<div className="w-3 h-3 rounded-full border-2 border-zinc-300 bg-white z-10"></div>
<span className="text-[10px] font-medium text-zinc-400 font-mono">12:30</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-sm font-medium text-zinc-900">Residence: Sarah Miller</h4>
<span className="iconify text-zinc-300 group-hover:text-zinc-500" data-icon="lucide:grip-vertical" data-width="16"></span>
</div>
<p className="text-xs text-zinc-500 mb-2">15 Garden Lane (Opposite side of town)</p>
<div className="flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[10px] font-medium text-zinc-600">
<span className="iconify" data-icon="lucide:clock" data-width="10"></span> 3h
                                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="w-80 flex flex-col gap-6 shrink-0">

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Route Efficiency</h3>
<p className="text-xs text-zinc-500 mb-4">Current sequence is suboptimal.</p>
<div className="flex items-end justify-between mb-4">
<div>
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Total Time</p>
<p className="text-2xl font-medium text-zinc-900 tracking-tight" id="total-time-display">8h 15m</p>
</div>
<div className="text-right">
<p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Wasted</p>
<p className="text-sm font-medium text-red-500" id="wasted-time-display">+1h 20m</p>
</div>
</div>
<button className="w-full relative group overflow-hidden bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg px-4 py-3 transition-all shadow-lg shadow-zinc-900/10" id="optimize-btn" onclick="runOptimization()">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1s_infinite]"></div>
<div className="flex items-center justify-center gap-2 relative z-10">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
<span className="text-xs font-medium">Optimize Route with AI</span>
</div>
</button>
</div>

<div className="flex-1 bg-white rounded-xl border border-zinc-200 shadow-sm flex flex-col overflow-hidden">
<div className="p-3 border-b border-zinc-100 bg-zinc-50/50 flex justify-between items-center">
<span className="text-xs font-medium text-zinc-900">Logistics Assistant</span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
<div className="flex-1 p-4 overflow-y-auto space-y-4 bg-dots" id="chat-messages">

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
<span className="iconify text-zinc-500" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="bg-zinc-50 p-2.5 rounded-lg rounded-tl-none border border-zinc-100">
<p className="text-xs text-zinc-600 leading-relaxed">
                                        Hello! I've analyzed your imported Excel sheet. I found 3 clients for today. I can save you about 1 hour of driving by rearranging the order. Should I proceed?
                                    </p>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center shrink-0">
<span className="text-[10px] text-white font-medium">ME</span>
</div>
<div className="bg-blue-50 p-2.5 rounded-lg rounded-tr-none border border-blue-100">
<p className="text-xs text-blue-900 leading-relaxed">
                                        Wait, Mrs. Silva can only do afternoon.
                                    </p>
</div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center shrink-0 border border-zinc-200">
<span className="iconify text-zinc-500" data-icon="lucide:bot" data-width="14"></span>
</div>
<div className="bg-zinc-50 p-2.5 rounded-lg rounded-tl-none border border-zinc-100">
<p className="text-xs text-zinc-600 leading-relaxed">
                                        Noted. I'll lock Silva for PM slots and re-optimize the morning route for the others. Checking traffic patterns...
                                    </p>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-100">
<div className="relative">
<input className="w-full bg-zinc-50 text-xs text-zinc-900 rounded-lg pl-3 pr-10 py-2.5 border border-zinc-200 focus:outline-none focus:border-zinc-400 transition-colors" placeholder="Ask AI to adjust schedule..." type="text"/>
<button className="absolute right-2 top-2 text-zinc-400 hover:text-zinc-900 transition-colors">
<span className="iconify" data-icon="lucide:send" data-width="14"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-white rounded-full px-6 py-3 shadow-xl z-50 flex items-center gap-6 border border-zinc-700/50">
<div className="flex items-center gap-3">
<span className="iconify text-zinc-400" data-icon="lucide:map-pin" data-width="16"></span>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest">Start</span>
<span className="text-xs font-medium">Home Base</span>
</div>
</div>
<div className="w-12 border-t border-dashed border-zinc-600"></div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest">Est. Finish</span>
<span className="text-xs font-medium" id="finish-time">04:15 PM</span>
</div>
<div className="h-8 w-px bg-zinc-700 mx-2"></div>
<button className="text-xs font-medium hover:text-zinc-300 transition-colors">View Map</button>
</div>

<div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 hidden flex items-center justify-center" id="optimization-overlay">
<div className="bg-white p-8 rounded-2xl shadow-2xl border border-zinc-100 text-center max-w-sm w-full">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-4 animate-pulse">
<span className="iconify text-zinc-900" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Optimizing Logistics</h3>
<p className="text-sm text-zinc-500 mb-6">Analyzing traffic data, weather conditions, and service times for 1,240 route possibilities...</p>
<div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-900 h-full w-1/2 animate-[shimmer_1s_infinite]"></div>
</div>
</div>
</div>


    </>
  );
}
