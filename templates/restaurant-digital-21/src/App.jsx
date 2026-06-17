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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
oswald: ['Oswald', 'sans-serif'],
},
colors: {
accent: '#B08D6A',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuLines = menuBtn.querySelectorAll('.menu-line');
        let menuOpen = false;

        function toggleMenu() {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('open', menuOpen);
            menuOverlay.classList.toggle('open', menuOpen);
            document.body.style.overflow = menuOpen ? 'hidden' : '';
            
            if (menuOpen) {
                menuLines[0].style.transform = 'rotate(45deg) translateY(3px)';
                menuLines[1].style.transform = 'rotate(-45deg) translateY(-3px)';
            } else {
                menuLines[0].style.transform = '';
                menuLines[1].style.transform = '';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);

        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                if (menuOpen) toggleMenu();
            });
        });

        // GSAP Reveal
        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            document.querySelectorAll('.reveal-text').forEach(el => {
                const originalText = el.textContent.trim();
                const words = originalText.split(/\s+/).filter(w => w.length > 0);
                el.innerHTML = '';

                words.forEach((word, i) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'word-mask-wrapper';
                    const inner = document.createElement('span');
                    inner.className = 'word-mask-inner';
                    inner.textContent = word;
                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                    if (i < words.length - 1) {
                        el.appendChild(document.createTextNode(' '));
                    }
                });

                gsap.to(el.querySelectorAll('.word-mask-inner'), {
                    y: '0%',
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.04,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true
                    }
                });
            });
        });

        // Nav Scroll
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y > 50) {
                nav.classList.add('bg-stone-900/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
                nav.querySelector('div').style.paddingTop = '0.75rem';
                nav.querySelector('div').style.paddingBottom = '0.75rem';
            } else {
                nav.classList.remove('bg-stone-900/80', 'backdrop-blur-xl', 'border-b', 'border-white/5');
                nav.querySelector('div').style.paddingTop = '';
                nav.querySelector('div').style.paddingBottom = '';
            }
        });

        // WebGL Background
        const initWebGL = () => {
            const canvas = document.getElementById('webgl-bg');
            if (!canvas || typeof THREE === 'undefined') return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 5, 20);
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

            const geometry = new THREE.PlaneGeometry(60, 40, 50, 35);
            geometry.rotateX(-Math.PI / 2);

            const vertexShader = `
                varying vec2 vUv; varying float vElevation; uniform float uTime;
                vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
                vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
                vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
                float snoise(vec2 v){
                    const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
                    vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);
                    vec2 i1;i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
                    vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);
                    vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
                    vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
                    m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);
                    vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
                    vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;
                    return 130.0*dot(m,g);
                }
                void main(){
                    vUv=uv;vec3 pos=position;
                    float elevation=snoise(vec2(pos.x*0.1+uTime*0.05,pos.z*0.1-uTime*0.05))*3.0;
                    elevation+=snoise(vec2(pos.x*0.3-uTime*0.02,pos.z*0.3+uTime*0.08))*1.0;
                    pos.y+=elevation;vElevation=elevation;
                    gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
                }
            `;

            const fragmentShader = `
                varying vec2 vUv;varying float vElevation;
                void main(){
                    vec3 deepColor=vec3(0.1,0.1,0.08);
                    vec3 highColor=vec3(0.69,0.55,0.41);
                    float mixStrength=(vElevation+3.0)/6.0;
                    vec3 finalColor=mix(deepColor,highColor,smoothstep(0.0,1.0,mixStrength)*0.5);
                    float haze=smoothstep(0.4,1.0,vUv.y);
                    finalColor=mix(finalColor,vec3(0.11,0.11,0.1),haze*0.9);
                    gl_FragColor=vec4(finalColor,1.0);
                }
            `;

            const material = new THREE.ShaderMaterial({
                vertexShader, fragmentShader,
                uniforms: { uTime: { value: 0 } },
                wireframe: false
            });
            const plane = new THREE.Mesh(geometry, material);
            plane.position.y = -5;
            scene.add(plane);

            const clock = new THREE.Clock();
            const tick = () => {
                material.uniforms.uTime.value = clock.getElapsedTime();
                camera.position.x = Math.sin(clock.getElapsedTime() * 0.2) * 2;
                camera.lookAt(0, 0, 0);
                renderer.render(scene, camera);
                requestAnimationFrame(tick);
            };
            tick();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            });
        };
        initWebGL();

        // Carousel
        const trk = document.getElementById('carTrack');
        const out = document.getElementById('carOuter');
        const dots = document.querySelectorAll('.car-dot');
        let ci = 0, drag = false, sx = 0;

        const getCardWidth = () => {
            const card = trk.querySelector('.icard');
            if (!card) return 0;
            return card.offsetWidth + 16; // gap is 1rem = 16px
        };

        const getMaxIndex = () => {
            const cards = trk.querySelectorAll('.icard');
            const visibleWidth = out.offsetWidth;
            const cardW = getCardWidth();
            if (cardW === 0) return 0;
            const visibleCards = Math.max(1, Math.floor(visibleWidth / cardW));
            return Math.max(0, cards.length - visibleCards);
        };

        const goTo = (i) => {
            const max = getMaxIndex();
            ci = Math.max(0, Math.min(i, max));
            trk.style.transform = `translateX(-${ci * getCardWidth()}px)`;
            dots.forEach((d, j) => {
                if (j === ci) {
                    d.classList.remove('w-1.5', 'sm:w-2', 'bg-stone-300');
                    d.classList.add('w-6', 'sm:w-8', 'bg-stone-800');
                } else {
                    d.classList.remove('w-6', 'sm:w-8', 'bg-stone-800');
                    d.classList.add('w-1.5', 'sm:w-2', 'bg-stone-300');
                }
            });
        };

        document.getElementById('nextBtn').onclick = () => goTo(ci + 1);
        document.getElementById('prevBtn').onclick = () => goTo(ci - 1);
        dots.forEach(d => d.addEventListener('click', () => goTo(+d.dataset.i)));

        out.addEventListener('mousedown', e => { drag = true; sx = e.clientX; out.style.cursor = 'grabbing'; });
        window.addEventListener('mousemove', e => {
            if (!drag) return;
            const d = sx - e.clientX;
            if (Math.abs(d) > 55) { drag = false; out.style.cursor = 'grab'; goTo(d > 0 ? ci + 1 : ci - 1); }
        });
        window.addEventListener('mouseup', () => { drag = false; out.style.cursor = 'grab'; });

        out.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
        out.addEventListener('touchend', e => {
            const d = sx - e.changedTouches[0].clientX;
            if (Math.abs(d) > 40) goTo(d > 0 ? ci + 1 : ci - 1);
        }, { passive: true });

        window.addEventListener('resize', () => goTo(ci));

        // Simulator Logic
        const state = {
            vitrine:      { p: 500, m: 0,  n: 'Site vitrine premium',         on: true  },
            clickcollect: { p: 500, m: 0,  n: 'Click & Collect',              on: false },
            reservation:  { p: 250, m: 0,  n: 'Réservation en ligne',         on: false },
            fidelite:     { p: 300, m: 0,  n: 'Module Fidélité',              on: false },
            avis:         { p: 200, m: 0,  n: 'Avis & Réputation',            on: false },
            newsletter:   { p: 200, m: 0,  n: 'Newsletter / SMS',             on: false },
            hebergement:  { p: 300, m: 25, n: 'Hébergement & Maintenance/an', on: false },
        };

        function tog(row) {
            const id = row.dataset.id;
            if (!state[id] || id === 'vitrine') return;
            state[id].on = !state[id].on;
            row.classList.toggle('selected');
            renderSim();
        }

        document.querySelectorAll('a[data-resto-link="true"]').forEach(btn => {
            btn.addEventListener('click', () => {
                setTimeout(() => {
                    const cc = document.querySelector('[data-id="clickcollect"]');
                    const res = document.querySelector('[data-id="reservation"]');
                    if (cc && !state.clickcollect.on) { state.clickcollect.on = true; cc.classList.add('selected'); }
                    if (res && !state.reservation.on) { state.reservation.on = true; res.classList.add('selected'); }
                    renderSim();
                }, 300);
            });
        });

        function fmt(n) { return n.toLocaleString('fr-FR') + ' €'; }

        function renderSim() {
            const list = document.getElementById('sumList');
            list.innerHTML = '';

            const sr = document.createElement('div');
            sr.className = 'flex justify-between items-center text-xs sm:text-sm mb-2 pb-2 border-b border-stone-100 border-dashed';
            sr.innerHTML = '<span class="text-stone-500 font-light">Setup & Configuration</span><span class="text-accent font-normal">Offert ✓</span>';
            list.appendChild(sr);

            let sub = 0, monthly = 0;
            Object.entries(state).forEach(([key, o]) => {
                if (!o.on) return;
                sub += o.p;
                monthly += o.m;
                const r = document.createElement('div');
                r.className = 'flex justify-between items-center text-xs sm:text-sm';
                r.innerHTML = `<span class="text-stone-600 font-light">${o.n}</span><span class="text-stone-900 font-normal">${fmt(o.p)}</span>`;
                list.appendChild(r);
            });

            const tvaVal = Math.round(sub * 0.2);
            const ttcVal = sub + tvaVal;

            document.getElementById('subtotal').textContent = fmt(sub);
            document.getElementById('tva').textContent = fmt(tvaVal);

            const ttcEl = document.getElementById('ttc');
            ttcEl.textContent = fmt(ttcVal);
            ttcEl.style.color = '#B08D6A';
            setTimeout(() => { ttcEl.style.color = ''; }, 400);

            const mRow = document.getElementById('mRow');
            const mNote = document.getElementById('mNote');
            if (monthly > 0) {
                mRow.style.display = 'flex';
                document.getElementById('mVal').textContent = monthly + ' €/mois';
                mNote.textContent = 'Dont ' + (monthly * 12) + ' €/an de maintenance récurrente.';
            } else {
                mRow.style.display = 'none';
                mNote.textContent = '';
            }

            const roiBlock = document.getElementById('roiBlock');
            if (state.clickcollect.on) {
                roiBlock.classList.remove('hidden');
            } else {
                roiBlock.classList.add('hidden');
            }

            const btn = document.getElementById('ctaBtn');
            btn.disabled = sub === 0;
            btn.textContent = sub > 0 ? `Valider mon devis — ${fmt(ttcVal)}` : 'Sélectionnez des options';
        }

        renderSim();
    
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
      

