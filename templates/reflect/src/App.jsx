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



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
          


    // General Interactions
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));

    function toggleFAQ(element) {
      const content = element.querySelector('.faq-content');
      const icon = element.querySelector('.faq-icon');
      const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';
      
      // Accessibility update for ARIA expanded state
      document.querySelectorAll('.faq-content').forEach(el => el.style.maxHeight = '0px');
      document.querySelectorAll('.faq-icon').forEach(el => el.classList.remove('rotate-45'));
      element.parentElement.querySelectorAll('[aria-expanded="true"]').forEach(el => el.setAttribute('aria-expanded', 'false'));
      
      if (!isExpanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-45');
        element.setAttribute('aria-expanded', 'true');
      }
    }

    // 3D Wireframe Dotted Globe Visualization using D3.js
    document.addEventListener('DOMContentLoaded', () => {
      if (typeof d3 === 'undefined') return;

      const container = document.getElementById('globe-container');
      const canvas = document.getElementById('globe-canvas');
      const loadingEl = document.getElementById('globe-loading');
      const context = canvas.getContext('2d');
      if (!context) return;

      let width, height, radius;
      let projection, path;
      let initialScale;

      function resizeCanvas() {
        const rect = container.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        // Adjusted radius calculation to give the globe more breathing room
        radius = Math.min(width, height) / (window.innerWidth < 768 ? 2.2 : 2.5); 
        initialScale = radius;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        context.scale(dpr, dpr);

        if(!projection) {
          projection = d3.geoOrthographic()
            .scale(radius)
            .translate([width / 2, height / 2])
            .clipAngle(90);
        } else {
          projection.translate([width / 2, height / 2]).scale(radius);
        }

        path = d3.geoPath().projection(projection).context(context);
      }

      window.addEventListener('resize', () => {
        resizeCanvas();
      });

      resizeCanvas();

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
                  inHole = true;
                  break;
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
      let isLoading = true;
      let currentRotation = [0, -15];
      let isDragging = false;
      let previousMousePosition = null;

      // Mouse Drag Events
      canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = [e.clientX, e.clientY];
        canvas.classList.add('cursor-grabbing');
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.classList.remove('cursor-grabbing');
      });

      window.addEventListener('mousemove', (e) => {
        if (isDragging && previousMousePosition) {
          const dx = e.clientX - previousMousePosition[0];
          const dy = e.clientY - previousMousePosition[1];
          currentRotation[0] += dx * 0.5;
          currentRotation[1] -= dy * 0.5;
          currentRotation[1] = Math.max(-90, Math.min(90, currentRotation[1])); // clamp pitch
          previousMousePosition = [e.clientX, e.clientY];
        }
      });

      // Touch Drag Events
      canvas.addEventListener('touchstart', (e) => {
        isDragging = true;
        previousMousePosition = [e.touches[0].clientX, e.touches[0].clientY];
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });

      canvas.addEventListener('touchmove', (e) => {
        if (isDragging && previousMousePosition) {
          e.preventDefault(); // prevent scroll while rotating
          const dx = e.touches[0].clientX - previousMousePosition[0];
          const dy = e.touches[0].clientY - previousMousePosition[1];
          currentRotation[0] += dx * 0.5;
          currentRotation[1] -= dy * 0.5;
          currentRotation[1] = Math.max(-90, Math.min(90, currentRotation[1]));
          previousMousePosition = [e.touches[0].clientX, e.touches[0].clientY];
        }
      }, { passive: false });

      // Wheel Zoom Event
      canvas.addEventListener('wheel', (e) => {
        e.preventDefault(); // prevent page scroll when zooming globe
        const zoomSensitivity = 0.5;
        let currentScale = projection.scale();
        currentScale += e.deltaY * -zoomSensitivity;
        // Clamp zoom between 0.5x and 3.5x of original radius
        currentScale = Math.max(initialScale * 0.5, Math.min(initialScale * 3.5, currentScale));
        projection.scale(currentScale);
      }, { passive: false });


      const render = () => {
        context.clearRect(0, 0, width, height);

        // Auto-rotate only if not interacting
        if (!isDragging) {
          currentRotation[0] += 0.2;
        }
        
        projection.rotate(currentRotation);

        const currentScale = projection.scale();
        const scaleFactor = currentScale / initialScale;

        context.beginPath();
        context.arc(width / 2, height / 2, currentScale, 0, 2 * Math.PI);
        context.fillStyle = "rgba(0, 0, 0, 0.4)"; 
        context.fill();
        context.strokeStyle = "rgba(255, 255, 255, 0.1)";
        context.lineWidth = 1 * scaleFactor;
        context.stroke();

        if (landFeatures) {
          const graticule = d3.geoGraticule();
          context.beginPath();
          path(graticule());
          context.strokeStyle = "rgba(255, 255, 255, 0.05)";
          context.lineWidth = 0.5 * scaleFactor;
          context.stroke();

          context.beginPath();
          landFeatures.features.forEach((feature) => {
            path(feature);
          });
          context.strokeStyle = "rgba(129, 140, 248, 0.4)";
          context.lineWidth = 1 * scaleFactor;
          context.stroke();

          allDots.forEach((dot) => {
            const projected = projection([dot.lng, dot.lat]);
            if (
              projected &&
              projected[0] >= 0 &&
              projected[0] <= width &&
              projected[1] >= 0 &&
              projected[1] <= height
            ) {
              context.beginPath();
              context.arc(projected[0], projected[1], 1.2 * scaleFactor, 0, 2 * Math.PI);
              const distFromCenter = Math.sqrt(Math.pow(projected[0] - width/2, 2) + Math.pow(projected[1] - height/2, 2));
              const fadeRatio = 1 - (distFromCenter / currentScale);
              context.fillStyle = `rgba(168, 85, 247, ${Math.max(0.1, fadeRatio * 0.9)})`; 
              context.fill();
            }
          });
        }
      };

      const loadWorldData = async () => {
        try {
          const response = await fetch("https://raw.githubusercontent.com/martynafford/natural-earth-geojson/refs/heads/master/110m/physical/ne_110m_land.json");
          if (!response.ok) throw new Error("Failed to load map");
          
          landFeatures = await response.json();
          
          landFeatures.features.forEach((feature) => {
            const dots = generateDotsInPolygon(feature, 18); 
            dots.forEach(([lng, lat]) => {
              allDots.push({ lng, lat, visible: true });
            });
          });

          isLoading = false;
          if(loadingEl) loadingEl.style.display = 'none';
          
          // Start the animation loop
          const animate = () => {
            render();
            requestAnimationFrame(animate);
          };
          animate();
          
        } catch (err) {
          console.error(err);
          if(loadingEl) loadingEl.innerText = 'Topology Load Failed.';
        }
      };

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
      
