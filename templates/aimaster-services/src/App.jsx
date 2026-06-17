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



    // WebGL Aurora Background
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        },
        vertexShader: `
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float iTime;
            uniform vec2 iResolution;

            #define NUM_OCTAVES 3

            float rand(vec2 n) { 
                return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
            }

            float noise(vec2 p){
                vec2 ip = floor(p);
                vec2 u = fract(p);
                u = u*u*(3.0-2.0*u);
                
                float res = mix(
                    mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                    mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
                return res*res;
            }

            float fbm(vec2 x) {
                float v = 0.0;
                float a = 0.3;
                vec2 shift = vec2(100);    
                mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
                for (int i = 0; i < NUM_OCTAVES; ++i) {
                    v += a * noise(x);
                    x = rot * x * 2.0 + shift;
                    a *= 0.4;
                }
                return v;
            }

            void main() {
                vec2 shake = vec2(sin(iTime * 1.2) * 0.005, cos(iTime * 2.1) * 0.005);
                
                vec2 p = ((gl_FragCoord.xy + shake * iResolution.xy) - iResolution.xy * 0.5) / iResolution.y * mat2(6.0, -4.0, 4.0, 6.0);
                vec2 v;
                vec4 o = vec4(0.0);
                
                float f = 2.0 + fbm(p + vec2(iTime * 5.0, 0.0)) * 0.5; 
                
                for(float i = 0.0; i++ < 35.0;)
                {
                    v = p + cos(i * i + (iTime + p.x * 0.08) * 0.025 + i * vec2(13.0, 11.0)) * 3.5 + vec2(sin(iTime * 3.0 + i) * 0.003, cos(iTime * 3.5 - i) * 0.003);
                    
                    float tailNoise = fbm(v + vec2(iTime * 0.5, i)) * 0.3 * (1.0 - (i / 35.0)); 
                    
                    vec4 auroraColors = vec4(
                        0.1 + 0.3 * sin(i * 0.2 + iTime * 0.4),
                        0.3 + 0.5 * cos(i * 0.3 + iTime * 0.5),
                        0.7 + 0.3 * sin(i * 0.4 + iTime * 0.3),
                        1.0
                    );
                    
                    vec4 currentContribution = auroraColors * exp(sin(i * i + iTime * 0.8)) / length(max(v, vec2(v.x * f * 0.015, v.y * 1.5)));
                    
                    float thinnessFactor = smoothstep(0.0, 1.0, i / 35.0) * 0.6; 
                    o += currentContribution * (1.0 + tailNoise * 0.8) * thinnessFactor;
                }
                
                o = tanh(pow(o / 100.0, vec4(1.6)));
                gl_FragColor = o * 1.5;
            }
        `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    function animate() {
        requestAnimationFrame(animate);
        material.uniforms.iTime.value += 0.016;
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    });

    animate();
  


        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        // Scroll Reveal Animation Script
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><canvas id="aurora-canvas">

<style>
    canvas { position: absolute; width: 100%; height: 100%; top: 0; left: 0; z-index: -10; }
  </style>

</canvas></div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute inset-0 bg-grid z-0"></div>
<div className="blob w-96 h-96 rounded-full top-0 left-1/4 bg-indigo-600"></div>
<div className="blob w-[30rem] h-[30rem] rounded-full bottom-0 right-0 bg-blue-600"></div>
</div>

<nav className="fixed w-full z-50 top-0 glass-strong transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 to-blue-600">
<span className="font-bold text-lg tracking-tighter text-white">A</span>
</div>
<span className="text-lg font-semibold text-white tracking-tight">AIMASTER</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="transition-colors hover:text-white hover:scale-105 duration-200" href="#accueil">Accueil</a>
<a className="transition-colors hover:text-white hover:scale-105 duration-200" href="#services">Services</a>
<a className="transition-colors hover:text-white hover:scale-105 duration-200" href="#expertise">Expertise</a>
<a className="transition-colors hover:text-white hover:scale-105 duration-200" href="#contact">Contact</a>
</div>
<div className="flex items-center">
<a className="px-5 py-2 rounded-full text-xs font-semibold transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1)] bg-white text-neutral-950 hover:bg-indigo-50 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]" href="#contact">
                    Discuter de mon projet
                </a>
<button className="md:hidden ml-4 text-white">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pt-36 pr-6 pb-12 pl-6 relative items-center min-h-[85vh] justify-center" id="accueil">

