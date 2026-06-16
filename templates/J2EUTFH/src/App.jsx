import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Utilities
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const uid = (len = 6) => Math.random().toString(36).slice(2, 2 + len).toUpperCase();
      const now = () => new Date().toISOString();

      // Storage keys
      const LS_ROOMS = 'monogamer.rooms';
      const LS_NAME = 'monogamer.playerName';
      const SS_CURRENT = 'monogamer.currentRoomId';

      // State
      let rooms = loadRooms();
      let currentRoomId = sessionStorage.getItem(SS_CURRENT) || null;
      let playerName = localStorage.getItem(LS_NAME) || '';

      // Elements
      const roomsGrid = $('#roomsGrid');
      const roomsEmpty = $('#roomsEmpty');
      const roomView = $('#roomView');
      const statRooms = $('#statRooms');
      const statPlayers = $('#statPlayers');

      const displayNameInput = $('#displayNameInput');
      const saveNameBtn = $('#saveNameBtn');

      const openCreateModalBtn = $('#openCreateModalBtn');
      const ctaCreate = $('#ctaCreate');
      const emptyCreateBtn = $('#emptyCreateBtn');
      const submitCreateBtn = $('#submitCreateBtn');
      const cancelCreateBtn = $('#cancelCreateBtn');
      const closeCreateModalBtn = $('#closeCreateModalBtn');
      const createModal = $('#createModal');
      const createOverlay = $('#createOverlay');

      const roomNameInput = $('#roomNameInput');
      const visibilityToggle = $('#visibilityToggle');
      const visibilityLabel = $('#visibilityLabel');
      const maxPlayersSeg = $('#maxPlayersSeg');
      const ruleButtons = $$('.rule-btn');

      const quickPlayBtn = $('#quickPlayBtn');
      const ctaRandom = $('#ctaRandom');
      const emptyRandomBtn = $('#emptyRandomBtn');
      const tipQuickStart = $('#tipQuickStart');

      const backToLobbyBtn = $('#backToLobbyBtn');
      const roomTitle = $('#roomTitle');
      const roomCodePill = $('#roomCodePill');
      const playersList = $('#playersList');
      const playersCount = $('#playersCount');
      const copyInviteBtn = $('#copyInviteBtn');
      const startGameBtn = $('#startGameBtn');
      const rollDiceBtn = $('#rollDiceBtn');
      const turnIndicator = $('#turnIndicator');
      const actionLog = $('#actionLog');

      const chatFeed = $('#chatFeed');
      const chatForm = $('#chatForm');
      const chatInput = $('#chatInput');
      const clearChatBtn = $('#clearChatBtn');

      const toast = $('#toast');
      const toastMsg = $('#toastMsg');

      // Added: Join by code elements
      const joinCodeInput = $('#joinCodeInput');
      const joinCodeBtn = $('#joinCodeBtn');

      // Init name
      displayNameInput.value = playerName || '';

      // Defaults for modal
      let modalData = { private: false, maxPlayers: 4, rules: 'classic' };
      highlightSeg(maxPlayersSeg, String(modalData.maxPlayers));
      highlightRules(modalData.rules);
      updateVisibility(modalData.private);

      // Render Lobby
      function renderLobby() {
        const openRooms = rooms.filter(r => !r.started);
        statRooms.textContent = `${openRooms.length} open rooms`;

        const playerTotal = rooms.reduce((sum, r) => sum + r.players.length, 0);
        statPlayers.textContent = `${playerTotal} players online`;

        roomsEmpty.classList.toggle('hidden', openRooms.length !== 0);
        roomsGrid.innerHTML = '';

        openRooms
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .forEach(room => {
            const card = document.createElement('div');
            card.className = 'rounded-xl bg-neutral-900/50 border border-white/10 hover:border-white/20 transition overflow-hidden group';
            card.innerHTML = `
              <div class="p-4 flex items-start justify-between gap-4">
                <div>
                  <div class="flex items-center gap-2">
                    <p class="text-sm font-medium tracking-tight text-neutral-200">${escapeHtml(room.name)}</p>
                    ${room.private ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-neutral-950 border border-white/10 text-neutral-400">Private</span>' : ''}
                  </div>
                  <div class="mt-1 flex items-center gap-3 text-xs text-neutral-400">
                    <span class="inline-flex items-center gap-1"><i data-lucide="users" class="w-4 h-4"></i>${room.players.length}/${room.maxPlayers}</span>
                    <span class="inline-flex items-center gap-1"><i data-lucide="clock" class="w-4 h-4"></i>${timeAgo(room.createdAt)}</span>
                  </div>
                  <div class="mt-2 text-xs text-neutral-500">Code: <span class="text-neutral-300">${room.code}</span></div>
                </div>
                <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=320&auto=format&fit=crop" class="h-16 w-24 rounded-md object-cover border border-white/10 opacity-90 group-hover:opacity-100 transition" alt="room" />
              </div>
              <div class="border-t border-white/10 p-3 flex items-center justify-between">
                <div class="text-xs text-neutral-400 inline-flex items-center gap-1">
                  <i data-lucide="sliders-horizontal" class="w-4 h-4"></i>
                  ${labelRules(room.rules)}
                </div>
                <div class="flex items-center gap-2">
                  <button data-join="${room.id}" class="join-btn inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 text-neutral-100 transition">
                    <i data-lucide="log-in" class="w-4 h-4"></i>
                    Join
                  </button>
                </div>
              </div>
            `;
            roomsGrid.appendChild(card);
          });

        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        // Attach join handlers
        $$('.join-btn', roomsGrid).forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-join');
            joinRoomById(id);
          });
        });
      }

      // Render Room view
      function renderRoomView(roomId) {
        const room = rooms.find(r => r.id === roomId);
        if (!room) return toLobby();

        $('#roomTitle').textContent = room.name;
        roomCodePill.textContent = `Code: ${room.code}`;
        playersCount.textContent = `${room.players.length}/${room.maxPlayers}`;

        // Players
        playersList.innerHTML = '';
        room.players.forEach(p => {
          const row = document.createElement('div');
          row.className = 'flex items-center justify-between rounded-md border border-white/10 bg-neutral-950 p-2';
          row.innerHTML = `
            <div class="flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-8 w-8 rounded-md object-cover border border-white/10" alt="${escapeHtml(p.name)}" />
              <div>
                <p class="text-sm text-neutral-200">${escapeHtml(p.name)} ${p.id === room.hostId ? '<span class="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-neutral-900 border border-white/10 text-neutral-400">Host</span>' : ''}</p>
                <p class="text-[11px] text-neutral-500">Cash: $1500</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="h-2 w-2 rounded-full ${room.turnId === p.id ? 'bg-emerald-400' : 'bg-neutral-600'}"></span>
            </div>
          `;
          playersList.appendChild(row);
        });

        // Controls
        const me = ensureSelfInRoom(room);
        const isHost = me && me.id === room.hostId;

        startGameBtn.disabled = !isHost || room.started;
        startGameBtn.classList.toggle('opacity-50', startGameBtn.disabled);
        rollDiceBtn.disabled = !room.started || room.turnId !== me.id;

        turnIndicator.textContent = room.started
          ? (room.turnId === me.id ? 'Your turn' : `Waiting for ${playerNameOf(room.turnId, room)}...`)
          : 'Waiting for host...';

        // Chat
        renderChat(room);

        // Log
        actionLog.innerHTML = '';
        room.log.slice(-12).forEach(entry => {
          const li = document.createElement('li');
          li.className = 'flex items-center gap-2';
          li.innerHTML = `<span class="text-neutral-500">${timeAgo(entry.t)}:</span><span>${escapeHtml(entry.msg)}</span>`;
          actionLog.appendChild(li);
        });

        // Toggle views
        roomView.classList.remove('hidden');
        // Hide lobby sections
        document.querySelectorAll('section:not(#roomView)').forEach(s => s.classList.add('hidden'));
      }

      function renderChat(room) {
        chatFeed.innerHTML = '';
        room.chat.slice(-50).forEach(m => appendChat(m));
        chatFeed.scrollTop = chatFeed.scrollHeight;
      }

      function appendChat(msg) {
        const item = document.createElement('div');
        item.className = 'rounded-md border border-white/10 bg-neutral-950 p-2';
        item.innerHTML = `
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" class="h-6 w-6 rounded object-cover border border-white/10" />
              <p class="text-xs font-medium text-neutral-200">${escapeHtml(msg.author)}</p>
            </div>
            <span class="text-[10px] text-neutral-500">${timeAgo(msg.t)}</span>
          </div>
          <p class="mt-1 text-xs text-neutral-300">${escapeHtml(msg.text)}</p>
        `;
        chatFeed.appendChild(item);
      }

      // Actions
      function toLobby() {
        roomView.classList.add('hidden');
        document.querySelectorAll('section:not(#roomView)').forEach(s => s.classList.remove('hidden'));
        currentRoomId = null;
        sessionStorage.removeItem(SS_CURRENT);
        renderLobby();
      }

      function showCreateModal() {
        createModal.classList.remove('hidden');
      }
      function hideCreateModal() {
        createModal.classList.add('hidden');
        // reset
        roomNameInput.value = '';
        modalData = { private: modalData.private, maxPlayers: modalData.maxPlayers, rules: modalData.rules };
      }

      function updateVisibility(isPrivate) {
        modalData.private = isPrivate;
        visibilityLabel.textContent = isPrivate ? 'Private' : 'Public';
        const icon = visibilityToggle.querySelector('i');
        icon?.remove();
        const i = document.createElement('i');
        i.setAttribute('data-lucide', isPrivate ? 'lock' : 'lock-open');
        i.className = 'w-4 h-4';
        visibilityToggle.prepend(i);
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      function highlightSeg(container, val) {
        $$('.seg-btn', container).forEach(b => {
          const active = b.getAttribute('data-max') === val;
          b.classList.toggle('border-indigo-500/60', active);
          b.classList.toggle('bg-indigo-500/10', active);
          b.classList.toggle('text-indigo-200', active);
        });
      }

      function highlightRules(val) {
        ruleButtons.forEach(b => {
          const active = b.getAttribute('data-rules') === val;
          b.classList.toggle('border-indigo-500/60', active);
          b.classList.toggle('bg-indigo-500/10', active);
          b.classList.toggle('text-indigo-200', active);
        });
      }

      function labelRules(r) {
        if (r === 'classic') return 'Classic rules';
        if (r === 'speed') return 'Speed game';
        return 'House rules';
      }

      function createRoom({ name, maxPlayers, isPrivate, rules }) {
        const id = cryptoRandomId();
        const room = {
          id,
          name: name || `Room ${uid(3)}`,
          code: uid(6),
          createdAt: now(),
          maxPlayers: Number(maxPlayers) || 4,
          private: !!isPrivate,
          rules: rules || 'classic',
          hostId: null,
          players: [],
          chat: [],
          log: [],
          started: false,
          turnId: null
        };
        rooms.push(room);
        saveRooms();
        renderLobby();
        return room.id;
      }

      function cryptoRandomId() {
        if (crypto && crypto.randomUUID) return crypto.randomUUID();
        return 'r_' + Math.random().toString(36).slice(2);
      }

      function joinRoomById(id) {
        const room = rooms.find(r => r.id === id);
        if (!room) return toastIt('Room no longer exists');
        if (room.players.length >= room.maxPlayers) return toastIt('Room is full');
        const me = ensureSelfInRoom(room, { asHostIfEmpty: false });
        if (!me) return;
        currentRoomId = room.id;
        sessionStorage.setItem(SS_CURRENT, currentRoomId);
        saveRooms();
        updateURLWithCode(room.code);
        renderRoomView(room.id);
      }

      // Added: Join by code and linkable URL
      function joinRoomByCode(code) {
        const c = (code || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
        if (!c) return toastIt('Enter a valid code');
        let room = rooms.find(r => (r.code || '').toUpperCase() === c);
        if (!room) {
          const id = createRoom({ name: `Room ${c}`, maxPlayers: 4, isPrivate: false, rules: 'classic' });
          room = rooms.find(r => r.id === id);
          room.code = c;
          saveRooms();
        }
        const me = ensureSelfInRoom(room);
        if (!me) return;
        currentRoomId = room.id;
        sessionStorage.setItem(SS_CURRENT, currentRoomId);
        saveRooms();
        updateURLWithCode(room.code);
        renderRoomView(room.id);
        toastIt('Joined by code');
      }

      function updateURLWithCode(code) {
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('code', code);
          history.replaceState({}, '', url);
        } catch {}
      }

      function quickPlay() {
        // Prefer public, not full, not started
        let candidates = rooms.filter(r => !r.started && !r.private && r.players.length < r.maxPlayers);
        if (candidates.length === 0) {
          const id = createRoom({ name: 'Quick Match', maxPlayers: 4, isPrivate: false, rules: 'classic' });
          candidates = rooms.filter(r => r.id === id);
        }
        const room = candidates[Math.floor(Math.random() * candidates.length)];
        const me = ensureSelfInRoom(room);
        if (!me) return;
        currentRoomId = room.id;
        sessionStorage.setItem(SS_CURRENT, currentRoomId);
        saveRooms();
        updateURLWithCode(room.code);
        renderRoomView(room.id);
      }

      function ensureSelfInRoom(room, opts = {}) {
        const name = getOrAskName();
        if (!name) return null;
        let me = room.players.find(p => p.name === name);
        if (!me) {
          const p = { id: cryptoRandomId(), name };
          room.players.push(p);
          if (!room.hostId && (opts.asHostIfEmpty !== false)) room.hostId = p.id;
          room.log.push({ t: now(), msg: `${name} joined the room` });
          // autostart turn if it's the first player
          if (!room.turnId) room.turnId = p.id;
          me = p;
          saveRooms();
        }
        return me;
      }

      function getOrAskName() {
        playerName = (displayNameInput.value || localStorage.getItem(LS_NAME) || '').trim();
        if (!playerName) {
          playerName = `Player_${uid(3)}`;
          displayNameInput.value = playerName;
          localStorage.setItem(LS_NAME, playerName);
          toastIt(`Using name ${playerName}`);
        }
        return playerName;
      }

      function playerNameOf(pid, room) {
        return room.players.find(p => p.id === pid)?.name || 'Player';
      }

      // Save/load
      function saveRooms() {
        localStorage.setItem(LS_ROOMS, JSON.stringify(rooms));
      }
      function loadRooms() {
        try {
          return JSON.parse(localStorage.getItem(LS_ROOMS) || '[]');
        } catch {
          return [];
        }
      }

      // Helpers
      function timeAgo(iso) {
        const sec = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
        if (sec < 60) return `${sec}s ago`;
        const m = Math.floor(sec / 60);
        if (m < 60) return `${m}m ago`;
        const h = Math.floor(m / 60);
        if (h < 24) return `${h}h ago`;
        const d = Math.floor(h / 24);
        return `${d}d ago`;
      }

      function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[s]));
      }

      function toastIt(msg, timeout = 1800) {
        toastMsg.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), timeout);
      }

      // Event wiring
      saveNameBtn.addEventListener('click', () => {
        const name = (displayNameInput.value || '').trim();
        if (!name) return toastIt('Enter a name');
        localStorage.setItem(LS_NAME, name);
        toastIt('Name saved');
        renderLobby();
        const room = rooms.find(r => r.id === currentRoomId);
        if (room) {
          const p = room.players.find(p => p.name === playerName);
          if (p) p.name = name;
          playerName = name;
          saveRooms();
          renderRoomView(room.id);
        }
      });

      [openCreateModalBtn, ctaCreate, emptyCreateBtn].forEach(btn => btn.addEventListener('click', showCreateModal));
      [cancelCreateBtn, closeCreateModalBtn, createOverlay].forEach(el => el.addEventListener('click', hideCreateModal));

      visibilityToggle.addEventListener('click', () => {
        updateVisibility(!modalData.private);
      });

      maxPlayersSeg.addEventListener('click', (e) => {
        const b = e.target.closest('.seg-btn');
        if (!b) return;
        modalData.maxPlayers = Number(b.getAttribute('data-max'));
        highlightSeg(maxPlayersSeg, String(modalData.maxPlayers));
      });

      ruleButtons.forEach(b => b.addEventListener('click', () => {
        modalData.rules = b.getAttribute('data-rules');
        highlightRules(modalData.rules);
      }));

      submitCreateBtn.addEventListener('click', () => {
        const name = roomNameInput.value.trim() || undefined;
        const id = createRoom({ name, maxPlayers: modalData.maxPlayers, isPrivate: modalData.private, rules: modalData.rules });
        hideCreateModal();
        // Auto-join as host
        const room = rooms.find(r => r.id === id);
        ensureSelfInRoom(room, { asHostIfEmpty: true });
        currentRoomId = id;
        sessionStorage.setItem(SS_CURRENT, currentRoomId);
        saveRooms();
        updateURLWithCode(room.code);
        renderRoomView(id);
        toastIt('Room created');
      });

      [quickPlayBtn, ctaRandom, emptyRandomBtn, tipQuickStart].forEach(btn => btn.addEventListener('click', quickPlay));

      backToLobbyBtn.addEventListener('click', toLobby);

      copyInviteBtn.addEventListener('click', async () => {
        const room = rooms.find(r => r.id === currentRoomId);
        if (!room) return;
        try {
          const url = new URL(window.location.href);
          url.searchParams.set('code', room.code);
          await navigator.clipboard.writeText(url.toString());
          toastIt('Invite link copied');
        } catch {
          toastIt('Copy failed');
        }
      });

      startGameBtn.addEventListener('click', () => {
        const room = rooms.find(r => r.id === currentRoomId);
        if (!room) return;
        const me = ensureSelfInRoom(room);
        const isHost = me && me.id === room.hostId;
        if (!isHost) return toastIt('Only host can start');
        if (room.players.length < 2) return toastIt('Need at least 2 players');
        room.started = true;
        if (!room.turnId) room.turnId = room.players[0].id;
        room.log.push({ t: now(), msg: 'Game started' });
        saveRooms();
        renderRoomView(room.id);
      });

      rollDiceBtn.addEventListener('click', () => {
        const room = rooms.find(r => r.id === currentRoomId);
        if (!room || !room.started) return;
        const me = ensureSelfInRoom(room);
        if (room.turnId !== me.id) return;
        const d1 = 1 + Math.floor(Math.random() * 6);
        const d2 = 1 + Math.floor(Math.random() * 6);
        const total = d1 + d2;
        room.log.push({ t: now(), msg: `${me.name} rolled ${d1} + ${d2} = ${total}` });
        // Next turn
        const idx = room.players.findIndex(p => p.id === me.id);
        const next = room.players[(idx + 1) % room.players.length];
        room.turnId = next.id;
        saveRooms();
        renderRoomView(room.id);
      });

      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        const room = rooms.find(r => r.id === currentRoomId);
        if (!room) return;
        const name = getOrAskName();
        const msg = { t: now(), author: name, text };
        room.chat.push(msg);
        saveRooms();
        appendChat(msg);
        chatInput.value = '';
        chatFeed.scrollTop = chatFeed.scrollHeight;
      });

      clearChatBtn.addEventListener('click', () => {
        const room = rooms.find(r => r.id === currentRoomId);
        if (!room) return;
        room.chat = [];
        saveRooms();
        renderChat(room);
      });

      // Join by code events
      if (joinCodeBtn && joinCodeInput) {
        joinCodeBtn.addEventListener('click', () => joinRoomByCode(joinCodeInput.value));
        joinCodeInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            joinRoomByCode(joinCodeInput.value);
          }
        });
      }

      // Initial render
      renderLobby();

      // Deep link: ?code=XXXX to join/create that room code
      (function handleDeepLink() {
        try {
          const params = new URLSearchParams(location.search);
          const code = params.get('code');
          if (code) {
            joinRoomByCode(code);
            return; // prioritize deep link
          }
        } catch {}
        // If session had a room, open it
        if (currentRoomId && rooms.find(r => r.id === currentRoomId)) {
          renderRoomView(currentRoomId);
        }
      })();

      // Helpers: small reactive refresh for lobby every few seconds (local only)
      setInterval(() => {
        rooms = loadRooms();
        if (!currentRoomId) renderLobby();
      }, 2000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(80,80,200,0.12),transparent_60%)]"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">

