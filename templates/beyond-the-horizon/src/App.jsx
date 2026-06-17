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
oswald: ['Oswald', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // GSAP & WebGL Initializations
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);
            const textElements = document.querySelectorAll('.reveal-text');
            textElements.forEach(el => {
                const text = el.innerText;
                const words = text.split(' ');
                el.innerHTML = '';
                words.forEach(word => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'word-mask-wrapper';
                    const inner = document.createElement('span');
                    inner.className = 'word-mask-inner';
                    inner.innerText = word;
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
                gsap.to(el.querySelectorAll('.word-mask-inner'), {
                    y: '0%', opacity: 1, duration: 1, stagger: 0.05, ease: 'power4.out',
                    scrollTrigger: { trigger: el, start: 'top 95%' }
                });
            });
        });

        const initWebGL = () => {
            const canvas = document.getElementById('webgl-bg');
            if(!canvas) return;
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 5, 20);
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const geometry = new THREE.PlaneGeometry(60, 40, 60, 40);
            geometry.rotateX(-Math.PI / 2);

            const vertexShader = `
                varying vec2 vUv; varying float vElevation; uniform float uTime;
                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
                vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
                float snoise(vec2 v) {
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) ); vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1; i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod289(i);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g; g.x  = a0.x  * x0.x  + h.x  * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }
                void main() {
                    vUv = uv; vec3 pos = position;
                    float elevation = snoise(vec2(pos.x * 0.1 + uTime * 0.05, pos.z * 0.1 - uTime * 0.05)) * 3.0;
                    elevation += snoise(vec2(pos.x * 0.3 - uTime * 0.02, pos.z * 0.3 + uTime * 0.08)) * 1.0;
                    pos.y += elevation; vElevation = elevation;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
                }
            `;

            const fragmentShader = `
                varying vec2 vUv; varying float vElevation;
                void main() {
                    vec3 deepColor = vec3(0.25, 0.28, 0.22);
                    vec3 highColor = vec3(0.55, 0.58, 0.45);
                    float mixStrength = (vElevation + 3.0) / 6.0;
                    vec3 finalColor = mix(deepColor, highColor, smoothstep(0.0, 1.0, mixStrength));
                    float haze = smoothstep(0.4, 1.0, vUv.y);
                    finalColor = mix(finalColor, vec3(0.85, 0.88, 0.82), haze * 0.8);
                    gl_FragColor = vec4(finalColor, 1.0);
                }
            `;

            const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms: { uTime: { value: 0 } }, wireframe: false });
            const plane = new THREE.Mesh(geometry, material);
            plane.position.y = -5;
            scene.add(plane);

            const clock = new THREE.Clock();
            const tick = () => {
                const elapsedTime = clock.getElapsedTime();
                material.uniforms.uTime.value = elapsedTime;
                camera.position.x = Math.sin(elapsedTime * 0.2) * 2;
                camera.lookAt(0, 0, 0);
                renderer.render(scene, camera);
                window.requestAnimationFrame(tick);
            };
            tick();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };
        if (typeof THREE !== 'undefined') initWebGL();

        // Orbit Features Rotation
        (function() {
            const root = document.getElementById('innovation-features-root');
            if(!root) return;
            const ring = root.querySelector('#orbit-ring');
            const hero = root.querySelector('#hero-content');
            const cards = root.querySelectorAll('.ui-card');
            const images = ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=400&auto=format&fit=crop", "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&auto=format&fit=crop"];
            const angles = [-80, -60, -40, -20, 0, 20, 40, 60, 80];

            angles.forEach((angle, i) => {
                const item = document.createElement('div');
                item.className = "orbit-item absolute w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 -ml-8 -mt-8 sm:-ml-10 sm:-mt-10 md:-ml-14 md:-mt-14 rounded-[1.5rem] md:rounded-[2rem] p-1 md:p-1.5 bg-white border border-stone-200 shadow-xl flex items-center justify-center transition-transform duration-300";
                item.innerHTML = `<img src="${images[i % images.length]}" class="w-full h-full object-cover rounded-[1rem] md:rounded-[1.5rem] opacity-90 grayscale-[10%] hover:grayscale-0 transition-all duration-300" alt="">`;
                ring.appendChild(item);
            });

            const orbitItems = ring.querySelectorAll('.orbit-item');
            function updatePositions() {
                const radius = window.innerWidth < 640 ? 320 : (window.innerWidth < 1024 ? 450 : 650);
                orbitItems.forEach((item, index) => { item.style.transform = `rotate(${angles[index]}deg) translateY(${radius}px)`; });
            }

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => { hero.style.opacity = '1'; hero.style.transform = 'translateY(0)'; }, 100);
                        setTimeout(() => { cards.forEach((card, index) => { setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, index * 100); }); }, 300);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(root);

            let currentRotation = 0;
            function animateOrbit() {
                currentRotation -= 0.05;
                ring.style.transform = `rotate(${currentRotation}deg)`;
                requestAnimationFrame(animateOrbit);
            }
            window.addEventListener('resize', updatePositions);
            updatePositions();
            animateOrbit();
        })();

        // Pricing Toggle Script
        (function() {
            const toggleContainer = document.getElementById('billing-toggle-container');
            if(!toggleContainer) return;
            const toggleThumb = document.getElementById('toggle-thumb-pill');
            const toggleIcon = document.getElementById('toggle-indicator-icon');
            const toggleText = document.getElementById('toggle-indicator-text');
            const labelMonthly = document.getElementById('label-monthly');
            const labelYearly = document.getElementById('label-yearly');
            const priceElements = document.querySelectorAll('.price-val');
            let isYearly = false;

            function updateToggleUI() {
                toggleContainer.setAttribute('aria-checked', isYearly ? 'true' : 'false');
                const padding = 6;
                const rightLeft = toggleContainer.offsetWidth - toggleThumb.offsetWidth - padding;

                if (isYearly) {
                    toggleThumb.style.left = rightLeft + 'px';
                    toggleText.innerText = 'Annually';
                    toggleIcon.setAttribute('icon', 'solar:calendar-linear');
                    labelMonthly.classList.replace('text-stone-900', 'text-stone-400');
                    labelYearly.classList.replace('text-stone-400', 'text-stone-900');
                    toggleThumb.classList.replace('bg-stone-900', 'bg-[#B08D6A]');
                    toggleThumb.classList.replace('border-stone-800', 'border-[#8E7B68]');
                } else {
                    toggleThumb.style.left = padding + 'px';
                    toggleText.innerText = 'Monthly';
                    toggleIcon.setAttribute('icon', 'solar:wallet-money-linear');
                    labelMonthly.classList.replace('text-stone-400', 'text-stone-900');
                    labelYearly.classList.replace('text-stone-900', 'text-stone-400');
                    toggleThumb.classList.replace('bg-[#B08D6A]', 'bg-stone-900');
                    toggleThumb.classList.replace('border-[#8E7B68]', 'border-stone-800');
                }

                priceElements.forEach(el => {
                    el.style.opacity = '0'; el.style.transform = 'translateY(4px)';
                    el.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
                    setTimeout(() => {
                        el.innerText = '$' + (isYearly ? el.dataset.yearly : el.dataset.monthly);
                        el.style.opacity = '1'; el.style.transform = 'translateY(0)';
                    }, 180);
                });
            }

            toggleContainer.addEventListener('click', () => { isYearly = !isYearly; updateToggleUI(); });
            toggleContainer.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); isYearly = !isYearly; updateToggleUI(); } });
            window.addEventListener('resize', updateToggleUI);
        })();
    
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
      
