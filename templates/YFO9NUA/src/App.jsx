import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      (function() {
        // Store original methods to restore later
        const originalRequestAnimationFrame = window.requestAnimationFrame;
        const originalSetTimeout = window.setTimeout;
        const originalSetInterval = window.setInterval;
        const originalGetContext = HTMLCanvasElement.prototype.getContext;
        
        // Disable requestAnimationFrame during loading
        window.requestAnimationFrame = function(callback) {
          // Return a fake ID and don't execute the callback
          return -1;
        };
        
        // Disable setTimeout for short intervals (likely animations)
        window.setTimeout = function(callback, delay) {
          // Only disable short timeouts that are likely animations
          if (delay < 100) {
            return -1;
          }
          return originalSetTimeout.apply(this, arguments);
        };
        
        // Disable setInterval (likely animations)
        window.setInterval = function(callback, delay) {
          // Disable all intervals during loading
          return -1;
        };
        
        // Disable canvas rendering
        HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
          const context = originalGetContext.call(this, contextType, contextAttributes);
          
          if (!context) return context;
          
          // For 2D context, override drawing methods
          if (contextType === '2d') {
            const originalMethods = {};
            const drawingMethods = [
              'clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText',
              'drawImage', 'putImageData', 'fill', 'stroke', 'arc', 'arcTo',
              'beginPath', 'closePath', 'lineTo', 'moveTo', 'quadraticCurveTo',
              'bezierCurveTo', 'rect', 'ellipse'
            ];
            
            drawingMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                originalMethods[method] = context[method];
                context[method] = function() {
                  // Do nothing - disable drawing during loading
                  return this;
                };
              }
            });
            
            // Store original methods for potential restoration
            context._originalMethods = originalMethods;
          }
          
          // For WebGL context, override key methods
          else if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
            const originalMethods = {};
            const webglMethods = [
              'clear', 'drawArrays', 'drawElements', 'useProgram', 'bindBuffer',
              'bindTexture', 'bindFramebuffer', 'viewport', 'enable', 'disable'
            ];
            
            webglMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                originalMethods[method] = context[method];
                context[method] = function() {
                  // Do nothing - disable WebGL operations during loading
                  return this;
                };
              }
            });
            
            // Store original methods for potential restoration
            context._originalMethods = originalMethods;
          }
          
          return context;
        };
        
        // Disable Three.js specific functionality
        const disableThreeJS = function() {
          // Wait for Three.js to potentially load
          setTimeout(() => {
            if (typeof THREE !== 'undefined') {
              // Override Three.js WebGLRenderer render method
              if (THREE.WebGLRenderer) {
                const originalRender = THREE.WebGLRenderer.prototype.render;
                THREE.WebGLRenderer.prototype.render = function() {
                  // Do nothing - disable rendering during loading
                  return this;
                };
                THREE.WebGLRenderer.prototype._originalRender = originalRender;
              }
              
              // Override Animation Mixer
              if (THREE.AnimationMixer) {
                const originalUpdate = THREE.AnimationMixer.prototype.update;
                THREE.AnimationMixer.prototype.update = function() {
                  // Do nothing - disable animations during loading
                  return this;
                };
                THREE.AnimationMixer.prototype._originalUpdate = originalUpdate;
              }
            }
          }, 100);
        };
        
        // Apply Three.js disabling
        disableThreeJS();
        
        // Disable Spline functionality during loading
        const disableSpline = function() {
          // Hide any existing spline viewers immediately
          const hideSplineElements = () => {
            const splineSelectors = [
              'spline-viewer',
              '[data-spline]',
              'iframe[src*="spline.design"]',
              'iframe[src*="my.spline.design"]',
              'embed[src*="spline.design"]',
              'embed[src*="my.spline.design"]',
              'object[data*="spline.design"]',
              'object[data*="my.spline.design"]'
            ];
            
            splineSelectors.forEach(selector => {
              const elements = document.querySelectorAll(selector);
              elements.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
              });
            });
          };
          
          // Hide existing elements immediately
          hideSplineElements();
          
          // Monitor for new spline elements being added
          const observer = new MutationObserver(hideSplineElements);
          
          // Ensure document.body is available before observing
          if (document.body instanceof Node) {
            observer.observe(document.body, { 
              childList: true, 
              subtree: true,
              attributes: true,
              attributeFilter: ['src', 'data']
            });
          }
          
          // Disable Spline runtime if it exists
          if (typeof window.Spline !== 'undefined') {
            const originalSpline = window.Spline;
            window.Spline = function() {
              // Do nothing - disable Spline initialization during loading
              return {
                load: () => Promise.resolve(),
                setSize: () => {},
                dispose: () => {},
                play: () => {},
                pause: () => {},
                stop: () => {}
              };
            };
            window.Spline._originalSpline = originalSpline;
          }
          
          // Prevent new Spline instances from being created
          Object.defineProperty(window, 'Spline', {
            set: function(value) {
              // Store original but don't activate during loading
              window._SplineOriginal = value;
            },
            get: function() {
              // Return dummy implementation during loading
              return function() {
                return {
                  load: () => Promise.resolve(),
                  setSize: () => {},
                  dispose: () => {},
                  play: () => {},
                  pause: () => {},
                  stop: () => {}
                };
              };
            },
            configurable: true
          });
        };
        
        // Apply Spline disabling
        disableSpline();
        
        // Store restoration function globally (though we don't restore in this loading context)
        window._restoreCanvasAndAnimations = function() {
          window.requestAnimationFrame = originalRequestAnimationFrame;
          window.setTimeout = originalSetTimeout;
          window.setInterval = originalSetInterval;
          HTMLCanvasElement.prototype.getContext = originalGetContext;
          
          // Restore Three.js if available
          if (typeof THREE !== 'undefined') {
            if (THREE.WebGLRenderer && THREE.WebGLRenderer.prototype._originalRender) {
              THREE.WebGLRenderer.prototype.render = THREE.WebGLRenderer.prototype._originalRender;
            }
            if (THREE.AnimationMixer && THREE.AnimationMixer.prototype._originalUpdate) {
              THREE.AnimationMixer.prototype.update = THREE.AnimationMixer.prototype._originalUpdate;
            }
          }
          
          // Restore Spline if available
          if (window._SplineOriginal) {
            window.Spline = window._SplineOriginal;
          } else if (window.Spline && window.Spline._originalSpline) {
            window.Spline = window.Spline._originalSpline;
          }
          
          // Restore visibility of Spline elements
          const splineSelectors = [
            'spline-viewer',
            '[data-spline]',
            'iframe[src*="spline.design"]',
            'iframe[src*="my.spline.design"]',
            'embed[src*="spline.design"]',
            'embed[src*="my.spline.design"]',
            'object[data*="spline.design"]',
            'object[data*="my.spline.design"]'
          ];
          
          splineSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              el.style.display = '';
              el.style.visibility = '';
            });
          });
        };
      })();
    


      (function() {
        // Store original methods to restore later
        const originalRequestAnimationFrame = window.requestAnimationFrame;
        const originalSetTimeout = window.setTimeout;
        const originalSetInterval = window.setInterval;
        const originalGetContext = HTMLCanvasElement.prototype.getContext;
        
        // Disable requestAnimationFrame during loading
        window.requestAnimationFrame = function(callback) {
          // Return a fake ID and don't execute the callback
          return -1;
        };
        
        // Disable setTimeout for short intervals (likely animations)
        window.setTimeout = function(callback, delay) {
          // Only disable short timeouts that are likely animations
          if (delay < 100) {
            return -1;
          }
          return originalSetTimeout.apply(this, arguments);
        };
        
        // Disable setInterval (likely animations)
        window.setInterval = function(callback, delay) {
          // Disable all intervals during loading
          return -1;
        };
        
        // Disable canvas rendering
        HTMLCanvasElement.prototype.getContext = function(contextType, contextAttributes) {
          const context = originalGetContext.call(this, contextType, contextAttributes);
          
          if (!context) return context;
          
          // For 2D context, override drawing methods
          if (contextType === '2d') {
            const originalMethods = {};
            const drawingMethods = [
              'clearRect', 'fillRect', 'strokeRect', 'fillText', 'strokeText',
              'drawImage', 'putImageData', 'fill', 'stroke', 'arc', 'arcTo',
              'beginPath', 'closePath', 'lineTo', 'moveTo', 'quadraticCurveTo',
              'bezierCurveTo', 'rect', 'ellipse'
            ];
            
            drawingMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                originalMethods[method] = context[method];
                context[method] = function() {
                  // Do nothing - disable drawing during loading
                  return this;
                };
              }
            });
            
            // Store original methods for potential restoration
            context._originalMethods = originalMethods;
          }
          
          // For WebGL context, override key methods
          else if (contextType === 'webgl' || contextType === 'webgl2' || contextType === 'experimental-webgl') {
            const originalMethods = {};
            const webglMethods = [
              'clear', 'drawArrays', 'drawElements', 'useProgram', 'bindBuffer',
              'bindTexture', 'bindFramebuffer', 'viewport', 'enable', 'disable'
            ];
            
            webglMethods.forEach(method => {
              if (typeof context[method] === 'function') {
                originalMethods[method] = context[method];
                context[method] = function() {
                  // Do nothing - disable WebGL operations during loading
                  return this;
                };
              }
            });
            
            // Store original methods for potential restoration
            context._originalMethods = originalMethods;
          }
          
          return context;
        };
        
        // Disable Three.js specific functionality
        const disableThreeJS = function() {
          // Wait for Three.js to potentially load
          setTimeout(() => {
            if (typeof THREE !== 'undefined') {
              // Override Three.js WebGLRenderer render method
              if (THREE.WebGLRenderer) {
                const originalRender = THREE.WebGLRenderer.prototype.render;
                THREE.WebGLRenderer.prototype.render = function() {
                  // Do nothing - disable rendering during loading
                  return this;
                };
                THREE.WebGLRenderer.prototype._originalRender = originalRender;
              }
              
              // Override Animation Mixer
              if (THREE.AnimationMixer) {
                const originalUpdate = THREE.AnimationMixer.prototype.update;
                THREE.AnimationMixer.prototype.update = function() {
                  // Do nothing - disable animations during loading
                  return this;
                };
                THREE.AnimationMixer.prototype._originalUpdate = originalUpdate;
              }
            }
          }, 100);
        };
        
        // Apply Three.js disabling
        disableThreeJS();
        
        // Disable Spline functionality during loading
        const disableSpline = function() {
          // Hide any existing spline viewers immediately
          const hideSplineElements = () => {
            const splineSelectors = [
              'spline-viewer',
              '[data-spline]',
              'iframe[src*="spline.design"]',
              'iframe[src*="my.spline.design"]',
              'embed[src*="spline.design"]',
              'embed[src*="my.spline.design"]',
              'object[data*="spline.design"]',
              'object[data*="my.spline.design"]'
            ];
            
            splineSelectors.forEach(selector => {
              const elements = document.querySelectorAll(selector);
              elements.forEach(el => {
                el.style.display = 'none';
                el.style.visibility = 'hidden';
              });
            });
          };
          
          // Hide existing elements immediately
          hideSplineElements();
          
          // Monitor for new spline elements being added
          const observer = new MutationObserver(hideSplineElements);
          
          // Ensure document.body is available before observing
          if (document.body instanceof Node) {
            observer.observe(document.body, { 
              childList: true, 
              subtree: true,
              attributes: true,
              attributeFilter: ['src', 'data']
            });
          }
          
          // Disable Spline runtime if it exists
          if (typeof window.Spline !== 'undefined') {
            const originalSpline = window.Spline;
            window.Spline = function() {
              // Do nothing - disable Spline initialization during loading
              return {
                load: () => Promise.resolve(),
                setSize: () => {},
                dispose: () => {},
                play: () => {},
                pause: () => {},
                stop: () => {}
              };
            };
            window.Spline._originalSpline = originalSpline;
          }
          
          // Prevent new Spline instances from being created
          Object.defineProperty(window, 'Spline', {
            set: function(value) {
              // Store original but don't activate during loading
              window._SplineOriginal = value;
            },
            get: function() {
              // Return dummy implementation during loading
              return function() {
                return {
                  load: () => Promise.resolve(),
                  setSize: () => {},
                  dispose: () => {},
                  play: () => {},
                  pause: () => {},
                  stop: () => {}
                };
              };
            },
            configurable: true
          });
        };
        
        // Apply Spline disabling
        disableSpline();
        
        // Store restoration function globally (though we don't restore in this loading context)
        window._restoreCanvasAndAnimations = function() {
          window.requestAnimationFrame = originalRequestAnimationFrame;
          window.setTimeout = originalSetTimeout;
          window.setInterval = originalSetInterval;
          HTMLCanvasElement.prototype.getContext = originalGetContext;
          
          // Restore Three.js if available
          if (typeof THREE !== 'undefined') {
            if (THREE.WebGLRenderer && THREE.WebGLRenderer.prototype._originalRender) {
              THREE.WebGLRenderer.prototype.render = THREE.WebGLRenderer.prototype._originalRender;
            }
            if (THREE.AnimationMixer && THREE.AnimationMixer.prototype._originalUpdate) {
              THREE.AnimationMixer.prototype.update = THREE.AnimationMixer.prototype._originalUpdate;
            }
          }
          
          // Restore Spline if available
          if (window._SplineOriginal) {
            window.Spline = window._SplineOriginal;
          } else if (window.Spline && window.Spline._originalSpline) {
            window.Spline = window.Spline._originalSpline;
          }
          
          // Restore visibility of Spline elements
          const splineSelectors = [
            'spline-viewer',
            '[data-spline]',
            'iframe[src*="spline.design"]',
            'iframe[src*="my.spline.design"]',
            'embed[src*="spline.design"]',
            'embed[src*="my.spline.design"]',
            'object[data*="spline.design"]',
            'object[data*="my.spline.design"]'
          ];
          
          splineSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              el.style.display = '';
              el.style.visibility = '';
            });
          });
        };
      })();
    


    // Initialize Lucide icons
    lucide.createIcons();

    // Color selector functionality
    const colorDots = document.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
      dot.addEventListener('click', function() {
        colorDots.forEach(d => d.classList.remove('ring-2', 'ring-offset-2', 'ring-slate-900/50'));
        this.classList.add('ring-2', 'ring-offset-2', 'ring-slate-900/50');
      });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('[class*="rounded-2xl"]');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-7xl rounded-3xl bg-white shadow-2xl shadow-slate-200/50 overflow-hidden animate-fade-in">

