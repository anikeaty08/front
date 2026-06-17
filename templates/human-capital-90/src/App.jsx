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
      

<nav className="fixed -translate-x-1/2 w-full max-w-4xl z-50 px-4 top-6 left-1/2">
<div className="flex bg-neutral-900/90 border-white/10 border rounded-full py-2 pr-3 pl-5 shadow-2xl backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-display font-semibold text-lg text-white tracking-tight font-sans">HCP</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#method">La Méthode</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#pillars">Les 5 Piliers</a>
<a className="hover:text-white transition-colors text-sm text-neutral-400 font-sans" href="#coach">Le Coach</a>
</div>
<div className="flex items-center gap-4">
<button className="group shadow-yellow-400/20 hover:shadow-yellow-400/40 transition-all duration-300 overflow-hidden cursor-pointer text-xs font-semibold text-neutral-900 bg-yellow-400 rounded-full py-2.5 px-6 relative shadow-lg">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative font-sans">Bilan HCP</span>
</button>
</div>
</div>
</nav>

<section className="mesh-gradient overflow-hidden pt-32 pb-20 relative">
<div className="text-center max-w-7xl mx-auto px-6">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur border border-neutral-200 px-3 py-1 rounded-full mb-8 shadow-sm">
<span className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500 font-sans">HCP – Human Capital Performance</span>
</div>
<h1 className="text-5xl md:text-7xl tracking-tight text-neutral-900 mb-6 max-w-5xl mx-auto leading-[1.1] font-sans font-semibold" style={{}}>
                Réduisez jusqu’à 5 ans <br className="hidden md:block"/>votre <span className="relative inline-block">
<span className="relative z-10 text-yellow-600 font-sans font-semibold" style={{}}>âge biologique</span>
<span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/50 -z-0 transform -rotate-1"></span>
</span>.
            </h1>
<p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light font-sans">
                Une méthode de pilotage humain issue du biohacking moderne. Une approche fondée sur la mesure et la personnalisation pour améliorer durablement votre énergie, vos performances et votre longévité.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center w-full max-w-2xl mx-auto">
<button className="group shadow-yellow-400/20 hover:shadow-yellow-400/30 transition-all duration-300 overflow-hidden cursor-pointer font-medium text-neutral-900 bg-yellow-400 rounded-full py-4 px-8 relative shadow-lg min-w-[200px]" onclick="window.location.href='#bilan'">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2 font-sans">
                        🟡 Découvrir le Bilan HCP
                    </span>
</button>
<button className="group bg-white border border-neutral-200 hover:bg-neutral-50 transition-all duration-300 cursor-pointer font-medium text-neutral-600 rounded-full py-4 px-8 shadow-sm min-w-[200px]">
<span className="relative flex items-center justify-center gap-2 font-sans">
                        ⚪ Réserver un appel
                    </span>
</button>
</div>

<div className="overflow-hidden flex flex-col bg-white h-[650px] md:h-[750px] max-w-6xl border-neutral-200/80 border rounded-3xl mx-auto relative shadow-2xl">

<header className="flex z-20 shrink-0 bg-white border-neutral-100 border-b py-4 px-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center">
<span className="font-display font-semibold text-xs font-sans">SD</span>
</div>
<div>
<h2 className="text-xs font-semibold text-neutral-900 tracking-tight font-sans">Stéphane D.</h2>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest font-sans">Optimisation en cours</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full border border-green-100">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-semibold text-green-700 font-sans">Biofeedback Actif</span>
</div>
<div className="h-4 w-px bg-neutral-200 mx-1"></div>
<button className="p-2 text-neutral-400 hover:text-neutral-900 transition-colors">
<iconify-icon height="20" icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<div className="hidden md:flex flex-col bg-neutral-50 w-64 h-full border-neutral-100 border-r pt-4 pr-4 pb-4 pl-4 space-y-1">
<div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-3 mb-2 mt-2 font-sans">Tableau de bord</div>
<a className="flex items-center gap-3 px-3 py-2 bg-white border border-neutral-200 shadow-sm rounded-lg text-xs font-medium text-neutral-900 font-sans" href="#">
<iconify-icon className="text-yellow-600" icon="solar:chart-square-linear"></iconify-icon>
                            Synthèse Biologique
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-white hover:text-neutral-900 rounded-lg text-xs font-medium transition-colors font-sans" href="#">
<iconify-icon icon="solar:heart-pulse-linear"></iconify-icon>
                            Cardiovasculaire
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-white hover:text-neutral-900 rounded-lg text-xs font-medium transition-colors font-sans" href="#">
<iconify-icon icon="solar:sleep-linear"></iconify-icon>
                            Sommeil &amp; Récupération
                        </a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:bg-white hover:text-neutral-900 rounded-lg text-xs font-medium transition-colors font-sans" href="#">
