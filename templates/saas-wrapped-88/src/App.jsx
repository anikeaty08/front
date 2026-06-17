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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
mono: ['SF Mono', 'Monaco', 'Menlo', 'monospace'],
},
animation: {
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // --- STATE MANAGEMENT ---
        const state = {
            activeTab: 'identity',
            currentSlideIndex: 0,
            brandColor: '#d946ef',
            companyName: 'Danlpet Agency',
            logoUrl: null,
            bgStyle: 'vibe-mesh',
            viewMode: 'design', // 'design' or 'preview'
            slides: [
                { id: 'intro', type: 'intro', locked: true }, // Fixed Intro
                { id: 's1', type: 'metric', title: 'Total Clients', value: '150+', subtext: 'Happy brands joined the family.' },
                { id: 's2', type: 'growth', title: 'Coffee Consumed', value: '∞', subtext: 'Liters of caffeine' },
                { id: 's3', type: 'highlight', text: '"Best digital experience we have ever had."', subtext: 'Client Love' },
                { id: 'summary', type: 'summary', locked: true } // Fixed Summary
            ]
        };

        // --- DOM REFERENCES ---
        const els = {
            slidesContainer: document.getElementById('slides-container'),
            progressContainer: document.getElementById('progress-container'),
            slidesList: document.getElementById('slides-list'),
            companyInput: document.getElementById('input-company'),
            colorInput: document.getElementById('brand-color-picker'),
            slideCounter: document.getElementById('slide-counter'),
            phoneScreen: document.getElementById('phone-screen'),
            phoneWrapper: document.getElementById('phone-wrapper'),
            scalableContainer: document.getElementById('scalable-container'),
            editorPanel: document.getElementById('editor-panel'),
            previewPanel: document.getElementById('preview-panel'),
            btnDesign: document.getElementById('btn-design'),
            btnPreview: document.getElementById('btn-preview')
        };

        // --- RESPONSIVE LOGIC ---
        function setView(mode) {
            state.viewMode = mode;
            
            // Toggle Button Styles
            if (mode === 'design') {
                els.btnDesign.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                els.btnDesign.classList.remove('text-slate-400');
                els.btnPreview.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                els.btnPreview.classList.add('text-slate-400');
                
                // Show Editor, Hide Preview (Mobile)
                els.editorPanel.classList.remove('hidden');
                els.editorPanel.classList.add('flex');
                els.previewPanel.classList.add('hidden');
                els.previewPanel.classList.remove('flex');
            } else {
                els.btnPreview.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                els.btnPreview.classList.remove('text-slate-400');
                els.btnDesign.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                els.btnDesign.classList.add('text-slate-400');

                // Show Preview, Hide Editor (Mobile)
                els.previewPanel.classList.remove('hidden');
                els.previewPanel.classList.add('flex');
                els.editorPanel.classList.add('hidden');
                els.editorPanel.classList.remove('flex');

                // Trigger resize calculation for phone
                setTimeout(fitPhoneToScreen, 50);
            }
        }

        // --- PHONE SCALING LOGIC ---
        function fitPhoneToScreen() {
            // Only scale if the preview panel is visible
            if (els.previewPanel.offsetParent === null) return;

            const padding = 64; // Horizontal/Vertical padding
            const containerW = els.previewPanel.clientWidth;
            const containerH = els.previewPanel.clientHeight;
            
            const phoneW = 340;
            const phoneH = 750; // Include space for controls below

            const scaleX = (containerW - padding) / phoneW;
            const scaleY = (containerH - padding) / phoneH;
            
            const scale = Math.min(scaleX, scaleY, 1); // Never scale up above 1x
            
            els.scalableContainer.style.transform = `scale(${scale})`;
        }

        window.addEventListener('resize', fitPhoneToScreen);

        // --- RENDER FUNCTIONS ---

        function renderSlides() {
            els.slidesContainer.innerHTML = '';
            els.progressContainer.innerHTML = '';

            state.slides.forEach((slide, index) => {
                // 1. Create Progress Bar
                const prog = document.createElement('div');
                prog.className = 'h-1.5 bg-slate-200 rounded-full flex-1 overflow-hidden';
                const innerProg = document.createElement('div');
                innerProg.className = `h-full bg-slate-900 w-0 transition-all duration-300`;
                if (index < state.currentSlideIndex) innerProg.style.width = '100%';
                if (index === state.currentSlideIndex) innerProg.style.width = '100%';
                if (index > state.currentSlideIndex) innerProg.style.width = '0%';
                if (index < state.currentSlideIndex) innerProg.style.opacity = '0.3';
                
                prog.appendChild(innerProg);
                els.progressContainer.appendChild(prog);

                // 2. Create Slide HTML
                const slideEl = document.createElement('div');
                slideEl.className = `absolute inset-0 transition-opacity duration-500 ${index === state.currentSlideIndex ? 'opacity-100 z-10 slide-enter' : 'opacity-0 z-0 pointer-events-none'}`;
                
                let content = '';

                // --- INTRO SLIDE ---
                if(slide.type === 'intro') {
                    content = `
                        <div class="h-full flex flex-col items-center justify-center p-8 text-center relative">
                            <!-- Glow Effect Behind Logo -->
                            <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand blur-[80px] opacity-30 rounded-full animate-blob"></div>
                            
                            <!-- Logo Box -->
                            <div class="relative mb-12 group">
                                <div class="w-32 h-32 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center relative z-10 shadow-xl overflow-hidden ring-4 ring-slate-50 hover-pop">
                                    ${state.logoUrl ? `<img src="${state.logoUrl}" class="w-full h-full object-cover p-2">` : `<div class="text-4xl font-bold font-display text-slate-900">D</div>`}
                                </div>
                            </div>
                            
                            <!-- Text Content -->
                            <h1 class="text-4xl font-bold font-display text-slate-900 tracking-tight mb-4">${state.companyName}</h1>
                            
                            <div class="flex items-center gap-3 mb-10">
                                <span class="h-0.5 w-8 bg-brand opacity-60 rounded-full"></span>
                                <span class="text-xs font-bold text-brand uppercase tracking-widest font-display">Wrapped 2025</span>
                                <span class="h-0.5 w-8 bg-brand opacity-60 rounded-full"></span>
                            </div>
                            
                            <p class="text-slate-500 text-lg font-medium tracking-tight">Your year in pixels.</p>
                        </div>
                    `;
                }
                
                // --- METRIC SLIDE ---
                else if(slide.type === 'metric') {
                    content = `
                         <div class="h-full flex flex-col p-8 pt-20">
                            <div class="flex-1 mt-10">
                                <div class="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mb-8 border border-brand/20 hover-pop">
                                    <i data-lucide="bar-chart-2" class="w-8 h-8 text-brand"></i>
                                </div>
                                <h2 class="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">${slide.title}</h2>
                                <div class="text-6xl font-bold font-display text-slate-900 tracking-tighter mb-6 break-words leading-[0.9]">${slide.value}</div>
                                <p class="text-xl text-slate-500 font-medium leading-relaxed">${slide.subtext}</p>
                            </div>
                             <div class="absolute bottom-6 left-6 right-6 p-6 rounded-3xl z-20 bg-slate-50 border border-slate-100">
                                <div class="flex justify-between items-center text-xs font-bold">
                                    <span class="text-slate-400 uppercase tracking-wide">Growth</span>
                                    <span class="text-brand flex items-center gap-1"><i data-lucide="trending-up" class="w-3 h-3"></i> +124%</span>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // --- GROWTH SLIDE ---
                else if(slide.type === 'growth') {
                    content = `
                        <div class="h-full flex flex-col p-8 bg-brand text-black relative overflow-hidden">
                             <!-- Blobs overlay -->
                             <div class="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                             <div class="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                             <div class="relative z-10 flex flex-col h-full justify-between pt-16 pb-8">
                                <div>
                                    <div class="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-black/5 rounded-full border border-black/5">
                                        <i data-lucide="zap" class="w-3 h-3 text-black"></i>
                                        <span class="text-[10px] font-bold uppercase tracking-wide">Performance</span>
                                    </div>
                                    <h2 class="text-[5rem] font-bold font-display leading-none tracking-tighter mb-2 text-white drop-shadow-sm">${slide.value}</h2>
                                    <p class="text-xl font-bold opacity-80">${slide.title}</p>
                                </div>
                                <div class="w-full h-56 bg-white/20 backdrop-blur-sm rounded-3xl p-5 flex items-end gap-2 relative overflow-hidden border border-white/30">
                                    <div class="w-1/6 bg-white/30 h-[30%] rounded-t-lg"></div>
                                    <div class="w-1/6 bg-white/40 h-[45%] rounded-t-lg"></div>
                                    <div class="w-1/6 bg-white/50 h-[40%] rounded-t-lg"></div>
                                    <div class="w-1/6 bg-white/60 h-[60%] rounded-t-lg"></div>
                                    <div class="w-1/6 bg-white/80 h-[75%] rounded-t-lg"></div>
                                    <div class="w-1/6 bg-white h-[90%] rounded-t-lg relative shadow-lg">
                                        <div class="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold bg-black text-white px-2 py-0.5 rounded-full">NOW</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // --- HIGHLIGHT SLIDE ---
                else if(slide.type === 'highlight') {
                    content = `
                        <div class="h-full flex flex-col justify-center p-10 bg-slate-900 relative">
                             <div class="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent opacity-100"></div>
                             <div class="relative z-10">
                                <div class="w-12 h-12 mb-8 text-brand bg-white/10 rounded-full flex items-center justify-center">
                                    <i data-lucide="quote" class="w-6 h-6 fill-current"></i>
                                </div>
                                <h2 class="text-3xl md:text-4xl font-bold font-display text-white leading-tight tracking-tight break-words mb-10">"${slide.text}"</h2>
                                <div class="flex items-center gap-4">
                                    <div class="w-12 h-12 rounded-full bg-white border-2 border-white/20 flex items-center justify-center text-sm text-slate-900 overflow-hidden font-bold">
                                        ${state.logoUrl ? `<img src="${state.logoUrl}" class="w-full h-full object-cover">` : state.companyName.charAt(0)}
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-sm font-bold text-white uppercase tracking-wide">${slide.subtext}</span>
                                        <span class="text-xs text-slate-400 font-mono mt-0.5">2025 HIGHLIGHT</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }

                // --- SUMMARY SLIDE (Dynamic) ---
                else if(slide.type === 'summary') {
                    // Collect metrics
                    const metrics = state.slides.filter(s => s.type === 'metric' || s.type === 'growth');
                    let summaryHTML = '';
                    metrics.forEach(m => {
                        summaryHTML += `
                            <div class="flex justify-between items-end border-b border-slate-100 pb-3">
                                <span class="text-xs font-bold text-slate-400 uppercase tracking-wide">${m.title || 'Metric'}</span>
                                <span class="text-lg font-bold font-display text-slate-900">${m.value}</span>
                            </div>
                        `;
                    });

                    content = `
                        <div class="h-full flex flex-col items-center justify-center p-6 bg-slate-50 relative">
                             <div class="absolute top-0 left-0 w-full h-1/2 bg-white rounded-b-[3rem] shadow-sm"></div>
                             <div class="relative z-10 w-full bg-white border border-slate-200 p-8 rounded-[2rem] shadow-xl hover-pop">
                                <div class="flex justify-between items-start mb-8">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/30">
                                            <i data-lucide="layers" class="w-4 h-4"></i>
                                        </div>
                                        <span class="text-sm font-bold text-slate-900 tracking-wider uppercase font-display">Wrapped</span>
                                    </div>
                                    <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-md">2025</span>
                                </div>
                                <div class="space-y-4 mb-8">
                                    ${summaryHTML || '<div class="text-slate-400 text-xs italic">Add metrics to see summary</div>'}
                                </div>
                                <div class="flex items-center gap-2 text-[11px] font-bold text-slate-500 bg-slate-50 p-3 rounded-xl">
                                    <i data-lucide="check-circle-2" class="w-4 h-4 text-brand"></i>
                                    Verified Statistics
                                </div>
                            </div>
                            <button class="mt-8 bg-slate-900 hover:bg-brand hover:text-white text-white font-bold py-4 px-8 rounded-full w-full max-w-[220px] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-sm">
                                Share Report <i data-lucide="share-2" class="w-4 h-4"></i>
                            </button>
                        </div>
                    `;
                }

                slideEl.innerHTML = content;
                els.slidesContainer.appendChild(slideEl);
            });

            lucide.createIcons();
            els.slideCounter.textContent = `${state.currentSlideIndex + 1} / ${state.slides.length}`;
        }

        function renderEditor() {
            els.slidesList.innerHTML = '';
            
            state.slides.forEach((slide, index) => {
                if(slide.locked) return; // Don't show editor for Intro/Summary (simplified)

                const item = document.createElement('div');
                item.className = 'bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:border-fuchsia-300 hover:shadow-md transition-all';
                
                let inputsHTML = '';
                
                if(slide.type === 'metric') {
                    inputsHTML = `
                        <input type="text" placeholder="Title" value="${slide.title}" oninput="updateSlide(${index}, 'title', this.value)" class="w-full bg-transparent border-b border-slate-100 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                        <input type="text" placeholder="Value" value="${slide.value}" oninput="updateSlide(${index}, 'value', this.value)" class="w-full bg-transparent border-b border-slate-100 px-4 py-3 text-sm font-bold font-display text-brand focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                        <input type="text" placeholder="Subtext" value="${slide.subtext}" oninput="updateSlide(${index}, 'subtext', this.value)" class="w-full bg-transparent px-4 py-3 text-xs text-slate-500 focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                    `;
                } else if(slide.type === 'growth') {
                     inputsHTML = `
                        <input type="text" placeholder="Title" value="${slide.title}" oninput="updateSlide(${index}, 'title', this.value)" class="w-full bg-transparent border-b border-slate-100 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                        <input type="text" placeholder="Percentage" value="${slide.value}" oninput="updateSlide(${index}, 'value', this.value)" class="w-full bg-transparent px-4 py-3 text-sm font-bold font-display text-brand focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                    `;
                } else if(slide.type === 'highlight') {
                     inputsHTML = `
                        <textarea rows="2" oninput="updateSlide(${index}, 'text', this.value)" class="w-full bg-transparent border-b border-slate-100 px-4 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:bg-slate-50 resize-none placeholder-slate-400">${slide.text}</textarea>
                        <input type="text" placeholder="Label" value="${slide.subtext}" oninput="updateSlide(${index}, 'subtext', this.value)" class="w-full bg-transparent px-4 py-3 text-xs text-slate-500 focus:outline-none focus:bg-slate-50 placeholder-slate-400">
                    `;
                }

                item.innerHTML = `
                    <div class="flex items-center justify-between p-3 bg-slate-50 border-b border-slate-100 cursor-pointer">
                        <div class="flex items-center gap-3" onclick="jumpToSlide(${index})">
                            <span class="text-[10px] font-bold text-white bg-slate-900 w-5 h-5 flex items-center justify-center rounded-md">${index+1}</span>
                            <span class="text-xs font-bold text-slate-600 uppercase tracking-wide">${slide.type}</span>
                        </div>
                        <button onclick="removeSlide(${index})" class="text-slate-400 hover:text-red-500 transition-colors p-1.5 hover:bg-white rounded-full"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
                    </div>
                    <div class="p-0">
                        ${inputsHTML}
                    </div>
                `;
                els.slidesList.appendChild(item);
            });
            lucide.createIcons();
        }

        // --- ACTIONS ---

        function updateSlide(index, key, val) {
            state.slides[index][key] = val;
            renderSlides();
        }

        function addSlide(type) {
            const newSlide = { type: type };
            if(type === 'metric') { newSlide.title = 'New Metric'; newSlide.value = '0'; newSlide.subtext = 'Description'; }
            if(type === 'growth') { newSlide.title = 'Growth Metric'; newSlide.value = '+100%'; }
            if(type === 'highlight') { newSlide.text = 'Enter your highlight text here.'; newSlide.subtext = 'Highlight'; }
            
            // Insert before Summary
            state.slides.splice(state.slides.length - 1, 0, newSlide);
            state.currentSlideIndex = state.slides.length - 2; // Jump to new slide
            
            toggleAddMenu(); // Hide menu
            renderEditor();
            renderSlides();
        }

        function removeSlide(index) {
            if(confirm('Delete this slide?')) {
                state.slides.splice(index, 1);
                if(state.currentSlideIndex >= state.slides.length) state.currentSlideIndex = state.slides.length - 1;
                renderEditor();
                renderSlides();
            }
        }

        function toggleAddMenu() {
            document.getElementById('add-menu').classList.toggle('hidden');
        }

        function jumpToSlide(index) {
            state.currentSlideIndex = index;
            if(window.innerWidth < 1024) setView('preview'); // Auto switch on mobile
            renderSlides();
        }

        function nextSlide() {
            if(state.currentSlideIndex < state.slides.length - 1) {
                state.currentSlideIndex++;
                renderSlides();
            }
        }

        function prevSlide() {
            if(state.currentSlideIndex > 0) {
                state.currentSlideIndex--;
                renderSlides();
            }
        }

        function switchTab(tab) {
            state.activeTab = tab;
            if(tab === 'identity') {
                document.getElementById('tab-identity').classList.remove('hidden');
                document.getElementById('tab-data').classList.add('hidden');
                document.getElementById('tab-btn-identity').classList.add('border-fuchsia-500', 'text-slate-900');
                document.getElementById('tab-btn-identity').classList.remove('border-transparent', 'text-slate-400');
                document.getElementById('tab-btn-data').classList.remove('border-fuchsia-500', 'text-slate-900');
                document.getElementById('tab-btn-data').classList.add('border-transparent', 'text-slate-400');
            } else {
                document.getElementById('tab-identity').classList.add('hidden');
                document.getElementById('tab-data').classList.remove('hidden');
                document.getElementById('tab-btn-data').classList.add('border-fuchsia-500', 'text-slate-900');
                document.getElementById('tab-btn-data').classList.remove('border-transparent', 'text-slate-400');
                document.getElementById('tab-btn-identity').classList.remove('border-fuchsia-500', 'text-slate-900');
                document.getElementById('tab-btn-identity').classList.add('border-transparent', 'text-slate-400');
                renderEditor(); // Refresh list
            }
        }

        // --- GLOBAL LISTENERS ---

        els.companyInput.addEventListener('input', (e) => {
            state.companyName = e.target.value;
            renderSlides();
        });

        els.colorInput.addEventListener('input', (e) => {
            const hex = e.target.value;
            state.brandColor = hex;
            document.documentElement.style.setProperty('--brand-color', hex);
            document.documentElement.style.setProperty('--brand-dim', hex + '20'); // 20 = approx 12% opacity
            document.getElementById('color-hex-text').textContent = hex;
            document.getElementById('color-preview-dot').style.backgroundColor = hex;
        });

        function setPreset(color) {
            els.colorInput.value = color;
            els.colorInput.dispatchEvent(new Event('input'));
        }

        function setVibe(vibe) {
            state.bgStyle = vibe;
            els.phoneScreen.classList.remove('vibe-mesh', 'vibe-grid', 'vibe-solid');
            els.phoneScreen.classList.add(vibe);
            
            // UI Feedback
            document.querySelectorAll('.vibe-btn').forEach(btn => {
                if(btn.getAttribute('onclick').includes(vibe)) {
                    btn.classList.add('border-fuchsia-500', 'bg-fuchsia-50', 'text-fuchsia-700');
                    btn.classList.remove('border-slate-100', 'text-slate-500');
                } else {
                    btn.classList.remove('border-fuchsia-500', 'bg-fuchsia-50', 'text-fuchsia-700');
                    btn.classList.add('border-slate-100', 'text-slate-500');
                }
            });
        }

        // Logo Upload
        document.getElementById('logo-upload').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    state.logoUrl = e.target.result;
                    document.getElementById('logo-preview-thumb').src = state.logoUrl;
                    document.getElementById('logo-preview-thumb').classList.remove('opacity-0');
                    document.getElementById('upload-placeholder').classList.add('opacity-0');
                    document.getElementById('drop-zone').style.borderColor = 'var(--brand-color)';
                    renderSlides();
                }
                reader.readAsDataURL(file);
            }
        });

        // Init
        renderSlides();
        fitPhoneToScreen();
        lucide.createIcons();
        setView('design'); // Default mobile view

    
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
      

