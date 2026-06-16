import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        gsap.registerPlugin(ScrollTrigger);

        // --- 1. HERO ---
        const canvas = document.getElementById('particleCanvas');
        const ctx = canvas.getContext('2d');
        let width, height; let particles = [];
        function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
        window.addEventListener('resize', resize); resize();
        class Particle {
            constructor() { this.x = (Math.random() - 0.5) * width; this.y = (Math.random() - 0.5) * height; this.z = Math.random() * 2000; }
            update() { this.z -= 4; if (this.z <= 0) { this.z = 2000; this.x = (Math.random() - 0.5) * width; this.y = (Math.random() - 0.5) * height; } }
            draw() { const p = 300 / (this.z + 0.1); const sx = width / 2 + this.x * p; const sy = height / 2 + this.y * p; const a = Math.min(1, (2000 - this.z) / 1000); ctx.fillStyle = `rgba(255, 0, 60, ${a})`; ctx.fillRect(sx, sy, 2 * p, 2 * p); }
        }
        for (let i = 0; i < 1500; i++) particles.push(new Particle());
        function animateCanvas() { ctx.fillStyle = '#030303'; ctx.fillRect(0, 0, width, height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animateCanvas); }
        animateCanvas();

        document.addEventListener('mousemove', (e) => { const x = (e.clientX/window.innerWidth - 0.5); const y = (e.clientY/window.innerHeight - 0.5); gsap.to('.monolith-wrapper', { rotationY: x*15, rotationX: 10 + (y*-10), duration: 1, ease: "power2.out" }); });
        
        const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".hero", start: "top top", end: "+=1500", pin: true, scrub: 0.5 } });
        heroTl.to(".monolith-wrapper", { z: 600, rotationY: "+=120", rotationX: "+=20", duration: 1, ease: "power1.inOut" }, 0)
              .to(".hero-title span:nth-child(1)", { x: -400, opacity: 0, blur: 20 }, 0).to(".hero-title span:nth-child(2)", { scale: 2, opacity: 0, blur: 20 }, 0).to(".hero-title span:nth-child(3)", { x: 400, opacity: 0, blur: 20 }, 0).to(".hero-subtitle", { y: 50, opacity: 0 }, 0);

        // --- 2. SPOTLIGHT ---
        const cardsContainer = document.getElementById("cards");
        cardsContainer.addEventListener("mousemove", (e) => {
            for (const card of document.getElementsByClassName("tech-card")) {
                const rect = card.getBoundingClientRect();
                card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
            }
        });

        // --- 3. PIPELINE ---
        const races = document.querySelector(".pin-wrap");
        const getScrollAmount = () => -(races.scrollWidth - window.innerWidth);
        const tween = gsap.to(races, { x: getScrollAmount, ease: "none" });
        ScrollTrigger.create({ trigger: ".pipeline-section", start: "top top", end: () => `+=${races.scrollWidth - window.innerWidth}`, pin: true, animation: tween, scrub: 1, invalidateOnRefresh: true });
        
        // Revised Parallax to utilize scale buffer
        gsap.utils.toArray('.horiz-img').forEach(img => { 
            gsap.fromTo(img, 
                { xPercent: -15 }, 
                { 
                    xPercent: 15, 
                    ease: "none", 
                    scrollTrigger: { 
                        trigger: ".pipeline-section", 
                        start: "top top", 
                        end: () => `+=${races.scrollWidth - window.innerWidth}`, 
                        scrub: true 
                    } 
                }
            ); 
        });

        // --- 4. NEURAL GRID ---
        const grid = document.getElementById('neuralGrid');
        const cols = Math.ceil(window.innerWidth / 30);
        const rows = Math.ceil((window.innerHeight * 1.5) / 30);
        const totalDots = cols * rows;

        for(let i=0; i<totalDots; i++) { 
            const dot = document.createElement('div'); 
            dot.classList.add('neural-dot'); 
            grid.appendChild(dot); 
        }

        const neuralSection = document.querySelector('.neural-section');
        neuralSection.addEventListener('mousemove', (e) => {
            const dots = document.querySelectorAll('.neural-dot'); 
            const rect = grid.getBoundingClientRect(); 
            const mx = e.clientX - rect.left; 
            const my = e.clientY - rect.top;
            
            const radius = 350;

            dots.forEach(dot => {
                const dotRect = dot.getBoundingClientRect();
                const dx = (dotRect.left - rect.left) - mx; 
                const dy = (dotRect.top - rect.top) - my;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < radius) {
                    const force = (radius - dist) / radius; 
                    const angle = Math.atan2(dy, dx);
                    const moveX = Math.cos(angle) * force * 50;
                    const moveY = Math.sin(angle) * force * 50;
                    dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
                    dot.style.background = '#555';
                } else {
                    dot.style.transform = `translate(0,0)`;
                    dot.style.background = '#333';
                }
            });
        });

        // --- 5. SYSTEM PULSE ---
        const chartArea = document.getElementById('liveChart');
        for(let i=0; i<30; i++) {
            const bar = document.createElement('div');
            bar.classList.add('chart-bar');
            bar.style.animationDelay = `${Math.random() * 2}s`;
            chartArea.appendChild(bar);
        }

        // --- 6. VELOCITY ENGINE ---
        gsap.to(".code-card", {
            scrollTrigger: { trigger: ".dev-section", start: "top 70%" },
            x: 0, opacity: 1, duration: 0.8, ease: "power2.out"
        });
        
        gsap.utils.toArray('.feature-block').forEach((block, i) => {
            gsap.to(block, {
                scrollTrigger: { trigger: block, start: "top 85%" },
                x: 0, opacity: 1, duration: 0.6, delay: i * 0.1, ease: "power2.out"
            });
        });

        // --- 7. TERMINAL ---
        const terminalOutput = document.getElementById('terminalOutput');
        const commands = [{ text: "root@obelisk:~# ./init_sequence.sh", type: "cmd" }, { text: "Loading core modules...", type: "log" }, { text: "> [OK] Quantum Mesh", type: "success" }, { text: "> [OK] Database Sharding", type: "success" }, { text: "> [OK] Global CDN Nodes", type: "success" }, { text: "System ready. Listening on port 443...", type: "log" }, { text: "root@obelisk:~# _", type: "cmd_blink" }];
        let cmdIndex = 0; let charIndex = 0; let isTyping = false;
        function typeLine() { if (cmdIndex >= commands.length) return; const lineData = commands[cmdIndex]; let lineEl = document.querySelector(`#line-${cmdIndex}`); if(!lineEl) { lineEl = document.createElement('div'); lineEl.id = `line-${cmdIndex}`; lineEl.classList.add('cmd-line'); lineEl.style.color = lineData.type === 'cmd' || lineData.type === 'cmd_blink' ? "#fff" : lineData.type === 'success' ? "var(--accent)" : "#888"; terminalOutput.appendChild(lineEl); } if(charIndex < lineData.text.length) { lineEl.textContent += lineData.text.charAt(charIndex); charIndex++; setTimeout(typeLine, Math.random() * 30 + 10); } else { cmdIndex++; charIndex = 0; setTimeout(typeLine, 200); } }
        ScrollTrigger.create({ trigger: ".terminal-section", start: "top 60%", once: true, onEnter: () => { if(!isTyping) { isTyping = true; typeLine(); } } });

        // --- 8. FOOTER ---
        ScrollTrigger.create({ trigger: document.body, start: "bottom bottom", onEnter: () => document.body.classList.add('reveal-active'), onLeaveBack: () => document.body.classList.remove('reveal-active') });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<nav>
