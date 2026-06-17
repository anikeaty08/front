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
void: '#01040a',
cyan: {
DEFAULT: '#00d9ff',
500: '#00d9ff',
},
azure: {
DEFAULT: '#0080ff',
},
slate: '#8b97b1',
muted: '#a0aabf',
},
fontFamily: {
display: ['Outfit', 'sans-serif'],
body: ['Plus Jakarta Sans', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById("globe-container");
            const canvas = document.getElementById("globe-canvas");
            const loading = document.getElementById("globe-loading");
            const hint = document.getElementById("globe-hint");
            
            if (!canvas || !container) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            // Dimensions setup
            const containerWidth = container.clientWidth || 500;
            const containerHeight = container.clientHeight || 500;
            const radius = Math.min(containerWidth, containerHeight) / 2.5;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = containerWidth * dpr;
            canvas.height = containerHeight * dpr;
            context.scale(dpr, dpr);

            const projection = d3.geoOrthographic()
                .scale(radius)
                .translate([containerWidth / 2, containerHeight / 2])
                .clipAngle(90);

            const path = d3.geoPath().projection(projection).context(context);

            // Polygon logic
            const pointInPolygon = (point, polygon) => {
                const [x, y] = point;
                let inside = false;
                for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                    const [xi, yi] = polygon[i];
                    const [xj, yj] = polygon[j];
                    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
                        inside = !inside;
                    }
                }
                return inside;
            };

            const pointInFeature = (point, feature) => {
                const geometry = feature.geometry;
                if (geometry.type === "Polygon") {
                    const coordinates = geometry.coordinates;
                    if (!pointInPolygon(point, coordinates[0])) return false;
                    for (let i = 1; i < coordinates.length; i++) {
                        if (pointInPolygon(point, coordinates[i])) return false;
                    }
                    return true;
                } else if (geometry.type === "MultiPolygon") {
                    for (const polygon of geometry.coordinates) {
                        if (pointInPolygon(point, polygon[0])) {
                            let inHole = false;
                            for (let i = 1; i < polygon.length; i++) {
                                if (pointInPolygon(point, polygon[i])) {
                                    inHole = true; break;
                                }
                            }
                            if (!inHole) return true;
                        }
                    }
                    return false;
                }
                return false;
            };

            const generateDotsInPolygon = (feature, dotSpacing = 16) => {
                const dots = [];
                const bounds = d3.geoBounds(feature);
                const [[minLng, minLat], [maxLng, maxLat]] = bounds;
                const stepSize = dotSpacing * 0.08;

                for (let lng = minLng; lng <= maxLng; lng += stepSize) {
                    for (let lat = minLat; lat <= maxLat; lat += stepSize) {
                        const point = [lng, lat];
                        if (pointInFeature(point, feature)) {
                            dots.push(point);
                        }
                    }
                }
                return dots;
            };

            const allDots = [];
            let landFeatures;

            const render = () => {
                context.clearRect(0, 0, containerWidth, containerHeight);

                const currentScale = projection.scale();
                const scaleFactor = currentScale / radius;

                // Draw ocean (Realistic dark blue)
                context.beginPath();
                context.arc(containerWidth / 2, containerHeight / 2, currentScale, 0, 2 * Math.PI);
                context.fillStyle = "#0F2A4A"; 
                context.fill();
                context.strokeStyle = "#134e87"; 
                context.lineWidth = 2 * scaleFactor;
                context.stroke();

                if (landFeatures) {
                    // Draw graticule (Subtle oceanic grid)
                    const graticule = d3.geoGraticule();
                    context.beginPath();
                    path(graticule());
                    context.strokeStyle = "#4B7BA8";
                    context.lineWidth = 1 * scaleFactor;
                    context.globalAlpha = 0.2;
                    context.stroke();
                    context.globalAlpha = 1;

                    // Draw landmasses (Rich earth green)
                    context.beginPath();
                    landFeatures.features.forEach(feature => path(feature));
                    context.fillStyle = "#1E4D2B";
                    context.fill();
                    context.strokeStyle = "#123319";
                    context.lineWidth = 1 * scaleFactor;
                    context.stroke();

                    // Draw halftone dots (Lighter green texture)
                    context.fillStyle = "#327A45";
                    allDots.forEach((dot) => {
                        const projected = projection([dot.lng, dot.lat]);
                        if (projected && projected[0] >= 0 && projected[0] <= containerWidth && projected[1] >= 0 && projected[1] <= containerHeight) {
                            context.beginPath();
                            context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
                            context.fill();
                        }
                    });
                }
            };

            const loadWorldData = async () => {
                try {
                    const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
                    if (!response.ok) throw new Error("Failed to load land data");
                    
                    landFeatures = await response.json();
                    
                    landFeatures.features.forEach(feature => {
                        const dots = generateDotsInPolygon(feature, 16);
                        dots.forEach(([lng, lat]) => {
                            allDots.push({ lng, lat, visible: true });
                        });
                    });

                    loading.style.display = 'none';
                    canvas.style.opacity = '1';
                    hint.style.opacity = '1';
                    render();
                } catch (err) {
                    console.error("Globe Error:", err);
                    loading.textContent = "Error loading visualization.";
                    loading.classList.replace("text-slate", "text-red-500");
                }
            };

            // Rotation & Interaction
            const rotation = [0, 0];
            let autoRotate = true;
            const rotationSpeed = 0.5;

            const rotate = () => {
                if (autoRotate) {
                    rotation[0] += rotationSpeed;
                    projection.rotate(rotation);
                    render();
                }
            };

            const rotationTimer = d3.timer(rotate);

            const handleMouseDown = (event) => {
                autoRotate = false;
                const startX = event.clientX;
                const startY = event.clientY;
                const startRotation = [...rotation];

                const handleMouseMove = (moveEvent) => {
                    const sensitivity = 0.5;
                    const dx = moveEvent.clientX - startX;
                    const dy = moveEvent.clientY - startY;

                    rotation[0] = startRotation[0] + dx * sensitivity;
                    rotation[1] = startRotation[1] - dy * sensitivity;
                    rotation[1] = Math.max(-90, Math.min(90, rotation[1]));

                    projection.rotate(rotation);
                    render();
                };

                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                    setTimeout(() => { autoRotate = true; }, 10);
                };

                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            };

            const handleWheel = (event) => {
                event.preventDefault();
                const scaleFactor = event.deltaY > 0 ? 0.9 : 1.1;
                const newRadius = Math.max(radius * 0.5, Math.min(radius * 3, projection.scale() * scaleFactor));
                projection.scale(newRadius);
                render();
            };

            canvas.addEventListener("mousedown", handleMouseDown);
            canvas.addEventListener("wheel", handleWheel, { passive: false });

            // Initialize
            loadWorldData();
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
      

