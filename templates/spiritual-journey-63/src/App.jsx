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



    // Init icons with stroke width 1.5
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // State
    const state = {
      onboardingStep: 1,
      onboarding: {
        religion: null,
        goals: [],
        styles: [],
        name: '',
        avatar: 'flower-2'
      },
      routines: [],
      lessons: {}, // {lessonId: true}
      activeTab: 'dashboard',
      category: 'All'
    };

    // Elements
    const onboardingEl = document.getElementById('onboarding');
    const mainEl = document.getElementById('main');
    const steps = Array.from(document.querySelectorAll('.ob-step'));

    const next1 = document.getElementById('ob-next-1');
    const next2 = document.getElementById('ob-next-2');
    const next3 = document.getElementById('ob-next-3');
    const finish = document.getElementById('ob-finish');
    const backBtns = Array.from(document.querySelectorAll('.ob-back'));
    const nameInput = document.getElementById('name-input');

    const profileName = document.getElementById('profile-name');
    const profileAvatar = document.getElementById('profile-avatar');
    const greeting = document.getElementById('greeting');

    const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
    const tabDashboard = document.getElementById('tab-dashboard');
    const tabLearn = document.getElementById('tab-learn');
    const tabAsk = document.getElementById('tab-ask');

    const fabJournal = document.getElementById('fab-journal');
    const journalModal = document.getElementById('journal-modal');
    const journalSheet = journalModal.querySelector('.absolute.inset-x-0');
    const closeJournal = document.getElementById('close-journal');

    const routineList = document.getElementById('routine-list');
    const addRoutine = document.getElementById('add-routine');

    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const refreshQuote = document.getElementById('refresh-quote');

    const nodeToggles = Array.from(document.querySelectorAll('.node-toggle'));
    const learnAskBtn = document.getElementById('learn-ask');
    const learnQ = document.getElementById('learn-question');
    const learnAnswers = document.getElementById('learn-answers');

    const messages = document.getElementById('messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send');
    const typingEl = document.getElementById('typing');
    const catChips = Array.from(document.querySelectorAll('.cat-chip'));
    const prefillBtn = document.getElementById('prefill');

    const settings = document.getElementById('settings');
    const settingsPanel = settings.querySelector('.max-w-sm');
    const openSettings = document.getElementById('open-settings');
    const closeSettings = document.getElementById('close-settings');
    const resetOnboarding = document.getElementById('reset-onboarding');
    const settingsProfile = document.getElementById('settings-profile');

    // Utilities
    const save = () => {
      localStorage.setItem('sj_profile', JSON.stringify(state.onboarding));
      localStorage.setItem('sj_onboarded', '1');
      localStorage.setItem('sj_routines', JSON.stringify(state.routines));
      localStorage.setItem('sj_lessons', JSON.stringify(state.lessons));
    };
    const load = () => {
      const onboarded = localStorage.getItem('sj_onboarded') === '1';
      const profile = JSON.parse(localStorage.getItem('sj_profile') || 'null');
      const routines = JSON.parse(localStorage.getItem('sj_routines') || '[]');
      const lessons = JSON.parse(localStorage.getItem('sj_lessons') || '{}');
      if (profile) state.onboarding = profile;
      state.routines = routines;
      state.lessons = lessons;
      return onboarded;
    };

    const showStep = (n) => {
      state.onboardingStep = n;
      steps.forEach(s => {
        if (parseInt(s.dataset.step) === n) {
          s.classList.remove('hidden');
          s.classList.add('opacity-100', 'translate-y-0');
        } else {
          s.classList.add('hidden');
          s.classList.remove('opacity-100', 'translate-y-0');
        }
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    };

    const finalizeOnboarding = () => {
      save();
      // Transition to main: fade + slide
      onboardingEl.classList.add('transition', 'duration-500', 'opacity-0', '-translate-y-4');
      setTimeout(() => {
        onboardingEl.classList.add('hidden');
        mainEl.classList.remove('hidden');
        mainEl.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => {
          mainEl.classList.remove('opacity-0', 'translate-y-4');
          mainEl.classList.add('transition', 'duration-500', 'opacity-100', 'translate-y-0');
        }, 30);
        initMain();
      }, 520);
    };

    // Onboarding interactions
    // Step 1
    next1.addEventListener('click', () => showStep(2));

    // Step 2 selection
    const relCards = Array.from(document.querySelectorAll('.rel-card'));
    relCards.forEach(card => {
      card.addEventListener('click', () => {
        relCards.forEach(c => c.classList.remove('ring-2', 'ring-indigo-400/60', 'scale-[1.01]'));
        card.classList.add('ring-2', 'ring-indigo-400/60', 'scale-[1.01]');
        state.onboarding.religion = card.dataset.religion;
        next2.disabled = false;
      });
    });
    next2.addEventListener('click', () => showStep(3));

    // Step 3 personalization
    function bindChips(containerId, key) {
      const wrap = document.getElementById(containerId);
      wrap.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const val = chip.dataset.goal || chip.dataset.style;
          const arr = key === 'goals' ? state.onboarding.goals : state.onboarding.styles;
          const idx = arr.indexOf(val);
          if (idx >= 0) {
            arr.splice(idx, 1);
            chip.classList.remove('ring-indigo-400/60', 'bg-indigo-500/10');
          } else {
            arr.push(val);
            chip.classList.add('ring-indigo-400/60', 'bg-indigo-500/10');
          }
          next3.disabled = !(state.onboarding.goals.length || state.onboarding.styles.length);
        });
      });
    }
    bindChips('goals', 'goals');
    bindChips('style', 'styles');
    next3.addEventListener('click', () => showStep(4));

    // Step 4 profile
    const avatarBtns = Array.from(document.querySelectorAll('.av-btn'));
    avatarBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        avatarBtns.forEach(b => b.classList.remove('ring-2', 'ring-indigo-400/60', 'scale-105'));
        btn.classList.add('ring-2', 'ring-indigo-400/60', 'scale-105');
        // Map to a lucide icon name
        const map = {
          lotus: 'flower-2',
          diya: 'flame',
          crescent: 'moon-star',
          dove: 'dove',
          om: 'omega',
          sun: 'sun',
          leaf: 'leaf',
          star: 'star'
        };
        state.onboarding.avatar = map[btn.dataset.avatar] || 'flower-2';
        validateFinish();
      });
    });
    nameInput.addEventListener('input', (e) => {
      state.onboarding.name = e.target.value.trim();
      validateFinish();
    });
    function validateFinish() {
      finish.disabled = !(state.onboarding.name && state.onboarding.avatar);
    }
    finish.addEventListener('click', finalizeOnboarding);

    backBtns.forEach(btn => {
      btn.addEventListener('click', () => showStep(Math.max(1, state.onboardingStep - 1)));
    });

    // Main init
    function initMain() {
      // Profile
      profileName.textContent = state.onboarding.name || 'Friend';
      greeting.textContent = greetByTime();
      profileAvatar.innerHTML = `<i data-lucide="${state.onboarding.avatar}" class="w-4 h-4"></i>`;
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      settingsProfile.textContent = `${state.onboarding.name || 'Friend'} • ${state.onboarding.religion || 'General'}`;

      // Tabs
      setActiveTab(state.activeTab);

      // Routines
      renderRoutines();

      // Quote of the day
      showQuote(true);

      // Default messages
      if (messages.children.length === 0) {
        pushMessage('assistant', 'Welcome. Ask anything with kindness and curiosity. I’ll cite helpful sources when possible.');
      }
    }

    function greetByTime() {
      const h = new Date().getHours();
      if (h < 12) return 'Good morning';
      if (h < 18) return 'Good afternoon';
      return 'Good evening';
    }

    // Tabs control
    function setActiveTab(tab) {
      state.activeTab = tab;
      ['dashboard', 'learn', 'ask'].forEach(t => {
        document.getElementById('tab-' + t).classList.toggle('hidden', t !== tab);
      });
      tabButtons.forEach(b => {
        const active = b.dataset.tab === tab;
        b.classList.toggle('text-white', active);
        b.classList.toggle('text-neutral-400', !active);
        b.classList.toggle('bg-white/5', active);
      });
    }
    tabButtons.forEach(b => b.addEventListener('click', () => setActiveTab(b.dataset.tab)));

    // Journal modal
    fabJournal.addEventListener('click', () => {
      journalModal.classList.remove('hidden');
      requestAnimationFrame(() => {
        journalSheet.classList.remove('translate-y-4', 'opacity-0');
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    });
    closeJournal.addEventListener('click', closeJournalModal);
    journalModal.addEventListener('click', (e) => {
      if (e.target === journalModal) closeJournalModal();
    });
    function closeJournalModal() {
      journalSheet.classList.add('translate-y-4', 'opacity-0');
      setTimeout(() => journalModal.classList.add('hidden'), 200);
    }
    document.getElementById('save-journal').addEventListener('click', () => {
      const title = document.getElementById('journal-title').value.trim();
      const body = document.getElementById('journal-body').value.trim();
      if (!title && !body) return;
      const entries = JSON.parse(localStorage.getItem('sj_journal') || '[]');
      entries.unshift({ id: Date.now(), title, body, at: new Date().toISOString() });
      localStorage.setItem('sj_journal', JSON.stringify(entries));
      document.getElementById('journal-title').value = '';
      document.getElementById('journal-body').value = '';
      closeJournalModal();
    });

    // Routines
    addRoutine.addEventListener('click', () => {
      const title = prompt('Name your routine (e.g., Morning meditation)');
      if (!title) return;
      const id = 'r' + Date.now();
      state.routines.push({ id, title, streak: 0, lastDone: null });
      save();
      renderRoutines();
    });

    function renderRoutines() {
      routineList.innerHTML = '';
      if (state.routines.length === 0) {
        routineList.innerHTML = `<div class="text-sm text-neutral-400">No routines yet. Add one to begin a gentle streak.</div>`;
        return;
      }
      state.routines.forEach(rt => {
        const card = document.createElement('div');
        card.className = 'p-3 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-between';
        const doneToday = rt.lastDone === new Date().toDateString();
        card.innerHTML = `
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-lg ${doneToday ? 'bg-yellow-500/20 ring-1 ring-yellow-400/40' : 'bg-white/5 ring-1 ring-white/10'} flex items-center justify-center">
              <i data-lucide="sparkles" class="w-5 h-5 ${doneToday ? 'text-yellow-300 animate-pulse' : 'text-neutral-300'}"></i>
            </div>
            <div>
              <div class="text-sm font-medium">${rt.title}</div>
              <div class="text-[11px] text-neutral-400">Streak: <span class="text-yellow-300 font-medium">${rt.streak}</span> ${rt.streak > 0 ? 'days' : 'day'}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button data-id="${rt.id}" class="do-routine px-3 py-1.5 text-xs rounded-lg ${doneToday ? 'bg-white/10' : 'bg-emerald-500 hover:bg-emerald-400'}">${doneToday ? 'Done' : 'Mark done'}</button>
            <button data-id="${rt.id}" class="del-routine p-2 rounded-lg hover:bg-white/10"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
          </div>
        `;
        routineList.appendChild(card);
      });
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      routineList.querySelectorAll('.do-routine').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          const r = state.routines.find(x => x.id === id);
          if (!r) return;
          const today = new Date().toDateString();
          if (r.lastDone !== today) {
            const yesterday = new Date(Date.now() - 86400000).toDateString();
            r.streak = (r.lastDone === yesterday) ? r.streak + 1 : (r.lastDone ? 1 : 1);
            r.lastDone = today;
            save();
            renderRoutines();
          }
        });
      });
      routineList.querySelectorAll('.del-routine').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.dataset.id;
          state.routines = state.routines.filter(x => x.id !== id);
          save();
          renderRoutines();
        });
      });
    }

    // Quote of the Day
    const QUOTES = [
      { text: 'Wherever you are, be there totally.', author: 'Eckhart Tolle' },
      { text: 'The wound is the place where the Light enters you.', author: 'Rumi' },
      { text: 'Peace comes from within. Do not seek it without.', author: 'Buddha' },
      { text: 'Verily, in the remembrance of God do hearts find rest.', author: 'Quran 13:28' },
      { text: 'Be still and know that I am God.', author: 'Psalm 46:10' }
    ];
    function showQuote(initial = false) {
      const i = initial ? (new Date().getDate() % QUOTES.length) : Math.floor(Math.random() * QUOTES.length);
      const q = QUOTES[i];
      // Animated reveal
      quoteText.textContent = '';
      quoteAuthor.textContent = '';
      const chars = q.text.split('');
      let idx = 0;
      const interval = setInterval(() => {
        quoteText.textContent += chars[idx];
        idx++;
        if (idx >= chars.length) {
          clearInterval(interval);
          quoteAuthor.textContent = '— ' + q.author;
        }
      }, 20);
    }
    refreshQuote.addEventListener('click', () => showQuote(false));

    // Learn tree toggle
    nodeToggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.node;
        const content = document.querySelector(`[data-content="${key}"]`);
        const icon = btn.querySelector('[data-lucide="chevron-down"]');
        const open = content.classList.contains('hidden');
        content.classList.toggle('hidden', !open);
        icon && icon.classList.toggle('rotate-180', open);
      });
    });

    // Mark lesson complete
    function refreshLessonGlow() {
      document.querySelectorAll('.lesson-card').forEach((card, idx) => {
        const id = 'lesson-' + idx;
        const done = !!state.lessons[id];
        card.classList.toggle('ring-emerald-400/50', done);
        card.classList.toggle('bg-emerald-500/10', done);
        const icon = card.querySelector('i');
        if (icon) icon.classList.toggle('text-emerald-300', done);
      });
    }
    document.querySelectorAll('.lesson-card .mark-complete').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        const id = 'lesson-' + idx;
        state.lessons[id] = !state.lessons[id];
        save();
        refreshLessonGlow();
        // Subtle bloom feedback
        btn.classList.add('scale-95');
        setTimeout(() => btn.classList.remove('scale-95'), 120);
      });
    });

    // Learn Ask
    learnAskBtn.addEventListener('click', () => {
      const q = learnQ.value.trim();
      if (!q) return;
      const item = document.createElement('div');
      item.className = 'p-3 rounded-lg bg-white/5 ring-1 ring-white/10';
      item.innerHTML = `<div class="text-sm font-medium mb-1">You</div><div class="text-sm text-neutral-200">${escapeHtml(q)}</div>`;
      learnAnswers.prepend(item);
      learnQ.value = '';
      const thinking = document.createElement('div');
      thinking.className = 'text-xs text-neutral-400 mt-2';
      thinking.textContent = 'Thinking...';
      learnAnswers.prepend(thinking);
      setTimeout(() => {
        thinking.remove();
        const ans = document.createElement('div');
        ans.className = 'p-3 rounded-lg bg-white/5 ring-1 ring-white/10';
        ans.innerHTML = `
          <div class="flex items-center gap-2 mb-1">
            <i data-lucide="bot" class="w-4 h-4 text-sky-300"></i>
            <div class="text-sm font-medium">Guide</div>
          </div>
          <div class="text-sm text-neutral-200">Here’s a gentle summary considering foundational teachings and lived practice. See also <span class="px-1.5 py-0.5 text-[11px] rounded-md bg-white/10">[1]</span> and <span class="px-1.5 py-0.5 text-[11px] rounded-md bg-white/10">[2]</span>.</div>
        `;
        learnAnswers.prepend(ans);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }, 700);
    });

    // Ask Chat
    function pushMessage(role, text, refs = []) {
      const wrap = document.createElement('div');
      const isUser = role === 'user';
      wrap.className = 'flex ' + (isUser ? 'justify-end' : 'justify-start');
      const bubble = document.createElement('div');
      bubble.className = 'max-w-[78%] p-3 rounded-2xl ring-bubble.className = 'max-w-[78%] p-3 rounded-2xl ring-1 text-sm shadow-sm ' + (isUser ? 'bg-emerald-500/20 ring-emerald-400/30 text-emerald-50' : 'bg-white/5 ring-white/10 text-neutral-200');

      if (isUser) {
        bubble.innerHTML = `<div>${escapeHtml(text)}</div>`;
      } else {
        const refsHtml = refs && refs.length
          ? `<div class="mt-2 flex flex-wrap gap-1.5">${refs.map((r, i) => `<span class="px-2 py-0.5 text-[10px] rounded-md bg-white/10">${i + 1}</span><span class="text-[11px] text-neutral-400">${escapeHtml(r)}</span>`).join(' ')}</div>`
          : '';
        bubble.innerHTML = `
          <div class="flex items-center gap-2 mb-1">
            <i data-lucide="bot" class="w-4 h-4 text-sky-300"></i>
            <span class="text-xs text-neutral-400">Guide</span>
          </div>
          <div>${escapeHtml(text)}</div>
          ${refsHtml}
        `;
      }
      wrap.appendChild(bubble);
      messages.appendChild(wrap);
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      messages.scrollTop = messages.scrollHeight;
    }

    function escapeHtml(str) {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // Category filters
    function setCategory(cat) {
      state.category = cat;
      catChips.forEach(ch => {
        const active = ch.dataset.cat === cat;
        ch.classList.toggle('bg-white/10', active);
        ch.classList.toggle('text-white', active);
        ch.classList.toggle('ring-white/20', active);
        ch.classList.toggle('bg-white/5', !active);
        ch.classList.toggle('text-neutral-300', !active);
      });
      // Adjust placeholder with context
      const pmap = {
        All: 'Ask a spiritual, moral, or life question...',
        Sexuality: 'Ask with care and compassion...',
        Food: 'Ask about dietary guidance or ethics...',
        Prayer: 'Ask about prayer or devotion...',
        Philosophy: 'Ask about meaning, ethics, or metaphysics...'
      };
      chatInput.placeholder = pmap[cat] || pmap.All;
    }
    catChips.forEach(ch => ch.addEventListener('click', () => setCategory(ch.dataset.cat)));

    // Prefill suggestions
    const SUGGESTIONS = {
      All: [
        'How can I build a daily habit of gratitude?',
        'What is a kind way to resolve conflicts with family?'
      ],
      Sexuality: [
        'How can I navigate attraction with compassion and self-respect?'
      ],
      Food: [
        'Are there mindful eating practices that align with my values?'
      ],
      Prayer: [
        'How do I build a consistent, heartfelt prayer routine?'
      ],
      Philosophy: [
        'What does “living a good life” mean across traditions?'
      ]
    };
    prefillBtn.addEventListener('click', () => {
      const list = SUGGESTIONS[state.category] || SUGGESTIONS.All;
      const suggestion = list[Math.floor(Math.random() * list.length)];
      chatInput.value = suggestion;
      chatInput.focus();
    });

    // Send message
    function sendMessage() {
      const text = chatInput.value.trim();
      if (!text) return;
      pushMessage('user', text);
      chatInput.value = '';
      typingEl.classList.remove('hidden');
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        typingEl.classList.add('hidden');
        const reply = generateAssistantReply(text);
        const refs = generateRefs();
        pushMessage('assistant', reply, refs);
      }, 700 + Math.random() * 600);
    }
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });

    function generateAssistantReply(userText) {
      const cat = state.category || 'All';
      const rel = state.onboarding.religion || 'General';
      const styleHint = state.onboarding.styles && state.onboarding.styles.length ? ` in a ${state.onboarding.styles.join(', ').toLowerCase()} tone` : '';
      const preface = `From a ${rel} perspective${styleHint}, here’s a gentle take: `;
      const core = `1) Begin with intention and compassion. 2) Seek guidance from trusted teachings and mentors. 3) Try a small, consistent practice. 4) Reflect on outcomes and adjust with kindness.`;
      const closer = ` If helpful, I can suggest a brief routine or sources to explore further.`;
      // Slightly tailor by category
      const tailors = {
        Sexuality: ' Prioritize dignity, consent, and care for self and others.',
        Food: ' Consider gratitude, moderation, and mindful choices.',
        Prayer: ' Start with short moments of sincerity at regular times.',
        Philosophy: ' Hold questions with patience; let insight grow through practice and study.'
      };
      const t = tailors[cat] ? tailors[cat] : '';
      return `${preface}${core}${t}${closer}`;
    }

    function generateRefs() {
      const common = [
        'Introductory guide from a respected organization',
        'Short commentary from a scholar or teacher'
      ];
      // Just a demo stub
      return common;
    }

    // Settings drawer
    openSettings.addEventListener('click', () => {
      settings.classList.remove('hidden');
      requestAnimationFrame(() => {
        settingsPanel.classList.remove('translate-x-full');
      });
    });
    function closeSettingsDrawer() {
      settingsPanel.classList.add('translate-x-full');
      setTimeout(() => settings.classList.add('hidden'), 250);
    }
    closeSettings.addEventListener('click', closeSettingsDrawer);
    settings.addEventListener('click', (e) => {
      // Close when clicking the dark overlay
      if (e.target && e.target.classList && e.target.classList.contains('bg-black/50')) {
        closeSettingsDrawer();
      }
    });

    // Reset onboarding
    resetOnboarding.addEventListener('click', () => {
      if (!confirm('Reset onboarding and clear local progress?')) return;
      Object.keys(localStorage)
        .filter(k => k.startsWith('sj_'))
        .forEach(k => localStorage.removeItem(k));
      location.reload();
    });

    // Initial load
    const onboarded = load();
    if (onboarded) {
      onboardingEl.classList.add('hidden');
      mainEl.classList.remove('hidden');
      initMain();
      refreshLessonGlow();
      setCategory(state.category || 'All');
    } else {
      showStep(1);
    }

    // Enhance: when switching tabs, keep icons updated
    document.addEventListener('click', (e) => {
      if (e.target.closest('.tab-btn')) {
        setTimeout(() => lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }), 20);
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(99,102,241,0.6), rgba(16,185,129,0.25) 60%, transparent 70%)'}}></div>
<div className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(236,72,153,0.45), rgba(59,130,246,0.25) 60%, transparent 70%)'}}></div>
</div>