<div className="container nav-wrap">
<div className="logo"><div className="logo-icon"></div>OBELISK</div>
<div className="menu-items">
<a href="#arch">System</a>
<a href="#pipeline">Pipeline</a>
<a href="#mesh">Network</a>
<a href="#engine">Engine</a>
<a href="#terminal">Access</a>
</div>
<a className="btn" href="#" style={{fontSize: '1rem', padding: '0.8rem 1.5rem', border: 'none', background: 'var(--accent)', color: '#000'}}>Initialize</a>
</div>
</nav>

<header className="hero">
<canvas id="particleCanvas"></canvas>
<div className="monolith-wrapper" id="monolith">
<div className="monolith">
<div className="face front">
<div className="monitor-wrap">
<span className="monitor-label">CORE TEMP</span><span className="monitor-val">42°C</span>
<div className="status-light"></div><span className="monitor-label">STATUS: ONLINE</span>
</div>
</div>
<div className="face back">
<div className="monitor-wrap"><div className="lock-icon">🔒</div><span className="monitor-val" style={{fontSize: '1.5rem'}}>LOCKED</span><span className="monitor-label" style={{marginTop: '10px'}}>AES-256</span></div>
</div>
<div className="face right">
<div style={{transform: 'rotate(90deg)'}}><span className="monitor-label" style={{textAlign: 'center'}}>NETWORK I/O</span><div className="bars-wrap"><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div><div className="bar"></div></div></div>
</div>
<div className="face left">
<span className="monitor-label" style={{marginBottom: '15px'}}>STORAGE</span>
<div className="rack-grid">
<div className="rack-light active"></div><div className="rack-light"></div><div className="rack-light active"></div><div className="rack-light"></div>
<div className="rack-light"></div><div className="rack-light active"></div><div className="rack-light"></div><div className="rack-light active"></div>
</div>
</div>
<div className="face top">SYS</div><div className="face bottom"></div>
</div>
</div>
<div className="hero-content">
<h1 className="hero-title"><span>SYSTEM</span><span className="filled">CORE</span><span>ONLINE</span></h1>
<p className="hero-subtitle">The absolute standard for decentralized computation. Zero latency. Infinite scale. Pure power.</p>
</div>
<div className="hero-actions-container">
<div className="btn-wrapper"><button className="btn">Deploy Instance</button></div>
<div className="btn-wrapper"><button className="btn" style={{borderColor: '#444', color: '#888'}}>Documentation</button></div>
</div>
</header>
<div className="stream-bar">
<div className="stream-track">
             // SYSTEM STATUS: OPTIMAL // UPTIME: 99.9999% // NODES ACTIVE: 4,021,202 // LATENCY: 12MS // THREAT LEVEL: 0 // ENCRYPTION: MIL-STD-810 // SYSTEM STATUS: OPTIMAL // UPTIME: 99.9999% //
        </div>
