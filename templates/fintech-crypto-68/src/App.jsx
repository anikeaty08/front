import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Page state
      const pages = Array.from(document.querySelectorAll('[data-page]'));
      const pageTitle = document.getElementById('pageTitle');
      const titleMap = {
        wallet: { title: 'Wallet', desc: 'Send and receive crypto, manage your balances.' },
        buy: { title: 'Buy & Sell', desc: 'Buy crypto with fiat and withdraw to bank.' },
        qr: { title: 'QR Payments', desc: 'Create QR invoices, share, and track status.' },
        bills: { title: 'Bills & Top-up', desc: 'Airtime, data and electricity in one place.' },
        activity: { title: 'Activity', desc: 'Your recent account activity.' },
        settings: { title: 'Settings', desc: 'Preferences and account configuration.' },
      };

      function showPage(key) {
        pages.forEach(sec => sec.classList.add('hidden'));
        const page = document.querySelector(`[data-page="${key}"]`);
        if (page) page.classList.remove('hidden');
        if (pageTitle) {
          pageTitle.textContent = titleMap[key]?.title || '';
          const header = pageTitle.parentElement;
          const sub = header.querySelector('p');
          if (sub) sub.textContent = titleMap[key]?.desc || '';
        }
        // Update active buttons (optional highlight)
      }

      // Nav bindings
      document.querySelectorAll('[data-nav]').forEach(btn => {
        btn.addEventListener('click', () => showPage(btn.getAttribute('data-nav')));
      });
      // Openers
      document.querySelectorAll('[data-open="buySell"]').forEach(b => b.addEventListener('click', () => showPage('buy')));
      document.querySelectorAll('[data-open="withdraw"]').forEach(b => {
        b.addEventListener('click', () => openModal('withdrawModal'));
      });

      // Mobile menu: open simple sheet by toggling sidebar (for brevity, reuse nav)
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
          // Simple hint toast
          toast('Use bottom navigation');
        });
      }

      // Toast
      const toastEl = document.getElementById('toast');
      const toastMsg = document.getElementById('toastMsg');
      let toastTimer;
      function toast(msg) {
        toastMsg.textContent = msg;
        toastEl.classList.remove('hidden');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toastEl.classList.add('hidden'), 2000);
      }

      // Copy buttons
      document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(btn.dataset.copy || '');
            toast('Copied to clipboard');
          } catch {}
        });
      });

      // Modal helpers
      const modalBackdrop = document.getElementById('modalBackdrop');
      function openModal(id) {
        document.getElementById(id).classList.remove('hidden');
        modalBackdrop.classList.remove('hidden');
      }
      function closeModal(id) {
        document.getElementById(id).classList.add('hidden');
        modalBackdrop.classList.add('hidden');
      }
      document.querySelectorAll('[data-close]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
      });
      modalBackdrop.addEventListener('click', () => {
        ['sendModal','receiveModal','withdrawModal'].forEach(id => document.getElementById(id).classList.add('hidden'));
        modalBackdrop.classList.add('hidden');
      });

      // Wallet actions
      document.getElementById('btnSend').addEventListener('click', () => openModal('sendModal'));
      document.getElementById('btnReceive').addEventListener('click', () => {
        openModal('receiveModal');
        const addr = '0xA17c...fe92';
        document.getElementById('receiveAddress').value = addr;
        QRCode.toCanvas(document.getElementById('receiveQR'), addr, { width: 184, margin: 1 }, () => {});
      });
      document.getElementById('btnCopyReceive').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(document.getElementById('receiveAddress').value); toast('Address copied'); } catch {}
      });

      // Buy flow (mock rates)
      const rates = {
        USD: { USDC: 1, BTC: 0.000015, ETH: 0.00025 },
        NGN: { USDC: 1/1600, BTC: 0.000015/1600, ETH: 0.00025/1600 },
        EUR: { USDC: 1.07, BTC: 0.000015*1.07, ETH: 0.00025*1.07 },
      };
      const fiatAmount = document.getElementById('fiatAmount');
      const fiatCurrency = document.getElementById('fiatCurrency');
      const cryptoTarget = document.getElementById('cryptoTarget');
      const cryptoOut = document.getElementById('cryptoOut');
      const buyRateInfo = document.getElementById('buyRateInfo');
      function updateBuyQuote() {
        const amt = parseFloat(fiatAmount.value || '0');
        const fcur = fiatCurrency.value;
        const asset = cryptoTarget.value;
        const rate = rates[fcur]?.[asset] || 0;
        const receive = amt * rate;
        cryptoOut.value = receive ? receive.toFixed(6) + ' ' + asset : '';
        buyRateInfo.textContent = `Approx. rate: 1 ${fcur} ≈ ${rate ? rate.toFixed(8) : '0'} ${asset}`;
      }
      [fiatAmount, fiatCurrency, cryptoTarget].forEach(el => el.addEventListener('input', updateBuyQuote));
      document.querySelectorAll('.pmethod').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.pmethod').forEach(b => b.classList.remove('ring-2','ring-slate-200'));
          btn.classList.add('ring-2','ring-slate-200');
        });
      });
      document.getElementById('btnBuy').addEventListener('click', () => toast('Buy order created'));

      // Sell flow
      const cryptoAmount = document.getElementById('cryptoAmount');
      const cryptoSource = document.getElementById('cryptoSource');
      const fiatOut = document.getElementById('fiatOut');
      const localCurrency = document.getElementById('localCurrency');
      const sellRateInfo = document.getElementById('sellRateInfo');
      function updateSellQuote() {
        const amt = parseFloat(cryptoAmount.value || '0');
        const asset = cryptoSource.value;
        const lcur = localCurrency.value;
        // invert of buy rates (rough)
        const usdPerAsset = asset === 'USDC' ? 1 : asset === 'BTC' ? 1/0.000015 : 1/0.00025;
        let fx = 1;
        if (lcur === 'NGN') fx = 1600;
        if (lcur === 'GHS') fx = 15;
        const receive = amt * usdPerAsset * fx;
        const fee = receive * 0.005;
        fiatOut.value = receive ? ((receive - fee)).toFixed(2) + ' ' + lcur : '';
        sellRateInfo.textContent = `Includes ~0.5% fee · Rate: 1 ${asset} ≈ ${(usdPerAsset*fx).toFixed(2)} ${lcur}`;
      }
      [cryptoAmount, cryptoSource, localCurrency].forEach(el => el.addEventListener('input', updateSellQuote));
      document.getElementById('btnSell').addEventListener('click', () => toast('Withdrawal initiated'));

      // QR Payments
      const qrList = [];
      const qrListEl = document.getElementById('qrList');
      const qrCount = document.getElementById('qrCount');
      function renderQRList() {
        qrListEl.innerHTML = '';
        if (!qrList.length) {
          const empty = document.createElement('div');
          empty.className = 'rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500';
          empty.textContent = 'No payments yet. Create your first QR.';
          qrListEl.appendChild(empty);
        } else {
          qrList.forEach(item => {
            const row = document.createElement('div');
            row.className = 'rounded-md border border-slate-200 p-3';
            row.innerHTML = `
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <span class="h-8 w-8 flex items-center justify-center rounded-md" style="background: rgba(11,31,58,0.08); color: var(--brand);">
                    <i data-lucide="qr-code" class="h-4 w-4" stroke-width="1.5"></i>
                  </span>
                  <div>
                    <p class="text-base font-medium">${item.invoice} • ${item.amount} ${item.currency}</p>
                    <p class="text-sm text-slate-500">Expires ${item.expiresAt.toLocaleString()}</p>
                  </div>
                </div>
                <span class="text-sm ${item.status === 'Paid' ? 'text-emerald-700 bg-emerald-50' : item.status==='Expired' ? 'text-slate-700 bg-slate-100' : 'text-amber-700 bg-amber-50'} rounded-md px-2 py-1">${item.status}</span>
              </div>
              <div class="mt-3 w-full bg-slate-100 h-2 rounded">
                <div class="h-2 rounded" style="width:${item.progress}%; background: linear-gradient(135deg, var(--brand), #1b2f5a);"></div>
              </div>
              <div class="mt-3 flex gap-2">
                <button class="copyLink rounded-md border border-slate-200 bg-white px-3 py-1.5 text-base">Copy Link</button>
                <button class="markPaid rounded-md border border-slate-200 bg-white px-3 py-1.5 text-base">Mark Paid</button>
              </div>
            `;
            qrListEl.appendChild(row);
          });
          lucide.createIcons(); // refresh icons
        }
        const open = qrList.filter(i => i.status === 'Pending').length;
        qrCount.textContent = `${open} open`;
        // Wire buttons
        qrListEl.querySelectorAll('.copyLink').forEach((btn, idx) => btn.addEventListener('click', async () => {
          try { await navigator.clipboard.writeText(qrList[idx].link); toast('Payment link copied'); } catch {}
        }));
        qrListEl.querySelectorAll('.markPaid').forEach((btn, idx) => btn.addEventListener('click', () => {
          qrList[idx].status = 'Paid';
          qrList[idx].progress = 100;
          renderQRList();
          toast('Marked as paid');
        }));
      }

      const btnGenerateQR = document.getElementById('btnGenerateQR');
      const btnResetQR = document.getElementById('btnResetQR');
      const qrPreview = document.getElementById('qrPreview');
      const qrCanvas = document.getElementById('qrCanvas');
      const qrLink = document.getElementById('qrLink');
      btnGenerateQR.addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('qrAmount').value || '0');
        const currency = document.getElementById('qrCurrency').value;
        const invoice = (document.getElementById('qrInvoice').value || 'INV-' + Math.floor(Math.random()*10000));
        const note = document.getElementById('qrNote').value || '';
        const minutes = parseInt(document.getElementById('qrExpiry').value, 10) || 10;
        if (!amount) { toast('Enter a valid amount'); return; }
        const params = new URLSearchParams({ amount: String(amount), currency, invoice, note });
        const link = `${location.origin}/pay?${params.toString()}`;
        qrLink.value = link;
        QRCode.toCanvas(qrCanvas, link, { width: 200, margin: 1 }, () => {});
        qrPreview.classList.remove('hidden');
        // Track
        const expiresAt = new Date(Date.now() + minutes*60*1000);
        qrList.unshift({ amount, currency, invoice, note, link, status: 'Pending', progress: 35, expiresAt });
        renderQRList();
        toast('QR created');
      });
      btnResetQR.addEventListener('click', () => {
        document.getElementById('qrAmount').value = '';
        document.getElementById('qrInvoice').value = '';
        document.getElementById('qrNote').value = '';
        qrPreview.classList.add('hidden');
      });
      document.getElementById('btnCopyLink').addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(qrLink.value); toast('Payment link copied'); } catch {}
      });
      document.querySelectorAll('.shareBtn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const channel = btn.dataset.channel;
          const url = qrLink.value;
          const text = 'Pay invoice via link: ' + url;
          try {
            if (channel === 'share' && navigator.share) {
              await navigator.share({ title: 'Payment', text, url });
            } else if (channel === 'whatsapp') {
              window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
            } else if (channel === 'telegram') {
              window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent('Payment'), '_blank');
            } else if (channel === 'email') {
              window.location.href = 'mailto:?subject=' + encodeURIComponent('Payment') + '&body=' + encodeURIComponent(text);
            } else {
              await navigator.clipboard.writeText(url);
            }
            toast('Link shared');
          } catch {}
        });
      });

      // Simulate tracking progress
      setInterval(() => {
        qrList.forEach(item => {
          if (item.status !== 'Pending') return;
          item.progress = Math.min(95, item.progress + Math.random()*10);
          if (Date.now() > item.expiresAt.getTime()) {
            item.status = 'Expired';
          }
        });
        renderQRList();
      }, 4000);

      // Bills tabs
      const billTabs = document.querySelectorAll('.billTab');
      billTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          billTabs.forEach(t => t.classList.remove('bg-white','shadow','border','border-slate-200'));
          tab.classList.add('bg-white','shadow','border','border-slate-200');
          document.querySelectorAll('[data-bill]').forEach(sec => sec.classList.add('hidden'));
          document.querySelector(`[data-bill="${tab.dataset.billtab}"]`).classList.remove('hidden');
        });
      });

      // Bills actions
      function formatCurrency(n, sym='₦') { return sym + Number(n||0).toLocaleString(); }
      document.getElementById('btnAirtime').addEventListener('click', () => {
        toast('Airtime purchase processing');
      });
      ['airtimePhone','airtimeProvider','airtimeAmount'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
          const p = document.getElementById('airtimePhone').value;
          const prov = document.getElementById('airtimeProvider').value;
          const amt = document.getElementById('airtimeAmount').value;
          document.getElementById('airtimeSummary').textContent = p && amt ? `${prov} • ${p} • ${formatCurrency(amt)}` : 'Enter details to see summary.';
        });
      });
      document.getElementById('btnData').addEventListener('click', () => {
        toast('Data plan purchase processing');
      });
      ['dataPhone','dataProvider','dataPlan'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
          const p = document.getElementById('dataPhone').value;
          const prov = document.getElementById('dataProvider').value;
          const plan = document.getElementById('dataPlan').value;
          document.getElementById('dataSummary').textContent = p ? `${prov} • ${p} • Plan ${Number(plan).toLocaleString()}MB` : 'Select a plan to see summary.';
        });
      });
      document.getElementById('btnPower').addEventListener('click', () => {
        toast('Electricity purchase processing');
      });
      ['powerMeter','powerDisco','powerAmount'].forEach(id => {
        document.getElementById(id).addEventListener('input', () => {
          const m = document.getElementById('powerMeter').value;
          const d = document.getElementById('powerDisco').value;
          const a = document.getElementById('powerAmount').value;
          document.getElementById('powerSummary').textContent = m && a ? `${d} • Meter ${m} • ${formatCurrency(a)}` : 'Enter meter and amount to see summary.';
        });
      });

      // Default page
      showPage('wallet');
      updateBuyQuote();
      updateSellQuote();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:flex-col lg:w-64 border-r border-slate-200 bg-white">