<header className="fixed z-[100] w-full top-0 left-0 right-0 transition-all duration-300" id="navbar">
<div className="max-w-[87.5rem] mx-auto px-4 sm:px-6 md:px-12 py-4 sm:py-6 flex items-center justify-between" style={{paddingTop: '0.75rem', paddingBottom: '0.75rem'}}>
<a className="uppercase select-none text-lg sm:text-xl font-normal text-white tracking-tighter z-[110]" href="#">LaVision<span className="text-accent">.</span></a>

<nav className="hidden md:flex items-center gap-8 text-sm font-light text-stone-300 tracking-wide bg-stone-900/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5">
<a className="hover:text-white transition-colors duration-300" href="#expertises">Expertises</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#notion">Notion &amp; IA</a>
</nav>

<a className="hidden sm:flex items-center gap-2 bg-white text-stone-900 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-normal tracking-tight hover:bg-stone-200 transition-colors duration-300" href="#simulateur">
                Estimer un projet
            </a>

<button aria-label="Menu" className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5" id="menuBtn">
<span className="menu-line w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"></span>
<span className="menu-line w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"></span>
</button>
</div>
</header>

<div className="mobile-menu-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-[101]" id="menuOverlay"></div>

<div className="mobile-menu fixed top-0 right-0 w-[75%] max-w-[320px] h-full bg-stone-900 border-l border-white/10 z-[102] flex flex-col pt-20 px-6 pb-8" id="mobileMenu">
<nav className="flex flex-col gap-1">
<a className="mobile-link text-lg font-light text-stone-200 py-3 border-b border-white/5 hover:text-white transition-colors" href="#expertises">Expertises</a>
<a className="mobile-link text-lg font-light text-stone-200 py-3 border-b border-white/5 hover:text-white transition-colors" href="#services">Services</a>
<a className="mobile-link text-lg font-light text-stone-200 py-3 border-b border-white/5 hover:text-white transition-colors" href="#notion">Notion &amp; IA</a>
<a className="mobile-link text-lg font-light text-stone-200 py-3 border-b border-white/5 hover:text-white transition-colors" href="#simulateur">Simulateur</a>
<a className="mobile-link text-lg font-light text-stone-200 py-3 hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="mt-auto">
<a className="mobile-link flex items-center justify-center gap-2 w-full bg-white text-stone-900 py-3 rounded-full text-sm font-normal" href="#simulateur">
                Estimer un projet
            </a>