<nav className="sticky top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-xl">
<div className="max-w-[1800px] mx-auto px-6 h-18 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg font-display">
                    D
                </div>
<span className="text-lg font-semibold tracking-tight text-slate-900 font-display">Wrapped Studio <span className="text-slate-400 font-normal text-sm">by Danlpet</span></span>
</div>

<div className="hidden lg:flex items-center gap-6">
<div className="flex items-center gap-3 border-r border-slate-200 pr-6 group relative cursor-help">
<span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Sync With</span>
<div className="flex -space-x-2 grayscale opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><i className="w-4 h-4 text-slate-600" data-lucide="github"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><i className="w-4 h-4 text-slate-600" data-lucide="slack"></i></div>
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center"><i className="w-4 h-4 text-slate-600" data-lucide="figma"></i></div>
</div>
</div>
<div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
<div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></div>
                    Editor Active
                </div>
<button className="bg-slate-900 text-white hover:bg-fuchsia-500 hover:scale-105 transition-all px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-2 shadow-lg shadow-fuchsia-500/20">
<i className="w-4 h-4" data-lucide="download"></i> Export
                </button>
</div>
</div>
</nav>

<div className="lg:hidden flex justify-end px-4 py-3 border-b border-slate-100 bg-white/90 backdrop-blur-md sticky top-16 z-40">
<div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex text-xs font-medium">
<button className="px-5 py-2 rounded-lg bg-white text-slate-900 shadow-sm transition-all flex items-center gap-2 font-bold" id="btn-design" onclick="setView('design')">
<i className="w-3 h-3" data-lucide="edit-3"></i> Design
           </button>
