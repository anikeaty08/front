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



      // ========= Config =========
      const WS_URL = ""; // Optional: set to your WebSocket URL (e.g., wss://your-domain/ws). Leave blank to use local BroadcastChannel.
      const START_CASH = 1500;

      // ========= Utilities =========
      const $ = (s) => document.querySelector(s);
      const $$ = (s) => Array.from(document.querySelectorAll(s));
      const uid = () => Math.random().toString(36).slice(2, 10);
      const now = () => new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
      const copyText = async (text) => { try { await navigator.clipboard.writeText(text); toast("Copied to clipboard"); } catch { toast("Copy failed"); } };
      function toast(msg) {
        const n = document.createElement('div');
        n.className = "fixed bottom-4 right-4 z-[100] px-3 py-2 rounded-md bg-white/10 backdrop-blur text-sm outline outline-1 outline-white/15";
        n.textContent = msg;
        document.body.appendChild(n);
        setTimeout(()=> n.remove(), 2000);
      }

      // ========= State =========
      const state = {
        screen: "landing", // landing | lobby | game
        mode: "local", // local (BroadcastChannel) | ws
        roomCode: null,
        isHost: false,
        me: { id: uid(), name: "", color: "", ready: false, cash: START_CASH, pos: 0, jailed: 0, bankrupt: false },
        players: [], // {id, name, color, ready, cash, pos, jailed, bankrupt}
        turn: { index: 0, subRolls: 0, rolledDoubles: false, dice: [0,0], round: 1 },
        tiles: [],
        own: {}, // property ownership: tileIndex -> playerId
        rrOwned: {}, // counts per player
        utilOwned: {},
        deckChance: [],
        deckChest: [],
        log: [],
        chat: [],
        started: false,
      };

      const COLORS = ["#22d3ee", "#a78bfa", "#f472b6", "#34d399", "#f59e0b", "#60a5fa", "#fb7185", "#4ade80"];
      let colorPool = [...COLORS];

      // ========= Board Data (classic order) =========
      const TILE_TYPES = {
        GO: "GO", PROP: "PROP", RAIL: "RAIL", UTIL: "UTIL", TAX: "TAX", CHEST: "CHEST", CHANCE: "CHANCE", JAIL: "JAIL", FREE: "FREE", GOTOJAIL: "GOTOJAIL"
      };

      const TILES = [
        {t:"GO", name:"GO"},
        {t:"PROP", name:"Mediterranean Ave", color:"#8b4513", cost:60, rent:[2,10,30,90,160,250]},
        {t:"CHEST", name:"Community Chest"},
        {t:"PROP", name:"Baltic Ave", color:"#8b4513", cost:60, rent:[4,20,60,180,320,450]},
        {t:"TAX", name:"Income Tax", amount:200},
        {t:"RAIL", name:"Reading Railroad", cost:200},
        {t:"PROP", name:"Oriental Ave", color:"#87ceeb", cost:100, rent:[6,30,90,270,400,550]},
        {t:"CHANCE", name:"Chance"},
        {t:"PROP", name:"Vermont Ave", color:"#87ceeb", cost:100, rent:[6,30,90,270,400,550]},
        {t:"PROP", name:"Connecticut Ave", color:"#87ceeb", cost:120, rent:[8,40,100,300,450,600]},
        {t:"JAIL", name:"Just Visiting / Jail"},
        {t:"PROP", name:"St. Charles Place", color:"#ff69b4", cost:140, rent:[10,50,150,450,625,750]},
        {t:"UTIL", name:"Electric Company", cost:150},
        {t:"PROP", name:"States Ave", color:"#ff69b4", cost:140, rent:[10,50,150,450,625,750]},
        {t:"PROP", name:"Virginia Ave", color:"#ff69b4", cost:160, rent:[12,60,180,500,700,900]},
        {t:"RAIL", name:"Pennsylvania Railroad", cost:200},
        {t:"PROP", name:"St. James Place", color:"#ff8c00", cost:180, rent:[14,70,200,550,750,950]},
        {t:"CHEST", name:"Community Chest"},
        {t:"PROP", name:"Tennessee Ave", color:"#ff8c00", cost:180, rent:[14,70,200,550,750,950]},
        {t:"PROP", name:"New York Ave", color:"#ff8c00", cost:200, rent:[16,80,220,600,800,1000]},
        {t:"FREE", name:"Free Parking"},
        {t:"PROP", name:"Kentucky Ave", color:"#dc2626", cost:220, rent:[18,90,250,700,875,1050]},
        {t:"CHANCE", name:"Chance"},
        {t:"PROP", name:"Indiana Ave", color:"#dc2626", cost:220, rent:[18,90,250,700,875,1050]},
        {t:"PROP", name:"Illinois Ave", color:"#dc2626", cost:240, rent:[20,100,300,750,925,1100]},
        {t:"RAIL", name:"B. & O. Railroad", cost:200},
        {t:"PROP", name:"Atlantic Ave", color:"#eab308", cost:260, rent:[22,110,330,800,975,1150]},
        {t:"PROP", name:"Ventnor Ave", color:"#eab308", cost:260, rent:[22,110,330,800,975,1150]},
        {t:"UTIL", name:"Water Works", cost:150},
        {t:"PROP", name:"Marvin Gardens", color:"#eab308", cost:280, rent:[24,120,360,850,1025,1200]},
        {t:"GOTOJAIL", name:"Go To Jail"},
        {t:"PROP", name:"Pacific Ave", color:"#16a34a", cost:300, rent:[26,130,390,900,1100,1275]},
        {t:"PROP", name:"North Carolina Ave", color:"#16a34a", cost:300, rent:[26,130,390,900,1100,1275]},
        {t:"CHEST", name:"Community Chest"},
        {t:"PROP", name:"Pennsylvania Ave", color:"#16a34a", cost:320, rent:[28,150,450,1000,1200,1400]},
        {t:"RAIL", name:"Short Line", cost:200},
        {t:"CHANCE", name:"Chance"},
        {t:"PROP", name:"Park Place", color:"#1e3a8a", cost:350, rent:[35,175,500,1100,1300,1500]},
        {t:"TAX", name:"Luxury Tax", amount:100},
        {t:"PROP", name:"Boardwalk", color:"#1e3a8a", cost:400, rent:[50,200,600,1400,1700,2000]},
      ];

      const CHANCE_CARDS = [
        {k:"advance_go", text:"Advance to GO (collect $200)", run:(p)=>{ movePlayerTo(p, 0, true); }},
        {k:"bank_pay", text:"Bank pays you dividend of $50", run:(p)=> changeCash(p, +50)},
        {k:"go_jail", text:"Go to Jail. Move directly to jail", run:(p)=> sendToJail(p)},
        {k:"advance_ill", text:"Advance to Illinois Ave", run:(p)=> movePlayerTo(p, 24, p.pos > 24)},
        {k:"repair", text:"Speeding fine $15", run:(p)=> changeCash(p, -15)},
      ];
      const CHEST_CARDS = [
        {k:"income", text:"You receive $100", run:(p)=> changeCash(p, +100)},
        {k:"doctor", text:"Doctor's fee: Pay $50", run:(p)=> changeCash(p, -50)},
        {k:"go", text:"Advance to GO (collect $200)", run:(p)=> { movePlayerTo(p, 0, true); }},
        {k:"jail", text:"Go to Jail. Move directly to jail", run:(p)=> sendToJail(p)},
        {k:"gift", text:"From sale of stock, you get $45", run:(p)=> changeCash(p, +45)},
      ];

      // ========= Networking (BroadcastChannel + optional WS) =========
      let chan = null;
      let ws = null;
      let wsReady = false;

      function setupNetwork() {
        const useWS = Boolean(WS_URL) && !$('#localModeToggle').checked;
        state.mode = useWS ? "ws" : "local";
        $('#modeBadge').textContent = useWS ? "Mode: WebSocket" : "Mode: Local (across tabs)";
        $('#connStatus').textContent = "Connecting...";
        $('#footerStatus').textContent = useWS ? "WS: connecting…" : "Local channel ready";

        if (useWS) {
          try {
            ws = new WebSocket(WS_URL);
            ws.onopen = () => { wsReady = true; $('#connStatus').textContent = "Connected (WS)"; requestSync(); };
            ws.onclose = () => { wsReady = false; $('#connStatus').textContent = "Disconnected (WS)"; toast("WS closed; using local mode"); fallbackToLocal(); };
            ws.onerror = () => { wsReady = false; $('#connStatus').textContent = "WS error"; toast("WS error; using local mode"); fallbackToLocal(); };
            ws.onmessage = (e) => onMessage(JSON.parse(e.data));
          } catch (e) {
            fallbackToLocal();
          }
        } else {
          fallbackToLocal();
        }
      }

      function fallbackToLocal() {
        state.mode = "local";
        if (ws && ws.readyState === WebSocket.OPEN) ws.close();
        ws = null;
        wsReady = false;
        if (chan) try { chan.close(); } catch {}
        if (!state.roomCode) return;
        chan = new BroadcastChannel("mononet-" + state.roomCode);
        chan.onmessage = (e) => onMessage(e.data);
        $('#connStatus').textContent = "Connected (Local)";
        $('#footerStatus').textContent = "Local: connected";
        requestSync();
      }

      function send(msg) {
        msg.room = state.roomCode;
        msg.sender = state.me.id;
        if (state.mode === "ws" && wsReady) {
          ws.send(JSON.stringify(msg));
        } else if (chan) {
          chan.postMessage(msg);
        }
      }

      function requestSync() {
        // ask host for state
        send({type:"hello", me: minimalMe(), want:"state"});
        // If I'm host in local mode, immediately broadcast
        if (state.isHost && state.mode === "local") {
          broadcastState();
        }
      }

      // ========= Screens =========
      function showScreen(name) {
        state.screen = name;
        $('#landing').classList.toggle('hidden', name!=='landing');
        $('#lobby').classList.toggle('hidden', name!=='lobby');
        $('#game').classList.toggle('hidden', name!=='game');
        $('#leaveBtn').classList.toggle('hidden', name==='landing');
      }

      // ========= Lobby UI =========
      function updateLobby() {
        $('#roomCodeBadge').textContent = state.roomCode || "—";
        $('#roomCodeSmall').textContent = state.roomCode || "—";
        const grid = $('#playersGrid');
        grid.innerHTML = "";
        state.players.forEach(p=>{
          const el = document.createElement('div');
          el.className = "p-4 rounded-lg bg-white/[0.03] outline outline-1 outline-white/10";
          el.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-md" style="background:${p.color || '#64748b'}"></div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium tracking-tight truncate">${p.name}${p.id===state.me.id?' (You)':''}${p.host?' • Host':''}</div>
                <div class="text-xs text-slate-400">${p.ready?'Ready':'Not ready'}</div>
              </div>
              <div class="text-xs px-2 py-1 rounded-md ${p.ready?'bg-emerald-500/15 text-emerald-300 outline outline-1 outline-emerald-500/20':'bg-white/5 text-slate-300 outline outline-1 outline-white/10'}">${p.ready?'Ready':'Waiting'}</div>
            </div>
          `;
          grid.appendChild(el);
        });
        const allReady = state.players.length>=2 && state.players.every(p=>p.ready);
        $('#startGameBtn').disabled = !(state.isHost && allReady);
      }

      // ========= Game UI =========
      function updatePlayersSidebar() {
        const list = $('#playersList');
        list.innerHTML = "";
        state.players.forEach((p, idx)=>{
          const isTurn = idx === state.turn.index && state.started && !p.bankrupt;
          const el = document.createElement('div');
          el.className = `p-3 rounded-md outline outline-1 ${isTurn?'outline-indigo-400/30 bg-indigo-500/10':'outline-white/10 bg-white/[0.03]'}`;
          el.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-8 w-8 rounded-md shrink-0" style="background:${p.color}"></div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium tracking-tight truncate">${p.name}${p.id===state.me.id?' (You)':''}${p.host?' • Host':''}</div>
                <div class="text-xs text-slate-400">Cash: $${p.cash}${p.bankrupt?' • Bankrupt':''}${p.jailed?` • Jail (${p.jailed})`:''}</div>
              </div>
              ${isTurn?'<span class="text-[10px] px-2 py-1 rounded bg-indigo-500/20 text-indigo-200">Turn</span>':''}
            </div>
          `;
          list.appendChild(el);
        });
        $('#roundInfo').textContent = state.started ? `Round ${state.turn.round}` : '';
      }

      function updateTurnPanel() {
        const p = currentPlayer();
        $('#turnInfo').textContent = state.started ? `${p.name}'s turn` : '—';
        $('#diceView').textContent = state.turn.dice[0] ? `${state.turn.dice[0]} + ${state.turn.dice[1]} = ${state.turn.dice[0]+state.turn.dice[1]}` : '—';

        const myTurn = p.id === state.me.id && !p.bankrupt;
        $('#rollBtn').disabled = !(myTurn && canRoll());
        $('#buyBtn').disabled = !(myTurn && canBuy());
        $('#endTurnBtn').disabled = !(myTurn && canEndTurn());
        $('#payJailBtn').disabled = !(myTurn && p.jailed>0);
      }

      function updateTileDetails() {
        const p = currentPlayer();
        const t = TILES[p.pos];
        let html = `<div class="text-base font-medium tracking-tight">${t.name}</div><div class="text-xs text-slate-400 mt-1">${t.t}</div>`;
        if (t.t==="PROP") {
          const owner = state.own[p.pos];
          const ownerName = owner ? (state.players.find(x=>x.id===owner)?.name || '—') : 'Unowned';
          html += `<div class="mt-2 text-sm">Cost: $${t.cost} • Owner: ${ownerName}</div>`;
          html += `<div class="mt-1 h-1.5 rounded" style="background:${t.color}"></div>`;
        } else if (t.t==="RAIL") {
          const owner = state.own[p.pos];
          html += `<div class="mt-2 text-sm">Cost: $${t.cost} • Owner: ${owner? (state.players.find(x=>x.id===owner)?.name || '—') : 'Unowned'}</div>`;
        } else if (t.t==="UTIL") {
          const owner = state.own[p.pos];
          html += `<div class="mt-2 text-sm">Cost: $${t.cost} • Owner: ${owner? (state.players.find(x=>x.id===owner)?.name || '—') : 'Unowned'}</div>`;
        } else if (t.t==="TAX") {
          html += `<div class="mt-2 text-sm">Pay $${t.amount}</div>`;
        } else if (t.t==="JAIL") {
          html += `<div class="mt-2 text-sm">Just visiting. If sent to jail, pay $50 or roll doubles to leave.</div>`;
        } else if (t.t==="FREE") {
          html += `<div class="mt-2 text-sm">Take a break.</div>`;
        }
        $('#tileDetails').innerHTML = html;
      }

      function renderBoard() {
        const board = $('#board');
        board.innerHTML = "";
        for (let r=0;r<11;r++){
          for (let c=0;c<11;c++){
            const cell = document.createElement('div');
            const isEdge = r===0 || r===10 || c===0 || c===10;
            cell.className = `relative ${isEdge?'outline outline-1 outline-white/10 bg-slate-900':'bg-slate-900'} flex items-center justify-center`;
            if (isEdge && !(r>0 && r<10 && c>0 && c<10)) {
              const idx = coordToIndex(r,c);
              const t = TILES[idx];
              const inner = document.createElement('div');
              inner.className = "absolute inset-0 p-1.5 flex flex-col";
              if (t.t==="PROP") {
                const stripe = document.createElement('div');
                stripe.className = "h-1.5 w-full rounded";
                stripe.style.background = t.color;
                inner.appendChild(stripe);
              }
              const name = document.createElement('div');
              name.className = "mt-1 text-[10px] leading-tight text-slate-300";
              name.textContent = t.name;
              inner.appendChild(name);
              cell.appendChild(inner);

              // Tokens
              const tokens = document.createElement('div');
              tokens.className = "absolute bottom-1 right-1 left-1 grid grid-cols-4 gap-0.5";
              state.players.forEach(p=>{
                if (p.pos === idx && !p.bankrupt) {
                  const dot = document.createElement('div');
                  dot.className = "h-3 w-3 rounded-full outline outline-1 outline-black/30";
                  dot.style.background = p.color;
                  tokens.appendChild(dot);
                }
              });
              cell.appendChild(tokens);
            } else {
              // center area
              if (r===5 && c===5) {
                const center = document.createElement('div');
                center.className = "text-center px-2";
                center.innerHTML = `
                  <div class="text-xl font-semibold tracking-tight">MonoNet</div>
                  <div class="text-xs text-slate-400">Simplified edition</div>
                `;
                cell.appendChild(center);
              }
            }
            board.appendChild(cell);
          }
        }
      }

      function coordToIndex(r,c) {
        // GO at bottom-right (10,10). Path moves left along bottom row (indices 0->10->...).
        // Map coords to standard 0..39
        if (r===10) { // bottom row, c:10..0 => 0..10
          return 10 - c;
        }
        if (c===0 && r<10) { // left col up, r:9..0 => 11..20
          return 10 + (10 - r);
        }
        if (r===0 && c>0) { // top row right, c:1..10 => 21..30
          return 20 + c;
        }
        if (c===10 && r>0) { // right col down, r:1..10 => 31..40(=0)
          return 30 + r;
        }
        return -1;
      }

      function indexToCoord(idx) {
        // inverse mapping
        if (idx>=0 && idx<=10) return [10, 10 - idx];
        if (idx>=11 && idx<=20) return [10 - (idx - 10), 0];
        if (idx>=21 && idx<=30) return [0, idx - 20];
        if (idx>=31 && idx<=39) return [idx - 30, 10];
        return [10,10];
      }

      // ========= Game Logic =========
      function currentPlayer() { return state.players[state.turn.index]; }
      function findPlayer(id) { return state.players.find(p=>p.id===id); }
      function playerIdxById(id) { return state.players.findIndex(p=>p.id===id); }

      function canRoll() {
        const p = currentPlayer();
        if (p.bankrupt) return false;
        if (p.jailed>0 && state.turn.subRolls>0) return false; // already attempted
        // can roll if no dice yet this turn or doubles chain
        return !state.turn.dice[0] || state.turn.rolledDoubles;
      }
      function canBuy() {
        const p = currentPlayer();
        const t = TILES[p.pos];
        if (p.bankrupt || !state.turn.dice[0]) return false;
        if (!['PROP','RAIL','UTIL'].includes(t.t)) return false;
        const owned = state.own[p.pos];
        if (owned) return false;
        return p.cash >= t.cost;
      }
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
      
