import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
fontSize: {
'xxs': '0.625rem',
}
}
}
}



        // Track current category
        let currentCategory = 'gfx';

        function toggleModal() {
            const modal = document.getElementById('uploadModal');
            const select = document.getElementById('modal-category-select');
            
            if (modal.classList.contains('hidden')) {
                // Open Modal
                modal.classList.remove('hidden');
                // Set the select dropdown to the currently active category
                select.value = currentCategory;
            } else {
                // Close Modal
                modal.classList.add('hidden');
            }
        }

        function switchCategory(id, name, icon) {
            currentCategory = id;
            
            // 1. Update Sidebar Active States
            // Reset all buttons
            const buttons = ['nav-gfx', 'nav-bg-img', 'nav-bg-snd', 'nav-music'];
            buttons.forEach(btnId => {
                const btn = document.getElementById(btnId);
                // Remove active classes
                btn.classList.remove('bg-white/5', 'text-white');
                // Add inactive classes
                btn.classList.add('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');
            });

            // Set active button
            const activeBtn = document.getElementById('nav-' + id);
            activeBtn.classList.remove('text-zinc-400', 'hover:text-white', 'hover:bg-white/5');
            activeBtn.classList.add('bg-white/5', 'text-white');

            // 2. Update Breadcrumb
            document.getElementById('breadcrumb-title').textContent = name;

            // 3. Update Empty State Content
            document.getElementById('empty-state-text').textContent = `This ${name} library is currently empty. Upload new assets to manage them here.`;
            document.getElementById('empty-state-icon').setAttribute('icon', 'lucide:' + icon);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col hidden md:flex shrink-0 z-20">

<div className="h-14 flex items-center px-5 border-b border-white/5 justify-between">
<div className="flex items-center gap-2 text-white">
<div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm">AETHER ADMIN</span>
</div>
<span className="text-xs bg-zinc-900 border border-white/5 text-zinc-500 px-1.5 py-0.5 rounded">v2.0</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="16"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
                    Creators
                </a>
</div>

<div className="space-y-0.5">
<p className="px-3 text-xs font-medium text-zinc-600 uppercase tracking-widest mb-2">Assets Library</p>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-white bg-white/5 rounded-md transition-all group" id="nav-gfx" onclick="switchCategory('gfx', 'GFX / VFX', 'film')">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:film" strokeWidth="1.5" width="16"></iconify-icon>
                        GFX / VFX
                    </div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" id="nav-bg-img" onclick="switchCategory('bg-img', 'BG Images', 'image')">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:image" strokeWidth="1.5" width="16"></iconify-icon>
                        BG Images
                    </div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" id="nav-bg-snd" onclick="switchCategory('bg-snd', 'BG Sounds', 'waves')">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="16"></iconify-icon>
                        BG Sounds
                    </div>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all group" id="nav-music" onclick="switchCategory('music', 'Musics', 'music')">
<div className="flex items-center gap-3">
<iconify-icon icon="lucide:music" strokeWidth="1.5" width="16"></iconify-icon>
                        Musics
                    </div>
</button>
</div>
</nav>

<div className="p-3 border-t border-white/5">
<div className="flex items-center gap-3 p-2 rounded-md transition-colors">
<div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-zinc-400">
<iconify-icon icon="lucide:user" width="14"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-200 font-medium">Administrator</span>
<span className="text-[10px] text-zinc-500">admin@aether.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative">

<header className="h-14 border-b border-white/5 bg-zinc-950 flex items-center justify-between px-6 sticky top-0 z-10">
<div className="flex items-center gap-4">
<div className="md:hidden text-white cursor-pointer">
<iconify-icon icon="lucide:menu" width="20"></iconify-icon>
</div>
<nav className="flex items-center text-sm text-zinc-500">
<span>Library</span>
<iconify-icon className="mx-2" icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="text-white font-medium" id="breadcrumb-title">GFX / VFX</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded text-sm font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="toggleModal()">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                    Upload Asset
                </button>
</div>
</header>

<div className="flex-1 flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950">
<div className="max-w-md w-full text-center space-y-6">
<div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center mx-auto shadow-2xl relative group">
<div className="absolute inset-0 bg-white/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors" icon="lucide:film" id="empty-state-icon" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<h2 className="text-lg font-medium text-white tracking-tight">No assets found</h2>
<p className="text-sm text-zinc-500 leading-relaxed" id="empty-state-text">
                        This GFX / VFX library is currently empty. Upload new assets to manage them here.
                    </p>
</div>
<div className="pt-2">
<button className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white border border-dashed border-zinc-700 hover:border-zinc-500 rounded-lg px-6 py-8 w-full justify-center transition-all bg-zinc-900/20 hover:bg-zinc-900/50 group" onclick="toggleModal()">
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400" icon="lucide:upload-cloud" width="18"></iconify-icon>
<span>Click to upload new item</span>
</button>
</div>
</div>
</div>
</main>

<div aria-modal="true" className="fixed inset-0 z-50 hidden" id="uploadModal" role="dialog">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleModal()"></div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-zinc-950 border border-white/10 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">

<div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-zinc-900/50">
<h3 className="text-sm font-medium text-white">Upload to Library</h3>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="toggleModal()">
<iconify-icon icon="lucide:x" width="18"></iconify-icon>
</button>
</div>

<div className="p-5 space-y-5 overflow-y-auto">

<div className="relative group">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" type="file"/>
<div className="border border-dashed border-zinc-700 rounded-lg bg-zinc-900/30 p-8 flex flex-col items-center justify-center gap-2 group-hover:border-zinc-500 group-hover:bg-zinc-900/50 transition-all">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 mb-2">
<iconify-icon icon="lucide:upload" width="18"></iconify-icon>
</div>
<p className="text-sm text-white font-medium">Click or drag file to this area to upload</p>
<p className="text-xs text-zinc-500">Support for MP4, MOV, MP3, WAV, PNG, JPG</p>
</div>
</div>

<div className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Asset Title</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 placeholder-zinc-700" placeholder="e.g. Cyber Glitch 01" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Library Category</label>
<div className="relative">
<select className="w-full bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 appearance-none cursor-pointer" id="modal-category-select">
<option value="gfx">GFX / VFX</option>
<option value="bg-img">BG Images</option>
<option value="bg-snd">BG Sounds</option>
<option value="music">Musics</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Description</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-white/20 placeholder-zinc-700 resize-none" rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400">Access Level</label>
<div className="flex items-center gap-4 py-2">
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="accent-white" name="access" type="radio"/>
<span className="text-sm text-zinc-300">Free</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-white" name="access" type="radio"/>
<span className="text-sm text-zinc-300">Premium</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="px-5 py-4 border-t border-white/5 bg-zinc-900/30 flex justify-end gap-3">
<button className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors" onclick="toggleModal()">Cancel</button>
<button className="px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-zinc-200 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
                        Confirm Upload
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