<div className="min-h-screen relative">

<header>
<nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-8 pointer-events-none">
<div className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 px-6 md:px-8 py-3 rounded-full flex items-center gap-6 md:gap-12 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
<div className="flex items-center">
<span className="font-semibold tracking-tighter text-sm">REFLECT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a aria-label="Go to Features" className="hover:text-white transition-colors duration-300" href="#features">Features</a>
<a aria-label="Go to Queue" className="hover:text-white transition-colors duration-300" href="#queue">Queue</a>
<a aria-label="Go to Studio" className="hover:text-white transition-colors duration-300" href="#studio">Studio</a>
<a aria-label="Go to Pricing" className="hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<a aria-label="Get Started with Reflect" className="bg-white text-black px-4 md:px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 whitespace-nowrap" href="#pricing">Get Started</a>
</div>
</nav>
</header>

<main>
<section className="flex flex-col overflow-hidden pt-32 md:pt-40 pr-4 pb-20 md:pb-32 pl-4 items-center relative">

<div className="aura-background-component absolute top-0 left-0 w-full h-[600px] md:h-[800px] -z-10 pointer-events-none opacity-90 md:opacity-100 [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)] mix-blend-screen">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
<div className="relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center">

<div className="relative z-30 text-center mb-16 md:mb-24 max-w-4xl mx-auto reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
<h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold mb-6 md:mb-8 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>
              Redefining the <br/> creative orbit.
            </h1>
<p className="text-slate-400 text-base sm:text-lg md:text-xl tracking-tight max-w-2xl mx-auto leading-relaxed relative z-10 px-4">
              Experience a desktop environment designed for deep work. Seamlessly blend your schedule, search, and session in
              one cinematic frame.
            </p>
</div>
<div className="relative w-full">

<div className="relative z-20 w-full bg-gradient-to-br from-white/[0.06] to-black/40 border border-white/10 border-t-white/20 border-l-white/20 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_40px_rgba(0,0,0,0.6)] overflow-hidden min-h-[37.5rem] grid grid-cols-1 lg:grid-cols-12 backdrop-blur-lg">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.03] pointer-events-none z-0"></div>

<div className="lg:col-span-3 flex flex-col gap-8 lg:border-b-0 lg:border-r p-6 md:p-8 overflow-hidden group/sidebar border-white/5 border-b relative gap-x-8 gap-y-8 z-10">
<div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-br from-indigo-500/20 via-purple-500/5 to-transparent pointer-events-none opacity-60 group-hover/sidebar:opacity-100 transition-opacity duration-700"></div>

