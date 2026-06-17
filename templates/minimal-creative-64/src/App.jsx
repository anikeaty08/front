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



                  (function() {
                            const form = document.getElementById('solace-contact-form');
                            const successMsg = document.getElementById('solace-contact-success');
                            const formWrapper = document.getElementById('form-container-emotqyqp');
                            const submitBtn = document.getElementById('submit-btn-emotqyqp');
                            const btnText = document.getElementById('btn-text-emotqyqp');
                            const btnIcon = document.getElementById('btn-icon-emotqyqp');

                            if (!form || form.dataset.bound_ajax_v3) return;
                            form.dataset.bound_ajax_v3 = '1';

                            form.addEventListener('submit', async function(e) {
                              e.preventDefault();

                              // Loading state
                              submitBtn.disabled = true;
                              const originalText = btnText.textContent;
                              btnText.textContent = 'Sending...';
                              btnIcon.style.display = 'none';

                              const formData = new FormData(form);
                              const data = Object.fromEntries(formData.entries());

                              try {
                                const response = await fetch("https://formsubmit.co/ajax/vlada.povelitsa@gmail.com", {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                    "Accept": "application/json"
                                  },
                                  body: JSON.stringify(data)
                                });

                                const result = await response.json();

                                if (response.ok) {
                                  // Clear the form
                                  form.reset();

                                  // Success animation
                                  formWrapper.classList.add('opacity-0', '-translate-y-2');
                                  setTimeout(() => {
                                    formWrapper.classList.add('hidden');
                                    successMsg.classList.remove('hidden');
                                    // Trigger reflow for animation
                                    successMsg.offsetHeight;
                                    successMsg.classList.remove('opacity-0', 'translate-y-4');
                                  }, 500);
                                } else {
                                  throw new Error(result.message || 'Submission failed');
                                }
                              } catch (error) {
                                alert("Error: " + error.message);
                                submitBtn.disabled = false;
                                btnText.textContent = originalText;
                                btnIcon.style.display = 'inline-block';
                              }
                            });
                          })();
                


                      document.addEventListener('DOMContentLoaded', function () {
                      var form = document.getElementById('horizoners-contact-form');
                      if (!form) return;

                      form.addEventListener('submit', function (e) {
                        e.preventDefault();
                        e.stopPropagation();

                        var submitBtn = document.getElementById('horizoners-submit-btn');
                        var btnText = document.getElementById('horizoners-btn-text');
                        var btnIcon = document.getElementById('horizoners-btn-icon');
                        var formWrapper = document.getElementById('form-container-emotqyqp');
                        var successMsg = document.getElementById('horizoners-contact-success');

                        submitBtn.disabled = true;
                        var originalText = btnText.textContent;
                        btnText.textContent = 'Sending...';
                        btnIcon.style.display = 'none';

                        var data = {
                          access_key: '1da675b3-8695-4c4e-90ab-802a7a9b125b',
                          name: form.querySelector('[name="name"]').value,
                          email: form.querySelector('[name="email"]').value,
                          message: form.querySelector('[name="message"]').value
                        };

                        fetch('https://api.web3forms.com/submit', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                          },
                          body: JSON.stringify(data)
                        })
                        .then(function (res) { return res.json().then(function(r){ return {ok: res.ok, body: r}; }); })
                        .then(function (res) {
                          if (res.ok) {
                            form.reset();
                            formWrapper.style.opacity = '0';
                            formWrapper.style.transform = 'translateY(-8px)';
                            setTimeout(function () {
                              formWrapper.classList.add('hidden');
                              successMsg.classList.remove('hidden');
                              successMsg.offsetHeight;
                              successMsg.classList.remove('opacity-0', 'translate-y-4');
                            }, 500);
                          } else {
                            throw new Error(res.body.message || 'Submission failed');
                          }
                        })
                        .catch(function (err) {
                          alert('Error: ' + err.message);
                          submitBtn.disabled = false;
                          btnText.textContent = originalText;
                          btnIcon.style.display = 'inline-block';
                        });
                      }, true);
                    });
                  


      document.addEventListener("DOMContentLoaded", () => {
          gsap.registerPlugin(ScrollTrigger);

          // Hero Animations
          gsap.fromTo(".reveal-hero",
              { y: "120%", opacity: 0 },
              { y: "0%", opacity: 1, duration: 1.2, stagger: 0.1, delay: 0.2, ease: "power4.out" }
          );

          // Horizontal Scroll
          const horizontalTrack = document.querySelector("#horizontal-track");
          if (horizontalTrack) {
              gsap.to(horizontalTrack, {
                  x: () => -(horizontalTrack.scrollWidth - window.innerWidth),
                  ease: "none",
                  scrollTrigger: {
                      trigger: "#hero-carousel-scroll",
                      start: "top top",
                      end: "bottom bottom",
                      scrub: 1,
                      invalidateOnRefresh: true
                  }
              });
          }

          // Custom Cursor for Gallery
          const visitCursor = document.querySelector('#visit-cursor');
          if (visitCursor) {
              gsap.set(visitCursor, { xPercent: -50, yPercent: -50 });

              let xTo = gsap.quickTo(visitCursor, "x", {duration: 0.4, ease: "power3"});
              let yTo = gsap.quickTo(visitCursor, "y", {duration: 0.4, ease: "power3"});

              window.addEventListener("mousemove", e => {
                  xTo(e.clientX);
                  yTo(e.clientY);
              });

              document.querySelectorAll('.gallery-item').forEach(item => {
                  item.addEventListener('mouseenter', () => {
                      gsap.to(visitCursor, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.5)" });
                  });
                  item.addEventListener('mouseleave', () => {
                      gsap.to(visitCursor, { scale: 0, opacity: 0, duration: 0.4, ease: "power2.in" });
                  });
              });
          }

          // Scroll Reveals
          document.querySelectorAll('.reveal-scroll').forEach(el => {
              gsap.fromTo(el, { y: 40, opacity: 0 }, {
                  y: 0, opacity: 1, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: el, start: "top 85%" }
              });
          });

          // Custom SVG Shape Scroll Animations
          gsap.utils.toArray('.shape-scroll').forEach(shape => {
              gsap.to(shape, {
                  rotationY: 35,
                  rotationX: 15,
                  rotationZ: -5,
                  scale: 1.05,
                  ease: "none",
                  scrollTrigger: {
                      trigger: shape.closest('.group'),
                      start: "top bottom",
                      end: "bottom top",
                      scrub: 1
                  }
              });
          });

          // Three.js Canvas
          const canvas = document.querySelector('#bg-canvas');
          const heroPanel = document.querySelector('#hero-panel');
          if (canvas && heroPanel) {
              const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
              renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
              const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
              const scene = new THREE.Scene();
              const material = new THREE.ShaderMaterial({
                  uniforms: { u_time: { value: 0 }, u_resolution: { value: new THREE.Vector2() } },
                  vertexShader: `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`,
                  fragmentShader: `
                      uniform float u_time; uniform vec2 u_resolution; varying vec2 vUv;
                      void main() {
                          vec2 p = vUv * 2.0 - 1.0;
                          p.x *= u_resolution.x / u_resolution.y;
                          float wave = smoothstep(0.8, 1.0, sin(p.y * 4.0 + sin(p.x * 2.0 + u_time) * 0.5 + u_time * 0.5));
                          gl_FragColor = vec4(vec3(wave * 0.1), 1.0);
                      }`,
                  transparent: true
              });
              scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));
              const update = () => {
                  renderer.setSize(heroPanel.clientWidth, heroPanel.clientHeight);
                  material.uniforms.u_resolution.value.set(heroPanel.clientWidth, heroPanel.clientHeight);
              };
              window.addEventListener('resize', update); update();
              const tick = () => { material.uniforms.u_time.value += 0.01; renderer.render(scene, camera); requestAnimationFrame(tick); };
              tick();
          }
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
      


<div className="fixed top-0 left-0 w-[clamp(5rem,8vw,6rem)] h-[clamp(5rem,8vw,6rem)] bg-white/10 backdrop-blur-md rounded-full pointer-events-none z-[100] items-center justify-center text-white font-google-sans-flex text-xs font-medium uppercase tracking-widest shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/20 hidden lg:flex" id="visit-cursor" style={{opacity: '0', transform: 'scale(0)'}}>
      VISIT
    </div>
<nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-dashed border-zinc-700/50 pointer-events-auto">
<div className="md:px-12 flex max-w-[1400px] mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 relative items-center justify-between">

