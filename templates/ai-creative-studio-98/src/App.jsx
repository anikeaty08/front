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



        // Icons
        lucide.createIcons();

        // Tab Switching Logic
        function switchTab(tabName) {
            const tabs = ['creatives', 'scripts', 'settings'];
            const titles = {
                'creatives': 'AI Creatives',
                'scripts': 'Viral Scripts',
                'settings': 'Configuration'
            };

            tabs.forEach(t => {
                const element = document.getElementById(`tab-${t}`);
                const navBtn = document.getElementById(`nav-${t}`);
                
                if (t === tabName) {
                    element.classList.remove('hidden');
                    // Update Nav Styles
                    navBtn.classList.remove('text-zinc-500', 'bg-transparent');
                    navBtn.classList.add('bg-white', 'text-zinc-900', 'shadow-sm', 'ring-1', 'ring-zinc-200');
                    // Reset others
                } else {
                    element.classList.add('hidden');
                    navBtn.classList.remove('bg-white', 'text-zinc-900', 'shadow-sm', 'ring-1', 'ring-zinc-200');
                    navBtn.classList.add('text-zinc-500', 'bg-transparent');
                }
            });

            document.getElementById('page-title').innerText = titles[tabName];
        }

        // Influencer Search Simulation
        const searchInput = document.getElementById('influencer-input');
        const searchDropdown = document.getElementById('search-dropdown');
        const influencerList = document.getElementById('influencer-list');
        const emptyMsg = document.getElementById('empty-msg');

        searchInput.addEventListener('input', (e) => {
            if (e.target.value.length > 2) {
                searchDropdown.classList.remove('hidden');
            } else {
                searchDropdown.classList.add('hidden');
            }
        });

        function addInfluencerFromSearch() {
            searchDropdown.classList.add('hidden');
            searchInput.value = '';
            if(emptyMsg) emptyMsg.style.display = 'none';

            const newTag = document.createElement('div');
            newTag.className = 'flex items-center gap-2 bg-zinc-50 border border-zinc-200 pr-3 pl-1 py-1 rounded-full animate-pulse';
            newTag.innerHTML = `
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" class="w-6 h-6 rounded-full bg-zinc-200">
                <span class="text-xs font-medium text-zinc-700">@hormozi</span>
                <button onclick="this.parentElement.remove()" class="hover:text-red-500 text-zinc-400 transition-colors"><i data-lucide="x" class="w-3 h-3"></i></button>
            `;
            
            // Remove pulse after animation
            setTimeout(() => newTag.classList.remove('animate-pulse'), 500);
            
            influencerList.appendChild(newTag);
            lucide.createIcons();
        }

        // Modal Logic
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');

        function openModal(type) {
            modalOverlay.classList.remove('hidden');
            // Small timeout to allow display:block to apply before opacity transition
            setTimeout(() => {
                modalOverlay.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            
            const title = document.getElementById('modal-title');
            if(type === 'edit') title.innerText = 'Edit Creative';
            if(type === 'script') title.innerText = 'Edit Script';
        }

        function closeModal() {
            modalOverlay.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
            }, 300);
        }

        // Close modal on click outside
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
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
      

<aside className="w-64 border-r border-zinc-100 flex-shrink-0 flex flex-col h-full bg-zinc-50/50">
<div className="p-4 flex items-center gap-2 mb-2">
<div className="h-6 w-6 rounded bg-orange-500 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="font-semibold text-sm tracking-tight text-zinc-800">ElevenCreative</span>
<i className="w-4 h-4 text-zinc-400 ml-auto" data-lucide="chevrons-up-down"></i>
</div>
<nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
<div className="px-2 py-1.5 text-xs font-medium text-zinc-400 mt-2">Platform</div>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium text-zinc-900 rounded-md bg-white shadow-sm ring-1 ring-zinc-200 transition-all hover:bg-zinc-50 group" id="nav-creatives" onclick="switchTab('creatives')">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900" data-lucide="image"></i>
                AI Creatives
            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100/80 transition-all group" id="nav-scripts" onclick="switchTab('scripts')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" data-lucide="pen-tool"></i>
                Viral Scripts
            </button>
<button className="w-full flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100/80 transition-all group" id="nav-settings" onclick="switchTab('settings')">
<i className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900" data-lucide="settings-2"></i>
                Configuration
            </button>
<div className="px-2 py-1.5 text-xs font-medium text-zinc-400 mt-6">Library</div>
<a className="w-full flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100/80 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="folder-open"></i>
                My Templates
            </a>
<a className="w-full flex items-center gap-2.5 px-2 py-1.5 text-sm font-medium text-zinc-500 rounded-md hover:bg-zinc-100/80 transition-all" href="#">
<i className="w-4 h-4 text-zinc-400" data-lucide="history"></i>
                History
            </a>
