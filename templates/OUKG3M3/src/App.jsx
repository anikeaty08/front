import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', function() {
  lucide.createIcons();

  const cryptoSelect = document.getElementById('cryptocurrency');
  const networkSelect = document.getElementById('network');
  const addressDisplay = document.getElementById('addressDisplay');
  const copyButton = document.getElementById('copyAddress');
  const qrSection = document.getElementById('qrSection');

  const cryptoData = {
    usdc: {
      networks: {
        ethereum: 'Ethereum (ERC-20) - $2.50 fee',
        polygon: 'Polygon - $0.10 fee',
        solana: 'Solana - $0.01 fee',
        avalanche: 'Avalanche C-Chain - $0.25 fee'
      },
      addresses: {
        ethereum: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        polygon: '0x9cB16Aa60B6bA56c6259C2f8cBe5E508a6E1D9F9',
        solana: '8QheXw4EJe73J2xfrekU6Y1dQ8YydgVGuYZzA6RTRymJ',
        avalanche: '0x4b7A3EF1a1d573F7A9f4A03E8BEfb72e0C9CeB3F'
      }
    },
    usdt: {
      networks: {
        ethereum: 'Ethereum (ERC-20) - $3.00 fee',
        tron: 'TRON (TRC-20) - $1.00 fee',
        polygon: 'Polygon - $0.10 fee',
        bsc: 'BNB Smart Chain - $0.20 fee'
      },
      addresses: {
        ethereum: '0x12eB8E48aBc6D0D5D0F3cE5Df6Ef24c4E5c4EDd4',
        tron: 'TE1xj2GQZKPgJQoS3o71x7AQn2p3gnEtpV',
        polygon: '0x7CeB23fD6bC0aA44be639d55b720538993B0A1Ae',
        bsc: '0x892d35Cc7634C0532925a3b844Bc454e4438f99x'
      }
    },
    btc: {
      networks: {
        bitcoin: 'Bitcoin Network - $1.50 fee',
        lightning: 'Lightning Network - $0.01 fee'
      },
      addresses: {
        bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        lightning: 'lnbc290u1p3xnhl2pp5qvzz54xvtm6xr8rz6v0hs6c8h7kqm8xc5'
      }
    },
    eth: {
      networks: {
        ethereum: 'Ethereum Network - $2.00 fee',
        arbitrum: 'Arbitrum One - $0.50 fee',
        optimism: 'Optimism - $0.30 fee'
      },
      addresses: {
        ethereum: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
        arbitrum: '0x5f7A3EF1a1d573F7A9f4A03E8BEfb72e0C9CeB8G',
        optimism: '0x8aB16Aa60B6bA56c6259C2f8cBe5E508a6E1D5H'
      }
    },
    bnb: {
      networks: {
        bsc: 'BNB Smart Chain - $0.15 fee',
        beacon: 'BNB Beacon Chain - $0.10 fee'
      },
      addresses: {
        bsc: '0x5f7A3EF1a1d573F7A9f4A03E8BEfb72e0C9CeB8G',
        beacon: 'bnb1grpf0955h0ykzq3ar5nmum7y6gdfl6lxfn46h2'
      }
    },
    sol: {
      networks: {
        solana: 'Solana Network - $0.01 fee'
      },
      addresses: {
        solana: '8QheXw4EJe73J2xfrekU6Y1dQ8YydgVGuYZzA6RTRymJ'
      }
    }
  };

  cryptoSelect.addEventListener('change', function() {
    const selectedCrypto = this.value;
    networkSelect.innerHTML = '<option value="" selected>Select network</option>';
    
    if (cryptoData[selectedCrypto]) {
      Object.entries(cryptoData[selectedCrypto].networks).forEach(([key, label]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = label;
        networkSelect.appendChild(option);
      });
      
      networkSelect.disabled = false;
      networkSelect.classList.remove('cursor-not-allowed', 'bg-gray-800/30', 'text-gray-500');
      networkSelect.classList.add('cursor-pointer', 'bg-gray-800/50', 'text-white', 'hover:bg-gray-800/70');
    }
    
    resetAddressDisplay();
  });

  networkSelect.addEventListener('change', function() {
    const selectedCrypto = cryptoSelect.value;
    const selectedNetwork = this.value;
    
    if (cryptoData[selectedCrypto] && cryptoData[selectedCrypto].addresses[selectedNetwork]) {
      const address = cryptoData[selectedCrypto].addresses[selectedNetwork];
      showAddress(address);
      showQRSection();
    } else {
      resetAddressDisplay();
      hideQRSection();
    }
  });

  function showAddress(address) {
    addressDisplay.textContent = address;
    addressDisplay.classList.add('has-address');
    copyButton.classList.remove('opacity-0', 'pointer-events-none');
    copyButton.classList.add('opacity-100');
  }

  function resetAddressDisplay() {
    addressDisplay.innerHTML = `
      <div class="flex items-center space-x-2">
        <i data-lucide="info" class="w-4 h-4"></i>
        <span>Your deposit address will appear here after selecting cryptocurrency and network</span>
      </div>
    `;
    addressDisplay.classList.remove('has-address');
    copyButton.classList.add('opacity-0', 'pointer-events-none');
    copyButton.classList.remove('opacity-100');
    lucide.createIcons();
    hideQRSection();
  }

  function showQRSection() {
    qrSection.classList.remove('hidden');
    setTimeout(() => {
      qrSection.style.animation = 'fadeInUp 0.6s ease-out forwards';
    }, 100);
  }

  function hideQRSection() {
    qrSection.classList.add('hidden');
    qrSection.style.animation = '';
  }

  copyButton.addEventListener('click', function() {
    const address = addressDisplay.textContent;
    navigator.clipboard.writeText(address).then(() => {
      const originalIcon = copyButton.innerHTML;
      copyButton.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i>';
      lucide.createIcons();
      setTimeout(() => {
        copyButton.innerHTML = originalIcon;
        lucide.createIcons();
      }, 2000);
    });
  });

  document.getElementById('closeBtn').addEventListener('click', () => {
    if (window.opener) window.close();
  });

  document.getElementById('cancelOrder').addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel this activation order?')) {
      if (window.opener) window.close();
    }
  });

  document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const crypto = cryptoSelect.value;
    const network = networkSelect.value;
    
    if (!crypto || !network) {
      alert('Please select both cryptocurrency and network before confirming payment.');
      return;
    }
    
    alert(`Payment confirmed! Please send exactly $29.00 worth of ${crypto.toUpperCase()} to the provided address. Your account will be activated automatically once the transaction is confirmed.`);
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<iframe className="fixed inset-0 w-full h-screen" frameborder="0" height="100%" src="https://my.spline.design/worldplanet-inmHh7fVCul1jUFrNRYlotVU/" width="100%"></iframe>