<div className="flex items-center gap-2 h-16 px-6 border-b border-slate-100">
<div className="flex h-9 w-9 items-center justify-center rounded-md" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<span className="text-white text-base font-semibold tracking-tight">FT</span>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight" style={{color: 'var(--brand)'}}>Fintech</span>
<span className="text-xs text-slate-500">Crypto. Payments. Bills.</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-2">
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="wallet">
<i className="h-5 w-5" data-lucide="wallet" strokeWidth="1.5"></i> Wallet
          </button>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="buy">
<i className="h-5 w-5" data-lucide="banknote" strokeWidth="1.5"></i> Buy &amp; Sell
          </button>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="qr">
<i className="h-5 w-5" data-lucide="qr-code" strokeWidth="1.5"></i> QR Payments
          </button>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="bills">
<i className="h-5 w-5" data-lucide="zap" strokeWidth="1.5"></i> Bills
          </button>
<div className="pt-4 mt-4 border-t border-slate-200"></div>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="activity">
<i className="h-5 w-5" data-lucide="history" strokeWidth="1.5"></i> Activity
          </button>
<button className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium hover:bg-slate-100 text-slate-700" data-nav="settings">
<i className="h-5 w-5" data-lucide="settings" strokeWidth="1.5"></i> Settings
          </button>
