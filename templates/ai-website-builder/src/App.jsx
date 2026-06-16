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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
50: '#eff4ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        // --- AURA ENGINE CORE ---
        const Aura = {
            state: {
                projects: [],
                currentProjectId: null,
                device: 'desktop',
            },

            // --- INIT ---
            init() {
                // Load from localStorage
                const saved = localStorage.getItem('aura_projects');
                if (saved) {
                    this.state.projects = JSON.parse(saved);
                }
                
                // Route
                this.router.navigate('dashboard');
            },

            // --- ROUTER & VIEWS ---
            router: {
                navigate(view) {
                    const appRoot = document.getElementById('app-root');
                    if (view === 'dashboard') {
                        appRoot.innerHTML = document.getElementById('tpl-dashboard').innerHTML;
                        Aura.renderProjects();
                        Aura.updateStats();
                    } else if (view === 'editor') {
                        appRoot.innerHTML = document.getElementById('tpl-editor').innerHTML;
                        Aura.loadEditor();
                    }
                }
            },

            // --- AI AGENT LOGIC ---
            agent: {
                isOpen: false,
                
                toggle() {
                    const win = document.getElementById('ai-agent-window');
                    const btn = document.getElementById('ai-trigger');
                    const input = document.getElementById('ai-input');
                    
                    this.isOpen = !this.isOpen;
                    
                    if (this.isOpen) {
                        win.classList.remove('hidden');
                        btn.classList.add('scale-0', 'opacity-0');
                        setTimeout(() => input.focus(), 100);
                    } else {
                        win.classList.add('hidden');
                        btn.classList.remove('scale-0', 'opacity-0');
                    }
                },

                appendMessage(role, text) {
                    const container = document.getElementById('ai-messages');
                    const isAi = role === 'ai';
                    
                    const html = isAi 
                        ? `<div class="flex gap-3 animate-enter">
                                <div class="w-8 h-8 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                                    <span class="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                                </div>
                                <div class="flex-1">
                                    <div class="bg-zinc-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-zinc-700 leading-relaxed shadow-sm">
                                        ${text}
                                    </div>
                                </div>
                           </div>`
                        : `<div class="flex justify-end animate-enter">
                                <div class="bg-blue-600 rounded-2xl rounded-tr-none px-4 py-2.5 text-sm text-white shadow-sm max-w-[85%]">
                                    ${text}
                                </div>
                           </div>`;
                    
                    container.insertAdjacentHTML('beforeend', html);
                    container.scrollTop = container.scrollHeight;
                },

                send() {
                    const input = document.getElementById('ai-input');
                    const text = input.value.trim();
                    if (!text) return;
                    
                    // User Message
                    this.appendMessage('user', text);
                    input.value = '';
                    
                    // Show thinking state
                    const container = document.getElementById('ai-messages');
                    const thinkingId = 'thinking-' + Date.now();
                    container.insertAdjacentHTML('beforeend', `
                        <div id="${thinkingId}" class="flex gap-3 animate-enter">
                            <div class="w-8 h-8 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
                                <span class="iconify" data-icon="lucide:loader-2" data-width="14" class="animate-spin"></span>
                            </div>
                            <div class="flex items-center text-xs text-zinc-400">Processing changes...</div>
                        </div>
                    `);
                    container.scrollTop = container.scrollHeight;

                    // Simulate AI Processing
                    setTimeout(() => {
                        document.getElementById(thinkingId).remove();
                        this.processCommand(text);
                    }, 1200);
                },

                processCommand(text) {
                    const t = text.toLowerCase();
                    let response = "I've made those updates for you.";
                    let changed = false;
                    const canvas = document.getElementById('editor-canvas');
                    
                    // Simple Rule-Based Simulation
                    if (t.includes('dark mode') || t.includes('dark theme')) {
                        Aura.updateTheme('zinc');
                        // Force dark background on sections
                        canvas.querySelectorAll('section, header, footer').forEach(el => {
                            el.classList.remove('bg-white', 'bg-zinc-50');
                            el.classList.add('bg-zinc-900', 'text-white');
                            el.querySelectorAll('.text-zinc-900').forEach(t => t.classList.replace('text-zinc-900', 'text-white'));
                            el.querySelectorAll('.text-zinc-500').forEach(t => t.classList.replace('text-zinc-500', 'text-zinc-400'));
                        });
                        response = "I've switched the design to dark mode.";
                        changed = true;
                    } 
                    else if (t.includes('button') && (t.includes('red') || t.includes('blue') || t.includes('green'))) {
                        const color = t.includes('red') ? 'bg-red-600' : t.includes('green') ? 'bg-green-600' : 'bg-blue-600';
                        canvas.querySelectorAll('button:not(.section-controls button)').forEach(btn => {
                            btn.className = btn.className.replace(/bg-\w+-\d+/g, color);
                        });
                        response = `I've updated all buttons to match your color preference.`;
                        changed = true;
                    }
                    else if (t.includes('headline') || t.includes('title')) {
                         canvas.querySelectorAll('h1, h2').forEach(h => {
                            h.classList.add('uppercase');
                         });
                         response = "I've made the headlines uppercase for more impact.";
                         changed = true;
                    }
                    else if (t.includes('rounded')) {
                        canvas.querySelectorAll('button, .rounded-xl, .rounded-lg').forEach(el => {
                            el.classList.remove('rounded-xl', 'rounded-lg', 'rounded-md');
                            el.classList.add('rounded-full');
                        });
                        response = "I've increased the border radius to make elements more rounded.";
                        changed = true;
                    }
                    else if (t.includes('add') && t.includes('pricing')) {
                        Aura.addSection('pricing');
                        response = "I've added a new pricing section to the bottom of the page.";
                        changed = true;
                    }
                    else {
                        response = "I understand you want to change the design. Try asking me to 'switch to dark mode', 'change buttons to red', or 'add a pricing section'.";
                    }

                    if (changed) Aura.saveCurrentProjectChanges();
                    this.appendMessage('ai', response);
                }
            },

            // --- DASHBOARD LOGIC ---
            renderProjects() {
                const grid = document.getElementById('project-grid');
                const empty = document.getElementById('empty-state');
                
                if (this.state.projects.length === 0) {
                    grid.innerHTML = '';
                    empty.classList.remove('hidden');
                    return;
                }

                empty.classList.add('hidden');
                grid.innerHTML = this.state.projects.map(p => `
                    <div class="group bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-all cursor-pointer flex flex-col h-full" onclick="Aura.openProject('${p.id}')">
                        <div class="h-40 bg-zinc-100 relative overflow-hidden flex items-center justify-center border-b border-zinc-100">
                             <!-- Mini Preview Mock -->
                             <div class="w-3/4 h-full bg-white shadow-lg mt-8 rounded-t-lg border border-zinc-200 scale-90 group-hover:scale-95 transition-transform p-2 space-y-2 opacity-80">
                                <div class="h-2 w-1/3 bg-zinc-200 rounded"></div>
                                <div class="h-16 w-full bg-zinc-50 rounded"></div>
                                <div class="flex gap-1"><div class="h-8 w-1/2 bg-zinc-50 rounded"></div><div class="h-8 w-1/2 bg-zinc-50 rounded"></div></div>
                             </div>
                             ${p.status === 'published' ? '<span class="absolute top-3 right-3 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-200">LIVE</span>' : ''}
                        </div>
                        <div class="p-4 flex-1 flex flex-col">
                            <h3 class="font-medium text-zinc-900">${p.name}</h3>
                            <p class="text-xs text-zinc-500 mt-1">Edited ${new Date(p.updatedAt).toLocaleDateString()}</p>
                            <div class="mt-4 flex gap-2 pt-4 border-t border-zinc-50">
                                <button class="flex-1 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-900 text-xs font-medium py-2 rounded transition-colors">Edit</button>
                                <button onclick="event.stopPropagation(); Aura.deleteProject('${p.id}')" class="px-2 text-zinc-400 hover:text-red-500 transition-colors"><span class="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
                            </div>
                        </div>
                    </div>
                `).join('');
            },

            updateStats() {
                document.getElementById('stat-projects').innerText = this.state.projects.length;
                document.getElementById('stat-views').innerText = this.state.projects.reduce((acc, curr) => acc + (curr.views || 0), 0);
            },

            // --- PROJECT MANAGEMENT ---
            openPrompt() {
                document.getElementById('modal-prompt').classList.remove('hidden');
                document.getElementById('prompt-input').focus();
            },

            closeModal(id) {
                document.getElementById(id).classList.add('hidden');
            },

            generateSite() {
                const prompt = document.getElementById('prompt-input').value;
                if (!prompt) return;
                
                // Simulate AI Thinking
                const btn = document.querySelector('#modal-prompt button');
                const originalText = btn.innerHTML;
                btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2"></span> Generative AI...`;
                
                setTimeout(() => {
                    // Create New Project Data
                    const newProject = {
                        id: 'proj_' + Date.now(),
                        name: prompt.split(' ').slice(0, 3).join(' ') || 'Untitled Project',
                        html: this.ai.generateHTML(prompt),
                        status: 'draft',
                        updatedAt: Date.now(),
                        views: 0,
                        publishedUrl: null
                    };
                    
                    this.state.projects.unshift(newProject);
                    this.saveState();
                    this.state.currentProjectId = newProject.id;
                    
                    this.closeModal('modal-prompt');
                    this.router.navigate('editor');
                }, 1500);
            },

            openProject(id) {
                this.state.currentProjectId = id;
                this.router.navigate('editor');
            },

            deleteProject(id) {
                if(!confirm('Delete this project?')) return;
                this.state.projects = this.state.projects.filter(p => p.id !== id);
                this.saveState();
                this.renderProjects();
                this.updateStats();
            },

            saveState() {
                localStorage.setItem('aura_projects', JSON.stringify(this.state.projects));
            },

            // --- EDITOR LOGIC ---
            loadEditor() {
                const project = this.state.projects.find(p => p.id === this.state.currentProjectId);
                if (!project) return this.router.navigate('dashboard');
                
                document.getElementById('editor-project-name').innerText = project.name;
                document.getElementById('editor-canvas').innerHTML = project.html;
                
                // Update Status UI
                const statusDot = document.getElementById('status-indicator');
                const statusText = document.getElementById('status-text');
                if(project.status === 'published') {
                    statusDot.className = 'w-1.5 h-1.5 rounded-full bg-green-500';
                    statusText.innerText = 'Published';
                }

                // Add listeners to canvas
                this.attachEditorListeners();
            },

            attachEditorListeners() {
                const canvas = document.getElementById('editor-canvas');
                
                // Make text editable
                canvas.querySelectorAll('h1, h2, h3, p, a, button, span').forEach(el => {
                    el.classList.add('aura-editable');
                    el.contentEditable = "true";
                    el.oninput = () => this.saveCurrentProjectChanges();
                });

                // Section Hover Controls
                canvas.querySelectorAll('section, header, footer').forEach(sec => {
                    sec.classList.add('relative', 'section-hover', 'group');
                    if (!sec.querySelector('.section-controls')) {
                        const controls = document.createElement('div');
                        controls.className = 'section-controls absolute top-2 right-2 flex gap-1 opacity-0 transition-opacity bg-white shadow-sm border border-zinc-200 rounded p-1 z-50';
                        controls.contentEditable = "false";
                        controls.innerHTML = `
                            <button class="p-1 hover:bg-red-50 text-red-500 rounded" title="Remove"><span class="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
                            <button class="p-1 hover:bg-zinc-50 text-zinc-600 rounded" title="Move Up"><span class="iconify" data-icon="lucide:arrow-up" data-width="14"></span></button>
                            <button class="p-1 hover:bg-zinc-50 text-zinc-600 rounded" title="Move Down"><span class="iconify" data-icon="lucide:arrow-down" data-width="14"></span></button>
                        `;
                        
                        // Handlers
                        const [btnDel, btnUp, btnDown] = controls.querySelectorAll('button');
                        btnDel.onclick = () => { sec.remove(); this.saveCurrentProjectChanges(); };
                        btnUp.onclick = () => { if(sec.previousElementSibling) sec.parentNode.insertBefore(sec, sec.previousElementSibling); this.saveCurrentProjectChanges(); };
                        btnDown.onclick = () => { if(sec.nextElementSibling) sec.parentNode.insertBefore(sec.nextElementSibling, sec); this.saveCurrentProjectChanges(); };

                        sec.appendChild(controls);
                    }
                });
            },

            saveCurrentProjectChanges() {
                const project = this.state.projects.find(p => p.id === this.state.currentProjectId);
                if (project) {
                    project.html = document.getElementById('editor-canvas').innerHTML;
                    project.updatedAt = Date.now();
                    this.saveState();
                }
            },

            addSection(type) {
                const canvas = document.getElementById('editor-canvas');
                let html = '';
                if (type === 'hero') html = this.ai.templates.hero;
                if (type === 'features') html = this.ai.templates.features;
                if (type === 'pricing') html = this.ai.templates.pricing;
                if (type === 'cta') html = this.ai.templates.cta;
                if (type === 'footer') html = this.ai.templates.footer;
                
                canvas.insertAdjacentHTML('beforeend', html);
                this.attachEditorListeners();
                this.saveCurrentProjectChanges();
                
                // Scroll to bottom
                document.getElementById('canvas-wrapper').scrollTop = document.getElementById('canvas-wrapper').scrollHeight;
            },

            setDevice(device) {
                const wrapper = document.getElementById('canvas-wrapper');
                const btns = ['dev-desktop', 'dev-tablet', 'dev-mobile'];
                
                btns.forEach(b => document.getElementById(b).classList.replace('bg-white', 'text-zinc-500'));
                btns.forEach(b => document.getElementById(b).classList.remove('shadow-sm'));
                
                document.getElementById(`dev-${device}`).classList.add('bg-white', 'shadow-sm', 'text-zinc-900');
                document.getElementById(`dev-${device}`).classList.remove('text-zinc-500');

                if (device === 'desktop') wrapper.style.maxWidth = '100%';
                if (device === 'tablet') wrapper.style.maxWidth = '768px';
                if (device === 'mobile') wrapper.style.maxWidth = '375px';
            },

            updateTheme(color) {
                const map = {
                    'blue': 'bg-blue-600',
                    'violet': 'bg-violet-600',
                    'emerald': 'bg-emerald-600',
                    'zinc': 'bg-zinc-900'
                };
                const canvas = document.getElementById('editor-canvas');
                const buttons = canvas.querySelectorAll('button:not(.section-controls button), .bg-indigo-600, .bg-blue-600, .bg-violet-600, .bg-emerald-600, .bg-zinc-900');
                buttons.forEach(b => {
                    b.className = b.className.replace(/bg-\w+-600/g, map[color]);
                    if(color === 'zinc') b.className = b.className.replace(/bg-\w+-900/g, map[color]);
                });
                this.saveCurrentProjectChanges();
            },
            
            updateFont(font) {
                document.getElementById('editor-canvas').style.fontFamily = font;
            },

            // --- PUBLISHING & EXPORT ---
            toggleCode() {
                const code = this.prettyPrint(document.getElementById('editor-canvas').innerHTML);
                document.getElementById('code-content').textContent = code;
                document.getElementById('modal-code').classList.remove('hidden');
            },

            copyCode() {
                const code = document.getElementById('code-content').textContent;
                navigator.clipboard.writeText(code);
                alert('Copied to clipboard!');
            },

            publish() {
                const btn = document.getElementById('btn-publish');
                const ogText = btn.innerHTML;
                btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2"></span> Publishing...`;
                
                setTimeout(() => {
                    const project = this.state.projects.find(p => p.id === this.state.currentProjectId);
                    project.status = 'published';
                    project.publishedUrl = `https://${project.name.toLowerCase().replace(/\s+/g, '-')}.aura.site`;
                    this.saveState();
                    
                    btn.innerHTML = ogText;
                    
                    document.getElementById('publish-url').innerText = project.publishedUrl;
                    
                    const visitLink = document.getElementById('visit-link');
                    visitLink.onclick = (e) => {
                        e.preventDefault();
                        this.openLiveView();
                    };
                    
                    document.getElementById('status-indicator').className = 'w-1.5 h-1.5 rounded-full bg-green-500';
                    document.getElementById('status-text').innerText = 'Published';
                    
                    document.getElementById('modal-publish').classList.remove('hidden');
                }, 2000);
            },

            openLiveView() {
                this.closeModal('modal-publish');
                const project = this.state.projects.find(p => p.id === this.state.currentProjectId);
                const view = document.getElementById('view-live');
                const controls = document.getElementById('live-controls');
                
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = project.html;
                tempDiv.querySelectorAll('.section-controls').forEach(el => el.remove());
                tempDiv.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'));
                
                view.innerHTML = tempDiv.innerHTML;
                view.classList.remove('hidden');
                controls.classList.remove('hidden');
                
                project.views = (project.views || 0) + 1;
                this.saveState();
            },

            closeLive() {
                document.getElementById('view-live').classList.add('hidden');
                document.getElementById('live-controls').classList.add('hidden');
            },
            
            preview() {
                 const project = this.state.projects.find(p => p.id === this.state.currentProjectId);
                 const view = document.getElementById('view-live');
                 const controls = document.getElementById('live-controls');
                 
                 const tempDiv = document.createElement('div');
                 tempDiv.innerHTML = document.getElementById('editor-canvas').innerHTML; 
                 tempDiv.querySelectorAll('.section-controls').forEach(el => el.remove());
                 tempDiv.querySelectorAll('[contenteditable]').forEach(el => el.removeAttribute('contenteditable'));
                 
                 view.innerHTML = tempDiv.innerHTML;
                 view.classList.remove('hidden');
                 controls.classList.remove('hidden');
            },

            prettyPrint(html) {
                let tab = '\t';
                let result = '';
                let indent= '';
                html.split(/>\s*</).forEach(function(element) {
                    if (element.match( /^\/\w/ )) {
                        indent = indent.substring(tab.length);
                    }
                    result += indent + '<' + element + '>\r\n';
                    if (element.match( /^<?\w[^>]*[^\/]$/ ) && !element.startsWith("input")  ) { 
                        indent += tab;              
                    }
                });
                return result.substring(1, result.length-3);
            },

            // --- AI TEMPLATE ENGINE ---
            ai: {
                generateHTML(prompt) {
                    const p = prompt.toLowerCase();
                    let html = '';
                    html += this.templates.header;
                    html += this.templates.hero;
                    if (p.includes('portfolio') || p.includes('gallery')) {
                        html += this.templates.gallery;
                    } else if (p.includes('saas') || p.includes('app') || p.includes('startup')) {
                        html += this.templates.features;
                        html += this.templates.pricing;
                    } else {
                        html += this.templates.features;
                    }
                    html += this.templates.cta;
                    html += this.templates.footer;
                    return html;
                },

                templates: {
                    header: `
                        <header class="w-full py-4 px-6 lg:px-8 flex justify-between items-center bg-white border-b border-zinc-100 sticky top-0 z-40">
                            <div class="font-bold text-xl tracking-tight text-zinc-900">Brand.</div>
                            <nav class="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
                                <a href="#" class="hover:text-zinc-900 transition-colors">Product</a>
                                <a href="#" class="hover:text-zinc-900 transition-colors">Solutions</a>
                                <a href="#" class="hover:text-zinc-900 transition-colors">Pricing</a>
                            </nav>
                            <button class="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">Get Started</button>
                        </header>
                    `,
                    hero: `
                        <section class="pt-24 pb-20 px-6 text-center max-w-5xl mx-auto">
                            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
                                <span class="w-2 h-2 rounded-full bg-blue-500"></span> New Release 2.0
                            </div>
                            <h1 class="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                                Build faster with <br class="hidden md:block"/> intelligent tools.
                            </h1>
                            <p class="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Create stunning websites in seconds using our AI-powered platform. No coding required, just pure creativity.
                            </p>
                            <div class="flex flex-col md:flex-row gap-4 justify-center">
                                <button class="bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">Start Building Free</button>
                                <button class="bg-white text-zinc-700 border border-zinc-200 px-8 py-3.5 rounded-xl font-medium hover:bg-zinc-50 transition-all">View Demo</button>
                            </div>
                        </section>
                    `,
                    features: `
                        <section class="py-24 bg-zinc-50 border-y border-zinc-200">
                            <div class="max-w-6xl mx-auto px-6">
                                <div class="text-center mb-16">
                                    <h2 class="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Everything you need</h2>
                                    <p class="text-zinc-500">Powerful features to help you grow your business.</p>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div class="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div class="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6"><span class="iconify" data-icon="lucide:zap" data-width="20"></span></div>
                                        <h3 class="text-lg font-semibold text-zinc-900 mb-2">Lightning Fast</h3>
                                        <p class="text-zinc-500 leading-relaxed text-sm">Optimized for speed with global CDN deployment.</p>
                                    </div>
                                    <div class="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6"><span class="iconify" data-icon="lucide:shield" data-width="20"></span></div>
                                        <h3 class="text-lg font-semibold text-zinc-900 mb-2">Secure by Default</h3>
                                        <p class="text-zinc-500 leading-relaxed text-sm">Enterprise-grade security included in every plan.</p>
                                    </div>
                                    <div class="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6"><span class="iconify" data-icon="lucide:bar-chart" data-width="20"></span></div>
                                        <h3 class="text-lg font-semibold text-zinc-900 mb-2">Real-time Analytics</h3>
                                        <p class="text-zinc-500 leading-relaxed text-sm">Track your growth with built-in privacy-focused stats.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `,
                    pricing: `
                        <section class="py-24 px-6 max-w-6xl mx-auto">
                            <div class="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 class="text-3xl font-semibold tracking-tight text-zinc-900 mb-6">Simple, transparent pricing</h2>
                                    <p class="text-zinc-500 text-lg mb-8">Choose the plan that's right for you. No hidden fees.</p>
                                    <ul class="space-y-4">
                                        <li class="flex gap-3 text-zinc-700"><span class="iconify text-green-500" data-icon="lucide:check-circle-2"></span> Unlimited Projects</li>
                                        <li class="flex gap-3 text-zinc-700"><span class="iconify text-green-500" data-icon="lucide:check-circle-2"></span> Custom Domain</li>
                                        <li class="flex gap-3 text-zinc-700"><span class="iconify text-green-500" data-icon="lucide:check-circle-2"></span> 24/7 Support</li>
                                    </ul>
                                </div>
                                <div class="bg-zinc-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                                    <div class="absolute top-0 right-0 p-32 bg-blue-600/20 blur-3xl rounded-full -mr-16 -mt-16"></div>
                                    <div class="relative z-10">
                                        <div class="text-zinc-400 font-medium mb-2">Pro Plan</div>
                                        <div class="text-4xl font-bold mb-6">$29<span class="text-lg text-zinc-500 font-normal">/mo</span></div>
                                        <button class="w-full bg-white text-zinc-900 py-3 rounded-xl font-medium hover:bg-zinc-100 transition-colors">Get Started</button>
                                        <p class="text-center text-xs text-zinc-500 mt-4">30-day money back guarantee</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    `,
                    gallery: `
                        <section class="py-20 px-6 max-w-6xl mx-auto">
                             <div class="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                                <div class="bg-zinc-100 rounded-xl overflow-hidden break-inside-avoid aspect-[3/4] hover:opacity-90 transition-opacity cursor-pointer"></div>
                                <div class="bg-zinc-200 rounded-xl overflow-hidden break-inside-avoid aspect-square hover:opacity-90 transition-opacity cursor-pointer"></div>
                                <div class="bg-zinc-100 rounded-xl overflow-hidden break-inside-avoid aspect-[4/3] hover:opacity-90 transition-opacity cursor-pointer"></div>
                                <div class="bg-zinc-200 rounded-xl overflow-hidden break-inside-avoid aspect-square hover:opacity-90 transition-opacity cursor-pointer"></div>
                                <div class="bg-zinc-100 rounded-xl overflow-hidden break-inside-avoid aspect-[3/4] hover:opacity-90 transition-opacity cursor-pointer"></div>
                                <div class="bg-zinc-200 rounded-xl overflow-hidden break-inside-avoid aspect-[4/3] hover:opacity-90 transition-opacity cursor-pointer"></div>
                             </div>
                        </section>
                    `,
                    cta: `
                        <section class="py-24 px-6 text-center bg-white">
                            <div class="max-w-3xl mx-auto">
                                <h2 class="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Ready to launch your next idea?</h2>
                                <p class="text-zinc-500 mb-8 text-lg">Join thousands of makers shipping faster today.</p>
                                <button class="bg-zinc-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-zinc-800 transition-colors">Get Started Now</button>
                            </div>
                        </section>
                    `,
                    footer: `
                        <footer class="bg-white py-12 px-6 border-t border-zinc-200 mt-auto">
                            <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                                <div class="text-zinc-400 text-sm">© 2024 Brand Inc. All rights reserved.</div>
                                <div class="flex gap-6">
                                    <a href="#" class="text-zinc-400 hover:text-zinc-900"><span class="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
                                    <a href="#" class="text-zinc-400 hover:text-zinc-900"><span class="iconify" data-icon="lucide:github" data-width="20"></span></a>
                                    <a href="#" class="text-zinc-400 hover:text-zinc-900"><span class="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
                                </div>
                            </div>
                        </footer>
                    `
                }
            }
        };

        // Initialize App
        window.onload = () => Aura.init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="h-full w-full relative" id="app-root">