<div className="mx-auto w-full max-w-md min-h-screen flex flex-col relative" id="app">

<div className="flex-1" id="onboarding">

<div className="relative overflow-hidden">

<section className="ob-step px-6 pt-16 pb-28 min-h-screen flex flex-col items-center justify-between transition-all duration-700" data-step="1">
<div className="w-full flex flex-col items-center text-center space-y-6">
<div className="relative w-44 h-44">

<div className="absolute inset-0 rounded-full blur-2xl opacity-80 animate-pulse" style={{background: 'conic-gradient(from 0deg, rgba(99,102,241,0.35), rgba(236,72,153,0.35), rgba(16,185,129,0.35), rgba(59,130,246,0.35), rgba(99,102,241,0.35))'}}></div>
<div className="absolute inset-6 rounded-full border border-white/10 backdrop-blur-xl bg-white/5 shadow-inner shadow-black/30"></div>
<div className="absolute inset-0 rounded-full ring-1 ring-white/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-10 h-10 text-indigo-300 animate-pulse" data-lucide="sparkles"></i>
</div>
</div>
<div>
<h1 className="text-3xl tracking-tight font-semibold leading-tight">Welcome</h1>
<p className="text-sm text-neutral-300 mt-2">Begin a calm, meaningful journey of learning, reflection, and guidance.</p>
</div>
</div>
<div className="w-full">
<button className="w-full py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 active:scale-[0.99] transition text-white font-medium shadow-lg shadow-indigo-600/20" id="ob-next-1">
              Start
            </button>
