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

        // --- Language & Typed.js Logic ---
        const translations = {
            en: {
                nav_about: "ABOUT",
                nav_services: "SERVICES",
                nav_model: "NOVA-X",
                btn_talk: "Let's Talk",
                status_online: "SYSTEM ONLINE v2.0",
                hero_prefix: "DEFINING",
                hero_strings: ["FUTURE", "INTELLIGENCE", "REALITY", "EVOLUTION"],
                hero_desc: "Pioneering the next generation of neural architecture. We build digital consciousness for the enterprise of tomorrow.",
                explore_btn: "EXPLORE NOVA-X",
                subtitle_about: "CORE ARCHITECTURE",
                title_about: "Beyond Human Capabilities",
                text_about_1: "NOVA.AI isn't just an algorithm; it's a synthetic evolution. We integrate deep learning neural networks with real-time processing to create systems that don't just compute—they understand.",
                text_about_2: "From predictive analytics in finance to autonomous robotics in manufacturing, our neural cores are designed to adapt, learn, and optimize without human intervention.",
                subtitle_services: "Capabilities",
                title_services: "System Modules",
                service_1_title: "Neural Process",
                service_1_desc: "Self-improving algorithms that mimic human synaptic structures for complex decision making.",
                service_2_title: "Cyber Security",
                service_2_desc: "Predictive threat analysis using AI to identify vulnerabilities before they are exploited.",
                service_3_title: "Robotics OS",
                service_3_desc: "Low-latency operating systems designed for autonomous movement and spatial awareness.",
                service_4_title: "Big Data",
                service_4_desc: "Processing petabytes of unstructured data to extract actionable insights in milliseconds.",
                specs_btn: "View Full Specs",
                contact_sub: "Ready to integrate superior intelligence into your ecosystem? Initialize the sequence now.",
                init_btn: "INITIALIZE CONTACT"
            },
            ru: {
                nav_about: "О НАС",
                nav_services: "УСЛУГИ",
                nav_model: "NOVA-X",
                btn_talk: "Обсудить",
                status_online: "СИСТЕМА АКТИВНА v2.0",
                hero_prefix: "СОЗДАВАЯ",
                hero_strings: ["БУДУЩЕЕ", "ИНТЕЛЛЕКТ", "РЕАЛЬНОСТЬ", "ЭВОЛЮЦИЮ"],
                hero_desc: "Разработка нейронной архитектуры нового поколения. Мы создаем цифровое сознание для предприятий завтрашнего дня.",
                explore_btn: "ИЗУЧИТЬ NOVA-X",
                subtitle_about: "АРХИТЕКТУРА ЯДРА",
                title_about: "За Пределами Человеческого",
                text_about_1: "NOVA.AI — это не просто алгоритм, это синтетическая эволюция. Мы интегрируем глубокое обучение с обработкой в реальном времени.",
                text_about_2: "От предиктивной аналитики в финансах до автономной робототехники — наши нейронные ядра адаптируются и обучаются без вмешательства человека.",
                subtitle_services: "Возможности",
                title_services: "Модули Системы",
                service_1_title: "Нейропроцессы",
                service_1_desc: "Самосовершенствующиеся алгоритмы, имитирующие синаптические структуры человека.",
                service_2_title: "Кибербезопасность",
                service_2_desc: "Предиктивный анализ угроз с использованием ИИ для выявления уязвимостей.",
                service_3_title: "ОС Робототехники",
                service_3_desc: "Операционные системы с низкой задержкой для автономного движения.",
                service_4_title: "Big Data",
                service_4_desc: "Обработка петабайтов неструктурированных данных для извлечения инсайтов.",
                specs_btn: "Полные Спецификации",
                contact_sub: "Готовы интегрировать высший интеллект в вашу экосистему? Запустите последовательность.",
                init_btn: "НАЧАТЬ КОНТАКТ"
            }
        };

        let currentLang = 'en';
        let typedInstance;

        function initTyped() {
            if (typedInstance) typedInstance.destroy();
            typedInstance = new Typed('#typed-output', {
                strings: translations[currentLang].hero_strings,
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '_',
            });
        }

        function updateContent() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    // Logic for keeping HTML structure inside links (like the brackets)
                    if(el.tagName === 'A' && el.children.length > 0) {
                         const left = el.firstElementChild;
                         const right = el.lastElementChild;
                         el.childNodes[1].nodeValue = " " + translations[currentLang][key] + " ";
                    } else {
                        el.innerText = translations[currentLang][key];
                    }
                }
            });
            initTyped();
        }

        document.getElementById('lang-switch').addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ru' : 'en';
            updateContent();
        });

        initTyped(); // Start initial

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

            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
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
                follower.style.borderColor = '#22d3ee';
                cursor.style.background = '#22d3ee';
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
                
                // Mouse repulsion interaction (simple logic)
                // Assuming mouse global variables from cursor
                
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
            const count = Math.floor(width * height / 15000); // Density based on screen size
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animateNeural() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                // Draw connections
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);
                    
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(34, 211, 238, ${1 - distance/100})`;
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
            
            mCtx.fillStyle = "#0F0"; // Green text
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
<a className="text-2xl font-['Audiowide'] text-white tracking-widest uppercase glitch" data-text="NOVA.AI" href="#">NOVA.AI</a>
<nav className="hidden md:flex items-center space-x-8">
<a className="group relative text-sm font-medium hover:text-cyan-400 transition-colors" data-i18n="nav_about" href="#about">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-cyan-400 font-['Audiowide']">[</span>
                    ABOUT
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-cyan-400 font-['Audiowide']">]</span>
</a>
<a className="group relative text-sm font-medium hover:text-cyan-400 transition-colors" data-i18n="nav_services" href="#services">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-cyan-400 font-['Audiowide']">[</span>
                    SERVICES
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-cyan-400 font-['Audiowide']">]</span>
</a>
<a className="group relative text-sm font-medium hover:text-cyan-400 transition-colors" data-i18n="nav_model" href="#model">
<span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-3 text-cyan-400 font-['Audiowide']">[</span>
                    NOVA-X
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute -right-3 text-cyan-400 font-['Audiowide']">]</span>
</a>
</nav>
<div className="flex items-center gap-6">
<button className="text-xs font-mono text-gray-400 hover:text-white transition-colors border border-white/10 px-2 py-1 rounded" id="lang-switch">EN / RU</button>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-black bg-white hover:bg-cyan-400 transition-all duration-300 clip-path-slant" data-i18n="btn_talk" href="#contact">
                    Let's Talk
                </a>
</div>
</div>
</header>

<section className="relative h-screen flex items-center justify-center overflow-hidden">

<div className="video-bg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black animate-pulse"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="mb-4 flex justify-center">
<div className="px-3 py-1 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono tracking-widest rounded-full flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span data-i18n="status_online">SYSTEM ONLINE v2.0</span>
</div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-['Audiowide'] text-white tracking-tight mb-6 leading-none">
<span data-i18n="hero_prefix">DEFINING</span> <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600" id="typed-output"></span>
</h1>
<p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-10 font-light" data-i18n="hero_desc">
                Pioneering the next generation of neural architecture. We build digital consciousness for the enterprise of tomorrow.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white/5 border border-white/20 hover:border-cyan-400 text-white font-['Audiowide'] text-sm tracking-wider transition-all hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]" href="#model">
<span data-i18n="explore_btn">EXPLORE NOVA-X</span>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
<span className="iconify text-cyan-400 w-5 h-5" data-icon="lucide:chevrons-down"></span>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div data-aos="fade-right">
<div className="flex items-center gap-2 mb-4 text-cyan-400">
<span className="iconify w-5 h-5" data-icon="lucide:cpu"></span>
<span className="text-xs font-mono tracking-widest" data-i18n="subtitle_about">CORE ARCHITECTURE</span>
</div>
<h2 className="text-4xl md:text-5xl font-['Audiowide'] text-white mb-6 tracking-tight" data-i18n="title_about">Beyond Human <br/> Capabilities</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-6" data-i18n="text_about_1">
                    NOVA.AI isn't just an algorithm; it's a synthetic evolution. We integrate deep learning neural networks with real-time processing to create systems that don't just compute—they understand.
                </p>
<p className="text-gray-400 text-sm leading-relaxed mb-8" data-i18n="text_about_2">
                    From predictive analytics in finance to autonomous robotics in manufacturing, our neural cores are designed to adapt, learn, and optimize without human intervention.
                </p>
<div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
<div>
<h4 className="text-3xl font-['Audiowide'] text-white">98<span className="text-cyan-400 text-lg">%</span></h4>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Accuracy</p>
</div>
<div>
<h4 className="text-3xl font-['Audiowide'] text-white">0.2<span className="text-cyan-400 text-lg">ms</span></h4>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Latency</p>
</div>
<div>
<h4 className="text-3xl font-['Audiowide'] text-white">50<span className="text-cyan-400 text-lg">+</span></h4>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Modules</p>
</div>
</div>
</div>
<div className="h-[400px] w-full glass rounded-xl relative flex items-center justify-center overflow-hidden" data-aos="fade-left">

<model-viewer alt="A 3D model of a robot" auto-rotate="" camera-controls="" className="w-full h-full" interaction-prompt="none" shadow-intensity="1" src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb" style={{backgroundColor: 'transparent'}}>
</model-viewer>

<div className="absolute top-4 left-4 text-[10px] font-mono text-cyan-400/70">
<p>ROTATION: AUTO</p>
<p>ZOOM: ENABLED</p>
</div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-cyan-400/70 text-right">
<p>RENDER: WEBGL</p>
<p>STATUS: ACTIVE</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400/50 rounded-full pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16" data-aos="fade-up">
<span className="text-cyan-400 text-xs font-mono tracking-widest uppercase mb-2 block" data-i18n="subtitle_services">Capabilities</span>
<h2 className="text-4xl md:text-5xl font-['Audiowide'] text-white tracking-tight" data-i18n="title_services">System Modules</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass p-8 rounded-none border-l-2 border-l-cyan-400/50 hover:border-l-cyan-400 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-400/20 transition-colors">
<span className="iconify text-white group-hover:text-cyan-400 w-6 h-6" data-icon="lucide:brain-circuit"></span>
</div>
<h3 className="text-xl font-['Audiowide'] text-white mb-3" data-i18n="service_1_title">Neural Process</h3>
<p className="text-xs text-gray-400 leading-relaxed" data-i18n="service_1_desc">Self-improving algorithms that mimic human synaptic structures for complex decision making.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-purple-500/50 hover:border-l-purple-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-white group-hover:text-purple-400 w-6 h-6" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-xl font-['Audiowide'] text-white mb-3" data-i18n="service_2_title">Cyber Security</h3>
<p className="text-xs text-gray-400 leading-relaxed" data-i18n="service_2_desc">Predictive threat analysis using AI to identify vulnerabilities before they are exploited.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-green-500/50 hover:border-l-green-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
<span className="iconify text-white group-hover:text-green-400 w-6 h-6" data-icon="lucide:bot"></span>
</div>
<h3 className="text-xl font-['Audiowide'] text-white mb-3" data-i18n="service_3_title">Robotics OS</h3>
<p className="text-xs text-gray-400 leading-relaxed" data-i18n="service_3_desc">Low-latency operating systems designed for autonomous movement and spatial awareness.</p>
</div>

<div className="glass p-8 rounded-none border-l-2 border-l-blue-500/50 hover:border-l-blue-500 transition-all group" data-tilt="" data-tilt-glare="" data-tilt-max="10" data-tilt-max-glare="0.2" data-tilt-speed="400">
<div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<span className="iconify text-white group-hover:text-blue-400 w-6 h-6" data-icon="lucide:database-zap"></span>
</div>
<h3 className="text-xl font-['Audiowide'] text-white mb-3" data-i18n="service_4_title">Big Data</h3>
<p className="text-xs text-gray-400 leading-relaxed" data-i18n="service_4_desc">Processing petabytes of unstructured data to extract actionable insights in milliseconds.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-y border-white/5 bg-white/[0.01]" id="model">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2 relative" data-aos="zoom-in">

<div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
<div className="relative z-10 border border-white/10 bg-black/50 p-2 backdrop-blur-md">
<img alt="NOVA-X Model" className="grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover h-[400px]" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-2 w-full animate-[scan_3s_ease-in-out_infinite] pointer-events-none opacity-50"></div>
</div>
</div>
<div className="lg:w-1/2" data-aos="fade-left">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs font-mono text-green-500 uppercase">Production Ready</span>
</div>
<h2 className="text-5xl font-['Audiowide'] text-white mb-6">NOVA-X <span className="text-gray-600 text-3xl">Series</span></h2>
<div className="space-y-6">
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Processing Unit</span>
<span className="text-white font-medium text-right">Quantum Core v4</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Energy Efficiency</span>
<span className="text-white font-medium text-right">99.9% Optimized</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-sm text-gray-400 font-mono">Learning Rate</span>
<span className="text-white font-medium text-right">Exponential</span>
</div>
</div>
<div className="mt-8 flex gap-4">
<button className="flex items-center gap-2 text-sm text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors font-semibold">
<span className="iconify" data-icon="lucide:file-text"></span>
<span data-i18n="specs_btn">View Full Specs</span>
</button>
</div>
</div>
</div>
</section>

<section className="min-h-[70vh] relative flex items-center justify-center overflow-hidden" id="contact">

<div className="absolute inset-0 z-0">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-80"></div>

<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-cyan-900/20 via-transparent to-purple-900/20 blur-3xl animate-pulse"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6">
<h2 className="text-5xl md:text-7xl font-['Audiowide'] text-white mb-8 text-glow leading-tight" data-aos="fade-up">
                Let's build the <br/> <span className="text-cyan-400">future together</span>
</h2>
<p className="text-gray-400 mb-10 max-w-xl mx-auto" data-i18n="contact_sub">Ready to integrate superior intelligence into your ecosystem? Initialize the sequence now.</p>
<form className="max-w-md mx-auto space-y-4" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="w-full bg-black/50 border border-white/20 p-4 text-white text-sm font-mono focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<div className="absolute top-0 left-0 w-1 h-0 bg-cyan-400 group-hover:h-full transition-all duration-300"></div>
</div>
<button className="w-full bg-white text-black font-['Audiowide'] py-4 hover:bg-cyan-400 hover:text-white transition-all duration-300 tracking-wider" type="submit">
<span data-i18n="init_btn">INITIALIZE CONTACT</span>
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
<h3 className="text-2xl font-['Audiowide'] text-white mb-2">NOVA.AI</h3>
<p className="text-xs text-gray-600 font-mono">© 2088 NOVA INTELLIGENCE SYSTEMS.</p>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-cyan-400 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:twitter"></span></a>
<a className="text-gray-500 hover:text-cyan-400 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:github"></span></a>
<a className="text-gray-500 hover:text-cyan-400 transition-colors" href="#"><span className="iconify w-5 h-5" data-icon="lucide:linkedin"></span></a>
</div>
</div>
</footer>






    </>
  );
}
