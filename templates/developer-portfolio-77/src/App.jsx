import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });

        // Typing effect logic
        const words = ["experiences.", "interfaces.", "products."];
        let i = 0;
        let timer;
        const typewriterSpan = document.getElementById('typewriter');

        function typingEffect() {
            let word = words[i].split("");
            var loopTyping = function() {
                if (word.length > 0) {
                    typewriterSpan.innerHTML += word.shift();
                } else {
                    setTimeout(deletingEffect, 2000);
                    return false;
                };
                timer = setTimeout(loopTyping, 100);
            };
            loopTyping();
        };

        function deletingEffect() {
            let word = words[i].split("");
            var loopDeleting = function() {
                if (word.length > 0) {
                    word.pop();
                    typewriterSpan.innerHTML = word.join("");
                } else {
                    if (words.length > (i + 1)) {
                        i++;
                    } else {
                        i = 0;
                    };
                    typingEffect();
                    return false;
                };
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        };
        
        // Start typing effect slightly after load
        setTimeout(typingEffect, 1000);

        // Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Specific logic for skill bars
                    if (entry.target.id === 'about') {
                        setTimeout(() => {
                            const skillBars = document.querySelectorAll('.skill-bar');
                            skillBars.forEach(bar => {
                                bar.style.width = bar.getAttribute('data-width');
                            });
                        }, 500);
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });
        // Observe sections to trigger internal specific animations like skill bars
        observer.observe(document.getElementById('about'));

        // Modal Logic
        const projectsData = {
            project1: {
                title: 'Fintech Dashboard',
                desc: 'A comprehensive financial dashboard providing real-time analytics, user management, and transaction history. Built with performance in mind using Next.js App Router, Tailwind CSS, and Recharts for complex data visualizations. The architecture supports high-frequency updates via WebSockets.',
                img: 'https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1600&auto=format&fit=crop',
                tags: ['Next.js', 'Tailwind', 'TypeScript', 'WebSockets']
            },
            project2: {
                title: 'Creative Agency',
                desc: 'An immersive, award-winning digital portfolio for a leading creative agency. Utilizing React Three Fiber and GSAP to create smooth, high-performance 3D scroll experiences and transitions that run seamlessly across mobile and desktop devices without dropping frames.',
                img: 'https://images.unsplash.com/photo-1481481600450-8451000632a7?q=80&w=1600&auto=format&fit=crop',
                tags: ['React', 'Three.js', 'GSAP', 'Framer Motion']
            }
        };

        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        
        function openModal(projectId) {
            const data = projectsData[projectId];
            if(!data) return;

            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalDesc').innerText = data.desc;
            document.getElementById('modalImg').src = data.img;
            
            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = '';
            data.tags.forEach(tag => {
                tagsContainer.innerHTML += `<span class="px-3 py-1 text-[10px] uppercase tracking-wider text-white bg-white/10 rounded-full border border-white/5">${tag}</span>`;
            });

            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Slight delay to allow display flex to apply before transitioning opacity/transform
            setTimeout(() => {
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                document.body.style.overflow = '';
            }, 300); // Wait for transition to finish
        }
        
        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-900/20 blur-[120px]"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-cyan-900/10 blur-[150px]"></div>
<div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[40%] rounded-full bg-fuchsia-900/10 blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold text-white tracking-tighter" href="#">WFBS</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#projects">Work</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-medium text-neutral-950 transition-colors hover:bg-neutral-200" href="#contact">
                Let's Talk
            </a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden pt-16 pr-6 pl-6 relative items-center justify-center">
<div className="max-w-4xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 mb-8 backdrop-blur-sm reveal active">
<iconify-icon className="text-violet-400" icon="solar:sparkles-linear"></iconify-icon>
<span>Available for new projects</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] reveal active text-5xl font-semibold text-white tracking-tighter mb-6" style={{transitionDelay: '100ms'}}>
                Crafting digital <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400" id="typewriter">experiences</span><span className="animate-pulse text-white">_</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 reveal active" style={{transitionDelay: '200ms'}}>
                I build fast, accessible, and visually stunning web applications. Bridging the gap between flawless design and robust engineering.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal active" style={{transitionDelay: '300ms'}}>