<div className="mt-4 text-center text-xs text-neutral-400">You control your data. Adjust preferences anytime.</div>
</div>
</section>

<section className="ob-step hidden px-6 pt-12 pb-28 min-h-screen flex flex-col justify-between transition-all duration-700" data-step="2">
<div>
<h2 className="text-2xl tracking-tight font-semibold leading-tight">What is your faith?</h2>
<p className="text-sm text-neutral-300 mt-2">Choose one or explore broadly.</p>
<div className="mt-6 grid grid-cols-2 gap-3" id="religions">

<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-indigo-400/40 transition text-left" data-religion="Hinduism">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-indigo-500/10 ring-1 ring-indigo-400/30">
<i className="w-5 h-5 text-indigo-300" data-lucide="flower-2"></i>
</div>
<div>
<div className="font-medium">Hinduism</div>
<div className="text-xs text-neutral-400">Dharma, yoga, bhakti</div>
</div>
</div>
</button>
<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-emerald-400/40 transition text-left" data-religion="Islam">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/30">
<i className="w-5 h-5 text-emerald-300" data-lucide="moon"></i>
</div>
<div>
<div className="font-medium">Islam</div>
<div className="text-xs text-neutral-400">Tawhid, salah, ihsan</div>
</div>
</div>
</button>
<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-sky-400/40 transition text-left" data-religion="Christianity">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-sky-500/10 ring-1 ring-sky-400/30">
<i className="w-5 h-5 text-sky-300" data-lucide="cross"></i>
</div>
<div>
<div className="font-medium">Christianity</div>
<div className="text-xs text-neutral-400">Gospels, prayer, grace</div>
</div>
</div>
</button>
<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-rose-400/40 transition text-left" data-religion="Buddhism">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-rose-500/10 ring-1 ring-rose-400/30">
<i className="w-5 h-5 text-rose-300" data-lucide="meditation"></i>
</div>
<div>
<div className="font-medium">Buddhism</div>
<div className="text-xs text-neutral-400">Noble path, mindfulness</div>
</div>
</div>
</button>
<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-yellow-400/40 transition text-left" data-religion="Sikhism">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-yellow-500/10 ring-1 ring-yellow-400/30">
<i className="w-5 h-5 text-yellow-300" data-lucide="shield"></i>
</div>
<div>
<div className="font-medium">Sikhism</div>
<div className="text-xs text-neutral-400">Seva, naam, equality</div>
</div>
</div>
</button>
<button className="rel-card group rounded-2xl p-4 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-fuchsia-400/40 transition text-left" data-religion="Judaism">
<div className="flex items-center gap-3">
<div className="p-2 rounded-xl bg-fuchsia-500/10 ring-1 ring-fuchsia-400/30">
<i className="w-5 h-5 text-fuchsia-300" data-lucide="star"></i>
</div>
<div>
<div className="font-medium">Judaism</div>
<div className="text-xs text-neutral-400">Torah, mitzvot, wisdom</div>
</div>
</div>
</button>
</div>
</div>
<div className="w-full flex gap-3">
<button className="ob-back w-1/3 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-neutral-200">Back</button>
<button className="w-2/3 py-3.5 rounded-xl bg-indigo-500/40 hover:bg-indigo-500/60 transition text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="ob-next-2">Continue</button>
</div>
</section>

