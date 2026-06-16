import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Custom Cursor Logic ---
            const cursor = document.getElementById('cursor');
            const follower = document.getElementById('cursor-follower');
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;
            let followerX = 0, followerY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function renderCursor() {
                // Instantly follow
                cursorX = mouseX;
                cursorY = mouseY;
                cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

                // Smooth follow
                followerX += (mouseX - followerX) * 0.15;
                followerY += (mouseY - followerY) * 0.15;
                follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

                requestAnimationFrame(renderCursor);
            }
            renderCursor();

            // Hover states
            const hoverTargets = document.querySelectorAll('.hover-target, a, button, .project-item, .capability-mod');
            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => {
                    cursor.classList.add('cursor-hover');
                    follower.classList.add('cursor-hover-follower');
                });
                target.addEventListener('mouseleave', () => {
                    cursor.classList.remove('cursor-hover');
                    follower.classList.remove('cursor-hover-follower');
                });
            });


            // --- Entry Sequence ---
            const entrySection = document.getElementById('entry');
            const t1 = document.getElementById('entry-text-1');
            const t2 = document.getElementById('entry-text-2');
            const hub = document.getElementById('hub');

            setTimeout(() => {
                t1.style.opacity = '1';
                t1.style.transform = 'translateY(0)';
            }, 500);

            setTimeout(() => {
                t2.style.opacity = '1';
                t2.style.transform = 'translateY(0)';
            }, 2000);

            t2.addEventListener('click', () => {
                // Zoom & Fade Entry
                t1.style.transform = 'translateY(-100%)'; t1.style.opacity = '0';
                t2.style.transform = 'translateY(100%)'; t2.style.opacity = '0';
                
                setTimeout(() => {
                    entrySection.style.opacity = '0';
                    entrySection.style.pointerEvents = 'none';
                    
                    // Reveal Hub
                    hub.style.opacity = '1';
                    hub.style.transform = 'scale(1)';
                    hub.style.pointerEvents = 'auto';
                }, 800);
            });


            // --- Navigation Logic ---
            const navItems = document.querySelectorAll('.nav-item');
            const contentView = document.getElementById('content-view');
            const closeContentBtn = document.getElementById('close-content');
            const sections = document.querySelectorAll('.section-container');

            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    const targetId = e.currentTarget.getAttribute('data-target');
                    
                    // Hide all sections, remove reveal class
                    sections.forEach(sec => {
                        sec.classList.add('hidden');
                        sec.classList.remove('is-revealed');
                    });
                    
                    // Show target section
                    const targetSection = document.getElementById(`section-${targetId}`);
                    targetSection.classList.remove('hidden');
                    
                    // Slide up overlay
                    contentView.style.transform = 'translateY(0)';
                    
                    // Trigger inner animations with slight delay
                    setTimeout(() => {
                        targetSection.classList.add('is-revealed');
                    }, 500);
                });
            });

            closeContentBtn.addEventListener('click', () => {
                contentView.style.transform = 'translateY(100%)';
                // Reset reveals after slide down
                setTimeout(() => {
                    sections.forEach(sec => sec.classList.remove('is-revealed'));
                }, 1000);
            });


            // --- Capabilities Interaction ---
            const capMods = document.querySelectorAll('.capability-mod');
            capMods.forEach(mod => {
                mod.addEventListener('click', () => {
                    const desc = mod.querySelector('.cap-desc');
                    const icon = mod.querySelector('iconify-icon');
                    
                    const isOpen = desc.style.maxHeight;

                    // Close all
                    capMods.forEach(m => {
                        m.querySelector('.cap-desc').style.maxHeight = null;
                        m.querySelector('.cap-desc').style.opacity = '0';
                        m.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                    });

                    // Open clicked if it was closed
                    if (!isOpen) {
                        desc.style.maxHeight = desc.scrollHeight + "px";
                        desc.style.opacity = '1';
                        icon.style.transform = 'rotate(90deg)';
                    }
                });
            });


            // --- Project Data & Interaction ---
            const projectData = {
                '1': {
                    title: 'Aura Commerce', client: 'Aura Retail Group', tech: 'Headless WP, Next.js, Stripe, Tailwind',
                    problem: 'The client needed a highly performant e-commerce platform capable of handling intense traffic spikes without compromising the premium brand aesthetic.',
                    process: 'Architected a headless solution decoupling the WordPress backend from a statically generated Next.js frontend. Implemented edge caching and custom tailored cart flows.',
                    result: 'Achieved a 99/100 Lighthouse performance score. Conversion rates increased by 34% within the first month of deployment.'
                },
                '2': {
                    title: 'Nexus Agency', client: 'Nexus Digital', tech: 'Custom WP Theme, GSAP, WebGL, Barba.js',
                    problem: 'A creative agency required an Awwwards-winning level portfolio that showcased their work through immersive, cinematic transitions without feeling bloated.',
                    process: 'Built a bespoke WordPress theme from the ground up. Integrated Barba.js for fluid page transitions and GSAP for complex scroll-triggered animations synchronized with WebGL elements.',
                    result: 'Site received FWA of the Day and Awwwards Site of the Day. Bounce rate dropped significantly due to the engaging explorative structure.'
                },
                '3': {
                    title: 'Vanguard Portal', client: 'Vanguard Finance', tech: 'WP REST API, React, Redux, D3.js',
                    problem: 'Legacy client portal was slow and unintuitive. Needed a modern, secure dashboard to visualize complex financial data pulled from an existing WordPress backend.',
                    process: 'Developed a robust React SPA communicating securely with custom WP REST API endpoints. Utilized D3.js for interactive, real-time data visualization charts.',
                    result: 'Reduced data load times by 70%. Client reported a massive increase in user engagement and satisfaction with the new intuitive interface.'
                }
            };

            const projectItems = document.querySelectorAll('.project-item');
            const projectDetail = document.getElementById('project-detail');
            const closeProjectBtn = document.getElementById('close-project');
            const pdReveals = document.querySelectorAll('.pd-reveal');

            projectItems.forEach(item => {
                item.addEventListener('click', () => {
                    const id = item.getAttribute('data-id');
                    const data = projectData[id];

                    // Populate Data
                    document.getElementById('pd-id').innerText = `FILE_0${id}`;
                    document.getElementById('pd-title').innerText = data.title;
                    document.getElementById('pd-client').innerText = data.client;
                    document.getElementById('pd-tech').innerText = data.tech;
                    document.getElementById('pd-problem').innerText = data.problem;
                    document.getElementById('pd-process').innerText = data.process;
                    document.getElementById('pd-result').innerText = data.result;

                    // Open Overlay
                    projectDetail.style.transform = 'translateY(0)';

                    // Trigger reveals
                    setTimeout(() => {
                        pdReveals.forEach(el => {
                            el.style.transform = 'translateY(0)';
                            el.style.opacity = '1';
                        });
                    }, 400);
                });
            });

            closeProjectBtn.addEventListener('click', () => {
                projectDetail.style.transform = 'translateY(100%)';
                
                // Reset reveals
                setTimeout(() => {
                     pdReveals.forEach(el => {
                        el.style.transform = 'translateY(10px)';
                        el.style.opacity = '0';
                    });
                }, 1000);
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grain"></div>

<div className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2" id="cursor"></div>
<div className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] transform -translate-x-1/2 -translate-y-1/2" id="cursor-follower"></div>

<section className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0f0f0f] transition-all duration-[1.5s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)]" id="entry">
<div className="overflow-hidden reveal-mask">
<h1 className="text-xl md:text-3xl font-light tracking-tight opacity-0 transform translate-y-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)]" id="entry-text-1">This is not a website.</h1>
</div>
<div className="mt-12 overflow-hidden reveal-mask h-8">
<p className="text-xs font-mono tracking-widest text-accent uppercase cursor-pointer opacity-0 transform translate-y-full transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] hover-target glitch-hover" id="entry-text-2">Click to begin</p>
</div>
</section>

