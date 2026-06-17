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
      
      // State
      const state = {
        muted: false,
        cameraOff: false,
        controlsVisible: true,
        controlsTimeout: null,
        callSeconds: 0,
        dragging: false,
        dragOffset: { x: 0, y: 0 },
        chatOpen: false,
      };

      const qs = (s, r = document) => r.querySelector(s);
      const qsa = (s, r = document) => [...r.querySelectorAll(s)];

      // Elements
      const callShell = qs('#call-shell');
      const controls = qs('#controls-wrap');
      const capture = qs('#interaction-capture');
      const btnMic = qs('#btn-mic');
      const btnCam = qs('#btn-cam');
      const btnChat = qs('#btn-chat');
      const btnShare = qs('#btn-share');
      const btnEnd = qs('#btn-end');
      const timerEl = qs('#call-timer');
      const selfView = qs('#self-view');
      const selfVideo = qs('#self-video');
      const micBadge = qs('#mic-muted-badge');
      const camOverlay = qs('#camera-off-overlay');
      const chatPanel = qs('#chat-panel');
      const btnCloseChat = qs('#btn-close-chat');
      const messages = qs('#messages');
      const composer = qs('#composer');
      const inputMsg = qs('#message-input');
      const fileInput = qs('#file-input');
      const btnAttach = qs('#btn-attach');
      const endedOverlay = qs('#ended-overlay');
      const btnReturn = qs('#btn-return');

      // Init Icons
      function renderIcons(root = document) {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Call timer
      function pad(n) { return String(n).padStart(2, '0'); }
      function tickTimer() {
        state.callSeconds += 1;
        const m = Math.floor(state.callSeconds / 60);
        const s = state.callSeconds % 60;
        timerEl.textContent = pad(m) + ':' + pad(s);
      }

      // Controls visibility (auto-hide)
      function showControls(autoHideMs = 3500) {
        controls.classList.add('opacity-100');
        state.controlsVisible = true;
        if (state.controlsTimeout) clearTimeout(state.controlsTimeout);
        if (autoHideMs > 0) {
          state.controlsTimeout = setTimeout(hideControls, autoHideMs);
        }
      }
      function hideControls() {
        controls.classList.remove('opacity-100');
        state.controlsVisible = false;
      }
      function pingControls() {
        showControls();
      }

      // Chat open/close responsive
      function openChat() {
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
          chatPanel.classList.remove('translate-y-full');
          chatPanel.classList.add('translate-y-0');
        } else {
          chatPanel.classList.remove('translate-x-full');
          chatPanel.classList.add('translate-x-0');
        }
        btnChat.setAttribute('aria-expanded', 'true');
        state.chatOpen = true;
      }
      function closeChat() {
        const isMobile = window.innerWidth < 640;
        if (isMobile) {
          chatPanel.classList.add('translate-y-full');
          chatPanel.classList.remove('translate-y-0');
        } else {
          chatPanel.classList.add('translate-x-full');
          chatPanel.classList.remove('translate-x-0');
        }
        btnChat.setAttribute('aria-expanded', 'false');
        state.chatOpen = false;
      }
      window.addEventListener('resize', () => {
        // Keep panel consistent on resize
        if (!state.chatOpen) {
          chatPanel.classList.add('translate-y-full');
          chatPanel.classList.add('sm:translate-x-full');
        }
      });

      // Mic toggle
      function toggleMic() {
        state.muted = !state.muted;
        btnMic.setAttribute('aria-pressed', String(state.muted));
        btnMic.classList.toggle('ring-red-200', state.muted);
        btnMic.classList.toggle('bg-white', !state.muted);
        btnMic.classList.toggle('bg-red-50', state.muted);
        const icon = qs('#icon-mic', btnMic);
        icon.setAttribute('data-lucide', state.muted ? 'mic-off' : 'mic');
        micBadge.classList.toggle('hidden', !state.muted);
        renderIcons(btnMic);
        pingControls();
      }

      // Camera toggle
      function toggleCam() {
        state.cameraOff = !state.cameraOff;
        btnCam.setAttribute('aria-pressed', String(state.cameraOff));
        btnCam.classList.toggle('ring-amber-200', state.cameraOff);
        btnCam.classList.toggle('bg-white', !state.cameraOff);
        btnCam.classList.toggle('bg-amber-50', state.cameraOff);
        const icon = qs('#icon-cam', btnCam);
        icon.setAttribute('data-lucide', state.cameraOff ? 'video-off' : 'video');
        camOverlay.classList.toggle('hidden', !state.cameraOff);
        selfVideo.classList.toggle('opacity-0', state.cameraOff);
        renderIcons(btnCam);
        pingControls();
      }

      // Share document -> open file dialog
      function shareDocument() {
        fileInput.click();
      }

      // Add message bubble
      function addMessage({ text, file }) {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const wrap = document.createElement('div');
        wrap.className = 'flex items-start gap-2 sm:gap-3 justify-end';
        const inner = document.createElement('div');
        inner.className = 'max-w-[78%]';
        const bubble = document.createElement('div');
        bubble.className = 'rounded-2xl rounded-tr-sm bg-blue-600 text-white px-3 py-2 shadow-sm ring-1 ring-black/5';
        if (text) {
          const p = document.createElement('p');
          p.className = 'text-[13px] leading-5';
          p.textContent = text;
          bubble.appendChild(p);
        }
        if (file) {
          const fileRow = document.createElement('div');
          fileRow.className = 'flex items-center gap-2';
          const ic = document.createElement('i');
          ic.setAttribute('data-lucide', 'file');
          ic.className = 'h-4 w-4 text-white/90';
          ic.setAttribute('stroke-width', '1.5');
          const meta = document.createElement('div');
          meta.className = 'text-[13px] leading-5';
          meta.textContent = file.name + ' (' + Math.ceil(file.size / 1024) + ' KB)';
          fileRow.appendChild(ic);
          fileRow.appendChild(meta);
          bubble.appendChild(fileRow);
        }
        inner.appendChild(bubble);
        const stamp = document.createElement('div');
        stamp.className = 'mt-1 text-right text-[10px] text-neutral-500';
        stamp.textContent = time;
        inner.appendChild(stamp);
        wrap.appendChild(inner);
        messages.appendChild(wrap);
        renderIcons(wrap);
        messages.scrollTop = messages.scrollHeight;
      }

      // Composer handlers
      composer.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = inputMsg.value.trim();
        if (!text) return;
        addMessage({ text });
        inputMsg.value = '';
        inputMsg.style.height = 'auto';
      });

      // Auto-resize textarea
      inputMsg.addEventListener('input', () => {
        inputMsg.style.height = 'auto';
        inputMsg.style.height = inputMsg.scrollHeight + 'px';
      });

      // File sharing
      btnAttach.addEventListener('click', () => fileInput.click());
      btnShare.addEventListener('click', () => {
        openChat();
        shareDocument();
      });
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        openChat();
        addMessage({ file });
        e.target.value = '';
      });

      // Controls interactions
      btnMic.addEventListener('click', toggleMic);
      btnCam.addEventListener('click', toggleCam);
      btnChat.addEventListener('click', () => {
        state.chatOpen ? closeChat() : openChat();
        pingControls();
      });
      btnCloseChat.addEventListener('click', closeChat);

      // End call
      btnEnd.addEventListener('click', () => {
        endedOverlay.classList.remove('hidden');
        setTimeout(() => {
          const card = endedOverlay.querySelector('.willanimate');
          if (card) {
            requestAnimationFrame(() => {
              card.classList.remove('opacity-0', 'translate-y-2');
            });
          }
        }, 10);
      });
      btnReturn.addEventListener('click', () => {
        // In a real app, navigate back
        endedOverlay.classList.add('hidden');
      });

      // Show/hide controls on interaction
      ['mousemove', 'mouseenter', 'pointerdown', 'touchstart'].forEach(evt => {
        capture.addEventListener(evt, () => showControls());
      });

      // Draggable self-view
      (function initDrag() {
        let startX = 0, startY = 0, origX = 0, origY = 0;
        function bounds(el) {
          const stage = document.getElementById('stage').getBoundingClientRect();
          const rect = el.getBoundingClientRect();
          return {
            minX: stage.left + 8,
            minY: stage.top + 8,
            maxX: stage.right - rect.width - 8,
            maxY: stage.bottom - rect.height - 8
          };
        }
        function onPointerDown(e) {
          state.dragging = true;
          const rect = selfView.getBoundingClientRect();
          startX = e.clientX;
          startY = e.clientY;
          origX = rect.left;
          origY = rect.top;
          selfView.setPointerCapture(e.pointerId);
          selfView.classList.add('ring-2','ring-blue-500/40');
        }
        function onPointerMove(e) {
          if (!state.dragging) return;
          const dx = e.clientX - startX;
          const dy = e.clientY - startY;
          const b = bounds(selfView);
          let nx = Math.min(Math.max(origX + dx, b.minX), b.maxX);
          let ny = Math.min(Math.max(origY + dy, b.minY), b.maxY);
          selfView.style.left = nx + 'px';
          selfView.style.top = ny + 'px';
          selfView.style.right = 'auto';
          selfView.style.bottom = 'auto';
        }
        function onPointerUp(e) {
          state.dragging = false;
          try { selfView.releasePointerCapture(e.pointerId); } catch {}
          selfView.classList.remove('ring-2','ring-blue-500/40');
        }
        selfView.addEventListener('pointerdown', onPointerDown);
        window.addEventListener('pointermove', onPointerMove);
        window.addEventListener('pointerup', onPointerUp);
      })();

      // Initial load animations
      window.addEventListener('DOMContentLoaded', () => {
        renderIcons();
        // Staggered in
        setTimeout(() => {
          callShell.classList.remove('opacity-0','translate-y-2');
        }, 20);
        setTimeout(() => {
          qs('#topbar').classList.remove('opacity-0','-translate-y-2');
        }, 120);
        setTimeout(() => {
          qs('#self-view').classList.remove('opacity-0','translate-y-2');
        }, 240);
        setTimeout(() => {
          qs('#controls').classList.remove('opacity-0','translate-y-2');
          showControls(3500);
        }, 360);
        // Start timer
        setInterval(tickTimer, 1000);
      });

      // Hide controls after inactivity initially
      setTimeout(() => hideControls(), 4000);
    
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
      