</div>
</div>

<main className="min-h-screen flex flex-col overflow-hidden w-full relative items-center justify-between">
<canvas className="absolute inset-0 z-0 pointer-events-none w-full h-full" height="1037" id="webgl-bg" style={{width: '1440px', height: '1037px'}} width="1440"></canvas>
<div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-stone-900 via-stone-900/40 to-stone-900/10 mix-blend-multiply"></div>
<div className="absolute top-[22%] sm:top-[25%] left-0 w-full z-10 pointer-events-none flex flex-col items-start px-4 sm:px-6 md:px-12 select-none">
<h1 className="font-oswald text-[14vw] sm:text-[13vw] md:text-[12vw] leading-[0.85] tracking-tighter text-white/90 uppercase drop-shadow-2xl">Infrastructure</h1>
<h1 className="font-oswald text-[14vw] sm:text-[13vw] md:text-[12vw] leading-[0.85] tracking-tighter text-white/95 uppercase ml-[3vw] sm:ml-[5vw] md:ml-[15vw] drop-shadow-2xl text-accent/90">Digitale</h1>
</div>

<div className="relative z-30 w-full max-w-[87.5rem] mx-auto flex-1 pointer-events-none flex flex-col justify-center">
<div className="hidden xl:flex absolute left-12 top-[45%] flex-col gap-4 pointer-events-auto w-64 p-px rounded-xl bg-gradient-to-br from-stone-400/50 via-stone-600/20 to-transparent shadow-2xl backdrop-blur-md float-anim">
<div className="w-full h-full bg-[#8E7B68]/90 rounded-[0.7rem] p-5 flex flex-col relative overflow-hidden">
<button className="absolute top-4 right-4 text-stone-200 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
<div className="w-20 h-20 mx-auto mb-4 bg-stone-900/20 rounded-full flex items-center justify-center border border-white/10 p-4">
<iconify-icon className="text-stone-200" height="30" icon="solar:cpu-bolt-linear" width="30"></iconify-icon>
</div>
<p className="text-xs text-stone-100 font-light leading-relaxed text-center">Automatisation des processus via agents IA &amp; APIs.</p>
</div>
</div>
<div className="hidden xl:flex absolute right-12 bottom-[25%] w-80 p-px rounded-xl bg-gradient-to-br from-white/30 via-white/5 to-transparent shadow-2xl backdrop-blur-xl pointer-events-auto float-anim" style={{animationDelay: '2s'}}>
<div className="w-full h-full bg-white/10 rounded-[0.7rem] p-5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-stone-900/60 to-stone-900/90 -z-10"></div>
<span className="inline-block px-2 py-0.5 bg-accent text-xs font-normal uppercase tracking-wider text-white rounded-full mb-3">Notion System</span>
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-light tracking-tight text-white mb-1">Pilotez votre CA</h3>
<p className="text-xs text-stone-300 font-light">Tableaux de bord connectés en temps réel.</p>
</div>
<iconify-icon className="text-stone-300" height="24" icon="solar:database-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="relative z-40 w-full px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pointer-events-auto">
<div className="sm:pt-8 flex flex-col md:flex-row md:items-end sm:gap-8 border-white/10 border-t pt-6 relative gap-x-6 gap-y-6 items-start justify-between">
<div className="w-full md:w-1/3 flex items-start justify-start gap-3 sm:gap-4">
<iconify-icon className="shrink-0 text-stone-400 mt-0.5" height="24" icon="solar:code-square-linear" style={{color: 'rgb(168, 162, 158)'}} width="24"></iconify-icon>
<p className="text-xs text-stone-400 max-w-[14rem] leading-relaxed font-light">Studio Digital Premium — Paris.<br/>Sites web, écosystèmes Notion et moteurs de croissance.</p>
</div>
<div className="w-full md:w-1/2 max-w-lg md:text-right">
<p className="text-lg sm:text-xl md:text-3xl font-light tracking-tight leading-tight text-white reveal-text"><span className="word-mask-wrapper"><span className="word-mask-inner">Nous</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">ne</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">créons</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">pas</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">de</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">simples</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">sites.</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">Nous</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">concevons</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">des</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">machines</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">à</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">convertir</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">!</span></span></p>
</div>
</div>
</div>
</main>

