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



      (function() {
        // ========== NOTIFICATION TOAST FUNCTION ==========
        function showToast(message, duration = 3000) {
          const toast = document.createElement('div');
          toast.className = 'toast rounded-xl bg-zinc-900 ring-1 ring-white/10 px-4 py-3 text-sm text-zinc-200 shadow-2xl';
          toast.textContent = message;
          document.body.appendChild(toast);
          
          setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 300);
          }, duration);
        }

        // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el);
        });

        // ========== THEME TOGGLE ==========
        const themeToggle = document.getElementById('themeToggle');
        const sunIcon = document.getElementById('sunIcon');
        const moonIcon = document.getElementById('moonIcon');
        const backgroundLayer = document.getElementById('backgroundLayer');
        const lightModeBtn = document.getElementById('lightModeBtn');
        const darkModeBtn = document.getElementById('darkModeBtn');
        const systemModeBtn = document.getElementById('systemModeBtn');
        let isLightMode = false;

        function switchToLightMode() {
          isLightMode = true;
          document.body.classList.add('light-mode');
          sunIcon?.classList.add('hidden');
          moonIcon?.classList.remove('hidden');
          
          document.querySelectorAll('.theme-mode-btn').forEach(btn => btn.classList.remove('selected-style'));
          lightModeBtn?.classList.add('selected-style');
          
          backgroundLayer.innerHTML = `
            <div class="bg-gradient-to-b from-white via-gray-50 to-gray-100 absolute top-0 right-0 bottom-0 left-0"></div>
            <div class="absolute inset-0 opacity-[0.08] pointer-events-none" style="
              background-image:
                linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
              background-size: 80px 80px;
              background-position: center;
            "></div>
            <div class="absolute inset-0 pointer-events-none">
              <div class="gradient-animate absolute left-1/2 top-[-10%] -translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(99,102,241,0.15), transparent)"></div>
              <div class="gradient-animate absolute right-[10%] top-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(168,85,247,0.1), transparent); animation-delay: 2s;"></div>
              <div class="gradient-animate absolute left-[15%] bottom-[20%] h-[35rem] w-[35rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(59,130,246,0.1), transparent); animation-delay: 4s;"></div>
            </div>
          `;
        }

        function switchToDarkMode() {
          isLightMode = false;
          document.body.classList.remove('light-mode');
          sunIcon?.classList.remove('hidden');
          moonIcon?.classList.add('hidden');
          
          document.querySelectorAll('.theme-mode-btn').forEach(btn => btn.classList.remove('selected-style'));
          darkModeBtn?.classList.add('selected-style');
          
          backgroundLayer.innerHTML = `
            <div class="bg-gradient-to-b from-zinc-950 via-zinc-950 to-black absolute top-0 right-0 bottom-0 left-0"></div>
            <div class="absolute inset-0 opacity-[0.15] pointer-events-none" style="
              background-image:
                linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
              background-size: 80px 80px;
              background-position: center;
            "></div>
            <div class="absolute inset-0 pointer-events-none">
              <div class="gradient-animate absolute left-1/2 top-[-10%] -translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)"></div>
              <div class="gradient-animate absolute right-[10%] top-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(168,85,247,0.2), transparent); animation-delay: 2s;"></div>
              <div class="gradient-animate absolute left-[15%] bottom-[20%] h-[35rem] w-[35rem] rounded-full blur-3xl" style="background: radial-gradient(closest-side, rgba(59,130,246,0.2), transparent); animation-delay: 4s;"></div>
            </div>
          `;
        }

        themeToggle?.addEventListener('click', () => {
          if (isLightMode) switchToDarkMode();
          else switchToLightMode();
        });

        lightModeBtn?.addEventListener('click', () => {
          switchToLightMode();
          showToast('Switched to light mode');
        });

        darkModeBtn?.addEventListener('click', () => {
          switchToDarkMode();
          showToast('Switched to dark mode');
        });

        systemModeBtn?.addEventListener('click', () => {
          document.querySelectorAll('.theme-mode-btn').forEach(btn => btn.classList.remove('selected-style'));
          systemModeBtn.classList.add('selected-style');
          
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (isDark) switchToDarkMode();
          else switchToLightMode();
          
          showToast('Using system theme');
        });

        // ========== MOBILE MENU ==========
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn?.addEventListener('click', () => {
          mobileMenu.classList.toggle('open');
          showToast(mobileMenu.classList.contains('open') ? 'Menu opened' : 'Menu closed');
        });

        // ========== SHORTCUTS MODAL ==========
        const shortcutsBtn = document.getElementById('shortcutsBtn');
        shortcutsBtn?.addEventListener('click', () => {
          showToast('⌘+Enter: Run prompt | ⌘+K: Search | ⌘+B: Toggle builder', 4000);
        });

        // ========== PROMPT BUILDER TOGGLE ==========
        const builderToggle = document.getElementById('builderToggle');
        const builderPanel = document.getElementById('builderPanel');
        
        builderToggle?.addEventListener('click', () => {
          builderPanel.classList.toggle('hidden');
          showToast(builderPanel.classList.contains('hidden') ? 'Builder closed' : 'Builder opened');
        });

        // ========== MODEL DROPDOWN ==========
        const modelBtn = document.getElementById('modelBtn');
        const modelMenu = document.getElementById('modelMenu');
        const modelLabel = document.getElementById('modelLabel');
        const modelChevron = document.getElementById('modelChevron');
        
        modelBtn?.addEventListener('click', (e) => {
          e.stopPropagation();
          modelMenu.classList.toggle('hidden');
          modelChevron.style.transform = modelMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        
        document.querySelectorAll('.model-option').forEach(btn => {
          btn.addEventListener('click', () => {
            modelLabel.textContent = btn.dataset.model;
            modelMenu.classList.add('hidden');
            modelChevron.style.transform = 'rotate(0deg)';
            showToast(`Model changed to ${btn.dataset.model}`);
          });
        });
        
        window.addEventListener('click', (e) => {
          if (!modelMenu?.contains(e.target) && !modelBtn?.contains(e.target)) {
            modelMenu?.classList.add('hidden');
            if (modelChevron) modelChevron.style.transform = 'rotate(0deg)';
          }
        });

        // ========== BUILDER OPTIONS SELECTION ==========
        let selectedStyle = null;
        let selectedTone = null;
        let selectedIncludes = [];

        document.querySelectorAll('.style-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('selected-style'));
            btn.classList.add('selected-style');
            selectedStyle = btn.dataset.style;
            showToast(`Style: ${selectedStyle}`);
          });
        });

        document.querySelectorAll('.tone-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.tone-btn').forEach(b => b.classList.remove('selected-style'));
            btn.classList.add('selected-style');
            selectedTone = btn.dataset.tone;
            showToast(`Tone: ${selectedTone}`);
          });
        });

        document.querySelectorAll('.include-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const include = btn.dataset.include;
            btn.classList.toggle('selected-style');
            
            if (selectedIncludes.includes(include)) {
              selectedIncludes = selectedIncludes.filter(i => i !== include);
            } else {
              selectedIncludes.push(include);
            }
            
            showToast(`Include: ${selectedIncludes.join(', ') || 'None'}`);
          });
        });

        // ========== SAVE PRESET ==========
        const savePresetBtn = document.getElementById('savePresetBtn');
        savePresetBtn?.addEventListener('click', () => {
          if (!selectedStyle && !selectedTone && selectedIncludes.length === 0) {
            showToast('No options selected to save', 2000);
            return;
          }
          
          const preset = {
            style: selectedStyle,
            tone: selectedTone,
            includes: selectedIncludes
          };
          
          localStorage.setItem('auroraPreset', JSON.stringify(preset));
          showToast('Preset saved successfully! ✓');
        });

        // ========== RUN PROMPT ==========
        const runBtn = document.getElementById('runBtn');
        const builderRunBtn = document.getElementById('builderRunBtn');
        const promptInput = document.getElementById('promptInput');

        function executePrompt() {
          const promptText = promptInput.value.trim();
          
          if (!promptText) {
            promptInput.value = 'Create a modern landing page with hero section...';
            return;
          }

          // Show loading state
          const originalText = promptInput.value;
          promptInput.value = '⚙️ Generating design...';
          promptInput.disabled = true;
          runBtn.style.opacity = '0.5';
          runBtn.style.pointerEvents = 'none';
          builderRunBtn.style.opacity = '0.5';
          builderRunBtn.style.pointerEvents = 'none';

          showToast('Generating your design...');

          // Simulate generation
          setTimeout(() => {
            let result = `✨ Generated: ${originalText}`;
            
            if (selectedStyle) result += `\n📐 Style: ${selectedStyle}`;
            if (selectedTone) result += `\n🎨 Tone: ${selectedTone}`;
            if (selectedIncludes.length > 0) result += `\n📦 Includes: ${selectedIncludes.join(', ')}`;
            
            promptInput.value = result;
            promptInput.disabled = false;
            runBtn.style.opacity = '1';
            runBtn.style.pointerEvents = 'auto';
            builderRunBtn.style.opacity = '1';
            builderRunBtn.style.pointerEvents = 'auto';

            runBtn.style.transform = 'scale(1.2) rotate(12deg)';
            setTimeout(() => {
              runBtn.style.transform = '';
            }, 200);

            showToast('Design generated successfully! ✓');
          }, 2000);
        }

        runBtn?.addEventListener('click', executePrompt);
        builderRunBtn?.addEventListener('click', executePrompt);

        // ========== KEYBOARD SHORTCUTS ==========
        document.addEventListener('keydown', (e) => {
          // Cmd/Ctrl + Enter: Run prompt
          if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            executePrompt();
          }
          
          // Cmd/Ctrl + B: Toggle builder
          if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
            e.preventDefault();
            builderPanel?.classList.toggle('hidden');
          }
          
          // Cmd/Ctrl + K: Focus search
          if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('searchInput')?.focus();
          }
        });

        // ========== SEARCH FUNCTIONALITY ==========
        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');
        const chatData = [
          'DesignAI Landing Page Template',
          'Aether Render Marketplace',
          'Volta EV Dashboard',
          'Nexus Design System',
          'Auré Natural Skincare',
          'Luxury Cruise Template'
        ];

        searchInput?.addEventListener('input', (e) => {
          const query = e.target.value.toLowerCase().trim();
          
          if (!query) {
            searchResults.classList.remove('show');
            return;
          }

          const results = chatData.filter(item => item.toLowerCase().includes(query));
          
          if (results.length > 0) {
            searchResults.innerHTML = results.map(result => 
              `<div class="text-xs text-zinc-300 py-2 px-2 hover:bg-zinc-800 rounded cursor-pointer transition-all">${result}</div>`
            ).join('');
          } else {
            searchResults.innerHTML = '<p class="text-xs text-zinc-500">No results found</p>';
          }
          
          searchResults.classList.add('show');
        });

        // ========== SHOW MORE BUTTON ==========
        const showMoreBtn = document.getElementById('showMoreBtn');
        let showingMore = false;
        
        showMoreBtn?.addEventListener('click', () => {
          showingMore = !showingMore;
          showMoreBtn.textContent = showingMore ? 'Show Less' : 'Show More';
          showToast(showingMore ? 'Showing all chats' : 'Showing recent chats');
        });

        // ========== ATTACH BUTTON ==========
        document.getElementById('attachBtn')?.addEventListener('click', () => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = 'image/*,.fig,.sketch';
          input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
              showToast(`Attached: ${file.name}`);
            }
          };
          input.click();
        });

        // ========== VARIABLES BUTTON ==========
        document.getElementById('variablesBtn')?.addEventListener('click', () => {
          showToast('Variables: {brand}, {color}, {style}, {spacing}', 3000);
        });

        // ========== PRESETS BUTTON ==========
        document.getElementById('presetsBtn')?.addEventListener('click', () => {
          const saved = localStorage.getItem('auroraPreset');
          if (saved) {
            const preset = JSON.parse(saved);
            showToast(`Loaded preset: ${preset.style || 'No style'}, ${preset.tone || 'No tone'}`, 3000);
          } else {
            showToast('No saved presets found', 2000);
          }
        });

        // ========== EDIT PINNED ==========
        document.getElementById('editPinnedBtn')?.addEventListener('click', () => {
          showToast('Edit mode: Drag to reorder pinned chats', 2500);
        });

        // ========== SMOOTH SCROLL ==========
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });

        // ========== CARD CLICK ANIMATION ==========
        document.querySelectorAll('.card-shine').forEach(card => {
          card.addEventListener('click', function(e) {
            if (!e.target.closest('button')) {
              this.style.transform = 'scale(0.98)';
              setTimeout(() => {
                this.style.transform = '';
              }, 150);
            }
          });
        });

        // ========== INITIALIZE ANIMATIONS ==========
        setTimeout(() => {
          document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
              el.classList.add('animated');
            }
          });
        }, 100);

        // ========== PERFORMANCE: LAZY LOAD IMAGES ==========
        if ('IntersectionObserver' in window) {
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                  img.src = img.dataset.src;
                  img.removeAttribute('data-src');
                  imageObserver.unobserve(img);
                }
              }
            });
          });

          document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
          });
        }

        // ========== ACCESSIBILITY: FOCUS MANAGEMENT ==========
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            // Close all dropdowns and menus
            modelMenu?.classList.add('hidden');
            if (modelChevron) modelChevron.style.transform = 'rotate(0deg)';
            mobileMenu?.classList.remove('open');
          }
        });

        // ========== AUTO-SAVE DRAFT ==========
        let draftTimeout;
        promptInput?.addEventListener('input', () => {
          clearTimeout(draftTimeout);
          draftTimeout = setTimeout(() => {
            if (promptInput.value.trim()) {
              localStorage.setItem('auroraDraft', promptInput.value);
            }
          }, 1000);
        });

        // Restore draft on load
        const savedDraft = localStorage.getItem('auroraDraft');
        if (savedDraft && promptInput && !promptInput.value) {
          promptInput.value = savedDraft;
        }

        // ========== PERFORMANCE MONITORING ==========
        window.addEventListener('load', () => {
          if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
          }
        });

        // ========== CONSOLE EASTER EGG ==========
        console.log('%c🌟 Aurora AI', 'font-size: 20px; font-weight: bold; color: #6366f1;');
        console.log('%cDesign smarter, not harder.', 'font-size: 14px; color: #a1a1aa;');
        console.log('%cInterested in how this works? We\'re hiring! → aurora.ai/careers', 'font-size: 12px; color: #52525b;');

      })();
    
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
      

