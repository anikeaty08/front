import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();
// State
let currentView = 'editor';
// Sidebar Toggle
const sidebar = document.getElementById('sidebar');
const toggleSidebar = document.getElementById('toggleSidebarMain');
function toggleSidebarVisibility() {
sidebar.classList.toggle('sidebar-collapsed');
}
if(toggleSidebar) toggleSidebar.addEventListener('click', toggleSidebarVisibility);
// Folder Toggle
document.addEventListener('click', (e) => {
const folderHeader = e.target.closest('.folder-header');
if (folderHeader) {
const folderItem = folderHeader.closest('.folder-item');
const children = folderItem.querySelector('.folder-children');
const chevron = folderHeader.querySelector('.folder-chevron');
if(children) {
children.classList.toggle('expanded');
if (children.classList.contains('expanded')) {
chevron.setAttribute('data-lucide', 'chevron-down');
} else {
chevron.setAttribute('data-lucide', 'chevron-right');
}
lucide.createIcons();
}
}
});
// View Switcher Logic
function showView(viewName) {
document.getElementById('view-editor').classList.add('hidden');
document.getElementById('view-chat').classList.add('hidden');
document.getElementById('view-documents').classList.add('hidden');
document.getElementById(`view-${viewName === 'dashboard' ? 'editor' : viewName}`).classList.remove('hidden');
if(viewName === 'dashboard') {
// Reset to prompt interface if "New Chat" is clicked
document.getElementById('promptInterface').classList.remove('hidden');
document.getElementById('fullEditorInterface').classList.add('hidden');
}
const names = {
'dashboard': 'New Chat',
'chat': 'Chat History',
'documents': 'Knowledge Base',
'editor': 'Editor'
};
const breadcrumb = document.getElementById('currentPageBreadcrumb');
if(breadcrumb) breadcrumb.textContent = names[viewName] || 'Editor';
}
// Load specific docs
function loadDoc(type) {
showView('editor');
document.getElementById('promptInterface').classList.add('hidden');
document.getElementById('fullEditorInterface').classList.remove('hidden');
const titles = {
'bio': 'Bio & Core Values',
'platform': 'Platform & Issues',
'opponents': 'Opponents Profile'
};
document.getElementById('pageTitle').textContent = titles[type];
document.getElementById('currentPageBreadcrumb').textContent = titles[type];
document.getElementById('contentArea').innerHTML = `<h2 class="text-2xl font-serif font-medium text-slate-900 mb-4">Content for ${titles[type]}</h2><p class="text-slate-600">Loading protected campaign data...</p>`;
}
// Prompt Logic
function fillPrompt(text) {
const input = document.getElementById('mainPromptInput');
input.value = text;
input.focus();
}
function transitionToEditor() {
const promptVal = document.getElementById('mainPromptInput').value;
if(!promptVal) return;
document.getElementById('promptInterface').classList.add('hidden');
document.getElementById('fullEditorInterface').classList.remove('hidden');
const pageTitle = document.getElementById('pageTitle');
const contentArea = document.getElementById('contentArea');
pageTitle.innerText = "New Draft";
contentArea.innerHTML = `
<p class="text-slate-500 italic mb-4">Generating response for: "${promptVal}"...</p>
<h2 class="text-2xl font-bold text-slate-800 mb-4">Draft Content</h2>
<p class="text-slate-700 leading-relaxed">Here is a preliminary draft based on your request. Please review the facts against the campaign database.</p>
<p class="text-slate-700 leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
`;
}
const placeholders = [
"Draft a fundraising email for the upcoming gala...",
"Analyze the latest polling data from District 9...",
"Write a press release about the new healthcare bill...",
"Create talking points for the town hall debate...",
"Summarize the opposition research on the incumbent...",
"Update the candidate bio for the website..."
];
const inputField = document.getElementById('mainPromptInput');
let placeholderIndex = 0;
function cyclePlaceholders() {
if(inputField && document.activeElement !== inputField && inputField.value === '') {
inputField.setAttribute('placeholder', placeholders[placeholderIndex]);
placeholderIndex = (placeholderIndex + 1) % placeholders.length;
}
}
setInterval(cyclePlaceholders, 3000);
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn');
const closeSettings = document.getElementById('closeSettings');
if(settingsBtn) settingsBtn.addEventListener('click', () => { settingsModal.classList.remove('hidden'); });
if(closeSettings) closeSettings.addEventListener('click', () => { settingsModal.classList.add('hidden'); });
if(settingsModal) settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.add('hidden'); });
const contentArea = document.getElementById('contentArea');
const commandMenu = document.getElementById('commandMenu');
if(contentArea) {
contentArea.addEventListener('keydown', (e) => {
if (e.key === '/') {
const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
commandMenu.style.top = `${rect.bottom + 10}px`;
commandMenu.style.left = `${rect.left}px`;
commandMenu.classList.add('active');
}
if (e.key === 'Escape') commandMenu.classList.remove('active');
});
document.addEventListener('click', (e) => {
if (commandMenu && !commandMenu.contains(e.target) && !contentArea.contains(e.target)) {
commandMenu.classList.remove('active');
}
});
}



      lucide.createIcons();

      // State
      let currentView = 'editor';

      // Sidebar Toggle
      const sidebar = document.getElementById('sidebar');
      const toggleSidebar = document.getElementById('toggleSidebarMain');

      function toggleSidebarVisibility() {
          sidebar.classList.toggle('sidebar-collapsed');
      }

      toggleSidebar.addEventListener('click', toggleSidebarVisibility);

      // Folder Toggle
      document.addEventListener('click', (e) => {
          const folderHeader = e.target.closest('.folder-header');
          if (folderHeader) {
              const folderItem = folderHeader.closest('.folder-item');
              const children = folderItem.querySelector('.folder-children');
              const chevron = folderHeader.querySelector('.folder-chevron');

              children.classList.toggle('expanded');

              if (children.classList.contains('expanded')) {
                  chevron.setAttribute('data-lucide', 'chevron-down');
              } else {
                  chevron.setAttribute('data-lucide', 'chevron-right');
              }
              lucide.createIcons();
          }
      });

      // View Switcher Logic
      function showView(viewName) {
          document.getElementById('view-editor').classList.add('hidden');
          document.getElementById('view-chat').classList.add('hidden');
          document.getElementById('view-documents').classList.add('hidden');

          document.getElementById(`view-${viewName === 'dashboard' ? 'editor' : viewName}`).classList.remove('hidden');

          // If returning to editor, reset to prompt unless we were editing
          if(viewName === 'editor' || viewName === 'dashboard') {
              // Keep current state (either prompt or editor)
          }

          const names = {
              'dashboard': 'Dashboard',
              'chat': 'Assistant Chat',
              'documents': 'Document Library',
              'editor': 'Editor'
          };
          document.getElementById('currentPageBreadcrumb').textContent = names[viewName] || 'Editor';
      }

      // Load specific docs
      function loadDoc(type) {
          showView('editor');
          document.getElementById('promptInterface').classList.add('hidden');
          document.getElementById('fullEditorInterface').classList.remove('hidden');

          const titles = {
              'bio': 'Bio & Core Values',
              'platform': 'Platform & Issues',
              'opponents': 'Opponents Profile'
          };
          document.getElementById('pageTitle').textContent = titles[type];
          document.getElementById('currentPageBreadcrumb').textContent = titles[type];
          document.getElementById('contentArea').innerHTML = `<h2 class="text-2xl font-serif font-medium text-slate-900 mb-4">Content for ${titles[type]}</h2><p class="text-slate-600">Loading protected campaign data...</p>`;
      }

      // Prompt Logic
      function fillPrompt(text) {
          const input = document.getElementById('mainPromptInput');
          input.value = text;
          input.focus();
      }

      function transitionToEditor() {
          const promptVal = document.getElementById('mainPromptInput').value;
          if(!promptVal) return;

          // Hide prompt, show editor
          document.getElementById('promptInterface').classList.add('hidden');
          document.getElementById('fullEditorInterface').classList.remove('hidden');

          // Populate Editor
          const pageTitle = document.getElementById('pageTitle');
          const contentArea = document.getElementById('contentArea');

          pageTitle.innerText = "New Draft";

          // Simulated AI Generation
          contentArea.innerHTML = `
              <p class="text-slate-500 italic mb-4">Generating response for: "${promptVal}"...</p>
              <h2 class="text-2xl font-bold text-slate-800 mb-4">Draft Content</h2>
              <p class="text-slate-700 leading-relaxed">Here is a preliminary draft based on your request. Please review the facts against the campaign database.</p>
              <p class="text-slate-700 leading-relaxed mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          `;
      }

      // Placeholder Cycling Logic
      const placeholders = [
          "Draft a fundraising email for the upcoming gala...",
          "Analyze the latest polling data from District 9...",
          "Write a press release about the new healthcare bill...",
          "Create talking points for the town hall debate...",
          "Summarize the opposition research on the incumbent...",
          "Update the candidate bio for the website..."
      ];

      const inputField = document.getElementById('mainPromptInput');
      let placeholderIndex = 0;

      function cyclePlaceholders() {
          if(document.activeElement !== inputField && inputField.value === '') {
              inputField.setAttribute('placeholder', placeholders[placeholderIndex]);
              placeholderIndex = (placeholderIndex + 1) % placeholders.length;
          }
      }

      setInterval(cyclePlaceholders, 3000);

      // Settings Modal
      const settingsModal = document.getElementById('settingsModal');
      const settingsBtn = document.getElementById('settingsBtn');
      const closeSettings = document.getElementById('closeSettings');

      settingsBtn.addEventListener('click', () => { settingsModal.classList.remove('hidden'); });
      closeSettings.addEventListener('click', () => { settingsModal.classList.add('hidden'); });
      settingsModal.addEventListener('click', (e) => { if (e.target === settingsModal) settingsModal.classList.add('hidden'); });

      // Slash Command
      const contentArea = document.getElementById('contentArea');
      const commandMenu = document.getElementById('commandMenu');

      contentArea.addEventListener('keydown', (e) => {
          if (e.key === '/') {
              const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
              commandMenu.style.top = `${rect.bottom + 10}px`;
              commandMenu.style.left = `${rect.left}px`;
              commandMenu.classList.add('active');
          }
          if (e.key === 'Escape') commandMenu.classList.remove('active');
      });

      document.addEventListener('click', (e) => {
          if (!commandMenu.contains(e.target) && !contentArea.contains(e.target)) {
              commandMenu.classList.remove('active');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-72 bg-slate-50/50 border-r border-slate-200 flex flex-col h-full shrink-0 select-none transition-all duration-300" id="sidebar">

<div className="h-14 flex items-center px-4 border-b border-slate-100">
<div className="flex items-center gap-3 cursor-pointer group w-full">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:bg-rose-600 transition-colors">
<span className="font-serif font-medium text-xs">K</span>
</div>
<span className="font-serif font-medium text-lg tracking-tight text-slate-900">
            KAI<span className="text-rose-600">OS</span>
<button className="ml-auto text-slate-400 hover:text-slate-800 transition-colors p-1.5 rounded-md hover:bg-slate-200/50" title="Switch Project">
<svg className="lucide lucide-chevrons-up-down w-4 h-4" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 15 5 5 5-5"></path>
<path d="m7 9 5-5 5 5"></path>
</svg>
</button>
</span></div>
</div>

<div className="flex-1 overflow-y-auto pt-4 pr-3 pb-4 pl-3 space-y-6">
<div className="space-y-4 pt-4 px-2">

<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm group" href="#" onclick="showView('dashboard')">
<svg className="lucide lucide-message-square-plus w-4 h-4 text-rose-500 group-hover:text-rose-400" data-lucide="message-square-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<line x1="9" x2="15" y1="10" y2="10"></line>
<line x1="12" x2="12" y1="7" y2="13"></line>
</svg>
<span>New Chat</span>
</a>

<ul className="space-y-1" id="campaignTree">

<li className="folder-item" data-folder-id="profile">
<div className="folder-header flex items-center gap-2 px-2 py-2 text-sm text-slate-700 font-medium rounded-md hover:bg-slate-100 cursor-pointer group">
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-slate-400 folder-chevron transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
<svg className="lucide lucide-user-circle w-3.5 h-3.5 text-slate-500" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="10" r="3"></circle>
<path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
</svg>
<span className="folder-name">Candidate Profile</span>
</div>
<ul className="folder-children expanded ml-2 pl-2 border-l border-slate-200 space-y-0.5 mt-0.5">
<li className="page-item" onclick="loadDoc('bio')">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="page-name">Bio &amp; Core Values</span>
</a>
</li>
<li className="page-item" onclick="loadDoc('platform')">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="page-name">Platform &amp; Issues</span>
</a>
</li>
<li className="page-item" onclick="loadDoc('opponents')">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="page-name">Opponents</span>
</a>
</li>
</ul>
</li>

<li className="folder-item" data-folder-id="drafts">
<div className="folder-header flex items-center gap-2 px-2 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-slate-400 folder-chevron transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<svg className="lucide lucide-pen-tool w-3.5 h-3.5 text-slate-400 group-hover:text-rose-400 transition-colors" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path>
<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path>
<path d="m2.3 2.3 7.286 7.286"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
<span className="folder-name">Drafts &amp; Outputs</span>
</div>
<ul className="folder-children ml-2 pl-2 border-l border-slate-200 space-y-0.5 mt-0.5">
<li className="page-item active-page" data-page-id="new-draft">
<div className="flex items-center gap-2 px-2 py-1.5 text-sm bg-rose-50 text-rose-700 rounded-md font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse"></span>
<span className="page-name">New Draft</span>
</div>
</li>
</ul>
</li>

<li className="folder-item">
<a className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#" onclick="showView('documents')">
<span className="w-3.5 flex justify-center mr-2 ml-0.5">
<svg className="lucide lucide-library w-3.5 h-3.5 text-slate-400" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6 4 14"></path>
<path d="M12 6v14"></path>
<path d="M8 8v12"></path>
<path d="M4 4v16"></path>
</svg>
</span>
<span className="folder-name">Knowledge Base</span>
</a>
</li>

<li className="folder-item" data-folder-id="rules">
<div className="folder-header flex items-center gap-2 px-2 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer group">
<svg className="lucide lucide-chevron-right w-3.5 h-3.5 text-slate-400 folder-chevron transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
<svg className="lucide lucide-shield-alert w-3.5 h-3.5 text-slate-400 group-hover:text-rose-400 transition-colors" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
<span className="folder-name">Guardrails &amp; Rules</span>
</div>
<ul className="folder-children ml-2 pl-2 border-l border-slate-200 space-y-0.5 mt-0.5">
<li className="page-item">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="page-name">Rules</span>
</a>
</li>
<li className="page-item">
<a className="page-link flex items-center gap-2 px-2 py-1.5 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="page-name">Instructions</span>
</a>
</li>
</ul>
</li>
</ul>
</div>

<div className="mt-auto px-4 pb-6 pt-4 border-t border-slate-100">
<h3 className="mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Your Chats
          </h3>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors group" href="#" onclick="showView('chat')">
<svg className="lucide lucide-message-circle w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
<span className="truncate">Healthcare Policy...</span>
</a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 text-sm text-slate-600 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors group" href="#" onclick="showView('chat')">
<svg className="lucide lucide-message-circle w-3.5 h-3.5 text-slate-400 group-hover:text-rose-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
<span className="truncate">Fundraiser Ideas</span>
</a>
</li>
</ul>
</div>
</div>

<div className="p-3 border-t border-slate-200 bg-white">
<button className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-slate-50 transition-colors text-left group" id="settingsBtn">
<div className="w-7 h-7 rounded-full bg-slate-200 flex items-center justify-center text-xs font-serif font-medium text-slate-600 border border-slate-300">
            A
          </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Admin User</span>
<span className="text-[10px] text-slate-500">Campaign Manager</span>
</div>
<svg className="lucide lucide-settings w-3.5 h-3.5 ml-auto text-slate-400 group-hover:text-slate-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="h-14 border-b border-slate-100 flex items-center justify-between px-8 bg-white sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-slate-500" id="breadcrumbs">
<svg className="lucide lucide-briefcase w-4 h-4 text-slate-400 mr-1" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
<rect height="14" rx="2" width="20" x="2" y="6"></rect>
</svg>
<span className="hover:text-slate-800 cursor-pointer transition-colors">
            District 9 Project
          </span>
<span className="text-slate-300">/</span>
<span className="text-slate-800 font-medium" id="currentPageBreadcrumb">
            New Draft
          </span>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">
              Retrieval
            </span>
<div className="h-3 w-px bg-slate-200"></div>
<label className="flex items-center gap-1.5 cursor-pointer">
<input checked="" className="w-3 h-3 text-rose-600 rounded border-slate-300 focus:ring-rose-500" type="checkbox"/>
<span className="text-xs text-slate-600 font-medium">
                Approved Only
              </span>
</label>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<div className="text-[10px] uppercase font-bold tracking-widest text-slate-300" id="documentStatus">
            Draft
          </div>
<button className="text-slate-400 hover:text-slate-700 transition-colors" id="toggleSidebarMain">
<svg className="lucide lucide-panel-left w-4 h-4" data-lucide="panel-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M9 3v18"></path>
</svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white" id="view-editor">

<div className="h-full flex flex-col items-center justify-center p-8 max-w-3xl mx-auto -mt-16" id="promptInterface">
<h1 className="text-4xl font-serif text-slate-900 mb-8 text-center tracking-tight">
            What do you want to do today?
          </h1>

<div className="w-full relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-rose-100 to-indigo-100 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="relative bg-white rounded-xl shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] border border-slate-200 p-2 transition-all group-hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.1)] group-hover:border-slate-300">
<textarea className="w-full bg-transparent text-lg text-slate-800 placeholder:text-slate-300 border-none focus:ring-0 p-4 min-h-[80px] resize-none" id="mainPromptInput" placeholder="Draft a fundraising email about the new bill..."></textarea>
<div className="flex items-center justify-between px-2 pb-2 mt-1 border-t border-slate-50 pt-2">
<div className="flex gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors" title="Attach context">
<svg className="lucide lucide-paperclip w-4 h-4" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-md transition-colors" title="Select Template">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</button>
</div>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-rose-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200" id="generateBtn" onclick="transitionToEditor()">
<span>Generate</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-3">
<button className="px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-rose-200 hover:shadow-sm hover:text-rose-600 rounded-full text-xs text-slate-500 font-medium transition-all" onclick="fillPrompt('Draft a fundraising email about ')">
              Fundraising Email
            </button>