<div className="py-3 sm:py-4 border-y border-white/5 bg-stone-950/50 backdrop-blur-sm relative z-20 overflow-hidden">
<div className="marquee-track flex gap-8 sm:gap-12 items-center">
<div className="flex items-center gap-8 sm:gap-12 text-[10px] sm:text-xs font-light tracking-widest uppercase text-stone-400">
<span>Notion Automatisé</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Sites Premium</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Click &amp; Collect</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span className="">IA &amp; Automatisation</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>CRM Sur-Mesure</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Prospection IA</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>SEO Local</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
</div>
<div className="flex items-center gap-8 sm:gap-12 text-[10px] sm:text-xs font-light tracking-widest uppercase text-stone-400">
<span>Notion Automatisé</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Sites Premium</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Click &amp; Collect</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>IA &amp; Automatisation</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>CRM Sur-Mesure</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>Prospection IA</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
<span>SEO Local</span><span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent flex-shrink-0"></span>
</div>
</div>
</div>

<section className="relative bg-[#F5F4F0] text-stone-900 antialiased overflow-hidden flex flex-col items-center pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-12 z-20" id="expertises">
<div className="absolute inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(circle at 50% 0%, rgba(176, 141, 106, 0.12) 0%, transparent 60%)'}}></div>
<div className="z-10 w-full max-w-[85rem] relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-6 mb-10 sm:mb-16">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md mb-4 sm:mb-6">
<div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
<iconify-icon className="text-accent" height="12" icon="solar:buildings-linear" width="12"></iconify-icon>
</div>
<span className="text-xs font-normal text-stone-700 tracking-wide uppercase">Secteurs</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight reveal-text"><span className="word-mask-wrapper"><span className="word-mask-inner">Nos</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">expertises</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">sectorielles.</span></span></h2>
</div>
<p className="text-sm text-stone-500 font-light max-w-sm leading-relaxed reveal-text"><span className="word-mask-wrapper"><span className="word-mask-inner">Des</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">solutions</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">digitales</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">sur-mesure</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">pour</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">chaque</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">secteur</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">d'activité,</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">conçues</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">pour</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">dominer</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">votre</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">marché.</span></span></p>
</div>

