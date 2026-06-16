import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Menu Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-sidebar-btn');
            const sidebar = document.getElementById('sidebar');

            const toggleSidebar = () => {
                sidebar.classList.toggle('hidden');
                sidebar.classList.toggle('absolute');
                sidebar.classList.toggle('h-full');
                sidebar.classList.toggle('shadow-2xl');
            };

            mobileBtn.addEventListener('click', toggleSidebar);
            closeBtn.addEventListener('click', toggleSidebar);

            // Edit Mode Toggle
            const modeToggle = document.getElementById('mode-toggle');
            const editModeText = document.getElementById('edit-mode-text');
            const editorContent = document.getElementById('editor-content');
            
            modeToggle.addEventListener('change', (e) => {
                if(e.target.checked) {
                    editModeText.textContent = 'Edit';
                    editorContent.setAttribute('contenteditable', 'true');
                    editorContent.classList.remove('opacity-80');
                } else {
                    editModeText.textContent = 'View';
                    editorContent.setAttribute('contenteditable', 'false');
                    editorContent.classList.add('opacity-80');
                }
            });

            // Checkbox Interactive Line-through
            const checkboxes = document.querySelectorAll('.task-checkbox');
            checkboxes.forEach(cb => {
                cb.addEventListener('change', (e) => {
                    const listItem = e.target.closest('li');
                    const textSpan = listItem.querySelector('.task-text');
                    if (e.target.checked) {
                        textSpan.classList.add('line-through', 'text-zinc-400', 'decoration-zinc-300');
                        textSpan.classList.remove('text-zinc-700');
                    } else {
                        textSpan.classList.remove('line-through', 'text-zinc-400', 'decoration-zinc-300');
                        textSpan.classList.add('text-zinc-700');
                    }
                });
            });

            // Formatting Toolbar Commands
            const bindFormatCmd = (btnId, command) => {
                const btn = document.getElementById(btnId);
                if (!btn) return;
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.execCommand(command, false, null);
                    // Visual toggle effect
                    btn.classList.toggle('bg-zinc-100');
                    btn.classList.toggle('text-zinc-900');
                    btn.classList.toggle('shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]');
                });
            };

            bindFormatCmd('btn-bold', 'bold');
            bindFormatCmd('btn-italic', 'italic');
            bindFormatCmd('btn-underline', 'underline');
            bindFormatCmd('btn-strike', 'strikeThrough');

            // Copy Code Block Content
            const copyBtn = document.getElementById('copy-code-btn');
            copyBtn.addEventListener('click', () => {
                const codeText = document.getElementById('code-block').innerText;
                navigator.clipboard.writeText(codeText);
                
                const icon = copyBtn.querySelector('iconify-icon');
                const originalIcon = icon.getAttribute('icon');
                
                // Success state
                icon.setAttribute('icon', 'solar:check-circle-linear');
                copyBtn.classList.add('text-green-600', 'bg-green-50', 'border-green-200');
                copyBtn.classList.remove('text-zinc-500', 'border-zinc-200');
                
                setTimeout(() => {
                    icon.setAttribute('icon', originalIcon);
                    copyBtn.classList.remove('text-green-600', 'bg-green-50', 'border-green-200');
                    copyBtn.classList.add('text-zinc-500', 'border-zinc-200');
                }, 2000);
            });

            // Share Button Animation
            const shareBtn = document.getElementById('share-btn');
            shareBtn.addEventListener('click', () => {
                shareBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon> Shared';
                shareBtn.classList.add('bg-green-600', 'hover:bg-green-700', 'shadow-[0_0_20px_rgba(22,163,74,0.4)]');
                shareBtn.classList.remove('bg-zinc-900', 'hover:bg-zinc-800');
                
                setTimeout(() => {
                    shareBtn.innerHTML = 'Share';
                    shareBtn.classList.remove('bg-green-600', 'hover:bg-green-700', 'shadow-[0_0_20px_rgba(22,163,74,0.4)]');
                    shareBtn.classList.add('bg-zinc-900', 'hover:bg-zinc-800');
                }, 2000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 flex-shrink-0 bg-[#fbfbfc] border-r border-zinc-200/80 hidden md:flex flex-col transition-all duration-300 relative z-40" id="sidebar">

<div className="h-12 flex items-center px-4 justify-between border-b border-zinc-200/50">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-5 h-5 bg-zinc-900 rounded flex items-center justify-center shadow-sm">
<span className="text-white text-xs font-semibold tracking-tighter leading-none mt-0.5">NB</span>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-800">Workspace</span>
</div>
<button className="md:hidden text-zinc-400 hover:text-zinc-900 transition-colors flex items-center justify-center rounded p-1 hover:bg-zinc-200/50 hover:scale-110 active:scale-90" id="close-sidebar-btn">
<iconify-icon height="16" icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
<button className="hidden md:flex text-zinc-400 hover:text-zinc-900 transition-colors items-center justify-center rounded p-1 hover:bg-zinc-200/50 hover:scale-110 active:scale-90">
<iconify-icon height="16" icon="solar:sidebar-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>

<div className="p-3">
<div className="relative flex items-center group">
<iconify-icon className="absolute left-2.5 text-zinc-400 group-focus-within:text-zinc-800 group-focus-within:scale-110 transition-all duration-300" height="15" icon="solar:magnifer-linear" width="15"></iconify-icon>
<input className="w-full bg-white border border-zinc-200 rounded-md py-1.5 pl-8 pr-3 text-xs text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200/50 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] focus:shadow-[0_0_15px_rgba(24,24,27,0.08)] transition-all duration-300" placeholder="Search..." type="text"/>
<div className="absolute right-2 flex items-center gap-0.5">
<kbd className="text-xs text-zinc-400 font-sans border border-zinc-200 rounded px-1 bg-zinc-50">⌘</kbd>
<kbd className="text-xs text-zinc-400 font-sans border border-zinc-200 rounded px-1 bg-zinc-50">K</kbd>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 py-1 space-y-0.5">
<div className="px-2 py-1.5 mt-2 flex items-center justify-between group cursor-pointer">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-700 transition-colors tracking-wide">Favorites</span>
</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md bg-zinc-200/60 text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_12px_rgba(24,24,27,0.08)] hover:-translate-y-px transition-all duration-300" href="#">
<iconify-icon className="text-zinc-600" height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="text-sm font-medium truncate">Product Roadmap Q3</span>
</a>
<div className="px-2 py-1.5 mt-4 flex items-center justify-between group cursor-pointer">
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-700 transition-colors tracking-wide">Private Notes</span>
<iconify-icon className="text-zinc-300 opacity-0 group-hover:opacity-100 hover:text-zinc-800 hover:scale-125 transition-all duration-300" height="14" icon="solar:add-circle-linear" width="14"></iconify-icon>
</div>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_10px_rgba(24,24,27,0.04)] hover:-translate-y-px transition-all duration-300 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 transition-colors" height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="text-sm truncate">Engineering Guidelines</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_10px_rgba(24,24,27,0.04)] hover:-translate-y-px transition-all duration-300 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 transition-colors" height="16" icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="text-sm truncate">Weekly Sync: Design</span>
</a>
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_10px_rgba(24,24,27,0.04)] hover:-translate-y-px transition-all duration-300 group" href="#">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-600 transition-colors" height="16" icon="solar:folder-2-linear" width="16"></iconify-icon>
<span className="text-sm truncate">Archive</span>
</a>
</div>

<div className="p-3 border-t border-zinc-200/50 bg-[#fbfbfc]">
<button className="w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-zinc-100 hover:shadow-[0_0_12px_rgba(24,24,27,0.05)] hover:-translate-y-px active:scale-[0.98] transition-all duration-300 group">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-zinc-200 border border-zinc-300/50 flex items-center justify-center overflow-hidden group-hover:ring-2 ring-zinc-200 transition-all">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex&amp;backgroundColor=e4e4e7"/>
</div>
<span className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900">Alex Doe</span>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-800 transition-colors" height="14" icon="solar:alt-arrow-up-linear" width="14"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-12 flex items-center justify-between px-4 sm:px-6 border-b border-zinc-100/80 sticky top-0 bg-white/90 backdrop-blur-md z-30">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<button className="md:hidden text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 p-1 rounded-md hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] active:scale-90 transition-all duration-200 mr-2 flex items-center" id="mobile-menu-btn">
<iconify-icon height="18" icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
</button>
<span className="hover:text-zinc-900 cursor-pointer transition-colors hover:underline decoration-zinc-300 underline-offset-4">Workspace</span>
<span className="text-zinc-300">/</span>
<span className="text-zinc-800 font-medium truncate max-w-[150px] sm:max-w-xs">Product Roadmap Q3</span>
</div>
<div className="flex items-center gap-3 sm:gap-4">