<div className="flex items-center z-20">
<a aria-label="Home" className="uppercase text-lg font-light text-white tracking-tight shrink-0" href="/">
<img alt="Horizers" className="w-auto h-4 invert-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aac1b0c-0a11-4af7-8b80-8fdbdd4adcb2_800w.png" style={{maskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)'}}/>
</a>
</div>

<div className="hidden md:flex gap-12 uppercase -translate-x-1/2 -translate-y-1/2 z-10 text-xs text-zinc-400 tracking-widest font-mono w-full max-w-fit absolute top-1/2 left-1/2 items-center justify-center">
<a className="hover:text-white transition-colors font-google-sans-flex" href="/#about">
            About
          </a>
<a className="hover:text-white transition-colors font-google-sans-flex" href="/#services">
            Services
          </a>
<a className="hover:text-white transition-colors font-google-sans-flex" href="/#testimonials">
            Testimonials
          </a>
<a className="hover:text-white transition-colors font-google-sans-flex" href="/#work">
            work
          </a>
</div>

<div className="flex z-20 items-center justify-end">
<a className="inline-flex items-center justify-center uppercase hover:bg-zinc-200 group lg:text-sm text-xs font-medium text-black tracking-wide font-google-sans-flex bg-white w-full rounded-none mt-0 pt-4 pr-4 pb-4 pl-4" href="/#contact">
            Start a project
            <svg className="group-hover:translate-x-1 transition-transform ml-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>
<main className="w-full relative">

<section className="bg-black w-full h-[600vh] relative" id="hero-carousel-scroll">
<div className="sticky overflow-hidden flex flex-col bg-black w-full h-screen top-0 justify-center">
<div className="flex no-scrollbar w-[00vw] h-screen items-center" id="horizontal-track">

<div className="flex-shrink-0 overflow-hidden flex flex-col w-screen h-screen pt-40 pb-20 relative justify-end" id="hero-panel">
<div className="absolute inset-0 z-0 bg-black pointer-events-none">
<canvas className="absolute inset-0 w-full h-full pointer-events-none" height="1628" id="bg-canvas" style={{width: '1072px', height: '814px'}} width="2144"></canvas>
<div className="absolute inset-0 z-10 opacity-20 mix-blend-screen pointer-events-none" style={{background: 'repeating-linear-gradient(45deg, transparent, transparent 0.5rem, rgba(255,255,255,0.03) 0.5rem, rgba(255,255,255,0.03) 0.56rem)'}}></div>
<div className="absolute inset-0 z-20 opacity-[0.08] mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>
<div className="relative z-10 w-full px-6 md:px-12 max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
<div className="lg:col-span-9">
<h1 className="text-[clamp(3.5rem,8vw,8rem)] font-light leading-[0.95] tracking-tight uppercase text-white m-0">
<div className="" style={{overflow: 'hidden'}}>
<div className="reveal-hero font-google-sans-flex">
                          WE CREATE BOLD
                        </div>
</div>
<div className="" style={{overflow: 'hidden'}}>
<div className="reveal-hero font-light text-zinc-500 font-google-sans-flex">
                          DIGITAL EXPERIENCES
                        </div>
</div>
<div className="" style={{overflow: 'hidden'}}>
<div className="reveal-hero font-google-sans-flex">
                          THAT MATTER.
                        </div>
</div>
</h1>
<div className="mt-8 lg:mt-12 max-w-xl" style={{overflow: 'hidden'}}>
<p className="reveal-hero text-[clamp(1.125rem,1.5vw,1.5rem)] leading-relaxed font-light text-zinc-400 font-google-sans-flex">
                        Horizers is a brand and digital design studio. We work
                        with founders, CMOs, and companies that have given up on
                        ordinary.
                      </p>
</div>
</div>
<div className="lg:col-span-3 flex flex-col gap-4 font-mono text-xs text-zinc-500 uppercase tracking-widest">
<div className="" style={{overflow: 'hidden'}}>
<a className="reveal-hero flex items-center justify-between border-dashed hover:text-white transition-colors duration-300 group border-zinc-800 border-b pb-3" href="https://www.threads.com/@horizoners.design">
<span className="font-google-sans-flex">threads</span>
<iconify-icon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
<div className="" style={{overflow: 'hidden'}}>
<a className="reveal-hero flex items-center justify-between border-dashed hover:text-white transition-colors duration-300 group border-zinc-800 border-b pb-3" href="https://www.linkedin.com/in/ruslan-subbota/">
<span className="font-google-sans-flex">LINKEDIN</span>
<iconify-icon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
<div className="" style={{overflow: 'hidden'}}>
<a className="reveal-hero flex items-center justify-between border-dashed hover:text-white transition-colors duration-300 group border-zinc-800 border-b pb-3" href="https://contra.com/ruslansubbota">
<span className="font-google-sans-flex">CONTRA</span>
<iconify-icon className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="gallery-item flex-shrink-0 group cursor-none bg-black w-screen h-screen relative">
<video autoplay="play" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out opacity-100 w-full h-full object-cover grayscale-0" loop="" muted="" playsinline="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/ee77abb2-b67d-4ed9-bbf1-155a06f3baad/e6efdf34-1224-431b-9cc0-ee7c6919dec2-Scene-5-.mp4?v=1778048350091"></video>
<div className="md:bottom-12 md:left-12 z-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none opacity-0 absolute bottom-8 left-8">
<span className="text-[clamp(0.875rem,1vw,1.125rem)] uppercase font-medium text-white tracking-widest font-google-sans-flex drop-shadow-lg">
                  Marketing agency - Elfa Studio
                </span>
</div>
</div>
<div className="gallery-item flex-shrink-0 group cursor-none bg-black w-screen h-screen relative">
<video autoplay="" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out opacity-100 w-full h-full object-cover grayscale-0" loop="" muted="" playsinline="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/ee77abb2-b67d-4ed9-bbf1-155a06f3baad/854e58ae-1b8c-4c4e-980d-b8b2ac242633-Scene-6-1-.mp4?v=1778049068015"></video>
<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<span className="text-[clamp(0.875rem,1vw,1.125rem)] uppercase font-medium text-white tracking-widest font-google-sans-flex drop-shadow-lg">
                  FutureProofing.Dev
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-dashed overflow-hidden z-10 bg-black w-full border-zinc-800 pt-6 pb-6 relative">
<div className="animate-marquee flex whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
<div className="flex font-google-sans-flex mr-12 items-center">
            BRAND IDENTITY
            <span className="mx-6 text-zinc-800">/</span>
            DIGITAL DESIGN
            <span className="mx-6 text-zinc-800">/</span>
            MOTION GRAPHICS
            <span className="mx-6 text-zinc-800">/</span>
            ART DIRECTION
            <span className="mx-6 text-zinc-800">/</span>
            CAMPAIGN
            <span className="mx-6 text-zinc-800">/</span>
            SPATIAL DESIGN
            <span className="mx-6 text-zinc-800">/</span>
            WEB
          </div>
<div className="flex items-center mr-12">
            BRAND IDENTITY
            <span className="mx-6 text-zinc-800">/</span>
            DIGITAL DESIGN
            <span className="mx-6 text-zinc-800">/</span>
            MOTION GRAPHICS
            <span className="mx-6 text-zinc-800">/</span>
            ART DIRECTION
            <span className="mx-6 text-zinc-800">/</span>
            CAMPAIGN
            <span className="mx-6 text-zinc-800">/</span>
            SPATIAL DESIGN
            <span className="mx-6 text-zinc-800">/</span>
            WEB
          </div>
</div>
</section>

<section className="border-dashed bg-black border-zinc-800 border-b pt-32 pb-32">
<div className="md:px-12 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="border-dashed overflow-hidden border-zinc-800 border-b mb-16 pb-4">
<span className="uppercase block reveal-scroll text-xs text-zinc-500 tracking-widest font-mono">
              001. Our Features
            </span>
</div>
<div className="flex flex-col border-dashed w-full border-zinc-800 gap-x-12 gap-y-12">

<div className="group flex flex-col border-dashed overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 md:flex-row lg:pt-16 border-zinc-800 border-b pt-0 pb-16 relative gap-x-12 gap-y-8 items-center justify-between">
<div className="md:w-[55%] flex flex-col z-10 md:pr-12 w-full pr-12 gap-x-12 gap-y-5">
<h3 className="reveal-scroll text-[clamp(2.5rem,4vw,3.5rem)] uppercase group-hover:text-zinc-300 transition-colors duration-300 leading-[1.1] font-light text-white tracking-tight font-google-sans-flex mb-6">
                  CRO Landing Page
                </h3>
<p className="reveal-scroll text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-zinc-400 font-google-sans-flex max-w-xl">
                  Strategic, high-conversion landing pages designed to turn
                  visitors into loyal customers.
                </p>
</div>
<div className="md:w-[45%] flex md:justify-end z-10 w-full perspective-1000 justify-around">
<div className="md:w-64 md:h-64 lg:w-72 lg:h-72 group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-48 h-48 relative justify-center">
<svg className="w-full h-full max-h-80 object-contain" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<style>
                      .s-line {
                        fill: none;
                        stroke: white;
                        stroke-width: 1.5;
                        stroke-linecap: round;
                        stroke-dasharray: 300;
                        stroke-dashoffset: 300;
                        animation: drawSLine 4s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate;
                        will-change: stroke-dashoffset;
                      }
                      .s-line:nth-child(1) { animation-delay: 0.0s; }
                      .s-line:nth-child(2) { animation-delay: 0.1s; }
                      .s-line:nth-child(3) { animation-delay: 0.2s; }
                      .s-line:nth-child(4) { animation-delay: 0.3s; }
                      .s-line:nth-child(5) { animation-delay: 0.4s; }

                      @keyframes drawSLine {
                        0% { stroke-dashoffset: 300; opacity: 0; }
                        10% { opacity: 1; }
                        100% { stroke-dashoffset: 0; opacity: 1; }
                      }

                      .pulse-circle {
                        fill: none;
                        stroke: white;
                        stroke-width: 1.5;
                        animation: pulseScale 3s ease-in-out infinite;
                        will-change: transform;
                      }
                      .c1 { animation-delay: 0s; transform-origin: 60px 170px; }
                      .c2 { animation-delay: 1s; transform-origin: 100px 170px; }
                      .c3 { animation-delay: 2s; transform-origin: 140px 170px; }

                      @keyframes pulseScale {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.15); opacity: 1; }
                      }
                    </style>