<div className="carousel-outer" id="carOuter" style={{cursor: 'grab'}}>
<div className="carousel-track" id="carTrack">

<div className="icard bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative group overflow-hidden transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 flex flex-col">
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
</div>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 sm:mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent/10 group-hover:border-accent/20">
<iconify-icon height="22" icon="solar:shop-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] sm:text-xs font-normal tracking-widest text-accent uppercase mb-2 sm:mb-3">01 / Restauration</span>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900 mb-3 sm:mb-4">Digitalisez votre établissement.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light mb-4 sm:mb-6 flex-1">Plateformes digitales complètes pour les restaurants qui veulent contrôler leur croissance sans les 30% de commissions.</p>
<ul className="flex flex-col gap-2 sm:gap-3 text-sm font-light text-stone-600 mb-6 sm:mb-8 border-l-2 border-accent/20 pl-4">
<li className="">Réservation en ligne auto</li>
<li className="">Click &amp; Collect (0% com)</li>
<li className="">Marketing SMS &amp; Email</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-normal text-stone-900 group-hover:text-accent transition-colors pb-1 border-b border-stone-200 group-hover:border-accent w-max" data-resto-link="true" href="#simulateur">
                            Estimer mon projet <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="icard bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative group overflow-hidden transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 flex flex-col">
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
</div>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 sm:mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent/10 group-hover:border-accent/20">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] sm:text-xs font-normal tracking-widest text-accent uppercase mb-2 sm:mb-3">02 / TPE &amp; PME</span>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900 mb-3 sm:mb-4">Automatisez vos opérations.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light mb-4 sm:mb-6 flex-1">Espaces Notion sur-mesure connectés à vos outils métiers et agents IA qui prospectent des clients pour vous, 24h/24.</p>
<ul className="flex flex-col gap-2 sm:gap-3 text-sm font-light text-stone-600 mb-6 sm:mb-8 border-l-2 border-accent/20 pl-4">
<li className="">Espaces Notion automatisés</li>
<li>Agents IA de prospection</li>
<li className="">Tableaux de bord de pilotage</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-normal text-stone-900 group-hover:text-accent transition-colors pb-1 border-b border-stone-200 group-hover:border-accent w-max" href="#contact">
                            Découvrir nos solutions <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="icard bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative group overflow-hidden transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 flex flex-col">
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
</div>
<div className="sm:w-14 sm:h-14 sm:rounded-2xl flex sm:mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent/10 group-hover:border-accent/20 text-[#8E7B68] bg-stone-50 w-12 h-12 border-stone-100 border rounded-xl mb-4 items-center justify-center">
<iconify-icon height="22" icon="lucide:hard-hat" width="22"></iconify-icon>
</div>
<span className="text-[10px] sm:text-xs font-normal tracking-widest text-accent uppercase mb-2 sm:mb-3">03 / BTP &amp; Construction</span>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900 mb-3 sm:mb-4">Valorisez votre expertise.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light mb-4 sm:mb-6 flex-1">Transformez vos chantiers en actif marketing puissant. Site vitrine, portfolio projets et génération de leads locale.</p>
<ul className="flex flex-col gap-2 sm:gap-3 text-sm font-light text-stone-600 mb-6 sm:mb-8 border-l-2 border-accent/20 pl-4">
<li>SEO local ciblé</li>
<li>Études de cas avant/après</li>
<li>Système de devis en ligne</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-normal text-stone-900 group-hover:text-accent transition-colors pb-1 border-b border-stone-200 group-hover:border-accent w-max" href="#contact">
                            Générer des chantiers <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="icard bg-white border border-stone-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative group overflow-hidden transition-all duration-500 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5 flex flex-col">
