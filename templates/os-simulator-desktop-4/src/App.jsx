import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // --- Boot Logic ---
      function finishBoot() {
          setTimeout(() => {
              document.getElementById('boot-screen').style.opacity = '0';
              setTimeout(() => {
                  document.getElementById('boot-screen').style.display = 'none';
                  document.getElementById('login-screen').classList.remove('hidden');
                  document.getElementById('password-input').focus();
              }, 1000);
          }, 500);
      }

      // --- Login Logic ---
      function handleLogin(e) { if(e.key === 'Enter') login(); }
      function login() {
          const loginScreen = document.getElementById('login-screen');
          const desktop = document.getElementById('desktop');
          loginScreen.style.opacity = '0';
          setTimeout(() => {
              loginScreen.style.display = 'none';
              desktop.classList.remove('hidden');
              lucide.createIcons();
              startClock();
          }, 700);
      }

      // --- Window Management ---
      let highestZ = 10;
      let activeWindows = [];

      function openWindow(appId) {
          const win = document.getElementById(`win-${appId}`);
          const dot = document.getElementById(`dot-${appId}`);

          if (win) {
              win.classList.remove('hidden');
              // Trigger reflow for transition
              void win.offsetWidth;
              win.style.opacity = '1';
              win.style.transform = 'scale(1)';

              highestZ++;
              win.style.zIndex = highestZ;

              if (dot) dot.style.opacity = '1';

              bringToFront(win);
          }
      }

      function closeWindow(appId) {
          const win = document.getElementById(`win-${appId}`);
          const dot = document.getElementById(`dot-${appId}`);
          if (win) {
              win.style.opacity = '0';
              win.style.transform = 'scale(0.9)';
              setTimeout(() => {
                  win.classList.add('hidden');
                  // Reset position if desired, or keep memory
              }, 200);
              if (dot) dot.style.opacity = '0';
          }
      }

      function minimizeWindow(appId) {
          const win = document.getElementById(`win-${appId}`);
          if (win) {
              win.style.transform = 'scale(0.8) translateY(300px)';
              win.style.opacity = '0';
              setTimeout(() => {
                  win.classList.add('hidden');
                  // Keep dot active
              }, 200);
          }
      }

      function bringToFront(element) {
          highestZ++;
          element.style.zIndex = highestZ;
      }

      // --- Dragging Logic ---
      document.querySelectorAll('.app-window').forEach(win => {
          const handle = win.querySelector('.window-drag-handle');
          if(!handle) return;

          // Bring to front on click
          win.addEventListener('mousedown', () => bringToFront(win));

          let isDragging = false;
          let startX, startY, initialLeft, initialTop;

          handle.addEventListener('mousedown', (e) => {
              isDragging = true;
              startX = e.clientX;
              startY = e.clientY;
              initialLeft = win.offsetLeft;
              initialTop = win.offsetTop;
              e.preventDefault(); // prevent text selection
          });

          document.addEventListener('mousemove', (e) => {
              if (isDragging) {
                  const dx = e.clientX - startX;
                  const dy = e.clientY - startY;
                  win.style.left = `${initialLeft + dx}px`;
                  win.style.top = `${initialTop + dy}px`;
              }
          });

          document.addEventListener('mouseup', () => {
              isDragging = false;
          });
      });

      // --- Utilities ---
      function startClock() {
          const update = () => {
              const now = new Date();
              const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
              document.getElementById('clock').innerText = timeString;

              // Simple date string for tooltip or expansion
              const dateString = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
              // We could update more UI here
          };
          update();
          setInterval(update, 1000);
      }

      function toggleControlCenter() {
          const cc = document.getElementById('control-center');
          const isHidden = cc.classList.contains('hidden');
          if (isHidden) {
              cc.classList.remove('hidden');
              // reflow
              void cc.offsetWidth;
              cc.style.opacity = '1';
              cc.style.transform = 'scale(1)';
          } else {
              cc.style.opacity = '0';
              cc.style.transform = 'scale(0.95)';
              setTimeout(() => cc.classList.add('hidden'), 200);
          }
      }

      function toggleSpotlight() {
          const sl = document.getElementById('spotlight');
          const isHidden = sl.classList.contains('hidden');
          if (isHidden) {
              sl.classList.remove('hidden');
              void sl.offsetWidth;
              sl.style.opacity = '1';
              sl.style.transform = 'translate(-50%, -50%) scale(1)';
              sl.querySelector('input').focus();
          } else {
              sl.style.opacity = '0';
              sl.style.transform = 'translate(-50%, -50%) scale(0.95)';
              setTimeout(() => sl.classList.add('hidden'), 200);
          }
      }

      // Close popups when clicking outside
      document.getElementById('desktop').addEventListener('click', (e) => {
          const cc = document.getElementById('control-center');
          const sl = document.getElementById('spotlight');

          if (!cc.classList.contains('hidden') && !e.target.closest('#control-center') && !e.target.closest('.lucide-wifi') && !e.target.closest('#clock')) {
              toggleControlCenter();
          }
           if (!sl.classList.contains('hidden') && !e.target.closest('#spotlight') && !e.target.closest('.lucide-search')) {
              toggleSpotlight();
          }
      });

      lucide.createIcons();
    


      const sites={apple:{title:'apple.com',type:'mock'},appstore:{title:'apps.apple.com',type:'mock'},youtube:{title:'youtube.com',url:'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1',type:'iframe'},grab:{title:'grab.com',type:'mock'}};function loadSite(key){const home=document.getElementById('browser-home');const view=document.getElementById('browser-view');const frame=document.getElementById('browser-frame');const urlInput=document.getElementById('browser-url');home.classList.add('hidden');view.classList.remove('hidden');const site=sites[key];urlInput.value=site.title;const oldMock=document.getElementById('browser-mock-content');if(oldMock)oldMock.remove();frame.classList.add('hidden');if(site.type==='iframe'){frame.src=site.url;frame.classList.remove('hidden');}else{const mockDiv=document.createElement('div');mockDiv.id='browser-mock-content';mockDiv.className='absolute inset-0 overflow-y-auto bg-white animate-in fade-in duration-300';mockDiv.innerHTML=getMockHtml(key);view.appendChild(mockDiv);if(window.lucide)lucide.createIcons();}}function browserBack(){document.getElementById('browser-home').classList.remove('hidden');document.getElementById('browser-view').classList.add('hidden');document.getElementById('browser-frame').src='';const mock=document.getElementById('browser-mock-content');if(mock)mock.remove();document.getElementById('browser-url').value='Favorites';}function browserReload(){const frame=document.getElementById('browser-frame');if(!frame.classList.contains('hidden'))frame.src=frame.src;}function handleUrlEnter(e){if(e.key==='Enter'){const val=e.target.value.toLowerCase();if(val.includes('youtube'))loadSite('youtube');else if(val.includes('app'))loadSite('appstore');else if(val.includes('grab'))loadSite('grab');else loadSite('apple');}}function getMockHtml(key){if(key==='apple')return `<div class="bg-black text-white min-h-full font-sans"><div class="flex justify-center py-4 bg-[#1d1d1f] text-xs gap-6 text-gray-300"><span>Store</span><span>Mac</span><span>iPad</span><span>iPhone</span><span>Watch</span><span>AirPods</span></div><div class="flex flex-col items-center pt-16 pb-8 text-center bg-black"><h1 class="text-5xl font-semibold mb-2">iPhone 15 Pro</h1><p class="text-2xl text-zinc-400 mb-8">Titanium. So strong. So light. So Pro.</p><div class="flex gap-4"><button class="bg-blue-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-500">Learn more</button><button class="border border-blue-600 text-blue-500 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-900/20">Buy</button></div><img src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80" class="mt-10 w-[600px] object-cover rounded-t-3xl opacity-90"></div><div class="bg-[#f5f5f7] text-black py-20 text-center"><h2 class="text-4xl font-semibold mb-4">MacBook Air 15"</h2><p class="text-xl mb-6">Impressively big. Impossibly thin.</p><img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=800&q=80" class="mx-auto w-[500px] shadow-2xl rounded-xl"></div></div>`;if(key==='appstore')return `<div class="bg-[#1c1c1e] min-h-full text-white p-8 font-sans"><div class="mb-6 pb-4 border-b border-white/10 flex justify-between items-end"><div><div class="text-xs text-zinc-400 font-semibold uppercase mb-1">THURSDAY 24 OCTOBER</div><h1 class="text-4xl font-bold">Today</h1></div><div class="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-xs font-bold">JD</div></div><div class="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl mb-8 group cursor-pointer transition-transform hover:scale-[1.02]"><img src="https://images.unsplash.com/photo-1556656793-02715d8dd660?w=800&q=80" class="absolute inset-0 w-full h-full object-cover"><div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div><div class="absolute bottom-0 left-0 p-6"><div class="text-xs font-bold text-zinc-300 uppercase mb-2">MAJOR UPDATE</div><h2 class="text-3xl font-bold mb-2">Clash of Clans</h2><p class="text-zinc-300 mb-4">Explore the new Town Hall 16 update.</p><div class="flex items-center gap-4"><img src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=100&q=80" class="w-12 h-12 rounded-xl bg-gray-800 object-cover"><div class="flex-1"><div class="font-bold text-sm">Clash of Clans</div><div class="text-xs text-zinc-400">Strategy</div></div><button class="bg-white/20 backdrop-blur-md text-white px-6 py-1.5 rounded-full font-bold text-sm uppercase">Get</button></div></div></div><div class="bg-[#2c2c2e] rounded-xl p-4 flex items-center gap-4 mb-4"><div class="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center"><i data-lucide="check-square" class="w-8 h-8 text-white"></i></div><div class="flex-1"><div class="font-bold">Linear</div><div class="text-sm text-zinc-400">The issue tracker you'll love.</div></div><button class="bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-bold uppercase">Open</button></div></div>`;if(key==='grab')return `<div class="bg-white min-h-full font-sans text-zinc-900"><div class="bg-[#00B14F] text-white p-4 flex justify-between items-center shadow-md"><span class="text-2xl font-bold tracking-tight">Grab</span><div class="space-x-4 text-sm font-medium"><span>Food</span><span>Mart</span><span>Express</span></div></div><div class="p-10 text-center bg-green-50"><h1 class="text-4xl font-bold mb-4 text-[#00B14F]">Everyday Everything.</h1><p class="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto">From food delivery to ride-hailing, Grab is Southeast Asia's leading superapp.</p><div class="flex justify-center gap-8"><div class="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 w-32 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow cursor-pointer"><div class="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-xl font-bold">🍔</div><span class="font-semibold">Food</span></div><div class="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 w-32 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow cursor-pointer"><div class="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl font-bold">🚗</div><span class="font-semibold">Car</span></div><div class="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 w-32 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow cursor-pointer"><div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">📦</div><span class="font-semibold">Express</span></div></div></div></div>`;return '';}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-1000" id="boot-screen">