<div className="flex items-center gap-4">
<div className="h-9 w-9 rounded-md bg-neutral-900 ring-1 ring-white/10 flex items-center justify-center text-neutral-100 tracking-tight text-[15px] font-semibold">
                MG
              </div>
<div className="hidden md:flex items-center gap-2 text-neutral-400 text-sm">
<i className="w-4 h-4" data-lucide="swords"></i>
<span>Rooms. Dice. Trade. Win.</span>
</div>
</div>

<div className="flex items-center gap-3">

<div className="hidden sm:flex items-center gap-2 group">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="user"></i>
<input className="w-44 lg:w-56 pl-9 pr-3 py-2 rounded-md bg-neutral-900/80 border border-white/10 outline-none text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 transition" id="displayNameInput" inputmode="text" maxlength="20" placeholder="Your name" type="text"/>
</div>
<button className="rounded-md px-3 py-2 text-sm font-medium text-neutral-100 bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 transition" id="saveNameBtn">
                  Save
                </button>
</div>
<div className="hidden md:block w-px h-6 bg-white/10"></div>

<div className="hidden lg:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="hash"></i>
<input className="w-32 lg:w-36 pl-9 pr-3 py-2 rounded-md bg-neutral-900/80 border border-white/10 outline-none text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 transition uppercase tracking-wide" id="joinCodeInput" inputmode="text" maxlength="12" placeholder="Room code" type="text"/>
</div>
<button className="rounded-md px-3 py-2 text-sm font-medium text-neutral-100 bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 transition" id="joinCodeBtn">
                  Join
                </button>
