import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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

      // Audio + transcript wiring with graceful fallbacks
      (function voiceDemo() {
        const audioEl = $('#agentAudio');
        const statusEl = $('#agentStatus');
        const listenBtn = $('#listenBtn');
        const listenIcon = $('#listenIcon');
        const listenLabel = $('#listenLabel');
        const liveBadge = $('#liveBadge');
        const transcriptList = $('#transcriptList');
        const latencyMeta = $('#latencyMeta');
        const bars = $$('#voiceBars > div');
        let rafId = null;
        let transcript = [];
        let highlightIdx = -1;

        // Fallbacks (royalty‑free audio + sample transcript)
        const fallbackAudio = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_0b8c7f9e3b.mp3?filename=calm-ambient-110397.mp3';
        const fallbackTranscript = [
          { t: 0.2, role: 'agent', text: 'Hi! I am your SwarX shopping assistant. Is now a good time?' },
          { t: 3.8, role: 'user', text: 'Yes, go ahead.' },
          { t: 5.1, role: 'agent', text: 'I noticed your cart has Vitamin C serum. I can help with a 10% coupon.' },
          { t: 9.7, role: 'user', text: 'Nice. Will it help with dark spots?' },
          { t: 12.1, role: 'agent', text: 'Yes. It is clinically proven for brightening. Shall I place the order with COD?' },
          { t: 16.4, role: 'user', text: 'Yes, please.' },
          { t: 18.3, role: 'agent', text: 'Done! You will receive a WhatsApp confirmation shortly.' }
        ];

        // Randomize latency stats a bit
        function setLatency() {
          const latency = Math.round(240 + Math.random() * 120);
          const asr = (97.8 + Math.random() * 1.2).toFixed(1);
          if (latencyMeta) latencyMeta.textContent = `Latency: ${latency}ms • ASR: ${asr}%`;
        }
        setLatency();

        // Render transcript bubbles
        function renderTranscript(list) {
          transcriptList.innerHTML = '';
          list.forEach((line, idx) => {
            const row = document.createElement('div');
            const mine = line.role === 'agent';
            row.className = [
              'flex', mine ? 'justify-start' : 'justify-end'
            ].join(' ');
            row.innerHTML = `
              <div data-i="${idx}" class="max-w-[85%] text-xs sm:text-sm rounded-md px-3 py-2 ring-1 transition ${
                mine
                  ? 'bg-white/10 ring-white/15 text-white'
                  : 'bg-emerald-400/10 ring-emerald-400/20 text-emerald-100'
              }">
                <span class="opacity-70 mr-2">${mine ? 'Agent:' : 'You:'}</span>${line.text}
              </div>
            `;
            transcriptList.appendChild(row);
          });
        }

        // Highlight current line
        function highlightCurrent(time) {
          if (!transcript.length) return;
          let idx = transcript.length - 1;
          for (let i = 0; i < transcript.length; i++) {
            if (time < transcript[i].t) { idx = Math.max(0, i - 1); break; }
          }
          if (idx !== highlightIdx) {
            // remove old
            if (highlightIdx >= 0) {
              const oldEl = transcriptList.querySelector(`[data-i="${highlightIdx}"]`);
              if (oldEl) oldEl.classList.remove('ring-2','ring-white/60');
            }
            highlightIdx = idx;
            const el = transcriptList.querySelector(`[data-i="${highlightIdx}"]`);
            if (el) {
              el.classList.add('ring-2','ring-white/60');
              // Scroll into view
              el.parentElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }

        // Simple waveform animation based on audio data, fallback to random
        const audioCtx = (window.AudioContext || window.webkitAudioContext) ? new (window.AudioContext || window.webkitAudioContext)() : null;
        let analyser, srcNode, dataArray;

        function setupAnalyser() {
          if (!audioCtx || !audioEl) return;
          try {
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 64;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            srcNode = audioCtx.createMediaElementSource(audioEl);
            srcNode.connect(analyser);
            analyser.connect(audioCtx.destination);
          } catch (e) {
            // No-op, fallback animation will run
          }
        }

        function animateBars() {
          if (!bars.length) return;
          if (analyser && dataArray) {
            analyser.getByteFrequencyData(dataArray);
            for (let i = 0; i < bars.length; i++) {
              const v = dataArray[i % dataArray.length] / 255;
              const h = Math.max(4, Math.min(40, v * 48));
              bars[i].style.height = `${h}px`;
              bars[i].style.opacity = String(0.25 + v * 0.6);
            }
          } else {
            // fallback subtle animation
            const t = performance.now() / 300;
            bars.forEach((b, i) => {
              const v = (Math.sin(t + i * 0.6) + 1) / 2;
              const h = 6 + v * 34;
              b.style.height = `${h}px`;
              b.style.opacity = String(0.3 + v * 0.5);
            });
          }
          rafId = requestAnimationFrame(animateBars);
        }

        // Toggle listen/play
        function setBtnPlaying(isPlaying) {
          if (!listenIcon) return;
          listenLabel.textContent = isPlaying ? 'Pause' : 'Listen';
          listenIcon.setAttribute('data-lucide', isPlaying ? 'pause' : 'headphones');
          listenIcon.innerHTML = isPlaying
            ? '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>'
            : '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path>';
        }

        // Wire audio lifecycle
        function attachAudioHandlers() {
          audioEl.addEventListener('canplay', () => {
            statusEl.textContent = 'Ready';
            listenBtn.disabled = false;
          });
          audioEl.addEventListener('play', () => {
            setBtnPlaying(true);
            statusEl.textContent = 'Playing sample call…';
            liveBadge && liveBadge.classList.remove('invisible');
            if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
            if (!rafId) rafId = requestAnimationFrame(animateBars);
          });
          audioEl.addEventListener('pause', () => {
            setBtnPlaying(false);
            statusEl.textContent = 'Paused';
            liveBadge && liveBadge.classList.add('invisible');
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
          });
          audioEl.addEventListener('timeupdate', () => {
            highlightCurrent(audioEl.currentTime);
          });
          audioEl.addEventListener('ended', () => {
            setBtnPlaying(false);
            statusEl.textContent = 'Finished';
            liveBadge && liveBadge.classList.add('invisible');
            if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
            highlightIdx = -1;
          });

          listenBtn.addEventListener('click', () => {
            const pressed = listenBtn.getAttribute('aria-pressed') === 'true';
            const nowPressed = !pressed;
            listenBtn.setAttribute('aria-pressed', String(nowPressed));
            if (audioEl.paused) audioEl.play().catch(()=>{});
            else audioEl.pause();
          });
        }

        // Fetch resources with fallbacks
        async function loadResources() {
          try {
            // Placeholder remote URLs — replace with real endpoints
            const audioUrl = fallbackAudio; // could be set to your signed URL
            const transcriptUrl = ''; // e.g. '/api/sample-transcript'

            // Audio
            audioEl.src = audioUrl;

            // Transcript
            if (transcriptUrl) {
              const res = await fetch(transcriptUrl, { credentials: 'omit' });
              if (res.ok) {
                const json = await res.json();
                transcript = Array.isArray(json) ? json : fallbackTranscript;
              } else {
                transcript = fallbackTranscript;
              }
            } else {
              transcript = fallbackTranscript;
            }
            renderTranscript(transcript);
          } catch (e) {
            statusEl.textContent = 'Using fallback demo';
            transcript = fallbackTranscript;
            renderTranscript(transcript);
            audioEl.src = fallbackAudio;
          }
        }

        if (audioEl) {
          setupAnalyser();
          attachAudioHandlers();
          loadResources().then(() => {
            // kick off subtle idle animation
            if (!rafId) rafId = requestAnimationFrame(animateBars);
          });
        }
      })();

      // Year in footer
      (function year() {
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <headmeta charset="utf-8" className="">
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Indic AI — End‑to‑End Voice AI for D2C</title>
<meta content="Indic AI helps D2C brands launch end-to-end AI voice agents for sales, support and retention across channels." name="description"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet"/>

<style>
.invisible { visibility: hidden !important; }
</style>
<meta content="font-jakarta" name="disabled-font-classes"/>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style>

<div className="aura-background-component top-0 w-full -z-10 h-screen fixed"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(47,97,255,0.18),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(0,255,200,0.08),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_90%_20%,rgba(255,255,255,0.05),transparent_60%)]"></div>
</div>

<header className="sticky z-30 supports-[backdrop-filter]:bg-black/30 border-b top-0 backdrop-blur bg-black/20 border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="grid h-8 w-8 place-items-center rounded-md ring-1 group-hover:ring-white/20 transition bg-white/5 ring-white/10">
<span className="text-[11px] font-semibold tracking-[0.14em] font-sans" style={{}}>IA</span>
</div>
<span className="text-[15px] sm:text-[16px] font-semibold tracking-tight font-sans" style={{}}>SwarX</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition text-white/70 hover:text-white font-sans" href="#features" style={{}}>Features</a>
<a className="text-sm transition text-white/70 hover:text-white font-sans" href="#pipeline" style={{}}>How it works</a>
<a className="text-sm transition text-white/70 hover:text-white font-sans" href="#integrations" style={{}}>Integrations</a>
<a className="text-sm transition text-white/70 hover:text-white font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="text-sm transition text-white/70 hover:text-white font-sans" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3 transition-opacity duration-300" id="navCtas">
<a className="px-3.5 py-2 rounded-md text-sm ring-1 transition text-white/80 hover:text-white ring-white/10 hover:ring-white/20 font-sans" href="#" style={{}}>Book demo</a>
<a className="px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 transition bg-white text-black hover:bg-white/90 ring-white/10 font-sans" href="#" style={{}}>Launch Studio</a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 transition ring-white/10 hover:ring-white/20 hover:bg-white/5" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="px-4 py-4 flex flex-col gap-2">
<a className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#features" style={{}}>Features</a>
<a className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#pipeline" style={{}}>How it works</a>
<a className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#integrations" style={{}}>Integrations</a>
<a className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#pricing" style={{}}>Pricing</a>
<a className="px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 font-sans" href="#faq" style={{}}>FAQ</a>
<div className="mt-2 flex gap-2">
<a className="flex-1 px-3.5 py-2 rounded-md text-sm ring-1 text-center text-white/80 hover:text-white ring-white/10 hover:ring-white/20 font-sans" href="#" style={{}}>Book demo</a>
<a className="flex-1 px-3.5 py-2 rounded-md text-sm font-semibold tracking-tight ring-1 text-center bg-white text-black hover:bg-white/90 ring-white/10 font-sans" href="#" style={{}}>Launch Studio</a>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="sm:px-6 lg:px-8 sm:pt-24 sm:pb-16 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 text-xs mb-5 ring-white/10 bg-white/5 text-white/70 backdrop-blur">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans" style={{}}>Voice agents built for D2C brands</span>
</div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.08] text-3xl tracking-tight font-bricolage font-semibold" style={{}}>Automate founder touch at scale</h1>
<p <p="" className="sm:text-lg text-base text-white/70 mt-4"><strong className="">Voice Agents</strong> that talk, convert &amp; care like a founder.</p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 transition text-sm font-semibold tracking-tight ring-1 rounded-md pt-2.5 pr-4 pb-2.5 pl-4 hover:bg-white/90 text-black bg-white ring-white/10 font-sans" href="#" style={{}}>Explore use cases<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg></a>
<a className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm ring-1 transition text-white/85 hover:text-white ring-white/10 hover:ring-white/20 hover:bg-white/5 font-sans" href="#" style={{}}>
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a demo
              </a>
</div>
<div className="mt-6 flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="Customer" className="h-8 w-8 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{}}/>
</div>
<p className="sm:text-sm text-xs text-white/60 font-sans" style={{}}>Trusted by scaled &amp; growing D2C teams across commerce.</p>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">
<div className="sm:p-6 bg-white/5 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-mic h-5 w-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 19v3"></path>
<path className="" d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<rect height="13" rx="3" width="6" x="9" y="2"></rect>
</svg>
</div>
<div className="">
<div className="text-sm font-medium tracking-tight font-sans" style={{}}>Real‑time Voice Agent</div>
<div className="text-xs text-white/60 font-sans" id="agentStatus" style={{}}>Preparing…</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 rounded-md text-[11px] bg-amber-500/10 ring-1 ring-amber-500/20 text-amber-300 font-sans invisible" id="liveBadge" style={{}}>Live</span>
<button aria-pressed="false" className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs ring-1 transition ring-white/10 hover:ring-white/20 hover:bg-white/5 font-sans disabled:opacity-50 disabled:pointer-events-none" disabled="" id="listenBtn" style={{}}>
<svg className="lucide lucide-headphones h-4 w-4" data-lucide="headphones" fill="none" height="24" id="listenIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span id="listenLabel">Listen</span>
</button>
</div>
</div>