<div className="hidden sm:flex items-center gap-2 group">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest transition-colors duration-300" id="edit-mode-text">Edit</span>
<label className="relative inline-flex items-center cursor-pointer hover:scale-105 transition-transform">
<input checked="" className="sr-only peer" id="mode-toggle" type="checkbox"/>
<div className="w-8 h-4 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300/50 after:border after:rounded-full after:h-3 after:w-3.5 after:transition-all duration-300 peer-checked:bg-zinc-900 shadow-inner"></div>
</label>
</div>
<button className="text-zinc-400 hover:text-zinc-800 transition-all duration-300 flex items-center p-1.5 rounded-md hover:bg-zinc-50 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] hover:scale-110 active:scale-90">
<iconify-icon height="18" icon="solar:clock-circle-linear" width="18"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-800 transition-all duration-300 flex items-center p-1.5 rounded-md hover:bg-zinc-50 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] hover:scale-110 active:scale-90">
<iconify-icon height="18" icon="solar:menu-dots-circle-linear" width="18"></iconify-icon>
</button>
<button className="bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-md hover:bg-zinc-800 hover:shadow-[0_0_15px_rgba(24,24,27,0.3)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-1.5" id="share-btn">
                    Share
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto w-full pb-32">
<div className="max-w-[700px] mx-auto px-6 sm:px-10 py-12 lg:py-16">

