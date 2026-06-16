import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const commandPalette = document.getElementById('command-palette');
            const overlay = document.getElementById('overlay');
            const searchInput = document.getElementById('search-input');
            const commands = document.querySelectorAll('.command-item');
            let selectedIndex = 0;

            function togglePalette(show) {
                if (show) {
                    overlay.classList.remove('hidden');
                    commandPalette.classList.remove('hidden');
                    searchInput.focus();
                    highlightCommand(0);
                } else {
                    overlay.classList.add('hidden');
                    commandPalette.classList.add('hidden');
                }
            }

            function highlightCommand(index) {
                commands.forEach(cmd => cmd.classList.remove('bg-[#1a1a1a]'));
                if (commands[index]) {
                    commands[index].classList.add('bg-[#1a1a1a]');
                    commands[index].scrollIntoView({ block: 'nearest' });
                    selectedIndex = index;
                }
            }

            document.addEventListener('keydown', (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                    e.preventDefault();
                    togglePalette(true);
                }
                
                if (!overlay.classList.contains('hidden')) {
                    if (e.key === 'Escape') {
                        togglePalette(false);
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        highlightCommand((selectedIndex + 1) % commands.length);
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        highlightCommand((selectedIndex - 1 + commands.length) % commands.length);
                    } else if (e.key === 'Enter') {
                        e.preventDefault();
                        commands[selectedIndex].click();
                        togglePalette(false);
                    }
                }
            });

            document.getElementById('trigger-button').addEventListener('click', () => togglePalette(true));
            overlay.addEventListener('click', () => togglePalette(false));
            commandPalette.addEventListener('click', (e) => e.stopPropagation());
            
            commands.forEach((cmd, index) => {
                cmd.addEventListener('mouseover', () => highlightCommand(index));
                cmd.addEventListener('click', () => {
                    console.log(`Executed: ${cmd.querySelector('.command-label').textContent}`);
                    togglePalette(false);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition" id="trigger-button">
        Press ⌘K
    </button>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 hidden" id="overlay"></div>

<div className="hidden fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md w-full bg-[#111] rounded-md shadow-xl border border-[#333] animate-fade-in" id="command-palette">

<div className="px-4 py-3 border-b border-[#333] flex items-center">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="w-full bg-transparent outline-none text-sm font-medium text-white placeholder-gray-400" id="search-input" placeholder="Search commands..." type="text"/>
</div>

<div className="px-2 py-3 max-h-[60vh] overflow-y-auto">

<div className="px-2 mb-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Navigation</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="command-label text-sm flex-1 text-white">Go Home</span>
<span className="text-xs text-gray-400 ml-2">⌘H</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<span className="command-label text-sm flex-1 text-white">Go to Feedback</span>
<span className="text-xs text-gray-400 ml-2">⌘F</span>
</div>
</div>
</div>

<div className="px-2 mb-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Workspace</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<span className="command-label text-sm flex-1 text-white">Create Team</span>
<span className="text-xs text-gray-400 ml-2">⌘T</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>
<span className="command-label text-sm flex-1 text-white">New Project</span>
<span className="text-xs text-gray-400 ml-2">⌘N</span>
</div>
</div>
</div>

<div className="px-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Settings</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
</svg>
<span className="command-label text-sm flex-1 text-white">Account Settings</span>
<span className="text-xs text-gray-400 ml-2">⌘,</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-[#222]">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
<span className="command-label text-sm flex-1 text-white">Logout</span>
</div>
</div>
</div>
</div>

<div className="px-4 py-2 border-t border-[#333] flex justify-between">
<div className="text-xs text-gray-400 flex items-center">
<span className="mr-3">↑↓ to navigate</span>
<span className="mr-3">↵ to select</span>
<span>esc to close</span>
</div>
</div>
</div>


    </>
  );
}
