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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Sidebar Toggle Logic
        let isSidebarOpen = false;
        
        function toggleSidebar() {
            isSidebarOpen = !isSidebarOpen;
            
            const sidebar = document.getElementById('app-sidebar');
            const toggleIcon = document.getElementById('sidebar-toggle-icon');
            const sidebarTexts = document.querySelectorAll('.sidebar-text');
            const navBtns = document.querySelectorAll('.nav-btn');
            const navContainer = document.getElementById('nav-container');
            const btnNew = document.getElementById('btn-new');
            const tagsContainer = document.getElementById('tags-container');
            const profileContainer = document.getElementById('profile-container');
            const btnProfile = document.getElementById('btn-profile');
            const themeDivider = document.getElementById('theme-divider');

            if (isSidebarOpen) {
                // Expanding logic
                sidebar.classList.remove('w-[72px]', 'items-center', 'px-2');
                sidebar.classList.add('w-[240px]', 'items-stretch', 'px-4');
                toggleIcon.setAttribute('icon', 'solar:alt-arrow-left-linear');
                
                navContainer.classList.remove('items-center');
                navContainer.classList.add('items-stretch');

                btnNew.classList.remove('w-10', 'h-10', 'justify-center', 'px-0');
                btnNew.classList.add('w-full', 'py-2', 'px-4', 'justify-start');

                navBtns.forEach(btn => {
                    btn.classList.remove('w-10', 'h-10', 'justify-center', 'px-0');
                    btn.classList.add('w-full', 'py-2', 'px-3', 'justify-start');
                });

                tagsContainer.classList.remove('hidden');
                tagsContainer.classList.add('flex');

                profileContainer.classList.remove('justify-center');
                profileContainer.classList.add('justify-start');

                btnProfile.classList.remove('w-10', 'h-10', 'justify-center', 'px-0', 'py-0');
                btnProfile.classList.add('w-full', 'px-2', 'py-2', 'justify-start');

                themeDivider.classList.remove('justify-center');
                themeDivider.classList.add('justify-start');

                setTimeout(() => {
                    sidebarTexts.forEach(el => el.classList.remove('hidden'));
                }, 150);

            } else {
                // Collapsing logic
                sidebarTexts.forEach(el => el.classList.add('hidden'));
                
                sidebar.classList.remove('w-[240px]', 'items-stretch', 'px-4');
                sidebar.classList.add('w-[72px]', 'items-center', 'px-2');
                toggleIcon.setAttribute('icon', 'solar:alt-arrow-right-linear');

                navContainer.classList.remove('items-stretch');
                navContainer.classList.add('items-center');

                btnNew.classList.remove('w-full', 'py-2', 'px-4', 'justify-start');
                btnNew.classList.add('w-10', 'h-10', 'justify-center', 'px-0');

                navBtns.forEach(btn => {
                    btn.classList.remove('w-full', 'py-2', 'px-3', 'justify-start');
                    btn.classList.add('w-10', 'h-10', 'justify-center', 'px-0');
                });

                tagsContainer.classList.remove('flex');
                tagsContainer.classList.add('hidden');

                profileContainer.classList.remove('justify-start');
                profileContainer.classList.add('justify-center');

                btnProfile.classList.remove('w-full', 'px-2', 'py-2', 'justify-start');
                btnProfile.classList.add('w-10', 'h-10', 'justify-center', 'px-0', 'py-0');

                themeDivider.classList.remove('justify-start');
                themeDivider.classList.add('justify-center');
            }
        }

        // Theme Toggle Logic (Preserving original CSS by creatively using invert)
        let isLightMode = false;
        function toggleTheme() {
            isLightMode = !isLightMode;
            const themeIcon = document.getElementById('theme-icon');
            const themeText = document.getElementById('theme-text');
            
            if (isLightMode) {
                themeIcon.setAttribute('icon', 'solar:moon-linear');
                themeText.innerText = "Dark Mode";
                // Clever filter trick to invert colors while keeping exact same hues (indigos, purples)
                document.body.style.filter = 'invert(1) hue-rotate(180deg)';
                document.body.style.backgroundColor = '#030305'; // anchors the background safely
            } else {
                themeIcon.setAttribute('icon', 'solar:sun-linear');
                themeText.innerText = "Light Mode";
                document.body.style.filter = 'none';
                document.body.style.backgroundColor = '';
            }
        }

        // View Toggling Scripts
        const viewGrid = document.getElementById('view-grid');
        const viewDetail = document.getElementById('view-detail');
        const pageTitle = document.getElementById('page-title');
        const detailTitle = document.getElementById('detail-title');

        function resetNav() {
            const btns = [document.getElementById('tab-my-snippets'), document.getElementById('tab-discover')];
            btns.forEach(btn => {
                btn.classList.remove('bg-white/[0.06]', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
                btn.classList.add('text-gray-400', 'hover:bg-white/[0.04]', 'hover:text-white');
                const icon = btn.querySelector('.icon');
                if(icon) {
                    icon.classList.remove('text-indigo-400');
                    icon.classList.add('text-gray-500');
                }
            });
        }

        function setActiveNav(elementId, iconColor) {
            const el = document.getElementById(elementId);
            el.classList.add('bg-white/[0.06]', 'text-white', 'shadow-sm', 'ring-1', 'ring-white/5');
            el.classList.remove('text-gray-400', 'hover:bg-white/[0.04]', 'hover:text-white');
            const icon = el.querySelector('.icon');
            if(icon) {
                icon.classList.add(iconColor);
                icon.classList.remove('text-gray-500');
            }
        }

        function switchTab(tab) {
            closeDetail();
            resetNav();
            
            if (tab === 'my-snippets') {
                pageTitle.innerText = "My Snippets";
                setActiveNav('tab-my-snippets', 'text-indigo-400');
            } else {
                pageTitle.innerText = "Discover Blocks";
                setActiveNav('tab-discover', 'text-indigo-400');
            }
        }

        function openDetail(title) {
            detailTitle.innerText = title;
            viewGrid.classList.add('hidden');
            viewDetail.classList.remove('hidden');
            viewDetail.classList.add('flex');
        }

        function closeDetail() {
            viewDetail.classList.add('hidden');
            viewDetail.classList.remove('flex');
            viewGrid.classList.remove('hidden');
        }
    
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
      

<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none"></div>

<div className="flex h-full w-full p-4 gap-4 z-10 relative max-w-[1920px] mx-auto">

<aside className="w-[72px] hidden md:flex flex-shrink-0 bg-white/[0.02] border border-white/[0.04] rounded-2xl backdrop-blur-xl flex-col items-center px-2 py-4 shadow-2xl shadow-black/50 transition-all duration-300 relative z-50" id="app-sidebar">

<button className="absolute -right-3 top-8 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/20 z-50 ring-4 ring-[#030305]" onclick="toggleSidebar()">
<iconify-icon icon="solar:alt-arrow-right-linear" id="sidebar-toggle-icon" strokeWidth="2" width="14"></iconify-icon>
</button>

<div className="flex items-center justify-center gap-0 w-full mb-8 mt-2 transition-all">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 flex-shrink-0">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="sidebar-text hidden text-xl font-semibold tracking-tight text-white tracking-widest uppercase ml-3">SNPT</span>
</div>

<button className="w-10 h-10 px-0 bg-white text-black hover:bg-gray-100 font-medium rounded-xl flex items-center justify-center gap-0 text-sm transition-all duration-200 mb-6 shadow-sm flex-shrink-0" id="btn-new">
<iconify-icon icon="solar:add-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="sidebar-text hidden ml-2 whitespace-nowrap">New Snippet</span>
</button>

<nav className="flex flex-col gap-2 w-full flex-1 items-center" id="nav-container">
<div className="sidebar-text hidden w-full text-xs font-medium text-gray-500 uppercase tracking-widest mb-1 px-2 mt-2 whitespace-nowrap">Library</div>
<button className="nav-btn w-10 h-10 flex items-center justify-center px-0 gap-0 rounded-xl text-gray-400 font-medium text-sm transition-colors hover:bg-white/[0.04] hover:text-white group flex-shrink-0" id="tab-my-snippets" onclick="switchTab('my-snippets')">
<iconify-icon className="icon text-gray-500 group-hover:text-white transition-colors" icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="sidebar-text hidden ml-3 whitespace-nowrap">My Snippets</span>
</button>
<button className="nav-btn w-10 h-10 flex items-center justify-center px-0 gap-0 rounded-xl bg-white/[0.06] text-white font-medium text-sm transition-colors shadow-sm ring-1 ring-white/5 group flex-shrink-0" id="tab-discover" onclick="switchTab('discover')">
<iconify-icon className="icon text-indigo-400" icon="solar:compass-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="sidebar-text hidden ml-3 whitespace-nowrap">Discover</span>
</button>
<button className="nav-btn w-10 h-10 flex items-center justify-center px-0 gap-0 rounded-xl text-gray-400 font-medium text-sm transition-colors hover:bg-white/[0.04] hover:text-white group flex-shrink-0">
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="sidebar-text hidden ml-3 whitespace-nowrap">Favorites</span>
</button>

<div className="w-full mt-2 pt-2 border-t border-white/[0.05] flex justify-center transition-all" id="theme-divider">
<button className="nav-btn w-10 h-10 flex items-center justify-center px-0 gap-0 rounded-xl text-gray-400 font-medium text-sm transition-colors hover:bg-white/[0.04] hover:text-white group flex-shrink-0 relative" onclick="toggleTheme()">
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="solar:sun-linear" id="theme-icon" strokeWidth="1.5" width="20"></iconify-icon>
<span className="sidebar-text hidden ml-3 whitespace-nowrap" id="theme-text">Light Mode</span>
</button>
</div>
<div className="sidebar-text hidden w-full text-xs font-medium text-gray-500 uppercase tracking-widest mb-1 px-2 mt-4 whitespace-nowrap">Tags</div>
<div className="hidden w-full flex-col gap-1" id="tags-container">
<a className="flex items-center justify-between px-3 py-1.5 rounded-lg text-gray-400 text-sm hover:text-white transition-colors" href="#">
<span className="flex items-center gap-2 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-orange-400/80"></span> UI Components</span>
<span className="text-xs text-gray-600">24</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 rounded-lg text-gray-400 text-sm hover:text-white transition-colors" href="#">
<span className="flex items-center gap-2 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-blue-400/80"></span> React Hooks</span>
<span className="text-xs text-gray-600">12</span>
</a>
</div>
</nav>

<div className="mt-auto pt-4 border-t border-white/[0.05] w-full flex justify-center transition-all" id="profile-container">
<button className="flex items-center justify-center gap-0 w-10 h-10 px-0 py-0 rounded-xl hover:bg-white/[0.04] transition-colors group" id="btn-profile">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white ring-1 ring-white/20 flex-shrink-0">
                        JD
                    </div>
<div className="sidebar-text hidden flex-1 text-left ml-3">
<div className="text-sm font-medium text-white group-hover:text-indigo-400 transition-colors whitespace-nowrap">John Doe</div>
<div className="text-xs text-gray-500 whitespace-nowrap">Pro Plan</div>
</div>
<iconify-icon className="sidebar-text hidden text-gray-500 group-hover:text-white ml-2" icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 bg-white/[0.02] border border-white/[0.04] rounded-2xl backdrop-blur-xl flex flex-col shadow-2xl shadow-black/50 overflow-hidden relative min-w-0">

<div className="flex flex-col h-full overflow-y-auto" id="view-grid" style={{scrollbarWidth: 'none'}}>

<div className="p-6 lg:p-10 pb-6 border-b border-white/[0.04] sticky top-0 bg-[#060608]/80 backdrop-blur-xl z-20">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
<h1 className="text-2xl font-semibold tracking-tight text-white" id="page-title">Discover Blocks</h1>

<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative flex items-center w-full md:w-[300px]">
<iconify-icon className="absolute left-3 text-gray-500" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-black/40 border border-white/[0.06] rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder-gray-500 shadow-inner" placeholder="Search components, hooks..." type="text"/>
</div>
</div>
</div>

<div className="flex gap-2 overflow-x-auto pb-1" style={{scrollbarWidth: 'none'}}>
<button className="px-4 py-1.5 text-xs font-medium rounded-full bg-white text-black whitespace-nowrap shadow-sm">All</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.05] whitespace-nowrap transition-colors">UI Cards</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.05] whitespace-nowrap transition-colors">Forms</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.05] whitespace-nowrap transition-colors">Navbars</button>
<button className="px-4 py-1.5 text-xs font-medium rounded-full bg-white/[0.05] text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.05] whitespace-nowrap transition-colors">Authentication</button>
</div>
</div>

