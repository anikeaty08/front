import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Hash-based routing: #/chat shows main app directly
      function route() {
        const hash = location.hash || '';
        const authView = document.getElementById('authView');
        const mainView = document.getElementById('mainView');
        if (hash.startsWith('#/chat')) {
          authView.classList.add('hidden');
          mainView.classList.remove('hidden');
        } else {
          authView.classList.remove('hidden');
          mainView.classList.add('hidden');
        }
      }
      window.addEventListener('hashchange', route);
      window.addEventListener('DOMContentLoaded', route);

      // Theme toggle (global + auth)
      function toggleTheme() {
        document.documentElement.classList.toggle('dark');
      }
      document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
      document.getElementById('themeToggleAuth')?.addEventListener('click', toggleTheme);

      // Auth tabs
      const tabLogin = document.getElementById('tabLogin');
      const tabRegister = document.getElementById('tabRegister');
      const loginForm = document.getElementById('loginForm');
      const registerForm = document.getElementById('registerForm');
      tabLogin?.addEventListener('click', () => {
        tabLogin.classList.add('bg-neutral-900','ring-1','ring-white/10');
        tabRegister.classList.remove('bg-neutral-900','ring-1','ring-white/10');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
      });
      tabRegister?.addEventListener('click', () => {
        tabRegister.classList.add('bg-neutral-900','ring-1','ring-white/10');
        tabLogin.classList.remove('bg-neutral-900','ring-1','ring-white/10');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
      });

      // Password visibility toggles
      document.querySelectorAll('.pw-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-toggle');
          const input = document.getElementById(id);
          if (input) {
            input.type = input.type === 'password' ? 'text' : 'password';
          }
        });
      });

      // Password strength meter (simple heuristic)
      const pwInput = document.getElementById('registerPassword');
      const bars = ['pwBar1','pwBar2','pwBar3','pwBar4'].map(id => document.getElementById(id));
      const pwLabel = document.getElementById('pwLabel');
      pwInput?.addEventListener('input', () => {
        const v = pwInput.value;
        let score = 0;
        if (v.length >= 8) score++;
        if (/[A-Z]/.test(v) && /[a-z]/.test(v)) score++;
        if (/\d/.test(v)) score++;
        if (/[^A-Za-z0-9]/.test(v)) score++;
        const colors = ['bg-rose-600','bg-amber-500','bg-emerald-500','bg-indigo-500'];
        bars.forEach((b,i) => {
          b.className = 'h-1.5 flex-1 rounded bg-neutral-800';
          if (i < score) b.classList.add(colors[Math.max(0,score-1)]);
        });
        const labels = ['Very weak','Weak','Okay','Strong'];
        pwLabel.textContent = 'Strength: ' + (score ? labels[score-1] : 'Very weak');
      });

      // Forgot password flow
      const forgotModal = document.getElementById('forgotModal');
      document.getElementById('openForgot')?.addEventListener('click', () => forgotModal.classList.remove('hidden'));
      document.getElementById('closeForgot')?.addEventListener('click', () => forgotModal.classList.add('hidden'));
      document.getElementById('fpSend')?.addEventListener('click', () => {
        document.getElementById('fpStep1').classList.add('hidden');
        document.getElementById('fpStep2').classList.remove('hidden');
        toast('Verification sent', 'Check your inbox for the code.');
      });
      document.getElementById('fpReset')?.addEventListener('click', () => {
        forgotModal.classList.add('hidden');
        toast('Password updated', 'You can now sign in.');
      });

      // Demo / Auth submit -> navigate to chat
      function goToChat() { location.hash = '#/chat'; }
      document.getElementById('demoLogin')?.addEventListener('click', goToChat);
      loginForm?.addEventListener('submit', (e)=>{ e.preventDefault(); goToChat(); });
      registerForm?.addEventListener('submit', (e)=>{ e.preventDefault(); goToChat(); });

      // Toaster
      function toast(title, desc) {
        const t = document.getElementById('toaster');
        if (!t) return;
        t.querySelector('p.font-medium').textContent = title || 'Saved';
        t.querySelector('p.text-neutral-400').textContent = desc || 'Your changes were updated.';
        t.classList.remove('hidden');
        setTimeout(() => t.classList.add('hidden'), 2200);
      }

      // Mobile sidebar toggle
      const sidebar = documentconst sidebar = document.getElementById('sidebar');
      const mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
      const mobileBack = document.getElementById('mobileBack');
      const conversation = document.getElementById('conversation');

      // Inject placeholder CSS for contenteditable
      (() => {
        const style = document.createElement('style');
        style.textContent = `
          [contenteditable][data-placeholder]:empty:before{
            content:attr(data-placeholder);
            color: rgb(163,163,163);
            pointer-events:none;
          }
          [data-hotkey]::after {
            content: attr(data-hotkey);
            font-size: 11px;
            color: rgb(163,163,163);
            margin-left: 6px;
            padding: 0 6px;
            border-radius: 6px;
            border: 1px solid rgba(255,255,255,0.06);
            background: rgba(255,255,255,0.04);
          }
        `;
        document.head.appendChild(style);
      })();

      // Mobile sidebar drawer
      let sidebarOverlay = null;
      function openMobileSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('hidden');
        sidebar.classList.add('fixed','top-14','bottom-0','left-0','right-auto','w-[85%]','max-w-sm','z-40','bg-neutral-950');
        // Overlay
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.id = 'sidebarOverlay';
        sidebarOverlay.className = 'fixed inset-0 top-14 bg-black/50 z-30 md:hidden';
        sidebarOverlay.addEventListener('click', closeMobileSidebar);
        document.body.appendChild(sidebarOverlay);
        mobileBack?.classList.add('hidden');
      }
      function closeMobileSidebar() {
        if (!sidebar) return;
        sidebar.classList.add('hidden');
        sidebar.classList.remove('fixed','top-14','bottom-0','left-0','right-auto','w-[85%]','max-w-sm','z-40');
        if (sidebarOverlay) {
          sidebarOverlay.remove();
          sidebarOverlay = null;
        }
        // Show the back button when viewing conversation on mobile
        mobileBack?.classList.remove('hidden');
      }
      mobileSidebarToggle?.addEventListener('click', openMobileSidebar);
      mobileBack?.addEventListener('click', openMobileSidebar);

      // Info panel toggle (as drawer on small screens)
      const infoPanel = document.getElementById('infoPanel');
      const openInfo = document.getElementById('openInfo');
      const closeInfo = document.getElementById('closeInfo');
      let infoOverlay = null;
      function showInfoPanel() {
        if (!infoPanel) return;
        if (window.matchMedia('(min-width: 1280px)').matches) {
          // xl and up already visible by css
          infoPanel.classList.remove('hidden');
          return;
        }
        infoPanel.classList.remove('hidden');
        infoPanel.classList.add('fixed','inset-y-0','right-0','w-[90%]','max-w-sm','z-40','bg-neutral-950');
        infoOverlay = document.createElement('div');
        infoOverlay.className = 'fixed inset-0 top-14 bg-black/50 z-30';
        infoOverlay.addEventListener('click', hideInfoPanel);
        document.body.appendChild(infoOverlay);
      }
      function hideInfoPanel() {
        if (!infoPanel) return;
        if (window.matchMedia('(min-width: 1280px)').matches) {
          // keep displayed on xl by default
          return;
        }
        infoPanel.classList.add('hidden');
        infoPanel.classList.remove('fixed','inset-y-0','right-0','w-[90%]','max-w-sm','z-40');
        if (infoOverlay) {
          infoOverlay.remove();
          infoOverlay = null;
        }
      }
      openInfo?.addEventListener('click', showInfoPanel);
      closeInfo?.addEventListener('click', hideInfoPanel);
      window.addEventListener('resize', () => {
        if (window.matchMedia('(min-width: 1280px)').matches) {
          infoPanel?.classList.remove('hidden');
          if (infoOverlay) { infoOverlay.remove(); infoOverlay = null; }
          infoPanel?.classList.remove('fixed','inset-y-0','right-0','w-[90%]','max-w-sm','z-40');
        } else {
          // hide on resize down to avoid overlay-less visible drawer
          if (!infoOverlay) infoPanel?.classList.add('hidden');
        }
      });

      // Settings modal
      const settingsModal = document.getElementById('settingsModal');
      const openSettings = document.getElementById('openSettings');
      const closeSettings = document.getElementById('closeSettings');
      const toggleDark = document.getElementById('toggleDark');
      const saveSettings = document.getElementById('saveSettings');
      function showSettings() { settingsModal?.classList.remove('hidden'); }
      function hideSettings() { settingsModal?.classList.add('hidden'); }
      openSettings?.addEventListener('click', showSettings);
      closeSettings?.addEventListener('click', hideSettings);
      settingsModal?.addEventListener('click', (e) => {
        if (e.target === settingsModal) hideSettings();
      });
      toggleDark?.addEventListener('change', () => toggleTheme());
      saveSettings?.addEventListener('click', () => { hideSettings(); toast('Settings saved', 'Your preferences were updated.'); });

      // Accent color switcher (simple class swap for common elements)
      const accentMap = {
        indigo: { bg:'bg-indigo-600', ring:'ring-indigo-400/30', text:'text-indigo-300', tint:'bg-indigo-500/20' },
        emerald:{ bg:'bg-emerald-600', ring:'ring-emerald-400/30', text:'text-emerald-300', tint:'bg-emerald-500/20' },
        violet: { bg:'bg-violet-600', ring:'ring-violet-400/30', text:'text-violet-300', tint:'bg-violet-500/20' },
        rose:   { bg:'bg-rose-600', ring:'ring-rose-400/30', text:'text-rose-300', tint:'bg-rose-500/20' }
      };
      function switchAccent(to='indigo') {
        const froms = Object.keys(accentMap).filter(k => k !== to);
        const targets = Array.from(document.querySelectorAll('.'+accentMap.indigo.bg+', .'+accentMap.indigo.ring+', .'+accentMap.indigo.text+', .'+accentMap.indigo.tint+','+
                                                               '.bg-emerald-600, .ring-emerald-400\\/30, .text-emerald-300, .bg-emerald-500\\/20,'+
                                                               '.bg-violet-600, .ring-violet-400\\/30, .text-violet-300, .bg-violet-500\\/20,'+
                                                               '.bg-rose-600, .ring-rose-400\\/30, .text-rose-300, .bg-rose-500\\/20'));
        targets.forEach(el => {
          // remove any known accent classes
          for (const k of Object.keys(accentMap)) {
            const m = accentMap[k];
            el.classList.remove(m.bg, m.ring, m.text, m.tint);
          }
          // Add new accent approximately matching intent
          // Heuristic: if element originally had bg-*-600 or tint, keep bg; if it had ring, keep ring; if text color, keep text
          // We'll assign based on roles by inspecting existing classes string backup (dataset)
          const role = el.dataset.accentRole || (() => {
            const c = el.className;
            if (/ring-.*\/30/.test(c)) return 'ring';
            if (/text-.*300/.test(c)) return 'text';
            if (/500\/20/.test(c)) return 'tint';
            return 'bg';
          })();
          el.dataset.accentRole = role;
          const map = accentMap[to];
          el.classList.add(map[role]);
        });
        toast('Accent updated', to.charAt(0).toUpperCase() + to.slice(1) + ' theme applied');
      }
      document.querySelectorAll('[data-accent]').forEach(btn => {
        btn.addEventListener('click', () => switchAccent(btn.getAttribute('data-accent')));
      });

      // Profile menu
      const openProfileBtn = document.getElementById('openProfile');
      const profileMenu = document.getElementById('profileMenu');
      const gotoProfile = document.getElementById('gotoProfile');
      const logoutBtn = document.getElementById('logout');
      function toggleProfileMenu() { profileMenu?.classList.toggle('hidden'); }
      openProfileBtn?.addEventListener('click', (e) => { e.stopPropagation(); toggleProfileMenu(); });
      document.addEventListener('click', (e) => {
        if (!profileMenu?.classList.contains('hidden') && !profileMenu.contains(e.target)) {
          profileMenu.classList.add('hidden');
        }
      });
      gotoProfile?.addEventListener('click', () => { profileMenu?.classList.add('hidden'); showSettings(); });
      logoutBtn?.addEventListener('click', () => { profileMenu?.classList.add('hidden'); location.hash = ''; toast('Signed out', 'You have been logged out.'); });

      // New chat modal
      const newChatBtn = document.getElementById('newChat');
      const newChatModal = document.getElementById('newChatModal');
      const closeNewChat = document.getElementById('closeNewChat');
      newChatBtn?.addEventListener('click', () => newChatModal?.classList.remove('hidden'));
      closeNewChat?.addEventListener('click', () => newChatModal?.classList.add('hidden'));
      newChatModal?.addEventListener('click', (e) => { if (e.target === newChatModal) newChatModal.classList.add('hidden'); });

      // Find-in-chat
      const findBar = document.getElementById('findBar');
      const findInChatBtn = document.getElementById('findInChat');
      const findInput = document.getElementById('findInput');
      const findPrev = document.getElementById('findPrev');
      const findNext = document.getElementById('findNext');
      const findClose = document.getElementById('findClose');
      const timeline = document.getElementById('timeline');
      let searchMatches = [];
      let matchIndex = -1;

      function clearHighlights() {
        if (!timeline) return;
        const marks = timeline.querySelectorAll('mark.chat-find');
        marks.forEach(m => {
          const parent = m.parentNode;
          if (!parent) return;
          parent.replaceChild(document.createTextNode(m.textContent || ''), m);
          parent.normalize();
        });
        searchMatches = [];
        matchIndex = -1;
      }
      function highlight(query) {
        clearHighlights();
        if (!timeline || !query) return;
        const walker = document.createTreeWalker(timeline, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            if (!node.parentElement) return NodeFilter.FILTER_REJECT;
            if (['SCRIPT','STYLE','MARK'].includes(node.parentElement.tagName)) return NodeFilter.FILTER_REJECT;
            const t = node.textContent || '';
            return t.toLowerCase().includes(query.toLowerCase()) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        });
        const nodes = [];
        let n; while ((n = walker.nextNode())) nodes.push(n);
        nodes.forEach(textNode => {
          const val = textNode.textContent || '';
          const parent = textNode.parentNode;
          if (!parent) return;
          const frag = document.createDocumentFragment();
          let i = 0;
          const q = query.toLowerCase();
          const lower = val.toLowerCase();
          while (true) {
            const idx = lower.indexOf(q, i);
            if (idx === -1) { frag.appendChild(document.createTextNode(val.slice(i))); break; }
            frag.appendChild(document.createTextNode(val.slice(i, idx)));
            const mark = document.createElement('mark');
            mark.className = 'chat-find bg-amber-400/20 ring-1 ring-amber-400/20 rounded px-0.5';
            mark.textContent = val.slice(idx, idx + query.length);
            frag.appendChild(mark);
            searchMatches.push(mark);
            i = idx + query.length;
          }
          parent.replaceChild(frag, textNode);
        });
        if (searchMatches.length) {
          matchIndex = 0;
          focusMatch(0);
        }
      }
      function focusMatch(i) {
        if (!searchMatches.length) return;
        searchMatches.forEach(el => el.classList.remove('ring-2','ring-amber-300/40'));
        const el = searchMatches[i];
        el.classList.add('ring-2','ring-amber-300/40');
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      findInChatBtn?.addEventListener('click', () => { findBar?.classList.remove('hidden'); findInput?.focus(); });
      findClose?.addEventListener('click', () => { findBar?.classList.add('hidden'); clearHighlights(); });
      findInput?.addEventListener('input', (e) => highlight(e.target.value));
      findNext?.addEventListener('click', () => {
        if (!searchMatches.length) return;
        matchIndex = (matchIndex + 1) % searchMatches.length;
        focusMatch(matchIndex);
      });
      findPrev?.addEventListener('click', () => {
        if (!searchMatches.length) return;
        matchIndex = (matchIndex - 1 + searchMatches.length) % searchMatches.length;
        focusMatch(matchIndex);
      });

      // Attach tray
      const attachBtn = document.getElementById('attachBtn');
      const imageBtn = document.getElementById('imageBtn');
      const attachTray = document.getElementById('attachTray');
      const closeTray = document.getElementById('closeTray');
      function toggleTray() { attachTray?.classList.toggle('hidden'); }
      attachBtn?.addEventListener('click', toggleTray);
      imageBtn?.addEventListener('click', toggleTray);
      closeTray?.addEventListener('click', toggleTray);

      // Composer logic
      const composer = document.getElementById('composer');
      const sendBtn = document.getElementById('sendBtn');
      const typingBar = document.getElementById('typingBar');
      const typingDot = document.getElementById('typingDot');
      const emojiBtn = document.getElementById('emojiBtn');
      const micBtn = document.getElementById('micBtn');
      let recording = false;

      function formatTime(d = new Date()) {
        const hh = d.getHours().toString().padStart(2,'0');
        const mm = d.getMinutes().toString().padStart(2,'0');
        return `${hh}:${mm}`;
      }
      function scrollTimelineToBottom() {
        timeline?.scrollTo({ top: timeline.scrollHeight, behavior: 'smooth' });
      }
      function htmlEscape(str) {
        return str.replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
      }
      function sendCurrentMessage() {
        if (!composer || !timeline) return;
        const text = composer.innerText.replace(/\u00A0/g, ' ').trim();
        if (!text) return;
        // Build outgoing bubble
        const wrap = document.createElement('div');
        wrap.className = 'flex justify-end';
        const msg = document.createElement('div');
        msg.className = 'max-w-[80%] group';
        msg.innerHTML = `
          <div class="rounded-2xl rounded-br-sm bg-indigo-600/20 ring-1 ring-indigo-400/30 px-3 py-2">
            <p class="text-sm">${htmlEscape(text).replace(/\n/g,'<br>')}</p>
          </div>
          <div class="mt-1 flex items-center justify-end gap-2">
            <span class="text-[11px] text-neutral-400">${formatTime()}</span>
            <svg class="w-4 h-4 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M3 12l3 3 7-7"></path><path d="M14 15l7-7"></path>
            </svg>
          </div>
        `;
        wrap.appendChild(msg);
        timeline.appendChild(wrap);
        composer.innerHTML = '';
        typingBar?.classList.remove('hidden');
        scrollTimelineToBottom();
        // Simulate reply typing
        typingDot?.classList.remove('hidden');
        setTimeout(() => {
          typingBar?.classList.add('hidden');
          typingDot?.classList.add('hidden');
          const incWrap = document.createElement('div');
          incWrap.className = 'flex items-end gap-2 max-w-[80%]';
          incWrap.innerHTML = `
            <img class="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80'convAvatar')?.getAttribute('src') || ''}" alt="">
            <div class="group">
              <div class="rounded-2xl rounded-bl-sm bg-neutral-900 ring-1 ring-white/10 px-3 py-2">
                <p class="text-sm">Got it! 👍</p>
              </div>
              <div class="mt-1 flex items-center gap-2">
                <span class="text-[10px] text-neutral-500">${formatTime(new Date())}</span>
              </div>
            </div>
          `;
          timeline.appendChild(incWrap);
          scrollTimelineToBottom();
        }, 1200 + Math.random()*800);
      }
      composer?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          sendCurrentMessage();
        }
      });
      composer?.addEventListener('focus', () => typingBar?.classList.remove('hidden'));
      composer?.addEventListener('blur', () => typingBar?.classList.add('hidden'));
      sendBtn?.addEventListener('click', sendCurrentMessage);
      emojiBtn?.addEventListener('click', () => {
        composer?.focus();
        // Try modern API
        try {
          document.execCommand('insertText', false, '😊');
        } catch {
          composer.innerText += ' 😊';
        }
      });
      micBtn?.addEventListener('click', () => {
        recording = !recording;
        if (recording) {
          micBtn.classList.add('bg-red-600/20','ring-1','ring-red-400/30');
          toast('Recording…', 'Click mic again to stop');
        } else {
          micBtn.classList.remove('bg-red-600/20','ring-1','ring-red-400/30');
          toast('Voice note saved', 'Ready to send');
        }
      });

      // Global/Chat search filters
      const chatSearch = document.getElementById('chatSearch');
      const globalSearch = document.getElementById('globalSearch');
      function filterChats(query) {
        const q = (query || '').toLowerCase();
        document.querySelectorAll('#chatList > button').forEach(btn => {
          const text = btn.innerText.toLowerCase();
          btn.classList.toggle('hidden', q && !text.includes(q));
        });
      }
      chatSearch?.addEventListener('input', (e) => filterChats(e.target.value));
      globalSearch?.addEventListener('input', (e) => filterChats(e.target.value));

      // Chat switching
      const convAvatar = document.getElementById('convAvatar');
      const convTitle = document.getElementById('convTitle');
      const convStatus = document.getElementById('convStatus');
      document.querySelectorAll('#chatList > button[data-chat-id]').forEach(item => {
        item.addEventListener('click', () => {
          const img = item.querySelector('img');
          const name = item.querySelector('p.text-sm.font-medium')?.textContent || 'Conversation';
          if (img && convAvatar) convAvatar.src = img.src;
          if (convTitle) convTitle.textContent = name;
          if (convStatus) convStatus.textContent = Math.random() > 0.5 ? 'Online' : 'Last seen recently';
          // close sidebar on mobile
          closeMobileSidebar();
          // Scroll timeline to bottom
          setTimeout(scrollTimelineToBottom, 50);
        });
      });

      // Open brand link
      document.getElementById('brandHome')?.addEventListener('click', () => { location.hash = ''; });

      // Find bar keyboard shortcut
      document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
          e.preventDefault();
          findBar?.classList.remove('hidden');
          findInput?.focus();
        }
      });

      // Settings: message alerts and sounds feedback
      document.getElementById('msgAlerts')?.addEventListener('change', (e) => {
        toast('Message alerts', e.target.checked ? 'Enabled' : 'Disabled');
      });
      document.getElementById('soundToggle')?.addEventListener('change', (e) => {
        toast('Sound', e.target.checked ? 'On' : 'Off');
      });

      // Fix minor SVG parsing issue (if any) silently by removing stray nodes
      // No-op in many browsers; safe guard to avoid errors
      try {
        document.querySelectorAll('svg path[path^="<path"]').forEach(el => el.remove());
      } catch {}

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen w-full flex flex-col" id="app">

