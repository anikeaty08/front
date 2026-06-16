import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
violet: {
500: '#8b5cf6',
550: '#7c3aed',
900: '#4c1d95',
},
cyan: {
400: '#22d3ee',
500: '#06b6d4',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 1s linear 2 normal forwards',
'clip-reveal': 'clipReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
'sonar': 'sonar 3s linear infinite',
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
'spin-reverse': 'spin 15s linear infinite reverse',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0.4' },
'50%': { opacity: '0.8' },
'100%': { opacity: '1' },
},
clipReveal: {
'0%': { clipPath: 'inset(0 100% 0 0)' },
'100%': { clipPath: 'inset(0 0 0 0)' },
},
sonar: {
'0%': { transform: 'scale(0.8)', opacity: '0.3' },
'100%': { transform: 'scale(2.5)', opacity: '0' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // --- Configuration & State ---
        const cards = document.querySelectorAll('.feature-card');
        const indicators = document.querySelectorAll('.nav-indicator');
        const titles = ["The decentralized web.", "Scale without limits.", "Mathematical trust."];
        const descriptions = [
            "Infrastructure for the next generation of the internet. Ship smart contracts, scale RPC nodes, and verify data on-chain.",
            "Spin up dedicated nodes across 14 regions. Experience sub-millisecond latency for your dApps.",
            "Implement Zero-Knowledge proofs effortlessly. Ensure privacy and scalability with our rollup-as-a-service."
        ];
        
        let currentIndex = 0;
        let isAnimating = false;

        // --- Text Animation Helper ---
        function animateText(elementId, text) {
            const el = document.getElementById(elementId);
            el.innerHTML = '';
            [...text].forEach((char, i) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.className = 'char-slide';
                if(i > 10 && i < 20) span.classList.add('text-gradient');
                span.style.animationDelay = `${i * 0.02}s`; 
                el.appendChild(span);
            });
        }

        // --- Card Switching Logic ---
        function updateUI(index) {
            // Update Indicators
            indicators.forEach((ind, i) => {
                const line = ind.querySelector('div');
                const text = ind.querySelector('span:last-child');
                
                if(i === index) {
                    ind.classList.replace('text-neutral-600', 'text-violet-400');
                    line.classList.replace('bg-neutral-800', 'bg-violet-500');
                    line.classList.add('w-12', 'shadow-[0_0_8px_rgba(139,92,246,0.5)]');
                    line.classList.remove('w-4');
                    text.classList.replace('text-neutral-500', 'text-neutral-200');
                } else {
                    ind.classList.replace('text-violet-400', 'text-neutral-600');
                    line.classList.replace('bg-violet-500', 'bg-neutral-800');
                    line.classList.remove('w-12', 'shadow-[0_0_8px_rgba(139,92,246,0.5)]');
                    line.classList.add('w-4');
                    text.classList.replace('text-neutral-200', 'text-neutral-500');
                }
            });

            // Update Cards (Rotation)
            cards.forEach((card, i) => {
                card.classList.remove('opacity-0', 'pointer-events-none', 'scale-95', 'z-10', 'z-20', 'z-30', 'card-enter', 'card-exit');
                if (i === index) {
                    card.classList.add('z-30', 'card-enter');
                } else {
                    card.classList.add('opacity-0', 'pointer-events-none', 'scale-95', 'z-10', 'card-exit');
                }
            });

            // Update Text
            animateText('main-title', titles[index]);
            const descEl = document.querySelector('p.text-base');
            descEl.style.animation = 'none';
            descEl.offsetHeight; 
            descEl.textContent = descriptions[index];
            descEl.style.animation = 'fadeIn 0.5s linear forwards';
        }

        function setCard(index) {
            if (index === currentIndex || isAnimating) return;
            isAnimating = true;
            currentIndex = index;
            updateUI(currentIndex);
            setTimeout(() => isAnimating = false, 600);
        }

        function nextCard() {
            let nextIndex = (currentIndex + 1) % cards.length;
            setCard(nextIndex);
        }

        function prevCard() {
            let prevIndex = (currentIndex - 1 + cards.length) % cards.length;
            setCard(prevIndex);
        }

        document.getElementById('nextBtn').addEventListener('click', nextCard);
        document.getElementById('prevBtn').addEventListener('click', prevCard);

        // --- 3D Mouse Movement ---
        function handleMouseMove(e) {
            const container = document.querySelector('#cards-wrapper');
            const rect = container.getBoundingClientRect();
            
            // Mouse position relative to container
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Center of container
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Flashlight
            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);

            // 3D Tilt Calculation
            // Max rotation degrees
            const maxRotate = 10;
            
            // Calculate rotation based on distance from center
            // Rotate Y depends on X axis movement (left/right tilts)
            const rotateY = ((x - centerX) / centerX) * maxRotate;
            // Rotate X depends on Y axis movement (up/down tilts) - inverted
            const rotateX = -((y - centerY) / centerY) * maxRotate;

            document.documentElement.style.setProperty('--rotate-x', `${rotateX}deg`);
            document.documentElement.style.setProperty('--rotate-y', `${rotateY}deg`);
        }

        function resetCardTilt() {
            document.documentElement.style.setProperty('--rotate-x', `0deg`);
            document.documentElement.style.setProperty('--rotate-y', `0deg`);
        }

        // --- Init ---
        animateText('main-title', titles[0]);
        
        // Random block number update
        setInterval(() => {
            const el = document.getElementById('block-num');
            el.innerText = Math.floor(18294 + Math.random() * 100);
        }, 3000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none perspective-container overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:rotateX(60deg)_translateY(-20%)_scale(2)] opacity-20 origin-top"></div>
