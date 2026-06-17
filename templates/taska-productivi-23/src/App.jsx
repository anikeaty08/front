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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth scroll
    document.querySelectorAll('[data-scrollto]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sel = btn.getAttribute('data-scrollto');
        const el = document.querySelector(sel);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Intersection animation for features
    const featuresGrid = document.getElementById('featuresGrid');
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        featuresGrid.classList.remove('opacity-0', 'translate-y-10');
        featuresGrid.classList.add('opacity-100', 'translate-y-0');
        io.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '60px' });
    io.observe(featuresGrid);

    // ASCII canvas background (close to your logic)
    (function asciiBg() {
      const canvas = document.getElementById('asciiCanvas');
      const ctx = canvas.getContext('2d');
      const mouse = { x: -1000, y: -1000 };
      let raf = null;
      let t = 0;

      const chars = '   .·-~:;=+*#%@';
      const fontSize = 12;

      function resize() {
        const parent = canvas.parentElement;
        if (!parent) return;
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }

      function onMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }
      function onLeave() {
        mouse.x = -1000; mouse.y = -1000;
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = fontSize + "px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Slightly richer ink vs your original, still subtle
        ctx.fillStyle = 'rgba(0,0,0,0.06)';

        const cols = Math.ceil(canvas.width / fontSize);
        const rows = Math.ceil(canvas.height / fontSize);

        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const x = i * fontSize + fontSize / 2;
            const y = j * fontSize + fontSize / 2;

            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const wave1 = Math.sin(x * 0.003 + t * 0.4);
            const wave2 = Math.cos(y * 0.004 - t * 0.3);
            const wave3 = Math.sin((x + y) * 0.002 + t * 0.5);
            const wave = (wave1 + wave2 + wave3) / 3;

            let mouseEffect = 0;
            const maxDist = 200;
            if (dist < maxDist) mouseEffect = Math.pow(1 - dist / maxDist, 2) * 1.2;

            let value = (wave + 1) / 2;
            value = Math.max(0, Math.min(1, value + mouseEffect));

            const idx = Math.floor(value * (chars.length - 1));
            const ch = chars[idx];
            if (ch.trim() !== '') ctx.fillText(ch, x, y);
          }
        }

        t += 0.012;
        raf = requestAnimationFrame(draw);
      }

      window.addEventListener('resize', resize);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseout', onLeave);
      resize();
      draw();
    })();

    // Toast helper
    const toastEl = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastDesc = document.getElementById('toastDesc');
    const toastClose = document.getElementById('toastClose');
    let toastTimer = null;

    function showToast(title, desc) {
      toastTitle.textContent = title;
      toastDesc.textContent = desc;
      toastEl.classList.remove('hidden');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 3200);
    }
    toastClose.addEventListener('click', () => toastEl.classList.add('hidden'));

    // Modal logic
    const overlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalForm = document.getElementById('modalForm');
    const submitBtn = document.getElementById('submitBtn');
    const switchMode = document.getElementById('switchMode');
    const forgotBtn = document.getElementById('forgotBtn');
    const nameRow = document.getElementById('nameRow');

    let mode = 'login'; // login | register | join

    function openModal(nextMode) {
      mode = nextMode;

      if (mode === 'login') {
        modalTitle.textContent = 'Login';
        modalSubtitle.textContent = 'Welcome back. Continue where you left off.';
        submitBtn.textContent = 'Sign in';
        switchMode.textContent = 'Need an account? Register';
        nameRow.classList.add('hidden');
      }

      if (mode === 'register') {
        modalTitle.textContent = 'Register';
        modalSubtitle.textContent = 'Create your account in a few seconds.';
        submitBtn.textContent = 'Create account';
        switchMode.textContent = 'Already have an account? Login';
        nameRow.classList.remove('hidden');
      }

      if (mode === 'join') {
        modalTitle.textContent = 'Join Taska';
        modalSubtitle.textContent = 'Start with a simple plan and build consistency.';
        submitBtn.textContent = 'Join now';
        switchMode.textContent = 'Have an account? Login';
        nameRow.classList.remove('hidden');
      }

      overlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      setTimeout(() => document.getElementById('emailInput').focus(), 60);
    }

    function closeModal() {
      overlay.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    document.getElementById('loginBtn').addEventListener('click', () => openModal('login'));
    document.getElementById('registerBtn').addEventListener('click', () => openModal('register'));
    document.getElementById('joinBtn').addEventListener('click', () => openModal('join'));
    document.getElementById('ctaBtn').addEventListener('click', () => openModal('register'));
    document.getElementById('seeHowBtn').addEventListener('click', () => {
      showToast('Goal Decomposition', 'Hover the steps card to reveal the breakdown.');
    });

    modalClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
    });

    switchMode.addEventListener('click', () => {
      if (mode === 'login') openModal('register');
      else openModal('login');
    });

    forgotBtn.addEventListener('click', () => {
      showToast('Password reset', 'Demo: reset link would be sent to your email.');
    });

    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('emailInput').value.trim();
      if (!email) return;

      const key = 'taska_demo_user';
      const user = {
        email,
        name: document.getElementById('nameInput').value.trim(),
        updatedAt: Date.now(),
        mode
      };
      localStorage.setItem(key, JSON.stringify(user));
      closeModal();
      showToast('Done', mode === 'login' ? 'Signed in (demo).' : 'Account created (demo).');
    });

    // Demo toggle: animates score + momentum
    const demoToggle = document.getElementById('demoToggle');
    const demoKnob = document.getElementById('demoKnob');
    const scoreNumber = document.getElementById('scoreNumber');
    const scoreRing = document.getElementById('scoreRing');
    const momentumBar = document.getElementById('momentumBar');
    const momentumLabel = document.getElementById('momentumLabel');

    function setDemo(on) {
      demoToggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) {
        demoToggle.classList.remove('bg-black/10');
        demoToggle.classList.add('bg-black');
        demoKnob.classList.add('translate-x-5');
        demoKnob.classList.remove('bg-white');
        demoKnob.classList.add('bg-white');

        scoreNumber.textContent = '92';
        scoreRing.style.strokeDashoffset = '28';
        momentumBar.classList.remove('w-[55%]');
        momentumBar.classList.add('w-[78%]');
        momentumLabel.textContent = '78%';
        showToast('Demo mode', 'Previewing a stronger day.');
      } else {
        demoToggle.classList.add('bg-black/10');
        demoToggle.classList.remove('bg-black');
        demoKnob.classList.remove('translate-x-5');

        scoreNumber.textContent = '84';
        scoreRing.style.strokeDashoffset = '72';
        momentumBar.classList.remove('w-[78%]');
        momentumBar.classList.add('w-[55%]');
        momentumLabel.textContent = '55%';
        showToast('Demo mode', 'Back to default preview.');
      }
    }

    let demoOn = false;
    demoToggle.addEventListener('click', () => {
      demoOn = !demoOn;
      setDemo(demoOn);
    });

    // Footer buttons
    document.getElementById('mailBtn').addEventListener('click', () => showToast('Contact', 'Email: hello@taska.example (demo)'));
    document.getElementById('twitterBtn').addEventListener('click', () => showToast('Social', 'Twitter link (demo).'));
    document.getElementById('linkedinBtn').addEventListener('click', () => showToast('Social', 'LinkedIn link (demo).'));

    // Brand click -> scroll top
    document.getElementById('brandBtn').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_55%)]"></div>