<div className="min-h-dvh flex flex-col" id="app">

<header className="border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-semibold tracking-tight">
<span className="text-white">MN</span>
</div>
<div className="flex flex-col">
<span className="text-base sm:text-lg font-semibold tracking-tight">MonoNet</span>
<span className="text-xs text-slate-400" id="connStatus">Disconnected</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/5 outline outline-1 outline-white/10" id="helpBtn">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2.5-3 4"></path><path d="M12 17h.01"></path></svg>
              How it works
            </button>
<button className="hidden items-center gap-2 text-sm text-rose-300 hover:text-rose-100 px-3 py-1.5 rounded-md hover:bg-rose-500/10 outline outline-1 outline-rose-500/20" id="leaveBtn">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
              Leave
            </button>
</div>
</div>
</header>

<main className="flex-1">

<section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="landing">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-2xl p-6 bg-white/[0.03] outline outline-1 outline-white/10">
<div className="space-y-2 mb-6">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Play Monopoly-style online</h1>
<p className="text-sm text-slate-400">
                  Create a room, share the code, and play together. Works locally across tabs by default. Plug in a backend for global multiplayer.
                </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm text-slate-300">Display name</label>
<input className="w-full px-3 py-2.5 rounded-md bg-white/5 outline outline-1 outline-white/10 focus:outline-indigo-500/40 focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-500" id="displayName" placeholder="e.g. Alex" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-slate-300">Room code</label>
<input className="w-full uppercase tracking-wider px-3 py-2.5 rounded-md bg-white/5 outline outline-1 outline-white/10 focus:outline-indigo-500/40 focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-500" id="joinCode" placeholder="Enter code to join" type="text"/>
</div>
</div>
<div className="flex items-center gap-3 mt-5">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-500/90 text-white outline outline-1 outline-indigo-400/30 transition" id="createRoomBtn">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                  Create room
                </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 outline outline-1 outline-white/10" id="joinRoomBtn">