<div className="mt-4 h-16 w-full rounded-md bg-gradient-to-r to-white/[0.02] ring-1 flex items-center gap-1 px-2 overflow-hidden from-white/5 ring-white/10 backdrop-blur" id="voiceWaveform">
<div className="flex w-full gap-x-1 gap-y-1" id="voiceBars">
<div className="h-8 w-1.5 rounded-[2px] bg-white/50"></div>
<div className="h-4 w-1.5 rounded-[2px] bg-white/30"></div>
<div className="h-10 w-1.5 rounded-[2px] bg-white/60"></div>
<div className="w-1.5 bg-white/30 h-5 rounded-[2px]"></div>
<div className="h-7 w-1.5 rounded-[2px] bg-white/40"></div>
<div className="h-10 w-1.5 rounded-[2px] bg-white/60"></div>
<div className="h-5 w-1.5 rounded-[2px] bg-white/30"></div>
<div className="h-9 w-1.5 rounded-[2px] bg-white/50"></div>
<div className="h-6 w-1.5 rounded-[2px] bg-white/35"></div>
<div className="h-8 w-1.5 rounded-[2px] bg-white/45"></div>
<div className="h-4 w-1.5 rounded-[2px] bg-white/30"></div>
<div className="h-10 w-1.5 rounded-[2px] bg-white/60"></div>
</div>
</div>
<audio className="hidden" id="agentAudio" preload="auto"></audio>

