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
      
    // Mobile menu
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Simple 3D cube rotation
    const cube = document.getElementById('cube3d');
    if (cube) {
      let ax = 25, ay = 35;
      const spin = () => {
        ay += 0.3; ax += 0.15;
        cube.style.transform = `rotateX(${ax}deg) rotateY(${ay}deg)`;
        requestAnimationFrame(spin);
      };
      spin();
    }

    // Voice demo (UI + waveform simulation using mic)
    const startBtns = document.querySelectorAll('[data-voice-start]');
    const stopBtns = document.querySelectorAll('[data-voice-stop]');
    const waveCanvases = [document.getElementById('voiceWave'), document.getElementById('voiceWave2')].filter(Boolean);
    const stateBadges = [document.getElementById('voiceStateBadge'), document.getElementById('voiceStateBadge2')].filter(Boolean);
    const transcriptEl = document.getElementById('voiceTranscript');

    let audioCtx, analyser, src, micStream, rafId;

    function setState(s) {
      stateBadges.forEach(b => { if (b) { b.textContent = s; b.className = b.className.replace(/bg-[^ ]+|text-[^ ]+/g,''); b.classList.add('text-[10px]','px-2','py-0.5','rounded-full','border','border-neutral-200'); b.classList.add(s === 'listening' ? 'bg-orange-50' : 'bg-neutral-100'); b.classList.add(s === 'listening' ? 'text-orange-700' : 'text-neutral-600'); }});
    }

    function draw() {
      if (!analyser) return;
      const data = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteTimeDomainData(data);
      waveCanvases.forEach(cv => {
        const ctx = cv.getContext('2d');
        const w = cv.clientWidth, h = cv.clientHeight;
        if (cv.width !== w || cv.height !== h) { cv.width = w; cv.height = h; }
        ctx.clearRect(0,0,w,h);
        ctx.strokeStyle = '#fb923c';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const slice = w / data.length;
        for (let i=0;i<data.length;i++){
          const v = (data[i] - 128) / 128;
          const y = h/2 + v * (h/2 - 4);
          const x = i * slice;
          i === 0 ? ctx.moveTo(x,y) : ctx.lineTo(x,y);
        }
        ctx.stroke();
      });
      rafId = requestAnimationFrame(draw);
    }

    async function startVoice() {
      if (micStream) return;
      try {
        micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        src = audioCtx.createMediaStreamSource(micStream);
        src.connect(analyser);
        setState('listening');
        draw();
        // Simulated AI conversation
        if (transcriptEl) {
          addLine('ai', 'Hi! I’m your voice agent. Tell me about your business or say “book a call”.');
          setTimeout(() => addLine('user', 'We are an IT company looking to qualify leads.'), 1200);
          setTimeout(() => addLine('ai', 'Great! I can qualify callers and book a time on your calendar. Would you like me to book a call now?'), 2200);
        }
      } catch (e) {
        setState('denied');
        if (transcriptEl) addLine('ai', 'I could not access your microphone. Please allow mic permissions and try again.');
      }
    }

    function stopVoice() {
      if (rafId) cancelAnimationFrame(rafId);
      if (micStream) {
        micStream.getTracks().forEach(t => t.stop());
        micStream = null;
      }
      if (audioCtx) { audioCtx.close(); audioCtx = null; }
      analyser = null; src = null;
      setState('idle');
      if (transcriptEl) addLine('ai', 'Demo ended. You can say “book a call” next time to schedule via voice.');
    }

    function addLine(who, text) {
      const row = document.createElement('div');
      row.className = 'text-sm';
      const badge = who === 'ai'
        ? '<span class="inline-flex items-center gap-1 text-orange-700"><i data-lucide="bot" class="w-3.5 h-3.5"></i><span>AI</span></span>'
        : '<span class="inline-flex items-center gap-1 text-neutral-600"><i data-lucide="user" class="w-3.5 h-3.5"></i><span>You</span></span>';
      row.innerHTML = `<div class="flex items-start gap-2"><div class="mt-0.5">${badge}</div><p class="text-neutral-800">${text}</p></div>`;
      transcriptEl.appendChild(row);
      transcriptEl.scrollTop = transcriptEl.scrollHeight;
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
    }

    startBtns.forEach(b => b.addEventListener('click', startVoice));
    stopBtns.forEach(b => b.addEventListener('click', stopVoice));

    // FAQ accordion
    document.querySelectorAll('#faq > div > button').forEach((btn) => {
      btn.addEventListener('click', () => {
        const panel = btn.nextElementSibling;
        panel.classList.toggle('hidden');
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        if (icon) icon.style.transform = panel.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
      });
    });

    // Chart.js: ROI
    const ctx = document.getElementById('roiChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Answered Calls', 'Cost/Call', 'Bookings'],
          datasets: [
            { label: 'Before', data: [55, 8, 20], backgroundColor: 'rgba(0,0,0,0.08)', borderRadius: 8 },
            { label: 'After', data: [90, 4, 36], backgroundColor: 'rgba(255,145,64,0.85)', borderRadius: 8 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#525252', boxWidth: 12, font: { weight: 500 } } },
            tooltip: { backgroundColor: 'rgba(255,255,255,0.95)', titleColor: '#111827', bodyColor: '#111827', borderColor:'#e5e7eb', borderWidth:1 }
          },
          scales: {
            x: { ticks: { color: '#6b7280' }, grid: { display: false } },
            y: { ticks: { color: '#6b7280' }, grid: { color: 'rgba(0,0,0,0.05)' }, beginAtZero: true }
          }
        }
      });
    }

    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();

    // Lucide icons with 1.5 stroke width
    lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
  
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
      