<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 17 21 12 16 7"></polyline><path d="M21 12H9"></path></svg>
                  Join with code
                </button>
<label className="inline-flex items-center gap-2 ml-auto px-3 py-2 rounded-md bg-white/5 outline outline-1 outline-white/10 hover:bg-white/10 cursor-pointer">
<input className="sr-only peer" id="localModeToggle" type="checkbox"/>
<span className="relative w-10 h-5 bg-white/10 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-4 after:h-4 after:bg-white after:rounded-full after:transition peer-checked:bg-indigo-500/40 peer-checked:after:translate-x-5 outline outline-1 outline-white/10"></span>
<span className="text-sm text-slate-300">Local demo (across tabs)</span>
</label>
</div>
<div className="mt-6 p-4 rounded-lg bg-white/[0.03] outline outline-1 outline-white/10">
<p className="text-xs text-slate-400">
                  Tip: Open two browser tabs, enable Local demo, create a room in one tab and join with the code in the other to test multiplayer without a server.
                </p>
</div>
</div>
<div className="rounded-2xl p-6 bg-gradient-to-b from-white/[0.03] to-white/[0.02] outline outline-1 outline-white/10">
<h2 className="text-xl font-semibold tracking-tight mb-4">What’s included</h2>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center outline outline-1 outline-white/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
                  Create/join rooms, share code, ready up
                </li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center outline outline-1 outline-white/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