<button className="px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-rose-200 hover:shadow-sm hover:text-rose-600 rounded-full text-xs text-slate-500 font-medium transition-all" onclick="fillPrompt('Write a press release concerning ')">
              Press Release
            </button>
<button className="px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-rose-200 hover:shadow-sm hover:text-rose-600 rounded-full text-xs text-slate-500 font-medium transition-all" onclick="fillPrompt('Summarize the opposition research on ')">
              Analyze Opposition
            </button>
<button className="px-3 py-1.5 bg-slate-50 hover:bg-white border border-slate-200 hover:border-rose-200 hover:shadow-sm hover:text-rose-600 rounded-full text-xs text-slate-500 font-medium transition-all" onclick="fillPrompt('Create talking points for ')">
              Talking Points
            </button>
</div>
</div>

<div className="hidden max-w-[850px] mr-auto ml-auto pt-16 pr-8 pb-32 pl-8" id="fullEditorInterface">

<div className="group mb-10">
<div className="flex items-center gap-3 mb-4 text-slate-400">
<div className="flex items-center gap-1 hover:text-slate-600 cursor-pointer transition-colors" id="addIconBtn">
<svg className="lucide lucide-smile w-4 h-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
<span className="text-xs font-medium">Add Icon</span>
</div>
</div>
<h1 className="placeholder:text-slate-300 focus:outline-none text-5xl text-slate-900 tracking-tight font-serif w-full" contenteditable="true" id="pageTitle" placeholder="Untitled Draft">
              New Draft
            </h1>