</div>

<template id="tpl-dashboard">
<div className="h-full flex flex-col md:flex-row bg-zinc-50">

<aside className="w-full md:w-64 bg-white border-r border-zinc-200 flex flex-col z-20">
<div className="p-6 flex items-center gap-2 border-b border-zinc-100">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white font-bold text-xs">A</div>
<span className="font-semibold tracking-tight text-zinc-900">Aura Builder</span>
</div>
<nav className="flex-1 p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 bg-zinc-100 text-zinc-900 rounded-lg text-sm font-medium">
<span className="iconify" data-icon="lucide:layout-grid" data-width="18"></span> Projects
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg text-sm font-medium transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-3" data-width="18"></span> Analytics
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg text-sm font-medium transition-colors">
<span className="iconify" data-icon="lucide:settings" data-width="18"></span> Settings
                    </button>
</nav>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-500 to-purple-500"></div>
<div className="text-xs">
<p className="font-medium text-zinc-900">Demo User</p>
<p className="text-zinc-500">Free Plan</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto p-8">
<div className="max-w-5xl mx-auto">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-900">Dashboard</h1>
<p className="text-sm text-zinc-500 mt-1">Manage your AI-generated web projects.</p>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium shadow-sm flex items-center gap-2 transition-all" onclick="Aura.openPrompt()">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span> New Project
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Total Views</div>
<div className="text-2xl font-semibold tracking-tight" id="stat-views">0</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Projects</div>
<div className="text-2xl font-semibold tracking-tight" id="stat-projects">0</div>
</div>
<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1">Storage</div>
<div className="text-2xl font-semibold tracking-tight">Local</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="project-grid">