<div className="absolute top-0 inset-x-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"></div>
</div>
<div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-4 sm:mb-6 text-[#8E7B68] group-hover:scale-110 transition-transform duration-500 group-hover:bg-accent/10 group-hover:border-accent/20">
<iconify-icon height="22" icon="solar:laptop-linear" width="22"></iconify-icon>
</div>
<span className="text-[10px] sm:text-xs font-normal tracking-widest text-accent uppercase mb-2 sm:mb-3">04 / Tech &amp; Startups</span>
<h3 className="text-xl sm:text-2xl font-normal tracking-tight text-stone-900 mb-3 sm:mb-4">Infrastructures agiles.</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light mb-4 sm:mb-6 flex-1">Sites ultra-modernes, rapides et scalables. Tunnels d'acquisition conçus pour convertir et lever des fonds.</p>
<ul className="flex flex-col gap-2 sm:gap-3 text-sm font-light text-stone-600 mb-6 sm:mb-8 border-l-2 border-accent/20 pl-4">
<li>Landing pages SaaS</li>
<li>Tunnels d'acquisition</li>
<li>Expériences interactives</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-normal text-stone-900 group-hover:text-accent transition-colors pb-1 border-b border-stone-200 group-hover:border-accent w-max" href="#contact">
                            Lancer un produit <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-6 sm:mt-8 px-1">
<div className="flex gap-1.5 sm:gap-2" id="carDots">
<div className="w-6 sm:w-8 h-1.5 rounded-full bg-stone-800 transition-all duration-300 cursor-pointer car-dot active" data-i="0"></div>
<div className="w-1.5 sm:w-2 h-1.5 rounded-full bg-stone-300 transition-all duration-300 cursor-pointer car-dot" data-i="1"></div>
<div className="w-1.5 sm:w-2 h-1.5 rounded-full bg-stone-300 transition-all duration-300 cursor-pointer car-dot" data-i="2"></div>
<div className="w-1.5 sm:w-2 h-1.5 rounded-full bg-stone-300 transition-all duration-300 cursor-pointer car-dot" data-i="3"></div>
</div>
<div className="flex gap-2 sm:gap-3">
<button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all active:scale-95" id="prevBtn">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all active:scale-95" id="nextBtn">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="bg-stone-950 pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 border-t border-stone-800 relative z-20 overflow-hidden" id="notion">
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 md:px-12 relative">
<div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] gap-4 sm:gap-6 md:gap-16 z-10 pb-10 sm:pb-16 relative items-start md:items-end">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-2 mb-4 sm:mb-6 bg-white/[0.02] border border-white/[0.05] px-3 py-1.5 rounded-full backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(176,141,106,0.8)] animate-pulse"></span>
<span className="text-[10px] sm:text-xs text-stone-400 tracking-[0.15em] sm:tracking-[0.2em] font-light uppercase">Systèmes Intelligents</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-white/90 leading-tight reveal-text"><span className="word-mask-wrapper"><span className="word-mask-inner">Pilotez</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">votre</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">entreprise</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">avec</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">Notion</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">&amp;</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">l'IA.</span></span></h2>
</div>
<p className="text-sm text-stone-400 font-light leading-relaxed text-left md:pb-2 reveal-text mt-2 md:mt-0"><span className="word-mask-wrapper"><span className="word-mask-inner">Espaces</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">Notion</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">entièrement</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">automatisés</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">connectés</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">à</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">vos</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">outils.</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">Nos</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">agents</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">IA</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">prospectent</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">des</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">clients</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">pour</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">vous,</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">qualifient</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">les</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">leads</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">et</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">alimentent</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">votre</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">CRM</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">—</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">en</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">automatique,</span></span> <span className="word-mask-wrapper"><span className="word-mask-inner">24h/24.</span></span></p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 z-10 mb-8 relative">

<div className="bg-stone-900/80 border border-stone-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-stone-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-stone-500/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-base sm:text-lg font-light tracking-tight text-white/90 mt-1 max-w-md">
                            Centralisation des données et workflows automatisés sur Notion.
                        </h3>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-lg sm:rounded-xl overflow-hidden flex flex-col relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">