<g transform="translate(0, -15)">
<path className="s-line" d="M 140 20 C 180 20, 180 80, 100 80 C 20 80, 20 140, 60 140"></path>
<path className="s-line" d="M 140 30 C 180 30, 180 90, 100 90 C 20 90, 20 150, 60 150"></path>
<path className="s-line" d="M 140 40 C 180 40, 180 100, 100 100 C 20 100, 20 160, 60 160"></path>
<path className="s-line" d="M 140 50 C 180 50, 180 110, 100 110 C 20 110, 20 170, 60 170"></path>
<path className="s-line" d="M 140 60 C 180 60, 180 120, 100 120 C 20 120, 20 180, 60 180"></path>
</g>
<circle className="pulse-circle c1" cx="60" cy="170" r="8"></circle>
<circle className="pulse-circle c2" cx="100" cy="170" r="8"></circle>
<circle className="pulse-circle c3" cx="140" cy="170" r="8"></circle>
</svg>
</div>
</div>
</div>

<div className="group flex flex-col md:flex-row lg:py-24 border-dashed gap-12 overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 border-zinc-800 border-b pt-- pb-16 relative gap-x-12 gap-y-8 items-center justify-between">
<div className="w-full md:w-[55%] flex flex-col z-10 pr-0 md:pr-12">
<h3 className="reveal-scroll text-[clamp(2.5rem,4vw,3.5rem)] uppercase group-hover:text-zinc-300 transition-colors duration-300 leading-[1.1] font-light text-white tracking-tight font-google-sans-flex mb-6">
                  Corporate Website
                </h3>
<p className="reveal-scroll text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-zinc-400 font-google-sans-flex max-w-xl">
                  Scalable, high-end web solutions that reflect your brand’s
                  authority and vision.
                </p>
</div>
<div className="md:w-[45%] flex md:justify-end z-10 w-full perspective-1000 justify-around">
<div className="md:w-[45%] flex md:justify-end z-10 w-full perspective-1000 justify-center">
<div className="md:w-64 md:h-64 lg:w-72 lg:h-72 group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-48 h-48 relative justify-center">
<svg className="w-full h-full max-h-80 object-contain" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<style>
                        .arch {
                          fill: none;
                          stroke: white;
                          stroke-width: 1.5;
                          stroke-linecap: round;
                          opacity: 0;
                          animation: fadeArch 4s ease-in-out infinite;
                          will-change: opacity;
                        }
                        .arch:nth-child(1) { animation-delay: 0.0s; }
                        .arch:nth-child(2) { animation-delay: 0.3s; }
                        .arch:nth-child(3) { animation-delay: 0.6s; }
                        .arch:nth-child(4) { animation-delay: 0.9s; }
                        .arch:nth-child(5) { animation-delay: 1.2s; }
                        .arch:nth-child(6) { animation-delay: 1.5s; }
                        .arch:nth-child(7) { animation-delay: 1.8s; }

                        @keyframes fadeArch {
                          0%, 100% { opacity: 0; }
                          30%, 70% { opacity: 1; }
                        }

                        .center-circle {
                          fill: none;
                          stroke: white;
                          stroke-width: 1.5;
                          transform-origin: 100px 140px;
                          animation: pulseCenter 4s ease-in-out infinite;
                          will-change: transform;
                        }

                        @keyframes pulseCenter {
                          0%, 100% { transform: scale(1); opacity: 0.5; }
                          50% { transform: scale(1.15); opacity: 1; }
                        }
                      </style>
<g transform="translate(0, 140)">
<path className="arch" d="M 85,0 A 15,15 0 0,1 115,0"></path>
<path className="arch" d="M 70,0 A 30,30 0 0,1 130,0"></path>
<path className="arch" d="M 55,0 A 45,45 0 0,1 145,0"></path>
<path className="arch" d="M 40,0 A 60,60 0 0,1 160,0"></path>
<path className="arch" d="M 25,0 A 75,75 0 0,1 175,0"></path>
<path className="arch" d="M 10,0 A 90,90 0 0,1 190,0"></path>
<path className="arch" d="M -5,0 A 105,105 0 0,1 205,0"></path>
</g>
<circle className="center-circle" cx="100" cy="140" r="6"></circle>
</svg>
</div>
</div>
</div>
</div>

<div className="group flex flex-col border-dashed overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 md:flex-row lg:pt-16 border-zinc-800 pt-0 pb-16 relative gap-x-12 gap-y-8 items-center justify-between">
<div className="md:w-[55%] flex flex-col z-10 md:pr-12 w-full pr-12 gap-x-12 gap-y-8">
<h3 className="reveal-scroll text-[clamp(2.5rem,4vw,3.5rem)] uppercase group-hover:text-zinc-300 transition-colors duration-300 leading-[1.1] font-light text-white tracking-tight font-google-sans-flex mb-6">
                  Investor-ready Pack
                </h3>
<p className="reveal-scroll text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-zinc-400 font-google-sans-flex max-w-xl">
                  A comprehensive digital ecosystem and pitch deck designed to
                  secure funding and impress stakeholders.
                </p>
</div>
<div className="md:w-[45%] flex md:justify-end z-10 w-full perspective-1000 justify-around">
<div className="md:w-[45%] flex md:justify-end z-10 w-full perspective-1000 justify-center">
<div className="md:w-64 md:h-64 lg:w-72 lg:h-72 group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-48 h-48 relative justify-center">
<svg className="w-full h-full max-h-80 object-contain" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<style>
                        .diamond {
                          fill: none;
                          stroke: white;
                          stroke-width: 1.5;
                          stroke-linecap: round;
                          stroke-linejoin: round;
                          stroke-dasharray: 600;
                          stroke-dashoffset: 600;
                          animation: drawDiamond 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                          will-change: stroke-dashoffset;
                          transform-origin: 100px 100px;
                        }
                        .diamond:nth-child(1) { animation-delay: 0.0s; }
                        .diamond:nth-child(2) { animation-delay: 0.2s; }
                        .diamond:nth-child(3) { animation-delay: 0.4s; }
                        .diamond:nth-child(4) { animation-delay: 0.6s; }
                        .diamond:nth-child(5) { animation-delay: 0.8s; }
                        .diamond:nth-child(6) { animation-delay: 1.0s; }

                        @keyframes drawDiamond {
                          0% { stroke-dashoffset: 600; opacity: 0; }
                          10% { opacity: 1; }
                          50% { stroke-dashoffset: 0; opacity: 1; }
                          90% { opacity: 1; }
                          100% { stroke-dashoffset: -600; opacity: 0; }
                        }
                      </style>
