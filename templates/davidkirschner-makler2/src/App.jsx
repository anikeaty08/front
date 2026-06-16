import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "RealEstateAgent",
"name": "David Kirschner",
"image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
"telephone": "+420 777 888 999",
"email": "david@kirschner.cz",
"address": {
"@type": "PostalAddress",
"addressLocality": "Praha",
"addressRegion": "Hlavní město Praha",
"addressCountry": "CZ"
},
"priceRange": "$$$"
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



        // Data Listings Integration
        
        const listingData = [
            {
                id: 1,
                title: "Luxusní mezonet s terasou",
                type: "Prodej",
                category: "Byt",
                status: "Novinka",
                locality: "Praha 2 - Vinohrady",
                price: "24 500 000 Kč",
                area: "145 m²",
                rooms: "4+kk",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                features: ["Terasa", "Garáž", "Výtah"]
            },
            {
                id: 2,
                title: "Rodinný dům u lesa",
                type: "Prodej",
                category: "Dům",
                status: "Rezervováno",
                locality: "Průhonice",
                price: "32 000 000 Kč",
                area: "220 m²",
                rooms: "5+1",
                image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?auto=format&fit=crop&q=80&w=800",
                features: ["Zahrada", "Bazén", "Krb"]
            },
            {
                id: 3,
                title: "Moderní byt v novostavbě",
                type: "Pronájem",
                category: "Byt",
                status: "Volné",
                locality: "Praha 8 - Karlín",
                price: "35 000 Kč / měs",
                area: "65 m²",
                rooms: "2+kk",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
                features: ["Balkon", "Sklep", "Zařízeno"]
            },
            {
                id: 4,
                title: "Investiční apartmán",
                type: "Prodej",
                category: "Byt",
                status: "Prodáno",
                locality: "Praha 1 - Staré Město",
                price: "12 900 000 Kč",
                area: "55 m²",
                rooms: "2+kk",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
                features: ["Hist. centrum", "Po rekonstrukci"]
            },
             {
                id: 5,
                title: "Vila s výhledem na město",
                type: "Prodej",
                category: "Dům",
                status: "Novinka",
                locality: "Praha 6 - Hanspaulka",
                price: "58 000 000 Kč",
                area: "350 m²",
                rooms: "6+kk",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
                features: ["Sauna", "Smart home", "Garáže"]
            },
             {
                id: 6,
                title: "Kancelářské prostory",
                type: "Pronájem",
                category: "Komerce",
                status: "Volné",
                locality: "Praha 4 - Pankrác",
                price: "450 Kč / m²",
                area: "120 m²",
                rooms: "Open space",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
                features: ["Klimatizace", "Recepce", "Metro"]
            }
        ];

        // Function to render listings
        function renderListings(data) {
            const container = document.getElementById('listings-container');
            container.innerHTML = ''; 

            data.forEach(item => {
                const statusColor = item.status === 'Novinka' ? 'bg-blue-600' : 
                                    item.status === 'Rezervováno' ? 'bg-orange-500' : 
                                    item.status === 'Prodáno' ? 'bg-slate-400' : 'bg-green-600';

                const html = `
                    <article class="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                        <div class="relative h-64 overflow-hidden">
                            <span class="absolute top-4 left-4 ${statusColor} text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm">
                                ${item.status}
                            </span>
                             <span class="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm">
                                ${item.type}
                            </span>
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <button class="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display">Zobrazit detail</button>
                            </div>
                        </div>
                        <div class="p-8 flex flex-col flex-grow">
                            <div class="mb-5">
                                <h3 class="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display">${item.title}</h3>
                                <p class="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80">
                                    <iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    ${item.locality}
                                </p>
                            </div>
                            <div class="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
                                <div class="flex items-center gap-2" title="Dispozice">
                                    <iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                                    <span>${item.rooms}</span>
                                </div>
                                <div class="flex items-center gap-2" title="Plocha">
                                    <iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
                                    <span>${item.area}</span>
                                </div>
                            </div>
                            <div class="mt-auto flex items-center justify-between">
                                <span class="text-lg font-extrabold text-slate-900 tracking-tight font-display">${item.price}</span>
                                <div class="flex gap-2">
                                     ${item.features.slice(0, 1).map(f => `<span class="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider">${f}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </article>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                renderListings(listingData);
            }, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse z-50 group" href="#">
<div className="h-8 w-8 bg-slate-900 text-white flex items-center justify-center rounded-lg text-sm font-bold tracking-tighter font-display group-hover:bg-slate-800 transition-colors font-google-sans-flex" style={{}}>DK</div>
<span className="self-center text-lg font-bold tracking-tight whitespace-nowrap text-slate-900 uppercase font-display font-google-sans-flex" style={{}}>David Kirschner</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
<a className="hidden md:flex items-center justify-center text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-semibold rounded-full text-sm px-6 py-2.5 text-center transition-colors shadow-sm font-display tracking-wide font-google-sans-flex" href="#contact" style={{}}>
                    Konzultace
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only font-google-sans-flex" style={{}}>Otevřít menu</span>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="hidden w-full md:block md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent font-display text-sm tracking-wide">
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors font-google-sans-flex" href="#about" style={{}}>O mně</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors font-google-sans-flex" href="#listings" style={{}}>Nabídka</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors font-google-sans-flex" href="#process" style={{}}>Jak pracuji</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-slate-900 md:p-0 transition-colors font-google-sans-flex" href="#testimonials" style={{}}>Reference</a></li>
</ul>
</div>
</div>

<div className="hidden md:hidden border-t border-slate-100 bg-white absolute w-full left-0 top-full p-4 shadow-xl" id="mobile-menu">
<ul className="flex flex-col space-y-4 font-bold font-display text-center">
<li><a className="block py-2 text-slate-600 hover:text-slate-900 font-google-sans-flex" href="#about" style={{}}>O mně</a></li>
<li><a className="block py-2 text-slate-600 hover:text-slate-900 font-google-sans-flex" href="#listings" style={{}}>Nabídka</a></li>
<li><a className="block py-2 text-slate-600 hover:text-slate-900 font-google-sans-flex" href="#process" style={{}}>Jak pracuji</a></li>
<li><a className="block py-3 mt-2 text-white bg-slate-900 rounded-full font-google-sans-flex" href="#contact" style={{}}>Konzultace</a></li>
</ul>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden fade-in-up pt-32 pb-16 relative" style={{animationDelay: '0.1s'}}>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 tracking-wide font-display uppercase font-google-sans-flex" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Odpověď do 24 hodin
                </div>
<h1 className="leading-[0.95] md:text-7xl lg:text-7xl text-5xl font-extrabold text-slate-900 font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Bezpečný prodej nemovitosti,<br className=""/> <span className="text-slate-300 font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>minimum stresu.</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-medium text-slate-500 max-w-lg font-google-sans-flex" style={{}}>
                    Exkluzivní realitní služby pro Prahu a Středočeský kraj. David Kirschner – váš partner pro bezpečný obchod a maximální zisk.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 tracking-wide font-display font-google-sans-flex" href="#contact" style={{}}>
                        Nezávazná konzultace
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:shadow-sm tracking-wide font-display font-google-sans-flex" href="#valuation" style={{}}>
<iconify-icon className="mr-2" icon="solar:graph-new-linear" width="20"></iconify-icon>
                        Odhad ceny zdarma
                    </a>
</div>
<div className="flex gap-4 text-sm font-medium text-slate-400 pt-8 gap-x-4 gap-y-4 items-center">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Client" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Client" className="w-10 h-10 border-2 border-white rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="font-google-sans-flex" style={{}}>Důvěřuje mi již <span className="text-slate-900 font-bold font-google-sans-flex" style={{}}>150+</span> klientů</span>
</div>
</div>
<div className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 group">
<img alt="David Kirschner" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d83f1ac-81e4-46a2-869b-9a0f768ff889_1600w.png"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-10 text-white">
<p className="text-2xl font-extrabold tracking-wide font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>David Kirschner</p>
<p className="uppercase text-sm font-medium tracking-wider font-display opacity-90 font-google-sans-flex" style={{}}>Realitní specialista</p>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50/50 border-slate-100 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="text-center md:text-left">
<p className="text-5xl font-extrabold text-slate-900 tracking-tight font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>12+</p>
<p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest font-display font-google-sans-flex" style={{}}>Let zkušeností</p>
</div>
<div className="text-center md:text-left">
<p className="text-5xl font-extrabold text-slate-900 tracking-tight font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>150</p>
<p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest font-display font-google-sans-flex" style={{}}>Prodaných nemovitostí</p>
</div>
<div className="text-center md:text-left">
<p className="text-5xl font-extrabold text-slate-900 tracking-tight font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>98%</p>
<p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest font-display font-google-sans-flex" style={{}}>Úspěšnost prodeje</p>
</div>
<div className="text-center md:text-left">
<p className="text-5xl font-extrabold text-slate-900 tracking-tight font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>21</p>
<p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-widest font-display font-google-sans-flex" style={{}}>Dnů průměrný prodej</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="md:text-5xl text-4xl font-extrabold text-slate-900 tracking-tight mb-6 font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Můj přístup k prodeji</h2>
<p className="text-lg font-medium text-slate-500 font-google-sans-flex" style={{}}>Kombinuji moderní marketingové technologie s lidským přístupem. Každá nemovitost má svůj příběh a já pomáhám ho odvyprávět tak, aby zaujal ty správné kupce.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
<div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight font-display mb-3 font-google-sans-flex" style={{}}>Špičkový marketing</h3>
<p className="text-sm text-slate-500 leading-relaxed font-medium font-google-sans-flex" style={{}}>Profesionální fotografie, video prohlídky, 3D skeny a home staging jsou u mě standardem, ne nadstandardem.</p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
<div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight mb-3 font-google-sans-flex" style={{}}>Právní bezpečí</h3>
<p className="text-sm text-slate-500 leading-relaxed font-medium font-google-sans-flex" style={{}}>Spolupracuji s renomovanou advokátní kanceláří. Veškeré smlouvy a úschova financí jsou pod přísným dohledem.</p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
<div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chat-round-money-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>Vyjednávání o ceně</h3>
<p className="text-sm text-slate-500 leading-relaxed font-medium font-google-sans-flex" style={{}}>Mým cílem je prodat za nejvyšší možnou cenu. Díky zkušenostem s vyjednáváním nenechávám peníze na stole.</p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group hover:-translate-y-1">
<div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>Databáze poptávek</h3>
<p className="text-sm text-slate-500 leading-relaxed font-medium font-google-sans-flex" style={{}}>Pracuji s aktivní databází investorů a zájemců. Často prodám nemovitost dříve, než se dostane na veřejné servery.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="listings">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Aktuální nabídka</h2>
<p className="text-lg text-slate-500 font-medium font-google-sans-flex" style={{}}>Vybrané nemovitosti z mého portfolia.</p>
</div>

<div className="flex flex-wrap gap-2 font-display">
<button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full tracking-wide font-google-sans-flex" style={{}}>Vše</button>
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full hover:bg-slate-100 tracking-wide transition-colors font-google-sans-flex" style={{}}>Prodej</button>
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full hover:bg-slate-100 tracking-wide transition-colors font-google-sans-flex" style={{}}>Pronájem</button>
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full hover:bg-slate-100 tracking-wide transition-colors font-google-sans-flex" style={{}}>Domy</button>
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-full hover:bg-slate-100 tracking-wide transition-colors font-google-sans-flex" style={{}}>Byty</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="listings-container">
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Novinka
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Prodej
                            </span>
<img alt="Luxusní mezonet s terasou" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Luxusní mezonet s terasou</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Praha 2 - Vinohrady
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>4+kk</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>145 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>24 500 000 Kč</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Terasa</span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Rezervováno
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Prodej
                            </span>
<img alt="Rodinný dům u lesa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Rodinný dům u lesa</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Průhonice
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>5+1</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>220 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>32 000 000 Kč</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Zahrada</span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Volné
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Pronájem
                            </span>
<img alt="Moderní byt v novostavbě" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Moderní byt v novostavbě</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Praha 8 - Karlín
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>2+kk</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>65 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>35 000 Kč / měs</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Balkon</span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-slate-400 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Prodáno
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Prodej
                            </span>
<img alt="Investiční apartmán" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Investiční apartmán</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Praha 1 - Staré Město
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>2+kk</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>55 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>12 900 000 Kč</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Hist. centrum</span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Novinka
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Prodej
                            </span>
<img alt="Vila s výhledem na město" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Vila s výhledem na město</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Praha 6 - Hanspaulka
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>6+kk</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>350 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>58 000 000 Kč</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Sauna</span>
</div>
</div>
</div>
</article>
<article className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<span className="absolute top-4 left-4 bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Volné
                            </span>
<span className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full z-10 border border-slate-100 font-display shadow-sm font-google-sans-flex" style={{}}>
                                Pronájem
                            </span>
<img alt="Kancelářské prostory" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<button className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-100 tracking-wide font-display font-google-sans-flex" style={{}}>Zobrazit detail</button>
</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<div className="mb-5">
<h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors tracking-tight font-display font-google-sans-flex" style={{}}>Kancelářské prostory</h3>
<p className="text-slate-500 text-sm flex items-center gap-1.5 font-bold uppercase tracking-wide opacity-80 font-google-sans-flex" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                                    Praha 4 - Pankrác
                                </p>
</div>
<div className="flex items-center gap-6 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100 font-medium">
<div className="flex items-center gap-2" title="Dispozice">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>Open space</span>
</div>
<div className="flex items-center gap-2" title="Plocha">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="font-google-sans-flex" style={{}}>120 m²</span>
</div>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-extrabold text-slate-900 tracking-tight font-display font-google-sans-flex" style={{}}>450 Kč / m²</span>
<div className="flex gap-2">
<span className="px-2.5 py-1 bg-slate-50 text-[10px] text-slate-600 rounded-md border border-slate-200 font-bold uppercase tracking-wider font-google-sans-flex" style={{}}>Klimatizace</span>
</div>
</div>
</div>
</article>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all tracking-wide font-display font-google-sans-flex" href="#" style={{}}>
                    Zobrazit všechny nabídky
                </a>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-20 text-center font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Jak probíhá spolupráce</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">

<div className="hidden lg:block absolute top-10 left-[16%] right-[16%] h-px bg-slate-100 -z-10 border-t border-dashed border-slate-200"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>1. Konzultace</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Sejdeme se u kávy, probereme vaše potřeby a možnosti. Zdarma a nezávazně.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>2. Odhad a strategie</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Stanovím reálnou tržní cenu a připravím prodejní strategii na míru.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>3. Příprava</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Home staging, drobné opravy, úklid. Nemovitost musí zářit.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:camera-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>4. Prezentace</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Profesionální foto, video, web nemovitosti. Spuštění kampaní na sítích.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>5. Prohlídky a jednání</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Filtruji zájemce, vedu prohlídky a vyjednávám ty nejlepší podmínky.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 text-slate-900 shadow-sm group-hover:border-slate-900 transition-colors z-10 group-hover:scale-110 duration-300">
<iconify-icon icon="solar:file-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight font-display font-google-sans-flex" style={{}}>6. Smlouvy a předání</h3>
<p className="text-sm text-slate-500 max-w-xs font-medium leading-relaxed font-google-sans-flex" style={{}}>Podpis smluv u advokáta, převod financí a protokolární předání klíčů.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-12 font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Co říkají klienti</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-slate-900 mb-6 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 italic font-medium leading-relaxed font-google-sans-flex" style={{}}>"Prodej bytu proběhl naprosto hladce. Ocenila jsem zejména home staging a fotky, díky kterým se byt prodal za vyšší cenu, než jsem čekala."</p>
<div>
<p className="font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>Jana Nováková</p>
<p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1 font-google-sans-flex" style={{}}>Praha 2 - Vinohrady</p>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-slate-900 mb-6 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 italic font-medium leading-relaxed font-google-sans-flex" style={{}}>"Profesionální, rychlé a lidské jednání. David byl vždy k dispozici a vše nám vysvětlil. Mohu jen doporučit."</p>
<div>
<p className="font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>Petr Svoboda</p>
<p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1 font-google-sans-flex" style={{}}>Říčany</p>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex text-slate-900 mb-6 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 italic font-medium leading-relaxed font-google-sans-flex" style={{}}>"Skvělá komunikace a právní servis. Cítili jsme se po celou dobu bezpečně. Peníze jsme měli na účtu přesně podle dohody."</p>
<div>
<p className="font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>Martin Dvořák</p>
<p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1 font-google-sans-flex" style={{}}>Kladno</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-12 text-center font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Časté dotazy</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-2xl open:ring-1 open:ring-slate-900/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>
                    Jaká je výše provize?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-base leading-relaxed font-medium font-google-sans-flex" style={{}}>
                    Provize je obvykle 3-5 % z kupní ceny nemovitosti + DPH. Zahrnuje kompletní servis od marketingu, přes právní služby až po předání. Vždy se dozvíte přesnou částku předem.
                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl open:ring-1 open:ring-slate-900/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>
                    Je nutná exkluzivní smlouva?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-base leading-relaxed font-medium font-google-sans-flex" style={{}}>
                    Ano, pracuji výhradně exkluzivně. To mi umožňuje investovat do nemovitosti maximum času a peněz (marketing, staging) s jistotou výsledku. Pro vás to znamená jednoho partnera, který hájí vaše zájmy.
                </div>
</details>
<details className="group bg-white border border-slate-200 rounded-2xl open:ring-1 open:ring-slate-900/5 transition-all">
<summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-slate-900 tracking-tight font-display text-lg font-google-sans-flex" style={{}}>
                    Kdo hradí právní servis?
                    <span className="ml-4 flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 text-base leading-relaxed font-medium font-google-sans-flex" style={{}}>
                    Právní servis (příprava smluv, advokátní úschova) je plně hrazen z mé provize. Spolupracuji s prověřenou advokátní kanceláří specializující se na realitní právo.
                </div>
</details>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-slate-800 rounded-full blur-3xl opacity-30"></div>
<div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8 font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Připraveni na prodej?</h2>
<p className="text-slate-300 text-lg mb-12 font-medium max-w-md leading-relaxed font-google-sans-flex" style={{}}>Napište mi nebo zavolejte. Rád s vámi proberu vaše možnosti. Žádný stres, jen jasný plán.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-white">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1 font-google-sans-flex" style={{}}>Telefon</p>
<a className="text-2xl font-bold hover:text-blue-300 transition-colors tracking-tight font-display font-google-sans-flex" href="tel:+420777888999" style={{transition: 'outline 0.1s ease-in-out'}}>+420 777 888 999</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-white">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1 font-google-sans-flex" style={{}}>Email</p>
<a className="text-2xl font-bold hover:text-blue-300 transition-colors tracking-tight font-display font-google-sans-flex" href="mailto:david@kirschner.cz" style={{transition: 'outline 0.1s ease-in-out'}}>david@kirschner.cz</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 text-white">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1 font-google-sans-flex" style={{}}>Kancelář</p>
<p className="text-xl font-medium tracking-tight font-google-sans-flex" style={{}}>Vinohradská 123, 130 00 Praha 3</p>
</div>
</div>
</div>

<div className="mt-12 p-8 rounded-3xl bg-slate-900/50 border border-slate-800">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
<div>
<span className="font-bold tracking-tight text-lg font-display block font-google-sans-flex" style={{}}>Chcete se potkat online?</span>
<span className="text-sm text-slate-400 block mt-1 font-google-sans-flex" style={{}}>Rezervujte si 30 min hovor.</span>
</div>
<button className="px-6 py-3 bg-white text-slate-950 rounded-full text-sm font-bold hover:bg-slate-200 tracking-wide font-display transition-colors font-google-sans-flex" style={{}}>Rezervovat termín</button>
</div>
</div>
</div>

<div className="bg-white text-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl">
<h3 className="text-3xl font-extrabold mb-8 tracking-tight font-display font-google-sans-flex" style={{transition: 'outline 0.1s ease-in-out'}}>Napište mi zprávu</h3>
<form action="#" className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide font-google-sans-flex" htmlFor="name" style={{}}>Jméno</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-0 transition-colors bg-slate-50 font-medium placeholder:text-slate-400" id="name" placeholder="Jan Novák" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide font-google-sans-flex" htmlFor="phone" style={{}}>Telefon</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-0 transition-colors bg-slate-50 font-medium placeholder:text-slate-400" id="phone" placeholder="+420 777 000 000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide font-google-sans-flex" htmlFor="email" style={{}}>Email</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-0 transition-colors bg-slate-50 font-medium placeholder:text-slate-400" id="email" placeholder="jan@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide font-google-sans-flex" htmlFor="service" style={{}}>Typ služby</label>
<div className="relative">
<select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-0 transition-colors bg-slate-50 font-medium appearance-none" id="service">
<option className="font-google-sans-flex" style={{}}>Chci prodat nemovitost</option>
<option className="font-google-sans-flex" style={{}}>Chci koupit nemovitost</option>
<option className="font-google-sans-flex" style={{}}>Potřebuji odhad ceny</option>
<option className="font-google-sans-flex" style={{}}>Jiné</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-800 mb-2 uppercase tracking-wide font-google-sans-flex" htmlFor="message" style={{}}>Zpráva</label>
<textarea className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-0 transition-colors bg-slate-50 font-medium placeholder:text-slate-400" id="message" placeholder="O jakou nemovitost se jedná?" rows="4"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded text-slate-900 focus:ring-slate-900 border-slate-300" id="gdpr" type="checkbox"/>
<label className="text-xs text-slate-500 font-medium font-google-sans-flex" htmlFor="gdpr" style={{}}>Souhlasím se zpracováním osobních údajů pro účely kontaktování.</label>
</div>
<button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors flex justify-center items-center gap-2 tracking-wide font-display text-lg shadow-lg shadow-slate-900/20 font-google-sans-flex" style={{}} type="submit">
                            Odeslat nezávazně
                            <iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-2 font-medium font-google-sans-flex" style={{}}>Ozvu se vám zpět do 24 hodin.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center space-x-3 rtl:space-x-reverse">
<div className="h-10 w-10 bg-white text-slate-950 flex items-center justify-center rounded-lg text-sm font-extrabold tracking-tighter font-display font-google-sans-flex" style={{}}>DK</div>
<span className="text-white font-bold uppercase tracking-widest text-sm font-display font-google-sans-flex" style={{}}>David Kirschner</span>
</div>
<div className="text-sm font-medium font-google-sans-flex" style={{}}>
                © 2023 David Kirschner. Všechna práva vyhrazena.
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-900 text-xs text-center md:text-left font-medium opacity-60">
<p className="font-google-sans-flex" style={{}}>Etický závazek: Zakládám si na transparentních provizích, pravidelném reportingu a lidském přístupu. Jsem tu pro vás.</p>
</div>
</footer>



    </>
  );
}