<button className="px-5 py-2 rounded-lg text-slate-400 hover:text-slate-900 transition-all flex items-center gap-2 font-bold" id="btn-preview" onclick="setView('preview')">
<i className="w-3 h-3" data-lucide="smartphone"></i> Preview
           </button>
</div>
</div>

<main className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-72px)] overflow-hidden relative z-10">

<section className="w-full lg:w-[420px] xl:w-[480px] bg-white border-r border-slate-200 flex flex-col h-full z-20 shrink-0 transition-transform" id="editor-panel">

<div className="flex border-b border-slate-100 px-6 pt-4 gap-4">
<button className="pb-4 text-sm font-semibold text-slate-900 border-b-2 border-fuchsia-500 transition-all hover-pop" id="tab-btn-identity" onclick="switchTab('identity')">Identity</button>
<button className="pb-4 text-sm font-semibold text-slate-400 hover:text-slate-900 transition-all border-b-2 border-transparent hover:border-slate-200 hover-pop" id="tab-btn-data" onclick="switchTab('data')">Data &amp; Pages</button>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-8 relative pb-24 lg:pb-8">

<div className="space-y-8 slide-enter" id="tab-identity">

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-lg font-bold font-display text-slate-900">Brand Visuals</h3>
<span className="text-[10px] font-bold text-fuchsia-600 bg-fuchsia-50 px-3 py-1 rounded-full uppercase tracking-wide">Required</span>
</div>