</div>

<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

<main className="relative z-10 w-full h-screen flex flex-col items-center justify-center p-6 max-w-7xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full h-full lg:h-[600px] items-center animate-clip-reveal">

<div className="col-span-1 lg:col-span-5 flex flex-col justify-between h-full py-4 relative order-2 lg:order-1 z-20">
<div className="space-y-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-md w-max shadow-sm animate-fade-in hover:border-violet-500/50 transition-colors cursor-default group">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-xs font-mono text-violet-300 tracking-tight uppercase group-hover:text-violet-200 transition-colors">Mainnet Beta</span>
<div className="h-3 w-px bg-neutral-800"></div>
<span className="text-[10px] text-neutral-500 font-mono">ETH: Block <span id="block-num">18294</span></span>
</div>

<div className="overflow-hidden min-h-[90px]">
<h1 className="text-3xl lg:text-4xl font-normal text-neutral-100 tracking-tight leading-[1.1]" id="main-title">
                            The decentralized web.
                        </h1>
</div>

<p className="text-base text-neutral-400 max-w-md font-light leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
                        Infrastructure for the next generation of the internet. Ship smart contracts, scale RPC nodes, and verify data on-chain.
                    </p>

<div className="flex gap-6 pt-4 font-mono text-xs tracking-wider">
<button className="nav-indicator group flex items-center gap-2 transition-colors text-violet-400" data-index="0" onclick="setCard(0)">
<span>01</span>
<div className="h-px w-8 bg-violet-500 transition-all group-hover:w-12 group-hover:shadow-[0_0_8px_rgba(139,92,246,0.5)]"></div>
<span className="text-neutral-200 font-sans tracking-tight">Contract</span>
</button>
<button className="nav-indicator group flex items-center gap-2 transition-colors text-neutral-600 hover:text-neutral-300" data-index="1" onclick="setCard(1)">
<span>02</span>
<div className="h-px w-4 bg-neutral-800 transition-all group-hover:bg-neutral-600 group-hover:w-8"></div>
<span className="text-neutral-500 font-sans tracking-tight group-hover:text-neutral-300">Scale</span>
</button>
<button className="nav-indicator group flex items-center gap-2 transition-colors text-neutral-600 hover:text-neutral-300" data-index="2" onclick="setCard(2)">
<span>03</span>
<div className="h-px w-4 bg-neutral-800 transition-all group-hover:bg-neutral-600 group-hover:w-8"></div>
<span className="text-neutral-500 font-sans tracking-tight group-hover:text-neutral-300">ZK-Proof</span>
</button>
</div>
</div>