<g transform="rotate(45, 100, 100)">
<rect className="diamond" height="20" width="20" x="90" y="90"></rect>
<rect className="diamond" height="50" width="50" x="75" y="75"></rect>
<rect className="diamond" height="80" width="80" x="60" y="60"></rect>
<rect className="diamond" height="110" width="110" x="45" y="45"></rect>
<rect className="diamond" height="140" width="140" x="30" y="30"></rect>
<rect className="diamond" height="170" width="170" x="15" y="15"></rect>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32 justify-center" id="about" role="button">
<div className="md:px-12 max-w-[1400px] mr-auto mb-16 ml-auto pr-6 pl-6">
<div className="border-dashed overflow-hidden border-neutral-300 border-b pb-4">
<span className="uppercase block reveal-scroll text-xs text-neutral-500 tracking-widest font-mono">
              002. Performance &amp; About
            </span>
</div>
</div>
<div className="flex flex-col md:px-12 md:mb-24 -multi w-full max-w-[1400px] mr-auto mb-16 ml-auto pr-6 pl-6">
<h2 className="text-[clamp(2.5rem,6vw,6.5rem)] leading-[0.95] uppercase md:max-w-5xl reveal-scroll font-medium text-black tracking-tight font-google-sans-flex w-full mt-0 mr-0 mb-0 ml-0">
            Building momentum through strategic design.
          </h2>
</div>
<div className="grid grid-cols-1 border-dashed md:px-12 md:grid-cols-3 md:gap-8 max-w-[1400px] border-neutral-300 mt-0 mr-auto ml-auto pt-0 pr-6 pl-6 gap-x-y-4 gap-y-6">
<div className="flex flex-col reveal-scroll">
<span className="text-[clamp(4rem,8vw,7rem)] leading-none block font-light text-black tracking-tight font-google-sans-flex mb-4">
              100+
            </span>
<p className="text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-neutral-600 font-google-sans-flex">
              Companies helped to scale and redefine their digital presence.
            </p>
</div>
<div className="flex flex-col reveal-scroll">
<span className="text-[clamp(4rem,8vw,7rem)] leading-none block font-light text-black tracking-tight font-google-sans-flex mb-4">
              67+
            </span>
<p className="text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-neutral-600 font-google-sans-flex">
              High-end projects completed with precision.
            </p>
</div>
<div className="flex flex-col reveal-scroll">
<span className="text-[clamp(4rem,8vw,7rem)] leading-none block font-light text-black tracking-tight font-google-sans-flex mb-4">
              5x
            </span>
<p className="text-[clamp(1.125rem,1.5vw,1.375rem)] leading-relaxed font-light text-neutral-600 font-google-sans-flex">
              Average increase in user engagement for our clients.
            </p>
</div>
</div>
<div className="flex flex-col border-dashed reveal-scroll md:px-12 md:pt-4 border-neutral-300 border-t mt-12 mb-12 pt-0 pr-6 pl-6 items-center justify-center">
<span className="uppercase block text-xs text-neutral-500 tracking-widest font-mono mt-12 mr-0 mb-12 ml-0">
            Companies we've helped
          </span>
<section className="border-y overflow-hidden border-white/5 pt-0 pb-10" style={{maskImage: 'linear-gradient(90deg, transparent, black 55%, black 55%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 55%, black 55%, transparent)'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex gap-16 hover:grayscale-0 transition-all duration-500 opacity-50 grayscale gap-x-16 gap-y-16 items-center">

<span className="text-xl font-semibold tracking-tight">
                    ACME Corp
                  </span>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[64px] h-[64px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae9a26a3-34fb-49de-87f1-eb1fab5ca8aa_800w.png)] bg-cover rounded-none grayscale invert-0" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[200px] h-[58px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3054968-178c-4cc3-a6d6-bbebdec2b8c5_800w.png)] bg-cover rounded-none grayscale invert-0" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[218px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07606563-200b-40dc-8d13-05ba8499a30b_800w.png)] bg-cover rounded-none grayscale invert-0" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[218px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e83b6f5f-0dda-4a50-91df-bb18dd85f7f4_800w.png)] bg-cover rounded-none grayscale invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[190px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/273d5e47-10f0-4a23-b8d7-0161a2b1280f_800w.png)] bg-cover rounded-none grayscale invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center opacity-50 mix-blend-multiply w-[204px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0ee2726-fda8-4d1c-95cb-97d6e53c22d7_320w.png)] bg-cover rounded-none grayscale-0 invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[208px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52dd9dc8-2e1d-4daf-bdff-53cf16185959_320w.png)] bg-cover rounded-none grayscale invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[144px] h-[46px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/505ea8e3-cbdb-479b-9e0e-00e26164d511_800w.png)] bg-cover rounded-none grayscale invert" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[204px] h-[54px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c20f54c-187f-4232-a66a-5092b9098558_800w.png)] bg-cover rounded-none grayscale invert-0" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-normal w-[204px] h-[44px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a2ce021-b216-4bfb-a076-250ad0440bcf_800w.png)] bg-cover rounded-none grayscale invert-0" href="#"></a>

</div>
<style className="">
                  .animate-marquee {
                    animation: marquee 25s linear infinite;
                  }

                  @keyframes marquee {
                    0% {
                      transform: translateX(0);
                    }

                    100% {
                      transform: translateX(-50%);
                    }
                  }
                </style>
</div>
</div>
</section>
</div>
<div className="md:px-12 flex reveal-scroll w-full mt-0 pr-6 pl-6 justify-center">
<a className="inline-flex items-center justify-center uppercase hover:bg-neutral-800 group lg:text-sm text-xs font-medium text-stone-50 tracking-wide font-google-sans-flex bg-black rounded-none pt-5 pr-10 pb-5 pl-10 shadow-xl" href="/#contact">
            Start a project
            <svg className="group-hover:translate-x-1 transition-transform ml-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>
<section className="border-dashed md:pl-24 md:pr-24 bg-black w-full z-20 border-zinc-800 pt-32 pr-6 pb-0 pl-6 relative justify-center" id="services">
<div className="border-dashed overflow-hidden border-zinc-800 border-b mb-16 pb-4">
<span className="uppercase block reveal-scroll text-xs text-zinc-500 tracking-widest font-mono">
            003. Our Services
          </span>
</div>
<div className="max-w-[1400px] mr-auto ml-auto">
<h2 className="text-[clamp(2.5rem,6vw,6.5rem)] uppercase font-normal text-white tracking-tight font-google-sans-flex mb-0">
            WHAT WE DO.
          </h2>
<div className="flex flex-col border-white/[0.08] w-full">

<div className="flex lg:hidden flex-col w-full">

<div className="flex flex-col md:py-16 border-white/[0.08] w-full pt-12 pb-12">
<div className="overflow-hidden aspect-[4/3] w-full rounded-none mb-6 relative">
<img alt="Verkos" className="mix-blend-normal w-full h-full max-w-sm max-h-fit object-contain rounded-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/148c7d10-5cfb-42e4-b1e5-7cc6f6214c00_800w.png"/>
</div>
<p className="text-sm font-light text-zinc-400">(01)</p>
<h3 className="md:text-4xl uppercase text-3xl font-light text-white tracking-tight font-google-sans-flex mb-2">
                  WEB DEVELOPMENT
                </h3>
</div>

<div className="flex flex-col md:py-16 border-white/[0.08] w-full pt-0 pb-12">
<div className="overflow-hidden aspect-[4/3] w-full rounded-none mb-6 relative">
<img alt="zScore" className="w-full h-full object-contain rounded-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1c8f99-aa99-46f4-898c-6c1fb760ec95_800w.png"/>
</div>
<p className="text-sm font-light text-zinc-400">(02)</p>
<h3 className="md:text-4xl uppercase text-3xl font-light text-white tracking-tight font-google-sans-flex mb-2">
                  UI/UX Design
                </h3>
</div>

<div className="flex flex-col md:py-16 border-white/[0.08] w-full pt-0 pb-12">
<div className="overflow-hidden aspect-[4/3] w-full rounded-none mb-6 relative">
<img alt="Lumina" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b38e462-b768-4a1e-ae27-1d7cf9689b7f_800w.png"/>
</div>
<p className="text-sm font-light text-zinc-400">(03)</p>
<h3 className="md:text-4xl uppercase text-3xl font-light text-white tracking-tight font-google-sans-flex mb-2">
                  graphic design
                </h3>
</div>

<div className="flex flex-col md:py-16 border-white/[0.08] w-full pt-0 pb-12">
<div className="overflow-hidden aspect-[4/3] w-full rounded-none mb-6 relative">
<img alt="Nexus" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14fb7841-6a84-4f29-912e-a4771e32c210_800w.png"/>
</div>
<p className="text-sm font-light text-zinc-400">(04)</p>
<h3 className="md:text-4xl uppercase text-3xl font-light text-white tracking-tight font-google-sans-flex mb-2">
                  Motion Design
                </h3>
</div>