</div>
<div className="hidden md:block w-px h-6 bg-white/10"></div>

<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 text-neutral-100 transition" id="openCreateModalBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create Room
              </button>

<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16)_inset] transition" id="quickPlayBtn">
<i className="w-4 h-4" data-lucide="dice-5"></i>
                Play Random
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<div className="relative overflow-hidden rounded-xl bg-neutral-900/50 border border-white/10">
<div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(99,102,241,0.12),transparent),radial-gradient(400px_150px_at_80%_0%,rgba(59,130,246,0.12),transparent)]"></div>
<div className="relative p-6 sm:p-8">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="bolt"></i>
<span>Online lobbies</span>
</div>
<h1 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold text-neutral-100">
                    Roll, trade, and conquer — together.
                  </h1>
<p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl">
                    Create a room and share the invite link or code. This demo simulates online play locally — connect your realtime backend to sync across devices.
                  </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 text-neutral-100 transition" id="ctaCreate">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                      Create a Room
                    </button>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90 transition" id="ctaRandom">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                      Join Random
                    </button>
<div className="ml-2 flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>No downloads — play in browser</span>
</div>
</div>
</div>
<div className="relative border-t border-white/10 px-6 sm:px-8 py-4 flex items-center gap-6 text-xs text-neutral-400">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="users"></i>
<span id="statPlayers">0 players online</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="gamepad-2"></i>
<span id="statRooms">0 open rooms</span>
</div>
<div className="ml-auto flex items-center gap-2">
<i className="w-4 h-4" data-lucide="trophy"></i>
<span>Top roll today: <span className="text-neutral-200">12</span></span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="relative overflow-hidden rounded-xl bg-neutral-900/50 border border-white/10 p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="dice-6"></i>
</div>
<div>
<p className="text-sm font-medium text-neutral-200 tracking-tight">Quick Start</p>
<p className="text-xs text-neutral-400">Two clicks to a lobby</p>
</div>
</div>
<button className="text-xs px-2.5 py-1.5 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800/80 transition" id="tipQuickStart">
                    Try it
                  </button>
