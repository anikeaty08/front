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



(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", {origin:"https://cal.com"});
Cal.ns.codecrest = "contact";



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
dark: {
900: '#050505',
800: '#0A0A0A',
700: '#111111',
},
light: {
50: '#FAFAFA',
100: '#F0F0F0',
200: '#E5E5E5'
}
},
letterSpacing: {
'tighter': '-0.04em',
'tight': '-0.02em',
},
fontSize: {
'huge': '14vw',
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Theme Logic
        const toggleBtn = document.getElementById('theme-toggle');
        const html = document.documentElement;
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        toggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        // Menu Logic
        function toggleMenu() {
            const menu = document.getElementById('menu-overlay');
            menu.classList.toggle('translate-y-full');
            
            if (!menu.classList.contains('translate-y-full')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        // Time Display
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
            document.getElementById('time-display').textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();

        // Toast Notification System
        function showToast(msg) {
            const toast = document.getElementById('toast');
            const message = document.getElementById('toast-message');
            message.textContent = msg;
            toast.classList.remove('translate-x-full');
            
            setTimeout(() => {
                toast.classList.add('translate-x-full');
            }, 3000);
        }

        // ----------------------------------------------------
        // Project Data & Navigation System (SPA Logic)
        // ----------------------------------------------------
        const projects = {
            nova: {
                title: "Nova Finance",
                category: "Fintech SaaS",
                year: "2024",
                services: "App Development, UI/UX, Security",
                link: "https://nova-finance-demo.com",
                desc: "Nova Finance required a complete overhaul of their customer-facing dashboard. We engineered a React-based application that processes real-time stock market data via WebSocket connections with sub-millisecond latency. The interface prioritizes clarity and speed, using a custom high-contrast dark mode to reduce eye strain for traders.",
                heroImg: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop",
                mockupImg: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070&auto=format&fit=crop",
                gridImages: [
                    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                ]
            },
            lumina: {
                title: "Lumina Fashion",
                category: "E-Commerce",
                year: "2023",
                services: "Shopify Headless, Brand Identity",
                link: "https://lumina-fashion.com",
                desc: "Lumina is a luxury fashion house that needed to transcend the typical grid-based e-commerce layout. We built a fluid, cursor-driven shopping experience where products float in a zero-gravity environment. Using a headless Shopify backend, we ensured that the immersive frontend didn't compromise on the robustness of inventory management and checkout flows.",
                heroImg: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2670&auto=format&fit=crop",
                mockupImg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
                gridImages: [
                    "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop"
                ]
            },
            apex: {
                title: "Apex Construct",
                category: "Architecture",
                year: "2024",
                services: "Web Design, 3D WebGL",
                link: "https://apex-construct.com",
                desc: "Apex Construct represents a paradigm shift in architectural digital presence. We were tasked with creating a portfolio experience that mirrored the firm's brutalist, minimalist aesthetic. The site utilizes heavy WebGL interactions to allow users to virtually walk through unbuilt concept spaces. The typography is stark, utilizing negative space as a core design element.",
                heroImg: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
                mockupImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
                gridImages: [
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                ]
            },
            orbital: {
                title: "Orbital AI",
                category: "Data Analytics",
                year: "2024",
                services: "Product Design, Data Viz",
                link: "https://orbital-ai-tech.com",
                desc: "Orbital AI is a machine learning platform for enterprise data visualization. The challenge was to make millions of data points legible and beautiful. We designed a dark-mode-first interface with neon accents to highlight critical metrics. The dashboard is fully customizable, allowing users to build their own command centers using a drag-and-drop grid system.",
                heroImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
                mockupImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
                gridImages: [
                    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop"
                ]
            },
            velos: {
                title: "Velos EV",
                category: "Automotive",
                year: "2023",
                services: "Landing Page, Motion Design",
                link: "https://velos-electric.com",
                desc: "For the launch of the Velos Electric Vehicle, we created a high-octane landing page focused on motion. Using scroll-triggered animations and 3D model integration, visitors can explore the car's features interactively. The site focuses on speed and sustainability, using a clean palette accented by electric blue.",
                heroImg: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2898&auto=format&fit=crop",
                mockupImg: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
                gridImages: [
                    "https://images.unsplash.com/photo-1593055424713-252f18796b59?q=80&w=2070&auto=format&fit=crop"
                ]
            }
        };

        function simulateVisit(url, title) {
            showToast(`Opening ${title} Live Site...`);
            // In a real scenario, this would window.open(url, '_blank');
        }

        function openProject(id) {
            const data = projects[id];
            if(!data) return;

            const content = document.getElementById('project-content');
            const overlay = document.getElementById('project-overlay');

            // Generate HTML for Project Page with Mock Live Browser
            content.innerHTML = `
                <!-- Large Header Image -->
                <div class="relative w-full h-[60vh] overflow-hidden">
                    <img src="${data.heroImg}" class="w-full h-full object-cover" alt="${data.title}">
                    <div class="absolute inset-0 bg-black/40"></div>
                    <div class="absolute bottom-0 left-0 p-6 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 class="font-display text-5xl md:text-8xl uppercase text-white tracking-tighter mb-2">${data.title}</h1>
                            <p class="text-white/80 uppercase tracking-widest text-sm">${data.category}</p>
                        </div>
                    </div>
                </div>
                
                <div class="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
                    <!-- Sidebar Details -->
                    <div class="md:col-span-1 space-y-8 sticky top-24 h-max">
                        <div class="border-t border-current pt-4">
                            <span class="block text-xs uppercase tracking-widest opacity-50 mb-2">Year</span>
                            <span class="text-xl font-display">${data.year}</span>
                        </div>
                        <div class="border-t border-current pt-4">
                            <span class="block text-xs uppercase tracking-widest opacity-50 mb-2">Services</span>
                            <span class="text-xl font-display leading-tight">${data.services}</span>
                        </div>
                        <div class="border-t border-current pt-4">
                            <span class="block text-xs uppercase tracking-widest opacity-50 mb-2">Client</span>
                            <span class="text-xl font-display">${data.title} Corp.</span>
                        </div>
                        
                        <!-- CTA Button -->
                        <div class="pt-8">
                            <button onclick="simulateVisit('${data.link}', '${data.title}')" class="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-6 rounded-full font-medium uppercase tracking-wider hover:opacity-80 transition-opacity flex items-center justify-between group">
                                <span>Visit Live Site</span>
                                <i data-lucide="arrow-up-right" class="w-5 h-5 group-hover:rotate-45 transition-transform"></i>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Main Content -->
                    <div class="md:col-span-2">
                        <h3 class="font-display text-2xl md:text-4xl uppercase leading-tight mb-8">Overview</h3>
                        <p class="text-lg leading-relaxed opacity-80 mb-12 font-light">${data.desc}</p>
                        
                        <!-- Mock Live Preview (Browser Window) -->
                        <div class="mb-12">
                            <h4 class="text-xs uppercase tracking-widest opacity-50 mb-4">Live Preview</h4>
                            <div class="browser-mockup w-full rounded-lg overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-black">
                                <!-- Browser Bar -->
                                <div class="h-10 bg-gray-100 dark:bg-gray-900 flex items-center px-4 border-b border-black/5 dark:border-white/5 gap-2">
                                    <div class="flex gap-1.5">
                                        <div class="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div class="flex-1 text-center">
                                        <div class="inline-block bg-white dark:bg-black px-4 py-0.5 rounded text-[10px] font-mono opacity-50">${data.link}</div>
                                    </div>
                                </div>
                                <!-- Content -->
                                <div class="relative aspect-video group cursor-pointer" onclick="simulateVisit('${data.link}', '${data.title}')">
                                    <img src="${data.mockupImg}" class="w-full h-full object-cover" alt="Live Site Preview">
                                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                        <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                            <span class="text-white text-xs uppercase tracking-widest font-medium">Click to Visit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 gap-8">
                            ${data.gridImages.map(img => `
                                <div class="w-full h-[300px] md:h-[500px] overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-sm">
                                    <img src="${img}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Project Detail">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="border-t border-black/10 dark:border-white/10 py-20 text-center bg-light-100 dark:bg-dark-800">
                    <p class="text-xs uppercase tracking-widest opacity-50 mb-4">Next Project</p>
                    <button onclick="closeProject()" class="font-display text-4xl md:text-6xl uppercase hover:opacity-50 transition-opacity">Back to Work</button>
                </div>
            `;

            overlay.classList.remove('translate-y-full');
            document.body.style.overflow = 'hidden';
            
            // Re-init icons for dynamic content
            setTimeout(() => lucide.createIcons(), 100);
        }

        function closeProject() {
            const overlay = document.getElementById('project-overlay');
            overlay.classList.add('translate-y-full');
            document.body.style.overflow = '';
        }

        // ----------------------------------------------------
        // Form Handling (AJAX to prevent redirect error)
        // ----------------------------------------------------
        const form = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const successMsg = document.getElementById('success-message');
        const formContainer = document.getElementById('form-container');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Loading State
            btnText.innerText = "Sending...";
            submitBtn.classList.add('opacity-70', 'pointer-events-none');

            const formData = new FormData(form);

            fetch("https://formsubmit.co/ajax/codecreststudio@gmail.com", {
                method: "POST",
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Success UI
                formContainer.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    formContainer.classList.add('hidden');
                    successMsg.classList.remove('hidden');
                    successMsg.classList.add('flex');
                }, 300);
            })
            .catch(error => {
                console.error('Error:', error);
                btnText.innerText = "Error - Try Again";
                submitBtn.classList.remove('opacity-70', 'pointer-events-none');
            });
        });

        function resetForm() {
            form.reset();
            successMsg.classList.add('hidden');
            successMsg.classList.remove('flex');
            
            formContainer.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
            formContainer.classList.add('opacity-100');
            
            btnText.innerText = "Send Inquiry";
            submitBtn.classList.remove('opacity-70', 'pointer-events-none');
        }

        // ----------------------------------------------------
        // Mouse Move Effects
        // ----------------------------------------------------
        const cards = document.querySelectorAll('.work-card');

        cards.forEach(card => {
            const img = card.querySelector('.parallax-img');
            const cursor = card.querySelector('.custom-cursor');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;  
                
                const xPercent = x / rect.width;
                const yPercent = y / rect.height;

                const moveX = (xPercent - 0.5) * -20;
                const moveY = (yPercent - 0.5) * -20; 
                
                if(img) {
                    img.style.transform = `scale(1.1) translate(${moveX}px, ${moveY}px)`;
                }

                if(cursor) {
                    cursor.style.left = `${x}px`;
                    cursor.style.top = `${y}px`;
                }
            });

            card.addEventListener('mouseleave', () => {
                if(img) {
                    img.style.transform = `scale(1) translate(0px, 0px)`;
                }
            });
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
      
<div className="noise-overlay"></div>

<div className="fixed top-24 right-6 z-[100] transform translate-x-full transition-transform duration-300 bg-black dark:bg-white text-white dark:text-black px-6 py-4 rounded shadow-2xl flex items-center gap-3" id="toast">
<i className="w-5 h-5 animate-spin" data-lucide="loader-2"></i>
<span className="text-sm font-medium uppercase tracking-wide" id="toast-message">Opening Project...</span>
</div>

<nav className="fixed top-0 w-full z-[60] border-b border-black/5 dark:border-white/10 bg-light-50/80 dark:bg-dark-900/80 backdrop-blur-md transition-colors duration-500">
<div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-full mx-auto">

<a className="flex items-center gap-1 group" href="#">
<div className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-display font-bold text-lg rounded-sm">C</div>
<span className="font-display font-semibold text-lg tracking-tighter uppercase hidden md:block group-hover:opacity-70 transition-opacity">CodeCrest</span>
</a>

<div className="flex items-center gap-6">

<button className="hidden md:flex items-center gap-2 text-xs uppercase font-medium tracking-widest hover:text-blue-500 transition-colors" data-cal-config='{"layout":"month_view"}' data-cal-link="codecreststudio">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Book a Call</span>
</button>
<button aria-label="Toggle Theme" className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors" id="theme-toggle">
<i className="w-5 h-5 hidden dark:block" data-lucide="sun"></i>
<i className="w-5 h-5 block dark:hidden" data-lucide="moon"></i>
</button>
<button className="flex items-center gap-2 uppercase text-xs font-medium tracking-widest border border-black/20 dark:border-white/20 px-4 py-2 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all" onclick="toggleMenu()">
<span>Menu</span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-dark-900 z-[70] transform translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-32 px-6 pb-12 overflow-y-auto" id="menu-overlay">
<div className="border-t border-white/20 w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center gap-2">
<a className="group flex items-center justify-between py-4 border-b border-white/10" href="#work" onclick="toggleMenu()">
<span className="font-display text-5xl md:text-8xl uppercase text-white group-hover:text-white/50 transition-colors">Work</span>
<i className="text-white w-8 h-8 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between py-4 border-b border-white/10" href="#services" onclick="toggleMenu()">
<span className="font-display text-5xl md:text-8xl uppercase text-white group-hover:text-white/50 transition-colors">Expertise</span>
<i className="text-white w-8 h-8 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right"></i>
</a>
<a className="group flex items-center justify-between py-4 border-b border-white/10" href="#contact" onclick="toggleMenu()">
<span className="font-display text-5xl md:text-8xl uppercase text-white group-hover:text-white/50 transition-colors">Contact</span>
<i className="text-white w-8 h-8 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500" data-lucide="arrow-right"></i>
</a>
</div>
<div className="max-w-7xl mx-auto w-full flex justify-between items-end mt-12">
<p className="text-white/50 text-xs uppercase tracking-widest">Global • Remote</p>
<button className="text-white uppercase text-xs tracking-widest border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors" onclick="toggleMenu()">Close</button>
</div>
</div>

<div className="fixed inset-0 bg-light-50 dark:bg-dark-900 z-[80] transform translate-y-full overflow-y-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="project-overlay">

<div className="min-h-screen" id="project-content"></div>

<button className="fixed top-6 right-6 z-[90] w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg" onclick="closeProject()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>

<main id="main-content">

<header className="min-h-screen pt-32 pb-12 px-6 md:px-12 flex flex-col justify-between border-b border-black/10 dark:border-white/10">
<div className="max-w-full">
<h1 className="font-display text-[13vw] leading-[0.8] tracking-tighter uppercase font-medium">
<span className="reveal-text"><span className="reveal-inner" style={{animationDelay: '0.1s'}}>Digital</span></span>
<span className="reveal-text md:ml-[12vw]"><span className="reveal-inner" style={{animationDelay: '0.2s'}}>Experience</span></span>
<span className="reveal-text"><span className="reveal-inner" style={{animationDelay: '0.3s'}}>Engineers</span></span>
</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mt-20 items-end">
<div className="max-w-xs">
<p className="text-sm md:text-base leading-relaxed opacity-70">
                        We craft high-performance digital platforms. Focusing on speed, aesthetics, and conversion.
                    </p>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-widest opacity-50">Status</span>
<div className="flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
</span>
<span className="uppercase text-sm font-medium">Available for New Projects</span>
</div>
</div>
<div className="flex md:justify-end">
<a className="group flex items-center justify-center w-24 h-24 rounded-full border border-black/20 dark:border-white/20 hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" href="#work">
<i className="w-6 h-6 animate-bounce" data-lucide="arrow-down"></i>
</a>
</div>
</div>
</header>

<div className="py-6 md:py-8 border-b border-black/10 dark:border-white/10 overflow-hidden bg-black dark:bg-white text-white dark:text-black">
<div className="animate-marquee whitespace-nowrap">
<span className="text-3xl md:text-6xl font-display uppercase font-medium px-8 tracking-tight">Strategy • Design • Development • Performance •</span>
<span className="text-3xl md:text-6xl font-display uppercase font-medium px-8 tracking-tight">Strategy • Design • Development • Performance •</span>
<span className="text-3xl md:text-6xl font-display uppercase font-medium px-8 tracking-tight">Strategy • Design • Development • Performance •</span>
</div>
</div>

<section className="border-b border-black/10 dark:border-white/10" id="work">
<div className="px-6 md:px-12 py-12 md:py-24 border-b border-black/10 dark:border-white/10">
<span className="text-xs uppercase tracking-widest opacity-50 block mb-6">(Selected Work)</span>
<h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter max-w-4xl">
                    Defining the visual language <br/> of modern commerce.
                </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2">

<div className="work-card group border-b md:border-r border-black/10 dark:border-white/10 relative h-[600px] md:h-[700px] cursor-none overflow-hidden block" onclick="openProject('nova')">
<div className="img-container absolute inset-0 w-full h-full">
<img alt="Fintech Interface" className="parallax-img grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute opacity-0 group-hover:opacity-100 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-none z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 custom-cursor">
<span className="text-white text-xs uppercase tracking-widest font-medium">View</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end text-white z-10 mix-blend-difference pointer-events-none">
<div>
<span className="block text-xs uppercase tracking-widest mb-2">Fintech SaaS</span>
<h3 className="font-display text-4xl uppercase tracking-tighter">Nova Finance</h3>
</div>
<span className="text-lg font-display opacity-80">2024</span>
</div>
</div>

<div className="work-card group border-b border-black/10 dark:border-white/10 relative h-[600px] md:h-[700px] cursor-none overflow-hidden block" onclick="openProject('lumina')">
<div className="img-container absolute inset-0 w-full h-full">
<img alt="Fashion Editorial" className="parallax-img grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute opacity-0 group-hover:opacity-100 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-none z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 custom-cursor">
<span className="text-white text-xs uppercase tracking-widest font-medium">View</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end text-white z-10 mix-blend-difference pointer-events-none">
<div>
<span className="block text-xs uppercase tracking-widest mb-2">Fashion E-Commerce</span>
<h3 className="font-display text-4xl uppercase tracking-tighter">Lumina</h3>
</div>
<span className="text-lg font-display opacity-80">2023</span>
</div>
</div>

<div className="work-card group border-b md:border-r border-black/10 dark:border-white/10 relative h-[600px] md:h-[700px] cursor-none overflow-hidden block" onclick="openProject('apex')">
<div className="img-container absolute inset-0 w-full h-full">
<img alt="Architecture" className="parallax-img grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute opacity-0 group-hover:opacity-100 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-none z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 custom-cursor">
<span className="text-white text-xs uppercase tracking-widest font-medium">View</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end text-white z-10 mix-blend-difference pointer-events-none">
<div>
<span className="block text-xs uppercase tracking-widest mb-2">Architecture</span>
<h3 className="font-display text-4xl uppercase tracking-tighter">Apex Construct</h3>
</div>
<span className="text-lg font-display opacity-80">2024</span>
</div>
</div>

<div className="work-card group border-b border-black/10 dark:border-white/10 relative h-[600px] md:h-[700px] cursor-none overflow-hidden block" onclick="openProject('orbital')">
<div className="img-container absolute inset-0 w-full h-full">
<img alt="AI Technology" className="parallax-img grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute opacity-0 group-hover:opacity-100 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-none z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 custom-cursor">
<span className="text-white text-xs uppercase tracking-widest font-medium">View</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end text-white z-10 mix-blend-difference pointer-events-none">
<div>
<span className="block text-xs uppercase tracking-widest mb-2">AI &amp; Data Analytics</span>
<h3 className="font-display text-4xl uppercase tracking-tighter">Orbital AI</h3>
</div>
<span className="text-lg font-display opacity-80">2024</span>
</div>
</div>

<div className="work-card group md:border-r border-black/10 dark:border-white/10 relative h-[600px] md:h-[700px] cursor-none overflow-hidden block" onclick="openProject('velos')">
<div className="img-container absolute inset-0 w-full h-full">
<img alt="Automotive" className="parallax-img grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2898&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute opacity-0 group-hover:opacity-100 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full border border-white/20 pointer-events-none z-20 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 custom-cursor">
<span className="text-white text-xs uppercase tracking-widest font-medium">View</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex justify-between items-end text-white z-10 mix-blend-difference pointer-events-none">
<div>
<span className="block text-xs uppercase tracking-widest mb-2">Automotive</span>
<h3 className="font-display text-4xl uppercase tracking-tighter">Velos EV</h3>
</div>
<span className="text-lg font-display opacity-80">2023</span>
</div>
</div>

<div className="group relative bg-light-100 dark:bg-dark-800 flex flex-col justify-center items-center h-[600px] md:h-[700px] cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-black dark:bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
<div className="relative z-10 text-center group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
<h3 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-4">
                            View<br/>Archive
                        </h3>
<div className="w-16 h-16 rounded-full border border-current flex items-center justify-center mx-auto mt-8 group-hover:rotate-45 transition-transform duration-500">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-black/10 dark:border-white/10" id="services">
<div className="grid grid-cols-1 lg:grid-cols-3">
<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group">
<div className="mb-12 flex justify-between items-start">
<span className="text-sm font-mono opacity-50">(001)</span>
<i className="w-8 h-8 opacity-70 group-hover:scale-110 transition-transform duration-300" data-lucide="layers"></i>
</div>
<h3 className="font-display text-3xl uppercase tracking-tight mb-4">Engineering</h3>
<p className="text-sm leading-relaxed opacity-70 max-w-sm">
                        Robust frontend architectures using Next.js, React, and WebGL. We build scalable systems that feel instant.
                    </p>
</div>
<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group">
<div className="mb-12 flex justify-between items-start">
<span className="text-sm font-mono opacity-50">(002)</span>
<i className="w-8 h-8 opacity-70 group-hover:scale-110 transition-transform duration-300" data-lucide="layout-grid"></i>
</div>
<h3 className="font-display text-3xl uppercase tracking-tight mb-4">Interface</h3>
<p className="text-sm leading-relaxed opacity-70 max-w-sm">
                        User-centric design systems that ensure consistency. We craft interactions that delight users.
                    </p>
</div>
<div className="p-8 md:p-12 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 group">
<div className="mb-12 flex justify-between items-start">
<span className="text-sm font-mono opacity-50">(003)</span>
<i className="w-8 h-8 opacity-70 group-hover:scale-110 transition-transform duration-300" data-lucide="zap"></i>
</div>
<h3 className="font-display text-3xl uppercase tracking-tight mb-4">Performance</h3>
<p className="text-sm leading-relaxed opacity-70 max-w-sm">
                        Core Web Vitals optimization and SEO technical strategy. We ensure your digital presence ranks high.
                    </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen" id="contact">
<div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-black/10 dark:border-white/10 bg-light-100 dark:bg-dark-800">
<div className="sticky top-32">
<span className="text-xs uppercase tracking-widest opacity-50 block mb-6">(Inquiry)</span>
<h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8">Let's build<br/>the future.</h2>
<p className="text-lg opacity-70 max-w-md mb-12">
                        We are currently accepting new partnerships. Tell us about your vision, and we will help you realize it.
                    </p>
<div className="flex flex-col gap-4">
<a className="text-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-3" href="mailto:codecreststudio@gmail.com">
<i className="w-5 h-5" data-lucide="mail"></i>
                            codecreststudio@gmail.com
                        </a>
<a className="text-xl hover:text-green-500 transition-colors flex items-center gap-3" href="https://wa.me/916302242108" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                            +91 6302242108
                        </a>
<button className="text-xl hover:text-blue-500 transition-colors flex items-center gap-3 w-max text-left" data-cal-config='{"layout":"month_view"}' data-cal-link="codecreststudio">
<i className="w-5 h-5" data-lucide="calendar"></i>
                            Schedule a Discovery Call
                        </button>
</div>
</div>
</div>
<div className="p-8 md:p-16 lg:p-24 flex items-center relative">

<div className="w-full transition-opacity duration-300" id="form-container">
<form className="w-full space-y-16" id="contact-form">

<input name="_subject" type="hidden" value="New Inquiry - CodeCrest"/>
<input name="_captcha" type="hidden" value="false"/>
<div className="group relative z-0">
<input className="block py-2.5 px-0 w-full text-xl md:text-2xl bg-transparent border-0 border-b border-black/30 dark:border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors uppercase" id="name" name="name" placeholder=" " required="" type="text" />
<label className="absolute text-xl md:text-2xl uppercase text-black/40 dark:text-white/40 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8" htmlFor="name">Your Name</label>
</input></div>
<div className="group relative z-0">
<input className="block py-2.5 px-0 w-full text-xl md:text-2xl bg-transparent border-0 border-b border-black/30 dark:border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors uppercase" id="email" name="email" placeholder=" " required="" type="email" />
<label className="absolute text-xl md:text-2xl uppercase text-black/40 dark:text-white/40 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8" htmlFor="email">Email Address</label>
</input></div>
<div className="group relative z-0">
<input className="block py-2.5 px-0 w-full text-xl md:text-2xl bg-transparent border-0 border-b border-black/30 dark:border-white/30 appearance-none focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors uppercase" id="details" name="message" placeholder=" " required="" type="text"/>
<label className="absolute text-xl md:text-2xl uppercase text-black/40 dark:text-white/40 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8" htmlFor="details">Project Details</label>
</div>
<div className="pt-8">
<button className="group relative inline-flex items-center gap-3 text-sm uppercase tracking-widest font-medium overflow-hidden" id="submit-btn" type="submit">
<span className="relative z-10" id="btn-text">Send Inquiry</span>
<i className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" id="btn-icon"></i>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
</button>
</div>
</form>
</div>

<div className="hidden absolute inset-0 flex-col justify-center items-center text-center p-8 bg-light-100 dark:bg-dark-800 z-10" id="success-message">
<div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
<i className="w-10 h-10 text-white" data-lucide="check"></i>
</div>
<h3 className="font-display text-4xl uppercase tracking-tight mb-4">Message Sent</h3>
<p className="opacity-70 max-w-md">Thank you for reaching out. We will review your inquiry and get back to you shortly.</p>
<button className="mt-8 text-sm uppercase tracking-widest border-b border-current hover:opacity-50 transition-opacity" onclick="resetForm()">Send another</button>
</div>
</div>
</section>
</main>

<footer className="bg-black text-white dark:bg-light-50 dark:text-black pt-20 px-6 overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 dark:border-black/20 pb-8 mb-8 gap-8">
<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-widest opacity-60">Socials</span>
<div className="flex gap-4">
<a className="text-sm uppercase hover:underline" href="#">Instagram</a>
<a className="text-sm uppercase hover:underline" href="#">LinkedIn</a>
</div>
</div>
<div className="flex flex-col gap-2 text-right">
<span className="text-xs uppercase tracking-widest opacity-60">Time</span>
<span className="text-sm font-mono" id="time-display">00:00 PST</span>
</div>
</div>
<div className="relative">
<h1 className="font-display text-[16vw] leading-[0.75] uppercase tracking-tighter text-center select-none pointer-events-none">CodeCrest</h1>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 fab-container">

<a aria-label="Chat on WhatsApp" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" href="https://wa.me/916302242108" target="_blank">
<i className="w-7 h-7 fill-current" data-lucide="message-circle"></i>
</a>

<button className="w-14 h-14 bg-white dark:bg-black text-black dark:text-white border border-black/10 dark:border-white/10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300" data-cal-config='{"layout":"month_view"}' data-cal-link="codecreststudio">
<i className="w-6 h-6" data-lucide="calendar"></i>
</button>
</div>


    </>
  );
}