<div className="mb-12 text-5xl font-medium tracking-tighter text-white">
        OS
      </div>
<div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-white rounded-full animate-load" onanimationend="finishBoot()"></div>
</div>
</div>

<div className="hidden absolute inset-0 z-[90] bg-cover bg-center flex flex-col items-center justify-center transition-opacity duration-700" id="login-screen" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>
<div className="absolute inset-0 bg-black/40 backdrop-blur-xl"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-zinc-200 mb-6 shadow-2xl flex items-center justify-center text-4xl overflow-hidden">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;h=200&amp;fit=crop"/>
</div>
<h2 className="text-xl font-medium tracking-tight mb-6 drop-shadow-md">
          Guest User
        </h2>
<div className="glass-light p-1 rounded-full flex items-center border border-white/10 w-48">
<input className="bg-transparent border-none outline-none text-xs text-center w-full px-3 text-white placeholder-zinc-400" id="password-input" onkeypress="handleLogin(event)" placeholder="Enter Password" type="password"/>
<button className="p-1 rounded-full hover:bg-white/20 transition-colors" onclick="login()">
<i className="w-4 h-4 text-white" data-lucide="arrow-right"></i>
</button>
</div>
<p className="mt-4 text-[10px] text-zinc-400 tracking-wide cursor-pointer hover:text-white transition-colors">
          Press Enter to Login
        </p>