<div className="fixed inset-0 -z-10" id="backgroundLayer">
<div className="bg-gradient-to-b from-zinc-950 via-zinc-950 to-black absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 opacity-[0.15] pointer-events-none" style="
        background-image:
          linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px);
        background-size: 80px 80px;
        background-position: center;
      "></div>
<div className="absolute inset-0 pointer-events-none">
<div className="gradient-animate absolute left-1/2 top-[-10%] -translate-x-1/2 h-[42rem] w-[42rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(99,102,241,0.35), transparent)'}}></div>
<div className="gradient-animate absolute right-[10%] top-[30%] h-[30rem] w-[30rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(168,85,247,0.2), transparent)', animationDelay: '2s'}}></div>
<div className="gradient-animate absolute left-[15%] bottom-[20%] h-[35rem] w-[35rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(59,130,246,0.2), transparent)', animationDelay: '4s'}}></div>
</div>
</div>

<header className="animate-on-scroll slide-down sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/80 border-b border-white/[0.08] animated">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="/home">
<span className="inline-flex items-center justify-center bg-zinc-900 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a399fb2b-b545-47d6-9e16-f3161c2d7568_320w.jpg)] bg-cover ring-white/10 ring-1 rounded-xl relative transition-all duration-300 group-hover:ring-white/30 group-hover:scale-110">
</span>
<span className="transition-colors group-hover:text-white cursor-pointer text-base font-semibold text-zinc-200 tracking-tight" onclick="window.location.href='/home'" role="button">Aurora</span>
</a>
<nav className="hidden md:flex items-center gap-1 text-sm text-zinc-400">
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/create">Create</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/templates">Templates</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/components">Components</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/assets">Assets</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/learn">Learn</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="/pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="themeToggle">
<svg className="h-4 w-4" fill="none" height="24" id="sunIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="h-4 w-4 hidden" fill="none" height="24" id="moonIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="shortcutsBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</button>
<button className="md:hidden inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300" id="mobileMenuBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
<img alt="User avatar" className="ring-1 ring-white/10 w-9 h-9 object-cover rounded-xl ml-2 hover:ring-white/30 transition-all duration-300 cursor-pointer hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d34ba004-610b-4236-aa5d-b6fd93935ef5_320w.webp"/>
</div>
</div>