</div>
<div className="hidden text-center py-20 border-2 border-dashed border-zinc-200 rounded-xl bg-zinc-50/50" id="empty-state">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-200 shadow-sm">
<span className="iconify text-zinc-400" data-icon="lucide:box" data-width="24"></span>
</div>
<h3 className="text-zinc-900 font-medium mb-1">No projects yet</h3>
<p className="text-zinc-500 text-sm mb-4">Create your first AI website to get started.</p>
<button className="text-brand-600 font-medium text-sm hover:underline" onclick="Aura.openPrompt()">Generate Website</button>
</div>
</div>
</main>
</div>
</template>
<template id="tpl-editor">
<div className="flex flex-col h-full bg-zinc-100">

<header className="h-14 bg-white border-b border-zinc-200 flex items-center justify-between px-4 z-30 shadow-sm">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors" onclick="Aura.router.navigate('dashboard')">
<span className="iconify" data-icon="lucide:chevron-left" data-width="20"></span>
</button>
<div className="flex flex-col">
<span className="text-sm font-semibold text-zinc-900" id="editor-project-name">Untitled</span>
<span className="text-[10px] text-zinc-400 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500" id="status-indicator"></div>
<span id="status-text">Draft</span>
</span>
</div>
</div>

<div className="bg-zinc-100 p-1 rounded-lg border border-zinc-200 flex gap-0.5">
<button className="p-1.5 rounded bg-white shadow-sm text-zinc-900 transition-all" id="dev-desktop" onclick="Aura.setDevice('desktop')">
<span className="iconify" data-icon="lucide:monitor" data-width="16"></span>
</button>
<button className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 transition-all" id="dev-tablet" onclick="Aura.setDevice('tablet')">
<span className="iconify" data-icon="lucide:tablet" data-width="16"></span>
</button>
<button className="p-1.5 rounded text-zinc-500 hover:text-zinc-900 transition-all" id="dev-mobile" onclick="Aura.setDevice('mobile')">
<span className="iconify" data-icon="lucide:smartphone" data-width="16"></span>
</button>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors flex items-center gap-2" onclick="Aura.toggleCode()">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span> Code
                    </button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-100 rounded-md transition-colors flex items-center gap-2" onclick="Aura.preview()">