</div>
</div>

<div className="hidden h-full w-full relative bg-cover bg-center overflow-hidden" id="desktop" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}>

<div className="absolute top-0 w-full h-8 glass flex items-center justify-between px-4 z-50 border-b border-white/5 text-xs font-medium">
<div className="flex items-center gap-4">
<div className="font-bold tracking-tight text-sm hover:text-white/80 cursor-default">
            OS
          </div>
<div className="font-medium hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            Finder
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            File
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            Edit
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            View
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            Go
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            Window
          </div>
<div className="hover:bg-white/10 px-2 py-0.5 rounded cursor-default hidden sm:block">
            Help
          </div>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-300" data-lucide="battery-medium"></i>
<i className="w-4 h-4 text-zinc-300 cursor-pointer" data-lucide="wifi" onclick="toggleControlCenter()"></i>
<i className="w-4 h-4 text-zinc-300 cursor-pointer" data-lucide="search" onclick="toggleSpotlight()"></i>
<div className="ml-2 hover:bg-white/10 px-2 py-0.5 rounded cursor-pointer" id="clock" onclick="toggleControlCenter()">
            12:00 PM
          </div>
</div>
</div>

<div className="absolute top-10 left-4 grid grid-cols-1 gap-4 z-0">
<div className="group flex flex-col items-center gap-1 w-20 cursor-pointer" ondblclick="openWindow('finder')">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
<i className="w-6 h-6 text-blue-300 fill-blue-500/50" data-lucide="folder"></i>
</div>
<span className="text-[10px] bg-black/20 px-1.5 rounded text-white shadow-sm font-medium">
            Projects
          </span>
