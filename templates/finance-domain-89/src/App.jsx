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



        // Initialize Icons
        lucide.createIcons();

        // --- Three.js Implementation ---
        const initThree = () => {
            const container = document.getElementById('canvas-container');
            const scene = new THREE.Scene();
            
            // Fog matches background color
            scene.fog = new THREE.FogExp2(0x020202, 0.002);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 20, 50);
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            // Particles
            const particlesGeometry = new THREE.BufferGeometry();
            const count = 2500; 
            const positions = [];
            const colors = [];

            const colorHigh = new THREE.Color('#E11D48'); 
            const colorBase = new THREE.Color('#444444'); // Slightly lighter base for visibility

            for (let i = 0; i < count; i++) {
                const x = (Math.random() - 0.5) * 160;
                const z = (Math.random() - 0.5) * 120;
                const r = Math.sqrt(x*x + z*z);
                let y = 30 * Math.exp(-0.002 * r * r) - 10;
                y += (Math.random() - 0.5) * 2;

                positions.push(x, y, z);

                const color = new THREE.Color();
                if (y > 10) {
                    color.lerpColors(colorBase, colorHigh, (y - 10) / 15);
                } else {
                    color.set(colorBase);
                }
                
                colors.push(color.r, color.g, color.b);
            }

            particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

            const material = new THREE.PointsMaterial({
                size: 0.25,
                vertexColors: true,
                transparent: true,
                opacity: 0.6,
                sizeAttenuation: true
            });

            const pointCloud = new THREE.Points(particlesGeometry, material);
            scene.add(pointCloud);

            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;

            const onDocumentMouseMove = (event) => {
                mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
                mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
            };

            document.addEventListener('mousemove', onDocumentMouseMove);

            const animate = () => {
                requestAnimationFrame(animate);

                targetX = mouseX * 0.5;
                targetY = mouseY * 0.5;

                pointCloud.rotation.y += 0.0003;
                
                camera.position.x += (targetX - camera.position.x) * 0.05;
                camera.position.y += (-targetY + 20 - camera.position.y) * 0.05;
                camera.lookAt(0, 0, 0);

                renderer.render(scene, camera);
            };

            animate();

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        };

        initThree();
    
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
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-40" id="canvas-container"></div>
<div className="fixed inset-0 w-full h-full -z-10 grid-bg pointer-events-none"></div>

<nav className="fixed top-0 left-0 w-full z-50 glass-nav h-16 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-alpine-highlight rounded-full animate-pulse"></div>
<span className="font-medium tracking-widest text-[10px] text-white font-merriweather" style={{}}>ALPINE PARTNERS</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="font-mono text-[11px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300 font-merriweather" href="#sovereignty" style={{}}>Sovereignty</a>
<a className="font-mono text-[11px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300 font-merriweather" href="#valuation" style={{}}>Valuation</a>
<a className="font-mono text-[11px] uppercase tracking-widest text-stone-400 hover:text-white transition-colors duration-300 font-merriweather" href="#process" style={{}}>Process</a>
</div>
<a className="group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-white/5 border border-white/10 rounded-[2px] transition-all duration-300 hover:bg-white/10 hover:border-alpine-highlight/50" href="mailto:info@cleardesign.ch">
<span className="text-[10px] uppercase tracking-widest group-hover:text-alpine-highlight transition-colors font-merriweather" style={{}}>Inquire</span>
</a>
</div>
</nav>

<header className="min-h-screen flex flex-col text-center w-full pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="max-w-6xl mx-auto z-10 space-y-12">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-alpine-highlight/10 border border-alpine-highlight/20 backdrop-blur-md animate-fade-in-up">
<span className="font-mono text-[10px] uppercase tracking-widest text-alpine-highlight font-medium font-merriweather" style={{}}>Tier-1 Digital Asset</span>
</div>

<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-normal text-white tracking-tighter font-pt-serif drop-shadow-2xl">
                The Summit of <br/>
<span className="not-italic bg-clip-text italic text-transparent font-pt-serif bg-gradient-to-b from-white via-white to-stone-400 border-slate-50">Sovereignty</span>
</h1>

<p className="text-[30px] leading-[1.3] text-stone-200 max-w-4xl mr-auto ml-auto font-normal font-pt-serif" style={{}}>
<span className="text-white border-b border-white/20 pb-1 font-normal font-pt-serif" style={{}}>Alpine-Partners.com</span> represents the pinnacle of institutional identity. 
                A definitive asset for private equity, wealth management, and global advisory.
            </p>

<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10">
<a className="px-8 py-4 bg-white text-black font-mono text-[11px] uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] font-merriweather" href="#valuation" style={{}}>
                    View Valuation
                </a>