<div className="fixed top-4 inset-x-0 mx-auto w-full max-w-sm z-50 hidden" id="toaster">
<div className="rounded-xl backdrop-blur ring-1 px-4 py-3 flex items-center gap-3 shadow-lg bg-slate-900/90 ring-white/10" style={{}}>

<svg aria-hidden="true" className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M6.5 8a5.5 5.5 0 1111 0c0 5 2 6 2 6H4.5s2-1 2-6"></path>
<path d="M9 18c.5 1 1.5 2 3 2s2.5-1 3-2"></path>
</svg>
<div className="text-sm">
<p className="font-medium tracking-tight text-slate-100 font-sans" style={{}}>Saved</p>
<p className="text-slate-400 font-sans" style={{}}>Your changes were updated.</p>
</div>
</div>
</div>

<div className="flex-1 flex pt-4 pr-4 pb-4 pl-4 items-center justify-center" id="authView">
<div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">

<div className="hidden md:flex flex-col justify-between rounded-2xl overflow-hidden ring-1 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(79,70,229,.25),transparent)] ring-white/10">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-green-500/20 ring-1 flex items-center justify-center font-semibold tracking-tight ring-green-400/30 text-green-300 font-sans">RC</div>
<button className="font-medium tracking-tight hover:text-slate-100 text-slate-200 font-sans" id="brandHome" style={{}}>ExamChat</button>
</div>
<span className="text-xs text-slate-400 font-sans" style={{}}>v1.0</span>
</div>
<div className="px-6">
<img alt="Cover" className="object-cover ring-1 rounded-xl ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/83753dc2-5006-4483-b6b6-abbecf8608fd_800w.webp"/>
<div className="mt-4 text-sm text-slate-300" style={{}}>
<p className="font-medium tracking-tight font-sans">Instant, secure conversations</p>
<p className="mt-1 text-slate-400 font-sans" style={{}}>1-on-1 and group chats with realtime delivery, typing state, reactions, and more.</p>
</div>
</div>
<div className="p-6 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-white/10">
<img alt="" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm text-slate-200 font-sans" style={{}}>“The cleanest chat interface we’ve used.”</p>
<p className="text-xs text-slate-500 mt-0.5 font-sans" style={{}}>Product Team</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 backdrop-blur p-6 ring-white/10 bg-slate-900/60" style={{}}>
<div className="flex items-center justify-between">
<div className="">
<h1 className="text-xl md:text-2xl tracking-tight font-sans font-semibold" style={{}}>Welcome back</h1>
<p className="text-sm mt-1 text-slate-400 font-sans" style={{}}>Sign in or create an account</p>
</div>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="themeToggleAuth" title="Toggle theme">