<div className="absolute -top-24 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full blur-3xl opacity-70" style={{background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 55%), radial-gradient(circle at 70% 60%, rgba(16,185,129,0.10), transparent 55%), radial-gradient(circle at 40% 80%, rgba(168,85,247,0.10), transparent 55%)'}}>
</div>
</div>

<div className="relative flex min-h-screen flex-col">

<nav className="relative z-30 mx-auto w-full max-w-7xl px-6 sm:px-8 py-5 sm:py-6">
<div className="flex items-center justify-between">
<button className="group flex items-center gap-2 cursor-pointer select-none" id="brandBtn">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.14)] ring-1 ring-black/10">
<span className="text-sm font-semibold tracking-tight">T</span>
</div>
<div className="flex flex-col items-start leading-none">
<span className="text-lg sm:text-xl font-semibold tracking-tight">Taska</span>
<span className="text-xs text-black/40 font-medium tracking-tight">focus • plan • ship</span>
</div>
</button>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-black/50">
<button className="hover:text-black transition-colors" data-scrollto="#features">Features</button>
<button className="hover:text-black transition-colors" data-scrollto="#work">How it works</button>
<button className="hover:text-black transition-colors" data-scrollto="#footer">Contact</button>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="text-xs sm:text-sm font-medium text-black/50 hover:text-black transition-colors px-4 py-2 rounded-full hover:bg-black/5" id="loginBtn">
            Login
          </button>