</div>

<div className="mt-8" id="editorContent">
<div className="hidden bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3" id="conflictAlert">
<svg className="lucide lucide-alert-triangle w-5 h-5 text-amber-500 shrink-0 mt-0.5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
<div className="text-sm text-slate-700">
<span className="font-semibold text-amber-800">
                  Conflict Detected:
                </span>
                The document
                <u>Opposition Research 2023</u>
                states the opponent voted YES on Prop 4, but your profile says
                NO.
              </div>
</div>
<div className="prose prose-slate max-w-none focus:outline-none min-h-[400px] relative" contenteditable="true" id="contentArea"></div>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col h-full bg-slate-50" id="view-chat">

<div className="flex-1 overflow-y-auto p-8 space-y-6">

<div className="flex items-start gap-4 max-w-3xl">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-1">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-500 ml-1">
                Campaign Assistant
              </span>
<div className="bg-white border border-slate-200 p-4 rounded-2xl chat-bubble-ai shadow-sm text-sm text-slate-700 leading-relaxed">
                Hello! I'm ready to help with your campaign. I have access to
                your profile, policy documents, and opposition research. What
                would you like to draft today?
              </div>
</div>
</div>

<div className="flex items-start gap-4 max-w-3xl ml-auto flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 mt-1">
<span className="text-xs font-bold">JD</span>
</div>
<div className="flex flex-col gap-1 items-end">
<span className="text-xs font-semibold text-slate-500 mr-1">
                John Doe
              </span>
