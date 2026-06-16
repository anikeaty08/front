import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    


        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);
            float t = .001 * u_time;
            vec3 color = vec3(0.);
            float noise = neuro_shape(uv, t, p);
            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));
            color = vec3(0.5, 0.15, 0.65);
            color += vec3(0.3, 0.0, 0.25) * sin(3.0 * u_scroll_progress + 1.5);
            color = color * noise;
            gl_FragColor = vec4(color, noise);
        }
    


        // Initialize Lucide icons
        lucide.createIcons();

        const canvasEl = document.querySelector("canvas#neuro");
        const heroSection = document.querySelector(".hero-section");
        const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
        const pointer = { x: 0, y: 0, tX: 0, tY: 0 };
        let uniforms;
        const gl = initShader();
        setupEvents();
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        render();

        function initShader() {
            const vsSource = document.getElementById("vertShader").innerHTML;
            const fsSource = document.getElementById("fragShader").innerHTML;
            const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");
            if (!gl) console.error("WebGL not supported by your browser.");

            function createShader(gl, sourceCode, type) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, sourceCode);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error("Shader error: " + gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
            const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

            function createShaderProgram(gl, vertexShader, fragmentShader) {
                const program = gl.createProgram();
                gl.attachShader(program, vertexShader);
                gl.attachShader(program, fragmentShader);
                gl.linkProgram(program);
                if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                    console.error("Shader link error: " + gl.getProgramInfoLog(program));
                    return null;
                }
                return program;
            }

            const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
            uniforms = getUniforms(shaderProgram);

            function getUniforms(program) {
                let uniforms = [];
                let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
                for (let i = 0; i < uniformCount; i++) {
                    let uniformName = gl.getActiveUniform(program, i).name;
                    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
                }
                return uniforms;
            }

            const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);
            const vertexBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
            gl.useProgram(shaderProgram);

            const position = gl.getAttribLocation(shaderProgram, "a_position");
            gl.enableVertexAttribArray(position);
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
            gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

            return gl;
        }

        function render() {
            const currentTime = performance.now();
            pointer.x += (pointer.tX - pointer.x) * 0.05;
            pointer.y += (pointer.tY - pointer.y) * 0.05;

            gl.uniform1f(uniforms.u_time, currentTime);
            gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1.0 - pointer.y / window.innerHeight);
            gl.uniform1f(uniforms.u_scroll_progress, window.pageYOffset / (2 * window.innerHeight));

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(render);
        }

        function resizeCanvas() {
            canvasEl.width = window.innerWidth * devicePixelRatio;
            canvasEl.height = window.innerHeight * devicePixelRatio;
            canvasEl.style.width = window.innerWidth + "px";
            canvasEl.style.height = window.innerHeight + "px";
            gl.viewport(0, 0, canvasEl.width, canvasEl.height);
            gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
        }

        function setupEvents() {
            window.addEventListener("pointermove", (e) => {
                updateMousePosition(e.clientX, e.clientY);
            });
            window.addEventListener("touchmove", (e) => {
                updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            });
            window.addEventListener("click", (e) => {
                updateMousePosition(e.clientX, e.clientY);
            });

            function updateMousePosition(eX, eY) {
                pointer.tX = eX;
                pointer.tY = eY;
            }
        }

        // Smooth scroll behavior for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add scroll-based effects
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Parallax effect for background
            if (canvasEl) {
                canvasEl.style.transform = `translateY(${rate}px)`;
            }
        });

        // Initialize icons after DOM load
        document.addEventListener('DOMContentLoaded', function() {
            lucide.createIcons();
        });

        // Enhanced dropdown accessibility
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            const trigger = dropdown.querySelector('.nav-dropdown-trigger');
            const menu = dropdown.querySelector('.dropdown-menu');
            
            // Keyboard navigation
            trigger.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    menu.style.opacity = menu.style.opacity === '1' ? '0' : '1';
                    menu.style.visibility = menu.style.visibility === 'visible' ? 'hidden' : 'visible';
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    menu.style.opacity = '0';
                    menu.style.visibility = 'hidden';
                }
            });
        });

        // Performance optimization: Reduce shader complexity on mobile
        if (window.innerWidth < 768) {
            const fragShaderSource = document.getElementById("fragShader").innerHTML;
            const optimizedShader = fragShaderSource.replace('for (int j = 0; j < 15; j++)', 'for (int j = 0; j < 8; j++)');
            document.getElementById("fragShader").innerHTML = optimizedShader;
        }

        // Preload images for better performance
        const imageUrls = [
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/86.jpg',
            'https://randomuser.me/api/portraits/women/63.jpg'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });

        // Add loading state management
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            
            // Trigger fade-in animations
            const fadeElements = document.querySelectorAll('.fade-in');
            fadeElements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                }, index * 100);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="hero-section">
<canvas height="902" id="neuro" style={{width: '1440px', height: '902px'}} width="1440"></canvas>