<div className="flex flex-wrap justify-center gap-3 mb-8 reveal active">
<span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium flex items-center gap-1.5 text-indigo-300 hover:bg-indigo-500/20 transition-colors cursor-default">
<svg className="lucide lucide-rocket w-3 h-3" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Innovation
            </span>
<span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium flex items-center gap-1.5 text-blue-300 hover:bg-blue-500/20 transition-colors cursor-default">
<svg className="lucide lucide-heart w-3 h-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Passion
            </span>
<span className="px-3 py-1 rounded-full border text-xs font-medium flex items-center gap-1.5 bg-neutral-800/50 border-neutral-700 text-neutral-300 hover:border-neutral-500 transition-colors cursor-default">
<svg className="lucide lucide-monitor w-3 h-3" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg> Technologie
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-8 max-w-5xl leading-[1.1] text-white reveal active delay-100">
            Multipliez vos résultats grâce à <span className="bg-clip-text text-transparent bg-gradient-to-r to-blue-500 from-indigo-400">l'intelligence artificielle</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed text-neutral-400 reveal active delay-200">
            AIMASTER transforme votre vision en solutions IA concrètes. De l'automatisation intelligente au développement d'agents IA, nous propulsons votre entreprise vers l'avenir.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto reveal active delay-300">
<a className="sm:w-auto flex items-center justify-center gap-2 text-base font-medium w-full h-12 rounded-full pr-8 pl-8 text-white bg-indigo-600 btn-glow shadow-lg shadow-indigo-500/25" href="#services">
                Découvrir nos services <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="sm:w-auto glass flex items-center justify-center gap-2 text-base font-medium w-full h-12 rounded-full pr-8 pl-8 text-white btn-glow bg-neutral-900/50" href="mailto:contact@aimaster.com">
                Discutons de votre projet <svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-900/40 relative z-10 overflow-hidden">
<div className="text-center mb-8">
<p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">Ils nous font confiance</p>
</div>
<div className="scroller max-w-7xl mx-auto">
<div className="scroller__inner flex gap-12 md:gap-24 items-center">

<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
<span className="group-hover:text-white transition-colors">PolyTech</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg>
<span className="group-hover:text-white transition-colors">NorthStream</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-purple-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10M7 12h10M7 17h10"></path></svg>
<span className="group-hover:text-white transition-colors">DataFlow</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-pink-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="group-hover:text-white transition-colors">StarLink</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
<span className="group-hover:text-white transition-colors">OptiGrow</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<span className="group-hover:text-white transition-colors">SecureAI</span>
</div>

<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-indigo-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
<span className="group-hover:text-white transition-colors">PolyTech</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 12l-4-4-4 4M12 16V8"></path></svg>
<span className="group-hover:text-white transition-colors">NorthStream</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-purple-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 7h10M7 12h10M7 17h10"></path></svg>
<span className="group-hover:text-white transition-colors">DataFlow</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-pink-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="group-hover:text-white transition-colors">StarLink</span>
</div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl group cursor-default">
<svg className="text-amber-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"></path></svg>
<span className="group-hover:text-white transition-colors">OptiGrow</span>
</div>
</div>
</div>
</section>

<section className="z-10 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="text-center mb-16 reveal">
<span className="font-medium tracking-wide text-xs uppercase mb-3 block text-indigo-400">L'IA générative change la donne</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Votre avantage compétitif de demain,disponible aujourd'hui</h2>
<p className="max-w-2xl mx-auto text-lg leading-relaxed text-neutral-400">
                L'intelligence artificielle générative n'est plus réservée aux géants de la tech. C'est aujourd'hui l'outil le plus puissant pour automatiser, innover et croître.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="glass p-8 rounded-3xl group border-white/5 reveal delay-100">
<div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
<svg className="lucide lucide-zap w-6 h-6 text-indigo-400 group-hover:text-indigo-300" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors">Automatisation totale</h3>
<p className="text-sm leading-relaxed text-neutral-400">Libérez jusqu'à 70% du temps de vos équipes en automatisant les tâches répétitives. Workflows intelligents, traitement de données, l'IA travaille 24/7.</p>
</div>

<div className="glass p-8 rounded-3xl group border-white/5 reveal delay-200">
<div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-blue-400 group-hover:text-blue-300" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">Décisions éclairées</h3>
<p className="text-sm leading-relaxed text-neutral-400">Analysez des volumes massifs de données en quelques secondes. Identifiez les opportunités et anticipez les tendances pour prendre les meilleures décisions.</p>
</div>