<a className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-neutral-950 transition-transform hover:scale-105" href="#projects">
                    View My Work
                </a>
<a className="w-full sm:w-auto h-12 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 gap-2" href="https://github.com" target="_blank">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
                    GitHub
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal active" style={{transitionDelay: '500ms'}}>
<span className="text-xs uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
</div>
</header>

<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950/50 backdrop-blur-sm" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Engineering meets <br/><span className="text-neutral-500">Aesthetics.</span></h2>
<p className="text-sm md:text-base text-neutral-400 mb-6 leading-relaxed">
                        With over half a decade of experience in front-end development, I specialize in creating interactive experiences that don't just look great, but perform flawlessly under the hood. 
                    </p>
<p className="text-sm md:text-base text-neutral-400 mb-8 leading-relaxed">
                        My approach combines modern frameworks with a deep understanding of core web technologies, ensuring every pixel serves a purpose and every interaction feels magical.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
<div>
<div className="text-3xl font-medium tracking-tighter text-white mb-1">5+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Years Exp</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tighter text-white mb-1">40+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Projects</div>
</div>
</div>
</div>
<div className="space-y-6 reveal" style={{transitionDelay: '200ms'}}>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">Frontend Development</span>
<span className="text-neutral-500">95%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-0 skill-bar" data-width="95%" style={{transition: 'width 1.5s ease-out', width: '95%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">UI/UX Design</span>
<span className="text-neutral-500">85%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-0 skill-bar" data-width="85%" style={{transition: 'width 1.5s ease-out', width: '85%'}}></div>
</div>
</div>

<div className="">
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">Backend &amp; APIs</span>
<span className="text-neutral-500">75%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full w-0 skill-bar" data-width="75%" style={{transition: 'width 1.5s ease-out', width: '75%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-white font-medium">Performance Optimization</span>
<span className="text-neutral-500">90%</span>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-orange-400 to-rose-500 h-full rounded-full w-0 skill-bar" data-width="90%" style={{transition: 'width 1.5s ease-out', width: '90%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-sm text-neutral-400 max-w-xl mx-auto">Comprehensive solutions tailored for modern digital products, focusing on scalability, speed, and user experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden reveal">
<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-violet-400 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Web Applications</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Building single-page and server-rendered applications using React, Next.js, and modern architectural patterns.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-cyan-400 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">UI/UX Implementation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Translating complex Figma designs into pixel-perfect, responsive, and accessible code with smooth animations.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden reveal" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6 text-fuchsia-400 border border-white/5 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">API Integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Connecting front-ends to complex backend systems, handling state management, authentication, and real-time data.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950/50 backdrop-blur-sm" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Selected Work</h2>
<p className="text-sm text-neutral-400 max-w-md">A showcase of recent projects highlighting technical complexity and design finesse.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-violet-400 transition-colors group" href="#">
                    View full archive
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-neutral-900 border border-white/10 cursor-pointer reveal" onclick="openModal('project1')">
<div className="absolute inset-0 bg-neutral-800 animate-pulse -z-10"></div>
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-2 mb-3">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full">Next.js</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full">Tailwind</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Fintech Dashboard</h3>
<p className="text-sm text-neutral-300">Real-time data visualization platform.</p>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-neutral-900 border border-white/10 cursor-pointer reveal" onclick="openModal('project2')" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-neutral-800 animate-pulse -z-10"></div>
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1481481600450-8451000632a7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex gap-2 mb-3">
<span className="px-2 py-1 text-[10px] uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full">React</span>
<span className="px-2 py-1 text-[10px] uppercase tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full">WebGL</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">Creative Agency</h3>
<p className="text-sm text-neutral-300">Immersive 3D portfolio experience.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="projectModal">