</nav>
<div className="p-3 border-t border-zinc-100">
<div className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-100 cursor-pointer transition-colors">
<div className="h-8 w-8 rounded-full bg-zinc-200 overflow-hidden border border-zinc-200">
<img alt="User" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-900">Jane Doe</span>
<span className="text-xs text-zinc-500">Pro Plan</span>
</div>
<i className="w-4 h-4 text-zinc-400 ml-auto" data-lucide="more-horizontal"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">

<header className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span>Workspace</span>
<i className="w-3 h-3 text-zinc-400" data-lucide="chevron-right"></i>
<span className="text-zinc-900 font-medium" id="page-title">AI Creatives</span>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Feedback</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors">Docs</button>
<div className="w-px h-4 bg-zinc-200"></div>
<button className="bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-800 transition-all shadow-sm flex items-center gap-1.5">
<i className="w-3 h-3" data-lucide="plus"></i> New Project
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 relative">

<div className="max-w-6xl mx-auto space-y-8 fade-in" id="tab-creatives">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Generate Creatives</h1>
<p className="text-base text-zinc-500">Create high-converting visuals optimized for social media ads.</p>
</div>

<div className="bg-zinc-50/50 rounded-xl border border-zinc-200 p-1 shadow-sm focus-within:ring-2 focus-within:ring-zinc-100 focus-within:border-zinc-300 transition-all">
<div className="flex flex-col md:flex-row gap-0 md:gap-4 p-3">
<div className="flex-1">
<label className="block text-xs font-medium text-zinc-500 mb-1.5 ml-1">Prompt</label>
<textarea className="w-full bg-transparent border-0 text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-0 resize-none h-20 p-1" placeholder="Describe your creative... (e.g., A futuristic sneaker floating in neon space, cyberpunk style)"></textarea>
</div>
<div className="w-full md:w-48 border-t md:border-t-0 md:border-l border-zinc-100 pt-3 md:pt-0 md:pl-4 flex flex-col justify-between">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Format</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-zinc-200 text-zinc-900 text-xs rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-100 font-medium">
<option>Instagram Reels (9:16)</option>
<option>Feed Post (1:1)</option>
<option>Story (9:16)</option>
<option>Landscape (16:9)</option>
</select>
<i className="w-3 h-3 text-zinc-400 absolute right-2.5 top-2.5 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="mt-3 md:mt-0 w-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-2 rounded-md flex items-center justify-center gap-2 transition-all" onclick="generateCreative()">
<i className="w-3 h-3" data-lucide="wand-2"></i> Generate
                            </button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-900">Recent Generations</h3>
<span className="text-xs text-zinc-400">Showing 4 results</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="creative-gallery">

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:shadow-md transition-all cursor-pointer">
<img alt="Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white text-xs font-medium line-clamp-2 mb-2">Modern aesthetics for new coffee brand launch.</p>
<div className="flex items-center gap-2">
<button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-xs py-1.5 rounded flex items-center justify-center gap-1.5 transition-colors" onclick="openModal('edit')">
<i className="w-3 h-3" data-lucide="edit-3"></i> Edit
                                    </button>
<button className="bg-white text-zinc-900 p-1.5 rounded hover:bg-zinc-100 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:shadow-md transition-all cursor-pointer">
<img alt="Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white text-xs font-medium line-clamp-2 mb-2">Red sneaker floating with neon accents.</p>
<div className="flex items-center gap-2">
<button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-xs py-1.5 rounded flex items-center justify-center gap-1.5 transition-colors" onclick="openModal('edit')">
<i className="w-3 h-3" data-lucide="edit-3"></i> Edit
                                    </button>
<button className="bg-white text-zinc-900 p-1.5 rounded hover:bg-zinc-100 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="group relative aspect-[9/16] bg-zinc-100 rounded-lg overflow-hidden border border-zinc-200 hover:shadow-md transition-all cursor-pointer">
<img alt="Creative" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
<p className="text-white text-xs font-medium line-clamp-2 mb-2">Minimalist skincare bottle mockup.</p>
<div className="flex items-center gap-2">
<button className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white text-xs py-1.5 rounded flex items-center justify-center gap-1.5 transition-colors" onclick="openModal('edit')">
<i className="w-3 h-3" data-lucide="edit-3"></i> Edit
                                    </button>
<button className="bg-white text-zinc-900 p-1.5 rounded hover:bg-zinc-100 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="relative aspect-[9/16] bg-zinc-50 rounded-lg overflow-hidden border border-zinc-200 border-dashed flex items-center justify-center flex-col gap-3">
<div className="w-8 h-8 rounded-full border-2 border-zinc-200 border-t-zinc-400 animate-spin"></div>
<span className="text-xs text-zinc-400 font-medium">Processing...</span>
</div>
</div>
</div>
</div>