<div className="group relative">
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Company Logo</label>
<div className="relative w-full h-28 border-2 border-dashed border-slate-200 rounded-2xl hover:border-fuchsia-400 hover:bg-fuchsia-50 transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden group" id="drop-zone">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" id="logo-upload" type="file"/>
<div className="text-center z-10 pointer-events-none transition-opacity duration-300 group-hover:scale-105 transform" id="upload-placeholder">
<div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-2 text-fuchsia-500">
<i className="w-5 h-5" data-lucide="upload-cloud"></i>
</div>
<span className="text-sm font-medium text-slate-600">Drop logo or click</span>
</div>
<img className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-300 z-10 pointer-events-none" id="logo-preview-thumb" src=""/>
</div>
</div>

<div>
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Primary Brand Color</label>
<div className="color-input-wrapper border border-slate-200 hover:border-fuchsia-400 transition-colors shadow-sm">
<input id="brand-color-picker" type="color" value="#d946ef"/>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center gap-3 bg-white">
<div className="w-5 h-5 rounded-full bg-[#d946ef] ring-2 ring-slate-100 shadow-lg" id="color-preview-dot"></div>
<span className="text-sm font-mono font-bold text-slate-700 uppercase" id="color-hex-text">#d946ef</span>
</div>
</div>
<div className="flex gap-2 mt-4 justify-between">
<button className="w-8 h-8 rounded-full bg-[#d946ef] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#d946ef')"></button>
<button className="w-8 h-8 rounded-full bg-[#3b82f6] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#3b82f6')"></button>
<button className="w-8 h-8 rounded-full bg-[#bef264] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#bef264')"></button>
<button className="w-8 h-8 rounded-full bg-[#f97316] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#f97316')"></button>
<button className="w-8 h-8 rounded-full bg-[#14b8a6] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#14b8a6')"></button>
<button className="w-8 h-8 rounded-full bg-[#8b5cf6] ring-2 ring-white hover:scale-110 transition-transform shadow-sm" onclick="setPreset('#8b5cf6')"></button>
</div>
</div>