<section className="ob-step hidden px-6 pt-12 pb-28 min-h-screen flex flex-col justify-between transition-all duration-700" data-step="3">
<div>
<h2 className="text-2xl tracking-tight font-semibold leading-tight">Personalize your journey</h2>
<p className="text-sm text-neutral-300 mt-2">Pick what resonates with you.</p>
<div className="mt-6">
<div className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Goals</div>
<div className="flex flex-wrap gap-2" id="goals">
<button className="chip px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm" data-goal="Learning">Learning</button>
<button className="chip px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm" data-goal="Reflection">Reflection</button>
<button className="chip px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm" data-goal="Guidance">Seeking guidance</button>
<button className="chip px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm" data-goal="Community">Community</button>
</div>
</div>
<div className="mt-6">
<div className="text-xs uppercase tracking-wide text-neutral-400 mb-3">Preferred style</div>
<div className="grid grid-cols-2 gap-2" id="style">
<button className="chip px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-left" data-style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-300" data-lucide="book-open-text"></i>
<span className="text-sm">Strict text</span>
</div>
</button>
<button className="chip px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-left" data-style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="messages-square"></i>
<span className="text-sm">Open discussion</span>
</div>
</button>
<button className="chip px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-left" data-style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-rose-300" data-lucide="flower"></i>
<span className="text-sm">Contemplative</span>
</div>
</button>
<button className="chip px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-left" data-style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-300" data-lucide="pen-tool"></i>
<span className="text-sm">Scholarly</span>
</div>
</button>
</div>
</div>
</div>
<div className="w-full flex gap-3">
<button className="ob-back w-1/3 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Back</button>
<button className="w-2/3 py-3.5 rounded-xl bg-indigo-500/40 hover:bg-indigo-500/60 transition text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="ob-next-3">Continue</button>
</div>
</section>

