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



        import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

        // WebGL Initialization (Pure Canvas Adaptation)
        function initWebGL() {
            const container = document.getElementById('webgl-container');
            const scene = new THREE.Scene();
            
            // Camera setup
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 30, 60);
            camera.lookAt(0, -10, 0);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Generate Topographical Grid
            const gridSize = 120;
            const size = 100;
            const geometry = new THREE.BufferGeometry();
            const positions = [];
            
            for(let i=0; i<=gridSize; i++) {
                for(let j=0; j<=gridSize; j++) {
                    const x = (i / gridSize - 0.5) * size;
                    const z = (j / gridSize - 0.5) * size;
                    
                    const distance = Math.sqrt(x*x + z*z);
                    let baseY = 35 * Math.exp(-Math.pow(distance/25, 2));
                    const noise = Math.sin(x * 0.4) * 3 + Math.cos(z * 0.4) * 3 + Math.sin(x*z * 0.05) * 2;
                    let y = baseY + noise - 15;

                    if(y > -15) {
                        positions.push(x, y, z);
                    }
                }
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

            const material = new THREE.PointsMaterial({
                size: 0.18,
                color: 0xe6eb8f,
                transparent: true,
                opacity: 0.85,
                sizeAttenuation: true
            });

            const points = new THREE.Points(geometry, material);
            scene.add(points);

            // Animation Loop
            let time = 0;
            function animate() {
                requestAnimationFrame(animate);
                time += 0.01;

                points.rotation.y = Math.sin(time * 0.2) * 0.1;
                
                const posAttribute = points.geometry.attributes.position;
                const vertex = new THREE.Vector3();
                for (let i = 0; i < posAttribute.count; i++) {
                    vertex.fromBufferAttribute(posAttribute, i);
                    vertex.y += Math.sin(time * 2 + vertex.x * 0.5) * 0.02;
                    posAttribute.setY(i, vertex.y);
                }
                posAttribute.needsUpdate = true;

                renderer.render(scene, camera);
            }
            animate();

            // Responsive Handling
            window.addEventListener('resize', () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                initWebGL();
            }, 100);
        });

    


        const container = document.getElementById('process-scroll-container');
        const indicator = document.getElementById('scroll-indicator-bar');
        
        if (container && indicator) {
            container.addEventListener('scroll', () => {
                const maxScroll = container.scrollWidth - container.clientWidth;
                const percentage = container.scrollLeft / maxScroll;
                // Move indicator from 0% to 80% (since width is 20%)
                const translateVal = percentage * 400; 
                indicator.style.transform = `translateX(${percentage * 400}%)`;
            });
        }
    


            (function() {
                function updateCATime() {
                    const el = document.getElementById('footer-time-ca');
                    if (el) {
                        const time = new Date().toLocaleTimeString('en-US', {
                            timeZone: 'America/Los_Angeles',
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true
                        ime();
                setInterval(updateCATime, 1000);
            })();
        


        function updateFooterTime() {
            const now = new Date();
            const options = { 
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            };
            const timeString = now.toLocaleTimeString('en-US', options);
            const timeElement = document.getElementById('footer-time');
            if (timeElement) {
                timeElement.textContent = 'NYC — ' + timeString;
            }
        }
        updateFooterTime();
        setInterval(updateFooterTime, 60000);
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><section className="bg-[#050505] text-slate-300 font-sans antialiased overflow-hidden w-screen h-screen">
<div className="fixed inset-0 z-0 opacity-100 mix-blend-screen" id="webgl-container"></div>





</section></div>


<nav className="fixed bg-black/10 w-full z-40 border-white/5 border-b top-0 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-3 group gap-x-3 gap-y-3 items-center">

<div className="w-8 h-8 relative">
<img alt="Pixtora Logo" className="bg-center w-full h-full object-contain translate-x-1 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52139dd7-3130-4b48-8512-249a949b1885_320w.png"/>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">Work</a>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">Services</a>
<a className="text-sm transition-colors text-white/60 hover:text-white" href="#">About</a>
<button className="text-sm px-4 py-2 rounded-full transition-all border bg-white/10 hover:bg-white/20 text-white border-white/5">
                    Contact
                </button>
</div>
</div>
</nav>

<main className="min-h-screen flex flex-col z-10 pt-32 pb-20 relative justify-center" style={{cursor: 'url(\'data:image/svg+xml'}}>
<style>
        body, *, [data-element-id="aura-emmpj63f30nvryq0"] {
            cursor: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%2211%22%20y%3D%2211%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23ffffff%22%2F%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%224%22%20height%3D%224%22%20fill%3D%22%23d4af37%22%20opacity%3D%220.8%22%2F%3E%3Crect%20x%3D%228%22%20y%3D%228%22%20width%3D%228%22%20height%3D%228%22%20fill%3D%22%23d4af37%22%20opacity%3D%220.4%22%2F%3E%3C%2Fsvg%3E') 12 12, auto !important;
        }
        .cursor-dot { display: none !important; }
    </style>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-7 flex flex-col relative space-y-8 items-start">

<div className="relative">
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] flex flex-col bg-clip-text text-6xl text-transparent tracking-tighter bg-gradient-to-b from-white via-[#fcf6ba] to-[#d4af37]">
<span className="md:text-5xl lg:text-6xl text-4xl text-[#f3e3a8]/70 font-serif-italic mb-1 ml-4">Crafting</span>
<span className="md:text-9xl lg:text-[10rem] text-7-tighter font-bold text-[#d4af37]" style={{textShadow: '0 0 60px rgba(212, 175, 55, 0.4), 0 0 120px rgba(212,175,55,0.2)'}}>DIGITAL</span>
<span className="md:text-5xl lg:text-6xl -mt-2 text-4xl text-[#f3e3a8]/70 font-serif-italic text-right mr-4">Legacies</span>
</h1>
</div>
<p className="md:text-xl leading-relaxed text-lg font-light text-[#eae0c5]/70 max-w-lg mt-6">
                Premium web design for forward-thinking brands. We build immersive digital experiences that leave a lasting mark.
            </p>

<div className="pt-4">
<button className="group inline-flex transition-all duration-500 hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#fbbf24] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.5),inset_0_0_20px_rgba(212,175,55,0.3)] focus:outline-none text-lg font-medium text-[#d4af37] bg-transparent border-[#d4af37]/40 border rounded-full pt-5 pr-10 pb-5 pl-10 relative shadow-[inset_0_0_12px_rgba(212,175,55,0.15)] backdrop-blur-sm items-center justify-center">
<span className="flex items-center gap-2">Let's Design Your Website!</span>
</button>
</div>
</div>

<div className="lg:col-span-5 lg:mt-0 mt-12 relative">
<div className="glass-panel hover:rotate-0 transition-transform duration-700 ease-out rounded-2xl pt-2 pr-2 pb-2 pl-2 rotate-3">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl border bg-gray-900 border-[#d4af37]/20">

<div className="absolute inset-0 flex items-center justify-center bg-black">
<div className="w-full h-full relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full blur-3xl animate-pulse bg-[#d4af37]/20"></div>
<div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl bg-yellow-500/20"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex animate-[spin_10s_linear_infinite] w-48 h-48 border-[#d4af37]/20 border rounded-full items-center justify-center">
<div className="w-32 h-32 border-[#d4af37]/40 border rounded-full"></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-center justify-between mb-2">
<div className="h-2 w-16 rounded-full bg-white/20"></div>
<div className="h-6 w-6 rounded-full border flex items-center justify-center border-white/20">
<svg className="fill-white w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-white/10">
<div className="h-full w-1/3 bg-[#d4af37]"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-4 right-4 px-3 py-1 backdrop-blur-sm rounded-full border flex items-center gap-2 bg-black/50 border-[#d4af37]/20">
<div className="w-1.5 h-1.5 rounded-full animate-pulse bg-[#d4af37]"></div>
<span className="text-[10px] uppercase tracking-widest font-semibold text-[#f3e3a8]/90">Reel Loop</span>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-10 text-[#d4af37]/10">
<svg className="w-24 h-24 animate-[spin_8s_linear_infinite]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 6v12"></path><path className="" d="M17.196 9 6.804 15"></path><path className="" d="m6.804 9 10.392 6"></path></svg>
</div>
</div>
</div>
</main>

<section className="border-y overflow-hidden z-20 bg-black/30 border-white/10 pt-6 pb-6 relative backdrop-blur-sm">
<div className="flex whitespace-nowrap animate-marquee">
<div className="flex gap-12 mr-6 ml-6 gap-x-12 gap-y-12 items-center">
<span className="text-2xl font-semibold tracking-tight text-white/40">PREMIUM WEB DESIGN</span>
<svg className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white">FREELANCE WEBSITE DESIGNER</span>
<svg className="w-[24px] h-[24px] fill-[#d4af37] text-[#d4af37]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white/40">UI/UX STRATEGY</span>
<svg className="w-[24px] h-[24px] fill-[#d4af37] text-[#d4af37]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white/40">DIGITAL DEVELOPMENT</span>
<svg className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>

<div className="flex mr-6 ml-6 gap-x-12 gap-y-12 items-center">
<span className="text-2xl font-semibold tracking-tight text-white/40">PREMIUM WEB DESIGN</span>
<svg className="w-[24px] h-[24px] fill-[#d4af37] text-[#d4af37]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white">FREELANCE WEBSITE DESIGNER</span>
<svg className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white/40">UI/UX STRATEGY</span>
<svg className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-2xl font-semibold tracking-tight text-white/40">DIGITAL DEVELOPMENT</span>
<svg className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</section>

<section className="min-h-screen text-white bg-black z-20 pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

<div className="lg:sticky lg:top-32 h-fit flex flex-col gap-10">
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-[#d4af37]/50"></div>
<span className="text-xs font-medium uppercase tracking-widest text-[#d4af37]/80">About Studio</span>
</div>
<h2 className="text-5xl md:text-7xl font-serif-italic tracking-tight text-white leading-[0.9]">
                    Architects of
                    <span className="text-[#d4af37]">Digital Reality.</span>
</h2>
<p className="text-lg text-[#eae0c5]/70 font-light leading-relaxed max-w-md">
                    We bridge the gap between art and engineering. Our mission is to build digital legacies that stand
                    the test of time through visual storytelling and technical precision.
                </p>
</div>

<div className="relative w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm group border border-[#d4af37]/20">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none">
</div>

<img alt="Studio Founder" className="transition-all duration-[1.5s] ease-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100 opacity-80 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&amp;q=80" style={{filter: 'grayscale(80%) contrast(1.1) sepia(30%)'}}/>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="font-serif-italic text-2xl text-[#fcf6ba]">Our Philosophy</p>
<p className="text-sm text-[#eae0c5]/70 mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        Design creates culture. Culture shapes values. Values determine the future.
                    </p>
</div>
</div>

<div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#d4af37]/20">
<div className="space-y-1 group cursor-default">
<div className="group-hover:text-[#d4af37] transition-colors duration-300 text-4xl font-light text-[#fcf6ba]">1<span className="align-top text-lg text-[#d4af37]/60">+</span></div>
<div className="text-[10px] uppercase tracking-widest text-[#d4af37]/60">Years Exp</div>
</div>
<div className="space-y-1 group cursor-default">
<div className="group-hover:text-[#d4af37] transition-colors duration-300 text-4xl font-light text-[#fcf6ba]">50</div>
<div className="text-[10px] uppercase tracking-widest text-[#d4af37]/60">Projects</div>
</div>
<div className="space-y-1 group cursor-default">
<div className="group-hover:text-[#d4af37] transition-colors duration-300 text-4xl font-light text-[#fcf6ba]">1.2k</div>
<div className="text-[10px] uppercase tracking-widest text-[#d4af37]/60">Coffees</div>
</div>
</div>
</div>

<div className="flex flex-col gap-20 lg:pt-32 pb-20 gap-x-20 gap-y-20">

<div className="group relative">
<div className="aspect-square w-full overflow-hidden rounded-sm mb-6 border border-[#d4af37]/20 relative">
<div className="z-10 group-hover:opacity-100 transition-opacity duration-700 bg-[#d4af37]/10 opacity-0 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<img className="transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover grayscale sepia-[0.3] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1678690832311-bb6e361989ca?w=1600&amp;q=80"/>
</div>
<div className="flex justify-between items-start border-b border-[#d4af37]/20 pb-6">
<div className="max-w-xs">
<h3 className="text-xl font-medium text-[#fcf6ba] mb-2">Visual Storytelling</h3>
<p className="text-sm text-[#eae0c5]/70 leading-relaxed">
                            Crafting narratives that resonate on an emotional level, turning visitors into believers.
                        </p>
</div>
<span className="text-xs font-mono text-[#d4af37]/50">01</span>
</div>
</div>

<div className="py-12 px-8 border border-[#d4af37]/20 bg-[#d4af37]/[0.02] backdrop-blur-sm rounded-sm">
<svg className="w-6 h-6 text-[#d4af37]/60 mb-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
<h3 className="text-2xl text-[#fcf6ba] font-serif-italic mb-4">"We don't just design websites. We
                    engineer experiences that serve as the digital heartbeat of your brand."</h3>
<div className="flex items-center gap-3 mt-6">
<div className="text-xs">
<div className="text-[#d4af37]/80">Kunal Lonare</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pt-10">
<div className="space-y-4 pt-12">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#d4af37]/20 group relative">
<div className="z-10 bg-gradient-to-b from-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<img className="transition-all duration-700 group-hover:grayscale-0 w-full h-full object-cover grayscale sepia-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77ec9912-f757-4dfb-bf2c-1a6cb78cbe8c_800w.png"/>
</div>
<div className="text-xs uppercase tracking-widest text-[#d4af37]/60">Strategy</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm border border-[#d4af37]/20 group relative">
<div className="z-10 bg-gradient-to-b from-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<img className="w-full h-full object-cover grayscale sepia-[0.3] transition-all duration-700 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs uppercase tracking-widest text-[#d4af37]/60">Development</div>
</div>
</div>

<div className="group relative pt-12">
<div className="aspect-video w-full overflow-hidden rounded-sm mb-6 border border-[#d4af37]/20 relative">
<div className="z-10 group-hover:opacity-100 transition-opacity duration-700 bg-[#d4af37]/10 opacity-0 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<img className="transition-transform duration-1000 group-hover:scale-105 group-hover:opacity-100 opacity-60 w-full h-full object-cover scale-90 grayscale sepia-[0.3] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1725308353984-27d658b742e0?w=1600&amp;q=80"/>
</div>
<div className="flex justify-between items-start border-b border-[#d4af37]/20 pb-6">
<div className="max-w-xs">
<h3 className="text-xl font-medium text-[#fcf6ba] mb-2">The Studio</h3>
<p className="text-sm text-[#eae0c5]/70 leading-relaxed">
                            Our physical space reflects our digital philosophy: open, collaborative, and meticulously
                            organized.
                        </p>
</div>
<span className="text-xs font-mono text-[#d4af37]/50">03</span>
</div>
</div>
</div>
</div>
</section><section className="min-h-screen z-20 overflow-hidden flex flex-col text-white bg-black pt-32 pb-32 relative justify-center">

<div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen"></div>
<div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-[#aa8c2c]/10 rounded-full blur-[100px] pointer-events-none -z-10 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 w-full">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-24">
<div className="lg:col-span-8 space-y-6">
<div className="flex items-center gap-3">
<div className="h-px w-12 bg-gradient-to-r from-[#d4af37] to-transparent"></div>
<span className="text-xs font-medium uppercase tracking-widest text-[#f3e3a8]/70">Our Expertise</span>
</div>
<h2 className="text-6xl md:text-8xl font-serif-italic tracking-tight text-white leading-[0.9]">
                    What we Do<span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#d4af37] via-[#fcf6ba] to-[#aa8c2c] inline-block transform scale-150 origin-bottom ml-1">.</span>
</h2>
</div>
<div className="lg:col-span-4">
<p className="text-lg text-[#eae0c5]/70 font-light leading-relaxed text-left lg:text-right max-w-sm ml-auto">
                    We translate brand values into high-fidelity digital products with golden standards.
                </p>
</div>
</div>

<div className="flex flex-col border-t border-[#d4af37]/20" id="services-list">

<div className="group relative border-b border-[#d4af37]/20 transition-colors hover:bg-[#d4af37]/[0.02]">
<a className="block md:py-14 cursor-none w-full pt-10 pb-10" href="#">
<div className="flex items-center justify-between relative z-20 px-2">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-300">01</span>
<h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500 text-white/90 group-hover:text-white">Mobile App Interface</h3>
</div>
<div className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-[#d4af37]/10 backdrop-blur-sm group-hover:border-[#d4af37]/50">
<svg className="text-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10 rotate-2 scale-90 group-hover:rotate-6 group-hover:scale-100 shadow-2xl shadow-[#d4af37]/20">
<div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay z-20"></div>
<img alt="Mobile App Design" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 sepia-[0.3] opacity-60 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group relative border-b border-[#d4af37]/20 transition-colors hover:bg-[#d4af37]/[0.02]">
<a className="block md:py-14 cursor-none w-full pt-10 pb-10" href="#">
<div className="flex z-20 pr-2 pl-2 relative items-center justify-between">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-300">02</span>
<h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500 text-white/90 group-hover:text-white">Figma to Webflow</h3>
</div>
<div className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-[#d4af37]/10 backdrop-blur-sm group-hover:border-[#d4af37]/50">
<svg className="text-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="7" x2="17" y1="17" y2="7"></line><polyline className="" points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10 -rotate-1 scale-90 group-hover:-rotate-3 group-hover:scale-100 shadow-2xl shadow-[#aa8c2c]/20">
<div className="absolute inset-0 bg-[#aa8c2c]/10 mix-blend-overlay z-20"></div>
<img alt="Webflow Development" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 sepia-[0.3] opacity-60 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/972d7006-408e-4a0b-80fa-cc32d9476d69_1600w.png"/>
</div>
</div>

<div className="group relative border-b border-[#d4af37]/20 transition-colors hover:bg-[#d4af37]/[0.02]">
<a className="block py-10 md:py-14 w-full cursor-none" href="#">
<div className="flex items-center justify-between relative z-20 px-2">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-300">03</span>
<h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500 text-white/90 group-hover:text-white">Custom Development</h3>
</div>
<div className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-[#d4af37]/10 backdrop-blur-sm group-hover:border-[#d4af37]/50">
<svg className="text-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10 rotate-2 scale-90 group-hover:rotate-0 group-hover:scale-100 shadow-2xl shadow-[#f3e3a8]/10">
<div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay z-20"></div>
<img alt="Code Development" className="group-hover:opacity-100 transition-opacity duration-700 group-hover:grayscale-0 sepia-[0.3] opacity-60 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group relative border-b border-[#d4af37]/20 transition-colors hover:bg-[#d4af37]/[0.02]">
<a className="block py-10 md:py-14 w-full cursor-none" href="#">
<div className="flex items-center justify-between relative z-20 px-2">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors duration-300">04</span>
<h3 className="text-3xl md:text-5xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500 text-white/90 group-hover:text-white">SEO Strategy</h3>
</div>
<div className="w-12 h-12 rounded-full border border-[#d4af37]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-[#d4af37]/10 backdrop-blur-sm group-hover:border-[#d4af37]/50">
<svg className="text-[#d4af37]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] aspect-[16/9] bg-gray-900 rounded-lg overflow-hidden border border-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-10 -rotate-2 scale-90 group-hover:-rotate-6 group-hover:scale-100 shadow-2xl shadow-[#fcf6ba]/10">
<div className="absolute inset-0 bg-[#d4af37]/10 mix-blend-overlay z-20"></div>
<img alt="SEO Strategy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0 sepia-[0.3]" src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="mt-20 flex justify-center w-full">
<button className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-medium text-[#2a2208] rounded-full transition-all duration-300 hover:w-64 hover:px-12 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_0px_rgba(212,175,55,0.6)] border border-[#d4af37]/50">
<span className="transition-opacity group-hover:opacity-90 opacity-100 w-full h-full absolute top-0 right-0 bottom-0 left-0 bg-transparent"></span>
<span className="flex items-center gap-3 text-lg font-semibold tracking-tight relative">Explore our Work</span>
</button>
</div>
</div>
</section><section className="min-h-screen flex flex-col overflow-hidden bg-black w-full pt-24 pb-24 relative justify-center">

<div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#aa8c2c]/10 rounded-full blur-[100px] mix-blend-screen opacity-40"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">

<div className="mb-24 md:text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></div>
<span className="text-xs font-medium uppercase tracking-widest text-[#fcf6ba]/90">The Process</span>
</div>
<h2 className="text-5xl md:text-7xl font-serif-italic tracking-tight text-white mb-6 leading-[1.1]">
                Our Approach<span className="text-transparent bg-clip-text bg-gradient-to-br from-[#d4af37] via-[#fcf6ba] to-[#aa8c2c]">.</span>
</h2>
<p className="text-lg text-[#eae0c5]/60 font-light leading-relaxed max-w-xl mx-auto">
                A refined workflow transforming concepts into digital legacies. We lock in quality at every stage.
            </p>
</div>

<div className="relative group/scroll">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none md:hidden"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none md:hidden"></div>

<div className="flex md:hidden items-center gap-2 mb-4 text-[#d4af37]/60 px-1">
<svg className="animate-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="text-[10px] uppercase tracking-widest">Swipe to explore</span>
</div>

<div className="flex gap-4 md:gap-0 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-4 md:px-0 items-stretch" id="process-scroll-container">

<div className="snap-center shrink-0 w-80 md:w-72 h-80 relative group flex flex-col p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-gradient-to-b hover:from-[#d4af37]/10 hover:to-black transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]">
<div className="flex justify-between items-start mb-auto">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">01</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 text-[#fcf6ba] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/60 transition-all duration-500">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#fcf6ba] transition-colors">Discovery</h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-[#eae0c5]/70 transition-colors">Unearthing the core of your brand through deep research and strategy.</p>
</div>

<div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/0 rounded-br-xl group-hover:border-[#d4af37]/50 transition-all duration-500"></div>
</div>

<div className="hidden md:flex shrink-0 w-24 items-center justify-center relative">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#d4af37]/40 rotate-45"></div>
</div>
</div>

<div className="snap-center shrink-0 w-80 md:w-72 h-80 relative group flex flex-col p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-gradient-to-b hover:from-[#d4af37]/10 hover:to-black transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]">
<div className="flex justify-between items-start mb-auto">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">02</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 text-[#fcf6ba] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/60 transition-all duration-500">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect className="" height="18" rx="2" width="18" x="3" y="3"></rect><path className="" d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#fcf6ba] transition-colors">Wireframing</h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-[#eae0c5]/70 transition-colors">Architecting the user flow and structural blueprints.</p>
</div>
<div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/0 rounded-br-xl group-hover:border-[#d4af37]/50 transition-all duration-500"></div>
</div>

<div className="hidden md:flex shrink-0 w-24 items-center justify-center relative">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#d4af37]/40 rotate-45"></div>
</div>
</div>

<div className="snap-center shrink-0 w-80 md:w-72 h-80 relative group flex flex-col p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-gradient-to-b hover:from-[#d4af37]/10 hover:to-black transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]">
<div className="flex justify-between items-start mb-auto">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">03</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 text-[#fcf6ba] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/60 transition-all duration-500">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#fcf6ba] transition-colors">High Fidelity</h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-[#eae0c5]/70 transition-colors">Visual design with golden gradients and pixel precision.</p>
</div>
<div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/0 rounded-br-xl group-hover:border-[#d4af37]/50 transition-all duration-500"></div>
</div>

<div className="hidden md:flex shrink-0 w-24 items-center justify-center relative">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#d4af37]/40 rotate-45"></div>
</div>
</div>

<div className="snap-center shrink-0 w-80 md:w-72 h-80 relative group flex flex-col p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-gradient-to-b hover:from-[#d4af37]/10 hover:to-black transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]">
<div className="flex justify-between items-start mb-auto">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">04</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 text-[#fcf6ba] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/60 transition-all duration-500">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path className="" d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#fcf6ba] transition-colors">Final Polish</h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-[#eae0c5]/70 transition-colors">Rigorous testing and refinement before the grand reveal.</p>
</div>
<div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/0 rounded-br-xl group-hover:border-[#d4af37]/50 transition-all duration-500"></div>
</div>

<div className="hidden md:flex shrink-0 w-24 items-center justify-center relative">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-[#d4af37]/40 rotate-45"></div>
</div>
</div>

<div className="snap-center shrink-0 w-80 md:w-72 h-80 relative group flex flex-col p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-gradient-to-b hover:from-[#d4af37]/10 hover:to-black transition-all duration-500 hover:border-[#d4af37]/40 hover:shadow-[0_0_30px_-10px_rgba(212,175,55,0.15)]">
<div className="flex justify-between items-start mb-auto">
<span className="font-mono text-sm text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">05</span>
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#d4af37]/10 to-transparent border border-[#d4af37]/20 text-[#fcf6ba] shadow-[inset_0_0_10px_rgba(212,175,55,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] group-hover:border-[#d4af37]/60 transition-all duration-500">
<svg className="group-hover:animate-spin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animationDuration: '4s'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
</div>
<div className="relative z-10">
<h3 className="text-2xl font-medium text-white mb-2 group-hover:text-[#fcf6ba] transition-colors">Always Updating</h3>
<p className="text-sm text-white/40 leading-relaxed group-hover:text-[#eae0c5]/70 transition-colors">Continuous evolution to keep your digital presence gold.</p>
</div>
<div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#d4af37]/0 rounded-br-xl group-hover:border-[#d4af37]/50 transition-all duration-500"></div>
</div>
</div>
</div>

<div className="hidden md:block w-full max-w-2xl mx-auto h-px bg-[#d4af37]/10 mt-16 rounded-full overflow-hidden">
<div className="h-full w-1/5 bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#aa8c2c] rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]" id="scroll-indicator-bar" style={{transform: 'translateX(200%)'}}></div>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-3 md:gap-4 px-4">
<button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default">User Research</button>
<button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default">Strategy</button>
<button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default">Web Design</button>
<button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default">Workflow</button>
<button className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest text-white/50 hover:border-[#d4af37]/50 hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] cursor-default">Design Process</button>
</div>
</div>
<style className="">
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    </style>

</section><section className="min-h-screen flex flex-col relative bg-black overflow-hidden pt-32 pb-12 justify-between" id="portfolio-section">
<style>
        @keyframes marquee-infinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
            animation: marquee-infinite 60s linear infinite;
        }
        .font-serif-italic { font-family: 'Playfair Display', serif; font-style: italic; }
    </style>

<div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-black">
<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#aa8c2c]/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
</div>

<div className="z-10 w-full max-w-5xl mx-auto px-6 flex-1 flex flex-col justify-center">

<div className="mb-12 relative z-20">
<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#d4af37]"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.25em] text-[#fcf6ba] font-medium">Portfolio</span>
</div>
<h2 className="text-6xl md:text-8xl font-serif-italic tracking-tight text-white leading-[0.9]">
                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#aa8c2c]">Works</span>.
            </h2>
</div>

<div className="flex flex-col group/list relative">

<div className="group/item border-t border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500">
<a className="block py-8 md:py-10 relative" href="#">

<div className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block w-screen h-screen fixed left-0 top-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Fashion" className="w-full h-full object-cover scale-105 group-hover/item:scale-100 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline justify-between relative z-20 px-2 group-hover/list:opacity-30 group-hover/item:!opacity-100 transition-all duration-300">
<h3 className="text-4xl md:text-6xl font-light text-white group-hover/item:translate-x-6 transition-transform duration-500 font-serif-italic">High Fashion Editorial</h3>
<div className="flex items-center gap-4">
<span className="hidden md:block text-xs font-mono text-[#d4af37]/60 uppercase tracking-widest group-hover/item:text-[#fcf6ba]">E-Commerce</span>
<svg className="text-white/40 group-hover/item:text-[#d4af37] transform -rotate-45 group-hover/item:rotate-0 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>
</div>

<div className="group/item border-t border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500">
<a className="block py-8 md:py-10 relative" href="#">
<div className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block w-screen h-screen fixed left-0 top-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Nexus" className="w-full h-full object-cover scale-105 group-hover/item:scale-100 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="flex items-baseline justify-between relative z-20 px-2 group-hover/list:opacity-30 group-hover/item:!opacity-100 transition-all duration-300">
<h3 className="text-4xl md:text-6xl font-light text-white group-hover/item:translate-x-6 transition-transform duration-500 font-serif-italic">Nexus Protocol</h3>
<div className="flex items-center gap-4">
<span className="hidden md:block text-xs font-mono text-[#d4af37]/60 uppercase tracking-widest group-hover/item:text-[#fcf6ba]">Web3 Interface</span>
<svg className="text-white/40 group-hover/item:text-[#d4af37] transform -rotate-45 group-hover/item:rotate-0 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>
</div>

<div className="group/item border-t border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500">
<a className="block py-8 md:py-10 relative" href="#">
<div className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block w-screen h-screen fixed left-0 top-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Architecture" className="w-full h-full object-cover scale-105 group-hover/item:scale-100 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline justify-between relative z-20 px-2 group-hover/list:opacity-30 group-hover/item:!opacity-100 transition-all duration-300">
<h3 className="text-4xl md:text-6xl font-light text-white group-hover/item:translate-x-6 transition-transform duration-500 font-serif-italic">Modern Habitat</h3>
<div className="flex items-center gap-4">
<span className="hidden md:block text-xs font-mono text-[#d4af37]/60 uppercase tracking-widest group-hover/item:text-[#fcf6ba]">Architecture</span>
<svg className="text-white/40 group-hover/item:text-[#d4af37] transform -rotate-45 group-hover/item:rotate-0 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>
</div>

<div className="group/item border-t border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500">
<a className="block py-8 md:py-10 relative" href="#">
<div className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block w-screen h-screen fixed left-0 top-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Analytics" className="w-full h-full object-cover scale-105 group-hover/item:scale-100 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline justify-between relative z-20 px-2 group-hover/list:opacity-30 group-hover/item:!opacity-100 transition-all duration-300">
<h3 className="text-4xl md:text-6xl font-light text-white group-hover/item:translate-x-6 transition-transform duration-500 font-serif-italic">Data Analytics</h3>
<div className="flex items-center gap-4">
<span className="hidden md:block text-xs font-mono text-[#d4af37]/60 uppercase tracking-widest group-hover/item:text-[#fcf6ba]">SaaS Platform</span>
<svg className="text-white/40 group-hover/item:text-[#d4af37] transform -rotate-45 group-hover/item:rotate-0 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>
</div>

<div className="group/item border-y border-[#d4af37]/30 hover:border-[#d4af37] transition-colors duration-500">
<a className="block py-8 md:py-10 relative" href="#">
<div className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none hidden md:block w-screen h-screen fixed left-0 top-0">
<div className="absolute inset-0 bg-black/60 z-10"></div>
<img alt="Identity" className="w-full h-full object-cover scale-105 group-hover/item:scale-100 transition-transform duration-[1.5s]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="flex items-baseline justify-between relative z-20 px-2 group-hover/list:opacity-30 group-hover/item:!opacity-100 transition-all duration-300">
<h3 className="text-4xl md:text-6xl font-light text-white group-hover/item:translate-x-6 transition-transform duration-500 font-serif-italic">Chromatic Flux</h3>
<div className="flex items-center gap-4">
<span className="hidden md:block text-xs font-mono text-[#d4af37]/60 uppercase tracking-widest group-hover/item:text-[#fcf6ba]">Visual Identity</span>
<svg className="text-white/40 group-hover/item:text-[#d4af37] transform -rotate-45 group-hover/item:rotate-0 transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
</div>
</div>
</a>
</div>
</div>

<div className="mt-8 flex items-center justify-between text-[#d4af37]/40 px-2 relative z-20">
<div className="flex items-center gap-3">
<div className="px-3 py-1 border border-[#d4af37]/20 rounded text-[10px] uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer">SEO</div>
<div className="px-3 py-1 border border-[#d4af37]/20 rounded text-[10px] uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer">UI Portfolio</div>
<div className="px-3 py-1 border border-[#d4af37]/20 rounded text-[10px] uppercase tracking-widest hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer">SaaS</div>
</div>
<div className="flex items-center gap-2 animate-bounce">
<span className="text-[10px] uppercase tracking-widest hidden md:block">Scroll for more</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
</div>

<div className="relative z-20 w-full mt-16 border-t border-[#d4af37]/20 bg-black/50 backdrop-blur-sm pt-6 pb-6">
<div className="flex w-full overflow-hidden">
<div className="flex w-max animate-marquee-infinite gap-6 items-center">

<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
</div>
<div className="w-48 aspect-video rounded-lg overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 hover:border-[#d4af37]/50 cursor-pointer relative group">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section><section className="min-h-screen overflow-hidden flex flex-col text-white bg-black pt-32 pb-32 relative justify-center" id="pricing-section">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">

<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
<span className="text-xs font-medium uppercase tracking-widest text-[#f3e3a8]/70">Investment</span>
</div>
<h2 className="text-6xl md:text-8xl font-serif-italic tracking-tight text-white leading-[0.9]">
                    Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fcf6ba] to-[#d4af37]">Design</span>.
                </h2>
<p className="text-lg text-white/60 font-light leading-relaxed max-w-md">
                    Transparent pricing packages tailored for ambitious brands ready to scale.
                </p>
</div>

<a className="group flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300" href="#">
<div className="flex flex-col items-start">
<span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-[#f3e3a8] transition-colors">Full Rate Card</span>
<span className="text-sm font-medium text-white">Download PDF</span>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all">
<svg className="text-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline className="" points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="group relative flex flex-col h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-2">

<div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/60 mb-6">
                            Design Only
                        </div>
<h3 className="text-3xl font-light text-white mb-2">UI/UX Concept</h3>
<p className="text-white/40 text-sm leading-relaxed">Perfect for startups needing a visual identity and prototype before development.</p>
<div className="mt-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">$4,500</span>
<span className="text-sm text-white/40 font-mono">/ project</span>
</div>
</div>
<ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Figma Design Files</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Clickable Prototype</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Design System Basic</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">2 Rounds of Revisions</span>
</li>
</ul>
<a className="flex items-center justify-between group-hover:border-[#d4af37]/50 group-hover:text-white transition-all text-white/60 w-full border-white/20 border-b pt-4 pb-4" href="#">
<span className="text-sm font-medium">Read More</span>
<svg className="transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative flex flex-col h-full p-8 md:p-10 rounded-2xl overflow-hidden transform lg:-translate-y-6 shadow-2xl shadow-[#d4af37]/10 border border-[#d4af37]/20 hover:scale-[1.02] transition-transform duration-500">

<div className="absolute inset-0 bg-gradient-to-br from-[#42340b] via-[#2a2208] to-black z-0"></div>
<div className="absolute inset-0 z-0 opacity-60">
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.3)_180deg,transparent_360deg)]"></div>
</div>
<div className="z-0 bg-black/80 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-xl"></div>

<div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-[#d4af37]/50 via-white/10 to-transparent pointer-events-none z-10"></div>
<div className="relative z-20 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="flex justify-between items-start mb-6">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#d4af37] text-[10px] uppercase tracking-widest text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                                Most Popular
                            </div>
</div>
<h3 className="text-3xl font-light text-white mb-2">Web Experience</h3>
<p className="text-[#f3e3a8]/60 text-sm leading-relaxed">End-to-end design and development for a high-performance digital presence.</p>
<div className="mt-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">$8,500</span>
<span className="text-sm text-[#f3e3a8]/40 font-mono">/ starting</span>
</div>
</div>
<ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-[-2px]">
<svg className="text-[#d4af37]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Everything in Design Only</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-[-2px]">
<svg className="text-[#d4af37]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Webflow / React Implementation</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-[-2px]">
<svg className="text-[#d4af37]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Advanced Interactions &amp; GSAP</span>
</li>
<li className="flex items-start gap-3 text-sm text-white">
<div className="w-5 h-5 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 mt-[-2px]">
<svg className="text-[#d4af37]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="">Technical SEO &amp; CMS Setup</span>
</li>
</ul>
<button className="transition-all hover:bg-[#fcf6ba] hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] active:scale-[0.98] text-sm font-medium text-black bg-white w-full rounded-lg pt-4 pb-4">Let's book an Appointment</button>
</div>
</div>

<div className="group relative flex flex-col h-full p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-[#d4af37]/40 hover:-translate-y-2">

<div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/60 mb-6">
                            Monthly Retainer
                        </div>
<h3 className="text-3xl font-light text-white mb-2">Growth Partner</h3>
<p className="text-white/40 text-sm leading-relaxed">Ongoing optimization and SEO to ensure your site dominates search results.</p>
<div className="mt-8 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white">$2,000</span>
<span className="text-sm text-white/40 font-mono">/ mo</span>
</div>
</div>
<ul className="space-y-4 mb-10 border-t border-white/10 pt-8">
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Monthly SEO Strategy</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Content Updates &amp; Blog</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Analytics &amp; Reporting</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/70">
<svg className="text-[#d4af37] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Priority Support</span>
</li>
</ul>
<a className="flex items-center justify-between w-full py-4 border-b border-white/20 group-hover:border-[#d4af37]/50 text-white/60 group-hover:text-white transition-all" href="#">
<span className="text-sm font-medium">Read More</span>
<svg className="transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="mt-20 text-center">
<p className="text-white/30 text-xs uppercase tracking-widest">Prices may vary based on project complexity</p>
</div>
</div>
</section><section className="min-h-screen overflow-hidden flex flex-col text-white bg-black border-white/5 border-t pt-32 pb-32 relative items-center justify-center" id="playground-section">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
<div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#aa8c2c]/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">

<div className="text-center mb-24 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-white/60">Experimental Lab v1.0</span>
</div>
<h2 className="text-6xl md:text-8xl font-serif-italic tracking-tight text-white leading-[0.9]">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#d4af37]">Playground</span>.
            </h2>
<p className="text-lg text-white/50 max-w-lg mx-auto font-light leading-relaxed">
                A digital sandbox for web interactions, free design resources, and experimental interfaces.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-7 space-y-8">
<div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
<h3 className="text-xl font-medium text-white">Interactive Experiments</h3>
<span className="text-xs font-mono text-white/40 uppercase tracking-widest">Try Hovering</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="group relative aspect-square border border-white/10 rounded-xl bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#d4af37]/50 hover:bg-white/[0.05]">
<div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#d4af37] group-hover:text-black shadow-lg">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<span className="absolute bottom-5 text-[10px] text-white/30 uppercase tracking-widest group-hover:text-[#d4af37] transition-colors">Energy</span>
</div>

<div className="group relative aspect-square border border-white/10 rounded-xl bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-500 hover:border-blue-500/50">
<div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150"></div>
<div className="w-12 h-12 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center transition-all duration-[3s] group-hover:animate-[spin_4s_linear_infinite] group-hover:border-blue-400">
<svg className="text-white/40 group-hover:text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<span className="absolute bottom-5 text-[10px] text-white/30 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Loader</span>
</div>

<div className="group relative aspect-square border border-white/10 rounded-xl bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:bg-[#d4af37] hover:border-[#d4af37]">
<div className="relative w-14 h-8 rounded-full bg-white/10 group-hover:bg-black/20 transition-colors p-1">
<div className="w-6 h-6 rounded-full bg-white group-hover:bg-black shadow-lg transform translate-x-0 group-hover:translate-x-6 transition-transform duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)"></div>
</div>
<span className="absolute bottom-5 text-[10px] text-white/30 uppercase tracking-widest group-hover:text-black/60 transition-colors">Toggle</span>
</div>

<div className="group relative aspect-square border border-white/10 rounded-xl bg-white/[0.02] flex flex-col items-center justify-center cursor-pointer overflow-hidden">
<div className="w-1 h-1 rounded-full bg-white/40 group-hover:w-32 group-hover:h-32 group-hover:bg-[#fcf6ba] transition-all duration-500 ease-out opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<svg className="text-white/40 group-hover:scale-125 group-hover:text-white transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
</div>
<span className="absolute bottom-5 text-[10px] text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">Focus</span>
</div>

<div className="group aspect-square flex flex-col cursor-pointer overflow-hidden md:col-span-2 hover:border-white/30 transition-colors border-white/10 border rounded-xl relative items-center justify-center">
<div className="group-hover:animate-pulse text-xl font-bold tracking-widest font-mono relative">
<span className="absolute top-0 left-0 -ml-0.5 text-red-500 opacity-0 group-hover:opacity-70 animate-[ping_0.1s_infinite]">GLITCH</span>
<span className="absolute top-0 left-0 -ml-0.5 text-blue-500 opacity-0 group-hover:opacity-70 animate-[pulse_0.2s_infinite]">GLITCH</span>
<span className="group-hover:text-white text-white/50 transition-colors">HOVER ME</span>
</div>
<span className="absolute bottom-5 text-[10px] text-white/30 uppercase tracking-widest">Distortion</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full justify-between gap-12">

<div className="space-y-8">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<h3 className="text-xl font-medium text-white">Free Resources</h3>
<svg className="text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<div className="space-y-4">

<a className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#d4af37]/30 transition-all group" href="#">
<div className="w-12 h-12 rounded bg-gradient-to-br from-[#d4af37]/20 to-black border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white group-hover:text-[#d4af37] transition-colors">Agency UI Kit v2</h4>
<p className="text-xs text-white/40 font-mono mt-1">Figma • 24MB</p>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/20 transition-colors">
<svg className="text-white/40 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</div>
</a>

<a className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#d4af37]/30 transition-all group" href="#">
<div className="w-12 h-12 rounded bg-gradient-to-br from-blue-500/20 to-black border border-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line className="" x1="12" x2="12" y1="22" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline className="" points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" x2="12" y1="2" y2="8.5"></line></svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">Interaction Presets</h4>
<p className="text-xs text-white/40 font-mono mt-1">GSAP / CSS • Copy Paste</p>
</div>
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-white/20 transition-colors">
<svg className="text-white/40 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</div>
</a>
</div>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 blur-[60px] -mr-16 -mt-16 pointer-events-none transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
<h3 className="text-2xl text-white font-serif-italic mb-3">Join the Squad</h3>
<p className="text-sm text-white/50 mb-6 leading-relaxed">Get notified when we drop new freebies, experiments, and tutorials.</p>
<form className="space-y-3" onsubmit="event.preventDefault();">
<div className="relative">
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#d4af37]/50 focus:bg-black/60 transition-all placeholder:text-white/20" placeholder="email@address.com" type="email"/>
</div>
<button className="w-full py-3 rounded-lg bg-[#d4af37] text-black font-semibold text-sm hover:bg-[#ebd278] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 transform active:scale-[0.98]">
<span className="">Subscribe for Updates</span>
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="z-20 bg-black border-white/10 border-t pt-20 pb-10 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 gap-x-16 gap-y-16">

<div className="space-y-6">
<h2 className="text-6xl md:text-8xl font-serif-italic tracking-tight text-white leading-[0.9]">
        Let's Build<span className="text-[#d4af37]">.</span>
</h2>

<div className="flex items-center gap-3 mt-8">
<div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
<span className="uppercase tabular-nums text-sm font-medium text-[#d4af37] tracking-[0.25em] font-mono drop-shadow-[0_0_5px_rgba(212,175,55,0.6)]" id="footer-time-ca">LA — 04:49 PM</span>

</div>

<div className="group relative mt-8 w-full max-w-sm rounded-2xl border border-white/10 bg-zinc-900/40 p-1.5 backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-zinc-900/60">
<div className="relative aspect-[2.4/1] w-full overflow-hidden rounded-xl border border-white/5 bg-zinc-900">
<img alt="Silicon Valley Map" className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0 mix-blend-luminosity" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/90 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2">
<div className="relative flex h-3 w-3">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4af37] opacity-75 duration-1000"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.8)]"></span>
</div>
</div>
<div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 backdrop-blur-md border border-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]"></span>
<span className="text-[10px] font-medium uppercase tracking-widest text-white/90">Silicon Valley</span>
</div>
</div>
<div className="flex items-center justify-between px-2 pt-3 pb-1">
<div className="flex flex-col">
<span className="text-xs font-medium text-white/80">Innovation Hub</span>
<span className="text-[10px] text-white/40">California, USA</span>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white/5 px-2 py-1">
<svg className="text-[#d4af37]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
<span className="font-mono text-[10px] text-[#d4af37]">37.38° N</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<form className="relative overflow-hidden w-full max-w-2xl mx-auto bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl space-y-8 group hover:border-white/20 transition-all duration-500" onsubmit="event.preventDefault();">

<div className="absolute -top-32 -right-32 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen opacity-50"></div>
<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#aa8c2c]/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen opacity-50"></div>

<div className="flex items-center justify-between border-b border-white/5 pb-6">
<div className="flex items-center gap-3">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
</div>
<h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50">Start a Project</h3>
</div>
<div className="text-white/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13"></path><path d="M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
</div>
</div>

<div className="md:text-lg leading-relaxed z-10 text-base font-light text-white/80 tracking-wide font-sans relative">
<span className="font-sans opacity-60">Hi, I'm</span>
<input className="inline-block focus:border-[#d4af37] placeholder:text-white/20 outline-none transition-all md:w-40 focus:bg-white/5 text-[#d4af37] font-sans text-center bg-transparent w-full border-white/20 rounded-t-sm border-b mr-1 ml-1 pt-1 pr-2 pb-1 pl-2" placeholder="Your Name" type="text"/>
<span className="font-sans opacity-60">from</span>
<input className="font-sans inline-block bg-transparent border-b border-white/20 focus:border-[#d4af37] text-[#d4af37] placeholder:text-white/20 px-2 py-1 outline-none transition-all w-full md:w-40 text-center focus:bg-white/5 rounded-t-sm mx-1" placeholder="Company" type="text"/>
<span className="font-sans opacity-60">. We're looking for</span>
<div className="inline-block relative w-full md:w-auto mx-1 align-bottom">
<select className="md:w-auto appearance-none focus:border-[#d4af37] outline-none cursor-pointer transition-all focus:bg-white/5 text-[#d4af37] bg-transparent w-full border-white/20 rounded-t-sm border-b pt-1 pr-8 pb-1 pl-3 font-sans">
<option className="bg-zinc-900 text-white/50" value="">Service Type</option>
<option className="bg-zinc-900 text-white" value="web-design">Web Design</option>
<option className="bg-zinc-900 text-white" value="development">Development</option>
<option className="bg-zinc-900 text-white" value="branding">Branding</option>
<option className="bg-zinc-900 text-white" value="seo">SEO Strategy</option>
</select>
<svg className="absolute right-1 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<span className="font-sans opacity-60">with a budget of</span>
<div className="inline-block relative w-full md:w-auto mx-1 align-bottom">
<select className="md:w-auto appearance-none focus:border-[#d4af37] outline-none cursor-pointer transition-all focus:bg-white/5 text-[#d4af37] bg-transparent w-full border-white/20 rounded-t-sm border-b pt-1 pr-8 pb-1 pl-3 font-sans">
<option className="bg-zinc-900 text-white/50" value="">Budget Range</option>
<option className="bg-zinc-900 text-white" value="1k">$1,000 - $5k</option>
<option className="bg-zinc-900 text-white" value="5k">$5k - $10k</option>
<option className="bg-zinc-900 text-white" value="10k">$10k - $25k</option>
<option className="bg-zinc-900 text-white" value="25k">$25k - $50k</option>
<option className="bg-zinc-900 text-white" value="50k">$50k+</option>
</select>
<svg className="absolute right-1 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<span className="font-sans opacity-60">.</span>
</div>

<div className="space-y-3 pt-4 relative z-10">
<div className="flex items-center justify-between px-1">
<label className="text-xs uppercase tracking-widest text-white/30">Project Details</label>
<span className="text-[10px] text-white/20 font-mono">Optional</span>
</div>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm font-light text-white placeholder:text-white/20 focus:border-[#d4af37]/50 focus:bg-white/[0.05] outline-none transition-all resize-none" placeholder="Tell us about your goals, timeline, and reference sites..." rows="3"></textarea>
</div>

<div className="pt-2 relative z-10">
<button className="w-full group relative overflow-hidden rounded-xl bg-[#d4af37] py-4 text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:bg-[#eac44e] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-[0.99] border border-[#d4af37]" type="submit">
<div className="relative z-10 flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs">
<span className="">Submit Inquiry</span>
<svg className="transition-transform group-hover:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon className="" points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[spin_1s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity" style={{animation: 'shimmer 1.5s infinite'}}></div>
</button>
<div className="text-center mt-4">
<span className="text-[10px] text-white/20">Protected by reCAPTCHA and our Privacy Policy.</span>
</div>
</div>
</form>
</div>
</div>

<div className="border-t border-white/10 pt-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<span className="text-xs uppercase tracking-widest text-white/40">Social Media</span>
<div className="h-px w-8 bg-white/20"></div>
</div>
<div className="flex items-center gap-6">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10 transition-all" href="#">
<svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
<div className="text-xs text-white/30">
                    © 2024 Studio. All rights reserved.
                </div>
</div>
</div>
</div>

</footer>
    </>
  );
}