<svg className="w-5 h-5 text-neutral-300" fill="none" id="themeIconAuth" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
</svg>
</button>
</div>
<div className="mt-6 grid grid-cols-2 gap-1 p-1 rounded-lg ring-1 bg-slate-800/60 ring-white/10" style={{}}>
<button className="py-2 text-sm rounded-md ring-1 bg-slate-900 ring-white/10 font-sans" id="tabLogin" style={{}}>Login</button>
<button className="text-sm rounded-md pt-2 pb-2 hover:bg-white/5 font-sans" id="tabRegister">Register</button>
</div>

<form className="mt-6 space-y-4" id="loginForm">
<div className="">
<label className="text-sm text-slate-300 font-sans" style={{}}>Email</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path className="" d="M4 6h16v12H4z"></path><path className="" d="M22 6l-10 7L2 6"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" placeholder="you@example.com" required="" style={{}} type="email"/>
</div>
</div>
<div className="">
<label className="text-sm text-slate-300 font-sans" style={{}}>Password</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><rect className="" height="9" rx="2" width="16" x="4" y="11"></rect><path className="" d="M8 11V7a4 4 0 118 0v4"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" id="loginPassword" placeholder="••••••••" required="" style={{}} type="password"/>
<button className="pw-toggle p-1 rounded hover:bg-white/5" data-toggle="loginPassword" type="button">

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="peer sr-only" type="checkbox"/>
<div className="w-9 h-5 rounded-full ring-1 transition peer-checked:bg-green-600 bg-slate-800 ring-white/10" style={{}}></div>
<div className="-ml-7 w-4 h-4 peer-checked:bg-white rounded-full translate-x-0 peer-checked:translate-x-4 transition bg-slate-600" style={{}}></div>
<span className="ml-3 text-xs text-slate-400 font-sans" style={{}}>Remember me</span>
</label>
</div>
<button className="text-xs text-green-400 hover:text-green-300 font-sans" id="openForgot" type="button">Forgot password?</button>
</div>
</div>
<button className="hover:bg-green-500 ring-1 text-sm font-medium tracking-tight w-full rounded-lg pt-2.5 pb-2.5 ring-green-400/30 bg-green-600 font-sans" type="submit">Sign in</button>
</form>