<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="relative w-full max-w-3xl bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
<button className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black backdrop-blur-md transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="aspect-video w-full bg-neutral-800 relative">
<img alt="Project Detail" className="w-full h-full object-cover opacity-80" id="modalImg" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>
</div>
<div className="p-8 relative -mt-16">
<div className="flex gap-2 mb-4" id="modalTags">

</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-4" id="modalTitle">Project Title</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-8" id="modalDesc">
                    Detailed description of the project goes here. Explaining the challenges, solutions, and technologies used to build this product.
                </p>
<div className="flex items-center gap-4">
<a className="h-10 inline-flex items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200" href="#">
                        Visit Live Site
                    </a>
<a className="h-10 inline-flex items-center justify-center rounded-full bg-white/5 border border-white/10 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10" href="#">
                        Source Code
                    </a>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Client Feedback</h2>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 no-scrollbar reveal" style={{transitionDelay: '100ms'}}>

<div className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-white/5" icon="solar:quote-right-linear"></iconify-icon>
<div className="flex gap-1 text-violet-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"Exceptional attention to detail. The resulting web application is incredibly fast and intuitive. Transformed our user experience completely."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500"></div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Product Manager, TechFlow</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-white/5" icon="solar:quote-right-linear"></iconify-icon>
<div className="flex gap-1 text-violet-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"A rare combination of design sensibility and technical prowess. Delivered the project ahead of schedule with zero compromises on quality."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-500"></div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-neutral-500">Founder, StudioX</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative">
<iconify-icon className="absolute top-6 right-6 text-4xl text-white/5" icon="solar:quote-right-linear"></iconify-icon>
<div className="flex gap-1 text-violet-400 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"The code architecture was clean, modern, and highly scalable. Communication was flawless throughout the entire development lifecycle."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"></div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">CTO, Nexus Layer</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-4 reveal" style={{transitionDelay: '200ms'}}>
<div className="w-8 h-1 rounded-full bg-white/20"></div>
<div className="w-2 h-1 rounded-full bg-white/10"></div>
<div className="w-2 h-1 rounded-full bg-white/10"></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5 bg-neutral-950/80 backdrop-blur-md" id="contact">
<div className="max-w-4xl mx-auto relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">Let's build something <br/>extraordinary.</h2>
<p className="text-sm text-neutral-400 mb-10 leading-relaxed">Have a project in mind or just want to chat? Fill out the form or drop an email. I'm currently available for freelance opportunities.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-all">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Email</div>
<div className="text-sm font-medium text-white">shezi143143143@gmail.com</div>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white/10 group-hover:text-white transition-all">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<div className="text-xs text-neutral-500 mb-1">Location</div>
<div className="text-sm font-medium text-white">San Francisco, CA (Remote)</div>
</div>
</div>
</div>
</div>

<form className="space-y-8 bg-white/5 p-8 rounded-3xl border border-white/10 reveal" onsubmit="event.preventDefault();" style={{transitionDelay: '100ms'}}>

<div className="relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-violet-400 cursor-text" htmlFor="name">Name</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-violet-400 cursor-text" htmlFor="email">Email Address</label>
</div>
<div className="relative">

<select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors appearance-none cursor-pointer pb-2" id="budget" required="">
<option disabled="" hidden="" selected="" value="">Project Budget</option>
<option className="bg-neutral-900 text-white" value="1">&lt; $5k</option>
<option className="bg-neutral-900 text-white" value="2">$5k - $10k</option>
<option className="bg-neutral-900 text-white" value="3">$10k+</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<textarea className="peer w-full bg-transparent border-b border-white/10 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" required="" rows="3"></textarea>
<label className="absolute left-0 top-3 text-sm text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-violet-400 cursor-text" htmlFor="message">Tell me about your project</label>
</div>
<button className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-neutral-950 transition-all hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]" type="submit">
                        Send Message
                        <iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center text-xs text-neutral-500 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 MK. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Dribbble</a>
</div>
</div>
</footer>



    </>
  );
}
