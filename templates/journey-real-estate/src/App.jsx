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
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
50: '#fafafa',
400: '#a1a1aa',
500: '#71717a',
800: '#27272a',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){
  if(!window.UnicornStudio){
    window.UnicornStudio={isInitialized:false};
    var i=document.createElement("script");
    i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js";
    i.onload=function(){
      window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=true)
    };
    (document.head || document.body).appendChild(i);
  }
}();



        document.querySelectorAll('.masked-heading').forEach(heading => {
            const html = heading.innerHTML;
            const lines = html.split('<br>');
            heading.innerHTML = lines.map(line => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = line;
                let processedLine = line;
                
                if(!line.includes('js-word')) {
                     const words = tempDiv.textContent.split(' ').map(word => {
                        if(!word.trim()) return '';
                        return `<span class="inline-block overflow-hidden align-bottom pb-1"><span class="inline-block translate-y-[110%] opacity-0 js-word">${word}</span></span>`;
                    }).join(' ');
                    processedLine = `<span class="block">${words}</span>`;
                }
                return processedLine;
            }).join('');
        });

        window.addEventListener('load', () => {
            gsap.to('#loader h1', { opacity: 0, scale: 1.05, duration: 0.8, delay: 0.3, ease: "power2.inOut" });
            gsap.to('#loader', { opacity: 0, duration: 0.8, delay: 0.8, ease: "power2.inOut", onComplete: () => {
                document.getElementById('loader').style.display = 'none';
            }});
            
            setTimeout(() => {
                gsap.to('.hero-line', { y: 0, duration: 1.2, ease: "power4.out", stagger: 0.15 });
            }, 800);
        });

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenis.on('scroll', (e) => {
            const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            document.getElementById('scroll-progress').style.width = `${progress}%`;
        });

        const cursorDot = document.getElementById('cursor-dot');
        const cursorText = document.getElementById('cursor-text');
        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const loopCursor = () => {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            cursorDot.style.left = `${cursorX}px`;
            cursorDot.style.top = `${cursorY}px`;
            requestAnimationFrame(loopCursor);
        };
        requestAnimationFrame(loopCursor);

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

        if(window.innerWidth < 768) {
            cursorDot.style.display = 'none';
            document.body.style.cursor = 'auto';
        }

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: {className: 'backdrop-blur-md bg-zinc-950/80 border-b-zinc-900', targets: '#navbar'}
        });

        const words = document.querySelectorAll('.rotating-word');
        let currentWord = 0;
        setInterval(() => {
            gsap.to(words[currentWord], { y: -10, opacity: 0, duration: 0.5 });
            words[currentWord].classList.remove('active');
            
            currentWord = (currentWord + 1) % words.length;
            
            gsap.fromTo(words[currentWord], 
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 }
            );
            words[currentWord].classList.add('active');
        }, 3000);

        const revealElements = document.querySelectorAll('.gs-reveal');
        revealElements.forEach(el => {
            if(el.classList.contains('fade-up')) {
                gsap.fromTo(el, {y: 30, opacity: 0}, {
                    y: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('blur-in')) {
                gsap.fromTo(el, {y: 20, opacity: 0, filter: "blur(8px)"}, {
                    y: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('scale-reveal')) {
                gsap.fromTo(el, {scale: 0.95, opacity: 0}, {
                    scale: 1, opacity: 1, duration: 1.2, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('slide-right')) {
                gsap.fromTo(el, {x: -30, opacity: 0}, {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            } else if(el.classList.contains('slide-left')) {
                gsap.fromTo(el, {x: 30, opacity: 0}, {
                    x: 0, opacity: 1, duration: 1, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 85%" }
                });
            }
        });

        document.querySelectorAll('.masked-heading').forEach(heading => {
            const words = heading.querySelectorAll('.js-word');
            if(words.length === 0) return;
            gsap.to(words, {
                y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.05,
                scrollTrigger: { trigger: heading, start: "top 85%" }
            });
        });

        document.querySelectorAll('.clip-reveal').forEach(el => {
            el.classList.add('clip-hidden');
            gsap.to(el, {
                clipPath: "inset(0 0 0% 0)",
                duration: 1.5,
                ease: "power3.inOut",
                scrollTrigger: { trigger: el, start: "top 85%" }
            });
        });

        gsap.to('.gs-line-draw-v', {
            scaleY: 1, duration: 1.5, ease: "power3.inOut",
            scrollTrigger: { trigger: '.gs-line-draw-v', start: "top 85%" }
        });

        gsap.utils.toArray('.img-parallax').forEach(img => {
            gsap.to(img, {
                yPercent: 10, ease: "none",
                scrollTrigger: { trigger: img.parentElement, scrub: true }
            });
        });

        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        document.querySelectorAll('.label-scramble').forEach(label => {
            let originalText = label.innerText;
            ScrollTrigger.create({
                trigger: label, start: "top 90%",
                onEnter: () => {
                    let iteration = 0;
                    let interval = setInterval(() => {
                        label.innerText = label.innerText
                            .split("")
                            .map((letter, index) => {
                                if(letter === ' ') return ' ';
                                if(index < iteration) return originalText[index];
                                return letters[Math.floor(Math.random() * 26)];
                            }).join("");
                        if(iteration >= originalText.length) clearInterval(interval);
                        iteration += 1 / 2;
                    }, 30);
                }
            });
        });

        if(window.innerWidth > 768) {
            const horizScroller = document.querySelector("#horizontal-container");
            const scrollerWidth = horizScroller.scrollWidth;
            gsap.to(horizScroller, {
                x: () => -(scrollerWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: "#horizontal-scroller",
                    pin: true, scrub: 1,
                    end: () => "+=" + scrollerWidth
                }
            });
        }

        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const particlesGeometry = new THREE.BufferGeometry();
            const particlesCount = 800;
            const posArray = new Float32Array(particlesCount * 3);

            for(let i = 0; i < particlesCount * 3; i++) {
                posArray[i] = (Math.random() - 0.5) * 60;
            }

            particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            const particlesMaterial = new THREE.PointsMaterial({
                size: 0.05,
                color: '#ffffff',
                transparent: true,
                opacity: 0.15,
                blending: THREE.AdditiveBlending
            });

            const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
            scene.add(particlesMesh);

            let targetX = 0;
            let targetY = 0;
            
            document.addEventListener('mousemove', (event) => {
                targetX = (event.clientX / window.innerWidth) * 2 - 1;
                targetY = -(event.clientY / window.innerHeight) * 2 + 1;
            });

            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);
                const elapsedTime = clock.getElapsedTime();

                particlesMesh.rotation.y = elapsedTime * 0.02;
                particlesMesh.rotation.x = elapsedTime * 0.01;

                particlesMesh.rotation.y += 0.05 * (targetX - particlesMesh.rotation.y);
                particlesMesh.rotation.x += 0.05 * (targetY - particlesMesh.rotation.x);
                camera.position.x += (targetX * 2 - camera.position.x) * 0.02;
                camera.position.y += (targetY * 2 - camera.position.y) * 0.02;

                renderer.render(scene, camera);
            };

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="qO2hJSXvjk0iEIVJ5nim" id="bg-unicorn"></div>
<style>
  #bg-unicorn {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    pointer-events: none;
  }
</style>
</div>
<div id="scroll-progress" style={{width: '0%'}}></div>
<div className="" id="cursor-dot" style={{left: '391px', top: '4px'}}><span id="cursor-text"></span></div>

<div className="fixed inset-0 bg-zinc-950 z-[9998] flex items-center justify-center" id="loader" style={{display: 'none'}}>
<h1 className="text-xl uppercase text-zinc-50 font-google-sans-flex tracking-tighter font-light">Journey</h1></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-16 flex justify-between items-center border-b border-transparent" id="navbar">
<div className="text-lg tracking-widest uppercase font-medium cursor-interact tracking-tight font-sans" data-cursor-text="Home">
            Journey
        </div>
<div className="hidden lg:flex gap-12 text-xs uppercase tracking-widest font-normal text-zinc-400">
<a className="hover:text-zinc-50 transition-colors duration-300 relative group cursor-interact font-sans" href="#">
                Properties
            </a>
<a className="hover:text-zinc-50 transition-colors duration-300 relative group cursor-interact font-sans" href="#">
                Developments
            </a>
<a className="hover:text-zinc-50 transition-colors duration-300 relative group cursor-interact font-sans" href="#">
                About
            </a>
<a className="hover:text-zinc-50 transition-colors duration-300 relative group cursor-interact font-sans" href="#">
                Services
            </a>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex gap-3 text-xs uppercase tracking-widest text-zinc-500">
<button className="text-zinc-50 transition-colors font-sans">EN</button>
<span className="font-sans">/</span>
<button className="hover:text-zinc-50 transition-colors font-sans">DE</button>
</div>
<button className="btn-magnetic border border-zinc-800 bg-zinc-950 px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-normal transition-colors cursor-interact font-sans">
                Contact
            </button>
</div>
</nav>

<section className="relative h-screen w-full flex flex-col justify-center px-6 md:px-16 overflow-hidden">
<div className="absolute inset-0 z-0" id="canvas-container"><canvas className="" height="2408" style={{display: 'block', width: '1379px', height: '1204px'}} width="2758"></canvas><canvas height="2408" style={{display: 'block', width: '1379px', height: '1204px'}} width="2758"></canvas><canvas height="2408" style={{display: 'block', width: '1379px', height: '1204px'}} width="2758"></canvas><canvas height="2408" style={{display: 'block', width: '1379px', height: '1204px'}} width="2758"></canvas><canvas height="2408" style={{display: 'block', width: '1379px', height: '1204px'}} width="2758"></canvas></div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-transparent to-zinc-950 z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full mt-24">
<div className="flex items-center gap-4 mb-8 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<span className="w-8 h-[1px] bg-zinc-500"></span>
<span className="text-xs uppercase tracking-widest text-zinc-400 label-scramble font-sans">JOURNEY REAL ESTATE</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight font-medium text-zinc-50">
<div className="overflow-hidden"><div className="hero-line translate-y-full text-zinc-500 font-google-sans-flex tracking-tighter font-light">Exceptional</div></div>
<div className="overflow-hidden"><div className="hero-line translate-y-full font-google-sans-flex tracking-tighter font-light">Properties.</div></div>
<div className="overflow-hidden"><div className="hero-line translate-y-full text-zinc-500 font-google-sans-flex tracking-tighter font-light">Curated Living.</div></div>
</h1>
<div className="mt-12 text-lg md:text-xl text-zinc-400 gs-reveal fade-up flex flex-wrap gap-2 items-center font-google-sans-flex tracking-tighter font-light">
                Your trusted partners in 
                <span className="rotating-words-container text-zinc-50 font-normal w-32">
<span className="rotating-word font-google-sans-flex tracking-tighter font-light">Sales</span>
<span className="rotating-word font-google-sans-flex tracking-tighter font-light">Rentals</span>
<span className="rotating-word font-google-sans-flex tracking-tighter font-light">Development</span>
<span className="rotating-word active font-google-sans-flex tracking-tighter font-light">Investment</span>
<span className="rotating-word font-google-sans-flex tracking-tighter font-light">Advisory</span>
</span>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 gs-reveal fade-up" style={{animationDelay: '2s'}}>
<span className="text-xs uppercase tracking-widest text-zinc-500 font-sans">Scroll</span>
<div className="w-[1px] h-12 bg-zinc-800 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/2 bg-zinc-50 animate-[scrollDown_2s_ease-in-out_infinite]"></div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-16 bg-zinc-950 relative z-10 border-t border-zinc-900">
<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8">
<div className="lg:w-2/5">
<div className="flex items-center gap-4 mb-8">
<span className="text-xs uppercase tracking-widest text-zinc-400 label-scramble font-sans">PORTFOLIO</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.1] masked-heading text-zinc-50">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">Explore</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">our</span></span>
</span>
<span className="block text-zinc-500">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">exclusive</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">listings.</span></span>
</span>
</h2>
</div>
<div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group relative h-[60vh] md:h-[500px] rounded-2xl border border-zinc-900 overflow-hidden cursor-interact md:mt-12 gs-reveal blur-in" data-cursor-text="View" style={{filter: 'blur(0px)'}}>
<div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/10 transition-colors duration-700 z-10"></div>
<img alt="Rentals" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 parallax-img grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/1b91a594-99f8-46f8-8662-86846a226792/800w.png"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="text-xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Rentals</h3>
<iconify-icon className="text-2xl text-zinc-50 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group relative h-[60vh] md:h-[500px] rounded-2xl border border-zinc-900 overflow-hidden cursor-interact gs-reveal blur-in" data-cursor-text="View" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 bg-zinc-950/40 group-hover:bg-zinc-950/10 transition-colors duration-700 z-10"></div>
<img alt="Sales" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 parallax-img grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d1d802b-a54d-4fe2-a54b-3de67b39f0d5_800w.webp"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="text-xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Sales</h3>
<iconify-icon className="text-2xl text-zinc-50 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="group relative h-[40vh] md:h-[350px] rounded-2xl border border-zinc-900 overflow-hidden cursor-interact md:col-span-2 gs-reveal blur-in" data-cursor-text="View" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 bg-zinc-950/60 group-hover:bg-zinc-950/20 transition-colors duration-700 z-10"></div>
<img alt="Commercial" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 parallax-img grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/701be6a0-d975-4bb5-a6bc-8297c3088870_1600w.webp"/>
<div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
<h3 className="text-xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Commercial &amp; Investment</h3>
<iconify-icon className="text-2xl text-zinc-50 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="relative w-full overflow-hidden">
<div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1379px', height: '3516px', padding: '0px 0px 2312px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1379px', height: '1204px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1379px', height: '1204px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1379px', height: '1204px', padding: '0px'}}><div className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: '10', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '1379px', height: '1204px', padding: '0px'}}><section className="h-screen bg-zinc-950 relative z-10 flex items-center pt-24 border-t border-zinc-900" id="horizontal-scroller" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '1379px', width: '1379px', maxHeight: '1204px', height: '1204px', padding: '96px 0px 0px'}}>
<div className="absolute left-6 md:left-16 top-32 z-20 w-80 text-zinc-50">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">FEATURED</span>
</div>
<h2 className="text-4xl md:text-5xl leading-[1.1] font-google-sans-flex tracking-tighter font-light">
                    Handpicked<br/><span className="text-zinc-500 font-google-sans-flex tracking-tighter font-light">properties.</span>
</h2>
</div>
<div className="flex gap-6 pl-[100vw] md:pl-[40vw] pr-32 h-[65vh] items-center" id="horizontal-container">

<div className="w-[85vw] md:w-[420px] h-full shrink-0 group flex flex-col p-4 rounded-3xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/30 transition-colors duration-500 gs-h-card">
<div className="img-parallax-wrap h-[60%] w-full rounded-2xl overflow-hidden cursor-interact" data-cursor-text="View">
<img alt="Prop" className="img-parallax transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d2cc9af-026b-4c08-a0b2-d7c601376d5a_800w.webp"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow px-2">
<div>
<span className="text-xs text-zinc-500 mb-2 block tracking-widest uppercase font-sans">Vienna, Inner City</span>
<h3 className="text-xl md:text-2xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Kärntner Ring Penthouse</h3>
</div>
<div className="border-t border-zinc-900 pt-4 mt-4 flex justify-between text-sm text-zinc-400 font-light">
<span className="font-sans">4 Beds</span>
<span className="font-sans">185 sqm</span>
<span className="text-zinc-50 font-medium font-sans">€ 4.25M</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[420px] h-full shrink-0 group flex flex-col p-4 rounded-3xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/30 transition-colors duration-500 gs-h-card">
<div className="img-parallax-wrap h-[60%] w-full rounded-2xl overflow-hidden cursor-interact" data-cursor-text="View">
<img alt="Prop" className="img-parallax transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f0afe4e-00e6-4fe9-9e21-950a760b51f3_800w.jpg"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow px-2">
<div>
<span className="text-xs text-zinc-500 mb-2 block tracking-widest uppercase font-sans">Vienna, Döbling</span>
<h3 className="text-xl md:text-2xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Modern City Villa</h3>
</div>
<div className="border-t border-zinc-900 pt-4 mt-4 flex justify-between text-sm text-zinc-400 font-light">
<span className="font-sans">6 Beds</span>
<span className="font-sans">320 sqm</span>
<span className="text-zinc-50 font-medium font-sans">€ 3.80M</span>
</div>
</div>
</div>

<div className="w-[85vw] md:w-[420px] h-full shrink-0 group flex flex-col p-4 rounded-3xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/30 transition-colors duration-500 gs-h-card">
<div className="img-parallax-wrap h-[60%] w-full rounded-2xl overflow-hidden cursor-interact" data-cursor-text="View">
<img alt="Prop" className="img-parallax transition-transform duration-1000 group-hover:scale-105 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fab80d-8316-45d5-b3e5-e3c5c2662383_800w.webp"/>
</div>
<div className="mt-6 flex flex-col justify-between flex-grow px-2">
<div>
<span className="text-xs text-zinc-500 mb-2 block tracking-widest uppercase font-sans">Vienna, Neubau</span>
<h3 className="text-xl md:text-2xl text-zinc-50 font-google-sans-flex tracking-tighter font-light">Architectural Loft</h3>
</div>
<div className="border-t border-zinc-900 pt-4 mt-4 flex justify-between text-sm text-zinc-400 font-light">
<span className="font-sans">3 Beds</span>
<span className="font-sans">145 sqm</span>
<span className="text-zinc-50 font-medium font-sans">Rent: € 3,200</span>
</div>
</div>
</div>
<div className="w-[300px] h-full shrink-0 flex items-center justify-center">
<a className="btn-magnetic border border-zinc-800 rounded-full w-32 h-32 flex flex-col items-center justify-center gap-2 group cursor-interact hover:bg-zinc-50 transition-colors" href="#">
<span className="text-xs uppercase tracking-widest text-center text-zinc-400 group-hover:text-zinc-950 transition-colors font-sans">View<br/>All</span>
<iconify-icon className="text-xl text-zinc-50 group-hover:text-zinc-950 group-hover:translate-x-1 transition-all" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section></div></div></div></div></div>
</div>

<section className="bg-zinc-50 text-zinc-950 py-32 md:py-48 relative z-10 border-t border-zinc-200">
<div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-16 md:gap-32">
<div className="w-full md:w-[50%] relative">
<div className="img-parallax-wrap h-[60vh] md:h-[80vh] w-full rounded-2xl overflow-hidden clip-reveal clip-hidden" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Team" className="img-parallax grayscale opacity-90 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/c0f2cda3-8ae4-46f5-ab21-578fd11909bb/1600w.jpg"/>
</div>
</div>
<div className="w-full md:w-[50%]">
<div className="flex items-center gap-4 mb-8 gs-reveal fade-up">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">ABOUT US</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.1] mb-8 masked-heading">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">More</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">than</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">just</span></span>
</span>
<span className="block text-zinc-500">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">brokerage.</span></span>
</span>
</h2>
<p className="text-lg text-zinc-600 mb-12 gs-reveal blur-in max-w-md font-light leading-relaxed tracking-tight font-sans" style={{filter: 'blur(0px)'}}>
                    Our dedicated team provides expert guidance at every step. We possess intimate knowledge of each property in our portfolio, ensuring seamless communication and a transparent process.
                </p>
<div className="gs-reveal slide-up">
<button className="rounded-full border border-zinc-300 bg-zinc-50 px-8 py-3 text-xs uppercase tracking-widest font-medium text-zinc-950 hover:bg-zinc-100 transition-colors flex items-center gap-3 cursor-interact font-sans">
                        Meet the team
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 text-zinc-50 py-32 md:py-48 relative z-10 border-t border-zinc-900">
<div className="max-w-[1200px] mx-auto px-6 md:px-16 text-center mb-24 md:mb-32">
<div className="flex items-center justify-center gap-4 mb-8 gs-reveal fade-up">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">OUR SERVICES</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.1] masked-heading">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">Two</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">paths.</span></span>
</span>
<span className="block text-zinc-500">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">One</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">standard.</span></span>
</span>
</h2>
</div>
<div className="max-w-[1200px] mx-auto px-6 md:px-16 relative flex flex-col md:flex-row gap-16 md:gap-0">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900 origin-top gs-line-draw-v z-0"></div>
<div className="w-full md:w-1/2 md:pr-24 relative z-10">
<h3 className="text-sm uppercase tracking-widest font-normal mb-16 text-zinc-500 gs-reveal fade-left border-b border-zinc-900 pb-4 inline-block font-sans">I want to sell</h3>
<div className="space-y-16">
<div className="gs-reveal slide-right group">
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">01</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">Strategic Planning</h4>
<p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base font-sans">In-depth market analysis and bespoke advisory for optimal positioning of your asset.</p>
</div>
<div className="gs-reveal slide-right group" style={{transitionDelay: '0.1s'}}>
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">02</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">Marketing Concept</h4>
<p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base font-sans">Professional preparation, high-end photography, and targeted placement across exclusive channels.</p>
</div>
<div className="gs-reveal slide-right group" style={{transitionDelay: '0.2s'}}>
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">03</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">Successful Closing</h4>
<p className="text-zinc-500 font-light leading-relaxed text-sm md:text-base font-sans">Confident negotiation and transparent guidance through to final contract signature.</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 md:pl-24 relative z-10">
<h3 className="text-sm uppercase tracking-widest font-normal mb-16 text-zinc-500 gs-reveal fade-right text-left md:text-right border-b border-zinc-900 pb-4 inline-block md:float-right font-sans">I want to buy</h3>
<div className="clear-both"></div>
<div className="space-y-16 md:text-right">
<div className="gs-reveal slide-left text-left md:text-right group">
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">01</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">Needs Analysis</h4>
<p className="text-zinc-500 font-light leading-relaxed ml-auto max-w-sm text-sm md:text-base font-sans">Detailed consultation to capture your exact search criteria and lifestyle requirements.</p>
</div>
<div className="gs-reveal slide-left text-left md:text-right group" style={{transitionDelay: '0.1s'}}>
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">02</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">Active Search</h4>
<p className="text-zinc-500 font-light leading-relaxed ml-auto max-w-sm text-sm md:text-base font-sans">Leveraging our off-market network to present perfectly matched, pre-selected properties.</p>
</div>
<div className="gs-reveal slide-left text-left md:text-right group" style={{transitionDelay: '0.2s'}}>
<div className="text-sm font-mono text-zinc-600 mb-4 transition-colors group-hover:text-zinc-50 font-sans">03</div>
<h4 className="text-2xl mb-3 text-zinc-100 font-google-sans-flex tracking-tighter font-light">360° Support</h4>
<p className="text-zinc-500 font-light leading-relaxed ml-auto max-w-sm text-sm md:text-base font-sans">From initial viewing and legal review to the final handover of keys.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 relative z-10 border-t border-zinc-900">
<div className="max-w-[1000px] mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-4 mb-6 gs-reveal fade-up">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">PROPERTY SEARCH</span>
</div>
<h2 className="text-4xl md:text-5xl leading-[1.1] text-zinc-50 font-google-sans-flex tracking-tighter font-light">
                    Find your <span className="text-zinc-500 font-google-sans-flex tracking-tighter font-light">space.</span>
</h2>
</div>
<div className="bg-zinc-900/20 border border-zinc-800/50 p-8 md:p-12 rounded-3xl gs-reveal scale-reveal">
<div className="flex justify-center mb-12">
<div className="bg-zinc-900 p-1 rounded-full inline-flex relative border border-zinc-800">
<div className="absolute left-1 top-1 bottom-1 w-[calc(50%-0.25rem)] bg-zinc-800 rounded-full transition-all duration-300 z-0 border border-zinc-700"></div>
<button className="relative z-10 px-8 py-2.5 text-xs uppercase tracking-widest text-zinc-50 font-normal transition-colors w-32 cursor-interact font-sans">Buy</button>
<button className="relative z-10 px-8 py-2.5 text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-colors w-32 cursor-interact font-sans">Rent</button>
</div>
</div>
<form className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="relative gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-sans">Property Type</label>
<div className="border-b border-zinc-800 pb-3 flex justify-between items-center cursor-interact group">
<span className="text-base text-zinc-300 group-hover:text-zinc-50 transition-colors font-sans">All Properties</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="relative gs-reveal blur-in" style={{transitionDelay: '0.1s'}}>
<label className="block text-[10px] uppercase tracking-widest text-zinc-500 mb-3 font-sans">Location</label>
<div className="border-b border-zinc-800 pb-3 flex justify-between items-center cursor-interact group">
<span className="text-base text-zinc-300 group-hover:text-zinc-50 transition-colors font-sans">Vienna &amp; Surroundings</span>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-300 transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="relative gs-reveal blur-in" style={{transitionDelay: '0.2s'}}>
<div className="flex justify-between mb-3">
<label className="block text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Price</label>
<span className="text-xs text-zinc-400 font-sans">€0 - €5M+</span>
</div>
<div className="pt-2">
<input className="w-full cursor-interact" max="100" min="0" type="range" value="50"/>
</div>
</div>
<div className="md:col-span-3 mt-8 flex justify-center gs-reveal fade-up">
<button className="btn-magnetic bg-zinc-50 text-zinc-950 px-10 py-3 rounded-full text-xs uppercase tracking-widest font-medium w-full md:w-auto cursor-interact hover:bg-zinc-200 transition-colors font-sans" type="button">
                            Search Properties
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="bg-zinc-50 text-zinc-950 py-32 md:py-48 relative z-10 border-t border-zinc-200">
<div className="max-w-[1400px] mx-auto px-6 md:px-16">
<div className="mb-24 md:mb-32">
<div className="flex items-center gap-4 mb-8 gs-reveal fade-up">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">DEVELOPMENTS</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-normal leading-[1.1] masked-heading">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">Current</span></span>
</span>
<span className="block text-zinc-400">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">projects.</span></span>
</span>
</h2>
</div>

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-32 border-b border-zinc-200 pb-32">
<div className="w-full lg:w-3/5 order-2 lg:order-1 relative group cursor-interact" data-cursor-text="Explore">
<div className="img-parallax-wrap aspect-[16/10] w-full rounded-2xl overflow-hidden clip-reveal clip-hidden bg-zinc-200" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-105 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02cd101a-ea64-461e-b11d-755119819422_1600w.webp"/>
</div>
</div>
<div className="w-full lg:w-2/5 order-1 lg:order-2 gs-reveal fade-left">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6 block border border-zinc-300 rounded-full px-3 py-1 inline-block font-sans">Planning</span>
<h3 className="text-3xl md:text-4xl mb-6 text-zinc-900 font-google-sans-flex tracking-tighter font-light">The Danube</h3>
<p className="text-base text-zinc-600 mb-8 font-light leading-relaxed font-sans">Exclusive waterfront living. 45 luxury apartments with unobstructed views of the Danube, private moorings, and 5-star concierge service.</p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-zinc-900 hover:text-zinc-500 transition-colors group font-sans" href="#">
                        Discover Project
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
<div className="w-full lg:w-2/5 gs-reveal fade-right">
<span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-6 block border border-zinc-300 rounded-full px-3 py-1 inline-block font-sans">Construction</span>
<h3 className="text-3xl md:text-4xl mb-6 text-zinc-900 font-google-sans-flex tracking-tighter font-light">Palais Ring</h3>
<p className="text-base text-zinc-600 mb-8 font-light leading-relaxed font-sans">Revitalization of a historic palace on the Ringstraße. A perfect synthesis of imperial heritage and state-of-the-art smart home technology.</p>
<a className="inline-flex items-center gap-3 text-xs uppercase tracking-widest font-medium text-zinc-900 hover:text-zinc-500 transition-colors group font-sans" href="#">
                        Discover Project
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="w-full lg:w-3/5 relative group cursor-interact" data-cursor-text="Explore">
<div className="img-parallax-wrap aspect-[16/10] w-full rounded-2xl overflow-hidden clip-reveal clip-hidden bg-zinc-200" style={{clipPath: 'inset(0px 0px 0%)'}}>
<img alt="Project" className="img-parallax transition-transform duration-[1.5s] group-hover:scale-105 grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7094b64-53eb-4296-9de0-8b45cc99b04d_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-32 md:py-48 relative z-10 overflow-hidden border-t border-zinc-900">
<div className="max-w-[800px] mx-auto px-6 text-center relative">
<iconify-icon className="text-[120px] md:text-[200px] text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 gs-reveal scale-reveal" icon="solar:quote-left-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="relative z-10 gs-reveal blur-in" style={{filter: 'blur(0px)'}}>
<p className="text-xl md:text-3xl leading-relaxed text-zinc-300 mb-12 font-google-sans-flex tracking-tighter font-light">
                    "Journey made the entire process remarkably effortless. Highly professional, extremely discreet, and with a true eye for the exceptional."
                </p>
<div className="flex flex-col items-center gap-2">
<span className="w-8 h-[1px] bg-zinc-800 mb-4"></span>
<h4 className="text-sm font-medium tracking-tight text-zinc-100 font-sans">Dr. Thomas M.</h4>
<span className="text-[10px] uppercase tracking-widest text-zinc-500 font-sans">Property Owner, Vienna</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-zinc-950 relative z-10 flex items-center justify-center overflow-hidden border-t border-zinc-900">
<div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
<div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-zinc-800 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
<div className="flex items-center justify-center gap-4 mb-8 gs-reveal fade-up">
<span className="text-xs uppercase tracking-widest text-zinc-500 label-scramble font-sans">CONTACT</span>
</div>
<h2 className="text-4xl md:text-6xl tracking-tight font-normal leading-[1.1] mb-8 masked-heading">
<span className="block">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">Ready</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">for</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">your</span></span>
</span>
<span className="block text-zinc-500">
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">next</span></span>
<span className="inline-block overflow-hidden align-bottom pb-1"><span className="inline-block translate-y-[110%] opacity-0 js-word font-google-sans-flex tracking-tighter font-light">step?</span></span>
</span>
</h2>
<p className="text-base text-zinc-400 font-light mb-12 gs-reveal blur-in max-w-xl mx-auto font-sans" style={{filter: 'blur(0px)'}}>
                Let us find your perfect property together or handle the sale of your asset with utmost discretion and professionalism.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 gs-reveal fade-up">
<button className="btn-magnetic bg-zinc-50 text-zinc-950 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium w-full sm:w-auto cursor-interact hover:bg-zinc-200 transition-colors font-sans">
                    Get in Touch
                </button>
<a className="btn-magnetic border border-zinc-800 text-zinc-300 px-8 py-3 rounded-full text-xs uppercase tracking-widest font-medium w-full sm:w-auto hover:bg-zinc-900 transition-colors flex items-center justify-center gap-3 cursor-interact font-sans" href="tel:+4318909041">
<iconify-icon className="text-base" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    +43 1 890 90 41
                </a>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-16 relative z-10 border-t border-zinc-900">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
<div className="gs-reveal fade-up">
<div className="text-xl uppercase mb-6 text-zinc-50 font-google-sans-flex tracking-tighter font-light">Journey</div>
<p className="text-zinc-500 text-xs leading-relaxed max-w-xs mb-8 font-light font-sans">
                        Premium real estate brokerage in Vienna. Discreet, professional, and meeting the highest standards since 2009.
                    </p>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.1s'}}>
<h5 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-sans">Navigation</h5>
<ul className="space-y-4 text-xs text-zinc-400 font-light">
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="#">Properties</a></li>
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="#">Developments</a></li>
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="#">About</a></li>
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="#">Services</a></li>
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="#">Contact</a></li>
</ul>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.2s'}}>
<h5 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-sans">Contact</h5>
<ul className="space-y-4 text-xs text-zinc-400 font-light">
<li className="font-sans">Kärntner Ring 10/10</li>
<li className="font-sans">1010 Vienna, Austria</li>
<li className="pt-4"><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="tel:+4318909041">+43 1 890 90 41</a></li>
<li><a className="hover:text-zinc-50 transition-colors cursor-interact font-sans" href="mailto:office@journey.at">office@journey.at</a></li>
</ul>
</div>
<div className="gs-reveal fade-up" style={{transitionDelay: '0.3s'}}>
<h5 className="text-[10px] uppercase tracking-widest text-zinc-600 mb-6 font-sans">Newsletter</h5>
<p className="text-zinc-500 text-xs mb-4 font-light font-sans">Receive exclusive off-market offers.</p>
<form className="relative mb-8">
<input className="w-full bg-transparent border-b border-zinc-800 pb-3 text-xs text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors cursor-interact font-light" placeholder="Email Address" type="email"/>
<button className="absolute right-0 top-0 text-zinc-600 hover:text-zinc-50 transition-colors cursor-interact" type="button">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-all cursor-interact" href="#"><iconify-icon className="text-sm" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 hover:text-zinc-950 transition-all cursor-interact" href="#"><iconify-icon className="text-sm" icon="solar:linkedin-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 text-[10px] uppercase tracking-widest text-zinc-600 gs-reveal fade-up">
<p className="font-sans">© 2026 JOURNEY Real Estate</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors cursor-interact font-sans" href="#">Imprint</a>
<a className="hover:text-zinc-400 transition-colors cursor-interact font-sans" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
