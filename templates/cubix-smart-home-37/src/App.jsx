import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head||document.body).appendChild(i)}}();
  


        lucide.createIcons();

        // --- 1. Navbar Scroll Effect ---
        const navbar = document.getElementById('navbar');
        const navbarBg = document.getElementById('navbar-bg');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbarBg.classList.remove('bg-black/0', 'backdrop-blur-none');
                navbarBg.classList.add('bg-black/80', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.add('border-white/5');
            } else {
                navbarBg.classList.add('bg-black/0', 'backdrop-blur-none');
                navbarBg.classList.remove('bg-black/80', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.remove('border-white/5');
            }
        });

        // --- 2. Advanced Smooth Scroll Drawing (Lerp + Slowed Down) ---
        const scrollChartPath = document.getElementById('scroll-chart-path');
        
        if (scrollChartPath) {
            const pathLength = scrollChartPath.getTotalLength();
            scrollChartPath.style.strokeDasharray = pathLength;
            
            // Initial state: Hidden (strokeDashoffset = length) AND Opacity 0
            scrollChartPath.style.strokeDashoffset = pathLength;
            
            // Logic variables
            let targetProgress = 0;
            let currentProgress = 0;
            
            // Listen to scroll to update target
            window.addEventListener('scroll', () => {
                const scrolled = document.documentElement.scrollTop + document.body.scrollTop;
                // Increased denominator for slower drawing relative to scroll distance
                const limit = window.innerHeight * 2.5; 
                
                // Calculate percentage (0 to 1)
                let pct = Math.min(Math.max(scrolled / limit, 0), 1);
                targetProgress = pct;
            });

            // Loop for smooth animation (Lerp)
            function animateScrollLine() {
                // Reduced Lerp factor for smoother, slower catch-up (was 0.05)
                currentProgress += (targetProgress - currentProgress) * 0.025;
                
                const drawLength = pathLength * (1 - currentProgress);
                scrollChartPath.style.strokeDashoffset = drawLength;
                
                // --- Opacity Toggle ---
                // Keep it invisible until it starts drawing to ensure "appear from nowhere" effect
                if (currentProgress <= 0.005) {
                    scrollChartPath.style.opacity = '0';
                } else {
                    scrollChartPath.style.opacity = '1';
                }
                
                requestAnimationFrame(animateScrollLine);
            }
            
            // Start the loop
            animateScrollLine();
        }

        // --- 3. Typewriter Effect ---
        const words = ["Hedge Funds", "Pro Traders", "Institutions"];
        let i = 0;
        let timer;
        const typeWriterElement = document.getElementById("typewriter-text");

        function typeWriter() {
            const word = words[i];
            const currentText = typeWriterElement.textContent;
            if (!timer) {
                if (currentText.length > 0) {
                    typeWriterElement.textContent = currentText.substring(0, currentText.length - 1);
                    timer = setTimeout(typeWriter, 50);
                } else {
                    i = (i + 1) % words.length;
                    setTimeout(typeWords, 500);
                    timer = null;
                }
            }
        }
        function typeWords() {
            const word = words[i];
            const currentText = typeWriterElement.textContent;
            if (currentText.length < word.length) {
                typeWriterElement.textContent = word.substring(0, currentText.length + 1);
                setTimeout(typeWords, 100);
            } else {
                timer = setTimeout(typeWriter, 2000);
            }
        }
        setTimeout(typeWriter, 2000);

        // --- 4. Scroll Reveal ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


        // --- 5. LIVE MARKET DATA SIMULATION ---
        function updateLiveNumbers() {
            document.querySelectorAll('.live-data-price').forEach(el => {
                let text = el.textContent.replace(/[$,M]/g, '');
                let currentVal = parseFloat(text);
                let decimals = parseInt(el.getAttribute('data-decimals') || 2);
                let suffix = el.getAttribute('data-suffix') || '';
                let currency = el.getAttribute('data-currency') || '';
                let change = currentVal * (1 + (Math.random() - 0.5) * 0.0015);
                el.textContent = currency + change.toLocaleString('en-US', {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals
                }) + suffix;
            });

            document.querySelectorAll('.live-data-int').forEach(el => {
                let currentVal = parseInt(el.textContent.replace(/,/g, ''));
                let change = currentVal + Math.floor((Math.random() - 0.5) * 5);
                el.textContent = change.toLocaleString('en-US');
            });
            
            const latencyEl = document.querySelector('.live-data-latency');
            if(latencyEl) {
                let lat = 14 + Math.floor((Math.random() - 0.5) * 6);
                latencyEl.textContent = lat + 'ms';
            }
        }
        setInterval(updateLiveNumbers, 800);


        // --- 6. REVENUE CHART LIVE ANIMATION LOOP ---
        const chartLine = document.getElementById('revenue-chart-line');
        const chartGlow = document.getElementById('revenue-chart-glow');
        const chartArea = document.getElementById('revenue-chart-area');
        const chartDot = document.getElementById('revenue-chart-dot');
        const chartTooltip = document.getElementById('revenue-chart-tooltip');

        let basePoints = [
            {x: 0, y: 180},
            {x: 100, y: 160},
            {x: 200, y: 140},
            {x: 300, y: 100},
            {x: 400, y: 120},
            {x: 500, y: 60},
            {x: 600, y: 20}
        ];

        let time = 0;

        function animateChart() {
            time += 0.05;
            let pathString = `M ${basePoints[0].x},${basePoints[0].y}`;
            let points = [];
            
            for(let i = 0; i < basePoints.length; i++) {
                let p = basePoints[i];
                let offsetY = Math.sin(time + i * 0.8) * 10; 
                let newY = p.y + offsetY;
                points.push({x: p.x, y: newY});
            }

            pathString = `M ${points[0].x},${points[0].y}`;
            
            for (let i = 0; i < points.length - 1; i++) {
                const p0 = (i > 0) ? points[i - 1] : points[0];
                const p1 = points[i];
                const p2 = points[i + 1];
                const p3 = (i != points.length - 2) ? points[i + 2] : p2;

                const cp1x = p1.x + (p2.x - p0.x) / 6;
                const cp1y = p1.y + (p2.y - p0.y) / 6;

                const cp2x = p2.x - (p3.x - p1.x) / 6;
                const cp2y = p2.y - (p3.y - p1.y) / 6;

                pathString += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
            }

            chartLine.setAttribute('d', pathString);
            chartGlow.setAttribute('d', pathString);
            
            let areaPath = pathString + ` V 200 H 0 Z`;
            chartArea.setAttribute('d', areaPath);

            let dotY = basePoints[4].y + Math.sin(time + 4 * 0.8) * 10;
            let dotX = basePoints[4].x;
            
            chartDot.setAttribute('cx', dotX);
            chartDot.setAttribute('cy', dotY);

            let percentX = (dotX / 600) * 100;
            let percentY = (dotY / 200) * 100;
            
            chartTooltip.style.left = `${percentX}%`;
            chartTooltip.style.top = `${percentY}%`;

            requestAnimationFrame(animateChart);
        }

        animateChart();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component absolute top-0 w-full h-screen -z-10 saturate-200" data-alpha-mask="22" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 22%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="0GgYfjJbH7HPIFyF1fSt"></div>