<nav className="nav-container relative z-50 w-full px-4 md:px-8 pt-8 pb-8 fade-in" style={{opacity: '1'}}>
<div className="max-w-7xl mx-auto">
<div className="nav-glass rounded-2xl pt-4 pr-6 pb-4 pl-6 backdrop-blur-none">
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="logo-glow text-3xl font-semibold text-white font-manrope">
                                awe<span className="text-white/60">.</span>
</span>
</div>
<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link hover:text-white transition-colors text-base font-normal text-white/90 tracking-tight" href="#">Home</a>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    Websites
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-layout-template dropdown-icon" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
<div>
<div className="dropdown-title">Custom Websites</div>
<div className="dropdown-description">Bespoke web solutions</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-shopping-cart dropdown-icon" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<div>
<div className="dropdown-title">E-commerce</div>
<div className="dropdown-description">Online stores &amp; shops</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-smartphone dropdown-icon" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<div>
<div className="dropdown-title">Mobile Apps</div>
<div className="dropdown-description">iOS &amp; Android apps</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-wrench dropdown-icon" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
<div>
<div className="dropdown-title">Maintenance</div>
<div className="dropdown-description">Ongoing support</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-zap dropdown-icon" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div>
<div className="dropdown-title">Performance</div>
<div className="dropdown-description">Speed optimization</div>
</div>
</a>
</div>
</div>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    Digital Marketing
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-search dropdown-icon" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<div>
<div className="dropdown-title">SEO Services</div>
<div className="dropdown-description">Search optimization</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-target dropdown-icon" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div>
<div className="dropdown-title">PPC Advertising</div>
<div className="dropdown-description">Paid campaigns</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<div className="dropdown-title">Social Media</div>
<div className="dropdown-description">Platform management</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-mail dropdown-icon" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div>
<div className="dropdown-title">Email Marketing</div>
<div className="dropdown-description">Campaign automation</div>
</div>
</a>
<div className="dropdown-divider"></div>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-bar-chart-3 dropdown-icon" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<div>
<div className="dropdown-title">Analytics</div>
<div className="dropdown-description">Performance tracking</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div>
<div className="dropdown-title">Growth Strategy</div>
<div className="dropdown-description">Business scaling</div>
</div>
</a>
</div>
</div>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight nav-dropdown-trigger" href="#">
                                    About
                                    <svg className="lucide lucide-chevron-down chevron" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="dropdown-menu">
<a className="dropdown-item" href="#">
<svg className="lucide lucide-users dropdown-icon" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<div className="dropdown-title">Who We Are</div>
<div className="dropdown-description">Our team &amp; story</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-trending-up dropdown-icon" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div>
<div className="dropdown-title">Client Results</div>
<div className="dropdown-description">Success stories</div>
</div>
</a>
<a className="dropdown-item" href="#">
<svg className="lucide lucide-star dropdown-icon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<div>
<div className="dropdown-title">Our Reviews</div>
<div className="dropdown-description">Client testimonials</div>
</div>
</a>
</div>
</div>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Learn</a>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Contact</a>
</div>
<div className="flex items-center space-x-3">
<button className="glass-button group text-base">
<span className="shiny-text font-medium" style={{-Duration: '3s'}}>
                                    Work With Us
                                </span>
</button>
<button className="lg:hidden text-white/80 hover:text-white transition-colors p-2">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-[85vh] flex md:px-8 pt-16 pr-4 pb-20 pl-4 items-center">
<div className="max-w-7xl w-full flex flex-col text-center mr-auto ml-auto items-center">
<div className="text-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-2" style={{opacity: '1'}}>
<span className="gradient-text">Your partn<span className="text-slate-50">ers</span></span> <span className="text-slate-50">in</span>
</h1>
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-6" style={{opacity: '1'}}>
<span className="text-slate-50">online growth.</span>
</h1>
<p className="md:text-xl max-w-xl fade-in fade-in-delay-2 text-lg text-white/80 font-manrope text-center mb-8 mx-auto" style={{opacity: '1'}}>
                        Our advanced neural networks enable you to build, deploy, and scale AI solutions that adapt to your unique business challenges.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3 justify-center" style={{opacity: '1'}}>
<a className="transition-all hover:bg-white/90 font-medium text-gray-900 text-center bg-white rounded-xl pt-4 pr-8 pb-4 pl-8" href="#">Explore Services</a>
<button className="glass-button">
<span className="shiny-text text-base font-medium" style={{-Duration: '4s'}}>
                                Get Started
                            </span>
</button>
</div>
<div className="mt-10 flex items-center gap-2 fade-in fade-in-delay-3 justify-center" style={{opacity: '1'}}>
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/men/86.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/63.jpg"/>
</div>
<div className="text-sm text-white/70">Trusted by 350+ Australian business owners</div>
</div>
</div>
</div>
</div>
</section>





    </>
  );
}
