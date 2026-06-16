import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
extend: {
colors: {
sidebar: {
light: '#2563eb', // blue-600
dark: '#1e40af',  // blue-800
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', function() {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                htmlElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        });

        // Dynamic Form Logic
        function createRow(inputs) {
            const div = document.createElement('div');
            div.className = 'grid grid-cols-12 gap-4 items-start group';
            
            let html = '';
            inputs.forEach(input => {
                html += `<div class="${input.width}">
                    <input type="${input.type || 'text'}" placeholder="${input.placeholder}" class="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent">
                </div>`;
            });

            html += `<div class="col-span-1 flex justify-center pt-2">
                        <button type="button" class="text-slate-400 hover:text-red-500 transition-colors" onclick="this.parentElement.parentElement.remove()">
                            <iconify-icon icon="solar:trash-bin-trash-linear" class="text-lg"></iconify-icon>
                        </button>
                    </div>`;
            
            div.innerHTML = html;
            return div;
        }

        function addContact() {
            const container = document.getElementById('contacts-container');
            container.appendChild(createRow([
                { width: 'col-span-5', placeholder: 'Name' },
                { width: 'col-span-6', placeholder: 'Role' }
            ]));
        }

        function addTech() {
            const container = document.getElementById('tech-container');
            container.appendChild(createRow([
                { width: 'col-span-5', placeholder: 'Label' },
                { width: 'col-span-6', placeholder: 'Value' }
            ]));
        }

        function addDoc() {
            const container = document.getElementById('docs-container');
            container.appendChild(createRow([
                { width: 'col-span-4', placeholder: 'Title' },
                { width: 'col-span-7', placeholder: 'URL', type: 'url' }
            ]));
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-screen overflow-hidden">

<aside className="w-64 bg-blue-600 dark:bg-blue-900 text-white flex-col hidden md:flex shadow-xl z-20 transition-colors duration-300">

<div className="h-16 flex items-center px-6 border-b border-white/10">
<div className="tracking-tighter font-semibold text-xl">ADW</div>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md bg-white/10 text-white" href="#">
<iconify-icon className="mr-3 text-lg opacity-80" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
                    Overview
                </a>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-blue-200 uppercase tracking-wider">Platform</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon className="mr-3 text-lg opacity-80" icon="solar:folder-with-files-linear" strokeWidth="1.5"></iconify-icon>
                    Projects Catalog
                </a>
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon className="mr-3 text-lg opacity-80" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                    Team Vault
                </a>
<div className="pt-4 pb-2 px-3 text-xs font-medium text-blue-200 uppercase tracking-wider">Knowledge</div>
<a className="group flex items-center px-3 py-2 text-sm font-medium rounded-md text-blue-100 hover:bg-white/10 hover:text-white transition-all" href="#">
<iconify-icon className="mr-3 text-lg opacity-80" icon="solar:notebook-bookmark-linear" strokeWidth="1.5"></iconify-icon>
                    Resources
                </a>
</nav>

<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-semibold text-blue-900">JD</div>
<div className="text-sm font-medium text-blue-100">Jane Doe</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 border-b border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm z-10">

<button className="md:hidden text-slate-500 dark:text-slate-400">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="hidden md:flex items-center text-sm text-slate-500 dark:text-slate-400">
<span>Platform</span>
<iconify-icon className="mx-2 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>Projects</span>
<iconify-icon className="mx-2 text-xs" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900 dark:text-slate-100 font-medium">Create Project</span>
</div>

<button className="p-2 rounded-full text-slate-500 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/20" id="theme-toggle">
<iconify-icon className="text-xl dark:hidden" icon="solar:sun-linear"></iconify-icon>
<iconify-icon className="text-xl hidden dark:inline" icon="solar:moon-linear"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-6 md:p-8 lg:p-12">
<div className="max-w-4xl mx-auto space-y-10 pb-20">

<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Create New Project</h1>
<p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Fill in the details below to register a new project in the catalog.</p>
</div>

<form className="space-y-8" onsubmit="event.preventDefault();">

<div className="space-y-6">
<h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800 pb-2">General Information</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="title">Project Title</label>
<input className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent transition-shadow" id="title" placeholder="e.g. Payment Gateway Service" type="text"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="description">Description</label>
<textarea className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent transition-shadow" id="description" placeholder="Brief overview of the project goals..." rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="domain">Project Domain</label>
<div className="relative rounded-md shadow-sm">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span className="text-gray-500 sm:text-sm">adw.com/</span>
</div>
<input className="block w-full rounded-md border-0 py-2 pl-20 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent transition-shadow" id="domain" placeholder="finance" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="repo">Repository URL</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-gray-400" icon="solar:cat-linear"></iconify-icon>
</div>
<input className="block w-full rounded-md border-0 py-2 pl-10 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent transition-shadow" id="repo" placeholder="github.com/org/repo" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="tags">Tags</label>
<select className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white bg-transparent h-24" id="tags" multiple="">
<option>Internal Tool</option>
<option>Customer Facing</option>
<option>Legacy</option>
<option>Microservice</option>
<option>Monolith</option>
</select>
<p className="mt-1 text-xs text-slate-500">Hold Cmd/Ctrl to select multiple</p>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="managed_by">Managed By</label>
<select className="block w-full rounded-md border-0 py-2 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 dark:bg-slate-900 dark:ring-slate-700 dark:text-white bg-transparent" id="managed_by">
<option disabled="" selected="" value="">Select a team</option>
<option>Platform Engineering</option>
<option>Core Product</option>
<option>Design Systems</option>
<option>Data Science</option>
</select>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-2">
<h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Contacts</h2>
<button className="text-xs flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700" onclick="addContact()" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Contact
                                </button>
</div>
<div className="space-y-3" id="contacts-container">

<div className="grid grid-cols-12 gap-4 items-start group">
<div className="col-span-5">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="Name (e.g. John Doe)" type="text"/>
</div>
<div className="col-span-6">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="Role (e.g. Lead Maintainer)" type="text"/>
</div>
<div className="col-span-1 flex justify-center pt-2">
<button className="text-slate-400 hover:text-red-500 transition-colors" onclick="this.parentElement.parentElement.remove()" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-2">
<h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Tech Stack</h2>
<button className="text-xs flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700" onclick="addTech()" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Tech
                                </button>
</div>
<div className="space-y-3" id="tech-container">
<div className="grid grid-cols-12 gap-4 items-start group">
<div className="col-span-5">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="Label (e.g. Language)" type="text"/>
</div>
<div className="col-span-6">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="Value (e.g. TypeScript)" type="text"/>
</div>
<div className="col-span-1 flex justify-center pt-2">
<button className="text-slate-400 hover:text-red-500 transition-colors" onclick="this.parentElement.parentElement.remove()" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-2">
<h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">Documentation Links</h2>
<button className="text-xs flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700" onclick="addDoc()" type="button">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Link
                                </button>
</div>
<div className="space-y-3" id="docs-container">
<div className="grid grid-cols-12 gap-4 items-start group">
<div className="col-span-4">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="Title (e.g. Swagger)" type="text"/>
</div>
<div className="col-span-7">
<input className="block w-full rounded-md border-0 py-1.5 px-3 text-slate-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 text-sm dark:bg-slate-900 dark:ring-slate-700 dark:text-white dark:placeholder:text-slate-600 bg-transparent" placeholder="https://..." type="url"/>
</div>
<div className="col-span-1 flex justify-center pt-2">
<button className="text-slate-400 hover:text-red-500 transition-colors" onclick="this.parentElement.parentElement.remove()" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800 pb-2">Content (MDX)</h2>
<div className="border border-gray-300 dark:border-slate-700 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow-sm focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-opacity-50 transition-shadow">

<div className="flex items-center gap-1 p-2 border-b border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50">
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400" type="button">
<iconify-icon icon="solar:text-bold-linear"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400" type="button">
<iconify-icon icon="solar:text-italic-linear"></iconify-icon>
</button>
<div className="w-px h-4 bg-gray-300 dark:bg-slate-600 mx-1"></div>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400" type="button">
<iconify-icon icon="solar:code-linear"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400" type="button">
<iconify-icon icon="solar:link-linear"></iconify-icon>
</button>
<button className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400" type="button">
<iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>
</button>
<div className="flex-1"></div>
<span className="text-xs text-slate-400 font-mono">markdown</span>
</div>

<textarea className="w-full p-4 font-mono text-sm bg-transparent border-0 focus:ring-0 text-slate-800 dark:text-slate-200 min-h-[250px] resize-y outline-none" placeholder="# Project Overview

Write your documentation here using MDX..."></textarea>
</div>
</div>

<div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200 dark:border-slate-800">
<button className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 rounded-md hover:bg-gray-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-sm transition-all" type="button">
                                Cancel
                            </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md hover:shadow-lg transition-all" type="submit">
                                Create Project
                            </button>
</div>
</form>
</div>
</div>
</main>
</div>


    </>
  );
}