</div>
<div className="mt-4 text-xs text-neutral-400 leading-relaxed">
                  Use Play Random to match into an active public room. Or create a private one and share the code.
                </div>
</div>
<div className="relative overflow-hidden rounded-xl bg-neutral-900/50 border border-white/10 p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-sky-400" data-lucide="route"></i>
</div>
<div>
<p className="text-sm font-medium text-neutral-200 tracking-tight">How turns work</p>
<p className="text-xs text-neutral-400">Roll, move, act, end turn</p>
</div>
</div>
<ul className="mt-3 space-y-1.5 text-xs text-neutral-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="chevron-right"></i>Roll dice and move your token</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="chevron-right"></i>Buy, pay rent, or draw a card</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="chevron-right"></i>Trade or manage properties</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-neutral-100">Open Rooms</h2>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Refreshed live on this device</span>
</div>
</div>
<div className="hidden rounded-xl border border-dashed border-white/10 bg-neutral-900/30 p-8 text-center" id="roomsEmpty">
<div className="mx-auto h-12 w-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
<i className="w-6 h-6 text-neutral-400" data-lucide="infinity"></i>
</div>
<p className="mt-3 text-neutral-300 font-medium tracking-tight">No rooms yet</p>
<p className="text-sm text-neutral-400">Be the first to create one and invite friends with the room code.</p>
<div className="mt-4 flex items-center justify-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 text-neutral-100 transition" id="emptyCreateBtn">
<i className="w-4 h-4" data-lucide="plus"></i>
                Create Room
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2.5 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90 transition" id="emptyRandomBtn">
<i className="w-4 h-4" data-lucide="dice-3"></i>
                Play Random
              </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="roomsGrid"></div>
