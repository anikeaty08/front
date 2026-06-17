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



        // UI Helpers defined globally for HTML callbacks
        function showToast(title, msg, type = 'info') {
            const toast = document.getElementById('toast');
            const toastTitle = document.getElementById('toast-title');
            const toastMsg = document.getElementById('toast-msg');
            const toastIcon = document.getElementById('toast-icon');
            
            toastTitle.innerText = title;
            toastMsg.innerText = msg;
            
            if(type === 'error') {
                toast.style.borderLeftColor = '#ef4444';
                toastIcon.innerHTML = '<iconify-icon icon="solar:danger-circle-linear" class="text-red-500"></iconify-icon>';
            } else if (type === 'success') {
                toast.style.borderLeftColor = '#22c55e';
                toastIcon.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-green-500"></iconify-icon>';
            } else {
                toast.style.borderLeftColor = '#06b6d4';
                toastIcon.innerHTML = '<iconify-icon icon="solar:info-circle-linear" class="text-cyan-500"></iconify-icon>';
            }
            
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }

        function openModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            modal.classList.remove('hidden');
            
            if(id === 'receive-modal' && window.userAddress) {
                document.getElementById('receive-address').innerText = window.userAddress;
                document.getElementById('qr-code-img').src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${window.userAddress}&color=000000&bgcolor=ffffff`;
            }
            
            if(id === 'send-modal') {
                window.updateGasEstimate();
            }

            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            const content = document.getElementById(id + '-content');
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        async function copyAddress() {
            if(window.userAddress) {
                await navigator.clipboard.writeText(window.userAddress);
                showToast('Copied', 'Wallet address copied to clipboard', 'success');
            }
        }
    


        import { createWeb3Modal, defaultConfig } from 'https://esm.sh/@web3modal/ethers@5.0.0/dist/ethers.js'

        // --- CONFIGURATION ---
        // IMPORTANT: In production, get your own ID at https://cloud.walletconnect.com
        const projectId = '2435520e5e49265f242142e054660893'; 

        // 1. Set chains
        const mainnet = {
            chainId: 1,
            name: 'Ethereum',
            currency: 'ETH',
            explorerUrl: 'https://etherscan.io',
            rpcUrl: 'https://cloudflare-eth.com'
        }
        
        const polygon = {
            chainId: 137,
            name: 'Polygon',
            currency: 'MATIC',
            explorerUrl: 'https://polygonscan.com',
            rpcUrl: 'https://polygon-rpc.com'
        }

        const bsc = {
            chainId: 56,
            name: 'Binance Smart Chain',
            currency: 'BNB',
            explorerUrl: 'https://bscscan.com',
            rpcUrl: 'https://binance.llamarpc.com'
        }

        // 2. Create modal
        const metadata = {
            name: 'Aura Strike',
            description: 'Non-custodial Web3 Interface',
            url: 'https://aurastrike.com',
            icons: ['https://avatars.githubusercontent.com/u/37784886']
        }

        const modal = createWeb3Modal({
            ethersConfig: defaultConfig({ metadata }),
            chains: [mainnet, polygon, bsc],
            projectId,
            enableAnalytics: true, // Optional - defaults to your Cloud configuration
            themeMode: 'dark',
            themeVariables: {
                '--w3m-accent': '#00f0ff',
                '--w3m-border-radius-master': '1px'
            }
        })

        // --- GLOBAL STATE ---
        let provider = null;
        let signer = null;
        window.userAddress = null; // Exposed for HTML access
        let nativeSymbol = "ETH";

        // Expose open function to HTML buttons
        window.openWalletModal = function() {
            modal.open();
        }

        // --- EVENTS ---
        
        // Listen for account changes via Modal
        modal.subscribeProvider(async ({ provider: modalProvider, address, chainId }) => {
            if (address) {
                // CONNECTED
                console.log("Wallet Connected:", address);
                
                // Wrap standard EIP-1193 provider with Ethers
                // Note: @web3modal/ethers passes a specific provider type
                if(modalProvider) {
                    provider = new ethers.BrowserProvider(modalProvider);
                    signer = await provider.getSigner();
                    window.userAddress = address;
                    
                    // Update UI
                    updateConnectedUI(address, chainId);
                    await refreshData();
                }
            } else {
                // DISCONNECTED
                console.log("Wallet Disconnected");
                window.location.reload();
            }
        });

        function updateConnectedUI(address, chainId) {
            // Hide Welcome, Show Dashboard
            document.getElementById('welcome-view').style.display = 'none';
            document.getElementById('dashboard-view').classList.remove('hidden');

            // Update Nav Button
            const btn = document.getElementById('connect-btn');
            btn.innerHTML = `<span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ${address.substring(0,6)}...${address.substring(38)}`;
            btn.className = "px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm font-mono flex items-center gap-2";
            btn.onclick = () => modal.open(); // Opening modal when connected shows account info/disconnect
        }

        // --- DATA FETCHING ---

        window.refreshData = async function() {
            if(!provider || !window.userAddress) return;

            try {
                const network = await provider.getNetwork();
                const currentChainId = network.chainId;
                
                // Set Symbol
                if(currentChainId === 1n) { nativeSymbol = 'ETH'; document.getElementById('chain-icon').setAttribute('icon', 'logos:ethereum'); }
                else if(currentChainId === 56n) { nativeSymbol = 'BNB'; document.getElementById('chain-icon').setAttribute('icon', 'simple-icons:binance'); }
                else if(currentChainId === 137n) { nativeSymbol = 'MATIC'; document.getElementById('chain-icon').setAttribute('icon', 'logos:polygon'); }
                else { nativeSymbol = 'ETH'; }

                // Get Balance
                const balanceWei = await provider.getBalance(window.userAddress);
                const nativeBalance = ethers.formatEther(balanceWei);
                
                // DOM Updates
                document.getElementById('balance-amount').innerText = parseFloat(nativeBalance).toFixed(4);
                document.getElementById('balance-symbol').innerText = nativeSymbol;
                document.getElementById('wallet-address').innerText = `${window.userAddress.substring(0,6)}...${window.userAddress.substring(38)}`;
                
                document.getElementById('asset-name').innerText = network.name === 'unknown' ? 'Unknown Network' : network.name;
                document.getElementById('asset-balance').innerText = `${parseFloat(nativeBalance).toFixed(4)} ${nativeSymbol}`;
                document.getElementById('send-symbol').innerText = nativeSymbol;

                // Network Badge
                const netEl = document.getElementById('network-indicator');
                const netDot = document.getElementById('net-dot');
                const netName = document.getElementById('net-name');
                
                netEl.classList.remove('hidden');
                netEl.classList.add('flex');
                netDot.classList.replace('bg-red-500', 'bg-green-500');
                netName.innerText = `Chain ID: ${currentChainId}`;

                // Mock USD
                if(currentChainId === 1n) {
                   const usd = (parseFloat(nativeBalance) * 2400).toFixed(2);
                   document.getElementById('balance-usd').innerText = `≈ $${usd} USD (Est.)`;
                }

            } catch (error) {
                console.error("Fetch error:", error);
            }
        }

        window.updateGasEstimate = async function() {
            if(!provider) return;
            const gasEl = document.getElementById('gas-estimate');
            gasEl.innerText = "Estimating...";
            try {
                const feeData = await provider.getFeeData();
                const gasPrice = feeData.gasPrice ? ethers.formatUnits(feeData.gasPrice, 'gwei') : 'Unknown';
                gasEl.innerText = `${parseFloat(gasPrice).toFixed(2)} Gwei`;
            } catch (e) {
                gasEl.innerText = "Unknown";
            }
        }

        window.handleSend = async function(e) {
            e.preventDefault();
            
            const to = document.getElementById('send-to').value;
            const amount = document.getElementById('send-amount').value;
            const btn = document.getElementById('send-btn');
            
            if(!ethers.isAddress(to)) {
                showToast('Invalid Address', 'Check recipient', 'error');
                return;
            }

            try {
                btn.innerHTML = `<iconify-icon icon="line-md:loading-loop" class="text-xl"></iconify-icon> Check Mobile Device...`;
                btn.disabled = true;

                const tx = {
                    to: to,
                    value: ethers.parseEther(amount)
                };

                const txResponse = await signer.sendTransaction(tx);
                
                showToast('Sent', 'Transaction submitted', 'info');
                closeModal('send-modal');
                btn.innerHTML = `<span>Confirm on Mobile Device</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>`;
                btn.disabled = false;
                
                // Add to history UI
                const container = document.getElementById('tx-history');
                // clear empty state
                if(container.querySelector('.text-center')) container.innerHTML = '';
                
                const div = document.createElement('div');
                div.className = 'relative pl-8 before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-yellow-500 before:shadow-[0_0_8px_rgba(234,179,8,0.5)] animate-reveal';
                div.innerHTML = `
                    <div class="flex justify-between items-start mb-1">
                        <span class="text-sm text-white font-medium">Sent ${nativeSymbol}</span>
                        <span class="text-xs text-yellow-500 font-mono">Pending</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-slate-500 font-mono">${txResponse.hash.substring(0,10)}...</span>
                        <span class="text-sm text-white">-${amount} ${nativeSymbol}</span>
                    </div>
                `;
                container.prepend(div);

                await txResponse.wait();
                showToast('Success', 'Confirmed on chain', 'success');
                window.refreshData();

            } catch (error) {
                console.error(error);
                btn.innerHTML = `<span>Confirm on Mobile Device</span><iconify-icon icon="solar:arrow-right-linear"></iconify-icon>`;
                btn.disabled = false;
                showToast('Error', 'Transaction failed or rejected', 'error');
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-cyan-500/50 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-cyan-500/20 blur-sm"></div>
<iconify-icon className="text-cyan-400 text-xl relative z-10" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-white">Aura Strike</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300" id="network-indicator">
<span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-colors duration-500" id="net-dot"></span>
<span id="net-name">Disconnected</span>
</div>
<button className="group relative px-6 py-2.5 rounded-full bg-white text-black font-medium text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 overflow-hidden" id="connect-btn" onclick="openWalletModal()">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
                        Connect Wallet
                        <iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20 relative z-10">

<section className="min-h-[90vh] flex flex-col items-center justify-center relative px-6 text-center" id="welcome-view">

<div className="orb-container mb-12 animate-reveal opacity-0">
<div className="orb-core"></div>
<div className="orb-ring" style={{width: '100%', height: '100%', animation: 'spin-slow 10s linear infinite'}}></div>
<div className="orb-ring" style={{width: '70%', height: '70%', animation: 'spin-rev 8s linear infinite'}}></div>
<div className="orb-ring" style={{width: '140%', height: '140%', borderColor: 'rgba(189, 0, 255, 0.2)', animation: 'spin-slow 15s linear infinite'}}></div>
</div>
<h1 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 animate-reveal delay-100 opacity-0">
                Strike the Blockchain<br/>
<span className="text-gradient-aura">With Confidence.</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-reveal delay-200 opacity-0">
                A non-custodial, real-time Web3 interface. Connect confidently using WalletConnect v2, supporting all mobile wallets and desktop extensions securely.
            </p>
<div className="animate-reveal delay-300 opacity-0">
<button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full text-white font-medium backdrop-blur-md transition-all flex items-center gap-3 mx-auto group" onclick="openWalletModal()">
<span>Initialize Interface</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-8 flex justify-center gap-8 text-xs text-slate-500 uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> WalletConnect v2</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:smartphone-linear"></iconify-icon> Mobile Ready</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:user-hand-up-linear"></iconify-icon> Non-Custodial</span>
</div>
</div>
</section>

<section className="hidden max-w-7xl mx-auto px-6 py-12 animate-reveal" id="dashboard-view">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

<div className="lg:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group tilt-target">
<div className="absolute -right-10 -top-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-400 mb-1">Total Native Balance</p>
<div className="flex items-baseline gap-2">
<h2 className="text-5xl font-display font-medium text-white tracking-tight" id="balance-amount">0.00</h2>
<span className="text-xl text-slate-500 font-medium" id="balance-symbol">ETH</span>
</div>
<p className="text-xs text-slate-500 mt-2 font-mono" id="balance-usd">≈ $0.00 USD</p>
</div>
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon className="text-2xl" icon="logos:ethereum" id="chain-icon"></iconify-icon>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 flex items-center gap-3 cursor-pointer hover:border-cyan-500/30 transition-colors" onclick="copyAddress()">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="font-mono text-sm text-cyan-400" id="wallet-address">0x00...0000</span>
<iconify-icon className="text-slate-500" icon="solar:copy-linear"></iconify-icon>
</div>
<button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-400 hover:text-white" onclick="refreshData()" title="Refresh Data">
<iconify-icon className="text-xl" icon="solar:refresh-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="glass rounded-3xl p-6 flex flex-col">
<h3 className="text-sm font-medium text-slate-400 mb-6">Quick Actions</h3>
<div className="grid grid-cols-1 gap-4 flex-grow">
<button className="glass-hover rounded-xl border border-white/5 p-4 flex items-center justify-between group transition-all" onclick="openModal('send-modal')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:card-send-linear"></iconify-icon>
</div>
<div className="text-left">
<span className="block text-white font-medium">Send</span>
<span className="text-xs text-slate-500">Transfer assets</span>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="glass-hover rounded-xl border border-white/5 p-4 flex items-center justify-between group transition-all" onclick="openModal('receive-modal')">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:card-recive-linear"></iconify-icon>
</div>
<div className="text-left">
<span className="block text-white font-medium">Receive</span>
<span className="text-xs text-slate-500">View QR Code</span>
</div>
</div>
<iconify-icon className="text-slate-500 group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 glass rounded-3xl p-8 min-h-[400px]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white">Assets</h3>
<div className="text-xs text-slate-500 px-2 py-1 rounded border border-white/5">Real Data</div>
</div>
<div className="space-y-2" id="asset-list">

<div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-lg" icon="logos:ethereum"></iconify-icon>
</div>
<div>
<div className="text-white font-medium">Native Token</div>
<div className="text-xs text-slate-500" id="asset-name">Ethereum</div>
</div>
</div>
<div className="text-right">
<div className="text-white font-medium" id="asset-balance">0.00</div>
<div className="text-xs text-slate-500" id="asset-fiat">$0.00</div>
</div>
</div>

<div className="mt-4 p-4 rounded-xl border border-dashed border-white/10 text-center">
<p className="text-xs text-slate-500">
                                Aura Strike connects directly to the blockchain RPC via WalletConnect.
                                <br/>To view ERC-20 tokens, use the 'Import Token' feature (Coming Soon).
                            </p>
</div>
</div>
</div>

<div className="glass rounded-3xl p-8 min-h-[400px]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-white">Recent Activity</h3>
<iconify-icon className="text-slate-400" icon="solar:history-linear"></iconify-icon>
</div>
<div className="relative pl-4 border-l border-white/10 space-y-8" id="tx-history">
<div className="py-8 text-center">
<iconify-icon className="text-3xl text-slate-600 mb-2" icon="solar:ghost-smile-linear"></iconify-icon>
<p className="text-sm text-slate-500">No recent transactions found in current session.</p>
<p className="text-[10px] text-slate-600 mt-2">Connect Etherscan API to fetch historical data.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020408] relative z-10 py-10 mt-12">
<div className="max-w-4xl mx-auto px-6 text-center">
<h4 className="text-white font-medium mb-4">Terms &amp; Conditions</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                Aura Strike is a non-custodial Web3 interface utilizing WalletConnect. We do not store private keys, seed phrases, or personal data. 
                Users retain full control of their assets at all times. All transactions are executed directly on the blockchain 
                via your connected wallet app.
            </p>
<div className="flex justify-center gap-4 opacity-50">
<iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:ethereum"></iconify-icon>
<iconify-icon className="text-white" icon="simple-icons:walletconnect"></iconify-icon>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm hidden flex items-center justify-center p-4" id="send-modal">
<div className="glass w-full max-w-lg rounded-3xl p-8 transform scale-95 opacity-0 transition-all duration-300" id="send-modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-white">Send Transaction</h3>
<button className="text-slate-500 hover:text-white" onclick="closeModal('send-modal')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<form className="space-y-5" onsubmit="handleSend(event)">

<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Recipient Address</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm placeholder:text-slate-700" id="send-to" pattern="^0x[a-fA-F0-9]{40}$" placeholder="0x..." required="" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Amount</label>
<div className="relative">
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 transition-colors font-mono text-lg" id="send-amount" min="0" placeholder="0.00" required="" step="0.000000000000000001" type="number"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm font-medium" id="send-symbol">ETH</span>
</div>
</div>

<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<div className="flex justify-between items-center text-xs mb-1">
<span className="text-slate-400">Estimated Gas</span>
<span className="text-cyan-400 font-mono" id="gas-estimate">Calculating...</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-400">Data Source</span>
<span className="text-slate-500">WalletConnect RPC</span>
</div>
</div>
<button className="w-full py-4 mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-medium shadow-lg hover:shadow-cyan-500/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2" id="send-btn" type="submit">
<span>Confirm on Mobile Device</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm hidden flex items-center justify-center p-4" id="receive-modal">
<div className="glass w-full max-w-sm rounded-3xl p-8 transform scale-95 opacity-0 transition-all duration-300" id="receive-modal-content">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-white">Receive Assets</h3>
<button className="text-slate-500 hover:text-white" onclick="closeModal('receive-modal')"><iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon></button>
</div>
<div className="flex flex-col items-center">
<div className="relative p-2 bg-white rounded-xl overflow-hidden mb-6 group">

<img alt="QR Code" className="w-48 h-48 object-contain" id="qr-code-img" src=""/>
<div className="absolute inset-0 scan-overlay pointer-events-none"></div>
</div>
<p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Your Address</p>
<div className="w-full bg-black/40 border border-white/10 rounded-xl p-3 flex items-center justify-between cursor-pointer hover:border-cyan-500/50 group transition-all" onclick="copyAddress()">
<span className="text-xs font-mono text-slate-300 truncate mr-2" id="receive-address">0x...</span>
<iconify-icon className="text-slate-500 group-hover:text-cyan-400" icon="solar:copy-linear"></iconify-icon>
</div>
<p className="mt-6 text-[10px] text-center text-slate-500 leading-tight">
                    Send only native coins (ETH/BNB/MATIC) or standard ERC-20 tokens to this address.
                </p>
</div>
</div>
</div>

<div className="fixed top-24 right-6 z-[110] glass bg-[#020408] rounded-xl p-4 flex items-center gap-3 border-l-4 border-cyan-500 shadow-2xl min-w-[300px]" id="toast">
<div className="text-cyan-400 text-xl flex shrink-0" id="toast-icon">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-white" id="toast-title">Notification</h5>
<p className="text-xs text-slate-400" id="toast-msg">Message content here</p>
</div>
</div>





    </>
  );
}