<div className="mobile-menu md:hidden border-t border-white/[0.08] mt-2" id="mobileMenu">
<nav className="flex flex-col gap-1 py-4 text-sm text-zinc-400">
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#create">Create</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#trending">Templates</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#featured">Components</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#popular">Assets</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#footer">Learn</a>
<a className="px-3 py-2 rounded-lg hover:text-zinc-200 hover:bg-zinc-900/50 transition-all duration-300" href="#footer">Pricing</a>
</nav>
</div>
</div>
</header>

<section className="relative" id="create">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12">
<div className="text-center max-w-4xl mx-auto">
<h1 className="animate-on-scroll blur-in text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] font-semibold text-white tracking-tight animated">Design smarter,<br/>not harder.</h1>
<p className="animate-on-scroll blur-in delay-200 mt-6 text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto animated">
            Generate site designs in seconds. Refine with powerful edits using Aurora AI.
          </p>
</div>

<div className="animate-on-scroll scale-in delay-300 mt-12 max-w-4xl mx-auto rounded-2xl bg-zinc-900/70 ring-1 ring-white/10 p-6 shadow-2xl hover:ring-white/20 transition-all duration-500 hover:shadow-indigo-500/20 backdrop-blur-sm animated">
<div className="flex flex-col">
<div className="relative">
<textarea className="w-full resize-none bg-transparent text-zinc-200 placeholder:text-zinc-500 focus:outline-none text-lg pr-16 transition-all duration-300 focus:placeholder:text-zinc-600" id="promptInput" placeholder="Describe your vision — a landing page, dashboard, portfolio..." rows="3"></textarea>
<button className="absolute right-2 bottom-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-zinc-900 hover:bg-zinc-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/30 hover:scale-110 hover:rotate-12 shadow-lg" id="runBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/[0.08] pt-4">
<button className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="builderToggle">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                Prompt Builder
              </button>