</div>
                  Full 40-tile board, properties, railroads, utilities
                </li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center outline outline-1 outline-white/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 10h18"></path><path d="M5 6h14"></path><path d="M7 14h10"></path><path d="M9 18h6"></path></svg>
</div>
                  Chance &amp; Community cards, tax, jail, go to jail
                </li>
<li className="flex items-start gap-3">
<div className="h-6 w-6 rounded-md bg-white/5 flex items-center justify-center outline outline-1 outline-white/10">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-3-3.87"></path><path d="M4 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
                  Player turns, dice, buying, rent, bankruptcy
                </li>
</ul>
<div className="mt-6 text-xs text-slate-400">
                Note: This is a simplified version (no houses/hotels). Replace the connection URL in code to enable global multiplayer.
              </div>
</div>
</div>
</section>

<section className="hidden max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6" id="lobby">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl p-6 bg-white/[0.03] outline outline-1 outline-white/10">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-xl font-semibold tracking-tight">Lobby</h2>
<p className="text-sm text-slate-400">Share the code and wait for friends to join.</p>
</div>
<div className="text-right">
<div className="text-sm text-slate-400">Room code</div>
<div className="flex items-center gap-2 mt-1">
<div className="px-3 py-1.5 rounded-md bg-white/5 outline outline-1 outline-white/10 tracking-widest font-medium" id="roomCodeBadge">—</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10 text-sm" id="copyCodeBtn">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy
                    </button>
