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
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
sidebar: {
bg: '#1e40af', /* Deep Blue */
hover: '#1e3a8a',
active: '#2563eb'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Dark Mode Toggle
        const themeToggleBtn = document.getElementById('theme-toggle');
        const toggleKnob = document.getElementById('toggle-knob');
        const htmlElement = document.documentElement;

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                toggleKnob.classList.remove('translate-x-6');
                toggleKnob.classList.add('translate-x-1');
            } else {
                htmlElement.classList.add('dark');
                toggleKnob.classList.remove('translate-x-1');
                toggleKnob.classList.add('translate-x-6');
            }
        });

        // Type Select Conditional Logic
        const typeSelect = document.getElementById('resource-type');
        const attachmentSection = document.getElementById('attachment-section');

        typeSelect.addEventListener('change', (e) => {
            if (e.target.value === 'resource') {
                attachmentSection.style.display = 'block';
                attachmentSection.classList.add('animate-fade-in');
            } else {
                attachmentSection.style.display = 'none';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-blue-600 dark:bg-blue-900 text-white flex flex-col flex-shrink-0 transition-colors duration-300 relative z-20 hidden md:flex">

<div className="h-16 flex items-center px-6 border-b border-blue-500/30">
<span className="text-xl font-semibold tracking-tight text-white">ADW</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">

<div>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500/50 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Overview
                    </a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200/70 uppercase tracking-wider mb-2">Platform</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500/50 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Projects Catalog
                        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500/50 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:shield-user-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Team Vault
                        </a>
</div>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-blue-200/70 uppercase tracking-wider mb-2">Knowledge</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium bg-blue-500/40 text-white ring-1 ring-blue-400/30 shadow-sm transition-colors" href="#">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Resources
                        </a>
</div>
</div>
</nav>

<div className="p-4 border-t border-blue-500/30">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-semibold text-blue-900">
                        JD
                    </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-blue-200 truncate">Engineering</p>
</div>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col h-full relative">

<header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 flex-shrink-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="hidden sm:flex items-center text-sm text-slate-500 dark:text-slate-500">
<span>Knowledge</span>
<iconify-icon className="mx-2 opacity-50" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span>Resources</span>
<iconify-icon className="mx-2 opacity-50" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-slate-800 dark:text-slate-200 font-medium">Create</span>
</div>
</div>

<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900" id="theme-toggle">
<span className="sr-only">Toggle Dark Mode</span>
<span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1 dark:translate-x-6 flex items-center justify-center" id="toggle-knob">
<iconify-icon className="text-amber-500 dark:hidden" icon="solar:sun-2-linear" id="icon-sun" width="10"></iconify-icon>
<iconify-icon className="text-blue-500 hidden dark:block" icon="solar:moon-linear" id="icon-moon" width="10"></iconify-icon>
</span>
</button>
</header>

<main className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-3xl mx-auto space-y-8 pb-20">

<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight">Create Resource</h1>
<p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Share knowledge, guides, or updates with the team.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 dark:bg-white dark:text-black hover:opacity-90 rounded-lg transition-all shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:diskette-linear" width="16"></iconify-icon>
                                Save Draft
                            </button>
</div>
</div>

<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="sm:col-span-1">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Type</label>
<div className="relative">
<select className="w-full appearance-none bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 text-slate-900 dark:text-slate-200 text-sm rounded-lg px-3 py-2.5 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="resource-type">
<option value="resource">Resource</option>
<option value="blog">Blog Post</option>
<option value="sharing">Sharing Session</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="sm:col-span-1">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Visibility</label>
<div className="flex bg-gray-100 dark:bg-gray-800/50 p-1 rounded-lg">
<label className="flex-1 text-center cursor-pointer">
<input checked="" className="sr-only peer" name="visibility" type="radio" value="public"/>
<div className="text-sm py-1.5 px-3 rounded-md text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all font-medium">
                                            Public
                                        </div>
</label>
<label className="flex-1 text-center cursor-pointer">
<input className="sr-only peer" name="visibility" type="radio" value="team"/>
<div className="text-sm py-1.5 px-3 rounded-md text-slate-500 dark:text-slate-400 peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-slate-900 dark:peer-checked:text-white peer-checked:shadow-sm transition-all font-medium">
                                            Team Only
                                        </div>
</label>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">Resource Icon</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input checked="" className="sr-only peer" name="resource_icon" type="radio" value="document"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="resource_icon" type="radio" value="code"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="resource_icon" type="radio" value="video"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="resource_icon" type="radio" value="idea"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="resource_icon" type="radio" value="star"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="resource_icon" type="radio" value="folder"/>
<div className="w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] text-slate-500 flex items-center justify-center peer-checked:border-blue-500 peer-checked:text-blue-600 dark:peer-checked:text-blue-400 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
<iconify-icon icon="solar:folder-linear" width="20"></iconify-icon>
</div>
</label>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Title</label>
<input className="w-full bg-transparent border-b border-gray-200 dark:border-gray-800 text-slate-900 dark:text-white text-xl font-medium placeholder-slate-300 dark:placeholder-slate-700 py-2 focus:outline-none focus:border-blue-500 transition-colors" placeholder="e.g. Q3 Engineering Sync" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Description</label>
<textarea className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow resize-none" placeholder="Brief summary of the content..." rows="2"></textarea>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">YouTube Link <span className="text-slate-300 font-normal normal-case ml-1">(Optional)</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:play-circle-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg pl-10 pr-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="https://youtube.com/..." type="text"/>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Tags</label>
<div className="relative">
<select className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-shadow h-[42px] overflow-hidden" multiple="">
<option>Engineering</option>
<option>Design</option>
<option>Marketing</option>
</select>

<div className="absolute inset-y-0 left-0 px-2 flex items-center gap-2 pointer-events-none bg-white dark:bg-[#111] rounded-lg w-full border border-transparent">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                                            Design System
                                            <iconify-icon className="ml-1 opacity-60" icon="solar:close-circle-linear" width="12"></iconify-icon>
</span>
<span className="text-xs text-slate-400">Select tags...</span>
</div>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide flex justify-between items-center">
                                Content (MDX)
                                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-1.5 py-0.5 rounded">Markdown Supported</span>
</label>
<div className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#111] overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">

<div className="flex items-center gap-1 p-2 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400 transition-colors" type="button">
<iconify-icon icon="solar:text-bold-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400 transition-colors" type="button">
<iconify-icon icon="solar:text-italic-linear" width="18"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1"></div>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400 transition-colors" type="button">
<iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400 transition-colors" type="button">
<iconify-icon icon="solar:code-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-slate-500 dark:text-slate-400 transition-colors" type="button">
<iconify-icon icon="solar:list-linear" width="18"></iconify-icon>
</button>
</div>

<textarea className="w-full p-4 h-64 bg-transparent border-none outline-none text-sm font-mono text-slate-700 dark:text-slate-300 resize-y" placeholder="# Introduction

Start writing your document here..."></textarea>
</div>
</div>

<div className="pt-2" id="attachment-section">
<label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Attachment</label>
<div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cloud-upload-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700 dark:text-slate-300">Click to upload or drag and drop</p>
<p className="text-xs text-slate-400 mt-1">PDF, DOCX, or ZIP (max 10MB)</p>
</div>
</div>

<div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex justify-end">
<button className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/20 transition-all transform active:scale-95 flex items-center gap-2" type="submit">
                                Publish Resource
                                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</main>
</div>
</div>



    </>
  );
}