<div>
<label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">Background Style</label>
<div className="grid grid-cols-3 gap-3">
<button className="vibe-btn active border-2 border-fuchsia-500 bg-fuchsia-50 rounded-xl py-2.5 text-[11px] font-bold text-fuchsia-700 uppercase tracking-wide transition-all shadow-sm" onclick="setVibe('vibe-mesh')">Mesh</button>
<button className="vibe-btn border-2 border-slate-100 hover:border-slate-300 rounded-xl py-2.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wide transition-all" onclick="setVibe('vibe-grid')">Grid</button>
<button className="vibe-btn border-2 border-slate-100 hover:border-slate-300 rounded-xl py-2.5 text-[11px] font-bold text-slate-500 hover:text-slate-900 uppercase tracking-wide transition-all" onclick="setVibe('vibe-solid')">Solid</button>
</div>
</div>
<div className="w-full h-px bg-slate-100"></div>

<div>
<label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Company Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-200 focus:outline-none transition-all placeholder-slate-400" id="input-company" type="text" value="Danlpet Agency"/>
</div>
</div>
</div>

<div className="hidden space-y-6" id="tab-data">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-bold font-display text-slate-900">Wrapped Pages</h3>
<button className="text-xs font-bold flex items-center gap-1.5 text-fuchsia-600 hover:text-fuchsia-700 bg-fuchsia-50 px-3 py-1.5 rounded-full transition-colors relative" onclick="toggleAddMenu()">
<i className="w-3 h-3" data-lucide="plus-circle"></i> Add Page
                            
