import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
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



    function switchBilling(period) {
      const monthlyBtn = document.getElementById('toggle-monthly');
      const yearlyBtn = document.getElementById('toggle-yearly');
      const pricePro = document.getElementById('price-pro');
      const priceTeam = document.getElementById('price-team');

      // Classes for active/inactive states
      const activeClasses = ['bg-white', 'shadow-sm', 'ring-1', 'ring-black/5', 'text-slate-900'];
      const inactiveClasses = ['text-slate-500', 'hover:text-slate-900'];

      if (period === 'monthly') {
        // Activate Monthly
        monthlyBtn.classList.add(...activeClasses);
        monthlyBtn.classList.remove(...inactiveClasses);
        
        // Deactivate Yearly
        yearlyBtn.classList.remove(...activeClasses);
        yearlyBtn.classList.add(...inactiveClasses);

        // Update Prices
        pricePro.innerText = '$29';
        priceTeam.innerText = '$99';
      } else {
        // Activate Yearly
        yearlyBtn.classList.add(...activeClasses);
        yearlyBtn.classList.remove(...inactiveClasses);
        
        // Deactivate Monthly
        monthlyBtn.classList.remove(...activeClasses);
        monthlyBtn.classList.add(...inactiveClasses);

        // Update Prices
        pricePro.innerText = '$24';
        priceTeam.innerText = '$79';
      }
    }
  


        function toggleFaq(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('iconify-icon');
          const isOpen = content.classList.contains('grid-rows-[1fr]');

          if (isOpen) {
            content.classList.remove('grid-rows-[1fr]');
            content.classList.add('grid-rows-[0fr]');
            icon.style.transform = 'rotate(0deg)';
          } else {
            content.classList.remove('grid-rows-[0fr]');
            content.classList.add('grid-rows-[1fr]');
             icon.style.transform = 'rotate(180deg)';
          }
        }
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="stars absolute inset-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[100px] rounded-full mix-blend-multiply bg-indigo-100/50"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full bg-indigo-100/40 mix-blend-multiply"></div>
</div>

<nav className="sticky z-50 flex bg-white/80 max-w-6xl border-slate-200/60 border rounded-2xl mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 top-4 shadow-sm backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2 pl-3 hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center shadow-lg to-indigo-600 shadow-indigo-500/20">
<iconify-icon className="text-white text-xl" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
<span className="font-medium text-xl tracking-tight text-slate-900 font-sans">
          AIBOTS
        </span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-xl transition-all font-sans" href="#">
          Courses
        </a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans" href="#">
          Mentorship
        </a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans" href="#">
          Paths
        </a>
<div className="relative group">
<button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-all font-sans">
            Resources
            <iconify-icon className="text-slate-400 group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-4 pr-1 sm:pr-0">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#">
          Log In
        </a>
<a className="px-4 sm:px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 transition-all active:scale-95 font-sans whitespace-nowrap" href="#">
          Start Learning
        </a>
<button className="md:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors active:scale-95">
<iconify-icon className="text-xl block" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative items-center">

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white shadow-sm backdrop-blur-sm text-xs text-slate-500 animate-entry delay-100">
<iconify-icon className="text-sm text-indigo-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="font-sans" style={{}}>
            The Next Generation of AI Education
          </span>
</div>

<h1 className="lg:text-[76px] leading-[1.05] animate-entry delay-150 text-5xl text-slate-900 max-w-xl mb-6 tracking-tight font-manrope font-medium" style={{}}>
          Master AI Engineering. Build the Future.
        </h1>

<p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed animate-entry delay-200 font-sans" style={{}}>
          Stop watching static videos. Engage with interactive AI tutors,
          real-world projects, and a global community of builders.
        </p>

<div className="flex flex-wrap gap-6 items-center animate-entry delay-300">
<button className="group relative px-8 py-3.5 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 overflow-hidden bg-indigo-600">
<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative flex items-center justify-center gap-2">
<span className="font-sans">Explore Paths</span>
</div>
</button>
<button className="relative px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-lg font-medium backdrop-blur-md transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 flex items-center gap-2 shadow-sm hover:text-indigo-600">
<span className="font-sans">View Syllabus</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 animate-entry delay-500 z-10 mt-0 relative justify-center">

<div className="electric-card overflow-hidden bg-white w-[360px] rounded-[32px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] relative ring-1 ring-slate-200/50">

<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 z-0 from-indigo-400 via-indigo-200 from-indigo-400/10"></div>

<div className="z-10 flex flex-col overflow-hidden bg-white h-full rounded-[30px] pt-8 pr-8 pb-8 pl-8 relative items-start" style={{}}>

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b to-transparent from-indigo-50/80"></div>

<div className="flex justify-between w-full items-center mb-6 relative">
<span className="text-[10px] uppercase text-slate-500 border border-slate-200 px-2 py-1 rounded bg-slate-50 flex items-center gap-1.5 font-sans" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Learning Streak
              </span>
