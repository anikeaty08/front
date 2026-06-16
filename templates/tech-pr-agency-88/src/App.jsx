import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
obsidian: '#050505',
brand: '#E05D3A',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Register GSAP
        gsap.registerPlugin(ScrollTrigger);

        // --- 1. UI Interactions ---

        // Bento Flashlight
        document.querySelectorAll('.bento-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Magnetic Buttons
        document.querySelectorAll('.magnetic-btn').forEach(btn => {
            const wrap = btn.closest('.magnetic-wrap');
            wrap.addEventListener('mousemove', e => {
                const rect = wrap.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                gsap.to(btn, { duration: 0.3, x: x * 0.2, y: y * 0.2, ease: "power2.out" });
            });
            wrap.addEventListener('mouseleave', () => {
                gsap.to(btn, { duration: 0.5, x: 0, y: 0, ease: "elastic.out(1, 0.3)" });
            });
        });

        // Grid Color Transition
        const body = document.body;
        ScrollTrigger.create({
            trigger: ".trigger-dark-mode",
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => body.classList.add('dark-mode-section'),
            onLeaveBack: () => body.classList.remove('dark-mode-section')
        });
        ScrollTrigger.create({
            trigger: "footer.trigger-dark-mode",
            start: "top 50%",
            onEnter: () => body.classList.add('dark-mode-section'),
            onLeaveBack: () => body.classList.remove('dark-mode-section')
        });

        // --- 2. GSAP Animations ---

        // Text Split & Reveal
        document.querySelectorAll('.split-text').forEach(el => {
            const text = el.innerText;
            el.innerHTML = text.split(' ').map(word => {
                return `<span class="split-parent"><span class="split-child inline-block">${word}</span></span>`;
            }).join(' ');

            gsap.to(el.querySelectorAll('.split-child'), {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                y: "0%",
                opacity: 1,
                duration: 0.8,
                stagger: 0.02,
                ease: "power3.out"
            });
        });

        // Section 03: Sticky Stacking Archive
        const stackCards = gsap.utils.toArray('.stack-card');
        if(stackCards.length > 0) {
            gsap.set(stackCards, { 
                y: (i) => i * 120, 
                scale: (i) => 1 - (i * 0.05),
                transformOrigin: "top center",
                zIndex: (i) => stackCards.length - i
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#how-we-work-pin",
                    start: "top top",
                    end: "+=120%",
                    pin: true,
                    scrub: 1,
                }
            });

            stackCards.forEach((card, i) => {
                if(i === 0) return; 
                tl.to(card, {
                    y: i * 20, 
                    scale: 1 - (i * 0.02),
                    ease: "none"
                }, 0); 
            });
        }

        // --- 3. WebGL Rendering ---
        class WebGLApp {
            constructor() {
                try {
                    this.container = document.getElementById('webgl-container');
                    this.scene = new THREE.Scene();
                    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
                    
                    const fov = 45;
                    const aspect = window.innerWidth / window.innerHeight;
                    const cameraZ = (window.innerHeight / 2) / Math.tan((fov / 2) * Math.PI / 180);
                    this.camera.position.z = cameraZ;
                    
                    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                    this.renderer.setSize(window.innerWidth, window.innerHeight);
                    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    this.container.appendChild(this.renderer.domElement);

                    this.scrollVelocity = 0;
                    this.lastScrollY = window.scrollY;
                    this.clock = new THREE.Clock();

                    this.planes = [];
                    this.setupShader();
                    this.createMeshes();
                    this.bindEvents();
                    this.render();

                    // Tell CSS that WebGL is active so we can hide underlying images safely
                    document.body.classList.add('webgl-ready');
                } catch (e) {
                    console.error("WebGL failed to initialize, falling back to standard DOM layout.", e);
                }
            }

            setupShader() {
                this.vertexShader = `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `;
                this.fragmentShader = `
                    uniform sampler2D uTexture;
                    uniform float uVelocity;
                    uniform vec2 uRes;
                    uniform vec2 uImageRes;
                    varying vec2 vUv;

                    void main() {
                        vec2 uv = vUv;

                        vec2 ratio = vec2(
                            min((uRes.x / uRes.y) / (uImageRes.x / uImageRes.y), 1.0),
                            min((uRes.y / uRes.x) / (uImageRes.y / uImageRes.x), 1.0)
                        );
                        vec2 coverUv = vec2(
                            uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                            uv.y * ratio.y + (1.0 - ratio.y) * 0.5
                        );

                        float columns = 4.0;
                        float colIndex = floor(uv.x * columns);
                        
                        float mult = 1.0;
                        if (colIndex == 0.0 || colIndex == 3.0) mult = 0.4;
                        if (colIndex == 1.0 || colIndex == 2.0) mult = 1.6;

                        float yOffset = uVelocity * mult * 0.003; 
                        
                        vec4 color = vec4(0.0);
                        float samples = 8.0;
                        for(float i=0.0; i<8.0; i++) {
                            float blurStep = yOffset * (i / samples);
                            vec2 sampleUv = coverUv + vec2(0.0, -blurStep);
                            sampleUv.y = clamp(sampleUv.y, 0.0, 1.0); 
                            color += texture2D(uTexture, sampleUv);
                        }
                        color /= samples;

                        float line = step(0.98, fract(uv.x * columns));
                        color.rgb = mix(color.rgb, vec3(1.0), line * 0.05);

                        gl_FragColor = color;
                    }
                `;
            }

            createMeshes() {
                const domImages = document.querySelectorAll('.webgl-target');
                const loader = new THREE.TextureLoader();
                // crucial to prevent tainted canvas errors creating blank gaps
                loader.setCrossOrigin('anonymous'); 

                domImages.forEach(img => {
                    const texture = loader.load(img.src);
                    
                    const material = new THREE.ShaderMaterial({
                        vertexShader: this.vertexShader,
                        fragmentShader: this.fragmentShader,
                        uniforms: {
                            uTexture: { value: texture },
                            uVelocity: { value: 0 },
                            uRes: { value: new THREE.Vector2(1, 1) },
                            uImageRes: { value: new THREE.Vector2(1920, 1080) } 
                        },
                        transparent: true
                    });

                    texture.userData.img = img;
                    if(img.complete) {
                        material.uniforms.uImageRes.value.set(img.naturalWidth, img.naturalHeight);
                    } else {
                        img.onload = () => material.uniforms.uImageRes.value.set(img.naturalWidth, img.naturalHeight);
                    }

                    const geometry = new THREE.PlaneGeometry(1, 1, 32, 32); 
                    const mesh = new THREE.Mesh(geometry, material);
                    
                    this.scene.add(mesh);
                    this.planes.push({ mesh, domEl: img });
                });
                this.updatePlanes();
            }

            updatePlanes() {
                this.planes.forEach(plane => {
                    const rect = plane.domEl.getBoundingClientRect();
                    const { mesh } = plane;

                    const x = rect.left - (window.innerWidth / 2) + (rect.width / 2);
                    const y = -rect.top + (window.innerHeight / 2) - (rect.height / 2);

                    mesh.position.set(x, y, 0);
                    mesh.scale.set(rect.width, rect.height, 1);
                    
                    mesh.material.uniforms.uRes.value.set(rect.width, rect.height);
                    
                    const computedStyle = window.getComputedStyle(plane.domEl);
                    const transform = computedStyle.transform;
                    if(transform !== 'none') {
                         mesh.rotation.set(0,0,0);
                         if(plane.domEl.classList.contains('rotate-y-[-12deg]')) mesh.rotation.y = -12 * Math.PI/180;
                         if(plane.domEl.classList.contains('rotate-z-[3deg]')) mesh.rotation.z = 3 * Math.PI/180;
                         if(plane.domEl.classList.contains('rotate-y-[10deg]')) mesh.rotation.y = 10 * Math.PI/180;
                         if(plane.domEl.classList.contains('rotate-z-[-2deg]')) mesh.rotation.z = -2 * Math.PI/180;
                    }
                });
            }

            bindEvents() {
                window.addEventListener('resize', () => {
                    const fov = 45;
                    this.camera.aspect = window.innerWidth / window.innerHeight;
                    this.camera.position.z = (window.innerHeight / 2) / Math.tan((fov / 2) * Math.PI / 180);
                    this.camera.updateProjectionMatrix();
                    this.renderer.setSize(window.innerWidth, window.innerHeight);
                    this.updatePlanes();
                });
            }

            render() {
                const currentScrollY = window.scrollY;
                const deltaY = currentScrollY - this.lastScrollY;
                
                this.scrollVelocity += (deltaY - this.scrollVelocity) * 0.1;
                this.lastScrollY = currentScrollY;

                this.updatePlanes();

                this.planes.forEach(plane => {
                    let clampedVel = Math.max(Math.min(this.scrollVelocity, 150), -150);
                    plane.mesh.material.uniforms.uVelocity.value = clampedVel;
                });

                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(this.render.bind(this));
            }
        }

        if (window.innerWidth > 768 && typeof THREE !== 'undefined') {
            new WebGLApp();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grid"></div>
<div id="webgl-container"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max bg-white/80 backdrop-blur-md rounded-full px-2 py-2 border border-gray-200/50 shadow-sm flex items-center gap-8">
<a className="pl-6 font-medium tracking-tight text-sm" href="#">Venture.</a>
<div className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-black transition-colors" href="#about">About</a>
<a className="hover:text-black transition-colors" href="#services">Services</a>
<a className="hover:text-black transition-colors" href="#work">Projects</a>
</div>
<div className="magnetic-wrap">
<button className="magnetic-btn btn-beam rounded-full px-6 py-2 text-xs font-medium text-brand group" style={{-BgInner: '#fff', -BeamColor: '#E05D3A'}}>
<span className="btn-beam-content flex items-center gap-2">
                    Book Strategy Call
                    <i className="w-3.5 h-3.5 stroke-[1.5] group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</nav>

<section className="min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col justify-center relative overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-6 z-20 flex flex-col items-start">
<p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-6 split-text">Communications Studio</p>
<h1 className="text-5xl md:text-[4.5vw] leading-[1.05] tracking-tight font-medium text-black mb-8 split-text">
                    Fueling Growth with Every Connection
                </h1>
<p className="text-lg text-gray-600 max-w-lg mb-10 split-text font-light">
                    Senior-led PR that generates consistent tier-1 media coverage for venture-backed tech companies. We build narratives, not just random press hits.
                </p>
<div className="flex items-center gap-4 split-text mb-16">
<div className="magnetic-wrap">
<button className="magnetic-btn bg-black text-white px-8 py-3.5 rounded-full text-sm font-medium hover:scale-[1.03] transition-transform">
                            Book Consultation
                        </button>
</div>
<div className="magnetic-wrap">
<button className="magnetic-btn bg-transparent text-black border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors hover:scale-[1.03]">
                            Learn more
                        </button>
</div>
</div>

<div className="w-full border-t border-gray-200/60 pt-8 split-text">
<p className="text-xs text-gray-400 font-mono uppercase tracking-widest mb-5">Trusted by industry leaders</p>
<div className="flex flex-wrap items-center gap-x-8 gap-y-4 opacity-40 grayscale">
<span className="text-lg font-semibold tracking-tighter">SYNTHESIS</span>
<span className="text-lg font-semibold tracking-tighter">LEXMACHINA</span>
<span className="text-lg font-semibold tracking-tighter">NARWAL</span>
<span className="text-lg font-semibold tracking-tighter">RABBIT</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative h-[50vh] lg:h-[70vh] w-full flex items-center justify-center perspective-1000 mt-10 lg:mt-0">
<div className="relative w-full h-full max-w-lg mx-auto">
<img alt="Tech Mockup 1" className="webgl-target absolute top-[5%] right-0 w-[75%] h-[65%] object-cover rounded-2xl shadow-2xl rotate-y-[-12deg] rotate-z-[3deg] z-10" crossorigin="anonymous" src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Tech Mockup 2" className="webgl-target absolute bottom-[5%] left-0 w-[65%] h-[55%] object-cover rounded-2xl shadow-xl rotate-y-[10deg] rotate-z-[-2deg] z-20" crossorigin="anonymous" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white relative" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
<div className="md:col-span-5 flex flex-col">
<span className="text-[12vw] leading-none tracking-tighter font-medium text-gray-100 -ml-2 select-none">01</span>
<h2 className="text-3xl tracking-tight font-medium mt-[-2rem] split-text">About us</h2>
</div>
<div className="md:col-span-7 flex flex-col justify-end pt-8">
<p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light split-text mb-6">
                        Venture PR delivers consistent tier-1 media coverage for venture-backed tech companies.
                    </p>
<p className="text-lg text-gray-500 leading-relaxed font-light split-text">
                        We handle the full cycle: strategy that aligns with your funding and growth milestones, media relationships built over 15+ years in tech, and hands-on execution.
                    </p>
</div>
</div>

<div className="relative w-full h-[50vh] md:h-[70vh] rounded-3xl overflow-hidden mb-24 bg-gray-100 group">
<img alt="Roborock Context" className="webgl-target w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" crossorigin="anonymous" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-8 -right-8 w-[50%] md:w-[35%] h-[60%] rounded-3xl overflow-hidden border-8 border-white shadow-2xl z-20 hidden sm:block">
<img alt="Team working" className="w-full h-full object-cover" crossorigin="anonymous" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-16">
<div className="flex flex-col gap-2">
<span className="text-4xl tracking-tight font-medium">$500M+</span>
<span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Raised for clients</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl tracking-tight font-medium">670M+</span>
<span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Audience Reach</span>
<p className="text-xs text-gray-500 mt-2 font-light">Across 149 feature stories</p>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl tracking-tight font-medium">89</span>
<span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Articles</span>
<p className="text-xs text-gray-500 mt-2 font-light">Secured in one month</p>
</div>
<div className="flex flex-col gap-2">
<span className="text-4xl tracking-tight font-medium">15+</span>
<span className="font-mono text-xs text-gray-400 uppercase tracking-wider">Years</span>
<p className="text-xs text-gray-500 mt-2 font-light">Media relationships</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-obsidian text-white relative trigger-dark-mode" id="services">
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-8 mb-16 border-b border-white/10 pb-10">
<h2 className="text-4xl tracking-tight font-medium split-text">Smart PR That Fits<br/>Your Business Goals</h2>
<div className="md:text-right">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-2">02</span>
<span className="text-sm text-gray-400">Our Services</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen transition-opacity group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
<div className="bento-content">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" height="32" icon="solar:global-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16">Media Relations Strategy</h3>
<p className="text-sm text-gray-400 mt-3 font-light">Connecting your narrative with the journalists who shape the industry.</p>
</div>
</div>

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group">
<div className="bento-content">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" height="32" icon="solar:user-speak-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16">Leadership Messaging</h3>
<p className="text-sm text-gray-400 mt-3 font-light">Elevating founders into recognized thought leaders.</p>
</div>
</div>

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group">
<div className="bento-content">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" height="32" icon="solar:calendar-star-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16">Events &amp; Activations</h3>
<p className="text-sm text-gray-400 mt-3 font-light">Strategic placement at tier-1 conferences like CES and Web Summit.</p>
</div>
</div>

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group">
<div className="bento-content">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" height="32" icon="solar:document-text-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16">Strategic Content</h3>
<p className="text-sm text-gray-400 mt-3 font-light">Data-driven research reports that reporters actually want to cite.</p>
</div>
</div>

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group bg-brand/5 border-brand/20">
<div className="bento-content">
<iconify-icon className="text-brand" height="32" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16 text-brand">Generative Engine Optimization</h3>
<p className="text-sm text-brand/70 mt-3 font-light">Ensuring your brand surfaces correctly in LLMs and AI search engines.</p>
</div>
</div>

<div className="bento-card p-8 rounded-2xl min-h-[280px] flex flex-col justify-between group relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-screen transition-opacity group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>
<div className="bento-content">
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight mt-16">KOL Engagement</h3>
<p className="text-sm text-gray-400 mt-3 font-light">Partnering with key opinion leaders to validate your technology.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F5F5F7] relative trigger-light-mode overflow-hidden" id="how-we-work-pin">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<span className="font-mono text-xs text-gray-500 uppercase tracking-widest block mb-4">03 — Process</span>
<h2 className="text-3xl tracking-tight font-medium split-text">How we work</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-center gap-12 border-l border-gray-300 pl-8 ml-4">
<div className="relative">
<div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-obsidian border-4 border-[#F5F5F7]"></div>
<h4 className="text-base font-medium tracking-tight mb-2">1. Strategy &amp; Discovery</h4>
<p className="text-sm text-gray-500 font-light">Deep dive into your product, market, and milestones to craft a tailored narrative.</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-[#F5F5F7]"></div>
<h4 className="text-base font-medium tracking-tight text-gray-600 mb-2">2. PR Plan Development</h4>
<p className="text-sm text-gray-500 font-light">Mapping out target outlets, core messaging pillars, and asset requirements.</p>
</div>
<div className="relative">
<div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-[#F5F5F7]"></div>
<h4 className="text-base font-medium tracking-tight text-gray-600 mb-2">3. Aggressive Execution</h4>
<p className="text-sm text-gray-500 font-light">Pitching, securing briefings, and managing the entire media lifecycle.</p>
</div>
</div>

<div className="lg:col-span-8 order-1 lg:order-2 relative h-[45vh] md:h-[55vh] w-full flex items-center justify-center perspective-1000 mb-10 lg:mb-0" id="stack-container">
<div className="stack-card absolute w-full md:w-[85%] h-[90%] bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform border border-gray-100 z-10">
<img alt="Data" className="w-full h-full object-cover opacity-80" crossorigin="anonymous" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="stack-card absolute w-full md:w-[85%] h-[90%] bg-gray-50 rounded-2xl shadow-xl overflow-hidden transform transition-transform border border-gray-100 z-20">
<img alt="Robot" className="w-full h-full object-cover opacity-90" crossorigin="anonymous" src="https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="stack-card absolute w-full md:w-[85%] h-[90%] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-transform border border-gray-100 z-30">
<img alt="Tech" className="w-full h-full object-cover" crossorigin="anonymous" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white relative" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16 border-b border-gray-100 pb-10">
<div className="flex items-baseline gap-4">
<span className="text-2xl font-mono text-gray-300">04</span>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium split-text">Our Work</h2>
</div>
<p className="text-sm text-gray-500 max-w-sm md:text-right font-light">
                    A handpicked collection of our work that shows how we help brands grow through smart PR.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer flex flex-col h-full">
<div className="w-full h-[40vh] md:h-[50vh] rounded-2xl overflow-hidden mb-6 bg-gray-50 relative flex-shrink-0">
<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-2.5 rounded-lg shadow-sm border border-gray-100">
<iconify-icon className="text-black" height="24" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<img alt="Lex Machina Data" className="webgl-target w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" crossorigin="anonymous" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow">
<h3 className="text-xl font-medium tracking-tight mb-2">Lex Machina</h3>
<p className="text-sm text-gray-500 font-light">149 feature stories reaching 670M readers over 6 years.</p>
</div>
</div>

<div className="group cursor-pointer md:mt-24 flex flex-col h-full">
<div className="w-full h-[40vh] md:h-[55vh] rounded-2xl overflow-hidden mb-6 bg-gray-50 relative flex-shrink-0">
<div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur p-2.5 rounded-lg shadow-sm border border-gray-100">
<iconify-icon className="text-black" height="24" icon="solar:smart-home-linear" width="24"></iconify-icon>
</div>
<img alt="Narwal Robot" className="webgl-target w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" crossorigin="anonymous" src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-grow">
<h3 className="text-xl font-medium tracking-tight mb-2">Narwal</h3>
<p className="text-sm text-gray-500 font-light">89 articles in a single month including CNN, TIME, and top-tier consumer tech outlets.</p>
</div>
</div>

<div className="group cursor-pointer md:col-span-2 mt-8 md:mt-0">
<div className="w-full h-[45vh] md:h-[65vh] rounded-2xl overflow-hidden mb-6 bg-obsidian relative">
<div className="absolute top-4 left-4 z-20 bg-white/10 backdrop-blur p-2.5 rounded-lg shadow-sm border border-white/10">
<iconify-icon className="text-white" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<img alt="Rabbit AI Interface" className="webgl-target w-full h-full object-cover opacity-70 mix-blend-screen transition-opacity duration-700 group-hover:opacity-90" crossorigin="anonymous" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Rabbit AI</h3>
<p className="text-sm text-gray-500 max-w-lg font-light">Viral CES launch generating Fortune, CBS, ABC, Gizmodo, CNET coverage.</p>
</div>
</div>
</div>
</section>

<footer className="bg-obsidian text-white pt-24 md:pt-32 overflow-hidden relative trigger-dark-mode">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<i className="w-10 h-10 text-gray-800 absolute -top-4 -left-4 z-0" data-lucide="quote"></i>
<h3 className="text-2xl md:text-3xl leading-snug font-medium tracking-tight mb-8 relative z-10 text-gray-100">
                    "Venture PR didn't just get us press; they engineered a narrative that completely shifted how investors and customers perceive our technology. They operate like an extension of our C-suite."
                </h3>
<div className="flex items-center gap-4">
<img alt="CEO Headshot" className="w-12 h-12 rounded-full object-cover border border-white/20" crossorigin="anonymous" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=256&amp;h=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight">Marcus Eldridge</p>
<p className="text-xs text-gray-500 font-mono">CEO, Synthesis AI</p>
</div>
</div>
</div>

<div className="bento-card p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<h4 className="text-xl font-medium tracking-tight mb-2 relative z-10">Ask us anything or say hi</h4>
<p className="text-sm text-gray-400 mb-8 font-light relative z-10">We usually respond within 24 hours.</p>
<form className="flex flex-col gap-4 relative z-10">
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-light" placeholder="Name" type="text"/>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-light" placeholder="Email" type="email"/>
<textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand transition-colors text-white placeholder:text-gray-600 font-light resize-none" placeholder="Message" rows="3"></textarea>
<div className="magnetic-wrap mt-2">
<button className="btn-beam magnetic-btn w-full rounded-xl px-6 py-3 text-sm font-medium text-white group" style={{-BgInner: '#111', -BeamColor: '#E05D3A'}} type="button">
<span className="btn-beam-content flex items-center justify-center gap-2">
                                Send Message
                                <i className="w-4 h-4 stroke-[1.5]" data-lucide="send"></i>
</span>
</button>
</div>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 mb-12 border-t border-white/10 pt-8 font-light">
<p>© 2024 Venture PR. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>

<div className="w-full overflow-hidden marquee-container pointer-events-none pb-4">
<div className="marquee-content flex items-center">
<span className="text-[25vw] leading-none font-semibold tracking-tighter text-white/5">venture.</span>
<span className="text-[25vw] leading-none font-semibold tracking-tighter text-white/5 ml-16">venture.</span>
<span className="text-[25vw] leading-none font-semibold tracking-tighter text-white/5 ml-16">venture.</span>
</div>
</div>
</footer>








    </>
  );
}