<main className="fixed inset-0 z-10 flex items-center justify-center opacity-0 scale-105 pointer-events-none transition-all duration-[2s] ease-[cubic-bezier(0.19,1,0.22,1)]" id="hub">

<div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
<span className="text-sm font-medium tracking-tighter hover-target cursor-pointer">ISM.</span>
</div>
<div className="relative w-full h-full max-w-screen-2xl mx-auto flex flex-col md:block items-center justify-center gap-8 md:gap-0 p-8">

<div className="md:absolute md:top-[20%] md:left-[15%] group">
<button className="nav-item text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter hover:text-accent transition-colors duration-500 hover-target" data-target="identity">
<span className="block overflow-hidden"><span className="block transform transition-transform duration-700 group-hover:-translate-y-full">Identity</span></span>
<span className="block overflow-hidden absolute top-0 left-0"><span className="block transform translate-y-full transition-transform duration-700 group-hover:translate-y-0 text-accent">Identity</span></span>
</button>
<p className="text-xs font-mono text-gray-600 tracking-widest mt-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">01 // WHO</p>
</div>
<div className="md:absolute md:top-[30%] md:right-[15%] group text-right">
<button className="nav-item text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter hover:text-accent transition-colors duration-500 hover-target" data-target="capabilities">
<span className="block overflow-hidden"><span className="block transform transition-transform duration-700 group-hover:-translate-y-full">Capabilities</span></span>
<span className="block overflow-hidden absolute top-0 right-0"><span className="block transform translate-y-full transition-transform duration-700 group-hover:translate-y-0 text-accent">Capabilities</span></span>
</button>
<p className="text-xs font-mono text-gray-600 tracking-widest mt-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">02 // HOW</p>
</div>
<div className="md:absolute md:bottom-[30%] md:left-[20%] group">
<button className="nav-item text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter hover:text-accent transition-colors duration-500 hover-target" data-target="projects">
<span className="block overflow-hidden"><span className="block transform transition-transform duration-700 group-hover:-translate-y-full">Projects</span></span>
<span className="block overflow-hidden absolute top-0 left-0"><span className="block transform translate-y-full transition-transform duration-700 group-hover:translate-y-0 text-accent">Projects</span></span>
</button>
<p className="text-xs font-mono text-gray-600 tracking-widest mt-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">03 // WORK</p>
</div>
<div className="md:absolute md:bottom-[20%] md:right-[20%] group text-right">
<button className="nav-item text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter hover:text-accent transition-colors duration-500 hover-target" data-target="contact">
<span className="block overflow-hidden"><span className="block transform transition-transform duration-700 group-hover:-translate-y-full">Contact</span></span>
<span className="block overflow-hidden absolute top-0 right-0"><span className="block transform translate-y-full transition-transform duration-700 group-hover:translate-y-0 text-accent">Contact</span></span>
</button>
<p className="text-xs font-mono text-gray-600 tracking-widest mt-2 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500">04 // INITIATE</p>
</div>

