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
sans: ['Geist', 'sans-serif'],
},
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
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



// --- Spotlight Effect Logic ---
function handleSpotlight(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
}

// --- 3D Carousel Logic ---
let activeIndex = 0;
const cards = document.querySelectorAll('.carousel-card');

function rotateCarousel(direction) {
    if (direction === 1) {
        activeIndex = (activeIndex + 1) % cards.length;
    } else {
        activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    }
    updateCards();
}

function updateCards() {
    cards.forEach((card, index) => {
        // Reset classes
        card.className = 'carousel-card glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2 lg:w-3/4';
        
        if (index === activeIndex) {
            card.classList.add('active');
        } else if (index === (activeIndex + 1) % cards.length) {
            card.classList.add('next');
        } else {
            card.classList.add('prev');
        }
    });
}

// Initialize Carousel state
updateCards();

// --- Scroll To Top Logic ---
const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.remove('translate-y-20', 'opacity-0');
    } else {
        scrollBtn.classList.add('translate-y-20', 'opacity-0');
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
      

<div className="fixed grid-lines w-full h-full top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">

<aside className="lg:w-64 lg:fixed lg:h-screen flex flex-col glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:border-r w-full z-50 border-gray-200/50 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="mb-12 animate-clip-in" style={{animationDelay: '0.1s'}}>
<a className="block text-3xl tracking-tighter font-medium group font-geist" href="#" style={{}}>
        start<span className="group-hover:text-gray-900 transition-colors font-geist text-gray-400" style={{}}>.agency</span>
</a>
</div>
<nav className="space-y-4 animate-clip-in" style={{animationDelay: '0.2s'}}>
<a className="block text-lg font-medium hover:translate-x-1 transition-transform text-gray-900 font-poppins" href="#" style={{}}>Home</a>
<a className="block hover:translate-x-1 transition-all hover:text-gray-900 text-lg text-gray-500 font-poppins" href="#" style={{}}>Work</a>
<a className="block hover:translate-x-1 transition-all hover:text-gray-900 text-lg text-gray-500 font-poppins" href="#" style={{}}>Services</a>
<a className="block text-lg text-gray-500 hover:translate-x-1 transition-all hover:text-gray-900 font-poppins" href="#" style={{}}>Pricing</a>
<a className="block hover:translate-x-1 transition-all text-lg text-gray-500 hover:text-gray-900 font-poppins" href="#" style={{}}>Contact</a>
</nav>
</div>
<div className="hidden lg:block space-y-2 animate-clip-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-2 mb-4">
<img alt="User" className="w-8 h-8 rounded-full opacity-80" src="https://ui-avatars.com/api/?name=Start+Agency&amp;background=random&amp;color=fff"/>
<div className="text-sm leading-tight">
<p className="font-medium text-gray-900 font-poppins" style={{}}>start.agency</p>
<p className="text-gray-500 font-poppins" style={{}}>@startagency</p>
</div>
</div>
<p className="text-xs text-gray-400 font-poppins" style={{}}>Template designed by François Savard from END Agency.</p>
</div>
</aside>

<main className="flex-1 lg:ml-64 lg:p-16 flex flex-col gap-20 lg:gap-12 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-20 gap-y-20">

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
<div className="animate-clip-in lg:col-span-7 pb-4 space-y-8" style={{animationDelay: '0.4s'}}>
<h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium tracking-tight font-geist text-gray-900" style={{}}>Design partner for startups that move fast and ship right.</h1>
<p className="leading-snug lg:text-base text-xl font-normal text-gray-500 font-poppins" style={{}}>
      We help founders turn messy ideas into products people actually use.
      Product, brand, and web design. One team. Zero friction.
    </p>
<button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full mt-1 mb-1 relative">
<span className="button-text relative block select-none font-medium text-base tracking-tight px-6 py-3.5 text-gray-800 font-poppins" style={{fontSize: '18px'}}>
              Design with us
          </span>

<div className="button-shine"></div>
</button>
<style className="">
      @property --angle-1 {
        syntax: "<angle>";
        inherits: false;
        initial-value: -75deg;
      }

      @property --angle-2 {
        syntax: "<angle>";
        inherits: false;
        initial-value: -45deg;
      }

      body {
        font-family: 'Inter', sans-serif;
        font-size: clamp(2rem, 4vw, 5rem);
      }

      .button-wrap {
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button {
        background: linear-gradient(-75deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05));
        box-shadow:
          inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
          inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
          0 0.25em 0.125em -0.125em rgba(0, 0, 0, 0.2),
          0 0 0.1em 0.25em rgba(255, 255, 255, 0.2) inset,
          0 0 0 0 rgba(255, 255, 255, 1);
        backdrop-filter: blur(clamp(1px, 0.125em, 4px));
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover {
        transform: scale(0.975);
        backdrop-filter: blur(0.01em);
        box-shadow:
          inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
          inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
          0 0.15em 0.05em -0.1em rgba(0, 0, 0, 0.25),
          0 0 0.05em 0.1em rgba(255, 255, 255, 0.5) inset,
          0 0 0 0 rgba(255, 255, 255, 1);
      }

      .glass-button:active {
        transform: scale(0.95) rotate3d(1, 0, 0, 25deg);
        box-shadow:
          inset 0 0.125em 0.125em rgba(0, 0, 0, 0.05),
          inset 0 -0.125em 0.125em rgba(255, 255, 255, 0.5),
          0 0.125em 0.125em -0.125em rgba(0, 0, 0, 0.2),
          0 0 0.1em 0.25em rgba(255, 255, 255, 0.2) inset,
          0 0.225em 0.05em 0 rgba(0, 0, 0, 0.05),
          0 0.25em 0 0 rgba(255, 255, 255, 0.75),
          inset 0 0.25em 0.05em 0 rgba(0, 0, 0, 0.15);
      }

      .button-text {
        text-shadow: 0em 0.25em 0.05em rgba(0, 0, 0, 0.1);
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover .button-text {
        text-shadow: 0.025em 0.025em 0.025em rgba(0, 0, 0, 0.12);
      }

      .glass-button:active .button-text {
        text-shadow: 0.025em 0.25em 0.05em rgba(0, 0, 0, 0.12);
      }

      .button-shadow {
        filter: blur(clamp(2px, 0.125em, 12px));
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .button-shadow::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 999px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1));
        width: calc(100% - 2em);
        height: calc(100% - 2em);
        top: -0.5em;
        left: -0.875em;
        padding: 0.125em;
        box-sizing: border-box;
        opacity: 1;
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover+.button-shadow {
        filter: blur(clamp(2px, 0.0625em, 6px));
      }

      .glass-button:hover+.button-shadow::after {
        top: -0.875em;
        opacity: 1;
      }

      .glass-button:active+.button-shadow {
        filter: blur(clamp(2px, 0.125em, 12px));
      }

      .glass-button:active+.button-shadow::after {
        top: -0.5em;
        opacity: 0.75;
      }

      .glass-button::after {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 999px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        top: -1px;
        left: -1px;
        padding: 1px;
        box-sizing: border-box;
        background:
          conic-gradient(from var(--angle-1) at 50% 50%, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 5% 40%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 60% 95%, rgba(0, 0, 0, 0.5)),
          linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
        mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
        mask-composite: exclude;
        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1), --angle-1 500ms ease;
        box-shadow: inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
      }

      .glass-button:hover::after {
        --angle-1: -125deg;
      }

      .glass-button:active::after {
        --angle-1: -75deg;
      }

      .button-shine {
        position: absolute;
        inset: 0;
        border-radius: 999px;
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        top: 0.5px;
        left: 0.5px;
        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 40% 50%, rgba(255, 255, 255, 0) 55%);
        mix-blend-mode: screen;
        pointer-events: none;
        background-size: 200% 200%;
        background-position: 0% 50%;
        background-repeat: no-repeat;
        transition: background-position 500ms cubic-bezier(0.25, 1, 0.5, 1), --angle-2 500ms cubic-bezier(0.25, 1, 0.5, 1);
      }

      .glass-button:hover .button-shine {
        background-position: 25% 50%;
      }

      .glass-button:active .button-shine {
        background-position: 50% 15%;
        --angle-2: -15deg;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
    </style>
<section className="animate-fade-up w-full my-6 space-y-2" style={{animationDelay: '0.6s'}}>
<p className="text-base text-gray-500 font-poppins" style={{}}>Trusted by startups that raised millions and globally
        recognized
        brands</p>
<div className="overflow-hidden mask-image-gradient w-full relative gap-x-4 gap-y-4">

<div className="z-10 bg-gradient-to-r to-transparent w-32 h-full absolute top-0 left-0 from-gray-100"></div>
<div className="bg-gradient-to-l to-transparent w-32 h-full z-10 absolute top-0 right-0 from-gray-100"></div>
<div className="flex w-max animate-marquee hover:pause-animation">

<div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-2">
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center bg-gray-50" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '111.5px', '--mouse-y': '68px'}}>
<svg className="opacity-80 w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="logitech" height="96" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center bg-gray-50" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '155.5px', '--mouse-y': '75px'}}>
<svg className="opacity-80 w-[96px] h-[96px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="samsung" height="96" strokeWidth="2" style={{width: '96px', height: '96px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center bg-gray-50" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '114.5px', '--mouse-y': '50px'}}>
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="lenovo" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21.044 12.288c0 .5-.343.867-.815.867c-.464 0-.827-.38-.827-.867c0-.51.343-.868.815-.868c.464 0 .827.381.827.868m-14.305-.92a.79.79 0 0 0-.651.307a1 1 0 0 0-.172.738l1.479-.614a.71.71 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868c0 .486.364.867.828.867c.472 0 .815-.368.815-.867c0-.487-.363-.868-.827-.868M24 7.997v8.006H0V7.997zM5.01 13.05H3.088V9.825H2.23v4.003h2.78zm1.137-.094l2.163-.897a1.67 1.67 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505c-.931 0-1.633.686-1.633 1.593c0 .93.704 1.593 1.726 1.593c.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326c-.292 0-.52-.09-.682-.25m5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651c.35 0 .712.243.712.651v1.753h.847zm3.647.37c0-.904-.725-1.593-1.65-1.593c-.933 0-1.663.7-1.663 1.593c0 .903.726 1.592 1.651 1.592c.932 0 1.662-.7 1.662-1.592m2.066 1.54l1.268-3.081h-.967l-.765 2.099l-.765-2.1h-.966l1.268 3.081zm4.449-1.54c0-.904-.725-1.593-1.65-1.593c-.932 0-1.662.7-1.662 1.593c0 .903.725 1.592 1.65 1.592c.932 0 1.662-.7 1.662-1.592" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center bg-gray-50" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '168.5px', '--mouse-y': '68.3125px'}}>
<svg className="opacity-80 w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="vercel" height="96" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center bg-gray-50" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '125.5px', '--mouse-y': '94.3125px'}}>
<svg className="opacity-80 w-[48px] h-[48px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="stripe" height="96" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '62.5px', '--mouse-y': '3.3125px'}}>
<svg className="opacity-80 w-[48px] h-[48px] z-10" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="notion" height="96" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="flex items-center gap-4 lg:gap-8 px-4">
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="logitech" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364" fill="currentColor">
</path>
</svg>
</div>
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="samsung" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253" fill="currentColor">
</path>
</svg>
</div>
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="lenovo" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="M21.044 12.288c0 .5-.343.867-.815.867c-.464 0-.827-.38-.827-.867c0-.51.343-.868.815-.868c.464 0 .827.381.827.868m-14.305-.92a.79.79 0 0 0-.651.307a1 1 0 0 0-.172.738l1.479-.614a.71.71 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868c0 .486.364.867.828.867c.472 0 .815-.368.815-.867c0-.487-.363-.868-.827-.868M24 7.997v8.006H0V7.997zM5.01 13.05H3.088V9.825H2.23v4.003h2.78zm1.137-.094l2.163-.897a1.67 1.67 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505c-.931 0-1.633.686-1.633 1.593c0 .93.704 1.593 1.726 1.593c.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326c-.292 0-.52-.09-.682-.25m5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651c.35 0 .712.243.712.651v1.753h.847zm3.647.37c0-.904-.725-1.593-1.65-1.593c-.933 0-1.663.7-1.663 1.593c0 .903.726 1.592 1.651 1.592c.932 0 1.662-.7 1.662-1.592m2.066 1.54l1.268-3.081h-.967l-.765 2.099l-.765-2.1h-.966l1.268 3.081zm4.449-1.54c0-.904-.725-1.593-1.65-1.593c-.932 0-1.662.7-1.662 1.593c0 .903.725 1.592 1.65 1.592c.932 0 1.662-.7 1.662-1.592" fill="currentColor">
</path>
</svg>
</div>
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="vercel" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
</div>
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="stripe" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor">
</path>
</svg>
</div>
<div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card" onmousemove="handleSpotlight(event)">
<svg className="opacity-80 text-neutral-900" data-icon-set="simple-icons" data-simple-icons="notion" height="96" style={{}} viewbox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg">
<path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor">
</path>
</svg>
</div>
</div>
</div>
</div>
</section>
</div>
<div className="lg:col-span-4 flex flex-col animate-clip-in border rounded-3xl pt-2 pr-2 pb-2 pl-2 space-y-8 gap-x-12 gap-y-12 justify-between bg-green-50 border-green-200" style={{animationDelay: '0.5s', height: 'fit-content'}}>
<div className="aspect-[16/9] overflow-hidden w-full border rounded-2xl relative gap-x-12 gap-y-12 border-green-200" style={{padding: '176.75% 0 0 0', position: 'relative'}}>
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="absolute inset-0 h-full w-full border-0 rounded-2xl" data-ready="true" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1147300181?autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;transparent=0&amp;title=0&amp;byline=0&amp;portrait=0" title="Start agency template"></iframe>
</div>