<iconify-icon icon="solar:dumbbell-linear"></iconify-icon>
                            Performance Physique
                        </a>
<div className="mt-auto pt-6">
<div className="bg-neutral-900 text-white rounded-xl p-4 relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-yellow-500/20 blur-xl rounded-full"></div>
<h4 className="text-xs font-medium mb-1 relative z-10 font-sans">Prochain Bilan</h4>
<p className="text-[10px] text-neutral-400 mb-3 relative z-10 font-sans">Programmé dans 12 jours</p>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-yellow-400 w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-neutral-50/30 p-8">
<div className="max-w-3xl mx-auto space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Âge Biologique</span>
<iconify-icon className="text-green-500" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="z-10">
<div className="flex items-baseline gap-2">
<span className="text-3xl text-neutral-900 font-sans font-semibold" style={{}}>32.4</span>
<span className="text-xs text-green-600 font-medium font-sans">-4.6 ans</span>
</div>
<p className="text-[10px] text-neutral-400 mt-1 font-sans">Chronologique: 37 ans</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden hover:shadow-md transition-all">
<div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-yellow-50 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">Score Énergie</span>
<iconify-icon className="text-yellow-500" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="z-10">
<div className="flex items-baseline gap-2">
<span className="text-3xl text-neutral-900 font-sans font-semibold" style={{}}>94</span>
<span className="text-xs text-neutral-400 font-medium font-sans">/ 100</span>
</div>
<p className="text-[10px] text-neutral-400 mt-1 font-sans">Stabilité optimale</p>
</div>
</div>

<div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden hover:shadow-md transition-all">
<div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-purple-50 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="flex justify-between items-start z-10">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest font-sans">VFC (HRV)</span>
<iconify-icon className="text-purple-500" icon="solar:pulse-linear"></iconify-icon>
</div>
<div className="z-10">
<div className="flex items-baseline gap-2">
<span className="text-3xl text-neutral-900 font-sans font-semibold" style={{}}>68</span>
<span className="text-xs text-neutral-400 font-medium font-sans">ms</span>
</div>
<p className="text-[10px] text-neutral-400 mt-1 font-sans">+12% vs moyenne</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm font-semibold text-neutral-900 font-sans">Évolution de la Performance</h3>
<p className="text-[10px] text-neutral-500 mt-1 font-sans">Suivi sur 12 semaines</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-neutral-100 text-[10px] font-medium text-neutral-600 font-sans">Cognitif</span>
<span className="px-2 py-1 rounded bg-neutral-50 text-[10px] font-medium text-neutral-400 font-sans">Physique</span>
</div>
</div>
<div className="h-40 w-full flex items-end gap-2 justify-between px-2">

