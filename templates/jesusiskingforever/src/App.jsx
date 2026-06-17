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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
backgroundImage: {
'hero-pattern': "linear-gradient(to right bottom, rgba(20, 20, 20, 0.9), rgba(0, 0, 0, 0.95)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')",
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // --- BACKEND SIMULATION ---

        // State Management
        let isEditing = true;
        const pageId = "ATH-8842";
        
        // Mock Database
        let contentStore = {
            [pageId]: {
                title: "Build with the Aether Stream API",
                description: "The fundamental energetic current that flows through the Astral Core...",
                overview: "The Aether Stream API allows you to tap into the raw magical potential...",
                lastModified: new Date().toISOString()
            }
        };

        // UI Interactions
        function toggleGroup(id, btn) {
            const el = document.getElementById(id);
            const icon = btn.querySelector('i');
            
            if (el.classList.contains('hidden')) {
                el.classList.remove('hidden');
                icon.setAttribute('data-lucide', 'chevron-down');
            } else {
                el.classList.add('hidden');
                icon.setAttribute('data-lucide', 'chevron-right');
            }
            lucide.createIcons();
        }

        function toggleEditMode() {
            isEditing = !isEditing;
            const btn = document.getElementById('edit-mode-btn');
            const text = document.getElementById('edit-text');
            const editables = document.querySelectorAll('[contenteditable]');

            if (isEditing) {
                btn.classList.remove('bg-zinc-800', 'text-zinc-400');
                btn.classList.add('bg-white', 'text-black');
                text.innerText = "Editing";
                editables.forEach(el => el.setAttribute('contenteditable', 'true'));
            } else {
                btn.classList.remove('bg-white', 'text-black');
                btn.classList.add('bg-zinc-800', 'text-zinc-400');
                text.innerText = "Viewing";
                editables.forEach(el => el.setAttribute('contenteditable', 'false'));
            }
        }

        function saveChanges() {
            // Simulate API Call
            const btn = document.querySelector('button[onclick="saveChanges()"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Publishing...";
            btn.classList.add('text-indigo-400');
            
            setTimeout(() => {
                // Collect Data
                const title = document.querySelector('h1').innerText;
                const desc = document.querySelector('p').innerText;
                
                // Update Store
                contentStore[pageId].title = title;
                contentStore[pageId].lastModified = new Date().toISOString();
                
                // UI Feedback
                btn.innerText = "Published!";
                btn.classList.remove('text-indigo-400');
                btn.classList.add('text-emerald-400');
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.classList.remove('text-emerald-400');
                }, 2000);
                
                console.log("Synced to Backend:", contentStore);
            }, 800);
        }

        function addElement() {
            if(!isEditing) return;
            alert("This would open the block inserter (Heading, Text, Image, Code Block) connected to the backend component system.");
        }

        // Add subtle parallax effect to hero
        document.querySelector('.custom-scrollbar').addEventListener('scroll', function() {
            const scrolled = this.scrollTop;
            const hero = document.querySelector('.bg-hero-pattern');
            if(hero) {
                hero.style.backgroundPositionY = -(scrolled * 0.2) + 'px';
            }
        });

    
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
      

<aside className="w-64 border-r border-zinc-800 flex flex-col bg-black z-20 shrink-0">
<div className="p-6 pb-2">
<h1 className="text-zinc-100 font-medium text-lg tracking-tight mb-6">Get Started</h1>
<nav className="space-y-1">
<a className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Overview</a>
<a className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors" href="#">World Config</a>
</nav>
</div>
<div className="flex-1 overflow-y-auto px-6 py-2 no-scrollbar">
<h2 className="text-zinc-100 font-medium text-sm mb-3">Compendium</h2>
<div className="relative space-y-1">

<div className="group">
<button className="flex items-center w-full text-left gap-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors" onclick="toggleGroup('geography-list', this)">
<i className="w-4 h-4 transition-transform group-hover:text-zinc-100" data-lucide="chevron-right"></i>
                        Geography
                    </button>