<span className="text-[10px] font-mono text-slate-400 tracking-wider font-sans" style={{}}>
                DAY 12
              </span>
</div>
<h3 className="text-xl text-slate-900 mb-2 tracking-tight font-semibold font-sans" style={{}}>
              Today's Curriculum
            </h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed font-sans" style={{}}>
              You have 3 modules to complete today.
            </p>

<div className="w-full mb-8 space-y-3">

<div className="flex items-center gap-3 group">
<div className="w-5 h-5 rounded-[6px] border border-green-200 bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 line-through decoration-slate-300 font-sans" style={{}}>
                  Intro to Neural Networks
                </span>
<span className="ml-auto text-[10px] text-slate-400 font-mono font-sans" style={{}}>
                  100%
                </span>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity to-indigo-200"></div>
<div className="relative flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-md">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 flex items-center justify-center shadow-[0_4px_10px_rgba(79,70,229,0.3)] text-white to-indigo-600">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-slate-900 font-medium font-sans" style={{}}>
                      Transformers Deep Dive
                    </span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-indigo-600 font-sans" style={{}}>
                        Video + Lab
                      </span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-400"></span>
<span className="text-[10px] text-slate-500 font-sans" style={{}}>
                        25m left
                      </span>
</div>
</div>
<span className="ml-auto text-[10px] text-slate-600 font-mono bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded font-sans" style={{}}>
                    RESUME
                  </span>
</div>
</div>

<div className="flex items-center gap-3 group opacity-80">
<div className="w-5 h-5 rounded-[6px] border border-slate-200 hover:border-indigo-400 transition-colors bg-white flex items-center justify-center text-slate-400">
<iconify-icon className="text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-500 font-sans" style={{}}>
                  Advanced Python Quiz
                </span>
<span className="ml-auto text-[10px] text-slate-400 font-mono font-sans" style={{}}>
                  10m
                </span>
</div>
</div>

<button className="hover:brightness-105 transition-all text-sm text-white bg-gradient-to-r w-full rounded-full border-t mb-8 pt-3 pb-3 from-indigo-600 shadow-[0_4px_15px_rgba(79,70,229,0.25)] font-sans border-indigo-400/20 via-indigo-600 to-sky-600" style={{}}>
              Continue Learning
            </button>

<div className="flex items-center justify-between w-full pt-4 border-t border-slate-100">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans" style={{}}>
                  XP Gained
                </span>
<div className="flex items-center gap-1.5">
<span className="text-slate-900 font-medium font-sans" style={{}}>
                    2,450
                  </span>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 py-px rounded font-sans" style={{}}>
                    +15%
                  </span>
</div>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans" style={{}}>
                  Study Time
                </span>
<span className="text-slate-900 font-medium font-sans" style={{}}>
                  5h 12m
                </span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-0 animate max-w-7xl mr-auto ml-auto pt-0 pr-2.5 pb-24 pl-2.5 relative perspective-distant group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] blur-[120px] rounded-full z-0 bg-indigo-100/50 transition-transform duration-1000 group-hover:scale-125 group-hover:bg-indigo-200/40"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform-style-preserve-3d">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-white/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] animate bg-white/80 ring-slate-200 ring-1 rounded-2xl relative shadow-2xl backdrop-blur-md rotate-x-5 hover:rotate-x-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] transform-style-preserve-3d">

<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-90 z-30"></div>

<div className="flex sm:px-6 bg-white border-slate-100 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between relative z-20">
<div className="flex items-center gap-3 text-sm text-slate-500">
<a className="inline-flex items-center gap-2 text-slate-900 transition-colors font-sans" href="#" style={{}}>
                AIBots Edu
              </a>
<span className="opacity-40 font-sans" style={{}}>/</span>
<span className="text-slate-900 font-sans" style={{}}>
                My Classroom
              </span>
<span className="inline text-[11px] font-sans" style={{}}>
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-500 inline-block mr-1"></span>
                Online
              </span>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-slate-50 ring-1 ring-slate-200 rounded-lg pl-2.5 pr-2.5 h-8">
<iconify-icon className="text-slate-400 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-48" placeholder="Search courses..." type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white text-slate-600 text-xs ring-1 ring-slate-200 px-3 py-1.5 hover:bg-slate-50 transition font-sans" style={{}}>
<iconify-icon className="text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
                Study Group
              </button>
</div>
</div>

<div className="grid grid-cols-12 z-10 relative">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-slate-50/50 border-slate-100 border-r">
<div className="pt-4 pr-4 pb-4 pl-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/10 text-sm hover:brightness-110 transition-all px-3 py-2 font-sans" style={{}}>
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                  New Goal
                </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans" style={{}}>
                    Menu
                  </div>