<div className="relative group mb-8">

<div className="absolute -left-12 top-2 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-300 hover:text-zinc-700 bg-white hover:bg-zinc-50 p-1.5 rounded-md border border-transparent hover:border-zinc-200 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] hover:scale-110 active:scale-90 transition-all duration-300">
<iconify-icon height="18" icon="solar:emoji-keyboard-linear" width="18"></iconify-icon>
</button>
</div>
<h1 className="text-4xl sm:text-5xl leading-tight font-semibold tracking-tight text-zinc-900 outline-none focus:bg-zinc-50/50 focus:ring-4 focus:ring-zinc-50/50 rounded-lg transition-colors -ml-2 p-2" contenteditable="true" placeholder="Untitled Document">Product Roadmap Q3</h1>
</div>

<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 mb-10 pb-6 border-b border-zinc-100/80">
<div className="flex items-center gap-2 cursor-pointer hover:text-zinc-800 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] px-2 py-1 -ml-2 rounded-md transition-all duration-300">
<iconify-icon height="16" icon="solar:calendar-linear" width="16"></iconify-icon>
<span>Oct 24, 2023</span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:text-zinc-800 hover:shadow-[0_0_10px_rgba(24,24,27,0.05)] px-2 py-1 -ml-2 rounded-md transition-all duration-300">
<iconify-icon height="16" icon="solar:user-linear" width="16"></iconify-icon>
<span>Alex Doe</span>
</div>
<div className="flex items-center gap-1.5 cursor-pointer">
<span className="bg-zinc-100/80 border border-zinc-200/60 px-2 py-0.5 rounded text-xs font-medium text-zinc-600 hover:bg-zinc-200 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] hover:-translate-y-px transition-all duration-300">Planning</span>
<span className="bg-zinc-100/80 border border-zinc-200/60 px-2 py-0.5 rounded text-xs font-medium text-zinc-600 hover:bg-zinc-200 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] hover:-translate-y-px transition-all duration-300">Q3</span>
</div>
</div>

<div className="text-base text-zinc-700 leading-relaxed outline-none space-y-5 focus:bg-zinc-50/30 p-2 -mx-2 rounded-lg transition-colors duration-500" contenteditable="true" id="editor-content" placeholder="Start typing, or press '/' for commands...">
<p>This document serves as the single source of truth for our primary objectives and deliverables for the upcoming quarter. The core focus remains on enhancing user retention and dramatically simplifying the onboarding flow for new workspaces.</p>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mt-10 mb-4 flex items-center gap-2 group relative">
<span className="absolute -left-6 opacity-0 group-hover:opacity-100 text-zinc-300 hover:text-zinc-600 hover:scale-125 cursor-pointer select-none hidden sm:inline-block transition-all duration-300">#</span>
                        Key Initiatives
                    </h2>