<div className="flex flex-col sm:flex-row">
<div className="w-full sm:w-[40%] border-b sm:border-b-0 sm:border-r border-white/5 flex flex-col bg-white/[0.01]">
<div className="p-3 sm:p-4 border-b border-white/5 flex justify-between items-center bg-stone-900/40">
<span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest font-light">Bases Actives</span>
<span className="text-[10px] sm:text-xs bg-accent/10 text-accent border border-accent/20 px-1.5 py-0.5 rounded font-mono">SYNC</span>
</div>
<div className="flex-1 overflow-hidden p-2 sm:p-3 flex flex-col gap-1.5">
<div className="p-2 sm:p-2.5 rounded-lg border border-white/5 bg-white/[0.03] flex items-center justify-between shadow-sm">
<div className="flex items-center gap-2 sm:gap-3">
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)] relative z-10"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-200 font-light">CRM_Clients</span>
<span className="text-[10px] sm:text-xs text-stone-500 font-mono">Stripe API</span>
</div>
</div>
<iconify-icon className="text-emerald-400/70 hidden sm:block" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div className="p-2 sm:p-2.5 rounded-lg border border-transparent flex items-center justify-between">
<div className="flex items-center gap-2 sm:gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light">Projets_Actifs</span>
<span className="text-[10px] sm:text-xs text-stone-600 font-mono">Make/Zapier</span>
</div>
</div>
<iconify-icon className="text-stone-600 hidden sm:block" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="p-2 sm:p-2.5 rounded-lg border border-transparent flex items-center justify-between">
<div className="flex items-center gap-2 sm:gap-3">
<div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_5px_rgba(176,141,106,0.5)]"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-stone-400 font-light">Trésorerie</span>
<span className="text-[10px] sm:text-xs text-stone-600 font-mono">Qonto API</span>
</div>
</div>
<iconify-icon className="text-stone-600 hidden sm:block" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
</div>
<div className="w-full sm:w-[60%] flex flex-col relative z-10">
<div className="flex p-3 sm:p-4 border-b border-white/5 gap-3 sm:gap-4 bg-stone-900/20">
<div className="flex-1 flex flex-col gap-1">
<span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest font-light">Tâches Auto</span>
<div className="flex items-end gap-1.5">
<span className="text-xl sm:text-2xl text-white/90 font-normal tracking-tight leading-none">1.2k</span>
<span className="text-[10px] sm:text-xs text-emerald-400 font-mono mb-0.5">/mois</span>
</div>
</div>
<div className="w-px bg-white/5"></div>
<div className="flex-1 flex flex-col gap-1.5 justify-center">
<button className="bg-white text-stone-900 text-xs px-3 py-2 rounded font-medium hover:bg-stone-200 transition-colors w-full">Ouvrir Workspace</button>
</div>
</div>
<div className="p-4 flex-1 flex flex-col justify-end relative overflow-hidden min-h-[100px] sm:min-h-[140px] items-center text-center">
<iconify-icon className="text-stone-800 mb-2" height="40" icon="solar:infinity-linear" width="40"></iconify-icon>
<p className="text-[10px] sm:text-xs text-stone-500 font-light">Flux de données continu entre vos applications et Notion.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-stone-900/80 border border-stone-800/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 relative overflow-hidden group hover:border-stone-700/80 transition-colors">
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-colors"></div>
<div className="relative z-10">
<h3 className="text-base sm:text-lg font-normal tracking-tight text-white/90">Agent IA de Prospection</h3>
<p className="text-xs sm:text-sm text-stone-400 font-light mt-1 max-w-md">Scraping ciblé, qualification des leads par IA et séquences d'emails ultra-personnalisées.</p>
</div>
<div className="flex-1 bg-stone-950/80 border border-white/5 rounded-lg sm:rounded-xl overflow-hidden flex flex-col relative shadow-[0_4px_30px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
<div className="flex flex-col sm:flex-row">

<div className="w-full sm:w-[45%] border-b sm:border-b-0 sm:border-r border-white/5 flex items-center justify-center relative p-6 sm:p-8 bg-[radial-gradient(circle_at_center,rgba(176,141,106,0.03)_0%,transparent_70%)]">
<span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs text-stone-500 font-mono tracking-widest border border-white/5 bg-white/[0.02] px-1.5 py-0.5 rounded">AGENT::ACTIF</span>
<div className="relative w-28 h-28 sm:w-36 sm:h-36">
<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-[25%] border border-white/10 rounded-full flex items-center justify-center bg-accent/5">
<iconify-icon className="text-accent animate-pulse" height="26" icon="solar:robot-linear" width="26"></iconify-icon>
</div>
<div className="absolute top-[10%] right-[15%] w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="absolute bottom-[15%] left-[20%] w-1.5 h-1.5 bg-stone-400 rounded-full"></div>
<div className="absolute inset-0 rounded-full border-r border-accent/50 animate-[spin_4s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 60%, rgba(176,141,106,0.15) 100%)', mixBlendMode: 'screen'}}></div>
</div>
</div>