</nav>
<div className="p-4 border-t border-slate-200">
<div className="p-3 rounded-md bg-slate-50">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="shield" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-slate-700">Secure</span>
</div>
<p className="text-sm text-slate-500 mt-2">Your assets are protected with multi-sig and hardware security.</p>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col">

<div className="lg:hidden flex items-center justify-between h-14 px-4 border-b border-slate-200 bg-white">
<div className="flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-slate-100" id="mobileMenuBtn">
<i className="h-5 w-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
<div className="flex h-8 w-8 items-center justify-center rounded-md" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<span className="text-white text-sm font-semibold tracking-tight">FT</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="p-2 rounded-md hover:bg-slate-100">
<i className="h-5 w-5 text-slate-700" data-lucide="bell" strokeWidth="1.5"></i>
</button>
<div className="h-8 w-8 rounded-full bg-slate-200"></div>
</div>
</div>

<header className="hidden lg:flex items-center justify-between h-16 px-8 border-b border-slate-200 bg-white">
<div>
<h1 className="text-3xl font-semibold tracking-tight" id="pageTitle" style={{color: 'var(--brand)'}}>Wallet</h1>
<p className="text-base text-slate-500">Send and receive crypto, manage your balances.</p>
</div>
<div className="flex items-center gap-2">
<button className="hidden md:flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50">
<i className="h-5 w-5" data-lucide="download" strokeWidth="1.5"></i> Export
            </button>
