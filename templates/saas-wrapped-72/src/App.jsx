import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['Space Mono', 'monospace'],
},
animation: {
'blob': 'blob 10s infinite',
'enter-up': 'enterUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'enter-scale': 'enterScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
enterUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
enterScale: {
'0%': { opacity: '0', transform: 'scale(0.9)' },
'100%': { opacity: '1', transform: 'scale(1)' },
}
},
colors: {
brand: 'var(--brand-color)',
'brand-dim': 'var(--brand-dim)',
}
}
}
}



        // --- DATA & STATE ---
        const app = {
            theme: 'dark', 
            bgVibe: 'mesh',
            font: 'sans',
            radius: 'rounded',
            transition: 'fx-slide',
            brandColor: '#5e6ad2',
            companyName: 'Acme Corp',
            logo: null,
            currentSlide: 0,
            mode: 'editor',
            slides: [
                { id: 'intro', type: 'intro', locked: true },
                { id: '1', type: 'metric', title: 'Total Revenue', value: '$2.4M', subtext: 'A record breaking year.' },
                { id: '2', type: 'chart', title: 'Monthly Growth', bars: [40, 60, 50, 75, 60, 95] },
                { id: '3', type: 'team', title: 'Top Performers', members: [
                    { name: 'Alex', img: null }, { name: 'Sarah', img: null }, 
                    { name: 'Jordan', img: null }, { name: 'Casey', img: null }
                ]},
                { id: 'summary', type: 'summary', locked: true }
            ]
        };

        const els = {
            phoneScreen: document.getElementById('phone-screen'),
            slidesViewport: document.getElementById('slides-viewport'),
            progressContainer: document.getElementById('progress-bars'),
            slideList: document.getElementById('slide-list-container'),
            logoInput: document.getElementById('logo-input'),
            colorInput: document.getElementById('color-input'),
            hexInput: document.getElementById('hex-input'),
            companyInput: document.getElementById('company-name'),
            indicator: document.getElementById('slide-indicator'),
            addMenu: document.getElementById('add-menu'),
        };

        // --- RENDER FUNCTIONS ---

        function render() {
            renderPhoneStyles();
            renderSlides();
            renderEditorList();
            updateUI();
        }

        function renderPhoneStyles() {
            // Apply Theme
            els.phoneScreen.className = `w-full h-full rounded-[47px] relative flex flex-col transition-colors duration-500 overflow-hidden ${app.theme === 'dark' ? 'wrapped-dark' : 'wrapped-light'} ${app.transition}`;
            
            // CSS Variables
            els.phoneScreen.style.setProperty('--slide-text-main', app.theme === 'dark' ? '#ffffff' : '#0f172a');
            els.phoneScreen.style.setProperty('--slide-text-muted', app.theme === 'dark' ? '#94a3b8' : '#64748b');
            els.phoneScreen.style.setProperty('--card-bg', app.theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.8)');
            els.phoneScreen.style.setProperty('--card-border', app.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(203, 213, 225, 0.6)');
            els.phoneScreen.style.setProperty('--radius', app.radius === 'rounded' ? '20px' : '4px');
            
            // Fonts
            const fonts = { sans: 'font-sans', serif: 'font-serif', mono: 'font-mono' };
            els.phoneScreen.classList.remove('font-sans', 'font-serif', 'font-mono');
            els.phoneScreen.classList.add(fonts[app.font]);

            // Background Vibe
            const bgDiv = document.createElement('div');
            bgDiv.className = 'absolute inset-0 z-0';
            const gridColor = app.theme === 'dark' ? '#ffffff15' : '#00000008';
            
            if(app.bgVibe === 'mesh') {
                bgDiv.innerHTML = `
                    <div class="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-100 via-transparent to-transparent opacity-40"></div>
                    <div class="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full blur-[90px]" style="background-color: var(--brand-color); opacity: 0.2;"></div>
                    <div class="absolute top-[30%] left-[-10%] w-[250px] h-[250px] rounded-full blur-[70px] bg-sky-300/10"></div>
                `;
            } else if (app.bgVibe === 'grid') {
                bgDiv.style.backgroundImage = `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`;
                bgDiv.style.backgroundSize = '32px 32px';
            } else if (app.bgVibe === 'waves') {
                bgDiv.innerHTML = `<div class="absolute inset-0 opacity-40" style="background: radial-gradient(circle at 50% 120%, var(--brand-color), transparent 70%);"></div>`;
            }

            const oldBg = els.phoneScreen.querySelector('.vibe-bg');
            if(oldBg) oldBg.remove();
            bgDiv.classList.add('vibe-bg');
            els.phoneScreen.insertBefore(bgDiv, els.phoneScreen.querySelector('#confetti-canvas'));
        }

        function renderSlides() {
            els.slidesViewport.innerHTML = '';
            els.progressContainer.innerHTML = '';

            const activeIndex = app.currentSlide;
            const textMain = app.theme === 'dark' ? 'text-white' : 'text-slate-900';
            const textMuted = app.theme === 'dark' ? 'text-slate-400' : 'text-slate-500';
            const cardStyle = `background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius); backdrop-filter: blur(10px);`;

            app.slides.forEach((slide, idx) => {
                // Progress
                const bar = document.createElement('div');
                bar.className = 'h-1 flex-1 rounded-full bg-slate-400/30 overflow-hidden backdrop-blur-md mx-0.5';
                const fill = document.createElement('div');
                fill.className = 'h-full bg-slate-900 transition-all duration-300 ease-linear';
                if(app.theme === 'dark') fill.classList.replace('bg-slate-900', 'bg-white');
                
                if (idx < activeIndex) fill.style.width = '100%';
                else if (idx === activeIndex) fill.style.width = '100%';
                else fill.style.width = '0%';
                if(idx > activeIndex) fill.style.opacity = '0';
                
                bar.appendChild(fill);
                els.progressContainer.appendChild(bar);

                // Slide Logic
                const slideEl = document.createElement('div');
                
                // Determine Classes based on index logic for cleaner stacking
                let stateClass = '';
                if (idx === activeIndex) stateClass = 'slide-active';
                else if (idx > activeIndex) stateClass = 'slide-next';
                else stateClass = 'slide-prev';

                slideEl.className = `slide-container absolute inset-0 z-10 flex flex-col p-8 ${stateClass}`;
                
                let contentHTML = '';
                // Common classes for entry animations
                const animate = (delay) => `animate-on-enter ${delay}`;

                if (slide.type === 'intro') {
                    contentHTML = `
                        <div class="h-full flex flex-col justify-center items-center text-center mt-[-30px]">
                            <div class="w-28 h-28 mb-8 relative group ${animate('delay-1')}">
                                <div class="absolute inset-0 bg-brand blur-3xl opacity-30 rounded-full animate-pulse"></div>
                                <div class="relative w-full h-full rounded-2xl bg-white flex items-center justify-center shadow-xl overflow-hidden ring-4 ring-white/10" style="border-radius: var(--radius)">
                                    ${app.logo ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-contain p-2">` : `<span class="text-3xl font-bold text-slate-900">${app.companyName[0]}</span>`}
                                </div>
                            </div>
                            <h1 class="${animate('delay-2')} text-4xl font-display font-bold tracking-tight mb-3 ${textMain}">${app.companyName}</h1>
                            <div class="${animate('delay-3')} inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10" style="${cardStyle}">
                                <span class="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></span>
                                <span class="text-[10px] font-bold uppercase tracking-widest ${textMuted}">Year in Review</span>
                            </div>
                        </div>
                    `;
                } 
                else if (slide.type === 'metric') {
                    contentHTML = `
                        <div class="h-full flex flex-col justify-center">
                            <h2 class="${animate('delay-1')} text-xs font-bold uppercase tracking-widest text-brand mb-6 opacity-80">${slide.title}</h2>
                            <div class="${animate('delay-2')} text-[5rem] font-display font-bold tracking-tighter leading-[0.9] mb-6 break-words ${textMain}">${slide.value}</div>
                            <div style="${cardStyle}" class="${animate('delay-3')} p-4 inline-block self-start">
                                <p class="text-lg font-medium ${textMuted}">${slide.subtext}</p>
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'chart') {
                    const max = Math.max(...slide.bars);
                    const barsHTML = slide.bars.map((val, i) => `
                        <div class="flex-1 flex flex-col justify-end gap-2 group animate-on-enter" style="animation-delay: ${(i*0.1)+0.2}s">
                            <div class="w-full bg-brand rounded-t-sm opacity-80 group-hover:opacity-100 transition-all origin-bottom" style="height: ${(val/max)*100}%;"></div>
                        </div>
                    `).join('');

                    contentHTML = `
                         <div class="h-full flex flex-col pt-24">
                            <h2 class="${animate('delay-1')} text-3xl font-display font-bold tracking-tight mb-2 ${textMain}">${slide.title}</h2>
                            <p class="${animate('delay-1')} text-sm ${textMuted} mb-12">Performance over time</p>
                            <div class="flex-1 flex items-end gap-2 pb-12 border-b border-white/10">
                                ${barsHTML}
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'list') {
                    const itemsHTML = slide.items.map((item, i) => `
                        <div class="flex items-center gap-4 p-4 mb-3 transition-transform hover:scale-[1.02] animate-on-enter" style="${cardStyle}; animation-delay: ${0.2 + (i * 0.1)}s">
                            <div class="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center font-bold text-brand shrink-0 text-sm">${i+1}</div>
                            <span class="font-medium text-lg ${textMain}">${item}</span>
                        </div>
                    `).join('');
                    
                    contentHTML = `
                        <div class="h-full flex flex-col pt-24">
                            <h2 class="${animate('delay-1')} text-sm font-bold uppercase tracking-widest text-brand mb-8 opacity-80">${slide.title}</h2>
                            <div class="flex-1 overflow-y-auto hide-scroll pb-10">
                                ${itemsHTML}
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'team') {
                    const membersHTML = slide.members.map((m, i) => `
                        <div class="aspect-square flex flex-col items-center justify-center gap-2 p-2 text-center animate-on-enter" style="${cardStyle}; animation-delay: ${0.2 + (i*0.1)}s">
                            <div class="w-12 h-12 rounded-full bg-slate-100 overflow-hidden ring-2 ring-brand/20">
                                ${m.img ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover">` : 
                                `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand to-purple-500 text-white font-bold">${m.name[0]}</div>`}
                            </div>
                            <span class="text-xs font-semibold ${textMain} truncate w-full mt-1">${m.name}</span>
                        </div>
                    `).join('');

                    contentHTML = `
                        <div class="h-full flex flex-col pt-24">
                            <h2 class="${animate('delay-1')} text-3xl font-display font-bold ${textMain} mb-8">${slide.title}</h2>
                            <div class="grid grid-cols-2 gap-3">
                                ${membersHTML}
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'timeline') {
                    const itemsHTML = slide.items.map((item, i) => `
                        <div class="relative pl-8 pb-8 last:pb-0 animate-on-enter" style="animation-delay: ${0.2 + (i*0.1)}s">
                            <div class="absolute left-0 top-1 w-3 h-3 rounded-full bg-brand border-2 border-white ring-2 ring-brand/20 z-10"></div>
                            <div class="absolute left-[5px] top-4 bottom-0 w-0.5 bg-brand/20 last:hidden"></div>
                            <div class="text-xs font-bold text-brand uppercase tracking-wider mb-1">${item.date}</div>
                            <div class="text-xl font-medium ${textMain}">${item.text}</div>
                        </div>
                    `).join('');

                    contentHTML = `
                         <div class="h-full flex flex-col justify-center pl-4">
                            <h2 class="${animate('delay-1')} text-sm font-bold uppercase tracking-widest ${textMuted} mb-12">${slide.title}</h2>
                            <div>${itemsHTML}</div>
                        </div>
                    `;
                }
                else if (slide.type === 'split') {
                    contentHTML = `
                         <div class="h-full flex flex-col pt-24">
                            <h2 class="${animate('delay-1')} text-sm font-bold uppercase tracking-widest text-brand mb-10">${slide.title}</h2>
                            <div class="grid grid-rows-2 gap-4 h-3/5">
                                <div class="p-6 flex flex-col justify-between animate-on-enter delay-2" style="${cardStyle}">
                                    <i data-lucide="arrow-up-right" class="w-6 h-6 text-brand"></i>
                                    <div>
                                        <div class="text-4xl font-display font-bold ${textMain}">${slide.leftVal}</div>
                                        <div class="text-xs font-bold uppercase tracking-wider ${textMuted} mt-1">${slide.leftLabel}</div>
                                    </div>
                                </div>
                                <div class="p-6 flex flex-col justify-between animate-on-enter delay-3" style="${cardStyle}">
                                    <i data-lucide="zap" class="w-6 h-6 text-brand"></i>
                                    <div>
                                        <div class="text-4xl font-display font-bold ${textMain}">${slide.rightVal}</div>
                                        <div class="text-xs font-bold uppercase tracking-wider ${textMuted} mt-1">${slide.rightLabel}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'highlight') {
                    contentHTML = `
                        <div class="h-full flex flex-col justify-center relative">
                            <i data-lucide="quote" class="w-12 h-12 text-brand opacity-50 mb-6 ${animate('delay-1')}"></i>
                            <blockquote class="${animate('delay-2')} text-3xl md:text-4xl font-serif leading-tight tracking-tight mb-8 ${textMain}">
                                "${slide.text}"
                            </blockquote>
                            <div class="flex items-center gap-3 ${animate('delay-3')}">
                                <div class="w-8 h-px bg-brand"></div>
                                <span class="text-sm font-bold uppercase tracking-wider ${textMuted}">${slide.author}</span>
                            </div>
                        </div>
                    `;
                }
                else if (slide.type === 'image') {
                     contentHTML = `
                        <div class="absolute inset-0 z-0">
                            ${slide.img ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-full h-full object-cover">` : `<div class="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">No Image</div>`}
                            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30"></div>
                        </div>
                        <div class="relative z-10 h-full flex flex-col justify-end pb-12">
                            <h2 class="${animate('delay-1')} text-4xl font-display font-bold text-white tracking-tight mb-2">${slide.title}</h2>
                            <p class="${animate('delay-2')} text-white/80 font-medium">${slide.subtext}</p>
                        </div>
                    `;
                }
                else if (slide.type === 'summary') {
                    const stats = app.slides.filter(s => s.type === 'metric').slice(0, 3);
                    const statsHTML = stats.map(s => `
                         <div class="flex justify-between items-end border-b ${app.theme === 'dark' ? 'border-white/10' : 'border-slate-100'} pb-2">
                            <span class="text-xs font-bold uppercase ${textMuted}">${s.title}</span>
                            <span class="font-display font-bold ${textMain}">${s.value}</span>
                         </div>
                    `).join('');

                    contentHTML = `
                        <div class="h-full flex flex-col justify-center">
                            <div class="w-full p-6 shadow-xl relative overflow-hidden group border border-brand/20 bg-gradient-to-b from-brand/5 to-transparent animate-on-enter delay-1" style="border-radius: var(--radius); background: var(--card-bg);">
                                <div class="absolute top-0 right-0 p-4 opacity-20 transition-transform group-hover:scale-110 duration-700">
                                    <i data-lucide="sparkles" class="w-24 h-24 ${textMain}"></i>
                                </div>
                                <div class="relative z-10">
                                    <div class="flex items-center gap-3 mb-6">
                                        <div class="w-10 h-10 rounded-lg bg-brand flex items-center justify-center text-white shadow-lg shadow-brand/30">
                                            <i data-lucide="check" class="w-5 h-5"></i>
                                        </div>
                                        <div>
                                            <div class="text-lg font-bold ${textMain} leading-none">Wrapped</div>
                                            <div class="text-[10px] font-mono ${textMuted}">COMPLETED</div>
                                        </div>
                                    </div>
                                    <div class="space-y-4 mb-6">
                                        ${statsHTML || `<div class="text-xs ${textMuted}">Add metrics to populate summary</div>`}
                                    </div>
                                    <button class="w-full py-3 rounded-lg bg-brand text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-brand/20">
                                        Share Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                }

                slideEl.innerHTML = contentHTML;
                els.slidesViewport.appendChild(slideEl);
            });
            
            lucide.createIcons();
            els.indicator.textContent = `${app.currentSlide + 1} / ${app.slides.length}`;
            
            const badge = document.getElementById('brand-badge');
            if(badge) {
                if(app.currentSlide > 0 && app.logo) {
                    badge.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-contain p-1 rounded-full">`;
                    badge.classList.remove('opacity-0');
                } else if (app.currentSlide > 0) {
                     badge.textContent = app.companyName[0];
                     badge.classList.remove('opacity-0');
                } else {
                    badge.classList.add('opacity-0');
                }
            }

            // Trigger Confetti on Summary
            if (app.slides[app.currentSlide].type === 'summary') {
                fireConfetti();
            }
        }

        function renderEditorList() {
            els.slideList.innerHTML = '';
            
            app.slides.forEach((slide, idx) => {
                if(slide.locked) return; 

                const item = document.createElement('div');
                item.className = `group bg-white border ${idx === app.currentSlide ? 'border-brand ring-1 ring-brand/20' : 'border-slate-200'} rounded-lg overflow-hidden transition-all hover:shadow-md`;
                
                // Header
                const header = document.createElement('div');
                header.className = 'flex items-center justify-between p-3 bg-slate-50 border-b border-slate-100 cursor-pointer select-none';
                header.onclick = () => jumpToSlide(idx);
                header.innerHTML = `
                    <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold bg-white border border-slate-200 text-slate-500 w-5 h-5 flex items-center justify-center rounded">${idx + 1}</span>
                        <span class="text-xs font-semibold text-slate-700 uppercase tracking-wide">${slide.type}</span>
                    </div>
                    <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button onclick="moveSlide(event, ${idx}, -1)" class="p-1 hover:bg-slate-200 rounded text-slate-500"><i data-lucide="arrow-up" class="w-3 h-3"></i></button>
                         <button onclick="moveSlide(event, ${idx}, 1)" class="p-1 hover:bg-slate-200 rounded text-slate-500"><i data-lucide="arrow-down" class="w-3 h-3"></i></button>
                         <button onclick="deleteSlide(event, ${idx})" class="p-1 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded ml-1"><i data-lucide="trash-2" class="w-3 h-3"></i></button>
                    </div>
                `;

                // Inputs
                const body = document.createElement('div');
                body.className = 'p-0';
                let inputs = '';
                
                if(slide.type === 'metric') {
                    inputs = `
                        <input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 placeholder-slate-400 font-medium" placeholder="Label">
                        <input type="text" value="${slide.value}" oninput="updateSlide(${idx}, 'value', this.value)" class="w-full px-3 py-2 text-sm font-bold text-brand outline-none focus:bg-slate-50 placeholder-slate-400" placeholder="Value">
                        <input type="text" value="${slide.subtext}" oninput="updateSlide(${idx}, 'subtext', this.value)" class="w-full px-3 py-2 text-xs text-slate-500 outline-none focus:bg-slate-50 placeholder-slate-400" placeholder="Description">
                    `;
                } else if (slide.type === 'chart') {
                    inputs = `
                        <input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 font-bold" placeholder="Chart Title">
                        <div class="p-2 text-[10px] text-slate-400">Values (comma separated)</div>
                        <input type="text" value="${slide.bars.join(', ')}" oninput="updateArray(${idx}, 'bars', this.value, true)" class="w-full px-3 pb-2 text-xs text-slate-600 outline-none font-mono" placeholder="10, 20, 30...">
                    `;
                } else if (slide.type === 'timeline') {
                    const itemsStr = slide.items.map(i => `${i.date}:${i.text}`).join(', ');
                    inputs = `
                        <input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 font-bold">
                        <div class="p-2 text-[10px] text-slate-400">Milestones (Date:Event, Date:Event)</div>
                        <textarea oninput="updateTimeline(${idx}, this.value)" rows="3" class="w-full px-3 pb-2 text-xs text-slate-600 outline-none resize-none font-mono">${itemsStr}</textarea>
                    `;
                } else if (slide.type === 'team') {
                    inputs = `<input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 font-bold">`;
                    
                    // Team Members Editor
                    const membersList = slide.members.map((m, mIdx) => `
                        <div class="flex items-center gap-2 px-3 py-1.5 border-b border-slate-50 last:border-0">
                            <div class="relative w-6 h-6 rounded-full bg-slate-100 overflow-hidden shrink-0 group/img cursor-pointer">
                                ${m.img ? `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover">` : `<div class="w-full h-full flex items-center justify-center text-[10px] text-slate-400"><i data-lucide="user"></i></div>`}
                                <input type="file" onchange="uploadMemberImage(${idx}, ${mIdx}, this)" class="absolute inset-0 opacity-0 cursor-pointer" accept="image/*">
                            </div>
                            <input type="text" value="${m.name}" oninput="updateMemberName(${idx}, ${mIdx}, this.value)" class="flex-1 text-xs bg-transparent outline-none text-slate-600" placeholder="Name">
                            <button onclick="removeMember(${idx}, ${mIdx})" class="text-slate-300 hover:text-red-500"><i data-lucide="x" class="w-3 h-3"></i></button>
                        </div>
                    `).join('');
                    
                    inputs += `
                        <div class="bg-slate-50/50">${membersList}</div>
                        <button onclick="addMember(${idx})" class="w-full py-2 text-[10px] text-brand font-medium hover:bg-slate-50 transition-colors">+ Add Member</button>
                    `;

                } else if (slide.type === 'highlight') {
                    inputs = `
                         <textarea oninput="updateSlide(${idx}, 'text', this.value)" rows="2" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 placeholder-slate-400 resize-none font-medium">${slide.text}</textarea>
                         <input type="text" value="${slide.author}" oninput="updateSlide(${idx}, 'author', this.value)" class="w-full px-3 py-2 text-xs text-slate-500 outline-none focus:bg-slate-50 placeholder-slate-400" placeholder="Author">
                    `;
                } else if (slide.type === 'list') {
                    inputs = `
                        <input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs border-b border-slate-100 outline-none focus:bg-slate-50 placeholder-slate-400 font-bold" placeholder="List Title">
                        <textarea oninput="updateArray(${idx}, 'items', this.value)" rows="3" class="w-full px-3 py-2 text-xs text-slate-600 outline-none focus:bg-slate-50 placeholder-slate-400 resize-none font-mono" placeholder="Item 1, Item 2, Item 3">${slide.items.join(', ')}</textarea>
                    `;
                } else if (slide.type === 'split') {
                    inputs = `
                        <div class="grid grid-cols-2 gap-px bg-slate-100">
                             <input type="text" value="${slide.leftLabel}" oninput="updateSlide(${idx}, 'leftLabel', this.value)" class="bg-white px-2 py-2 text-xs outline-none" placeholder="Label L">
                             <input type="text" value="${slide.rightLabel}" oninput="updateSlide(${idx}, 'rightLabel', this.value)" class="bg-white px-2 py-2 text-xs outline-none" placeholder="Label R">
                             <input type="text" value="${slide.leftVal}" oninput="updateSlide(${idx}, 'leftVal', this.value)" class="bg-white px-2 py-2 text-xs font-bold text-brand outline-none" placeholder="Val L">
                             <input type="text" value="${slide.rightVal}" oninput="updateSlide(${idx}, 'rightVal', this.value)" class="bg-white px-2 py-2 text-xs font-bold text-brand outline-none" placeholder="Val R">
                        </div>
                    `;
                } else if (slide.type === 'image') {
                    inputs = `
                        <div class="relative group h-10 bg-slate-50 border-b border-slate-100 flex items-center justify-center cursor-pointer">
                             <input type="file" onchange="uploadSlideImage(${idx}, this)" class="absolute inset-0 opacity-0 cursor-pointer z-10">
                             <span class="text-[10px] text-slate-400 flex items-center gap-1 group-hover:text-brand"><i data-lucide="image" class="w-3 h-3"></i> ${slide.img ? 'Change Image' : 'Upload Image'}</span>
                        </div>
                        <input type="text" value="${slide.title}" oninput="updateSlide(${idx}, 'title', this.value)" class="w-full px-3 py-2 text-xs outline-none font-medium" placeholder="Title Overlay">
                    `;
                }

                body.innerHTML = inputs;
                item.appendChild(header);
                item.appendChild(body);
                els.slideList.appendChild(item);
            });
            lucide.createIcons();
        }

        // --- ACTIONS ---

        function updateUI() {
            // Theme Active State
            document.querySelectorAll('.theme-btn').forEach(btn => {
                const ring = btn.querySelector('.active-ring');
                ring.classList.toggle('opacity-0', btn.dataset.theme !== app.theme);
                ring.classList.toggle('scale-95', btn.dataset.theme !== app.theme);
            });

            // Anim Active State
            document.querySelectorAll('.anim-btn').forEach(btn => {
                const isActive = btn.dataset.anim === app.transition;
                btn.className = `anim-btn p-2 rounded-lg border text-[10px] font-medium text-center transition-all ${isActive ? 'border-brand text-brand bg-brand/5 shadow-sm' : 'border-slate-200 text-slate-600 bg-slate-50 hover:border-brand/50'}`;
            });

            // Radius Buttons
            document.getElementById('r-round').className = `flex-1 rounded flex items-center justify-center text-xs font-medium transition-colors ${app.radius === 'rounded' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700'}`;
            document.getElementById('r-square').className = `flex-1 rounded flex items-center justify-center text-xs font-medium transition-colors ${app.radius === 'square' ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700'}`;
        }

        function setTheme(t) { app.theme = t; render(); }
        function setVibe(v) { app.bgVibe = v; renderPhoneStyles(); }
        function setFont(f) { app.font = f; renderPhoneStyles(); }
        function setRadius(r) { app.radius = r; renderPhoneStyles(); }
        function setTransition(t) { app.transition = t; renderPhoneStyles(); updateUI(); }

        function setEditorTab(tab) {
            document.getElementById('panel-identity').classList.add('hidden');
            document.getElementById('panel-slides').classList.add('hidden');
            document.getElementById('etab-identity').className = 'pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-200 transition-all';
            document.getElementById('etab-slides').className = 'pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-200 transition-all';

            document.getElementById(`panel-${tab}`).classList.remove('hidden');
            document.getElementById(`etab-${tab}`).className = 'pb-3 text-sm font-medium text-slate-900 border-b-2 border-slate-900 transition-all';
        }

        function toggleAddMenu() { els.addMenu.classList.toggle('hidden'); }

        function addSlide(type) {
            toggleAddMenu();
            let newSlide = { type };
            if(type === 'metric') newSlide = { ...newSlide, title: 'New Metric', value: '10k', subtext: 'Subtitle' };
            if(type === 'list') newSlide = { ...newSlide, title: 'List', items: ['Item 1', 'Item 2'] };
            if(type === 'split') newSlide = { ...newSlide, title: 'Comparison', leftVal: 'A', leftLabel: 'Label', rightVal: 'B', rightLabel: 'Label' };
            if(type === 'highlight') newSlide = { ...newSlide, text: 'Amazing quote.', author: 'Source' };
            if(type === 'image') newSlide = { ...newSlide, title: 'Title', subtext: 'Subtitle', img: null };
            if(type === 'chart') newSlide = { ...newSlide, title: 'Growth', bars: [20, 40, 30, 80, 50, 90] };
            if(type === 'team') newSlide = { ...newSlide, title: 'Team', members: [{name: 'Member 1', img: null}, {name: 'Member 2', img: null}] };
            if(type === 'timeline') newSlide = { ...newSlide, title: 'Timeline', items: [{date:'Jan', text:'Start'}, {date:'Dec', text:'End'}] };

            app.slides.splice(app.slides.length - 1, 0, newSlide);
            app.currentSlide = app.slides.length - 2;
            render();
        }

        function updateSlide(idx, key, val) { app.slides[idx][key] = val; renderSlides(); }
        
        // Team Slide Specific Helpers
        function updateMemberName(slideIdx, memberIdx, name) {
            app.slides[slideIdx].members[memberIdx].name = name;
            renderSlides();
        }
        function removeMember(slideIdx, memberIdx) {
            app.slides[slideIdx].members.splice(memberIdx, 1);
            renderSlides();
            renderEditorList();
        }
        function addMember(slideIdx) {
            app.slides[slideIdx].members.push({name: 'New Member', img: null});
            renderSlides();
            renderEditorList();
        }
        function uploadMemberImage(slideIdx, memberIdx, input) {
            const file = input.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    app.slides[slideIdx].members[memberIdx].img = ev.target.result;
                    renderSlides();
                    renderEditorList();
                };
                reader.readAsDataURL(file);
            }
        }

        function updateArray(idx, key, val, isNum = false) {
            const arr = val.split(',').map(s => s.trim());
            app.slides[idx][key] = isNum ? arr.map(Number) : arr;
            renderSlides();
        }

        function updateTimeline(idx, val) {
            const lines = val.split(',');
            app.slides[idx].items = lines.map(l => {
                const [d, t] = l.split(':');
                return { date: d ? d.trim() : '', text: t ? t.trim() : '' };
            });
            renderSlides();
        }

        function deleteSlide(e, idx) {
            e.stopPropagation();
            if(confirm('Remove this slide?')) {
                app.slides.splice(idx, 1);
                app.currentSlide = Math.max(0, idx - 1);
                render();
            }
        }

        function moveSlide(e, idx, dir) {
            e.stopPropagation();
            if(idx === 0 || idx === app.slides.length -1) return;
            const newIdx = idx + dir;
            if (newIdx < 1 || newIdx >= app.slides.length - 1) return;
            [app.slides[idx], app.slides[newIdx]] = [app.slides[newIdx], app.slides[idx]];
            app.currentSlide = newIdx;
            render();
        }

        function jumpToSlide(idx) {
            app.currentSlide = idx;
            renderSlides();
            renderEditorList(); 
            if(window.innerWidth < 768 && app.mode !== 'preview') setMode('preview');
        }

        function nextSlide() {
            if (app.currentSlide < app.slides.length - 1) {
                app.currentSlide++;
                renderSlides();
                renderEditorList();
            }
        }

        function prevSlide() {
            if (app.currentSlide > 0) {
                app.currentSlide--;
                renderSlides();
                renderEditorList();
            }
        }

        function setMode(m) {
            app.mode = m;
            if(m === 'editor') {
                document.getElementById('sidebar').classList.remove('translate-y-full', 'hidden');
                document.getElementById('preview-area').classList.add('hidden');
                document.getElementById('tab-editor').classList.replace('text-brand', 'text-brand'); 
                document.getElementById('tab-editor').classList.add('border-brand');
                document.getElementById('tab-preview').classList.remove('text-brand', 'border-brand');
            } else {
                document.getElementById('sidebar').classList.add('hidden');
                document.getElementById('preview-area').classList.remove('hidden');
                document.getElementById('preview-area').classList.replace('hidden', 'flex');
                document.getElementById('tab-preview').classList.add('text-brand', 'border-brand');
                document.getElementById('tab-editor').classList.remove('text-brand', 'border-brand');
            }
        }

        els.logoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    app.logo = ev.target.result;
                    document.getElementById('logo-preview').src = app.logo;
                    document.getElementById('logo-preview').classList.remove('hidden');
                    document.getElementById('logo-placeholder').classList.add('opacity-0');
                    renderSlides();
                };
                reader.readAsDataURL(file);
            }
        });

        function uploadSlideImage(idx, input) {
            const file = input.files[0];
            if(file) {
                const reader = new FileReader();
                reader.onload = (ev) => {
                    app.slides[idx].img = ev.target.result;
                    renderSlides();
                    renderEditorList();
                };
                reader.readAsDataURL(file);
            }
        }

        function syncColor(hex) {
            app.brandColor = hex;
            els.colorInput.value = hex;
            els.hexInput.value = hex;
            document.getElementById('color-swatch').style.backgroundColor = hex;
            document.documentElement.style.setProperty('--brand-color', hex);
            document.documentElement.style.setProperty('--brand-dim', hex + '20');
            renderPhoneStyles();
            renderSlides();
        }

        els.colorInput.addEventListener('input', (e) => syncColor(e.target.value));
        els.hexInput.addEventListener('change', (e) => syncColor(e.target.value));
        els.companyInput.addEventListener('input', (e) => { app.companyName = e.target.value; renderSlides(); });

        // --- CONFETTI ENGINE ---
        const canvas = document.getElementById('confetti-canvas');
        const ctx = canvas.getContext('2d');
        let confetti = [];
        
        function resizeCanvas() {
            const rect = els.phoneScreen.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
        
        function fireConfetti() {
            resizeCanvas();
            confetti = [];
            const colors = [app.brandColor, '#ffffff', '#FFD700', '#FF69B4'];
            for (let i = 0; i < 60; i++) {
                confetti.push({
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    w: Math.random() * 8 + 4,
                    h: Math.random() * 8 + 4,
                    dx: (Math.random() - 0.5) * 10,
                    dy: (Math.random() - 1) * 10 - 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    rot: Math.random() * 360,
                    dRot: Math.random() * 10 - 5
                });
            }
            requestAnimationFrame(animateConfetti);
        }

        function animateConfetti() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let active = false;
            confetti.forEach(c => {
                c.x += c.dx;
                c.y += c.dy;
                c.dy += 0.2; // gravity
                c.rot += c.dRot;
                if (c.y < canvas.height) {
                    active = true;
                    ctx.save();
                    ctx.translate(c.x, c.y);
                    ctx.rotate(c.rot * Math.PI / 180);
                    ctx.fillStyle = c.color;
                    ctx.fillRect(-c.w/2, -c.h/2, c.w, c.h);
                    ctx.restore();
                }
            });
            if(active) requestAnimationFrame(animateConfetti);
        }

        // Init
        syncColor('#5e6ad2');
        render();
        
        // Navigation Shortcuts
        document.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowRight') nextSlide();
            if(e.key === 'ArrowLeft') prevSlide();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-slate-200 bg-white z-40 shrink-0 flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-800 to-black text-white flex items-center justify-center font-display font-semibold text-sm shadow-md">W</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900">Wrapped Studio</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Autosaved
            </div>
