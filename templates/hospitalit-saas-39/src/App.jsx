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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 bg-white/80 border-neutral-200/60" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300 bg-neutral-900 text-white" style={{}}>
<iconify-icon className="" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900 font-sans" style={{}}>
            roomangel.
          </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 font-sans" href="#ecosystem" style={{}}>
            Ecosystem
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 font-sans" href="#how-it-works" style={{}}>
            How it works
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 font-sans" href="#verified" style={{}}>
            Verified
          </a>
<a className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900 font-sans" href="#platform" style={{}}>
            Platform
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium transition-colors text-neutral-900 hover:text-indigo-600 font-sans" href="#" style={{}}>
            Log in
          </a>
<a className="inline-flex h-9 items-center justify-center rounded-lg px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 transition-all bg-neutral-900 text-white hover:bg-neutral-800 font-sans" href="#" style={{}}>
            Get Connected
          </a>
<button className="md:hidden text-neutral-500" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 -z-10">
<div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-blob bg-indigo-200/30"></div>
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000 bg-cyan-200/30"></div>
<div className="absolute -bottom-8 left-1/2 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000 bg-cyan-200/30"></div>
</div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-neutral-100 border-neutral-200 text-neutral-600 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-neutral-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500" style={{}}></span>
</span>
          The new standard for modern hospitality
        </div>