<div className="fixed inset-x-0 top-0 z-40 pointer-events-none">
<div className="mx-auto h-1 w-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600"></div>
</div>

<header className="relative z-30">
<nav className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-semibold">V</span>
<span className="text-lg tracking-tight font-semibold">Vendrato</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#solutions">Solutions</a>
<a className="hover:text-neutral-900 transition" href="#integrations">Integrations</a>
<a className="hover:text-neutral-900 transition" href="#pricing">Pricing</a>
<a className="hover:text-neutral-900 transition" href="#resources">Resources</a>
<a className="hover:text-neutral-900 transition" href="#about">About</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-sm transition" href="#demo-voice">Try Live Voice Demo</a>
<a className="px-4 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 text-sm font-medium shadow-[0_8px_30px_rgb(255,153,51,0.25)] hover:brightness-110 transition" href="#demo-voice">Start Demo</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition" id="mobileBtn">
<i className="w-5 h-5 text-neutral-900" data-lucide="menu"></i>
</button>
</nav>

<div className="md:hidden hidden px-6" id="mobileMenu">
<div className="space-y-2 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
<a className="block px-3 py-2 rounded-lg hover:bg-neutral-100" href="#solutions">Solutions</a>
<a className="block px-3 py-2 rounded-lg hover:bg-neutral-100" href="#integrations">Integrations</a>
<a className="block px-3 py-2 rounded-lg hover:bg-neutral-100" href="#pricing">Pricing</a>
<a className="block px-3 py-2 rounded-lg hover:bg-neutral-100" href="#resources">Resources</a>
<a className="block px-3 py-2 rounded-lg hover:bg-neutral-100" href="#about">About</a>
<div className="flex gap-2 pt-2">
<a className="flex-1 px-3 py-2 rounded-lg bg-neutral-100 text-center" href="#demo-voice">Try Demo</a>
<a className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 text-center font-medium" href="#demo-voice">Start</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="demo">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-white via-white to-neutral-50"></div>
<div className="absolute -top-20 -right-20 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-3xl"></div>
<div className="absolute -bottom-10 -left-20 h-[480px] w-[480px] rounded-full bg-amber-400/10 blur-3xl"></div>

