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



tailwind.config = {
theme: { extend: {} },
plugins: [ function({ addUtilities }) {
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
const utilities = {
".perspective-dramatic": { perspective: "100px" },
".perspective-normal": { perspective: "1000px" },
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
};
rotateValues.forEach(v => {
utilities[`.rotate-x-${v}`] = { transform: `perspective(1000px) rotateX(${v}deg)` };
});
addUtilities(utilities);
}]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Hero Background Animation
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height, squares = [];
        const squareSize = 50, flickerChance = 0.005, decayRate = 0.02;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initGrid();
        }
        function initGrid() {
            squares = [];
            const cols = Math.ceil(width / squareSize);
            const rows = Math.ceil(height / squareSize);
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    squares.push({ x: i * squareSize, y: j * squareSize, alpha: 0, targetAlpha: 0 });
                }
            }
        }
        function draw() {
            ctx.clearRect(0, 0, width, height);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            for (let x = 0; x <= width; x += squareSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
            for (let y = 0; y <= height; y += squareSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }

            squares.forEach(sq => {
                if (Math.random() < flickerChance && sq.alpha <= 0.01) sq.targetAlpha = Math.random() * 0.15 + 0.05;
                if (sq.alpha < sq.targetAlpha) sq.alpha += 0.05; else { sq.alpha -= decayRate; sq.targetAlpha = 0; }
                if (sq.alpha < 0) sq.alpha = 0;
                if (sq.alpha > 0) { ctx.fillStyle = `rgba(196, 249, 52, ${sq.alpha})`; ctx.fillRect(sq.x, sq.y, squareSize, squareSize); }
            });
            requestAnimationFrame(draw);
        }
        window.addEventListener('resize', resize); resize(); draw();

        // Chart Logic
        const contribSlider = document.getElementById('contrib-slider');
        const contribVal = document.getElementById('contrib-val');
        const riskSlider = document.getElementById('risk-slider');
        const riskVal = document.getElementById('risk-val');
        const inflationToggle = document.getElementById('inflation-toggle');
        const inflationBadge = document.getElementById('inflation-badge');
        const chartMain = document.getElementById('chart-main');
        const chartPoint = document.getElementById('chart-point');
        const tooltip = document.getElementById('chart-tooltip');
        const tooltipValue = document.getElementById('tooltip-value');
        const cagrDisplay = document.getElementById('cagr-display');

        function updateChart() {
            const contribution = parseInt(contribSlider.value);
            const risk = parseInt(riskSlider.value);
            contribVal.textContent = `$${contribution.toLocaleString()}`;
            const risks = ["Conservative", "Moderate", "Balanced", "Aggressive", "Degenerate"];
            riskVal.textContent = risks[risk - 1];
            const cagrs = ["4.2%", "5.8%", "7.1%", "8.4%", "12.2%"];
            cagrDisplay.textContent = cagrs[risk - 1];

            let startY = 280;
            let midY = 120 - (contribution - 12500) / 200;
            let endY = 50 - (contribution - 12500) / 150 - (risk * 10);
            if (midY < 20) midY = 20; if (endY < 10) endY = 10;

            const newPath = `M0,280 C100,${275 - (risk*2)} 200,${240 - (contribution/1000)} 300,${220 - (contribution/500)} C400,${200 - (contribution/400)} 500,${midY + 30} 600,${midY} C700,${midY - 30} 800,${endY + 30} 800,${endY}`;
            chartMain.setAttribute('d', newPath);
            chartPoint.setAttribute('cy', midY);

            let projectedVal = 245000 + (contribution - 12500) * 12 + (risk * 25000);
            tooltipValue.textContent = `$${projectedVal.toLocaleString()}`;
            tooltip.style.top = `${(midY/300) * 80 + 10}%`;
        }

        contribSlider.addEventListener('input', updateChart);
        riskSlider.addEventListener('input', updateChart);

        inflationToggle.addEventListener('change', (e) => {
            if(e.target.checked) {
                inflationBadge.style.opacity = '1';
                let currVal = parseInt(tooltipValue.textContent.replace(/[^0-9]/g, ''));
                tooltipValue.textContent = `$${Math.floor(currVal * 0.6).toLocaleString()}`;
                tooltipValue.classList.add('text-[#4ADE80]');
                tooltipValue.classList.remove('text-[#C4F934]');
            } else {
                inflationBadge.style.opacity = '0';
                updateChart();
                tooltipValue.classList.add('text-[#C4F934]');
                tooltipValue.classList.remove('text-[#4ADE80]');
            }
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
      
<div className="noise-overlay"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-max">
<div className="glass-panel rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.8)]">
<div className="px-3 flex items-center gap-2">
<i className="w-5 h-5 text-[#C4F934]" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-xs font-medium text-[#E0E6E0] hover:text-[#C4F934] transition-colors rounded-full hover:bg-white/5" href="#">Timeline</a>
<a className="px-4 py-2 text-xs font-medium text-[#E0E6E0] hover:text-[#C4F934] transition-colors rounded-full hover:bg-white/5" href="#">Ledger</a>
<a className="px-4 py-2 text-xs font-medium text-[#E0E6E0] hover:text-[#C4F934] transition-colors rounded-full hover:bg-white/5" href="#">Pricing</a>
</div>
<div className="flex items-center gap-2 pl-2">
<button className="px-5 py-2 bg-[#C4F934] text-[#020402] text-xs font-bold uppercase tracking-wide rounded-full hover:bg-[#b0e620] transition-colors shadow-[0_0_20px_-5px_#C4F934]">
                    Start Compounding
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
<canvas className="absolute inset-0 w-full h-full z-0 opacity-40" id="hero-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-[#000000] z-0 pointer-events-none"></div>
<div className="text-center z-10 max-w-4xl px-6 mb-16 relative">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-[#E0E6E0] leading-[0.9] mb-8 font-['Space_Grotesk'] mix-blend-screen">
                PLANT TREES YOU<br/>
<span className="text-[#526655]">WILL NEVER SIT UNDER.</span>
</h1>
<p className="text-[#6B7F6E] text-base md:text-lg max-w-xl mx-auto font-['Inter'] font-light">
                EPOCH visualizes the butterfly effect of your capital. See how today's decisions compound into your grandchildren's inheritance.
            </p>
</div>

<div className="w-full max-w-[1200px] px-4 z-10 perspective-[1000px] group">
<div className="glass-panel rounded-3xl p-1 shadow-[0_0_80px_-20px_rgba(196,249,52,0.05)] transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out animate-float hover:animate-none border border-[#C4F934]/10">
<div className="bg-[#050505] rounded-[20px] w-full h-[600px] flex overflow-hidden border border-white/5 relative">

<div className="w-16 border-r border-white/5 flex flex-col items-center py-6 gap-8 bg-[#000000]">
<div className="w-8 h-8 rounded-full bg-[#C4F934]/10 flex items-center justify-center text-[#C4F934] border border-[#C4F934]/20">
<i className="w-4 h-4" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-6 text-[#526655]">
<i className="w-5 h-5 hover:text-[#E0E6E0] cursor-pointer transition-colors" data-lucide="layers" strokeWidth="1.5"></i>
<i className="w-5 h-5 hover:text-[#E0E6E0] cursor-pointer transition-colors" data-lucide="history" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex-1 flex flex-col relative bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]">
<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#000000]/50 backdrop-blur-sm">
<div className="flex items-center gap-3">
<span className="flex items-center gap-2 text-xs font-bold text-[#C4F934] uppercase tracking-widest bg-[#C4F934]/5 px-2 py-1 rounded border border-[#C4F934]/10">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4F934] animate-pulse"></span>
                                    Simulation Active
                                </span>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-[#526655]">
<span>CAGR: <span className="text-[#E0E6E0]" id="cagr-display">8.4%</span></span>
<span className="text-[#4ADE80] opacity-0 transition-opacity duration-300" id="inflation-badge">INFLATION ADJ: ON</span>
</div>
</div>
<div className="flex-1 relative p-6 flex items-end pb-12">

<div className="absolute top-[30%] left-[60%] z-20 transition-all duration-300 ease-out" id="chart-tooltip">
<div className="glass-panel px-4 py-3 rounded-lg border border-[#C4F934]/30 shadow-[0_0_20px_rgba(196,249,52,0.1)] bg-[#000000]/80">
<div className="text-[10px] font-bold text-[#6B7F6E] uppercase tracking-wider mb-1">Year 2054</div>
<div className="text-sm font-mono text-[#E0E6E0]">Daughter's Wedding Fund</div>
<div className="text-lg font-bold text-[#C4F934] font-mono" id="tooltip-value">$245,000</div>
</div>
<div className="w-[1px] h-20 bg-gradient-to-b from-[#C4F934] to-transparent mx-auto opacity-50"></div>
</div>
<svg className="w-full h-full overflow-visible" viewbox="0 0 800 300">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C4F934" stop-opacity="0.15"></stop>
<stop offset="100%" stop-color="#C4F934" stop-opacity="0"></stop>
</lineargradient>
</defs>
<line stroke="#ffffff" stroke-dasharray="4" stroke-opacity="0.05" x1="0" x2="800" y1="250" y2="250"></line>
<line stroke="#ffffff" stroke-dasharray="4" stroke-opacity="0.05" x1="0" x2="800" y1="150" y2="150"></line>
<path className="chart-path" d="M0,280 C100,275 200,240 300,220 C400,200 500,150 600,120 C700,90 800,80 800,50" fill="none" filter="drop-shadow(0px 0px 8px rgba(196,249,52,0.4))" id="chart-main" stroke="#C4F934" strokeWidth="3"></path>
<circle className="transition-all duration-300 ease-out" cx="600" cy="120" fill="#000000" id="chart-point" r="4" stroke="#C4F934" strokeWidth="2"></circle>
</svg>
<div className="absolute bottom-4 left-0 w-full flex justify-between text-[10px] font-mono text-[#526655] px-6">
<span>2024</span><span>2034</span><span>2044</span><span className="text-[#E0E6E0] font-bold">2054</span><span>2064</span><span>2074</span><span>2084</span>
</div>
</div>
</div>

<div className="w-72 bg-[#000000] border-l border-white/5 p-6 flex flex-col gap-8 z-20">
<div className="pb-4 border-b border-white/5">
<h3 className="text-xs font-bold text-[#E0E6E0] uppercase tracking-widest mb-1">Control Variables</h3>
<p className="text-[10px] text-[#6B7F6E]">Adjust inputs to see legacy impact.</p>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-[#E0E6E0]">Monthly Contribution</span>
<span className="font-mono text-[#C4F934]" id="contrib-val">$12,500</span>
</div>
<input className="w-full" id="contrib-slider" max="25000" min="1000" step="500" type="range" value="12500"/>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-[#E0E6E0]">Risk Profile</span>
<span className="font-mono text-[#C4F934]" id="risk-val">Aggressive</span>
</div>
<input className="w-full" id="risk-slider" max="5" min="1" type="range" value="4"/>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-[#E0E6E0]">Inflation Adj. (CPI)</span>
<div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#526655] top-0" id="inflation-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-[#1a2e1c] cursor-pointer border border-[#526655]" htmlFor="inflation-toggle"></label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1440px] mx-auto bg-[#000000] border-t border-white/5">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-light text-[#E0E6E0] mb-4">The Compounding Engine</h2>
<p className="text-[#6B7F6E] max-w-2xl">Financial modeling for those who think in decades, not quarters.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl md:col-span-2 relative overflow-hidden group hover:border-[#C4F934]/20 transition-colors">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-[#C4F934]/10 flex items-center justify-center text-[#C4F934] mb-6">
<i className="w-5 h-5" data-lucide="git-fork" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium text-[#E0E6E0] mb-2">Multi-Generational Modeling</h3>
<p className="text-[#6B7F6E] text-sm leading-relaxed max-w-md">Most tools stop at retirement. We simulate 50 years past your death to ensure your legacy survives inflation and taxes.</p>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[#C4F934]/20 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#E0E6E0] mb-6">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-[#E0E6E0] mb-2">Inflation-Adjusted Reality</h3>
<p className="text-[#6B7F6E] text-sm leading-relaxed mb-8">See your purchasing power in 2060 dollars. No nominal lies.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#000000] relative">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-2xl font-['Space_Grotesk'] text-[#E0E6E0] mb-16 text-center">The Next 60 Years</h2>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C4F934] via-white/10 to-transparent"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="hidden md:block w-1/2 pr-12 text-right">
<span className="text-4xl font-light text-[#E0E6E0] font-mono">2024</span>
<div className="text-[#6B7F6E] text-xs uppercase tracking-widest mt-2">The Inception</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-[4px] w-2.5 h-2.5 rounded-full bg-[#000000] border border-[#C4F934] shadow-[0_0_15px_#C4F934] z-10"></div>
<div className="w-full md:w-1/2 pl-12">
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-[#C4F934]">
<h3 className="text-lg text-[#E0E6E0] mb-2 font-medium">Portfolio Inception</h3>
<p className="text-sm text-[#6B7F6E] leading-relaxed">Initial capital deployment of $500k. Strategy set to aggressive growth. Trust structures established.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-24 group">
<div className="hidden md:block w-1/2 pr-12 text-right">
<div className="glass-panel p-6 rounded-xl border-r-2 border-r-white/20">
<h3 className="text-lg text-[#E0E6E0] mb-2 font-medium">The Crossover Point</h3>
<p className="text-sm text-[#6B7F6E] leading-relaxed">Passive income exceeds living expenses. Optionality unlocked. The flywheel begins to spin independently.</p>
</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-[4px] w-2 h-2 rounded-full bg-[#000000] border border-white/30 z-10 group-hover:border-[#C4F934] transition-colors"></div>
<div className="w-full md:w-1/2 pl-12">
<span className="text-4xl font-light text-[#526655] group-hover:text-[#E0E6E0] transition-colors font-mono">2045</span>
<div className="text-[#6B7F6E] text-xs uppercase tracking-widest mt-2">Financial Escape Velocity</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="hidden md:block w-1/2 pr-12 text-right">
<span className="text-4xl font-light text-[#526655] group-hover:text-[#C4F934] transition-colors font-mono">2080</span>
<div className="text-[#6B7F6E] text-xs uppercase tracking-widest mt-2">The Legacy</div>
</div>
<div className="absolute left-8 md:left-1/2 -translate-x-[4px] w-2 h-2 rounded-full bg-[#000000] border border-white/30 z-10 group-hover:border-[#C4F934] transition-colors"></div>
<div className="w-full md:w-1/2 pl-12">
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-white/20">
<h3 className="text-lg text-[#E0E6E0] mb-2 font-medium">Dynasty Transfer</h3>
<p className="text-sm text-[#6B7F6E] leading-relaxed">Assets pass to Generation 2 via GST-exempt trusts. Tax drag minimized to 4.2%. The tree provides shade.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505]">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-light font-['Space_Grotesk'] text-[#E0E6E0] mb-2">Performance Ledger</h2>
<p className="text-[#6B7F6E] text-sm">Comparative analysis against standard market benchmarks.</p>
</div>
<button className="flex items-center gap-2 text-xs text-[#C4F934] font-mono hover:underline mt-4 md:mt-0">
<i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i> Export CSV
                </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="text-xs text-[#526655] uppercase tracking-widest border-b border-white/10 font-medium">
<tr>
<th className="py-4 pl-4 font-normal">Asset Class</th>
<th className="py-4 font-normal">Allocation</th>
<th className="py-4 font-normal">Proj. CAGR</th>
<th className="py-4 font-normal">Tax Efficiency</th>
<th className="py-4 font-normal text-right pr-4">2060 Value</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm text-[#E0E6E0]">
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-6 pl-4 font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#C4F934]"></div>
                                Global Equities
                            </td>
<td className="py-6 font-mono text-[#6B7F6E]">45%</td>
<td className="py-6 font-mono">8.2%</td>
<td className="py-6">
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[90%] h-full bg-[#4ADE80]"></div>
</div>
<span className="text-xs text-[#4ADE80]">High</span>
</div>
</td>
<td className="py-6 text-right font-mono pr-4 group-hover:text-[#C4F934] transition-colors">$4,281,000</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-6 pl-4 font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                Private Credit
                            </td>
<td className="py-6 font-mono text-[#6B7F6E]">20%</td>
<td className="py-6 font-mono">11.5%</td>
<td className="py-6">
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[60%] h-full bg-yellow-400"></div>
</div>
<span className="text-xs text-yellow-400">Med</span>
</div>
</td>
<td className="py-6 text-right font-mono pr-4 group-hover:text-[#C4F934] transition-colors">$2,105,400</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-6 pl-4 font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-400"></div>
                                Real Estate
                            </td>
<td className="py-6 font-mono text-[#6B7F6E]">35%</td>
<td className="py-6 font-mono">6.8%</td>
<td className="py-6">
<div className="flex items-center gap-2">
<div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="w-[95%] h-full bg-[#4ADE80]"></div>
</div>
<span className="text-xs text-[#4ADE80]">Max</span>
</div>
</td>
<td className="py-6 text-right font-mono pr-4 group-hover:text-[#C4F934] transition-colors">$3,850,200</td>
</tr>
</tbody>
<tfoot className="border-t border-white/10">
<tr>
<td className="py-6 pl-4 text-xs uppercase tracking-widest text-[#526655]" colspan="4">Total Portfolio Value</td>
<td className="py-6 text-right font-mono text-xl text-[#C4F934] font-bold pr-4">$10,236,600</td>
</tr>
</tfoot>
</table>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto bg-[#000000]">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-light text-[#E0E6E0] mb-4">Access Levels</h2>
<p className="text-[#6B7F6E]">Select the fidelity of your simulation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl flex flex-col border-t border-t-white/10">
<div className="mb-8">
<h3 className="text-lg font-medium text-[#E0E6E0] mb-1">Observer</h3>
<div className="text-3xl font-bold text-[#E0E6E0] font-mono">$0<span className="text-sm font-normal text-[#6B7F6E]">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#6B7F6E]">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Single Generation View</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Basic Asset Classes</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Standard Inflation</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded text-xs font-bold uppercase tracking-wide text-[#E0E6E0] hover:bg-white/5 transition-colors">Start Free</button>
</div>

<div className="p-8 rounded-2xl flex flex-col bg-[#0A0C0A] border border-[#C4F934]/30 relative shadow-[0_0_50px_-20px_rgba(196,249,52,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C4F934] text-[#000000] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Recommended</div>
<div className="mb-8">
<h3 className="text-lg font-medium text-[#C4F934] mb-1">Architect</h3>
<div className="text-3xl font-bold text-[#E0E6E0] font-mono">$29<span className="text-sm font-normal text-[#6B7F6E]">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#E0E6E0]">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C4F934]" data-lucide="check" strokeWidth="1.5"></i> Multi-Gen Simulation (3 Gen)</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C4F934]" data-lucide="check" strokeWidth="1.5"></i> Tax Drag Optimization</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C4F934]" data-lucide="check" strokeWidth="1.5"></i> Monte Carlo Scenarios</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#C4F934]" data-lucide="check" strokeWidth="1.5"></i> Custom Asset Entry</li>
</ul>
<button className="w-full py-3 bg-[#C4F934] rounded text-xs font-bold uppercase tracking-wide text-[#000000] hover:bg-[#b0e620] transition-colors shadow-[0_0_20px_-5px_#C4F934]">Become Architect</button>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col border-t border-t-white/10">
<div className="mb-8">
<h3 className="text-lg font-medium text-[#E0E6E0] mb-1">Dynasty</h3>
<div className="text-3xl font-bold text-[#E0E6E0] font-mono">$99<span className="text-sm font-normal text-[#6B7F6E]">/mo</span></div>
</div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#6B7F6E]">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Infinite Horizons</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Trust &amp; Estate Legal AI</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> Advisor Access</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#E0E6E0]" data-lucide="check" strokeWidth="1.5"></i> API Access</li>
</ul>
<button className="w-full py-3 border border-white/10 rounded text-xs font-bold uppercase tracking-wide text-[#E0E6E0] hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 mb-20">
<h2 className="text-2xl font-light font-['Space_Grotesk'] text-[#E0E6E0] mb-12 text-center">Protocol Inquiries</h2>
<div className="space-y-2">
<details className="group glass-panel rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<span className="text-sm font-medium text-[#E0E6E0]">How accurate is the Monte Carlo simulation?</span>
<span className="text-[#526655] group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-[#6B7F6E] leading-relaxed">
                    We run 10,000 scenario iterations using historical market data dating back to 1920, adjusting for modern volatility indices. While no model is prophetic, ours provides a 95% confidence interval for estate planning.
                </div>
</details>
<details className="group glass-panel rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<span className="text-sm font-medium text-[#E0E6E0]">Can I model complex trust structures?</span>
<span className="text-[#526655] group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-[#6B7F6E] leading-relaxed">
                    Yes. The Architect tier supports GRATS, CRUTS, and ILITs. You can visualize the "waterfall" of assets passing between legal entities to minimize estate tax exposure.
                </div>
</details>
<details className="group glass-panel rounded-lg overflow-hidden border border-white/5">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<span className="text-sm font-medium text-[#E0E6E0]">Is my financial data secure?</span>
<span className="text-[#526655] group-open:rotate-180 transition-transform duration-300">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-[#6B7F6E] leading-relaxed">
                    Data is encrypted at rest using AES-256. We employ a zero-knowledge architecture where even our engineers cannot access your specific net worth values without your explicit temporary key.
                </div>
</details>
</div>
</section>

<footer className="relative pt-32 pb-12 overflow-hidden bg-[#000000] border-t border-white/5">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0">
<h1 className="text-[20vw] font-bold text-[#E0E6E0] opacity-[0.03] leading-none tracking-tighter">EPOCH</h1>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<h2 className="text-2xl md:text-3xl font-light text-[#E0E6E0] mb-8 max-w-2xl">
                The best time to plant a tree was 20 years ago.<br/>
<span className="text-[#526655]">The second best time is now.</span>
</h2>
<button className="px-10 py-5 bg-[#C4F934] text-[#000000] text-sm font-bold uppercase tracking-wide rounded-sm hover:shadow-[0_0_40px_-5px_#C4F93480] transition-all mb-16">
                Start Projection
            </button>
<div className="text-[10px] text-[#6B7F6E] opacity-50">
                © 2024 Epoch Financial Intelligence. Not financial advice.
            </div>
</div>
</footer>



    </>
  );
}
