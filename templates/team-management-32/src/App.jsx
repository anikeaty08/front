import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
sidebar: {
light: '#2563EB', // Blue-600
dark: '#1e40af',  // Blue-800
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Dark Mode Logic ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const html = document.documentElement;

        // Check local storage or preference
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
            themeIcon.setAttribute('icon', 'solar:sun-linear');
        } else {
            html.classList.remove('dark');
            themeIcon.setAttribute('icon', 'solar:moon-linear');
        }

        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
                themeIcon.setAttribute('icon', 'solar:sun-linear');
            } else {
                localStorage.setItem('theme', 'light');
                themeIcon.setAttribute('icon', 'solar:moon-linear');
            }
        });

        // --- Icon Selector Logic ---
        const iconButtons = document.querySelectorAll('.icon-option');
        
        iconButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all
                iconButtons.forEach(b => {
                    b.className = 'icon-option w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all focus:outline-none';
                    b.querySelector('iconify-icon').classList.remove('text-blue-600', 'dark:text-blue-400');
                });

                // Set active
                btn.className = 'icon-option w-10 h-10 rounded-lg border border-blue-500 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all focus:outline-none ring-2 ring-blue-500/20';
            });
        });

        // --- Member Logic ---
        const memberSelect = document.getElementById('member-select');
        const addMemberBtn = document.getElementById('add-member-btn');
        const membersList = document.getElementById('members-list');

        addMemberBtn.addEventListener('click', () => {
            const value = memberSelect.value;
            if (!value) return;

            // Simple check to avoid duplicates visually (not strict)
            const currentMembers = membersList.innerText;
            if(currentMembers.includes(value)) {
                alert('Member already added');
                return;
            }

            const initials = value.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
            
            const chip = document.createElement('div');
            chip.className = 'flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-full pl-1 pr-3 py-1 animate-[fadeIn_0.3s_ease-out]';
            chip.innerHTML = `
                <div class="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-medium">${initials}</div>
                <span class="text-xs text-blue-800 dark:text-blue-100 font-medium">${value}</span>
                <button class="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 focus:outline-none ml-1 remove-member">
                    <iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
                </button>
            `;

            membersList.appendChild(chip);

            // Add remove listener
            chip.querySelector('.remove-member').addEventListener('click', () => {
                chip.remove();
            });
            
            // Reset Select
            memberSelect.value = "";
        });

        // Remove listener for initial static member
        document.querySelectorAll('.remove-member').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('div.flex').remove();
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden flex items-center justify-between p-4 bg-blue-600 text-white dark:bg-blue-900 sticky top-0 z-50">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tighter text-lg">ADW</span>
</div>
<button className="focus:outline-none" onclick="document.getElementById('sidebar').classList.toggle('-translate-x-full')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<aside className="fixed inset-y-0 left-0 z-40 w-64 bg-blue-600 dark:bg-blue-900 text-white transform -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col h-full shadow-xl" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-blue-500/30 dark:border-blue-800/50">
<div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mr-3 backdrop-blur-sm">
<span className="font-medium text-sm">A</span>
</div>
<span className="text-xl font-medium tracking-tighter">ADW</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white text-sm font-normal transition-colors" href="#">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon>
                    Overview
                </a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2 opacity-80">Platform</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white text-sm font-normal transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:folder-path-connect-linear" width="20"></iconify-icon>
                        Projects Catalog
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white text-sm font-normal transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:shield-user-linear" width="20"></iconify-icon>
                        Team Vault
                    </a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200 uppercase tracking-wider mb-2 opacity-80">Knowledge</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 hover:text-white text-sm font-normal transition-colors group" href="#">
<iconify-icon className="opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
                        Resources
                    </a>
</div>
</div>
</nav>

<div className="p-4 border-t border-blue-500/30 dark:border-blue-800/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-medium">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Jane Doe</span>
<span className="text-xs text-blue-200">Admin</span>
</div>
</div>
</div>
</aside>

<main className="md:ml-64 min-h-screen relative flex flex-col">

<header className="h-16 flex items-center justify-end px-8 border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm sticky top-0 z-30">
<button className="w-9 h-9 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none" id="theme-toggle">
<iconify-icon icon="solar:moon-linear" id="theme-icon" width="20"></iconify-icon>
</button>
</header>
<div className="flex-1 p-6 lg:p-10 max-w-4xl mx-auto w-full">