<div className="hidden absolute right-0 top-full mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden" id="add-menu">
<div className="px-4 py-2.5 text-xs font-medium hover:bg-slate-50 cursor-pointer text-slate-700" onclick="addSlide('metric')">Metric</div>
<div className="px-4 py-2.5 text-xs font-medium hover:bg-slate-50 cursor-pointer text-slate-700" onclick="addSlide('growth')">Growth Chart</div>
<div className="px-4 py-2.5 text-xs font-medium hover:bg-slate-50 cursor-pointer text-slate-700" onclick="addSlide('highlight')">Highlight</div>
</div>
</button>
</div>

<div className="space-y-4" id="slides-list">

</div>
<div className="bg-blue-50 rounded-2xl p-5 border border-blue-100 mt-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 mt-0.5" data-lucide="sparkles"></i>
<p className="text-xs font-medium text-blue-700 leading-relaxed">
                                The <strong>Intro</strong> and <strong>Summary</strong> slides are automatically baked fresh based on your settings.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden lg:flex flex-grow bg-slate-50 relative items-center justify-center p-8 overflow-hidden" id="preview-panel">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[50vw] h-[50vw] bg-purple-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[40vw] h-[40vw] bg-lime-200 rounded-full blur-3xl opacity-40"></div>

<div className="relative w-full h-full flex items-center justify-center z-10 transition-all duration-300" id="phone-wrapper">
<div className="relative flex flex-col items-center gap-8 w-auto h-auto transition-transform origin-center duration-300" id="scalable-container">


