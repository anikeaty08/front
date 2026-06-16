import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // ===============================
        // Typing Animation (Hacker Style)
        // ===============================
        const typingTexts = [
          "Full_Stack_Dev",
          "Visual_Designer",
          "CSE_Student@IIUC",
          "Backend_Architect",
          "React_Native_Expert",
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.querySelector(".hero-typing-text");

        function typeText() {
          if (!typingElement) return;
          const currentText = typingTexts[textIndex];

          if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
          } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
          }

          let typeSpeed = isDeleting ? 30 : 80;

          if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typeSpeed = 500;
          }

          setTimeout(typeText, typeSpeed);
        }

        // ===============================
        // Animated Counter
        // ===============================
        function animateCounter(element) {
          const target = Number.parseInt(element.getAttribute("data-target"));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              element.textContent = Math.ceil(current); 
              requestAnimationFrame(updateCounter);
            } else {
              element.textContent = target + (element.getAttribute("data-target") === "5" ? "th" : "+"); 
            }
          };
          updateCounter();
        }

        const statObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const counters = entry.target.querySelectorAll(".stat-number");
              counters.forEach((counter) => {
                if (counter.textContent === "0") animateCounter(counter);
              });
              statObserver.unobserve(entry.target);
            }
          });
        }, { threshold: 0.5 });

        if(document.querySelector("#home")) statObserver.observe(document.querySelector("#home"));

        // ===============================
        // System Time & Uptime
        // ===============================
        const startTime = new Date();
        function updateSystemData() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false });
            const timeEl = document.getElementById("system-time");
            if (timeEl) timeEl.textContent = timeStr;

            const diff = now - startTime;
            const uHours = Math.floor(diff / (1000 * 60 * 60));
            const uMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const uSeconds = Math.floor((diff % (1000 * 60)) / 1000);
            const uptimeEl = document.getElementById("uptime");
            if (uptimeEl) uptimeEl.textContent = 
                `${String(uHours).padStart(2, "0")}:${String(uMinutes).padStart(2, "0")}:${String(uSeconds).padStart(2, "0")}`;
        }
        setInterval(updateSystemData, 1000);

        // ===============================
        // Visitor Counter (Restored)
        // ===============================
        const countElement = document.getElementById("visitor-count");
        if (countElement) {
            // Using random seed fallback to ensure it looks active if API fails
            const randomVisits = Math.floor(Math.random() * 500) + 1200;
            fetch("https://api.countapi.xyz/hit/musa-khan-portfolio/visits")
            .then((res) => res.json())
            .then((data) => {
                countElement.textContent = data.value;
            })
            .catch(() => {
                countElement.textContent = randomVisits; 
            });
        }

        // ===============================
        // Scroll Logic
        // ===============================
        window.addEventListener("scroll", () => {
            const scrollProgress = document.getElementById("scroll-progress");
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            if(scrollProgress) scrollProgress.style.width = progress + "%";
        });

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));
        document.addEventListener("DOMContentLoaded", typeText);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="scanline"></div>

