import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function route(pageId) {
          const content = document.getElementById('app-content');
          const template = document.getElementById('view-' + pageId);

          if (template) {
              // Fade out effect
              content.style.opacity = '0';

              setTimeout(() => {
                  content.innerHTML = template.innerHTML;
                  if(typeof lucide !== 'undefined') {
                    lucide.createIcons();
                  }
                  window.scrollTo(0,0);
                  // Fade in
                  content.style.opacity = '1';
                  content.className = "pt-20 pb-20 min-h-screen transition-opacity duration-300";
              }, 150);
          }
      }

      function switchRole(role) {
          const tabs = ['buyer', 'seller'];
          tabs.forEach(t => {
              const tabBtn = document.getElementById('tab-' + t);
              if(tabBtn) {
                  tabBtn.className = "w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all";
                  if(t === role) {
                      tabBtn.className = "w-full text-left px-4 py-2 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white transition-all";
                  }
              }
          });

          const roles = ['role-buyer', 'role-seller'];
          roles.forEach(id => {
             const el = document.getElementById(id);
             if(el) el.classList.add('hidden');
          });
          const activeRole = document.getElementById('role-' + role);
          if(activeRole) {
              activeRole.classList.remove('hidden');
              activeRole.classList.add('fade-in');
          }
      }

      function swapImage(targetId, src) {
          const el = document.getElementById(targetId);
          if(el) {
              el.style.opacity = '0.5';
              setTimeout(() => {
                 el.src = src;
                 el.style.opacity = '1';
              }, 150);
          }
      }

      // Drawer Logic
      function openDrawer() {
          const backdrop = document.getElementById('drawer-backdrop');
          const panel = document.getElementById('drawer-panel');

          backdrop.classList.remove('hidden');
          setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
          panel.classList.remove('translate-x-full');
          document.body.style.overflow = 'hidden';
      }

      function closeDrawer() {
          const backdrop = document.getElementById('drawer-backdrop');
          const panel = document.getElementById('drawer-panel');

          backdrop.classList.add('opacity-0');
          panel.classList.add('translate-x-full');
          document.body.style.overflow = '';

          setTimeout(() => {
              backdrop.classList.add('hidden');
          }, 300);
      }

      function navigateToService() {
          closeDrawer();
          setTimeout(() => {
              route('service');
          }, 200);
      }

      // Dark Mode Logic
      function toggleTheme() {
          const html = document.documentElement;
          if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              localStorage.theme = 'light';
          } else {
              html.classList.add('dark');
              localStorage.theme = 'dark';
          }
      }

      // Check for saved theme preference
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }

      // Command Palette Logic
      function toggleCommandPalette() {
          const el = document.getElementById('command-palette');
          const input = el.querySelector('input');

          if (el.classList.contains('hidden')) {
              el.classList.remove('hidden');
              setTimeout(() => input.focus(), 50);
              document.body.style.overflow = 'hidden';
          } else {
              el.classList.add('hidden');
              document.body.style.overflow = '';
          }
      }

      // Keyboard Shortcut for Command Palette
      document.addEventListener('keydown', (e) => {
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
              e.preventDefault();
              toggleCommandPalette();
          }
          if (e.key === 'Escape') {
              const el = document.getElementById('command-palette');
              if (!el.classList.contains('hidden')) {
                  toggleCommandPalette();
              }
          }
      });

      function handleGlobalClick(event) {
          // Placeholder for filter closing logic if needed
      }

      document.addEventListener('DOMContentLoaded', () => {
          route('home');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-panel">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tight flex items-center gap-2 group" href="#" onclick="route('home')">
<div className="w-6 h-6 bg-zinc-900 dark:bg-white rounded text-white dark:text-black flex items-center justify-center text-[10px] font-bold tracking-tighter group-hover:scale-105 transition-transform duration-300">
              BL
            </div>
<span className="font-semibold text-zinc-900 dark:text-white tracking-tight">
              BRAINLANCERS
            </span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
<a className="text-zinc-900 dark:text-white font-semibold" href="#" onclick="route('home')">
              Marketplace
            </a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
              Talent
            </a>
<a className="hover:text-zinc-900 dark:hover:text-white transition-colors" href="#">
              Community
            </a>
</div>
</div>
<div className="flex items-center gap-3">

<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors border border-transparent dark:border-zinc-800 mr-2 group" onclick="toggleCommandPalette()">
<svg className="lucide lucide-search w-3.5 h-3.5 group-hover:text-zinc-900 dark:group-hover:text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="mr-1">Search...</span>
<kbd className="hidden sm:inline-block border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 px-1.5 rounded text-[10px] leading-none text-zinc-400">⌘K</kbd>
</button>
<button className="md:hidden p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white" onclick="toggleCommandPalette()">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>

<button className="hidden md:flex text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white px-3 py-2 transition-colors">
            Find Experts
          </button>
<button className="hidden md:flex text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors shadow-sm" onclick="switchRole('seller'); route('dashboard')">
            Post a Request
          </button>
<div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 hidden md:block mx-1"></div>

<button className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800" onclick="toggleTheme()">
<svg className="lucide lucide-moon w-5 h-5 hidden dark:block" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg className="lucide lucide-sun w-5 h-5 block dark:hidden" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors" onclick="route('chat')">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
</button>
<button className="flex items-center gap-2 pl-1" onclick="route('dashboard')">
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-white dark:ring-zinc-800 shadow-sm filter hover:brightness-105 transition" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</button>
</div>
</div>
</nav>

<div aria-modal="true" className="fixed inset-0 z-50 hidden" id="command-palette" role="dialog">
<div className="fixed inset-0 bg-zinc-900/20 dark:bg-black/60 backdrop-blur-[2px] transition-opacity" onclick="toggleCommandPalette()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
<div className="mx-auto max-w-xl transform divide-y divide-zinc-100 dark:divide-zinc-800 overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-2xl ring-1 ring-black/5 transition-all cmd-enter border border-zinc-200 dark:border-zinc-800">
<div className="relative">
<svg className="lucide lucide-search pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-zinc-400 dark:text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input aria-controls="options" aria-expanded="false" autofocus="" className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:ring-0 sm:text-sm" placeholder="Search for services, experts, or tags..." role="combobox" type="text"/>
</div>
<ul className="max-h-96 scroll-py-3 overflow-y-auto p-3" id="options">
<li className="group flex cursor-default select-none rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-indigo-50 dark:bg-indigo-900/30 ring-1 ring-indigo-200 dark:ring-indigo-700/30">
<svg className="lucide lucide-sparkles h-5 w-5 text-indigo-600 dark:text-indigo-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="ml-4 flex-auto">
<p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  AI Strategy Consulting
                </p>
<p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Popular in Enterprise
                </p>
</div>
</li>
<li className="group flex cursor-default select-none rounded-xl p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800/50">
<div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/30 ring-1 ring-emerald-200 dark:ring-emerald-700/30">
<svg className="lucide lucide-code-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="ml-4 flex-auto">
<p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  RAG Pipeline Setup
                </p>
<p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Engineering
                </p>
</div>
</li>
</ul>
</div>
</div>
</div>

<main className="pt-20 pb-20 min-h-screen transition-opacity duration-300" id="app-content"></main>

<div className="drawer-backdrop fixed inset-0 bg-zinc-900/10 dark:bg-black/40 backdrop-blur-[2px] z-50 hidden opacity-0 transition-opacity" id="drawer-backdrop" onclick="closeDrawer()"></div>
<div className="drawer-panel fixed inset-y-0 right-0 z-[60] w-full md:w-[600px] bg-white dark:bg-zinc-950 shadow-2xl transform translate-x-full border-l border-zinc-100 dark:border-zinc-800 flex flex-col h-full" id="drawer-panel">

<div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-950 z-10">
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Service Preview
        </h3>
<div className="flex items-center gap-2">
<button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md transition-colors" onclick="navigateToService()">
<svg className="lucide lucide-external-link w-3.5 h-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
            Full Page
          </button>
<button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md transition-colors" onclick="closeDrawer()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-white dark:bg-zinc-950">

<div className="relative w-full aspect-video bg-zinc-50 dark:bg-zinc-900 group">
<img className="w-full h-full object-cover transition-opacity duration-300" id="drawer-main-image" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

<div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-zinc-800 dark:text-zinc-200 tracking-tight flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
               5D Delivery
             </span>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white pointer-events-none">
<div className="flex items-center gap-2">
<span className="bg-white/20 backdrop-blur-md px-2 py-1 rounded text-xs font-medium border border-white/30">
                Architecture
              </span>
<span className="bg-emerald-500/90 backdrop-blur-md px-2 py-1 rounded text-xs font-medium border border-white/20 shadow-sm animate-pulse">
                Available Now
              </span>
</div>
<div className="text-lg font-semibold">$1,250</div>
</div>
</div>
<div className="p-6 md:p-8">

<div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-1">
<button className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 ring-2 ring-zinc-900 dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-zinc-950" onclick="swapImage('drawer-main-image', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</button>
<button className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('drawer-main-image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</button>
<button className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('drawer-main-image', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</button>
<button className="relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('drawer-main-image', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</button>
</div>

<div className="flex items-center gap-3 mb-6">
<div className="relative">
<img className="w-10 h-10 rounded-full border border-zinc-100 dark:border-zinc-800" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-zinc-900 rounded-full"></span>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                Sarah Jenkins
              </div>
<div className="text-xs text-zinc-500 dark:text-zinc-400">
                MLOps Engineer • Top Rated
              </div>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-snug">
            Enterprise RAG Pipeline Architecture &amp; Implementation
          </h2>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-7 mb-8">
            I will architect and deploy a production-ready Retrieval-Augmented
            Generation (RAG) system for your business. This is not a simple
            wrapper—this is a scalable pipeline handling vector embeddings,
            document chunking strategies, and re-ranking for high-precision data
            retrieval.
          </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs">Timeline</span>
</div>
<div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                5-7 Days
              </div>
</div>
<div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
<div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-1">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-xs">Tech Stack</span>
</div>
<div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                LangChain / Pinecone
              </div>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 pb-6 sm:pb-6 flex flex-col gap-3 z-10">
<button className="w-full py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-zinc-200 transition-all shadow-lg hover:shadow-xl transform active:scale-[0.99] flex justify-center items-center gap-2" onclick="route('chat')">
          Consult for $1,250
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>


<template id="view-home">
<div className="fade-in px-4 sm:px-6 relative">

<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
<div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
<div className="py-12 md:py-20 text-center max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-6 animate-pulse">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                  New: Enterprise RAG Systems
                </span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
                Professional AI Services,
                <span className="font-serif italic text-zinc-800 dark:text-zinc-200">
                  Brainlancers
                </span>
                &amp; Ready.
              </h1>
<p className="text-lg text-zinc-500 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl mx-auto">
                The premium marketplace for AI engineering, model fine-tuning, and
                strategic implementation. Connect with verified experts.
              </p>

<div className="max-w-2xl mx-auto text-left relative z-20">
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
<div className="relative bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/40 dark:shadow-black/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden flex items-center p-2 transition-transform duration-300 focus-within:scale-[1.01] focus-within:ring-1 focus-within:ring-zinc-200 dark:focus-within:ring-zinc-700">
<div className="pl-4 text-zinc-400 dark:text-zinc-500">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<input className="w-full h-12 px-4 text-lg bg-transparent outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-300 dark:placeholder:text-zinc-600 font-medium" placeholder="Describe the AI service you need..." type="text"/>
<button className="bg-zinc-900 dark:bg-white hover:bg-black dark:hover:bg-zinc-200 text-white dark:text-black p-3 rounded-xl transition-colors shadow-md">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 z-10 mt-8 relative gap-x-4 gap-y-4 items-center justify-center">
<button className="hidden"></button>
<span className="text-zinc-300 dark:text-zinc-700 text-xs hidden md:block">|</span>
<button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold hover:border-zinc-300 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all shadow-sm group" onclick="switchRole('seller'); route('dashboard')">
<svg className="lucide lucide-briefcase w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                  Post a Request
                </button>
</div>
</div>
<div className="max-w-7xl mx-auto pb-20">

<div className="mb-20">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-serif font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
<svg className="lucide lucide-zap w-5 h-5 text-amber-500 fill-amber-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    Curated Spotlight
                  </h2>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 flex items-center gap-1 transition-colors" href="#">
                    View all featured
                    <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[500px]">

<div className="lg:col-span-2 relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm border border-zinc-200 dark:border-zinc-800" onclick="openDrawer()">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent"></div>

<div className="absolute top-6 right-6 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-white tracking-tight">7D Delivery</span>
</div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                        Editor's Choice
                      </span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="flex items-center gap-3 mb-3 text-white/90">
<img className="w-8 h-8 rounded-full border border-white/30" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<span className="text-sm font-medium">David Chen</span>
<span className="text-zinc-400">•</span>
<span className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                          5.0
                        </span>
</div>
<h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 leading-tight">
                        Llama 3 Fine-Tuning on Proprietary Medical Datasets
                      </h3>
<p className="text-zinc-300 max-w-lg mb-6 line-clamp-2">
                        Complete end-to-end pipeline for adapting open-source large
                        language models to HIPAA-compliant environments.
                      </p>
<div className="flex items-center gap-4">
<span className="text-white font-semibold text-lg">$2,500</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                          Available this week
                        </span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm border border-zinc-200 dark:border-zinc-800" onclick="openDrawer()">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-zinc-900/60 transition-opacity group-hover:bg-zinc-900/50"></div>

<div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-white tracking-tight">2D Delivery</span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-1">
                          Development
                        </div>
<h3 className="text-xl font-medium text-white leading-snug">
                          Custom LangChain Workflows
                        </h3>
<div className="flex items-center justify-between mt-3 border-t border-white/10 pt-3">
<div className="flex items-center gap-2 text-white/80 text-xs">
<img className="w-5 h-5 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
                            Marcus K.
                          </div>
<span className="text-white font-medium">$600+</span>
</div>
</div>
</div>

<div className="flex-1 relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm border border-zinc-200 dark:border-zinc-800" onclick="openDrawer()">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-zinc-900/60 transition-opacity group-hover:bg-zinc-900/50"></div>

<div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-white tracking-tight">4D Delivery</span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="text-xs font-bold text-purple-300 uppercase tracking-wider mb-1">
                          Consulting
                        </div>
<h3 className="text-xl font-medium text-white leading-snug">
                          AI Strategy Roadmap
                        </h3>
<div className="flex items-center justify-between mt-3 border-t border-white/10 pt-3">
<div className="flex items-center gap-2 text-white/80 text-xs">
<img className="w-5 h-5 rounded-full" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=32&amp;h=32"/>
                            Elena M.
                          </div>
<span className="text-white font-medium">$950+</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-20">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-serif font-medium text-zinc-900 dark:text-zinc-100">
                      How Brainlancers Works
                    </h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                       Quick guides to help you navigate our ecosystem.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300">
<div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
<svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white">
                               1:02
                           </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">For Buyers</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                                Learn how to find verified experts, manage milestones, and secure your intellectual property.
                            </p>
</div>
</div>

<div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300">
<div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
<svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white">
                               0:58
                           </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">For Freelancers</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                                A guide to setting up your expert profile, pricing your AI services, and getting paid instantly.
                            </p>
</div>
</div>

<div className="group relative bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300">
<div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
<svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute bottom-3 right-3 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-sm text-[10px] font-bold text-white">
                               1:15
                           </div>
</div>
<div className="p-5">
<h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">For Partners</h3>
<p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                                Join our ecosystem as a referral partner and earn commissions by connecting businesses with top talent.
                            </p>
</div>
</div>
</div>
</div>

<div className="mb-20">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-serif font-medium text-zinc-900 dark:text-zinc-100">
                      Verified Experts
                    </h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Work directly with industry leaders from top tech companies.
                    </p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300 group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=128&amp;h=128"/>
<div className="absolute -bottom-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-1.5 py-0.5 rounded border border-white dark:border-zinc-900">
                            TOP
                          </div>
</div>
<div>
<h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            Sarah Jenkins
                          </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide">
                            MLOps Engineer
                          </p>
</div>
</div>
<div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg border border-zinc-100 dark:border-zinc-700">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-zinc-900 text-zinc-900 dark:fill-white dark:text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-bold text-zinc-900 dark:text-white">
                          4.9
                        </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        Ex-Google
                      </span>
<span className="px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        PhD CompSci
                      </span>
</div>
<div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Available Services
                      </p>
<div className="space-y-3">
<div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors -mx-2" onclick="openDrawer()">
<div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                              Enterprise RAG Pipeline
                            </div>
<div className="text-xs text-zinc-500 dark:text-zinc-400">
                              From $1,250
                            </div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white ml-auto" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300 group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=128&amp;h=128"/>
</div>
<div>
<h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            Marcus K.
                          </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide">
                            Full Stack AI Dev
                          </p>
</div>
</div>
<div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg border border-zinc-100 dark:border-zinc-700">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-zinc-900 text-zinc-900 dark:fill-white dark:text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-bold text-zinc-900 dark:text-white">
                          5.0
                        </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        Y Combinator Alum
                      </span>
<span className="px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        Python Expert
                      </span>
</div>
<div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Available Services
                      </p>
<div className="space-y-3">
<div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors -mx-2" onclick="openDrawer()">
<div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                              LangChain Workflows
                            </div>
<div className="text-xs text-zinc-500 dark:text-zinc-400">
                              From $600
                            </div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white ml-auto" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-black/50 transition-all duration-300 group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-4">
<div className="relative">
<img className="w-14 h-14 rounded-full border-2 border-white dark:border-zinc-800 shadow-sm" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=128&amp;h=128"/>
</div>
<div>
<h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">
                            Elena M.
                          </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wide">
                            AI Strategist
                          </p>
</div>
</div>
<div className="flex items-center gap-1 bg-zinc-50 dark:bg-zinc-800/50 px-2 py-1 rounded-lg border border-zinc-100 dark:border-zinc-700">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-zinc-900 text-zinc-900 dark:fill-white dark:text-white" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-bold text-zinc-900 dark:text-white">
                          4.8
                        </span>
</div>
</div>
<div className="flex flex-wrap gap-2 mb-6">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        Ex-McKinsey
                      </span>
<span className="px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-800/50 text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-100 dark:border-zinc-700">
                        MBA
                      </span>
</div>
<div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
<p className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                        Available Services
                      </p>
<div className="space-y-3">
<div className="flex items-center gap-3 cursor-pointer p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors -mx-2" onclick="openDrawer()">
<div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                              SaaS AI Strategy Audit
                            </div>
<div className="text-xs text-zinc-500 dark:text-zinc-400">
                              From $950
                            </div>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white ml-auto" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="mb-16">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800">
<h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                    Engineering &amp; Development
                  </h2>
<button className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
                    View Category
                  </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="service-card group cursor-pointer bg-white dark:bg-zinc-900 rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-black/50 transition-all duration-300" onclick="openDrawer()">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-zinc-50 dark:bg-zinc-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">5D Delivery</span>
</div>
</div>
<div className="flex items-center gap-2 mb-2 px-1">
<div className="relative">
<img className="w-6 h-6 rounded-full border border-zinc-100 dark:border-zinc-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium hover:underline">
                        Sarah Jenkins
                      </span>
</div>
<h3 className="font-medium text-sm leading-snug text-zinc-900 dark:text-zinc-100 mb-2 px-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Enterprise RAG Pipeline Architecture
                    </h3>
<div className="flex items-center justify-between px-1 mt-auto">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
                          4.9
                        </span>
</div>
<div className="font-semibold text-zinc-900 dark:text-zinc-100">
                        From $1,250
                      </div>
</div>
</div>

<div className="service-card group cursor-pointer bg-white dark:bg-zinc-900 rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-black/50 transition-all duration-300" onclick="openDrawer()">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-zinc-50 dark:bg-zinc-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">2D Delivery</span>
</div>
</div>
<div className="flex items-center gap-2 mb-2 px-1">
<div className="relative">
<img className="w-6 h-6 rounded-full border border-zinc-100 dark:border-zinc-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium hover:underline">
                        Marcus K.
                      </span>
</div>
<h3 className="font-medium text-sm leading-snug text-zinc-900 dark:text-zinc-100 mb-2 px-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Custom LangChain Agents
                    </h3>
<div className="flex items-center justify-between px-1 mt-auto">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
                          5.0
                        </span>
</div>
<div className="font-semibold text-zinc-900 dark:text-zinc-100">
                        From $600
                      </div>
</div>
</div>

<div className="service-card group cursor-pointer bg-white dark:bg-zinc-900 rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-black/50 transition-all duration-300" onclick="openDrawer()">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-zinc-50 dark:bg-zinc-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">10D Delivery</span>
</div>
</div>
<div className="flex items-center gap-2 mb-2 px-1">
<div className="relative">
<div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-[10px] font-bold text-blue-600 dark:text-blue-300">
                          JD
                        </div>
</div>
<span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium hover:underline">
                        Jane Doe
                      </span>
</div>
<h3 className="font-medium text-sm leading-snug text-zinc-900 dark:text-zinc-100 mb-2 px-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      Computer Vision Defect Detection
                    </h3>
<div className="flex items-center justify-between px-1 mt-auto">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
                          4.7
                        </span>
</div>
<div className="font-semibold text-zinc-900 dark:text-zinc-100">
                        From $1,800
                      </div>
</div>
</div>

<div className="service-card group cursor-pointer bg-white dark:bg-zinc-900 rounded-xl p-3 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-xl hover:shadow-zinc-200/40 dark:hover:shadow-black/50 transition-all duration-300" onclick="openDrawer()">
<div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3 bg-zinc-50 dark:bg-zinc-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">1D Delivery</span>
</div>
</div>
<div className="flex items-center gap-2 mb-2 px-1">
<div className="relative">
<img className="w-6 h-6 rounded-full border border-zinc-100 dark:border-zinc-700" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-xs text-zinc-600 dark:text-zinc-400 font-medium hover:underline">
                        Alex R.
                      </span>
</div>
<h3 className="font-medium text-sm leading-snug text-zinc-900 dark:text-zinc-100 mb-2 px-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      OpenAI API Integration &amp; Wrapper
                    </h3>
<div className="flex items-center justify-between px-1 mt-auto">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">
                          4.8
                        </span>
</div>
<div className="font-semibold text-zinc-900 dark:text-zinc-100">
                        From $350
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</template>

<template id="view-service">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<button className="mb-8 flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" onclick="route('home')">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
                Back to Marketplace
            </button>
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-2">
<div className="aspect-video rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover transition-opacity duration-300" id="service-main-image" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm border border-white/20 shadow-sm z-10">
<span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 tracking-tight">5D Delivery</span>
</div>
</div>

<div className="grid grid-cols-4 sm:grid-cols-5 gap-3 mb-8">
<button className="aspect-[4/3] rounded-lg overflow-hidden ring-2 ring-zinc-900 dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-zinc-950" onclick="swapImage('service-main-image', 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=300')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</button>
<button className="aspect-[4/3] rounded-lg overflow-hidden hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('service-main-image', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</button>
<button className="aspect-[4/3] rounded-lg overflow-hidden hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('service-main-image', 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</button>
<button className="aspect-[4/3] rounded-lg overflow-hidden hover:opacity-80 transition border border-zinc-200 dark:border-zinc-800" onclick="swapImage('service-main-image', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</button>
</div>
<h1 className="text-3xl font-serif font-medium text-zinc-900 dark:text-white mb-4">Enterprise RAG Pipeline Architecture &amp; Implementation</h1>
<div className="prose dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
<p>Comprehensive RAG system implementation designed for enterprise scale. Includes vector database setup, document chunking strategy optimization, and reranking pipeline integration.</p>
<h3>What's included</h3>
<ul className="list-disc pl-5 space-y-2 mt-4">
<li>Custom Vector DB Setup (Pinecone/Weaviate)</li>
<li>LangChain or LlamaIndex orchestration</li>
<li>FastAPI or Flask backend endpoints</li>
<li>Evaluation framework integration</li>
</ul>
</div>
</div>
<div className="lg:col-span-1">
<div className="sticky top-24 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-lg">
<div className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">$1,250</div>
<p className="text-sm text-zinc-500 mb-6">Standard Project Package</p>
<button className="w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition" onclick="route('chat')">Contact Expert</button>
</div>
</div>
</div>
</div>
</template>

<template id="view-dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
<h1 className="text-2xl font-serif font-medium text-zinc-900 dark:text-white mb-8">Dashboard</h1>
<div className="grid md:grid-cols-4 gap-6">

<div className="md:col-span-1 space-y-1">
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" id="tab-buyer" onclick="switchRole('buyer')">Buying</button>
<button className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition" id="tab-seller" onclick="switchRole('seller')">Selling</button>
</div>

<div className="md:col-span-3">
<div className="fade-in" id="role-buyer">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center">
<div className="w-12 h-12 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
<svg className="text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<h3 className="text-zinc-900 dark:text-white font-medium mb-1">No active orders</h3>
<p className="text-zinc-500 text-sm mb-4">Start by exploring the marketplace.</p>
<button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline" onclick="route('home')">Browse Services</button>
</div>
</div>
<div className="fade-in hidden" id="role-seller">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Total Earnings</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white">$0.00</div>
</div>
<div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Active Gigs</div>
<div className="text-2xl font-semibold text-zinc-900 dark:text-white">0</div>
</div>
</div>
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 text-center">
<h3 className="text-zinc-900 dark:text-white font-medium mb-4">Create your first Gig</h3>
<button className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-medium">Create New Service</button>
</div>
</div>
</div>
</div>
</div>
</template>

<template id="view-chat">
<div className="h-[calc(100vh-80px)] max-w-7xl mx-auto px-4 sm:px-6 py-6 grid md:grid-cols-3 gap-6">
<div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 flex flex-col">
<div className="p-4 border-b border-zinc-100 dark:border-zinc-800 font-medium">Messages</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1">
<div className="p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-sm">SJ</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Sarah Jenkins</div>
<div className="text-xs text-zinc-500 truncate w-32">Sure, let's discuss the...</div>
</div>
</div>
</div>
</div>
</div>
<div className="md:col-span-2 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 flex flex-col">
<div className="p-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
<span className="font-medium text-zinc-900 dark:text-white">Sarah Jenkins</span>
<span className="text-xs text-emerald-500 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online</span>
</div>
<div className="flex-1 p-6 bg-zinc-50/50 dark:bg-black/20 overflow-y-auto space-y-4">
<div className="flex justify-end">
<div className="bg-indigo-600 text-white px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-md">Hi Sarah, I'm interested in the RAG pipeline service. Can it handle PDF ingestion?</div>
</div>
<div className="flex justify-start">
<div className="bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-4 py-2 rounded-2xl rounded-tl-sm text-sm max-w-md">Absolutely! We use unstructured.io for parsing PDFs properly before vectorization.</div>
</div>
</div>
<div className="p-4 border-t border-zinc-100 dark:border-zinc-800 flex gap-2">
<input className="flex-1 bg-transparent border-0 focus:ring-0 text-sm" placeholder="Type a message..." type="text"/>
<button className="p-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</div>
</div>
</template>


    </>
  );
}
