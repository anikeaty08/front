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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
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



        // Theme Toggling
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        // Simple Routing
        function route(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show target page
            const target = document.getElementById('page-' + pageId);
            if (target) {
                target.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }
    
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 dark:bg-indigo-600/20 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"></div>

<div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/10 blur-[100px] rounded-full mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/40 transition-colors duration-300">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 text-slate-900 dark:text-white group" href="#" onclick="route('home')">
<div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 transition-transform group-hover:scale-105">
<div className="absolute inset-0 rounded-lg bg-white/20 mix-blend-overlay"></div>
<span className="font-semibold tracking-tighter text-lg relative z-10 font-sans">W</span>
</div>
<span className="text-lg font-semibold tracking-tight font-sans">WorkGlobal.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors text-sm font-medium text-slate-600 font-sans" onclick="route('find-work')">Find Work</button>
<button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-sans" onclick="route('hire-talent')">Hire Talent</button>
<button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-sans" onclick="route('enterprise')">Enterprise</button>
<button className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-sans" onclick="route('pricing')">Pricing</button>
</div>

<div className="flex items-center gap-3">

<button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-500 dark:hover:text-white" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
<a className="hidden sm:block text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors font-sans" href="#">Log in</a>
<a className="group relative rounded-full px-0.5 py-0.5 bg-gradient-to-br from-indigo-500 to-fuchsia-500 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]" href="#">
<span className="block rounded-full bg-white dark:bg-slate-950 px-4 py-2 text-sm font-medium text-slate-900 dark:text-white transition-all group-hover:bg-slate-50 dark:group-hover:bg-slate-900 font-sans">
                            Start working
                        </span>
</a>
</div>
</div>
</div>
</nav>

<main className="min-h-screen" id="main-content">

<div className="page-section fade-in hidden" id="page-home">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">

<div className="mb-8 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 px-3 py-1 backdrop-blur-md transition-colors hover:border-indigo-500/40 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 cursor-pointer">
<span className="flex rounded-full bg-indigo-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm font-sans">New</span>
<span className="ml-2 text-xs font-medium text-indigo-700 dark:text-indigo-200 font-sans">Instant global payouts are here →</span>
</div>

<h1 className="mx-auto max-w-4xl text-4xl text-slate-900 dark:text-white sm:text-6xl lg:text-7xl font-bricolage font-semibold tracking-tighter" style={{}}>
                    The operating system for <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 animate-gradient font-bricolage font-semibold tracking-tighter" style={{}}>independent talent.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                    Connect with world-class companies, manage projects, and get paid instantly in your local currency.
                    No hidden fees, just pure work.
                </p>

<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white px-8 py-3.5 text-sm font-semibold text-white dark:text-slate-950 shadow-lg shadow-indigo-500/20 dark:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 active:scale-95 font-sans" onclick="route('find-work')">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
                            Find Opportunities
                        </button>
<button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-slate-700 dark:text-white shadow-sm backdrop-blur-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 active:scale-95 font-sans" onclick="route('hire-talent')">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                            Hire Freelancers
                        </button>
</div>

<div className="mt-16 border-t border-slate-200 dark:border-white/5 pt-10">
<p className="text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-500 font-sans">
                        Trusted by teams at</p>
<div className="mt-6 flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">

<span className="text-lg font-semibold tracking-tighter text-slate-800 dark:text-white font-sans">ACME</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 dark:text-white font-sans">Capsule</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 dark:text-white font-sans">Feather</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 dark:text-white font-sans">Spherule</span>
<span className="text-lg font-semibold tracking-tighter text-slate-800 dark:text-white font-sans">GlobalBank</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-transparent transition-colors duration-300">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl text-slate-900 dark:text-white sm:text-4xl font-bricolage font-semibold tracking-tighter" style={{}}>Everything you need to run your solo business.</h2>
<p className="mt-4 text-slate-600 dark:text-slate-400 font-sans">Stop juggling five different tools.
                        WorkGlobal integrates contracts, payments, and project management into one beautiful dashboard.
                    </p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 p-8 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
</div>
<div className="relative z-10 flex items-center gap-3 mb-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="solar:feed-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white font-sans">Curated Job Feed
                            </h3>
</div>

<div className="relative w-full rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950/50 p-4">
<div className="flex flex-col gap-3">
<div className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900 p-4 shadow-sm transition-transform group-hover:-translate-y-1">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-indigo-500/20 font-sans">
                                                D</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 dark:text-white font-sans">
                                                    Senior Product Designer</h4>
<p className="text-xs text-slate-500 mt-0.5 font-sans">DesignCo • Remote</p>
</div>
</div>
<span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400 font-sans">$85/hr</span>
</div>
</div>
<div className="rounded-lg border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 p-4 opacity-50">
<div className="flex justify-between items-start">
<div className="flex gap-3">
<div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-600 dark:text-orange-400 text-xs font-bold border border-orange-500/20 font-sans">
                                                S</div>
<div>
<h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-sans">
                                                    Frontend Engineer</h4>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 p-8 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-all hover:border-purple-500/30 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
</div>
<div className="relative z-10 flex items-center gap-3 mb-6">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white font-sans">Global Wallet
                            </h3>
</div>
<p className="relative z-10 mb-6 text-sm text-slate-600 dark:text-slate-400 font-sans">Receive
                            payments in USD, EUR, or GBP and withdraw to your local bank instantly.</p>

<div className="relative z-10 mx-auto h-32 w-full max-w-[240px] rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-4 text-white shadow-lg shadow-purple-900/40 transition-transform group-hover:scale-105 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl pointer-events-none">
</div>
<div className="flex justify-between items-center relative">
<span className="text-xs font-medium opacity-80 font-sans">WorkGlobal.</span>
<iconify-icon className="opacity-80" icon="solar:wifi-router-minimalistic-linear" width="16"></iconify-icon>
</div>
<div className="mt-6 text-lg font-mono tracking-widest opacity-90 drop-shadow-md font-sans">••••
                                4289</div>
</div>
</div>

<div className="group relative col-span-1 md:col-span-3 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/40 p-8 shadow-sm dark:shadow-2xl backdrop-blur-sm transition-all hover:border-blue-500/30 hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-1/2">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white font-sans">Income
                                        Analytics</h3>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 font-sans">Track your growth month
                                    over month with detailed breakdowns by client and project type.</p>
</div>

<div className="w-full md:w-1/2 h-24 flex items-end justify-between gap-2 px-4 border-b border-l border-slate-200 dark:border-white/10 pb-2 pl-2">
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[40%] group-hover:h-[50%] transition-all duration-500">
</div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[60%] group-hover:h-[65%] transition-all duration-500">
</div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[45%] group-hover:h-[55%] transition-all duration-500">
</div>
<div className="w-full bg-indigo-500/50 rounded-t-sm h-[80%] group-hover:h-[90%] transition-all duration-500">
</div>
<div className="w-full bg-indigo-600 dark:bg-indigo-500 rounded-t-sm h-[70%] group-hover:h-[95%] transition-all duration-500 shadow-lg shadow-indigo-500/20">
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section fade-in py-12 hidden" id="page-find-work">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="space-y-6">
<div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5 shadow-sm">
<h3 className="font-semibold text-slate-900 dark:text-white mb-4 font-sans">Filters</h3>

<div className="relative mb-6">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 pl-9 pr-3 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" placeholder="Search jobs..." type="text"/>
</div>

<div className="mb-6">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block font-sans">Category</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="accent-indigo-500 h-4 w-4 rounded border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-white font-sans">Design &amp; Creative</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="accent-indigo-500 h-4 w-4 rounded border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-white font-sans">Development</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="accent-indigo-500 h-4 w-4 rounded border-slate-300 dark:border-white/20 bg-slate-100 dark:bg-white/5" type="checkbox"/>
<span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-white font-sans">Marketing</span>
</label>
</div>
</div>

<div>
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 block font-sans">Hourly Rate</label>
<div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
<span className="font-sans">$0</span>
<input className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500" type="range"/>
<span className="font-sans">$200+</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-4">
<div className="flex justify-between items-center mb-4">
<h2 className="text-xl font-semibold text-slate-900 dark:text-white font-sans">Recommended for you
                        </h2>
<span className="text-sm text-slate-500 font-sans">248 results</span>
</div>

<div className="group rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xl font-sans">
                                    🚀</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans">
                                        Senior Product Designer</h3>
<p className="text-sm text-slate-500 font-sans">RocketShip Inc • Remote • Posted 2h ago
                                    </p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">Figma</span>
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">Design Systems</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-slate-900 dark:text-white font-sans">$80 - $120</span>
<span className="text-xs text-slate-500 font-sans">per hour</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xl font-sans">
                                    ⚡</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans">
                                        Frontend Developer (React/Next.js)</h3>
<p className="text-sm text-slate-500 font-sans">Bolt Systems • London (Hybrid) • Posted
                                        5h ago</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">React</span>
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">Tailwind</span>
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">TypeScript</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-slate-900 dark:text-white font-sans">$60 - $90</span>
<span className="text-xs text-slate-500 font-sans">per hour</span>
</div>
</div>
</div>

<div className="group rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-indigo-500/30 hover:shadow-md transition-all">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center text-xl font-sans">
                                    📐</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-sans">
                                        Brand Identity Specialist</h3>
<p className="text-sm text-slate-500 font-sans">Studio Arch • Remote • Posted 1d ago</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">Branding</span>
<span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 font-sans">Illustrator</span>
</div>
</div>
</div>
<div className="text-right">
<span className="block text-lg font-semibold text-slate-900 dark:text-white font-sans">$15k</span>
<span className="text-xs text-slate-500 font-sans">Fixed Price</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section fade-in py-16 hidden" id="page-hire-talent">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>World-class talent, available now.</h2>
<p className="mt-4 text-slate-600 dark:text-slate-400 font-sans">Vetted professionals ready to jump into
                    your team. 95% matching accuracy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all group">
<div className="flex items-center gap-4 mb-4">
<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 p-0.5">
<div className="h-full w-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xl font-bold text-slate-700 dark:text-white font-sans">
                                AS</div>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Alex Smith</h3>
<p className="text-sm text-indigo-600 dark:text-indigo-400 font-sans">Full Stack Developer</p>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1 font-sans">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
                                5.0 (42 jobs)
                            </div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 font-sans">Specializing in
                        React, Node.js, and high-performance web applications. Ex-Google engineer.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-semibold text-slate-900 dark:text-white font-sans">$95/hr</span>
<button className="rounded-full bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 hover:opacity-90 font-sans">View Profile</button>
</div>
</div>

<div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all group">
<div className="flex items-center gap-4 mb-4">
<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-500 p-0.5">
<div className="h-full w-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xl font-bold text-slate-700 dark:text-white font-sans">
                                JD</div>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Jane Doe</h3>
<p className="text-sm text-indigo-600 dark:text-indigo-400 font-sans">UX/UI Designer</p>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1 font-sans">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
                                4.9 (28 jobs)
                            </div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 font-sans">Creating intuitive
                        and beautiful digital experiences. Expert in Figma and Design Systems.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-semibold text-slate-900 dark:text-white font-sans">$85/hr</span>
<button className="rounded-full bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 hover:opacity-90 font-sans">View Profile</button>
</div>
</div>

<div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-lg transition-all group">
<div className="flex items-center gap-4 mb-4">
<div className="h-16 w-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 p-0.5">
<div className="h-full w-full rounded-full bg-white dark:bg-slate-900 flex items-center justify-center text-xl font-bold text-slate-700 dark:text-white font-sans">
                                MR</div>
</div>
<div>
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Marcus Ray</h3>
<p className="text-sm text-indigo-600 dark:text-indigo-400 font-sans">DevOps Engineer</p>
<div className="flex items-center gap-1 text-xs text-slate-500 mt-1 font-sans">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
                                5.0 (15 jobs)
                            </div>
</div>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 font-sans">AWS certified
                        professional. I help startups scale their infrastructure securely.</p>
<div className="flex items-center justify-between mt-auto">
<span className="font-semibold text-slate-900 dark:text-white font-sans">$120/hr</span>
<button className="rounded-full bg-slate-900 dark:bg-white px-4 py-2 text-xs font-semibold text-white dark:text-slate-900 hover:opacity-90 font-sans">View Profile</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section fade-in py-16 hidden" id="page-enterprise">
<div className="mx-auto max-w-4xl px-4 sm:px-6">
<div className="text-center mb-16">
<span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase text-xs font-sans">WorkGlobal Enterprise</span>
<h2 className="mt-4 text-4xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>Scale your workforce without the friction.</h2>
<p className="mt-4 text-lg text-slate-600 dark:text-slate-400 font-sans">Custom contracts, dedicated account
                    management, and consolidated billing for teams hiring 10+ freelancers.</p>
</div>
<div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-8 md:p-12 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900 dark:text-white font-sans">First Name</label>
<input className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900 dark:text-white font-sans">Last Name</label>
<input className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900 dark:text-white font-sans">Work Email</label>
<input className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900 dark:text-white font-sans">Company Size</label>
<select className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
<option className="font-sans">1-10 employees</option>
<option className="font-sans">11-50 employees</option>
<option className="font-sans">50-200 employees</option>
<option className="font-sans">200+ employees</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900 dark:text-white font-sans">How can we help?</label>
<textarea className="w-full rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 text-slate-900 dark:text-white focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" rows="4"></textarea>
</div>
<button className="w-full rounded-lg bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-[1.01] font-sans">Contact Sales</button>
</form>
</div>
</div>
</div>

<div className="page-section fade-in pt-16 pb-16" id="page-pricing">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>Transparent pricing for everyone.</h2>
<p className="mt-4 text-slate-600 dark:text-slate-400 font-sans">Start for free, upgrade as you grow. No
                    credit card required for basic accounts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-8 shadow-sm hover:border-indigo-500/30 transition-all">
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Freelancer</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>$0</span>
<span className="ml-1 text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-sans">Perfect for just starting out.
                    </p>
<button className="mt-8 w-full rounded-lg border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-sans">Get Started</button>
<ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Low 5% transaction fee</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Basic Profile</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Instant Payouts</li>
</ul>
</div>

<div className="relative rounded-2xl border border-indigo-500 bg-slate-50 dark:bg-slate-900 p-8 shadow-2xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white font-sans">
                        Most Popular</div>
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Pro</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>$29</span>
<span className="ml-1 text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-sans">For serious independent
                        workers.</p>
<button className="mt-8 w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/25 font-sans">Start Free Trial</button>
<ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> 0% transaction fee</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Verified Badge</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-8 shadow-sm hover:border-indigo-500/30 transition-all">
<h3 className="font-semibold text-slate-900 dark:text-white text-lg font-sans">Team</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl text-slate-900 dark:text-white font-bricolage font-semibold tracking-tighter" style={{}}>$99</span>
<span className="ml-1 text-slate-500 font-sans">/mo</span>
</div>
<p className="mt-4 text-sm text-slate-600 dark:text-slate-400 font-sans">Manage multiple freelancers.
                    </p>
<button className="mt-8 w-full rounded-lg border border-slate-200 dark:border-white/20 bg-slate-50 dark:bg-white/5 py-2.5 text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-sans">Contact Sales</button>
<ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400">
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Unlimited projects</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Team permissions</li>
<li className="flex items-center gap-3 font-sans"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Consolidated invoicing</li>
</ul>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-slate-950 pt-16 pb-8 transition-colors duration-300">
<div className="mx-auto max-w-6xl px-4 sm:px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#" onclick="route('home')">
<div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
<span className="font-bold text-xs font-sans">W</span>
</div>
<span className="font-semibold tracking-tight text-slate-900 dark:text-white font-sans">WorkGlobal.</span>
</a>
<p className="max-w-xs text-sm text-slate-500 font-sans">Empowering the world's independent workforce with tools to grow, manage, and succeed.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-4 text-sm font-sans">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" onclick="route('find-work')">Browse Jobs</button></li>
<li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" onclick="route('hire-talent')">Talent Search</button></li>
<li><button className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" onclick="route('pricing')">Pricing</button></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-4 text-sm font-sans">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">About</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 dark:text-white mb-4 text-sm font-sans">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">Freelance Guide</a></li>
<li><a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-sans" href="#">Tax Calculator</a></li>
</ul>
</div>
</div>
<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-200 dark:border-white/5 pt-8 sm:flex-row">
<p className="text-xs text-slate-500 font-sans">© 2023 WorkGlobal Inc. All rights reserved.</p>
<div className="flex gap-4 text-slate-400 dark:text-slate-500">
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:mention-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#"><iconify-icon icon="solar:planet-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