<div className="glass p-8 rounded-3xl group border-white/5 reveal delay-300">
<div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
<svg className="lucide lucide-target w-6 h-6 text-purple-400 group-hover:text-purple-300" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">Croissance accélérée</h3>
<p className="text-sm leading-relaxed text-neutral-400">Multipliez vos conversions avec des campagnes ultra-personnalisées et des chatbots intelligents. Votre pipeline ne sera jamais vide.</p>
</div>
</div>
</section>

<section className="py-24 border-y relative z-10 bg-neutral-900/30 border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<span className="font-medium tracking-wide text-xs uppercase mb-3 block text-indigo-400">Ce que nous créons pour vous</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-white">Des solutions IA qui génèrent<br/>des résultats mesurables</h2>
<p className="max-w-2xl text-lg text-neutral-400">Chaque service est conçu pour résoudre un problème concret.</p>
</div>
<div className="space-y-6">

<div className="glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] group reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-indigo-500/20 bg-indigo-600/10 transition-transform group-hover:scale-105">
<svg className="lucide lucide-settings w-8 h-8 text-indigo-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
<h3 className="text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">Automatisation des workflows</h3>
<div className="flex gap-2">
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">Make</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">n8n</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">Zapier</span>
</div>
</div>
<p className="mb-6 leading-relaxed text-neutral-400">Transformez vos processus manuels en workflows intelligents. Emails, rapports, extraction de données : nous automatisons tout ce qui peut l'être.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-indigo-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Traitement des emails</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-indigo-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Génération de rapports</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-indigo-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Extraction de données</li>
</ul>
<div className="bg-indigo-500/5 rounded-xl p-4 border border-indigo-500/10">
<p className="text-xs font-semibold mb-1 text-indigo-300">IMPACT</p>
<p className="text-sm font-medium text-white">→ 70% de temps gagné</p>
<p className="text-sm font-medium text-white">→ ROI visible dès 3 semaines</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] group reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-blue-500/20 bg-blue-600/10 transition-transform group-hover:scale-105">
<svg className="lucide lucide-bot w-8 h-8 text-blue-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="flex-1">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
<h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">Solutions IA &amp; Agents Intelligents</h3>
<div className="flex gap-2">
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">GPT-4</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">Claude 3</span>
<span className="text-[10px] uppercase font-mono px-2 py-1 rounded bg-white/5 text-neutral-400 border border-white/5">RAG</span>
</div>
</div>
<p className="mb-6 leading-relaxed text-neutral-400">Créez des assistants virtuels et des agents IA qui comprennent votre métier, parlent à vos clients et exécutent des tâches complexes en totale autonomie.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Service client 24/7</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Assistants internes</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Qualification leads</li>
</ul>
<div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10">
<p className="text-xs font-semibold mb-1 text-blue-300">IMPACT</p>
<p className="text-sm font-medium text-white">→ Satisfaction client x3</p>
<p className="text-sm font-medium text-white">→ Coûts support -60%</p>
</div>
</div>
</div>
</div>
</div>

<div className="glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] group reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-purple-500/20 bg-purple-600/10 transition-transform group-hover:scale-105">
<svg className="lucide lucide-crosshair w-8 h-8 text-purple-400" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">Génération de leads marketing par IA</h3>
<p className="mb-6 leading-relaxed text-neutral-400">Révolutionnez votre acquisition. L'IA identifie, qualifie et engage vos prospects automatiquement avec des messages ultra-personnalisés.</p>
<div className="bg-purple-500/5 rounded-xl p-4 border border-purple-500/10 inline-block w-full md:w-auto">
<p className="text-xs font-semibold mb-1 text-purple-300">IMPACT</p>
<p className="text-sm font-medium text-white">→ Taux de conversion x3</p>
<p className="text-sm font-medium text-white">→ Coût d'acquisition / 2</p>
</div>
</div>
</div>
</div>

<div className="glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] group reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-pink-500/20 bg-pink-600/10 transition-transform group-hover:scale-105">
<svg className="lucide lucide-code-2 w-8 h-8 text-pink-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-pink-400 transition-colors">Développement d'applications sur mesure</h3>
<p className="mb-6 leading-relaxed text-neutral-400">Apps web et mobile qui intègrent l'IA au cœur de leur ADN. Solutions 100% personnalisées (React, Node, Python) pour des expériences uniques.</p>
<div className="bg-pink-500/5 rounded-xl p-4 border border-pink-500/10 inline-block w-full md:w-auto">
<p className="text-xs font-semibold mb-1 text-pink-300">IMPACT</p>
<p className="text-sm font-medium text-white">→ Différenciation totale</p>
<p className="text-sm font-medium text-white">→ Propriété du code source</p>
</div>
</div>
</div>
</div>