</div>
<div className="group flex flex-col items-center gap-1 w-20 cursor-pointer" ondblclick="openWindow('textedit')">
<div className="w-12 h-12 bg-zinc-700/50 rounded-lg border border-zinc-500/30 flex items-center justify-center group-hover:bg-zinc-700/70 transition-colors backdrop-blur-sm">
<i className="w-6 h-6 text-zinc-300" data-lucide="file-text"></i>
</div>
<span className="text-[10px] bg-black/20 px-1.5 rounded text-white shadow-sm font-medium">
            Notes.txt
          </span>
</div>
</div>

<div className="absolute inset-0 pointer-events-none z-10" id="windows-container">

<div className="app-window absolute w-[700px] h-[450px] bg-[#1e1e20]/90 backdrop-blur-2xl rounded-xl hidden flex flex-col overflow-hidden pointer-events-auto top-20 left-20 transition-transform duration-200" id="win-finder" style={{opacity: '0', transform: 'scale(0.95)'}}>

<div className="flex h-full">

<div className="w-48 bg-zinc-900/50 border-r border-white/5 flex flex-col p-3 pt-10">
<div className="text-[10px] font-semibold text-zinc-500 mb-2 px-2 uppercase tracking-wider">
                Favorites
              </div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-white/10 cursor-default">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="hard-drive"></i>
<span className="text-xs font-medium">Macintosh HD</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-default text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="monitor"></i>
<span className="text-xs font-medium">Desktop</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-default text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="download"></i>
<span className="text-xs font-medium">Downloads</span>
</div>
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-white/5 cursor-default text-zinc-400 hover:text-zinc-200 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="image"></i>
<span className="text-xs font-medium">Pictures</span>
</div>
</div>

<div className="flex-1 flex flex-col">

<div className="h-10 border-b border-white/5 flex items-center px-4 justify-between window-drag-handle cursor-default">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80 hover:bg-red-500 border border-transparent hover:text-black/50 flex items-center justify-center cursor-pointer" onclick="closeWindow('finder')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 hover:bg-yellow-500 border border-transparent cursor-pointer" onclick="minimizeWindow('finder')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80 hover:bg-green-500 border border-transparent cursor-pointer"></div>
</div>
<div className="text-xs font-medium text-zinc-400">Projects</div>
<div className="w-4"></div>
</div>