<div className="flex items-center justify-center min-h-screen p-4 sm:p-6" id="app">

<div aria-label="Healthcare video call" className="relative w-full max-w-6xl h-[88vh] sm:h-[86vh] rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 willanimate opacity-0 translate-y-2 transition-all duration-700 ease-out" id="call-shell" role="application">

<div className="group relative h-full w-full bg-[radial-gradient(1200px_600px_at_70%_-20%,rgba(59,130,246,0.08),transparent),radial-gradient(800px_400px_at_20%_120%,rgba(99,102,241,0.08),transparent)]" id="stage">

<div className="absolute inset-0">
<img alt="Doctor Live Video" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none"></div>
</div>

<div className="pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-between gap-3 px-3 sm:px-5 py-3 sm:py-4 willanimate opacity-0 -translate-y-2 transition-all duration-700 ease-out delay-150" id="topbar">
<div className="pointer-events-auto inline-flex items-center gap-2.5 rounded-full bg-white/70 backdrop-blur-md ring-1 ring-black/5 px-3 sm:px-4 py-1.5 shadow-sm">
<div className="h-6 w-6 rounded-full overflow-hidden ring-1 ring-black/5">
<img alt="Patient avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-800 tracking-tight">Alex Carter</div>
</div>
<div className="pointer-events-auto hidden sm:flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-md ring-1 ring-black/5 px-4 py-1.5 shadow-sm">
<div className="h-7 w-7 rounded-full overflow-hidden ring-1 ring-black/5">
<img alt="Doctor avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight text-neutral-900">Dr. Maya Lee</span>
<span className="text-[11px] text-neutral-500">Cardiology</span>
</div>
</div>
<div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md ring-1 ring-black/5 px-3 sm:px-4 py-1.5 shadow-sm">
<i aria-hidden="true" className="h-4 w-4 text-neutral-600" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-xs sm:text-sm font-medium tabular-nums text-neutral-800" id="call-timer">00:00</span>
</div>
</div>

