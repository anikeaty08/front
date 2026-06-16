import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const $ = (sel, parent = document) => parent.querySelector(sel);
        const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

        // Mobile menu toggle
        (function nav() {
            const btn = $('#menuBtn');
            const menu = $('#mobileMenu');
            const ctas = $('#navCtas');
            if (!btn || !menu) return;
            btn.addEventListener('click', () => {
                const open = menu.classList.toggle('hidden') === false;
                btn.setAttribute('aria-expanded', String(open));
                if (ctas) ctas.classList.toggle('opacity-0', open);
            });
        })();

        // Year in footer
        (function year() {
            const y = document.getElementById('year');
            if (y) y.textContent = new Date().getFullYear();
        })();
    


        (function() {
            const container = document.getElementById('voiceWidget');
            if (!container) return;
            const html = `<div class="voice-card"><div class="voice-header"><div class="voice-header-left"><div class="voice-icon-box"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect x="9" y="2" width="6" height="13" rx="3"></rect></svg></div><div class="voice-header-info"><h3>Call Recording</h3><p id="voiceStatus">Loading...</p></div></div><span id="voiceBadge" class="voice-badge hidden">Playing</span></div><div class="voice-waveform"><div class="voice-bars" id="voiceBars"></div></div><div class="voice-transcript" id="voiceTranscript"><div class="voice-placeholder">Transcript will appear as the call plays...</div></div><div class="voice-progress-container"><div class="voice-progress-bar" id="voiceProgressBar"><div class="voice-progress-fill" id="voiceProgressFill"></div></div><div class="voice-time-display"><span id="voiceCurrentTime">0:00</span><span id="voiceDuration">0:00</span></div></div><div class="voice-footer"><div class="voice-meta"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg><span>Duration: <span id="voiceCallDuration">—</span></span></div><button class="voice-button" id="voicePlayBtn" disabled><svg id="voicePlayIcon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span id="voicePlayLabel">Play</span></button></div></div><audio id="voiceAudio" preload="auto"></audio>`;
            container.innerHTML = html;
            const $ = id => document.getElementById(id);
            const status = $('voiceStatus'),
                badge = $('voiceBadge'),
                transcript = $('voiceTranscript'),
                barsContainer = $('voiceBars'),
                audio = $('voiceAudio'),
                playBtn = $('voicePlayBtn'),
                playIcon = $('voicePlayIcon'),
                playLabel = $('voicePlayLabel'),
                progressBar = $('voiceProgressBar'),
                progressFill = $('voiceProgressFill'),
                currentTimeEl = $('voiceCurrentTime'),
                durationEl = $('voiceDuration'),
                callDurationEl = $('voiceCallDuration');
            let transcriptData = [],
                currentIndex = 0,
                bars = [],
                rafId, audioContext, analyser, dataArray, audioSource;
            for (let i = 0; i < 25; i++) {
                const bar = document.createElement('div');
                bar.className = 'voice-bar';
                bar.style.height = (20 + Math.random() * 20) + 'px';
                barsContainer.appendChild(bar);
                bars.push(bar)
            }

            function formatTime(sec) {
                if (!isFinite(sec)) return '0:00';
                const m = Math.floor(sec / 60),
                    s = Math.floor(sec % 60);
                return `${m}:${s.toString().padStart(2,'0')}`
            }

            function parseTime(ts) {
                const parts = ts.split(' - ')[0].split(':'),
                    mins = parseInt(parts[0]) || 0,
                    secs = parseInt(parts[1]) || 0;
                return mins * 60 + secs
            }

            function escapeHtml(s) {
                const div = document.createElement('div');
                div.textContent = s;
                return div.innerHTML
            }

            function addMessage(role, text, time) {
                const msg = document.createElement('div');
                msg.className = `voice-message ${role}`;
                msg.innerHTML = `<div class="voice-message-content"><span class="voice-message-label">${role==='agent'?'Agent:':'Customer:'}</span>${escapeHtml(text)}${time?`<div class="voice-message-time">${time.split(' - ')[0]}</div>`:''}</div>`;
                transcript.appendChild(msg);
                msg.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                })
            }

            function animateBars() {
                if (!audio.paused && analyser && dataArray) {
                    analyser.getByteFrequencyData(dataArray);
                    bars.forEach((bar, i) => {
                        const dataIndex = Math.floor(i * dataArray.length / bars.length),
                            value = dataArray[dataIndex] / 255,
                            h = 8 + value * 40;
                        bar.style.height = h + 'px';
                        bar.style.opacity = 0.3 + value * 0.5
                    })
                } else if (!audio.paused) {
                    const t = performance.now() / 200;
                    bars.forEach((bar, i) => {
                        const v = (Math.sin(t + i * 0.5) + 1) / 2,
                            h = 8 + v * 36;
                        bar.style.height = h + 'px';
                        bar.style.opacity = 0.3 + v * 0.5
                    })
                }
                rafId = requestAnimationFrame(animateBars)
            }

            function updateTranscript() {
                const t = audio.currentTime;
                while (currentIndex < transcriptData.length && transcriptData[currentIndex].time <= t) {
                    const m = transcriptData[currentIndex];
                    addMessage(m.role, m.text, m.timestamp);
                    currentIndex++
                }
            }
            let audioLoaded = false,
                transcriptLoaded = false;

            function checkReady() {
                if (audioLoaded && transcriptLoaded) {
                    status.textContent = 'Ready to play';
                    playBtn.disabled = false
                }
            }
            async function loadAudio() {
                try {
                    status.textContent = 'Loading audio...';
                    const res = await fetch('https://n8n.muktam.online/webhook/265d38af-0407-41d4-b467-55d7da7731f0');
                    if (!res.ok) throw new Error('Audio API error');
                    const blob = await res.blob();
                    audio.src = URL.createObjectURL(blob);
                    audio.onloadeddata = () => {
                        audioLoaded = true;
                        checkReady()
                    };
                    audio.load()
                } catch (err) {
                    status.textContent = 'Error loading audio';
                    transcript.innerHTML = `<div class="voice-error">Failed to load audio</div>`
                }
            }
            async function loadTranscript() {
                try {
                    const res = await fetch('https://n8n.muktam.online/webhook/trans');
                    if (!res.ok) throw new Error('Transcript API error');
                    const text = await res.text(),
                        lines = text.split('\n').filter(l => l.trim());
                    let speaker = '',
                        time = '';
                    for (const line of lines) {
                        if (line.includes('SwarX ai')) speaker = 'agent';
                        else if (line.includes('Customer')) speaker = 'customer';
                        else if (/^\d{2}:\d{2}/.test(line)) time = line.trim();
                        else if (line.trim() && speaker && time) {
                            transcriptData.push({
                                role: speaker,
                                text: line.trim(),
                                timestamp: time,
                                time: parseTime(time)
                            })
                        }
                    }
                    transcript.innerHTML = '';
                    transcriptLoaded = true;
                    checkReady()
                } catch (err) {
                    status.textContent = 'Error loading transcript';
                    transcript.innerHTML = `<div class="voice-error">Failed to load transcript</div>`
                }
            }
            playBtn.onclick = () => {
                audio.paused ? audio.play() : audio.pause()
            };
            audio.onplay = () => {
                playLabel.textContent = 'Pause';
                playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
                badge.classList.remove('hidden');
                status.textContent = 'Playing...';
                if (!audioContext) {
                    try {
                        audioContext = new(window.AudioContext || window.webkitAudioContext)();
                        analyser = audioContext.createAnalyser();
                        analyser.fftSize = 64;
                        dataArray = new Uint8Array(analyser.frequencyBinCount);
                        audioSource = audioContext.createMediaElementSource(audio);
                        audioSource.connect(analyser);
                        analyser.connect(audioContext.destination)
                    } catch (e) {}
                }
                animateBars()
            };
            audio.onpause = () => {
                playLabel.textContent = 'Play';
                playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
                badge.classList.add('hidden');
                status.textContent = 'Paused'
            };
            audio.onended = () => {
                playLabel.textContent = 'Play';
                playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
                badge.classList.add('hidden');
                status.textContent = 'Completed'
            };
            audio.ontimeupdate = () => {
                const pct = (audio.currentTime / audio.duration) * 100;
                progressFill.style.width = pct + '%';
                currentTimeEl.textContent = formatTime(audio.currentTime);
                updateTranscript()
            };
            audio.onloadedmetadata = () => {
                durationEl.textContent = formatTime(audio.duration);
                callDurationEl.textContent = formatTime(audio.duration)
            };
            progressBar.onclick = e => {
                const rect = progressBar.getBoundingClientRect(),
                    pos = (e.clientX - rect.left) / rect.width;
                audio.currentTime = pos * audio.duration;
                transcript.innerHTML = '';
                currentIndex = 0;
                for (let i = 0; i < transcriptData.length; i++) {
                    if (transcriptData[i].time <= audio.currentTime) {
                        addMessage(transcriptData[i].role, transcriptData[i].text, transcriptData[i].timestamp);
                        currentIndex = i + 1
                    } else break
                }
            };
            loadAudio();
            loadTranscript();
            animateBars()
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/733fa9a7-5933-4284-b0c1-d30739c1558b_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>