<span className="iconify" data-icon="lucide:eye" data-width="16"></span> Preview
                    </button>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-3 py-1.5 rounded-md text-xs font-medium transition-colors shadow-sm flex items-center gap-2" id="btn-publish" onclick="Aura.publish()">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="16"></span> Publish
                    </button>
</div>
</header>
<div className="flex-1 flex overflow-hidden">

<aside className="w-64 bg-white border-r border-zinc-200 hidden lg:flex flex-col overflow-y-auto">
<div className="p-4 border-b border-zinc-100">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Global Design</h3>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-500 block mb-2">Theme Colors</label>
<div className="flex flex-wrap gap-2">
<button className="w-6 h-6 rounded-full bg-blue-600 hover:ring-2 ring-offset-1 ring-blue-500" onclick="Aura.updateTheme('blue')"></button>
<button className="w-6 h-6 rounded-full bg-violet-600 hover:ring-2 ring-offset-1 ring-violet-500" onclick="Aura.updateTheme('violet')"></button>
<button className="w-6 h-6 rounded-full bg-emerald-600 hover:ring-2 ring-offset-1 ring-emerald-500" onclick="Aura.updateTheme('emerald')"></button>
<button className="w-6 h-6 rounded-full bg-zinc-900 hover:ring-2 ring-offset-1 ring-zinc-500" onclick="Aura.updateTheme('zinc')"></button>
</div>
</div>
<div>
<label className="text-xs text-zinc-500 block mb-2">Font Family</label>
<select className="w-full text-xs p-2 bg-zinc-50 border border-zinc-200 rounded" onchange="Aura.updateFont(this.value)">
<option value="Inter">Inter (Sans)</option>
<option value="Times New Roman">Serif</option>
<option value="Courier New">Mono</option>
</select>
</div>
</div>
</div>
<div className="p-4 flex-1">
<h3 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Add Section</h3>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col items-center gap-1" onclick="Aura.addSection('hero')">
<span className="iconify text-zinc-400" data-icon="lucide:layout-template" data-width="16"></span>
<span className="text-[10px] text-zinc-600">Hero</span>
</button>
<button className="p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col items-center gap-1" onclick="Aura.addSection('features')">
<span className="iconify text-zinc-400" data-icon="lucide:grid-2x2" data-width="16"></span>
<span className="text-[10px] text-zinc-600">Features</span>
</button>
<button className="p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col items-center gap-1" onclick="Aura.addSection('pricing')">
<span className="iconify text-zinc-400" data-icon="lucide:credit-card" data-width="16"></span>
<span className="text-[10px] text-zinc-600">Pricing</span>
</button>
<button className="p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col items-center gap-1" onclick="Aura.addSection('cta')">
<span className="iconify text-zinc-400" data-icon="lucide:megaphone" data-width="16"></span>
<span className="text-[10px] text-zinc-600">CTA</span>
</button>
<button className="p-3 border border-zinc-200 rounded hover:bg-zinc-50 hover:border-zinc-300 transition-all flex flex-col items-center gap-1" onclick="Aura.addSection('footer')">
<span className="iconify text-zinc-400" data-icon="lucide:panel-bottom" data-width="16"></span>
<span className="text-[10px] text-zinc-600">Footer</span>
</button>
</div>
</div>
</aside>