<div className="relative">
<button className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="modelBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="" id="modelLabel">Orion 3</span>
<svg className="h-4 w-4 opacity-70 transition-transform duration-300" fill="none" height="24" id="modelChevron" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-20 mt-2 w-48 overflow-hidden rounded-xl bg-zinc-900 ring-1 ring-white/10 shadow-xl backdrop-blur-xl" id="modelMenu">
<button className="model-option w-full text-left px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800 transition-all duration-200 hover:pl-5" data-model="Orion 3">Orion 3</button>
<button className="model-option w-full text-left px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800 transition-all duration-200 hover:pl-5 border-t border-white/[0.05]" data-model="Nova 2-L">Nova 2-L</button>
<button className="model-option w-full text-left px-4 py-2.5 text-sm text-zinc-200 hover:bg-zinc-800 transition-all duration-200 hover:pl-5 border-t border-white/[0.05]" data-model="Atlas Vision">Atlas Vision</button>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="attachBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
                Attach
              </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="variablesBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"></path><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"></path></svg>
                Variables
              </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-zinc-800 px-4 py-2.5 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="presetsBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
                Presets
              </button>
</div>

<div className="hidden mt-5 rounded-xl bg-zinc-900/80 ring-1 ring-white/10 p-6 transition-all duration-500 backdrop-blur-sm" id="builderPanel">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-3">
<p className="text-sm font-medium text-zinc-300">Style</p>
<div className="flex flex-wrap gap-2">
<button className="style-btn px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-style={{}}>Minimal</button>
<button className="style-btn px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-style={{}}>Editorial</button>
<button className="style-btn px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-style={{}}>Neomorphic</button>
<button className="style-btn px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-style={{}}>Bold</button>
</div>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-zinc-300">Tone</p>
<div className="flex gap-2">
<button className="tone-btn flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-tone="Friendly">Friendly</button>
<button className="tone-btn flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-tone="Direct">Direct</button>
<button className="tone-btn flex-1 px-4 py-2 rounded-lg bg-zinc-800 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" data-tone="Playful">Playful</button>
</div>
</div>
<div className="space-y-3">
<p className="text-sm font-medium text-zinc-300">Include</p>
<div className="flex flex-wrap gap-2">
<span className="include-btn inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 cursor-pointer hover:scale-105" data-include="Heros">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg> Heros
                    </span>