</div></div>

<div className="aurora-container">
<div className="aurora-blob blob-1"></div>
<div className="aurora-blob blob-2"></div>
<div className="aurora-blob blob-3"></div>
</div>

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-700 border-b border-transparent" id="navbar">
<div className="absolute inset-0 bg-black/0 backdrop-blur-none transition-all duration-700" id="navbar-bg"></div>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">

<div className="flex items-center gap-8">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-xl bg-neutral-950 border border-green-500/20 flex items-center justify-center group-hover:border-green-500/60 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="w-6 h-6 text-green-500 relative z-10" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2 L15.5 8 H13 V22 H11 V8 H8.5 L12 2 Z M5 10 H8 V17 L10.5 19.5 V21.5 L5 16 V10 Z M19 10 H16 V17 L13.5 19.5 V21.5 L19 16 V10 Z"></path>
</svg>
</div>
<span className="font-semibold tracking-tight text-lg group-hover:text-green-400 transition-colors duration-500">AnalyticsFX</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-neutral-400">
<a className="hover:text-green-400 transition-colors duration-500" href="#">Products</a>
<a className="hover:text-green-400 transition-colors duration-500" href="#">About us</a>
<a className="hover:text-green-400 transition-colors duration-500" href="#">Ecosystem</a>
<a className="hover:text-green-400 transition-colors duration-500" href="#">News</a>
</div>
</div>