<button className="flex items-center gap-2 rounded-md text-white px-3 py-2 text-base font-medium" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i> New
            </button>
</div>
</header>

<main className="flex-1 p-4 md:p-6 lg:p-8">

<section className="space-y-6" data-page="wallet">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white">
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-slate-500">Total Balance</p>
<div className="mt-1 flex items-baseline gap-3">
<h2 className="text-4xl font-semibold tracking-tight" style={{color: 'var(--brand)'}}>$24,580.23</h2>
<span className="text-sm text-emerald-600 bg-emerald-50 rounded-md px-2 py-1">+2.8%</span>
</div>
</div>
<div className="hidden md:flex gap-2">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" id="btnSend">
<i className="h-5 w-5" data-lucide="send" strokeWidth="1.5"></i> Send
                      </button>
<button className="flex items-center gap-2 rounded-md text-white px-3 py-2 text-base font-medium" id="btnReceive" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="h-5 w-5" data-lucide="download" strokeWidth="1.5"></i> Receive
                      </button>
</div>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-md border border-slate-200 p-3">
<p className="text-sm text-slate-500">BTC</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-900">0.53</span>
<span className="text-sm text-slate-500">$18,900</span>
</div>
</div>
<div className="rounded-md border border-slate-200 p-3">
<p className="text-sm text-slate-500">ETH</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-900">8.1</span>
<span className="text-sm text-slate-500">$4,980</span>
</div>
</div>
<div className="rounded-md border border-slate-200 p-3">
<p className="text-sm text-slate-500">USDC</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-900">5,110</span>
<span className="text-sm text-slate-500">$5,110</span>
</div>
</div>
<div className="rounded-md border border-slate-200 p-3">
<p className="text-sm text-slate-500">SOL</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-xl font-semibold tracking-tight text-slate-900">42</span>
<span className="text-sm text-slate-500">$590</span>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-open="buySell">
<i className="h-5 w-5" data-lucide="banknote" strokeWidth="1.5"></i> Buy Crypto
                    </button>
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-open="withdraw">
<i className="h-5 w-5" data-lucide="landmark" strokeWidth="1.5"></i> Withdraw to Bank
                    </button>