<div className="flex items-center gap-4 z-10">
<div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-indigo-500 via-purple-500 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<div className="w-full h-full bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.5),transparent)]"></div>
<iconify-icon className="relative z-10 text-2xl text-white/90" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-black/50 rounded-full"></div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-slate-100 tracking-tight">Alex Rivera</h3>
<span className="text-[0.6rem] uppercase tracking-widest bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 px-1.5 py-0.5 rounded flex items-center gap-1 font-semibold backdrop-blur-md">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                        Pro
                      </span>
</div>
<span className="text-xs text-slate-400">Lead Visualizer</span>
</div>
</div>
<hr className="border-white/10 z-10 mix-blend-overlay"/>

<div className="flex flex-col gap-4 z-10">
<div className="flex items-center justify-between">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      Cloud Storage
                    </h4>
<iconify-icon className="text-slate-300 text-lg" icon="solar:cloud-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div aria-label="Storage Usage: 842 GB of 1 TB" className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:from-white/[0.08] hover:to-white/[0.02] backdrop-blur-md transition-all duration-500 rounded-2xl p-4 border border-white/10 hover:border-white/20 hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] flex flex-col gap-3 group cursor-pointer">
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-white flex items-baseline gap-1">
                          842 <span className="text-xs text-slate-400 font-normal uppercase tracking-widest">GB</span>
</span>
</div>
<span className="text-xs text-slate-400 mb-1">of 1 TB</span>
</div>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="84" className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden relative border border-white/5" role="progressbar">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full group-hover:shadow-[0_0_12px_rgba(168,85,247,0.6)] transition-all duration-500" style={{width: '84%'}}></div>
</div>
<div className="flex justify-between items-center mt-1">
<span className="text-[0.65rem] font-semibold uppercase tracking-widest text-indigo-300">Warning Limit</span>
<span className="text-xs text-slate-300">84%</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6 z-10 flex-1 mt-2">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Engine Preferences
                  </h4>
<div className="flex flex-col gap-5">
<label className="flex items-center justify-between cursor-pointer group/toggle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-center text-slate-300 group-hover/toggle:text-indigo-300 group-hover/toggle:bg-indigo-500/20 group-hover/toggle:border-indigo-500/30 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-200 font-medium group-hover/toggle:text-white transition-colors">Live Sync</span>
</div>
<div className="relative">
<input aria-label="Toggle Live Sync" checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-black/40 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 shadow-inner"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group/toggle">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/5 flex items-center justify-center text-slate-300 group-hover/toggle:text-indigo-300 group-hover/toggle:bg-indigo-500/20 group-hover/toggle:border-indigo-500/30 transition-all duration-300">
<iconify-icon className="text-lg" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-200 font-medium group-hover/toggle:text-white transition-colors">Auto Render</span>
</div>
<div className="relative">
<input aria-label="Toggle Auto Render" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-black/40 border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-500 shadow-inner"></div>
</div>
</label>
<div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-2 mix-blend-overlay z-10"></div>
<div className="flex flex-col gap-3 -mt-6 z-20">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300 text-lg" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-slate-200 font-medium">Memory Allocation</span>
</div>
<span className="text-xs bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/10 text-white font-medium">16 GB</span>
</div>
<div className="relative w-full pt-2 pb-2">
<input aria-label="Memory Allocation Slider" className="w-full h-1.5 bg-black/40 border border-white/5 rounded-lg appearance-none cursor-pointer focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:border-2 [&amp;::-webkit-slider-thumb]:border-indigo-500 [&amp;::-webkit-slider-thumb]:rounded-full hover:[&amp;::-webkit-slider-thumb]:scale-125 hover:[&amp;::-webkit-slider-thumb]:bg-indigo-100 [&amp;::-webkit-slider-thumb]:transition-all [&amp;::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(99,102,241,0.8)]" max="32" min="4" type="range" value="16"/>
<div className="flex justify-between w-full mt-2 px-1">
<span className="text-[0.6rem] text-slate-400">4GB</span>
<span className="text-[0.6rem] text-slate-400">32GB</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 border-b lg:border-b-0 relative flex flex-col items-center justify-center p-8 md:p-12 group overflow-hidden min-h-[20rem] md:min-h-[25rem] z-10">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 group-hover:opacity-70 transition-opacity duration-1000 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0 mix-blend-screen"></div>
<div className="relative w-full max-w-[14rem] md:max-w-[18rem] aspect-square flex items-center justify-center cursor-crosshair z-10">
<div className="absolute inset-0 rounded-full border border-white/10 border-dashed group-hover:border-white/30 group-hover:scale-[1.15] transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-start justify-center">
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full -mt-[3px] group-hover:bg-indigo-300 group-hover:shadow-[0_0_15px_rgba(129,140,248,0.9)] transition-all duration-500"></div>
</div>
<div className="absolute inset-6 md:inset-8 rounded-full border border-white/10 group-hover:border-indigo-400/50 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-start">
<div className="w-2 h-2 bg-slate-500 rounded-full -ml-[4px] group-hover:bg-purple-300 group-hover:shadow-[0_0_20px_rgba(192,132,252,0.9)] transition-all duration-500"></div>
</div>
<div className="absolute inset-12 md:inset-16 rounded-full border border-white/20 border-dashed group-hover:border-white/40 group-hover:scale-90 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></div>
<div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-white/20 to-white/5 p-[1px] group-hover:from-indigo-400 group-hover:to-purple-400 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] transition-all duration-700 z-10">
<div className="absolute inset-0 bg-black/40 rounded-full backdrop-blur-xl z-0 transition-colors duration-700"></div>
<div className="relative z-10 w-full h-full rounded-full flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] transition-colors duration-700">
<iconify-icon className="text-slate-200 text-2xl md:text-3xl group-hover:text-white group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" icon="solar:programming-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-0 md:top-2 right-[-1rem] md:right-0 bg-white/10 backdrop-blur-lg border border-white/20 px-2 md:px-3 py-1.5 rounded-full text-[0.6rem] uppercase tracking-widest text-white flex items-center gap-1.5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-2 group-hover:translate-x-4 transition-all duration-700 delay-100 z-20 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
<span className="hidden sm:inline">Active Node</span>
</div>
<div className="absolute bottom-4 md:bottom-6 left-[-1rem] md:left-0 bg-white/10 backdrop-blur-lg border border-white/20 px-2 md:px-3 py-1.5 rounded-full text-[0.6rem] uppercase tracking-widest text-white flex items-center gap-1.5 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-2 group-hover:-translate-x-4 transition-all duration-700 delay-200 z-20 shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
<iconify-icon className="text-indigo-300" icon="solar:database-linear"></iconify-icon>
<span className="hidden sm:inline">4ms Latency</span>
</div>
</div>
</div>