<main className="relative w-full h-screen min-h-[50rem] flex flex-col items-center justify-between overflow-hidden">
<canvas className="absolute inset-0 z-0 pointer-events-none w-full h-full" id="webgl-bg"></canvas>
<div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/10 mix-blend-multiply"></div>
<header className="relative z-50 w-full max-w-[87.5rem] mx-auto px-6 md:px-12 pt-8 flex items-center justify-between">
<div className="text-xl font-normal tracking-tighter text-white uppercase select-none">Aether</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-stone-300 tracking-wide">
<a className="hover:text-white transition-colors duration-300" href="#">Expeditions</a>
<a className="hover:text-white transition-colors duration-300" href="#">Landscapes</a>
<a className="hover:text-white transition-colors duration-300" href="#">Origins</a>
</nav>
<button className="flex items-center gap-2 bg-white text-stone-900 px-5 py-2.5 rounded-full text-sm font-normal tracking-tight hover:bg-stone-200 transition-colors duration-300">
                Begin Expedition
            </button>
</header>
<div className="absolute top-[20%] left-0 w-full z-10 pointer-events-none flex flex-col items-start px-6 md:px-12 select-none">
<h1 className="font-oswald text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter text-white/90 uppercase drop-shadow-2xl">Beyond</h1>
<h1 className="font-oswald text-[18vw] md:text-[14vw] leading-[0.8] tracking-tighter text-white/95 uppercase ml-[5vw] md:ml-[15vw] drop-shadow-2xl">The Horizon</h1>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[37.5rem] h-[75%] md:h-[85%] z-20 pointer-events-none flex items-end justify-center"></div>
<div className="relative z-30 w-full max-w-[87.5rem] mx-auto flex-1 pointer-events-none flex flex-col justify-center">
<div className="hidden lg:flex absolute left-12 top-[40%] flex-col gap-4 pointer-events-auto w-64 p-px rounded-xl bg-gradient-to-br from-stone-400/50 via-stone-600/20 to-transparent shadow-2xl backdrop-blur-md float-anim">
<div className="w-full h-full bg-[#8E7B68]/90 rounded-[0.7rem] p-5 flex flex-col relative overflow-hidden">
<button className="absolute top-4 right-4 text-stone-200 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="w-24 h-24 mx-auto mb-4 bg-stone-900/20 rounded-full flex items-center justify-center border border-white/10 p-4">
<iconify-icon className="text-3xl text-stone-200" icon="solar:backpack-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs text-stone-100 font-light leading-relaxed">Deploy advanced tactical gear for harsh environments.</p>
</div>
</div>
<div className="hidden md:flex absolute right-12 top-[30%] flex-col items-end text-right pointer-events-auto float-anim" style={{animationDelay: '1s'}}>
<div className="flex items-center flex-row-reverse -space-x-3 space-x-reverse mb-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-stone-800 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-stone-800 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-stone-800 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="flex items-baseline gap-1 font-oswald tracking-tight">
<span className="text-3xl tracking-tight text-stone-400 font-light">+</span>
<span className="text-5xl tracking-tight text-white font-normal">89K</span>
</div>
<p className="text-xs text-stone-400 text-right mt-1 w-32 leading-tight font-light">Pioneers currently navigating the frontier.</p>
</div>
<div className="hidden lg:flex absolute right-12 bottom-[20%] w-80 p-px rounded-xl bg-gradient-to-br from-white/30 via-white/5 to-transparent shadow-2xl backdrop-blur-xl pointer-events-auto float-anim" style={{animationDelay: '0.5s'}}>
<div className="w-full h-full bg-white/10 rounded-[0.7rem] p-5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 to-stone-900/90 -z-10"></div>
<span className="inline-block px-2 py-0.5 bg-[#B08D6A] text-xs font-normal uppercase tracking-wider text-white rounded-full mb-3">Featured</span>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-light tracking-tight text-white mb-1">Chart Patagonia</h3>
<p className="text-xs text-stone-300 font-light">Glacial peaks and timeless winds.</p>
</div>
<iconify-icon className="text-2xl text-stone-300" icon="solar:map-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="relative z-40 w-full px-6 md:px-12 pb-8 pointer-events-auto">
<div className="relative border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="w-full md:w-1/3 flex items-start justify-start gap-4">
<iconify-icon className="text-3xl text-stone-400 mt-1" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xs text-stone-400 max-w-[12.5rem] leading-relaxed font-light">Aether delivers precision telemetry and extraordinary discoveries in uncharted territories.</p>
</div>
<div className="w-full md:w-1/2 max-w-lg md:text-right">
<p className="text-xl md:text-3xl font-light tracking-tight leading-tight text-white reveal-text">Step past the edges of the map and embrace the wilderness.</p>
</div>
</div>
</div>
</main>