<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(47,97,255,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(0,255,200,0.04),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_20%,rgba(200,200,200,0.03),transparent_60%)]"></div>
</div>

<header className="sticky z-30 supports-[backdrop-filter]:bg-white/60 border-b top-0 backdrop-blur-xl bg-white/80 border-black/10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group logo-wrapper" href="#">
<div className="icon-wrapper">
<div className="explosion-center"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
</div>
<div className="brand-name">
<div className="brand-primary xl:text-3xl lg:text-3xl text-2xl font-semibold font-merriweather">muktaṁ</div>
<div className="brand-suffix xl:text-lg lg:text-xl text-base font-normal text-gray-500 font-merriweather mr-1 ml-1">ai</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition font-sans text-black/70 hover:text-black" href="#features">Features</a>
<a className="text-sm transition font-sans text-black/70 hover:text-black" href="#pipeline">How it works</a>
<a className="text-sm transition font-sans text-black/70 hover:text-black" href="#integrations">Integrations</a>
<a className="text-sm transition font-sans text-black/70 hover:text-black" href="#pricing">Pricing</a>
<a className="text-sm transition font-sans text-black/70 hover:text-black" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex gap-3 transition-opacity duration-300 items-center" id="navCtas">
<a className="transition text-sm ring-1 rounded-md pt-2 pr-3.5 pb-2 pl-3.5 hover:text-black hover:ring-black/20 text-black/80 ring-black/10 bg-white/60 backdrop-blur-sm" href="https://calendly.com/mihirvt">Book demo</a>
<a className="px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 transition font-sans bg-black text-white hover:bg-black/90 ring-black/10" href="#">Launch Studio</a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 transition ring-black/10 hover:ring-black/20 hover:bg-black/5" id="menuBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
<div className="md:hidden hidden border-t border-black/10" id="mobileMenu">
<div className="px-4 py-4 flex flex-col gap-2">
<a className="px-3 py-2 rounded-md text-sm font-sans text-black/80 hover:text-black hover:bg-black/5" href="#features">Features</a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-black/80 hover:text-black hover:bg-black/5" href="#pipeline">How it works</a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-black/80 hover:text-black hover:bg-black/5" href="#integrations">Integrations</a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-black/80 hover:text-black hover:bg-black/5" href="#pricing">Pricing</a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-black/80 hover:text-black hover:bg-black/5" href="#faq">FAQ</a>
<div className="mt-2 flex flex-col gap-2">
<a className="px-3.5 py-2 rounded-md text-sm ring-1 text-center font-sans text-black/80 hover:text-black ring-black/10 hover:ring-black/20" href="#">Book demo</a>
<a className="px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 text-center font-sans bg-black text-white hover:bg-black/90 ring-black/10" href="#">Launch Studio</a>
</div>
</div>
</div>
</div>
</header>

