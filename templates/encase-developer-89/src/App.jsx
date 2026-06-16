import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Scroll Reveal Logic (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if they are inside revealed section
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) animateCounters(counters);
                    
                    // Unobserve after revealing for performance
                    if(!entry.target.classList.contains('draw-line')) {
                         observer.unobserve(entry.target);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .draw-line').forEach(el => {
            observer.observe(el);
        });

        // 2. Decimal Counter Logic
        function animateCounters(counters) {
            counters.forEach(counter => {
                if(counter.classList.contains('counted')) return;
                
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 1500; 
                let startTime = null;
                
                function updateCount(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = timestamp - startTime;
                    const percentage = Math.min(progress / duration, 1);
                    
                    // easeOutQuart
                    const ease = 1 - Math.pow(1 - percentage, 4);
                    const currentVal = target * ease;
                    
                    // Format based on decimal places in target
                    const isDecimal = target % 1 !== 0;
                    counter.innerText = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal);
                    
                    if (progress < duration) {
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = isDecimal ? target.toFixed(2) : target;
                        counter.classList.add('counted');
                    }
                }
                requestAnimationFrame(updateCount);
            });
        }

        // 3. Interactive Demo Toggle
        let isHumanView = true;
        function toggleDemo() {
            isHumanView = !isHumanView;
            
            const btnCode = document.getElementById('btn-code');
            const btnHuman = document.getElementById('btn-human');
            const viewCode = document.getElementById('view-code');
            const viewHuman = document.getElementById('view-human');

            if (isHumanView) {
                btnHuman.style.background = '#333';
                btnHuman.style.color = '#F4F4F5';
                btnCode.style.background = 'transparent';
                btnCode.style.color = '#A1A1AA';
                
                viewHuman.style.opacity = '1';
                viewHuman.style.pointerEvents = 'auto';
                viewCode.style.opacity = '0';
                viewCode.style.pointerEvents = 'none';
            } else {
                btnCode.style.background = '#333';
                btnCode.style.color = '#F4F4F5';
                btnHuman.style.background = 'transparent';
                btnHuman.style.color = '#A1A1AA';
                
                viewCode.style.opacity = '1';
                viewCode.style.pointerEvents = 'auto';
                viewHuman.style.opacity = '0';
                viewHuman.style.pointerEvents = 'none';
            }
        }

        // 4. Pricing Toggle
        let isMonthly = true;
        function togglePricing() {
            isMonthly = !isMonthly;
            const btnM = document.getElementById('btn-monthly');
            const btnY = document.getElementById('btn-yearly');
            const prices = document.querySelectorAll('.price-val');

            if(isMonthly) {
                btnM.style.background = '#333';
                btnM.style.color = '#F4F4F5';
                btnY.style.background = 'transparent';
                btnY.style.color = '#A1A1AA';
            } else {
                btnY.style.background = '#333';
                btnY.style.color = '#F4F4F5';
                btnM.style.background = 'transparent';
                btnM.style.color = '#A1A1AA';
            }

            prices.forEach(price => {
                const target = isMonthly ? price.getAttribute('data-monthly') : price.getAttribute('data-yearly');
                // Simple animation
                price.style.opacity = 0;
                setTimeout(() => {
                    price.innerText = target;
                    price.style.opacity = 1;
                }, 150);
            });
        }

        // 5. WebGL Background Simulation (Canvas Particles reacting to mouse)
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        function initCanvas() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            particles = [];
            const particleCount = (width * height) / 15000; // Density
            
            for(let i=0; i<particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5 + 0.5,
                    baseX: Math.random() * width,
                    baseY: Math.random() * height,
                    density: (Math.random() * 30) + 1
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connections
            for(let i=0; i<particles.length; i++) {
                // Mouse interaction
                let dx = mouse.x - particles[i].x;
                let dy = mouse.y - particles[i].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (mouse.radius - distance) / mouse.radius;
                    const directionX = forceDirectionX * force * particles[i].density;
                    const directionY = forceDirectionY * force * particles[i].density;
                    
                    particles[i].x -= directionX;
                    particles[i].y -= directionY;
                } else {
                    if(particles[i].x !== particles[i].baseX) {
                        let dx = particles[i].x - particles[i].baseX;
                        particles[i].x -= dx/10;
                    }
                    if(particles[i].y !== particles[i].baseY) {
                        let dy = particles[i].y - particles[i].baseY;
                        particles[i].y -= dy/10;
                    }
                }

                ctx.fillStyle = '#00FF94';
                ctx.beginPath();
                ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();

                // Lines
                for(let j=i; j<particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if(distance < 80) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 255, 148, ${0.2 - distance/80})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.closePath();
                    }
                }
            }
            requestAnimationFrame(animateCanvas);
        }

        initCanvas();
        animateCanvas();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-[#333]/30 bg-[#0A0A0A]/80 backdrop-blur-md transition-all duration-300">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)] flex h-20 items-center justify-between">
<a className="font-display text-2xl font-bold tracking-[-0.05em] text-[#F4F4F5]" href="#">ENCASE</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#A1A1AA]">
<a className="hover:text-[#F4F4F5] transition-colors" href="#product">Product</a>
<a className="hover:text-[#F4F4F5] transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-[#F4F4F5] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[#F4F4F5] transition-colors" href="#docs">Docs</a>
</div>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-flex px-6 py-2.5 font-semibold text-sm rounded-lg border border-[#333] hover:border-[#00FF94] hover:text-[#00FF94] transition-all duration-200" href="#cta">Sign In</a>
<a className="px-6 py-2.5 font-semibold text-[#0A0A0A] bg-[#00FF94] rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200" href="#cta">Get Wrapped</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<canvas className="absolute inset-0 z-0 opacity-30" id="hero-canvas"></canvas>
<div className="relative z-10 mx-auto max-w-[clamp(65rem,90vw,90rem)] w-full px-[clamp(1rem,5vw,4rem)] grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-8 flex flex-col justify-center reveal">
<span className="font-mono text-xs uppercase tracking-widest text-[#00FF94] mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#00FF94] animate-pulse"></span>
                    /001/ Initialization
                </span>
<h1 className="font-display font-semibold text-[#F4F4F5] leading-[0.9] tracking-[-0.04em] mb-8" style={{fontSize: 'clamp(3.5rem, 8vw, 7rem)'}}>
                    Stop Wrestling<br/>
<span className="text-[#A1A1AA]">With Code.</span><br/>
                    Start Shipping.
                </h1>
<p className="font-body text-[#A1A1AA] max-w-xl mb-10 leading-relaxed" style={{fontSize: 'clamp(1rem, 1.5vw, 1.25rem)'}}>
                    The human-first wrapper for complex developer tools. Deploy in minutes, not months. Protect your team from infrastructure fatigue.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,2vw,1.25rem)] font-semibold text-[#0A0A0A] bg-[#00FF94] rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-[0_0_30px_rgba(0,255,148,0.2)]" href="#pricing">
                        Start My Free Trial
                    </a>
<a className="px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,2vw,1.25rem)] font-semibold text-[#F4F4F5] border border-[#333] bg-[#121212]/50 rounded-lg hover:border-[#F4F4F5] transition-all duration-200 flex items-center gap-2 group" href="#demo">
                        Watch Demo <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<p className="font-mono text-xs text-[#A1A1AA] mt-6 flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> No credit card • Cancel anytime
                </p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10"></div>
</section>

<section className="border-y border-[#333]/50 bg-[#0A0A0A] relative z-20 overflow-hidden py-12">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)] mb-6">
<p className="font-mono text-xs uppercase tracking-widest text-[#555] text-center">Trusted By Growth Teams At</p>
</div>

