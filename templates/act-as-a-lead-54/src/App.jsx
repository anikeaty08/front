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
colors: {
midnight: '#080808',
offwhite: '#EAEAEA',
neonlime: '#ccff00',
indigoaccent: '#6366f1',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // --- 1. PRELOADER ---
        const startPreloader = () => {
            let counter = { value: 0 };
            const counterElement = document.getElementById('counter');
            
            const tl = gsap.timeline();

            tl.to(counter, {
                value: 100,
                duration: 1.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    counterElement.textContent = Math.round(counter.value) + "%";
                }
            })
            .to('#counter', { opacity: 0, duration: 0.2 })
            .to('#preloader', {
                y: '-100%',
                duration: 1.2,
                ease: "power4.inOut"
            })
            .from('.reveal-text', {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.5")
            .to('.reveal-fade', {
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            }, "-=0.8");
        };

        // --- 2. CUSTOM CURSOR ---
        const initCursor = () => {
            const dot = document.querySelector('.cursor-dot');
            const outline = document.querySelector('.cursor-outline');
            
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Simple follow for dot
                dot.style.left = `${posX}px`;
                dot.style.top = `${posY}px`;

                // Smooth follow for outline via GSAP
                gsap.to(outline, {
                    x: posX,
                    y: posY,
                    duration: 0.15,
                    ease: "power2.out"
                });
            });

            // Hover interactions
            const hoverables = document.querySelectorAll('a, button, .cursor-hover');
            hoverables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    gsap.to(outline, { scale: 2.5, backgroundColor: 'rgba(255,255,255,0.1)', borderWidth: '0px' });
                });
                el.addEventListener('mouseleave', () => {
                    gsap.to(outline, { scale: 1, backgroundColor: 'transparent', borderWidth: '1px' });
                });
            });
        };

        // --- 3. LENIS SMOOTH SCROLL ---
        const initSmoothScroll = () => {
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
            
            // Integrate GSAP ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update);
            gsap.ticker.add((time)=>{
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        };

        // --- 4. THREE.JS GLOBE (Simplified Point Cloud) ---
        const initGlobe = () => {
            const container = document.getElementById('globe-container');
            if(!container) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            container.appendChild(renderer.domElement);

            // Create geometry
            const geometry = new THREE.IcosahedronGeometry(2, 4);
            const material = new THREE.PointsMaterial({
                color: 0x666666,
                size: 0.03,
            });
            const sphere = new THREE.Points(geometry, material);
            scene.add(sphere);

            // Add accent dots
            const accentGeo = new THREE.BufferGeometry();
            const accentPos = new Float32Array([1.5, 0.5, 1.2]); // San Francisco approx pos relative to sphere
            accentGeo.setAttribute('position', new THREE.BufferAttribute(accentPos, 3));
            const accentMat = new THREE.PointsMaterial({ color: 0xccff00, size: 0.15 });
            const accent = new THREE.Points(accentGeo, accentMat);
            sphere.add(accent);

            camera.position.z = 4.5;

            // Animation
            const animate = () => {
                requestAnimationFrame(animate);
                sphere.rotation.y += 0.002;
                sphere.rotation.x += 0.0005;
                renderer.render(scene, camera);
            };
            animate();

            // Resize
            window.addEventListener('resize', () => {
                const width = container.offsetWidth;
                const height = container.offsetHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });
        };

        // --- 5. SCROLL ANIMATIONS (Horizontal & Bento) ---
        const initScrollAnimations = () => {
            gsap.registerPlugin(ScrollTrigger);

            // Bento Grid Stagger
            gsap.from(".bento-card", {
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 80%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            });

            // Horizontal Scroll Section
            // Note: On mobile, we might keep it vertical or adjust, but for this demo adhering to request
            if(window.innerWidth > 768) {
                let sections = gsap.utils.toArray(".project-card");
                let scrollWidth = document.getElementById('horizontal-wrapper').scrollWidth;
                
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#work",
                        pin: true,
                        scrub: 1,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + document.querySelector("#horizontal-wrapper").offsetWidth
                    }
                });
            }
        };

        // --- 6. MAGNETIC BUTTON ---
        const initMagnetic = () => {
            const btn = document.querySelector('.magnetic-btn');
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                gsap.to(btn, {
                    x: x * 0.3, // Magnetic strength
                    y: y * 0.5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            btn.addEventListener('mouseleave', () => {
                gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
            });
        };

        // --- 7. TIME ---
        const updateTime = () => {
            const timeDisplay = document.getElementById('local-time');
            const now = new Date();
            timeDisplay.textContent = now.toUTCString().slice(17, 22) + " UTC";
        };
        setInterval(updateTime, 60000);
        updateTime();

        // --- 8. HERO DISTORTION (Simulated Parallax) ---
        const initHeroParallax = () => {
            const hero = document.getElementById('hero');
            const bg = document.getElementById('hero-bg');
            
            hero.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20; // range -10 to 10
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                gsap.to(bg, {
                    scale: 1.15, // Keep it scaled up to avoid edges
                    x: -x,
                    y: -y,
                    rotationY: x * 0.5,
                    rotationX: -y * 0.5,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        };

        // Initialize All
        window.onload = () => {
            lucide.createIcons();
            startPreloader();
            initCursor();
            initSmoothScroll();
            initGlobe();
            initScrollAnimations();
            initMagnetic();
            initHeroParallax();
        };

    
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

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="loader-screen" id="preloader">
<div className="text-9xl font-serif font-medium tracking-tighter text-offwhite" id="counter">0%</div>
</div>

<nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-center mix-diff">
<a className="text-sm font-medium tracking-widest hover:text-neonlime transition-colors duration-300" href="#">JOHN DOE©</a>
<div className="hidden md:flex gap-8">
<a className="text-xs uppercase tracking-widest hover:line-through decoration-neonlime cursor-hover" href="#about">Profile</a>
<a className="text-xs uppercase tracking-widest hover:line-through decoration-neonlime cursor-hover" href="#work">Selected Works</a>
<a className="text-xs uppercase tracking-widest hover:line-through decoration-neonlime cursor-hover" href="#contact">Contact</a>
</div>
<button className="md:hidden">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>

<main className="relative w-full" id="smooth-wrapper">

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="hero">

<div className="absolute inset-0 z-0 opacity-60 scale-110" id="hero-bg">
<img alt="Abstract Texture" className="w-full h-full object-cover filter brightness-50 contrast-125" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative z-10 text-center mix-diff flex flex-col items-center">
<h1 className="text-8xl md:text-[12rem] leading-[0.85] font-serif font-normal tracking-tighter cursor-hover">
<span className="block overflow-hidden"><span className="reveal-text inline-block origin-bottom">CREATIVE</span></span>
<span className="block overflow-hidden italic"><span className="reveal-text inline-block origin-bottom text-stroke">DEVELOPER</span></span>
</h1>
<p className="mt-8 text-sm md:text-base uppercase tracking-widest font-light opacity-0 reveal-fade">
                    Crafting Digital Experiences
                </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 reveal-fade">
<div className="w-[1px] h-12 bg-offwhite/30 overflow-hidden">
<div className="w-full h-full bg-offwhite animate-pulses"></div>
</div>
</div>
</section>

<section className="relative py-32 px-4 md:px-12 bg-midnight z-20" id="about">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-xs font-mono text-neonlime mb-2">[ 01. PROFILE ]</h2>
<h3 className="text-4xl md:text-6xl font-serif tracking-tight">The Architect's<br/><span className="italic text-gray-500">Blueprint</span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[80vh]">

<div className="md:col-span-2 row-span-1 border border-white/10 p-8 rounded-none bg-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden bento-card">
<div className="absolute top-0 right-0 p-4 opacity-50"><i className="w-6 h-6" data-lucide="fingerprint"></i></div>
<h4 className="text-2xl font-serif mb-4 group-hover:text-neonlime transition-colors">Who am I?</h4>
<p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                            A multidisciplinary creative developer obsessed with the intersection of design and code. I build immersive web experiences that feel organic, not digital. Currently pushing pixels and vertices to their limits.
                        </p>
</div>

<div className="col-span-1 row-span-1 border border-white/10 p-8 bg-white/5 flex flex-col justify-between hover:border-white/20 transition-all duration-500 bento-card relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigoaccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<h4 className="text-xs uppercase tracking-widest mb-4 z-10">Stack</h4>
<div className="flex flex-wrap gap-4 z-10">
<div className="p-3 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-hover"><i className="w-6 h-6" data-lucide="box"></i></div> 
<div className="p-3 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-hover"><i className="w-6 h-6" data-lucide="wind"></i></div> 
<div className="p-3 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-hover"><i className="w-6 h-6" data-lucide="code-2"></i></div> 
<div className="p-3 bg-white/5 rounded border border-white/5 hover:bg-white/10 transition-colors cursor-hover"><i className="w-6 h-6" data-lucide="layers"></i></div> 
</div>
</div>

<div className="col-span-1 row-span-1 border border-white/10 p-6 bg-[#1DB954]/5 flex items-center gap-4 hover:border-[#1DB954]/30 transition-all duration-500 bento-card">
<div className="w-16 h-16 bg-white/10 flex items-center justify-center">
<i className="w-8 h-8 text-[#1DB954] animate-pulse" data-lucide="music-2"></i>
</div>
<div>
<div className="flex gap-1 mb-1 items-end h-3">
<span className="w-1 bg-[#1DB954] h-full animate-[bounce_1s_infinite]"></span>
<span className="w-1 bg-[#1DB954] h-2/3 animate-[bounce_1.2s_infinite]"></span>
<span className="w-1 bg-[#1DB954] h-full animate-[bounce_0.8s_infinite]"></span>
</div>
<p className="text-xs text-gray-400 uppercase tracking-widest">Now Listening</p>
<p className="text-sm font-medium truncate w-32">Midnight City - M83</p>
</div>
</div>

<div className="md:col-span-2 row-span-1 border border-white/10 relative overflow-hidden bg-black bento-card">
<div className="absolute top-6 left-6 z-10">
<h4 className="text-xs uppercase tracking-widest">Based In</h4>
<p className="text-xl font-serif text-white">San Francisco, CA</p>
<p className="text-xs text-gray-500 font-mono mt-1">37.7749° N, 122.4194° W</p>
</div>

<div className="absolute inset-0 cursor-move" id="globe-container"></div>
</div>
</div>
</div>
</section>

<section className="bg-midnight relative z-20 overflow-hidden" id="work">
<div className="py-24 px-4 md:px-12">
<h2 className="text-xs font-mono text-neonlime mb-2">[ 02. SELECTED WORKS ]</h2>
</div>

<div className="flex flex-nowrap h-[80vh] items-center pl-4 md:pl-12" id="horizontal-wrapper">

<div className="project-card w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 mr-12 md:mr-24 relative group cursor-hover">
<div className="w-full h-full overflow-hidden bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
<img alt="Project 1" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-12 left-0 w-full flex justify-between items-end mix-blend-difference">
<h3 className="text-5xl md:text-7xl font-serif text-offwhite">Lumina</h3>
<span className="text-xs font-mono">[ 2023 ]</span>
</div>
</div>

<div className="project-card w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 mr-12 md:mr-24 relative group cursor-hover">
<div className="w-full h-full overflow-hidden bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
<img alt="Project 2" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-12 left-0 w-full flex justify-between items-end mix-blend-difference">
<h3 className="text-5xl md:text-7xl font-serif text-offwhite">Vortex</h3>
<span className="text-xs font-mono">[ 2024 ]</span>
</div>
</div>

<div className="project-card w-[85vw] md:w-[60vw] h-[60vh] md:h-[70vh] flex-shrink-0 mr-12 md:mr-24 relative group cursor-hover">
<div className="w-full h-full overflow-hidden bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
<img alt="Project 3" className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-12 left-0 w-full flex justify-between items-end mix-blend-difference">
<h3 className="text-5xl md:text-7xl font-serif text-offwhite">Aether</h3>
<span className="text-xs font-mono">[ 2024 ]</span>
</div>
</div>
</div>
</section>

<footer className="min-h-screen flex flex-col justify-between py-24 px-4 md:px-12 bg-midnight relative z-20" id="contact">
<div>
<h2 className="text-xs font-mono text-neonlime mb-2">[ 03. INITIATE ]</h2>
</div>
<div className="flex flex-col items-center justify-center flex-grow">
<a className="group relative cursor-hover magnetic-btn" href="mailto:hello@creative.dev">
<h2 className="text-[12vw] leading-none font-serif tracking-tighter text-offwhite group-hover:text-transparent group-hover:text-stroke transition-all duration-300">
                        LET'S TALK
                    </h2>
<div className="h-[1px] w-0 bg-neonlime group-hover:w-full transition-all duration-500 ease-out"></div>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
<div className="flex flex-col gap-2">
<span className="text-xs text-gray-500 uppercase">Socials</span>
<a className="hover:text-neonlime transition-colors" href="#">Twitter / X</a>
<a className="hover:text-neonlime transition-colors" href="#">LinkedIn</a>
<a className="hover:text-neonlime transition-colors" href="#">Instagram</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-gray-500 uppercase">Time</span>
<span id="local-time">00:00 AM UTC</span>
</div>
<div className="col-span-2 md:col-span-2 text-right flex flex-col justify-between items-end">
<button className="group flex items-center gap-2 text-sm hover:text-neonlime transition-colors cursor-hover" onclick="window.scrollTo({top:0, behavior:'smooth'})">
                        BACK TO TOP <i className="w-4 h-4 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up"></i>
</button>
<p className="text-xs text-gray-600 mt-4">© 2024 John Doe. Built with Passion.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