<div className="bg-rose-600 text-white p-4 rounded-2xl chat-bubble-user shadow-sm text-sm leading-relaxed">
                Draft a short statement about the new healthcare bill. Make sure
                to check our previous stance in the 2022 speech.
              </div>
</div>
</div>

<div className="flex items-start gap-4 max-w-3xl">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-1">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-500 ml-1">
                Campaign Assistant
              </span>
<div className="bg-white border border-slate-200 p-4 rounded-2xl chat-bubble-ai shadow-sm text-sm text-slate-700 leading-relaxed">
<p className="mb-3">
                  Here is a draft statement aligned with your 2022 platform:
                </p>
<div className="pl-3 border-l-2 border-slate-200 italic mb-3">
                  "Our community deserves affordable care, not empty promises.
                  As I stated last year, we must protect rural hospitals..."
                </div>
<div className="flex gap-2 mt-4 pt-3 border-t border-slate-100">
<button className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors text-xs text-slate-600">
<svg className="lucide lucide-book-open w-3 h-3 text-rose-500" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14"></path>
<path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
</svg>
<span>Source: 2022 Kickoff Speech (p. 4)</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto relative">
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-100 resize-none h-14" placeholder="Message the assistant..."></textarea>
<button className="absolute right-3 top-3 text-slate-400 hover:text-rose-600 transition-colors">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 overflow-y-auto bg-white p-8" id="view-documents">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h1 className="font-serif text-3xl font-medium text-slate-900">
              Knowledge Base
            </h1>
