import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        ! function() {
          if (!window.UnicornStudio) {
            window.UnicornStudio = {
              isInitialized: !1
            };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js", i.onload = function() {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            }, (document.head || document.body).appendChild(i)
          }
        }();
      


      // Util
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

      lucide.createIcons();
    


      const $id = id => document.getElementById(id);
      const status = $id('status');
      const badge = $id('badge');
      const transcript = $id('transcript');
      const barsContainer = $id('bars');
      const audio = $id('audio');
      const playBtn = $id('playBtn');
      const playIcon = $id('playIcon');
      const playLabel = $id('playLabel');
      const progressBar = $id('progressBar');
      const progressFill = $id('progressFill');
      const currentTimeEl = $id('currentTime');
      const durationEl = $id('duration');
      const callDurationEl = $id('callDuration');

      let transcriptData = [];
      let currentIndex = 0;
      let bars = [];
      let rafId;
      let audioContext;
      let analyser;
      let dataArray;
      let audioSource;

      // Create bars
      for (let i = 0; i < 25; i++) {
          const bar = document.createElement('div');
          bar.className = 'bar';
          bar.style.height = (20 + Math.random() * 20) + 'px';
          barsContainer.appendChild(bar);
          bars.push(bar);
      }

      function formatTime(sec) {
          if (!isFinite(sec)) return '0:00';
          const m = Math.floor(sec / 60);
          const s = Math.floor(sec % 60);
          return `${m}:${s.toString().padStart(2, '0')}`;
      }

      function parseTime(ts) {
          const parts = ts.split(' - ')[0].split(':');
          const mins = parseInt(parts[0]) || 0;
          const secs = parseInt(parts[1]) || 0;
          return mins * 60 + secs;
      }

      function escapeHtml(s) {
          const div = document.createElement('div');
          div.textContent = s;
          return div.innerHTML;
      }

      function addMessage(role, text, time) {
          const msg = document.createElement('div');
          msg.className = `message ${role}`;
          msg.innerHTML = `
              <div class="message-content">
                  <span class="message-label">${role === 'agent' ? 'Agent:' : 'Customer:'}</span>
                  ${escapeHtml(text)}
                  ${time ? `<div class="message-time">${time.split(' - ')[0]}</div>` : ''}
              </div>
          `;
          transcript.appendChild(msg);
          msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      function animateBars() {
          if (!audio.paused && analyser && dataArray) {
              // Get real audio frequency data
              analyser.getByteFrequencyData(dataArray);

              bars.forEach((bar, i) => {
                  const dataIndex = Math.floor(i * dataArray.length / bars.length);
                  const value = dataArray[dataIndex] / 255;
                  const h = 8 + value * 40;
                  bar.style.height = h + 'px';
                  bar.style.opacity = 0.3 + value * 0.5;
              });
          } else if (!audio.paused) {
              // Fallback animation
              const t = performance.now() / 200;
              bars.forEach((bar, i) => {
                  const v = (Math.sin(t + i * 0.5) + 1) / 2;
                  const h = 8 + v * 36;
                  bar.style.height = h + 'px';
                  bar.style.opacity = 0.3 + v * 0.5;
              });
          }
          rafId = requestAnimationFrame(animateBars);
      }

      function updateTranscript() {
          const t = audio.currentTime;
          while (currentIndex < transcriptData.length && transcriptData[currentIndex].time <= t) {
              const m = transcriptData[currentIndex];
              addMessage(m.role, m.text, m.timestamp);
              currentIndex++;
          }
      }

      let audioLoaded = false;
      let transcriptLoaded = false;

      function checkReady() {
          if (audioLoaded && transcriptLoaded) {
              status.textContent = 'Ready to play';
              playBtn.disabled = false;
          }
      }

      async function loadAudio() {
          try {
              status.textContent = 'Loading audio...';
              const res = await fetch('https://n8n.srv1066725.hstgr.cloud/webhook/265d38af-0407-41d4-b467-55d7da7731f0');
              if (!res.ok) throw new Error('Audio API error');
              const blob = await res.blob();
              audio.src = URL.createObjectURL(blob);

              audio.onloadeddata = () => {
                  audioLoaded = true;
                  console.log('Audio loaded');
                  checkReady();
              };

              audio.load();
          } catch (err) {
              status.textContent = 'Error loading audio';
              console.error('Audio error:', err);
              transcript.innerHTML = `<div class="error">Failed to load audio: ${err.message}</div>`;
          }
      }

      async function loadTranscript() {
          try {
              const res = await fetch('https://n8n.srv1066725.hstgr.cloud/webhook/trans');
              if (!res.ok) throw new Error('Transcript API error');
              const text = await res.text();
              const lines = text.split('\n').filter(l => l.trim());

              let speaker = '', time = '';
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
                      });
                  }
              }

              transcript.innerHTML = '';
              transcriptLoaded = true;
              console.log(`Loaded ${transcriptData.length} messages`);
              checkReady();
          } catch (err) {
              status.textContent = 'Error loading transcript';
              console.error('Transcript error:', err);
              transcript.innerHTML = `<div class="error">Failed to load transcript: ${err.message}</div>`;
          }
      }

      playBtn.onclick = () => {
          audio.paused ? audio.play() : audio.pause();
      };

      audio.onplay = () => {
          playLabel.textContent = 'Pause';
          playIcon.innerHTML = '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>';
          badge.classList.remove('hidden');
          status.textContent = 'Playing...';

          // Initialize audio context for visualization
          if (!audioContext) {
              try {
                  audioContext = new (window.AudioContext || window.webkitAudioContext)();
                  analyser = audioContext.createAnalyser();
                  analyser.fftSize = 64;
                  dataArray = new Uint8Array(analyser.frequencyBinCount);

                  audioSource = audioContext.createMediaElementSource(audio);
                  audioSource.connect(analyser);
                  analyser.connect(audioContext.destination);
              } catch (e) {
                  console.warn('Audio context not available');
              }
          }

          animateBars();
      };

      audio.onpause = () => {
          playLabel.textContent = 'Play';
          playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
          badge.classList.add('hidden');
          status.textContent = 'Paused';
      };

      audio.onended = () => {
          playLabel.textContent = 'Play';
          playIcon.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"></polygon>';
          badge.classList.add('hidden');
          status.textContent = 'Completed';
      };

      audio.ontimeupdate = () => {
          const pct = (audio.currentTime / audio.duration) * 100;
          progressFill.style.width = pct + '%';
          currentTimeEl.textContent = formatTime(audio.currentTime);
          updateTranscript();
      };

      audio.onloadedmetadata = () => {
          durationEl.textContent = formatTime(audio.duration);
          callDurationEl.textContent = formatTime(audio.duration);
      };

      progressBar.onclick = e => {
          const rect = progressBar.getBoundingClientRect();
          const pos = (e.clientX - rect.left) / rect.width;
          audio.currentTime = pos * audio.duration;

          transcript.innerHTML = '';
          currentIndex = 0;
          for (let i = 0; i < transcriptData.length; i++) {
              if (transcriptData[i].time <= audio.currentTime) {
                  addMessage(transcriptData[i].role, transcriptData[i].text, transcriptData[i].timestamp);
                  currentIndex = i + 1;
              } else break;
          }
      };

      loadAudio();
      loadTranscript();
      animateBars();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full -z-10 h-screen hidden md:block" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>