</div>
<div className="mt-2 text-xs text-slate-400" id="modeBadge"></div>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4" id="playersGrid">

</div>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 outline outline-1 outline-white/10" id="readyBtn">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Ready
                </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-500/90 text-white outline outline-1 outline-indigo-400/30 disabled:opacity-50 disabled:cursor-not-allowed" id="startGameBtn">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  Start game
                </button>
<button className="ml-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 outline outline-1 outline-white/10" id="leaveLobbyBtn">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line><polyline points="21 15 21 21 15 21"></polyline><line x1="10" x2="21" y1="10" y2="21"></line></svg>
                  Leave
                </button>
</div>
</div>
<div className="rounded-2xl p-6 bg-white/[0.03] outline outline-1 outline-white/10">
<h3 className="text-lg font-semibold tracking-tight">Lobby chat</h3>
<div className="mt-3 h-64 overflow-y-auto space-y-2 pr-1" id="lobbyChat">

</div>
<div className="mt-3 flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md bg-white/5 outline outline-1 outline-white/10 focus:outline-indigo-500/40 focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-500" id="lobbyChatInput" placeholder="Say hi…" type="text"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10" id="lobbyChatSend">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                  Send
                </button>
</div>
</div>
</div>
</section>

<section className="hidden max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 py-4" id="game">
<div className="grid grid-cols-12 gap-4">