<header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-b border-slate-100 bg-gradient-to-r from-slate-50/50 to-transparent">

<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg">
<svg className="lucide lucide-zap h-5 w-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<span className="text-xl tracking-tight font-geist">ElectroFleet</span>
<p className="text-xs text-slate-500 font-geist">Vehicle Management</p>
</div>
</div>

<nav className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
<button className="rounded-lg bg-white px-4 py-2 text-sm text-slate-900 shadow-sm font-geist">Dashboard</button>
<button className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-white/50 font-geist">Analytics</button>
<button className="rounded-lg px-4 py-2 text-sm text-slate-600 hover:bg-white/50 font-geist">Settings</button>
</nav>

<div className="flex items-center gap-2">
<button className="h-10 w-10 items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-200 hidden sm:flex">
<svg className="lucide lucide-bell h-4 w-4 text-slate-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-colors duration-200 flex">
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
</div>
</header>

<main className="p-6 sm:p-8">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 animate-slide-up" style={{animationDelay: '0.1s'}}>

<div className="lg:col-span-8 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="">
<h1 className="sm:text-4xl text-3xl font-medium text-slate-900 tracking-tighter font-geist">Porshe Taycan</h1>
<div className="flex items-center gap-4 mt-2">
<p className="text-sm text-slate-500 font-geist">VIN: E4AXX</p>
<div className="flex items-center gap-1">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
<span className="text-sm text-emerald-600 font-geist">Active</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 text-sm">
<div className="text-center">
<p className="text-slate-900 font-geist">89%</p>
<p className="text-slate-500 font-geist">Battery</p>
</div>
<div className="text-center">
<p className="text-slate-900 font-geist">412</p>
<p className="text-slate-500 font-geist">Range (km)</p>
</div>
</div>
</div>