<form className="mt-6 space-y-4 hidden" id="registerForm">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Full Name</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M20 21a8 8 0 10-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" placeholder="Jane Doe" required="" style={{}} type="text"/>
</div>
</div>
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Email</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M4 6h16v12H4z"></path><path d="M22 6l-10 7L2 6"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" placeholder="you@example.com" required="" style={{}} type="email"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Institution</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M3 21h18"></path><path d="M4 21V7l8-4 8 4v14"></path><path d="M9 21v-6h6v6"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" placeholder="University, Institute..." required="" style={{}} type="text"/>
</div>
</div>
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Course</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path><path d="M20 22H6.5A2.5 2.5 0 014 19.5V5.5A1.5 1.5 0 015.5 4H20z"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" placeholder="CS, Economics..." required="" style={{}} type="text"/>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Year of Study</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M16 2v4M8 2v4"></path><rect height="15" rx="2" width="18" x="3" y="6"></rect><path d="M3 10h18"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" max="10" min="1" placeholder="1" required="" style={{}} type="number"/>
</div>
</div>
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Profile Picture</label>
<label className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 cursor-pointer ring-white/10 bg-slate-900/80 hover:bg-white/5" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
<span className="text-sm text-slate-500 font-sans" style={{}}>Upload</span>
<input accept="image/*" className="hidden" type="file"/>
</label>
</div>
</div>
<div>
<label className="text-sm text-slate-300 font-sans" style={{}}>Password</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><rect height="9" rx="2" width="16" x="4" y="11"></rect><path d="M8 11V7a4 4 0 118 0v4"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" id="registerPassword" placeholder="Create a strong password" required="" style={{}} type="password"/>
<button className="pw-toggle p-1 rounded hover:bg-white/5" data-toggle="registerPassword" type="button">

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="mt-2">
<div className="flex gap-1">
<div className="h-1.5 flex-1 rounded bg-slate-800" id="pwBar1" style={{}}></div>
<div className="h-1.5 flex-1 rounded bg-slate-800" id="pwBar2" style={{}}></div>
<div className="h-1.5 flex-1 rounded bg-slate-800" id="pwBar3" style={{}}></div>
<div className="h-1.5 flex-1 rounded bg-slate-800" id="pwBar4" style={{}}></div>
</div>
<p className="text-xs mt-1 text-slate-500 font-sans" id="pwLabel" style={{}}>Strength: Weak</p>
</div>
</div>
<button className="w-full py-2.5 rounded-lg hover:bg-green-500 ring-1 text-sm font-medium tracking-tight bg-green-600 ring-green-400/30 font-sans" type="submit">Create account</button>
</form>
<div className="mt-6">
<button className="w-full text-xs underline underline-offset-4 text-slate-400 hover:text-slate-200 font-sans" id="demoLogin" style={{}}>Continue as demo</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="forgotModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-x-0 top-20 mx-auto w-full max-w-md">
<div className="rounded-xl ring-1 p-4 bg-slate-900 ring-white/10" style={{}}>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight font-sans">Reset password</h3>
<p className="text-sm text-slate-400 font-sans" style={{}}>We’ll send a code to your email</p>
</div>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="closeForgot">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="mt-4 space-y-3">
<div id="fpStep1">
<label className="text-sm text-slate-300 font-sans" style={{}}>Email</label>
<div className="mt-1 flex items-center gap-2 rounded-lg ring-1 px-3 py-2 ring-white/10 bg-slate-900/80" style={{}}>
<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M4 6h16v12H4z"></path><path d="M22 6l-10 7L2 6"></path></svg>
<input className="bg-transparent w-full outline-none text-sm placeholder-slate-500" id="fpEmail" placeholder="you@example.com" style={{}} type="email"/>
</div>
<button className="mt-3 w-full py-2 rounded-lg hover:bg-green-500 ring-1 text-sm font-medium tracking-tight bg-green-600 ring-green-400/30 font-sans" id="fpSend">Send code</button>
</div>
<div className="hidden" id="fpStep2">
<label className="text-sm text-slate-300 font-sans" style={{}}>Verification Code</label>
<input className="mt-1 w-full outline-none text-sm placeholder-slate-500 rounded-lg ring-1 px-3 py-2 bg-slate-900/80 ring-white/10" id="fpCode" placeholder="123456" style={{}} type="text"/>
<label className="text-sm mt-3 block text-slate-300 font-sans" style={{}}>New Password</label>
<input className="mt-1 w-full outline-none text-sm placeholder-slate-500 rounded-lg ring-1 px-3 py-2 bg-slate-900/80 ring-white/10" id="fpNew" placeholder="••••••••" style={{}} type="password"/>
<button className="mt-3 w-full py-2 rounded-lg hover:bg-amber-500 ring-1 text-sm font-medium tracking-tight bg-amber-600 ring-amber-400/30 font-sans" id="fpReset">Reset password</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden flex-1 min-h-0" id="mainView">
<div className="h-14 border-b flex items-center justify-between px-3 md:px-6 border-white/5">
<div className="flex items-center gap-3">
<button className="md:hidden p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="mobileSidebarToggle">