</div>

<section className="section-grid" id="arch">
<div className="container">
<h2 className="section-title">CAPABILITIES</h2>
<div className="card-container" id="cards">
<div className="tech-card">
<div className="icon-box">01</div>
<h3>ATOMIC SYNC</h3>
<p>Data replicated across the mesh network in nanoseconds. Physics is the only limitation.</p>
</div>
<div className="tech-card">
<div className="icon-box">02</div>
<h3>QUANTUM SHIELD</h3>
<p>Post-quantum cryptography protects your payloads from future computation threats.</p>
</div>
<div className="tech-card">
<div className="icon-box">03</div>
<h3>EDGE COMPUTE</h3>
<p>Logic executes at the edge. Your users never hit the origin server, reducing load by 99%.</p>
</div>
<div className="tech-card">
<div className="icon-box">04</div>
<h3>SELF HEALING</h3>
<p>Nodes automatically reroute traffic if a region goes dark. 100% continuity.</p>
</div>
<div className="tech-card">
<div className="icon-box">05</div>
<h3>AI OPTIMIZED</h3>
<p>Traffic patterns are analyzed by our neural core to pre-scale resources.</p>
</div>
<div className="tech-card">
<div className="icon-box">06</div>
<h3>DARK FIBER</h3>
<p>We own the pipes. Private backbone connectivity between all major metros.</p>
</div>
</div>
</div>
</section>