<section className="overflow-hidden relative">
<div className="sm:px-6 lg:px-8 sm:pt-24 sm:pb-16 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 gap-x-10 gap-y-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 text-xs mb-5 backdrop-blur-md ring-black/10 bg-white/60 text-black/70 shadow-sm">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="">Made for D2C</span>
</div>
<h1 className="leading-[1.05] sm:text-5xl md:text-6xl lg:text-6xl text-5xl font-semibold text-slate-950 tracking-tighter font-instrument-serif" style={{position: 'relative'}}>
<style>
    @keyframes wordFadeInOut {

      0%,
      10% {
        opacity: 0;
        transform: translateY(8px);
      }

      15%,
      35% {
        opacity: 1;
        transform: translateY(0);
      }

      40%,
      100% {
        opacity: 0;
        transform: translateY(-8px);
      }
    }

    .animated-word-container {
      display: inline-block;
      position: relative;
      min-width: 4.em;
      /* fixed */
      text-align: left;
      height: 1em;
      /* ensures no jump */
      overflow: hidden;
      vertical-align: top;
    }

    .animated-word {
      position: absolute;
      left: 0;
      top: 0;
      white-space: nowrap;
      opacity: 0;
      animation: wordFadeInOut 6s ease-in-out infinite;
    }

    .animated-word:nth-child(1) {
      animation-delay: 0s;
    }

    .animated-word:nth-child(2) {
      animation-delay: 2s;
    }

    .animated-word:nth-child(3) {
      animation-delay: 4s;
    }

    .animated-word-placeholder {
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  </style>

  Voice agents that
  <span className="animated-word-container">
<span className="animated-word">talk__</span>
<span className="animated-word">listen_</span>
<span className="animated-word">convert</span>
<span className="animated-word-placeholder">convert</span>
</span>
  like a
  <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-black mix-blend-normal">
    founder
  </span>
</h1>
<p className="sm:text-lg text-base text-slate-900/70 mt-4">Automate every d2c workflow with our human grade ai agents. </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-left gap-2 transition hover:bg-white/80 hover:text-black/60 max-w-40 text-sm font-semibold text-white tracking-tight bg-black/80 rounded-md ring-white/10 ring-1 pt-2.5 pr-4 pb-2.5 pl-4" href="https://calendly.com/mihirvt">Get Mukti</a>
</div>
<div className="mt-6 flex flex-wrap items-center gap-4">
<div className="flex -space-x-2">
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 object-cover ring-white" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<p className="sm:text-sm text-xs font-normal text-slate-950/90">Don't trust, <span className="line-through">see</span> listen by yourself</p>
</div>
</div>

<div className="lg:col-span-6 w-full overflow-hidden">
<div className="relative">
<div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-20 blur-2xl bg-[radial-gradient(400px_80px_at_50%_0%,rgba(100,100,100,0.08),transparent)]"></div>
<div className="w-full max-w-full" id="voiceWidget"><div className="voice-card"><div className="voice-header"><div className="voice-header-left"><div className="voice-icon-box"><svg fill="none" height="18" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></div><div className="voice-header-info"><h3>Call Recording</h3><p id="voiceStatus">Ready to play</p></div></div><span className="voice-badge hidden" id="voiceBadge">Playing</span></div><div className="voice-waveform"><div className="voice-bars" id="voiceBars"><div className="voice-bar" style={{height: '22.4407px'}}></div><div className="voice-bar" style={{height: '24.2507px'}}></div><div className="voice-bar" style={{height: '37.1336px'}}></div><div className="voice-bar" style={{height: '32.1192px'}}></div><div className="voice-bar" style={{height: '30.6218px'}}></div><div className="voice-bar" style={{height: '37.4633px'}}></div><div className="voice-bar" style={{height: '22.4427px'}}></div><div className="voice-bar" style={{height: '39.3246px'}}></div><div className="voice-bar" style={{height: '24.9545px'}}></div><div className="voice-bar" style={{height: '39.4142px'}}></div><div className="voice-bar" style={{height: '25.2821px'}}></div><div className="voice-bar" style={{height: '32.8397px'}}></div><div className="voice-bar" style={{height: '31.6773px'}}></div><div className="voice-bar" style={{height: '34.2549px'}}></div><div className="voice-bar" style={{height: '36.0894px'}}></div><div className="voice-bar" style={{height: '32.1017px'}}></div><div className="voice-bar" style={{height: '31.197px'}}></div><div className="voice-bar" style={{height: '37.5766px'}}></div><div className="voice-bar" style={{height: '21.7834px'}}></div><div className="voice-bar" style={{height: '25.1879px'}}></div><div className="voice-bar" style={{height: '20.2444px'}}></div><div className="voice-bar" style={{height: '26.4699px'}}></div><div className="voice-bar" style={{height: '22.3292px'}}></div><div className="voice-bar" style={{height: '35.5471px'}}></div><div className="voice-bar" style={{height: '21.5303px'}}></div></div></div><div className="voice-transcript" id="voiceTranscript"></div><div className="voice-progress-container"><div className="voice-progress-bar" id="voiceProgressBar"><div className="voice-progress-fill" id="voiceProgressFill"></div></div><div className="voice-time-display"><span id="voiceCurrentTime">0:00</span><span id="voiceDuration">4:35</span></div></div><div className="voice-footer"><div className="voice-meta"><svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg><span>Duration: <span id="voiceCallDuration">4:35</span></span></div><button className="voice-button" id="voicePlayBtn"><svg fill="none" height="14" id="voicePlayIcon" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg><span id="voicePlayLabel">Play</span></button></div></div><audio id="voiceAudio" preload="auto" src="blob:https://www.aura.build/0e468740-ffcb-468e-93da-d70eb3f1a04e"></audio></div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden pt-8 pb-8 border-black/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
<div className="text-xs uppercase tracking-[0.18em] font-sans text-black/60">Trusted by</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/60 backdrop-blur-sm ring-1 text-xs font-medium tracking-tight font-sans ring-black/10 shadow-sm">
                    BLUME</div>
<div className="grid place-items-center text-xs font-medium tracking-tight w-24 h-8 ring-1 rounded-md ring-black/10 bg-white/60 backdrop-blur-sm shadow-sm" style={{}}>VITA+</div>
<div className="grid place-items-center text-xs font-medium tracking-tight w-24 h-8 ring-1 rounded-md ring-black/10 bg-white/60 backdrop-blur-sm shadow-sm" style={{}}>Zero Nasties</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/60 backdrop-blur-sm ring-1 text-xs font-medium tracking-tight font-sans ring-black/10 shadow-sm">
                    NEST</div>
<div className="grid place-items-center text-xs font-medium tracking-tight w-24 h-8 ring-1 rounded-md ring-black/10 bg-white/60 backdrop-blur-sm shadow-sm" style={{}}>BuzzMall</div>
</div>
</div>
</section>

<section className="sm:py-20 overflow-hidden pt-14 pb-14" id="features">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight">Does everything for you</h2>
<p className="mt-3 font-sans text-black/70">Covers the end‑to‑end customer lifecycle.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-lg border p-5 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="flex gap-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Converts carts</div>
</div>
<p className="text-sm mt-3 font-sans text-black/70">Understands reasons, objections &amp; answers them
                        empathetically.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Confirms orders</div>
</div>
<p className="text-sm mt-3 font-sans text-black/70">Qualifies customers before shipping for maximum delivery rates.
                    </p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="flex gap-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Takes action</div>
</div>
<p className="text-sm text-black/70 mt-3" style={{}}>Automates repetitive tasks — places or cancels orders, sends WhatsApp messages, &amp; adds informative tags + notes to each order.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17h4V5H2v12h3"></path>
<path d="M14 17h2"></path>
<path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
<path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
<path d="M14 7h3l3 3v7h-3"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Converts NDRs</div>
</div>
<p className="text-sm mt-3 font-sans text-black/70">Don't let NDR happen! Alert customers on the day of delivery or
                        convince them to buy with a coupon.</p>
</div>
<div className="hover:bg-white/80 transition border rounded-lg pt-5 pr-5 pb-5 pl-5 backdrop-blur-md hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div className="flex gap-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="ticket-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M9 9h.01"></path><path d="m15 9-6 6"></path><path d="M15 15h.01"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Bargains &amp; offers discounts</div>
</div>
<p className="text-sm mt-3 font-sans text-black/70">Our AI bargains &amp; starts with the lowest permissible
                        discount to convert.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm bg-white/70 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Before &amp; after‑sale support</div>
</div>
<p className="text-sm mt-3 font-sans text-black/70">Answers 95% of queries and offers empathetic support on edge
                        cases.</p>
</div>
</div>
</div>
</section>

<section className="sm:pb-20 overflow-hidden pt-0 pb-14">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight pb-6">Why Mukt Agents?</h2>
<div className="sm:p-6 bg-white/60 border-black/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="flex bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="w-[26px] h-[26px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '26px', height: '26px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 6v6l3 3"></path>
</svg>
</div>
<div className="text-sm text-black/80 items-center justify-center">Works 7 days a week — 24 hrs</div>
</div>
<div className="flex gap-3 bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="w-[28px] h-[28px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="text-sm text-black/80 items-center">Adds personal touch automatically — pre‑fetches context before every call</div>
</div>
<div className="flex gap-3 bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="w-[26px] h-[26px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '26px', height: '26px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path className="" d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="text-sm text-black/80 items-center justify-center">Zero hallucinations — hands off to your human agents when unsure</div>
</div>
<div className="flex gap-3 bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 6 6"></path>
<path d="m4 14 6-6 2-3"></path>
<path d="M2 5h12"></path>
<path d="M7 2v3"></path>
<path className="" d="M22 22l-5-10-5 10"></path>
<path d="M14 18h6"></path>
</svg>
</div>
<div className="text-sm text-black/80 items-center justify-center">Speaks Hinglish, the way India actually speaks</div>
</div><div className="flex bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 6 6"></path>
<path d="m4 14 6-6 2-3"></path>
<path d="M2 5h12"></path>
<path d="M7 2v3"></path>
<path className="" d="M22 22l-5-10-5 10"></path>
<path d="M14 18h6"></path>
</svg>
</div>
<div className="text-sm text-black/80 items-center justify-center">Automatic follow-ups - your agent might forget but mukt doesn't</div>
</div><div className="flex bg-white/70 border-black/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/80 ring-black/10">
<svg className="" data-icon-replaced="true" data-lucide="chart-area" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<path d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z">
</path>
</svg>
</div>
<div className="text-sm text-black/80">Agent analytics — Insights into each calls at scale</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 overflow-hidden border-black/10 border-t pt-14 pb-14" id="pipeline">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight">How it works</h2>
<p className="text-black/70 mt-3">Indic AI orchestrates speech, understanding and actions in a tight loop.</p>
</div>
<div className="mt-8 grid lg:grid-cols-4 gap-4">
<div className="rounded-lg border p-5 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm flex-shrink-0 bg-white/70 ring-black/10">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<rect height="13" rx="3" width="6" x="9" y="2"></rect>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Capture</div>
</div>
<p className="text-sm mt-3 text-black/70">Telephony and HD WhatsApp calls with noise reduction and faulty speech detection.</p>
</div>
<div className="rounded-lg border p-5 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm flex-shrink-0 bg-white/70 ring-black/10">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18V5"></path>
<path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
<path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
<path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
<path d="M18 18a4 4 0 0 0 2-7.464"></path>
<path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
<path d="M6 18a4 4 0 0 1-2-7.464"></path>
<path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Understand</div>
</div>
<p className="text-sm mt-3 text-black/70">ASR + NLU tuned for Indic code‑switching and the e‑commerce domain.</p>
</div>
<div className="rounded-lg border p-5 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm flex-shrink-0 bg-white/70 ring-black/10">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect className="" height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Decide</div>
</div>
<p className="text-sm mt-3 text-black/70">Context + policy + notes + intent tools: inventory, orders, payments, coupons, fulfillment, WhatsApp.</p>
</div>
<div className="rounded-lg border p-5 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur-sm flex-shrink-0 bg-white/70 ring-black/10">
<svg className="h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
<path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path>
<path d="M8 6v8"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans">Speak</div>
</div>
<p className="text-sm mt-3 text-black/70">7+ state‑of‑the‑art neural voices designed for India.</p>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="bg-white/60 border-black/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="text-3xl font-semibold tracking-tight">65%+</div>
<div className="text-sm mt-1 text-black/60">Connection rates</div>
</div><div className="bg-white/60 border-black/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="text-3xl font-semibold tracking-tight">38%</div>
<div className="text-sm text-black/60 mt-1">Avg. Recovery on carts</div>
</div>
<div className="bg-white/60 border-black/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="text-3xl font-semibold tracking-tight">14%</div>
<div className="text-sm mt-1 text-black/60">Fewer returns</div>
</div><div className="bg-white/60 border-black/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="text-3xl font-semibold tracking-tight">12%</div>
<div className="text-sm text-black/60 mt-1" style={{}}>Extra delivery rate</div>
</div><div className="bg-white/60 border-black/10 border rounded-lg pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-md">
<div className="text-3xl font-semibold tracking-tight" style={{}}>5-15%</div>
<div className="text-sm text-black/60 mt-1" style={{}}>Extra revenue with same volume</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14 overflow-hidden" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight">Connect to your stack</h2>
<p className="mt-3 text-black/70"></p>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur-sm bg-white/60 ring-black/10 shadow-sm">Webhooks</div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur-sm bg-white/60 ring-black/10 shadow-sm">API</div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur-sm bg-white/60 ring-black/10 shadow-sm">No‑code</div>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="flex gap-3 hover:bg-white/80 transition h-20 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div className="">
<div className="text-sm font-medium tracking-tight">Storefronts</div>
<div className="text-xs text-black/60">Shopify, WooCommerce, Magento</div>
</div>
</div>
<div className="flex gap-3 hover:bg-white/80 transition h-20 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div className="">
<div className="text-sm font-medium tracking-tight">Whatsapp</div>
<div className="text-xs text-black/60">Notifications, follow-ups</div>
</div>
</div>
<div className="flex gap-3 hover:bg-white/80 transition h-20 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div className="">
<div className="text-sm font-medium tracking-tight">Logistics</div>
<div className="text-xs text-black/60">Shiprocket, Nimbus, Goswift</div>
</div>
</div>
<div className="flex gap-3 hover:bg-white/80 transition h-20 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div>
<div className="text-sm font-medium tracking-tight">Telephony</div>
<div className="text-xs text-black/60">Exotel, Twilio, Kaleyra</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div className="">
<div className="text-sm font-medium tracking-tight">Payment links</div>
<div className="text-xs text-black/60">Razorpay, Cashfree</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div>
<div className="text-sm font-medium tracking-tight">Email</div>
<div className="text-xs text-black/60">Klaviyo, brevo</div>
</div>
</div>
<div className="flex gap-3 hover:bg-white/80 transition h-20 border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md items-center hover:border-black/15 bg-white/60 border-black/10 shadow-sm hover:shadow-md">
<div className="">
<div className="text-sm font-medium tracking-tight">Fast checkouts</div>
<div className="text-xs text-black/60">Shiprocket, GoKwik etc</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/80 transition backdrop-blur-md border-black/10 bg-white/60 hover:border-black/15 shadow-sm hover:shadow-md">
<div>
<div className="text-sm font-medium tracking-tight">Automations</div>
<div className="text-xs text-black/60">Zapier, Make.com</div>
</div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 backdrop-blur-md gap-3 border-black/10 bg-white/60 shadow-sm">
<p className="text-sm text-black/70">Need a custom connector? Our team ships new integrations in days, not months.</p>
<a className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition whitespace-nowrap border-black/10 bg-white/70 hover:bg-white backdrop-blur-sm shadow-sm" href="#">
                    Request integration
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="sm:py-20 border-t pt-14 pb-14 overflow-hidden border-black/10" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight">Simple, usage‑based pricing</h2>
<p className="mt-3 text-black/70">Start free. Scale as you go.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">

<div className="rounded-xl border p-6 backdrop-blur-md transition border-black/10 bg-white/60 hover:border-black/20 shadow-sm hover:shadow-md">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Test Drive</h3>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">Free</span>
<span className="text-xs text-black/60">up to 60 calls</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-black/80">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-orange-600/80"></span>1 neural voice</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-orange-600/80"></span>Basic transcripts</li><li className="flex gap-2 gap-x-2 gap-y-2 items-center" style={{}}><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-orange-600/80"></span>White Glove Onboarding</li>
</ul>
<a className="inline-flex items-center justify-center transition text-sm font-medium w-full ring-1 rounded-md mt-6 pt-2 pr-4 pb-2 pl-4 hover:bg-black/90 text-white bg-black ring-black/10" href="https://calendly.com/mihirvt">Book Intro</a>
</div>

<div className="relative rounded-xl border bg-gradient-to-b p-6 backdrop-blur-md transition ring-1 border-black/10 from-white/70 to-white/60 hover:border-black/20 ring-black/10 shadow-md hover:shadow-lg">
<div className="absolute -top-3 right-4 rounded-full text-[11px] px-2 py-0.5 font-semibold ring-1 bg-green-600 text-white ring-green-700/50 shadow-sm">Most popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Custom</h3>
<span className="rounded-full px-2 py-0.5 text-[11px] ring-1 bg-white/70 ring-black/15 backdrop-blur-sm">Teams</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold"></span>
<span className="text-xs text-black/60" style={{}}>Pay only for connected calls</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-black/80">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-amber-600/80"></span>All Starter +</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-amber-600/80"></span>Multiple voices</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-amber-600/80"></span>2 Tool Calling Support</li><li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-amber-600/80"></span>Detailed Analytics + Voice Recordings</li>
</ul>
<a className="inline-flex items-center justify-center transition text-sm font-semibold w-full ring-1 rounded-md mt-6 pt-2 pr-4 pb-2 pl-4 hover:bg-black/90 text-white bg-black ring-black/10" href="https://calendly.com/mihirvt">Book Intro</a>
</div>

<div className="rounded-xl border p-6 backdrop-blur-md transition border-black/10 bg-white/60 hover:border-black/20 shadow-sm hover:shadow-md">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Scale</h3>
<span className="rounded-full px-2 py-0.5 text-[11px] ring-1 bg-white/70 ring-black/15 backdrop-blur-sm">Custom</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold">Talk to us</span>
</div>
<ul className="text-sm mt-4 space-y-2 text-black/80">
<li className="flex gap-2 items-center"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-yellow-600/80"></span>Premium Neural Voices</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center"><span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-yellow-600/80"></span>Priority Call Support</li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-yellow-600/80"></span>Unlimited Tool Calling</li><li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-yellow-600/80"></span>Custom Integrations
</li><li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-yellow-600/80"></span>Tailored workflows
</li>
</ul>
<a className="inline-flex items-center justify-center transition text-sm w-full border rounded-md mt-6 pt-2 pr-4 pb-2 pl-4 hover:bg-white bg-white/70 border-black/15 backdrop-blur-sm shadow-sm" href="https://calendly.com/mihirvt">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14 border-t overflow-hidden border-black/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
</div>
<div className="mt-6 space-y-3">
<details className="group rounded-lg border p-4 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                        How fast is the voice response?
                        <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 flex-shrink-0 bg-white/70 ring-black/15 backdrop-blur-sm">+</span>
</summary>
<p className="mt-3 text-sm text-black/70">Median end‑to‑end latency is under 300ms with barge‑in support and crosstalk handling.</p>
</details>
<details className="group border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md bg-white/60 border-black/10 shadow-sm">
<summary className="flex cursor-pointer list-none text-sm font-medium items-center justify-between">
                        How does onboarding works?
                        <span className="text-[11px] transition group-open:rotate-45 rounded-md ring-1 ml-4 pt-0.5 pr-2 pb-0.5 pl-2 flex-shrink-0 bg-white/70 ring-black/15 backdrop-blur-sm">+</span>
</summary>
<p className="mt-3 text-sm text-black/70">First, we hop on a quick call to get your requirements. You hand over your knowledge base, and within 24 hours your AI agent is live (unless you've got special requests). We test with a few users for a week, fine-tune, and then go full-scale.</p>
</details>
<details className="group rounded-lg border p-4 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                        Can it speak multiple languages?
                        <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 flex-shrink-0 bg-white/70 ring-black/15 backdrop-blur-sm">+</span>
</summary>
<p className="mt-3 text-sm text-black/70">Yes. We support English, Hindi and natural Hinglish out of the box. More Indic languages on request.</p>
</details>
<details className="group rounded-lg border p-4 backdrop-blur-md border-black/10 bg-white/60 shadow-sm">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
                        How do you ensure accuracy and safety?
                        <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 flex-shrink-0 bg-white/70 ring-black/15 backdrop-blur-sm">+</span>
</summary>
<p className="mt-3 text-sm text-black/70">Domain‑tuned ASR + policies + tool guards. When uncertain, the agent escalates to a human seamlessly.</p>
</details>
<details className="group border rounded-lg pt-4 pr-4 pb-4 pl-4 backdrop-blur-md bg-white/60 border-black/10 shadow-sm">
<summary className="flex cursor-pointer list-none text-sm font-medium items-center justify-between">
                        Do you integrate with my stack?
                        <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 flex-shrink-0 bg-white/70 ring-black/15 backdrop-blur-sm">+</span>
</summary>
<p className="mt-3 text-sm text-black/70">Most likely yes. We offer ready connectors and fast custom builds via API and webhooks.</p>
</details>
</div>
</div>
</section>

<section className="relative pt-10 pb-14 sm:py-20 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-amber-500/10 to-yellow-500/10 p-6 sm:p-8 backdrop-blur-md border-black/10 via-white/60 shadow-lg">
<div className="grid items-center gap-6 sm:grid-cols-2">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to 10x productivity &amp; profits?</h3>
<p className="text-black/70 mt-3">Get started in 10 mins.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center gap-2 transition text-sm border rounded-md pt-2 pr-4 pb-2 pl-4 hover:bg-white bg-white/70 border-black/15 backdrop-blur-sm shadow-sm" href="https://calendly.com/mihirvt">Book a demo</a>
</div>
</div>
<div className="relative">
<div className="pointer-events-none absolute -inset-6 blur-3xl bg-[radial-gradient(400px_120px_at_60%_0%,rgba(255,200,100,0.15),transparent)]"></div>
<div className="rounded-lg border p-4 border-black/10 bg-white/60 backdrop-blur-md shadow-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 flex-shrink-0 bg-white/70 ring-black/10">
<svg className="w-[30px] h-[30px]" data-icon-replaced="true" data-lucide="heart" fill="none" height="34" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '30px', height: '30px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="34" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
</svg>
</div>
<div className="">
<div className="text-lg font-medium">30,000 +</div>
<div className="text-xs text-black/60" style={{}}>Average Calls a day</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded bg-black/10">
<div className="h-1.5 rounded bg-orange-600/80" style={{width: '82%'}}></div>
</div>
<p className="text-xs mt-3 text-black/60" style={{}}>Across phone + WhatsApp with real‑time barge‑in.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t overflow-hidden border-black/10 bg-white/40 backdrop-blur-sm">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<div className="flex gap-2 logo-wrapper gap-x-2 gap-y-2 items-center">
<div className="icon-wrapper">
<div className="explosion-center"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
<div className="particle"></div>
</div>
<div className="brand-name">
<div className="brand-primary text-3xl font-medium font-merriweather">muktaṁ</div>
<div className="brand-suffix text-lg mx-1">ai</div>
</div>
</div>
<p className="text-sm text-black/60 mt-3" style={{}}>Give founder touch at scale.</p>
</div>
<div className="">
<div className="text-sm font-semibold">Product</div>
<ul className="mt-3 space-y-2 text-sm text-black/70">
<li className=""><a className="transition hover:text-black" href="#features">Features</a></li>
<li className=""><a className="transition hover:text-black" href="#pipeline">How it works</a></li>
<li className=""><a className="transition hover:text-black" href="#integrations">Integrations</a></li>
<li className=""><a className="transition hover:text-black" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-semibold">Company</div>
<ul className="mt-3 space-y-2 text-sm text-black/70">
<li className=""><a className="transition hover:text-black" href="#">About</a></li>
<li className=""><a className="transition hover:text-black" href="#">Careers</a></li>
<li className=""><a className="transition hover:text-black" href="#">Press</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-semibold">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-black/70">
<li className=""><a <a="" className="transition hover:text-black" href="/tel:+919157099561">Call +919157099561</a></li>
<li className=""><a className="transition hover:text-black" href="#">X/Twitter</a></li>
<li className=""><a className="transition hover:text-black" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row border-black/10">
<p className="text-xs text-black/50">© <span id="year">2025</span> Indic AI. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-black/60">
<a className="transition hover:text-black" href="#">Terms</a>
<a className="transition hover:text-black" href="#">Privacy</a>
<a className="transition hover:text-black" href="#">Security</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
