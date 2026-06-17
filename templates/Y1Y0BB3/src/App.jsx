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
      
      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // State
      const state = { step: 1, s1: 'idle', s2: 'idle', done: false };

      // Elements
      const approveBtn = document.getElementById('approveBtn');
      const approveLabel = document.getElementById('approveLabel');
      const approveIcon = document.getElementById('approveIcon');
      const backBtn = document.getElementById('backBtn');
      const resetBtn = document.getElementById('resetBtn');

      const s1Dot = document.getElementById('s1Dot');
      const s2Dot = document.getElementById('s2Dot');
      const s1Status = document.getElementById('s1Status');
      const s2Status = document.getElementById('s2Status');

      const successState = document.getElementById('successState');
      const stepsContainer = document.getElementById('stepsContainer');
      const confettiCanvas = document.getElementById('confetti');
      const successBadge = document.getElementById('successBadge');
      const inlineNotice = document.getElementById('inlineNotice');

      function setIcon(el, name) {
        el.setAttribute('data-lucide', name);
        el.replaceWith(el.cloneNode(true)); // reset
        lucide.createIcons();
      }

      function setLoading(isLoading) {
        approveBtn.disabled = isLoading;
        setIcon(approveIcon, isLoading ? 'loader-2' : (state.step === 1 ? 'fingerprint' : state.done ? 'party-popper' : 'key-round'));
        if (isLoading) approveIcon.classList.add('animate-spin');
        else approveIcon.classList.remove('animate-spin');
      }

      function markStep(dotEl, statusEl, label) {
        dotEl.className = "h-5 w-5 rounded-full border border-emerald-500/30 bg-emerald-500/20 grid place-items-center text-emerald-300";
        dotEl.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i>';
        statusEl.textContent = label || 'Done';
        statusEl.className = "text-xs text-emerald-300 tracking-tight";
        lucide.createIcons();
      }

      function resetStep(dotEl, statusEl, pendingText, dim) {
        dotEl.className = "h-5 w-5 rounded-full border border-white/10 bg-neutral-800 grid place-items-center " + (dim ? "text-neutral-600" : "text-neutral-500");
        dotEl.innerHTML = '<span class="h-2 w-2 rounded-full ' + (dim ? 'bg-neutral-700' : 'bg-neutral-600') + '"></span>';
        statusEl.textContent = pendingText;
        statusEl.className = "text-xs text-neutral-500 tracking-tight";
      }

      function updateCTA() {
        if (state.done) {
          approveLabel.textContent = 'Start Trading';
          setIcon(approveIcon, 'party-popper');
          return;
        }
        if (state.step === 1) {
          approveLabel.textContent = 'Authorize Agent';
          setIcon(approveIcon, 'fingerprint');
        } else {
          approveLabel.textContent = 'Authorize Builder';
          setIcon(approveIcon, 'key-round');
        }
      }

      // Simple confetti
      function launchConfetti() {
        const ctx = confettiCanvas.getContext('2d');
        const W = confettiCanvas.width = confettiCanvas.offsetWidth;
        const H = confettiCanvas.height = confettiCanvas.offsetHeight;
        const colors = ['#34d399', '#10b981', '#6ee7b7', '#a7f3d0', '#bbf7d0'];
        const pieces = Array.from({ length: 140 }, () => ({
          x: Math.random() * W,
          y: -10 - Math.random() * 40,
          r: 2 + Math.random() * 5,
          c: colors[Math.floor(Math.random() * colors.length)],
          vx: -1 + Math.random() * 2,
          vy: 1 + Math.random() * 3 + 1.5,
          a: Math.random() * 360
        }));
        confettiCanvas.classList.remove('hidden');
        let start = performance.now();
        function frame(t) {
          const dt = (t - start);
          ctx.clearRect(0, 0, W, H);
          pieces.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.a += 6;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.a * Math.PI / 180);
            ctx.fillStyle = p.c;
            ctx.fillRect(-p.r, -p.r, p.r * 2, p.r * 2);
            ctx.restore();
            if (p.y > H + 10) { p.y = -10; p.x = Math.random() * W; }
          });
          if (dt < 2800) requestAnimationFrame(frame);
          else confettiCanvas.classList.add('hidden');
        }
        requestAnimationFrame(frame);
      }

      function showSuccess() {
        successState.classList.remove('hidden');
        successBadge.classList.add('show');
        stepsContainer.classList.add('pb-36');
        launchConfetti();
        updateCTA();
      }

      approveBtn.addEventListener('click', () => {
        // If fully done, this would proceed/close – demo keeps it open
        if (state.done) {
          // Optionally close modal or redirect
          return;
        }

        inlineNotice.classList.remove('hidden');
        setLoading(true);

        // Simulate wallet prompt delay
        setTimeout(() => {
          setLoading(false);

          if (state.step === 1 && state.s1 !== 'done') {
            state.s1 = 'done';
            markStep(s1Dot, s1Status, 'Authorized');
            state.step = 2;
            updateCTA();
            return;
          }

          if (state.step === 2 && state.s2 !== 'done') {
            state.s2 = 'done';
            markStep(s2Dot, s2Status, 'Authorized');
            state.done = true;
            showSuccess();
          }
        }, 1100 + Math.random() * 500);
      });

      backBtn.addEventListener('click', () => {
        // For demo: reset to start if user presses Back
        state.step = 1; state.s1 = 'idle'; state.s2 = 'idle'; state.done = false;
        successState.classList.add('hidden');
        successBadge.classList.remove('show');
        resetStep(s1Dot, s1Status, 'Pending', false);
        resetStep(s2Dot, s2Status, 'Waiting', true);
        updateCTA();
      });

      resetBtn.addEventListener('click', () => {
        backBtn.click();
      });

      // Initial CTA icon/text
      updateCTA();
    
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
      

