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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Animations
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Numbers trigger
                    const counters = entry.target.querySelectorAll('.count-up');
                    counters.forEach(counter => {
                        if (!counter.classList.contains('counted')) {
                            animateValue(counter, 0, parseFloat(counter.getAttribute('data-val')), 1500, parseInt(counter.getAttribute('data-decimals')));
                            counter.classList.add('counted');
                        }
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => observer.observe(el));

        function animateValue(obj, start, end, duration, decimals) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                let current = (progress * (end - start) + start);
                obj.innerHTML = current.toFixed(decimals);
                if (progress < 1) window.requestAnimationFrame(step);
                else obj.innerHTML = end.toFixed(decimals);
            };
            window.requestAnimationFrame(step);
        }

        // Tech Card Glow Effect
        document.querySelectorAll('.tech-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Ping Simulator
        const pingVal = document.getElementById('ping-val');
        setInterval(() => {
            if(pingVal) pingVal.innerText = Math.floor(Math.random() * 5) + 10;
        }, 2000);

        // Dashboard Live Feed logic
        const feed = document.getElementById('dash-feed');
        const logs = [
            "Parsed unstructured payload from node_B.",
            "API Limit reset. Resuming sync.",
            "Error handled gracefully: Timeout on 3rd party.",
            "Routing finalized. 14 rows updated.",
            "Generated synthesis report. Dispatching.",
            "Authenticating via OAuth2 token."
        ];
        if(feed) {
            setInterval(() => {
                const text = logs[Math.floor(Math.random() * logs.length)];
                const time = new Date().toLocaleTimeString('en-US', { hour12: false });
                const div = document.createElement('div');
                div.className = "text-[#a1a1aa] truncate opacity-0 transition-opacity duration-500";
                div.innerHTML = `<span class="text-[#27272a]">[${time}]</span> ${text}`;
                feed.insertBefore(div, feed.firstChild);
                
                // Trigger reflow for fade in
                void div.offsetWidth; 
                div.style.opacity = "1";

                if(feed.children.length > 5) feed.removeChild(feed.lastChild);
            }, 3500);
        }

        // --- WEBGL/CANVAS PARTICLE SYSTEM ---
        const canvas = document.getElementById('neural-canvas');
        if(canvas) {
            const ctx = canvas.getContext('2d');
            let particlesArray;
            let width, height;

            // Handle Resize
            function setSize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = document.querySelector('section').offsetHeight; // Match hero height
            }
            window.addEventListener('resize', setSize);
            setSize();

            // Mouse interaction
            let mouse = { x: null, y: null, radius: 150 };
            window.addEventListener('mousemove', (e) => {
                mouse.x = e.x;
                mouse.y = e.y;
            });
            window.addEventListener('mouseout', () => {
                mouse.x = undefined;
                mouse.y = undefined;
            });

            class Particle {
                constructor(x, y, directionX, directionY, size, color) {
                    this.x = x;
                    this.y = y;
                    this.directionX = directionX;
                    this.directionY = directionY;
                    this.size = size;
                    this.color = color;
                    this.baseX = x;
                    this.baseY = y;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                    ctx.fillStyle = this.color;
                    ctx.fill();
                }
                update() {
                    // Check bounds
                    if (this.x > width || this.x < 0) this.directionX = -this.directionX;
                    if (this.y > height || this.y < 0) this.directionY = -this.directionY;

                    // Move
                    this.x += this.directionX;
                    this.y += this.directionY;

                    // Mouse interaction
                    if(mouse.x != null) {
                        let dx = mouse.x - this.x;
                        let dy = mouse.y - this.y;
                        let distance = Math.sqrt(dx * dx + dy * dy);
                        if(distance < mouse.radius) {
                            // Slight push away, creating a flow effect
                            this.x -= dx * 0.01;
                            this.y -= dy * 0.01;
                        }
                    }
                    this.draw();
                }
            }

            function initParticles() {
                particlesArray = [];
                let numberOfParticles = (width * height) / 15000; 
                for (let i = 0; i < numberOfParticles; i++) {
                    let size = (Math.random() * 1.5) + 0.5;
                    let x = (Math.random() * ((width - size * 2) - (size * 2)) + size * 2);
                    let y = (Math.random() * ((height - size * 2) - (size * 2)) + size * 2);
                    let directionX = (Math.random() * 0.5) - 0.25;
                    let directionY = (Math.random() * 0.5) - 0.25;
                    // Yellow/Greenish mix
                    let color = Math.random() > 0.8 ? '#d4ff00' : '#27272a';
                    particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
                }
            }

            function connect() {
                let opacityValue = 1;
                for (let a = 0; a < particlesArray.length; a++) {
                    for (let b = a; b < particlesArray.length; b++) {
                        let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + 
                                       ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                        if (distance < (width/7) * (height/7)) {
                            opacityValue = 1 - (distance / 20000);
                            ctx.strokeStyle = `rgba(212, 255, 0, ${opacityValue * 0.1})`; // Very subtle green line
                            ctx.lineWidth = 0.5;
                            ctx.beginPath();
                            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                            ctx.stroke();
                        }
                    }
                }
            }

            function animate() {
                requestAnimationFrame(animate);
                ctx.clearRect(0, 0, width, height);
                for (let i = 0; i < particlesArray.length; i++) {
                    particlesArray[i].update();
                }
                connect();
            }

            initParticles();
            animate();
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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl border-b border-[#27272a]/50 bg-[#0a0a0b]/70">
<div className="container-clamped flex items-center justify-between h-[4.5rem] px-6">

<div className="flex items-center gap-3">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L12 22L22 2H16L12 10L8 2H2Z" fill="#d4ff00"></path>
</svg>
<span className="font-bold text-[1.25rem] tracking-tighter text-[#f4f4f5] uppercase">Vellox</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[0.875rem] font-medium">
<a className="nav-link" href="#architecture">Architecture</a>
<a className="nav-link" href="#deployment">Deployment</a>
<a className="nav-link" href="#metrics">Metrics</a>
<a className="nav-link" href="#investment">Investment</a>
</div>
<div className="flex items-center">
<a className="hidden md:inline-flex btn-cyber solid px-6 py-2.5 text-[0.8125rem] font-semibold tracking-wide uppercase" href="#initiate">
<div className="btn-cyber-fill"></div>
<span>Initialize Audit</span>
</a>
<button className="md:hidden text-[#f4f4f5] p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="w-full bg-[#121214] border-b border-[#27272a] h-[1.5rem] flex items-center px-6 overflow-hidden">
<div className="flex items-center gap-6 font-mono text-[0.625rem] text-[#a1a1aa] tracking-widest uppercase whitespace-nowrap">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#d4ff00] pulse-dot"></span> Core System Active</span>
<span className="text-[#27272a]">|</span>
<span>Latency: <span id="ping-val">12</span>ms</span>
<span className="text-[#27272a]">|</span>
<span>Nodes Deployed: 1,402</span>
</div>
</div>
</nav>
<main className="relative pt-[6rem]">

<section className="relative min-h-[95vh] flex items-center pb-[clamp(4rem,8vw,8rem)] pt-[clamp(2rem,6vw,6rem)] overflow-hidden">
<canvas id="neural-canvas"></canvas>
<div className="container-clamped px-6 relative z-10">
<div className="max-w-[55rem] reveal-stagger active">
<div className="acc-badge mb-8">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                        Protocol v3.0 Active
                    </div>
<h1 className="text-[clamp(3.5rem,7.5vw,7rem)] font-bold tracking-heading leading-[1.02] text-[#f4f4f5] mb-6">
                        Scale operations.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4ff00] to-[#8aab00]">Zero headcount.</span>
</h1>
<p className="text-[clamp(1.125rem,1.5vw,1.375rem)] text-[#a1a1aa] mb-10 max-w-2xl leading-relaxed">
                        Human limits cap your revenue. We engineer autonomous, relentless AI agents that eradicate manual bottlenecks—allowing your team to focus strictly on aggressive growth.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
<a className="btn-cyber solid px-8 py-4 text-[0.9375rem] font-semibold w-full sm:w-auto text-center" href="#initiate">
<div className="btn-cyber-fill"></div>
<span>Deploy Infrastructure →</span>
</a>
<a className="flex items-center gap-3 text-[0.9375rem] font-medium text-[#a1a1aa] hover:text-[#f4f4f5] transition-colors py-3 group" href="#metrics">
<span className="w-8 h-px bg-[#27272a] group-hover:bg-[#d4ff00] transition-colors"></span>
                            View Production Metrics
                        </a>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[#121214]/50 border-t border-[#27272a] relative">
<div className="container-clamped px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="data-line mb-6">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_01 // The Liability</span>
</div>
<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-heading text-[#f4f4f5] mb-6 leading-tight">
                            Manual execution is a tax on your margins.
                        </h2>
<p className="text-body text-[#a1a1aa] mb-8">
                            Every hour spent extracting data, routing approvals, or generating reports is an hour stolen from acquisition and strategy. If a process doesn't require empathy or complex strategy, a human shouldn't touch it.
                        </p>
<ul className="space-y-4 font-mono text-[0.8125rem]">
<li className="flex items-center gap-3 text-[#f4f4f5]">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Humans sleep. Agents execute 24/7.
                            </li>
<li className="flex items-center gap-3 text-[#f4f4f5]">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Humans make errors. Code follows absolute logic.
                            </li>
<li className="flex items-center gap-3 text-[#f4f4f5]">
<iconify-icon className="text-red-500 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Humans scale linearly. Agents scale infinitely.
                            </li>
</ul>
</div>
<div className="reveal relative">

<div className="border border-[#27272a] bg-[#0a0a0b] p-8 relative overflow-hidden clip-chamfer group">
<div className="absolute top-0 right-0 p-4 font-mono text-[0.625rem] text-[#27272a] group-hover:text-[#a1a1aa] transition-colors">ANALYSIS_COMPLETE</div>
<div className="flex justify-between items-end mb-8 border-b border-[#27272a] pb-8">
<div>
<div className="font-mono text-[0.6875rem] text-[#a1a1aa] uppercase mb-2">Cost per 10k Operations</div>
<div className="text-[3rem] font-bold text-red-500/90 leading-none tracking-tighter">$14,200</div>
</div>
<div className="text-right">
<div className="font-mono text-[0.6875rem] text-[#d4ff00] uppercase mb-2">Vellox Node Cost</div>
<div className="text-[3rem] font-bold text-[#d4ff00] leading-none tracking-tighter">$420</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#121214] p-4 border border-[#27272a]">
<div className="font-mono text-[0.625rem] text-[#a1a1aa] mb-1">ERR_RATE (HUMAN)</div>
<div className="text-[1.5rem] font-semibold text-[#f4f4f5]">8.4%</div>
</div>
<div className="bg-[#121214] p-4 border border-[#d4ff00]/30 relative overflow-hidden">
<div className="absolute inset-0 bg-[#d4ff00]/5"></div>
<div className="font-mono text-[0.625rem] text-[#d4ff00] mb-1 relative z-10">ERR_RATE (AGENT)</div>
<div className="text-[1.5rem] font-semibold text-[#f4f4f5] relative z-10"><span className="count-up" data-decimals="2" data-val="0.01">10</span>%</div>
</div>
</div>
</div>
</div>
</div>
</div>
<style>
                .clip-chamfer { clip-path: polygon(0 0, calc(100% - 1.5rem) 0, 100% 1.5rem, 100% 100%, 0 100%); }
            </style>
</section>

<section className="border-t border-[#27272a] bg-[#0a0a0b] overflow-hidden">
<div className="container-clamped px-6 py-12 flex justify-between items-center relative z-10">
<div className="data-line">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_02 // Total Visibility</span>
</div>
<div className="font-mono text-[0.625rem] text-[#27272a]">SYS_UI_RENDER // 60FPS</div>
</div>
<div className="reveal w-full max-w-[95vw] mx-auto border border-b-0 border-[#27272a] bg-[#121214] rounded-t-xl overflow-hidden shadow-[0_-20px_50px_rgba(212,255,0,0.03)] relative">

<div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] bg-[#0a0a0b]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
</div>
<div className="font-mono text-[0.6875rem] text-[#a1a1aa] flex items-center gap-2 bg-[#121214] px-3 py-1 rounded-sm border border-[#27272a]">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon> vellox.core / command-center
                    </div>
<div className="w-12"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr_20rem] h-[35rem]">

<div className="hidden lg:block border-r border-[#27272a] bg-[#0a0a0b] p-4 font-mono text-[0.75rem]">
<div className="text-[#f4f4f5] mb-6 flex items-center gap-2"><iconify-icon icon="solar:widget-5-linear"></iconify-icon> Overview</div>
<div className="text-[#a1a1aa] mb-2 hover:text-[#f4f4f5] flex items-center gap-2 cursor-pointer"><iconify-icon icon="solar:server-square-linear"></iconify-icon> Node Network</div>
<div className="text-[#d4ff00] mb-2 bg-[#d4ff00]/10 px-2 py-1.5 rounded flex items-center gap-2 cursor-pointer"><iconify-icon icon="solar:database-linear"></iconify-icon> Data Streams</div>
<div className="text-[#a1a1aa] mb-2 hover:text-[#f4f4f5] flex items-center gap-2 cursor-pointer"><iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Error Logs <span className="ml-auto bg-[#27272a] px-1 rounded text-[0.625rem]">0</span></div>
</div>

<div className="p-6 dash-grid relative bg-[#0a0a0b]">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-[1.25rem] font-semibold text-[#f4f4f5] tracking-tight">Active Data Streams</h3>
<p className="text-[0.75rem] text-[#a1a1aa] font-mono mt-1">Real-time processing throughput</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-[#27272a] text-[#f4f4f5] font-mono text-[0.625rem] rounded">1H</span>
<span className="px-2 py-1 bg-[#121214] border border-[#27272a] text-[#a1a1aa] font-mono text-[0.625rem] rounded">24H</span>
</div>
</div>

<div className="h-48 border-b border-l border-[#27272a] mb-6 relative flex items-end justify-between px-2 pb-1">

<div className="w-[3%] bg-[#27272a] h-[30%] hover:bg-[#d4ff00] transition-colors rounded-t-sm relative group"><div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 font-mono text-[0.625rem] bg-[#121214] px-1 border border-[#27272a] z-10 text-[#f4f4f5]">412</div></div>
<div className="w-[3%] bg-[#27272a] h-[45%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[25%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[60%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[55%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#d4ff00]/60 h-[80%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[40%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[70%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[65%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[35%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
<div className="w-[3%] bg-[#d4ff00] h-[95%] shadow-[0_0_15px_rgba(212,255,0,0.3)] rounded-t-sm"></div>
<div className="w-[3%] bg-[#27272a] h-[50%] hover:bg-[#d4ff00] transition-colors rounded-t-sm"></div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="bg-[#121214] border border-[#27272a] p-3 rounded-md">
<div className="font-mono text-[0.625rem] text-[#a1a1aa] mb-1">Doc Parsed</div>
<div className="text-[1.125rem] font-medium text-[#f4f4f5]">14,092</div>
</div>
<div className="bg-[#121214] border border-[#27272a] p-3 rounded-md">
<div className="font-mono text-[0.625rem] text-[#a1a1aa] mb-1">API Calls</div>
<div className="text-[1.125rem] font-medium text-[#f4f4f5]">892k</div>
</div>
<div className="bg-[#121214] border border-[#27272a] p-3 rounded-md">
<div className="font-mono text-[0.625rem] text-[#a1a1aa] mb-1">Avg Execution</div>
<div className="text-[1.125rem] font-medium text-[#d4ff00]">0.4s</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col border-l border-[#27272a] bg-[#0a0a0b]">
<div className="p-4 border-b border-[#27272a] font-mono text-[0.75rem] text-[#f4f4f5]">
                            System Output Log
                        </div>
<div className="flex-1 p-4 font-mono text-[0.6875rem] space-y-3 overflow-hidden" id="dash-feed">
<div className="text-[#a1a1aa]"><span className="text-[#27272a]">[10:42:01]</span> Extracted JSON from Invoice_892.pdf</div>
<div className="text-[#d4ff00]"><span className="text-[#27272a]">[10:42:01]</span> POST /crm/deals -&gt; 200 OK</div>
<div className="text-[#a1a1aa]"><span className="text-[#27272a]">[10:41:58]</span> Slack notification dispatched.</div>
<div className="text-[#a1a1aa]"><span className="text-[#27272a]">[10:41:45]</span> Routing lead payload to Node A.</div>
<div className="text-[#a1a1aa]"><span className="text-[#27272a]">[10:41:40]</span> Webhook received via Stripe.</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding" id="architecture">
<div className="container-clamped px-6">
<div className="reveal data-line mb-8">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_03 // Node Capabilities</span>
</div>
<div className="reveal flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-heading text-[#f4f4f5] max-w-2xl leading-tight">
                        Relentless execution engines built for your stack.
                    </h2>
<p className="text-body text-[#a1a1aa] max-w-md">
                        We don't sell software. We engineer custom automation infrastructure tailored specifically to your operational logic.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="reveal tech-card p-8 clip-chamfer min-h-[18rem] flex flex-col justify-between" id="card-trigger">
<div>
<iconify-icon className="text-[#f4f4f5] mb-6" icon="solar:document-text-linear" width="28"></iconify-icon>
<h3 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-3 tracking-tight">Unstructured Parsing</h3>
<p className="text-[0.875rem] text-[#a1a1aa] leading-relaxed">Agents that read emails, PDFs, and docs to extract structured data precisely.</p>
</div>
<div className="font-mono text-[0.625rem] text-[#27272a] uppercase mt-6">Module Active</div>
</div>

<div className="reveal tech-card p-8 clip-chamfer min-h-[18rem] flex flex-col justify-between" id="card-trigger">
<div>
<iconify-icon className="text-[#d4ff00] mb-6" icon="solar:routing-2-linear" width="28"></iconify-icon>
<h3 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-3 tracking-tight">Complex Routing</h3>
<p className="text-[0.875rem] text-[#a1a1aa] leading-relaxed">Enterprise zapier replacements handling multi-condition logic and stateful workflows.</p>
</div>
<div className="font-mono text-[0.625rem] text-[#27272a] uppercase mt-6">Module Active</div>
</div>

<div className="reveal tech-card p-8 clip-chamfer min-h-[18rem] flex flex-col justify-between" id="card-trigger">
<div>
<iconify-icon className="text-[#f4f4f5] mb-6" icon="solar:chart-square-linear" width="28"></iconify-icon>
<h3 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-3 tracking-tight">Synthesis &amp; Reporting</h3>
<p className="text-[0.875rem] text-[#a1a1aa] leading-relaxed">Aggregate disparate data silos into formatted, actionable daily briefings.</p>
</div>
<div className="font-mono text-[0.625rem] text-[#27272a] uppercase mt-6">Module Active</div>
</div>

<div className="reveal tech-card p-8 clip-chamfer min-h-[18rem] flex flex-col justify-between" id="card-trigger">
<div>
<iconify-icon className="text-[#f4f4f5] mb-6" icon="solar:user-speak-linear" width="28"></iconify-icon>
<h3 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-3 tracking-tight">Client-Facing Comms</h3>
<p className="text-[0.875rem] text-[#a1a1aa] leading-relaxed">Handle instant triage, qualification, and contextual follow-ups instantly.</p>
</div>
<div className="font-mono text-[0.625rem] text-[#27272a] uppercase mt-6">Module Active</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-[#27272a] bg-[#121214]/30 overflow-hidden">
<div className="container-clamped px-6 text-center">
<p className="font-mono text-[0.75rem] text-[#a1a1aa] uppercase tracking-widest mb-8">Seamlessly connects with your existing tech debt</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">

<div className="font-bold text-[1.25rem] tracking-tighter">Stripe</div>
<div className="font-bold text-[1.25rem] tracking-tighter">Salesforce</div>
<div className="font-bold text-[1.25rem] tracking-tighter">HubSpot</div>
<div className="font-bold text-[1.25rem] tracking-tighter flex items-center gap-1"><iconify-icon icon="solar:slack-linear"></iconify-icon> Slack</div>
<div className="font-bold text-[1.25rem] tracking-tighter">Airtable</div>
<div className="font-bold text-[1.25rem] tracking-tighter">Postgres</div>
<div className="font-bold text-[1.25rem] tracking-tighter">OpenAI</div>
</div>
</div>
</section>

<section className="section-padding" id="deployment">
<div className="container-clamped px-6">
<div className="reveal data-line mb-8">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_04 // Injection Protocol</span>
</div>
<h2 className="reveal text-[clamp(2rem,4vw,3rem)] font-semibold tracking-heading text-[#f4f4f5] mb-16 max-w-2xl leading-tight">
                    Speed to production is our primary metric.
                </h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-[2rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-[#27272a] to-transparent z-0"></div>
<div className="reveal tech-card p-6 bg-[#0a0a0b] z-10">
<div className="w-10 h-10 border border-[#27272a] bg-[#121214] flex items-center justify-center font-mono text-[0.75rem] text-[#d4ff00] mb-6">01</div>
<h4 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-2 tracking-tight">Audit &amp; Mapping</h4>
<p className="font-mono text-[0.6875rem] text-[#a1a1aa] mb-4">DAYS 1-3</p>
<p className="text-[0.875rem] text-[#a1a1aa]">We isolate the most expensive manual process and map absolute logic bounds.</p>
</div>
<div className="reveal tech-card p-6 bg-[#0a0a0b] z-10">
<div className="w-10 h-10 border border-[#27272a] bg-[#121214] flex items-center justify-center font-mono text-[0.75rem] text-[#d4ff00] mb-6">02</div>
<h4 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-2 tracking-tight">Build &amp; Sandbox</h4>
<p className="font-mono text-[0.6875rem] text-[#a1a1aa] mb-4">WEEK 2</p>
<p className="text-[0.875rem] text-[#a1a1aa]">Engineering the node, connecting APIs, and brutal edge-case testing in a safe environment.</p>
</div>
<div className="reveal tech-card p-6 bg-[#0a0a0b] z-10 border-[#d4ff00]/30 shadow-[0_0_20px_rgba(212,255,0,0.05)]">
<div className="w-10 h-10 border border-[#d4ff00] bg-[#d4ff00] flex items-center justify-center font-mono text-[0.75rem] text-[#0a0a0b] mb-6">03</div>
<h4 className="text-[1.125rem] font-semibold text-[#f4f4f5] mb-2 tracking-tight">Prod &amp; Scale</h4>
<p className="font-mono text-[0.6875rem] text-[#a1a1aa] mb-4">WEEK 3</p>
<p className="text-[0.875rem] text-[#a1a1aa]">Live deployment. Real-world monitoring. Immediate reduction in operational overhead.</p>
</div>
</div>
</div>
</section>

<section className="section-padding bg-[#121214]/50 border-t border-[#27272a]" id="metrics">
<div className="container-clamped px-6">
<div className="reveal data-line mb-8">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_05 // Empirical Data</span>
</div>
<h2 className="reveal text-[clamp(2rem,4vw,3rem)] font-semibold tracking-heading text-[#f4f4f5] mb-16 max-w-2xl leading-tight">
                    Growth requires removing human friction.
                </h2>
<div className="grid md:grid-cols-2 gap-4">

<div className="reveal tech-card p-8 bg-[#0a0a0b] clip-chamfer group">
<div className="flex justify-between items-start border-b border-[#27272a] pb-6 mb-6">
<span className="font-mono text-[0.75rem] text-[#a1a1aa] uppercase tracking-widest">SaaS Data Sync</span>
<span className="text-[#d4ff00]"><iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon></span>
</div>
<h3 className="text-[2rem] font-semibold text-[#f4f4f5] tracking-tight mb-2">90% faster onboarding</h3>
<p className="text-[0.9375rem] text-[#a1a1aa]">Replaced a 3-person team manually configuring workspaces with an instant API-driven parsing agent.</p>
</div>

<div className="reveal tech-card p-8 bg-[#0a0a0b] clip-chamfer group">
<div className="flex justify-between items-start border-b border-[#27272a] pb-6 mb-6">
<span className="font-mono text-[0.75rem] text-[#a1a1aa] uppercase tracking-widest">Legal Document Intake</span>
<span className="text-[#d4ff00]"><iconify-icon icon="solar:arrow-right-up-linear" width="24"></iconify-icon></span>
</div>
<h3 className="text-[2rem] font-semibold text-[#f4f4f5] tracking-tight mb-2">From 2hrs to 8sec</h3>
<p className="text-[0.9375rem] text-[#a1a1aa]">Automated clause extraction from 50+ page PDFs straight into structured database fields.</p>
</div>
</div>
</div>
</section>

<section className="section-padding" id="investment">
<div className="container-clamped px-6">
<div className="reveal data-line mb-8">
<span className="font-mono text-[0.6875rem] text-[#a1a1aa] tracking-[0.15em] uppercase">Phase_06 // Capital Allocation</span>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-heading text-[#f4f4f5] mb-6 leading-tight">
                            Predictable CAPEX.<br/>Infinite OPEX reduction.
                        </h2>
<p className="text-body text-[#a1a1aa] mb-8 max-w-md">
                            Stop renting humans for tasks software can do perfectly. You pay for the build once, and the node runs essentially for free forever.
                        </p>
<div className="border-l-2 border-[#d4ff00] pl-4 py-1">
<p className="text-[0.875rem] font-mono text-[#f4f4f5]">
                                THE GUARANTEE: If the agent doesn't perform to spec in 30 days, we rewrite it for free.
                            </p>
</div>
</div>
<div className="reveal tech-card bg-[#0a0a0b] p-8 md:p-10 border-[#d4ff00]/40 shadow-[0_0_40px_rgba(212,255,0,0.05)]">
<div className="acc-badge mb-6">Retained Infrastructure</div>
<h3 className="text-[1.75rem] font-semibold text-[#f4f4f5] mb-2 tracking-tight">Dedicated Ops Partner</h3>
<p className="text-[0.9375rem] text-[#a1a1aa] mb-8 pb-8 border-b border-[#27272a]">Continuous deployment and management of complex agent networks.</p>
<div className="flex items-end gap-2 mb-8">
<div className="text-[3rem] font-bold tracking-tighter text-[#f4f4f5] leading-none">$3,200</div>
<div className="text-[1rem] text-[#a1a1aa] mb-1">/month</div>
</div>
<ul className="space-y-4 mb-10 flex-grow font-mono text-[0.8125rem] text-[#f4f4f5]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#d4ff00] text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited agent deployments</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#d4ff00] text-lg" icon="solar:check-circle-linear"></iconify-icon> Active system monitoring</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#d4ff00] text-lg" icon="solar:check-circle-linear"></iconify-icon> Continuous logic iteration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#d4ff00] text-lg" icon="solar:check-circle-linear"></iconify-icon> Direct Slack channel with engineering</li>
</ul>
<a className="btn-cyber solid w-full py-4 text-[0.9375rem] font-semibold text-center block" href="#initiate">
<div className="btn-cyber-fill"></div>
<span>Secure Capacity →</span>
</a>
</div>
</div>
</div>
</section>

<section className="section-padding border-t border-[#27272a] bg-[#121214]/50 relative overflow-hidden" id="initiate">

<div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#d4ff00] opacity-[0.03] blur-[100px] pointer-events-none"></div>
<div className="container-clamped px-6 max-w-3xl mx-auto text-center relative z-10">
<div className="reveal">
<div className="inline-flex items-center justify-center mb-8">
<div className="acc-badge">System Ready</div>
</div>
<h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-heading text-[#f4f4f5] mb-6 leading-tight">
                        Stop scaling headcount.
                    </h2>
<p className="text-[1.125rem] text-[#a1a1aa] mb-10">
                        Book a 20-minute architecture mapping session. We'll identify exactly which process is costing you the most, and how to automate it. No fluff.
                    </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onsubmit="event.preventDefault();">
<input className="flex-1 bg-[#0a0a0b] border border-[#27272a] text-[0.9375rem] text-[#f4f4f5] px-5 py-4 rounded-none focus:border-[#d4ff00] focus:outline-none transition-colors placeholder:text-[#27272a]" placeholder="operator@company.com" type="email"/>
<button className="btn-cyber solid px-8 py-4 text-[0.9375rem] font-semibold sm:w-auto w-full">
<div className="btn-cyber-fill"></div>
<span>Initialize</span>
</button>
</form>
<p className="font-mono text-[0.6875rem] text-[#27272a] mt-4 uppercase">Direct to engineering. No sales reps.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#27272a] bg-[#0a0a0b] py-10">
<div className="container-clamped px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<svg fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L12 22L22 2H16L12 10L8 2H2Z" fill="#a1a1aa"></path>
</svg>
<span className="font-bold text-[1rem] tracking-tighter text-[#a1a1aa] uppercase">Vellox</span>
</div>
<div className="font-mono text-[0.6875rem] text-[#27272a] flex gap-6">
<span>SYSTEM_STATUS: NOMINAL</span>
<span className="hidden sm:inline">|</span>
<span className="hidden sm:inline">© 2025 VELLOX INFRASTRUCTURE</span>
</div>
</div>
</footer>


    </>
  );
}
