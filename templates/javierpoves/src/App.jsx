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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Page Transition Animation Logic
        window.transitionPage = function(e, targetUrl) {
            e.preventDefault();
            
            // Prevent further clicks during transition
            document.body.style.pointerEvents = 'none';
            
            // Swift transition out
            if (typeof gsap !== 'undefined') {
                gsap.to(['.page-content', '#hero'], {
                    opacity: 0,
                    y: 15,
                    duration: 0.4,
                    stagger: 0.05,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        window.location.href = targetUrl;
                    }
                });
            } else {
                // Fallback if GSAP is somehow missing
                document.body.style.opacity = '0';
                document.body.style.transition = 'opacity 0.4s ease';
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400);
            }
        };

        function initAnimationsAndLogic() {
            // ----------------------------------------------------
            // CUSTOM CURSOR
            // ----------------------------------------------------
            const cursorDot = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-outline');

            if (cursorDot && cursorOutline && window.matchMedia("(pointer: fine)").matches) {
                window.addEventListener('mousemove', (e) => {
                    const posX = e.clientX;
                    const posY = e.clientY;

                    cursorDot.style.left = `${posX}px`;
                    cursorDot.style.top = `${posY}px`;

                    cursorOutline.animate({
                        left: `${posX}px`,
                        top: `${posY}px`
                    }, { duration: 500, fill: "forwards" });
                });

                const interactables = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .cursor-pointer, .custom-option, .select-menu div');
                
                interactables.forEach(el => {
                    el.addEventListener('mouseenter', () => {
                        cursorOutline.classList.add('hovered');
                    });
                    el.addEventListener('mouseleave', () => {
                        cursorOutline.classList.remove('hovered');
                    });
                });
            }

            // ----------------------------------------------------
            // 1. GSAP TEXT REVEAL (Idempotent)
            // ----------------------------------------------------
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                gsap.registerPlugin(ScrollTrigger);
                
                const revealElements = document.querySelectorAll('.reveal-text');
                revealElements.forEach(el => {
                    // Safe original text storage to survive hot-reloads
                    const text = el.getAttribute('data-text') || el.textContent.trim();
                    if (!el.hasAttribute('data-text')) el.setAttribute('data-text', text);
                    
                    // Kill old scrollTriggers specifically for this element
                    ScrollTrigger.getAll().forEach(st => {
                        if (st.trigger === el) st.kill();
                    });
                    
                    // Rebuild HTML purely
                    el.innerHTML = ''; 
                    text.split(' ').forEach((word, index, array) => {
                        const wrapper = document.createElement('span');
                        wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1';
                        const inner = document.createElement('span');
                        inner.className = 'inline-block translate-y-[110%] reveal-word';
                        inner.textContent = word;
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                        
                        if (index < array.length - 1) {
                            el.appendChild(document.createTextNode(' '));
                        }
                    });

                    // Trigger animation
                    gsap.to(el.querySelectorAll('.reveal-word'), {
                        y: '0%',
                        duration: 1,
                        stagger: 0.03,
                        ease: 'power4.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 90%',
                            toggleActions: 'play none none none'
                        }
                    });
                });
            }

            // ----------------------------------------------------
            // 2. THREE.JS GALAXY (Idempotent)
            // ----------------------------------------------------
            if (typeof THREE !== 'undefined') {
                const container = document.getElementById('galaxy-container');
                if (container) {
                    // CRITICAL: Clean up existing canvases and loops on hot-reload
                    container.innerHTML = '';
                    if (window.galaxyRAF) cancelAnimationFrame(window.galaxyRAF);

                    const scene = new THREE.Scene();

                    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 100);
                    camera.position.x = 0;
                    camera.position.y = 3.5;
                    camera.position.z = 4.5;
                    camera.lookAt(new THREE.Vector3(0, 0, 0));

                    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                    renderer.setSize(container.clientWidth, container.clientHeight);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    container.appendChild(renderer.domElement);

                    const parameters = {
                        count: 10000,
                        size: 0.025,
                        radius: 8.5,
                        branches: 5,
                        spin: 1.2,
                        randomness: 0.4,
                        randomnessPower: 3,
                        insideColor: '#3b0764',
                        outsideColor: '#a855f7'
                    };

                    let geometry = null;
                    let material = null;
                    let points = null;

                    const updateGalaxyPosition = () => {
                        if (points) {
                            points.position.x = window.innerWidth >= 1024 ? 3.5 : 0;
                        }
                    };

                    const generateGalaxy = () => {
                        geometry = new THREE.BufferGeometry();
                        const positions = new Float32Array(parameters.count * 3);
                        const colors = new Float32Array(parameters.count * 3);

                        const colorInside = new THREE.Color(parameters.insideColor);
                        const colorOutside = new THREE.Color(parameters.outsideColor);

                        for(let i = 0; i < parameters.count; i++) {
                            const i3 = i * 3;
                            const radius = Math.random() * parameters.radius;
                            const spinAngle = radius * parameters.spin;
                            const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

                            const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
                            const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
                            const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

                            positions[i3    ] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                            positions[i3 + 1] = randomY;
                            positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                            const mixedColor = colorInside.clone();
                            mixedColor.lerp(colorOutside, radius / parameters.radius);

                            colors[i3    ] = mixedColor.r;
                            colors[i3 + 1] = mixedColor.g;
                            colors[i3 + 2] = mixedColor.b;
                        }

                        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

                        const canvas = document.createElement('canvas');
                        canvas.width = 16;
                        canvas.height = 16;
                        const context = canvas.getContext('2d');
                        context.beginPath();
                        context.arc(8, 8, 8, 0, Math.PI * 2);
                        context.fillStyle = 'white';
                        context.fill();
                        const texture = new THREE.CanvasTexture(canvas);

                        material = new THREE.PointsMaterial({
                            size: parameters.size,
                            sizeAttenuation: true,
                            depthWrite: false,
                            blending: THREE.NormalBlending,
                            vertexColors: true,
                            transparent: true,
                            map: texture,
                            opacity: 0.85
                        });

                        points = new THREE.Points(geometry, material);
                        points.rotation.x = 0.2; 
                        
                        updateGalaxyPosition();
                        scene.add(points);
                    };

                    generateGalaxy();

                    let mouseX = 0;
                    let mouseY = 0;
                    let targetX = 0;
                    let targetY = 0;

                    const handleMouseMove = (event) => {
                        const windowHalfX = window.innerWidth / 2;
                        const windowHalfY = window.innerHeight / 2;
                        mouseX = (event.clientX - windowHalfX);
                        mouseY = (event.clientY - windowHalfY);
                    };
                    
                    if (window.galaxyMouseMove) document.removeEventListener('mousemove', window.galaxyMouseMove);
                    window.galaxyMouseMove = handleMouseMove;
                    document.addEventListener('mousemove', handleMouseMove);

                    const handleResize = () => {
                        if (container.clientHeight > 0) {
                            camera.aspect = container.clientWidth / container.clientHeight;
                            camera.updateProjectionMatrix();
                            renderer.setSize(container.clientWidth, container.clientHeight);
                            updateGalaxyPosition();
                        }
                    };
                    
                    if (window.galaxyResize) window.removeEventListener('resize', window.galaxyResize);
                    window.galaxyResize = handleResize;
                    window.addEventListener('resize', handleResize);

                    const clock = new THREE.Clock();
                    const tick = () => {
                        const elapsedTime = clock.getElapsedTime();
                        
                        if(points) {
                            points.rotation.y = elapsedTime * 0.08;
                            
                            targetX = mouseX * 0.0005;
                            targetY = mouseY * 0.0005;
                            
                            points.rotation.z += 0.05 * (targetX - points.rotation.z);
                            points.rotation.x += 0.05 * (targetY - (points.rotation.x - 0.2)); 
                        }
                        
                        renderer.render(scene, camera);
                        window.galaxyRAF = window.requestAnimationFrame(tick);
                    };
                    tick();
                }
            }

            // ----------------------------------------------------
            // 3. FORM & SELECT LOGIC
            // ----------------------------------------------------
            const selectWrapper = document.getElementById('customSelectWrapper');
            const selectDisplay = document.getElementById('customSelectDisplay');
            const selectValue = document.getElementById('customSelectValue');
            const selectOptionsList = document.getElementById('customSelectOptions');
            const nativeSelect = document.getElementById('fservice');
            const options = document.querySelectorAll('.custom-option');

            if (selectDisplay && !selectDisplay.dataset.initialized) {
                selectDisplay.dataset.initialized = "true";
                
                selectDisplay.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectOptionsList.classList.toggle('open');
                    selectDisplay.classList.toggle('border-purple-500');
                });

                options.forEach(option => {
                    option.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const val = option.getAttribute('data-value');
                        
                        selectValue.textContent = val;
                        selectValue.classList.remove('text-zinc-700');
                        selectValue.classList.add('text-black');
                        
                        nativeSelect.value = val;
                        
                        selectOptionsList.classList.remove('open');
                        selectDisplay.classList.remove('border-purple-500');
                        selectDisplay.classList.remove('border-red-500');
                    });
                });

                document.addEventListener('click', (e) => {
                    if (selectWrapper && !selectWrapper.contains(e.target)) {
                        selectOptionsList.classList.remove('open');
                        selectDisplay.classList.remove('border-purple-500');
                    }
                });
            }

            const form = document.getElementById('contactForm');
            if (form && !form.dataset.initialized) {
                form.dataset.initialized = "true";
                const btn = document.getElementById('fsubmitBtn');
                const success = document.getElementById('formSuccess');

                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(el => {
                    el.addEventListener('blur', () => {
                        if(!el.value.trim()) el.classList.add('border-red-500', 'border-opacity-50');
                        else el.classList.remove('border-red-500', 'border-opacity-50');
                    });
                    el.addEventListener('input', () => {
                        if (el.value.trim()) el.classList.remove('border-red-500', 'border-opacity-50');
                    });
                });

                form.addEventListener('submit', async function (e) {
                    e.preventDefault();

                    let valid = true;
                    
                    inputs.forEach(el => {
                        if (!el.value.trim()) { 
                            el.classList.add('border-red-500', 'border-opacity-50'); 
                            valid = false; 
                        }
                    });

                    if(!nativeSelect.value) {
                        selectDisplay.classList.add('border-red-500');
                        valid = false;
                    }

                    if (!valid) return;

                    btn.innerHTML = 'Sending...';
                    btn.disabled = true;

                    const payload = {
                        name: form.name.value.trim(),
                        email: form.email.value.trim(),
                        service: form.service.value,
                        message: form.message.value.trim(),
                    };

                    const ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

                    try {
                        const res = await fetch(ENDPOINT, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                            body: JSON.stringify(payload),
                        });

                        if (res.ok) {
                            form.style.display = 'none';
                            success.classList.remove('hidden');
                            success.classList.add('block');
                        } else {
                            throw new Error('non-ok response');
                        }
                    } catch (_) {
                        const sub  = encodeURIComponent('Enquiry — ' + payload.service);
                        const body = encodeURIComponent(
                            'Name: ' + payload.name + '\n' +
                            'Email: ' + payload.email + '\n' +
                            'Service: ' + payload.service + '\n\n' +
                            payload.message
                        );
                        window.location.href = 'mailto:your@email.com?subject=' + sub + '&body=' + body;
                        form.style.display = 'none';
                        success.classList.remove('hidden');
                        success.classList.add('block');
                    }
                });
            }
        }

        // Run execution safely based on readiness
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initAnimationsAndLogic);
        } else {
            // Already loaded (like in React hot reloads, Webflow, etc.)
            initAnimationsAndLogic();
        }
    
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
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="fixed inset-0 pointer-events-none z-0 w-full h-full bg-[linear-gradient(to_right,rgba(161,161,170,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(161,161,170,0.4)_1px,transparent_1px)] bg-[size:192px_192px]" style={{WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 85%)', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 85%)'}}>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-zinc-50/80 border-zinc-200">
<div className="lg:px-8 flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="hover:opacity-70 transition-opacity text-lg text-zinc-900 tracking-tight" href="#">Javier Poves - Venture Builder &amp; Innovator</a>
<div className="flex items-center gap-4 md:gap-8">