<div className="flex items-start gap-4 rounded-xl border border-slate-200 p-4 sm:p-5 bg-gradient-to-r from-slate-50/50 to-transparent hover:shadow-md transition-shadow duration-200">
<div className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-100">
<svg className="lucide lucide-gauge h-6 w-6 text-blue-600" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="flex-1">
<p className="text-slate-900 font-geist">Tri-Motor Performance</p>
<p className="text-sm text-slate-600 leading-relaxed mt-1 font-geist">1,020 horsepower electric powertrain with torque vectoring. 0-100 km/h in 2.1 seconds with 628 km EPA range.</p>
</div>
</div>

<div className="relative group">
<img alt="Porshe Taycan" className="w-full h-64 sm:h-80 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300" src="https://images.unsplash.com/photo-1664111554202-85e89ef049cf?w=1080&amp;q=80" style={{transform: 'translateY(0px)'}}/>

<div className="absolute bottom-4 right-4 rounded-xl bg-white/90 backdrop-blur-sm p-4 shadow-lg border border-white/20">
<p className="text-xs mb-3 text-slate-700 font-geist">Available Colors:</p>
<div className="flex items-center gap-2">
<button className="color-dot h-6 w-6 rounded-full border-2 border-white bg-slate-900 ring-2 ring-offset-2 ring-slate-900/50 shadow-sm hover:scale-110 transition-transform"></button>
<button className="color-dot h-6 w-6 rounded-full border-2 border-white bg-slate-300 shadow-sm hover:scale-110 transition-transform"></button>
<button className="color-dot h-6 w-6 rounded-full border-2 border-white bg-red-500 shadow-sm hover:scale-110 transition-transform"></button>
<button className="color-dot h-6 w-6 rounded-full border-2 border-white bg-blue-600 shadow-sm hover:scale-110 transition-transform"></button>
<button className="color-dot h-6 w-6 rounded-full border-2 border-white bg-white shadow-sm hover:scale-110 transition-transform"></button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-row lg:flex-col gap-3 lg:justify-start lg:items-stretch items-center justify-center bg-slate-900 text-slate-200 rounded-xl p-4">
<button aria-label="Rotate 3D" className="h-12 w-12 lg:h-14 lg:w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105">
<svg className="lucide lucide-rotate-3d h-5 w-5 text-slate-300" data-lucide="rotate-3d" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"></path><path d="m15.194 13.707 3.814 1.86-1.86 3.814"></path><path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"></path></svg>
</button>
<button aria-label="Maximize View" className="h-12 w-12 lg:h-14 lg:w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105">
<svg className="lucide lucide-maximize h-5 w-5 text-slate-300" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
</button>
<button aria-label="Information" className="h-12 w-12 lg:h-14 lg:w-full rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:scale-105">
<svg className="lucide lucide-info h-5 w-5 text-slate-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</button>
<div className="mt-4 w-full bg-slate-800 rounded-xl border border-slate-700 shadow-sm p-4 text-sm text-slate-300 font-medium tracking-tight">
<h3 className="mb-2 text-slate-100 font-geist">Menu</h3>
<ul className="space-y-2">
<li className="">
<button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-150 font-geist">
<svg className="lucide lucide-layout-dashboard h-5 w-5 flex-shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h6v6H4zM4 14h6v6H4zM14 4h6v6h-6zM14 14h6v6h-6z"></path></svg>
          Dashboard
        </button>