<button className="bg-black text-white px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-black/90 transition-colors shadow-[0_8px_24px_rgba(0,0,0,0.14)] ring-1 ring-black/10" id="registerBtn">
            Register
          </button>
</div>
</div>
</nav>

<main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 sm:px-8 text-center">
<div className="relative w-full max-w-3xl">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] max-w-5xl h-[28rem] pointer-events-none -z-10" style={{maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 65%)'}}>
<canvas className="w-full h-full block" id="asciiCanvas"></canvas>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-xl px-3 py-1.5 ring-1 ring-black/5 shadow-sm">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
<iconify-icon className="text-white" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="text-xs font-medium text-black/60">Build momentum with a daily system</span>
<span className="hidden sm:inline text-xs font-medium text-black/30">•</span>
<button className="hidden sm:inline text-xs font-medium text-black hover:text-black/70 transition-colors" data-scrollto="#features">
            Explore
          </button>
</div>
<h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-black">
          Achieve your goals.
        </h1>
<p className="mt-5 text-base sm:text-lg text-black/45 font-light leading-relaxed max-w-xl mx-auto">
          Become the best version of yourself — with tasks, clarity, and a score that keeps you honest.
        </p>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
<div className="relative group">
<div className="absolute -inset-1 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition duration-500" style={{background: 'linear-gradient(90deg, rgba(0,0,0,0.08), rgba(0,0,0,0.14), rgba(0,0,0,0.08))'}}></div>
<button className="relative bg-black text-white px-8 sm:px-10 py-3 rounded-full text-xs sm:text-sm font-medium shadow-[0_12px_34px_rgba(0,0,0,0.16)] ring-1 ring-black/10 hover:bg-black/90 transition-colors" id="joinBtn">
              Join
            </button>
</div>
<button className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-black/70 hover:text-black transition-colors bg-white/50 hover:bg-white/70 backdrop-blur-xl ring-1 ring-black/5 shadow-sm" data-scrollto="#features">
            See features
          </button>
</div>
<div className="mt-10 flex items-center justify-center gap-6 text-xs text-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/60 ring-1 ring-black/5">
<iconify-icon className="text-black/60" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="font-medium">No noise</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/60 ring-1 ring-black/5">
<iconify-icon className="text-black/60" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="font-medium">Privacy-first</span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/60 ring-1 ring-black/5">
<iconify-icon className="text-black/60" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="font-medium">Smart parsing</span>
</div>
</div>
</div>
</main>

<section className="relative z-20 w-full pb-24 sm:pb-32 pt-12 sm:pt-16" id="features">
<div className="mx-auto max-w-6xl px-6 sm:px-8">
<div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black">Features that feel effortless</h2>
<p className="mt-2 text-sm sm:text-base text-black/45 font-light max-w-2xl">
              Lightweight UI, subtle guidance, and small interactions that help you keep moving.
            </p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-black/40">Demo mode</span>
<button aria-pressed="false" className="relative h-7 w-12 rounded-full bg-black/10 ring-1 ring-black/10 transition-colors" id="demoToggle">
<span className="absolute top-1 left-1 h-5 w-5 rounded-full bg-white shadow ring-1 ring-black/10 transition-all" id="demoKnob"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr opacity-0 translate-y-10 transition-all duration-700 ease-out" id="featuresGrid">

<div className="md:col-span-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 md:p-10 border border-black/10 shadow-[0_6px_26px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-500 group overflow-hidden">
<div className="mb-6 md:w-2/3">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
<iconify-icon className="text-black/70" icon="solar:checklist-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Task Management</h3>
</div>
<p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-black/45">
                Organize projects, set priorities, and track execution without friction.
              </p>