<div className="flex overflow-hidden relative w-full mb-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
<div className="animate-marquee flex items-center space-x-24 pr-24 text-[#333]">

<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:box-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:planet-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:ghost-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:code-square-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:database-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:layers-linear" width="48"></iconify-icon>

<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:box-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:planet-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:ghost-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:code-square-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:database-linear" width="48"></iconify-icon>
<iconify-icon className="hover:text-[#F4F4F5] transition-colors" height="48" icon="solar:layers-linear" width="48"></iconify-icon>
</div>
</div>

<div className="border-t border-[#1a1a1a] py-3 bg-[#00FF94] text-[#0A0A0A] overflow-hidden flex transform -rotate-1 scale-105">
<div className="animate-marquee-slow flex whitespace-nowrap font-mono text-sm font-bold tracking-widest uppercase">
<span className="mx-4">SECURE</span> • <span className="mx-4">COMPLIANT</span> • <span className="mx-4">SCALABLE</span> • <span className="mx-4">HUMAN-FIRST</span> • 
                <span className="mx-4">SECURE</span> • <span className="mx-4">COMPLIANT</span> • <span className="mx-4">SCALABLE</span> • <span className="mx-4">HUMAN-FIRST</span> •
                <span className="mx-4">SECURE</span> • <span className="mx-4">COMPLIANT</span> • <span className="mx-4">SCALABLE</span> • <span className="mx-4">HUMAN-FIRST</span> •
                <span className="mx-4">SECURE</span> • <span className="mx-4">COMPLIANT</span> • <span className="mx-4">SCALABLE</span> • <span className="mx-4">HUMAN-FIRST</span>