<div className="fixed inset-0 bg-gradient-to-br via-transparent pointer-events-none from-purple-900/20 to-blue-900/20" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-0 animate-pulse" style={{animationDelay: '1.5s', animationDuration: '4s', transition: 'outline 0.1s ease-in-out'}}></div>

<div className="relative max-w-lg w-full opacity-0 transition-all duration-1000 ease-out mr-auto ml-auto translate-y-8" style={{animation: 'fadeInUp 0.8s ease-out 0.2s forwards'}}>

<div className="relative sm:p-8 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-xl bg-neutral-900/90 border-neutral-800/50" style={{transition: 'outline 0.1s ease-in-out'}}>

<div className="flex items-start justify-between mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 0.4s forwards'}}>
<div className="flex items-center space-x-4">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-r from-blue-400 to-cyan-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-shield-check w-8 h-8 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h1 className="text-2xl tracking-tight text-white font-geist font-semibold">Account Activation</h1>
<p className="text-sm mt-1 text-neutral-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>NexaPay Pro Premium</p>
</div>
</div>
<button className="transition-colors duration-200 p-2 rounded-xl hover:text-white text-neutral-400 hover:bg-neutral-800/50" id="closeBtn" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex items-center justify-between mb-6 p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: '0.6s ease-out 0.6s 1 normal forwards running fadeInUp', transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full animate-pulse bg-amber-400" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<span className="text-sm font-medium text-amber-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Pending Activation</span>
</div>
<div className="text-right">
<div className="text-2xl text-white font-geist font-semibold">$29.00</div>
<div className="text-xs text-neutral-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>One-time fee</div>
</div>
</div>

<div className="mb-8 opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 0.8s forwards'}}>
<p className="text-sm leading-relaxed text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
        Complete your account activation by making a secure payment through one of our supported cryptocurrency networks. Your premium features will be unlocked immediately upon confirmation.
      </p>
</div>

<form className="space-y-6" id="paymentForm">

<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 1s forwards'}}>
<label className="block text-sm font-medium mb-3 text-neutral-200 font-geist" htmlFor="cryptocurrency" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-coins w-4 h-4 inline mr-2" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
          Select Cryptocurrency
        </label>
<div className="relative">
<select className="w-full border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 appearance-none cursor-pointer text-white placeholder-neutral-400 bg-neutral-800/50 border-neutral-700/50 hover:bg-neutral-800/70" id="cryptocurrency" name="cryptocurrency" style={{transition: 'outline 0.1s ease-in-out'}}>
<option className="font-geist" disabled="" selected="" value="">Choose your preferred cryptocurrency</option>
<option className="font-geist" value="usdc">💰 USD Coin (USDC) - Stable &amp; Fast</option>
<option className="font-geist" value="usdt">🟡 Tether (USDT) - Most Popular</option>
<option className="font-geist" value="btc">₿ Bitcoin (BTC) - Original Crypto</option>
<option className="font-geist" value="eth">💎 Ethereum (ETH) - Smart Contracts</option>
<option className="font-geist" value="bnb">🟨 Binance Coin (BNB) - Low Fees</option>
<option className="font-geist" value="sol">🌟 Solana (SOL) - Ultra Fast</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 text-neutral-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 1.2s forwards'}}>
<label className="block text-sm font-medium mb-3 text-neutral-200 font-geist" htmlFor="network" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-network w-4 h-4 inline mr-2" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
          Select Network
        </label>
