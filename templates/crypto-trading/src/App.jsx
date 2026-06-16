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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Spotlight Effect Logic
        const cards = document.querySelectorAll(".spotlight-card");
        
        document.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        function toggleMenu() {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
            } else {
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => {
                    mobileMenu.classList.remove('flex');
                    mobileMenu.classList.add('hidden');
                }, 300);
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // D3.js Chart Implementation
        const drawChart = () => {
            const container = document.getElementById('chart-container');
            container.innerHTML = ''; // Clear existing
            
            const width = container.clientWidth;
            const height = container.clientHeight;
            const margin = {top: 10, right: 0, bottom: 0, left: 0};

            // Fake Data
            const data = [
                {x: 0, y: 50}, {x: 1, y: 55}, {x: 2, y: 45}, {x: 3, y: 60}, 
                {x: 4, y: 58}, {x: 5, y: 70}, {x: 6, y: 65}, {x: 7, y: 80},
                {x: 8, y: 75}, {x: 9, y: 95}, {x: 10, y: 100}
            ];

            const svg = d3.select("#chart-container")
                .append("svg")
                .attr("width", "100%")
                .attr("height", "100%")
                .attr("viewBox", `0 0 ${width} ${height}`)
                .attr("preserveAspectRatio", "none");

            // Scales
            const x = d3.scaleLinear()
                .domain(d3.extent(data, d => d.x))
                .range([0, width]);

            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.y) * 1.2]) // Add headroom
                .range([height, 0]);

            // Gradients
            const defs = svg.append("defs");
            
            const areaGradient = defs.append("linearGradient")
                .attr("id", "area-gradient")
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "0%")
                .attr("y2", "100%");

            areaGradient.append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "#a855f7")
                .attr("stop-opacity", 0.3);

            areaGradient.append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#a855f7")
                .attr("stop-opacity", 0);

            // Area
            const area = d3.area()
                .x(d => x(d.x))
                .y0(height)
                .y1(d => y(d.y))
                .curve(d3.curveMonotoneX);

            // Line
            const line = d3.line()
                .x(d => x(d.x))
                .y(d => y(d.y))
                .curve(d3.curveMonotoneX);

            // Append Area
            svg.append("path")
                .datum(data)
                .attr("class", "chart-area")
                .attr("d", area);

            // Append Line
            const path = svg.append("path")
                .datum(data)
                .attr("class", "chart-path")
                .attr("fill", "none")
                .attr("d", line);
            
            // Animate Line
            const totalLength = path.node().getTotalLength();
            path
                .attr("stroke-dasharray", totalLength + " " + totalLength)
                .attr("stroke-dashoffset", totalLength)
                .transition()
                .duration(2000)
                .ease(d3.easeCubicOut)
                .attr("stroke-dashoffset", 0);
        };

        // Draw initially and on resize
        window.addEventListener('load', drawChart);
        window.addEventListener('resize', drawChart);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="8dH3WnYdxsenOolYGHB0"></div>

</div></div>

<div className="grid-lines animate-in duration-1000">
<div className="grid-line"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<div className="fixed inset-0 z-[60] bg-[#020205]/90 backdrop-blur-xl hidden opacity-0 transition-opacity duration-300 flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-6 right-6 text-white/60 hover:text-white" id="close-menu">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="text-2xl font-newsreader italic text-white hover:text-purple-400 transition-colors" href="#">Platform</a>
<a className="text-2xl font-newsreader italic text-white hover:text-purple-400 transition-colors" href="#">Markets</a>
<a className="text-2xl font-newsreader italic text-white hover:text-purple-400 transition-colors" href="#">Developers</a>
<a className="text-2xl font-newsreader italic text-white hover:text-purple-400 transition-colors" href="#">Company</a>
<a className="text-2xl font-newsreader italic text-white hover:text-purple-400 transition-colors" href="#">Login</a>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#020205]/60 backdrop-blur-md animate-in">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex group cursor-pointer gap-x-2 gap-y-2 items-center" onclick="window.location.href='/home'" role="button">
<span className="text-lg font-semibold italic text-white/90 tracking-tight font-newsreader">Slash</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/platform">Platform</a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/customers">Customers</a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/documentation">Documentation</a>
<a className="hover:text-white transition-colors text-xs font-medium text-white/60" href="/pricing">Pricing</a>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="hidden md:block hover:text-white transition-colors text-xs font-medium text-white/60" href="/login">Log in</a>
<button className="hidden md:block group hover:bg-white/10 transition-all text-xs font-medium text-white bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 relative" onclick="window.location.href='/login'" role="button">
<span className="z-10 relative">Get Started</span>
<div className="btn-beam"></div>
</button>

<button className="md:hidden text-white/60 hover:text-white transition-colors" id="open-menu">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">

<div className="flex flex-col text-center mt-12 mb-32 relative items-center">
<div className="absolute left-0 top-0 text-white/20 text-[10px] font-mono tracking-widest animate-in delay-100">01 // START</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 mb-8 animate-in delay-100 hover:border-purple-500/40 transition-colors cursor-pointer">
<iconify-icon className="text-purple-400 text-xs" icon="solar:star-linear"></iconify-icon>
<span className="text-[10px] font-medium text-purple-200 tracking-wide uppercase">New Features Available</span>
</div>
<h1 className="text-5xl md:text-7xl font-newsreader font-medium italic text-white mb-6 leading-[1.1] animate-in delay-200 max-w-4xl tracking-tight">
                Trading infrastructure <br/>