<div className="glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.03] group reveal">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-amber-500/20 bg-amber-600/10 transition-transform group-hover:scale-105">
<svg className="lucide lucide-book-open w-8 h-8 text-amber-400" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-amber-400 transition-colors">Formation et Consulting IA</h3>
<p className="mb-6 leading-relaxed text-neutral-400">Montez en compétence. Formations pratiques (Prompt Engineering, No-Code) et conseil stratégique pour dirigeants.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto z-10 relative" id="expertise">
<div className="text-center mb-16 reveal">
<span className="font-medium tracking-wide text-xs uppercase mb-3 block text-indigo-400">Une maîtrise technique complète</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">L'excellence technologique</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 reveal delay-100">
<div className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors group cursor-default">
<svg className="lucide lucide-cpu w-6 h-6 mb-2 text-gray-400 group-hover:text-indigo-400 transition-colors" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="font-medium text-sm text-white">GPT-4 &amp; Claude</span>
<span className="text-neutral-500 text-[10px] mt-1">LLMs Avancés</span>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors group cursor-default">
<svg className="lucide lucide-workflow w-6 h-6 mb-2 text-gray-400 group-hover:text-indigo-400 transition-colors" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="font-medium text-sm text-white">Make &amp; Zapier</span>
<span className="text-neutral-500 text-[10px] mt-1">Automatisation</span>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors group cursor-default">
<svg className="lucide lucide-code w-6 h-6 mb-2 text-gray-400 group-hover:text-indigo-400 transition-colors" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="font-medium text-sm text-white">Python &amp; React</span>
<span className="text-neutral-500 text-[10px] mt-1">Full-stack</span>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors group cursor-default">
<svg className="lucide lucide-cloud w-6 h-6 mb-2 text-gray-400 group-hover:text-indigo-400 transition-colors" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="font-medium text-sm text-white">AWS &amp; Azure</span>
<span className="text-neutral-500 text-[10px] mt-1">Infrastructure</span>
</div>
<div className="glass p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-indigo-500/30 transition-colors group cursor-default">
<svg className="lucide lucide-database w-6 h-6 mb-2 text-gray-400 group-hover:text-indigo-400 transition-colors" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="font-medium text-sm text-white">Vector DB</span>
<span className="text-neutral-500 text-[10px] mt-1">Données IA</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t pt-12 border-white/5 reveal delay-200">
<div className="">
<h4 className="font-medium text-lg mb-3 text-white">Architecture IA avancée</h4>
<p className="text-sm leading-relaxed text-neutral-400">Conception de systèmes RAG, fine-tuning de modèles, agents autonomes et optimisation des prompts.</p>
</div>
<div>
<h4 className="font-medium text-lg mb-3 text-white">Développement full-stack</h4>
<p className="text-sm leading-relaxed text-neutral-400">Apps modernes, architectures scalables, APIs robustes et interfaces utilisateur exceptionnelles.</p>
</div>
<div>
<h4 className="font-medium text-lg mb-3 text-white">Vision business</h4>
<p className="text-sm leading-relaxed text-neutral-400">Analyse processus, ROI calculé, roadmap stratégique et accompagnement à la transformation.</p>
</div>
</div>
</section>

<section className="py-24 border-y relative z-10 bg-neutral-900/30 border-white/5" id="approche">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3 reveal">
<span className="font-medium tracking-wide text-xs uppercase mb-3 block text-indigo-400">Comment nous travaillons</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">Une méthodologie éprouvée</h2>
<p className="text-sm mb-8 leading-relaxed text-neutral-400">
                        Pas de solution toute faite. Chaque projet commence par une compréhension approfondie de vos enjeux. Approche agile et ROI mesurable.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check-circle w-4 h-4 text-pink-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Transparence totale
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check-circle w-4 h-4 text-pink-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Livraison rapide
                        </div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<svg className="lucide lucide-check-circle w-4 h-4 text-pink-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Qualité premium
                        </div>
</div>
</div>
<div className="md:w-2/3 relative reveal delay-200">

<div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500/50 to-transparent via-white/10"></div>
<div className="space-y-12 relative">

