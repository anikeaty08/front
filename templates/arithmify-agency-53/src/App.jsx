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



        // --- 1. GLOBAL STATE DEFINITION ---
        const defaultState = {
            theme: { accent: "#ccff00" },
            nav: { brand: "Arithmify" },
            hero: {
                badge: "Digital Agency of the Year 2024",
                title1: "Digital.",
                title2: "Redefined.",
                sub: "We build bold, vibrant, and scalable digital experiences.",
                marquee: ["STRATEGY", "DESIGN", "DEVELOPMENT", "WEB3", "AI SOLUTIONS", "BRANDING", "UI/UX"]
            },
            services: {
                title: "Expertise",
                sub: "Comprehensive digital solutions designed to elevate your brand.",
                items: [
                    { icon: "solar:pen-new-square-linear", title: "UI/UX Design", desc: "Crafting intuitive, human-centric interfaces that convert." },
                    { icon: "solar:code-square-linear", title: "Web Architecture", desc: "Building fast, scalable, and secure modern web applications." },
                    { icon: "solar:smartphone-linear", title: "Mobile Ecosystems", desc: "Native and cross-platform mobile solutions for global scale." },
                    { icon: "solar:magnifer-linear", title: "SEO Optimization", desc: "Data-driven organic strategies to dominate search results." },
                    { icon: "solar:chart-square-linear", title: "Growth Marketing", desc: "Scaling businesses rapidly through hyper-targeted campaigns." },
                    { icon: "solar:server-square-linear", title: "Cloud Infrastructure", desc: "Robust, resilient server architecture for enterprise needs." }
                ]
            },
            portfolio: {
                title: "Selected Work",
                items: [
                    { title: "Fintech Dashboard", category: "Web App", img: "https://images.unsplash.com/photo-1616803140344-6682afb13cda?auto=format&fit=crop&w=800&q=80" },
                    { title: "Eco-commerce Platform", category: "E-Commerce", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" },
                    { title: "Healthcare AI Assistant", category: "Mobile App", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
                    { title: "Decentralized Exchange", category: "Web3", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" }
                ]
            },
            about: {
                title: "We build world-class digital products.",
                sub: "We act as your dedicated technical co-founders.",
                stats: [
                    { value: "120+", label: "Projects Delivered" },
                    { value: "15+", label: "Global Awards" },
                    { value: "99%", label: "Client Satisfaction" },
                    { value: "24/7", label: "Dev Support" }
                ]
            },
            footer: {
                copy: "Arithmify Inc.",
                loc: "Engineered in San Francisco"
            }
        };

        // Initialize state from LocalStorage or Fallback to Defaults
        let state = JSON.parse(localStorage.getItem('arithmify_cms_state')) || JSON.parse(JSON.stringify(defaultState));

        // --- 2. UTILITY FUNCTIONS ---
        function hexToRgb(hex) {
            let r = parseInt(hex.slice(1, 3), 16),
                g = parseInt(hex.slice(3, 5), 16),
                b = parseInt(hex.slice(5, 7), 16);
            return `${r}, ${g}, ${b}`;
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').textContent = msg;
            toast.classList.remove('translate-x-[150%]');
            setTimeout(() => toast.classList.add('translate-x-[150%]'), 3500);
        }

        // Exposed globally for onclick handler
        window.formatJSON = function(id) {
            try {
                const el = document.getElementById(id);
                const val = JSON.parse(el.value);
                el.value = JSON.stringify(val, null, 4);
                el.classList.add('ring-2', 'ring-green-500');
                setTimeout(() => el.classList.remove('ring-2', 'ring-green-500'), 500);
            } catch(e) {
                alert("Syntax Error: Ensure the JSON is perfectly valid (quotes around keys, no trailing commas).");
            }
        }

        // --- 3. DYNAMIC RENDERING ENGINES ---
        function renderMarquee() {
            const container = document.getElementById('pub-marquee-container');
            const arr = [...state.hero.marquee, ...state.hero.marquee]; // Duplicate for seamless infinite loop
            container.innerHTML = arr.map(item => `
                <span class="text-white/30 text-4xl md:text-5xl font-['Syne',sans-serif] font-bold uppercase tracking-widest hover:text-[rgb(var(--accent))] hover:scale-110 transition-all duration-300 cursor-default">${item}</span>
                <iconify-icon icon="solar:star-fall-minimalistic-linear" class="text-[rgb(var(--accent))] text-2xl animate-pulse"></iconify-icon>
            `).join('');
        }

        function renderServices() {
            const container = document.getElementById('pub-services-grid');
            container.innerHTML = state.services.items.map((s, i) => `
                <div class="reveal reveal-delay-${(i%3 + 1)*100} group p-8 rounded-3xl bg-[#111]/50 backdrop-blur-sm border border-[#222] hover:border-[rgb(var(--accent))] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-[rgb(var(--accent))] to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"></div>
                    <div class="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-[#333] flex items-center justify-center mb-8 group-hover:bg-[rgb(var(--accent))] group-hover:-rotate-6 transition-all duration-300">
                        <iconify-icon icon="${s.icon}" class="text-2xl text-[rgb(var(--accent))] group-hover:text-black transition-colors"></iconify-icon>
                    </div>
                    <h3 class="text-xl font-['Syne',sans-serif] font-bold tracking-tight text-white mb-3">${s.title}</h3>
                    <p class="text-gray-400 text-sm leading-relaxed">${s.desc}</p>
                </div>
            `).join('');
            initScrollReveal();
        }

        function renderPortfolio() {
            const container = document.getElementById('pub-portfolio-grid');
            container.innerHTML = state.portfolio.items.map((p, i) => `
                <div class="reveal reveal-delay-${(i%2 + 1)*100} group cursor-pointer">
                    <div class="relative w-full h-[450px] rounded-3xl overflow-hidden mb-6 bg-[#111]">
                        <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-700 pointer-events-none"></div>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                        <div class="absolute top-6 left-6 z-20 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white uppercase tracking-widest shadow-xl">
                            ${p.category}
                        </div>
                        <div class="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-black opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(var(--accent),0.5)]">
                            <iconify-icon icon="solar:arrow-right-up-linear" class="text-xl"></iconify-icon>
                        </div>
                    </div>
                    <h3 class="text-3xl font-['Syne',sans-serif] font-bold text-white group-hover:text-[rgb(var(--accent))] transition-colors duration-300">
                        ${p.title}
                    </h3>
                </div>
            `).join('');
            initScrollReveal();
        }

        function renderStats() {
            const container = document.getElementById('pub-stats-grid');
            container.innerHTML = state.about.stats.map((s, i) => `
                <div class="reveal reveal-delay-${i*100} p-8 border border-[#222] rounded-3xl bg-[#0a0a0a] hover:bg-[#111] hover:border-[#444] transition-all duration-300 flex flex-col justify-center items-start">
                    <div class="text-5xl font-['Syne',sans-serif] font-bold text-[rgb(var(--accent))] mb-3 tracking-tighter">${s.value}</div>
                    <div class="text-xs text-gray-500 uppercase tracking-widest font-bold">${s.label}</div>
                </div>
            `).join('');
            initScrollReveal();
        }

        // --- 4. DATA BINDING ENGINE ---
        function applyStateToDOM() {
            // Apply CSS Variable globally
            document.documentElement.style.setProperty('--accent', hexToRgb(state.theme.accent));
            
            // Map text content
            document.getElementById('pub-brand-name').textContent = state.nav.brand;
            document.getElementById('pub-hero-badge').textContent = state.hero.badge;
            document.getElementById('pub-hero-title1').textContent = state.hero.title1;
            document.getElementById('pub-hero-title2').textContent = state.hero.title2;
            document.getElementById('pub-hero-sub').textContent = state.hero.sub;
            
            document.getElementById('pub-services-title').textContent = state.services.title;
            document.getElementById('pub-services-sub').textContent = state.services.sub;
            document.getElementById('pub-portfolio-title').textContent = state.portfolio.title;
            
            document.getElementById('pub-about-title').textContent = state.about.title;
            document.getElementById('pub-about-sub').textContent = state.about.sub;
            
            document.getElementById('pub-footer-copy').textContent = state.footer.copy;
            document.getElementById('pub-footer-loc').textContent = state.footer.loc;

            // Render complex structures
            renderMarquee();
            renderServices();
            renderPortfolio();
            renderStats();
        }

        function populateFormInputs() {
            document.getElementById('edit-accent').value = state.theme.accent;
            document.getElementById('edit-brand').value = state.nav.brand;
            
            document.getElementById('edit-hero-badge').value = state.hero.badge;
            document.getElementById('edit-hero-title1').value = state.hero.title1;
            document.getElementById('edit-hero-title2').value = state.hero.title2;
            document.getElementById('edit-hero-sub').value = state.hero.sub;

            document.getElementById('edit-services-title').value = state.services.title;
            document.getElementById('edit-portfolio-title').value = state.portfolio.title;
            document.getElementById('edit-about-title').value = state.about.title;

            // Arrays stringified for JSON editing
            document.getElementById('edit-services-json').value = JSON.stringify(state.services.items, null, 4);
            document.getElementById('edit-portfolio-json').value = JSON.stringify(state.portfolio.items, null, 4);

            document.getElementById('edit-footer-copy').value = state.footer.copy;
            document.getElementById('edit-footer-loc').value = state.footer.loc;
        }

        function initializeLiveBinding() {
            // Map array configuring input ID, state object key, and state property
            const simpleBindings = [
                { id: 'edit-accent', obj: 'theme', prop: 'accent' },
                { id: 'edit-brand', obj: 'nav', prop: 'brand' },
                { id: 'edit-hero-badge', obj: 'hero', prop: 'badge' },
                { id: 'edit-hero-title1', obj: 'hero', prop: 'title1' },
                { id: 'edit-hero-title2', obj: 'hero', prop: 'title2' },
                { id: 'edit-hero-sub', obj: 'hero', prop: 'sub' },
                { id: 'edit-services-title', obj: 'services', prop: 'title' },
                { id: 'edit-portfolio-title', obj: 'portfolio', prop: 'title' },
                { id: 'edit-about-title', obj: 'about', prop: 'title' },
                { id: 'edit-footer-copy', obj: 'footer', prop: 'copy' },
                { id: 'edit-footer-loc', obj: 'footer', prop: 'loc' },
            ];

            // Add real-time listeners for simple text inputs
            simpleBindings.forEach(binding => {
                document.getElementById(binding.id).addEventListener('input', (e) => {
                    state[binding.obj][binding.prop] = e.target.value;
                    applyStateToDOM();
                });
            });

            // Add real-time listeners for complex JSON arrays (with error catching)
            document.getElementById('edit-services-json').addEventListener('input', (e) => {
                try {
                    state.services.items = JSON.parse(e.target.value);
                    e.target.classList.remove('border-red-500');
                    renderServices();
                } catch(err) {
                    e.target.classList.add('border-red-500'); // Visual indicator of invalid JSON
                }
            });
            
            document.getElementById('edit-portfolio-json').addEventListener('input', (e) => {
                try {
                    state.portfolio.items = JSON.parse(e.target.value);
                    e.target.classList.remove('border-red-500');
                    renderPortfolio();
                } catch(err) {
                    e.target.classList.add('border-red-500');
                }
            });
        }

        // --- 5. ANIMATIONS & UI INTERACTIONS ---
        function initScrollReveal() {
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            
            reveals.forEach(r => observer.observe(r));
        }

        // Setup executed on load
        document.addEventListener('DOMContentLoaded', () => {
            // Set dynamic footer year
            document.getElementById('current-year').textContent = new Date().getFullYear();
            
            // Core Boot
            populateFormInputs();
            applyStateToDOM();
            initializeLiveBinding();
            
            // Authentication & Panel State Variables
            let isAdminOpen = false;
            let isAuthenticated = false;

            const toggleBtn = document.getElementById('view-toggle');
            const adminPanel = document.getElementById('admin-panel');
            const loginModal = document.getElementById('login-modal');
            const loginBox = document.getElementById('login-box');

            function openAdminPanel() {
                document.body.classList.add('admin-open');
                adminPanel.classList.remove('translate-x-full');
                toggleBtn.innerHTML = `<iconify-icon icon="solar:eye-linear" stroke-width="1.5" class="text-lg text-[rgb(var(--accent))]"></iconify-icon><span>View Live Site</span>`;
                isAdminOpen = true;
            }

            function closeAdminPanel() {
                document.body.classList.remove('admin-open');
                adminPanel.classList.add('translate-x-full');
                toggleBtn.innerHTML = `<iconify-icon icon="solar:laptop-minimalistic-linear" stroke-width="1.5" class="text-lg text-[rgb(var(--accent))]"></iconify-icon><span>Build Mode</span>`;
                isAdminOpen = false;
            }

            // Main floating button click handler
            toggleBtn.addEventListener('click', () => {
                if (isAdminOpen) {
                    closeAdminPanel();
                } else {
                    if (!isAuthenticated) {
                        // Open Login Modal with animation
                        loginModal.classList.remove('hidden');
                        void loginModal.offsetWidth; // Reflow for transition
                        loginModal.classList.remove('opacity-0');
                        loginBox.classList.remove('scale-95');
                    } else {
                        openAdminPanel();
                    }
                }
            });

            // Header close button in sidebar
            document.getElementById('close-admin').addEventListener('click', closeAdminPanel);

            // Login Modal actions
            document.getElementById('login-cancel').addEventListener('click', () => {
                loginModal.classList.add('opacity-0');
                loginBox.classList.add('scale-95');
                setTimeout(() => loginModal.classList.add('hidden'), 300);
                document.getElementById('login-error').classList.add('hidden');
            });

            document.getElementById('login-submit').addEventListener('click', () => {
                const u = document.getElementById('login-user').value;
                const p = document.getElementById('login-pass').value;
                
                // Hardcoded demo credentials
                if (u === 'admin' && p === 'admin') {
                    isAuthenticated = true;
                    loginModal.classList.add('opacity-0');
                    loginBox.classList.add('scale-95');
                    setTimeout(() => {
                        loginModal.classList.add('hidden');
                        openAdminPanel();
                        showToast('Authentication Successful');
                    }, 300);
                } else {
                    document.getElementById('login-error').classList.remove('hidden');
                    loginBox.classList.add('animate-[shake_0.5s_ease-in-out]');
                    setTimeout(() => loginBox.classList.remove('animate-[shake_0.5s_ease-in-out]'), 500);
                }
            });

            // Global Save & Reset handlers
            document.getElementById('admin-save').addEventListener('click', () => {
                localStorage.setItem('arithmify_cms_state', JSON.stringify(state));
                showToast('Website Successfully Published!');
            });

            document.getElementById('admin-reset').addEventListener('click', () => {
                if(confirm('Are you sure you want to discard changes and revert to default data?')) {
                    state = JSON.parse(JSON.stringify(defaultState));
                    populateFormInputs();
                    applyStateToDOM();
                    localStorage.removeItem('arithmify_cms_state');
                    showToast('Reverted to Factory Defaults');
                }
            });
            
            // Add custom keyframe for shake animation dynamically
            const styleSheet = document.createElement("style");
            styleSheet.innerText = `@keyframes shake { 0%, 100% {transform: translateX(0) scale(0.95);} 20%, 60% {transform: translateX(-5px) scale(0.95);} 40%, 80% {transform: translateX(5px) scale(0.95);} }`;
            document.head.appendChild(styleSheet);
        });
    
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
      

<button className="fixed bottom-6 left-6 z-[110] bg-[#1a1a1a] border border-[#333] hover:border-[rgb(var(--accent))] text-xs font-medium px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 shadow-2xl backdrop-blur-md hover:scale-105 active:scale-95" id="view-toggle">
<iconify-icon className="text-lg text-[rgb(var(--accent))]" icon="solar:laptop-minimalistic-linear" id="toggle-icon" strokeWidth="1.5"></iconify-icon>
<span id="toggle-text">Build Mode</span>
</button>

<div className="fixed top-6 right-6 z-[120] bg-white text-black px-6 py-3 rounded-xl font-semibold text-sm shadow-2xl transform translate-x-[150%] transition-transform duration-300 flex items-center gap-2 border-l-4" id="toast">
<iconify-icon className="text-lg" icon="solar:check-circle-bold" id="toast-icon"></iconify-icon>
<span id="toast-msg">Success!</span>
</div>

<div className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center" id="login-modal">
<div className="bg-[#0a0a0a] border border-[#222] p-8 rounded-2xl w-full max-w-sm transform scale-95 transition-transform duration-300 shadow-2xl" id="login-box">
<div className="flex items-center gap-3 mb-6 border-b border-[#222] pb-4">
<iconify-icon className="text-2xl text-[rgb(var(--accent))]" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<h2 className="text-xl font-['Syne',sans-serif] font-semibold tracking-tight text-white">Admin Access</h2>
</div>
<div className="space-y-4">
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Username</label>
<input className="w-full bg-[#050505] border border-[#333] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[rgb(var(--accent))] transition-colors" id="login-user" placeholder="admin" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-2">Password</label>
<input className="w-full bg-[#050505] border border-[#333] rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[rgb(var(--accent))] transition-colors" id="login-pass" placeholder="admin" type="password"/>
</div>
<div className="text-red-500 text-xs font-medium hidden" id="login-error">Invalid credentials. Hint: admin / admin</div>
<div className="pt-2 flex flex-col gap-2">
<button className="w-full py-2.5 bg-[rgb(var(--accent))] text-black text-sm font-semibold rounded-lg hover:bg-white transition-colors duration-300" id="login-submit">Authenticate</button>
<button className="w-full py-2 text-xs text-gray-500 hover:text-white transition-colors duration-300" id="login-cancel">Cancel</button>
</div>
</div>
</div>
</div>



<div className="w-full h-full overflow-y-auto relative origin-left" id="public-site-wrapper">

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/70 backdrop-blur-xl transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['Syne',sans-serif] text-2xl font-semibold tracking-tighter uppercase text-white hover:text-[rgb(var(--accent))] transition-colors duration-300" href="#" id="pub-brand-name">
                    Arithmify
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[rgb(var(--accent))] hover:after:w-full after:transition-all after:duration-300" href="#services" id="nav-services-link">Services</a>
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[rgb(var(--accent))] hover:after:w-full after:transition-all after:duration-300" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[rgb(var(--accent))] hover:after:w-full after:transition-all after:duration-300" href="#about">Agency</a>
</div>
<div className="hidden md:block">
<a className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-[rgb(var(--accent))] hover:shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:-translate-y-0.5 transition-all duration-300 inline-block" href="#contact" id="pub-nav-cta">
                        Start a Project
                    </a>
</div>
<button className="md:hidden text-white text-2xl hover:text-[rgb(var(--accent))] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0 pointer-events-none opacity-40 animate-blob" style={{background: 'radial-gradient(circle at 70% 30%, rgba(var(--accent), 0.15) 0%, transparent 50%)'}}></div>
<div className="absolute inset-0 z-0 pointer-events-none opacity-20 animate-blob animation-delay-2000" style={{background: 'radial-gradient(circle at 30% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 50%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-start mt-12 md:mt-0">
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-[rgb(var(--accent))] mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))] animate-pulse shadow-[0_0_8px_rgb(var(--accent))]"></span>
<span className="dynamic-text" id="pub-hero-badge">Digital Agency of the Year 2024</span>
</div>
<h1 className="reveal reveal-delay-100 text-6xl md:text-8xl lg:text-[9rem] font-['Syne',sans-serif] font-semibold tracking-tighter leading-[0.9] text-white max-w-5xl uppercase mb-6">
<span className="dynamic-text" id="pub-hero-title1">Digital.</span><br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-gradient-x dynamic-text" id="pub-hero-title2">Redefined.</span>
</h1>
<p className="reveal reveal-delay-200 text-base md:text-xl text-gray-400 font-medium max-w-2xl mb-10 leading-relaxed dynamic-text" id="pub-hero-sub">
                    We build bold, vibrant, and scalable digital experiences.
                </p>
<div className="reveal reveal-delay-300 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="group w-full sm:w-auto px-8 py-4 bg-[rgb(var(--accent))] text-black text-sm font-semibold rounded-full hover:shadow-[0_0_30px_rgba(var(--accent),0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2" href="#work">
                        See Our Work <iconify-icon className="text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="reveal reveal-delay-300 absolute bottom-0 left-0 w-full border-t border-white/5 bg-[#050505]/80 backdrop-blur-md py-6 overflow-hidden">
<div className="animate-marquee flex items-center gap-20 px-10" id="pub-marquee-container">

</div>
</div>
</section>

<section className="py-32 relative transition-all duration-500" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div>
<h2 className="text-4xl md:text-6xl font-['Syne',sans-serif] font-semibold tracking-tighter uppercase mb-4 dynamic-text" id="pub-services-title">Expertise</h2>
<p className="text-gray-400 text-base md:text-lg max-w-md dynamic-text" id="pub-services-sub">Comprehensive digital solutions designed to elevate your brand.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="pub-services-grid">

</div>
</div>
</section>

<section className="py-32 bg-[#0a0a0a]" id="work">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-4xl md:text-6xl font-['Syne',sans-serif] font-semibold tracking-tighter uppercase mb-16 dynamic-text" id="pub-portfolio-title">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16" id="pub-portfolio-grid">

</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-['Syne',sans-serif] font-semibold tracking-tighter mb-6 leading-tight dynamic-text" id="pub-about-title">We build digital products.</h2>
<p className="text-base text-gray-400 mb-8 leading-relaxed dynamic-text" id="pub-about-sub">
                            We are your technical co-founders.
                        </p>
</div>
<div className="grid grid-cols-2 gap-4" id="pub-stats-grid">

</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 reveal flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 font-medium">
<p>© <span id="current-year"></span> <span className="dynamic-text" id="pub-footer-copy">Arithmify</span></p>
<p className="dynamic-text" id="pub-footer-loc">Designed in SF</p>
</div>
</footer>
</div>



<aside className="w-[400px] h-full bg-[#0a0a0a] border-l border-[#222] flex flex-col absolute right-0 top-0 translate-x-full transition-transform duration-500 z-[100] shadow-2xl" id="admin-panel">
<header className="h-20 border-b border-[#222] flex items-center justify-between px-6 bg-[#050505] shrink-0">
<div>
<h2 className="font-['Syne',sans-serif] text-lg font-semibold tracking-tighter uppercase text-white">Live Editor</h2>
<p className="text-[10px] text-gray-500 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[rgb(var(--accent))]animate-pulse shadow-[0_0_8px_rgb(var(--accent))]"></span> Live</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#111] hover:bg-[#222] border border-[#333] transition-colors duration-300" id="close-admin">
<iconify-icon className="text-white text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-8 relative">

<div className="space-y-4">
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#222] pb-2">Global Settings</h3>
<div className="flex items-center justify-between bg-[#111] border border-[#333] p-3 rounded-lg">
<label className="text-xs font-semibold text-white">Brand Accent</label>
<div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#222] cursor-pointer">
<input className="absolute -top-2 -left-2 w-12 h-12 cursor-pointer" id="edit-accent" type="color"/>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Brand Name</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-brand" type="text"/>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#222] pb-2">Hero Section</h3>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Badge Text</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-[rgb(var(--accent))] text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-hero-badge" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Title 1</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-hero-title1" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Title 2</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-hero-title2" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Subtitle</label>
<textarea className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors resize-none" id="edit-hero-sub" rows="2"></textarea>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#222] pb-2">Content Titles</h3>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Services Title</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-services-title" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Portfolio Title</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-portfolio-title" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">About Title</label>
<textarea className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors resize-none" id="edit-about-title" rows="2"></textarea>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#222] pb-2">Database Editor</h3>
<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Services Matrix</label>
<button className="text-[10px] text-[rgb(var(--accent))] hover:underline flex items-center gap-1" onclick="formatJSON('edit-services-json')"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Format</button>
</div>
<textarea className="w-full bg-[#050505] border border-[#333] rounded-lg p-3 text-green-400 font-mono text-[10px] focus:border-[rgb(var(--accent))] outline-none transition-colors resize-y leading-relaxed" id="edit-services-json" rows="6" spellcheck="false"></textarea>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Portfolio Array</label>
<button className="text-[10px] text-[rgb(var(--accent))] hover:underline flex items-center gap-1" onclick="formatJSON('edit-portfolio-json')"><iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Format</button>
</div>
<textarea className="w-full bg-[#050505] border border-[#333] rounded-lg p-3 text-green-400 font-mono text-[10px] focus:border-[rgb(var(--accent))] outline-none transition-colors resize-y leading-relaxed" id="edit-portfolio-json" rows="6" spellcheck="false"></textarea>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-[#222] pb-2">Footer Details</h3>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Copyright Name</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-footer-copy" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Location</label>
<input className="w-full bg-[#111] border border-[#333] rounded-lg p-2.5 text-white text-xs focus:border-[rgb(var(--accent))] outline-none transition-colors" id="edit-footer-loc" type="text"/>
</div>
</div>
</div>
<div className="pb-24"></div> 
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-[#050505] border-t border-[#222] flex gap-3 z-10">
<button className="flex-1 py-3 bg-[rgb(var(--accent))] text-black text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(var(--accent),0.2)]" id="admin-save">Publish Live</button>
<button className="px-5 py-3 bg-[#111] border border-[#333] text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#222] hover:text-red-400 hover:border-red-900 transition-colors duration-300" id="admin-reset" title="Reset to Defaults"><iconify-icon className="text-lg" icon="solar:restart-linear"></iconify-icon></button>
</div>
</aside>


    </>
  );
}