<section className="ob-step hidden px-6 pt-12 pb-28 min-h-screen flex flex-col justify-between transition-all duration-700" data-step="4">
<div>
<h2 className="text-2xl tracking-tight font-semibold leading-tight">Create your profile</h2>
<p className="text-sm text-neutral-300 mt-2">A name and an avatar you love.</p>
<div className="mt-5">
<label className="text-xs text-neutral-400">Name</label>
<div className="mt-2 flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3">
<i className="w-4 h-4 text-neutral-300" data-lucide="user"></i>
<input className="w-full bg-transparent outline-none py-3 text-sm placeholder:text-neutral-500" id="name-input" placeholder="Your name" type="text"/>
</div>
</div>
<div className="mt-6">
<div className="text-xs text-neutral-400 mb-2">Choose an avatar</div>
<div className="grid grid-cols-4 gap-3" id="avatars">
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition" data-avatar="lotus">
<i className="w-6 h-6 text-indigo-300 group-hover:scale-110 transition" data-lucide="flower-2"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-amber-400/40 hover:bg-white/10 transition" data-avatar="diya">
<i className="w-6 h-6 text-amber-300 group-hover:scale-110 transition" data-lucide="flame"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 hover:bg-white/10 transition" data-avatar="crescent">
<i className="w-6 h-6 text-emerald-300 group-hover:scale-110 transition" data-lucide="moon-star"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-sky-400/40 hover:bg-white/10 transition" data-avatar="dove">
<i className="w-6 h-6 text-sky-300 group-hover:scale-110 transition" data-lucide="dove"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-fuchsia-400/40 hover:bg-white/10 transition" data-avatar="om">
<i className="w-6 h-6 text-fuchsia-300 group-hover:scale-110 transition" data-lucide="omega"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-yellow-400/40 hover:bg-white/10 transition" data-avatar="sun">
<i className="w-6 h-6 text-yellow-300 group-hover:scale-110 transition" data-lucide="sun"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 hover:bg-white/10 transition" data-avatar="leaf">
<i className="w-6 h-6 text-emerald-300 group-hover:scale-110 transition" data-lucide="leaf"></i>
</button>
<button className="av-btn group p-3 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-indigo-400/40 hover:bg-white/10 transition" data-avatar="star">
<i className="w-6 h-6 text-indigo-300 group-hover:scale-110 transition" data-lucide="star"></i>
</button>
</div>
</div>
</div>
<div className="w-full flex gap-3">
<button className="ob-back w-1/3 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10">Back</button>
<button className="w-2/3 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.99] transition text-white font-medium" disabled="" id="ob-finish">Finish</button>
</div>
</section>
</div>
</div>