</section>

<section className="hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 pb-16" id="roomView">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80" id="backToLobbyBtn">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                Lobby
              </button>
<div className="w-px h-6 bg-white/10"></div>
<p className="text-lg sm:text-xl tracking-tight font-semibold text-neutral-100" id="roomTitle">Room</p>
<span className="ml-2 text-xs px-2.5 py-1 rounded-full bg-neutral-900 border border-white/10 text-neutral-300" id="roomCodePill"></span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80" id="copyInviteBtn">
<i className="w-4 h-4" data-lucide="copy"></i>
                Copy Invite
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90" id="startGameBtn">
<i className="w-4 h-4" data-lucide="play"></i>
                Start
              </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<aside className="lg:col-span-3 rounded-xl bg-neutral-900/50 border border-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="users"></i>
<p className="text-sm font-medium tracking-tight text-neutral-200">Players</p>
</div>
<span className="text-xs text-neutral-400" id="playersCount">0/0</span>
</div>
<div className="mt-3 space-y-2" id="playersList"></div>
<div className="mt-3 pt-3 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="crown"></i>
<span>Host can start the game</span>
</div>
</div>
</aside>

<section className="lg:col-span-6 rounded-xl bg-neutral-900/50 border border-white/10 overflow-hidden">
<div className="border-b border-white/10 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="grid"></i>
<p className="text-sm font-medium tracking-tight text-neutral-200">Board</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80 disabled:opacity-50 disabled:cursor-not-allowed" id="rollDiceBtn">
<i className="w-4 h-4" data-lucide="dice-2"></i>
                    Roll Dice
                  </button>
