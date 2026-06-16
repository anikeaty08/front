import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // App State and Utilities
    const LS_KEY = 'novaWalletState';
    const defaultPrices = { ETH: 3200, USDC: 1 };
    const wordList = ["nature","swift","ember","orbit","canvas","shadow","velvet","quantum","lunar","signal","cipher","ember","matrix","delta","navy","zero","apex","future","vital","cosmic","static","pilot","raven","volta","noble","vector","sonic","crystal","oasis","atlas","cobalt","pluto","neon","ionic","zenith","stellar","eclipse","halo","nylon","onyx","pixel","orbit","cinder","tundra","aurora","echo","lyric","mystic","nova","zen","ember"];
    let state = {
      hasWallet: false,
      onboarding: { step: 'welcome', tempPhrase: [], pinSetup: { first: '', confirm: '' } },
      wallet: { recoveryPhrase: [], address: '', pin: '' },
      settings: { pinForSends: true, bio: false },
      prices: { ...defaultPrices },
      tokens: [
        { symbol: 'ETH', name: 'Ethereum', balance: 0.25, price: defaultPrices.ETH, color: '#627EEA' },
        { symbol: 'USDC', name: 'USD Coin', balance: 500.0, price: defaultPrices.USDC, color: '#2775CA' },
      ],
      transactions: [],
      tickets: [],
      ui: {
        activeTab: 'dashboard',
        activeToken: null,
        modals: {},
        pendingAction: null,
      }
    };

    function save() {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    }
    function load() {
      const s = localStorage.getItem(LS_KEY);
      if (s) {
        try {
          const parsed = JSON.parse(s);
          // Merge with defaults to ensure shape
          state = Object.assign({}, state, parsed);
        } catch { /* ignore */ }
      }
    }
    function shortAddr(addr) {
      if (!addr) return '';
      return addr.slice(0, 6) + '...' + addr.slice(-4);
    }
    function formatUSD(v) {
      return '$' + (Math.abs(v) >= 1 ? v.toLocaleString(undefined, { maximumFractionDigits: 2 }) : v.toFixed(4));
    }
    function findToken(sym) {
      return state.tokens.find(t => t.symbol === sym);
    }
    function totalUSD() {
      return state.tokens.reduce((sum, t) => sum + t.balance * (state.prices[t.symbol] ?? t.price), 0);
    }
    function randomHex(len) {
      const chars = 'abcdef0123456789';
      let out = '0x';
      for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)];
      return out;
    }
    function generatePhrase() {
      const words = [];
      for (let i = 0; i < 12; i++) {
        words.push(wordList[Math.floor(Math.random() * wordList.length)]);
      }
      return words;
    }
    function confirmIn5s(id) {
      setTimeout(() => {
        const tx = state.transactions.find(t => t.id === id);
        if (tx && tx.status === 'pending') {
          tx.status = 'confirmed';
          save();
          render();
        }
      }, 5000);
    }
    function createTx({ type, token, amount, usd, to, from }) {
      const id = '0x' + Math.random().toString(16).slice(2) + Math.random().toString(16).slice(2);
      const now = Date.now();
      const tx = { id, type, token, amount, usd, to, from, status: 'pending', timestamp: now };
      state.transactions.unshift(tx);
      confirmIn5s(id);
      return tx;
    }
    function requirePIN(message, onSuccess) {
      // Show PIN modal, store callback name
      state.ui.pendingAction = onSuccess;
      document.getElementById('pin-modal').classList.remove('hidden');
      document.getElementById('pin-modal-msg').textContent = message || 'Authorize this action.';
      resetPinModal();
      hydrateIcons();
    }

    // Rendering
    function render() {
      // Header
      document.getElementById('header-address').textContent = shortAddr(state.wallet.address);

      // Tabs visibility
      const views = ['dashboard','portfolio','transactions','settings','support','token'];
      views.forEach(v => {
        const el = document.getElementById(`view-${v}`);
        if (el) el.classList.toggle('hidden', state.ui.activeTab !== v);
      });

      // Onboarding main toggle
      document.getElementById('onboarding').classList.toggle('hidden', state.hasWallet);
      document.getElementById('main').classList.toggle('hidden', !state.hasWallet);

      // Onboarding steps
      const steps = ['welcome','phrase','import','pin'];
      steps.forEach(s => {
        const el = document.getElementById(`ob-${s}`);
        if (el) el.classList.toggle('hidden', state.onboarding.step !== s);
      });

      // Phrase grid in onboarding
      if (state.onboarding.step === 'phrase') {
        const grid = document.getElementById('phrase-grid');
        grid.innerHTML = '';
        state.onboarding.tempPhrase.forEach((w, i) => {
          const d = document.createElement('div');
          d.className = 'flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm';
          d.innerHTML = `<span class="text-slate-500 w-5 text-right">${i+1}.</span> <span class="text-slate-200">${w}</span>`;
          grid.appendChild(d);
        });
      }

      // Dashboard
      if (state.hasWallet && state.ui.activeTab === 'dashboard') {
        document.getElementById('total-balance').textContent = formatUSD(totalUSD());
        document.getElementById('total-change').textContent = '+0.00%';
        const dp = document.getElementById('dash-portfolio');
        dp.innerHTML = '';
        state.tokens.forEach(t => {
          const usdVal = t.balance * (state.prices[t.symbol] ?? t.price);
          const row = document.createElement('button');
          row.className = 'w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between';
          row.onclick = () => openToken(t.symbol);
          row.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-9 w-9 rounded-lg flex items-center justify-center" style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)">
                <span class="text-[12px] font-medium" style="color:${t.color}">${t.symbol}</span>
              </div>
              <div class="text-left">
                <div class="text-sm text-slate-200">${t.name}</div>
                <div class="text-xs text-slate-500">${t.balance.toFixed(6)} ${t.symbol}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-slate-200">${formatUSD(usdVal)}</div>
              <div class="text-xs text-slate-500">${formatUSD(state.prices[t.symbol])}</div>
            </div>
          `;
          dp.appendChild(row);
        });
        const da = document.getElementById('dash-activity');
        da.innerHTML = '';
        const recent = state.transactions.slice(0,5);
        if (recent.length === 0) {
          const empty = document.createElement('div');
          empty.className = 'p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400';
          empty.textContent = 'No activity yet.';
          da.appendChild(empty);
        } else {
          recent.forEach(tx => da.appendChild(txRow(tx)));
        }
      }

      // Portfolio
      if (state.hasWallet && state.ui.activeTab === 'portfolio') {
        const list = document.getElementById('portfolio-list');
        list.innerHTML = '';
        state.tokens.forEach(t => {
          const usdVal = t.balance * state.prices[t.symbol];
          const row = document.createElement('button');
          row.className = 'w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between';
          row.onclick = () => openToken(t.symbol);
          row.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center" style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)">
                <span class="text-[12px] font-medium" style="color:${t.color}">${t.symbol}</span>
              </div>
              <div class="text-left">
                <div class="text-sm text-slate-200">${t.name}</div>
                <div class="text-xs text-slate-500">${t.balance.toFixed(6)} ${t.symbol}</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm text-slate-200">${formatUSD(usdVal)}</div>
              <div class="text-xs text-slate-500">${formatUSD(state.prices[t.symbol])}</div>
            </div>
          `;
          list.appendChild(row);
        });
      }

      // Token detail
      if (state.hasWallet && state.ui.activeTab === 'token') {
        const t = findToken(state.ui.activeToken);
        if (t) {
          // Header
          const head = document.getElementById('token-header');
          head.innerHTML = `
            <div class="flex items-center gap-3">
              <div class="h-10 w-10 rounded-lg flex items-center justify-center" style="background-color: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08)">
                <span class="text-[12px] font-medium" style="color:${t.color}">${t.symbol}</span>
              </div>
              <div>
                <div class="text-slate-200">${t.name} <span class="text-slate-500 text-sm">(${t.symbol})</span></div>
                <div class="text-slate-400 text-sm">${formatUSD(state.prices[t.symbol])}</div>
              </div>
            </div>
          `;
          document.getElementById('token-holding').textContent = `${t.balance.toFixed(6)} ${t.symbol}`;
          document.getElementById('token-holding-usd').textContent = formatUSD(t.balance * state.prices[t.symbol]);
          // Tx list for this token
          const list = document.getElementById('token-tx-list');
          list.innerHTML = '';
          const tokenTx = state.transactions.filter(x => x.token === t.symbol);
          if (tokenTx.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400';
            empty.textContent = 'No transactions yet.';
            list.appendChild(empty);
          } else {
            tokenTx.forEach(tx => list.appendChild(txRow(tx)));
          }
          // Chart
          renderChartForToken(t.symbol, '24H');
        }
      }

      // Transactions view
      if (state.hasWallet && state.ui.activeTab === 'transactions') {
        const list = document.getElementById('tx-list');
        list.innerHTML = '';
        if (state.transactions.length === 0) {
          const empty = document.createElement('div');
          empty.className = 'p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400';
          empty.textContent = 'No transactions yet.';
          list.appendChild(empty);
        } else {
          state.transactions.forEach(tx => list.appendChild(txRow(tx)));
        }
      }

      // Settings
      if (state.hasWallet && state.ui.activeTab === 'settings') {
        document.getElementById('settings-address').textContent = state.wallet.address;
        // toggles
        const sendT = document.getElementById('toggle-pin-sends');
        const sendD = document.getElementById('toggle-pin-sends-dot');
        if (state.settings.pinForSends) {
          sendT.classList.add('bg-indigo-600','border-indigo-500');
          sendD.style.left = '1.5rem';
          sendD.style.background = '#fff';
        } else {
          sendT.classList.remove('bg-indigo-600','border-indigo-500');
          sendD.style.left = '0.25rem';
          sendD.style.background = '#fff';
        }
        const bioT = document.getElementById('toggle-bio');
        const bioD = document.getElementById('toggle-bio-dot');
        if (state.settings.bio) {
          bioT.classList.add('bg-indigo-600','border-indigo-500');
          bioD.style.left = '1.5rem';
        } else {
          bioT.classList.remove('bg-indigo-600','border-indigo-500');
          bioD.style.left = '0.25rem';
        }
      }

      // Support tickets
      if (state.ui.activeTab === 'support') {
        const tl = document.getElementById('ticket-list');
        tl.innerHTML = '';
        if (state.tickets.length === 0) {
          const empty = document.createElement('div');
          empty.className = 'p-4 rounded-xl bg-white/5 border border-white/10 text-sm text-slate-400';
          empty.textContent = 'No tickets yet.';
          tl.appendChild(empty);
        } else {
          state.tickets.forEach(t => {
            const row = document.createElement('div');
            row.className = 'p-3 rounded-xl bg-white/5 border border-white/10';
            row.innerHTML = `
              <div class="flex items-center justify-between">
                <div class="text-sm text-slate-200">${t.subject}</div>
                <span class="text-xs ${t.status==='open'?'text-amber-400':'text-emerald-400'}">${t.status}</span>
              </div>
              <div class="text-xs text-slate-500 mt-1">${t.id} • ${new Date(t.timestamp).toLocaleString()}</div>
            `;
            tl.appendChild(row);
          });
        }
      }

      // Tab active state
      document.querySelectorAll('.tab-btn').forEach(btn => {
        const t = btn.getAttribute('data-tab');
        btn.classList.toggle('text-white', t === state.ui.activeTab);
      });

      // Receive modal address
      document.getElementById('receive-address').textContent = state.wallet.address;

      hydrateIcons();
    }

    function txRow(tx) {
      const row = document.createElement('button');
      row.className = 'w-full p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between';
      row.onclick = () => openTx(tx.id);
      const isOut = tx.type === 'send';
      const icon = tx.type === 'buy' ? 'credit-card' : (isOut ? 'arrow-up-right' : 'arrow-down-left');
      const statusColor = tx.status === 'pending' ? 'text-amber-400' : (tx.status === 'failed' ? 'text-rose-400' : 'text-emerald-400');
      const sign = tx.type === 'send' ? '-' : '+';
      const sym = tx.token;
      const amtDisp = `${sign}${Math.abs(tx.amount).toFixed(6)} ${sym}`;
      const usdDisp = `${sign}${formatUSD(Math.abs(tx.usd))}`;
      row.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <i data-lucide="${icon}" class="w-4 h-4"></i>
          </div>
          <div class="text-left">
            <div class="text-sm text-slate-200 capitalize">${tx.type}</div>
            <div class="text-xs text-slate-500">${new Date(tx.timestamp).toLocaleString()}</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-sm text-slate-200">${amtDisp}</div>
          <div class="text-xs text-slate-500 flex items-center gap-2 justify-end"><span>${usdDisp}</span><span class="${statusColor}">${tx.status}</span></div>
        </div>
      `;
      return row;
    }

    // Chart
    let tokenChart;
    function renderChartForToken(symbol, tf='24H') {
      const canvas = document.getElementById('tokenChart');
      if (!canvas) return;
      const pts = tf === '24H' ? 24 : (tf === '7D' ? 7 : 30);
      const price = state.prices[symbol];
      const data = [];
      let val = price * (0.98 + Math.random()*0.04);
      for (let i=0; i<pts; i++) {
        val = val * (1 + (Math.random()-0.5)*0.01);
        data.push(Number(val.toFixed(2)));
      }
      const labels = Array.from({length: pts}, (_,i) => i+1);
      if (tokenChart) tokenChart.destroy();
      tokenChart = new Chart(canvas.getContext('2d'), {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data,
            borderColor: '#6366F1',
            borderWidth: 2,
            fill: {
              target: 'origin',
              above: 'rgba(99,102,241,0.08)',
            },
            tension: 0.35,
            pointRadius: 0,
          }]
        },
        options: {
          plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          },
          responsive: true,
          maintainAspectRatio: false,
        }
      });
      document.querySelectorAll('.tf-btn').forEach(b=>{
        if (b.getAttribute('data-tf') === tf) {
          b.className = 'tf-btn h-8 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs';
        } else {
          b.className = 'tf-btn h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs';
        }
      });
    }

    // Navigation helpers
    function setTab(tab) {
      state.ui.activeTab = tab;
      render();
    }
    function openToken(symbol) {
      state.ui.activeToken = symbol;
      state.ui.activeTab = 'token';
      render();
    }
    function openTx(id) {
      const tx = state.transactions.find(t => t.id === id);
      if (!tx) return;
      const d = document.getElementById('tx-detail');
      const addr = tx.type === 'send' ? tx.to : (tx.from || 'external');
      d.innerHTML = `
        <div class="rounded-xl bg-white/5 border border-white/10 p-4">
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">Type</div><div class="text-slate-200 text-sm capitalize">${tx.type}</div>
          </div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">Asset</div><div class="text-slate-200 text-sm">${tx.token}</div>
          </div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">Amount</div><div class="text-slate-200 text-sm">${tx.amount.toFixed(6)} ${tx.token}</div>
          </div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">USD</div><div class="text-slate-200 text-sm">${formatUSD(tx.usd)}</div>
          </div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">Status</div>
            <div class="text-sm ${tx.status==='pending'?'text-amber-400':(tx.status==='failed'?'text-rose-400':'text-emerald-400')}">${tx.status}</div>
          </div>
          <div class="flex items-center justify-between mb-2">
            <div class="text-slate-300 text-sm">${tx.type === 'send' ? 'To' : 'From'}</div>
            <div class="text-slate-200 text-xs break-all">${addr}</div>
          </div>
          <div class="flex items-center justify-between">
            <div class="text-slate-300 text-sm">Hash</div>
            <div class="text-slate-200 text-xs break-all">${tx.id}</div>
          </div>
        </div>
        <div class="mt-3 flex gap-2">
          <button id="tx-copy" class="h-10 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm flex items-center gap-2">
            <i data-lucide="copy" class="w-4 h-4"></i> Copy hash
          </button>
          <button class="h-10 px-3 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 cursor-default">
            <i data-lucide="external-link" class="w-4 h-4"></i> Explorer (mock)
          </button>
        </div>
      `;
      document.getElementById('tx-modal').classList.remove('hidden');
      hydrateIcons();
      document.getElementById('tx-copy').onclick = async () => {
        try { await navigator.clipboard.writeText(tx.id); toast('Copied'); } catch {}
      };
    }

    // Toast (simple)
    function toast(msg) {
      const t = document.createElement('div');
      t.textContent = msg;
      t.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 bg-white text-neutral-900 border border-white/10 rounded-full px-4 py-2 text-sm shadow';
      document.body.appendChild(t);
      setTimeout(()=>{ t.classList.add('opacity-0'); }, 1200);
      setTimeout(()=>{ t.remove(); }, 1600);
    }

    // Modal helpers
    function openModal(id) {
      document.getElementById(id).classList.remove('hidden');
      hydrateIcons();
    }
    function closeModal(id) {
      document.getElementById(id).classList.add('hidden');
    }

    // PIN Setup visuals
    function resetPinDots(prefix='pin-dot') {
      for (let i=1;i<=4;i++) document.getElementById(`${prefix}-${i}`).textContent = '•';
    }
    function setPinDots(count, prefix='pin-dot') {
      resetPinDots(prefix);
      for (let i=1;i<=count;i++) document.getElementById(`${prefix}-${i}`).textContent = '•';
      for (let i=count+1;i<=4;i++) document.getElementById(`${prefix}-${i}`).textContent = '•';
    }
    function resetPinModal() {
      mPin = '';
      document.getElementById('m-pin-error').classList.add('hidden');
      resetPinDots('m-pin-dot');
    }

    // Actions
    function startCreate() {
      state.onboarding.tempPhrase = generatePhrase();
      state.onboarding.step = 'phrase';
      render();
    }
    function startImport() {
      state.onboarding.step = 'import';
      render();
    }
    function acceptPhrase() {
      // proceed to PIN
      state.onboarding.step = 'pin';
      state.onboarding.pinSetup = { first: '', confirm: '' };
      document.getElementById('pin-title').textContent = 'Set a 4‑digit PIN';
      document.getElementById('pin-subtitle').textContent = 'Use this PIN to authorize sensitive actions.';
      document.getElementById('pin-error').classList.add('hidden');
      resetPinDots();
      render();
    }
    function finalizeWallet(phrase) {
      state.wallet.recoveryPhrase = phrase.slice();
      state.wallet.address = randomHex(40);
      state.hasWallet = true;
      state.ui.activeTab = 'dashboard';
      save();
      render();
    }

    // Buy flow
    let selectedBuyAsset = 'ETH';
    function selectBuyAsset(sym) {
      selectedBuyAsset = sym;
      document.querySelectorAll('.buy-asset').forEach(b => {
        if (b.getAttribute('data-asset') === sym) {
          b.className = 'buy-asset h-10 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm';
        } else {
          b.className = 'buy-asset h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm';
        }
      });
    }
    function doBuy() {
      const amtUSD = Number(document.getElementById('buy-amount').value);
      const err = document.getElementById('buy-error');
      if (!amtUSD || amtUSD <= 0) {
        err.textContent = 'Enter a valid amount.';
        err.classList.remove('hidden');
        return;
      }
      err.classList.add('hidden');
      const price = state.prices[selectedBuyAsset];
      const tokens = amtUSD / price;
      const t = findToken(selectedBuyAsset);
      t.balance += tokens;
      const tx = createTx({ type: 'buy', token: selectedBuyAsset, amount: tokens, usd: amtUSD, from: 'card' });
      save();
      render();
      closeModal('buy-modal');
      toast('Purchase submitted');
    }

    // Send flow
    function doSend() {
      const sym = document.getElementById('send-asset').value;
      const to = document.getElementById('send-to').value.trim();
      const amt = Number(document.getElementById('send-amount').value);
      const err = document.getElementById('send-error');
      err.classList.add('hidden');

      // Basic address check
      const addrOk = /^0x[a-fA-F0-9]{40}$/.test(to);
      if (!addrOk) {
        err.textContent = 'Invalid address. Must start with 0x and be 42 chars.';
        err.classList.remove('hidden');
        return;
      }
      if (!amt || amt <= 0) {
        err.textContent = 'Enter a valid amount.';
        err.classList.remove('hidden');
        return;
      }
      const t = findToken(sym);
      if (amt > t.balance) {
        err.textContent = 'Insufficient balance.';
        err.classList.remove('hidden');
        return;
      }
      // Require PIN for sends
      if (state.settings.pinForSends) {
        requirePIN('Confirm sending funds', () => {
          performSend(sym, to, amt);
        });
        return;
      }
      performSend(sym, to, amt);
    }
    function performSend(sym, to, amt) {
      const t = findToken(sym);
      t.balance -= amt; // deduct immediately
      const usd = amt * state.prices[sym];
      const tx = createTx({ type: 'send', token: sym, amount: amt, usd, to });
      save();
      render();
      closeModal('send-modal');
      toast('Send submitted');
    }

    // PIN modal state
    let mPin = '';
    function handleMPin(d) {
      if (mPin.length < 4) {
        mPin += d;
        setPinDots(mPin.length, 'm-pin-dot');
        if (mPin.length === 4) {
          if (mPin === state.wallet.pin) {
            document.getElementById('m-pin-error').classList.add('hidden');
            closeModal('pin-modal');
            const fn = state.ui.pendingAction;
            state.ui.pendingAction = null;
            if (typeof fn === 'function') fn();
          } else {
            document.getElementById('m-pin-error').classList.remove('hidden');
            mPin = '';
            setTimeout(()=>{ resetPinModal(); }, 300);
          }
        }
      }
    }

    // Change PIN
    function startChangePIN() {
      // reuse onboarding pin step UI but as change
      state.onboarding.step = 'pin';
      state.hasWallet = false; // temporarily hide main to reuse screen
      document.getElementById('pin-title').textContent = 'Enter new 4‑digit PIN';
      document.getElementById('pin-subtitle').textContent = 'You will confirm it on the next step.';
      state.onboarding.pinSetup = { first: '', confirm: '' };
      document.getElementById('pin-error').classList.add('hidden');
      resetPinDots();
      render();
    }

    // Support
    function submitTicket() {
      const email = document.getElementById('sup-email').value.trim();
      const subject = document.getElementById('sup-subject').value.trim();
      const message = document.getElementById('sup-message').value.trim();
      const err = document.getElementById('sup-error');
      err.classList.add('hidden');
      if (!email || !email.includes('@') || !subject || !message) {
        err.textContent = 'Please complete all fields with a valid email.';
        err.classList.remove('hidden');
        return;
      }
      const id = 'TCK-' + Math.random().toString(36).slice(2,8).toUpperCase();
      state.tickets.unshift({ id, email, subject, message, status: 'open', timestamp: Date.now() });
      save();
      render();
      document.getElementById('sup-email').value = '';
      document.getElementById('sup-subject').value = '';
      document.getElementById('sup-message').value = '';
      toast('Ticket created: ' + id);
    }

    // Event Listeners
    function attach() {
      // Onboarding
      document.getElementById('btn-create').onclick = startCreate;
      document.getElementById('btn-import').onclick = startImport;
      document.getElementById('back-to-welcome-1').onclick = () => { state.onboarding.step = 'welcome'; render(); };
      document.getElementById('back-to-welcome-2').onclick = () => { state.onboarding.step = 'welcome'; render(); };
      document.getElementById('regen-phrase').onclick = () => { state.onboarding.tempPhrase = generatePhrase(); render(); toast('Regenerated'); };
      document.getElementById('copy-phrase').onclick = async () => {
        try { await navigator.clipboard.writeText(state.onboarding.tempPhrase.join(' ')); toast('Copied'); } catch {}
      };
      document.getElementById('btn-phrase-continue').onclick = acceptPhrase;
      document.getElementById('btn-import-continue').onclick = () => {
        const v = document.getElementById('import-phrase-input').value.trim().replace(/\s+/g,' ');
        const words = v.split(' ').filter(Boolean);
        const err = document.getElementById('import-error');
        if (words.length < 12) {
          err.textContent = 'Phrase must be at least 12 words.';
          err.classList.remove('hidden');
          return;
        }
        err.classList.add('hidden');
        state.onboarding.tempPhrase = words.slice(0,12);
        state.onboarding.step = 'pin';
        document.getElementById('pin-title').textContent = 'Set a 4‑digit PIN';
        document.getElementById('pin-subtitle').textContent = 'Use this PIN to authorize sensitive actions.';
        state.onboarding.pinSetup = { first: '', confirm: '' };
        resetPinDots();
        render();
      };

      // PIN setup keypad
      document.querySelectorAll('.pin-key').forEach(k => {
        k.onclick = () => {
          const d = k.getAttribute('data-digit');
          const pinState = state.onboarding.pinSetup;
          if (!pinState.first || pinState.first.length < 4) {
            pinState.first = (pinState.first || '') + d;
            setPinDots(pinState.first.length);
            if (pinState.first.length === 4) {
              // Move to confirm
              document.getElementById('pin-title').textContent = 'Confirm PIN';
              document.getElementById('pin-subtitle').textContent = 'Re-enter your PIN to confirm.';
              resetPinDots();
            }
          } else {
            pinState.confirm = (pinState.confirm || '') + d;
            setPinDots(pinState.confirm.length);
            if (pinState.confirm.length === 4) {
              if (pinState.first === pinState.confirm) {
                state.wallet.pin = pinState.confirm;
                // finalize wallet creation/import
                finalizeWallet(state.onboarding.tempPhrase);
              } else {
                document.getElementById('pin-error').classList.remove('hidden');
                state.onboarding.pinSetup = { first: '', confirm: '' };
                document.getElementById('pin-title').textContent = 'Set a 4‑digit PIN';
                document.getElementById('pin-subtitle').textContent = 'Use this PIN to authorize sensitive actions.';
                resetPinDots();
              }
            }
          }
        };
      });
      document.getElementById('pin-backspace').onclick = () => {
        const pinState = state.onboarding.pinSetup;
        if (pinState.first && pinState.first.length < 4) {
          pinState.first = pinState.first.slice(0, -1);
          setPinDots(pinState.first.length);
        } else if (pinState.first && pinState.first.length === 4) {
          if (!pinState.confirm) {
            // switching to confirm first input
            document.getElementById('pin-title').textContent = 'Confirm PIN';
            document.getElementById('pin-subtitle').textContent = 'Re-enter your PIN to confirm.';
            resetPinDots();
          } else {
            pinState.confirm = pinState.confirm.slice(0, -1);
            setPinDots(pinState.confirm.length);
          }
        }
      };
      document.getElementById('back-from-pin').onclick = () => {
        // back from pin setup to previous step
        state.onboarding.step = state.onboarding.tempPhrase.length ? 'phrase' : 'import';
        render();
      };

      // Tabs
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.onclick = () => setTab(btn.getAttribute('data-tab'));
      });
      document.querySelectorAll('.go-tab').forEach(btn => {
        btn.onclick = () => setTab(btn.getAttribute('data-tab'));
      });

      // Quick actions
      document.getElementById('qa-buy').onclick = () => {
        requirePIN('Confirm buy action', () => {
          openModal('buy-modal');
          selectBuyAsset('ETH');
        });
      };
      document.getElementById('qa-send').onclick = () => {
        openModal('send-modal');
        document.getElementById('send-asset').value = 'ETH';
        updateSendBalance();
      };
      document.getElementById('qa-receive').onclick = () => openModal('receive-modal');

      // Token actions
      document.getElementById('token-buy').onclick = () => {
        requirePIN('Confirm buy action', () => {
          openModal('buy-modal');
          selectBuyAsset(state.ui.activeToken || 'ETH');
        });
      };
      document.getElementById('token-send').onclick = () => {
        openModal('send-modal');
        document.getElementById('send-asset').value = state.ui.activeToken || 'ETH';
        updateSendBalance();
      };
      document.getElementById('token-receive').onclick = () => openModal('receive-modal');

      // Buy modal
      document.querySelectorAll('[data-close="buy-modal"]').forEach(b => b.onclick = () => closeModal('buy-modal'));
      document.querySelectorAll('.buy-asset').forEach(b => b.onclick = () => selectBuyAsset(b.getAttribute('data-asset')));
      document.getElementById('buy-submit').onclick = () => {
        // simulate possible transient error if amount < 10
        const amt = Number(document.getElementById('buy-amount').value);
        const err = document.getElementById('buy-error');
        if (amt && amt < 5) {
          err.textContent = 'Minimum purchase is $5. Please increase amount.';
          err.classList.remove('hidden');
          return;
        }
        doBuy();
      };

      // Send modal
      document.querySelectorAll('[data-close="send-modal"]').forEach(b => b.onclick = () => closeModal('send-modal'));
      document.getElementById('send-asset').onchange = updateSendBalance;
      document.getElementById('send-submit').onclick = doSend;

      // Receive modal
      document.querySelectorAll('[data-close="receive-modal"]').forEach(b => b.onclick = () => closeModal('receive-modal'));
      document.getElementById('copy-receive').onclick = async () => {
        try { await navigator.clipboard.writeText(state.wallet.address); toast('Copied'); } catch {}
      };

      // Tx modal close
      document.querySelectorAll('[data-close="tx-modal"]').forEach(b => b.onclick = () => closeModal('tx-modal'));

      // Recovery modal
      document.getElementById('btn-show-recovery').onclick = () => {
        requirePIN('Show recovery phrase', () => {
          const grid = document.getElementById('recovery-grid');
          grid.innerHTML = '';
          state.wallet.recoveryPhrase.forEach((w,i) => {
            const d = document.createElement('div');
            d.className = 'flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-sm';
            d.innerHTML = `<span class="text-slate-500 w-5 text-right">${i+1}.</span> <span class="text-slate-200">${w}</span>`;
            grid.appendChild(d);
          });
          openModal('recovery-modal');
        });
      };
      document.querySelectorAll('[data-close="recovery-modal"]').forEach(b => b.onclick = () => closeModal('recovery-modal'));
      document.getElementById('copy-recovery').onclick = async () => {
        try { await navigator.clipboard.writeText(state.wallet.recoveryPhrase.join(' ')); toast('Copied'); } catch {}
      };

      // Copy address in settings
      document.getElementById('copy-address').onclick = async () => {
        try { await navigator.clipboard.writeText(state.wallet.address); toast('Copied'); } catch {}
      };

      // Security toggles
      document.getElementById('toggle-pin-sends').onclick = () => {
        state.settings.pinForSends = !state.settings.pinForSends;
        save(); render();
      };
      document.getElementById('toggle-bio').onclick = () => {
        state.settings.bio = !state.settings.bio;
        save(); render();
      };
      document.getElementById('btn-change-pin').onclick = () => {
        requirePIN('Confirm identity to change PIN', () => {
          startChangePIN();
        });
      };

      // Support nav
      document.getElementById('btn-goto-support').onclick = () => { state.ui.activeTab = 'support'; render(); };
      document.getElementById('goto-support').onclick = () => { state.ui.activeTab = 'support'; render(); };
      document.getElementById('back-to-settings').onclick = () => { state.ui.activeTab = 'settings'; render(); };
      document.getElementById('sup-submit').onclick = submitTicket;

      // Back token detail
      document.getElementById('back-to-portfolio').onclick = () => { state.ui.activeTab = 'portfolio'; render(); };

      // PIN modal keys
      document.querySelectorAll('.m-pin-key').forEach(k => {
        k.onclick = () => handleMPin(k.getAttribute('data-digit'));
      });
      document.getElementById('m-pin-backspace').onclick = () => {
        if (mPin.length) {
          mPin = mPin.slice(0, -1);
          setPinDots(mPin.length, 'm-pin-dot');
        }
      };
      document.getElementById('pin-cancel').onclick = () => {
        state.ui.pendingAction = null;
        closeModal('pin-modal');
      };

      // TX modal clipboard
      // bound inside openTx

      // Close handlers for background click (optional: not implemented for simplicity)
    }

    function updateSendBalance() {
      const sym = document.getElementById('send-asset').value;
      const t = findToken(sym);
      document.getElementById('send-balance').textContent = `Balance: ${t.balance.toFixed(6)} ${sym}`;
    }

    // Init
    function hydrateIcons() {
      // Refresh icons; set stroke width 1.5
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
    function init() {
      load();
      // Ensure prices on tokens
      state.tokens.forEach(t => t.price = state.prices[t.symbol] ?? t.price);
      // Default view
      if (!state.hasWallet) {
        state.onboarding.step = 'welcome';
      }
      attach();
      render();
    }

    // Expose for tf buttons
    document.addEventListener('click', (e) => {
      if (e.target && e.target.classList.contains('tf-btn')) {
        const tf = e.target.getAttribute('data-tf');
        if (state.ui.activeToken) renderChartForToken(state.ui.activeToken, tf);
      }
    });

    // Misc global close when clicking overlay (optional UX)
    document.querySelectorAll('#buy-modal,#send-modal,#receive-modal,#tx-modal,#recovery-modal,#pin-modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.add('hidden');
      });
    });

    window.addEventListener('load', init);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app">

<div className="flex-1" id="onboarding">

<div className="max-w-md mx-auto px-5 pt-16 pb-24" id="ob-welcome">
<div className="flex items-center justify-center mb-10">
<div className="h-11 w-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-indigo-400 font-semibold tracking-tight">NW</span>
</div>
</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-2">Welcome to Nova Wallet</h1>
<p className="text-slate-400 mb-8">A simple, secure crypto wallet. Create or import a wallet to get started.</p>
<div className="space-y-3">
<button className="w-full h-12 rounded-xl bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors border border-white/10 text-white flex items-center justify-center gap-2" id="btn-create">
<i className="w-5 h-5" data-lucide="plus"></i>
            Create new wallet
          </button>
<button className="w-full h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-700 transition-colors border border-neutral-800 text-white flex items-center justify-center gap-2" id="btn-import">
<i className="w-5 h-5" data-lucide="download"></i>
            Import existing wallet
          </button>
</div>
<div className="mt-10 pt-6 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-300" data-lucide="shield"></i>
</div>
<div className="text-sm text-slate-400">
              Your recovery phrase is the only way to restore your wallet. Keep it safe and offline.
            </div>
</div>
</div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-10 pb-24" id="ob-phrase">
<button className="mb-6 text-slate-400 hover:text-slate-200 flex items-center gap-2" id="back-to-welcome-1">
<i className="w-5 h-5" data-lucide="chevron-left"></i> Back
        </button>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Your recovery phrase</h2>
<p className="text-slate-400 mb-6">Write these 12 words in order. This phrase recovers your wallet.</p>
<div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/10" id="phrase-grid"></div>
<div className="flex items-center gap-2 mt-4">
<button className="h-10 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-slate-200 flex items-center gap-2" id="copy-phrase">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
          </button>
<button className="h-10 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center gap-2" id="regen-phrase">
<i className="w-4 h-4" data-lucide="refresh-cw"></i> Regenerate
          </button>
</div>
<div className="mt-8">
<button className="w-full h-12 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 active:bg-slate-200 transition-colors font-medium" id="btn-phrase-continue">
            I’ve saved it
          </button>
</div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-10 pb-24" id="ob-import">
<button className="mb-6 text-slate-400 hover:text-slate-200 flex items-center gap-2" id="back-to-welcome-2">
<i className="w-5 h-5" data-lucide="chevron-left"></i> Back
        </button>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Import wallet</h2>
<p className="text-slate-400 mb-6">Enter your 12-word recovery phrase separated by spaces.</p>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<textarea className="w-full h-32 bg-transparent outline-none text-slate-200 placeholder:text-slate-500 text-sm" id="import-phrase-input" placeholder="twelve words here ..." spellcheck="false"></textarea>
</div>
<div className="hidden mt-3 text-sm text-rose-400" id="import-error"></div>
<div className="mt-8">
<button className="w-full h-12 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 active:bg-slate-200 transition-colors font-medium" id="btn-import-continue">
            Continue
          </button>
</div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-10 pb-24" id="ob-pin">
<button className="mb-6 text-slate-400 hover:text-slate-200 flex items-center gap-2" id="back-from-pin">
<i className="w-5 h-5" data-lucide="chevron-left"></i> Back
        </button>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-2" id="pin-title">Set a 4‑digit PIN</h2>
<p className="text-slate-400 mb-6" id="pin-subtitle">Use this PIN to authorize sensitive actions.</p>
<div className="flex justify-center gap-3 mb-6">
<div className="w-12 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="pin-dot-1">•</div>
<div className="w-12 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="pin-dot-2">•</div>
<div className="w-12 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="pin-dot-3">•</div>
<div className="w-12 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="pin-dot-4">•</div>
</div>
<div className="hidden text-center text-sm text-rose-400 mb-3" id="pin-error">PINs do not match. Try again.</div>
<div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="1">1</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="2">2</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="3">3</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="4">4</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="5">5</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="6">6</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="7">7</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="8">8</button>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="9">9</button>
<div></div>
<button className="pin-key h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="0">0</button>
<button className="h-14 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center" id="pin-backspace">
<i className="w-5 h-5" data-lucide="delete"></i>
</button>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col" id="main">

<header className="sticky top-0 z-10 bg-neutral-950/80 backdrop-blur border-b border-white/5">
<div className="max-w-md mx-auto px-5 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center">
<span className="text-indigo-400 font-semibold tracking-tight">NW</span>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-400">Wallet</span>
<span className="text-xs text-slate-500" id="header-address"></span>
</div>
</div>
<button className="h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center gap-2" id="goto-support">
<i className="w-4 h-4" data-lucide="help-circle"></i>
<span className="hidden sm:inline text-sm">Support</span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto pb-20" id="views">

<div className="max-w-md mx-auto px-5 pt-5" id="view-dashboard">
<section className="mb-5">
<div className="rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-400">Total Balance</p>
<h2 className="text-3xl font-semibold tracking-tight text-white mt-1" id="total-balance">$0.00</h2>
</div>
<div className="text-right">
<p className="text-xs text-emerald-400" id="total-change">+0.00%</p>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<button className="h-11 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 active:bg-slate-200 transition-colors border border-white/10 flex items-center justify-center gap-2" id="qa-buy">
<i className="w-5 h-5" data-lucide="credit-card"></i> Buy
                </button>
<button className="h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2" id="qa-send">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i> Send
                </button>
<button className="h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2" id="qa-receive">
<i className="w-5 h-5" data-lucide="arrow-down-left"></i> Receive
                </button>
</div>
</div>
</section>
<section className="mb-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Portfolio</h3>
<button className="go-tab text-sm text-slate-400 hover:text-slate-200" data-tab="portfolio">View all</button>
</div>
<div className="space-y-2" id="dash-portfolio"></div>
</section>
<section className="mb-8">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Recent activity</h3>
<button className="go-tab text-sm text-slate-400 hover:text-slate-200" data-tab="transactions">View all</button>
</div>
<div className="space-y-2" id="dash-activity"></div>
</section>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-5" id="view-portfolio">
<h2 className="text-xl font-semibold tracking-tight text-white mb-4">Portfolio</h2>
<div className="space-y-2" id="portfolio-list"></div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-5" id="view-token">
<button className="mb-4 text-slate-400 hover:text-slate-200 flex items-center gap-2" id="back-to-portfolio">
<i className="w-5 h-5" data-lucide="chevron-left"></i> Back
          </button>
<div className="flex items-center justify-between mb-3" id="token-header">

</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-400">Holdings</p>
<h3 className="text-xl font-semibold tracking-tight text-white mt-1" id="token-holding">0</h3>
<p className="text-sm text-slate-400" id="token-holding-usd"></p>
</div>
<div className="flex gap-2">
<button className="h-9 px-3 rounded-lg bg-white text-neutral-900 hover:bg-slate-100 border border-white/10 text-sm flex items-center gap-1" id="token-buy">
<i className="w-4 h-4" data-lucide="credit-card"></i> Buy
                </button>
<button className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center gap-1" id="token-send">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i> Send
                </button>
<button className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center gap-1" id="token-receive">
<i className="w-4 h-4" data-lucide="arrow-down-left"></i> Receive
                </button>
</div>
</div>
<div className="mt-4">
<div className="flex items-center gap-2">
<button className="tf-btn h-8 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs" data-tf="24H">24H</button>
<button className="tf-btn h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs" data-tf="7D">7D</button>
<button className="tf-btn h-8 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs" data-tf="30D">30D</button>
</div>
<div className="mt-4">
<div className="rounded-xl overflow-hidden bg-neutral-950 border border-white/10 p-2">
<div>
<canvas height="140" id="tokenChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<h4 className="text-lg font-semibold tracking-tight text-white mb-2">Transactions</h4>
<div className="space-y-2" id="token-tx-list"></div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-5" id="view-transactions">
<h2 className="text-xl font-semibold tracking-tight text-white mb-4">Transactions</h2>
<div className="space-y-2" id="tx-list"></div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-5" id="view-settings">
<h2 className="text-xl font-semibold tracking-tight text-white mb-4">Settings</h2>
<div className="rounded-2xl bg-white/5 border border-white/10 mb-5">
<div className="px-4 py-3 border-b border-white/10 text-sm text-slate-400">Wallet</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-slate-300 text-sm">Show recovery phrase</div>
<div className="text-slate-500 text-xs">PIN required</div>
</div>
<button className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center gap-1" id="btn-show-recovery">
<i className="w-4 h-4" data-lucide="key"></i> Reveal
                </button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-slate-300 text-sm">Wallet address</div>
<div className="text-slate-500 text-xs break-all" id="settings-address"></div>
</div>
<button className="h-9 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm flex items-center gap-1" id="copy-address">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
                </button>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 mb-5">
<div className="px-4 py-3 border-b border-white/10 text-sm text-slate-400">Security</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<div>
<div className="text-slate-300 text-sm">Change PIN</div>
<div className="text-slate-500 text-xs">Update your 4 PIN</div>
</div>
<button className="h-9 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm flex items-center gap-1" id="btn-change-pin">
<i className="w-4 h-4" data-lucide="lock"></i> Change
                </button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-slate-300 text-sm">Require PIN for Sends</div>
<div className="text-slate-500 text-xs">Extra confirmation for outgoing transfers</div>
</div>
<button className="group relative w-12 h-7 rounded-full border border-white/10 bg-white/5 flex items-center transition-colors" id="toggle-pin-sends">
<span className="absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-all shadow" id="toggle-pin-sends-dot"></span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<div className="text-slate-300 text-sm">Biometric (mock)</div>
<div className="text-slate-500 text-xs">Use device biometrics</div>
</div>
<button className="group relative w-12 h-7 rounded-full border border-white/10 bg-white/5 flex items-center transition-colors" id="toggle-bio">
<span className="absolute left-1 top-1 w-5 h-5 rounded-full bg-white transition-all shadow" id="toggle-bio-dot"></span>
</button>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 mb-5">
<div className="px-4 py-3 border-b border-white/10 text-sm text-slate-400">Support</div>
<div className="p-4">
<button className="h-10 w-full rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 flex items-center justify-center gap-2" id="btn-goto-support">
<i className="w-4 h-4" data-lucide="life-buoy"></i> Help &amp; Support
              </button>
</div>
</div>
<div className="text-center text-xs text-slate-500 mb-8">Version 0.1.0 • Local mock</div>
</div>

<div className="hidden max-w-md mx-auto px-5 pt-5" id="view-support">
<button className="mb-4 text-slate-400 hover:text-slate-200 flex items-center gap-2" id="back-to-settings">
<i className="w-5 h-5" data-lucide="chevron-left"></i> Back
          </button>
<h2 className="text-xl font-semibold tracking-tight text-white mb-2">Help &amp; Support</h2>
<p className="text-slate-400 mb-4">Create a ticket and we’ll get back to you. This is a mock—no data leaves your device.</p>
<div className="rounded-2xl bg-white/5 border border-white/10 p-4 mb-5">
<div className="grid gap-3">
<div>
<label className="text-xs text-slate-400">Email</label>
<input className="mt-1 w-full h-10 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="sup-email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="text-xs text-slate-400">Subject</label>
<input className="mt-1 w-full h-10 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="sup-subject" placeholder="Issue subject" type="text"/>
</div>
<div>
<label className="text-xs text-slate-400">Message</label>
<textarea className="mt-1 w-full h-28 rounded-lg bg-neutral-900 border border-neutral-800 outline-none p-3 text-sm" id="sup-message" placeholder="Describe your issue"></textarea>
</div>
<div className="hidden text-sm text-rose-400" id="sup-error"></div>
<button className="h-11 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 border border-white/10 font-medium" id="sup-submit">Submit ticket</button>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Your tickets</h3>
<div className="space-y-2" id="ticket-list"></div>
</div>
</main>

<nav className="fixed bottom-0 inset-x-0 bg-neutral-950/90 backdrop-blur border-t border-white/5">
<div className="max-w-md mx-auto px-5">
<div className="grid grid-cols-4 h-14">
<button className="tab-btn flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-200" data-tab="dashboard">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[11px]">Home</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-200" data-tab="portfolio">
<i className="w-5 h-5" data-lucide="wallet"></i>
<span className="text-[11px]">Portfolio</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-200" data-tab="transactions">
<i className="w-5 h-5" data-lucide="activity"></i>
<span className="text-[11px]">Activity</span>
</button>
<button className="tab-btn flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-slate-200" data-tab="settings">
<i className="w-5 h-5" data-lucide="settings"></i>
<span className="text-[11px]">Settings</span>
</button>
</div>
</div>
</nav>
</div>


<div className="hidden fixed inset-0 z-40" id="pin-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Enter PIN</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" id="pin-cancel">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<p className="text-slate-400 text-sm mb-4" id="pin-modal-msg">Authorize this action.</p>
<div className="flex justify-center gap-3 mb-4">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="m-pin-dot-1">•</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="m-pin-dot-2">•</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="m-pin-dot-3">•</div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-medium" id="m-pin-dot-4">•</div>
</div>
<div className="hidden text-center text-sm text-rose-400 mb-3" id="m-pin-error">Incorrect PIN. Try again.</div>
<div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="1">1</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="2">2</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="3">3</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="4">4</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="5">5</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="6">6</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="7">7</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="8">8</button>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="9">9</button>
<div></div>
<button className="m-pin-key h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xl" data-digit="0">0</button>
<button className="h-12 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-center" id="m-pin-backspace">
<i className="w-5 h-5" data-lucide="delete"></i>
</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="buy-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Buy</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" data-close="buy-modal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="grid gap-3">
<div>
<label className="text-xs text-slate-400">Asset</label>
<div className="mt-1 grid grid-cols-2 gap-2">
<button className="buy-asset h-10 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm" data-asset="ETH">ETH</button>
<button className="buy-asset h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm" data-asset="USDC">USDC</button>
</div>
</div>
<div>
<label className="text-xs text-slate-400">Amount (USD)</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="buy-amount" min="1" placeholder="100" step="1" type="number"/>
</div>
<div className="hidden text-sm text-rose-400" id="buy-error"></div>
<button className="h-11 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 border border-white/10 font-medium" id="buy-submit">Buy now</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="send-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Send</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" data-close="send-modal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="grid gap-3">
<div>
<label className="text-xs text-slate-400">Asset</label>
<select className="mt-1 w-full h-11 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="send-asset">
<option value="ETH">ETH</option>
<option value="USDC">USDC</option>
</select>
</div>
<div>
<label className="text-xs text-slate-400">Recipient address</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="send-to" placeholder="0x..."/>
</div>
<div>
<label className="text-xs text-slate-400 flex items-center justify-between">
<span>Amount</span>
<span className="text-[11px] text-slate-500" id="send-balance"></span>
</label>
<input className="mt-1 w-full h-11 rounded-lg bg-neutral-900 border border-neutral-800 outline-none px-3 text-sm" id="send-amount" placeholder="0.00" step="any" type="number"/>
</div>
<div className="hidden text-sm text-rose-400" id="send-error"></div>
<button className="h-11 rounded-xl bg-white text-neutral-900 hover:bg-slate-100 border border-white/10 font-medium" id="send-submit">Send</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="receive-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Receive</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" data-close="receive-modal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<p className="text-slate-400 text-sm mb-3">Share your wallet address to receive assets.</p>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<div className="text-sm break-all text-slate-200" id="receive-address"></div>
</div>
<div classmt-3="" flex="" gap-2"="">
<button className="h-10 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm flex items-center gap-2" id="copy-receive">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
            </button>
<button className="h-10 px-3 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-400 cursor-default">
<i className="w-4 h-4" data-lucide="scan-line"></i> QR (mock)
            </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="tx-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Transaction</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" data-close="tx-modal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-3" id="tx-detail">

</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="recovery-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="absolute inset-x-0 bottom-0 sm:inset-0 sm:flex sm:items-center sm:justify-center">
<div className="sm:max-w-sm w-full mx-auto bg-neutral-950 border border-white/10 rounded-t-2xl sm:rounded-2xl p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-semibold tracking-tight text-white">Recovery phrase</h3>
<button className="h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center" data-close="recovery-modal">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<p className="text-slate-400 text-sm mb-3">Keep this secret. Anyone with this phrase controls your funds.</p>
<div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-white/5 border border-white/10" id="recovery-grid"></div>
<div className="mt-3 flex gap-2">
<button className="h-10 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-sm flex items-center gap-2" id="copy-recovery">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