<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors duration-500 flex items-center gap-2 text-sm font-normal">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> EN
                </button>
<a className="bg-white/5 hover:bg-green-500/20 hover:text-green-400 text-white px-5 py-2.5 rounded-full text-sm font-normal transition-all duration-500 border border-white/10 hover:border-green-500/50 group relative overflow-hidden" href="#">
<span className="relative z-10">Contact</span>
<div className="absolute inset-0 bg-green-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
</a>
</div>
</div>
</nav>

<main className="overflow-hidden z-10 pt-32 pb-20 relative">

<section className="relative w-full">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 px-6 relative z-10">

<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm mb-8 hover:bg-green-500/20 transition-colors duration-500 cursor-default">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow"></div>
<span className="text-xs font-normal text-green-400 uppercase tracking-wider">Next Gen Technology</span>
</div>

<h1 className="reveal text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6 font-medium">
<span className="text-white">Trading </span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-green-400 via-35% to-green-500">Platform for the</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-300 transition-all duration-500" id="typewriter-text">Pro Traders</span><span className="cursor"> </span>
</h1>

<p className="reveal text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal">
                    AnalyticsFX is the standalone choice for high-performance <br className="hidden md:block"/> brokerages and proprietary trading firms.
                </p>
</div>

<div className="reveal relative w-full h-[600px] md:h-[850px] mt-0 select-none">

<div className="absolute inset-0 z-0 flex items-center justify-center w-full">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 400">
<defs>
<lineargradient id="chartGradient" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#22c55e"></stop>
<stop offset="50%" stop-color="#4ade80"></stop>
<stop offset="100%" stop-color="#22c55e"></stop>
</lineargradient>
</defs>


<path d="M0,380 C150,370 250,320 350,220 C450,100 550,0 700,20 C850,40 900,300 1000,150" fill="none" id="scroll-chart-path" stroke="url(#chartGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
</svg>
</div>

<div className="absolute inset-0 max-w-7xl mx-auto w-full px-6 pointer-events-none z-10 h-full">

<div className="absolute left-0 md:left-6 top-[25%] w-64 glass-card rounded-3xl p-5 animate-float hidden md:block border-l-4 border-l-green-500 pointer-events-auto">
<div className="flex justify-between items-start mb-6">
<div className="space-y-1">
<p className="text-xs text-neutral-400 font-normal">Total Balance</p>

<p className="text-2xl tracking-tight text-white font-medium">
<span className="live-data-price" data-currency="$" data-decimals="2">24,593.00</span>
</p>
</div>
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs">
<span className="text-neutral-500">Equity</span>
<span className="font-normal">
<span className="live-data-price" data-currency="$" data-decimals="2">24,593.00</span>
</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-green-600 to-green-400 w-[70%] rounded-full"></div>
</div>
<div className="flex justify-between text-xs pt-1">
<span className="text-neutral-500">Margin Level</span>
<span className="font-normal text-green-400">
<span className="live-data-int">1,450</span>%
                                </span>
</div>
</div>
</div>

<div className="absolute left-1/2 top-[45%] -translate-x-1/2 glass-card px-4 py-2 rounded-xl flex items-center gap-3 z-20 animate-pulse-glow border border-green-500/30 pointer-events-auto">
<div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
<div className="flex flex-col">
<span className="text-[10px] text-green-400 uppercase font-semibold">EUR/USD</span>
<span className="text-sm font-mono font-medium text-white live-data-price" data-decimals="4">1.0924</span>
</div>
</div>

<div className="absolute right-0 md:right-6 top-[35%] w-72 glass-card rounded-3xl p-5 animate-float-delayed hidden md:block border-r-4 border-r-green-500 pointer-events-auto">
<div className="flex gap-2 mb-4 bg-black/40 p-1 rounded-xl">
<button className="flex-1 py-1.5 text-xs font-normal rounded-lg bg-neutral-800 text-white shadow-sm">Market</button>
<button className="flex-1 py-1.5 text-xs font-normal rounded-lg text-neutral-500 hover:text-white">Pending</button>
</div>
<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-neutral-900/50 rounded-xl p-3 border border-neutral-800 text-center hover:border-green-500/30 transition-colors duration-500">
<span className="text-[10px] text-neutral-500 block mb-1">Sell</span>
<span className="text-lg font-medium text-white live-data-price" data-decimals="4">1.0921</span>
</div>
<div className="bg-neutral-900/50 rounded-xl p-3 border border-green-500/30 text-center relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.1)]">
<div className="absolute inset-0 bg-green-500/10"></div>
<span className="text-[10px] text-green-400 block mb-1">Buy</span>
<span className="text-lg font-medium text-white live-data-price" data-decimals="4">1.0924</span>
</div>
</div>
<button className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2.5 rounded-xl text-sm transition-colors duration-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                            Place Order
                        </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="reveal mt-0 md:mt-10 border-t border-white/5 pt-10">