<button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-1.5 rounded-md text-xs font-medium transition-all shadow-sm flex items-center gap-2">
                Export <i className="w-3.5 h-3.5" data-lucide="download"></i>
</button>
</div>
</header>

<div className="md:hidden flex border-b border-slate-200 bg-white shrink-0">
<button className="flex-1 py-3 text-xs font-semibold text-brand border-b-2 border-brand transition-colors" id="tab-editor" onclick="setMode('editor')">Editor</button>
<button className="flex-1 py-3 text-xs font-semibold text-slate-500 border-b-2 border-transparent transition-colors" id="tab-preview" onclick="setMode('preview')">Preview</button>
</div>

<main className="flex-1 flex overflow-hidden relative">

<aside className="w-full md:w-[420px] lg:w-[460px] bg-white border-r border-slate-200 flex flex-col z-20 transition-transform absolute md:relative inset-0 md:inset-auto h-full shadow-[4px_0_24px_-12px_rgba(0,0,0,0.1)]" id="sidebar">
<div className="flex px-6 pt-6 gap-6 border-b border-slate-100 shrink-0">
<button className="pb-3 text-sm font-medium text-slate-900 border-b-2 border-slate-900 transition-all" id="etab-identity" onclick="setEditorTab('identity')">Identity</button>
<button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 border-b-2 border-transparent hover:border-slate-200 transition-all" id="etab-slides" onclick="setEditorTab('slides')">Story</button>
</div>
<div className="flex-1 overflow-y-auto hide-scroll p-6 pb-20">