<div className="lg:col-span-3 lg:border-l border-white/10 p-6 md:p-8 flex flex-col z-10">
<div className="flex items-center justify-between mb-8">
<h4 className="text-sm font-semibold text-slate-100">January 2024</h4>
<div className="flex gap-2">
<button aria-label="Previous Month" className="p-1 text-slate-400 hover:text-white transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
<button aria-label="Next Month" className="p-1 text-slate-400 hover:text-white transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-xs text-slate-400 mb-4 text-center font-medium">
<span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span>
</div>
<div className="grid grid-cols-7 gap-1 sm:gap-2">
<div className="aspect-square flex items-center justify-center text-xs text-slate-600">28</div>
<div className="aspect-square flex items-center justify-center text-xs text-slate-600">29</div>
<div className="aspect-square flex items-center justify-center text-xs text-slate-600">30</div>
<div className="aspect-square flex items-center justify-center text-xs bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 font-semibold cursor-pointer hover:bg-white/20 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all text-white" tabindex="0">1</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">2</div>
<div className="aspect-square flex items-center justify-center text-xs text-indigo-300 font-medium cursor-pointer hover:bg-white/10 rounded-xl transition-all hover:text-indigo-200" tabindex="0">3</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">4</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">5</div>
<div className="aspect-square flex items-center justify-center text-xs bg-indigo-500 rounded-xl font-semibold text-white cursor-pointer hover:bg-indigo-400 transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-indigo-400/50" tabindex="0">6</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">7</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">8</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">9</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">10</div>
<div className="aspect-square flex items-center justify-center text-xs cursor-pointer hover:bg-white/10 rounded-xl transition-all text-slate-300 hover:text-white" tabindex="0">11</div>
</div>
<div className="mt-8 lg:mt-auto pt-8 lg:pt-12">
<h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Upcoming</h4>
<div className="space-y-4">
<div className="p-4 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-md rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_4px_20px_rgba(255,255,255,0.05)] transition-all cursor-pointer hover:-translate-y-0.5" tabindex="0">
<p className="text-xs font-semibold text-white">Review Design Kit</p>
<p className="text-xs text-slate-400 mt-1">14:00 • Studio</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Trusted by industry leaders" className="py-16 md:py-24 border-y border-white/5 mt-8 md:mt-12 relative bg-black z-10 overflow-hidden">
<div className="flex w-fit animate-[marquee_40s_linear_infinite] gap-16 md:gap-24 items-center">
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:adobe"></iconify-icon> Adobe
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:figma"></iconify-icon> Figma
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:notion"></iconify-icon> Notion
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:linear"></iconify-icon> Linear
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:openai"></iconify-icon> OpenAI
          </span>

<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:adobe"></iconify-icon> Adobe
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:figma"></iconify-icon> Figma
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:notion"></iconify-icon> Notion
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:linear"></iconify-icon> Linear
          </span>