<button className="flex items-center gap-2 rounded-md text-white px-3 py-2 text-base font-medium" data-nav="qr" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="h-5 w-5" data-lucide="qr-code" strokeWidth="1.5"></i> QR Payment
                    </button>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<p className="text-sm text-slate-500">Deposit Addresses</p>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-amber-500" data-lucide="bitcoin" strokeWidth="1.5"></i>
<div>
<p className="text-base font-medium">BTC</p>
<p className="text-sm text-slate-500 truncate w-40">bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkf4</p>
</div>
</div>
<button className="copy btn-copy rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-copy="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkf4">Copy</button>
</div>
<div className="flex items-center justify-between rounded-md border border-slate-200 p-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-sky-500" data-lucide="coins" strokeWidth="1.5"></i>
<div>
<p className="text-base font-medium">ETH</p>
<p className="text-sm text-slate-500 truncate w-40">0x2A6cA6d2D1b3a1d0B83A...9c12</p>
</div>
</div>
<button className="copy btn-copy rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-copy="0x2A6cA6d2D1b3a1d0B83A...9c12">Copy</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Recent Activity</h3>
<button className="text-base font-medium text-slate-600 hover:text-slate-900">View all</button>
</div>
<div className="mt-4 divide-y divide-slate-100">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-9 w-9 flex items-center justify-center rounded-md bg-slate-50">
<i className="h-5 w-5 text-emerald-600" data-lucide="download" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-base font-medium">Received USDC</p>
<p className="text-sm text-slate-500">From 0x9d...a2c3 · 2h ago</p>
</div>
</div>
<div className="text-right">
<p className="text-base font-medium text-emerald-600">+1,250 USDC</p>
<p className="text-sm text-slate-500">$1,250.00</p>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-9 w-9 flex items-center justify-center rounded-md bg-slate-50">
<i className="h-5 w-5 text-rose-600" data-lucide="send" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-base font-medium">Sent ETH</p>
<p className="text-sm text-slate-500">To 0x1b...8f92 · 1d ago</p>
</div>
</div>
<div className="text-right">
<p className="text-base font-medium text-rose-600">-0.75 ETH</p>
<p className="text-sm text-slate-500">$1,380.42</p>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-9 w-9 flex items-center justify-center rounded-md bg-slate-50">
<i className="h-5 w-5 text-sky-600" data-lucide="qr-code" strokeWidth="1.5"></i>
</span>
<div>
<p className="text-base font-medium">QR Payment</p>
<p className="text-sm text-slate-500">Order #INV-1032 · Paid</p>
</div>
</div>
<div className="text-right">
<p className="text-base font-medium text-emerald-600">+92.00 USDC</p>
<p className="text-sm text-slate-500">$92.00</p>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<h3 className="text-2xl font-semibold tracking-tight">Quick Actions</h3>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-nav="buy">
<i className="h-5 w-5" data-lucide="credit-card" strokeWidth="1.5"></i> Buy
                  </button>
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-open="withdraw">
<i className="h-5 w-5" data-lucide="landmark" strokeWidth="1.5"></i> Withdraw
                  </button>
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-nav="qr">
<i className="h-5 w-5" data-lucide="qr-code" strokeWidth="1.5"></i> Collect
                  </button>
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-nav="bills">
<i className="h-5 w-5" data-lucide="smartphone" strokeWidth="1.5"></i> Airtime
                  </button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="buy">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">Buy with Fiat</h3>