</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(47,97,255,0.18),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(0,255,200,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_20%,rgba(255,255,255,0.05),transparent_60%)]"></div>
</div>

<header className="sticky z-30 supports-[backdrop-filter]:bg-black/30 bg-black/20 border-white/10 border-b top-0 backdrop-blur">
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
<div className="brand-primary">muktaṁ</div>
<div className="brand-suffix">ai</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition font-sans text-white/70 hover:text-white" href="#features" style={{}}>
              Features
            </a>
<a className="text-sm transition font-sans text-white/70 hover:text-white" href="#pipeline" style={{}}>
              How it works
            </a>
<a className="text-sm transition font-sans text-white/70 hover:text-white" href="#integrations" style={{}}>
              Integrations
            </a>
<a className="text-sm transition font-sans text-white/70 hover:text-white" href="#pricing" style={{}}>
              Pricing
            </a>
<a className="text-sm transition font-sans text-white/70 hover:text-white" href="#faq" style={{}}>
              FAQ
            </a>
</nav>
<div className="hidden md:flex gap-3 transition-opacity duration-300 items-center" id="navCtas">
<a className="px-3.5 py-2 rounded-md text-sm ring-1 transition font-sans text-white/80 hover:text-white ring-white/10 hover:ring-white/20" href="#" style={{}}>
              Book demo
            </a>
