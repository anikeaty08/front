import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Init icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Fonts
      document.body.style.fontFamily = "'IBM Plex Sans', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";

      // Time-based background tuning for subtle mood
      (function setTimeMood(){
        const hour = new Date().getHours();
        const el = document.getElementById('bg');
        let overlay = '';
        if (hour >= 5 && hour < 11) {
          overlay = 'radial-gradient(120rem 60rem at 10% 0%, rgba(253,224,71,0.04), transparent 55%)';
        } else if (hour >= 11 && hour < 17) {
          overlay = 'radial-gradient(120rem 60rem at 90% 10%, rgba(34,197,94,0.04), transparent 55%)';
        } else if (hour >= 17 && hour < 21) {
          overlay = 'radial-gradient(120rem 60rem at 50% 100%, rgba(168,85,247,0.05), transparent 55%)';
        } else {
          overlay = 'radial-gradient(120rem 60rem at 50% 100%, rgba(14,165,233,0.04), transparent 55%)';
        }
        const layer = el.firstElementChild;
        layer.style.backgroundImage = overlay + ',' + layer.style.backgroundImage;
      })();

      // Theme utilities
      const cssEscape = (str) => str.replace(/([!\"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~])/g, '\\$1');
      const themeMap = [
        ['bg-[#0a0b0d]','bg-[#f7f8fb]'],
        ['text-slate-200','text-slate-800'],
        ['bg-white/5','bg-white'],
        ['bg-white/10','bg-slate-100'],
        ['border-white/10','border-slate-200'],
        ['ring-white/10','ring-slate-200'],
        ['ring-white/15','ring-slate-200'],
        ['text-slate-300','text-slate-600'],
        ['text-slate-400','text-slate-500'],
        ['text-white/90','text-slate-900'],
        ['text-white/95','text-slate-900'],
        ['text-white/50','text-slate-500'],
        ['bg-[#0b0c0f]','bg-white'],
        ['hover:bg-white/5','hover:bg-slate-100'],
        ['hover:bg-white/15','hover:bg-slate-200'],
        ['hover:text-white','hover:text-slate-900'],
        ['border-white/10','border-slate-200'],
        ['ring-white/10','ring-slate-200']
      ];

      function applyTheme(theme) {
        // Swap classes directionally
        themeMap.forEach(([dark, light]) => {
          if (theme === 'light') {
            document.querySelectorAll('.' + cssEscape(dark)).forEach(el => {
              el.classList.remove(dark);
              el.classList.add(light);
            });
          } else {
            document.querySelectorAll('.' + cssEscape(light)).forEach(el => {
              el.classList.remove(light);
              el.classList.add(dark);
            });
          }
        });

        // Body base text/bg
        const body = document.body;
        if (theme === 'light') {
          body.classList.remove('bg-[#0a0b0d]','text-slate-200');
          body.classList.add('bg-[#f7f8fb]','text-slate-800');
        } else {
          body.classList.remove('bg-[#f7f8fb]','text-slate-800');
          body.classList.add('bg-[#0a0b0d]','text-slate-200');
        }

        // Primary "Add" buttons
        const primaryBtns = [document.getElementById('incrementBtn'), ...document.querySelectorAll('[data-inc]')];
        primaryBtns.forEach(btn => {
          if (!btn) return;
          if (theme === 'light') {
            btn.classList.remove('bg-white','text-[#0a0b0d]','hover:bg-slate-100');
            btn.classList.add('bg-slate-900','text-white','hover:bg-slate-800');
          } else {
            btn.classList.remove('bg-slate-900','text-white','hover:bg-slate-800');
            btn.classList.add('bg-white','text-[#0a0b0d]','hover:bg-slate-100');
          }
        });

        // Mic icon contrast
        const micIcon = document.getElementById('micIcon');
        if (micIcon) {
          if (theme === 'light') {
            micIcon.classList.remove('text-white');
            micIcon.classList.add('text-slate-900');
          } else {
            micIcon.classList.remove('text-slate-900');
            micIcon.classList.add('text-white');
          }
        }

        // Logo mark contrast
        const logoMark = document.getElementById('logoMark');
        if (logoMark) {
          if (theme === 'light') {
            logoMark.classList.remove('text-white');
            logoMark.classList.add('text-slate-900');
          } else {
            logoMark.classList.remove('text-slate-900');
            logoMark.classList.add('text-white');
          }
        }

        // Divider color
        document.querySelectorAll('.' + cssEscape('border-white/10')).forEach(el => {
          if (theme === 'light') {
            el.classList.remove('border-white/10');
            el.classList.add('border-slate-200');
          }
        });
        if (theme === 'dark') {
          document.querySelectorAll('.' + cssEscape('border-slate-200')).forEach(el => {
            el.classList.remove('border-slate-200');
            el.classList.add('border-white/10');
          });
        }

        // Update toggle icon
        const themeIcon = document.getElementById('themeToggleIcon');
        if (themeIcon) {
          themeIcon.setAttribute('data-lucide', theme === 'light' ? 'moon' : 'sun');
        }
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Data Model
      const phrases = [
        { id: 'subhanallah', ar: 'سُبْحَانَ ٱللَّٰهِ', en: 'Subhanallah' },
        { id: 'lailaha', ar: 'لَا إِلَٰهَ إِلَّا ٱللَّٰهُ', en: 'La ilaha illa Allah' },
        { id: 'alhamdulillah', ar: 'ٱلْحَمْدُ لِلَّٰهِ', en: 'Alhamdulillah' },
        { id: 'allahuakbar', ar: 'ٱللَّٰهُ أَكْبَرُ', en: 'Allahu Akbar' },
      ];
      const counts = {};
      let activeId = localStorage.getItem('dhikr-active') || 'subhanallah';
      let soundOn = JSON.parse(localStorage.getItem('dhikr-sound') || 'false');

      // Elements
      const activeArabic = document.getElementById('activeArabic');
      const activeTrans = document.getElementById('activeTrans');
      const activeCountStack = document.getElementById('activeCountStack');
      const activeCountCurrent = document.getElementById('activeCountCurrent');
      const activeCountNext = document.getElementById('activeCountNext');

      const incrementBtn = document.getElementById('incrementBtn');
      const decrementBtn = document.getElementById('decrementBtn');
      const resetActiveBtn = document.getElementById('resetActiveBtn');
      const switchDirBtn = document.getElementById('switchDirBtn');

      const micBtn = document.getElementById('micBtn');
      const micPulse = document.getElementById('micPulse');
      const voiceStatus = document.getElementById('voiceStatus');
      const voiceText = document.getElementById('voiceText');
      const vu = document.getElementById('vu');

      const settingsBtn = document.getElementById('settingsBtn');
      const prefsModal = document.getElementById('prefsModal');
      const closePrefs = document.getElementById('closePrefs');
      const langSelect = document.getElementById('langSelect');
      const toggleSound = document.getElementById('toggleSound');
      const prefsSave = document.getElementById('prefsSave');

      const voiceModal = document.getElementById('voiceModal');
      const voiceHelpBtn = document.getElementById('voiceHelpBtn');
      const closeVoice = document.getElementById('closeVoice');

      const exportBtn = document.getElementById('exportBtn');
      const importBtn = document.getElementById('importBtn');
      const importFile = document.getElementById('importFile');

      const themeToggle = document.getElementById('themeToggle');

      // Setup cards
      const cardNodes = Array.from(document.querySelectorAll('[data-dhikr]'));
      const cardMap = {};
      cardNodes.forEach(card => {
        const id = card.getAttribute('data-dhikr');
        const stack = card.querySelector('[data-stack]');
        const current = card.querySelector('[data-current]');
        const next = card.querySelector('[data-next]');
        const inc = card.querySelector('[data-inc]');
        const dec = card.querySelector('[data-dec]');
        const details = card.querySelector('details');
        cardMap[id] = { card, stack, current, next, inc, dec, details };
      });

      // Load counts
      phrases.forEach(p => {
        counts[p.id] = parseInt(localStorage.getItem('dhikr-count-' + p.id) || '0', 10);
        // init UI
        const { current, next } = cardMap[p.id];
        current.textContent = counts[p.id];
        next.textContent = counts[p.id] + 1;
      });

      // Active UI Setup
      function setActive(id) {
        activeId = id;
        localStorage.setItem('dhikr-active', id);
        const p = phrases.find(x => x.id === id);
        activeArabic.textContent = p.ar;
        activeTrans.textContent = p.en;
        activeCountCurrent.textContent = counts[id];
        activeCountNext.textContent = counts[id] + 1;
        activeCountStack.style.transform = 'translateY(0)';
        // highlight active card
        for (const k in cardMap) {
          const c = cardMap[k].card;
          if (k === id) {
            c.classList.add('ring-1','ring-emerald-400/30');
          } else {
            c.classList.remove('ring-1','ring-emerald-400/30');
          }
        }
        // disable decrement if zero
        decrementBtn.disabled = counts[id] <= 0;
      }

      function saveCount(id) {
        localStorage.setItem('dhikr-count-' + id, counts[id]);
      }

      function playTick() {
        if (!soundOn) return;
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = 520;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0.0001, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
        o.start();
        o.stop(ctx.currentTime + 0.09);
      }

      function animateStack(stackEl, currentEl, nextEl, newVal) {
        nextEl.textContent = newVal;
        requestAnimationFrame(() => {
          stackEl.style.transform = 'translateY(-100%)';
          stackEl.addEventListener('transitionend', function handler() {
            stackEl.removeEventListener('transitionend', handler);
            currentEl.textContent = newVal;
            stackEl.style.transition = 'none';
            stackEl.style.transform = 'translateY(0)';
            void stackEl.offsetHeight; // reflow
            stackEl.style.transition = '';
          }, { once: true });
        });
      }

      function increment(id, step = 1) {
        counts[id] += step;
        saveCount(id);
        // active view
        if (activeId === id) {
          animateStack(activeCountStack, activeCountCurrent, activeCountNext, counts[id]);
          decrementBtn.disabled = counts[id] <= 0;
        }
        // card
        const { stack, current, next } = cardMap[id];
        animateStack(stack, current, next, counts[id]);
        playTick();
      }

      function decrement(id, step = 1) {
        counts[id] = Math.max(0, counts[id] - step);
        saveCount(id);
        if (activeId === id) {
          animateStack(activeCountStack, activeCountCurrent, activeCountNext, counts[id]);
          decrementBtn.disabled = counts[id] <= 0;
        }
        const { stack, current, next } = cardMap[id];
        animateStack(stack, current, next, counts[id]);
      }

      // Bind card controls
      phrases.forEach(p => {
        const { inc, dec, details, card } = cardMap[p.id];
        inc.addEventListener('click', () => increment(p.id, 1));
        dec.addEventListener('click', () => decrement(p.id, 1));
        details?.addEventListener('click', (e) => {
          const t = e.target;
          if (t.matches('[data-action="select"]')) {
            setActive(p.id);
            details.open = false;
          }
          if (t.matches('[data-action="reset"]')) {
            counts[p.id] = 0;
            saveCount(p.id);
            const { stack, current, next } = cardMap[p.id];
            current.textContent = 0;
            next.textContent = 1;
            stack.style.transform = 'translateY(0)';
            if (activeId === p.id) {
              activeCountCurrent.textContent = 0;
              activeCountNext.textContent = 1;
              decrementBtn.disabled = true;
            }
            details.open = false;
          }
        });
        // Quick select by clicking header area
        card.addEventListener('click', (e) => {
          const tag = e.target.tagName.toLowerCase();
          if (tag === 'button' || tag === 'i' || tag === 'summary' || e.target.hasAttribute('data-action')) return;
          setActive(p.id);
        });
      });

      // Active controls
      incrementBtn.addEventListener('click', () => increment(activeId, 1));
      decrementBtn.addEventListener('click', () => decrement(activeId, 1));
      resetActiveBtn.addEventListener('click', () => {
        counts[activeId] = 0;
        saveCount(activeId);
        activeCountCurrent.textContent = 0;
        activeCountNext.textContent = 1;
        cardMap[activeId].current.textContent = 0;
        cardMap[activeId].next.textContent = 1;
        decrementBtn.disabled = true;
      });

      // RTL/LTR toggle for active Arabic display
      switchDirBtn.addEventListener('click', () => {
        const dir = activeArabic.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
        activeArabic.setAttribute('dir', dir);
      });

      // Preferences
      settingsBtn.addEventListener('click', () => {
        langSelect.value = localStorage.getItem('dhikr-lang') || 'ar';
        toggleSound.textContent = soundOn ? 'On' : 'Off';
        prefsModal.classList.remove('hidden');
        prefsModal.classList.add('flex');
      });
      closePrefs.addEventListener('click', () => {
        prefsModal.classList.add('hidden');
        prefsModal.classList.remove('flex');
      });
      toggleSound.addEventListener('click', () => {
        soundOn = !soundOn;
        toggleSound.textContent = soundOn ? 'On' : 'Off';
      });
      prefsSave.addEventListener('click', () => {
        localStorage.setItem('dhikr-lang', langSelect.value);
        localStorage.setItem('dhikr-sound', JSON.stringify(soundOn));
        prefsModal.classList.add('hidden');
        prefsModal.classList.remove('flex');
      });

      // Voice Help
      voiceHelpBtn.addEventListener('click', () => {
        voiceModal.classList.remove('hidden');
        voiceModal.classList.add('flex');
      });
      closeVoice.addEventListener('click', () => {
        voiceModal.classList.add('hidden');
        voiceModal.classList.remove('flex');
      });

      // Export / Import
      exportBtn.addEventListener('click', () => {
        const data = {};
        phrases.forEach(p => data[p.id] = counts[p.id]);
        const blob = new Blob([JSON.stringify({ counts: data }, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'dhikr-counts.json';
        a.click();
        URL.revokeObjectURL(url);
      });
      importBtn.addEventListener('click', () => importFile.click());
      importFile.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const text = await file.text();
        try {
          const json = JSON.parse(text);
          if (json && json.counts) {
            Object.entries(json.counts).forEach(([id, val]) => {
              if (counts[id] !== undefined) {
                counts[id] = Math.max(0, parseInt(val, 10) || 0);
                saveCount(id);
                const { current, next, stack } = cardMap[id];
                current.textContent = counts[id];
                next.textContent = counts[id] + 1;
                stack.style.transform = 'translateY(0)';
              }
            });
            setActive(activeId);
          }
        } catch (err) {
          console.error('Invalid file', err);
        }
        importFile.value = '';
      });

      // Voice Recognition
      let recognizing = false;
      let recognition = null;
      let vuTimer = null;

      function setVU(active) {
        if (vuTimer) clearInterval(vuTimer);
        const bars = Array.from(vu.children);
        bars.forEach(b => b.style.height = active ? (2 + Math.random() * 20) + 'px' : '8px');
        if (active) {
          vuTimer = setInterval(() => {
            bars.forEach((b, i) => {
              const target = 6 + Math.random() * 24;
              b.style.height = target + 'px';
              b.style.backgroundColor = 'rgba(52,211,153,' + (0.35 + Math.random() * 0.4) + ')';
            });
          }, 120);
        }
      }
      function setMicState(state) {
        // states: idle, listening, processing
        if (state === 'idle') {
          voiceStatus.textContent = 'Idle';
          micPulse.style.boxShadow = 'none';
          micPulse.style.opacity = 0;
          setVU(false);
        } else if (state === 'listening') {
          voiceStatus.textContent = 'Listening…';
          micPulse.style.opacity = 1;
          micPulse.style.boxShadow = '0 0 0 0.5rem rgba(16,185,129,0.12), 0 0 0 1rem rgba(16,185,129,0.06)';
          setVU(true);
        } else if (state === 'processing') {
          voiceStatus.textContent = 'Processing…';
          micPulse.style.opacity = 1;
          micPulse.style.boxShadow = '0 0 0 0.5rem rgba(99,102,241,0.12), 0 0 0 1rem rgba(99,102,241,0.06)';
          setVU(false);
        }
      }

      function normalizeArabic(str) {
        return str
          .replace(/[\u064B-\u0652]/g, '') // remove tashkeel
          .replace(/[إأآٱ]/g, 'ا')
          .replace(/ى/g, 'ي')
          .replace(/ؤ/g, 'و')
          .replace(/ئ/g, 'ي')
          .replace(/ة/g, 'ه')
          .replace(/ٱ/g, 'ا')
          .trim();
      }

      function detectPhrase(text) {
        const tRaw = text || '';
        const t = tRaw.toLowerCase().trim();
        const tAr = normalizeArabic(tRaw);

        const patterns = [
          { id: 'subhanallah', ar: ['سبحان الله','سبحانالل'], en: ['subhanallah'] },
          { id: 'alhamdulillah', ar: ['الحمد لله','الحمدلله'], en: ['alhamdulillah','alhamd'] },
          { id: 'allahuakbar', ar: ['الله اكبر','اللهاكبر'], en: ['allahu akbar','allahuakbar','akbar'] },
          { id: 'lailaha', ar: ['لا اله الا الله','لااله الا الله','لااله الاالله'], en: ['la ilaha illa allah','la ilaha illallah','la ilaha'] },
        ];

        // Count occurrences for each pattern
        for (const p of patterns) {
          // Arabic detection
          for (const key of p.ar) {
            const k = normalizeArabic(key);
            const re = new RegExp(k, 'g');
            const matches = (tAr.match(re) || []).length;
            if (matches > 0) return { id: p.id, times: matches };
          }
          // English/transliteration detection
          for (const key of p.en) {
            const re = new RegExp(key, 'g');
            const matches = (t.match(re) || []).length;
            if (matches > 0) return { id: p.id, times: matches };
          }
        }
        return null;
      }

      function initRecognition() {
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SR) {
          voiceStatus.textContent = 'Voice not supported';
          micBtn.disabled = true;
          return null;
        }
        const rec = new SR();
        rec.lang = localStorage.getItem('dhikr-lang') || 'ar';
        rec.interimResults = true;
        rec.continuous = true;

        rec.onstart = () => {
          recognizing = true;
          setMicState('listening');
          voiceText.textContent = 'Listening…';
        };
        rec.onresult = (event) => {
          let interim = '';
          let finalText = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalText += transcript + ' ';
            else interim += transcript;
          }
          if (interim) voiceText.textContent = interim;
          if (finalText) {
            setMicState('processing');
            voiceText.textContent = finalText.trim();
            const detected = detectPhrase(finalText);
            if (detected) {
              increment(detected.id, detected.times);
              setActive(detected.id);
            }
            setTimeout(() => setMicState('listening'), 150);
          }
        };
        rec.onerror = (e) => {
          console.warn('Speech error:', e);
          voiceStatus.textContent = 'Error: ' + (e.error || 'unknown');
          setMicState('idle');
        };
        rec.onend = () => {
          recognizing = false;
          setMicState('idle');
        };
        return rec;
      }

      micBtn.addEventListener('click', () => {
        if (!recognition) recognition = initRecognition();
        if (!recognition) return;
        if (!recognizing) {
          recognition.lang = localStorage.getItem('dhikr-lang') || 'ar';
          try { recognition.start(); } catch {}
        } else {
          try { recognition.stop(); } catch {}
        }
      });

      // Init active
      setActive(activeId);

      // Theme: init and toggle
      let theme = localStorage.getItem('dhikr-theme') || 'light';
      applyTheme(theme);
      themeToggle.addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('dhikr-theme', theme);
        applyTheme(theme);
      });

      // Close modals on backdrop click
      [prefsModal, voiceModal].forEach(modal => {
        modal?.addEventListener('click', (e) => {
          if (e.target === modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
          }
        });
      });

      // Keyboard shortcuts
      window.addEventListener('keydown', (e) => {
        if (['INPUT','TEXTAREA','SELECT'].includes(e.target.tagName)) return;
        if (e.key === ' ') {
          e.preventDefault();
          increment(activeId, 1);
        } else if (e.key === 'ArrowUp') {
          increment(activeId, 1);
        } else if (e.key === 'ArrowDown') {
          decrement(activeId, 1);
        } else if (e.key === 'm') {
          micBtn.click();
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10" id="bg">
<div className="absolute inset-0" style="
        background-image:
          radial-gradient(80rem 40rem at 20% 10%, rgba(99,102,241,0.08), transparent 60%),
          radial-gradient(60rem 30rem at 80% 0%, rgba(34,197,94,0.06), transparent 60%),
          radial-gradient(60rem 35rem at 50% 80%, rgba(14,165,233,0.06), transparent 55%);
        ">
</div>

<div className="absolute inset-0 opacity-[0.08] mix-blend-screen" style="
        background-image:
          linear-gradient(transparent 0, rgba(255,255,255,0.06) 1px, transparent 1px),
          linear-gradient(90deg, transparent 0, rgba(255,255,255,0.06) 1px, transparent 1px);
        background-size: 24px 24px, 24px 24px;
        ">
</div>

<div className="absolute inset-0 opacity-[0.07]" style="
        background-image: url('data:image/svg+xml;utf8,&lt;svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'&gt;&lt;filter id='n'&gt;&lt;feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/&gt;&lt;/filter&gt;&lt;rect width='100%' height='100%' filter='url(%23n)' opacity='.35'/&gt;&lt;/svg&gt;');
        background-size: cover;
      "></div>
</div>

<div className="relative mx-auto max-w-7xl px-6 pt-8 pb-28 sm:px-8">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 backdrop-blur-sm">
<span className="text-[13px] tracking-tight font-medium text-white" id="logoMark">DK</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-200 tracking-tight">Dhikr</span>
<span className="text-xs text-slate-400">A sanctuary for remembrance</span>
</div>
</div>
<nav className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors">
<i className="h-4 w-4" data-lucide="book-open"></i>
<span className="hidden sm:inline">Guide</span>
</button>
<button className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors" id="settingsBtn">
<i className="h-4 w-4" data-lucide="sliders-horizontal"></i>
<span className="hidden sm:inline">Preferences</span>
</button>
<button className="group inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-3 00 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition-colors" id="themeToggle">
<i className="h-4 w-4" data-lucide="sun" id="themeToggleIcon"></i>
<span className="hidden sm:inline">Theme</span>
</button>
</nav>
</header>

<section className="mt-10 grid gap-6 lg:grid-cols-5">

<div className="lg:col-span-3">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition-transform will-change-transform hover:-translate-y-0.5" id="activeCard">

<div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity group-hover:opacity-100" style="
              background: radial-gradient(60rem 30rem at 20% -10%, rgba(99,102,241,0.08), transparent 50%),
                          radial-gradient(40rem 20rem at 90% 0%, rgba(34,197,94,0.06), transparent 50%);
            "></div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-500/70 ring-4 ring-emerald-500/10"></span>
                Active Dhikr
              </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="switchDirBtn">
<i className="h-4 w-4" data-lucide="type"></i>
                  RTL/LTR
                </button>
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="resetActiveBtn">
<i className="h-4 w-4" data-lucide="rotate-ccw"></i>
                  Reset
                </button>
</div>
</div>
<div className="mt-6 space-y-5">

<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white/90" dir="rtl" id="activeArabic" style={{fontFamily: '\'Cairo\', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'}}>
                سُبْحَانَ ٱللَّٰهِ
              </h1>

<p className="text-sm sm:text-base text-slate-400" id="activeTrans" style={{fontFamily: '\'IBM Plex Sans\', system-ui, -apple-system, Segoe UI, Roboto'}}>
                Subhanallah
              </p>

<div className="flex items-end justify-between">

<div className="relative">
<div className="text-slate-400 text-xs mb-2">Count</div>
<div className="overflow-hidden h-[56px] sm:h-[68px]">
<div className="flex flex-col transition-transform duration-500 ease-out will-change-transform" id="activeCountStack">
<span className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums text-white/95" id="activeCountCurrent" style={{fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '\'tnum\' 1'}}>0</span>
<span className="text-5xl sm:text-6xl font-semibold tracking-tight tabular-nums text-white/50" id="activeCountNext" style={{fontVariantNumeric: 'tabular-nums', fontFeatureSettings: '\'tnum\' 1'}}>1</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button aria-label="Decrement" className="inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition disabled:opacity-40" id="decrementBtn">
<i className="h-5 w-5" data-lucide="minus"></i>
</button>
<button aria-label="Increment" className="inline-flex h-12 px-6 items-center justify-center rounded-xl bg-white text-[#0a0b0d] font-medium ring-1 ring-white/10 hover:bg-slate-100 transition active:scale-[0.99]" id="incrementBtn">
<i className="h-5 w-5 mr-2" data-lucide="plus"></i>
                    Add
                  </button>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>

<div className="lg:col-span-2">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
<div className="flex items-center justify-between">
<div className="text-slate-300 text-sm">Voice Dhikr</div>
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="voiceHelpBtn">
<i className="h-4 w-4" data-lucide="info"></i>
                How it works
              </button>
</div>

<div className="mt-6 flex items-center gap-4">
<button className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition group" id="micBtn">

<span className="absolute inset-0 rounded-2xl opacity-0 transition" id="micPulse"></span>
<i className="h-7 w-7 text-white transition" data-lucide="mic" id="micIcon"></i>
</button>
<div className="flex-1">
<div className="text-sm text-slate-300" id="voiceStatus">Idle</div>
<div className="mt-1 line-clamp-1 text-xs text-slate-400" id="voiceText">Press the microphone to start.</div>

<div className="mt-3 flex h-8 items-end gap-[3px]" id="vu">

<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-3 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-4 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-3 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-3 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-5 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-3 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-4 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-3 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-2 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
<div className="h-5 w-1.5 rounded-sm bg-emerald-400/50 transition-all"></div>
</div>
</div>
</div>

<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-slate-400/70"></span> Idle</div>
<div className="text-[11px] text-slate-400 mt-1">Mic off</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-emerald-500/70"></span> Listening</div>
<div className="text-[11px] text-slate-400 mt-1">Say Dhikr</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-xs text-slate-300"><span className="h-2 w-2 rounded-full bg-indigo-500/70"></span> Processing</div>
<div className="text-[11px] text-slate-400 mt-1">Understanding</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</section>

<section className="mt-8">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:-translate-y-0.5 transition" data-dhikr="subhanallah">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<div className="text-[11px] uppercase tracking-widest text-slate-400">Dhikr</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white/90" dir="rtl" style={{fontFamily: '\'Cairo\', system-ui'}}>سُبْحَانَ ٱللَّٰهِ</h3>
<p className="text-xs text-slate-400" style={{fontFamily: '\'IBM Plex Sans\''}}>Subhanallah</p>
</div>
<details className="relative">
<summary aria-label="More" className="list-none cursor-pointer rounded-md p-1.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</summary>
<div className="absolute right-0 z-20 mt-2 w-36 rounded-lg border border-white/10 bg-[#0a0b0d] p-1.5 shadow-lg">
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white" data-action="select">Set Active</button>
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-rose-300 hover:bg-rose-400/10 hover:text-rose-200" data-action="reset">Reset</button>
</div>
</details>
</div>
<div className="mt-5 flex items-end justify-between">
<div>
<div className="text-slate-400 text-xs mb-1">Count</div>
<div className="overflow-hidden h-[40px]">
<div className="transition-transform duration-500 ease-out" data-stack="">
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/95" data-current="" style={{fontVariantNumeric: 'tabular-nums'}}>0</span>
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/50" data-next="" style={{fontVariantNumeric: 'tabular-nums'}}>1</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition" data-dec="">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<button className="inline-flex h-10 px-4 items-center justify-center rounded-lg bg-white text-[#0a0b0d] font-medium ring-1 ring-white/10 hover:bg-slate-100 transition active:scale-[0.99]" data-inc="">
<i className="h-4 w-4 mr-1.5" data-lucide="plus"></i>
                  Add
                </button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:-translate-y-0.5 transition" data-dhikr="lailaha">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<div className="text-[11px] uppercase tracking-widest text-slate-400">Dhikr</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white/90" dir="rtl" style={{fontFamily: '\'Cairo\', system-ui'}}>لَا إِلَٰهَ إِلَّا ٱللَّٰهُ</h3>
<p className="text-xs text-slate-400" style={{fontFamily: '\'IBM Plex Sans\''}}>La ilaha illa Allah</p>
</div>
<details className="relative">
<summary aria-label="More" className="list-none cursor-pointer rounded-md p-1.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</summary>
<div className="absolute right-0 z-20 mt-2 w-36 rounded-lg border border-white/10 bg-[#0a0b0d] p-1.5 shadow-lg">
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white" data-action="select">Set Active</button>
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-rose-300 hover:bg-rose-400/10 hover:text-rose-200" data-action="reset">Reset</button>
</div>
</details>
</div>
<div className="mt-5 flex items-end justify-between">
<div>
<div className="text-slate-400 text-xs mb-1">Count</div>
<div className="overflow-hidden h-[40px]">
<div className="transition-transform duration-500 ease-out" data-stack="">
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/95" data-current="" style={{fontVariantNumeric: 'tabular-nums'}}>0</span>
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/50" data-next="" style={{fontVariantNumeric: 'tabular-nums'}}>1</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition" data-dec="">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<button className="inline-flex h-10 px-4 items-center justify-center rounded-lg bg-white text-[#0a0b0d] font-medium ring-1 ring-white/10 hover:bg-slate-100 transition active:scale-[0.99]" data-inc="">
<i className="h-4 w-4 mr-1.5" data-lucide="plus"></i>
                  Add
                </button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:-translate-y-0.5 transition" data-dhikr="alhamdulillah">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<div className="text-[11px] uppercase tracking-widest text-slate-400">Dhikr</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white/90" dir="rtl" style={{fontFamily: '\'Cairo\', system-ui'}}>ٱلْحَمْدُ لِلَّٰهِ</h3>
<p className="text-xs text-slate-400" style={{fontFamily: '\'IBM Plex Sans\''}}>Alhamdulillah</p>
</div>
<details className="relative">
<summary aria-label="More" className="list-none cursor-pointer rounded-md p-1.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</summary>
<div className="absolute right-0 z-20 mt-2 w-36 rounded-lg border border-white/10 bg-[#0a0b0d] p-1.5 shadow-lg">
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white" data-action="select">Set Active</button>
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-rose-300 hover:bg-rose-400/10 hover:text-rose-200" data-action="reset">Reset</button>
</div>
</details>
</div>
<div className="mt-5 flex items-end justify-between">
<div>
<div className="text-slate-400 text-xs mb-1">Count</div>
<div className="overflow-hidden h-[40px]">
<div className="transition-transform duration-500 ease-out" data-stack="">
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/95" data-current="" style={{fontVariantNumeric: 'tabular-nums'}}>0</span>
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/50" data-next="" style={{fontVariantNumeric: 'tabular-nums'}}>1</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition" data-dec="">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<button className="inline-flex h-10 px-4 items-center justify-center rounded-lg bg-white text-[#0a0b0d] font-medium ring-1 ring-white/10 hover:bg-slate-100 transition active:scale-[0.99]" data-inc="">
<i className="h-4 w-4 mr-1.5" data-lucide="plus"></i>
                  Add
                </button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:-translate-y-0.5 transition" data-dhikr="allahuakbar">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<div className="text-[11px] uppercase tracking-widest text-slate-400">Dhikr</div>
<h3 className="mt-1 text-2xl font-semibold tracking-tight text-white/90" dir="rtl" style={{fontFamily: '\'Cairo\', system-ui'}}>ٱللَّٰهُ أَكْبَرُ</h3>
<p className="text-xs text-slate-400" style={{fontFamily: '\'IBM Plex Sans\''}}>Allahu Akbar</p>
</div>
<details className="relative">
<summary aria-label="More" className="list-none cursor-pointer rounded-md p-1.5 text-slate-300 hover:bg-white/5 hover:text-white transition">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</summary>
<div className="absolute right-0 z-20 mt-2 w-36 rounded-lg border border-white/10 bg-[#0a0b0d] p-1.5 shadow-lg">
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white" data-action="select">Set Active</button>
<button className="w-full text-left rounded-md px-2 py-1.5 text-sm text-rose-300 hover:bg-rose-400/10 hover:text-rose-200" data-action="reset">Reset</button>
</div>
</details>
</div>
<div className="mt-5 flex items-end justify-between">
<div>
<div className="text-slate-400 text-xs mb-1">Count</div>
<div className="overflow-hidden h-[40px]">
<div className="transition-transform duration-500 ease-out" data-stack="">
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/95" data-current="" style={{fontVariantNumeric: 'tabular-nums'}}>0</span>
<span className="block text-3xl font-semibold tracking-tight tabular-nums text-white/50" data-next="" style={{fontVariantNumeric: 'tabular-nums'}}>1</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/10 text-slate-300 hover:text-white hover:bg-white/5 transition" data-dec="">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<button className="inline-flex h-10 px-4 items-center justify-center rounded-lg bg-white text-[#0a0b0d] font-medium ring-1 ring-white/10 hover:bg-slate-100 transition active:scale-[0.99]" data-inc="">
<i className="h-4 w-4 mr-1.5" data-lucide="plus"></i>
                  Add
                </button>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>
</section>

<div className="mt-10 border-t border-white/10"></div>

<footer className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-xs text-slate-500">Counts are saved privately in your browser.</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="exportBtn">
<i className="h-4 w-4" data-lucide="download"></i>
            Export
          </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="importBtn">
<i className="h-4 w-4" data-lucide="upload"></i>
            Import
          </button>
</div>
</footer>
</div>

<input accept="application/json" className="hidden" id="importFile" type="file"/>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-6" id="prefsModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c0f] p-6">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white/90">Preferences</h4>
<button className="rounded-md p-1.5 text-slate-300 hover:text-white hover:bg-white/5 transition" id="closePrefs">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-5">
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-300">Voice Language</div>
<div className="text-xs text-slate-400">Select recognition language</div>
</div>
<select className="rounded-md bg-white/5 px-3 py-2 text-sm ring-1 ring-white/10 hover:bg-white/10 focus:outline-none" id="langSelect">
<option value="ar">Arabic (ar)</option>
<option value="en">English (en)</option>
</select>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-slate-300">Tap sound</div>
<div className="text-xs text-slate-400">Subtle click on increment</div>
</div>
<button className="rounded-md px-3 py-2 text-sm text-slate-300 ring-1 ring-white/10 hover:bg-white/5 hover:text-white transition" id="toggleSound">
              Off
            </button>
</div>
</div>
<div className="mt-6 flex justify-end gap-2">
<button className="rounded-md bg-white px-4 py-2 text-sm text-[#0b0c0f] ring-1 ring-white/10 hover:bg-slate-100 transition" id="prefsSave">Save</button>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-6" id="voiceModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c0f] p-6">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-white/90">Voice Dhikr</h4>
<button className="rounded-md p-1.5 text-slate-300 hover:text-white hover:bg-white/5 transition" id="closeVoice">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 space-y-4 text-sm text-slate-300">
<p>Speak any of the following to count automatically:</p>
<ul className="list-disc pl-5 text-slate-300/90">
<li dir="rtl" style={{fontFamily: '\'Cairo\''}}>سُبْحَانَ ٱللَّٰهِ</li>
<li dir="rtl" style={{fontFamily: '\'Cairo\''}}>ٱلْحَمْدُ لِلَّٰهِ</li>
<li dir="rtl" style={{fontFamily: '\'Cairo\''}}>ٱللَّٰهُ أَكْبَرُ</li>
<li dir="rtl" style={{fontFamily: '\'Cairo\''}}>لَا إِلَٰهَ إِلَّا ٱللَّٰهُ</li>
</ul>
<p>Also recognizes transliterations: “Subhanallah”, “Alhamdulillah”, “Allahu Akbar”, “La ilaha illa Allah”.</p>
</div>
<div className="mt-6 flex justify-end gap-2">
<button className="rounded-md bg-white px-4 py-2 text-sm text-[#0b0c0f] ring-1 ring-white/10 hover:bg-slate-100 transition">Got it</button>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
</div>
</div>


    </>
  );
}
