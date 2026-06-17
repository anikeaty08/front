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



    // Icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && typeof lucide.createIcons === 'function') {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
    });

    // Charts (Free + Pro)
    window.addEventListener('load', () => {
      if (typeof Chart === 'undefined') return;

      const freeCanvas = document.getElementById('usageChartFree');
      if (freeCanvas) {
        const g = freeCanvas.getContext('2d').createLinearGradient(0, 0, 0, 140);
        g.addColorStop(0, 'rgba(139,92,246,0.25)');
        g.addColorStop(1, 'rgba(139,92,246,0)');
        new Chart(freeCanvas, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              data: [8, 12, 18, 22, 10, 9, 17],
              borderColor: '#8b5cf6',
              backgroundColor: g,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#a3a3a3', font: { size: 10 } } },
              y: { grid: { color: '#1f2937' }, ticks: { color: '#737373', font: { size: 10 }, stepSize: 10, beginAtZero: true } }
            }
          }
        });
      }

      const proCanvas = document.getElementById('usageChartPro');
      if (proCanvas) {
        const g2 = proCanvas.getContext('2d').createLinearGradient(0, 0, 0, 140);
        g2.addColorStop(0, 'rgba(99,102,241,0.25)');
        g2.addColorStop(1, 'rgba(99,102,241,0)');
        new Chart(proCanvas, {
          type: 'line',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              data: [62, 88, 74, 96, 52, 80, 88],
              borderColor: '#6366f1',
              backgroundColor: g2,
              fill: true,
              tension: 0.35,
              pointRadius: 0,
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { intersect: false, mode: 'index' } },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#a3a3a3', font: { size: 10 } } },
              y: { grid: { color: '#1f2937' }, ticks: { color: '#737373', font: { size: 10 }, stepSize: 20, beginAtZero: true } }
            }
          }
        });
      }
    });
  
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
      

<header className="border-b border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 grid place-items-center">
<span className="text-sm font-semibold tracking-tight">E</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight">Eddy</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white" href="#">Public</a>
<a className="hover:text-white" href="#">Free plan</a>
<a className="hover:text-white" href="#">Pro</a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-3 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1.5">
<div className="relative h-6 w-6">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#222 0% 100%)'}}></div>
<div className="absolute inset-0.5 rounded-full bg-neutral-950"></div>
<i className="absolute inset-0 m-auto w-3.5 h-3.5 text-neutral-300" data-lucide="mic"></i>
</div>
<div className="text-xs">
<div className="font-medium tracking-tight">—</div>
<div className="text-neutral-400">Public view</div>
</div>
<button className="ml-1 hidden md:inline-flex items-center gap-1 rounded-full bg-neutral-800 px-2.5 py-1 text-xs text-neutral-200 hover:bg-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="arrow-up-right"></i>
              Upgrade
            </button>
</div>
<button aria-label="Open menu" className="inline-flex md:hidden items-center justify-center h-9 w-9 rounded-md border border-neutral-800 hover:bg-neutral-900">
<i className="w-5 h-5 text-neutral-300" data-lucide="menu"></i>
</button>
<img alt="avatar" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="mb-4">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="globe"></i> Public
        </span>
</div>
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Transcription that feels effortless
          </h1>
<p className="mt-4 text-neutral-300 max-w-xl">
            Upload an audio or video and get a transcript in minutes — no account needed to start.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="upload"></i>
              Upload audio or video
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm font-medium tracking-tight text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="link-2"></i>
              Paste a link
            </button>
</div>

<div className="mt-6 rounded-xl border border-dashed border-neutral-800 bg-neutral-950/70 p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="upload-cloud"></i>
</div>
<div>
<p className="font-medium tracking-tight">Start transcribing instantly</p>
<p className="text-sm text-neutral-400">No account required to begin. Drag &amp; drop a file or paste a link below.</p>
<div className="mt-3 grid gap-2">
<div className="flex rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
<input className="w-full bg-transparent px-3 py-2 text-sm text-neutral-200 placeholder-neutral-500 outline-none" placeholder="Paste a file or video link" type="url"/>
<button className="inline-flex items-center gap-1 bg-neutral-900 px-3 text-sm text-neutral-200 hover:bg-neutral-800">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
                        Submit
                      </button>
</div>
<div className="flex items-center gap-3">
<input accept="audio/*,video/*" className="hidden" type="file"/>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="file-audio"></i>
                        Choose file
                      </button>