<span className="text-xl md:text-2xl font-semibold text-slate-700 uppercase tracking-tighter flex items-center gap-3 md:gap-4">
<iconify-icon className="text-2xl md:text-3xl" icon="simple-icons:openai"></iconify-icon> OpenAI
          </span>
</div>
</section>

<section className="max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-8" id="features">
<div className="text-center mb-16 md:mb-20 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Engineered for Mastery</h2>
<p className="text-slate-400 text-base md:text-lg font-normal tracking-tight px-4">A suite of tools designed to fade into the background while you create.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden group hover:bg-white/[0.04] transition-colors duration-500">
<div className="relative z-10">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
<iconify-icon className="text-xl md:text-2xl text-white" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Universal Core</h3>
<p className="text-slate-400 max-w-sm leading-relaxed text-sm md:text-base font-normal">Our custom engine processes assets with zero latency, ensuring your flow remains unbroken no matter the scale of your project.</p>
</div>
<div className="absolute bottom-0 right-0 p-8 md:p-12 transform group-hover:translate-x-4 transition-transform duration-500">
<iconify-icon className="text-5xl md:text-6xl text-white/5" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
<iconify-icon className="text-xl md:text-2xl text-white" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Encrypted Workspace</h3>
<p className="text-slate-400 leading-relaxed text-sm md:text-base font-normal">Bank-grade security for your intellectual property.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-white/[0.04] transition-colors duration-500">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
<iconify-icon className="text-xl md:text-2xl text-white" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Spatial Audio</h3>
<p className="text-slate-400 leading-relaxed text-sm md:text-base font-normal">Immersive soundscapes designed to induce deep focus states.</p>
</div>
<div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
<div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
<div className="flex-1">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
<iconify-icon className="text-xl md:text-2xl text-white" icon="solar:server-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Infinite Storage</h3>
<p className="text-slate-400 leading-relaxed text-sm md:text-base font-normal">Never worry about file sizes or project versions again. It's all managed in the background.</p>
</div>
<div className="w-full md:w-1/2">
<div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-5xl md:text-6xl text-white/20 relative z-10 group-hover:scale-110 transition-transform duration-700" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-8 border-t border-white/5" id="queue">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-6 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Render Queue</h2>
<p className="text-slate-400 text-sm font-normal">Manage and monitor your active node processing.</p>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative w-full md:w-auto">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input aria-label="Search projects" className="bg-white/5 border border-white/10 rounded-full py-2 pl-9 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-white/10 transition-all placeholder:text-slate-500 w-full md:w-64 shadow-inner" placeholder="Search projects..." type="text"/>
</div>
<button aria-label="Filter Queue" className="bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm font-medium transition-colors text-white flex items-center gap-2 whitespace-nowrap">
<iconify-icon icon="solar:filter-linear"></iconify-icon> Filter
            </button>
</div>
</div>
<div className="w-full overflow-x-auto bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-[2rem] reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_40px_rgba(0,0,0,0.3)]">
<table className="w-full text-left border-collapse whitespace-nowrap min-w-[600px]">
<thead>
<tr className="border-b border-white/10 bg-white/[0.02]">
<th className="px-6 md:px-8 py-4 md:py-5 text-xs font-semibold text-slate-500 uppercase tracking-widest" scope="col">Project Name</th>
<th className="px-6 md:px-8 py-4 md:py-5 text-xs font-semibold text-slate-500 uppercase tracking-widest" scope="col">Status</th>
<th className="px-6 md:px-8 py-4 md:py-5 text-xs font-semibold text-slate-500 uppercase tracking-widest hidden md:table-cell" scope="col">Engine</th>
<th className="px-6 md:px-8 py-4 md:py-5 text-xs font-semibold text-slate-500 uppercase tracking-widest hidden sm:table-cell" scope="col">Size</th>
<th className="px-6 md:px-8 py-4 md:py-5 text-xs font-semibold text-slate-500 uppercase tracking-widest text-right" scope="col">Progress</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.04] transition-colors group cursor-pointer">
<td className="px-6 md:px-8 py-4 md:py-6">
<div className="flex items-center gap-3 md:gap-4">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-lg md:text-xl" icon="solar:video-frame-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Aether_Sequence_v4.mp4</div>
<div className="text-xs text-slate-500 mt-0.5 font-medium">Updated 2m ago</div>
</div>
</div>
</td>
<td className="px-6 md:px-8 py-4 md:py-6">
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Rendering
                  </span>