<div className="absolute left-3 sm:left-5 bottom-24 sm:bottom-28 pointer-events-none">
<div className="inline-flex items-center gap-2 rounded-full bg-black/40 text-white/90 backdrop-blur-md px-3 py-1.5 ring-1 ring-white/10 willanimate opacity-0 translate-y-1 transition-all duration-700 ease-out delay-300">
<span className="text-xs font-medium tracking-tight">Dr. Maya Lee</span>
<span className="text-[10px] text-white/70">Cardiology</span>
</div>
</div>

<div aria-label="Your video (draggable)" className="absolute bottom-24 sm:bottom-28 right-3 sm:right-5 w-36 sm:w-44 aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-black/10 shadow-lg bg-neutral-200/60 backdrop-blur willanimate opacity-0 translate-y-2 transition-all duration-700 ease-out delay-500 touch-none cursor-grab active:cursor-grabbing" id="self-view">
<img alt="Patient Self View" className="h-full w-full object-cover" id="self-video" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 hidden items-center justify-center bg-black/50" id="camera-off-overlay">
<div className="flex flex-col items-center gap-2">
<i className="h-6 w-6 text-white" data-lucide="video-off" strokeWidth="1.5"></i>
<span className="text-white text-xs font-medium">Camera off</span>
</div>
</div>

