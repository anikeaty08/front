import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Custom checkbox functionality
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checkIcon = this.parentElement.querySelector('[data-lucide="check"]');
                const checkBox = this.parentElement;
                
                if (this.checked) {
                    checkIcon.classList.remove('hidden');
                    checkBox.classList.add('bg-blue-500', 'border-blue-500');
                    checkBox.classList.remove('bg-zinc-700', 'border-zinc-600');
                } else {
                    checkIcon.classList.add('hidden');
                    checkBox.classList.remove('bg-blue-500', 'border-blue-500');
                    checkBox.classList.add('bg-zinc-700', 'border-zinc-600');
                }
            });
        });

        // Range slider updates
        document.querySelectorAll('input[type="range"]').forEach(slider => {
            slider.addEventListener('input', function() {
                const nextInput = this.nextElementSibling;
                if (nextInput && nextInput.tagName === 'INPUT') {
                    nextInput.value = this.value;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col h-screen">

<div className="p-4 border-b border-zinc-800">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h1 className="text-sm font-medium text-white">Layers</h1>
<p className="text-xs text-zinc-400">3 layers</p>
</div>
</div>
</div>

<div className="p-4 border-b border-zinc-800">
<div className="relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-9 pr-3 py-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-white placeholder-zinc-400" placeholder="Search layers..." type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2">
<div className="space-y-1">

<div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer group">
<svg className="lucide lucide-eye w-4 h-4 text-zinc-400 group-hover:text-zinc-300" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="w-4 h-4 bg-zinc-700 rounded flex items-center justify-center">
<svg className="lucide lucide-folder w-3 h-3 text-zinc-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<span className="text-sm text-zinc-300 flex-1">Page 1</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>

<div className="ml-6 space-y-1">
<div className="flex items-center space-x-2 p-2 rounded-lg bg-zinc-800 cursor-pointer group">
<svg className="lucide lucide-eye w-4 h-4 text-zinc-300" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="w-4 h-4 bg-blue-600 rounded"></div>
<span className="text-sm text-white flex-1">Rectangle 1</span>
<svg className="lucide lucide-lock w-4 h-4 text-zinc-500 opacity-0 group-hover:opacity-100" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer group">
<svg className="lucide lucide-eye w-4 h-4 text-zinc-400 group-hover:text-zinc-300" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="w-4 h-4 bg-zinc-700 rounded flex items-center justify-center">
<svg className="lucide lucide-type w-3 h-3 text-zinc-400" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
</div>
<span className="text-sm text-zinc-300 flex-1">Text Layer</span>
</div>
<div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-800/50 cursor-pointer group">
<svg className="lucide lucide-eye-off w-4 h-4 text-zinc-600" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
<div className="w-4 h-4 bg-green-600 rounded-full"></div>
<span className="text-sm text-zinc-300 flex-1 opacity-50">Circle</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800">
<div className="flex items-center justify-between">
<div className="flex space-x-1">
<button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
<svg className="lucide lucide-trash-2 w-4 h-4" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</button>
</div>
<div className="flex space-x-1">
<button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
<svg className="lucide lucide-move-up w-4 h-4" data-lucide="move-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6L12 2L16 6"></path><path d="M12 2V22"></path></svg>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 rounded-lg transition-colors">
<svg className="lucide lucide-move-down w-4 h-4" data-lucide="move-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 18L12 22L16 18"></path><path d="M12 2V22"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 relative overflow-hidden bg-zinc-800">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=20 height=20 viewBox=0 0 20 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=%23000 fillOpacity=0.1%3E%3Ccircle cx=10 cy=10 r=0.5/%3E%3C/g%3E%3C/svg%3E')]"></div>

<div className="absolute inset-4 flex bg-zinc-900 border-zinc-700 border rounded-lg shadow-xl items-center justify-center">
<div className="w-72 h-[600px] bg-white rounded-3xl shadow-xl flex flex-col overflow-hidden relative font-sans text-zinc-900">

<header className="flex items-center justify-between p-5 border-b border-zinc-200">
<h1 className="text-lg font-semibold tracking-tight">My App</h1>
<button aria-label="Profile" className="w-9 h-9 rounded-full bg-zinc-200 flex items-center justify-center hover:bg-zinc-300 transition-colors">
<svg className="lucide lucide-user w-[20px] h-[20px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(82, 82, 91)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</header>

<main className="flex-1 p-6 overflow-y-auto space-y-6">
<section className="">
<h2 className="text-base font-semibold tracking-tight mb-3">Welcome back!</h2>
<p className="text-sm text-zinc-600">Here's a summary of your activity.</p>
</section>
<section className="">
<div className="bg-blue-600 rounded-xl p-4 text-white shadow-md">
<h3 className="font-semibold tracking-tight mb-2">Today’s Steps</h3>
<p className="text-3xl font-semibold">8,450</p>
<p className="text-sm opacity-80">Goal: 10,000 steps</p>
</div>
</section>
<section className="">
<h3 className="font-semibold tracking-tight mb-3">Recent Messages</h3>
<ul className="space-y-3">
<li className="flex space-x-3 items-center">
<img alt="Alice Brown" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-semibold">Alice Brown</p>
<p className="text-xs text-zinc-500 truncate">Hey! Are we still meeting tomorrow?</p>
</div>
</li>
<li className="flex space-x-3 items-center">
<img alt="John Smith" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-semibold">John Smith</p>
<p className="text-xs text-zinc-500 truncate">Sent you the files. Check your email.</p>
</div>
</li>
</ul>
</section>
<section className="">
<button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold tracking-tight hover:bg-blue-700 transition-colors">Create New Task</button>
</section>
</main>

<nav className="border-t border-zinc-200 flex justify-around p-3 bg-white sticky bottom-0">
<button aria-current="page" className="flex flex-col items-center text-blue-600">
<svg className="lucide lucide-home mb-1 w-[24px] h-[24px]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(37, 99, 235)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-xs font-semibold">Home</span>
</button>
<button className="flex flex-col items-center text-zinc-400 hover:text-blue-600 transition-colors">
<svg className="lucide lucide-search w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>
<span className="text-xs font-semibold">Search</span>
</button>
<button className="flex flex-col items-center text-zinc-400 hover:text-blue-600 transition-colors">
<svg className="lucide lucide-calendar w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<span className="text-xs font-semibold">Calendar</span>
</button>
<button className="flex flex-col items-center text-zinc-400 hover:text-blue-600 transition-colors">
<svg className="lucide lucide-settings w-6 h-6 mb-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.64 1.64 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.64 1.64 0 0 0-1.82-.33 1.64 1.64 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.64 1.64 0 0 0-1-1.51 1.64 1.64 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.64 1.64 0 0 0 .33-1.82 1.64 1.64 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.64 1.64 0 0 0 1.51-1 1.64 1.64 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.64 1.64 0 0 0 1.82.33h.09a1.64 1.64 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.64 1.64 0 0 0 1 1.51h.09a1.64 1.64 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.64 1.64 0 0 0-.33 1.82v.09a1.64 1.64 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.64 1.64 0 0 0-1.51 1z"></path></svg>
<span className="text-xs font-semibold">Settings</span>
</button>
</nav>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center space-x-2 bg-zinc-900 rounded-xl border border-zinc-700 px-3 py-2 shadow-lg">
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="lucide lucide-minus w-4 h-4" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="text-sm text-zinc-300 min-w-12 text-center">100%</span>
<button className="text-zinc-400 hover:text-zinc-200">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col max-w-xs bg-zinc-900 border-zinc-700 border rounded-xl pt-1 pr-3 pb-1 pl-3 shadow-lg space-y-2 items-center">
<div className="flex space-x-4">
<button aria-label="Insert Frame" className="hover:text-zinc-200 transition-colors text-zinc-400 rounded-md pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-layout w-[24px] h-[24px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(228, 228, 231)'}} xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</button>
<button aria-label="Insert Rectangle" className="text-zinc-400 hover:text-zinc-200 p-2 rounded-md transition-colors">
<svg className="lucide lucide-square w-[24px] h-[24px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(228, 228, 231)'}} xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect></svg>
</button>
<button aria-label="Insert Text" className="text-zinc-400 hover:text-zinc-200 p-2 rounded-md transition-colors">
<svg className="lucide lucide-type w-[24px] h-[24px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(227, 227, 230)'}} xmlns="http://www.w3.org/2000/svg"><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path className="" d="M9 20h6"></path><path className="" d="M12 4v16"></path></svg>
</button>
<button aria-label="Insert Ellipse" className="text-zinc-400 hover:text-zinc-200 p-2 rounded-md transition-colors">
<svg className="lucide lucide-circle w-[24px] h-[24px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(228, 228, 231)'}} xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="9"></circle></svg>
</button>
</div>
</div>
</div>

<div className="w-80 bg-zinc-950 border-l border-zinc-800 flex flex-col h-screen">

<div className="p-4 border-b border-zinc-800">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-settings w-4 h-4 text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="">
<h1 className="text-sm font-medium text-white">Properties</h1>
<p className="text-xs text-zinc-400">Rectangle selected</p>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Layer</span>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-2">
<input className="w-full px-3 py-2 text-sm bg-zinc-900 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-white" type="text" value="Rectangle 1"/>
<div className="flex items-center space-x-2">
<div className="relative">
<input checked="" className="sr-only" id="visible" type="checkbox"/>
<div className="w-4 h-4 bg-blue-500 border border-blue-500 rounded flex items-center justify-center cursor-pointer">
<svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<label className="text-sm text-zinc-300 cursor-pointer" htmlFor="visible">Visible</label>
<div className="relative ml-4">
<input className="sr-only" id="locked" type="checkbox"/>
<div className="w-4 h-4 bg-zinc-700 border border-zinc-600 rounded flex items-center justify-center cursor-pointer">
<svg className="lucide lucide-check w-3 h-3 text-white hidden" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<label className="text-sm text-zinc-300 cursor-pointer" htmlFor="locked">Locked</label>
</div>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Position &amp; Size</span>
<div className="grid grid-cols-2 gap-2">
<div className="space-y-1">
<label className="text-xs text-zinc-400">X</label>
<input className="w-full px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-white" type="number" value="120"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Y</label>
<input className="w-full px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-white" type="number" value="80"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">W</label>
<div className="relative">
<input className="w-full px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-white" type="number" value="200"/>
<button className="absolute right-1 top-1/2 -translate-y-1/2 p-0.5 text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-link w-3 h-3" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</button>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">H</label>
<input className="w-full px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 focus:border-blue-500 text-white" type="number" value="120"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Rotation</label>
<div className="flex items-center space-x-2">
<input className="flex-1 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider" max="360" min="0" type="range" value="0"/>
<input className="w-12 px-1 py-1 text-xs bg-zinc-900 border border-zinc-700 rounded text-center text-white" type="number" value="0"/>
<span className="text-xs text-zinc-500">°</span>
</div>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Fill</span>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-4 h-4 bg-blue-500 rounded border border-zinc-600 cursor-pointer"></div>
<select className="flex-1 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-white">
<option>Solid</option>
<option>Linear Gradient</option>
<option>Radial Gradient</option>
</select>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Opacity</label>
<div className="flex items-center space-x-2">
<input className="flex-1 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="100"/>
<span className="text-xs text-zinc-400 w-8">100%</span>
</div>
</div>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Stroke</span>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<div className="w-4 h-4 bg-zinc-200 rounded border border-zinc-600 cursor-pointer"></div>
<input className="w-16 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-white" type="number" value="2"/>
<select className="flex-1 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-white">
<option>Inside</option>
<option>Center</option>
<option>Outside</option>
</select>
</div>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Corner Radius</span>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</button>
</div>
<div className="grid grid-cols-4 gap-1">
<input className="px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-center text-white" type="number" value="8"/>
<input className="px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-center text-white" type="number" value="8"/>
<input className="px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-center text-white" type="number" value="8"/>
<input className="px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-center text-white" type="number" value="8"/>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Effects</span>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-zinc-900 rounded-lg border border-zinc-700">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-sun w-4 h-4 text-zinc-400" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="text-sm text-zinc-300">Drop Shadow</span>
</div>
<div className="flex items-center space-x-1">
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-eye w-4 h-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="text-zinc-500 hover:text-zinc-400">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="border-t border-zinc-800"></div>

<div className="p-4 space-y-3">
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">Export</span>
<div className="space-y-2">
<div className="flex items-center space-x-2">
<select className="flex-1 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-white">
<option>PNG</option>
<option>JPG</option>
<option>SVG</option>
<option>PDF</option>
</select>
<input className="w-12 px-2 py-1.5 text-sm bg-zinc-900 border border-zinc-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500/30 text-center text-white" type="text" value="2x"/>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                            Export
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
