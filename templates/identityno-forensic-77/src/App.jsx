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



      lucide.createIcons();
    


      import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

      const canvas = document.getElementById('ghost-globe');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 45;
      // Aligning sphere off-center logically based on screen width
      camera.position.x = window.innerWidth > 1024 ? -18 : 0;

      // High resolution geometry to act as the map base
      const geometry = new THREE.IcosahedronGeometry(22, 5);

      // Custom Shader to handle proximity revealing mechanics (Interactive Visibility)
      const uniforms = {
          mousePos: { value: new THREE.Vector3(9999, 9999, 9999) },
          baseColor: { value: new THREE.Color(0xE5E7EB) },
          revealColor: { value: new THREE.Color(0x000000) }
      };

      const mapShaderMaterial = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
              varying vec3 vWorldPosition;
              void main() {
                  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                  vWorldPosition = worldPosition.xyz;
                  gl_Position = projectionMatrix * viewMatrix * worldPosition;
                  gl_PointSize = 1.0; // 1px dots
              }
          `,
          fragmentShader: `
              uniform vec3 mousePos;
              uniform vec3 baseColor;
              uniform vec3 revealColor;
              varying vec3 vWorldPosition;

              void main() {
                  float dist = distance(vWorldPosition, mousePos);
                  float radius = 10.0;

                  // Creates a smooth gradient for the reveal
                  float intensity = 1.0 - smoothstep(0.0, radius, dist);

                  vec3 finalColor = mix(baseColor, revealColor, intensity);

                  // 5% opaque globally, scaling up to 20% near cursor
                  float alpha = mix(0.05, 0.20, intensity);

                  gl_FragColor = vec4(finalColor, alpha);
              }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.NormalBlending
      });

      // Building the Ghost Map components
      const edges = new THREE.EdgesGeometry(geometry);
      const ghostLines = new THREE.LineSegments(edges, mapShaderMaterial);
      const ghostNodes = new THREE.Points(geometry, mapShaderMaterial);

      const globeGroup = new THREE.Group();
      globeGroup.add(ghostLines);
      globeGroup.add(ghostNodes);

      // Initial stylistic tilt
      globeGroup.rotation.y = Math.PI * 0.25;
      globeGroup.rotation.x = Math.PI * 0.1;

      scene.add(globeGroup);

      // Interactive Tracking Setup
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2(-9999, -9999);
      const projectionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const targetIntersect = new THREE.Vector3();

      window.addEventListener('mousemove', (event) => {
          mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          raycaster.ray.intersectPlane(projectionPlane, targetIntersect);
          uniforms.mousePos.value.copy(targetIntersect);
      });

      window.addEventListener('mouseout', () => {
          uniforms.mousePos.value.set(9999, 9999, 9999); // Reset visibility
      });

      function animate() {
          requestAnimationFrame(animate);
          // Cinematic Y-axis slow rotation
          globeGroup.rotation.y += 0.0004;
          renderer.render(scene, camera);
      }
      animate();

      window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.position.x = window.innerWidth > 1024 ? -18 : 0;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
      });
    


      setTimeout(() => {
          if(window.lucide) window.lucide.createIcons();
      }, 100);

      const cx = document.getElementById('crosshair-x');
      const cy = document.getElementById('crosshair-y');
      window.addEventListener('mousemove', (e) => {
          if (cx && cy) {
              cx.style.transform = `translateY(${e.clientY}px)`;
              cy.style.transform = `translateX(${e.clientX}px)`;
          }
      });

      const chars = 'ABCDEF0123456789';
      document.querySelectorAll('.font-mono').forEach(el => {
          if(el.children.length > 0) return;
          if(!el.dataset.original && el.innerText.trim().length > 0) {
              el.dataset.original = el.innerText.trim();
              el.addEventListener('mouseenter', () => {
                  const original = el.dataset.original;
                  let iterations = 0;
                  const totalDuration = 150;
                  const intervalTime = 30;
                  const steps = totalDuration / intervalTime;
                  const increment = original.length / steps;

                  clearInterval(el.scrambleInterval);
                  el.scrambleInterval = setInterval(() => {
                      el.innerText = original.split('').map((char, index) => {
                          if(index < iterations) return original[index];
                          return chars[Math.floor(Math.random() * chars.length)];
                      }).join('');
                      if(iterations >= original.length) {
                          clearInterval(el.scrambleInterval);
                          el.innerText = original;
                      }
                      iterations += increment;
                  }, intervalTime);
              });
          }
      });

      setTimeout(() => {
          const ctx = document.getElementById('vectorMapCanvas');
          if (ctx && window.Chart) {
              const userProfileData = {
                  leadership: 88,
                  technical: 95,
                  strategic: 82,
                  market: 90
              };
              new Chart(ctx, {
                  type: 'radar',
                  data: {
                      labels: ['LEADERSHIP', 'TECHNICAL', 'STRATEGIC', 'AGILITY'],
                      datasets: [{
                          label: 'Semantic Vector',
                          data: [userProfileData.leadership, userProfileData.technical, userProfileData.strategic, userProfileData.market],
                          backgroundColor: 'rgba(45, 212, 191, 0.2)',
                          borderColor: 'rgba(45, 212, 191, 1)',
                          borderWidth: 1.5,
                          pointBackgroundColor: 'rgba(45, 212, 191, 1)',
                          pointBorderColor: '#fff',
                          pointHoverBackgroundColor: '#fff',
                          pointHoverBorderColor: 'rgba(45, 212, 191, 1)'
                      }]
                  },
                  options: {
                      scales: {
                          r: {
                              angleLines: { color: 'rgba(100, 116, 139, 0.2)' },
                              grid: { color: 'rgba(100, 116, 139, 0.2)' },
                              pointLabels: {
                                  font: { family: 'JetBrains Mono', size: 11 },
                                  color: '#64748b'
                              },
                              ticks: { display: false, min: 0, max: 100 }
                          }
                      },
                      plugins: {
                          legend: { display: false }
                      }
                  }
              });
          }
      }, 500);
    
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
      
