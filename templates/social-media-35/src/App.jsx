import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data & State
        const platforms = [
            { id: 'instagram', name: 'Instagram', icon: 'instagram', regex: /instagram\.com/i },
            { id: 'tiktok', name: 'TikTok', icon: 'music-2', regex: /tiktok\.com/i },
            { id: 'youtube', name: 'YouTube Shorts', icon: 'youtube', regex: /youtube\.com|youtu\.be/i },
            { id: 'facebook', name: 'Facebook', icon: 'facebook', regex: /facebook\.com|fb\.watch/i },
            { id: 'twitter', name: 'X (Twitter)', icon: 'twitter', regex: /twitter\.com|x\.com/i },
            { id: 'snapchat', name: 'Snapchat', icon: 'ghost', regex: /snapchat\.com/i },
            { id: 'pinterest', name: 'Pinterest', icon: 'pin', regex: /pinterest\.com|pin\.it/i },
            { id: 'twitch', name: 'Twitch', icon: 'twitch', regex: /twitch\.tv/i },
            { id: 'reddit', name: 'Reddit', icon: 'message-square', regex: /reddit\.com/i },
            { id: 'vimeo', name: 'Vimeo', icon: 'video', regex: /vimeo\.com/i },
            { id: 'generic', name: 'Generic Extractor', icon: 'globe', regex: /.*/i } // Fallback
        ];

        let history = JSON.parse(localStorage.getItem('reelx_history')) || [];

        // DOM Elements
        const el = {
            input: document.getElementById('target-url'),
            btn: document.getElementById('execute-btn'),
            badge: document.getElementById('detected-badge'),
            badgeText: document.getElementById('detected-platform'),
            inputContainer: document.getElementById('input-container'),
            
            area: document.getElementById('processing-area'),
            sLoading: document.getElementById('state-loading'),
            sSuccess: document.getElementById('state-success'),
            sError: document.getElementById('state-error'),
            
            lHead: document.getElementById('status-headline'),
            lDetail: document.getElementById('status-detail'),
            
            grid: document.getElementById('platform-grid'),
            search: document.getElementById('node-search'),
            log: document.getElementById('history-log')
        };

        // Initialize
        function init() {
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            renderPlatforms();
            renderHistory();
            setupEventListeners();
        }

        // Logic
        function detectPlatform(url) {
            if (!url) return null;
            for (let i = 0; i < platforms.length - 1; i++) {
                if (platforms[i].regex.test(url)) return platforms[i];
            }
            return platforms[platforms.length - 1];
        }

        function handleInput() {
            const url = el.input.value.trim();
            const platform = detectPlatform(url);
            
            if (url && platform && platform.id !== 'generic') {
                el.badgeText.textContent = platform.name;
                el.badge.classList.remove('hidden');
                el.badge.classList.add('flex');
            } else {
                el.badge.classList.add('hidden');
                el.badge.classList.remove('flex');
            }
        }

        async function executeExtraction() {
            const url = el.input.value.trim();
            if (!url) {
                el.inputContainer.classList.add('pulse-border');
                setTimeout(() => el.inputContainer.classList.remove('pulse-border'), 2000);
                return;
            }

            const platform = detectPlatform(url);
            
            // UI State change
            el.area.classList.remove('hidden');
            el.sLoading.classList.remove('hidden');
            el.sLoading.classList.add('flex');
            el.sSuccess.classList.add('hidden');
            el.sError.classList.add('hidden');
            el.inputContainer.style.opacity = '0.5';
            el.inputContainer.style.pointerEvents = 'none';

            // Simulate complex extraction steps
            const steps = [
                { h: 'ESTABLISHING HANDSHAKE', d: `Routing through ${platform.name} nodes...`, t: 800 },
                { h: 'BYPASSING SECURITY', d: 'Solving challenge parameters...', t: 1500 },
                { h: 'EXTRACTING BLOB', d: 'Locating highest quality media streams...', t: 1200 }
            ];

            for (let step of steps) {
                el.lHead.textContent = step.h;
                el.lDetail.textContent = step.d;
                await new Promise(r => setTimeout(r, step.t));
            }

            // Mock outcome (90% success)
            if (Math.random() > 0.1) {
                showSuccess(url, platform);
            } else {
                showError();
            }
        }

        function showSuccess(url, platform) {
            el.sLoading.classList.add('hidden');
            el.sLoading.classList.remove('flex');
            el.sSuccess.classList.remove('hidden');
            
            // Mock data population
            const id = Math.random().toString(36).substring(7);
            document.getElementById('res-title').textContent = `${platform.name} Extracted Sequence [ID: ${id}]`;
            document.getElementById('res-author').textContent = `@target_node_${Math.floor(Math.random() * 999)}`;
            document.getElementById('res-platform-name').textContent = platform.name;
            
            const iconEl = document.getElementById('res-platform-icon');
            iconEl.setAttribute('data-lucide', platform.icon);
            
            // Abstract thumbnail based on platform colors loosely
            document.getElementById('res-thumbnail').src = `https://picsum.photos/seed/${id}/400/600`;

            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

            addToHistory(url, platform);
        }

        function showError() {
            el.sLoading.classList.add('hidden');
            el.sLoading.classList.remove('flex');
            el.sError.classList.remove('hidden');
            el.sError.classList.add('flex');
        }

        function resetUI() {
            el.area.classList.add('hidden');
            el.inputContainer.style.opacity = '1';
            el.inputContainer.style.pointerEvents = 'auto';
            el.input.value = '';
            handleInput();
        }

        function copyToClipboard() {
            navigator.clipboard.writeText("https://mock-download-link.com/file.mp4").then(() => {
                alert("Direct link copied to clipboard.");
            });
        }

        // Renders
        function renderPlatforms(filter = '') {
            el.grid.innerHTML = '';
            const filtered = platforms.filter(p => p.id !== 'generic' && p.name.toLowerCase().includes(filter.toLowerCase()));
            
            filtered.forEach(p => {
                const div = document.createElement('div');
                div.className = 'bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-amber-500/30 transition-all cursor-pointer group';
                div.innerHTML = `
                    <div class="w-12 h-12 rounded-xl bg-black/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                        <i data-lucide="${p.icon}" class="w-6 h-6 text-neutral-300 group-hover:text-amber-400 transition-colors"></i>
                    </div>
                    <span class="text-base text-neutral-300 font-medium">${p.name}</span>
                `;
                div.onclick = () => { el.input.value = `https://${p.id}.com/sample`; handleInput(); el.input.focus(); };
                el.grid.appendChild(div);
            });
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function renderHistory() {
            el.log.innerHTML = '';
            if (history.length === 0) {
                el.log.innerHTML = '<div class="text-neutral-600 text-center py-8 text-base font-mono">Log is empty.</div>';
                return;
            }

            history.slice(0, 10).forEach(item => {
                const div = document.createElement('div');
                div.className = 'flex items-center justify-between bg-black/40 border border-white/5 p-4 rounded-xl hover:border-white/10 transition-colors cursor-pointer';
                div.innerHTML = `
                    <div class="flex items-center gap-4 overflow-hidden">
                        <i data-lucide="${item.icon}" class="w-5 h-5 text-neutral-500 shrink-0"></i>
                        <div class="flex flex-col truncate">
                            <span class="text-base text-white truncate font-mono text-sm">${item.url}</span>
                            <span class="text-xs text-neutral-500">${new Date(item.time).toLocaleTimeString()}</span>
                        </div>
                    </div>
                    <button class="p-2 hover:bg-white/10 rounded-lg text-amber-500 transition-colors shrink-0" title="Re-execute">
                        <i data-lucide="refresh-cw" class="w-4 h-4"></i>
                    </button>
                `;
                div.onclick = (e) => {
                    if(!e.target.closest('button')) {
                        el.input.value = item.url;
                        handleInput();
                    } else {
                        el.input.value = item.url;
                        executeExtraction();
                    }
                };
                el.log.appendChild(div);
            });
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        function addToHistory(url, platform) {
            // Remove exact duplicate
            history = history.filter(i => i.url !== url);
            history.unshift({ url, icon: platform.icon, time: Date.now() });
            if (history.length > 10) history.pop();
            localStorage.setItem('reelx_history', JSON.stringify(history));
            renderHistory();
        }

        function setupEventListeners() {
            el.input.addEventListener('input', handleInput);
            el.btn.addEventListener('click', executeExtraction);
            el.input.addEventListener('keypress', (e) => { if(e.key === 'Enter') executeExtraction(); });
            el.search.addEventListener('input', (e) => renderPlatforms(e.target.value));
        }

        // Run
        document.addEventListener('DOMContentLoaded', init);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="ambient-glow"></div>
<div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col gap-16 min-h-screen">

<header className="flex justify-between items-center w-full">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-200 to-amber-600 flex items-center justify-center shadow-[0_0_20px_rgba(217,119,6,0.3)]">
<i className="text-black w-7 h-7" data-lucide="zap"></i>
</div>
<h1 className="text-3xl font-medium tracking-tight text-white">ReelX</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" title="Toggle Theme">
<i className="w-6 h-6" data-lucide="moon"></i>
</button>
<button className="p-3 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors" title="Settings / API Keys">
<i className="w-6 h-6" data-lucide="key"></i>
</button>
</div>
</header>

<main className="flex flex-col items-center text-center gap-10 w-full max-w-4xl mx-auto">
<div className="space-y-6">
<h2 className="text-5xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
                    Extract Media. <br/>
<span className="text-gradient">Globally Tracking.</span>
</h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
                    Advanced node-based extraction for 10+ networks. Paste target URL to bypass restrictions and capture highest quality source.
                </p>
</div>

<div className="w-full glass-panel rounded-3xl p-2 sm:p-3 flex flex-col sm:flex-row gap-3 relative transition-all" id="input-container">
<div className="relative flex-grow flex items-center bg-black/40 rounded-2xl px-5 py-4 border border-white/5 focus-within:border-amber-500/30 focus-within:bg-black/60 transition-colors">
<i className="text-neutral-500 mr-4 w-6 h-6 shrink-0" data-lucide="link-2"></i>
<input autocomplete="off" className="w-full bg-transparent text-white text-lg outline-none placeholder-neutral-600 font-mono tracking-tight" id="target-url" placeholder="Enter target sequence (e.g. instagram.com/reel/xyz)" type="text"/>
<div className="hidden absolute right-4 items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-400 shrink-0" id="detected-badge">
<i className="w-4 h-4" data-lucide="cpu"></i>
<span id="detected-platform">Insta</span>
</div>
</div>
<button className="btn-primary rounded-2xl px-8 py-4 font-medium text-lg flex items-center justify-center gap-3 shrink-0" id="execute-btn">
<span>Execute</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="w-full hidden" id="processing-area">

<div className="glass-panel rounded-3xl p-8 flex flex-col items-center justify-center gap-6 w-full max-w-2xl mx-auto" id="state-loading">
<div className="loader w-14 h-14"></div>
<div className="flex flex-col items-center gap-2 text-center">
<span className="text-amber-500 font-mono text-base font-medium" id="status-headline">INITIALIZING CONNECTION</span>
<p className="text-neutral-400 font-mono text-sm" id="status-detail">Bypassing security protocols...</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 hidden w-full text-left" id="state-success">
<div className="flex flex-col md:flex-row gap-8">

<div className="w-full md:w-[40%] aspect-[9/16] sm:aspect-video md:aspect-square bg-black rounded-2xl border border-white/5 relative overflow-hidden group">
<img alt="Media Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" id="res-thumbnail" src=""/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
<i className="w-8 h-8 text-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 text-xs font-medium flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="video" id="res-platform-icon"></i>
<span id="res-platform-name">Platform</span>
</div>
</div>

<div className="flex-grow flex flex-col justify-between py-2">
<div className="space-y-4">
<h3 className="text-2xl font-medium tracking-tight text-white line-clamp-2" id="res-title">Extracted Media Sequence Title</h3>
<div className="flex flex-wrap items-center gap-4 text-base text-neutral-400">
<span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg"><i className="w-4 h-4" data-lucide="user"></i> <span id="res-author">@target_user</span></span>
<span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg"><i className="w-4 h-4" data-lucide="clock"></i> <span>00:45</span></span>
</div>
</div>
<div className="space-y-5 mt-8">
<div className="relative">
<select className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-lg text-white outline-none focus:border-amber-500/50 appearance-none cursor-pointer" id="quality-select">
<option value="hd">1080p HD (Video + Audio) - MP4</option>
<option value="sd">720p SD (Video + Audio) - MP4</option>
<option value="audio">High Quality Audio Only - MP3</option>
</select>
<i className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex-grow btn-primary py-4 rounded-xl text-black font-medium text-lg flex items-center justify-center gap-3">
<i className="w-6 h-6" data-lucide="download-cloud"></i> Download File
                                    </button>
<div className="flex gap-4">
<button className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors flex justify-center items-center" onclick="copyToClipboard()" title="Copy Direct Link">
<i className="w-6 h-6" data-lucide="copy"></i>
</button>
<button className="flex-1 sm:flex-none px-6 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors flex justify-center items-center" title="Open Stream in Browser">
<i className="w-6 h-6" data-lucide="external-link"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 hidden flex-col items-center justify-center gap-4 border border-red-500/20 text-center w-full max-w-2xl mx-auto" id="state-error">
<div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-2">
<i className="w-8 h-8 text-red-500" data-lucide="shield-alert"></i>
</div>
<h3 className="text-xl font-medium text-white">Extraction Failed</h3>
<p className="text-base text-neutral-400" id="error-message">Target node rejected connection. Link may be private or invalid.</p>
<button className="mt-4 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-base transition-colors" onclick="resetUI()">Reset Protocol</button>
</div>
</div>
</main>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-auto pb-10">

<section className="lg:col-span-2 space-y-6 glass-panel rounded-3xl p-6 sm:p-8">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
<i className="w-6 h-6 text-amber-500" data-lucide="network"></i> Network Nodes
                    </h3>
<div className="relative w-full sm:w-72">
<i className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-5 h-5" data-lucide="search"></i>
<input className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-base text-white outline-none focus:border-amber-500/50 placeholder-neutral-600 transition-colors" id="node-search" placeholder="Filter networks..." type="text"/>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4" id="platform-grid">

</div>
</section>

<section className="space-y-6 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col">
<h3 className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
<i className="w-6 h-6 text-amber-500" data-lucide="history"></i> Local Log
                </h3>
<div className="flex-grow flex flex-col gap-3 overflow-y-auto" id="history-log" style={{maxHeight: '350px'}}>

</div>
</section>
</div>
<footer className="w-full text-center text-neutral-600 text-sm mt-auto border-t border-white/5 pt-8">
<p>SYSTEM WARNING: For authorized educational &amp; security testing only. Respect network TOS.</p>
<p className="mt-2 font-mono">ReelX v4.2.0 © 2026</p>
</footer>
</div>


    </>
  );
}