<a className="px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 transition font-sans bg-white text-black hover:bg-white/90 ring-white/10" href="#" style={{}}>
              Launch Studio
            </a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 transition ring-white/10 hover:ring-white/20 hover:bg-white/5" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="px-4 py-4 flex flex-col gap-2">
<a className="px-3 py-2 rounded-md text-sm font-sans text-white/80 hover:text-white hover:bg-white/5" href="#features" style={{}}>
              Features
            </a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-white/80 hover:text-white hover:bg-white/5" href="#pipeline" style={{}}>
              How it works
            </a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-white/80 hover:text-white hover:bg-white/5" href="#integrations" style={{}}>
              Integrations
            </a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-white/80 hover:text-white hover:bg-white/5" href="#pricing" style={{}}>
              Pricing
            </a>
<a className="px-3 py-2 rounded-md text-sm font-sans text-white/80 hover:text-white hover:bg-white/5" href="#faq" style={{}}>
              FAQ
            </a>
<div className="mt-2 flex gap-2">
<a className="flex-1 px-3.5 py-2 rounded-md text-sm ring-1 text-center font-sans text-white/80 hover:text-white ring-white/10 hover:ring-white/20" href="#" style={{}}>
                Book demo
              </a>
<a className="flex-1 px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 text-center font-sans bg-white text-black hover:bg-white/90 ring-white/10" href="#" style={{}}>
                Launch Studio
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="sm:px-6 lg:px-8 sm:pt-24 sm:pb-16 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 text-xs mb-5 backdrop-blur ring-white/10 bg-white/5 text-white/70">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.82 6.5L12 2.38 14.18 6.5 18.5 8.68 14.18 10.86 12 15.01 9.82 10.86 5.5 8.68 9.82 6.5z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<path d="M4 20v-4"></path>
<path d="M2 18h4"></path>
</svg>
<span className="font-sans" style={{}}>
                Voice agents built for D2C brands
              </span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.08] text-3xl font-semibold tracking-tight font-bricolage">
              Automate founder touch at scale
            </h1>
<p className="sm:text-lg text-base mt-4 text-white/70"></p>
<p className="">that talk, convert &amp; care like a founder.</p>
<p></p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 transition text-sm font-semibold tracking-tight ring-1 rounded-md pt-2.5 pr-4 pb-2.5 pl-4 font-sans hover:bg-white/90 text-black bg-white ring-white/10" href="#" style={{}}>
                Explore use cases
                <svg className="lucide lucide-play-circle h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10,8 16,12 10,16"></polygon>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm ring-1 transition font-sans text-white/85 hover:text-white ring-white/10 hover:ring-white/20 hover:bg-white/5" href="#" style={{}}>
<svg className="lucide lucide-calendar h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                Book a demo
              </a>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 object-cover ring-black/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
<p className="sm:text-sm text-xs font-sans text-white/60" style={{}}>
                Trusted by scaled &amp; growing D2C teams across commerce.
              </p>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<div className="card">

<div className="header">
<div className="header-left">
<div className="icon-box">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<rect height="13" rx="3" width="6" x="9" y="2"></rect>
</svg>
</div>
<div className="header-info">
<h3>Call Recording Playback</h3>
<p id="status">Loading...</p>
</div>
</div>
<span className="badge hidden" id="badge">Playing</span>
</div>

<div className="waveform">
<div className="bars" id="bars"></div>
</div>

<div className="transcript" id="transcript">
<div className="placeholder">
                    Transcript will appear here as the call plays...
                  </div>
</div>

<div className="progress-container">
<div className="progress-bar" id="progressBar">
<div className="progress-fill" id="progressFill"></div>
</div>
<div className="time-display">
<span id="currentTime">0:00</span>
<span id="duration">0:00</span>
</div>
</div>

<div className="footer">
<div className="meta">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span id="metaInfo">
                      Duration:
                      <span id="callDuration">—</span>
</span>
</div>
<button className="button" disabled="" id="playBtn">
<svg fill="none" height="16" id="playIcon" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
<span id="playLabel">Play</span>
</button>
</div>
</div>
<audio id="audio" preload="auto"></audio>

