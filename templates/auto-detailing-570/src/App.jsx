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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
red: '#DC2626',
dark: '#0A0A0A',
gray: '#171717',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white" style={{}}>PM <span className="text-red-600" style={{}}>.</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400" style={{}}>
<a className="hover:text-white transition-colors duration-300" href="#uslugi" style={{}}>Oferta</a>
<a className="hover:text-white transition-colors duration-300" href="#o-nas" style={{}}>O nas</a>
<a className="hover:text-white transition-colors duration-300" href="#realizacje" style={{}}>Realizacje</a>
<a className="hover:text-white transition-colors duration-300" href="#kontakt" style={{}}>Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white bg-white/5 px-4 py-2 border border-white/10 hover:border-red-600 hover:bg-red-600/10 transition-all duration-300 group rounded-sm" href="tel:+48509869243" style={{}}>
<i className="w-4 h-4 text-red-600 group-hover:text-red-500" data-lucide="phone"></i>
                +48 509 869 243
            </a>
<button className="md:hidden text-white" style={{}}>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Car Detail" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/30" style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" style={{}}></div>
</div>
<div className="w-full max-w-7xl z-10 mt-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex uppercase text-xs font-medium text-red-500 tracking-wide bg-red-600/10 border-red-600/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" style={{}}></span>
    Premium Auto Detailing
  </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-semibold text-white tracking-tighter mb-6">
    Profesjonalna <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-400 to-neutral-600" style={{}}>Kosmetyka Samochodowa</span>
</h1>
<div className="flex flex-wrap gap-4 text-sm md:text-base text-neutral-400 mb-10 font-medium tracking-wide" style={{}}>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="shield-check"></i> FOLIE PPF</span>
<span className="text-neutral-700" style={{}}>|</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="sparkles"></i> KOREKTA LAKIERU</span>
<span className="text-neutral-700" style={{}}>|</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-red-600" data-lucide="wand-2"></i> POWŁOKI OCHRONNE</span>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="group overflow-hidden text-sm font-medium text-white tracking-wide bg-red-600 z-0 rounded-sm pt-4 pr-8 pb-4 pl-8 relative" href="#uslugi">
<div className="group-hover:translate-x-0 transition-transform duration-300 ease-out z-0 bg-neutral-900 w-full h-full absolute top-0 right-0 bottom-0 left-0 translate-x-[-100%]">
</div>
<span className="z-10 flex items-center gap-2 group-hover:text-white transition-colors relative">
                        Zobacz ofertę 
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</span>
</a>
<a className="px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide hover:bg-white hover:text-neutral-950 transition-all duration-300 rounded-sm" href="#kontakt" style={{}}>
      Umów wizytę
    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
<i className="w-6 h-6 text-neutral-500" data-lucide="mouse"></i>
</div>
</header>

<section className="py-24 bg-neutral-950 relative" id="uslugi" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4" style={{}}>Nasza oferta</h2>
<p className="text-neutral-400 max-w-md text-sm leading-relaxed" style={{}}>Kompleksowe usługi detailingu, które przywracają salonowy blask i chronią Twój samochód na lata.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 hover:text-red-500 transition-colors" href="#kontakt" style={{}}>
                    Pełna oferta <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800" style={{}}>

<div className="group hover:bg-neutral-900/80 transition-colors duration-500 bg-neutral-950 pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 rounded-sm" style={{}}>
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Folie PPF</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors" style={{}}>
        Zabezpiecz swój lakier przed piaskowaniem i zachowaj efekt salonowego wyglądu na długie lata.
    </p>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{}}></div>
</div>

<div className="group bg-neutral-950 p-8 hover:bg-neutral-900/80 transition-colors duration-500 relative" style={{}}>
<div className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 rounded-sm" style={{}}>
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Polerowanie lakieru</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors" style={{}}>
                        Przywróć dawny blask oraz zwiększ wartość swojego pojazdu dzięki wieloetapowej korekcie.
                    </p>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{}}></div>
</div>

<div className="group bg-neutral-950 p-8 hover:bg-neutral-900/80 transition-colors duration-500 relative" style={{}}>
<div className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 rounded-sm" style={{}}>
<i className="w-6 h-6" data-lucide="wand-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Powłoki ochronne</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors" style={{}}>
                        Twój samochód będzie lśnił, a jego pielęgnacja stanie się prosta i szybka. Ceramika i elastomery.
                    </p>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{}}></div>
</div>