<div className="hidden flex-1 flex flex-col" id="main">

<header className="px-5 pt-6 pb-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center ring-1 ring-white/10 bg-white/5" id="profile-avatar">
<i className="w-4 h-4 text-indigo-300" data-lucide="flower-2"></i>
</div>
<div>
<div className="text-sm text-neutral-300" id="greeting">Welcome back</div>
<div className="text-base tracking-tight font-medium" id="profile-name">Friend</div>
</div>
</div>
<button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="open-settings">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</header>

<main className="flex-1 overflow-y-auto pb-28">

<section className="px-5 space-y-5" id="tab-dashboard">

<div className="rounded-2xl p-5 bg-gradient-to-br from-white/[0.06] to-white/[0.03] ring-1 ring-white/10 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-300" data-lucide="quote"></i>
<h3 className="text-lg tracking-tight font-semibold">Quote of the day</h3>
</div>
<button className="p-2 rounded-lg hover:bg-white/10 transition" id="refresh-quote">
<i className="w-4 h-4" data-lucide="shuffle"></i>
</button>
</div>
<p className="text-base leading-relaxed text-neutral-200" id="quote-text"></p>
<div className="text-xs text-neutral-400 mt-3" id="quote-author"></div>
</div>

<div className="rounded-2xl p-5 bg-white/[0.04] ring-1 ring-white/10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="calendar"></i>
<h3 className="text-lg tracking-tight font-semibold">Festival calendar</h3>
</div>
<div className="text-xs text-neutral-400">This month</div>
</div>
<div className="space-y-3 max-h-64 overflow-y-auto pr-1">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
<span className="text-emerald-300 font-medium">10</span>
</div>
<div className="flex-1">
<div className="font-medium">Eid al-Fitr</div>
<div className="text-xs text-neutral-400">Community prayers, charity, celebration</div>
<div className="mt-1 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/30 text-emerald-300">Islam</span>
<span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 ring-1 ring-white/10">Joy</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30 flex items-center justify-center">
<span className="text-indigo-300 font-medium">14</span>
</div>
<div className="flex-1">
<div className="font-medium">Navratri</div>
<div className="text-xs text-neutral-400">Nine nights of devotion and dance</div>
<div className="mt-1 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 text-[10px] rounded-full bg-indigo-500/10 ring-1 ring-indigo-400/30 text-indigo-300">Hinduism</span>
<span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 ring-1 ring-white/10">Devotion</span>
</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="flex-shrink-0 w-12 h-12 rounded-lg bg-rose-500/10 ring-1 ring-rose-400/30 flex items-center justify-center">
<span className="text-rose-300 font-medium">25</span>
</div>
<div className="flex-1">
<div className="font-medium">Vesak</div>
<div className="text-xs text-neutral-400">Celebration of Buddha’s birth, enlightenment</div>
<div className="mt-1 flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 text-[10px] rounded-full bg-rose-500/10 ring-1 ring-rose-400/30 text-rose-300">Buddhism</span>
<span className="px-2 py-0.5 text-[10px] rounded-full bg-white/5 ring-1 ring-white/10">Compassion</span>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-5 bg-white/[0.04] ring-1 ring-white/10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-300" data-lucide="stars"></i>
<h3 className="text-lg tracking-tight font-semibold">Routines</h3>
</div>
<button className="px-3 py-1.5 text-xs rounded-lg bg-white/5 hover:bg-white/10 ring-1 ring-white/10" id="add-routine">Add</button>
</div>
<div className="space-y-3" id="routine-list"></div>
</div>
</section>