<ul className="space-y-1">
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-900 bg-white ring-1 ring-slate-200 shadow-sm font-sans" href="#" style={{}}>
<iconify-icon icon="solar:widget-linear"></iconify-icon>
                        Dashboard
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#" style={{}}>
<iconify-icon icon="solar:book-linear"></iconify-icon>
                        My Courses
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#" style={{}}>
<iconify-icon icon="solar:medal-star-circle-linear"></iconify-icon>
                        Certificates
                        <span className="ml-auto text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-sans" style={{}}>
                          2
                        </span>
</a>
</li>
</ul>
</div>

<div className="">
<div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans" style={{}}>
                    Active Paths
                  </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        Machine Learning
                      </a>
</li>
<li className="">
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        Full Stack AI
                      </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#" style={{}}>
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        Python Basics
                      </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-white">

<div className="px-4 sm:px-6 py-3 border-b border-slate-100 overflow-x-auto">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-slate-900 border-b-2 border-indigo-600 pb-3 -mb-3.5 font-sans" style={{}}>
                    Current
                  </button>
<button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans" style={{}}>
                    Completed
                  </button>
<button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans" style={{}}>
                    Saved
                  </button>
<button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans" style={{}}>
                    Assignments
                  </button>
</div>
</div>

<div className="px-4 sm:px-6 py-6 border-b border-slate-100 bg-slate-50/30">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-slate-900 text-2xl font-manrope font-medium" style={{}}>
                      Full Stack AI Engineer
                    </h3>
<span className="text-[11px] rounded-md bg-green-100 text-green-700 ring-1 px-2 py-0.5 uppercase ring-green-600/20 font-sans" style={{}}>
                      Career Path
                    </span>
</div>
<div className="text-xs text-slate-500 flex items-center gap-1.5 font-sans" style={{}}>
<iconify-icon className="text-orange-500 text-sm" icon="solar:flame-linear"></iconify-icon>
                    Top Rated
                  </div>
</div>
<div className="mt-2 text-sm text-slate-500 font-sans" style={{}}>
                  You have completed
                  <span className="text-slate-900 font-medium font-sans" style={{}}>
                    12 modules
                  </span>
                  and have
                  <span className="text-slate-900 font-medium font-sans" style={{}}>
                    2 projects
                  </span>
                  pending review.
                </div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-4">

<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow group cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-10 h-10 rounded-md border border-slate-200 bg-slate-50 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl text-indigo-600" icon="solar:code-square-linear"></iconify-icon>
</div>
</div>
<div className="">
<div className="text-sm text-slate-900 transition-colors font-medium font-sans" style={{}}>
                          Advanced RAG Pipelines
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans flex items-center gap-2">
<span className="flex items-center gap-1 font-sans" style={{}}>
<iconify-icon className="text-[10px]" icon="solar:clock-circle-linear"></iconify-icon>
                            2h 15m
                          </span>
<span className="font-sans" style={{}}>•</span>
<span className="text-orange-600 font-sans" style={{}}>
                            Project Due
                          </span>
</div>
</div>
</div>
<div className="flex -space-x-2">
<button className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition font-sans">
                        Continue
                      </button>
</div>
</div>
</div>

<div className="rounded-xl ring-1 p-4 ring-indigo-100 bg-indigo-50/50">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-slate-900 font-medium font-sans" style={{}}>
                          Fine-Tuning Llama 3
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans" style={{}}>
                          Training Model • GPU Cluster Active
                        </div>
</div>
</div>
<div className="text-[11px] font-mono font-sans text-indigo-600" style={{}}>
                      42%
                    </div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="text-xs text-slate-500 font-sans" style={{}}>
                      Training
                    </span>
<div className="flex-1 h-1.5 rounded-full overflow-hidden bg-indigo-100">
<div className="h-full w-[42%] rounded-full bg-gradient-to-r to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.2)] from-indigo-500"></div>
</div>
<button className="text-[10px] rounded hover:bg-white text-slate-500 px-2 py-1 transition-colors uppercase font-sans" style={{}}>
                      View Logs
                    </button>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow border-l-4 border-l-indigo-600">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm text-slate-900 font-medium font-sans" style={{}}>
                          Live Workshop: Prompt Engineering
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans" style={{}}>
                          Starts in 15m • Instructor: Dr. Li
                        </div>
</div>
</div>
<span className="text-[10px] rounded-md bg-red-100 text-red-600 ring-1 ring-red-200 px-2 py-0.5 font-sans" style={{}}>
                      LIVE
                    </span>
</div>
<div className="mt-3 flex items-center gap-2">
<button className="text-xs rounded-md ring-1 px-3 py-1.5 transition-colors text-white font-sans bg-indigo-600 border-indigo-600 hover:bg-indigo-700" style={{}}>
                      Join Stream
                    </button>
