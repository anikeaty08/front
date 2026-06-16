import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- 1. Reveal Animation Observer ---
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // --- 2. 3D Tilt & Spotlight Logic ---
        function initTilt() {
            document.addEventListener('mousemove', (e) => {
                // Spotlight Update
                document.querySelectorAll('.spotlight-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });

                // Tilt Update
                document.querySelectorAll('.tilt-card').forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg
                        const rotateY = ((x - centerX) / centerX) * 5;
                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    } else {
                        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                    }
                });
            });
            
            // Reset on mouse leave
            document.querySelectorAll('.tilt-card').forEach(card => {
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                });
            });
        }
        initTilt();

        // --- 3. Slider Control ---
        window.scrollContainer = (id, amount) => {
            const container = document.getElementById(id);
            container.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // --- 4. Matter.js Physics Implementation ---
        window.onload = function() {
            const Engine = Matter.Engine,
                  Render = Matter.Render,
                  Runner = Matter.Runner,
                  Bodies = Matter.Bodies,
                  Composite = Matter.Composite,
                  Mouse = Matter.Mouse,
                  MouseConstraint = Matter.MouseConstraint;

            const container = document.getElementById('physics-container');
            const width = container.offsetWidth;
            const height = container.offsetHeight;

            // Create engine
            const engine = Engine.create();
            const world = engine.world;

            // Create invisible renderer (we only need the engine, we render with DOM)
            // But we need mouse interaction, so we set up a basic runner
            const runner = Runner.create();
            Runner.run(runner, engine);

            // Walls
            const wallOptions = { isStatic: true, render: { visible: false } };
            const ground = Bodies.rectangle(width / 2, height + 30, width, 60, wallOptions);
            const leftWall = Bodies.rectangle(-30, height / 2, 60, height, wallOptions);
            const rightWall = Bodies.rectangle(width + 30, height / 2, 60, height, wallOptions);
            Composite.add(world, [ground, leftWall, rightWall]);

            // DOM Bodies Mapping
            const domElements = document.querySelectorAll('#skill-templates .skill-card');
            const bodies = [];
            const elements = [];

            domElements.forEach((template, index) => {
                // Clone the DOM element
                const el = template.cloneNode(true);
                el.classList.add('physics-item');
                container.appendChild(el);
                elements.push(el);

                // Get dimensions (approximate)
                const elWidth = 140; // Approx based on content
                const elHeight = 40; 
                
                // Create random position
                const x = Math.random() * (width - 100) + 50;
                const y = -Math.random() * 500 - 50; // Start above screen

                const body = Bodies.rectangle(x, y, elWidth, elHeight, {
                    restitution: 0.5, // Bounciness
                    friction: 0.1,
                    chamfer: { radius: 5 } // Rounded corners physics
                });
                bodies.push(body);
            });

            Composite.add(world, bodies);

            // Mouse Control (Invisible but active)
            const mouse = Mouse.create(container);
            const mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: { visible: false }
                }
            });
            Composite.add(world, mouseConstraint);

            // Prevent page scrolling when using mouse inside canvas
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

            // Sync Loop
            function update() {
                bodies.forEach((body, index) => {
                    const el = elements[index];
                    const { x, y } = body.position;
                    const rotation = body.angle;
                    
                    // Apply transforms
                    el.style.transform = `translate(${x - 70}px, ${y - 20}px) rotate(${rotation}rad)`; 
                    // Note: -70 and -20 are roughly half width/height to center the div on the body
                });
                requestAnimationFrame(update);
            }
            update();

            // Resize Handler
            window.addEventListener('resize', () => {
                // Simple reset for demo purposes
                Matter.Body.setPosition(ground, { x: container.offsetWidth / 2, y: container.offsetHeight + 30 });
                Matter.Body.setPosition(rightWall, { x: container.offsetWidth + 30, y: container.offsetHeight / 2 });
            });
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern"></div>
<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-blue-400 opacity-5 blur-[120px]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white shadow-sm">
<span className="iconify" data-icon="lucide:box" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-sm font-semibold tracking-tight">AGENCY_OS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-500">
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#work">Work</a>
<a className="hover:text-black transition-colors" href="#skills">Stack</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-black text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2" href="mailto:hello@agency.os">
<span>Start Project</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</div>
</nav>

<section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden">
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[10px] uppercase tracking-wider font-medium text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                System Operational
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-black leading-[1.1]">
                WE ENGINEER<br/>