<section className="pipeline-section" id="pipeline">
<div className="pin-wrap-container">
<div className="pin-wrap">
<div className="horiz-card">
<img alt="Data Center" className="horiz-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4097263b-8c62-417e-b933-385d88a6ecd4_1600w.webp"/>
<div className="horiz-content">
<span className="horiz-num">01</span><h3 className="horiz-title">DATA INGESTION</h3><p className="horiz-desc">Stream petabytes of data through our firehose API. We handle deduplication and normalization.</p>
<p className="horiz-detail">Encryption is applied at the source using AES-256. We guarantee 0% packet loss during transmission, ensuring data integrity from the very first byte.</p>
</div>
</div>
<div className="horiz-card">
<img alt="Neural Network" className="horiz-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d68bc50-b233-4d73-a3be-97c5058a2e69_1600w.jpg"/>
<div className="horiz-content">
<span className="horiz-num">02</span><h3 className="horiz-title">NEURAL PROCESSING</h3><p className="horiz-desc">Our proprietary AI mesh analyzes patterns instantly to predict scaling needs.</p>
<p className="horiz-detail">Automatic load balancing kicks in milliseconds before saturation occurs. The system learns your traffic spikes and pre-warms containers proactively.</p>
</div>
</div>
<div className="horiz-card">
<img alt="Global Network" className="horiz-img" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="horiz-content">
<span className="horiz-num">03</span><h3 className="horiz-title">GLOBAL DISTRIBUTION</h3><p className="horiz-desc">Content is cached in 450+ PoPs worldwide. Your users connect to the nearest node.</p>
<p className="horiz-detail">Assets are replicated to the edge closest to your user, cutting Time-To-First-Byte (TTFB) to under 20ms regardless of geography.</p>
</div>
</div>
<div className="horiz-card" style={{borderColor: 'var(--accent)'}}>
<img alt="Execution" className="horiz-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41920389-9270-4fe4-8576-94539497c33f_1600w.jpg"/>
<div className="horiz-content">
<span className="horiz-num">04</span><h3 className="horiz-title" style={{color: 'var(--accent)'}}>EXECUTION</h3><p className="horiz-desc">The result? A system that never sleeps, never fails, and always outperforms.</p>
<p className="horiz-detail">Serverless functions run in isolation with zero cold starts, guaranteed. Your infrastructure is now a competitive advantage.</p>
</div>
</div>
</div>
</div>
</section>

<section className="neural-section" id="mesh">
<div className="neural-grid" id="neuralGrid"></div>
<div className="container neural-content">
<h2 className="neural-header">GLOBAL MESH</h2>
<p className="neural-sub">
                Our infrastructure spans 450+ Points of Presence across 120 countries. 
                Experience edge computing with zero compromises. We connect the world 
                faster than the speed of thought.
            </p>
<div className="mesh-stats">
<div className="m-stat"><h4>450+</h4><p>Edge Nodes</p></div>
<div className="m-stat"><h4>120TB</h4><p>Backbone Capacity</p></div>
<div className="m-stat"><h4>&lt;10ms</h4><p>Global Latency</p></div>
</div>
</div>
</section>

<section className="pulse-section">
<div className="container">
<div className="pulse-grid">
<div className="pulse-text">
<h2>LIVE INFRASTRUCTURE</h2>
<p>Monitor your entire stack in real-time. Our dashboard provides granular control over every aspect of your deployment, from metal to application layer.</p>
<ul style={{color: 'var(--text-dim)', lineHeight: '2'}}>
<li>&gt; Real-time latency tracking per region</li>
<li>&gt; Automated DDoS mitigation logs</li>
<li>&gt; Predictive resource allocation</li>
</ul>
<div className="stat-row">
<div className="stat-item"><h4>99.999%</h4><span>UPTIME SLA</span></div>
<div className="stat-item"><h4>&lt;5ms</h4><span>GLOBAL LATENCY</span></div>
</div>
</div>
<div className="pulse-visual">
<div className="db-card db-main">
<div className="db-header">
<span className="db-title">TRAFFIC_OUT</span><span className="db-status">LIVE</span>
</div>
<div className="chart-area" id="liveChart"></div>
</div>
<div className="db-card db-float-1">
<div className="db-header"><span className="db-title" style={{fontSize: '0.9rem'}}>CONFIG.YAML</span></div>
<div className="code-snippet">replicas: 50region: "us-east"scaling: automax_cost: inf</div>
</div>
<div className="db-card db-float-2">
<span className="db-status">HEALTH</span>
<div className="metric-big">100%</div>
<div style={{height: '4px', width: '100%', background: '#333', marginTop: '10px'}}><div style={{height: '100%', width: '100%', background: 'var(--accent)'}}></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="dev-section" id="engine">
<div className="container">
<div className="dev-header">
<h2>VELOCITY ENGINE</h2>
<p>The developer experience you've always wanted. Integrate in minutes, scale for decades.</p>
</div>
<div className="dev-grid">
<div className="dev-code-wrap">
<div className="dev-tabs"><div className="dev-tab active">Node.js</div><div className="dev-tab">Python</div><div className="dev-tab">Go</div><div className="dev-tab">Rust</div></div>
<div className="code-card">
<div className="window-controls"><span className="w-dot r"></span><span className="w-dot y"></span><span className="w-dot g"></span></div>
<div className="code-content">
<span className="c-purple">const</span> client = <span className="c-yellow">new</span> Obelisk({<br/>
                              key: <span className="c-green">"obs_live_9928_x1a"</span><br/>
                            });<br/><br/>