<div className="flex flex-col md:py-16 border-white/[0.08] w-full pt-0 pb-0">
<div className="overflow-hidden aspect-[4/3] w-full rounded-none mb-6 relative">
<img alt="Aura" className="w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e34f50f-bcc8-4644-a67b-e4906a20c6c6_800w.png"/>
</div>
<p className="text-sm font-light text-zinc-400">(05)</p>
<h3 className="md:text-4xl uppercase text-3xl font-light text-white tracking-tight font-google-sans-flex mb-2">
                  Brand Identity
                </h3>
</div>
</div>

<div className="hidden lg:flex flex-col w-full">

<div className="group flex md:py-12 border-white/[0.08] cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 overflow-visible rounded-none border-b pt-10 pb-10 relative items-center justify-between">
<div className="flex items-start gap-4 z-10 w-full md:w-auto">
<span className="font-mono text-[10px] md:text-xs text-zinc-500 pt-2 md:pt-3">
                    (01)
                  </span>
<h3 className="group-hover:translate-x-4 transition-transform duration-300 leading-none md:text-xl text-3xl font-normal text-white tracking-tight font-google-sans-flex">
                    WEB DEVELOPMENT
                  </h3>
</div>
<div className="hidden md:block -translate-y-1/2 z-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none opacity-0 w-[280px] h-[360px] absolute top-1/2 right-32 scale-90">
<img alt="Web Development" className="w-full h-full object-contain rounded-none shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04b86224-8f54-45ed-91f2-6eda5af85408_800w.png"/>
</div>
<div className="z-10 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</div>
</div>

<div className="group flex md:py-12 border-white/[0.08] cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 overflow-visible border-b pt-10 pb-10 relative items-center justify-between">
<div className="flex gap-4 z-10 md:w-auto w-full items-start">
<span className="font-mono text-[10px] md:text-xs text-zinc-500 pt-2 md:pt-3">
                    (02)
                  </span>
<h3 className="text-3xl tracking-tight text-white group-hover:translate-x-4 transition-transform duration-300 font-google-sans-flex leading-none font-normal md:text-xl">
                    UI/UX DESIGN
                  </h3>
</div>
<div className="hidden md:block -translate-y-1/2 z-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none opacity-0 w-[280px] h-[360px] absolute top-1/2 right-32 scale-90">
<img alt="UI/UX Design" className="w-full h-full object-contain rounded-none shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62fa97d7-c5c4-4767-a335-715e879830cf_800w.png"/>
</div>
<div className="z-10 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
<svg className="" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</div>
</div>

<div className="group flex md:py-12 border-white/[0.08] cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 overflow-visible rounded-none border-b pt-10 pb-10 relative items-center justify-between">
<div className="flex items-start gap-4 z-10 w-full md:w-auto">
<span className="font-mono text-[10px] md:text-xs text-zinc-500 pt-2 md:pt-3">
                    (03)
                  </span>
<h3 className="text-3xl tracking-tight text-white group-hover:translate-x-4 transition-transform duration-300 font-google-sans-flex leading-none font-normal md:text-xl">
                    GRAPHIC DESIGN
                  </h3>
</div>
<div className="hidden md:block -translate-y-1/2 z-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none opacity-0 w-[280px] h-[360px] absolute top-1/2 right-32 scale-90">
<img alt="Graphic Design" className="w-full h-full rounded-none shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e24a07f5-71ee-4dba-a3eb-86d8ff97a891_800w.png"/>
</div>
<div className="z-10 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</div>
</div>

<div className="group flex md:py-12 border-white/[0.08] cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 overflow-visible border-b pt-10 pb-10 relative items-center justify-between">
<div className="flex items-start gap-4 z-10 w-full md:w-auto">
<span className="font-mono text-[10px] md:text-xs text-zinc-500 pt-2 md:pt-3">
                    (04)
                  </span>
<h3 className="text-3xl tracking-tight text-white group-hover:translate-x-4 transition-transform duration-300 font-google-sans-flex leading-none font-normal md:text-xl">
                    MOTION DESIGN
                  </h3>
</div>
<div className="hidden md:block -translate-y-1/2 z-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none opacity-0 w-[280px] h-[360px] absolute top-1/2 right-32 scale-90">
<img alt="Motion Design" className="w-full h-full object-contain rounded-none shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f785a0e4-6145-4346-b61e-b6a04510b84d_800w.png"/>
</div>
<div className="z-10 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</div>
</div>

<div className="group flex md:py-12 border-white/[0.08] cursor-pointer hover:bg-white/[0.02] transition-colors duration-300 overflow-visible border-b pt-10 pb-10 relative items-center justify-between">
<div className="flex items-start gap-4 z-10 w-full md:w-auto">
<span className="font-mono text-[10px] md:text-xs text-zinc-500 pt-2 md:pt-3">
                    (05)
                  </span>
<h3 className="text-3xl tracking-tight text-white group-hover:translate-x-4 transition-transform duration-300 font-google-sans-flex leading-none font-normal md:text-xl">
                    BRAND IDENTITY
                  </h3>
</div>
<div className="hidden md:block -translate-y-1/2 z-20 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none opacity-0 w-[280px] h-[360px] absolute top-1/2 right-32 scale-90">
<img alt="Brand Identity" className="w-full h-full object-contain shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d2005d-e242-4a4a-9081-aafa4b919c7c_800w.png"/>
</div>
<div className="z-10 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:rotate-90">
<svg fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 5v14M5 12h14"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-end md:mb-24 reveal-scroll font-google-sans-flex mb-0 gap-x-12 gap-y-12 items-start">
<div className=""></div>
<div className="md:text-right pb-2">
<p className="text-[10px] md:text-xs uppercase leading-relaxed font-medium text-black tracking-widest font-google-sans-flex max-w-sm ml-auto">
                A SELECTION OF IMMERSIVE DIGITAL EXPERIENCES CREATED FOR
                AMBITIOUS BRANDS AND FORWARD THINKING TEAMS.
              </p>
</div>
</div>
</div>
</section>

<section className="flex md:px-12 lg:pt-12 lg:pl-12 z-20 bg-black w-full pt-12 pr-6 pb-12 pl-6 relative justify-center">
<div className="w-full max-w-[1400px]">
<div className="md:p-12 lg:p-16 text-zinc-900 bg-[#f9f9fa] w-full rounded-sm pt-8 pr-8 pb-8 pl-8 relative shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)]" style={{border: '1px solid rgba(200,200,205,0.2)'}}>
<div className="grid grid-cols-1 md:grid-cols-2 md:mb-24 lg:grid-cols-4 lg:gap-8 lg:mb-0 w-full mb-0"></div>
<svg className="lucide lucide-more-horizontal w-[12px] h-[15px]" data-icon-replaced="true" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '12px', height: '15px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle></svg><svg className="lucide lucide-more-horizontal w-[12px] h-[15px]" data-icon-replaced="true" fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '12px', height: '15px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 gap-x-y-0 gap-y-0 items-start">

<div className="flex flex-col h-full justify-start">
<h2 className="text-[clamp(3.5rem,6vw,6rem)] leading-none uppercase font-normal text-stone-950 tracking-tight font-google-sans-flex mt-0 mr-0 mb-0 ml-0">
                  LET'S TALK.
                </h2>
<p className="sm:text-lg leading-loose text-base font-light text-stone-950 font-google-sans-flex max-w-xl mt-8">
                  Tell us about your setup—support, bulk orders, or
                  partnerships. We reply within one business day.
                </p>
<div className="flex reveal-scroll md:pl-0 w-full mt-12 mb-12 pr-6 pl-0 justify-start">
<a className="inline-flex items-center justify-center uppercase hover:bg-neutral-800 group lg:text-sm text-xs font-medium text-stone-50 tracking-wide font-google-sans-flex bg-black rounded-none pt-5 pr-10 pb-5 pl-10 shadow-xl" href="/#contact">
                    Start a project
                    <svg className="group-hover:translate-x-1 transition-transform ml-3" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>

<div className="w-full">
<div className="" style={{padding: '75% 0 0 0', position: 'relative'}}>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1192204644?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} title="16-9"></iframe>
</div>
<div className="hidden opacity-0 transform translate-y-4 transition-all duration-700 ease-out py-16 text-center" id="solace-contact-success">
<div className="mx-auto h-16 w-16 rounded-none bg-white text-black flex items-center justify-center mb-6">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<p className="text-[10px] text-white font-mono uppercase tracking-widest mb-3">
                    Message sent
                  </p>
<h4 className="text-3xl font-light tracking-tight text-white uppercase font-google-sans-flex">
                    Thank you!
                  </h4>