</div>
</section>


<section className="animate-fade-up w-full pt-12 pb-12 relative" style={{animationDelay: '0.8s'}}>
<div className="flex mb-12 pr-2 pl-2 items-end justify-between">
<h2 className="lg:text-5xl text-4xl font-medium tracking-tight font-geist text-gray-900" style={{}}>Featured Work
      </h2>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-gray-300 hover:bg-white hover:border-gray-400" onclick="rotateCarousel(-1)">
<svg className="text-xl" data-icon-set="solar" data-solar="arrow-left-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-gray-300 hover:bg-white hover:border-gray-400" onclick="rotateCarousel(1)">
<svg className="text-xl" data-icon-set="solar" data-solar="arrow-right-linear" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
<div className="carousel-container flex w-full h-[500px] relative items-center justify-center">

<div className="carousel-card glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2 lg:w-3/4 active" id="card-0" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '909.5px', '--mouse-y': '274.96875px'}}>
<div className="w-full h-full rounded-2xl overflow-hidden relative group bg-gray-50">

<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
<span className="backdrop-blur px-3 py-1 rounded-full text-xs font-medium border bg-white/80 border-black/5 font-poppins" style={{}}>Fintech Dashboard</span>
</div>
<div className="flex bg-gradient-to-br w-full h-full gap-x-4 gap-y-4 items-center justify-center from-gray-100 to-gray-200">
<div className="flex flex-col gap-4 transform group-hover:scale-[1.02] transition-transform duration-500 bg-center w-[80%] h-[70%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c053fe9-7127-4df7-ae87-36ae206fe067_1600w.jpg)] bg-cover border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl gap-x-4 gap-y-4 bg-white border-gray-100">
</div>
</div>
</div>
</div>