<div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="ambient-blob bg-cyan-500/10 w-[600px] h-[600px] top-[-10%] left-[-10%]"></div>
<div className="ambient-blob bg-azure/10 w-[500px] h-[500px] bottom-[10%] right-[-10%]" style={{animationDelay: '-5s'}}></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 h-[80px] glass-panel bg-void/70 border-b-white/5 border-t-0 border-l-0 border-r-0 flex items-center justify-center">
<div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">

<a aria-label="Nexa AI Home" className="font-display font-medium text-xl tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="bg-cyan-500 w-2 h-2 rounded-full shadow-[0_0_10px_#00d9ff] group-hover:scale-150 transition-transform"></span>
                NEXA
            </a>

<nav aria-label="Main Navigation" className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-muted hover:text-white transition-colors relative group flex items-center gap-1.5" href="#features">
<span className="w-1 h-1 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-colors"></span>
                    Platform
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-light text-muted hover:text-white transition-colors relative group flex items-center gap-1.5" href="#process">
<span className="w-1 h-1 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-colors"></span>
                    Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-light text-muted hover:text-white transition-colors relative group flex items-center gap-1.5" href="#pricing">
<span className="w-1 h-1 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 transition-colors"></span>
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all group-hover:w-full"></span>
</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-light text-white hover:text-cyan-500 transition-colors" href="#">Sign in</a>
<a className="text-sm font-medium bg-white text-void px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors" href="#cta">
                    Talk to us
                </a>
</div>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center justify-center pt-[80px] pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10 w-full mt-10 lg:mt-0">

<div className="text-center max-w-4xl mx-auto mb-16 relative z-20">
<h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.1] text-reveal flex flex-wrap justify-center gap-x-3 lg:gap-x-4">
<span style={{animationDelay: '0.04s'}}>Intelligence</span>
<span style={{animationDelay: '0.08s'}}>that</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-azure" style={{animationDelay: '0.12s'}}>flows</span>
<span style={{animationDelay: '0.16s'}}>with</span>
<span style={{animationDelay: '0.20s'}}>your</span>
<span style={{animationDelay: '0.24s'}}>data.</span>
</h1>
<p className="mt-6 text-base md:text-lg text-slate font-light max-w-2xl mx-auto opacity-0 animate-[revealUp_0.8s_ease_0.4s_forwards]">
                        Harness the power of fluid neural networks. Nexa AI adapts to your ecosystem, turning complex data streams into elegant, actionable insights.
                    </p>