<p className="mt-4 text-base text-white font-google-sans-flex font-light leading-loose">
                    Your message has been sent successfully. We will be in touch
                    shortly.
                  </p>
</div>

</div>
</div>
</div>
</div>
</section>
<section className="md:px-12 border-dashed bg-black max-w-[1400px] border-zinc-800 mr-auto ml-auto pt-24 pr-6 pb-32 pl-6" id="testimonials">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

<div className="">
<div className="border-dashed overflow-hidden border-zinc-800 border-b mb-16 pb-4">
<span className="uppercase block reveal-scroll text-xs text-zinc-500 tracking-widest font-mono">
                004. Testimonials
              </span>
</div>
<h2 className="text-[clamp(2.5rem,5vw,5.5rem)] uppercase leading-[1.05] reveal-scroll font-normal text-white tracking-tight font-google-sans-flex mb-8">
              Real stories from teams who transformed.
            </h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-[700px] overflow-hidden relative" style={{maskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 90%, transparent)'}}>

<div className="overflow-hidden">
<div className="space-y-6 animate-scroll-up hover:[animation-play-state:paused]">

<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-zinc-300 font-google-sans-flex">
                    "Ruslan was committed to high quality and great detail from
                    the start. He had great advice re what an optimum landing
                    page needed to contain, and what it needed to produce.
                    Highly recommend Ruslan, and will use him again"
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="block text-zinc-600 w-6 h-6 mb-6" height="24" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px', color: 'rgb(82, 82, 91)'}} width="24"></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-zinc-300 font-google-sans-flex">
                    "One of the best, a rare gem! I fully trust Ruslan, and have
                    enjoyed his help on multiple projects from small to large he
                    treats each with the same diligence, respect, and delivers
                    quality and timely work. His communication is prompt and he
                    is always willing to help. He goes above and beyond, and has
                    my highest recommendation for ant web design or development
                    projects."
                  </blockquote>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan and team are very skilled and passionate designers.
                    I really enjoyed working with them and look forward to
                    working more with them!"
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan excels in responsive web design, fast website
                    development, and SEO-friendly web design, creating websites
                    that perform well across devices and search engines. His
                    proficiency in WordPress website design allows for scalable
                    solutions that grow with businesses."
                  </blockquote>
</article>

<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Working with Ruslan and his team was a great experience. We
                    were on a tight timeline, and they stepped in and delivered
                    everything quickly without compromising quality. They were
                    responsive, easy to communicate with, and stayed focused on
                    getting the project across the finish line."
                  </blockquote>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "One of the best, a rare gem! I fully trust Ruslan, and have
                    enjoyed his help on multiple projects from small to large he
                    treats each with the same diligence, respect, and delivers
                    quality and timely work. His communication is prompt and he
                    is always willing to help. He goes above and beyond, and has
                    my highest recommendation for ant web design or development
                    projects."
                  </blockquote>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-dashed border-zinc-800">
<img alt="Priya Patel" className="h-10 w-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-800" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-light uppercase text-white tracking-tight">
                        Priya Patel
                      </div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                        Marketing Director
                      </div>
</div>
</div>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "From trial to rollout took under a week. Dashboards finally
                    match how our teams actually work."
                  </blockquote>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-dashed border-zinc-800">
<img alt="Jonas Weber" className="h-10 w-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-800" src="https://images.unsplash.com/photo-1546456073-6712f79251bb?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-light uppercase text-white tracking-tight">
                        Jonas Weber
                      </div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                        Operations Lead
                      </div>
</div>
</div>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Switching platforms was our best decision this
                    year—intuitive, secure, and measurable results."
                  </blockquote>
<div className="mt-8 flex items-center gap-4 pt-6 border-t border-dashed border-zinc-800">
<img alt="Carlos Rivera" className="h-10 w-10 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-800" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-light uppercase text-white tracking-tight">
                        Carlos Rivera
                      </div>
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mt-1">
                        CEO
                      </div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden hidden sm:block">
<div className="space-y-6 animate-scroll-down hover:[animation-play-state:paused]" style={{transform: 'translateY(-50%)'}}>

<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan and team are very skilled and passionate designers.
                    I really enjoyed working with them and look forward to
                    working more with them!"
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "One of the best, a rare gem! I fully trust Ruslan, and have
                    enjoyed his help on multiple projects from small to large he
                    treats each with the same diligence, respect, and delivers
                    quality and timely work. His communication is prompt and he
                    is always willing to help. He goes above and beyond, and has
                    my highest recommendation for ant web design or development
                    projects."
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan was committed to high quality and great detail from
                    the start. He had great advice re what an optimum landing
                    page needed to contain, and what it needed to produce.
                    Highly recommend Ruslan, and will use him again"
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Working with Ruslan and his team was a great experience. We
                    were on a tight timeline, and they stepped in and delivered
                    everything quickly without compromising quality. They were
                    responsive, easy to communicate with, and stayed focused on
                    getting the project across the finish line."
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan and team are very skilled and passionate designers.
                    I really enjoyed working with them and look forward to
                    working more with them!"
                  </blockquote>
</article>

<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-zinc-300 font-google-sans-flex">
                    "Working with Ruslan and his team was a great experience. We
                    were on a tight timeline, and they stepped in and delivered
                    everything quickly without compromising quality. They were
                    responsive, easy to communicate with, and stayed focused on
                    getting the project across the finish line. "
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-zinc-300 font-google-sans-flex">
                    "Great work with Ruslan once again. Good eye for detail in
                    figma designs and super flexible for ever-changing client
                    needs."
                  </blockquote>
</article>
<article className="group border-dashed hover:bg-white/[0.04] transition-colors duration-500 border-zinc-800 border rounded-sm pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="block text-zinc-600 w-6 h-6 mb-6" height="24" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px', color: 'rgb(82, 82, 91)'}} width="24"></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-zinc-300 font-google-sans-flex">
                    "Ruslan excels in responsive web design, fast website
                    development, and SEO-friendly web design, creating websites
                    that perform well across devices and search engines. His
                    proficiency in WordPress website design allows for scalable
                    solutions that grow with businesses."
                  </blockquote>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Great work with Ruslan once again. Good eye for detail in
                    figma designs and super flexible for ever-changing client
                    needs."
                  </blockquote>
</article>
<article className="group rounded-sm border p-8 border-dashed border-zinc-800 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500">
<iconify-icon className="w-6 h-6 text-zinc-600 mb-6 block" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<blockquote className="text-[clamp(1rem,1.2vw,1.125rem)] text-zinc-300 font-light leading-relaxed">
                    "Ruslan is super professional and a pleaser to work with, he
                    has been a true partner especially considering our tight
                    schedules, he was always there when we needed him and we
                    never felt like were left hanging. will highly recommend!"
                  </blockquote>
</article>
</div>
</div>
</div>
</div>
</section>
<section className="border-dashed md:pl-24 md:pr-24 md:pb-16 z-20 bg-white w-full border-zinc-200 border-t pt-32 pr-6 pb-16 pl-6 relative" id="work">
<div className="max-w-[1400px] mr-auto ml-auto space-y-8 gap-x-8 gap-y-16">
<div className="grid grid-cols-1 reveal-scroll md:grid-cols-[1fr_auto] md:items-end md:mb-24 font-google-sans-flex mb-8 items-start">
<div className="">
<h2 className="text-[clamp(2.5rem,5vw,5.5rem)] uppercase leading-[1.05] font-normal text-black tracking-tight font-google-sans-flex mb-0">
                Featured Work.
              </h2>
</div>
<div className="md:text-right pt-4 pb-2">
<p className="text-[10px] md:text-xs uppercase leading-relaxed font-medium text-neutral-500 tracking-widest font-google-sans-flex max-w-sm ml-auto">
                A SELECTION OF IMMERSIVE DIGITAL EXPERIENCES CREATED FOR
                AMBITIOUS BRANDS AND FORWARD THINKING TEAMS.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12">
<a className="group block reveal-scroll" href="/vh-atelier-collective" onmouseenter="const v = this.querySelector('video'); if(v) { const p = v.play(); if(p !== undefined) p.catch(()=&gt;{}); }" onmouseleave="const v = this.querySelector('video'); if(v) v.pause();">
<div className="overflow-hidden aspect-[4/3] bg-zinc-100 w-full mb-6 relative gap-x-3 gap-y-3">
<img alt="Of The Oak" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e025754a-7514-417d-81cc-899e70f7230e_1600w.png"/>
<video className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" loop="" muted="" playsinline="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/ee77abb2-b67d-4ed9-bbf1-155a06f3baad/7471d1d9-416b-482d-84c5-cf553d6138b7-16-9-1-1-.mp4?v=1779778698738"></video>
</div>
<div className="flex flex-col gap-2">
<p className="text-[10px] md:text-[11px] uppercase font-light text-zinc-600 tracking-widest font-google-sans-flex">
                  CONCEPT • WEB • DESIGN • DEVELOPMENT • photo • ANIMATION
                </p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg className="w-6 h-6 text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<h3 className="uppercase md:text-xl text-2xl font-normal text-black tracking-tight font-google-sans-flex">
                    VH atelier collective
                  </h3>