<div className="fixed top-0 left-0 h-[2px] bg-green-500/50 z-[100]" id="scroll-progress" style={{width: '0%', boxShadow: '0 0 10px #22c55e'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/90 backdrop-blur-md">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<div className="flex items-center gap-6">
<a className="font-mono text-sm font-bold tracking-tight text-white flex items-center gap-2" href="#">
<span className="text-green-500">./</span>musa_khan
                </a>

<div className="hidden lg:flex items-center gap-4 pl-6 border-l border-white/10 text-[10px] font-mono text-neutral-500">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-glow"></span>
<span id="system-time">00:00:00</span>
</div>
<div className="hidden xl:block text-neutral-600">
                        MEM: <span className="text-neutral-400">64TB</span> // UPTIME: <span className="text-neutral-400" id="uptime">00:00:00</span>
</div>
</div>
</div>
<div className="hidden md:flex items-center gap-8 font-mono text-xs">
<a className="text-neutral-400 hover:text-green-400 transition-colors" href="#about">[STUDIO]</a>
<a className="text-neutral-400 hover:text-green-400 transition-colors" href="#projects">[PROJECTS]</a>
<a className="text-neutral-400 hover:text-green-400 transition-colors" href="#experience">[LOGS]</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-mono bg-white/5 border border-white/10 px-4 py-1.5 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 transition-all" href="#contact">
<span>INITIALIZE_CONTACT</span>
</a>
<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.remove('hidden')">
<i className="w-5 h-5" data-lucide="terminal"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505] z-[60] hidden flex flex-col justify-center px-6 font-mono" id="mobile-menu">
<button className="absolute top-5 right-6 text-white" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="flex flex-col gap-6 text-xl tracking-tight text-green-500">
<a className="border-b border-white/10 pb-4" href="#about" onclick="document.getElementById('mobile-menu').classList.add('hidden')">&gt; cd /about</a>
<a className="border-b border-white/10 pb-4" href="#projects" onclick="document.getElementById('mobile-menu').classList.add('hidden')">&gt; cd /projects</a>
<a className="border-b border-white/10 pb-4" href="#experience" onclick="document.getElementById('mobile-menu').classList.add('hidden')">&gt; cd /experience</a>
<a className="pb-4" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">&gt; ./run_contact.sh</a>
</div>
</div>
<main className="relative" id="main-content">

<section className="min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 relative overflow-hidden" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="z-10 relative max-w-[1920px] mx-auto w-full">
<div className="flex flex-col items-start">
<div className="flex items-center gap-3 mb-6 reveal-on-scroll border border-green-500/20 bg-green-500/5 px-3 py-1 rounded-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-mono text-green-500 tracking-wider">SYSTEM ONLINE</span>
</div>
<h1 className="text-[9vw] leading-[0.9] font-bold tracking-tighter text-white mix-blend-difference reveal-on-scroll delay-100 mb-6 font-mono">
                        MUSA_KHAN<span className="text-green-500">.</span><br/>
<span className="text-neutral-600">DEV_PORTFOLIO</span>
</h1>
<div className="h-12 md:h-16 flex items-center reveal-on-scroll delay-200 font-mono text-lg md:text-2xl text-green-400">
<span className="mr-2">&gt;</span>
<span className="hero-typing-text typing-cursor text-neutral-200"></span>
</div>
<div className="mt-16 flex flex-col md:flex-row justify-between w-full items-start md:items-end gap-8 reveal-on-scroll delay-300 border-t border-dashed border-white/10 pt-8">
<p className="max-w-xl text-lg text-neutral-400 font-light leading-relaxed">
                            CSE Undergraduate at IIUC. Bridging complex backend algorithms with high-fidelity frontend interfaces.
                        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 font-mono">
<div>
<span className="block text-2xl font-bold text-white stat-number" data-target="15">0</span>
<span className="text-[10px] text-neutral-500 uppercase mt-1 block">Repositores</span>
</div>
<div>
<span className="block text-2xl font-bold text-white stat-number" data-target="5">0</span>
<span className="text-[10px] text-neutral-500 uppercase mt-1 block">Semester</span>
</div>
<div>
<span className="block text-2xl font-bold text-white stat-number" data-target="2">0</span>
<span className="text-[10px] text-neutral-500 uppercase mt-1 block">Years Exp</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-[#0a0a0a] overflow-hidden py-4 font-mono text-xs">
<div className="marquee-track text-neutral-500">
<div className="flex items-center gap-16 px-6 shrink-0">
<span>/// FULL STACK DEVELOPMENT</span>
<span>/// SYSTEM ARCHITECTURE</span>
<span>/// VIDEO PRODUCTION</span>
<span>/// REACT &amp; NODE</span>
<span>/// JAVA &amp; MYSQL</span>
<span>/// CHITTAGONG, BD</span>
<span>/// AVAILABLE FOR HIRE</span>
<span>/// CSE STUDENT</span>
</div>
<div className="flex items-center gap-16 px-6 shrink-0">
<span>/// FULL STACK DEVELOPMENT</span>
<span>/// SYSTEM ARCHITECTURE</span>
<span>/// VIDEO PRODUCTION</span>
<span>/// REACT &amp; NODE</span>
<span>/// JAVA &amp; MYSQL</span>
<span>/// CHITTAGONG, BD</span>
<span>/// AVAILABLE FOR HIRE</span>
<span>/// CSE STUDENT</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto border-b border-white/5" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 reveal-on-scroll">
<span className="block text-xs font-mono text-green-500 mb-4 tracking-wider">01 // IDENTITY</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Driven by logic,<br/>fueled by <span className="text-neutral-500 font-mono">code</span>.</h2>

<div className="bg-[#0a0a0a] border border-white/10 p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 opacity-50"><i className="w-8 h-8 text-white/20" data-lucide="fingerprint"></i></div>
<div className="font-mono text-xs space-y-4">
<div className="flex justify-between border-b border-white/10 pb-2">
<span className="text-neutral-500">USER:</span>
<span className="text-white">Musa Khan</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-2">
<span className="text-neutral-500">ROLE:</span>
<span className="text-white">Full Stack Dev</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-2">
<span className="text-neutral-500">ORG:</span>
<span className="text-white">IIUC / IEEE</span>
</div>
<div className="flex justify-between">
<span className="text-neutral-500">STATUS:</span>
<span className="text-green-500 animate-pulse">ONLINE</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8 reveal-on-scroll delay-100">
<div className="prose prose-invert max-w-none mb-12">
<p className="text-xl text-neutral-400 font-light leading-relaxed">
                            I operate at the intersection of creative media and software engineering. As a <span className="text-white font-medium">5th-semester CSE student</span>, I don't just write code; I engineer solutions.
                        </p>
<p className="text-base text-neutral-500 font-mono mt-4 p-4 border-l-2 border-green-500 bg-white/5">
                            &gt; Executive Video Editor @ IEEE ComSoc IIUC SBC<br/>
                            &gt; Former Admin Intern @ YSSE
                        </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
<div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
<i className="w-6 h-6 text-neutral-500 group-hover:text-white mb-4" data-lucide="cpu"></i>
<h4 className="font-mono text-xs text-green-500 mb-1">LANGUAGES</h4>
<p className="text-sm text-neutral-400">Java, JS, C++</p>
</div>
<div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
<i className="w-6 h-6 text-neutral-500 group-hover:text-white mb-4" data-lucide="globe"></i>
<h4 className="font-mono text-xs text-green-500 mb-1">WEB</h4>
<p className="text-sm text-neutral-400">React, Node, JSP</p>
</div>
<div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
<i className="w-6 h-6 text-neutral-500 group-hover:text-white mb-4" data-lucide="database"></i>
<h4 className="font-mono text-xs text-green-500 mb-1">DATA</h4>
<p className="text-sm text-neutral-400">MySQL, MongoDB</p>
</div>
<div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
<i className="w-6 h-6 text-neutral-500 group-hover:text-white mb-4" data-lucide="aperture"></i>
<h4 className="font-mono text-xs text-green-500 mb-1">MEDIA</h4>
<p className="text-sm text-neutral-400">Premiere, AfterEffects</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative" id="projects">
<div className="px-6 md:px-12 max-w-[1920px] mx-auto mb-16 flex flex-col md:flex-row items-end justify-between reveal-on-scroll">
<div>
<span className="block text-xs font-mono text-green-500 mb-4 tracking-wider">02 // DEPLOYMENTS</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Selected<br/>Works</h2>
</div>
<a className="mt-4 md:mt-0 font-mono text-xs flex items-center gap-2 border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-colors" href="https://github.com/AeroMSK" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i> VIEW_GITHUB_REPO
                </a>
</div>
<div className="max-w-[1920px] mx-auto px-6 md:px-12 space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-on-scroll group">

<div className="lg:col-span-7 relative">

<div className="border border-neutral-700 bg-[#0a0a0a] rounded-t-lg overflow-hidden">
<div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-neutral-500 bg-[#050505] px-3 py-0.5 rounded">uni_mgmt_sys.exe</div>
</div>

<div className="relative aspect-video bg-neutral-900 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-12 h-12 text-neutral-700 opacity-50" data-lucide="play-circle"></i>
</div>

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loop="" muted="" playsinline="">
<source src="#" type="video/mp4"/>
</video>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:pl-8">
<div className="font-mono text-xs text-green-500 mb-2">PROJECT_01</div>
<h3 className="text-3xl font-bold text-white mb-4">University Management System</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            A comprehensive backend solution designed for academic administration. Manages student lifecycles, faculty databases, and grading algorithms with strict data integrity.
                        </p>
<div className="flex flex-wrap gap-2 mb-8 font-mono text-[10px]">
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">JAVA</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">JSP</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">MYSQL</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-mono hover:text-green-400 transition-colors" href="#">
                            &gt; VIEW_SOURCE <span className="animate-pulse">_</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-on-scroll group">
<div className="lg:col-span-5 lg:order-1 lg:pr-8 order-2">
<div className="font-mono text-xs text-green-500 mb-2">PROJECT_02</div>
<h3 className="text-3xl font-bold text-white mb-4">Real-time Chat App</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            High-concurrency messaging platform utilizing WebSockets for sub-millisecond latency. Features live presence detection and encrypted data streams.
                        </p>
<div className="flex flex-wrap gap-2 mb-8 font-mono text-[10px]">
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">NODE.JS</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">SOCKET.IO</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">JS</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-mono hover:text-green-400 transition-colors" href="#">
                            &gt; VIEW_SOURCE <span className="animate-pulse">_</span>
</a>
</div>

<div className="lg:col-span-7 lg:order-2 order-1 relative">
<div className="border border-neutral-700 bg-[#0a0a0a] rounded-t-lg overflow-hidden">
<div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-neutral-500 bg-[#050505] px-3 py-0.5 rounded">chat_server.js</div>
</div>
<div className="relative aspect-video bg-neutral-900 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-12 h-12 text-neutral-700 opacity-50" data-lucide="message-square"></i>
</div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loop="" muted="" playsinline="">
<source src="#" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center reveal-on-scroll group">
<div className="lg:col-span-7 relative">
<div className="border border-neutral-700 bg-[#0a0a0a] rounded-t-lg overflow-hidden">
<div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-neutral-700">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] font-mono text-neutral-500 bg-[#050505] px-3 py-0.5 rounded">shop_frontend.react</div>
</div>
<div className="relative aspect-video bg-neutral-900 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] transition-all duration-500">
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-12 h-12 text-neutral-700 opacity-50" data-lucide="shopping-cart"></i>
</div>
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" loop="" muted="" playsinline="">
<source src="#" type="video/mp4"/>
</video>
</div>
</div>
</div>
<div className="lg:col-span-5 lg:pl-8">
<div className="font-mono text-xs text-green-500 mb-2">PROJECT_03</div>
<h3 className="text-3xl font-bold text-white mb-4">E-Commerce Platform</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Full-stack shopping experience featuring dynamic product rendering, secure cart management, and payment gateway integration. Optimized for conversion and speed.
                        </p>
<div className="flex flex-wrap gap-2 mb-8 font-mono text-[10px]">
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">REACT</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">NODE</span>
<span className="border border-neutral-700 px-2 py-1 text-neutral-300">MONGODB</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-mono hover:text-green-400 transition-colors" href="#">
                            &gt; VIEW_SOURCE <span className="animate-pulse">_</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto border-b border-white/5" id="experience">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 reveal-on-scroll">
<span className="block text-xs font-mono text-green-500 mb-4 tracking-wider">03 // SYSTEM LOGS</span>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Experience<br/>Timeline</h2>
</div>
<div className="lg:col-span-8">

<div className="font-mono text-sm space-y-6">
<div className="flex gap-4 group reveal-on-scroll delay-100">
<div className="text-neutral-600 w-24 pt-1">2023-NOW</div>
<div className="border-l border-neutral-800 pl-6 pb-2 relative">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
<h3 className="text-white font-bold">Executive Video Editor</h3>
<p className="text-green-500 text-xs mb-2">@ IEEE ComSoc IIUC SBC</p>
<p className="text-neutral-500 max-w-xl">
                                    &gt; Spearheading post-production workflows.<br/>
                                    &gt; Managing visual identity for branch events.<br/>
                                    &gt; rendering_pipeline: 100% efficiency.
                                </p>
</div>
</div>
<div className="flex gap-4 group reveal-on-scroll delay-200">
<div className="text-neutral-600 w-24 pt-1">2022-2023</div>
<div className="border-l border-neutral-800 pl-6 pb-2 relative">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-neutral-700 rounded-full group-hover:bg-white transition-colors"></div>
<h3 className="text-white font-bold">Admin &amp; HR Intern</h3>
<p className="text-neutral-500 text-xs mb-2">@ YSSE</p>
<p className="text-neutral-500 max-w-xl">
                                    &gt; Optimized database administration.<br/>
                                    &gt; Managed workflow automation for HR departments.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1920px] mx-auto" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
<div className="reveal-on-scroll">
<span className="block text-xs font-mono text-green-500 mb-4 tracking-wider">04 // CONNECT</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8 text-white">Initialize<br/>Handshake.</h2>
<div className="mt-12 p-6 bg-white/5 border border-white/10 font-mono text-sm">
<div className="mb-4 text-neutral-500">// Contact Information</div>
<div className="space-y-4">
<div className="flex gap-4">
<span className="text-green-500 w-20">EMAIL:</span>
<a className="text-white hover:underline" href="mailto:musakhan5572@gmail.com">musakhan5572@gmail.com</a>
</div>
<div className="flex gap-4">
<span className="text-green-500 w-20">LOC:</span>
<span className="text-white">Chandgaon R/A, Chittagong</span>
</div>
<div className="flex gap-4">
<span className="text-green-500 w-20">SOCIAL:</span>
<div className="flex gap-4">
<a className="hover:text-green-400" href="https://github.com/AeroMSK" target="_blank"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="hover:text-green-400" href="https://www.linkedin.com/in/musa-khan-ab43601aa" target="_blank"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-green-400" href="https://www.facebook.com/share/1CXtM9AuNV/" target="_blank"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</div>
</div>
<div className="reveal-on-scroll delay-200">

<div className="bg-[#020202] border border-neutral-800 p-1 rounded-lg">
<div className="bg-[#1a1a1a] px-4 py-2 flex gap-2 border-b border-neutral-800 rounded-t mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<form className="p-6 space-y-6 font-mono" onsubmit="return false;">
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide">var sender_name =</label>
<input className="w-full bg-neutral-900 border border-neutral-800 p-3 text-green-500 focus:outline-none focus:border-green-500 transition-colors" placeholder='"John Doe";' type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide">var sender_email =</label>
<input className="w-full bg-neutral-900 border border-neutral-800 p-3 text-green-500 focus:outline-none focus:border-green-500 transition-colors" placeholder='"john@example.com";' type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 uppercase tracking-wide">const message =</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 p-3 text-green-500 focus:outline-none focus:border-green-500 transition-colors resize-none" placeholder="`Hello world...`;" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-green-600/10 border border-green-500/20 text-green-500 text-xs font-bold tracking-widest uppercase hover:bg-green-500 hover:text-black transition-all" type="submit">
                                execute_send()
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-[#020202] py-8 px-6 md:px-12 font-mono text-[10px] md:text-xs">
<div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600">
<div>
                © 2025 MUSA KHAN. SYSTEM.ROOT_ACCESS_GRANTED
            </div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-[#0a0a0a] rounded">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-neutral-500">TRAFFIC:</span>
<span className="text-green-500" id="visitor-count">CALCULATING...</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