<div className="fixed top-0 left-0 w-full h-[1px] bg-[#2DD4BF]/30 pointer-events-none z-50" id="crosshair-x"></div>
<div className="fixed top-0 left-0 h-full w-[1px] bg-[#2DD4BF]/30 pointer-events-none z-50" id="crosshair-y"></div>

<canvas className="fixed inset-0 z-0 pointer-events-none" height="886" id="ghost-globe" style={{width: '1438px', height: '886px'}} width="1438"></canvas>

<main className="z-10 container sm:px-8 flex flex-col gap-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4 relative gap-x-8 gap-y-8">

<header className="bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-grow">

<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Node_ID:
              <span className="font-mono text-black !text-[#2DD4BF] transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] cursor-default" data-original="0X77AF">
                0x77AF
              </span>
</span>
<p className="text-base sm:text-lg font-light leading-relaxed">
              Identity Verified. Your forensic signature is active.
            </p>
</div>

<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Uplink:
              <span className="font-mono text-black !text-[#2DD4BF] transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] cursor-default" data-original="ACTIVE">
                ACTIVE
              </span>
</span>
<p className="text-base sm:text-lg font-light leading-relaxed">
              Connection Stable. Your node is currently broadcasting.
            </p>
</div>

<div className="flex flex-col gap-2">
<span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              Strength:
              <span className="font-mono text-black !text-[#2DD4BF] transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] cursor-default" data-original="98.4%">
                98.4%
              </span>
</span>
<p className="text-base sm:text-lg font-light leading-relaxed">
              Optimal Fidelity. Reaching maximum network depth.
            </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0 w-full lg:w-auto pt-6 lg:pt-0">
<button className="w-full sm:w-auto font-mono text-xs uppercase tracking-widest rounded-xl px-6 py-3 text-gray-600 hover:text-[#2DD4BF] bg-[#F0F5F9] shadow-[6px_6px_12px_#c8d0d8,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#c8d0d8,inset_-4px_-4px_8px_#ffffff] transition-all duration-200">
            [ CALIBRATE_SIGNAL ]
          </button>

<label className="flex items-center cursor-pointer group shrink-0">
<div className="relative flex items-center">
<input className="sr-only peer" type="checkbox"/>
<div className="block w-12 h-6 rounded-full bg-[#F0F5F9] shadow-[inset_4px_4px_8px_#c8d0d8,inset_-4px_-4px_8px_#ffffff] transition-colors duration-200 peer-checked:shadow-[inset_4px_4px_8px_#c8d0d8,inset_-4px_-4px_8px_#ffffff]">
<div className="absolute left-[2px] top-[2px] w-5 h-5 rounded-full bg-[#F0F5F9] shadow-[2px_2px_4px_#c8d0d8,-2px_-2px_4px_#ffffff] peer-checked:bg-[#2DD4BF] peer-checked:shadow-[0_0_8px_#2DD4BF] peer-checked:translate-x-[24px] transition-all duration-200"></div>
</div>
</div>
<span className="ml-3 font-mono text-xs uppercase tracking-widest group-hover:text-[#2DD4BF] transition-colors">
              [ UI_CALIBRATION ]
            </span>