<div className="hidden pl-4 border-l border-zinc-800 ml-2 mt-1 space-y-1" id="geography-list">
<a className="block pl-3 py-1 text-xs hover:text-zinc-100" href="#">Maps</a>
<a className="block pl-3 py-1 text-xs hover:text-zinc-100" href="#">Biomes</a>
</div>
</div>

<div className="group">
<button className="flex items-center w-full text-left gap-2 py-1.5 text-zinc-100 font-medium transition-colors" onclick="toggleGroup('magic-list', this)">
<i className="w-4 h-4 text-zinc-100" data-lucide="chevron-down"></i>
                        Magic Systems
                    </button>
<div className="pl-4 border-l border-zinc-700 ml-2 mt-1 space-y-1" id="magic-list">
<div className="relative">
<a className="block pl-3 py-1.5 text-xs text-purple-400 bg-purple-500/10 rounded-r border-l-2 border-purple-500 -ml-[17px]" href="#">The Aether Stream</a>
</div>
<a className="block pl-3 py-1.5 text-xs hover:text-zinc-100" href="#">Runic Binding</a>
<a className="block pl-3 py-1.5 text-xs hover:text-zinc-100" href="#">Void Channeling</a>
<a className="block pl-3 py-1.5 text-xs hover:text-zinc-100" href="#">Soul Anchors</a>
</div>
</div>

<div className="group mt-2">
<button className="flex items-center w-full text-left gap-2 py-1.5 text-sm text-zinc-400 hover:text-zinc-100 transition-colors" onclick="toggleGroup('bestiary-list', this)">
<i className="w-4 h-4 transition-transform" data-lucide="chevron-right"></i>
                        Bestiary
                    </button>
<div className="hidden pl-4 border-l border-zinc-800 ml-2 mt-1 space-y-1" id="bestiary-list">
<a className="block pl-3 py-1 text-xs hover:text-zinc-100" href="#">Dragons</a>
<a className="block pl-3 py-1 text-xs hover:text-zinc-100" href="#">Spirits</a>
</div>
</div>
</div>
<div className="mt-8">
<h2 className="text-zinc-100 font-medium text-sm mb-3">Foundations</h2>
<nav className="space-y-1">
<a className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100" href="#">Cosmology</a>
<a className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100" href="#">Deities</a>
<a className="block px-3 py-1.5 text-sm text-zinc-400 hover:text-zinc-100" href="#">Timelines</a>
</nav>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-300 font-medium border border-zinc-700 group-hover:border-zinc-500">AV</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200">Archivist V.</p>
<p className="text-[10px] text-zinc-500">Workspace Owner</p>
</div>
<i className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300" data-lucide="settings"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-black relative">

<header className="border-b border-zinc-800 bg-black/50 backdrop-blur-md z-30 sticky top-0">

<div className="h-14 px-6 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-zinc-100 font-semibold tracking-tight">Archivum</span>
<span className="bg-zinc-800 text-zinc-400 text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 font-mono">v2.4</span>
</div>
<nav className="flex items-center gap-4 text-sm font-medium">
<a className="text-zinc-100" href="#">Wiki</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Graph View</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Assets</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Settings</a>
</nav>
</div>
<div className="relative group w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-zinc-400" data-lucide="search"></i>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md py-1.5 pl-9 pr-4 text-sm text-zinc-300 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-700" placeholder="Search (Cmd+K)" type="text"/>
</div>
</div>

<div className="h-10 border-t border-zinc-800 flex items-center justify-between px-6 bg-black text-xs">
<div className="flex items-center gap-2 text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer">Foundations</span>
<i className="w-3 h-3 text-zinc-700" data-lucide="chevron-right"></i>
<span className="hover:text-zinc-300 cursor-pointer">Products</span>
<i className="w-3 h-3 text-zinc-700" data-lucide="chevron-right"></i>
<span className="hover:text-zinc-300 cursor-pointer">References</span>
<i className="w-3 h-3 text-zinc-700" data-lucide="chevron-right"></i>
<span className="text-zinc-300">SDKs</span>
</div>
<a className="text-purple-400 hover:text-purple-300 transition-colors font-medium" href="#">View all changes</a>
</div>
</header>

<div className="flex-1 overflow-y-auto custom-scrollbar">
<div className="grid grid-cols-1 lg:grid-cols-12 min-h-full">

