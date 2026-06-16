import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
background: '#030014',
primary: '#8b5cf6',
secondary: '#a855f7',
},
backgroundImage: {
'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgba(255, 255, 255, 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
'grid-small': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='8' height='8' fill='none' stroke='rgba(255, 255, 255, 0.02)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
}
}
}



        // 1. Initialize Icons
        lucide.createIcons();

        // 2. ULTRA SMOOTH SCROLL (Lenis) - Heavy damping for luxury feel
        const lenis = new Lenis({
            duration: 2.0, // Increased duration for smoothness
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8, // Slightly reduced for weight
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 3. Three.js - Advanced Particle Field with Connections (Vector look)
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x030014, 0.002);
        
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        const geometry = new THREE.BufferGeometry();
        const count = 300; // Optimized count
        const posArray = new Float32Array(count * 3);
        
        for(let i = 0; i < count * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 25;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const material = new THREE.PointsMaterial({
            size: 0.04,
            color: 0xa855f7,
            transparent: true,
            opacity: 0.6,
        });
        
        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);
        camera.position.z = 5;

        let mouseX = 0;
        let mouseY = 0;
        document.addEventListener('mousemove', (event) => {
            mouseX = (event.clientX - window.innerWidth / 2) * 0.0005;
            mouseY = (event.clientY - window.innerHeight / 2) * 0.0005;
        });

        const clock = new THREE.Clock();

        const animate3D = () => {
            const elapsedTime = clock.getElapsedTime();
            
            // Ultra smooth rotation
            particlesMesh.rotation.y += 0.0003;
            particlesMesh.rotation.x += 0.0001;
            
            // Mouse interaction easing
            particlesMesh.rotation.y += 0.03 * (mouseX - particlesMesh.rotation.y);
            particlesMesh.rotation.x += 0.03 * (mouseY - particlesMesh.rotation.x);

            // Floating wave effect
            particlesMesh.position.y = Math.sin(elapsedTime * 0.2) * 0.3;

            renderer.render(scene, camera);
            requestAnimationFrame(animate3D);
        };
        animate3D();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // 4. GSAP & ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline();
        timeline.from(".reveal-hero", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Batch scroll animations for better performance
        ScrollTrigger.batch(".reveal-scroll", {
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out"}),
            start: "top 90%"
        });
        
        // Initial state for scroll elements
        gsap.set(".reveal-scroll", {y: 40, opacity: 0});

        // 5. Magnetic Button Effect (Smooth)
        const buttons = document.querySelectorAll('.magnetic-btn');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });

        // 6. Currency Toggle
        const toggleBtn = document.getElementById('currency-toggle');
        const toggleCircle = document.getElementById('toggle-circle');
        const amounts = document.querySelectorAll('.currency-amount');
        const usdLabel = document.getElementById('currency-label-usd');
        const pkrLabel = document.getElementById('currency-label-pkr');
        let isUsd = true;

        toggleBtn.addEventListener('click', () => {
            isUsd = !isUsd;
            toggleCircle.style.transform = isUsd ? 'translateX(0)' : 'translateX(24px)';
            
            if(isUsd) {
                usdLabel.classList.replace('text-gray-500', 'text-white');
                pkrLabel.classList.replace('text-white', 'text-gray-500');
            } else {
                usdLabel.classList.replace('text-white', 'text-gray-500');
                pkrLabel.classList.replace('text-gray-500', 'text-white');
            }

            amounts.forEach(el => {
                el.style.opacity = '0';
                setTimeout(() => {
                    el.innerText = isUsd ? '$' + el.dataset.usd : 'Rs ' + el.dataset.pkr;
                    el.style.opacity = '1';
                }, 200);
            });
        });

        // 7. AI CHATBOT LOGIC
        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatFab = document.getElementById('chat-fab');
        let isChatOpen = false;
        let hasGreeted = false;

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('scale-0', 'opacity-0');
                chatFab.classList.add('scale-0', 'opacity-0');
                if(!hasGreeted) {
                    setTimeout(() => addBotMessage("Hi there! 👋 I'm Rizwan's AI assistant. How can I help you build your next project?"), 500);
                    hasGreeted = true;
                }
            } else {
                chatWindow.classList.add('scale-0', 'opacity-0');
                setTimeout(() => chatFab.classList.remove('scale-0', 'opacity-0'), 300);
            }
        }

        function addMessage(text, isBot) {
            const div = document.createElement('div');
            div.className = `flex ${isBot ? 'justify-start' : 'justify-end'} chat-message`;
            
            const bubble = document.createElement('div');
            bubble.className = `max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                isBot 
                ? 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none' 
                : 'bg-purple-600 text-white rounded-tr-none'
            }`;
            bubble.innerHTML = text;
            
            div.appendChild(bubble);
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addBotMessage(text) {
            // Add typing indicator
            const typingDiv = document.createElement('div');
            typingDiv.className = 'flex justify-start chat-message mb-2';
            typingDiv.id = 'typing-indicator';
            typingDiv.innerHTML = `
                <div class="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 border border-white/5">
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-gray-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Simulate delay then show message
            setTimeout(() => {
                document.getElementById('typing-indicator').remove();
                addMessage(text, true);
            }, 1500);
        }

        // Basic Bot Logic
        const botResponses = {
            "hello": "Hello! Looking for a developer?",
            "hi": "Hey there! How can I help?",
            "pricing": "Our packages start at $999. Do you have a specific project in mind?",
            "project": "I'd love to hear about your project! What tech stack are you interested in?",
            "contact": "You can fill out the form on the left, or just tell me here!",
            "default": "That sounds interesting! Please drop your email in the contact form so Rizwan can get back to you personally."
        };

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if(!text) return;

            addMessage(text, false);
            chatInput.value = '';

            // Simple keyword matching
            const lowerText = text.toLowerCase();
            let response = botResponses.default;
            
            if(lowerText.includes('hello') || lowerText.includes('hi')) response = botResponses.hi;
            else if(lowerText.includes('price') || lowerText.includes('cost')) response = botResponses.pricing;
            else if(lowerText.includes('project') || lowerText.includes('work')) response = botResponses.project;
            
            addBotMessage(response);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-grid-white bg-[length:50px_50px] opacity-20 mask-gradient"></div>
<div className="absolute inset-0 bg-grid-small bg-[length:10px_10px] opacity-10 mask-gradient"></div>

<div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow" style={{animationDelay: '2s'}}></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-60" id="canvas-container"></div>

<nav className="fixed top-0 w-full z-50 glass-heavy transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-xl font-bold tracking-tight z-50 hover:text-purple-400 transition-colors group" href="#">
                RH<span className="text-purple-500 text-2xl leading-none group-hover:text-white transition-colors">.</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors relative group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#projects">
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#services">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#pricing">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<a className="magnetic-btn group relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full px-6 font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]" href="#contact">
<span className="mr-2 text-xs font-semibold tracking-wide">LET'S TALK</span>
<svg className="lucide lucide-arrow-up-right h-4 w-4 text-purple-400 group-hover:rotate-45 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>

<div id="smooth-wrapper">
<div id="smooth-content">

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-4">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-purple-600/20 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>
</div>
<div className="z-10 text-center max-w-5xl flex flex-col items-center gap-8">
<div className="reveal-hero inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-widest font-semibold backdrop-blur-md border-purple-500/30 bg-purple-500/5 text-purple-200 shadow-[0_0_15px_rgba(168,85,247,0.15)] hover:bg-purple-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        System Online
                    </div>
<h1 className="reveal-hero text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 pb-4">
                        Rizwan Hussain
                    </h1>
<p className="reveal-hero text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                        Forging <span className="text-white font-medium">digital realities</span> with precision engineering. 
                        A full-stack synergy of technical depth and artistic motion.
                    </p>
<div className="reveal-hero flex flex-col sm:flex-row gap-5 mt-8 w-full justify-center">
<button className="magnetic-btn group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-semibold text-black transition-all hover:bg-gray-200 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)]" onclick="document.getElementById('projects').scrollIntoView()">
<span className="mr-2">Explore Work</span>
<svg className="lucide lucide-chevron-down h-4 w-4 transition-transform group-hover:translate-y-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-32 relative px-4" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="space-y-10 reveal-scroll">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                                Code as <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Architecture.</span>
</h2>
<p className="text-gray-400 text-lg leading-relaxed">
                                I don't just write software; I engineer experiences. Leveraging the power of WebGL and modern frameworks, I build applications that feel alive, responsive, and undeniably premium.
                            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="group p-6 rounded-2xl border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all hover:border-blue-500/20 relative overflow-hidden">
<div className="vector-line top-0 left-0"></div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20">
<svg className="lucide lucide-code-2 text-blue-400 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="font-semibold text-white">Frontend Engineering</h3>
<p className="text-sm text-gray-500 mt-2">Next.js, React, Tailwind, Three.js, GSAP</p>
</div>
<div className="group p-6 rounded-2xl border bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all hover:border-purple-500/20 relative overflow-hidden">
<div className="vector-line top-0 left-0"></div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20">
<svg className="lucide lucide-server text-purple-400 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="font-semibold text-white">Backend Architecture</h3>
<p className="text-sm text-gray-500 mt-2">Node, Express, PostgreSQL, Redis</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 reveal-scroll relative">
<div className="glass p-6 rounded-3xl flex flex-col justify-between h-48 card-hover group cursor-pointer hover:bg-white/[0.04]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
<svg className="lucide lucide-cpu text-yellow-300 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<div>
<p className="text-2xl font-bold text-white mb-1">Fast.</p>
<span className="text-xs text-gray-500 font-mono">CORE_VITALS_OPTIMIZED</span>
</div>
</div>
<div className="glass p-6 rounded-3xl flex flex-col justify-between h-48 card-hover mt-10 group cursor-pointer hover:bg-white/[0.04]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
<svg className="lucide lucide-shield-check text-green-400 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-2xl font-bold text-white mb-1">Secure.</p>
<span className="text-xs text-gray-500 font-mono">OWASP_COMPLIANT</span>
</div>
</div>
<div className="glass p-6 rounded-3xl flex flex-col justify-between h-48 card-hover -mt-10 group cursor-pointer hover:bg-white/[0.04]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
<svg className="lucide lucide-smartphone text-pink-400 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div>
<p className="text-2xl font-bold text-white mb-1">Fluid.</p>
<span className="text-xs text-gray-500 font-mono">RESPONSIVE_DESIGN</span>
</div>
</div>
<div className="glass p-6 rounded-3xl flex flex-col justify-between h-48 card-hover group cursor-pointer hover:bg-white/[0.04]">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 border border-white/10">
<svg className="lucide lucide-blocks text-orange-400 h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="14" y="3"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
</div>
<div>
<p className="text-2xl font-bold text-white mb-1">Scale.</p>
<span className="text-xs text-gray-500 font-mono">MODERN_STACK</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative border-y border-white/5 bg-black/40" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Selected Works</h2>
<p className="text-gray-400">A curation of high-end functional applications.</p>
</div>
</div>
<div className="space-y-32">

<div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal-scroll">
<div className="lg:col-span-7 relative">
<div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-10 rounded-full group-hover:opacity-25 transition-opacity duration-700"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] aspect-video group-hover:border-purple-500/30 transition-all duration-700 shadow-2xl cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">

<div className="w-3/4 h-3/4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm flex flex-col p-4 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="flex-1 flex items-center justify-center">
<span className="text-2xl font-bold text-white tracking-widest">LUMIÈRE</span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-8">
<div className="space-y-4">
<h3 className="text-4xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">Lumière Dining</h3>
<p className="text-gray-400 leading-relaxed text-lg">A bespoke reservation system for high-end dining. Features real-time table availability, WebGL food previews, and seamless payments.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">Next.js 14</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">TypeScript</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">Stripe</span>
</div>
<button className="magnetic-btn flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                                    View Case Study <svg className="lucide lucide-arrow-right w-4 h-4 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal-scroll">
<div className="lg:col-span-7 lg:order-last relative">
<div className="absolute inset-0 bg-blue-600 blur-[80px] opacity-10 rounded-full group-hover:opacity-25 transition-opacity duration-700"></div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] aspect-video group-hover:border-blue-500/30 transition-all duration-700 shadow-2xl cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]"></div>
<div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-1000">

<div className="w-3/4 h-3/4 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm flex flex-col p-4 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<div className="h-2 w-20 bg-white/20 rounded-full"></div>
<div className="h-6 w-6 rounded-full bg-blue-500/20"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="h-24 rounded-md bg-white/5 border border-white/5"></div>
<div className="h-24 rounded-md bg-white/5 border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-8">
<div className="space-y-4">
<h3 className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Analytica SaaS</h3>
<p className="text-gray-400 leading-relaxed text-lg">High-performance analytics dashboard processing large datasets. Features dark mode, drag-and-drop widgets, and vector graphics.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">React</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">Tremor</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">Postgres</span>
</div>
<button className="magnetic-btn flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                                    View Case Study <svg className="lucide lucide-arrow-right w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative px-4" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal-scroll">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">Services</h2>
<p className="text-gray-400">Scalable solutions for ambitious brands.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border transition-all duration-500 reveal-scroll bg-white/[0.02] border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] hover:-translate-y-2 relative overflow-hidden">
<div className="vector-line top-0 left-0 transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6 text-white border border-white/10">
<svg className="lucide lucide-globe w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Full Stack Dev</h3>
<p className="text-sm text-gray-400 leading-relaxed">End-to-end development of complex web applications using modern frameworks.</p>
</div>

<div className="group p-8 rounded-3xl border transition-all duration-500 reveal-scroll bg-white/[0.02] border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] hover:-translate-y-2 relative overflow-hidden">
<div className="vector-line top-0 left-0 transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6 text-white border border-white/10">
<svg className="lucide lucide-box w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">3D WebGL</h3>
<p className="text-sm text-gray-400 leading-relaxed">Immersive 3D experiences integrated directly into the DOM using React Three Fiber.</p>
</div>

<div className="group p-8 rounded-3xl border transition-all duration-500 reveal-scroll bg-white/[0.02] border-white/5 hover:border-purple-500/30 hover:bg-white/[0.05] hover:-translate-y-2 relative overflow-hidden">
<div className="vector-line top-0 left-0 transition-transform duration-1000"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-teal-500/20 flex items-center justify-center mb-6 text-white border border-white/10">
<svg className="lucide lucide-zap w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Optimization</h3>
<p className="text-sm text-gray-400 leading-relaxed">Performance tuning for existing applications to improve Core Web Vitals.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative" id="pricing">
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 reveal-scroll">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Investment</h2>
<div className="flex items-center justify-center gap-4 mt-6">
<span className="text-sm font-semibold transition-colors text-white" id="currency-label-usd">USD</span>
<button className="w-14 h-8 rounded-full relative px-1 transition-colors focus:outline-none bg-white/10 hover:bg-white/20 border border-white/10" id="currency-toggle">
<div className="w-6 h-6 rounded-full absolute top-1 left-1 transition-transform duration-300 bg-purple-500 shadow-lg" id="toggle-circle"></div>
</button>
<span className="text-sm font-semibold transition-colors text-gray-500" id="currency-label-pkr">PKR</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="p-8 rounded-3xl border reveal-scroll border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-all duration-500">
<h3 className="text-lg font-medium text-gray-400">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold currency-amount text-white" data-pkr="250k" data-usd="999">$999</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-gray-400">
<li className="flex gap-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Next.js Landing Page</li>
<li className="flex gap-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Basic SEO Setup</li>
</ul>
<a className="mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors bg-white/5 border border-white/10 text-white hover:bg-white/10" href="#contact">Select Plan</a>
</div>

<div className="p-10 rounded-3xl border border-purple-500/50 bg-[#0f0716]/80 backdrop-blur-xl relative transform scale-105 shadow-2xl shadow-purple-900/20 reveal-scroll z-10 group">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent rounded-3xl pointer-events-none"></div>
<h3 className="text-lg font-medium text-white">Standard</h3>
<div className="mt-4 flex items-baseline">
<span className="text-5xl font-bold currency-amount text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" data-pkr="650k" data-usd="2,499">$2,499</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-gray-300">
<li className="flex gap-3"><svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Full Stack Application</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Auth &amp; Database</li>
</ul>
<a className="magnetic-btn mt-8 block w-full rounded-xl py-4 text-center text-sm font-bold transition-transform hover:scale-105 bg-white text-black shadow-lg shadow-purple-500/10" href="#contact">Get Started</a>
</div>

<div className="p-8 rounded-3xl border reveal-scroll border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-all duration-500">
<h3 className="text-lg font-medium text-gray-400">Premium</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold currency-amount text-white" data-pkr="1.3M" data-usd="4,999">$4,999</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-gray-400">
<li className="flex gap-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> SaaS Architecture</li>
<li className="flex gap-3"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Priority Support</li>
</ul>
<a className="mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-colors bg-white/5 border border-white/10 text-white hover:bg-white/10" href="#contact">Select Plan</a>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 border-t border-white/5 relative bg-gradient-to-b from-black to-purple-950/20" id="contact">
<div className="max-w-2xl mx-auto text-center reveal-scroll relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">Ready to scale?</h2>
<p className="text-gray-400 mb-12 text-lg">Leave your details and let's build something extraordinary.</p>
<form className="space-y-4 text-left glass p-10 rounded-3xl border border-white/10 shadow-2xl">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Name</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors bg-white/5 border-white/10 text-white placeholder-gray-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors bg-white/5 border-white/10 text-white placeholder-gray-600" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-gray-500 uppercase font-bold tracking-wider">Message</label>
<textarea className="w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors bg-white/5 border-white/10 text-white placeholder-gray-600" placeholder="Tell me about your vision..." rows="4"></textarea>
</div>
<button className="magnetic-btn w-full font-bold rounded-xl py-4 transition-all bg-white text-black hover:bg-purple-50 hover:scale-[1.02] shadow-lg" type="button">Send Message</button>
</form>
</div>
</section>

<footer className="py-12 border-t text-center border-white/5 bg-black">
<div className="flex items-center justify-center gap-2 mb-4">
<span className="text-xl font-bold tracking-tight text-white">RH<span className="text-purple-500">.</span></span>
</div>
<p className="text-xs text-gray-600 tracking-widest uppercase">
                    © 2024 Rizwan Hussain.
                </p>
</footer>
</div> 
</div> 

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">

<div className="mb-4 w-[350px] h-[450px] glass-heavy rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right scale-0 opacity-0 transform" id="chat-window">

<div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">AI</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border border-black"></div>
</div>
<div>
<h4 className="text-sm font-semibold text-white">Rizwan's Assistant</h4>
<p className="text-[10px] text-green-400">Online</p>
</div>
</div>
<button className="text-gray-400 hover:text-white transition-colors" onclick="toggleChat()">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto space-y-4 scroll-smooth" id="chat-messages">


</div>

<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<form className="flex gap-2" id="chat-form">
<input className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="bg-purple-600 hover:bg-purple-500 text-white rounded-xl p-2 transition-colors" type="submit">
<svg className="lucide lucide-send-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path><path d="M6 12h16"></path></svg>
</button>
</form>
</div>
</div>

<button className="magnetic-btn w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-110 transition-all duration-300 relative group overflow-hidden" id="chat-fab" onclick="toggleChat()">
<span className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></span>
<svg className="lucide lucide-message-square-code relative z-10" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="m10 10 2 2 2-2"></path></svg>
<span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
</span>
</button>
</div>



    </>
  );
}
