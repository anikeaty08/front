import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Interaction Logic
        let scanCount = 3;

        function takeScan() {
            // Flash Effect
            const flash = document.getElementById('flash-overlay');
            flash.classList.remove('flash-active');
            void flash.offsetWidth; // trigger reflow
            flash.classList.add('flash-active');

            // Sound feedback logic would go here

            // Update Counter
            scanCount++;
            const counter = document.getElementById('scan-count');
            counter.innerText = scanCount;
            counter.classList.add('scale-125', 'bg-white', 'text-indigo-600');
            
            setTimeout(() => {
                counter.classList.remove('scale-125', 'bg-white', 'text-indigo-600');
            }, 200);

            // Update Status Toast
            const toast = document.getElementById('status-toast');
            const originalContent = toast.innerHTML;
            
            toast.innerHTML = `
                <div class="flex items-center gap-2">
                    <iconify-icon icon="solar:check-circle-bold" class="text-green-400"></iconify-icon>
                    <p class="text-xs font-medium text-white tracking-wide">Scanned successfully</p>
                </div>
            `;
            
            // Revert toast after 2s
            setTimeout(() => {
                toast.innerHTML = originalContent;
            }, 2000);
        }

        function setMode(btn) {
            // Remove active class from all buttons
            document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
            // Add to clicked
            btn.classList.add('active');

            // Simulate mode change feedback
            const laser = document.getElementById('scan-laser');
            laser.style.display = 'none';
            setTimeout(() => laser.style.display = 'block', 100);
        }

        function toggleGrid(btn) {
            const grid = document.getElementById('grid-lines');
            const isVisible = grid.style.opacity === '1';
            grid.style.opacity = isVisible ? '0' : '1';
            
            if(!isVisible) {
                btn.classList.remove('text-neutral-400');
                btn.classList.add('text-indigo-400');
            } else {
                btn.classList.add('text-neutral-400');
                btn.classList.remove('text-indigo-400');
            }
        }

        function toggleAuto(btn) {
            const span = btn.querySelector('span');
            if(span.innerText === 'AUTO') {
                span.innerText = 'MANUAL';
                btn.classList.remove('text-indigo-400');
                btn.classList.add('text-yellow-400');
            } else {
                span.innerText = 'AUTO';
                btn.classList.remove('text-yellow-400');
                btn.classList.add('text-indigo-400');
            }
        }

        function toggleState(btn, activeClass, inactiveClass) {
            if(btn.classList.contains(inactiveClass)) {
                btn.classList.remove(inactiveClass);
                btn.classList.add(activeClass);
            } else {
                btn.classList.remove(activeClass);
                btn.classList.add(inactiveClass);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 bg-white opacity-0 z-50 pointer-events-none" id="flash-overlay"></div>

<aside className="hidden md:flex w-72 flex-col border-r border-white/5 bg-neutral-900/40 backdrop-blur-xl z-20">
<div className="p-6">
<div className="flex items-center gap-3 mb-8 cursor-pointer group">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center border border-white/10 shadow-lg group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors" icon="solar:scanner-linear" width="20"></iconify-icon>
</div>
<div>
<h1 className="text-sm font-medium tracking-wide text-white">SCANNER</h1>
<p className="text-[10px] text-neutral-500 font-medium tracking-tight">PRO VERSION</p>
</div>
</div>
<nav className="space-y-1.5">
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 text-white text-sm border border-white/5 shadow-sm">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
                    New Scan
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-sm border border-transparent hover:border-white/5">
<iconify-icon icon="solar:folder-with-files-linear" width="18"></iconify-icon>
                    All Documents
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-sm border border-transparent hover:border-white/5">
<iconify-icon icon="solar:bookmark-linear" width="18"></iconify-icon>
                    Saved
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-sm border border-transparent hover:border-white/5">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </button>
</nav>
</div>
<div className="mt-auto p-6 border-t border-white/5">
<div className="flex items-center justify-between group cursor-pointer p-2 -m-2 rounded-lg hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs font-medium text-white ring-2 ring-transparent group-hover:ring-neutral-700 transition-all">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white group-hover:text-indigo-300 transition-colors">John Doe</span>
<span className="text-[10px] text-neutral-500">Premium Plan</span>
</div>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 relative flex flex-col h-full bg-black">

<header className="absolute top-0 left-0 right-0 z-30 p-4 md:p-6 flex justify-between items-center bg-gradient-to-b from-black/90 via-black/40 to-transparent">

<div className="md:hidden flex items-center gap-2">
<div className="w-7 h-7 rounded-md bg-neutral-900 flex items-center justify-center border border-white/10">
<iconify-icon className="text-white" icon="solar:scanner-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4 md:gap-5 mx-auto md:mx-0 md:ml-auto bg-neutral-900/60 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 shadow-2xl">
<button aria-label="Flash" className="text-neutral-400 hover:text-white transition-colors btn-press" onclick="toggleState(this, 'text-yellow-400', 'text-neutral-400')">
<iconify-icon icon="solar:flash-linear" width="20"></iconify-icon>
</button>
<div className="w-px h-3 bg-white/10"></div>
<button aria-label="Auto Mode" className="text-indigo-400 btn-press" onclick="toggleAuto(this)">
<span className="text-[10px] font-semibold tracking-wider">AUTO</span>
</button>
<div className="w-px h-3 bg-white/10"></div>
<button aria-label="Grid" className="text-neutral-400 hover:text-white transition-colors btn-press" onclick="toggleGrid(this)">
<iconify-icon icon="solar:grid-frame-linear" width="20"></iconify-icon>
</button>
<div className="w-px h-3 bg-white/10"></div>
<button aria-label="More" className="text-neutral-400 hover:text-white transition-colors btn-press">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="md:hidden">
<button className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 text-white text-xs">JD</button>
</div>
</header>

<div className="relative flex-1 bg-neutral-900 overflow-hidden group cursor-crosshair" id="camera-area">

<img alt="Camera Feed" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay md:opacity-100 md:mix-blend-normal transition-opacity duration-700" src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{filter: 'contrast(1.1) brightness(0.9)'}}/>

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6 md:p-12">
<div className="relative w-full max-w-[85%] aspect-[3/4] md:max-w-md md:aspect-[1/1.414] rounded-lg transition-transform duration-300" id="scanner-frame">

<div className="absolute left-0 right-0 h-0.5 z-10 scan-line rounded-full" id="scan-laser"></div>

<div className="viewfinder-corner border-t-2 border-l-2 rounded-tl-2xl top-0 left-0"></div>
<div className="viewfinder-corner border-t-2 border-r-2 rounded-tr-2xl top-0 right-0"></div>
<div className="viewfinder-corner border-b-2 border-l-2 rounded-bl-2xl bottom-0 left-0"></div>
<div className="viewfinder-corner border-b-2 border-r-2 rounded-br-2xl bottom-0 right-0"></div>

<div className="absolute top-[20%] left-6 right-6 h-3 bg-indigo-500/20 rounded-sm border border-indigo-500/30"></div>
<div className="absolute top-[25%] left-6 right-10 h-3 bg-indigo-500/20 rounded-sm border border-indigo-500/30"></div>
<div className="absolute top-[30%] left-6 right-16 h-3 bg-indigo-500/20 rounded-sm border border-indigo-500/30"></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300" id="grid-lines">
<div className="w-full h-full border-l border-r border-white/5 grid grid-cols-3 grid-rows-3">
<div className="border border-white/5"></div><div className="border border-white/5"></div><div className="border border-white/5"></div>
<div className="border border-white/5"></div><div className="border border-white/5"></div><div className="border border-white/5"></div>
<div className="border border-white/5"></div><div className="border border-white/5"></div><div className="border border-white/5"></div>
</div>
</div>

<div className="absolute top-28 md:top-32 left-1/2 -translate-x-1/2 px-5 py-2.5 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl transition-all duration-300 opacity-100 transform translate-y-0" id="status-toast">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
<p className="text-xs font-medium text-white tracking-wide whitespace-nowrap">Detecting document...</p>
</div>
</div>
</div>

<div className="relative z-20 glass-panel pb-10 pt-6 px-6 flex flex-col items-center shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">

<div className="w-full max-w-lg mx-auto mb-8 overflow-hidden relative">

<div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-900/80 to-transparent z-10 pointer-events-none md:hidden"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-neutral-900/80 to-transparent z-10 pointer-events-none md:hidden"></div>
<div className="overflow-x-auto hide-scrollbar flex justify-center">
<div className="flex items-center gap-10 px-8 min-w-max" id="mode-container">
<button className="mode-btn text-neutral-500 text-[10px] font-bold tracking-[0.15em] hover:text-neutral-300 py-3 uppercase" onclick="setMode(this)">Translate</button>
<button className="mode-btn active text-neutral-500 text-[10px] font-bold tracking-[0.15em] hover:text-neutral-300 py-3 uppercase" onclick="setMode(this)">Document</button>
<button className="mode-btn text-neutral-500 text-[10px] font-bold tracking-[0.15em] hover:text-neutral-300 py-3 uppercase" onclick="setMode(this)">ID Card</button>
<button className="mode-btn text-neutral-500 text-[10px] font-bold tracking-[0.15em] hover:text-neutral-300 py-3 uppercase" onclick="setMode(this)">QR Code</button>
</div>
</div>
</div>

<div className="w-full max-w-xl mx-auto grid grid-cols-3 items-center">

<div className="justify-self-start pl-2 md:pl-0">
<button className="relative group w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all btn-press">
<img alt="Gallery" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-colors">
<span className="bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full absolute bottom-1 right-1 shadow-lg transform scale-100 transition-transform" id="scan-count">3</span>
</div>
</button>
</div>

<div className="justify-self-center">
<button className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center group outline-none focus:outline-none btn-press transition-transform" onclick="takeScan()">

<div className="absolute inset-0 rounded-full border-[4px] border-white/20 group-hover:border-white/40 transition-colors"></div>

<div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-[0.96] transition-all duration-300"></div>
</button>
</div>

<div className="justify-self-end pr-2 md:pr-0">
<button className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-white border border-white/10 transition-colors btn-press group">
<iconify-icon className="group-hover:text-green-400 transition-colors" icon="solar:check-read-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="w-16 h-1 bg-neutral-800 rounded-full mt-8 opacity-60"></div>
</div>
</main>

<aside className="hidden xl:flex w-80 flex-col border-l border-white/5 bg-neutral-900/40 backdrop-blur-xl z-20">
<div className="p-6 border-b border-white/5 flex justify-between items-center">
<h2 className="text-sm font-medium tracking-tight text-white">Recent Scans</h2>
<button className="text-neutral-500 hover:text-white transition-colors p-1 rounded hover:bg-white/5">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-2 hide-scrollbar" id="recent-list">

<div className="group p-3 rounded-xl bg-white/[0.08] border border-indigo-500/30 transition-all cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-0.5 bg-indigo-500"></div>
<div className="flex gap-3">
<div className="w-10 h-14 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 relative">
<img alt="Scan" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
<h3 className="text-xs font-medium text-white truncate">Invoice_003.pdf</h3>
<p className="text-[10px] text-neutral-500">Just now • 1.2 MB</p>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-white">
<iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group p-3 rounded-xl border border-transparent hover:bg-white/5 hover:border-white/5 transition-all cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-14 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 relative flex items-center justify-center border border-white/5">
<iconify-icon className="text-neutral-500" icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
<h3 className="text-xs font-medium text-neutral-300 truncate group-hover:text-white">Contract_Draft.pdf</h3>
<p className="text-[10px] text-neutral-500">2 hours ago • 840 KB</p>
</div>
</div>
</div>

<div className="group p-3 rounded-xl border border-transparent hover:bg-white/5 hover:border-white/5 transition-all cursor-pointer">
<div className="flex gap-3">
<div className="w-10 h-14 bg-neutral-800 rounded-lg overflow-hidden flex-shrink-0 relative border border-white/5">
<img alt="Scan" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
<h3 className="text-xs font-medium text-neutral-300 truncate group-hover:text-white">Meeting_Notes.jpg</h3>
<p className="text-[10px] text-neutral-500">Yesterday • 2.4 MB</p>
</div>
</div>
</div>
</div>

<div className="p-6 border-t border-white/5">
<button className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/20 btn-press">
                Export Selection (1)
                <iconify-icon icon="solar:export-linear" width="16"></iconify-icon>
</button>
</div>
</aside>


    </>
  );
}
