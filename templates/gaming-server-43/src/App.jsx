import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // FiveM Resource Loading Simulation
            const statuses = [
                "HANDSHAKING WITH SERVER...",
                "DOWNLOADING RESOURCE MANIFEST...",
                "REQUESTING MAP DATA...",
                "LOADING VEHICLE ASSETS...",
                "INITIALIZING FRAMEWORK...",
                "VERIFYING WHITELIST...",
                "AWAITING SCRIPTS...",
                "READY TO JOIN"
            ];
            
            const dummyFiles = [
                "vltx_core/client.lua", "vltx_ui/html/index.html", "assets/stream/veh_police.yft", 
                "assets/stream/veh_police.ytd", "assets/stream/map_custom.ymap", 
                "vltx_inventory/shared.lua", "vltx_weapons/config.lua", "voip_system/main.js",
                "vltx_clothing/stream/shoes_01.ydd", "vltx_clothing/stream/torso_04.ydd"
            ];
            
            const statusEl = document.getElementById('loading-status');
            const progressEl = document.getElementById('loading-progress');
            const percentageEl = document.getElementById('loading-percentage');
            const fileEl = document.getElementById('loading-file');

            let progress = 0;
            let statusIndex = 0;

            const fileInterval = setInterval(() => {
                if(progress < 95) {
                    const randomFile = dummyFiles[Math.floor(Math.random() * dummyFiles.length)];
                    fileEl.innerText = `downloading: ${randomFile} (${Math.floor(Math.random() * 50 + 1)}mb)`;
                }
            }, 250);

            const loadingInterval = setInterval(() => {
                progress += Math.random() * 2 + 0.5; 
                
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(loadingInterval);
                    clearInterval(fileInterval);
                    
                    statusEl.innerText = statuses[statuses.length - 1];
                    statusEl.classList.replace('text-neutral-400', 'text-teal-400');
                    fileEl.innerText = "all resources loaded successfully.";
                    fileEl.classList.replace('text-neutral-600', 'text-teal-500/70');
                } else {
                    const step = 100 / (statuses.length - 1);
                    const currentStep = Math.floor(progress / step);
                    
                    if (currentStep !== statusIndex && currentStep < statuses.length - 1) {
                        statusIndex = currentStep;
                        statusEl.innerText = statuses[statusIndex];
                    }
                }

                progressEl.style.width = `${progress}%`;
                percentageEl.innerText = `${Math.floor(progress)}%`;

            }, 100);

            // Music Player & Volume Logic
            const audioEl = document.getElementById('bg-audio');
            const playBtn = document.getElementById('music-toggle');
            const playIcon = document.getElementById('play-icon');
            const skipBtn = document.getElementById('music-skip');
            const trackName = document.getElementById('track-name');
            const equalizer = document.getElementById('equalizer');
            const volumeSlider = document.getElementById('volume-slider');
            
            let isPlaying = false;
            let currentTrack = 1;

            // Init volume
            audioEl.volume = volumeSlider.value / 100;

            volumeSlider.addEventListener('input', (e) => {
                audioEl.volume = e.target.value / 100;
            });

            playBtn.addEventListener('click', () => {
                if (isPlaying) {
                    audioEl.pause();
                    playIcon.setAttribute('icon', 'solar:play-linear');
                    playBtn.classList.remove('bg-teal-500/20', 'shadow-[0_0_20px_rgba(45,212,191,0.3)]');
                    playBtn.classList.add('bg-teal-500/10');
                    equalizer.classList.remove('opacity-100');
                    equalizer.classList.add('opacity-0');
                } else {
                    audioEl.play().catch(e => console.log("Add audio src to play."));
                    playIcon.setAttribute('icon', 'solar:pause-linear');
                    playBtn.classList.remove('bg-teal-500/10');
                    playBtn.classList.add('bg-teal-500/20', 'shadow-[0_0_20px_rgba(45,212,191,0.3)]');
                    equalizer.classList.remove('opacity-0');
                    equalizer.classList.add('opacity-100');
                }
                isPlaying = !isPlaying;
            });

            skipBtn.addEventListener('click', () => {
                currentTrack = currentTrack === 1 ? 2 : 1;
                trackName.style.opacity = '0';
                setTimeout(() => {
                    trackName.innerText = currentTrack === 1 ? "Loading_Theme.wav" : "Los_Santos_Vibes.mp3";
                    trackName.style.opacity = '1';
                }, 200);
            });

            // Keybinds Hover Logic
            const keyInfoPanel = document.getElementById('key-info-panel');
            const keyDisplayName = document.getElementById('key-display-name');
            const keyDisplayAction = document.getElementById('key-display-action');
            const boundKeys = document.querySelectorAll('.key-bound');

            boundKeys.forEach(key => {
                key.addEventListener('mouseenter', (e) => {
                    const action = e.target.getAttribute('data-action');
                    const keyName = e.target.getAttribute('data-key');
                    
                    keyDisplayName.innerText = `Keybind [ ${keyName} ]`;
                    keyDisplayName.classList.replace('text-neutral-500', 'text-teal-500');
                    
                    keyDisplayAction.innerText = action;
                    keyInfoPanel.classList.add('border-teal-500/30', 'bg-teal-500/5');
                    keyInfoPanel.classList.remove('from-white/[0.03]');
                });
                
                key.addEventListener('mouseleave', () => {
                    keyDisplayName.innerText = 'Action Module';
                    keyDisplayName.classList.replace('text-teal-500', 'text-neutral-500');
                    
                    keyDisplayAction.innerText = 'Hover over a highlighted key';
                    keyInfoPanel.classList.remove('border-teal-500/30', 'bg-teal-500/5');
                    keyInfoPanel.classList.add('from-white/[0.03]');
                });
            });
        });

        // Modal Logic
        function openModal(id) {
            const el = document.getElementById(id);
            const inner = el.querySelector('.modal-inner');
            el.classList.remove('hidden');
            
            // Trigger reflow
            void el.offsetWidth;
            
            el.classList.remove('opacity-0');
            inner.classList.remove('scale-95');
        }

        function closeModal(id) {
            const el = document.getElementById(id);
            const inner = el.querySelector('.modal-inner');
            
            el.classList.add('opacity-0');
            inner.classList.add('scale-95');
            
            setTimeout(() => {
                el.classList.add('hidden');
            }, 300);
        }

        // Close modal on background click
        document.querySelectorAll('[id^="modal-"]').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if(e.target === modal) {
                    closeModal(modal.id);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 blur-sm scale-105"></div>
<div className="fixed inset-0 z-0 bg-gradient-to-t from-[#050507] via-[#050507]/80 to-[#050507]/40"></div>
<div className="fixed inset-0 z-0 bg-grid"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none z-0 mix-blend-screen"></div>

<div className="absolute bottom-6 right-8 z-40 flex flex-col items-end text-right pointer-events-none">
<span className="text-xs text-neutral-500 font-['Outfit'] tracking-widest uppercase">Server Build</span>
<span className="text-sm font-medium text-neutral-400 tracking-tight">b2699 • Framework v2.4</span>
</div>

<div className="absolute top-8 right-8 z-40 bg-[#0a0a0c]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-2 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-all hover:bg-[#0a0a0c]/80 hover:border-white/10 group min-w-[200px]">
<div className="flex items-center gap-3">
<button className="w-10 h-10 shrink-0 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center hover:bg-teal-500/20 transition-all duration-300 text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.1)]" id="music-toggle">
<iconify-icon className="text-lg" icon="solar:play-linear" id="play-icon"></iconify-icon>
</button>
<div className="flex flex-col flex-1 overflow-hidden">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-neutral-500 font-['Outfit'] uppercase tracking-widest leading-none">Audio Link</span>
<div className="flex items-end gap-0.5 h-3 opacity-0 group-hover:opacity-100 transition-opacity" id="equalizer">
<div className="w-0.5 bg-teal-500/50 rounded-full eq-bar"></div>
<div className="w-0.5 bg-teal-500/50 rounded-full eq-bar"></div>
<div className="w-0.5 bg-teal-500/50 rounded-full eq-bar"></div>
<div className="w-0.5 bg-teal-500/50 rounded-full eq-bar"></div>
</div>
</div>
<div className="w-full overflow-hidden relative h-4">
<span className="text-sm text-neutral-200 font-medium leading-none whitespace-nowrap absolute left-0 transition-all" id="track-name">Loading_Theme.wav</span>
</div>
</div>
<button className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="music-skip">
<iconify-icon className="text-lg" icon="solar:skip-next-linear"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 px-2 pb-1 opacity-50 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-xs text-neutral-400" icon="solar:volume-small-linear"></iconify-icon>
<input className="volume-slider" id="volume-slider" max="100" min="0" type="range" value="30"/>
<iconify-icon className="text-xs text-neutral-400" icon="solar:volume-loud-linear"></iconify-icon>
</div>
<audio id="bg-audio" loop="">
<source src="#" type="audio/mpeg"/>
</audio>
</div>

<main className="w-full max-w-2xl relative z-10 flex flex-col items-center px-6 mt-[-4vh]">

<div className="relative w-36 h-36 flex items-center justify-center mb-10">
<div className="absolute inset-0 rounded-full border border-dashed border-white/5 spin-slow"></div>
<div className="absolute inset-1 rounded-full border border-transparent border-t-teal-500/30 border-l-teal-500/10 spin-reverse"></div>
<div className="absolute inset-4 rounded-full bg-[#0a0a0c]/40 border border-white/[0.03] flex items-center justify-center backdrop-blur-xl shadow-inner">
<div className="w-12 h-12 flex items-center justify-center bg-teal-500/5 rounded-full border border-teal-500/20 shadow-[0_0_30px_rgba(45,212,191,0.1)] relative">
<div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping opacity-20"></div>
<iconify-icon className="text-2xl text-teal-400 relative z-10" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
</div>
</div>

<h1 className="text-4xl font-medium tracking-tight text-white uppercase font-['Outfit'] mb-12 flex items-center gap-4 drop-shadow-2xl">
            VLTX <span className="text-neutral-600 font-light">ROLEPLAY</span>
<span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)] animate-pulse"></span>
</h1>