<div className="space-y-8 animate-enter-up" id="panel-identity">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Brand Assets</h3>
</div>
<div className="group relative w-full h-28 border border-dashed border-slate-300 rounded-xl hover:border-brand hover:bg-brand-dim/10 transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden">
<input accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" id="logo-input" type="file"/>
<div className="text-center transition-all group-hover:scale-105" id="logo-placeholder">
<div className="w-8 h-8 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mx-auto mb-2 text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="upload"></i>
</div>
<span className="text-xs font-medium text-slate-500">Upload Logo</span>
</div>
<img className="absolute inset-0 w-full h-full object-contain p-4 hidden pointer-events-none" id="logo-preview" src=""/>
</div>
<input className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 focus:ring-2 focus:ring-brand/20 focus:border-brand outline-none transition-all placeholder:text-slate-400 text-slate-800" id="company-name" placeholder="Company Name" type="text" value="Acme Corp"/>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="space-y-5">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Visual Style</h3>

<div className="grid grid-cols-2 gap-3">
<button className="theme-btn relative group border border-slate-200 rounded-xl p-3 flex items-center gap-3 hover:border-brand/50 transition-all bg-white" data-theme="light" onclick="setTheme('light')">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center"><i className="w-3.5 h-3.5 text-slate-500" data-lucide="sun"></i></div>
<span className="text-xs font-medium text-slate-700">Light</span>
<div className="absolute inset-0 border-2 border-brand rounded-xl opacity-0 scale-95 transition-all active-ring"></div>
</button>
<button className="theme-btn relative group border border-slate-200 rounded-xl p-3 flex items-center gap-3 hover:border-brand/50 transition-all bg-slate-900" data-theme="dark" onclick="setTheme('dark')">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><i className="w-3.5 h-3.5 text-white" data-lucide="moon"></i></div>
<span className="text-xs font-medium text-white">Dark</span>
<div className="absolute inset-0 border-2 border-brand rounded-xl opacity-0 scale-95 transition-all active-ring"></div>
</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Brand Color</label>
<div className="flex gap-2">
<div className="color-wrapper w-9 h-9 rounded-lg shadow-sm border border-slate-200 relative overflow-hidden shrink-0 transition-transform hover:scale-105">
<input id="color-input" type="color" value="#5e6ad2"/>
<div className="w-full h-full bg-[#5e6ad2]" id="color-swatch"></div>
</div>
<input className="w-full font-mono text-[10px] uppercase bg-slate-50 border border-slate-200 rounded-lg px-2 outline-none focus:border-brand text-slate-600" id="hex-input" type="text" value="#5e6ad2"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Typography</label>
<select className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 h-9 outline-none focus:border-brand cursor-pointer" onchange="setFont(this.value)">
<option value="sans">Modern Sans</option>
<option value="serif">Elegant Serif</option>
<option value="mono">Tech Mono</option>
</select>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Background</label>
<select className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 h-9 outline-none focus:border-brand cursor-pointer" id="vibe-select" onchange="setVibe(this.value)">
<option value="mesh">Mesh Gradient</option>
<option value="grid">Technical Grid</option>
<option value="solid">Clean Solid</option>
<option value="waves">Abstract Waves</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Corners</label>
<div className="flex bg-slate-100 rounded-lg p-1 h-9">
<button className="flex-1 rounded flex items-center justify-center text-xs font-medium transition-colors bg-white shadow-sm text-slate-800" id="r-round" onclick="setRadius('rounded')">Round</button>
<button className="flex-1 rounded flex items-center justify-center text-xs font-medium transition-colors text-slate-500 hover:text-slate-700" id="r-square" onclick="setRadius('square')">Square</button>
</div>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="space-y-4">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Physics</h3>
<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Slide Transition</label>
<div className="grid grid-cols-4 gap-2">
<button className="anim-btn p-2 rounded-lg border border-slate-200 text-[10px] font-medium text-slate-600 hover:border-brand hover:text-brand bg-slate-50 text-center transition-all" data-anim="fx-slide" onclick="setTransition('fx-slide')">Slide</button>
<button className="anim-btn p-2 rounded-lg border border-slate-200 text-[10px] font-medium text-slate-600 hover:border-brand hover:text-brand bg-slate-50 text-center transition-all" data-anim="fx-stack" onclick="setTransition('fx-stack')">Stack</button>
<button className="anim-btn p-2 rounded-lg border border-slate-200 text-[10px] font-medium text-slate-600 hover:border-brand hover:text-brand bg-slate-50 text-center transition-all" data-anim="fx-zoom" onclick="setTransition('fx-zoom')">Zoom</button>
<button className="anim-btn p-2 rounded-lg border border-slate-200 text-[10px] font-medium text-slate-600 hover:border-brand hover:text-brand bg-slate-50 text-center transition-all" data-anim="fx-fade" onclick="setTransition('fx-fade')">Fade</button>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden animate-enter-up" id="panel-slides">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Sequence</h3>
<div className="relative">
<button className="flex items-center gap-1.5 text-xs font-semibold text-white bg-brand px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-sm shadow-brand/20" onclick="toggleAddMenu()">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Add Slide
                            </button>