<span className="text-xs text-neutral-500">MP3, WAV, MP4, MOV • up to 200MB</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden mt-8 rounded-xl border border-neutral-900 bg-neutral-950/70 p-4 sm:p-5">

</div>
</div>

<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-violet-400" data-lucide="wand-2"></i>
<h3 className="text-xl font-semibold tracking-tight">A clean 3‑step flow</h3>
</div>
<ol className="mt-6 space-y-5">
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="upload-cloud"></i>
</div>
<div>
<p className="font-medium tracking-tight">Import</p>
<p className="text-sm text-neutral-400">Drag a file or paste a link. We auto‑detect language and speakers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="audio-lines"></i>
</div>
<div>
<p className="font-medium tracking-tight">Transcribe</p>
<p className="text-sm text-neutral-400">Fast, accurate transcripts with timestamps and diarization.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium tracking-tight">Review &amp; export</p>
<p className="text-sm text-neutral-400">Edit inline, then export to TXT, SRT, or publish to your workflow.</p>
</div>
</li>
</ol>

<div className="mt-8">
<p className="text-xs uppercase tracking-wider text-neutral-400">Popular sources</p>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-red-400" data-lucide="youtube"></i>
<span className="text-sm">YouTube</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-neutral-300" data-lucide="folder"></i>
<span className="text-sm">Upload file</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-sky-300" data-lucide="cloud"></i>
<span className="text-sm">Drive/Cloud</span>
</button>
</div>
</div>
</div>
</div>

<section className="hidden mt-10"></section>

<section className="mt-10">
<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<p className="text-sm text-neutral-300">Scale as you grow</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1">Simple plans, predictable pricing</h3>
<p className="mt-2 text-sm text-neutral-400">Free includes 120 minutes/month. Pro adds priority processing and team seats.</p>
</div>
<div className="grid sm:grid-cols-2 gap-3 w-full md:w-auto">
<div className="rounded-xl border border-neutral-900 bg-neutral-950 p-4">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">Free</p>
<p className="text-sm text-neutral-400">$0</p>
</div>
<ul className="mt-2 space-y-1 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>120 min / mo</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>Single user</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-4">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">Pro</p>
<p className="text-sm text-neutral-200">$19/mo</p>
</div>
<ul className="mt-2 space-y-1 text-sm text-neutral-200">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="check"></i>2,000 min / mo</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="zap"></i>Priority processing</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="users"></i>Team seats</li>
</ul>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
                  Upgrade to Pro
                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<br/>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="mb-4">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="badge-check"></i> Free
        </span>
</div>
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Transcription that feels effortless
          </h1>
<p className="mt-4 text-neutral-300 max-w-xl">
            You’re on the Free plan. Keep transcribing and upgrade when you need more minutes.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="plus"></i>
              New transcription
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm font-medium tracking-tight text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="folder-down"></i>
              Import from file or link
            </button>
</div>

<div className="hidden mt-6 rounded-xl border border-dashed border-neutral-800 bg-neutral-950/70 p-5"></div>

<div className="mt-8 rounded-xl border border-neutral-900 bg-neutral-950/70 p-4 sm:p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-start gap-4">
<div className="relative h-12 w-12">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#6366f1 0% 80%, #8b5cf6 80% 79.99%, #222 80% 100%)'}}></div>
<div className="absolute inset-1 rounded-full bg-neutral-950"></div>
<i className="absolute inset-0 m-auto w-5 h-5 text-neutral-300" data-lucide="timer"></i>
</div>
<div>
<p className="text-sm text-neutral-300">This month</p>
<div className="mt-0.5 text-lg font-semibold tracking-tight">96 of 120 minutes used</div>
<div className="mt-2 w-full h-2 rounded-full bg-neutral-900">
<div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{width: '80%'}}></div>
</div>
<p className="mt-2 text-xs text-neutral-400">Renews in 14 days</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2.5 text-sm text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="download"></i>
                  Export usage CSV
                </button>
<button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="crown"></i>
                  Upgrade plan
                </button>
</div>
</div>