</li>
<li className="">
<button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-150 font-geist">
<svg className="lucide lucide-bar-chart-2 h-5 w-5 flex-shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
          Analytics
        </button>
</li>
<li className="">
<button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-150 font-geist">
<svg className="lucide lucide-settings h-5 w-5 flex-shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09A1.65 1.65 0 0 0 9 3.6V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1z"></path></svg>
          Settings
        </button>
</li>
<li className="">
<button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-150 font-geist">
<svg className="lucide lucide-user h-5 w-5 flex-shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-3-3.87"></path><path d="M4 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
          Profile
        </button>
</li>
<li className="">
<button className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-slate-700 transition-colors duration-150 font-geist">
<svg className="lucide lucide-help-circle h-5 w-5 flex-shrink-0 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 1.5-2 2.5-2 2.5"></path><line x1="12" x2="12" y1="17" y2="17"></line></svg>
          Help &amp; Support
        </button>
</li>
</ul>
</div>
</div>
</section>

<section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 animate-slide-up" style={{animationDelay: '0.3s'}}>

<div className="xl:col-span-4 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{transform: 'translateY(0px)'}}>
<div className="flex items-start justify-between mb-4">
<h2 className="text-slate-900 font-geist">Energy Consumption</h2>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl text-slate-900 font-geist">18.4</span>
<span className="text-lg text-slate-500 font-geist">kWh/100km</span>
</div>
<div className="space-y-4 text-sm mb-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-slate-700 font-geist">Highway</span>
</div>
<span className="text-slate-900 font-geist">15.2 kWh</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
<span className="text-slate-700 font-geist">City</span>
</div>
<span className="text-slate-900 font-geist">21.8 kWh</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-purple-500"></span>
<span className="text-slate-700 font-geist">Regenerative</span>
</div>
<span className="text-emerald-600 font-geist">-3.2 kWh</span>
</div>
</div>

