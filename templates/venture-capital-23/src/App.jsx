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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Hero WebGL Implementation (Three.js)
        const initWebGL = () => {
            const canvas = document.getElementById('hero-webgl');
            if (!canvas) return;

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            // Create an architectural wireframe grid
            const geometry = new THREE.PlaneGeometry(40, 40, 80, 80);
            const material = new THREE.PointsMaterial({ 
                color: 0x050505, 
                size: 0.035, 
                transparent: true, 
                opacity: 0.35 
            });

            const plane = new THREE.Points(geometry, material);
            plane.rotation.x = -Math.PI * 0.42;
            plane.position.y = -4;
            plane.position.z = -5;
            scene.add(plane);

            camera.position.z = 5;

            const positions = plane.geometry.attributes.position.array;
            const originalPositions = new Float32Array(positions.length);
            for(let i = 0; i < positions.length; i++) {
                originalPositions[i] = positions[i];
            }

            let mouseX = 0;
            let mouseY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = (e.clientX / window.innerWidth) * 2 - 1;
                mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
            });

            const clock = new THREE.Clock();

            const animate = () => {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();

                // Smooth camera parallax
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                // Undulating wave effect
                for(let i = 0; i < positions.length; i += 3) {
                    const x = originalPositions[i];
                    const y = originalPositions[i+1];
                    // Complex noise-like wave pattern
                    positions[i+2] = Math.sin(x * 0.5 + time * 0.5) * 0.6 + Math.cos(y * 0.4 + time * 0.4) * 0.6;
                }
                plane.geometry.attributes.position.needsUpdate = true;

                renderer.render(scene, camera);
            };
            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        // Text Scramble Effect Class
        class ScrambleText {
            constructor(el) {
                this.el = el;
                this.chars = '!<>-_\\/[]{}—=+*^?#________';
                this.originalText = el.dataset.scramble || el.innerText;
                this.update = this.update.bind(this);
            }
            start() {
                const length = this.originalText.length;
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = this.randomChar();
                    const to = this.originalText[i];
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
            }
            update() {
                let output = '';
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="opacity-50">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete !== this.queue.length) {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[Math.floor(Math.random() * this.chars.length)];
            }
        }

        // Initialize Everything on Load
        window.addEventListener('load', () => {
            initWebGL();

            // Init Scramble Text
            const scrambleElements = document.querySelectorAll('.scramble-text');
            scrambleElements.forEach(el => {
                setTimeout(() => {
                    const scrambler = new ScrambleText(el);
                    scrambler.start();
                }, 500); // Slight delay for dramatic effect
            });

            // Hero Typography Stagger
            setTimeout(() => {
                document.querySelector('.stagger-text').classList.add('is-loaded');
            }, 150);
        });

        // DOM Parallax for Hero Bento Boxes
        const bentoCardsParallax = document.querySelectorAll('.bento-card-parallax');
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX);
            const y = (window.innerHeight / 2 - e.pageY);
            
            bentoCardsParallax.forEach((card) => {
                const depth = parseFloat(card.dataset.depth) || 0.05;
                card.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
            });
        });

        // Custom Cursor Logic
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateCursor() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Reveal Animations on Scroll
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                    
                    // Scramble text if inside revealed element
                    const scrambles = entry.target.querySelectorAll('.scramble-text:not(.hero-scramble)');
                    scrambles.forEach(el => {
                        const scrambler = new ScrambleText(el);
                        scrambler.start();
                    });
                }
            });
        }, { root: null, rootMargin: '0px', threshold: 0.15 });

        document.querySelectorAll('.reveal-element').forEach(el => revealObserver.observe(el));

        // Magnetic Button Effect
        const magnets = document.querySelectorAll('.magnetic-btn');
        magnets.forEach(magnet => {
            magnet.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const strength = this.dataset.strength || 10;
                this.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
            });
            magnet.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0px, 0px)';
            });
        });

        // Accordion functionality
        const accordions = document.querySelectorAll('.expand-row');
        accordions.forEach(acc => {
            acc.addEventListener('click', () => {
                const isActive = acc.classList.contains('active');
                accordions.forEach(a => a.classList.remove('active'));
                if (!isActive) acc.classList.add('active');
            });
        });
        if(accordions.length > 0) accordions[0].classList.add('active');

        // 3D Tilt Card Logic
        function handleTilt(e, card) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;
            card.style.setProperty('--rx', `${rotateX}deg`);
            card.style.setProperty('--ry', `${rotateY}deg`);
        }

        function resetTilt(card) {
            card.style.setProperty('--rx', `0deg`);
            card.style.setProperty('--ry', `0deg`);
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
      

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent z-50"></div>
<div className="fixed top-1 left-6 right-6 flex justify-between items-center z-50 pointer-events-none text-[0.65rem] font-mono text-gray-400 uppercase tracking-widest hidden md:flex">
<div className="flex items-center gap-4">
<div className="w-6 h-6 bg-black/80 rounded flex items-center justify-center text-white pointer-events-auto cursor-pointer border border-black/10 hover:bg-black transition-colors">
<iconify-icon icon="solar:widget-5-linear"></iconify-icon>
</div>
<span>SYS.ONLINE // VNTUR.CAPITAL</span>
</div>
<span>LAT: 37.7749° N / LONG: 122.4194° W</span>
</div>

<nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/70 backdrop-blur-xl rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-black/5 flex items-center w-[96%] max-w-3xl transition-all hover:bg-white/90 hover:shadow-2xl hover-target">

<div className="flex-1 flex justify-start pl-4 md:pl-6">
<div className="font-syne font-semibold tracking-tighter text-xl flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-black/20 relative"><span className="absolute inset-0 rounded-full bg-black animate-ping opacity-20"></span></span>
                VNTUR
            </div>
</div>

<div className="flex-none hidden md:flex items-center gap-1 bg-[#f5f5f3]/80 rounded-full px-2 py-1 border border-black/5 shadow-inner">
<a className="px-4 py-2 text-[0.65rem] font-semibold text-gray-600 hover:text-black hover:bg-white rounded-full transition-all uppercase tracking-widest relative group/link" href="#thesis">
                Thesis
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black transition-all group-hover/link:w-4"></span>
</a>
<a className="px-4 py-2 text-[0.65rem] font-semibold text-gray-600 hover:text-black hover:bg-white rounded-full transition-all uppercase tracking-widest relative group/link" href="#portfolio">
                Portfolio
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black transition-all group-hover/link:w-4"></span>
</a>
<a className="px-4 py-2 text-[0.65rem] font-semibold text-gray-600 hover:text-black hover:bg-white rounded-full transition-all uppercase tracking-widest relative group/link" href="#pipeline">
                Pipeline
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-black transition-all group-hover/link:w-4"></span>
</a>
</div>

<div className="flex-1 flex justify-end">
<a className="bg-[#050505] text-[#E8FF47] px-6 py-3 rounded-full text-[0.65rem] font-semibold hover:bg-black transition-all uppercase tracking-widest flex items-center gap-3 overflow-hidden group" href="#apply">
<span className="relative z-10 flex items-center gap-2">
                    Submit Deck <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</nav>

<section className="relative min-h-[100svh] flex flex-col justify-center pt-32 pb-20 border-b border-black/10 overflow-hidden">

<canvas className="absolute inset-0 z-0 pointer-events-none opacity-40" id="hero-webgl"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f5f5f3] z-0 pointer-events-none"></div>