<div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
</div>
</main>

<section className="fixed inset-0 z-[50] bg-[#0f0f0f]/95 backdrop-blur-xl translate-y-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col hide-scroll" id="content-view">
<header className="p-8 md:p-12 flex justify-between items-center z-20 shrink-0">
<div className="text-sm font-medium tracking-tighter">ISM.</div>
<button className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors hover-target flex items-center gap-2 group" id="close-content">
<iconify-icon className="text-lg group-hover:rotate-90 transition-transform duration-500" icon="solar:close-circle-linear"></iconify-icon>
                Close
            </button>
</header>
<div className="flex-1 overflow-y-auto hide-scroll relative px-8 md:px-12 pb-24">

<div className="section-container hidden min-h-full flex flex-col justify-center max-w-5xl mx-auto" id="section-identity">
<div className="reveal-mask">
<h2 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-[0.9] reveal-item">Issam<span className="text-accent">.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 border-t border-white/10 pt-12 mt-12">
<div className="reveal-mask">
<div className="reveal-item" style={{transitionDelay: '0.1s'}}>
<p className="text-xs font-mono text-gray-500 tracking-widest mb-3">ROLE</p>
<p className="text-lg md:text-xl font-light">WordPress Developer</p>
</div>
</div>
<div className="reveal-mask">
<div className="reveal-item" style={{transitionDelay: '0.2s'}}>
<p className="text-xs font-mono text-gray-500 tracking-widest mb-3">EXPERIENCE</p>
<p className="text-lg md:text-xl font-light">30+ Projects</p>
</div>
</div>
<div className="reveal-mask">
<div className="reveal-item" style={{transitionDelay: '0.3s'}}>
<p className="text-xs font-mono text-gray-500 tracking-widest mb-3">AGE</p>
<p className="text-lg md:text-xl font-light">23 Cycles</p>
</div>
</div>
<div className="reveal-mask">
<div className="reveal-item" style={{transitionDelay: '0.4s'}}>
<p className="text-xs font-mono text-gray-500 tracking-widest mb-3">BASE</p>
<p className="text-lg md:text-xl font-light text-accent">Global Network</p>
</div>
</div>
</div>
<div className="mt-24 max-w-2xl reveal-mask">
<p className="text-xl md:text-2xl font-light text-gray-400 leading-relaxed reveal-item" style={{transitionDelay: '0.5s'}}>
                        I architect digital platforms that bridge aesthetic minimalism with robust engineering. Specializing in high-performance WordPress ecosystems and modern web technologies.
                    </p>
</div>
</div>

<div className="section-container hidden min-h-full flex flex-col justify-center max-w-6xl mx-auto py-24" id="section-capabilities">
<div className="reveal-mask mb-16">
<h2 className="text-sm font-mono text-accent tracking-widest reveal-item">SYSTEM CAPABILITIES</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">