<div className="relative w-[340px] h-[680px] bg-white rounded-[3rem] border-[8px] border-white ring-1 ring-slate-200 shadow-2xl overflow-hidden" id="phone-frame">

<div className="absolute -inset-[1px] rounded-[3rem] bg-slate-900 opacity-5 blur-xl -z-10 transition-colors duration-500"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-white rounded-b-2xl z-50 pointer-events-none shadow-sm border-b border-l border-r border-slate-100"></div>

<div className="w-full h-full relative bg-white vibe-mesh transition-all duration-500 flex flex-col select-none text-slate-900" id="phone-screen">

<div className="absolute top-3 left-6 right-6 flex gap-1.5 z-50" id="progress-container">

</div>

<div className="w-full h-full relative" id="slides-container">

</div>
</div>
</div>

<div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-slate-200 shadow-xl shadow-slate-200/50 z-20">
<button className="text-slate-400 hover:text-fuchsia-600 transition-colors p-1 hover:scale-110" onclick="prevSlide()"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<span className="text-xs font-bold font-mono text-slate-500 w-16 text-center" id="slide-counter">1 / 5</span>
<button className="text-slate-900 hover:text-fuchsia-600 transition-colors p-1 hover:scale-110" onclick="nextSlide()"><i className="w-6 h-6" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
