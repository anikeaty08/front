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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Matrix Background ---
        const matrixCanvas = document.getElementById('matrix-canvas');
        const mCtx = matrixCanvas.getContext('2d');
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
        
        const chars = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン0123456789ABCDEF';
        const fontSize = 14;
        const columns = matrixCanvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            mCtx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            mCtx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
            mCtx.fillStyle = 'rgba(255, 0, 51, 0.15)'; // Faint red
            mCtx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            requestAnimationFrame(drawMatrix);
        }
        drawMatrix();

        // Handle Resize
        window.addEventListener('resize', () => {
            matrixCanvas.width = window.innerWidth;
            matrixCanvas.height = window.innerHeight;
            // Also adjust network viz if needed
            const netCanvas = document.getElementById('network-canvas-viz');
            if(netCanvas) {
                netCanvas.width = netCanvas.parentElement.clientWidth;
                netCanvas.height = netCanvas.parentElement.clientHeight;
            }
        });

        // --- 2. Scroll Reveal & Counters ---
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Check for counters
                    const counters = entry.target.querySelectorAll('.counter-val');
                    if(counters.length > 0 && !entry.target.dataset.counted) {
                        entry.target.dataset.counted = true;
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const format = counter.getAttribute('data-format'); // M+ or B+
                            let current = 0;
                            const duration = 2500;
                            const startTime = performance.now();

                            function updateCounter(currentTime) {
                                const elapsed = currentTime - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                // easeOutQuart
                                const ease = 1 - Math.pow(1 - progress, 4);
                                current = target * ease;
                                
                                let displayVal = current;
                                if(format === 'M+') displayVal = (current / 1000000).toFixed(1) + 'M+';
                                else if(format === 'B+') displayVal = (current / 1000000000).toFixed(1) + 'B+';
                                else displayVal = Math.floor(current).toLocaleString();

                                counter.innerText = displayVal;

                                if (progress < 1) {
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    // Start live increment
                                    setInterval(() => {
                                        let inc = Math.floor(Math.random() * 5) + 1;
                                        if(format === 'B+') inc = Math.floor(Math.random() * 40000) + 10000;
                                        let newTarget = +counter.getAttribute('data-target') + inc;
                                        counter.setAttribute('data-target', newTarget);
                                        
                                        let dVal = newTarget;
                                        if(format === 'M+') dVal = (newTarget / 1000000).toFixed(1) + 'M+';
                                        else if(format === 'B+') dVal = (newTarget / 1000000000).toFixed(1) + 'B+';
                                        counter.innerText = dVal;
                                    }, Math.random() * 2000 + 2000);
                                }
                            }
                            requestAnimationFrame(updateCounter);
                        });
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- 3. Fake Search Loading ---
        const scanBtn = document.getElementById('scan-btn');
        const domainInput = document.getElementById('domain-input');
        const resultsCard = document.getElementById('scan-results');
        const resultDomain = document.getElementById('result-domain');

        scanBtn.addEventListener('click', () => {
            const val = domainInput.value.trim() || 'acme.com';
            document.getElementById('search-container').classList.add('scanning');
            scanBtn.innerText = 'SCANNING...';
            scanBtn.disabled = true;
            resultsCard.classList.add('hidden');
            
            setTimeout(() => {
                document.getElementById('search-container').classList.remove('scanning');
                scanBtn.innerText = 'SCAN';
                scanBtn.disabled = false;
                resultDomain.innerText = val;
                resultsCard.classList.remove('hidden');
            }, 2000);
        });

        // --- 4. Live Threat Feed ---
        const feedBody = document.getElementById('threat-feed-body');
        const severities = [
            { label: 'CRITICAL', class: 'bg-[#ff0033] text-white' },
            { label: 'HIGH', class: 'bg-[#ff6600] text-black' },
            { label: 'MEDIUM', class: 'bg-[#ffcc00] text-black' }
        ];
        const types = ['CREDENTIAL_LEAK', 'SESSION_HIJACK', 'COOKIE_THEFT', 'BROWSER_DATA', 'AUTOFILL_DUMP', 'WALLET_EXTRACT', 'VPN_CONFIG_LEAK', 'SSO_TOKEN_STEAL'];
        const stealers = ['Lumma', 'Redline', 'Raccoon v2', 'Vidar', 'StealC', 'Risepro', 'MetaStealer'];
        const domains = ['fortune500.com', 'megabank.io', 'cloudcorp.dev', 'retailgiant.com', 'techstart.ai', 'govportal.gov'];
        const flags = ['🇺🇸', '🇬🇧', '🇩🇪', '🇫🇷', '🇯🇵', '🇧🇷', '🇮🇳'];

        function createFeedLine() {
            const now = new Date();
            const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
            const sev = severities[Math.floor(Math.random() * severities.length)];
            const type = types[Math.floor(Math.random() * types.length)];
            const stealer = stealers[Math.floor(Math.random() * stealers.length)];
            const domain = domains[Math.floor(Math.random() * domains.length)];
            const recs = Math.floor(Math.random() * 200) + 1;
            const flag = flags[Math.floor(Math.random() * flags.length)];

            const line = document.createElement('div');
            line.className = 'feed-line flex items-center gap-3 whitespace-nowrap opacity-70 hover:opacity-100 transition-opacity';
            line.innerHTML = `
                <span class="text-[#5a5a70]">[${time}]</span>
                <span class="px-1.5 py-0.5 text-[0.6rem] font-bold rounded-sm ${sev.class}">${sev.label}</span>
                <span class="text-[#ff0033]">${type}</span>
                <span class="text-[#5a5a70]">—</span>
                <span class="text-white">${stealer}</span>
                <span class="text-[#5a5a70]">—</span>
                <span class="text-[#e8e8f0]">*****@${domain}</span>
                <span class="text-[#5a5a70]">—</span>
                <span class="text-[#ff6600]">${recs} records</span>
                <span>${flag}</span>
            `;
            return line;
        }

        setInterval(() => {
            const line = createFeedLine();
            feedBody.appendChild(line);
            if (feedBody.children.length > 15) {
                feedBody.removeChild(feedBody.firstChild); // Note: due to flex column-reverse/end, top is oldest visually if not reversed, wait I used flex-col justify-end, so older should be removed from top. First child is top.
            }
        }, 2500);

        // Populate initial feed
        for(let i=0; i<8; i++) {
            const l = createFeedLine();
            l.style.animation = 'none';
            l.style.opacity = '1';
            feedBody.appendChild(l);
        }

        // --- 5. Dark Data Stream ---
        const scrambledDiv = document.getElementById('scrambled-data');
        const scChars = '0123456789ABCDEF████░░░░▓▓▓▓▒▒▒▒<>/?;:[{]}\\|!@#$%^&*()_+';
        if(scrambledDiv) {
            setInterval(() => {
                let str = '';
                for(let i=0; i<400; i++) str += scChars.charAt(Math.floor(Math.random() * scChars.length));
                scrambledDiv.innerText = str;
            }, 120);
        }

        // --- 6. Network Visualization Canvas ---
        const netCanvas = document.getElementById('network-canvas-viz');
        if(netCanvas) {
            const nCtx = netCanvas.getContext('2d');
            netCanvas.width = netCanvas.parentElement.clientWidth;
            netCanvas.height = netCanvas.parentElement.clientHeight;

            const nodes = [];
            const numNodes = 70;
            const colors = ['#ff0033', '#ff6600', '#ffffff', '#5a5a70'];

            for(let i=0; i<numNodes; i++) {
                nodes.push({
                    x: Math.random() * netCanvas.width,
                    y: Math.random() * netCanvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    radius: Math.random() * 1.5 + 0.5
                });
            }

            let flashTimer = 0;

            function drawNetwork() {
                nCtx.clearRect(0, 0, netCanvas.width, netCanvas.height);
                
                // Update nodes
                nodes.forEach(n => {
                    n.x += n.vx;
                    n.y += n.vy;
                    if(n.x < 0 || n.x > netCanvas.width) n.vx *= -1;
                    if(n.y < 0 || n.y > netCanvas.height) n.vy *= -1;
                    
                    nCtx.beginPath();
                    nCtx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
                    nCtx.fillStyle = n.color;
                    nCtx.fill();
                });

                // Connections
                for(let i=0; i<nodes.length; i++) {
                    for(let j=i+1; j<nodes.length; j++) {
                        const dx = nodes[i].x - nodes[j].x;
                        const dy = nodes[i].y - nodes[j].y;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        
                        if(dist < 100) {
                            nCtx.beginPath();
                            nCtx.moveTo(nodes[i].x, nodes[i].y);
                            nCtx.lineTo(nodes[j].x, nodes[j].y);
                            nCtx.strokeStyle = `rgba(90, 90, 112, ${1 - dist/100})`; // Muted line
                            nCtx.lineWidth = 0.5;
                            nCtx.stroke();
                        }
                    }
                }

                // Flash lines
                flashTimer++;
                if(flashTimer > 60 && Math.random() > 0.8) {
                    const n1 = nodes[Math.floor(Math.random()*nodes.length)];
                    const n2 = nodes[Math.floor(Math.random()*nodes.length)];
                    nCtx.beginPath();
                    nCtx.moveTo(n1.x, n1.y);
                    nCtx.lineTo(n2.x, n2.y);
                    nCtx.strokeStyle = 'rgba(0, 255, 68, 0.8)';
                    nCtx.lineWidth = 1.5;
                    nCtx.stroke();
                    flashTimer = 0;
                }

                requestAnimationFrame(drawNetwork);
            }
            drawNetwork();
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
      

<canvas id="matrix-canvas"></canvas>
<div className="crt-scanlines"></div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-black/70 backdrop-blur-[20px] border-b border-[#ff0033]/15 transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-mono font-bold text-[#ff0033] text-sm tracking-[0.2em] logo-glitch" href="#">VANTAPRISM</a>
<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.1em] text-[#5a5a70]">
<a className="hover:text-[#ff0033] transition-colors" href="#live-intel">Live Intel</a>
<a className="hover:text-[#ff0033] transition-colors" href="#platform">Platform</a>
<a className="hover:text-[#ff0033] transition-colors" href="#tools">Free Tools</a>
<a className="hover:text-[#ff0033] transition-colors" href="#api">API Docs</a>
<a className="hover:text-[#ff0033] transition-colors" href="#feed">Threat Feed</a>
<a className="hover:text-[#ff0033] transition-colors" href="#blog">Blog</a>
<a className="border border-[#ff0033] text-[#e8e8f0] px-4 py-2 hover:bg-[#ff0033] hover:text-black hover:shadow-[0_0_20px_rgba(255,0,51,0.3)] transition-all duration-300 ml-4" href="#access">Request Access</a>
</div>
<button className="md:hidden text-[#ff0033]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10 pt-16">

<section className="min-h-[90vh] flex flex-col items-center justify-center px-4 text-center pb-20 relative overflow-hidden">
<div className="reveal">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff44]/20 bg-[#00ff44]/5 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-[#00ff44] animate-pulse shadow-[0_0_8px_#00ff44]"></div>
<span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase text-[#00ff44]">Live — Infostealer Threat Intelligence Platform</span>
</div>

<h1 className="text-[clamp(2.5rem,7vw,6.5rem)] font-[800] leading-[0.95] tracking-tight mb-8">
<span className="block text-white">From the Unknown</span>
<span className="block text-gradient-animate mt-1">to Intelligence.</span>
</h1>

<div className="w-full max-w-[500px] mx-auto h-[200px] relative mb-8 flex justify-center items-center">
<svg className="w-full h-full" viewbox="0 0 500 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="prismGrad" x1="0%" x2="100%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#ff0033"></stop>
<stop offset="50%" stop-color="#ff6600"></stop>
<stop offset="100%" stop-color="#ffcc00"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>

<path className="beam" d="M0 100 L200 100" opacity="0.15" stroke="#ffffff" strokeWidth="1.5"></path>

<g filter="url(#glow)">
<path className="beam beam-delay-1" d="M280 100 L500 20" stroke="#ff0033" strokeWidth="1.5"></path>
<path className="beam beam-delay-2" d="M280 100 L500 60" stroke="#ff6600" strokeWidth="1.5"></path>
<path className="beam" d="M280 100 L500 100" opacity="0.8" stroke="#ffffff" strokeWidth="1.5"></path>
<path className="beam beam-delay-3" d="M280 100 L500 140" stroke="#ffcc00" strokeWidth="1.5"></path>
<path className="beam beam-delay-1" d="M280 100 L500 180" stroke="#cc0022" strokeWidth="1.5"></path>
</g>

<circle className="beam beam-delay-1" cx="500" cy="20" fill="#ff0033" filter="url(#glow)" r="2"></circle>
<circle className="beam beam-delay-2" cx="500" cy="60" fill="#ff6600" filter="url(#glow)" r="2"></circle>
<circle className="beam" cx="500" cy="100" fill="#ffffff" filter="url(#glow)" r="2"></circle>

<polygon fill="rgba(10,10,15,0.8)" filter="url(#glow)" points="240,40 180,160 300,160" stroke="url(#prismGrad)" strokeWidth="1.5"></polygon>
</svg>
</div>

<p className="max-w-[560px] mx-auto text-lg md:text-[1.15rem] font-light text-[#5a5a70] leading-[1.7] mb-10">
                    VantaPrism ingests <strong className="text-[#ff0033] font-normal">billions of stolen credentials</strong> from info-stealer malware campaigns and refracts them into <strong className="text-[#ff0033] font-normal">actionable threat intelligence</strong> — protecting your organization before attackers strike.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
<a className="btn-shine bg-gradient-to-r from-[#ff0033] to-[#cc0022] text-white font-mono font-bold text-xs uppercase tracking-[0.15em] px-8 py-4 shadow-[0_0_20px_rgba(255,0,51,0.2)] hover:shadow-[0_0_30px_rgba(255,0,51,0.4)] hover:-translate-y-[2px] transition-all duration-300 border border-[#ff1a1a]/50 w-full sm:w-auto" href="#access">
                        Get Early Access
                    </a>
<a className="font-mono text-xs uppercase tracking-[0.15em] px-8 py-4 border border-[#1a1a28] text-[#5a5a70] hover:border-[#ff0033] hover:text-[#ff0033] transition-all duration-300 w-full sm:w-auto bg-transparent" href="#how-it-works">
                        See How It Works
                    </a>
</div>
</div>

<div className="w-full max-w-[1200px] overflow-hidden reveal relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
<p className="font-mono text-[0.6rem] text-[#5a5a70] mb-4 tracking-[0.2em] uppercase">Trusted by security teams at</p>
<div className="flex w-[200%] animate-marquee">
<div className="flex w-1/2 justify-around items-center font-mono text-xs text-[#5a5a70] opacity-30 gap-12 whitespace-nowrap">
<span>FORTUNE 500 BANK</span><span className="text-[#1a1a28]">|</span>
<span>GLOBAL TELECOM</span><span className="text-[#1a1a28]">|</span>
<span>DEFENSE CONTRACTOR</span><span className="text-[#1a1a28]">|</span>
<span>INSURTECH LEADER</span><span className="text-[#1a1a28]">|</span>
<span>TOP 10 UNIVERSITY</span><span className="text-[#1a1a28]">|</span>
<span>CLOUD SAAS PLATFORM</span>
</div>
<div className="flex w-1/2 justify-around items-center font-mono text-xs text-[#5a5a70] opacity-30 gap-12 whitespace-nowrap">
<span>FORTUNE 500 BANK</span><span className="text-[#1a1a28]">|</span>
<span>GLOBAL TELECOM</span><span className="text-[#1a1a28]">|</span>
<span>DEFENSE CONTRACTOR</span><span className="text-[#1a1a28]">|</span>
<span>INSURTECH LEADER</span><span className="text-[#1a1a28]">|</span>
<span>TOP 10 UNIVERSITY</span><span className="text-[#1a1a28]">|</span>
<span>CLOUD SAAS PLATFORM</span>
</div>
</div>
</div>
</section>

<section className="px-4 pb-0 reveal" id="live-intel">
<div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1a1a28] border border-[#1a1a28]">

<div className="stat-card bg-[#0a0a0f] p-12 text-center relative transition-all duration-300">
<div className="flex justify-center items-center gap-1.5 mb-6">
<div className="w-1.5 h-1.5 bg-[#00ff44] rounded-full animate-pulse shadow-[0_0_5px_#00ff44]"></div>
<span className="font-mono text-[0.65rem] text-[#00ff44] tracking-[0.2em]">LIVE</span>
</div>
<div className="font-mono font-bold text-[clamp(2rem,3vw,3.5rem)] text-[#ff0033] leading-none mb-3 tracking-tighter counter-val" data-format="M+" data-target="30847291">0</div>
<div className="font-mono text-[0.75rem] text-[#5a5a70] uppercase tracking-[0.15em] mb-3">Compromised Devices</div>
<div className="font-mono text-[0.65rem] text-[#00ff44] opacity-80 stat-sub" data-increment="14203">↑ 14,203 in last 24h</div>
</div>

<div className="stat-card bg-[#0a0a0f] p-12 text-center relative transition-all duration-300">
<div className="flex justify-center items-center gap-1.5 mb-6">
<div className="w-1.5 h-1.5 bg-[#00ff44] rounded-full animate-pulse shadow-[0_0_5px_#00ff44]"></div>
<span className="font-mono text-[0.65rem] text-[#00ff44] tracking-[0.2em]">LIVE</span>
</div>
<div className="font-mono font-bold text-[clamp(2rem,3vw,3.5rem)] text-[#ff6600] leading-none mb-3 tracking-tighter counter-val" data-format="B+" data-target="14230000000">0</div>
<div className="font-mono text-[0.75rem] text-[#5a5a70] uppercase tracking-[0.15em] mb-3">Stolen Records</div>
<div className="font-mono text-[0.65rem] text-[#00ff44] opacity-80 stat-sub" data-increment="2100000">↑ 2.1M in last 24h</div>
</div>

<div className="stat-card bg-[#0a0a0f] p-12 text-center relative transition-all duration-300">
<div className="flex justify-center items-center gap-1.5 mb-6">
<div className="w-1.5 h-1.5 bg-[#00ff44] rounded-full animate-pulse shadow-[0_0_5px_#00ff44]"></div>
<span className="font-mono text-[0.65rem] text-[#00ff44] tracking-[0.2em]">LIVE</span>
</div>
<div className="font-mono font-bold text-[clamp(2rem,3vw,3.5rem)] text-white leading-none mb-3 tracking-tighter counter-val" data-format="M+" data-target="2847205">0</div>
<div className="font-mono text-[0.75rem] text-[#5a5a70] uppercase tracking-[0.15em] mb-3">Compromised Employees</div>
<div className="font-mono text-[0.65rem] text-[#00ff44] opacity-80 stat-sub" data-increment="8412">↑ 8,412 in last 24h</div>
</div>
</div>
</section>

<section className="border-y border-[#1a1a28] bg-[#050507] overflow-x-auto reveal">
<div className="max-w-[1400px] mx-auto min-w-[800px] py-4 px-6 flex justify-between items-center divide-x divide-[#1a1a28]">
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base">50+</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">Stealer Families Tracked</div>
</div>
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base">11.6M</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">Compromised Domains</div>
</div>
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base">&lt;60s</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">Avg Indexing Time</div>
</div>
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base">165+</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">Countries Covered</div>
</div>
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base">24/7</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">Real-Time Monitoring</div>
</div>
<div className="px-6 text-center flex-1">
<div className="font-mono font-bold text-white text-base text-[#00ff44]">99.97%</div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] uppercase mt-1">API Uptime</div>
</div>
</div>
</section>

<section className="py-24 px-4 reveal" id="tools">
<div className="max-w-[1200px] mx-auto text-center">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Free Intelligence Tools</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white mb-4">Check Your Exposure. For Free.</h2>
<p className="text-[#5a5a70] font-light max-w-2xl mx-auto mb-12 text-sm md:text-base">Use VantaPrism's free tools to discover if your organization has been compromised by infostealers. No sign-up required.</p>

<div className="max-w-[700px] mx-auto mb-16 relative">
<div className="relative bg-[#0a0a0f] border border-[#1a1a28] rounded-sm flex items-center p-1 transition-colors duration-300 focus-within:border-[#ff0033] focus-within:shadow-[0_0_15px_rgba(255,0,51,0.15)] overflow-hidden" id="search-container">
<iconify-icon className="text-[#5a5a70] ml-4 text-xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<input autocomplete="off" className="flex-1 bg-transparent border-none text-[#e8e8f0] font-mono text-sm px-4 py-4 focus:outline-none placeholder-[#5a5a70]/50" id="domain-input" placeholder="Enter a domain... (e.g. acme.com)" spellcheck="false" type="text"/>
<button className="bg-[#ff0033] hover:bg-[#cc0022] text-white font-mono text-xs uppercase tracking-[0.1em] px-8 py-4 transition-colors mr-1" id="scan-btn">Scan</button>
</div>
<p className="text-left font-mono text-[0.6rem] text-[#5a5a70] mt-3 ml-2">Search our database of 30M+ compromised machines</p>

<div className="hidden absolute top-full left-0 w-full mt-4 bg-[#0a0a0f] border border-[#1a1a28] p-6 text-left shadow-2xl z-20" id="scan-results">
<div className="flex items-center gap-3 mb-4 border-b border-[#1a1a28] pb-4">
<div className="w-2 h-2 rounded-full bg-[#ff0033] animate-pulse"></div>
<span className="font-mono text-sm text-white" id="result-domain">acme.com</span>
</div>
<div className="grid grid-cols-3 gap-4 mb-6 blur-[3px] select-none pointer-events-none relative">
<div><div className="font-mono text-[#ff0033] text-xl">847</div><div className="font-mono text-[0.6rem] text-[#5a5a70]">Employees</div></div>
<div><div className="font-mono text-[#ff6600] text-xl">12,340</div><div className="font-mono text-[0.6rem] text-[#5a5a70]">Users</div></div>
<div><div className="font-mono text-white text-xl">23</div><div className="font-mono text-[0.6rem] text-[#5a5a70]">Third-Party</div></div>
</div>
<div className="absolute inset-0 top-[60px] bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent flex items-end justify-center pb-6">
<a className="text-[#ff0033] font-mono text-xs hover:text-white transition-colors border-b border-[#ff0033]/30 hover:border-white pb-1" href="#access">Request Access to See Full Results →</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm cursor-pointer">
<div className="text-2xl mb-4">🏢</div>
<h3 className="text-white font-[800] text-base mb-2">Domain Search</h3>
<p className="text-[#5a5a70] text-[0.8rem] font-light leading-relaxed mb-6 min-h-[60px]">Search compromised corporate &amp; supply chain infrastructure by domain</p>
<span className="font-mono text-[0.6rem] text-[#ff0033] uppercase tracking-[0.1em] border border-[#ff0033]/20 px-2 py-1 bg-[#ff0033]/5">30M+ Machines</span>
</div>
<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm cursor-pointer">
<div className="text-2xl mb-4">📧</div>
<h3 className="text-white font-[800] text-base mb-2">Email Lookup</h3>
<p className="text-[#5a5a70] text-[0.8rem] font-light leading-relaxed mb-6 min-h-[60px]">Check specific email addresses in stealer logs with full infection context</p>
<span className="font-mono text-[0.6rem] text-[#ff6600] uppercase tracking-[0.1em] border border-[#ff6600]/20 px-2 py-1 bg-[#ff6600]/5">Real-Time Alerts</span>
</div>
<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm cursor-pointer">
<div className="text-2xl mb-4">🔧</div>
<h3 className="text-white font-[800] text-base mb-2">Technology Profiler</h3>
<p className="text-[#5a5a70] text-[0.8rem] font-light leading-relaxed mb-6 min-h-[60px]">Discover stolen credentials exposing VPN, SSO, Citrix, and Webmail</p>
<span className="font-mono text-[0.6rem] text-white/70 uppercase tracking-[0.1em] border border-white/10 px-2 py-1 bg-white/5">URL-Level Intel</span>
</div>
<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm cursor-pointer">
<div className="text-2xl mb-4">🔑</div>
<h3 className="text-white font-[800] text-base mb-2">Password Audit</h3>
<p className="text-[#5a5a70] text-[0.8rem] font-light leading-relaxed mb-6 min-h-[60px]">Analyze complexity and reuse patterns across domain's exposed credentials</p>
<span className="font-mono text-[0.6rem] text-[#00ff44] uppercase tracking-[0.1em] border border-[#00ff44]/20 px-2 py-1 bg-[#00ff44]/5">Compliance Ready</span>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 reveal" id="feed">
<div className="max-w-[1000px] mx-auto">
<div className="text-center mb-10">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Real-Time Monitoring</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white">Live Threat Feed</h2>
</div>

<div className="bg-[#050507] border border-[#1a1a28] rounded-md overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)]">

<div className="bg-[#0a0a0f] border-b border-[#1a1a28] px-4 py-3 flex justify-between items-center">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="font-mono text-[0.65rem] text-[#5a5a70]">vantaprism_feed — threat_intel.stream</div>
<div className="text-[#ff0033] animate-pulse">▊</div>
</div>

<div className="p-6 h-[350px] overflow-hidden font-mono text-[0.7rem] md:text-[0.75rem] leading-[1.8] flex flex-col justify-end gap-2 relative" id="threat-feed-body">

<div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-[#050507] to-transparent z-10 pointer-events-none"></div>

</div>
</div>
<div className="mt-4 text-center font-mono text-[0.65rem] text-[#5a5a70]">
                    Processing ~47,000 new infections per day <span className="mx-2">·</span> Data sourced directly from threat actor infrastructure
                </div>
</div>
</section>

<section className="py-24 px-4 reveal" id="platform">
<div className="max-w-[1200px] mx-auto">
<div className="mb-16">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Intelligence Suite</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white mb-4">What We Illuminate</h2>
<p className="text-[#5a5a70] font-light max-w-2xl text-sm md:text-base">VantaPrism's Refract platform gives your security team unprecedented visibility into the infostealer threat landscape.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">⚡</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">Real-Time Stealer Log Ingestion</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Continuous parsing from Lumma, Redline, Raccoon, Vidar, StealC, and 50+ families. New infections indexed in under 60 seconds directly from threat actor infrastructure.</p>
</div>

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">👤</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">Employee &amp; Executive Exposure</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Know exactly which credentials are in stealer logs. VantaPrism automatically distinguishes between employee, customer, and third-party records.</p>
</div>

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">🍪</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">Session Hijack &amp; Cookie Theft</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Identify stolen browser cookies and active sessions giving attackers direct bypass access to Okta, Azure AD, Google Workspace, Slack, and GitHub.</p>
</div>

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">🔗</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">Third-Party &amp; Supply Chain Intel</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Monitor your vendors and partners. If their employees are compromised, your data is at risk. We surface connections others miss, including shadow IT.</p>
</div>

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">📡</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">API, SIEM &amp; SOAR Integration</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Push intelligence directly to Splunk, Sentinel, or any SOAR. RESTful API with real-time webhooks, automated workflows, and identity provider hooks.</p>
</div>

<div className="feature-card bg-[#0a0a0f] border border-[#1a1a28] p-10 min-h-[280px]">
<div className="text-3xl mb-6 grayscale brightness-200">🤖</div>
<h3 className="text-white font-[800] text-[1.05rem] mb-3">SpectrumAI Intelligence Bot</h3>
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-[1.7]">Natural language threat investigations powered by AI. Query your exposure in plain English and get instant answers from 30M+ infected machines.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#050507] border-y border-[#1a1a28] reveal" id="how-it-works">
<div className="max-w-[800px] mx-auto">
<div className="text-center mb-16">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// How Refract Works</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white">From Infection to Action</h2>
</div>
<div className="relative">

<div className="absolute left-[28px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#ff0033] via-[#ff0033]/20 to-transparent md:left-1/2 md:-ml-[0.5px]"></div>

<div className="space-y-12 relative">

<div className="flex flex-col md:flex-row items-start md:items-center w-full reveal">
<div className="md:w-1/2 md:pr-12 md:text-right flex flex-row-reverse md:flex-row items-center md:justify-end mb-4 md:mb-0 ml-16 md:ml-0 gap-4 md:gap-0">
<h3 className="text-white font-[800] text-xl">Ingest</h3>
<div className="hidden md:block text-[#ff0033] ml-4"><iconify-icon icon="solar:database-linear" width="24"></iconify-icon></div>
</div>

<div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-[#0a0a0f] border-2 border-[#ff0033] flex items-center justify-center font-mono font-bold text-[#ff0033] text-sm z-10 shadow-[0_0_15px_rgba(255,0,51,0.2)]">01</div>
<div className="md:w-1/2 md:pl-12 ml-16 md:ml-0">
<div className="bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm">
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-relaxed mb-4">Our collectors continuously ingest raw stealer logs from threat actor infrastructure the moment they are exfiltrated — not days later.</p>
<div className="font-mono text-[0.6rem] text-[#ff0033] tracking-[0.1em] uppercase">~47,000 New Infections / Day</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-start md:items-center w-full reveal">
<div className="md:w-1/2 md:pl-12 flex items-center mb-4 md:mb-0 ml-16 md:ml-0 gap-4 md:gap-0">
<div className="hidden md:block text-[#ff6600] mr-4"><iconify-icon icon="solar:settings-linear" width="24"></iconify-icon></div>
<h3 className="text-white font-[800] text-xl">Parse &amp; Classify</h3>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-[#0a0a0f] border-2 border-[#ff6600] flex items-center justify-center font-mono font-bold text-[#ff6600] text-sm z-10 shadow-[0_0_15px_rgba(255,102,0,0.2)]">02</div>
<div className="md:w-1/2 md:pr-12 md:text-right ml-16 md:ml-0">
<div className="bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm">
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-relaxed mb-4">Our engine parses every credential and cookie, automatically classifying them as Employee, Customer, or Third-Party mapped to the organization.</p>
<div className="font-mono text-[0.6rem] text-[#ff6600] tracking-[0.1em] uppercase">50+ Stealer Families Decoded</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center w-full reveal">
<div className="md:w-1/2 md:pr-12 md:text-right flex flex-row-reverse md:flex-row items-center md:justify-end mb-4 md:mb-0 ml-16 md:ml-0 gap-4 md:gap-0">
<h3 className="text-white font-[800] text-xl">Correlate &amp; Enrich</h3>
<div className="hidden md:block text-white ml-4"><iconify-icon icon="solar:network-linear" width="24"></iconify-icon></div>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-[#0a0a0f] border-2 border-white/50 flex items-center justify-center font-mono font-bold text-white text-sm z-10">03</div>
<div className="md:w-1/2 md:pl-12 ml-16 md:ml-0">
<div className="bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm">
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-relaxed mb-4">VantaPrism's ML pipeline links disparate logs to campaigns, enriching data with geolocation, device info, and risk scoring.</p>
<div className="font-mono text-[0.6rem] text-white/70 tracking-[0.1em] uppercase">AI-Powered Engine</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-start md:items-center w-full reveal">
<div className="md:w-1/2 md:pl-12 flex items-center mb-4 md:mb-0 ml-16 md:ml-0 gap-4 md:gap-0">
<div className="hidden md:block text-[#00ff44] mr-4"><iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon></div>
<h3 className="text-white font-[800] text-xl">Alert &amp; Remediate</h3>
</div>
<div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-[#0a0a0f] border-2 border-[#00ff44] flex items-center justify-center font-mono font-bold text-[#00ff44] text-sm z-10 shadow-[0_0_15px_rgba(0,255,68,0.2)]">04</div>
<div className="md:w-1/2 md:pr-12 md:text-right ml-16 md:ml-0">
<div className="bg-[#0a0a0f] border border-[#1a1a28] p-6 rounded-sm">
<p className="text-[#5a5a70] text-[0.85rem] font-light leading-relaxed mb-4">Instant alerts via API, webhook or SIEM. Automated workflows can force MFA resets and revoke sessions before exploitation.</p>
<div className="font-mono text-[0.6rem] text-[#00ff44] tracking-[0.1em] uppercase">Mean Time To Alert: &lt;90s</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 overflow-hidden reveal">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// The VantaPrism Effect</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white">Dark Data In. Intelligence Out.</h2>
</div>
<div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">

<div className="w-full lg:w-[40%] bg-[#050507] border border-[#1a1a28] rounded-sm p-6 h-[300px] flex flex-col relative overflow-hidden group">
<div className="font-mono text-[0.6rem] text-[#5a5a70] tracking-[0.2em] mb-4 z-10 bg-[#050507] pr-2 inline-block relative">// VANTA BLACK · UNKNOWN</div>
<div className="font-mono text-xs text-white opacity-15 break-all leading-tight h-full overflow-hidden absolute inset-0 pt-14 px-6 select-none pointer-events-none" id="scrambled-data"></div>
</div>

<div className="w-[120px] flex-shrink-0 text-center relative z-10 py-8 lg:py-0">
<svg className="w-full" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<polygon className="beam" fill="rgba(10,10,15,0.9)" points="50,10 10,90 90,90" stroke="url(#prismGrad)" strokeWidth="2"></polygon>
</svg>
<div className="font-mono text-[0.6rem] text-[#5a5a70] mt-4 tracking-[0.15em] uppercase">Refract Engine</div>
</div>

<div className="w-full lg:w-[40%] bg-[#0a0a0f] border border-[#1a1a28] border-l-[#ff0033] border-l-2 rounded-sm p-6 h-[300px] flex flex-col relative overflow-hidden shadow-[-10px_0_30px_-15px_rgba(255,0,51,0.1)]">
<div className="font-mono text-[0.6rem] text-[#ff0033] tracking-[0.2em] mb-6">// INTELLIGENCE · ACTIONABLE</div>
<div className="font-mono text-xs flex flex-col gap-3">
<div className="flex border-b border-[#1a1a28] pb-2"><span className="w-[140px] text-[#5a5a70]">Employee</span><span className="text-white">j.smith@acme.com</span></div>
<div className="flex border-b border-[#1a1a28] pb-2"><span className="w-[140px] text-[#5a5a70]">Stealer</span><span className="text-[#ff6600]">Lumma v4.2</span></div>
<div className="flex border-b border-[#1a1a28] pb-2"><span className="w-[140px] text-[#5a5a70]">Date Compromised</span><span className="text-white">2026-03-21</span></div>
<div className="flex border-b border-[#1a1a28] pb-2"><span className="w-[140px] text-[#5a5a70]">Stolen Sessions</span><span className="text-[#00ff44]">Okta, Slack, GitHub</span></div>
<div className="flex border-b border-[#1a1a28] pb-2"><span className="w-[140px] text-[#5a5a70]">Browser Data</span><span className="text-white">47 passwords, 12 cookies</span></div>
<div className="flex items-center pt-1"><span className="w-[140px] text-[#5a5a70]">Risk Level</span><span className="bg-[#ff0033] text-white px-2 py-0.5 text-[0.6rem]">CRITICAL</span></div>
<div className="flex items-center pt-1"><span className="w-[140px] text-[#5a5a70]">Action</span><span className="text-[#ff0033] cursor-pointer hover:underline">Force MFA Reset →</span></div>
</div>
</div>
</div>
<p className="max-w-[800px] mx-auto text-center text-[#5a5a70] font-light text-sm md:text-base leading-relaxed">
                    Like a prism refracting light, VantaPrism takes the darkest, most opaque data from the cybercriminal underground — raw stealer logs, encrypted credential dumps — and transforms it into a full spectrum of actionable intelligence.
                </p>
</div>
</section>

<section className="py-16 px-4 bg-[#050507] border-y border-[#1a1a28] reveal">
<div className="max-w-[1200px] mx-auto">
<div className="mb-12">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-2">// Threat Landscape</p>
<h2 className="text-2xl md:text-3xl font-[800] tracking-tight text-white">The Infostealer Epidemic</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-5">
<h4 className="font-mono text-xs text-white mb-4 uppercase tracking-widest">Family Distribution</h4>
<div className="space-y-3 font-mono text-[0.65rem]">
<div className="flex items-center gap-2"><span className="w-16 text-[#5a5a70]">Lumma</span><div className="flex-1 bg-[#1a1a28] h-1.5"><div className="bg-[#ff0033] h-full w-[34%]"></div></div><span className="text-white w-6 text-right">34%</span></div>
<div className="flex items-center gap-2"><span className="w-16 text-[#5a5a70]">Redline</span><div className="flex-1 bg-[#1a1a28] h-1.5"><div className="bg-[#ff6600] h-full w-[22%]"></div></div><span className="text-white w-6 text-right">22%</span></div>
<div className="flex items-center gap-2"><span className="w-16 text-[#5a5a70]">StealC</span><div className="flex-1 bg-[#1a1a28] h-1.5"><div className="bg-[#ffcc00] h-full w-[15%]"></div></div><span className="text-white w-6 text-right">15%</span></div>
<div className="flex items-center gap-2"><span className="w-16 text-[#5a5a70]">Vidar</span><div className="flex-1 bg-[#1a1a28] h-1.5"><div className="bg-[#5a5a70] h-full w-[12%]"></div></div><span className="text-[#5a5a70] w-6 text-right">12%</span></div>
</div>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-5">
<h4 className="font-mono text-xs text-white mb-4 uppercase tracking-widest">Top Sectors Hit</h4>
<div className="flex h-3 w-full mb-4">
<div className="bg-[#ff0033] h-full w-[28%] border-r border-black"></div>
<div className="bg-[#ff6600] h-full w-[22%] border-r border-black"></div>
<div className="bg-[#ffcc00] h-full w-[16%] border-r border-black"></div>
<div className="bg-[#5a5a70] h-full w-[34%]"></div>
</div>
<div className="grid grid-cols-2 gap-y-2 font-mono text-[0.65rem]">
<div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#ff0033]"></div><span className="text-[#5a5a70]">Tech 28%</span></div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#ff6600]"></div><span className="text-[#5a5a70]">Finance 22%</span></div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#ffcc00]"></div><span className="text-[#5a5a70]">Health 16%</span></div>
<div className="flex items-center gap-1.5"><div className="w-2 h-2 bg-[#5a5a70]"></div><span className="text-[#5a5a70]">Other 34%</span></div>
</div>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-5">
<h4 className="font-mono text-xs text-white mb-4 uppercase tracking-widest">Exposed Assets</h4>
<ul className="space-y-2 font-mono text-[0.65rem] text-[#5a5a70]">
<li className="flex justify-between border-b border-[#1a1a28] pb-1"><span>VPN Credentials</span><span className="text-[#ff0033]">31%</span></li>
<li className="flex justify-between border-b border-[#1a1a28] pb-1"><span>SSO/OAuth Tokens</span><span className="text-[#ff6600]">24%</span></li>
<li className="flex justify-between border-b border-[#1a1a28] pb-1"><span>Email Accounts</span><span className="text-white">19%</span></li>
<li className="flex justify-between border-b border-[#1a1a28] pb-1"><span>Cloud Storage</span><span className="text-white">14%</span></li>
</ul>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-5 flex flex-col justify-center">
<div className="mb-4">
<div className="font-mono text-[0.6rem] text-[#5a5a70] mb-1">Infection to Dark Web</div>
<div className="font-mono text-lg text-white">&lt; 4 Hours</div>
</div>
<div className="mb-4">
<div className="font-mono text-[0.6rem] text-[#5a5a70] mb-1">Sale to Ransomware</div>
<div className="font-mono text-lg text-[#ff6600]">6-17 Hours</div>
</div>
<div>
<div className="font-mono text-[0.6rem] text-[#5a5a70] mb-1">VantaPrism Alert Time</div>
<div className="font-mono text-lg text-[#00ff44] animate-pulse">&lt; 90 Seconds</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 reveal">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Trusted by Security Teams</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white">What Our Clients Say</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0f] border border-[#1a1a28] border-l-[3px] border-l-[#ff0033] p-8 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,0,51,0.05)] transition-all">
<p className="text-[#e8e8f0] font-light italic text-[0.9rem] leading-relaxed mb-6">"VantaPrism's early warning capabilities have been game-changing for our SOC. We've prevented multiple credential-based attacks by catching compromised employee accounts within minutes of exfiltration."</p>
<div className="font-mono text-xs">
<div className="text-white font-bold">Sarah Chen</div>
<div className="text-[#5a5a70] text-[0.65rem] mt-1">CISO, Global Financial Services</div>
</div>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] border-l-[3px] border-l-[#ff6600] p-8 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,102,0,0.05)] transition-all">
<p className="text-[#e8e8f0] font-light italic text-[0.9rem] leading-relaxed mb-6">"Integrating VantaPrism's API into our underwriting platform has transformed how we assess cyber risk. We now have real-time visibility into policyholders' exposure to infostealer threats."</p>
<div className="font-mono text-xs">
<div className="text-white font-bold">Marcus Webb</div>
<div className="text-[#5a5a70] text-[0.65rem] mt-1">VP Cyber Risk, InsureTech Holdings</div>
</div>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] border-l-[3px] border-l-[#ffcc00] p-8 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,204,0,0.05)] transition-all">
<p className="text-[#e8e8f0] font-light italic text-[0.9rem] leading-relaxed mb-6">"Deployed VantaPrism to protect 45,000 student/staff accounts. Within the first week, we identified over 200 compromised credentials actively being sold on Telegram channels."</p>
<div className="font-mono text-xs">
<div className="text-white font-bold">Dr. James Okafor</div>
<div className="text-[#5a5a70] text-[0.65rem] mt-1">Dir IT Security, Atlantic Univ</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-4 bg-[#050507] border-y border-[#1a1a28] reveal" id="blog">
<div className="max-w-[1200px] mx-auto">
<div className="flex justify-between items-end mb-10">
<div>
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-2">// From the Frontlines</p>
<h2 className="text-2xl md:text-3xl font-[800] tracking-tight text-white">Latest Threat Intel</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#0a0a0f] border border-[#1a1a28] rounded-sm group cursor-pointer hover:border-[#ff0033]/50 hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
<div className="h-32 bg-gradient-to-br from-[#111118] to-[#1a1a28] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,0,51,0.1),transparent)]"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-center mb-4">
<span className="font-mono text-[0.6rem] bg-[#ff0033] text-white px-2 py-0.5 tracking-wider">AI THREATS</span>
<span className="font-mono text-[0.65rem] text-[#5a5a70]">Mar 2026</span>
</div>
<h3 className="text-white font-[800] text-lg leading-tight mb-3">Infostealers Targeting AI Agent Configs</h3>
<p className="text-[#5a5a70] font-light text-[0.8rem] line-clamp-2 mb-6 flex-1">Attackers are uploading malicious skills to registries. When an agent downloads it, it installs an infostealer...</p>
<span className="font-mono text-xs text-[#ff0033] group-hover:text-white transition-colors">Read Analysis →</span>
</div>
</div>
<div className="bg-[#0a0a0f] border border-[#1a1a28] rounded-sm group cursor-pointer hover:border-[#ff6600]/50 hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
<div className="h-32 bg-gradient-to-br from-[#111118] to-[#1a1a28] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,102,0,0.1),transparent)]"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-center mb-4">
<span className="font-mono text-[0.6rem] bg-[#ff6600] text-black px-2 py-0.5 tracking-wider">RANSOMWARE</span>
<span className="font-mono text-[0.65rem] text-[#5a5a70]">Mar 2026</span>
</div>
<h3 className="text-white font-[800] text-lg leading-tight mb-3">Infection to Ransomware: The 6-Hour Pipeline</h3>
<p className="text-[#5a5a70] font-light text-[0.8rem] line-clamp-2 mb-6 flex-1">Analysis shows stolen credentials reach ransomware operators in 6 hours. Here's the kill chain...</p>
<span className="font-mono text-xs text-[#ff0033] group-hover:text-white transition-colors">Read Analysis →</span>
</div>
</div>
<div className="bg-[#0a0a0f] border border-[#1a1a28] rounded-sm group cursor-pointer hover:border-[#ffcc00]/50 hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
<div className="h-32 bg-gradient-to-br from-[#111118] to-[#1a1a28] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,204,0,0.1),transparent)]"></div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-center mb-4">
<span className="font-mono text-[0.6rem] bg-[#ffcc00] text-black px-2 py-0.5 tracking-wider">ENTERPRISE</span>
<span className="font-mono text-[0.65rem] text-[#5a5a70]">Feb 2026</span>
</div>
<h3 className="text-white font-[800] text-lg leading-tight mb-3">SSO Gateway Brute-Forcing via Stealer Logs</h3>
<p className="text-[#5a5a70] font-light text-[0.8rem] line-clamp-2 mb-6 flex-1">Threat actors industrialize brute-force attacks on corporate SSO using databases harvested by infostealers...</p>
<span className="font-mono text-xs text-[#ff0033] group-hover:text-white transition-colors">Read Analysis →</span>
</div>
</div>
</div>
</div>
</section>

<section className="reveal relative">
<div className="w-full h-[300px] border-y border-[#1a1a28] relative bg-[#050507] overflow-hidden">
<canvas className="absolute inset-0 w-full h-full" id="network-canvas-viz"></canvas>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-black/50 backdrop-blur-sm px-6 py-3 border border-[#1a1a28] rounded-sm text-center">
<p className="font-mono text-[0.7rem] text-white">Monitoring threat actor infrastructure across 165+ countries</p>
<p className="font-mono text-[0.6rem] text-[#5a5a70] mt-1">Real-time correlation of 30M+ compromised endpoints</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 reveal" id="api">
<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12">
<div className="w-full lg:w-1/2">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Developer-First</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white mb-4">Integrate in Minutes</h2>
<p className="text-[#5a5a70] font-light text-sm md:text-base mb-10">VantaPrism's RESTful API delivers threat intelligence directly to your security stack.</p>
<div className="grid grid-cols-2 gap-4">
<div className="border border-[#1a1a28] bg-[#0a0a0f] py-3 text-center font-mono text-xs text-[#5a5a70]">Splunk</div>
<div className="border border-[#1a1a28] bg-[#0a0a0f] py-3 text-center font-mono text-xs text-[#5a5a70]">MS Sentinel</div>
<div className="border border-[#1a1a28] bg-[#0a0a0f] py-3 text-center font-mono text-xs text-[#5a5a70]">Google Chronicle</div>
<div className="border border-[#1a1a28] bg-[#0a0a0f] py-3 text-center font-mono text-xs text-[#5a5a70]">Custom SOAR</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<div className="bg-[#050507] border border-[#1a1a28] rounded-md overflow-hidden shadow-2xl">
<div className="bg-[#0a0a0f] border-b border-[#1a1a28] px-4 py-2 flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div><div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="p-6 font-mono text-[0.7rem] md:text-[0.8rem] overflow-x-auto whitespace-pre leading-relaxed">
<span className="text-white">curl</span> -X GET <span className="text-[#ff0033]">"https://api.vantaprism.com/v3/search"</span> \
  -H <span className="text-[#ff0033]">"Authorization: Bearer vp_sk_live_xxxxx"</span> \
  -d <span className="text-[#ff0033]">'{"domain": "acme.com"}'</span>
<span className="text-[#5a5a70]">// Response</span>
<span className="text-white">{</span>
<span className="text-[#5a5a70]">"domain"</span>: <span className="text-[#ff0033]">"acme.com"</span>,
  <span className="text-[#5a5a70]">"compromised_employees"</span>: <span className="text-[#ff6600]">847</span>,
  <span className="text-[#5a5a70]">"latest_infection"</span>: <span className="text-white">{</span>
<span className="text-[#5a5a70]">"stealer"</span>: <span className="text-[#ff0033]">"Lumma v4.2"</span>,
    <span className="text-[#5a5a70]">"date"</span>: <span className="text-[#ff0033]">"2026-03-23T14:22:00Z"</span>,
    <span className="text-[#5a5a70]">"employee"</span>: <span className="text-[#ff0033]">"j.smith@acme.com"</span>,
    <span className="text-[#5a5a70]">"stolen_sessions"</span>: <span className="text-white">[</span><span className="text-[#ff0033]">"Okta"</span>, <span className="text-[#ff0033]">"Slack"</span><span className="text-white">]</span>,
    <span className="text-[#5a5a70]">"risk_score"</span>: <span className="text-[#ff6600]">9.8</span>
<span className="text-white">}</span>
<span className="text-white">}</span></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#050507] border-t border-[#1a1a28] reveal">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-4">// Plans</p>
<h2 className="text-3xl md:text-5xl font-[800] tracking-tight text-white">Choose Your Intel Level</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-8 text-center rounded-sm">
<h3 className="font-mono text-sm text-white tracking-widest uppercase mb-2">Community</h3>
<div className="text-[#5a5a70] font-light text-sm mb-8">Basic exposure visibility</div>
<ul className="text-left space-y-4 font-light text-[0.85rem] text-[#e8e8f0] mb-8">
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Free tools access</li>
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> 100 API calls/month</li>
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Basic email alerts</li>
</ul>
<button className="w-full py-3 font-mono text-xs uppercase tracking-widest border border-[#1a1a28] text-[#5a5a70] hover:border-white hover:text-white transition-colors">Get Started Free</button>
</div>

<div className="bg-[#0a0a0f] border border-[#ff0033]/50 p-10 text-center rounded-sm relative shadow-[0_0_40px_rgba(255,0,51,0.1)] md:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#ff0033] text-white font-mono text-[0.6rem] px-3 py-1 uppercase tracking-widest">Most Popular</div>
<h3 className="font-mono text-sm text-[#ff0033] tracking-widest uppercase mb-2 mt-4">Professional</h3>
<div className="text-[#5a5a70] font-light text-sm mb-8">Full automated protection</div>
<ul className="text-left space-y-4 font-light text-[0.85rem] text-white mb-8">
<li className="flex items-center gap-2"><span className="text-[#ff0033]">✓</span> Full Refract platform access</li>
<li className="flex items-center gap-2"><span className="text-[#ff0033]">✓</span> Unlimited API calls</li>
<li className="flex items-center gap-2"><span className="text-[#ff0033]">✓</span> Real-time webhooks &amp; SIEM</li>
<li className="flex items-center gap-2"><span className="text-[#ff0033]">✓</span> Supply chain monitoring</li>
<li className="flex items-center gap-2"><span className="text-[#ff0033]">✓</span> SpectrumAI access</li>
</ul>
<button className="w-full py-3 bg-[#ff0033] text-white font-mono text-xs uppercase tracking-widest hover:bg-[#cc0022] hover:shadow-[0_0_15px_rgba(255,0,51,0.4)] transition-all">Request Demo</button>
</div>

<div className="bg-[#0a0a0f] border border-[#1a1a28] p-8 text-center rounded-sm">
<h3 className="font-mono text-sm text-white tracking-widest uppercase mb-2">Enterprise</h3>
<div className="text-[#5a5a70] font-light text-sm mb-8">Custom tailored intel</div>
<ul className="text-left space-y-4 font-light text-[0.85rem] text-[#e8e8f0] mb-8">
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Everything in Professional</li>
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Dedicated threat analyst</li>
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Custom integrations</li>
<li className="flex items-center gap-2"><span className="text-[#5a5a70]">✓</span> Identity auto-remediation</li>
</ul>
<button className="w-full py-3 font-mono text-xs uppercase tracking-widest border border-[#1a1a28] text-[#5a5a70] hover:border-white hover:text-white transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative overflow-hidden reveal" id="access">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,51,0.05)_0%,transparent_60%)]"></div>
<div className="max-w-[800px] mx-auto text-center relative z-10">
<p className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#ff0033] mb-6">// Join the Vanguard</p>
<h2 className="text-4xl md:text-6xl font-[800] tracking-tight text-white mb-6">See What Hides in the Dark.</h2>
<p className="text-[#5a5a70] font-light text-lg mb-10">Request early access and discover what attackers already know about your organization.</p>
<button className="btn-shine bg-gradient-to-r from-[#ff0033] to-[#cc0022] text-white font-mono font-bold text-sm uppercase tracking-[0.15em] px-10 py-5 shadow-[0_0_30px_rgba(255,0,51,0.2)] hover:shadow-[0_0_40px_rgba(255,0,51,0.5)] hover:-translate-y-[2px] transition-all duration-300 border border-[#ff1a1a]/50">
                    Request Early Access
                </button>
<div className="mt-8 font-mono text-[0.65rem] text-[#5a5a70]">
                    No credit card required <span className="mx-2 text-[#1a1a28]">|</span> Free exposure report <span className="mx-2 text-[#1a1a28]">|</span> Deploy in &lt; 10 min
                </div>
</div>
</section>
</main>

<footer className="bg-[#050507] border-t border-[#ff0033]/10 pt-16 pb-8 px-4 relative z-10">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">

<div>
<div className="font-mono font-bold text-[#ff0033] text-sm tracking-[0.2em] mb-4">VANTAPRISM</div>
<p className="text-[#e8e8f0] font-light text-sm mb-2">From the Unknown to Intelligence.</p>
<p className="font-mono text-[0.65rem] text-[#5a5a70]">Infostealer Threat Intelligence Platform</p>
</div>

<div className="flex flex-col gap-3 font-mono text-[0.75rem]">
<div className="text-white mb-2">Platform</div>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Refract Platform</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">SpectrumAI</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Darkfield</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">API Docs</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Status Page</a>
</div>

<div className="flex flex-col gap-3 font-mono text-[0.75rem]">
<div className="text-white mb-2">Resources</div>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Blog</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Threat Reports</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Weekly Digest</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Documentation</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Changelog</a>
</div>

<div className="flex flex-col gap-3 font-mono text-[0.75rem]">
<div className="text-white mb-2">Company</div>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">About</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Careers</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Contact</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Privacy Policy</a>
<a className="text-[#5a5a70] hover:text-[#ff0033] transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="border-t border-[#1a1a28] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[0.65rem] text-[#5a5a70]">
<div>© 2026 VantaPrism Inc. All rights reserved.</div>
<div>SOC 2 Type II Certified · GDPR Compliant</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