<div className="grid grid-cols-12 gap-1 h-16 items-end">
<div className="bg-emerald-300 rounded-t-sm h-8"></div>
<div className="bg-emerald-400 rounded-t-sm h-12"></div>
<div className="bg-emerald-300 rounded-t-sm h-6"></div>
<div className="bg-emerald-500 rounded-t-sm h-14"></div>
<div className="bg-emerald-400 rounded-t-sm h-10"></div>
<div className="bg-emerald-600 rounded-t-sm h-16"></div>
<div className="bg-emerald-500 rounded-t-sm h-12"></div>
<div className="bg-emerald-400 rounded-t-sm h-8"></div>
<div className="bg-emerald-300 rounded-t-sm h-6"></div>
<div className="bg-emerald-400 rounded-t-sm h-10"></div>
<div className="bg-emerald-500 rounded-t-sm h-14"></div>
<div className="bg-emerald-400 rounded-t-sm h-9"></div>
</div>
</div>

<div className="xl:col-span-5 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" style={{transform: 'translateY(0px)'}}>
<div className="relative h-32">
<img alt="Dashboard" className="absolute inset-0 h-full w-full object-cover opacity-40" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1080&amp;q=80"/>
<div className="relative z-10 h-full flex items-center justify-center text-white">
<div className="text-center">
<span className="text-5xl font-medium tracking-tighter font-geist">125</span>
<p className="text-sm uppercase tracking-wider mt-1 font-geist">km/h</p>
</div>
</div>
</div>
<div className="p-6 bg-white">
<div className="flex items-start justify-between mb-4">
<h2 className="text-slate-900 font-geist">Driving Insights</h2>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="space-y-4 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-700 font-geist">Efficiency Score</span>
<span className="text-emerald-600 font-geist">8.7/10</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-700 font-geist">Trip Distance</span>
<span className="text-slate-900 font-geist">247 km</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-700 font-geist">Autopilot Usage</span>
<span className="text-slate-900 font-geist">73%</span>
</div>
</div>