<div className="mt-5 space-y-3 max-h-64 sm:max-h-72 overflow-y-auto pr-2 scroll-smooth" id="transcriptList">

<div className="text-xs text-white/50 font-sans">Loading transcript…</div>
</div>

<div className="mt-6 flex items-center justify-between border-t pt-4 border-white/10">
<div className="flex items-center gap-3 text-xs text-white/60">
<svg className="lucide lucide-gauge h-4 w-4" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span className="font-sans" id="latencyMeta" style={{}}>Latency: 280ms • ASR: 98.4%</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs ring-1 transition ring-white/10 hover:ring-white/20 hover:bg-white/5 font-sans" style={{}}>
<svg className="lucide lucide-phone-call h-4 w-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                      Start call
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs ring-1 transition ring-white/10 hover:ring-white/20 hover:bg-white/5 font-sans" style={{}}>
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                      Send via WhatsApp
                    </button>
</div>
</div>
</div>

<div className="pointer-events-none absolute -inset-x-6 -bottom-6 h-20 blur-2xl bg-[radial-gradient(400px_80px_at_50%_0%,rgba(255,255,255,0.10),transparent)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-y border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-75">
<div className="text-xs uppercase tracking-[0.18em] text-white/60 font-sans" style={{}}>Trusted by</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight ring-white/10 font-sans" style={{}}>BLUME</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight ring-white/10 font-sans" style={{}}>VITA+</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight ring-white/10 font-sans" style={{}}>URBN</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight ring-white/10 font-sans" style={{}}>NEST</div>
<div className="h-8 w-24 grid place-items-center rounded-md bg-white/[0.04] ring-1 text-xs font-medium tracking-tight ring-white/10 font-sans" style={{}}>KIND</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14" id="features">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl tracking-tight font-bricolage font-semibold" style={{}}>Does everything for you</h2>
<p className="mt-3 text-white/70 font-sans" style={{}}>Covers the end‑to‑end customer lifecycle.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-audio-lines h-4.5 w-4.5" data-lucide="audio-lines" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 10v3"></path><path d="M6 6v11"></path><path d="M10 3v18"></path><path d="M14 8v7"></path><path d="M18 5v13"></path><path d="M22 10v3"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Converts carts</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Understands reasons, objections &amp; answers them empathetically.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-globe-2 h-4.5 w-4.5" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 22c0 1.1.9 2 2 2a2 2 0 0 0 2-c0-1.1.9-2 2-2h3.17"></path><path d="M11 2195V18a2 2 0 0 0-2-2a2 2 0 0 1--2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Confirms orders, intent &amp; addresses</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Qualifies customers before shipping for maximum delivery rates.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-shopping-bag h-4.5 w-4.5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Takes action</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Automates repetitive tasks — places or cancels orders, sends WhatsApp messages, and adds informative tags &amp; notes to each order.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">