<ul className="list-none space-y-3" contenteditable="false">
<li className="flex items-start gap-3 group relative bg-white hover:bg-zinc-50 p-1.5 -ml-1.5 rounded-lg transition-colors duration-200">
<div className="absolute -left-6 top-2.5 opacity-0 group-hover:opacity-100 cursor-grab text-zinc-300 hover:text-zinc-600 hidden sm:block hover:scale-110 transition-all duration-200">
<iconify-icon height="14" icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<label className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-zinc-300 bg-white shadow-sm cursor-pointer hover:border-zinc-500 hover:shadow-[0_0_8px_rgba(24,24,27,0.1)] transition-all duration-300 flex-shrink-0">
<input checked="" className="task-checkbox peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 z-10 pointer-events-none scale-50 peer-checked:scale-100 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="3.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<div className="absolute inset-0 bg-zinc-900 rounded-[3px] opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
</label>
<span className="task-text line-through text-zinc-400 decoration-zinc-300 transition-all duration-300 outline-none" contenteditable="true">Finalize entirely new user dashboard design and architecture</span>
</li>
<li className="flex items-start gap-3 group relative bg-white hover:bg-zinc-50 p-1.5 -ml-1.5 rounded-lg transition-colors duration-200">
<div className="absolute -left-6 top-2.5 opacity-0 group-hover:opacity-100 cursor-grab text-zinc-300 hover:text-zinc-600 hidden sm:block hover:scale-110 transition-all duration-200">
<iconify-icon height="14" icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<label className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-zinc-300 bg-white shadow-sm cursor-pointer hover:border-zinc-500 hover:shadow-[0_0_8px_rgba(24,24,27,0.1)] transition-all duration-300 flex-shrink-0">
<input className="task-checkbox peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 z-10 pointer-events-none scale-50 peer-checked:scale-100 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="3.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<div className="absolute inset-0 bg-zinc-900 rounded-[3px] opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
</label>
<span className="task-text text-zinc-700 transition-all duration-300 outline-none" contenteditable="true">Implement seamless SSO integration (Google, GitHub, SAML)</span>
</li>
<li className="flex items-start gap-3 group relative bg-white hover:bg-zinc-50 p-1.5 -ml-1.5 rounded-lg transition-colors duration-200">
<div className="absolute -left-6 top-2.5 opacity-0 group-hover:opacity-100 cursor-grab text-zinc-300 hover:text-zinc-600 hidden sm:block hover:scale-110 transition-all duration-200">
<iconify-icon height="14" icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<label className="mt-0.5 relative flex items-center justify-center w-4 h-4 rounded border border-zinc-300 bg-white shadow-sm cursor-pointer hover:border-zinc-500 hover:shadow-[0_0_8px_rgba(24,24,27,0.1)] transition-all duration-300 flex-shrink-0">
<input className="task-checkbox peer sr-only" type="checkbox"/>
<svg className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 z-10 pointer-events-none scale-50 peer-checked:scale-100 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="3.5" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<div className="absolute inset-0 bg-zinc-900 rounded-[3px] opacity-0 peer-checked:opacity-100 transition-opacity duration-300"></div>
</label>
<span className="task-text text-zinc-700 transition-all duration-300 outline-none" contenteditable="true">Comprehensive performance audit of edge database queries</span>
</li>
</ul>
<blockquote className="border-l-[3px] border-zinc-300 pl-5 my-8 text-zinc-500 font-medium bg-zinc-50/50 py-2 pr-4 rounded-r-lg">
                        "Simplicity is the ultimate sophistication." We need to ensure every new feature adds exponential value without cluttering the interface. If a user needs a tutorial, the design has failed.
                    </blockquote>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mt-8 mb-3 group relative">
<span className="absolute -left-6 opacity-0 group-hover:opacity-100 text-zinc-300 hover:text-zinc-600 hover:scale-125 cursor-pointer select-none hidden sm:inline-block transition-all duration-300">#</span>
                        Technical Constraints
                    </h3>
<p>We are aiming for a closed beta release by mid-August. Ensure all major architectural changes to the API are merged before the feature freeze on August 1st. Below is the proposed middleware logic.</p>