<span className="include-btn inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 cursor-pointer hover:scale-105" data-include="Cards">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg> Cards
                    </span>
<span className="include-btn inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 cursor-pointer hover:scale-105" data-include="Nav">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> Nav
                    </span>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5">
<p className="text-xs text-zinc-500">Tip: Press  to run</p>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-105" id="savePresetBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path><path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg> Save Preset
                  </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-white text-zinc-900 px-5 py-2 text-sm font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 hover:shadow-xl" id="builderRunBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Run
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-9">
<div className="animate-on-scroll slide-right flex items-center justify-between mb-6 animated">
<div className="flex items-center gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Recent Chats</h2>
<span className="px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 text-sm ring-1 ring-white/10">175</span>
</div>
<button className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">View all</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4" id="recentChats">

<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="3D render" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c36a35c4-e075-44fd-a671-2b81d4b23ee4_800w.jpg"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">DesignAI Landing Page</p>
<p className="text-xs text-zinc-500 mt-1">Oct 12, 9:56 AM</p>
</div>
</a>

<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Render marketplace" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/194b6e83-560a-4a2d-addc-7a939fd3e784_800w.webp"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Aether Render Marketplace</p>
<p className="text-xs text-zinc-500 mt-1">Oct 8, 6:26 PM</p>
</div>
</a>

<a className="animate-on-scroll slide-up delay-300 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Mountains" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/06d9d570-8278-4029-8047-7bd2402ae3d6_800w.jpg"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Volta EV Dashboard</p>
<p className="text-xs text-zinc-500 mt-1">Oct 8, 8:01 PM</p>
</div>
</a>

<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Face portrait" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/38ff86b5-164e-4c7e-8854-f7fa45116bb2_3840w.png"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Nexus Design System</p>
<p className="text-xs text-zinc-500 mt-1">Oct 2, 10:57 PM</p>
</div>
</a>

<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Minimal UI boards" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/430f9d5a-b59f-4387-b373-13fbdd1df442_800w.jpg"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Auré Natural Skincare</p>
<p className="text-xs text-zinc-500 mt-1">Oct 5, 10:56 PM</p>
</div>
</a>