<svg className="lucide lucide-truck h-4.5 w-4.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 17h4V5H2v12h3"></path><path d="M14 17h2"></path><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path><path d="M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path><path d="M14 7h3l3 3v7h-3"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Converts NDRs</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Don't let NDR happen! Alert customers on the day of delivery or convince them to buy with a coupon.</p>
</div>
<div className="hover:bg-white/[0.06] transition border rounded-lg pt-5 pr-5 pb-5 pl-5 hover:border-white/15 bg-white/5 border-white/10 backdrop-blur">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">

<svg className="lucide lucide-badge-percent h-4.5 w-4.5" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 3.09L18.18 8l-3.09 3.09L12 14.18l-3.09-3.09L5.82 8l3.09-3.09z"></path><path d="M9 9l6 6"></path><path d="M9 15h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Bargains &amp; offers discounts</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Our AI bargains &amp; starts with the lowest permissible discount to convert.</p>
</div>
<div className="rounded-lg border p-5 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">

<svg className="lucide lucide-life-buoy h-4.5 w-4.5" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Before &amp; after‑sale support</div>
</div>
<p className="text-sm mt-3 text-white/70 font-sans" style={{}}>Answers 95% of queries and offers empathetic support on edge cases.</p>
</div>
</div>
</div>
</section>