<button className="text-xs rounded-md text-slate-500 hover:text-slate-900 px-3 py-1.5 transition-colors font-sans" style={{}}>
                      Remind Me
                    </button>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-100 bg-slate-50 p-4 opacity-70 group cursor-pointer">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-5 h-5 rounded-md border-2 border-green-500/50 flex items-center justify-center text-green-600">
<iconify-icon className="text-xs" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="">
<div className="text-sm text-slate-500 line-through font-sans" style={{}}>
                          Python Basics Quiz
                        </div>
<div className="text-xs text-slate-400 mt-0.5 font-sans" style={{}}>
                          Score: 95/100 • Completed yesterday
                        </div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 min-h-[520px] bg-slate-50/50 border-slate-100 border-l">
<div className="flex flex-col h-full">

<div className="px-5 py-5 border-b border-slate-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest font-sans">
                      Classmates Online
                    </h3>
<span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-mono font-sans">
                      12
                    </span>
</div>
<div className="space-y-4">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm group-hover:ring-slate-200 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e69e5f8e-07cd-4ef2-97e3-d4bcfccc3881_320w.webp" style={{}}/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-900 truncate font-sans">
                          Sarah J.
                        </div>
<div className="text-xs text-slate-500 truncate font-sans">
                          Studying
                          <span className="text-slate-700 font-sans">
                            Computer Vision
                          </span>
</div>
</div>
</div>

<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm group-hover:ring-slate-200 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp" style={{}}/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-slate-900 truncate font-sans">
                          David Chen
                        </div>
<div className="text-xs text-slate-500 truncate font-sans">
                          Coding
                          <span className="text-slate-700 font-sans">Lab #4</span>
</div>
</div>
</div>
</div>
<button className="mt-5 w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-900 border border-dashed border-slate-300 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 font-sans">
<iconify-icon className="text-sm" icon="solar:chat-line-linear"></iconify-icon>
                    Open Study Chat
                  </button>
</div>

<div className="flex-1 px-5 py-5 overflow-y-auto custom-scrollbar">
<h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-5 font-sans">
                    Community Feed
                  </h3>
<div className="relative pl-2 space-y-8">

<div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200"></div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
<span className="font-medium text-slate-900 font-sans">
                          Alex
                        </span>
                        earned the
                        <span className="font-mono text-[10px] bg-slate-100 px-1 py-0.5 rounded text-slate-700 border border-slate-200 font-sans">
                          ML Specialist
                        </span>
                        cert
                      </p>
<span className="text-[10px] text-slate-400 mt-1 block font-sans">
                        10m ago
                      </span>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
<span className="font-medium text-slate-900 font-sans">
                          AI Tutor
                        </span>
                        posted new resources for
                        <span className="text-slate-900 font-sans">
                          "Ethics in AI"
                        </span>
</p>
<span className="text-[10px] text-slate-400 mt-1 block font-sans">
                        1h ago
                      </span>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
                        New discussion in
                        <span className="text-slate-900 font-sans">
                          "Reinforcement Learning"
                        </span>
</p>
<div className="mt-2 p-2 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-500 italic relative font-sans">
<div className="absolute left-0 top-2 bottom-2 w-0.5 bg-orange-300 rounded-r"></div>
                        "Can someone explain Q-Learning simply?"
                      </div>
<span className="text-[10px] text-slate-400 mt-1 block font-sans">
                        2h ago
                      </span>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative group/section" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', -BorderRadiusBefore: '24px'}}>


<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">

<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              01
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
              Platform Features
            </span>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 gap-x-10 gap-y-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
                Learn by doing.
                <span className="block text-slate-400 font-manrope font-medium transition-colors duration-500 group-hover/section:text-slate-500">
                  Mastery you can verify.
                </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                Our curriculum adapts to your pace, providing instant feedback
                and personalized challenges to ensure deep understanding.
              </p>
</div>

<button className="group/btn flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm active:scale-95 transition-all duration-300 font-sans whitespace-nowrap">
<span className="font-sans">View All Features</span>
<iconify-icon className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-x-6 gap-y-6 perspective-distant">

<div className="group flex flex-col overflow-hidden transition-all duration-500 md:col-span-1 bg-white border-slate-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<style>
              @keyframes orbit-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes breathe-glow {
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
                50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(59, 130, 246, 0.2); }
              }
            </style>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 rounded-full blur-3xl transform scale-75 from-indigo-50 transition-all duration-700 group-hover:scale-90 group-hover:opacity-100"></div>
<svg className="w-full h-full z-10 text-indigo-200 transition-colors duration-500 group-hover:text-indigo-300" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<g className="" style={{transformOrigin: '100px 100px', animation: 'orbit-slow 12s linear infinite'}}>
<circle className="opacity-80" cx="100" cy="100" r="80" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="1"></circle>
<circle className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" cx="100" cy="20" fill="#3B82F6" r="3"></circle>
<circle className="opacity-80" cx="180" cy="100" fill="#60A5FA" r="2.5"></circle>
</g>
<circle className="opacity-60" cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"></circle>
</svg>