<div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-20 blur-2xl bg-[radial-gradient(400px_80px_at_50%_0%,rgba(255,255,255,0.10),transparent)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-y border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
<div className="text-xs uppercase tracking-[0.18em] font-sans text-white/60" style={{}}>
            Trusted by
          </div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight font-sans ring-white/10" style={{}}>
            BLUME
          </div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight font-sans ring-white/10" style={{}}>
            VITA+
          </div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight font-sans ring-white/10" style={{}}>
            URBN
          </div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight font-sans ring-white/10" style={{}}>
            NEST
          </div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight font-sans ring-white/10" style={{}}>
            KIND
          </div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14" id="features">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl tracking-tight font-bricolage font-semibold" style={{}}>
            Does everything for you
          </h2>
<p className="mt-3 font-sans text-white/70" style={{}}>
            Covers the end‑to‑end customer lifecycle.
          </p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-audio-lines h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10v4"></path>
<path d="M6 6v12"></path>
<path d="M10 3v18"></path>
<path d="M14 8v8"></path>
<path d="M18 5v14"></path>
<path d="M22 10v4"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Converts carts
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Understands reasons, objections &amp; answers them empathetically.
            </p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-globe h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Confirms orders
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Qualifies customers before shipping for maximum delivery rates.
            </p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-shopping-bag h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
<line x1="3" x2="21" y1="6" y2="6"></line>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Takes action
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Automates repetitive tasks — places or cancels orders, sends
              WhatsApp messages, and adds informative tags &amp; notes to each
              order.
            </p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">

<svg className="lucide lucide-truck h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
<path d="M15 18H9"></path>
<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
<circle cx="17" cy="18" r="2"></circle>
<circle cx="7" cy="18" r="2"></circle>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Converts NDRs
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Don't let NDR happen! Alert customers on the day of delivery or
              convince them to buy with a coupon.
            </p>
</div>
<div className="hover:bg-white/[0.06] transition border rounded-lg pt-5 pr-5 pb-5 pl-5 backdrop-blur hover:border-white/15 bg-white/5 border-white/10">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">

<svg className="lucide lucide-badge-percent h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.78l8.74 8.74a4 4 0 0 1-4.78 4.78L3.85 8.62z"></path>
<path d="M9.7 14.3c.3.3.7.3 1 0l4-4c.3-.3.3-.7 0-1"></path>
<path d="m14.3 9.7c-.3-.3-.7-.3-1 0l-4 4c-.3.3-.3.7 0 1"></path>
<path d="M12 21.5a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19z"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Bargains &amp; offers discounts
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Our AI bargains &amp; starts with the lowest permissible discount
              to convert.
            </p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">

<svg className="lucide lucide-life-buoy h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<line x1="4.93" x2="9.17" y1="4.93" y2="9.17"></line>
<line x1="14.83" x2="19.07" y1="4.93" y2="9.17"></line>
<line x1="14.83" x2="19.07" y1="14.83" y2="19.07"></line>
<line x1="4.93" x2="9.17" y1="14.83" y2="19.07"></line>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Before &amp; after‑sale support
              </div>
</div>
<p className="text-sm mt-3 font-sans text-white/70" style={{}}>
              Answers 95% of queries and offers empathetic support on edge
              cases.
            </p>
</div>
</div>
</div>
</section>

<section className="pt-0 pb-14 sm:pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="rounded-xl border backdrop-blur p-5 sm:p-6 border-white/10 bg-white/5">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-bricolage">
            Why SwarX Agents?
          </h3>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="flex items-start gap-3 rounded-lg border bg-white/[0.04] p-3 border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="text-sm text-white/80">
                Works 7 days a week — never misses a follow‑up
              </div>
</div>
<div className="flex items-start gap-3 rounded-lg border bg-white/[0.04] p-3 border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.82 6.5L12 2.38 14.18 6.5 18.5 8.68 14.18 10.86 12 15.01 9.82 10.86 5.5 8.68 9.82 6.5z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<path d="M4 20v-4"></path>
<path d="M2 18h4"></path>
</svg>
</div>
<div className="text-sm text-white/80">
                Adds personal touch automatically — pre‑fetches context before
                every call
              </div>
</div>
<div className="flex items-start gap-3 rounded-lg border bg-white/[0.04] p-3 border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="text-sm text-white/80">
                Zero hallucinations — hands off to your real agent when unsure
              </div>
</div>
<div className="flex items-start gap-3 rounded-lg border bg-white/[0.04] p-3 border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m5 8 6 6"></path>
<path d="m4 14 6-6 2-3"></path>
<path d="M2 5h12"></path>
<path d="M7 2v3"></path>
<path d="M22 22l-5-10-5 10"></path>
<path d="M14 18h6"></path>
</svg>
</div>
<div className="text-sm text-white/80">
                Speaks Hinglish, the way India actually talks
              </div>
</div>
<div className="flex items-start gap-3 rounded-lg border bg-white/[0.04] p-3 sm:col-span-2 border-white/10">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M7 12h3v-4"></path>
<path d="M12 11h3V8"></path>
<path d="M17 13h3v-2"></path>
</svg>
</div>
<div className="text-sm text-white/80">
                Comprehensive call analytics — refined per‑call insights at
                scale
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 border-t pt-14 pb-14 border-white/10" id="pipeline">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage" style={{}}>
            How it works
          </h2>
<p className="mt-3 font-sans text-white/70" style={{}}>
            Indic AI orchestrates speech, understanding and actions in a tight
            loop.
          </p>
</div>
<div className="mt-8 grid lg:grid-cols-4 gap-4">
<div className="rounded-lg border p-5 backdrop-blur border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-mic h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="23"></line>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Capture
              </div>
</div>
<p className="text-sm mt-3 text-white/70" style={{}}>
              Telephony and HD WhatsApp calls with noise reduction and faulty
              speech detection.
            </p>
</div>
<div className="rounded-lg border p-5 backdrop-blur border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-brain-circuit h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V2.5"></path>
<path d="M12 18v2.5"></path>
<path d="M19.38 7.19a7.5 7.5 0 1 0-14.76 0"></path>
<path d="M15.5 13.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
<path d="M12 13.5V11"></path>
<path d="M12 8.5V7"></path>
<path d="M14.5 11.75h1.75"></path>
<path d="M7.75 11.75H9.5"></path>
<path d="m14.5 15.25-1-1"></path>
<path d="m10.5 15.25-1-1"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Understand
              </div>
</div>
<p className="text-sm mt-3 text-white/70" style={{}}>
              ASR + NLU tuned for Indic code‑switching and the e‑commerce
              domain.
            </p>
</div>
<div className="rounded-lg border p-5 backdrop-blur border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-network h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="16" y="16"></rect>
<rect height="6" rx="1" width="6" x="2" y="16"></rect>
<rect height="6" rx="1" width="6" x="9" y="2"></rect>
<path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path d="M12 12V8"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Decide
              </div>
</div>
<p className="text-sm mt-3 text-white/70" style={{}}>
              Context + policy + notes + intent tools: inventory, orders,
              payments, coupons, fulfillment, WhatsApp.
            </p>
</div>
<div className="rounded-lg border p-5 backdrop-blur border-white/10 bg-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 backdrop-blur bg-white/5 ring-white/10">
<svg className="lucide lucide-volume-2 h-4.5 w-4.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
</svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>
                Speak
              </div>
</div>
<p className="text-sm mt-3 text-white/70" style={{}}>
              7+ state‑of‑the‑art neural voices designed for India.
            </p>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border backdrop-blur p-5 bg-white/5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage" style={{}}>
              38%
            </div>
<div className="text-sm mt-1 font-sans text-white/60" style={{}}>
              Avg. recovery on abandoned carts
            </div>
</div>
<div className="rounded-lg border backdrop-blur p-5 bg-white/5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage">
              61%+
            </div>
<div className="text-sm mt-1 text-white/60" style={{}}>
              Connection rates
            </div>
</div>
<div className="rounded-lg border backdrop-blur p-5 bg-white/5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage" style={{}}>
              12%
            </div>
<div className="text-sm mt-1 text-white/60" style={{}}>Fewer returns</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 gap-x-6 gap-y-6">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage" style={{}}>
              Connect to your stack in minutes
            </h2>
<p className="mt-3 font-sans text-white/70" style={{}}>
              Drop‑in connectors for commerce, messaging, telephony and
              analytics.
            </p>
</div>
<div className="flex items-center gap-2">
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              Webhooks
            </div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              API
            </div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              No‑code
            </div>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              SHOP
            </div>
<div className="">
<div className="text-sm font-medium tracking-tight" style={{}}>
                Shopify
              </div>
<div className="text-xs text-white/60" style={{}}></div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              WC
            </div>
<div className="">
<div className="text-sm font-medium tracking-tight" style={{}}>
                Logistics
              </div>
<div className="text-xs text-white/60" style={{}}></div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition bg-white/ 5 backdrop-blur border-white/10 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              WA
            </div>
<div className="">
<div className="text-sm font-medium tracking-tight" style={{}}>
                WhatsApp
              </div>
<div className="text-xs text-white/60" style={{}}>
                Templates, media, click‑to‑chat
              </div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              TEL
            </div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>
                Telephony
              </div>
<div className="text-xs text-white/60" style={{}}>
                Exotel, Twilio, Kaleyra
              </div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              PAY
            </div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>
                Payments
              </div>
<div className="text-xs text-white/60" style={{}}>
                Razorpay, Cashfree
              </div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              CRM
            </div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>
                CRM/Email
              </div>
<div className="text-xs text-white/60" style={{}}>Klaviyo, HubSpot</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              GA4
            </div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>
                Analytics
              </div>
<div className="text-xs text-white/60" style={{}}>GA4, Mixpanel</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition backdrop-blur border-white/10 bg-white/5 hover:border-white/15">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] font-sans backdrop-blur bg-white/5 ring-white/10" style={{}}>
              ZAP
            </div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>
                Automations
              </div>
<div className="text-xs text-white/60" style={{}}>Zapier, Make.com</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between rounded-lg border p-4 backdrop-blur border-white/10 bg-white/5">
<p className="text-sm text-white/70">
            Need a custom connector? Our team ships new integrations in days,
            not months.
          </p>
<a className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs transition border-white/10 bg-white/10 hover:bg-white/20" href="#">
            Request integration
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>
</div>
</section>

<section className="border-t sm:py-20 pt-14 pb-14 border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage">
            Simple, usage‑based pricing
          </h2>
<p className="mt-3 text-white/70">Start free. Scale as you go.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">

<div className="rounded-xl border p-6 backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Starter</h3>
<span className="rounded-full px-2 py-0.5 text-[11px] ring-1 bg-white/10 ring-white/15">
                Best for trying
              </span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">Free</span>
<span className="text-xs text-white/60">up to 50 calls</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
                1 neural voice
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
                Basic analytics
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>
                Email support
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium ring-1 transition bg-white text-black ring-white/10 hover:bg-white/90" href="#">
              Get started
            </a>
</div>

<div className="relative rounded-xl border bg-gradient-to-b p-6 backdrop-blur transition ring-1 border-white/10 from-white/10 to-white/5 hover:border-white/20 ring-white/10">
<div className="absolute -top-3 right-4 rounded-full text-[11px] px-2 py-0.5 font-semibold ring-1 bg-amber-400 text-black ring-amber-300/50">
              Most popular
            </div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Growth</h3>
<span className="rounded-full px-2 py-0.5 text-[11px] ring-1 bg-white/10 ring-white/15">
                Teams
              </span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">₹4.5</span>
<span className="text-xs text-white/60">per connected minute</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
                All Starter +
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
                Multiple voices
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
                WhatsApp + SMS
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>
                NDR workflows
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-semibold ring-1 transition bg-white text-black ring-white/10 hover:bg-white/90" href="#">
              Start trial
            </a>
</div>

<div className="rounded-xl border p-6 backdrop-blur transition border-white/10 bg-white/5 hover:border-white/20">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Scale</h3>
<span className="rounded-full px-2 py-0.5 text-[11px] ring-1 bg-white/10 ring-white/15">
                Custom
              </span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">
                Talk to us
              </span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>
                Dedicated success manager
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>
                SLA + priority routing
              </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>
                On‑prem options
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border px-4 py-2 text-sm transition border-white/15 bg-white/10 hover:bg-white/20" href="#">
              Contact sales
            </a>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14 border-t border-white/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage">
            Frequently asked questions
          </h2>
</div>
<div className="mt-6 space-y-3">
<details className="group rounded-lg border p-4 backdrop-blur border-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              How fast is the voice response?
              <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 bg-white/10 ring-white/15">
                +
              </span>
</summary>
<p className="mt-3 text-sm text-white/70">
              Median end‑to‑end latency is under 300ms with barge‑in support and
              crosstalk handling.
            </p>
</details>
<details className="group rounded-lg border p-4 backdrop-blur border-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Can it speak multiple languages?
              <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 bg-white/10 ring-white/15">
                +
              </span>
</summary>
<p className="mt-3 text-sm text-white/70">
              Yes. We support English, Hindi and natural Hinglish out of the
              box. More Indic languages on request.
            </p>
</details>
<details className="group rounded-lg border p-4 backdrop-blur border-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              How do you ensure accuracy and safety?
              <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 bg-white/10 ring-white/15">
                +
              </span>
</summary>
<p className="mt-3 text-sm text-white/70">
              Domain‑tuned ASR + policies + tool guards. When uncertain, the
              agent escalates to a human seamlessly.
            </p>
</details>
<details className="group rounded-lg border p-4 backdrop-blur border-white/10 bg-white/5">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Do you integrate with my stack?
              <span className="ml-4 rounded-md px-2 py-0.5 text-[11px] ring-1 transition group-open:rotate-45 bg-white/10 ring-white/15">
                +
              </span>
</summary>
<p className="mt-3 text-sm text-white/70">
              Most likely yes. We offer ready connectors and fast custom builds
              via API and webhooks.
            </p>
</details>
</div>
</div>
</section>

<section className="relative pt-10 pb-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-xl border bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 p-6 sm:p-8 backdrop-blur border-white/10 via-white/5">
<div className="grid items-center gap-6 sm:grid-cols-2">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-bricolage">
                Ready to meet your best agent?
              </h3>
<p className="mt-3 text-white/70">
                Spin up your voice agent, connect WhatsApp, and start closing
                more carts today.
              </p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold ring-1 transition bg-white text-black ring-white/10 hover:bg-white/90" href="#">
                  Launch Studio
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm transition border-white/15 bg-white/10 hover:bg-white/20" href="#">
                  Book a demo
                </a>
</div>
</div>
<div className="relative">
<div className="pointer-events-none absolute -inset-6 blur-3xl bg-[radial-gradient(400px_120px_at_60%_0%,rgba(255,255,255,0.15),transparent)]"></div>
<div className="rounded-lg border p-4 border-white/10 bg-black/30">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="23"></line>
</svg>
</div>
<div>
<div className="text-sm font-medium">Avg. answer time</div>
<div className="text-xs text-white/60">under 300ms</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded bg-white/10">
<div className="h-1.5 rounded bg-emerald-400/80" style={{width: '82%'}}></div>
</div>
<p className="mt-3 text-xs text-white/60">
                  Live across phone + WhatsApp with real‑time barge‑in.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="flex items-center gap-2 logo-wrapper">
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
<div className="brand-primary">muktaṁ</div>
<div className="brand-suffix">ai</div>
</div>
</div>
<p className="mt-3 text-sm text-white/60">
              End‑to‑end voice AI built for D2C commerce in India.
            </p>
</div>
<div>
<div className="text-sm font-semibold">Product</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li>
<a className="transition hover:text-white" href="#features">
                  Features
                </a>
</li>
<li>
<a className="transition hover:text-white" href="#pipeline">
                  How it works
                </a>
</li>
<li>
<a className="transition hover:text-white" href="#integrations">
                  Integrations
                </a>
</li>
<li>
<a className="transition hover:text-white" href="#pricing">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<div className="text-sm font-semibold">Company</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="transition hover:text-white" href="#">About</a></li>
<li>
<a className="transition hover:text-white" href="#">Careers</a>
</li>
<li><a className="transition hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li>
<a className="transition hover:text-white" href="mailto:hello@swarx.ai">
                  hello@swarx.ai
                </a>
</li>
<li>
<a className="transition hover:text-white" href="#">X/Twitter</a>
</li>
<li>
<a className="transition hover:text-white" href="#">LinkedIn</a>
</li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 sm:flex-row border-white/10">
<p className="text-xs text-white/50">
            ©
            <span id="year">2025</span>
            Indic AI. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="transition hover:text-white" href="#">Terms</a>
<a className="transition hover:text-white" href="#">Privacy</a>
<a className="transition hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