</div>
</div>
</section>

<section className="py-[clamp(6rem,12vw,12rem)] relative" id="product">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,4rem)] items-center">
<div className="lg:col-span-5 reveal order-2 lg:order-1 relative">

<div className="draw-line h-px bg-[#333] w-full mb-8"></div>
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/003/ The Bottleneck</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-6" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.1'}}>
                        Your Developers Are Bottlenecked.
                    </h2>
<p className="font-body text-[#A1A1AA] mb-8" style={{fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'}}>
                        Every hour spent configuring infrastructure is an hour lost on product. Your non-technical team is waiting. Don't let bare-metal code slow down your aggressive growth trajectory.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-sm text-[#00FF94] hover:text-[#F4F4F5] transition-colors border-b border-[#00FF94] hover:border-[#F4F4F5] pb-1" href="#solutions">
                        See The Solution <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 reveal order-1 lg:order-2 relative h-[clamp(300px,40vw,500px)] rounded-xl border border-[#333] bg-[#121212] overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-8 font-mono text-xs text-[#333] h-full overflow-hidden flex flex-col gap-2 opacity-50">
<p>function executeComplexTask(config: ServerConfig) {</p>
<p className="pl-4">const cluster = new KubernetesCluster(config);</p>
<p className="pl-4">cluster.init().then(() =&gt; {</p>
<p className="pl-8">const pods = cluster.getNodes('worker');</p>
<p className="pl-8">pods.forEach(pod =&gt; pod.deploy(manifest));</p>
<p className="pl-4">}).catch(err =&gt; {</p>
<p className="pl-8 text-red-900">throw new FatalError('Infrastructure failed to sync');</p>
<p className="pl-4">});</p>
<p>}</p>

<div className="absolute inset-0 bg-[#0A0A0A]/50 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-6xl text-[#333]" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] bg-[#0A0A0A]" id="solutions">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)]">
<div className="reveal mb-16 text-center max-w-3xl mx-auto">
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/004/ Architecture</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-4" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)'}}>
                    Wrapped For Performance.
                </h2>
<p className="font-body text-[#A1A1AA]" style={{fontSize: 'clamp(1rem, 1.2vw, 1.125rem)'}}>
                    Three layers of rigid protection between your team and the underlying complexity.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">

<div className="md:col-span-4 reveal rounded-[clamp(0.5rem,1vw,1rem)] border border-[#1a1a1a] bg-[#121212] p-[clamp(1.5rem,3vw,2.5rem)] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,148,0.05)] hover:border-[#00FF94]/50 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF94]/5 rounded-full blur-3xl group-hover:bg-[#00FF94]/10 transition-colors"></div>
<iconify-icon className="text-4xl text-[#F4F4F5] mb-6 group-hover:text-[#00FF94] transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="font-display text-xl font-semibold mb-3">Strict Isolation</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">Containers are sealed via automated policies. Zero direct access required by human operators.</p>
</div>

<div className="md:col-span-4 md:mt-12 reveal rounded-[clamp(0.5rem,1vw,1rem)] border border-[#1a1a1a] bg-[#121212] p-[clamp(1.5rem,3vw,2.5rem)] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,148,0.05)] hover:border-[#00FF94]/50 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF94]/5 rounded-full blur-3xl group-hover:bg-[#00FF94]/10 transition-colors"></div>
<iconify-icon className="text-4xl text-[#F4F4F5] mb-6 group-hover:text-[#00FF94] transition-colors" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="font-display text-xl font-semibold mb-3">Kinetic Deployment</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">Bypass standard build pipelines. Encase injects updates directly into the execution layer in ms.</p>
</div>

<div className="md:col-span-4 md:mt-24 reveal rounded-[clamp(0.5rem,1vw,1rem)] border border-[#1a1a1a] bg-[#121212] p-[clamp(1.5rem,3vw,2.5rem)] hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,255,148,0.05)] hover:border-[#00FF94]/50 transition-all duration-300 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF94]/5 rounded-full blur-3xl group-hover:bg-[#00FF94]/10 transition-colors"></div>
<iconify-icon className="text-4xl text-[#F4F4F5] mb-6 group-hover:text-[#00FF94] transition-colors" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="font-display text-xl font-semibold mb-3">Human Interfaces</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">Complex cron jobs and webhooks translated into simple toggles and dropdowns for growth teams.</p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] relative" id="demo">
<div className="draw-line h-px bg-[#333] w-full absolute top-0"></div>
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)]">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal gap-6">
<div>
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/005/ Interface</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-4" style={{fontSize: 'clamp(2rem, 4vw, 3rem)'}}>
                        See It In Action.
                    </h2>
<p className="font-body text-[#A1A1AA] max-w-md">Toggle the switch. Watch the infrastructure complexity disappear instantly.</p>
</div>

<div className="flex gap-8 text-right font-mono border-l border-[#333] pl-8">
<div>
<p className="text-[10px] text-[#555] uppercase mb-1">Setup Time (Mins)</p>
<p className="text-2xl text-[#00FF94] counter" data-target="0.02">0.00</p>
</div>
<div>
<p className="text-[10px] text-[#555] uppercase mb-1">Lines of Code</p>
<p className="text-2xl text-[#F4F4F5]">0</p>
</div>
</div>
</div>

<div className="relative w-full rounded-xl border border-[#333] bg-[#0A0A0A] overflow-hidden reveal p-1 shadow-2xl">

<div className="absolute top-4 right-4 z-20 bg-[#121212] border border-[#333] rounded-full p-1 flex cursor-pointer" id="demo-toggle" onclick="toggleDemo()">
<div className="px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-300" id="btn-code" style={{background: 'transparent', color: '#A1A1AA'}}>RAW CODE</div>
<div className="px-4 py-1.5 rounded-full text-xs font-mono transition-colors duration-300 bg-[#333] text-[#F4F4F5]" id="btn-human">ENCASE</div>
</div>

<div className="relative h-[clamp(400px,50vh,600px)] w-full rounded-lg overflow-hidden bg-[#121212]">

<div className="absolute inset-0 p-8 font-mono text-sm leading-relaxed overflow-y-auto transition-opacity duration-500 opacity-0 pointer-events-none" id="view-code">
<pre><code className="text-[#555]">
<span className="text-purple-400">import</span> { AWSProvider } <span className="text-purple-400">from</span> '@terraform/aws';
<span className="text-purple-400">import</span> { KubernetesCluster } <span className="text-purple-400">from</span> './infra/k8s';

<span className="text-blue-400">const</span> config = {
  region: <span className="text-green-400">'us-east-1'</span>,
  vpc: {
    cidr: <span className="text-green-400">'10.0.0.0/16'</span>,
    subnets: [<span className="text-green-400">'10.0.1.0/24'</span>, <span className="text-green-400">'10.0.2.0/24'</span>]
  },
  nodes: {
    type: <span className="text-green-400">'t3.xlarge'</span>,
    min: <span className="text-orange-400">3</span>,
    max: <span className="text-orange-400">10</span>
  }
};

<span className="text-blue-400">export async function</span> <span className="text-yellow-200">deployInfrastructure</span>() {
  <span className="text-blue-400">try</span> {
    <span className="text-blue-400">const</span> provider = <span className="text-blue-400">new</span> AWSProvider(config.region);
    <span className="text-blue-400">await</span> provider.authenticate();
    
    <span className="text-blue-400">const</span> cluster = <span className="text-blue-400">new</span> KubernetesCluster(config);
    <span className="text-blue-400">await</span> cluster.provision();
    <span className="text-blue-400">await</span> cluster.setupNetworking(config.vpc);
    
    <span className="text-blue-400">return</span> cluster.getEndpoint();
  } <span className="text-blue-400">catch</span> (error) {
    console.<span className="text-yellow-200">error</span>(<span className="text-green-400">'Deployment failed:'</span>, error);
    process.exit(<span className="text-orange-400">1</span>);
  }
}
                        </code></pre>
</div>

<div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center items-center transition-opacity duration-500 opacity-100 bg-[radial-gradient(circle_at_center,rgba(0,255,148,0.03)_0%,transparent_100%)]" id="view-human">
<div className="w-full max-w-md bg-[#0A0A0A] border border-[#333] rounded-xl p-6 shadow-2xl">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-[#333]">
<h4 className="font-display font-semibold">Production Cluster</h4>
<span className="px-2 py-1 rounded bg-[#00FF94]/10 text-[#00FF94] text-xs font-mono">US-EAST-1</span>
</div>
<div className="space-y-6">
<div>
<label className="text-xs text-[#A1A1AA] uppercase tracking-wider mb-2 block">Compute Power</label>
<div className="h-2 bg-[#333] rounded-full overflow-hidden">
<div className="h-full bg-[#00FF94] w-[70%]"></div>
</div>
<div className="flex justify-between text-xs mt-1 font-mono text-[#555]">
<span>Min: 3</span>
<span>Current: 7</span>
<span>Max: 10</span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium">Auto-Scaling</p>
<p className="text-xs text-[#555]">Manage traffic spikes automatically</p>
</div>
<div className="w-10 h-6 bg-[#00FF94] rounded-full relative cursor-pointer">
<div className="w-4 h-4 bg-[#0A0A0A] rounded-full absolute top-1 right-1"></div>
</div>
</div>
<button className="w-full py-3 bg-[#121212] border border-[#333] hover:border-[#00FF94] text-[#F4F4F5] rounded-lg text-sm font-semibold transition-colors mt-4">
                                    Deploy Changes
                                </button>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center reveal">
<a className="inline-flex px-6 py-3 font-semibold text-[#0A0A0A] bg-[#00FF94] rounded-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200" href="#cta">
                    Try It Yourself
                </a>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] bg-[#0A0A0A] border-y border-[#1a1a1a]">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)]">
<div className="reveal mb-12">
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/006/ Proof</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-4" style={{fontSize: 'clamp(2rem, 4vw, 3rem)'}}>
                    Humans Love Encase.
                </h2>
<p className="font-body text-[#A1A1AA]">Don't take our word for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 masonry-grid">

<div className="reveal rounded-xl border border-[#1a1a1a] bg-[#121212] p-8 relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#333]" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body italic text-[#F4F4F5] mb-8 relative z-10 text-lg">"We bypassed three months of DevOps hiring and shipped our core product in two weeks. Encase literally saved our runway."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#333] relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]"></div>
</div>
<div>
<p className="font-semibold text-sm">Sarah Jenkins</p>
<p className="text-xs text-[#A1A1AA] font-mono">CTO, Nebula</p>
</div>
</div>
</div>

<div className="reveal rounded-xl border border-[#1a1a1a] bg-[#121212] p-8 relative md:mt-8">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#333]" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body italic text-[#F4F4F5] mb-8 relative z-10 text-lg">"The marketing team can now spin up isolated staging environments without pinging engineering. It's magic."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#333] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]"></div>
</div>
<div>
<p className="font-semibold text-sm">David Chen</p>
<p className="text-xs text-[#A1A1AA] font-mono">VP Eng, Formless</p>
</div>
</div>
</div>

<div className="reveal rounded-xl border border-[#1a1a1a] bg-[#121212] p-8 relative lg:mt-16">
<iconify-icon className="absolute top-6 right-6 text-4xl text-[#333]" icon="solar:quote-left-linear"></iconify-icon>
<p className="font-body italic text-[#F4F4F5] mb-8 relative z-10 text-lg">"I hate configuring AWS. Encase hides it all behind a beautiful UI while keeping the underlying power intact."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#333] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.5%22/%3E%3C/svg%3E')]"></div>
</div>
<div>
<p className="font-semibold text-sm">Elena Rostova</p>
<p className="text-xs text-[#A1A1AA] font-mono">Founder, Voxel</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)]" id="pricing">
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)]">
<div className="text-center reveal mb-16">
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/007/ Investment</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-4" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)'}}>
                    Simple Pricing. No Surprises.
                </h2>