<div className="group bg-neutral-950 p-8 hover:bg-neutral-900/80 transition-colors duration-500 relative" style={{}}>
<div className="w-12 h-12 flex items-center justify-center bg-neutral-900 text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300 border border-neutral-800 rounded-sm" style={{}}>
<i className="w-6 h-6" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3" style={{}}>Pielęgnacja wnętrza</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors" style={{}}>
                        Bieżąca pielęgnacja oraz detailingowe czyszczenie skór kluczem do sukcesu perfekcyjnego wyglądu.
                    </p>
<div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="o-nas" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-red-600/30" style={{}}></div>
<div className="relative overflow-hidden group rounded-sm">
<img alt="Detailing Process" className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 object-cover" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 to-transparent opacity-60" style={{}}></div>
</div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-red-600/30" style={{}}></div>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-red-600" style={{}}></span>
<span className="text-red-600 text-xs font-semibold uppercase tracking-widest" style={{}}>O NAS</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8" style={{}}>
                        Pasja i precyzja <br/>
<span className="text-neutral-500" style={{}}>od 2015 roku.</span>
</h2>
<div className="space-y-6 text-neutral-400 text-sm md:text-base leading-relaxed" style={{}}>
<p>
                            Nazywam się <strong className="text-white" style={{}}>Patryk Moskal</strong> i jestem właścicielem PM Auto Detailing. Posiadamy wieloletnie doświadczenie związane z zaawansowaną i profesjonalną pielęgnacją pojazdów.
                        </p>
<p className="">
                            Każdy samochód traktujemy indywidualnie i z należnym szacunkiem. Jesteśmy <span className="text-red-500" style={{}}>akredytowanym punktem</span> aplikacji powłok ceramicznych oraz bezbarwnych folii ochronnych PPF najwyższej jakości.
                        </p>
<p className="">
                            Oferujemy m.in. renowację i zabezpieczenie lakieru, folie PPF, pielęgnację wnętrza oraz polerowanie reflektorów. Zapraszamy do kontaktu – dobierzemy usługę idealnie dopasowaną do Twoich potrzeb.
                        </p>
</div>
<div className="mt-10 flex items-center gap-8">
<div className="flex flex-col">
<span className="text-3xl font-bold text-white tracking-tight" style={{}}>8+</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide mt-1" style={{}}>Lat doświadczenia</span>
</div>
<div className="flex flex-col">
<span className="text-3xl font-bold text-white tracking-tight" style={{}}>100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wide mt-1" style={{}}>Zadowolonych klientów</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30" id="realizacje" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<span className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3" style={{}}>PORTFOLIO</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4" style={{}}>Wybrane realizacje</h2>
<p className="text-neutral-400 max-w-lg text-sm" style={{}}>
                    Zobacz efekty naszej pracy. Setki zabezpieczonych samochodów i zadowolonych klientów.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 md:row-span-2 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Lamborghini Urus Green" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="inline-flex text-[10px] uppercase font-semibold text-red-400 tracking-wide bg-red-500/20 border-red-500/30 border rounded-sm mb-3 pt-1 pr-2 pb-1 pl-2 backdrop-blur-md gap-x-2 gap-y-2 items-center" style={{transition: 'outline 0.1s ease-in-out'}}>
                            Featured Project
                        </div>
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight" style={{}}>Lamborghini Urus</h3>
<p className="text-neutral-300 text-sm font-medium" style={{}}>Full Body PPF • Korekta lakieru • Ceramika</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Mercedes Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white mb-1" style={{}}>Mercedes CLS</h3>
<p className="text-neutral-400 text-xs" style={{}}>Stylizacja Matowa PPF</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Chevrolet Corvette" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" style={{}}></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white mb-1" style={{}}>Corvette C8</h3>
<p className="text-neutral-400 text-xs" style={{}}>Ceramika 5-letnia</p>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Mustang" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2574&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" style={{}}></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white mb-1" style={{}}>Mustang GT</h3>
<p className="text-neutral-400 text-xs" style={{}}>Renowacja lakieru</p>
</div>
</div>

<div className="md:col-span-2 md:row-span-1 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Porsche 911" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" style={{}}></div>
<div className="absolute bottom-0 left-0 p-6 flex justify-between items-end w-full">
<div className="">
<h3 className="text-lg font-semibold text-white mb-1" style={{}}>Porsche 911 Turbo S</h3>
<p className="text-neutral-400 text-xs" style={{}}>Pakiet Full Front + Wnętrze</p>
</div>
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-red-600 transition-colors" style={{}}>
<i className="w-4 h-4 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer flex flex-col items-center justify-center text-center p-6 hover:bg-neutral-800 transition-colors" style={{}}>
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{}}>
<i className="w-6 h-6 text-red-600" data-lucide="camera"></i>
</div>
<h3 className="text-sm font-medium text-white" style={{}}>Zobacz backstage</h3>
<p className="text-xs text-neutral-500 mt-2" style={{}}>Sprawdź jak pracujemy na co dzień w naszym studio.</p>
</div>