<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-green-500/20 ring-1 flex items-center justify-center font-semibold tracking-tight ring-green-400/30 text-green-300 font-sans">RC</div>
<span className="hidden sm:block text-sm text-slate-300 font-sans" style={{}}>Realtime Chat</span>
<span className="ml-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] ring-1 bg-amber-500/10 ring-amber-400/30 text-amber-300 font-sans">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"></path></svg>
                Realtime
              </span>
</div>
</div>
<div className="hidden md:flex items-center gap-3 flex-1 max-w-md ml-4">
<div className="flex items-center gap-2 ring-1 rounded-lg px-3 py-2 w-full bg-slate-900/80 ring-white/10" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
<input className="bg-transparent outline-none text-sm w-full placeholder-slate-500" id="globalSearch" placeholder="Search chats, messages..." style={{}}/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="themeToggle" title="Toggle theme">

<svg className="w-5 h-5 text-neutral-300" fill="none" id="themeIcon" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"></path>
</svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="openSettings" title="Settings">

<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
<path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.17a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 015 17.88l.06-.06A1.65 1.65 0 005.39 16a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.88a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 015.83 4.4l.06.06A1.65 1.65 0 007.71 4a1.65 1.65 0 001-1.51V2a2 2 0 014 0v.49a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06A2 2 0 0118.17 6l-.06.06A1.65 1.65 0 0018.61 8c.34.6.49 1.29.39 1.97"></path>
</svg>
</button>
<button className="ml-1 h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/10 hover:ring-green-400/40" id="openProfile" title="Profile">
<img alt="" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>
<div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)_360px]">