<div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full border border-slate-200 z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-indigo-200/50" style={{animation: 'breathe-glow 4s ease-in-out infinite'}}>
<div className="absolute inset-0 rounded-full blur-sm bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-2xl text-indigo-600 transition-transform duration-500 group-hover:rotate-12" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                AI Personal Tutor
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                24/7 assistance for debugging code, explaining complex concepts,
                and personalized quiz generation.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] px-8 py-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<style>
              @keyframes flowData {
                0% { stroke-dashoffset: 120; opacity: 0; }
                15% { opacity: 1; }
                85% { opacity: 1; }
                100% { stroke-dashoffset: 0; opacity: 0; }
              }
            </style>

<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-50 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100/60 transition-colors duration-700"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<svg className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" fill="none" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 200">
<defs>
<lineargradient id="flowGradientLeft" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#60A5FA" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#3B82F6" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="text-slate-200" d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1"></path>
<path className="text-slate-200" d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1"></path>
<path d="M50 100 L120 100 L150 70" stroke="url(#flowGradientLeft)" stroke-dasharray="120" stroke-dashoffset="120" strokeLinecap="round" strokeWidth="2" style={{animation: 'flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
</svg>

<div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out">
<div className="w-32 h-24 border border-slate-200 bg-white rounded-lg flex flex-col p-2 shadow-2xl z-10 relative overflow-hidden font-mono text-[8px] text-slate-700 leading-tight group-hover:border-indigo-200 transition-colors duration-300">
<span className="opacity-50 text-slate-400 font-sans">
                    // executing code...
                  </span>
<span className="font-sans text-indigo-600/80">&gt; import torch</span>
<span className="font-sans">&gt; model = Transformer()</span>
<span className="font-sans text-green-600/80">&gt; training started...</span>
<span className="animate-pulse font-sans text-indigo-600">_</span>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                In-Browser Coding Labs
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                No setup required. Access powerful GPU-backed environments
                directly in your browser to build and train models.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] px-8 py-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<style>
              @keyframes shimmer-lock {
                0%, 100% { opacity: 0.4; border-color: rgba(148, 163, 184, 0.2); transform: scale(1); }
                50% { opacity: 0.8; border-color: rgba(148, 163, 184, 0.4); transform: scale(1.05); }
              }
              @keyframes active-pulse {
                0%, 100% { box-shadow: 0 10px 25px rgba(79, 70, 229, 0.15); transform: scale(1); border-color: rgba(79, 70, 229, 0.1); }
                50% { box-shadow: 0 15px 35px rgba(79, 70, 229, 0.25); transform: scale(1.02); border-color: rgba(79, 70, 229, 0.3); }
              }
            </style>

<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full pointer-events-none bg-indigo-100 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:border-slate-300 transition-colors duration-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '0s'}}>
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>

<div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-xl z-10 border border-slate-100 ring-4 ring-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:ring-indigo-50" style={{animation: 'active-pulse 3s ease-in-out infinite'}}>
<iconify-icon className="text-4xl text-indigo-600" icon="solar:diploma-verified-linear"></iconify-icon>
<div className="absolute -bottom-3 bg-slate-900 text-white border border-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 delay-100">
<span className="text-[9px] font-mono tracking-wider font-semibold font-sans">
                      VERIFIED
                    </span>
</div>
</div>

<div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:border-slate-300 transition-colors duration-500" style={{animation: 'shimmer-lock 4s ease-in-out infinite', animationDelay: '2s'}}>
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                Industry-Recognized Certification
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                Complete projects and assessments to earn certificates that
                showcase your skills to top employers.
              </p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden transition-all duration-500 bg-slate-50 border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-inner hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<div className="absolute inset-0 opacity-[0.4] pointer-events-none group-hover:opacity-60 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-6xl text-slate-300 transition-all duration-500 group-hover:text-indigo-500 group-hover:scale-110 group-hover:-rotate-3" icon="solar:graph-up-linear"></iconify-icon>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                Career Growth
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                Connect with hiring partners and get mentorship to land your
                dream job in AI.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', -BorderRadiusBefore: '24px'}}>

<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">
<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              02
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
              The Curriculum
            </span>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium">
                A structured path to
                <span className="block text-slate-400 font-manrope font-medium">
                  expertise.
                </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                Navigate through connected domains of knowledge. From
                foundational Python to advanced Large Language Models.
              </p>
</div>
<button className="group flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 transition font-sans whitespace-nowrap">
<span className="font-sans">View Full Syllabus</span>
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="min-h-[560px] flex md:mt-0 w-full max-w-6xl mt-16 mr-auto ml-auto pr-4 pl-4 relative items-center justify-center">

<svg className="absolute inset-0 hidden h-full w-full pointer-events-none md:block" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 560">