</div>

<div className="relative w-full flex justify-center h-[500px] items-center mt-8">
<div className="relative w-full max-w-[500px] aspect-square flex justify-center items-center" id="globe-container">
<div className="absolute inset-0 flex items-center justify-center text-sm text-slate animate-pulse" id="globe-loading">
                            Initializing Global Data...
                        </div>
<canvas aria-label="Interactive 3D Data Globe representation" className="w-full h-full rounded-2xl cursor-grab active:cursor-grabbing opacity-0 transition-opacity duration-1000" id="globe-canvas"></canvas>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-muted-foreground px-3 py-1.5 rounded-md bg-neutral-900/50 backdrop-blur-md border border-white/10 opacity-0 transition-opacity duration-1000 pointer-events-none" id="globe-hint">
                            Drag to rotate • Scroll to zoom
                        </div>
</div>

<div className="absolute top-[20%] left-[15%] lg:left-[25%] glass-panel px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 animate-[float_5s_ease-in-out_infinite_0.5s] z-10 pointer-events-none">
<iconify-icon className="text-cyan-500" icon="solar:chart-square-linear"></iconify-icon>
                        Predictive Modeling
                    </div>
<div className="absolute bottom-[25%] right-[10%] lg:right-[20%] glass-panel px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 animate-[float_7s_ease-in-out_infinite_1s] z-10 pointer-events-none">
<iconify-icon className="text-azure" icon="solar:cpu-linear"></iconify-icon>
                        Neural Routing
                    </div>
<div className="absolute top-[60%] left-[10%] lg:left-[20%] glass-panel px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 animate-[float_6s_ease-in-out_infinite_1.5s] z-10 pointer-events-none">
<iconify-icon className="text-white" icon="solar:shield-network-linear"></iconify-icon>
                        Quantum Security
                    </div>

<div className="absolute bottom-0 right-4 lg:right-10 glass-panel p-5 rounded-2xl flex flex-col gap-1 border-l-cyan-500/50 border-l-2 z-10 pointer-events-none">
<span className="text-xs text-slate font-light uppercase tracking-widest">Processing</span>
<div className="font-display font-medium text-3xl tracking-tight text-cyan-500 flex items-baseline gap-1">
<span className="counter">98.4</span><span className="text-lg">T/s</span>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none"></div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-4">Architected for scale</h2>
<p className="text-sm md:text-base text-slate font-light max-w-xl mx-auto">Micro-services designed to handle enterprise loads with zero latency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="glass-card p-8 rounded-3xl group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-2xl text-white group-hover:text-cyan-500 transition-colors relative z-10" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg tracking-tight mb-2 text-white">Dynamic Storage</h3>
<p className="text-xs text-slate font-light leading-relaxed">Auto-scaling data vaults that compress and expand based on real-time ingestion rates.</p>
</article>

<article className="glass-card p-8 rounded-3xl group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-2xl text-white group-hover:text-cyan-500 transition-colors relative z-10" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg tracking-tight mb-2 text-white">Insta-Compute</h3>
<p className="text-xs text-slate font-light leading-relaxed">Serverless execution environments that boot in milliseconds, powered by edge nodes.</p>
</article>

<article className="glass-card p-8 rounded-3xl group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-2xl text-white group-hover:text-cyan-500 transition-colors relative z-10" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg tracking-tight mb-2 text-white">Logic Engines</h3>
<p className="text-xs text-slate font-light leading-relaxed">Visual node-based logic builders that compile to highly optimized machine code instantly.</p>
</article>

<article className="glass-card p-8 rounded-3xl group">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>
<iconify-icon className="text-2xl text-white group-hover:text-cyan-500 transition-colors relative z-10" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h3 className="font-display font-medium text-lg tracking-tight mb-2 text-white">Deep Observability</h3>
<p className="text-xs text-slate font-light leading-relaxed">Granular telemetry with AI-driven anomaly detection and self-healing protocols.</p>
</article>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-24 relative z-10">
<h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-4">How it integrates</h2>
<p className="text-sm md:text-base text-slate font-light max-w-xl mx-auto">Three seamless steps to upgrade your infrastructure.</p>
</div>