<aside className="min-h-0 overflow-y-auto border-r md:block hidden border-white/5 bg-slate-950" id="sidebar" style={{}}>
<div className="p-3 md:p-4">
<div className="md:hidden mb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-green-500/20 ring-1 flex items-center justify-center font-semibold tracking-tight ring-green-400/30 text-green-300 font-sans">RC</div>
<span className="text-sm text-slate-300 font-sans" style={{}}>Realtime Chat</span>
</div>
</div>
<div className="flex items-center gap-2 ring-1 rounded-lg px-3 py-2 bg-slate-900/80 ring-white/10" style={{}}>

<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
<input className="bg-transparent outline-none text-sm w-full placeholder-slate-500" id="chatSearch" placeholder="Search chats" style={{}}/>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="px-3 py-1.5 text-xs rounded-md ring-1 bg-slate-900 ring-white/10 font-sans" id="tabDirect" style={{}}>Direct</button>
<button className="px-3 py-1.5 text-xs rounded-md hover:bg-white/5 font-sans" id="tabGroups">Groups</button>
<button className="ml-auto px-2.5 py-1.5 text-xs rounded-md hover:bg-green-500 ring-1 bg-green-600 ring-green-400/30 font-sans" id="newChat">New</button>
</div>
</div>
<div className="px-1 pb-4 space-y-0.5" id="chatList">

<button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl ring-1 ring-transparent hover:bg-white/5 hover:ring-white/10" data-chat-id="c1">
<div className="relative">
<img alt="" className="h-11 w-11 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-slate-950" style={{}}></span>
</div>
<div className="flex-1 min-w-0 text-left">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium tracking-tight truncate font-sans">Alex Johnson</p>
<span className="text-[11px] text-slate-500 font-sans" style={{}}>14:21</span>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400" style={{}}>

<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 12l3 3 7-7"></path><path d="M14 15l7-7"></path></svg>
<span className="truncate font-sans">Got the files, thanks!</span>
</div>
</div>
<div className="ml-2">
<span className="text-[10px] px-1.5 py-0.5 rounded-full ring-1 bg-green-600/20 text-green-300 ring-green-400/30 font-sans" style={{}}>2</span>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl ring-1 ring-transparent hover:bg-white/5 hover:ring-white/10" data-chat-id="c2">
<div className="relative">
<img alt="" className="h-11 w-11 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-slate-500 ring-2 ring-slate-950" style={{}}></span>
</div>
<div className="flex-1 min-w-0 text-left">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium tracking-tight truncate font-sans">Design Squad</p>
<span className="text-[11px] text-slate-500 font-sans" style={{}}>10:02</span>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400" style={{}}>

<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><path d="M21 15a4 4 0 01-4 4H7l-4 4V7a4 4 0 014-4h10a4 4 0 014 4z"></path></svg>
<span className="truncate font-sans"><span className="text-slate-300 font-sans" style={{}}>@Maya</span> shared a new prototype</span>
</div>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl ring-1 ring-transparent hover:bg-white/5 hover:ring-white/10" data-chat-id="c3">
<div className="relative">
<img alt="" className="h-11 w-11 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-amber-500 ring-2 ring-slate-950" style={{}}></span>
</div>
<div className="flex-1 min-w-0 text-left">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium tracking-tight truncate font-sans">Maya Patel</p>
<span className="text-[11px] text-slate-500 font-sans" style={{}}>09:15</span>
</div>
<div className="flex items-center gap-1 text-xs text-slate-400" style={{}}>

<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3 3"></path></svg>
<span className="truncate font-sans">Sending image…</span>
</div>
</div>
</button>
</div>
</aside>

<main className="min-h-0 flex flex-col" id="conversation">

<div className="h-14 border-b px-3 md:px-4 flex items-center justify-between border-white/5">
<div className="flex items-center gap-3">
<button className="md:hidden p-2 rounded-lg ring-1 hidden hover:bg-white/5 ring-white/10" id="mobileBack">

<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<img alt="" className="h-9 w-9 rounded-full ring-1 ring-white/10" id="convAvatar" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight font-sans" id="convTitle">Alex Johnson</p>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-amber-500"></span>
<span className="text-xs text-slate-400 font-sans" id="convStatus" style={{}}>Online</span>
<span className="hidden text-xs text-slate-400 font-sans" id="typingDot" style={{}}>• typing…</span>
</div>
</div>
</div>
<div className="flex items-center gap-1.5">
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="findInChat" title="Search in conversation">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" title="Voice call">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.86 19.86 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.12.89.33 1.76.63 2.59a2 2 0 01-.45 2.11L9 9a16 16 0 006 6l.58-1.18a2 2 0 012.11-.45c.83.3 1.7.51 2.59.63A2 2 0 0122 16.92z"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" title="Video call">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="2" width="14" x="3" y="5"></rect><path d="M17 10l4-3v10l-4-3"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="openInfo" title="Chat details">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" title="More">

<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="6" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="18" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-2 md:px-4 py-4 space-y-6" id="timeline">

<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-white/5"></div>
<span className="text-[11px] text-slate-400 font-sans" style={{}}>Yesterday</span>
<div className="flex-1 h-px bg-white/5"></div>
</div>

<div className="flex items-end gap-2 max-w-[80%]">
<img alt="" className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="group">
<div className="rounded-2xl rounded-bl-sm ring-1 px-3 py-2 bg-slate-900 ring-white/10" style={{}}>
<p className="text-sm font-sans">Hey! Did you review the brief?</p>
</div>
<div className="mt-1 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10" title="Reply">

<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 14l-5-5 5-5"></path><path d="M4 9h10a7 7 0 017 7v1"></path></svg>
</button>
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10" title="Forward">

<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M15 14l5-5-5-5"></path><path d="M4 20v-7a4 4 0 014-4h12"></path></svg>
</button>
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10 font-sans" title="React">😊</button>
</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-[10px] text-slate-500 font-sans" style={{}}>20:40</span>
<div className="flex gap-1">
<span className="px-1.5 py-0.5 text-[10px] rounded-full ring-1 bg-white/5 ring-white/10 font-sans">👍 1</span>
</div>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="max-w-[80%] group">
<div className="text-[11px] mb-1 flex items-center justify-end gap-2 text-slate-400" style={{}}>
<span className="font-sans">20:43</span>

<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 12l3 3 7-7"></path><path d="M14 15l7-7"></path></svg>
</div>
<div className="rounded-2xl rounded-br-sm ring-1 px-3 py-2 bg-green-600/20 ring-green-400/30" style={{}}>
<div className="mb-1 text-xs border-l-2 pl-2 text-green-200/80 border-green-400/40 font-sans">
                      Replying to Alex: “review the brief?”
                    </div>