<span className="text-xs text-neutral-400" id="turnIndicator">Waiting for host...</span>
</div>
</div>
<div className="p-4 sm:p-6">

<div className="aspect-square rounded-lg bg-neutral-950 border border-white/10 relative overflow-hidden">
<div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-[0.035]">
<div className="col-span-8 row-span-8 bg-[linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:36px_36px]"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="flex items-center justify-center gap-2 text-neutral-400">
<i className="w-5 h-5" data-lucide="map"></i>
<p className="text-sm">Board rendering placeholder</p>
</div>
<p className="mt-1 text-xs text-neutral-500">Hook your game engine here</p>
</div>
</div>
</div>

<div className="mt-4 rounded-lg bg-neutral-950 border border-white/10 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="w-4 h-4" data-lucide="list"></i>
<span>Actions</span>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-neutral-300" id="actionLog"></ul>
</div>
</div>
</section>

<aside className="lg:col-span-3 rounded-xl bg-neutral-900/50 border border-white/10 flex flex-col">
<div className="border-b border-white/10 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="message-square"></i>
<p className="text-sm font-medium tracking-tight text-neutral-200">Room Chat</p>
</div>
<button className="text-xs px-2 py-1 rounded-md bg-neutral-900 border border-white/10 hover:bg-neutral-800/80" id="clearChatBtn">
                  Clear
                </button>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-2" id="chatFeed">