<div className="md:col-span-1 md:row-span-1 group relative rounded-sm overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer" style={{}}>
<img alt="Detailing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" style={{}}></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-lg font-semibold text-white mb-1" style={{}}>Audi RS6</h3>
<p className="text-neutral-400 text-xs" style={{}}>Pełna korekta</p>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] hover:bg-[#166fe5] text-white text-sm font-medium tracking-wide rounded-sm transition-all duration-300 shadow-[0_0_20px_rgba(24,119,242,0.3)] hover:shadow-[0_0_30px_rgba(24,119,242,0.5)] group" href="https://facebook.com" style={{}} target="_blank">
<i className="w-5 h-5" data-lucide="facebook"></i>
                    Zobacz realizacje na Facebooku
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-950 pt-24 pb-24 relative" id="kontakt">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/20 to-transparent pointer-events-none" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8" style={{}}>Skontaktuj się
                </h2>
<p className="text-neutral-400 mb-12 max-w-sm text-sm" style={{}}>Masz pytania dotyczące zabezpieczenia
                    swojego samochodu? Zadzwoń lub odwiedź nas w studio.</p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-neutral-900 text-red-600 group-hover:border-red-600/50 transition-colors rounded-sm" style={{}}>
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1" style={{}}>Adres</h4>
<p className="text-neutral-500 text-sm" style={{}}>Zakole 14<br/>38-300 Gorlice</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-neutral-900 text-red-600 group-hover:border-red-600/50 transition-colors rounded-sm" style={{}}>
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Telefon</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="tel:+48509869243" style={{}}>+48 509 869
                                243</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 flex items-center justify-center border border-neutral-800 bg-neutral-900 text-red-600 group-hover:border-red-600/50 transition-colors rounded-sm" style={{}}>
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div className="">
<h4 className="text-white font-medium mb-1" style={{}}>Email</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="mailto:detailingpm@gmail.com" style={{}}>detailingpm@gmail.com</a>
</div>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="w-12 h-12 flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white hover:border-white/20 hover:bg-neutral-900 transition-all rounded-sm" href="#" style={{}}>
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-12 h-12 flex items-center justify-center border border-neutral-800 text-neutral-400 hover:text-white hover:border-white/20 hover:bg-neutral-900 transition-all rounded-sm" href="#" style={{}}>
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>

<div className="bg-neutral-900 p-1 border border-white/5 h-full min-h-[400px] relative grayscale hover:grayscale-0 transition-all duration-500 rounded-sm" style={{}}>
<iframe allowfullscreen="" className="opacity-80" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2583.507428800539!2d21.1634883!3d49.6454722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473dc16462788e31%3A0xe54b9d0092c69470!2sZakole%2014%2C%2038-300%20Gorlice!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-xl font-semibold tracking-tight text-white block mb-6" style={{}}>PM <span className="text-red-600" style={{}}>.</span></span>
<p className="text-neutral-500 text-xs leading-relaxed" style={{}}>
                        Profesjonalna kosmetyka samochodowa. <br/>
                        Premium detailing, PPF i ceramika.
                    </p>
</div>
<div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
<div>
<h4 className="text-white text-sm font-medium mb-4" style={{}}>Usługi</h4>
<ul className="space-y-2 text-xs text-neutral-500" style={{}}>
<li><a className="hover:text-red-500 transition-colors" href="#" style={{}}>Bezbarwne folie PPF</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#" style={{}}>Korekta lakieru</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#" style={{}}>Pielęgnacja wnętrza</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#" style={{}}>Powłoki ochronne</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4" style={{}}>Studio</h4>
<ul className="space-y-2 text-xs text-neutral-500" style={{}}>
<li><a className="hover:text-red-500 transition-colors" href="#o-nas" style={{}}>O nas</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#realizacje" style={{}}>Realizacje</a></li>
<li><a className="hover:text-red-500 transition-colors" href="#kontakt" style={{}}>Kontakt</a></li>
</ul>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4" style={{}}>Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500" style={{}}>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>Polityka prywatności</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{}}>Informacja o cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600" style={{}}>
<p>© 2024 PM Auto Detailing. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-4">
<span>Designed for Perfection.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