</td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden md:table-cell text-slate-400 font-medium">Octane <span className="text-slate-600 text-[0.65rem] ml-1 uppercase tracking-widest font-semibold">v2.4</span></td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden sm:table-cell text-slate-400">12.4 GB</td>
<td className="px-6 md:px-8 py-4 md:py-6 text-right">
<div className="flex flex-col items-end gap-2">
<span className="text-slate-200 font-mono text-xs font-medium">45%</span>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="45" className="w-16 md:w-24 h-1.5 bg-white/5 rounded-full overflow-hidden" role="progressbar">
<div className="h-full bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-1000" style={{width: '45%'}}></div>
</div>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.04] transition-colors group cursor-pointer">
<td className="px-6 md:px-8 py-4 md:py-6">
<div className="flex items-center gap-3 md:gap-4">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-lg md:text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Neural_Network_Viz.obj</div>
<div className="text-xs text-slate-500 mt-0.5 font-medium">Updated 15m ago</div>
</div>
</div>
</td>
<td className="px-6 md:px-8 py-4 md:py-6">
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-widest bg-amber-500/10 text-amber-400 border border-amber-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Queued
                  </span>
</td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden md:table-cell text-slate-400 font-medium">Redshift <span className="text-slate-600 text-[0.65rem] ml-1 uppercase tracking-widest font-semibold">v3.5</span></td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden sm:table-cell text-slate-400">3.2 GB</td>
<td className="px-6 md:px-8 py-4 md:py-6 text-right">
<div className="flex flex-col items-end gap-2">
<span className="text-slate-500 font-mono text-xs font-medium">0%</span>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="0" className="w-16 md:w-24 h-1.5 bg-white/5 rounded-full overflow-hidden" role="progressbar">
<div className="h-full bg-amber-500/50 rounded-full transition-all duration-1000" style={{width: '0%'}}></div>
</div>
</div>
</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.04] transition-colors group cursor-pointer">
<td className="px-6 md:px-8 py-4 md:py-6">
<div className="flex items-center gap-3 md:gap-4">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-lg md:text-xl" icon="solar:music-note-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Spatial_Audio_Mix.wav</div>
<div className="text-xs text-slate-500 mt-0.5 font-medium">Updated 1h ago</div>
</div>
</div>
</td>
<td className="px-6 md:px-8 py-4 md:py-6">
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-widest bg-slate-500/10 text-slate-300 border border-slate-500/20">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> Completed
                  </span>
</td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden md:table-cell text-slate-400 font-medium">Logic <span className="text-slate-600 text-[0.65rem] ml-1 uppercase tracking-widest font-semibold">Pro</span></td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden sm:table-cell text-slate-400">1.8 GB</td>
<td className="px-6 md:px-8 py-4 md:py-6 text-right">
<div className="flex flex-col items-end gap-2">
<span className="text-slate-300 font-mono text-xs font-medium">100%</span>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="100" className="w-16 md:w-24 h-1.5 bg-white/5 rounded-full overflow-hidden" role="progressbar">
<div className="h-full bg-slate-500 rounded-full transition-all duration-1000" style={{width: '100%'}}></div>
</div>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.04] transition-colors group cursor-pointer">
<td className="px-6 md:px-8 py-4 md:py-6">
<div className="flex items-center gap-3 md:gap-4">
<div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-lg md:text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<div>
<div className="font-semibold text-slate-200 group-hover:text-white transition-colors tracking-tight">Brand_Identity_Final.fig</div>
<div className="text-xs text-slate-500 mt-0.5 font-medium">Updated 3h ago</div>
</div>
</div>
</td>
<td className="px-6 md:px-8 py-4 md:py-6">
<span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[0.65rem] font-semibold uppercase tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20">
<iconify-icon className="text-sm" icon="solar:danger-circle-linear"></iconify-icon> Failed
                  </span>
</td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden md:table-cell text-slate-400 font-medium">Figma <span className="text-slate-600 text-[0.65rem] ml-1 uppercase tracking-widest font-semibold">Cloud</span></td>
<td className="px-6 md:px-8 py-4 md:py-6 hidden sm:table-cell text-slate-400">452 MB</td>
<td className="px-6 md:px-8 py-4 md:py-6 text-right">
<div className="flex flex-col items-end gap-2">
<span className="text-rose-400 font-mono text-xs font-medium">12%</span>
<div aria-valuemax="100" aria-valuemin="0" aria-valuenow="12" className="w-16 md:w-24 h-1.5 bg-white/5 rounded-full overflow-hidden" role="progressbar">
<div className="h-full bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.5)] transition-all duration-1000" style={{width: '12%'}}></div>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-8 border-t border-white/5" id="studio">
<div className="text-center mb-16 md:mb-20 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Enter the Studio</h2>
<p className="text-slate-400 text-base md:text-lg font-normal tracking-tight px-4">Where your workflow becomes a masterpiece. Drag to rotate, scroll to zoom.</p>
</div>
<div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] border border-white/10 bg-black relative overflow-hidden flex items-center justify-center group reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-indigo-500/10 rounded-full blur-[100px]"></div>
<div className="absolute w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_30%,#000000_100%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>
</div>
<div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-auto" id="globe-container">
<canvas aria-label="Interactive 3D Globe Visualization" className="cursor-grab active:cursor-grabbing w-full h-full object-contain" id="globe-canvas"></canvas>
<div className="absolute flex flex-col items-center justify-center gap-3 text-indigo-400 text-xs tracking-widest uppercase font-semibold pointer-events-none" id="globe-loading" style={{display: 'none'}}>
<iconify-icon className="text-2xl" icon="solar:planet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
              Initializing Topology...
            </div>