<div className="absolute top-2 left-2 hidden rounded-full bg-black/50 backdrop-blur px-2 py-0.5 ring-1 ring-white/10" id="mic-muted-badge">
<div className="flex items-center gap-1.5">
<i className="h-3.5 w-3.5 text-white" data-lucide="mic-off" strokeWidth="1.5"></i>
<span className="text-[10px] text-white/90 font-medium">Muted</span>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-4 sm:bottom-6 flex items-center justify-center willanimate opacity-0 translate-y-2 transition-all duration-700 ease-out delay-700" id="controls">
<div className="pointer-events-auto flex items-center gap-2 sm:gap-3 rounded-full bg-white/80 backdrop-blur-md ring-1 ring-black/5 px-2.5 py-2 shadow-lg shadow-black/5 opacity-0 transition-opacity duration-300 ease-out" id="controls-wrap">

<button aria-label="Toggle microphone" aria-pressed="false" className="group relative size-14 sm:size-[60px] rounded-full bg-white text-neutral-800 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:ring-black/10 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" id="btn-mic">
<i className="h-6 w-6 mx-auto text-neutral-800 group-active:scale-95 transition-transform" data-lucide="mic" id="icon-mic" strokeWidth="1.5"></i>
<span className="sr-only">Mute/Unmute</span>
</button>

<button aria-label="Toggle camera" aria-pressed="false" className="group relative size-14 sm:size-[60px] rounded-full bg-white text-neutral-800 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:ring-black/10 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" id="btn-cam">
<i className="h-6 w-6 mx-auto text-neutral-800 group-active:scale-95 transition-transform" data-lucide="video" id="icon-cam" strokeWidth="1.5"></i>
<span className="sr-only">Camera On/Off</span>
</button>

<button aria-controls="chat-panel" aria-expanded="false" aria-label="Open chat" aria-pressed="false" className="group relative size-14 sm:size-[60px] rounded-full bg-white text-neutral-800 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:ring-black/10 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" id="btn-chat">
<i className="h-6 w-6 mx-auto text-neutral-800 group-active:scale-95 transition-transform" data-lucide="message-square-text" id="icon-chat" strokeWidth="1.5"></i>
<span className="sr-only">Chat</span>
</button>

<button aria-label="Share document" className="group relative size-14 sm:size-[60px] rounded-full bg-white text-neutral-800 ring-1 ring-black/5 shadow-sm hover:shadow-md hover:ring-black/10 transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50" id="btn-share">
<i className="h-6 w-6 mx-auto text-neutral-800 group-active:scale-95 transition-transform" data-lucide="paperclip" id="icon-share" strokeWidth="1.5"></i>
<span className="sr-only">Share document</span>
</button>

<button aria-label="End call" className="group relative size-14 sm:size-[60px] rounded-full bg-red-600 text-white ring-1 ring-black/5 shadow-sm hover:bg-red-500 hover:shadow-md transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-red-500/40" id="btn-end">
<i className="h-6 w-6 mx-auto group-active:scale-95 transition-transform" data-lucide="phone-off" strokeWidth="1.5"></i>
<span className="sr-only">End Call</span>
</button>
</div>
</div>