<div className="hidden max-w-4xl mx-auto space-y-8 fade-in" id="tab-scripts">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Viral Scripts</h1>
<p className="text-base text-zinc-500">Draft scripts based on trending influencer styles.</p>
</div>

<div className="bg-white rounded-xl border border-zinc-200 p-6 shadow-sm">
<div className="flex flex-col gap-4">
<label className="text-sm font-medium text-zinc-900">Reference Influencers</label>
<div className="flex gap-2">
<div className="relative flex-1 group">
<i className="w-4 h-4 text-zinc-400 absolute left-3 top-3" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 transition-all placeholder:text-zinc-400" id="influencer-input" placeholder="Search Instagram handle (e.g. @hormozi)" type="text"/>

<div className="absolute top-full left-0 w-full mt-1 bg-white border border-zinc-100 shadow-lg rounded-lg p-1 hidden z-20" id="search-dropdown">
<div className="flex items-center gap-3 p-2 hover:bg-zinc-50 rounded-md cursor-pointer" onclick="addInfluencerFromSearch()">
<img className="w-8 h-8 rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-900">Alex Hormozi</span>
<span className="text-xs text-zinc-500">@hormozi</span>
</div>
<button className="ml-auto text-xs font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded">Select</button>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap gap-3 items-center min-h-[40px]" id="influencer-list">
<div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 pr-3 pl-1 py-1 rounded-full">
<img className="w-6 h-6 rounded-full bg-zinc-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gary"/>
<span className="text-xs font-medium text-zinc-700">@garyvee</span>
<button className="hover:text-red-500 text-zinc-400 transition-colors"><i className="w-3 h-3" data-lucide="x"></i></button>
</div>
<span className="text-xs text-zinc-400 ml-2 italic" id="empty-msg">Add influencers to guide the AI style...</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bg-zinc-50/50 rounded-xl border border-zinc-200 p-1 shadow-sm focus-within:ring-2 focus-within:ring-zinc-100 focus-within:border-zinc-300 transition-all relative">

<div className="absolute -top-3 right-4 flex -space-x-1.5">
<img className="w-6 h-6 rounded-full border-2 border-white bg-zinc-200" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gary" title="Using style of @garyvee"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-500 font-medium">+1</div>
</div>
<div className="p-3">
<textarea className="w-full bg-transparent border-0 text-sm text-zinc-900 placeholder:text-zinc-400 focus:ring-0 resize-none h-24 p-1" placeholder="What do you want to post about? (e.g., 3 tips to scale a SaaS business)"></textarea>
<div className="flex justify-between items-center mt-2 pt-2 border-t border-zinc-100">
<div className="flex gap-2">
<button className="text-zinc-400 hover:text-zinc-600 transition-colors"><i className="w-4 h-4" data-lucide="paperclip"></i></button>
<button className="text-zinc-400 hover:text-zinc-600 transition-colors"><i className="w-4 h-4" data-lucide="mic"></i></button>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-1.5 px-4 rounded-md flex items-center gap-2 transition-all">
                                    Generate Script <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-lg border border-zinc-200 p-5 shadow-sm hover:border-zinc-300 transition-all group">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Viral Hook</span>
<h3 className="text-sm font-semibold text-zinc-900">Stop Selling, Start Teaching</h3>
</div>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" onclick="openModal('script')" title="Edit"><i className="w-4 h-4" data-lucide="edit-3"></i></button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" title="Save Template"><i className="w-4 h-4" data-lucide="bookmark"></i></button>
</div>
</div>
<div className="space-y-3">
<div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Visual Hook</span>
<p className="text-sm text-zinc-800 bg-zinc-50 p-2 rounded border border-zinc-100">Close up of you ripping a price tag in half. Fast cut.</p>
</div>
<div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Script</span>
<p className="text-sm text-zinc-600 leading-relaxed">
                                        Nobody buys when they're being sold to. They buy when they're learning.<br/><br/>
                                        Instead of saying "Buy my course", show them exactly how to solve their biggest problem for free in 60 seconds. Then, the product becomes the logical next step, not a sales pitch.
                                    </p>
</div>
<div>
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">Caption</span>
<p className="text-sm text-zinc-500 italic">"Value is the new currency. 💸 #marketingtips #saas"</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden max-w-3xl mx-auto space-y-8 fade-in" id="tab-settings">
<div className="flex flex-col gap-1">
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Brand Context</h1>
<p className="text-base text-zinc-500">Configure your brand identity to guide the AI generation.</p>
</div>
<div className="bg-white border border-zinc-200 rounded-xl shadow-sm divide-y divide-zinc-100">