<p className="text-sm font-sans">Yes — left inline comments. Check section 3.</p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition">
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10" title="Edit">

<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z"></path></svg>
</button>
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10 font-sans" title="React">👍</button>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex-1 h-px bg-white/5"></div>
<span className="text-[11px] text-slate-400 font-sans" style={{}}>Today</span>
<div className="flex-1 h-px bg-white/5"></div>
</div>

<div className="flex items-end gap-2 max-w-[80%]">
<img alt="" className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="group">
<div className="rounded-2xl rounded-bl-sm ring-1 px-3 py-2 bg-slate-900 ring-white/10" style={{}}>
<p className="text-xs text-slate-400 font-sans" style={{}}>Maya</p>
<p className="text-sm mt-0.5 font-sans">Here’s the doc and a preview image.</p>
<div className="mt-2 grid grid-cols-2 gap-2">
<div className="aspect-video rounded-lg overflow-hidden ring-1 ring-white/10">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg ring-1 p-2 flex items-center justify-between bg-white/5 ring-white/10">
<div className="flex items-center gap-2">

<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg>
<div className="text-xs">
<p className="text-slate-200 font-sans" style={{}}>Brief_v3.pdf</p>
<p className="text-slate-500 font-sans" style={{}}>1.2 MB</p>
</div>
</div>
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10" title="Download">

<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M7 10l5 5 5-5"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-[10px] text-slate-500 font-sans" style={{}}>08:12</span>
</div>
</div>
</div>

<div className="flex justify-end">
<div className="max-w-[80%] group">
<div className="rounded-2xl rounded-br-sm ring-1 px-3 py-2 bg-green-600/20 ring-green-400/30" style={{}}>
<p className="text-sm font-sans">Awesome. I’ll review on my side too. Here’s the meeting link for later:</p>
<a className="block mt-2 rounded-lg overflow-hidden ring-1 transition bg-white/5 ring-white/10 hover:ring-green-400/40" href="#">
<div className="p-3">
<p className="text-xs text-green-300 font-sans">meet.example.com/standup-123</p>
<p className="text-[11px] text-slate-400 font-sans" style={{}}>Today at 4:30 PM</p>
</div>
</a>
</div>
<div className="mt-1 flex items-center justify-end gap-2">
<span className="text-[11px] text-slate-400 font-sans" style={{}}>08:15</span>

<svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M3 12l3 3 7-7"></path><path d="M14 15l7-7"></path></svg>
</div>
</div>
</div>

<div className="flex items-center justify-center">
<div className="text-[11px] px-3 py-1 rounded-full ring-1 text-slate-400 bg-white/5 ring-white/10 font-sans" style={{}}>Alex started a call • 09:02</div>
</div>

<div className="flex items-end gap-2 max-w-[80%]">
<img alt="" className="h-7 w-7 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="rounded-2xl rounded-bl-sm ring-1 px-3 py-2 bg-slate-900 ring-white/10" style={{}}>
<div className="flex gap-1 items-center">
<span className="sr-only font-sans">Typing…</span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce" style={{}}></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:120ms]" style={{}}></span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-500 animate-bounce [animation-delay:240ms]" style={{}}></span>
</div>
</div>
</div>
</div>

<div className="border-t p-2 md:p-3 border-white/5">
<div className="rounded-xl ring-1 bg-slate-900/70 ring-white/10" style={{}}>
<div className="flex items-center gap-1 p-2 md:p-2.5">
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="attachBtn" title="Attach">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21.44 11.05L12 20.5a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66L9.4 17.04a2 2 0 01-2.83-2.83l8.49-8.49"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="imageBtn" title="Image">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><path d="M21 15l-5-5L5 21"></path></svg>
</button>
<div aria-multiline="true" className="flex-1 min-h-[42px] max-h-40 overflow-y-auto outline-none text-sm px-2 py-2 placeholder-slate-500" contenteditable="true" data-placeholder="Write a message..." id="composer" role="textbox" style={{}}></div>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="emojiBtn" title="Emoji">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01M15 9h.01"></path></svg>
</button>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="micBtn" title="Record">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="12" rx="3" width="6" x="9" y="2"></rect><path d="M12 14v6"></path><path d="M8 20h8"></path></svg>
</button>
<button className="ml-1 px-3 py-2 rounded-lg hover:bg-green-500 ring-1 text-sm font-medium tracking-tight bg-green-600 ring-green-400/30 font-sans" id="sendBtn" title="Send">Send</button>
</div>

<div className="hidden border-t p-2 md:p-2.5 flex items-center gap-2 border-white/5" id="attachTray">
<label className="flex items-center gap-2 px-3 py-2 rounded-lg ring-1 cursor-pointer bg-white/5 ring-white/10 hover:bg-white/10">
<input accept="image/*" className="hidden" type="file"/>
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M21 15l-5-5L5 21"></path></svg>
<span className="text-xs text-slate-300 font-sans" style={{}}>Image</span>
</label>
<label className="flex items-center gap-2 px-3 py-2 rounded-lg ring-1 cursor-pointer bg-white/5 ring-white/10 hover:bg-white/10">
<input accept=".pdf,.doc,.docx,.zip" className="hidden" type="file"/>
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg>
<span className="text-xs text-slate-300 font-sans" style={{}}>File</span>
</label>
<button className="ml-auto text-xs text-slate-400 hover:text-slate-200 font-sans" id="closeTray" style={{}}>Close</button>
</div>
</div>
<div className="mt-1 px-1 flex items-center gap-3">
<div className="hidden text-[11px] text-slate-400 font-sans" id="typingBar" style={{}}>Alex is typing…</div>
<div className="ml-auto text-[11px] text-slate-500 font-sans" style={{}}>Press Enter to send • Shift+Enter for newline</div>
</div>
</div>
</main>

<aside className="min-h-0 overflow-y-auto border-l hidden xl:block border-white/5 bg-slate-950" id="infoPanel" style={{}}>
<div className="p-4">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium tracking-tight font-sans">Alex Johnson</p>
<p className="text-xs text-slate-400 font-sans" style={{}}>Last seen 2m ago</p>
</div>
<button className="ml-auto p-2 rounded-lg ring-1 xl:hidden hover:bg-white/5 ring-white/10" id="closeInfo" title="Close">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<button className="px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:bg-white/10 font-sans">Mute</button>
<button className="px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:bg-white/10 font-sans">Pin</button>
<button className="px-2 py-2 rounded-lg ring-1 text-xs bg-white/5 ring-white/10 hover:bg-white/10 font-sans">Block</button>
</div>
<div className="mt-6">
<p className="text-xs uppercase tracking-wider text-slate-500 font-sans" style={{}}>Pinned</p>
<div className="mt-2 space-y-2">
<div className="p-2 rounded-lg ring-1 text-sm bg-white/5 ring-white/10 font-sans">
                    Kickoff notes link saved here.
                  </div>
