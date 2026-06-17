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
// Custom Palette based on Dark Green and Yellow
bhoomi: {
green: '#0f3d26',     // Dark Green (Primary Brand)
lightGreen: '#e6f2eb', // Light tint for backgrounds
yellow: '#facc15',    // Bright Yellow (Accent/Buttons)
gold: '#ca8a04',      // Darker Yellow for text/borders
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
      

<nav className="fixed top-0 w-full z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 bg-bhoomi-green rounded-lg shadow-sm flex items-center justify-center text-bhoomi-yellow group-hover:bg-gray-900 transition-colors">
<iconify-icon icon="solar:leaf-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-bold tracking-tight text-bhoomi-green leading-none font-sans">
                BHOOMI AGRO
              </span>
<span className="text-[10px] font-medium tracking-widest text-bhoomi-gold uppercase font-sans">
                Company
              </span>
</div>
</div>

<div className="hidden md:flex items-center space-x-1 bg-gray-100/50 p-1 rounded-full border border-gray-200">
<button className="px-5 py-2 text-xs font-semibold text-bhoomi-green bg-bhoomi-yellow rounded-full shadow-sm font-sans">
              Products
            </button>
<button className="px-5 py-2 text-xs font-medium text-gray-600 hover:text-bhoomi-green transition-colors font-sans">
              Suppliers
            </button>
<button className="px-5 py-2 text-xs font-medium text-gray-600 hover:text-bhoomi-green transition-colors font-sans">
              Contact
            </button>
</div>

<div className="flex items-center gap-4">
<div className="flex flex-col items-end hidden lg:flex">
<a className="text-xs font-bold text-bhoomi-green flex items-center gap-1 hover:text-bhoomi-gold transition-colors font-sans" href="tel:+919448342905">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
                09448342905
              </a>
<span className="text-[10px] text-gray-400 font-sans">
                Call for Bulk Orders
              </span>
</div>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-xs font-bold rounded-full hover:bg-bhoomi-green transition-colors shadow-sm font-sans" href="https://wa.me/919448342905?text=I%20want%20to%20sell%20my%20products">
<iconify-icon icon="solar:bag-check-bold" width="16"></iconify-icon>
              Sell Your Product
            </a>
</div>
</div>
</div>
</nav>

<div className="mt-20 bg-bhoomi-green text-white py-2 overflow-hidden flex whitespace-nowrap border-b-4 border-bhoomi-yellow">
<div className="flex gap-10 items-center animate-marquee px-4 text-xs font-medium tracking-wide">
<span className="flex items-center gap-2 text-bhoomi-yellow font-sans">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
          BHOOMI AGRO COMPANY
        </span>
<span className="flex items-center gap-2 font-sans">UREA: Available</span>
<span className="flex items-center gap-2 font-sans">DAP: In Stock</span>
<span className="flex items-center gap-2 font-sans">MOP: Fast Delivery</span>
<span className="flex items-center gap-2 text-bhoomi-yellow font-sans">
          Call: 09448342905
        </span>
<span className="flex items-center gap-2 font-sans">
          Kirana Bazar Market, Vijayapura
        </span>

<span className="flex items-center gap-2 text-bhoomi-yellow font-sans">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
          BHOOMI AGRO COMPANY
        </span>
<span className="flex items-center gap-2 font-sans">UREA: Available</span>
<span className="flex items-center gap-2 font-sans">DAP: In Stock</span>
</div>
</div>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10 mb-10 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-bhoomi-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col lg:flex-row lg:items-end z-10 relative gap-x-8 gap-y-8 items-start justify-between">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-bhoomi-lightGreen text-bhoomi-green rounded-full border border-bhoomi-green/20">
<span className="w-2 h-2 rounded-full bg-bhoomi-yellow animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wide font-sans">
                Verified Distributor
              </span>
</div>
<h1 className="md:text-5xl text-bhoomi-green text-4xl tracking-tighter font-sans font-semibold" style={{}}>
              BHOOMI AGRO MARKETPLACE &amp; SERVICES
            </h1>
<div className="flex flex-col gap-1 text-sm text-gray-500 max-w-2xl">
<p className="flex items-center gap-2 font-sans">
<iconify-icon className="text-bhoomi-gold" icon="solar:map-point-linear" width="16"></iconify-icon>
                Kirana Bazar, Kirana Bazar Market, Gacchinakatti Colony,
                Vijayapura, Karnataka 586101
              </p>
<p className="flex items-center gap-2 font-medium text-gray-900 font-sans">
<iconify-icon className="text-bhoomi-gold" icon="solar:phone-linear" width="16"></iconify-icon>
                09448342905
              </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
<a className="flex-1 lg:flex-none flex justify-center items-center gap-2 px-6 py-3 text-sm font-bold text-bhoomi-green bg-bhoomi-yellow border border-bhoomi-yellow rounded-lg hover:bg-yellow-300 transition shadow-lg shadow-yellow-200/50 font-sans" href="tel:+919448342905">
<iconify-icon icon="solar:phone-calling-bold" width="18"></iconify-icon>
              Call Now
            </a>
<a className="flex-1 lg:flex-none flex justify-center items-center gap-2 hover:bg-green-900 transition shadow-green-900/20 text-sm font-bold text-white bg-bhoomi-green border-transparent border rounded-lg px-6 py-3 shadow-lg font-sans" href="https://wa.me/919448342905?text=Hello%20Bhoomi%20Agro">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
              WhatsApp
            </a>
<a className="flex-1 lg:flex-none flex justify-center items-center gap-2 hover:bg-gray-100 transition text-bhoomi-green text-sm font-bold font-sans bg-white border-gray-200 border rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="https://wa.me/919448342905?text=I%20want%20to%20book%20an%20appointment">
<iconify-icon icon="solar:calendar-add-bold" width="18"></iconify-icon>
              Appointment
            </a>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div className="bg-white p-5 rounded-xl border border-gray-200">
<h3 className="text-xs font-bold text-bhoomi-green uppercase tracking-wider mb-4 flex items-center gap-2 font-sans">
<iconify-icon icon="solar:layers-minimalistic-bold" width="14"></iconify-icon>
              Categories
            </h3>
<div className="space-y-3">
<label className="flex items-center group cursor-pointer">
<input checked="" className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Fertilizers
                </span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Seeds
                </span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Pesticides
                </span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Machinery &amp; Tools
                </span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Irrigation Systems
                </span>
</label>
<label className="flex items-center group cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div className="w-4 h-4 rounded border border-gray-300 bg-white peer-checked:bg-bhoomi-green peer-checked:border-bhoomi-green flex items-center justify-center transition-all">
<iconify-icon className="text-bhoomi-yellow opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-bhoomi-green transition-colors font-sans">
                  Cattle Feed
                </span>
</label>
</div>
</div>

<div className="bg-bhoomi-green rounded-xl p-6 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30"></div>
<iconify-icon className="text-bhoomi-yellow mb-2 relative z-10" icon="solar:medal-star-bold" width="40"></iconify-icon>
<h3 className="text-white font-bold relative z-10 font-sans">Premium Quality</h3>
<p className="text-gray-300 text-xs mt-2 relative z-10 font-sans">
              Direct from Vijayapura's trusted supplier.
            </p>
</div>
</aside>

<div className="flex-1">

<div className="flex justify-between items-center mb-6 bg-white p-3 rounded-lg border border-gray-200">
<span className="text-sm text-gray-500 font-medium ml-2 font-sans">
              Available Stock
            </span>
<div className="flex items-center gap-2">
<button className="flex items-center gap-1 text-xs font-bold bg-bhoomi-lightGreen text-bhoomi-green px-3 py-1.5 rounded-md font-sans">
                Best Selling
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl border border-gray-200 hover:border-bhoomi-yellow hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 flex flex-col overflow-hidden">
<div className="p-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-bhoomi-green text-bhoomi-yellow flex items-center justify-center border border-bhoomi-green">
<span className="font-bold text-xs font-sans">URE</span>
</div>
<div>
<h3 className="text-sm font-bold text-gray-900 group-hover:text-bhoomi-green transition-colors font-sans">
                      Premium Urea
                    </h3>
<p className="text-xs text-gray-500 font-sans">50kg Bag</p>
</div>
</div>
</div>
<div className="mx-4 h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-100">
<iconify-icon className="text-gray-300 group-hover:text-bhoomi-yellow transition-colors" icon="solar:bag-heart-linear" strokeWidth="1" width="64"></iconify-icon>
<div className="absolute top-2 left-2 bg-bhoomi-yellow px-2 py-0.5 rounded text-[10px] font-bold text-bhoomi-green shadow-sm font-sans">
                  Best Seller
                </div>
</div>
<div className="p-4 pt-4 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-gray-400 mb-0.5 font-medium font-sans">
                      Wholesale Price
                    </p>
<p className="text-lg font-bold text-bhoomi-green tracking-tight font-sans">
                      Contact Us
                    </p>
</div>
</div>
<a className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-bhoomi-green transition-colors flex items-center justify-center gap-2 font-sans" href="https://wa.me/919448342905?text=Inquiry%20about%20Urea">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                  Buy / Enquire
                </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 hover:border-bhoomi-yellow hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 flex flex-col overflow-hidden">
<div className="p-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-bhoomi-green text-bhoomi-yellow flex items-center justify-center border border-bhoomi-green">
<span className="font-bold text-xs font-sans">DAP</span>
</div>
<div>
<h3 className="text-sm font-bold text-gray-900 group-hover:text-bhoomi-green transition-colors font-sans">
                      DAP Fertilizer
                    </h3>
<p className="text-xs text-gray-500 font-sans">Standard Grade</p>
</div>
</div>
</div>
<div className="mx-4 h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-100">
<iconify-icon className="text-gray-300 group-hover:text-bhoomi-yellow transition-colors" icon="solar:box-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-4 pt-4 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-gray-400 mb-0.5 font-medium font-sans">
                      Wholesale Price
                    </p>
<p className="text-lg font-bold text-bhoomi-green tracking-tight font-sans">
                      Contact Us
                    </p>
</div>
</div>
<a className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-bhoomi-green transition-colors flex items-center justify-center gap-2 font-sans" href="https://wa.me/919448342905?text=Inquiry%20about%20DAP">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                  Buy / Enquire
                </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 hover:border-bhoomi-yellow hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 flex flex-col overflow-hidden">
<div className="p-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-bhoomi-green text-bhoomi-yellow flex items-center justify-center border border-bhoomi-green">
<span className="font-bold text-xs font-sans">NPK</span>
</div>
<div>
<h3 className="text-sm font-bold text-gray-900 group-hover:text-bhoomi-green transition-colors font-sans">
                      Complex NPK
                    </h3>
<p className="text-xs text-gray-500 font-sans">All Variants</p>
</div>
</div>
</div>
<div className="mx-4 h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-100">
<iconify-icon className="text-gray-300 group-hover:text-bhoomi-yellow transition-colors" icon="solar:leaf-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-4 pt-4 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-gray-400 mb-0.5 font-medium font-sans">
                      Wholesale Price
                    </p>
<p className="text-lg font-bold text-bhoomi-green tracking-tight font-sans">
                      Contact Us
                    </p>
</div>
</div>
<a className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-bhoomi-green transition-colors flex items-center justify-center gap-2 font-sans" href="https://wa.me/919448342905?text=Inquiry%20about%20NPK">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                  Buy / Enquire
                </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 hover:border-bhoomi-yellow hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 flex flex-col overflow-hidden">
<div className="p-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-bhoomi-green text-bhoomi-yellow flex items-center justify-center border border-bhoomi-green">
<span className="font-bold text-xs font-sans">POT</span>
</div>
<div>
<h3 className="text-sm font-bold text-gray-900 group-hover:text-bhoomi-green transition-colors font-sans">
                      Potash (MOP)
                    </h3>
<p className="text-xs text-gray-500 font-sans">Imported Quality</p>
</div>
</div>
</div>
<div className="mx-4 h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-100">
<iconify-icon className="text-gray-300 group-hover:text-bhoomi-yellow transition-colors" icon="solar:layers-linear" strokeWidth="1" width="64"></iconify-icon>
</div>
<div className="p-4 pt-4 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-gray-400 mb-0.5 font-medium font-sans">
                      Wholesale Price
                    </p>
<p className="text-lg font-bold text-bhoomi-green tracking-tight font-sans">
                      Contact Us
                    </p>
</div>
</div>
<a className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-bhoomi-green transition-colors flex items-center justify-center gap-2 font-sans" href="https://wa.me/919448342905?text=Inquiry%20about%20Potash">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                  Buy / Enquire
                </a>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 hover:border-bhoomi-yellow hover:shadow-lg hover:shadow-yellow-100 transition-all duration-300 flex flex-col overflow-hidden">
<div className="p-4 flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-bhoomi-green text-bhoomi-yellow flex items-center justify-center border border-bhoomi-green">
<span className="font-bold text-xs font-sans">ORG</span>
</div>
<div>
<h3 className="text-sm font-bold text-gray-900 group-hover:text-bhoomi-green transition-colors font-sans">
                      Organic Manure
                    </h3>
<p className="text-xs text-gray-500 font-sans">Eco-Friendly</p>
</div>
</div>
</div>
<div className="mx-4 h-32 bg-gray-50 rounded-lg flex items-center justify-center relative overflow-hidden border border-gray-100">
<iconify-icon className="text-gray-300 group-hover:text-bhoomi-yellow transition-colors" icon="solar:sprout-linear" strokeWidth="1" width="64"></iconify-icon>
<div className="absolute top-2 left-2 bg-green-100 px-2 py-0.5 rounded text-[10px] font-bold text-green-700 font-sans">
                  Bio
                </div>
</div>
<div className="p-4 pt-4 flex-1 flex flex-col">
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-gray-400 mb-0.5 font-medium font-sans">
                      Wholesale Price
                    </p>
<p className="text-lg font-bold text-bhoomi-green tracking-tight font-sans">
                      Contact Us
                    </p>
</div>
</div>
<a className="w-full py-2 bg-gray-900 text-white text-xs font-bold rounded hover:bg-bhoomi-green transition-colors flex items-center justify-center gap-2 font-sans" href="https://wa.me/919448342905?text=Inquiry%20about%20Organic">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
                  Buy / Enquire
                </a>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 rounded-2xl bg-bhoomi-green overflow-hidden relative">

<div className="absolute inset-0">
<div className="absolute top-0 right-0 w-96 h-96 bg-bhoomi-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-black/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-3xl text-white mb-4 tracking-tighter font-sans font-semibold" style={{}}>
              Visit Our Store
            </h2>
<p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
              We are located in the heart of Vijayapura. Visit us for bulk
              inquiries and direct dealership deals.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4 md:justify-start justify-center">
<div className="w-10 h-10 rounded-full bg-bhoomi-yellow text-bhoomi-green flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-sm font-sans">
                    Bhoomi Agro Company
                  </h4>
<p className="text-gray-300 text-xs font-sans">
                    Kirana Bazar, Kirana Bazar Market,
                    <br/>
                    Gacchinakatti Colony, Vijayapura, Karnataka 586101
                  </p>
</div>
</div>
<div className="flex items-center gap-4 md:justify-start justify-center">
<div className="w-10 h-10 rounded-full bg-bhoomi-yellow text-bhoomi-green flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold text-sm font-sans">Contact Number</h4>
<p className="text-white text-lg font-bold tracking-widest font-sans">
                    09448342905
                  </p>
</div>
</div>
</div>
</div>

<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 w-full md:w-80 h-64 flex flex-col items-center justify-center text-center">
<iconify-icon className="text-bhoomi-yellow mb-4" icon="solar:map-bold" width="64"></iconify-icon>
<span className="text-white font-medium text-sm font-sans">
              Vijayapura, Karnataka
            </span>
<a className="mt-4 inline-block px-4 py-2 bg-bhoomi-yellow text-bhoomi-green text-xs font-bold rounded hover:bg-white transition-colors font-sans" href="https://www.google.com/maps/search/?api=1&amp;query=Bhoomi+Agro+Company+Vijayapura" target="_blank">
              Get Directions
            </a>
</div>
</div>
</div>
</main>
<footer className="bg-white border-t border-gray-200 mt-12 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-bhoomi-green rounded flex items-center justify-center text-bhoomi-yellow">
<iconify-icon icon="solar:leaf-bold" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-gray-900 tracking-tight font-sans">
              BHOOMI AGRO COMPANY
            </p>
<p className="text-[10px] text-gray-500 font-sans">Vijayapura, Karnataka</p>
</div>
</div>
<div className="text-xs text-gray-400 font-sans">
          © 2023 Bhoomi Agro Company. All rights reserved.
        </div>
</div>
</footer>
<style>
      /* Custom animation for marquee */
      @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      }
      .animate-marquee {
          animation: marquee 30s linear infinite;
      }
      .animate-marquee:hover {
          animation-play-state: paused;
      }
    </style>

    </>
  );
}