<span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">for the decentralized era</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto mb-10 leading-relaxed animate-in delay-300">
                Institutional-grade security with the freedom of DeFi. Swap, earn, and build on the most advanced protocol.
            </p>
<div className="flex flex-col sm:flex-row gap-6 animate-in delay-400 gap-x-6 gap-y-6 items-center justify-center">

<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.5)] focus:outline-none text-xs font-semibold text-white tracking-widest rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" onclick="window.location.href='/login'" role="button">
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#a855f7_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#020205]"></div>
</div>
<div className="-z-10 overflow-hidden bg-[#020205] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-purple-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-purple-500/30"></div>
</div>
<span className="relative z-10 text-white/90 transition-colors group-hover:text-white">Create Account</span>
<iconify-icon className="relative z-10 ml-2 text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] cursor-pointer rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center" onclick="window.location.href='/login';window.location.href='/documentation'" role="button">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-semibold text-slate-400 tracking-widest bg-[#020205] w-full h-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="relative z-10">Documentation</span>
</span>
</button>
</div>
</div>

<div className="relative w-full mb-32">
<div className="absolute right-0 -top-10 text-white/20 text-[10px] font-mono tracking-widest animate-in delay-300">02 // INTERFACE</div>

<svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-visible opacity-40" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="beam-grad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(168, 85, 247, 0)"></stop>
<stop offset="50%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="rgba(168, 85, 247, 0)"></stop>
</lineargradient>
</defs>
<path className="noodle-line" d="M 100 0 V 100 Q 100 150 150 150 H 300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="noodle-line" d="M 800 0 V 80 Q 800 130 750 130 H 600" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>

<path className="noodle-beam" d="M 100 0 V 100 Q 100 150 150 150 H 300" fill="none" stroke="url(#beam-grad)" strokeLinecap="round" strokeWidth="2"></path>
</svg>

<div className="spotlight-group grid-cols-1 md:grid-cols-3 animate-in delay-500">

<div className="spotlight-card rounded-xl p-6 flex flex-col justify-between h-[320px] group" style={{-MouseX: '639px', -MouseY: '-576.5px'}}>
<div className="spotlight-border"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon className="text-lg" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Markets</span>
</div>
<iconify-icon className="text-slate-500 cursor-pointer hover:text-white transition-colors" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#F7931A] text-xl" icon="simple-icons:bitcoin"></iconify-icon>
<div className="">
<div className="text-xs font-medium text-white">Bitcoin</div>
<div className="text-[10px] text-slate-500">BTC</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-white">$43,290.00</div>
<div className="text-[10px] text-emerald-400">+2.4%</div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#627EEA] text-xl" icon="simple-icons:ethereum"></iconify-icon>
<div className="">
<div className="text-xs font-medium text-white">Ethereum</div>
<div className="text-[10px] text-slate-500">ETH</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-white">$2,290.50</div>
<div className="text-[10px] text-rose-400">-0.8%</div>
</div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#14F195] text-xl" icon="simple-icons:solana"></iconify-icon>
<div className="">
<div className="text-xs font-medium text-white">Solana</div>
<div className="text-[10px] text-slate-500">SOL</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-white">$108.40</div>
<div className="text-[10px] text-emerald-400">+5.2%</div>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-xl p-6 h-[320px] md:col-span-1" style={{-MouseX: '289.671875px', -MouseY: '-576.5px'}}>
<div className="spotlight-border"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Portfolio Performance</span>
</div>
<div className="mb-6">
<div className="text-3xl font-newsreader font-medium italic text-white tracking-tight">$124,592.80</div>
<div className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-mono">
<iconify-icon className="" icon="solar:graph-up-linear"></iconify-icon>
<span className="">+$12,402 (12.4%)</span>
</div>
</div>

<div className="flex-1 relative w-full h-full opacity-90" id="chart-container"><svg height="100%" preserveaspectratio="none" viewbox="0 0 275 166" width="100%"><defs><lineargradient id="area-gradient" x1="0%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"></stop><stop offset="100%" stop-color="#a855f7" stop-opacity="0"></stop></lineargradient></defs><path className="chart-area" d="M0,96.833C9.167,93.375,18.333,89.917,27.5,89.917C36.667,89.917,45.833,103.75,55,103.75C64.167,103.75,73.333,83,82.5,83C91.667,83,100.833,85.767,110,85.767C119.167,85.767,128.333,69.167,137.5,69.167C146.667,69.167,155.833,76.083,165,76.083C174.167,76.083,183.333,55.333,192.5,55.333C201.667,55.333,210.833,62.25,220,62.25C229.167,62.25,238.333,39.194,247.5,34.583C256.667,29.972,265.833,28.819,275,27.667L275,166C265.833,166,256.667,166,247.5,166C238.333,166,229.167,166,220,166C210.833,166,201.667,166,192.5,166C183.333,166,174.167,166,165,166C155.833,166,146.667,166,137.5,166C128.333,166,119.167,166,110,166C100.833,166,91.667,166,82.5,166C73.333,166,64.167,166,55,166C45.833,166,36.667,166,27.5,166C18.333,166,9.167,166,0,166Z"></path><path className="chart-path" d="M0,96.833C9.167,93.375,18.333,89.917,27.5,89.917C36.667,89.917,45.833,103.75,55,103.75C64.167,103.75,73.333,83,82.5,83C91.667,83,100.833,85.767,110,85.767C119.167,85.767,128.333,69.167,137.5,69.167C146.667,69.167,155.833,76.083,165,76.083C174.167,76.083,183.333,55.333,192.5,55.333C201.667,55.333,210.833,62.25,220,62.25C229.167,62.25,238.333,39.194,247.5,34.583C256.667,29.972,265.833,28.819,275,27.667" fill="none" stroke-dasharray="316.3328552246094 316.3328552246094" stroke-dashoffset="0"></path></svg></div>
</div>
</div>

<div className="spotlight-card rounded-xl p-6 h-[320px]" style={{-MouseX: '-59.6640625px', -MouseY: '-576.5px'}}>
<div className="spotlight-border"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Quick Swap</span>
</div>
<iconify-icon className="text-slate-500 cursor-pointer hover:text-white transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="bg-black/40 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors">
<div className="flex justify-between text-[10px] text-slate-500 mb-1">
<span>From</span>
<span>Bal: 2.4 ETH</span>
</div>
<div className="flex justify-between items-center">
<input className="bg-transparent text-white text-lg font-mono outline-none w-20" readonly="" type="text" value="1.5"/>
<div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
<iconify-icon className="text-[#627EEA]" icon="simple-icons:ethereum"></iconify-icon>
<span className="text-xs font-medium">ETH</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-center -my-3 relative z-20">
<button className="w-8 h-8 rounded-lg bg-[#1a1a1e] border border-white/10 flex items-center justify-center hover:border-purple-500/50 hover:text-purple-400 transition-all">
<iconify-icon className="text-white text-sm" icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
<div className="bg-black/40 border border-white/10 rounded-lg p-3 hover:border-white/20 transition-colors">
<div className="flex justify-between text-[10px] text-slate-500 mb-1">
<span className="">To (Estimate)</span>
</div>
<div className="flex justify-between items-center">
<input className="bg-transparent text-white text-lg font-mono outline-none w-24" readonly="" type="text" value="4,290.50"/>
<div className="flex items-center gap-2 bg-white/5 px-2 py-1 rounded border border-white/5">
<iconify-icon className="text-[#50AF95]" icon="simple-icons:tether"></iconify-icon>
<span className="text-xs font-medium">USDT</span>
<iconify-icon className="text-[10px]" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<button className="hover:bg-slate-200 transition-colors shadow-white/5 text-xs font-bold text-black bg-white w-full rounded-lg mt-1 py-3 shadow-lg">
                            Review Order
                        </button>
</div>
</div>
</div>
</div>

<div className="border-white/5 border-t pt-16 relative">
<div className="text-[10px] animate-in delay-500 text-white/20 tracking-widest font-mono absolute top-8 left-0">03 // COMMUNITY</div>
<p className="text-center text-xs text-slate-500 font-semibold mb-12 animate-in delay-500 uppercase tracking-wide">Trusted by traders worldwide</p>
<div className="relative w-full overflow-hidden mask-edges animate-in delay-700">
<div className="flex w-max gap-6 animate-scroll hover:pause">

<div className="flex gap-6">
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"The execution speed on Slash is unmatched. I've switched all my high-frequency strategies here."</p>
<div className="flex items-center gap-3">
<img alt="Jason Davis" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="">
<div className="text-xs font-medium text-white">Jason Davis</div>
<div className="text-[10px] text-slate-500">@jasond_eth</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Finally, a dashboard that feels like a professional terminal but lives in the browser. Absolute game changer."</p>
<div className="flex items-center gap-3">
<img alt="Mei Kuan" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div className="">
<div className="text-xs font-medium text-white">Mei Kuan</div>
<div className="text-[10px] text-slate-500">@meik_defi</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Low fees and deep liquidity. The analytics tools provided out of the box are worth the switch alone."</p>
<div className="flex items-center gap-3">
<img alt="Alex Rivera" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Alex Rivera</div>
<div className="text-[10px] text-slate-500">@arivera_cap</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Security is my #1 priority. Slash's non-custodial approach coupled with their UX is exactly what I needed."</p>
<div className="flex items-center gap-3">
<img alt="Sarah Lee" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Sarah Lee</div>
<div className="text-[10px] text-slate-500">@sarahscale</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"The API documentation is flawless. Integrating our bot took less than an hour. Highly recommended."</p>
<div className="flex items-center gap-3">
<img alt="David Torres" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">David Torres</div>
<div className="text-[10px] text-slate-500">@dt_algo</div>
</div>
</div>
</div>
</div>

<div className="flex gap-6">
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"The execution speed on Slash is unmatched. I've switched all my high-frequency strategies here."</p>
<div className="flex items-center gap-3">
<img alt="Jason Davis" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Jason Davis</div>
<div className="text-[10px] text-slate-500">@jasond_eth</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Finally, a dashboard that feels like a professional terminal but lives in the browser. Absolute game changer."</p>
<div className="flex items-center gap-3">
<img alt="Mei Kuan" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Mei Kuan</div>
<div className="text-[10px] text-slate-500">@meik_defi</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Low fees and deep liquidity. The analytics tools provided out of the box are worth the switch alone."</p>
<div className="flex items-center gap-3">
<img alt="Alex Rivera" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Alex Rivera</div>
<div className="text-[10px] text-slate-500">@arivera_cap</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"Security is my #1 priority. Slash's non-custodial approach coupled with their UX is exactly what I needed."</p>
<div className="flex items-center gap-3">
<img alt="Sarah Lee" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">Sarah Lee</div>
<div className="text-[10px] text-slate-500">@sarahscale</div>
</div>
</div>
</div>
<div className="w-[320px] bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-xl flex flex-col gap-4">
<p className="text-sm text-slate-300 font-light leading-relaxed">"The API documentation is flawless. Integrating our bot took less than an hour. Highly recommended."</p>
<div className="flex items-center gap-3">
<img alt="David Torres" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div>
<div className="text-xs font-medium text-white">David Torres</div>
<div className="text-[10px] text-slate-500">@dt_algo</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><div className="border-white/5 border-t pt-24 pb-32 relative z-10 w-full max-w-7xl mx-auto">

<div className="text-[10px] animate-in delay-200 lg:left-0 lg:top-16 md:top-16 text-white/20 tracking-widest font-mono absolute top-16 left-6">04 // TECHNOLOGY</div>

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
<div className="flex flex-col items-center text-center mb-20 px-6 animate-in delay-300">
<h2 className="text-4xl md:text-5xl font-newsreader font-medium italic text-white mb-6 tracking-tight">
            Institutional-grade execution 
            <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">powered by automated intelligence.</span>
</h2>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Our Smart Router splits your order across multiple liquidity sources to ensure the best price with zero slippage.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 gap-x-8 gap-y-8">

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden h-[480px] hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-newsreader font-medium italic text-white mb-2">Smart Liquidity Routing</h3>
<p className="text-sm text-slate-400 font-light">We automatically split trades across the most liquid pools.</p>
</div>

<div className="flex-1 relative flex items-center justify-center w-full perspective-[1000px]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [transform:rotateX(60deg)_translateZ(-50px)] opacity-50 mask-edges"></div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="group-hover:stroke-purple-500/50 transition-colors" d="M 50 150 C 150 150 150 80 250 80" fill="none" stroke="rgba(168, 85, 247, 0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="group-hover:stroke-purple-500/50 transition-colors" d="M 50 150 C 150 150 150 220 250 220" fill="none" stroke="rgba(168, 85, 247, 0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="group-hover:stroke-purple-500/50 transition-colors" d="M 250 80 C 350 80 350 150 450 150" fill="none" stroke="rgba(168, 85, 247, 0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="group-hover:stroke-purple-500/50 transition-colors" d="M 250 220 C 350 220 350 150 450 150" fill="none" stroke="rgba(168, 85, 247, 0.2)" stroke-dasharray="4 4" strokeWidth="1"></path>

<circle fill="#a855f7" r="2">
<animatemotion dur="3s" path="M 50 150 C 150 150 150 80 250 80" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="#a855f7" r="2">
<animatemotion begin="1.5s" dur="3s" path="M 250 80 C 350 80 350 150 450 150" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
<div className="bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs py-2 px-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                            Input Order
                        </div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-[20%] z-10 animate-in delay-500 duration-1000 slide-in-from-bottom-4">
<div className="bg-[#0f0f13] border border-white/10 py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all cursor-default">
<iconify-icon className="text-[#FF007A] text-lg" icon="simple-icons:uniswap"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Uniswap V3</span>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-[40%] z-10 animate-in delay-600 duration-1000 slide-in-from-bottom-4">
<div className="bg-[#0f0f13] border border-white/10 py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all cursor-default">
<iconify-icon className="text-white text-lg" icon="simple-icons:curve"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Curve</span>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-[60%] z-10 animate-in delay-700 duration-1000 slide-in-from-bottom-4">
<div className="bg-[#0f0f13] border border-white/10 py-2 px-4 rounded-full flex items-center gap-2 shadow-lg hover:border-purple-500/50 hover:shadow-purple-500/20 transition-all cursor-default">
<iconify-icon className="text-white text-lg" icon="simple-icons:balancer"></iconify-icon>
<span className="text-xs font-medium text-slate-300">Balancer</span>
</div>
</div>
<div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
<div className="bg-purple-900/20 backdrop-blur-md border border-purple-500/30 text-purple-200 text-xs py-2 px-4 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.2)] flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Best Execution
                        </div>
</div>
</div>
<div className="mt-4 flex items-center gap-4 text-[10px] text-slate-500 font-mono uppercase tracking-wider">
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span className="">Protocol Routing</span>
</div>
<div className="flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<span className="">Gas Optimization</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden h-[480px] hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 relative z-10 h-full flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-newsreader font-medium italic text-white mb-2">Algorithmic Strategy Builder</h3>
<p className="text-sm text-slate-400 font-light">Define complex trading logic with our visual rule engine.</p>
</div>

<div className="flex-1 w-full bg-[#050508] border border-white/10 rounded-xl p-4 shadow-2xl overflow-hidden relative group-hover:-translate-y-1 transition-transform duration-500">

<div className="flex items-center gap-2 mb-4 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-slate-500 font-medium px-1">
<iconify-icon icon="solar:settings-minimalistic-linear"></iconify-icon>
<span className="">Set Execution Rules</span>
<span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded text-[10px]">2 active</span>
</div>

<div className="bg-white/5 border border-white/5 rounded-lg p-1 flex items-center gap-2">
<div className="px-3 py-1.5 text-xs text-slate-400 font-mono">Where</div>
<div className="flex-1 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-white flex justify-between items-center group/input cursor-pointer hover:border-white/20 transition-colors">
<span>Token Price</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="w-16 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-white flex justify-between items-center">
<span>&lt;</span>
</div>
<div className="w-24 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-emerald-400 font-mono">
                                $1,850.00
                            </div>
<iconify-icon className="text-slate-600 px-2" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="bg-white/5 border border-white/5 rounded-lg p-1 flex items-center gap-2">
<div className="px-3 py-1.5 text-xs text-slate-400 font-mono w-[54px] text-right">And</div>
<div className="flex-1 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-white flex justify-between items-center group/input cursor-pointer hover:border-white/20 transition-colors">
<span>Gas Price</span>
<iconify-icon className="text-slate-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="w-16 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-white flex justify-between items-center">
<span className="">&lt;</span>
</div>
<div className="w-24 bg-black/40 rounded border border-white/10 px-3 py-1.5 text-xs text-purple-300 font-mono">
                                25 gwei
                            </div>
<iconify-icon className="text-slate-600 px-2" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="mt-4 pt-2 border-t border-white/5">
<button className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-white/5 w-full">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
<span>Add Condition</span>
</button>
</div>
</div>

<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-[50px] pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div><div className="border-white/5 border-t pt-24 pb-32 relative z-10 w-full max-w-7xl mx-auto">

<div className="text-[10px] animate-in delay-200 lg:left-0 text-white/20 tracking-widest font-mono absolute top-16 left-6">05 // MOBILE</div>

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>

<div className="flex flex-col animate-in delay-300 z-10 text-center mb-24 pr-6 pl-6 relative items-center">
<h2 className="text-4xl md:text-5xl font-newsreader font-medium italic text-white mb-6 tracking-tight">
            Seamless synchronization
            <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">across every device.</span>
</h2>
<p className="text-lg text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
            Stay connected to the markets with our native mobile interface. Real-time updates, instant execution, and full portfolio management.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center px-6 relative z-10">

<div className="lg:col-span-3 space-y-24 hidden lg:block text-right">
<div className="group relative">
<div className="text-[10px] font-mono text-purple-400 mb-2">01</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Notifications</h3>
<p className="text-sm text-slate-400 leading-relaxed">Know when to enter — and when to exit. Custom alerts for price, gas, and volume.</p>

<div className="absolute top-1/2 -right-12 w-8 h-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="group relative">
<div className="text-[10px] font-mono text-purple-400 mb-2">02</div>
<h3 className="text-lg font-medium text-white mb-2">Portfolio Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">See your trend lines over time — no clutter, just pure performance data.</p>
<div className="absolute top-1/2 -right-12 w-8 h-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>

<div className="lg:col-span-6 flex perspective-[1000px] justify-center">
<div className="relative w-[320px] h-[640px] bg-black rounded-[3rem] shadow-[0_0_50px_-12px_rgba(168,85,247,0.25)] transform transition-transform duration-700 hover:rotate-x-2 hover:scale-[1.02] group/phone p-[4px]">

<div className="absolute inset-0 rounded-[3rem] overflow-hidden pointer-events-none z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_320deg,#a855f7_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover/phone:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="relative w-full h-full bg-[#020205] rounded-[2.8rem] overflow-hidden z-10 border-[6px] border-black">

<div className="absolute top-3 left-1/2 -translate-x-1/2 z-50">
<div className="relative h-[28px] bg-black rounded-full flex items-center justify-between px-3 min-w-[100px] group/island transition-all duration-300 hover:min-w-[140px] hover:scale-105 border border-white/5 shadow-lg overflow-hidden cursor-default">

<div className="flex items-center gap-2 w-full justify-between">

<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>

<div className="flex gap-[2px] items-center h-2 w-4 justify-end opacity-60">
<div className="w-0.5 bg-white rounded-full animate-pulse h-full"></div>
<div className="w-0.5 bg-white rounded-full animate-pulse h-2/3 delay-75"></div>
<div className="w-0.5 bg-white rounded-full animate-pulse h-full delay-150"></div>
<div className="w-0.5 bg-white rounded-full animate-pulse h-1/2 delay-100"></div>
</div>
</div>

<div className="absolute inset-0 bg-white/5 opacity-0 group-hover/island:opacity-100 transition-opacity pointer-events-none"></div>
</div>
</div>

<div className="w-full h-full bg-gradient-to-b from-slate-900 via-[#050508] to-black p-6 relative flex flex-col font-sans pt-12">

<div className="flex justify-between items-center text-[10px] text-white font-medium mb-6 mt-1 px-2 opacity-90">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="flex justify-between items-start mb-8">
<div className="">
<div className="text-xs text-slate-400 mb-1 font-medium">Total Balance</div>
<div className="text-2xl font-newsreader italic text-white tracking-tight">$124,592.80</div>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-[1px]">
<img alt="Avatar" className="rounded-full w-full h-full object-cover border-2 border-black" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>

<div className="space-y-4 flex-1">

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors cursor-pointer group/card relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Smart Suggestion</span>
<iconify-icon className="text-purple-400" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white mb-2">Buy 2.5 ETH</div>
<div className="w-full bg-white/10 rounded-full h-1 mb-2 overflow-hidden">
<div className="bg-purple-500 w-2/3 h-full rounded-full animate-[width_2s_ease-in-out]"></div>
</div>
<div className="text-[10px] text-slate-400 font-mono">Entry: $2,240.50 • Target: $2,400.00</div>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Weekly Load</span>
<span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+12%</span>
</div>
<div className="text-3xl font-newsreader italic text-white mb-1 tracking-tight">82% <span className="text-sm font-sans text-slate-500 not-italic">Capacity</span></div>
<div className="text-[10px] text-slate-400">Margin utilization is optimal.</div>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Net PnL</span>
<iconify-icon className="text-slate-400" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="text-lg font-medium text-white mb-1">+$2,330.00</div>
<div className="text-[10px] text-slate-400">Daily realized profit.</div>
</div>
</div>

<div className="flex text-slate-500 border-white/5 border-t mb-4 pt-4 items-center justify-around">
<iconify-icon className="text-xl text-white" icon="solar:home-smile-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-white transition-colors" icon="solar:graph-new-linear"></iconify-icon>
<div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:transfer-horizontal-bold"></iconify-icon>
</div>
<iconify-icon className="text-xl hover:text-white transition-colors" icon="solar:wallet-linear"></iconify-icon>
<iconify-icon className="text-xl hover:text-white transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none z-20"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-purple-500/20 blur-[100px] -z-10 pointer-events-none rounded-full mix-blend-screen opacity-50 group-hover/phone:opacity-80 transition-opacity duration-700"></div>
</div>

<div className="lg:col-span-3 space-y-24 hidden lg:block">
<div className="group relative">
<div className="text-[10px] font-mono text-purple-400 mb-2">03</div>
<h3 className="text-lg font-medium text-white mb-2">Volume Tracking</h3>
<p className="text-sm text-slate-400 leading-relaxed">Monitor weekly volume across execution layers: Ethereum, Arbitrum, and Solana.</p>
<div className="absolute top-1/2 -left-12 w-8 h-px bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="group relative">
<div className="text-[10px] font-mono text-purple-400 mb-2">04</div>
<h3 className="text-lg font-medium text-white mb-2">Yield Optimization</h3>
<p className="text-sm text-slate-400 leading-relaxed">Fuel for performance. Automatically route idle assets to the highest yield venues.</p>
<div className="absolute top-1/2 -left-12 w-8 h-px bg-gradient-to-l from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>

<div className="lg:hidden col-span-1 grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
<div className="border-l border-white/10 pl-4">
<div className="text-xs font-mono text-purple-400 mb-1">01</div>
<h3 className="text-white font-medium mb-1">Smart Notifications</h3>
<p className="text-xs text-slate-400">Custom alerts for price, gas, and volume.</p>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-xs font-mono text-purple-400 mb-1">02</div>
<h3 className="text-white font-medium mb-1">Portfolio Analytics</h3>
<p className="text-xs text-slate-400">Clean trend lines, no clutter.</p>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-xs font-mono text-purple-400 mb-1">03</div>
<h3 className="text-white font-medium mb-1">Volume Tracking</h3>
<p className="text-xs text-slate-400">Monitor volume across all chains.</p>
</div>
<div className="border-l border-white/10 pl-4">
<div className="text-xs font-mono text-purple-400 mb-1">04</div>
<h3 className="text-white font-medium mb-1">Yield Optimization</h3>
<p className="text-xs text-slate-400">Auto-route to high yield venues.</p>
</div>
</div>
</div>

<div className="mt-32 border-t border-white/5 pt-16">
<p className="text-center text-[10px] uppercase tracking-widest text-slate-500 mb-10 font-semibold">Deep liquidity integration with</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="group flex items-center gap-3 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#F0B90B]" height="24" icon="simple-icons:binance" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white hidden md:block">BINANCE</span>
</div>
<div className="group flex items-center gap-3 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#0052FF]" height="24" icon="simple-icons:coinbase" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white hidden md:block">coinbase</span>
</div>
<div className="group flex items-center gap-3 hover:opacity-100 transition-opacity">
<iconify-icon className="text-[#5741D9]" height="24" icon="simple-icons:kraken" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white hidden md:block">Kraken</span>
</div>
<div className="group flex items-center gap-3 hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" height="24" icon="simple-icons:bybit" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white hidden md:block">Bybit</span>
</div>
<div className="group flex items-center gap-3 hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" height="24" icon="simple-icons:okx" width="24"></iconify-icon>
<span className="text-lg font-bold tracking-tight text-white hidden md:block">OKX</span>
</div>
</div>
</div>
</div><div className="border-white/5 border-t pt-24 pb-32 relative z-10 w-full max-w-7xl mx-auto">

<div className="absolute left-6 lg:left-0 top-24 text-white/20 text-[10px] font-mono tracking-widest animate-in delay-200">06 // SCALE</div>

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 z-10 relative gap-x-16 gap-y-16">

<div className="flex flex-col justify-center h-full lg:sticky lg:top-32 lg:self-start mb-12 lg:mb-0">
<h2 className="text-4xl md:text-5xl font-newsreader font-medium italic text-white mb-6 tracking-tight animate-in delay-300">
                Infrastructure built for
                <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">internet-scale finance.</span>
</h2>
<p className="text-lg text-slate-400 font-light max-w-md leading-relaxed mb-8 animate-in delay-400">
                Slash empowers institutions to move faster without compromising on security, latency, or liquidity depth.
            </p>
<div className="flex items-center gap-2 text-sm text-slate-500 font-mono animate-in delay-500">
<iconify-icon className="text-purple-400 text-lg" icon="solar:server-square-linear"></iconify-icon>
<span className="">System Status: <span className="text-emerald-400">Operational</span></span>
</div>

<div className="absolute -left-12 bottom-0 w-64 h-64 bg-purple-500/5 blur-[80px] -z-10 pointer-events-none"></div>
</div>

<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-12 animate-in delay-500 hover:bg-white/[0.07] transition-colors duration-500 group relative overflow-hidden">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="space-y-12 relative z-10">

<div className="flex flex-col md:flex-row gap-6 md:items-start border-b border-white/5 pb-12 last:border-0 last:pb-0 group/item">
<div className="w-full md:w-1/3 flex-shrink-0">
<span className="text-5xl md:text-6xl font-newsreader italic text-white tracking-tight group-hover/item:text-purple-300 transition-colors duration-300">$82B+</span>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            Quarterly Volume
                            <iconify-icon className="text-slate-500 text-base opacity-0 group-hover/item:opacity-100 transition-opacity" icon="solar:graph-up-linear"></iconify-icon>
</h4>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                            Consistent liquidity flow across all major execution venues, ensuring zero slippage for institutional orders.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:items-start border-b border-white/5 pb-12 last:border-0 last:pb-0 group/item">
<div className="w-full md:w-1/3 flex-shrink-0">
<span className="text-5xl md:text-6xl font-newsreader italic text-white tracking-tight group-hover/item:text-purple-300 transition-colors duration-300">12ms</span>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            Global Latency
                            <iconify-icon className="text-slate-500 text-base opacity-0 group-hover/item:opacity-100 transition-opacity" icon="solar:bolt-linear"></iconify-icon>
</h4>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                            Direct connection to miners and validators reduces lag, putting your execution ahead of the public mempool.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:items-start border-b border-white/5 pb-12 last:border-0 last:pb-0 group/item">
<div className="w-full md:w-1/3 flex-shrink-0">
<span className="text-5xl md:text-6xl font-newsreader italic text-white tracking-tight group-hover/item:text-purple-300 transition-colors duration-300">99.9%</span>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-lg font-medium text-white mb-2 flex items-center gap-2">
                            System Uptime
                            <iconify-icon className="text-slate-500 text-base opacity-0 group-hover/item:opacity-100 transition-opacity" icon="solar:shield-check-linear"></iconify-icon>
</h4>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                            Decentralized architecture means no single point of failure. The protocol operates 24/7 without downtime.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:items-start group/item pt-2">
<div className="w-full md:w-1/3 flex-shrink-0">
<span className="text-5xl md:text-6xl font-newsreader italic text-white tracking-tight group-hover/item:text-purple-300 transition-colors duration-300">100+</span>
</div>
<div className="w-full md:w-2/3">
<h4 className="text-lg font-medium text-white mb-3">Trusted Partners</h4>
<div className="flex flex-wrap gap-4 items-center">

<div className="h-9 w-16 flex items-center justify-start opacity-50 group-hover/item:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" height="24" icon="simple-icons:binance" width="24"></iconify-icon>
</div>
<div className="h-9 w-16 flex items-center justify-start opacity-50 group-hover/item:opacity-100 transition-opacity duration-300 delay-75">
<iconify-icon className="text-white" height="24" icon="simple-icons:coinbase" width="24"></iconify-icon>
</div>
<div className="h-9 w-16 flex items-center justify-start opacity-50 group-hover/item:opacity-100 transition-opacity duration-300 delay-150">
<iconify-icon className="text-white" height="24" icon="simple-icons:ethereum" width="24"></iconify-icon>
</div>
<div className="h-9 w-16 flex items-center justify-start opacity-50 group-hover/item:opacity-100 transition-opacity duration-300 delay-200">
<iconify-icon className="text-white" height="24" icon="simple-icons:polygon" width="24"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-400 leading-relaxed font-light mt-3">
                            Audited by top firms and integrated with major custodians.
                        </p>
</div>
</div>
</div>
</div>
</div>
</div><div className="z-10 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pb-24 relative">

<div className="text-[10px] animate-in delay-200 lg:left-0 text-white/20 tracking-widest font-mono absolute top-16 left-6">07 // SUPPORT</div>

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 z-10 relative gap-x-16 gap-y-16">

<div className="lg:sticky lg:top-32 lg:self-start">
<h2 className="text-4xl md:text-5xl font-newsreader font-medium italic text-white mb-6 tracking-tight">
                Common questions about
                <span className="not-italic text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-indigo-300">integration &amp; scale.</span>
</h2>
<p className="text-lg text-slate-400 font-light max-w-md leading-relaxed mb-8">
                Everything you need to know about our API limits, latency guarantees, and enterprise SLAs.
            </p>
<button className="group inline-flex items-center gap-2 text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors">
<span className="">View full documentation</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="space-y-4">

<div className="group border-b border-white/5 pb-6">
<div className="flex items-start justify-between cursor-pointer">
<h3 className="text-lg text-white/90 font-medium group-hover:text-purple-300 transition-colors">Can you guarantee 99.9% uptime for institutional APIs?</h3>
<iconify-icon className="text-slate-500 text-xl group-hover:text-white transition-colors" icon="solar:add-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-400 font-light leading-relaxed mt-4 max-w-lg hidden">
                    Yes. We provide legally binding SLAs for enterprise clients, backed by our distributed validator infrastructure across 12 geographic regions.
                </p>
</div>

<div className="group border-b border-white/5 py-6">
<div className="flex items-start justify-between cursor-pointer">
<h3 className="text-lg text-white/90 font-medium group-hover:text-purple-300 transition-colors">Where are your execution servers located?</h3>
<iconify-icon className="text-slate-500 text-xl group-hover:text-white transition-colors" icon="solar:add-linear"></iconify-icon>
</div>
</div>

<div className="group border-b border-white/5 py-6">
<div className="flex items-start justify-between cursor-pointer">
<h3 className="text-lg text-white/90 font-medium group-hover:text-purple-300 transition-colors">Do you support custom FIX protocol integration?</h3>
<iconify-icon className="text-slate-500 text-xl group-hover:text-white transition-colors" icon="solar:add-linear"></iconify-icon>
</div>
</div>

<div className="group border-b border-white/5 py-6">
<div className="flex items-start justify-between cursor-pointer">
<h3 className="text-lg text-white/90 font-medium group-hover:text-purple-300 transition-colors">How is high-frequency rate limiting handled?</h3>
<iconify-icon className="text-slate-500 text-xl group-hover:text-white transition-colors" icon="solar:add-linear"></iconify-icon>
</div>
</div>

<div className="group py-6">
<div className="flex items-start justify-between cursor-pointer">
<h3 className="text-lg text-white/90 font-medium group-hover:text-purple-300 transition-colors">Is there a sandbox environment for testing?</h3>
<iconify-icon className="text-slate-500 text-xl group-hover:text-white transition-colors" icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div><div className="z-10 w-full max-w-7xl border-white/5 border-t mx-auto pt-12 pb-24 relative">

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
<div className="relative w-full bg-[#6E40C9] rounded-[2rem] overflow-hidden px-8 py-16 md:p-16 flex flex-col md:flex-row md:items-end justify-between gap-12 group">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none mix-blend-overlay"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl md:text-5xl font-newsreader font-medium text-white mb-6 tracking-tight leading-[1.1]">
                Not sure of the right architecture for you?
            </h2>
<p className="text-lg text-purple-100/80 font-light leading-relaxed max-w-lg">
                We have a dedicated engineering team here at Slash waiting to help you map out your liquidity strategy.
            </p>
</div>
<div className="relative z-10 flex-none">
<button className="group/btn relative overflow-hidden bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white hover:text-[#6E40C9] hover:border-white">
<div className="flex gap-8 gap-x-8 gap-y-8 items-center justify-between flex-none">
<span className="text-sm font-medium tracking-wide">Let's Chat</span>
<iconify-icon className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div><footer className="border-t border-white/5 bg-[#020205] relative z-20">
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-12 pl-6 relative">

<div className="absolute inset-y-0 left-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 right-0 w-px bg-white/5 hidden lg:block"></div>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/5 hidden lg:block -translate-x-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">

<div className="space-y-6">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-newsreader italic font-semibold text-white">Slash</span>
</div>

<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-[#F06529]" height="24" icon="simple-icons:ycombinator" width="24"></iconify-icon>
<iconify-icon className="text-white" height="24" icon="simple-icons:paradigm" width="24"></iconify-icon>
</div>
</div>

<div className="">
<h4 className="text-sm text-white font-medium mb-6">Developers</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">Documentation</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">API Reference</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">Open Source</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors flex items-center gap-2" href="#">
                        System Status
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm text-white font-medium mb-6">Social</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className=""><a className="hover:text-purple-400 transition-colors flex items-center gap-2" href="#">
                        Twitter <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon>
</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors flex items-center gap-2" href="#">
                        GitHub <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon>
</a></li>
<li className=""><a className="hover:text-purple-400 transition-colors flex items-center gap-2" href="#">
                        Discord <iconify-icon className="text-xs opacity-50" icon="solar:arrow-right-up-linear"></iconify-icon>
</a></li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 border-t border-white/5 pt-12">
<a className="group block border border-white/10 p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start h-full">
<div className="space-y-2">
<span className="text-lg font-newsreader italic text-white group-hover:text-purple-300 transition-colors">Contact Sales</span>
<p className="text-sm text-slate-400 font-light">For enterprise inquiries and volume pricing.</p>
</div>
<iconify-icon className="text-white text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<a className="group block border border-white/10 p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300" href="#">
<div className="flex justify-between items-start h-full">
<div className="space-y-2">
<span className="text-lg font-newsreader italic text-white group-hover:text-purple-300 transition-colors">Contact Support</span>
<p className="text-sm text-slate-400 font-light">Technical assistance for integrations.</p>
</div>
<iconify-icon className="text-white text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-16 pt-8 border-t border-white/5 text-[10px] text-slate-600 uppercase tracking-widest relative z-10">
<span>© 2024 Slash Protocol Inc.</span>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
