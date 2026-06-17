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


!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();


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
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
              trigger: '.parallax-container',
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
          }
      });

      // --- WebGL Column Split Logic (Adapted for Tech aesthetic) ---

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

      // Darker, more contrasty fragment shader for dark mode
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

              // Enhance contrast for dark mode
              vec3 enhancedColor = mix(color.rgb, color.rgb * color.rgb * 1.5, 0.3);

              float gray = dot(enhancedColor, vec3(0.299, 0.587, 0.114));
              // Add slight blue/cyan tint to grayscale for tech feel
              vec3 techGray = vec3(gray * 0.9, gray * 0.95, gray * 1.0);

              gl_FragColor = vec4(mix(enhancedColor, techGray, uGrayscale), color.a);
          }
      `;

      const measures = document.querySelectorAll('.webgl-measure');
      const items = [];
      const textureLoader = new THREE.TextureLoader();
      // More columns for a "data slice" effect
      const columnsCount = 8;
      const baseGeometry = new THREE.PlaneGeometry(1, 1);

      measures.forEach(measure => {
          const img = measure.querySelector('.webgl-img');
          const hasGrayscale = measure.hasAttribute('data-grayscale');
          const group = new THREE.Group();
          const meshes = [];

          // Start fully grayscale, reveal color on hover
          let targetGrayscale = hasGrayscale ? 1.0 : 0.8;
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
              // Position each column with a tiny gap for a digital artifact look
              mesh.position.x = (i / columnsCount) - 0.5 + (1 / (columnsCount * 2));
              // scale slightly less than 1/columnsCount to create gap
              mesh.scale.set((1 / columnsCount) * 0.98, 1, 1);

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

          // Randomize stagger per item for digital noise feel
          const staggers = Array.from({length: columnsCount}, () => (Math.random() * 0.5) + 0.1);

          items.push({ measure, group, meshes, hasGrayscale, staggers, get target() { return targetGrayscale; }, set current(v) { currentGrayscale = v; }, get current() { return currentGrayscale; } });
      });

      let scrollY = window.scrollY;
      let smoothScroll = scrollY;

      function render() {
          scrollY = window.scrollY;
          smoothScroll += (scrollY - smoothScroll) * 0.08;

          let velocity = scrollY - smoothScroll;
          velocity = Math.max(Math.min(velocity, 400), -400);

          items.forEach(item => {
              const rect = item.measure.getBoundingClientRect();

              item.group.position.x = rect.left - window.innerWidth / 2 + rect.width / 2;
              item.group.position.y = -rect.top + window.innerHeight / 2 - rect.height / 2;
              item.group.scale.set(rect.width, rect.height, 1);

              if (item.hasGrayscale) {
                  item.current += (item.target - item.current) * 0.1;
              }

              item.meshes.forEach((mesh, i) => {
                  // Digital glitchy offset based on velocity
                  const floatY = -velocity * item.staggers[i] * 0.5;
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute saturate-150 opacity-60" data-alpha-mask="78" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 78%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 78%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="gYGCraBekUyqZWu3BIB5"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full">
<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between border-x border-neutral-900/50">
<div className="h-full border-r border-neutral-900/50 w-1/3 hidden md:block"></div>
<div className="h-full border-r border-neutral-900/50 w-1/3 hidden md:block"></div>
</div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<header className="py-6 flex justify-between items-start border-b border-neutral-900">
<nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">
            Capabilities
          </a>
<a className="hover:text-white transition-colors" href="#">
            Infrastructure
          </a>
<a className="hover:text-white transition-colors" href="#">Models</a>
<a className="hover:text-white transition-colors" href="#">
            Case Studies
          </a>
<a className="hover:text-white transition-colors" href="#">Insights</a>
</nav>
<div className="hidden sm:block text-neutral-500">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</header>

<section className="pt-16 pb-12 md:pt-24 md:pb-16 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight font-light w-full md:w-3/4">
            Applied
            <br/>
<span className="text-neutral-600">Artificial</span>
<span className="hidden md:inline-block w-24 h-[1px] bg-neutral-600 align-middle mb-4"></span>
            Intelligence
          </h1>
<div className="mt-8 md:mt-0 md:w-1/4 flex flex-col items-start md:items-end text-left md:text-right">
<a className="inline-block border-b border-neutral-700 pb-1 mb-6 text-sm text-neutral-400 hover:text-white hover:border-white transition-all" href="#contact">
              Initiate Protocol
            </a>
<div className="relative w-40 h-32 md:w-48 md:h-40 group cursor-pointer webgl-measure" data-grayscale="true">
<div className="absolute inset-0 w-full h-full bg-transparent border border-neutral-900 overflow-hidden rounded-sm">
<img alt="Abstract data structure" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15744b7b-0584-43ff-8046-718b9c8a5417_800w.webp"/>
</div>
<div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-md text-white p-1 rounded-sm flex items-center justify-center z-10 border border-neutral-800">
<iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<p className="text-sm mt-4 text-neutral-500 text-left">
              Bringing enterprise-grade machine learning architectures to small
              and medium businesses with minimal friction, transforming
              operational paradigms.
            </p>
</div>
</div>
<div className="flex justify-between items-center py-4 border-y border-neutral-900 text-xs tracking-widest text-neutral-600 uppercase">
<span>Enterprise AI for SMBs</span>
<span className="hidden sm:block">Los Angeles</span>
<span>Version 2.4</span>
</div>

<div className="webgl-measure mt-4 w-full h-[400px] md:h-[600px] lg:h-[700px] relative rounded-sm border border-neutral-900">
<div className="absolute inset-0 w-full h-full bg-transparent overflow-hidden rounded-sm">
<img alt="Server infrastructure" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/755a52a7-b145-4d42-b458-3a7940f567cf_1600w.webp"/>
</div>
</div>
<div className="flex justify-between items-center py-4 text-sm text-neutral-500">
<span>Featured Deployment</span>
<a className="hover:text-white flex items-center gap-2 transition-colors" href="#">
            View Architecture
            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-12 border-t border-neutral-900 overflow-hidden">
<p className="text-xs text-neutral-600 uppercase tracking-widest mb-8 text-center md:text-left">
          Integrated ecosystem partners
        </p>
<div className="w-full relative">
<div className="marquee-track flex gap-16 md:gap-32 items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
<iconify-icon className="text-4xl" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:anthropic"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:amazonwebservices"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:googlecloud"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:meta"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:nvidia"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:anthropic"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:amazonwebservices"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:googlecloud"></iconify-icon>
<iconify-icon className="text-4xl" icon="simple-icons:meta"></iconify-icon>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h2 className="reveal-text text-3xl sm:text-4xl md:text-5xl tracking-tight font-light leading-tight pr-0 md:pr-12">
              At Gobiya, we engineer enterprise-grade autonomous systems
              tailored for small and medium businesses, bringing Fortune 500
              computational power to your operations.
            </h2>
<div className="mt-12">
<a className="text-sm text-neutral-400 border-b border-neutral-700 pb-1 hover:text-white hover:border-white transition-all" href="#">
                About the Consultancy
              </a>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-between">
<p className="text-base text-neutral-500 mb-8 md:mb-0 font-light">
              We democratize advanced machine learning by fusing enterprise data
              governance with accessible deployment strategies. From predictive
              modeling to tailored LLMs, we give growing businesses the
              technological edge of industry giants.
            </p>

<div className="webgl-measure relative w-full h-48 mt-auto group cursor-pointer border border-neutral-900 rounded-sm">
<div className="absolute inset-0 w-full h-full bg-transparent overflow-hidden rounded-sm">
<img alt="Processor detail" className="webgl-img w-full h-full object-cover opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1c6740-1f50-4f43-bbb0-8bfb2f9620bd_800w.webp"/>
</div>
<div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md text-white p-2 rounded-sm group-hover:bg-white group-hover:text-black transition-colors flex items-center justify-center z-10 border border-neutral-800">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
<div>
<span className="text-xs uppercase tracking-widest text-neutral-600 block mb-6">
              Capabilities
            </span>
<h2 className="text-4xl md:text-5xl tracking-tight font-light">
              Enterprise Precision
              <br/>
              At Accessible Scale
            </h2>
</div>
<a className="mt-6 md:mt-0 text-sm text-neutral-400 border-b border-neutral-700 pb-1 hover:text-white hover:border-white transition-all" href="#">
            View All Modules
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-950 p-8 md:p-10 flex flex-col h-full border border-neutral-900 hover:border-neutral-700 transition-colors rounded-sm">
<div className="flex justify-between items-start mb-12">
<span className="text-sm font-light text-neutral-600">01</span>
<iconify-icon className="text-2xl text-neutral-500" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-light mb-6 pr-8 leading-tight text-white">
              Predictive
              <br/>
              Modeling
              <br/>
              Systems
            </h3>
<div className="mt-auto">
<p className="text-sm text-neutral-500 mb-8 font-light">
                We construct enterprise-grade statistical frameworks tailored
                for your business, forecasting outcomes and driving growth with
                minimal latency.
              </p>
<div className="flex justify-start">
<button className="text-neutral-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-neutral-950 p-8 md:p-10 flex flex-col h-full border border-neutral-900 hover:border-neutral-700 transition-colors rounded-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-16 -translate-y-16"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="text-sm font-light text-neutral-600">02</span>
<iconify-icon className="text-2xl text-white" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-light mb-6 pr-8 leading-tight text-white relative z-10">
              Data
              <br/>
              Infrastructure
              <br/>
              Pipelines
            </h3>
<div className="mt-auto relative z-10">
<p className="text-sm text-neutral-500 mb-8 font-light">
                Architecting resilient, scalable data layers designed to give
                medium-sized teams the same real-time insights as large
                corporations.
              </p>
<div className="flex justify-start">
<button className="text-white flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-neutral-950 p-8 md:p-10 flex flex-col h-full border border-neutral-900 hover:border-neutral-700 transition-colors rounded-sm">
<div className="flex justify-between items-start mb-12">
<span className="text-sm font-light text-neutral-600">03</span>
<iconify-icon className="text-2xl text-neutral-500" icon="solar:branching-paths-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-light mb-6 pr-8 leading-tight text-white">
              Generative
              <br/>
              AI
              <br/>
              Integration
            </h3>
<div className="mt-auto">
<p className="text-sm text-neutral-500 mb-8 font-light">
                Deploying powerful large language models tailored to your
                business knowledge base, securing your competitive advantage.
              </p>
<div className="flex justify-start">
<button className="text-neutral-400 hover:text-white transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900">
<div className="mb-12 md:mb-16">
<span className="text-xs uppercase tracking-widest text-neutral-600">
            Client Telemetry
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight font-light mb-8 flex-grow text-neutral-300">
              "Gobiya brought enterprise-level AI to our mid-sized logistics
              firm, implementing an inference model that improved processing
              speed by 400% without the massive overhead."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-900 mt-auto">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-light">Elena Rostova</p>
<p className="text-xs text-neutral-600">CTO, Nexus Logistics</p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight font-light mb-8 flex-grow text-neutral-300">
              "The custom LLM deployment gave our growing team the same secure,
              immediate knowledge retrieval capabilities you'd expect at a
              Fortune 500 company."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-900 mt-auto">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-light">Marcus Lin</p>
<p className="text-xs text-neutral-600">
                  VP Engineering, Aura Systems
                </p>
</div>
</div>
</div>
<div className="flex flex-col h-full">
<p className="text-xl lg:text-2xl tracking-tight font-light mb-8 flex-grow text-neutral-300">
              "Enterprise power, SMB agility. Their architecture audits
              identified bottlenecks we missed, and their strategic integration
              fit our budget and timeline perfectly."
            </p>
<div className="flex items-center gap-4 pt-6 border-t border-neutral-900 mt-auto">
<img alt="Client" className="w-10 h-10 rounded-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-light">Sarah Jenkins</p>
<p className="text-xs text-neutral-600">
                  Founder, Meridian Finance
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-t border-neutral-900">
<div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center text-center overflow-hidden parallax-container rounded-sm">
<div className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full parallax-img bg-neutral-950">
<img alt="Abstract server structure" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39655e9d-3d58-47e3-8503-7e5affa878b0_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0"></div>
<div className="relative z-10 text-white px-4">
<span className="text-xs uppercase tracking-widest mb-4 block text-neutral-400">
              Execution Phase
            </span>
<h2 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-light leading-tight">
              Deploy Enterprise
              <br/>
              Advantage
            </h2>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900">
<div className="flex justify-end mb-8">
<span className="text-xs uppercase tracking-widest text-neutral-600">
            Performance Metrics
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="flex flex-col justify-between">
<p className="text-base text-neutral-400 mb-12 lg:pr-12 font-light">
              Every system we architect brings the power of large-corporation
              technology to small and medium businesses, establishing robust
              environments without the enterprise bloat.
            </p>

<div className="webgl-measure relative w-full h-64 md:h-80 mt-auto border border-neutral-900 rounded-sm">
<div className="absolute inset-0 w-full h-full bg-transparent overflow-hidden rounded-sm">
<img alt="Data center racks" className="webgl-img w-full h-full object-cover mt-auto opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/4d12e57a-d3c5-47be-99ba-fc1211f55cf8/1600w.png"/>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-12 text-white leading-tight">
              Intelligent Infrastructure,
              <br/>
              Engineered for SMBs
            </h2>
<div className="flex flex-col text-sm text-neutral-400 font-light">
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2">
<span>Production Models Deployed</span>
<span className="text-white">140+</span>
</div>
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2">
<span>Aggregate Data Processed</span>
<span className="text-white">50+ Petabytes</span>
</div>
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2">
<span>Average Inference Latency</span>
<span className="text-white">&lt; 20ms</span>
</div>
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2">
<span>Security Framework</span>
<span className="text-white">SOC 2 Type II Compliant</span>
</div>
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2">
<span>System Reliability</span>
<span className="text-white">99.999% Uptime</span>
</div>
<div className="flex justify-between py-4 border-t border-neutral-900 hover:bg-neutral-950/50 transition-colors px-2 border-b">
<span>Compute Cost Optimization</span>
<span className="text-white">35% Avg. Reduction</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900 flex flex-col items-start relative overflow-hidden">
<div className="flex justify-between w-full items-center mb-8 z-10">
<div className="flex gap-2">
<button className="bg-neutral-950 border border-neutral-800 text-white p-2 hover:bg-white hover:text-black transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="bg-neutral-950 border border-neutral-800 text-white p-2 hover:bg-white hover:text-black transition-colors rounded-sm flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<a className="text-sm text-neutral-400 border-b border-neutral-700 pb-1 hover:text-white hover:border-white transition-all" href="#">
            View Documentation
          </a>
</div>
<div className="flex justify-between items-end w-full z-10">
<h2 className="text-5xl md:text-7xl lg:text-9xl tracking-tight font-light leading-none">
            Initiate Your
            <br/>
            Transformation
          </h2>
<div className="text-neutral-800 hidden md:block z-10">
<iconify-icon className="text-8xl lg:text-9xl" icon="solar:cpu-linear" style={{strokeWidth: '1'}}></iconify-icon>
</div>
</div>

<div className="absolute right-0 bottom-0 opacity-20 pointer-events-none w-1/2 h-full z-0 flex items-end justify-end overflow-hidden">
<svg className="w-[800px] h-[800px] stroke-neutral-800 fill-none stroke-[0.1]" preserveaspectratio="none" viewbox="0 0 100 100">

<pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
<path d="M 10 0 L 0 0 0 10" fill="none"></path>
</pattern>
<rect fill="url(#grid)" height="100" width="100"></rect>

<path d="M 10 90 L 30 90 L 40 80 L 40 20 L 50 10 L 90 10"></path>
<circle cx="10" cy="90" fill="#333" r="1" stroke="none"></circle>
<circle cx="90" cy="10" fill="#333" r="1" stroke="none"></circle>
</svg>
</div>
</section>

<section className="py-16 md:py-24 border-t border-neutral-900" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-neutral-600 block mb-6">
              Communications
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light leading-tight mb-12 text-white">
              Configure your
              <br/>
              deployment scope.
            </h2>
<div className="flex flex-col gap-8 mt-auto text-sm">
<div>
<p className="text-xs uppercase tracking-widest text-neutral-600 mb-2">
                  Operations Center
                </p>
<p className="text-neutral-400 font-light leading-relaxed">
                  2048 Turing Blvd.
                  <br/>
                  Tech District
                  <br/>
                  Los Angeles, CA 90013
                </p>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-neutral-600 mb-2">
                  Direct Channel
                </p>
<a className="text-neutral-400 block hover:text-white transition-colors" href="mailto:hello@gobiya.ai">
                  hello@gobiya.ai
                </a>
</div>
</div>
</div>
<div className="bg-neutral-950 p-8 md:p-12 border border-neutral-900 rounded-sm flex flex-col justify-center">
<form className="flex flex-col gap-8">
<div className="relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors placeholder-neutral-600 font-light" id="name" placeholder="System Administrator (Name)" type="text"/>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors placeholder-neutral-600 font-light" id="email" placeholder="Authentication Identity (Email)" type="email"/>
</div>

<div className="relative group cursor-pointer">
<div className="w-full bg-transparent border-b border-neutral-800 py-3 flex items-center justify-between group-hover:border-neutral-500 transition-colors">
<span className="text-sm text-neutral-600 group-hover:text-neutral-400 transition-colors font-light">
                    Deployment Type
                  </span>
<div className="select-triangle text-neutral-600 group-hover:text-neutral-400 transition-colors"></div>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-neutral-500 transition-colors resize-none placeholder-neutral-600 font-light" id="message" placeholder="Parameters / Requirements" rows="3"></textarea>
</div>
<button className="mt-4 bg-white text-black py-3 px-6 text-sm font-medium hover:bg-neutral-200 transition-colors flex justify-between items-center w-full group rounded-sm" type="button">
                Transmit Request
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</div>

<footer className="bg-black text-neutral-400 pt-16 md:pt-24 pb-8 relative z-20 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div>
<h3 className="text-2xl md:text-3xl tracking-tight font-light mb-6 text-white">
              GOBIYA
            </h3>
<p className="text-sm text-neutral-500 max-w-xs font-light leading-relaxed">
              Architecting the intelligence layer for small and medium
              businesses, delivering enterprise-grade AI through accessible
              engineering.
            </p>
</div>
<div className="flex md:justify-end items-end opacity-[0.03] pointer-events-none select-none mt-12 md:mt-0 overflow-hidden">
<h3 className="text-8xl md:text-9xl leading-none tracking-tight font-light text-white">
              GOBIYA
            </h3>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900/50 text-xs text-neutral-600">
<nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-6 md:mb-0">
<a className="hover:text-white transition-colors" href="#">
              Terms of Protocol
            </a>
<a className="hover:text-white transition-colors" href="#">
              Privacy Infrastructure
            </a>
<a className="hover:text-white transition-colors" href="#">
              Security Audit
            </a>
</nav>
<p>© 2024 Gobiya Systems LLC. Los Angeles.</p>
</div>
</div>
</footer>



    </>
  );
}