</div>
<div className="mt-4 space-y-4">
<div>
<label className="text-sm text-slate-600">You pay</label>
<div className="mt-1 flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="fiatAmount" inputmode="decimal" placeholder="0.00" type="number"/>
<select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="fiatCurrency">
<option>USD</option>
<option>NGN</option>
<option>EUR</option>
</select>
</div>
</div>
<div>
<label className="text-sm text-slate-600">You receive</label>
<div className="mt-1 flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-base outline-none" id="cryptoOut" placeholder="Calculated..." readonly="" type="text"/>
<select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="cryptoTarget">
<option value="USDC">USDC</option>
<option value="BTC">BTC</option>
<option value="ETH">ETH</option>
</select>
</div>
<p className="mt-2 text-sm text-slate-500" id="buyRateInfo">Rate updates in real time.</p>
</div>
<div>
<label className="text-sm text-slate-600">Payment method</label>
<div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
<button className="pmethod rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-method="Card">Card</button>
<button className="pmethod rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-method="Bank Transfer">Bank Transfer</button>
<button className="pmethod rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-method="Mobile Money">Mobile Money</button>
</div>
</div>
<button className="w-full rounded-md text-white px-3 py-2 text-base font-medium" id="btnBuy" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>Buy Now</button>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="landmark" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">Sell to Bank</h3>
</div>
<div className="mt-4 space-y-4">
<div>
<label className="text-sm text-slate-600">You sell</label>
<div className="mt-1 flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="cryptoAmount" inputmode="decimal" placeholder="0.00" type="number"/>
<select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="cryptoSource">
<option value="USDC">USDC</option>
<option value="BTC">BTC</option>
<option value="ETH">ETH</option>
</select>
</div>
</div>
<div>
<label className="text-sm text-slate-600">You receive (Local)</label>
<div className="mt-1 flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-base outline-none" id="fiatOut" placeholder="Calculated..." readonly="" type="text"/>
<select className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="localCurrency">
<option value="NGN">NGN</option>
<option value="USD">USD</option>
<option value="GHS">GHS</option>
</select>
</div>
<p className="mt-2 text-sm text-slate-500" id="sellRateInfo">Includes network fee and FX spread.</p>
</div>
<div>
<label className="text-sm text-slate-600">Bank account</label>
<div className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
<input className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="bankName" placeholder="Bank name" type="text"/>
<input className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="accountNumber" placeholder="Account number" type="text"/>
</div>
</div>
<button className="w-full rounded-md text-white px-3 py-2 text-base font-medium" id="btnSell" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>Withdraw to Bank</button>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="qr">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="qr-code" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">Create QR Payment</h3>
</div>
<span className="text-sm text-slate-500">Merchant</span>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-600">Amount</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="qrAmount" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
<div>
<label className="text-sm text-slate-600">Currency</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="qrCurrency">
<option>USDC</option>
<option>BTC</option>
<option>ETH</option>
<option>NGN</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Invoice ID</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="qrInvoice" placeholder="INV-1001" type="text"/>
</div>
<div>
<label className="text-sm text-slate-600">Expires in</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="qrExpiry">
<option value="10">10 minutes</option>
<option value="30">30 minutes</option>
<option value="60">1 hour</option>
<option value="1440">24 hours</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-slate-600">Note (optional)</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="qrNote" placeholder="e.g., Cappuccino x2" type="text"/>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<button className="flex items-center gap-2 rounded-md text-white px-3 py-2 text-base font-medium" id="btnGenerateQR" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="h-5 w-5" data-lucide="scan-line" strokeWidth="1.5"></i> Generate QR
                  </button>
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" id="btnResetQR">
<i className="h-5 w-5" data-lucide="rotate-ccw" strokeWidth="1.5"></i> Reset
                  </button>
</div>
<div className="mt-6 hidden rounded-lg border border-slate-200 bg-slate-50 p-5" id="qrPreview">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex items-center justify-center">
<canvas className="rounded-md bg-white p-2 shadow-sm" id="qrCanvas"></canvas>
</div>
<div>
<p className="text-sm text-slate-600">Payment Link</p>
<div className="mt-2 flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none" id="qrLink" readonly="" type="text"/>
<button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" id="btnCopyLink">Copy</button>
</div>
<p className="mt-3 text-sm text-slate-600">Share</p>
<div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
<button className="shareBtn flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-channel="whatsapp">
<i className="h-5 w-5 text-emerald-600" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp
                        </button>
<button className="shareBtn flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-channel="telegram">
<i className="h-5 w-5 text-sky-600" data-lucide="send" strokeWidth="1.5"></i> Telegram
                        </button>
<button className="shareBtn flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-channel="email">
<i className="h-5 w-5 text-slate-700" data-lucide="mail" strokeWidth="1.5"></i> Email
                        </button>