</div>
<div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2 md:gap-3 opacity-60 z-20 pointer-events-none group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
<span className="text-[0.6rem] md:text-xs tracking-widest uppercase font-semibold text-slate-300">Live Sync</span>
</div>
<div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2 md:gap-4 opacity-60 z-20 pointer-events-none group-hover:opacity-100 transition-opacity duration-500">
<span className="text-[0.6rem] md:text-xs tracking-widest uppercase font-semibold text-slate-300">Engine v2.4</span>
<iconify-icon className="text-slate-300 text-base md:text-lg" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-60 z-20 pointer-events-none group-hover:opacity-100 transition-opacity duration-500 text-right">
<div className="text-[0.6rem] md:text-[0.65rem] tracking-widest uppercase text-indigo-400 font-semibold mb-1">Telemetry</div>
<div className="text-[0.6rem] md:text-xs font-mono text-slate-300">Lat: 34.05° N</div>
<div className="text-[0.6rem] md:text-xs font-mono text-slate-300">Lng: 118.24° W</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-20 md:py-32 px-4 md:px-8 border-t border-white/5" id="pricing">
<div className="text-center mb-16 md:mb-20 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Transparent Pricing</h2>
<p className="text-slate-400 text-base md:text-lg font-normal tracking-tight px-4">Start for free, scale when your ideas demand it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center max-w-lg md:max-w-none mx-auto">

<div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-white/[0.04] transition-colors duration-500">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Starter</h3>
<p className="text-sm text-slate-400">Perfect for individuals finding their creative flow.</p>
</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>$0</span>
<span className="text-sm text-slate-500">/ forever</span>
</div>
<div className="flex flex-col gap-4 flex-1 mt-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                5GB Cloud Storage
              </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                720p Render Output
              </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Basic Workspace Sync
              </div>
</div>
<button aria-label="Start for Free" className="w-full py-3 rounded-full text-sm font-semibold transition-colors duration-300 bg-white/5 hover:bg-white/10 text-white mt-4 border border-white/5">
              Start for Free
            </button>
</div>

<div className="relative bg-indigo-500/[0.02] border border-indigo-500/30 rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden transform md:-translate-y-4 shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:bg-indigo-500/[0.04]">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-semibold tracking-tight text-white">Pro</h3>
<span className="text-[0.6rem] uppercase tracking-widest bg-indigo-500/20 text-indigo-400 px-2 py-1 rounded-full font-semibold border border-indigo-500/30">Most Popular</span>
</div>
<p className="text-sm text-slate-400">For professionals pushing the boundaries.</p>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>$15</span>
<span className="text-sm text-slate-500">/ month</span>
</div>
<div className="flex flex-col gap-4 flex-1 mt-4 relative z-10">
<div className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                1TB Cloud Storage
              </div>
<div className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                4K Auto Render
              </div>
<div className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Live Sync Ecosystem
              </div>
<div className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Spatial Audio Integration
              </div>
</div>
<button aria-label="Upgrade to Pro Plan" className="relative z-10 w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 bg-white text-black hover:bg-slate-200 mt-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Upgrade to Pro
            </button>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 reveal-item transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-white/[0.04] transition-colors duration-500">
<div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Enterprise</h3>
<p className="text-sm text-slate-400">Custom solutions for large-scale studios.</p>
</div>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Custom</span>
</div>
<div className="flex flex-col gap-4 flex-1 mt-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Infinite Storage
              </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Dedicated Render Nodes
              </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-slate-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                SSO &amp; Advanced Admin
              </div>
</div>
<button aria-label="Contact Sales for Enterprise Plan" className="w-full py-3 rounded-full text-sm font-semibold transition-colors duration-300 bg-white/5 hover:bg-white/10 text-white mt-4 border border-white/5">
              Contact Sales
            </button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-20 md:py-32 px-4 md:px-8 reveal-item opacity-0 translate-y-6 transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] border-t border-white/5">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12 md:mb-20" style={{fontFamily: '\'Cabinet Grotesk\', sans-serif'}}>Common Questions</h2>