</label>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8">

<section className="lg:col-span-8 bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8 flex flex-col min-h-[500px]">
<div className="flex flex-col mb-12 pb-4">
<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl sm:text-3xl font-light tracking-tight uppercase">
                Professional Liquidation
              </h2>
<i className="w-6 h-6 text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="network" strokeWidth="1.5"></i>
</div>
<p className="text-base font-light text-gray-600">
              We liquidate your history into machine-readable DNA. This is the
              mathematical language of elite hiring.
            </p>
</div>
<div className="flex flex-col flex-grow justify-center">


<div className="relative w-full max-w-sm lg:max-w-md mx-auto aspect-square mb-8">
<canvas id="vectorMapCanvas"></canvas>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
<div className="flex flex-col p-5 rounded-2xl bg-[#F0F5F9] shadow-[inset_5px_5px_10px_#c8d0d8,inset_-5px_-5px_10px_#ffffff]">
<span className="font-mono text-xs text-gray-500 mb-1 tracking-widest">
                  VECTOR_A
                </span>
<span className="font-mono text-sm text-black transition-colors duration-200 hover:text-[#2DD4BF] cursor-default mb-2" data-original="LEADERSHIP_DENSITY">
                  LEADERSHIP_DENSITY
                </span>
<p className="text-base font-light text-gray-500">
                  Agent interpretation of command and scaling.
                </p>
</div>
<div className="flex flex-col p-5 rounded-2xl bg-[#F0F5F9] shadow-[inset_5px_5px_10px_#c8d0d8,inset_-5px_-5px_10px_#ffffff]">
<span className="font-mono text-xs text-gray-500 mb-1 tracking-widest">
                  VECTOR_B
                </span>
<span className="font-mono text-sm text-black transition-colors duration-200 hover:text-[#2DD4BF] cursor-default mb-2" data-original="TECHNICAL_FIDELITY">
                  TECHNICAL_FIDELITY
                </span>
<p className="text-base font-light text-gray-500">
                  Mathematical depth of hard-skill verification.
                </p>
</div>
<div className="flex flex-col p-5 rounded-2xl bg-[#F0F5F9] shadow-[inset_5px_5px_10px_#c8d0d8,inset_-5px_-5px_10px_#ffffff]">
<span className="font-mono text-xs text-gray-500 mb-1 tracking-widest">
                  VECTOR_C
                </span>
<span className="font-mono text-sm text-black transition-colors duration-200 hover:text-[#2DD4BF] cursor-default mb-2" data-original="STRATEGIC_INTENT">
                  STRATEGIC_INTENT
                </span>
<p className="text-base font-light text-gray-500">
                  Alignment with business logic and outcomes.
                </p>
</div>
<div className="flex flex-col p-5 rounded-2xl bg-[#F0F5F9] shadow-[inset_5px_5px_10px_#c8d0d8,inset_-5px_-5px_10px_#ffffff]">
<span className="font-mono text-xs text-gray-500 mb-1 tracking-widest">
                  VECTOR_D
                </span>
<span className="font-mono text-sm text-black transition-colors duration-200 hover:text-[#2DD4BF] cursor-default mb-2" data-original="MARKET_AGILITY">
                  MARKET_AGILITY
                </span>
<p className="text-base font-light text-gray-500">
                  Signal adaptability to shifting agent requirements.
                </p>
</div>
</div>
</div>
</section>

<div className="lg:col-span-4 flex flex-col gap-8">

<section className="bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8 flex-grow">
<div className="flex justify-between items-center mb-8 pb-4">
<h3 className="text-xl font-light tracking-tight uppercase">
                Live Handshake Feed
              </h3>
<i className="text-[#2DD4BF] shrink-0 font-medium group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="radio" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-6 font-mono text-xs">
<div className="flex gap-4 items-start group cursor-default">
<span className="text-[#2DD4BF] shrink-0 font-medium group-hover:animate-pulse drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]">
                  [+] [14:02]
                </span>
<div className="flex flex-col gap-1">
<span className="font-medium group-hover:text-[#2DD4BF] transition-colors duration-200">
                    // AGENT_PING: LONDON
                  </span>
