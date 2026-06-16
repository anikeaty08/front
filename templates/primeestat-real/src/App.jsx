import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function setupMobileMenu() {
        const openMenu = document.getElementById('openMenu');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const links = mobileMenu.querySelectorAll('a');

        openMenu.addEventListener('click', () => {
          mobileMenu.classList.remove('hidden');
          document.body.style.overflow = 'hidden';
        });

        function hideMenu() {
          mobileMenu.classList.add('hidden');
          document.body.style.overflow = '';
        }

        closeMenu.addEventListener('click', hideMenu);
        links.forEach(link => link.addEventListener('click', hideMenu));
      }

      function setupTextReveal() {
        const elements = document.querySelectorAll('.text-reveal');

        elements.forEach(el => {
          const childNodes = Array.from(el.childNodes);
          el.innerHTML = '';

          childNodes.forEach(node => {
            if (node.nodeType === 3) {
              const words = node.textContent.trim().split(/\s+/);
              if (words.length === 1 && words[0] === '') return;

              words.forEach(word => {
                const mask = document.createElement('span');
                mask.style.cssText = 'overflow: hidden; display: inline-flex; vertical-align: top; margin-right: 0.25em; padding-bottom: 0.1em; margin-bottom: -0.1em;';

                const inner = document.createElement('span');
                inner.className = 'word-inner';
                inner.style.cssText = 'display: inline-block; transform: translateY(110%); opacity: 0;';
                inner.textContent = word;

                mask.appendChild(inner);
                el.appendChild(mask);
              });
            } else if (node.nodeType === 1) {
              const mask = document.createElement('span');
              mask.style.cssText = 'overflow: hidden; display: inline-flex; vertical-align: middle; margin-right: 0.25em;';

              const inner = document.createElement('span');
              inner.className = 'word-inner block';
              inner.style.cssText = 'display: inline-block; transform: translateY(110%); opacity: 0;';
              inner.appendChild(node.cloneNode(true));

              mask.appendChild(inner);
              el.appendChild(mask);
            }
          });
        });
      }

      function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.text-reveal').forEach(container => {
          const words = container.querySelectorAll('.word-inner');
          gsap.to(words, {
            y: '0%',
            opacity: 1,
            duration: 1.2,
            ease: 'power4.out',
            stagger: 0.04,
            delay: 0.1,
            scrollTrigger: {
              trigger: container,
              start: 'top 90%'
            }
          });
        });

        gsap.fromTo('.bracket',
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)', delay: 0.5 }
        );

        gsap.fromTo('.reveal-card',
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: '#process',
              start: 'top 70%'
            }
          }
        );

        gsap.to('.hero-image', {
          scale: 1,
          duration: 1.4,
          ease: 'power3.out'
        });
      }

      function initWebGL() {
        const canvas = document.getElementById('webgl-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.BufferGeometry();
        const particlesCount = 420;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 20;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const material = new THREE.PointsMaterial({
          size: 0.015,
          color: 0xffffff,
          transparent: true,
          opacity: 0.3,
          blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);
        camera.position.z = 4;

        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', event => {
          mouseX = (event.clientX - window.innerWidth / 2) * 0.0003;
          mouseY = (event.clientY - window.innerHeight / 2) * 0.0003;
        });

        const clock = new THREE.Clock();

        function animate() {
          requestAnimationFrame(animate);
          const elapsedTime = clock.getElapsedTime();

          particlesMesh.rotation.y += 0.0005;
          particlesMesh.rotation.x += 0.0002;

          const positions = geometry.attributes.position.array;
          for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            positions[i3 + 1] += Math.sin(elapsedTime * 0.5 + x) * 0.0005;
          }

          geometry.attributes.position.needsUpdate = true;
          particlesMesh.rotation.y += 0.02 * (mouseX * 0.5 - particlesMesh.rotation.y);
          particlesMesh.rotation.x += 0.02 * (mouseY * 0.5 - particlesMesh.rotation.x);

          renderer.render(scene, camera);
        }

        animate();

        window.addEventListener('resize', () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        });
      }

      document.addEventListener('DOMContentLoaded', () => {
        setupMobileMenu();
        setupTextReveal();
        setTimeout(() => {
          initAnimations();
          initWebGL();
        }, 100);
      });
    


      (function(){
        function onReady(fn){
          if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
          else fn();
        }

        onReady(function(){
          var revealTargets = document.querySelectorAll('#process, #assets, #firm, #insights, #contact, footer, #assets article, #insights article, #firm aside');
          if('IntersectionObserver' in window){
            revealTargets.forEach(function(el, i){
              el.style.opacity = '0';
              el.style.transform = 'translateY(34px)';
              el.style.transition = 'opacity .9s cubic-bezier(.22,1,.36,1), transform .9s cubic-bezier(.22,1,.36,1)';
              el.style.transitionDelay = (Math.min(i % 3, 2) * 80) + 'ms';
            });

            var observer = new IntersectionObserver(function(entries){
              entries.forEach(function(entry){
                if(entry.isIntersecting){
                  entry.target.style.opacity = '1';
                  entry.target.style.transform = 'translateY(0)';
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

            revealTargets.forEach(function(el){ observer.observe(el); });
          }

          setTimeout(function(){
            var headingWords = document.querySelectorAll('h1.text-reveal .word-inner');
            if(window.gsap && headingWords.length){
              gsap.fromTo(headingWords,
                { filter: 'blur(10px)', rotateX: 16, transformOrigin: '50% 100%' },
                { filter: 'blur(0px)', rotateX: 0, duration: 1.15, stagger: 0.035, ease: 'power3.out', delay: 0.05 }
              );
            }
          }, 130);

          initIntroImageWebGL();
        });

        function initIntroImageWebGL(){
          var canvas = document.getElementById('intro-webgl-image');
          var img = document.querySelector('#start > div:first-of-type > img[alt="Modern estate architecture"]');
          if(!canvas || !img || !window.THREE) return;

          var parent = canvas.parentElement;
          var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

          var scene = new THREE.Scene();
          var camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
          var loader = new THREE.TextureLoader();
          loader.setCrossOrigin('anonymous');

          loader.load(img.currentSrc || img.src, function(texture){
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            var uniforms = {
              uTexture: { value: texture },
              uTime: { value: 0 },
              uMouse: { value: new THREE.Vector2(0.5, 0.5) },
              uIntro: { value: 0 },
              uResolution: { value: new THREE.Vector2(1, 1) },
              uImageResolution: { value: new THREE.Vector2(img.naturalWidth || 1600, img.naturalHeight || 900) }
            };

            var material = new THREE.ShaderMaterial({
              transparent: true,
              uniforms: uniforms,
              vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }',
              fragmentShader: 'precision highp float; uniform sampler2D uTexture; uniform float uTime; uniform float uIntro; uniform vec2 uMouse; uniform vec2 uResolution; uniform vec2 uImageResolution; varying vec2 vUv; vec2 coverUv(vec2 uv, vec2 screen, vec2 image){ float rs = screen.x / screen.y; float ri = image.x / image.y; vec2 s = vec2(1.0); if(rs > ri){ s.y = ri / rs; } else { s.x = rs / ri; } return (uv - 0.5) * s + 0.5; } void main(){ vec2 uv = coverUv(vUv, uResolution, uImageResolution); float d = distance(vUv, uMouse); float wave = sin((vUv.y + uTime * 0.13) * 18.0) * 0.012 + sin((vUv.x - uTime * 0.11) * 13.0) * 0.008; vec2 warp = vec2(wave * (1.0 - d), wave * 0.55); float intro = smoothstep(0.0, 1.0, uIntro); vec2 split = warp * (0.25 + 0.75 * (1.0 - intro)); vec4 base = texture2D(uTexture, uv + warp * intro); float r = texture2D(uTexture, uv + split).r; float b = texture2D(uTexture, uv - split).b; vec4 color = vec4(r, base.g, b, 1.0); float scan = smoothstep(-0.18, 0.72, vUv.y + (1.0 - intro) * 1.2); color.rgb = mix(color.rgb * 0.72, color.rgb, scan); color.rgb += (1.0 - intro) * 0.08; gl_FragColor = color; }'
            });

            scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

            function resize(){
              var rect = parent.getBoundingClientRect();
              renderer.setSize(rect.width, rect.height, false);
              uniforms.uResolution.value.set(rect.width, rect.height);
            }

            resize();
            window.addEventListener('resize', resize);

            parent.addEventListener('mousemove', function(event){
              var rect = parent.getBoundingClientRect();
              uniforms.uMouse.value.set((event.clientX - rect.left) / rect.width, 1 - ((event.clientY - rect.top) / rect.height));
            });

            if(window.gsap) gsap.to(uniforms.uIntro, { value: 1, duration: 1.8, ease: 'power3.out' });
            else uniforms.uIntro.value = 1;

            var clock = new THREE.Clock();
            function render(){
              uniforms.uTime.value = clock.getElapsedTime();
              renderer.render(scene, camera);
              requestAnimationFrame(render);
            }
            render();
          }, undefined, function(){
            canvas.style.display = 'none';
          });
        }
      })();
    


      (function(){
        function setupHoverOnlyIntroWebGL(){
          var canvas = document.getElementById('intro-webgl-image');
          if(!canvas || !canvas.parentElement) return;
          var parent = canvas.parentElement;
          canvas.style.opacity = '0';
          canvas.style.transition = 'opacity .45s ease';
          parent.addEventListener('mouseenter', function(){
            canvas.style.opacity = '1';
          });
          parent.addEventListener('mouseleave', function(){
            canvas.style.opacity = '0';
          });
        }

        if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupHoverOnlyIntroWebGL);
        else setupHoverOnlyIntroWebGL();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 pointer-events-none z-0 opacity-40" id="webgl-canvas"></canvas>
<div className="fixed inset-0 z-[70] hidden bg-[#1a1a1a]/95 backdrop-blur-xl" id="mobileMenu">
<div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
<div className="text-xl font-medium tracking-tight">Prime</div>
<button className="w-10 h-10 inline-flex items-center justify-center border border-white/10 text-white" id="closeMenu">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="px-6 py-10 flex flex-col gap-6">
<a className="text-3xl tracking-tight" href="#start" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Start
        </a>
<a className="text-3xl tracking-tight text-neutral-300" href="#process" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Process
        </a>
<a className="text-3xl tracking-tight text-neutral-300" href="#assets" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Assets
        </a>
<a className="text-3xl tracking-tight text-neutral-300" href="#firm" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Firm
        </a>
<a className="text-3xl tracking-tight text-neutral-300" href="#insights" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Insights
        </a>
<a className="mt-6 inline-flex items-center justify-center bg-[#eab308] text-[#1a1a1a] px-6 py-4 text-sm font-medium" href="#contact">
          Schedule call
        </a>
</div>
</div>
<div className="relative z-10 w-full max-w-[100rem] mx-auto border-x border-white/10 min-h-screen flex flex-col">
<nav className="flex items-center justify-between px-6 lg:px-10 py-5 border border-white/[0.05] bg-[#1a1a1a]/90 backdrop-blur-md sticky top-0 z-50">
<a className="text-xl font-medium tracking-tight" href="#start">Prime</a>
<ul className="hidden lg:flex gap-10 text-sm text-neutral-400 font-medium">
<li>
<a className="text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[0.125rem] after:bg-[#eab308]" href="#start">
              Start
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#process">
              Process
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#assets">
              Assets
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#firm">Firm</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#insights">
              Insights
            </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">
              Reach out
            </a>
</li>
</ul>
<a className="relative group p-[1px] overflow-hidden hidden sm:block" href="#contact">
<span className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent -z-10 transition-colors group-hover:from-white/60"></span>
<span className="block bg-[#f4f4f4] text-neutral-900 px-5 py-2 text-sm font-medium relative z-10 transition-colors group-hover:bg-white">
            Schedule call
          </span>
</a>
<button className="sm:hidden text-white w-10 h-10 inline-flex items-center justify-center border border-white/10" id="openMenu">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
<main className="flex-grow flex flex-col relative" id="start">
<div className="w-full h-[50vh] md:h-[60vh] relative border-b border-white/10 overflow-hidden">
<div className="bracket absolute w-2 h-2 border-white/30 z-20" style={{top: '-1px', left: '-1px', borderWidth: '1px 0 0 1px', borderStyle: 'solid'}}></div>
<div className="bracket absolute w-2 h-2 border-white/30 z-20" style={{top: '-1px', right: '-1px', borderWidth: '1px 1px 0 0', borderStyle: 'solid'}}></div>
<div className="absolute left-6 lg:left-10 top-6 z-20 hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.18rem] text-white/70" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span className="w-2 h-2 bg-[#eab308] rounded-full"></span>
            Curated private-market property access
          </div>
<img alt="Modern estate architecture" className="w-full h-full object-cover object-center grayscale-[15%] contrast-110 brightness-90 scale-105 hero-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99ba349f-6119-4d26-b759-12862567fbc0_3840w.webp"/>
<canvas aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" id="intro-webgl-image" style={{opacity: '0', transition: 'opacity .45s ease'}}></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-[#1a1a1a]/25"></div>
</div>
<section className="px-6 lg:px-10 pt-16 pb-24 lg:pb-32 relative z-20 flex-grow">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
<div className="lg:col-span-7 relative pt-4">
<div className="bracket absolute w-2 h-2 border-white/30 z-20" style={{top: '-1px', left: '-1px', borderWidth: '1px 0 0 1px', borderStyle: 'solid'}}></div>
<div className="bracket absolute w-2 h-2 border-white/30 z-20" style={{bottom: '-1px', left: '-1px', borderWidth: '0 0 1px 1px', borderStyle: 'solid'}}></div>
<div className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>PRM-01</span>
<span className="h-px w-10 bg-white/15"></span>
<span>Real estate advisory</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] mb-8 text-reveal" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Expand your portfolio
                <span className="inline-flex items-center align-middle mx-2 -mt-3">
<img alt="Residential asset" className="w-12 h-12 md:w-16 md:h-16 object-cover transform -rotate-3 shadow-lg border border-white/20 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/005600e5-f6ab-4e59-bc86-eaeb02797dfa_1600w.jpg"/>
<img alt="Commercial asset" className="w-12 h-12 md:w-16 md:h-16 object-cover transform rotate-6 -ml-3 shadow-md border border-neutral-300 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg"/>
</span>
                with prime real estate assets.
              </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 font-normal text-reveal leading-relaxed">
                At PrimeEstates, we facilitate your growth through carefully
                vetted properties, data-backed strategies, and end-to-end
                investment support.
              </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between max-w-2xl gap-8">
<form className="flex w-full sm:w-auto items-stretch relative group p-[1px] flex-grow max-w-[25rem]" onsubmit="event.preventDefault(); document.getElementById('formStatus').textContent='Request received — our advisory desk will follow up shortly.';">
<span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent -z-10 transition-opacity opacity-50 group-hover:opacity-100"></span>
<span className="bg-[#f4f4f4] flex w-full relative z-10">
<input className="bg-transparent text-neutral-900 px-5 py-4 w-full outline-none text-sm placeholder-neutral-500 font-medium" placeholder="Book a session" required="" type="email"/>
<button aria-label="Submit booking request" className="bg-[#eab308] text-white px-6 flex items-center justify-center hover:bg-yellow-600 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</span>
</form>
<div className="flex items-center gap-4 flex-shrink-0">
<div className="flex -space-x-3">
<img alt="Investor" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_320w.jpg"/>
<img alt="Investor" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef8b45e-c678-465f-8372-c36234710b39_320w.webp"/>
<img alt="Investor" className="w-10 h-10 rounded-full border-2 border-[#1a1a1a] object-cover grayscale-[30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bac6570-3bee-4c9c-a3a7-ad80b0766eb3_320w.jpg"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">
                      15k +
                    </span>
<span className="text-xs text-neutral-500 font-normal">
                      Active investors
                    </span>
</div>
</div>
</div>
<p className="mt-5 text-xs text-[#eab308]" id="formStatus" style={{fontFamily: '\'JetBrains Mono\', monospace'}}></p>
</div>
<div className="lg:col-span-5 relative mt-16 lg:mt-0 z-30">
<div className="lg:absolute lg:-top-56 lg:right-0 w-full relative p-[1px] group">
<span className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent -z-10"></span>
<div className="w-full h-full relative z-10 flex flex-col" style={{boxShadow: '0 30px 60px -15px rgba(0,0,0,0.6)'}}>
<div className="bracket absolute w-2 h-2 border-neutral-300 z-20" style={{top: '-1px', left: '-1px', borderWidth: '1px 0 0 1px', borderStyle: 'solid'}}></div>
<div className="bracket absolute w-2 h-2 border-neutral-300 z-20" style={{top: '-1px', right: '-1px', borderWidth: '1px 1px 0 0', borderStyle: 'solid'}}></div>
<div className="bracket absolute w-2 h-2 border-neutral-300 z-20" style={{bottom: '-1px', left: '-1px', borderWidth: '0 0 1px 1px', borderStyle: 'solid'}}></div>
<div className="bracket absolute w-2 h-2 border-neutral-300 z-20" style={{bottom: '-1px', right: '-1px', borderWidth: '0 1px 1px 0', borderStyle: 'solid'}}></div>
<div className="bg-white p-10 md:p-14 pb-6 md:pb-8 flex-1">
<div className="mb-6 opacity-20 text-neutral-800">
<iconify-icon height="48" icon="solar:quote-left-linear" width="48"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl leading-[1.2] tracking-tight font-medium text-neutral-800">
                      PrimeEstates transformed my approach to property.
                    </p>
</div>
<div className="bg-[#f4f4f4] p-10 md:p-14 pt-6 md:pt-8 flex-1 flex flex-col justify-between border-t border-neutral-100">
<p className="text-xl md:text-2xl leading-[1.3] tracking-tight font-medium text-neutral-600 mb-10">
                      The yields appeared quicker than anticipated, and their
                      advisors ensured total transparency throughout the
                      journey.
                    </p>
<div className="flex items-center justify-between border-t border-neutral-200 pt-6">
<div>
<div className="text-base font-medium tracking-tight text-neutral-900">
                          Sarah Jenkins
                        </div>
<div className="text-sm text-neutral-500 font-normal mt-0.5">
                          Seattle, WA
                        </div>
</div>
<img alt="Sarah Jenkins" className="w-12 h-12 rounded-full object-cover border border-neutral-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-white/10 grid grid-cols-2 lg:grid-cols-4">
<div className="p-6 lg:p-10 border-r border-b lg:border-b-0 border-white/10">
<div className="text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              $4.8B
            </div>
<p className="mt-3 text-xs uppercase tracking-[0.16rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              Assets reviewed
            </p>
</div>
<div className="p-6 lg:p-10 border-r-0 lg:border-r border-b lg:border-b-0 border-white/10">
<div className="text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              31
            </div>
<p className="mt-3 text-xs uppercase tracking-[0.16rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              Growth markets
            </p>
</div>
<div className="p-6 lg:p-10 border-r border-white/10">
<div className="text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              8.7%
            </div>
<p className="mt-3 text-xs uppercase tracking-[0.16rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              Target net yield
            </p>
</div>
<div className="p-6 lg:p-10">
<div className="text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              92%
            </div>
<p className="mt-3 text-xs uppercase tracking-[0.16rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              Repeat partners
            </p>
</div>
</section>
<section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-white/10" id="process">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
<div className="lg:col-span-4">
<div className="text-xs uppercase tracking-[0.18rem] text-[#eab308] mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Process
              </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                A disciplined path from sourcing to ownership.
              </h2>
</div>
<div className="lg:col-span-8 grid md:grid-cols-3 border border-white/10 bg-white/[0.02]">
<article className="p-8 border-b md:border-b-0 md:border-r border-white/10 reveal-card">
<div className="w-11 h-11 bg-[#eab308] text-[#1a1a1a] inline-flex items-center justify-center mb-8">
<iconify-icon height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</div>
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  01 / Source
                </div>
<h3 className="text-xl tracking-tight font-medium mb-3">
                  Private-market access
                </h3>
<p className="text-sm leading-6 text-neutral-400">
                  We screen off-market residential, hospitality, and mixed-use
                  opportunities before they reach broader channels.
                </p>
</article>
<article className="p-8 border-b md:border-b-0 md:border-r border-white/10 reveal-card">
<div className="w-11 h-11 bg-[#f4f4f4] text-[#1a1a1a] inline-flex items-center justify-center mb-8">
<iconify-icon height="22" icon="solar:chart-2-linear" width="22"></iconify-icon>
</div>
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  02 / Model
                </div>
<h3 className="text-xl tracking-tight font-medium mb-3">
                  Data-backed diligence
                </h3>
<p className="text-sm leading-6 text-neutral-400">
                  Each asset is evaluated across cash flow, rent growth,
                  liquidity, local policy, and exit sensitivity.
                </p>
</article>
<article className="p-8 reveal-card">
<div className="w-11 h-11 bg-[#1a1a1a] text-[#eab308] border border-white/10 inline-flex items-center justify-center mb-8">
<iconify-icon height="22" icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  03 / Manage
                </div>
<h3 className="text-xl tracking-tight font-medium mb-3">
                  Operator oversight
                </h3>
<p className="text-sm leading-6 text-neutral-400">
                  Our team coordinates legal, financing, reporting, and asset
                  management after acquisition.
                </p>
</article>
</div>
</div>
</section>
<section className="border-t border-white/10" id="assets">
<div className="grid lg:grid-cols-12">
<div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between min-h-[34rem] border-b lg:border-b-0 lg:border-r border-white/10">
<div>
<div className="text-xs uppercase tracking-[0.18rem] text-[#eab308] mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  Assets
                </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Selective exposure to properties with durable demand.
                </h2>
</div>
<p className="text-neutral-400 leading-7 max-w-md mt-10">
                PrimeEstates prioritizes locations with constrained supply,
                employment momentum, infrastructure investment, and resilient
                renter or buyer depth.
              </p>
</div>
<div className="lg:col-span-7 grid md:grid-cols-2">
<article className="group relative min-h-[28rem] overflow-hidden border-b md:border-r border-white/10">
<img alt="Urban residences" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-75 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="text-xs uppercase tracking-[0.16rem] text-[#eab308] mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    Urban residences
                  </div>
<h3 className="text-3xl tracking-tight mb-3" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    Core multifamily
                  </h3>
<p className="text-sm text-neutral-300 leading-6">
                    Stabilized communities in employment corridors with
                    disciplined expense controls.
                  </p>
</div>
</article>
<article className="group relative min-h-[28rem] overflow-hidden border-b border-white/10">
<img alt="Hospitality property" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-75 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-8">
<div className="text-xs uppercase tracking-[0.16rem] text-[#eab308] mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    Hospitality
                  </div>
<h3 className="text-3xl tracking-tight mb-3" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    Boutique stays
                  </h3>
<p className="text-sm text-neutral-300 leading-6">
                    Design-led assets in destination markets supported by
                    professional operators.
                  </p>
</div>
</article>
<article className="md:col-span-2 p-8 lg:p-10 bg-[#f4f4f4] text-neutral-900 grid md:grid-cols-3 gap-8 items-end">
<div className="md:col-span-2">
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                    Current focus
                  </div>
<h3 className="text-3xl md:text-5xl tracking-tight leading-[1.05]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    Austin, Charlotte, Nashville, Raleigh, Denver.
                  </h3>
</div>
<a className="inline-flex items-center justify-between gap-4 border border-neutral-300 px-5 py-4 text-sm font-medium hover:bg-white transition-colors" href="#contact">
                  Request pipeline
                  <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</article>
</div>
</div>
</section>
<section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-white/10" id="firm">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
<div className="lg:col-span-7">
<div className="relative p-[1px]">
<span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent -z-10"></span>
<div className="bg-[#1a1a1a] border border-white/10 p-8 lg:p-10">
<div className="grid sm:grid-cols-2 gap-8">
<div>
<div className="text-xs uppercase tracking-[0.16rem] text-[#eab308] mb-4" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Firm
                      </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                        Built for patient capital.
                      </h2>
</div>
<p className="text-neutral-400 leading-7">
                      We operate as a long-horizon advisory desk for investors
                      who value quality basis, transparent reporting, and
                      conservative underwriting over speculative volume.
                    </p>
</div>
<div className="grid sm:grid-cols-3 gap-4 mt-12">
<div className="border border-white/10 p-5 bg-white/[0.02]">
<iconify-icon className="text-[#eab308]" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
<p className="mt-6 text-sm text-neutral-300">
                        Quarterly investor reporting
                      </p>
</div>
<div className="border border-white/10 p-5 bg-white/[0.02]">
<iconify-icon className="text-[#eab308]" height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<p className="mt-6 text-sm text-neutral-300">
                        Operator and sponsor review
                      </p>
</div>
<div className="border border-white/10 p-5 bg-white/[0.02]">
<iconify-icon className="text-[#eab308]" height="24" icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
<p className="mt-6 text-sm text-neutral-300">
                        Secure deal room access
                      </p>
</div>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-5 bg-white text-neutral-900 p-8 lg:p-10">
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-8" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Investment memo
              </div>
<div className="space-y-6">
<div className="flex items-start justify-between gap-6 pb-6 border-b border-neutral-200">
<div>
<h3 className="font-medium tracking-tight">Risk posture</h3>
<p className="text-sm text-neutral-500 mt-2 leading-6">
                      Moderate leverage, reserve planning, diversified tenancy.
                    </p>
</div>
<span className="text-[#eab308] font-medium">A-</span>
</div>
<div className="flex items-start justify-between gap-6 pb-6 border-b border-neutral-200">
<div>
<h3 className="font-medium tracking-tight">Hold period</h3>
<p className="text-sm text-neutral-500 mt-2 leading-6">
                      Typical target horizon across recommended assets.
                    </p>
</div>
<span className="font-medium">5-7Y</span>
</div>
<div className="flex items-start justify-between gap-6">
<div>
<h3 className="font-medium tracking-tight">
                      Minimum allocation
                    </h3>
<p className="text-sm text-neutral-500 mt-2 leading-6">
                      Varies by strategy, structure, and investor profile.
                    </p>
</div>
<span className="font-medium">$250k</span>
</div>
</div>
</aside>
</div>
</section>
<section className="border-t border-white/10" id="insights">
<div className="p-6 lg:p-10 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<div className="text-xs uppercase tracking-[0.18rem] text-[#eab308] mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Insights
              </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Market notes from the advisory desk.
              </h2>
</div>
<a className="text-sm text-neutral-300 hover:text-white inline-flex items-center gap-2" href="#contact">
              Speak with an advisor
              <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3">
<article className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors">
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-8" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Rental demand
              </div>
<h3 className="text-2xl tracking-tight mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Why job migration is reshaping Sun Belt underwriting.
              </h3>
<p className="text-sm text-neutral-400 leading-6">
                Population growth is only useful when paired with wage
                resilience and supply constraints.
              </p>
</article>
<article className="p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition-colors">
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-8" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Capital stack
              </div>
<h3 className="text-2xl tracking-tight mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                The new discipline of conservative leverage.
              </h3>
<p className="text-sm text-neutral-400 leading-6">
                Rate volatility rewards sponsors who model multiple exits before
                acquiring the asset.
              </p>
</article>
<article className="p-8 lg:p-10 hover:bg-white/[0.03] transition-colors">
<div className="text-xs uppercase tracking-[0.16rem] text-neutral-500 mb-8" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Design premium
              </div>
<h3 className="text-2xl tracking-tight mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Where hospitality-grade living creates durable rent lift.
              </h3>
<p className="text-sm text-neutral-400 leading-6">
                Amenities, finishes, and operations increasingly define asset
                performance.
              </p>
</article>
</div>
</section>
<section className="border-t border-white/10 overflow-hidden bg-[#111111]" id="testimonials">
<div className="p-6 lg:p-10 border-b border-white/10 text-center relative">
<div className="absolute inset-0 pointer-events-none opacity-40" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)', backgroundSize: '10rem 10rem'}}></div>
<div className="relative z-10 max-w-3xl mx-auto">
<div className="text-xs uppercase tracking-[0.18rem] text-[#eab308] mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Testimonials
              </div>
<h2 className="text-4xl md:text-6xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Trusted by private investors and family offices.
              </h2>
</div>
</div>
<div className="py-10 lg:py-14 space-y-6">
<div className="prime-testimonial-track gap-6 pr-6">
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Marcus Lee" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Marcus Lee
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Family office, CA
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  PrimeEstates gave us sharper underwriting, cleaner reporting,
                  and access to assets we would not have seen alone.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Priya Raman" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef8b45e-c678-465f-8372-c36234710b39_320w.webp"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Priya Raman
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Investor, NY
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Their advisory team made complex market data feel practical,
                  helping us move with confidence and patience.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Sarah Jenkins
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Seattle, WA
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  The process was transparent from sourcing through close, with
                  every assumption clearly documented.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Marcus Lee" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Marcus Lee
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Family office, CA
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  PrimeEstates gave us sharper underwriting, cleaner reporting,
                  and access to assets we would not have seen alone.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Priya Raman" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef8b45e-c678-465f-8372-c36234710b39_320w.webp"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Priya Raman
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Investor, NY
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Their advisory team made complex market data feel practical,
                  helping us move with confidence and patience.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-sm object-cover grayscale-[25%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70f42fcd-9df2-4ed0-aaa4-6582ce1171fa_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Sarah Jenkins
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Seattle, WA
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight text-neutral-100" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  The process was transparent from sourcing through close, with
                  every assumption clearly documented.
                </p>
</article>
</div>
<div className="prime-testimonial-track prime-testimonial-reverse gap-6 pr-6">
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Daniel Hart" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bac6570-3bee-4c9c-a3a7-ad80b0766eb3_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Daniel Hart
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Principal, TX
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  We appreciated the disciplined pace. No pressure, just
                  thoughtful analysis and a clear view of the downside.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Olivia Chen" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Olivia Chen
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Partner, IL
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  The deal room and quarterly memos keep our team aligned
                  without adding administrative noise.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Nora Walsh" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef8b45e-c678-465f-8372-c36234710b39_320w.webp"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Nora Walsh
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Advisor, FL
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Their market selection work helped us avoid crowded
                  opportunities and focus on durable demand.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Daniel Hart" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bac6570-3bee-4c9c-a3a7-ad80b0766eb3_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Daniel Hart
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Principal, TX
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  We appreciated the disciplined pace. No pressure, just
                  thoughtful analysis and a clear view of the downside.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Olivia Chen" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ef87ef2-3b8d-4459-a9ef-5c7b64ad9e1b_320w.jpg"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Olivia Chen
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Partner, IL
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  The deal room and quarterly memos keep our team aligned
                  without adding administrative noise.
                </p>
</article>
<article className="w-[22rem] md:w-[28rem] flex-none border border-white/10 bg-[#f4f4f4] text-neutral-900 p-6">
<div className="flex items-center justify-between gap-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Nora Walsh" className="w-10 h-10 rounded-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ef8b45e-c678-465f-8372-c36234710b39_320w.webp"/>
<div>
<h3 className="text-sm font-medium tracking-tight">
                        Nora Walsh
                      </h3>
<p className="text-[0.65rem] uppercase tracking-[0.12rem] text-neutral-500" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                        Advisor, FL
                      </p>
</div>
</div>
<span className="text-[#eab308] text-2xl" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                    “
                  </span>
</div>
<p className="text-xl md:text-2xl leading-[1.15] tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                  Their market selection work helped us avoid crowded
                  opportunities and focus on durable demand.
                </p>
</article>
</div>
</div>
</section>
<section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-white/10" id="contact">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-7">
<div className="text-xs uppercase tracking-[0.18rem] text-[#eab308] mb-5" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Reach out
              </div>
<h2 className="text-5xl md:text-7xl tracking-tight leading-[1.02]" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Start with a private portfolio review.
              </h2>
</div>
<div className="lg:col-span-5">
<form className="bg-[#f4f4f4] text-neutral-900 p-6 md:p-8" onsubmit="event.preventDefault(); document.getElementById('contactStatus').textContent='Thank you — your review request has been queued.';">
<div className="grid gap-4">
<input className="w-full bg-white border border-neutral-200 px-4 py-4 text-sm outline-none focus:border-[#eab308]" placeholder="Name" required="" type="text"/>
<input className="w-full bg-white border border-neutral-200 px-4 py-4 text-sm outline-none focus:border-[#eab308]" placeholder="Email" required="" type="email"/>
<input className="w-full bg-white border border-neutral-200 px-4 py-4 text-sm outline-none focus:border-[#eab308]" placeholder="Target allocation" type="text"/>
<button className="mt-2 bg-[#eab308] text-[#1a1a1a] px-5 py-4 text-sm font-medium inline-flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors">
                    Schedule portfolio review
                    <iconify-icon height="20" icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<p className="text-xs text-neutral-600 min-h-4" id="contactStatus" style={{fontFamily: '\'JetBrains Mono\', monospace'}}></p>
</div>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 px-6 lg:px-10 py-8">
<div className="bg-[#f4f4f4] text-neutral-900 p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl md:text-5xl tracking-tight leading-[1.05] mb-4" style={{fontFamily: '\'Instrument Serif\', serif'}}>
              Ready to personalize your portfolio?
            </h2>
<p className="text-sm leading-6 text-neutral-600 max-w-md">
              Share your target allocation and our advisory desk will prepare a
              focused review of current private-market opportunities.
            </p>
</div>
<form className="lg:col-span-7 grid md:grid-cols-2 gap-x-6 gap-y-4" onsubmit="event.preventDefault(); document.getElementById('footerStatus').textContent='Request received — we will follow up shortly.';">
<input className="bg-transparent border-b border-neutral-400 px-1 py-3 text-sm outline-none focus:border-[#eab308]" placeholder="Name" required="" type="text"/>
<input className="bg-transparent border-b border-neutral-400 px-1 py-3 text-sm outline-none focus:border-[#eab308]" placeholder="Email" required="" type="email"/>
<input className="md:col-span-2 bg-transparent border-b border-neutral-400 px-1 py-3 text-sm outline-none focus:border-[#eab308]" placeholder="Phone number" type="text"/>
<input className="md:col-span-2 bg-transparent border-b border-neutral-400 px-1 py-3 text-sm outline-none focus:border-[#eab308]" placeholder="Anything we should know?" type="text"/>
<div className="md:col-span-2 flex items-center justify-between gap-4 mt-2">
<p className="text-xs text-neutral-600 min-h-4" id="footerStatus" style={{fontFamily: '\'JetBrains Mono\', monospace'}}></p>
<button className="bg-[#1a1a1a] text-white px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors">
                Submit
              </button>
</div>
</form>
</div>
<div className="bg-[#c9b49a] text-[#111111] p-8 lg:p-10 border-t border-neutral-900/20">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-4 flex items-center gap-8">
<div className="grid grid-cols-3 gap-2 w-20 h-20 place-content-center">
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
<span className="w-2.5 h-2.5 bg-[#111111] rounded-full"></span>
</div>
<div className="text-3xl tracking-tight" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                PrimeEstates
              </div>
</div>
<div className="lg:col-span-2">
<h3 className="text-sm font-medium mb-5">About Us</h3>
<ul className="space-y-3 text-xs">
<li><a className="hover:underline" href="#process">Process</a></li>
<li><a className="hover:underline" href="#assets">Assets</a></li>
<li><a className="hover:underline" href="#firm">Firm</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="text-sm font-medium mb-5">Support</h3>
<ul className="space-y-3 text-xs">
<li><a className="hover:underline" href="#contact">Contact</a></li>
<li>
<a className="hover:underline" href="#insights">Insights</a>
</li>
<li><a className="hover:underline" href="#contact">FAQ's</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="text-sm font-medium mb-5">Social</h3>
<ul className="space-y-3 text-xs">
<li><a className="hover:underline" href="#">LinkedIn</a></li>
<li><a className="hover:underline" href="#">Instagram</a></li>
<li><a className="hover:underline" href="#">YouTube</a></li>
</ul>
</div>
<div className="lg:col-span-2 text-xs leading-6">
              Private real estate opportunities involve risk and may be
              illiquid. All investments require independent review.
            </div>
</div>
<div className="mt-10 pt-5 border-t border-neutral-900/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
<div>Copyright © PrimeEstates 2026</div>
<a className="inline-flex items-center gap-2 hover:underline" href="#start">
              Back to top
              <span className="border border-neutral-900/40 w-4 h-4 inline-flex items-center justify-center text-[0.6rem]">
                ↑
              </span>
</a>
</div>
</div>
</footer>
</div>





    </>
  );
}