<div className="capability-mod bg-[#0f0f0f] p-8 md:p-12 cursor-pointer hover-target group transition-all duration-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-mono text-gray-600 mb-4">MOD_01</p>
<h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-accent transition-colors">WordPress</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 transform group-hover:rotate-45">
<iconify-icon className="text-xl group-hover:text-accent" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="cap-desc overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
<p className="pt-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                Custom theme engineering from scratch. Headless architectures utilizing WP REST API. Complex plugin integration and backend customization for scalable content management.
                            </p>
<div className="flex gap-4 mt-6">
<span className="text-xs border border-white/20 rounded-full px-3 py-1 text-gray-300">PHP</span>
<span className="text-xs border border-white/20 rounded-full px-3 py-1 text-gray-300">REST API</span>
</div>
</div>
</div>

<div className="capability-mod bg-[#0f0f0f] p-8 md:p-12 cursor-pointer hover-target group transition-all duration-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-mono text-gray-600 mb-4">MOD_02</p>
<h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-accent transition-colors">Next.js</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 transform group-hover:rotate-45">
<iconify-icon className="text-xl group-hover:text-accent" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="cap-desc overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
<p className="pt-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                Building lightning-fast, SEO-optimized static and server-rendered applications. Creating seamless frontend experiences connected to headless CMS platforms.
                            </p>
<div className="flex gap-4 mt-6">
<span className="text-xs border border-white/20 rounded-full px-3 py-1 text-gray-300">React</span>
<span className="text-xs border border-white/20 rounded-full px-3 py-1 text-gray-300">Tailwind</span>
</div>
</div>
</div>

<div className="capability-mod bg-[#0f0f0f] p-8 md:p-12 cursor-pointer hover-target group transition-all duration-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-mono text-gray-600 mb-4">MOD_03</p>
<h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-accent transition-colors">UI / UX</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 transform group-hover:rotate-45">
<iconify-icon className="text-xl group-hover:text-accent" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="cap-desc overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
<p className="pt-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                Designing intuitive interfaces focused on typography, spacing, and micro-interactions. Translating wireframes into polished, interactive digital environments.
                            </p>
</div>
</div>

<div className="capability-mod bg-[#0f0f0f] p-8 md:p-12 cursor-pointer hover-target group transition-all duration-500">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-mono text-gray-600 mb-4">MOD_04</p>
<h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-accent transition-colors">Performance</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500 transform group-hover:rotate-45">
<iconify-icon className="text-xl group-hover:text-accent" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
<div className="cap-desc overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
<p className="pt-8 text-sm md:text-base text-gray-400 font-light leading-relaxed">
                                Obsessive optimization. Core Web Vitals mastery, advanced caching strategies, asset delivery optimization, and database tuning to ensure millisecond response times.
                            </p>
</div>
</div>
</div>
</div>

<div className="section-container hidden min-h-full flex flex-col pt-24 max-w-7xl mx-auto w-full" id="section-projects">
<div className="flex justify-between items-end mb-16 border-b border-white/10 pb-4 reveal-mask">
<h2 className="text-sm font-mono text-accent tracking-widest reveal-item">MISSION FILES</h2>
<p className="text-xs text-gray-600 font-mono reveal-item">SELECT TO DECRYPT</p>
</div>
<div className="flex flex-col w-full group/list">

<div className="project-item py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover-target group transition-all duration-500 hover:bg-white/[0.02] px-4 -mx-4" data-id="1">
<div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
<span className="text-sm font-mono text-gray-600 group-hover:text-accent transition-colors">01</span>
<h3 className="text-4xl md:text-6xl font-light tracking-tight transform transition-transform duration-500 group-hover:translate-x-4">Aura Commerce</h3>
</div>
<div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5 text-gray-400 hidden md:block">E-Commerce</span>
<div className="flex items-center gap-2 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-4 group-hover:translate-x-0">
                                EXPLORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="project-item py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover-target group transition-all duration-500 hover:bg-white/[0.02] px-4 -mx-4" data-id="2">
<div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
<span className="text-sm font-mono text-gray-600 group-hover:text-accent transition-colors">02</span>
<h3 className="text-4xl md:text-6xl font-light tracking-tight transform transition-transform duration-500 group-hover:translate-x-4">Nexus Agency</h3>
</div>
<div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5 text-gray-400 hidden md:block">Corporate</span>
<div className="flex items-center gap-2 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-4 group-hover:translate-x-0">
                                EXPLORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="project-item py-8 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover-target group transition-all duration-500 hover:bg-white/[0.02] px-4 -mx-4" data-id="3">
