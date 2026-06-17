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



        // --- Initialization ---
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true
        });

        // --- Typed.js Logic ---
        new Typed('#typed-output', {
            strings: ["EXIT TRIGGER", "REVENUE LOSS", "COMPLIANCE RISK", "STAFF BURDEN"],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '_',
        });

        // --- Header Scroll Effect ---
        let lastScroll = 0;
        const header = document.getElementById('main-header');
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                header.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                header.classList.add('border-transparent');
            } else {
                header.classList.add('bg-black/80', 'backdrop-blur-md', 'border-white/5');
                header.classList.remove('border-transparent');
            }
            lastScroll = currentScroll;
        });

        // --- Custom Cursor ---
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            follower.style.left = e.clientX + 'px';
            follower.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, input').forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(1.5)';
                follower.style.borderColor = '#3b82f6';
                cursor.style.background = '#3b82f6';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.transform = 'translate(-50%, -50%) scale(1)';
                follower.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                cursor.style.background = 'white';
            });
        });

        // --- Neural Network Canvas ---
        const canvas = document.getElementById('neural-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }
            draw() {
                ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.floor(width * height / 15000);
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animateNeural() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance/100})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animateNeural);
        }

        resizeCanvas();
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
        initParticles();
        animateNeural();

        // --- Matrix Rain Footer ---
        const matrixCanvas = document.getElementById('matrix-canvas');
        const mCtx = matrixCanvas.getContext('2d');
        let mWidth, mHeight;
        
        function resizeMatrix() {
            const footer = document.querySelector('footer');
            mWidth = footer.offsetWidth;
            mHeight = footer.offsetHeight;
            matrixCanvas.width = mWidth;
            matrixCanvas.height = mHeight;
        }

        const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
        const fontSize = 14;
        let columns;
        let drops = [];

        function initMatrix() {
            resizeMatrix();
            columns = mWidth / fontSize;
            drops = [];
            for (let x = 0; x < columns; x++) {
                drops[x] = 1;
            }
        }

        function drawMatrix() {
            mCtx.fillStyle = "rgba(0, 0, 0, 0.05)";
            mCtx.fillRect(0, 0, mWidth, mHeight);
            
            mCtx.fillStyle = "#3b82f6"; // Blue text
            mCtx.font = fontSize + "px monospace";
            
            for (let i = 0; i < drops.length; i++) {
                const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
                mCtx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > mHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        window.addEventListener('load', () => {
             initMatrix();
             setInterval(drawMatrix, 50);
        });
        window.addEventListener('resize', initMatrix);

    
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
      

<div className="cursor"></div>
<div className="cursor-follower"></div>

<canvas id="neural-canvas"></canvas>

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent" id="main-header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded flex items-center justify-center text-white font-['Audiowide'] text-xs tracking-tighter">N</div>
<a className="text-xl font-['Audiowide'] text-white tracking-widest uppercase glitch" data-text="NOCTURNE" href="#">NOCTURNE</a>
</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="group relative text-sm font-medium hover:text-blue-400 transition-colors" href="#about">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-blue-400 font-['Audiowide']">[</span>
                    THE EXIT TRIGGER
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-blue-400 font-['Audiowide']">]</span>
</a>
<a className="group relative text-sm font-medium hover:text-blue-400 transition-colors" href="#compliance">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-blue-400 font-['Audiowide']">[</span>
                    COMPLIANCE AI
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-blue-400 font-['Audiowide']">]</span>
</a>
<a className="group relative text-sm font-medium hover:text-blue-400 transition-colors" href="#solutions">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-blue-400 font-['Audiowide']">[</span>
                    HARDWARE
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-blue-400 font-['Audiowide']">]</span>
</a>
</nav>
<div className="flex items-center gap-6">
<button className="text-xs font-mono text-gray-400 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded" id="loc-switch">BC / AB</button>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-black bg-white hover:bg-blue-400 transition-all duration-300" href="#contact">
                    Partner Access
                </a>
</div>
</div>
</header>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="mb-4 flex justify-center">
<div className="px-3 py-1 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono tracking-widest rounded-full flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
<span>BC HOSPITALITY STANDARD</span>
</div>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-['Audiowide'] text-white tracking-tight mb-6 leading-none">
                ELIMINATING THE <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600" id="typed-output"></span>
</h1>
<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Automated vending infrastructure. 100% compliant vape sales without staff intervention. Keep patrons inside and bar tabs open.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white/5 border border-white/20 hover:border-blue-400 text-white font-['Audiowide'] text-sm tracking-wider transition-all hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]" href="#solutions">
                    VIEW TERMINAL
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
<span className="iconify text-blue-400 w-5 h-5" data-icon="lucide:chevrons-down"></span>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div data-aos="fade-right">
<div className="flex items-center gap-2 mb-4 text-blue-400">
<span className="iconify w-5 h-5" data-icon="lucide:alert-triangle"></span>
<span className="text-xs font-mono tracking-widest">REVENUE INTELLIGENCE</span>
</div>
<h2 className="text-3xl md:text-5xl font-['Audiowide'] text-white mb-6 tracking-tight">Plug The <br/> Revenue Leak</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6">
                    It's 11:30 PM. A group of 6 is racking up a bill. One person runs out of nicotine. They suggest leaving to find a convenience store. <span className="text-white">The entire group leaves.</span>
</p>
<p className="text-gray-400 text-sm leading-relaxed mb-8">
                    The $15 vape sale is secondary. The real loss is the $150+ in drinks that group would have ordered if they stayed. We stop this exit trigger immediately.
                </p>
<div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
<div>
<h4 className="text-3xl font-['Audiowide'] text-red-500">-$185</h4>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Avg Loss Per Exit</p>
</div>
<div>
<h4 className="text-3xl font-['Audiowide'] text-green-400">Auto</h4>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Retention System</p>
</div>
</div>
</div>

<div className="h-[500px] w-full glass rounded-xl relative flex items-center justify-center overflow-hidden" data-aos="fade-left">

<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent"></div>

<div className="relative scale-90 md:scale-100">

<div className="w-[280px] h-[420px] bg-[#111] rounded-[24px] machine-casing border border-white/10 relative flex flex-col items-center p-4">

<div className="w-full h-[70%] bg-black rounded-[16px] border border-white/5 relative overflow-hidden mb-4 machine-screen-glow">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>

<div className="p-3">
<div className="flex justify-between items-center mb-4">
<div className="w-12 h-1 bg-white/20 rounded-full"></div>
<div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
<div className="h-20 bg-white/5 rounded border border-white/5"></div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-full text-[8px] text-white font-mono tracking-wider shadow-lg shadow-blue-600/20">
                                    TAP TO PAY
                                </div>
</div>
</div>

<div className="w-full h-[25%] flex justify-between items-end px-1">
<div className="w-20 h-16 bg-neutral-900 border border-white/5 rounded-lg flex items-center justify-center">
<span className="text-[8px] text-neutral-600 tracking-widest font-['Audiowide']">PUSH</span>
</div>
<div className="w-10 h-16 bg-black border border-white/5 rounded-lg flex flex-col items-center justify-center gap-2">
<span className="iconify text-neutral-600" data-icon="lucide:nfc" data-width="12"></span>
<div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-4 left-4 text-[10px] font-mono text-blue-400/70">
<p>STATUS: ONLINE</p>
<p>STOCK: 98%</p>
</div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-blue-400/70 text-right">
<p>MODE: BIOMETRIC</p>
<p>CONN: 5G SECURE</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="compliance">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16" data-aos="fade-up">
<span className="text-blue-400 text-xs font-mono tracking-widest uppercase mb-2 block">System Modules</span>
<h2 className="text-4xl md:text-5xl font-['Audiowide'] text-white tracking-tight">Compliance Engine</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-8 rounded-none border-l-2 border-l-blue-400/50 hover:border-l-blue-400 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-400/20 transition-colors">
<span className="iconify text-white group-hover:text-blue-400 w-6 h-6" data-icon="lucide:scan-face"></span>
</div>
<h3 className="text-lg font-['Audiowide'] text-white mb-3">Biometric Gate</h3>
<p className="text-xs text-gray-400 leading-relaxed">Advanced facial analysis estimates age instantly. High-res macro camera for physical ID scanning if threshold is borderline.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-purple-500/50 hover:border-l-purple-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-white group-hover:text-purple-400 w-6 h-6" data-icon="lucide:ghost"></span>
</div>
<h3 className="text-lg font-['Audiowide'] text-white mb-3">Zero Staff Load</h3>
<p className="text-xs text-gray-400 leading-relaxed">Eliminate the "can I buy a vape?" interruption. Your bartenders focus on pouring drinks, the machine handles the rest.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-green-500/50 hover:border-l-green-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
<span className="iconify text-white group-hover:text-green-400 w-6 h-6" data-icon="lucide:file-check-2"></span>
</div>
<h3 className="text-lg font-['Audiowide'] text-white mb-3">Digital Audit</h3>
<p className="text-xs text-gray-400 leading-relaxed">Every transaction is logged with timestamped verification proof, providing your venue with absolute legal defense.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-cyan-500/50 hover:border-l-cyan-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
<span className="iconify text-white group-hover:text-cyan-400 w-6 h-6" data-icon="lucide:package-check"></span>
</div>
<h3 className="text-lg font-['Audiowide'] text-white mb-3">Smart Stock</h3>
<p className="text-xs text-gray-400 leading-relaxed">Custom inventory beyond vapes. Disposable cameras, electrolytes, phone chargers. Tailored to your club's vibe.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-y border-white/5 bg-white/[0.01]" id="solutions">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 relative" data-aos="zoom-in">

<div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 border border-white/10 bg-black/50 p-2 backdrop-blur-md flex items-center justify-center h-[400px]">

<div className="relative w-64 h-full bg-neutral-900 border-x border-white/10">
<div className="absolute inset-x-0 top-10 h-40 bg-gradient-to-b from-blue-500/5 to-transparent border-y border-blue-500/20"></div>
<div className="absolute inset-x-0 bottom-10 h-20 bg-neutral-800 border-t border-white/10 flex items-center justify-center">
<div className="w-32 h-2 bg-black rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/20 to-transparent h-2 w-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none opacity-50"></div>
</div>
</div>
<div className="lg:w-1/2" data-aos="fade-left">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs font-mono text-green-500 uppercase">Ready for Deployment</span>
</div>
<h2 className="text-4xl font-['Audiowide'] text-white mb-6">Nocturne <span className="text-gray-600 text-2xl">Terminal V2</span></h2>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Display</span>
<span className="text-white font-medium text-right">21.5" HD Touch</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Verification</span>
<span className="text-white font-medium text-right">AI Biometric + Macro Cam</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Payment</span>
<span className="text-white font-medium text-right">NFC / Chip / Apple Pay</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Connectivity</span>
<span className="text-white font-medium text-right">5G / WiFi 6</span>
</div>
</div>
<div className="mt-8 flex gap-4">
<button className="flex items-center gap-2 text-sm text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors font-semibold uppercase tracking-wider">
<span className="iconify" data-icon="lucide:file-text"></span>
                        Full Specs
                    </button>
</div>
</div>
</div>
</section>

<section className="min-h-[70vh] relative flex items-center justify-center overflow-hidden" id="contact">

<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 blur-3xl animate-pulse"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6">
<h2 className="text-4xl md:text-6xl font-['Audiowide'] text-white mb-8 text-glow leading-tight" data-aos="fade-up">
                SECURE YOUR <br/> <span className="text-blue-400">MACHINE</span>
</h2>
<p className="text-gray-400 mb-10 max-w-xl mx-auto">We are currently onboarding select venues in Greater Vancouver, Victoria and Kelowna. Request a site assessment.</p>
<form className="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="w-full bg-black/50 border border-white/20 p-4 text-white text-sm font-mono focus:outline-none focus:border-blue-400 transition-colors placeholder:text-gray-600" placeholder="VENUE NAME" type="text"/>
<div className="absolute top-0 left-0 w-1 h-0 bg-blue-400 group-hover:h-full transition-all duration-300"></div>
</div>
<div className="relative group">
<input className="w-full bg-black/50 border border-white/20 p-4 text-white text-sm font-mono focus:outline-none focus:border-blue-400 transition-colors placeholder:text-gray-600" placeholder="EMAIL ADDRESS" type="email"/>
<div className="absolute top-0 left-0 w-1 h-0 bg-blue-400 group-hover:h-full transition-all duration-300"></div>
</div>
<button className="w-full bg-white text-black font-['Audiowide'] py-4 hover:bg-blue-400 hover:text-white transition-all duration-300 tracking-wider" type="submit">
                    INITIALIZE REQUEST
                </button>
</form>
</div>
</section>

<footer className="relative bg-black py-12 overflow-hidden">

<canvas id="matrix-canvas"></canvas>
<div className="absolute inset-0 bg-radial-gradient from-transparent to-black pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none h-20 bottom-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<div className="flex items-center gap-2 justify-center md:justify-start mb-2">
<span className="text-2xl font-['Audiowide'] text-white">NOCTURNE</span>
</div>
<p className="text-xs text-gray-600 font-mono">© 2024 NOCTURNE SYSTEMS BC.</p>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-blue-400 transition-colors text-xs font-mono uppercase" href="#">Privacy</a>
<a className="text-gray-500 hover:text-blue-400 transition-colors text-xs font-mono uppercase" href="#">Terms</a>
<a className="text-gray-500 hover:text-blue-400 transition-colors text-xs font-mono uppercase" href="#">Compliance</a>
</div>
</div>
</footer>






    </>
  );
}