<div className="mt-5">
<h2 className="text-sm font-medium tracking-tight text-neutral-200">Weekly minutes</h2>
<p className="text-xs text-neutral-400">How much you transcribed in the last 7 days</p>
<div className="mt-2 rounded-lg border border-neutral-900 bg-neutral-950 p-3">
<div className="relative h-32">
<canvas id="usageChartFree"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-violet-400" data-lucide="wand-2"></i>
<h3 className="text-xl font-semibold tracking-tight">A clean 3‑step flow</h3>
</div>
<ol className="mt-6 space-y-5">
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="upload-cloud"></i>
</div>
<div>
<p className="font-medium tracking-tight">Import</p>
<p className="text-sm text-neutral-400">Drag a file or paste a link. We auto‑detect language and speakers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="audio-lines"></i>
</div>
<div>
<p className="font-medium tracking-tight">Transcribe</p>
<p className="text-sm text-neutral-400">Fast, accurate transcripts with timestamps and diarization.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium tracking-tight">Review &amp; export</p>
<p className="text-sm text-neutral-400">Edit inline, then export to TXT, SRT, or publish to your workflow.</p>
</div>
</li>
</ol>

<div className="mt-8">
<p className="text-xs uppercase tracking-wider text-neutral-400">Popular sources</p>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-red-400" data-lucide="youtube"></i>
<span className="text-sm">YouTube</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-neutral-300" data-lucide="folder"></i>
<span className="text-sm">Upload file</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-sky-300" data-lucide="cloud"></i>
<span className="text-sm">Drive/Cloud</span>
</button>
</div>
</div>
</div>
</div>

<section className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Recent transcriptions</h3>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="search"></i>
            Search
          </button>
</div>
<div className="mt-6 divide-y divide-neutral-900 rounded-xl border border-neutral-900 bg-neutral-950/60">
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">342 • Rekindling Romance: How to plan the perfect date night</p>
<p className="text-xs text-neutral-400">42:18 • 03/26/2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-600/30 bg-emerald-600/10 px-2.5 py-1 text-xs text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Complete
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">341 • Analyzing the Analytics: Listener insights that matter</p>
<p className="text-xs text-neutral-400">50:25 • 03/19/2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-blue-600/30 bg-blue-600/10 px-2.5 py-1 text-xs text-blue-300">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> Processing
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">Navigating the Apple Podcasts setup maze</p>
<p className="text-xs text-neutral-400">28:12 • 02/02/2024</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-800/60 px-2.5 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="pause"></i> Paused
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
</div>
</section>

<section className="mt-10">
<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<p className="text-sm text-neutral-300">Scale as you grow</p>
<h3 className="text-2xl font-semibold tracking-tight mt-1">Simple plans, predictable pricing</h3>
<p className="mt-2 text-sm text-neutral-400">Free includes 120 minutes/month. Pro adds priority processing and team seats.</p>
</div>
<div className="grid sm:grid-cols-2 gap-3 w-full md:w-auto">
<div className="rounded-xl border border-neutral-900 bg-neutral-950 p-4">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">Free</p>
<p className="text-sm text-neutral-400">$0</p>
</div>
<ul className="mt-2 space-y-1 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>120 min / mo</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>Single user</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-800 bg-gradient-to-b from-neutral-950 to-neutral-900 p-4">
<div className="flex items-center justify-between">
<p className="font-medium tracking-tight">Pro</p>
<p className="text-sm text-neutral-200">$19/mo</p>
</div>
<ul className="mt-2 space-y-1 text-sm text-neutral-200">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="check"></i>2,000 min / mo</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="zap"></i>Priority processing</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-400" data-lucide="users"></i>Team seats</li>
</ul>
<button className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
                  Upgrade to Pro
                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<br/>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="mb-4">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="stars"></i> Pro
        </span>
</div>
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Transcription that feels effortless
          </h1>
<p className="mt-4 text-neutral-300 max-w-xl">
            You’re on Pro. Enjoy faster processing, higher limits, and collaboration tools.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="zap"></i>
              New transcription
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-5 py-3 text-sm font-medium tracking-tight text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="folder-down"></i>
              Import from file or link
            </button>
</div>
</div>

<div className="rounded-2xl border border-neutral-900 bg-neutral-950/60 p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-violet-400" data-lucide="wand-2"></i>
<h3 className="text-xl font-semibold tracking-tight">A clean 3‑step flow</h3>
</div>
<ol className="mt-6 space-y-5">
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="upload-cloud"></i>
</div>
<div>
<p className="font-medium tracking-tight">Import</p>
<p className="text-sm text-neutral-400">Drag a file or paste a link. We auto‑detect language and speakers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="audio-lines"></i>
</div>
<div>
<p className="font-medium tracking-tight">Transcribe</p>
<p className="text-sm text-neutral-400">Fast, accurate transcripts with timestamps and diarization.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-10 w-10 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-5 h-5 text-neutral-300" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium tracking-tight">Review &amp; export</p>
<p className="text-sm text-neutral-400">Edit inline, then export to TXT, SRT, or publish to your workflow.</p>
</div>
</li>
</ol>