<section className="pt-0 pb-14 sm:pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
<div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 sm:p-6">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-bricolage">Why SwarX Agents?</h3>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" data-lucide="clock" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l3 3"></path></svg>
</div>
<div className="text-sm text-white/80">Works 7 days a week — never misses a follow‑up</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" data-lucide="sparkles" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="text-sm text-white/80">Adds personal touch automatically — pre‑fetches context before every call</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-sm text-white/80">Zero hallucinations — hands off to your real agent when unsure</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" data-lucide="languages" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2v3"></path><path d="M22 22l-5-10-5 10"></path><path d="M14 18h6"></path></svg>
</div>
<div className="text-sm text-white/80">Speaks Hinglish, the way India actually talks</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:col-span-2">
<div className="h-8 w-8 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<svg className="h-4.5 w-4.5" data-lucide="bar-chart-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><rect height="7" rx="1" width="3" x="7" y="8"></rect><rect height="9" rx="1" width="3" x="12" y="6"></rect><rect height="5" rx="1" width="3" x="17" y="10"></rect></svg>
</div>
<div className="text-sm text-white/80">Comprehensive call analytics — refined per‑call insights at scale</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 border-white/10 border-t pt-14 pb-14" id="pipeline">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage" style={{}}>How it works</h2>
<p className="mt-3 text-white/70 font-sans" style={{}}>Indic AI orchestrates speech, understanding and actions in a tight loop.</p>
</div>
<div className="mt-8 grid lg:grid-cols-4 gap-4">
<div className="rounded-lg border p-5 border-white/10 bg-white/5 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-mic h-4.5 w-4.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Capture</div>
</div>
<p className="text-sm text-white/70 mt-3" style={{}}>Telephony and HD WhatsApp calls with noise reduction and faulty speech detection.</p>
</div>
<div className="rounded-lg border p-5 border-white/10 bg-white/5 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-brain h-4.5 w-4.5" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Understand</div>
</div>
<p className="text-sm text-white/70 mt-3" style={{}}>ASR + NLU tuned for Indic code‑switching and the e‑commerce domain.</p>
</div>
<div className="rounded-lg border p-5 border-white/10 bg-white/5 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-workflow h-4.5 w-4.5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Decide</div>
</div>
<p className="text-sm text-white/70 mt-3" style={{}}>Context + policy + notes + intent tools: inventory, orders, payments, coupons, fulfillment, WhatsApp.</p>
</div>
<div className="rounded-lg border p-5 border-white/10 bg-white/5 backdrop-blur">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 bg-white/5 ring-white/10 backdrop-blur">
<svg className="lucide lucide-megaphone h-4.5 w-4.5" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div className="text-base font-medium tracking-tight font-sans" style={{}}>Speak</div>
</div>
<p className="text-sm text-white/70 mt-3" style={{}}>7+ state‑of‑the‑art neural voices designed for India.</p>
</div>
</div>