<div className="w-full bg-neutral-50 rounded-t-sm h-[40%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[55%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[45%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[75%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[70%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[85%] relative group">
<div className="absolute bottom-0 w-full bg-yellow-400 rounded-t-sm h-full shadow-[0_0_15px_rgba(250,204,21,0.5)]"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[9px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-sans">Pic de forme</div>
</div>
<div className="w-full bg-neutral-50 rounded-t-sm h-[80%] relative group">
<div className="absolute bottom-0 w-full bg-neutral-200 rounded-t-sm h-full group-hover:bg-yellow-400 transition-colors"></div>
</div>
</div>
</div>

<div className="space-y-3">
<h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest px-1 font-sans">Actions du jour</h4>
<div className="flex items-center p-3 bg-white border border-neutral-100 rounded-xl shadow-sm hover:border-yellow-200 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mr-3 group-hover:bg-blue-100 transition-colors">
<iconify-icon icon="solar:water-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-neutral-900 font-sans">Hydratation Minérale</p>
<p className="text-[10px] text-neutral-500 font-sans">Ajouter électrolytes avant séance 14h</p>
</div>
<div className="w-5 h-5 rounded-full border-2 border-neutral-200 group-hover:border-yellow-400 transition-colors"></div>
</div>
<div className="flex items-center p-3 bg-white border border-neutral-100 rounded-xl shadow-sm hover:border-yellow-200 transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 mr-3 group-hover:bg-indigo-100 transition-colors">
<iconify-icon icon="solar:moon-sleep-linear"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-neutral-900 font-sans">Protocole Sommeil</p>
<p className="text-[10px] text-neutral-500 font-sans">Bloqueurs lumière bleue à 21h00</p>
</div>
<div className="w-5 h-5 rounded-full border-2 border-neutral-200 group-hover:border-yellow-400 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-3xl">
<div className="flex items-center gap-2 mb-4">
<span className="w-6 h-px bg-yellow-400"></span>
<span className="uppercase text-xs font-bold text-yellow-600 tracking-[0.2em] font-sans">LA MÉTHODE HCP</span>
</div>
<h2 className="text-3xl md:text-5xl text-neutral-900 tracking-tight leading-[1.1] mb-6 font-sans font-semibold" style={{}}>
                    Un protocole fondé sur la mesure et la précision.
                </h2>
<p className="text-neutral-500 text-lg font-light leading-relaxed font-sans">
                    Chaque accompagnement HCP est construit à partir de votre réalité humaine. L’objectif : comprendre comment vous fonctionnez réellement pour bâtir une stratégie d’optimisation totalement personnalisée.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-50 p-8 rounded-[32px] border border-neutral-200 hover:shadow-lg hover:border-yellow-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 mb-8 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-neutral-900 mb-3 font-sans">Objectifs personnalisés</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Vous définissez des objectifs clairs, mesurables et alignés avec vos priorités de vie.</p>
</div>

<div className="bg-neutral-50 p-8 rounded-[32px] border border-neutral-200 hover:shadow-lg hover:border-yellow-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 mb-8 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:sun-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-neutral-900 mb-3 font-sans">Énergie &amp; clarté</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Retrouvez une énergie stable et une clarté mentale durable grâce à une meilleure compréhension de votre physiologie.</p>
</div>

<div className="bg-neutral-50 p-8 rounded-[32px] border border-neutral-200 hover:shadow-lg hover:border-yellow-400/30 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-neutral-900 mb-8 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-neutral-900 mb-3 font-sans">Performance durable</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Apprenez à piloter votre performance dans le temps et à préserver vos résultats sans vous épuiser.</p>
</div>

<div className="bg-neutral-900 p-8 rounded-[32px] border border-neutral-800 hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl"></div>
<div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-8 backdrop-blur-sm group-hover:bg-yellow-400 group-hover:text-neutral-900 transition-colors">
<iconify-icon height="24" icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium text-white mb-3 font-sans">Maîtrise &amp; Excellence</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans">HCP vous apporte une discipline claire pour devenir la meilleure version de vous-même.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pillars">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="uppercase text-xs font-bold text-yellow-600 tracking-[0.2em] font-sans">UNE APPROCHE GLOBALE</span>
<h2 className="text-3xl md:text-5xl text-neutral-900 tracking-tight mt-4 mb-4 font-sans font-semibold" style={{}}>Les 5 Piliers HCP</h2>
<p className="text-neutral-500 max-w-xl mx-auto font-sans">Pour comprendre, optimiser et prolonger votre capital humain.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="group relative overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
<div className="text-4xl text-neutral-100 absolute top-4 right-6 group-hover:text-yellow-50 transition-colors font-sans font-semibold" style={{}}>1</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 mb-6">
<iconify-icon icon="solar:dna-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium mb-2 font-sans">Biologique</h3>
<p className="text-sm text-neutral-500 font-sans">Comprendre l’état réel de votre organisme et votre âge biologique.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
<div className="text-4xl text-neutral-100 absolute top-4 right-6 group-hover:text-yellow-50 transition-colors font-sans font-semibold" style={{}}>2</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-600 mb-6">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium mb-2 font-sans">Physiologique</h3>
<p className="text-sm text-neutral-500 font-sans">Développer votre énergie, votre endurance et votre capacité d’adaptation.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
<div className="text-4xl text-neutral-100 absolute top-4 right-6 group-hover:text-yellow-50 transition-colors font-sans font-semibold" style={{}}>3</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-50 text-orange-600 mb-6">
<iconify-icon icon="solar:body-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium mb-2 font-sans">Neuromusculaire</h3>
<p className="text-sm text-neutral-500 font-sans">Renforcer votre structure, votre force et l’efficacité de vos mouvements.</p>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-[32px] p-8 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-6">
<div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/10 blur-[80px] rounded-full"></div>
<div className="flex-shrink-0">
<div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 text-yellow-400 mb-0 backdrop-blur-sm">
<iconify-icon icon="solar:brain-linear" width="28"></iconify-icon>
</div>
</div>
<div className="relative z-10 max-w-lg">
<div className="flex items-baseline justify-between w-full">
<h3 className="text-2xl text-white mb-2 font-sans font-semibold" style={{}}>Cognitif</h3>
<span className="text-4xl text-neutral-800 group-hover:text-neutral-700 transition-colors font-sans font-semibold" style={{}}>4</span>
</div>
<p className="text-neutral-400 font-sans">Améliorer votre clarté mentale, votre focus et votre prise de décision. Le pilier central pour les dirigeants et profils à haute intensité mentale.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-neutral-200 rounded-[32px] p-8 hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
<div className="text-4xl text-neutral-100 absolute top-4 right-6 group-hover:text-yellow-50 transition-colors font-sans font-semibold" style={{}}>5</div>
<div className="relative z-10">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 mb-6">
<iconify-icon icon="solar:restart-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-display font-medium mb-2 font-sans">Régénératif</h3>
<p className="text-sm text-neutral-500 font-sans">Optimiser votre récupération, votre équilibre et votre longévité active.</p>
</div>
</div>
</div>
<div className="mt-12 text-center border-t border-neutral-100 pt-8">
<p className="text-lg text-neutral-600 font-medium font-display font-sans">"HCP ne cherche pas à faire plus. HCP cherche à faire mieux."</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200" id="coach">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full blur-xl opacity-50"></div>
<div className="relative z-10 rounded-[40px] overflow-hidden border border-neutral-200 shadow-2xl bg-white h-[600px]">

<div className="w-full h-full bg-neutral-200 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-3xl mb-1 font-sans font-semibold" style={{}}>Stéphane</p>
<p className="text-sm tracking-widest uppercase text-yellow-400 font-sans">Fondateur &amp; Coach HCP</p>
</div>
</div>
</div>
</div>
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/50 border border-neutral-300 mb-8">
<span className="text-[10px] font-semibold text-neutral-600 uppercase tracking-widest font-sans">Votre Coach</span>
</div>
<h2 className="text-3xl md:text-5xl text-neutral-900 tracking-tight mb-8 font-sans font-semibold" style={{}}>
                        Je vous accompagne personnellement pour reprendre le contrôle.
                    </h2>
<div className="space-y-6 text-neutral-600 font-light text-lg">
<p className="font-sans">
                            Passionné par la performance humaine et la longévité active, j’ai créé HCP pour accompagner celles et ceux qui veulent piloter leur capital biologique avec méthode et lucidité.
                        </p>
<p className="font-sans">
                            Ce n’est pas un coaching standard, mais un véritable partenariat d’évolution où chaque ajustement compte. Mon rôle est de vous aider à comprendre comment vous fonctionnez réellement.
                        </p>
</div>
<div className="mt-10 space-y-4">
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
<iconify-icon className="text-yellow-500 text-xl flex-shrink-0" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-800 font-sans">Fondateur de la méthode HCP</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
<iconify-icon className="text-yellow-500 text-xl flex-shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-800 font-sans">Accompagnant de dirigeants &amp; profils exigeants</span>
</div>
<div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-neutral-200 shadow-sm">
<iconify-icon className="text-yellow-500 text-xl flex-shrink-0" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-800 font-sans">Spécialiste de l’optimisation de la performance</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl text-neutral-900 tracking-tight font-sans font-semibold" style={{}}>Pour qui est fait HCP ?</h2>
<p className="text-neutral-500 mt-4 max-w-xl mx-auto font-sans">Des profils exigeants, conscients que la performance durable passe par la compréhension de soi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-900">
<iconify-icon icon="solar:case-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium mb-2 font-sans">Dirigeants &amp; Cadres</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Votre énergie et votre concentration sont vos ressources clés. Préservez-les.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-900">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium mb-2 font-sans">Entrepreneurs</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Maintenez un haut niveau d’intensité sans sacrifier votre équilibre ni votre santé.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-900">
<iconify-icon icon="solar:running-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium mb-2 font-sans">Sportifs</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Optimisez vos capacités physiques et mentales pour prolonger la performance.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-900">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-display font-medium mb-2 font-sans">Exigeants</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-sans">Vous refusez les solutions génériques et cherchez la précision.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-neutral-900 font-medium mb-6 font-sans">Vous vous reconnaissez ? HCP est votre point de départ.</p>
<div className="flex gap-4 justify-center">
<button className="bg-neutral-900 text-white hover:bg-neutral-800 px-6 py-3 rounded-full text-sm font-medium transition-colors font-sans">
                    🟡 Découvrir le Bilan HCP
                </button>
<button className="bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 px-6 py-3 rounded-full text-sm font-medium transition-colors font-sans">
                    ⚪ Voir la méthode
                </button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(234,179,8,0.05),transparent_40%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-800 pb-8">
<div>
<span className="text-yellow-500 font-bold text-xs tracking-widest uppercase font-sans">Votre Parcours</span>
<h2 className="text-4xl md:text-5xl mt-2 font-sans font-semibold" style={{}}>Un processus structuré.</h2>
</div>
<p className="text-neutral-400 max-w-sm mt-4 md:mt-0 text-right font-sans">Pour mesurer, comprendre et optimiser votre performance humaine.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-neutral-800 z-0"></div>

<div className="relative z-10">
<div className="w-16 h-16 bg-neutral-900 border-2 border-yellow-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(234,179,8,0.3)] font-sans">1</div>
<h3 className="text-xl font-display font-medium mb-3 font-sans">Le Bilan HCP</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans">Comprendre votre fonctionnement et établir un point de départ clair. Une vision précise de votre potentiel.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 bg-neutral-900 border border-neutral-700 text-neutral-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 group-hover:border-white transition-colors font-sans">2</div>
<h3 className="text-xl font-display font-medium mb-3 font-sans">Le Programme (12 sem.)</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans">Un accompagnement personnalisé et évolutif. Chaque action est alignée avec vos priorités et votre réalité.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 bg-neutral-900 border border-neutral-700 text-neutral-500 rounded-full flex items-center justify-center text-xl font-bold mb-6 mx-auto md:mx-0 font-sans">3</div>
<h3 className="text-xl font-display font-medium mb-3 font-sans">Le Recode HCP</h3>
<p className="text-sm text-neutral-400 leading-relaxed font-sans">Stabiliser les résultats, intégrer les nouvelles habitudes et prolonger la performance dans le temps.</p>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="group shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 overflow-hidden cursor-pointer font-medium text-neutral-900 bg-yellow-500 rounded-full py-4 px-10 relative shadow-lg">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2 font-semibold font-sans">
                        Commencer mon Bilan HCP
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="py-32 bg-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-6xl text-neutral-900 tracking-tight leading-tight mb-8 font-sans font-semibold" style={{}}>
                "Vieillir est certain.<br/> <span className="text-neutral-400 font-sans font-semibold" style={{}}>Mal vieillir ne l’est pas.</span>"
            </h2>
<div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
<p className="text-xl text-neutral-600 font-light leading-relaxed mb-6 font-sans">
                La performance humaine commence par une vérité simple : <br/>ce que l’on ne mesure pas, on ne peut pas l’améliorer.
            </p>
<p className="text-sm text-neutral-400 font-sans">
                HCP est né pour celles et ceux qui refusent de subir le temps.
            </p>
</div>
</section>

<footer className="bg-neutral-50 pt-20 pb-10 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl text-neutral-900 tracking-tighter font-sans font-semibold" style={{}}>HCP</span>
<p className="text-xs text-neutral-500 mt-4 leading-relaxed font-sans">
                        Méthode de pilotage humain issue du biohacking moderne. Optimisation, Mesure, Longévité.
                    </p>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 font-sans">Méthode</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-yellow-600 transition-colors font-sans" href="#">Les 5 Piliers</a></li>
<li><a className="hover:text-yellow-600 transition-colors font-sans" href="#">Le Bilan</a></li>
<li><a className="hover:text-yellow-600 transition-colors font-sans" href="#">Recode</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 font-sans">Légal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors font-sans" href="#">Mentions Légales</a></li>
<li><a className="hover:text-neutral-900 transition-colors font-sans" href="#">Confidentialité</a></li>
<li><a className="hover:text-neutral-900 transition-colors font-sans" href="#">CGV</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 font-sans">Contact</h4>
<button className="w-full bg-white border border-neutral-300 text-neutral-900 py-2 px-4 rounded-lg text-sm font-medium hover:bg-neutral-50 transition-colors font-sans">
                        Réserver un appel
                    </button>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p className="font-sans">© 2024 HCP - Human Capital Performance. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-900" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-neutral-900" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