<div className="flex-1 bg-zinc-100 flex items-center justify-center relative overflow-hidden" id="canvas-container">
<div className="bg-white canvas-shadow transition-all duration-300 h-[90%] w-full max-w-full overflow-hidden relative border border-zinc-200" id="canvas-wrapper">
<div className="h-full w-full overflow-y-auto bg-white selection:bg-brand-100 selection:text-brand-700" id="editor-canvas">

</div>
</div>

<div className="absolute bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">

<div className="hidden pointer-events-auto w-80 md:w-96 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col animate-slide-up origin-bottom-right transition-all" id="ai-agent-window">

<div className="p-3 px-4 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-zinc-800">Aura Copilot</span>
</div>
<button className="text-zinc-400 hover:text-zinc-600" onclick="Aura.agent.toggle()"><span className="iconify" data-icon="lucide:x" data-width="16"></span></button>
</div>

<div className="h-80 overflow-y-auto p-4 space-y-4 bg-white scroll-smooth" id="ai-messages">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-900 flex-shrink-0 flex items-center justify-center text-white shadow-sm">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
</div>
<div className="flex-1">
<div className="bg-zinc-100 rounded-2xl rounded-tl-none px-4 py-2.5 text-sm text-zinc-700 leading-relaxed shadow-sm">
                                            Hi! I'm your design assistant. I can help you modify sections, change colors, or rewrite text. What would you like to change?
                                        </div>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-100 bg-white">