<div className="fixed inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-[0.18]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/85 to-neutral-950"></div>
</div>

<div className="fixed inset-0 flex items-center justify-center p-4">
<div className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"></div>

<section aria-labelledby="enable-title" aria-modal="true" className="relative z-10 w-full max-w-sm sm:max-w-[560px] mx-auto rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur shadow-2xl" role="dialog">

<canvas className="pointer-events-none absolute inset-0 rounded-2xl hidden" id="confetti"></canvas>

<header className="px-4 py-6 sm:py-10">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200" id="enable-title">Enable Trading</h2>
<p className="mt-1 text-sm sm:text-base text-neutral-400">Connect your wallet and grant permissions to start placing orders.</p>
</div>
<button aria-label="Reset steps" className="h-10 w-10 min-h-[44px] min-w-[44px] grid place-items-center rounded-lg border border-white/10 bg-neutral-800/70 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-white/20" id="resetBtn">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>
</button>
</div>
</header>

<div aria-live="polite" className="px-4 pb-28 sm:pb-40" id="stepsContainer">

<ol className="relative ml-2 pl-6">

<span className="absolute left-3 top-5 bottom-5 w-px bg-white/10"></span>

<li className="mb-6 slide-in show" id="step1">
<div className="flex items-start gap-3">

<div className="relative mt-1">
<div className="h-5 w-5 rounded-full border border-white/10 bg-neutral-800 grid place-items-center text-neutral-500" id="s1Dot">
<span className="h-2 w-2 rounded-full bg-neutral-600"></span>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="font-medium text-neutral-200">Approve Agent</h3>
<span className="text-xs text-neutral-500 tracking-tight" id="s1Status">Pending</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Allow 1‑click trading from this app.</p>
</div>
</div>
</li>

<li className="slide-in show" id="step2">
<div className="flex items-start gap-3">

<div className="relative mt-1">
<div className="h-5 w-5 rounded-full border border-white/10 bg-neutral-800 grid place-items-center text-neutral-600" id="s2Dot">
<span className="h-2 w-2 rounded-full bg-neutral-700"></span>
</div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h3 className="font-medium text-neutral-200">Approve Builder</h3>
<span className="text-xs text-neutral-500 tracking-tight" id="s2Status">Waiting</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Allow the app to build orders you execute.</p>
</div>
</div>
</li>
</ol>

<div className="mt-6 hidden" id="inlineNotice">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Actions open your wallet. You’ll sign two prompts.</span>
</div>
</div>

<div className="hidden mt-4" id="successState">
<div className="flex flex-col items-center text-center px-2">
<div className="relative pulse-ring">
<div className="stamp-in" id="successBadge">
<div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 grid place-items-center text-emerald-300">
<i className="w-7 h-7" data-lucide="check"></i>
</div>
</div>
</div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight text-neutral-200">Trading Enabled</h3>
<p className="mt-2 text-sm text-neutral-400 max-w-sm">Wallet permissions granted. You’re ready to place orders securely.</p>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0">
<div className="h-10 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
<div className="pointer-events-auto px-4 pb-5">
<div className="flex items-center gap-3">
<button className="w-1/2 min-h-[44px] rounded-lg border border-white/10 bg-neutral-800/70 text-neutral-200 hover:bg-neutral-800 active:bg-neutral-800/80 focus:outline-none focus:ring-2 focus:ring-white/20" id="backBtn">
<div className="flex items-center justify-center gap-2 py-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="arrow-left"></i>
<span className="text-sm font-medium">Back</span>
</div>
</button>
<button className="group w-1/2 min-h-[44px] rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/15 active:bg-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:opacity-60 disabled:cursor-not-allowed" id="approveBtn">
<div className="flex items-center justify-center gap-2 py-3">
<i className="w-4 h-4" data-lucide="fingerprint" id="approveIcon"></i>
<span className="text-sm font-medium" id="approveLabel">Authorize Agent</span>
</div>
</button>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