<h1 className="text-5xl md:text-7xl tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto text-neutral-900 font-google-sans-flex font-normal" style={{}}>
          One Ecosystem. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-[#7248e5] via-cyan-600 to-indigo-600 font-google-sans-flex font-normal">Total Transformation.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light mb-10 font-sans" style={{}}>
          We’ve combined the world’s first industry-owned trust standard <span className="font-medium text-neutral-900 font-sans" style={{}}>(roomangel)</span> with cutting-edge AI <span className="font-medium text-neutral-900 font-sans" style={{}}>(hive)</span> and seamless connectivity <span className="font-medium text-neutral-900 font-sans" style={{}}>(assetware.ai)</span> to simplify the booking experience and reclaim the direct relationship between hotels and their guests.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg px-8 text-sm font-medium shadow-lg hover:-translate-y-0.5 transition-all duration-200 bg-neutral-900 text-white hover:bg-neutral-800 font-sans" href="#" style={{}}>
            Explore the Ecosystem
          </a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-lg border px-8 text-sm font-medium shadow-sm transition-all duration-200 border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 font-sans" href="#how-it-works" style={{}}>
            See how it works
          </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-neutral-50" style={{}}></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">

<div className="p-6 rounded-2xl border shadow-sm flex items-center gap-4 bg-white border-neutral-200" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:network-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-sans" style={{}}>Connectivity</div>
<div className="font-medium text-neutral-900 font-sans" style={{}}>assetware.ai</div>
</div>
</div>
<div className="p-6 rounded-2xl border shadow-sm flex items-center gap-4 bg-white border-neutral-200" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-50 text-cyan-600">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-sans" style={{}}>Intelligence</div>
<div className="font-medium text-neutral-900 font-sans" style={{}}>hive</div>
</div>
</div>
<div className="p-6 rounded-2xl border shadow-sm flex items-center gap-4 bg-white border-neutral-200" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-sans" style={{}}>Trust</div>
<div className="font-medium text-neutral-900 font-sans" style={{}}>roomangel</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-neutral-200 bg-white" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-wider uppercase mb-8 text-neutral-400 font-sans" style={{}}>
          Powering the next generation of hospitality
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-neutral-800 font-sans" style={{}}>HOTEL<span className="font-light font-sans">OS</span></span>
<span className="text-xl font-bold tracking-tight italic text-neutral-800 font-sans" style={{}}>Vertex</span>
<span className="text-xl font-medium tracking-tighter border-2 px-2 text-neutral-800 border-neutral-800 font-sans" style={{}}>FRAME</span>
<span className="text-xl font-bold tracking-tight text-neutral-800 font-sans" style={{}}>M<span className="text-neutral-400 font-sans" style={{}}>ono</span></span>
<span className="text-xl font-light tracking-widest text-neutral-800 font-sans" style={{}}>HORIZON</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="ecosystem" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-4xl tracking-tight mb-4 text-neutral-900 font-google-sans-flex font-normal" style={{}}>
            The roomangel Ecosystem
          </h2>
<p className="text-neutral-500 text-lg font-light font-sans" style={{}}>
            Four pillars working in sequence to transform your hotel's operation from the inside out.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-3xl p-8 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-0 transition-transform group-hover:scale-110 origin-top-right bg-indigo-50"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-100 text-indigo-600">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-1 text-neutral-900 font-sans" style={{}}>assetware.ai</h3>
<p className="text-xs font-bold uppercase tracking-wider mb-4 text-indigo-600 font-sans">The Connected Backbone</p>
<p className="text-neutral-500 font-light text-sm leading-relaxed font-sans" style={{}}>
                   Don't add more software—add Assetware. Our integration tool unifies your fragmented systems, ensuring your data is clean, connected, and ready for the next era.
                </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100" style={{}}>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-sans" style={{}}>
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
                   Unified API
                </div>
</div>
</div>
</div>

<div className="group rounded-3xl p-8 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-0 transition-transform group-hover:scale-110 origin-top-right bg-cyan-50"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-cyan-100 text-cyan-600">
<iconify-icon icon="solar:stars-minimalistic-bold" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-1 text-neutral-900 font-sans" style={{}}>hive</h3>
<p className="text-xs font-bold uppercase tracking-wider mb-4 text-cyan-600 font-sans">The Performance Engine</p>
<p className="text-neutral-500 font-light text-sm leading-relaxed font-sans" style={{}}>
                   More than just reporting—growth engineered. Hive uses advanced AI to analyze your operation, surfacing the exact levers you need to pull to increase revenue.
                </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100" style={{}}>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-sans" style={{}}>
<iconify-icon icon="solar:graph-new-linear"></iconify-icon>
                    Causal Inference AI
                 </div>
</div>
</div>
</div>

<div className="group rounded-3xl p-8 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden bg-white border-neutral-200" style={{}}>
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-0 transition-transform group-hover:scale-110 origin-top-right bg-blue-50"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-1 text-neutral-900 font-sans" style={{}}>roomangel.com</h3>
<p className="text-xs font-bold uppercase tracking-wider mb-4 text-blue-600 font-sans">The Platform</p>
<p className="text-neutral-500 font-light text-sm leading-relaxed font-sans" style={{}}>
                   The storefront where optimized rates meet guests. A direct booking platform that eliminates OTA complexity and puts the hotel in control.
                </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100" style={{}}>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-400 font-sans" style={{}}>
<iconify-icon icon="solar:globe-linear"></iconify-icon>
                    Direct Distribution
                 </div>
</div>
</div>
</div>

<div className="group rounded-3xl p-8 border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 relative overflow-hidden bg-neutral-900 border-neutral-800" style={{}}>
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-0 transition-transform group-hover:scale-110 origin-top-right bg-blue-900/20"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-1 text-white font-sans">Verified</h3>
<p className="text-xs font-bold uppercase tracking-wider mb-4 text-blue-400 font-sans">The Trust Standard</p>
<p className="font-light text-sm leading-relaxed text-neutral-400 font-sans" style={{}}>
                   A not-for-profit initiative returning power to hotels. Our "Verified" stamp eliminates complexity and builds the ultimate foundation of trust with your guests.
                </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-800" style={{}}>
<div className="flex items-center gap-2 text-xs font-mono text-blue-500 font-sans">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    Regulated Framework
                 </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-x-16 gap-y-16 items-center">

<div className="w-full lg:w-1/2 order-2 lg:order-1">
<span className="font-semibold tracking-wider uppercase text-xs mb-2 block text-indigo-600 font-sans">The Triple Threat</span>
<h2 className="text-3xl md:text-4xl tracking-tight mb-6 text-neutral-900 font-google-sans-flex font-normal" style={{}}>
                   A closed-loop system for success
                </h2>
<p className="text-lg text-neutral-500 font-light mb-8 font-sans" style={{}}>
                   Our ecosystem removes the friction from modern hospitality. By integrating these four pillars, we’ve built a 'closed-loop' system where connectivity powers intelligence, and intelligence builds the trust required to win.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-neutral-100 text-neutral-900 font-sans" style={{}}>1</div>
</div>
<div className="">
<h4 className="text-base font-medium text-neutral-900 font-sans" style={{}}>Unify with Assetware</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans" style={{}}>Plugs into your fragmented tech stack to unify data.</p>
</div>
</div>
<div className="w-px h-6 ml-4 bg-neutral-200" style={{}}></div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-cyan-100 text-cyan-600 font-sans">2</div>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 font-sans" style={{}}>Optimize with Hive</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans" style={{}}>Analyzes patterns and predicts your next growth move.</p>
</div>
</div>
<div className="w-px h-6 ml-4 bg-neutral-200" style={{}}></div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm bg-blue-100 text-blue-600 font-sans">3</div>
</div>
<div>
<h4 className="text-base font-medium text-neutral-900 font-sans" style={{}}>Convert with Roomangel</h4>
<p className="text-sm text-neutral-500 mt-1 font-sans" style={{}}>Secures guest trust through independent verification.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 order-1 lg:order-2">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-2xl blur-2xl opacity-20"></div>
<div className="relative border rounded-2xl shadow-xl overflow-hidden p-8 bg-white border-neutral-200" style={{}}>

<div className="flex flex-col gap-6">

<div className="flex items-center justify-between p-4 rounded-xl border bg-neutral-50 border-neutral-100" style={{}}>
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg shadow-sm text-neutral-500 bg-white" style={{}}>
<iconify-icon icon="solar:server-path-linear" width="24"></iconify-icon>
</div>
<div className="text-sm">
<div className="font-medium text-neutral-900 font-sans" style={{}}>Fragmented Data</div>
<div className="text-neutral-400 font-sans" style={{}}>PMS, CRS, POS</div>
</div>
</div>
<iconify-icon className="text-neutral-300" icon="solar:arrow-right-linear" style={{}}></iconify-icon>
</div>

<div className="flex items-center justify-center py-2">
<div className="px-4 py-1 rounded-full text-xs font-mono font-medium border bg-indigo-50 text-indigo-600 border-indigo-100 font-sans">
                               processing via assetware.ai + hive
                            </div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border bg-blue-50/50 border-blue-100">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg shadow-sm bg-white text-blue-600">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div className="text-sm">
<div className="font-medium text-neutral-900 font-sans" style={{}}>Direct Booking</div>
<div className="text-blue-600 font-sans">Verified &amp; Optimized</div>
</div>
</div>
<div className="text-right">
<div className="text-xs uppercase tracking-wide text-neutral-400 font-sans" style={{}}>Result</div>
<div className="font-bold text-neutral-900 font-sans" style={{}}>+24% RevPAR</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900" id="verified" style={{}}>

<div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 bg-blue-900/20"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 bg-indigo-900/20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex mb-8 items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400">
<iconify-icon icon="solar:shield-check-bold" width="40"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 text-white font-google-sans-flex font-normal">
          Verified by roomangel
        </h2>
<p className="text-xl font-light mb-10 leading-relaxed text-neutral-300 font-sans" style={{}}>
          "Verified by roomangel is our industry-backed guarantee. It tells your guests that their rate is independently validated, their booking is direct, and their trust is well-placed—backed by a fully regulated quality assurance process."
        </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto mt-12">
<div className="p-6 rounded-2xl border backdrop-blur-sm bg-white/5 border-white/10">
<iconify-icon className="mb-3 text-blue-400" icon="solar:tag-price-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1 text-white font-sans">Validated Rates</h4>
<p className="text-sm text-neutral-400 font-sans" style={{}}>Ensuring fairness and transparency for every transaction.</p>
</div>
<div className="p-6 rounded-2xl border backdrop-blur-sm bg-white/5 border-white/10">
<iconify-icon className="mb-3 text-blue-400" icon="solar:user-check-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1 text-white font-sans">Direct Connection</h4>
<p className="text-sm text-neutral-400 font-sans" style={{}}>No middlemen. Just you and your guest.</p>
</div>
<div className="p-6 rounded-2xl border backdrop-blur-sm bg-white/5 border-white/10">
<iconify-icon className="mb-3 text-blue-400" icon="solar:document-add-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1 text-white font-sans">Regulated Trust</h4>
<p className="text-sm text-neutral-400 font-sans" style={{}}>Industry-owned standards protecting the ecosystem.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="platform" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<span className="font-semibold tracking-wider uppercase text-xs mb-2 block text-indigo-600 font-sans">roomangel.com</span>
<h2 className="text-3xl tracking-tight mb-4 text-neutral-900 font-google-sans-flex font-normal" style={{}}>
                   The Storefront
                </h2>
<p className="text-lg text-neutral-500 font-light font-sans" style={{}}>
                   Where optimized strategy meets the market. A platform designed to showcase verified properties to discerning travelers.
                </p>
</div>
<a className="group inline-flex items-center gap-2 font-medium text-indigo-600 hover:text-indigo-700 font-sans" href="#">
                Visit the platform
                <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border group border-neutral-200" style={{}}>

<div className="aspect-[16/9] md:aspect-[21/9] relative bg-white">
<img alt="Platform Preview" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-neutral-900/30" style={{}}></div>

<div className="absolute bottom-8 left-8 backdrop-blur p-6 rounded-xl shadow-lg border max-w-sm bg-white/95 border-white/20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="text-blue-500">
<iconify-icon icon="solar:verified-check-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-wide text-neutral-900 font-sans" style={{}}>Verified by roomangel</span>
</div>
</div>
<h3 className="text-xl font-medium mb-1 text-neutral-900 font-sans" style={{}}>The Grand Vertex</h3>
<p className="text-sm text-neutral-500 mb-4 font-sans" style={{}}>London, United Kingdom</p>
<div className="flex justify-between items-center">
<div className="text-lg font-bold text-neutral-900 font-sans" style={{}}>£245<span className="text-sm font-normal text-neutral-500 font-sans" style={{}}>/night</span></div>
<button className="text-xs px-4 py-2 rounded-lg transition-colors bg-neutral-900 text-white hover:bg-neutral-800 font-sans" style={{}}>View Deal</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-12 bg-white border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded flex items-center justify-center bg-neutral-900 text-white" style={{}}>
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900 font-sans" style={{}}>
                roomangel.
              </span>
</a>
<p className="text-sm text-neutral-500 mb-6 max-w-xs font-sans" style={{}}>
              The ecosystem for modern hospitality. Connecting assetware, hive, and roomangel to build trust and drive growth.
            </p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#" style={{}}>
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#" style={{}}>
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium mb-4 text-neutral-900 font-sans" style={{}}>Ecosystem</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">assetware.ai</a></li>
<li className=""><a className="transition-colors hover:text-indigo-600 font-sans" href="#">hive</a></li>
<li className=""><a className="transition-colors hover:text-indigo-600 font-sans" href="#">roomangel</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-neutral-900 font-sans" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-neutral-900 font-sans" style={{}}>Resources</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Documentation</a></li>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">API Status</a></li>
<li><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Community</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-neutral-900 font-sans" style={{}}>Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500" style={{}}>
<li className=""><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Privacy</a></li>
<li className=""><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Terms</a></li>
<li className=""><a className="transition-colors hover:text-indigo-600 font-sans" href="#">Trust</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100" style={{}}>
<p className="text-xs text-neutral-400 font-sans" style={{}}>
            © 2023 roomangel Ecosystem. All rights reserved.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs text-neutral-500 font-sans" style={{}}>Ecosystem Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