<div className="bg-[#fbfbfc] border border-zinc-200/80 rounded-xl p-4 my-6 font-mono text-sm overflow-x-auto text-zinc-600 shadow-sm relative group" contenteditable="false">

<div className="absolute top-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fbfbfc] pl-2 z-10">
<span className="text-xs text-zinc-400 font-sans uppercase tracking-widest font-medium">TypeScript</span>
<button className="text-zinc-500 hover:text-zinc-900 transition-all duration-300 border border-zinc-200 bg-white hover:bg-zinc-50 rounded p-1.5 shadow-sm hover:shadow-[0_0_12px_rgba(24,24,27,0.1)] hover:scale-105 active:scale-95 flex items-center justify-center" id="copy-code-btn">
<iconify-icon height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
<code className="leading-loose block" contenteditable="true" id="code-block" spellcheck="false">
<span className="text-pink-600 font-medium">import</span> { NextResponse } <span className="text-pink-600 font-medium">from</span> <span className="text-green-600">'next/server'</span>;
<span className="text-pink-600 font-medium">import</span> <span className="text-blue-500 italic">type</span> { NextRequest } <span className="text-pink-600 font-medium">from</span> <span className="text-green-600">'next/server'</span>;

<span className="text-pink-600 font-medium">export async function</span> <span className="text-blue-600 font-medium">middleware</span>(req: NextRequest) {
  <span className="text-pink-600 font-medium">const</span> session = <span className="text-pink-600 font-medium">await</span> <span className="text-blue-600 font-medium">getSession</span>(req);
  
  <span className="text-pink-600 font-medium">if</span> (!session) {
    <span className="text-pink-600 font-medium">return</span> NextResponse.<span className="text-blue-600 font-medium">redirect</span>(<span className="text-pink-600 font-medium">new</span> <span className="text-blue-600 font-medium">URL</span>(<span className="text-green-600">'/login'</span>, req.url));
  }
  
  <span className="text-zinc-400 italic">// Continue to requested route</span>
<span className="text-pink-600 font-medium">return</span> NextResponse.<span className="text-blue-600 font-medium">next</span>();
}
                        </code>
</div>
<p>Let's regroup on Friday at 10 AM PST to discuss potential blockers and review the initial Figma prototypes for the dashboard.</p>
</div>
</div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg px-2 py-1.5 flex items-center gap-1 z-30 pointer-events-auto transition-all duration-300 hover:shadow-[0_12px_40px_rgb(0,0,0,0.16)] hover:-translate-y-1" id="format-toolbar">

<button className="px-2 py-1.5 rounded hover:bg-zinc-100 text-zinc-700 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 border-r border-transparent hover:border-zinc-200 active:scale-95">
                Text
                <iconify-icon className="text-zinc-400" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="w-px h-5 bg-zinc-200 mx-1"></div>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] active:scale-90 flex items-center justify-center" id="btn-bold" title="Bold (⌘B)">
<iconify-icon height="18" icon="solar:text-bold-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] bg-zinc-100 text-zinc-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] active:scale-90 flex items-center justify-center" id="btn-italic" title="Italic (⌘I)">
<iconify-icon height="18" icon="solar:text-italic-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] active:scale-90 flex items-center justify-center" id="btn-underline" title="Underline (⌘U)">
<iconify-icon height="18" icon="solar:text-underline-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] active:scale-90 flex items-center justify-center" id="btn-strike" title="Strikethrough">
<iconify-icon height="18" icon="solar:text-cross-linear" width="18"></iconify-icon>
</button>
<div className="w-px h-5 bg-zinc-200 mx-1"></div>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] active:scale-90 flex items-center justify-center" title="Link (⌘K)">
<iconify-icon height="18" icon="solar:link-linear" width="18"></iconify-icon>
</button>
<button className="p-1.5 rounded text-zinc-600 transition-all duration-200 hover:bg-zinc-100 hover:text-zinc-900 hover:shadow-[0_0_8px_rgba(24,24,27,0.08)] flex items-center gap-1.5 active:scale-95" title="Text Color">
<div className="w-4 h-4 rounded-sm bg-zinc-900 shadow-sm border border-zinc-900/10 inline-block"></div>
<iconify-icon className="text-zinc-400" height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</main>


    </>
  );
}
