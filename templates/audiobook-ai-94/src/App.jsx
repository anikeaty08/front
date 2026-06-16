import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const creditTab = document.getElementById('creditTab');
    const cryptoTab = document.getElementById('cryptoTab');
    const creditPanel = document.getElementById('creditPanel');
    const cryptoPanel = document.getElementById('cryptoPanel');
    const paymentStatus = document.getElementById('paymentStatus');
    const cryptoSelect = document.getElementById('cryptoSelect');
    const selectedWallet = document.getElementById('selectedWallet');

    const walletMap = {
      BTC: '1DEribmB5nTrYALcoyEgT7srX96PwgVQnS',
      ETH: '0x01c78d19a764d4e09f5f3134183e69f387ecb7d3',
      USDT: '0x01c78d19a764d4e09f5f3134183e69f387ecb7d3',
      BNB: 'bnb16xcmk4vv52kwjeq6muup0jsp29wcsqu20v8dxy',
      LTC: 'LZjkaAKMcw3Co4QXbio9jzdkNuRZCcyERD',
      TRX: 'TKtJUHtd6XGgj5JTZcoHUdNRpKAE2YfhSb'
    };

    function activateCredit() {
      creditPanel.classList.remove('hidden');
      cryptoPanel.classList.add('hidden');
      creditTab.className = 'rounded-3xl border border-white/10 bg-white px-4 py-4 text-left text-slate-950 transition';
      cryptoTab.className = 'rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left text-white transition hover:bg-white/10';
    }

    function activateCrypto() {
      cryptoPanel.classList.remove('hidden');
      creditPanel.classList.add('hidden');
      cryptoTab.className = 'rounded-3xl border border-white/10 bg-white px-4 py-4 text-left text-slate-950 transition';
      creditTab.className = 'rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left text-white transition hover:bg-white/10';
    }

    creditTab.addEventListener('click', activateCredit);
    cryptoTab.addEventListener('click', activateCrypto);

    cryptoSelect.addEventListener('change', function () {
      const key = this.value === 'USDT' ? 'USDT' : this.value;
      selectedWallet.textContent = walletMap[key];
    });

    document.getElementById('creditPayBtn').addEventListener('click', function () {
      paymentStatus.textContent = 'Credit card payment action recorded successfully.';
      paymentStatus.classList.remove('hidden');
    });

    document.getElementById('cryptoPayBtn').addEventListener('click', function () {
      paymentStatus.textContent = 'Crypto payment intent recorded. Please send funds to the selected wallet.';
      paymentStatus.classList.remove('hidden');
    });

    const signupForm = document.getElementById('signupForm');
    const signupError = document.getElementById('signupError');
    const dashboard = document.getElementById('dashboard');

    function loadDashboard(data) {
      document.getElementById('dashName').textContent = data.username || 'Creator';
      document.getElementById('dashEmail').textContent = data.email || '—';
      document.getElementById('dashUsername').textContent = data.username || '—';
      document.getElementById('dashWalletType').textContent = data.walletType || '—';
      document.getElementById('dashWalletAddress').textContent = data.walletAddress || '—';
      dashboard.classList.remove('hidden');
      dashboard.scrollIntoView({ behavior: 'smooth' });
    }

    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = document.getElementById('email').value.trim();
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      const walletType = document.getElementById('walletType').value;
      const walletAddress = document.getElementById('walletAddress').value.trim();

      if (!email || !username || !password || !walletAddress) {
        signupError.textContent = 'Please complete all registration fields.';
        signupError.classList.remove('hidden');
        return;
      }

      if (password.length < 6) {
        signupError.textContent = 'Password must be at least 6 characters.';
        signupError.classList.remove('hidden');
        return;
      }

      signupError.classList.add('hidden');

      const userData = { email, username, password, walletType, walletAddress };
      localStorage.setItem('audiobook_ai_user', JSON.stringify(userData));
      loadDashboard(userData);
    });

    const storedUser = localStorage.getItem('audiobook_ai_user');
    if (storedUser) {
      loadDashboard(JSON.parse(storedUser));
    }

    document.getElementById('logoutBtn').addEventListener('click', function () {
      localStorage.removeItem('audiobook_ai_user');
      dashboard.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute top-1/3 -left-16 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"></div>
</div>
<div className="relative z-10">
<header className="border-b backdrop-blur border-black/10 bg-white/20">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border px-3 py-2 text-sm font-medium tracking-tight border-black/10 bg-black/5 text-black">AAM</div>
<div>
<div className="text-sm font-medium text-black">AudioBook AI Agent</div>
<div className="text-xs text-blue-600">Autonomous publishing platform</div>
</div>
</div>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm transition text-blue-700 hover:text-black" href="#specification">Specification</a>
<a className="text-sm transition text-blue-700 hover:text-black" href="#purchase">Buy Now</a>
<a className="text-sm transition text-blue-700 hover:text-black" href="#register">Register</a>
<a className="text-sm transition text-blue-700 hover:text-black" href="#dashboard">Dashboard</a>
</nav>
</div>
</header>
<main>
<section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
<div className="flex flex-col justify-center">
<div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium border-cyan-600/20 bg-cyan-600/10 text-cyan-700">
<iconify-icon height="18" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
            Fully Autonomous AudioBook AI Agent
          </div>
<h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl text-black">
            Writes, narrates, formats, and auto-publishes audiobooks at the press of one button
          </h1>
<p className="mt-6 max-w-2xl text-base leading-7 text-blue-700">
            Launch an automated audiobook publishing workflow that creates assets, prepares listings, and helps distribute to major marketplaces and subscription ecosystems.
          </p>
<div className="mt-8 grid gap-4 sm:grid-cols-2">
<div className="rounded-3xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-3">
<div className="rounded-2xl p-2 bg-black/10">
<iconify-icon height="20" icon="solar:play-stream-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="text-sm font-medium text-black">Automation Engine</div>
</div>
<p className="mt-3 text-sm leading-6 text-blue-600">
                No writing, no recording, no voice actors, no studio time. Trigger the flow and monitor outputs.
              </p>
</div>
<div className="rounded-3xl border p-5 backdrop-blur border-black/10 bg-black/5">
<div className="flex items-center gap-3">
<div className="rounded-2xl p-2 bg-black/10">
<iconify-icon height="20" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="text-sm font-medium text-black">Revenue Tracking</div>
</div>
<p className="mt-3 text-sm leading-6 text-blue-600">
                Surface monthly subscription revenue, payout trends, and royalty performance in one place.
              </p>
</div>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<a className="rounded-2xl px-5 py-3 text-sm font-medium transition bg-black text-blue-50 hover:bg-blue-800" href="#purchase">Buy / Sign Up</a>
<a className="rounded-2xl border px-5 py-3 text-sm font-medium transition border-black/10 bg-black/5 text-black hover:bg-black/10" href="#specification">Read Specification</a>
</div>
</div>
<div className="rounded-[2rem] border p-5 shadow-2xl backdrop-blur border-black/10 bg-black/5 shadow-cyan-50/20">
<div className="rounded-[1.5rem] border p-6 border-black/10 bg-blue-50/80">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-xs uppercase tracking-[0.2rem] text-cyan-700">Live Offer</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-black">AudioBook AI Agent</div>
<div className="mt-2 text-sm text-blue-600">
                  Autonomous audiobook publishing machine for digital distribution and royalties.
                </div>
</div>
<div className="rounded-2xl border px-3 py-2 text-xs font-medium border-green-600/20 bg-green-600/10 text-green-700">
                Active
              </div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border p-4 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Estimated Monthly</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-black">$2,635</div>
</div>
<div className="rounded-2xl border p-4 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Platforms</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-black">12+</div>
</div>
<div className="rounded-2xl border p-4 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Setup Style</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-black">1-Click</div>
</div>
</div>
<div className="mt-6 rounded-3xl border p-4 border-cyan-600/20 bg-cyan-600/10">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-cyan-700" height="20" icon="solar:link-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium text-cyan-800">Referenced campaign link</div>
<a className="mt-1 block break-all text-xs underline underline-offset-4 text-cyan-700" href="https://grabaudiomint.com/live?r=10641&amp;t=1775930671&amp;sp=primary" target="_blank">
                    https://grabaudiomint.com/live?r=10641&amp;t=1775930671&amp;sp=primary
                  </a>
</div>
</div>
</div>
<div className="mt-6 grid gap-3">
<div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm border-black/10 bg-black/5 text-blue-700">
<iconify-icon height="18" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                AI writing workflow
              </div>
<div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm border-black/10 bg-black/5 text-blue-700">
<iconify-icon height="18" icon="solar:microphone-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                AI narration and voice generation
              </div>
<div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm border-black/10 bg-black/5 text-blue-700">
<iconify-icon height="18" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Format and metadata preparation
              </div>
<div className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm border-black/10 bg-black/5 text-blue-700">
<iconify-icon height="18" icon="solar:upload-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Assisted publishing workflow
              </div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-8 lg:px-8" id="specification">
<div className="max-w-3xl">
<div className="text-xs uppercase tracking-[0.2rem] text-blue-600">Service Specification</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">Functional specification for AudioBook AI Agent</h2>
</div>
<div className="mt-8 grid gap-6 lg:grid-cols-2">
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">1. Service Overview</h3>
<p className="mt-3 text-sm leading-6 text-blue-700">
              AudioBook AI Agent is a subscription-based platform that enables users to generate audiobook projects using AI-assisted writing, narration, formatting, and publishing workflows from a centralized dashboard.
            </p>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">2. Core Promise</h3>
<p className="mt-3 text-sm leading-6 text-blue-700">
              Users can initiate an audiobook creation pipeline with minimal manual effort through guided automation, project management, and payment onboarding.
            </p>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">3. Required User Features</h3>
<ul className="mt-3 space-y-2 text-sm leading-6 text-blue-700">
<li>• User registration with email, username, password, and crypto address.</li>
<li>• Support for BTC, ETH, and USDT wallet capture during registration.</li>
<li>• Dashboard access immediately after successful signup.</li>
<li>• Purchase flow with credit card and crypto options.</li>
<li>• Wallet display for supported crypto deposits.</li>
<li>• Ability to track account, payments, and publishing status.</li>
</ul>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">4. Payment Features</h3>
<ul className="mt-3 space-y-2 text-sm leading-6 text-blue-700">
<li>• Credit card checkout form for billing details.</li>
<li>• Crypto checkout with selectable assets.</li>
<li>• Read-only wallet addresses for BTC, ETH, USDT, BNB, LTC, and TRX.</li>
<li>• Payment confirmation UI and order summary.</li>
</ul>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">5. Dashboard Modules</h3>
<ul className="mt-3 space-y-2 text-sm leading-6 text-blue-700">
<li>• Welcome panel with account status.</li>
<li>• Project generation quick actions.</li>
<li>• Revenue summary cards.</li>
<li>• Publishing destination overview.</li>
</ul>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">6. Technical Notes</h3>
<ul className="mt-3 space-y-2 text-sm leading-6 text-blue-700">
<li>• Responsive landing page, transaction page, and authenticated dashboard view.</li>
<li>• Client-side form validation for required fields.</li>
<li>• Dynamic transitions between signup, checkout, and dashboard.</li>
<li>• Local execution for demo purposes using browser storage.</li>
</ul>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-10 lg:px-8" id="purchase">
<div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<div className="flex items-center gap-3">
<div className="rounded-2xl p-2 bg-black/10">
<iconify-icon height="20" icon="solar:card-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-black">Transaction page</h2>
<p className="text-sm text-blue-600">Choose a payment method to buy or subscribe</p>
</div>
</div>
<div className="mt-6 grid gap-4 sm:grid-cols-2">
<button className="rounded-3xl border px-4 py-4 text-left transition border-black/10 bg-black text-blue-50" id="creditTab">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:card-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium">Pay with credit card</div>
<div className="text-xs text-blue-400">Instant checkout</div>
</div>
</div>
</button>
<button className="rounded-3xl border px-4 py-4 text-left transition border-black/10 bg-black/5 text-black hover:bg-black/10" id="cryptoTab">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:bitcoin-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium">Pay with crypto</div>
<div className="text-xs text-blue-600">Wallet transfer</div>
</div>
</div>
</button>
</div>
<div className="mt-6 rounded-[1.5rem] border p-5 border-black/10 bg-blue-50/60" id="creditPanel">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs text-blue-600">Cardholder name</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" placeholder="John Carter" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Card number</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" placeholder="4242 4242 4242 4242" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Expiry</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" placeholder="08/28" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">CVC</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" placeholder="123" type="text"/>
</div>
</div>
<button className="mt-5 w-full rounded-2xl px-5 py-3 text-sm font-medium transition bg-black text-blue-50 hover:bg-blue-800" id="creditPayBtn">
                Complete card payment
              </button>
</div>
<div className="mt-6 hidden rounded-[1.5rem] border p-5 border-black/10 bg-blue-50/60" id="cryptoPanel">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs text-blue-600">Select asset</label>
<select className="w-full appearance-none rounded-2xl border px-4 py-3 text-sm outline-none focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="cryptoSelect">
<option value="BTC">BTC</option>
<option value="ETH">ETH</option>
<option value="USDT">USDT (ERC-20)</option>
<option value="BNB">BNB</option>
<option value="LTC">LTC</option>
<option value="TRX">TRX</option>
</select>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Deposit amount</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" placeholder="Enter amount" type="text"/>
</div>
</div>
<div className="mt-5 rounded-3xl border p-4 border-cyan-600/20 bg-cyan-600/10">
<div className="text-xs text-cyan-800">Deposit wallet</div>
<div className="mt-2 break-all text-sm text-cyan-700" id="selectedWallet">1DEribmB5nTrYALcoyEgT7srX96PwgVQnS</div>
</div>
<div className="mt-5 grid gap-3">
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">BTC</div>
<div className="mt-1 break-all text-sm text-black">1DEribmB5nTrYALcoyEgT7srX96PwgVQnS</div>
</div>
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">ETH</div>
<div className="mt-1 break-all text-sm text-black">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</div>
</div>
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">USDT (ERC-20)</div>
<div className="mt-1 break-all text-sm text-black">0x01c78d19a764d4e09f5f3134183e69f387ecb7d3</div>
</div>
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">BNB</div>
<div className="mt-1 break-all text-sm text-black">bnb16xcmk4vv52kwjeq6muup0jsp29wcsqu20v8dxy</div>
</div>
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">LTC</div>
<div className="mt-1 break-all text-sm text-black">LZjkaAKMcw3Co4QXbio9jzdkNuRZCcyERD</div>
</div>
<div className="rounded-2xl border p-3 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">TRX</div>
<div className="mt-1 break-all text-sm text-black">TKtJUHtd6XGgj5JTZcoHUdNRpKAE2YfhSb</div>
</div>
</div>
<button className="mt-5 w-full rounded-2xl px-5 py-3 text-sm font-medium transition bg-black text-blue-50 hover:bg-blue-800" id="cryptoPayBtn">
                Confirm crypto payment intent
              </button>
</div>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">Order summary</h3>
<div className="mt-5 rounded-3xl border p-5 border-black/10 bg-blue-50/60">
<div className="flex items-center justify-between">
<span className="text-sm text-blue-600">Product</span>
<span className="text-sm text-black">AudioBook AI Agent</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-blue-600">Plan</span>
<span className="text-sm text-black">Starter Access</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-blue-600">Setup fee</span>
<span className="text-sm text-black">$47.00</span>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm text-blue-600">Monthly</span>
<span className="text-sm text-black">$27.00</span>
</div>
<div className="mt-4 border-t pt-4 border-black/10">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-black">Due today</span>
<span className="text-lg font-medium text-black">$47.00</span>
</div>
</div>
</div>
<div className="mt-5 hidden rounded-3xl border p-4 text-sm border-green-600/20 bg-green-600/10 text-green-700" id="paymentStatus">
              Payment action recorded successfully.
            </div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-10 lg:px-8" id="register">
<div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<div className="text-xs uppercase tracking-[0.2rem] text-blue-600">Get started</div>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-black">User registration form</h2>
<p className="mt-3 text-sm leading-6 text-blue-700">
              Create your account with email, username, password, and your preferred crypto payout address.
            </p>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-blue-50/70">
<form className="grid gap-4 sm:grid-cols-2" id="signupForm">
<div className="sm:col-span-2">
<label className="mb-2 block text-xs text-blue-600">Email</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">User name</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="username" placeholder="mintcreator" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Password</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="password" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Crypto type</label>
<select className="w-full appearance-none rounded-2xl border px-4 py-3 text-sm outline-none focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="walletType">
<option value="BTC">BTC</option>
<option value="ETH">ETH</option>
<option value="USDT">USDT</option>
</select>
</div>
<div>
<label className="mb-2 block text-xs text-blue-600">Crypto address</label>
<input className="w-full rounded-2xl border px-4 py-3 text-sm outline-none placeholder:text-blue-500 focus:border-cyan-400/40 border-black/10 bg-black/5 text-black" id="walletAddress" placeholder="Enter your wallet address" type="text"/>
</div>
<div className="sm:col-span-2">
<button className="w-full rounded-2xl px-5 py-3 text-sm font-medium transition bg-black text-blue-50 hover:bg-blue-800" type="submit">
                  Create account and open dashboard
                </button>
</div>
</form>
<div className="mt-4 hidden rounded-2xl border px-4 py-3 text-sm border-rose-600/20 bg-rose-600/10 text-rose-700" id="signupError"></div>
</div>
</div>
</section>
<section className="mx-auto hidden max-w-7xl px-6 py-10 lg:px-8" id="dashboard">
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<div className="text-xs uppercase tracking-[0.2rem] text-blue-600">User Dashboard</div>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-black">Welcome back, <span id="dashName">Creator</span></h2>
<p className="mt-2 text-sm text-blue-600">Your account has been created and the dashboard is now active.</p>
</div>
<button className="rounded-2xl border px-4 py-3 text-sm font-medium transition border-black/10 bg-black/5 text-black hover:bg-black/10" id="logoutBtn">
            Log out
          </button>
</div>
<div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
<div className="space-y-6">
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-[2rem] border p-5 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Projects Generated</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-black">14</div>
</div>
<div className="rounded-[2rem] border p-5 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Published Channels</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-black">12</div>
</div>
<div className="rounded-[2rem] border p-5 border-black/10 bg-black/5">
<div className="text-xs text-blue-600">Monthly Revenue</div>
<div className="mt-3 text-3xl font-semibold tracking-tight text-black">$2,635</div>
</div>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium text-black">Publishing pipeline</h3>
<p className="mt-1 text-sm text-blue-600">Track your automated audiobook workflow</p>
</div>
<button className="rounded-2xl px-4 py-2 text-sm font-medium transition bg-black text-blue-50 hover:bg-blue-800">
                  Run New Project
                </button>
</div>
<div className="mt-6 grid gap-4 md:grid-cols-4">
<div className="rounded-2xl border p-4 border-black/10 bg-blue-50/50">
<div className="text-xs text-blue-600">Writing</div>
<div className="mt-2 text-sm font-medium text-black">Completed</div>
</div>
<div className="rounded-2xl border p-4 border-black/10 bg-blue-50/50">
<div className="text-xs text-blue-600">Narration</div>
<div className="mt-2 text-sm font-medium text-black">Completed</div>
</div>
<div className="rounded-2xl border p-4 border-black/10 bg-blue-50/50">
<div className="text-xs text-blue-600">Formatting</div>
<div className="mt-2 text-sm font-medium text-black">Completed</div>
</div>
<div className="rounded-2xl border p-4 border-black/10 bg-blue-50/50">
<div className="text-xs text-blue-600">Publishing</div>
<div className="mt-2 text-sm font-medium text-black">In queue</div>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">Account details</h3>
<div className="mt-5 space-y-4 text-sm">
<div className="flex items-center justify-between gap-4">
<span className="text-blue-600">Email</span>
<span className="break-all text-right text-black" id="dashEmail">—</span>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-blue-600">Username</span>
<span className="text-black" id="dashUsername">—</span>
</div>
<div className="flex items-center justify-between gap-4">
<span className="text-blue-600">Wallet type</span>
<span className="text-black" id="dashWalletType">—</span>
</div>
<div className="flex items-start justify-between gap-4">
<span className="text-blue-600">Wallet address</span>
<span className="max-w-[16rem] break-all text-right text-black" id="dashWalletAddress">—</span>
</div>
</div>
</div>
<div className="rounded-[2rem] border p-6 border-black/10 bg-black/5">
<h3 className="text-lg font-medium text-black">Distribution targets</h3>
<div className="mt-5 grid gap-3">
<div className="rounded-2xl border px-4 py-3 text-sm border-black/10 bg-blue-50/50 text-blue-700">Spotify</div>
<div className="rounded-2xl border px-4 py-3 text-sm border-black/10 bg-blue-50/50 text-blue-700">Barnes &amp; Noble</div>
<div className="rounded-2xl border px-4 py-3 text-sm border-black/10 bg-blue-50/50 text-blue-700">Audible</div>
<div className="rounded-2xl border px-4 py-3 text-sm border-black/10 bg-blue-50/50 text-blue-700">Kobo</div>
<div className="rounded-2xl border px-4 py-3 text-sm border-black/10 bg-blue-50/50 text-blue-700">Everand + 7 more</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