<form className="relative" onsubmit="event.preventDefault(); Aura.agent.send()">
<input className="w-full pl-4 pr-10 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-300 transition-all shadow-sm placeholder:text-zinc-400" id="ai-input" placeholder="e.g. Change the button to blue..." type="text"/>
<button className="absolute right-2 top-1.5 p-1 text-zinc-400 hover:text-brand-600 transition-colors" type="submit">
<span className="iconify" data-icon="lucide:send-horizontal" data-width="18"></span>
</button>
</form>
</div>
</div>

<button className="pointer-events-auto bg-zinc-900 hover:bg-zinc-800 text-white p-3.5 rounded-full shadow-xl shadow-zinc-900/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group border border-zinc-700/50" id="ai-trigger" onclick="Aura.agent.toggle()">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-sm font-medium">Ask AI</span>
</button>
</div>
</div>
</div>
</div>
</template>

<div className="hidden absolute inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center p-4" id="modal-prompt">
<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-zinc-200 p-6 animate-enter">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-semibold text-zinc-900">What are you building?</h2>
<button className="text-zinc-400 hover:text-zinc-900" onclick="Aura.closeModal('modal-prompt')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<textarea className="w-full h-32 p-4 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 resize-none mb-4" id="prompt-input" placeholder="e.g. A minimalist portfolio for a product designer named Sarah, focusing on clean typography and grid layout..."></textarea>
<div className="flex justify-end">
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-all" onclick="Aura.generateSite()">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span> Generate
                </button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 z-50 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center p-4" id="modal-code">
