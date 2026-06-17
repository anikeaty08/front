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



        // CONFIGURATION
        const CONFIG = {
            projectId: 'd1f49b9809298cb08945f254e7a972ac',
            relayUrl: 'wss://relay.walletconnect.com',
            mainnetRPC: 'https://eth-mainnet.public.blastapi.io' // Fallback RPC for WC
        };

        let web3Modal;
        let provider;
        let ethersProvider;

        // Initialize Web3Modal
        function initWeb3Modal() {
            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider, // required
                    options: {
                        rpc: {
                            1: CONFIG.mainnetRPC
                        },
                        projectId: CONFIG.projectId,
                        relayUrl: CONFIG.relayUrl,
                        qrcodeModalOptions: {
                            mobileLinks: [
                                "rainbow",
                                "metamask",
                                "argent",
                                "trust",
                                "imtoken",
                                "pillar",
                            ],
                        },
                    }
                }
            };

            web3Modal = new Web3Modal.default({
                cacheProvider: false,
                theme: "dark",
                providerOptions
            });
        }

        // Connect Wallet Function
        async function connectWallet() {
            if (!web3Modal) initWeb3Modal();
            const btnText = document.getElementById('btnText');
            btnText.innerText = "Connecting...";

            try {
                // Open Modal
                provider = await web3Modal.connect();
                ethersProvider = new ethers.providers.Web3Provider(provider);

                // Get Signer & Address
                const signer = ethersProvider.getSigner();
                const address = await signer.getAddress();
                
                updateUI(address);
                setupEvents();

            } catch (error) {
                console.error("Connection Error:", error);
                btnText.innerText = "Connect Wallet";
                if(error.message) alert("Connection Failed: " + error.message);
            }
        }

        async function updateUI(account) {
            try {
                // Fetch Data
                const balance = await ethersProvider.getBalance(account);
                const ethBalance = ethers.utils.formatEther(balance);
                const network = await ethersProvider.getNetwork();
                const gasPrice = await ethersProvider.getGasPrice();
                const blockNumber = await ethersProvider.getBlockNumber();

                // UI Transitions
                document.getElementById('landingSection').classList.add('hidden-force');
                document.getElementById('features').classList.add('hidden-force');
                document.getElementById('navLinks').classList.add('hidden-force');
                
                const appInterface = document.getElementById('appInterface');
                appInterface.classList.remove('hidden-force');
                appInterface.classList.add('animate-fade-in');

                // Update DOM Elements
                document.getElementById('mainBalance').innerText = parseFloat(ethBalance).toFixed(4);
                document.getElementById('sidebarAddress').innerText = account;
                document.getElementById('gasPrice').innerText = parseFloat(ethers.utils.formatUnits(gasPrice, 'gwei')).toFixed(2) + " Gwei";
                document.getElementById('blockNumber').innerText = blockNumber;
                
                // Identify Provider Type
                const isMetaMask = provider.isMetaMask ? "MetaMask" : "WalletConnect/Other";
                document.getElementById('providerType').innerHTML = `
                    <span class="w-2 h-2 rounded-full bg-cyan-500"></span> ${isMetaMask}
                `;

                // Update Nav Button
                const btn = document.getElementById('navConnectBtn');
                btn.classList.remove('bg-white/5');
                btn.classList.add('bg-blue-600/10', 'border-blue-500/50', 'text-blue-400');
                btn.onclick = null; // Disable click once connected or change to modal
                btn.innerHTML = `
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span class="font-mono">${account.substring(0, 6)}...${account.substring(38)}</span>
                `;

            } catch(e) {
                console.error("UI Update Error", e);
            }
        }

        async function disconnectWallet() {
            if (web3Modal) web3Modal.clearCachedProvider();
            if (provider?.disconnect && typeof provider.disconnect === 'function') {
                await provider.disconnect();
            }
            location.reload();
        }

        function setupEvents() {
            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                if(accounts.length === 0) location.reload();
                else updateUI(accounts[0]);
            });

            // Subscribe to chainId change
            provider.on("chainChanged", (chainId) => {
                location.reload();
            });
        }

        // Initialize on Load
        window.addEventListener('load', () => {
            initWeb3Modal();
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40%] h-[40%] bg-blue-900/20 rounded-full orb-glow"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30%] h-[30%] bg-purple-900/20 rounded-full orb-glow" style={{animationDelay: '-2s'}}></div>
</div>

<nav className="fixed w-full z-40 top-0 border-b border-white/5 backdrop-blur-xl bg-[#030406]/70 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group" onclick="location.reload()">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-white">AURA STRIKE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400" id="navLinks">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#security">Security</a>
</div>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium py-2 px-4 rounded-full transition-all flex items-center gap-2 backdrop-blur-sm" id="navConnectBtn" onclick="connectWallet()">
<iconify-icon icon="solar:wallet-linear" width="16"></iconify-icon>
<span id="btnText">Connect Wallet</span>
</button>
</div>
</nav>

<main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4" id="landingSection">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-600/10 rounded-full blur-3xl -z-10 animate-float"></div>
<div className="space-y-6 max-w-4xl mx-auto z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cyan-400 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                V2.0 Mainnet Live
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-tight">
                Strike the Blockchain <br/>
<span className="text-gradient">With Confidence</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Connect your wallet to access the next-generation non-custodial interface. 
                Experience real-time analytics and secure transactions via WalletConnect.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
<button className="shimmer-btn text-white font-medium py-3 px-8 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-1 flex items-center gap-2" onclick="connectWallet()">
                    Connect Wallet
                    <iconify-icon icon="solar:wallet-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</main>

<section className="hidden-force pt-24 px-4 pb-12 min-h-screen" id="appInterface">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

<div className="hidden lg:block lg:col-span-1">
<div className="glass-panel rounded-2xl p-4 h-full min-h-[500px] flex flex-col">
<div className="space-y-1">
<button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-600/10 text-blue-400 rounded-xl border border-blue-500/20 transition-all">
<iconify-icon icon="solar:wallet-2-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Assets</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
<iconify-icon icon="solar:transfer-horizontal-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Transactions</span>
</button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</button>
</div>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-blue-500/20">
                                    ME
                                </div>
<div className="overflow-hidden">
<p className="text-sm text-white font-medium truncate w-32" id="sidebarAddress">0x00...0000</p>
<p className="text-xs text-green-400 flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Connected
                                    </p>
</div>
</div>
<button className="mt-4 w-full text-xs text-red-400 hover:text-red-300 py-2 border border-red-500/10 hover:bg-red-500/10 rounded-lg transition-colors" onclick="disconnectWallet()">
                                Disconnect
                            </button>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-3 space-y-6">

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 text-white">
<iconify-icon icon="solar:wallet-money-linear" width="120"></iconify-icon>
</div>
<h2 className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">Total Balance</h2>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold text-white tracking-tight" id="mainBalance">0.0000</span>
<span className="text-xl text-slate-400 font-medium">ETH</span>
</div>
<div className="flex gap-3">
<button className="bg-white text-black hover:bg-slate-200 px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon> Send
                            </button>
<button className="bg-white/5 text-white border border-white/10 hover:bg-white/10 px-6 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:qr-code-linear" width="18"></iconify-icon> Receive
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:graph-up-linear"></iconify-icon>
                                Network Info
                            </h3>
<div className="space-y-4">
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-slate-400 text-sm">Provider</span>
<span className="text-white text-sm font-medium flex items-center gap-2" id="providerType">
                                        Detecting...
                                    </span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-slate-400 text-sm">Gas Price</span>
<span className="text-white text-sm font-medium" id="gasPrice">Fetching...</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-slate-400 text-sm">Block Number</span>
<span className="text-white text-sm font-medium" id="blockNumber">Fetching...</span>
</div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-white font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:shield-check-linear"></iconify-icon>
                                Security Status
                            </h3>
<div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-start gap-3">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<p className="text-white text-sm font-medium">Session Secured</p>
<p className="text-slate-400 text-xs mt-1">Connection established via Web3 Standard. Encrypted via TLS.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5" id="features">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Why Aura Strike?</h2>
<p className="text-slate-400">Built for speed, security, and transparency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-cyan-900/30 text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-keyhole-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Non-Custodial</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    We never touch your funds. You maintain 100% control of your private keys.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-purple-900/30 text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Lightning Fast</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Optimized RPC endpoints ensure your transactions are broadcast immediately.
                </p>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-colors">
<div className="w-12 h-12 rounded-lg bg-blue-900/30 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-scan-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Verified Source</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                    Our interface code is open source and verifiable. Trust through transparency.
                </p>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020203] py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-80">
<iconify-icon className="text-cyan-500" icon="solar:bolt-linear"></iconify-icon>
<span className="font-semibold tracking-tight text-white">AURA STRIKE</span>
</div>
<div className="text-slate-500 text-sm">
                © 2023 Aura Strike. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
