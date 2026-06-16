import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- 1. Loader Sequence ---
        const loader = document.getElementById('loader');
        const progress = document.getElementById('loader-progress');
        const counter = document.getElementById('loader-counter');
        
        let percent = 0;
        const interval = setInterval(() => {
            percent += Math.floor(Math.random() * 10) + 5;
            if (percent > 100) percent = 100;
            
            progress.style.width = percent + '%';
            counter.innerText = percent + '%';
            
            if (percent === 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add('hide');
                    setTimeout(() => { loader.style.display = 'none'; }, 1200);
                }, 400);
            }
        }, 100);

        // --- 2. Custom Cursor ---
        const cursor = document.getElementById('cursor');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            // Smooth lerp
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Magnetic & Hover States
        document.querySelectorAll('.interactive').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        document.querySelectorAll('.magnetic').forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });

        // --- 3. Scroll Reveal & Timeline ---
        const observerOptions = { root: null, threshold: 0.1, rootMargin: "-50px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Don't unobserve approach steps so they can fade out if needed, 
                    // but for general reveals, unobserve is better for performance.
                    if(entry.target.classList.contains('reveal')) {
                        observer.unobserve(entry.target);
                    }
                } else if (entry.target.classList.contains('step-item')) {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        
        // Timeline observer (active while in center of screen)
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, { rootMargin: "-40% 0px -40% 0px" });
        
        document.querySelectorAll('.step-item').forEach(el => timelineObserver.observe(el));

        // --- 4. Parallax Elements ---
        const parallaxEls = document.querySelectorAll('.parallax');
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            parallaxEls.forEach(el => {
                const speed = el.getAttribute('data-speed');
                el.style.transform = `translateY(${y * speed}px)`;
            });
        });

        // --- 5. 3D Tilt Cards Logic ---
        function initTiltCards() {
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                });
            });
        }

        // --- 6. Behance API Fetch Integration ---
        async function fetchBehanceProjects() {
            const grid = document.getElementById('behance-grid');
            const fallback = document.getElementById('behance-fallback');
            
            try {
                // Using rss2json public API to parse Behance RSS feed
                const rssUrl = encodeURIComponent('https://www.behance.net/feeds/user?username=denis_des');
                const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}`);
                const data = await response.json();

                if (data.status === 'ok' && data.items && data.items.length > 0) {
                    grid.innerHTML = ''; // Clear skeleton
                    grid.classList.remove('space-y-8');
                    
                    data.items.slice(0, 4).forEach((item, i) => {
                        // Attempt to extract high-res image from description HTML
                        let imgSrc = item.thumbnail;
                        const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                        if (imgMatch && imgMatch[1]) imgSrc = imgMatch[1];
                        
                        // Alternate aspect ratios for masonry look
                        const aspect = i % 2 === 0 ? 'aspect-[4/3]' : 'aspect-square';

                        const html = `
                            <a href="${item.link}" target="_blank" class="block w-full interactive tilt-card group reveal break-inside-avoid mb-8">
                                <div class="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 ${aspect}">
                                    <div class="absolute inset-0 bg-gradient-to-br from-[#0055FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img src="${imgSrc}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=800&q=80'" />
                                </div>
                                <div class="mt-6 tilt-content">
                                    <h3 class="text-xl font-medium text-white tracking-tight">${item.title}</h3>
                                    <p class="text-sm text-zinc-500 mt-2">Проект Behance</p>
                                </div>
                            </a>
                        `;
                        grid.insertAdjacentHTML('beforeend', html);
                    });
                    
                    // Re-init reveals and interactivity for new DOM nodes
                    document.querySelectorAll('#behance-grid .reveal').forEach(el => observer.observe(el));
                    document.querySelectorAll('#behance-grid .interactive').forEach(el => {
                        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                    });
                    initTiltCards();
                } else {
                    throw new Error('No valid items found');
                }
            } catch (error) {
                console.log('Behance fetch failed, showing premium fallback', error);
                grid.style.display = 'none';
                fallback.classList.remove('hidden');
                fallback.classList.add('block');
                initTiltCards();
            }
        }
        // Delay fetch slightly to let loader finish
        setTimeout(fetchBehanceProjects, 1000);
        initTiltCards(); // Init for fallback initially

        // --- 7. Three.js Fluid Waterfall Background ---
        const canvasContainer = document.getElementById('webgl-wrapper');
        const canvas = document.getElementById('fluid-canvas');

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
        
        function resizeFluid() {
            const rect = canvasContainer.getBoundingClientRect();
            renderer.setSize(rect.width, rect.height);
            // Pass resolution to shader
            if(material) {
                material.uniforms.u_resolution.value.x = rect.width;
                material.uniforms.u_resolution.value.y = rect.height;
            }
        }

        // Custom Shader Material for Liquid Flow
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            varying vec2 vUv;

            // Pseudo-random noise
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 st = gl_FragCoord.xy / u_resolution.xy;
                st.x *= u_resolution.x / u_resolution.y;

                // Mouse Interaction Ripple
                float dist = distance(st, u_mouse);
                float ripple = sin(dist * 20.0 - u_time * 5.0) * exp(-dist * 5.0);
                
                // Base fluid movement (flowing down)
                vec2 pos = vec2(st.x * 3.0, st.y * 3.0 + u_time * 0.5);
                
                // Add ripple distortion
                pos += ripple * 0.1;

                float noise = snoise(pos);
                float noise2 = snoise(pos + vec2(u_time * 0.2, 0.0));

                // Colors based on requested palette
                vec3 darkBg = vec3(0.05, 0.05, 0.07);
                vec3 accent1 = vec3(0.0, 0.33, 1.0); // #0055FF
                vec3 accent2 = vec3(0.0, 0.64, 1.0); // #00A3FF

                float mixFactor = smoothstep(-0.5, 0.5, noise + noise2 * 0.5);
                
                vec3 finalColor = mix(darkBg, mix(accent1, accent2, noise2), mixFactor * 0.8);
                
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        const material = new THREE.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2() },
                u_mouse: { value: new THREE.Vector2(-1, -1) } // Default offscreen
            }
        });

        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        // Track local mouse over canvas
        canvasContainer.addEventListener('mousemove', (e) => {
            const rect = canvasContainer.getBoundingClientRect();
            // Map mouse to shader coordinates (aspect ratio adjusted)
            const x = (e.clientX - rect.left) / rect.width;
            const y = 1.0 - ((e.clientY - rect.top) / rect.height);
            
            material.uniforms.u_mouse.value.x = x * (rect.width / rect.height);
            material.uniforms.u_mouse.value.y = y;
        });
        
        canvasContainer.addEventListener('mouseleave', () => {
            // Smoothly move mouse influence away
            material.uniforms.u_mouse.value.x = -1;
            material.uniforms.u_mouse.value.y = -1;
        });

        window.addEventListener('resize', resizeFluid);
        resizeFluid();

        const clock = new THREE.Clock();
        function animateWebGL() {
            material.uniforms.u_time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            requestAnimationFrame(animateWebGL);
        }
        animateWebGL();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor"></div>

<div id="loader">
<div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-start gap-4">
<div className="text-4xl font-semibold tracking-tight text-white" id="loader-counter">0%</div>
<div className="w-full relative h-[1px] bg-white/10">
<div className="loader-line absolute left-0 top-0" id="loader-progress"></div>
</div>
</div>
</div>

<div className="glass-orb w-[400px] h-[400px] bg-[#0055FF] top-[-10%] left-[-10%] parallax" data-speed="0.05"></div>
<div className="glass-orb w-[600px] h-[600px] bg-[#00A3FF] top-[40%] right-[-20%] parallax" data-speed="-0.03"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 pointer-events-none">
<div className="max-w-7xl mx-auto w-full flex justify-start">
<a className="text-white font-semibold tracking-tight text-lg uppercase pointer-events-auto interactive hover:tracking-widest transition-all duration-500" href="#">D.DES</a>
</div>
</nav>

<main className="relative z-10 flex flex-col items-start w-full">

<section className="min-h-screen w-full relative pt-32 pb-16 flex items-center">
<div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">

<div className="flex flex-col justify-center items-start w-full order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0055FF]/10 border border-[#0055FF]/20 mb-8 reveal">
<span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse"></span>
<span className="text-xs font-medium text-[#00A3FF] uppercase tracking-widest">Available for work</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.05] reveal delay-1">
                        Лучший дизайн — <br className="hidden md:block"/>
                        тот, <span className="text-gradient">которого не замечают.</span>
</h1>
<p className="mt-8 text-base md:text-lg text-zinc-400 max-w-md leading-relaxed reveal delay-2">
                        Проектирую цифровые решения, где сложность становится простотой, а эстетика — функцией.
                    </p>
<a className="magnetic interactive mt-12 group flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium text-sm transition-all duration-300 reveal delay-2 backdrop-blur-sm" href="#portfolio">
                        Смотреть работы
                        <iconify-icon className="group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="relative w-full h-[50vh] lg:h-full min-h-[400px] order-1 lg:order-2 rounded-3xl overflow-hidden reveal delay-1 bg-zinc-900/20 border border-white/5" id="webgl-wrapper">
<canvas className="absolute inset-0 w-full h-full cursor-none" id="fluid-canvas"></canvas>
</div>
</div>
</section>

<section className="py-24 md:py-40 w-full border-t border-white/[0.02]">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-start">
<h2 className="text-sm font-medium text-[#00A3FF] uppercase tracking-widest mb-8 reveal">Предыстория</h2>
<p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight max-w-5xl reveal delay-1">
                    Мой путь в дизайне начался не с коммерческих заказов, а с увлечения в 15 лет. Это был чистый интерес к тому, как цифровые интерфейсы могут быть не только функциональными, но и увлекательными. Годы экспериментов превратили хобби в профессию и укрепили главный принцип: <span className="text-zinc-500">по-настоящему хороший дизайн решает задачи так органично, что пользователь не задумывается о его существовании. Он просто работает.</span>
</p>
</div>
</section>

<section className="py-24 md:py-40 w-full bg-[#050505] border-y border-white/[0.02] relative overflow-hidden">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-start relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 reveal">Больше, чем просто дизайн</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

<div className="flex flex-col items-start p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors reveal">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0055FF]/20 to-transparent border border-[#0055FF]/30 flex items-center justify-center text-[#00A3FF] mb-8 shadow-[0_0_30px_rgba(0,85,255,0.15)] interactive">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Партнёрство, а не исполнительство</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Глубоко погружаюсь в бизнес-процессы, чтобы предлагать решения, которые драйвят метрики, а не просто рисую экраны.</p>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors reveal delay-1">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0055FF]/20 to-transparent border border-[#0055FF]/30 flex items-center justify-center text-[#00A3FF] mb-8 shadow-[0_0_30px_rgba(0,85,255,0.15)] interactive">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Системный подход</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Создаю масштабируемые дизайн-системы. Это ускоряет разработку и обеспечивает консистентность на всех этапах продукта.</p>
</div>

<div className="flex flex-col items-start p-8 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.04] transition-colors reveal delay-2">
<div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0055FF]/20 to-transparent border border-[#0055FF]/30 flex items-center justify-center text-[#00A3FF] mb-8 shadow-[0_0_30px_rgba(0,85,255,0.15)] interactive">
<iconify-icon icon="solar:eye-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">Фокус на пользователе</h3>
<p className="text-sm text-zinc-500 leading-relaxed">В основе каждого решения лежат исследования и эмпатия. Интерфейс должен говорить на языке того, кто им пользуется.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 w-full relative" id="portfolio">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-start">
<div className="flex items-center gap-4 mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">Кейсы и портфолио</h2>
<span className="px-3 py-1 rounded-full bg-[#0055FF]/10 text-[#00A3FF] text-xs font-medium border border-[#0055FF]/20">Live Fetch</span>
</div>

<div className="w-full columns-1 md:columns-2 gap-8 space-y-8" id="behance-grid">

<div className="w-full aspect-video bg-white/[0.02] animate-pulse rounded-2xl mb-8"></div>
<div className="w-full aspect-square bg-white/[0.02] animate-pulse rounded-2xl mb-8"></div>
<div className="w-full aspect-square bg-white/[0.02] animate-pulse rounded-2xl mb-8"></div>
<div className="w-full aspect-video bg-white/[0.02] animate-pulse rounded-2xl mb-8"></div>
</div>

<div className="hidden w-full columns-1 md:columns-2 gap-8 space-y-8" id="behance-fallback">
<a className="block w-full interactive tilt-card group reveal break-inside-avoid" href="#">
<div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 aspect-[4/3]">
<div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="mt-6 tilt-content">
<h3 className="text-xl font-medium text-white tracking-tight">SaaS Dashboard AI</h3>
<p className="text-sm text-zinc-500 mt-2">UX/UI, Проектирование</p>
</div>
</a>
<a className="block w-full interactive tilt-card group reveal delay-1 break-inside-avoid" href="#">
<div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 aspect-square">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0055FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="mt-6 tilt-content">
<h3 className="text-xl font-medium text-white tracking-tight">Fintech Mobile App</h3>
<p className="text-sm text-zinc-500 mt-2">Mobile Design, Interaction</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-40 w-full bg-[#050505] border-t border-white/[0.02]">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 lg:gap-32 items-start">
<div className="w-full md:w-1/3 sticky top-32 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">Мой подход<br/>к работе</h2>
<p className="text-zinc-500 text-sm">4 шага к измеримому результату. Каждая стадия важна для финального качества продукта.</p>
</div>
<div className="w-full md:w-2/3 flex flex-col items-start mt-8 md:mt-0" id="approach-timeline">

<div className="step-item w-full pb-16">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">1. Погружение <span className="text-zinc-600 text-sm font-normal ml-2 tracking-normal">(Deconstruct)</span></h3>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed">Брифинг, анализ конкурентов, изучение целевой аудитории и бизнес-требований. Декомпозиция сложной задачи на понятные составляющие.</p>
</div>

<div className="step-item w-full pb-16">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">2. Проектирование <span className="text-zinc-600 text-sm font-normal ml-2 tracking-normal">(Design)</span></h3>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed">Создание информационной архитектуры, низкодетализированных Wireframes и User Flows. Строгая проверка логики до отрисовки UI.</p>
</div>

<div className="step-item w-full pb-16">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">3. Итерация <span className="text-zinc-600 text-sm font-normal ml-2 tracking-normal">(Iterate)</span></h3>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed">Визуальный дизайн, создание интерактивных прототипов, коридорное тестирование и внесение правок на основе конструктивного фидбека.</p>
</div>

<div className="step-item w-full">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">4. Передача <span className="text-zinc-600 text-sm font-normal ml-2 tracking-normal">(Deliver)</span></h3>
<p className="text-base text-zinc-400 max-w-lg leading-relaxed">Подготовка макетов, сборка UI-кита или дизайн-системы, написание документации для безупречной реализации разработчиками.</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 w-full relative overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0055FF]/10 rounded-full blur-[150px] pointer-events-none"></div>
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-start relative z-10 reveal">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1]">
                    Есть идея<br/>или проект?
                </h2>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12">
                    Давайте создадим что-то выдающееся вместе. Я открыт к новым предложениям и готов обсудить, как мой опыт может быть полезен вашему бизнесу.
                </p>
<a className="magnetic interactive relative inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#0055FF] text-white font-medium text-sm overflow-hidden group" href="mailto:contact@example.com">
<span className="absolute inset-0 w-full h-full bg-[#00A3FF] transition-transform duration-500 scale-x-0 origin-left group-hover:scale-x-100"></span>
<span className="relative flex items-center gap-3 z-10">
                        Связаться со мной
                        <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="w-full border-t border-white/[0.04] py-12">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="text-sm text-zinc-600 font-medium">
                    © 2024. Дизайн, который работает.
                </div>
<div className="flex flex-wrap items-center gap-8 text-sm font-medium text-white">
<a className="hover-slide interactive" data-text="Behance" href="https://www.behance.net/denis_des" target="_blank"><span>Behance</span></a>
<a className="hover-slide interactive" data-text="Dribbble" href="#"><span>Dribbble</span></a>
<a className="hover-slide interactive" data-text="Telegram" href="#"><span>Telegram</span></a>
<a className="hover-slide interactive" data-text="LinkedIn" href="#"><span>LinkedIn</span></a>
</div>
</div>
</footer>
</main>


    </>
  );
}