<div className="carousel-card glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2 lg:w-3/4 next" id="card-1" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '4.7427978515625px', '--mouse-y': '141.655029296875px'}}>
<div className="w-full h-full rounded-2xl overflow-hidden relative group bg-gray-50">
<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
<span className="backdrop-blur px-3 py-1 rounded-full text-xs font-medium border bg-white/80 border-black/5 font-poppins" style={{}}>Mobile Health App</span>
</div>
<div className="flex bg-gradient-to-bl w-full h-full items-center justify-center from-purple-50 to-gray-100">
<div className="flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500 bg-center w-[40%] h-[80%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0851aedf-fdcc-48be-8ea0-cd63cc04fcda_800w.jpg)] bg-cover border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-2xl bg-white border-gray-100">
<div className="mt-auto flex justify-between">
</div>
</div>
</div>
</div>
</div>

<div className="carousel-card glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2 lg:w-3/4 prev" id="card-2" onmousemove="handleSpotlight(event)" style={{'--mouse-x': '742.219482421875px', '--mouse-y': '99.342529296875px'}}>
<div className="w-full h-full rounded-2xl overflow-hidden relative group bg-gray-50">
<div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
<span className="backdrop-blur px-3 py-1 rounded-full text-xs font-medium border bg-white/80 border-black/5 font-poppins" style={{}}>SaaS Analytics</span>
</div>
<div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-gray-50 to-gray-100">
<div className="transform group-hover:scale-[1.02] transition-transform duration-500 flex w-[80%] h-[70%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51dd450a-0485-4587-89d8-c6078fb01266_1600w.jpg)] bg-cover bg-center border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl gap-x-2 gap-y-2 items-end bg-white border-gray-100">
</div>
</div>
</div>
</div>
</div>
</section>
<section className="animate-fade-up w-full pt-12 pb-12" style={{animationDelay: '0.1s'}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border rounded-3xl pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-4 bg-green-50 border-green-200">

<div className="p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 bg-white border-gray-200/60">
<h3 className="text-2xl font-medium tracking-tight mb-2 font-geist text-gray-900" style={{}}>10 years</h3>
<p className="text-[15px] leading-relaxed text-gray-500 font-poppins" style={{}}>Designing inside real startups, not
          from the outside.
        </p>
</div>

<div className="p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 bg-white border-gray-200/60">
<h3 className="text-2xl font-medium tracking-tight mb-2 font-geist text-gray-900" style={{}}>300+ websites</h3>
<p className="text-[15px] leading-relaxed text-gray-500 font-poppins" style={{}}>SaaS, fintech, AI, consumer, B2B.
        </p>
</div>

<div className="p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 bg-white border-gray-200/60">
<h3 className="text-2xl font-medium tracking-tight mb-2 font-geist text-gray-900" style={{}}>$S 10 mil value</h3>
<p className="text-[15px] leading-relaxed text-gray-500 font-poppins" style={{}}>Across companies we’ve helped design
          and launch.</p>
</div>

<div className="p-6 rounded-2xl border shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300 bg-white border-gray-200/60">
<h3 className="text-2xl font-medium tracking-tight mb-2 font-geist text-gray-900" style={{}}>80% clients return
        </h3>
<p className="text-[15px] leading-relaxed text-gray-500 font-poppins" style={{}}>Because good collaboration beats
          good decks.</p>
</div>
</div>
</section>
<section className="animate-scaleIn animation-delay-300 sm:pl-2 sm:pr-2 sm:pt-2 sm:pb-2 w-full max-w-none z-10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl bg-green-50 border-green-200">

<div className="flex animate-fadeInUp sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 pt-6 pr-1 pb-6 pl-1 gap-x-6 gap-y-6 items-center">
<h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl tracking-tighter font-geist text-blue-950" style={{}}>
        How we works</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px h-10 bg-gray-200" role="separator"></span>
<p className="sm:text-base text-sm tracking-tight mt-1 text-blue-950 font-poppins" style={{}}>Three simple steps to
        automate
        your content</p>
</div>
<div className="grid grid-cols-1 z-10 mt-6 relative items-stretch gap-x-2 lg:grid-cols-12 sm:gap-2 sm:mt-8">

<div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col h-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-white border-gray-200">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-gray-200 bg-white text-gray-800 font-poppins" style={{}}>STEP 1</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden bg-gray-100 border-gray-200">
<div className="absolute inset-0 p-4 sm:p-6">

<div className="border rounded-xl p-4 w-full shadow-2xl bg-white/90 border-gray-200">
<div className="flex items-center gap-2 mb-3">
<svg className="w-4 h-4 text-emerald-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline className="" points="14,2 14,8 20,8"></polyline>
<line className="" x1="16" x2="8" y1="13" y2="13"></line>
<line className="" x1="16" x2="8" y1="17" y2="17"></line>
<polyline className="" points="10,9 9,9 8,9"></polyline>
</svg>
<div className="h-2 w-24 rounded bg-gray-900"></div>
</div>
<div className="h-2 w-full rounded mb-2 bg-gray-100"></div>
<div className="h-2 w-4/5 rounded mb-2 bg-gray-100"></div>
<div className="h-2 w-3/4 rounded mb-3 bg-gray-100"></div>
<div className="flex gap-2">
<div className="h-6 w-16 rounded-lg flex items-center justify-center bg-purple-100">
<div className="h-1 w-8 rounded bg-purple-600"></div>
</div>
<div className="h-6 w-20 rounded-lg bg-gray-100"></div>
</div>
</div>

</div>
</div>

<h3 className="sm:text-4xl text-3xl tracking-tighter mt-6 font-geist text-gray-900" style={{}}>Kickoff &amp;
          alignment</h3>
<p className="sm:text-base text-sm tracking-tight max-w-[52ch] mt-2 text-gray-600 font-poppins" style={{}}>Goals,
          constraints,
          timelines. No guessing.</p>
</div>

<div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col h-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-white border-gray-200">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-gray-200 bg-white text-gray-800 font-poppins" style={{}}>STEP 2</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden bg-gradient-to-br p-4 border-gray-200 from-gray-50 to-gray-100">
<div className="grid grid-cols-2 gap-3 h-full">

<div className="border rounded-lg p-3 shadow-sm bg-white border-gray-200">
<div className="flex items-center gap-2 mb-2">
<svg className="text-blue-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<div className="h-1.5 w-12 rounded bg-purple-600"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-gray-200"></div>
<div className="h-1 w-4/5 rounded bg-gray-200"></div>
<div className="h-1 w-3/4 rounded bg-gray-200"></div>
</div>
</div>
<div className="border rounded-lg p-3 shadow-sm bg-white border-gray-200">
<div className="flex items-center gap-2 mb-2">
<svg className="text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line className="" x1="8" x2="16" y1="21" y2="21"></line>
<line className="" x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<div className="h-1.5 w-10 rounded bg-purple-600"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-gray-200"></div>
<div className="h-1 w-5/6 rounded bg-gray-200"></div>
<div className="h-1 w-2/3 rounded bg-gray-200"></div>
</div>
</div>
<div className="border rounded-lg p-3 shadow-sm bg-white border-gray-200">
<div className="flex items-center gap-2 mb-2">
<svg className="text-purple-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
<path className="" d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
</svg>
<div className="h-1.5 w-14 rounded bg-blue-600"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-gray-200"></div>
<div className="h-1 w-4/5 rounded bg-gray-200"></div>
<div className="h-1 w-3/5 rounded bg-gray-200"></div>
</div>
</div>
<div className="border rounded-lg p-3 shadow-sm bg-white border-gray-200">
<div className="flex items-center gap-2 mb-2">
<svg className="text-orange-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 4l11.733 16h4.267l-11.733-16z"></path>
<path className="" d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"></path>
</svg>
<div className="h-1.5 w-8 rounded bg-gray-600"></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full rounded bg-gray-200"></div>
<div className="h-1 w-3/4 rounded bg-gray-200"></div>
<div className="h-1 w-4/5 rounded bg-gray-200"></div>
</div>
</div>
</div>

</div>

<h3 className="sm:text-4xl text-3xl tracking-tighter mt-6 font-geist text-gray-900" style={{}}>Design &amp;
          iteration</h3>
<p className="sm:text-base text-sm tracking-tight max-w-[52ch] mt-2 text-gray-600 font-poppins" style={{}}>Fast
          cycles,
          constant
          feedback, real collaboration.</p>
</div>

<div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col h-full border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-white border-gray-200">
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-tight border-gray-200 bg-white text-gray-800 font-poppins" style={{}}>STEP 3</span>

<div className="relative h-48 sm:h-56 rounded-2xl border overflow-hidden p-4 bg-gray-100 border-gray-200">
<div className="w-full h-full rounded-xl overflow-hidden border p-3 bg-white border-gray-200">

<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg flex items-center justify-center bg-purple-100">
<svg className="text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 3v5h5"></path>
<path className="" d="M21 12A9 9 0 0 0 6 2.3L3 8"></path>
<path className="" d="M21 21v-5h-5"></path>
<path className="" d="M3 12a9 9 0 0 0 15 6.7L21 16"></path>
</svg>
</div>
<div className="h-2 w-16 rounded bg-gray-900"></div>
</div>
<div className="w-4 h-4 rounded-full bg-purple-400"></div>
</div>

<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-purple-50 border-purple-200">
<svg className="mx-auto mb-1 text-blue-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<div className="h-1 w-8 rounded mx-auto bg-purple-600"></div>
</div>
<div className="border rounded p-2 text-center bg-purple-50 border-purple-200">
<svg className="mx-auto mb-1 text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="M6 8l6 4 6-4"></path>
</svg>
<div className="h-1 w-6 rounded mx-auto bg-purple-600"></div>
</div>
<div className="border rounded p-2 text-center bg-blue-50 border-blue-200">
<svg className="mx-auto mb-1 text-purple-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line className="" x1="8" x2="16" y1="21" y2="21"></line>
<line className="" x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<div className="h-1 w-10 rounded mx-auto bg-blue-600"></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-purple-50 border-purple-200">
<svg className="mx-auto mb-1 text-blue-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<div className="h-1 w-8 rounded mx-auto bg-purple-600"></div>
</div>
<div className="text-center border rounded pt-2 pr-2 pb-2 pl-2 bg-purple-50 border-purple-200">
<svg className="mx-auto mb-1 text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
<path className="" d="M6 8l6 4 6-4"></path>
</svg>
<div className="h-1 w-6 rounded mx-auto bg-purple-600"></div>
</div>
<div className="border rounded p-2 text-center bg-blue-50 border-blue-200">
<svg className="mx-auto mb-1 text-purple-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line className="" x1="8" x2="16" y1="21" y2="21"></line>
<line className="" x1="12" x2="12" y1="17" y2="21"></line>
</svg>
<div className="h-1 w-10 rounded mx-auto bg-blue-600"></div>
</div>
</div>

</div>
</div>

<h3 className="sm:text-4xl text-3xl tracking-tighter mt-6 font-geist text-gray-900" style={{}}>Delivery &amp;
          handoff</h3>
<p className="sm:text-base text-sm tracking-tight max-w-[52ch] mt-2 text-gray-600 font-poppins" style={{}}>Clean
          files, clear
          logic, dev-ready output.</p>
</div>
</div>
</section>
<div className="flex flex-col z-10 w-full mt-20 mr-auto mb-20 ml-auto relative">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 mb-4 gap-x-4 gap-y-4">

<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="text-blue-100">
<svg aria-hidden="true" className="w-[28px] h-[28px]" data-icon-replaced="true" height="28" role="img" strokeWidth="2" style={{width: '28px', height: '28px', color: '#999999'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" fill="currentColor" opacity=".5">
</path>
<path className="" d="M12 6a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 1-1" fill="currentColor">
</path>
</svg>
</div>
<p className="leading-relaxed text-base text-blue-900 font-poppins" style={{}}>
          Your learning path adapts based on progress and skill assessments.
        </p>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4">
<div className="text-blue-100">
<svg aria-hidden="true" className="w-[28px] h-[28px]" data-icon-replaced="true" height="28" role="img" strokeWidth="2" style={{width: '28px', height: '28px', color: '#999'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path>
<path className="" d="M12 7.75a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8.5a.75.75 0 0 1 .75-.75" fill="currentColor">
</path>
</svg>
</div>
<p className="leading-relaxed text-base font-medium font-normal text-blue-900 font-poppins" style={{}}>
          The system knows when to push or hold back — based on mastery zones.
        </p>
</div>

<div className="flex flex-col gap-4">
<div className="text-blue-900">
<svg aria-hidden="true" className="w-[28px] h-[28px]" data-icon-replaced="true" height="28" role="img" strokeWidth="2" style={{width: '28px', height: '28px', color: '#999'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path>
<path className="" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l4.47-4.47a.75.75 0 0 1 1.06 0" fill="currentColor">
</path>
</svg>
</div>
<p className="leading-relaxed text-base font-medium font-normal text-blue-900 font-poppins" style={{}}>
          No more switching platforms. Theory, practice, and labs unified.
        </p>
</div>

<div className="flex flex-col gap-4">
<div className="text-blue-900">
<svg aria-hidden="true" className="w-[28px] h-[28px]" data-icon-replaced="true" height="28" role="img" strokeWidth="2" style={{color: '#999', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M19.83 8.7L12 2.1a.08.08 0 0 0-.07 0L4.17 8.7A1 1 0 0 0 4 9.6V20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9.6a1 1 0 0 0-.17-.9" fill="currentColor" opacity=".5"></path>
<path className="" d="M12.75 18a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 1.5 0z" fill="currentColor"></path>
</svg>
</div>
<p className="leading-relaxed text-base font-medium font-normal text-blue-900 font-poppins" style={{}}>
          Portfolio, skills, and credentials tracked. Always know your value.
        </p>
</div>
</div>

<div className="overflow-hidden min-h-[500px] lg:min-h-[600px] rounded-[2rem] relative shadow-2xl shadow-blue-900/30 bg-blue-900">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="grid grid-cols-1 min-h-[500px] h-full relative gap-y-3 lg:grid-cols-1 lg:min-h-[600px]">

<div className="flex flex-col md:p-12 lg:p-16 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5387a0b-52c6-40c2-b3be-ef86329b19cc_1600w.webp)] bg-cover pt-8 pr-8 pb-8 pl-8 saturate-50 justify-center">
<p className="leading-relaxed text-base font-medium mb-2 text-blue-50 font-poppins" style={{}}>Case study - Workly
          </p>
<h2 className="leading-tight md:text-4xl lg:text-5xl text-2xl font-normal tracking-tight mb-8 font-geist default" style={{}}>
            Redesigned
            product UX and brand positioning after poor early adoption.
            Result: clearer value proposition, higher retention, stronger sales demos.</h2>
<button className="group flex items-center gap-3 transition-all text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-white hover:bg-blue-100 text-blue-900">
<span className="font-poppins" style={{}}>Read more</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>

<div className="mt-12 pt-8 border-t border-white/10">
<p className="text-xs uppercase tracking-widest mb-4 font-medium text-white/50 font-poppins" style={{}}>Trusted by
              teams at
            </p>
<div className="flex flex-wrap items-center gap-6 opacity-60">

<svg className="w-[100px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linear" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '100px', height: '20px'}} viewbox="0 0 512 127.964" width="100" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m4.086 51.292l72.586 72.587c1.06 1.06.549 2.859-.924 3.134a64 64 0 0 1-7.508.947a1.9 1.9 0 0 1-1.46-.554L.558 61.184a1.9 1.9 0 0 1-.554-1.46c.17-2.546.489-5.051.948-7.507c.275-1.473 2.074-1.984 3.134-.925M2.04 80.682c-.484-1.806 1.65-2.946 2.973-1.623l43.893 43.893c1.322 1.322.183 3.457-1.624 2.972c-22.009-5.9-39.34-23.233-45.242-45.242m6.362-48.609c.616-1.067 2.073-1.23 2.945-.36l84.904 84.905c.871.871.708 2.328-.36 2.945a64 64 0 0 1-5.548 2.851a1.885 1.885 0 0 1-2.11-.394L5.945 39.732a1.885 1.885 0 0 1-.395-2.11a64 64 0 0 1 2.852-5.549M63.912 0c35.375 0 64.052 28.677 64.052 64.052c0 18.78-8.081 35.672-20.957 47.387c-.743.677-1.883.632-2.594-.079L16.604 23.551a1.88 1.88 0 0 1-.079-2.594C28.241 8.082 45.133 0 63.912 0m194.14 35.248c4.591 0 8.313-3.735 8.313-8.343s-3.722-8.343-8.313-8.343c-4.59 0-8.312 3.735-8.312 8.343c0 4.507 3.561 8.18 8.014 8.338zm-71.202 72.761V18.567h14.773v76.356h39.83v13.086zm105.144-36.497v36.497H277.7V44.62h14.115v10.865l.179-.12q2.153-5.102 6.938-8.524q4.784-3.482 12.201-3.482q6.578 0 11.961 2.942q5.383 2.88 8.612 8.464q3.23 5.583 3.23 13.686v39.56h-14.294V70.43q0-7.203-3.828-10.925q-3.766-3.781-10.108-3.782q-4.066 0-7.415 1.681q-3.35 1.68-5.323 5.163q-1.974 3.48-1.974 8.944m147.608-28.154q5.98 0 10.764 1.561q4.786 1.5 8.134 4.322q3.41 2.821 5.204 6.664q1.793 3.84 1.794 8.464v43.64h-13.696v-8.944h-.239q-1.435 2.701-3.888 4.982q-2.392 2.282-6.1 3.662q-3.708 1.32-8.912 1.32q-6.338 0-11.243-2.1q-4.904-2.16-7.775-6.363q-2.87-4.263-2.87-10.565q0-5.463 2.033-8.944a15.7 15.7 0 0 1 5.502-5.583q3.529-2.1 8.014-3.182q4.485-1.08 9.33-1.62l2.647-.301q4.076-.472 6.684-.84q3.467-.48 4.904-1.5q1.494-1.022 1.495-3.182v-.48q0-2.881-1.436-5.043q-1.436-2.16-4.126-3.421q-2.632-1.26-6.4-1.261t-6.638 1.26q-2.871 1.2-4.546 3.362a9.16 9.16 0 0 0-1.914 4.922h-13.816q.3-5.882 3.648-10.565q3.35-4.681 9.271-7.443q5.981-2.822 14.175-2.822m11.84 34.037q-.582.426-1.783.806l-.31.094q-1.374.42-3.348.84l-4.246.78q-2.274.361-4.666.721q-3.29.42-6.1 1.501t-4.546 2.941q-1.674 1.86-1.674 4.863q0 3.84 3.05 6.063q3.05 2.16 8.195 2.16q5.082 0 8.552-1.86q3.468-1.92 5.142-4.983q1.735-3.12 1.735-6.843zm26.527 30.614V44.62h13.755v10.445h.18q1.735-5.403 5.442-8.224q3.768-2.88 9.869-2.881q1.496 0 2.69.12l1.49.08q.326.02.605.04v12.906l-.322-.046a67 67 0 0 0-2.429-.254a46 46 0 0 0-4.187-.18q-3.529 0-6.46 1.62q-2.93 1.622-4.664 4.983q-1.675 3.301-1.675 8.344v36.437zm-227.094 0V44.62h14.294v63.39zM374.38 43.18q6.758 0 12.26 2.4q5.564 2.401 9.51 6.844q3.947 4.382 6.1 10.445q2.153 6.003 2.154 13.326v3.842h-45.976q.165 4.962 1.957 8.884q1.974 4.263 5.742 6.663q3.827 2.402 9.15 2.402q3.947 0 6.938-1.201q2.99-1.2 4.963-3.302a12.9 12.9 0 0 0 2.932-4.982h13.456q-1.196 6.183-5.203 10.925q-4.007 4.683-10.048 7.384q-5.98 2.64-13.277 2.641q-9.45 0-16.328-4.262q-6.877-4.261-10.585-11.706q-3.709-7.503-3.709-17.108q0-9.665 3.828-17.168T358.83 47.44q6.76-4.261 15.55-4.262m.179 11.525q-4.904 0-8.553 2.221q-3.586 2.22-5.62 6.303q-1.452 2.956-1.836 6.723h32.078q-.384-3.766-1.834-6.723q-1.974-4.082-5.622-6.303q-3.649-2.22-8.613-2.221" fill="#ffffff">
</path>
</svg>

<svg className="w-[80px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="zendesk" height="20" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '80px', height: '20px'}} viewbox="0 0 512 99" width="80" xmlns="http://www.w3.org/2000/svg">
<path d="M340.962 29.149c21.899 0 34.319 16.728 33.204 39.946h-51.657c1.49 9.834 10.433 16.77 20.328 15.765a25.35 25.35 0 0 0 18.199-7.097l9.073-2.906c6.039-1.936 10.457-7.618 10.457-14.332 0-8.312-6.736-15.049-15.048-15.049zM100.232 29.149c-8.312 0-15.049 6.737-15.049 15.049 0 6.714 4.418 12.396 10.457 14.332l9.073 2.906c2.979.954 5.514 4.128 5.514 7.747 0 4.542-3.693 8.235-8.235 8.235h-38.922c-5.839 0-10.706-3.882-12.448-9.206l-8.983 3.01c2.873 8.783 11.082 15.196 20.895 15.196h40.093c9.501 0 17.235-7.733 17.235-17.235 0-9.48-6.643-17.779-15.955-19.829l-9.091-2.002c-3.037-.669-5.189-3.376-5.189-6.492 0-3.352 2.727-6.078 6.078-6.078h33.844c5.16 0 9.539 3.125 11.554 7.662l8.286-3.682c-3.344-7.527-10.875-12.713-19.64-12.713h-34.908z" fill="#ffffff"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-auto border-t border-gray-200/60 pt-16 pb-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2 space-y-6">
<a className="block text-2xl tracking-tighter font-medium font-geist text-gray-900" href="#" style={{}}>
          start<span className="text-gray-400" style={{}}>.agency</span>
</a>
<p className="text-gray-500 font-geist max-w-sm" style={{}}>
          We build digital products that define categories. 
          Based in San Francisco, working globally.
        </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:github"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:linkedin"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-6 font-geist text-gray-900" style={{}}>Sitemap</h4>
<ul className="space-y-3 font-geist text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Work</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Services</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Agency</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 font-geist text-gray-900" style={{}}>Legal</h4>
<ul className="space-y-3 font-geist text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Terms of Service</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-400 font-geist">
<p className="font-poppins" style={{}}>© 2024 Start Agency Inc. All rights reserved.</p>
<p className="font-poppins" style={{}}>Designed with craft in California.</p>
</div>
</footer>
</main>
</div>

<button aria-label="Scroll to top" className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass-panel shadow-lg transition-all duration-500 hover:scale-110 focus:outline-none" id="scrollToTop">
<svg className="text-gray-800" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>


    </>
  );
}