<div className="mt-6 h-2 rounded-full bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400"></div>
<div className="mt-3 flex justify-between text-xs text-slate-500">
<span className="font-geist">Today</span>
<span className="font-geist">This Week</span>
</div>
</div>
</div>

<div className="xl:col-span-3 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 border border-slate-100 shadow-lg hover:shadow-xl transition-shadow duration-300" style={{transform: 'translateY(0px)'}}>
<div className="flex items-start justify-between mb-4">
<h2 className="text-slate-900 font-geist">System Health</h2>
<a className="text-xs text-blue-600 hover:text-blue-800 transition-colors font-geist" href="#">View all</a>
</div>
<div className="mb-4">
<span className="text-4xl text-slate-900 font-geist">1</span>
<p className="text-sm text-slate-600 font-geist">alert pending</p>
</div>

<div className="space-y-3 mb-6">
<div>
<div className="flex justify-between text-xs text-slate-600 mb-1">
<span className="font-geist">Battery Health</span>
<span className="font-geist">98%</span>
</div>
<div className="h-2 bg-slate-200 rounded-full">
<div className="h-2 bg-emerald-500 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-600 mb-1">
<span className="font-geist">Motor Performance</span>
<span className="font-geist">94%</span>
</div>
<div className="h-2 bg-slate-200 rounded-full">
<div className="h-2 bg-emerald-500 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-slate-600 mb-1">
<span className="font-geist">Software Update</span>
<span className="font-geist">Pending</span>
</div>
<div className="h-2 bg-slate-200 rounded-full">
<div className="h-2 bg-amber-400 rounded-full" style={{width: '65%'}}></div>
</div>
</div>
</div>

<div className="text-xs text-slate-600">
<p className="font-geist">Next service in <span className="text-slate-900 font-geist">8,500 km</span></p>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