<div className="p-6 space-y-4">
<div className="flex items-start gap-6">
<div className="flex-shrink-0">
<label className="block text-sm font-medium text-zinc-900 mb-2">Logo</label>
<div className="h-24 w-24 rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 flex flex-col items-center justify-center text-zinc-400 hover:border-zinc-300 hover:bg-zinc-100 cursor-pointer transition-all">
<i className="w-6 h-6 mb-1" data-lucide="upload-cloud"></i>
<span className="text-[10px]">Upload</span>
</div>
</div>
<div className="flex-1 space-y-4">
<div>
<label className="block text-sm font-medium text-zinc-900 mb-1.5">Business Description</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-lg text-sm p-3 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 h-24 resize-none" placeholder="We are a premium coffee subscription service focusing on sustainable farming..."></textarea>
</div>
</div>
</div>
</div>

<div className="p-6">
<label className="block text-sm font-medium text-zinc-900 mb-3">Brand Colors</label>
<div className="flex gap-4">
<div className="flex items-center gap-2 border border-zinc-200 rounded-md p-1.5 pr-3">
<input className="h-8 w-8 rounded cursor-pointer border-0 p-0" type="color" value="#000000"/>
<span className="text-xs font-mono text-zinc-600">#000000</span>
</div>
<div className="flex items-center gap-2 border border-zinc-200 rounded-md p-1.5 pr-3">
<input className="h-8 w-8 rounded cursor-pointer border-0 p-0" type="color" value="#ea580c"/>
<span className="text-xs font-mono text-zinc-600">#EA580C</span>
</div>
<button className="h-11 w-11 rounded-md border border-dashed border-zinc-300 flex items-center justify-center text-zinc-400 hover:border-zinc-400 hover:text-zinc-600 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="p-6">
<div className="flex justify-between items-center mb-3">
<label className="block text-sm font-medium text-zinc-900">Creative Style References</label>
<span className="text-xs text-zinc-400">Images the AI uses for aesthetic guidance</span>
</div>
<div className="grid grid-cols-4 gap-3">
<div className="aspect-square rounded-lg bg-zinc-100 border border-zinc-200 overflow-hidden relative group">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center cursor-pointer transition-all">
<i className="w-4 h-4 text-white" data-lucide="trash-2"></i>
</div>
</div>
<div className="aspect-square rounded-lg border-2 border-dashed border-zinc-200 bg-zinc-50 flex flex-col items-center justify-center text-zinc-400 hover:border-zinc-300 hover:bg-zinc-100 cursor-pointer transition-all">
<i className="w-5 h-5" data-lucide="image-plus"></i>
</div>
</div>
</div>

<div className="p-6 bg-zinc-50/30">
<label className="block text-sm font-medium text-zinc-900 mb-1">Saved Influencers</label>
<p className="text-xs text-zinc-500 mb-3">These will be available in the Viral Scripts tab.</p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-white border border-zinc-200 py-1.5 px-3 rounded-full shadow-sm">
<img className="w-5 h-5 rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Gary"/>
<span className="text-xs font-medium text-zinc-700">@garyvee</span>
</div>
<div className="flex items-center gap-2 bg-white border border-zinc-200 py-1.5 px-3 rounded-full shadow-sm">
<img className="w-5 h-5 rounded-full bg-zinc-100" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"/>
<span className="text-xs font-medium text-zinc-700">@hormozi</span>
</div>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="plus-circle"></i> Manage
                            </button>
</div>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-zinc-800 transition-all shadow-sm">
                        Save Changes
                    </button>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-zinc-900/40 backdrop-blur-[2px] z-50 hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="modal-overlay">
<div className="bg-white w-full max-w-lg rounded-xl shadow-2xl border border-zinc-200 transform scale-95 transition-transform duration-300 overflow-hidden" id="modal-content">
<div className="px-5 py-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<h3 className="text-sm font-semibold text-zinc-900" id="modal-title">Edit Content</h3>
<button className="text-zinc-400 hover:text-zinc-700 transition-colors" onclick="closeModal()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5" id="modal-body">

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-500 mb-1.5">Caption / Script</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-lg text-sm p-3 focus:outline-none focus:ring-2 focus:ring-zinc-100 focus:border-zinc-300 h-32 resize-none">Nobody buys when they're being sold to. They buy when they're learning.</textarea>
</div>
<div className="flex items-center justify-between pt-2">
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center gap-1.5 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="bookmark"></i> Save as Template
                        </button>
<div className="flex gap-2">
<button className="text-xs font-medium text-zinc-600 px-3 py-2 hover:bg-zinc-100 rounded-md transition-colors" onclick="closeModal()">Cancel</button>
<button className="bg-zinc-900 text-white text-xs font-medium px-3 py-2 rounded-md hover:bg-zinc-800 transition-all">Save Changes</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