<defs>
<lineargradient id="noodleGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4F46E5" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#818CF8" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#4F46E5" stop-opacity="0"></stop>
</lineargradient>
<filter height="160%" id="wireGlow" width="160%" x="-30%" y="-30%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>
<path d="M 165 430 L 290 430 Q 360 430 360 360 V 305 Q 360 280 390 280 L 440 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>
<path d="M 560 280 L 771 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>

<path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="3s" from="1000" repeatcount="indefinite" to="0"></animate>
</path>
</svg>

<div className="relative z-10 grid h-full w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-orange-500 text-3xl" icon="solar:code-circle-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                    Python
                  </span>
</div>
</div>

<div className="group relative md:translate-x-16">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-3xl text-indigo-500" icon="solar:database-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                    Data
                  </span>
</div>
</div>
</div>

<div className="flex items-center justify-center py-10 md:py-0">
<div className="relative">
<div className="absolute -inset-10 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(99,102,241,0.2),_transparent_65%)]"></div>
<div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-indigo-100 bg-white backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(99,102,241,0.25)] md:h-[132px] md:w-[132px]">
<iconify-icon className="text-indigo-600 text-5xl" icon="solar:smart-home-angle-linear"></iconify-icon>
</div>
<span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-slate-900 font-medium font-sans">
                  AI Mastery
                </span>
</div>
</div>

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-emerald-500 text-3xl" icon="solar:chat-square-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                    NLP
                  </span>
</div>
</div>

<div className="group relative md:-translate-x-16">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-3xl text-indigo-500" icon="solar:eye-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                    Vision
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-transparent max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative">
<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative gap-x-16 gap-y-4">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
<div className="flex gap-6 gap-x-10 gap-y-10 items-center">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600" style={{}}>
              03
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs text-slate-400 tracking-widest font-sans" style={{}}>
              Student Success
            </span>
</div>
</div>

<div className="min-h-[900px] flex flex-col overflow-hidden lg:block w-full max-w-7xl mr-auto ml-auto pt-12 pb-12 relative gap-x-16 gap-y-16 items-center justify-center">

<div className="absolute inset-0 pointer-events-none opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none z-0 bg-indigo-100/60"></div>

<div className="z-20 flex flex-col lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mb-0 text-center max-w-3xl mb-16 pr-6 pl-6 relative items-center" style={{}}>
<h2 className="flex flex-col gap-4">
<span className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium" style={{}}>
                From Beginner to Hired.
              </span>
<span className="block text-slate-500 text-lg max-w-2xl mx-auto font-sans" style={{}}>
                Join thousands of graduates working at top AI companies.
              </span>
</h2>
<button className="mt-8 group flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-900 text-sm font-medium rounded-full hover:bg-slate-50 transition font-sans whitespace-nowrap bg-white shadow-sm">
<span className="font-sans">See Alumni Stories</span>
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="z-10 lg:absolute lg:top-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative" id="testimonial-card-0">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 pt-8 pr-8 pb-8 pl-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans" style={{}}>
                "The hands-on labs were a game changer. I went from knowing zero
                Python to building my own LLM agents in 3 months."
              </p>
</div>
<div className="flex items-center gap-4 pl-4">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb5cb84d-a173-4050-a57f-3c150dcec588_320w.webp" style={{}}/>
<div className="flex flex-col">
<span className="author-name text-slate-900 font-medium text-base font-sans" style={{}}>
                  Jessica Wu
                </span>
<span className="author-role text-slate-500 text-sm font-sans" style={{}}>
                  AI Engineer at Anthropic
                </span>
</div>
</div>
</div>

<div className="relative z-10 w-full max-w-sm lg:absolute lg:top-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group" id="testimonial-card-1">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 px-8 py-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans" style={{}}>
                "The curriculum is rigorous but the AI tutor helped me unstuck
                instantly. Best investment for my career."
              </p>
</div>
<div className="flex items-center gap-4 pl-4">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/152b527e-f3bb-44db-98a8-e224a84a1318_320w.webp" style={{}}/>
<div className="flex flex-col">
<span className="author-name text-slate-900 font-medium text-base font-sans" style={{}}>
                  Alex Thompson
                </span>
<span className="author-role text-slate-500 text-sm font-sans" style={{}}>
                  Junior Dev at OpenAI
                </span>
</div>
</div>
</div>

<div className="z-10 lg:absolute lg:bottom-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative" id="testimonial-card-2">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 px-8 py-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans">
                "The community support is incredible. I found my co-founder here and we're now building our own AI startup."
              </p>
</div>
<div className="flex items-center gap-4 pl-4">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265ef229-059a-430b-b72b-0c721470692c_320w.jpg" style={{}}/>
<div className="flex flex-col">
<span className="author-name text-slate-900 font-medium text-base font-sans">
                  David Park
                </span>
<span className="author-role text-slate-500 text-sm font-sans">
                  Co-founder at Nexus AI
                </span>