<section className="hidden px-5 space-y-5" id="tab-learn">
<div className="rounded-2xl p-5 bg-gradient-to-br from-white/[0.06] to-white/[0.03] ring-1 ring-white/10">
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-emerald-300" data-lucide="tree-palm"></i>
<h3 className="text-lg tracking-tight font-semibold">Your learning tree</h3>
</div>

<div className="space-y-2" id="tree">

<div className="p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
<button className="node-toggle w-full flex items-center justify-between" data-node="roots">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="sprout"></i>
</div>
<div>
<div className="font-medium">Roots • Foundations</div>
<div className="text-xs text-neutral-400">Core beliefs, principles</div>
</div>
</div>
<i className="w-5 h-5 text-neutral-300 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="mt-3 pl-4 border-l border-white/10 hidden space-y-2" data-content="roots">
<div className="lesson-card p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-300" data-lucide="book"></i>
<div className="text-sm font-medium">Sacred texts overview</div>
</div>
<button className="mark-complete px-2 py-1 text-[11px] rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 text-emerald-200 hover:bg-emerald-500/30">Complete</button>
</div>
<p className="text-xs text-neutral-400 mt-2">Learn the structure and themes to navigate confidently.</p>
</div>
<div className="lesson-card p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-300" data-lucide="compass"></i>
<div className="text-sm font-medium">Practices and values</div>
</div>
<button className="mark-complete px-2 py-1 text-[11px] rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 text-emerald-200 hover:bg-emerald-500/30">Complete</button>
</div>
<p className="text-xs text-neutral-400 mt-2">Daily rhythms and intentions that shape life.</p>
</div>
</div>
</div>

<div className="p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
<button className="node-toggle w-full flex items-center justify-between" data-node="leaves">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-400/30 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="leaf"></i>
</div>
<div>
<div className="font-medium">Leaves • Advanced</div>
<div className="text-xs text-neutral-400">Interpretation, philosophy</div>
</div>
</div>
<i className="w-5 h-5 text-neutral-300 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="mt-3 pl-4 border-l border-white/10 hidden space-y-2" data-content="leaves">
<div className="lesson-card p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-pink-300" data-lucide="brain"></i>
<div className="text-sm font-medium">Ethics and dilemmas</div>
</div>
<button className="mark-complete px-2 py-1 text-[11px] rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 text-emerald-200 hover:bg-emerald-500/30">Complete</button>
</div>
<p className="text-xs text-neutral-400 mt-2">Explore challenging scenarios with compassion.</p>
</div>
<div className="lesson-card p-3 rounded-lg bg-white/5 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="lightbulb"></i>
<div className="text-sm font-medium">Commentaries and views</div>
</div>
<button className="mark-complete px-2 py-1 text-[11px] rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30 text-emerald-200 hover:bg-emerald-500/30">Complete</button>
</div>
<p className="text-xs text-neutral-400 mt-2">Diverse perspectives, respectfully compared.</p>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-4 bg-white/[0.04] ring-1 ring-white/10 space-y-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-sky-300" data-lucide="bot"></i>
<div className="text-sm font-medium">Ask while learning</div>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3">
<i className="w-4 h-4 text-neutral-300" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none py-2.5 text-sm placeholder:text-neutral-500" id="learn-question" placeholder="Ask a question about this topic..." />
<button className="px-3 py-1.5 text-xs rounded-lg bg-indigo-500 hover:bg-indigo-400 transition" id="learn-ask">Ask</button>
</input></div>
<div className="space-y-2 text-sm" id="learn-answers"></div>
</div>
</section>

