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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        const revealElements = document.querySelectorAll('.reveal-text');
        revealElements.forEach(el => {
            const text = el.innerText;
            el.innerHTML = ''; 
            text.split(' ').forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-[0.25em]';
                const inner = document.createElement('span');
                inner.className = 'inline-block translate-y-[110%] reveal-word';
                inner.innerText = word;
                wrapper.appendChild(inner);
                el.appendChild(wrapper);
            });

            gsap.to(el.querySelectorAll('.reveal-word'), {
                y: '0%',
                duration: 0.8,
                stagger: 0.04,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });

        gsap.to('.parallax-img', {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-container',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        // --- WebGL Column Split Logic ---
        
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1'; 
        document.body.appendChild(canvas);

        const scene = new THREE.Scene();
        const cameraZ = 600; 
        const fov = 2 * Math.atan((window.innerHeight / 2) / cameraZ) * (180 / Math.PI);
        const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = cameraZ;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        const fragmentShader = `
            uniform sampler2D uTexture;
            uniform vec2 uImageRes;
            uniform vec2 uPlaneRes;
            uniform float uColIndex;
            uniform float uCols;
            uniform float uGrayscale;
            varying vec2 vUv;

            void main() {
                vec2 fullUv = vec2((vUv.x + uColIndex) / uCols, vUv.y);
                
                vec2 ratio = vec2(
                    min((uPlaneRes.x / uPlaneRes.y) / (uImageRes.x / uImageRes.y), 1.0),
                    min((uPlaneRes.y / uPlaneRes.x) / (uImageRes.y / uImageRes.x), 1.0)
                );
                
                vec2 uv = vec2(
                    fullUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                    fullUv.y * ratio.y + (1.0 - ratio.y) * 0.5
                );

                vec4 color = texture2D(uTexture, uv);
                float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
                gl_FragColor = vec4(mix(color.rgb, vec3(gray), uGrayscale), color.a);
            }
        `;

        const measures = document.querySelectorAll('.webgl-measure');
        const items = [];
        const textureLoader = new THREE.TextureLoader();
        const columnsCount = 4;
        const baseGeometry = new THREE.PlaneGeometry(1, 1);

        measures.forEach(measure => {
            const img = measure.querySelector('.webgl-img');
            const hasGrayscale = measure.hasAttribute('data-grayscale');
            const group = new THREE.Group();
            const meshes = [];
            
            let targetGrayscale = hasGrayscale ? 1.0 : 0.0;
            let currentGrayscale = targetGrayscale;

            if (hasGrayscale) {
                measure.addEventListener('mouseenter', () => { targetGrayscale = 0.0; });
                measure.addEventListener('mouseleave', () => { targetGrayscale = 1.0; });
            }

            for (let i = 0; i < columnsCount; i++) {
                const material = new THREE.ShaderMaterial({
                    vertexShader,
                    fragmentShader,
                    uniforms: {
                        uTexture: { value: null },
                        uImageRes: { value: new THREE.Vector2(1, 1) },
                        uPlaneRes: { value: new THREE.Vector2(1, 1) },
                        uColIndex: { value: i },
                        uCols: { value: columnsCount },
                        uGrayscale: { value: currentGrayscale }
                    },
                    transparent: true
                });

                const mesh = new THREE.Mesh(baseGeometry, material);
                // Position each column side-by-side to fill the 1x1 group area
                mesh.position.x = (i / columnsCount) - 0.5 + (1 / (columnsCount * 2));
                mesh.scale.set(1 / columnsCount, 1, 1);
                
                group.add(mesh);
                meshes.push(mesh);
            }

            textureLoader.load(img.src, (texture) => {
                meshes.forEach(mesh => {
                    mesh.material.uniforms.uTexture.value = texture;
                    mesh.material.uniforms.uImageRes.value.set(img.naturalWidth || 1, img.naturalHeight || 1);
                });
            });

            scene.add(group);
            items.push({ measure, group, meshes, hasGrayscale, get target() { return targetGrayscale; }, set current(v) { currentGrayscale = v; }, get current() { return currentGrayscale; } });
        });

        let scrollY = window.scrollY;
        let smoothScroll = scrollY;
        const staggers = [0.15, 0.35, 0.20, 0.40]; // Unique stagger factor per column

        function render() {
            scrollY = window.scrollY;
            smoothScroll += (scrollY - smoothScroll) * 0.08;
            
            let velocity = scrollY - smoothScroll;
            velocity = Math.max(Math.min(velocity, 300), -300);

            items.forEach(item => {
                const rect = item.measure.getBoundingClientRect();
                
                item.group.position.x = rect.left - window.innerWidth / 2 + rect.width / 2;
                item.group.position.y = -rect.top + window.innerHeight / 2 - rect.height / 2;
                item.group.scale.set(rect.width, rect.height, 1);

                if (item.hasGrayscale) {
                    item.current += (item.target - item.current) * 0.1;
                }

                item.meshes.forEach((mesh, i) => {
                    const floatY = -velocity * staggers[i] * 0.8;
                    mesh.position.y = floatY / rect.height;

                    mesh.material.uniforms.uPlaneRes.value.set(rect.width, rect.height);
                    if (item.hasGrayscale) {
                        mesh.material.uniforms.uGrayscale.value = item.current;
                    }
                });
            });

            renderer.render(scene, camera);
            requestAnimationFrame(render);
        }
        
        if(items.length > 0) {
            render();
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.fov = 2 * Math.atan((window.innerHeight / 2) / cameraZ) * (180 / Math.PI);
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    
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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between border-x border-[#C4CFC0]/60">
<div className="h-full border-r border-[#C4CFC0]/60 w-1/3 hidden md:block"></div>
<div className="h-full border-r border-[#C4CFC0]/60 w-1/3 hidden md:block"></div>
</div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="py-6 flex justify-between items-start border-b border-[#C4CFC0]">
<nav className="flex flex-wrap gap-x-4 gap-y-2 text-base uppercase tracking-widest text-[#2A3324]/70">
<a className="hover:text-[#2A3324] transition-colors" href="#">Studio</a>
<span>/</span>
<a className="hover:text-[#2A3324] transition-colors" href="#">Expertise</a>
<span className="">/</span>
<a className="hover:text-[#2A3324] transition-colors" href="#">Vision</a>
<span>/</span>
<a className="hover:text-[#2A3324] transition-colors" href="#">Portfolio</a>
<span>/</span>
<a className="hover:text-[#2A3324] transition-colors" href="#">Journal</a>
</nav>
<div className="hidden sm:block text-[#5C715E]">
<iconify-icon className="text-4xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</header>

<section className="pt-16 pb-12 md:pt-24 md:pb-16 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
<h1 className="font-serif-custom text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight font-normal w-full md:w-3/4">
                    Architectural <br/>
<span className="italic pr-4">Innovations</span> <span className="hidden md:inline-block w-24 h-[2px] bg-[#2A3324] align-middle mb-4"></span> Habitats
                </h1>
<div className="mt-8 md:mt-0 md:w-1/4 flex flex-col items-start md:items-end text-left md:text-right">
<a className="inline-block border-b border-[#2A3324] pb-1 mb-6 text-base uppercase tracking-widest hover:opacity-70 transition-opacity" href="#contact">Discuss Project</a>
<div className="relative w-40 h-32 md:w-48 md:h-40 group cursor-pointer webgl-measure" data-grayscale="true">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Small project preview" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69c241bd-fe7d-481f-8b0c-0a5ba80fb29e_800w.webp"/>
</div>
<div className="absolute bottom-2 left-2 bg-[#2A3324] text-[#E3E7E0] p-1 rounded-sm flex items-center justify-center z-10">
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<p className="text-sm mt-4 text-[#2A3324]/70 text-left">Developing timeless structures with minimal environmental footprint, altering the way we inhabit spaces.</p>
</div>
</div>
<div className="flex justify-between items-center py-4 border-y border-[#C4CFC0] text-base uppercase tracking-widest text-[#2A3324]/70">
<span>Alpine Retreat Concept</span>
<span className="hidden sm:block">2024</span>
<span>Minimalist Dwelling</span>
</div>

<div className="webgl-measure mt-4 w-full h-[400px] md:h-[600px] lg:h-[700px] relative">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Modern wooden house exterior" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/33f44bf5-8b59-437b-a1e3-87e3db3f82ec_1600w.webp"/>
</div>
</div>
<div className="flex justify-between items-center py-3 text-base text-[#2A3324]/70">
<span className="">Featured Work</span>
<a className="hover:text-[#2A3324] transition-colors" href="#">Explore Project</a>
</div>
</section>

<section className="overflow-hidden border-[#C4CFC0] border-t pt-12 pb-12">
<p className="uppercase md:text-center text-base text-[#2A3324]/60 tracking-widest text-center mb-8">Brenda and Jennifer have been featured in</p>
<div className="w-full relative">
<div className="marquee-track flex gap-12 md:gap-16 items-center w-max">


<div className="flex flex-col text-[#E51937] font-serif-custom leading-[0.85] text-left uppercase tracking-tight font-semibold text-[20px] shrink-0">
<span>The</span>
<span className="">Globe</span>
<span>And</span>
<span className="flex items-center gap-1">Mail<svg className="w-3 h-3 fill-current" viewbox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3z"></path></svg></span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex items-center gap-3 shrink-0">
<svg className="" fill="#E51937" height="36" viewbox="0 0 100 100" width="36">
<circle className="" cx="50" cy="50" r="16"></circle>
<path d="M 50 28 C 37.85 28 28 37.85 28 50 L 12 50 C 12 29.01 29.01 12 50 12 Z"></path>
<path className="" d="M 50 72 C 62.15 72 72 62.15 72 50 L 88 50 C 88 70.99 70.99 88 50 88 Z"></path>
<path className="" d="M 28 50 C 28 62.15 37.85 72 50 72 L 50 88 C 29.01 88 12 70.99 12 50 Z"></path>
<path className="" d="M 72 50 C 72 37.85 62.15 28 50 28 L 50 12 C 70.99 12 88 29.01 88 50 Z"></path>
</svg>
<span className="font-sans-custom font-semibold text-[26px] text-black tracking-tight">CBC</span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex flex-col items-start font-sans-custom leading-tight shrink-0">
<div className="text-[#00529B] font-semibold text-[16px] tracking-tight">BNN</div>
<div className="text-[#231F20] font-semibold text-[22px] tracking-tighter -mt-1">Bloomberg</div>
<div className="text-[#231F20] font-normal text-[8px] tracking-[0.15em] mt-[1px]">RADIO 1410</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex flex-col font-sans-custom leading-none items-start shrink-0">
<div className="font-bold text-[32px] tracking-tighter text-[#111]">City</div>
<div className="font-bold italic text-[20px] tracking-tight text-[#111] ml-1">News</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex items-center gap-2 font-sans-custom shrink-0">
<div className="flex flex-col items-start leading-none">
<div className="font-bold text-[24px] tracking-tighter text-[#111]">Global</div>
<div className="font-semibold text-[10px] tracking-[0.18em] text-[#111] mt-1">NEWS</div>
</div>
<svg className="mt-[-2px]" fill="#E51937" height="22" viewbox="0 0 24 32" width="18">
<path d="M0 0 L12 16 L0 32 L8 32 L20 16 L8 0 Z"></path>
</svg>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex flex-col text-[#E51937] font-serif-custom leading-[0.85] text-left uppercase tracking-tight font-semibold text-[20px] shrink-0">
<span>The</span>
<span>Globe</span>
<span>And</span>
<span className="flex items-center gap-1">Mail<svg className="w-3 h-3 fill-current" viewbox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3z"></path></svg></span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex items-center gap-3 shrink-0">
<svg fill="#E51937" height="36" viewbox="0 0 100 100" width="36">
<circle cx="50" cy="50" r="16"></circle>
<path d="M 50 28 C 37.85 28 28 37.85 28 50 L 12 50 C 12 29.01 29.01 12 50 12 Z"></path>
<path d="M 50 72 C 62.15 72 72 62.15 72 50 L 88 50 C 88 70.99 70.99 88 50 88 Z"></path>
<path d="M 28 50 C 28 62.15 37.85 72 50 72 L 50 88 C 29.01 88 12 70.99 12 50 Z"></path>
<path d="M 72 50 C 72 37.85 62.15 28 50 28 L 50 12 C 70.99 12 88 29.01 88 50 Z"></path>
</svg>
<span className="font-sans-custom font-semibold text-[26px] text-black tracking-tight">CBC</span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex flex-col items-start font-sans-custom leading-tight shrink-0">
<div className="text-[#00529B] font-semibold text-[16px] tracking-tight">BNN</div>
<div className="text-[#231F20] font-semibold text-[22px] tracking-tighter -mt-1">Bloomberg</div>
<div className="text-[#231F20] font-normal text-[8px] tracking-[0.15em] mt-[1px]">RADIO 1410</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex flex-col font-sans-custom leading-none items-start shrink-0">
<div className="font-bold text-[32px] tracking-tighter text-[#111]">City</div>
<div className="font-bold italic text-[20px] tracking-tight text-[#111] ml-1">News</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex items-center gap-2 font-sans-custom shrink-0">
<div className="flex flex-col items-start leading-none">
<div className="font-bold text-[24px] tracking-tighter text-[#111]">Global</div>
<div className="font-semibold text-[10px] tracking-[0.18em] text-[#111] mt-1">NEWS</div>
</div>
<svg className="mt-[-2px]" fill="#E51937" height="22" viewbox="0 0 24 32" width="18">
<path d="M0 0 L12 16 L0 32 L8 32 L20 16 L8 0 Z"></path>
</svg>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>

<div className="flex flex-col text-[#E51937] font-serif-custom leading-[0.85] text-left uppercase tracking-tight font-semibold text-[20px] shrink-0">
<span>The</span>
<span>Globe</span>
<span>And</span>
<span className="flex items-center gap-1">Mail<svg className="w-3 h-3 fill-current" viewbox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3z"></path></svg></span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex items-center gap-3 shrink-0">
<svg fill="#E51937" height="36" viewbox="0 0 100 100" width="36">
<circle cx="50" cy="50" r="16"></circle>
<path d="M 50 28 C 37.85 28 28 37.85 28 50 L 12 50 C 12 29.01 29.01 12 50 12 Z"></path>
<path d="M 50 72 C 62.15 72 72 62.15 72 50 L 88 50 C 88 70.99 70.99 88 50 88 Z"></path>
<path d="M 28 50 C 28 62.15 37.85 72 50 72 L 50 88 C 29.01 88 12 70.99 12 50 Z"></path>
<path d="M 72 50 C 72 37.85 62.15 28 50 28 L 50 12 C 70.99 12 88 29.01 88 50 Z"></path>
</svg>
<span className="font-sans-custom font-semibold text-[26px] text-black tracking-tight">CBC</span>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex flex-col items-start font-sans-custom leading-tight shrink-0">
<div className="text-[#00529B] font-semibold text-[16px] tracking-tight">BNN</div>
<div className="text-[#231F20] font-semibold text-[22px] tracking-tighter -mt-1">Bloomberg</div>
<div className="text-[#231F20] font-normal text-[8px] tracking-[0.15em] mt-[1px]">RADIO 1410</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex flex-col font-sans-custom leading-none items-start shrink-0">
<div className="font-bold text-[32px] tracking-tighter text-[#111]">City</div>
<div className="font-bold italic text-[20px] tracking-tight text-[#111] ml-1">News</div>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
<div className="flex items-center gap-2 font-sans-custom shrink-0">
<div className="flex flex-col items-start leading-none">
<div className="font-bold text-[24px] tracking-tighter text-[#111]">Global</div>
<div className="font-semibold text-[10px] tracking-[0.18em] text-[#111] mt-1">NEWS</div>
</div>
<svg className="mt-[-2px]" fill="#E51937" height="22" viewbox="0 0 24 32" width="18">
<path d="M0 0 L12 16 L0 32 L8 32 L20 16 L8 0 Z"></path>
</svg>
</div>
<div className="flex flex-col items-center justify-center h-16 w-4 relative opacity-30 shrink-0">
<div className="w-[1px] h-full bg-[#2A3324]"></div>
<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 text-[#2A3324]" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5Z"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h2 className="reveal-text font-serif-custom text-4xl sm:text-5xl md:text-6xl tracking-tight font-normal leading-tight pr-0 md:pr-12"><span className="inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-[0.25em]"><span className="inline-block translate-y-[110%] reveal-word">AtVanguardis,wearecommittedtoengineeringprogressivehabitatsthatintegrateseamlesslywiththeirsurroundingswhiledefiningmodernlivingstandards.</span></span></h2>
<div className="mt-8">
<a className="text-lg uppercase tracking-widest border-b border-[#2A3324] pb-1 hover:opacity-70 transition-opacity" href="#">Our Studio</a>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-between">
<p className="text-lg text-[#2A3324]/80 mb-8 md:mb-0">
                        We pioneer a forward-thinking approach by fusing advanced structural engineering with ecological awareness. From passive thermal systems to the deliberate selection of regional materials, every endeavor is a testament to longevity and spatial harmony.
                    </p>

<div className="webgl-measure relative w-full h-48 mt-auto group cursor-pointer">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Interior detail" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7779de4b-5917-4029-a549-ad23ff8ff120_800w.webp"/>
</div>
<div className="absolute top-2 right-2 bg-[#2A3324] text-[#E3E7E0] p-2 rounded-sm group-hover:bg-[#5C715E] transition-colors flex items-center justify-center z-10">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div className="">
<span className="text-base uppercase tracking-widest text-[#2A3324]/70 block mb-6">Expertise</span>
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight font-normal">
                        Engineering Precision<br/>Solutions for Any Scale
                    </h2>
</div>
<a className="mt-6 md:mt-0 text-lg uppercase tracking-widest border-b border-[#2A3324] pb-1 hover:opacity-70 transition-opacity" href="#">Explore All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324]">
<span className="text-lg font-normal text-[#2A3324]/50 mb-6">01</span>
<h3 className="font-serif-custom text-3xl tracking-tight font-normal mb-8 pr-8 leading-tight">Spatial<br/>Architecture<br/>Design</h3>
<div className="mt-auto">
<p className="text-lg text-[#2A3324]/70 mb-8">We engineer structural frameworks that optimize spatial flow, light penetration, and material efficiency for modern demands.</p>
<div className="flex justify-start">
<button className="bg-[#2A3324] text-[#E3E7E0] p-3 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#5C715E]">
<span className="text-lg font-normal text-[#2A3324]/50 mb-6">02</span>
<h3 className="font-serif-custom text-3xl tracking-tight font-normal mb-8 pr-8 leading-tight">Ecological<br/>Integration<br/>Strategy</h3>
<div className="mt-auto">
<p className="text-lg text-[#2A3324]/70 mb-8">Our specialists provide blueprints for implementing passive energy systems and reducing overall structural carbon footprint.</p>
<div className="flex justify-end">
<button className="bg-[#5C715E] text-[#E3E7E0] p-3 hover:bg-[#2A3324] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-[#D5DBD1] p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324]">
<span className="text-lg font-normal text-[#2A3324]/50 mb-6">03</span>
<h3 className="font-serif-custom text-3xl tracking-tight font-normal mb-8 pr-8 leading-tight">Lifecycle<br/>Planning<br/>&amp; Execution</h3>
<div className="mt-auto">
<p className="text-lg text-[#2A3324]/70 mb-8">From initial schematics to final structural deployment, we manage the complete lifecycle of your architectural project.</p>
<div className="flex justify-end">
<button className="bg-[#5C715E] text-[#E3E7E0] p-3 hover:bg-[#2A3324] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="mb-12 md:mb-16">
<span className="text-base uppercase tracking-widest text-[#2A3324]/70">Client Perspectives</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="flex flex-col h-full">
<p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">"Vanguardis transformed our operational brief into a physical reality that exceeds all structural and aesthetic expectations."</p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Elena Rostova</p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60">Director, Nexus Corp</p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">"Their approach to passive thermal systems reduced our energy overhead drastically, without compromising the minimalist aesthetic we demanded."</p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Marcus Lin</p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60">Founder, Aura Developments</p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">"Uncompromising precision. The entire lifecycle planning executed by their studio was flawless from the initial sketches to deployment."</p>
<div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
<img alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Sarah Jenkins</p>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/60">VP Operations, Meridian</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-t border-[#C4CFC0]">
<div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center text-center overflow-hidden parallax-container">
<div className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full parallax-img">
<img alt="Architecture structural wood" className="w-full h-full object-cover brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1011c60a-8855-4004-9fb1-f4ec3c3c6c6f_1600w.webp"/>
</div>
<div className="relative z-10 text-[#E3E7E0] px-4">
<span className="text-base uppercase tracking-widest mb-4 block">Perspective</span>
<h2 className="font-serif-custom text-5xl md:text-7xl lg:text-8xl tracking-tight font-normal leading-tight">
                        Construct Your<br/>Masterpiece
                    </h2>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]">
<div className="flex justify-end mb-8">
<span className="text-base uppercase tracking-widest text-[#2A3324]/70">Metrics</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between">
<p className="text-lg text-[#2A3324]/80 mb-12 lg:pr-12">
                        Every structure we engineer reflects our dedication to establishing enduring, resilient habitats that accommodate future generations while respecting current topographies.
                    </p>

<div className="webgl-measure relative w-full h-64 md:h-80 mt-auto">
<div className="absolute inset-0 w-full h-full bg-transparent">
<img alt="Modern building structure" className="webgl-img w-full h-full object-cover mt-auto opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5299d143-9d4c-4971-8471-be515b29c79e_1600w.webp"/>
</div>
</div>
</div>
<div>
<h2 className="font-serif-custom text-4xl md:text-5xl tracking-tight font-normal mb-12">
                        Forward-Thinking Spaces,<br/>Engineered for Longevity
                    </h2>
<div className="flex flex-col text-lg">
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Execution Year</span>
<span className="font-normal">2024</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Total Floor Area</span>
<span className="font-normal">14,500 sq meters</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Locally Sourced Materials</span>
<span className="font-normal">85% by volume</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Thermal Efficiency Rating</span>
<span className="font-normal">A+ Certified</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Energy Autonomy</span>
<span className="font-normal">Solar Grid Integration</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0]">
<span className="text-[#2A3324]/70">Structural Lifespan Est.</span>
<span className="font-normal">120+ Years</span>
</div>
<div className="flex justify-between py-5 border-t border-[#C4CFC0] border-b">
<span className="text-[#2A3324]/70">Maintenance Reduction</span>
<span className="font-normal">30% lower overhead</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0] flex flex-col items-start relative">
<div className="flex justify-between w-full items-center mb-8">
<div className="flex gap-2">
<button className="bg-[#2A3324] text-[#E3E7E0] p-2 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="bg-[#2A3324] text-[#E3E7E0] p-2 hover:bg-[#5C715E] transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<a className="text-lg uppercase tracking-widest border-b border-[#2A3324] pb-1 hover:opacity-70 transition-opacity" href="#">Full Archive</a>
</div>
<div className="flex justify-between items-end w-full">
<h2 className="font-serif-custom text-6xl md:text-8xl lg:text-9xl tracking-tight font-normal leading-none z-10">
                    Initiate Your<br/>Next Structure
                </h2>
<div className="text-[#5C715E] hidden md:block z-10">
<iconify-icon className="text-8xl lg:text-9xl" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1px'}}></iconify-icon>
</div>
</div>

<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-1/2 h-full z-0 flex items-end justify-end overflow-hidden">
<svg className="w-[800px] h-[800px] stroke-[#2A3324] fill-none stroke-[0.2]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M10,90 L90,90 L90,10 L50,40 Z M30,90 L30,50 L70,50 L70,90"></path>
<line x1="10" x2="90" y1="10" y2="90"></line>
<line x1="10" x2="90" y1="30" y2="30"></line>
<line x1="10" x2="90" y1="50" y2="50"></line>
<line x1="10" x2="90" y1="70" y2="70"></line>
</svg>
</div>
</section>

<section className="py-16 md:py-24 border-t border-[#C4CFC0]" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
<div className="flex flex-col">
<span className="text-base uppercase tracking-widest text-[#2A3324]/70 block mb-6">Inquiries</span>
<h2 className="font-serif-custom text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal leading-tight mb-12">
                        Let's discuss<br/>your next project.
                    </h2>
<div className="flex flex-col gap-8 mt-auto">
<div>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/50 mb-2">Headquarters</p>
<p className="text-lg">124 Vanguard Way<br/>Architecture District<br/>London, UK</p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#2A3324]/50 mb-2">Direct Communications</p>
<a className="text-lg block hover:opacity-70 transition-opacity" href="mailto:studio@vanguardis.com">studio@vanguardis.com</a>
<a className="text-lg block hover:opacity-70 transition-opacity mt-1" href="tel:+442012345678">+44 20 1234 5678</a>
</div>
</div>
</div>
<div className="bg-[#D5DBD1] p-8 md:p-12 border-t-2 border-[#2A3324] flex flex-col justify-center">
<form className="flex flex-col gap-8">
<div className="relative">
<input className="w-full bg-transparent border-b border-[#2A3324]/30 py-4 text-base focus:outline-none focus:border-[#2A3324] transition-colors placeholder-[#2A3324]/50" id="name" placeholder="Full Name" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-[#2A3324]/30 py-4 text-base focus:outline-none focus:border-[#2A3324] transition-colors placeholder-[#2A3324]/50" id="email" placeholder="Email Address" type="email"/>
</div>

<div className="relative group cursor-pointer">
<div className="w-full bg-transparent border-b border-[#2A3324]/30 py-4 flex items-center justify-between group-hover:border-[#2A3324] transition-colors">
<span className="text-base text-[#2A3324]/50 group-hover:text-[#2A3324] transition-colors">Project Type</span>
<iconify-icon className="text-xl text-[#2A3324]/50 group-hover:text-[#2A3324] transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-[#2A3324]/30 py-4 text-base focus:outline-none focus:border-[#2A3324] transition-colors resize-none placeholder-[#2A3324]/50" id="message" placeholder="Brief Description" rows="3"></textarea>
</div>
<button className="mt-4 bg-[#2A3324] text-[#E3E7E0] py-4 px-6 text-sm uppercase tracking-widest hover:bg-[#5C715E] transition-colors flex justify-between items-center w-full group" type="button">
                            Submit Inquiry
                            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</div>

<footer className="bg-[#2A3324] text-[#E3E7E0] pt-16 md:pt-24 pb-8 relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div>
<h3 className="font-serif-custom text-3xl md:text-4xl tracking-tight font-normal mb-6">Vanguardis</h3>
<p className="text-lg text-[#E3E7E0]/70 max-w-sm font-light">
                        We engage in forging advanced habitats by merging progressive structural engineering with conscious material application.
                    </p>
</div>
<div className="flex md:justify-end items-end opacity-10 pointer-events-none select-none mt-12 md:mt-0">
<h3 className="font-serif-custom text-8xl md:text-9xl leading-none tracking-tight">Vanguardis</h3>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#E3E7E0]/20 text-base uppercase tracking-widest text-[#E3E7E0]/60">
<nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6 md:mb-0">
<a className="hover:text-[#E3E7E0] transition-colors" href="#">Studio</a>
<a className="hover:text-[#E3E7E0] transition-colors" href="#">Expertise</a>
<a className="hover:text-[#E3E7E0] transition-colors" href="#">Vision</a>
<a className="hover:text-[#E3E7E0] transition-colors" href="#">Portfolio</a>
<a className="hover:text-[#E3E7E0] transition-colors" href="#">Journal</a>
</nav>
<p>© 2024 Vanguardis Ltd.</p>
</div>
</div>
</footer>

<canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas><canvas height="1538" style={{position: 'fixed', top: '0px', left: '0px', width: '1000px', height: '769px', pointerEvents: 'none', zIndex: '1'}} width="2000"></canvas>

    </>
  );
}