<section className="relative bg-[#F5F4F0] text-stone-900 antialiased overflow-hidden flex flex-col items-center min-h-screen pt-40 pb-24 px-6 md:px-12" id="innovation-features-root">
<div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 50% 0%, rgba(176, 141, 106, 0.12) 0%, transparent 60%)'}}></div>
<div className="absolute -top-12 md:-top-24 left-1/2 -translate-x-1/2 w-0 h-0 z-0 flex items-center justify-center pointer-events-none" id="orbit-center">
<div className="relative w-0 h-0 transition-transform duration-75" id="orbit-ring"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center max-w-3xl mt-24 sm:mt-40 opacity-0 translate-y-4" id="hero-content" style={{transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B08D6A]/20 bg-[#B08D6A]/5 backdrop-blur-md mb-8">
<div className="w-5 h-5 rounded-full bg-[#B08D6A]/10 flex items-center justify-center">
<iconify-icon className="text-[#B08D6A] text-xs" icon="solar:flame-linear"></iconify-icon>
</div>
<span className="text-xs font-normal text-stone-700 tracking-wide uppercase">Features</span>
</div>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-stone-900 leading-tight">Packed with Innovation.</h2>
<p className="mt-6 text-base md:text-lg text-stone-600 font-light max-w-xl leading-relaxed">Experience a platform designed with cutting-edge capabilities to elevate your agency or portfolio to the next level.</p>
<button className="mt-10 inline-flex items-center justify-center px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-sm font-normal tracking-tight transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-stone-800 hover:scale-[1.02] active:scale-[0.98]">
                Book an Appointment
            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-40 z-10 relative">