<a className="px-8 py-4 border border-white/20 text-white bg-black/50 font-mono text-[11px] uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm font-merriweather" href="mailto:info@cleardesign.ch" style={{}}>
                    Make Offer
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 opacity-50 animate-bounce">
<i className="w-5 h-5 text-white" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-32 px-6 border-t border-white/5 bg-black/60 relative z-20" id="sovereignty">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">

<div className="group space-y-5">
<div className="w-12 h-12 flex items-center justify-center rounded-sm bg-stone-900 border border-white/10 group-hover:border-alpine-highlight/50 transition-colors" style={{}}>
<i className="w-6 h-6 text-white group-hover:text-alpine-highlight transition-colors" data-lucide="shield-check"></i>
</div>
<h3 className="text-3xl text-white font-normal font-pt-serif" style={{}}>Unrivaled Authority</h3>

<p className="font-body text-[20px] leading-relaxed text-stone-300 font-merriweather" style={{}}>
                        In high finance, trust is the currency. Possessing the definitive category domain signals permanence and stability before a prospectus is even opened.
                    </p>
</div>

<div className="group space-y-5">
<div className="w-12 h-12 flex items-center justify-center rounded-sm bg-stone-900 border border-white/10 group-hover:border-alpine-highlight/50 transition-colors" style={{}}>
<i className="w-6 h-6 text-white group-hover:text-alpine-highlight transition-colors" data-lucide="globe"></i>
</div>
<h3 className="text-3xl text-white font-normal font-pt-serif" style={{}}>Global Reach</h3>

<p className="font-body text-[20px] leading-relaxed text-stone-300 font-merriweather" style={{}}>
                        "Alpine" transcends language barriers, evoking imagery of the Swiss peaks, strength, and endurance across Asian, European, and American markets.
                    </p>
</div>

<div className="group space-y-5">
<div className="w-12 h-12 flex items-center justify-center rounded-sm bg-stone-900 border border-white/10 group-hover:border-alpine-highlight/50 transition-colors" style={{}}>
<i className="w-6 h-6 text-white group-hover:text-alpine-highlight transition-colors" data-lucide="trending-up"></i>
</div>
<h3 className="text-3xl text-white font-normal font-pt-serif" style={{}}>Asset Appreciation</h3>

<p className="font-body text-[20px] leading-relaxed text-stone-300 font-merriweather" style={{}}>
                        Digital real estate of this caliber is finite. As the digital economy expands, the valuation of concise, semantic assets follows an aggressive growth curve.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden bg-black/40" id="valuation">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-alpine-highlight/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-2xl">
<h2 className="text-5xl md:text-6xl text-white mb-4 font-normal font-pt-serif" style={{}}>Market Valuation</h2>
<p className="font-body text-[20px] text-stone-300 font-merriweather" style={{}}>
                        Real-time estimation based on semantic value, keyword liquidity, and comparable Tier-1 asset sales in the fintech sector.
                    </p>
</div>
<div className="text-right mt-8 md:mt-0 bg-stone-900/50 p-6 border border-white/5 rounded-sm backdrop-blur-sm" style={{}}>
<div className="inline-flex items-baseline gap-3">
<span className="text-sm text-stone-400 uppercase tracking-widest font-merriweather" style={{}}>Current Ask</span>
<span className="text-5xl text-white tracking-tighter font-normal font-pt-serif" style={{}}>20 700 <span className="text-2xl text-stone-500 font-normal font-pt-serif" style={{}}>CHF</span></span>
</div>
<div className="flex items-center justify-end gap-2 mt-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" style={{}}></span>
</span>
<span className="font-mono text-[10px] text-orange-500 uppercase tracking-widest font-merriweather" style={{}}>Live Algorithm</span>
</div>
</div>
</div>

<div className="w-full h-[500px] glass rounded-sm border border-white/10 p-8 relative group shadow-2xl">

<div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
<div className="w-full h-px bg-white/5"></div>
</div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 1000 400">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#E11D48" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#E11D48" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="coloredBlur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<path className="opacity-0 animate-[fadeIn_2s_ease-out_forwards]" d="M0,350 C200,340 400,300 600,200 C800,100 900,80 1000,50 V400 H0 Z" fill="url(#gradientArea)"></path>

<path className="chart-line" d="M0,350 C200,340 400,300 600,200 C800,100 900,80 1000,50" fill="none" filter="url(#glow)" stroke="#E11D48" strokeWidth="3"></path>

<circle className="chart-dot" cx="1000" cy="50" fill="#fff" r="6"></circle>
</svg>

<div className="absolute top-[10%] right-[5%] bg-black/90 border border-stone-700 p-4 rounded-sm shadow-xl shadow-alpine-highlight/5 backdrop-blur-md" style={{}}>
<span className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest mb-1 font-merriweather" style={{}}>Projected 2026 Value</span>
<span className="block text-xl text-white font-medium font-merriweather" style={{}}>32 400 CHF</span>
</div>
</div>

