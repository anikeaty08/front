import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const emailInput = document.getElementById('emailInput');
        const urlInput = document.getElementById('urlInput');
        const generateBtn = document.getElementById('generateBtn');
        const generateBtnText = document.getElementById('generateBtnText');
        const generateBtnIcon = document.getElementById('generateBtnIcon');
        const formMsg = document.getElementById('formMsg');

        const fileInput = document.getElementById('fileInput');
        const uploadBtn = document.getElementById('uploadBtn');
        const fileName = document.getElementById('fileName');

        const activeJobCard = document.getElementById('activeJobCard');
        const activeJobTitle = document.getElementById('activeJobTitle');
        const activeJobMeta = document.getElementById('activeJobMeta');
        const activeJobEta = document.getElementById('activeJobEta');
        const progressBar = document.getElementById('progressBar');
        const activeJobIcon = document.getElementById('activeJobIcon');

        const exportBtn = document.getElementById('exportBtn');
        const captionLine = document.getElementById('captionLine');
        const previewImg = document.getElementById('previewImg');

        const textSizeRange = document.getElementById('textSizeRange');
        const textSizeLabel = document.getElementById('textSizeLabel');
        const posRange = document.getElementById('posRange');
        const posLabel = document.getElementById('posLabel');

        const playhead = document.getElementById('playhead');
        const timelineTime = document.getElementById('timelineTime');

        const clearJobsBtn = document.getElementById('clearJobsBtn');

        let jobTimer = null;
        let playheadTimer = null;

        function setMsg(text, tone) {
            formMsg.textContent = text || '';
            formMsg.className = 'text-xs ' + (tone === 'error' ? 'text-rose-300' : tone === 'ok' ? 'text-emerald-300' : 'text-gray-500');
        }

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
        }

        function isLikelyYouTubeUrl(url) {
            const u = String(url || '').trim();
            if (!u) return false;
            return /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/i.test(u);
        }

        function setGeneratingState(isGenerating) {
            generateBtn.disabled = isGenerating;
            emailInput.disabled = isGenerating;
            urlInput.disabled = isGenerating;
            uploadBtn.disabled = isGenerating;
            uploadBtn.classList.toggle('opacity-60', isGenerating);
            uploadBtn.classList.toggle('cursor-not-allowed', isGenerating);

            generateBtnText.textContent = isGenerating ? 'Generating' : 'Generate';
            generateBtnIcon.setAttribute('icon', isGenerating ? 'solar:refresh-circle-linear' : 'solar:stars-minimalistic-linear');
            if (isGenerating) {
                generateBtnIcon.classList.add('animate-spin');
            } else {
                generateBtnIcon.classList.remove('animate-spin');
            }
        }

        function secondsToMMSS(s) {
            const mm = String(Math.floor(s / 60)).padStart(2, '0');
            const ss = String(Math.floor(s % 60)).padStart(2, '0');
            return `${mm}:${ss}`;
        }

        function startPlayhead(durationSec) {
            stopPlayhead();
            let t = 0;
            playhead.style.left = '0%';
            timelineTime.textContent = secondsToMMSS(0);

            playheadTimer = setInterval(() => {
                t += 1;
                const pct = Math.min(100, (t / durationSec) * 100);
                playhead.style.left = pct + '%';
                timelineTime.textContent = secondsToMMSS(Math.min(durationSec, t));
                if (t >= durationSec) stopPlayhead();
            }, 250);
        }

        function stopPlayhead() {
            if (playheadTimer) clearInterval(playheadTimer);
            playheadTimer = null;
        }

        function setCaptionSize() {
            const v = Number(textSizeRange.value);
            textSizeLabel.textContent = String(v);
            captionLine.classList.remove('text-xs','text-sm','text-base','text-lg','text-xl','text-2xl');
            // Map numeric sizes to available classes (no px)
            let cls = 'text-lg';
            if (v <= 16) cls = 'text-sm';
            else if (v <= 20) cls = 'text-base';
            else if (v <= 26) cls = 'text-lg';
            else if (v <= 34) cls = 'text-xl';
            else cls = 'text-2xl';
            captionLine.classList.add(cls);
        }

        function setCaptionPos() {
            const v = Number(posRange.value); // 10..85
            const bottomPct = Math.max(6, Math.min(34, Math.round((v / 85) * 34)));
            captionLine.parentElement.style.bottom = bottomPct + '%';
            posLabel.textContent = bottomPct >= 26 ? 'Bottom' : bottomPct >= 16 ? 'Mid' : 'High';
        }

        textSizeRange.addEventListener('input', setCaptionSize);
        posRange.addEventListener('input', setCaptionPos);
        setCaptionSize();
        setCaptionPos();

        uploadBtn.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => {
            const f = fileInput.files && fileInput.files[0];
            fileName.textContent = f ? f.name : 'No file selected';
            if (f) {
                urlInput.value = '';
                setMsg('File selected. Add your email, then click Generate.', 'muted');
            }
        });

        function startJobDisplay(titleText) {
            activeJobCard.classList.remove('hidden');
            activeJobTitle.textContent = titleText;
            activeJobMeta.textContent = 'Processing 0%';
            activeJobEta.textContent = 'Est. ~2m';
            progressBar.style.width = '0%';
            activeJobIcon.setAttribute('icon', 'solar:refresh-circle-linear');
            activeJobIcon.classList.add('animate-spin');
        }

        function finishJobDisplay() {
            activeJobMeta.textContent = 'Complete • 3 Shorts ready';
            activeJobEta.textContent = 'Just now';
            progressBar.style.width = '100%';
            activeJobIcon.classList.remove('animate-spin');
            activeJobIcon.setAttribute('icon', 'solar:check-circle-linear');
        }

        function simulateGeneration({ sourceLabel }) {
            if (jobTimer) clearInterval(jobTimer);
            exportBtn.disabled = true;

            startJobDisplay(sourceLabel);
            setGeneratingState(true);
            setMsg('Job started. We’ll email you when it’s ready.', 'ok');

            // simple progress simulation
            let pct = 0;
            const totalSec = 60;
            startPlayhead(totalSec);

            jobTimer = setInterval(() => {
                pct += Math.floor(Math.random() * 7) + 3; // 3..9
                if (pct > 100) pct = 100;

                progressBar.style.width = pct + '%';
                activeJobMeta.textContent = `Processing ${pct}%`;

                const remaining = Math.max(5, Math.round((100 - pct) * 0.6));
                activeJobEta.textContent = `Est. ~${remaining}s`;

                if (pct >= 100) {
                    clearInterval(jobTimer);
                    jobTimer = null;
                    finishJobDisplay();
                    setGeneratingState(false);
                    exportBtn.disabled = false;
                    captionLine.innerHTML = 'YOUR <span class="text-[#4C6A6A]">SHORTS</span> ARE READY';
                    setMsg('Done. Export is now enabled (demo).', 'ok');
                }
            }, 600);
        }

        function handleGenerate() {
            const email = (emailInput.value || '').trim();
            const url = (urlInput.value || '').trim();
            const file = fileInput.files && fileInput.files[0];

            if (!isValidEmail(email)) {
                setMsg('Please enter a valid email address.', 'error');
                emailInput.focus();
                return;
            }

            if (!url && !file) {
                setMsg('Paste a YouTube link or choose a video file.', 'error');
                urlInput.focus();
                return;
            }

            if (url && !isLikelyYouTubeUrl(url)) {
                setMsg('Please paste a valid YouTube link (youtube.com/watch?v=… or youtu.be/…).', 'error');
                urlInput.focus();
                return;
            }

            // Keep preview visual stable; just lightly reflect a new job
            if (file) {
                previewImg.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=300&auto=format&fit=crop";
                simulateGeneration({ sourceLabel: 'Uploaded video' });
                return;
            }

            simulateGeneration({ sourceLabel: 'YouTube video' });
        }

        generateBtn.addEventListener('click', handleGenerate);
        urlInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleGenerate();
        });

        clearJobsBtn.addEventListener('click', () => {
            if (jobTimer) clearInterval(jobTimer);
            jobTimer = null;
            stopPlayhead();
            activeJobCard.classList.add('hidden');
            progressBar.style.width = '0%';
            exportBtn.disabled = true;
            captionLine.innerHTML = 'BUT <span class="text-[#4C6A6A]">NOBODY</span> KNEW...';
            setGeneratingState(false);
            setMsg('', 'muted');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-4 right-4 z-50 md:hidden">
<button className="p-2 bg-[#1C1F24] border border-[#2A2F36] rounded text-gray-400">
<iconify-icon icon="solar:hamburger-menu-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex w-64 border-r border-[#1F242C] bg-[#16181D] flex-col justify-between flex-shrink-0 relative z-20">
<div className="flex flex-col h-full">

<div className="h-16 flex items-center px-6 border-b border-[#1F242C]">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-[#4C6A6A] rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-[#16181D] rounded-full"></div>
</div>
<span className="font-semibold text-sm tracking-tight text-white">HAMON</span>
</div>
</div>

<div className="p-3 space-y-1 overflow-y-auto flex-1">
<div className="px-3 py-2 text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Main</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-[#1F242C] rounded-md border border-[#2A2F36] shadow-sm" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Generate
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F242C]/50 rounded-md transition-all" href="#">
<iconify-icon icon="solar:widget-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Projects
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F242C]/50 rounded-md transition-all" href="#">
<iconify-icon icon="solar:tuning-square-2-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Studio
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F242C]/50 rounded-md transition-all" href="#">
<iconify-icon icon="solar:pie-chart-2-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Analytics
                </a>