<div className="lg:col-span-9 p-8 pb-32 border-r border-zinc-800/50">

<div className="relative w-full h-[320px] rounded-xl overflow-hidden mb-10 border border-zinc-800 group">

<div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 max-w-2xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Stable Release</span>
<span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Verified</span>
</div>
<h1 className="text-4xl font-semibold text-white tracking-tight mb-4 drop-shadow-lg" contenteditable="true">Build with the Aether Stream API</h1>
<p className="text-lg text-zinc-300 leading-relaxed font-light text-shadow" contenteditable="true">
                                The fundamental energetic current that flows through the Astral Core, allowing developers to program arcane machinations within the realm of Lumina.
                            </p>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-medium text-zinc-100 mb-4 tracking-tight">Overview</h2>
<div className="text-zinc-400 leading-7 font-light max-w-3xl space-y-4" contenteditable="true">
<p>
                                The Aether Stream API allows you to tap into the raw magical potential of the universe. By establishing a secure link session, arcanists can siphon energy, weave spells, and manipulate the fabric of reality with low latency.
                            </p>
<p>
                                Connections are secured via Runic Handshakes, ensuring that no void entities can intercept your mana packets during transmission.
                            </p>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-medium text-zinc-100 mb-2 tracking-tight">Foundations</h2>
<p className="text-sm text-zinc-500 mb-6">The building blocks of the Aether platform.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 rounded-lg p-6 relative transition-all hover:bg-zinc-900/50 cursor-pointer">
<h3 className="text-xs font-mono uppercase tracking-widest text-zinc-100 mb-8">Authentication</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300">Secure your arcane connection.</p>
<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<i className="w-3 h-3 text-zinc-500" data-lucide="lock"></i>
</div>
</div>

<div className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 rounded-lg p-6 relative transition-all hover:bg-zinc-900/50 cursor-pointer">
<h3 className="text-xs font-mono uppercase tracking-widest text-zinc-100 mb-8">Link Session</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300">Establish a persistent flow.</p>
<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<i className="w-3 h-3 text-zinc-500" data-lucide="link"></i>
</div>
</div>

<div className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 rounded-lg p-6 relative transition-all hover:bg-zinc-900/50 cursor-pointer">
<h3 className="text-xs font-mono uppercase tracking-widest text-zinc-100 mb-8">Weaving</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300">Construct geometric spells.</p>
<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<i className="w-3 h-3 text-zinc-500" data-lucide="layers"></i>
</div>
</div>

<div className="group bg-zinc-900/30 border border-zinc-800 hover:border-zinc-600 rounded-lg p-6 relative transition-all hover:bg-zinc-900/50 cursor-pointer">
<h3 className="text-xs font-mono uppercase tracking-widest text-zinc-100 mb-8">Discharge</h3>
<p className="text-sm text-zinc-400 group-hover:text-zinc-300">Release accumulated energy.</p>
<div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
<i className="w-3 h-3 text-zinc-500" data-lucide="zap"></i>
</div>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-medium text-zinc-100 mb-6 tracking-tight">Known Integrations</h2>
<div className="border border-zinc-800 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50 text-zinc-500 font-medium">
<tr>
<th className="px-6 py-3 font-normal">System Name</th>
<th className="px-6 py-3 font-normal">Status</th>
<th className="px-6 py-3 font-normal text-right">Latency</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-300">Spire_Dawn_v1</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Operational
                                            </span>
</td>
<td className="px-6 py-4 text-right font-mono text-zinc-500 group-hover:text-zinc-300">12ms</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-300">Deep_Hollow_Node</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                                Degraded
                                            </span>
</td>
<td className="px-6 py-4 text-right font-mono text-zinc-500 group-hover:text-zinc-300">145ms</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 font-mono text-zinc-300">Void_Gate_Alpha</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                Operational
                                            </span>
