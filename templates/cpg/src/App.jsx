import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Global State
      const state = {
        provider: null,
        signer: null,
        account: null,
        network: null,
        contract: null,
        config: {
          backendBase: localStorage.getItem('pg.backendBase') || '',
          explorerBase: localStorage.getItem('pg.explorerBase') || 'https://etherscan.io',
          contractAddress: localStorage.getItem('pg.contract') || '',
          usdcAddress: localStorage.getItem('pg.usdc') || '',
          abi: (() => {
            const raw = localStorage.getItem('pg.abi');
            if (!raw) return [];
            try { return JSON.parse(raw); } catch { return []; }
          })(),
        }
      };

      // UI Init
      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
      const yearEl = $('#year');
      yearEl.textContent = new Date().getFullYear();

      function notify(message, type = 'info') {
        const color = {
          info: 'border-slate-200 bg-white',
          success: 'border-emerald-200 bg-emerald-50',
          error: 'border-rose-200 bg-rose-50',
          warn: 'border-amber-200 bg-amber-50'
        }[type] || 'border-slate-200 bg-white';
        const toast = document.createElement('div');
        toast.className = `rounded-md border px-3 py-2 shadow-sm text-sm ${color} flex items-start gap-2`;
        toast.innerHTML = `
          <i data-lucide="${ type==='success' ? 'check-circle' : type==='error' ? 'x-circle' : type==='warn' ? 'alert-triangle' : 'info' }" class="w-4 h-4 mt-0.5"></i>
          <div class="flex-1">${message}</div>
          <button class="p-1 rounded-md hover:bg-slate-100">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        `;
        $('#toasts').appendChild(toast);
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        const remove = () => toast.remove();
        toast.querySelector('button').addEventListener('click', remove);
        setTimeout(remove, 4500);
      }

      function setStatus(text) {
        $('#statusText').textContent = text;
      }

      function formatAddress(addr) {
        if (!addr) return '-';
        return addr.slice(0, 6) + '…' + addr.slice(-4);
      }

      function setActiveTab(tab) {
        $$('.tab-panel').forEach(el => el.classList.add('hidden'));
        $(`#tab-${tab}`)?.classList.remove('hidden');
        $$('.tab-btn').forEach(btn => {
          if (btn.getAttribute('data-tab') === tab) {
            btn.classList.add('bg-slate-900','text-white');
            btn.classList.remove('text-slate-700','hover:text-slate-900','hover:bg-slate-100');
          } else {
            btn.classList.remove('bg-slate-900','text-white');
            btn.classList.add('text-slate-700','hover:text-slate-900','hover:bg-slate-100');
          }
        });
        history.replaceState({}, '', window.location.pathname + window.location.search);
      }

      // Settings Modal
      const settingsModal = $('#settingsModal');
      $('#settingsBtn').addEventListener('click', () => {
        $('#cfgBackend').value = state.config.backendBase;
        $('#cfgExplorer').value = state.config.explorerBase;
        $('#cfgContract').value = state.config.contractAddress;
        $('#cfgUSDC').value = state.config.usdcAddress;
        $('#cfgABI').value = state.config.abi && state.config.abi.length ? JSON.stringify(state.config.abi, null, 2) : '';
        settingsModal.classList.remove('hidden');
      });
      $('#closeSettings').addEventListener('click', () => settingsModal.classList.add('hidden'));
      settingsModal.addEventListener('click', (e) => {
        if (e.target === settingsModal) settingsModal.classList.add('hidden');
      });
      $('#resetSettings').addEventListener('click', () => {
        localStorage.removeItem('pg.backendBase');
        localStorage.removeItem('pg.explorerBase');
        localStorage.removeItem('pg.contract');
        localStorage.removeItem('pg.usdc');
        localStorage.removeItem('pg.abi');
        state.config.backendBase = '';
        state.config.explorerBase = 'https://etherscan.io';
        state.config.contractAddress = '';
        state.config.usdcAddress = '';
        state.config.abi = [];
        notify('Settings have been reset.', 'success');
      });
      $('#saveSettings').addEventListener('click', () => {
        const backend = $('#cfgBackend').value.trim();
        const explorer = $('#cfgExplorer').value.trim() || 'https://etherscan.io';
        const contract = $('#cfgContract').value.trim();
        const usdc = $('#cfgUSDC').value.trim();
        let abi = [];
        const abiRaw = $('#cfgABI').value.trim();
        if (abiRaw) {
          try { abi = JSON.parse(abiRaw); } catch (e) { notify('Invalid ABI JSON.', 'error'); return; }
        }
        localStorage.setItem('pg.backendBase', backend);
        localStorage.setItem('pg.explorerBase', explorer);
        localStorage.setItem('pg.contract', contract);
        localStorage.setItem('pg.usdc', usdc);
        localStorage.setItem('pg.abi', JSON.stringify(abi));
        state.config.backendBase = backend;
        state.config.explorerBase = explorer;
        state.config.contractAddress = contract;
        state.config.usdcAddress = usdc;
        state.config.abi = abi;
        settingsModal.classList.add('hidden');
        notify('Settings saved.', 'success');
        // Re-init contract if signer already present
        if (state.signer) initContract();
      });

      // Wallet
      async function connectWallet() {
        if (!window.ethereum) {
          notify('Wallet not found. Please install MetaMask.', 'warn');
          window.open('https://metamask.io/download/', '_blank');
          return;
        }
        try {
          setStatus('Connecting wallet…');
          state.provider = new ethers.BrowserProvider(window.ethereum, 'any');
          await state.provider.send('eth_requestAccounts', []);
          state.signer = await state.provider.getSigner();
          state.account = await state.signer.getAddress();
          state.network = await state.provider.getNetwork();
          $('#accountPill').textContent = formatAddress(state.account);
          $('#networkName').textContent = state.network?.name || 'Network';
          $('#connectBtn').classList.add('hidden');
          $('#connectedPill').classList.remove('hidden');
          initContract();
          setStatus('Connected');
          notify('Wallet connected.', 'success');

          // Event listeners
          window.ethereum.removeAllListeners?.('accountsChanged');
          window.ethereum.on('accountsChanged', async (accounts) => {
            if (accounts && accounts[0]) {
              state.account = ethers.getAddress(accounts[0]);
              state.signer = await state.provider.getSigner();
              $('#accountPill').textContent = formatAddress(state.account);
              notify('Account changed.', 'info');
            } else {
              disconnectWallet();
            }
          });
          window.ethereum.removeAllListeners?.('chainChanged');
          window.ethereum.on('chainChanged', async () => {
            state.network = await state.provider.getNetwork();
            $('#networkName').textContent = state.network?.name || 'Network';
            notify('Network changed.', 'info');
          });
        } catch (e) {
          console.error(e);
          notify(e?.message || 'Failed to connect wallet.', 'error');
          setStatus('Ready');
        }
      }

      function disconnectWallet() {
        state.provider = null;
        state.signer = null;
        state.account = null;
        state.network = null;
        state.contract = null;
        $('#connectBtn').classList.remove('hidden');
        $('#connectedPill').classList.add('hidden');
        setStatus('Disconnected');
      }

      function initContract() {
        if (!state.signer) return;
        if (!state.config.contractAddress || !state.config.abi?.length) {
          notify('Contract address or ABI not configured.', 'warn');
          return;
        }
        try {
          state.contract = new ethers.Contract(state.config.contractAddress, state.config.abi, state.signer);
        } catch (e) {
          console.error(e);
          notify('Failed to initialize contract. Check ABI.', 'error');
        }
      }

      $('#connectBtn').addEventListener('click', connectWallet);

      // Payment Page Logic
      function getParams() {
        const u = new URL(window.location.href);
        return {
          orderInfo: u.searchParams.get('orderInfo') || '',
          amount: u.searchParams.get('amount') || '',
          token: (u.searchParams.get('token') || '').toUpperCase(),
        };
      }

      function renderPaymentFromURL() {
        const { orderInfo, amount, token } = getParams();
        const valid = !!(orderInfo && amount && token);
        $('#summaryOrder').textContent = orderInfo || '—';
        $('#summaryAmount').textContent = amount ? amount : '—';
        $('#summaryToken').textContent = token || '—';
        $('#missingParams').classList.toggle('hidden', valid);
        $('#payBtn').disabled = !valid;
      }

      async function fetchServerNonce(orderInfo, amount, token) {
        const base = state.config.backendBase;
        if (!base) return null;
        try {
          // Assumed endpoint; adjust to your backend contract:
          // GET /payments/{orderInfo}/nonce?amount=...&token=...
          const url = `${base.replace(/\/+$/,'')}/payments/${encodeURIComponent(orderInfo)}/nonce?amount=${encodeURIComponent(amount)}&token=${encodeURIComponent(token)}`;
          const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
          if (!res.ok) throw new Error('Backend nonce fetch failed');
          const data = await res.json();
          return data?.nonce || null;
        } catch (e) {
          console.warn('Nonce fetch error:', e);
          return null;
        }
      }

      function showPaymentProgress(stepIdx) {
        $('#progress').classList.remove('hidden');
        ['dot1','dot2','dot3'].forEach((id, i) => {
          const el = $('#' + id);
          if (!el) return;
          if (i === stepIdx) el.classList.remove('hidden'); else el.classList.add('hidden');
        });
      }

      function clearPaymentUI() {
        $('#successCard').classList.add('hidden');
        $('#errorCard').classList.add('hidden');
        $('#paymentAlert').classList.add('hidden');
        $('#progress').classList.add('hidden');
        $('#payBtn').disabled = false;
      }

      function setPaymentAlert(text, type = 'info') {
        const el = $('#paymentAlert');
        el.className = 'mb-4 rounded-md border px-3 py-2 text-sm';
        if (type === 'error') el.classList.add('border-rose-200','bg-rose-50','text-rose-800');
        else if (type === 'warn') el.classList.add('border-amber-200','bg-amber-50','text-amber-800');
        else if (type === 'success') el.classList.add('border-emerald-200','bg-emerald-50','text-emerald-800');
        else el.classList.add('border-slate-200','bg-white','text-slate-700');
        el.textContent = text;
        el.classList.remove('hidden');
      }

      function toWei(amountStr, decimals) {
        // Convert decimal string to BigInt of smallest units
        const [whole, frac = ''] = amountStr.split('.');
        const cleanWhole = whole || '0';
        const cleanFrac = (frac + '0'.repeat(decimals)).slice(0, decimals);
        const bn = BigInt(cleanWhole + cleanFrac);
        return bn;
      }

      async function handlePay() {
        clearPaymentUI();
        const { orderInfo, amount, token } = getParams();
        if (!orderInfo || !amount || !token) {
          setPaymentAlert('Missing payment details. Generate a valid link.', 'warn');
          return;
        }
        try {
          if (!state.signer) await connectWallet();
          if (!state.signer) return;

          showPaymentProgress(0);
          setPaymentAlert('Fetching nonce…');
          const nonce = await fetchServerNonce(orderInfo, amount, token) || ethers.hexlify(ethers.randomBytes(32));
          setPaymentAlert('Preparing transaction…', 'info');

          // Init contract if needed
          initContract();
          if (!state.contract) {
            setPaymentAlert('Contract is not configured. Open Settings and add address + ABI.', 'error');
            return;
          }

          showPaymentProgress(1);
          $('#payBtn').disabled = true;

          let tx;
          if (token === 'ETH') {
            // Assume payETH(string orderInfo, bytes32 nonce) payable
            const valueWei = ethers.parseEther(amount);
            tx = await state.contract.payETH(orderInfo, nonce, { value: valueWei });
          } else {
            // Token flow: approve + payToken(token, amount, orderInfo, nonce)
            const tokenAddr = token === 'USDC' ? state.config.usdcAddress : '';
            if (!ethers.isAddress(tokenAddr)) {
              setPaymentAlert(`Token address for ${token} not configured.`, 'error');
              $('#payBtn').disabled = false;
              return;
            }
            // Determine decimals (best-effort)
            const erc20Abi = [
              { "type":"function","name":"decimals","inputs":[],"outputs":[{"type":"uint8"}],"stateMutability":"view" },
              { "type":"function","name":"approve","inputs":[{"name":"spender","type":"address"},{"name":"amount","type":"uint256"}],"outputs":[{"type":"bool"}],"stateMutability":"nonpayable" }
            ];
            const erc20 = new ethers.Contract(tokenAddr, erc20Abi, state.signer);
            let decimals = 18;
            try { decimals = await erc20.decimals(); } catch {}
            const amt = toWei(amount, Number(decimals));
            // Approve
            const approveTx = await erc20.approve(state.config.contractAddress, amt);
            setPaymentAlert('Awaiting token approval confirmation…', 'info');
            await approveTx.wait();

            // Pay
            tx = await state.contract.payToken(tokenAddr, amt, orderInfo, nonce);
          }

          showPaymentProgress(2);
          setPaymentAlert('Transaction submitted. Waiting for confirmation…', 'info');
          const receipt = await tx.wait();

          // Success UI
          $('#successCard').classList.remove('hidden');
          const txHash = receipt?.hash || tx?.hash;
          const link = `${state.config.explorerBase.replace(/\/+$/,'')}/tx/${txHash}`;
          $('#txLink').href = link;
          $('#copyTxHash').onclick = async () => {
            await navigator.clipboard.writeText(txHash);
            notify('Transaction hash copied.', 'success');
          };
          notify('Payment confirmed.', 'success');
          setPaymentAlert('Payment confirmed on-chain.', 'success');
          $('#payBtn').disabled = false;
        } catch (e) {
          console.error(e);
          $('#errorCard').classList.remove('hidden');
          $('#errorMsg').textContent = e?.reason || e?.data?.message || e?.message || 'Unknown error.';
          setPaymentAlert('Payment failed. See details below.', 'error');
          $('#payBtn').disabled = false;
        } finally {
          $('#progress').classList.add('hidden');
        }
      }

      $('#payBtn').addEventListener('click', handlePay);

      // Dashboard Logic
      function renderPaymentCard(p) {
        const confirmed = !!p.confirmed;
        const el = document.createElement('div');
        el.className = 'rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition-shadow';
        el.innerHTML = `
          <div class="flex flex-col gap-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center justify-center w-2.5 h-2.5 rounded-full ${confirmed ? 'bg-emerald-500' : 'bg-slate-300'}"></span>
                <span class="text-xs ${confirmed ? 'text-emerald-700' : 'text-slate-500'}">${confirmed ? 'Paid' : 'Not Paid'}</span>
              </div>
              <div class="text-xs text-slate-500">Block #${p.blockNumber ?? '-'}</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div class="text-xs text-slate-500">Tx Hash</div>
              <div class="text-xs font-medium text-slate-800 break-all flex items-center gap-2">
                <a href="${state.config.explorerBase.replace(/\/+$/,'')}/tx/${p.txHash}" target="_blank" class="text-[#007AFF] hover:underline">${p.txHash}</a>
                <button class="copyBtn px-2 py-1 rounded-md border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs" data-copy="${p.txHash}">
                  Copy
                </button>
              </div>
              <div class="text-xs text-slate-500">From</div>
              <div class="text-xs font-medium text-slate-800 break-all">${p.from}</div>
              <div class="text-xs text-slate-500">To</div>
              <div class="text-xs font-medium text-slate-800 break-all">${p.to}</div>
              <div class="text-xs text-slate-500">Amount</div>
              <div class="text-xs font-medium text-slate-800">${p.amount}</div>
              <div class="text-xs text-slate-500">Token</div>
              <div class="text-xs font-medium text-slate-800 break-all">${p.tokenAddress || '-'}</div>
            </div>
          </div>
        `;
        el.querySelectorAll('.copyBtn').forEach(btn => {
          btn.addEventListener('click', async () => {
            await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
            notify('Copied to clipboard.', 'success');
          });
        });
        return el;
      }

      async function searchPayments() {
        const orderId = $('#searchInput').value.trim();
        if (!orderId) { notify('Enter an Order ID to search.', 'warn'); return; }
        const base = state.config.backendBase;
        if (!base) { notify('Configure Backend API Base URL in Settings.', 'warn'); return; }

        $('#resultsWrap').innerHTML = '';
        $('#emptyState').classList.add('hidden');

        try {
          setStatus('Fetching payments…');
          const url = `${base.replace(/\/+$/,'')}/payments/${encodeURIComponent(orderId)}`;
          const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
          if (!res.ok) throw new Error(`Backend error (${res.status})`);
          const data = await res.json();
          const list = Array.isArray(data) ? data : (data?.payments || []);
          if (!list.length) {
            $('#emptyState').classList.remove('hidden');
            setStatus('Ready');
            return;
          }
          const frag = document.createDocumentFragment();
          list.forEach(p => frag.appendChild(renderPaymentCard(p)));
          $('#resultsWrap').appendChild(frag);
          setStatus('Ready');
        } catch (e) {
          console.error(e);
          notify(e?.message || 'Failed to fetch payments.', 'error');
          setStatus('Ready');
        }
      }
      $('#searchBtn').addEventListener('click', searchPayments);
      $('#searchInput').addEventListener('keydown', (e) => { if (e.key === 'Enter') searchPayments(); });

      // Link Generator Logic
      let qrcode;
      function ensureQR() {
        if (!qrcode) {
          qrcode = new QRCode($('#qrWrap'), { text: ' ', width: 220, height: 220 });
        }
      }
      function buildLocalLink(order, amount, token) {
        const base = window.location.origin + window.location.pathname;
        const params = new URLSearchParams({ orderInfo: order, amount: amount, token: token });
        return `${base}?${params.toString()}#payment`;
      }
      async function generateLink() {
        const order = $('#genOrder').value.trim();
        const amount = $('#genAmount').value.trim();
        const token = $('#genToken').value;
        if (!order || !amount || !token) {
          notify('Please fill order, amount, and token.', 'warn');
          return;
        }
        const base = state.config.backendBase;
        let link = '';
        let usedServerNonce = false;
        if (base) {
          try {
            setStatus('Generating link…');
            // Assumed endpoint: POST /payments/link  -> { url }
            const res = await fetch(`${base.replace(/\/+$/,'')}/payments/link`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
              body: JSON.stringify({ orderInfo: order, amount, token })
            });
            if (!res.ok) throw new Error(`Backend error (${res.status})`);
            const data = await res.json();
            link = data?.url || '';
            if (link) usedServerNonce = true;
            setStatus('Ready');
          } catch (e) {
            console.warn('Link generation via backend failed:', e);
            setStatus('Ready');
          }
        }
        if (!link) {
          link = buildLocalLink(order, amount, token);
        }
        $('#genOutput').classList.remove('hidden');
        $('#genLink').value = link;
        $('#openGenLink').href = link;
        ensureQR();
        $('#qrWrap').innerHTML = '';
        qrcode = new QRCode($('#qrWrap'), { text: link, width: 220, height: 220 });
        $('#genWarn').classList.toggle('hidden', usedServerNonce);
        notify('Link generated.', 'success');
      }
      $('#genBtn').addEventListener('click', generateLink);
      $('#copyGenLink').addEventListener('click', async () => {
        const link = $('#genLink').value;
        if (!link) return;
        await navigator.clipboard.writeText(link);
        notify('Link copied to clipboard.', 'success');
      });

      // Tabs
      $$('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const tab = btn.getAttribute('data-tab');
          setActiveTab(tab);
          if (tab === 'payment') renderPaymentFromURL();
        });
      });

      // On Load
      function initFromURL() {
        renderPaymentFromURL();
        const hash = window.location.hash.replace('#','').toLowerCase();
        const params = getParams();
        if (params.orderInfo && params.amount && params.token) {
          setActiveTab('payment');
        } else if (hash === 'generator') {
          setActiveTab('generator');
        } else if (hash === 'dashboard') {
          setActiveTab('dashboard');
        } else {
          setActiveTab('dashboard');
          $('#emptyState').classList.remove('hidden');
        }
      }

      // Payment link deep-link support
      window.addEventListener('popstate', renderPaymentFromURL);

      // Init icons and app
      function initIcons() {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      document.addEventListener('DOMContentLoaded', () => {
        initIcons();
        initFromURL();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-slate-900 text-white flex items-center justify-center tracking-tight text-sm font-semibold select-none" style={{letterSpacing: '-0.02em', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
                PG
              </div>
<div className="hidden sm:flex flex-col">
<span className="text-base sm:text-lg font-semibold tracking-tight">Payment Gateway</span>
<span className="text-xs text-slate-500 -mt-0.5">Crypto payments made simple</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-1">
<button className="tab-btn px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="payment">Payment</button>
<button className="tab-btn px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="dashboard">Dashboard</button>
<button className="tab-btn px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="generator">Link Generator</button>
</nav>

<div className="flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-slate-100 text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" id="settingsBtn" title="Settings">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-[#007AFF] text-white hover:bg-[#0a6ce3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" id="connectBtn">
<i className="w-4 h-4" data-lucide="wallet"></i>
<span>Connect Wallet</span>
</button>
<div className="hidden items-center gap-2 px-3 py-2 rounded-md border border-slate-200 bg-white" id="connectedPill">
<span className="inline-flex items-center gap-1 text-xs text-slate-500">
<span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
<span id="networkName">-</span>
</span>
<span className="text-sm font-medium text-slate-800" id="accountPill">-</span>
</div>
</div>
</div>

<div className="mt-3 md:hidden flex items-center gap-2">
<button className="tab-btn flex-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="payment">Payment</button>
<button className="tab-btn flex-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="dashboard">Dashboard</button>
<button className="tab-btn flex-1 px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" data-tab="generator">Link Generator</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<section className="tab-panel" id="tab-payment">
<div className="mx-auto max-w-2xl">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Complete your payment</h1>
<p className="mt-1 text-sm text-slate-600">Review the details and confirm the transaction in your wallet.</p>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" style={{boxShadow: '0 4px 6px rgba(0,0,0,0.06)'}}>

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="text-slate-600 text-sm">Order</div>
<div className="font-medium text-slate-900" id="summaryOrder">—</div>
</div>
<div className="flex items-center justify-between">
<div className="text-slate-600 text-sm">Token</div>
<div className="font-medium text-slate-900" id="summaryToken">—</div>
</div>
<div className="flex items-center justify-between">
<div className="text-slate-600 text-sm">Amount</div>
<div className="font-medium text-slate-900" id="summaryAmount">—</div>
</div>
</div>
<div className="my-6 h-px bg-slate-200"></div>

<div className="hidden mb-4 rounded-md border px-3 py-2 text-sm" id="paymentAlert"></div>

<div className="space-y-3">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-[#007AFF] text-white hover:bg-[#0a6ce3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40 disabled:opacity-60 disabled:cursor-not-allowed" id="payBtn">
<i className="w-4 h-4" data-lucide="rocket"></i>
<span>Pay with MetaMask</span>
</button>
<p className="text-xs text-slate-500 text-center">You’ll be prompted to confirm in your wallet. Do not close this window.</p>
</div>

<div className="mt-6 hidden" id="progress">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-[#007AFF] hidden" id="dot1"></div>
</div>
<div className="text-sm" id="step1">Connecting wallet…</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="relative">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-[#007AFF] hidden" id="dot2"></div>
</div>
<div className="text-sm" id="step2">Awaiting confirmation…</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="relative">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<div className="absolute inset-0 w-5 h-5 rounded-full border-2 border-[#007AFF] hidden" id="dot3"></div>
</div>
<div className="text-sm" id="step3">Waiting for transaction…</div>
</div>
</div>

<div className="hidden mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4" id="successCard">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle"></i>
<div className="flex-1">
<div className="text-sm font-medium text-emerald-800">Payment confirmed</div>
<div className="text-xs text-emerald-700 mt-1">Transaction successfully mined.</div>
<div className="mt-3 flex items-center gap-2">
<a className="inline-flex items-center gap-1 text-xs font-medium text-[#007AFF] hover:underline" href="#" id="txLink" rel="noopener" target="_blank">
                          View transaction
                          <i className="w-3.5 h-3.5" data-lucide="external-link"></i>
</a>
<button className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900" id="copyTxHash">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
                          Copy hash
                        </button>
</div>
</div>
</div>
</div>

<div className="hidden mt-6 rounded-lg border border-rose-200 bg-rose-50 p-4" id="errorCard">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-rose-600" data-lucide="x-circle"></i>
<div className="flex-1">
<div className="text-sm font-medium text-rose-800">Payment failed</div>
<div className="text-xs text-rose-700 mt-1" id="errorMsg">-</div>
</div>
</div>
</div>
</div>

<div className="hidden mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4" id="missingParams">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-600" data-lucide="alert-triangle"></i>
<div className="flex-1">
<div className="text-sm font-medium text-amber-900">No payment details found</div>
<div className="text-xs text-amber-800 mt-1">Use a generated payment link or include orderInfo, amount, and token in the URL.</div>
</div>
</div>
</div>
</div>
</section>

<section className="tab-panel hidden" id="tab-dashboard">
<div className="max-w-5xl">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Payments dashboard</h2>
<p className="mt-1 text-sm text-slate-600">Search by order ID to view on-chain and indexed records.</p>
</div>
</div>

<div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm" style={{boxShadow: '0 4px 6px rgba(0,0,0,0.06)'}}>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="searchInput" placeholder="Enter Order ID…" type="text"/>
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-[#007AFF] text-white hover:bg-[#0a6ce3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" id="searchBtn">
<i className="w-4 h-4" data-lucide="search"></i>
                    Search
                  </button>
</div>
</div>

<div className="mt-6 space-y-3" id="resultsWrap">

</div>

<div className="hidden mt-10 flex flex-col items-center justify-center text-center" id="emptyState">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-6 h-6 text-slate-400" data-lucide="list"></i>
</div>
<p className="mt-3 text-sm text-slate-600">No results yet. Search for an Order ID.</p>
</div>
</div>
</section>

<section className="tab-panel hidden" id="tab-generator">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Payment link generator</h2>
<p className="mt-1 text-sm text-slate-600">Create a shareable payment link and QR code for a specific order.</p>
<div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm" style={{boxShadow: '0 4px 6px rgba(0,0,0,0.06)'}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label className="text-xs text-slate-600">Order ID</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="genOrder" placeholder="invoice_123" type="text"/>
</div>
<div>
<label className="text-xs text-slate-600">Amount</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="genAmount" min="0" placeholder="0.05" step="0.000001" type="number"/>
</div>
<div>
<label className="text-xs text-slate-600">Token</label>
<select className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="genToken">
<option value="ETH">ETH</option>
<option value="USDC">USDC</option>
</select>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-[#007AFF] text-white hover:bg-[#0a6ce3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF]/40" id="genBtn">
<i className="w-4 h-4" data-lucide="link-2"></i>
                    Generate link
                  </button>
<span className="text-xs text-slate-500">Nonce will be generated server-side when available.</span>
</div>

<div className="hidden mt-6" id="genOutput">
<div className="rounded-lg border border-slate-200 p-4 bg-white">
<div className="flex flex-col lg:flex-row gap-4">
<div className="flex-1">
<label className="text-xs text-slate-600">Shareable URL</label>
<div className="mt-1 flex items-center gap-2">
<input className="flex-1 px-3 py-2 rounded-md border border-slate-200 bg-slate-50 text-sm" id="genLink" readonly="" type="text"/>
<button className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50" id="copyGenLink">
<i className="w-4 h-4" data-lucide="copy"></i>
                            Copy
                          </button>
<a className="inline-flex items-center gap-1 px-3 py-2 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50" href="#" id="openGenLink" target="_blank">
<i className="w-4 h-4" data-lucide="external-link"></i>
                            Open
                          </a>
</div>
<div className="hidden mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800" id="genWarn">
                          Generated without server nonce (dev mode). Configure backend in Settings for production.
                        </div>
</div>
<div className="w-full lg:w-56">
<label className="text-xs text-slate-600">QR Code</label>
<div className="mt-1 w-full aspect-square rounded-lg border border-slate-200 bg-white flex items-center justify-center" id="qrWrap"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 rounded-lg border border-slate-200 p-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-500" data-lucide="info"></i>
<div className="text-xs text-slate-600">
                    Merchants can paste the generated link on invoices or embed the QR at point of sale. Customers will be taken directly to the payment page with order details prefilled.
                  </div>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="mt-auto border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
<p className="text-xs text-slate-500">© <span id="year"></span> PG Labs — Minimal crypto checkout</p>
<div className="flex items-center gap-3 text-xs text-slate-500">
<span className="inline-flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span id="statusText">Ready</span>
</span>
</div>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-50" id="settingsModal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="relative mx-auto mt-24 max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Settings</h3>
<button className="p-2 rounded-md hover:bg-slate-100" id="closeSettings">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-2">
<label className="text-xs text-slate-600">Backend API Base URL</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="cfgBackend" placeholder="https://your-backend.example.com" type="text"/>
</div>
<div className="md:col-span-2">
<label className="text-xs text-slate-600">Explorer Base URL</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="cfgExplorer" placeholder="https://etherscan.io" type="text"/>
</div>
<div className="">
<label className="text-xs text-slate-600">Payments Contract Address</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="cfgContract" placeholder="0x..." type="text"/>
</div>
<div className="">
<label className="text-xs text-slate-600">USDC Token Address (optional)</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white" id="cfgUSDC" placeholder="0x..." type="text"/>
</div>
<div className="md:col-span-2">
<label className="text-xs text-slate-600">Payments Contract ABI (JSON)</label>
<textarea className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF]/30 focus:border-[#007AFF] text-sm bg-white font-mono" id="cfgABI" placeholder='[{"type":"function","name":"payETH","inputs":[{"name":"orderInfo","type":"string"},{"name":"nonce","type":"bytes32"}],"stateMutability":"payable"},{"type":"function","name":"payToken","inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"},{"name":"orderInfo","type":"string"},{"name":"nonce","type":"bytes32"}],"stateMutability":"nonpayable"}]' rows="6"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs text-slate-500">Settings are stored locally in your browser.</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md border border-slate-200 bg-white text-sm hover:bg-slate-50" id="resetSettings">Reset</button>
<button className="px-4 py-2 rounded-md bg-[#007AFF] text-white text-sm hover:bg-[#0a6ce3]" id="saveSettings">Save</button>
</div>
</div>
</div>
</div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toasts"></div>


    </>
  );
}