<div className="p-6 lg:p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

<div className="group cursor-pointer rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] transition-all p-3 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-black/20" onclick="openDetail('Glassmorphic Login')">

<div className="h-40 rounded-xl bg-black/20 border border-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition-colors" style={{backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '16px 16px'}}>

<div className="w-3/5 h-2/3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg flex flex-col gap-2 p-3 shadow-lg">
<div className="w-1/2 h-2 bg-white/20 rounded-full mx-auto mb-2"></div>
<div className="w-full h-3 bg-black/40 rounded border border-white/5"></div>
<div className="w-full h-3 bg-black/40 rounded border border-white/5"></div>
<div className="w-full h-4 bg-white/90 rounded mt-auto"></div>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-white tracking-tight group-hover:text-indigo-400 transition-colors">Glassmorphic Login</h3>
<iconify-icon className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-gray-500">HTML / Tailwind CSS</p>
</div>
</div>

<div className="group cursor-pointer rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] transition-all p-3 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-black/20" onclick="openDetail('Stripe Pricing Table')">
<div className="h-40 rounded-xl bg-black/20 border border-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition-colors" style={{backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '16px 16px'}}>
<div className="flex gap-2 h-2/3 w-3/4">
<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg mt-4"></div>
<div className="flex-1 bg-indigo-500/10 border border-indigo-500/30 rounded-lg mb-4 shadow-lg shadow-indigo-500/10"></div>
<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg mt-4"></div>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-white tracking-tight group-hover:text-indigo-400 transition-colors">Stripe Pricing Table</h3>
<iconify-icon className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-gray-500">React / Framer Motion</p>
</div>
</div>