<div className="flex-1 p-4 grid grid-cols-4 gap-4 content-start overflow-y-auto">
<div className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<i className="w-10 h-10 text-blue-400 fill-blue-400/20" data-lucide="folder"></i>
<span className="text-xs text-center text-zinc-300">
                    Design System
                  </span>
</div>
<div className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<i className="w-10 h-10 text-yellow-400" data-lucide="file-code"></i>
<span className="text-xs text-center text-zinc-300">
                    index.js
                  </span>
</div>
<div className="flex flex-col items-center gap-2 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
<i className="w-10 h-10 text-purple-400" data-lucide="file-image"></i>
<span className="text-xs text-center text-zinc-300">
                    mockup.png
                  </span>
</div>
</div>
</div>
</div>
</div>

<div className="app-window absolute w-[800px] h-[550px] bg-[#1e1e20]/95 backdrop-blur-2xl rounded-xl hidden flex flex-col overflow-hidden pointer-events-auto top-10 left-32 transition-transform duration-200" id="win-browser" style={{opacity: '0', transform: 'scale(0.95)'}}>
<div className="h-10 bg-[#27272a] border-b border-white/5 flex items-center px-4 gap-4 window-drag-handle shrink-0">
<div className="flex gap-2 group">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80 group-hover:bg-red-500 cursor-pointer" onclick="closeWindow('browser')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500 cursor-pointer" onclick="minimizeWindow('browser')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80 group-hover:bg-green-500 cursor-pointer"></div>
</div>
<div className="flex gap-3 text-zinc-400">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="chevron-left" onclick="browserBack()"></i>
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors opacity-50" data-lucide="chevron-right"></i>
<i className="w-3.5 h-3.5 hover:text-white cursor-pointer transition-colors" data-lucide="rotate-cw" onclick="browserReload()"></i>
</div>
<div className="flex-1 flex justify-center">
<input className="bg-zinc-800/80 rounded-md w-full max-w-md h-6 px-3 text-[11px] text-zinc-300 outline-none focus:ring-1 focus:ring-white/20 text-center transition-all placeholder-zinc-500 shadow-inner" id="browser-url" onkeydown="handleUrlEnter(event)" placeholder="Search or type URL" type="text" value="Favorites"/>
</div>
<div className="w-16 flex justify-end gap-3 text-zinc-400">
<i className="w-4 h-4 hover:text-white cursor-pointer transition-colors" data-lucide="plus"></i>
</div>
</div>
<div className="flex-1 bg-[#1e1e20] relative overflow-hidden" id="browser-content">
<div className="absolute inset-0 flex flex-col items-center justify-center p-10 pb-20 fade-in" id="browser-home">
<div className="text-3xl font-semibold text-white/90 mb-10 tracking-tight">
                Favorites
              </div>
<div className="grid grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-3 group cursor-pointer" onclick="loadSite('apple')">
<div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
<i className="w-8 h-8 text-black fill-current" data-lucide="apple"></i>
</div>
<span className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                    Apple
                  </span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer" onclick="loadSite('appstore')">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
<i className="w-8 h-8 text-white" data-lucide="app-window"></i>
</div>
<span className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                    App Store
                  </span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer" onclick="loadSite('youtube')">
<div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
<i className="w-8 h-8 text-red-600" data-lucide="youtube"></i>
</div>
<span className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                    YouTube
                  </span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer" onclick="loadSite('grab')">
<div className="w-16 h-16 rounded-2xl bg-[#00B14F] flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
<span className="font-bold text-white text-2xl tracking-tighter">
                      Grab
                    </span>
</div>
<span className="text-[11px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                    Grab
                  </span>
</div>
</div>
</div>
<div className="absolute inset-0 bg-white hidden flex flex-col" id="browser-view">
<iframe className="flex-1 w-full h-full border-none hidden" id="browser-frame" src=""></iframe>
</div>
</div>
</div>