<p className="font-body text-[#A1A1AA] mb-8">Pay for value, not complexity.</p>

<div className="inline-flex bg-[#121212] border border-[#333] rounded-full p-1 cursor-pointer" onclick="togglePricing()">
<div className="px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-[#333] text-[#F4F4F5]" id="btn-monthly">Monthly</div>
<div className="px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-300 text-[#A1A1AA]" id="btn-yearly">Yearly (-20%)</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="reveal rounded-xl border border-[#333] bg-[#121212] p-8 hover:border-[#555] transition-colors">
<h3 className="font-mono text-sm text-[#A1A1AA] uppercase mb-4">Standard</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-display font-semibold">$</span>
<span className="text-5xl font-display font-bold price-val" data-monthly="49" data-yearly="39">49</span>
<span className="text-[#A1A1AA]">/mo</span>
</div>
<p className="text-sm text-[#A1A1AA] mb-8 pb-8 border-b border-[#333]">Perfect for indie hackers and small teams starting out.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Up to 5 projects</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Standard support</li>
<li className="flex items-center gap-3 text-[#555]"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> Custom domains</li>
</ul>
<button className="w-full py-3 rounded-lg border border-[#333] text-[#F4F4F5] font-semibold hover:bg-[#333] transition-colors">Select Plan</button>
</div>

