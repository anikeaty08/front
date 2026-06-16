import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        /* ── FAQ ── */
        function toggleFaq(trigger) {
            const item = trigger.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const chevron = item.querySelector('.faq-chevron');
            const title = item.querySelector('span');
            const isOpen = content.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(el => {
                el.querySelector('.faq-content').classList.remove('open');
                el.querySelector('.faq-chevron').classList.remove('open');
                el.querySelector('span').classList.remove('text-white');
            });
            if (!isOpen) {
                content.classList.add('open');
                chevron.classList.add('open');
                title.classList.add('text-white');
            }
        }

        /* ── Ticker populate ── */
        (function() {
            const track = document.querySelector('.ticker-track');
            const tpl = document.getElementById('ticker-items');
            if (!track || !tpl) return;
            const html = tpl.innerHTML;
            track.innerHTML = html + html; // duplicate for seamless loop
        })();

        /* ── Canvas particle field ── */
        (function() {
            const canvas = document.getElementById('hero-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let W, H, particles = [], mouse = { x: -9999, y: -9999 };
            const COLOR = '32,215,194';
            const COUNT = 90;

            function resize() {
                W = canvas.width  = canvas.offsetWidth;
                H = canvas.height = canvas.offsetHeight;
            }
            resize();
            window.addEventListener('resize', resize);

            canvas.parentElement.addEventListener('mousemove', e => {
                const rect = canvas.getBoundingClientRect();
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            });
            canvas.parentElement.addEventListener('mouseleave', () => {
                mouse.x = -9999; mouse.y = -9999;
            });

            class Particle {
                constructor() { this.reset(true); }
                reset(init) {
                    this.x  = Math.random() * W;
                    this.y  = init ? Math.random() * H : (Math.random() > 0.5 ? -10 : H + 10);
                    this.vx = (Math.random() - 0.5) * 0.3;
                    this.vy = (Math.random() - 0.5) * 0.3;
                    this.r  = Math.random() * 1.4 + 0.4;
                    this.base_alpha = Math.random() * 0.5 + 0.15;
                    this.alpha = this.base_alpha;
                    this.pulse_phase = Math.random() * Math.PI * 2;
                    this.pulse_speed = Math.random() * 0.02 + 0.005;
                }
                update(t) {
                    this.x += this.vx;
                    this.y += this.vy;
                    this.pulse_phase += this.pulse_speed;
                    this.alpha = this.base_alpha + Math.sin(this.pulse_phase) * 0.1;
                    // mouse repel
                    const dx = this.x - mouse.x, dy = this.y - mouse.y;
                    const dist = Math.sqrt(dx*dx + dy*dy);
                    if (dist < 100) {
                        const f = (100 - dist) / 100 * 0.6;
                        this.x += (dx / dist) * f;
                        this.y += (dy / dist) * f;
                        this.alpha = Math.min(1, this.alpha + f * 0.8);
                    }
                    if (this.x < -20 || this.x > W+20 || this.y < -20 || this.y > H+20) this.reset(false);
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
                    ctx.fillStyle = `rgba(${COLOR},${this.alpha})`;
                    ctx.fill();
                }
            }

            for (let i = 0; i < COUNT; i++) particles.push(new Particle());

            function drawConnections() {
                const MAX_DIST = 110;
                for (let i = 0; i < particles.length; i++) {
                    for (let j = i+1; j < particles.length; j++) {
                        const dx = particles[i].x - particles[j].x;
                        const dy = particles[i].y - particles[j].y;
                        const d  = Math.sqrt(dx*dx + dy*dy);
                        if (d < MAX_DIST) {
                            const a = (1 - d / MAX_DIST) * 0.12;
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.strokeStyle = `rgba(${COLOR},${a})`;
                            ctx.lineWidth = 0.8;
                            ctx.stroke();
                        }
                    }
                }
            }

            let raf;
            function loop(t) {
                ctx.clearRect(0, 0, W, H);
                particles.forEach(p => p.update(t));
                drawConnections();
                particles.forEach(p => p.draw());
                raf = requestAnimationFrame(loop);
            }
            loop(0);
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 w-full z-50">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white fill-white rotate-90" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight text-white">Grady</span>
</div>
<a className="inline-flex items-center gap-2 text-base font-medium text-neutral-300 hover:text-white transition-colors" href="#">
                Try now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</header>

<main className="relative h-screen min-h-[700px] flex items-center overflow-hidden border-b border-white/5 pt-12">

<canvas id="hero-canvas"></canvas>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="orb-drift absolute top-[10%] right-[20%] w-[500px] h-[500px] rounded-full opacity-20" style={{background: 'radial-gradient(circle, #20d7c280 0%, transparent 70%)', filter: 'blur(60px)'}}></div>
<div className="orb-drift-slow absolute bottom-[5%] right-[5%] w-[350px] h-[350px] rounded-full opacity-15" style={{background: 'radial-gradient(circle, #20d7c260 0%, transparent 70%)', filter: 'blur(50px)'}}></div>
<div className="orb-drift absolute top-[50%] right-[45%] w-[250px] h-[250px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #20d7c240 0%, transparent 70%)', filter: 'blur(40px)'}}></div>
</div>

<div className="grid-layer absolute inset-0 pointer-events-none opacity-0" style={{backgroundImage: 'linear-gradient(rgba(32,215,194,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(32,215,194,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'}}></div>

<div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block" style={{perspective: '1200px'}}>

<div className="float-card relative" style={{-Rot: '-2deg'}}>
<div className="w-72 bg-[#0f0f0f] border border-white/10 rounded-xl overflow-hidden shadow-2xl" style={{boxShadow: '0 0 60px rgba(32,215,194,0.08), 0 30px 60px rgba(0,0,0,0.6)'}}>
<div className="bg-[#20d7c2]/10 border-b border-[#20d7c2]/20 px-5 py-3.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-3.5 h-3.5 text-[#20d7c2] fill-[#20d7c2] rotate-90" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-[#20d7c2] font-medium text-sm tracking-tight">Grady Assessment</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#20d7c2] opacity-80" style={{animation: 'blink 1.8s ease-in-out infinite'}}></div>
<span className="text-xs text-[#20d7c2]/60">live</span>
</div>
</div>
<div className="p-6 flex flex-col gap-5">
<div className="flex items-end justify-between">
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-1.5">Score</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white" id="hero-score">89</span>
<span className="text-base text-neutral-500">/100</span>
</div>
</div>
<div className="text-2xl font-medium text-[#20d7c2]">B+</div>
</div>
<div className="flex flex-col gap-3">
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-neutral-400">Correctness</span>
<span className="text-xs text-[#20d7c2]">23/25</span>
</div>
<div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#20d7c2] rounded-full" style={{width: '92%', transition: 'width 1.5s ease'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-neutral-400">Code Quality</span>
<span className="text-xs text-[#20d7c2]">18/20</span>
</div>
<div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#20d7c2] rounded-full" style={{width: '90%', transition: 'width 1.5s ease'}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-neutral-400">Documentation</span>
<span className="text-xs text-[#20d7c2]">15/20</span>
</div>
<div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#20d7c2] rounded-full" style={{width: '75%', transition: 'width 1.5s ease'}}></div>
</div>
</div>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-lg p-3">
<p className="text-xs text-neutral-400 leading-relaxed">All core operations work correctly. Edge case: deletion with two children has a minor issue in rebalancing.</p>
</div>
</div>
</div>
</div>

<div className="float-card absolute -left-20 -bottom-8" style={{-Rot: '3deg', animationDelay: '-3s'}}>
<div className="w-48 bg-[#0f0f0f] border border-white/10 rounded-xl p-4 shadow-xl" style={{boxShadow: '0 0 30px rgba(32,215,194,0.05), 0 20px 40px rgba(0,0,0,0.5)'}}>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-[#20d7c2]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-neutral-400">Graded today</span>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-3xl font-medium tracking-tight text-white" id="counter-num">247</span>
<span className="text-sm text-neutral-500">submissions</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400">+18 this hour</span>
</div>
</div>
</div>

<div className="float-card absolute -right-10 -top-12" style={{-Rot: '-1deg', animationDelay: '-5s'}}>
<div className="w-44 bg-[#0f0f0f] border border-white/10 rounded-xl p-4 shadow-xl" style={{boxShadow: '0 0 30px rgba(32,215,194,0.05), 0 20px 40px rgba(0,0,0,0.5)'}}>
<div className="flex items-center gap-2 mb-3">
<i className="w-4 h-4 text-[#20d7c2]" data-lucide="zap" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-neutral-400">Time saved</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-white">4.2</span>
<span className="text-sm text-neutral-500">hrs / set</span>
</div>
</div>
</div>
</div>

<div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full relative z-10">
<div className="max-w-3xl">
<p className="text-[#20d7c2] text-base font-medium mb-6">Grady Analytics</p>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-white mb-24 leading-[1.1]">
                    The fastest, most reliable way<br className="hidden sm:block"/>
                    to grade student submissions
                </h1>
<div className="flex flex-col gap-5">
<p className="text-neutral-500 text-lg">Trusted for</p>
<div className="flex flex-wrap items-center gap-8">
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-3.5 bg-white"></div>
<span className="text-white text-base">Essays</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-3.5 bg-white"></div>
<span className="text-white text-base">Code</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-3.5 bg-white"></div>
<span className="text-white text-base">Lab Reports</span>
</div>
<div className="flex items-center gap-2.5">
<div className="w-1.5 h-3.5 bg-white"></div>
<span className="text-white text-base">Problem Sets</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-12 left-6 lg:left-12">
<i className="w-6 h-6 text-[#20d7c2]" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>
</main>

<div className="overflow-hidden border-b border-white/5 bg-[#060606] py-4 relative">
<div className="absolute left-0 top-0 bottom-0 w-24 z-10" style={{background: 'linear-gradient(to right, #060606, transparent)'}}></div>
<div className="absolute right-0 top-0 bottom-0 w-24 z-10" style={{background: 'linear-gradient(to left, #060606, transparent)'}}></div>
<div className="ticker-track flex items-center gap-12 whitespace-nowrap" style={{width: 'max-content'}}>

<template id="ticker-items">
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Data Structures — 89/100 graded in 4s</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Linear Algebra Problem Set — 32 submissions processed</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Essay: Keynesian Economics — detailed feedback generated</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Lab Report: Organic Chemistry — 99% accuracy</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Machine Learning HW3 — class average 74.2%</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>History Essay: WWI Causes — 18 submissions, 2 min</span>
<span className="flex items-center gap-2 text-sm text-neutral-500"><span className="w-1 h-1 rounded-full bg-[#20d7c2] inline-block"></span>Calculus Problem Set — 94% correctness rate</span>
</template>

</div>
</div>

<section className="py-32 lg:py-48 border-b border-white/5 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#20d7c2]/5 rounded-full blur-3xl opacity-50 pointer-events-none -z-10"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="max-w-2xl mb-20 lg:mb-24">
<p className="text-[#20d7c2] text-base font-medium mb-4">Core Platform</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                    Everything faculty need.<br/>
                    Nothing they don't.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="bg-white/5 border border-white/10 rounded-xl p-10 flex flex-col gap-6 hover:bg-white/[0.07] transition-colors group">
<div className="w-12 h-12 flex items-center justify-center text-[#20d7c2]">
<i className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Save Hours on Grading</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Reduce your time and effort in forming feedback from scratch. Edit fully formed results as you wish.</p>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-10 flex flex-col gap-6 hover:bg-white/[0.07] transition-colors group">
<div className="w-12 h-12 flex items-center justify-center text-[#20d7c2]">
<i className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" data-lucide="file-pen-line" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Rich Student Feedback</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Students receive rich feedback, on questions and as a summary, faster — which helps them learn while it's fresh.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors group">
<div className="text-[#20d7c2]">
<i className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Class Performance View</h3>
<p className="text-base text-neutral-400 leading-relaxed">Gauge full class comprehension levels with a summary analytics view. Seeing common mistakes across the class allows for revisiting concepts.</p>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors group">
<div className="text-[#20d7c2]">
<i className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="upload" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">No Added Work for Faculty</h3>
<p className="text-base text-neutral-400 leading-relaxed">No complex software to learn, no need to tailor your assignments to a particular format, just faster, rigorous grading.</p>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors group">
<div className="text-[#20d7c2]">
<i className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Built for All Disciplines</h3>
<p className="text-base text-neutral-400 leading-relaxed">Grade essays, problem sets, code, lab reports, and everything in between. Grady adapts its grading rubric to any discipline.</p>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-5 hover:bg-white/[0.07] transition-colors group">
<div className="text-[#20d7c2]">
<i className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Privacy First</h3>
<p className="text-base text-neutral-400 leading-relaxed">Your data stays secure. We never train AI on student submissions, and our privacy standards exceed FERPA requirements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
<div className="lg:w-1/3 sticky top-32">
<p className="text-[#20d7c2] text-base font-medium mb-4">Adaptable Core</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                        Grade every subject
                    </h2>
<p className="text-xl text-neutral-400 leading-relaxed mb-10">
                        From python notebooks to handwritten exams, Grady can read all student assignments and all course subjects.
                    </p>
<div className="flex flex-wrap gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#20d7c2]/30 bg-[#20d7c2]/10 text-white text-base font-medium transition-all">
<i className="w-4 h-4 text-[#20d7c2]" data-lucide="monitor" strokeWidth="1.5"></i>
                            Computer Science
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-transparent text-neutral-300 text-base font-medium hover:border-white/30 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="sigma" strokeWidth="1.5"></i>
                            Math
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-transparent text-neutral-300 text-base font-medium hover:border-white/30 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="flask-conical" strokeWidth="1.5"></i>
                            Science
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-transparent text-neutral-300 text-base font-medium hover:border-white/30 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="cpu" strokeWidth="1.5"></i>
                            Engineering
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-transparent text-neutral-300 text-base font-medium hover:border-white/30 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="trending-up" strokeWidth="1.5"></i>
                            Economics
                        </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 border border-white/10 bg-transparent text-neutral-300 text-base font-medium hover:border-white/30 hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="book-open" strokeWidth="1.5"></i>
                            Humanities
                        </button>
</div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
<div className="bg-[#111] border border-white/10 overflow-hidden">
<div className="border-b border-white/5 px-5 py-4 flex items-center gap-3 bg-[#0a0a0a]">
<div className="flex items-center gap-1.5 opacity-50">
<div className="w-3 h-3 rounded-full bg-neutral-600"></div>
<div className="w-3 h-3 rounded-full bg-neutral-600"></div>
<div className="w-3 h-3 rounded-full bg-neutral-600"></div>
</div>
<span className="text-sm font-medium text-neutral-500 ml-2">student-submission.pdf</span>
</div>
<div className="p-8">
<h3 className="text-xl font-medium tracking-tight text-white mb-6">Data Structures: Binary Search Tree</h3>
<div className="bg-[#050505] border border-white/5 p-5 mb-6 overflow-x-auto">
<pre className="code-block text-base text-neutral-300 leading-relaxed"><span className="text-[#20d7c2]">class</span> <span className="text-white">BSTNode</span><span className="text-neutral-300">:</span>
    <span className="text-[#20d7c2]">def</span> <span className="text-white">__init__</span><span className="text-neutral-300">(self, key):</span>
        <span className="text-neutral-300">self.key = key</span>
        <span className="text-neutral-300">self.left = </span><span className="text-neutral-500">None</span>
        <span className="text-neutral-300">self.right = </span><span className="text-neutral-500">None</span>

<span className="text-[#20d7c2]">class</span> <span className="text-white">BST</span><span className="text-neutral-300">:</span>
    <span className="text-[#20d7c2]">def</span> <span className="text-white">__init__</span><span className="text-neutral-300">(self):</span>
        <span className="text-neutral-300">self.root = </span><span className="text-neutral-500">None</span></pre>
</div>
<div className="border border-dashed border-white/10 bg-white/5 p-8 flex flex-col items-center justify-center gap-3 text-neutral-500">
<i className="w-8 h-8 text-neutral-600" data-lucide="file" strokeWidth="1.5"></i>
<span className="text-base font-medium">Full submission processed</span>
</div>
</div>
</div>
<div className="bg-[#111] border border-white/10 overflow-hidden">
<div className="bg-[#20d7c2]/10 border-b border-[#20d7c2]/20 px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#20d7c2] fill-[#20d7c2] rotate-90" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-[#20d7c2] font-medium text-base tracking-tight">Grady Assessment</span>
</div>
<div className="w-2.5 h-2.5 bg-[#20d7c2]"></div>
</div>
<div className="p-8 flex flex-col gap-8">
<div className="flex items-end justify-between border-b border-white/10 pb-6">
<div>
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2">Overall Score</p>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-medium tracking-tight text-white">89</span>
<span className="text-xl text-neutral-500">/100</span>
</div>
</div>
<div className="text-3xl font-medium text-[#20d7c2]">B+</div>
</div>
<div className="flex flex-col gap-6">
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-base font-medium text-white">Correctness</span>
<span className="text-base text-[#20d7c2]">23/25</span>
</div>
<div className="h-1 w-full bg-white/5 mb-4">
<div className="h-full bg-[#20d7c2]" style={{width: '92%'}}></div>
</div>
<p className="text-base text-neutral-400 leading-relaxed">All core operations work correctly. Edge case: deletion of node with two children has a minor issue.</p>
</div>
<div>
<div className="flex items-center justify-between mb-3">
<span className="text-base font-medium text-white">Code Quality</span>
<span className="text-base text-[#20d7c2]">18/20</span>
</div>
<div className="h-1 w-full bg-white/5 mb-4">
<div className="h-full bg-[#20d7c2]" style={{width: '90%'}}></div>
</div>
<p className="text-base text-neutral-400 leading-relaxed">Clean structure and good naming conventions. Consider adding type hints for better readability.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="max-w-2xl mb-20 lg:mb-24">
<p className="text-[#20d7c2] text-base font-medium mb-4">Architecture</p>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                    Not simply an AI grader
                </h2>
<p className="text-xl text-neutral-400 leading-relaxed">
                    What makes Grady academically sound for the high stakes of university learning are the proprietary non-AI builds under the hood.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="flex flex-col gap-4">
<div className="text-[#20d7c2]">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">No Hallucinations</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Proprietary algorithms deliver 99% accuracy, imperative for grading and feedback.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-[#20d7c2]">
<i className="w-6 h-6" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Consistent Grading</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Ensured by our class-wide view of submissions while processing the entire cohort simultaneously.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-[#20d7c2]">
<i className="w-6 h-6" data-lucide="pencil" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Understands Imperfect</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Recognizes handwritten essays, hand-drawn graphs, and poorly scanned images flawlessly.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-[#20d7c2]">
<i className="w-6 h-6" data-lucide="lock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Enterprise Security</h3>
<p className="text-lg text-neutral-400 leading-relaxed">Isolated environments. We never train public models on your students' intellectual property.</p>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48 border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="mb-20 lg:mb-24 flex items-center justify-between">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                    Trusted by faculty
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#111] border border-white/10 p-10 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<div className="text-[#20d7c2] mb-8 font-serif text-6xl leading-none">“</div>
<p className="text-lg text-neutral-300 leading-relaxed mb-10">
                            "Its grading is broadly similar to human grading, and its ability to generate a marking rubric was excellent. I think the core of what it is doing is amazing."
                        </p>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-white/10">
<div className="w-2 h-10 bg-[#20d7c2]"></div>
<div>
<p className="text-base font-medium text-white">Alexander Paulin</p>
<p className="text-sm text-neutral-500 mt-1">UC Berkeley</p>
</div>
</div>
</div>
<div className="bg-[#111] border border-white/10 p-10 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<div className="text-[#20d7c2] mb-8 font-serif text-6xl leading-none">“</div>
<p className="text-lg text-neutral-300 leading-relaxed mb-10">
                            "Overall the grading quality is impressive. The feedback that is provided is clear, helpful and should directly promote student learning."
                        </p>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-white/10">
<div className="w-2 h-10 bg-[#20d7c2]"></div>
<div>
<p className="text-base font-medium text-white">Nakul Verma</p>
<p className="text-sm text-neutral-500 mt-1">Columbia University</p>
</div>
</div>
</div>
<div className="bg-[#111] border border-white/10 p-10 flex flex-col justify-between group hover:border-white/20 transition-colors">
<div>
<div className="text-[#20d7c2] mb-8 font-serif text-6xl leading-none">“</div>
<p className="text-lg text-neutral-300 leading-relaxed mb-10">
                            "It provides me with significant granular and high level critique that makes writing comments substantially easier. Truly, it is a godsend for that!"
                        </p>
</div>
<div className="flex items-center gap-4 pt-8 border-t border-white/10">
<div className="w-2 h-10 bg-[#20d7c2]"></div>
<div>
<p className="text-base font-medium text-white">Peggy Heffington</p>
<p className="text-sm text-neutral-500 mt-1">University of Chicago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#050505]">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="flex flex-wrap items-center justify-between gap-10">
<div className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
<i className="w-6 h-6 text-[#20d7c2]" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base font-medium uppercase tracking-widest">FERPA Compliant</span>
</div>
<div className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
<i className="w-6 h-6 text-[#20d7c2]" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-base font-medium uppercase tracking-widest">SOC 2 Type II</span>
</div>
<div className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
<i className="w-6 h-6 text-[#20d7c2]" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-base font-medium uppercase tracking-widest">GDPR Compliant</span>
</div>
<div className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors">
<i className="w-6 h-6 text-[#20d7c2]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-medium uppercase tracking-widest">WCAG 2.2 AA</span>
</div>
</div>
</div>
</section>

<section className="py-32 lg:py-48">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<div className="mb-16">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                    Frequently asked questions
                </h2>
</div>
<div className="flex flex-col border-t border-white/10" id="faq-list">
<div className="faq-item border-b border-white/10">
<button className="faq-trigger w-full flex items-center justify-between gap-4 py-8 text-left group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors">What subjects can Grady grade?</span>
<i className="faq-chevron w-5 h-5 text-neutral-500 group-hover:text-[#20d7c2] transition-colors flex-shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<p className="text-lg text-neutral-400 leading-relaxed pb-8 pr-12">Grady is built for all academic disciplines — from STEM subjects like mathematics, computer science, physics, chemistry, and engineering, to humanities and social sciences like economics, history, marketing, and finance.</p>
</div>
</div>
<div className="faq-item border-b border-white/10">
<button className="faq-trigger w-full flex items-center justify-between gap-4 py-8 text-left group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors">How much control do instructors have?</span>
<i className="faq-chevron w-5 h-5 text-neutral-500 group-hover:text-[#20d7c2] transition-colors flex-shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<p className="text-lg text-neutral-400 leading-relaxed pb-8 pr-12">Full control. Grady delivers ready-to-use grades and feedback that instructors can review, edit, and approve before anything is shared with students. You can adjust scores and rewrite comments.</p>
</div>
</div>
<div className="faq-item border-b border-white/10">
<button className="faq-trigger w-full flex items-center justify-between gap-4 py-8 text-left group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors">What happens with student data?</span>
<i className="faq-chevron w-5 h-5 text-neutral-500 group-hover:text-[#20d7c2] transition-colors flex-shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<p className="text-lg text-neutral-400 leading-relaxed pb-8 pr-12">Student data is treated with the highest level of care. Grady never uses student submissions to train models. All data is encrypted and stored in compliance with FERPA and GDPR.</p>
</div>
</div>
<div className="faq-item border-b border-white/10">
<button className="faq-trigger w-full flex items-center justify-between gap-4 py-8 text-left group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-neutral-300 group-hover:text-white transition-colors">Does it integrate with Canvas or Blackboard?</span>
<i className="faq-chevron w-5 h-5 text-neutral-500 group-hover:text-[#20d7c2] transition-colors flex-shrink-0" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="faq-content">
<p className="text-lg text-neutral-400 leading-relaxed pb-8 pr-12">Yes. Grady integrates with leading learning management systems including Canvas, Blackboard, Moodle, and Brightspace. Submission import and grade export are handled seamlessly.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-20 pb-12">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24 mb-20">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-white fill-white rotate-90" data-lucide="triangle" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight text-white">Grady</span>
</div>
<p className="text-base text-neutral-500">Accelerating academic feedback with high-precision analysis.</p>
</div>
<div className="flex flex-col gap-6">
<p className="text-sm font-medium text-white tracking-widest uppercase">Platform</p>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Features</a></li>
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Integrations</a></li>
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Security</a></li>
</ul>
</div>
<div className="flex flex-col gap-6">
<p className="text-sm font-medium text-white tracking-widest uppercase">Company</p>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="flex flex-col gap-6">
<p className="text-sm font-medium text-white tracking-widest uppercase">Legal</p>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-neutral-400 hover:text-[#20d7c2] transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-neutral-600">
<p>© 2026 Grady Inc.</p>
<div className="flex items-center gap-6 mt-4 sm:mt-0">
<a className="hover:text-neutral-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-neutral-300 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