<div className="flex gap-6 group">
<div className="w-8 h-8 rounded-full border border-indigo-500 flex items-center justify-center text-xs font-bold relative z-10 bg-neutral-900 text-indigo-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_-3px_rgba(99,102,241,0.5)]">1</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white group-hover:text-indigo-300 transition-colors">Analyse &amp; Découverte</h4>
<p className="text-sm mb-2 text-neutral-400">Audit complet de vos systèmes et identification des opportunités IA.</p>
<span className="text-[10px] text-neutral-500 font-mono px-2 py-1 rounded bg-white/5">Durée: 1-2 semaines</span>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold relative z-10 bg-neutral-900 border-white/20 text-neutral-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">2</div>
<div className="">
<h4 className="font-medium text-lg mb-2 text-white group-hover:text-indigo-300 transition-colors">Conception &amp; Stratégie</h4>
<p className="text-sm mb-2 text-neutral-400">Architecture technique, wireframes et stack technologique.</p>
<span className="text-[10px] text-neutral-500 font-mono px-2 py-1 rounded bg-white/5">Durée: 1-3 semaines</span>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold relative z-10 bg-neutral-900 border-white/20 text-neutral-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">3</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white group-hover:text-indigo-300 transition-colors">Développement Agile</h4>
<p className="text-sm mb-2 text-neutral-400">Cycles courts, prototypes rapides et tests continus.</p>
<span className="text-[10px] text-neutral-500 font-mono px-2 py-1 rounded bg-white/5">2-12 semaines</span>
</div>
</div>

<div className="flex gap-6 group">
<div className="w-8 h-8 rounded-full border flex items-center justify-center text-xs font-bold relative z-10 bg-neutral-900 border-white/20 text-neutral-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors">4</div>
<div>
<h4 className="font-medium text-lg mb-2 text-white group-hover:text-indigo-300 transition-colors">Déploiement &amp; Accompagnement</h4>
<p className="text-sm mb-2 text-neutral-400">Formation, migration et support pour maximiser le ROI.</p>
<span className="text-[10px] text-neutral-500 font-mono px-2 py-1 rounded bg-white/5">Continu</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto z-10 relative border-t border-white/5 bg-neutral-900/30">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">Ce qui nous rend différents</h2>
<p className="mb-8 text-neutral-400">Nous ne sommes pas une agence comme les autres. Nous allions expertise technique et vision business.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass p-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<svg className="lucide lucide-cpu w-5 h-5 mb-3 text-blue-400" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h4 className="font-medium text-sm mb-1 text-white">Expertise Technique</h4>
<p className="text-neutral-500 text-xs">Architectures sophistiquées, pas juste des APIs.</p>
</div>
<div className="glass p-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<svg className="lucide lucide-briefcase w-5 h-5 mb-3 text-purple-400" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h4 className="font-medium text-sm mb-1 text-white">Vision Business</h4>
<p className="text-neutral-500 text-xs">Orienté ROI et chiffre d'affaires.</p>
</div>
<div className="glass p-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<svg className="lucide lucide-zap w-5 h-5 mb-3 text-amber-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="font-medium text-sm mb-1 text-white">Rapidité</h4>
<p className="text-neutral-500 text-xs">Prototypes en semaines, pas en mois.</p>
</div>
<div className="glass p-5 rounded-xl hover:bg-white/[0.03] transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5 mb-3 text-pink-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h4 className="font-medium text-sm mb-1 text-white">Qualité</h4>
<p className="text-neutral-500 text-xs">Code testé, documenté et fiable.</p>
</div>
</div>
</div>
<div className="flex items-center justify-center reveal delay-200">
<div className="grid grid-cols-2 gap-6 w-full">
<div className="text-center p-6 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors">
<div className="text-4xl font-bold mb-1 text-white">70%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Temps gagné</div>
</div>
<div className="text-center p-6 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors">
<div className="text-4xl font-bold mb-1 text-white">3x</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Conversion</div>
</div>
<div className="text-center p-6 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors">
<div className="text-4xl font-bold mb-1 text-white">&lt;24h</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Réponse</div>
</div>
<div className="text-center p-6 border rounded-2xl bg-white/[0.01] border-white/5 hover:border-white/10 transition-colors">
<div className="text-4xl font-bold mb-1 text-white">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Satisfaction</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-t pt-24 pb-24 relative bg-neutral-900/30 border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<span className="font-medium tracking-wide text-xs uppercase mb-3 block text-indigo-400">Contact</span>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">Discutons de votre projet IA</h2>
<p className="mb-8 leading-relaxed text-neutral-400">
                        Que vous ayez une idée précise ou simplement une problématique, prenons 30 minutes pour explorer comment l'IA peut multiplier vos résultats.
                    </p>