<div aria-hidden="true" className="hidden lg:block absolute top-[60%] left-[10%] right-[10%] h-px bg-white/10 z-0">
<div className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full opacity-50"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">

<div className="glass-panel p-10 rounded-[32px] relative group overflow-hidden">
<div aria-hidden="true" className="absolute -right-4 -top-8 font-display font-bold text-[120px] text-cyan-500/10 leading-none select-none group-hover:rotate-180 transition-transform duration-700 ease-in-out">01</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-xl tracking-tight mb-3">Connect Sources</h3>
<p className="text-sm text-slate font-light">Plug into any database, API, or data stream using our universal connectors with zero-config setup.</p>
</div>
</div>

<div className="glass-panel p-10 rounded-[32px] relative group overflow-hidden mt-0 lg:mt-12 border-cyan-500/20 shadow-[0_0_30px_rgba(0,217,255,0.05)]">
<div aria-hidden="true" className="absolute -right-4 -top-8 font-display font-bold text-[120px] text-cyan-500/10 leading-none select-none group-hover:rotate-180 transition-transform duration-700 ease-in-out">02</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-xl tracking-tight mb-3">Train &amp; Map</h3>
<p className="text-sm text-slate font-light">The engine autonomously maps relationships and trains custom models on your distinct data topography.</p>
</div>
</div>

<div className="glass-panel p-10 rounded-[32px] relative group overflow-hidden mt-0 lg:mt-24">
<div aria-hidden="true" className="absolute -right-4 -top-8 font-display font-bold text-[120px] text-cyan-500/10 leading-none select-none group-hover:rotate-180 transition-transform duration-700 ease-in-out">03</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-xl tracking-tight mb-3">Deploy Logic</h3>
<p className="text-sm text-slate font-light">Push AI-driven logic to the edge. Enjoy sub-millisecond responses and predictive capabilities instantly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-8">Transparent execution</h2>

<div className="inline-flex items-center gap-3 glass-panel p-1 rounded-full">
<span className="text-xs font-medium text-slate pl-4">Monthly</span>
<label aria-label="Toggle pricing period" className="relative inline-flex items-center cursor-pointer w-12 h-6 rounded-full bg-void border border-white/10">
<input className="sr-only peer toggle-checkbox" type="checkbox"/>
<div className="w-4 h-4 rounded-full bg-white absolute left-1 peer-checked:bg-cyan-500 peer-checked:translate-x-6 transition-all duration-300"></div>
</label>
<span className="text-xs font-medium text-white pr-4">Annually <span className="text-cyan-500 ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="glass-card p-8 rounded-3xl h-full flex flex-col">
<h3 className="font-display font-medium text-lg text-slate mb-2">Starter</h3>
<div className="font-display font-medium text-4xl tracking-tight mb-6 flex items-baseline gap-1">
                            $49 <span className="text-sm text-slate font-light tracking-normal">/mo</span>
</div>
<ul aria-label="Starter Plan Features" className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                10k Operations/mo
                            </li>
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                Basic Analytics
                            </li>
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                Community Support
                            </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">Get Started</button>
</div>

<div className="glass-panel p-8 rounded-3xl h-full flex flex-col relative border-cyan-500/50 shadow-[0_0_40px_rgba(0,217,255,0.15)] md:-mt-8 md:mb-8 bg-void/50 backdrop-blur-2xl">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-void text-xs font-semibold px-4 py-1 rounded-full overflow-hidden">
<span className="relative z-10">Most Popular</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Professional</h3>
<div className="font-display font-medium text-5xl tracking-tight mb-6 flex items-baseline gap-1 text-cyan-500">
                            $199 <span className="text-sm text-slate font-light tracking-normal">/mo</span>
</div>
<ul aria-label="Professional Plan Features" className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                500k Operations/mo
                            </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Advanced Neural Routing
                            </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Priority Support 24/7
                            </li>
<li className="flex items-center gap-3 text-sm text-white font-light">
<iconify-icon className="text-cyan-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Custom Models
                            </li>
</ul>
<button className="w-full py-3 text-sm font-medium btn-shimmer">Upgrade to Pro</button>
</div>

<div className="glass-card p-8 rounded-3xl h-full flex flex-col">
<h3 className="font-display font-medium text-lg text-slate mb-2">Enterprise</h3>
<div className="font-display font-medium text-4xl tracking-tight mb-6 flex items-baseline gap-1">
                            Custom
                        </div>
<ul aria-label="Enterprise Plan Features" className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                Unlimited Operations
                            </li>
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                Dedicated Clusters
                            </li>