<button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<svg className="lucide lucide-upload-cloud w-4 h-4" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13v8"></path>
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="m8 17 4-4 4 4"></path>
</svg>
              Upload
            </button>
</div>

<div className="drop-zone h-32 rounded-xl mb-8 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
<svg className="lucide lucide-file-up w-8 h-8 mb-2" data-lucide="file-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M12 12v6"></path>
<path d="m15 15-3-3-3 3"></path>
</svg>
<span className="text-sm font-medium">
              Drag &amp; drop files here (PDF, DOCX, TXT)
            </span>
</div>

<div className="border border-slate-200 rounded-xl overflow-hidden">
<div className="bg-slate-50 px-4 py-3 border-b border-slate-200 grid grid-cols-12 gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wide">
<div className="col-span-5">Name</div>
<div className="col-span-2">Type</div>
<div className="col-span-2">Date</div>
<div className="col-span-2">Status</div>
<div className="col-span-1 text-right">Action</div>
</div>
<div className="divide-y divide-slate-100">
<div className="px-4 py-3 grid grid-cols-12 gap-4 items-center hover:bg-slate-50 transition-colors">
<div className="col-span-5 flex items-center gap-3">
<svg className="lucide lucide-file-text w-4 h-4 text-slate-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
<span className="text-sm font-medium text-slate-900">
                    2022 Kickoff Speech.pdf
                  </span>