<button className="shareBtn flex items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-channel="share">
<i className="h-5 w-5 text-slate-700" data-lucide="share-2" strokeWidth="1.5"></i> Share
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-2xl font-semibold tracking-tight">Payment Tracking</h3>
<span className="text-sm text-slate-500" id="qrCount">0 open</span>
</div>
<div className="mt-4 space-y-3" id="qrList">
<div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-sm text-slate-500">No payments yet. Create your first QR.</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="bills">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="smartphone" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">Bills &amp; Top-up</h3>
</div>
<div className="inline-flex rounded-md border border-slate-200 bg-slate-50 p-1">
<button className="billTab active rounded-md px-3 py-1.5 text-base font-medium" data-billtab="airtime">Airtime</button>
<button className="billTab rounded-md px-3 py-1.5 text-base font-medium" data-billtab="data">Data</button>
<button className="billTab rounded-md px-3 py-1.5 text-base font-medium" data-billtab="electricity">Electricity</button>
</div>
</div>

<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" data-bill="airtime">
<div className="space-y-4">
<div>
<label className="text-sm text-slate-600">Phone number</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="airtimePhone" placeholder="e.g., +234 801 234 5678" type="tel"/>
</div>
<div>
<label className="text-sm text-slate-600">Provider</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="airtimeProvider">
<option>MTN</option>
<option>Airtel</option>
<option>Glo</option>
<option>9mobile</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Amount</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="airtimeAmount" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
<button className="w-full rounded-md text-white px-3 py-2 text-base font-medium" id="btnAirtime" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="inline h-5 w-5 mr-2" data-lucide="phone" strokeWidth="1.5"></i> Buy Airtime
                  </button>
</div>
<div className="rounded-md border border-slate-200 bg-slate-50 p-4">
<p className="text-sm text-slate-600">Summary</p>
<div className="mt-2 text-base text-slate-700" id="airtimeSummary">Enter details to see summary.</div>
</div>
</div>

<div className="hidden mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" data-bill="data">
<div className="space-y-4">
<div>
<label className="text-sm text-slate-600">Phone number</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="dataPhone" placeholder="e.g., +234 801 234 5678" type="tel"/>
</div>
<div>
<label className="text-sm text-slate-600">Provider</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="dataProvider">
<option>MTN</option>
<option>Airtel</option>
<option>Glo</option>
<option>9mobile</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Plan</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="dataPlan">
<option value="500">500MB - 7 days</option>
<option value="1000">1GB - 30 days</option>
<option value="3000">3GB - 30 days</option>
<option value="10000">10GB - 60 days</option>
</select>
</div>
<button className="w-full rounded-md text-white px-3 py-2 text-base font-medium" id="btnData" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="inline h-5 w-5 mr-2" data-lucide="wifi" strokeWidth="1.5"></i> Buy Data
                  </button>
</div>
<div className="rounded-md border border-slate-200 bg-slate-50 p-4">
<p className="text-sm text-slate-600">Summary</p>
<div className="mt-2 text-base text-slate-700" id="dataSummary">Select a plan to see summary.</div>
</div>
</div>

<div className="hidden mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" data-bill="electricity">
<div className="space-y-4">
<div>
<label className="text-sm text-slate-600">Meter number</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="powerMeter" placeholder="e.g., 1234567890" type="text"/>
</div>
<div>
<label className="text-sm text-slate-600">Disco</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="powerDisco">
<option>Ikeja Electric</option>
<option>Eko Electric</option>
<option>Abuja Electric</option>
<option>Kaduna Electric</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Amount</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="powerAmount" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
<button className="w-full rounded-md text-white px-3 py-2 text-base font-medium" id="btnPower" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>
<i className="inline h-5 w-5 mr-2" data-lucide="zap" strokeWidth="1.5"></i> Buy Power
                  </button>
</div>
<div className="rounded-md border border-slate-200 bg-slate-50 p-4">
<p className="text-sm text-slate-600">Summary</p>
<div className="mt-2 text-base text-slate-700" id="powerSummary">Enter meter and amount to see summary.</div>
</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="activity">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="history" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">All Activity</h3>
</div>
<div className="mt-4">
<div className="rounded-md border border-slate-200 bg-slate-50 p-4 text-base text-slate-600">No additional activity.</div>
</div>
</div>
</section>

<section className="hidden space-y-6" data-page="settings">
<div className="rounded-lg border border-slate-200 bg-white p-5">
<div className="flex items-center gap-2">
<span className="h-9 w-9 flex items-center justify-center rounded-md" style={{background: 'rgba(11,31,58,0.08)', color: 'var(--brand)'}}>
<i className="h-5 w-5" data-lucide="settings" strokeWidth="1.5"></i>
</span>
<h3 className="text-2xl font-semibold tracking-tight">Settings</h3>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-600">Display currency</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200">
<option>USD</option>
<option>NGN</option>
<option>EUR</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Network</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200">
<option>Ethereum</option>
<option>Polygon</option>
<option>Solana</option>
</select>
</div>
</div>
</div>
</section>
</main>