<div className="space-y-6 mb-12">
<div className="glass p-4 rounded-xl flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
<svg className="lucide lucide-mail w-5 h-5 text-blue-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase font-semibold">Email</p>
<a className="font-medium transition-colors text-white hover:text-indigo-400" href="mailto:contact@aimaster.com">contact@aimaster.com</a>
</div>
</div>
<div className="glass p-4 rounded-xl flex items-center gap-4 hover:border-white/20 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-calendar w-5 h-5 text-purple-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"><path d="M3 10h18"></path></rect></svg>
</div>
<div className="">
<p className="text-xs text-neutral-500 uppercase font-semibold">Appel découverte</p>
<a className="font-medium transition-colors text-white hover:text-blue-400" href="#">Réserver 30 minutes</a>
</div>
</div>
</div>
<h4 className="font-medium mb-4 text-white">FAQ Rapide</h4>
<div className="space-y-3">
<details className="group glass rounded-lg overflow-hidden transition-all hover:bg-white/5">
<summary className="flex cursor-pointer text-sm font-medium pt-4 pr-4 pb-4 pl-4 items-center justify-between hover:text-white text-neutral-300">
                                Combien de temps prend un projet ?
                                <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs leading-relaxed text-neutral-400">
                                De 1-2 semaines pour un workflow simple à 2-4 mois pour une application sur mesure complexe.
                            </div>
</details>
<details className="group glass rounded-lg overflow-hidden transition-all hover:bg-white/5">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-neutral-300 hover:text-white">
                                Quels sont vos tarifs ?
                                <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-4 pb-4 text-xs leading-relaxed text-neutral-400">
                                Devis sur mesure. À partir de 3K€ pour une automatisation simple. Forfaits clairs ou régie disponibles.
                            </div>
</details>
</div>
</div>

<div className="glass p-8 rounded-3xl border border-white/10 reveal delay-200">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Nom complet *</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-neutral-600 bg-neutral-950/50 border-white/10 text-white" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Entreprise *</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors bg-neutral-950/50 border-white/10 text-white" placeholder="Votre Société" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Email professionnel *</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors bg-neutral-950/50 border-white/10 text-white" placeholder="jean@societe.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Téléphone</label>
<input className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors bg-neutral-950/50 border-white/10 text-white" placeholder="+33 6 12 34 56 78" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Service concerné</label>
<select className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors appearance-none bg-neutral-950/50 border-white/10 text-white">
<option>Automatisation</option>
<option>Solutions IA</option>
<option>Marketing IA</option>
<option>App sur mesure</option>
<option>Formation</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400">Votre projet *</label>
<textarea className="w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-neutral-600 bg-neutral-950/50 border-white/10 text-white" placeholder="Décrivez vos objectifs..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-4 h-4 rounded border focus:ring-indigo-500 focus:ring-offset-0 bg-neutral-950 border-white/20 text-indigo-600" id="consent" type="checkbox"/>
<label className="text-xs text-neutral-500" htmlFor="consent">J'accepte d'être contacté par AIMASTER concernant mon projet *</label>
</div>
<button className="w-full font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg bg-white text-neutral-950 hover:bg-neutral-200 btn-glow border border-transparent" type="button">
                            Envoyer ma demande <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 relative z-10 border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 rounded flex items-center justify-center to-blue-600">
<span className="text-xs font-bold text-white">A</span>
</div>
<span className="font-medium tracking-tight text-white">AIMASTER</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">
                        Multipliez vos résultats grâce à l'IA.
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<svg className="lucide lucide-globe w-3 h-3" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Côte d'Ivoire &amp; International
                    </div>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-white">Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Automatisation</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Agents IA</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Génération Leads</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-white">Entreprise</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Expertise</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Approche</a></li>
<li className=""><a className="transition-colors hover:text-indigo-400" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-sm text-white">Contact</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="transition-colors hover:text-indigo-400" href="mailto:contact@aimaster.com">contact@aimaster.com</a></li>
<li className="flex gap-4 mt-4">

<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>

<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>

<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
</a>

<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between border-white/5">
<p className="text-xs text-neutral-600">© 2025 AIMASTER - Tous droits réservés.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Mentions légales</a>
<a className="hover:text-neutral-400" href="#">Confidentialité</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