</div>
</div>
</div>

<div className="z-10 lg:absolute lg:bottom-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative" id="testimonial-card-3">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 px-8 py-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans">
                "Transitioning from web dev to AI seemed impossible until I found this path. The projects are exactly what employers want."
              </p>
</div>
<div className="flex items-center gap-4 pl-4">
<img alt="User Avatar" className="avatar-img w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b6eee8f-691b-4350-9b31-3391c2e8d926_320w.jpg"/>
<div className="flex flex-col">
<span className="author-name text-slate-900 font-medium text-base font-sans">
                  Sarah Miller
                </span>
<span className="author-role text-slate-500 text-sm font-sans">
                  ML Engineer at Tesla
                </span>
</div>
</div>
</div>
</div>
</div>
</section><section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto group/section bg-white max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', -BorderRadiusBefore: '24px'}}>
<div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10 mb-16">
<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
          04
        </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
          Membership Plans
        </span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
            Invest in your
            <span className="block text-slate-400 transition-colors duration-500 group-hover/section:text-indigo-600">
              future intelligence.
            </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
            Choose the path that fits your learning style. From self-paced exploration to intensive bootcamps with 1:1 mentorship.
          </p>
</div>

<div className="flex items-center gap-4 bg-slate-100/50 p-1.5 rounded-full border border-slate-200">
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all font-sans bg-white shadow-sm ring-1 ring-black/5 text-slate-900" id="toggle-monthly" onclick="switchBilling('monthly')">
            Monthly
          </button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all font-sans relative group text-slate-500 hover:text-slate-900" id="toggle-yearly" onclick="switchBilling('yearly')">
            Yearly
            <span className="absolute -top-3 -right-6 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full uppercase tracking-wide">
              Save 20%
            </span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-distant">

<div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
<div className="mb-6">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-slate-600" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Starter</h3>
<p className="text-sm text-slate-500 font-sans leading-relaxed">Perfect for exploring AI concepts and basic Python.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-manrope font-bold text-slate-900">$0</span>
<span className="text-slate-400 font-sans">/mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            Access to 5 introductory courses
          </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            Community forum access
          </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            Basic coding sandbox
          </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 font-sans">
          Start for Free
        </button>
</div>

<div className="group relative flex flex-col p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-indigo-500/20 transform md:scale-105 z-10 hover:-translate-y-1 transition-all duration-300 border border-slate-800">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 mb-6">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
<iconify-icon className="text-2xl text-indigo-300" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
              Most Popular
            </span>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-2">Pro Scholar</h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed">Full access to career paths, projects, and certifications.</p>
</div>
<div className="relative z-10 mb-8 flex items-baseline gap-1">
<span className="text-4xl font-manrope font-bold text-white transition-all duration-300" id="price-pro">$29</span>
<span className="text-slate-500 font-sans">/mo</span>
</div>
<ul className="relative z-10 flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
            Unlimited Course Access
          </li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
            Verified Certificates
          </li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
            AI Tutor Assistance (Unlimited)
          </li>
</ul>
<button className="relative z-10 w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] font-sans flex items-center justify-center gap-2 group/btn">
<span>Get Started</span>
<iconify-icon className="transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
<div className="mb-6">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Team</h3>
<p className="text-sm text-slate-500 font-sans leading-relaxed">Admin controls and analytics for your engineering team.</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-4xl font-manrope font-bold text-slate-900 transition-all duration-300" id="price-team">$99</span>
<span className="text-slate-400 font-sans">/mo/user</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            Everything in Pro
          </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            Team Progress Analytics
          </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
            SSO &amp; Priority Support
          </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95 font-sans">
          Contact Sales
        </button>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500 font-sans">
        Trusted by engineering teams at
      </p>
<div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<svg className="h-6 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M35,5 H45 V25 H35 Z M50,5 H60 V25 H50 Z M65,5 L75,5 L80,15 L75,25 L65,25 L70,15 Z"></path>
</svg>
<svg className="h-5 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="20" width="20" x="30" y="5"></rect>
<path d="M60,25 L70,5 L80,25" stroke="currentColor" strokeWidth="3"></path>
</svg>
<svg className="h-6 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30">
<rect height="10" rx="5" width="20" x="5" y="10"></rect>
<circle cx="40" cy="15" r="8"></circle>
<rect height="20" width="10" x="60" y="5"></rect>
</svg>
<span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
          + 200 More
        </span>
</div>
</div>
</div>

</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:mx-auto animate bg-slate-100/50 max-w-7xl border-slate-200 border rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start relative gap-x-16 gap-y-16 items-start">
<div className="flex flex-col">
<div className="mb-12">
<p className="text-slate-500 mb-4 text-sm font-medium tracking-wide font-sans">
              Common Questions
            </p>