<span className="c-comment">// Deploy edge function</span><br/>
<span className="c-purple">await</span> client.edge.<span className="c-blue">deploy</span>({<br/>
                              region: <span className="c-green">"global"</span>,<br/>
                              memory: <span className="c-orange">1024</span>,<br/>
                              runtime: <span className="c-green">"node_20"</span><br/>
                            });<br/><br/>
                            console.<span className="c-blue">log</span>(<span className="c-green">"🚀 Deployment Active"</span>);
                        </div>
<div className="code-output">
<span className="c-comment">// Live Output Stream</span><br/>
<span style={{color: '#555'}}>10:42:01</span> <span className="c-green">✓ Validating configuration...</span><br/>
<span style={{color: '#555'}}>10:42:02</span> <span className="c-green">✓ Building container [142ms]</span><br/>
<span style={{color: '#555'}}>10:42:03</span> <span className="c-green">✓ Propagating to 450 regions</span><br/>
<span style={{color: '#555'}}>10:42:03</span> <span className="c-blue">→ Deployment: obs_882a_z9</span>
</div>
</div>
</div>
<div className="dev-features">
<div className="feature-block">
<h3>Type-Safe SDKs</h3>
<p>Full TypeScript support out of the box. Auto-complete your infrastructure configuration and catch errors before deployment.</p>
<div className="feature-tags"><span className="f-tag">TypeScript</span><span className="f-tag">Intellisense</span></div>
</div>
<div className="feature-block">
<h3>Edge Native</h3>
<p>Your code runs on V8 isolates at the edge. Cold starts are eliminated, and latency is reduced to the theoretical minimum.</p>
<div className="feature-tags"><span className="f-tag">0ms Cold Start</span><span className="f-tag">V8 Isolate</span></div>
</div>
<div className="feature-block">
<h3>Instant Rollback</h3>
<p>Made a mistake? Revert to any previous deployment version instantly with a single CLI command or API call.</p>
<div className="feature-tags"><span className="f-tag">Atomic Deploys</span><span className="f-tag">Version Control</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="terminal-section" id="terminal">
<div className="container">
<div className="terminal-window">
<div className="terminal-bg"></div>
<div className="terminal-header"><div className="dot r"></div><div className="dot y"></div><div className="dot g"></div></div>
<div className="terminal-content">
<div className="cmd-col" id="terminalOutput"></div>
<div className="pricing-col">
<h3 className="highlight">ENTERPRISE</h3>
<p style={{marginBottom: '2rem'}}>Full access to the metal. No restrictions.</p>
<ul><li><span className="check">/</span> Unlimited Bandwidth</li><li><span className="check">/</span> Dedicated VPC</li><li><span className="check">/</span> 24/7 Priority Signal</li></ul>
<div className="btn-wrapper"><a className="btn" href="#" style={{marginTop: '2rem', fontSize: '1rem'}}>Contact Sales</a></div>
</div>
</div>
</div>
</div>
</section>

<footer>
<div className="footer-content">
<div className="footer-top">
<div><div className="logo">OBELISK.</div><p>© 2025 Obelisk Systems Inc.</p></div>
<div style={{display: 'flex', gap: '2rem', fontSize: '1.2rem'}}><a href="#">Legal</a><a href="#">Twitter</a><a href="#">GitHub</a><a href="#">Status</a></div>
</div>
<div className="footer-big">OBELISK</div>
</div>
</footer>





    </>
  );
}