<a className="animate-on-scroll slide-up delay-300 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Sailing" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b0b1651b-b9d2-46c4-b387-cd68de1ed8a0_800w.jpg"/>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Luxury Cruise Template</p>
<p className="text-xs text-zinc-500 mt-1">Oct 6, 7:18 AM</p>
</div>
</a>
</div>
<div className="animate-on-scroll fade-in delay-400 mt-6 flex justify-center animated">
<button className="rounded-xl bg-zinc-900/80 px-6 py-3 text-sm font-medium text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm" id="showMoreBtn">
                Show More
              </button>
</div>
</div>

<aside className="lg:col-span-3">
<div className="animate-on-scroll slide-left lg:sticky lg:top-24 space-y-6 animated">

<div className="rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-5 hover:ring-white/20 transition-all duration-500 backdrop-blur-sm">
<div className="relative">
<svg className="absolute left-3 top-3 h-4 w-4 text-zinc-500 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-xl bg-zinc-800 pl-10 pr-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-white/20 transition-all duration-300 focus:bg-zinc-750" id="searchInput" placeholder="Search chats..." type="text"/>
</div>
<div className="mt-4 space-y-2 search-results" id="searchResults">
<p className="text-xs text-zinc-500">No results found</p>
</div>
</div>

<div className="rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-5 hover:ring-white/20 transition-all duration-500 backdrop-blur-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-zinc-300">Pinned</span>
<button className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors duration-300" id="editPinnedBtn">Edit</button>
</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-3 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-[1.02] text-left">
<svg className="h-4 w-4 text-indigo-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
<span>Portfolio Hero Concepts</span>
</button>
<button className="w-full flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-3 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-[1.02] text-left">
<svg className="h-4 w-4 text-purple-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span>Component Library Audit</span>
</button>
</div>
</div>

<div className="rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-5 hover:ring-white/20 transition-all duration-500 backdrop-blur-sm">
<span className="text-sm font-medium text-zinc-300 block mb-4">Quick Actions</span>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-2.5 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-[1.02] text-left">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    New Chat
                  </button>
<button className="w-full flex items-center gap-3 rounded-lg bg-zinc-800 px-3 py-2.5 text-sm text-zinc-200 ring-1 ring-white/10 hover:bg-zinc-700 hover:ring-white/20 transition-all duration-300 hover:scale-[1.02] text-left">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                    Import Design
                  </button>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]" id="trending">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-on-scroll slide-right flex items-center justify-between mb-8 animated">
<div className="flex items-center gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 tracking-tight">Trending</h2>
<span className="text-sm text-zinc-500">This week</span>
</div>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1" href="#">
            View all 
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[4/3] overflow-hidden rounded-t-2xl relative">
<img alt="Abstract design" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39d6bd74-d7eb-4a3c-afb3-43091ef38e3e_800w.webp"/>
<div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/30 group-hover:bg-zinc-900 flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                1.2k
              </div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Glassmorphism UI Kit</p>
<p className="text-xs text-zinc-500 mt-1.5">by @alexwright • 2 days ago</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[4/3] overflow-hidden rounded-t-2xl relative">
<img alt="3D scene" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/960ca130-f19f-48bc-b627-3f56cc8f7751_800w.jpg"/>
<div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/30 group-hover:bg-zinc-900 flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                890
              </div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Dark Crypto Dashboard</p>
<p className="text-xs text-zinc-500 mt-1.5">by @studio_io • 1 day ago</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-300 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[4/3] overflow-hidden rounded-t-2xl relative">
<img alt="Web design" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/687edb1d-7d75-4f4f-a573-b458c2266243_800w.jpg"/>
<div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/30 group-hover:bg-zinc-900 flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                765
              </div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">SaaS Landing Screens</p>
<p className="text-xs text-zinc-500 mt-1.5">by @moonlight • 3 days ago</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-400 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-[4/3] overflow-hidden rounded-t-2xl relative">
<img alt="Architecture" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/02ec3fdf-4f8c-4433-b2c6-9793000d7100_800w.webp"/>
<div className="absolute top-3 right-3 bg-zinc-900/90 backdrop-blur px-2.5 py-1.5 rounded-lg text-xs font-medium text-zinc-200 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/30 group-hover:bg-zinc-900 flex items-center gap-1">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                632
              </div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Real Estate Portal</p>
<p className="text-xs text-zinc-500 mt-1.5">by @vera_design • 4 days ago</p>
</div>
</a>
</div>
</div>
</section>

<section className="border-white/[0.08] border-t" id="featured">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-on-scroll slide-right flex items-center justify-between mb-8 animated">
<div className="flex items-center gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Recently Featured</h2>
<span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-xs font-medium ring-1 ring-indigo-500/30">Editor's Pick</span>
</div>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1" href="#">
            View all 
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-video overflow-hidden rounded-t-2xl relative">
<img alt="Featured design" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e1b04fad-8efb-495f-8f28-40e55a804df0_1600w.jpg"/>
<div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold shadow-lg transition-all duration-300 group-hover:scale-110">
                Featured
              </div>