</td>
<td className="px-6 py-4 text-right font-mono text-zinc-500 group-hover:text-zinc-300">4ms</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="border-t border-zinc-800 pt-12 mt-20 flex justify-between items-start text-sm">
<div>
<h4 className="text-zinc-100 font-medium mb-2">Archivum</h4>
<p className="text-zinc-500 max-w-xs">The standard for worldbuilding documentation and arcane API management.</p>
</div>
<div className="flex gap-16">
<div>
<h5 className="text-zinc-200 font-medium mb-3">Platform</h5>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">API Reference</a></li>
<li><a className="hover:text-zinc-300" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-300" href="#">Status</a></li>
</ul>
</div>
<div>
<h5 className="text-zinc-200 font-medium mb-3">Company</h5>
<ul className="space-y-2 text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">About</a></li>
<li><a className="hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300" href="#">Careers</a></li>
</ul>
</div>
</div>
</div>
</div>

<aside className="hidden lg:col-span-3 p-8 border-l border-zinc-800/50 lg:block">
<div className="mb-8">
<h3 className="text-zinc-100 font-medium text-sm mb-4">Properties</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-center py-1 border-b border-zinc-800/50">
<span className="text-zinc-500">ID</span>
<span className="font-mono text-zinc-300">ATH-8842</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-zinc-800/50">
<span className="text-zinc-500">Created</span>
<span className="text-zinc-300">2 days ago</span>
</div>
<div className="flex justify-between items-center py-1 border-b border-zinc-800/50">
<span className="text-zinc-500">Stability</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-zinc-300">Stable</span>
</div>
</div>
</div>
</div>
<div className="mb-8">
<h3 className="text-zinc-100 font-medium text-sm mb-4">On this page</h3>
<ul className="space-y-2 text-sm border-l border-zinc-800 ml-1">
<li className="pl-4 border-l border-purple-500 -ml-[1px]">
<a className="text-purple-400 font-medium" href="#">Overview</a>
</li>
<li className="pl-4 border-l border-transparent hover:border-zinc-600 transition-colors -ml-[1px]">
<a className="text-zinc-500 hover:text-zinc-300" href="#">Foundations</a>
</li>
<li className="pl-4 border-l border-transparent hover:border-zinc-600 transition-colors -ml-[1px]">
<a className="text-zinc-500 hover:text-zinc-300" href="#">Integrations</a>
</li>
<li className="pl-4 border-l border-transparent hover:border-zinc-600 transition-colors -ml-[1px]">
<a className="text-zinc-500 hover:text-zinc-300" href="#">SDK Reference</a>
</li>
</ul>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[40px] rounded-full pointer-events-none"></div>
<h4 className="text-zinc-100 font-medium text-sm mb-2 relative z-10">Need higher throughput?</h4>
<p className="text-xs text-zinc-500 mb-4 relative z-10 leading-5">Upgrade to the Archmage Tier for unlimited siphoning bandwidth.</p>
<button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-md transition-colors shadow-[0_0_15px_rgba(79,70,229,0.3)] relative z-10">
                            Upgrade Plan
                        </button>
</div>
</aside>
</div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-panel rounded-full p-1.5 flex items-center gap-1 shadow-2xl z-50 border border-zinc-700/50">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors" id="edit-mode-btn" onclick="toggleEditMode()">
<i className="w-3.5 h-3.5" data-lucide="pen-line"></i>
<span id="edit-text">Editing</span>
</button>
<div className="w-px h-6 bg-zinc-700 mx-1"></div>
<button className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors relative group" onclick="addElement()">
<i className="w-4 h-4" data-lucide="plus"></i>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-700">Add Block</span>
</button>
<button className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors relative group">
<i className="w-4 h-4" data-lucide="image"></i>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-700">Media</span>
</button>
<button className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors relative group">
<i className="w-4 h-4" data-lucide="history"></i>
<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-zinc-200 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-zinc-700">History</span>
</button>
<div className="w-px h-6 bg-zinc-700 mx-1"></div>
<button className="px-4 py-2 rounded-full text-zinc-300 text-xs font-medium hover:text-white hover:bg-white/5 transition-colors" onclick="saveChanges()">
                Publish Changes
            </button>
</div>

<div className="fixed bottom-8 right-8 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 opacity-60 hover:opacity-100 transition-opacity cursor-default z-40">
<span className="font-bold font-mono">A</span>
            Made in Aura
        </div>
</main>


    </>
  );
}