<div aria-hidden="true" className="absolute inset-0" id="interaction-capture"></div>

<div className="fixed z-50 bg-white ring-1 ring-black/5 shadow-xl backdrop-blur-md rounded-t-2xl sm:rounded-none sm:rounded-l-2xl flex flex-col w-full sm:w-[380px] h-[65vh] sm:h-full left-0 sm:left-auto right-0 bottom-0 sm:bottom-auto top-auto sm:top-0 translate-y-full sm:translate-y-0 sm:translate-x-full transition-transform duration-300 ease-out" id="chat-panel">

<div className="relative flex items-center justify-between px-4 py-3 border-b border-neutral-200/70">
<div className="absolute left-1/2 -translate-x-1/2 -top-2.5 sm:hidden">
<div className="h-1.5 w-12 rounded-full bg-neutral-300/90"></div>
</div>
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-700" data-lucide="message-square-text" strokeWidth="1.5"></i>
<h2 className="text-[15px] font-semibold tracking-tight text-neutral-900">Chat</h2>
</div>
<button aria-label="Close chat" className="p-2 rounded-full hover:bg-neutral-100 transition-colors" id="btn-close-chat">
<i className="h-5 w-5 text-neutral-700" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 space-y-3 bg-white" id="messages">

<div className="flex items-start gap-2 sm:gap-3">
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-black/5 flex-shrink-0">
<img alt="Dr. Maya Lee" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[78%]">
<div className="rounded-2xl rounded-tl-sm bg-neutral-100 text-neutral-900 px-3 py-2 shadow-sm ring-1 ring-black/5">
<p className="text-[13px] leading-5">Hello Alex, how are you feeling today? You can also send me your recent reports here.</p>
</div>
<div className="mt-1 text-[10px] text-neutral-500">09:41 AM</div>
</div>
</div>

<div className="flex items-start gap-2 sm:gap-3 justify-end">
<div className="max-w-[78%]">
<div className="rounded-2xl rounded-tr-sm bg-blue-600 text-white px-3 py-2 shadow-sm ring-1 ring-black/5">
<p className="text-[13px] leading-5">Hi Doctor, I’m feeling better. I’ll upload the blood test PDF.</p>
</div>
<div className="mt-1 text-right text-[10px] text-neutral-500">09:42 AM</div>
</div>
</div>
</div>

<div className="border-t border-neutral-200/70 p-3 sm:p-3.5 bg-white">
<form className="flex items-end gap-2" id="composer">
<button aria-label="Attach file" className="p-2 rounded-full ring-1 ring-black/5 bg-white hover:bg-neutral-100 transition-colors" id="btn-attach" type="button">
<i className="h-5 w-5 text-neutral-700" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
<div className="flex-1">
<label className="sr-only" htmlFor="message-input">Message</label>
<textarea className="w-full resize-none rounded-xl border border-neutral-200/80 bg-white px-3 py-2 text-[13px] leading-5 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50" id="message-input" placeholder="Type a message…" rows="1"></textarea>
</div>
<button className="px-3 py-2 rounded-xl bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-500 transition-colors ring-1 ring-black/5" type="submit">
                  Send
                </button>
<input accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" className="hidden" id="file-input" type="file"/>
</form>
</div>
</div>

<div className="hidden absolute inset-0 z-40 flex items-center justify-center bg-white/80 backdrop-blur-sm" id="ended-overlay">
<div className="w-full max-w-sm mx-auto rounded-2xl bg-white ring-1 ring-black/5 shadow-xl p-6 text-center space-y-3 willanimate opacity-0 translate-y-2 transition-all duration-300 ease-out">
<div className="mx-auto h-12 w-12 rounded-full bg-red-50 flex items-center justify-center ring-1 ring-red-200">
<i className="h-6 w-6 text-red-600" data-lucide="phone-off" strokeWidth="1.5"></i>
</div>
<h3 className="text-[20px] sm:text-[22px] font-semibold tracking-tight text-neutral-900">Call ended</h3>
<p className="text-sm text-neutral-600">Your session with Dr. Lee has ended. A summary will be available in your visits.</p>
<div className="pt-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors" id="btn-return">
<i className="h-4 w-4" data-lucide="home" strokeWidth="1.5"></i>
                  Return to dashboard
                </button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