<div className="group cursor-pointer rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] transition-all p-3 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-black/20" onclick="openDetail('Animated Command Palette')">
<div className="h-40 rounded-xl bg-black/20 border border-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition-colors" style={{backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '16px 16px'}}>
<div className="w-3/4 h-1/2 bg-white/[0.05] border border-white/10 rounded-lg shadow-2xl flex flex-col overflow-hidden">
<div className="h-6 border-b border-white/5 flex items-center px-2">
<div className="w-4 h-4 rounded bg-white/10"></div>
<div className="w-1/2 h-1.5 bg-white/20 rounded-full ml-2"></div>
</div>
<div className="flex-1 p-2 flex flex-col gap-1">
<div className="w-full h-2 bg-white/5 rounded-full"></div>
<div className="w-3/4 h-2 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-white tracking-tight group-hover:text-indigo-400 transition-colors">Command Palette</h3>
<iconify-icon className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-gray-500">Vue / Tailwind CSS</p>
</div>
</div>

<div className="group cursor-pointer rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.04] transition-all p-3 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:shadow-black/20" onclick="openDetail('Subtle Hover Cards')">
<div className="h-40 rounded-xl bg-black/20 border border-white/[0.02] flex items-center justify-center relative overflow-hidden group-hover:border-indigo-500/30 transition-colors" style={{backgroundImage: 'radial-gradient(#ffffff10 1px, transparent 1px)', backgroundSize: '16px 16px'}}>
<div className="grid grid-cols-2 gap-2 w-3/4 h-2/3">
<div className="bg-white/[0.02] border border-white/5 rounded-lg"></div>
<div className="bg-white/[0.05] border border-white/20 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-8 h-8 bg-white/20 blur-xl rounded-full"></div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-lg"></div>
<div className="bg-white/[0.02] border border-white/5 rounded-lg"></div>
</div>
</div>
<div className="px-1 pb-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-sm font-medium text-white tracking-tight group-hover:text-indigo-400 transition-colors">Subtle Hover Cards</h3>
<iconify-icon className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-gray-500">CSS / JavaScript</p>
</div>
</div>
</div>
</div>