</div>
<div className="p-3 border-t border-white/10">
<form className="flex items-center gap-2" id="chatForm">
<div className="relative flex-1">
<i className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="send"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md bg-neutral-950 border border-white/10 outline-none text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 transition" id="chatInput" placeholder="Message" type="text"/>
</div>
<button className="rounded-md px-3 py-2 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90">
                    Send
                  </button>
</form>
</div>
</aside>
</div>
</section>
</main>

<footer className="mt-16 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-neutral-500 flex items-center justify-between">
<span>MonoGamer — demo UI</span>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300 transition" href="#">Terms</a>
<a className="hover:text-neutral-300 transition" href="#">Privacy</a>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden" id="createModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="createOverlay"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-neutral-950 border border-white/10 shadow-xl">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-neutral-400" data-lucide="plus-square"></i>
<p className="text-sm font-medium tracking-tight text-neutral-200">Create a Room</p>
</div>
<button className="rounded-md p-2 hover:bg-neutral-900 border border-transparent hover:border-white/10" id="closeCreateModalBtn">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Room name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 outline-none text-sm text-neutral-100 placeholder:text-neutral-500 focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/10 transition" id="roomNameInput" maxlength="32" placeholder="Friday Night Lobby" type="text"/>
</div>
<div>
<label className="text-xs text-neutral-400">Max players</label>
<div className="mt-1 flex items-center gap-2" id="maxPlayersSeg">