<div className="app-window absolute w-[600px] h-[400px] bg-[#1e1e20]/90 backdrop-blur-2xl rounded-xl hidden flex flex-col overflow-hidden pointer-events-auto top-24 left-40 transition-transform duration-200" id="win-settings" style={{opacity: '0', transform: 'scale(0.95)'}}>
<div className="flex h-full">
<div className="w-1/3 bg-zinc-900/30 border-r border-white/5 p-4 pt-10 flex flex-col gap-1 window-drag-handle">
<div className="flex items-center gap-3 p-2 bg-blue-500/10 rounded-md text-blue-400 text-xs font-medium">
<i className="w-4 h-4" data-lucide="wifi"></i>
                Network
              </div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md text-zinc-400 text-xs font-medium transition-colors">
<i className="w-4 h-4" data-lucide="bluetooth"></i>
                Bluetooth
              </div>
<div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-md text-zinc-400 text-xs font-medium transition-colors">
<i className="w-4 h-4" data-lucide="monitor"></i>
                Display
              </div>
</div>
<div className="flex-1 p-8 pt-10">
<h2 className="text-lg font-medium mb-6">Wi-Fi</h2>
<div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-white/5 mb-4">
<span className="text-xs font-medium">Wi-Fi</span>
<div className="relative inline-block w-10 h-5 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-700 appearance-none cursor-pointer transition-all duration-200" id="wifi-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-700 cursor-pointer transition-colors duration-200" htmlFor="wifi-toggle"></label>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="wifi"></i>
<span className="text-xs">Home_5G</span>
</div>
<i className="w-3 h-3 text-zinc-500" data-lucide="lock"></i>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-white/5 cursor-pointer">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="wifi"></i>
<span className="text-xs">Office_Guest</span>
</div>
<i className="w-3 h-3 text-zinc-500" data-lucide="lock"></i>
</div>
</div>
</div>
</div>
<div className="absolute top-0 w-full h-8 flex items-center px-3 window-drag-handle">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onclick="closeWindow('settings')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 cursor-pointer" onclick="minimizeWindow('settings')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80 cursor-pointer"></div>
</div>
</div>
</div>

<div className="app-window absolute w-[500px] h-[320px] bg-[#101012]/95 backdrop-blur-md rounded-xl hidden flex flex-col overflow-hidden pointer-events-auto top-32 left-1/3 transition-transform duration-200 border border-zinc-800" id="win-terminal" style={{opacity: '0', transform: 'scale(0.95)'}}>
<div className="h-8 bg-[#1e1e20] border-b border-zinc-800 flex items-center px-3 window-drag-handle">
<div className="flex gap-2 mr-4">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80 cursor-pointer" onclick="closeWindow('terminal')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 cursor-pointer" onclick="minimizeWindow('terminal')"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80 cursor-pointer"></div>
</div>
<div className="text-[10px] text-zinc-400 font-mono">
              user — -zsh — 80x24
            </div>
</div>
<div className="flex-1 p-2 font-mono text-xs text-green-400 overflow-y-auto">
<p className="mb-1">
<span className="text-blue-400">~</span>
<span className="text-purple-400">➜</span>
              ls -la
            </p>
<p className="text-zinc-400 mb-2">
              drwxr-xr-x 5 user staff 160 Oct 24 10:00 Projects
            </p>
<p className="mb-1">
<span className="text-blue-400">~</span>
<span className="text-purple-400">➜</span>
              echo "Hello World"
            </p>
<p className="text-white mb-2">Hello World</p>
<div className="flex items-center">
<span className="text-blue-400 mr-2">~</span>
<span className="text-purple-400 mr-2">➜</span>
<span className="w-2 h-4 bg-zinc-500 animate-pulse block"></span>
</div>
</div>
</div>
</div>

<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] glass-panel rounded-xl flex flex-col z-[60] hidden transition-all duration-200 opacity-0 scale-95" id="spotlight">
<div className="flex items-center p-4 gap-3 border-b border-white/5">
<i className="w-6 h-6 text-zinc-400" data-lucide="search"></i>
<input autofocus="" className="bg-transparent border-none outline-none text-xl w-full text-white placeholder-zinc-500" placeholder="Spotlight Search" type="text"/>
</div>
<div className="p-2">
<div className="px-3 py-2 hover:bg-blue-500 rounded-lg text-sm text-zinc-300 hover:text-white cursor-pointer flex justify-between group transition-colors" onclick="openWindow('browser'); toggleSpotlight();">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="globe"></i>
              Safari
            </div>
