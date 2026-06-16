import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.querySelectorAll('.nav-item').forEach(link => {
link.addEventListener('click', (e) => {
const btn = e.currentTarget;
const target = btn.dataset.target;
document.querySelectorAll('.nav-item').forEach(el => {
el.className = 'nav-item w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-md transition-all group';
});
btn.className = 'nav-item w-full flex items-center gap-2.5 px-3 py-1.5 text-xs rounded-md transition-all group bg-zinc-800/40 border border-zinc-800/60 shadow-sm text-zinc-200';
const titleMap = {
'overview': 'Collections Overview',
'catalog': 'Object Catalog',
'assets': 'Digital Assets',
'accessions': 'Accessions Workflow',
'deaccessions': 'Deaccession Records',
'location': 'Location & Tracking',
'loans': 'Loans & Transport',
'transit': 'Transit Log',
'exhibitions': 'Exhibition Management',
'installations': 'Installation Planning',
'conservation': 'Conservation Reports',
'insurance': 'Insurance Policies',
'library-catalog': 'Library Catalog',
'library-patrons': 'Patron Management',
'library-circulation': 'Circulation Desk',
'library-fines': 'Fines & Fees',
'library-acquisitions': 'Acquisitions',
'publishing': 'Public Portal',
'users': 'User Management',
'settings': 'System Settings'
};
const titleEl = document.getElementById('page-title');
if(titleEl) titleEl.textContent = titleMap[target] || 'Overview';
document.querySelectorAll('.page-overview').forEach(el => el.classList.add('hidden'));
document.querySelectorAll('.page-content').forEach(el => el.classList.add('hidden'));
if (target === 'overview') {
document.querySelectorAll('.page-overview').forEach(el => el.classList.remove('hidden'));
} else {
const p = document.getElementById('page-' + target);
if(p) p.classList.remove('hidden');
}
});
});
// Settings Navigation
document.querySelectorAll('.settings-nav-item').forEach(btn => {
btn.addEventListener('click', () => {
document.querySelectorAll('.settings-nav-item').forEach(el => {
el.className = 'settings-nav-item w-full text-left px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 rounded-md transition-colors';
});
document.querySelectorAll('.settings-view').forEach(el => el.classList.add('hidden'));
btn.className = 'settings-nav-item w-full text-left px-3 py-2 text-sm text-white bg-zinc-800 rounded-md font-medium transition-colors';
const target = btn.dataset.settingsTarget;
const view = document.getElementById('settings-view-' + target);
if(view) {
view.classList.remove('hidden');
const sidebar = document.querySelector('#page-settings > div > div:first-child');
const content = document.querySelector('#page-settings > div > div:last-child');
if(window.innerWidth < 768) {
sidebar.classList.add('hidden');
content.classList.remove('hidden');
content.classList.add('block');
}
}
});
});
document.querySelectorAll('.back-to-settings').forEach(btn => {
btn.addEventListener('click', () => {
const sidebar = document.querySelector('#page-settings > div > div:first-child');
const content = document.querySelector('#page-settings > div > div:last-child');
sidebar.classList.remove('hidden');
if(window.innerWidth < 768) {
content.classList.add('hidden');
}
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();
      
      // Global function to open collection details
      window.openCollectionDetails = () => {
          document.querySelectorAll('.page-overview').forEach(el => el.classList.add('hidden'));
          document.querySelectorAll('.page-content').forEach(el => el.classList.add('hidden'));
          
          const detailPage = document.getElementById('page-collection-details');
          if(detailPage) {
              detailPage.classList.remove('hidden');
              // Update Title
              const titleEl = document.getElementById('page-title');
              if(titleEl) titleEl.textContent = 'Greco-Roman Collection';
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-zinc-800/60 flex flex-col h-full bg-zinc-950 hidden md:flex shrink-0 z-20">

<div className="p-3 border-b border-zinc-800/60 relative">
<button className="flex hover:bg-zinc-900 transition-all duration-200 group hover:border-zinc-800 w-full border-transparent border rounded-lg pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-md shadow-inner flex items-center justify-center text-white font-bold text-xs border border-white/10 tracking-tight">
              ML
            </div>
<div className="text-left">
<p className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors">
                MuseumLite
              </p>
<p className="text-[10px] text-zinc-500">Enterprise Edition</p>
</div>
</div>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400 transition-colors" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 15 5 5 5-5"></path>
<path d="m7 9 5-5 5 5"></path>
</svg>
</button>
</div>
<nav className="flex-1 overflow-y-auto pt-4 pr-2 pb-4 pl-2">
<div className="px-2 mb-6">
<div className="relative group">
<svg className="lucide lucide-search absolute left-2.5 top-2 w-3.5 h-3.5 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="w-full bg-zinc-900/40 border border-zinc-800/60 rounded-md text-xs py-1.5 pl-8 pr-3 text-zinc-300 placeholder-zinc-600 focus:outline-none focus:bg-zinc-900 focus:border-zinc-700 transition-all" placeholder="Search collection..." type="text"/>
</div>
</div>
<div className="px-1">
<div className="px-2 pb-2 text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
            Core Inventory
          </div>
<div className="space-y-0.5">
<button className="nav-item flex gap-2.5 transition-all group text-xs text-zinc-200 bg-zinc-800/40 w-full border-zinc-800/60 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2.5 gap-y-2.5 items-center" data-target="overview">
<svg className="lucide lucide-layout-grid w-4 h-4 text-indigo-400" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
<span className="font-medium">Overview</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-md transition-all group" data-target="catalog">
<svg className="lucide lucide-database group-hover:text-zinc-400 transition-colors w-[16px] h-[16px]" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path className="" d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
<span className="">Object Catalog</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 rounded-md transition-all group" data-target="assets">
<svg className="lucide lucide-image w-4 h-4 group-hover:text-zinc-400 transition-colors" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path className="" d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
<span className="">Digital Assets</span>
</button>
</div>
</div>
</nav>
<div className="p-3 border-t border-zinc-800/60">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-zinc-900/50 cursor-pointer transition-colors">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full border border-zinc-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"/>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-zinc-950 rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-zinc-200 truncate">
              Dr. E. Vance
            </p>
<p className="text-[10px] text-zinc-500 truncate">Lead Curator</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative z-10">

<header className="h-14 border-b border-zinc-800/60 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
<div className="flex items-center gap-2 text-xs">
<span className="text-zinc-500 flex items-center gap-2">
<svg className="lucide lucide-building-2 w-3.5 h-3.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12h4"></path>
<path d="M10 8h4"></path>
<path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
<path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
<path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
</svg>
            MuseumLite
          </span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-300 font-medium" id="page-title">
            Collections Overview
          </span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-md text-xs font-medium transition-all">
<svg className="lucide lucide-upload w-3.5 h-3.5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v12"></path>
<path d="m17 8-5-5-5 5"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
</svg>
<span>Add Object</span>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/50 px-3 py-1.5 rounded-md text-xs font-medium transition-all shadow-[0_0_15px_-3px_rgba(99,102,241,0.2)]">
<svg className="lucide lucide-easel w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
<span>New Exhibition</span>
</button>
</div>
</header>

<div className="px-6 py-4 border-b border-zinc-800/60 bg-zinc-950/50 backdrop-blur-sm page-overview">
<div className="grid grid-cols-4 gap-4">
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-3 flex items-center gap-3">
<div className="p-2 bg-indigo-500/10 rounded-md border border-indigo-500/20">
<svg className="lucide lucide-package w-4 h-4 text-indigo-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
<path d="M12 22V12"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<path d="m7.5 4.27 9 5.15"></path>
</svg>
</div>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                Total Objects
              </div>
<div className="text-lg font-semibold text-zinc-200">12,405</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-3 flex items-center gap-3">
<div className="p-2 bg-emerald-500/10 rounded-md border border-emerald-500/20">
<svg className="lucide lucide-eye w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                Items on Display
              </div>
<div className="text-lg font-semibold text-zinc-200">845</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-3 flex items-center gap-3">
<div className="p-2 bg-amber-500/10 rounded-md border border-amber-500/20">
<svg className="lucide lucide-file-clock w-4 h-4 text-amber-400" data-lucide="file-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M8 14v2.2l1.6 1"></path>
<circle cx="8" cy="16" r="6"></circle>
</svg>
</div>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                Pending Accessions
              </div>
<div className="text-lg font-semibold text-zinc-200">14</div>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg p-3 flex items-center gap-3">
<div className="p-2 bg-blue-500/10 rounded-md border border-blue-500/20">
<svg className="lucide lucide-arrow-left-right w-4 h-4 text-blue-400" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
</div>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">
                Active Loans
              </div>
<div className="text-lg font-semibold text-zinc-200">8</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto scroll-smooth page-overview pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xs font-semibold text-zinc-400 mb-4 uppercase tracking-wider">
          Departments &amp; Collections
        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-6">

<div className="hover-trigger group relative bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-indigo-500/30 hover:ring-1 hover:ring-indigo-500/30 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-indigo-900/10 animate-enter" onclick="openCollectionDetails()" style={{animationDelay: '0ms'}}>
<div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
<span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Open Collection
                </span>
</div>
<div className="absolute top-2 right-2 z-20 flex flex-col gap-2 hover-target">
<button className="w-8 h-8 bg-zinc-950/80 backdrop-blur-md rounded-lg flex items-center justify-center text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all shadow-lg" onclick="event.stopPropagation(); alert('Opening collection settings...')">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>

<div className="absolute top-2 left-2 z-20">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-950/90 backdrop-blur-md rounded-md border border-zinc-800/50 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[10px] font-medium text-zinc-300">
                    Active Dept
                  </span>
</div>
</div>

<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="text-sm font-semibold text-white tracking-tight leading-snug drop-shadow-md">
                  Greco-Roman Antiquities
                </h3>
<p className="text-[11px] text-zinc-300 truncate opacity-90">
                  Curator: Dr. E. Vance
                </p>
</div>
</div>
<div className="p-3 bg-zinc-900/20">
<div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px]">
<div className="group/item">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Cataloged Items
                  </span>
<span className="text-zinc-300 font-medium group-hover/item:text-indigo-400 transition-colors flex items-center gap-1">
                    4,520
                  </span>
</div>
<div className="text-right">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Pending Accessions
                  </span>
<span className="font-mono text-zinc-400">2 Items</span>
</div>
<div>
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Storage
                  </span>
<span className="text-zinc-400 flex items-center gap-1 truncate">
<svg className="lucide lucide-server w-3 h-3 text-zinc-600" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
                    Zone A &amp; B
                  </span>
</div>
<div className="text-right">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Valuation
                  </span>
<span className="text-zinc-300">$12.4M</span>
</div>
</div>
</div>
</div>

<div className="hover-trigger group relative bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-blue-500/30 hover:ring-1 hover:ring-blue-500/30 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 animate-enter" onclick="const p=document.querySelector('aside.w-96');if(p){p.classList.remove('hidden','2xl:flex');p.classList.add('flex','fixed','right-0','top-0','h-full','z-50','shadow-2xl')}" style={{animationDelay: '100ms'}}>
<div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out will-change-transform opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 pointer-events-none">
<span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-3 py-1.5 rounded-full border border-white/10 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </span>
</div>
<div className="absolute top-2 right-2 z-20 flex flex-col gap-2 hover-target">
<button className="w-8 h-8 bg-zinc-950/80 backdrop-blur-md rounded-lg flex items-center justify-center text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-all shadow-lg" onclick="event.stopPropagation(); alert('Opening collection settings...')">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>

<div className="absolute top-2 left-2 z-20">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-950/90 backdrop-blur-md rounded-md border border-blue-500/30 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-[10px] font-medium text-blue-300">
                    Loans Active
                  </span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="text-sm font-semibold text-white tracking-tight leading-snug drop-shadow-md">
                  Modern &amp; Contemporary
                </h3>
<p className="text-[11px] text-zinc-300 truncate opacity-90">
                  Curator: S. Connors
                </p>
</div>
</div>
<div className="p-3 bg-zinc-900/20">
<div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px]">
<div className="group/item">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Cataloged Items
                  </span>
<span className="text-zinc-300 font-medium group-hover/item:text-blue-400 transition-colors flex items-center gap-1">
                    1,890
                  </span>
</div>
<div className="text-right">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Loans Out
                  </span>
<span className="font-mono text-zinc-400">6 Items</span>
</div>
<div className="">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Storage
                  </span>
<span className="text-zinc-400 flex items-center gap-1 truncate">
<svg className="lucide lucide-server w-3 h-3 text-zinc-600" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
                    Zone C
                  </span>
</div>
<div className="text-right">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Valuation
                  </span>
<span className="text-zinc-300">$22.1M</span>
</div>
</div>
</div>
</div>

<div className="hover-trigger group relative bg-zinc-900/40 border border-dashed border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-500 transition-all duration-300 flex flex-col cursor-pointer hover:bg-zinc-900/60 animate-enter" onclick="alert('Starting Exhibition Proposal...')" style={{animationDelay: '200ms'}}>

<div className="relative aspect-[4/3] flex items-center justify-center flex-col gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-presentation w-6 h-6 text-zinc-400 group-hover:text-zinc-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
</div>
<div className="text-center">
<h3 className="text-sm font-medium text-zinc-300">
                  New Exhibition
                </h3>
<p className="text-[11px] text-zinc-500">Draft a proposal</p>
</div>
</div>
<div className="p-3 border-t border-zinc-800/60 bg-zinc-900/10">
<div className="text-[10px] text-center text-zinc-500">
                Curatorial Team
              </div>
</div>
</div>
<div className="hover-trigger group relative bg-zinc-900/40 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-amber-500/30 hover:ring-1 hover:ring-amber-500/30 transition-all duration-300 flex flex-col cursor-pointer shadow-lg animate-enter" onclick="const p=document.querySelector('aside.w-96');if(p){p.classList.remove('hidden','2xl:flex');p.classList.add('flex','fixed','right-0','top-0','h-full','z-50','shadow-2xl')}" style={{animationDelay: '300ms'}}>

<div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
<svg className="lucide lucide-file-box w-10 h-10 text-zinc-800" data-lucide="file-box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M11.7 14.2 7 17l-4.7-2.8"></path>
<path d="M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z"></path>
<path d="M7 17v5"></path>
</svg>
</div>
<div className="absolute top-2 left-2 z-20">
<div className="flex items-center gap-1.5 px-2 py-1 bg-zinc-900/90 backdrop-blur-md rounded-md border border-amber-500/30 shadow-sm text-amber-500">
<svg className="lucide lucide-scan-barcode w-3 h-3" data-lucide="scan-barcode" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
<path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
<path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
<path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
<path d="M8 7v10"></path>
<path d="M12 7v10"></path>
<path d="M17 7v10"></path>
</svg>
<span className="text-[10px] font-medium">Draft Accession</span>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 z-20">
<h3 className="text-sm font-medium text-white tracking-tight leading-snug">
                  Est. 19th C. Ceramics
                </h3>
<p className="text-[11px] text-zinc-500 truncate">
                  Import batch #4402 • 12 Items
                </p>
</div>
</div>
<div className="p-3 bg-zinc-900/20">
<div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[10px]">
<div className="group/item">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Source
                  </span>
<span className="text-zinc-400 group-hover/item:text-indigo-400 transition-colors flex items-center gap-1">
                    Donation
                  </span>
</div>
<div className="text-right">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Workflow
                  </span>
<span className="font-mono text-zinc-500 bg-amber-900/10 text-amber-500 px-1 py-0.5 rounded border border-amber-900/30">
                    Step 2/5
                  </span>
</div>
<div className="">
<span className="block text-zinc-600 uppercase tracking-widest text-[9px] mb-0.5">
                    Assigned To
                  </span>
<span className="text-zinc-400 flex items-center gap-1 truncate">
                    J. Smith
                  </span>
</div>
</div>
</div>
</div>
</div>

</div>

<div className="page-content hidden flex-1 flex flex-col overflow-hidden h-full" id="page-collection-details">

<div className="h-48 md:h-64 relative shrink-0">
<div className="absolute inset-0 bg-zinc-900">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="flex items-center gap-2 mb-2">
<button className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 bg-black/40 backdrop-blur px-2 py-1 rounded transition-colors" onclick="document.querySelector('.nav-item[data-target=\'overview\']').click()">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
                            Back to Overview
                         </button>
<span className="text-zinc-500 text-xs">•</span>
<span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded font-medium">Active Collection</span>
</div>
<h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-lg mb-1">Greco-Roman Antiquities</h1>
<p className="text-sm text-zinc-300 max-w-2xl drop-shadow-md">
                        A comprehensive assembly of artifacts spanning from the Archaic period through the late Roman Empire, focusing on ceramics, sculpture, and metalwork.
                    </p>
</div>
<div className="flex gap-3">
<button className="bg-white text-zinc-950 px-4 py-2 rounded-md text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-lg">
                        Edit Details
                    </button>
<button className="bg-zinc-800/80 backdrop-blur text-white px-4 py-2 rounded-md text-sm font-medium border border-zinc-700 hover:bg-zinc-700 transition-colors">
                        Generate Report
                    </button>
</div>
</div>
</div>

<div className="border-b border-zinc-800/60 bg-zinc-950 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">Total Items</div>
<div className="text-xl font-bold text-zinc-200">4,520</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">Valuation</div>
<div className="text-xl font-bold text-zinc-200">$12,405,000</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">On Display</div>
<div className="text-xl font-bold text-zinc-200 flex items-center gap-2">
                    1,240 
                    <span className="text-xs font-normal text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">27%</span>
</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-1">Acquisitions (YTD)</div>
<div className="text-xl font-bold text-emerald-400">+12</div>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-80 border-r border-zinc-800/60 bg-zinc-950 p-6 overflow-y-auto hidden lg:block shrink-0">
<div className="space-y-8">
<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Curatorial Team</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full border border-zinc-700" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=48&amp;h=48&amp;q=80"/>
<div>
<div className="text-sm text-zinc-200 font-medium">Dr. E. Vance</div>
<div className="text-xs text-zinc-500">Lead Curator</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400 border border-zinc-700">MR</div>
<div>
<div className="text-sm text-zinc-300">M. Russo</div>
<div className="text-xs text-zinc-500">Conservator</div>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Storage Locations</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
<span className="text-zinc-400">Vault A (Secure)</span>
<span className="text-zinc-200 font-mono">1,850</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
<span className="text-zinc-400">Gallery 3</span>
<span className="text-zinc-200 font-mono">420</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-zinc-800/60">
<span className="text-zinc-400">Off-site</span>
<span className="text-zinc-200 font-mono">15</span>
</div>
</div>
</div>
<div className="p-4 bg-indigo-500/5 border border-indigo-500/20 rounded-lg">
<h4 className="text-xs font-semibold text-indigo-300 mb-2">Conservation Alert</h4>
<p className="text-xs text-indigo-200/70 mb-3">3 objects from this collection are currently flagged for urgent humidity review.</p>
<button className="text-xs bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 px-2 py-1.5 rounded transition-colors w-full border border-indigo-500/30">View Reports</button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-zinc-900/10">
<div className="border-b border-zinc-800/60 px-6">
<div className="flex gap-6">
<button className="py-3 text-sm font-medium text-white border-b-2 border-indigo-500">Objects</button>
<button className="py-3 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">Incoming Loans</button>
<button className="py-3 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">Exhibitions</button>
<button className="py-3 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors">History</button>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-6">

<div className="flex justify-between items-center mb-6">
<div className="relative">
<svg className="absolute left-2.5 top-2.5 text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="pl-8 pr-3 py-2 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 w-64" placeholder="Filter this collection..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-300 hover:text-white">Sort: Date Acquired</button>
<button className="px-3 py-2 bg-zinc-900 border border-zinc-800 rounded text-xs text-zinc-300 hover:text-white">View: Grid</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">

<div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer">
<div className="aspect-square bg-zinc-950 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute top-2 right-2">
<span className="px-1.5 py-0.5 rounded bg-black/60 text-[9px] text-white border border-white/10">Verified</span>
</div>
</div>
<div className="p-3">
<h4 className="text-xs font-medium text-zinc-200 truncate">Amphora, Attic Black</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-2">GR-2024.045</p>
<div className="flex justify-between items-center text-[10px] text-zinc-400">
<span>Gallery 3</span>
<span>Pottery</span>
</div>
</div>
</div>

<div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer">
<div className="aspect-square bg-zinc-950 relative flex items-center justify-center">
<svg className="text-zinc-700 group-hover:text-zinc-500" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="2" x2="22" y1="2" y2="22"></line>
<path d="M10.41 6.41C11.39 5.56 12.67 5.03 14 5c3.31 0 6 2.69 6 6 0 1.33-.53 2.61-1.39 3.59"></path>
</svg>
<div className="absolute top-2 right-2">
<span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-[9px] text-amber-500 border border-amber-500/30">Needs Review</span>
</div>
</div>
<div className="p-3">
<h4 className="text-xs font-medium text-zinc-200 truncate">Iron Age Dagger</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-2">GR-1998.12</p>
<div className="flex justify-between items-center text-[10px] text-zinc-400">
<span>Storage</span>
<span>Metal</span>
</div>
</div>
</div>

<div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer">
<div className="aspect-square bg-zinc-950 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 text-xs">No Image</div>
<div className="absolute top-2 right-2">
<span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-[9px] text-blue-400 border border-blue-500/30">Loaned</span>
</div>
</div>
<div className="p-3">
<h4 className="text-xs font-medium text-zinc-200 truncate">Marble Bust (Fragment)</h4>
<p className="text-[10px] text-zinc-500 font-mono mb-2">GR-2001.55</p>
<div className="flex justify-between items-center text-[10px] text-zinc-400">
<span>The Met (NY)</span>
<span>Sculpture</span>
</div>
</div>
</div>

<div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer opacity-40 hover:opacity-100">
<div className="aspect-square bg-zinc-950"></div>
<div className="p-3 space-y-2">
<div className="h-3 bg-zinc-800 rounded w-3/4"></div>
<div className="h-2 bg-zinc-800 rounded w-1/2"></div>
</div>
</div>
<div className="group bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all cursor-pointer opacity-40 hover:opacity-100">
<div className="aspect-square bg-zinc-950"></div>
<div className="p-3 space-y-2">
<div className="h-3 bg-zinc-800 rounded w-3/4"></div>
<div className="h-2 bg-zinc-800 rounded w-1/2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-content hidden flex-1 flex flex-col overflow-hidden h-full" id="page-catalog">

<div className="flex flex-col h-full">
<div className="flex flex-col border-b border-zinc-800/60 bg-zinc-900/20 backdrop-blur-sm z-20">

<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<h2 className="text-lg font-semibold text-zinc-200 tracking-tight">
                  Object Catalog
                </h2>


</div>

</div>
</div>
<div className="flex-1 overflow-hidden relative bg-zinc-900/10">
<div className="absolute inset-0 flex items-center justify-center text-zinc-500">Catalog Content Loaded</div>
</div>
</div>
</div>

<div className="page-content hidden" id="page-assets"></div>
<div className="page-content hidden flex-1 flex flex-col overflow-hidden h-full" id="page-settings">

<div className="flex h-full bg-zinc-950">
<div className="w-64 border-r border-zinc-800/60 p-4 space-y-6 overflow-y-auto md:block">

</div>

</div>
</div>

</main>

<aside className="w-96 border-l border-zinc-800/60 bg-zinc-950 flex flex-col h-full hidden 2xl:flex shrink-0 z-30 shadow-xl">

<div className="flex h-14 border-zinc-800/60 border-b pr-5 pl-5 items-center justify-between">
<span className="text-xs font-medium text-zinc-200">Department Details</span>
<button className="text-zinc-500 hover:text-white" onclick="document.querySelector('aside.w-96').classList.add('hidden')"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar p-5">
<div className="text-center text-zinc-500 mt-10">Select an item to view details</div>
</div>
</aside>


    </>
  );
}