<div aria-hidden="true" className="absolute -top-6 -right-6 hidden md:block">
<div className="h-40 w-40 relative" style={{perspective: `900px`}}>
<div className="h-full w-full relative" id="cube3d" style={{transformStyle: `preserve-3d`, willChange: `transform`}}>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.2), rgba(253,230,138,.2))`, transform: `translateZ(40px)`}}></span>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.18), rgba(253,230,138,.18))`, transform: `rotateY(90deg) translateZ(40px)`}}></span>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.16), rgba(253,230,138,.16))`, transform: `rotateY(-90deg) translateZ(40px)`}}></span>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.14), rgba(253,230,138,.14))`, transform: `rotateX(90deg) translateZ(40px)`}}></span>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.12), rgba(253,230,138,.12))`, transform: `rotateX(-90deg) translateZ(40px)`}}></span>
<span className="absolute inset-0 rounded-xl border border-orange-500/30" style={{background: `linear-gradient(135deg, rgba(255,149,64,.25), rgba(253,230,138,.25))`, transform: `translateZ(-40px)`}}></span>
</div>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10 pb-16 lg:pt-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-700">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Live Voice Demo — Try it now
          </div>
<h1 className="mt-5 text-4xl md:text-5xl tracking-tight font-semibold text-neutral-900">
            Try the Voice AI as your business, right here
          </h1>
<p className="mt-4 text-neutral-600">
            No booking required. Speak to the AI in your browser. It answers as your business, qualifies, and can book a call for you at the end—via voice.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-medium shadow-[0_10px_40px_rgba(255,140,60,0.25)] hover:brightness-110 transition" href="#demo-voice">
              Try Live Voice Demo
            </a>
<a className="px-5 py-3 rounded-xl bg-neutral-100 ring-1 ring-neutral-200 hover:bg-neutral-200 transition flex items-center gap-2" href="#pricing">
<i className="w-4 h-4 text-orange-500" data-lucide="wallet"></i>
              Pricing from $1,000
            </a>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-neutral-500">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop" />
<img alt="Customer avatar" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-82f16f6a0cdd?q=80&w=80&auto=format&fit=crop" />
<img alt="Customer avatar" className="h-8 w-8 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop" />
</div>
<span>Trusted by teams in IT, Medical, Energy, Training</span>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-orange-500/20 via-amber-400/10 to-orange-600/20 blur-xl"></div>
<div className="relative rounded-[2rem] bg-white border border-neutral-200 glass p-6">
<div className="grid sm:grid-cols-2 gap-6">

<div className="flex items-center justify-center">
<div className="h-96 w-48 rounded-[2rem] bg-white border border-neutral-200 p-3 relative overflow-hidden shadow-sm">
<div className="absolute inset-x-0 top-2 mx-auto h-6 w-24 rounded-full bg-neutral-100"></div>
<div className="mt-8 mx-auto h-72 w-[170px] rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-4">
<div className="flex items-center justify-between text-xs text-neutral-500">
<span>Live Demo</span>
<i className="w-4 h-4 text-orange-500" data-lucide="phone"></i>
</div>
<div className="mt-6 text-center">
<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
<i className="w-7 h-7 text-neutral-950" data-lucide="waves"></i>
</div>
<p className="mt-3 text-sm font-medium text-neutral-900">AI Agent</p>
<p className="text-xs text-neutral-500">“I can help and book a call if needed.”</p>
</div>
<div className="mt-4">
<div className="rounded-xl bg-neutral-50 border border-neutral-200 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-neutral-600">Mic status</p>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600" id="voiceStateBadge">idle</span>
</div>
<div className="mt-2 h-12 rounded-md bg-white border border-neutral-200 overflow-hidden flex items-center">
<canvas className="w-full h-full" id="voiceWave"></canvas>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<button className="h-10 rounded-xl bg-neutral-100 text-xs border border-neutral-200">Mute</button>
<button className="h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 text-xs font-medium" data-voice-start="">Start</button>
<button className="h-10 rounded-xl bg-neutral-100 text-xs border border-neutral-200" data-voice-stop="">Stop</button>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i>
                  Live, in-browser demo — no install
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-orange-500" data-lucide="calendar-check-2"></i>
                  Say “book a call” to schedule at the end
                </div>
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-orange-500" data-lucide="brain-cog"></i>
                  Answers as your business with real flows
                </div>
<div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4" id="demo-voice">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-800">Conversation transcript</p>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 text-sm font-medium" data-voice-start="">
<i className="w-4 h-4" data-lucide="mic"></i>
                      Start demo
                    </button>
</div>
<div className="mt-3 space-y-2 max-h-40 overflow-auto" id="voiceTranscript">
<p className="text-xs text-neutral-500">Tip: try saying “We’re an IT company. Can you qualify me?” then “book a call”.</p>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800 transition" href="#pricing">
<i className="w-4 h-4" data-lucide="badge-dollar-sign"></i>
                  Pricing starts at $1,000 with 2‑week implementation
                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">The hidden cost of your current phone system</h2>
<p className="mt-3 text-neutral-600">Every unanswered call, long wait time, or inaccurate note quietly eats revenue.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="phone-off"></i>
<span className="text-sm">Missed calls</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">$2,400/month</p>
<p className="text-sm text-neutral-600">Average revenue lost on missed new-customer calls.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="hourglass"></i>
<span className="text-sm">Hold time</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">16 hours/day</p>
<p className="text-sm text-neutral-600">Aggregate time callers spend waiting across teams.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="file-warning"></i>
<span className="text-sm">Bad notes</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">0% insights</p>
<p className="text-sm text-neutral-600">No structured data to optimize service or marketing.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-sm">Overheads</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">$9,000/year</p>
<p className="text-sm text-neutral-600">Typical extra staffing for peak call windows.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="activity"></i>
<span className="text-sm">Variance</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">43% variability</p>
<p className="text-sm text-neutral-600">Inconsistent answers lead to lost trust and rework.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700">
<i className="w-5 h-5" data-lucide="clock"></i>
<span className="text-sm">After-hours</span>
</div>
<p className="mt-3 text-2xl tracking-tight font-semibold text-neutral-900">48 min/day</p>
<p className="text-sm text-neutral-600">Follow‑ups and manual CRM updates after shifts.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="solutions">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">A better way to handle every call</h2>
<p className="mt-3 text-neutral-600">Zero missed calls. Consistent answers. Bookings in your CRM instantly.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="headphones"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">24/7 coverage</h3>
<p className="text-sm text-neutral-700">Never miss a lead. Hand off to humans when needed.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="clipboard-check"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Script accuracy</h3>
<p className="text-sm text-neutral-700">Trained on your SOPs to answer consistently every time.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="calendar"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Instant bookings</h3>
<p className="text-sm text-neutral-700">Calendar invites and reminders without manual steps.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="database"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">CRM writes</h3>
<p className="text-sm text-neutral-700">Contact creation, notes, and pipeline moves in real time.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="shield-check"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Compliance</h3>
<p className="text-sm text-neutral-700">Configurable disclosures, consent, and audit trails.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="line-chart"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Analytics</h3>
<p className="text-sm text-neutral-700">Understand call intent, resolution, and conversion.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="integrations">
<div className="absolute inset-0 -z-10 bg-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Works with your stack</h2>
<p className="mt-3 text-neutral-600">Deep, battle‑tested integrations that keep your team in flow.</p>
<ul className="mt-6 space-y-3 text-neutral-700">
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="plug"></i> GoHighLevel (GHL): contacts, pipelines, bookings, triggers</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="plug"></i> Salesforce: Leads, Accounts, Cases, Events</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="plug"></i> Attio: notes, attributes, timelines</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="px-4 py-2 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-medium" href="#demo-voice">Try Live Voice Demo</a>
<a className="px-4 py-2 rounded-xl bg-neutral-100 ring-1 ring-neutral-200 hover:bg-neutral-200 transition" href="#resources">Read docs</a>
</div>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<img alt="Dashboard preview" className="rounded-xl object-cover h-72 w-full" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop" />
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3 text-center">
<p className="text-sm font-medium text-neutral-900">GoHighLevel</p>
</div>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3 text-center">
<p className="text-sm font-medium text-neutral-900">Salesforce</p>
</div>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3 text-center">
<p className="text-sm font-medium text-neutral-900">Attio</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-neutral-50"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Your ROI in the first 2 weeks</h2>
<p className="mt-3 text-neutral-600">Reduce missed calls and staffing overhead while capturing more qualified bookings.</p>
<ul className="mt-6 space-y-3 text-neutral-700">
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right"></i> 3x answered after-hours</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="arrow-up-right"></i> 25–40% faster time‑to‑booking</li>
<li className="flex items-center gap-2"><i className="w-5 h-5 text-orange-500" data-lucide="arrow-down-right"></i> Lower cost per qualified call</li>
</ul>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<h3 className="text-lg tracking-tight font-semibold text-neutral-900">Before vs After</h3>
<p className="text-sm text-neutral-700">Illustrative data from similar deployments.</p>
<div className="mt-4">
<div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
<div className="h-64">
<div className="h-full w-full">
<canvas id="roiChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 text-xs text-neutral-500">Calls answered ↑, costs ↓, bookings ↑</div>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Go live in 2 weeks</h2>
<p className="mt-3 text-neutral-600">A focused process that brings you to production quickly—without surprises.</p>
</div>
<div className="mt-10 grid lg:grid-cols-4 gap-5">
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700 text-sm"><i className="w-5 h-5" data-lucide="message-square"></i> Day 1–2</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-neutral-900">Discovery</h3>
<p className="text-sm text-neutral-700">Goals, scripts, handoff rules, and calendars.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700 text-sm"><i className="w-5 h-5" data-lucide="brain"></i> Day 3–6</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-neutral-900">Training</h3>
<p className="text-sm text-neutral-700">Fine‑tune on FAQs, compliance, and tone.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700 text-sm"><i className="w-5 h-5" data-lucide="plug-zap"></i> Day 7–10</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-neutral-900">Integrations</h3>
<p className="text-sm text-neutral-700">GHL, Salesforce, Attio; QA and sandbox tests.</p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<div className="flex items-center gap-2 text-orange-700 text-sm"><i className="w-5 h-5" data-lucide="rocket"></i> Day 11–14</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold text-neutral-900">Launch</h3>
<p className="text-sm text-neutral-700">Go live, analytics, and optimization loop.</p>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-medium shadow-[0_10px_40px_rgba(255,140,60,0.25)] hover:brightness-110 transition" href="#demo-voice">
<i className="w-5 h-5" data-lucide="mic"></i>
          Try the live voice demo
        </a>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-neutral-50 to-white"></div>
<div className="mx-auto max-w-5xl px-6 lg:px-8 py-16">
<div className="rounded-3xl bg-white border border-neutral-200 p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight font-semibold text-neutral-900">Simple, transparent pricing</h3>
<p className="mt-3 text-neutral-700">Starts at $1,000/month. Guaranteed 2‑week implementation.</p>
<ul className="mt-5 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="shield-check"></i> SLA-backed uptime and support</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="cpu"></i> Voice AI + CRM integrations included</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-orange-500" data-lucide="calendar-check-2"></i> Calendar booking and handoffs</li>
</ul>
</div>
<div className="justify-self-end">
<div className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
<div className="flex items-end gap-2">
<span className="text-4xl font-semibold tracking-tight text-neutral-900">$1,000</span>
<span className="text-neutral-600 mb-1 text-sm">/month starting</span>
</div>
<p className="text-sm text-neutral-700 mt-2">No long-term contracts. Scale usage up or down.</p>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-medium hover:brightness-110 transition" href="#demo-voice">
<i className="w-5 h-5" data-lucide="mic"></i> Try the demo
              </a>
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-100 transition" href="https://vendrato.com/pricing">
<i className="w-5 h-5" data-lucide="credit-card"></i> See details
              </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="resources">
<div className="absolute inset-0 -z-10 bg-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="book-open"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Documentation</h3>
<p className="text-sm text-neutral-700">Implementation guides, call flows, and API examples.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800" href="#"><i className="w-4 h-4" data-lucide="arrow-right"></i> Browse docs</a>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="life-buoy"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Support</h3>
<p className="text-sm text-neutral-700">Success team and SLAs to keep you moving.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800" href="#demo-voice"><i className="w-4 h-4" data-lucide="mic"></i> Start live demo</a>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-6">
<i className="w-6 h-6 text-orange-500" data-lucide="shield"></i>
<h3 className="mt-3 text-lg tracking-tight font-semibold text-neutral-900">Security</h3>
<p className="text-sm text-neutral-700">Data handling, retention, and auditability by design.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm text-orange-700 hover:text-orange-800" href="#"><i className="w-4 h-4" data-lucide="file-text"></i> Read policy</a>
</div>
</div>
</div>
</section>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-neutral-50"></div>
<div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
<div className="text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-neutral-900">Common questions</h2>
</div>
<div className="mt-8 space-y-3" id="faq">
<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<button className="w-full flex items-center justify-between px-5 py-4 text-left">
<span className="font-medium text-neutral-900">Which countries do you serve?</span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">We currently deploy for businesses in Australia and the United States.</p>
</div>
</div>
<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<button className="w-full flex items-center justify-between px-5 py-4 text-left">
<span className="font-medium text-neutral-900">How do handoffs to humans work?</span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Warm transfers, voicemail, or callback scheduling—configured to your team’s hours and queues.</p>
</div>
</div>
<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<button className="w-full flex items-center justify-between px-5 py-4 text-left">
<span className="font-medium text-neutral-900">What does deployment look like?</span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Two‑week sprint: discovery, training, integrations, QA, and launch. We handle most of the lift.</p>
</div>
</div>
<div className="rounded-xl bg-white border border-neutral-200 overflow-hidden">
<button className="w-full flex items-center justify-between px-5 py-4 text-left">
<span className="font-medium text-neutral-900">Can I keep my phone numbers?</span>
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</button>
<div className="px-5 pb-5 hidden">
<p className="text-sm text-neutral-700">Yes—port or forward existing numbers. We’ll advise the cleanest path for your routing.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="absolute inset-0 -z-10 bg-white"></div>
<div className="mx-auto max-w-6xl px-6 lg:px-8 py-16">
<div className="grid lg:grid-cols-2 gap-10">
<div className="rounded-3xl bg-white border border-neutral-200 p-8">
<h3 className="text-2xl tracking-tight font-semibold text-neutral-900">Start your live voice demo</h3>
<p className="mt-3 text-neutral-700">Speak to the AI right now in your browser. It can qualify, answer FAQs, and book a call via voice—no forms needed.</p>
<div className="mt-6 space-y-4">
<div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-800">Microphone</p>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600" id="voiceStateBadge2">idle</span>
</div>
<div className="mt-2 h-14 rounded-md bg-white border border-neutral-200 overflow-hidden flex items-center">
<canvas className="w-full h-full" id="voiceWave2"></canvas>
</div>
<div className="mt-3 flex gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 text-sm font-medium" data-voice-start="">
<i className="w-4 h-4" data-lucide="mic"></i> Start demo
                </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-900 text-sm" data-voice-stop="">
<i className="w-4 h-4" data-lucide="square"></i> Stop
                </button>
</div>
<p className="mt-2 text-xs text-neutral-500">Note: Browser will ask for mic permission.</p>
</div>
</div>
</div>
<div className="rounded-3xl overflow-hidden border border-neutral-200">
<img alt="Office collaboration" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop" />
</div>
</div>
</div>
</section>

<footer className="relative" id="about">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-white"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-semibold">V</span>
<span className="text-lg tracking-tight font-semibold">Vendrato</span>
</div>
<p className="mt-3 text-sm text-neutral-600">AI phone agent implementation and CRM integrations for businesses in Australia and the United States.</p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="LinkedIn" className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition" href="https://www.linkedin.com/company/vendrato" target="_blank">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="p-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition" href="https://twitter.com/vendrato" target="_blank">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Company</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900 transition" href="#about">About Vendrato</a></li>
<li><a className="hover:text-neutral-900 transition" href="#solutions">Core Services</a></li>
<li><a className="hover:text-neutral-900 transition" href="#integrations">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Resources</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900 transition" href="#resources">Documentation</a></li>
<li><a className="hover:text-neutral-900 transition" href="#resources">Support Services</a></li>
<li><a className="hover:text-neutral-900 transition" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900">Legal</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900 transition" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-neutral-900 transition" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-xs text-neutral-500">
<p>© <span id="yr"></span> Vendrato. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="px-3 py-2 rounded-lg bg-white border border-neutral-200 hover:bg-neutral-100 transition" href="#pricing">See Pricing</a>
<a className="px-3 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-neutral-950 font-medium hover:brightness-110 transition" href="#demo-voice">Try Voice Demo</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-neutral-950 font-medium shadow-[0_10px_40px_rgba(255,140,60,0.4)] hover:brightness-110 transition inline-flex items-center gap-2" href="#demo-voice">
<i className="w-5 h-5" data-lucide="mic"></i>
    Try Live Voice Demo
  </a>


    </>
  );
}