</div>
<div className="col-span-2 text-xs text-slate-500">PDF</div>
<div className="col-span-2 text-xs text-slate-500">
                  Oct 24, 2023
                </div>
<div className="col-span-2">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                    Approved
                  </span>
</div>
<div className="col-span-1 text-right">
<button className="text-slate-400 hover:text-slate-600">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="command-menu fixed bg-white rounded-xl shadow-xl border border-slate-200 py-2 w-72 z-50" id="commandMenu">
<div className="px-3 pb-2 border-b border-slate-100">
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:border-rose-300" id="commandSearch" placeholder="Search commands..." type="text"/>
</div>
<div className="py-2 max-h-64 overflow-y-auto">
<div className="px-2 py-1 text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
          Formatting
        </div>
<button className="command-item w-full px-3 py-2 text-left hover:bg-slate-50 flex items-center gap-3" data-command="h1">
<span className="font-bold text-sm w-6 text-center text-slate-500">
            H1
          </span>
<span className="text-sm font-medium text-slate-900">Heading 1</span>
</button>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/20 z-50 flex items-center justify-center" id="settingsModal">
<div className="bg-white rounded-xl shadow-xl border border-slate-200 p-6 w-[450px]">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-slate-900 text-lg">Campaign Settings</h3>
<button className="text-slate-400 hover:text-slate-600" id="closeSettings">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="space-y-6">
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              AI &amp; Retrieval
            </h4>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700">Model Temperature</span>
<input className="w-32 accent-rose-600" max="100" min="0" type="range" value="70"/>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
<button className="text-sm text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors">
            Save Changes
          </button>
</div>
</div>
</div>

  
&lt; &gt;
    </>
  );
}