<div className="bg-white w-full max-w-4xl h-[80vh] rounded-xl shadow-2xl flex flex-col overflow-hidden animate-enter">
<div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 bg-zinc-50">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:file-code" data-width="16"></span>
<span className="text-sm font-mono text-zinc-700">index.html</span>
</div>
<div className="flex gap-2">
<button className="text-xs font-medium px-3 py-1.5 bg-white border border-zinc-200 rounded hover:bg-zinc-50 transition-colors" onclick="Aura.copyCode()">Copy</button>
<button className="text-zinc-400 hover:text-zinc-900" onclick="Aura.closeModal('modal-code')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
</div>
<pre className="flex-1 bg-[#0d1117] text-zinc-300 p-4 overflow-auto text-xs font-mono leading-relaxed"><code id="code-content"></code></pre>
</div>
</div>

<div className="hidden absolute inset-0 z-50 bg-zinc-900 flex flex-col items-center justify-center p-6 text-center animate-enter" id="modal-publish">
<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
<span className="iconify text-white" data-icon="lucide:check" data-width="32" strokeWidth="3"></span>
</div>
<h2 className="text-3xl font-bold text-white mb-2">Website Published!</h2>
<p className="text-zinc-400 mb-8 max-w-md">Your project is now live on our global edge network.</p>
<div className="bg-zinc-800 p-1.5 pl-4 rounded-lg flex items-center gap-2 border border-zinc-700 w-full max-w-md mb-8">
<span className="text-green-400 font-mono text-sm truncate flex-1 text-left" id="publish-url">https://site.aura.app</span>
<a className="bg-white text-zinc-900 px-4 py-1.5 rounded text-sm font-medium hover:bg-zinc-200 transition-colors" href="#" id="visit-link" target="_blank">Visit</a>
</div>
<button className="text-zinc-500 hover:text-white text-sm transition-colors" onclick="Aura.closeModal('modal-publish')">Return to Editor</button>
</div>

<div className="hidden fixed inset-0 z-[100] bg-white overflow-y-auto" id="view-live">

</div>
<div className="hidden fixed bottom-6 right-6 z-[101]" id="live-controls">
<button className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium flex items-center gap-2 hover:scale-105 transition-transform" onclick="Aura.closeLive()">
<span className="iconify" data-icon="lucide:edit-3" data-width="14"></span> Edit Site
        </button>
</div>



    </>
  );
}