<div className="mt-8">
<p className="text-xs uppercase tracking-wider text-neutral-400">Popular sources</p>
<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-red-400" data-lucide="youtube"></i>
<span className="text-sm">YouTube</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-neutral-300" data-lucide="folder"></i>
<span className="text-sm">Upload file</span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-neutral-900 bg-neutral-950 px-3 py-2 hover:bg-neutral-900">
<i className="w-4 h-4 text-sky-300" data-lucide="cloud"></i>
<span className="text-sm">Drive/Cloud</span>
</button>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl border border-neutral-900 bg-neutral-950/70 p-5">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-start gap-4">
<div className="relative h-12 w-12">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(#6366f1 0% 32%, #8b5cf6 32% 31.99%, #222 32% 100%)'}}></div>
<div className="absolute inset-1 rounded-full bg-neutral-950"></div>
<i className="absolute inset-0 m-auto w-5 h-5 text-neutral-300" data-lucide="timer"></i>
</div>
<div>
<p className="text-sm text-neutral-300">This month</p>
<div className="mt-0.5 text-lg font-semibold tracking-tight">640 of 2000 minutes used</div>
<div className="mt-2 w-full h-2 rounded-full bg-neutral-900">
<div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" style={{width: '32%'}}></div>
</div>
<p className="mt-2 text-xs text-neutral-400">Renews in 14 days</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 px-4 py-2.5 text-sm text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="download"></i>
              Export usage CSV
            </button>
<button className="hidden inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-medium tracking-tight text-white hover:opacity-95">
<i className="w-4 h-4" data-lucide="crown"></i>
              Upgrade plan
            </button>
</div>
</div>

<div className="mt-5">
<h2 className="text-sm font-medium tracking-tight text-neutral-200">Weekly minutes</h2>
<p className="text-xs text-neutral-400">How much you transcribed in the last 7 days</p>
<div className="mt-2 rounded-lg border border-neutral-900 bg-neutral-950 p-3">
<div className="relative h-32">
<canvas id="usageChartPro"></canvas>
</div>
</div>
</div>
</div>

<section className="mt-10">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Recent transcriptions</h3>
<button className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/60 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-900">
<i className="w-4 h-4" data-lucide="search"></i>
            Search
          </button>
</div>
<div className="mt-6 divide-y divide-neutral-900 rounded-xl border border-neutral-900 bg-neutral-950/60">
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">Post‑production sync session with Anna</p>
<p className="text-xs text-neutral-400">36:42 • 03/27/2025</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-600/30 bg-emerald-600/10 px-2.5 py-1 text-xs text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="check"></i> Complete
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">Customer stories: product feedback roundup</p>
<p className="text-xs text-neutral-400">48:09 • 03/25/2025</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-blue-600/30 bg-blue-600/10 px-2.5 py-1 text-xs text-blue-300">
<i className="w-3.5 h-3.5" data-lucide="clock"></i> Processing
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
<div className="p-4 sm:p-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 grid place-items-center border border-neutral-800">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic"></i>
</div>
<div>
<p className="font-medium tracking-tight line-clamp-1">Studio lighting tips for video podcasts</p>
<p className="text-xs text-neutral-400">21:31 • 03/20/2025</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-700 bg-neutral-800/60 px-2.5 py-1 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="pause"></i> Paused
              </span>
<button className="hidden sm:inline-flex items-center gap-1 rounded-md border border-neutral-800 px-2.5 py-1.5 text-xs text-neutral-200 hover:bg-neutral-900">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i> Open
              </button>
</div>
</div>
</div>
</section>

<section className="hidden mt-10"></section>
</div>
</section>

<footer className="border-t border-neutral-900">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2025 Eddy, Inc.</p>
<div className="flex items-center gap-4 text-xs text-neutral-400">
<a className="hover:text-neutral-200" href="#">Privacy</a>
<a className="hover:text-neutral-200" href="#">Terms</a>
<a className="hover:text-neutral-200" href="#">Status</a>
</div>
</div>
</footer>


    </>
  );
}