<div className="w-full bg-[#0a0a0c]/40 backdrop-blur-2xl border border-white/5 rounded-xl p-8 shadow-[0_16px_64px_rgba(0,0,0,0.8)] relative overflow-hidden group">

<div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-[0.02] group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div className="relative z-10 flex items-end justify-between mb-4">
<div className="flex flex-col gap-1">
<p className="text-sm font-medium text-neutral-400 font-['Outfit'] tracking-widest uppercase transition-colors duration-300" id="loading-status">
                        HANDSHAKING WITH SERVER...
                    </p>
<p className="text-xs text-neutral-600 font-mono tracking-tight h-4 overflow-hidden" id="loading-file">
                        awaiting resource manifest...
                    </p>
</div>
<div className="flex flex-col items-end gap-1">
<p className="text-2xl font-medium text-teal-400 font-['Outfit'] tracking-tight leading-none" id="loading-percentage">
                        0%
                    </p>
</div>
</div>
<div className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/5 relative">
<div className="h-full bg-gradient-to-r from-teal-600 to-teal-400 w-0 shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300 ease-out relative" id="loading-progress">
<div className="absolute inset-0 scan-line w-full h-full opacity-50"></div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 font-['Outfit'] uppercase tracking-widest">
<span className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon className="text-sm" icon="solar:server-square-linear"></iconify-icon>
</div>
<span>NODE: LA-01</span>
</span>
<span className="flex items-center gap-2">
<span>128 / 256 PLAYERS</span>
<div className="w-6 h-6 rounded bg-teal-500/10 flex items-center justify-center border border-teal-500/20 text-teal-400">
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</span>
</div>
</div>
</main>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-[#0a0a0c]/50 backdrop-blur-2xl border border-white/5 p-2 rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.8)] transition-all hover:border-white/10 hover:bg-[#0a0a0c]/60">
<button className="flex items-center gap-2.5 px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-neutral-400 hover:text-teal-400 group" onclick="openModal('modal-rules')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-['Outfit'] font-medium tracking-widest uppercase mt-px">Rules</span>
</button>
<div className="w-px h-6 bg-white/5"></div>
<button className="flex items-center gap-2.5 px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-neutral-400 hover:text-teal-400 group" onclick="openModal('modal-keybinds')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:keyboard-linear"></iconify-icon>
<span className="text-xs font-['Outfit'] font-medium tracking-widest uppercase mt-px">Keybinds</span>
</button>
<div className="w-px h-6 bg-white/5"></div>
<button className="flex items-center gap-2.5 px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-neutral-400 hover:text-teal-400 group" onclick="openModal('modal-team')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:shield-user-linear"></iconify-icon>
<span className="text-xs font-['Outfit'] font-medium tracking-widest uppercase mt-px">Staff</span>
</button>
<div className="w-px h-6 bg-white/5"></div>
<button className="flex items-center gap-2.5 px-6 py-3 rounded-xl hover:bg-white/5 transition-all text-neutral-400 hover:text-teal-400 group" onclick="openModal('modal-store')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-xs font-['Outfit'] font-medium tracking-widest uppercase mt-px">Store</span>
</button>
<div className="w-px h-6 bg-white/5"></div>
<button className="flex items-center gap-2.5 px-6 py-3 rounded-xl hover:bg-[#5865F2]/10 transition-all text-neutral-400 hover:text-[#5865F2] group">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform duration-300" icon="solar:plain-linear"></iconify-icon>
<span className="text-xs font-['Outfit'] font-medium tracking-widest uppercase mt-px">Discord</span>
</button>
</div>


<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300" id="modal-rules">
<div className="bg-[#0a0a0c]/90 border border-white/10 w-full max-w-xl rounded-xl p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)] modal-inner transform scale-95 transition-transform duration-300 backdrop-blur-xl">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg w-10 h-10 flex items-center justify-center" onclick="closeModal('modal-rules')">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<h2 className="text-3xl font-medium tracking-tight text-white font-['Outfit'] mb-6 flex items-center gap-3 border-b border-white/5 pb-5">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
<iconify-icon className="text-teal-400 text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
                Server Rules
            </h2>
<div className="space-y-4 text-sm text-neutral-400 max-h-80 overflow-y-auto pr-4 custom-scrollbar leading-relaxed">
<div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors">
<p><span className="text-teal-400 font-medium mr-2">01. No Third-Party Software</span> Use of unauthorized exploits, mod menus, or macros will result in an immediate and permanent hardware ban. No appeals.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors">
<p><span className="text-teal-400 font-medium mr-2">02. Value of Life (NVL)</span> You must value your character's life. If you are outnumbered or held at gunpoint, you must comply realistically. Fear RP is mandatory.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors">
<p><span className="text-teal-400 font-medium mr-2">03. RDM &amp; VDM</span> Random Deathmatch (killing without initiation or reason) and Vehicle Deathmatch (using a vehicle as a weapon unprovoked) are strictly prohibited.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors">
<p><span className="text-teal-400 font-medium mr-2">04. Respect &amp; Conduct</span> Maintain a respectful environment. OOC (Out of Character) toxicity, hate speech, and harassment will not be tolerated under any circumstance.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg hover:border-white/10 transition-colors">
<p><span className="text-teal-400 font-medium mr-2">05. Metagaming</span> Using out-of-character information (like Twitch streams or Discord chats) to influence in-game character actions is forbidden.</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300" id="modal-keybinds">
<div className="bg-[#0a0a0c]/90 border border-white/10 w-full max-w-3xl rounded-xl p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)] modal-inner transform scale-95 transition-transform duration-300 backdrop-blur-xl">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg w-10 h-10 flex items-center justify-center z-10" onclick="closeModal('modal-keybinds')">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<h2 className="text-3xl font-medium tracking-tight text-white font-['Outfit'] mb-6 flex items-center gap-3 border-b border-white/5 pb-5">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
<iconify-icon className="text-teal-400 text-2xl" icon="solar:keyboard-linear"></iconify-icon>
</div>
                Server Keybinds
            </h2>

<div className="h-24 mb-8 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-xl flex flex-col items-center justify-center text-center transition-all duration-300 shadow-inner" id="key-info-panel">
<p className="text-xs text-neutral-500 font-['Outfit'] font-medium uppercase tracking-[0.2em] mb-1 transition-colors duration-300" id="key-display-name">Action Module</p>
<p className="text-2xl font-medium text-white tracking-tight transition-colors duration-300" id="key-display-action">Hover over a highlighted key</p>
</div>

<div className="flex flex-col gap-2 p-4 bg-black/40 rounded-xl border border-white/5 select-none font-mono">

<div className="flex gap-2 justify-center w-full">
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">`</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Primary Weapon" data-key="1">1</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Secondary Weapon" data-key="2">2</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Melee Weapon" data-key="3">3</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">4</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">5</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">6</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">7</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">8</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">9</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">0</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">-</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">=</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-4">Bksp</div>
</div>

<div className="flex gap-2 justify-center w-full">
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-4">Tab</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">Q</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">W</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Interact / Context Menu" data-key="E">E</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">R</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Open Text Chat" data-key="T">T</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">Y</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Lock / Unlock Vehicle" data-key="U">U</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">I</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">O</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">P</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">[</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">]</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">\</div>
</div>

<div className="flex gap-2 justify-center w-full">
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-6">Caps</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">A</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">S</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">D</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Enter / Exit Vehicle" data-key="F">F</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Toggle Seatbelt" data-key="G">G</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">H</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">J</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Open Inventory" data-key="K">K</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">L</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">;</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">'</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-8">Enter</div>
</div>

<div className="flex gap-2 justify-center w-full">
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-8">Shift</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Player Scoreboard" data-key="Z">Z</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Put Hands Up" data-key="X">X</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">C</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">V</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Point Finger" data-key="B">B</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">N</div>
<div className="key-bound flex items-center justify-center rounded bg-teal-500/10 border border-teal-500/30 text-teal-400 cursor-help hover:bg-teal-500/30 hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all h-10 w-10" data-action="Open Mobile Phone" data-key="M">M</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">,</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">.</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 w-10">/</div>
<div className="flex items-center justify-center rounded bg-white/5 border border-white/5 text-xs text-neutral-600 h-10 px-10">Shift</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300" id="modal-team">
<div className="bg-[#0a0a0c]/90 border border-white/10 w-full max-w-xl rounded-xl p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)] modal-inner transform scale-95 transition-transform duration-300 backdrop-blur-xl">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg w-10 h-10 flex items-center justify-center" onclick="closeModal('modal-team')">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<h2 className="text-3xl font-medium tracking-tight text-white font-['Outfit'] mb-6 flex items-center gap-3 border-b border-white/5 pb-5">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
<iconify-icon className="text-teal-400 text-2xl" icon="solar:shield-user-linear"></iconify-icon>
</div>
                Administration
            </h2>
<div className="grid grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-center gap-4 hover:border-teal-500/30 transition-all hover:bg-teal-500/[0.02] group">
<div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-teal-400 text-xl" icon="solar:crown-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white tracking-tight mb-0.5">Cipher</p>
<p className="text-xs text-teal-400 font-['Outfit'] uppercase tracking-widest">Founder</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-center gap-4 hover:border-purple-500/30 transition-all hover:bg-purple-500/[0.02] group">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-purple-400 text-xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white tracking-tight mb-0.5">Ghost</p>
<p className="text-xs text-purple-400 font-['Outfit'] uppercase tracking-widest">Lead Dev</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-center gap-4 hover:border-blue-500/30 transition-all hover:bg-blue-500/[0.02] group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-blue-400 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white tracking-tight mb-0.5">Vanguard</p>
<p className="text-xs text-blue-400 font-['Outfit'] uppercase tracking-widest">Head Admin</p>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 flex items-center gap-4 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/[0.02] group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<div>
<p className="text-base font-medium text-white tracking-tight mb-0.5">Nova</p>
<p className="text-xs text-emerald-400 font-['Outfit'] uppercase tracking-widest">Support Lead</p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050507]/80 backdrop-blur-md hidden opacity-0 transition-opacity duration-300" id="modal-store">
<div className="bg-[#0a0a0c]/90 border border-white/10 w-full max-w-xl rounded-xl p-8 relative shadow-[0_24px_64px_rgba(0,0,0,0.9)] modal-inner transform scale-95 transition-transform duration-300 backdrop-blur-xl">
<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg w-10 h-10 flex items-center justify-center" onclick="closeModal('modal-store')">
<iconify-icon className="text-xl" icon="solar:close-square-linear"></iconify-icon>
</button>
<h2 className="text-3xl font-medium tracking-tight text-white font-['Outfit'] mb-6 flex items-center gap-3 border-b border-white/5 pb-5">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
<iconify-icon className="text-teal-400 text-2xl" icon="solar:cart-large-linear"></iconify-icon>
</div>
                Webstore
            </h2>
<div className="grid grid-cols-1 gap-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">

<div className="bg-gradient-to-r from-teal-500/10 to-white/[0.02] border border-teal-500/20 rounded-xl p-6 flex justify-between items-center relative overflow-hidden group">
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-500/10 to-transparent transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
<div className="relative z-10">
<p className="text-lg font-medium text-white tracking-tight flex items-center gap-2 mb-1">
                            Priority Queue
                            <iconify-icon className="text-teal-400" icon="solar:star-fall-linear"></iconify-icon>
</p>
<p className="text-sm text-neutral-400 max-w-[240px]">Skip the line. Instant access to the city during peak hours. Includes custom colored callsign.</p>
</div>
<button className="relative z-10 px-5 py-2.5 bg-teal-500/10 text-teal-400 text-sm font-medium rounded-lg border border-teal-500/30 hover:bg-teal-500 hover:text-white hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all duration-300">
                        $14.99 / mo
                    </button>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 flex justify-between items-center hover:border-white/20 transition-colors">
<div>
<p className="text-lg font-medium text-white tracking-tight mb-1">Custom License Plate</p>
<p className="text-sm text-neutral-500 max-w-[240px]">Personalize your main vehicle with a unique 8-character plate.</p>
</div>
<button className="px-5 py-2.5 bg-white/5 text-neutral-300 text-sm font-medium rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                        $4.99
                    </button>
</div>
</div>
</div>
</div>



    </>
  );
}