</div>
</div>
<div className="mt-6">
<p className="text-xs uppercase tracking-wider text-slate-500 font-sans" style={{}}>Shared media</p>
<div className="mt-2 grid grid-cols-3 gap-2">
<img alt="" className="aspect-square rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="aspect-square rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="aspect-square rounded-lg object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-6">
<p className="text-xs uppercase tracking-wider text-slate-500 font-sans" style={{}}>Files</p>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between p-2 rounded-lg ring-1 bg-white/5 ring-white/10">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path><path d="M14 2v6h6"></path></svg>
<div className="text-xs">
<p className="text-slate-200 font-sans" style={{}}>Brief_v3.pdf</p>
<p className="text-slate-500 font-sans" style={{}}>1.2 MB</p>
</div>
</div>
<button className="p-1.5 rounded-md ring-1 hover:bg-white/5 ring-white/10" title="Download">
<svg className="w-4 h-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 5v8"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full py-2 rounded-lg ring-1 text-sm bg-amber-600/20 hover:bg-amber-600/30 ring-amber-400/30 text-amber-300 font-sans">Clear chat</button>
</div>
</div>
</aside>
</div>
</div>

<div className="hidden fixed top-14 left-0 right-0 z-30 backdrop-blur border-b bg-slate-950/95 border-white/5" id="findBar" style={{}}>
<div className="max-w-3xl mx-auto px-3 md:px-4 py-2 flex items-center gap-2">
<svg className="w-4.5 h-4.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
<input className="flex-1 bg-transparent outline-none text-sm placeholder-slate-500" id="findInput" placeholder="Find in conversation" style={{}}/>
<div className="flex items-center gap-1">
<button className="px-2 py-1.5 text-xs rounded-md ring-1 bg-white/5 ring-white/10 hover:bg-white/10 font-sans" id="findPrev">Prev</button>
<button className="px-2 py-1.5 text-xs rounded-md ring-1 bg-white/5 ring-white/10 hover:bg-white/10 font-sans" id="findNext">Next</button>
<button className="px-2 py-1.5 text-xs rounded-md ring-1 hover:bg-white/5 ring-white/10 font-sans" id="findClose">Close</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="settingsModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-x-0 top-16 mx-auto w-full max-w-2xl p-4">
<div className="rounded-xl ring-1 bg-slate-900 ring-white/10" style={{}}>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<h3 className="text-lg font-semibold tracking-tight font-sans">Settings</h3>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="closeSettings">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="p-4 grid md:grid-cols-2 gap-4">
<div className="space-y-3">
<p className="text-sm text-slate-400 font-sans" style={{}}>Appearance</p>
<div className="flex items-center justify-between rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<span className="text-sm font-sans">Dark mode</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" id="toggleDark" type="checkbox"/>
<div className="w-10 h-5 rounded-full ring-1 peer-checked:bg-green-600 bg-slate-800 ring-white/10" style={{}}></div>
<div className="-ml-8 w-4 h-4 rounded-full translate-x-0 peer-checked:translate-x-5 transition bg-slate-600" style={{}}></div>
</label>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<label className="text-sm font-sans">Accent color</label>
<div className="mt-2 flex items-center gap-2">
<button className="h-6 w-6 rounded-full ring-2 ring-white/10 bg-green-600" data-accent="indigo"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-white/10 bg-amber-600" data-accent="emerald"></button>
<button className="h-6 w-6 rounded-full ring-2 ring-white/10 bg-violet-600" data-accent="violet" style={{}}></button>
<button className="h-6 w-6 rounded-full ring-2 ring-white/10 bg-rose-600" data-accent="rose"></button>
</div>
</div>
</div>
<div className="space-y-3">
<p className="text-sm text-slate-400 font-sans" style={{}}>Notifications</p>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<label className="flex items-center justify-between">
<span className="text-sm font-sans">Message alerts</span>
<input checked="" className="h-4 w-4 accent-green-600" id="msgAlerts" type="checkbox"/>
</label>
<label className="flex items-center justify-between mt-2">
<span className="text-sm font-sans">Sound</span>
<input className="h-4 w-4 accent-green-600" id="soundToggle" type="checkbox"/>
</label>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<label className="text-sm font-sans">Away status message</label>
<input className="mt-2 w-full rounded-md ring-1 px-3 py-2 text-sm outline-none bg-slate-900/80 ring-white/10" id="awayMsg" placeholder="On vacation, back Monday" style={{}}/>
</div>
</div>
</div>
<div className="p-4 border-t flex items-center justify-end gap-2 border-white/5">
<button className="px-3 py-2 rounded-lg hover:bg-green-500 ring-1 text-sm font-medium bg-green-600 ring-green-400/30 font-sans" id="saveSettings">Save</button>
</div>
</div>
</div>
</div>

<div className="hidden absolute right-3 top-14 z-40" id="profileMenu">
<div className="rounded-xl ring-1 p-2 w-48 bg-slate-900 ring-white/10" style={{}}>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white/5 font-sans" id="gotoProfile">View profile</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-white/5 font-sans" id="logout">Logout</button>
</div>
</div>

<div className="fixed inset-0 z-40 hidden" id="newChatModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-x-0 top-16 mx-auto w-full max-w-lg p-4">
<div className="rounded-xl ring-1 bg-slate-900 ring-white/10" style={{}}>
<div className="flex items-center justify-between p-4 border-b border-white/5">
<h3 className="text-lg font-semibold tracking-tight font-sans">Start new chat</h3>
<button className="p-2 rounded-lg ring-1 hover:bg-white/5 ring-white/10" id="closeNewChat">
<svg className="w-4.5 h-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>
</button>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center gap-2 ring-1 rounded-lg px-3 py-2 bg-slate-900/80 ring-white/10" style={{}}>
<svg className="w-4.5 h-4.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" style={{}} viewbox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.3-4.3"></path></svg>
<input className="bg-transparent outline-none text-sm w-full placeholder-slate-500" id="newChatSearch" placeholder="Search people or groups" style={{}}/>
</div>
<div className="space-y-1 max-h-64 overflow-y-auto">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-medium font-sans">Jordan Lee</p>
<p className="text-xs text-slate-500 font-sans" style={{}}>Product</p>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<p className="text-sm font-medium font-sans">Amelia Brown</p>
<p className="text-xs text-slate-500 font-sans" style={{}}>Design</p>
</div>
</button>
</div>
</div>
<div className="p-4 border-t flex items-center justify-end border-white/5">
<button className="px-3 py-2 rounded-lg hover:bg-green-500 ring-1 text-sm font-medium bg-green-600 ring-green-400/30 font-sans">Create</button>
</div>
</div>
</div>
</div>
</div> 


    </>
  );
}
