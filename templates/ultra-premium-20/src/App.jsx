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



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['"Plus Jakarta Sans"', 'sans-serif'],
body: ['Inter', 'sans-serif'],
},
colors: {
dark: '#0C0C0C',
light: '#F5F0EA',
gold: '#C9A96E',
darker: '#080808'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Pre-setup Masked Text
        document.querySelectorAll('.masked-heading').forEach(heading => {
            const html = heading.innerHTML;
            const lines = html.split('<br>');
            heading.innerHTML = lines.map(line => {
                const words = line.split(' ').map(word => {
                    if(!word.trim()) return '';
                    return `<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block translate-y-[110%] opacity-0 js-word">${word}</span></span>`;
                }).join(' ');
                return `<span class="block">${words}</span>`;
            }).join('');
        });

        // Intro Loader
        window.addEventListener('load', () => {
            gsap.to('#loader h1', { opacity: 0, scale: 1.1, duration: 1, delay: 0.5, ease: "power2.inOut" });
            gsap.to('#loader', { yPercent: -100, duration: 1.2, delay: 1, ease: "power4.inOut" });
            
            // Trigger Hero Animations
            setTimeout(() => {
                gsap.to('.hero-line', {
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.2
                });
            }, 1200);
        });

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Scroll Progress
        lenis.on('scroll', (e) => {
            const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scroll-progress').style.width = `${progress}%`;
        });

        // Custom Cursor
        const cursorDot = document.getElementById('cursor-dot');
        const cursorText = document.getElementById('cursor-text');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const loopCursor = () => {
            // Lerp
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursorDot.style.left = `${cursorX}px`;
            cursorDot.style.top = `${cursorY}px`;
            requestAnimationFrame(loopCursor);
        };
        requestAnimationFrame(loopCursor);

        // Cursor interactions
        document.querySelectorAll('.cursor-interact').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover-active');
                if(el.dataset.cursorText) cursorText.textContent = el.dataset.cursorText;
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover-active');
                cursorText.textContent = '';
            });
        });

        document.querySelectorAll('.cursor-image').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.classList.add('hover-image');
                cursorText.textContent = 'Entdecken';
            });
            el.addEventListener('mouseleave', () => {
                cursorDot.classList.remove('hover-image');
                cursorText.textContent = '';
            });
        });

        // Disable custom cursor on mobile
        if(window.innerWidth < 768) {
            cursorDot.style.display = 'none';
            document.body.style.cursor = 'auto';
        }

        // GSAP Setup
        gsap.registerPlugin(ScrollTrigger);

        // Navbar Blur on Scroll
        ScrollTrigger.create({
            start: 'top -100',
            end: 99999,
            toggleClass: {className: 'backdrop-blur-xl bg-dark/80 py-4', targets: '#navbar'}
        });

        // Rotating Words Hero
        const words = document.querySelectorAll('.rotating-word');
        let currentWord = 0;
        setInterval(() => {
            gsap.to(words[currentWord], { y: -20, opacity: 0, filter: 'blur(10px)', duration: 0.5 });
            words[currentWord].classList.remove('active');
            
            currentWord = (currentWord + 1) % words.length;
            
            gsap.fromTo(words[currentWord], 
                { y: 20, opacity: 0, filter: 'blur(10px)' },
                { y: 0, opacity: 1, filter: 'blur(0)', duration: 0.5 }
            );
            words[currentWord].classList.add('active');
        }, 3000);

        // Global Scroll Reveals
        const revealElements = document.querySelectorAll('.gs-reveal');
        revealElements.forEach(el => {
            if(el.classList.contains('fade-up')) {
                gsap.fromTo(el, {y: 50, opacity: 0}, {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('blur-in')) {
                gsap.fromTo(el, {y: 30, opacity: 0, filter: "blur(10px)"}, {
                    y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('scale-reveal')) {
                gsap.fromTo(el, {scale: 0.9, opacity: 0}, {
                    scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('slide-right')) {
                gsap.fromTo(el, {x: -50, opacity: 0}, {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('slide-left')) {
                gsap.fromTo(el, {x: 50, opacity: 0}, {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            }
        });

        // Masked Headings on Scroll
        document.querySelectorAll('.masked-heading').forEach(heading => {
            const words = heading.querySelectorAll('.js-word');
            if(words.length === 0) return; // Skip if in hero (handled manually)
            
            gsap.to(words, {
                y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.1,
                scrollTrigger: { trigger: heading, start: "top 85%" }
            });
        });

        // Clip Path Reveals
        document.querySelectorAll('.clip-reveal').forEach(el => {
            el.classList.add('clip-hidden');
            gsap.to(el, {
                clipPath: "inset(0 0 0% 0)",
                duration: 1.5,
                ease: "power4.inOut",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });

        // Line Draws
        gsap.to('.gs-line-draw', {
            scaleX: 1, duration: 1.5, ease: "power3.inOut",
            scrollTrigger: { trigger: '.gs-line-draw', start: "top 85%" }
        });
        gsap.to('.gs-line-draw-v', {
            scaleY: 1, duration: 2, ease: "power3.inOut",
            scrollTrigger: { trigger: '.gs-line-draw-v', start: "top 85%" }
        });

        // Image Parallax
        gsap.utils.toArray('.img-parallax').forEach(img => {
            gsap.to(img, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: { trigger: img.parentElement, scrub: true }
            });
        });

        // Text Scramble Effect
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        document.querySelectorAll('.label-scramble').forEach(label => {
            let originalText = label.innerText;
            
            ScrollTrigger.create({
                trigger: label,
                start: "top 90%",
                onEnter: () => {
                    let iteration = 0;
                    let interval = setInterval(() => {
                        label.innerText = label.innerText
                            .split("")
                            .map((letter, index) => {
                                if(index < iteration) return originalText[index];
                                return letters[Math.floor(Math.random() * 26)];
                            })
                            .join("");
                        
                        if(iteration >= originalText.length) clearInterval(interval);
                        iteration += 1 / 3;
                    }, 30);
                }
            });
        });

        // Horizontal Scroll
        if(window.innerWidth > 768) {
            const horizScroller = document.querySelector("#horizontal-container");
            const scrollerWidth = horizScroller.scrollWidth;
            
            gsap.to(horizScroller, {
                x: () => -(scrollerWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: "#horizontal-scroller",
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + scrollerWidth
                }
            });
        }

        // Number Counters
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            ScrollTrigger.create({
                trigger: counter,
                start: "top 85%",
                onEnter: () => {
                    const target = +counter.getAttribute('data-target');
                    let count = 0;
                    const updateCount = () => {
                        const inc = target / 50; // duration basically
                        if (count < target) {
                            count += inc;
                            counter.innerText = Math.ceil(count);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                }
            });
        });

        // Three.js Hero Background (Particles + Shapes)
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Camera
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            // Renderer
            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize
            container.appendChild(renderer.domElement);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 700;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 60; // spread
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.05,
                color: '#F5F0EA',
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            // Geometric Shapes
            const shapes = [];
            const material = new THREE.MeshBasicMaterial({ 
                color: '#C9A96E', 
                wireframe: true,
                transparent: true,
                opacity: 0.15
            });

            const geometries = [
                new THREE.IcosahedronGeometry(1, 0),
                new THREE.OctahedronGeometry(1.5, 0),
                new THREE.TorusGeometry(1, 0.4, 8, 20)
            ];

            // Add shapes if desktop
            if(window.innerWidth > 768) {
                for(let i=0; i<30; i++) {
                    const geo = geometries[Math.floor(Math.random() * geometries.length)];
                    const mesh = new THREE.Mesh(geo, material);
                    
                    mesh.position.x = (Math.random() - 0.5) * 40;
                    mesh.position.y = (Math.random() - 0.5) * 40;
                    mesh.position.z = (Math.random() - 0.5) * 20 - 10;
                    
                    const scale = Math.random() * 1.5 + 0.5;
                    mesh.scale.set(scale, scale, scale);
                    
                    mesh.rotation.x = Math.random() * Math.PI;
                    mesh.rotation.y = Math.random() * Math.PI;
                    
                    shapes.push({
                        mesh: mesh,
                        rotSpeedX: (Math.random() - 0.5) * 0.004,
                        rotSpeedY: (Math.random() - 0.5) * 0.004,
                        floatSpeed: Math.random() * 0.02,
                        initialY: mesh.position.y
                    });
                    
                    scene.add(mesh);
                }
            }

            // Mouse interaction
            let targetX = 0;
            let targetY = 0;
            
            document.addEventListener('mousemove', (event) => {
                targetX = (event.clientX / window.innerWidth) * 2 - 1;
                targetY = -(event.clientY / window.innerHeight) * 2 + 1;
            });

            const clock = new THREE.Clock();

            // Animation Loop
            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                // Rotate particles slowly
                particlesMesh.rotation.y = elapsedTime * 0.02;
                particlesMesh.rotation.x = elapsedTime * 0.01;

                // Mouse parallax
                particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
                particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
                camera.position.x += (targetX * 2 - camera.position.x) * 0.02;
                camera.position.y += (targetY * 2 - camera.position.y) * 0.02;

                // Animate shapes
                shapes.forEach(shape => {
                    shape.mesh.rotation.x += shape.rotSpeedX;
                    shape.mesh.rotation.y += shape.rotSpeedY;
                    shape.mesh.position.y = shape.initialY + Math.sin(elapsedTime * shape.floatSpeed * 10) * 1;
                });

                renderer.render(scene, camera);
            };

            animate();

            // Resize
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // Initialize ThreeJS if enabled
        initThreeJS();

    
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
      

<div id="scroll-progress"></div>

<div id="cursor-dot"><span id="cursor-text"></span></div>


<div className="" id="loader">
<h1 className="font-display text-4xl tracking-widest uppercase font-semibold text-light">Landaa</h1>
</div><nav className="fixed top-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-16 flex justify-between items-center" id="navbar">
<div className="font-display text-2xl tracking-widest uppercase font-semibold cursor-interact" data-cursor-text="Home">
            Landaa
        </div>
<div className="hidden lg:flex gap-12 font-display text-sm uppercase tracking-wider font-medium">
<a className="hover:text-gold transition-colors duration-300 relative group cursor-interact" href="#">
                Immobilien
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="hover:text-gold transition-colors duration-300 relative group cursor-interact" href="#">
                Wohnprojekte
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="hover:text-gold transition-colors duration-300 relative group cursor-interact" href="#">
                Über Uns
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
<a className="hover:text-gold transition-colors duration-300 relative group cursor-interact" href="#">
                Leistungen
                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
</a>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-3 text-xs uppercase tracking-widest text-white/50">
<button className="text-white hover:text-gold transition-colors">DE</button>
<span>/</span>
<button className="hover:text-gold transition-colors">EN</button>
</div>
<button className="btn-magnetic border border-white/20 px-6 py-3 rounded-full text-sm uppercase tracking-wider font-display font-medium transition-colors cursor-interact">
                Kontakt
            </button>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden">

<div className="absolute inset-0 z-0" id="canvas-container"><canvas className="" height="1272" style={{display: 'block', width: '2100px', height: '954px'}} width="2800"></canvas></div>

<div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full mt-24">
<div className="flex items-center gap-4 mb-8 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Landaa Immobilien</span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter font-semibold">
<div className="overflow-hidden"><div className="hero-line translate-y-full">Auf der ganzen Welt</div></div>
<div className="overflow-hidden"><div className="hero-line translate-y-full">unterwegs.</div></div>
<div className="overflow-hidden"><div className="hero-line translate-y-full text-gold">In Wien zu Hause.</div></div>
</h1>
<div className="mt-12 text-lg md:text-2xl font-light text-white/60 gs-reveal fade-up flex flex-wrap gap-2 items-center">
                Ihre Experten für 
                <span className="rotating-words-container text-gold font-medium w-32">
<span className="rotating-word active">Eigentum</span>
<span className="rotating-word">Miete</span>
<span className="rotating-word">Projekte</span>
<span className="rotating-word">Investment</span>
<span className="rotating-word">Beratung</span>
</span>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 gs-reveal fade-up" style={{animationDelay: '2s'}}>
<span className="text-xs uppercase tracking-widest text-white/50 font-display">Scrollen</span>
<div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-[scrollDown_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-16 bg-dark relative z-10">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">
<div className="lg:w-2/5">
<div className="flex items-center gap-4 mb-8">
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Immobilien</span>
</div>
<h2 className="font-display text-5xl md:text-7xl tracking-tighter font-medium leading-[1.1] masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Entdecken</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Sie</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">unser</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Portfolio.
</span></span> </span></h2>
</div>
<div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative h-[60vh] md:h-[500px] rounded-sm overflow-hidden cursor-image md:mt-12 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent z-10"></div>
<img alt="Miete" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-img" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="font-display text-2xl font-medium tracking-tight">Miete</h3>
<iconify-icon className="text-3xl text-gold opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="group relative h-[60vh] md:h-[500px] rounded-sm overflow-hidden cursor-image gs-reveal blur-in" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<div className="bg-gradient-to-t from-dark/90 via-dark/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57c4803b-ee94-43bf-9f85-10775698ad8b_800w.webp)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Eigentum" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="font-display text-2xl font-medium tracking-tight">Eigentum</h3>
<iconify-icon className="text-3xl text-gold opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="group relative h-[40vh] md:h-[350px] rounded-sm overflow-hidden cursor-image md:col-span-2 gs-reveal blur-in" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent z-10"></div>
<img alt="Wohnprojekte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-img" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="font-display text-2xl font-medium tracking-tight">Gewerbe &amp; Rendite</h3>
<iconify-icon className="text-3xl text-gold opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '2089px', height: '3878px', padding: '0px 0px 2924px'}}><section className="h-screen bg-dark relative z-10 overflow-hidden flex items-center pt-24" id="horizontal-scroller" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '2088.75px', width: '2088.75px', maxHeight: '954px', height: '954px', padding: '96px 0px 0px'}}>

<div className="absolute left-6 md:left-16 top-32 z-20 w-80 mix-blend-difference text-light">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Ausgewählte Objekte</span>
</div>
<h2 className="font-display text-4xl md:text-6xl tracking-tighter font-medium leading-[1.1]">
                Handverlesene<br/>Immobilien.
            </h2>
</div>

<div className="flex gap-8 pl-[100vw] md:pl-[50vw] pr-32 h-[70vh] items-center" id="horizontal-container">

<div className="w-[85vw] md:w-[450px] h-full shrink-0 group flex flex-col gs-h-card">
<div className="img-parallax-wrap h-[65%] w-full rounded-sm overflow-hidden cursor-interact" data-cursor-text="Ansehen">
<img alt="Prop" className="img-parallax transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow">
<div>
<span className="text-sm text-white/50 mb-2 block">1010 Wien, Innere Stadt</span>
<h3 className="font-display text-xl md:text-2xl font-medium tracking-tight group-hover:text-gold transition-colors">Penthouse am Kärntner Ring</h3>
</div>
<div className="border-t border-white/10 pt-4 mt-4 flex justify-between text-sm text-white/70">
<span>4 Zimmer</span>
<span>185 m²</span>
<span className="text-gold font-medium">€ 4.250.000</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[450px] h-full shrink-0 group flex flex-col gs-h-card">
<div className="img-parallax-wrap h-[65%] w-full rounded-sm overflow-hidden cursor-interact" data-cursor-text="Ansehen">
<img alt="Prop" className="img-parallax transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow">
<div>
<span className="text-sm text-white/50 mb-2 block">1190 Wien, Döbling</span>
<h3 className="font-display text-xl md:text-2xl font-medium tracking-tight group-hover:text-gold transition-colors">Moderne Stadtvilla mit Pool</h3>
</div>
<div className="border-t border-white/10 pt-4 mt-4 flex justify-between text-sm text-white/70">
<span>6 Zimmer</span>
<span>320 m²</span>
<span className="text-gold font-medium">€ 3.800.000</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[450px] h-full shrink-0 group flex flex-col gs-h-card">
<div className="img-parallax-wrap h-[65%] w-full rounded-sm overflow-hidden cursor-interact" data-cursor-text="Ansehen">
<img alt="Prop" className="img-parallax transition-transform duration-700 group-hover:scale-105 group-hover:opacity-80" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow">
<div>
<span className="text-sm text-white/50 mb-2 block">1070 Wien, Neubau</span>
<h3 className="font-display text-xl md:text-2xl font-medium tracking-tight group-hover:text-gold transition-colors">Architekten-Loft Spittelberg</h3>
</div>
<div className="border-t border-white/10 pt-4 mt-4 flex justify-between text-sm text-white/70">
<span>3 Zimmer</span>
<span>145 m²</span>
<span className="text-gold font-medium">Miete: € 3.200</span>
</div>
</div>
</div>

<div className="w-[300px] h-full shrink-0 flex items-center justify-center">
<a className="btn-magnetic border border-white/20 rounded-full w-40 h-40 flex flex-col items-center justify-center gap-2 group cursor-interact" href="#">
<span className="font-display text-sm uppercase tracking-wider text-center">Alle<br/>Objekte</span>
<iconify-icon className="text-2xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section></div>

<section className="bg-light text-dark py-32 md:py-48 relative z-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-32">
<div className="w-full md:w-[55%] relative">
<div className="absolute -top-12 -left-12 w-32 h-32 border-t border-l border-dark/10"></div>
<div className="img-parallax-wrap h-[60vh] md:h-[80vh] w-full rounded-sm clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Team" className="img-parallax" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
<div className="w-full md:w-[45%]">
<div className="flex items-center gap-4 mb-8 gs-reveal fade-up">
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Über Uns</span>
</div>
<h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tighter font-medium leading-[1.1] mb-10 masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Mehr</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">als</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">nur</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Vermittlung.
</span></span> </span></h2>
<p className="text-lg md:text-xl leading-relaxed text-dark/70 mb-12 gs-reveal blur-in max-w-lg" style={{filter: 'blur(0px)'}}>
                    Unser eingespieltes Team von Maklerinnen steht Ihnen gerne beratend zur Seite. Wir wissen bestens Bescheid über jedes einzelne unserer Objekte und sorgen für effiziente Kommunikation und die reibungslose, transparente Abwicklung aller Formalitäten.
                </p>
<div className="gs-reveal slide-up">
<button className="btn-magnetic bg-dark text-light px-8 py-4 rounded-full text-sm uppercase tracking-wider font-display font-medium flex items-center gap-4 group cursor-interact">
                        Das Team kennenlernen
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="h-[60vh] relative z-10 flex items-center overflow-hidden">

<div className="absolute inset-0">
<img alt="Vienna Night" className="w-full h-full object-cover parallax-img-slow filter grayscale" src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-dark/90 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-16">

<div className="w-full h-[1px] bg-white/10 mb-16 origin-left gs-line-draw"></div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
<div className="gs-reveal fade-up">
<div className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-gold tracking-tighter mb-4"><span className="counter" data-target="500">10</span>+</div>
<div className="text-xs font-display uppercase tracking-widest text-white/50">Vermittelte Objekte</div>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.1s'}}>
<div className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-gold tracking-tighter mb-4"><span className="counter" data-target="15">1</span>+</div>
<div className="text-xs font-display uppercase tracking-widest text-white/50">Jahre Erfahrung</div>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.2s'}}>
<div className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-gold tracking-tighter mb-4"><span className="counter" data-target="98">2</span>%</div>
<div className="text-xs font-display uppercase tracking-widest text-white/50">Kundenzufriedenheit</div>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.3s'}}>
<div className="font-display text-6xl md:text-7xl lg:text-8xl font-medium text-gold tracking-tighter mb-4 flex items-center md:justify-start justify-center">€<span className="counter" data-target="200">4</span>M</div>
<div className="text-xs font-display uppercase tracking-widest text-white/50">Transaktionsvolumen</div>
</div>
</div>
</div>
</section>

<section className="bg-light text-dark py-32 md:py-48 relative z-10 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center mb-24">
<div className="flex items-center justify-center gap-4 mb-8 gs-reveal fade-up">
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Unsere Leistungen</span>
<span className="w-8 h-[1px] bg-gold"></span>
</div>
<h2 className="font-display text-5xl md:text-7xl tracking-tighter font-medium leading-[1.1] masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Zwei</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Wege.</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Ein</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Ziel.
</span></span> </span></h2>
</div>
<div className="max-w-[1400px] mx-auto px-6 md:px-16 relative flex flex-col md:flex-row gap-16 md:gap-0">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-dark/10 origin-top gs-line-draw-v z-0"></div>

<div className="w-full md:w-1/2 md:pr-24 relative z-10">
<h3 className="font-display text-xl uppercase tracking-widest font-medium mb-12 text-dark/40 gs-reveal fade-left">Ich möchte anbieten</h3>
<div className="space-y-16">
<div className="gs-reveal slide-right">
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">01</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">Strategische Planung</h4>
<p className="text-dark/60 leading-relaxed">Fundierte Marktanalyse und individuelle Beratung zur optimalen Positionierung Ihrer Immobilie.</p>
</div>
<div className="gs-reveal slide-right" style={{transitionDelay: '0.1s'}}>
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">02</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">Vermarktungskonzept</h4>
<p className="text-dark/60 leading-relaxed">Professionelle Aufbereitung, hochwertige Fotografie und zielgerichtete Platzierung in relevanten Kanälen.</p>
</div>
<div className="gs-reveal slide-right" style={{transitionDelay: '0.2s'}}>
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">03</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">Erfolgreicher Abschluss</h4>
<p className="text-dark/60 leading-relaxed">Souveräne Verhandlungsführung und transparente Begleitung bis zur Vertragsunterzeichnung.</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 md:pl-24 relative z-10">
<h3 className="font-display text-xl uppercase tracking-widest font-medium mb-12 text-dark/40 gs-reveal fade-right text-left md:text-right">Ich suche eine Immobilie</h3>
<div className="space-y-16 md:text-right">
<div className="gs-reveal slide-left text-left md:text-right">
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">01</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">Bedarfsanalyse</h4>
<p className="text-dark/60 leading-relaxed ml-auto max-w-sm">Detailliertes Gespräch zur Erfassung Ihrer genauen Suchkriterien und Wohnwünsche.</p>
</div>
<div className="gs-reveal slide-left text-left md:text-right" style={{transitionDelay: '0.1s'}}>
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">02</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">Aktive Suche</h4>
<p className="text-dark/60 leading-relaxed ml-auto max-w-sm">Nutzung unseres Off-Market-Netzwerks und Präsentation passgenauer, vorselektierter Objekte.</p>
</div>
<div className="gs-reveal slide-left text-left md:text-right" style={{transitionDelay: '0.2s'}}>
<div className="text-7xl font-display font-light text-gold/30 mb-4 leading-none">03</div>
<h4 className="font-display text-2xl font-medium tracking-tight mb-3">360° Begleitung</h4>
<p className="text-dark/60 leading-relaxed ml-auto max-w-sm">Von der Besichtigung über rechtliche Prüfung bis hin zur Schlüsselübergabe.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-32 relative z-10 border-t border-white/5">
<div className="max-w-[1000px] mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-6 gs-reveal fade-up">
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Immobilien Finden</span>
<span className="w-8 h-[1px] bg-gold"></span>
</div>
<h2 className="font-display text-4xl md:text-6xl tracking-tighter font-medium leading-[1.1] masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Finden</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Sie</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Ihr</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Zuhause.
</span></span> </span></h2>
</div>

<div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-2xl gs-reveal scale-reveal">

<div className="flex justify-center mb-10">
<div className="bg-dark/50 p-1 rounded-full inline-flex relative">

<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] bg-gold rounded-full transition-all duration-300 z-0"></div>
<button className="relative z-10 px-8 py-3 text-sm font-display uppercase tracking-wider text-dark font-medium transition-colors w-32 cursor-interact">Kauf</button>
<button className="relative z-10 px-8 py-3 text-sm font-display uppercase tracking-wider text-white/50 hover:text-white transition-colors w-32 cursor-interact">Miete</button>
</div>
</div>
<form className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<label className="block text-xs font-display uppercase tracking-widest text-white/40 mb-3">Objektart</label>
<div className="border-b border-white/20 pb-3 flex justify-between items-center cursor-interact group">
<span className="text-lg">Alle Objekte</span>
<iconify-icon className="text-white/50 group-hover:text-gold transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative gs-reveal blur-in" style={{transitionDelay: '0.1s', filter: 'blur(0px)'}}>
<label className="block text-xs font-display uppercase tracking-widest text-white/40 mb-3">Region</label>
<div className="border-b border-white/20 pb-3 flex justify-between items-center cursor-interact group">
<span className="text-lg">Wien &amp; Umgebung</span>
<iconify-icon className="text-white/50 group-hover:text-gold transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative gs-reveal blur-in" style={{transitionDelay: '0.2s', filter: 'blur(0px)'}}>
<div className="flex justify-between mb-3">
<label className="block text-xs font-display uppercase tracking-widest text-white/40">Preis</label>
<span className="text-xs font-display text-gold">€0 - €5M+</span>
</div>
<div className="pt-2">
<input className="w-full cursor-interact" max="100" min="0" type="range" value="50"/>
</div>
</div>

<div className="md:col-span-3 mt-6 flex justify-center gs-reveal fade-up">
<button className="btn-magnetic bg-gold text-dark px-12 py-4 rounded-full text-sm uppercase tracking-wider font-display font-medium w-full md:w-auto cursor-interact" type="button">
                            Objekte Suchen
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="bg-dark pb-32 relative z-10 px-6 md:px-16">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

<a className="group block gs-reveal blur-in cursor-interact" data-cursor-text="Details" href="#" style={{filter: 'blur(0px)'}}>
<div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<span className="absolute top-4 left-4 z-20 bg-gold text-dark text-[10px] font-display uppercase tracking-widest px-3 py-1 font-medium">NEU</span>
<img alt="Prop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2 group-hover:translate-x-1 transition-transform duration-300">
<h3 className="font-display text-xl font-medium tracking-tight group-hover:text-gold transition-colors">Villa im Grünen</h3>
<span className="text-gold font-medium">€ 2.1M</span>
</div>
<p className="text-sm text-white/50 mb-4 group-hover:translate-x-1 transition-transform duration-300 delay-75">1130 Wien, Hietzing</p>
<div className="flex gap-4 text-xs font-display uppercase tracking-widest text-white/40 border-t border-white/10 pt-4">
<span>5 Zi.</span>
<span>210 m²</span>
</div>
</a>

<a className="group block gs-reveal blur-in cursor-interact" data-cursor-text="Details" href="#" style={{transitionDelay: '0.1s', filter: 'blur(0px)'}}>
<div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66469a94-a2c0-4845-aa7d-db7aedc49ed2_1600w.jpg)] bg-cover bg-center z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Prop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start mb-2 group-hover:translate-x-1 transition-transform duration-300">
<h3 className="font-display text-xl font-medium tracking-tight group-hover:text-gold transition-colors">Design Apartment</h3>
<span className="text-gold font-medium">€ 890K</span>
</div>
<p className="text-sm text-white/50 mb-4 group-hover:translate-x-1 transition-transform duration-300 delay-75">1020 Wien, Leopoldstadt</p>
<div className="flex gap-4 text-xs font-display uppercase tracking-widest text-white/40 border-t border-white/10 pt-4">
<span>3 Zi.</span>
<span>115 m²</span>
</div>
</a>

<a className="group block gs-reveal blur-in cursor-interact" data-cursor-text="Details" href="#" style={{transitionDelay: '0.2s', filter: 'blur(0px)'}}>
<div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6461cd3d-e3ed-4049-9a2e-2c4db2054505_1600w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Prop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mb-2 group-hover:translate-x-1 transition-transform duration-300">
<h3 className="font-display text-xl font-medium tracking-tight group-hover:text-gold transition-colors">Historisches Zinshaus</h3>
<span className="text-gold font-medium">Auf Anfrage</span>
</div>
<p className="text-sm text-white/50 mb-4 group-hover:translate-x-1 transition-transform duration-300 delay-75">1080 Wien, Josefstadt</p>
<div className="flex gap-4 text-xs font-display uppercase tracking-widest text-white/40 border-t border-white/10 pt-4">
<span>Investment</span>
<span>1200 m²</span>
</div>
</a>
</div>
<div className="mt-20 flex justify-center gs-reveal fade-up">
<button className="border-b border-gold text-gold pb-1 text-sm font-display uppercase tracking-widest hover:text-white hover:border-white transition-colors cursor-interact group flex items-center gap-2">
                    Alle Immobilien
                    <iconify-icon className="text-lg group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-light text-dark py-32 md:py-48 relative z-10">
<div className="max-w-[1400px] mx-auto px-6 md:px-16">
<div className="mb-24 md:mb-32">
<div className="flex items-center gap-4 mb-8 gs-reveal fade-up">
<span className="w-8 h-[1px] bg-gold"></span>
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Wohnprojekte</span>
</div>
<h2 className="font-display text-5xl md:text-7xl tracking-tighter font-medium leading-[1.1] masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Aktuelle</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Projekte.
</span></span> </span></h2>
</div>

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-32">
<div className="w-full lg:w-3/5 order-2 lg:order-1 relative group cursor-interact" data-cursor-text="Entdecken">
<div className="img-parallax-wrap aspect-[16/10] w-full rounded-sm overflow-hidden clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="w-full lg:w-2/5 order-1 lg:order-2 gs-reveal fade-left">
<span className="text-xs font-display uppercase tracking-widest text-dark/40 mb-4 block">In Planung</span>
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">THE DANUBE</h3>
<p className="text-lg text-dark/70 mb-8 leading-relaxed">Exklusives Wohnen am Wasser. 45 Luxusapartments mit unverbaubarem Blick auf die Donau, privaten Bootsanlegeplätzen und 5-Sterne-Concierge-Service.</p>
<a className="inline-flex items-center gap-4 text-sm font-display uppercase tracking-widest font-medium border-b border-dark pb-1 hover:text-gold hover:border-gold transition-colors group" href="#">
                        Projekt entdecken
                        <iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="w-full lg:w-2/5 gs-reveal fade-right">
<span className="text-xs font-display uppercase tracking-widest text-dark/40 mb-4 block">Bauphase</span>
<h3 className="font-display text-4xl md:text-5xl font-medium tracking-tight mb-6">PALAIS RING</h3>
<p className="text-lg text-dark/70 mb-8 leading-relaxed">Revitalisierung eines historischen Palais an der Ringstraße. Symbiose aus imperialem Erbe und modernster Smart-Home-Technologie.</p>
<a className="inline-flex items-center gap-4 text-sm font-display uppercase tracking-widest font-medium border-b border-dark pb-1 hover:text-gold hover:border-gold transition-colors group" href="#">
                        Projekt entdecken
                        <iconify-icon className="text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="w-full lg:w-3/5 relative group cursor-interact" data-cursor-text="Entdecken">
<div className="img-parallax-wrap aspect-[16/10] w-full rounded-sm overflow-hidden clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-dark py-32 md:py-48 relative z-10 overflow-hidden">
<div className="max-w-[1000px] mx-auto px-6 text-center relative">

<iconify-icon className="text-[120px] md:text-[200px] text-white/[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 gs-reveal scale-reveal" icon="solar:quote-left-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="relative z-10 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<p className="font-display text-2xl md:text-4xl font-light leading-relaxed mb-12">
                    "LANDAA hat uns den gesamten Prozess so einfach gemacht. Professionell, extrem diskret und mit einem Gespür für das Besondere."
                </p>
<div className="flex flex-col items-center gap-2">
<span className="w-12 h-[1px] bg-gold mb-4"></span>
<h4 className="font-display text-lg tracking-wide font-medium">Dr. Thomas M.</h4>
<span className="text-xs font-display uppercase tracking-widest text-white/40">Eigentümer, 1010 Wien</span>
</div>
</div>

<div className="flex justify-center gap-3 mt-16">
<button className="w-2 h-2 rounded-full bg-gold transition-all cursor-interact"></button>
<button className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all cursor-interact"></button>
<button className="w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all cursor-interact"></button>
</div>
</div>
</section>

<section className="h-screen bg-dark relative z-10 flex items-center justify-center overflow-hidden border-t border-white/5">

<div className="absolute inset-0 z-0 opacity-30">
<div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gold/20 rounded-full blur-[120px] -translate-y-1/2 animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] -translate-y-1/2 animate-[pulse_10s_ease-in-out_infinite_delay-2s]"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<div className="flex items-center justify-center gap-4 mb-8 gs-reveal fade-up">
<span className="text-xs font-display uppercase tracking-[0.3em] text-gold label-scramble">Kontakt</span>
</div>
<h2 className="font-display text-5xl md:text-7xl lg:text-[6rem] tracking-tighter font-medium leading-[1.05] mb-8 masked-heading"><span className="block"> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Bereit</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">für</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Ihren</span></span></span><span className="block"><span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">nächsten</span></span> <span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word">Schritt?
</span></span> </span></h2>
<p className="text-lg md:text-xl text-white/60 mb-16 gs-reveal blur-in max-w-2xl mx-auto" style={{filter: 'blur(0px)'}}>
                Lassen Sie uns gemeinsam Ihre perfekte Immobilie finden oder den Verkauf Ihres Objekts diskret und professionell abwickeln.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 gs-reveal fade-up">
<button className="btn-magnetic bg-gold text-dark px-10 py-5 rounded-full text-sm uppercase tracking-wider font-display font-medium w-full md:w-auto cursor-interact">
                    Jetzt Kontaktieren
                </button>
<a className="btn-magnetic border border-white/20 text-white px-10 py-5 rounded-full text-sm uppercase tracking-wider font-display font-medium w-full md:w-auto hover:bg-white hover:text-dark transition-colors flex items-center justify-center gap-3 cursor-interact" href="tel:+4318909041">
<iconify-icon className="text-xl" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    +43 1 890 90 41
                </a>
</div>
</div>
</section>

<footer className="bg-darker pt-24 pb-12 px-6 md:px-16 relative z-10 border-t border-white/10">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="gs-reveal fade-up">
<div className="font-display text-3xl tracking-widest uppercase font-semibold mb-6">Landaa</div>
<p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
                        Premium Immobilienvermittlung in Wien. Diskret, professionell und mit höchstem Anspruch seit 2009.
                    </p>
</div>

<div className="gs-reveal fade-up" style={{transitionDelay: '0.1s'}}>
<h5 className="font-display text-xs uppercase tracking-widest text-gold mb-6">Navigation</h5>
<ul className="space-y-4 text-sm text-white/70">
<li><a className="hover:text-gold transition-colors inline-block relative group cursor-interact" href="#">Immobilien <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span></a></li>
<li><a className="hover:text-gold transition-colors inline-block relative group cursor-interact" href="#">Wohnprojekte <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span></a></li>
<li><a className="hover:text-gold transition-colors inline-block relative group cursor-interact" href="#">Über Uns <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span></a></li>
<li><a className="hover:text-gold transition-colors inline-block relative group cursor-interact" href="#">Leistungen <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span></a></li>
<li><a className="hover:text-gold transition-colors inline-block relative group cursor-interact" href="#">Kontakt <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span></a></li>
</ul>
</div>

<div className="gs-reveal fade-up" style={{transitionDelay: '0.2s'}}>
<h5 className="font-display text-xs uppercase tracking-widest text-gold mb-6">Kontakt</h5>
<ul className="space-y-4 text-sm text-white/70">
<li>Kärntner Ring 10/10</li>
<li>1010 Wien, Österreich</li>
<li className="pt-4"><a className="hover:text-gold transition-colors cursor-interact" href="tel:+4318909041">+43 1 890 90 41</a></li>
<li><a className="hover:text-gold transition-colors cursor-interact" href="mailto:office@landaa.at">office@landaa.at</a></li>
</ul>
</div>

<div className="gs-reveal fade-up" style={{transitionDelay: '0.3s'}}>
<h5 className="font-display text-xs uppercase tracking-widest text-gold mb-6">Newsletter</h5>
<p className="text-white/50 text-sm mb-4">Exklusive Off-Market Angebote erhalten.</p>
<form className="relative mb-8">
<input className="w-full bg-transparent border-b border-white/20 pb-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors cursor-interact" placeholder="E-Mail Adresse" type="email"/>
<button className="absolute right-0 top-0 text-white/50 hover:text-gold transition-colors cursor-interact" type="button">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-dark hover:border-gold transition-all cursor-interact" href="#"><iconify-icon icon="solar:instagram-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-dark hover:border-gold transition-all cursor-interact" href="#"><iconify-icon icon="solar:linkedin-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gold hover:text-dark hover:border-gold transition-all cursor-interact" href="#"><iconify-icon icon="solar:facebook-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-display uppercase tracking-widest text-white/30 gs-reveal fade-up">
<p>© 2026 LANDAA Immobilien GmbH</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-white transition-colors cursor-interact" href="#">Impressum</a>
<a className="hover:text-white transition-colors cursor-interact" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