<div className="flex items-center gap-4 mt-auto">
<button className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-violet-500/50 hover:-translate-x-1 active:scale-95" id="prevBtn">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="btn-beam group relative flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-200 shadow-lg hover:bg-neutral-800 transition-all overflow-hidden w-full max-w-[180px] hover:scale-105 active:scale-95" href="#">
<span className="relative z-10 bg-gradient-to-r from-violet-200 to-cyan-200 bg-clip-text text-transparent font-semibold">Connect Wallet</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1 text-violet-300" icon="lucide:wallet" width="16"></iconify-icon>
</a>
<button className="p-3 rounded-full border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 hover:bg-neutral-800/50 transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-violet-500/50 hover:translate-x-1 active:scale-95" id="nextBtn">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 relative h-[400px] lg:h-full w-full flex items-center justify-center order-1 lg:order-2 perspective-container">

<div className="relative w-full max-w-md aspect-[4/5] lg:aspect-square flex items-center justify-center flashlight-container animate-float" id="cards-wrapper" onmouseleave="resetCardTilt()" onmousemove="handleMouseMove(event)">

<div className="feature-card absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-px shadow-2xl transition-all duration-500 z-30 flashlight-border card-3d-wrapper group">
<div className="h-full w-full bg-neutral-950/80 rounded-2xl relative overflow-hidden flashlight-content flex flex-col backdrop-blur-sm" style={{transformStyle: 'preserve-3d'}}>

<div className="p-6 border-b border-neutral-800/50 flex justify-between items-center bg-neutral-900/30 z-0">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="text-[10px] font-mono text-violet-400 uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="lucide:file-code" width="12"></iconify-icon> Vault.sol
                                </div>
</div>

<div className="flex-1 p-8 flex flex-col items-center justify-center relative" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjOGI1Y2Y2IiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-30 z-0"></div>
<div className="w-full bg-neutral-900/80 border border-neutral-800 rounded-lg p-4 font-mono text-[10px] text-neutral-400 shadow-2xl relative overflow-hidden z-20-3d transition-transform group-hover:scale-105">
<div className="absolute top-0 right-0 p-2 opacity-50"><iconify-icon icon="lucide:copy" width="12"></iconify-icon></div>
<div className="text-violet-400 mb-1">contract <span className="text-yellow-200">DeFiVault</span> {</div>
<div className="pl-4 text-neutral-500">// Asset mapping</div>
<div className="pl-4">mapping(address =&gt; uint) <span className="text-cyan-400">balances</span>;</div>
<br/>
<div className="pl-4 text-violet-400">function <span className="text-yellow-200">deposit</span>() external {</div>
<div className="pl-8 text-neutral-300">balances[msg.sender] += msg.value;</div>
<div className="pl-8 text-green-400">emit Deposit(msg.sender);</div>
<div className="pl-4 text-violet-400">}</div>
<div className="text-violet-400">}</div>
</div>
<div className="mt-8 text-center relative z-30-3d">
<h3 className="text-xl font-normal text-neutral-200 tracking-tight mb-1">Smart Contracts</h3>
<p className="text-sm text-neutral-500">Deploy Solidity to any EVM chain instantly.</p>
</div>
</div>
</div>
</div>

<div className="feature-card absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-px shadow-2xl transition-all duration-500 opacity-0 pointer-events-none scale-95 z-20 flashlight-border card-3d-wrapper">
<div className="h-full w-full bg-neutral-950/80 rounded-2xl relative overflow-hidden flashlight-content flex flex-col" style={{transformStyle: 'preserve-3d'}}>
<div className="p-6 border-b border-neutral-800/50 flex justify-between items-center bg-neutral-900/30 z-0">
<div className="text-xs text-neutral-500 font-medium">Global Nodes</div>
<div className="flex items-center gap-1 text-[10px] font-mono text-green-500">
<span className="relative flex h-1.5 w-1.5 mr-1">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
                                    Connected
                                </div>