<aside className="col-span-12 lg:col-span-3 xl:col-span-3 space-y-4">
<div className="rounded-2xl p-4 bg-white/[0.03] outline outline-1 outline-white/10">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Players</h3>
<div className="text-xs text-slate-400" id="roundInfo"></div>
</div>
<div className="mt-3 space-y-2" id="playersList">

</div>
</div>
<div className="rounded-2xl p-4 bg-white/[0.03] outline outline-1 outline-white/10">
<h3 className="text-lg font-semibold tracking-tight">Room</h3>
<div className="mt-2 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-400">Code</span>
<div className="flex items-center gap-2">
<span className="tracking-widest font-medium" id="roomCodeSmall">—</span>
<button className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10" id="copyCodeBtn2">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="13" rx="2" ry="2" width="13" x="9" y="9"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
</button>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10 text-rose-300 hover:text-rose-100" id="forfeitBtn">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 12h8"></path><path d="M7 8h13"></path><path d="M7 16h3"></path></svg>
                    Forfeit
                  </button>
<button className="ml-auto inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10 text-slate-300" id="leaveGameBtn">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 17 21 12 16 7"></polyline><path d="M21 12H9"></path></svg>
                    Leave
                  </button>
</div>
</div>
<div className="rounded-2xl p-4 bg-white/[0.03] outline outline-1 outline-white/10">
<h3 className="text-lg font-semibold tracking-tight">Chat</h3>
<div className="mt-3 h-56 overflow-y-auto space-y-2 pr-1" id="gameChat">