<ul className="hidden md:flex gap-8 list-none gap-x-8 gap-y-8 items-center">
<li className=""><a className="uppercase transition-colors hover:text-zinc-900 text-xs text-zinc-500 tracking-widest font-sans" href="#about">About</a></li>
<li className=""><a className="uppercase transition-colors hover:text-zinc-900 text-xs text-zinc-500 tracking-widest font-sans" href="#what-i-do">Services</a></li>
<li className=""><a className="uppercase transition-colors hover:text-zinc-900 text-xs text-zinc-500 tracking-widest font-sans" href="#projects">Case Studies</a></li>
<li className=""><a className="text-xs uppercase tracking-widest text-zinc-500 transition-colors font-sans hover:text-zinc-900" href="#contact">Contact</a></li>
</ul>
<button className="md:hidden text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="z-10 w-full relative">

<section className="overflow-hidden w-full relative min-h-screen flex flex-col" id="hero">

<div className="absolute inset-0 w-full h-full z-0 pointer-events-none" id="galaxy-container"><canvas height="729" style={{display: 'block', width: '1432px', height: '729px'}} width="1432"></canvas></div>

<div className="flex-1 flex flex-col justify-center md:pt-40 md:pb-24 lg:px-8 z-10 w-full max-w-7xl border-purple-300 border-b mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 z-10 relative gap-x-12 gap-y-12 items-center">