<span className="text-gray-500 font-sans text-base font-light">
                    Detection confirmed.
                  </span>
</div>
</div>
<div className="flex gap-4 items-start group cursor-default">
<span className="text-[#2DD4BF] shrink-0 font-medium group-hover:animate-pulse">
                  [+] [15:10]
                </span>
<div className="flex flex-col gap-1">
<span className="font-medium group-hover:text-[#2DD4BF] transition-colors duration-200">
                    // VECTOR_MATCH: ELITE
                  </span>
<span className="text-gray-500 font-sans text-base font-light">
                    Strategic alignment found.
                  </span>
</div>
</div>
</div>
</section>

<section className="bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8 shrink-0">
<div className="flex justify-between items-center mb-8 pb-4">
<h3 className="text-xl font-light tracking-tight uppercase">
                Immutable Audit
              </h3>
<i className="w-5 h-5 text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-5">
<p className="text-sm font-light text-gray-500 mb-2 font-sans">
                Your career is version-controlled. This is the untamperable
                proof of your evolution.
              </p>
<div className="flex justify-between items-end pb-2 mb-2 shadow-[inset_0_-2px_2px_-2px_#c8d0d8]">
<span className="font-sans text-xs uppercase tracking-widest text-gray-400">
                  Active_Vector
                </span>
<span className="font-mono text-black !text-[#2DD4BF] transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] cursor-default" data-original="v4.2">
                  v4.2
                </span>
</div>
<div className="flex justify-between items-end pb-2 mb-2 shadow-[inset_0_-2px_2px_-2px_#c8d0d8]">
<span className="font-sans text-xs uppercase tracking-widest text-gray-400">
                  Signal_V_Hash
                </span>
<span className="font-mono text-black !text-[#2DD4BF] transition-colors duration-200 drop-shadow-[0_0_8px_rgba(45,212,191,0.6)] cursor-default" data-original="0x77AF">
                  0x77AF
                </span>
</div>
<button className="mt-4 w-full bg-[#F0F5F9] text-gray-600 rounded-xl py-3 font-mono text-xs uppercase tracking-widest hover:text-[#2DD4BF] shadow-[6px_6px_12px_#c8d0d8,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#c8d0d8,inset_-4px_-4px_8px_#ffffff] transition-all duration-200 flex justify-center items-center gap-2 group">
                [ VIEW_FULL_AUDIT ]
                <i className="w-4 h-4 group-hover:text-[#2DD4BF] transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>
</div>

<section className="lg:col-span-6 bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8 flex flex-col justify-between">
<div className="">
<div className="flex justify-between items-center mb-8 pb-4">
<h3 className="text-xl font-light tracking-tight uppercase">
                The Market Void
              </h3>
<i className="w-5 h-5 text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="triangle-alert" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-4 mb-6">
<span className="font-mono text-sm text-gray-500 tracking-widest">
                LEGACY_DEFICIT // AGENT_BYPASS
              </span>
<h4 className="text-lg font-medium">Why Static Documents Fail.</h4>
<p className="text-base font-light text-gray-600">
                Traditional resumes are invisible to autonomous agents. You need
                a detectable signal that bypasses filters.
              </p>
</div>
</div>
<div className="flex flex-col gap-2 font-mono text-xs pt-4 shadow-[inset_0_2px_2px_-2px_#c8d0d8]">
<div className="flex justify-between items-center">
<span className="text-gray-500">RECRUITMENT_STATIC:</span>
<span className="text-black">92%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-gray-500">AGENT_FILTER:</span>
<span className="text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]">
                BYPASS
              </span>
</div>
</div>
</section>

<section className="lg:col-span-6 sm:p-8 flex flex-col bg-[#F0F5F9] rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] justify-between">
<div className="">
<div className="flex justify-between items-center mb-8 pb-4">
<h3 className="text-xl font-light tracking-tight uppercase">
                Handshake Initiation
              </h3>
<i className="w-5 h-5 text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="radio-tower" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-2 mb-8">
<span className="font-mono text-sm text-gray-500 tracking-widest">
                INITIATE_HANDSHAKE_PROTOCOL // ELITE_NODE_DEPLOYMENT
              </span>
<p className="text-base font-light text-gray-600 mt-2">
                Sovereignty is an investment. Choose your signal depth.
              </p>