<div className="relative">
<select className="w-full border rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 appearance-none cursor-not-allowed text-neutral-500 placeholder-neutral-500 bg-neutral-800/30 border-neutral-700/30" disabled="" id="network" name="network" style={{transition: 'outline 0.1s ease-in-out'}}>
<option className="font-geist" selected="" value="">Select cryptocurrency first</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none w-5 h-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 1.4s forwards'}}>
<label className="block text-sm font-medium mb-3 text-neutral-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-wallet w-4 h-4 inline mr-2" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          Deposit Address
        </label>
<div className="relative" id="addressContainer">
<div className="w-full border rounded-xl px-4 py-6 text-center text-sm min-h-[60px] flex items-center justify-center text-neutral-500 bg-neutral-800/30 border-neutral-700/30" id="addressDisplay" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="text-left font-geist">Your deposit address will appear here after selecting cryptocurrency and network</span>
</div>
</div>
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 transition-colors duration-200 rounded-lg opacity-0 pointer-events-none hover:text-white text-neutral-400 hover:bg-neutral-700/50" id="copyAddress" style={{transition: 'outline 0.1s ease-in-out'}} type="button">
<svg className="lucide lucide-copy w-4 h-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>

<div className="hidden opacity-0 translate-y-4 transition-all duration-700 ease-out" id="qrSection">
<div className="border rounded-xl p-6 text-center bg-neutral-800/30 border-neutral-700/30" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-32 h-32 rounded-lg mx-auto mb-4 flex items-center justify-center bg-white">
<svg className="lucide lucide-qr-code w-16 h-16 text-neutral-800" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<p className="text-xs text-neutral-400 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Scan QR code to pay with mobile wallet</p>
</div>
</div>

<div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: '0.6s ease-out 1.6s 1 normal forwards running fadeInUp', transition: 'outline 0.1s ease-in-out'}}>
<div className="flex items-start space-x-3">
<svg className="lucide lucide-shield-alert w-5 h-5 mt-0.5 flex-shrink-0 text-blue-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<div className="text-sm">
<p className="font-medium mb-1 text-blue-200 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Security Notice</p>
<p className="text-xs leading-relaxed text-blue-300/80 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
              Only send the exact amount to the generated address. Payments from exchanges may be delayed. Contact support if your payment doesn't appear within 30 minutes.
            </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-4 pt-4 opacity-0 translate-y-4 transition-all duration-700 ease-out" style={{animation: 'fadeInUp 0.6s ease-out 1.8s forwards'}}>
<button className="text-sm transition-colors duration-200 px-4 py-2 rounded-lg flex items-center space-x-2 hover:text-white text-neutral-400 hover:bg-neutral-800/50" id="cancelOrder" style={{transition: 'outline 0.1s ease-in-out'}} type="button">
<svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="font-geist">Cancel Order</span>
</button>
<button className="font-medium px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 min-w-[160px] justify-center bg-gradient-to-tr to-blue-500 hover:from-purple-700 hover:to-blue-700 text-white from-teal-400" style={{transition: 'outline 0.1s ease-in-out'}} type="submit">
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-geist">Confirm Payment</span>
</button>
</div>
</form>

<div className="mt-8 pt-6 border-t opacity-0 translate-y-4 transition-all duration-700 ease-out border-neutral-800/50" style={{animation: '0.6s ease-out 2s 1 normal forwards running fadeInUp', transition: 'outline 0.1s ease-in-out'}}>
<div className="text-center">
<p className="text-xs mb-3 text-neutral-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Need help? Our support team is available 24/7</p>
<div className="flex items-center justify-center space-x-6">
<button className="flex items-center space-x-2 text-xs transition-colors duration-200 hover:text-white text-neutral-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="font-geist">Live Chat</span>
</button>
<button className="flex items-center space-x-2 text-xs transition-colors duration-200 hover:text-white text-neutral-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist">Email Support</span>
</button>
<button className="flex items-center space-x-2 text-xs transition-colors duration-200 hover:text-white text-neutral-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-geist">Call Us</span>
</button>
</div>
</div>
</div>
</div>
</div>
<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

select option {
  background-color: #1f2937;
  color: white;
  padding: 8px;
}

#addressDisplay.has-address {
  background-color: rgba(34, 197, 94, 0.1);
  border-color: rgba(34, 197, 94, 0.3);
  color: #22c55e;
  font-family: monospace;
  font-size: 13px;
  word-break: break-all;
  text-align: left;
  padding: 16px;
}
</style>


    </>
  );
}