</div>
</div>
</a>
<a className="group block reveal-scroll" href="#">
<div className="overflow-hidden aspect-[4/3] bg-zinc-100 w-full mb-6 relative gap-x-3 gap-y-3">
<img alt="Of The Oak" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/306f3d27-4917-458a-bf86-f373e266dced_1600w.png"/>
</div>
<div className="flex flex-col gap-2 gap-x-3 gap-y-3">
<p className="text-[10px] md:text-[11px] uppercase font-light text-zinc-600 tracking-widest font-google-sans-flex">
                  WEB • DESIGN • DEVELOPMENT
                </p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg className="w-6 h-6 text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<h3 className="uppercase md:text-xl text-2xl font-normal text-black tracking-tight font-google-sans-flex">
                    Plastic Collective
                  </h3>
</div>
</div>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-12 gap-x-8 gap-y-16">
<a className="group block reveal-scroll" href="#">
<div className="overflow-hidden mb-6 relative w-full aspect-[4/3] bg-zinc-100">
<img alt="Oryzo AI" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c878fb49-99ea-4a15-92ff-957a3fa92b03_1600w.png"/>
</div>
<div className="flex flex-col gap-2">
<p className="text-[10px] md:text-[11px] uppercase font-light text-zinc-600 tracking-widest font-google-sans-flex">
                  CONCEPT • WEB • DESIGN • DEVELOPMENT • 3D • ANIMATION
                </p>
<div className="flex items-center gap-3">
<svg className="w-6 h-6 text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<h3 className="uppercase md:text-xl text-2xl font-normal text-black tracking-tight font-google-sans-flex">
                    Gym
                  </h3>
</div>
</div>
</a>
<a className="group block reveal-scroll" href="#">
<div className="overflow-hidden mb-6 relative w-full aspect-[4/3] bg-zinc-100">
<img alt="Of The Oak" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c90550a6-9d27-4cf6-9f9a-6ee5757d6c6a_1600w.png"/>
</div>
<div className="flex flex-col gap-2">
<p className="text-[10px] md:text-[11px] uppercase font-light text-zinc-600 tracking-widest font-google-sans-flex">
                  WEB • DESIGN • DEVELOPMENT • graphic • brand identity
                </p>
<div className="flex items-center gap-3">
<svg className="w-6 h-6 text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<h3 className="uppercase md:text-xl text-2xl font-normal text-black tracking-tight font-google-sans-flex">
                    Reconext
                  </h3>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="md:pl-24 md:pr-24 bg-[#ffffff] max-w-full mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="faq">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] lg:gap-44 gap-x-16 gap-y-6 items-start">
<div className="">
<div className="border-dashed overflow-hidden text-neutral-500 border-neutral-500 border-b mb-8 pb-4">
<span className="uppercase block reveal-scroll text-xs text-neutral-500 tracking-widest font-mono">
                004. FAQ
              </span>
</div>
<h2 className="text-[clamp(2.5rem,5vw,5.5rem)] uppercase leading-[1.05] reveal-scroll font-normal text-[#000000] tracking-tight mb-8">
              Frequent
              <br/>
              Questions.
            </h2>
<p className="text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed reveal-scroll font-light text-[#000000] font-google-sans-flex">
              Everything you need to know about our process, capabilities, and
              how we collaborate with ambitious teams.
            </p>
</div>
<div className="flex flex-col border-dashed border-zinc-800">
<details className="group border-dashed cursor-pointer pt-8 pb-8" open="">
<summary className="flex text-[clamp(1.125rem,1.5vw,1.375rem)] uppercase list-none [&amp;::-webkit-details-marker]:hidden font-light text-[#000000] tracking-tight items-center justify-between">
<span className="font-medium tracking-tight font-google-sans-flex bg-slate-50/0">
                  What is your typical project timeline?
                </span>
<span className="group-open:rotate-45 transition-transform duration-300 flex-shrink-0 text-zinc-500 ml-4">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 5v14"></path>
<path className="" d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="text-[clamp(1rem,1.2vw,1.125rem)] border-dashed group-open:border-zinc-700 transition-colors leading-relaxed md:pl-0 font-light text-zinc-400 border-zinc-800/0 mt-6 pl-0">
                Most branding and web design projects take between 6 to 8 weeks
                from kickoff to launch. Complex digital products or spatial
                design projects may require 3 to 4 months. We provide a detailed
                schedule during the discovery phase.
              </div>
</details>
<details className="group border-dashed cursor-pointer pt-8 pb-8">
<summary className="flex text-[clamp(1.125rem,1.5vw,1.375rem)] uppercase list-none [&amp;::-webkit-details-marker]:hidden font-light text-[#000000] tracking-tight items-center justify-between">
<span className="font-medium tracking-tight font-google-sans-flex">
                  Do you work with early-stage startups?
                </span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300 flex-shrink-0 ml-4">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(113, 113, 122)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 5v14"></path>
<path className="" d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="text-[clamp(1rem,1.2vw,1.125rem)] border-dashed group-open:border-zinc-700 transition-colors leading-relaxed md:pl-0 font-light text-zinc-400 border-zinc-800/0 mt-6 pl-0">
                Yes. We frequently partner with seed and Series A startups to
                build foundational brand identities and high-converting digital
                experiences that help secure further funding and user growth.
              </div>
</details>
<details className="group border-dashed cursor-pointer border-neutral-500 pt-8 pb-8">
<summary className="flex text-[clamp(1.125rem,1.5vw,1.375rem)] uppercase list-none [&amp;::-webkit-details-marker]:hidden font-light text-[#000000] tracking-tight items-center justify-between">
<span className="font-medium font-google-sans-flex">
                  How does your pricing structure work?
                </span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300 flex-shrink-0 ml-4">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="text-[clamp(1rem,1.2vw,1.125rem)] border-dashed group-open:border-zinc-700 transition-colors leading-relaxed md:pl-0 font-light text-zinc-400 border-zinc-800/0 mt-6 pl-0">
                We value transparency and typically work on a fixed-fee basis
                per project phase. This ensures predictability for your budget.
                For ongoing support, we offer tailored retainer agreements.
              </div>
</details>
<details className="group border-dashed cursor-pointer border-neutral-500 pt-8 pb-8">
<summary className="flex text-[clamp(1.125rem,1.5vw,1.375rem)] uppercase list-none [&amp;::-webkit-details-marker]:hidden font-light text-[#000000] tracking-tight items-center justify-between">
<span className="font-medium font-google-sans-flex">
                  Can you integrate with our existing tech stack?
                </span>
<span className="text-zinc-500 group-open:rotate-45 transition-transform duration-300 flex-shrink-0 ml-4">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="text-[clamp(1rem,1.2vw,1.125rem)] border-dashed group-open:border-zinc-700 transition-colors leading-relaxed md:pl-0 font-light text-zinc-400 border-zinc-800/0 mt-6 pl-0">
                Absolutely. Our development team is proficient in modern
                frameworks and headless CMS architectures. We seamlessly
                integrate with tools like Stripe, Salesforce, HubSpot, and
                custom backend systems.
              </div>
</details>
</div>
</div>
</section>

<section className="flex md:pt-24 md:pl-24 md:pr-24 bg-black w-full rounded-none mr-auto ml-auto pt-24 pr-6 pb-16 pl-6 justify-center" id="contact">
<div className="w-full max-w-[1400px] mt-10">
<div className="relative overflow-hidden bg-black w-full">


<div className="z-10 sm:p-12 md:p-16 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 bg-black w-full pt-8 pr-0 pb-8 pl-0 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 items-start">

<div className="flex flex-col h-full justify-start">
<h2 className="text-[clamp(3.5rem,5vw,5.5rem)] leading-[1.05] uppercase font-normal text-white tracking-tight font-google-sans-flex mt-0 mr-0 mb-0 ml-0">
                    LET'S TALK.
                  </h2>
<p className="sm:text-lg leading-loose text-base font-light text-white font-google-sans-flex max-w-xl mt-8">
                    Tell us about your setup—support, bulk orders, or
                    partnerships. We reply within one business day.
                  </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 gap-x-8 gap-y-8">