<div className="flex flex-col translate-y-1">
<span className="md:text-2xl text-xl font-normal text-purple-600 tracking-tight font-work-sans">You have the vision, I help you shape it</span><div className="">
<h1 className="reveal-text leading-[1.05] sm:text-7xl lg:text-7xl xl:text-9xl text-5xl font-thin text-zinc-900 tracking-tight font-serif-custom text-left w-full mb-6 [&amp;&gt;span]:!pb-0 [&amp;&gt;span]:!-mb-[0.4em] [&amp;&gt;span&gt;span]:!pb-[0.4em]" data-text="From foggy idea to reality."><span className="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span className="inline-block translate-y-[110%] reveal-word">From</span></span> <span className="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span className="inline-block translate-y-[110%] reveal-word" style={{backgroundImage: 'radial-gradient(circle, #a855f7 2px, transparent 2.5px), radial-gradient(circle, #7e22ce 1.5px, transparent 2px), radial-gradient(circle, #d8b4fe 1px, transparent 1.5px)', backgroundSize: '8px 8px, 12px 12px, 6px 6px', backgroundPosition: '0 0, 4px 4px, 2px 2px', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', letterSpacing: '0.05em'}}>foggy</span></span> <span className="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span className="inline-block translate-y-[110%] reveal-word">idea</span></span> <span className="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span className="inline-block translate-y-[110%] reveal-word">to</span></span> <span className="inline-block overflow-hidden align-bottom pb-1 -mb-1"><span className="inline-block translate-y-[110%] reveal-word">reality.</span></span></h1>
</div><div className="sm:text-xl md:text-2xl leading-relaxed -translate-y-6 text-lg text-zinc-600 font-sans w-full max-w-xl translate-y-4">I help founders, startups and innovation teams turn ambiguity into a sharp proposition and first customers.</div>
</div>

<div className="hidden lg:block w-full h-full pointer-events-none"></div>
</div>
</div>
</section>
</main>

<section className="page-content text-zinc-900 bg-transparent w-full z-10 pb-24 relative" id="track-record">
<div className="md:pt-20 lg:px-8 lg:pt-50 max-w-7xl border-purple-500 mr-auto ml-auto pt-16 pr-6 pl-6">
<h2 className="md:text-4xl leading-tight md:mb-16 text-3xl font-normal text-zinc-900 tracking-tight font-work-sans text-center max-w-3xl mr-auto mb-12 ml-auto">Over 5 years at the forefront of innovation and entrepreneurship</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 gap-x-6 gap-y-6">
<div className="flex flex-col bg-purple-100 border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="text-4xl md:text-5xl tracking-tight mb-3 font-normal font-work-sans text-zinc-900">5<span className="text-purple-500">+</span></div>
<div className="text-xs font-sans text-zinc-500 uppercase tracking-widest">Ventures built</div>
</div>
<div className="flex flex-col bg-purple-100 border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight font-work-sans mb-3">30<span className="text-purple-500">+</span></div>
<div className="uppercase text-xs text-zinc-500 tracking-widest font-sans">clients</div>
</div>
<div className="flex flex-col bg-purple-100 border-zinc-200 border rounded-2xl px-8 py-8 items-center justify-center">
<div className="md:text-5xl text-4xl font-normal text-zinc-900 tracking-tight font-work-sans mb-3">300<span className="text-purple-500">+</span></div>
<div className="uppercase text-xs text-zinc-500 tracking-widest font-sans">Ideas generated
</div>
</div>
</div>
<div className="overflow-hidden border-y bg-zinc-50/50 w-full pt-10 pb-10 relative backdrop-blur-sm">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r to-transparent z-10 pointer-events-none from-zinc-50"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l to-transparent z-10 pointer-events-none from-zinc-50"></div>
<div className="flex w-max gap-16 items-center animate-scroll-brands">
<div className="flex gap-16 min-w-max gap-x-16 gap-y-16 items-center">
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Nestlé</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Beiersdorf</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">HSBC</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Loop Earplugs</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">William Grant &amp; Sons</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Givaudan</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">ResMed</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Essity</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Liberty Global</span>
</div>
<div aria-hidden="true" className="flex gap-16 items-center min-w-max">
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Nestlé</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Beiersdorf</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">HSBC</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Loop Earplugs</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">William Grant &amp; Sons</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Givaudan</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">ResMed</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Essity</span>
<span className="text-sm font-normal uppercase tracking-widest font-sans text-zinc-400">Liberty Global</span>
</div>
</div>
</div>
</div>
</section>
<main className="lg:px-8 w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative page-content">

<section className="md:pt-10 md:pb-20 border-purple-300 border-b pt-24 pb-24" id="about">
<div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">
<div className="">
<h2 className="md:text-4xl leading-tight text-3xl font-normal text-zinc-900 tracking-tight font-work-sans">A hands-on
        builder with passion for methodology.</h2>
<div className="group aspect-[3/4] overflow-hidden bg-zinc-200 w-full rounded-2xl mb-8 translate-y-8">
<img alt="Javier Poves" className="object-top transition-all duration-700 group-hover:grayscale w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3653d33c-6449-42dd-9dbd-bcdffe2e7c75_1600w.jpg"/>
</div>
</div>
<div className="">
<div className="prose prose-zinc prose-p:text-base prose-p:leading-relaxed prose-p:text-zinc-500 max-w-none mt-0 mb-10">
<p className="font-sans mt-0 mb-4 translate-y-2">I bring deep knowledge from design and venture building, and I apply it from day one to build new products and services from scratch.</p><p className="font-sans mt-4 mb-2">I care deeply about doing things right: the research, the frameworks, the craft. </p><p className="font-sans"> I care just as much about shipping something real.</p>
</div>
<div className="border-zinc-200 border-t pt-0 gap-x-y-5 gap-y-5">
<ul className="flex flex-col list-none gap-x-y-5 gap-y-5">
<li className="flex text-sm text-zinc-600 font-sans translate-y-4 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-purple-600" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
  Proven methodology grounded in Design Thinking &amp; Lean Startup
</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans translate-y-6 gap-x-3 gap-y-3 items-start"><iconify-icon className="mt-1 flex-shrink-0 text-purple-600" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Hands-on building with a wide AI toolset</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans translate-y-8 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-1 flex-shrink-0 text-purple-600" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
            Fast and tangible, delivered in weeks
          </li>
</ul>
</div>
<div className="group aspect-[16/10] overflow-hidden bg-zinc-200 opacity-90 w-full rounded-2xl mt-16">
<img alt="Working session" className="object-top transition-all duration-700 w-full h-full object-cover group-hover:grayscale brightness-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be8020b0-6b60-4195-af9e-224aa7f3427e_1600w.jpg" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
</div>
</div>
</section>

<section className="md:pt-20 md:pb-20 border-purple-400 border-b pt-24 pb-24" id="what-i-do">
<span className="block leading-tight text-4xl font-normal text-zinc-900 tracking-tight font-work-sans w-full max-w-3xl mb-16 md:text-4xl">My services</span>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-x-8 gap-y-8">
<div className="relative lg:p-10 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col bg-white border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-8 right-8 lg:top-10 lg:right-10 flex items-center justify-center rounded-full bg-purple-50 border border-purple-100 px-2.5 py-1">
<span className="text-[10px] uppercase font-normal text-purple-600 tracking-widest font-sans">AI ENHANCED</span>
</div>
<div className="font-serif-custom text-sm mb-4 font-sans text-zinc-400">01</div>
<h3 className="text-2xl tracking-tight mb-4 font-normal font-work-sans">Build Your Venture</h3>
<p className="leading-relaxed flex-grow text-sm text-zinc-500 font-sans">From a raw idea to a ready-to-launch proposition. Whether you have a problem you want to tackle or an initial concept, speedtrack it to the market within weeks, not months.</p>
<ul className="border-zinc-100 pt-6 translate-y-8 space-y-2">
<li className="flex text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Deep Dive Research</li><li className="flex gap-3 text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Design Value Proposition</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Validate Customer Demand</li>
<li className="flex text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Beta Launch</li>
</ul><div className="uppercase text-xs font-normal text-purple-600 tracking-widest font-sans border-zinc-100 border-t mt-6 pt-4 translate-y-4">6 weeks</div>
</div>
<div className="relative lg:p-10 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col bg-white border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-8 right-8 lg:top-10 lg:right-10 flex items-center justify-center rounded-full bg-purple-50 border border-purple-100 px-2.5 py-1">
<span className="text-[10px] uppercase font-normal text-purple-600 tracking-widest font-sans">AI ENHANCED</span>
</div>
<div className="font-serif-custom text-sm mb-4 font-sans text-zinc-400">02</div>
<h3 className="text-2xl tracking-tight mb-4 font-normal font-work-sans">Elevate Your Pitch</h3>
<p className="leading-relaxed text-sm text-zinc-500 font-sans mb-8">You have a plan forward but the story isn't landing yet. I work with you to restructure the narrative, sharpen the content and redesign the pitch.</p>
<ul className="pt-6 translate-y-4 space-y-3">
<li className="flex gap-3 text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Information Download</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Storyline Crafting</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans gap-x-3 gap-y-3 items-center">→ Design &amp; Visualisation</li><div className="uppercase text-xs font-normal text-purple-600 tracking-widest font-sans border-zinc-100 border-t mt-6 pt-4">1-2 weeks</div>
</ul>
</div>
<div className="relative lg:p-10 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col bg-white h-70 border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="absolute top-8 right-8 lg:top-10 lg:right-10 flex items-center justify-center rounded-full bg-purple-50 border border-purple-100 px-2.5 py-1">
<span className="text-[10px] uppercase font-normal text-purple-600 tracking-widest font-sans">AI ENHANCED</span>
</div>
<div className="font-serif-custom text-sm mb-4 font-sans text-zinc-400">03</div>
<h3 className="text-2xl tracking-tight mb-4 font-normal font-work-sans">Expand Your Horizon</h3>
<p className="leading-relaxed text-sm text-zinc-500 font-sans mb-8">Map where the opportunities are for your further expansion and turn them into an actionable plan. </p>
<ul className="flex-grow border-zinc-100 pt-6 translate-y-6 space-y-3">
<li className="flex text-sm text-zinc-600 font-sans translate-y-4 gap-x-3 gap-y-3 items-center">→ Opportunity Mapping</li>
<li className="flex text-sm text-zinc-600 font-sans translate-y-3 gap-x-3 gap-y-3 items-center">→ Opportunity Prioritisation</li>
<li className="flex gap-3 text-sm text-zinc-600 font-sans translate-y-2 gap-x-3 gap-y-3 items-center">→ Strategy Roadmapping</li>
</ul>
<div className="uppercase text-xs font-normal text-purple-600 tracking-widest font-sans border-zinc-100 border-t mt-6 pt-4 translate-y-3">4 weeks</div>
</div>
</div>
</section>

<section className="md:pt-20 md:pb-20 pt-24 pb-24" id="projects">
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16 gap-x-12 gap-y-12 items-start">
<div className="lg:col-span-4">
<span className="block leading-tight md:text-4xl text-4xl font-normal text-zinc-900 tracking-tight font-work-sans w-full mb-8">Case Studies</span>
<p className="leading-relaxed text-base text-zinc-600 font-sans my-4">From the high-level definition of a strategy to the nitty-gritty details of your product.</p>
<div className="border-zinc-200 border-t pt-7 pb-7">
<span className="uppercase block text-xs font-normal text-zinc-500 tracking-widest font-sans mb-6">Areas of expertise</span>
<ul className="space-y-4 mb-10">
<li className="flex gap-4 leading-relaxed text-sm text-zinc-600 font-sans items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Fast Moving Consumer Goods
            </li>
<li className="flex gap-4 leading-relaxed text-sm text-zinc-600 font-sans items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Food &amp; Beverages
            </li>
<li className="flex gap-4 leading-relaxed text-sm text-zinc-600 font-sans gap-x-4 gap-y-4 items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Wellness Tech
            </li>
</ul>
<span className="uppercase block text-xs font-normal text-zinc-500 tracking-widest font-sans mb-6">Skills</span>
<ul className="space-y-4">
<li className="flex leading-relaxed text-sm text-zinc-600 font-sans gap-x-4 gap-y-4 items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Customer Research
            </li>
<li className="flex gap-4 leading-relaxed text-sm text-zinc-600 font-sans gap-x-4 gap-y-4 items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Workshop Facilitation
            </li>
<li className="flex leading-relaxed text-sm text-zinc-600 font-sans gap-x-4 gap-y-4 items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Brand &amp; Product Design
            </li>
<li className="flex leading-relaxed text-sm text-zinc-600 font-sans gap-x-4 gap-y-4 items-start">
<svg className="flex-shrink-0 text-base text-purple-600 mt-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Go-to-market Strategy
            </li>
</ul>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
<img alt="ResMed Project" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df647182-6018-471a-8e53-6ddee2313b08_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-zinc-900/30 transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
<div className="md:p-8 flex flex-col z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='https://doccle.be/en-be/'" role="button">
<div className="flex justify-between items-start w-full">
<span className="uppercase text-xs font-normal text-white/90 tracking-widest font-sans">DOCCLE</span>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 backdrop-blur-md bg-black/10">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-[10px] text-white font-sans font-normal">Elevate Your Pitch</span>
</div>
</div>
<div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="md:text-2xl text-xl font-normal text-white tracking-tight font-sans mb-1.5">2030 strategy pitch for investors</h4>
<p className="text-sm text-white/70 font-sans">Straight-lined story, content and visuals into a top notch pitch for the Board of Directors.</p>
</div>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
<img alt="Loop Project" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23cb2649-c7c9-46cb-8b02-715a1abcc770_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-zinc-900/30 transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
<div className="md:p-8 flex flex-col z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='https://www.loopearplugs.com/'" role="button">
<div className="flex justify-between items-start w-full">
<span className="text-white/90 font-normal tracking-widest uppercase text-xs font-sans">LOOP</span>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 backdrop-blur-md bg-black/10">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-[10px] text-white font-sans font-normal">Expand Your Horizon</span>
</div>
</div>
<div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="md:text-2xl text-xl font-normal text-white tracking-tight font-sans mb-1.5">Moving beyond earplugs</h4>
<p className="text-sm text-white/70 font-sans">Identified opportunities and validated new product ideas for Loop to scale beyond protective earwear.</p>
</div>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
<img alt="MOOV Project" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60b404b1-fec3-4a6e-9326-ba89f53e6068_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-zinc-900/30 transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
<div className="md:p-8 flex flex-col z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='https://moovvmore.nl/'" role="button">
<div className="flex justify-between items-start w-full">
<span className="uppercase text-xs font-normal text-white/90 tracking-widest font-sans">MOOVV</span>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 backdrop-blur-md bg-black/10">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-[10px] text-white font-sans font-normal">Build Your Venture</span>
</div>
</div>
<div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="md:text-2xl text-xl font-normal text-white tracking-tight font-sans mb-1.5">Translating vision into action</h4>
<p className="text-sm text-white/70 font-sans">Planned and mapped product roadmap and brand initiatives for a 5 year expansion.</p>
</div>
</div>
</div>
<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
<img alt="OLEUS Project" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:grayscale group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c202cc71-0795-4c92-9899-36387125875f_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/30 to-zinc-900/30 transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
<div className="md:p-8 flex flex-col z-10 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='https://oleus.com/'" role="button">
<div className="flex justify-between items-start w-full relative z-10">
<span className="text-white/90 font-normal tracking-widest uppercase text-xs font-sans">OLEUS</span>
<div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/40 backdrop-blur-md bg-black/10">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-[10px] text-white font-sans font-normal">Build Your Venture</span>
</div>
</div>
<div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 relative z-10">
<h4 className="md:text-2xl text-xl font-normal text-white tracking-tight font-sans mb-1.5">Launch Strategy &amp; Operations</h4>
<p className="text-sm text-white/70 font-sans">Full operations support, from production to distribution across Europe</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:pt-20 md:pb-20 pt-24 pb-24 page-content" id="who-for">
<div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">
<div className="md:sticky md:top-32">
<h2 className="md:text-4xl leading-tight cursor-pointer text-3xl font-normal text-zinc-900 tracking-tight font-work-sans" onclick="window.location.href='/Place this e'" role="button"><style className="">
    div:has(> [data-element-id="aura-emnap78qd7su5nxoz"]) {
      position: static !important;
    }
  </style> You don't need an incubator, just someone with the experience and passion to go all-in with you.</h2>
</div>
<div className="">
<p className="leading-relaxed text-base text-zinc-600 font-sans mb-2">You don't want to give away equity or push for six months to get a committee tell you your idea is just promising. You have an idea, a product, or a business that needs structure.</p>
<p className="leading-relaxed text-base text-zinc-600 font-sans mb-10"> I will work with you directly, <strong className="font-normal text-zinc-900 font-sans">deliver something real</strong>, and help you move in the right direction.</p>
<div className="-translate-y-12 bg-white border-zinc-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative top-10">
<span className="uppercase block text-xs font-normal text-zinc-500 tracking-widest font-sans mb-6">Who Is This For</span>
<li className="flex gap-4 leading-relaxed text-sm text-zinc-600 font-sans py-1 gap-x-4 gap-y-4 items-start">→ Entrepreneurs aiming to see their startup come true.</li><li className="flex leading-relaxed text-sm text-zinc-600 font-sans pt-1 pb-1 gap-x-4 gap-y-4 items-start">→ Startup founders tired of incubator's bureaucracy.</li><li className="flex leading-relaxed text-sm text-zinc-600 font-sans py-1 gap-x-4 gap-y-4 items-start">→ Misaligned product and strategy teams.  </li>
</div>
</div>
</div>
</section>
</main>

<section className="z-10 text-white bg-zinc-950 relative page-content" id="contact">
<div className="lg:px-8 md:py-32 max-w-7xl border-zinc-800 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<span className="uppercase block text-xs font-normal text-zinc-200 tracking-widest font-sans mb-16">Contact</span>
<div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">
<div className="md:sticky md:top-32">
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal tracking-tight mb-6 font-sans">
                        Let's turn your idea into something you can show.
                    </h2>
<p className="md:text-base leading-relaxed text-sm text-zinc-400 font-sans">
<span className="block mb-8">Tell me what you're working on, we'll make it happen.</span>
<span className="flex flex-col gap-4 mt-8">
<a className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors w-max" href="https://maps.app.goo.gl/FoRbLgfYRvxZTZMj9" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-map-pin text-purple-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
      Norrsken, Barcelona
</a>
<span className="flex items-center gap-3 text-zinc-300">
<svg className="lucide lucide-phone text-purple-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      +34 672 46 32 82
    </span>
<a className="flex items-center gap-3 hover:text-white transition-colors text-zinc-300 w-max" href="https://www.linkedin.com/in/javierpoves/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin text-purple-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
  javierpoves
</a>
</span>
</p>
</div>
<div className="">
<form className="flex flex-col gap-6" data-initialized="true" id="contactForm" novalidate="">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-normal text-zinc-300 tracking-widest font-sans" htmlFor="fname">Name</label>
<input className="focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-700 text-sm text-gray-300 bg-transparent w-full border-zinc-400 rounded-none border-b pt-3 pb-3" id="fname" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-normal text-zinc-300 tracking-widest font-sans" htmlFor="femail">Email</label>
<input className="focus:outline-none focus:border-purple-500 transition-colors placeholder:text-zinc-700 text-sm text-zinc-400 bg-transparent w-full border-zinc-400 rounded-none border-b pt-3 pb-3" id="femail" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-normal text-zinc-300 tracking-widest font-sans" htmlFor="fservice">What are you working on?</label>
<div className="relative w-full" id="customSelectWrapper">
<select className="hidden" id="fservice" name="service" required="">
<option className="font-sans" disabled="" selected="" value="">Select a service</option>
<option className="font-sans" value="Build Your Venture">Build Your Venture</option>
<option className="font-sans" value="Elevate Your Pitch">Elevate Your Pitch</option>
<option className="font-sans" value="Expand Your Horizon">Expand Your Horizon</option>
<option className="font-sans" value="Not sure yet">Not sure yet — let's talk</option>
</select>
<div className="flex cursor-pointer transition-colors hover:border-zinc-600 text-sm text-zinc-700 bg-transparent w-full border-zinc-400 border-b pt-3 pb-3 relative items-center justify-between" data-initialized="true" id="customSelectDisplay" onclick="this.querySelector('.select-menu').classList.toggle('hidden')">
<span className="text-zinc-300 font-sans" id="customSelectValue">Select a service</span>
<svg className="text-zinc-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<div className="select-menu hidden absolute top-[calc(100%+4px)] left-0 w-full border z-50 shadow-xl rounded-xl overflow-hidden bg-zinc-900 border-zinc-800">
<div className="px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800 hover:text-white" onclick="event.stopPropagation(); document.getElementById('customSelectValue').innerText = this.innerText; document.getElementById('customSelectValue').className = 'font-sans text-white'; if(document.getElementById('fservice')) document.getElementById('fservice').value = 'Build Your Venture'; this.parentElement.classList.add('hidden');">Build Your Venture</div>
<div className="px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800 hover:text-white" onclick="event.stopPropagation(); document.getElementById('customSelectValue').innerText = this.innerText; document.getElementById('customSelectValue').className = 'font-sans text-white'; if(document.getElementById('fservice')) document.getElementById('fservice').value = 'Elevate Your Pitch'; this.parentElement.classList.add('hidden');">Elevate Your Pitch</div>
<div className="px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800 hover:text-white" onclick="event.stopPropagation(); document.getElementById('customSelectValue').innerText = this.innerText; document.getElementById('customSelectValue').className = 'font-sans text-white'; if(document.getElementById('fservice')) document.getElementById('fservice').value = 'Expand Your Horizon'; this.parentElement.classList.add('hidden');">Expand Your Horizon</div>
<div className="px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800 hover:text-white" onclick="event.stopPropagation(); document.getElementById('customSelectValue').innerText = this.innerText; document.getElementById('customSelectValue').className = 'font-sans text-white'; if(document.getElementById('fservice')) document.getElementById('fservice').value = 'Not sure yet'; this.parentElement.classList.add('hidden');">Not sure yet, let's talk</div>
</div>
</div>
<div className="select-options absolute top-[calc(100%+4px)] left-0 w-full border z-50 shadow-xl rounded-xl overflow-hidden bg-zinc-900 border-zinc-800" id="customSelectOptions">
<div className="custom-option px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800" data-value="Build Your Venture">Build Your Venture</div>
<div className="custom-option px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800" data-value="Elevate Your Pitch">Elevate Your Pitch</div>
<div className="custom-option px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800" data-value="Expand Your Horizon">Expand Your Horizon</div>
<div className="custom-option px-4 py-3 text-sm cursor-pointer transition-colors font-sans text-zinc-300 hover:bg-zinc-800" data-value="Not sure yet">Not sure yet — let's talk</div>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-[10px] uppercase font-normal text-zinc-300 tracking-widest font-sans" htmlFor="fmessage">Tell me more</label>
<textarea className="focus:outline-none focus:border-purple-500 transition-colors resize-y min-h-[100px] placeholder:text-zinc-700 text-sm text-slate-400 bg-zinc-700 w-full border-zinc-800 rounded-none border-b pt-3 pr-3 pb-3 pl-3" id="fmessage" name="message" placeholder="What are you building, what's the challenge, where are you stuck?" required="" rows="4"></textarea>
</div>
<button className="uppercase hover:bg-purple-500 transition-colors flex group disabled:opacity-50 disabled:cursor-not-allowed text-xs font-normal text-white tracking-widest font-sans bg-purple-600 w-full rounded-xl mt-4 pt-4 pr-6 pb-4 pl-6 items-center justify-center" id="fsubmitBtn" onclick="const f=this.form; if(!f.reportValidity()) return; const sub=encodeURIComponent('Enquiry — '+(f.service.value||'')); const body=encodeURIComponent('Name: '+(f.name.value||'')+'\nEmail: '+(f.email.value||'')+'\nService: '+(f.service.value||'')+'\n\n'+(f.message.value||'')); window.location.href='mailto:javierpovespi@gmail.com?subject='+sub+'&amp;body='+body;" type="button">
    Send message 
    <svg className="group-hover:translate-x-1 transition-transform text-base" data-icon-set="solar" data-solar="arrow-right-linear" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</form>
<div className="hidden border p-12 text-center rounded-2xl border-zinc-800" id="formSuccess">
<p className="text-xl font-normal font-work-sans text-zinc-400">Got it — I'll be in touch within 48 hours.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="z-10 text-zinc-500 bg-[#09090b] border-zinc-900 border-t pt-8 pb-8 relative page-content">
<div className="lg:px-8 flex flex-col sm:flex-row text-[11px] uppercase font-normal tracking-widest max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<span className="text-zinc-300 font-sans">© 2026 Javier Poves</span>
<span className="sm:mt-0 text-zinc-300 font-sans mt-0">Venture Builder &amp; Innovator</span>
</div>
</footer>



    </>
  );
}