<div className="hidden flex-col h-full bg-[#060608]" id="view-detail">

<header className="flex items-center justify-between p-4 border-b border-white/[0.04] bg-white/[0.01] flex-shrink-0 z-20">
<div className="flex items-center gap-4">
<button className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/[0.05]" onclick="closeDetail()">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<div className="flex flex-col">
<h2 className="text-base font-semibold text-white tracking-tight leading-tight" id="detail-title">Glassmorphic Login</h2>
<span className="text-xs text-gray-500">HTML / Tailwind CSS</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white text-xs font-medium transition-colors border border-white/[0.05]">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Copy Code
                        </button>
<button className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-500/20">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Save
                        </button>
</div>
</header>

<div className="flex flex-col lg:flex-row flex-1 overflow-hidden">

<div className="w-full lg:w-3/5 h-[50vh] lg:h-full relative flex items-center justify-center p-8 bg-black/20 border-b lg:border-b-0 lg:border-r border-white/[0.04] overflow-y-auto" style={{backgroundImage: 'radial-gradient(#ffffff15 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="relative z-10 w-full max-w-sm p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[24px] pointer-events-none"></div>
<div className="text-center mb-8 relative z-10">
<h4 className="text-2xl font-semibold text-white tracking-tight mb-2">Welcome back</h4>
<p className="text-sm text-gray-400">Enter your details to access your account.</p>
</div>
<form className="flex flex-col gap-4 relative z-10" onsubmit="event.preventDefault();">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-400 ml-1">Email address</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400/50 focus:bg-black/60 transition-all placeholder-gray-600" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center ml-1">
<label className="text-xs font-medium text-gray-400">Password</label>
<a className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors" href="#">Forgot?</a>
</div>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-400/50 focus:bg-black/60 transition-all placeholder-gray-600" placeholder="••••••••" type="password"/>
</div>
<label className="flex items-center gap-3 mt-1 cursor-pointer group">
<div className="relative w-4 h-4 rounded border border-white/20 bg-black/40 group-hover:border-indigo-400/50 transition-colors flex items-center justify-center">
<iconify-icon className="text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-gray-400 select-none">Remember me for 30 days</span>
</label>
<button className="w-full bg-white text-black font-medium text-sm py-3 rounded-xl mt-4 hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
                                    Sign In
                                </button>
</form>
</div>

<div className="absolute top-[20%] right-[20%] w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none z-0"></div>
</div>

<div className="w-full lg:w-2/5 h-[50vh] lg:h-full bg-[#0a0a0c] flex flex-col relative">
<div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/[0.02]">
<div className="flex gap-4">
<button className="text-xs font-medium text-white border-b-2 border-indigo-500 pb-2 -mb-3 px-1">index.html</button>
<button className="text-xs font-medium text-gray-500 hover:text-gray-300 pb-2 -mb-3 px-1 transition-colors">tailwind.config.js</button>
</div>
</div>
<div className="flex-1 overflow-auto p-4 lg:p-6" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent'}}>
<pre className="font-mono text-xs sm:text-sm leading-loose" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span style={{color: '#6b7280'}}>&lt;!-- Glassmorphic Login Container --&gt;</span>
<span style={{color: '#f7768e'}}>&lt;div</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"w-full max-w-sm p-8 rounded-[24px] bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08]"</span><span style={{color: '#f7768e'}}>&gt;</span>
  
  <span style={{color: '#f7768e'}}>&lt;div</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"text-center mb-8"</span><span style={{color: '#f7768e'}}>&gt;</span>
    <span style={{color: '#f7768e'}}>&lt;h4</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"text-2xl font-semibold text-white tracking-tight"</span><span style={{color: '#f7768e'}}>&gt;</span>
      Welcome back
    <span style={{color: '#f7768e'}}>&lt;/h4&gt;</span>
    <span style={{color: '#f7768e'}}>&lt;p</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"text-sm text-gray-400"</span><span style={{color: '#f7768e'}}>&gt;</span>
      Enter your details to access your account.
    <span style={{color: '#f7768e'}}>&lt;/p&gt;</span>
  <span style={{color: '#f7768e'}}>&lt;/div&gt;</span>

  <span style={{color: '#f7768e'}}>&lt;form</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"flex flex-col gap-4"</span><span style={{color: '#f7768e'}}>&gt;</span>
    <span style={{color: '#f7768e'}}>&lt;div&gt;</span>
      <span style={{color: '#f7768e'}}>&lt;label</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"text-xs font-medium text-gray-400"</span><span style={{color: '#f7768e'}}>&gt;</span>Email address<span style={{color: '#f7768e'}}>&lt;/label&gt;</span>
      <span style={{color: '#f7768e'}}>&lt;input</span> 
        <span style={{color: '#7dcfff'}}>type=</span><span style={{color: '#9ece6a'}}>"email"</span> 
        <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3"</span> 
      <span style={{color: '#f7768e'}}>/&gt;</span>
    <span style={{color: '#f7768e'}}>&lt;/div&gt;</span>
    
    <span style={{color: '#6b7280'}}>&lt;!-- More inputs removed for brevity --&gt;</span>
    
    <span style={{color: '#f7768e'}}>&lt;button</span> <span style={{color: '#7dcfff'}}>class=</span><span style={{color: '#9ece6a'}}>"w-full bg-white text-black font-medium text-sm py-3 rounded-xl mt-4"</span><span style={{color: '#f7768e'}}>&gt;</span>
      Sign In
    <span style={{color: '#f7768e'}}>&lt;/button&gt;</span>
  <span style={{color: '#f7768e'}}>&lt;/form&gt;</span>

<span style={{color: '#f7768e'}}>&lt;/div&gt;</span>
</pre>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