<div className="space-y-4 md:space-y-6">
<div aria-expanded="false" className="group bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-5 md:p-6 cursor-pointer hover:bg-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50" onclick="toggleFAQ(this)" onkeypress="if(event.key==='Enter') toggleFAQ(this)" tabindex="0">
<div className="flex items-center justify-between">
<h4 className="text-base md:text-lg font-semibold tracking-tight">How does the portal effect work?</h4>
<iconify-icon className="text-xl md:text-2xl transition-transform duration-500 text-slate-500 group-hover:text-white faq-icon" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 faq-content">
<p className="text-slate-400 pt-4 md:pt-6 leading-relaxed text-sm md:text-base font-normal">
                Our portal is more than a visual—it's a gateway to your local and cloud environments, synchronized via high-speed WebSockets for instantaneous access.
              </p>
</div>
</div>
<div aria-expanded="false" className="group bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-5 md:p-6 cursor-pointer hover:bg-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50" onclick="toggleFAQ(this)" onkeypress="if(event.key==='Enter') toggleFAQ(this)" tabindex="0">
<div className="flex items-center justify-between">
<h4 className="text-base md:text-lg font-semibold tracking-tight">Can I use Reflect offline?</h4>
<iconify-icon className="text-xl md:text-2xl transition-transform duration-500 text-slate-500 group-hover:text-white faq-icon" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 faq-content">
<p className="text-slate-400 pt-4 md:pt-6 leading-relaxed text-sm md:text-base font-normal">
                Absolutely. Reflect stores your most frequent assets locally using advanced caching, allowing you to work from anywhere without losing a single frame.
              </p>
</div>
</div>
<div aria-expanded="false" className="group bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-5 md:p-6 cursor-pointer hover:bg-white/[0.04] transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50" onclick="toggleFAQ(this)" onkeypress="if(event.key==='Enter') toggleFAQ(this)" tabindex="0">
<div className="flex items-center justify-between">
<h4 className="text-base md:text-lg font-semibold tracking-tight">Is it compatible with other creative apps?</h4>
<iconify-icon className="text-xl md:text-2xl transition-transform duration-500 text-slate-500 group-hover:text-white faq-icon" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 faq-content">
<p className="text-slate-400 pt-4 md:pt-6 leading-relaxed text-sm md:text-base font-normal">
                Reflect acts as a universal bridge for Figma, Adobe Creative Cloud, and Notion, consolidating your workspace into one cohesive cinematic experience.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-16 md:py-24 px-4 md:px-8 mt-8 md:mt-12 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16">
<div className="max-w-xs">
<div className="flex items-center mb-6 md:mb-8">
<span className="font-semibold tracking-tighter text-lg">REFLECT</span>
</div>
<p className="text-slate-500 text-sm font-normal leading-relaxed">
            Crafting the next generation of creative workstations. Designed for those who build the future.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24">
<div className="flex flex-col gap-4 md:gap-6">
<h5 className="text-xs font-semibold uppercase tracking-widest text-white">Product</h5>
<a aria-label="Product Showcase" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#features">Showcase</a>
<a aria-label="Studio Details" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#studio">Studio</a>
<a aria-label="Pricing Details" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#pricing">Pricing</a>
</div>
<div className="flex flex-col gap-4 md:gap-6">
<h5 className="text-xs font-semibold uppercase tracking-widest text-white">Company</h5>
<a aria-label="About Us" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#">About</a>
<a aria-label="Company Journal" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#">Journal</a>
<a aria-label="Careers at Reflect" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4 md:gap-6">
<h5 className="text-xs font-semibold uppercase tracking-widest text-white">Legal</h5>
<a aria-label="Privacy Policy" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#">Privacy</a>
<a aria-label="Terms of Service" className="text-sm font-normal text-slate-400 hover:text-white transition-colors duration-300" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 md:mt-24 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
<p className="text-xs font-medium text-slate-600 uppercase tracking-widest text-center md:text-left">© 2026 REFLECT STUDIO INC. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6 md:gap-8 text-slate-600">
<a aria-label="Follow us on Twitter" href="#"><iconify-icon className="hover:text-white transition-colors duration-300 cursor-pointer text-lg" icon="simple-icons:twitter"></iconify-icon></a>
<a aria-label="Follow us on Instagram" href="#"><iconify-icon className="hover:text-white transition-colors duration-300 cursor-pointer text-lg" icon="simple-icons:instagram"></iconify-icon></a>
<a aria-label="Follow us on Dribbble" href="#"><iconify-icon className="hover:text-white transition-colors duration-300 cursor-pointer text-lg" icon="simple-icons:dribbble"></iconify-icon></a>
</div>
</div>
</footer>
</div>


    </>
  );
}