<div className="ui-card opacity-0 translate-y-8 bg-white border border-stone-200/80 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5">
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#B08D6A] to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-[#B08D6A] blur-[10px] opacity-20 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-3 group-hover:text-[#B08D6A] transition-colors">Seamless API Integrations</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Connect effortlessly with a wide range of third-party platforms. Our robust infrastructure ensures your data flows smoothly.</p>
</div>
</div>
<div className="ui-card opacity-0 translate-y-8 bg-white border border-stone-200/80 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#B08D6A] to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-[#B08D6A] blur-[10px] opacity-20 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-3 group-hover:text-[#B08D6A] transition-colors">Trusted Authentication</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Quickly integrate with major platforms using enterprise-grade security protocols. Keep your users' data safe with encryption.</p>
</div>
</div>
<div className="ui-card opacity-0 translate-y-8 bg-white border border-stone-200/80 rounded-2xl p-8 relative group overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#B08D6A] to-transparent"></div>
<div className="absolute top-0 w-1/2 h-[8px] bg-[#B08D6A] blur-[10px] opacity-20 rounded-full"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-3 group-hover:text-[#B08D6A] transition-colors">AI-Speech Recognition</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Enable users to navigate your app using voice commands. Our advanced models provide high accuracy in multiple environments.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 pt-32 pb-32 border-t border-stone-800 relative z-20">
<div className="max-w-[85rem] mx-auto px-6 md:px-12 relative">
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 z-10 pb-16 relative items-end">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-6 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-stone-400 shadow-[0_0_8px_rgba(168,162,158,0.8)] animate-pulse"></span>
<span className="text-xs text-stone-400 tracking-[0.2em] font-light uppercase">Product Interface</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white/90 leading-tight">
                        Full Visibility Across Every Operation
                    </h2>
</div>
<p className="text-sm text-stone-400 font-light leading-relaxed text-left md:pb-2">
                    Observe active modules, infrastructure signals, and automated system workflows from a unified operational dashboard.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-10 mb-8 relative">
<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-light tracking-tight text-white/90 mt-1 max-w-md">
                            Track the activity and operational status of deployed assets executing tasks across environments.
                        </h3>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
<div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-white/5 flex flex-col bg-white/[0.01]">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Active Modules</span>
<span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-mono">142</span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-1.5">
<div className="p-2.5 rounded-lg border border-white/5 bg-white/[0.03] flex items-center justify-between cursor-pointer group/item shadow-sm">
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)] relative z-10"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-200 font-light group-hover/item:text-emerald-400 transition-colors">Module-DataSync</span>
<span className="text-xs text-stone-500 font-mono">node-us-east-1</span>
</div>
</div>
<iconify-icon className="text-emerald-400/70" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light group-hover/item:text-amber-400 transition-colors">Module-NLP-Core</span>
<span className="text-xs text-stone-600 font-mono">node-eu-west-2</span>
</div>
</div>
<iconify-icon className="text-stone-600" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="p-2.5 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] flex items-center justify-between cursor-pointer transition-colors group/item">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light group-hover/item:text-emerald-400 transition-colors">Module-Security</span>
<span className="text-xs text-stone-600 font-mono">node-ap-south-1</span>
</div>
</div>
<iconify-icon className="text-stone-600" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full md:w-[60%] flex flex-col relative z-10">
<div className="flex p-4 border-b border-white/5 gap-4 bg-stone-900/20">
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Execution Rate</span>
<div className="flex items-end gap-1.5">
<span className="text-2xl text-white/90 font-normal tracking-tight leading-none">8.4k</span>
<span className="text-xs text-emerald-400 font-mono mb-0.5">/min</span>
</div>
</div>
<div className="w-px bg-white/5"></div>
<div className="flex-1 flex flex-col gap-1.5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">System Load</span>
<div className="flex items-end gap-2">
<span className="text-2xl text-white/90 font-normal tracking-tight leading-none">42<span className="text-sm text-stone-500 font-light">%</span></span>
<span className="text-xs text-amber-500 bg-amber-500/10 border border-amber-500/20 px-1 py-0.5 rounded font-light mb-1">ELEVATED</span>
</div>
</div>
</div>
<div className="p-4 flex-1 flex flex-col justify-end relative overflow-hidden min-h-[140px]">
<div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
<div className="border-b border-dashed border-white"></div>
</div>
<div className="absolute inset-0 top-6 bottom-4 px-4 pointer-events-none">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<defs>
<lineargradient id="agentGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10B981" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#10B981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10 L200,60 L0,60 Z" fill="url(#agentGradient)"></path>
<path d="M0,50 C10,48 20,20 30,25 C40,30 50,15 60,20 C70,25 80,45 90,40 C100,35 110,10 120,15 C130,20 140,55 150,50 C160,45 170,20 180,25 C190,30 195,15 200,10" fill="none" stroke="#10B981" strokeLinecap="round" strokeWidth="1.5"></path>
<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="120" cy="15" fill="#10B981" r="2.5"></circle>
<circle className="shadow-[0_0_8px_rgba(16,185,129,0.8)]" cx="200" cy="10" fill="#10B981" r="2.5"></circle>
</svg>
</div>
</div>
<div className="h-10 border-t border-white/5 px-4 flex items-center justify-between bg-white/[0.01]">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></span>
<span className="text-xs text-stone-400 truncate font-light">Module-DataSync completed block 0x4A</span>
</div>
<span className="text-xs text-stone-600 font-mono">Just now</span>
</div>
</div>
</div>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-6 flex flex-col gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-lg font-normal tracking-tight text-white/90">Anomaly Detection Console</h3>
<p className="text-sm text-stone-400 font-light mt-1 max-w-md">Analyze structural threats, suspicious traffic patterns, and anomaly signals detected across the network.</p>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center relative p-8 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_70%)]">
<span className="absolute top-4 left-4 text-xs text-stone-500 font-mono tracking-widest border border-white/5 bg-white/[0.02] px-1.5 py-0.5 rounded">NET_SCAN::ACTIVE</span>
<div className="relative w-36 h-36">
<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-[18%] border border-white/5 rounded-full"></div>
<div className="absolute inset-[36%] border border-white/10 rounded-full"></div>
<div className="absolute inset-[54%] border border-cyan-500/20 rounded-full bg-cyan-500/5"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/5 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-white/5 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse"></div>
<div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-orange-400 rounded-full shadow-[0_0_5px_rgba(251,146,60,0.8)]"></div>
<div className="absolute bottom-[28%] left-[18%] w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]">
<div className="absolute inset-0 rounded-full border border-red-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<div className="absolute top-[65%] right-[20%] w-1 h-1 bg-emerald-400 rounded-full opacity-60"></div>
<div className="absolute inset-0 rounded-full border-r border-cyan-400/50 animate-[spin_3s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(34,211,238,0.15) 100%)', mixBlendMode: 'screen'}}></div>
</div>
</div>
<div className="w-full md:w-[55%] flex flex-col bg-stone-900/20">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Event Log</span>
<span className="text-xs text-red-400 font-mono bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">2 UNRESOLVED</span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2 relative z-10">
<div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20 flex flex-col gap-2 relative shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]"></div>
<span className="text-xs text-red-400 font-light">Unauthorized behavior</span>
</div>
<span className="text-xs text-stone-500 font-mono">1m ago</span>
</div>
<span className="text-xs text-stone-400 font-light truncate">Anomalous parameter modification attempt.</span>
</div>
<div className="p-3 rounded-lg bg-orange-500/[0.03] border border-orange-500/10 flex flex-col gap-2 relative hover:border-orange-500/20 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
<span className="text-xs text-orange-400 font-light">Suspicious connection</span>
</div>
<span className="text-xs text-stone-500 font-mono">4m ago</span>
</div>
<span className="text-xs text-stone-400 font-light truncate">Unexpected connection to unverified IP.</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Automation Rules</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded border border-cyan-500/30 bg-cyan-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
<iconify-icon className="text-cyan-400" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="h-px bg-white/10 flex-1 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/50 w-full animate-pulse"></div>
</div>
<div className="w-7 h-7 rounded border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center flex-shrink-0 z-10 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between text-xs text-stone-500 font-mono uppercase">
<span>On Anomaly</span>
<span>Auto-Isolate</span>
</div>
<div className="pt-2 border-t border-white/5 text-xs text-stone-400 font-light leading-relaxed">
                            Automated policy active. 24 incidents resolved without manual intervention this week.
                        </div>