<div className="hidden absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-xl z-50 py-1 overflow-hidden origin-top-right transition-all transform animate-in fade-in zoom-in-95" id="add-menu">
<div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100">Data</div>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('metric')"><i className="w-3 h-3 opacity-50" data-lucide="hash"></i> Big Metric</button>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('chart')"><i className="w-3 h-3 opacity-50" data-lucide="bar-chart-2"></i> Bar Chart</button>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('split')"><i className="w-3 h-3 opacity-50" data-lucide="columns"></i> Comparison</button>
<div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100 border-t mt-1">Social</div>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('list')"><i className="w-3 h-3 opacity-50" data-lucide="list"></i> Top List</button>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('team')"><i className="w-3 h-3 opacity-50" data-lucide="users"></i> Team Grid</button>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('highlight')"><i className="w-3 h-3 opacity-50" data-lucide="quote"></i> Quote</button>
<div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 border-b border-slate-100 border-t mt-1">Visual</div>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('image')"><i className="w-3 h-3 opacity-50" data-lucide="image"></i> Hero Image</button>
<button className="w-full text-left px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand flex gap-2 items-center" onclick="addSlide('timeline')"><i className="w-3 h-3 opacity-50" data-lucide="git-commit-vertical"></i> Timeline</button>
</div>
</div>
</div>
<div className="space-y-3" id="slide-list-container"></div>
<div className="text-center py-8">
<div className="text-[10px] font-medium text-slate-400 bg-slate-100 inline-block px-3 py-1 rounded-full border border-slate-200">
                             Intro &amp; Summary are generated automatically
                         </div>