<button className="seg-btn inline-flex items-center justify-center w-12 h-9 rounded-md bg-neutral-900 border border-white/10 text-sm hover:border-white/20" data-max="2">2</button>
<button className="seg-btn inline-flex items-center justify-center w-12 h-9 rounded-md bg-neutral-900 border border-white/10 text-sm hover:border-white/20" data-max="4">4</button>
<button className="seg-btn inline-flex items-center justify-center w-12 h-9 rounded-md bg-neutral-900 border border-white/10 text-sm hover:border-white/20" data-max="6">6</button>
<button className="seg-btn inline-flex items-center justify-center w-12 h-9 rounded-md bg-neutral-900 border border-white/10 text-sm hover:border-white/20" data-max="8">8</button>
</div>
</div>
<div>
<label className="text-xs text-neutral-400">Visibility</label>
<div className="mt-1 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900 border border-white/10 hover:border-white/20 text-sm" id="visibilityToggle">
<i className="w-4 h-4" data-lucide="lock-open"></i>
<span id="visibilityLabel">Public</span>
</button>
<span className="text-xs text-neutral-500">Public rooms appear in Open Rooms</span>
</div>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Rules preset</label>
<div className="mt-1 grid grid-cols-3 gap-2">
<button className="rule-btn rounded-md px-3 py-2 text-sm bg-neutral-900 border border-white/10 hover:border-white/20" data-rules="classic">Classic</button>
<button className="rule-btn rounded-md px-3 py-2 text-sm bg-neutral-900 border border-white/10 hover:border-white/20" data-rules="speed">Speed</button>
<button className="rule-btn rounded-md px-3 py-2 text-sm bg-neutral-900 border border-white/10 hover:border-white/20" data-rules="house">House</button>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="text-xs text-neutral-500">
<i className="inline w-4 h-4 align-[-2px] mr-1" data-lucide="info"></i>
                You can change settings after creating the room.
              </div>
<div className="flex items-center gap-2">
<button className="rounded-md px-3 py-2 text-sm font-medium bg-neutral-900 border border-white/10 hover:border-white/20 hover:bg-neutral-800/80" id="cancelCreateBtn">
                  Cancel
                </button>
<button className="rounded-md px-3.5 py-2.5 text-sm font-medium bg-indigo-500/90 text-white hover:bg-indigo-400/90" id="submitCreateBtn">
                  Create
                </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-neutral-900 border border-white/10 px-3.5 py-2.5 text-sm text-neutral-100 shadow-lg flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
<span id="toastMsg">Saved</span>
</div>
</div>


    </>
  );
}