<div className="reveal rounded-xl border-2 border-[#00FF94] bg-[#121212] p-8 shadow-[0_0_40px_rgba(0,255,148,0.1)] md:scale-105 relative z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00FF94] text-[#0A0A0A] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
<h3 className="font-mono text-sm text-[#00FF94] uppercase mb-4">Pro</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-display font-semibold">$</span>
<span className="text-5xl font-display font-bold price-val" data-monthly="129" data-yearly="99">129</span>
<span className="text-[#A1A1AA]">/mo</span>
</div>
<p className="text-sm text-[#A1A1AA] mb-8 pb-8 border-b border-[#333]">For growth teams that need scale and reliability.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Unlimited projects</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Priority support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Custom domains</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Role-based access</li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#00FF94] text-[#0A0A0A] font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform">Select Plan</button>
</div>

<div className="reveal rounded-xl border border-[#333] bg-[#121212] p-8 hover:border-[#555] transition-colors">
<h3 className="font-mono text-sm text-[#A1A1AA] uppercase mb-4">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-display font-bold">Custom</span>
</div>
<p className="text-sm text-[#A1A1AA] mb-8 pb-8 border-b border-[#333]">Dedicated infrastructure and SLA for large orgs.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> Dedicated clusters</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> 24/7 Phone support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FF94]" icon="solar:check-circle-linear"></iconify-icon> VPC Peering</li>
</ul>
<button className="w-full py-3 rounded-lg border border-[#333] text-[#F4F4F5] font-semibold hover:bg-[#333] transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-[clamp(4rem,8vw,8rem)] bg-[#121212]/50 border-t border-[#1a1a1a]" id="docs">
<div className="mx-auto max-w-3xl px-[clamp(1rem,5vw,4rem)]">
<div className="reveal mb-12 text-center">
<span className="font-mono text-xs uppercase tracking-widest text-[#555] mb-4 block">/008/ Knowledge</span>
<h2 className="font-display font-semibold tracking-[-0.03em] mb-4" style={{fontSize: 'clamp(2rem, 4vw, 3rem)'}}>
                    Questions? We Have Answers.
                </h2>