<div className="flex flex-col gap-4">
<div className="h-14 w-14 rounded-none bg-transparent border border-white/20 flex items-center justify-center text-white">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="font-google-sans-flex">
<p className="uppercase text-sm font-medium text-white tracking-wide font-google-sans-flex">
                          Email
                        </p>
<p className="leading-loose text-sm font-light text-white font-google-sans-flex mt-2">
                          ruslan@horizoners.design
                        </p>
</div>
</div>
</div>
<div className="border-dashed border-zinc-800 border-t mt-12 pt-8 pb-12">
<div className="inline-flex gap-5 gap-x-5 gap-y-5 items-center">
<img alt="Team lead" className="w-14 h-14 object-cover rounded-none" onclick="window.location.href='https://contra.com/ruslansubbota'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53cd72b9-a5fa-4832-b1db-4d2140dde4a5_320w.png"/>
<a className="inline-flex items-center justify-center hover:bg-zinc-200 transition-colors text-black bg-white w-14 h-14 rounded-none ml-auto" href="https://www.linkedin.com/in/ruslan-subbota/">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '32px', height: '32px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#000000"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center hover:bg-zinc-200 transition-colors text-black bg-white w-14 h-14 rounded-none ml-auto" href="https://www.threads.com/@horizoners.design">
<svg className="w-[32px] h-[32px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="threads" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '32px', height: '32px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79c-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a14 14 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388q.163.07.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69q-.362 0-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221" fill="#000000"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="w-full">
<div className="transition-all duration-500 ease-in-out" id="form-container-emotqyqp">
<div className="mb-10 hidden lg:block">
<p className="text-[10px] text-white font-mono uppercase tracking-widest mb-3">
                        Horizoners Support
                      </p>
<h3 className="text-3xl font-light tracking-tight text-white uppercase font-google-sans-flex">
                        Send a Message
                      </h3>
</div>
<form className="z-10 relative space-y-6" id="horizoners-contact-form" method="POST">
<div className="">
<label className="block uppercase text-xs text-white tracking-widest font-mono mb-3" htmlFor="ct-name">
                          Your name
                          <span className="text-white">*</span>
</label>
<input autocomplete="name" className="w-full px-0 py-4 text-[clamp(1rem,1.2vw,1.125rem)] bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white focus:ring-0 focus:outline-none placeholder:text-zinc-500 font-google-sans-flex transition-colors text-white" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs text-white font-mono uppercase tracking-widest mb-3" htmlFor="ct-email">
                          E‑mail
                          <span className="text-white">*</span>
</label>
<input autocomplete="email" className="w-full px-0 py-4 text-[clamp(1rem,1.2vw,1.125rem)] bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white focus:ring-0 focus:outline-none placeholder:text-zinc-500 font-google-sans-flex transition-colors text-white" id="ct-email" name="email" placeholder="you@horizoners.design" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-white font-mono uppercase tracking-widest mb-3" htmlFor="ct-msg">
                          Message
                        </label>
<textarea className="w-full px-0 py-4 text-[clamp(1rem,1.2vw,1.125rem)] bg-transparent border-0 border-b border-white/20 rounded-none focus:border-white focus:ring-0 focus:outline-none placeholder:text-zinc-500 font-google-sans-flex transition-colors resize-none text-white" id="ct-msg" name="message" placeholder="How can we help?" rows="5"></textarea>
</div>
<button className="inline-flex hover:bg-zinc-200 transition-all uppercase cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed text-sm font-medium text-black tracking-widest font-google-sans-flex bg-white w-full rounded-none mt-4 pt-5 pr-8 pb-5 pl-8 items-center justify-center" id="horizoners-submit-btn" type="submit">
<span className="text-sm font-medium text-[#000000] tracking-wide font-google-sans-flex" id="horizoners-btn-text">
                          Send message
                        </span>
<svg fill="none" id="horizoners-btn-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', marginLeft: '12px', color: '#000'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-[11px] text-white font-google-sans-flex mt-6 leading-loose text-center px-4">
                        By submitting, you agree to our Terms and Privacy
                        Policy.
                      </p>
</form>
</div>
<div className="hidden opacity-0 translate-y-4 transition-all duration-700 ease-out py-16 text-center" id="horizoners-contact-success">
<div className="mx-auto h-16 w-16 bg-white text-black flex items-center justify-center mb-6">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '32px', height: '32px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<p className="text-[10px] text-white font-mono uppercase tracking-widest mb-3">
                      Message sent
                    </p>
<h4 className="text-3xl font-light tracking-tight text-white uppercase font-google-sans-flex">
                      Thank you!
                    </h4>
<p className="mt-4 text-base text-white font-google-sans-flex font-light leading-loose">
                      Your message has been sent successfully. We will be in
                      touch shortly.
                    </p>
</div>

</div>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-12 lg:px-24 z-20 flex bg-black w-full pt-12 pr-4 pb-24 pl-4 relative justify-center" id="contact">
<div className="w-full max-w-[1400px]">
<div className="md:p-12 lg:p-16 text-zinc-900 bg-[#f9f9fa] w-full rounded-sm pt-8 pr-8 pb-8 pl-8 relative shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)]" style={{border: '1px solid rgba(200,200,205,0.2)'}}>
<div className="grid grid-cols-1 w-full mb-16 gap-y-12 gap-x-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 md:mb-24">
<div className="flex flex-col">
<div className="mb-4 pb-4 border-b border-dashed border-zinc-300">
<h3 className="reveal-footer text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Discover
                  </h3>
</div>
<ul className="flex flex-col gap-3">
<li className="">
<a className="reveal-footer block text-[clamp(1rem,1.2vw,1.125rem)] uppercase hover:text-zinc-500 transition-colors font-light text-zinc-900 tracking-tight" href="/#about">
                      ABOUT
                    </a>
</li>
<li className="">
<a className="reveal-footer block text-[clamp(1rem,1.2vw,1.125rem)] uppercase hover:text-zinc-500 transition-colors font-light text-zinc-900 tracking-tight" href="/#services">
                      services
                    </a>
</li>
<li className="">
<a className="reveal-footer block text-[clamp(1rem,1.2vw,1.125rem)] uppercase hover:text-zinc-500 transition-colors font-light text-zinc-900 tracking-tight" href="/#studio">
                      testimonials
                    </a>
</li>
<li className="">
<a className="reveal-footer block text-[clamp(1rem,1.2vw,1.125rem)] uppercase hover:text-zinc-500 transition-colors font-light text-zinc-900 tracking-tight" href="/#work">
                      WORK
                    </a>
</li>
</ul>
</div>
<div className="flex flex-col">
<div className="mb-4 pb-4 border-b border-dashed border-zinc-300">
<h3 className="reveal-footer text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Help
                  </h3>
</div>
<ul className="flex flex-col gap-3 font-mono text-xs tracking-wider uppercase">
<li className="">
<a className="reveal-footer block hover:text-zinc-500 transition-colors text-zinc-900" href="/mailto:ruslan@horizoners.design">
                      ruslan@horizoners.design
                    </a>
</li>
</ul>
</div>
<div className="flex flex-col">
<div className="border-dashed border-zinc-300 border-b mb-4 pb-4">
<h3 className="reveal-footer text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Connect
                  </h3>
</div>
<ul className="flex flex-col gap-3 font-mono text-xs tracking-wider uppercase">
<li className="">
<a className="reveal-footer block hover:text-zinc-500 transition-colors text-zinc-900" href="https://www.linkedin.com/in/ruslan-subbota/">
                      LINKEDIN
                    </a>
</li>
<li className="">
<a className="reveal-footer block hover:text-zinc-500 transition-colors text-zinc-900" href="https://contra.com/ruslansubbota">
                      CONTRA
                    </a>
</li>
<li className="">
<a className="reveal-footer block hover:text-zinc-500 transition-colors text-zinc-900" href="https://www.threads.com/@horizoners.design">
                      threads
                    </a>
</li>
</ul>
</div>
</div>
<div className="w-full mb-8 lg:mb-12">
<div className="reveal-logo-footer w-full flex justify-center py-4">
<img alt="Horizers" className="w-full h-auto object-contain invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4aac1b0c-0a11-4af7-8b80-8fdbdd4adcb2_1600w.png"/>
</div>
</div>
<div className="w-full flex justify-between border-t border-dashed border-zinc-300 pt-6">
<p className="reveal-footer uppercase text-xs text-zinc-500 tracking-widest font-mono">
                © 2026 HORIZONERS
              </p>
<p className="reveal-footer text-xs text-zinc-500 font-mono uppercase tracking-widest">
                All rights reserved.
              </p>
</div>
</div>
</div>
</section>

</main>


    </>
  );
}