<span className="text-xs text-zinc-500 group-hover:text-blue-200">
              Application
            </span>
</div>
<div className="px-3 py-2 hover:bg-blue-500 rounded-lg text-sm text-zinc-300 hover:text-white cursor-pointer flex justify-between group transition-colors" onclick="openWindow('settings'); toggleSpotlight();">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="settings"></i>
              Settings
            </div>
<span className="text-xs text-zinc-500 group-hover:text-blue-200">
              System
            </span>
</div>
</div>
</div>

<div className="absolute top-10 right-4 w-80 glass-panel rounded-2xl p-4 z-[60] hidden transition-all duration-200 opacity-0 scale-95 origin-top-right flex flex-col gap-4" id="control-center">
<div className="grid grid-cols-2 gap-3">
<div className="bg-black/20 rounded-xl p-3 flex flex-col gap-2">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="wifi"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold">Wi-Fi</span>
<span className="text-[10px] text-zinc-400">Home_5G</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="bluetooth"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-semibold">Bluetooth</span>
<span className="text-[10px] text-zinc-400">On</span>
</div>
</div>
</div>
<div className="bg-black/20 rounded-xl p-3 flex flex-col justify-center gap-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700/50 flex items-center justify-center">
<i className="w-4 h-4 text-zinc-300" data-lucide="moon"></i>
</div>
<span className="text-xs font-medium">Focus</span>
</div>
</div>
</div>
<div className="bg-black/20 rounded-xl p-3">
<div className="text-[10px] font-semibold text-zinc-400 mb-2 uppercase tracking-wide">
            Display
          </div>
<input className="w-full h-1 bg-zinc-600 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="80"/>
</div>
<div className="bg-black/20 rounded-xl p-3">
<div className="text-[10px] font-semibold text-zinc-400 mb-2 uppercase tracking-wide">
            Sound
          </div>
<input className="w-full h-1 bg-zinc-600 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="60"/>
</div>
</div>

<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
<div className="glass-panel px-4 py-3 rounded-2xl flex items-end gap-3 h-[68px] border border-white/10">
<div className="dock-icon group relative w-12 h-12 rounded-xl bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center cursor-pointer shadow-lg" onclick="openWindow('finder')">
<i className="w-8 h-8 text-white drop-shadow-md" data-lucide="smile"></i>
<div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/50 opacity-0 transition-opacity" id="dot-finder"></div>
</div>
<div className="dock-icon group relative w-12 h-12 rounded-xl bg-gradient-to-b from-gray-200 to-white flex items-center justify-center cursor-pointer shadow-lg" onclick="openWindow('browser')">
<i className="w-8 h-8 text-blue-500 fill-blue-500/20" data-lucide="compass"></i>
<div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/50 opacity-0 transition-opacity" id="dot-browser"></div>
</div>
<div className="dock-icon group relative w-12 h-12 rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 flex items-center justify-center cursor-pointer shadow-lg" onclick="openWindow('terminal')">
<span className="font-mono font-bold text-lg text-green-400">
              &gt;_
            </span>
<div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/50 opacity-0 transition-opacity" id="dot-terminal"></div>
</div>
<div className="dock-icon group relative w-12 h-12 rounded-xl bg-gradient-to-b from-zinc-300 to-zinc-400 flex items-center justify-center cursor-pointer shadow-lg" onclick="openWindow('settings')">
<i className="w-8 h-8 text-zinc-800" data-lucide="settings-2"></i>
<div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/50 opacity-0 transition-opacity" id="dot-settings"></div>
</div>
<div className="w-[1px] h-8 bg-white/10 mx-1"></div>
<div className="dock-icon group relative w-12 h-12 rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-800 flex items-center justify-center cursor-pointer shadow-lg border border-white/5">
<i className="w-6 h-6 text-zinc-400 group-hover:text-red-400 transition-colors" data-lucide="trash-2"></i>
</div>
</div>
</div>
</div>



    </>
  );
}
