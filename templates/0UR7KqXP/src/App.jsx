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

            // Toggle command palette
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

            // Highlight command
            function highlightCommand(index) {
                commands.forEach(cmd => cmd.classList.remove('bg-gray-50'));
                if (commands[index]) {
                    commands[index].classList.add('bg-gray-50');
                    commands[index].scrollIntoView({ block: 'nearest' });
                    selectedIndex = index;
                }
            }

            // Keyboard shortcuts
            document.addEventListener('keydown', (e) => {
                // Open with Cmd+K or Ctrl+K
                if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                    e.preventDefault();
                    togglePalette(true);
                }
                
                // When palette is open
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

            // Click handlers
            overlay.addEventListener('click', () => togglePalette(false));
            commandPalette.addEventListener('click', (e) => e.stopPropagation());
            commands.forEach((cmd, index) => {
                cmd.addEventListener('mouseover', () => highlightCommand(index));
                cmd.addEventListener('click', () => {
                    alert(`Executed: ${cmd.querySelector('.command-label').textContent}`);
                    togglePalette(false);
                });
            });

            // For demo purposes - show palette on page load
            setTimeout(() => togglePalette(true), 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition" onclick="document.getElementById('overlay').classList.remove('hidden'); document.getElementById('command-palette').classList.remove('hidden'); document.getElementById('search-input').focus();">
        Press ⌘K
    </button>

<div className="fixed inset-0 bg-black/50 z-40 hidden" id="overlay"></div>

<div className="hidden fixed z-50 top-[20%] left-1/2 -translate-x-1/2 max-w-md w-full bg-white rounded-md shadow-xl animate-fade-in" id="command-palette">

<div className="px-4 py-3 border-b border-gray-200 flex items-center">
<svg className="text-gray-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="w-full bg-transparent outline-none text-sm font-medium text-black placeholder-gray-400" id="search-input" placeholder="Search commands..." type="text"/>
</div>

<div className="px-2 py-3 max-h-[60vh] overflow-y-auto">

<div className="px-2 mb-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Navigation</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</span>
<span className="command-label text-sm flex-1">Go Home</span>
<span className="text-xs text-gray-400 ml-2">⌘H</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</span>
<span className="command-label text-sm flex-1">Go to Feedback</span>
<span className="text-xs text-gray-400 ml-2">⌘F</span>
</div>
</div>
</div>

<div className="px-2 mb-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Workspace</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</span>
<span className="command-label text-sm flex-1">Create Team</span>
<span className="text-xs text-gray-400 ml-2">⌘T</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
</svg>
</span>
<span className="command-label text-sm flex-1">New Project</span>
<span className="text-xs text-gray-400 ml-2">⌘N</span>
</div>
</div>
</div>

<div className="px-2 mb-2">
<div className="text-[10px] text-gray-400 font-medium uppercase tracking-widest mb-1">Settings</div>
<div className="space-y-1">
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</span>
<span className="command-label text-sm flex-1">Account Settings</span>
<span className="text-xs text-gray-400 ml-2">⌘,</span>
</div>
<div className="command-item flex items-center px-2 py-1.5 rounded-sm cursor-pointer hover:bg-gray-100">
<span className="text-gray-500 mr-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
</span>
<span className="command-label text-sm flex-1">Logout</span>
<span className="text-xs text-gray-400 ml-2"></span>
</div>
</div>
</div>
</div>

<div className="px-4 py-2 border-t border-gray-200 flex justify-between">
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
