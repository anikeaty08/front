import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
dark: {
950: '#050505', // Deepest black
900: '#0A0A0A', // Main bg
800: '#121212', // Secondary bg
700: '#1A1E24', // Card bg
600: '#2A2F36', // Border
},
accent: {
blue: '#3B82F6',
purple: '#8B5CF6',
green: '#10B981',
cyan: '#06b6d4'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'beam': 'beam 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
beam: {
'0%': { transform: 'translateY(-100%)', opacity: '0' },
'50%': { opacity: '0.5' },
'100%': { transform: 'translateY(100%)', opacity: '0' },
}
}
}
}
}



        // --- 1. Terminal Typing Effect ---
        const terminalLines = [
            { text: "Initializing core system...", color: "text-gray-400" },
            { text: "Connecting to Yandex Cloud API...", color: "text-accent-blue" },
            { text: "Loading neural network weights [Model: GPT-4-Lite]...", color: "text-accent-purple" },
            { text: "Optimizing database queries...", color: "text-yellow-500" },
            { text: "Syncing with Bitrix24 CRM...", color: "text-gray-300" },
            { text: "System ready. Listening for connections on port 443.", color: "text-accent-green" }
        ];

        const terminalContent = document.getElementById('terminal-content');
        let lineIndex = 0;

        function typeLine() {
            if (lineIndex < terminalLines.length) {
                const line = terminalLines[lineIndex];
                const div = document.createElement('div');
                div.className = `font-mono ${line.color} opacity-0 transition-opacity duration-300`;
                
                // Timestamp
                const time = new Date().toLocaleTimeString('ru-RU', { hour12: false });
                div.innerHTML = `<span class="text-gray-600 mr-2">[${time}]</span> ${line.text}`;
                
                terminalContent.appendChild(div);
                
                // Fade in
                setTimeout(() => div.classList.remove('opacity-0'), 50);
                
                lineIndex++;
                const delay = Math.random() * 800 + 400; // Random delay between lines
                setTimeout(typeLine, delay);
            } else {
                // Loop
                setTimeout(() => {
                    terminalContent.innerHTML = '';
                    lineIndex = 0;
                    typeLine();
                }, 5000);
            }
        }
        
        // Start typing on load
        window.addEventListener('load', typeLine);


        // --- 2. Mouse Glow Effect ---
        const body = document.getElementById('body');
        const glowOverlay = document.getElementById('glow-overlay');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            glowOverlay.style.setProperty('--x', `${x}px`);
            glowOverlay.style.setProperty('--y', `${y}px`);
        });


        // --- 3. Modal Logic ---
        const modal = document.getElementById('contact-modal');
        
        function openModal() {
            modal.classList.remove('hidden');
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            // Reset form state
            document.getElementById('success-message').classList.add('hidden');
            document.getElementById('submit-icon').classList.remove('hidden');
            document.getElementById('loading-icon').classList.add('hidden');
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const submitIcon = document.getElementById('submit-icon');
            const loadingIcon = document.getElementById('loading-icon');
            const successMsg = document.getElementById('success-message');

            // Loading state
            submitIcon.classList.add('hidden');
            loadingIcon.classList.remove('hidden');
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');

            // Simulate API call
            setTimeout(() => {
                loadingIcon.classList.add('hidden');
                btn.classList.add('hidden'); // Hide button
                successMsg.classList.remove('hidden'); // Show success
                
                // Auto close after 2s
                setTimeout(() => {
                    closeModal();
                    // Reset form after closing
                    setTimeout(() => {
                        e.target.reset();
                        btn.classList.remove('hidden', 'opacity-70', 'cursor-not-allowed');
                        btn.disabled = false;
                        successMsg.classList.add('hidden');
                        submitIcon.classList.remove('hidden');
                    }, 500);
                }, 2000);
            }, 1500);
        }


        // --- 4. Mobile Menu ---
        const mobileMenu = document.getElementById('mobile-menu');
        
        function toggleMobileMenu() {
            if (mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }


        // --- 5. Canvas Background Animation (Neural Network/Nodes) ---
        const canvas = document.getElementById('neural-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; // Accent blue
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(window.innerWidth / 15, 80); // Responsive count
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            particles.forEach((p, index) => {
                p.update();
                p.draw();
                
                // Draw connections
                for (let j = index + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - dist/1000})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
            
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-20" id="neural-canvas"></canvas>
<div className="fixed inset-0 pointer-events-none z-0 digital-grid opacity-30"></div>

<div className="pointer-events-none fixed inset-0 z-0 mouse-glow transition-opacity duration-300" id="glow-overlay"></div>

<header className="fixed top-0 left-0 w-full z-50 glass-nav transition-all duration-300" id="main-header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group cursor-pointer z-50" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-accent-blue/20 rounded blur-sm group-hover:bg-accent-blue/40 transition-all"></div>
<div className="relative w-full h-full rounded bg-dark-800 border border-dark-600 flex items-center justify-center text-accent-blue group-hover:border-accent-blue transition-colors">
<span className="font-mono text-xs font-bold">&lt;/&gt;</span>
</div>
</div>
<div className="flex flex-col">
<span className="font-semibold text-base tracking-tight text-white leading-none">Digital Tula</span>
<span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">System</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-400 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider" href="#services">Услуги</a>
<a className="text-xs font-medium text-gray-400 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider" href="#workflow">Процесс</a>
<a className="text-xs font-medium text-gray-400 hover:text-white hover:tracking-wide transition-all duration-300 uppercase tracking-wider" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-2 px-2 py-1 bg-dark-800/50 rounded border border-dark-600/50">
<div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></div>
<span className="text-[10px] text-gray-400 font-mono">ONLINE</span>
</div>
<button className="group relative px-5 py-2 overflow-hidden rounded-lg bg-accent-blue text-xs font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]" onclick="openModal()">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
<span className="relative flex items-center gap-2">
                            Обсудить проект
                            <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>

<button className="md:hidden text-gray-300 hover:text-white z-50 p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-dark-950/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex items-center justify-center" id="mobile-menu">
<nav className="flex flex-col items-center gap-8 text-center">
<a className="text-xl font-medium text-white" href="#services" onclick="toggleMobileMenu()">Услуги</a>
<a className="text-xl font-medium text-white" href="#workflow" onclick="toggleMobileMenu()">Процесс</a>
<a className="text-xl font-medium text-white" href="#faq" onclick="toggleMobileMenu()">FAQ</a>
<button className="px-8 py-3 bg-accent-blue rounded-xl text-white font-medium" onclick="toggleMobileMenu(); openModal()">Обсудить проект</button>
</nav>
</div>
</header>
<main className="relative pt-24 pb-16">

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-800 border border-dark-600 backdrop-blur-md">
<iconify-icon className="text-accent-blue" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-gray-300 tracking-tight">AI-POWERED DEVELOPMENT</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                        Цифровая <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-blue to-accent-purple animate-pulse-slow">Эволюция</span> <br/>
                        Бизнеса
                    </h1>
<p className="text-base sm:text-lg text-gray-400 font-light max-w-xl leading-relaxed border-l-2 border-dark-600 pl-4">
                        Интеграция Tilda, 1C, AI и CRM в единую экосистему. Автоматизируем процессы, чтобы вы занимались стратегией, а не рутиной.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-white text-black rounded-lg font-semibold text-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group" onclick="openModal()">
<span>Запустить трансформацию</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
<div className="flex items-center gap-4 px-4 py-2">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-dark-900 bg-gray-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-dark-900 bg-gray-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-dark-900 bg-gray-500 flex items-center justify-center text-[10px] text-white font-bold">+40</div>
</div>
<span className="text-xs text-gray-500">реализованных <br/>проектов</span>
</div>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">

<div className="absolute inset-0 bg-accent-blue/20 blur-[80px] rounded-full"></div>
<div className="relative bg-dark-900/90 backdrop-blur-xl border border-dark-600 rounded-xl overflow-hidden shadow-2xl transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700 ease-out">

<div className="flex items-center justify-between px-4 py-3 border-b border-dark-600 bg-dark-800/50">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="text-[10px] text-gray-500 font-mono flex items-center gap-2">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon>
                                secure_connection.sh
                            </div>
</div>

<div className="p-6 font-mono text-xs h-[300px] overflow-hidden relative">

<div className="absolute inset-x-0 h-[2px] bg-accent-blue/10 animate-beam z-10 pointer-events-none"></div>
<div className="space-y-2" id="terminal-content">

</div>
<span className="cursor-blink"></span>
</div>

<div className="grid grid-cols-3 border-t border-dark-600 bg-dark-800/30 divide-x divide-dark-600">
<div className="p-3 text-center">
<div className="text-[10px] text-gray-500 uppercase">Uptime</div>
<div className="text-accent-green font-mono">99.9%</div>
</div>
<div className="p-3 text-center">
<div className="text-[10px] text-gray-500 uppercase">Speed</div>
<div className="text-accent-blue font-mono">24ms</div>
</div>
<div className="p-3 text-center">
<div className="text-[10px] text-gray-500 uppercase">Secure</div>
<div className="text-accent-purple font-mono">True</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-20 animate-float">
<div className="bg-dark-800 border border-dark-600 p-3 rounded-lg shadow-xl backdrop-blur-md">
<iconify-icon icon="logos:telegram" width="24"></iconify-icon>
</div>
</div>
<div className="absolute -left-4 bottom-20 animate-float" style={{animationDelay: '1s'}}>
<div className="bg-dark-800 border border-dark-600 p-3 rounded-lg shadow-xl backdrop-blur-md">
<iconify-icon icon="logos:yandex-ru" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-dark-600 bg-dark-900/50 backdrop-blur-sm overflow-hidden py-10">
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 px-8 items-center text-gray-500 hover:text-white transition-colors duration-500">
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:tilda"></iconify-icon> TILDA PUBLISHING</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:bitrix24"></iconify-icon> BITRIX24 CRM</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:yandex"></iconify-icon> YANDEX GPT</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:telegram"></iconify-icon> TELEGRAM API</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:n8n"></iconify-icon> N8N AUTOMATION</span>
<span className="flex items-center gap-2"><iconify-icon icon="file-icons:1c"></iconify-icon> 1C ENTERPRISE</span>

<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:tilda"></iconify-icon> TILDA PUBLISHING</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:bitrix24"></iconify-icon> BITRIX24 CRM</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:yandex"></iconify-icon> YANDEX GPT</span>
<span className="flex items-center gap-2"><iconify-icon icon="simple-icons:telegram"></iconify-icon> TELEGRAM API</span>
</div>
</div>
</section>

<section className="py-20 lg:py-28 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="text-accent-blue font-mono text-xs tracking-wider uppercase mb-2 block">System Modules</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">Архитектура Решений</h2>
</div>
<a className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors" href="#workflow">
                        Как мы работаем
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-accent-blue/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-accent-blue group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-blue transition-colors">Web-Разработка</h3>
<p className="text-sm text-gray-400 leading-relaxed">Высокопроизводительные сайты на Tilda или React. Адаптив, SEO-ядро, анимации.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-accent-blue cursor-pointer">Подробнее</span>
<iconify-icon className="text-accent-blue text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-accent-purple/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-accent-purple group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-purple transition-colors">Чат-боты &amp; AI</h3>
<p className="text-sm text-gray-400 leading-relaxed">Интеллектуальные боты на базе YandexGPT. Поддержка 24/7, продажи, базы знаний.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-accent-purple cursor-pointer">Подробнее</span>
<iconify-icon className="text-accent-purple text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-accent-green/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-accent-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-accent-green group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-green transition-colors">Интеграции &amp; CRM</h3>
<p className="text-sm text-gray-400 leading-relaxed">Связка 1С, Bitrix24 и сайта. Синхронизация остатков, статусов заказов и клиентов.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-accent-green cursor-pointer">Подробнее</span>
<iconify-icon className="text-accent-green text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-accent-cyan/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-accent-cyan group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:sitemap-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-accent-cyan transition-colors">No-Code Автоматизация</h3>
<p className="text-sm text-gray-400 leading-relaxed">Сценарии на n8n. Автоматическая генерация документов, рассылки, отчетность.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-accent-cyan cursor-pointer">Подробнее</span>
<iconify-icon className="text-accent-cyan text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-pink-500/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-pink-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-pink-500 transition-colors">Telegram Mini Apps</h3>
<p className="text-sm text-gray-400 leading-relaxed">Полноценные приложения внутри мессенджера. E-commerce без выхода из Telegram.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-pink-500 cursor-pointer">Подробнее</span>
<iconify-icon className="text-pink-500 text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-dark-800/50 border border-dark-600 rounded-xl p-8 hover:bg-dark-800 transition-all duration-300 hover:border-yellow-500/50 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center text-gray-300 mb-6 group-hover:text-yellow-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 group-hover:text-yellow-500 transition-colors">Трафик &amp; Аналитика</h3>
<p className="text-sm text-gray-400 leading-relaxed">Контекст, таргет и сквозная аналитика. Вы видите стоимость каждого лида.</p>
<div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
<span className="text-xs font-mono text-yellow-500 cursor-pointer">Подробнее</span>
<iconify-icon className="text-yellow-500 text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-dark-900 border-t border-dark-600 relative overflow-hidden" id="workflow">

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-dark-600 hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<span className="text-accent-green font-mono text-xs tracking-wider uppercase">Workflow</span>
<h2 className="text-3xl font-semibold text-white mt-2">Алгоритм Запуска</h2>
</div>
<div className="space-y-12 lg:space-y-0">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="lg:text-right">
<div className="inline-block p-3 rounded-lg bg-dark-800 border border-dark-600 mb-4 text-accent-blue shadow-[0_0_15px_-5px_#3B82F6]">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">01. Аудит Системы</h3>
<p className="text-sm text-gray-400 max-w-sm ml-auto">Анализируем текущие бизнес-процессы. Находим "узкие горлышка" и точки роста.</p>
</div>
<div className="hidden lg:flex justify-start">
<div className="w-3 h-3 bg-accent-blue rounded-full absolute left-1/2 -translate-x-1.5 shadow-[0_0_10px_#3B82F6]"></div>
</div>

<div className="hidden"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

<div className="hidden lg:block"></div>
<div className="hidden lg:flex justify-end">
<div className="w-3 h-3 bg-dark-600 border border-gray-500 rounded-full absolute left-1/2 -translate-x-1.5 bg-dark-900"></div>
</div>
<div className="lg:text-left">
<div className="inline-block p-3 rounded-lg bg-dark-800 border border-dark-600 mb-4 text-accent-purple shadow-[0_0_15px_-5px_#8B5CF6]">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">02. Прототипирование</h3>
<p className="text-sm text-gray-400 max-w-sm mr-auto">Создаем интерактивный макет будущей системы. Вы видите результат до начала кода.</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="lg:text-right">
<div className="inline-block p-3 rounded-lg bg-dark-800 border border-dark-600 mb-4 text-accent-cyan shadow-[0_0_15px_-5px_#06b6d4]">
<iconify-icon icon="solar:code-file-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">03. Разработка &amp; AI</h3>
<p className="text-sm text-gray-400 max-w-sm ml-auto">Пишем код, настраиваем интеграции, обучаем нейросети на данных вашей компании.</p>
</div>
<div className="hidden lg:flex justify-start">
<div className="w-3 h-3 bg-dark-600 border border-gray-500 rounded-full absolute left-1/2 -translate-x-1.5 bg-dark-900"></div>
</div>
<div className="hidden"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="hidden lg:block"></div>
<div className="hidden lg:flex justify-end">
<div className="w-3 h-3 bg-accent-green rounded-full absolute left-1/2 -translate-x-1.5 shadow-[0_0_10px_#10B981]"></div>
</div>
<div className="lg:text-left">
<div className="inline-block p-3 rounded-lg bg-dark-800 border border-dark-600 mb-4 text-accent-green shadow-[0_0_15px_-5px_#10B981]">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">04. Деплой и Поддержка</h3>
<p className="text-sm text-gray-400 max-w-sm mr-auto">Запуск на серверах. Передача доступов, обучение сотрудников и гарантия.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-dark-800/30" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white">База Знаний</h2>
</div>
<div className="space-y-4">
<details className="group bg-dark-900 border border-dark-600 rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-dark-500">
<summary className="flex items-center justify-between p-6 text-white font-medium select-none">
<span>Какие сроки реализации?</span>
<iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-dark-600/50 pt-4 animate-[fadeIn_0.3s_ease-out]">
                            Лендинг или простой бот — 3-5 дней. Сложная CRM-система с интеграциями — 2-4 недели. Мы работаем спринтами, показывая результат каждую неделю.
                        </div>
</details>
<details className="group bg-dark-900 border border-dark-600 rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-dark-500">
<summary className="flex items-center justify-between p-6 text-white font-medium select-none">
<span>Есть ли техническая поддержка?</span>
<iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-dark-600/50 pt-4">
                            Да, мы предоставляем 1 месяц бесплатной поддержки после запуска. Далее можно заключить договор на техническое сопровождение (SLA).
                        </div>
</details>
<details className="group bg-dark-900 border border-dark-600 rounded-xl overflow-hidden cursor-pointer transition-colors hover:border-dark-500">
<summary className="flex items-center justify-between p-6 text-white font-medium select-none">
<span>Работаете по договору?</span>
<iconify-icon className="transform group-open:rotate-180 transition-transform duration-300 text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed border-t border-dark-600/50 pt-4">
                            Обязательно. Мы работаем официально (ИП/ООО), предоставляем все закрывающие документы, подписываем NDA при необходимости.
                        </div>
</details>
</div>
</div>
</section>

<footer className="relative pt-20 pb-10 border-t border-dark-600 bg-dark-950 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="bg-dark-900 border border-dark-600 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center justify-between mb-16 shadow-2xl">
<div className="max-w-lg">
<h2 className="text-3xl font-semibold text-white mb-4">Готовы к цифровизации?</h2>
<p className="text-gray-400 mb-8">Оставьте заявку. Мы проведем бесплатный аудит и предложим решение, которое окупится.</p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#2AABEE]/10 border border-[#2AABEE]/20 text-[#2AABEE] hover:bg-[#2AABEE] hover:text-white transition-all" href="#">
<iconify-icon icon="logos:telegram" width="20"></iconify-icon>
<span>Написать в Telegram</span>
</a>
<a className="flex items-center gap-3 px-5 py-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all" href="#">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span>Написать в WhatsApp</span>
</a>
</div>
</div>
<div className="w-full md:w-auto">
<button className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform flex items-center justify-center gap-2" onclick="openModal()">
<span>Заполнить Бриф</span>
<iconify-icon icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-dark-800 text-xs text-gray-600">
<div className="flex items-center gap-2">
<span className="text-gray-400 font-medium">Digital Tula</span>
<span>© 2024–2026</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-400 transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-gray-400 transition-colors" href="#">Публичная оферта</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[100] hidden" id="contact-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
<div className="bg-dark-900 border border-dark-600 rounded-2xl shadow-2xl overflow-hidden transform transition-all scale-100 relative">
<button className="absolute top-4 right-4 text-gray-500 hover:text-white" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8">
<h3 className="text-xl font-semibold text-white mb-2">Обсудить проект</h3>
<p className="text-sm text-gray-400 mb-6">Заполните форму, и мы свяжемся с вами в течение 15 минут.</p>
<form className="space-y-4" id="lead-form" onsubmit="handleFormSubmit(event)">
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Имя</label>
<input className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="Иван Иванов" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Телефон / Telegram</label>
<input className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all" placeholder="+7 (999) 000-00-00" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-500 mb-1">Задача</label>
<select className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all appearance-none cursor-pointer">
<option>Разработка сайта</option>
<option>Чат-бот / AI</option>
<option>CRM Интеграция</option>
<option>Комплексный проект</option>
</select>
</div>
<button className="w-full py-3 bg-accent-blue text-white font-semibold rounded-lg text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20 flex justify-center items-center gap-2" type="submit">
<span>Отправить заявку</span>
<iconify-icon icon="solar:plain-linear" id="submit-icon" width="18"></iconify-icon>
<iconify-icon className="hidden" icon="svg-spinners:ring-resize" id="loading-icon" width="18"></iconify-icon>
</button>
<div className="hidden text-center pt-2" id="success-message">
<span className="text-accent-green text-sm flex items-center justify-center gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                Отправлено успешно!
                            </span>
</div>
</form>
</div>

<div className="h-1 w-full bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green"></div>
</div>
</div>
</div>



    </>
  );
}