<p className="font-body text-[#A1A1AA]">Everything you need to know about wrapping your stack.</p>
</div>
<div className="space-y-4 reveal">

<details className="group border-b border-[#333] pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-4 text-[#F4F4F5] font-semibold hover:text-[#00FF94] transition-colors">
                        Does Encase add latency to my application?
                        <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#A1A1AA] text-sm leading-relaxed pb-4 pt-2">
                        No. Encase operates purely at the control-plane level. Once your infrastructure is provisioned, traffic flows directly to your servers without passing through our systems.
                    </p>
</details>

<details className="group border-b border-[#333] pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-4 text-[#F4F4F5] font-semibold hover:text-[#00FF94] transition-colors">
                        Can I export the raw code if I decide to leave?
                        <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#A1A1AA] text-sm leading-relaxed pb-4 pt-2">
                        Yes. We believe in avoiding vendor lock-in. You can eject from Encase at any time and download standard Terraform/Kubernetes manifests of your current setup.
                    </p>
</details>

<details className="group border-b border-[#333] pb-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-4 text-[#F4F4F5] font-semibold hover:text-[#00FF94] transition-colors">
                        What cloud providers do you support?
                        <span className="transition duration-300 group-open:-rotate-180">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="text-[#A1A1AA] text-sm leading-relaxed pb-4 pt-2">
                        Currently, we support AWS, Google Cloud, and DigitalOcean. Azure support is in beta and rolling out next quarter.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,10rem)] bg-[#00FF94] relative overflow-hidden" id="cta">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_60%)] pointer-events-none mix-blend-overlay"></div>
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)] text-center relative z-10 reveal">
<span className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A] mb-4 block font-bold">/009/ Action</span>
<h2 className="font-display font-bold tracking-[-0.04em] text-[#0A0A0A] mb-6" style={{fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1'}}>
                Ready To Ship?
            </h2>
<p className="font-body text-[#0A0A0A]/80 mb-10 max-w-lg mx-auto font-medium" style={{fontSize: 'clamp(1rem, 1.2vw, 1.25rem)'}}>
                Join 10,000+ teams shipping faster with Encase. Enter your email to get instant access.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative" onsubmit="event.preventDefault();">
<input className="flex-1 px-4 py-3 rounded-lg border border-[#0A0A0A]/20 bg-[#F4F4F5]/90 text-[#0A0A0A] placeholder-[#0A0A0A]/50 focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] font-body" placeholder="name@company.com" required="" type="email"/>
<button className="px-8 py-3 rounded-lg bg-[#0A0A0A] text-[#00FF94] font-semibold hover:scale-[1.03] active:scale-[0.98] transition-transform flex justify-center items-center gap-2 group" type="submit">
                    Get My Access <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#333] pt-20 pb-10 relative overflow-hidden">

<div className="absolute bottom-[-10%] left-0 w-full text-center pointer-events-none select-none z-0">
<span className="font-display font-bold text-[#1a1a1a] tracking-tighter" style={{fontSize: 'clamp(10rem, 25vw, 25rem)', lineHeight: '0.8'}}>ENCASE</span>
</div>
<div className="mx-auto max-w-[clamp(65rem,90vw,90rem)] px-[clamp(1rem,5vw,4rem)] relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1">
<a className="font-display text-2xl font-bold tracking-[-0.05em] text-[#F4F4F5] mb-4 block" href="#">ENCASE</a>
<p className="text-[#555] text-sm font-mono mb-6">Complex Code, Wrapped for Humans.</p>
<a className="inline-flex px-4 py-2 text-xs font-mono border border-[#333] rounded hover:border-[#F4F4F5] transition-colors text-[#A1A1AA]" href="#">
                        Contact Support
                    </a>
</div>
<div>
<h4 className="font-semibold text-[#F4F4F5] mb-4">Product</h4>
<ul className="space-y-2 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#F4F4F5] mb-4">Company</h4>
<ul className="space-y-2 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#00FF94] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#00FF94] transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#F4F4F5] mb-4">Updates</h4>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="w-full bg-[#121212] border border-[#333] rounded px-3 py-2 text-sm text-[#F4F4F5] focus:border-[#00FF94] focus:outline-none" placeholder="Email address" type="email"/>
<button className="bg-[#333] text-[#F4F4F5] px-3 py-2 rounded hover:bg-[#00FF94] hover:text-[#0A0A0A] transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#555] font-mono">
<p>Encase © 2024. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-[#F4F4F5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="hover:text-[#F4F4F5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:hashtag-square-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