<section className="hidden px-5" id="tab-ask">
<div className="rounded-2xl p-4 bg-gradient-to-br from-white/[0.06] to-white/[0.03] ring-1 ring-white/10 mb-4">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="handshake"></i>
<div className="text-sm">Respectful, compassionate, truth-seeking discussion only.</div>
</div>
</div>

<div className="flex gap-2 overflow-x-auto pb-1 mb-3">
<button className="cat-chip px-3 py-1.5 text-xs rounded-full bg-white/10 ring-1 ring-white/10" data-cat="All">All</button>
<button className="cat-chip px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center gap-1.5" data-cat="Sexuality">
<i className="w-3.5 h-3.5 text-pink-300" data-lucide="heart"></i>Sexuality
            </button>
<button className="cat-chip px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center gap-1.5" data-cat="Food">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="utensils"></i>Food
            </button>
<button className="cat-chip px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center gap-1.5" data-cat="Prayer">
<i className="w-3.5 h-3.5 text-indigo-300" data-lucide="hands"></i>Prayer
            </button>
<button className="cat-chip px-3 py-1.5 text-xs rounded-full bg-white/5 hover:bg-white/10 ring-1 ring-white/10 flex items-center gap-1.5" data-cat="Philosophy">
<i className="w-3.5 h-3.5 text-yellow-300" data-lucide="sigma"></i>Philosophy
            </button>
</div>

<div className="rounded-2xl p-4 bg-white/[0.04] ring-1 ring-white/10 h-[58vh] flex flex-col" id="chat">
<div className="flex-1 overflow-y-auto space-y-3 pr-1" id="messages">

</div>
<div className="hidden mt-2 mb-2 flex items-center gap-2 text-xs text-neutral-400" id="typing">
<div className="flex items-center gap-1">
<i className="w-3.5 h-3.5 text-indigo-300 animate-bounce" data-lucide="sparkle" style={{animationDelay: '0ms'}}></i>
<i className="w-3.5 h-3.5 text-emerald-300 animate-bounce" data-lucide="moon" style={{animationDelay: '120ms'}}></i>
<i className="w-3.5 h-3.5 text-yellow-300 animate-bounce" data-lucide="star" style={{animationDelay: '240ms'}}></i>
</div>
              Typing...
            </div>
<div className="mt-2 flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-3">
<button className="p-2 rounded-lg hover:bg-white/10" id="prefill">
<i className="w-4 h-4" data-lucide="wand-2"></i>
</button>
<input className="w-full bg-transparent outline-none py-2.5 text-sm placeholder:text-neutral-500" id="chat-input" placeholder="Ask a spiritual, moral, or life question..."/>
<button className="px-3 py-1.5 text-xs rounded-lg bg-emerald-500 hover:bg-emerald-400 transition" id="send">Send</button>
</div>
</div>
</section>
</main>

<button className="fixed bottom-24 right-5 p-4 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white shadow-xl shadow-indigo-600/30 ring-1 ring-white/10 active:scale-95 transition" id="fab-journal">
<i className="w-5 h-5" data-lucide="notebook-pen"></i>
</button>

<nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-md bg-black/60 backdrop-blur-xl ring-1 ring-white/10">
<div className="grid grid-cols-3">
<button className="tab-btn flex flex-col items-center py-3.5 gap-1 text-neutral-400" data-tab="dashboard">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[11px] font-medium">Dashboard</span>
</button>
<button className="tab-btn flex flex-col items-center py-3.5 gap-1 text-neutral-400" data-tab="learn">
<i className="w-5 h-5" data-lucide="book-open"></i>
<span className="text-[11px] font-medium">Learn</span>
</button>
<button className="tab-btn flex flex-col items-center py-3.5 gap-1 text-neutral-400" data-tab="ask">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-[11px] font-medium">Ask</span>
</button>
</div>
</nav>
</div>

<div className="fixed inset-0 hidden" id="journal-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 top-24 mx-auto max-w-md rounded-t-3xl bg-neutral-950 ring-1 ring-white/10 translate-y-4 opacity-0 transition-all duration-300">
<div className="p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-300" data-lucide="notebook"></i>
<h3 className="text-lg tracking-tight font-semibold">New Journal Entry</h3>
</div>
<button className="p-2 rounded-lg hover:bg-white/10" id="close-journal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-3 space-y-3">
<input className="w-full bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2.5 text-sm outline-none placeholder:text-neutral-500" id="journal-title" placeholder="Title"/>
<textarea className="w-full bg-white/5 ring-1 ring-white/10 rounded-xl px-3 py-2.5 text-sm outline-none placeholder:text-neutral-500" id="journal-body" placeholder="Write your reflection..." rows="6"></textarea>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-400">Private • Visible only to you</div>
<button className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-sm" id="save-journal">Save</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 hidden" id="settings">
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-neutral-950 ring-1 ring-white/10 translate-x-full transition-transform">
<div className="p-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300" data-lucide="settings-2"></i>
<h3 className="text-lg tracking-tight font-semibold">Settings</h3>
</div>
<button className="p-2 rounded-lg hover:bg-white/10" id="close-settings">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 space-y-4">
<div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
<div className="text-sm font-medium mb-1">Profile</div>
<div className="text-xs text-neutral-400" id="settings-profile">Not set</div>
</div>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-sm" id="reset-onboarding">Reset onboarding</button>
</div>
</div>
</div>
</div>


    </>
  );
}