<div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
<span>Platform</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span>Teams</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-slate-800 dark:text-slate-200">Create</span>
</div>

<div className="mb-10">
<h1 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">Create Team</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 font-normal">Establish a new team unit, define its mission, and assign initial members.</p>
</div>

<form className="space-y-8" onsubmit="event.preventDefault();">

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
<h2 className="text-base font-medium text-slate-900 dark:text-white">Team Identity</h2>
</div>
<div className="grid gap-6">

<div className="group">
<label className="block text-xs font-normal text-slate-500 dark:text-slate-400 mb-2" htmlFor="team-name">Team Name</label>
<input className="w-full bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-600" id="team-name" placeholder="e.g. Engineering Core" type="text"/>
</div>

<div>
<span className="block text-xs font-normal text-slate-500 dark:text-slate-400 mb-3">Team Icon</span>
<div className="flex flex-wrap gap-4" id="icon-selector">

<button className="icon-option w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all focus:outline-none" data-value="atom" type="button">
<iconify-icon icon="solar:atom-linear" width="20"></iconify-icon>
</button>
<button className="icon-option w-10 h-10 rounded-lg border border-blue-500 bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-all focus:outline-none" data-value="code" type="button">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</button>
<button className="icon-option w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all focus:outline-none" data-value="chart" type="button">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</button>
<button className="icon-option w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all focus:outline-none" data-value="shield" type="button">
<iconify-icon icon="solar:shield-star-linear" width="20"></iconify-icon>
</button>
<button className="icon-option w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all focus:outline-none" data-value="lightning" type="button">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div>
<label className="block text-xs font-normal text-slate-500 dark:text-slate-400 mb-2" htmlFor="description">Description</label>
<textarea className="w-full bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600" id="description" placeholder="Briefly describe the team's primary focus..." rows="3"></textarea>
</div>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
<h2 className="text-base font-medium text-slate-900 dark:text-white">Strategic Alignment</h2>
</div>
<div>
<label className="block text-xs font-normal text-slate-500 dark:text-slate-400 mb-2" htmlFor="mission">Mission Statement</label>
<textarea className="w-full bg-transparent border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-600" id="mission" placeholder="What is the long-term goal for this team?" rows="4"></textarea>
<p className="text-xs text-slate-400 mt-2">This will be displayed on the public team dashboard.</p>
</div>
</div>

<div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<div className="mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
<h2 className="text-base font-medium text-slate-900 dark:text-white">Members</h2>
</div>
<div>
<label className="block text-xs font-normal text-slate-500 dark:text-slate-400 mb-2">Add Team Members</label>
<div className="relative">
<div className="flex items-center w-full border border-gray-200 dark:border-gray-700 rounded-lg px-2 py-1.5 focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all bg-transparent">
<iconify-icon className="text-slate-400 ml-2 mr-2" icon="solar:magnifer-linear" width="18"></iconify-icon>
<select className="w-full bg-transparent text-sm text-slate-900 dark:text-white focus:outline-none appearance-none py-1 cursor-pointer" id="member-select">
<option disabled="" selected="" value="">Select a member...</option>
<option value="Alex Morgan">Alex Morgan (Design)</option>
<option value="Sarah Connor">Sarah Connor (Engineering)</option>
<option value="James Smith">James Smith (Product)</option>
<option value="Emily Chen">Emily Chen (Marketing)</option>
</select>
<button className="ml-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium" id="add-member-btn" type="button">
                                    Add
                                </button>
</div>
</div>

<div className="flex flex-wrap gap-2 mt-4" id="members-list">

<div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-full pl-1 pr-3 py-1 animate-fadeIn">
<div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-medium">AM</div>
<span className="text-xs text-blue-800 dark:text-blue-100 font-medium">Alex Morgan</span>
<button className="text-blue-400 hover:text-blue-600 dark:hover:text-blue-200 focus:outline-none ml-1">
<iconify-icon icon="solar:close-circle-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-4">
<button className="px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800" type="button">
                        Cancel
                    </button>
<button className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-lg shadow-blue-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950" type="submit">
                        Create Team
                    </button>
</div>
</form>
</div>
</main>


    </>
  );
}
