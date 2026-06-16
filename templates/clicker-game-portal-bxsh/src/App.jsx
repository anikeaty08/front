import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const iframe = document.getElementById('game-frame');
        const loader = document.getElementById('loading-overlay');
        const titleSpan = document.getElementById('current-game-title');
        const frameContainer = document.getElementById('frame-container');

        // Handle iframe load event to hide loader
        iframe.onload = function() {
            loader.style.opacity = '0';
            iframe.style.opacity = '1';
        };

        function loadGame(url, element) {
            // Show loader
            iframe.style.opacity = '0';
            loader.style.opacity = '1';
            
            // Extract title from span inside button
            const title = element.querySelector('span.font-medium').innerText;
            
            // Update source and title
            setTimeout(() => {
                iframe.src = url;
                titleSpan.innerText = title;
            }, 300); // slight delay for visual smoothness

            // Reset all nav items
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                // Remove active classes
                item.classList.remove('bg-zinc-800/80', 'text-zinc-100');
                item.classList.add('text-zinc-400', 'hover:text-zinc-200', 'hover:bg-zinc-800/40');
                
                // Reset icon background
                const iconBg = item.querySelector('div');
                iconBg.classList.remove('bg-zinc-700/50', 'text-zinc-300');
                iconBg.classList.add('bg-zinc-800/0', 'text-zinc-500');
            });

            // Set active classes on clicked element
            element.classList.remove('text-zinc-400', 'hover:text-zinc-200', 'hover:bg-zinc-800/40');
            element.classList.add('bg-zinc-800/80', 'text-zinc-100');
            
            const activeIconBg = element.querySelector('div');
            activeIconBg.classList.remove('bg-zinc-800/0', 'text-zinc-500');
            activeIconBg.classList.add('bg-zinc-700/50', 'text-zinc-300');
        }

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                if (frameContainer.requestFullscreen) {
                    frameContainer.requestFullscreen();
                } else if (frameContainer.webkitRequestFullscreen) { /* Safari */
                    frameContainer.webkitRequestFullscreen();
                } else if (frameContainer.msRequestFullscreen) { /* IE11 */
                    frameContainer.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                    document.msExitFullscreen();
                }
            }
        }
        
        // Initial manual trigger for load state if needed
        setTimeout(() => {
             if(iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
                 loader.style.opacity = '0';
                 iframe.style.opacity = '1';
             }
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-full md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md flex flex-col z-20">

<div className="h-14 flex items-center px-4 border-b border-zinc-800/60">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-lg" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-semibold tracking-tight uppercase">Arcade</span>
</div>
</div>

<nav className="flex-1 p-3 space-y-1 overflow-x-auto md:overflow-x-hidden md:overflow-y-auto flex md:flex-col items-center md:items-stretch gap-2 md:gap-0">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-widest px-2 mb-2 hidden md:block mt-2">Library</div>

<button className="nav-item group w-auto md:w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg bg-zinc-800/80 text-zinc-100 transition-all duration-200 text-left flex-shrink-0" onclick="loadGame('https://dogeminer.se', this)">
<div className="w-6 h-6 flex items-center justify-center rounded-md bg-zinc-700/50 text-zinc-300 group-hover:text-zinc-100 transition-colors">
<iconify-icon className="text-base" icon="solar:gamepad-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Doge Miner</span>
</button>

<button className="nav-item group w-auto md:w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 transition-all duration-200 text-left flex-shrink-0" onclick="loadGame('https://play.js13kgames.com/spacebar-clicker/', this)">
<div className="w-6 h-6 flex items-center justify-center rounded-md bg-zinc-800/0 group-hover:bg-zinc-700/50 text-zinc-500 group-hover:text-zinc-300 transition-colors">
<iconify-icon className="text-base" icon="solar:keyboard-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-medium">Space Bar Clicker</span>
</button>
</nav>

<div className="p-4 border-t border-zinc-800/60 hidden md:block">
<div className="flex items-center gap-3 px-2 py-1.5 rounded-md hover:bg-zinc-800/40 transition-colors cursor-pointer text-sm text-zinc-400">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500"></div>
<span className="truncate font-medium">Guest User</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-[calc(100vh-auto)] md:h-full relative bg-zinc-950">

<header className="h-14 flex-shrink-0 border-b border-zinc-800/60 flex items-center justify-between px-6 bg-zinc-950/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<span className="text-zinc-100 font-medium" id="current-game-title">Doge Miner</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800/50 text-xs border border-zinc-700/50 text-zinc-500">Playing</span>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center justify-center" onclick="toggleFullscreen()" title="Fullscreen">
<iconify-icon className="text-lg" icon="solar:maximize-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 p-2 md:p-6 overflow-hidden flex flex-col relative group">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>
<div className="w-full h-full rounded-lg md:rounded-xl border border-zinc-800/80 bg-black overflow-hidden shadow-2xl relative ring-1 ring-white/5 transition-all duration-300" id="frame-container">

<div className="absolute inset-0 bg-zinc-950 flex flex-col items-center justify-center z-10 transition-opacity duration-300 pointer-events-none" id="loading-overlay">
<iconify-icon className="text-2xl text-zinc-500 animate-spin mb-3" icon="solar:spinner-linear"></iconify-icon>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Connecting</span>
</div>
<iframe allow="autoplay; fullscreen" className="w-full h-full border-none opacity-0 transition-opacity duration-500 ease-in-out" id="game-frame" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" src="https://dogeminer.se">
</iframe>
</div>
</div>
</main>


    </>
  );
}