<span className="text-gray-400">DIGITAL PRODUCTS.</span>
</h1>
<p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
                Design-led development. We build performant websites, scalable applications, and seamless user interfaces with mathematical precision.
            </p>

<div className="mt-12 w-full max-w-md bg-white/90 backdrop-blur-md rounded-xl border border-gray-200 shadow-xl overflow-hidden text-left mx-auto tilt-card cursor-pointer group" id="hero-terminal">
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-100 bg-gray-50/50">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
<div className="ml-auto text-[10px] text-gray-400 font-mono">deploy.sh</div>
</div>
<div className="p-6 font-mono text-xs text-gray-700 space-y-2 tilt-inner">
<div className="flex items-center gap-2">
<span className="text-green-600">➜</span>
<span>npm run deploy --production</span>
</div>
<div className="text-gray-400 pl-4">Compiling modules...</div>
<div className="text-gray-400 pl-4">Optimizing assets...</div>
<div className="text-blue-500 pl-4">Build successful (420ms)</div>
<div className="flex items-center gap-2 mt-4">
<span className="text-green-600">➜</span>
<span className="w-2 h-4 bg-black animate-pulse"></span>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-200 bg-white" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal">
<div className="space-y-6">
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">About</h2>
<h3 className="text-3xl font-semibold tracking-tight text-black">
                        Obsessed with <br/>Structure &amp; Form.
                    </h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-md">
                        We don't just write code; we craft architectural solutions. Agency_OS bridges the gap between aesthetic design and robust engineering.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
<span className="iconify mb-2" data-icon="lucide:zap" data-width="20"></span>
<div className="text-xs font-semibold">Fast Delivery</div>
</div>
<div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
<span className="iconify mb-2" data-icon="lucide:shield-check" data-width="20"></span>
<div className="text-xs font-semibold">Secure Core</div>
</div>
</div>
</div>

<div className="relative h-[400px] w-full rounded-2xl overflow-hidden group tilt-card">
<img alt="Office Architecture" className="absolute inset-0 w-full h-[110%] object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" style={{transformOrigin: 'bottom'}}/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-200 relative" id="skills">
<div className="absolute top-8 left-0 right-0 text-center z-10 pointer-events-none">
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Our Tech Stack</h2>
<p className="text-xs text-gray-500 mt-2">Interactive Physics Playground — Throw the cards</p>
</div>

<div className="cursor-grab active:cursor-grabbing" id="physics-container"></div>

<div className="hidden" id="skill-templates">
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none hover:shadow-md transition-shadow">
<span className="iconify" data-icon="lucide:code-2" data-width="14"></span> React
            </div>
<div className="skill-card bg-black text-white border border-black shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium select-none">
<span className="iconify" data-icon="lucide:box-select" data-width="14"></span> Next.js
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:wind" data-width="14"></span> Tailwind
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:database" data-width="14"></span> Postgres
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:cpu" data-width="14"></span> Rust
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:type" data-width="14"></span> TypeScript
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:cloud" data-width="14"></span> AWS
            </div>
<div className="skill-card bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-medium text-gray-800 select-none">
<span className="iconify" data-icon="lucide:layout" data-width="14"></span> Figma
            </div>
</div>
</section>

<section className="py-24 border-t border-gray-200 bg-white overflow-hidden" id="services">
<div className="max-w-6xl mx-auto px-6 mb-10 flex items-end justify-between">
<div>
<h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">Capabilities</h2>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">Services</h3>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('services-slider', -300)">
<span className="iconify" data-icon="lucide:arrow-left" data-width="14"></span>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('services-slider', 300)">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar max-w-full" id="services-slider">

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<span className="iconify" data-icon="lucide:layout-template" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold mb-2">Frontend Engineering</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Complex SPAs built with React and Vue. Focused on interaction, animation, and accessibility.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>React / Next.js</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Three.js / WebGL</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<span className="iconify" data-icon="lucide:server" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold mb-2">Backend Systems</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    Scalable APIs, database architecture, and microservices using Node.js and Go.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>Node.js / Python</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>PostgreSQL / Redis</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold mb-2">Mobile Native</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    High performance mobile applications. React Native for cross-platform efficiency.
                </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>React Native</li>