</div>
</div>
</div>
</aside>

<section className="flex-1 bg-slate-100 relative flex items-center justify-center p-4 md:p-8 overflow-hidden hidden md:flex" id="preview-area">
<div className="absolute inset-0 pointer-events-none opacity-30">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-200 rounded-full blur-[130px] mix-blend-multiply animate-blob"></div>
<div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-pink-200 rounded-full blur-[130px] mix-blend-multiply animate-blob" style={{animationDelay: '4s'}}></div>
</div>

<div className="relative z-10 transition-transform duration-500 ease-out scale-90 md:scale-95 lg:scale-100 origin-center">
<div className="w-[370px] h-[750px] bg-slate-900 rounded-[55px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-[8px] border-slate-900 ring-1 ring-white/10 relative select-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 h-[26px] w-[120px] bg-black rounded-b-[16px] z-50"></div>

<div className="w-full h-full rounded-[47px] relative flex flex-col transition-colors duration-500 overflow-hidden fx-slide" id="phone-screen">
<canvas id="confetti-canvas"></canvas>

<div className="absolute top-0 left-0 right-0 p-5 pt-12 z-40 flex justify-between items-start pointer-events-none">
<div className="absolute top-5 left-7 right-7 flex gap-1.5 h-1 z-50" id="progress-bars"></div>
<div className="w-8 h-8 rounded-full bg-slate-200/20 backdrop-blur-md flex items-center justify-center text-[10px] font-bold opacity-0 transition-opacity duration-300 shadow-sm border border-white/10" id="brand-badge"></div>
</div>

<div className="w-full h-full relative perspective-[1000px]" id="slides-viewport"></div>

<div className="absolute inset-0 z-50 flex">
<div className="w-1/3 h-full cursor-w-resize active:bg-black/5 transition-colors" onclick="prevSlide()"></div>
<div className="w-2/3 h-full cursor-e-resize active:bg-black/5 transition-colors" onclick="nextSlide()"></div>
</div>
</div>
</div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-white/50 shadow-lg shadow-slate-200/20">
<button className="p-2 hover:bg-white rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm" onclick="prevSlide()"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<span className="text-xs font-mono font-medium text-slate-500 w-12 text-center" id="slide-indicator">1 / 5</span>
<button className="p-2 hover:bg-white rounded-full text-slate-500 hover:text-slate-900 transition-colors shadow-sm" onclick="nextSlide()"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</section>
</main>


    </>
  );
}