<div className="flex justify-between mt-6 px-8 text-stone-500 font-mono text-[11px] uppercase tracking-widest" style={{}}>
<span className="font-merriweather" style={{}}>Q1 2024</span>
<span className="font-merriweather" style={{}}>Q3 2024</span>
<span className="font-merriweather" style={{}}>Q1 2025</span>
<span className="font-merriweather" style={{}}>Q3 2025</span>
<span className="text-white font-merriweather" style={{}}>Now</span>
</div>
</div>
</section>

<section className="bg-[#030303] border-white/5 border-t pt-32 pr-6 pb-32 pl-6" id="process">
<div className="max-w-4xl mx-auto text-center space-y-16">
<h2 className="text-6xl text-white font-normal font-pt-serif" style={{}}>Acquisition Protocol</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
<div className="border-l-2 border-alpine-highlight pl-8 py-2">
<span className="text-alpine-highlight text-2xl mb-3 block font-normal font-pt-serif" style={{}}>01</span>
<h4 className="text-white text-lg font-medium mb-2 font-merriweather" style={{}}>Offer Submission</h4>

<p className="font-body text-[18px] text-stone-400 leading-normal font-merriweather" style={{}}>Submit binding offer via secure email channel. Verification required.</p>
</div>
<div className="border-l-2 border-stone-800 pl-8 py-2" style={{}}>
<span className="text-stone-600 text-2xl mb-3 block font-normal font-pt-serif" style={{}}>02</span>
<h4 className="text-white text-lg font-medium mb-2 font-merriweather" style={{}}>Escrow Setup</h4>
<p className="font-body text-[18px] text-stone-400 leading-normal font-merriweather" style={{}}>Funds secured via Escrow.com or Swiss legal intermediary.</p>
</div>
<div className="border-l-2 border-stone-800 pl-8 py-2" style={{}}>
<span className="text-stone-600 text-2xl mb-3 block font-normal font-pt-serif" style={{}}>03</span>
<h4 className="text-white text-lg font-medium mb-2 font-merriweather" style={{}}>Transfer</h4>
<p className="font-body text-[18px] text-stone-400 leading-normal font-merriweather" style={{}}>Instant push to your registrar or auth-code delivery.</p>
</div>
</div>
<div className="pt-12">
<div className="glass p-12 rounded-sm inline-block w-full max-w-3xl relative overflow-hidden group border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-alpine-highlight/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<h3 className="text-[30px] text-white mb-8 font-normal font-pt-serif" style={{}}>Secure this asset today.</h3>
<a className="relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-[2px] hover:bg-stone-200 transition-all font-mono text-[12px] uppercase tracking-widest font-bold group-hover:scale-[1.01]" href="mailto:info@cleardesign.ch" style={{}}>
<span className="font-merriweather" style={{}}>Initiate Acquisition</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<div className="mt-8 flex justify-center gap-8 text-stone-500" style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="lock"></i>
<span className="font-mono text-[10px] uppercase tracking-widest font-merriweather" style={{}}>End-to-End Encryption</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span className="font-mono text-[10px] uppercase tracking-widest font-merriweather" style={{}}>Verified Ownership</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050505] py-20 px-6 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-6">
<span className="font-bold tracking-widest text-xs text-white font-merriweather" style={{}}>ALPINE PARTNERS</span>
<p className="text-stone-400 font-body text-[18px] max-w-sm leading-relaxed font-merriweather" style={{}}>
                    The defining namespace for Swiss-grade financial services. 
                    <br/>Exclusive availability.
                </p>
</div>
<div className="flex gap-16 text-[11px] font-mono text-stone-500 uppercase tracking-widest" style={{}}>
<div className="flex flex-col gap-4">
<span className="text-white font-bold font-merriweather" style={{}}>Legal</span>
<a className="hover:text-alpine-highlight transition-colors font-merriweather" href="#" style={{}}>Escrow</a>
<a className="hover:text-alpine-highlight transition-colors font-merriweather" href="#" style={{}}>Privacy</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-white font-bold font-merriweather" style={{}}>Contact</span>
<a className="hover:text-alpine-highlight transition-colors text-stone-300 font-merriweather" href="mailto:info@cleardesign.ch" style={{}}>info@cleardesign.ch</a>
<span className="text-stone-600 font-merriweather" style={{}}>Zurich, CH</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-600 font-mono" style={{}}>
<p className="font-merriweather" style={{}}>© 2025 Alpine Partners. All rights reserved.</p>
<p className="font-merriweather" style={{}}>Design by <a className="text-stone-500 hover:text-white transition-colors font-merriweather" href="https://www.cleardesign.ch/" style={{}} target="_blank">Clear Design</a></p>
</div>
</footer>



    </>
  );
}