<div className="crosshair top-8 left-8 hidden lg:block opacity-30 z-10"></div>
<div className="crosshair top-8 right-8 hidden lg:block opacity-30 z-10"></div>
<div className="crosshair bottom-8 left-8 hidden lg:block opacity-30 z-10"></div>
<div className="crosshair bottom-8 right-8 hidden lg:block opacity-30 z-10"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10 w-full max-w-[90rem]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 relative flex flex-col justify-center">

<div className="absolute left-[85%] top-[70%] w-8 h-8 rounded-full border border-black/10 flex items-center justify-center pointer-events-none z-0 hidden lg:flex">
<div className="w-1 h-1 bg-black rounded-full"></div>
</div>

<div className="flex items-center gap-4 mb-10 text-[0.6rem] font-mono uppercase tracking-widest text-gray-500 reveal-element delay-100">
<span className="text-black flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span> FUND IV ACTIVE
                        </span>
<span className="hidden sm:inline-block">DEPLOYING $850M ALLOCATION</span>
<span className="hidden sm:inline-block w-6 h-[1px] bg-black/20"></span>
<span className="hidden sm:inline-block text-black">TICKER: VNTR</span>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-[7.5rem] leading-[0.85] font-syne font-semibold tracking-tighter text-[#050505] mb-12 stagger-text flex flex-col gap-1 relative z-10">
<span className="block relative w-max">
                            Architecting
                            <span className="absolute left-[58%] top-[55%] flex items-center z-20 -translate-y-1/2">
<span className="w-12 h-[4px] bg-[#050505]"></span>
<span className="bg-[#050505] text-[#E8FF47] text-[0.45rem] font-mono px-2 py-1.5 rounded-[2px] uppercase tracking-widest ml-[-1px] scramble-text">
                                    NON-INCREMENTAL SOLUTIONS
                                </span>
</span>
</span>
<span className="block w-full flex items-center gap-5">
<span>the</span>
<span className="italic font-light text-gray-400">disruptive</span>
</span>
<span className="block w-full">futures.</span>
</h1>
<div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center reveal-element delay-300 mt-6 relative z-10">
<p className="text-[0.85rem] text-gray-500 max-w-[16rem] leading-relaxed">
                            Capital for technically relentless founders re-engineering the physical and digital world at the edge of compute, biology, and energy.
                        </p>

<div className="grid grid-cols-2 gap-x-12 gap-y-6 text-[0.6rem] font-mono tracking-widest uppercase">
<div>
<div className="text-gray-400 mb-1">AUM</div>
<div className="text-sm font-sans font-semibold text-black tracking-tight scramble-text" data-scramble="$2.8B">$2.8B</div>
</div>
<div>
<div className="text-gray-400 mb-1">Avg TVPI</div>
<div className="text-sm font-sans font-semibold text-black tracking-tight scramble-text" data-scramble="4.2x">4.2x</div>
</div>
<div>
<div className="text-gray-400 mb-1">Founders</div>
<div className="text-sm font-sans font-semibold text-black tracking-tight scramble-text" data-scramble="47+ Active">47+ Active</div>
</div>
<div>
<div className="text-gray-400 mb-1">Stage</div>
<div className="text-sm font-sans font-semibold text-black tracking-tight scramble-text" data-scramble="Seed → Ser B">Seed → Ser B</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative w-full hidden lg:block reveal-element delay-500 bento-container z-10">
<div className="grid grid-cols-2 gap-4">

<div className="col-span-2 bg-white/90 backdrop-blur-md rounded-[1.5rem] p-6 border border-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.06)] relative overflow-hidden group hover-target bento-card-parallax" data-depth="0.04">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-[0.6rem] font-mono text-gray-400 uppercase tracking-widest mb-1">Deployment Velocity</div>
<div className="text-2xl font-sans font-medium tracking-tight text-black">Q3 Capital Call</div>
</div>
<div className="w-8 h-8 rounded-lg border border-black/5 flex items-center justify-center text-gray-400 group-hover:bg-black group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
</div>

<div className="flex items-end gap-1.5 h-20 w-full mt-8">
<div className="flex-1 bg-[#f0f0f0] rounded-t-[4px] h-[15%] transition-all duration-500 group-hover:h-[20%]"></div>
<div className="flex-1 bg-[#e5e5e5] rounded-t-[4px] h-[25%] transition-all duration-500 delay-75 group-hover:h-[35%]"></div>
<div className="flex-1 bg-[#d4d4d4] rounded-t-[4px] h-[40%] transition-all duration-500 delay-100 group-hover:h-[50%]"></div>
<div className="flex-1 bg-[#050505] rounded-t-[4px] h-[80%] transition-all duration-500 delay-150 group-hover:h-[100%] shadow-[0_0_15px_rgba(0,0,0,0.1)]"></div>
</div>
</div>

<div className="bg-[#0a0a0a]/95 backdrop-blur-md rounded-[1.5rem] p-6 flex flex-col justify-between aspect-[4/3] border border-transparent hover-target relative overflow-hidden bento-card-parallax" data-depth="0.08" onmouseenter="document.body.classList.add('dark-mode-hover')" onmouseleave="document.body.classList.remove('dark-mode-hover')">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-[#E8FF47] rounded-full blur-[40px] opacity-15"></div>
<div className="text-[0.55rem] font-mono text-gray-400 uppercase tracking-widest mb-4">Latest Term Sheet</div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] text-gray-300 flex items-center justify-center font-sans font-medium text-lg border border-white/5">H</div>
<div>
<div className="font-sans font-medium text-white tracking-tight">Helion Energy</div>
<div className="text-[0.55rem] text-gray-400 font-mono uppercase tracking-widest mt-0.5">Series E · Cleantech</div>
</div>
</div>
<div className="flex justify-between items-end relative z-10">
<div className="text-[0.55rem] text-gray-500 font-mono uppercase tracking-widest">Allocation</div>
<div className="text-base font-sans font-semibold text-[#E8FF47]">$30.0M</div>
</div>
</div>

<div className="bg-[#E8FF47] rounded-[1.5rem] p-6 flex flex-col justify-between aspect-[4/3] hover-target relative overflow-hidden shadow-[0_8px_30px_rgba(232,255,71,0.2)] bento-card-parallax" data-depth="0.06">
<div className="flex justify-between items-start mb-6">
<div className="text-[0.55rem] font-mono text-black/60 uppercase tracking-widest">Priority Signal</div>
<div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
</div>
<div>
<div className="text-2xl font-sans font-medium text-black tracking-tight leading-none mb-1">Compute</div>
<div className="text-[0.65rem] font-mono text-black/70 uppercase tracking-widest">Abundance</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 bg-[#050505] overflow-hidden border-b border-white/10 relative">
<div className="absolute inset-0 z-0 opacity-50 pointer-events-none"></div>
<div className="marquee-container font-syne font-semibold text-4xl lg:text-5xl tracking-tighter flex items-center gap-12 w-[200%] relative z-10">

<div className="flex items-center gap-12">
<span className="text-outline hover-target">COMPUTE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[01]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">DEFENSE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[02]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">ROBOTICS <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[03]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">AEROSPACE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[04]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">SYNTH BIO <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[05]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
</div>

<div className="flex items-center gap-12">
<span className="text-outline hover-target">COMPUTE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[01]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">DEFENSE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[02]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">ROBOTICS <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[03]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">AEROSPACE <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[04]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
<span className="text-outline hover-target">SYNTH BIO <span className="text-[0.6rem] font-mono align-top text-gray-500 ml-1 opacity-80">[05]</span></span>
<span className="text-[#E8FF47] text-xl">✦</span>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 relative border-b border-black/10" id="thesis">
<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block ml-12"></div>
<div className="absolute right-0 top-0 bottom-0 w-[1px] bg-black/5 hidden lg:block mr-12"></div>
<div className="max-w-[90rem] mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 relative">
<div className="sticky top-40 reveal-element">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-black"></span> 01 // The Thesis
                        </div>
<h2 className="text-5xl md:text-6xl font-syne font-semibold tracking-tighter leading-[0.9] mb-8">
                            Investing where legacy systems break.
                        </h2>
<p className="text-sm text-gray-600 leading-relaxed mb-10 border-l-2 border-black/20 pl-4">
                            We seek asymmetric upside in foundational technologies. We ignore incremental software in favor of deeply technical solutions solving planetary-scale constraints.
                        </p>
<a className="magnetic-btn group flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-black hover-target" data-strength="10" href="#">
<div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
<span className="group-hover:tracking-[0.2em] transition-all duration-300">View Whitepaper</span>
</a>
</div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-white border border-black/10 p-8 hover:border-black/30 transition-all duration-500 reveal-element bracket-corners min-h-[400px] flex flex-col justify-between overflow-hidden hover-target">
<div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="w-14 h-14 bg-[#f5f5f3] flex items-center justify-center text-2xl text-black border border-black/5 group-hover:bg-[#E8FF47] transition-colors duration-500 rounded-lg shadow-sm">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<span className="text-[0.65rem] font-mono text-gray-400">SEC.01</span>
</div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform">Compute Abundance</h3>
<p className="text-gray-600 text-sm leading-relaxed">As intelligence becomes marginal cost zero, value accrues to those who map real-world physics into digital spaces. Next-gen architectures and foundational models.</p>
</div>
<div className="relative z-10 pt-8 border-t border-black/5 mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-[#f5f5f3] text-[0.6rem] font-mono uppercase tracking-widest rounded text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">AI Infrastructure</span>
<span className="px-3 py-1.5 bg-[#f5f5f3] text-[0.6rem] font-mono uppercase tracking-widest rounded text-gray-600 group-hover:bg-black group-hover:text-white transition-colors">Semiconductors</span>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/10 p-8 hover:border-white/30 transition-all duration-500 reveal-element bracket-corners dark min-h-[400px] flex flex-col justify-between overflow-hidden hover-target" onmouseenter="document.body.classList.add('dark-mode-hover')" onmouseleave="document.body.classList.remove('dark-mode-hover')">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#E8FF47]/10 rounded-bl-full -translate-y-full translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
<div className="relative z-10 text-white">
<div className="flex justify-between items-start mb-12">
<div className="w-14 h-14 bg-white/5 flex items-center justify-center text-2xl text-[#E8FF47] border border-white/10 group-hover:bg-[#E8FF47] group-hover:text-black transition-colors duration-500 rounded-lg">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-[0.65rem] font-mono text-gray-500">SEC.02</span>
</div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform">Programmable Bio</h3>
<p className="text-gray-400 text-sm leading-relaxed">Transitioning from serendipitous discovery to deterministic engineering. Computational rigor applied to therapeutics, agriculture, and material sciences.</p>
</div>
<div className="relative z-10 pt-8 border-t border-white/10 mt-8 flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white/5 text-[0.6rem] font-mono uppercase tracking-widest rounded text-gray-400 group-hover:bg-[#E8FF47] group-hover:text-black transition-colors">Synthetic Biology</span>
<span className="px-3 py-1.5 bg-white/5 text-[0.6rem] font-mono uppercase tracking-widest rounded text-gray-400 group-hover:bg-[#E8FF47] group-hover:text-black transition-colors">Computational Rx</span>
</div>
</div>

<div className="group relative bg-white border border-black/10 p-8 hover:border-black/30 transition-all duration-500 reveal-element bracket-corners min-h-[400px] flex flex-col justify-between overflow-hidden hover-target md:col-span-2">
<div className="absolute left-0 right-0 h-[1px] bg-[#E8FF47] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite] z-0 shadow-[0_0_10px_#E8FF47]"></div>
<style>@keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }</style>
<div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-start justify-between">
<div className="max-w-xl">
<div className="flex justify-between items-start mb-8">
<div className="w-14 h-14 bg-[#f5f5f3] flex items-center justify-center text-2xl text-black border border-black/5 group-hover:bg-[#E8FF47] transition-colors duration-500 rounded-lg shadow-sm">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
</div>
</div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 group-hover:-translate-y-1 transition-transform">Energy Transition</h3>
<p className="text-gray-600 text-sm leading-relaxed">Replacing fossil substrates with scalable, clean base-load power. From fusion and advanced fission to grid-scale storage and electrified industrial processes.</p>
</div>
<div className="w-full md:w-64 bg-[#f5f5f3] border border-black/5 rounded-xl p-6 relative overflow-hidden group-hover:border-black/20 transition-colors">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-4">Capital Allocation</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-semibold text-black">Nuclear</span> <span className="text-gray-500 font-mono">45%</span></div>
<div className="w-full bg-black/10 h-1 rounded"><div className="w-[45%] bg-black h-full rounded"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-semibold text-black">Grid Tech</span> <span className="text-gray-500 font-mono">35%</span></div>
<div className="w-full bg-black/10 h-1 rounded"><div className="w-[35%] bg-black h-full rounded"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1"><span className="font-semibold text-black">Storage</span> <span className="text-gray-500 font-mono">20%</span></div>
<div className="w-full bg-black/10 h-1 rounded"><div className="w-[20%] bg-black h-full rounded"></div></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-32 px-6 lg:px-12 bg-white relative border-b border-black/10" id="portfolio">
<div className="absolute inset-0 bg-grid z-0 opacity-30 pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 reveal-element gap-8">
<div className="max-w-2xl relative pl-6">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-black"></div>
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-black"></span> 02 // Select Investments
                    </div>
<h2 className="text-5xl md:text-7xl font-syne font-semibold tracking-tighter leading-[0.9]">Conviction <br/> applied.</h2>
</div>
<div className="flex gap-12 text-[0.65rem] font-mono uppercase tracking-widest">
<div>
<div className="text-gray-400 mb-1">Total Active</div>
<div className="text-black text-sm font-semibold">47 Co's</div>
</div>
<div>
<div className="text-gray-400 mb-1">Total Exits</div>
<div className="text-black text-sm font-semibold">12 IPOS / M&amp;A</div>
</div>
</div>
</div>
<div className="border-t-2 border-black accordion-container">

<div className="expand-row group border-b border-black/10 cursor-pointer hover-target reveal-element">
<div className="py-10 flex items-center justify-between group-hover:px-6 transition-all duration-500 relative">
<div className="flex items-center gap-16 w-1/2">
<div className="text-[0.65rem] font-mono text-gray-400 hidden lg:block w-8">01</div>
<h3 className="text-4xl md:text-5xl font-syne font-semibold tracking-tight group-hover:translate-x-4 transition-transform duration-500">Anthropic</h3>
</div>
<div className="hidden md:flex gap-12 w-1/4 text-[0.65rem] font-mono uppercase tracking-widest">
<div><span className="text-gray-400 block mb-1">Sector</span> <span className="text-black font-semibold">AI Foundation</span></div>
<div><span className="text-gray-400 block mb-1">Stage</span> <span className="px-2 py-0.5 bg-black text-[#E8FF47] rounded block">Series C</span></div>
</div>
<div className="w-auto flex justify-end items-center">
<div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-[#E8FF47] group-hover:border-black transition-all duration-500 overflow-hidden relative">
<iconify-icon className="text-xl absolute transition-transform duration-500 group-[.active]:-translate-y-12" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-xl absolute translate-y-12 transition-transform duration-500 group-[.active]:translate-y-0" icon="solar:minus-linear"></iconify-icon>
</div>
</div>
</div>
<div className="expand-content bg-[#f5f5f3] group-[.active]:border-t border-black/5">
<div className="expand-inner">
<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 border-l-2 border-black pl-6">
<h4 className="text-xl font-syne font-semibold mb-4">Steerable, interpretable, safe AI systems.</h4>
<p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">Led the $50M Series A, continuous follow-on. Developing Claude and pioneering Constitutional AI to align models with human intent.</p>
<a className="inline-flex items-center gap-2 text-[0.65rem] font-mono uppercase tracking-widest font-semibold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors" href="#">
                                        Visit Platform <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Initial Check</div>
<div className="text-2xl font-syne font-semibold">$15.0M</div>
</div>
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Board Seat</div>
<div className="text-sm font-semibold">Sarah Chen</div>
</div>
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm col-span-2 sm:col-span-1">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Co-Investors</div>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-gray-100 text-[0.6rem] rounded">Spark</span>
<span className="px-2 py-1 bg-gray-100 text-[0.6rem] rounded">Founders Fund</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="expand-row group border-b border-black/10 cursor-pointer hover-target reveal-element">
<div className="py-10 flex items-center justify-between group-hover:px-6 transition-all duration-500 relative">
<div className="flex items-center gap-16 w-1/2">
<div className="text-[0.65rem] font-mono text-gray-400 hidden lg:block w-8">02</div>
<h3 className="text-4xl md:text-5xl font-syne font-semibold tracking-tight group-hover:translate-x-4 transition-transform duration-500">Anduril</h3>
</div>
<div className="hidden md:flex gap-12 w-1/4 text-[0.65rem] font-mono uppercase tracking-widest">
<div><span className="text-gray-400 block mb-1">Sector</span> <span className="text-black font-semibold">Defense Tech</span></div>
<div><span className="text-gray-400 block mb-1">Stage</span> <span className="px-2 py-0.5 bg-black text-[#E8FF47] rounded block">Growth</span></div>
</div>
<div className="w-auto flex justify-end items-center">
<div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-[#E8FF47] group-hover:border-black transition-all duration-500 overflow-hidden relative">
<iconify-icon className="text-xl absolute transition-transform duration-500 group-[.active]:-translate-y-12" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="text-xl absolute translate-y-12 transition-transform duration-500 group-[.active]:translate-y-0" icon="solar:minus-linear"></iconify-icon>
</div>
</div>
</div>
<div className="expand-content bg-[#f5f5f3] group-[.active]:border-t border-black/5">
<div className="expand-inner">
<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 border-l-2 border-black pl-6">
<h4 className="text-xl font-syne font-semibold mb-4">Software-defined defense.</h4>
<p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">Rebuilding the arsenal of democracy through rapid iteration. Hardware-enabled systems driven by the Lattice OS platform.</p>
<a className="inline-flex items-center gap-2 text-[0.65rem] font-mono uppercase tracking-widest font-semibold border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors" href="#">
                                        Visit Platform <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Initial Check</div>
<div className="text-2xl font-syne font-semibold">$18.5M</div>
</div>
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Board Seat</div>
<div className="text-sm font-semibold">Marcus Vance</div>
</div>
<div className="bg-white p-5 rounded-xl border border-black/5 shadow-sm col-span-2 sm:col-span-1">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-2">Co-Investors</div>
<div className="flex flex-wrap gap-1">
<span className="px-2 py-1 bg-gray-100 text-[0.6rem] rounded">a16z</span>
<span className="px-2 py-1 bg-gray-100 text-[0.6rem] rounded">Elad Gil</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto overflow-hidden relative">
<div className="text-center mb-20 reveal-element relative z-10">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-4 flex items-center justify-center gap-3">
<span className="w-1.5 h-1.5 bg-black"></span> 03 // The Framework
            </div>
<h2 className="text-5xl md:text-6xl font-syne font-semibold tracking-tighter">How we partner.</h2>
</div>
<div className="flex flex-col lg:flex-row h-auto lg:h-[500px] gap-2 rounded-3xl overflow-hidden reveal-element p-2 bg-white border border-black/10 shadow-2xl relative z-10">
<div className="flex-accordion-item bg-[#f5f5f3] border border-black/5 p-8 rounded-2xl flex flex-col justify-between cursor-default hover-target group">
<img alt="Sourcing" className="absolute inset-0 w-full h-full object-cover z-0 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-mono text-[0.65rem] font-semibold border border-black/10 accent-target transition-colors shadow-sm">01</div>
<div className="text-[0.65rem] font-mono uppercase tracking-widest text-black/50 group-hover:text-white/50 bg-white/80 group-hover:bg-black/80 px-2 py-1 rounded backdrop-blur transition-colors">PHASE A</div>
</div>
<div className="relative z-10 mt-12 lg:mt-0 max-w-xs">
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 ac-text transition-colors">Sourcing</h3>
<p className="text-sm text-gray-500 ac-subtext max-h-0 lg:max-h-full opacity-0 lg:opacity-100 overflow-hidden lg:overflow-visible transition-all duration-700 leading-relaxed font-light">Thematic research and proprietary network mapping to identify outliers before they are consensus.</p>
</div>
</div>
<div className="flex-accordion-item bg-[#f5f5f3] border border-black/5 p-8 rounded-2xl flex flex-col justify-between cursor-default hover-target group">
<img alt="Diligence" className="absolute inset-0 w-full h-full object-cover z-0 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-mono text-[0.65rem] font-semibold border border-black/10 accent-target transition-colors shadow-sm">02</div>
<div className="text-[0.65rem] font-mono uppercase tracking-widest text-black/50 group-hover:text-white/50 bg-white/80 group-hover:bg-black/80 px-2 py-1 rounded backdrop-blur transition-colors">PHASE B</div>
</div>
<div className="relative z-10 mt-12 lg:mt-0 max-w-xs">
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 ac-text transition-colors">Diligence</h3>
<p className="text-sm text-gray-500 ac-subtext max-h-0 lg:max-h-full opacity-0 lg:opacity-100 overflow-hidden lg:overflow-visible transition-all duration-700 leading-relaxed font-light">Deep technical audits by our EIRs. We don't rely on consultants; we read the whitepapers and the code.</p>
</div>
</div>
<div className="flex-accordion-item bg-[#f5f5f3] border border-black/5 p-8 rounded-2xl flex flex-col justify-between cursor-default hover-target group">
<img alt="Partnership" className="absolute inset-0 w-full h-full object-cover z-0 grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="relative z-10 flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center font-mono text-[0.65rem] font-semibold border border-black/10 accent-target transition-colors shadow-sm">03</div>
<div className="text-[0.65rem] font-mono uppercase tracking-widest text-black/50 group-hover:text-white/50 bg-white/80 group-hover:bg-black/80 px-2 py-1 rounded backdrop-blur transition-colors">PHASE C</div>
</div>
<div className="relative z-10 mt-12 lg:mt-0 max-w-xs">
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-4 ac-text transition-colors">Partnership</h3>
<p className="text-sm text-gray-500 ac-subtext max-h-0 lg:max-h-full opacity-0 lg:opacity-100 overflow-hidden lg:overflow-visible transition-all duration-700 leading-relaxed font-light">Clean term sheets, rapid execution, and a commitment to protecting founder control and vision.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#050505] text-white border-y border-white/10 relative overflow-hidden" id="team">
<div className="absolute inset-0 bg-grid-dark z-0 opacity-40"></div>
<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#E8FF47] rounded-full blur-[120px] opacity-[0.05] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto relative z-10">
<div className="flex justify-between items-end mb-24 reveal-element border-b border-white/10 pb-12">
<div className="max-w-2xl">
<div className="text-[0.65rem] font-mono text-[#E8FF47] uppercase tracking-widest mb-4 flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-[#E8FF47]"></span> 04 // The Partnership
                    </div>
<h2 className="text-5xl md:text-7xl font-syne font-semibold tracking-tighter leading-[0.9]">Operators funding <br/>operators.</h2>
</div>
<div className="hidden md:block text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest text-right">
                    Former technical founders <br/> and engineers.
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
<div className="tilt-card relative group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover-target" onmouseleave="resetTilt(this)" onmousemove="handleTilt(event, this)">
<img alt="Sarah Chen" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 w-full h-2 bg-gradient-to-b from-transparent via-[#E8FF47]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite] pointer-events-none"></div>
<div className="absolute top-6 right-6 text-[0.65rem] font-mono text-[#E8FF47] bg-black/50 px-2 py-1 rounded backdrop-blur border border-white/10 tilt-card-float">
                        ID: CHEN_01
                    </div>
<div className="absolute bottom-0 left-0 p-8 tilt-card-inner w-full">
<div className="h-0 overflow-hidden group-hover:h-20 transition-all duration-500 mb-2 opacity-0 group-hover:opacity-100 border-l border-[#E8FF47] pl-3">
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Focus</div>
<div className="text-xs text-white mb-2">AI Infra / Semiconductors</div>
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Board Seats</div>
<div className="text-xs text-white">Anthropic, Scale, Lambda</div>
</div>
<div className="flex justify-between items-end border-t border-white/20 pt-4 group-hover:border-[#E8FF47] transition-colors duration-500">
<div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-1 text-white">Sarah Chen</h3>
<p className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-widest">Managing Partner</p>
</div>
</div>
</div>
</div>
<div className="tilt-card relative group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover-target" onmouseleave="resetTilt(this)" onmousemove="handleTilt(event, this)">
<img alt="Dr. Elena Rostova" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 w-full h-2 bg-gradient-to-b from-transparent via-[#E8FF47]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite] pointer-events-none delay-100"></div>
<div className="absolute top-6 right-6 text-[0.65rem] font-mono text-[#E8FF47] bg-black/50 px-2 py-1 rounded backdrop-blur border border-white/10 tilt-card-float">
                        ID: ROST_02
                    </div>
<div className="absolute bottom-0 left-0 p-8 tilt-card-inner w-full">
<div className="h-0 overflow-hidden group-hover:h-20 transition-all duration-500 mb-2 opacity-0 group-hover:opacity-100 border-l border-[#E8FF47] pl-3">
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Focus</div>
<div className="text-xs text-white mb-2">SynBio / Comp. Therapeutics</div>
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Prior</div>
<div className="text-xs text-white">Founder, Cell OS (Acq. '19)</div>
</div>
<div className="flex justify-between items-end border-t border-white/20 pt-4 group-hover:border-[#E8FF47] transition-colors duration-500">
<div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-1 text-white">Dr. E. Rostova</h3>
<p className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-widest">General Partner</p>
</div>
</div>
</div>
</div>
<div className="tilt-card relative group cursor-pointer aspect-[3/4] rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover-target" onmouseleave="resetTilt(this)" onmousemove="handleTilt(event, this)">
<img alt="Marcus Vance" className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute inset-0 w-full h-2 bg-gradient-to-b from-transparent via-[#E8FF47]/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[scan_3s_linear_infinite] pointer-events-none delay-200"></div>
<div className="absolute top-6 right-6 text-[0.65rem] font-mono text-[#E8FF47] bg-black/50 px-2 py-1 rounded backdrop-blur border border-white/10 tilt-card-float">
                        ID: VANC_03
                    </div>
<div className="absolute bottom-0 left-0 p-8 tilt-card-inner w-full">
<div className="h-0 overflow-hidden group-hover:h-20 transition-all duration-500 mb-2 opacity-0 group-hover:opacity-100 border-l border-[#E8FF47] pl-3">
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Focus</div>
<div className="text-xs text-white mb-2">Defense / Aerospace</div>
<div className="text-[0.6rem] font-mono uppercase text-gray-400 mb-1">Board Seats</div>
<div className="text-xs text-white">Anduril, AstroMechanics</div>
</div>
<div className="flex justify-between items-end border-t border-white/20 pt-4 group-hover:border-[#E8FF47] transition-colors duration-500">
<div>
<h3 className="text-3xl font-syne font-semibold tracking-tight mb-1 text-white">Marcus Vance</h3>
<p className="font-mono text-[0.65rem] text-gray-400 uppercase tracking-widest">Partner</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#f5f5f3] relative border-b border-black/10" id="pipeline">
<div className="max-w-[90rem] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
<div className="xl:col-span-5 reveal-element">
<div className="text-[0.65rem] font-mono text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span> LP Data Room
                </div>
<h2 className="text-5xl md:text-7xl font-syne font-semibold tracking-tighter mb-8 leading-[0.9]">Live <br/>Deal Flow.</h2>
<p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-md font-light border-l border-black/20 pl-4">
                    Transparency is our default. Our Limited Partners receive real-time API access to our pipeline, allowing them to track technical diligence from initial screening to final term sheet execution.
                </p>
<a className="magnetic-btn group inline-flex items-center gap-4 bg-white border border-black/10 px-8 py-4 rounded-full text-xs font-semibold hover:bg-black hover:text-white transition-all uppercase tracking-widest shadow-sm hover:shadow-xl hover-target" data-strength="15" href="#">
                    Request Access <iconify-icon className="text-lg" icon="solar:lock-password-linear"></iconify-icon>
</a>
</div>
<div className="xl:col-span-7 bg-white rounded-3xl p-2 border border-black/10 shadow-2xl reveal-element perspective-1000">
<div className="bg-gray-50 rounded-2xl border border-black/5 p-6 md:p-8 transform rotate-y-[-2deg] transition-transform duration-700 hover:rotate-y-0">
<div className="flex justify-between items-center mb-8 border-b border-black/5 pb-4">
<div className="flex items-center gap-4">
<div className="text-[0.65rem] font-mono font-semibold uppercase tracking-widest text-black">Fund IV Pipeline</div>
<div className="px-2 py-1 bg-black text-[#E8FF47] text-[0.6rem] font-mono rounded">LIVE</div>
</div>
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full border border-black/10"></span>
<span className="w-2.5 h-2.5 rounded-full border border-black/10"></span>
<span className="w-2.5 h-2.5 rounded-full bg-black/10"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white border border-black/5 rounded-xl p-4 shadow-sm hover:border-black/20 transition-colors">
<div className="text-[0.6rem] font-mono text-gray-400 uppercase tracking-widest mb-4">Active Diligence</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group hover-target border border-transparent hover:border-black/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-mono text-xs border border-blue-100">Q</div>
<div>
<div className="font-syne font-semibold text-sm">Project Quantum</div>
<div className="text-[0.6rem] font-mono text-gray-500 uppercase">Computing · Seed</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_5px_#fbbf24] group-hover:scale-150 transition-transform"></div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group hover-target border border-transparent hover:border-black/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center font-mono text-xs border border-green-100">N</div>
<div>
<div className="font-syne font-semibold text-sm">NeuroLink Alt</div>
<div className="text-[0.6rem] font-mono text-gray-500 uppercase">BioTech · Ser A</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_5px_#4ade80] group-hover:scale-150 transition-transform"></div>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group hover-target border border-transparent hover:border-black/5 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center font-mono text-xs border border-gray-200">A</div>
<div>
<div className="font-syne font-semibold text-sm">AeroSpace X</div>
<div className="text-[0.6rem] font-mono text-gray-500 uppercase">DeepTech · Pre</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-gray-300 group-hover:scale-150 transition-transform"></div>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="bg-[#050505] text-white border border-black/5 rounded-xl p-4 shadow-sm flex-1 group hover-target relative overflow-hidden">
<div className="text-[0.6rem] font-mono text-gray-400 uppercase tracking-widest mb-4">Capital Deployed MTD</div>
<div className="text-3xl font-syne font-semibold mb-2 text-[#E8FF47]">$42.5M</div>
<div className="absolute bottom-4 left-4 right-4 h-8 flex items-end gap-1 opacity-50">
<div className="w-full bg-white/20 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all duration-300"></div>
<div className="w-full bg-white/30 h-[50%] rounded-t-sm group-hover:h-[60%] transition-all duration-300 delay-75"></div>
<div className="w-full bg-white/50 h-[40%] rounded-t-sm group-hover:h-[80%] transition-all duration-300 delay-100"></div>
<div className="w-full bg-[#E8FF47] h-[90%] rounded-t-sm group-hover:h-[100%] transition-all duration-300 delay-150 shadow-[0_0_10px_#E8FF47]"></div>
</div>
</div>
<div className="bg-white border border-black/5 rounded-xl p-4 shadow-sm h-32 relative overflow-hidden">
<div className="text-[0.6rem] font-mono text-gray-400 uppercase tracking-widest mb-3">Live Activity</div>
<div className="absolute inset-x-4 animate-[marquee_10s_linear_infinite] flex flex-col gap-3">
<div className="text-[0.65rem] font-mono text-black border-l-2 border-green-500 pl-2">Term Sheet signed: Quantum</div>
<div className="text-[0.65rem] font-mono text-gray-500 border-l-2 border-amber-500 pl-2">Tech Audit complete: NeuroLink</div>
<div className="text-[0.65rem] font-mono text-gray-500 border-l-2 border-gray-300 pl-2">Partner Meeting set: AeroSpace</div>
<div className="text-[0.65rem] font-mono text-black border-l-2 border-green-500 pl-2">Term Sheet signed: Quantum</div>
<div className="text-[0.65rem] font-mono text-gray-500 border-l-2 border-amber-500 pl-2">Tech Audit complete: NeuroLink</div>
<div className="text-[0.65rem] font-mono text-gray-500 border-l-2 border-gray-300 pl-2">Partner Meeting set: AeroSpace</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-48 px-6 lg:px-12 text-center bg-[#050505] text-white relative overflow-hidden flex flex-col items-center justify-center border-y border-white/10 group/cta" id="apply">
<div className="absolute inset-0 bg-grid-dark z-0 opacity-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#000_30%,#E8FF47_50%,#000_70%,#000_100%)] opacity-20 blur-[80px] group-hover/cta:rotate-180 transition-transform duration-[10s] ease-linear pointer-events-none"></div>
<div className="crosshair dark top-12 left-12 hidden lg:block"></div>
<div className="crosshair dark top-12 right-12 hidden lg:block"></div>
<div className="crosshair dark bottom-12 left-12 hidden lg:block"></div>
<div className="crosshair dark bottom-12 right-12 hidden lg:block"></div>
<div className="relative z-10 max-w-4xl mx-auto reveal-element">
<div className="text-[0.65rem] font-mono text-[#E8FF47] uppercase tracking-widest mb-8 border border-white/10 px-4 py-1.5 rounded-full inline-block backdrop-blur">
                Open for Technical Proposals
            </div>
<h2 className="text-6xl md:text-[7rem] font-syne font-semibold tracking-tighter mb-10 leading-[0.85]">Architect the <br/> <span className="text-white hover:text-[#E8FF47] transition-colors duration-500 relative inline-block hover-target">next era.</span></h2>
<p className="text-gray-400 mb-16 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">If you are working on a deeply technical problem with the potential to re-architect an industry, bypass the warm intro. Submit your raw thesis.</p>
<a className="magnetic-btn group inline-flex items-center gap-4 bg-white text-black pl-8 pr-2 py-2 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#E8FF47] transition-colors duration-500 shadow-[0_0_40px_rgba(232,255,71,0.1)] hover:shadow-[0_0_60px_rgba(232,255,71,0.3)] hover-target" data-strength="20" href="#">
<span>Submit Protocol</span>
<span className="w-10 h-10 bg-black text-[#E8FF47] rounded-full flex items-center justify-center group-hover:bg-[#E8FF47] group-hover:text-black transition-colors duration-500 transform group-hover:rotate-45">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</a>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/10 pt-20 pb-8 px-6 lg:px-12 text-white relative z-10">
<div className="max-w-[90rem] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<div className="font-syne font-semibold tracking-tighter text-4xl mb-6 flex items-center gap-3">
                        VNTUR
                        <span className="w-2 h-2 rounded-full bg-[#E8FF47] animate-pulse"></span>
</div>
<p className="text-gray-500 text-sm max-w-sm mb-8 leading-relaxed font-light">
                        Capital for technically relentless founders re-engineering the physical and digital world at the edge of compute, biology, and energy.
                    </p>
<div className="text-[0.65rem] font-mono text-gray-600 uppercase tracking-widest bg-white/5 inline-flex px-3 py-1.5 rounded-md border border-white/10">
                        SYS.STATUS: <span className="text-[#E8FF47] ml-2">ONLINE &amp; SECURE</span>
</div>
</div>
<div>
<div className="text-[0.65rem] font-mono text-gray-600 uppercase tracking-widest mb-6">Index</div>
<ul className="space-y-4 text-sm font-medium text-gray-400">
<li><a className="hover:text-[#E8FF47] transition-colors hover-target" href="#thesis">Thesis</a></li>
<li><a className="hover:text-[#E8FF47] transition-colors hover-target" href="#portfolio">Portfolio</a></li>
<li><a className="hover:text-[#E8FF47] transition-colors hover-target" href="#pipeline">Data Room API</a></li>
<li><a className="hover:text-[#E8FF47] transition-colors hover-target" href="#team">Partners</a></li>
</ul>
</div>
<div>
<div className="text-[0.65rem] font-mono text-gray-600 uppercase tracking-widest mb-6">Network</div>
<ul className="space-y-4 text-sm font-medium text-gray-400">
<li><a className="hover:text-[#E8FF47] transition-colors flex items-center gap-2 hover-target w-max" href="#">X / Twitter <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-[#E8FF47] transition-colors flex items-center gap-2 hover-target w-max" href="#">LinkedIn <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-[#E8FF47] transition-colors flex items-center gap-2 hover-target w-max" href="#">GitHub <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
<li><a className="hover:text-[#E8FF47] transition-colors flex items-center gap-2 hover-target w-max" href="#">Substack <iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-[0.65rem] font-mono text-gray-600 uppercase tracking-widest">
<div>© 2024 VNTUR CAPITAL MANAGEMENT LLC.</div>
<div className="mt-4 md:mt-0 flex gap-6">
<a className="hover:text-white transition-colors hover-target" href="#">Privacy Protocol</a>
<a className="hover:text-white transition-colors hover-target" href="#">Terms of Use</a>
<span>REG. D / RULE 506(C)</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