<h2 className="leading-[1.1] md:text-5xl text-5xl text-slate-900 font-manrope font-medium" style={{}}>
              Start your journey
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 font-manrope font-medium from-indigo-600" style={{}}>
                today
              </span>
</h2>
</div>
<div className="aspect-[4/5] overflow-hidden flex group shadow-indigo-100 bg-white w-full border-slate-200 border rounded-3xl relative shadow-xl items-center justify-center">

<div className="bg-center opacity-50 bg-cover absolute top-0 right-0 bottom-0 left-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244fac58-66ac-48ae-b48d-4bec089b4c26_1600w.webp)]"></div>
<iconify-icon className="text-6xl text-indigo-600 relative z-10" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col space-y-6 lg:mt-8 self-start">

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 font-sans transition-colors group-hover:text-indigo-600">
                Do I need prior coding experience?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  We have paths for complete beginners starting with Python, as
                  well as advanced tracks for experienced engineers looking to
                  specialize in AI.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Are the certificates recognized?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  Yes, our certificates are recognized by our network of 500+
                  hiring partners including major tech companies and AI
                  startups.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                How much time should I dedicate weekly?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  Most students spend 5-10 hours per week. Our flexible schedule allows you to learn at your own pace while keeping up with your cohort.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Is there a community aspect?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  Absolutely. You'll join a vibrant Discord community of peers, mentors, and alumni for daily support, networking, and collaboration.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Do you offer job placement support?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  We provide career coaching, resume reviews, and direct introductions to our hiring partner network upon graduation.
                </p>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="relative w-full overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
<div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[17vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-t from-slate-200/50 to-transparent opacity-80 translate-y-[20%] font-manrope font-medium" style={{}}>
          AIBOTS
        </h1>
</div>
<div className="relative z-10">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-14 lg:pt-24 lg:pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="flex items-start text-4xl font-medium text-slate-900 font-manrope mb-6">AIBOTS EDU</h2>
<p className="max-w-sm text-slate-500 text-lg leading-relaxed font-light mb-10 font-sans" style={{}}>
                Empowering the next generation of AI engineers through
                interactive learning, mentorship, and community.
              </p>
<div className="col-span-2 md:col-span-2 flex gap-4">
<a className="glass flex items-center justify-center hover:text-white hover:bg-white/10 transition text-slate-400 bg-slate-50 w-10 h-10 border-slate-300 border rounded-lg" href="#">
<svg aria-hidden="true" className="iconify iconify--simple-icons w-[16px] h-[16px] text-slate-500" data-icon="simple-icons:facebook" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="currentColor"></path>
</svg>
</a>
<a className="glass flex items-center justify-center hover:text-white hover:bg-white/10 transition text-slate-400 bg-slate-50 w-10 h-10 border-slate-300 border rounded-lg" href="#">
<svg aria-hidden="true" className="iconify iconify--simple-icons w-[16px] h-[16px] text-slate-500" data-icon="simple-icons:twitter" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.9 4.9 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.9 9.9 0 0 0 3.128-1.196a4.94 4.94 0 0 1-2.165 2.724A9.8 9.8 0 0 0 24 4.555a10 10 0 0 1-2.457 2.549" fill="currentColor">
</path>
</svg>
</a>
<a className="glass flex items-center justify-center hover:text-white hover:bg-white/10 transition text-slate-400 bg-slate-50 w-10 h-10 border-slate-300 border rounded-lg" href="#">
<svg aria-hidden="true" className="iconify iconify--simple-icons w-[16px] h-[16px] text-slate-500" data-icon="simple-icons:linkedin" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor">
</path>
</svg>
</a>
<a className="glass flex items-center justify-center hover:text-white hover:bg-white/10 transition text-slate-400 bg-slate-50 w-10 h-10 border-slate-300 border rounded-lg" href="#">
<svg aria-hidden="true" className="iconify iconify--simple-icons w-[16px] h-[16px] text-slate-500" data-icon="simple-icons:instagram" data-icon-replaced="true" height="1em" role="img" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor">
</path>
</svg>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-16">
<div className="">
<h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium" style={{}}>
                  Platform
                </h3>
<ul className="space-y-3 text-slate-500">
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Catalog
                    </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      For Enterprise
                    </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Success Stories
                    </a>
</li>
</ul>
</div>
<div className="">
<h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium" style={{}}>
                  Resources
                </h3>
<ul className="space-y-3 text-slate-500">
<li>
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Blog
                    </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Cheatsheets
                    </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Community
                    </a>
</li>
</ul>
</div>
<div>
<h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium" style={{}}>
                  Legal
                </h3>
<ul className="space-y-3 text-slate-500">
<li>
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Privacy
                    </a>
</li>
<li>
<a className="hover:text-slate-900 transition-colors duration-200 font-sans" href="#">
                      Terms
                    </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-sans" style={{}}>
            ©2025 AIBots Education Inc.
          </span>
</div>
</div>
</footer>

    </>
  );
}