<li className="flex items-center gap-2 text-[10px] text-gray-500"><span className="w-1 h-1 bg-black rounded-full"></span>iOS / Android</li>
</ul>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-xl border border-gray-200 snap-center spotlight-card hover:border-gray-300 transition-colors">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 text-black">
<span className="iconify" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold mb-2">Product Design</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                    UI/UX design systems that scale. From wireframes to high-fidelity interactive prototypes.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50" id="work">
<div className="max-w-6xl mx-auto space-y-12">
<div className="flex items-end justify-between reveal">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">Selected Work</h3>
<a className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1 transition-colors" href="#">
                    View Archive <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-white border border-gray-200 rounded-xl overflow-hidden relative mb-4 tilt-card">
<img alt="Fintech Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-black">Fintech Dashboard</h4>
<p className="text-xs text-gray-500 mt-1">Real-time data visualization platform</p>
</div>
<span className="px-2 py-1 rounded border border-gray-200 text-[10px] text-gray-500 bg-white">2023</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-white border border-gray-200 rounded-xl overflow-hidden relative mb-4 tilt-card">
<img alt="E-Commerce API" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-semibold text-black">E-Commerce API</h4>
<p className="text-xs text-gray-500 mt-1">Headless infrastructure for retail</p>
</div>
<span className="px-2 py-1 rounded border border-gray-200 text-[10px] text-gray-500 bg-white">2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<div className="flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Client Feedback</h3>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('testimonial-slider', -350)">
<span className="iconify" data-icon="lucide:arrow-left" data-width="14"></span>
</button>
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors" onclick="scrollContainer('testimonial-slider', 350)">
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 no-scrollbar" id="testimonial-slider">

<div className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between snap-center spotlight-card">
<div>
<span className="iconify text-gray-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-xs text-gray-700 leading-relaxed font-medium">
                            "The code quality provided by Agency_OS is unmatched. They transformed our legacy platform into a modern masterpiece with 100% test coverage."
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">SJ</div>
<div>
<div className="text-xs font-semibold">Sarah Jenkins</div>
<div className="text-[10px] text-gray-500">CTO, TechFlow</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between snap-center spotlight-card">
<div>
<span className="iconify text-gray-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-xs text-gray-700 leading-relaxed font-medium">
                            "Communication was seamless. They act more like partners than contractors. Highly recommended for complex builds requiring specialized architecture."
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">DC</div>
<div>
<div className="text-xs font-semibold">David Chen</div>
<div className="text-[10px] text-gray-500">Founder, StartUp Inc</div>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-8 bg-gray-50 rounded-xl border border-gray-100 flex flex-col justify-between snap-center spotlight-card">
<div>
<span className="iconify text-gray-400 mb-4" data-icon="lucide:quote" data-width="20"></span>
<p className="text-xs text-gray-700 leading-relaxed font-medium">
                            "Blazing fast delivery. The attention to detail in the UI implementation was exactly what we needed to secure our Series A funding."
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">ER</div>
<div>
<div className="text-xs font-semibold">Elena Rodriguez</div>
<div className="text-[10px] text-gray-500">Product Lead, FinCo</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-t border-gray-200" id="contact">
<div className="max-w-xl mx-auto reveal">
<div className="text-center mb-10 space-y-2">
<h3 className="text-2xl font-semibold tracking-tight">Ready to build?</h3>
<p className="text-sm text-gray-500">Tell us about your project requirements.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Name</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Email</label>
<input className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Project Type</label>
<select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all text-gray-500">
<option>Web Application</option>
<option>Marketing Website</option>
<option>Mobile App</option>
<option>Consulting</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-gray-500 uppercase">Message</label>
<textarea className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all" placeholder="Tell us about your vision..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-sm tilt-card" type="button">
<span className="iconify" data-icon="lucide:send" data-width="14"></span>
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:box" data-width="12"></span>
</div>
<span className="text-xs font-bold tracking-tight">AGENCY_OS</span>
</div>
<p className="text-[10px] text-gray-500 leading-relaxed max-w-[150px]">
                        Engineering digital experiences with precision and code.
                    </p>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Sitemap</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Home</a></li>
<li><a className="hover:text-black transition-colors" href="#about">About</a></li>
<li><a className="hover:text-black transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Socials</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-black transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-black transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-[10px] font-semibold text-gray-900 uppercase">Legal</h4>
<ul className="space-y-2 text-[10px] text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-black transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-8">
<div className="text-[10px] text-gray-400">© 2024 Agency_OS Inc.</div>
<div className="flex items-center gap-2 text-[10px] text-gray-400 mt-2 md:mt-0">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
