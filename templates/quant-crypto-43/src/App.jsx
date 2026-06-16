import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Scoped Canvas Background (Hero Only) ---
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        const heroSection = document.getElementById('hero-section');
        let width, height;
        let squares = [];
        const gridSize = 40;

        function resize() {
            // Resize to match the hero section container
            width = canvas.width = heroSection.offsetWidth;
            height = canvas.height = heroSection.offsetHeight;
            initSquares();
        }

        function initSquares() {
            squares = [];
            const cols = Math.ceil(width / gridSize);
            const rows = Math.ceil(height / gridSize);
            for(let i=0; i<cols; i++){
                for(let j=0; j<rows; j++){
                    if(Math.random() > 0.85) { // Fewer squares
                        squares.push({
                            x: i * gridSize,
                            y: j * gridSize,
                            alpha: Math.random() * 0.1,
                            speed: Math.random() * 0.005 + 0.002,
                            direction: 1
                        });
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw subtle fixed grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            for(let x=0; x<=width; x+=gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for(let y=0; y<=height; y+=gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Draw flickering squares
            squares.forEach(sq => {
                ctx.fillStyle = `rgba(0, 255, 148, ${sq.alpha})`;
                ctx.fillRect(sq.x + 1, sq.y + 1, gridSize - 2, gridSize - 2);

                sq.alpha += sq.speed * sq.direction;
                if(sq.alpha >= 0.1 || sq.alpha <= 0) {
                    sq.direction *= -1;
                }
            });

            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        // Initial call
        setTimeout(resize, 100); 
        draw();


        // --- 2. Dashboard Interaction Logic ---

        // Clock
        setInterval(() => {
            const now = new Date();
            document.getElementById('clock').innerText = now.toISOString().split('T')[1].split('.')[0] + " UTC";
        }, 1000);

        // Tabs
        const tabs = document.querySelectorAll('.nav-btn');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active classes
                tabs.forEach(t => {
                    t.classList.remove('text-[#00FF94]', 'border-[#00FF94]');
                    t.classList.add('text-[#666666]', 'border-transparent');
                });
                
                // Add active to clicked
                tab.classList.remove('text-[#666666]', 'border-transparent');
                tab.classList.add('text-[#00FF94]', 'border-[#00FF94]');

                // Hide all content
                contents.forEach(c => c.classList.add('hidden'));
                
                // Show target
                const target = document.getElementById(`tab-${tab.dataset.tab}`);
                target.classList.remove('hidden');
            });
        });

        // Live Log Stream
        const logContainer = document.getElementById('log-container');
        const logMessages = [
            { text: "> ALPHA_DETECTED: +0.4%", color: "text-[#00FF94]" },
            { text: "Price: 64,203.40", color: "text-[#666] opacity-50" },
            { text: "Optimizing Portfolio...", color: "text-[#EDEDED]" },
            { text: "> ALPHA_DETECTED: +0.4%", color: "text-[#00FF94]" },
            { text: "Latency: 12ms", color: "text-[#666] opacity-50" },
            { text: "> DUMP_STRATEGY_B", color: "text-[#FF5F57]" },
            { text: "Execution Complete.", color: "text-[#EDEDED]" },
        ];

        function addLog() {
            const msg = logMessages[Math.floor(Math.random() * logMessages.length)];
            const div = document.createElement('div');
            div.className = `${msg.color} font-mono text-[9px]`;
            div.innerText = msg.text;
            
            logContainer.appendChild(div);
            
            // Keep roughly 5-6 lines visible
            if(logContainer.children.length > 6) {
                logContainer.removeChild(logContainer.children[0]);
            }
        }
        
        // Initial population
        for(let i=0; i<4; i++) addLog();
        setInterval(addLog, 1500);

        // Number Animation (TVL & APY)
        const tvlEl = document.getElementById('tvl-counter');
        let tvl = 4203101;
        
        setInterval(() => {
            // Random walk
            const delta = Math.floor(Math.random() * 500) - 200;
            tvl += delta;
            tvlEl.innerText = tvl.toLocaleString();
            
            // Randomize APY slightly
            if(Math.random() > 0.7) {
                const apyEl = document.getElementById('apy-val');
                let cur = parseFloat(apyEl.innerText);
                let change = (Math.random() * 0.1) - 0.05;
                apyEl.innerText = (cur + change).toFixed(1);
            }
        }, 2000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl px-2 md:px-0">
<div className="flex items-center justify-between bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all hover:border-white/20 hover:shadow-[0_0_20px_rgba(0,255,148,0.1)]">
<div className="flex items-center gap-2 text-white tracking-tighter font-semibold text-lg cursor-pointer group">
<div className="relative">
<span className="iconify text-[#00FF94] group-hover:rotate-180 transition-transform duration-700" data-icon="lucide:sigma" data-width="20"></span>
<div className="absolute inset-0 bg-[#00FF94] blur-lg opacity-20 animate-pulse"></div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#EDEDED]">
<a className="relative group opacity-70 hover:opacity-100 transition-opacity" href="#thesis">
                    Thesis
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<a className="relative group opacity-70 hover:opacity-100 transition-opacity" href="#strategies">
                    Strategies
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
<a className="relative group opacity-70 hover:opacity-100 transition-opacity" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity"></span>
</a>
</div>
<button className="font-mono text-xs uppercase tracking-wider border border-white/20 px-4 py-2 rounded-full hover:bg-[#00FF94] hover:text-black hover:border-[#00FF94] transition-all duration-300 text-[#EDEDED] font-semibold">
                Start Engine
            </button>
</div>
</nav>

<section className="relative z-10 pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center overflow-hidden min-h-[90vh]" id="hero-section">

<canvas className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40" id="hero-canvas" style={{maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)'}}></canvas>

<div className="relative z-10 text-center mb-16 space-y-8 max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 animate-fade-in-up backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-pulse"></span>
<span className="text-[10px] font-mono text-[#00FF94] uppercase tracking-wider">V4.0 Algorithm Online</span>
<span className="w-[1px] h-3 bg-white/20 mx-1"></span>
<span className="text-[10px] font-mono text-[#666] uppercase">Latency: 4ms</span>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tighter text-[#EDEDED] leading-[0.9] select-none">
                MATH.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">NOT MOOD.</span>
</h1>
<p className="text-base md:text-lg text-[#666666] max-w-xl mx-auto font-normal leading-relaxed">
                The first algorithmic wealth engine accessible to non-institutions. We simulated the next 10 years of market volatility. You win in <span className="text-[#EDEDED] border-b border-[#00FF94]/50">9,840</span> of them.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<button className="bg-[#EDEDED] text-black font-mono text-xs md:text-sm px-8 py-3.5 uppercase tracking-wide font-semibold hover:bg-[#00FF94] transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,148,0.4)] w-full md:w-auto" onclick="document.getElementById('terminal-view').scrollIntoView({behavior: 'smooth'})">
                    Initialize Sequence
                </button>
<div className="flex items-center gap-4 w-full md:w-auto justify-center">
<span className="text-[#666666] text-xs font-mono">v4.0.2-beta</span>
<button className="text-[#666666] hover:text-[#EDEDED] font-mono text-xs md:text-sm flex items-center gap-2 transition-colors border-b border-transparent hover:border-[#EDEDED] pb-0.5">
                        DOCUMENTATION <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>

<div className="w-full relative group perspective-1000 z-10 max-w-5xl" id="terminal-view">

<div className="absolute -inset-0.5 bg-gradient-to-b from-[#00FF94]/30 to-transparent opacity-20 blur-2xl rounded-lg group-hover:opacity-40 transition-opacity duration-1000"></div>
<div className="relative w-full bg-[#000000]/90 backdrop-blur-xl border border-white/15 rounded-xl overflow-hidden flex flex-col shadow-2xl ring-1 ring-white/5">

<div className="h-10 border-b border-white/10 flex items-center px-4 bg-[#0F0F0F] justify-between select-none shrink-0">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 cursor-pointer"></div>
</div>
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default absolute left-1/2 -translate-x-1/2">
<span className="iconify text-[#00FF94]" data-icon="lucide:lock" data-width="10"></span>
<span className="font-mono text-[10px] text-[#EDEDED] tracking-wide hidden md:inline">sigma_core_v4.exe</span>
<span className="font-mono text-[10px] text-[#EDEDED] tracking-wide md:hidden">sigma_v4</span>
</div>
<div className="flex items-center gap-3">
<span className="font-mono text-[10px] text-[#666666]" id="clock">00:00:00 UTC</span>
</div>
</div>

<div className="flex flex-col md:flex-row overflow-hidden h-auto md:h-[500px]">

<div className="w-full md:w-16 h-12 md:h-full border-b md:border-b-0 md:border-r border-white/10 flex flex-row md:flex-col items-center justify-evenly md:justify-start py-0 md:py-6 gap-0 md:gap-6 bg-[#080808] z-20 shrink-0">
<button className="nav-btn active text-[#00FF94] md:border-l-2 md:border-b-0 border-b-2 border-[#00FF94] md:pl-3 md:-ml-3.5 p-3 md:p-2 transition-all w-full md:w-auto flex justify-center" data-tab="graph">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</button>
<button className="nav-btn text-[#666666] hover:text-[#EDEDED] md:border-l-2 border-transparent md:pl-3 md:-ml-3.5 p-3 md:p-2 transition-all w-full md:w-auto flex justify-center" data-tab="holdings">
<span className="iconify" data-icon="lucide:pie-chart" data-width="20"></span>
</button>
<button className="nav-btn text-[#666666] hover:text-[#EDEDED] md:border-l-2 border-transparent md:pl-3 md:-ml-3.5 p-3 md:p-2 transition-all w-full md:w-auto flex justify-center" data-tab="terminal">
<span className="iconify" data-icon="lucide:terminal-square" data-width="20"></span>
</button>
<div className="hidden md:flex flex-1"></div>
<button className="text-[#666666] hover:text-[#00FF94] transition-colors pb-4 hidden md:block animate-spin-slow">
<span className="iconify" data-icon="lucide:settings-2" data-width="20"></span>
</button>
</div>

<div className="flex-1 relative bg-[#050505] overflow-hidden flex flex-col h-[300px] md:h-full">

<div className="tab-content w-full h-full relative flex flex-col" id="tab-graph">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 z-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 800 400">
<defs>
<lineargradient id="gradientGreen" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#00FF94', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#00FF94', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M 0 350 Q 100 300, 200 330 T 400 250 T 600 150 T 800 100" fill="none" opacity="0.3" stroke="#666666" stroke-dasharray="4 4" strokeWidth="1"></path>
<path d="M 0 350 C 100 330, 200 300, 300 230 S 500 150, 800 80" fill="none" id="live-path" stroke="#00FF94" strokeWidth="2"></path>
<path d="M 0 350 C 100 330, 200 300, 300 230 S 500 150, 800 80 L 800 400 L 0 400 Z" fill="url(#gradientGreen)"></path>
<circle cx="620" cy="128" fill="#050505" id="live-dot" r="4" stroke="#00FF94" strokeWidth="2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;6;4"></animate>
</circle>
</svg>
</div>

<div className="relative z-10 p-6">
<div className="font-mono text-[10px] text-[#666666] mb-1 uppercase tracking-wider">Current Yield</div>
<div className="text-4xl md:text-5xl text-[#EDEDED] font-medium tracking-tighter flex items-baseline gap-3">
<span id="apy-val">14.2</span><span className="text-2xl">%</span>
<span className="text-[10px] text-[#00FF94] font-mono translate-y-[-4px]">+2.4% (24h)</span>
</div>
</div>

<div className="terminal-tooltip absolute top-1/2 left-[60%] -translate-y-1/2 md:translate-y-0 bg-[#0F0F0F]/95 backdrop-blur border-l-2 border-[#00FF94] px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] z-20 w-48">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 bg-[#00FF94] rounded-full animate-pulse shadow-[0_0_5px_#00FF94]"></span>
<span className="font-mono text-[9px] text-[#00FF94] uppercase tracking-wider font-bold">Optimization Active</span>
</div>
<div className="space-y-1.5 border-t border-white/10 pt-2">
<div className="flex justify-between gap-4 font-mono text-[9px] text-[#666666]">
<span>Sharpe</span>
<span className="text-[#EDEDED]">3.42</span>
</div>
<div className="flex justify-between gap-4 font-mono text-[9px] text-[#666666]">
<span>Sortino</span>
<span className="text-[#EDEDED]">4.11</span>
</div>
<div className="flex justify-between gap-4 font-mono text-[9px] text-[#666666]">
<span>Beta</span>
<span className="text-[#EDEDED]">0.02</span>
</div>
</div>
</div>
</div>

<div className="tab-content w-full h-full hidden p-6 overflow-y-auto" id="tab-holdings">
<h3 className="font-mono text-[10px] text-[#666666] uppercase tracking-wider mb-4 border-b border-white/10 pb-2 flex justify-between">
<span>Asset Allocation</span>
<span>Weights</span>
</h3>
<div className="space-y-2">

<div className="flex items-center justify-between p-3 border border-white/10 bg-white/5 rounded-sm hover:border-[#00FF94]/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-[10px]">₿</div>
<div>
<div className="text-xs font-bold text-[#EDEDED]">Bitcoin perp</div>
<div className="text-[9px] text-[#666666] font-mono">2x Leverage</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono text-[#EDEDED]">42%</div>
<div className="text-[9px] font-mono text-[#00FF94]">$42,102</div>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-white/5 bg-transparent rounded-sm hover:border-[#00FF94]/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-[10px]">Ξ</div>
<div>
<div className="text-xs font-bold text-[#EDEDED]">Ethereum Spot</div>
<div className="text-[9px] text-[#666666] font-mono">Liquid Staked</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono text-[#EDEDED]">28%</div>
<div className="text-[9px] font-mono text-[#00FF94]">$18,440</div>
</div>
</div>

<div className="flex items-center justify-between p-3 border border-white/5 bg-transparent rounded-sm hover:border-[#00FF94]/50 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 font-bold text-[10px]">$</div>
<div>
<div className="text-xs font-bold text-[#EDEDED]">USDC Vault</div>
<div className="text-[9px] text-[#666666] font-mono">Aave V3</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-mono text-[#EDEDED]">30%</div>
<div className="text-[9px] font-mono text-[#00FF94]">$102,000</div>
</div>
</div>
</div>
</div>

<div className="tab-content w-full h-full hidden bg-black p-4 font-mono text-[10px] overflow-auto" id="tab-terminal">
<div className="text-[#00FF94] mb-1">root@sigma:~$ ./init_sequence.sh</div>
<div className="text-[#EDEDED] mb-1">Loading modules...</div>
<div className="text-[#666666]">[OK] Market Data Feed</div>
<div className="text-[#666666]">[OK] Execution Engine</div>
<div className="text-[#666666]">[OK] Risk Management Layer</div>
<div className="text-[#EDEDED] mt-2 mb-1">Connecting to Dark Pools...</div>
<div className="text-[#666666]">&gt; Route 1: Connected (12ms)</div>
<div className="text-[#666666]">&gt; Route 2: Connected (8ms)</div>
<div className="mt-2">
<span className="terminal-text text-[#00FF94]">System Ready. Awaiting instructions...</span>
</div>
</div>
</div>

<div className="w-full md:w-72 border-t md:border-t-0 md:border-l border-white/10 bg-[#080808] flex flex-col font-mono text-[10px] leading-relaxed relative overflow-hidden h-40 md:h-auto shrink-0 z-20">
<div className="p-3 border-b border-white/5 text-[#666666] uppercase text-[9px] tracking-wider flex justify-between bg-[#0F0F0F]">
<span>Live Execution Log</span>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#00FF94] animate-ping"></span>
<span className="text-[8px] text-[#00FF94]">LIVE</span>
</div>
</div>
<div className="flex-1 relative overflow-hidden bg-black/50">

<div className="absolute bottom-0 w-full flex flex-col justify-end px-3 pb-3 space-y-1.5 transition-all" id="log-container">

</div>
<div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none z-10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#0F0F0F] border-y border-white/5 overflow-hidden py-2">
<div className="whitespace-nowrap animate-marquee flex gap-12 text-[10px] font-mono text-[#666]">
<span>BTC/USD <span className="text-[#00FF94]">$64,202.10</span></span>
<span>ETH/USD <span className="text-[#00FF94]">$3,420.50</span></span>
<span>SOL/USD <span className="text-[#00FF94]">$145.20</span></span>
<span>US 10Y <span className="text-white">4.20%</span></span>
<span>VIX <span className="text-[#FF5F57]">13.20</span></span>
<span>SPX <span className="text-[#00FF94]">5,102.30</span></span>

<span>BTC/USD <span className="text-[#00FF94]">$64,202.10</span></span>
<span>ETH/USD <span className="text-[#00FF94]">$3,420.50</span></span>
<span>SOL/USD <span className="text-[#00FF94]">$145.20</span></span>
</div>
<style>
            @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            .animate-marquee { animation: marquee 30s linear infinite; }
        </style>
</div>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20 border-b border-white/5">
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-0 bg-white/5 border border-white/10 rounded-lg overflow-hidden">

<div className="col-span-1 md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-white/10 bg-[#0F0F0F] hover:bg-[#141414] transition-colors group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-[#00FF94]" data-icon="lucide:arrow-up-right"></span>
</div>
<div className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold mb-8 flex items-center gap-2">
                    Performance vs Benchmark
                    <span className="px-1.5 py-0.5 rounded-sm bg-white/5 text-[9px] text-[#999]">YTD</span>
</div>
<div className="flex items-end gap-8 md:gap-16 h-40">
<div className="flex flex-col gap-3 w-20 md:w-24 group/bar">
<div className="text-xs font-mono text-[#666666] group-hover/bar:text-white transition-colors">S&amp;P 500</div>
<div className="h-16 w-full bg-[#333333] relative rounded-t-sm transition-all group-hover/bar:bg-[#444]">
<div className="absolute -top-6 left-0 font-mono text-sm text-[#666666]">1.0x</div>
</div>
</div>
<div className="flex flex-col gap-3 w-20 md:w-24 group/bar">
<div className="text-xs font-mono text-[#00FF94]">SIGMA</div>
<div className="h-40 w-full bg-[#00FF94] relative shadow-[0_0_30px_rgba(0,255,148,0.2)] rounded-t-sm animate-pulse group-hover/bar:shadow-[0_0_50px_rgba(0,255,148,0.4)] transition-all">
<div className="absolute -top-6 left-0 font-mono text-sm text-[#00FF94] font-bold">3.2x</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 flex flex-col">
<div className="flex-1 p-8 bg-[#0F0F0F] border-b border-white/10 hover:bg-[#141414] transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold">System Uptime</span>
<div className="w-1.5 h-1.5 rounded-full bg-[#00FF94] shadow-[0_0_10px_#00FF94]"></div>
</div>
<div className="font-mono text-4xl md:text-5xl text-[#EDEDED] tracking-tighter">99.99<span className="text-[#333]">9%</span></div>
<div className="mt-2 text-[10px] text-[#666] font-mono">Last outage: 420 days ago</div>
</div>
<div className="flex-1 p-8 bg-[#0F0F0F] hover:bg-[#141414] transition-colors relative overflow-hidden group">

<div className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold mb-4">Total Value Locked</div>
<div className="font-mono text-2xl md:text-3xl text-[#00FF94] tracking-tight flex">
                        $<span id="tvl-counter">4,203,101</span>
</div>
<div className="absolute bottom-0 left-0 w-full h-1 bg-[#00FF94] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-[10px] text-[#00FF94] font-mono">View Contract ↗</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col lg:flex-row gap-16 lg:gap-24" id="thesis">
<div className="lg:w-1/3 sticky top-32 h-fit">
<div className="text-[#00FF94] font-mono text-xs mb-4 flex items-center gap-2">
<span className="w-4 h-[1px] bg-[#00FF94]"></span> METHODOLOGY
            </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-[#EDEDED] mb-6">THE BLACK BOX</h2>
<p className="text-[#666666] leading-relaxed mb-8">Deterministic execution in a probabilistic world. We removed the human element to create pure financial efficiency using advanced statistical modeling.</p>
<div className="space-y-4 font-mono text-xs text-[#666]">
<div className="flex items-center gap-2">
<span className="iconify text-[#00FF94]" data-icon="lucide:cpu"></span>
<span>10,000 simulations / sec</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-[#00FF94]" data-icon="lucide:globe"></span>
<span>Global liquidity access</span>
</div>
</div>
<button className="mt-8 text-[#00FF94] font-mono text-xs border border-[#00FF94]/50 px-5 py-2.5 hover:bg-[#00FF94] hover:text-black transition-all uppercase tracking-wide">
                Read Whitepaper v1.2
            </button>
</div>
<div className="lg:w-2/3 relative pl-8 border-l border-white/10 space-y-20">

<div className="absolute top-0 left-[-1px] w-[1px] bg-gradient-to-b from-[#00FF94] to-transparent h-[50vh] sticky top-[20vh]"></div>

<div className="group relative pl-4 transition-all duration-500 hover:pl-8">
<div className="absolute left-0 top-1.5 w-2 h-2 bg-[#0F0F0F] border border-[#666] group-hover:border-[#00FF94] group-hover:bg-[#00FF94] rounded-full transition-colors z-10 -ml-[2.25rem]"></div>
<div className="text-[10px] font-mono font-bold text-[#666] group-hover:text-[#00FF94] mb-3 uppercase tracking-wider transition-colors">Phase 01</div>
<h3 className="text-2xl font-medium text-[#EDEDED] mb-3 group-hover:text-white">Mass Ingestion</h3>
<p className="text-[#666666] max-w-lg text-sm leading-relaxed group-hover:text-[#999] transition-colors">We scrape 40TB of global financial data daily. Sentiment analysis from 50k news sources, order book flows from 12 exchanges, and on-chain metrics are normalized instantly.</p>
<div className="grid grid-cols-4 gap-2 mt-6 max-w-md opacity-30 group-hover:opacity-80 transition-opacity">
<div className="h-1 bg-[#00FF94]"></div><div className="h-1 bg-[#666]"></div><div className="h-1 bg-[#666]"></div><div className="h-1 bg-[#00FF94]"></div>
</div>
</div>

<div className="group relative pl-4 transition-all duration-500 hover:pl-8">
<div className="absolute left-0 top-1.5 w-2 h-2 bg-[#0F0F0F] border border-[#666] group-hover:border-[#00FF94] group-hover:bg-[#00FF94] rounded-full transition-colors z-10 -ml-[2.25rem]"></div>
<div className="text-[10px] font-mono font-bold text-[#666] group-hover:text-[#00FF94] mb-3 uppercase tracking-wider transition-colors">Phase 02</div>
<h3 className="text-2xl font-medium text-[#EDEDED] mb-3 group-hover:text-white">Monte Carlo Simulation</h3>
<p className="text-[#666666] max-w-lg text-sm leading-relaxed group-hover:text-[#999] transition-colors">Your portfolio structure is run through 10,000 simulations per second. We identify the "Golden Path"—the statistical outlier with highest Sharpe ratio.</p>
<div className="mt-4 p-4 bg-[#0F0F0F] border border-white/5 rounded-sm font-mono text-[10px] text-[#00FF94] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 shadow-lg">
                    &gt; OPTIMIZING_WEIGHTS... [DONE]<br/>
                    &gt; HEDGE_RATIO_CALC... [0.42]<br/>
                    &gt; VARIANCE_TEST... [PASSED]
                </div>
</div>

<div className="group relative pl-4 transition-all duration-500 hover:pl-8">
<div className="absolute left-0 top-1.5 w-2 h-2 bg-[#0F0F0F] border border-[#666] group-hover:border-[#00FF94] group-hover:bg-[#00FF94] rounded-full transition-colors z-10 -ml-[2.25rem]"></div>
<div className="text-[10px] font-mono font-bold text-[#666] group-hover:text-[#00FF94] mb-3 uppercase tracking-wider transition-colors">Phase 03</div>
<h3 className="text-2xl font-medium text-[#EDEDED] mb-3 group-hover:text-white">Execution</h3>
<p className="text-[#666666] max-w-lg text-sm leading-relaxed group-hover:text-[#999] transition-colors">Orders are routed via TWAP/VWAP algorithms through dark pools to minimize slippage. No human trader touches the terminal. Zero emotion. Zero fatigue.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20 bg-[#080808]" id="strategies">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-[#EDEDED] mb-2">ACTIVE STRATEGIES</h2>
<p className="text-[#666666] text-sm">Modular vaults based on your risk tolerance.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1 text-[10px] font-mono uppercase border border-[#00FF94] text-[#00FF94] bg-[#00FF94]/10 hover:bg-[#00FF94]/20 transition-all">All</button>
<button className="px-3 py-1 text-[10px] font-mono uppercase border border-white/10 text-[#666] hover:text-white hover:border-white/30 transition-all">Delta Neutral</button>
<button className="px-3 py-1 text-[10px] font-mono uppercase border border-white/10 text-[#666] hover:text-white hover:border-white/30 transition-all">Long Only</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-[#0F0F0F] border border-white/10 p-6 flex flex-col h-80 hover:border-[#00FF94] transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-2 h-2 bg-[#00FF94] rounded-full shadow-[0_0_10px_#00FF94]"></div>
</div>
<div className="flex justify-between items-start mb-6">
<h3 className="font-mono text-sm text-[#EDEDED] font-bold group-hover:text-[#00FF94] transition-colors">Momentum Alpha V3</h3>
<span className="bg-[#333] text-[#EDEDED] text-[10px] font-mono px-2 py-1 rounded-sm border border-white/5">MED RISK</span>
</div>
<p className="text-[11px] text-[#666] mb-4 line-clamp-2">Captures trends in top 20 crypto assets using volatility breakout models.</p>

<div className="w-full h-1 bg-white/10 mb-6 rounded-full overflow-hidden">
<div className="h-full bg-[#FEBC2E] w-[60%]"></div>
</div>
<div className="flex-1 flex items-end mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] to-transparent z-10"></div>
<svg className="w-full h-20" viewbox="0 0 100 40">
<path className="group-hover:stroke-[#00FF94] transition-colors" d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 2" fill="none" stroke="#666666" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
<div>
<div className="font-mono text-[10px] text-[#666]">APY (30D)</div>
<div className="font-mono text-sm text-[#EDEDED]">12.4%</div>
</div>
<button className="font-mono text-[10px] bg-white/5 hover:bg-[#00FF94] hover:text-black text-[#EDEDED] px-3 py-2 rounded-sm uppercase transition-colors">deploy()</button>
</div>
</div>

<div className="group bg-[#0F0F0F] border border-white/10 p-6 flex flex-col h-80 hover:border-[#FF5F57] transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="font-mono text-sm text-[#EDEDED] font-bold group-hover:text-[#FF5F57] transition-colors">DeFi Arbitrage</h3>
<span className="bg-[#332020] text-[#FF5F57] text-[10px] font-mono px-2 py-1 rounded-sm border border-[#FF5F57]/20">HIGH RISK</span>
</div>
<p className="text-[11px] text-[#666] mb-4 line-clamp-2">Exploits price inefficiencies across DEXs and CEXs instantly. High frequency.</p>

<div className="w-full h-1 bg-white/10 mb-6 rounded-full overflow-hidden">
<div className="h-full bg-[#FF5F57] w-[90%]"></div>
</div>
<div className="flex-1 flex items-end mb-6 relative">
<svg className="w-full h-20" viewbox="0 0 100 40">
<path className="group-hover:stroke-[#FF5F57] transition-colors" d="M0 20 L10 25 L20 15 L30 30 L40 10 L50 35 L60 5 L70 25 L80 10 L90 15 L100 0" fill="none" stroke="#666666" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
<div>
<div className="font-mono text-[10px] text-[#666]">APY (30D)</div>
<div className="font-mono text-sm text-[#EDEDED]">44.1%</div>
</div>
<button className="font-mono text-[10px] bg-white/5 hover:bg-[#FF5F57] hover:text-black text-[#EDEDED] px-3 py-2 rounded-sm uppercase transition-colors">deploy()</button>
</div>
</div>

<div className="group bg-[#0F0F0F] border border-white/10 p-6 flex flex-col h-80 hover:border-[#00FF94] transition-all hover:-translate-y-1 duration-300 relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<h3 className="font-mono text-sm text-[#EDEDED] font-bold group-hover:text-[#00FF94] transition-colors">Stablecoin Yield</h3>
<span className="bg-[#203328] text-[#00FF94] text-[10px] font-mono px-2 py-1 rounded-sm border border-[#00FF94]/20">LOW RISK</span>
</div>
<p className="text-[11px] text-[#666] mb-4 line-clamp-2">Lending aggregation across Aave, Compound and Curve pools. Principal protected.</p>

<div className="w-full h-1 bg-white/10 mb-6 rounded-full overflow-hidden">
<div className="h-full bg-[#00FF94] w-[20%]"></div>
</div>
<div className="flex-1 flex items-end mb-6 relative">
<svg className="w-full h-20" viewbox="0 0 100 40">
<path className="group-hover:stroke-[#00FF94] transition-colors" d="M0 38 L20 35 L40 32 L60 29 L80 26 L100 23" fill="none" stroke="#666666" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
<div>
<div className="font-mono text-[10px] text-[#666]">APY (30D)</div>
<div className="font-mono text-sm text-[#EDEDED]">8.2%</div>
</div>
<button className="font-mono text-[10px] bg-white/5 hover:bg-[#00FF94] hover:text-black text-[#EDEDED] px-3 py-2 rounded-sm uppercase transition-colors">deploy()</button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-8 py-20 mb-20 relative" id="pricing">
<div className="absolute left-1/2 top-10 -translate-x-1/2 w-1/2 h-1/2 bg-[#00FF94] blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-[#EDEDED] mb-4">FAIR PRICING</h2>
<div className="inline-flex items-center gap-4 bg-[#0F0F0F] border border-white/10 rounded-full p-1">
<button className="px-6 py-2 rounded-full bg-[#333] text-white text-xs font-mono transition-all shadow-sm">Yearly</button>
<button className="px-6 py-2 rounded-full text-[#666] hover:text-white text-xs font-mono transition-all">Monthly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-white/10 bg-[#0F0F0F] p-8 flex flex-col hover:border-white/30 transition-colors">
<h3 className="font-mono text-sm text-[#666666] uppercase tracking-wider mb-4">Investor</h3>
<div className="text-4xl font-medium text-[#EDEDED] tracking-tight mb-2">2% <span className="text-lg text-[#666666] font-normal">Flat Fee</span></div>
<div className="text-[10px] text-[#666] mb-8 font-mono">Billed annually. No performance fee.</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                        Daily Rebalancing
                    </li>
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         Long Only Strategies
                    </li>
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         Weekly Reports
                    </li>
</ul>
<button className="w-full py-3 border border-white/20 text-[#EDEDED] font-mono text-xs uppercase hover:bg-white/10 transition-colors">Start Trial</button>
</div>

<div className="border border-[#00FF94] bg-[#0F0F0F] p-8 flex flex-col relative shadow-[0_0_30px_rgba(0,255,148,0.05)] transform hover:scale-[1.02] md:scale-105 transition-transform z-10">
<div className="absolute top-0 right-0 bg-[#00FF94] text-black font-mono text-[10px] font-bold px-2 py-1 uppercase">Recommended</div>
<h3 className="font-mono text-sm text-[#00FF94] uppercase tracking-wider mb-4">Quant</h3>
<div className="text-4xl font-medium text-[#EDEDED] tracking-tight mb-2">0% <span className="text-lg text-[#666666] font-normal">/ 20% Carry</span></div>
<div className="text-[10px] text-[#666] mb-8 font-mono">We only make money if you make money.</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-[#00FF94]/20 text-[#00FF94] flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         L/S Strategies (Hedged)
                    </li>
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-[#00FF94]/20 text-[#00FF94] flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         Real-time Dashboard
                    </li>
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-[#00FF94]/20 text-[#00FF94] flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         API Access
                    </li>
<li className="flex items-center gap-3 text-sm text-[#EDEDED] group">
<div className="w-5 h-5 rounded-full bg-[#00FF94]/20 text-[#00FF94] flex items-center justify-center group-hover:bg-[#00FF94] group-hover:text-black transition-colors"><span className="iconify" data-icon="lucide:check" data-width="12"></span></div>
                         Tax-Loss Harvesting
                    </li>
</ul>
<button className="w-full py-3 bg-[#00FF94] text-black font-mono text-xs uppercase hover:bg-[#00cc76] transition-colors font-semibold shadow-[0_0_20px_rgba(0,255,148,0.3)] hover:shadow-[0_0_30px_rgba(0,255,148,0.5)]">Apply for Access</button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#080808]">
<div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-sm">

<div className="col-span-2 md:col-span-1 space-y-4">
<div className="flex items-center gap-2 text-white tracking-tighter font-semibold text-lg">
<span className="iconify text-[#00FF94]" data-icon="lucide:sigma"></span> SIGMA
                    </div>
<p className="text-[#666666] font-mono text-xs">Decrypting the market through radical rationality.</p>
</div>

<div className="space-y-4 flex flex-col">
<span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold">Protocol</span>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">Documentation</a>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">API Status</a>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">GitHub</a>
</div>

<div className="space-y-4 flex flex-col">
<span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold">Legal</span>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">Terms of Service</a>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">Privacy Policy</a>
<a className="text-[#EDEDED] hover:text-[#00FF94] transition-colors" href="#">Risk Disclosure</a>
</div>

<div className="col-span-2 md:col-span-1 space-y-4">
<span className="font-mono text-[10px] text-[#666666] uppercase tracking-wider font-bold">Network Status</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#00FF94] pulse-green"></div>
<span className="text-[#EDEDED] font-mono text-xs">System: Operational</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<div className="p-2 bg-white/5 rounded-sm">
<div className="text-[9px] text-[#666]">Latency</div>
<div className="text-[#EDEDED] font-mono text-xs">12ms</div>
</div>
<div className="p-2 bg-white/5 rounded-sm">
<div className="text-[9px] text-[#666]">Nodes</div>
<div className="text-[#EDEDED] font-mono text-xs">420</div>
</div>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[#444] text-[10px] font-mono">
<div>© 2026 SIGMA Technologies Inc.</div>
<div className="mt-2 md:mt-0">Past performance is not indicative of future results.</div>
</div>
</div>
</footer>



    </>
  );
}