<div className="lg:hidden sticky bottom-0 z-10 border-t border-slate-200 bg-white">
<div className="grid grid-cols-4">
<button className="flex flex-col items-center gap-1 py-2 text-slate-700" data-nav="wallet">
<i className="h-5 w-5" data-lucide="wallet" strokeWidth="1.5"></i>
<span className="text-xs">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 text-slate-700" data-nav="buy">
<i className="h-5 w-5" data-lucide="banknote" strokeWidth="1.5"></i>
<span className="text-xs">Buy</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 text-slate-700" data-nav="qr">
<i className="h-5 w-5" data-lucide="qr-code" strokeWidth="1.5"></i>
<span className="text-xs">QR</span>
</button>
<button className="flex flex-col items-center gap-1 py-2 text-slate-700" data-nav="bills">
<i className="h-5 w-5" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs">Bills</span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-slate-900/50" id="modalBackdrop"></div>

<div className="hidden fixed inset-0 z-20 flex items-center justify-center p-4" id="sendModal">
<div className="w-full max-w-md rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between p-4 border-b border-slate-100">
<h3 className="text-xl font-semibold tracking-tight">Send Crypto</h3>
<button className="p-2 rounded-md hover:bg-slate-100" data-close="sendModal">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div>
<label className="text-sm text-slate-600">Asset</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200">
<option>USDC</option>
<option>BTC</option>
<option>ETH</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Amount</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
<div>
<label className="text-sm text-slate-600">Recipient address</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" placeholder="0x..." type="text"/>
</div>
</div>
<div className="p-4 border-t border-slate-100 flex items-center justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-close="sendModal">Cancel</button>
<button className="rounded-md text-white px-3 py-2 text-base font-medium" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>Send</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-20 flex items-center justify-center p-4" id="receiveModal">
<div className="w-full max-w-md rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between p-4 border-b border-slate-100">
<h3 className="text-xl font-semibold tracking-tight">Receive Crypto</h3>
<button className="p-2 rounded-md hover:bg-slate-100" data-close="receiveModal">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-4 space-y-4">
<div>
<label className="text-sm text-slate-600">Asset</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" id="recvAsset">
<option>USDC</option>
<option>BTC</option>
<option>ETH</option>
</select>
</div>
<div className="flex items-center justify-center">
<canvas className="rounded-md bg-white p-2 shadow-sm" id="receiveQR"></canvas>
</div>
<div className="flex gap-2">
<input className="flex-1 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-base outline-none" id="receiveAddress" readonly="" type="text"/>
<button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" id="btnCopyReceive">Copy</button>
</div>
</div>
<div className="p-4 border-t border-slate-100 flex items-center justify-end">
<button className="rounded-md text-white px-3 py-2 text-base font-medium" data-close="receiveModal" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>Done</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-20 flex items-center justify-center p-4" id="withdrawModal">
<div className="w-full max-w-md rounded-lg border border-slate-200 bg-white">
<div className="flex items-center justify-between p-4 border-b border-slate-100">
<h3 className="text-xl font-semibold tracking-tight">Withdraw to Bank</h3>
<button className="p-2 rounded-md hover:bg-slate-100" data-close="withdrawModal">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-4 space-y-3">
<div>
<label className="text-sm text-slate-600">From (Asset)</label>
<select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200">
<option>USDC</option>
<option>BTC</option>
<option>ETH</option>
</select>
</div>
<div>
<label className="text-sm text-slate-600">Amount</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" inputmode="decimal" placeholder="0.00" type="number"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<div>
<label className="text-sm text-slate-600">Bank name</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" placeholder="Bank" type="text"/>
</div>
<div>
<label className="text-sm text-slate-600">Account number</label>
<input className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-base outline-none focus:ring-2 focus:ring-slate-200" placeholder="0000000000" type="text"/>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-100 flex items-center justify-end gap-2">
<button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-base font-medium hover:bg-slate-50" data-close="withdrawModal">Cancel</button>
<button className="rounded-md text-white px-3 py-2 text-base font-medium" style={{background: 'linear-gradient(135deg, var(--brand), #1b2f5a)'}}>Withdraw</button>
</div>
</div>
</div>

<div className="hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-30 rounded-md border border-slate-200 bg-white px-4 py-2 shadow" id="toast">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-600" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-base text-slate-700" id="toastMsg">Copied</span>
</div>
</div>


    </>
  );
}