<div className="mt-6 px-3 py-2 text-[10px] uppercase font-semibold text-gray-500 tracking-wider">Sources</div>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F242C]/50 rounded-md group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:play-circle-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<span>MKBHD</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
</a>
<a className="flex items-center justify-between px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-[#1F242C]/50 rounded-md group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:videocamera-record-linear" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Twitch VODs</span>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-emerald-500 transition-colors"></div>
</a>
</div>
</div>

<div className="p-3 border-t border-[#1F242C]">
<button className="flex items-center gap-3 w-full px-3 py-2 hover:bg-[#1F242C]/50 rounded-md transition-colors text-left">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4C6A6A] to-[#2A2F36] border border-[#2A2F36]"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Alex Creator</span>
<span className="text-[10px] text-gray-500">Pro Plan</span>
</div>
<iconify-icon className="ml-auto text-gray-500" icon="solar:alt-arrow-right-linear" style={{-IconifyStrokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col relative overflow-hidden bg-[#0F1114]">

<header className="h-16 flex items-center justify-between px-6 border-b border-[#1F242C] bg-[#0F1114]/80 backdrop-blur sticky top-0 z-30">
<div className="flex items-center gap-4 text-sm">
<span className="text-gray-500">Workspace</span>
<span className="text-gray-600">/</span>
<span className="text-white font-medium">New Generation</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[#1F242C]">
<iconify-icon className="text-[#4C6A6A]" icon="solar:clock-circle-linear" style={{-IconifyStrokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="text-xs text-gray-300">1h 45m left</span>
</div>
<button className="text-gray-400 hover:text-white transition-colors relative">
<iconify-icon icon="solar:bell-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
<div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#4C6A6A] rounded-full border border-[#0F1114]"></div>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">
<div className="max-w-5xl mx-auto p-6 space-y-10 pb-20">

<div className="space-y-6">
<div className="text-center space-y-2">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Turn Videos into Shorts</h1>
<p className="text-gray-500 text-sm">Paste a link or upload a file. AI handles the cropping, captions, and hook.</p>
</div>
<div className="max-w-2xl mx-auto relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#4C6A6A] to-[#8A7D5A] rounded-lg opacity-20 blur transition duration-500 group-hover:opacity-40"></div>

<div className="relative bg-[#16181D] rounded-lg border border-[#2A2F36] shadow-xl overflow-hidden">
<div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border-b border-[#2A2F36]">
<div className="sm:col-span-2 flex items-center">
<div className="pl-4 text-gray-500">
<iconify-icon icon="solar:letter-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<input autocomplete="email" className="w-full bg-transparent border-none focus:ring-0 text-sm text-white placeholder-gray-600 h-12 px-3 outline-none" id="emailInput" placeholder="you@domain.com" required="" type="email"/>
</div>
<div className="sm:col-span-3 flex items-center border-t sm:border-t-0 sm:border-l border-[#2A2F36]">
<div className="pl-4 text-gray-500">
<iconify-icon icon="solar:link-linear" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-white placeholder-gray-600 h-12 px-3 outline-none" id="urlInput" inputmode="url" placeholder="https://youtube.com/watch?v=..." type="text"/>
<div className="pr-1.5">
<button className="px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-gray-100 transition-colors flex items-center gap-2 disabled:opacity-60 disabled:hover:bg-white disabled:cursor-not-allowed" id="generateBtn">
<span id="generateBtnText">Generate</span>
<iconify-icon icon="solar:stars-minimalistic-linear" id="generateBtnIcon" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:upload-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Or upload a video file</span>
</div>
<div className="flex items-center gap-3">
<input accept="video/*" className="hidden" id="fileInput" type="file"/>
<button className="h-8 px-3 rounded border border-[#2A2F36] bg-[#0F1114] text-xs font-medium text-gray-300 hover:text-white hover:border-gray-500 transition-colors flex items-center gap-2" id="uploadBtn">
<iconify-icon icon="solar:paperclip-linear" style={{-IconifyStrokeWidth: '1.5'}} width="14"></iconify-icon>
                                        Choose file
                                    </button>
<span className="text-xs text-gray-500 truncate max-w-40 sm:max-w-56" id="fileName">No file selected</span>
</div>
</div>
</div>

<div className="mt-3 flex items-center justify-center">
<div className="text-xs text-gray-500" id="formMsg"></div>
</div>
<div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-gray-400">
<label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span>AI Auto-Captions</span>
</label>
<label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span>Face Tracking</span>
</label>
<div className="flex items-center gap-2">
<span>Style:</span>
<select className="bg-[#16181D] border border-[#2A2F36] rounded px-2 py-0.5 text-gray-300 outline-none focus:border-[#4C6A6A] hover:border-gray-600 transition-colors cursor-pointer">
<option>Viral Fast</option>
<option>Storytime</option>
<option>Minimal</option>
</select>
</div>
</div>
</div>
</div>
<div className="h-px bg-[#1F242C] w-full"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 space-y-4">
<div className="flex items-center justify-between px-1">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recent Jobs</h2>
<button className="text-xs text-[#4C6A6A] hover:text-[#5D8181]" id="clearJobsBtn">Clear</button>
</div>

<div className="p-3 bg-[#16181D] border border-[#2A2F36] rounded-lg transition-all cursor-pointer group relative overflow-hidden hidden" id="activeJobCard">
<div className="absolute bottom-0 left-0 h-0.5 bg-[#4C6A6A]" id="progressBar" style={{width: '0%'}}></div>
<div className="flex gap-3">
<div className="w-12 h-12 bg-[#0F1114] rounded border border-[#2A2F36] flex items-center justify-center flex-shrink-0 text-gray-600">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear" id="activeJobIcon" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0 py-0.5">
<h3 className="text-sm font-medium text-white truncate" id="activeJobTitle">Processing...</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-[#4C6A6A]" id="activeJobMeta">Starting…</span>
<span className="text-[10px] text-gray-600">•</span>
<span className="text-[10px] text-gray-500" id="activeJobEta">Est. ~2m</span>
</div>
</div>
</div>
</div>

<div className="p-3 bg-[#16181D] border border-[#2A2F36] rounded-lg hover:border-gray-500 transition-all cursor-pointer group">
<div className="flex gap-3">
<div className="w-12 h-12 bg-gray-800 rounded border border-[#2A2F36] relative overflow-hidden flex-shrink-0">
<img alt="thumb" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0 py-0.5">
<h3 className="text-sm font-medium text-white truncate">Design Systems 2024</h3>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center gap-1 text-[#8A7D5A]">
<iconify-icon icon="solar:check-circle-linear" style={{-IconifyStrokeWidth: '1.5'}} width="10"></iconify-icon>
<span className="text-[10px]">3 Shorts</span>
</div>
<span className="text-[10px] text-gray-600">•</span>
<span className="text-[10px] text-gray-500">2h ago</span>
</div>
</div>
<div className="self-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-gray-400 hover:text-white"><iconify-icon icon="solar:menu-dots-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon></button>
</div>
</div>
</div>

<div className="p-3 bg-[#16181D] border border-[#2A2F36] rounded-lg hover:border-gray-500 transition-all cursor-pointer group">
<div className="flex gap-3">
<div className="w-12 h-12 bg-gray-800 rounded border border-[#2A2F36] relative overflow-hidden flex-shrink-0">
<img alt="thumb" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0 py-0.5">
<h3 className="text-sm font-medium text-white truncate">React vs Vue 2025</h3>
<div className="flex items-center gap-2 mt-1">
<div className="flex items-center gap-1 text-[#8A7D5A]">
<iconify-icon icon="solar:check-circle-linear" style={{-IconifyStrokeWidth: '1.5'}} width="10"></iconify-icon>
<span className="text-[10px]">5 Shorts</span>
</div>
<span className="text-[10px] text-gray-600">•</span>
<span className="text-[10px] text-gray-500">Yesterday</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-[#16181D] border border-[#2A2F36] rounded-lg flex flex-col md:flex-row overflow-hidden min-h-[500px]">

<div className="flex-1 bg-black/50 relative flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-[#2A2F36]">

<div className="w-[220px] aspect-[9/16] bg-[#0F1114] rounded-lg overflow-hidden relative shadow-2xl border border-[#2A2F36] group">
<img alt="Preview" className="absolute inset-0 w-full h-full object-cover opacity-75" id="previewImg" src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-20 left-0 right-0 px-4 text-center">
<span className="inline-block bg-[#0F1114]/60 backdrop-blur-sm text-white font-semibold text-lg leading-tight px-2 py-1 rounded shadow-lg transform rotate-[-1deg]" id="captionLine">
                                        BUT <span className="text-[#4C6A6A]">NOBODY</span> KNEW...
                                    </span>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:scale-105 transition-transform">
<iconify-icon icon="solar:play-bold" style={{-IconifyStrokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
<div className="absolute bottom-6 flex gap-3">
<button className="h-8 px-3 bg-white text-black text-xs font-semibold rounded hover:bg-gray-200 transition-colors flex items-center gap-2 disabled:opacity-60 disabled:hover:bg-white disabled:cursor-not-allowed" disabled="" id="exportBtn">
                                    Export
                                    <iconify-icon icon="solar:download-minimalistic-linear" style={{-IconifyStrokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
<button className="h-8 w-8 rounded border border-[#2A2F36] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2A2F36]">
<iconify-icon icon="solar:share-linear" style={{-IconifyStrokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>

<div className="w-full md:w-72 bg-[#16181D] flex flex-col">
<div className="p-4 border-b border-[#2A2F36] flex justify-between items-center">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Edit</span>
<div className="flex gap-1">
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-[#2A2F36] rounded"><iconify-icon icon="solar:undo-left-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon></button>
<button className="p-1.5 text-gray-400 hover:text-white hover:bg-[#2A2F36] rounded"><iconify-icon icon="solar:redo-right-linear" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon></button>
</div>
</div>
<div className="flex-1 p-4 space-y-6 overflow-y-auto">

<div className="space-y-2">
<label className="text-[10px] text-gray-500 font-semibold uppercase">Caption Preset</label>
<div className="grid grid-cols-2 gap-2">
<button className="px-2 py-2 border border-[#4C6A6A] bg-[#4C6A6A]/10 text-[#E5E7EB] text-xs rounded text-center">Hormozi</button>
<button className="px-2 py-2 border border-[#2A2F36] bg-[#0F1114] text-gray-400 hover:border-gray-500 text-xs rounded text-center transition-colors">Beast</button>
</div>
</div>

<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-500">
<span>Text Size</span>
<span id="textSizeLabel">24</span>
</div>
<input className="w-full h-1 bg-[#2A2F36] rounded-lg appearance-none cursor-pointer" id="textSizeRange" max="44" min="14" type="range" value="24"/>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] text-gray-500">
<span>Position Y</span>
<span id="posLabel">Bottom</span>
</div>
<input className="w-full h-1 bg-[#2A2F36] rounded-lg appearance-none cursor-pointer" id="posRange" max="85" min="10" type="range" value="65"/>
</div>
</div>

<div className="space-y-3 pt-2 border-t border-[#2A2F36]">
<div className="flex items-center justify-between">
<span className="text-xs text-gray-300">Highlight Keywords</span>
<input checked="" className="custom-checkbox" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-300">Remove Silences</span>
<input checked="" className="custom-checkbox" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-300">Background Music</span>
<input className="custom-checkbox" type="checkbox"/>
</div>
</div>
</div>

<div className="h-20 border-t border-[#2A2F36] bg-[#0F1114] p-3">
<div className="text-[10px] text-gray-500 mb-1 flex justify-between">
<span>Timeline</span>
<span id="timelineTime">00:00</span>
</div>
<div className="h-8 bg-[#16181D] rounded border border-[#2A2F36] relative flex items-center overflow-hidden">
<div className="h-full w-1/4 bg-[#4C6A6A]/20 border-r border-[#4C6A6A]/30"></div>
<div className="h-full w-1/4 bg-[#2A2F36]"></div>
<div className="h-full w-1/4 bg-[#4C6A6A]/20 border-l border-[#4C6A6A]/30"></div>
<div className="absolute left-0 h-full w-0.5 bg-white" id="playhead" style={{boxShadow: '0 0 8px rgba(255,255,255,0.55)'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
