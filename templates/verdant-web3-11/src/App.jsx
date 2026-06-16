import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
dark: {
950: '#0a0a0b',
900: '#121214',
800: '#1c1c1f',
700: '#27272a',
},
verdant: {
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
glow: '#22c55e',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'blob-float': 'blobFloat 20s infinite ease-in-out',
'radar-spin': 'radarSpin 15s linear infinite',
'shimmer': 'shimmer 3s linear infinite',
},
keyframes: {
blobFloat: {
'0%, 100%': { transform: 'translate(0, 0) scale(1)' },
'33%': { transform: 'translate(30px, -40px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
},
radarSpin: {
'0%': { transform: 'rotate(0deg)' },
'100%': { transform: 'rotate(360deg)' },
},
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // 1. SCROLL REVEAL OBSERVER
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Trigger chart animations if inside the visible element
                    const charts = entry.target.querySelectorAll('.chart-line');
                    charts.forEach(chart => chart.classList.add('active'));

                    // Trigger counters if inside
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => animateCounter(counter));

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach(el => {
            observer.observe(el);
        });

        // 2. PARALLAX EFFECT
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const parallaxItems = document.querySelectorAll('.parallax-section');
            parallaxItems.forEach(item => {
                const speed = 0.05;
                item.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // 3. COUNTER ANIMATION
        function animateCounter(el) {
            const target = parseFloat(el.getAttribute('data-target'));
            const duration = 1500; // ms
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Ease out quart
                const ease = 1 - Math.pow(1 - progress, 4);
                
                const current = start + (target - start) * ease;
                
                // Format based on if it's an integer or float
                if (Number.isInteger(target)) {
                    el.innerText = Math.round(current).toLocaleString();
                } else {
                    el.innerText = current.toFixed(2);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    el.innerText = target.toLocaleString(undefined, { minimumFractionDigits: Number.isInteger(target) ? 0 : 2 });
                }
            }

            requestAnimationFrame(update);
        }

        // 4. FILE DROP INTERACTION (Micro-interaction)
        const dropZone = document.getElementById('drop-zone');
        
        dropZone.addEventListener('dragenter', (e) => {
            e.preventDefault();
            dropZone.classList.add('border-verdant-500', 'bg-verdant-500/10');
        });

        dropZone.addEventListener('dragleave', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-verdant-500', 'bg-verdant-500/10');
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('border-verdant-500', 'bg-verdant-500/10');
            // Mock upload success visual
            const originalHTML = dropZone.innerHTML;
            dropZone.innerHTML = `
                <div class="flex flex-col items-center animate-[scaleIn_0.3s_ease-out]">
                    <div class="w-12 h-12 rounded-full bg-verdant-500 flex items-center justify-center mb-2 shadow-lg shadow-verdant-500/30">
                        <i data-lucide="check" class="text-white w-6 h-6 stroke-[3]"></i>
                    </div>
                    <p class="text-white font-medium">Assets Encrypted</p>
                </div>
            `;
            lucide.createIcons();
            setTimeout(() => {
                dropZone.innerHTML = originalHTML;
                lucide.createIcons();
            }, 2000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">

<div className="absolute inset-0 noise-overlay opacity-[0.03]"></div>

<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-verdant-900/10 rounded-full blur-[100px] animate-blob-float mix-blend-screen opacity-40"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px] animate-blob-float mix-blend-screen opacity-30" style={{animationDelay: '-5s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(34,197,94,0.03)_360deg)] rounded-full animate-radar-spin opacity-50 blur-3xl"></div>
</div>

<nav className="fixed top-0 z-50 w-full glass-dark border-b border-white/5 nav-enter">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-10">
<a className="flex items-center gap-2.5 group" href="#">
<div className="w-7 h-7 bg-gradient-to-br from-verdant-600 to-emerald-800 rounded-md flex items-center justify-center text-white shadow-lg shadow-verdant-500/10 group-hover:shadow-verdant-500/20 transition-all duration-300 border border-white/10">
<span className="font-bold text-xs tracking-tighter">V</span>
</div>
<span className="font-bold text-sm tracking-tight text-white/90">VERDANT</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#">Protocol</a>
<a className="text-[13px] font-medium text-white" href="#">Assets</a>
<a className="text-[13px] font-medium text-zinc-400 hover:text-white transition-colors duration-300" href="#">Governance</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/5 rounded-full backdrop-blur-sm">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verdant-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-verdant-500"></span>
</div>
<span className="text-[11px] font-medium text-zinc-400 tracking-tight font-mono">MAINNET</span>
</div>
<button className="px-4 py-1.5 text-xs font-semibold text-dark-950 bg-white hover:bg-zinc-200 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    Connect Wallet
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col items-center pt-32 pb-20 px-4 w-full max-w-6xl mx-auto relative z-10">

<div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">

<div className="reveal-item mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-verdant-500/5 border border-verdant-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
<span className="text-[10px] font-bold text-verdant-400 uppercase tracking-wider">V 2.0 Live</span>
<span className="w-px h-2.5 bg-verdant-500/20"></span>
<span className="text-[10px] text-verdant-200/70">Eco-friendly consensus layer</span>
</div>
<h1 className="reveal-item delay-1 text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                Sustainable asset <br/>
<span className="accent-gradient relative inline-block">
                    management
                    <span className="absolute inset-0 bg-verdant-400/20 blur-2xl -z-10"></span>
</span> protocol.
            </h1>
<p className="reveal-item delay-2 text-[15px] leading-relaxed text-zinc-400 max-w-lg mx-auto mb-10">
                Secure, decentralized storage for high-value creative assets. Powered by carbon-neutral infrastructure and instant finality.
            </p>
<div className="reveal-item delay-3 flex items-center gap-4">
<button className="btn-premium px-6 py-2.5 bg-verdant-600 text-white rounded-lg text-sm font-medium border border-verdant-500 shadow-[0_4px_20px_rgba(22,163,74,0.2)]">
                    Start Uploading
                </button>
<button className="btn-premium px-6 py-2.5 bg-white/5 text-zinc-200 hover:text-white rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 backdrop-blur-sm">
                    View Documentation
                </button>
</div>
</div>

<div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 border-y border-white/5 py-8 bg-white/[0.01]">
<div className="reveal-item delay-4 flex flex-col items-center justify-center gap-1 border-r border-white/5 last:border-0">
<span className="text-2xl font-bold text-white font-mono tracking-tight counter" data-target="842">0</span>
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">Active Nodes</span>
</div>
<div className="reveal-item delay-4 flex flex-col items-center justify-center gap-1 border-r border-white/5 last:border-0">
<div className="flex items-baseline gap-0.5">
<span className="text-2xl font-bold text-white font-mono tracking-tight counter" data-target="12.4">0</span>
<span className="text-sm font-bold text-zinc-600">TB</span>
</div>
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">Stored Data</span>
</div>
<div className="reveal-item delay-5 flex flex-col items-center justify-center gap-1 border-r border-white/5 last:border-0">
<span className="text-2xl font-bold text-verdant-400 font-mono tracking-tight">$<span className="counter" data-target="0.04">0</span></span>
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">Cost / GB</span>
</div>
<div className="reveal-item delay-5 flex flex-col items-center justify-center gap-1 border-r border-white/5 last:border-0">
<div className="flex items-center gap-1.5 text-verdant-500">
<i className="w-3.5 h-3.5 fill-current" data-lucide="leaf"></i>
<span className="text-2xl font-bold font-mono tracking-tight">Zero</span>
</div>
<span className="text-[11px] font-medium text-zinc-500 uppercase tracking-widest">Carbon Footprint</span>
</div>
</div>

<div className="w-full max-w-4xl relative group parallax-section">
<div className="absolute inset-0 bg-verdant-500/10 blur-[80px] -z-10 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="reveal-item glass-dark rounded-2xl p-1 border border-white/10 shadow-2xl relative overflow-hidden">

<div className="bg-dark-900/80 rounded-xl p-6 md:p-8 border border-white/5">

<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-semibold text-white">Asset Vault</h3>
<p className="text-xs text-zinc-500">Mainnet • Connected</p>
</div>
<div className="flex gap-3">

<div className="flex items-center gap-3 bg-dark-800 px-3 py-1.5 rounded-full border border-white/10">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider">Public</span>
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border border-transparent appearance-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] top-0 left-0 shadow-sm z-10" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-700 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
<span className="text-[10px] font-semibold text-verdant-400 uppercase tracking-wider">Encrypted</span>
</div>
</div>
</div>

<div className="relative border border-dashed border-white/10 hover:border-verdant-500/50 hover:bg-verdant-500/5 rounded-xl p-12 transition-all duration-300 cursor-pointer group/zone mb-8" id="drop-zone">
<input className="hidden" id="file-upload" type="file"/>
<div className="flex flex-col items-center justify-center gap-4 pointer-events-none">
<div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover/zone:scale-110 group-hover/zone:border-verdant-500/30 transition-all duration-300 shadow-lg">
<i className="w-5 h-5 text-zinc-400 group-hover/zone:text-verdant-400 transition-colors" data-lucide="upload-cloud"></i>
</div>
<div className="text-center">
<p className="text-sm font-medium text-zinc-300 group-hover/zone:text-white transition-colors">Drag assets here or click to sign</p>
<p className="text-xs text-zinc-600 mt-1 font-mono">IPFS • ARWEAVE • FILECOIN</p>
</div>
</div>
</div>

<div className="space-y-3">
<h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Recent Blocks</h4>

<div className="card-interaction flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="Asset" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">abstract_render_v4.png</p>
<p className="text-[10px] text-zinc-500 font-mono">Hash: 0x8a...2b9</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block w-24 h-8">
<svg className="w-full h-full chart-line" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,15 Q25,25 50,10 T100,20" fill="none" stroke="#4ade80" stroke-opacity="0.5" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs font-mono text-verdant-400">Confirmed</span>
</div>
</div>

<div className="card-interaction flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-md bg-zinc-800 border border-white/10 flex items-center justify-center overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
</div>
<div>
<p className="text-sm font-medium text-zinc-200">contract_v1.sol</p>
<p className="text-[10px] text-zinc-500 font-mono">Hash: 0x3f...9c1</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block w-24 h-8">
<svg className="w-full h-full chart-line delay-2" preserveaspectratio="none" viewbox="0 0 100 30">
<path d="M0,20 Q25,5 50,25 T100,10" fill="none" stroke="#60a5fa" stroke-opacity="0.5" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs font-mono text-blue-400">Validating</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-24">

<div className="reveal-item card-interaction glass-dark p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 rounded-lg bg-verdant-500/10 border border-verdant-500/20 flex items-center justify-center mb-4 icon-pulse">
<i className="w-5 h-5 text-verdant-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Immutable Security</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Assets are encrypted and distributed across decentralized nodes using SHA-256 hashing.</p>
</div>

<div className="reveal-item delay-1 card-interaction glass-dark p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 icon-pulse">
<i className="w-5 h-5 text-blue-400" data-lucide="zap"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Instant Finality</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Lightning fast upload and retrieval speeds via our optimized L2 scaling solution.</p>
</div>

<div className="reveal-item delay-2 card-interaction glass-dark p-6 rounded-xl border border-white/5">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 icon-pulse">
<i className="w-5 h-5 text-orange-400" data-lucide="coins"></i>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Yield Generating</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Earn staking rewards on your idle storage capacity. Automagical compounding.</p>
</div>
</div>
</main>

<footer className="mt-auto border-t border-white/5 bg-dark-900/50 backdrop-blur-md">

<div className="w-full overflow-hidden border-b border-white/5 py-2">
<div className="flex whitespace-nowrap animate-[shimmer_20s_linear_infinite] w-full">

<div className="flex items-center gap-12 text-[10px] font-mono text-zinc-600 uppercase tracking-widest px-4">
<span>ETH: <span className="text-verdant-500">$3,240.12</span></span>
<span>GAS: <span className="text-blue-400">12 Gwei</span></span>
<span>VRD: <span className="text-verdant-500">$0.85</span> (+4.2%)</span>
<span>BLOCK: #1829301</span>
<span className="opacity-30">|</span>
<span>System Status: <span className="text-verdant-500">Operational</span></span>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500 font-medium">© 2024 Verdant Protocol. <span className="hidden sm:inline text-zinc-600">Decentralized Asset Management.</span></p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Audit</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Whitepaper</a>
<div className="flex items-center gap-1.5 px-2 py-1 bg-verdant-500/10 rounded text-[10px] text-verdant-400 border border-verdant-500/20">
<div className="w-1 h-1 rounded-full bg-verdant-500 animate-pulse"></div>
                    100% Uptime
                </div>
</div>
</div>
</footer>


    </>
  );
}