<div className="w-full sm:w-[55%] flex flex-col bg-stone-900/20">
<div className="p-3 sm:p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest font-light">Pipeline IA</span>
<span className="text-[10px] sm:text-xs text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">+3 Leads</span>
</div>
<div className="flex-1 overflow-hidden p-2 sm:p-3 flex flex-col gap-2 relative z-10">
<div className="p-2.5 sm:p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20 flex flex-col gap-1.5 sm:gap-2 relative shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<span className="text-[10px] sm:text-xs text-emerald-400 font-light">Réponse positive</span>
</div>
<span className="text-[10px] sm:text-xs text-stone-500 font-mono">10m</span>
</div>
<span className="text-[10px] sm:text-xs text-stone-400 font-light truncate">"Dispo pour un appel jeudi à 14h."</span>
</div>
<div className="p-2.5 sm:p-3 rounded-lg bg-white/[0.03] border border-white/10 flex flex-col gap-1.5 sm:gap-2 relative">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
<span className="text-[10px] sm:text-xs text-accent font-light">Email envoyé</span>
</div>
<span className="text-[10px] sm:text-xs text-stone-500 font-mono">1h</span>
</div>
<span className="text-[10px] sm:text-xs text-stone-400 font-light truncate">Séquence 1 : Directeur Marketing</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="relative overflow-hidden bg-stone-950 text-stone-300 border-t border-white/5" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(176,141,106,0.05),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.02),transparent_22%)]"></div>
</div>
<div className="sm:px-6 md:px-12 sm:pt-20 lg:pt-32 sm:pb-10 lg:pb-16 max-w-[85rem] mr-auto ml-auto pt-12 pr-4 pb-6 pl-4 relative">
<div className="border border-white/10 bg-white/5 backdrop-blur-sm px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 rounded-xl sm:rounded-2xl lg:rounded-3xl">
<div className="flex flex-col lg:grid lg:grid-cols-[0.4fr_1fr] gap-8 lg:gap-16 items-start lg:items-end">
<div className="">
<div className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-widest text-stone-400 mb-4 sm:mb-6">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-accent"></span>
                            Démarrer
                        </div>
<p className="max-w-[15rem] text-xs leading-relaxed text-stone-400 font-light">
                            Votre site ne devrait pas être une simple dépense. Il doit être le moteur de votre croissance.
                        </p>
</div>
<div className="">
<h2 className="font-oswald text-white tracking-tighter leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl uppercase">
<span className="block text-stone-400">Construisons votre</span>
<span className="block">Infrastructure <span className="text-accent">Digitale</span></span>
<span className="block text-stone-400">Dès aujourd'hui.</span>
</h2>
<p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-stone-400 font-light">
                            Des solutions premium, sur-mesure, conçues pour les entreprises ambitieuses qui veulent dominer leur marché.
                        </p>
<div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-white text-stone-900 hover:bg-stone-200 transition-all duration-300 text-[10px] sm:text-xs uppercase tracking-widest font-normal" href="mailto:hello@lavision.studio">
                                Lancer mon projet
                                <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 sm:h-12 sm:px-6 hover:bg-stone-800 hover:text-white transition-colors duration-300 text-[10px] sm:text-xs uppercase font-normal text-stone-300 tracking-widest bg-stone-900 h-11 border-stone-700 border rounded-full pr-5 pl-5" href="#simulateur">Faire une estimation</a>
</div>
</div>
</div>
</div>
<div className="sm:pt-14 lg:pt-20 pt-10">
<div className="grid grid-cols-2 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-6 sm:gap-8 lg:gap-10 border-t border-white/10 pt-6 sm:pt-8">
<div className="col-span-2 md:col-span-1">
<a className="inline-flex items-center gap-3 mb-4 sm:mb-5" href="#">
<div className="sm:h-10 sm:w-10 flex uppercase text-xs font-normal text-white tracking-widest bg-stone-900 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/effee798-49fe-4bb8-88cc-0518e78398f4_1600w.jpg)] bg-cover bg-center border-stone-700 border rounded-full items-center justify-center"></div>
<div className="flex flex-col leading-none">
<span className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-400">LaVision</span>
<span className="text-xs sm:text-sm tracking-tight text-white font-oswald uppercase">Studio</span>
</div>
</a>
<p className="max-w-[18rem] text-xs sm:text-sm leading-relaxed text-stone-400 font-light">
                            Studio digital premium basé à Paris. Nous construisons les infrastructures digitales de demain.
                        </p>
</div>
<div className="">
<p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mb-3 sm:mb-4">Expertises</p>
<div className="flex flex-col gap-2 sm:gap-3">
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#expertises">Restauration</a>
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#expertises">TPE &amp; PME</a>
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#expertises">BTP &amp; Construction</a>
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#expertises">Tech &amp; Startups</a>
</div>
</div>
<div>
<p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mb-3 sm:mb-4">Studio</p>
<div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm text-stone-300 font-light">
<a className="hover:text-white transition-colors break-all sm:break-normal" href="mailto:hello@lavision.studio">hello@lavision.studio</a>
<span>Paris, France</span>
<a className="hover:text-white transition-colors" href="#simulateur">Devis en ligne</a>
</div>
</div>
<div>
<p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 mb-3 sm:mb-4">Légal</p>
<div className="flex flex-col gap-2 sm:gap-3">
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Mentions légales</a>
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">Confidentialité</a>
<a className="text-xs sm:text-sm text-stone-300 hover:text-white transition-colors font-light" href="#">CGV</a>
</div>
</div>
</div>
<div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-[10px] sm:text-xs uppercase tracking-widest text-stone-500 font-light">
                        © 2025 LaVision Studio. Tous droits réservés.
                    </p>
</div>
</div>
</div>
</section>



    </>
  );
}