<div className="flex items-center gap-8 md:gap-16 w-full md:w-auto mb-4 md:mb-0">
<span className="text-sm font-mono text-gray-600 group-hover:text-accent transition-colors">03</span>
<h3 className="text-4xl md:text-6xl font-light tracking-tight transform transition-transform duration-500 group-hover:translate-x-4">Vanguard Portal</h3>
</div>
<div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
<span className="text-xs border border-white/20 rounded-full px-4 py-1.5 text-gray-400 hidden md:block">Web App</span>
<div className="flex items-center gap-2 text-xs font-mono text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-4 group-hover:translate-x-0">
                                EXPLORE <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="section-container hidden min-h-full flex flex-col justify-center max-w-4xl mx-auto text-center" id="section-contact">
<div className="reveal-mask mb-8">
<p className="text-sm font-mono text-accent tracking-widest reveal-item">INITIATE SEQUENCE</p>
</div>
<div className="reveal-mask">
<a className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter hover:text-accent transition-colors duration-500 hover-target inline-block reveal-item" href="#" style={{transitionDelay: '0.1s'}}>hello@ism.dev</a>
</div>
<div className="flex justify-center gap-8 mt-24 reveal-mask">
<div className="reveal-item" style={{transitionDelay: '0.3s'}}>
<a className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hover-target relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300" href="#">Twitter</a>
</div>
<div className="reveal-item" style={{transitionDelay: '0.4s'}}>
<a className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hover-target relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300" href="#">LinkedIn</a>
</div>
<div className="reveal-item" style={{transitionDelay: '0.5s'}}>
<a className="text-sm uppercase tracking-widest text-gray-400 hover:text-white transition-colors hover-target relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300" href="#">GitHub</a>
</div>
</div>
</div>
</div>
</section>

<section className="fixed inset-0 z-[60] bg-[#090909] translate-y-full transition-transform duration-[1s] ease-[cubic-bezier(0.785,0.135,0.15,0.86)] flex flex-col hide-scroll" id="project-detail">
<header className="p-8 md:p-12 flex justify-between items-center z-20 shrink-0 bg-[#090909]/80 backdrop-blur-md sticky top-0">
<div className="flex items-center gap-4">
<span className="text-xs font-mono text-accent border border-accent/30 px-2 py-1 rounded">DECRYPTED</span>
<span className="text-sm font-mono text-gray-500" id="pd-id">FILE_00</span>
</div>
<button className="text-xs font-mono uppercase tracking-widest hover:text-accent transition-colors hover-target flex items-center gap-2 group" id="close-project">
                Back to Hub <iconify-icon className="text-lg group-hover:-translate-y-1 transition-transform duration-500" icon="solar:round-alt-arrow-down-linear"></iconify-icon>
</button>
</header>
<div className="flex-1 overflow-y-auto hide-scroll p-8 md:p-12 lg:p-24 max-w-5xl mx-auto w-full">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-24 pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000" id="pd-title">Project Title</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

<div className="md:col-span-4 space-y-12">
<div className="pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000 delay-100">
<p className="text-xs font-mono text-gray-600 tracking-widest mb-4">CLIENT</p>
<p className="text-lg font-light" id="pd-client">Confidential</p>
</div>
<div className="pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000 delay-200">
<p className="text-xs font-mono text-gray-600 tracking-widest mb-4">TECH STACK</p>
<p className="text-sm font-light leading-relaxed text-gray-300" id="pd-tech">WordPress, React, Tailwind CSS, GSAP</p>
</div>
</div>

<div className="md:col-span-8 space-y-24">
<div className="pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000 delay-300">
<h3 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-4">
<span className="w-8 h-px bg-accent"></span> The Problem
                        </h3>
<p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed" id="pd-problem">
                            Lorem ipsum dolor sit amet.
                        </p>
</div>
<div className="pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000 delay-400">
<h3 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-4">
<span className="w-8 h-px bg-accent"></span> Process
                        </h3>
<p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed" id="pd-process">
                            Consectetur adipiscing elit.
                        </p>
</div>
<div className="pd-reveal transform translate-y-10 opacity-0 transition-all duration-1000 delay-500">
<h3 className="text-2xl font-medium tracking-tight mb-6 flex items-center gap-4">
<span className="w-8 h-px bg-accent"></span> Result
                        </h3>
<p className="text-lg md:text-xl font-light text-white leading-relaxed" id="pd-result">
                            Sed do eiusmod tempor incididunt.
                        </p>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