</div>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">System Event Log</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="relative pl-3.5 flex flex-col gap-4 mt-1">
<div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-white/10"></div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-stone-900 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-stone-300 font-light">Database optimization complete</span>
<span className="text-xs text-stone-500 font-mono">10:42 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-cyan-400 border-2 border-stone-900"></div>
<span className="text-xs text-stone-300 font-light">Fleet scaled to 150 nodes</span>
<span className="text-xs text-stone-500 font-mono">09:15 AM</span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-stone-500 border-2 border-stone-900"></div>
<span className="text-xs text-stone-500 font-light">Scheduled maintenance routine</span>
<span className="text-xs text-stone-600 font-mono">02:00 AM</span>
</div>
</div>
</div>
<div className="bg-stone-900/80 border border-stone-800/80 rounded-2xl p-5 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="flex items-center justify-between mb-5">
<span className="text-xs text-stone-500 uppercase tracking-widest font-light">Infra Health</span>
<iconify-icon className="text-stone-500 text-lg group-hover:text-stone-400 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="flex items-center gap-5 mt-2">
<div className="w-14 h-14 relative flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(255,255,255,0.05)" strokeWidth="3"></circle>
<circle className="drop-shadow-[0_0_4px_rgba(16,185,129,0.5)]" cx="18" cy="18" fill="none" r="16" stroke="#10B981" stroke-dasharray="100" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-base font-normal text-white tracking-tight leading-none mt-0.5">85</span>
<span className="text-[9px] text-emerald-400 font-normal tracking-wide mt-0.5">SCORE</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-mono text-stone-400">
<span>CPU Allocation</span>
<span className="text-emerald-400">Stable</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-emerald-400 w-[40%] rounded-full shadow-[0_0_5px_rgba(16,185,129,0.3)]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-mono text-stone-400">
<span>Memory Usage</span>
<span className="text-amber-400">82%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[82%] rounded-full shadow-[0_0_5px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex items-center justify-center bg-[#F5F4F0] text-stone-900 pt-32 pb-32 px-6 relative z-30" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '40px 40px', backgroundPosition: 'center center'}}>
<main className="max-w-[85rem] w-full mx-auto flex flex-col gap-16 relative z-10">
<header className="flex flex-col gap-10 z-20 text-center relative items-center">
<div className="space-y-6 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#B08D6A]/20 bg-[#B08D6A]/5 text-[#8E7B68] text-xs font-normal tracking-wide shadow-sm backdrop-blur-md">
<iconify-icon className="text-base" icon="solar:pie-chart-2-linear"></iconify-icon>
                        Transparent Pricing Model
                    </div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tight leading-tight max-w-2xl text-stone-900">
                        Predictable <span className="text-[#B08D6A]">Economics</span>
</h2>
<p className="text-base text-stone-500 font-light max-w-xl leading-relaxed">
                        Select the perfect tier for your infrastructure needs. Scale effortlessly as your traffic and compute requirements expand.
                    </p>
</div>
<div aria-checked="false" className="relative z-10 w-[260px] h-16 rounded-full p-1.5 flex items-center cursor-pointer group transition-all duration-500 outline-none focus-visible:ring-4 focus-visible:ring-stone-500/30 overflow-hidden bg-white border border-stone-200 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" id="billing-toggle-container" role="switch" tabindex="0">
<div className="absolute inset-0 flex items-center justify-between px-7 pointer-events-none select-none">
<span className="text-base font-normal transition-colors duration-300 text-stone-900" id="label-monthly">Monthly</span>
<span className="text-base font-light transition-colors duration-300 text-stone-400" id="label-yearly">Annually</span>
</div>
<div className="absolute top-[6px] left-[6px] h-[52px] w-[146px] rounded-full flex items-center justify-center gap-2 px-5 whitespace-nowrap bg-stone-900 border border-stone-800 shadow-md transition-all duration-500" id="toggle-thumb-pill" style={{left: '6px'}}>
<iconify-icon className="text-xl shrink-0 transition-colors duration-300 text-white" icon="solar:wallet-money-linear" id="toggle-indicator-icon"></iconify-icon>
<span className="text-base font-normal text-white tracking-wide transition-all duration-300" id="toggle-indicator-text">Monthly</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 items-stretch max-w-5xl mx-auto w-full">

<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 border border-stone-200 hover:border-[#B08D6A]/30 flex flex-col gap-8 transition-all duration-300 hover:-translate-y-1 group">
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-50 text-[#8E7B68] border border-stone-100 mb-6 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Starter</h3>
<p className="text-sm text-stone-500 font-light">Essential tools for individuals</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal tracking-tight text-stone-900 price-val font-sans" data-monthly="29" data-yearly="19">$29</span>
<span className="text-sm text-stone-500 font-light">/mo</span>
</div>
<ul className="flex flex-col gap-4 text-sm font-light text-stone-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Deploy up to 3 environments</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Standard edge routing</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> 7-day analytics retention</li>
<li className="flex items-start gap-3 text-stone-400"><iconify-icon className="text-stone-300 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon> Auto-scaling instances</li>
</ul>
<button className="w-full py-3.5 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-normal hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 shadow-sm active:scale-[0.98]">Start for Free</button>
</div>

<div className="relative flex flex-col transition-all duration-300 hover:-translate-y-1">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#B08D6A]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-[#B08D6A]/5 border border-[#B08D6A]/20 flex flex-col gap-8 relative z-10 flex-1 ring-1 ring-[#B08D6A]/10">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B08D6A] text-white text-xs px-4 py-1.5 rounded-full font-normal tracking-wide shadow-md flex items-center gap-2">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
</span>
                            Most Popular
                        </div>
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#B08D6A] border border-[#8E7B68] shadow-inner">
<iconify-icon className="text-white text-2xl drop-shadow-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Professional</h3>
<p className="text-sm text-[#8E7B68] font-light">Advanced power for growing teams</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-normal tracking-tight text-stone-900 price-val font-sans" data-monthly="89" data-yearly="59">$89</span>
<span className="text-sm text-stone-500 font-light">/mo</span>
</div>
<ul className="flex flex-col gap-4 text-sm font-light text-stone-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Unlimited environments</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Accelerated global routing</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> 90-day analytics retention</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Auto-scaling instances</li>
</ul>
<button className="w-full py-3.5 rounded-full text-white bg-stone-900 text-sm font-normal hover:bg-stone-800 transition-all duration-200 shadow-md active:scale-[0.98]">Activate Pro</button>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 border border-stone-200 hover:border-[#B08D6A]/30 flex flex-col gap-8 transition-all duration-300 hover:-translate-y-1 group">
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-stone-50 text-[#8E7B68] border border-stone-100 mb-6 group-hover:bg-[#B08D6A]/10 group-hover:border-[#B08D6A]/20 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-stone-900 mb-2">Scale</h3>
<p className="text-sm text-stone-500 font-light">Custom solutions for large orgs</p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-normal tracking-tight text-stone-900 price-val font-sans" data-monthly="199" data-yearly="149">$199</span>
<span className="text-sm text-stone-500 font-light">/mo</span>
</div>
<ul className="flex flex-col gap-4 text-sm font-light text-stone-600 flex-1">
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Dedicated isolated hardware</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Custom WAF &amp; traffic rules</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> Infinite analytics retention</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#B08D6A] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon> 24/7 dedicated support SLA</li>
</ul>
<button className="w-full py-3.5 rounded-full border border-stone-200 bg-white text-stone-700 text-sm font-normal hover:bg-stone-50 hover:border-stone-300 transition-all duration-200 shadow-sm active:scale-[0.98]">Contact Sales</button>
</div>
</div>
</main>
</section>

<section className="relative overflow-hidden bg-stone-950 text-stone-300 border-t border-white/5" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,106,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_22%)]"></div>
</div>
<div className="relative max-w-[85rem] mx-auto px-6 md:px-12 pt-16 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
<div className="border border-white/10 bg-white/5 backdrop-blur-sm px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16 rounded-3xl">
<div className="grid lg:grid-cols-[0.4fr_1fr] gap-10 lg:gap-16 items-end">
<div>
<div className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-stone-400 mb-6">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-[#B08D6A]"></span>
                            Initiate Protocol
                        </div>
<p className="max-w-[15rem] text-xs leading-relaxed text-stone-400 font-light">
                            For enterprise deployments, custom topography mappings, and robust infrastructure scaled to your demands.
                        </p>
</div>
<div>
<h2 className="font-oswald text-white tracking-tighter leading-none text-4xl sm:text-5xl md:text-6xl max-w-xl uppercase">
<span className="block text-stone-400">Build Infrastructure</span>
<span className="block">That <span className="text-white">Endures Beyond</span></span>
<span className="block text-stone-400">The Horizon.</span>
</h2>
<p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-400 font-light">
                            Every mission begins with a precise calculation — defining parameters, plotting courses, and establishing systems that will operate flawlessly in uncharted territory.
                        </p>
<div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white text-stone-900 hover:bg-stone-200 transition-all duration-300 text-xs uppercase tracking-widest font-normal" href="#">
                                Start Expedition
                                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-stone-700 bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-white transition-colors duration-300 text-xs uppercase tracking-widest font-normal" href="#">
                                View Telemetry
                            </a>
</div>
</div>
</div>
</div>
<div className="pt-12 sm:pt-16 lg:pt-20">
<div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-8 lg:gap-10 border-t border-white/10 pt-8">
<div>
<a className="inline-flex items-center gap-3 mb-5" href="#">
<div className="h-10 w-10 rounded-full border border-stone-700 bg-stone-900 flex items-center justify-center text-xs text-white font-normal tracking-widest uppercase">
                                AE
                            </div>
<div className="flex flex-col leading-none">
<span className="text-xs uppercase tracking-widest text-stone-400">Aether</span>
<span className="text-sm tracking-tight text-white font-oswald uppercase">Operations</span>
</div>
</a>
<p className="max-w-[18rem] text-sm leading-relaxed text-stone-400 font-light">
                            Expedition logistics and spatial mapping telemetry, deployed globally to master the unknown.
                        </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Navigation</p>
<div className="flex flex-col gap-3">
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Expeditions</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Landscapes</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Methodology</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Telemetry Logs</a>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Comms</p>
<div className="flex flex-col gap-3 text-sm text-stone-300 font-light">
<a className="hover:text-white transition-colors" href="#">base@aether.io</a>
<span>Sector 4 / Remote</span>
<span>Encrypted Channel</span>
</div>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Network</p>
<div className="flex flex-col gap-3">
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">GitHub</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Twitter</a>
<a className="text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Transmission API</a>
</div>
</div>
</div>
<div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<p className="text-xs uppercase tracking-widest text-stone-500 font-light">
                        © 2026 Aether Systems
                    </p>
<div className="flex items-center gap-4 sm:gap-6">
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors font-light" href="#">Privacy</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-white transition-colors font-light" href="#">Terms</a>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
