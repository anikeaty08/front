import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
          // Modal Logic
          const modals = {
              'kits-btn': 'kits-modal',
              'colors-btn': 'colors-modal',
              'fonts-btn': 'fonts-modal',
              'tokens-btn': 'tokens-modal'
          };

          let activeModal = null;

          Object.keys(modals).forEach(btnId => {
              const btn = document.getElementById(btnId);
              const modalId = modals[btnId];
              const modal = document.getElementById(modalId);

              if (!btn || !modal) return;

              btn.addEventListener('click', (e) => {
                  e.stopPropagation();

                  if (activeModal === modalId) {
                      modal.classList.add('hidden');
                      btn.classList.remove('bg-white/10', 'text-white');
                      activeModal = null;
                  } else {
                      Object.values(modals).forEach(mId => {
                          document.getElementById(mId)?.classList.add('hidden');
                      });
                      Object.keys(modals).forEach(bId => {
                          document.getElementById(bId)?.classList.remove('bg-white/10', 'text-white');
                      });

                      modal.classList.remove('hidden');
                      btn.classList.add('bg-white/10', 'text-white');
                      activeModal = modalId;
                  }
              });

              modal.addEventListener('click', (e) => {
                  e.stopPropagation();
              });
          });

          document.getElementById('preview-wrapper').addEventListener('click', () => {
              if (activeModal) {
                  document.getElementById(activeModal).classList.add('hidden');
                  Object.keys(modals).forEach(bId => {
                      document.getElementById(bId).classList.remove('bg-white/10', 'text-white');
                  });
                  activeModal = null;
              }
          });

          // Viewport Logic
          const viewportBtn = document.getElementById('viewport-btn');
          const viewportMenu = document.getElementById('viewport-menu');
          const previewContainer = document.getElementById('preview-container');
          const previewHeader = document.getElementById('preview-header');
          const viewportLabel = document.getElementById('viewport-label').querySelector('span');

          viewportBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              viewportMenu.classList.toggle('hidden');
              viewportMenu.classList.toggle('flex');
          });

          document.addEventListener('click', () => {
              viewportMenu.classList.add('hidden');
              viewportMenu.classList.remove('flex');
          });

          window.setViewport = (mode) => {
              previewContainer.style.maxWidth = '100%';
              previewContainer.classList.remove('rounded-xl', 'border-white/10');
              previewHeader.classList.add('hidden');
              previewHeader.classList.remove('flex');

              if (mode === 'Desktop') {
                  previewContainer.style.width = '100%';
                  viewportLabel.textContent = 'Desktop';
              } else if (mode === 'Tablet') {
                  previewContainer.style.width = '768px';
                  previewContainer.classList.add('rounded-xl', 'border-white/10');
                  previewHeader.classList.remove('hidden');
                  previewHeader.classList.add('flex');
                  viewportLabel.textContent = 'Tablet';
              } else if (mode === 'Mobile') {
                  previewContainer.style.width = '375px';
                  previewContainer.classList.add('rounded-xl', 'border-white/10');
                  previewHeader.classList.remove('hidden');
                  previewHeader.classList.add('flex');
                  viewportLabel.textContent = 'Mobile';
              }
          };

          // Kit Selection Logic
          window.selectKit = (element) => {
              const allKits = document.querySelectorAll('[data-kit]');
              
              allKits.forEach(el => {
                  // Remove active styles
                  el.classList.remove('ring-2', 'ring-emerald-500', 'ring-offset-2', 'ring-offset-[#0c0c0e]', 'border-emerald-500/50');
                  el.classList.add('border-white/10');
              });

              // Add active styles to selected
              element.classList.remove('border-white/10');
              element.classList.add('ring-2', 'ring-emerald-500', 'ring-offset-2', 'ring-offset-[#0c0c0e]', 'border-emerald-500/50');
              
              // Optional: Show toast to confirm selection
              window.syncChanges();
          };


          // Sync & Toast Logic
          window.syncChanges = () => {
              const toast = document.getElementById('toast');
              toast.classList.remove('hidden');
              toast.classList.add('toast-enter', 'flex');

              // We keep the modal open for kit selection to allow browsing, otherwise close
              // In this design, usually saving closes the modal, but selecting a kit might just apply it.
              // For consistency with other modals "Save" button, we close active modal if it's not the kits modal interaction
              
              // Only close modal if explicitly requested or via save button, but for kit selection we might want to keep it.
              // However, the function is called by "Save" buttons too.
              
              // Simplified behavior: 
              setTimeout(() => {
                  toast.classList.add('hidden');
                  toast.classList.remove('toast-enter', 'flex');
              }, 3000);
          };

          if (typeof lucide !== 'undefined') {
              lucide.createIcons();
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>SiteKit AI - NeuralFlow Project</title>


<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet"/>
<style>
      body {
          font-family: 'Inter', sans-serif;
          background-color: #09090b; /* Zinc 950 */
          color: #ffffff;
          overflow: hidden;
      }

      /* Custom Scrollbar */
      .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
      }
      .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
          border-radius: 3px;
      }
      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3f3f46;
      }

      /* Animations */
      @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98) translateY(-10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
      }
      .modal-animate {
          animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      .glass-panel {
          background-color: rgba(18, 18, 18, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
      }

      /* Toast Animation */
      @keyframes slideUpFade {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
      }
      .toast-enter {
          animation: slideUpFade 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
    </style>

<nav className="h-14 border-b border-white/10 bg-[#09090b] flex items-center justify-between px-4 z-50 shrink-0 relative">

<div className="flex gap-4 items-center">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="flex w-8 h-8 items-center justify-center">
<svg className="" fill="none" height="24" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="animate-pulse" fill="white" height="8" rx="2" width="8" x="3" y="3"></rect>
<rect className="animate-pulse" fill="white" fillOpacity="0.5" height="8" rx="2" style={{animationDelay: '150ms'}} width="8" x="13" y="3"></rect>
<rect className="animate-pulse" fill="white" fillOpacity="0.5" height="8" rx="2" style={{animationDelay: '300ms'}} width="8" x="3" y="13"></rect>
<rect className="animate-pulse" fill="white" fillOpacity="0.2" height="8" rx="2" style={{animationDelay: '450ms'}} width="8" x="13" y="13"></rect>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-xs font-medium text-zinc-200">SiteKit AI</span>
<span className="text-[10px] text-zinc-500">Untitled project</span>
</div>
</div>

<div className="h-6 w-px bg-white/10 mx-1"></div>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-md hover:bg-white/5 text-zinc-500 hover:text-white transition-colors disabled:opacity-50" title="Undo">
<svg className="lucide lucide-undo-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M9 14 4 9l5-5"></path>
<path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"></path>
</svg>
</button>
<button className="p-1.5 rounded-md hover:bg-white/5 text-zinc-500 hover:text-white transition-colors disabled:opacity-50" disabled="" title="Redo">
<svg className="lucide lucide-redo-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m15 14 5-5-5-5"></path>
<path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13"></path>
</svg>
</button>
</div>
</div>

<div className="-translate-x-1/2 flex shadow-black/20 z-50 bg-[#18181b] border-white/5 border rounded-full pt-1 pr-1 pb-1 pl-1 absolute left-1/2 shadow-xl items-center">

<button className="group flex gap-2 hover:bg-white/5 transition-colors rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center" id="fonts-btn">
<svg className="lucide lucide-type w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="type" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16"></path><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path><path d="M9 20h6"></path></svg>
<span className="group-hover:text-zinc-200 transition-colors text-xs font-medium text-zinc-400">
            Fonts
          </span>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>

<button className="group flex hover:bg-white/5 transition-colors rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center" id="colors-btn">
<svg className="lucide lucide-palette group-hover:text-zinc-300 transition-colors w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 216)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="group-hover:text-zinc-200 transition-colors text-xs font-medium text-zinc-400">
            Colors
          </span>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>

<button className="group flex gap-2 hover:bg-white/5 transition-colors rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center" id="tokens-btn">
<svg className="lucide lucide-ruler group-hover:text-zinc-300 transition-colors w-[14px] h-[14px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 212, 216)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path>
<path d="m14.5 12.5 2-2"></path>
<path className="" d="m11.5 9.5 2-2"></path>
<path d="m8.5 6.5 2-2"></path>
<path d="m17.5 15.5 2-2"></path>
</svg>
<span className="group-hover:text-zinc-200 transition-colors text-xs font-medium text-zinc-400">
            Tokens
          </span>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>

<button className="group flex gap-2 hover:bg-white/5 transition-colors rounded-full pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center" id="kits-btn">
<svg className="lucide lucide-layout-template w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
            Kits
          </span>
</button>
<div className="w-px h-3 bg-white/10 mx-0.5"></div>

<button className="group flex items-center gap-2 px-4 py-1.5 rounded-full hover:bg-white/5 transition-colors">
<svg className="lucide lucide-image w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-colors" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
            Assets
          </span>
</button>
</div>

<div className="flex items-center gap-3">

<div className="relative mr-1" id="viewport-dropdown">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors group" id="viewport-btn">
<div className="flex items-center gap-2" id="viewport-label">
<svg className="lucide lucide-monitor w-3.5 h-3.5" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span>Desktop</span>
</div>
<svg className="lucide lucide-chevron-down w-3 h-3 text-zinc-500 group-hover:text-zinc-300 transition-transform duration-200" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-32 bg-[#18181b] border border-white/10 rounded-lg shadow-xl py-1 z-50 flex-col backdrop-blur-xl" id="viewport-menu">
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-200 hover:bg-white/5 hover:text-white transition-colors text-left" onclick="setViewport('Desktop')">
<svg className="lucide lucide-monitor" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
              Desktop
            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left" onclick="setViewport('Tablet')">
<svg className="lucide lucide-tablet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="16" x="4" y="2"></rect>
<line x1="12" x2="12.01" y1="18" y2="18"></line>
</svg>
              Tablet
            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-zinc-400 hover:bg-white/5 hover:text-white transition-colors text-left" onclick="setViewport('Mobile')">
<svg className="lucide lucide-smartphone" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect>
<path d="M12 18h.01"></path>
</svg>
              Mobile
            </button>
</div>
</div>
<div className="relative group">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/5 transition-colors">
<svg className="lucide lucide-history" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path>
<path d="M3 5v7h7"></path>
</svg>
<span>Revisions</span>
</button>
<div className="absolute top-full right-0 mt-2 w-80 bg-[#18181b]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden hidden group-hover:block z-[100] origin-top-right transition-all duration-200">
<div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-white/5">
<h3 className="text-xs font-semibold text-zinc-200">Recent Activity</h3>
<span className="text-[10px] font-mono text-zinc-500">Session ID: 8F3A</span>
</div>
<div className="max-h-[300px] overflow-y-auto custom-scrollbar">

<div className="p-3 border-b border-white/5 hover:bg-white/5 transition-colors group/item">
<div className="flex gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v4"></path>
<path d="M12 18v4"></path>
<path d="M4.93 4.93l2.83 2.83"></path>
<path d="M16.24 16.24l2.83 2.83"></path>
<path d="M2 12h4"></path>
<path d="M18 12h4"></path>
<path d="M4.93 19.07l2.83-2.83"></path>
<path d="M16.24 7.76l2.83-2.83"></path>
</svg>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-200">Color Palette Update</span>
<span className="text-[10px] text-zinc-500">2m ago</span>
</div>
<p className="text-[11px] text-zinc-500 leading-snug">Changed primary tokens from Purple to Emerald.</p>
<div className="flex items-center justify-between pt-1">
<span className="text-[10px] text-zinc-600">SiteKit AI</span>
<button className="opacity-0 group-hover/item:opacity-100 flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-all bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path>
<path d="M3 5v7h7"></path>
</svg>
                Restore
              </button>
</div>
</div>
</div>
</div>

<div className="p-3 border-b border-white/5 hover:bg-white/5 transition-colors group/item">
<div className="flex gap-3">
<img alt="User" className="mt-0.5 w-6 h-6 rounded-full border border-white/10 object-cover shrink-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-200">Typography Scale</span>
<span className="text-[10px] text-zinc-500">14m ago</span>
</div>
<p className="text-[11px] text-zinc-500 leading-snug">Adjusted H1 clamping values.</p>
<div className="flex items-center justify-between pt-1">
<span className="text-[10px] text-zinc-600">You</span>
<button className="opacity-0 group-hover/item:opacity-100 flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-all bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path>
<path d="M3 5v7h7"></path>
</svg>
                Restore
              </button>
</div>
</div>
</div>
</div>

<div className="p-3 hover:bg-white/5 transition-colors group/item">
<div className="flex gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<line x1="12" x2="12" y1="8" y2="16"></line>
<line x1="8" x2="16" y1="12" y2="12"></line>
</svg>
</div>
<div className="flex-1 space-y-1">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-zinc-200">Added Section</span>
<span className="text-[10px] text-zinc-500">42m ago</span>
</div>
<p className="text-[11px] text-zinc-500 leading-snug">Inserted "Pricing" component.</p>
<div className="flex items-center justify-between pt-1">
<span className="text-[10px] text-zinc-600">System</span>
<button className="opacity-0 group-hover/item:opacity-100 flex items-center gap-1 text-[10px] font-medium text-emerald-400 hover:text-emerald-300 transition-all bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20 hover:bg-emerald-500/20">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74-2.74L3 12"></path>
<path d="M3 5v7h7"></path>
</svg>
                Restore
              </button>
</div>
</div>
</div>
</div>
</div>
<div className="p-2 border-t border-white/5 bg-white/5">
<button className="w-full py-1.5 text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded transition-colors">
        View All History
      </button>
</div>
</div>
</div>

<button className="px-3 py-1.5 text-xs font-medium text-black bg-white hover:bg-zinc-200 rounded transition-colors" id="publish-trigger">
          Publish
        </button>
</div>
</nav>

<div className="flex-1 flex overflow-hidden relative">

<aside className="w-[380px] flex flex-col border-r border-white/10 bg-[#0c0c0e] relative z-20 shrink-0 hidden md:flex">

<div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6 pb-40">

<div className="flex flex-col items-end gap-2">
<div className="bg-[#27272a] text-zinc-100 px-3 py-2 rounded-lg text-sm max-w-[90%] border border-white/5">
              Build an AI landing page for an AI startup
            </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-orange-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="space-y-3 max-w-[90%]">
<p className="text-sm text-zinc-300">
                I've created a stunning AI startup landing page for NeuralFlow
                AI! 🚀
              </p>
</div>
</div>

<div className="flex flex-col items-end gap-2">
<div className="bg-[#27272a] text-zinc-100 px-3 py-2 rounded-lg text-sm max-w-[90%] border border-white/5">
              Change the main colors from purple to black and green
            </div>
</div>

<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 mt-0.5">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-orange-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="space-y-4 max-w-[90%]">
<p className="text-sm text-zinc-300">
                Updated the color scheme from purple to black and green.
              </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-[#0c0c0e] border-t border-white/5">
<div className="flex flex-col gap-2">
<div className="bg-[#18181b] rounded-xl border border-white/10 p-2 focus-within:border-zinc-600 transition-colors">
<textarea className="placeholder:text-zinc-600 resize-none outline-none text-sm text-zinc-200 bg-transparent w-full pt-1 pr-1 pb-1 pl-1" placeholder="Describe changes..." rows="1"></textarea>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-2">
<button className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/5 text-zinc-400 hover:text-zinc-200 transition-colors">
<svg className="lucide lucide-paperclip w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path>
</svg>
</button>

<button className="flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-white/5 text-zinc-400 hover:text-emerald-400 transition-colors" title="AI Voice Command">
<svg className="lucide lucide-mic w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</button>
</div>
<button className="p-1.5 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
<svg className="lucide lucide-arrow-up w-3.5 h-3.5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 bg-black relative overflow-y-auto overflow-x-hidden custom-scrollbar">

<div className="hidden fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[460px] glass-panel border border-white/10 rounded-xl shadow-2xl modal-animate flex flex-col max-h-[85vh]" id="tokens-modal">
<div className="flex flex-col h-full pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-center mb-6 shrink-0">
<h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
      Global Variables
    </h3>
<button className="flex hover:bg-emerald-500/20 transition-colors text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" onclick="syncChanges()">Save</button>
</div>
<div className="overflow-y-auto custom-scrollbar pr-2 space-y-6">
<div className="">
<p className="text-[11px] text-zinc-400 font-medium mb-4">
        Spacing Variables
      </p>
<div className="space-y-4">
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing XS
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 8%, #27272a 8%, #27272a 100%)'}} type="range" value="8"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="8px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing SM
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 16%, #27272a 16%, #27272a 100%)'}} type="range" value="16"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="16px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing MD
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 24%, #27272a 24%, #27272a 100%)'}} type="range" value="24"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="24px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing LG
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 32%, #27272a 32%, #27272a 100%)'}} type="range" value="32"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="32px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing XL
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 48%, #27272a 48%, #27272a 100%)'}} type="range" value="48"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="48px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Spacing 2XL
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #10b981 0%, #10b981 64%, #27272a 64%, #27272a 100%)'}} type="range" value="64"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-emerald-500 w-full" type="text" value="64px"/>
</div>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<p className="text-[11px] text-zinc-400 font-medium mb-4">
        Border Radius
      </p>
<div className="space-y-4">
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Radius SM
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="32" min="0" style={{background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 12.5%, #27272a 12.5%, #27272a 100%)'}} type="range" value="4"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-blue-500 w-full" type="text" value="4px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Radius MD
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="32" min="0" style={{background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 25%, #27272a 25%, #27272a 100%)'}} type="range" value="8"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-blue-500 w-full" type="text" value="8px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Radius LG
          </span>
<input [&::-webkit-slider-thumb]:appearance-none="" [&::-webkit-slider-thumb]:bg-white="" [&::-webkit-slider-thumb]:h-3="" [&::-webkit-slider-thumb]:hover:scale-110"="" [&::-webkit-slider-thumb]:rounded-full="" [&::-webkit-slider-thumb]:shadow-md="" [&::-webkit-slider-thumb]:transition-transform="" [&::-webkit-slider-thumb]:w-3="" focus:outline-none="" max="32" min="0" style={{background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 50%, #27272a 50%, #27272a 100%)'}} type="range"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-blue-500 w-full" type="text" value="16px"/>
</div>
<div className="grid grid-cols-[80px_1fr_60px] gap-4 items-center group">
<span className="text-xs font-mono text-zinc-500">
            Radius Full
          </span>
<input className="w-full h-1.5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-3 [&amp;::-webkit-slider-thumb]:h-3 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:transition-transform [&amp;::-webkit-slider-thumb]:hover:scale-110" max="100" min="0" style={{background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 100%, #27272a 100%, #27272a 100%)'}} type="range" value="100"/>
<input className="bg-transparent text-right text-xs font-mono text-zinc-300 focus:outline-none border-b border-transparent focus:border-blue-500 w-full" type="text" value="9999px"/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[440px] glass-panel border border-white/10 rounded-xl shadow-2xl flex flex-col modal-animate" id="colors-modal">
<div className="p-5 space-y-6">
<div className="flex justify-between items-center mb-6 shrink-0">
<h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                Global Colors
              </h3>
<button className="flex gap-2 hover:bg-emerald-500/20 transition-colors text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" onclick="syncChanges()">Save</button>
</div>
<div className="overflow-y-auto custom-scrollbar pr-2 space-y-6">

<div>
<p className="text-[11px] text-zinc-400 font-medium mb-3 sticky top-0 bg-[#121212]/95 backdrop-blur z-10 py-1">
                  Brand Colors
                </p>
<div className="space-y-2">
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors group">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Brand Primary
                      </span>
<span className="text-[10px] text-zinc-500">
                        Accent &amp; highlights
                      </span>
</div>
<div className="flex gap-2 items-center">
<div className="text-[10px] font-mono text-zinc-500 hidden group-hover:block">
                        #f97316
                      </div>
<div className="w-8 h-6 rounded bg-[#f97316] border border-white/10 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors group">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Brand Secondary
                      </span>
<span className="text-[10px] text-zinc-500">
                        Supporting accent
                      </span>
</div>
<div className="flex gap-2 items-center">
<div className="text-[10px] font-mono text-zinc-500 hidden group-hover:block">
                        #3b82f6
                      </div>
<div className="w-8 h-6 rounded bg-[#3b82f6] border border-white/10 cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
</div>
</div>

<div>
<p className="text-[11px] text-zinc-400 font-medium mb-3 sticky top-0 bg-[#121212]/95 backdrop-blur z-10 py-1">
                  Neutral Colors
                </p>
<div className="grid grid-cols-5 gap-2">
<div className="flex flex-col items-center gap-2 p-2 rounded-lg border border-white/5 bg-white/5 hover:border-white/10">
<div className="w-full aspect-square rounded bg-[#ffffff] border border-white/10"></div>
<span className="text-[9px] text-zinc-500">White</span>
</div>
<div className="flex flex-col items-center gap-2 p-2 rounded-lg border border-white/5 bg-white/5 hover:border-white/10">
<div className="w-full aspect-square rounded bg-[#f8fafc] border border-white/10"></div>
<span className="text-[9px] text-zinc-500">Light</span>
</div>
<div className="flex flex-col items-center gap-2 p-2 rounded-lg border border-white/5 bg-white/5 hover:border-white/10">
<div className="w-full aspect-square rounded bg-[#94a3b8] border border-white/10"></div>
<span className="text-[9px] text-zinc-500">Medium</span>
</div>
<div className="flex flex-col items-center gap-2 p-2 rounded-lg border border-white/5 bg-white/5 hover:border-white/10">
<div className="w-full aspect-square rounded bg-[#334155] border border-white/10"></div>
<span className="text-[9px] text-zinc-500">Dark</span>
</div>
<div className="flex flex-col items-center gap-2 p-2 rounded-lg border border-white/5 bg-white/5 hover:border-white/10">
<div className="w-full aspect-square rounded bg-[#0f172a] border border-white/10"></div>
<span className="text-[9px] text-zinc-500">Black</span>
</div>
</div>
</div>

<div>
<p className="text-[11px] text-zinc-400 font-medium mb-3 sticky top-0 bg-[#121212]/95 backdrop-blur z-10 py-1">
                  Text Colors
                </p>
<div className="space-y-2">
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Heading Text
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#f8fafc] border border-white/10"></div>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Body Text
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#e2e8f0] border border-white/10"></div>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Muted Text
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#94a3b8] border border-white/10"></div>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Link Text
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#fb923c] border border-white/10"></div>
</div>
</div>
</div>

<div>
<p className="text-[11px] text-zinc-400 font-medium mb-3 sticky top-0 bg-[#121212]/95 backdrop-blur z-10 py-1">
                  Backgrounds
                </p>
<div className="space-y-2">
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Page
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#0f172a] border border-white/10"></div>
</div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-white/5 bg-white/5 hover:border-white/10 transition-colors">
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-200">
                        Surface
                      </span>
</div>
<div className="w-8 h-6 rounded bg-[#1e293b] border border-white/10"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[580px] glass-panel border border-white/10 rounded-xl shadow-2xl flex flex-col max-h-[85vh] modal-animate" id="fonts-modal">
<div className="p-5 flex flex-col h-full overflow-hidden">
<div className="flex justify-between items-center mb-6 shrink-0">
<h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                Global Typography
              </h3>
<button className="flex gap-2 hover:bg-emerald-500/20 transition-colors text-xs font-medium text-emerald-400 bg-emerald-500/10 border-emerald-500/20 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center" onclick="syncChanges()" style={{}}>Save<svg className="lucide lucide-save" data-icon-replaced="true" data-icon-set="lucide" data-lucide="save" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg></button>
</div>
<div className="overflow-y-auto custom-scrollbar pr-1 space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-[11px] text-zinc-400 font-medium block">
                    Heading Font Family
                  </label>
<div className="relative group">
<select className="w-full bg-[#27272a]/30 border border-white/10 text-white text-xs rounded-lg p-2.5 appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer font-medium">
<option>Inter</option>
<option>Plus Jakarta Sans</option>
<option>Space Grotesk</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<svg className="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-[11px] text-zinc-400 font-medium block">
                    Body Font Family
                  </label>
<div className="relative group">
<select className="w-full bg-[#27272a]/30 border border-white/10 text-white text-xs rounded-lg p-2.5 appearance-none focus:outline-none focus:border-emerald-500/50 transition-colors cursor-pointer font-medium">
<option>Inter</option>
<option>Roboto</option>
<option>Geist</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<svg className="lucide lucide-chevron-down" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-2 pt-2 border-t border-white/5">
<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 px-1 pb-1 text-[10px] font-medium text-zinc-500 uppercase tracking-wide">
<div>Var</div>
<div>Size</div>
<div>Line Height</div>
<div>Spacing</div>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H1</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(32px, 4vw, 50px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.1"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H2</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(28px, 3.5vw, 42px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.15"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H3</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(24px, 3vw, 36px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.2"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H4</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(20px, 2.5vw, 30px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.25"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H5</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(18px, 2vw, 24px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.3"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-bold text-zinc-200">H6</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(16px, 1.5vw, 20px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.35"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5 border-b border-white/5">
<div className="text-xs font-medium text-zinc-400">Body</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(16px, 1.2vw, 18px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.6"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="0px"/>
</div>

<div className="grid grid-cols-[60px_2fr_1fr_1fr] gap-3 items-center py-1.5">
<div className="text-xs font-medium text-zinc-400">Small</div>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="clamp(14px, 1vw, 16px)"/>
<input className="bg-[#27272a]/30 border border-white/10 rounded px-2 py-1.5 text-[10px] text-zinc-300 font-mono w-full focus:border-emerald-500/50 outline-none" type="text" value="1.5"/>
<input className="bg-transparent border border-transparent rounded px-2 py-1.5 text-[10px] text-zinc-600 font-mono w-full cursor-not-allowed" disabled="" type="text" value="-"/>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] w-[500px] glass-panel border border-white/10 rounded-xl shadow-2xl modal-animate flex flex-col max-h-[85vh]" id="kits-modal">
<div className="p-5 flex flex-col h-full bg-[#0c0c0e]">

<div className="flex justify-between items-center mb-6 shrink-0">
<h3 className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">Design Kits</h3>
<div className="flex items-center gap-4">
<button className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
<svg className="lucide lucide-square-arrow-out-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path><path d="m21 3-9 9"></path><path d="M15 3h6v6"></path></svg>
                  Export
                </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-zinc-200 text-black text-xs font-semibold rounded-md transition-colors">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  Create New
                </button>
</div>
</div>

<div className="overflow-y-auto custom-scrollbar pr-1 space-y-4 flex-1">

<div className="group relative rounded-xl border bg-[#18181b] overflow-hidden hover:border-zinc-500 transition-all cursor-pointer ring-2 ring-emerald-500 ring-offset-2 ring-offset-[#0c0c0e] border-emerald-500/50" data-kit="neural" onclick="selectKit(this)">

<div className="grid grid-cols-3 h-28 border-b border-white/5">

<div className="flex flex-col gap-2 bg-white pt-3 pr-3 pb-3 pl-3 relative gap-x-2 gap-y-2" style={{outlineOffset: '-2px !important'}}>
<div className="w-full h-1.5 bg-zinc-100 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-100 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-white border border-zinc-200 rounded text-[9px] font-semibold text-center text-black shadow-sm">Light UI</div>
</div>

<div className="bg-[#09090b] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-zinc-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#18181b] border border-white/10 rounded text-[9px] font-semibold text-center text-white">Dark UI</div>
</div>

<div className="bg-[#064e3b] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-emerald-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-emerald-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#050505] border border-white/5 rounded text-[9px] font-semibold text-center text-white">Accent</div>
</div>
</div>

<div className="p-3 flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-white">Neural Kit</h4>
<p className="text-[10px] text-zinc-500">Rounded, Clean, Tech</p>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1 rounded bg-emerald-500 text-black text-[10px] font-bold">Button</div>
<div className="flex gap-1 bg-black/40 p-1 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-[#18181b] overflow-hidden hover:border-zinc-500 transition-all cursor-pointer" data-kit="enterprise" onclick="selectKit(this)">

<div className="grid grid-cols-3 h-28 border-b border-white/5">

<div className="bg-white p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-zinc-100 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-100 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-white border border-zinc-200 rounded text-[9px] font-semibold text-center text-black shadow-sm">Light UI</div>
</div>

<div className="bg-[#09090b] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-zinc-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#18181b] border border-white/10 rounded text-[9px] font-semibold text-center text-white">Dark UI</div>
</div>

<div className="bg-[#1e3a8a] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-blue-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-blue-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#050505] border border-white/5 rounded text-[9px] font-semibold text-center text-white">Accent</div>
</div>
</div>

<div className="p-3 flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-white">Enterprise</h4>
<p className="text-[10px] text-zinc-500">Sharp, Professional, SaaS</p>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1 rounded bg-blue-600 text-white text-[10px] font-bold">Button</div>
<div className="flex gap-1 bg-black/40 p-1 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-[#18181b] overflow-hidden hover:border-zinc-500 transition-all cursor-pointer" data-kit="creative" onclick="selectKit(this)">

<div className="grid grid-cols-3 h-28 border-b border-white/5">

<div className="bg-white p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-zinc-100 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-100 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-white border border-zinc-200 rounded text-[9px] font-semibold text-center text-black shadow-sm">Light UI</div>
</div>

<div className="bg-[#09090b] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-zinc-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-zinc-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#18181b] border border-white/10 rounded text-[9px] font-semibold text-center text-white">Dark UI</div>
</div>

<div className="bg-[#581c87] p-3 flex flex-col gap-2 relative">
<div className="w-full h-1.5 bg-purple-800 rounded-full mb-1"></div>
<div className="w-1/2 h-1.5 bg-purple-800 rounded-full"></div>
<div className="mt-auto w-full py-1.5 bg-[#050505] border border-white/5 rounded text-[9px] font-semibold text-center text-white">Accent</div>
</div>
</div>

<div className="p-3 flex items-center justify-between">
<div>
<h4 className="text-sm font-semibold text-white">Creative</h4>
<p className="text-[10px] text-zinc-500">Playful, Soft, Modern</p>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1 rounded bg-purple-600 text-white text-[10px] font-bold">Button</div>
<div className="flex gap-1 bg-black/40 p-1 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full h-full flex justify-center items-start pt-8 pb-20 px-4 transition-all duration-300 ease-in-out" id="preview-wrapper">

<div className="w-full max-w-full bg-[#000000] shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top border border-white/10 relative group" id="preview-container">

<div className="hidden w-full h-8 bg-[#18181b] border-b border-white/5 items-center px-3 gap-2" id="preview-header">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded bg-black/50 text-[10px] text-zinc-500 font-medium">
<svg className="lucide lucide-lock" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                  neuralflow.ai
                </div>
</div>
</div>

<div className="w-full min-h-[100vh] bg-black text-white relative font-inter selection:bg-emerald-500/30 selection:text-emerald-200">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
<svg className="text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="m2 12 20 0"></path>
<path d="m4.93 4.93 14.14 14.14"></path>
<path d="m19.07 4.93-14.14 14.14"></path>
</svg>
</div>
<span className="text-lg font-bold tracking-tight">
                    NeuralFlow
                  </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">
                    Platform
                  </a>
<a className="hover:text-white transition-colors" href="#">
                    Solutions
                  </a>
<a className="hover:text-white transition-colors" href="#">
                    Pricing
                  </a>
<a className="hover:text-white transition-colors" href="#">
                    Docs
                  </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">
                    Sign In
                  </a>
<a className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                    Get Started
                  </a>
</div>
</nav>
<section className="relative z-10 pt-20 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                  Neural Engine v2.0 is now live
                </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                  Build intelligent apps
                  <span className="text-emerald-400/90 inline-block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent pb-2">
                    at the speed of thought
                  </span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                  Deploy autonomous AI agents that learn, adapt, and scale with
                  your infrastructure. No complex configuration required.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-all shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-10px_rgba(16,185,129,0.6)] hover:-translate-y-1">
                    Start Building Free
                  </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900/50 hover:bg-zinc-800 border border-white/10 text-white font-medium rounded-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
<svg className="text-zinc-400 group-hover:text-white transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
                    Watch Demo
                  </button>
</div>
<div className="mt-20 w-full max-w-5xl rounded-xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-50"></div>
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="ml-4 text-xs text-zinc-500 font-mono">
                      agent_config.ts
                    </div>
</div>
<div className="p-6 text-left font-mono text-sm md:text-base overflow-x-auto">
<div className="text-emerald-400">import</div>
<div className="text-white inline">{ NeuralAgent }</div>
<div className="text-emerald-400 inline">from</div>
<div className="text-orange-300 inline">'@neuralflow/sdk'</div>
                    ;

                    <div className="text-purple-400 inline">const</div>
<div className="text-blue-300 inline">agent</div>
                    =
                    <div className="text-purple-400 inline">new</div>
<div className="text-yellow-200 inline">NeuralAgent</div>
                    ({
                    <div className="pl-4">
<div className="text-blue-300">model</div>
                      :
                      <div className="text-orange-300">'gpt-4-turbo'</div>
                      ,
                      <div className="text-blue-300">capabilities</div>
                      : [
                      <div className="text-orange-300">'search'</div>
                      ,
                      <div className="text-orange-300">'vision'</div>
                      ,
                      <div className="text-orange-300">'code'</div>
                      ],
                      <div className="text-blue-300">temperature</div>
                      :
                      <div className="text-purple-400">0.7</div>
</div>
                    });

                    <div className="text-zinc-500">// Deploy to edge network</div>
<div className="text-purple-400 inline">await</div>
<div className="text-blue-300 inline">agent</div>
                    .
                    <div className="text-yellow-200 inline">deploy</div>
                    ();
                  </div>
</div>
</section>
</div>
</div>
</div>
</main>
</div>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 bg-[#18181b] border border-white/10 rounded-full shadow-2xl z-[150] hidden" id="toast">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
<svg className="text-emerald-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="text-xs font-medium text-white">
        Global styles synced successfully
      </span>
</div>



    </>
  );
}
