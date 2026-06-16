import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({attrs:{strokeWidth:1.5}})

    const ctx=document.getElementById('satisfactionChart').getContext('2d');
    new Chart(ctx,{
      type:'line',
      data:{labels:['M','T','W','T','F','S','S'],
            datasets:[{data:[88,92,93,95,94,96,94],fill:false,borderColor:'#0ea5e9',
                        tension:.4,borderWidth:2,pointRadius:0}]},
      options:{responsive:true,maintainAspectRatio:false,
               scales:{y:{display:false},x:{display:false}},
               plugins:{legend:{display:false},tooltip:{enabled:false}}}
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="group w-16 hover:w-64 transition-all duration-200 shrink-0 border-r border-neutral-200 bg-white/60 backdrop-blur-md shadow-sm flex flex-col">
<div className="h-16 flex items-center justify-center group-hover:justify-center border-b border-neutral-200">
<span className="text-xl font-semibold tracking-tight">S</span>
</div>
<nav className="flex-1 px-1.5 group-hover:px-3 py-6 space-y-1">
<button className="w-full flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 px-0 group-hover:px-3 py-2 rounded-md hover:bg-neutral-100 transition">
<i data-lucide="activity"></i><span className="text-sm font-medium hidden group-hover:inline">Dashboard</span>
</button>
<button className="w-full flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 px-0 group-hover:px-3 py-2 rounded-md bg-neutral-900 text-white">
<i data-lucide="inbox"></i><span className="text-sm font-medium hidden group-hover:inline">Inbox</span>
</button>
<button className="w-full flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 px-0 group-hover:px-3 py-2 rounded-md hover:bg-neutral-100 transition">
<i data-lucide="users"></i><span className="text-sm font-medium hidden group-hover:inline">Customers</span>
</button>
<button className="w-full flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 px-0 group-hover:px-3 py-2 rounded-md hover:bg-neutral-100 transition">
<i data-lucide="bar-chart-2"></i><span className="text-sm font-medium hidden group-hover:inline">Analytics</span>
</button>
<button className="w-full flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 px-0 group-hover:px-3 py-2 rounded-md hover:bg-neutral-100 transition">
<i data-lucide="settings"></i><span className="text-sm font-medium hidden group-hover:inline">Settings</span>
</button>
</nav>
<div className="p-4 border-t border-neutral-200 flex items-center justify-center group-hover:justify-start gap-0 group-hover:gap-3 transition-all duration-200">
<img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div className="hidden group-hover:block">
<p className="text-sm font-semibold tracking-tight">Alex J.</p>
<p className="text-xs text-neutral-500">Support Lead</p>
</div>
</div>
</aside>

<section className="flex flex-1 flex-col min-h-0">

<header className="h-16 px-6 flex items-center border-b border-neutral-200 bg-white/60 backdrop-blur-md">
<h1 className="text-lg font-semibold tracking-tight">Inbox</h1>
</header>

<div className="flex flex-1 overflow-hidden">

<aside className="w-80 border-r border-neutral-200 overflow-y-auto bg-white/50 flex flex-col">

<div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight">Inbox <span className="text-neutral-500">(4)</span></h2>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-neutral-100 transition"><i data-lucide="filter"></i></button>
<button className="p-1.5 rounded-md hover:bg-neutral-100 transition"><i data-lucide="more-horizontal"></i></button>
</div>
</div>

<div className="px-4 py-3 border-b border-neutral-200">
<input className="w-full px-3 py-2 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Search…" type="text"/>
</div>
<ul className="divide-y divide-neutral-200">
<li className="flex items-start gap-3 px-4 py-4 hover:bg-neutral-100 cursor-pointer transition">
<img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<p className="text-sm font-semibold tracking-tight">Mia Park</p><span className="text-xs text-neutral-500">2h</span>
</div>
<p className="text-sm text-neutral-600 truncate">Hi, I’m having trouble updating my payment info…</p>
</div>
</li>
<li className="flex items-start gap-3 px-4 py-4 bg-neutral-100 border-l-4 border-sky-500 cursor-pointer">
<img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<p className="text-sm font-semibold tracking-tight">Daniel Gomez</p><span className="text-xs text-neutral-500">1h</span>
</div>
<p className="text-sm text-neutral-600 truncate">My account was suspended unexpectedly…</p>
</div>
</li>
<li className="flex items-start gap-3 px-4 py-4 hover:bg-neutral-100 cursor-pointer transition">
<img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center">
<p className="text-sm font-semibold tracking-tight">Ava Patel</p><span className="text-xs text-neutral-500">45m</span>
</div>
<p className="text-sm text-neutral-600 truncate">Is there an ETA on dark-mode for the app?</p>
</div>
</li>
</ul>
</aside>

<main className="flex-1 flex flex-col min-h-0 relative">
<div className="h-20 flex items-center gap-4 border-b border-neutral-200 px-8 bg-white/60 backdrop-blur-md sticky top-0 z-10">
<img className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div className="flex-1">
<p className="font-semibold tracking-tight">Daniel Gomez</p>
<p className="text-sm text-neutral-500">Customer • Active 5m ago</p>
</div>
<button className="p-2 rounded-md hover:bg-neutral-100 transition"><i data-lucide="phone"></i></button>
<button className="p-2 rounded-md hover:bg-neutral-100 transition"><i data-lucide="more-horizontal"></i></button>
</div>
<div className="flex-1 overflow-y-auto space-y-8 px-8 py-6 bg-white/60">
<div className="flex gap-4 fade-in">
<img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<div className="bg-neutral-100 rounded-lg px-4 py-3 max-w-lg">
<p className="text-sm text-neutral-800">Hi team, my account was suspended this morning but I’m not sure why. Can you help?</p>
</div>
<span className="text-xs text-neutral-500 mt-1 inline-block">09:24 AM</span>
</div>
</div>
<div className="flex gap-4 justify-end slide-in-right">
<div>
<div className="bg-neutral-900 text-white rounded-lg px-4 py-3 max-w-lg">
<p className="text-sm">Hey Daniel, sorry for the trouble. Let me look into that and get back to you ASAP.</p>
</div>
<span className="text-xs text-neutral-500 mt-1 inline-block text-right">09:27 AM</span>
</div>
<img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
<div className="flex gap-4 fade-in">
<img className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<div>
<div className="bg-neutral-100 rounded-lg px-4 py-3 max-w-lg">
<p className="text-sm text-neutral-800">Thank you! Let me know if you need any additional info.</p>
</div>
<span className="text-xs text-neutral-500 mt-1 inline-block">09:29 AM</span>
</div>
</div>
</div>

<form className="px-8 py-4 border-t border-neutral-200 flex items-center gap-3 bg-white/80 backdrop-blur-lg sticky bottom-0 z-10">
<button className="p-2 rounded-md hover:bg-neutral-100 transition" type="button"><i data-lucide="paperclip"></i></button>
<button className="p-2 rounded-md hover:bg-neutral-100 transition hidden sm:inline-flex" type="button"><i data-lucide="smile"></i></button>
<button className="p-2 rounded-md hover:bg-neutral-100 transition hidden sm:inline-flex" type="button"><i data-lucide="image"></i></button>
<textarea className="flex-1 resize-none px-4 py-2 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Write a message…" rows="1"></textarea>
<button className="p-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition" type="submit"><i data-lucide="send"></i></button>
</form>
</main>

<aside className="w-80 shrink-0 border-l border-neutral-200 bg-white/50 flex flex-col">
<div className="px-6 py-8 flex flex-col items-center gap-3 border-b border-neutral-200">
<img className="h-24 w-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<p className="text-lg font-semibold tracking-tight">Daniel Gomez</p>
<p className="text-sm text-neutral-500">Premium Customer</p>
</div>
<div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

<div>
<h2 className="text-sm font-semibold tracking-tight mb-2">Contact</h2>
<div className="space-y-2 text-sm">
<div className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="mail"></i><span>daniel.gomez@email.com</span></div>
<div className="flex items-center gap-2"><i className="h-4 w-4" data-lucide="phone"></i><span>+1 (555) 019-2433</span></div>
</div>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-2">Satisfaction</h2>
<p className="text-4xl font-semibold tracking-tight">94%</p>
<div className="mt-3" style={{height: '80px'}}><canvas id="satisfactionChart"></canvas></div>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-2">Details</h2>
<ul className="text-sm space-y-2">
<li className="flex justify-between"><span className="text-neutral-500">Conversation ID</span><span>137</span></li>
<li className="flex justify-between"><span className="text-neutral-500">User ID</span><span>113</span></li>
<li className="flex justify-between"><span className="text-neutral-500">User type</span><span>Lead</span></li>
<li className="flex justify-between"><span className="text-neutral-500">Creation time</span><span>Thu</span></li>
<li className="flex justify-between"><span className="text-neutral-500">Last activity</span><span>Thu</span></li>
</ul>
<button className="mt-2 text-sm text-sky-600 hover:underline">View more</button>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-2">Notes</h2>
<textarea className="w-full px-3 py-2 rounded-md border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400" placeholder="Add internal note…" rows="3"></textarea>
</div>

<div>
<h2 className="text-sm font-semibold tracking-tight mb-2">Tags</h2>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs">billing</span>
<span className="px-2.5 py-1 rounded-md bg-neutral-100 text-xs">premium</span>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-neutral-200">
<button className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition">
<i data-lucide="archive"></i>Archive Conversation
          </button>
</div>
</aside>
</div>
</section>


    </>
  );
}