<p className="text-center text-sm text-neutral-500 mb-8 font-normal">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
<div className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition-colors duration-500"><svg className="fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Velocity</div>
<div className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition-colors duration-500"><svg className="fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Synergy</div>
<div className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition-colors duration-500"><svg className="fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Stellar</div>
<div className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition-colors duration-500"><svg className="fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg> Enigma</div>
<div className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition-colors duration-500"><svg className="fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg> Spectrum</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-32 mb-32 relative z-20">
<div className="flex flex-col items-center text-center mb-16 reveal">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[11px] font-medium text-green-300 uppercase tracking-wider mb-4">
<svg className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg> Institutional Grade
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-4 font-medium text-white">Advanced Analytics Terminal</h2>
<p className="text-neutral-400 max-w-2xl font-normal text-lg">A powerful, fully-featured dashboard designed for professional traders to analyze markets in real-time.</p>
</div>

<div className="reveal w-full bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_50px_-15px_rgba(0,0,0,0.8)] relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-green-500/10 to-transparent blur-xl -z-10 group-hover:from-green-500/20 transition-all duration-700"></div>
<div className="flex h-[700px] dashboard-grid-bg relative overflow-hidden">

<img alt="HUD Interface" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-mode-screen pointer-events-none z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>

<div className="hidden md:flex w-20 flex-col items-center py-6 border-r border-white/5 bg-black/40 backdrop-blur-md gap-8 z-20">
<div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</div>
<div className="flex flex-col gap-6 w-full items-center">
<button className="p-3 rounded-xl bg-green-500/10 text-green-400 relative group"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-green-500 rounded-l-full translate-x-full group-hover:translate-x-0 transition-transform"></div></button>
<button className="p-3 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg></button>
<button className="p-3 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg></button>
<button className="p-3 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg></button>
</div>
<div className="mt-auto flex flex-col gap-6 items-center">
<button className="p-3 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all"><svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></button>
<img alt="User" className="w-8 h-8 rounded-full border border-green-500/50" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"/>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 z-10">

<div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-black/20 backdrop-blur-sm z-10">
<div className="flex items-center gap-4 text-sm">
<span className="text-neutral-500">Dashboard</span>
<svg className="w-4 h-4 text-neutral-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-white">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-green-500/50 w-64 backdrop-blur-sm transition-all focus:bg-white/10" placeholder="Search markets..." type="text"/>
</div>
<button className="relative p-2 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors">
<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full border border-black"></div>
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 scrollbar-hide">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-green-500/20 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-green-500/10 rounded-lg text-green-500">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">+12.5%</span>
</div>
<p className="text-xs text-neutral-500">Total Volume</p>
<h4 className="text-xl font-medium mt-1 live-data-price" data-currency="$" data-decimals="2" data-suffix="M">2.40</h4>
</div>

<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-green-500/20 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-neutral-800 rounded-lg text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">+8.1%</span>
</div>
<p className="text-xs text-neutral-500">Active Traders</p>
<h4 className="text-xl font-medium mt-1 live-data-int">8,194</h4>
</div>

<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-green-500/20 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-neutral-800 rounded-lg text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-[10px] text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">+2.4%</span>
</div>
<p className="text-xs text-neutral-500">Open Positions</p>
<h4 className="text-xl font-medium mt-1 live-data-int">1,240</h4>
</div>

<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-green-500/20 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-neutral-800 rounded-lg text-neutral-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-[10px] text-neutral-500 font-normal">~2ms</span>
</div>
<p className="text-xs text-neutral-500">Avg. Latency</p>
<h4 className="text-xl font-medium mt-1 live-data-latency">14ms</h4>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 h-80">