</div>
<div className="p-6">
<p className="text-lg font-semibold text-zinc-200 transition-colors group-hover:text-white">Minimalist E-commerce Experience</p>
<p className="text-sm text-zinc-400 mt-2.5 line-clamp-2 transition-colors group-hover:text-zinc-300">A complete redesign focusing on product photography and seamless checkout flows. Built with modern accessibility standards.</p>
<div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/[0.08]">
<img alt="User" className="transition-all duration-300 group-hover:ring-white/30 group-hover:scale-110 w-10 h-10 object-cover ring-white/10 ring-2 rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Sarah Chen</p>
<p className="text-xs text-zinc-500">Lead Designer at Axiom</p>
</div>
</div>
</div>
</a>
<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm animated" href="#">
<div className="aspect-video overflow-hidden rounded-t-2xl relative">
<img alt="Featured design" className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/564dc5fb-0d4e-42cb-9136-c3b630185122_1600w.webp"/>
<div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold shadow-lg transition-all duration-300 group-hover:scale-110">
                Featured
              </div>
</div>
<div className="p-6">
<p className="text-lg font-semibold text-zinc-200 transition-colors group-hover:text-white">AI-Powered Analytics Dashboard</p>
<p className="text-sm text-zinc-400 mt-2.5 line-clamp-2 transition-colors group-hover:text-zinc-300">Real-time data visualization with intelligent insights. Features custom charts, alerts, and collaborative annotations.</p>
<div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/[0.08]">
<img alt="User" className="ring-2 ring-white/10 transition-all duration-300 group-hover:ring-white/30 group-hover:scale-110 w-10 h-10 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5df57559-d225-4f15-9163-82695e50f286_320w.jpg"/>
<div className="">
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Marcus Rodriguez</p>
<p className="text-xs text-zinc-500">Product Designer</p>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="border-white/[0.08] border-t" id="popular">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-on-scroll slide-right flex items-center justify-between mb-8 animated">
<div className="flex items-center gap-4">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">Popular Web</h2>
<span className="text-sm text-zinc-500">Curated collection</span>
</div>
<a className="text-sm text-zinc-400 hover:text-zinc-200 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1" href="#">
            View all 
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-t-2xl">
<img alt="Web design" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bd225824-34ac-4a14-9d98-e888fc3f1d93_1600w.webp"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">Landing Page</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">12.4k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Startup Launch Template</p>
<p className="text-xs text-zinc-500 mt-1.5">Clean and conversion-focused</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/12] overflow-hidden rounded-t-2xl">
<img alt="Mobile app" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9a880f-596b-4c6e-bbe2-13faf068a7fe_3840w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">Mobile First</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">9.8k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Food Delivery App UI</p>
<p className="text-xs text-zinc-500 mt-1.5">iOS &amp; Android design system</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-300 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
<img alt="Portfolio" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4776ffe4-9045-48dd-b628-51945ce93830_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">Portfolio</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">8.2k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Creative Agency Showcase</p>
<p className="text-xs text-zinc-500 mt-1.5">Bold typography and animations</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-100 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/11] overflow-hidden rounded-t-2xl">
<img alt="Dashboard" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1e5d10e4-8c4b-4a85-b18e-03b8adfe54cf_1600w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">Dashboard</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">15.1k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Project Management Hub</p>
<p className="text-xs text-zinc-500 mt-1.5">Kanban boards &amp; team collab</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-200 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/10] overflow-hidden rounded-t-2xl">
<img alt="E-commerce" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb157054-620a-4023-8af4-73869ab9ec33_3840w.jpg"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">E-commerce</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">11.3k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Fashion Store Interface</p>
<p className="text-xs text-zinc-500 mt-1.5">Product grids &amp; quick view</p>
</div>
</a>
<a className="animate-on-scroll slide-up delay-300 group block rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 card-shine hover-glow backdrop-blur-sm break-inside-avoid animated" href="#">
<div className="aspect-[16/13] overflow-hidden rounded-t-2xl">
<img alt="Blog" className="transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 w-full h-full object-cover saturate-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de8a2cce-0ca9-4c16-a32f-1f4573eeeae2_1600w.webp"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2.5">
<span className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md ring-1 ring-white/10 transition-all duration-300 group-hover:ring-white/20 font-medium">Blog</span>
<span className="text-xs text-zinc-500">•</span>
<span className="text-xs text-zinc-500">7.6k views</span>
</div>
<p className="text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">Editorial Magazine Layout</p>
<p className="text-xs text-zinc-500 mt-1.5">Long-form reading experience</p>
</div>
</a>
</div>
</div>
</section>