</div>
</div>
<div className="flex flex-col gap-4">
<button className="relative overflow-hidden uppercase hover:text-gray-900 active:shadow-[inset_4px_4px_8px_#c8d0d8,inset_-4px_-4px_8px_#ffffff] transition-all duration-200 text-sm text-gray-800 tracking-widest font-mono bg-amber-400 w-full rounded-xl pt-4 pb-4 shadow-[6px_6px_12px_#c8d0d8,-6px_-6px_12px_#ffffff]" onclick="const bar = this.querySelector('.progress-bar'); const text = this.querySelector('.btn-text'); text.innerText = '[ SCANNING IDENTITY... ]'; bar.style.width = '100%'; setTimeout(() =&gt; { text.innerText = '[ INITIATE_MINI_UPLINK ]'; bar.style.width = '0%'; bar.style.transition = 'none'; setTimeout(() =&gt; bar.style.transition = 'width 2s linear', 50); }, 2000)">
<div className="progress-bar absolute left-0 top-0 h-full bg-white/40 w-0 transition-[width] duration-[2000ms] ease-linear"></div>
<span className="btn-text relative z-10">
                [ INITIATE_MINI_UPLINK ]
              </span>
</button>
<button className="relative overflow-hidden uppercase transition-all duration-200 text-sm text-slate-50 tracking-widest font-mono bg-green-950 w-full rounded-xl pt-4 pb-4 shadow-[inset_6px_6px_12px_#c8d0d8,inset_-6px_-6px_12px_#ffffff]" onclick="const bar = this.querySelector('.progress-bar'); const text = this.querySelector('.btn-text'); text.innerText = '[ SCANNING IDENTITY... ]'; bar.style.width = '100%'; setTimeout(() =&gt; { text.innerText = '[ ACTIVATE_ELITE_HANDSHAKE ]'; bar.style.width = '0%'; bar.style.transition = 'none'; setTimeout(() =&gt; bar.style.transition = 'width 2s linear', 50); }, 2000)">
<div className="progress-bar absolute left-0 top-0 h-full bg-[#2DD4BF]/40 w-0 transition-[width] duration-[2000ms] ease-linear"></div>
<span className="btn-text relative z-10">
                [ ACTIVATE_ELITE_HANDSHAKE ]
              </span>
</button>
</div>
</section>
<section className="lg:col-span-12 bg-[#F0F5F9] rounded-3xl shadow-[10px_10px_20px_#c8d0d8,-10px_-10px_20px_#ffffff] p-6 sm:p-8">
<div className="flex mb-8 pb-4 items-center justify-between">
<h3 className="text-xl font-light tracking-tight uppercase">
              The Signal Path
            </h3>
<i className="w-5 h-5 text-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.6)]" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<p className="text-base font-light text-gray-600 mb-8">
            Your identity moves from raw experience to an immutable,
            cryptographically sealed broadcast.
          </p>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-xs">
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                01_
              </span>
              LEGACY_CONTEXT
            </div>
<div className="hidden md:block flex-grow h-px bg-gray-300 mx-2"></div>
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                02_
              </span>
              VECTORS_CAPTURED
            </div>
<div className="hidden md:block flex-grow h-px bg-gray-300 mx-2"></div>
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                03_
              </span>
              EVIDENCE_LINKED
            </div>
<div className="hidden md:block flex-grow h-px bg-gray-300 mx-2"></div>
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                04_
              </span>
              SIGNALS_STRUCTURED
            </div>
<div className="hidden md:block flex-grow h-px bg-gray-300 mx-2"></div>
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                05_
              </span>
              BROADCAST_PRODUCED
            </div>
<div className="hidden md:block flex-grow h-px bg-gray-300 mx-2"></div>
<div className="flex items-center gap-2 group">
<span className="text-gray-400 group-hover:text-[#2DD4BF] transition-colors">
                06_
              </span>
              HASHED_&amp;_PRESERVED
            </div>
</div>
</section>
</div>

<footer className="pt-6 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-gray-500">
<div className="flex flex-wrap gap-4 sm:gap-8">
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
            SYSTEM_ROOT: ENABLED
          </span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-black"></span>
            ENCRYPTED_SESSION: ON
          </span>
<span className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] drop-shadow-[0_0_8px_rgba(45,212,191,0.8)]"></span>
            v8.1
          </span>
</div>
<div className="font-sans font-light text-gray-400">
          IdentityNode Protocol. All professional handshakes are secured.
        </div>
</footer>
</main>





    </>
  );
}