</div>
<div className="mt-3 flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md bg-white/5 outline outline-1 outline-white/10 focus:outline-indigo-500/40 focus:ring-2 focus:ring-indigo-500/30 placeholder:text-slate-500" id="gameChatInput" placeholder="Message…" type="text"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 outline outline-1 outline-white/10" id="gameChatSend">
<svg className="h-4.5 w-4.5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    Send
                  </button>
</div>
</div>
</aside>

<div className="col-span-12 lg:col-span-6 xl:col-span-6">
<div className="rounded-2xl p-3 bg-white/[0.03] outline outline-1 outline-white/10">
<div className="w-full max-w-[900px] mx-auto">
<div className="aspect-square grid grid-cols-11 grid-rows-11 rounded-xl overflow-hidden outline outline-1 outline-white/10 bg-slate-900" id="board">

</div>
</div>
</div>
</div>

<aside className="col-span-12 lg:col-span-3 xl:col-span-3 space-y-4">
<div className="rounded-2xl p-4 bg-white/[0.03] outline outline-1 outline-white/10">
<h3 className="text-lg font-semibold tracking-tight">Turn</h3>
<div className="mt-2 text-sm text-slate-300" id="turnInfo">—</div>
<div className="mt-4 grid grid-cols-2 gap-2">
<button className="col-span-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-indigo-500 hover:bg-indigo-500/90 text-white outline outline-1 outline-indigo-400/30 disabled:opacity-50 disabled:cursor-not-allowed" id="rollBtn">
<svg className="h-5 w-5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><path d="M19 3h-4a2 2 0 0 0-2 2v4"></path></svg>
                    Roll dice
                  </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-white outline outline-1 outline-emerald-400/30 disabled:opacity-50 disabled:cursor-not-allowed" id="buyBtn">
<svg className="h-5 w-5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 6h15l-1.5 9h-12z"></path><path d="M6 6l-2-2"></path><circle cx="9" cy="20" r="1"></circle><circle cx="18" cy="20" r="1"></circle></svg>
                    Buy
                  </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-200 outline outline-1 outline-white/10 disabled:opacity-50 disabled:cursor-not-allowed" id="endTurnBtn">
<svg className="h-5 w-5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                    End turn
                  </button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-md bg-amber-500/90 hover:bg-amber-500 text-white outline outline-1 outline-amber-400/30 disabled:opacity-50 disabled:cursor-not-allowed" id="payJailBtn">
<svg className="h-5 w-5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><path d="M10 4v16"></path><path d="M4 10h16"></path></svg>
                    Pay $50 (jail)
                  </button>
</div>
<div className="mt-4 p-3 rounded-md bg-white/[0.03] outline outline-1 outline-white/10">
<div className="text-sm text-slate-400">Dice</div>
<div className="mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight" id="diceView">—</div>
</div>
<div className="mt-4 p-3 rounded-md bg-white/[0.03] outline outline-1 outline-white/10">
<div className="text-sm text-slate-400">Log</div>
<div className="mt-2 h-48 overflow-y-auto text-sm space-y-1 pr-1" id="log"></div>
</div>
</div>
<div className="rounded-2xl p-4 bg-white/[0.03] outline outline-1 outline-white/10">
<h3 className="text-lg font-semibold tracking-tight">Tile</h3>
<div className="mt-2 text-sm text-slate-300" id="tileDetails">—</div>
</div>
</aside>
</div>
</section>
</main>

<footer className="border-t border-white/10 mt-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-slate-500 flex items-center justify-between">
<span>MonoNet • Simplified rules • Educational prototype</span>
<span className="text-slate-400" id="footerStatus">Ready</span>
</div>
</footer>
</div>

    </>
  );
}