</div>
<div className="flex-1 p-8 flex flex-col items-center justify-center relative" style={{transformStyle: 'preserve-3d'}}>

<div className="relative w-40 h-40 mb-4 z-20-3d" style={{transformStyle: 'preserve-3d'}}>
<svg className="w-full h-full animate-spin-slow absolute inset-0" style={{animationDuration: '20s'}} viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="#171717" r="8" stroke="#8b5cf6" strokeWidth="2"></circle>

<g className="animate-pulse" style={{animationDuration: '3s'}}>
<circle cx="50" cy="15" fill="#06b6d4" r="4"></circle>
<line stroke="#333" stroke-dasharray="2 2" x1="50" x2="50" y1="20" y2="42"></line>
</g>
<g style={{transformOrigin: '50px 50px', transform: 'rotate(120deg)'}}>
<circle cx="50" cy="15" fill="#a78bfa" r="4"></circle>
<line stroke="#333" stroke-dasharray="2 2" x1="50" x2="50" y1="20" y2="42"></line>
</g>
<g style={{transformOrigin: '50px 50px', transform: 'rotate(240deg)'}}>
<circle cx="50" cy="15" fill="#22d3ee" r="4"></circle>
<line stroke="#333" stroke-dasharray="2 2" x1="50" x2="50" y1="20" y2="42"></line>
</g>
</svg>

<div className="absolute inset-0 border border-dashed border-neutral-700/50 rounded-full animate-spin-reverse z-0 scale-125"></div>
<div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-violet-300 z-30-3d bg-neutral-900 rounded-full w-8 h-8 m-auto shadow-lg shadow-violet-500/20">RPC</div>
</div>
<div className="z-30-3d text-center">
<h3 className="text-xl font-normal text-neutral-200 tracking-tight mb-2">Infinite Scale</h3>
<p className="text-sm text-neutral-500 text-center max-w-[200px]">Low latency RPC nodes distributed globally.</p>
</div>
</div>
</div>
</div>

<div className="feature-card absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-2xl p-px shadow-2xl transition-all duration-500 opacity-0 pointer-events-none scale-95 z-10 flashlight-border card-3d-wrapper">
<div className="h-full w-full bg-neutral-950/80 rounded-2xl relative overflow-hidden flashlight-content flex flex-col" style={{transformStyle: 'preserve-3d'}}>
<div className="p-6 border-b border-neutral-800/50 flex justify-between items-center bg-neutral-900/30 z-0">
<div className="text-xs text-neutral-500 font-medium">Zero Knowledge</div>
<iconify-icon className="text-violet-500" icon="lucide:fingerprint"></iconify-icon>
</div>
<div className="flex-1 p-8 flex flex-col items-center justify-center relative" style={{transformStyle: 'preserve-3d'}}>

<div className="cube-scene mb-8 z-20-3d">
<div className="cube">
<div className="cube-face">ZK</div>
<div className="cube-face">0x</div>
<div className="cube-face">ETH</div>
<div className="cube-face">SNARK</div>
<div className="cube-face"></div>
<div className="cube-face"></div>
</div>
</div>
<div className="z-30-3d text-center">
<h3 className="text-xl font-normal text-neutral-200 tracking-tight mb-2">Mathematical Trust</h3>
<p className="text-sm text-neutral-500 text-center max-w-[200px]">Verify computations off-chain with ZK-SNARKs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-neutral-800/50 py-4 text-center z-10">
<div className="flex justify-center items-center gap-4 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse"></span>Gas: 14 Gwei</span>
<span className="text-neutral-800">|</span>
<span>Status: Operational</span>
</div>
</div>
</main>


    </>
  );
}