</div>
<div className="mt-auto relative h-44 sm:h-48 w-full flex items-end justify-end overflow-hidden rounded-3xl">
<div className="absolute -right-10 -bottom-10 h-44 w-44 rounded-full blur-2xl opacity-60" style={{background: 'radial-gradient(circle at 30% 30%, rgba(16,185,129,0.22), transparent 60%)'}}></div>
<div className="absolute right-0 bottom-0 w-[88%] h-36 bg-white/60 backdrop-blur-md rounded-tl-[2rem] border-t border-l border-black/10 p-5 sm:p-6 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
<div className="flex flex-col space-y-4">
<div className="flex items-center gap-4 bg-white/80 p-3 rounded-2xl border border-black/5">
<iconify-icon className="text-black/25 text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="h-1.5 bg-black/10 rounded-full w-40"></div>
<span className="ml-auto text-xs font-medium text-black/30">done</span>
</div>
<div className="flex items-center gap-4 bg-white p-3 rounded-2xl border border-black/5 shadow-sm relative overflow-hidden">
<div className="relative h-6 w-6">
<div className="absolute inset-0 rounded-full border-2 border-black/20 group-hover:border-emerald-500/80 transition-colors duration-300"></div>
<iconify-icon className="absolute inset-0 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300" icon="solar:check-circle-linear" style={{strokeWidth: '1.5', transform: 'scale(0.7)'}}></iconify-icon>
</div>
<div className="relative h-1.5 w-32 bg-black/5 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-0 bg-emerald-400/90 group-hover:w-full transition-all duration-700 ease-out delay-150"></div>
</div>
<span className="ml-auto text-xs font-medium text-black/40">in progress</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 md:p-10 border border-black/10 shadow-[0_6px_26px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-500 group">
<div className="mb-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
<iconify-icon className="text-black/70" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Daily Score</h3>
</div>
<p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-black/45">
                A holistic view of readiness based on sleep, focus, and activity.
              </p>
</div>
<div className="mt-auto relative w-full flex items-center justify-center pt-6 pb-2">
<svg aria-hidden="true" className="absolute w-36 h-36 -rotate-90" viewbox="0 0 100 100">
<circle className="opacity-70" cx="50" cy="50" fill="none" r="42" stroke="rgba(0,0,0,0.06)" strokeWidth="6"></circle>
<circle className="transition-all duration-1000 ease-out group-hover:stroke-dashoffset-[42]" cx="50" cy="50" fill="none" id="scoreRing" r="42" stroke="rgba(16,185,129,0.95)" stroke-dasharray="264" stroke-dashoffset="72" strokeLinecap="round" strokeWidth="6"></circle>
</svg>
<div className="relative z-10 flex flex-col items-center">
<span className="text-5xl font-medium tracking-tight text-[#111827] transition-transform duration-500 group-hover:scale-[1.04]" id="scoreNumber">84</span>
<span className="mt-1 text-xs font-medium text-black/40">today</span>
</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-2xl bg-white/60 ring-1 ring-black/5 px-3 py-2">
<div className="text-black/35 font-medium">Sleep</div>
<div className="mt-1 font-semibold text-black/70">7.6h</div>
</div>
<div className="rounded-2xl bg-white/60 ring-1 ring-black/5 px-3 py-2">
<div className="text-black/35 font-medium">Focus</div>
<div className="mt-1 font-semibold text-black/70">62%</div>
</div>
<div className="rounded-2xl bg-white/60 ring-1 ring-black/5 px-3 py-2">
<div className="text-black/35 font-medium">Move</div>
<div className="mt-1 font-semibold text-black/70">5.1k</div>
</div>
</div>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 md:p-10 border border-black/10 shadow-[0_6px_26px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-500 group">
<div className="mb-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
<iconify-icon className="text-black/70" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Intelligent Parsing</h3>
</div>
<p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-black/45">
                Type naturally. Dates and tags are recognized and organized automatically.
              </p>
</div>
<div className="mt-auto">
<div className="w-full bg-white/60 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-black/40 border border-black/10 shadow-sm" style={{fontFamily: '\'JetBrains Mono\', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
<span className="text-black/35">Call John</span>
<span className="relative inline-block px-1">
<span className="absolute inset-0 rounded-md bg-blue-200/0 group-hover:bg-blue-200/45 transition-all duration-500"></span>
<span className="relative text-black/40 group-hover:text-blue-700 transition-colors duration-300">@tomorrow</span>
</span>
<span className="text-black/35">regarding</span>
<span className="relative inline-block px-1">
<span className="absolute inset-0 rounded-md bg-purple-200/0 group-hover:bg-purple-200/45 transition-all duration-500 delay-150"></span>
<span className="relative text-black/40 group-hover:text-purple-700 transition-colors duration-300 delay-150">#design</span>
</span>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black/50 ring-1 ring-black/5">
<iconify-icon className="text-black/50" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Tomorrow
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black/50 ring-1 ring-black/5">
<iconify-icon className="text-black/50" icon="solar:hashtag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Design
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-black/50 ring-1 ring-black/5">
<iconify-icon className="text-black/50" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  John
                </span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 md:p-10 border border-black/10 shadow-[0_6px_26px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-500 group overflow-hidden flex flex-col md:flex-row gap-8" id="work">
<div className="md:w-1/2 flex flex-col justify-center relative z-10">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-black/5 ring-1 ring-black/10">
<iconify-icon className="text-black/70" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Goal Decomposition</h3>
</div>
<p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-black/45">
                Turn abstract objectives into clear steps you can execute today.
              </p>
<button className="mt-6 inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-black hover:text-black/60 transition-colors w-fit" id="seeHowBtn">
                See how it works
                <iconify-icon className="text-black/70 transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="mt-6 flex items-center gap-3 text-xs text-black/40">
<div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 ring-1 ring-black/5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80"></span>
<span className="font-medium">Actionable</span>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 ring-1 ring-black/5">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500/80"></span>
<span className="font-medium">Fast</span>
</div>
</div>
</div>
<div className="md:w-1/2 relative flex items-center justify-center">
<div className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.20), transparent 60%)'}}></div>
<div className="w-full max-w-xs space-y-3 p-4">
<div className="bg-white border border-black/10 px-4 py-3 rounded-2xl shadow-sm flex justify-between items-center relative z-10">
<span className="font-medium text-xs sm:text-sm text-black/80">Launch Product</span>
<iconify-icon className="text-black" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col space-y-2.5 pl-6 border-l border-black/10 ml-5 relative">
<div className="bg-white/80 border border-black/10 text-black/50 text-xs px-3.5 py-2.5 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.04)] relative transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out before:content-[''] before:w-4 before:h-px before:bg-black/10 before:absolute before:left-[-1.05rem] before:top-1/2">
                    Wireframing
                  </div>
<div className="bg-white/80 border border-black/10 text-black/50 text-xs px-3.5 py-2.5 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.04)] relative transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-out before:content-[''] before:w-4 before:h-px before:bg-black/10 before:absolute before:left-[-1.05rem] before:top-1/2">
                    Copywriting
                  </div>
<div className="bg-white/80 border border-black/10 text-black/50 text-xs px-3.5 py-2.5 rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.04)] relative transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 ease-out before:content-[''] before:w-4 before:h-px before:bg-black/10 before:absolute before:left-[-1.05rem] before:top-1/2">
                    Development
                  </div>
</div>
</div>
</div>
</div>

<div className="bg-white/40 backdrop-blur-xl rounded-[2.5rem] p-7 sm:p-8 md:p-10 border border-black/10 shadow-[0_6px_26px_rgba(0,0,0,0.04)] hover:bg-white/70 transition-colors duration-500">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">Ready to start?</h3>
<p className="mt-3 text-xs sm:text-sm font-light leading-relaxed text-black/45">
              Create an account and get your first plan in under a minute.
            </p>
<button className="mt-6 w-full bg-black text-white rounded-2xl py-3 text-xs sm:text-sm font-medium shadow-[0_10px_28px_rgba(0,0,0,0.16)] hover:bg-black/90 transition-colors ring-1 ring-black/10" id="ctaBtn">
              Create account
            </button>
<div className="mt-5 rounded-2xl bg-white/60 ring-1 ring-black/5 p-4">
<div className="flex items-center justify-between text-xs text-black/45 font-medium">
<span>Week 1</span>
<span className="text-black/30">Momentum</span>
</div>
<div className="mt-3 h-2 w-full rounded-full bg-black/5 overflow-hidden">
<div className="h-full w-[55%] rounded-full" id="momentumBar" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.85), rgba(59,130,246,0.75))'}}></div>
</div>
<div className="mt-3 flex items-center justify-between text-xs text-black/35">
<span>Consistency</span>
<span className="font-semibold text-black/60" id="momentumLabel">55%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-20 w-full py-8 border-t border-black/10 bg-[#F5F5F7]/80 backdrop-blur-sm" id="footer">
<div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-black/40">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-2xl bg-black text-white ring-1 ring-black/10 shadow-[0_10px_26px_rgba(0,0,0,0.14)]">
<span className="text-xs font-semibold tracking-tight">T</span>
</div>
<div className="flex flex-col leading-none">
<span className="font-medium text-black/60">Taska Inc.</span>
<span>© 2026 All rights reserved.</span>
</div>
</div>
<div className="flex items-center gap-5 font-medium">
<a className="hover:text-black/70 transition-colors" href="#">Privacy</a>
<a className="hover:text-black/70 transition-colors" href="#">Terms</a>
<a className="hover:text-black/70 transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition-colors" id="mailBtn">
<iconify-icon className="text-black/60" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition-colors" id="twitterBtn">
<iconify-icon className="text-black/60" icon="solar:widget-4-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition-colors" id="linkedinBtn">
<iconify-icon className="text-black/60" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</footer>
</div>

<div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="flex items-start gap-3 rounded-2xl bg-white/80 backdrop-blur-xl px-4 py-3 ring-1 ring-black/10 shadow-[0_18px_40px_rgba(0,0,0,0.16)] max-w-md">
<div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-black/5 ring-1 ring-black/10">
<iconify-icon className="text-black/60" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-black/80" id="toastTitle">Saved</div>
<div className="mt-0.5 text-xs text-black/45" id="toastDesc">Your changes were stored locally.</div>
</div>
<button className="text-xs font-semibold text-black/40 hover:text-black/70 transition-colors" id="toastClose">Close</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modalOverlay">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
<div className="relative mx-auto flex min-h-full max-w-xl items-center justify-center px-6 py-10">
<div className="w-full rounded-[2.5rem] bg-white/80 backdrop-blur-xl ring-1 ring-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.26)] overflow-hidden">
<div className="flex items-center justify-between px-7 sm:px-8 py-6 border-b border-black/10">
<div>
<div className="text-lg sm:text-xl font-semibold tracking-tight text-black" id="modalTitle">Welcome</div>
<div className="mt-1 text-xs sm:text-sm text-black/45 font-light" id="modalSubtitle">Sign in to continue.</div>
</div>
<button className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 ring-1 ring-black/5 hover:bg-white/80 transition-colors" id="modalClose">
<iconify-icon className="text-black/60" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<form className="px-7 sm:px-8 py-6" id="modalForm">
<div className="grid grid-cols-1 gap-4">
<label className="text-xs font-medium text-black/60">
              Email
              <input className="mt-2 w-full rounded-2xl bg-white/70 ring-1 ring-black/10 px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none focus:ring-black/20" id="emailInput" placeholder="you@domain.com" required="" type="email"/>
</label>
<label className="text-xs font-medium text-black/60">
              Password
              <input className="mt-2 w-full rounded-2xl bg-white/70 ring-1 ring-black/10 px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none focus:ring-black/20" id="passwordInput" placeholder="••••••••" required="" type="password"/>
</label>
<div className="hidden" id="nameRow">
<label className="text-xs font-medium text-black/60">
                Name
                <input className="mt-2 w-full rounded-2xl bg-white/70 ring-1 ring-black/10 px-4 py-3 text-sm text-black placeholder:text-black/30 outline-none focus:ring-black/20" id="nameInput" placeholder="Your name" type="text"/>
</label>
</div>
</div>
<button className="mt-6 w-full rounded-2xl bg-black text-white py-3 text-xs sm:text-sm font-medium shadow-[0_12px_30px_rgba(0,0,0,0.16)] hover:bg-black/90 transition-colors ring-1 ring-black/10" id="submitBtn" type="submit">
            Continue
          </button>
<div className="mt-4 flex items-center justify-between text-xs text-black/40">
<button className="font-medium hover:text-black/70 transition-colors" id="switchMode" type="button">
              Switch
            </button>
<button className="font-medium hover:text-black/70 transition-colors" id="forgotBtn" type="button">
              Forgot password
            </button>
</div>
<div className="mt-5 rounded-2xl bg-white/60 ring-1 ring-black/5 p-4">
<div className="flex items-center gap-2 text-xs text-black/45">
<iconify-icon className="text-black/60" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium">We store demo data locally in your browser.</span>
</div>
</div>
</form>
</div>
</div>
</div>


    </>
  );
}