<div className="lg:col-span-2 bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex flex-col relative overflow-hidden group hover:border-green-500/20 transition-colors shadow-2xl">
<div className="flex justify-between items-center mb-4 relative z-10">
<h3 className="text-sm font-medium text-white shadow-black drop-shadow-md">Revenue Overview</h3>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-1 rounded bg-white/10 backdrop-blur-md text-white border border-white/10">1H</button>
<button className="text-[10px] px-2 py-1 rounded bg-green-500/20 backdrop-blur-md text-green-400 border border-green-500/20">1D</button>
<button className="text-[10px] px-2 py-1 rounded bg-transparent text-neutral-400 hover:text-white">1W</button>
</div>
</div>

<div className="flex-1 w-full h-full relative" id="revenue-chart-container">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
<div className="w-full h-px bg-white/10"></div>
</div>

<svg className="w-full h-full absolute inset-0 z-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 600 200">
<defs>
<lineargradient id="dashboardChartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#22c55e" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#22c55e" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="" fill="none" id="revenue-chart-glow" stroke="rgba(34, 197, 94, 0.4)" strokeWidth="6" style={{filter: 'blur(4px)', transition: 'd 0.1s linear'}}></path>

<path d="" fill="none" id="revenue-chart-line" stroke="#22c55e" strokeWidth="2"></path>

<path d="" fill="url(#dashboardChartGradient)" id="revenue-chart-area" stroke="none"></path>

<circle cx="0" cy="0" fill="#22c55e" id="revenue-chart-dot" r="4" stroke="#000" strokeWidth="2">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="4;6;4"></animate>
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="1;0.5;1"></animate>
</circle>
</svg>

<div className="absolute bg-black/80 backdrop-blur-md border border-green-500/30 px-3 py-1.5 rounded-lg transform -translate-x-1/2 -translate-y-full mb-2 z-10 shadow-lg" id="revenue-chart-tooltip" style={{top: '0', left: '0'}}>
<div className="text-[10px] text-neutral-400">Live</div>
<div className="text-sm font-bold text-white live-data-price" data-currency="$" data-decimals="2" id="revenue-tooltip-value">2,840.50</div>
<div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-black border-r border-b border-green-500/30 transform rotate-45"></div>
</div>
</div>
</div>

<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl p-5 overflow-hidden flex flex-col">
<h3 className="text-sm font-medium text-white mb-4">Market Movers</h3>
<div className="flex-1 space-y-4">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold border border-white/10 group-hover:border-green-500/30 transition-colors">EU</div>
<div>
<div className="text-xs font-medium text-white">EUR/USD</div>
<div className="text-[10px] text-neutral-500">Vol: 24M</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400 live-data-price" data-decimals="4">1.0921</div>
<div className="text-[10px] text-green-500/70">+0.4%</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold border border-white/10 group-hover:border-red-500/30 transition-colors">GU</div>
<div>
<div className="text-xs font-medium text-white">GBP/USD</div>
<div className="text-[10px] text-neutral-500">Vol: 18M</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-red-400 live-data-price" data-decimals="4">1.2640</div>
<div className="text-[10px] text-red-500/70">-0.1%</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold border border-white/10 group-hover:border-green-500/30 transition-colors">XAU</div><div>
<div className="text-xs font-medium text-white">Gold</div>
<div className="text-[10px] text-neutral-500">Vol: 42M</div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-medium text-green-400 live-data-price" data-decimals="2">2041.50</div>
<div className="text-[10px] text-green-500/70">+1.2%</div>
</div>
</div>
</div>

<div className="mt-auto pt-4 border-t border-white/5 text-center">
<a className="text-xs text-neutral-500 hover:text-green-400 transition-colors flex items-center justify-center gap-1" href="#">
                                            View Full Market Data <svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal md:col-span-2 bg-neutral-900/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="w-40 h-40 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3">Ultra-Low Latency Execution</h3>
<p className="text-neutral-400 max-w-md text-lg font-normal">Our proprietary matching engine handles millions of transactions with sub-millisecond latency.</p>
</div>
</div>

<div className="reveal md:col-span-1 bg-neutral-900/20 border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-colors"></div>
<div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3">Bank-Grade Security</h3>
<p className="text-sm text-neutral-400 mb-6 font-normal">Multi-layer encryption and cold storage protocols trusted by institutions.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black relative z-10">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="flex flex-col items-center">
<p className="text-neutral-500 text-xs mb-2">© 2024 AnalyticsFX. All rights reserved.</p>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] text-neutral-400 font-medium">System Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