<li className="flex items-center gap-3 text-sm text-slate font-light">
<iconify-icon className="text-cyan-500" icon="solar:check-circle-linear"></iconify-icon>
                                On-Premise Deployment
                            </li>
</ul>
<button className="w-full py-3 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section aria-label="Customer Testimonials" className="py-20 overflow-hidden border-y border-white/5 bg-white/[0.01]">
<div className="marquee-wrapper relative">

<div aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none"></div>
<div aria-hidden="true" className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none"></div>
<div className="marquee-container gap-6 px-6">


<article className="glass-panel p-6 rounded-2xl w-[350px] shrink-0">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 mb-4 text-cyan-500">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-slate mb-6">"Nexa AI reduced our data processing latency by 80%. The dynamic storage feature alone saved us thousands."</p>
<div className="flex items-center gap-3">
<div aria-hidden="true" className="w-8 h-8 rounded-full bg-azure/20 flex items-center justify-center font-display text-xs text-azure">S</div>
<div>
<div className="text-xs font-medium text-white">Sarah Jenkins</div>
<div className="text-[10px] text-muted">CTO, DataFlow</div>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl w-[350px] shrink-0">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 mb-4 text-cyan-500">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-slate mb-6">"The visual logic builder is incredible. We compiled complex neural routing rules in minutes instead of weeks."</p>
<div className="flex items-center gap-3">
<div aria-hidden="true" className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center font-display text-xs text-cyan-500">M</div>
<div>
<div className="text-xs font-medium text-white">Marcus Vance</div>
<div className="text-[10px] text-muted">Lead Architect, Quant Systems</div>
</div>
</div>
</article>

<article className="glass-panel p-6 rounded-2xl w-[350px] shrink-0">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 mb-4 text-cyan-500">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-slate mb-6">"Self-healing protocols mean our edge nodes literally fix themselves before alerts even hit Slack. Pure magic."</p>
<div className="flex items-center gap-3">
<div aria-hidden="true" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-display text-xs text-white">E</div>
<div>
<div className="text-xs font-medium text-white">Elena Rostova</div>
<div className="text-[10px] text-muted">VP Engineering, Sentinel</div>
</div>
</div>
</article>

<article aria-hidden="true" className="glass-panel p-6 rounded-2xl w-[350px] shrink-0">
<div className="flex items-center gap-1 mb-4 text-cyan-500">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-slate mb-6">"Nexa AI reduced our data processing latency by 80%. The dynamic storage feature alone saved us thousands."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-azure/20 flex items-center justify-center font-display text-xs text-azure">S</div>
<div>
<div className="text-xs font-medium text-white">Sarah Jenkins</div>
<div className="text-[10px] text-muted">CTO, DataFlow</div>
</div>
</div>
</article>
<article aria-hidden="true" className="glass-panel p-6 rounded-2xl w-[350px] shrink-0">
<div className="flex items-center gap-1 mb-4 text-cyan-500">
<iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon><iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm font-light text-slate mb-6">"The visual logic builder is incredible. We compiled complex neural routing rules in minutes instead of weeks."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center font-display text-xs text-cyan-500">M</div>
<div>
<div className="text-xs font-medium text-white">Marcus Vance</div>
<div className="text-[10px] text-muted">Lead Architect, Quant Systems</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-32 px-6" id="cta">
<div className="max-w-6xl mx-auto">
<div className="glass-panel rounded-[48px] p-12 md:p-24 relative overflow-hidden text-center">

<div aria-hidden="true" className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/30 blur-[100px] rounded-full pointer-events-none"></div>
<div aria-hidden="true" className="absolute -bottom-20 -right-20 w-64 h-64 bg-azure/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tighter mb-6">Initialize your intelligence upgrade.</h2>
<p className="text-base text-slate font-light mb-10">Join elite engineering teams scaling operations with Nexa AI. Deployment takes minutes.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 text-sm font-medium btn-shimmer">Deploy Now</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group">
                                Schedule Demo
                                <iconify-icon className="group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-display font-medium text-xl tracking-tight text-white flex items-center gap-2 opacity-50">
<span className="bg-cyan-500 w-2 h-2 rounded-full"></span>
                NEXA
            </div>
<p className="text-xs text-slate font-light">© 2026 Nexa AI Systems. All vectors reserved.</p>
<div className="flex gap-4">
<a aria-label="Nexa AI Github Profile" className="text-slate hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:github-linear"></iconify-icon></a>
<a aria-label="Nexa AI Twitter Profile" className="text-slate hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