<section className="border-white/[0.08] border-t">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="animate-on-scroll slide-up delay-100 rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-8 hover:ring-white/20 transition-all duration-500 hover-glow backdrop-blur-sm animated">
<div className="flex items-center gap-4 mb-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 ring-1 ring-indigo-500/30 transition-all duration-300 group-hover:scale-110">
<svg className="h-5 w-5 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-zinc-100">One‑click concepts</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Generate polished layouts, typography scales and color tokens from a single idea.</p>
</div>
<div className="animate-on-scroll slide-up delay-200 rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-8 hover:ring-white/20 transition-all duration-500 hover-glow backdrop-blur-sm animated">
<div className="flex items-center gap-4 mb-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 ring-1 ring-purple-500/30 transition-all duration-300 group-hover:scale-110">
<svg className="h-5 w-5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-zinc-100">Edit with intent</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Describe your change. Aurora rewrites sections, preserves structure and style.</p>
</div>
<div className="animate-on-scroll slide-up delay-300 rounded-2xl bg-zinc-900/80 ring-1 ring-white/10 p-8 hover:ring-white/20 transition-all duration-500 hover-glow backdrop-blur-sm animated">
<div className="flex items-center gap-4 mb-4">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-500/30 transition-all duration-300 group-hover:scale-110">
<svg className="h-5 w-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</span>
<h3 className="text-xl font-semibold tracking-tight text-zinc-100">Export anywhere</h3>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">Copy clean components or export ready blocks into your stack.</p>
</div>
</div>
</div>
</section>

<footer className="border-white/[0.08] border-t" id="footer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="animate-on-scroll fade-in ring-1 ring-white/10 hover:ring-white/20 transition-all duration-500 bg-zinc-900/50 border-white/10 rounded-2xl px-8 py-10 lg:p-12 relative backdrop-blur-sm animated">
<a aria-label="Back to top" className="hidden sm:inline-flex items-center justify-center hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-zinc-300 bg-zinc-900/80 w-11 h-11 ring-white/10 ring-1 rounded-xl absolute top-6 right-6" href="#create">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</a>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5">
<a className="flex items-center gap-3 group mb-5" href="#">
<span className="inline-flex items-center justify-center bg-zinc-900 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a399fb2b-b545-47d6-9e16-f3161c2d7568_320w.jpg)] bg-cover ring-white/10 ring-1 rounded-xl relative transition-all duration-300 group-hover:ring-white/30 group-hover:scale-110">
</span>
<span className="text-zinc-200 text-lg font-semibold tracking-tight transition-colors group-hover:text-white">Aurora</span>
</a>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                Generate beautiful designs in seconds and export to HTML or Figma. Powerful prompt builder with hundreds of templates for responsive web design.
              </p>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="">
<p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4">Product</p>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#create">Create</a></li>
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Pricing</a></li>
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">FAQ</a></li>
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Download</a></li>
</ul>
</div>
<div className="">
<p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4">Made by us</p>
<ul className="space-y-3">
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Courses</a></li>
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">UI Kit</a></li>
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Video Editor</a></li>
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Mockups</a></li>
</ul>
</div>
<div className="">
<p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-4">Connect</p>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Privacy</a></li>
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Terms</a></li>
<li><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Support</a></li>
<li className=""><a className="text-sm text-zinc-300 hover:text-zinc-100 transition-all duration-300 hover:translate-x-1 inline-block" href="#footer">Report issue</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-zinc-500 text-center md:text-left">
              © 2025 Aurora. All rights reserved.
            </p>
<div className="flex items-center gap-4">

<div className="inline-flex items-center overflow-hidden rounded-xl ring-1 ring-white/10 bg-zinc-900/80 backdrop-blur-sm">
<button aria-label="Light" className="theme-mode-btn p-2.5 text-zinc-300 hover:bg-zinc-800 transition-all duration-300 hover:text-white" id="lightModeBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<button aria-label="System" className="theme-mode-btn p-2.5 text-zinc-300 hover:bg-zinc-800 transition-all duration-300 border-l border-white/10 hover:text-white" id="systemModeBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</button>
<button aria-label="Dark" className="theme-mode-btn p-2.5 text-zinc-300 hover:bg-zinc-800 transition-all duration-300 border-l border-white/10 hover:text-white selected-style" id="darkModeBtn">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</button>
</div>

<div className="flex items-center gap-2">
<a aria-label="Twitter" className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 text-zinc-300 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-110 hover:text-white float-hover" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 text-zinc-300 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-110 hover:text-white float-hover" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 text-zinc-300 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-110 hover:text-white float-hover" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="GitHub" className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/10 text-zinc-300 hover:bg-zinc-800 hover:ring-white/20 transition-all duration-300 hover:scale-110 hover:text-white float-hover" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