<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border bg-white/5 backdrop-blur p-5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage" style={{}}>38%</div>
<div className="text-sm mt-1 text-white/60 font-sans" style={{}}>Avg. recovery on abandoned carts</div>
</div>
<div className="rounded-lg border bg-white/5 backdrop-blur p-5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage">61%+</div>
<div className="text-sm text-white/60 mt-1" style={{}}>Connection rates</div>
</div>
<div className="rounded-lg border bg-white/5 backdrop-blur p-5 border-white/10">
<div className="text-3xl font-semibold tracking-tight font-bricolage" style={{}}>12%</div>
<div className="text-sm text-white/60 mt-1" style={{}}>Fewer returns</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14" id="integrations">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 gap-x-6 gap-y-6">
<div className="">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage" style={{}}>Connect to your stack in minutes</h2>
<p className="mt-3 text-white/70 font-sans" style={{}}>Drop‑in connectors for commerce, messaging, telephony and analytics.</p>
</div>
<div className="flex items-center gap-2">
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>Webhooks</div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>API</div>
<div className="px-2.5 py-1 rounded-md text-[11px] ring-1 bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>No‑code</div>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>SHOP</div>
<div className="">
<div className="text-sm font-medium tracking-tight" style={{}}>Shopify</div>
<div className="text-xs text-white/60" style={{}}></div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>WC</div>
<div className="">
<div className="text-sm font-medium tracking-tight" style={{}}>Logistics</div>
<div className="text-xs text-white/60" style={{}}></div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/ 5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>WA</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>WhatsApp</div>
<div className="text-xs text-white/60" style={{}}>Templates, media, click‑to‑chat</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>TEL</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>Telephony</div>
<div className="text-xs text-white/60" style={{}}>Exotel, Twilio, Kaleyra</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>PAY</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>Payments</div>
<div className="text-xs text-white/60" style={{}}>Razorpay, Cashfree</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>CRM</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>CRM/Email</div>
<div className="text-xs text-white/60" style={{}}>Klaviyo, HubSpot</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>GA4</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>Analytics</div>
<div className="text-xs text-white/60" style={{}}>GA4, Mixpanel</div>
</div>
</div>
<div className="h-20 rounded-lg border p-4 flex items-center gap-3 hover:bg-white/[0.06] transition border-white/10 bg-white/5 hover:border-white/15 backdrop-blur">
<div className="h-9 w-9 grid place-items-center rounded-md ring-1 text-xs font-semibold tracking-[0.12em] bg-white/5 ring-white/10 font-sans backdrop-blur" style={{}}>ZAP</div>
<div>
<div className="text-sm font-medium tracking-tight" style={{}}>Automations</div>
<div className="text-xs text-white/60" style={{}}>Zapier, Make.com</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
<p className="text-sm text-white/70">Need a custom connector? Our team ships new integrations in days, not months.</p>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 py-1.5 text-xs transition hover:bg-white/20" href="#">
            Request integration
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-t border-white/10 sm:py-20 pt-14 pb-14" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage">Simple, usage‑based pricing</h2>
<p className="mt-3 text-white/70">Start free. Scale as you go.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Starter</h3>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15">Best for trying</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">Free</span>
<span className="text-xs text-white/60">up to 50 calls</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>1 neural voice</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>Basic analytics</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80"></span>Email support</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-white/10 transition hover:bg-white/90" href="#">Get started</a>
</div>

<div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 backdrop-blur hover:border-white/20 transition ring-1 ring-white/10">
<div className="absolute -top-3 right-4 rounded-full bg-amber-400 text-black text-[11px] px-2 py-0.5 font-semibold ring-amber-300/50 ring-1">Most popular</div>
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Growth</h3>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15">Teams</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">₹4.5</span>
<span className="text-xs text-white/60">per connected minute</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>All Starter +</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>Multiple voices</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>WhatsApp + SMS</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-sky-400/80"></span>NDR workflows</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black ring-1 ring-white/10 transition hover:bg-white/90" href="#">Start trial</a>
</div>

<div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:border-white/20 transition">
<div className="flex items-center justify-between">
<h3 className="text-lg font-medium tracking-tight">Scale</h3>
<span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15">Custom</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-bricolage">Talk to us</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>Dedicated success manager</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>SLA + priority routing</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/80"></span>On‑prem options</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20" href="#">Contact sales</a>
</div>
</div>
</div>
</section>

<section className="sm:py-20 pt-14 pb-14 border-t border-white/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-bricolage">Frequently asked questions</h2>
</div>
<div className="mt-6 space-y-3">
<details className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              How fast is the voice response?
              <span className="ml-4 rounded-md bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-white/70">Median end‑to‑end latency is under 300ms with barge‑in support and crosstalk handling.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Can it speak multiple languages?
              <span className="ml-4 rounded-md bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-white/70">Yes. We support English, Hindi and natural Hinglish out of the box. More Indic languages on request.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              How do you ensure accuracy and safety?
              <span className="ml-4 rounded-md bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-white/70">Domain‑tuned ASR + policies + tool guards. When uncertain, the agent escalates to a human seamlessly.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur">
<summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium">
              Do you integrate with my stack?
              <span className="ml-4 rounded-md bg-white/10 px-2 py-0.5 text-[11px] ring-1 ring-white/15 transition group-open:rotate-45">+</span>
</summary>
<p className="mt-3 text-sm text-white/70">Most likely yes. We offer ready connectors and fast custom builds via API and webhooks.</p>
</details>
</div>
</div>
</section>

<section className="relative pt-10 pb-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-white/5 to-fuchsia-500/10 p-6 sm:p-8 backdrop-blur">
<div className="grid items-center gap-6 sm:grid-cols-2">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-bricolage">Ready to meet your best agent?</h3>
<p className="mt-3 text-white/70">Spin up your voice agent, connect WhatsApp, and start closing more carts today.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-black ring-1 ring-white/10 transition hover:bg-white/90" href="#">Launch Studio</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/20" href="#">Book a demo</a>
</div>
</div>
<div className="relative">
<div className="pointer-events-none absolute -inset-6 blur-3xl bg-[radial-gradient(400px_120px_at_60%_0%,rgba(255,255,255,0.15),transparent)]"></div>
<div className="rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div>
<div className="text-sm font-medium">Avg. answer time</div>
<div className="text-xs text-white/60">under 300ms</div>
</div>
</div>
<div className="mt-4 h-1.5 w-full rounded bg-white/10">
<div className="h-1.5 rounded bg-emerald-400/80" style={{width: '82%'}}></div>
</div>
<p className="mt-3 text-xs text-white/60">Live across phone + WhatsApp with real‑time barge‑in.</p>
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
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded-md ring-1 bg-white/5 ring-white/10">
<span className="text-[11px] font-semibold tracking-[0.14em]">IA</span>
</div>
<span className="text-sm font-semibold tracking-tight">SwarX</span>
</div>
<p className="mt-3 text-sm text-white/60">End‑to‑end voice AI built for D2C commerce in India.</p>
</div>
<div>
<div className="text-sm font-semibold">Product</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#features">Features</a></li>
<li><a className="hover:text-white transition" href="#pipeline">How it works</a></li>
<li><a className="hover:text-white transition" href="#integrations">Integrations</a></li>
<li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold">Company</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li><a className="hover:text-white transition" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold">Contact</div>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="mailto:hello@swarx.ai">hello@swarx.ai</a></li>
<li><a className="hover:text-white transition" href="#">X/Twitter</a></li>
<li><a className="hover:text-white transition" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
<p className="text-xs text-white/50">© <span id="year"></span> Indic AI. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/60">
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Security</a>
</div>
</div>
</div>
</footer>


</headmeta>
    </>
  );
}
